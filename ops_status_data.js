// ops_status_report.py가 자동 생성합니다. 직접 수정하지 마세요.
const OPS_STATUS_DATA = {
  "generatedAt": "2026-10-15T18:07:48+09:00",
  "items": [
    {
      "key": "last_success",
      "status": "red",
      "label": "마지막 정상 완료",
      "detail": "2026-10-15 09:43 (8.4시간 전, 기준 3시간)"
    },
    {
      "key": "public_verify",
      "status": "red",
      "label": "공개 페이지 일치",
      "detail": "mismatch_or_cdn_lag (마지막 matched 561.0시간 전, 기준 24시간)"
    },
    {
      "key": "loop_progress",
      "status": "green",
      "label": "루프 진행",
      "detail": "'watchdog_loop_not_running_pending_restart' 진행 중(2분 전 시작)"
    },
    {
      "key": "loop_count",
      "status": "unknown",
      "label": "루프 개수",
      "detail": "확인불가(잠금 상태 조회 실패)"
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
      "detail": "2026-10-14"
    },
    {
      "key": "market_expectation_asof",
      "status": "green",
      "label": "시장 기대 기준일",
      "detail": "2026-10-15"
    },
    {
      "key": "eps",
      "status": "green",
      "label": "EPS 수집",
      "detail": "가장 오래된 종목 MSFT -0일 전"
    },
    {
      "key": "data_audit",
      "status": "red",
      "label": "데이터 감사",
      "detail": "A급 2건"
    }
  ]
};
