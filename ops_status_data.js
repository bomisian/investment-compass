// ops_status_report.py가 자동 생성합니다. 직접 수정하지 마세요.
const OPS_STATUS_DATA = {
  "generatedAt": "2026-10-16T07:35:43+09:00",
  "items": [
    {
      "key": "last_success",
      "status": "red",
      "label": "마지막 정상 완료",
      "detail": "2026-10-16 00:09 (7.4시간 전, 기준 3시간)"
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
      "detail": "대기 중(다음 주기, 20분 전부터)"
    },
    {
      "key": "loop_count",
      "status": "red",
      "label": "루프 개수",
      "detail": "꺼져 있음 - watchdog 루프가 돌고 있지 않음"
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
      "detail": "2026-10-15"
    },
    {
      "key": "market_expectation_asof",
      "status": "green",
      "label": "시장 기대 기준일",
      "detail": "2026-10-16"
    },
    {
      "key": "eps",
      "status": "green",
      "label": "EPS 수집",
      "detail": "가장 오래된 종목 CRM 3일 전"
    },
    {
      "key": "data_audit",
      "status": "red",
      "label": "데이터 감사",
      "detail": "A급 2건"
    }
  ]
};
