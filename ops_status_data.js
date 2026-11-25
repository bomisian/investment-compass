// ops_status_report.py가 자동 생성합니다. 직접 수정하지 마세요.
const OPS_STATUS_DATA = {
  "generatedAt": "2026-11-26T07:35:42+09:00",
  "items": [
    {
      "key": "last_success",
      "status": "green",
      "label": "마지막 정상 완료",
      "detail": "2026-11-26 07:29"
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
      "detail": "대기 중(다음 주기, 6분 전부터)"
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
      "detail": "2026-11-25 (최신 거래일 기준, 놓친 거래일 0개)"
    },
    {
      "key": "market_expectation_asof",
      "status": "green",
      "label": "시장 기대 기준일",
      "detail": "2026-11-26 07:28 생성 → 거래일 2026-11-25 (최신 거래일 기준, 놓친 거래일 0개)"
    },
    {
      "key": "eps",
      "status": "red",
      "label": "EPS 수집",
      "detail": "COHR 42일째(기준 14일)"
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
      "status": "green",
      "label": "13F 자동 수집 실행",
      "detail": "2026-11-21 정상 실행됨(성공 시각 2026-11-21T09:58:24.193121+09:00)"
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
      "detail": "WDC(34일), FIX(35일), BE(35일), HUBB(30일), STX(30일), GEV(29일), HUBB(29일), VRT(29일), MSFT(29일), GOOGL(29일), KLAC(29일), VRT(29일), GOOGL(28일), PWR(28일), EME(28일), AMZN(28일), INTC(28일), KLAC(28일), SNDK(28일), STX(28일), AMZN(27일), INTC(27일), SNDK(27일), MRVL(24일), LITE(24일), AAPL(24일), PLTR(24일), PLTR(23일), AAPL(23일), ETN(23일), AMD(23일), ANET(23일), LITE(23일), MOD(23일), AMD(22일), ANET(22일), MOD(22일), QCOM(22일), ARM(22일), COHR(22일), EME(28일), VST(20일), CEG(17일), VST(17일), CEG(17일), TSM(16일), TSM(14일), TSM(13일), AMAT(14일), NVDA(9일), ARM(3일) — approve_evidence.py 실행 필요"
    },
    {
      "key": "target_consensus_freshness",
      "status": "green",
      "label": "목표가 컨센서스 수집일",
      "detail": "39종목 3거래일 이내 수집"
    },
    {
      "key": "quarterly_cashflow_gap",
      "status": "yellow",
      "label": "최신 분기 현금흐름(OCF·CAPEX·FCF)",
      "detail": "3거래일 넘게 빈 종목: AMAT Q4'26(ocf·capex·fcf 없음, 2026-11-15부터 8거래일)"
    },
    {
      "key": "ttm_eps_rule",
      "status": "yellow",
      "label": "TTM EPS 공통 규칙(분기 합/Finnhub)",
      "detail": "분기 합 32종목 · 기존 값·없음 7종목 · 적정가 변화 10종목 / 자동 복귀(검증 미완): ASML"
    },
    {
      "key": "earnings_reflection",
      "status": "yellow",
      "label": "실적 반영 상태(가격지도)",
      "detail": "가격지도 반영 대기 3종목: AMAT(11/12 발표, 최신 2026-12-31 / 반영 2026-10-31), NVDA(11/17 발표, 최신 2026-12-31 / 반영 2026-07-26), MRVL(11/02 발표, 최신 2026-09-30 / 반영 2026-08-01) / EPS 컨센서스가 발표 전 추정치 1종목: NVDA"
    },
    {
      "key": "wacc_roic",
      "status": "green",
      "label": "자본 효율(ROIC·WACC) 계산",
      "detail": "계산 33/39종목 · 계산 불가 0종목 · 10년물 5.1%(2026-11-17, fresh) · 생성 2026-11-19T06:22"
    },
    {
      "key": "required_tools",
      "status": "green",
      "label": "필수 실행 파일(git·node)",
      "detail": "git C:\\Program Files\\Git\\cmd\\git.EXE, node C:\\Program Files\\nodejs\\node.EXE"
    },
    {
      "key": "price_map_daily_run",
      "status": "yellow",
      "label": "가격 지도 일일 실행",
      "detail": "마지막 성공 세션 2026-11-18(기대 2026-11-25, 5거래일 뒤처짐) / 39종목 확정 봉 준비됨(엔진 실행 실패 가능 - buy_signal.log 확인)"
    },
    {
      "key": "external_peer_cache_freshness",
      "status": "green",
      "label": "외부보충 비교군 캐시 신선도",
      "detail": "2026-11-26 07:28 KST 정상 갱신(실패 0개)"
    }
  ]
};
