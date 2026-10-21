// ops_status_report.py가 자동 생성합니다. 직접 수정하지 마세요.
const OPS_STATUS_DATA = {
  "generatedAt": "2026-10-21T15:27:22+09:00",
  "items": [
    {
      "key": "last_success",
      "status": "green",
      "label": "마지막 정상 완료",
      "detail": "2026-10-21 15:02"
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
      "detail": "대기 중(다음 주기, 25분 전부터)"
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
      "detail": "2026-10-20"
    },
    {
      "key": "market_expectation_asof",
      "status": "green",
      "label": "시장 기대 기준일",
      "detail": "2026-10-21"
    },
    {
      "key": "eps",
      "status": "green",
      "label": "EPS 수집",
      "detail": "가장 오래된 종목 ANET 6일 전"
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
      "key": "evidence_review_backlog",
      "status": "green",
      "label": "근거 승인 대기",
      "detail": "24시간 넘게 대기 중인 근거 승인 없음"
    }
  ]
};
