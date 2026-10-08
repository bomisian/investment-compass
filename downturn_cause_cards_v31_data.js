// downturn_cause_cards_v31_data.js
// 하락 원인 진단 카드 데이터 (v3.1) — 읽기 전용, 자동매매/텔레그램/매수매도신호 연결 없음
// 생성: 2026-10-08T00:00:00
// 출처: DOWNTURN_CAUSE_CARD_DECLARATION_v3_1_20261008.md, DOWNTURN_CAUSE_CARD_PILOT_v3_1_20261008.md (수동 반영, 자동 생성 아님)
// ORCL 정정: 2026-10-08 Oracle 공식 FY2026 실적발표 + Q1 FY2027 8-K(Exhibit 99.1)로 "$40B 전액 신규 부채" 표현을 NARROW_CLAIM_CORRECTION으로 정정.
//   재무 부담 우려 자체는 유효한 별도 사실로 유지. 기존 SOURCE_CORRECTION_CASE(일반 하락 원인을 무효화하는 태그) 용도로는 더 이상 쓰지 않음.
// 주의: 이 데이터에 없는 종목은 '최근 구조화 사건 없음'으로 표시한다. 빈 값·추정값으로 채우지 않는다.
const DOWNTURN_CAUSE_CARDS_V31 = {
  "generated": "2026-10-08T00:00:00",
  "source": "DOWNTURN_CAUSE_CARD_DECLARATION_v3_1_20261008.md / PILOT_v3_1_20261008.md",
  "note": "이 데이터에 없는 종목은 '최근 구조화 사건 없음'으로 표시한다. 빈 값·추정값으로 채우지 않는다. 가격 게이트는 2026-10-07 종가 기준, 사업·EPS 보조자료는 2026-09-25~28 기준(근거신뢰도 '보통').",
  "tickers": {
    "TSLA": {
      "state": "조정 대상 아님",
      "gate": {"pass": false, "dd60": -4.2, "dd60_note": "59거래일 전 고점 대비", "dd90": -11.2, "dd90_note": "68거래일 전 고점 대비"},
      "summary": "최근 60거래일 고점 대비 -4.2%(최근 종가 354.11→370.59→378.73→380.68→377.81로 반등 중) — \"현재 조정\"의 정의에 해당하지 않아 이번 진단 대상에서 제외",
      "note2": "사업 전제상 우려(영업이익률, 규제크레딧 매출 급감 등)는 이 카드가 아니라 142 기대충족 판정에서 별도로 다룹니다",
      "tag": null
    },
    "ORCL": {
      "state": "관찰 — 사업 또는 하락 원인 확인 필요",
      "gate": {"pass": true, "dd60": -11.7, "dd60_note": "21거래일 전 고점 대비", "dd90": -42.2, "dd90_note": "89거래일 전 고점 대비"},
      "business_premise": {
        "status": "재확인 필요(일시 부담 가능 / 구조 훼손 우려 중 단정 불가)",
        "support": [
          "Q1 FY2027 매출 +30% YoY, OCI(클라우드 인프라) 매출 +121% YoY, RPO(수주잔고) $664B로 증가(Oracle 8-K Exhibit 99.1, 2026-09-10)",
          "FY2026 영업현금흐름 +54% YoY로 성장(Oracle FY2026 실적발표)"
        ],
        "caution": [
          "FY2026 CAPEX $55.7B(매출의 약 83%)로 FCF 약 -$23.7B 적자 전환(Oracle FY2026 실적발표)",
          "Q1 FY2027에도 FCF -$5B, $20B ATM 지분증자 완료 공시(Oracle 8-K, 2026-09-10)",
          "FY2026 부채 조달 $43B + 지분 조달 $5B, FY2027 중 부채·지분 합산 약 $40B 추가 조달 계획 공식 발표"
        ]
      },
      "decline_cause": {
        "external_confirmed": false,
        "external_note": "확인된 외부·일시 원인 없음 — CAPEX·FCF·자금조달 부담은 '일시적 과민반응'이 아니라 회사가 스스로 공시한 지속적 자금조달 계획에 해당",
        "price_expectation_gap": true,
        "gap_note": "선행 EPS는 소폭 상향 기록이 있었으나(보조 근거), FCF 적자전환·자금조달 부담이라는 실질 악화 요인이 함께 있어 '괴리'로 단정하기 어려움",
        "confidence": "보통(가격 2026-10-07 vs 보조자료 2026-09-25~28, 7~10거래일 차이)"
      },
      "expectation_change": {"not_core_cause": null, "note": "부채·CAPEX 부담이 EPS·가이던스 전망 자체에 어떤 영향을 주는지 다음 분기 가이던스로 재확인 필요"},
      "entry_status": "신호 없음(관찰)",
      "entry_note": "RSI 49.7(38 초과), 200일선 대비 -11.6% 하락추세 — 최근 10거래일 RSI 최저 42.7, 38 이하 미도달",
      "next_check": "다음 분기 FCF 추이(CAPEX 대비 OCF), 추가 신용등급 조정 여부, RSI 38 이하 진입 여부 확인되면 재평가",
      "tag": "NARROW_CLAIM_CORRECTION",
      "tag_note": "\"FY2027 중 $40B 전액이 신규 부채\"라는 좁은 표현은 정정(실제는 부채·지분 조합 약 $40B 조달 계획, $20B ATM 지분발행 포함). 다만 이 표현 정정이 CAPEX·FCF·자금조달 부담 자체를 반증하는 것은 아님 — 성장 근거와 자본 부담을 동등하게 표시",
      "sources": [
        "Oracle FY2026 실적발표: https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Record-Q4-and-FY-2026-Results-Driven-by-Cloud-Infrastructure--Cloud-Applications/",
        "Oracle Q1 FY2027 8-K Exhibit 99.1: https://www.sec.gov/Archives/edgar/data/1341439/000119312526387905/orcl-ex99_1.htm"
      ],
      "unverified": "S&P 신용등급 하향(2026-07-09, BBB→BBB-) 및 복수 애널리스트 목표가 동시 하향은 원문·1차 출처 확보 전까지 보조 설명으로만 표시(미확인 정보)"
    },
    "HUBB": {
      "state": "관찰 — 하락 원인 확인 필요",
      "gate": {"pass": true, "dd60": -8.5, "dd60_note": "40거래일 전 고점 대비", "dd90": -11.9, "dd90_note": "75거래일 전 고점 대비"},
      "business_premise": {
        "status": "일시 부담 가능(조건부)",
        "support": ["유기성장 +10%", "선행 EPS +1.6% 상향"],
        "caution": ["조정영업마진 -50bp — M&A(NSI 인수) 통합·자금조달 비용으로 설명됨(일회성 성격)"]
      },
      "decline_cause": {
        "external_confirmed": false,
        "external_note": "하락과 날짜 기준으로 연결되는 공식 공시 사건이나 섹터 동반 하락 근거를 확인하지 못함",
        "price_expectation_gap": true,
        "gap_note": "dd60=-8.5%/dd90=-11.9% 하락 중인데 선행 EPS는 +1.6% 상향 — 방향 반대(보조 근거, 인과관계 미확인)",
        "confidence": "보통(가격 2026-10-07 vs 보조자료 2026-09-25~28)"
      },
      "expectation_change": {"not_core_cause": true, "note": "선행 EPS 상향 — 기대치 하향이 핵심 원인 아님"},
      "entry_status": "신호 없음(관찰)",
      "entry_note": "RSI 55.5, 200일선 대비 -2.7% 약한 하락추세",
      "next_check": "하락 시점과 연결되는 공식 공시(실적 외 사건) 또는 섹터 동반 하락 여부 확인, 다음 분기 조정영업마진 회복 여부 확인되면 재평가",
      "tag": null
    },
    "INTC": {
      "state": "관찰 — 하락 원인 확인 필요",
      "gate": {"pass": true, "dd60": -11.2, "dd60_note": "9거래일 전 고점 대비", "dd90": -19.7, "dd90_note": "75거래일 전 고점 대비"},
      "business_premise": {
        "status": "유지",
        "support": ["매출 +25% YoY", "GAAP 영업이익 흑자전환($1.8B)", "순손실은 비현금성(정부 관련 에스크로 주식) 평가손"],
        "caution": []
      },
      "decline_cause": {
        "external_confirmed": false,
        "external_note": "\"헤드라인 순손실 숫자에 대한 과민반응 가능성\"은 날짜 기준으로 확인된 공식 사건이 아닌 추정 — 2-A 불충족",
        "price_expectation_gap": true,
        "gap_note": "dd60=-11.2%/dd90=-19.7% 하락 중인데 선행 EPS는 +35.5% 큰 폭 상향 — 가장 뚜렷한 괴리이나 하락의 구체적 촉발 요인 미확인",
        "confidence": "보통(가격 2026-10-07 vs 보조자료 2026-09-25~28)"
      },
      "expectation_change": {"not_core_cause": true, "note": "선행 EPS +35.5% 상향 — 기대치 하향이 핵심 원인 아님"},
      "entry_status": "추격 금지",
      "entry_note": "RSI 52.7(10거래일간 70.3→61.8→52.7 과열 해소 중), 200일선 대비 +37.4% 강한 우상향 — 가격은 강하나 눌림·반등 신호 없음",
      "next_check": "가격 하락의 구체적 촉발 요인 확인(헤드라인 순손실 반응인지, Foundry 외부고객·보조금 관련 다른 요인인지), RSI 38 이하 진입 시 재평가",
      "tag": null
    },
    "BE": {
      "state": "조정 대상 아님",
      "gate": {"pass": false, "dd60": -1.5, "dd60_note": "1거래일 전 고점 대비(신고가권)", "dd90": -15.8, "dd90_note": "75거래일 전 고점 대비"},
      "summary": "최근 60거래일 고점을 어제(1거래일 전) 기록, dd60=-1.5%로 사실상 신고가권 — \"현재 조정\"의 정의에 해당하지 않아 제외",
      "note2": "부채·희석 우려(부채+120% YoY, 발행주식수+25.9% YoY)는 142 기대충족 판정에서 별도로 다룹니다",
      "tag": null
    },
    "MOD": {
      "state": "신규 접근 중지",
      "gate": {"pass": true, "dd60": -24.1, "dd60_note": "54거래일 전 고점 대비", "dd90": -38.3, "dd90_note": "88거래일 전 고점 대비"},
      "business_premise": {
        "status": "구조 훼손 우려",
        "support": ["매출 +28%", "백로그 2배 증가 — 수요 측면은 강한 신호"],
        "caution": ["Data Centers 부문 마진 -960bp(큰 폭)", "FCF 음전환 — 마진·현금전환 동시 악화", "반복성(2개 분기 이상 연속) 여부는 다음 분기 데이터로 추가 확인 필요"]
      },
      "expectation_change": {"not_core_cause": false, "note": "선행 EPS -5.5% 하향(소폭이나 구조훼손 판정과 방향 일치)"},
      "entry_status": null,
      "next_check": "다음 1~2개 분기 연속 Data Centers 마진 회복, FCF 플러스 재전환, 재고 정상화 중 2개 이상 확인되면 '일시 부담 가능'으로 재분류 후 재평가",
      "tag": null
    }
  }
};
