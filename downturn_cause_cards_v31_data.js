// downturn_cause_cards_v31_data.js
// 하락 원인 진단 카드 데이터 (v3.1) — 읽기 전용, 자동매매/텔레그램/매수매도신호 연결 없음
// 생성: 2026-10-08T00:00:00
// 출처: DOWNTURN_CAUSE_CARD_DECLARATION_v3_1_20261008.md, DOWNTURN_CAUSE_CARD_PILOT_v3_1_20261008.md (수동 반영, 자동 생성 아님)
// ORCL 정정: 2026-10-08 Oracle 공식 FY2026 실적발표 + Q1 FY2027 8-K(Exhibit 99.1)로 "$40B 전액 신규 부채" 표현을 표현 정정으로 정정.
//   재무 부담 우려 자체는 유효한 별도 사실로 유지. 기존 SOURCE_CORRECTION_CASE(일반 하락 원인을 무효화하는 태그) 용도로는 더 이상 쓰지 않음.
// 주의: 이 데이터에 없는 종목은 '최근 구조화 사건 없음'으로 표시한다. 빈 값·추정값으로 채우지 않는다.
const DOWNTURN_CAUSE_CARDS_V31 = {
 "generated": "2026-10-11T00:00:00",
 "source": "DOWNTURN_CAUSE_CARD_DECLARATION_v3_1_20261008.md / PILOT_v3_1_20261008.md",
 "note": "이 데이터에 없는 종목은 '최근 구조화 사건 없음'으로 표시한다. 2026-10-11 전면 확장: 39개 전체 종목에 대해 '진짜 조정' 게이트(dd60/dd90)를 기계적으로 재계산한 결과 21개 종목이 게이트를 통과하는 것으로 확인되어(이전에는 pilot 6종목만 점검), 신규 17개 종목(CRM/AVGO/QCOM/ARM/ASML/AMAT/LRCX/KLAC/MU/SNDK/WDC/COHR/GEV/VRT/STX/FIX/BE)에 대해 1차 소스 우선 원칙으로 실제 조사를 수행하여 카드를 추가했다(지어내지 않음, 미확인 사항은 'unverified' 필드로 명시). 가격 게이트는 2026-10-09 종가 기준. 기존 ORCL/HUBB/INTC/MOD의 사업/하락원인 분석 내용은 그대로 유지하고 게이트 수치만 갱신했다. BE는 게이트 상태가 가장 최근(2026-10-07→10-09 사이) '조정 대상 아님'에서 '진짜 조정'으로 전환되어 기존 항목을 신규 조사 항목으로 전면 교체했다.",
 "tickers": {
  "TSLA": {
   "state": "조정 대상 아님",
   "gate": {
    "pass": false,
    "dd60": 0.0,
    "dd60_note": "최근 60거래일 고점 대비 0.0% (당일 고점, 재조정 아님)",
    "dd90": -10.0,
    "dd90_note": "최근 90거래일 고점 대비 -10.0% (70거래일 전 고점)"
   },
   "summary": "최근 60거래일 고점 대비 -4.2%(최근 종가 354.11→370.59→378.73→380.68→377.81로 반등 중) — \"현재 조정\"의 정의에 해당하지 않아 이번 진단 대상에서 제외",
   "note2": "사업 전제상 우려(영업이익률, 규제크레딧 매출 급감 등)는 이 카드가 아니라 시장 기대충족 판정에서 별도로 다룹니다",
   "tag": null,
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": 1.3,
    "dd60_days_ago": 3,
    "dd60_note": "최근 60거래일 고점 대비 1.3% (3거래일 전 고점)",
    "dd90": -7.9,
    "dd90_days_ago": 81,
    "dd90_note": "최근 90거래일 고점 대비 -7.9% (81거래일 전 고점)",
    "decomposition": {
     "window_days": 3,
     "sector_etf": "IDRV",
     "stock_return_pct": 1.3,
     "market_part_pct": -1.0,
     "sector_part_pct": -2.3,
     "individual_part_pct": 4.7,
     "note": "최근 3거래일 - 시장(SPY) -1.0%p + 섹터(IDRV, 시장 제외) -2.3%p + 개별 4.7%p"
    },
    "eps_direction": "하향",
    "eps_note": "전망치가 내려가는 중",
    "eps_updated_at": "2026-10-26T08:01:08+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-10-22",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": true
  },
  "ORCL": {
   "state": "관찰 — 사업 또는 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -13.0,
    "dd60_note": "최근 60거래일 고점 대비 -13.0% (23거래일 전 고점)",
    "dd90": -40.2,
    "dd90_note": "최근 90거래일 고점 대비 -40.2% (88거래일 전 고점)"
   },
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
   "expectation_change": {
    "not_core_cause": null,
    "note": "부채·CAPEX 부담이 EPS·가이던스 전망 자체에 어떤 영향을 주는지 다음 분기 가이던스로 재확인 필요"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "RSI 49.7(38 초과), 200일선 대비 -11.6% 하락추세 — 최근 10거래일 RSI 최저 42.7, 38 이하 미도달",
   "next_check": "다음 분기 FCF 추이(CAPEX 대비 OCF), 추가 신용등급 조정 여부, RSI 38 이하 진입 여부 확인되면 재평가",
   "tag": "표현 정정",
   "tag_note": "\"FY2027 중 $40B 전액이 신규 부채\"라는 좁은 표현은 정정(실제는 부채·지분 조합 약 $40B 조달 계획, $20B ATM 지분발행 포함). 다만 이 표현 정정이 CAPEX·FCF·자금조달 부담 자체를 반증하는 것은 아님 — 성장 근거와 자본 부담을 동등하게 표시",
   "sources": [
    "Oracle FY2026 실적발표: https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Record-Q4-and-FY-2026-Results-Driven-by-Cloud-Infrastructure--Cloud-Applications/",
    "Oracle Q1 FY2027 8-K Exhibit 99.1: https://www.sec.gov/Archives/edgar/data/1341439/000119312526387905/orcl-ex99_1.htm"
   ],
   "unverified": "S&P 신용등급 하향(2026-07-09, BBB→BBB-) 및 복수 애널리스트 목표가 동시 하향은 원문·1차 출처 확보 전까지 보조 설명으로만 표시(미확인 정보)",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -22.4,
    "dd60_days_ago": 34,
    "dd60_note": "최근 60거래일 고점 대비 -22.4% (34거래일 전 고점)",
    "dd90": -31.6,
    "dd90_days_ago": 89,
    "dd90_note": "최근 90거래일 고점 대비 -31.6% (89거래일 전 고점)",
    "decomposition": {
     "window_days": 34,
     "sector_etf": "XLK",
     "stock_return_pct": -22.4,
     "market_part_pct": -0.1,
     "sector_part_pct": -0.7,
     "individual_part_pct": -21.6,
     "note": "최근 34거래일 - 시장(SPY) -0.1%p + 섹터(XLK, 시장 제외) -0.7%p + 개별 -21.6%p"
    },
    "eps_direction": "보합",
    "eps_note": "거의 변화 없음",
    "eps_updated_at": "2026-10-26T08:01:21+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-09-11",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "HUBB": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -8.8,
    "dd60_note": "최근 60거래일 고점 대비 -8.8% (42거래일 전 고점)",
    "dd90": -12.1,
    "dd90_note": "최근 90거래일 고점 대비 -12.1% (77거래일 전 고점)"
   },
   "business_premise": {
    "status": "일시 부담 가능(조건부)",
    "support": [
     "유기성장 +10%",
     "선행 EPS +1.6% 상향"
    ],
    "caution": [
     "조정영업마진 -50bp — M&A(NSI 인수) 통합·자금조달 비용으로 설명됨(일회성 성격)"
    ]
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "하락과 날짜 기준으로 연결되는 공식 공시 사건이나 섹터 동반 하락 근거를 확인하지 못함",
    "price_expectation_gap": true,
    "gap_note": "dd60=-8.5%/dd90=-11.9% 하락 중인데 선행 EPS는 +1.6% 상향 — 방향 반대(보조 근거, 인과관계 미확인)",
    "confidence": "보통(가격 2026-10-07 vs 보조자료 2026-09-25~28)"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": "선행 EPS 상향 — 기대치 하향이 핵심 원인 아님"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "RSI 55.5, 200일선 대비 -2.7% 약한 하락추세",
   "next_check": "하락 시점과 연결되는 공식 공시(실적 외 사건) 또는 섹터 동반 하락 여부 확인, 다음 분기 조정영업마진 회복 여부 확인되면 재평가",
   "tag": null,
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -11.6,
    "dd60_days_ago": 53,
    "dd60_note": "최근 60거래일 고점 대비 -11.6% (53거래일 전 고점)",
    "dd90": -14.8,
    "dd90_days_ago": 88,
    "dd90_note": "최근 90거래일 고점 대비 -14.8% (88거래일 전 고점)",
    "decomposition": {
     "window_days": 53,
     "sector_etf": "XLI",
     "stock_return_pct": -11.6,
     "market_part_pct": -0.7,
     "sector_part_pct": -9.4,
     "individual_part_pct": -1.5,
     "note": "최근 53거래일 - 시장(SPY) -0.7%p + 섹터(XLI, 시장 제외) -9.4%p + 개별 -1.5%p"
    },
    "eps_direction": "혼조",
    "eps_note": "숫자 변화와 상·하향 횟수의 방향이 엇갈림",
    "eps_updated_at": "2026-10-15T04:27:41",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-10-27",
    "latest_earnings_filing_form": "8-K",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": true
  },
  "INTC": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -17.8,
    "dd60_note": "최근 60거래일 고점 대비 -17.8% (11거래일 전 고점)",
    "dd90": -25.7,
    "dd90_note": "최근 90거래일 고점 대비 -25.7% (77거래일 전 고점)"
   },
   "business_premise": {
    "status": "유지",
    "support": [
     "매출 +25% YoY",
     "GAAP 영업이익 흑자전환($1.8B)",
     "순손실은 비현금성(정부 관련 에스크로 주식) 평가손"
    ],
    "caution": []
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "\"헤드라인 순손실 숫자에 대한 과민반응 가능성\"은 날짜 기준으로 확인된 공식 사건이 아닌 추정 — 2-A 불충족",
    "price_expectation_gap": true,
    "gap_note": "dd60=-11.2%/dd90=-19.7% 하락 중인데 선행 EPS는 +35.5% 큰 폭 상향 — 가장 뚜렷한 괴리이나 하락의 구체적 촉발 요인 미확인",
    "confidence": "보통(가격 2026-10-07 vs 보조자료 2026-09-25~28)"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": "선행 EPS +35.5% 상향 — 기대치 하향이 핵심 원인 아님"
   },
   "entry_status": "추격 금지",
   "entry_note": "RSI 52.7(10거래일간 70.3→61.8→52.7 과열 해소 중), 200일선 대비 +37.4% 강한 우상향 — 가격은 강하나 눌림·반등 신호 없음",
   "next_check": "가격 하락의 구체적 촉발 요인 확인(헤드라인 순손실 반응인지, Foundry 외부고객·보조금 관련 다른 요인인지), RSI 38 이하 진입 시 재평가",
   "tag": null,
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -29.0,
    "dd60_days_ago": 22,
    "dd60_note": "최근 60거래일 고점 대비 -29.0% (22거래일 전 고점)",
    "dd90": -35.8,
    "dd90_days_ago": 88,
    "dd90_note": "최근 90거래일 고점 대비 -35.8% (88거래일 전 고점)",
    "decomposition": {
     "window_days": 22,
     "sector_etf": "SMH",
     "stock_return_pct": -29.0,
     "market_part_pct": -0.2,
     "sector_part_pct": -9.6,
     "individual_part_pct": -19.2,
     "note": "최근 22거래일 - 시장(SPY) -0.2%p + 섹터(SMH, 시장 제외) -9.6%p + 개별 -19.2%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-26T08:03:22+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-07-24",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "BE": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -5.2,
    "dd60_note": "최근 60거래일 고점 대비 -5.2% (3거래일 전 고점, 최근 게이트 전환)",
    "dd90": -18.9,
    "dd90_note": "최근 90거래일 고점 대비 -18.9% (77거래일 전 고점)"
   },
   "business_premise": {
    "status": "확인 필요",
    "support": [
     "2026-07-29 Q2 2026 실적에서 매출 +130% 서프라이즈 및 가이던스 상향(단, 변동성 높은 종목)"
    ],
    "caution": [
     "2026년 동안 Jefferies/Mizuho/Redburn/Truist 등에서 밸류에이션 사유의 반복적 하향 패턴"
    ]
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "최근 3거래일 하락 구간을 직접 설명하는 날짜 특정된 1차 소스 촉발 요인을 찾지 못함. 2025-12 Blue Owl의 Oracle 대상 $10B 금융 계약 철회로 인한 AI 인프라 섹터 매도 사례가 있었으나 이번 구간과는 시기가 다름",
    "price_expectation_gap": false,
    "gap_note": "확인된 근거가 부족해 가격-기대 괴리 여부를 판단하지 않음",
    "confidence": "낮음"
   },
   "expectation_change": {
    "not_core_cause": null,
    "note": "조사 예산 소진 — 추가 조사 필요"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "직전 '조정 대상 아님' 상태에서 2일 만에 게이트 전환되어 보수적으로 분류",
   "next_check": "최근 하락 구간의 구체적 촉발 요인 추가 확인 필요",
   "tag": null,
   "sources": [
    "BE IR"
   ],
   "unverified": "최근 3거래일 하락의 직접 촉발 요인 미확인 — 조사 예산 소진으로 중단, 추가 조사 가능",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -31.1,
    "dd60_days_ago": 14,
    "dd60_note": "최근 60거래일 고점 대비 -31.1% (14거래일 전 고점)",
    "dd90": -41.0,
    "dd90_days_ago": 88,
    "dd90_note": "최근 90거래일 고점 대비 -41.0% (88거래일 전 고점)",
    "decomposition": {
     "window_days": 14,
     "sector_etf": "ICLN",
     "stock_return_pct": -31.1,
     "market_part_pct": -1.8,
     "sector_part_pct": -9.6,
     "individual_part_pct": -19.7,
     "note": "최근 14거래일 - 시장(SPY) -1.8%p + 섹터(ICLN, 시장 제외) -9.6%p + 개별 -19.7%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-15T04:29:02",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-10-22",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": true
  },
  "MOD": {
   "state": "신규 접근 중지",
   "gate": {
    "pass": true,
    "dd60": -27.3,
    "dd60_note": "최근 60거래일 고점 대비 -27.3% (56거래일 전 고점)",
    "dd90": -39.9,
    "dd90_note": "최근 90거래일 고점 대비 -39.9% (89거래일 전 고점)"
   },
   "business_premise": {
    "status": "구조 훼손 우려",
    "support": [
     "매출 +28%",
     "백로그 2배 증가 — 수요 측면은 강한 신호"
    ],
    "caution": [
     "Data Centers 부문 마진 -960bp(큰 폭)",
     "FCF 음전환 — 마진·현금전환 동시 악화",
     "반복성(2개 분기 이상 연속) 여부는 다음 분기 데이터로 추가 확인 필요"
    ]
   },
   "expectation_change": {
    "not_core_cause": false,
    "note": "선행 EPS -5.5% 하향(소폭이나 구조훼손 판정과 방향 일치)"
   },
   "entry_status": null,
   "next_check": "다음 1~2개 분기 연속 Data Centers 마진 회복, FCF 플러스 재전환, 재고 정상화 중 2개 이상 확인되면 '일시 부담 가능'으로 재분류 후 재평가",
   "tag": null,
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -39.9,
    "dd60_days_ago": 49,
    "dd60_note": "최근 60거래일 고점 대비 -39.9% (49거래일 전 고점)",
    "dd90": -56.2,
    "dd90_days_ago": 89,
    "dd90_note": "최근 90거래일 고점 대비 -56.2% (89거래일 전 고점)",
    "decomposition": {
     "window_days": 49,
     "sector_etf": "XLI",
     "stock_return_pct": -39.9,
     "market_part_pct": -0.9,
     "sector_part_pct": -9.4,
     "individual_part_pct": -29.5,
     "note": "최근 49거래일 - 시장(SPY) -0.9%p + 섹터(XLI, 시장 제외) -9.4%p + 개별 -29.5%p"
    },
    "eps_direction": "혼조",
    "eps_note": "숫자 변화와 상·하향 횟수의 방향이 엇갈림",
    "eps_updated_at": "2026-10-15T04:28:08",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-07-30",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "CRM": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -13.3,
    "dd60_note": "25거래일 전 고점 대비",
    "dd90": -13.3,
    "dd90_note": "25거래일 전 고점 대비"
   },
   "business_premise": {
    "status": "재확인 필요(일시 부담 가능 / 구조 훼손 우려 중 단정 불가)",
    "support": [
     "2026.8.26 발표 FY2027 2분기(7월 마감) 매출 113.5억 달러, YoY +11%, 구독·지원 매출 108억 달러 YoY +12% (Salesforce IR)",
     "같은 분기 cRPO 335억 달러 YoY +14%, 비GAAP 영업이익률 34.1%, 비GAAP EPS 5.90달러 YoY +103%",
     "Agentforce+Data 360 ARR 약 39억 달러(YoY +210%), Agentforce 단독 ARR 15억 달러 초과(YoY +240%)",
     "실적 발표 후 FY2027 매출 가이던스를 461~464억 달러로 상향, 9/16 Investor Day에서 Stifel·Canaccord·Guggenheim·Freedom Capital이 목표가를 275~300달러로 상향"
    ],
    "caution": [
     "BofA(2026.5.18)가 Underperform으로 커버리지 재개(목표가 160달러) — 'AI 에이전트가 좌석 기반 라이선스 수요를 구조적으로 줄일 수 있다'는 논리",
     "9/16~18 Investor Day에서 FY2027 가이던스를 상단으로만 올리고 FY2028 가이던스는 미제시 — 발표 직후(9/18) 주가 3% 하락, 목표가 상향과 반대로 움직임",
     "'AI가 SaaS를 대체한다'는 섹터 서사가 지속되며 밸류에이션 멀티플 압박, 10월 초 평균 목표가($281)와 종가(약 $225) 간 괴리 지속"
    ]
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "이번 하락 구간(9월 초~10월 9일) 내 섹터 전반 셀오프나 금리·정책 충격 등 외부발 1차 사건은 확인되지 않음. 현재 하락은 회사 자체 이벤트(Investor Day 가이던스)와 AI 디스럽션 서사에 더 가깝게 연결됨",
    "price_expectation_gap": true,
    "gap_note": "9/16~18 Investor Day 직후 Stifel·Canaccord·Guggenheim·Freedom Capital이 목표가를 275~300달러로 상향하고 JPMorgan도 긍정 평가했음에도 주가는 반대로 하락(9/18 -3%, 이후도 하락세) — 기대-가격 괴리 패턴",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": null,
    "note": "가이던스 상향 폭이 시장 기대(더 큰 상향 또는 FY2028 가이던스 제시)에 못 미쳤다는 점이 하락의 핵심 트리거로 보이나, 이것이 '일시적 기대 조정'인지 '성장 둔화 재평가'인지는 이번 조사만으로 단정할 수 없어 null로 둠"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "기술적 신호 데이터는 이 조사 범위 밖(같은 눌림목·반등 신호 로직 재사용 예정)",
   "next_check": "12월경 FY2027 3분기 실적에서 성장 재가속 여부, Agentforce/Data 360 ARR 성장률 유지 여부, BofA의 '좌석 기반 라이선스 구조적 축소' 논리를 뒷받침하는 구체적 사례가 1차 자료로 확인되는지 추적 필요",
   "tag": null,
   "sources": [
    "https://investor.salesforce.com/news/news-details/2026/Salesforce-Delivers-Record-Second-Quarter-Fiscal-2027-Results/default.aspx",
    "https://www.sec.gov/Archives/edgar/data/0001108524/000110852426000210/crm-20260916.htm",
    "https://finance.yahoo.com/markets/stocks/articles/bofa-slaps-salesforce-underperform-rating-153256535.html",
    "https://www.tikr.com/blog/salesforce-stock-fell-8-in-a-year-heres-where-the-streets-target-sits-now",
    "https://parameter.io/salesforce-crm-stock-drops-3-despite-bullish-analyst-upgrades-and-300-price-targets/"
   ],
   "unverified": "price_expectation_gap 판단은 실시간 컨센서스 EPS 수정치가 아닌 애널리스트 목표가 변화를 대리지표로 사용함. Investor Day 투자자 프레젠테이션 원문 전체 수치는 직접 확인하지 못함",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -6.4,
    "dd60_days_ago": 36,
    "dd60_note": "최근 60거래일 고점 대비 -6.4% (36거래일 전 고점)",
    "dd90": -6.4,
    "dd90_days_ago": 36,
    "dd90_note": "최근 90거래일 고점 대비 -6.4% (36거래일 전 고점)",
    "decomposition": {
     "window_days": 36,
     "sector_etf": "IGV",
     "stock_return_pct": -6.4,
     "market_part_pct": -1.0,
     "sector_part_pct": 5.2,
     "individual_part_pct": -10.5,
     "note": "최근 36거래일 - 시장(SPY) -1.0%p + 섹터(IGV, 시장 제외) 5.2%p + 개별 -10.5%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-26T08:01:35+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-08-27",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "AVGO": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -15.5,
    "dd60_note": "44거래일 전 고점 대비",
    "dd90": -24.6,
    "dd90_note": "89거래일 전 고점 대비"
   },
   "business_premise": {
    "status": "재확인 필요(일시 부담 가능 / 구조 훼손 우려 중 단정 불가)",
    "support": [
     "FY2026 3분기(2026.9.2 발표) 매출 296억 달러(YoY +86%), AI 반도체 매출 167억 달러(YoY +221%), Non-GAAP EPS 3.32달러(YoY +96%), FCF 136.65억 달러(매출의 46%) (SEC 8-K)",
     "4분기 가이던스: 매출 약 348억 달러(YoY +93%), AI 반도체 매출 217억 달러(YoY +236%) — 추가 상향",
     "실적 발표 후 JPMorgan(580달러)·RBC(400달러)·DA Davidson(400달러) 등 10개 이상 증권사가 목표가 상향, 평균 목표가 약 515달러로 상승",
     "Google과의 TPU 공급 계약이 2031년까지 확약, Anthropic이 '최대 XPU 고객사'로 성장 중"
    ],
    "caution": [
     "Macquarie가 2026년 6월경 'Neutral'로 하향(513→437달러) — Google이 MediaTek을 TPU 공급망에 추가하며 Broadcom의 Google TPU 매출 비중이 2026년 약 95%→2028년 약 65%로 낮아질 수 있다는 고객 집중 리스크",
     "Non-GAAP 매출총이익률이 3Q FY26 약 75.0%로 전년동기(약 78.4%) 대비 하락 — AI 커스텀 실리콘 비중 확대에 따른 마진 희석 가능성",
     "2026.6.23 연준 금리 전망 및 AI capex ROI 우려로 반도체주 전반 매도, 2026.10.8 미 국채금리·유가 변동에 따른 나스닥 약세와 Arista 경쟁 심화 우려"
    ]
   },
   "decline_cause": {
    "external_confirmed": true,
    "external_note": "2026.6.23 반도체 섹터 전반 금리/밸류에이션 우려 매도와 10월 상순 미 국채금리·유가 변동에 따른 나스닥 약세 등 날짜가 특정된 섹터 공통 매크로 요인이 확인됨. 다만 이것만으로 -24.6%(90일) 하락 전체를 설명하긴 부족하며, Macquarie의 고객집중 리스크 하향과 Arista 경쟁 우려도 동시 작용",
    "price_expectation_gap": true,
    "gap_note": "9/2 3분기 실적과 4분기 가이던스가 컨센서스를 상회했고 다수 증권사가 목표가를 상향했음에도 주가는 고점 대비 계속 하락 — 실적/추정치 개선과 주가가 반대로 움직인 전형적 기대-가격 괴리",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": "핵심 AI 반도체/네트워킹 사업은 가속 성장 중이며, 하락의 핵심 원인은 실적 악화가 아니라 매크로/섹터 전반 매도와 밸류에이션 되돌림, 고객 집중 리스크 우려로 판단됨"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "기술적 신호 데이터는 이 조사 범위 밖(같은 눌림목·반등 신호 로직 재사용 예정)",
   "next_check": "12월경 FY2026 4분기 실적에서 AI 반도체 매출 가이던스(217억 달러) 달성 여부, Google TPU 매출 비중 변화와 MediaTek 진입 영향, Non-GAAP 매출총이익률 추가 하락 여부 확인",
   "tag": null,
   "sources": [
    "https://www.sec.gov/Archives/edgar/data/0001730168/000173016826000076/avgo-08022026x8kxex99.htm",
    "https://www.tikr.com/blog/broadcom-just-got-downgraded-by-a-major-bank-to-a-437-target-is-the-bear-case-right",
    "https://www.marketbeat.com/originals/as-shares-fall-analyst-are-boosting-their-broadcom-price-targets/",
    "https://www.kucoin.com/news/flash/chip-stocks-lead-u-s-market-sell-off-as-ai-trading-faces-dual-pressure-from-rates-and-returns",
    "https://www.igorslab.de/en/broadcom-secures-googles-commitment-through-2031-and-anthropic-buys-its-way-into-the-next-tpu-tier/"
   ],
   "unverified": "Macquarie 하향의 정확한 날짜는 2차 소스로만 확인(원 리포트 미확인). Non-GAAP 매출총이익률은 8-K 공시 수치에서 직접 역산한 값",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -23.0,
    "dd60_days_ago": 55,
    "dd60_note": "최근 60거래일 고점 대비 -23.0% (55거래일 전 고점)",
    "dd90": -23.0,
    "dd90_days_ago": 55,
    "dd90_note": "최근 90거래일 고점 대비 -23.0% (55거래일 전 고점)",
    "decomposition": {
     "window_days": 55,
     "sector_etf": "SMH",
     "stock_return_pct": -23.0,
     "market_part_pct": -1.0,
     "sector_part_pct": -6.0,
     "individual_part_pct": -16.0,
     "note": "최근 55거래일 - 시장(SPY) -1.0%p + 섹터(SMH, 시장 제외) -6.0%p + 개별 -16.0%p"
    },
    "eps_direction": "보합",
    "eps_note": "거의 변화 없음",
    "eps_updated_at": "2026-10-26T08:02:28+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-09-10",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "QCOM": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -13.1,
    "dd60_note": "10거래일 전 고점 대비",
    "dd90": -29.8,
    "dd90_note": "89거래일 전 고점 대비"
   },
   "business_premise": {
    "status": "재확인 필요(일시 부담 가능 / 구조 훼손 우려 중 단정 불가)",
    "support": [
     "FY2026 3분기(6월 마감, 2026.7.29 발표) 매출 99.5억 달러로 컨센서스 상회, 자동차 부문 매출 YoY 약 61% 급증(약 9.84억 달러) (Qualcomm IR)",
     "2026.9.22 Qualcomm이 신규 Android용 AI칩 출시, 비스마트폰(디바이스 AI) 다각화 지속"
    ],
    "caution": [
     "같은 3분기 실적에서 휴대폰 부문 매출이 YoY 약 20% 감소 — 메모리(DRAM/NAND) 가격 급등으로 스마트폰 제조사 BOM 비용 부담 확대, 수요 둔화 우려",
     "2026.7.29 Qualcomm이 Apple의 자체 C2 모뎀 전환이 예상보다 빨라지고 있다고 공시, Apple向 모뎀 매출이 더 빠르게 축소될 것으로 언급",
     "FY2026 4분기(9월 마감) 가이던스가 컨센서스 EPS 대비 약 12% 하회, 발표 당일 주가 약 7% 하락",
     "2026.9.1부로 메모리 원가 상승을 이유로 두 자릿수대 칩 가격 인상 단행 — OEM 원가 부담 전가 가능성",
     "TD Cowen이 2026.7.30 목표가를 175달러로 하향, 최근 3개월간 약 25~30% 하락하며 '핸드셋 리스크 vs 자동차 성장' 구도로 보도됨"
    ]
   },
   "decline_cause": {
    "external_confirmed": true,
    "external_note": "메모리(DRAM/NAND) 가격 급등에 따른 스마트폰 OEM 원가 부담 확대라는 업계 전반의 외생적 요인이 7월 실적 발표 및 9월 칩 가격 인상 발표에서 반복 언급되었고 시점도 하락 구간과 일치하나, 순수 일시적 외부 쇼크가 아니라 당분간 지속될 수 있는 구조적 비용 압박 성격도 있음",
    "price_expectation_gap": false,
    "gap_note": "주가 하락은 실적/가이던스 둔화 및 목표가 하향과 같은 방향으로 움직여, 추정치가 반대로 개선되는 기대-가격 괴리 패턴은 발견되지 않음",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": false,
    "note": "하락의 핵심 축은 휴대폰 부문 매출 둔화(-20% YoY)와 Apple 모뎀 매출의 예상보다 빠른 축소라는 핵심 사업 자체의 약화 신호와 맞물려 있어 '핵심 사업과 무관한 일시적 노이즈'로 단정하기 어려움. 자동차 부문 성장(+61%)이 일부 상쇄하나 매출 비중은 아직 작음"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "기술적 신호 데이터는 이 조사 범위 밖(같은 눌림목·반등 신호 로직 재사용 예정)",
   "next_check": "11월 FY2026 4분기 실적에서 휴대폰 매출 감소세 지속 여부, 자동차/IoT 부문의 상쇄 속도, Apple 모뎀 매출 축소 구체 수치, 메모리 가격 추이를 1차 자료로 재확인 필요",
   "tag": null,
   "sources": [
    "https://s204.q4cdn.com/645488518/files/doc_financials/2026/q3/FY2026-3rd-Quarter-Earnings-Release.pdf",
    "https://www.macrumors.com/2026/07/29/qualcomm-apple-modem-revenue-dropping/",
    "https://www.cnbc.com/2026/09/22/qualcomm-releases-android-chip-built-for-ai-amid-memory-shortage.html",
    "https://www.nasdaq.com/articles/qcom-falls-306-3-months-handset-risks-challenge-auto-growth",
    "https://www.marketbeat.com/instant-alerts/qualcomm-nasdaqqcom-price-target-cut-to-17500-by-analysts-at-td-cowen-2026-07-30/"
   ],
   "unverified": "BofA의 Underperform 등급 부여 정확한 발표일 미확정. 중국向 수출통제의 QCOM 직접 영향 규모는 1차 소스로 확인되지 않음",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -11.1,
    "dd60_days_ago": 21,
    "dd60_note": "최근 60거래일 고점 대비 -11.1% (21거래일 전 고점)",
    "dd90": -20.6,
    "dd90_days_ago": 89,
    "dd90_note": "최근 90거래일 고점 대비 -20.6% (89거래일 전 고점)",
    "decomposition": {
     "window_days": 21,
     "sector_etf": "SMH",
     "stock_return_pct": -11.1,
     "market_part_pct": -0.8,
     "sector_part_pct": -9.9,
     "individual_part_pct": -0.4,
     "note": "최근 21거래일 - 시장(SPY) -0.8%p + 섹터(SMH, 시장 제외) -9.9%p + 개별 -0.4%p"
    },
    "eps_direction": "하향",
    "eps_note": "전망치가 내려가는 중",
    "eps_updated_at": "2026-10-26T08:02:42+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-07-29",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "ARM": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -20.1,
    "dd60_note": "13거래일 전 고점 대비",
    "dd90": -39.4,
    "dd90_note": "78거래일 전 고점 대비"
   },
   "business_premise": {
    "status": "유지",
    "support": [
     "Q1 FYE27(2026.6.30 마감) 매출 12.9억 달러 YoY +22%, 1분기 기준 사상 최대 — 로열티 매출 7.15억 달러(+22%), 라이선싱 매출 5.74억 달러(+23%) (Arm 뉴스룸)",
     "데이터센터 로열티 YoY 2배 이상 증가, Neoverse 코어 누적 출하 15억개 돌파",
     "NVIDIA Vera 완전 양산, Google Axion TPU 호스트 CPU 채택, AWS·Meta Graviton5, Microsoft Azure Cobalt 200 확장, Qualcomm Dragonfly C1000 신규 진입",
     "비GAAP 영업이익률 41.2%로 전분기 대비 약 200bp 개선"
    ],
    "caution": [
     "CFO가 연간 로열티 성장률 가이던스를 '약 20%'에서 '하이틴(10%대 후반)'으로 하향, 2분기 로열티 성장률 13% 가이던스 — 메모리 가격 상승에 따른 스마트폰向 로열티 전망 둔화가 주 원인으로 지목",
     "시장은 이를 'Beat Priced Out'으로 해석, 실적 발표 직후 주가 약 8% 하락",
     "매출 대비 약 49배 멀티플에 거래 중 — '가속 성장'을 가격에 반영했으나 현재 트렌드·가이던스가 이를 아직 뒷받침하지 못한다는 평가(Kavout)"
    ]
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "2026.9.28~29 급락은 AI 안전성 우려·국채금리 상승에 따른 기술주 매도, OpenAI 트레이닝 일시중단설 등이 보도되었으나 2차 자료이며 원문 미확인 — 매크로/섹터 전반 AI 밸류에이션 재조정 성격이 강해 ARM 고유의 구조적 악화로 보기 어려움",
    "price_expectation_gap": true,
    "gap_note": "8월 Q1 FYE27 실적은 매출·영업이익률 모두 기록적이고 가이던스도 상회(Record Revenue and a Guidance Beat)였음에도 주가는 즉시 약 8% 하락 — 사업 펀더멘털은 견조하나 49배 매출 멀티플이 요구하는 '가속 성장'엔 못 미친다는 밸류에이션 재평가가 핵심",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": "사업 핵심 지표(로열티+22%, 라이선스+23%, 데이터센터 로열티 2배 이상, 마진 개선)는 악화되지 않음. 하락은 연간 로열티 가이던스 하향에 따른 기대 조정, 49배 멀티플 밸류에이션 재평가, 9월 말 AI 섹터 매크로 매도가 겹친 것으로 사업 구조적 훼손 증거는 확인되지 않음"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "기술적 신호 데이터는 이 조사 범위 밖(같은 눌림목·반등 신호 로직 재사용 예정)",
   "next_check": "11월 Q2 FYE27 실적에서 로열티 성장률이 가이던스(13%, 연간 하이틴)를 충족하는지, 스마트폰向 메모리 가격 영향 지속 여부, China 매출 비중 및 수출규제 관련 추가 공시 확인 필요",
   "tag": null,
   "sources": [
    "https://newsroom.arm.com/news/arm-q1-fye27-results",
    "https://www.tikr.com/blog/arm-stock-fell-8-after-reporting-record-q1-earnings-revenue-of-1-29-billion-heres-the-bigger-picture",
    "https://www.kavout.com/market-lens/arm-s-royalty-uplift-is-priced-a-49x-sales-multiple-meets-normalizing-growth",
    "https://wealthawesome.com/why-arm-holdings-stock-plummeted-yesterday-09292026"
   ],
   "unverified": "SoftBank 지분 매각 관련 2026년 최신 동향 미확인. China 수출규제가 이번 하락과 직접 관련 있는지도 확인되지 않음. 9월 말 급락의 'OpenAI 트레이닝 중단설'은 원 소스 미확인으로 신뢰도 낮음",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -33.0,
    "dd60_days_ago": 24,
    "dd60_note": "최근 60거래일 고점 대비 -33.0% (24거래일 전 고점)",
    "dd90": -49.2,
    "dd90_days_ago": 89,
    "dd90_note": "최근 90거래일 고점 대비 -49.2% (89거래일 전 고점)",
    "decomposition": {
     "window_days": 24,
     "sector_etf": "SMH",
     "stock_return_pct": -33.0,
     "market_part_pct": -1.0,
     "sector_part_pct": -9.8,
     "individual_part_pct": -22.1,
     "note": "최근 24거래일 - 시장(SPY) -1.0%p + 섹터(SMH, 시장 제외) -9.8%p + 개별 -22.1%p"
    },
    "eps_direction": "보합",
    "eps_note": "거의 변화 없음",
    "eps_updated_at": "2026-10-26T08:02:55+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-09-18",
    "latest_earnings_filing_form": "6-K",
    "latest_earnings_filing_level": "uncertain"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "ASML": {
   "state": "건강한 조정 후보 — 진입 신호 대기",
   "gate": {
    "pass": true,
    "dd60": -5.5,
    "dd60_note": "최근 60거래일 고점 대비 -5.5% (38거래일 전 고점)",
    "dd90": -10.5,
    "dd90_note": "최근 90거래일 고점 대비 -10.5% (71거래일 전 고점)"
   },
   "business_premise": {
    "status": "견조",
    "support": [
     "2026-10-14 Q3 실적: 매출 €11.66B(분기 사상 최대, 전년 동기 대비 약 +55%), 매출총이익률 57.5%, 순이익 €4.96B",
     "2026년 연간 매출 가이던스 €44~45B, 4분기 €14.2~15.2B",
     "CEO: 2027·2028년 계획 공급량이 고객 수요를 다 채우지 못함(일부 고객 2029~2030년 물량 주문 희망)",
     "High-NA EUV 채택 가속"
    ],
    "caution": [
     "Q3 신규 수주(bookings) 수치는 이번 발표에서 공개되지 않음 — 수요 판단은 경영진 발언 기준"
    ]
   },
   "decline_cause": {
    "external_confirmed": true,
    "external_note": "2026-09-14~15 Anthropic CEO의 'AI 지출 속도' 관련 발언을 계기로 반도체 장비 섹터 전반 동반 매도 발생(1차 소스 아님, 복수 매체 보도)",
    "price_expectation_gap": true,
    "gap_note": "실적/가이던스 상향 및 2027 EPS 컨센서스 상향이 지속되는 중에도 주가는 하락 — 업황 펀더멘털과 무관한 섹터 동반 매도로 판단",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": "사업 실적 추정치는 오히려 개선되는 중이며 하락은 섹터 동반 매도 성격"
   },
   "entry_status": "하락 원인 확인됨 — 눌림목·반등 신호 미확인",
   "entry_note": "[2026-10-14 갱신] Q3 실적 확인 — 매출 사상 최대·연간 가이던스 €44~45B·2027~28년 공급 부족 발언으로 사업 전제 '견조' 유지. 외부 하락 원인(섹터 동반 매도)도 그대로. 눌림목·반등 신호가 아직 없어 '분할 축적 검토'는 아님.",
   "next_check": "눌림목·반등 신호 확인 시 '분할 축적 검토'로 재평가",
   "tag": null,
   "sources": [
    "ASML 6-K(Q3 2026 실적, 2026-10-14)",
    "ASML IR",
    "Bernstein 리서치 보도(2차)"
   ],
   "unverified": "Q3 신규 수주 수치 미공개",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -15.5,
    "dd60_days_ago": 49,
    "dd60_note": "최근 60거래일 고점 대비 -15.5% (49거래일 전 고점)",
    "dd90": -20.0,
    "dd90_days_ago": 82,
    "dd90_note": "최근 90거래일 고점 대비 -20.0% (82거래일 전 고점)",
    "decomposition": {
     "window_days": 49,
     "sector_etf": "SMH",
     "stock_return_pct": -15.5,
     "market_part_pct": -0.9,
     "sector_part_pct": -7.9,
     "individual_part_pct": -6.7,
     "note": "최근 49거래일 - 시장(SPY) -0.9%p + 섹터(SMH, 시장 제외) -7.9%p + 개별 -6.7%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-26T08:03:49+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-10-14",
    "latest_earnings_filing_form": "6-K",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": true
  },
  "AMAT": {
   "state": "관찰 — 사업 또는 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -10.2,
    "dd60_note": "최근 60거래일 고점 대비 -10.2% (57거래일 전 고점)",
    "dd90": -29.9,
    "dd90_note": "최근 90거래일 고점 대비 -29.9% (71거래일 전 고점)"
   },
   "business_premise": {
    "status": "재확인 필요 — 중국 비중 하락",
    "support": [
     "FY26 Q3(8/13) 매출 +25%, 순이익 +41% (전년동기 대비, 1차 발표 기준)",
     "$252.5M BIS/SMIC 관련 합의금은 이미 9개월 실적에 반영됨"
    ],
    "caution": [
     "중국 매출 비중이 전체의 28%로 하락(수출규제 영향)",
     "Q4 암시 성장 둔화 및 매출총이익률 50.4%로 유지(가속 아님) — Morgan Stanley/UBS 지적",
     "실적 발표 후에도 주가 약 -5% (서프라이즈 대비 반응이 기대에 못 미침)"
    ]
   },
   "decline_cause": {
    "external_confirmed": true,
    "external_note": "2026-06-05 Broadcom 가이던스 쇼크, 6/22 고점 이후 SOX -11% 되돌림, 6/30 Michael Burry의 반도체 바스켓 숏 공개, 7/2 SK Hynix의 HBM 증설 둔화 우려로 SOX 급락 — 반도체 섹터 전반의 매도 압력",
    "price_expectation_gap": true,
    "gap_note": "실적은 서프라이즈를 기록했으나 중국 비중 축소와 Q4 둔화 시그널이 겹쳐 주가는 섹터 매도와 함께 하락",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": "섹터 전반 매도가 주된 하락 배경이나, 중국 비중 축소는 사업 구조상 주의 필요 요인으로 완전히 배제하기 어려움"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "RSI 등 추가 확인 필요",
   "next_check": "다음 실적에서 중국 비중 추이 확인",
   "tag": null,
   "sources": [
    "AMAT 8-K/IR",
    "Morgan Stanley/UBS 리서치 보도(2차)"
   ],
   "unverified": "6월 정확한 가격 레벨에 대해 2차 소스 간 다소 불일치 있음",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -29.3,
    "dd60_days_ago": 52,
    "dd60_note": "최근 60거래일 고점 대비 -29.3% (52거래일 전 고점)",
    "dd90": -46.4,
    "dd90_days_ago": 82,
    "dd90_note": "최근 90거래일 고점 대비 -46.4% (82거래일 전 고점)",
    "decomposition": {
     "window_days": 52,
     "sector_etf": "SMH",
     "stock_return_pct": -29.3,
     "market_part_pct": -0.9,
     "sector_part_pct": -6.5,
     "individual_part_pct": -21.9,
     "note": "최근 52거래일 - 시장(SPY) -0.9%p + 섹터(SMH, 시장 제외) -6.5%p + 개별 -21.9%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-26T08:04:02+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-08-20",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "LRCX": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -8.2,
    "dd60_note": "최근 60거래일 고점 대비 -8.2% (5거래일 전 고점)",
    "dd90": -26.4,
    "dd90_note": "최근 90거래일 고점 대비 -26.4% (71거래일 전 고점)"
   },
   "business_premise": {
    "status": "견조",
    "support": [
     "FY26 Q4(7/29) 실적 서프라이즈",
     "FY27 Q1 가이던스(매출 $8.1B±0.4B, EPS $2.15±0.15)도 견조"
    ],
    "caution": [
     "트레일링 P/E 약 55배로 밸류에이션 높음"
    ]
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "2026-04 중국 수출규제(Hua Hong/Huali 대상) 발표가 있었으나 이번 하락 구간과 날짜상 직접 연결하기엔 너무 이른 시점으로 판단",
    "price_expectation_gap": true,
    "gap_note": "실적/가이던스는 견조했음에도 밸류에이션 조정 및 반도체 섹터 전반의 차익 실현으로 주가 하락(ETF Trends 2026-07 보도)",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": "사업 추정치보다는 밸류에이션·섹터 매도 요인이 하락의 중심"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "2026-10-21 실적 확인 필요",
   "next_check": "2026-10-21 실적 발표",
   "tag": null,
   "sources": [
    "LRCX IR",
    "ETF Trends(2차, 2026-07)"
   ],
   "unverified": "이번 하락 구간을 설명하는 단일 확정 1차 소스 촉발 요인을 찾지 못함",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -31.7,
    "dd60_days_ago": 16,
    "dd60_note": "최근 60거래일 고점 대비 -31.7% (16거래일 전 고점)",
    "dd90": -45.2,
    "dd90_days_ago": 82,
    "dd90_note": "최근 90거래일 고점 대비 -45.2% (82거래일 전 고점)",
    "decomposition": {
     "window_days": 16,
     "sector_etf": "SMH",
     "stock_return_pct": -31.7,
     "market_part_pct": -0.6,
     "sector_part_pct": -13.6,
     "individual_part_pct": -17.5,
     "note": "최근 16거래일 - 시장(SPY) -0.6%p + 섹터(SMH, 시장 제외) -13.6%p + 개별 -17.5%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-26T08:04:15+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-10-22",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": true
  },
  "KLAC": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -10.6,
    "dd60_note": "최근 60거래일 고점 대비 -10.6% (55거래일 전 고점)",
    "dd90": -35.2,
    "dd90_note": "최근 90거래일 고점 대비 -35.2% (71거래일 전 고점)"
   },
   "business_premise": {
    "status": "견조",
    "support": [
     "FY26 Q4(7/28) 매출/EPS 서프라이즈"
    ],
    "caution": [
     "FY2027 Q1 가이던스 하단이 일부 추정치보다 낮게 제시되어 서프라이즈에도 당일 주가 약 -6% 하락",
     "Wells Fargo/Morgan Stanley가 Equal Weight로 하향했으나 목표가는 오히려 상향(밸류에이션 사유)"
    ]
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "확인된 외부 일시적 촉발 요인 없음",
    "price_expectation_gap": true,
    "gap_note": "실적 서프라이즈에도 가이던스 하단과 밸류에이션 우려로 주가 하락 — 애널리스트들은 목표가를 상향하면서도 등급은 하향(밸류에이션 사유 명시)",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": "밸류에이션 재평가 성격이 강함"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "",
   "next_check": "다음 실적에서 가이던스 추이 확인",
   "tag": null,
   "sources": [
    "KLAC IR",
    "Wells Fargo/Morgan Stanley 리서치 보도(2차)"
   ],
   "unverified": null,
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -28.7,
    "dd60_days_ago": 51,
    "dd60_note": "최근 60거래일 고점 대비 -28.7% (51거래일 전 고점)",
    "dd90": -50.5,
    "dd90_days_ago": 82,
    "dd90_note": "최근 90거래일 고점 대비 -50.5% (82거래일 전 고점)",
    "decomposition": {
     "window_days": 51,
     "sector_etf": "SMH",
     "stock_return_pct": -28.7,
     "market_part_pct": -1.6,
     "sector_part_pct": -6.5,
     "individual_part_pct": -20.7,
     "note": "최근 51거래일 - 시장(SPY) -1.6%p + 섹터(SMH, 시장 제외) -6.5%p + 개별 -20.7%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-26T08:04:29+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-08-06",
    "latest_earnings_filing_form": "10-K",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "MU": {
   "state": "건강한 조정 후보 — 진입 신호 대기",
   "gate": {
    "pass": true,
    "dd60": -6.2,
    "dd60_note": "최근 60거래일 고점 대비 -6.2% (6거래일 전 고점)",
    "dd90": -15.2,
    "dd90_note": "최근 90거래일 고점 대비 -15.2% (74거래일 전 고점)"
   },
   "business_premise": {
    "status": "견조",
    "support": [
     "FY26 Q4(10/1) 매출 $54.23B 사상 최대 기록",
     "FY27 Q1 가이던스 컨센서스 상회",
     "Needham/BofA 목표가 상향"
    ],
    "caution": [
     "실적 발표 전 12거래일 연속 상승 및 YTD +268% 급등 이후 '서프라이즈 선반영' 성격의 매도 발생"
    ]
   },
   "decline_cause": {
    "external_confirmed": true,
    "external_note": "2026-07 Goldman Sachs의 SK Hynix 하향(HBM 가격 우려)으로 메모리 섹터 전반 동반 매도 발생",
    "price_expectation_gap": true,
    "gap_note": "실적/가이던스가 컨센서스를 상회했음에도 주가는 '뉴스에 팔아라' 패턴과 섹터 동반 매도로 하락",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": "기존 대시보드의 EPS 상향(+25.7%) 신호와 상충하지 않음"
   },
   "entry_status": "하락 원인 확인됨 — 눌림목·반등 신호 미확인",
   "entry_note": "[2026-10-13 갱신] 외부 하락 원인(섹터 동반 매도, '뉴스에 팔아라' 패턴) 확인 + 사업 전제 견조로 '관찰'에서 상향. 눌림목·반등 신호 미확인 상태라 '분할 축적 검토'는 아님.",
   "next_check": "눌림목·반등 신호 확인 시 '분할 축적 검토'로 재평가(다음 분기 실적까지 추세 확인 병행)",
   "tag": null,
   "sources": [
    "MU IR",
    "Needham/BofA 리서치 보도(2차)"
   ],
   "unverified": null,
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -17.7,
    "dd60_days_ago": 17,
    "dd60_note": "최근 60거래일 고점 대비 -17.7% (17거래일 전 고점)",
    "dd90": -25.5,
    "dd90_days_ago": 85,
    "dd90_note": "최근 90거래일 고점 대비 -25.5% (85거래일 전 고점)",
    "decomposition": {
     "window_days": 17,
     "sector_etf": "SMH",
     "stock_return_pct": -17.7,
     "market_part_pct": 0.2,
     "sector_part_pct": -12.5,
     "individual_part_pct": -5.3,
     "note": "최근 17거래일 - 시장(SPY) 0.2%p + 섹터(SMH, 시장 제외) -12.5%p + 개별 -5.3%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-26T08:04:42+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-10-09",
    "latest_earnings_filing_form": "10-K",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "SNDK": {
   "state": "건강한 조정 후보 — 진입 신호 대기",
   "gate": {
    "pass": true,
    "dd60": -16.2,
    "dd60_note": "최근 60거래일 고점 대비 -16.2% (13거래일 전 고점)",
    "dd90": -32.3,
    "dd90_note": "최근 90거래일 고점 대비 -32.3% (74거래일 전 고점)"
   },
   "business_premise": {
    "status": "견조",
    "support": [
     "FY26 Q4(8/5) 매출 $8.965B(+51% QoQ, +372% YoY)",
     "FY27 Q1 가이던스 상향(하향 아님)",
     "Barclays/Citi/Mizuho/Jefferies 목표가 상향, AI 수요 기반 NAND 공급제약을 2027년까지 전망"
    ],
    "caution": []
   },
   "decline_cause": {
    "external_confirmed": true,
    "external_note": "2026-07-07 및 2026-10-08 전후 Samsung 실적 발표를 계기로 한 메모리 섹터 전반 동반 매도 2회 확인",
    "price_expectation_gap": true,
    "gap_note": "9/22 고점($1,887.04)에서 10/7($1,692.42)까지 되돌림 — 목표가는 계속 상향되는 중 가격만 하락",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": ""
   },
   "entry_status": "하락 원인 확인됨 — 눌림목·반등 신호 미확인",
   "entry_note": "[2026-10-13 갱신] 외부 하락 원인(메모리 섹터 동반 매도 2회) 확인 + 사업 전제 견조로 '관찰'에서 상향. 눌림목·반등 신호 미확인 상태라 '분할 축적 검토'는 아님.",
   "next_check": "눌림목·반등 신호 확인 시 '분할 축적 검토'로 재평가",
   "tag": null,
   "sources": [
    "SNDK IR",
    "Barclays/Citi/Mizuho/Jefferies 리서치 보도(2차)"
   ],
   "unverified": "주가 순환성(cyclicality) 우려를 제기하는 Seeking Alpha 기사 제목을 확인했으나 본문 내용은 검증하지 못함",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -33.5,
    "dd60_days_ago": 24,
    "dd60_note": "최근 60거래일 고점 대비 -33.5% (24거래일 전 고점)",
    "dd90": -46.2,
    "dd90_days_ago": 85,
    "dd90_note": "최근 90거래일 고점 대비 -46.2% (85거래일 전 고점)",
    "decomposition": {
     "window_days": 24,
     "sector_etf": "SMH",
     "stock_return_pct": -33.5,
     "market_part_pct": -1.0,
     "sector_part_pct": -9.8,
     "individual_part_pct": -22.6,
     "note": "최근 24거래일 - 시장(SPY) -1.0%p + 섹터(SMH, 시장 제외) -9.8%p + 개별 -22.6%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-26T08:04:56+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-08-17",
    "latest_earnings_filing_form": "10-K",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "WDC": {
   "state": "건강한 조정 후보 — 진입 신호 대기",
   "gate": {
    "pass": true,
    "dd60": -28.8,
    "dd60_note": "최근 60거래일 고점 대비 -28.8% (55거래일 전 고점)",
    "dd90": -46.8,
    "dd90_note": "최근 90거래일 고점 대비 -46.8% (78거래일 전 고점)"
   },
   "business_premise": {
    "status": "견조",
    "support": [
     "FY26 Q4(8/5) 매출 +44% YoY, 매출총이익률 +13.1%p YoY",
     "FY27 Q1 가이던스 재상향",
     "BofA/Cantor Fitzgerald/Melius/Fox Advisors가 하락 구간 중에도 목표가 상향 또는 등급 상향"
    ],
    "caution": [
     "YTD +250% 급등(6월 고점 약 $746) 이후 밸류에이션 재평가 구간"
    ]
   },
   "decline_cause": {
    "external_confirmed": true,
    "external_note": "2026-10-02 Toshiba의 HDD 생산능력 증설 발표(경쟁/공급과잉 우려, 점유율 약 17% vs WDC 40%+) 당일 -10.2% 급락",
    "price_expectation_gap": true,
    "gap_note": "펀더멘털 개선과 목표가 상향이 계속되는 중에도 경쟁사 증설 뉴스와 섹터 재평가로 하락",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": ""
   },
   "entry_status": "하락 원인 확인됨 — 눌림목·반등 신호 미확인",
   "entry_note": "[2026-10-13 갱신] 외부 하락 원인(Toshiba HDD 증설) 확인 + 사업 전제 견조로 '관찰'에서 상향. 눌림목·반등 신호 미확인 상태라 '분할 축적 검토'는 아님.",
   "next_check": "눌림목·반등 신호 확인 시 '분할 축적 검토'로 재평가",
   "tag": null,
   "sources": [
    "WDC IR",
    "BofA/Cantor Fitzgerald/Melius/Fox Advisors 리서치 보도(2차)"
   ],
   "unverified": "Toshiba 증설 구체 수치는 2차 소스만 확인됨",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -35.1,
    "dd60_days_ago": 58,
    "dd60_note": "최근 60거래일 고점 대비 -35.1% (58거래일 전 고점)",
    "dd90": -52.3,
    "dd90_days_ago": 89,
    "dd90_note": "최근 90거래일 고점 대비 -52.3% (89거래일 전 고점)",
    "decomposition": {
     "window_days": 58,
     "sector_etf": "SMH",
     "stock_return_pct": -35.1,
     "market_part_pct": -0.8,
     "sector_part_pct": -5.1,
     "individual_part_pct": -29.2,
     "note": "최근 58거래일 - 시장(SPY) -0.8%p + 섹터(SMH, 시장 제외) -5.1%p + 개별 -29.2%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-26T08:05:09+09:00",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-10-23",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": true
  },
  "COHR": {
   "state": "관찰 — 사업 또는 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -17.5,
    "dd60_note": "최근 60거래일 고점 대비 -17.5% (44거래일 전 고점)",
    "dd90": -26.5,
    "dd90_note": "최근 90거래일 고점 대비 -26.5% (77거래일 전 고점)"
   },
   "business_premise": {
    "status": "재확인 필요 — 현금흐름 악화 확인됨",
    "support": [
     "FY26 Q4(8/12) 서프라이즈, Datacenter&Comms 매출 +58.6% YoY",
     "FY27 Q1 가이던스 상향, FY2027 말까지 분기 $3B 매출 목표 신규 제시"
    ],
    "caution": [
     "같은 8-K에서 영업현금흐름이 전년동기 $633.6M에서 $79.5M로 -87% 급감",
     "Capex는 $440.8M에서 $1,102.9M로 급증(암시 FCF 약 -$1B)",
     "약 $2B 유상증자로 주식수 +27%(159.2M→202.2M) 희석"
    ]
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "확인된 외부 일시적 촉발 요인 없음",
    "price_expectation_gap": true,
    "gap_note": "7/31 $262.89 → 8/7 $379.13(실적 발표 후 급등) → 10/9 $312.62로 되돌림 — 신규 주식 공급 소화 및 섹터 차익실현 성격(2차 소스 기준 FY2027 EPS 컨센서스는 같은 90일간 +16% 상향)",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": null,
    "note": "현금흐름 악화·희석은 실제 1차 소스로 확인된 사실이라 완전히 핵심 요인에서 배제하기 어려움"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "",
   "next_check": "다음 분기 현금흐름 추이 확인",
   "tag": null,
   "sources": [
    "COHR 8-K/IR"
   ],
   "unverified": "FY2027 EPS 컨센서스 +16% 상향은 2차 소스만 확인됨",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -41.6,
    "dd60_days_ago": 55,
    "dd60_note": "최근 60거래일 고점 대비 -41.6% (55거래일 전 고점)",
    "dd90": -47.9,
    "dd90_days_ago": 88,
    "dd90_note": "최근 90거래일 고점 대비 -47.9% (88거래일 전 고점)",
    "decomposition": {
     "window_days": 55,
     "sector_etf": "XLK",
     "stock_return_pct": -41.6,
     "market_part_pct": -1.0,
     "sector_part_pct": 0.1,
     "individual_part_pct": -40.7,
     "note": "최근 55거래일 - 시장(SPY) -1.0%p + 섹터(XLK, 시장 제외) 0.1%p + 개별 -40.7%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-15T04:26:05",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-08-14",
    "latest_earnings_filing_form": "10-K",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "GEV": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -6.9,
    "dd60_note": "최근 60거래일 고점 대비 -6.9% (58거래일 전 고점)",
    "dd90": -14.5,
    "dd90_note": "최근 90거래일 고점 대비 -14.5% (71거래일 전 고점)"
   },
   "business_premise": {
    "status": "견조 — 일부 부문 주의",
    "support": [
     "2026 Q2(7/22) 매출 +22% YoY, 수주 +88%(유기적)",
     "수주잔고 전분기 대비 +$13B, 총 $176B",
     "FCF 가이던스 $11.5-12.5B로 상향",
     "Gas Power 수주잔고 100GW→116GW",
     "데이터센터 전력화 관련 수주 YTD $5B 초과"
    ],
    "caution": [
     "Wind 부문 EBITDA 손실 확대(-$165M→-$275M YoY), 수주 -40% YoY",
     "Q2 조정 EBITDA는 LSEG 컨센서스에 못 미쳐 '이익 미스' 헤드라인 발생(가이던스는 상향되었음에도)"
    ]
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "9/24 전후 시장 전반 약세일이 있었으나 명확히 날짜가 특정된 외부 촉발 요인은 확인되지 않음",
    "price_expectation_gap": true,
    "gap_note": "실적 발표 후 한 달간 주가 약 -17% 하락 — Mizuho/Jefferies/BMO/Barclays가 밸류에이션(2028년 추정치 선반영) 사유로 중립/보유로 하향한 반면, Guggenheim은 동시에 업계 최고 목표가($1,450)로 상향",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": "Wind 부문 악화는 주의 요인이나 전체 하락의 핵심 원인은 밸류에이션 재평가로 판단"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "",
   "next_check": "Wind 부문 턴어라운드 여부 확인",
   "tag": null,
   "sources": [
    "GEV IR",
    "Mizuho/Jefferies/BMO/Barclays/Guggenheim 리서치 보도(2차)"
   ],
   "unverified": null,
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -20.7,
    "dd60_days_ago": 49,
    "dd60_note": "최근 60거래일 고점 대비 -20.7% (49거래일 전 고점)",
    "dd90": -27.2,
    "dd90_days_ago": 82,
    "dd90_note": "최근 90거래일 고점 대비 -27.2% (82거래일 전 고점)",
    "decomposition": {
     "window_days": 49,
     "sector_etf": "ICLN",
     "stock_return_pct": -20.7,
     "market_part_pct": -0.9,
     "sector_part_pct": -13.2,
     "individual_part_pct": -6.6,
     "note": "최근 49거래일 - 시장(SPY) -0.9%p + 섹터(ICLN, 시장 제외) -13.2%p + 개별 -6.6%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-15T04:26:32",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-07-22",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "VRT": {
   "state": "관찰 — 사업 또는 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -20.3,
    "dd60_note": "최근 60거래일 고점 대비 -20.3% (57거래일 전 고점)",
    "dd90": -32.2,
    "dd90_note": "최근 90거래일 고점 대비 -32.2% (77거래일 전 고점)"
   },
   "business_premise": {
    "status": "재확인 필요 — 성장 둔화 우려 제기됨",
    "support": [
     "2026 Q2(7/29) 희석 EPS +53% YoY, 조정 EPS +60% YoY",
     "FY 가이던스 전 지표 상향",
     "2026-08 오하이오 제조 확장($50M) 발표로 수요 자신감 시사"
    ],
    "caution": [
     "실적 발표 당일 주가 급락(2차 소스 간 -11%~-17%로 수치 불일치)",
     "수주 성장률 둔화('주문 감속') 우려(Barron's)",
     "9월 하향: Jefferies(AI 캐펙스 둔화 리스크), Melius(Buy→Hold, 목표가 $125, '기대가 과도했다'), JPMorgan(목표가 $132→$100)"
    ]
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "확인된 외부 일시적 촉발 요인 없음",
    "price_expectation_gap": true,
    "gap_note": "EPS/수주 서프라이즈에도 성장률 둔화 해석과 애널리스트 하향이 주가 하락과 겹쳤으나, 하향이 하락과 독립적인지 명확히 구분하기 어려움",
    "confidence": "낮음"
   },
   "expectation_change": {
    "not_core_cause": null,
    "note": "애널리스트 하향이 가격 하락과 동시에 발생해 인과관계를 깔끔히 분리하기 어려움"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "",
   "next_check": "다음 분기 수주 성장률 확인",
   "tag": null,
   "sources": [
    "VRT IR",
    "Barron's/Jefferies/Melius/JPMorgan 리서치 보도(2차)"
   ],
   "unverified": "실적 발표 당일 하락률이 2차 소스 간 -11%~-17%로 불일치",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -32.0,
    "dd60_days_ago": 50,
    "dd60_note": "최근 60거래일 고점 대비 -32.0% (50거래일 전 고점)",
    "dd90": -44.2,
    "dd90_days_ago": 88,
    "dd90_note": "최근 90거래일 고점 대비 -44.2% (88거래일 전 고점)",
    "decomposition": {
     "window_days": 50,
     "sector_etf": "XLI",
     "stock_return_pct": -32.0,
     "market_part_pct": -1.4,
     "sector_part_pct": -9.1,
     "individual_part_pct": -21.5,
     "note": "최근 50거래일 - 시장(SPY) -1.4%p + 섹터(XLI, 시장 제외) -9.1%p + 개별 -21.5%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-15T04:27:54",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-07-29",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "STX": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -21.3,
    "dd60_note": "최근 60거래일 고점 대비 -21.3% (38거래일 전 고점)",
    "dd90": -28.4,
    "dd90_note": "최근 90거래일 고점 대비 -28.4% (77거래일 전 고점)"
   },
   "business_premise": {
    "status": "견조",
    "support": [
     "FY26 Q4/FY(7/28) 서프라이즈, AI 수요 기반 낙관적 가이던스",
     "7~8월 사상 최고가 기록"
    ],
    "caution": []
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "9/11 전후 스토리지 섹터 전반 차익실현(Seagate -4%, SanDisk -3%) 확인되었으나, WDC 중심의 HDD 공급과잉 우려 기사는 STX에 구체적으로 연결·날짜 특정하지 못함. Q1 FY2027 실적 반응 관련 헤드라인('실적 서프라이즈에도 주가 하락')을 찾았으나 구체 수치/날짜를 검증하지 못함(2025년에도 유사 헤드라인 존재해 혼동 가능성)",
    "price_expectation_gap": false,
    "gap_note": "확인된 근거가 부족해 가격-기대 괴리 여부를 판단하지 않음",
    "confidence": "낮음"
   },
   "expectation_change": {
    "not_core_cause": null,
    "note": "조사 예산 소진으로 다수 항목 미검증"
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "",
   "next_check": "다음 실적 및 HDD 공급과잉 이슈 재확인",
   "tag": null,
   "sources": [
    "STX IR"
   ],
   "unverified": "다수 항목이 조사 예산 소진으로 미검증 상태 — 추가 확인 필요",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -35.2,
    "dd60_days_ago": 49,
    "dd60_note": "최근 60거래일 고점 대비 -35.2% (49거래일 전 고점)",
    "dd90": -41.1,
    "dd90_days_ago": 88,
    "dd90_note": "최근 90거래일 고점 대비 -41.1% (88거래일 전 고점)",
    "decomposition": {
     "window_days": 49,
     "sector_etf": "SMH",
     "stock_return_pct": -35.2,
     "market_part_pct": -0.9,
     "sector_part_pct": -7.9,
     "individual_part_pct": -26.4,
     "note": "최근 49거래일 - 시장(SPY) -0.9%p + 섹터(SMH, 시장 제외) -7.9%p + 개별 -26.4%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-15T04:28:21",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-08-04",
    "latest_earnings_filing_form": "10-K",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": false
  },
  "FIX": {
   "state": "관찰 — 하락 원인 확인 필요",
   "gate": {
    "pass": true,
    "dd60": -8.8,
    "dd60_note": "최근 60거래일 고점 대비 -8.8% (38거래일 전 고점)",
    "dd90": -17.0,
    "dd90_note": "최근 90거래일 고점 대비 -17.0% (77거래일 전 고점)"
   },
   "business_premise": {
    "status": "견조",
    "support": [
     "2026 Q2(7/23) 매출 +50.3% YoY, 순이익 +91% YoY, 수주잔고 +73% YoY",
     "매출총이익률 25.9%(23.5%에서 개선), 영업이익률 17.1%(13.8%에서 개선)"
    ],
    "caution": [
     "모듈러/프리팹 생산능력 제약 및 인력 관련 우려 제기(Zacks)"
    ]
   },
   "decline_cause": {
    "external_confirmed": false,
    "external_note": "확인된 외부 일시적 촉발 요인 없음",
    "price_expectation_gap": true,
    "gap_note": "7/15 Erste Group이 밸류에이션(수요 아님)을 이유로 Buy→Hold 하향, 10월 초 Zacks도 Strong Buy→Hold로 하향하며 생산능력 제약·차익실현·내부자 매도 언급 — 펀더멘털은 전반적으로 개선된 상태",
    "confidence": "보통"
   },
   "expectation_change": {
    "not_core_cause": true,
    "note": ""
   },
   "entry_status": "신호 없음(관찰)",
   "entry_note": "",
   "next_check": "Q3 2026 실적 확인(조사 시점 기준 미발표)",
   "tag": null,
   "sources": [
    "FIX IR",
    "Erste Group/Zacks 리서치 보도(2차)"
   ],
   "unverified": "Q3 2026 실적 발표일/결과는 조사 예산 소진으로 확인하지 못함",
   "auto": {
    "generated_at": "2026-10-28T00:15:40+09:00",
    "dd60": -33.9,
    "dd60_days_ago": 49,
    "dd60_note": "최근 60거래일 고점 대비 -33.9% (49거래일 전 고점)",
    "dd90": -39.8,
    "dd90_days_ago": 88,
    "dd90_note": "최근 90거래일 고점 대비 -39.8% (88거래일 전 고점)",
    "decomposition": {
     "window_days": 49,
     "sector_etf": "XLI",
     "stock_return_pct": -33.9,
     "market_part_pct": -0.9,
     "sector_part_pct": -9.4,
     "individual_part_pct": -23.5,
     "note": "최근 49거래일 - 시장(SPY) -0.9%p + 섹터(XLI, 시장 제외) -9.4%p + 개별 -23.5%p"
    },
    "eps_direction": "상향",
    "eps_note": "전망치가 오르는 중",
    "eps_updated_at": "2026-10-15T04:28:49",
    "cf_veto": null,
    "cf_veto_count": null,
    "cf_detail": null,
    "latest_earnings_filing_date": "2026-10-22",
    "latest_earnings_filing_form": "10-Q",
    "latest_earnings_filing_level": "confirmed"
   },
   "qualitative_basis_date": "2026-10-11",
   "needs_requalify": true
  }
 }
};
