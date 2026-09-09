#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
data_quality_audit.py
======================
2026-09-09 신규 작성 (봄이 요청: "왜 이렇게 수정을 계속 해야되는거야 우리가 검증을 못할까?")

[배경]
지금까지 ORCL opIncome, EPS 소급 재작성, META FCF까지 세 번 연속으로 같은 "계열"의
버그가 나왔다: 한 지표를 Finnhub/SEC/Yahoo 세 소스에서 각각 받아와 "먼저 채워진 값이
있으면 안 덮어쓴다"는 규칙으로 합치는데, 어느 소스가 먼저 값을 채우느냐에 따라 더 나쁜
값이 영원히 자리를 차지하는 사고가 구조적으로 생기기 쉬운 구조였다. 지금까지는 이런
문제를 GPT 리뷰나 사람이 화면을 보다가 발견해야만 고칠 수 있었다("터진 뒤에 고치는" 구조).

이 스크립트는 그 반대 방향 - "터지기 전에 스스로 의심 지점을 찾아내는" 감사 도구다.
크게 두 부분으로 나뉜다:

  PART A. 코드 정합성 감사(static) - buy_signal_telegram.py 소스를 읽어서, 같은 지표를
          다루는 여러 필드 목록(SEC 검증 대상 / merge 시 복사되는 필드 / Yahoo 보강 대상
          필드)이 서로 빠짐없이 맞는지 점검한다. 이런 목록에 필드 하나가 빠지면 그게
          바로 "EPS가 SEC 소급 재작성 경로를 안 타던" 종류의 버그가 된다.

  PART B. 데이터 감사(dynamic) - financials_cache.json/fundamentals_cache.json을
          41개 종목 전체에 대해 훑어서, "자체 계산값(proxy)이 항상 이기고 있는 것으로
          의심되는 필드", "EPS가 액면분할 등으로 어색하게 튀는 곳", "최신 분기 데이터
          누락", "부채비율처럼 라벨과 실제 소스가 다를 수 있는 필드의 사용 현황"을
          찾아서 보고한다.

사용법:
    python data_quality_audit.py
    (buy_signal_telegram.py와 같은 폴더에서 실행. 네트워크 불필요 - 이미 있는 캐시만 읽음)

이 스크립트는 아무것도 수정하지 않는다(읽기 전용) - 발견한 항목은 사람이 검토 후
따로 고쳐야 한다. 정기적으로(예: 매번 실행 후, 또는 GPT 리뷰를 받기 전에 먼저) 돌려서
"이미 알려진 패턴"의 새로운 사례를 스스로 찾아내는 것이 목적이다.
"""

import json
import os
import re
import sys
from datetime import datetime, timezone

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SCRIPT_PATH = os.path.join(BASE_DIR, "buy_signal_telegram.py")
FINANCIALS_CACHE_PATH = os.path.join(BASE_DIR, "financials_cache.json")
FUNDAMENTALS_CACHE_PATH = os.path.join(BASE_DIR, "fundamentals_cache.json")
CONFIG_PATH = os.path.join(BASE_DIR, "config.json")

SEP = "=" * 78


def _load_json(path):
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def _load_watchlist():
    cfg = _load_json(CONFIG_PATH)
    if not cfg:
        return []
    wl = cfg.get("watchlist") or []
    return [t for t in wl if t not in ("SPY", "QQQ")]  # 지수 ETF는 재무제표 개념이 안 맞아 제외


# ======================================================================
# PART A. 코드 정합성 감사 (static) - buy_signal_telegram.py 소스 파싱
# ======================================================================

def _extract_dict_keys(src, dict_name):
    """`NAME = { ... }` 형태의 모듈 레벨 dict에서 최상위 키 이름만 뽑아낸다.
    (완전한 파서가 아니라 정규식 기반 - 이 스크립트가 다루는 단순한 dict 리터럴에만 맞춤)"""
    m = re.search(rf"{re.escape(dict_name)}\s*=\s*\{{", src)
    if not m:
        return None
    start = m.end() - 1  # '{' 위치
    depth = 0
    i = start
    while i < len(src):
        if src[i] == "{":
            depth += 1
        elif src[i] == "}":
            depth -= 1
            if depth == 0:
                break
        i += 1
    body = src[start:i + 1]
    keys = re.findall(r'^\s*"([A-Za-z0-9_/]+)"\s*:', body, re.M)
    return keys


def _extract_tuple_after(src, anchor_regex):
    """anchor_regex 바로 뒤에 오는 `("a", "b", ...)` 튜플의 문자열 원소들을 뽑아낸다."""
    m = re.search(anchor_regex, src)
    if not m:
        return None
    tail = src[m.end():m.end() + 400]
    tm = re.search(r"\(([^)]*)\)", tail)
    if not tm:
        return None
    items = re.findall(r'"([A-Za-z0-9_/]+)"', tm.group(1))
    return items


def audit_field_map_consistency():
    print(SEP)
    print("PART A. 코드 정합성 감사 (필드 목록끼리 빠진 게 없는지)")
    print(SEP)
    if not os.path.exists(SCRIPT_PATH):
        print(f"  buy_signal_telegram.py를 찾을 수 없어요: {SCRIPT_PATH}")
        return []
    src = open(SCRIPT_PATH, "r", encoding="utf-8").read()
    findings = []

    sec_annual_concepts = _extract_dict_keys(src, "SEC_ANNUAL_CONCEPTS") or []
    yahoo_fields_raw = _extract_dict_keys(src, "YAHOO_FINANCIAL_FIELDS") or []
    # YAHOO_FINANCIAL_FIELDS는 {"YahooName": "내부필드명"} 형태라 값(내부필드명)이 필요함
    m = re.search(r"YAHOO_FINANCIAL_FIELDS\s*=\s*\{", src)
    yahoo_internal_fields = []
    if m:
        start = m.end() - 1
        depth, i = 0, m.end() - 1
        while i < len(src):
            if src[i] == "{":
                depth += 1
            elif src[i] == "}":
                depth -= 1
                if depth == 0:
                    break
            i += 1
        body = src[start:i + 1]
        yahoo_internal_fields = re.findall(r':\s*"([A-Za-z0-9_/]+)"', body)

    merge_annual_fields = _extract_tuple_after(
        src, re.compile(r"def merge_sec_verified_annual.*?for field in", re.S)
    ) or []
    enrich_annual_fields = _extract_tuple_after(
        src, r'for field in \("capex", "fcf", "ocf"'
    )
    # 위 앵커 자체가 필드튜플의 시작이라 재탐색
    m2 = re.search(r'for field in \(("capex", "fcf", "ocf"[^)]*)\)', src)
    enrich_annual_fields = re.findall(r'"([A-Za-z0-9_/]+)"', m2.group(1)) if m2 else []
    # `*SPECIAL_FINANCIAL_FIELDS`처럼 변수로 언패킹되는 부분은 위 정규식이 문자열 리터럴만
    # 잡아서 놓친다 - 그 튜플도 따로 찾아서 합쳐준다.
    if m2 and "SPECIAL_FINANCIAL_FIELDS" in m2.group(1):
        sm = re.search(r"SPECIAL_FINANCIAL_FIELDS\s*=\s*\(([^)]*)\)", src, re.S)
        special_fields = re.findall(r'"([A-Za-z0-9_/]+)"', sm.group(1)) if sm else []
        enrich_annual_fields = sorted(set(enrich_annual_fields) | set(special_fields))

    print(f"- SEC_ANNUAL_CONCEPTS 필드: {sorted(sec_annual_concepts)}")
    print(f"- merge_sec_verified_annual가 복사하는 필드: {sorted(merge_annual_fields)}")
    print(f"- YAHOO_FINANCIAL_FIELDS 내부 필드명: {sorted(set(yahoo_internal_fields))}")
    print(f"- enrich_financials_with_yahoo(annual)가 채우는 필드: {sorted(enrich_annual_fields)}")

    # 1) SEC에서 검증하는 필드인데 merge 함수가 안 옮기는 게 있으면 = EPS 사고와 같은 패턴
    missing_in_merge = sorted(set(sec_annual_concepts) - set(merge_annual_fields))
    if missing_in_merge:
        findings.append(
            f"[경고] SEC_ANNUAL_CONCEPTS에는 있는데 merge_sec_verified_annual 복사 목록엔 "
            f"없는 필드: {missing_in_merge} - SEC로 검증까지 해놓고 실제로는 반영이 안 될 수 있어요."
        )

    # 2) Yahoo가 줄 수 있는 필드인데 enrich 루프가 안 채우는 게 있으면 = 보강 누락
    missing_in_enrich = sorted(set(yahoo_internal_fields) - set(enrich_annual_fields) - {"revenue", "netIncome", "opIncome", "eps"})
    if missing_in_enrich:
        findings.append(
            f"[참고] Yahoo가 제공하는데 연간 enrich 루프가 안 채우는 필드: {missing_in_enrich} "
            f"(의도적일 수도 있음 - 확인 필요)"
        )

    # 3) "proxy 자체계산" 패턴 탐지: `<field>[...] = X - Y` 또는 `X - abs(Y)` 형태로 자체 계산되는
    #    필드 중, 근처에 `_<field>IsProxy` 표시가 없는 곳을 찾는다 (fcf 버그의 재발 방지용 일반화 체크).
    proxy_assignments = re.findall(
        r'(\w*)\["(\w+)"\]\s*=\s*[\w.\[\]"\' ]+\s*[-+*/]\s*[\w.\[\]"\' ]+', src
    )
    # 재무 파이프라인과 무관한 필드(프론트엔드 전용 지표, 메타데이터 문자열 등)에서 나오는
    # 노이즈를 줄이기 위해, SEC/Yahoo 파이프라인이 실제로 다루는 필드로만 범위를 좁힌다.
    pipeline_fields = set(sec_annual_concepts) | set(yahoo_internal_fields)
    suspect_fields = set()
    for varname, field in proxy_assignments:
        if field in ("period", "end", "endDate", "capex"):  # capex는 부호변환일 뿐 계산이 아님
            continue
        if field not in pipeline_fields:
            continue
        tag = f'_{field}IsProxy'
        if tag not in src:
            suspect_fields.add(field)
    if suspect_fields:
        findings.append(
            f"[참고] 다른 필드들의 수식으로 자체 계산되는데 proxy 여부를 표시하는 태그가 "
            f"코드에 없는 필드: {sorted(suspect_fields)} - fcf처럼 나중에 더 나은 소스가 "
            f"와도 못 덮어쓰는 문제가 있는지 사람이 한 번 봐야 해요."
        )

    if not findings:
        print("\n  이상 없음 - 필드 목록끼리 빠진 게 발견되지 않았어요.")
    else:
        print()
        for f in findings:
            print(f"  {f}\n")
    return findings


# ======================================================================
# PART B. 데이터 감사 (dynamic) - 41개 종목 캐시 전수 스캔
# ======================================================================

def audit_fcf_proxy_coverage(fin_cache, watchlist):
    print(SEP)
    print("PART B-1. FCF proxy 커버리지 (최근 2개년이 회사 기준값인지 자체계산인지)")
    print(SEP)
    rows = []
    for ticker in watchlist:
        entry = fin_cache.get(ticker) or {}
        annual = sorted(entry.get("annual") or [], key=lambda r: str(r.get("endDate") or r.get("period") or ""))
        recent = annual[-2:]
        for a in recent:
            if a.get("fcf") is None:
                continue
            proxy = a.get("_fcfIsProxy")
            status = "회사기준(확인됨)" if proxy is False else ("자체계산(proxy)" if proxy is True else "태그없음(레거시-확인필요)")
            if proxy is not False:
                rows.append((ticker, a.get("period"), status, a.get("fcf")))
    if not rows:
        print("\n  전 종목 최근 2개년 FCF가 모두 회사 기준 값으로 확인됐어요.")
    else:
        print(f"\n  아래 {len(rows)}건은 최신 FCF가 회사 기준으로 확인 안 된(자체계산 또는 미확인) 경우예요:")
        for ticker, period, status, fcf in rows:
            print(f"    {ticker:8s} {period:8s} {status:20s} fcf={fcf}")
    return rows


def audit_eps_jump_anomalies(fin_cache, watchlist, threshold=0.6):
    """apply_eps_split_adjustments와 같은 원리(순이익/EPS = 역산 주식수)로, 아직 발견되지
    않은 액면분할·데이터 오류로 인한 EPS 불연속을 찾는다. 자동 보정은 하지 않고 보고만 한다.

    2026-09-09 개선: netIncome(us-gaap_NetIncomeLoss, 총순이익)과 eps(us-gaap_
    EarningsPerShareDiluted, 보통주 귀속 기준 - 우선주 배당/신주인수권 공정가치 조정/
    비지배지분 등이 반영됨)는 서로 다른 XBRL 개념이라, 그 조정 항목이 큰 해(SPAC 합병
    직후 위런트 부채 평가손익이 큰 VRT 2022, 대형 상각으로 총이익-보통주귀속손익 부호가
    갈린 COHR 2025 등)에는 둘의 부호가 아예 달라질 수 있다. 이 경우 abs()로 역산한
    "주식수"는 애초에 의미가 없는 값이라 액면분할 오탐과 구분해서 따로 보고한다."""
    print(SEP)
    print(f"PART B-2. EPS 불연속 스캔 (역산 주식수가 인접 연도 대비 {threshold*100:.0f}% 이상 튀는 곳)")
    print(SEP)
    findings = []
    sign_mismatches = []
    for ticker in watchlist:
        entry = fin_cache.get(ticker) or {}
        annual = sorted(
            [r for r in (entry.get("annual") or []) if r.get("eps") not in (None, 0) and r.get("netIncome")],
            key=lambda r: str(r.get("endDate") or r.get("period") or ""),
        )
        implied = []
        for r in annual:
            ni, eps = r["netIncome"], r["eps"]
            if (ni > 0) != (eps > 0):
                sign_mismatches.append((ticker, r.get("period"), ni, eps))
                implied.append((r.get("period"), None))  # 부호 불일치 - 역산주식수 무의미, 연쇄비교에서 제외
                continue
            shares = abs(ni / eps)
            implied.append((r.get("period"), shares))
        for i in range(1, len(implied)):
            prev_period, prev_shares = implied[i - 1]
            cur_period, cur_shares = implied[i]
            if prev_shares is None or cur_shares is None or prev_shares <= 0 or cur_shares <= 0:
                continue
            ratio = cur_shares / prev_shares
            if ratio > (1 + threshold) or ratio < 1 / (1 + threshold):
                findings.append((ticker, prev_period, cur_period, ratio))
    if not findings:
        print("\n  이상 없음 - 역산 주식수 기준으로 어색하게 튀는 연도가 없어요.")
    else:
        print(f"\n  {len(findings)}건 발견 - 액면분할 미반영이거나 다른 데이터 오류일 수 있어요(수동 확인 필요):")
        for ticker, prev_p, cur_p, ratio in findings:
            print(f"    {ticker:8s} {prev_p} -> {cur_p}  역산주식수 배율 {ratio:.2f}배")
    if sign_mismatches:
        print(f"\n  참고: netIncome/EPS 부호 불일치 {len(sign_mismatches)}건(위 배율 스캔에서 제외됨) - "
              f"총순이익과 보통주귀속 EPS 기준이 갈리는 해(우선주배당/워런트 공정가치평가/비지배지분 "
              f"등). 데이터 오류가 아니라 지표 정의 차이일 가능성이 높지만, 화면에 이 두 값을 같이 "
              f"쓰는 계산(PER 등)이 있다면 기준이 맞는지 확인 필요:")
        for ticker, period, ni, eps in sign_mismatches:
            print(f"    {ticker:8s} {period}  netIncome={ni:,.0f}  eps={eps}")
    return findings, sign_mismatches


def audit_latest_quarter_completeness(fin_cache, watchlist):
    print(SEP)
    print("PART B-3. 최신 분기 데이터 완결성 (매출/영업이익 없이 EPS만 있는 경우)")
    print(SEP)
    rows = []
    for ticker in watchlist:
        entry = fin_cache.get(ticker) or {}
        flag = entry.get("_latest_quarter_incomplete")
        if flag:
            rows.append((ticker, flag.get("period"), flag.get("endDate")))
    if not rows:
        print("\n  이상 없음 - 최신 분기 데이터 누락으로 표시된 종목이 없어요.")
    else:
        print(f"\n  {len(rows)}개 종목이 최신 분기 매출/영업이익 미반영 상태예요(화면엔 경고 문구가 이미 표시됨):")
        for ticker, period, end in rows:
            print(f"    {ticker:8s} {period} (기준일 {end})")
    return rows


def audit_debt_ratio_source(fund_cache, watchlist):
    print(SEP)
    print("PART B-4. 부채비율 소스 현황 (총부채/자본 vs 장기부채/자본 대체)")
    print(SEP)
    lt_only = []
    no_data = []
    for ticker in watchlist:
        fund = fund_cache.get(ticker) or {}
        total = fund.get("totalDebt/totalEquityQuarterly")
        lt = fund.get("longTermDebt/equityQuarterly")
        if total is None and lt is not None:
            lt_only.append(ticker)
        elif total is None and lt is None:
            no_data.append(ticker)
    if lt_only:
        print(f"\n  장기부채/자본으로 대체 표시 중인 종목({len(lt_only)}개, 화면에 라벨/각주로 이미 구분됨):")
        print(f"    {lt_only}")
    if no_data:
        print(f"\n  부채비율 데이터 자체가 없는 종목: {no_data}")
    if not lt_only and not no_data:
        print("\n  전 종목 총부채/자본 기준값이 있어요.")
    return lt_only, no_data


def audit_staleness(fin_cache, fund_cache, watchlist, max_days=10):
    print(SEP)
    print(f"PART B-5. 데이터 최신성 ({max_days}일 넘게 갱신 안 된 종목)")
    print(SEP)
    now = datetime.now(timezone.utc).timestamp()
    stale = []
    for ticker in watchlist:
        entry = fin_cache.get(ticker) or {}
        ts = entry.get("_yahoo_verified_at") or entry.get("_updated_at")
        if not ts:
            continue
        days = (now - ts) / 86400
        if days > max_days:
            stale.append((ticker, round(days, 1)))
    if not stale:
        print(f"\n  이상 없음 - 전 종목이 {max_days}일 이내에 갱신됐어요.")
    else:
        print(f"\n  {len(stale)}개 종목이 {max_days}일 넘게 갱신 안 됐어요(오류로 계속 실패 중일 수 있음):")
        for ticker, days in stale:
            print(f"    {ticker:8s} {days}일 전")
    return stale


def main():
    print(SEP)
    print(f"data_quality_audit.py 실행 - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(SEP)

    watchlist = _load_watchlist()
    if not watchlist:
        print("config.json에서 watchlist를 못 읽었어요 - 폴더 확인해주세요.")
        sys.exit(1)
    print(f"대상 종목 {len(watchlist)}개: {watchlist}\n")

    fin_cache = _load_json(FINANCIALS_CACHE_PATH) or {}
    fund_cache = _load_json(FUNDAMENTALS_CACHE_PATH) or {}

    static_findings = audit_field_map_consistency()
    fcf_rows = audit_fcf_proxy_coverage(fin_cache, watchlist)
    eps_rows, eps_sign_mismatches = audit_eps_jump_anomalies(fin_cache, watchlist)
    incomplete_rows = audit_latest_quarter_completeness(fin_cache, watchlist)
    lt_only, no_debt = audit_debt_ratio_source(fund_cache, watchlist)
    stale_rows = audit_staleness(fin_cache, fund_cache, watchlist)

    print(SEP)
    print("요약")
    print(SEP)
    print(f"  A. 코드 정합성 경고: {len(static_findings)}건")
    print(f"  B-1. FCF 미확인/proxy: {len(fcf_rows)}건")
    print(f"  B-2. EPS 불연속 의심: {len(eps_rows)}건 (참고: netIncome/EPS 부호 불일치 {len(eps_sign_mismatches)}건 별도)")
    print(f"  B-3. 최신 분기 데이터 누락: {len(incomplete_rows)}건")
    print(f"  B-4. 부채비율 장기부채 대체: {len(lt_only)}개 종목 / 데이터 없음: {len(no_debt)}개 종목")
    print(f"  B-5. 데이터 최신성 이상: {len(stale_rows)}건")
    print(SEP)
    print("이 스크립트는 아무것도 수정하지 않았어요(읽기 전용). 위 발견 사항은 사람이 확인 후")
    print("필요하면 buy_signal_telegram.py / investment_compass_dashboard.html을 고쳐야 해요.")
    print(SEP)


if __name__ == "__main__":
    main()
