// 자동 생성 -- amat_decision_history.py가 amat_decision_history/*.json(하루 1건,
// 과거 기록은 절대 덮어쓰지 않음)을 그대로 모아 만든다. 계산을 다시 하지 않고, 그날
// generate_dashboard_connection.py가 만든 amat_entry에서 이미 계산된 값만 옮겨
// 담는다(단일 진실 공급원). 요구수익률 미입력 시 화면 기본 정책(10%/8%) 기준이며,
// 사용자가 화면에서 직접 입력한 값은 이 기록에 반영되지 않는다(서버가 알 수 없음).
const AMAT_DECISION_HISTORY_DATA = {
  "AMAT": [
    {
      "date": "2026-09-21",
      "generatedAt": "2026-09-21T14:43:25.831008",
      "runId": "AMAT_REAL_20260920T230132534836",
      "valuationAnchorDate": "2026-07-26",
      "dcfBase": 191.2990663575951,
      "price": 444.57000732421875,
      "priceAsOf": "2026-09-18",
      "policyBuyRPct": 10,
      "policyTrimRPct": 8,
      "ceilingBuy": 199.11689200672603,
      "ceilingTrimRef": 209.72856616465708,
      "judgmentCode": "trim_review",
      "judgmentLabel": "비중재검토 대상(신규매수 조건 아님)",
      "dataOk": true,
      "note": "요구수익률 미입력 시 화면 기본 정책(10%/8%) 기준 -- 사용자가 화면에서 직접 입력한 값은 서버가 알 수 없어 이 기록에는 반영되지 않음",
      "reasonForChange": "첫 기록(이전 비교 대상 없음)"
    }
  ]
};
