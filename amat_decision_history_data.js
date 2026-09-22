// 자동 생성 -- amat_decision_history.py가 amat_decision_history/*.json(하루 1건,
// 과거 기록은 절대 덮어쓰지 않음)을 그대로 모아 만든다. 판단 로직은 이 모듈이 갖지
// 않는다 -- 매일 investment_compass_dashboard.html의 실제 computeAmatRepresentativeDecision()/
// renderAmatFrontCard()를 amat_decision_history_engine.js(Node 서브프로세스)로 그대로
// 실행한 결과만 옮겨 담는다(화면·기록이 다른 결론을 낼 수 있는 구조를 없앰). 가격은
// prices_cache.json의 그날 최신 봉(서버 기본정책 기록)이며, 사용자가 화면에서 직접
// 입력한 요구수익률은 이 기록에 반영되지 않는다(서버가 알 수 없음). changedFacts는
// 전일 대비 달라진 값만 나열한 것이며(변경 사실), 왜 달라졌는지(변경 원인)는 이
// 대조만으로 알 수 없다(각 기록의 causeDisclaimer 참고).
const AMAT_DECISION_HISTORY_DATA = {
  "AMAT": [
    {
      "date": "2026-09-21",
      "generatedAt": "2026-09-21T07:14:42.147975",
      "runId": "AMAT_REAL_20260920T230132534836",
      "valuationAnchorDate": "2026-07-26",
      "dcfBase": 191.2990663575951,
      "price": 444.57000732421875,
      "priceAsOf": "2026-09-18",
      "priceSourceKind": "prices_cache.json 최신 봉(서버 기본정책 기록 -- 개인 브라우저 입력 아님)",
      "policyBuyRPct": 10,
      "policyTrimRPct": 8,
      "snapshotNote": "이 기록은 그날 처음(이자 유일하게) 실행된 기본정책 스냅샷이에요 -- 그날 하루 전체의 가격 변동이나 장중 판단을 대표하지 않아요. 요구수익률 미입력 시 화면 기본 정책(10%/8%) 기준이며, 사용자가 화면에서 직접 입력한 값은 서버가 알 수 없어 이 기록에는 반영되지 않아요.",
      "engineOk": true,
      "engineError": null,
      "dcfBaseEngineEcho": 191.2990663575951,
      "priceIsLive": true,
      "priceSourceNote": "방금 조회 성공한 값(2026-09-18 관측)",
      "ceilingBuy": 199.11689200672603,
      "ceilingTrimRef": 209.72856616465708,
      "judgmentCode": null,
      "judgmentLabel": "📐 매입가 상한(관대 기준) 초과 -- 비중재검토 대상(신규매수 조건 아님)",
      "judgmentDetail": "현재가가 요구수익률 8% 기준 매입가 상한($209.73)보다 높음 -- 다만 상대가치 참고범위는 반대/보류 신호가 있음(아래 참고)",
      "dataOk": true,
      "dataReason": null,
      "changedFacts": [
        "오늘자 기록을 이력 엔진 연동 버전으로 재계산(과거 개별 기록의 판정 로직 결함 수정 -- 이전 _judge() 기반 기록을 오늘 하루치에 한해 새 로직으로 다시 씀, 2026-09-21 이전 날짜의 기록은 건드리지 않음)"
      ],
      "causeDisclaimer": "아래 changedFacts는 전일 기록과 달라진 값만 기계적으로 대조한 것이에요(변경된 사실) -- 왜 달라졌는지(새 공시 때문인지, 가격이 움직여서인지, 모델 가정 변경 때문인지, 그날 수집된 가격 자체가 달라서인지)는 이 대조만으로 알 수 없어요(변경 원인은 이 기록으로 단정하지 않음). 원인을 확인하려면 price/priceAsOf/dcfBase/runId 필드를 함께 대조하세요.",
      "reasonForChange": "오늘자 기록을 이력 엔진 연동 버전으로 재계산(과거 개별 기록의 판정 로직 결함 수정 -- 이전 _judge() 기반 기록을 오늘 하루치에 한해 새 로직으로 다시 씀, 2026-09-21 이전 날짜의 기록은 건드리지 않음)"
    },
    {
      "date": "2026-09-22",
      "generatedAt": "2026-09-22T00:47:22.646015",
      "runId": "AMAT_REAL_20260921T232433311753",
      "valuationAnchorDate": "2026-07-26",
      "dcfBase": 191.2990663575951,
      "price": 464.239990234375,
      "priceAsOf": "2026-09-21",
      "priceSourceKind": "prices_cache.json 최신 봉(서버 기본정책 기록 -- 개인 브라우저 입력 아님)",
      "policyBuyRPct": 10,
      "policyTrimRPct": 8,
      "snapshotNote": "이 기록은 그날 처음(이자 유일하게) 실행된 기본정책 스냅샷이에요 -- 그날 하루 전체의 가격 변동이나 장중 판단을 대표하지 않아요. 요구수익률 미입력 시 화면 기본 정책(10%/8%) 기준이며, 사용자가 화면에서 직접 입력한 값은 서버가 알 수 없어 이 기록에는 반영되지 않아요.",
      "engineOk": true,
      "engineError": null,
      "dcfBaseEngineEcho": 191.2990663575951,
      "priceIsLive": true,
      "priceSourceNote": "방금 조회 성공한 값(2026-09-21 관측)",
      "ceilingBuy": 199.25676792329443,
      "ceilingTrimRef": 209.8448846006653,
      "judgmentCode": null,
      "judgmentLabel": "📐 매입가 상한(관대 기준) 초과 -- 비중재검토 대상(신규매수 조건 아님)",
      "judgmentDetail": "현재가가 요구수익률 8% (시스템 제안 기본값 -- 아래에서 직접 바꿀 수 있음) 기준 매입가 상한($209.84)보다 높음 -- 다만 상대가치 참고범위는 반대/보류 신호가 있음(아래 참고)",
      "dataOk": true,
      "dataReason": null,
      "changedFacts": [
        "평가 실행 ID 변경(AMAT_REAL_20260920T230132534836 -> AMAT_REAL_20260921T232433311753)",
        "신규매수 매입가 상한(10% 기준) 변경($199.11689200672603 -> $199.25676792329443)",
        "기록 가격 변경($444.57000732421875 -> $464.239990234375, 관측일 2026-09-18 -> 2026-09-21)"
      ],
      "causeDisclaimer": "아래 changedFacts는 전일 기록과 달라진 값만 기계적으로 대조한 것이에요(변경된 사실) -- 왜 달라졌는지(새 공시 때문인지, 가격이 움직여서인지, 모델 가정 변경 때문인지, 그날 수집된 가격 자체가 달라서인지)는 이 대조만으로 알 수 없어요(변경 원인은 이 기록으로 단정하지 않음). 원인을 확인하려면 price/priceAsOf/dcfBase/runId 필드를 함께 대조하세요.",
      "reasonForChange": "평가 실행 ID 변경(AMAT_REAL_20260920T230132534836 -> AMAT_REAL_20260921T232433311753); 신규매수 매입가 상한(10% 기준) 변경($199.11689200672603 -> $199.25676792329443); 기록 가격 변경($444.57000732421875 -> $464.239990234375, 관측일 2026-09-18 -> 2026-09-21)"
    }
  ]
};
