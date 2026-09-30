// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1790779780.2623744,
  "events": [
    {
      "id": "d88a70d2957813290fb2",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "AWS",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AWS signs $1B+ chip design licensing deal with Synopsys",
      "headlineKo": "AWS는 Synopsys와 10억 달러 이상의 칩 설계 라이선스 계약을 체결했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18624a06df4fff4be8675f2445b1d1cc0953cdca8482952124abeb2de2fc89e1",
        "publishedAt": 1790775993,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AWS는 Synopsys Tech & Innovation과 10억 달러 이상의 칩 설계 라이선스 계약을 체결했습니다. Amazon Web Services는 칩 설계 청사진을 위해 Synopsys에 10억 달러 이상을 지불하고 있습니다. 다년간의 계약을 통해 Amazon은 Synopsys 확장의 주요 고객이 되었습니다.",
        "이 계약에서는 Amazon을 Synopsys 실리콘 IP 사업의 주요 고객으로 지정하여 회사가 애플리케이션 최적화 IP(일반 구성 요소가 아닌 특정 칩 유형에 맞춰진 청사진)라고 부르는 사업으로 확장하고 있습니다.",
        "이번 거래는 또한 Synopsys의 라이센스 모델이 생산량에 따라 로열티를 지불하는 라이센스 + 로열티 구조로 전환했음을 의미한다고 회사는 말했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1, $1 billion, $20 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1, $1 billion, $20 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "46f1c8964fbfcee748d1",
      "schemaVersion": 1,
      "eventType": "competitor_supply_contract",
      "eventLabel": "경쟁사 공급 계약",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia’s Software Advantage Under Threat by DeepSeek-Huawei Alliance",
      "headlineKo": "DeepSeek-Huawei Alliance의 위협을 받고 있는 Nvidia의 소프트웨어 이점",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b412c1ff4cd708ba1845ddc685baa0b7e157a65259fa140f014bb602ef3960e2",
        "publishedAt": 1790775619,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "DeepSeek-Huawei Alliance의 위협을 받고 있는 Nvidia의 소프트웨어 이점 - NVIDIA (NASDAQ:NVDA) - Benzinga SPY 766.58 +0.31% QQQ 740.79 +0.39% BTC/USD 84,560.19 +1.11% DIA 513.45 +0.11% GLD 384.30 +0.37% TLT 78.15 −0.11% US 로그인 회원가입 내",
        "(NASDAQ: NVDA ) DeepSeek가 Huawei Technologies와 협력하여 Huawei의 Ascend AI 칩용 오픈 소스 소프트웨어를 구축한 후 가장 큰 경쟁 우위 중 하나에 대한 새로운 도전에 직면했습니다.",
        "이 노력은 Nvidia의 GPU를 프로그래밍하는 데 사용되는 소프트웨어 플랫폼인 CUDA를 대상으로 합니다. 이는 경쟁사가 경쟁 프로세서를 구축하는 동안에도 수백만 명의 개발자를 회사의 하드웨어에 연결하는 데 도움이 되었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.31%, 0.39%, 1.11% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.31%, 0.39%, 1.11% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "be2f24e078980d90d55c",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Samsung",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Socure Launches mDL Verification with Samsung and Google as Regulators Clear Digital IDs",
      "headlineKo": "Socure, 디지털 ID를 삭제하는 규제 기관으로서 삼성 및 Google과 함께 mDL 검증 출시",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9455b2b67da1c2b8d0e3e626b99cb98f0953e700bf32c97853c408ee693e9d46",
        "publishedAt": 1790774940,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Socure Launches mDL Verification with Samsung and Google as Regulators Clear Digital IDs",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GOOGL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "629e78ec0241ecaeab96",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AVGO",
        "NVDA",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom vs. NVIDIA: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Broadcom 대 NVIDIA: 2026년에는 어떤 기술 주식을 매수하는 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=872c9f4e118e82c038a8020d70b5cbeab8ee164d42bf633e122a33c7636a9214",
        "publishedAt": 1790774341,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVIDIA: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Broadcom(AVGO -0.11%)과 NVIDIA(NVDA +1.70%) 중에서 선택하는 것은 다양한 네트워킹의 안정성과",
        "Broadcom은 고급 네트워킹 하드웨어와 엔터프라이즈 소프트웨어를 전문으로 하는 반면 NVIDIA는 데이터 센터에 사용되는 칩 시장을 장악하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 48%, 40%, $200 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 48%, 40%, $200 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "377408d91ff0daec0d3c",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "5 Micron Entry Points Reveal Why Timing Matters More Than How Long You Hold",
      "headlineKo": "5 마이크론 진입점을 통해 보유 시간보다 타이밍이 더 중요한 이유를 알 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=769786dea7563e29bad583af20a10e7795eff857db6af398f3a73070ab2d963a",
        "publishedAt": 1790773540,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "5 마이크론 진입점을 통해 보유 시간보다 타이밍이 더 중요한 이유를 알 수 있습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.10 +0.28% Dow Jones 51,428.60 −0.09% Nasdaq 100 30,559.90 +0.44% Russell 2000 2,815.08 −0.03% S&P 500 7,712.10 +0.28% 다우존스 51,428.60 −0.09% 나스닥 100 30,559.90 +0.44% 러셀 2000 2,815.08 −0.",
        "구입한 날짜는 생각보다 훨씬 더 중요합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,065.08, $61.18., $1,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,065.08, $61.18., $1,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "1e840f98680ecd3a845a",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "JPMorgan revamps Micron stock price target before earnings",
      "headlineKo": "JP모건, 실적 전 마이크론 주가 목표 상향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=655864ee14063c6a63fdbb0ff1cfe0577f64404399f4082d23d40e20a487d69a",
        "publishedAt": 1790773380,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JPMorgan revamps Micron stock price target before earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "36a8a7ecd7a5c6e11a2e",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMAZON PRIME BIG DEAL DAYS PREVIEW: ECONOMIC PRESSURES DRIVE MORE DEAL-SEEKING THAN JUNE’S PRIME DAY SALE",
      "headlineKo": "아마존 프라임 빅딜 데이 미리보기: 경제적 압박으로 인해 6월 프라임데이 세일보다 딜 모색이 더 많아졌습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2f91e0e59d5d3dd7a095707036be35f3d57b8408b51e9038542ab8646e6ab71",
        "publishedAt": 1790773200,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMAZON PRIME BIG DEAL DAYS PREVIEW: ECONOMIC PRESSURES DRIVE MORE DEAL-SEEKING THAN JUNE’S PRIME DAY SALE",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "0f78292a37b2c3d81acc",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Synopsys and Amazon Announce Strategic, Multi-year IP Agreement for Custom Silicon; Collaboration Also Extends to Cloud and AI-Powered Engineering",
      "headlineKo": "Synopsys와 Amazon은 맞춤형 실리콘에 대한 전략적 다년간 IP 계약을 발표했습니다. 협업은 클라우드 및 AI 기반 엔지니어링으로도 확장됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=42340b2b5e7624f73c5b4a8c5e510aba0b3b888558c32dcf2e32cb9467f0072e",
        "publishedAt": 1790773200,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Synopsys와 Amazon은 맞춤형 실리콘에 대한 전략적 다년간 IP 계약을 발표했습니다. 협업은 클라우드 및 AI 기반 엔지니어링으로도 확장됩니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7b8067e01cf1a55fd54f",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "QQQ",
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Happens If The Market Severely Punishes Tesla AND SpaceX at The Same Time?",
      "headlineKo": "시장이 Tesla와 SpaceX를 동시에 가혹하게 처벌한다면 어떻게 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6df815b103448c7ce746ee33b4418ef9cf24fc4d0628cb6c03326c91f5fd7b85",
        "publishedAt": 1790772346,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "시장이 Tesla와 SpaceX를 동시에 가혹하게 처벌한다면 어떻게 될까요?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.10 +0.28% Dow Jones 51,428.60 −0.09% Nasdaq 100 30,559.90 +0.44% Russell 2000 2,815.08 −0.03% S&P 500 7,712.10 +0.28% 다우존스 51,428.60 −0.09% 나스닥 100 30,559.90 +0.44% 러셀 2000 2,815.08 −0.",
        "Tesla와 SpaceX는 올여름에도 동일한 전략을 발표했습니다. 지금은 공격적으로 지출하고 나중에 이익을 모으는 것입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 21.54%, 7.28%, $160.95. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 21.54%, 7.28%, $160.95. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "b40208aaaff30716962f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir CEO Alex Karp buys 37,000 acres of Swedish forest",
      "headlineKo": "Palantir CEO Alex Karp는 스웨덴 산림 37,000에이커를 매입합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7d8a8f7fa216bbcff4b4fdf15ba4fba92af19774dc7988f8900947f5dfa4e35",
        "publishedAt": 1790772340,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir CEO Alex Karp는 37,000에이커의 스웨덴 산림을 구입합니다. Markets Palantir CEO Alex Karp는 37,000에이커의 스웨덴 산림을 구입했습니다. 지역 주민들은 사냥꾼들이 임대 계약을 잃자 이를 알게 되었습니다. Karp는 새로 등록된 회사를 통해 구매했습니다.",
        "2억 3500만 크로나(2200만 달러)의 가치가 있는 것으로 보고된 이 거래는 해당 지역의 사냥꾼들이 그 땅에서 사냥할 권리가 취소되었음을 알리는 편지를 개봉한 후에야 밝혀졌습니다.",
        "스웨덴 신문 Tidningen Härjedalen이 이 거래를 처음 보도했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $22 million, $120 million, $4.3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $22 million, $120 million, $4.3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "PLTR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "675e61ebde2a3ecc9aa8",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "QQQ",
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Rivian Vs. Tesla: At Least The Market Treats Rivian as What It Really Is",
      "headlineKo": "리비안 대. Tesla: 적어도 시장은 Rivian을 실제 모습으로 취급합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f2b5b8f3210a521c796fcde6bc7ec41eced29dddeb73064af1eb6e7880e0b98",
        "publishedAt": 1790772308,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla: 적어도 시장은 Rivian을 실제 모습으로 취급합니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.10 +0.28% Dow Jones 51,428.60 −0.09% Nasdaq 100 30,559.90 +0.44% Russell 2000 2,815.08 −0.03% S&P 500 7,712.10 +0.28% 다우존스 51,428.60 −0.09% 나스닥 100 30,559.90 +0.44% 러셀 2000 2,815.08 −0.",
        "Tesla: 적어도 시장은 Rivian을 실제로 있는 그대로 취급합니다. Tesla는 방금 기록적인 납품을 기록했으며 여전히 344배의 수익으로 거래되는 반면 Rivian은 현금을 흘리지만 실제로는 자동차 회사처럼 평가됩니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 344 times, 3.64 times, 13.62 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 344 times, 3.64 times, 13.62 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "f097cc482bac63906e89",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "다음 실적·현금흐름 확인까지",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Has 50% Upside--So Why Won't Morgan Stanley Say Buy?",
      "headlineKo": "오라클은 50%의 상승 여력을 갖고 있는데 왜 Morgan Stanley는 매수를 말하지 않는가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9135776e7c82191a8b9d49c585c27587c18681f287ec834fcc0117a216a56115",
        "publishedAt": 1790771298,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "기사 작성자가 Oracle의 상승 여력과 위험 요인을 함께 제시한 의견 기사입니다.",
        "제목의 상승 여력은 애널리스트·작성자의 추정치이지 Oracle의 공식 가이던스가 아닙니다.",
        "AI 클라우드 성장과 CAPEX·부채 부담이 동시에 언급되는지 원문에서 확인해야 합니다."
      ],
      "marketInterpretation": [
        "Oracle은 AI 인프라 성장 기대가 큰 동시에 대규모 투자로 FCF 부담도 커질 수 있습니다.",
        "성장률보다 CAPEX 이후 현금이 남는지가 장기 주가를 결정할 가능성이 큽니다."
      ],
      "aiInference": [
        "이 기사는 ORCL의 사업과 관련된 'Oracle Has 50% Upside--So Why Won't Morgan Stanley Say Buy?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "‘64% 상승 여력’은 그 가격까지 반드시 오른다는 약속이 아니라 작성자의 계산입니다.",
        "Oracle의 실제 클라우드 매출 성장과 FCF가 좋아지는지 확인해야 합니다.",
        "전망이 좋아도 부채·투자 부담이 더 빨리 늘면 주가가 오르지 않을 수 있습니다."
      ],
      "whyItMatters": [
        "Oracle은 AI 인프라 성장 기대가 큰 동시에 대규모 투자로 FCF 부담도 커질 수 있습니다.",
        "성장률보다 CAPEX 이후 현금이 남는지가 장기 주가를 결정할 가능성이 큽니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "혼재",
          "reason": "AI 클라우드 성장 기대와 CAPEX·부채 부담이 함께 존재",
          "basis": "analysis"
        }
      ],
      "watch": [
        "OCI 매출 성장률과 신규 계약",
        "CAPEX 대비 영업현금흐름·FCF",
        "부채·이자비용과 신용등급"
      ]
    },
    {
      "id": "3cc99b7cba5bb0905d9c",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "QCOM",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Qualcomm",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom vs. Qualcomm: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Broadcom vs. Qualcomm: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=63d7092cecaa0e9e11b0aa2091f6175e232409165fd108fadcf208f5dc3ec931",
        "publishedAt": 1790770801,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Semiconductor 수요는 인공 지능이 세계 경제를 변화시키는 가운데 여전히 뜨겁습니다.",
        "Broadcom(AVGO +0.14%)과 Qualcomm(QCOM +1.43%) 중에서 선택하려면 다음 성장 시대에 어느 거대 기업이 더 나은 위치에 있는지 이해해야 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.14%, 1.43%, 40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.14%, 1.43%, 40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AVGO",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "c87d7fb33dd0a624ba8f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Locks In $30 Billion In Credit Line To Fund Soaring AI Spending",
      "headlineKo": "Tesla는 치솟는 AI 지출에 자금을 지원하기 위해 300억 달러의 신용 한도를 확보했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6f8ab39055bbf7d0eddfba357fcd34ab5e5975e6a165e9cef7716b2ddf065c0",
        "publishedAt": 1790770700,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 치솟는 AI 지출에 자금을 지원하기 위해 300억 달러의 신용 한도를 확보했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "dfb69c8f361506c21afd",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Anthropic IPO Filing Reveals a Major Vulnerability: Nearly 50% of Sales Flow Through Amazon and Google as Revenue Concentration Raises Risks: Report",
      "headlineKo": "인류의 IPO 제출은 주요 취약점을 드러냅니다. 수익 집중으로 인해 위험이 높아짐에 따라 판매 흐름의 약 50%가 Amazon과 Google을 통해 발생함: 보고서",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c372ef091144bce462a4693104be1599db6b8865e879fad757dce4619ab90eee",
        "publishedAt": 1790770697,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인류의 IPO 제출은 주요 취약점을 드러냅니다: 판매 흐름의 거의 50%가 Amazon 및 Google as를 통해 이루어짐 - Benzinga SPY 764.33 QQQ 736.55 −0.19% BTC/USD 84,113.54 +0.58% DIA 512.75 −0.03% GLD 384.25 +0.36% TLT 78.38 +0.19% 미국 로그인 레지스",
        "지난해 Anthropic 매출의 약 47%는 클라우드 파트너인 Amazon(NASDAQ: AMZN)과 Alphabet의 Google(NASDAQ: GOOGL)(NASDAQ: GOOG)을 통해 전달되었다고 로이터 통신은 기밀 IPO 서류를 인용하여 보도했습니다.",
        "이러한 거대 기술 기업들은 Anthropic의 주요 투자자일 뿐만 아니라 컴퓨팅 성능의 중요한 공급업체이자 AI 분야의 직접적인 경쟁자이기도 합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, 0.19%, 0.58% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, 0.19%, 0.58% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GOOGL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "d0e5d92650d4910b1215",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "GOOGL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Anthropic IPO Filing Reveals a Major Vulnerability: Nearly 50% of Sales Flow Through Amazon and Google as Revenue Concentration Raises Risks: Report",
      "headlineKo": "인류의 IPO 제출은 주요 취약점을 드러냅니다. 수익 집중으로 인해 위험이 높아짐에 따라 판매 흐름의 약 50%가 Amazon과 Google을 통해 발생함: 보고서",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c372ef091144bce462a4693104be1599db6b8865e879fad757dce4619ab90eee",
        "publishedAt": 1790770697,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인류의 IPO 제출은 주요 취약점을 드러냅니다. 수익 집중으로 인해 위험이 높아짐에 따라 판매 흐름의 약 50%가 Amazon과 Google을 통해 발생함: 보고서"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ecb6f94dc3216a2e9055",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Stock Could Swing 8% After Today's Earnings",
      "headlineKo": "마이크론 주식은 오늘 수익 이후 8% 변동할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88c0550c941074cd4d98c506d3e5242ec61da5d014d4432f80975a47f2f310a4",
        "publishedAt": 1790770428,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 주식은 오늘 수익 이후 8% 변동할 수 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7ab299734fef8532013d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "MU",
        "SNDK",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What a $10,000 Investment Split Between Micron and Sandisk Could Be Worth by the End of 2027",
      "headlineKo": "2027년 말까지 Micron과 Sandisk 간의 10,000달러 투자 분할 가치는 얼마나 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e6c95bc5b1fdb450f7756ad22b91a42f2eac3e0e45ddb2f3ea4519a47315322",
        "publishedAt": 1790770080,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2027년 말까지 Micron과 Sandisk 간의 10,000달러 투자 분할 가치 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool Micron( MU +1.00% ) 및 Sandisk( SND)에 합류",
        "Sandisk는 올해 현재까지 600% 이상 상승한 S&P 500( ^GSPC +0.47% )에서 최고 성과를 내는 주식입니다.",
        "마이크론은 현재 약 270% 상승해 네 번째로 실적이 좋은 주식이다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 270%, 1.00 %, $ 10.62 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 270%, 1.00 %, $ 10.62 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SNDK",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "056c2a0396eb7cce39c3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "ASML",
        "TSM"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ASML, TSM Earnings Could Expose a New Risk for the AI Trade",
      "headlineKo": "ASML, TSM 수익이 AI 거래에 새로운 위험을 노출할 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b486481e42fb611758c206dc6fae54aa514110ce3c206bce472ed6914a8e56f",
        "publishedAt": 1790769940,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML, TSM Earnings Could Expose a New Risk for the AI Trade",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSM에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "dffa0af4915c01f9bfe0",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "LITE",
      "relatedTickers": [
        "LITE",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Here Are Wednesday’s Top Wall Street Analyst Research Calls: Ally Financial, BankUnited, Ciena Corporation, CoreWeave, Dow, FormFactor, Lumentum Holdings, Moderna, Target, and More",
      "headlineKo": "수요일의 주요 월스트리트 분석가 연구 통화는 다음과 같습니다: Ally Financial, BankUnited, Ciena Corporation, CoreWeave, Dow, FormFactor, Lumentum Holdings, Moderna, Target 등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e036cb6cd4e709f0ee5df941cc8cdbbc7ee0352453225fcf768171476633a090",
        "publishedAt": 1790769772,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "수요일의 주요 월스트리트 분석가 연구 통화는 다음과 같습니다. Ally Financial, BankUnited, Ciena Corporation, CoreWeave, Dow, FormFactor, Lumentum Holdings, Moderna, Target 등 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.10 +0.28% Dow Jones 51,428.60 −0.09% Nasdaq 100 30,559.90 +0.44% Russell 2000 2,815.08 −0.03% S&P 500 7,712.10 +0.28% 다우존스 51,428.60 −0.09% 나스닥 100 30,559.90 +0.44% 러셀 2000 2,815.08 −0.",
        "누가 잘렸는지 알아보고... 작성자: Lee Jackson 2026년 9월 30일 게시, 오전 8시 2분(ET) · 4분 읽기 𝕏 f ⧉ 글로벌 금융 중심지인 뉴욕시의 월스트리트와 브로드 스트리트의 상징적인 교차로는 현재 진행 중인 시장의 평가를 반영합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.37%, 0.09%, 5.58% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LITE에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.37%, 0.09%, 5.58% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "LITE",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "fafb7d47f16722e5080c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "AMD",
        "META",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta cut its tax bill billions by labeling AI data centers experimental",
      "headlineKo": "Meta는 AI 데이터 센터를 실험적이라는 라벨로 지정하여 수십억 달러의 세금을 삭감했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=75362e589cf71b3165d971a2225b6fabaf4f0a2ede9733b6a78f233c8c365ba0",
        "publishedAt": 1790769066,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 71%, $3.9 billion, $700 million, $2 billion, 45%, $12.9 billion, $18.74 billion, $355 million.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 META의 사업과 관련된 'Meta cut its tax bill billions by labeling AI data centers experimental' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "fc4363ef292647fc6638",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "HPE Secures Its First AMD Helios Order in $1.2 Billion Deal With Vultr",
      "headlineKo": "HPE, Vultr와 12억 달러 규모의 첫 AMD Helios 주문 확보",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1d68f540487f8d818c7518e2f4ab83ca70c8981d4fad00d7c7b8d59e4f0a0a07",
        "publishedAt": 1790768760,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "HPE Secures Its First AMD Helios Order in $1.2 Billion Deal With Vultr",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "3d728115c41bf25862e8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta Platforms Is Up Nearly 25% in September. Does It Have Room to Rise Further?",
      "headlineKo": "메타 플랫폼은 9월에 거의 25% 상승했습니다. 더 오를 여지가 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13adfcc9a66dacb93ebc35a539710763d01a05ecef6af1b3617e3cf90b6b5f84",
        "publishedAt": 1790768520,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타 플랫폼은 9월에 거의 25% 상승했습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Meta Platforms( META -1.41% )에 가입하세요. 놀라운 9월을 보냈습니다.",
        "정점에 도달했을 때 30% 이상 상승했지만, 월말 며칠 동안 매도되었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 25%, 30%, 1.41 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 25%, 30%, 1.41 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "60a45990edefb472ed25",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AI Chips Update - AMD Expands AI Horizons with World Labs Acquisition",
      "headlineKo": "AI 칩 업데이트 - AMD, World Labs 인수로 AI 지평 확장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=71237bd0e7d7b203e57e5c7246993d764611824d701f6f1a338d1e00bb9f40b4",
        "publishedAt": 1790768247,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI Chips Update - AMD Expands AI Horizons with World Labs Acquisition",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "9586df933e07fa8661dc",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "ASML",
        "MRVL",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Marvell",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ASML Holding N.V. vs. Marvell Technology: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "ASML Holding N.V. 대 Marvell Technology: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=244f04f2afa5a68275b1c06bc7ba67f53209402059e444073e48d05f20f0d6fe",
        "publishedAt": 1790767201,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 처리 능력에 대한 전 세계적 수요가 계속 증가함에 따라 투자자들은 현대적인 구성을 만드는 하드웨어 회사를 평가하고 있습니다.",
        "2026년에 ( ASML -0.39% ) 또는 Marvell Technology ( MRVL -1.34% )가 더 나은 투자일까요?"
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.39%, 1.34%, $37.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.39%, 1.34%, $37.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MRVL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "466f9ee0c32d473cfc5a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Truist Assesses Potential Impact of Meta Muse AI Agent on Online Travel Agencies",
      "headlineKo": "Truist, 온라인 여행사에 대한 Meta Muse AI 에이전트의 잠재적 영향 평가",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a7ec2645e2c5a9d0e98dde1d39e01e72167e42a2fc7f89d893f639e6b17b7523",
        "publishedAt": 1790766169,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Truist는 온라인 여행사 보드에 대한 Meta Muse AI 에이전트의 잠재적 영향을 평가합니다. 인용문: 즐겨찾기 인기 모니터 이동자 레벨 2 뉴스 메뉴 보드 주식 상품 외환 암호화폐 라운지 고급 검색 뉴스 모든 회사 N",
        "시작하기 Truist, Meta Muse AI 에이전트가 온라인 여행사에 미치는 잠재적 영향 평가 Fiona Craig NASDAQ:META NASDAQ:EXPE NASDAQ:BKNG 최신 뉴스 2026년 9월 30일 오전 7:02 © Adobe Stock Images Meta Platforms(NASDAQ:META) 새로 출시",
        "증권사는 이전에 출시된 대형 언어 모델이 온라인 여행사의 예약 점유율에 제한적인 영향을 미친 것으로 보인다고 말했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 70%, 80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 70%, 80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "d4c501b3ce235c9109f7",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel's Recovery Has Moved From Survival To Factory Economics",
      "headlineKo": "인텔의 회복은 생존에서 공장 경제로 옮겨졌습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b5d3b758b44e915f3cb0009814f6e1843ec4134c7939d2b2b12ff66ac0f21750",
        "publishedAt": 1790763577,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔의 회복은 생존에서 공장 경제로 옮겨졌습니다. (NASDAQ:INTC) | 알파 단순 투자 아이디어 찾기 11.09K 팔로워 요약 팔로우 인텔은 프로세서 성장과 제조 수율 개선이 병행된다면 상당한 상승 여력을 제공합니다.",
        "저는 인텔이 경쟁력 있는 프로세서를 제공하고, 공장 경제를 개선하고, 고마진 서버 제품 점유율을 유지 또는 늘리는 것에 따라 투기적 매수 등급을 부여합니다.",
        "INTC의 고급 패키징은 점진적인 수익 흐름을 열어 주지만 지속 가능한 수익성은 외부 파운드리 또는 패키징 성공뿐만 아니라 내부 실행에 달려 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $147, 26%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $147, 26%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "INTC",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "7bb18acab33905eff545",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "GOOGL",
        "INTC",
        "META",
        "NVDA"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google, Anthropic, Meta, Nvidia, OpenAI, xAI Executives Sign White House Accord on 'Super Intelligence'",
      "headlineKo": "Google, Anthropic, Meta, Nvidia, OpenAI, xAI 경영진, '슈퍼 인텔리전스'에 관한 백악관 협약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e75d8fd4356ca607e222ad6475e00056229b113b40d9b63e8d7be16e21cee9bf",
        "publishedAt": 1790763087,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google, Anthropic, Meta, Nvidia, OpenAI, xAI 경영진, '슈퍼 인텔리전스'에 관한 백악관 협약 체결"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "a49990fe1242029afb4b",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR",
        "QQQ"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir: A Completely Different AI Story",
      "headlineKo": "Palantir: 완전히 다른 AI 이야기",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8512a834d5707404f18e7d78462ed9fe592092a978248312fb640c14ed3ac18a",
        "publishedAt": 1790760276,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir: 완전히 다른 AI 이야기(NASDAQ:PLTR) | 알파 찾기 Thomas Veth 팔로워 195명 팔로우 요약 Palantir의 온톨로지 및 AIP는 고객의 핵심 운영에 점점 더 많이 내장되어 높은 전환 비용과 수익을 창출할 수 있습니다.",
        "강력한 고객 확장, 재사용 가능한 소프트웨어 인프라, Maven과 같은 플랫폼 채택 증가는 매력적인 증분 경제성으로 상당한 수익 성장을 지원할 수 있습니다.",
        "가치 평가에서는 이미 수년간의 강력한 성장과 높은 잉여현금흐름 마진을 가정하고 있으므로 실행과 지속적인 고객 확장이 투자 논제에 매우 중요합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "PLTR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "b6a98167a10e98033b12",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft: The Xbox Segment Revamp",
      "headlineKo": "Microsoft: Xbox 세그먼트 개편",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a685d8e578e53fe077d45ece7ab9db25a999a11bc2fa844abcb84cc1daeb14b4",
        "publishedAt": 1790759798,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Stock: Xbox 부문 개편(NASDAQ:MSFT) | Alpha Khaveen 투자 추구 팔로워 8.63K 팔로우 요약 Xbox 부문은 구조 조정, 독점 게임 출시 및 경쟁을 통해 FY2026 이후 하락세를 회복할 것으로 예상됩니다.",
        "수익성이 낮은 스튜디오 정리, 하드웨어 가격 인상, 고부가가치 독점 콘텐츠 집중 등을 통해 수익성 개선과 가입자 증가가 기대된다.",
        "Game Pass 수익과 향후 프랜차이즈 출시는 Xbox 콘텐츠 및 서비스 성장을 촉진하여 최근 하드웨어 및 가입자 감소를 상쇄할 것으로 예상됩니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "fb865f74703464c3c0c8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
        "VRT"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "How Investors Are Reacting To Vertiv Holdings Co (VRT) Expanding Its AI Power Chain Reach",
      "headlineKo": "Vertiv Holdings Co(VRT)의 AI 파워 체인 범위 확장에 대한 투자자들의 반응",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8c23c9e09859be3bce59c5702a8d29db7a96cc0edf5ec39cf63440a767348d3",
        "publishedAt": 1790759222,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 VRT의 사업과 관련된 'How Investors Are Reacting To Vertiv Holdings Co (VRT) Expanding Its AI Power Chain Reach' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "f0f797705dbe6905daee",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "MRVL",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Marvell",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell: Surprisingly Cheaper Than In August, But There's A Catch",
      "headlineKo": "Marvell: 8월보다 놀랍게도 저렴하지만 문제가 있습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f8fd36b4aef42f3a48352e604b8911343f71dec6cc3fa497f610e9d56080d6ec",
        "publishedAt": 1790758144,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell: 8월보다 놀랍도록 저렴하지만 문제가 있습니다(NASDAQ:MRVL) | 알파 Rick Orford 찾기 5.02K 팔로워 요약 팔로우 Marvell Technology, Inc.",
        "광범위한 연결성 성장에 힘입어 2028회계연도 매출이 180억 달러로 증가함에 따라 Strong Buy 등급을 유지합니다.",
        "MRVL의 영업 마진은 4분기까지 38~40%로 안내되며, 2028 회계연도 EPS는 6.30~6.70달러로 추정되어 향후 수익에 대한 주가가 더 저렴해집니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $18 billion, 40%, $6.30 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $18 billion, 40%, $6.30 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MRVL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "2715cfe5210475a2c844",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Stock Has Grown Roughly 14-Fold Since Satya Nadella Became CEO in 2014, a 23% Annual Growth Rate That Ended 14 Years of Negative Growth. Can That Pace Continue Under Heavy AI Spending?",
      "headlineKo": "Microsoft 주식은 2014년 Satya Nadella가 CEO가 된 이후 약 14배 성장했으며, 이는 14년간의 마이너스 성장을 종식시킨 연간 성장률 23%입니다. 막대한 AI 지출에도 이러한 속도가 계속될 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=42be9a2b988ca5827836debc65bdf38e7b3d987ff05036a79fd96869d2886bf2",
        "publishedAt": 1790757240,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft 주식은 2014년 Satya Nadella가 CEO가 된 이후 약 14배 성장했으며, 이는 14년간의 마이너스 성장을 종식시킨 연간 성장률 23%입니다.",
        "막대한 AI 지출에도 이러한 속도가 계속될 수 있을까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 빌 게이츠는 2000년 초 스티브 발머에게 마이크로소프트(MSFT +1.29%)의 경영권을 넘겨주었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 23%, 70%, 32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 23%, 70%, 32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "7b3e9e5cc4ffcc5f687e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SPY",
        "TSLA",
        "VST"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Are Nasdaq Futures Rising Premarket? MU, TSLA, CAPR, VNDA, ASTS, HOOD, BA Stocks In Focus",
      "headlineKo": "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까? MU, TSLA, CAPR, VNDA, ASTS, HOOD, BA 주식에 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8061e07c3ce84f11db65cb4769735fc78b1a562630c4f6b75ed2233268f23dec",
        "publishedAt": 1790756993,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까?",
        "MU, TSLA, CAPR, VNDA, ASTS, HOOD, BA 주식 집중 AI 에이전트 동향 뉴스 수익 전체 DIA 0.02% SPY 0.50% QQQ 0.69% 추세 IBRX 9.97% CAPR 12.84% APLD 2.75% IWM 0.21% VST 2.19% HUT 6.07% HOOD 1.75% 앱 1.97% 코인 2.38% TLT 0.46% 홈 N",
        "MU, TSLA, CAPR, VNDA, ASTS, HOOD, BA 주식 집중 광고 | 광고를 제거하세요."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.02%, 0.50%, 0.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.02%, 0.50%, 0.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QQQ",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "f8c068711ca1681a671f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
        "AMD",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Applied Materials (AMAT) Ties Its $5 Billion EPIC Center To Next Gen AI Memory",
      "headlineKo": "Applied Materials(AMAT), 50억 달러 규모의 EPIC 센터를 차세대 AI 메모리와 연결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70dbbcf35681147bb4c01b4fc05085c74fea63b9f26fd51b1f4d5c838b7b698d",
        "publishedAt": 1790755787,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMAT의 사업과 관련된 'Applied Materials (AMAT) Ties Its $5 Billion EPIC Center To Next Gen AI Memory' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "0f529d798caf53c3058c",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce Stock Fell 8% in a Year. Here’s Where the Street’s Target Sits Now.",
      "headlineKo": "Salesforce 주가는 1년 만에 8% 하락했습니다. 지금 거리의 표적이 있는 곳은 바로 여기입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a654a10a0a110cace63dcd9368629b4cb752f6d3f8c576d0bfc81dff4a12ca56",
        "publishedAt": 1790755570,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce 주가는 1년 만에 8% 하락했습니다.",
        "지금 거리의 표적이 있는 곳은 바로 여기입니다.",
        "| TIKR.com General Investing Salesforce 주식은 1년 만에 8% 하락했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, $225, $150, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, $225, $150, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "CRM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "92e3fb02dfcafc94dbcc",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "META",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "These 3 AI Stocks Are Poised to Be Big Winners from Amazon's Choice to Block Meta's Muse",
      "headlineKo": "이 3가지 AI 주식은 Meta의 Muse를 차단하기 위해 Amazon의 선택에서 큰 승자가 될 준비가 되어 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c04ede28227099abe60f969c2362828fad36bf797514a0fb8180ad6a5aedb01",
        "publishedAt": 1790754600,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 3개의 AI 주식은 Amazon의 선택에서 Block Meta의 Muse에 대한 큰 승자가 될 준비가 되어 있습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 거의 제외하고 계속 의존하기보다는",
        "그러나 한 회사는 공놀이를 하지 않습니다.",
        "Amazon(AMZN +0.21%)은 Muse가 자사 웹사이트에서 제품을 구매하는 것을 차단하고 있다고 밝혔습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.21%, 2.95 %, $ 4.25 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.21%, 2.95 %, $ 4.25 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "cac8339bb793903665cf",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC",
        "QQQ"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "KLA Corporation: Fundamentals Are Strong, But The Stock Needs More",
      "headlineKo": "KLA Corporation: 펀더멘털은 탄탄하지만 주식에는 더 많은 것이 필요합니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4f5fe2c23712d243acff5b685188fbbfccb200516c982610e76a84a1ea302787",
        "publishedAt": 1790751906,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA Corporation: 펀더멘털은 탄탄하지만 주식에는 더 많은 것이 필요합니다(NASDAQ:KLAC) | 알파 블레이크 위니에키(Blake Winiecki)를 찾고 있습니다 팔로워 797명 팔로우 요약 KLA Corporation은 반도체 복잡성 증가로 인한 혜택을 누리며 프로세스 제어 선두주자로 남아 있습니다.",
        "KLAC는 탄탄한 잉여현금 흐름과 서비스 수익 확대로 2026 회계연도에 매출 12%, 순이익 19% 성장을 달성했습니다.",
        "총 마진은 61.3%로 업계 최고이지만, 최근 마진 확대는 정체되어 FY2027 가이던스가 61.5% 수준으로 유지되었습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, 19%, 61.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, 19%, 61.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "KLAC",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "7249f204d0982c0c741e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Bernstein Initiates Coverage On Coherent with Outperform Rating, Announces Price Target of $350",
      "headlineKo": "Bernstein, 우수한 평가를 받아 Coherent에 대한 보도 개시, 목표 가격 350달러 발표",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=09081466b891b88bbab27830e7390e0cf6fe9eb6c2971dcf93e2467a0f302849",
        "publishedAt": 1790750687,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bernstein Initiates Coverage On Coherent with Outperform Rating, Announces Price Target of $350",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "COHR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "16eef998e091f775eefb",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AAPL",
        "AMZN"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon (AMZN) and Apple (AAPL) Must Face a UK Class Action Over Marketplace Sales",
      "headlineKo": "아마존(AMZN)과 애플(AAPL)은 마켓플레이스 판매에 대해 영국 집단소송에 직면해야 합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=669783a8227114e6de2f820923e64d9c78a1feec557326ccd2c999418529837d",
        "publishedAt": 1790748498,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon (AMZN) and Apple (AAPL) Must Face a UK Class Action Over Marketplace Sales",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Amazon (AMZN) and Apple (AAPL) Must Face a UK Class Action Over Marketplace Sales' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
        "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
      ],
      "whyItMatters": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "다음 실적 매출·EPS",
        "영업현금흐름과 CAPEX",
        "회사 공식 가이던스",
        "주가 반응이 하루 이상 지속되는지"
      ]
    },
    {
      "id": "d46ed5dad4956a231408",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "DeepSeek ties up with Huawei on chip programming tools amid pivot from Nvidia",
      "headlineKo": "DeepSeek, Nvidia의 피벗 가운데 칩 프로그래밍 도구에서 Huawei와 제휴",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ced4c3184efe479b6dc68a9ce5f2e1bb3c52156d5be2eef8e5bde73469d8aef8",
        "publishedAt": 1790748212,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "DeepSeek ties up with Huawei on chip programming tools amid pivot from Nvidia",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "0e8711d9b6aecf4b0618",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Oracle Stock a Buy Now?",
      "headlineKo": "오라클 주식은 지금 구매 가능한가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=14fbc1758e3894e92626f19ea198fb167b75e71e7994f00436dd749a297f4541",
        "publishedAt": 1790746620,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 이론적으로 Oracle( ORCL +3.91% )이라는 회사는 미래에 대해 제대로 읽어야 합니다.",
        "데이터베이스 거대 기업은 현재 시장 판독이 정확하다는 점에 거의 1000억 달러를 걸고 있습니다.",
        "실제로 투자자들은 지난 1년 동안 Oracle의 운명 예측 과정이 수업료를 지불할 가치가 있는지 궁금해했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $100 billion, $137.79, 3.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $100 billion, $137.79, 3.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "fd6ee061918ec3eda4de",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "QQQ",
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "TSLA Stock Eyes Red September: Cathie Wood Buys Ahead Of Q3 Update As Tesla Bear Flags Funding Pressure",
      "headlineKo": "TSLA 주식은 9월에 빨간 눈을 뜨고 있습니다: Tesla Bear가 자금 조달 압력을 표시함에 따라 Cathie Wood는 3분기 업데이트를 앞두고 매수합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=acb41ea1f51037e72228e07b49c589775398b0f0c7b9ea712cbce8f68599b934",
        "publishedAt": 1790746408,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSLA 주식은 빨간색 9월에 눈을 뜹니다: Cathie Wood는 Tesla Bearing Funding Pressure AI Agent Trending News Earnings All DIA 0.47% SPY 0.33% QQQ 0.26% Trending CAPR 17.62% XRPN 15.12% SOL 0.70% CCL 0.44% IOVA 0.97% JOBY 0",
        "TSLA 주식은 붉은 9월을 바라보고 있습니다: Tesla Bear가 자금 압박을 표시함에 따라 Cathie Wood는 3분기 업데이트를 앞두고 매수합니다. 투자자이자 인플루언서인 Sawyer Merritt는 Tesla의 비용이 많이 드는 공장 야망을 강조했으며 Fitch는 수년간 마이너스 자유를 기대합니다.",
        "Ark Invest의 설립자 겸 CEO인 Cathie Wood가 2025년 2월 20일 플로리다주 마이애미 비치의 Faena Hotel에서 열린 FII PRIORITY Summit 둘째 날에서 연설하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.47%, 0.33%, 0.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.47%, 0.33%, 0.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "e49085bd8ed66865a234",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "AMD",
        "META",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Zuckerberg lost $8.9 billion in a day as Meta's AI rally cracked: his net worth fell from $266.4 billion to $257.5 billion as Meta shares dropped about 4% to $749.26 after Goldman Sachs warned AI spen",
      "headlineKo": "Zuckerberg는 Meta의 AI 랠리가 깨지면서 하루에 89억 달러의 손실을 입었습니다. Goldman Sachs가 AI 비용을 경고한 후 Meta 주가가 약 4% 하락한 749.26달러로 그의 순자산은 2,664억 달러에서 2,575억 달러로 감소했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b565584ed742e93763e03c39714309075484c614447d33a7c56a88334da78c0",
        "publishedAt": 1790746380,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 META의 사업과 관련된 'Zuckerberg lost $8.9 billion in a day as Meta's AI rally cracked: his net worth fell from $266.4 billion to $257.5 billion as Meta shares dropped about 4% to $749.26 after Goldman Sachs warned AI spen' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "0affbff30b8284e36b75",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Stock Is Up 550% in a Year. Analysts Now Target 42% More.",
      "headlineKo": "마이크론 주식은 1년 만에 550% 상승했습니다. 분석가들은 이제 42% 더 많은 것을 목표로 삼고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f717d0ee59c478c212d3c1ac7a056199ecbae6eccebe5dd39dae70b092b1afb3",
        "publishedAt": 1790745272,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| TIKR.com General Investing Micron 주식은 1년 만에 550% 상승했습니다.",
        "Gian Estrada • 4분 읽기 검토자: David Hanson 최종 업데이트 2026년 9월 30일 Pixabay의 Recklessstudios 및 Canva를 통한 Getty Images의 jonnysek 주요 시사점 Micron 주식은 지난 한 해 동안 550% 수익을 올렸으며 회계연도 4분기 실적을 보고합니다.",
        "스트리트에는 매수 36건, 초과 실적 9건, 보유 3건, 실적 저조 1건, 매도 1건이 있으며, 평균 목표는 $1,065 가격보다 42% 높은 $1,521입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 550%, 42%, $1,521 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 550%, 42%, $1,521 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "2ad35ec884648fe43904",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "MU",
        "QCOM",
        "WDC"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기 비용 부담 / 출시 후 수요 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AAPL Stock Retreats From All-Time High: Research Firm Says Apple Could Sell 6M iPhone Duos This Year",
      "headlineKo": "AAPL 주식이 사상 최고치에서 후퇴: 조사 회사는 Apple이 올해 600만 대의 iPhone Duo를 판매할 수 있다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48c00d487e3102d6248327f8af0c102d2aaa795c483683307689b27e6eb01d5b",
        "publishedAt": 1790744870,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 0.47%, 0.33%, 0.26%, 17.62%, 15.12%, 0.70%, 0.44%, 0.97%.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'AAPL Stock Retreats From All-Time High: Research Firm Says Apple Could Sell 6M iPhone Duos This Year' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "메모리 부품이 비싸져서 아이폰 가격이 오를 수 있다는 이야기입니다.",
        "애플에는 비용 상승과 가격 인상 기회가 동시에 있어 무조건 호재나 악재가 아닙니다.",
        "메모리 업체에는 가격 인상과 이익 개선 가능성이 더 직접적인 호재입니다."
      ],
      "whyItMatters": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "AAPL",
          "direction": "혼합",
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "메모리 ASP와 이익률 개선 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "WDC",
          "direction": "긍정",
          "reason": "메모리·스토리지 가격 강세 수혜 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "QCOM",
          "direction": "중립·확인",
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담",
          "basis": "analysis"
        }
      ],
      "watch": [
        "iPhone 18 실제 출고가·사전예약",
        "애플 아이폰 출하량과 제품 믹스",
        "메모리 현물·계약 가격",
        "AAPL 매출총이익률과 MU/WDC 가이던스"
      ]
    },
    {
      "id": "c77d3f2dd60bd5e1e8b5",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "QQQ",
        "SNDK"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Sandisk: No Fab Control, No HBF Exclusivity - Where The Money Really Comes From",
      "headlineKo": "Sandisk: Fab 통제도 없고 HBF 독점도 없습니다 - 실제로 돈이 나오는 곳",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2a6ed4145bd7c7969cecb4e0c352badccf0ab709dfcf3b3b18e2e3e6f52f032d",
        "publishedAt": 1790743998,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: Fab 통제 없음, HBF 독점 없음, 구매(NASDAQ:SNDK) | Alpha Foundry 연구 추구 12명의 팔로워 팔로우 요약 Sandisk는 견고한 총 마진과 강력한 데이터 센터 모멘텀으로 최대 9~10배의 향후 수익으로 거래되는 매수 등급을 받았습니다.",
        "SNDK의 부가 가치는 독점 컨트롤러, 펌웨어 및 시스템 설계에 있으며, 우수한 제품 믹스와 장기 고객 계약을 촉진합니다.",
        "총 마진 강도(최대 80% 목표)는 NAND 가격 상승뿐만 아니라 비용 절감 및 품질 혼합을 통해 지속 가능합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SNDK",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "c31f3c478b43f6454682",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC",
        "QQQ"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "KLA Corporation: Strong AI Exposure, But Limited Margin Of Safety",
      "headlineKo": "KLA Corporation: AI 노출은 강력하지만 안전 한계는 제한적",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=db2484a50e291bc2feef09f0d35c11f52596d0ced0c8d78e9fbf173582b66835",
        "publishedAt": 1790743458,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA Corporation: AI 노출은 강력하지만 안전마진은 제한적임(NASDAQ:KLAC) | 알파 마켓 엣지 연구원 찾기 126 팔로워 팔로우 요약 KLA Corporation은 칩 복잡성으로 인해 반도체 공정 제어에서 중추적인 역할을 담당합니다.",
        "KLAC의 2026년 수익은 고급 포장 및 서비스 부문의 견고한 성장으로 12% 증가한 138억 5천만 달러를 기록했습니다.",
        "자본 배분은 37억 7천만 달러의 무료 현금 흐름, 33억 5천만 달러의 주주 이익, 새로운 70억 달러의 자사주 매입과 함께 R&D 증가로 규율되어 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, $13.85, $3.77 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, $13.85, $3.77 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "KLAC",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "e1a4f31815b74a29b94b",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL",
        "PLTR",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Is Worth About as Much as Oracle on Less Than a Tenth of Oracle's Revenue",
      "headlineKo": "Palantir의 가치는 Oracle 매출의 10분의 1 미만으로 Oracle만큼 가치가 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=55c85eea021a4b3f2a0b284ca1d7725e4ba06fc63dd71f261aa5f190bd22eed4",
        "publishedAt": 1790737561,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir의 가치는 Oracle 매출의 10분의 1 미만으로 Oracle만큼 가치가 있습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류 표면적으로는 Palantir( PLTR -0.27% ) 및 Ora",
        "내가 이 글을 쓰는 동안 Palantir의 시가총액은 약 4,470억 달러이며 주가는 186달러에 가깝고 Oracle은 약 4,250억 달러로 주당 약 140달러입니다.",
        "Oracle에게는 여기까지 오는 데 잔인한 한 해가 걸렸습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $447 billion, $186,, $425 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $447 billion, $186,, $425 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "e8d7d9622e741b89c833",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "ORCL",
        "PLTR"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Is Worth About as Much as Oracle on Less Than a Tenth of Oracle's Revenue",
      "headlineKo": "Palantir의 가치는 Oracle 매출의 10분의 1 미만으로 Oracle만큼 가치가 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=55c85eea021a4b3f2a0b284ca1d7725e4ba06fc63dd71f261aa5f190bd22eed4",
        "publishedAt": 1790737561,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir의 가치는 Oracle 매출의 10분의 1 미만으로 Oracle만큼 가치가 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "PLTR",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "b0d2e0fb07832da34c92",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The Case For Meta Enterprise Platform",
      "headlineKo": "메타엔터프라이즈 플랫폼의 사례",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=68c818a8e1c63eb34e58adfae8d3b642c8643fe9d76377761625c867a8a7b7d1",
        "publishedAt": 1790736300,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타엔터프라이즈 플랫폼(META) 사례 | Seeking Alpha MBI Deep Dives 팔로워 850명 팔로우 요약 Meta는 요즘 연일 뭔가 발표를 하는 것 같습니다.",
        "월요일 회사는 '메타 엔터프라이즈 플랫폼(Meta Enterprise Platform)'을 발표했습니다.",
        "소비자의 관심을 수익화하는 데 능숙하고 기업에서 많은 관심을 끌지 못한 이력이 있는 회사의 경우 이번 발표에 대한 합의가 회의적인 쪽으로 기울고 있다고 말하는 것이 타당하다고 생각합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "12859b92c1a7b8815951",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vanguard S&P 500 ETF vs. Invesco QQQ: Which ETF Is the Better Buy for Investors?",
      "headlineKo": "Vanguard S&P 500 ETF vs. Invesco QQQ: 어떤 ETF가 투자자에게 더 나은 구매인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=933afec0bf4e4c49c1603f4fe38dc8dbd4cf21c46cf6dd2a58b279fd7cd51834",
        "publishedAt": 1790735593,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Invesco QQQ: 어떤 ETF가 투자자에게 더 나은 구매인가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 투자자들은 포트폴리오를 고정하기 위한 핵심 보유종목으로 이 두 개의 헤비급 ETF 중에서 선택하는 경우가 많습니다.",
        "Vanguard S&P 500 ETF(VOO +0.48%)는 미국 최대 규모의 ETF에 광범위한 노출을 제공합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.48%, 0.70%, $737.93 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.48%, 0.70%, $737.93 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QQQ",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "20e01a6a73817f80a5c4",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMAT Stock Has Doubled This Year: Analyst Trims Price Target But Sees Higher 2027 Sales, Profit",
      "headlineKo": "AMAT 주식은 올해 두 배 증가했습니다: 분석가는 목표 가격을 낮추었지만 2027년 매출과 이익은 더 높아질 것으로 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17d74b492ebe2992d25d56275bf1f14d7b0f21114947697a156a96a6a9bf30d6",
        "publishedAt": 1790734863,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMAT 주식은 올해 두 배 증가했습니다: 분석가는 목표 가격을 낮추었지만 2027년 매출과 이익은 더 높아질 것으로 보고 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "AMAT",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "f8960fa3918e56ecb327",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "MRVL",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Marvell",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Marvell Technology Stock Triumphed on Tuesday",
      "headlineKo": "Marvell Technology 주식이 화요일에 승리한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d75315514838dfc008a0ca9d554c3eb3290d12ff0791435e9c01ae9aa7b7080",
        "publishedAt": 1790726802,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology 주식이 화요일에 승리한 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 엄격한 규칙은 아니지만, 유명 금융 기관이",
        "이는 주 두 번째 거래일에 Marvell Technology(MRVL +4.51%)가 긍정적인 분석가의 평가를 받은 후 거의 5% 상승한 경우입니다.",
        "문제의 금융 기관은 다음 주 화요일인 10월 1일 화요일로 예정된 회사 투자일을 앞두고 Marvell 주식에 대한 업데이트를 발표한 거대 금융 기관인 Citigroup이었습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4.51%, 5%, $275 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4.51%, 5%, $275 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MRVL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "5696b974a3ce3f77dee6",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "QQQM Charges 0.15% and QQQ Charges 0.18%. A Wide Spread Can Take That Back on a Single Trade",
      "headlineKo": "QQQM은 0.15%를 청구하고 QQQ는 0.18%를 청구합니다. 넓은 스프레드는 단일 거래에서 이를 되돌릴 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=863db48307d9b0cebe4c74a39ae2423615cefdb5af2796106219e25a2d76025c",
        "publishedAt": 1790724710,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "QQQM은 0.15%를 청구하고 QQQ는 0.18%를 청구합니다.",
        "넓은 스프레드로 단일 거래에서 이를 되돌릴 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,702.20 +0.15% Dow Jones 51,664.00 +0.37% Nasdaq 100 30,433.00 +0.03% Russell 2000 2,822.68 +0.24% S&P 500 7,702.20 +0.15% 다우존스 51,664.00 +0.37% 나스닥 100 30,433.00 +0.03% 러셀 2000 2,822.68 +0."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.15%, 0.18%, 0.37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.15%, 0.18%, 0.37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QQQ",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "57bb27ce47c4d26e8e95",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Forget SPY’s Dividend. Here Is What $100,000 in State Street’s High-Dividend Version Pays",
      "headlineKo": "SPY의 배당금은 잊어버리세요. State Street의 고배당 버전에서 $100,000가 지불하는 금액은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b29367caa8ba474888c37b79cc487e137a3df2ee3a998352f56a21dd1d9e104d",
        "publishedAt": 1790723207,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "State Street의 고배당 버전에서 100,000달러가 지불되는 금액은 다음과 같습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,706.10 +0.20% Dow Jones 51,483.00 +0.01% Nasdaq 100 30,531.70 +0.35% Russell 2000 2,823.03 +0.25% S&P 500 7,706.10 +0.20% 다우존스 51,483.00 +0.01% 나스닥 100 30,531.70 +0.35% 러셀 2000 2,823.03 +0.",
        "State Street의 고배당 버전에서 100,000달러를 지불하는 방법은 다음과 같습니다. State Street는 더 큰 분기별 수표를 지불하기 위해 특별히 두 번째 S&P 500 펀드를 구축했으며 대부분의 SPY 투자자는 이에 대해 들어본 적이 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $100,000, 0.20%, 0.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $100,000, 0.20%, 0.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SPY",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "20098347f2d989128d0f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Lines Up $30 Billion Credit Backup Ahead Of Heavy Capex Years",
      "headlineKo": "Tesla, 막대한 자본 지출을 앞두고 300억 달러 규모의 신용 백업 준비",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d11e1ad48fd0d25672f39134f57f04a2522ab5fe1f7b1649c0265db69dc76744",
        "publishedAt": 1790721368,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 막대한 투자 기간을 앞두고 300억 달러의 신용 백업을 준비합니다. AI 에이전트 Trending News Earnings All DIA 0.04% SPY 0.05% QQQ 0.25% Trending CAPR 17.11% MSOS 5.04% MU 1.52% IBRX 3.64% FICO 27.04% IOVA 31.21% DKNG 6.90% VNDA 6.00% XERS 1.5",
        "Tesla는 대규모 Capex 연도를 앞두고 300억 달러의 신용 백업을 준비했습니다. SEC에 제출한 자료에 따르면 Tesla는 화요일에 미사용 선순위 무담보 은행 시설 3곳에 서명했습니다.",
        "이미지 출처: 게티 이미지 Anan Ashraf · Stocktwits 2026년 9월 29일 게시 | 오후 6시 36분(EDT) Share · Add us on Tesla는 서명 당시 아무것도 도출되지 않았으며 2026년에는 차입할 계획이 없다고 말했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $30 Billion, 0.04%, 0.05% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $30 Billion, 0.04%, 0.05% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "e227c2a28a84461b826f",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "AAPL",
        "MU",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500, Dow Extend Losses From Elevated Yield Pressure — SPCX, TGT, AAPL, MU, NTAP In Focus",
      "headlineKo": "S&P 500, Dow는 높은 수익률 압력으로 인한 손실 확대 — SPCX, TGT, AAPL, MU, NTAP 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df076b1e0ea4fcf5a99c515a953021e0b32023f0067e91178578e91f8038213b",
        "publishedAt": 1790721008,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, 다우 상승 압력으로 인한 손실 확대 — SPCX, TGT, AAPL, MU, NTAP 집중 AI 에이전트 동향 뉴스 수익 전체 DIA 0.47% SPY 0.33% QQQ 0.26% 추세 CAPR 17.62% XRPN 15.12% SOL 0.70% CCL 0.44% IOVA 0.97% 조비 0.33% XERS 1",
        "S&P 500, Dow는 높은 수익률 압력으로 인한 손실 확대 — SPCX, TGT, AAPL, MU, NTAP In Focus 30년 만기 국채 수익률은 2002년 이후 최고 수준입니다.",
        "트레이더들은 뉴욕 증권거래소 현장에서 일합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.47%, 0.33%, 0.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.47%, 0.33%, 0.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SPY",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "5b03345b136391e8da73",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "MU",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500, Dow Extend Losses From Elevated Yield Pressure — SPCX, TGT, AAPL, MU, NTAP In Focus",
      "headlineKo": "S&P 500, Dow는 높은 수익률 압력으로 인한 손실 확대 — SPCX, TGT, AAPL, MU, NTAP 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df076b1e0ea4fcf5a99c515a953021e0b32023f0067e91178578e91f8038213b",
        "publishedAt": 1790721008,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, 다우 상승 압력으로 인한 손실 확대 — SPCX, TGT, AAPL, MU, NTAP 집중 AI 에이전트 동향 뉴스 수익 전체 DIA 0.03% SPY 0.04% QQQ 0.28% 추세 CAPR 17.11% MSOS 5.04% MU 1.57% IBRX 3.64% FICO 27.04% IOVA 31.21% DKNG",
        "S&P 500, Dow는 높은 수익률 압력으로 인한 손실 확대 — SPCX, TGT, AAPL, MU, NTAP In Focus 30년 만기 국채 수익률은 2002년 이후 최고 수준입니다.",
        "트레이더들은 뉴욕 증권거래소 현장에서 일합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $103., 0.4%, 1.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $103., 0.4%, 1.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AAPL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "c37c3967e67911e85a99",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "If You'd Invested $1,000 in the Invesco QQQ Trust (QQQ) 10 Years Ago, Here's How Much You'd Have Today",
      "headlineKo": "10년 전에 Invesco QQQ Trust(QQQ)에 1,000달러를 투자했다면 현재 얼마를 갖게 될지 알려드립니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=52cf6de53b5689bd0714c3363548ff0ac1aa89a179f54f770870db1c9e62abbd",
        "publishedAt": 1790720400,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10년 전에 Invesco QQQ Trust(QQQ)에 1,000달러를 투자했다면 현재 얼마를 갖게 될지 알려드립니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류 S&P 500 지수는 모두 t를 얻습니다.",
        "그러나 투자자들은 힘들게 벌어들인 저축을 뒤로 미룰 수 있는 다른 벤치마크를 알고 있어야 합니다.",
        "예를 들어, Invesco QQQ Trust(QQQ +0.19%)는 일류 실적을 보유한 뛰어난 상장지수펀드(ETF)입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, 0.19%, 571% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, 0.19%, 571% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QQQ",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "ebb3a4ff77d41ce6e95e",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "SNDK",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Sandisk a Millionaire-Maker Stock After Its 2026 Run?",
      "headlineKo": "Sandisk는 2026년 출시 이후 백만장자 주식인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dcc6ab761207a781d78fffa709a885f5ddd8c7c2ca2b43f425d11b0e78e794f9",
        "publishedAt": 1790720400,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk는 2026년 출시 이후 백만장자 주식인가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Sandisk(SNDK +0.98%)에 합류하여 플래시 스토리지 전문 기업의 주가가 621 상승하는 등 2026년에 투자자들에게 엄청난 부를 창출했습니다.",
        "따라서 백만 달러 규모의 포트폴리오를 구축하기 위해 Sandisk를 구입한 투자자들은 현재 상당한 이익을 얻고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 372%, 0.98 %, $ 16.87 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 372%, 0.98 %, $ 16.87 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SNDK",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "89a696716d4d74b20d3b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD takes on Nvidia with aggressive $8.2 billion bet on AI’s next era",
      "headlineKo": "AMD, AI의 다음 시대에 82억 달러 공격적 투자로 엔비디아에 도전",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1763d3b5fcdebe2a59d1c89258683faf1d2b6126e97164eca7f62ab9f43dda05",
        "publishedAt": 1790719620,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'AMD takes on Nvidia with aggressive $8.2 billion bet on AI’s next era' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "1252e23d0d05c6769676",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today, Sept. 29: Oracle's Fusion Claw Helps it Claw Back Losses",
      "headlineKo": "오늘, 9월 29일 주식 시장: Oracle의 Fusion Claw가 손실을 만회하는 데 도움이 됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=98a66fb77d5f5f08047e43845f382f75fd00c5d65f0285402fecb0a09beca3da",
        "publishedAt": 1790717899,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "29: Oracle의 Fusion Claw가 Claw Back Loss에 도움 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류하세요 Expand NYSE : ORCL Oracle Premium Feature Moneyball Superscore 74 /100 Today's C",
        "비상장, 비공개 또는 이중 종류의 비거래 주식은 포함되지 않습니다.",
        "일일 범위 $ 132.53 - $ 143.67 52주 범위 $ 114.50 - $ 322.54 거래량 45.7M 평균 거래량 33.1M 총이익 61.93% 배당수익률 1.51% 엔터프라이즈 소프트웨어 및 AI 인프라 리더인 Oracle( ORCL +3.91% ) 은 $137.79로 마감하여 상승했습니다. 3.91%."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $ 132.53, $ 143.67, $ 114.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $ 132.53, $ 143.67, $ 114.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "4301db55de7ffc62c9ac",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Does Amphenol Offer That Coherent Does Not?",
      "headlineKo": "Coherent가 제공하지 않는 Amphen은 무엇을 제공합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3e9ada8de20b1ed204f9f3f701be6b0fc9c0c054a84c5bf48fe7117aad284b33",
        "publishedAt": 1790717577,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Coherent가 제공하지 않는 Amphen은 무엇을 제공합니까?",
        "| Trefis Amphen은 Coherent가 제공하지 않는 기능을 제공합니까?",
        "2026년 9월 29일 · Trefis 팀 COHR YTD +58.3% SPY YTD +12.7% QQQ YTD +20.4% COHR 분석 → Coherent(COHR)와 Amphenol(APH)은 모두 AI 데이터 센터 내부 연결을 판매하지만 Coherent는 해당 비즈니스에 더 많이 의존합니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 58.3%, 12.7%, 20.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 58.3%, 12.7%, 20.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "COHR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "28c8042057734a802da2",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "VST",
      "relatedTickers": [
        "VST"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vistra to Report Third Quarter Results on Nov. 6, 2026",
      "headlineKo": "Vistra, 2026년 11월 6일 3분기 결과 보고",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8e9c2841b51f4ed480716e087be112d2ae5c39060939b53300bf3e53276f104",
        "publishedAt": 1790717400,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra to Report Third Quarter Results on Nov. 6, 2026",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VST에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "VST",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "0f7f894b68f03f9f21df",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Enters Into $30 Billion Term Loan and Revolving Credit Facilities",
      "headlineKo": "Tesla, 300억 달러 규모의 정기 대출 및 회전 신용 시설 계약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22d36f2c6b08a84f7fd3f14f10d23e93b0fea92ed7198267e88096db2d6ff0fa",
        "publishedAt": 1790716411,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla, 300억 달러 규모의 정기 대출 및 회전 신용 시설 계약 체결"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ff1b85926eef78f366d6",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "SPY",
        "TSM"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Prediction: Taiwan Semiconductor Manufacturing Will Hit a $3 Trillion Market Cap Before 2027 Is Over",
      "headlineKo": "예측: 대만 반도체 제조는 2027년이 끝나기 전에 3조 달러의 시가총액을 달성할 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc100185c0fea6bb99bd5989ed8ce4a4a98e101cbd862d756b5283cc0fffd2b1",
        "publishedAt": 1790714940,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 대만 반도체 제조업은 2027년이 끝나기 전에 3조 달러의 시가총액을 기록할 것 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool Taiwan Semiconductor Manufactu에 합류",
        "해당 목표를 달성하려면 향후 15개월 동안 주가가 약 30% 상승해야 합니다.",
        "주식시장이 장기적으로 평균 약 10%의 연간 수익률을 올렸다는 점을 고려하면 이는 견실한 성과일 것입니다. 따라서 제가 옳다면 지금 주식을 매수할 가치가 충분할 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, 10%, $3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSM에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, 10%, $3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "0b033bf14b0854fa244e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "BE",
      "relatedTickers": [
        "BE",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "BE Stock Recovers After Monday Slide On Analyst Support: Peers FCEL, PLUG Edge Higher",
      "headlineKo": "BE 주식은 분석가 지원에 대한 월요일 슬라이드 이후 회복됩니다: 동료 FCEL, PLUG Edge 더 높음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5dea249fcdb71dbcde67c40998e918fb6f69e6873f8dc1f5c914a9807e671261",
        "publishedAt": 1790714447,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BE 주식은 월요일 슬라이드 이후 회복됩니다. 애널리스트 지원: Peers FCEL, PLUG Edge 더 높은 AI 에이전트 동향 뉴스 수익 모든 DIA 0.06% SPY 0.57% QQQ 0.82% 추세 CAPR 13.54% APLD 1.79% IBRX 4.42% CADL 0.46% BTC 0.45% MRNA 6.15% IWM 0.21%후",
        "BE 주식은 분석가 지원에 대한 월요일 슬라이드 이후 회복됩니다: Peers FCEL, PLUG Edge Higher Jefferies는 보류 등급을 유지하면서 BE의 목표 가격을 $229에서 $264로 높였습니다.",
        "이번 포토 일러스트에는 블룸에너지(Be) 로고가 스마트폰 화면에 표시된 모습이 담겨 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.06%, 0.57%, 0.82% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "BE에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.06%, 0.57%, 0.82% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "BE",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "62f61c65830dc9a0d9e4",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Brings OpenAI’s Autonomous ‘Dots’ AI Workers Into the Enterprise",
      "headlineKo": "Microsoft, OpenAI의 자율적인 'Dots' AI 작업자를 기업에 도입",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be22bc4ada212c1fde4e955af25c04b14d375b33d24136a79dacfc4974271139",
        "publishedAt": 1790713974,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft, 기업에 OpenAI 도트 도입 - Microsoft(NASDAQ:MSFT) - Benzinga SPY 764.74 +0.07% QQQ 738.41 +0.07% BTC/USD 83,578.29 +0.15% DIA 513.00 +0.02% GLD 382.58 −0.08% TLT 78.29 +0.08% US 로그인 내 계정 등록",
        "(NASDAQ: MSFT)는 OpenAI와 협력하여 연구소의 새로운 자율 \"Dots\" 에이전트를 Microsoft의 엔터프라이즈 보안 및 거버넌스 스택에 통합하여 기업이 별도의 작업 없이 기업 시스템 전반에서 작동할 수 있는 AI 작업자를 관리할 수 있는 방법을 제공합니다.",
        "OpenAI는 DevDay에서 화요일에 Dots를 공개했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.07%, 0.15%, 0.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.07%, 0.15%, 0.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "6fe9bf8765596c2fc91f",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Has MSFT Stock Run Out Of Steam?",
      "headlineKo": "MSFT 주식이 고갈되었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5269c26441c3abf13e705ed88d84cca3c0a1b94315f7cd480a5b50aa8846f2a8",
        "publishedAt": 1790713937,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis의 MSFT 주식이 고갈되었나요?",
        "2026년 9월 29일 · Trefis 팀 MSFT YTD +5.9% SPY YTD +12.7% QQQ YTD +20.4% MSFT 분석 → 실제로 Microsoft 주식을 주도한 것이 무엇인지 확인하십시오.",
        "3년에 걸쳐 수익 성장과 더 넓은 마진으로 인해 P/E 배수는 줄어들었지만 지난 3개월의 랠리는 비즈니스 자체보다는 더 풍부한 배수에 더 의존했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.9%, 12.7%, 20.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.9%, 12.7%, 20.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "b22bc025810b2c0f8510",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Here's Why SpaceX Buying More Nvidia GPUs Is Bigger News for SpaceX's Stock Than Nvidia's",
      "headlineKo": "SpaceX가 더 많은 Nvidia GPU를 구매하는 것이 Nvidia보다 SpaceX의 주식에 더 큰 뉴스인 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc1f5a5c1e79d61dc3359e1d59c814cb8002b01266a7f906c2fa04607f6a98b6",
        "publishedAt": 1790713200,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX가 더 많은 Nvidia GPU를 구매하는 것이 Nvidia의 주식보다 SpaceX의 주식에 더 큰 뉴스인 이유는 다음과 같습니다. Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 10월부터 Space Exploration Tec",
        "Barron's에 따르면 SpaceX는 220,000개의 Nvidia GB300 Blackwell GPU 클러스터가 앞으로 며칠 동안 작동되고 10월까지 220,000개가 추가로 가동될 것으로 예상합니다.",
        "이는 이미 SpaceX의 데이터 센터 단지에서 실행 중인 780,000개의 Blackwell 및 Hopper 프로세서보다 더 많은 것입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.72 %, $ 227.21, $5.5 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.72 %, $ 227.21, $5.5 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "a98137e9fa34ccedada9",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Micron’s next earnings could reveal about the AI chip market",
      "headlineKo": "Micron의 다음 실적이 AI 칩 시장에 대해 밝힐 수 있는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b14cc5197b2d545dcfd3bb0c4a2d7794702d40677f79b9997fd8a2ca150a0e0",
        "publishedAt": 1790713200,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron의 다음 실적이 AI 칩 시장에 대해 밝힐 수 있는 것"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "05dd8b9611aa5e83c8be",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet: The AI Winner Nobody Is Talking About",
      "headlineKo": "알파벳: 아무도 이야기하지 않는 AI 승자",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=423e22e36d01e009356d82e8c81dcefda5262f4825bcb45d72fa7df64b9d69f8",
        "publishedAt": 1790711970,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳: 아무도 말하지 않는 AI 승자(NASDAQ:GOOGL) | 알파 Kenio Fontes 찾기 3.21K 팔로워 요약 팔로우 Alphabet Inc.",
        "장기적인 상승 여력을 위해 생태계, 인프라 및 다양한 수익원을 활용하여 에이전트 AI 경쟁에서 여전히 좋은 위치를 유지하고 있습니다.",
        "GOOGL 주식은 보수적이고 낙관적인 영업 이익과 다양한 가정을 바탕으로 2027~2028년까지 24~54%의 잠재력을 지닌 강력한 상승 여력을 제공합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 54% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 54% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GOOGL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "4ba24032ee1f5703f009",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta’s Muse Earned a “20% Bump on the Multiple.” Now Earnings Have to Catch Up",
      "headlineKo": "Meta의 Muse는 \"다중에서 20% 상승\"을 얻었습니다. 이제 수익이 따라잡아야 한다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9eda3b34b1ca28546d0ec2f34665c395c67524a5e6838bd671837e213e1e275c",
        "publishedAt": 1790711666,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta의 Muse는 \"다중에서 20% 상승\"을 얻었습니다. 이제 수익이 따라잡아야 한다"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7238986a18b97e165354",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Could Advanced Micro Devices Stock Help You Become a Millionaire?",
      "headlineKo": "고급 마이크로 장치 주식이 백만장자가 되는 데 도움이 될 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3137bbefc71a8312e9b76ea4cc7a8e0b1026af3888e3c94af4d2272bd292cd49",
        "publishedAt": 1790711520,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "고급 마이크로 장치 주식이 백만장자가 되는 데 도움이 될 수 있습니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Advanced Micro Devices( AMD -0.05% )에 합류 최근 그래픽 처리 장치(GPU) 및",
        "거대 기술 기업들이 인공 지능(AI) 모델 출시, 클라우드 플랫폼 강화, 기타 AI 기반 서비스 출시를 서두르고 있는 가운데 강력한 프로세서에 대한 수요는 계속해서 급증할 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 19%, 0.05 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 19%, 0.05 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "3146039f6a2cc26a04c7",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중장기 계약·클라우드 매출 반영",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "NTAP Stock Hits Record High: NetApp Expands Strategic Partnerships With SAP, Oracle, and Supermicro To Drive Cloud Infrastructure",
      "headlineKo": "NTAP 주가 사상 최고치 경신: NetApp, 클라우드 인프라 추진을 위해 SAP, Oracle 및 Supermicro와의 전략적 파트너십 확장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=efe745b6908904e67351b4f79914300f2d9b32f141c22b767d6361e905641acc",
        "publishedAt": 1790711268,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle Cloud Infrastructure에서 양자컴퓨팅 서비스를 제공하기 위한 다년간 파트너십 소식입니다.",
        "파트너십은 기술·고객 확보 신호지만 계약 금액과 매출 인식 시점은 별도 확인이 필요합니다.",
        "초기에는 클라우드 사용량과 고객 유입이 늘어나는지가 핵심입니다."
      ],
      "marketInterpretation": [
        "OCI가 데이터베이스 중심에서 AI·양자·고성능 컴퓨팅으로 확장되는 흐름을 보여줍니다.",
        "기술 제휴가 실제 클라우드 매출과 잉여현금흐름으로 연결되기까지 시간이 걸릴 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 ORCL의 사업과 관련된 'NTAP Stock Hits Record High: NetApp Expands Strategic Partnerships With SAP, Oracle, and Supermicro To Drive Cloud Infrastructure' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "파트너십은 ‘앞으로 같이 사업을 해보자’는 약속에 가깝고, 당장 매출이 늘었다는 뜻은 아닙니다.",
        "Oracle이 실제 고객에게 양자 서비스를 판매하고 사용량이 늘어야 실적에 반영됩니다.",
        "다음 실적에서 클라우드 매출 성장과 FCF를 함께 확인하면 됩니다."
      ],
      "whyItMatters": [
        "OCI가 데이터베이스 중심에서 AI·양자·고성능 컴퓨팅으로 확장되는 흐름을 보여줍니다.",
        "기술 제휴가 실제 클라우드 매출과 잉여현금흐름으로 연결되기까지 시간이 걸릴 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "긍정·확인 필요",
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실",
          "basis": "analysis"
        }
      ],
      "watch": [
        "OCI 클라우드 매출 성장률",
        "파트너십 고객·계약 규모",
        "CAPEX 대비 FCF 전환"
      ]
    },
    {
      "id": "67caf8abc8fd5925144a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "INTC",
        "PLTR",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "I've Covered Palantir for 5 Years. Here's How to Know if the Artificial Intelligence (AI) Stock Is Overvalued.",
      "headlineKo": "저는 Palantir를 5년 동안 다루었습니다. 인공지능(AI) 주식이 과대평가되었는지 확인하는 방법은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd7e4b72c0da063d663a0f4fef188bcc7b66f2363034f5fc031c8d81d69b9eab",
        "publishedAt": 1790711220,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인공지능(AI) 주식이 과대평가되었는지 확인하는 방법은 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 저는 약 10년 전에 Palantir Technologies( PLTR -0.27% )를 처음 만났습니다.",
        "당시 저는 사업개발회사(BDC)에서 투자분석가로 일하고 있었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 93%, $1.94 billion, 149% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 93%, $1.94 billion, 149% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "PLTR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "ca7d1bd568ad7eaa811f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "AAPL",
        "META"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Billionaire Investor: Meta’s Muse Puts Apple’s “30% Rev Share on Notice”",
      "headlineKo": "억만장자 투자자: Meta의 Muse가 Apple의 \"30% 수익 지분을 공지합니다\"라고 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cdb05e0a9f13723996cf6c32c7f4812e8ec3d2514488f07253d7b2c86d6720ad",
        "publishedAt": 1790710356,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "억만장자 투자자: Meta의 Muse가 Apple의 \"30% 수익 지분을 공지합니다\"라고 밝혔습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "be084e07878e681f27ba",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "MSFT",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SpaceX Briefly Passed Amazon and Microsoft in Market Cap After Its IPO. Could It Get There Again?",
      "headlineKo": "SpaceX는 IPO 후 시가총액에서 Amazon과 Microsoft를 잠시 추월했습니다. 다시 거기까지 갈 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=81753abf08510cb607b0440483dfb9e964feb80c5a8c24c4ad358cf2e2f03532",
        "publishedAt": 1790709540,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX는 IPO 후 시가총액에서 Amazon과 Microsoft를 잠시 추월했습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool IPO 이후 초기에 Space Exploration Technologies( SPCX +2.59% )는 일중 거래에서 잠시 2.9조 달러를 넘어섰습니다.",
        "그러나 그 이후로 이들 주식의 궤적은 크게 달라졌습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $147, $150, $1.95 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $147, $150, $1.95 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "9e107aa94dc77de1a6d9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Makes $8.2 Billion Bet on AI's Next Big Market",
      "headlineKo": "AMD, AI의 차세대 거대 시장에 82억 달러 투자",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=388be4fd69883f29a861a84bd68954c39724936912792e523e662c960ffa781a",
        "publishedAt": 1790708728,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMD의 사업과 관련된 'AMD Makes $8.2 Billion Bet on AI's Next Big Market' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "7907349f89af6f8ad0fd",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "AVGO",
        "MRVL",
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Marvell",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell Is Up 210% in 2026: Take Profits, or Buy More?",
      "headlineKo": "Marvell은 2026년에 210% 상승합니다: 이익을 얻나요, 아니면 더 많이 사나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=513f74c8c35d4f0cfed1620f5cbe2dbf7603340c1e5c30742f2664c172d78bf0",
        "publishedAt": 1790708512,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell은 2026년에 210% 상승합니다: 이익을 얻나요, 아니면 더 많이 사나요?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,702.20 +0.15% Dow Jones 51,664.00 +0.37% Nasdaq 100 30,433.00 +0.03% Russell 2000 2,822.68 +0.24% S&P 500 7,702.20 +0.15% 다우존스 51,664.00 +0.37% 나스닥 100 30,433.00 +0.03% 러셀 2000 2,822.68 +0.",
        "Marvell은 올해 NVIDIA, Broadcom 및 전체 반도체 ETF를 수렁에 빠뜨렸고, 이러한 성과 격차로 인해 이제 주주들은 실제 결정을 내려야 하는 불편한 위치에 놓이게 되었습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 210%, $263.04,, 89% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 210%, $263.04,, 89% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MRVL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "74900e07dd2cea30df7c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom Stock Jumps Nearly 3.2% as $16.7 Billion AI Engine Faces Margin Test",
      "headlineKo": "167억 달러 규모의 AI 엔진이 마진 테스트에 직면하면서 Broadcom 주가는 약 3.2% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb8b32c7d964b863df44f8539dd51812887f54327e0d02334589cdf35160c33f",
        "publishedAt": 1790707601,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AVGO의 사업과 관련된 'Broadcom Stock Jumps Nearly 3.2% as $16.7 Billion AI Engine Faces Margin Test' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "2bb14273571988cc95b3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Reflecting On Processors and Graphics Chips Stocks’ Q2 Earnings: Broadcom (NASDAQ:AVGO)",
      "headlineKo": "프로세서 및 그래픽 칩 주식의 2분기 실적 반영: Broadcom(NASDAQ:AVGO)",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3fb09f7f4dde4148a255efb9c748335460f7fb5931ea73b0e8e148dea9652843",
        "publishedAt": 1790707202,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "프로세서 및 그래픽 칩 주식의 2분기 실적 반영: Broadcom(NASDAQ:AVGO)"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "AVGO",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "fb99bdb450b2b46e5dfc",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "META",
        "MSFT",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "These 2 Numbers Explain Why Warren Buffett and Bill Ackman Love Alphabet, Amazon, Microsoft, and Meta",
      "headlineKo": "워렌 버핏과 빌 애크먼이 알파벳, 아마존, 마이크로소프트, 메타를 사랑하는 이유를 설명하는 두 가지 숫자",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5fe16063f9dd6ed4111dbfd11d4c5a1c2905557d82ff4e6ac8c74ffcdc65cec",
        "publishedAt": 1790704320,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Warren Buffett과 Bill Ackman이 Alphabet, Amazon, Microsoft 및 Meta를 사랑하는 이유를 설명하는 두 가지 숫자 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 워렌 버핏은 상당한 경력을 갖고 있습니다.",
        "그는 버크셔 해서웨이( BRKA -0.14%)( BRKB -0.11%)라는 실패한 섬유 회사를 인수하여 대규모 보험 사업을 중심으로 수천억 달러에 달하는 주식 포트폴리오를 갖춘 다국적 지주 회사로 전환했습니다.",
        "(그러나 그는 섬유 사업을 구할 수 없었습니다.) 그의 팬 중 한 명은 Howard Hughes Holdings를 또 다른 버크셔로 건설하기를 열망하는 Bill Ackman입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.14%, 0.11%, 0.50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.14%, 0.11%, 0.50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "b9803e02cb6f518c0e90",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AAPL",
        "GOOGL",
        "META",
        "MSFT",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple Falls 2% as Bank of America Flags Meta’s Shopping Agent; Alphabet Slips, Microsoft Holds Steady",
      "headlineKo": "Bank of America가 Meta의 쇼핑 에이전트로 선정되면서 Apple은 2% 하락했습니다. 알파벳 전표, Microsoft는 꾸준한 유지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=079983d534993d813acc1a04372fd4576a566e907c6daf552a7fd3919d8b8148",
        "publishedAt": 1790703787,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bank of America가 Meta의 쇼핑 에이전트로 지정되면서 Apple은 2% 하락했습니다. 알파벳 전표, Microsoft는 꾸준한 유지 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,689.80 −0.11% Dow Jones 51,419.00 −0.28% Nasdaq 100 30,412.70 +0.27% Russell 2000 2,808.96 −0.54% S&P 500 7,689.80 −0.11% 다우존스 51,419.00 −0.28% 나스닥 100 30,412.70 +0.27% 러셀 2000 2,808.96 −0.",
        "작성자: David Moadel 2026년 9월 29일 게시, 오후 1시 43분(ET) · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $331.08,, $718.53, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $331.08,, $718.53, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "2c3f4a23ed13c3e8a8c0",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Wall Street Is Watching Nvidia. I’m Watching Credo. Here’s My 2027 Price Target",
      "headlineKo": "월스트리트가 엔비디아를 지켜보고 있다. 크레도를 보고 있어요. 내 2027년 목표 가격은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88f37918a25062efcb25a842a6bec99382e81d68aad24fe4d4d96e6154eac4c1",
        "publishedAt": 1790703036,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "내 2027년 목표 가격은 다음과 같습니다 - 월 스트리트 24시간 영업",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,687.60 −0.14% Dow Jones 51,436.00 −0.25% Nasdaq 100 30,408.90 +0.26% Russell 2000 2,811.26 −0.45% S&P 500 7,687.60 −0.14% 다우존스 51,436.00 −0.25% 나스닥 100 30,408.90 +0.26% 러셀 2000 2,811.26 −0.",
        "내 2027년 가격 목표는 다음과 같습니다. Nvidia가 헤드라인을 장식했지만 모든 GPU를 조용히 연결한 회사는 115%의 매출 성장을 기록했고 광학을 두 번째 주요 성장 엔진으로 추가했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 115%, $479 million, 46.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 115%, $479 million, 46.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "694e011482317996f8df",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce Stock Sits 16% Below Its High After the Fin Deal Closes. Here’s What Koa Could Change",
      "headlineKo": "Salesforce 주가는 Fin Deal이 종료된 후 최고치보다 16% 하락했습니다. Koa가 바꿀 수 있는 것은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e56a1ffe3416280215f7e4a46ac93c4549ff13db82a3cdbc705ca13a7ce40062",
        "publishedAt": 1790702781,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce 주가는 Fin Deal이 종료된 후 최고치보다 16% 하락했습니다. Koa가 바꿀 수 있는 것은 다음과 같습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "CRM",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "836ea9a3b1bd015916a1",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce Stock Sits 16% Below Its High After the Fin Deal Closes. Here’s What Koa Could Change",
      "headlineKo": "Salesforce 주가는 Fin Deal이 종료된 후 최고치보다 16% 하락했습니다. Koa가 바꿀 수 있는 것은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e56a1ffe3416280215f7e4a46ac93c4549ff13db82a3cdbc705ca13a7ce40062",
        "publishedAt": 1790702781,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce 주가는 Fin Deal이 종료된 후 최고치보다 16% 하락했습니다.",
        "Koa가 바꿀 수 있는 것은 다음과 같습니다 | TIKR.com 주식 리뷰 Salesforce 주식은 핀 거래가 종료된 후 최고치보다 16% 낮습니다.",
        "Koa가 Rexielyn Diaz를 변화시킬 수 있는 것은 다음과 같습니다. • 6분 읽기 검토자: David Hanson 최종 업데이트: 2026년 9월 29일 Pexels의 Tima Miroshnichenko 및 Canva를 통해 Getty Images에서 가능한 모든 것 CRM Stock에 대한 주요 통계 지난 주 실적:"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 16%, 4.3%, $146 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 16%, 4.3%, $146 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "CRM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "72e0378c9f0646cea883",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Stock Gains 1.3% as AI Memory Faces Earnings Reality",
      "headlineKo": "AI 메모리가 수익 현실에 직면하면서 마이크론 주식은 1.3% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=14e47558086ab1d2a834c1f88ec1b9315aa44bad26e7614fd21de4a836cea930",
        "publishedAt": 1790702424,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Stock Gains 1.3% as AI Memory Faces Earnings Reality",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "cd1afb2c4781c57937fd",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Stock Slips 1.2% Although Copilot Super-App Expands Paid Workflows",
      "headlineKo": "Copilot Super-App이 유료 워크플로우를 확장했지만 Microsoft 주식은 1.2% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bec0240fb3764bf0ee3174682ca49293abf7848a505613900314516e98332485",
        "publishedAt": 1790702368,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Stock Slips 1.2% Although Copilot Super-App Expands Paid Workflows",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "4194863cceef8709395b",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "IBM Stock Moves Higher as Nvidia Partnership Puts Identity Around Agents",
      "headlineKo": "Nvidia 파트너십으로 에이전트에 신원을 부여함에 따라 IBM 주가 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c0ff6aa090dfa2d6401a5f1f4f865452cbf70f12df5b03bbb15d8ee187ff2bd4",
        "publishedAt": 1790702200,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "IBM Stock Moves Higher as Nvidia Partnership Puts Identity Around Agents",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "52feea82e87d7ea469af",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "TSM"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "How Does Taiwan Semiconductor Manufacturing (TSM) Fit Into The New AI Supply Chain?",
      "headlineKo": "Taiwan Semiconductor Manufacturing(TSM)은 새로운 AI 공급망에 어떻게 적합합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=06fe4a3f20a3696e49c680628f703acb5ec32d9cd97476e6bca6cbf5a9ac644e",
        "publishedAt": 1790701774,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Taiwan Semiconductor Manufacturing(TSM)은 새로운 AI 공급망에 어떻게 적합합니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "TSM",
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "c1260d8fe06d711f9648",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce Is Down Double Digits This Year. Our Model Sees 48% Upside",
      "headlineKo": "Salesforce는 올해 두 자릿수 감소했습니다. 우리 모델에서는 48% 상승 여력이 있다고 봅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fdfe6bf2e81889e87fa185db02af8ee1ed196f049c50e2eaf61fead2eb8aa122",
        "publishedAt": 1790701248,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce는 올해 두 자릿수 감소했습니다.",
        "우리 모델은 48%의 상승 여력을 보입니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,702.60 +0.16% Dow Jones 51,666.50 +0.37% Nasdaq 100 30,448.60 +0.08% Russell 2000 2,822.28 +0.22% S&P 500 7,702.60 +0.16% 다우존스 51,666.50 +0.37% 나스닥 100 30,448.60 +0.08% 러셀 2000 2,822.28 +0."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 48%, $348.23., 48.76% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 48%, $348.23., 48.76% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "CRM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "ce65f19dd9553fc014ef",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SPY",
        "STX"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SK Hynix Climbs 3%, Outpaces U.S. Rivals Micron and Seagate as Traders Weigh Memory Demand",
      "headlineKo": "SK하이닉스, 트레이더들이 메모리 수요에 무게를 두는 가운데 3% 상승, 미국 경쟁사 마이크론과 씨게이트 제치고",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=27be0b0b3b849ca40a5664512c4f6d988e5b75d1d842cad6fc523758e85e9cf4",
        "publishedAt": 1790701127,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "트레이더들이 메모리 수요를 측정함에 따라 라이벌 Micron과 Seagate - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,688.60 −0.12% Dow Jones 51,412.00 −0.29% Nasdaq 100 30,415.70 +0.28% Russell 2000 2,808.41 −0.56% S&P 500 7,688.60 −0.12% 다우존스 51,412.00 −0.29% 나스닥 100 30,415.70 +0.28% 러셀 2000 2,808.41 −0.",
        "트레이더들이 메모리 수요를 저울질하는 라이벌 Micron과 Seagate SK Hynix는 Seagate가 미끄러지고 Micron은 거의 움직이지 않는 동안 급증하고 있으며, 메모리 거래 내부의 분열은 다음 움직임이 도래하기 전에 대답할 가치가 있는 질문을 제기합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, $187.13, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, $187.13, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "ef92f6a532ea1919fa5c",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "OpenAI Revenue Growth Report Boosts Oracle Stock; DevDay On Deck",
      "headlineKo": "OpenAI 수익 성장 보고서로 Oracle 주식 상승 DevDay On Deck",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1e3652c64b5fea8d638a55ec347226fac21d86a05b93579e9b87b1d4994d182",
        "publishedAt": 1790700210,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "OpenAI Revenue Growth Report Boosts Oracle Stock; DevDay On Deck",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "361e4a37f812237f7e63",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "NVDA"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD's $8.2 Billion AI Deal Takes Aim at Nvidia's Biggest Advantage",
      "headlineKo": "AMD의 82억 달러 AI 거래는 Nvidia의 가장 큰 이점을 목표로 합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04a77a7a7a24d1a7dc3bbc9a060a1271af56a158681385f9a4b07628db84b3d0",
        "publishedAt": 1790699967,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD의 82억 달러 AI 거래는 Nvidia의 가장 큰 이점을 목표로 합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "f84872758b7c010870ac",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD's $8.2 Billion AI Deal Takes Aim at Nvidia's Biggest Advantage",
      "headlineKo": "AMD의 82억 달러 AI 거래는 Nvidia의 가장 큰 이점을 목표로 합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04a77a7a7a24d1a7dc3bbc9a060a1271af56a158681385f9a4b07628db84b3d0",
        "publishedAt": 1790699967,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMD의 사업과 관련된 'AMD's $8.2 Billion AI Deal Takes Aim at Nvidia's Biggest Advantage' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "d338353b78076c1be625",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Pays $8.2 Billion in Stock for Non-Chipmaking Startup as CEO Bets on Physical AI",
      "headlineKo": "AMD는 CEO가 물리적 AI에 투자함에 따라 비칩메이킹 스타트업에 82억 달러의 주식을 지불했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f57741d3e2d3d82602b6f374616c38443e30279a7267941cf57a0724f80924f3",
        "publishedAt": 1790699936,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $8.2 Billion, $8.2 billion, $607.87, 3.61%, 183.84%, 162 times, 40 times, $13.1 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMD의 사업과 관련된 'AMD Pays $8.2 Billion in Stock for Non-Chipmaking Startup as CEO Bets on Physical AI' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "3f51c54d2443300c7ae5",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Stock Rises Although AI Revenue Faces an ROI Test",
      "headlineKo": "AI 수익이 ROI 테스트에 직면했지만 Oracle 주식은 상승합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b65a70dc4564de09844dc392085710f74c35acabd19c1798b8754c8c8108c9d9",
        "publishedAt": 1790699822,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle Stock Rises Although AI Revenue Faces an ROI Test",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "8c01a1d7f0d9621b4408",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC"
      ],
      "relatedEntities": [
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel Stock Is Up 246% Over the Past Year. Here’s What This Week’s Pullback Signals",
      "headlineKo": "인텔 주가는 지난 1년 동안 246% 상승했습니다. 이번 주 풀백 신호는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=631820b02a44d0a4e3368742f51d3adf03a96f9d44c12b901f7b18bdeada1ce8",
        "publishedAt": 1790699468,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔 주가는 지난 1년 동안 246% 상승했습니다.",
        "이번 주 풀백 신호는 다음과 같습니다 | TIKR.com 주식 리뷰 인텔 주식은 지난 1년 동안 246% 상승했습니다.",
        "이번 주의 풀백 신호는 다음과 같습니다. Rexielyn Diaz • 7분 읽기 검토자: David Hanson 최종 업데이트: 2026년 9월 29일 aukidphumsirichat 및 alengo from Getty Images Canva를 통한 서명 INTC 주식에 대한 주요 통계 지난 주 실적: -5"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 246%, 5.4%, $33 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 246%, 5.4%, $33 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "INTC",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "839850ceadb9b759b9b0",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "One Market Could Transform AMD’s Growth Story",
      "headlineKo": "하나의 시장이 AMD의 성장 스토리를 변화시킬 수 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56734aa8e503039b792685689078c1f1bdeb30f8d4cd18d8fe1df44bc37fc0c0",
        "publishedAt": 1790699413,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "하나의 시장이 AMD의 성장 스토리를 변화시킬 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,688.60 −0.12% Dow Jones 51,412.00 −0.29% Nasdaq 100 30,415.70 +0.28% Russell 2000 2,808.41 −0.56% S&P 500 7,688.60 −0.12% 다우존스 51,412.00 −0.29% 나스닥 100 30,415.70 +0.28% 러셀 2000 2,808.41 −0.",
        "𝕏 f ⧉ 마이크로칩 회로 기판과 상승하는 금융 차트를 결합한 예시적인 시각적 자료로, AMD의 예상 시장 성장과 미래 궤도의 디지털 기반을 나타냅니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $630.63., $602.27, 4.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $630.63., $602.27, 4.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "69c2b350d4dee51de8ef",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron’s Earnings Guidance May Look Weak Tomorrow. Buy MU Stock Anyway",
      "headlineKo": "마이크론의 실적 가이던스는 내일 약해 보일 수 있습니다. 어쨌든 MU 주식을 구매하세요",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7f0a6e4df43977978022ca6f196425b34b38e39655213614aa07cd4c3bea03d1",
        "publishedAt": 1790698074,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론의 실적 가이던스는 내일 약해 보일 수 있습니다. 어쨌든 MU 주식을 구매하세요"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "14f536041b0a07af25f0",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
        "GOOGL",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Digital Transformation Market Report 2026: Capitalize on the $2.47 Trillion Revenue Surge to $5.01 Trillion by 2030 as Microsoft, Google, IBM, Accenture and Oracle Accelerate AI, Cloud and Automation ",
      "headlineKo": "2026년 디지털 혁신 시장 보고서: Microsoft, Google, IBM, Accenture 및 Oracle이 AI, 클라우드 및 자동화를 가속화함에 따라 2조 4700억 달러의 수익이 2030년까지 5조 1000억 달러로 급증할 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbf169ae7e7a6e63f914b2b8ebd494377b20d76375560a69f136a10eba4dc481",
        "publishedAt": 1790697420,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Digital Transformation Market Report 2026: Capitalize on the $2.47 Trillion Revenue Surge to $5.01 Trillion by 2030 as Microsoft, Google, IBM, Accenture and Oracle Accelerate AI, Cloud and Automation' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "22c7e6df1870c0ea0ba0",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMZN",
        "INTC",
        "MSFT",
        "NVDA"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "AWS",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Next Generation Computing Market Report 2026: Capitalize on the $486 Billion Revenue Surge to $811.85 Billion by 2030 as Microsoft, AWS, NVIDIA, IBM and Intel Accelerate AI, Quantum and Edge Computing",
      "headlineKo": "2026년 차세대 컴퓨팅 시장 보고서: Microsoft, AWS, NVIDIA, IBM 및 Intel이 AI, 양자 및 엣지 컴퓨팅을 가속화함에 따라 2030년까지 4,860억 달러의 매출 급증을 8,118억 5천만 달러로 활용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91fb73dffa21ff5d80fdaf7d34a2d0b476d482388a30e3c4850260c6ce25fe8e",
        "publishedAt": 1790697360,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2026년 차세대 컴퓨팅 시장 보고서: Microsoft, AWS, NVIDIA, IBM 및 Intel이 AI, 양자 및 엣지 컴퓨팅을 가속화함에 따라 2030년까지 4,860억 달러의 매출 급증을 8,118억 5천만 달러로 활용"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "INTC",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "f505606a97ed76c3f864",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMD",
        "AMZN",
        "INTC",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "AWS",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Next Generation Computing Market Report 2026: Capitalize on the $486 Billion Revenue Surge to $811.85 Billion by 2030 as Microsoft, AWS, NVIDIA, IBM and Intel Accelerate AI, Quantum and Edge Computing",
      "headlineKo": "2026년 차세대 컴퓨팅 시장 보고서: Microsoft, AWS, NVIDIA, IBM 및 Intel이 AI, 양자 및 엣지 컴퓨팅을 가속화함에 따라 2030년까지 4,860억 달러의 매출 급증을 8,118억 5천만 달러로 활용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91fb73dffa21ff5d80fdaf7d34a2d0b476d482388a30e3c4850260c6ce25fe8e",
        "publishedAt": 1790697360,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 INTC의 사업과 관련된 'Next Generation Computing Market Report 2026: Capitalize on the $486 Billion Revenue Surge to $811.85 Billion by 2030 as Microsoft, AWS, NVIDIA, IBM and Intel Accelerate AI, Quantum and Edge Computing' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "1e633b125ee50754bf15",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM",
        "ORCL",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Jumps 5% as Fusion Claw Launch Adds 25 Agentic Applications; Salesforce Holds Flat, ServiceNow Slips",
      "headlineKo": "Oracle은 Fusion Claw 출시로 25개의 에이전트 애플리케이션을 추가하면서 5% 증가했습니다. Salesforce는 정체 상태를 유지하고 ServiceNow는 미끄러졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1a9d37fd5f3965059517e1a8a3388c8e5137fa4a88b8c696665cfdd7788a8e1",
        "publishedAt": 1790697141,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle은 Fusion Claw 출시로 25개의 에이전트 애플리케이션을 추가하면서 5% 증가했습니다. Salesforce는 평탄한 상태를 유지하고 ServiceNow는 전락합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,687.60 −0.14% Dow Jones 51,436.00 −0.25% Nasdaq 100 30,408.90 +0.26% Russell 2000 2,811.26 −0.45% S&P 500 7,687.60 −0.14% 다우존스 51,436.00 −0.25% 나스닥 100 30,408.90 +0.26% 러셀 2000 2,811.26 −0.",
        "작성자 David Moadel 2026년 9월 29일 오전 11시 52분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, $139.54,, $227.02, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, $139.54,, $227.02, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "CRM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "89cbd01c0483009c1a46",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "If You Invest $1,000 in Palantir Each Month Starting Now, This is What You’d Have in 5 Years",
      "headlineKo": "지금부터 매달 Palantir에 1,000달러를 투자하면 5년 후에는 이 금액을 갖게 됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3e365a0e8f3b7ade956b9c4bd4e901247099900dffb1e68a5cd96e31a714130a",
        "publishedAt": 1790695845,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금부터 매달 Palantir에 1,000달러를 투자하면 5년 후에는 이 금액을 얻게 됩니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,688.60 −0.12% Dow Jones 51,412.00 −0.29% Nasdaq 100 30,415.70 +0.28% Russell 2000 2,808.41 −0.56% S&P 500 7,688.60 −0.12% 다우존스 51,412.00 −0.29% 나스닥 100 30,415.70 +0.28% 러셀 2000 2,808.41 −0.",
        "다음은 간단한 월간 계획이 각 계획과 비교되는 방법입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, $60,000, $189.67. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, $60,000, $189.67. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "PLTR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "410b8352c314242bfcba",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "단기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Magnite's Growth Outlook Improves 'Considerably' After Google Court Ruling, BofA Says",
      "headlineKo": "Magnite의 성장 전망은 Google 법원 판결 이후 '상당히' 개선되었다고 BofA는 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b96c896e47d0c8718a9b3eb85fcd4337a8cba8b0c5f606abea44abb3562478ea",
        "publishedAt": 1790695442,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Magnite의 성장 전망은 Google 법원 판결 이후 '상당히' 개선되었다고 BofA는 말합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "GOOGL",
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "0a2ae68bd6673e79a63a",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "QQQ",
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Elon Musk Wants To Build 20,000 Optimus Robots A Week. There’s Just One Problem, Tesla Still Can’t Get The Hands To Work",
      "headlineKo": "Elon Musk는 일주일에 20,000대의 Optimus 로봇을 만들고 싶어합니다. 단 하나의 문제가 있습니다. Tesla는 여전히 일을 할 수 없습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2398788a41d8a489a5455a082d8eda387c19189d0b2218772b0c7efc56647212",
        "publishedAt": 1790695233,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk는 일주일에 20,000대의 Optimus 로봇을 만들고 싶어합니다.",
        "단 한 가지 문제가 있습니다. Tesla는 여전히 일을 할 수 없습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,688.60 −0.12% Dow Jones 51,412.00 −0.29% Nasdaq 100 30,415.70 +0.28% Russell 2000 2,808.41 −0.56% S&P 500 7,688.60 −0.12% 다우존스 51,412.00 −0.29% 나스닥 100 30,415.70 +0.28% 러셀 2000 2,808.41 −0."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "c4870f4af94d9b2f626c",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Morgan Stanley resets AMAT stock price target by $79",
      "headlineKo": "Morgan Stanley는 AMAT 주가 목표를 $ 79로 재설정합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=94367b86c5569ec5827b5682ea91466c7ce746aa4586023f407622a7192a16d8",
        "publishedAt": 1790694420,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley resets AMAT stock price target by $79",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMAT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "02d7937e27f8999977f5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "ARM",
        "MRVL",
        "QCOM",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Marvell",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Qualcomm",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arm Jumps 5% as Chip Selloff Unwinds; Marvell Climbs 4%, Qualcomm Inches Higher",
      "headlineKo": "칩 매도세가 풀리면서 Arm은 5% 증가합니다. Marvell은 4% 상승, Qualcomm은 인치 더 높아졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4922c0685c8237a023b42b66dc0317eb0195f1ace54e4fc26927e3490ff4dfbf",
        "publishedAt": 1790694374,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "칩 매도세가 풀리면서 Arm은 5% 증가합니다. Marvell은 4% 상승, Qualcomm은 24시간 내내 월스트리트에서 1인치 더 높아졌습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.10 +0.28% Dow Jones 51,428.60 −0.09% Nasdaq 100 30,559.90 +0.44% Russell 2000 2,815.08 −0.03% S&P 500 7,712.10 +0.28% 다우존스 51,428.60 −0.09% 나스닥 100 30,559.90 +0.44% 러셀 2000 2,815.08 −0.",
        "선도 기업과 후발 기업을 구분하는 요소는 반도체 자금이 어디에 있는지에 대한 중요한 사실을 드러냅니다... 작성자: David Moadel 게시일: 2026년 9월 29일 오전 11:06(ET) · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 4%, $298.14 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 4%, $298.14 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QCOM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "e35ec8f82f9785497c17",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC"
      ],
      "relatedEntities": [
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel Stock Fell Nearly 6% in a Day. Here’s the Foundry Deadline That Matters More",
      "headlineKo": "인텔 주식은 하루 만에 거의 6% 하락했습니다. 더 중요한 파운드리 마감일은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=542e0cae8c076c0cd85c34c6386eeb0e746300a9528b5e8ba4d5c41903c0ad38",
        "publishedAt": 1790694040,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔 주식은 하루 만에 거의 6% 하락했습니다.",
        "더 중요한 파운드리 마감일은 다음과 같습니다 | TIKR.com 주식 리뷰 인텔 주식은 하루 만에 거의 6% 하락했습니다.",
        "더 중요한 주조소 기한은 다음과 같습니다. Wiltone Asuncion • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 9월 29일 @Daniel CHETRONI(Daniel Chetroni(Canva) 경유), @Vedat OGUZCAN(Getty Images(Canva 경유)) In에 대한 주요 통계"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, $116.03, $460 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, $116.03, $460 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "INTC",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "2287fdaee8f16e55db50",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "AAPL",
        "MU",
        "QCOM",
        "WDC"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Qualcomm",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기 비용 부담 / 출시 후 수요 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm Stock Fell 7% in a Day as Its AI and Apple Rally Cooled. Here’s What Higher 2027 Sales Estimates Mean",
      "headlineKo": "퀄컴 주가는 AI와 애플 랠리가 냉각되면서 하루 만에 7% 하락했다. 2027년 매출 추정치의 의미는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=183a9c78b76bdcc51136f8f8146bd5a698aa670669df0bdc4a5c1706729274cf",
        "publishedAt": 1790692298,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 7%, $187.48, $388, $194, 107%, 20%, 7.17%, $201.97,.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 QCOM의 사업과 관련된 'Qualcomm Stock Fell 7% in a Day as Its AI and Apple Rally Cooled. Here’s What Higher 2027 Sales Estimates Mean' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "메모리 부품이 비싸져서 아이폰 가격이 오를 수 있다는 이야기입니다.",
        "애플에는 비용 상승과 가격 인상 기회가 동시에 있어 무조건 호재나 악재가 아닙니다.",
        "메모리 업체에는 가격 인상과 이익 개선 가능성이 더 직접적인 호재입니다."
      ],
      "whyItMatters": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "AAPL",
          "direction": "혼합",
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "메모리 ASP와 이익률 개선 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "WDC",
          "direction": "긍정",
          "reason": "메모리·스토리지 가격 강세 수혜 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "QCOM",
          "direction": "중립·확인",
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담",
          "basis": "analysis"
        }
      ],
      "watch": [
        "iPhone 18 실제 출고가·사전예약",
        "애플 아이폰 출하량과 제품 믹스",
        "메모리 현물·계약 가격",
        "AAPL 매출총이익률과 MU/WDC 가이던스"
      ]
    },
    {
      "id": "f95f1eadf2fd6dc2207c",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "QQQ",
        "SNDK",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SanDisk Could Have a Much Bigger Opportunity Than Investors Expect",
      "headlineKo": "SanDisk는 투자자가 기대하는 것보다 훨씬 더 큰 기회를 가질 수 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25a915c7b31086363632835c27c4da0ef6cfd5b07ec9f09e553e614f50d10730",
        "publishedAt": 1790692227,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SanDisk는 투자자가 기대하는 것보다 훨씬 더 큰 기회를 가질 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,696.80 +0.08% Dow Jones 51,578.50 +0.20% Nasdaq 100 30,411.60 −0.05% Russell 2000 2,819.68 +0.13% S&P 500 7,696.80 +0.08% 다우존스 51,578.50 +0.20% 나스닥 100 30,411.60 −0.05% 러셀 2000 2,819.68 +0.",
        "Vandita Jadeja 작성 2026년 9월 29일 오전 10시 30분(ET) 게시 · 3분 읽기 가격 목표 데스크."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,547.70., $1,777.80,, 12.94% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,547.70., $1,777.80,, 12.94% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SNDK",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "96ffa0d6e594a3b00494",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "LITE",
      "relatedTickers": [
        "LITE",
        "QQQ"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Lumentum Stock: I Bought It At $800; 2027 Could Change The Story",
      "headlineKo": "Lumentum 주식: $800에 샀습니다. 2027년은 이야기를 바꿀 수 있다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7a223c39c5dd9b033b379985885bd4a7bd985d6f3df536ea54387da38b311859",
        "publishedAt": 1790691433,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum 주식: $800에 샀습니다. 2027년은 이야기를 바꿀 수 있다(NASDAQ:LITE) | 알파 금귤 연구 투자 그룹 리더 찾기 요약 따르기 Lumentum Holdings Inc.",
        "기술 부문 랠리에 이어 또 다른 상승세를 보이고 있습니다.",
        "LITE는 레이저 수요가 급증함에 따라 성장하는 산업에서 성공할 수 있는 위치에 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $800 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LITE에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $800 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "LITE",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "d7168ee8b2f13c506bdd",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO"
      ],
      "relatedEntities": [
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom-Toppan JV opens “first” substrate plant in Singapore",
      "headlineKo": "Broadcom-Toppan JV, 싱가포르에 '최초' 기판 공장 설립",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5117758abdb846c71ccc7faf972dbae02f4b9d3b53e4075d74aab7e8d23c29ef",
        "publishedAt": 1790689313,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom-Toppan 벤처가 싱가포르에 \"최초\" 기판 공장을 설립했습니다. 사이트 메뉴로 건너뛰기 페이지 내용으로 건너뛰기 이 시설에서는 고급 반도체 제품을 위한 대형, 다층 수의 FC-BGA 기판을 만들 것입니다.",
        "사진 제공: Sundry Photography / Shutterstock.com 미국 칩 제조업체인 Broadcom과 일본 Toppan Holdings의 합작 투자사인 Advanced Substrate Technologies(AST)가 싱가포르에 기판 제조 공장을 열었습니다.",
        "이 회사는 이 시설이 국내 최초로 고급형 플립칩 볼 그리드 어레이(FC-BGA) 기판을 생산할 수 있다고 밝혔습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AVGO",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "73467221e2717d0aced6",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arista Networks vs. International Business Machines: Which Tech Stock Is a Better Buy in 2026?",
      "headlineKo": "Arista Networks vs. International Business Machines: 2026년에는 어느 기술주를 구매하는 것이 더 나을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6d52503c54b2c69cef1fa63a0f169cbe2fba6b51f2de8f1b82c4021b5355b52",
        "publishedAt": 1790688601,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "국제 비즈니스 기계: 2026년에는 어느 기술주를 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류하세요. 고성장 네트워킹 전문가와 레거시 기술 대기업 중에서 선택하는 것은 귀하의 구체적인 재무 목표에 달려 있습니다.",
        "포트폴리오를 위해 Arista Networks(ANET +1.04%) 또는 International Business Machines(IBM +0.51%)를 구매해야 합니까?"
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.04%, 0.51%, $204.97 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.04%, 0.51%, $204.97 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ANET",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "bb63b31c9863c9d0f32b",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "QQQ",
        "SNDK",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Examine Sandisk Carefully Before You Jump in on The Buyback News",
      "headlineKo": "환매 뉴스에 뛰어들기 전에 Sandisk를 주의 깊게 살펴보세요",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3cc48e861d7c3c2c1d057705a3509c28f173382f35ac060783f49339fe1436ae",
        "publishedAt": 1790687106,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "자사주 매입 뉴스에 참여하기 전에 Sandisk를 주의 깊게 살펴보세요 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,687.60 −0.14% Dow Jones 51,436.00 −0.25% Nasdaq 100 30,408.90 +0.26% Russell 2000 2,811.26 −0.45% S&P 500 7,687.60 −0.14% 다우존스 51,436.00 −0.25% 나스닥 100 30,408.90 +0.26% 러셀 2000 2,811.26 −0.",
        "헤드라인을 쫓기 전에 검토할 가치가 있는 몇 가지 사항이 있습니다... 작성자: Alex Sirois 2026년 9월 29일 게시, 오전 9:05(ET) · 3분 읽기 𝕏 f ⧉ 노트북 위에 놓인 돋보기와 주식 차트는 중요한 필요성을 시각적으로 강조합니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,712.89,, $20.248 billion, 175.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,712.89,, $20.248 billion, 175.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SNDK",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "d95500913fef736dfcdd",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
        "QQQ",
        "VST"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Constellation Energy: Premium Company At A Premium Price",
      "headlineKo": "Constellation Energy: 프리미엄 가격으로 만나는 프리미엄 기업",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=278b0ce19e307011f21688e3117b83bfc62317c00d040893606edfa8b63ec3b4",
        "publishedAt": 1790687028,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy: 프리미엄 가격의 프리미엄 기업(NASDAQ:CEG) | 알파 Ricardo Fernandez 찾기 팔로워 4.16K 팔로우 요약 Constellation Energy는 헤지 계약 및 부채에 초점을 맞춘 보수적인 전략을 갖춘 최대 IPP입니다.",
        "CEG의 수익과 현금 흐름은 2028년까지 매우 가시적이지만 에너지 가격 상승으로 인한 상승 여력은 2029년 이후까지 제한됩니다.",
        "CEG는 동종업체인 VST와 TLN이 낮은 배수로 더 높은 성장을 제공함에도 불구하고 규제 대상 유틸리티와 동등한 프리미엄 가치(25배 P/E, 15배 EV/EBITDA)로 거래됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, $274, 50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, $274, 50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "CEG",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "afba96c740b2ae70af5f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "September Has Been One of the S&P 500’s Weakest Months. What History Says About Q4",
      "headlineKo": "9월은 S&P 500의 가장 약한 달 중 하나였습니다. Q4에 대한 역사의 말",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fdcfa1be162ac5375b1ef45f1fcc079eaf82ce0e7bf624b88d3df0aff60b81cf",
        "publishedAt": 1790686844,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "9월은 S&P 500의 가장 약한 달 중 하나였습니다.",
        "역사가 말하는 Q4 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,695.60 +0.07% Dow Jones 51,558.00 +0.16% Nasdaq 100 30,431.60 +0.02% Russell 2000 2,817.88 +0.07% S&P 500 7,695.60 +0.07% 다우존스 51,558.00 +0.16% 나스닥 100 30,431.60 +0.02% 러셀 2000 2,817.88 +0."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.07%, 0.16%, 0.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.07%, 0.16%, 0.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SPY",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "b6fea683c59567484cd9",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Qualcomm",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm: Downgrading For The First Time In Over A Year",
      "headlineKo": "Qualcomm: 1년 만에 처음으로 다운그레이드",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7a77e3bf96e2d112ebd8db6a71a2018cae2b3b6518b5f98f1ba35094a11d36b2",
        "publishedAt": 1790683738,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm: 1년 만에 처음으로 다운그레이드(NASDAQ:QCOM) | 알파 찾기 Julia Ostian 팔로워 7.57K 팔로우 요약 Qualcomm Incorporated는 무도회에도 불구하고 높은 평가 및 실행 위험으로 인해 매수에서 보유로 하향 조정되었습니다.",
        "자동차와 IoT를 포함한 QCOM의 비전화 부문은 견고한 성장을 보이고 있지만 현재 휴대폰 칩 판매의 급격한 감소를 상쇄하고 있습니다.",
        "경영진은 2029년까지 EPS 18달러 이상, 비전화 매출 400억 달러를 목표로 하고 있지만 합의와 최근 결과에 따르면 이는 낙관적인 최선의 시나리오입니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $18, $40 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $18, $40 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QCOM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "92e5221b56f150e5c07d",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "HBAR Crypto 30% Rally: Nvidia AI Link Lacks Proof, What Now?",
      "headlineKo": "HBAR 암호화폐 30% 랠리: Nvidia AI Link에 증거가 부족합니다. 이제 어떻게 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbf1892ed8c26810b0ebe7bff35af3ea594b593993eb8ba28d6bb01c1cde6e50",
        "publishedAt": 1790682237,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "HBAR 암호화폐 랠리: Nvidia AI Link에는 증거가 부족합니다. 이제 어떻게 될까요?",
        "Nvidia의 개방형 에이전트 안전 플랫폼은 무엇이며 HBAR 암호화는 어디에 적합합니까?",
        "위원회 대표는 Nvidia 파트너십과 동일하지 않습니다. 이 구별이 Hedera 가격 하락을 초래했습니까?"
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $0.130, $0.117, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $0.130, $0.117, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "90bbde23a1609d7a4576",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
        "GOOGL",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Billionaire Money Managers Have Chosen Their 2 Favorite AI Stocks (and It's Not Nvidia or Alphabet)",
      "headlineKo": "억만장자 자금 관리자가 가장 좋아하는 AI 주식 2개를 선택했습니다(Nvidia나 Alphabet은 아닙니다).",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddbe6ec8f5d5edb27302fbff5d8dd3ffbc3c5c91fca475eb0eac3882d05e3d63",
        "publishedAt": 1790681161,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 1.68%, 0.34%, 0.56%, 1.41%, 0.50%, 5.36%, 37%, 21%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Billionaire Money Managers Have Chosen Their 2 Favorite AI Stocks (and It's Not Nvidia or Alphabet)' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "9e7a7b19e4d9d800e593",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Advanced Micro Devices vs. SK Hynix: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Advanced Micro Devices vs. SK Hynix: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=15dcc0f993ebdeddb3ddc46320001e507d68175aadf844728154c51ec5b36b47",
        "publishedAt": 1790680802,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SK하이닉스: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능 인프라가 지속적으로 확장됨에 따라 투자자들은 Advanced Micro Devices의 설계 능력을 저울질하고 있습니다(",
        "Advanced Micro Devices는 고성능 컴퓨팅 및 그래픽에 중점을 두고 있으며 SK Hynix는 메모리 솔루션 분야의 글로벌 리더입니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $34.6 billion, 34.3%, $4.3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $34.6 billion, 34.3%, $4.3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "b8481e801c3e280ef2d7",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Should You Buy Meta Platforms Stock Now or Wait for a Dip?",
      "headlineKo": "지금 메타 플랫폼 주식을 구매해야 할까요, 아니면 하락을 기다려야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b12934e22d6639c900d5cb5d1b0d6486865759246f8f74e39a41ddb0296ac76",
        "publishedAt": 1790680801,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금 메타 플랫폼 주식을 구매해야 할까요, 아니면 하락을 기다려야 할까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 참여 소셜 미디어 및 기술 회사인 Meta Platforms( META -4.79% )는 최근 개인 인공지능(AI) 에이전트인 Muse를 공개했습니다.",
        "메타플랫폼의 주가는 최근 급격히 상승하고 있으며 지난 한 달 동안 약 24% 상승하며 새로운 최고치를 경신했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 24%, 28%, 4.79 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 24%, 28%, 4.79 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "787d6c81d6af080aa74c",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "TSM"
      ],
      "relatedEntities": [
        {
          "name": "TSMC",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "TSMC: 2nm Is Moving Into High Gear",
      "headlineKo": "TSMC: 2nm가 하이 기어로 ​​이동하고 있습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9d98446224caa70206c6c50ea21fef2ec02622d271f85ec953376e3c51884011",
        "publishedAt": 1790680240,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSMC: 2nm가 빠른 속도로 움직이고 있습니다(NYSE:TSM) | Seeking Alpha Deep Value Investing 14.71K 팔로워 팔로우 요약 7월에 TSMC의 등급을 하향 조정했지만 주식은 여름 내내 매우 탄력적이었고 연준의 9월 이후에도 상승했습니다.",
        "EDN은 이제 2026년 말 N2 생산 능력을 월간 웨이퍼 120,000장으로 예상합니다. 이는 이전 기대치인 90,000~100,000장을 훨씬 웃도는 수치입니다.",
        "N2는 지난 분기에 웨이퍼 수익의 3%만 기여했기 때문에 이 노드가 다음 분기에 더욱 의미가 있을 여지가 있다고 봅니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, $100 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSM에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, $100 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "b0773e95073e3e8d7c96",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google Appeals EU Orders on Search Data and AI Service Access",
      "headlineKo": "Google, 검색 데이터 및 AI 서비스 액세스에 대한 EU 명령에 항소",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c580aeae71cc91f9f2edc97a2973b07f022985e6452448fe929e596b7a2493b7",
        "publishedAt": 1790677865,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google, 검색 데이터 및 AI 서비스 액세스 보드에 대한 EU 명령 항소: 인용문: 즐겨찾기 인기 모니터 무버 레벨 2 뉴스 메뉴 보드 주식 상품 외환 암호화폐 라운지 고급 검색 뉴스 모든 회사 뉴스 iHub 시장 신규",
        "시작하기 Google이 검색 데이터 및 AI 서비스 액세스에 대한 EU 명령에 항소 Fiona Craig NASDAQ:GOOG 최신 뉴스 2026년 9월 29일 오전 6시 31분 © Polites News Alphabet의 Google(NASDAQ:GOOG)은 두 개의 유럽 연합 명령에 항소했습니다.",
        "구글은 이번 조치가 개인정보 보호와 보안 보호를 약화시킬 수 있다고 주장하는 반면, 유럽연합 집행위원회는 요구사항에 사용자 개인정보 보호, 기기 무결성, 보안에 대한 보호 조치가 포함되어 있다고 밝혔습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $2 Trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $2 Trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GOOGL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "a35388b246db8384f656",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMD",
        "AMZN",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Market Chatter: Amazon-Backed Anthropic Warns IPO Investors AI Could Pose 'Existential Risks' to Humanity",
      "headlineKo": "시장 잡담: Amazon이 지원하는 Anthropic, IPO 투자자에게 AI가 인류에 '실존적 위험'을 초래할 수 있다고 경고",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f314df331b779223655535ebe3769fe85bcd6a0a0340173a33ae51e8b3709e2",
        "publishedAt": 1790677386,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Market Chatter: Amazon-Backed Anthropic Warns IPO Investors AI Could Pose 'Existential Risks' to Humanity' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "a4117deabec311576612",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Coherent: A Cautious Buy",
      "headlineKo": "코히런트: 신중한 구매",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c971573319d6aeb3c9e5162e80f65701694ea1ab87fbf53cc31d3446eba84661",
        "publishedAt": 1790675903,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "코히런트: 신중한 매수(NYSE:COHR) | Alpha One Guy 및 계산기 찾기 팔로워 165명 팔로우 요약 Coherent Corp.",
        "AI 데이터센터 인프라를 빠르게 확장하기 위한 광학 기술의 핵심 공급업체로 자리매김하고 있습니다.",
        "광 네트워킹에 대한 AI 기반 수요, 장기 계약, 강력한 단기 수익 성장이 COHR의 투자 논제를 뒷받침합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "COHR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "dd4481905d9fd0dc1ff7",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arista: The Layer Beneath The Chips",
      "headlineKo": "Arista: 칩 아래의 레이어",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=898ef2381ce2cdcc28b71afe6cb033fe6b0ce2fbfad601e6caca5d7624242cdf",
        "publishedAt": 1790675373,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista: 칩 아래의 레이어(NYSE:ANET) | 알파 찾기 Bill Gunderson 투자 그룹 리더 팔로우 요약 Arista Networks는 AI 인프라의 중추적인 역할을 하며 주요 클라우드 홍보용 GPU를 연결하는 고속 네트워킹 장비를 공급합니다.",
        "ANET의 수익은 2021년부터 급증하여 YTD 총 수익률 56.99%를 달성하고 Gunderson 등급 시스템에서 A+ 성과 등급을 받았습니다.",
        "내 평가 모델은 5년 목표 가격을 $404.76으로 추정합니다. 이는 $205.70에서 96.77%의 상승 여력을 의미하지만, 현재 60배의 수익 배수는 5년간의 급속한 성장에 의해서만 뒷받침됩니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 56.99%, $404.76,, 96.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 56.99%, $404.76,, 96.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ANET",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "914e69549026c68ad1ca",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "AMD",
        "META",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta is looking beyond consumers to turn its massive AI investment into profits.",
      "headlineKo": "Meta는 대규모 AI 투자를 수익으로 전환하기 위해 소비자를 넘어 찾고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=84825a24505ba0db6f260edb85e358fec1c41a96fbaa17e69206f1df5af80b3b",
        "publishedAt": 1790674204,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 META의 사업과 관련된 'Meta is looking beyond consumers to turn its massive AI investment into profits.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "db16c1259bff667165c7",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "NVDA",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Not Broadcom. Not AMD. Nvidia's Biggest Threat Continues to Be Something Near and Dear to Its Heart.",
      "headlineKo": "브로드컴이 아닙니다. AMD가 아닙니다. Nvidia의 가장 큰 위협은 계속해서 마음에 가깝고 소중한 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=133ab9206371966c9bbbaf2629830513c37bf335f467ac43a1a16845c2cd8f91",
        "publishedAt": 1790673961,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia의 가장 큰 위협은 계속해서 마음에 가깝고 소중한 것입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 1990년대 중후반에 인터넷은 미국 기업을 완전히 변화시켰고 기업이 새로운 판매 및 마케팅 전략에 접근할 수 있게 했습니다.",
        "수십 년 동안 투자자들은 월스트리트의 다음 \"인터넷 순간\"을 종종 초조하게 기다려 왔습니다. 인공지능(AI)의 진화가 이뤄졌다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.31%, 1.85%, 0.61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.31%, 1.85%, 0.61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AVGO",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "38806b2080f7ca0aba2f",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500: Why I'm 'Taking 5%' In Treasuries, And Trading The Rest",
      "headlineKo": "S&P 500: 국채에서 '5%'를 차지하고 나머지는 거래하는 이유",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3d83c16bbcf5ad20d4f99283dfad35ae495a554dc968389144c75f4476ae5cdc",
        "publishedAt": 1790673245,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500: 국채에서 '5%를 차지하고 나머지는 거래하는 이유(SPX) | Seeking Alpha Sungarden Investment Publishing 팔로워 11.88K 팔로우 요약 저는 헤지 채권과 단기를 결합하는 전술적 '바벨' 전략을 전개하고 있습니다.",
        "5년 만기 미국 국채 수익률이 5%를 넘으면서 채권은 이제 강력한 위험 조정 수익률을 제공하므로 전통적인 매수 후 보유 주식 투자가 매력적이지 않게 됩니다.",
        "나의 접근 방식은 국채를 통해 5% 이상의 수익률을 고정하는 동시에 증분 수익을 위해 소규모 헤지 포지션으로 변동성이 큰 자산을 전술적으로 거래하는 데 중점을 두고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SPY",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "af59b3d6108398e3ab45",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today: Dow Jones, S&P 500, Nasdaq 100 Gains as Trump Dismisses Iran Sanction Relief as 'Hoax'— Nvidia, AAR, Vail Resorts in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: 트럼프가 이란 제재 완화를 '사기'로 일축하면서 Dow Jones, S&P 500, Nasdaq 100 상승— Nvidia, AAR, Vail Resorts in Focus(업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=24275e242ce9a626427b55f60ddd117b7b87a1cb43f69dd1243c9b04200510dc",
        "publishedAt": 1790670669,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘의 주식 시장: 트럼프가 이란 제재 조치를 해제하면서 다우 존스, S&P 500 선물 전표, 나스닥 100 상승 - Benzinga SPY 765.39 QQQ 737.64 +0.15% BTC/USD 83,767.55 +0.37% DIA 513.53 −0.10% GLD 379.53 +0.43% TLT 78.63 +0.01% US 로그인 Regis",
        "화요일에는 다우존스와 S&P 500 선물이 하락세를 보이고, 나스닥 100 지수 선물은 월요일 하락세에 이어 상승하는 혼조세를 보일 것으로 예상됩니다.",
        "미국과 테헤란 간 간접 협상이 진행되면서 유가가 상승했다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.15%, 0.37%, 0.10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.15%, 0.37%, 0.10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QQQ",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "5fbdf5a0ed1839f87b54",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SWIFT’s Oracle Blockchain Deal Has a Quant (QNT) Connection — But Where Does XRP Fit?",
      "headlineKo": "SWIFT의 Oracle 블록체인 거래에는 Quant(QNT) 연결이 있지만 XRP는 어디에 적합합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ac3a6e18a91c148e08126ad24036f2f7a54c0307d4d89625c767255610056d8c",
        "publishedAt": 1790669925,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SWIFT’s Oracle Blockchain Deal Has a Quant (QNT) Connection — But Where Does XRP Fit?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "eb145d717ac5dd655bbb",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AAPL",
        "AMD",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Client Computing Global Market Report 2026: Capitalize on AI, Hybrid and Edge Disruption as Revenue Climbs $41.73B to $277.88B by 2030—Benchmark Microsoft, Apple, Dell, Lenovo and HP to Secure Share B",
      "headlineKo": "2026년 클라이언트 컴퓨팅 글로벌 시장 보고서: 매출이 2030년까지 417억 3천만 달러에서 2,778억 8천만 달러로 증가함에 따라 AI, 하이브리드 및 엣지 파괴를 활용—Microsoft, Apple, Dell, Lenovo 및 HP를 벤치마킹하여 점유율 B 확보",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11813ebad115844ef52fa88f70f3eda6381a3cd945b0688ad7b71e3738a709c7",
        "publishedAt": 1790669760,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Client Computing Global Market Report 2026: Capitalize on AI, Hybrid and Edge Disruption as Revenue Climbs $41.73B to $277.88B by 2030—Benchmark Microsoft, Apple, Dell, Lenovo and HP to Secure Share B' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "87a9f17ae310e26fb0bc",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle's $18 Billion AI Project Just Hit a Major Hurdle",
      "headlineKo": "오라클의 180억 달러 규모 AI 프로젝트가 큰 장애물에 부딪혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=245011662f4dc09a8a0f943c2ada5e52be7d15f8fcd30faf715c3810c3ac6c21",
        "publishedAt": 1790669300,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 ORCL의 사업과 관련된 'Oracle's $18 Billion AI Project Just Hit a Major Hurdle' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "457ece90b8ce6236ce59",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "QQQ"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "IQQQ: A Primer On The ProShares Nasdaq-100 High Income ETF",
      "headlineKo": "IQQQ: ProShares Nasdaq-100 고소득 ETF에 대한 입문서",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7e737d243414762546184920f50e7ddb72a64f9a67421347275f53120f585e72",
        "publishedAt": 1790668834,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "IQQQ: ProShares Nasdaq-100 고소득 ETF에 대한 입문서 (NASDAQ:IQQQ) | 알파 추구 ProShares Nasdaq-100 High Income ETF는 Nasdaq-100 주식을 보유하고 스왑을 통해 일일 콜 노출을 얻습니다.",
        "ProShares는 일일 통화가 월별 통화보다 장기 수익을 덜 포기한다고 말합니다.",
        "IQQQ는 주로 변동성에 따라 달라지는 옵션 프리미엄에서 6%의 연간 최소 지급액을 명시하고 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 18.6%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 18.6%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QQQ",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "362b2499166f18e14898",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Accenture (ACN) Lands Supply Chain And Oracle Cloud Transformation Wins",
      "headlineKo": "Accenture(ACN), 공급망 확보 및 Oracle Cloud 혁신 성공",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=037546b6199c388b880faddfca8ba15a090e4c5c5c9ec6f17f9d2f3c2555fb5a",
        "publishedAt": 1790662175,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Accenture(ACN), 공급망 확보 및 Oracle Cloud 혁신 성공"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "817417e4d5ab8b742416",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
        "MU",
        "QQQ",
        "SPY",
        "VRT"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "BlackRock Says AI Value Is Shifting Beyond Software, Flags ‘Physical AI’: Why MU, VRT And CEG Are in Focus",
      "headlineKo": "BlackRock은 AI 가치가 소프트웨어를 넘어 이동하고 있다고 말하며 '물리적 AI'를 표시: MU, VRT 및 CEG에 초점을 맞춘 이유",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=10f27c45142ba2356ae27a775a4a7ab67225334cd3b40043f8e0e41c79485544",
        "publishedAt": 1790657638,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BlackRock은 AI 가치가 소프트웨어를 넘어 이동하고 있다고 말하며 '물리적 AI'를 표시: MU, VRT 및 CEG가 초점에 있는 이유 - Benzinga SPY 765.52 QQQ 737.74 +0.16% BTC/USD 83,779.98 +0.39% DIA 513.34 −0.13% GLD 379.49 +0.42% TLT 78.64 +0.03% 미국 로그인 레지스",
        "회사는 가치가 컴퓨팅 성능, 데이터 센터 및 전기로 이동하고 있다고 지적합니다.",
        "이 논문은 Micron Technology Inc.와 같은 반도체, 데이터 센터 인프라 및 전력 부문의 병목 현상 주식에 주목합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.16%, 0.39%, 0.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.16%, 0.39%, 0.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "CEG",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "d087a2f0c4bb8e45de0e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Stock Dips Overnight After $8.2B World Labs Deal — Senior Exec Says It's 'Not The Intent' To Compete With AI Customers",
      "headlineKo": "AMD 주가는 82억 달러 규모의 World Labs 거래 이후 하룻밤 사이에 하락했습니다. 고위 임원은 AI 고객과 경쟁하려는 의도가 아니라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56f45f3324e0035e36cdf4b7a7c396068758c1cc079c73cfb9614e0411f1060d",
        "publishedAt": 1790657410,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "82억 달러 규모의 월드 랩 거래 후 밤새 AMD 주가 하락 - 수석 임원은 AI 고객과 경쟁하는 것이 '의도가 아니다'라고 말합니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.10% SPY 0.11% QQQ 0.16% 추세 KOD 2.20% LKNCY 3.84% QNT 9.06% SMMT 22.74",
        "82억 달러 규모의 World Labs 거래 후 밤새 AMD 주가 하락 - 수석 임원은 AI 고객과 경쟁하는 것이 '의도가 아니다'라고 말합니다. World Labs는 대화형 3D 환경을 생성하고 시뮬레이션할 수 있는 공간 지능 AI 모델에 중점을 두고 있습니다.",
        "중국 베이징 중관춘(Zhongguancun) 사무실 건물에 있는 AMD 로고."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $8.2, 0.10%, 0.11% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $8.2, 0.10%, 0.11% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "c3bfba58cf6cb45a523f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "MU",
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "PANW, CRWD, ZS Lead Nasdaq-100 Gains As Nvidia's AI Agent Safety Push, Security Scares Lift Cybersecurity Stocks",
      "headlineKo": "PANW, CRWD, ZS Lead Nasdaq-100은 Nvidia의 AI 에이전트 안전 추진으로 이익을 얻고 보안 공포로 인해 사이버 보안 주식이 상승합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57dbde5cbf5b804634d82a2d9c1b53131cc463cfd5b70364a9bba4cf5986bca4",
        "publishedAt": 1790653108,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "PANW, CRWD, ZS 리드 Nasdaq-100은 Nvidia의 AI 에이전트 안전 강화로 이익을 얻고 보안 위협은 사이버 보안 주식을 상승시킵니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.10% SPY 0.04% QQQ 0.15% 추세 MU 1.80% NVDA 0.61% NVTS 12.45% KOD 3.34% SMMT 27.39",
        "PANW, CRWD, ZS 리드 Nasdaq-100이 이익을 얻습니다. Nvidia의 AI 에이전트 안전 추진으로 보안 공포가 사이버 보안 주식 상승 AI 에이전트 채택과 새로운 보안 우려로 인해 사이버 방어 도구에 대한 수요가 증가하고 있습니다.",
        "팔로알토 네트웍스 로고는 2025년 11월 26일 벨기에 브뤼셀에서 열린 이 사진 일러스트레이션에서 시각적 디지털 배경이 있는 휴대폰에 표시되어 있습니다.(Photo Illustration by Jonathan Raa/NurPhoto via Getty Images) Yuvraj Malik ·"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.10%, 0.04%, 0.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.10%, 0.04%, 0.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "1261aed9b284e7534820",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What To Expect From Micron’s (MU) Q3 Earnings",
      "headlineKo": "Micron(MU)의 3분기 실적에서 기대할 수 있는 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2d37b7969a6908bde2d413fed29d500736bcf54f07f02bf97c6d82717db1ae4",
        "publishedAt": 1790652292,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What To Expect From Micron’s (MU) Q3 Earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "01ce81d9ffe329eda6ee",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom's Dividend Has Grown About 90-Fold Since 2010. Its Next Raise Usually Comes in December.",
      "headlineKo": "Broadcom의 배당금은 2010년 이후 약 90배 증가했습니다. 다음 인상은 보통 12월에 이루어집니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb610c1ad415bd9b636f9321e7f5f5499bce46ac65a80a550fa97e2dba94db21",
        "publishedAt": 1790650621,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom의 배당금은 2010년 이후 약 90배 증가했습니다.",
        "다음 인상은 보통 12월에 이루어집니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류하세요. Avago Technologies가 2010년 12월 첫 배당금을 선언했을 때 주당 7센트였습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.92%, $0.65, 90 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.92%, $0.65, 90 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AVGO",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "bb34b5f7cc1a3d356150",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Bank of America resets AMD price target after major milestone",
      "headlineKo": "Bank of America는 주요 이정표 이후 AMD 가격 목표를 재설정했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b43e186f8e36b36c87a9214662b4f09356a81bb787c34e145bbf309e8d9371d7",
        "publishedAt": 1790649180,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bank of America resets AMD price target after major milestone",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "e40b941fb47ec0d5be02",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla (TSLA) has a Growing Warranty Bill. Are Future Margins Paying for Past Sales?",
      "headlineKo": "Tesla(TSLA)의 보증 청구서가 늘어나고 있습니다. 미래의 마진은 과거 판매에 대한 비용을 지불하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7e95261c59ea3411791a01cdbeeb5fda5130dcc418c034ab2675ea9cb65f9fc5",
        "publishedAt": 1790647737,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla (TSLA) has a Growing Warranty Bill. Are Future Margins Paying for Past Sales?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "e54276c77bf5a65fa6b4",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta Hasn't Split Its Stock Since Its IPO. Would a Stock Split Get It Into the Dow?",
      "headlineKo": "Meta는 IPO 이후 주식을 분할하지 않았습니다. 주식분할로 다우지수에 편입될까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5e283575e4569ba163d9d6090cd1eeae87c8889d37358edc12199b56bfc3557d",
        "publishedAt": 1790647261,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta는 IPO 이후 주식을 분할하지 않았습니다.",
        "주식분할로 다우지수에 편입될까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 이 글을 쓰는 시점에서 Meta Platforms의 한 주( META -4.79% ) 비용은 약 $721입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 40%, $790, $721 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 40%, $790, $721 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "28a340c788570d1983e5",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "BE",
      "relatedTickers": [
        "BE",
        "MU",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "BE Stock Slumps Most In Over A Month: This Analyst Says New Fremont Facility Is An Indicator Of Strong Demand",
      "headlineKo": "BE 주식은 한 달 만에 가장 많이 하락했습니다: 이 분석가는 새로운 프리몬트 시설이 강력한 수요의 지표라고 말합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48131c0a283e3d3456dd0e21ca59c2a825ec2b3e9d6ddcdb085136e1a057ff9f",
        "publishedAt": 1790645563,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BE 주식은 한 달 만에 가장 폭락했습니다: 이 분석가는 새로운 프리몬트 시설이 강력한 수요의 지표라고 말합니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.04% SPY 0.02% QQQ 0.32% 추세 CAPR 17.11% IBRX 3.64% MSOS 5.04% MU 1.61% FICO 27.04%",
        "BE 주식은 한 달 만에 가장 폭락했습니다: 이 분석가는 새로운 프리몬트 시설이 강력한 수요의 지표라고 말합니다. RBC Capital은 월요일 Bloom Energy에 대해 '우수' 등급과 335달러 목표 가격을 반복하여 거의 28%의 상승 여력을 암시했습니다.",
        "공개된 사진 일러스트에는 블룸에너지(Bloom Energy) 회사 로고가 스마트폰 화면에 표시되어 있는 모습이 담겨 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.04%, 0.02%, 0.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "BE에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.04%, 0.02%, 0.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "BE",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "43ae4d235831d835a3d2",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMD",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Should Microsoft (MSFT) Investors Worry About A $3 Trillion Hidden AI Risk?",
      "headlineKo": "Microsoft(MSFT) 투자자는 3조 달러에 달하는 숨겨진 AI 위험을 걱정해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5bffcba2b42a6cc186c47ba28b6d1534d27ce20b2f7a5efd314da9694fe300b7",
        "publishedAt": 1790640504,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Should Microsoft (MSFT) Investors Worry About A $3 Trillion Hidden AI Risk?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "8f6e0a20ed1656796873",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "AAPL",
        "QCOM"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Qualcomm",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm: Deteriorating Handset Revenues And A Weakening Competitive Moat",
      "headlineKo": "Qualcomm: 휴대폰 수익 악화 및 경쟁 해자 약화",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=df14e666052f40ca2e1ba3829fc402e5dcabb3e1e6c20bd18d89eabb6e21dcee",
        "publishedAt": 1790639900,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm 주식: 휴대폰 수익 악화 및 경쟁 해자 약화(QCOM) | Alpha Andres Veurink를 찾고 있습니다 팔로워 2.58K 팔로어 요약 팔로우 휴대폰 매출 악화와 약세로 인해 Qualcomm에 대한 매도 등급을 다시 한번 강조합니다.",
        "QCOM은 Apple이 퇴출되면서 심각한 수익 공백에 직면해 있으며, 비핸드셋 부문의 성장은 72억~78억 달러의 손실을 완전히 상쇄할 수 없습니다.",
        "데이터 센터, 자동차 등 야심 찬 비휴대폰 대상은 더욱 강력한 경쟁업체와 실행 위험으로 인해 어려움을 겪고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $7.2, $7.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $7.2, $7.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QCOM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "f58b987533f7811cddb5",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "AMD",
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500, Dow, Nasdaq Drop Under Pressure From Elevated Yields As Investors Shrug Off Trump’s Iran Sanction Relief — NVDA, BA, AMD, NVTS, CBRS In Focus",
      "headlineKo": "투자자들이 트럼프의 이란 제재 완화를 외면하면서 S&P 500, 다우, 나스닥은 수익률 상승으로 인한 압력 하락 — NVDA, BA, AMD, NVTS, CBRS 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b057d340744e7590865880f8a83751b466d402f8a17a19fb34b5a008d6e818fb",
        "publishedAt": 1790636878,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Dow, Nasdaq Drop Under Pressure From Elevated Yields As Investors Shrug Off Trump’s Iran Sanction Relief — NVDA, BA, AMD, NVTS, CBRS In Focus",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QQQ",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "30c15b001b2e7ddfab51",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD just spent $8.2 billion to enlist the 'Godmother of AI'",
      "headlineKo": "AMD는 'AI의 대모'를 영입하기 위해 82억 달러를 지출했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=977b41b81292ac19bc47aafa8293e51be94f42cc74bc9177497fcfaf16a6e0bf",
        "publishedAt": 1790636794,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMD의 사업과 관련된 'AMD just spent $8.2 billion to enlist the 'Godmother of AI'' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "d598b779de1a497afcda",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia’s Glass Packaging Push Could Reshape AI Chips",
      "headlineKo": "Nvidia의 유리 포장 추진으로 AI 칩의 형태가 바뀔 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8a9725071a03f6f0d57eaf0d4874d92e0e61c5a50a265e4c7edb0afb01061936",
        "publishedAt": 1790635587,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia의 유리 포장 추진으로 AI 칩의 형태가 바뀔 수 있음 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,689.60 −0.11% Dow Jones 51,502.90 −0.12% Nasdaq 100 30,279.80 −0.17% Russell 2000 2,819.91 −0.15% S&P 500 7,689.60 −0.11% 다우존스 51,502.90 −0.12% 나스닥 100 30,279.80 −0.17% 러셀 2000 2,819.91 −0.",
        "이러한 칩을 함께 고정하는 재료의 변화에 ​​따라 패키지에 얼마나 많은 메모리가 들어가고 비용이 얼마나 빨리 상승하는지 결정할 수 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, $3,917, $7,373 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, $3,917, $7,373 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "b6a22c43be9f313c4172",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Forget SPY: Invesco’s Fund Gives the Smallest S&P 500 Company the Same Say as the Largest",
      "headlineKo": "SPY는 잊어라: Invesco의 펀드는 가장 작은 S&P 500 기업에게 가장 큰 기업과 동일한 권리를 부여합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=86d39c567b8cca0a401b12f9558a06de109f19c8c96417e2ce71f34053332fbf",
        "publishedAt": 1790633501,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SPY는 잊어버리세요: Invesco의 펀드는 가장 작은 S&P 500 기업에 가장 큰 기업과 동일한 권리를 부여합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,678.60 −0.25% Dow Jones 51,453.90 −0.21% Nasdaq 100 30,186.80 −0.48% Russell 2000 2,813.61 −0.37% S&P 500 7,678.60 −0.25% 다우존스 51,453.90 −0.21% 나스닥 100 30,186.80 −0.48% 러셀 2000 2,813.61 −0.",
        "상충관계는 생각보다 이상하며 최근 수익률을 보면 다음과 같은 사실이 드러납니다. 작성자: Ryne Mauck 2026년 9월 28일 오후 6시 11분(ET) 게시 · 4분 읽기 ETF 심사관 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.25%, 0.21%, 0.48% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.25%, 0.21%, 0.48% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SPY",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "0d0506cdcdcdb766dc11",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nokia (NOK) and Microsoft (MSFT) are Expanding Their AI Reach. Can the Opportunity Translate into Returns?",
      "headlineKo": "Nokia(NOK)와 Microsoft(MSFT)가 AI 범위를 확장하고 있습니다. 기회가 수익으로 전환될 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=823d2cb633c72b4aa7ab46a742fed029861318ac48ba81ea2cc883c18ca8b290",
        "publishedAt": 1790631687,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nokia (NOK) and Microsoft (MSFT) are Expanding Their AI Reach. Can the Opportunity Translate into Returns?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "9e05ea255b567b122d35",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Bolsters AI Vision With $8.2B Acquisition Of Fei-Fei Li’s World Labs, Stock Drops 4%",
      "headlineKo": "AMD, Fei-Fei Li의 World Labs를 82억 달러에 인수하여 AI 비전 강화, 주가 4% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b74938caafc6178703544aec08a9a9ff04c52e498d527e7aabd7ecfd668e9c3",
        "publishedAt": 1790631451,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD, Fei-Fei Li의 World Labs를 82억 달러에 인수하여 AI 비전 강화, 주가 하락 4% AI Agent Trending News Earnings All DIA 0.67% SPY 0.69% QQQ 0.96% Trending BA 6.91% KOD 168.44% NVDA 1.89% SMMT 16.85% NVTS 8.61% SPCX 1.69% CLF 7.88%",
        "AMD, Fei-Fei Li의 World Labs를 82억 달러에 인수하여 AI 비전 강화, 주가 4% 하락 Advanced Micro Devices Inc.",
        "AI 스타트업인 World Labs를 인수하기 위해 82억 달러 규모의 전체 주식 거래를 체결했으며, 선구적인 Dr."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $8.2, 4%, 0.67% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $8.2, 4%, 0.67% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "afb402a5cd0dec1088a9",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
        "MRVL",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Marvell",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arm vs. Marvell Technology: Which AI Chip Stock Is a Better Buy in 2026?",
      "headlineKo": "Arm 대 Marvell Technology: 2026년에는 어떤 AI 칩 주식을 구매하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c41fd07c0ce8d0cfccf39b78e7cab5eed1c04fccaeed0859318311f4372dca0",
        "publishedAt": 1790631435,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology: 2026년에는 어떤 AI 칩 주식을 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Arm Holdings( ARM -8.70% ) 및 Marvell Technology( MRVL -3.83% ) 둘 다 AI 데이터 센터 붐에 팔지만 v에서는 돈을 버는",
        "Arm은 거의 모든 스마트폰과 점점 더 늘어나는 데이터 센터에서 사용되는 에너지 효율적인 프로세서에 대한 아키텍처 청사진을 제공합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $283.33, 8.70 %, $26.99 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $283.33, 8.70 %, $26.99 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ARM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "9dfcc401a9faee321b6c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
        "GOOGL",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Investors Concerned As Google Again Playing From Behind",
      "headlineKo": "투자자들은 구글이 다시 뒤에서 노는 것에 대해 우려하고 있다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73a87e8bcb7730c8d0006e03c997b9c0f8fb884e1b181f7ee4a3ae3da7132aed",
        "publishedAt": 1790631390,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $500, $500,000, $2.9 trillion, $12 Billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Investors Concerned As Google Again Playing From Behind' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "2e8859e2269bd8b0773b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "TTEC Digital achieves the 2026-2027 Microsoft AI Business Solutions Inner Circle award for 11th consecutive year",
      "headlineKo": "TTEC Digital, 11년 연속 2026-2027 Microsoft AI 비즈니스 솔루션 Inner Circle Award 수상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ed70775cc1ca6b8fedc0eefaca31c24639fb2fe6a7cca0868106e5109e265b2",
        "publishedAt": 1790629200,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TTEC Digital achieves the 2026-2027 Microsoft AI Business Solutions Inner Circle award for 11th consecutive year",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "0d361b49754e60b4ae8d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "BE",
      "relatedTickers": [
        "AMD",
        "BE",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Can the AI Power Boom Justify Bloom Energy’s (BE) $85 Billion Valuation?",
      "headlineKo": "AI 파워 붐이 Bloom Energy(BE)의 850억 달러 가치 평가를 정당화할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=121f55c1cfd2d0c62dc038be4f3d0d6d229467e263ff799f25efc098015054cf",
        "publishedAt": 1790628358,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 BE의 사업과 관련된 'Can the AI Power Boom Justify Bloom Energy’s (BE) $85 Billion Valuation?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "4a2ae7c117d5c76600ad",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "MU",
        "NVDA",
        "PLTR",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Michael Burry Swaps MU, NBIS, NVDA, PLTR Shorts For Puts — Says AI Bubble May Burst ‘Sooner Than Later’",
      "headlineKo": "Michael Burry는 MU, NBIS, NVDA, PLTR 공매도를 풋으로 교환 — AI 버블이 '나중에보다 빨리' 터질 수 있다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30700271e6181cc735bab112c230aa0551f18a37307e5e36857e5d834888d07c",
        "publishedAt": 1790628163,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Michael Burry는 MU, NBIS, NVDA, PLTR 공매도를 풋으로 교환합니다 — AI 버블이 '나중에' 터질 수 있다고 말합니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.10% SPY 0.10% QQQ 0.16% 추세 KOD 2.13% LKNCY 3.84% QNT 8.61% SMMT 22.74% BCRX 1.40% 아캄 1",
        "Michael Burry는 MU, NBIS, NVDA, PLTR 공매도를 풋으로 교환합니다 — AI 버블이 '나중에' 터질 수 있다고 말합니다 Burry는 자신의 보통주 공매도를 여러 AI 관련 이름의 풋 옵션으로 교체했으며 새로운 연구 결과에 따라 풋옵션을 전환할 확신이 생겼다고 말했습니다.",
        "마이클 버리(Michael Burry)가 2015년 11월 23일 뉴욕시에서 열린 \"빅쇼트(The Big Short)\" 뉴욕 상영회 지그펠드 극장(Ziegfeld Theatre)에 참석했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.10%, 0.16%, 2.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.10%, 0.16%, 2.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "PLTR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "667b1f8f8ca589511a70",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "NVDA",
        "PLTR",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Michael Burry Swaps MU, NBIS, NVDA, PLTR Shorts For Puts — Says AI Bubble May Burst ‘Sooner Than Later’",
      "headlineKo": "Michael Burry는 MU, NBIS, NVDA, PLTR 공매도를 풋으로 교환 — AI 버블이 '나중에보다 빨리' 터질 수 있다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30700271e6181cc735bab112c230aa0551f18a37307e5e36857e5d834888d07c",
        "publishedAt": 1790628163,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Michael Burry는 MU, NBIS, NVDA, PLTR 공매도를 풋으로 교환합니다 — AI 버블이 '나중에' 더 빨리 터질 수 있다고 말합니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.64% SPY 0.70% QQQ 0.97% 추세 BA 6.91% KOD 168.69% SMMT 16.85% NVDA 1.89% NVTS 7.95% CLF 7.",
        "Michael Burry는 MU, NBIS, NVDA, PLTR 공매도를 풋으로 교환합니다 — AI 버블이 '나중에' 터질 수 있다고 말합니다 Burry는 자신의 보통주 공매도를 여러 AI 관련 이름의 풋 옵션으로 교체했으며 새로운 연구 결과에 따라 풋옵션을 전환할 확신이 생겼다고 말했습니다.",
        "마이클 버리(Michael Burry)가 2015년 11월 23일 뉴욕시에서 열린 \"빅쇼트(The Big Short)\" 뉴욕 상영회 지그펠드 극장(Ziegfeld Theatre)에 참석했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.64%, 0.70%, 0.97% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.64%, 0.70%, 0.97% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "1d1a4abb0ee31dc3dade",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Here’s How Much Traders Expect Micron Stock to Move After Earnings",
      "headlineKo": "트레이더들이 수익 후 Micron 주식이 움직일 것으로 예상하는 금액은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5e2d2ddcf47ae93a5c4f866dd264109752d7b68a594a93ccd4a25e1ce2ef7fa3",
        "publishedAt": 1790628082,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "트레이더들이 실적 후 마이크론 주식이 얼마나 움직일 것으로 예상하는지 주요 뉴스 미국 주식은 손실로 한 주를 시작합니다. 트럼프는 디젤 가격을 낮출 수 있지만 휘발유 비용은 여전히 ​​더 많이 들 수 있습니다. 칩 자이언트 엔비디아, 자사주 매입 계획 강화 스타벅스가 매장 폐쇄",
        "마이크론 주가는 연초 이후 거의 4배나 올랐다.",
        "Kabir Jhangiani / NurPhoto / Getty Images 닫기 주요 시사점 Micron Technology는 수요일 시장 마감 후 실적을 보고할 예정입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, $1,127,, $982. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, $1,127,, $982. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "4f6b5fa2e76bc07ea178",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta’s Muse Is BLOWING Minds…. But At What Cost?",
      "headlineKo": "메타의 뮤즈가 정말 대단해요… 하지만 어떤 비용이 들까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=946b2b2cc86f30cbf7407f5145b48969c466c28ae4631d1c3b0362ecb215c291",
        "publishedAt": 1790627916,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,698.20 −0.72% Dow Jones 51,563.40 −0.60% Nasdaq 100 30,331.10 −1.11% Russell 2000 2,824.09 −0.67% S&P 500 7,698.20 −0.72% 다우존스 51,563.40 −0.60% 나스닥 100 30,331.10 −1.11% 러셀 2000 2,824.09 −0.",
        "Meta는 소비자가 AI와 상호 작용하는 방식을 완전히 변화시키는 강력하고 새로운 개인 에이전트인 Muse를 공식 출시했습니다.",
        "AI Investor Podcast의 최근 에피소드에서 Eric Bleeker와 Austin Smith는 대규모 출시와 그 이유에 대해 논의했습니다. 작성자: Brad Faye 게시일: 2026년 9월 28일 오후 4시 38분(ET) · 1분 읽기 𝕏 f ⧉ © 24/7 Wall St."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $500, $500,000, $2.9 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $500, $500,000, $2.9 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "7d6f39e637803adc0b6f",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron (MU) Highlights Tech Earnings to Watch This Week",
      "headlineKo": "Micron (MU), 이번 주 주목해야 할 기술 수익 강조",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eda89d39c60624dba62925a32b74c22fea465136aa9e7834124af02b9216e022",
        "publishedAt": 1790627640,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron (MU) Highlights Tech Earnings to Watch This Week",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "5e64f1c1c2d69142c4df",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "NVDA",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Not Nvidia, Not AMD. Broadcom's Custom Silicon Business Is Quietly Becoming an AI Chip Powerhouse",
      "headlineKo": "엔비디아도 아니고 AMD도 아닙니다. Broadcom의 맞춤형 실리콘 사업이 조용히 AI 칩 강자로 거듭나고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2783ec0858b9b7fed4c2bf84492ec2d68e48de13b74f24ead4dbbd7d65adc4d7",
        "publishedAt": 1790627460,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom의 맞춤형 실리콘 사업이 조용히 AI 칩 강자로 거듭나고 있습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류 Nvidia( NVDA +1.68% ) 및 Advanced Micro Devices는",
        "양사가 설계한 그래픽 처리 장치(GPU)와 서버 중앙 처리 장치(CPU)는 AI 데이터센터에 배치되어 AI 모델 훈련, 추론 실행, AI 에이전트 생성 및 배포 등의 작업을 수행합니다.",
        "두 반도체 주식 모두 최근 몇 년 동안 투자자들에게 놀라운 수익을 안겨줬고, AI 인프라에 대한 막대한 투자 속에서 장기적으로 계속해서 더 높이 날아오를 수 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.92%, 0.92 %, $ 349.57 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.92%, 0.92 %, $ 349.57 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AVGO",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "41da8439d04ede29eb98",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "MRVL",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Marvell",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom vs. Marvell Technology: Which Semiconductor Stock Is a Better Buy in 2026?",
      "headlineKo": "Broadcom 대 Marvell Technology: 2026년에는 어느 반도체 주식을 매수하는 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b78a942e2c9f8288e314af078a248061aa2c8937e49521b76557761845e29fe2",
        "publishedAt": 1790627378,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology: 2026년에는 어떤 반도체 주식을 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능 혁명은 반도체 시장을 투자자들에게 고위험 무대로 바꾸어 놓았습니다.",
        "Broadcom(AVGO -0.92%)과 Marvell Technology(MRVL -3.83%) 중에서 선택하려면 AI 우위를 향한 다양한 경로를 평가해야 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.92%, 3.83%, $349.57 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.92%, 3.83%, $349.57 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AVGO",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "2fbd2ca170283e77894e",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom Stock Slips Lower as $115 Billion Forecast Raises the Conversion Bar",
      "headlineKo": "Broadcom 주식은 1,150억 달러 예측으로 전환율이 높아짐에 따라 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=acb1d609aa4809e9aea1a204f9b1f0a01c54c30f1eccebe9cd1c1752f7187026",
        "publishedAt": 1790624150,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AVGO의 사업과 관련된 'Broadcom Stock Slips Lower as $115 Billion Forecast Raises the Conversion Bar' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "c430bebbbe48e6fb56e9",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "A US Jury Orders Apple (AAPL) to Pay a Record $5.7 Billion in a Patent Case",
      "headlineKo": "미국 배심원단, Apple(AAPL)에 특허 소송에서 기록적인 57억 달러 지불 명령",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2bcd3b8223c0bd29eaa411eefb419930289a32aa8b06c279625275f5cfd54557",
        "publishedAt": 1790624023,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "A US Jury Orders Apple (AAPL) to Pay a Record $5.7 Billion in a Patent Case",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'A US Jury Orders Apple (AAPL) to Pay a Record $5.7 Billion in a Patent Case' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
        "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
      ],
      "whyItMatters": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "AAPL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "다음 실적 매출·EPS",
        "영업현금흐름과 CAPEX",
        "회사 공식 가이던스",
        "주가 반응이 하루 이상 지속되는지"
      ]
    },
    {
      "id": "176a6a41c003acdfd0e9",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Stock Gets Stunning Price Target Hike Just Before Earnings",
      "headlineKo": "마이크론 주식은 수익 직전에 놀라운 가격 목표 인상을 얻습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e422d10b1b193e48b966238600165aa7163bb192bff9c98ad5469a16bb5aedf4",
        "publishedAt": 1790622898,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 주식은 수익 직전에 놀라운 가격 목표 인상을 얻습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "f2c0a3f058df7ce3b7bb",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "단기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google’s €403 Million Privacy Fine Keeps Alphabet’s EU Regulatory Risk in Focus",
      "headlineKo": "Google의 4억 3백만 유로에 달하는 개인정보 보호 벌금으로 Alphabet의 EU 규제 위험에 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed22390073d186221c5181e4e63e111884fff40d002cd79c454f30f7c1e246f1",
        "publishedAt": 1790622039,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google의 4억 3백만 유로에 달하는 개인정보 보호 벌금으로 Alphabet의 EU 규제 위험에 집중"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "GOOGL",
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7e835e242f9bccbee079",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Jim Cramer on Nvidia's $150 billion buyback expansion",
      "headlineKo": "Nvidia의 1,500억 달러 자사주 매입 확장에 대한 Jim Cramer의 의견",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9dac7aa046e17a5052d3e22bd1f7b57733fd6259ca024a9835084ac1aebec675",
        "publishedAt": 1790617607,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia의 1,500억 달러 규모의 자사주 매입 확장에 대한 Jim Cramer Tech & Innovation Cramer는 Nvidia의 새로운 자사주 매입 계획이 '매우 중요하다'고 말했습니다. CNBC의 Jim Cramer는 칩 제조업체의 새로운 자사주 매입 계획이 만약 종료된다면 Nvidia 주식의 궤적을 바꿀 수 있다고 말했습니다.",
        "Cramer는 CNBC에서 \"이것은 매우 중요한 자사주 매입입니다.\"라고 말했습니다.",
        "\"그들이 활발하게 활동하고 매일 거기에 있다면 주식의 궤적이 바뀔 것이라고 생각합니다.\" Nvidia 이사회는 월요일에 1,500억 달러의 추가 자사주 매입을 승인하여 남은 승인 금액을 2,350억 달러로 늘렸습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $150 billion, $235 billion, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $150 billion, $235 billion, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "2dde9ce490376f2fc740",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Jensen Huang Just Gave Investors 150 Billion Reasons to Buy Nvidia Stock",
      "headlineKo": "Jensen Huang은 투자자들에게 Nvidia 주식을 구매해야 할 1,500억 가지 이유를 제공했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d4060800fb7216f213e192e42e652a3b94b89ff7ca9df04ccc94f94144ff2e8",
        "publishedAt": 1790616900,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang은 투자자들에게 Nvidia 주식을 구매해야 하는 1,500억 가지 이유를 제시했습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 4년 전 Nvidia( NVDA +2.05% )는 w의 대명사가 되었습니다.",
        "당시 회사의 그래픽 처리 장치(GPU)는 대기업이 갑자기 필요로 하는 생성 모델을 훈련하고 실행할 수 있는 널리 사용되는 유일한 하드웨어였습니다.",
        "그 이후로 Nvidia는 칩, 소프트웨어, 네트워킹, 심지어 모델 자체까지 AI 인프라 스택의 중심에 머물 수 있었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $150 billion, $39 billion, $235 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $150 billion, $39 billion, $235 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "c4a03476521ce24a8790",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce Is Cheap. ServiceNow Is Growing Faster. Here’s the Stock I’d Buy.",
      "headlineKo": "세일즈포스는 저렴합니다. ServiceNow는 더 빠르게 성장하고 있습니다. 내가 사고 싶은 주식은 여기 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb1bee487322d2ba0215cd18d2ea10b6b27b1022d1b4d05c3caccafc9cfefdb0",
        "publishedAt": 1790616624,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,707.60 +0.12% Dow Jones 51,583.90 +0.04% Nasdaq 100 30,427.20 +0.32% Russell 2000 2,827.96 +0.14% S&P 500 7,707.60 +0.12% 다우존스 51,583.90 +0.04% 나스닥 100 30,427.20 +0.32% 러셀 2000 2,827.96 +0.",
        "두 거대 AI 소프트웨어 기업은 모두 올 여름 강력한 에이전트 예약을 보고했지만 평가 스펙트럼의 정반대 위치에 있습니다.",
        "더 저렴한 제품을 구매하려는 주장은 보이는 것보다 강력하며 그에 반대하는 주장도 동일합니다… 작성자 Vandita Jadeja 2026년 9월 28일 오후 1시 30분(ET) 게시 · 3분 읽기 𝕏 f ⧉ 이 이미지는 시장 동향과 기업 성과, r을 시각화합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 24%, 10.8%, $3.877 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 24%, 10.8%, $3.877 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "CRM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "8831b15d3e7159ee7263",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The $1 Trillion Question Facing Palantir Stock",
      "headlineKo": "Palantir 주식이 직면한 1조 달러 규모의 문제",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ece174597658893ae1a4dbf55514e4224a1d8e914422d6661973920e69fde48",
        "publishedAt": 1790613052,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 주식이 직면한 1조 달러 규모의 문제 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,698.20 +0.00% Dow Jones 51,550.90 −0.02% Nasdaq 100 30,345.80 +0.05% Russell 2000 2,823.21 −0.03% S&P 500 7,698.20 +0.00% 다우존스 51,550.90 −0.02% 나스닥 100 30,345.80 +0.05% 러셀 2000 2,823.21 −0.",
        "그 격차가 줄어들었는지 여부에 대해 수학이 실제로 말하는 내용은 다음과 같습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1 Trillion, $440.66, $1 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1 Trillion, $440.66, $1 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "PLTR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "4fd948fb9353a328845d",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Did Not Win the FAA Contract for SMART. Time to Buy the Stock Anyway?",
      "headlineKo": "Palantir는 SMART에 대한 FAA 계약을 체결하지 못했습니다. 어쨌든 주식을 살 시간인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c0e16a7e2236ea5bedd337cd3cda61d4a74bf319e28d5c93e33234d9d81d9f37",
        "publishedAt": 1790611980,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir는 SMART에 대한 FAA 계약을 체결하지 못했습니다. 어쨌든 주식을 살 시간인가?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "PLTR",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "0b44214ea9cd3bfef913",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "FIX",
      "relatedTickers": [
        "FIX"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Hunt Electric Could Be a Strong Deal for Comfort Systems",
      "headlineKo": "Hunt Electric이 컴포트 시스템에 대한 강력한 거래가 될 수 있는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6488f0121a776474bd93c42f70a8c0b1561b48a28e4d0f63c3a23372cc80b7fe",
        "publishedAt": 1790611800,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Hunt Electric Could Be a Strong Deal for Comfort Systems",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "FIX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "FIX에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "FIX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "FIX",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "f27cf163f2e546ecc19d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron 'super bull' reiterates $2,000 target ahead of earnings",
      "headlineKo": "마이크론 '슈퍼불', 실적에 앞서 2,000달러 목표 재확인",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=399e27040a6eb3adfa0736448ab7b72ecb6f7ed172b42d4c730f1ba380a64293",
        "publishedAt": 1790610996,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron 'super bull' reiterates $2,000 target ahead of earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "6980c5957876f0f27997",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "ARM",
        "MRVL",
        "QCOM",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Marvell",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Qualcomm",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arm Sinks 9% as Chip Selloff Deepens; Qualcomm Drops 6%, Marvell Slides 5%",
      "headlineKo": "Arm은 칩 매도세가 심화되면서 9% 하락했습니다. 퀄컴 하락 6%, 마벨 하락 5%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c84c0a9086b4db88b83c7b9f423e233038d7c8e3ecb42583415a66ea4f53f3d4",
        "publishedAt": 1790610689,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm은 칩 매도세가 심화되면서 9% 하락했습니다. Qualcomm 하락 6%, Marvell 하락 5% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,698.20 +0.00% Dow Jones 51,550.90 −0.02% Nasdaq 100 30,345.80 +0.05% Russell 2000 2,823.21 −0.03% S&P 500 7,698.20 +0.00% 다우존스 51,550.90 −0.02% 나스닥 100 30,345.80 +0.05% 러셀 2000 2,823.21 −0.",
        "Arm의 주가와 직접적으로 연결된 250억 달러의 대출로 SoftBank는 매 틱마다 지분을 갖게 됩니다. 작성자: David Moadel 게시일: 2026년 9월 28일 오전 11시 51분(ET) · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "고객의 공급처 다변화는 공급 안정성에는 긍정적이지만 기존 공급사에는 점유율·가격 협상력 위험이 될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 9%, 6%, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 고객 공급망 다변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "고객이 한 회사에만 의존하지 않으려는 움직임입니다. 기존 공급사의 매출이 바로 줄었다는 뜻은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "고객의 공급처 다변화는 공급 안정성에는 긍정적이지만 기존 공급사에는 점유율·가격 협상력 위험이 될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 9%, 6%, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QCOM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공급사별 물량 배분",
        "기존 계약 유지 여부",
        "다음 실적 고객 집중도"
      ]
    },
    {
      "id": "00c4f6e9a375f8482ea3",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "If You Invest $10,000 in Palantir Today, Here’s What It Could Be Worth by 2030",
      "headlineKo": "지금 Palantir에 10,000달러를 투자한다면 2030년까지의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d174b4c65907a410135c14c779edcc84098893809ff5c9fc0898db491760661",
        "publishedAt": 1790609417,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금 Palantir에 10,000달러를 투자한다면 2030년까지의 가치는 다음과 같습니다. - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.50 −0.53% Dow Jones 51,645.00 −0.44% Nasdaq 100 30,402.20 −0.88% Russell 2000 2,828.19 −0.53% S&P 500 7,712.50 −0.53% 다우존스 51,645.00 −0.44% 나스닥 100 30,402.20 −0.88% 러셀 2000 2,828.19 −0.",
        "5년 동안 주식을 보유하면 현실적으로 $10,000 포지션에 도달할 수 있는 효과는 다음과 같습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $189.67, 92.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $189.67, 92.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "PLTR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "7a9c3e7342e212083bd7",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SpaceX vs. Tesla: Which Elon Musk Stock Is the Better Buy for the Next 5 Years?",
      "headlineKo": "SpaceX 대 Tesla: 향후 5년간 어떤 Elon Musk 주식을 구매하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5768e7377628f5a563dd28a7c1194e44ead46e91850b8bb75d00da90f144c94",
        "publishedAt": 1790609100,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla: 향후 5년 동안 어떤 Elon Musk 주식을 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Tesla( TSLA -3.41% )는 2010년에 상장되었으며 그 이후로 더 넓은 주식을 압도했습니다.",
        "전체 기간 동안 회사를 이끌었던 Elon Musk는 최근 그의 회사 중 또 다른 회사인 Space Exploration Technologies(SPCX -1.32%)를 공개했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.32%, 0.75%, 0.67% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.32%, 0.75%, 0.67% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "bde5f6a542d07e7a52b7",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "MongoDB CEO Chirantan Desai Steps Down to Join Meta as Chief Enterprise Platform Officer",
      "headlineKo": "MongoDB CEO Chirantan Desai, 최고 엔터프라이즈 플랫폼 책임자로 Meta에 합류",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6cb3a4485f2fd03c4087595cbe9d48f302add9b3571db1d2125b11a4963d3236",
        "publishedAt": 1790608785,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MongoDB CEO Chirantan Desai Steps Down to Join Meta as Chief Enterprise Platform Officer",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "a552c1ea259283e372cd",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "MRVL"
      ],
      "relatedEntities": [
        {
          "name": "Marvell",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell Has Revenue Acceleration Potential in 2027, 2028, RBC Says",
      "headlineKo": "Marvell은 2027년, 2028년에 수익을 가속화할 가능성이 있다고 RBC가 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2b0edeff4eb7cbfedb76f7015fdf214d6d89b191911d676ef22ed9e2f2e1ead1",
        "publishedAt": 1790608759,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Has Revenue Acceleration Potential in 2027, 2028, RBC Says",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MRVL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "e98fa7663941a67f486a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "AMD",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Burford Capital shares gain on $5.7B Apple patent verdict",
      "headlineKo": "Burford Capital은 57억 달러 규모의 Apple 특허 판결로 이익을 얻었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=15aa19cb77725497199b1da05da8e77599d093f457b35c16ed0bd0710e0f143b",
        "publishedAt": 1790608576,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Burford Capital shares gain on $5.7B Apple patent verdict' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "9f64aac96a80c0abc214",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron's 279% Rally Faces an 8.6% Earnings Test",
      "headlineKo": "마이크론 279% 랠리, 8.6% 수익 테스트 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a2c471bd82fee9ae22d3adfb2bf04b1a550fc154cde0cebe26208649e581cc0",
        "publishedAt": 1790608309,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron's 279% Rally Faces an 8.6% Earnings Test",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "96c6870ec90f58e79ec9",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Michael Burry: Oracle Cannibalizing Cash Flow “Much Like WorldCom Did”",
      "headlineKo": "Michael Burry: Oracle이 현금 흐름을 잠식하고 있습니다. \"WorldCom이 그랬던 것과 매우 흡사합니다\"",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=19e3cf8a50dc0c0c6ecefedc72fbadece97a491f9fb08e1c2bfbcac6a265ddaf",
        "publishedAt": 1790607926,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Michael Burry: Oracle이 \"WorldCom이 그랬던 것처럼\" 현금 흐름을 잠식하고 | TIKR.com 기본 분석 Michael Burry: Oracle이 현금 흐름을 잠식함 \"WorldCom이 그랬던 것과 매우 유사\" Michael Douglass • 4분 읽기 검토자: David Ha",
        "신용 시장은 오라클을 실제 위험으로 평가하기 시작했습니다. 채권 수익률은 8% 이상입니다.",
        "정크 등급으로 강등되면 약 1,200억 달러 규모의 Oracle 채권이 투자 등급 지수에서 제외될 수 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, $120 billion, 90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, $120 billion, 90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "a3148c7e2a9c6acb044f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Prediction: AMD Will Join the $3 Trillion Club in 2030. Here’s the Math.",
      "headlineKo": "예측: AMD는 2030년에 3조 달러 클럽에 합류할 것입니다. 계산은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed6b3122421347eb54a4ba69b6dbcfda6b1168f35367003e8d3b5c49d4c23a88",
        "publishedAt": 1790607841,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: AMD는 2030년에 3조 달러 클럽에 합류할 것입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Advanced Micro Devices( AMD -3.88% )는 9월 1일 처음으로 시가총액 1조 달러를 넘었습니다.",
        "21일, 칩디자이너는 미국 내 14번째 회사가 됐다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $3 Trillion, $100 billion, $3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $3 Trillion, $100 billion, $3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "a98c57babacea29b03ac",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SPY",
        "WDC"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SK Hynix Drops 6% as Bloomberg Puts $100B Value on Potential Solidigm IPO; Micron and Western Digital Fall 4%",
      "headlineKo": "Bloomberg가 잠재적 Solidigm IPO에 1000억 달러 가치를 부여함에 따라 SK 하이닉스는 6% 하락합니다. 마이크론과 웨스턴디지털은 4% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1715eb35bdfa249e25ee317a97245090cdc5d298d59d43578d1b2af3edac8349",
        "publishedAt": 1790607821,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bloomberg가 잠재적 Solidigm IPO에 1000억 달러 가치를 부여함에 따라 SK 하이닉스는 6% 하락합니다. Micron 및 Western Digital 하락 4% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,698.20 +0.00% Dow Jones 51,550.90 −0.02% Nasdaq 100 30,345.80 +0.05% Russell 2000 2,823.21 −0.03% S&P 500 7,698.20 +0.00% 다우존스 51,550.90 −0.02% 나스닥 100 30,345.80 +0.05% 러셀 2000 2,823.21 −0.",
        "작성자: David Moadel 2026년 9월 28일 오전 11시 3분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "고객의 공급처 다변화는 공급 안정성에는 긍정적이지만 기존 공급사에는 점유율·가격 협상력 위험이 될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, $100, 4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 고객 공급망 다변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "고객이 한 회사에만 의존하지 않으려는 움직임입니다. 기존 공급사의 매출이 바로 줄었다는 뜻은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "고객의 공급처 다변화는 공급 안정성에는 긍정적이지만 기존 공급사에는 점유율·가격 협상력 위험이 될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, $100, 4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "WDC",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공급사별 물량 배분",
        "기존 계약 유지 여부",
        "다음 실적 고객 집중도"
      ]
    },
    {
      "id": "df230ff4ce0f2e19c943",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Claude and Gemini hacks bring agentic AI risks into underwriting",
      "headlineKo": "Claude와 Gemini 해킹으로 보험 인수에 AI 위험 초래",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8287e4bc0b4b4d96239f00dfe89234e8f10770f0ad35ae1ea228b55849db019",
        "publishedAt": 1790607646,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Claude와 Gemini 해킹으로 보험 인수에 AI 위험이 발생했습니다. GlobalData 조사에 따르면 Life Insurance International Businesses에서는 AI 손실이 보장된다고 믿고 있습니다.",
        "한편 자율 AI 공격은 새로운 책임 문제를 제기하여 보호 공백을 생성하며, 보험사는 가격 위험에 대한 과거 데이터가 부족하다는 점에 직면해야 합니다.",
        "GlobalData의 2025 SME 설문 조사에 따르면 글로벌 기업의 거의 절반(46.7%)이 기존 보험 정책이 AI 관련 사고로 인한 손실을 보상할 것이라고 믿고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 46.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 46.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GOOGL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "b176ec0c38924e67a9a4",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "TSLA"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "high",
        "score": 100,
        "kind": "official",
        "reason": "SEC 제출 원문"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "내용 확인 필요",
      "verificationStatus": "confirmed",
      "headline": "TSLA SEC Form 8-K filed",
      "headlineKo": "TSLA SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026063820/tsla-20260929.htm",
        "publishedAt": 1790607600.0,
        "collectedAt": 1790779763.0413084
      },
      "confirmedFacts": [
        "TSLA가 2026-09-29에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 중요 계약 체결·변경 · 중요 계약 종료 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 계약·수주"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "8-K·6-K는 계약·임원·재무·실적 등 여러 내용을 담을 수 있어 원문의 Item과 첨부자료 확인이 필요합니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다."
      ],
      "unverified": [
        "공시의 세부 금액·조건·사업 영향은 원문 항목과 첨부자료를 추가 검증해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 중요한 내용을 SEC에 공식 제출했다는 뜻입니다. 아직 양식의 세부 항목을 읽기 전이므로 호재·악재로 단정하지 않습니다."
      ],
      "whyItMatters": [
        "8-K·6-K는 계약·임원·재무·실적 등 여러 내용을 담을 수 있어 원문의 Item과 첨부자료 확인이 필요합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "중립·원문 확인",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "basis": "official_filing"
        }
      ],
      "watch": [
        "공시 Item 번호와 첨부자료",
        "계약·재무·임원 변화의 실제 내용",
        "다음 실적과 현금흐름 영향"
      ],
      "earningsEvidence": null
    },
    {
      "id": "e6840b097dc0e30cb700",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "MRVL",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Marvell",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell’s AI Opportunity Could Expand To $625B By 2030, Says Cantor — Sees Up To 45% Revenue CAGR",
      "headlineKo": "Marvell의 AI 기회는 2030년까지 6,250억 달러로 확장될 수 있다고 Cantor는 말합니다. 매출 CAGR은 최대 45%입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7954b556b6a4face4c67a688d77c4a5c8fb6fd131c5009cb928e3b215dedfcfd",
        "publishedAt": 1790607269,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell의 AI 기회는 2030년까지 6,250억 달러로 확장될 수 있다고 Cantor는 말합니다. CAGR 최대 45%의 수익을 볼 수 있습니다. AI 에이전트 동향 뉴스 수익 모든 DIA 0.42% SPY 0.54% QQQ 0.86% 추세 KOD 179.75% HBAR 38.43% MDB 17.14% QNT 35.20% SPY 0.54% AMPX 1.59%",
        "Cantor는 Marvell의 AI 기회가 2030년까지 6,250억 달러로 확장될 수 있다고 말합니다. CAGR 최대 45%의 매출을 기록할 것입니다. Cantor Fitzgerald는 칩 제조업체의 10월 발표에 앞서 Marvell 가격 목표를 330달러로 높였습니다.",
        "6일 투자자의 날에는 회사가 AI 컴퓨팅과 네트워킹 전반에 걸쳐 훨씬 더 큰 기회를 제시할 것으로 예상됩니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $625, 45%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $625, 45%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MRVL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "a8dc9b05efe43b0a8fde",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arista’s CFO Says the AI Cycle Is 2.5 to 3 Years In. Here’s Where the Stock Could Go",
      "headlineKo": "Arista의 CFO는 AI 주기가 2.5~3년이라고 말합니다. 주식이 갈 수 있는 곳은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=440270c5f0d10cc9a90c4357293c4324787b5c0e794a6608dd7d99440de652c4",
        "publishedAt": 1790606859,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista의 CFO는 AI 주기가 2.5~3년이라고 말합니다.",
        "주식이 갈 수 있는 곳은 다음과 같습니다 | TIKR.com 주식 리뷰 Arista의 CFO는 AI 주기가 2.5~3년이라고 말합니다.",
        "주식이 갈 수 있는 곳은 다음과 같습니다. Wiltone Asuncion • 6분 읽기 검토자: David Hanson 마지막 업데이트 2026년 9월 28일 Canva를 통한 Tim Girard의 이미지 @Tim Girard, Canva를 통한 Getty Images의 @Nikada 서명 Arista Network의 주요 통계"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $206.55, $428, $242 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $206.55, $428, $242 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ANET",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "5388d223f1f34ab950e7",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO"
      ],
      "relatedEntities": [
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "China Went From 32% to 17% of Broadcom’s Sales Since 2023. Here’s What Beijing’s Switch Review Actually Puts at Risk",
      "headlineKo": "중국은 2023년 이후 Broadcom 매출의 32%에서 17%로 증가했습니다. 베이징의 스위치 리뷰가 실제로 위험에 빠뜨린 것은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=447c4bf28a187df97b6aeedb3281bb7c9fd6ed0416ab5665171a913affa05b5f",
        "publishedAt": 1790606685,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "중국은 2023년 이후 Broadcom 매출의 32%에서 17%로 증가했습니다.",
        "베이징의 스위치 리뷰가 실제로 위험에 빠뜨리는 것은 다음과 같습니다 | TIKR.com 주식 리뷰 중국은 2023년 이후 Broadcom 매출의 32%에서 17%로 증가했습니다.",
        "베이징의 스위치 리뷰가 실제로 위험에 빠뜨리는 내용은 다음과 같습니다. Wiltone Asuncion • 6분 읽기 검토자: David Hanson 마지막 업데이트 2026년 9월 28일 Canva를 통해 @RyanKing999, Canva를 통해 Getty Images에서 @Jack Soldano Broadcom Stock C에 대한 주요 통계"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 32%, 17%, $352.81 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 32%, 17%, $352.81 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AVGO",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "bb2677c9783e279722b8",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
        "NVDA",
        "QQQ",
        "SPY",
        "TSM"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel Drops 4% on Oil-Driven Rate Fears, NVIDIA Rises 3% on Record $150B Buyback; Taiwan Semiconductor Slips",
      "headlineKo": "Intel은 석유로 인한 환율 우려로 4% 하락하고 NVIDIA는 기록적인 1,500억 달러 자사주 매입으로 3% 상승합니다. 대만 반도체 전표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c137c0bee7bc7b4e2bab604d0f52aebd7876e01950616f18bd02213909f5b5bc",
        "publishedAt": 1790606000,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel은 석유로 인한 환율 우려로 4% 하락하고 NVIDIA는 기록적인 1,500억 달러 자사주 매입으로 3% 상승합니다. 대만 반도체 전표 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,715.00 −0.50% Dow Jones 51,655.00 −0.43% Nasdaq 100 30,405.20 −0.87% Russell 2000 2,829.89 −0.47% S&P 500 7,715.00 −0.50% 다우존스 51,655.00 −0.43% 나스닥 100 30,405.20 −0.87% 러셀 2000 2,829.89 −0.",
        "작성자 David Moadel 2026년 9월 28일 오전 10시 33분(ET) 게시 · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 3%, $150 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 3%, $150 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "INTC",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "71a1c8813a4db1c1c162",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The Market Is Souring On Alphabet: I’m Buying What They’re Missing",
      "headlineKo": "시장은 알파벳에 시달려가고 있다: 나는 그들이 잃어버린 것을 사고 있다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dfaab022bf2ca2afcd1423342d8a5f87b30102d351691c848ed07ecf9f9869f4",
        "publishedAt": 1790605896,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "시장은 알파벳에 시달린다: 나는 그들이 잃어버린 것을 사겠다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.00 −0.54% Dow Jones 51,662.00 −0.41% Nasdaq 100 30,382.70 −0.94% Russell 2000 2,828.49 −0.52% S&P 500 7,712.00 −0.54% 다우존스 51,662.00 −0.41% 나스닥 100 30,382.70 −0.94% 러셀 2000 2,828.49 −0.",
        "작성자: Alex Sirois 2026년 9월 28일 게시, 오전 10:31(ET) · 3분 분량 𝕏 f ⧉ 시장 회의론에도 불구하고 이 시각적 요소는 강력한 클라우드 및 기술 투자에 힘입어 Alphabet(GOOGL)이 지속적으로 상승 궤도에 오를 가능성을 나타냅니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $175 billion, $185 billion, 24.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $175 billion, $185 billion, 24.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GOOGL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "c2acf3671d80e75468b5",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Prediction: Google’s Next Chapter Could Be Worth Trillions More",
      "headlineKo": "예측: Google의 다음 장은 수조 달러 이상의 가치가 있을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e238da41478be1519d9357abdec57a19dc57a947f910d62efbbee92b758fe387",
        "publishedAt": 1790605836,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: Google의 다음 장은 수조 달러 이상의 가치가 있을 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.00 −0.54% Dow Jones 51,662.00 −0.41% Nasdaq 100 30,382.70 −0.94% Russell 2000 2,828.49 −0.52% S&P 500 7,712.00 −0.54% 다우존스 51,662.00 −0.41% 나스닥 100 30,382.70 −0.94% 러셀 2000 2,828.49 −0.",
        "그 격차에 있는 어떤 것은 거대주 기술의 가장 큰 할인을 나타내거나, 전에 이해할 가치가 있는 경고 신호를 나타냅니다. 작성자: Vandita Jadeja 2026년 9월 28일 오전 10시 30분(ET) 게시 · 가격 목표 데스크 3분 읽기."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 82%, $551.05, 64.63% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 82%, $551.05, 64.63% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GOOGL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "5dbba31805f0f0bc453d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Can This Number Push Tesla Stock Higher?",
      "headlineKo": "이 숫자가 Tesla 주식을 더 높일 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d21c53d5fe410a0168c59b2a32f40a55b38d21ec2d0c6730eb9f92e5ca3a2c1",
        "publishedAt": 1790605660,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 숫자가 Tesla 주식을 더 높일 수 있습니까?",
        "| Trefis 이 숫자가 Tesla 주식을 더 높일 수 있습니까?",
        "2026년 9월 28일 · 작성자: Trefis Team TSLA YTD -17.3% SPY YTD +13.7% XLY YTD -7.0% TSLA 분석 → 거의 150만 명의 Tesla(TSLA) 고객이 회사의 운전자 지원 소프트웨어인 완전 자율 주행(FSD) 비용을 지불했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 17.3%, 13.7%, 7.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 17.3%, 13.7%, 7.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "2f81646004e88ec5966e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Could $1,000 in Apple Become $2,000 by 2031?",
      "headlineKo": "2031년까지 Apple의 1,000달러가 2,000달러가 될 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4d5bc2f953f2128be59f3643cc73a7458590248d14fc73b20d92b85336d3c7dd",
        "publishedAt": 1790604049,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2031년까지 Apple의 1,000달러가 2,000달러가 될 수 있을까요?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.50 −0.53% Dow Jones 51,645.00 −0.44% Nasdaq 100 30,402.20 −0.88% Russell 2000 2,828.19 −0.53% S&P 500 7,712.50 −0.53% 다우존스 51,645.00 −0.44% 나스닥 100 30,402.20 −0.88% 러셀 2000 2,828.19 −0.",
        "지난 1년 동안 애플 주가는 33% 이상 급등했지만, 진짜 질문은 그 모멘텀이 지금으로부터 6년 후에는 적당한 지분을 축하할 가치가 있는 것으로 바꿀 만큼 충분히 발휘되는지 여부입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, $2,000, 33% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, $2,000, 33% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AAPL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "dd1e9e16c090d8e891bf",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "META",
        "ORCL",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle, Meta Financing Methods Mirror Enron Era, Steve Eisman Says",
      "headlineKo": "오라클, 메타 파이낸싱 방법은 엔론 시대를 반영한다고 Steve Eisman은 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b91fdf41540755b0f9795f1aa1e6f1324e00718f8dab2078f62be73b41d73561",
        "publishedAt": 1790603915,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle, 메타 파이낸싱 방법 Enron Era, Steve Eisman의 말 - Oracle (NYSE:ORCL) - Benzinga SPY 768.17 −0.41% QQQ 738.66 −0.78% BTC/USD 83,407.00 −1.23% DIA 515.16 −0.45% GLD 381.30 −3.08% TLT 78.83 −0.62% US 로그인 회원가입 My Acco",
        "Eisman은 금요일 The Real Eisman Playbook에서 “부외 기술이 AI의 새로운 세계에서 복수로 돌아왔습니다.”라고 말했습니다.",
        "“우리 이 일을 다시 할 건가요?” Eisman이 걱정하는 이유 Eisman은 자신의 우려 사항이 제품을 구매하는 회사에 투자하는 칩 제조업체에 대한 순환 자금 조달 논쟁을 넘어서는 것이라고 말했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.41%, 0.78%, 1.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.41%, 0.78%, 1.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "4d308aaf0bfc74beff8c",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Snowflake Slides 4% on Proposed $3.5B Convertible Offering; Oracle Falls 3%, Datadog Drops 4%",
      "headlineKo": "Snowflake는 제안된 $35억 전환사채에서 4% 하락; Oracle 하락 3%, Datadog 하락 4%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3a1e201d37199e73a708618cbbda3fda1776335e8c1a2b08f1094a9b78068130",
        "publishedAt": 1790603151,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Snowflake는 제안된 $35억 전환사채에서 4% 하락; Oracle 하락 3%, Datadog 하락 4%"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "47c6a97397cde014297f",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC"
      ],
      "relatedEntities": [
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SKHY Likely to Gain From a Potential Intel Partnership: Worth a Buy?",
      "headlineKo": "SKHY는 잠재적인 인텔 파트너십을 통해 이익을 얻을 가능성이 높습니다: 구매할 가치가 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8edece9a2392b198f2b5e891047de03b6cd7d2e9cae3c610edd9ed520a41ea47",
        "publishedAt": 1790602860,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SKHY는 잠재적인 인텔 파트너십을 통해 이익을 얻을 가능성이 높습니다: 구매할 가치가 있나요?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "INTC",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "50a3ab19233d314672ba",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "INTC",
        "META"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "CEO Predicts: “Demand Will Continue to Rise” as AMD and Intel Soar up to 17% Thanks to Muse",
      "headlineKo": "CEO는 Muse 덕분에 AMD와 Intel이 최대 17% 상승함에 따라 “수요는 계속 증가할 것”이라고 예측합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3fd93b7486e6a08a5c3abd2db432ed9d4c1130842dee47f4f03b9a413e6a67a",
        "publishedAt": 1790602403,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CEO는 Muse 덕분에 AMD와 Intel이 최대 17% 상승함에 따라 “수요는 계속 증가할 것”이라고 예측합니다. TIKR.com General Investing CEO는 Muse Aditya Raghunat 덕분에 AMD와 Intel이 최대 17% 상승함에 따라 “수요는 계속 증가할 것”이라고 예측합니다.",
        "Meta의 Muse AI 에이전트는 거래자들이 훨씬 더 높은 서버 CPU 수요에 베팅하고 있습니다.",
        "퀄컴 CEO는 “CPU 수요는 계속 늘어날 것”이라며 이 아이디어를 지지했다. AMD의 추정치는 엄청나지만 가치 평가도 그렇습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 17%, 15%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 17%, 15%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "b0e1dfc65d4e4ee79a14",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "AAPL",
        "QCOM",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Qualcomm",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm Just Locked In Apple. Our Target Sits Above Wall Street’s",
      "headlineKo": "Qualcomm은 Apple에 막혔습니다. 우리의 목표는 월스트리트보다 높습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=19bd6ca840c3e7afe5e9e3a4d57b88ae449a153ec10e44db987c7acf1a1adee7",
        "publishedAt": 1790602244,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "우리의 목표는 월스트리트(24/7 Wall St.) 위에 있습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,698.20 +0.00% Dow Jones 51,550.90 −0.02% Nasdaq 100 30,345.80 +0.05% Russell 2000 2,823.21 −0.03% S&P 500 7,698.20 +0.00% 다우존스 51,550.90 −0.02% 나스닥 100 30,345.80 +0.05% 러셀 2000 2,823.21 −0.",
        "우리의 목표는 월스트리트의 Qualcomm 위에 있습니다. 방금 Apple과 갱신된 특허 계약을 체결했고 시장은 빠르게 움직였습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $194.19, $194.13, $228.68 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $194.19, $194.13, $228.68 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QCOM",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "7e82c424f51a5959b7cf",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "I’m Buying Microsoft Exec’s Tactical Assertion That He Supports an AI Killswitch",
      "headlineKo": "나는 AI 킬스위치를 지지한다는 Microsoft Exec의 전술적 주장을 믿고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b874ab533cda9d15435386ec4bfbe8b044a91f4911c6a9bc0e19f900886d896a",
        "publishedAt": 1790602193,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "나는 AI 킬스위치를 지원한다는 Microsoft Exec의 전술적 주장을 믿고 있습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.00 −0.54% Dow Jones 51,662.00 −0.41% Nasdaq 100 30,382.70 −0.94% Russell 2000 2,828.49 −0.52% S&P 500 7,712.00 −0.54% 다우존스 51,662.00 −0.41% 나스닥 100 30,382.70 −0.94% 러셀 2000 2,828.49 −0.",
        "그 성명 뒤에 있는 재정은 AI 안전 규칙을 작성함으로써 누가 가장 많은 이익을 얻을 수 있는지에 대해 매우 다른 이야기를 말해줍니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 360%, $678 billion, 84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 360%, $678 billion, 84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "6c010b47417483c46032",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
        "SNDK"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Retail Investors Think These 2 Stocks Could Be The Next NVIDIA And Sandisk",
      "headlineKo": "소매 투자자들은 이 두 주식이 차세대 NVIDIA와 Sandisk가 될 수 있다고 생각합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9db4ee7029044d78b8904947ea6744c90168a8b9f20f63d282b6bfbcf8ffbd1",
        "publishedAt": 1790600907,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 SNDK의 사업과 관련된 'Retail Investors Think These 2 Stocks Could Be The Next NVIDIA And Sandisk' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "a3b62403897d70c9d2ac",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Faces Q3 Delivery Test — JPMorgan Cuts Forecast, Flags Weakness In Two Key Markets",
      "headlineKo": "Tesla, 3분기 납품 테스트 직면 - JPMorgan, 예측 축소, 두 가지 주요 시장의 약점 지적",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=330a125e5cbf1b65d3d6c8e949c37383669764f77adaccb4b30b676059ad3f7a",
        "publishedAt": 1790600755,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla, 3분기 납품 테스트 직면 - JPMorgan, 예측 축소, 두 가지 주요 시장의 약점 지적"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "71a19646e895bcdcb16a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "NVIDIA Rises 2% as Board Authorizes Record $150B Buyback Increase; AMD and Broadcom Slip",
      "headlineKo": "이사회가 기록적인 1,500억 달러 규모의 자사주 매입을 승인함에 따라 NVIDIA는 2% 상승합니다. AMD와 브로드컴 슬립",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13ad52201638b4ab0f21a45ff3a076750360e88c4692fb11b0a3678d5f7d6222",
        "publishedAt": 1790600641,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이사회가 기록적인 1,500억 달러 규모의 자사주 매입을 승인함에 따라 NVIDIA는 2% 상승합니다. AMD 및 Broadcom Slip - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,712.50 −0.53% Dow Jones 51,645.00 −0.44% Nasdaq 100 30,402.20 −0.88% Russell 2000 2,828.19 −0.53% S&P 500 7,712.50 −0.53% 다우존스 51,645.00 −0.44% 나스닥 100 30,402.20 −0.88% 러셀 2000 2,828.19 −0.",
        "기록적인 헤드라인과 조용한 시장 반응 사이의 차이는 다음과 같은 중요한 사실을 드러냅니다. 작성자: David Moadel 2026년 9월 28일 오전 9시 4분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $150, $229.25, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $150, $229.25, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AVGO",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "e24865a84ea3dc3e655a",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ChronoScale: 50MW Microsoft Win Is A Start, But More Capacity May Be Needed",
      "headlineKo": "ChronoScale: 50MW Microsoft Win이 시작되었으나 더 많은 용량이 필요할 수 있음",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=162e4f9143aaf53907bbb1956c4845b53024d52d3cb18f2a40db970df3680d79",
        "publishedAt": 1790599973,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ChronoScale: 50MW Microsoft Win이 시작되었지만 더 많은 용량이 필요할 수 있음(CHRN) | 알파 추구 Michael Del Monte 7.72K 팔로워 팔로우 요약 ChronoScale Holdings Corporation은 다음을 활용하는 신흥 네오클라우드 제공업체로 자리매김하고 있습니다.",
        "CHRN의 성장은 컴퓨팅 용량 확장에 달려 있으며, 회사의 고객 기반 개발 능력은 더 높은 금융 비용과 치열한 경쟁에 직면할 수 있습니다.",
        "나는 초기 단계의 위험, 높은 가치 평가 및 향후 자본 조달에 대한 의존도를 반영하여 보류 등급과 $19.68의 목표 가격을 가진 CHRN 주식을 추천합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $19.68 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $19.68 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "027ede6b432faef41639",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon’s AI Capex Is Paying Off and I’m Buying",
      "headlineKo": "Amazon의 AI Capex가 성과를 거두고 있으며 구매 중입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=808d854c8eab75bae56807253ffecaf816062dbcc5184e4bd2bd0355de1b24ae",
        "publishedAt": 1790598491,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon의 AI Capex는 성과를 거두고 있으며 구매 중입니다 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,708.00 −0.59% Dow Jones 51,630.40 −0.47% Nasdaq 100 30,373.30 −0.98% Russell 2000 2,829.49 −0.48% S&P 500 7,708.00 −0.59% 다우존스 51,630.40 −0.47% 나스닥 100 30,373.30 −0.98% 러셀 2000 2,829.49 −0.",
        "다른 사람들이 건설하는 동안 유료 도로가 건설되는 것을 보는 이유는 다음과 같습니다. 작성자: Alex Sirois 2026년 9월 28일 게시, 오전 8:28(ET) · 읽기 3분 𝕏 f ⧉ AI의 약속으로 조명된 고급 데이터 센터는 혁신을 주도하는 핵심 인프라를 나타냅니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $131.8 billion, $220 billion, $35.10 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $131.8 billion, $220 billion, $35.10 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "69f8fefe2d65fe5b31bd",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AAPL",
        "AMZN"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "단기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Update: Apple, Amazon Face Renewed UK Consumer Lawsuit",
      "headlineKo": "업데이트: Apple, Amazon, 영국 소비자 소송 갱신",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=146616e3062191bb2ccd8d35492086b76dbba65773d551d433ce8477bc0bde25",
        "publishedAt": 1790597984,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "업데이트: Apple, Amazon, 영국 소비자 소송 갱신"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "51b3b06850f99f7b56cd",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN"
      ],
      "relatedEntities": [
        {
          "name": "AWS",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ACI Worldwide and Cognizant Complete BASE24-eps Performance Testing on AWS",
      "headlineKo": "ACI Worldwide 및 Cognizant는 AWS에서 BASE24-eps 성능 테스트를 완료했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f56f5c121a01e82b8bd4cf51addef5cd9fa342b137b9bbc504aec7a8b9928021",
        "publishedAt": 1790597508,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ACI Worldwide 및 Cognizant는 AWS에서 BASE24-eps 성능 테스트를 완료했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ca13381c6d85dd29df51",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salute supports NVIDIA-Powered AI Infrastructure as customer deployments expand beyond 20 GW globally",
      "headlineKo": "Salute는 고객 배포가 전 세계적으로 20GW 이상으로 확장됨에 따라 NVIDIA 기반 AI 인프라를 지원합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=20a8dce073cb2ea4daddf7445be087c894be0a401f141107c8688333ab537234",
        "publishedAt": 1790596800,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salute supports NVIDIA-Powered AI Infrastructure as customer deployments expand beyond 20 GW globally",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "1ba74f7c9f4062ff47a0",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia’s AI dominance funds historic $150 billion buyback",
      "headlineKo": "Nvidia의 AI 지배력으로 역사적인 1,500억 달러 규모의 자사주 매입",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd4c439db09dbb4f6dda8a24ac915366c6713e32be44d36c4695792f0ea11d2f",
        "publishedAt": 1790595787,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'Nvidia’s AI dominance funds historic $150 billion buyback' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "fccb464dac4a0b8aac09",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "LITE",
      "relatedTickers": [
        "LITE"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Citigroup Maintains Buy on Lumentum Holdings, Raises Price Target to $1400",
      "headlineKo": "Citigroup, Lumentum Holdings에 대한 매수 유지, 목표 주가를 1400달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7dcdf47a27f1566b4a243c06568fcbfdf674d8a17aa8be4bd82a40dcc067fc75",
        "publishedAt": 1790595025,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citigroup, Lumentum Holdings에 대한 매수 유지, 목표 주가를 1400달러로 인상"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "LITE",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "4c09b3e0479553946c91",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "PWR",
      "relatedTickers": [
        "PWR"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Piper Sandler Maintains Overweight on Quanta Services, Lowers Price Target to $714",
      "headlineKo": "파이퍼 샌들러(Piper Sandler), 콴타 서비스에 대한 비중확대 유지, 목표 가격을 714달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=f2ae641da91c5d7c8c2cb807b8da819d096a401db6ce9f743635ec94df1d00cf",
        "publishedAt": 1790594655,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Piper Sandler Maintains Overweight on Quanta Services, Lowers Price Target to $714",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "PWR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PWR에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "PWR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "PWR",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "bba69b33a13aa434b61b",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir's Stock Is Up Over 50% Since Reporting Earnings. Is It Heading for a New All-Time High?",
      "headlineKo": "Palantir의 주가는 수익 보고 이후 50% 이상 상승했습니다. 새로운 사상 최고치를 향하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6e1bffd43d78074b1409ae101b154a70e04d49fa1a3a7e9b90f821de4d8eaa44",
        "publishedAt": 1790593279,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir의 주가는 수익 보고 이후 50% 이상 상승했습니다. 새로운 사상 최고치를 향하고 있습니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "PLTR",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "92027e423385283d1c08",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AAPL",
        "AMZN",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple and Amazon Face UK Consumer Lawsuit Over Marketplace Sales",
      "headlineKo": "애플과 아마존, 마켓플레이스 판매에 대한 영국 소비자 소송에 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6605328b763b7a861d1ad51a136bf7f9c2d3937c0ea2d00b95a6ef706eafa11c",
        "publishedAt": 1790591444,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple과 Amazon은 마켓플레이스 판매 보드에 대한 영국 소비자 소송에 직면합니다: 인용문: 인기 모니터 무버 레벨 2 뉴스 메뉴 보드 주식 상품 외환 암호화폐 라운지 고급 검색 뉴스 모든 회사 뉴스 iHub 시장",
        "시작하기 Apple과 Amazon, 시장 판매에 대한 영국 소비자 소송에 직면 Fiona Craig 나스닥:AAPL 나스닥:AMZN 최신 뉴스 2026년 9월 28일 오전 6:30 © Adobe Stock 이미지 Apple(NASDAQ:AAPL)과 Amazon(NASDAQ:AMZN)이 영국 소비자 소송에 직면하게 됩니다.",
        "월요일 영국 경쟁 항소 재판소는 아마존 마켓플레이스를 통해 구입한 Apple 제품에 관한 청구를 허용하는 동시에 Apple 및 기타 소매업체에서 직접 구입한 제품에 대한 광범위한 청구를 거부했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $383 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $383 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "c7fddf847df6637b5653",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "ASML Has a China Warning for Trump: Too Much Pressure Could Create a Competitor",
      "headlineKo": "ASML은 트럼프에 대한 중국 경고를 가지고 있습니다: 너무 많은 압력이 경쟁자를 만들 수 있습니다",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=281d4f6f7a8dc819586b5eda31c41fd872da84e9326c5d6dde68634eada3dbe5",
        "publishedAt": 1790590817,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML은 트럼프에 대한 중국 경고를 가지고 있습니다: 너무 많은 압력이 경쟁자를 만들 수 있습니다"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "ASML",
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "3182bfd4f6c5bc2235e6",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "CRM",
        "ORCL",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle vs. Salesforce: Which Enterprise AI Stock Has More Room to Run?",
      "headlineKo": "Oracle vs. Salesforce: 어느 기업 AI 주식에 더 많은 투자 여지가 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ad228e5cee00579bb888434211ab0045679fddb600ae20cefccc7b78154a030",
        "publishedAt": 1790588400,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce: 어느 기업 AI 주식에 더 많은 투자 여지가 있나요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Enterprise에 참여 AI 주식은 Salesforce(CRM -1.76%) 및 Oracle(ORCL -1.7)과 같이 지난 한 해 동안 투자자들에게 큰 승리를 거두지 못했습니다.",
        "Salesforce의 주가는 지난 12개월 동안 약 3% 하락한 반면 Oracle의 주가는 55% 하락한 반면, S&P 500의 주가는 16% 상승했습니다( ^GSPC +0.51% )."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 121%, $7.4 billion, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 121%, $7.4 billion, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "7080ed90ced41c416996",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "NVDA",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "This Could Be Nvidia’s Biggest Challenger in the AI Chip Market. Hint: It’s Not AMD",
      "headlineKo": "이는 AI 칩 시장에서 Nvidia의 가장 큰 도전자가 될 수 있습니다. 힌트: AMD가 아닙니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a38c06942ec1e62a7a5cfb9aa13aa67f2e21c26f10020749c81b892e16d59c2",
        "publishedAt": 1790587681,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이는 AI 칩 시장에서 Nvidia의 가장 큰 도전자가 될 수 있습니다.",
        "힌트: AMD가 아닙니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Nvidia( NVDA +0.22% )는 그래픽 처리 장치(GP)를 시작으로 인공 지능(AI) 제국을 구축했습니다.",
        "이 모든 것이 지난 몇 년간 매출 급증으로 이어져 최근 분기 최고치인 960억 달러에 이르렀습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $96 billion, 0.12%, 0.12 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $96 billion, 0.12%, 0.12 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "4b3d96f8093aa2d22e65",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMD",
        "INTC",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Intel",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Computer Vision Global Market Report 2026: Secure Your Share of a $37.1 Billion Market Growing 15.9% Annually by 2030—Benchmark Microsoft, Sony, Intel, Texas Instruments and MediaTek as AI, Edge Visio",
      "headlineKo": "2026년 컴퓨터 비전 글로벌 시장 보고서: 2030년까지 매년 15.9% 성장하는 371억 달러 시장 점유율 확보—Microsoft, Sony, Intel, Texas Instruments 및 MediaTek을 AI, Edge Visio로 벤치마킹",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=466e72eda9d3ce0ac7473abf0a66463f4e2fd5eac2e75107f4d5905d61948025",
        "publishedAt": 1790587680,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Computer Vision Global Market Report 2026: Secure Your Share of a $37.1 Billion Market Growing 15.9% Annually by 2030—Benchmark Microsoft, Sony, Intel, Texas Instruments and MediaTek as AI, Edge Visio' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "5257258a8a5235dbb0b9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMD",
        "AMZN",
        "AVGO",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "AWS",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Virtual Desktop Infrastructure Market Report 2026: Capitalize on the $24.14 Billion Revenue Surge to $50.03 Billion by 2030—Benchmark AWS, Microsoft, VMware, Citrix and Nutanix to Capture Share in a 1",
      "headlineKo": "2026년 가상 데스크톱 인프라 시장 보고서: 241억 4천만 달러의 매출 급증을 활용하여 2030년까지 500억 3천만 달러로 급증—AWS, Microsoft, VMware, Citrix 및 Nutanix를 벤치마킹하여 1년 안에 점유율을 확보",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ac8434089321a778049a233a51f940c4489191f45db0bcb5f55ac8b702383da0",
        "publishedAt": 1790587560,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Virtual Desktop Infrastructure Market Report 2026: Capitalize on the $24.14 Billion Revenue Surge to $50.03 Billion by 2030—Benchmark AWS, Microsoft, VMware, Citrix and Nutanix to Capture Share in a 1' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "ea0ff5e0b26e7af92471",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "MSFT"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "AWS",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Enterprise Quantum Computing Global Market Report 2026: Capitalize on 31.1% CAGR as Revenue Hits $18.54B by 2030—Benchmark IBM, Google, Microsoft, AWS and IonQ to Secure Cloud Quantum ROI Before Rival",
      "headlineKo": "2026년 엔터프라이즈 양자 컴퓨팅 글로벌 시장 보고서: 2030년까지 수익이 185억 4천만 달러에 도달하면서 31.1% CAGR을 활용하세요. IBM, Google, Microsoft, AWS 및 IonQ를 벤치마킹하여 경쟁사보다 먼저 Cloud Quantum ROI를 확보하세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be4e0200bb55fdaa61f57cbb69c539f7f611afd20a289cb78baa6936ac27d154",
        "publishedAt": 1790587440,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Enterprise Quantum Computing Global Market Report 2026: Capitalize on 31.1% CAGR as Revenue Hits $18.54B by 2030—Benchmark IBM, Google, Microsoft, AWS and IonQ to Secure Cloud Quantum ROI Before Rival",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "9ebb6842076f3bd2f485",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "MSFT"
      ],
      "relatedEntities": [
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Amazon",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Information Technology Market Report 2026: Capture the $3.76 Trillion Revenue Shift Through 2030 as AI, Cloud and Cybersecurity Disrupt Enterprise Spend—Benchmark Microsoft, Amazon, Alphabet, IBM and ",
      "headlineKo": "2026년 정보 기술 시장 보고서: AI, 클라우드 및 사이버 보안으로 인해 기업 지출이 중단되면서 2030년까지 3조 7600억 달러의 매출 변화를 포착—Microsoft, Amazon, Alphabet, IBM 및",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50a8d3d5d093c8c332f9e15d59ce718eaeeb7ae66ebbcdae790ddf920e45dab7",
        "publishedAt": 1790587320,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2026년 정보 기술 시장 보고서: AI, 클라우드 및 사이버 보안으로 인해 기업 지출이 중단되면서 2030년까지 3조 7600억 달러의 매출 변화를 포착—Microsoft, Amazon, Alphabet, IBM 및"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "dd738c50090aa0daac83",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AAPL",
        "MSFT"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Computers Global Market Report 2026: Capitalize on the $161.29 Billion Revenue Surge to $676.41 Billion by 2030—Benchmark Apple, Microsoft, Dell, Lenovo and ASUS to Secure Share as AI PCs and Tariffs ",
      "headlineKo": "2026년 컴퓨터 글로벌 시장 보고서: 1,612억 9천만 달러의 매출 급증을 활용하여 2030년까지 6,764억 1천만 달러로 급증 - Apple, Microsoft, Dell, Lenovo 및 ASUS를 벤치마킹하여 AI PC 및 관세로 점유율 확보",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae3fd240d4e28f00d3957d8020301e0cc93a999f473eab42b81d2f44e7226acd",
        "publishedAt": 1790587260,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2026년 컴퓨터 글로벌 시장 보고서: 1,612억 9천만 달러의 매출 급증을 활용하여 2030년까지 6,764억 1천만 달러로 급증 - Apple, Microsoft, Dell, Lenovo 및 ASUS를 벤치마킹하여 AI PC 및 관세로 점유율 확보"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "MSFT",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "30676da4ec1c066a1ee8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "AMD",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Computers Global Market Report 2026: Capitalize on the $161.29 Billion Revenue Surge to $676.41 Billion by 2030—Benchmark Apple, Microsoft, Dell, Lenovo and ASUS to Secure Share as AI PCs and Tariffs ",
      "headlineKo": "2026년 컴퓨터 글로벌 시장 보고서: 1,612억 9천만 달러의 매출 급증을 활용하여 2030년까지 6,764억 1천만 달러로 급증 - Apple, Microsoft, Dell, Lenovo 및 ASUS를 벤치마킹하여 AI PC 및 관세로 점유율 확보",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae3fd240d4e28f00d3957d8020301e0cc93a999f473eab42b81d2f44e7226acd",
        "publishedAt": 1790587260,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Computers Global Market Report 2026: Capitalize on the $161.29 Billion Revenue Surge to $676.41 Billion by 2030—Benchmark Apple, Microsoft, Dell, Lenovo and ASUS to Secure Share as AI PCs and Tariffs' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "f51116253d27afe9d256",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "INTC",
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "INTC, AMD, AVGO: Chip Stocks Lead Slide As Tech Gets Hammered Amid Renewed U.S.-Iran Tensions",
      "headlineKo": "INTC, AMD, AVGO: 미국-이란 긴장이 다시 고조되는 가운데 기술이 타격을 입으면서 칩 주식이 하락세를 주도",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0962506e75fdbd8c68f04e26ab77822fa6dfca9adfe3e913a6fa0130704283f",
        "publishedAt": 1790586499,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "INTC, AMD, AVGO: 미국-이란 긴장이 다시 고조되는 가운데 기술이 타격을 입으면서 칩 주가 하락세를 주도 AI 에이전트 동향 뉴스 수익 전체 DIA 0.58% SPY 0.46% QQQ 0.81% 추세 NVDA 1.25% QNT 44.26% KOD 61.95% HBAR 23.96% AMPX 12.92% SPCX 0.76% TTD",
        "INTC, AMD, AVGO: 미국-이란 긴장이 다시 고조되는 가운데 기술이 타격을 입으면서 칩 주가 하락세를 주도합니다. 오일 쇼크로 인해 AI 거래는 새로운 거시적 테스트를 받게 되었습니다.",
        "트레이더들이 뉴욕 증권 거래소(NYSE)의 폐장 시간 전에 일하고 있습니다. (사진 출처는 JOHANNES EISELE/AFP via Getty Images) Yuvraj Malik · Stocktwits 게시일: 2026년 9월 28일 | 오전 5:08 EDT 공유 · 브렌트유 상승에 우리를 추가하세요"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.58%, 0.46%, 0.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.58%, 0.46%, 0.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "INTC",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "9a3e7933c8fce8578b5b",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today: S&P 500, Dow, Nasdaq 100 Futures Fall as Rising Yields and Trump's Rejection of Hormuz Deal Spook Investors — LLY, PEP, JEF in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: S&P 500, 다우, 나스닥 100 선물은 수익률 상승과 트럼프의 호르무즈 거래 거부로 투자자들을 놀라게 했습니다 — LLY, PEP, JEF 초점(업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=84ccb21ee2457c46413e29388d513d06ec0abcc99aaef9e9b0047756faa384d4",
        "publishedAt": 1790586086,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘의 주식 시장: 수익률 상승과 트럼프의 호르무 거부로 S&P 500, 다우, 나스닥 100 선물 하락 - Benzinga SPY 768.94 QQQ 740.81 −0.50% BTC/USD 83,422.37 −1.21% DIA 515.12 −0.46% GLD 379.98 −3.41% TLT 78.90 −0.53% US 로그인 Regis",
        "다우존스, S&P 500, 나스닥 100 지수가 금요일 종가에 이어 하락하면서 월요일 주식 선물은 하락했습니다.",
        "이는 미국 증시의 급등으로 아시아 주식 전반에 걸쳐 급격한 매도세를 보였습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.50%, 1.21%, 0.46% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.50%, 1.21%, 0.46% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "QQQ",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "c233d5b6254ea46886ac",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "How advertisers are adjusting to Meta’s ad creative diversification best practices",
      "headlineKo": "광고주가 Meta의 광고 크리에이티브 다양화 모범 사례에 적응하는 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d1aada475985e5bc2f8438638ea5f7bbbd0537a5c77317ccdfd9a20c2469e51b",
        "publishedAt": 1790586000,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "광고주가 Meta의 광고 크리에이티브 다양화 모범 사례에 적응하는 방법 주요 콘텐츠로 건너뛰기 작성자: Jasmine Sheena 2026년 9월 28일 • 3분 읽기 주제: 광고 기술 및 프로그래밍 방식/기술 및 인프라/Meta가 투자함에 따라 광고 기술의 AI",
        "Marketing Brew가 인터뷰한 일부 임원에 따르면 Meta는 크리에이티브 다양화에 대한 구체적인 제안을 포함하여 모델별로 광고 순위를 높이는 방법에 대한 몇 가지 업데이트된 모범 사례를 제공했습니다.",
        "Meta 대변인 Alisha Swinteck은 Meta가 광고주에게 광고 성과 데이터를 제공하는 Insights API에서 창의적인 통찰력 지표를 테스트하고 있다고 말했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "META",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "79bb7d17ac5024e8c69e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "MU",
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nasdaq, S&P 500 Futures Fall As Oil Spikes On Trump’s Snub To Iran: MU, NVDA, SKHY, SPCX, NIO Stocks In Focus",
      "headlineKo": "나스닥, S&P 500 선물은 트럼프의 이란 거부로 인한 유가 급등으로 하락: MU, NVDA, SKHY, SPCX, NIO 주식에 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1d374736cb8c96eb9678acd578701e84816231caca31a626e8fe5bb5e78b04a",
        "publishedAt": 1790584608,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "나스닥, S&P 500 선물은 트럼프의 이란에 대한 석유 스파이크로 하락: MU, NVDA, SKHY, SPCX, NIO 주식에 초점 AI 에이전트 동향 뉴스 수익 전체 DIA 0.67% SPY 0.69% QQQ 0.96% 추세 BA 6.91% KOD 168.44% NVDA 1.89% SMMT 16.85% NVTS 8.61%",
        "나스닥, S&P 500 선물은 트럼프의 이란 거부로 인한 유가 급등으로 하락: MU, NVDA, SKHY, SPCX, NIO 주식 집중 소매 거래자들은 SPY 및 QQQ에 대한 낙관적인 감정으로 데이터가 많은 한 주를 맞이하고 있습니다.",
        "노트북 키보드, 화면에 표시된 주식 그래프 예시 및 Nasdaq 로고."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.67%, 0.69%, 0.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.67%, 0.69%, 0.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "SPY",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "2d15097ac66ade80d47d",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Morgan Stanley Maintains Equal-Weight on Applied Materials, Lowers Price Target to $563",
      "headlineKo": "Morgan Stanley, Applied Materials에 대해 동일 비중 유지, 목표 가격을 563달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d25296febbb6e57f759894f69b101f3c2abc86ecd3f9e5bcd873ffb123aec1fa",
        "publishedAt": 1790584244,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley Maintains Equal-Weight on Applied Materials, Lowers Price Target to $563",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMAT",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "2eb14f30191727202ddc",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "AMD",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "High Availability Cluster Solution Global Market Report 2026: Capitalize on the $2.49 Billion Revenue Surge to $8.84 Billion by 2030; Benchmark Microsoft, Dell, IBM, Cisco and Oracle as Hybrid Cloud a",
      "headlineKo": "고가용성 클러스터 솔루션 글로벌 시장 보고서 2026: 24억 9천만 달러의 수익 급증을 활용하여 2030년까지 88억 4천만 달러로 증가 Microsoft, Dell, IBM, Cisco 및 Oracle을 하이브리드 클라우드로 벤치마킹",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=85e9b96d08b4e927f9e80c53e018196425df23b1c2b14bed7d699979ac60efc5",
        "publishedAt": 1790582700,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 ORCL의 사업과 관련된 'High Availability Cluster Solution Global Market Report 2026: Capitalize on the $2.49 Billion Revenue Surge to $8.84 Billion by 2030; Benchmark Microsoft, Dell, IBM, Cisco and Oracle as Hybrid Cloud a' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "557097cc5612d67d9d89",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
        "AMZN",
        "GOOGL",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "AWS",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Virtual Desktop Enhancer Global Market Report 2026: Capitalize on 14.9% CAGR as AI and Cloud VDI Drive Revenue to $4.62 Billion by 2030 and Benchmark Microsoft, AWS, Google, Huawei and Dell Before Riv",
      "headlineKo": "가상 데스크탑 강화제 글로벌 시장 보고서 2026: AI 및 클라우드 VDI가 2030년까지 매출을 46억 2천만 달러로 늘리고 Riv 이전에 Microsoft, AWS, Google, Huawei 및 Dell을 벤치마킹함에 따라 CAGR 14.9%를 활용합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a2444f97d500561d0f04c1152eaec39eecc6f7728a2abe0bad301e5ce65ef3b",
        "publishedAt": 1790582640,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Virtual Desktop Enhancer Global Market Report 2026: Capitalize on 14.9% CAGR as AI and Cloud VDI Drive Revenue to $4.62 Billion by 2030 and Benchmark Microsoft, AWS, Google, Huawei and Dell Before Riv' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
        "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
        "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "긍정",
          "reason": "AI 컴퓨팅 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMD",
          "direction": "긍정",
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "MU",
          "direction": "긍정",
          "reason": "AI 서버 메모리 수요와 가격 강세",
          "basis": "analysis"
        },
        {
          "ticker": "ORCL",
          "direction": "혼합",
          "reason": "클라우드 수요와 자본 부담 동시 확대",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 수주·가동 데이터센터",
        "관련 기업 매출·수주잔고",
        "CAPEX 대비 영업현금흐름",
        "금리와 프로젝트 부채 비용"
      ]
    },
    {
      "id": "43b66f5e60b0d4468207",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "NVDA",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stocktwits Tech Watch: Micron’s Q4 Report, OpenAI Developer Conference Keep AI Trade In Focus This Week",
      "headlineKo": "Stocktwits Tech Watch: Micron의 4분기 보고서, OpenAI 개발자 컨퍼런스 이번 주 AI 거래에 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0631570bfcd0748b0fe194d17d9c698a140991e231fe0283ff7d66fab7757034",
        "publishedAt": 1790578850,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits Tech Watch: Micron의 4분기 보고서, OpenAI 개발자 컨퍼런스 이번 주 AI 거래에 집중 AI 에이전트 동향 뉴스 수익 전체 DIA 0.57% SPY 0.43% QQQ 0.83% 동향 NVDA 1.01% QNT 46.76% KOD 67.64% HBAR 23.39% SPCX 0.54% AMPX",
        "Stocktwits Tech Watch: Micron의 4분기 보고서, OpenAI 개발자 컨퍼런스 이번 주 AI 거래에 초점을 맞추세요. AI 모멘텀은 수익, 제품 출시 및 IPO로 인해 기술 투자자들이 다시 경계심을 갖게 되면서 새로운 테스트에 직면해 있습니다.",
        "Micron Technology 로고가 2026년 7월 2일 워싱턴 DC 내셔널 몰의 The Great American State Fair 부스에 전시되었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.57%, 0.43%, 0.83% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.57%, 0.43%, 0.83% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "3f9e8b0683f0c3c012c5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "QQQ"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron's Stock Faces Another Post-Earnings Plunge",
      "headlineKo": "마이크론의 주가는 또 다른 실적 후 급락에 직면",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=03dcfd858606a13a52ecfd0749d8cc2fad911ab8ab56cf6d8998d169bd0d6729",
        "publishedAt": 1790578800,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 주가, 또 다른 실적 폭락 직면 (NASDAQ:MU) | 알파 찾기 Mott Capital Management 투자 그룹 리더 팔로우 요약 Micron은 4분기 실적을 앞두고 극단적인 강세 옵션 포지셔닝에 직면해 있습니다.",
        "AI 수요에 따른 수익 및 EPS 성장에 대한 분석가의 강력한 예측에도 불구하고 상당한 상승 여력만이 지속적인 주가 상승을 가져올 수 있습니다.",
        "내재변동성은 지난 분기보다 낮아져 수익 후 약 8.5%의 움직임을 시사합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.5%, $1,200 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.5%, $1,200 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "631b87b8af24698ee33c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "LRCX",
        "QQQ",
        "TSM"
      ],
      "relatedEntities": [
        {
          "name": "TSMC",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Lam Research: A Key AI Infrastructure Player With Growth Upside",
      "headlineKo": "Lam Research: 성장 가능성이 있는 주요 AI 인프라 플레이어",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5efcd72c9dbb46f835e255b6c8630e53a2b2636d5cd0522655c76dee8be0258d",
        "publishedAt": 1790576802,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research: 성장 가능성이 있는 주요 AI 인프라 플레이어(NASDAQ:LRCX) | Seeking Alpha The Asian Investor 팔로워 33.24K 팔로우 요약 Lam Research는 AI CapEx 지출 가속화로 이익을 얻을 수 있는 전략적 위치에 있습니다.",
        "LRCX의 매출총이익률 확대와 AI 칩에 대한 강력한 수요로 인해 P/E가 최대 30배까지 재평가될 가능성이 있으며, 이는 현재 수준보다 최소 12% 상승 여력이 있음을 의미합니다.",
        "최근 8월의 견고한 TSMC 결과와 예상 AI 인프라 지출은 LRCX 및 동료 기업에 유리한 공급-수요 환경을 강조합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LRCX에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "LRCX",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "b155906a8afcd05cd062",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Tesla",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "If You'd Invested $10,000 in Tesla (TSLA) 10 Years Ago, Here's How Much You'd Have Today",
      "headlineKo": "10년 전 Tesla(TSLA)에 10,000달러를 투자했다면 현재 얼마를 갖게 될지 알려드립니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae33b98e9ba60b56a0dfc483617decd185a836ab0ad1c210d31055732bff0a34",
        "publishedAt": 1790572800,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10년 전 Tesla(TSLA)에 10,000달러를 투자했다면 현재 얼마를 갖게 될지 알려드립니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Tesla( TSLA -1.54% )는",
        "그러나 상당한 수익을 축적한 초기 투자자들을 돌보는 일을 훌륭하게 해냈습니다.",
        "10년 전에 이 \"Magnificent Seven\" 주식에 10,000달러를 투자했다면 현재 얼마를 갖게 될지 알려드리겠습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, 2,570%, 24% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, 2,570%, 24% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "TSLA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "fa75ebb9f01022274d5a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "MU",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "Oracle",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia, Micron, Alphabet, Oracle and Adobe are part of Zacks Earnings Preview",
      "headlineKo": "Nvidia, Micron, Alphabet, Oracle 및 Adobe는 Zacks Earnings Preview의 일부입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b1448ca3410241200ceefa61072ae3b5e8e328809ec75e7f669320dce8371f2",
        "publishedAt": 1790571660,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia, Micron, Alphabet, Oracle 및 Adobe는 Zacks Earnings Preview의 일부입니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "GOOGL",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "bf5fa2708f1c6461f31a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Earnings: What to Expect as AI Demand Drives Growth",
      "headlineKo": "Micron 수익: AI 수요가 성장을 주도할 때 기대할 수 있는 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=40af09edf7e9ed463ebf7cd63ec4fdeea6e34b2a6131444a14a32169d80e49a4",
        "publishedAt": 1790569020,
        "collectedAt": 1790776802.2100902
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron 수익: AI 수요가 성장을 주도할 때 기대할 수 있는 사항"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "이 뉴스가 실제 매출·이익에 연결되는지 다음 공시에서 확인해야 합니다."
      ],
      "whyItMatters": [
        "일시적 주가 반응인지 구조적 사업 변화인지 구분해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "MU",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "2e33d04ec036997cea29",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "MU",
        "NVDA",
        "QQQ",
        "SNDK",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "NVDA Stock In Focus: China Reportedly Weighs Letting ByteDance, Alibaba Buy Some Nvidia AI Chips",
      "headlineKo": "NVDA 주식에 초점이 맞춰져 있음: 중국은 ByteDance, Alibaba가 일부 Nvidia AI 칩을 구매하도록 허용하는 데 무게를 두고 있는 것으로 알려짐",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=333ff7d6bb612eaddc2e47370baa06c2dae3102539c654a4cd38c5bba323a74a",
        "publishedAt": 1790565238,
        "collectedAt": 1790779628.4662342
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVDA 주식에 초점: 중국은 ByteDance, Alibaba가 일부 Nvidia AI 칩 AI 에이전트 구매를 허용하는 것으로 보고됨 동향 뉴스 수익 전체 DIA 0.30% SPY 0.31% QQQ 0.74% 추세 BTC 1.62% MU 1.84% SUI 1.93% UUUU 1.41% PEP 0.25% SNDK 2.64% XLM2.8",
        "NVDA 주식 집중: 중국은 ByteDance, Alibaba가 일부 Nvidia AI 칩을 구매하도록 허용하는 데 무게를 두고 있는 것으로 알려짐",
        "Nvidia 로고는 중국 국기를 배경으로 스마트폰에 나타납니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.30%, 0.31%, 0.74% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.30%, 0.31%, 0.74% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    }
  ],
  "byTicker": {
    "AMZN": [
      "d88a70d2957813290fb2",
      "36a8a7ecd7a5c6e11a2e",
      "0f78292a37b2c3d81acc",
      "dfb69c8f361506c21afd",
      "d0e5d92650d4910b1215",
      "92e3fb02dfcafc94dbcc",
      "16eef998e091f775eefb",
      "be084e07878e681f27ba",
      "fb99bdb450b2b46e5dfc",
      "22c7e6df1870c0ea0ba0",
      "f505606a97ed76c3f864",
      "a35388b246db8384f656",
      "027ede6b432faef41639",
      "69f8fefe2d65fe5b31bd",
      "51b3b06850f99f7b56cd",
      "92027e423385283d1c08",
      "5257258a8a5235dbb0b9",
      "ea0ff5e0b26e7af92471",
      "9ebb6842076f3bd2f485",
      "557097cc5612d67d9d89"
    ],
    "NVDA": [
      "46f1c8964fbfcee748d1",
      "629e78ec0241ecaeab96",
      "fafb7d47f16722e5080c",
      "7bb18acab33905eff545",
      "fb865f74703464c3c0c8",
      "f8c068711ca1681a671f",
      "d46ed5dad4956a231408",
      "e49085bd8ed66865a234",
      "89a696716d4d74b20d3b",
      "b22bc025810b2c0f8510",
      "9e107aa94dc77de1a6d9",
      "7907349f89af6f8ad0fd",
      "74900e07dd2cea30df7c",
      "2c3f4a23ed13c3e8a8c0",
      "4194863cceef8709395b",
      "361e4a37f812237f7e63",
      "f84872758b7c010870ac",
      "d338353b78076c1be625",
      "14f536041b0a07af25f0",
      "22c7e6df1870c0ea0ba0",
      "f505606a97ed76c3f864",
      "92e5221b56f150e5c07d",
      "90bbde23a1609d7a4576",
      "a35388b246db8384f656",
      "914e69549026c68ad1ca",
      "db16c1259bff667165c7",
      "af59b3d6108398e3ab45",
      "eb145d717ac5dd655bbb",
      "87a9f17ae310e26fb0bc",
      "c3bfba58cf6cb45a523f",
      "43ae4d235831d835a3d2",
      "f58b987533f7811cddb5",
      "30c15b001b2e7ddfab51",
      "d598b779de1a497afcda",
      "9e05ea255b567b122d35",
      "9dfcc401a9faee321b6c",
      "0d361b49754e60b4ae8d",
      "4a2ae7c117d5c76600ad",
      "667b1f8f8ca589511a70",
      "5e64f1c1c2d69142c4df",
      "2fbd2ca170283e77894e",
      "7e835e242f9bccbee079",
      "2dde9ce490376f2fc740",
      "e98fa7663941a67f486a",
      "bb2677c9783e279722b8",
      "6c010b47417483c46032",
      "71a19646e895bcdcb16a",
      "ca13381c6d85dd29df51",
      "1ba74f7c9f4062ff47a0",
      "7080ed90ced41c416996",
      "4b3d96f8093aa2d22e65",
      "5257258a8a5235dbb0b9",
      "30676da4ec1c066a1ee8",
      "f51116253d27afe9d256",
      "79bb7d17ac5024e8c69e",
      "2eb14f30191727202ddc",
      "557097cc5612d67d9d89",
      "43b66f5e60b0d4468207",
      "fa75ebb9f01022274d5a",
      "2e33d04ec036997cea29"
    ],
    "QQQ": [
      "46f1c8964fbfcee748d1",
      "377408d91ff0daec0d3c",
      "7b8067e01cf1a55fd54f",
      "675e61ebde2a3ecc9aa8",
      "dfb69c8f361506c21afd",
      "dffa0af4915c01f9bfe0",
      "466f9ee0c32d473cfc5a",
      "d4c501b3ce235c9109f7",
      "a49990fe1242029afb4b",
      "b6a98167a10e98033b12",
      "f0f797705dbe6905daee",
      "7b3e9e5cc4ffcc5f687e",
      "cac8339bb793903665cf",
      "fd6ee061918ec3eda4de",
      "c77d3f2dd60bd5e1e8b5",
      "c31f3c478b43f6454682",
      "12859b92c1a7b8815951",
      "5696b974a3ce3f77dee6",
      "57bb27ce47c4d26e8e95",
      "20098347f2d989128d0f",
      "e227c2a28a84461b826f",
      "5b03345b136391e8da73",
      "c37c3967e67911e85a99",
      "4301db55de7ffc62c9ac",
      "0b033bf14b0854fa244e",
      "62f61c65830dc9a0d9e4",
      "6fe9bf8765596c2fc91f",
      "05dd8b9611aa5e83c8be",
      "7907349f89af6f8ad0fd",
      "2bb14273571988cc95b3",
      "b9803e02cb6f518c0e90",
      "2c3f4a23ed13c3e8a8c0",
      "c1260d8fe06d711f9648",
      "ce65f19dd9553fc014ef",
      "839850ceadb9b759b9b0",
      "1e633b125ee50754bf15",
      "89cbd01c0483009c1a46",
      "0a2ae68bd6673e79a63a",
      "02d7937e27f8999977f5",
      "f95f1eadf2fd6dc2207c",
      "96ffa0d6e594a3b00494",
      "bb63b31c9863c9d0f32b",
      "d95500913fef736dfcdd",
      "afba96c740b2ae70af5f",
      "b6fea683c59567484cd9",
      "b0773e95073e3e8d7c96",
      "af59b3d6108398e3ab45",
      "457ece90b8ce6236ce59",
      "817417e4d5ab8b742416",
      "d087a2f0c4bb8e45de0e",
      "c3bfba58cf6cb45a523f",
      "28a340c788570d1983e5",
      "f58b987533f7811cddb5",
      "d598b779de1a497afcda",
      "b6a22c43be9f313c4172",
      "9e05ea255b567b122d35",
      "4a2ae7c117d5c76600ad",
      "667b1f8f8ca589511a70",
      "4f6b5fa2e76bc07ea178",
      "c4a03476521ce24a8790",
      "8831b15d3e7159ee7263",
      "6980c5957876f0f27997",
      "00c4f6e9a375f8482ea3",
      "a98c57babacea29b03ac",
      "e6840b097dc0e30cb700",
      "bb2677c9783e279722b8",
      "71a1c8813a4db1c1c162",
      "c2acf3671d80e75468b5",
      "2f81646004e88ec5966e",
      "dd1e9e16c090d8e891bf",
      "b0e1dfc65d4e4ee79a14",
      "7e82c424f51a5959b7cf",
      "71a19646e895bcdcb16a",
      "027ede6b432faef41639",
      "92027e423385283d1c08",
      "f51116253d27afe9d256",
      "9a3e7933c8fce8578b5b",
      "79bb7d17ac5024e8c69e",
      "43b66f5e60b0d4468207",
      "3f9e8b0683f0c3c012c5",
      "631b87b8af24698ee33c",
      "2e33d04ec036997cea29"
    ],
    "SPY": [
      "46f1c8964fbfcee748d1",
      "629e78ec0241ecaeab96",
      "377408d91ff0daec0d3c",
      "7b8067e01cf1a55fd54f",
      "675e61ebde2a3ecc9aa8",
      "3cc99b7cba5bb0905d9c",
      "dfb69c8f361506c21afd",
      "7ab299734fef8532013d",
      "dffa0af4915c01f9bfe0",
      "3d728115c41bf25862e8",
      "9586df933e07fa8661dc",
      "2715cfe5210475a2c844",
      "7b3e9e5cc4ffcc5f687e",
      "92e3fb02dfcafc94dbcc",
      "0e8711d9b6aecf4b0618",
      "fd6ee061918ec3eda4de",
      "e1a4f31815b74a29b94b",
      "12859b92c1a7b8815951",
      "f8960fa3918e56ecb327",
      "5696b974a3ce3f77dee6",
      "57bb27ce47c4d26e8e95",
      "20098347f2d989128d0f",
      "e227c2a28a84461b826f",
      "5b03345b136391e8da73",
      "c37c3967e67911e85a99",
      "ebb3a4ff77d41ce6e95e",
      "1252e23d0d05c6769676",
      "4301db55de7ffc62c9ac",
      "ff1b85926eef78f366d6",
      "0b033bf14b0854fa244e",
      "62f61c65830dc9a0d9e4",
      "6fe9bf8765596c2fc91f",
      "b22bc025810b2c0f8510",
      "7238986a18b97e165354",
      "67caf8abc8fd5925144a",
      "be084e07878e681f27ba",
      "7907349f89af6f8ad0fd",
      "fb99bdb450b2b46e5dfc",
      "b9803e02cb6f518c0e90",
      "2c3f4a23ed13c3e8a8c0",
      "c1260d8fe06d711f9648",
      "ce65f19dd9553fc014ef",
      "839850ceadb9b759b9b0",
      "1e633b125ee50754bf15",
      "89cbd01c0483009c1a46",
      "0a2ae68bd6673e79a63a",
      "02d7937e27f8999977f5",
      "f95f1eadf2fd6dc2207c",
      "73467221e2717d0aced6",
      "bb63b31c9863c9d0f32b",
      "afba96c740b2ae70af5f",
      "9e7a7b19e4d9d800e593",
      "b8481e801c3e280ef2d7",
      "db16c1259bff667165c7",
      "38806b2080f7ca0aba2f",
      "af59b3d6108398e3ab45",
      "817417e4d5ab8b742416",
      "d087a2f0c4bb8e45de0e",
      "c3bfba58cf6cb45a523f",
      "01ce81d9ffe329eda6ee",
      "e54276c77bf5a65fa6b4",
      "28a340c788570d1983e5",
      "f58b987533f7811cddb5",
      "d598b779de1a497afcda",
      "b6a22c43be9f313c4172",
      "9e05ea255b567b122d35",
      "afb402a5cd0dec1088a9",
      "4a2ae7c117d5c76600ad",
      "667b1f8f8ca589511a70",
      "4f6b5fa2e76bc07ea178",
      "5e64f1c1c2d69142c4df",
      "41da8439d04ede29eb98",
      "2dde9ce490376f2fc740",
      "c4a03476521ce24a8790",
      "8831b15d3e7159ee7263",
      "6980c5957876f0f27997",
      "00c4f6e9a375f8482ea3",
      "7a9c3e7342e212083bd7",
      "a3148c7e2a9c6acb044f",
      "a98c57babacea29b03ac",
      "e6840b097dc0e30cb700",
      "bb2677c9783e279722b8",
      "71a1c8813a4db1c1c162",
      "c2acf3671d80e75468b5",
      "5dbba31805f0f0bc453d",
      "2f81646004e88ec5966e",
      "dd1e9e16c090d8e891bf",
      "b0e1dfc65d4e4ee79a14",
      "7e82c424f51a5959b7cf",
      "71a19646e895bcdcb16a",
      "027ede6b432faef41639",
      "3182bfd4f6c5bc2235e6",
      "7080ed90ced41c416996",
      "f51116253d27afe9d256",
      "9a3e7933c8fce8578b5b",
      "79bb7d17ac5024e8c69e",
      "43b66f5e60b0d4468207",
      "b155906a8afcd05cd062",
      "2e33d04ec036997cea29"
    ],
    "GOOGL": [
      "be2f24e078980d90d55c",
      "dfb69c8f361506c21afd",
      "d0e5d92650d4910b1215",
      "7bb18acab33905eff545",
      "05dd8b9611aa5e83c8be",
      "fb99bdb450b2b46e5dfc",
      "b9803e02cb6f518c0e90",
      "14f536041b0a07af25f0",
      "410b8352c314242bfcba",
      "90bbde23a1609d7a4576",
      "b0773e95073e3e8d7c96",
      "9dfcc401a9faee321b6c",
      "f2c0a3f058df7ce3b7bb",
      "df230ff4ce0f2e19c943",
      "71a1c8813a4db1c1c162",
      "c2acf3671d80e75468b5",
      "ea0ff5e0b26e7af92471",
      "9ebb6842076f3bd2f485",
      "557097cc5612d67d9d89",
      "fa75ebb9f01022274d5a"
    ],
    "AVGO": [
      "629e78ec0241ecaeab96",
      "3cc99b7cba5bb0905d9c",
      "7907349f89af6f8ad0fd",
      "74900e07dd2cea30df7c",
      "2bb14273571988cc95b3",
      "d7168ee8b2f13c506bdd",
      "db16c1259bff667165c7",
      "01ce81d9ffe329eda6ee",
      "5e64f1c1c2d69142c4df",
      "41da8439d04ede29eb98",
      "2fbd2ca170283e77894e",
      "5388d223f1f34ab950e7",
      "71a19646e895bcdcb16a",
      "5257258a8a5235dbb0b9",
      "f51116253d27afe9d256"
    ],
    "MU": [
      "377408d91ff0daec0d3c",
      "1e840f98680ecd3a845a",
      "ecb6f94dc3216a2e9055",
      "7ab299734fef8532013d",
      "fafb7d47f16722e5080c",
      "fb865f74703464c3c0c8",
      "7b3e9e5cc4ffcc5f687e",
      "f8c068711ca1681a671f",
      "e49085bd8ed66865a234",
      "0affbff30b8284e36b75",
      "2ad35ec884648fe43904",
      "20098347f2d989128d0f",
      "e227c2a28a84461b826f",
      "5b03345b136391e8da73",
      "89a696716d4d74b20d3b",
      "a98137e9fa34ccedada9",
      "9e107aa94dc77de1a6d9",
      "74900e07dd2cea30df7c",
      "72e0378c9f0646cea883",
      "ce65f19dd9553fc014ef",
      "f84872758b7c010870ac",
      "d338353b78076c1be625",
      "69c2b350d4dee51de8ef",
      "14f536041b0a07af25f0",
      "f505606a97ed76c3f864",
      "2287fdaee8f16e55db50",
      "90bbde23a1609d7a4576",
      "a35388b246db8384f656",
      "914e69549026c68ad1ca",
      "eb145d717ac5dd655bbb",
      "87a9f17ae310e26fb0bc",
      "817417e4d5ab8b742416",
      "c3bfba58cf6cb45a523f",
      "1261aed9b284e7534820",
      "28a340c788570d1983e5",
      "43ae4d235831d835a3d2",
      "30c15b001b2e7ddfab51",
      "9dfcc401a9faee321b6c",
      "0d361b49754e60b4ae8d",
      "4a2ae7c117d5c76600ad",
      "667b1f8f8ca589511a70",
      "1d1a4abb0ee31dc3dade",
      "7d6f39e637803adc0b6f",
      "2fbd2ca170283e77894e",
      "176a6a41c003acdfd0e9",
      "f27cf163f2e546ecc19d",
      "e98fa7663941a67f486a",
      "9f64aac96a80c0abc214",
      "a98c57babacea29b03ac",
      "6c010b47417483c46032",
      "1ba74f7c9f4062ff47a0",
      "4b3d96f8093aa2d22e65",
      "5257258a8a5235dbb0b9",
      "30676da4ec1c066a1ee8",
      "79bb7d17ac5024e8c69e",
      "2eb14f30191727202ddc",
      "557097cc5612d67d9d89",
      "43b66f5e60b0d4468207",
      "3f9e8b0683f0c3c012c5",
      "fa75ebb9f01022274d5a",
      "bf5fa2708f1c6461f31a",
      "2e33d04ec036997cea29"
    ],
    "TSLA": [
      "7b8067e01cf1a55fd54f",
      "675e61ebde2a3ecc9aa8",
      "c87d7fb33dd0a624ba8f",
      "7b3e9e5cc4ffcc5f687e",
      "fd6ee061918ec3eda4de",
      "20098347f2d989128d0f",
      "0f7f894b68f03f9f21df",
      "0a2ae68bd6673e79a63a",
      "e40b941fb47ec0d5be02",
      "7a9c3e7342e212083bd7",
      "b176ec0c38924e67a9a4",
      "5dbba31805f0f0bc453d",
      "a3b62403897d70c9d2ac",
      "b155906a8afcd05cd062"
    ],
    "PLTR": [
      "b40208aaaff30716962f",
      "a49990fe1242029afb4b",
      "e1a4f31815b74a29b94b",
      "e8d7d9622e741b89c833",
      "67caf8abc8fd5925144a",
      "89cbd01c0483009c1a46",
      "4a2ae7c117d5c76600ad",
      "667b1f8f8ca589511a70",
      "8831b15d3e7159ee7263",
      "4fd948fb9353a328845d",
      "00c4f6e9a375f8482ea3",
      "bba69b33a13aa434b61b"
    ],
    "ORCL": [
      "f097cc482bac63906e89",
      "fafb7d47f16722e5080c",
      "fb865f74703464c3c0c8",
      "f8c068711ca1681a671f",
      "0e8711d9b6aecf4b0618",
      "e49085bd8ed66865a234",
      "e1a4f31815b74a29b94b",
      "e8d7d9622e741b89c833",
      "89a696716d4d74b20d3b",
      "1252e23d0d05c6769676",
      "3146039f6a2cc26a04c7",
      "9e107aa94dc77de1a6d9",
      "74900e07dd2cea30df7c",
      "ef92f6a532ea1919fa5c",
      "f84872758b7c010870ac",
      "d338353b78076c1be625",
      "3f51c54d2443300c7ae5",
      "14f536041b0a07af25f0",
      "f505606a97ed76c3f864",
      "1e633b125ee50754bf15",
      "90bbde23a1609d7a4576",
      "a35388b246db8384f656",
      "914e69549026c68ad1ca",
      "5fbdf5a0ed1839f87b54",
      "eb145d717ac5dd655bbb",
      "87a9f17ae310e26fb0bc",
      "362b2499166f18e14898",
      "43ae4d235831d835a3d2",
      "30c15b001b2e7ddfab51",
      "9dfcc401a9faee321b6c",
      "0d361b49754e60b4ae8d",
      "2fbd2ca170283e77894e",
      "e98fa7663941a67f486a",
      "96c6870ec90f58e79ec9",
      "dd1e9e16c090d8e891bf",
      "4d308aaf0bfc74beff8c",
      "6c010b47417483c46032",
      "1ba74f7c9f4062ff47a0",
      "3182bfd4f6c5bc2235e6",
      "4b3d96f8093aa2d22e65",
      "5257258a8a5235dbb0b9",
      "30676da4ec1c066a1ee8",
      "2eb14f30191727202ddc",
      "557097cc5612d67d9d89",
      "fa75ebb9f01022274d5a"
    ],
    "QCOM": [
      "3cc99b7cba5bb0905d9c",
      "2ad35ec884648fe43904",
      "02d7937e27f8999977f5",
      "2287fdaee8f16e55db50",
      "b6fea683c59567484cd9",
      "8f6e0a20ed1656796873",
      "6980c5957876f0f27997",
      "b0e1dfc65d4e4ee79a14"
    ],
    "SNDK": [
      "7ab299734fef8532013d",
      "c77d3f2dd60bd5e1e8b5",
      "ebb3a4ff77d41ce6e95e",
      "f95f1eadf2fd6dc2207c",
      "bb63b31c9863c9d0f32b",
      "6c010b47417483c46032",
      "2e33d04ec036997cea29"
    ],
    "ASML": [
      "056c2a0396eb7cce39c3",
      "9586df933e07fa8661dc",
      "c7fddf847df6637b5653"
    ],
    "TSM": [
      "056c2a0396eb7cce39c3",
      "ff1b85926eef78f366d6",
      "52feea82e87d7ea469af",
      "787d6c81d6af080aa74c",
      "bb2677c9783e279722b8",
      "631b87b8af24698ee33c"
    ],
    "LITE": [
      "dffa0af4915c01f9bfe0",
      "96ffa0d6e594a3b00494",
      "fccb464dac4a0b8aac09"
    ],
    "AMD": [
      "fafb7d47f16722e5080c",
      "fc4363ef292647fc6638",
      "60a45990edefb472ed25",
      "fb865f74703464c3c0c8",
      "f8c068711ca1681a671f",
      "e49085bd8ed66865a234",
      "89a696716d4d74b20d3b",
      "7238986a18b97e165354",
      "9e107aa94dc77de1a6d9",
      "74900e07dd2cea30df7c",
      "361e4a37f812237f7e63",
      "f84872758b7c010870ac",
      "d338353b78076c1be625",
      "839850ceadb9b759b9b0",
      "14f536041b0a07af25f0",
      "f505606a97ed76c3f864",
      "90bbde23a1609d7a4576",
      "9e7a7b19e4d9d800e593",
      "a35388b246db8384f656",
      "914e69549026c68ad1ca",
      "db16c1259bff667165c7",
      "eb145d717ac5dd655bbb",
      "87a9f17ae310e26fb0bc",
      "d087a2f0c4bb8e45de0e",
      "bb34b5f7cc1a3d356150",
      "43ae4d235831d835a3d2",
      "f58b987533f7811cddb5",
      "30c15b001b2e7ddfab51",
      "9e05ea255b567b122d35",
      "9dfcc401a9faee321b6c",
      "0d361b49754e60b4ae8d",
      "5e64f1c1c2d69142c4df",
      "2fbd2ca170283e77894e",
      "e98fa7663941a67f486a",
      "a3148c7e2a9c6acb044f",
      "50a3ab19233d314672ba",
      "6c010b47417483c46032",
      "71a19646e895bcdcb16a",
      "1ba74f7c9f4062ff47a0",
      "7080ed90ced41c416996",
      "4b3d96f8093aa2d22e65",
      "5257258a8a5235dbb0b9",
      "30676da4ec1c066a1ee8",
      "f51116253d27afe9d256",
      "2eb14f30191727202ddc",
      "557097cc5612d67d9d89"
    ],
    "META": [
      "fafb7d47f16722e5080c",
      "3d728115c41bf25862e8",
      "466f9ee0c32d473cfc5a",
      "7bb18acab33905eff545",
      "92e3fb02dfcafc94dbcc",
      "e49085bd8ed66865a234",
      "b0d2e0fb07832da34c92",
      "4ba24032ee1f5703f009",
      "ca7d1bd568ad7eaa811f",
      "fb99bdb450b2b46e5dfc",
      "b9803e02cb6f518c0e90",
      "b8481e801c3e280ef2d7",
      "914e69549026c68ad1ca",
      "e54276c77bf5a65fa6b4",
      "4f6b5fa2e76bc07ea178",
      "bde5f6a542d07e7a52b7",
      "dd1e9e16c090d8e891bf",
      "50a3ab19233d314672ba",
      "c233d5b6254ea46886ac"
    ],
    "MRVL": [
      "9586df933e07fa8661dc",
      "f0f797705dbe6905daee",
      "f8960fa3918e56ecb327",
      "7907349f89af6f8ad0fd",
      "02d7937e27f8999977f5",
      "afb402a5cd0dec1088a9",
      "41da8439d04ede29eb98",
      "6980c5957876f0f27997",
      "a552c1ea259283e372cd",
      "e6840b097dc0e30cb700"
    ],
    "INTC": [
      "d4c501b3ce235c9109f7",
      "7bb18acab33905eff545",
      "67caf8abc8fd5925144a",
      "8c01a1d7f0d9621b4408",
      "22c7e6df1870c0ea0ba0",
      "f505606a97ed76c3f864",
      "e35ec8f82f9785497c17",
      "bb2677c9783e279722b8",
      "47c6a97397cde014297f",
      "50a3ab19233d314672ba",
      "4b3d96f8093aa2d22e65",
      "f51116253d27afe9d256"
    ],
    "MSFT": [
      "b6a98167a10e98033b12",
      "2715cfe5210475a2c844",
      "62f61c65830dc9a0d9e4",
      "6fe9bf8765596c2fc91f",
      "be084e07878e681f27ba",
      "fb99bdb450b2b46e5dfc",
      "b9803e02cb6f518c0e90",
      "cd1afb2c4781c57937fd",
      "14f536041b0a07af25f0",
      "22c7e6df1870c0ea0ba0",
      "f505606a97ed76c3f864",
      "eb145d717ac5dd655bbb",
      "43ae4d235831d835a3d2",
      "0d0506cdcdcdb766dc11",
      "2e8859e2269bd8b0773b",
      "7e82c424f51a5959b7cf",
      "e24865a84ea3dc3e655a",
      "4b3d96f8093aa2d22e65",
      "5257258a8a5235dbb0b9",
      "ea0ff5e0b26e7af92471",
      "9ebb6842076f3bd2f485",
      "dd738c50090aa0daac83",
      "30676da4ec1c066a1ee8",
      "2eb14f30191727202ddc",
      "557097cc5612d67d9d89"
    ],
    "VRT": [
      "fb865f74703464c3c0c8",
      "817417e4d5ab8b742416"
    ],
    "VST": [
      "7b3e9e5cc4ffcc5f687e",
      "28c8042057734a802da2",
      "d95500913fef736dfcdd"
    ],
    "AMAT": [
      "f8c068711ca1681a671f",
      "20e01a6a73817f80a5c4",
      "c4870f4af94d9b2f626c",
      "2d15097ac66ade80d47d"
    ],
    "CRM": [
      "0f529d798caf53c3058c",
      "694e011482317996f8df",
      "836ea9a3b1bd015916a1",
      "c1260d8fe06d711f9648",
      "1e633b125ee50754bf15",
      "c4a03476521ce24a8790",
      "3182bfd4f6c5bc2235e6"
    ],
    "KLAC": [
      "cac8339bb793903665cf",
      "c31f3c478b43f6454682"
    ],
    "COHR": [
      "7249f204d0982c0c741e",
      "4301db55de7ffc62c9ac",
      "a4117deabec311576612"
    ],
    "AAPL": [
      "16eef998e091f775eefb",
      "2ad35ec884648fe43904",
      "e227c2a28a84461b826f",
      "5b03345b136391e8da73",
      "ca7d1bd568ad7eaa811f",
      "b9803e02cb6f518c0e90",
      "2287fdaee8f16e55db50",
      "eb145d717ac5dd655bbb",
      "8f6e0a20ed1656796873",
      "c430bebbbe48e6fb56e9",
      "e98fa7663941a67f486a",
      "2f81646004e88ec5966e",
      "b0e1dfc65d4e4ee79a14",
      "69f8fefe2d65fe5b31bd",
      "92027e423385283d1c08",
      "dd738c50090aa0daac83",
      "30676da4ec1c066a1ee8"
    ],
    "WDC": [
      "2ad35ec884648fe43904",
      "2287fdaee8f16e55db50",
      "a98c57babacea29b03ac"
    ],
    "BE": [
      "0b033bf14b0854fa244e",
      "28a340c788570d1983e5",
      "0d361b49754e60b4ae8d"
    ],
    "STX": [
      "ce65f19dd9553fc014ef"
    ],
    "ARM": [
      "02d7937e27f8999977f5",
      "afb402a5cd0dec1088a9",
      "6980c5957876f0f27997"
    ],
    "ANET": [
      "73467221e2717d0aced6",
      "dd4481905d9fd0dc1ff7",
      "a8dc9b05efe43b0a8fde"
    ],
    "CEG": [
      "d95500913fef736dfcdd",
      "817417e4d5ab8b742416"
    ],
    "FIX": [
      "0b44214ea9cd3bfef913"
    ],
    "PWR": [
      "4c09b3e0479553946c91"
    ],
    "LRCX": [
      "631b87b8af24698ee33c"
    ]
  }
};
