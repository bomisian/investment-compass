// ops_status_report.py가 자동 생성합니다. 직접 수정하지 마세요.
const OPS_STATUS_DATA = {
  "generatedAt": "2026-11-15T07:35:42+09:00",
  "items": [
    {
      "key": "last_success",
      "status": "green",
      "label": "마지막 정상 완료",
      "detail": "2026-11-15 07:03"
    },
    {
      "key": "public_verify",
      "status": "green",
      "label": "공개 페이지 일치",
      "detail": "matched"
    },
    {
      "key": "loop_progress",
      "status": "green",
      "label": "루프 진행",
      "detail": "'buy_signal_telegram' 진행 중(2분 전 시작)"
    },
    {
      "key": "loop_count",
      "status": "green",
      "label": "루프 개수",
      "detail": "실행 중(정상) - watchdog_loop.bat 자신의 잠금으로 중복 실행은 별도 방지됨"
    },
    {
      "key": "scheduler",
      "status": "unknown",
      "label": "작업 스케줄러 결과",
      "detail": "확인불가(schtasks 조회 실패 또는 작업 이름 불일치)"
    },
    {
      "key": "compass_asof",
      "status": "green",
      "label": "나침반 피드 기준일",
      "detail": "2026-11-13 (최신 거래일 기준, 놓친 거래일 0개)"
    },
    {
      "key": "market_expectation_asof",
      "status": "green",
      "label": "시장 기대 기준일",
      "detail": "2026-11-15 07:02 생성 → 거래일 2026-11-13 (최신 거래일 기준, 놓친 거래일 0개)"
    },
    {
      "key": "eps",
      "status": "red",
      "label": "EPS 수집",
      "detail": "COHR 31일째(기준 14일)"
    },
    {
      "key": "data_audit",
      "status": "green",
      "label": "데이터 감사",
      "detail": "A급 0건"
    },
    {
      "key": "git_lock_recovery",
      "status": "green",
      "label": "git 잠금파일 복구",
      "detail": "최근 기록 없음"
    },
    {
      "key": "deploy_whitelist_watch",
      "status": "green",
      "label": "배포 목록 의도적 제외 감시",
      "detail": "연속 3사이클 넘게 제외된 파일 없음"
    },
    {
      "key": "smart_money_quarter",
      "status": "green",
      "label": "13F 신규 분기 반영",
      "detail": "41개 전부 2026-09-30 이후 분기로 반영됨"
    },
    {
      "key": "smart_money_quarter_auto",
      "status": "red",
      "label": "13F 자동 수집 실행",
      "detail": "2026-11-15 실행 실패: 110_collect 실패(rc=3): 다른 110 실행이 진행 중 -- 이번 실행 건너뜀"
    },
    {
      "key": "evidence_10q_crosscheck",
      "status": "yellow",
      "label": "8-K 승인분 대조만(10-Q)",
      "detail": "META(8-K 2026-10-21 승인), TSLA(8-K 2026-10-21 승인), LRCX(8-K 2026-10-21 승인) — 10-Q는 8-K 승인분과 대조만 남음(승인 대기·72시간 알림 집계 제외, 큐 status 그대로)"
    },
    {
      "key": "evidence_review_backlog",
      "status": "yellow",
      "label": "근거 승인 대기",
      "detail": "WDC(23일), FIX(24일), BE(24일), HUBB(19일), STX(19일), GEV(18일), HUBB(18일), VRT(18일), MSFT(18일), GOOGL(18일), KLAC(18일), VRT(18일), GOOGL(17일), PWR(17일), EME(17일), AMZN(17일), INTC(17일), KLAC(17일), SNDK(17일), STX(17일), AMZN(16일), INTC(16일), SNDK(16일), MRVL(13일), LITE(13일), AAPL(13일), PLTR(13일), PLTR(12일), AAPL(12일), ETN(12일), AMD(12일), ANET(12일), LITE(12일), MOD(12일), AMD(11일), ANET(11일), MOD(11일), QCOM(11일), ARM(11일), COHR(11일), EME(17일), VST(9일), CEG(6일), VST(6일), CEG(6일), TSM(5일), TSM(3일), TSM(2일), AMAT(3일) — approve_evidence.py 실행 필요"
    },
    {
      "key": "target_consensus_freshness",
      "status": "green",
      "label": "목표가 컨센서스 수집일",
      "detail": "39종목 3거래일 이내 수집"
    },
    {
      "key": "quarterly_cashflow_gap",
      "status": "green",
      "label": "최신 분기 현금흐름(OCF·CAPEX·FCF)",
      "detail": "비어 있음(아직 기다리는 중): AMAT Q4'26(2026-11-15부터 0거래일)"
    },
    {
      "key": "ttm_eps_rule",
      "status": "yellow",
      "label": "TTM EPS 공통 규칙(분기 합/Finnhub)",
      "detail": "분기 합 31종목 · 기존 값·없음 8종목 · 적정가 변화 9종목 / 자동 복귀(검증 미완): VRT"
    },
    {
      "key": "earnings_reflection",
      "status": "yellow",
      "label": "실적 반영 상태(가격지도)",
      "detail": "가격지도 반영 대기 1종목: AMAT(11/12 발표, 최신 2026-12-31 / 반영 2026-07-26) / EPS 컨센서스가 발표 전 추정치 1종목: AMAT"
    },
    {
      "key": "wacc_roic",
      "status": "green",
      "label": "자본 효율(ROIC·WACC) 계산",
      "detail": "계산 34/39종목 · 계산 불가 0종목 · 10년물 5.1%(2026-11-12, fresh) · 생성 2026-11-14T06:22"
    },
    {
      "key": "required_tools",
      "status": "green",
      "label": "필수 실행 파일(git·node)",
      "detail": "git C:\\Program Files\\Git\\cmd\\git.exe, node C:\\Program Files\\nodejs\\node.exe"
    },
    {
      "key": "price_map_daily_run",
      "status": "green",
      "label": "가격 지도 일일 실행",
      "detail": "마지막 성공 세션 2026-11-13(기대 2026-11-13, 실행 2026-11-14 06:22:14)"
    },
    {
      "key": "external_peer_cache_freshness",
      "status": "green",
      "label": "외부보충 비교군 캐시 신선도",
      "detail": "2026-11-15 07:33 KST 정상 갱신(실패 0개)"
    }
  ]
};
