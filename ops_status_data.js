// ops_status_report.py가 자동 생성합니다. 직접 수정하지 마세요.
const OPS_STATUS_DATA = {
  "generatedAt": "2026-11-10T07:35:41+09:00",
  "items": [
    {
      "key": "last_success",
      "status": "red",
      "label": "마지막 정상 완료",
      "detail": "2026-11-04 08:52 (142.7시간 전, 기준 3시간)"
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
      "detail": "대기 중(다음 주기, 7분 전부터)"
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
      "detail": "2026-11-09 (최신 거래일 기준, 놓친 거래일 0개)"
    },
    {
      "key": "market_expectation_asof",
      "status": "green",
      "label": "시장 기대 기준일",
      "detail": "2026-11-10 07:27 생성 → 거래일 2026-11-09 (최신 거래일 기준, 놓친 거래일 0개)"
    },
    {
      "key": "eps",
      "status": "red",
      "label": "EPS 수집",
      "detail": "COHR 26일째(기준 14일)"
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
      "status": "unknown",
      "label": "13F 신규 분기 반영",
      "detail": "아직 확인 시점 전(2026-11-15부터 확인)"
    },
    {
      "key": "smart_money_quarter_auto",
      "status": "unknown",
      "label": "13F 자동 수집 실행",
      "detail": "아직 실행 기록 없음(수집 창 전이거나 최초 실행 전)"
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
      "detail": "WDC(18일), FIX(19일), BE(19일), HUBB(14일), STX(14일), GEV(13일), HUBB(13일), VRT(13일), MSFT(13일), GOOGL(13일), KLAC(13일), VRT(13일), GOOGL(12일), PWR(12일), EME(12일), AMZN(12일), INTC(12일), KLAC(12일), SNDK(12일), STX(12일), AMZN(11일), INTC(11일), SNDK(11일), MRVL(8일), LITE(8일), AAPL(8일), PLTR(8일), PLTR(7일), AAPL(7일), ETN(7일), AMD(7일), ANET(7일), LITE(7일), MOD(7일), AMD(6일), ANET(6일), MOD(6일), QCOM(6일), ARM(6일), COHR(6일), EME(12일), VST(4일), CEG(1일), VST(1일) — approve_evidence.py 실행 필요"
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
      "detail": "39종목 최신 분기 현금흐름 모두 있음"
    },
    {
      "key": "ttm_eps_rule",
      "status": "green",
      "label": "TTM EPS 공통 규칙(분기 합/Finnhub)",
      "detail": "분기 합 20종목 · 기존 값·없음 19종목 · 적정가 변화 9종목 · 판정 변경(승인 기록) CEG"
    },
    {
      "key": "earnings_reflection",
      "status": "yellow",
      "label": "실적 반영 상태(가격지도)",
      "detail": "가격지도 반영 대기 2종목: MRVL(11/02 발표, 최신 2026-09-30 / 반영 2026-08-01), CEG(11/09 발표, 최신 2026-09-30 / 반영 2026-06-30) / EPS 컨센서스가 발표 전 추정치 1종목: CEG"
    },
    {
      "key": "wacc_roic",
      "status": "green",
      "label": "자본 효율(ROIC·WACC) 계산",
      "detail": "계산 34/39종목 · 계산 불가 0종목 · 10년물 4.86%(2026-11-06, fresh) · 생성 2026-11-10T06:25"
    },
    {
      "key": "price_map_daily_run",
      "status": "green",
      "label": "가격 지도 일일 실행",
      "detail": "마지막 성공 세션 2026-11-09(기대 2026-11-09, 실행 2026-11-10 06:24:59)"
    },
    {
      "key": "external_peer_cache_freshness",
      "status": "green",
      "label": "외부보충 비교군 캐시 신선도",
      "detail": "2026-11-10 07:27 KST 정상 갱신(실패 0개)"
    }
  ]
};
