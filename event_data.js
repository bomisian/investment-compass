// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1794612828.1440294,
  "events": [
    {
      "id": "2f1db9d97810782c6765",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MSFT",
      "relatedTickers": [
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
      "headline": "Cerebras stock surges on Microsoft deal: What it means for Nvidia",
      "headlineKo": "Microsoft 거래로 Cerebras 주가 급등: Nvidia에 미치는 영향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b749c047c398794b579255970d097d582b48edc9bbfde7b80ffe7cacfa983674",
        "publishedAt": 1794605483,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cerebras stock surges on Microsoft deal: What it means for Nvidia",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "168c534aab8b673f0cae",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
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
      "headline": "Nvidia Board Reportedly Approached Arm CEO Rene Haas To Succeed Jensen Huang As Top Execs Threaten To Quit, Join SpaceX Terafab",
      "headlineKo": "Nvidia 이사회는 최고 경영진이 사임하겠다고 위협하자 Arm CEO Rene Haas에게 Jensen Huang의 뒤를 잇기 위해 접근한 것으로 알려졌으며 SpaceX Terafab에 합류했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ffce57387151605f31c31dec30ccab6b64638df5f723592232d7aaee8ff443b8",
        "publishedAt": 1794601983,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 이사회는 Arm CEO Rene Haas에게 접근하여 최고 경영진이 사임하겠다고 위협함에 따라 Jensen Huang을 계승하고 SpaceX Terafab AI 에이전트에 합류할 것이라고 밝혔습니다.",
        "엔비디아 이사회는 Arm CEO 르네 하스(Rene Haas)에게 젠슨 황(Jensen Huang)의 뒤를 잇기 위해 접근한 것으로 알려졌습니다. 최고 경영진이 사임하겠다고 위협하자 테라파브 하스(Terafab Haas)는 황의 직위에 대해 평가를 받고 있는 여러 후보자 중 하나라고 FT는 보도했습니다.",
        "Arm Holdings CEO 르네 하스(Rene Haas)가 나스닥 마켓사이트에서 오프닝 벨 크리스탈과 함께 포즈를 취하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.07%, 0.69%, 1.65% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.07%, 0.69%, 1.65% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "cb5768adb4deab06d036",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Applied Materials earnings analysis: questions answered and next catalysts",
      "headlineKo": "Applied Materials 수익 분석: 질문에 대한 답변 및 다음 촉매제",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7352deb76d5683d150fce612ac43b926073c8dab33f432b0ab29a9cefe16a18e",
        "publishedAt": 1794601930,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials earnings analysis: questions answered and next catalysts",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "4b56e2e5e570b05f40f6",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
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
      "headline": "Arm Stock Took a Hit Because Investors Fear Nvidia Might Poach Its CEO. Is It Time to Sell?",
      "headlineKo": "Arm Stock은 Nvidia가 CEO를 빼앗을 수 있다는 투자자들의 두려움 때문에 타격을 입었습니다. 매도할 시간인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec99f47ed31296d6edccdaf1337ca73814571a143e579d15cc92ee7e58d84cdf",
        "publishedAt": 1794601894,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm Stock은 Nvidia가 CEO를 빼앗을 수 있다는 투자자들의 두려움 때문에 타격을 입었습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,561.67 -0.4% -30.73 DJI 52,347.55 +0.1% +50.46 NASDAQ 25,136.27 -0.9% -229.82 비트코인 $68,245.00 -4.5% -$3,205.55 SPCX $139.11 -0.",
        "Haas는 Nvidia에서 7년 동안 근무하며 Arm의 데이터 센터 및 자체 칩 개발을 이끌었습니다. Arm의 연례 보고서는 Haas가 그에게 \"특히 의존적\"이라고 밝혔습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4.63%, 5%, $189 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 4.63%, 5%, $189 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "c5cf267168a53a313623",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Outage Disrupts Oil Trader Data and Dealmaking",
      "headlineKo": "Microsoft 중단으로 인해 석유 거래자 데이터 및 거래 중단",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a19e232e9e83e4152a06617902936b962d81d93650184c14ba0bf7c15844d2c",
        "publishedAt": 1794600373,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Outage Disrupts Oil Trader Data and Dealmaking",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "4ca1d3af8c6e420bfa65",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
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
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SpaceX’s Big Day: A Historic Starship Launch, a Tesla Merger Under Scrutiny, and a $74 Billion AI Bet",
      "headlineKo": "SpaceX의 중요한 날: 역사적인 우주선 발사, 조사 중인 Tesla 합병, 740억 달러 규모의 AI 베팅",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d101675df9355612ed36c32744d8ae048277bdaa71234cfcbe33ab3f90f0e800",
        "publishedAt": 1794599102,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $74 billion, 0.59%, 1.82%, 14 times, $24 billion, $50 billion, $1,000, $35 Billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 TSLA의 사업과 관련된 'SpaceX’s Big Day: A Historic Starship Launch, a Tesla Merger Under Scrutiny, and a $74 Billion AI Bet' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ddc670cc48a34e5ba62a",
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
      "headline": "Wall Street Is Writing Off Nvidia Stock. Here's Why That's a Mistake.",
      "headlineKo": "월스트리트가 Nvidia 주식을 상각하고 있습니다. 이것이 실수인 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f25b50d7e18813c5b771a8af6168f7a90d2427c93ce1bcc134deb531f9c209f",
        "publishedAt": 1794598620,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트가 Nvidia 주식을 상각하고 있습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,561.67 -0.4% -30.73 DJI 52,347.55 +0.1% +50.46 NASDAQ 25,136.27 -0.9% -229.82 비트코인 $68,175.00 -4.6% -$3,282.22 SPCX $139.11 -0.",
        "Nvidia ( NVDA -2.01% ) 주가는 현재 많은 역풍에 직면해 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.01%, 10%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.01%, 10%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cf9a3ccfaf7be3ad23dd",
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
      "headline": "Tesla and SpaceX Move Closer to a Deal. What Would Tesla Shareholders Get?",
      "headlineKo": "Tesla와 SpaceX가 거래에 가까워졌습니다. Tesla 주주들은 무엇을 얻게 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c26448ea2b3abd4f57091605f3b1613a54241a954626ca2dd9c6a2ea6240aec3",
        "publishedAt": 1794598263,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla and SpaceX Move Closer to a Deal. What Would Tesla Shareholders Get?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "826c841dd9415a11b0d9",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Veteran Analyst Downgrades Nvidia Stock Ahead of Earnings",
      "headlineKo": "베테랑 분석가가 수익보다 Nvidia 주식을 하향 조정함",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44de02eaf3613e73b04dc5d0b3da0d7004775b15d69ae88e7fba83ae20e7447e",
        "publishedAt": 1794598187,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Veteran Analyst Downgrades Nvidia Stock Ahead of Earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "016a6101e7f9e4673f0a",
      "schemaVersion": 1,
      "eventType": "competitor_supply_contract",
      "eventLabel": "경쟁사 공급 계약",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "How Investors May Respond To Broadcom (AVGO) As Nvidia Rivals Gain Attention",
      "headlineKo": "Nvidia의 경쟁사들이 주목받는 가운데 투자자들이 Broadcom(AVGO)에 어떻게 반응할지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0363e5581dfbd1d407638bc38557c6f2346527c31b99a2b69e736a7dd9816b81",
        "publishedAt": 1794597037,
        "collectedAt": 1794604614.6422281
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
        "이 기사는 AVGO의 사업과 관련된 'How Investors May Respond To Broadcom (AVGO) As Nvidia Rivals Gain Attention' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a95124eddfb00804354e",
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
      "headline": "Amazon Prime and Uber Eats partnership: $0 delivery fees on $25+ orders for Prime members",
      "headlineKo": "Amazon Prime과 Uber Eats 파트너십: Prime 회원의 경우 $25 이상 주문 시 배송비 $0",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=54c9e65c2148f98694aec210e32a8507d2a2d62131fc006202a05b6037e49f34",
        "publishedAt": 1794596613,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon Prime and Uber Eats partnership: $0 delivery fees on $25+ orders for Prime members",
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
      "id": "cb6e6934b0feec954a28",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR",
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
      "headline": "AXTQ 2X Short AXT ETF Surges 15% as AXT Retraces From 147% Year-to-Date Rally; Coherent Drops 8%",
      "headlineKo": "AXTQ 2X 쇼트 AXT ETF, AXT가 연초 대비 147% 상승한 후 하락하며 15% 급등. Coherent는 8% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=baa4debb5bb231c3f00245d0cd0b925b5e079df88f29b2f7d0e6bd67944185d3",
        "publishedAt": 1794596584,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AXTQ 2X 쇼트 AXT ETF, AXT가 연초 대비 147% 상승한 후 하락하며 15% 급등. Coherent는 8% 하락 - 24/7 Wall St.",
        "콘텐츠로 건너뛰기 ❚❚ ● 시장 개장 마감 시점 S&P 500 7,542.20 −0.83% 다우존스 52,235.00 −0.21% 나스닥 100 27,840.40 −1.71% 러셀 2000 2,783.78 −0.71% S&P 500 7,542.20 −0.83% 다우존스 52,235.00 −0.21% 나스닥 100 27,840.40 −1.71% 러셀 20",
        "X f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함되어 있을 수 있으며, Flywheel Publishing은 해당 링크를 통한 활동에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 15%, 147%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 15%, 147%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c438ffb8da2987366c71",
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
      "headline": "Why Advanced Micro Devices Stock Is Down Today",
      "headlineKo": "오늘 어드밴스드 마이크로 디바이시스(AMD) 주가가 하락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f11c1f8f2101715c5873ceea1d3bf30ccdb285de2a341848281f44b68876e63",
        "publishedAt": 1794595502,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 어드밴스드 마이크로 디바이시스(AMD) 주가가 하락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ 주식 자문 + ---% The Motley Fool 가입 S&P 500 7,566.78 -0.3% -25.62 DJI 52,335.40 +0.1% +38.31 NASDAQ 25,171.81 -0.8% -194.28 비트코인",
        "AMD는 고객들이 AI 칩 주문을 엔비디아의 경쟁사로 전환할 것이라는 전망에 힘입어 초기에 상승세를 보였지만, 금요일에는 투자자들이 보다 광범위한 산업적 위험에 대해 더 우려하는 것으로 보였으며, 큰 상승세 이후 일부 차익 실현이 영향을 미쳤을 가능성이 있습니다.",
        "저는 엔비디아 스캔들이 특히 의회나 연방 규제 당국이 엔비디아 임원들이 수출 통제를 위반하여 칩이 중국으로 유출되고 있음을 알고 있었다고 판단할 경우, 더 오래 지속되는 영향을 미칠 수 있다고 생각합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8.34%, 10.8%, 1.97% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8.34%, 10.8%, 1.97% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1519d7c3f927faf82036",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Cerebras Stocks Jump 11.70% After Raising Outlook and Confirming Microsoft Cloud Deal",
      "headlineKo": "Cerebras 주식은 전망을 높이고 Microsoft 클라우드 거래를 확인한 후 11.70% 상승했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ce6a5b1f54ffc24b491efec62bce988fdf9da0a4396535f8bb6481138e42703",
        "publishedAt": 1794595472,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cerebras 주식은 전망을 높이고 Microsoft 클라우드 거래를 확인한 후 11.70% 상승했습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "e41a652e10ee4e445e35",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "QQQ",
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
      "headline": "Why Broadcom Stock Dove Today",
      "headlineKo": "오늘 브로드컴 주가가 하락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=506547b1529a3602bac79bf3bf21a934e913afb39ba30712c4283432daadbb22",
        "publishedAt": 1794594006,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 Broadcom 주가가 하락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool 가입 S&P 500 7,566.78 -0.3% -25.62 DJI 52,335.40 +0.1% +38.31 NASDAQ 25,171.81 -0.8% -194.28 비트코인 $68,537.00 -3.",
        "Anthropic과 OpenAI는 아직 자립할 수 없으며, 애널리스트는 이에 시간이 걸릴 것이라고 말합니다.",
        "이러한 위험은 이미 Broadcom의 기업 가치에 반영되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4.93%, 7.3%, 5.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.93%, 7.3%, 5.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3b377d4f0bb0672034ab",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Department of Veterans Affairs and Department of War Go-Live on Oracle Health Information Network to Expand Nationwide Health Information Exchange",
      "headlineKo": "전미 보건 정보 교환 확대를 위해 Oracle Health Information Network를 가동하는 재향군인부 및 국방부",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2b20ad90810e14a6524143bd7a6516cc562823cc707b6ee1752cb5996d0ec5c2",
        "publishedAt": 1794593820,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Department of Veterans Affairs and Department of War Go-Live on Oracle Health Information Network to Expand Nationwide Health Information Exchange",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "7f951137c36c4f57f727",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMAT Q4 Earnings Call Highlights AI Demand and 2027 Growth Outlook",
      "headlineKo": "AMAT Q4 수익 회의에서 AI 수요와 2027년 성장 전망 강조",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b37669475ef6d0decd46eaf002bb5265c9be4d2771b5695b0b6c120c1292874",
        "publishedAt": 1794593640,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMAT Q4 Earnings Call Highlights AI Demand and 2027 Growth Outlook",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "77aabbd514c540fec08d",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Marvell Is Still Up 81% This Year. Can MRVL Stock Hit $300 by 2029?",
      "headlineKo": "Marvell은 올해에도 여전히 81% 상승했습니다. MRVL 주가가 2029년까지 300달러에 도달할 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=286e904a40aa79cfed3a7da4161b7d729afbd57606cb0dc5a9ab0c3c796a3db9",
        "publishedAt": 1794592466,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "콘텐츠로 건너뛰기 ❚❚ ● 시장 개장 마감 시 S&P 500 7,542.20 −0.83% 다우존스 52,235.00 −0.21% 나스닥 100 27,840.40 −1.71% 러셀 2000 2,783.78 −0.71% S&P 500 7,542.20 −0.83% 다우존스 52,235.00 −0.21% 나스닥 100 27,840.40 −1.71% 러셀 20",
        "작성: David Moadel 게시일: 2026년 11월 13일 오후 12시 54분(미 동부 표준시) · 읽는 데 4분 소요 마켓 무버 데스크.",
        "X f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함되어 있을 수 있으며, Flywheel Publishing은 해당 링크를 통한 활동에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 81%, $300, $153.93 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 81%, $300, $153.93 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e8310e9d18ef91719718",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM"
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
      "headline": "ARM Stock Gains 4% Since Q2 Earnings: Is it a Buy or Hold Now?",
      "headlineKo": "ARM 주식은 2분기 실적 이후 4% 상승: 지금 매수인가, 아니면 보유인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1880b56be0fc170636534cb31bb66cd88d1c9fc8522fed2017292ecf0bb6bc17",
        "publishedAt": 1794591660,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ARM 주식은 2분기 실적 이후 4% 상승: 지금 매수인가, 아니면 보유인가?"
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
          "ticker": "ARM",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "76c22d81833591d74c12",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Applied Materials Stocks Fall 2.58% Despite 53% Revenue Jump and Upbeat Outlook",
      "headlineKo": "어플라이드 머티어리얼즈 주가 53% 매출 증가와 낙관적인 전망에도 불구하고 2.58% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0abe9ecf2d988869810fc67a24664d86b97be84438cc658aabd60994a3adbb1a",
        "publishedAt": 1794591209,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티어리얼즈 주가 53% 매출 증가와 낙관적인 전망에도 불구하고 2.58% 하락"
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
      "id": "c04f0da99119e44349ba",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "NVDA",
        "PLTR",
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
      "headline": "The Same $10,000 in Nvidia and Palantir Could Produce Very Different Results by 2030",
      "headlineKo": "Nvidia와 Palantir의 동일한 10,000달러가 2030년까지 매우 다른 결과를 낳을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9950a9f19f7c7216fa1c90b5bf2705b37360226e318ee1c144707e5340f5b965",
        "publishedAt": 1794591206,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia와 Palantir의 동일한 10,000달러가 2030년까지 매우 다른 결과를 낳을 수 있습니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,534.60 −0.93% Dow Jones 52,196.50 −0.28% Nasdaq 100 27,796.30 −1.87% Russell 2000 2,782.18 −0.77% S&P 500 7,534.60 −0.93% 다우존스 52,196.50 −0.28% 나스닥 100 27,796.30 −1.87% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 당사의 스폰서 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $182.23, $154.99. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $182.23, $154.99. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5767a8cc6af371ea1b18",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "NVDA"
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
      "importance": "low",
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
      "headline": "Broadcom Stocks Fall 4.59% as 24% Weekly Rally Cools Before Nvidia Results",
      "headlineKo": "Nvidia 실적 발표를 앞두고 주간 24% 상승세가 주춤하면서 Broadcom 주가가 4.59% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=357c3bf5c546975208750c1697a859bbfd28a7ed7df018edb1c01711b126bff3",
        "publishedAt": 1794590537,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom Stocks Fall 4.59% as 24% Weekly Rally Cools Before Nvidia Results",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AVGO의 사업과 관련된 'Broadcom Stocks Fall 4.59% as 24% Weekly Rally Cools Before Nvidia Results' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "AVGO",
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
      "id": "4c31fd51efbea820fe5e",
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
      "headline": "The S&P 500 Has a “Pure Value” Version. RPV Gives Its Cheapest Stocks the Biggest Weights",
      "headlineKo": "S&P 500에는 \"순수한 가치\" 버전이 있습니다. RPV는 가장 저렴한 주식에 가장 큰 가중치를 부여합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22b25eb222e660d74097579353f32a966fc170d1bebc88c5494c348b06160ce6",
        "publishedAt": 1794589382,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500에는 \"순수한 가치\" 버전이 있습니다.",
        "RPV는 가장 저렴한 주식에 가장 큰 가중치를 부여합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,534.60 −0.93% Dow Jones 52,196.50 −0.28% Nasdaq 100 27,796.30 −1.87% Russell 2000 2,782.18 −0.77% S&P 500 7,534.60 −0.93% 다우존스 52,196.50 −0.28% 나스닥 100 27,796.30 −1.87% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.93%, 0.28%, 1.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.93%, 0.28%, 1.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e192b615a1cb4c92de4c",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "AMZN",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기 비용 절감 / 중기 FCF·부채 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle's $125 billion debt raises a major AI warning",
      "headlineKo": "오라클의 1,250억 달러 부채가 불러온 중대한 AI 경고",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8711b52371d5b59a1323abaca35dedd6df6aabb97c69d51c95e1bc38b604c087",
        "publishedAt": 1794588981,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클이 AI 데이터센터 투자를 유지하면서 인건비·조직 비용을 줄이려는 내용입니다.",
        "AI 인프라 확장에 CAPEX·장기 계약·부채 부담이 함께 커질 수 있습니다.",
        "감원이 실제 비용 절감으로 이어지는지, 아니면 현금창출력 압박의 신호인지는 공시와 실적 확인이 필요합니다."
      ],
      "marketInterpretation": [
        "오라클의 핵심 질문은 AI 매출 증가 속도가 CAPEX·부채 증가 속도를 앞서는지입니다.",
        "비용 절감은 영업마진과 FCF를 방어할 수 있지만, 반복 감원과 신용스프레드 상승은 재무 부담을 시사할 수 있습니다.",
        "AI 수요가 강해도 자금조달 비용이 커지면 적정 PER과 주가 변동성이 달라집니다."
      ],
      "aiInference": [
        "이 기사는 ORCL의 사업과 관련된 'Oracle's $125 billion debt raises a major AI warning' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "오라클이 AI 투자를 포기하는 것이 아니라 다른 비용을 줄여 계속 투자하려는 모습입니다.",
        "사람 비용을 줄이면 단기 이익에는 도움이 되지만, 부채·CAPEX가 너무 빠르게 늘고 있다는 뜻일 수도 있습니다.",
        "다음 실적에서 매출보다 FCF와 부채를 반드시 같이 봐야 합니다."
      ],
      "whyItMatters": [
        "오라클의 핵심 질문은 AI 매출 증가 속도가 CAPEX·부채 증가 속도를 앞서는지입니다.",
        "비용 절감은 영업마진과 FCF를 방어할 수 있지만, 반복 감원과 신용스프레드 상승은 재무 부담을 시사할 수 있습니다.",
        "AI 수요가 강해도 자금조달 비용이 커지면 적정 PER과 주가 변동성이 달라집니다."
      ],
      "impacts": [
        {
          "ticker": "ORCL",
          "direction": "혼합·위험",
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재",
          "basis": "analysis"
        },
        {
          "ticker": "NVDA",
          "direction": "간접 긍정",
          "reason": "데이터센터 투자 지속 시 AI 컴퓨팅 수요 유지 가능성",
          "basis": "analysis"
        },
        {
          "ticker": "AMZN",
          "direction": "간접 확인",
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요",
          "basis": "analysis"
        }
      ],
      "watch": [
        "ORCL 클라우드 매출 성장률",
        "영업현금흐름·FCF와 CAPEX",
        "총부채·리스·이자비용",
        "신용등급·CDS 스프레드"
      ]
    },
    {
      "id": "6a8e2280bf215ff819f3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Is Going On With Intel Stock After Its Earnings Call?",
      "headlineKo": "실적 발표 후 인텔 주식에 무슨 일이 일어나고 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d96ae63c9fbd18e1bf24799a672c4103de289cf79daa2a77b103dbeaab7c6fb0",
        "publishedAt": 1794588795,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "실적 발표 후 인텔 주식에 무슨 일이 일어나고 있나요?"
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
      "id": "4670d0cc7f8c0c76dc24",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "LITE",
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
      "headline": "Marvell Stocks Fall 6.6% as Lumentum Deal Spread Widens to 18%",
      "headlineKo": "루멘텀 인수 계약 차액이 18%로 확대되면서 마벨 주가가 6.6% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57f7f3ee3c37dcbc79dc0e0b2e913061eae1255ffce119b01a2bfe263f879f59",
        "publishedAt": 1794588033,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Stocks Fall 6.6% as Lumentum Deal Spread Widens to 18%",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "130b72f439bb4a393879",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "AMD",
        "MRVL",
        "MU",
        "NVDA",
        "ORCL"
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell Stock Could Have a Bigger AI Opportunity Than Investors Realize",
      "headlineKo": "마벨 주식은 투자자들이 인식하는 것보다 더 큰 AI 기회를 가질 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=122231d393a43f1a9064274fb84730c7d6f6f83750c16fbf72fa3fc623da9415",
        "publishedAt": 1794587592,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $232.41., 37.69%, $168.80, $232.41, 90%, $18 billion, 39.04%, 91.03%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MRVL의 사업과 관련된 'Marvell Stock Could Have a Bigger AI Opportunity Than Investors Realize' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "6b9a8e56a2dd4390185d",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM",
        "QQQ",
        "SPY"
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
      "headline": "Qualcomm’s CEO Says Chipmakers Are in an “Extreme Shortage”",
      "headlineKo": "Qualcomm CEO는 칩 제조업체가 \"극심한 부족\"에 처해 있다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48306ae54db9acb50e0ede9aff8674d0c41c65dcb1b2b78501bf05444310e54c",
        "publishedAt": 1794587331,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm의 CEO는 칩 제조업체가 \"극심한 부족\"에 처해 있다고 말합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,543.60 −0.82% Dow Jones 52,277.00 −0.13% Nasdaq 100 27,848.80 −1.68% Russell 2000 2,785.83 −0.64% S&P 500 7,543.60 −0.82% 다우존스 52,277.00 −0.13% 나스닥 100 27,848.80 −1.68% 러셀 20",
        "© David Becker / Getty Images 2026년 11월 12일 목요일, Qualcomm(NASDAQ:QCOM | QCOM Price Prediction)의 CEO는 투자자 회의에서 칩이 부족하고 주식이 거의 반응하지 않는다고 말했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $177.14,, 0.32%, $189.5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $177.14,, 0.32%, $189.5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "5badf3ab2929ebb96d12",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "Applied Materials Outlook Supported by Memory, Advanced Packaging Demand as Margins Stay on Track, RBC Says",
      "headlineKo": "RBC는 마진이 유지되면서 메모리, 고급 패키징 수요가 뒷받침되는 응용 재료 전망을 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6dda212a3c150582ccd48749bfbae5349fd547eeef254053cc6d5c880168413b",
        "publishedAt": 1794585133,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials Outlook Supported by Memory, Advanced Packaging Demand as Margins Stay on Track, RBC Says",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AMAT의 사업과 관련된 'Applied Materials Outlook Supported by Memory, Advanced Packaging Demand as Margins Stay on Track, RBC Says' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "AMAT",
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
      "id": "dd68f8309af885eb62df",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "NVDA",
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
      "headline": "Apple Is the World’s Largest Company, and Nvidia Is Second. Here’s What $10,000 Invested in Each Today Could Be Worth by the End of Next Year.",
      "headlineKo": "Apple은 세계 최대 기업이고 Nvidia는 2위입니다. 오늘 매일 투자한 10,000달러가 내년 말까지 가치가 될 수 있는 금액은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=55d6dfc709424f81412bee1e3c70061407ad551045247a56fc058eceb03fdee6",
        "publishedAt": 1794584521,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple은 세계 최대 기업이고 Nvidia는 2위입니다.",
        "오늘 매일 투자한 10,000달러가 내년 말까지 가치가 될 수 있는 금액은 다음과 같습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,530.05 -0.8% -62.35 DJI 52,215.65 -0.2% -81.44 NASDAQ 25,001.74 -1.4% -364.35 비트코인 $68,595.00 -4.2% -$3,006.68 SPCX $138.46 -1."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, 3.57%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, 3.57%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7a235593f35d678ae155",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "UBS Cut Its Applied Materials Target After a Record Quarter. It Still Sees 68% Upside",
      "headlineKo": "UBS는 기록적인 분기 이후 Applied Materials 목표를 삭감했습니다. 여전히 68%의 상승 여력이 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6a5f1b6b22d7a0fe01956b3e97aa5f3b8a6144a60f24cd95c0dc173de76236bf",
        "publishedAt": 1794584035,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "UBS는 기록적인 분기 이후 Applied Materials 목표를 삭감했습니다.",
        "여전히 68% 상승 여력 | TIKR.com General Investing UBS는 기록적인 분기 이후 Applied Materials 목표를 삭감했습니다.",
        "여전히 68% 상승 가능성 있음 Bobby Sankhagowit • 4분 읽기 검토자: David Hanson 마지막 업데이트 2026년 11월 13일 PhonlamaiPhoto의 @Kittipong Jirasukhanont Canva를 통한 @Iulian Catalin의 이미지 Canva를 통한 @Iulian Catalin의 이미지 주요 내용 UBS 앱 컷"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 68%, $640, $695 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 68%, $640, $695 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4edccf096d009e2221dd",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "AMD",
        "ANET",
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
      "headline": "Cisco Slides 5% Despite Raising AI Outlook to $9 Billion as Citi Says Growth May Have Peaked; Hewlett Packard Enterprise Retreats 5%, Arista Falls 3%",
      "headlineKo": "Citi가 성장이 정점에 도달했을 수 있다고 말함에 따라 AI 전망을 90억 달러로 높였음에도 불구하고 Cisco는 5% 하락했습니다. Hewlett Packard Enterprise는 5% 후퇴, Arista는 3% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d3cb6c2fefad75449954d923c16671c86be7c0f7883f6fd76fec047d7202b7c",
        "publishedAt": 1794582789,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 5%, $9 Billion, 3%, $96.54,, $9 billion, 32%, $120, $139.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 ANET의 사업과 관련된 'Cisco Slides 5% Despite Raising AI Outlook to $9 Billion as Citi Says Growth May Have Peaked; Hewlett Packard Enterprise Retreats 5%, Arista Falls 3%' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "828644549b341b7c062e",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "VRT",
      "relatedTickers": [
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vertiv Holdings Co (VRT) Declined on Organic Growth Softness Despite Upgraded Full-Year Guidance",
      "headlineKo": "Vertiv Holdings Co(VRT), 연간 실적 전망치 상향 조정에도 불구하고 유기적 성장 둔화로 주가 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=35233b7a9b8a14e6fd4d43c9f3c525c8a93e2d67011f8615bb5592b5ab05c4ff",
        "publishedAt": 1794581639,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv Holdings Co (VRT) Declined on Organic Growth Softness Despite Upgraded Full-Year Guidance",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 VRT의 사업과 관련된 'Vertiv Holdings Co (VRT) Declined on Organic Growth Softness Despite Upgraded Full-Year Guidance' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "VRT",
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
      "id": "f4c97fac290d33ffe3bd",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "PLTR",
      "relatedTickers": [
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
      "headline": "Cathie Wood Is Buying the CoreWeave Dip and Selling Palantir",
      "headlineKo": "Cathie Wood는 CoreWeave Dip을 구매하고 Palantir를 판매합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c173865a8ac6aea2a795dce296614328bbc05d8657133ba06949b46840a79ac5",
        "publishedAt": 1794580670,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cathie Wood는 CoreWeave Dip을 구매하고 Palantir를 판매합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,534.60 −0.93% Dow Jones 52,196.50 −0.28% Nasdaq 100 27,796.30 −1.87% Russell 2000 2,782.18 −0.77% S&P 500 7,534.60 −0.93% 다우존스 52,196.50 −0.28% 나스닥 100 27,796.30 −1.87% 러셀 20",
        "ARK Invest CEO인 Cathie Wood는 최근 투자자들을 대상으로 한 연설에서 논의된 바와 같이 메모리 칩 추세에 대한 통찰력을 공유하면서 상승 궤적이지만 '악순환'을 지적합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $16 million, 6.86%, $56.60. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $16 million, 6.86%, $56.60. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "f0cd70a301ee2f6cadb4",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "GOOGL",
        "MSFT",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Not Apple. Not Microsoft. This \"Magnificent Seven\" Stock Is My Top Tech Buy for 2027.",
      "headlineKo": "애플이 아닙니다. 마이크로소프트가 아닙니다. 이 \"매그니피센트 세븐\" 주식은 2027년 나의 최고 기술 매수 종목입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=08fde62ecab8d73fe2a887f9c076f2f98435e8373f34df78f4b6eee9a8159e8e",
        "publishedAt": 1794579900,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 \"매그니피센트 세븐\" 주식은 2027년 나의 최고 기술 매수 종목입니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,522.26 -0.9% -70.14 DJI 52,194.60 -0.2% -102.49 NASDAQ 24,951.17 -1.6% -414.92 비트코인 $68,595.00 -4.2% -$3,006.68 SPCX $137.92 -1",
        "3분기에 Google Cloud 수익이 103% 급증하고 영업 이익이 3배 증가한 111억 달러로 지출이 이미 성과를 거두고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 103%, $11.1 billion, 0.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 103%, $11.1 billion, 0.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5b096fb9721e0ee2c678",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "PWR",
      "relatedTickers": [
        "PWR"
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
      "headline": "Should Investors Buy Quanta Stock After Impressive Q3 Earnings?",
      "headlineKo": "투자자들은 인상적인 3분기 수익을 얻은 후 Quanta 주식을 구매해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=722f80f26111e3533d6701c0b1a0c298ba5b8505ecbf072c34f89c894bd85851",
        "publishedAt": 1794579240,
        "collectedAt": 1794612816.8227484
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Should Investors Buy Quanta Stock After Impressive Q3 Earnings?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "PWR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PWR에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "258376db8c12e95b78d9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Applied Materials sees semiconductor systems growth above 40% as AI demand drives record results",
      "headlineKo": "어플라이드 머티어리얼즈, AI 수요로 기록적인 결과 달성하면서 반도체 시스템 성장 40% 이상 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d91d450928fa2172f17f0506574b6882cb446f0934c3ea49abc489f8e79c76e4",
        "publishedAt": 1794578700,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티어리얼즈, AI 수요로 기록적인 결과 달성에 따라 반도체 시스템 성장 40% 이상 예상 | NASDAQ:AMAT, XETRA:AP2 무엇을 찾고 계십니까?",
        "회사 뉴스 일치하는 모든 회사 보기 일치하는 모든 뉴스 보기 Tech Hardware & Electrical Equipment 작성자: Proactive 편집자: Angela Harmantas 고지 사항 투자 조언 없음 이 콘텐츠에 대해 편집 표준 및 정책 공유 a",
        "우리의 모든 콘텐츠는 경험이 풍부하고 자격을 갖춘 뉴스 저널리스트 팀에 의해 독립적으로 제작됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 40%, $10.41 billion, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 40%, $10.41 billion, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "6090e97e5aee640cdb7d",
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
      "headline": "AMAT Stock Gets Slew Of Price Target Cuts Even After Beat-And-Raise Quarter: Morningstar Calls AI Worries ‘Overblown’",
      "headlineKo": "AMAT 주식은 분기 상승 이후에도 가격 목표 인하를 많이 받았습니다: Morningstar는 AI에 대한 우려가 '과대'라고 부릅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8ade953d71c6e2a52f818edeabf4d2fbaffadf062bb16e7684dca616cb51f65",
        "publishedAt": 1794578602,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMAT 주식은 분기 상승 이후에도 가격 목표 인하를 많이 받았습니다: Morningstar는 AI에 대한 우려가 '과대'라고 부릅니다."
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
      "id": "de018708af5430ba3d6d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMAT Q4 Earnings Beat on Record Semiconductor Systems Sales",
      "headlineKo": "AMAT Q4 실적이 반도체 시스템 판매 기록을 앞질렀습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ae6bab2f6142362561125f936a47ceb49b40ad3c5aedd262bd3d8295c3d7ede",
        "publishedAt": 1794578400,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMAT Q4 실적이 반도체 시스템 판매 기록을 앞질렀습니다."
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
      "id": "ab39d1d26b0d2c98528f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "GOOGL",
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
      "headline": "Nvidia has lost nearly $2tn in value. What could it be worth without Jensen Huang?",
      "headlineKo": "Nvidia는 거의 2조 달러의 가치를 잃었습니다. Jensen Huang 없이는 어떤 가치가 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0846d361d1711cc6242dd4714c9b91c724c329b376e5c8c2cf57bc1b9c514a67",
        "publishedAt": 1794577988,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia는 거의 2조 달러의 가치를 잃었습니다.",
        "Jensen Huang 없이는 어떤 가치가 있을까요?",
        "| Euronews 광고 Doloresz Katanich 게시일: 2026년 11월 13일 - 14:53 GMT+1 댓글 공유 Google에 Euronews 추가 공유 Facebook Twitter Flipboard Reddit 보내기 Linkedin 메신저 전보 VK Bluesky 스레드 Whatsapp Nvidia에는"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $2, $1.8, €1.6 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2, $1.8, €1.6 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "37a39e83bab3f6a8c93c",
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
      "headline": "AMD’s Path to $700 Just Got Much Easier as Enterprise and Hyperscaler Diversification Tailwinds Rise",
      "headlineKo": "AMD의 700달러 달성 경로는 엔터프라이즈 및 하이퍼스케일러 다각화의 부추김에 따라 훨씬 더 쉬워졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89c2da0e3acaa0c8d371710e6eceff1cedd4c5d6b8c066fb20831f07659fb134",
        "publishedAt": 1794577508,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔터프라이즈 및 하이퍼스케일러 다각화 순풍이 부흥하면서 700달러를 향한 AMD의 길은 훨씬 더 쉬워졌습니다. - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,568.60 −0.49% Dow Jones 52,327.80 −0.03% Nasdaq 100 28,010.40 −1.11% Russell 2000 2,785.22 −0.66% S&P 500 7,568.60 −0.49% 다우존스 52,327.80 −0.03% 나스닥 100 28,010.40 −1.11% 러셀 20",
        "AMD의 700달러 목표 가격은 고급 데이터 센터 인프라를 배경으로 눈에 띄게 표시되어 회사의 상당한 성장 전망을 반영합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $700, $585.30,, 64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $700, $585.30,, 64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a770f525d4ebc16f2bb7",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Jensen Huang is Out as CEO, Nvidia Down 25% in a Month: Wall Street’s Highest Target Price Reaffirmed as Major Desks Slash Prices, Predicting 210% Gains",
      "headlineKo": "Jensen Huang CEO 사임, Nvidia는 한 달 만에 25% 하락: 주요 데스크 가격 인하로 월스트리트의 최고 목표 가격이 재확인되어 210% 상승 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b5dde4a37da7d0c567d69a791bb7c605674f6747f9ccc8dbd2310df87c40d686",
        "publishedAt": 1794577500,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang CEO 사임, Nvidia는 한 달 만에 25% 하락: 주요 데스크 가격 인하로 월스트리트의 최고 목표 가격이 재확인되어 210% 상승 예상"
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7340ed818a62262bf419",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "AMD",
        "NVDA",
        "PLTR"
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AI Stocks Bounce, but Leadership Rotates to AMD and Palantir as Nvidia Lags Into Earnings",
      "headlineKo": "AI 주식은 반등하지만 Nvidia가 수익에 뒤처지면서 리더십은 AMD와 Palantir로 교체됩니다.",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=1e349471e4862d0bea6f8ca5c071c4f224b6bde2b6dd626a589ab4e800f21f7b",
        "publishedAt": 1794576969,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 주식은 반등하지만 Nvidia가 수익에 뒤처지면서 리더십은 AMD와 Palantir로 교체됩니다."
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
      "id": "0d296982db813c310c57",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "EME",
      "relatedTickers": [
        "EME"
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
      "headline": "EMCOR Group, Inc. Announces Agreement to Acquire P1 Construction, LLC",
      "headlineKo": "EMCOR Group, Inc., P1 Construction, LLC 인수 계약 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43e26c090b747550f1bcb8d5abe7521c41399da1de62be911bd9739a50199b1b",
        "publishedAt": 1794576600,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR Group, Inc. Announces Agreement to Acquire P1 Construction, LLC",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "EME",
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
      "id": "371ce756aca3bdf9206e",
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
      "headline": "Tesla and SpaceX Could Announce a Merger as Soon as December",
      "headlineKo": "Tesla와 SpaceX는 이르면 12월에 합병을 발표할 수도 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=578295c670d4f442ea46e4284a5f399a579dae2bbea4dd7e98560691f1c06f04",
        "publishedAt": 1794575282,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla와 SpaceX는 빠르면 12월에 합병을 발표할 수 있습니다 - 연중무휴 월스트리트",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,528.40 −1.02% Dow Jones 52,209.20 −0.26% Nasdaq 100 27,729.60 −2.11% Russell 2000 2,775.12 −1.02% S&P 500 7,528.40 −1.02% 다우존스 52,209.20 −0.26% 나스닥 100 27,729.60 −2.11% 러셀 20",
        "© jetcityimage / iStock Editorial via Getty Images Elon Musk의 양대 기업인 Tesla(NASDAQ:TSLA | TSLA Price Prediction)와 SpaceX(NASDAQ:SPCX)가 합병을 앞두고 있는 것으로 알려졌습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.9%, $397.45,, 1.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.9%, $397.45,, 1.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "279432faafdc36443f21",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "What's Wrong With Amazon.com (AMZN) Stock, and Is It a Buy in November?",
      "headlineKo": "Amazon.com(AMZN) 주식에 무슨 문제가 있나요? 11월 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2509ff4c2768fdd9df1d19f88f9c5af252f5edb81be5f4d71c60defb6aa507ed",
        "publishedAt": 1794574620,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon.com(AMZN) 주식에 무슨 문제가 있나요? 11월 매수인가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,508.23 -1.1% -84.17 DJI 52,083.70 -0.4% -213.39 NASDAQ 24,944.48 -1.7% -421.61 비트코인 $68,575.00 -4.0% -$2,836.19 SPCX $137.90 -1",
        "최근 수익은 전년 대비 14% 증가했으며 클라우드 컴퓨팅 수익은 39% 증가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 14%, 39%, 0.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 14%, 39%, 0.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "ca824d80e73d90c668c1",
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
      "headline": "Has Buying The Dip In Salesforce Stock Paid Off?",
      "headlineKo": "Salesforce 주식 하락세를 매수한 것이 성과를 거두었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef409aa6212432facc7993f590e7d191e9f45e7fe375cf688e04bc2719f5d143",
        "publishedAt": 1794571971,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce 주식 하락세를 매수한 것이 성과를 거두었나요?",
        "| Trefis Trefis Storylines는 Salesforce 주식 하락세를 매수하여 성과를 거두었습니까?",
        "2026년 11월 13일 · 작성자 Trefis Team CRM YTD -17.3% SPY YTD +11.6% QQQ YTD +12.3% CRM 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 17.3%, 11.6%, 12.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 17.3%, 11.6%, 12.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "28b2c001dff253188702",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SPY",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia Is 6.1% Of Your S&P 500 Fund. What Is Your Number?",
      "headlineKo": "Nvidia는 S&P 500 펀드의 6.1%를 차지합니다. 당신의 전화번호는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25c2f195710ff48a8663c902bf4f7561d0be0d6e9eb19bdefdff7ca2f092e334",
        "publishedAt": 1794571970,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia는 S&P 500 펀드의 6.1%를 차지합니다.",
        "| Trefis Trefis Storylines Nvidia는 S&P 500 펀드의 6.1%를 차지합니다.",
        "2026년 11월 13일 · Trefis 팀 NVDA YTD -10.7% SPY YTD +11.6% QQQ YTD +12.3% NVDA 분석 → AI 거래에 대한 추가 정보: AI 스토리라인 페이지에서는 AI 주식에 대한 정보를 수집합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6.1%, 10.7%, 11.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 6.1%, 10.7%, 11.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e4f934225e00a3add42b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "AI Token Prices “Fell Almost 15%” Last Month. That’s Good News for Amazon",
      "headlineKo": "AI토큰 가격 지난달 “거의 15% 하락”. 아마존에게는 좋은 소식이다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=31a529e91ac9446cc5c0a5af647cd1751636f6345be5f96b549dcc5bf05d2db0",
        "publishedAt": 1794571130,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI토큰 가격 지난달 “거의 15% 하락”.",
        "Amazon에게는 좋은 소식입니다 | TIKR.com 일반 투자 AI 토큰 가격은 지난 달 \"거의 15% 하락\"했습니다.",
        "Amazon Aditya Raghunath에 대한 좋은 소식입니다. 읽기 6분 검토자: Michael Douglass 마지막 업데이트: 2026년 11월 13일 Canva를 통한 Amazon 및 pixabay의 falco 주요 내용 Ramp의 데이터에 따르면 기업은 10월에 AI 토큰을 30% 더 많이 사용했지만"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 15%, 30%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 15%, 30%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "77774e1ec2a6653a195c",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Soars 16% in a Week as Musk Clears Room for “Increased Cybercab Production”",
      "headlineKo": "머스크가 \"사이버캡 생산량 증가\"를 위한 공간을 확보함에 따라 Tesla는 일주일 만에 16% 급등했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74c6f3de21cbeb4153904da39a12ea667e7875f219a94a79455c67827f643529",
        "publishedAt": 1794570893,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "머스크가 \"사이버캡 생산 증가\" 여지를 확보함에 따라 Tesla는 일주일 만에 16% 급등 | TIKR.com General Investing Tesla는 머스크가 \"사이버캡 생산 증가\"를 위한 여지를 확보함에 따라 일주일 만에 16% 급등합니다. Wiltone Asuncion • 4분 읽기 검토자: M",
        "Bloomberg는 Tesla와 SpaceX가 이르면 12월에 합병을 발표할 수 있다고 보도했습니다.",
        "자동차 사업은 여전히 ​​약세다. 10월 중국 소매판매는 66% 감소했고, 3분기 영업이익률은 2.6%를 기록했다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 16%, 15.6%, 66% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 16%, 15.6%, 66% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "d86cc2dada015cb4c2d0",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "LITE",
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
      "headline": "Lumentum Stocks Edge Higher as Marvell Deal Spread Widens to 19.7%",
      "headlineKo": "Marvell 거래 스프레드가 19.7%로 확대됨에 따라 Lumentum 주가 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=614acc0d339a56813f52ed977ae9ec7f0ba3c5bf5f6f19b3e96f4b774050ba74",
        "publishedAt": 1794570690,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum Stocks Edge Higher as Marvell Deal Spread Widens to 19.7%",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "d49b895cb3fba0e5ae7a",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "LITE",
        "MRVL",
        "NVDA"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
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
      "headline": "Marvell Stocks Edge Higher as NVIDIA Exit Weighs on Lumentum Deal Currency",
      "headlineKo": "NVIDIA 종료가 Lumentum 거래 통화에 무게를 두면서 Marvell 주가 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b318faa0130a46a8d5eb6e44cfbc05ef70af687ae1ed50a408d73b5880d39a8b",
        "publishedAt": 1794570230,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Stocks Edge Higher as NVIDIA Exit Weighs on Lumentum Deal Currency",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "c5bac73507c22e1772ce",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MU",
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
      "headline": "AI Chips Update - Micron Highlights AI Leadership At Investor Events",
      "headlineKo": "AI 칩 업데이트 - Micron, 투자자 이벤트에서 AI 리더십 강조",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0d9b346d455f3220475ea12e6bfd8a4c07e840c28901704a84c385871cb7ee7a",
        "publishedAt": 1794569857,
        "collectedAt": 1794608845.580491
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
        "이 기사는 MU의 사업과 관련된 'AI Chips Update - Micron Highlights AI Leadership At Investor Events' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9583c91ca890c9b228ec",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Now Gets “$16 Billion a Year” per Gigawatt, Up From $10 Billion",
      "headlineKo": "Oracle은 이제 기가와트당 \"연간 160억 달러\"를 벌어들입니다. 이는 100억 달러에서 증가한 수치입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a81f262138b09c5fa96c1626c8c549038dbdc60a6690908337e56db75f58067",
        "publishedAt": 1794565714,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle, 이제 기가와트당 100억 달러에서 160억 달러 증가 | TIKR.com General Investing Oracle은 이제 100억 달러에서 기가와트당 \"연간 160억 달러\"를 얻습니다. Gian Estrada • 5분 읽기 검토자: Gian Estrada 마지막 업데이트 N",
        "CFO인 힐러리 맥슨(Hilary Maxson)은 비용 추가 계약을 통해 전달되는 메모리 비용이 주로 메모리 비용이므로 1기가와트당 비용도 더 높다고 말합니다.",
        "CoreWeave에 따르면 신규 장기 계약 가격은 연간 메가와트당 2,000만~2,500만 달러로 Oracle의 1,600만 달러보다 높습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $16 Billion, $10 Billion, $16 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $16 Billion, $10 Billion, $16 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "720a24e910a53e9e9466",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG"
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
      "headline": "Has Constellation Energy (CEG) Fallen Below Fair Value After Raising Earnings Guidance?",
      "headlineKo": "Constellation Energy (CEG)가 실적 가이던스를 높인 후 적정 가치 아래로 떨어졌습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83746dc5714cd92a5948e4e1ff5c48186d791aa3c5dff0cb5fd8358d70f69e75",
        "publishedAt": 1794564550,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Has Constellation Energy (CEG) Fallen Below Fair Value After Raising Earnings Guidance?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "1ddd0824d7142135352e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM"
      ],
      "relatedEntities": [
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
      "headline": "Is Freedom Capital Markets Wrong to Give Up on Qualcomm? Wall Street Still Sees $185",
      "headlineKo": "Freedom Capital Markets가 Qualcomm을 포기하는 것은 잘못된 것인가요? 월스트리트는 여전히 185달러를 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=742c20d3f7f7ffa7c56f96a80ab93caa91ee1ff4068a64417b36121adb695da0",
        "publishedAt": 1794561783,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Freedom Capital Markets가 Qualcomm을 포기하는 것은 잘못된 것인가요?",
        "월스트리트는 여전히 185달러를 보고 있습니다 | TIKR.com 일반 투자 Freedom Capital Markets가 Qualcomm을 포기하는 것이 잘못된 것인가요?",
        "월스트리트는 여전히 185달러 Wiltone Asuncion을 보고 있음 • 5분 읽기 검토자: Wiltone Asuncion 마지막 업데이트 2026년 11월 13일 Juan Ramon Roballo의 @Juan Roballo Canva를 통한 이미지, Canva를 통한 Pexels의 @Karola G 핵심 사항 Freedom Capital Mar"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $185, $200,, 26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $185, $200,, 26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "46e5bc8e457f6908ee6f",
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
      "headline": "Oracle’s Backlog Is About Half OpenAI, Which Could Only “Scrape Together $11bn”",
      "headlineKo": "Oracle의 백로그는 OpenAI의 절반 정도이며, \"110억 달러만 긁어모을 수 있습니다\"",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=700a8e6e9c843495ae9289af867562f1d0e5e237b923233a6271dba8ac91df90",
        "publishedAt": 1794561406,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle의 백로그는 OpenAI의 절반 정도이며, \"110억 달러만 긁어모을 수 있습니다\" | TIKR.com 일반 투자 오라클의 백로그는 OpenAI의 절반 정도이며 Wiltone Asuncion은 \"110억 달러만 긁어모을\" 수 있습니다. • 6분 읽기 검토자: Micha",
        "S&P는 OpenAI를 Oracle 백로그의 약 절반으로 설정하므로 Oracle 성장의 상당 부분은 계속 자금을 조달해야 하는 고객에 달려 있습니다.",
        "OpenAI의 백로그 중 절반은 9월 실행률을 기준으로 6년 이상의 수익에 해당하며 Oracle은 이를 뒷받침하는 용량을 구축하기 위해 차입하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $11, $13.5 billion, $10.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $11, $13.5 billion, $10.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e7e3cad1aa9d26dbd000",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "SNDK"
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
      "headline": "167% Upside for Sandisk? Evercore ISI Thinks So, and Here’s How",
      "headlineKo": "샌디스크의 상승 여력은 167%? Evercore ISI는 그렇게 생각하며 그 방법은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a2e8496cc7a198e20a9735ec42a09470e5b8bb5e7fa400a5cc13935299390a32",
        "publishedAt": 1794560969,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Evercore ISI는 그렇게 생각하며 그 방법은 다음과 같습니다 | TIKR.com 일반 Sandisk에 167% 상승 여력 투자?",
        "Evercore ISI의 생각과 Wiltone Asuncion의 방법은 다음과 같습니다. • 5분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 13일 Juan Ramon Roballo의 @Juan Roballo Canva를 통한 이미지, Canva를 통한 Pexels의 @Karola G 주요 내용 Sandisk",
        "11일 Evercore ISI는 Outperform 등급과 목표 주가 2,500달러를 유지했습니다. 이는 11월 11일보다 167% 높은 수치입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 167%, 60%, $2,500 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 167%, 60%, $2,500 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "30430e0dd7390797fcbd",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Rothschild & Co Downgrades Broadcom to Neutral, Lowers Price Target to $398",
      "headlineKo": "Rothschild & Co, Broadcom을 중립으로 하향 조정하고 목표 가격을 398달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e824f9a9803297bac50895ecf967bb6f41685bb76ea29a8e3bf1aa73af11a3ec",
        "publishedAt": 1794560871,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Rothschild & Co, Broadcom을 중립으로 하향 조정하고 목표 가격을 398달러로 낮춤"
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
          "ticker": "AVGO",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "986ec4fb1e27c461a623",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Bloom Energy vs. Constellation Energy: On-Site Power or Grid Power, Which Wins the Data Center?",
      "headlineKo": "블룸 에너지 vs. 별자리 에너지: 현장 전력 또는 그리드 전력, 데이터 센터의 승리는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e48c7d6925da7bb9567ab69d7d9f433d8b2ffd7471290df3f302752656f1b6d1",
        "publishedAt": 1794560760,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "별자리 에너지: 현장 전력 또는 그리드 전력, 데이터 센터의 승리는 무엇입니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,561.67 -0.4% -30.73 DJI 52,347.55 +0.1% +50.46 NASDAQ 25,136.27 -0.9% -229.82 비트코인 $68,245.00 -4.5% -$3,205.55 SPCX $139.11 -0.",
        "Bloom Energy는 고체 산화물 연료 전지를 통해 긴 그리드 상호 연결 대기열을 우회하여 속도를 제공합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 165%, 4.92%, 0.78% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 165%, 4.92%, 0.78% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6b83d3d5d479c8bd0bca",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "GOOGL",
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
      "headline": "European shares fall as Nvidia CEO’s exit raises doubts over AI boom",
      "headlineKo": "Nvidia CEO의 퇴임으로 AI 붐에 대한 의구심이 제기되면서 유럽 주가 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=833a6f714833093edd6e0d7bfbc9d3544e3ee2554542a1dd47106adb6cd64ac0",
        "publishedAt": 1794558067,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia CEO의 퇴임으로 AI 붐에 대한 의구심이 커지면서 유럽 주가 하락 | Euronews 광고 작성자 Doloresz Katanich with AP 게시일: 2026년 11월 13일 - 9:21 GMT+1 • 업데이트: 9:41 댓글 공유 Google에 Euronews 추가 공유 Facebook Twitte",
        "도널드 트럼프 미국 대통령이 미국은 이란과 협상이 필요하지 않다고 말한 이후 유가가 상승했습니다.",
        "금요일 엔비디아 CEO 젠슨 황의 사임이 글로벌 인공지능 산업에 어떤 영향을 미칠지 투자자들이 평가하면서 유럽과 아시아 주식은 대부분 하락했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.2%, 0.3%, 4.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.2%, 0.3%, 4.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "eed06f287e9c1ed99bcc",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Applied (AMAT) Q4 2026 Earnings Call Transcript",
      "headlineKo": "적용됨(AMAT) 2026년 4분기 실적 통화 기록",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d0a7662323d1b0c191c3e432a2be66e4d416b6e4851f39eb53e81da621255f3",
        "publishedAt": 1794555968,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "적용됨(AMAT) 2026년 4분기 실적 통화 기록 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,592.40 -0.4% -26.98 DJI 52,297.09 -0.4% -189.40 NASDAQ 25,366.09 -0.4% -100.10 비트",
        "2026년 12월 12일 통화 참가자 기업 투자자 관계 담당 부사장 - Michael Sullivan 사장 겸 CEO - Gary Dickerson 최고 재무 책임자 - Brice Hill 시사점 수익 - 4분기에 104억 1천만 달러",
        "비GAAP EPS - 4분기 4.16달러로 전년 동기 대비 92%, 전분기 대비 19% 증가했으며 이는 상당한 운영 레버리지를 반영합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10.41 billion, 53%, $4.16 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $10.41 billion, 53%, $4.16 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "c37071673db8264a9e3e",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "At 21x earnings, Amazon is cheaper than Walmart and surging",
      "headlineKo": "21배의 수익으로 Amazon은 Walmart보다 저렴하고 급증하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb60721151017e5528da60f686f63be8e678d636e2afd83ffbfff23dc601f09e",
        "publishedAt": 1794555033,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "At 21x earnings, Amazon is cheaper than Walmart and surging",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "50b307517b4564515eb4",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV"
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
      "headline": "GE Vernova Has Slid Since Summer: Why Evercore ISI Sees 67% Upside",
      "headlineKo": "GE Vernova는 여름 이후 하락했습니다: Evercore ISI가 67% 상승 여력을 보이는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c02f4fc980877dda2adc05c94c3f3678455ae9f73309d02e2303e422cf5efca",
        "publishedAt": 1794554717,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova는 여름 이후 하락세: Evercore ISI가 67% 상승 여력을 보이는 이유 | TIKR.com 일반 투자 GE Vernova는 여름 이후 하락했습니다: Evercore ISI가 67% 상승 여력을 보이는 이유 Gian Estrada • 5분 읽기 검토자: David Hanson 마지막 업데이트 2011년 11월 13일",
        "11, Evercore ISI는 종가보다 67% 높은 1,350달러 목표 가격을 유지했습니다.",
        "3분기 주문이 유기적으로 96% 증가하고 2026년 지침이 상향되었음에도 불구하고 중간고사 이후 데이터센터에 대한 우려와 소프트뱅크의 37억 달러 전력 장비 비용으로 인해 주가가 하락했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 67%, 31%, $1,350 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 67%, 31%, $1,350 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GEV",
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
      "id": "399f420ed052a86488f0",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "MU",
        "NVDA"
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
      "headline": "Zacks Earnings Trends Highlights: Micron, Nvidia and Alphabet",
      "headlineKo": "Zacks 수익 추세 하이라이트: Micron, Nvidia 및 Alphabet",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e131fde0e366f2887f087ee50bb84bf1ba10a2d173856d8f9e7552fde9bac136",
        "publishedAt": 1794552780,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Zacks Earnings Trends Highlights: Micron, Nvidia and Alphabet",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "453bf281e929a683ee78",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "QQQ",
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
      "headline": "Broadcom Stock Just Jumped More Than 20% in 4 Days. It Has Done That Only 6 Other Times Since 2009.",
      "headlineKo": "브로드컴 주가는 4일 만에 20% 이상 급등했습니다. 2009년 이후 단 6번만 그렇게 했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d06a1697db33a04d803101dc98f4634d67b980d492ac1d25095ad4dfa3fcae62",
        "publishedAt": 1794551042,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "브로드컴 주가는 4일 만에 20% 이상 급등했습니다.",
        "2009년 이후 단 6번만 그렇게 했습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,592.40 -0.4% -26.98 DJI 52,297.09 -0.4% -189.40 NASDAQ 25,366.09 -0.4% -100.10 비트코인 $68,666.00 -6.5% -$4,797.80 SPCX $139.94 +0"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 96%, 5.54% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, 96%, 5.54% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d765ca543b738a065949",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Applied Materials Inc (AMAT) (Q4 2026) Earnings Call Highlights: Record $10. ...",
      "headlineKo": "Applied Materials Inc(AMAT)(2026년 4분기) 실적 발표 하이라이트: 기록 $10. ...",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab45e5af4a2d2d70fe3a0e298d43608bac70b4934e3ebe3d1015a229ecb18b39",
        "publishedAt": 1794546310,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials Inc (AMAT) (Q4 2026) Earnings Call Highlights: Record $10. ...",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "95ce0cc64327a77714f7",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "AMD",
        "CRM",
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
      "headline": "Did AI Platform Growth Just Shift Salesforce's (CRM) Investment Narrative?",
      "headlineKo": "AI 플랫폼 성장이 Salesforce(CRM)의 투자 내러티브를 바꾸었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=922ed224266cc6ca4b8e932d03868d8dddd50f598c282814c0f19b3f87c62404",
        "publishedAt": 1794544499,
        "collectedAt": 1794606789.9733207
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
        "이 기사는 CRM의 사업과 관련된 'Did AI Platform Growth Just Shift Salesforce's (CRM) Investment Narrative?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "77fa3d3ea8c112f4b873",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
        "MSFT",
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
      "headline": "AMAT CEO Says Chip Demand Robust, Adds ‘Multiyear’ Fab Investments Are Needed – Shares See Modest Rise After Sharp Run-Up",
      "headlineKo": "AMAT CEO는 칩 수요가 탄탄하다고 말하고 '다년간의' 팹 투자가 필요하다고 덧붙였습니다. 주가는 급격한 상승 이후 완만하게 상승했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d3e24cc16c5c5ec2e548596801f0878922864882659191718530aec7e4ae177d",
        "publishedAt": 1794541349,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMAT CEO는 칩 공급 격차가 해소되는 데 수년이 걸릴 것이라고 말합니다: '다년간의 투자 필요' AI 에이전트 동향 뉴스 수익 전체 DIA 0.16% SPY 0.15% QQQ 0.09% 추세 MSFT 2.42% SLS 15.82% BTC 5.75% CSCO 2.16% CBRS 16.41% CDNL 0.18% CADL 39.21%",
        "AMAT CEO는 칩 수요가 탄탄하다고 말하고 '다년간의' Fab 투자가 필요하다고 덧붙였습니다. 주가는 급격한 상승 이후 소폭 상승할 것으로 보입니다. CEO인 Gary Dickerson은 \"첨단 반도체에 대한 수요는 여전히 공급보다 훨씬 높습니다\"라고 말했습니다.",
        "이 사진 그림에서는 Applied Materials, Inc 로고가 태블릿에 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.16%, 0.15%, 0.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.16%, 0.15%, 0.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "188d9d7a98bb46e818e6",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "MSFT",
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
      "headline": "Why Did AAPL, COST, JNJ Stocks Hit 52-Week Highs Today?",
      "headlineKo": "오늘 AAPL, COST, JNJ 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23a117ac94dafada5af7ce85ddc5063b6ce116966982c7cb284ad6334276517a",
        "publishedAt": 1794537175,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 AAPL, COST, JNJ 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
        "AI 에이전트 동향 뉴스 수익 전체 DIA 0.24% SPY 0.14% QQQ 0.07% 동향 MSFT 2.42% SMCI 0.52% CADL 34.68% BTC 5.74% NVDA 1.79% CSCO 2.51% NBIS 2.39% CDNL 1.95% SLS 14.57% TLT 0.13% 홈 뉴스 시장 주식 AAPL, COST, JNJ 주식이 왜 그랬습니까?",
        "오늘 AAPL, COST, JNJ 주식이 52주 최고치를 기록한 이유는 무엇입니까?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.24%, 0.14%, 0.07% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.24%, 0.14%, 0.07% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a41ac4dfa8f2addfb6e9",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
        },
        {
          "name": "Alphabet",
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
      "headline": "Should You Buy Alphabet Stock Now That Google Will Let Customers Run Its AI Chips in Their Own Data Centers?",
      "headlineKo": "Google이 고객이 자체 데이터 센터에서 AI 칩을 실행할 수 있도록 허용하므로 이제 Alphabet 주식을 구입해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=65d72a35d6bd8753f397a3e903a5bba97273876b4c189482e737a2395d9d5608",
        "publishedAt": 1794535442,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google이 고객이 자체 데이터 센터에서 AI 칩을 실행할 수 있도록 허용하므로 이제 Alphabet 주식을 구입해야 합니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,592.40 -0.4% -26.98 DJI 52,297.09 -0.4% -189.40 NASDAQ 25,366.09 -0.4% -100.10 비트코인 $68,810.00 -6.0% -$4,415.05 SPCX $139.94 +0",
        "알파벳의 재고는 매각 전 칩 시스템을 구축하면서 133억 달러로 급증했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $13.3 billion, 1.79%, 1.62% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $13.3 billion, 1.79%, 1.62% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "26d8c4ad9b0c31ee817d",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MOD",
      "relatedTickers": [
        "MOD",
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
      "headline": "Why Is MOD Stock Soaring 28% Overnight Today?",
      "headlineKo": "오늘 밤 MOD 주식이 28% 급등한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=98767c303df48684d5cc7c1a47bb66a687513bb8022345b4f02f8af615a14d72",
        "publishedAt": 1794533020,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 MOD 주가가 하룻밤 사이에 28% 급등한 이유는 무엇인가요?",
        "AI 에이전트 트렌딩 뉴스 수익률 전체 DIA 0.08% SPY 0.65% QQQ 1.61% 트렌딩 SLS 2.24% U 5.16% SMMT 5.27% VKTX 5.84% RIVN 5.00% NVDA 2.62% NBIS 10.77% NVO 2.18% HAWK 21.54% NMAX 29.90% 홈 뉴스 시장 주식 MOD 주가가 28% 급등한 이유는 무엇인가요?",
        "오늘 MOD 주가가 하룻밤 사이에 28% 급등한 이유는 무엇인가요?"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 28%, 0.08%, 0.65% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MOD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MOD에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 28%, 0.08%, 0.65% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MOD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MOD",
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
      "id": "d6e01f856d27b5e4a1f3",
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
      "headline": "Cohesity Expands Cyber Resilience and AI Data Capabilities for Microsoft Environments",
      "headlineKo": "Cohesity, Microsoft 환경을 위한 사이버 탄력성과 AI 데이터 기능 확장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc5548266dfded88a63934a7d4581f2cb8fba74c207f047a284dadcabc926810",
        "publishedAt": 1794531600,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cohesity Expands Cyber Resilience and AI Data Capabilities for Microsoft Environments",
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
      "id": "52d701debc5b640a78ec",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Chipotle Mexican Grill vs. Coca-Cola: Which Stock Is a Buy After the Nvidia Sell-Off?",
      "headlineKo": "Chipotle Mexican Grill vs. Coca-Cola: Nvidia 매도 이후 어떤 주식을 매수해야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=03e62a76460f1a1ba308cbd5a28c7a76bc0a9af898fd8a8c61d174ba7c5ad087",
        "publishedAt": 1794531002,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "코카콜라: 엔비디아 매도 이후 어떤 주식을 매수해야 할까요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,592.40 -0.4% -26.98 DJI 52,297.09 -0.4% -189.40 NASDAQ 25,366.09 -0.4% -100.10 비트코인 $70,047.00 -5.0% -$3,717.47 SPCX $139.94 +0",
        "코카콜라는 매일 수십억 명에 달하는 대규모 글로벌 유통 네트워크를 유지하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4.34%, 4.01%, 0.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.34%, 4.01%, 0.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "65aa1413e0b9454837f7",
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
      "headline": "A 68-Year-Old Retiree Bought 1,000 Tesla Shares at $108 in January 2023. Now Musk Could Merge Tesla Into SpaceX by December, and a 15% Premium Would Turn Her Stake Into About 3,270 SpaceX Shares",
      "headlineKo": "68세 퇴직자는 2023년 1월에 Tesla 주식 1,000주를 108달러에 구입했습니다. 이제 머스크는 Tesla를 12월까지 SpaceX에 합병할 수 있으며, 15% 프리미엄을 적용하면 그녀의 지분이 SpaceX 주식 약 3,270주로 바뀔 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd7dca6e2cff478b81ec240578b63bb0f12b3c90c2485400c6178d99bbc5a878",
        "publishedAt": 1794529020,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "68세 퇴직자는 2023년 1월에 Tesla 주식 1,000주를 108달러에 구입했습니다.",
        "이제 머스크는 12월까지 Tesla를 SpaceX에 합병할 수 있으며, 15% 프리미엄을 통해 그녀의 지분을 약 3,270개의 SpaceX 주식으로 바꿀 수 있습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,620.40 +0.19% Dow Jones 52,412.70 +0.13% Nasdaq 100 28,422.90 +0.34% Russell 2000 2,806.52 +0.10% S&P 500 7,620.40 +0.19% 다우존스 52,412.70 +0.13% 나스닥 100 28,422.90 +0.34% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $108, 15%, $108.10, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $108, 15%, $108.10, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "45bfcbb4807f792b77d9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Applied Materials (AMAT) Said on Its Q4 Earnings Call",
      "headlineKo": "Applied Materials(AMAT)가 4분기 실적 발표에서 밝힌 내용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=042d8b6fd7746a608609489531f783b001c17b2efa49b84b16bea6d3705b77f5",
        "publishedAt": 1794528872,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials(AMAT)가 4분기 실적 통화에서 말한 내용 주요 콘텐츠로 건너뛰기 → Snapback Indicator를 단 $7에 판매하는 이유(Base Camp 트레이딩에서) (광고) Applied Materials(AMAT)가 4분기 실적 통화에서 말한 내용 Written by MarketBe",
        "MarketBeat Media, LLC의 이미지를 닫습니다.",
        "핵심 포인트 Applied Materials는 기록적인 결과를 발표했습니다. 회계연도 4분기 매출은 전년 동기 대비 53% 증가한 104억 달러를 기록했고, 비GAAP EPS는 92% 증가한 4.16달러를 기록했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $7, 53%, $10.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $7, 53%, $10.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "bc2915fe20cb1d912b0e",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Applied Materials Inc. Q4 2026 Earnings Call: Live Updates of $AMAT Earnings, Stock Forecast",
      "headlineKo": "Applied Materials Inc. 2026년 4분기 실적 발표: $AMAT 수익, 주식 예측 실시간 업데이트",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec5ea7c42cc8ed59ab3ee3f17f28e481f30ff51ea295a2dc610e937c52ee6b27",
        "publishedAt": 1794526804,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials Inc. Q4 2026 Earnings Call: Live Updates of $AMAT Earnings, Stock Forecast",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "accf133e08629f3aa007",
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
      "headline": "Alphabet Draws $5 Billion in Orders as AI Frenzy Builds",
      "headlineKo": "Alphabet, AI Frenzy 빌드로 50억 달러의 주문 기록",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9065d293b3155149849b94771ecd903e2f64bab5f1f307bd32ecf4c084ce1640",
        "publishedAt": 1794524759,
        "collectedAt": 1794606789.9733207
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
        "이 기사는 GOOGL의 사업과 관련된 'Alphabet Draws $5 Billion in Orders as AI Frenzy Builds' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e68b58e627a48f2552f1",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Cerebras Adds Microsoft Partnership to Diversify Beyond OpenAI",
      "headlineKo": "Cerebras, OpenAI를 넘어 다각화를 위해 Microsoft 파트너십 추가",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=41e3ece335125d7e2e166abbe2335ebedeb7aa18c334657b5f55d3330dae27ab",
        "publishedAt": 1794524520,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cerebras, OpenAI를 넘어 다각화를 위해 Microsoft 파트너십 추가"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "431729331cee9f359473",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Here’s Why Bernstein’s Mark Li Is Raising His Price Target on TSMC (TSM) to $600",
      "headlineKo": "Bernstein의 Mark Li가 TSMC(TSM)의 목표 가격을 600달러로 높이는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5b37f68b3045434a849ac223d6f1aa6cbd5e003957964e48bd89634db9bfcb6",
        "publishedAt": 1794522894,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bernstein의 Mark Li가 TSMC(TSM)의 목표 가격을 600달러로 높이는 이유는 다음과 같습니다."
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "6020a35e148c5d7bd71f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "China Renaissance Upgraded Apple (AAPL) to Buy. DZ Bank Cut It to Sell. Here’s the Split",
      "headlineKo": "중국 르네상스 애플(AAPL) 매수로 상향. DZ 은행 컷잇 매도. 여기는 스플리트",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=242a7046fc8d208a6f5f0055144d31da3696a301b7c4d375bc47969255ca78b4",
        "publishedAt": 1794522825,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "중국 르네상스 애플(AAPL) 매수로 상향. DZ 은행 컷잇 매도. 여기는 스플리트"
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
          "ticker": "AAPL",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "10e1e0928d893ade5935",
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
      "headline": "Stock Market Today, Nov. 12: AMD Jumps 5.9% on Bank of America Price Target Hike to $700",
      "headlineKo": "오늘, 11월 12일 주식 시장: AMD, Bank of America 목표 가격을 700달러로 5.9% 인상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1c2f63bb940f8518e75216f7a2e2c038736399f11d8ccca6dae4d1e190497c61",
        "publishedAt": 1794522003,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "12: AMD는 Bank of America 가격 목표를 700달러로 인상하여 5.9% 상승 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,592.40 -0.4% -26.98 DJI 52,297.09 -0.4% -189.40 NASDAQ 25,366.09 -",
        "비상장, 비공개 또는 이중 종류의 비거래 주식은 포함되지 않습니다.",
        "일일 범위 $554.90 - $594.00 52주 범위 $188.22 - $658.52 거래량 5540만 평균 거래량 2420만 총 이익 51.19% CPU, GPU 및 AI 가속기 디자이너인 Advanced Micro Devices(AMD +5.86% ), $585.30로 마감 5.86%."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $959.94, $554.90, $594.00 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $959.94, $554.90, $594.00 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "45b12f4256f060ae9a41",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Prediction: $500 a Month Invested in Taiwan Semiconductor Manufacturing Will Be Worth This Much by 2030",
      "headlineKo": "예측: 대만 반도체 제조에 투자한 월 500달러는 2030년까지 이만큼 가치가 있을 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f2d5f0e258bf8c2dc82a171f29c20def113bcf4c76fac7d341197106a285c82f",
        "publishedAt": 1794522000,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 대만 반도체 제조에 투자한 월 500달러는 2030년까지 이만큼 가치가 있을 것입니다"
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "128fadc7fb38ab57847f",
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
      "headline": "Micron Stock Is Down 33% From Its High. History Suggests a $5,000 Investment Now Will Be Worth This Much by 2028.",
      "headlineKo": "마이크론 주가는 고점 대비 33% 하락했습니다. 역사에 따르면 현재 5,000달러 투자의 가치는 2028년까지 이 정도 가치가 될 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=36c083bf0746c9901736ef37fe27388f8e8c7e9158d283d5010100ba3d933ab0",
        "publishedAt": 1794520920,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 주가는 고점 대비 33% 하락했습니다.",
        "역사에 따르면 현재 5,000달러 투자의 가치는 2028년까지 이 정도 가치가 될 것입니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,592.40 -0.4% -26.98 DJI 52,297.09 -0.4% -189.40 NASDAQ 25,366.09 -0.4% -100.10 비트코인 $68,910.00 -6.1% -$4,458.23 SPCX $139.94 +0"
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 33%, $5,000, 150% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 33%, $5,000, 150% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "19d9a4c28e1992cce7aa",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "MSFT"
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft And Amazon Show AI Spending Can Pay Off",
      "headlineKo": "Microsoft와 Amazon은 AI 지출로 성과를 거둘 수 있음을 보여줍니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30d6486b705ef37f36386466b946c2fb61c166e9d34ffb27fcec60fdaf5b0d1d",
        "publishedAt": 1794519644,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft와 Amazon은 AI 지출로 이익을 얻을 수 있음을 보여줍니다. Microsoft와 Amazon은 AI 지출로 이익을 얻을 수 있음을 보여줍니다. Blanke Schein Wealth Management CIO는 가격 하락만으로는 구매 이유가 아니며 수익, 경영 지침,"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "881d96b6ca797d170f19",
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
      "headline": "Intel (INTC) Could Be 88% Undervalued Following AI Partnerships And Sector Volatility",
      "headlineKo": "인텔(INTC)은 AI 파트너십과 부문 변동성으로 인해 88% 저평가될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f042f5d4a7bfd1bf42b48b85d044de506b64dd44db6108852011fbcf66213e6",
        "publishedAt": 1794517919,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel (INTC) Could Be 88% Undervalued Following AI Partnerships And Sector Volatility",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "1cb8706c047122b0fc74",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "CEG",
        "GEV",
        "VRT"
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
      "headline": "GE Vernova Sinks 12%, Vertiv Down 12% in a Week as Data Center Backlash Hits AI Power",
      "headlineKo": "데이터 센터 백래시가 AI 성능에 영향을 미치면서 GE Vernova는 일주일 만에 12% 하락, Vertiv는 12% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67809ea026e03fc852a2af4fce33392ad5bbb35a3d3f41619f5368b524fc1815",
        "publishedAt": 1794515726,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "데이터 센터 백래시가 AI 성능에 영향을 미치면서 GE Vernova는 일주일 만에 12% 하락, Vertiv는 12% 하락 | TIKR.com 일반 투자 GE Vernova는 데이터 센터 백래시가 AI Power Wiltone Asuncion에 영향을 미치면서 일주일 만에 12% 하락, Vertiv는 12% 하락 • 4분 읽기 검토",
        "10일, Vertiv와 함께 민주당이 의회에서 승리하고 SoftBank가 37억 달러의 비용을 청구했습니다.",
        "SoftBank는 자사의 오하이오 프로젝트가 순조롭게 진행되고 있으며 Constellation Energy의 상향 조정된 지침에 따르면 데이터 센터 구매자가 여전히 서명하고 있음을 보여줍니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, $3.7 billion, 13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 12%, $3.7 billion, 13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GEV",
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
      "id": "4d280c2e8cb974813eee",
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
      "headline": "Intel, RadixArk Collaborate to Advance Open AI Inference on Intel Platforms",
      "headlineKo": "Intel, RadixArk, Intel 플랫폼에서 개방형 AI 추론을 발전시키기 위해 협력",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6a0ad236f85932071f5f3753df9df655fb3adfd86ffefc9d9a78e59e211b9feb",
        "publishedAt": 1794515400,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel, RadixArk Collaborate to Advance Open AI Inference on Intel Platforms",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 INTC의 사업과 관련된 'Intel, RadixArk Collaborate to Advance Open AI Inference on Intel Platforms' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "INTC",
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
      "id": "1f3838c7cc18331fad0f",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arista Networks (ANET) Guides Higher, Is The Stock Overvalued Following Earnings?",
      "headlineKo": "Arista Networks(ANET) 가이드 상승, 수익에 따라 주식이 과대평가되었습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4ebd12665ab86126ab04aca1e70075544a165322755cd46c864b936b1f18216",
        "publishedAt": 1794514374,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista Networks(ANET) 가이드 상승, 수익에 따라 주식이 과대평가되었습니까?"
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
          "ticker": "ANET",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "8e8301b5e938efbd4b76",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
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
      "headline": "Why Broadcom Stock Rallied Thursday Morning",
      "headlineKo": "Broadcom 주식이 목요일 오전에 반등한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a46fb39d55b54266e76b9309d454d6035ed336638f521564f117354800c20242",
        "publishedAt": 1794514052,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom 주식이 목요일 오전에 반등한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,592.40 -0.4% -26.98 DJI 52,297.09 -0.4% -189.40 NASDAQ 25,366.09 -0.4% -100.10 비트코인",
        "ASIC(주문형 집적 회로)의 선두 공급업체 중 하나인 Broadcom은 잠재적으로 추가 수요를 확보할 수 있습니다.",
        "Broadcom의 주가( AVGO +5.54% )는 화요일에 7.1%나 상승하며 강세를 보였습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.54%, 7.1%, 5.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.54%, 7.1%, 5.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1631595e0ee0c59d0eec",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ORCL",
      "relatedTickers": [
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
      "headline": "Oracle Is Down 34% in 2026: Is ORCL Stock Dead Money or Due for a Bounce?",
      "headlineKo": "Oracle은 2026년에 34% 하락했습니다. ORCL 주식은 사재기인가요 아니면 반등이 예상되나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6babc93616660a6dcedb722d446a8835c6587bb8ad5e050852572809316eb762",
        "publishedAt": 1794513845,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle은 2026년에 34% 하락했습니다. ORCL 주식은 사재기인가요 아니면 반등이 예상되나요?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.40 −0.04% Dow Jones 52,337.70 −0.01% Nasdaq 100 28,295.00 −0.11% Russell 2000 2,802.92 −0.03% S&P 500 7,602.40 −0.04% 다우존스 52,337.70 −0.01% 나스닥 100 28,295.00 −0.11% 러셀 20",
        "작성자: David Moadel 2026년 11월 12일 오후 3시 4분(ET) 게시 · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 34%, $127.17, 0.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 34%, $127.17, 0.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "88c4c2c400b0c35c46c0",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "LRCX",
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
      "headline": "Is Lam Research Stock Paying You Enough For The Swings?",
      "headlineKo": "Lam Research 주식은 귀하에게 스윙에 대한 충분한 비용을 지불하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa84045b2c04f68355baec22b5cc582e257f6399e8fc3e819deeb84ca3a41e51",
        "publishedAt": 1794513274,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research 주식은 귀하에게 스윙에 대한 충분한 비용을 지불하고 있습니까?",
        "| Trefis Trefis 스토리라인 Lam Research 주식이 귀하에게 스윙 비용을 충분히 지불하고 있습니까?",
        "2026년 11월 12일 · Trefis 팀 LRCX YTD +37.0% SPY YTD +11.6% QQQ YTD +12.3% LRCX 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 37.0%, 11.6%, 12.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LRCX에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 37.0%, 11.6%, 12.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "93047956907679dd0edc",
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
      "headline": "Retail investors are buying Nvidia's stock crash like never before — history urges patience",
      "headlineKo": "소매 투자자들은 이전과는 전혀 다른 방식으로 Nvidia의 주식 붕괴를 구매하고 있습니다. 역사는 인내심을 요구합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb1f8261682cc3ae4e41206aacd3d0164ca57ce287fbef2ad95d594bb14cb9ba",
        "publishedAt": 1794512888,
        "collectedAt": 1794606789.9733207
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
        "이 기사는 NVDA의 사업과 관련된 'Retail investors are buying Nvidia's stock crash like never before — history urges patience' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "dffc7cd147bdd3165980",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "AMD",
        "MRVL",
        "MU",
        "NVDA",
        "ORCL"
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell makes major board move ahead of $115 billion AI deal",
      "headlineKo": "Marvell, 1,150억 달러 규모의 AI 거래를 앞두고 주요 이사회 움직임",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f7b91e4ce34e1f3b948f3cfe93f31d903fe42f161c72ed5700b07b924c666ab",
        "publishedAt": 1794512690,
        "collectedAt": 1794604614.6422281
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
        "이 기사는 MRVL의 사업과 관련된 'Marvell makes major board move ahead of $115 billion AI deal' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "cad93e59157157081283",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
        "NVDA"
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel Stocks Fall 3.49% as NVIDIA CEO Exit Clouds a $13 Billion Partnership Stake",
      "headlineKo": "NVIDIA CEO가 130억 달러의 파트너십 지분을 확보함에 따라 Intel 주식은 3.49% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cae127bd6457e6dde2deeb7e8ba39e81ee83c24044d9b1aad88ff36fe105a0b1",
        "publishedAt": 1794512620,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel Stocks Fall 3.49% as NVIDIA CEO Exit Clouds a $13 Billion Partnership Stake",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "e589c63421866842c456",
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
      "headline": "Mark Zuckerberg’s Meta AI Predicts a Historic Comeback for Solana",
      "headlineKo": "Mark Zuckerberg의 Meta AI는 Solana의 역사적인 복귀를 예측합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e94178d668e952c8387663ae9c80d809628ddecdbccff9ebdd49aaa0eade94bf",
        "publishedAt": 1794511411,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Mark Zuckerberg의 Meta AI는 SOL의 역사적인 복귀를 예측합니다. 이 기사에서는 Solana 기술 분석: SOL 돌파에 필요한 것은 무엇입니까?",
        "이러한 최근 발표가 Meta AI의 솔라나 달 탐사 예측에 도움이 될 수 있을까요?",
        "Mark Zuckerberg의 Meta AI는 Solana의 움직임을 예측합니다: The Big Reveal Mark Zuckerberg의 Meta AI는 2027년 1월 1일까지 솔라나에 잠재적으로 엄청난 일이 일어날 수 있다고 예측합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $90, $100,, $82 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $90, $100,, $82 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fbd0ba9ab779b28d3ce2",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "AMAT",
        "KLAC",
        "LRCX",
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
      "headline": "How Low Can KLA Stock Go?",
      "headlineKo": "KLA 주식은 얼마나 낮아질 수 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa9a13ccee24a4d240d283b8c86768de6ca0c6878f331e0a20c48b3a76da38b7",
        "publishedAt": 1794511397,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis Trefis 스토리라인 KLA 주식은 얼마나 낮아질 수 있나요?",
        "2026년 11월 12일 · Trefis 팀 KLAC YTD +29.9% SPY YTD +11.6% QQQ YTD +12.3% KLAC 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요.",
        "KLA(KLAC) 주가는 2026년 11월 11일 $161.01로 마감했는데, 이는 지난해 최고 종가보다 46.6% 낮은 수치이며, 지난 한 달 동안 동료업체인 Lam Research와 Applied Materials도 하락하는 동안 12.5% ​​하락했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 29.9%, 11.6%, 12.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 29.9%, 11.6%, 12.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "7c656923d0611c93b767",
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
      "headline": "Microsoft (MSFT) Expands AI Ties With Ohio State, Is The Stock Fully Priced?",
      "headlineKo": "마이크로소프트(MSFT)가 오하이오 주와 AI 관계를 확대했는데, 주가가 완전히 책정됐나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=41756d8dd11df0e5fe2defa5309a5109f9501cff7043b2d756a071d85a666fa7",
        "publishedAt": 1794510640,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft (MSFT) Expands AI Ties With Ohio State, Is The Stock Fully Priced?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "80ec3c9af88b97787265",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon Stocks Gain as Anthropic IPO Puts $271.8 Billion Value on Stake",
      "headlineKo": "인류애 IPO로 2,718억 달러의 가치를 지분에 투자하면서 Amazon 주식 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0554d560d41ffee13b0581798d2297b9d385e6ef8433e37c1b7b5e9ea5f3352c",
        "publishedAt": 1794506361,
        "collectedAt": 1794606789.9733207
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
        "이 기사는 AMZN의 사업과 관련된 'Amazon Stocks Gain as Anthropic IPO Puts $271.8 Billion Value on Stake' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "23e02d2b4ae6cb2d9440",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "NVDA",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla fund makes surprise Microsoft bet, keeps Nvidia stake",
      "headlineKo": "Tesla 펀드, Microsoft의 놀라운 베팅, Nvidia 지분 유지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd698a88d6b2dc674e8535e54234ab27d68d33bcd158470e77671e7a698dec7f",
        "publishedAt": 1794506344,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla 펀드, Microsoft의 놀라운 베팅, Nvidia 지분 유지"
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
      "id": "2b9eb56b97ca9c066f3e",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "DBS’s $290 Oracle Target Still Implies 126% Upside, Even After a Cut",
      "headlineKo": "DBS의 290달러 Oracle 목표는 삭감 후에도 여전히 126%의 상승 여력을 암시합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dad1013ada706e83e56ce5b9d030b0b29a2849adb69c1380a58308c786a02d13",
        "publishedAt": 1794505886,
        "collectedAt": 1794604614.6422281
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
        "이 기사는 ORCL의 사업과 관련된 'DBS’s $290 Oracle Target Still Implies 126% Upside, Even After a Cut' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "269d35bda6c62a919e9a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM"
      ],
      "relatedEntities": [
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm's $5 Billion Data Center Ramp Puts Execution in Focus Now",
      "headlineKo": "50억 달러 규모의 Qualcomm 데이터 센터 램프로 이제 실행에 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5b859a74d1131e583434c2588bfd6fafcd3f0a45612ca3bef0890df73041672",
        "publishedAt": 1794505620,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "50억 달러 규모의 Qualcomm 데이터 센터 램프로 이제 실행에 집중"
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
          "ticker": "QCOM",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "6668331b034e0f030276",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Wall Street Models Lag Structural Reality, Prompting Me To Add an ‘Overvalued’ Apple",
      "headlineKo": "월스트리트 모델은 구조적 현실을 뒤쳐 '과대평가된' 사과를 추가하라는 메시지를 표시합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23ef94ab7e00b81da6289f2ca74012e3e3ee528d68ef78d7c4d7e6a68f2ada6b",
        "publishedAt": 1794505533,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트 모델은 구조적 현실을 뒤쳐 '과대평가된' 사과를 추가하라는 메시지를 표시합니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,603.20 −0.30% Dow Jones 52,334.70 −0.43% Nasdaq 100 28,322.20 −0.10% Russell 2000 2,802.62 −1.66% S&P 500 7,603.20 −0.30% 다우존스 52,334.70 −0.43% 나스닥 100 28,322.20 −0.10% 러셀 20",
        "유리 외관에 눈에 띄게 표시된 상징적인 Apple 로고는 기사에서 논의된 회사의 지속적인 시장 입지와 전략적 성공을 상징합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $355.63,, 31.17%, $340.77, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $355.63,, 31.17%, $340.77, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "4014c150279484359598",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "ORCL",
      "relatedTickers": [
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
      "headline": "Is There Hope for Oracle After Plummeting 35% This Year? ‘Yes’ Says One Analyst Predicting 210% Gains From Here",
      "headlineKo": "올해 35% 급락한 오라클에 희망이 있을까? 한 분석가는 여기에서 210%의 이익을 예측한다고 '예'라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da64ce226c26a3dae82e01d8c561bab750d1270d22b10eb5496ffae9c30acf9c",
        "publishedAt": 1794505528,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "올해 35% 급락한 오라클에 희망이 있을까?",
        "한 분석가는 여기에서 210%의 이익을 예측한다고 말합니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,604.30 −0.29% Dow Jones 52,409.20 −0.28% Nasdaq 100 28,292.60 −0.20% Russell 2000 2,807.72 −1.48% S&P 500 7,604.30 −0.29% 다우존스 52,409.20 −0.28% 나스닥 100 28,292.60 −0.20% 러셀 20"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 35%, 210%, $128.40, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 35%, 210%, $128.40, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e1761724945ece92d49f",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "NVDA",
        "QQQ",
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
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
      "headline": "Tesla Vs. Nvidia: The Regulatory Crosshairs are Trained on These Two Mag 7 Shares, One is Worse Off",
      "headlineKo": "테슬라 대. Nvidia: 규제 십자선은 이 두 개의 Mag 7 주식에 대해 훈련되었으며, 하나는 더 나쁩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=817bc741408d1ffafc199c93e9d0ec9d517ad586b862b68228af3fbe60788604",
        "publishedAt": 1794505507,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: 규제 십자선은 이 두 개의 Mag 7 주식에 대해 훈련되었으며, 하나는 더 나쁩니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,595.80 −0.40% Dow Jones 52,362.20 −0.37% Nasdaq 100 28,247.60 −0.36% Russell 2000 2,802.52 −1.66% S&P 500 7,595.80 −0.40% 다우존스 52,362.20 −0.37% 나스닥 100 28,247.60 −0.36% 러셀 20",
        "Nvidia: 규제 십자선은 이 두 개의 Mag 7 주식에 대해 훈련을 받았고, 하나는 더 나빴습니다. 작성자: Alex Sirois 게시일: 2026년 11월 12일 오후 12:45(ET) · 3분 읽기 𝕏 f ⧉ 이 게시물에는 스폰서 및 계열사 및 Flywheel P의 링크가 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $28.046, 0.17%, $2.76 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $28.046, 0.17%, $2.76 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "be9e6f065b854a3c9181",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM"
      ],
      "relatedEntities": [
        {
          "name": "Qualcomm",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
        {
          "name": "BMW",
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
      "expectedHorizon": "중기 자동차 수주·매출 반영",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Qualcomm Stock Worth Buying as Diversification Meets Margin Risk?",
      "headlineKo": "다각화가 마진 위험을 충족시키기 때문에 Qualcomm 주식을 매수할 가치가 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a8eee368dc656423940d4328f7719038e17277a8e299e56e6dd306f95406d1e",
        "publishedAt": 1794504420,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BMW 관련 자동차 칩 사업 확대를 다룬 뉴스입니다.",
        "고객 계약·설계 채택은 긍정적 출발이지만 계약이 곧바로 매출로 잡히는 것은 아닙니다.",
        "실제 차량 출시와 Qualcomm 칩 탑재 이후 매출·이익 반영 여부를 확인해야 합니다."
      ],
      "marketInterpretation": [
        "QCOM이 스마트폰 의존도를 낮추고 자동차·IoT로 포트폴리오를 넓히는 흐름입니다.",
        "자동차 사업은 수주부터 양산까지 시간이 걸리므로 단기 실적보다 수주잔고와 양산 일정이 중요합니다."
      ],
      "aiInference": [
        "이 기사는 QCOM의 사업과 관련된 'Is Qualcomm Stock Worth Buying as Diversification Meets Margin Risk?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "BMW와 협력한다는 소식은 좋은 출발이지만, 계약만으로 바로 이익이 늘었다는 뜻은 아닙니다.",
        "실제 자동차에 칩이 들어가고 판매가 시작되어야 매출로 확인됩니다.",
        "장기 성장에는 긍정적이지만 오늘 바로 매수하라는 신호는 아닙니다."
      ],
      "whyItMatters": [
        "QCOM이 스마트폰 의존도를 낮추고 자동차·IoT로 포트폴리오를 넓히는 흐름입니다.",
        "자동차 사업은 수주부터 양산까지 시간이 걸리므로 단기 실적보다 수주잔고와 양산 일정이 중요합니다."
      ],
      "impacts": [
        {
          "ticker": "QCOM",
          "direction": "긍정",
          "reason": "자동차 고객·설계 채택 확대 가능성",
          "basis": "analysis"
        }
      ],
      "watch": [
        "자동차 부문 매출과 신규 설계 채택 수",
        "BMW 양산 시점·계약 규모",
        "QCT 영업이익률과 현금흐름"
      ]
    },
    {
      "id": "b84eb06be58955c137b7",
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
      "headline": "Apple's Market Cap Grew From $347 Billion to $4.6 Trillion During Tim Cook's 15 Years as CEO. Here's What That Growth Curve Means for Apple's Next Chapter Under John Ternus.",
      "headlineKo": "Apple의 시가총액은 Tim Cook이 CEO로 재임한 15년 동안 3,470억 달러에서 4조 6천억 달러로 성장했습니다. John Ternus가 이끄는 Apple의 다음 장에서 성장 곡선이 의미하는 바는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=299a11539386d565e8cf1be884c33b29f6552c46f0c38db6b161adf9f4ca0d74",
        "publishedAt": 1794504182,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: $347 Billion, $4.6 Trillion, $45.8 billion, 0.14%, $347 billion, $4.6 trillion, $5 trillion, $108 billion.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple's Market Cap Grew From $347 Billion to $4.6 Trillion During Tim Cook's 15 Years as CEO. Here's What That Growth Curve Means for Apple's Next Chapter Under John Ternus.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "6f532e9d6e630e232878",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMAT",
        "AMD",
        "AVGO",
        "MSFT",
        "NVDA",
        "QCOM",
        "QQQ",
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
      "headline": "Tom Lee Says Jensen Huang Exit Doesn’t Change His Bullish Tech Outlook: AVGO, AMD Stocks Lead Chip Rally",
      "headlineKo": "Tom Lee는 Jensen Huang의 퇴임이 그의 낙관적인 기술 전망을 바꾸지 않는다고 말합니다: AVGO, AMD 주식이 칩 랠리를 주도합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=870757e89f0fd6a754a9125dfa3ce5276deb1a3afaf9aba0341d78efb625d5d2",
        "publishedAt": 1794504123,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tom Lee는 기술 분야에서 '내부 바닥'을 봅니다: AMD, Broadcom, Qualcomm Lead Chip Rally AI Agent Trending News Earnings All DIA 0.23% SPY 0.34% QQQ 0.44% Trending NVDA 5.55% MSFT 0.09% SMCI 9.94% CDNL 63.91% NBIS 18.11% BABA 6.81% AMAT 3.69% CSCO 1",
        "Tom Lee는 Jensen Huang의 퇴장이 자신의 낙관적인 기술 전망을 바꾸지 않는다고 말합니다: AVGO, AMD 주식 선두 칩 랠리 Lee는 시장이 \"경기 침체\"에 도달했다는 증거로 여러 유명 헤지 펀드의 \"대학살\"과 강제 청산을 지적했습니다.",
        "엔비디아 주가는 목요일에도 여전히 압박을 받고 있는 반면, 광범위한 반도체 부문과 주요 기술 ETF는 높게 거래되었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.23%, 0.34%, 0.44% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.23%, 0.34%, 0.44% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "1835361c19c99ce6d997",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "NVDA"
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
      "headline": "AMD Soars 6%, Broadcom Up 6% as Nvidia CEO Jensen Huang Exits",
      "headlineKo": "Nvidia CEO Jensen Huang이 퇴임하면서 AMD는 6% 상승, Broadcom은 6% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3228204b6e8fe0eef48d9eb4f1b0348782120c2fe7e32b9781da8676eab32fc1",
        "publishedAt": 1794503116,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia CEO Jensen Huang이 퇴임하면서 AMD는 6% 상승, Broadcom은 6% 상승 | TIKR.com 일반 투자 AMD는 6% 상승, Nvidia CEO Jensen Huang이 David Hanson을 떠나면서 Broadcom은 6% 상승 • 4분 읽기 검토자: David Hanson 최종 업데이트 2026년 11월 12일 @Alexa",
        "대신 IonQ, SoundHound 및 Oklo는 투자자들이 가장 위험한 AI 베팅을 줄이면서 하락했습니다.",
        "Nvidia의 위기는 고객에게 AMD에 의지할 이유를 제공하지만 AMD는 수요가 이미 공급보다 높다고 말합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 7%, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 6%, 7%, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "b686fa192ca682ce3809",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Cisco (CSCO) vs. ANET and HPE: Can AI Networking Turn Strong Orders Into Lasting Earnings Growth?",
      "headlineKo": "Cisco(CSCO) 대 ANET 및 HPE: AI 네트워킹이 강력한 주문을 지속적인 수익 성장으로 바꿀 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fbb441c75e0bf563ad92b933daa9ab0b0eca73caa7119e6145484c711013df80",
        "publishedAt": 1794502846,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cisco (CSCO) vs. ANET and HPE: Can AI Networking Turn Strong Orders Into Lasting Earnings Growth?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "2d95c67e975a0e0bba84",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Lucid Sinks 8% as Cash-Burn Worries Linger After Earnings; Rivian Falls 3%, Tesla Holds Steady After Musk’s Jensen Huang Remark",
      "headlineKo": "Lucid는 수익 이후에도 현금 소각에 대한 우려가 남아 있어 8% 하락했습니다. Rivian은 3% 하락하고 Tesla는 Musk의 Jensen Huang 발언 이후 안정을 유지했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d222a1583883a6a26c1e4e64e9ef90436202c0c7303a7eaa163224baf10608f",
        "publishedAt": 1794502610,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lucid는 수익 이후에도 현금 소각에 대한 우려가 남아 있어 8% 하락했습니다. Rivian은 3% 하락하고 Tesla는 Musk의 Jensen Huang 발언 이후 안정을 유지했습니다."
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
      "id": "06ebe62af6a2907dcf11",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MU",
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
      "headline": "Sandisk, Micron, and SK Hynix Slide 3% as NVIDIA Shake-Up Hits Memory Stocks",
      "headlineKo": "NVIDIA 개편으로 메모리 주식이 강세를 보이면서 Sandisk, Micron, SK Hynix가 3% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f123c4876b6247e8fe02d41b80c176a73a8970b571792239acc8d3500c666b8",
        "publishedAt": 1794502565,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVIDIA의 개편으로 메모리 주가가 하락하면서 Sandisk, Micron 및 SK Hynix가 3% 하락했습니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.60 −0.31% Dow Jones 52,324.70 −0.45% Nasdaq 100 28,333.20 −0.06% Russell 2000 2,801.92 −1.68% S&P 500 7,602.60 −0.31% 다우존스 52,324.70 −0.45% 나스닥 100 28,333.20 −0.06% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 당사의 스폰서 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, $950.98,, $2,500 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, $950.98,, $2,500 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "960bdc07bbaae1327c11",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "NVDA",
        "QQQ"
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
      "headline": "AMD and Broadcom rally after Nvidia chief Jensen Huang's shock resignation",
      "headlineKo": "엔비디아 CEO 젠슨 황의 충격적인 사임 이후 AMD와 브로드컴이 랠리를 펼쳤다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70945a7716e7113599fb697cf45372407ccbbed16db45bfdcc772a3fa85196f5",
        "publishedAt": 1794502260,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔비디아 CEO 젠슨 황의 충격적인 사임 이후 AMD와 브로드컴 랠리 | NASDAQ:AMD, XETRA:AMD 무엇을 찾고 계십니까?",
        "회사 뉴스 일치하는 모든 회사 보기 일치하는 모든 뉴스 보기 What Brokers Say Tech 작성자: Angela Harmantas 편집자: Angela Harmantas 면책 조항 투자 조언 없음 이 콘텐츠에 대해 편집 표준 및 정책 기사 A 공유",
        "그녀는 특히 후배 자원주에 초점을 맞춰 북미 주식 시장을 다루는 15년 이상의 경험을 갖고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, $589.17, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 7%, $589.17, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b7aa68d364eb97485b15",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Remains Top Pick in CPU Space Amid Expanding Market for Servers, BofA Says",
      "headlineKo": "BofA는 서버 시장이 확대되는 가운데 AMD가 CPU 부문에서 여전히 최고 선택을 유지하고 있다고 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c9b90b59836899e33a71f660fe4a36b60208ae36b02f596affd137d685c7c6f2",
        "publishedAt": 1794502187,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BofA는 서버 시장이 확대되는 가운데 AMD가 CPU 부문에서 여전히 최고 선택을 유지하고 있다고 밝혔습니다."
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
          "ticker": "AMD",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "c512ac3a5f54b4d210a9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
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
      "headline": "AMD Stocks Gain 2.6% as Investors Look Beyond NVIDIA After CEO Exit",
      "headlineKo": "CEO 퇴임 후 투자자들이 NVIDIA 너머를 바라보면서 AMD 주식은 2.6% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b7497f8481a2096781d3b2967c43fc614023887098c2b9678eb20653354f2f81",
        "publishedAt": 1794501844,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CEO 퇴임 후 투자자들이 NVIDIA 너머를 바라보면서 AMD 주식은 2.6% 상승"
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
          "ticker": "AMD",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "fcb5a428d837ea239b75",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Constellation Energy Soars 13% in a Week on a Guidance Raise: “A Platform Heretofore Unseen”",
      "headlineKo": "별자리 에너지는 지침 인상으로 일주일 만에 13% 급등: \"지금까지 볼 수 없었던 플랫폼\"",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51969d2bbbe81357aea82325f999229842a572555188f69d41878d654ed50228",
        "publishedAt": 1794501334,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "별자리 에너지는 지침 인상으로 일주일 만에 13% 급등: \"지금까지 볼 수 없었던 플랫폼\" | TIKR.com General Investing Constellation Energy는 가이던스 인상으로 일주일 만에 13% 급등: \"지금까지 볼 수 없었던 플랫폼\" Rexielyn Diaz • 4분",
        "Vistra의 기록적인 분기 이후 Constellation의 보고서에 따르면 고객은 중기적 불안에도 불구하고 여전히 계약을 체결하고 있는 것으로 나타났습니다.",
        "CEO는 Constellation의 청정 생산량 중 거의 절반이 2032년까지 수십 년 동안 계약될 것이라고 말했는데, 이는 2028년까지 분석가의 추정을 뒷받침합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 12%, $5.06, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 13%, 12%, $5.06, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "5ee582965dfa3e4eec2a",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "PLTR",
      "relatedTickers": [
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
      "headline": "Palantir’s Growth Story Could Be Just Getting Started",
      "headlineKo": "Palantir의 성장 스토리는 이제 막 시작되었을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e131fb867fdb6fcb81600962a8fefd5f44cc85f901e0d679dd7e431489db705f",
        "publishedAt": 1794501215,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir의 성장 스토리는 이제 막 시작되었을 수도 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,596.20 −0.12% Dow Jones 52,317.20 −0.05% Nasdaq 100 28,239.20 −0.31% Russell 2000 2,803.52 −0.01% S&P 500 7,596.20 −0.12% 다우존스 52,317.20 −0.05% 나스닥 100 28,239.20 −0.31% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 당사의 스폰서 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $156.17, 9.04%, $171.70. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $156.17, 9.04%, $171.70. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "8478e8257d803ac63843",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MOD",
      "relatedTickers": [
        "MOD"
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
      "headline": "Supply Chain Bottlenecks and Weak Margin Dragged Modine Manufacturing Company (MOD) in Q3",
      "headlineKo": "3분기에 공급망 병목 현상과 낮은 마진으로 인해 Modine Manufacturing Company(MOD)가 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44cec97b60b671ccf6d666ada21b49c6a1650588cb9f2b18acf9d4dea7dc18ce",
        "publishedAt": 1794501136,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Supply Chain Bottlenecks and Weak Margin Dragged Modine Manufacturing Company (MOD) in Q3",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "MOD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MOD에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "MOD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MOD",
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
      "id": "feaa9fb3f41fc531cbea",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Jensen Huang Is Out. Here’s How Much Nvidia’s Selloff Cost a $10,000 QQQ Position",
      "headlineKo": "젠슨 황이 아웃되었습니다. Nvidia의 매도에 따른 QQQ 포지션 $10,000의 비용은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f432323ecc5f07db6436bc850e7163f25d7f61a4a2ed4fc5507468cb89122e51",
        "publishedAt": 1794500947,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia의 매도에 따른 $10,000 QQQ 포지션 비용은 다음과 같습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,543.60 −0.82% Dow Jones 52,277.00 −0.13% Nasdaq 100 27,848.80 −1.68% Russell 2000 2,785.83 −0.64% S&P 500 7,543.60 −0.82% 다우존스 52,277.00 −0.13% 나스닥 100 27,848.80 −1.68% 러셀 20",
        "다음은 Nvidia의 매각 비용이 $10,000 QQQ 포지션에 드는 비용입니다. 작성자: Ryne Mauck 2026년 11월 12일 오전 11시 29분(ET) 게시 · 4분 읽기 The ETF Examiner 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, 0.82%, 0.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, 0.82%, 0.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d250a065e822575c6882",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
        "GOOGL",
        "NVDA"
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
      "headline": "Arm CEO: The World Is “Ready and Willing” to Build the Data Centers America Blocks",
      "headlineKo": "Arm CEO: 전 세계가 미국 블록에 데이터 센터를 구축할 준비가 되어 있고 기꺼이 노력하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99b5aefe818a5718641c2be77e43211b512cf273e1bc171ac1d403ac740dba88",
        "publishedAt": 1794500419,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm CEO: 전 세계가 데이터 센터 America Blocks를 구축할 준비가 되어 있고 기꺼이 노력하고 있습니다 | TIKR.com General Investing Arm CEO: 세계는 미국이 차단하는 데이터 센터를 구축할 \"준비와 의지\"가 있습니다. Roxanna Maglangit • 7분 읽기 검토자:",
        "장기간 실행되는 AI 에이전트는 사용자 근처에 앉아 있을 필요가 없으므로 구축이 해외로 이전될 수 있으며 Alphabet의 Google은 말레이시아에 150억 달러를 투자했으며 그 중 대부분은 데이터 센터 캠퍼스에 투자했습니다.",
        "분석가들은 Arm의 수익이 2년 동안 약 70% 증가하고 Nvidia의 수익은 3배 이상 증가할 것으로 예상합니다. 이는 전 세계적으로 확산되는 확장에 적합합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $15 billion, 70%, $500 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $15 billion, 70%, $500 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "56df8640cc4bd9a9eba5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN",
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
      "headline": "Is One Shrinking Number The Biggest Risk To Eaton Stock?",
      "headlineKo": "하나의 감소 숫자가 Eaton 주식에 가장 큰 위험입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50fe7fdf027bbbdcaf0c44a9776c9fb934968d223aba5c043721e55700867048",
        "publishedAt": 1794499560,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "하나의 감소 숫자가 Eaton 주식에 가장 큰 위험입니까?",
        "| Trefis Trefis Storylines 하나의 감소 숫자가 Eaton 주식의 가장 큰 위험입니까?",
        "2026년 11월 12일 · Trefis 팀 ETN YTD +14.0% SPY YTD +11.6% XLI YTD +9.8% ETN 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 14.0%, 11.6%, 9.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ETN에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 14.0%, 11.6%, 9.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ETN",
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
      "id": "03e395150661bdf0a719",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT"
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
      "headline": "Applied Materials Sits 47% Below Its High. Here’s What the November 12 Report Has to Prove",
      "headlineKo": "어플라이드머티어리얼즈는 최고치보다 47% 하락했다. 11월 12일 보고서가 증명해야 하는 것은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18d730563a4448ae9b0b7cc1dbe341823fac6b24f858968bcfc70f035ce9871c",
        "publishedAt": 1794499313,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드머티어리얼즈는 최고치보다 47% 하락했다.",
        "11월 12일 보고서가 증명해야 하는 것은 다음과 같습니다 | TIKR.com General Investing Applied Materials는 최고치보다 47% 낮습니다.",
        "11월 12일 보고서가 증명하는 내용은 다음과 같습니다. Michael Douglass • 6분 읽기 검토자: Michael Douglass 최종 업데이트: 2026년 11월 12일 Kittipong Jirasukhanont, PhonlamaiPhoto의 이미지(Canva를 통해 제공) 주요 시사점 Applied Materials 보고서"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 47%, $18.62,, $16.40 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 47%, $18.62,, $16.40 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "f3244be01e7f3722490d",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Is Constellation Energy Stock Increasing Your Market Risk?",
      "headlineKo": "Constellation Energy 주식이 시장 위험을 증가시키고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0375e0a3fc81d1521dc04870e3a69e4d8c177423339fd1f68d02144612eacd45",
        "publishedAt": 1794499191,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy 주식이 시장 위험을 증가시키고 있습니까?",
        "| Trefis Trefis 스토리라인 Constellation Energy 주식이 시장 위험을 증가시키고 있습니까?",
        "2026년 11월 12일 · Trefis 팀 CEG YTD -19.7% SPY YTD +11.6% XLU YTD +4.0% CEG 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 19.7%, 11.6%, 4.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 19.7%, 11.6%, 4.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bb7e7607f18656d60c30",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Meta Nose-Dived 12% Over a Month: This Pro Analyst Expects 60% Gains Within 12 Months",
      "headlineKo": "한 달에 걸쳐 메타 코 다이빙 12%: 이 프로 분석가는 12개월 이내에 60%의 이익을 기대합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13bc69e187c76f64e173f9d2e93a5fea5ff68b1b9bff92f5b7f97e5ad8371177",
        "publishedAt": 1794498345,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "한 달 동안 메타 코 다이빙 12%: 이 프로 분석가는 12개월 이내에 60%의 이익을 기대합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,601.20 −0.06% Dow Jones 52,378.20 +0.07% Nasdaq 100 28,261.60 −0.23% Russell 2000 2,801.17 −0.09% S&P 500 7,601.20 −0.06% 다우존스 52,378.20 +0.07% 나스닥 100 28,261.60 −0.23% 러셀 20",
        "회사가 인공 지능 부문에서 치열한 경쟁에 직면함에 따라 4-5 대운하 광장 위치에 있는 메타 간판."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, 60%, $628.77, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 12%, 60%, $628.77, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "bd3606c499ccb0eea5af",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Alphabet’s Misunderstood TPUs Are a Hidden Catalyst Investors Haven’t Yet Noticed",
      "headlineKo": "알파벳의 오해된 TPU는 투자자들이 아직 알아차리지 못한 숨겨진 촉매제입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a4ff1215f873825316354607b6b5ef152e3a00c315909ee9597ba54d09204f4",
        "publishedAt": 1794498330,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳의 오해된 TPU는 투자자들이 아직 눈치 채지 못한 숨겨진 촉매제입니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,604.30 −0.29% Dow Jones 52,409.20 −0.28% Nasdaq 100 28,292.60 −0.20% Russell 2000 2,807.72 −1.48% S&P 500 7,604.30 −0.29% 다우존스 52,409.20 −0.28% 나스닥 100 28,292.60 −0.20% 러셀 20",
        "혁신의 상징인 Google 본사 건물은 잠재적인 1조 달러 규모의 기회를 준비하고 있는 Alphabet의 엄청난 잠재력을 나타냅니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1 trillion, $293.45,, 16.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $1 trillion, $293.45,, 16.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "d5ea178cc90d3492478c",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM",
        "QQQ",
        "SPY"
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
      "headline": "SpaceX's New Deal with Qualcomm Aims to Take on Mobile Carriers. History Says It's Going to Be an Uphill Battle.",
      "headlineKo": "SpaceX와 Qualcomm의 새로운 계약은 이동통신사를 공략하는 것을 목표로 합니다. 역사는 그것이 힘든 싸움이 될 것이라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=85479a559ba0f656a7c76b24e5803afd8afd109604be8bc18b88ba8b9f891a1d",
        "publishedAt": 1794498062,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX와 Qualcomm의 새로운 계약은 이동통신사를 공략하는 것을 목표로 합니다.",
        "역사는 그것이 힘든 싸움이 될 것이라고 말합니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,592.40 -0.4% -26.98 DJI 52,297.09 -0.4% -189.40 NASDAQ 25,366.09 -0.4% -100.10 비트코인 $68,910.00 -6.1% -$4,458.23 SPCX $139.94 +0"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.14%, 0.32%, 0.36% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.14%, 0.32%, 0.36% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ae3b024abc1789b10d40",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET",
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
      "headline": "The Open Question Under Arista Networks Stock's Price",
      "headlineKo": "Arista Networks 주식 가격에 대한 공개 질문",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02b4bebe504d6bb77cb585dc08e842989741ce8419d1dbfc450eb83ea8ba29bc",
        "publishedAt": 1794497177,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista Networks 주식 가격에 대한 공개 질문 | Trefis Arista Networks 주식 가격에 대한 공개 질문 2026년 11월 12일 · Trefis Team ANET YTD +50.1% SPY YTD +12.0% QQQ YTD +12.6% ANET 분석 → 이에 대한 질문",
        "Arista Networks(ANET)는 이미 2027년이 끝나기 1년 이상 전인 2027년에 예상되는 판매 금액을 투자자들에게 밝혔습니다.",
        "그러나 경영진은 앞으로 2분기 정도만 예상하고 있으며 회사가 2027년에 대한 모든 공급 주문을 완료하지 않았다고 말했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 50.1%, 12.0%, 12.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 50.1%, 12.0%, 12.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "b261948d5947f2cb3ed8",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta's $27B Off-Balance-Sheet AI Deal Reminds Steve Eisman of Enron— Joseph Carlson Disagrees",
      "headlineKo": "Meta의 270억 달러 부외 AI 거래는 Steve Eisman이 Enron을 떠올리게 합니다. Joseph Carlson은 이에 동의하지 않습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7154882bbba8ed9f40984631ecde8d05b56b24385213c4e64ed75e9784dd955d",
        "publishedAt": 1794496506,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta의 270억 달러 부외 AI 거래는 Steve Eisman이 Enron을 떠올리게 합니다. Joseph Carlson은 이에 동의하지 않습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "bba9cd5d57e3814fa88d",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV"
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
      "headline": "67% Upside for GE Vernova? Morgan Stanley Thinks So, and Here’s How",
      "headlineKo": "GE Vernova의 상승여력은 67%? Morgan Stanley는 그렇게 생각하며 그 방법은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=239ff75b0a5f9f09e5bd80f093e769107c258435de4a646d4997dc089268b7ba",
        "publishedAt": 1794496359,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley는 그렇게 생각하며 그 방법은 다음과 같습니다 | TIKR.com 일반 GE Vernova에 대해 67%의 상승 여력을 투자하고 있습니까?",
        "Morgan Stanley의 생각과 Roxanna Maglangit의 방법은 다음과 같습니다. • 4분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 12일 Getty Images Signature의 telegraham, Canva를 통한 Getty Images Signature의 Asobinin 주요 내용 Morgan S",
        "이는 해당 주식의 최근 종가보다 67% 높은 수준이다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 67%, $1,350, $200 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 67%, $1,350, $200 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GEV",
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
      "id": "46292896d7ac500d05b3",
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
      "headline": "What Does Oracle (ORCL) Gain From Its $4.5 Billion Nashville Headquarters Project?",
      "headlineKo": "Oracle(ORCL)은 45억 달러 규모의 Nashville 본사 프로젝트에서 무엇을 얻습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd5f5a55292649a75513064f0895c44eed1de9aa1946a922145cbd406fc30b2f",
        "publishedAt": 1794496282,
        "collectedAt": 1794604614.6422281
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
        "이 기사는 ORCL의 사업과 관련된 'What Does Oracle (ORCL) Gain From Its $4.5 Billion Nashville Headquarters Project?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "3737363b2475623334f2",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "TSM"
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
      "headline": "TSM SEC Form 6-K filed",
      "headlineKo": "TSM SEC Form 6-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000801/tsm-fsx20261113x6k.htm",
        "publishedAt": 1794495600.0,
        "collectedAt": 1794604861.6513052
      },
      "confirmedFacts": [
        "TSM가 2026-11-13에 SEC Form 6-K을 제출했습니다."
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "8-K·6-K는 계약·임원·재무·실적 등 여러 내용을 담을 수 있어 원문의 Item과 첨부자료 확인이 필요합니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다."
      ],
      "unverified": [
        "공시의 세부 조건과 금액은 아직 구조화하지 않았습니다."
      ],
      "beginnerExplanation": [
        "회사가 중요한 내용을 SEC에 공식 제출했다는 뜻입니다. 아직 양식의 세부 항목을 읽기 전이므로 호재·악재로 단정하지 않습니다."
      ],
      "whyItMatters": [
        "8-K·6-K는 계약·임원·재무·실적 등 여러 내용을 담을 수 있어 원문의 Item과 첨부자료 확인이 필요합니다."
      ],
      "impacts": [
        {
          "ticker": "TSM",
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
      "id": "626d74d96db0593c9a76",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "VRT"
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
      "headline": "VRT SEC Form 8-K filed",
      "headlineKo": "VRT SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026073564/vrt-20261113.htm",
        "publishedAt": 1794495600.0,
        "collectedAt": 1794604861.6513052
      },
      "confirmedFacts": [
        "VRT가 2026-11-13에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 규정 FD 공개 · 재무제표·첨부자료"
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
          "ticker": "VRT",
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
      "id": "385f6ade980205c95e66",
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
      "headline": "Min Jin Lee’s Contemporary Epic American Hagwon Selected as Amazon’s Best Book of 2026",
      "headlineKo": "이민진 작가의 『현대 서사시 미국 학원』이 아마존 선정 2026년 최고의 책으로 선정되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ac0d7def09f96b03306acc4930017cc3fa9a460b39aeb4a62d1f54d1c02cf085",
        "publishedAt": 1794492900,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이민진 작가의 『현대 서사시 미국 학원』이 아마존 선정 2026년 최고의 책으로 선정되었습니다."
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
      "id": "b5c090f32f41833d1817",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "LITE",
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
      "headline": "Lumentum Trades Below Marvell’s Buyout Offer. Is the Gap a Bargain?",
      "headlineKo": "Lumentum은 Marvell의 매수 제안보다 낮은 가격으로 거래됩니다. 격차는 할인인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d3e9b0912031f54d268a4c4cc657348c8f2b135166083342ddc22de006a8e4fe",
        "publishedAt": 1794491892,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum은 Marvell의 매수 제안보다 낮은 가격으로 거래됩니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,604.30 −0.29% Dow Jones 52,409.20 −0.28% Nasdaq 100 28,292.60 −0.20% Russell 2000 2,807.72 −1.48% S&P 500 7,604.30 −0.29% 다우존스 52,409.20 −0.28% 나스닥 100 28,292.60 −0.20% 러셀 20",
        "작성자: Trey Thoelcke 게시일: 2026년 11월 12일, 오전 8:58(ET) · 3분 읽음 𝕏 f ⧉ 이 게시물에는 스폰서 및 계열사의 링크가 포함될 수 있으며 Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $168.80,, $759.60, $648.06. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $168.80,, $759.60, $648.06. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8d69863e19fea72db092",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR",
        "LITE"
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
      "headline": "Coherent Soars 20% in a Week as Its Growth Guide Outlasts the AI Selloff: “Basically Booked Out”",
      "headlineKo": "Coherent는 성장 가이드가 AI 매도보다 오래 지속되면서 일주일 만에 20% 급등: “기본적으로 예약이 완료됨”",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38865771402855d8e23b285a801873bb39fd559163237c29a67de7366f3d90a8",
        "publishedAt": 1794491432,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Coherent는 성장 가이드가 AI 매도보다 오래 지속되면서 일주일 만에 20% 급등: \"기본적으로 예약이 완료됨\" | TIKR.com General Investing Coherent는 성장 가이드가 AI 매도보다 오래 지속되면서 일주일 만에 20% 급등: \"기본적으로 예약이 완료됨\" Rexielyn Diaz • 4",
        "경영진은 2027 회계연도에 60% 이상의 추정 수익 성장을 목표로 삼고 있습니다.",
        "CoreWeave의 구축 속도가 빨라지면 광학 제품에 대한 수요가 늘어나지만 경쟁사인 Lumentum은 훨씬 더 높은 마진을 얻습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 50%, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 20%, 50%, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "759c40ae4a25d7af185c",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "INTC",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "NVIDIA Sinks 9% on Reports Board Is Preparing to Oust Jensen Huang; Intel Falls 4%, AMD Holds Steady",
      "headlineKo": "NVIDIA는 Jensen Huang을 축출할 준비를 하고 있다는 보고서에서 9%를 기록했습니다. Intel은 4% 하락, AMD는 안정세 유지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c77ce486609c3f6be61272348bc58ccc687918bd5eabcb91700a94a5c85800f2",
        "publishedAt": 1794491337,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVIDIA는 Jensen Huang을 축출할 준비를 하고 있다는 보고서에서 9%를 기록했습니다. Intel은 4% 하락, AMD는 꾸준히 유지 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,569.40 −0.75% Dow Jones 52,472.70 −0.16% Nasdaq 100 27,978.40 −1.31% Russell 2000 2,835.80 −0.49% S&P 500 7,569.40 −0.75% 다우존스 52,472.70 −0.16% 나스닥 100 27,978.40 −1.31% 러셀 20",
        "𝕏 f ⧉ NVIDIA의 CEO인 Jensen Huang이 New York Times DealBook Summit에서 참석자들에게 연설하고 있으며, 이곳에서 자본 배치 및 투자 전략에 대한 논의가 이루어졌을 것입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 9%, 4%, $158.78 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 9%, 4%, $158.78 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c231d9e15d74dc44cc78",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Join The Dip Buyers in Micron If You Dare",
      "headlineKo": "용기가 있다면 Micron의 딥 바이어와 함께 하세요",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c72340ef8f3073d603ac76661ba8149101003d194443e078007fdf877bd65861",
        "publishedAt": 1794491155,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron If You Dare - 24/7 Wall St.에서 Dip 구매자와 함께 하세요.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,599.50 −0.35% Dow Jones 52,522.80 −0.07% Nasdaq 100 28,211.00 −0.49% Russell 2000 2,817.20 −1.14% S&P 500 7,599.50 −0.35% 다우존스 52,522.80 −0.07% 나스닥 100 28,211.00 −0.49% 러셀 20",
        "© Micron Micron Technology ( NASDAQ:MU | MU Price Prediction )는 $811.30에 거래되며 가격 변동폭이 큽니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $811.30, 11.89%, $133.19 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $811.30, 11.89%, $133.19 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1b8cf709e577fba47bc4",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "BetterUp Announces Collaboration with Microsoft to Support Managers as They Lead High-Performing Teams",
      "headlineKo": "BetterUp, 성과가 뛰어난 팀을 이끄는 관리자를 지원하기 위해 Microsoft와의 협력 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e68b914a933b2e3c8339de191d4e5797a2fdbddf3d7fbed0ca1a8e4edfd5b5b7",
        "publishedAt": 1794490200,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BetterUp Announces Collaboration with Microsoft to Support Managers as They Lead High-Performing Teams",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'BetterUp Announces Collaboration with Microsoft to Support Managers as They Lead High-Performing Teams' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "MSFT",
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
      "id": "963d36b3ef3989c7495b",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM"
      ],
      "relatedEntities": [
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm CEO on SpaceX deal: 'It's a great partnership' that will drive 'innovation'",
      "headlineKo": "SpaceX 거래의 Qualcomm CEO: '혁신'을 주도할 '훌륭한 파트너십'",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=71815c6e8648ee39e0084e0f642659626391ece445d57c8322f953a200d06b38",
        "publishedAt": 1794489888,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm CEO on SpaceX deal: 'It's a great partnership' that will drive 'innovation'",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "a016e247125190805a8d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Apple Is Hovering Around an All-Time High Despite the Broader Tech Sell-Off. Will New Products Like the iPhone Duo and HomeView Give Apple Even More Room to Run?",
      "headlineKo": "Apple은 광범위한 기술 매각에도 불구하고 사상 최고치를 맴돌고 있습니다. iPhone Duo 및 HomeView와 같은 신제품이 Apple에 더 많은 실행 공간을 제공할 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc372c54a0609c12965baba0133b374f1899d023fcb46645f9b6b127a562a71f",
        "publishedAt": 1794488580,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple은 광범위한 기술 매각에도 불구하고 사상 최고치를 맴돌고 있습니다.",
        "iPhone Duo 및 HomeView와 같은 신제품이 Apple에 더 많은 실행 공간을 제공할 수 있을까요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,589.21 -0.4% -30.17 DJI 52,388.19 -0.2% -98.30 NASDAQ 25,321.09 -0.6% -145.10 비트코인 $71,335.00 -3.6% -$2,689.31 SPCX $143.07 +2."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, 0.37%, 31% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, 0.37%, 31% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b92a6718ce270ffd5d60",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "QQQ",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Western Digital (NASDAQ:WDC): Affordable Growth With Accelerating Earnings",
      "headlineKo": "Western Digital(NASDAQ:WDC): 수익 가속화를 통한 합리적인 성장",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=2540950c73ff59b713921ee28e5367776bfe31ff79ee8ca572c68fd26ce88505",
        "publishedAt": 1794488443,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital(NASDAQ:WDC): 수익 가속화를 통한 합리적인 성장"
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
          "ticker": "WDC",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "2781b450e86812669239",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vistra Is Still Down 17% This Year: Did Earnings Just Mark the Bottom?",
      "headlineKo": "Vistra는 올해에도 여전히 17% 하락했습니다. 수익이 바닥을 찍은 것일까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23a487eb702b1c0dc012826c7d543f1a0574abee7d500e4152eafcb145e01734",
        "publishedAt": 1794488440,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra는 올해에도 여전히 17% 하락했습니다. 수익이 바닥을 찍은 것일까요?",
        "| TIKR.com General Investing Vistra는 올해에도 여전히 17% 하락했습니다. 수익이 바닥을 찍은 것일까요?",
        "Wiltone Asuncion • 5분 읽기 검토자: Michael Douglass 최종 업데이트: 2026년 11월 12일 Getty Images의 tifonimages, Canva를 통한 Getty Images Pro의 Thossaphol 주요 내용 Vistra는 텍사스 전력 가격이 2026년에 17% 하락했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 17%, 50%, $7.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VST에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 17%, 50%, $7.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "9ff7ea999c3211baeb0e",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Stegra and Meta sign agreement for environmental attribute certificates to advance green steel",
      "headlineKo": "Stegra와 Meta, 친환경 철강 발전을 위한 환경속성 인증서 협약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=747573a89cbeadd767acbb621220c25098bc85478df7afd3ee7afebb4289e68f",
        "publishedAt": 1794486540,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stegra and Meta sign agreement for environmental attribute certificates to advance green steel",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "760118681b93e3015046",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "MSFT",
      "relatedTickers": [
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
      "headline": "Scott Galloway: If AI Is “Like the Railroads,” Alphabet and Microsoft “Would Still Be Fine”",
      "headlineKo": "스콧 갤러웨이: AI가 \"철도와 같다\"면 알파벳과 마이크로소프트는 \"여전히 괜찮을 것\"",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9cf354b7d571bfdb5409b31a184007ca1a277e1c5f7c4733aee06080909aedf7",
        "publishedAt": 1794486249,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "스콧 갤러웨이: AI가 \"철도와 같다\"면 알파벳과 마이크로소프트는 \"여전히 괜찮을 것\" | TIKR.com 일반 투자 Scott Galloway: AI가 \"철도와 같다\"면 Alphabet과 Microsoft는 \"여전히 괜찮을 것입니다\" Roxanna Maglangit • 5분",
        "문제는 지출이다. 알파벳의 자본지출은 2분기 연속 영업현금흐름을 넘어섰고, 그 격차를 메우기 위해 주식을 빌리고 팔았다.",
        "파산하면 두 회사 모두 살아남을 수 있지만 가치 평가 배수가 손실되고 Microsoft의 향후 P/E는 이미 26배로 떨어졌습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $294.7 billion, $10.81, $18.13 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $294.7 billion, $10.81, $18.13 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bff5216cdb595808af46",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "MU"
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
      "headline": "Micron Out-Earned Apple Last Quarter, Yet It’s Worth 1/6 as Much. One of Those Two Things Is Wrong",
      "headlineKo": "마이크론은 지난 분기에 애플보다 더 많은 수익을 냈지만 가치는 1/6만큼 높습니다. 두 가지 중 하나가 잘못되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6cb43f8ce911c8549ceceab90202539b9f8ecea70ae090d518fa0e3b57053370",
        "publishedAt": 1794486185,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론은 지난 분기에 애플보다 더 많은 수익을 냈지만 가치는 1/6만큼 높습니다.",
        "두 가지 중 하나가 잘못되었습니다 | TIKR.com General Investing Micron은 지난 분기에 Apple을 능가했지만 가치는 1/6만큼 높습니다.",
        "두 가지 중 하나가 잘못되었습니다 Roxanna Maglangit • 6분 읽기 검토자: Michael Douglass 최종 업데이트: 2026년 11월 12일 @Wodthikorn Phutthasatchat from ภมพขมภมพขมภมWodthikorn Phutthasatchathum via Canva, @BLACKDAY via Canva Key Takeaways Micro"
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $37.7 billion, $30.7 billion, 79% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $37.7 billion, $30.7 billion, 79% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "7ca98a16144bcf327f76",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
        "QQQ",
        "SPY"
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
      "headline": "Intel’s Selloff Is Turning to Range Bound Consolidation",
      "headlineKo": "인텔의 매각이 범위 제한 통합으로 전환되고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=389f4cdfe85d749bf6ff37597534a07e44bacab6fbeb755597bfe451292b7703",
        "publishedAt": 1794485743,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔의 매각이 범위 경계 통합으로 바뀌고 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,569.40 −0.75% Dow Jones 52,472.70 −0.16% Nasdaq 100 27,978.40 −1.31% Russell 2000 2,835.80 −0.49% S&P 500 7,569.40 −0.75% 다우존스 52,472.70 −0.16% 나스닥 100 27,978.40 −1.31% 러셀 20",
        "© JasonDoiy / iStock Getty Images를 통해 공개되지 않음 Intel(NASDAQ:INTC | INTC Price Prediction)은 62.50달러에 거래됩니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $62.50., 38.33%, 7.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $62.50., 38.33%, 7.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9ab6813865fe4adfbac2",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "SPY"
      ],
      "relatedEntities": [
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
      "headline": "Amazon Stock At $266: How Much Of Its Profit Is Anthropic?",
      "headlineKo": "266달러의 아마존 주식: 인류 이익 중 얼마나 많은 부분이 인류에 의한 것인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a382b1040a79d2c34230ed64de0985d74e8a6b4a802fffd940f2ab987a0bc8eb",
        "publishedAt": 1794484942,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "266달러의 아마존 주식: 인류 이익 중 얼마나 많은 부분이 인류에 의한 것인가?",
        "| 266달러의 Trefis Amazon 주식: 인류 이익 중 얼마나 많은 부분이 인류에 도움이 됩니까?",
        "2026년 11월 12일 · Trefis 팀 AMZN YTD +15.3% SPY YTD +12.0% XLY YTD +1.7% AMZN 분석 → Anthropic IPO에 대한 추가 정보: Anthropic IPO 스토리라인 페이지에 이에 대한 우리의 조각이 수집되어 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $266, 15.3%, 12.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $266, 15.3%, 12.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "a0957ea5bbe873a99d4b",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC",
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
      "headline": "KLA Stock Has One Thing Left To Prove",
      "headlineKo": "KLA 주식에는 증명할 것이 한 가지 남아 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b5c5eb1133ffad0bf76e13e53ba09dfa658b018da54cc9badead5cd1779689f3",
        "publishedAt": 1794484941,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA 주식에는 증명할 것이 한 가지 남아 있습니다 | Trefis Trefis Storylines KLA 주식에는 증명해야 할 것이 한 가지 남아 있습니다. 2026년 11월 12일 · by Trefis Team KLAC YTD +29.9% SPY YTD +11.6% QQQ YTD +12.3% KLAC 분석 → 이 기사 또는 기사에 대한 질문이 있는 경우",
        "칩 제조업체를 위한 프로세스 제어 시스템을 만드는 KLA(KLAC)는 지난 12개월 동안 S&P 500의 21.9배에 비해 40배의 수익으로 거래되고 있습니다.",
        "이 가격은 KLA의 매출이 계속 증가할 것을 가정한 것으로 보이며, 이러한 성장에 대한 위험은 칩 제조업체의 수요보다는 KLA의 구축 및 배송 능력과 고객의 팹 준비 상태에 따라 더 낮아집니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 29.9%, 11.6%, 12.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 29.9%, 11.6%, 12.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "fdd0b5c33adfa01a9138",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Sublime Systems and Meta Sign Agreement to Scale U.S. Manufacturing of Next Generation Low-Carbon Cement",
      "headlineKo": "차세대 저탄소 시멘트의 미국 제조 규모를 확대하기 위해 Sublime Systems와 Meta Sign 계약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8522ffc32e247bdc71c738cc26c36e3bf88e394b91a235f4bf9a74afd71ff01",
        "publishedAt": 1794484800,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sublime Systems and Meta Sign Agreement to Scale U.S. Manufacturing of Next Generation Low-Carbon Cement",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "fde648c04a6aff9f8062",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nevoya and Meta Expand Partnership with 25 New Electric Trucks on the I-10 Corridor",
      "headlineKo": "Nevoya와 Meta는 I-10 통로에서 25대의 새로운 전기 트럭으로 파트너십을 확장합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c87f2c5a90245f54a1bfadfbc9d6d334f547dae5e2ed9ba6213a450151b91caa",
        "publishedAt": 1794484800,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nevoya와 Meta는 I-10 통로에서 25대의 새로운 전기 트럭으로 파트너십을 확장합니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7d96d2844a48e89e10e5",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Who are Europe’s startup alternatives to Palantir?",
      "headlineKo": "Palantir를 대체할 유럽 스타트업은 누구입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8f6f5839282509b1671235cd2cd896f1ccf13666872c9375c3b66fd4bb04040c",
        "publishedAt": 1794483013,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir를 대체할 유럽 스타트업은 누구입니까?",
        "- PitchBook 이미지 제공: Helsing Europe Palantir를 대체할 유럽의 스타트업 대안은 누구입니까?",
        "Helsing은 정부가 미국 공급업체에 대한 의존도를 평가함에 따라 Palantir의 Maven에 대한 유럽 대안으로 청구되는 플랫폼을 공개했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $18 billion, $1.5 trillion, €1 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $18 billion, $1.5 trillion, €1 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e1b16a0809b0e1ebca8f",
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
      "headline": "Google parent draws $5 billion in orders for AI debt sale",
      "headlineKo": "구글 모기업, AI 부채 매각 주문으로 50억 달러 유치",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73bdc9d4f10bf2ec95917a945e7dca8e117eb55307bbac0cf4b79771e2eb3774",
        "publishedAt": 1794481991,
        "collectedAt": 1794606789.9733207
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
        "이 기사는 GOOGL의 사업과 관련된 'Google parent draws $5 billion in orders for AI debt sale' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "92af0c56ece9e16bb43e",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "SNDK"
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
      "headline": "Micron and Sandisk surge as AI triggers a memory-chip shortage",
      "headlineKo": "AI가 메모리 칩 부족을 유발함에 따라 Micron과 Sandisk가 급증",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e8598b696bbda7251d6ae175a9ee68997818cf4df011f84e5ca6494f570a8de",
        "publishedAt": 1794481953,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI가 메모리 칩 부족을 유발함에 따라 Micron과 Sandisk가 급증"
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "18469ed30aece508881f",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM"
      ],
      "relatedEntities": [
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Semiconductor ETFs to Buy as Qualcomm Plunges Despite Q4 Earnings Beat",
      "headlineKo": "4분기 실적 부진에도 불구하고 퀄컴 급락으로 반도체 ETF 매수",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3967cb2dad9b9fb260365798a9bda484ae8c78ea4a9118f976cfccfe8d621d1b",
        "publishedAt": 1794480780,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "4분기 실적 부진에도 불구하고 퀄컴 급락으로 반도체 ETF 매수"
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
          "ticker": "QCOM",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ef332202c459c21aa735",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "VRT"
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
      "headline": "Vertiv: Good Quarter, Crushed Chart. Waiting For $150 Entry",
      "headlineKo": "Vertiv: Good Quarter, Crushed Chart. $150 입장을 기다리는 중",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=21f39eb31ccdc9eab40572f40365f11a63ee0ea0d7685154a60b8cbd7f60cc6f",
        "publishedAt": 1794479967,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv: 좋은 분기 실적, 주가 폭락.",
        "$150 참가 대기 중(NYSE:VRT) | Alpha Pau Galindo Ortigosa 522 추종자 팔로우 요약 Vertiv는 수익이 61% 증가하고 조정 EPS가 78% 증가하여 기대치를 뛰어넘는 매우 강력한 3분기를 달성했지만 주가는 가치평가로 급락했습니다.",
        "VRT는 2026년 지침을 수익 146억 5천만 달러, 조정 EPS 7.15달러로 상향 조정했으며 유기적 주문은 두 배 이상 증가했지만 백로그 가시성은 낮습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $150, 61%, 78% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VRT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $150, 61%, 78% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "VRT",
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
      "id": "b9acefeb69b23a00ed41",
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
      "headline": "Oracle breaks ground on $4.5bn headquarters in Nashville",
      "headlineKo": "오라클, 내슈빌에 45억 달러 규모 본사 착공",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e92dc8d749da8ff9f46bf351b1463621f32ab0ab42e90570cf3b7205bac2846a",
        "publishedAt": 1794479686,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle은 내슈빌에 45억 달러 규모의 본사 착공식을 가졌습니다. 사이트 메뉴로 건너뛰기 페이지 내용으로 건너뛰기 내슈빌 캠퍼스에는 6에이커 규모의 호수가 들어설 예정입니다.",
        "출처: Foster + Partners/Oracle Oracle은 미국 테네시주 내슈빌의 East Bank에 45억 달러 규모의 글로벌 본사 건설을 시작하여 이 도시의 기술 부문에 큰 발전을 이루었습니다.",
        "회사는 향후 엔지니어링, 기술, 의료 기술 인력을 수용할 예정인 현장 작업 시작을 알리는 착공식을 열었습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $4.5, $175, $1.55 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $4.5, $175, $1.55 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2d09cfc23ec9723e99a4",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Applied Materials Earnings Are Imminent; These Most Accurate Analysts Revise Forecasts Ahead Of Earnings Call",
      "headlineKo": "Applied Materials 수익이 임박했습니다. 가장 정확한 분석가들은 실적 발표에 앞서 예측을 수정합니다",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=48c8a3a02c45b9d1621c33f56715c812f91cea0459f89c5c2c377b667361f08e",
        "publishedAt": 1794476466,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials Earnings Are Imminent; These Most Accurate Analysts Revise Forecasts Ahead Of Earnings Call",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "f0719ac77388cca41f66",
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
      "headline": "Palantir Grew Revenue 96%. The Stock Fell 5%. Here's What I'm Doing.",
      "headlineKo": "Palantir는 매출 96% 성장했습니다. 주가는 5% 하락했습니다. 내가 하고 있는 일은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=14faac155e22780b89a1e90afe99212f74c26ed506f94e583792dacf420d03e2",
        "publishedAt": 1794474900,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir는 매출 96% 성장했습니다. 주가는 5% 하락했습니다. 내가 하고 있는 일은 다음과 같습니다."
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
      "id": "49625e63fe4ba69437cd",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Constellation Energy (NASDAQ:CEG) Clears All Eight Growth Rules With Accelerating Earnings and Sales",
      "headlineKo": "Constellation Energy(NASDAQ:CEG), 수익 및 판매 가속화로 8가지 성장 규칙 모두 삭제",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=df53e11d4e87feefb266f6b1c0be44a3e4cba66d26c0cba360b3f3f9933f9b0d",
        "publishedAt": 1794474066,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy (NASDAQ:CEG) Clears All Eight Growth Rules With Accelerating Earnings and Sales",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "95bdfea0353e9002989d",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Sandisk: The Next NAND Downturn Could Prove Bulls Right",
      "headlineKo": "Sandisk: 다음 NAND 침체는 황소가 옳았다는 것을 증명할 수 있습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=57cdcb8bdfa614388f304b370bef6620dd79cd57e42323055827b0b3daae8726",
        "publishedAt": 1794469502,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: 다음 NAND 침체는 강세가 옳다는 것을 증명할 수 있음 (NASDAQ:SNDK) | 알파 Quantryon 자본 추구 팔로워 2.52K 팔로우 요약 데이터 센터 수익은 연속 61% 증가한 48억 달러로 Sandisk 쿼트의 약 88%를 차지했습니다.",
        "장기 NAND 계약은 FY2027 비트의 약 절반, FY2028 비트의 2/3를 다루므로 향후 가격 하락에 대한 노출이 줄어듭니다.",
        "조정된 무료 현금 흐름은 미수금 증가와 공격적인 자사주 매입으로 면밀한 조사가 필요하지만 57억 달러에 달했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 61%, $4.8 billion, 88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 61%, $4.8 billion, 88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1e63082c0cabbe69bec9",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "PWR",
      "relatedTickers": [
        "PWR"
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
      "headline": "Quanta Services Sees Growth Ahead of Plan as Power and Data Center Demand Accelerates",
      "headlineKo": "Quanta Services는 전력 및 데이터 센터 수요가 가속화됨에 따라 계획보다 빠른 성장을 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=68030713a100993ded0e36573b0e9af250e5136cddd3e3f56643e8e6f8367f2d",
        "publishedAt": 1794463924,
        "collectedAt": 1794612816.8227484
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "전력 및 데이터 센터 수요가 가속화됨에 따라 Quanta Services는 계획보다 성장을 예측합니다. 주요 콘텐츠로 건너뛰기 → 이 콘텐츠를 무료로 드립니다(From Behind the Market)(광고) Quanta Services는 전력 및 데이터 센터 Dem으로서 계획보다 성장을 예측합니다",
        "MarketBeat Media, LLC의 이미지를 닫습니다.",
        "핵심 포인트 Quanta Services는 전력 인프라, 데이터 센터 및 재생 가능 에너지에 대한 수요에 힘입어 예상보다 빠르게 성장하고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 10%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PWR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PWR에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 20%, 10%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "7bc3d53f6d25c493471c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "GEV",
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
      "headline": "Nvidia Fallout: Taiwan Reportedly Revokes Re-Entry Of Alleged Spy Involved With Huang",
      "headlineKo": "엔비디아 폴아웃: 대만, 황과 연루된 스파이로 추정되는 사람의 재입국을 취소한 것으로 알려짐",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=440d801c2e81921326bf944faf3da0031ccea1e639ffa9b4d4b994f796b5a43b",
        "publishedAt": 1794461704,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔비디아 낙진: 대만, 황 AI 에이전트와 관련된 스파이 혐의의 재진입을 취소한 것으로 알려짐 트렌드 뉴스 수익 전체 DIA 0.01% SPY 0.44% QQQ 0.86% 트렌드 NVDA 6.78% RYCEY 0.28% BABA 5.49% ONDS CAPR 0.71% MLTX 7.56% GEV 1.43% STRL 0.0",
        "엔비디아 폴아웃: 대만, 황과 연루된 스파이로 의심되는 사람의 재입국을 취소한 것으로 알려짐",
        "Nvidia 로고는 중국 국기를 배경으로 스마트폰에 나타납니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.01%, 0.44%, 0.86% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.01%, 0.44%, 0.86% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "69bd33546040db5ac10b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "ARM",
        "CEG",
        "GEV",
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
      "headline": "Nvidia’s Next CEO Could Come From Inside – Or Arm: Here’s Who Traders Are Watching In The Succession Race",
      "headlineKo": "Nvidia의 차기 CEO는 내부 또는 Arm에서 나올 수 있습니다. 트레이더들이 승계 경쟁에서 주목하는 사람은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2aa6d979b18d9f3b47dd9456f1eec399e8b6bbd44aca1305d6377b419af2e43b",
        "publishedAt": 1794461193,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk는 Jensen Huang을 고용하는 것이 '명예'가 될 것이라고 말했습니다. 그러나 Nvidia에서 누가 그를 대신할 수 있을까요?",
        "AI 에이전트 동향 뉴스 수익 전체 DIA 0.01% SPY 0.44% QQQ 0.86% Trending NVDA 6.78% RYCEY 0.28% BABA 5.49% ONDS CAPR 0.71% MLTX 7.56% GEV 1.43% STRL 0.07% CEG 1.20% AMD 3.04% 홈 뉴스 시장 엔비디아의 차기 CEO는 Insi에서 나올 수 있다",
        "Nvidia의 차기 CEO는 내부 또는 Arm에서 나올 수 있습니다. 트레이더들이 승계 경쟁에서 주목하고 있는 사람은 다음과 같습니다. 일부 이사들은 CFO Colette Kress를 임시 CEO로 선호하는 반면 외부 회사는 후임자를 찾고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.01%, 0.44%, 0.86% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.01%, 0.44%, 0.86% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5bc3361f28ff46235410",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron vs. Sandisk: The AI Memory Supercycle Is Big Enough for Both, but Here's the Better Buy.",
      "headlineKo": "Micron 대 Sandisk: AI 메모리 슈퍼사이클은 두 가지 모두에 충분하지만 여기에 더 나은 구매가 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a305241aaf9ec325c1d4f13ad060c39741177cb6ced98c018f53ac713f4cc2f5",
        "publishedAt": 1794460800,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: AI 메모리 슈퍼사이클은 두 가지 모두에 충분하지만 여기가 더 나은 선택입니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,619.38 +1.3% +98.45 DJI 52,486.49 +0.5% +254.60 NASDAQ 25,466.19 +1.6% +400.31 비트코인 $73,463.00 -0.3% -$201.41 SPCX $139.75 -2.3",
        "두 회사 모두 메모리 가격 급등으로 수혜를 입고 있다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13.69%, 11.89%, 200% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13.69%, 11.89%, 200% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d853b0ab70394134a82e",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG"
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
      "headline": "Constellation Energy (CEG) Launched Peak+ Nuclear And Storage Contracts",
      "headlineKo": "Constellation Energy(CEG), Peak+ 원자력 및 저장 계약 개시",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d52850fe9b74a71ecdf0af60df234be4e8fb15aeb8eea8ac3f6b871c97681ce2",
        "publishedAt": 1794460382,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy (CEG) Launched Peak+ Nuclear And Storage Contracts",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "98b889d388d9ff537c8a",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Nvidia's Jensen Huang Is on the Hot Seat. Here's What I'm Doing With My Nvidia Stock",
      "headlineKo": "Nvidia의 Jensen Huang이 뜨거운 자리에 있습니다. 내 Nvidia 주식으로 무엇을 하고 있는지 살펴보겠습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1c33a527f2bcce6d3319a81f5dbe3385ffc682255200b9bdb38c52a967134c60",
        "publishedAt": 1794460252,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia의 Jensen Huang이 뜨거운 자리에 있습니다.",
        "내 Nvidia 주식으로 내가 하고 있는 일은 다음과 같습니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ 증권 고문 + ---% Join The Motley Fool S&P 500 7,619.38 +1.3% +98.45 DJI 52,486.49 +0.5% +254.60 NASDAQ 25,466.19 +1.6% +400.31 비트코인",
        "투자자는 Nvidia에 과도하게 노출되지 않도록 위험 관리에 집중해야 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.87%, 7%, $173.73 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 2.87%, 7%, $173.73 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c1fb786780d998ffd927",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
        "AMD",
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
      "headline": "NVDA Fallout Pressures Tech Trade As Investors Turn To Cerebras, Applied Materials For Chip Demand Cues",
      "headlineKo": "NVDA 낙진으로 인해 투자자들이 Cerebras로 눈을 돌리면서 기술 거래에 압력을 가하고 칩 수요 단서용 재료 적용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c6818cf3a8cbdf7a8eff07de627d1b95304b771b5d37e495c30b2044137a40f",
        "publishedAt": 1794459963,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVDA 낙진은 투자자들이 Cerebras로 눈을 돌림에 따라 칩 수요 신호를 위한 재료 적용 AI 에이전트 동향 뉴스 수익 전체 DIA 0.04% SPY 0.47% QQQ 0.91% 추세 NVDA 6.56% RYCEY 0.28% BABA 5.06% ONDS 0.17% NIGHT 8.19% AMD",
        "NVDA 낙진은 투자자들이 칩 수요 신호를 위해 Cerebras, 응용 재료로 전환함에 따라 기술 거래를 압박합니다. Nvidia 사가가 시장을 장악하고 있는 동안에도 투자자들은 주요 수익을 지켜보고 있습니다.",
        "뉴욕 증권거래소에서 트레이더들이 일하고 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.04%, 0.47%, 0.91% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.04%, 0.47%, 0.91% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0fd1dc36b3dad48c9ffe",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "monday.com vs. Palantir Technologies: Which Technology Stock Is a Better Buy for 2027?",
      "headlineKo": "monday.com 대 Palantir Technologies: 2027년에 어떤 기술 주식을 매수하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c754b06ec2bd1573a9349c890283ba4a144a5de8d151061f8b81b22afe5343f0",
        "publishedAt": 1794458922,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Technologies: 2027년에 어떤 기술 주식을 매수하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,619.38 +1.3% +98.45 DJI 52,486.49 +0.5% +254.60 NASDAQ 25,466.19 +1.6% +400.31 비트코인 $73,548.00 -0.4% -$326.60 SPCX $139.75 -2.3",
        "Palantir Technologies는 높은 마진과 상당한 현금 흐름으로 기업 AI 및 정부 부문을 장악하고 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.65%, 2.12%, $1.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 1.65%, 2.12%, $1.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "6a2e4ea4052faeb5ef50",
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
      "headline": "AAPL, GOOG Stocks Gain Overnight As NVDA Slides: Are Retail Investors Rotating Into Traditional Tech Amid Leadership Turmoil?",
      "headlineKo": "NVDA 슬라이드로 AAPL, GOOG 주가 밤새 상승: 소매 투자자들이 리더십 혼란 속에서 전통적인 기술로 전환하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae67bdd107dcd10f8f7e297b301b2e59f6b43b9549efa9ba7f7e9e3b36093334",
        "publishedAt": 1794458892,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 0.39%, 0.78%, 6.62%, 0.69%, 1.57%, 0.28%, 3.14%, 3.40%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'AAPL, GOOG Stocks Gain Overnight As NVDA Slides: Are Retail Investors Rotating Into Traditional Tech Amid Leadership Turmoil?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "7a057234006678daf574",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG"
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
      "headline": "How Earnings Beat At Constellation Energy Stock Has Changed Its Investment Story",
      "headlineKo": "Constellation Energy 주식의 수익이 투자 스토리를 어떻게 변화시켰는가",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6626facd4404df7c59846cac1fea7e7112e915bddeaf41af788baa2c0751c20",
        "publishedAt": 1794458017,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "How Earnings Beat At Constellation Energy Stock Has Changed Its Investment Story",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "fda55be0401c6b000203",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "INTC",
        "MRVL",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Advanced Micro Devices vs. Marvell Technology: Which Artificial Intelligence Stock Is a Better Buy Going into 2027?",
      "headlineKo": "어드밴스드 마이크로 디바이시스(AMD) vs. 마벨 테크놀로지(Marvell Technology): 2027년까지 투자하기에 더 나은 인공지능(AI) 주식은?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7333ccd302690f8686a301fad27eed04c1222929cad4cbcdcb110c50bbcbe0a3",
        "publishedAt": 1794455544,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology: 2027년에 접어들면서 어떤 인공지능 주식이 더 나은 매수 대상인가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool 가입 S&P 500 7,619.38 +1.3% +98.45 DJI 52,486.49 +0.5% +254.60 NASDAQ 25,466.19 +1.6% +400.31 비트코인 $73,470.00 -0.5% -$366.73 SPCX $139.75 -2.3",
        "마벨 테크놀로지는 핵심 데이터 인프라 및 맞춤형 칩을 전문으로 하며, 클라우드 컴퓨팅 네트워크의 급속한 확장에 따른 수혜를 누리고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7.32%, 9.33%, $34.6 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7.32%, 9.33%, $34.6 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e89a2549e3414c51b4b0",
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
      "relatedEntities": [],
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
      "headline": "Why Did AAPL, XERS, ZETA Stocks Jump To 52-Week Highs Today?",
      "headlineKo": "오늘 AAPL, XERS, ZETA 주식이 52주 최고가로 급등한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c435e0fa2b9f12c1297e6722c5332b1f982622ae5a709c121e73820580ac3de",
        "publishedAt": 1794455369,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 0.39%, 0.78%, 6.62%, 0.69%, 1.57%, 0.28%, 3.14%, 3.40%.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Why Did AAPL, XERS, ZETA Stocks Jump To 52-Week Highs Today?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "891c56308afc73138f9e",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Anthropic Now Makes Its Own Spreadsheet Software. Here's What I'd Do With Microsoft Stock.",
      "headlineKo": "Anthropic은 이제 자체 스프레드시트 소프트웨어를 만듭니다. Microsoft Stock으로 할 일은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6138230af3b3fd8fb3d4b03ea0c4aa7f649ad304b1d1ec62edfe6b53da4b655c",
        "publishedAt": 1794454022,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Anthropic은 이제 자체 스프레드시트 소프트웨어를 만듭니다.",
        "Microsoft Stock으로 할 일은 다음과 같습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,619.38 +1.3% +98.45 DJI 52,486.49 +0.5% +254.60 NASDAQ 25,466.19 +1.6% +400.31 비트코인 $73,463.00 -0.3% -$201.41 SPCX $139.75 -2.3"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 7%, 2.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 7%, 2.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "23f75abec70ff2a09d59",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "If SpaceX and Tesla Merge, Here's What a $10,000 Investment in the Combined Company Could Be Worth by 2030",
      "headlineKo": "SpaceX와 Tesla가 합병하면 2030년까지 결합 회사에 대한 10,000달러의 투자 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a75a2629a9ffebb96e61588087d9f7a4e9703a43edf3d7b2c946c59d49281891",
        "publishedAt": 1794451800,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX와 Tesla가 합병하면 2030년까지 결합 회사에 대한 10,000달러의 투자 가치는 다음과 같습니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool S&P 500에 가입 7,619.38 +1.3% +98.45 DJI",
        "하나는 가파른 밸류에이션으로 빠르게 성장하고 있는 반면, 다른 하나는 성장하지 않고 여전히 가파른 밸류에이션을 유지하고 있습니다.",
        "이 두 종목의 조합 투자가 2030년까지 돈을 버는 시나리오를 예상하기는 어렵다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.91%, 2.33%, $10,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.91%, 2.33%, $10,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8352f4d6ce2976dc70d1",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "QQQ",
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
      "headline": "Here's My Biggest Worry About Broadcom Stock. It Isn't Enough to Stop Me From Buying.",
      "headlineKo": "브로드컴 주식에 대한 저의 가장 큰 우려 사항은 다음과 같습니다. 그렇다고 해서 주식 매수를 중단할 정도는 아닙니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c225fa155ac9b6ce7c31e22a9fce29782bdbe9ba8f4b78cd6c4752dea555c09f",
        "publishedAt": 1794449582,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "브로드컴 주식에 대한 저의 가장 큰 우려는 다음과 같습니다.",
        "구매를 중단하기에 충분하지 않습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool 가입 S&P 500 7,619.38 +1.3% +98.45 DJI 52,486.49 +0.5% +254.60 NASDAQ 25,466.19 +1.6% +400.31 비트코인 $73,470.00 -0.5% -$366.73 SPCX $139.75 -2.3"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $115 billion, 3.99%, $291.53. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $115 billion, 3.99%, $291.53. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1b085c4a9f7c0d8ecbc1",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "BE",
      "relatedTickers": [
        "BE",
        "FIX",
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
      "headline": "BE Stock Clocked Best Single-Day Gain Since July As CoreWeave Flags AI’s Power Crunch – But Retail Traders Warn Of A 'Fast Fix'",
      "headlineKo": "CoreWeave가 AI의 전력 부족 문제를 지적하며 BE 주가가 7월 이후 최대 일일 상승폭 기록 – 하지만 소매 투자자들은 '빠른 해결책'에 대해 경고",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf1ce8f4b771f0b8541bffa94d589b29808352f24105a7e0055011f4d8c6bbd8",
        "publishedAt": 1794447482,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CoreWeave의 전력 수요 전망이 BE 주가를 끌어올렸지만, 소매 부문은 하락세로 전환: ‘해결책처럼 가격이 책정된 임시방편’ AI 에이전트 인기 뉴스 실적 전체 DIA 0.08% SPY 0.65% QQQ 1.61% 인기 SLS 2.24% U 5.16% SMMT 5.27% VKTX 5.84% RIVN 5.00% NVD",
        "BE 주가, 7월 이후 최대 일일 상승률 기록. CoreWeave, AI 전력난 경고 – 하지만 소매 투자자들은 '빠른 해결책'에 대해 경고. Bloom Energy의 주가는 CoreWeave의 실적이 AI 전력 수요 증가에 대한 관심을 불러일으킨 후 수요일 장 마감 시점에 거의 13% 급등했습니다.",
        "이 사진 일러스트레이션에서는 스마트폰 화면에 Bloom Energy 로고가 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.08%, 0.65%, 1.61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.08%, 0.65%, 1.61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "050a0cc6ede0f273eade",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Market Chatter: Microsoft Wants to Power Data Centers Without Subsidies or Higher Costs for Others",
      "headlineKo": "시장의 대화: Microsoft는 보조금이나 다른 사람을 위한 더 높은 비용 없이 데이터 센터에 전력을 공급하기를 원합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed5fbb5da81b98998c2a4917c525e895565dc36fc9f7a9885d8c68c5dae6e7ff",
        "publishedAt": 1794442098,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Market Chatter: Microsoft Wants to Power Data Centers Without Subsidies or Higher Costs for Others",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Market Chatter: Microsoft Wants to Power Data Centers Without Subsidies or Higher Costs for Others' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "MSFT",
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
      "id": "8dc4fd309387f350cd1c",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Nvidia's stock dives as board weighs move to oust Jensen Huang",
      "headlineKo": "Jensen Huang을 축출하려는 이사회의 움직임에 Nvidia의 주가가 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2411578ee09832557fc1387c6f2181677be979b7b64e1ced2e6a1e0e00fa567c",
        "publishedAt": 1794441078,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔비디아 주가는 칩 제조업체 이사회가 젠슨 황 CEO 축출 움직임을 고려함에 따라 급락",
        "엔비디아는 이번 주 혼외정사를 인정한 황에 대한 조사에 착수했습니다.",
        "정보기관은 이 CEO를 중국 국가안전보위부 자산으로 의심되는 중국 기업 임원 앨리스 황(관계 없음)과 연관지었습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, $159.51,, $450 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 8%, $159.51,, $450 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "76c6a55eba78b60e23b1",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "QQQ",
        "SPY",
        "TSM"
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
      "headline": "Dell Technologies vs. Taiwan Semiconductor: Which Technology Stock Is a Better Buy for 2027?",
      "headlineKo": "Dell Technologies vs. Taiwan Semiconductor: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f4304f9a9af91eecf1a08fb3f39eeb07533009fb60b0471004336ff89a794b2e",
        "publishedAt": 1794441002,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만 반도체: 2027년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,592.40 -0.4% -26.98 DJI 52,297.09 -0.4% -189.40 NASDAQ 25,366.09 -0.4% -100.10 비트코인 $71,519.00 -3.9% -$2,926.41 SPCX $139.94 +0",
        "Taiwan Semiconductor Manufacturing은 최첨단 칩 제조 노드에 대해 거의 독점권을 유지하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.67%, 1.90%, $371.17 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.67%, 1.90%, $371.17 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c7cedee670416fceb515",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
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
      "headline": "Nvidia’s Board Is Reportedly Preparing to Oust Jensen Huang. When Intel and McDonald’s Pushed Out CEOs Over Workplace Relationships, Shareholders Got Opposite Results",
      "headlineKo": "Nvidia 이사회는 Jensen Huang을 축출할 준비를 하고 있는 것으로 알려졌습니다. 인텔과 맥도날드가 직장 관계 문제로 CEO를 밀어냈을 때 주주들은 정반대의 결과를 얻었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fffb4e76d93a0e08167eea3a0746446c12793b434698c221801c4f9ecd1ac8ad",
        "publishedAt": 1794440059,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 이사회는 Jensen Huang을 축출할 준비를 하고 있는 것으로 알려졌습니다.",
        "인텔과 맥도날드가 직장 관계 문제로 CEO를 밀어냈을 때 주주들은 정반대의 결과를 얻었습니다. - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,587.00 −0.52% Dow Jones 52,503.20 −0.11% Nasdaq 100 28,099.00 −0.88% Russell 2000 2,844.00 −0.20% S&P 500 7,587.00 −0.52% 다우존스 52,503.20 −0.11% 나스닥 100 28,099.00 −0.88% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $160.95, 7.4%, 13.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $160.95, 7.4%, 13.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "d39feafe678b0d2cfb94",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV",
        "MOD",
        "MSFT",
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
      "headline": "GE Vernova’s Ontario Nuclear Plant Is Facing Delays And Rising Costs",
      "headlineKo": "GE Vernova의 온타리오 원자력 발전소는 지연과 비용 상승에 직면해 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c7e1f3d82109d908059d93c2c104efacc828deede20a0780a34866de7a63c92f",
        "publishedAt": 1794439599,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova의 온타리오 원자력 발전소는 지연 및 비용 상승에 직면하고 있습니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.16% SPY 0.15% QQQ 0.08% 추세 MSFT 2.22% SLS 15.57% BTC 5.71% CSCO 2.47% SMCI 0.26% CDNL 0.18% CADL 39.21% CBRS 16.50% MOD 23.",
        "GE Vernova의 온타리오 원자력 발전소는 지연 및 비용 상승에 직면하고 있습니다 온타리오에 있는 북미의 소형 모듈형 원자로 프로젝트는 건설 지연과 비용 초과에 직면하고 있습니다.",
        "이 사진 일러스트에서 GE 로고는 배경에 GE Vernova 로고가 있는 스마트폰에 표시되어 있습니다(Photo Illustration by Avishek Das/SOPA Images/LightRocket via Getty Images)."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.16%, 0.15%, 0.08% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.16%, 0.15%, 0.08% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GEV",
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
      "id": "3b05585e76d289afede9",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta Platforms (META) Braces For EU Rules With 6% Revenue Penalty Risk",
      "headlineKo": "메타 플랫폼(META)은 6% 수익 페널티 위험이 있는 EU 규칙을 준수합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b64b204118cba523b53ba2318eca3ab53e88eaa9d61fd815e1f9f56cbecd210",
        "publishedAt": 1794439040,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta Platforms (META) Braces For EU Rules With 6% Revenue Penalty Risk",
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
      "id": "316cea81605c7e101c45",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "NVDA",
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
      "headline": "Nvidia and Alphabet Just Agreed to Buy $10 Billion Each of Anthropic Stock at Its IPO Price",
      "headlineKo": "Nvidia와 Alphabet은 IPO 가격으로 각각 100억 달러 규모의 Anthropic 주식을 구매하기로 합의했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13132d03c5b8d69d4f31c02910a3f58b434d3e8ce498d01778b6101fa2f7c561",
        "publishedAt": 1794438421,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia와 Alphabet, 각각 100억 달러 상당의 Anthropic 주식을 IPO 가격으로 매수하기로 합의 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool 가입 S&P 500 7,619.38 +1.3% +98.45 DJI 52,486.49 +0.5",
        "Google의 이번 인수는 이미 약속한 투자금의 일부를 충당하는 것입니다.",
        "Nvidia는 회계연도 상반기에 거의 700억 달러의 잉여현금흐름을 창출했습니다."
      ],
      "marketInterpretation": [
        "고객의 공급처 다변화는 공급 안정성에는 긍정적이지만 기존 공급사에는 점유율·가격 협상력 위험이 될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $70 billion, $70, $78 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 고객 공급망 다변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $70 billion, $70, $78 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공급사별 물량 배분",
        "기존 계약 유지 여부",
        "다음 실적 고객 집중도"
      ]
    },
    {
      "id": "cad63e69ea1aee9fe59b",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today, Nov. 11: Intel Climbs on Broader Chip Rally as AI Infrastructure Demand Lifts Semiconductor Stocks",
      "headlineKo": "오늘, 11월 11일 주식 시장: AI 인프라 수요로 인해 반도체 주가가 상승함에 따라 Intel은 더욱 폭넓은 칩 랠리를 펼치고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5775ee9f1287376cba33fcb8173fb8e9a0f9145346349f7677d1a575333a6c60",
        "publishedAt": 1794438274,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "11: AI 인프라 수요로 인해 반도체 주가가 상승함에 따라 인텔, 광범위한 칩 랠리 확대 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool S&P 500에 참여 7,619.38 +1.3% +98.45 DJI 52,486.49 +0",
        "비상장, 비공개 또는 이중 종류의 비거래 주식은 포함되지 않습니다.",
        "$332.19B 일일 범위 $60.95 - $64.06 52주 범위 $32.89 - $142.35 볼륨 1억 3,320만 평균 볼륨 1억 1,630만 총 이익률 40.32% Intel( INTC +7.52% ) , x86 프로세서, AI 데이터 센터 칩 및 계약 반도체 제조 대기업, clo"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $332.19, $60.95, $64.06 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $332.19, $60.95, $64.06 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "053b309fd630e1fcfcdd",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Every December the Nasdaq-100 Reshuffles. QQQ Holders Feel It Even If They Never Trade",
      "headlineKo": "매년 12월 Nasdaq-100이 개편됩니다. QQQ 보유자는 거래를 하지 않아도 느껴집니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6eb0188d7a0dc384645ddb4fbfc15e253548dcf3d024cf220c44891aefda8d82",
        "publishedAt": 1794438183,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "매년 12월 Nasdaq-100이 개편됩니다.",
        "QQQ 보유자는 거래를 하지 않아도 느낀다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,591.20 −0.46% Dow Jones 52,517.70 −0.08% Nasdaq 100 28,141.80 −0.73% Russell 2000 2,844.10 −0.20% S&P 500 7,591.20 −0.46% 다우존스 52,517.70 −0.08% 나스닥 100 28,141.80 −0.73% 러셀 20"
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.46%, 0.08%, 0.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.46%, 0.08%, 0.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e2450bca24a2f20b2fbf",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Stock Market Today, Nov. 11: Advanced Micro Devices Jumps -- and Not Only Because of CoreWeave's Results",
      "headlineKo": "오늘, 11월 11일 주식 시장: 첨단 마이크로 장치의 상승 - 단지 CoreWeave의 결과 때문만은 아닙니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7195c819b4f2a74bca3f973ac14594dea12a4f9e6de7c2cb7706c41766f96fab",
        "publishedAt": 1794437554,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "11: 고급 마이크로 장치의 도약 - CoreWeave의 결과 때문만은 아닙니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool S&P 500에 참여 7,619.38 +1.3% +98.45 DJI 52,486.49 +0.5% +254.60 NA",
        "비상장, 비공개 또는 이중 종류의 비거래 주식은 포함되지 않습니다.",
        "$844.99B 일일 범위 $522.65 - $567.65 52주 범위 $188.22 - $658.52 거래량 4590만 평균 거래량 23.2M 총 이익 51.19% 주요 반도체 기업인 Advanced Micro Devices(AMD +7.32% )는 7.32% 상승한 $552.90으로 마감했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $844.99, $522.65, $567.65 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $844.99, $522.65, $567.65 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "0fa5ea8eeea7286dbaab",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Stock Is Down 40% From Its Peak After the Sell-Off. History Says This Is What Happens Next.",
      "headlineKo": "마이크론 주식은 매도 후 최고점에서 40% 하락했습니다. 역사는 이것이 다음에 일어날 일이라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=167e20fc204925e5ce6aaf10c261b8bb8f38dfe385b22abf090489040fa0b56e",
        "publishedAt": 1794436442,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 주식은 매도 후 최고점에서 40% 하락했습니다.",
        "역사는 이것이 다음에 일어날 일이라고 말합니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,619.38 +1.3% +98.45 DJI 52,486.49 +0.5% +254.60 NASDAQ 25,466.19 +1.6% +400.31 비트코인 $73,463.00 -0.3% -$201.41 SPCX $139.75 -2.3"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 40%, 11.89%, $811.30 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 40%, 11.89%, $811.30 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a0043d54e83540f4cade",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Applied Materials (AMAT) Rebounds Ahead Of Earnings, Is It Still Trading At A Discount?",
      "headlineKo": "어플라이드머티어리얼즈(AMAT) 실적보다 반등, 아직도 할인 거래되고 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83c3acc19245b6a4eb7851825c419b3b6535806d140455097c0d90e7a159c66d",
        "publishedAt": 1794435127,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials (AMAT) Rebounds Ahead Of Earnings, Is It Still Trading At A Discount?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "c37727c2480ca159d796",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "ORCL",
      "relatedTickers": [
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
      "headline": "Oracle Stock Just Surged After CoreWeave Earnings. Here's Why One Analyst Says It's Built for the Data-Center Backlash",
      "headlineKo": "CoreWeave 수익 이후 Oracle 주식이 급등했습니다. 한 분석가가 데이터 센터 백래시를 위해 구축되었다고 말하는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=271ebc43316bb908bbcd7656435a5cc9e5ca98fbc76fad5c1f195edbbc487b7d",
        "publishedAt": 1794435102,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CoreWeave 수익 이후 Oracle 주식이 급등했습니다.",
        "한 분석가가 데이터 센터 백래시를 위해 구축되었다고 말하는 이유는 다음과 같습니다. The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,619.38 +1.3% +98.45 DJI 52,486.49 +0.5% +254.60 NASDAQ 25,466.",
        "Mizuho는 Oracle의 5대 데이터 센터 사이트가 이미 건설 중이므로 건설에 대한 새로운 제한으로부터 보호받을 수 있다고 말합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $664 billion, 8.81%, 9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $664 billion, 8.81%, 9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7933144a8775b0509bb9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MU",
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
      "headline": "Micron Technology (MU) Commits $1 Billion To Landmark AI Infrastructure IPO",
      "headlineKo": "Micron Technology(MU), 랜드마크 AI 인프라 IPO에 10억 달러 투자",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90f1a3f037061811f19953d97685d3e468538569ac1ee9b617b03e397a4285aa",
        "publishedAt": 1794435041,
        "collectedAt": 1794608845.580491
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
        "이 기사는 MU의 사업과 관련된 'Micron Technology (MU) Commits $1 Billion To Landmark AI Infrastructure IPO' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "13e33f2e589d15ec32ae",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "AMAT",
        "LRCX"
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
      "headline": "Lam Research Sinks 16%, Applied Materials 15% in a Week. Lam Responds With $25 Billion Buyback",
      "headlineKo": "Lam Research는 일주일 만에 16%, Applied Materials는 15% 하락했습니다. Lam, 250억 달러 자사주 매입으로 응답",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7f258a70911ad380f597f7ead0e829a3bbbedc92af876c8b2b6f5627295a67ca",
        "publishedAt": 1794434854,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research는 일주일 만에 16%, Applied Materials는 15% 하락했습니다.",
        "Lam, 250억 달러 규모의 자사주 매입으로 응답 | TIKR.com General Investing Lam Research는 일주일 만에 16%, Applied Materials는 15% 하락했습니다.",
        "Lam, 250억 달러 규모의 자사주 매입 Nikko Henson으로 응답 • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 11월 11일 @Kittipong Jirasukhanont from PhonlamaiPhoto's Images via Canva; Canva를 통해 얻은 Getty Images의 @IncrediVFX 주요 내용 La"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 16%, 15%, $25 Billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LRCX에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 16%, 15%, $25 Billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "6d04436554807901ca56",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "SPY",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The Reason To Buy Vertiv Stock Today",
      "headlineKo": "지금 Vertiv 주식을 구매해야 하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c254db10484d1f1d39e2723c7675e76d55f84be96420459d8e4a0b71d0d2b2a9",
        "publishedAt": 1794433720,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금 Vertiv 주식을 구매해야 하는 이유 | Trefis가 오늘 Vertiv 주식을 구매한 이유 2026년 11월 11일 · 작성자: Trefis Team VRT YTD +27.6% SPY YTD +12.0% XLI YTD +10.8% VRT 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 이메일로 문의하세요.",
        "10월 29일 종가부터 11월 10일 사이에 Vertiv(VRT) 주식이 21% 하락하는 것을 본 적이 있다면 아마도 매도가 끝났는지 묻고 있을 것입니다.",
        "어쨌든 매수하는 경우는 비슷한 하락세 이후의 주식의 역사적 성과와 매출이 여전히 빠르게 성장하고 있는 기업에 달려 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 27.6%, 12.0%, 10.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VRT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 27.6%, 12.0%, 10.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "VRT",
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
      "id": "2d35076d9d909ec4ab3b",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Amazon and Google Are Sitting on a $411 Billion Anthropic Windfall",
      "headlineKo": "Amazon과 Google은 4,110억 달러의 인류 횡재에 직면해 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c7b761f6d7cefcccb9ebbc0096e03de99d77b88c0c766cc41e0a13497b54037",
        "publishedAt": 1794430065,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon과 Google, 4,110억 달러 규모의 Anthropic 대박을 보유 - 24/7 Wall St.",
        "콘텐츠로 건너뛰기 ❚❚ ● 시장 개장 마감 시 S&P 500 7,587.20 −0.51% 다우존스 52,495.70 −0.12% 나스닥 100 28,097.20 −0.89% 러셀 2000 2,843.80 −0.21% S&P 500 7,587.20 −0.51% 다우존스 52,495.70 −0.12% 나스닥 100 28,097.20 −0.89% 러셀 20",
        "아마존( NASDAQ:AMZN | AMZN 주가 전망 )과 알파벳( NASDAQ:GOOG , NASDAQ:GOOGL )은 모두 10월 말에 3분기 실적을 발표했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $411 Billion, $411 billion, $78, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $411 Billion, $411 billion, $78, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "01d9221d0dbee01307e8",
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
      "headline": "Intel Stock Faces 87 Million-Share Risk After SoftBank Deal",
      "headlineKo": "Intel 주식은 SoftBank 거래 후 8,700만 주 위험에 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b792649ad8d56ef66b03b6d48fc0a017e8b5b4b5b14c1d88b5508df8061dd23",
        "publishedAt": 1794429268,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel Stock Faces 87 Million-Share Risk After SoftBank Deal",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "d75fdbbf0689922b3544",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "13 Big Funds Sold Applied Materials. Should You Follow Them Before Earnings?",
      "headlineKo": "13대규모 자금이 어플라이드머티어리얼즈 매각. 수익을 내기 전에 따라야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=52c1ee2d059c2912202916419fa2926d9d55449126e18113b2d6d44b96b55639",
        "publishedAt": 1794428914,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "13대규모 자금이 어플라이드머티어리얼즈 매각.",
        "수익을 내기 전에 따라야 할까요?",
        "| TIKR.com General Investing 13개 대형 펀드에서 Applied Materials 매각."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 48%, 6.1%, 22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 48%, 6.1%, 22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cda3ba61f76309533859",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Stock Just Scored a New $325 Price Target",
      "headlineKo": "오라클 주가가 새로운 목표가인 $325를 달성했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d61c51a1528772d3e01e890f9d84c5fc175752aeb4d0943287f4d2993bafe82e",
        "publishedAt": 1794428387,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클 주가가 새로운 목표가인 $325를 달성했습니다."
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "60f2f776df805b7b5de4",
      "schemaVersion": 1,
      "eventType": "competitor_supply_contract",
      "eventLabel": "경쟁사 공급 계약",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "LITE",
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
      "headline": "Marvell Acquires Lumentum in Blockbuster $80 Billion Deal",
      "headlineKo": "Marvell, 블록버스터 800억 달러 거래로 Lumentum 인수",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4bd92908d146b4356e44b56a87682db36c2216bbc72c1a5c246cb4cb799f9a3",
        "publishedAt": 1794428374,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell은 블록버스터 800억 달러 규모의 거래에서 Lumentum을 인수했습니다. – 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,592.20 −0.45% Dow Jones 52,501.70 −0.11% Nasdaq 100 28,195.10 −0.55% Russell 2000 2,843.85 −0.21% S&P 500 7,592.20 −0.45% 다우존스 52,501.70 −0.11% 나스닥 100 28,195.10 −0.55% 러셀 20",
        "https://videos.247wallst.com/247wallst.com/2026/11/Marvell-1702400.mp4 Brad Faye 모든 기사 → 계속 읽기 새 에피소드: 우리는 이 AI 주식 뒤에 50만 달러를 투자하고 있습니다 AI 투자자 팟캐스트의 새로운 에피소드, Eric Bleeker 및 Dav"
      ],
      "marketInterpretation": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
        "이번 기사에서 확인된 구체적 수치: $80 Billion, $500, $500,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 경쟁사 수주 · 고객 점유 변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "경쟁사가 같은 고객에게 납품할 기회를 얻었다는 뜻입니다. 기존 회사 물량을 빼앗은 것인지, 고객이 공급처를 하나 더 늘린 것인지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
        "이번 기사에서 확인된 구체적 수치: $80 Billion, $500, $500,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 공급사의 실제 물량",
        "기존 공급사 매출 비중",
        "고객의 이중 공급 전략"
      ]
    },
    {
      "id": "d8629997eed35ea26edd",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "META",
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
      "headline": "Democrats Could Target Data Center Tax Breaks in 2027. What It Means for Meta, Microsoft, Alphabet, and Amazon",
      "headlineKo": "민주당은 2027년에 데이터 센터 세금 감면을 목표로 삼을 수 있습니다. Meta, Microsoft, Alphabet 및 Amazon에 미치는 영향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f094ed89e128615c17131c1109390574f329787938aa76336e75fd8f3f300fa2",
        "publishedAt": 1794428288,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "민주당은 2027년에 데이터 센터 세금 감면을 목표로 삼을 수 있습니다.",
        "Meta, Microsoft, Alphabet 및 Amazon에 대한 의미 | TIKR.com 일반 투자 민주당은 2027년에 데이터 센터 세금 감면을 목표로 삼을 수 있습니다.",
        "Meta, Microsoft, Alphabet 및 Amazon Nikko Henson에 대한 의미 • 읽기 7분 검토자: David Hanson 마지막 업데이트 2026년 11월 11일 Getty Images의 @Maxiphoto Canva를 통한 서명 주요 내용 메타 플랫폼(META)이 추가 문제에 직면할 수 있음"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $116 billion, $9.07 billion, $220 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $116 billion, $9.07 billion, $220 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "86d6ca918491d5b4a6ae",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Replit Awarded 2026 Microsoft for Startups Partner of the Year",
      "headlineKo": "Replit는 2026년 Microsoft 스타트업 부문 올해의 파트너로 선정되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0911ad7652420d5f534371069e94cb936c43b586e7ffc454bd6f22309de29851",
        "publishedAt": 1794427260,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Replit는 2026년 Microsoft 스타트업 부문 올해의 파트너로 선정되었습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "6cb46596e2da1a96b20e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
        "TSM"
      ],
      "relatedEntities": [
        {
          "name": "TSMC",
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
      "headline": "TSMC Secures Its Future by Investing in Anthropic and OpenAI",
      "headlineKo": "TSMC는 Anthropic 및 OpenAI에 투자하여 미래를 확보합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7fa10c1ff0bb929fd3d8fd9925d203919fa60c05f178a09c7c70dec738f06057",
        "publishedAt": 1794427176,
        "collectedAt": 1794610816.5931563
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
        "이 기사는 TSM의 사업과 관련된 'TSMC Secures Its Future by Investing in Anthropic and OpenAI' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "4046d7dc8eeede939317",
      "schemaVersion": 1,
      "eventType": "insider_sale",
      "eventLabel": "내부자 매도",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET",
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
      "headline": "Arista’s Co-Founder Has Sold About $668 Million of Stock Since May",
      "headlineKo": "Arista의 공동 창업자는 5월 이후 약 6억 6,800만 달러의 주식을 매각했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3605e5414691f7b2927906011bd321c210f77a6ad5285985c6727d703aabf6c5",
        "publishedAt": 1794425842,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista의 공동 창업자는 5월부터 연중무휴 월스트리트에서 약 6억 6,800만 달러의 주식을 판매했습니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,569.40 −0.75% Dow Jones 52,472.70 −0.16% Nasdaq 100 27,978.40 −1.31% Russell 2000 2,835.80 −0.49% S&P 500 7,569.40 −0.75% 다우존스 52,472.70 −0.16% 나스닥 100 27,978.40 −1.31% 러셀 20",
        "Andreas Bechtolsheim은 ​​2026년 11월 5일 Arista Networks(NYSE:ANET | ANET Price Prediction) 주식 260,000주를 약 $165.45의 가중 평균 가격(약 4,300만 달러)에 매각했습니다."
      ],
      "marketInterpretation": [
        "내부자 매도만으로 전망 악화를 단정할 수 없으며 옵션 행사·10b5-1 계획·보유비중을 함께 봐야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $668 Million, $165.45,, $43.0 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 내부자 매도 · 맥락 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "임원이 주식을 팔았다는 사실만으로 회사가 나빠졌다고 볼 수는 없습니다. 반복 여부와 보유 주식 중 얼마나 팔았는지가 중요합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "내부자 매도만으로 전망 악화를 단정할 수 없으며 옵션 행사·10b5-1 계획·보유비중을 함께 봐야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $668 Million, $165.45,, $43.0 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "Form 4 거래 코드",
        "전체 보유주식 대비 비율",
        "여러 임원의 반복 매도"
      ]
    },
    {
      "id": "84c1094f9d378be92bb9",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MU",
      "relatedTickers": [
        "AAPL",
        "MU",
        "QCOM"
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
      "headline": "Micron Stock Fell 30% in a Week. Bernstein Says It Could Nearly Double",
      "headlineKo": "마이크론 주가는 일주일 만에 30% 하락했다. 번스타인은 거의 두 배로 늘어날 수 있다고 말합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c89f6032a67e9dc8a6d2e49e789ac8a701e2bf46d0fdc1a1c85fce63b74215e",
        "publishedAt": 1794425088,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "번스타인은 거의 두 배로 늘어날 수 있다고 말합니다 | TIKR.com General Investing Micron 주식은 일주일 만에 30% 하락했습니다.",
        "Bernstein은 Nikko Henson을 거의 두 배로 늘릴 수 있다고 말합니다. • 4분 읽기 검토자: David Hanson 마지막 업데이트 2026년 11월 11일 @Wodthikorn Phutthasatchat from ภгаพข่NGWodthikorn Phutthasatchathum via Canva, @BLACKDAY via Canva 주요 내용 Micron Te",
        "퀄컴(QCOM)은 같은 기간 약 15.5% 하락했고, 애플(AAPL)은 메모리 가격 상승이 수익성에 영향을 미친다고 경고했다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, 29.7%, $656.39 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, 29.7%, $656.39 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9a9fa9598c56925f128b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "MSFT",
        "QQQ",
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
      "headline": "Amazon and Microsoft Lead the Cloud Market. One of Them Has Far Greater Upside.",
      "headlineKo": "Amazon과 Microsoft가 클라우드 시장을 선도하고 있습니다. 그 중 하나는 훨씬 더 큰 상승 여력을 가지고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3e05ab792717164205af034db868f95178d876dce654bf04a335d7a5284a6ece",
        "publishedAt": 1794423900,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon과 Microsoft가 클라우드 시장을 선도하고 있습니다.",
        "그 중 하나는 훨씬 더 큰 상승 여력을 가지고 있습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,625.19 +1.4% +104.26 DJI 52,489.70 +0.5% +257.81 NASDAQ 25,503.89 +1.7% +438.02 비트코인 $74,453.00 +1.2% +$858.03 SPCX $141.30 -1."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.64%, 2.51%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.64%, 2.51%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3dfe6e94e1e37a88d0f0",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "LITE",
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
      "headline": "Lumentum Stocks Jump 14.85% as AI Optics Rebound Narrows Marvell Deal Gap",
      "headlineKo": "AI Optics 반등으로 Marvell 거래 격차가 줄어들면서 Lumentum 주식은 14.85% 상승했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae8d076253ad558a2e210f2af1361c1a1b69bf3314ad2903172a8ecac7308fd8",
        "publishedAt": 1794423780,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum Stocks Jump 14.85% as AI Optics Rebound Narrows Marvell Deal Gap",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "740812be840c47d5a021",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
        "KLAC",
        "LRCX",
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
      "headline": "Applied Materials Rallies 8% Ahead of Earnings as Chip Stocks Rebound; Lam Research Jumps 9%, KLA Climbs 7%",
      "headlineKo": "어플라이드 머티어리얼즈, 칩 재고 반등으로 수익보다 8% 앞서 상승 Lam Research는 9% 상승, KLA는 7% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a7e04e0c9b336a597c8ba2781eefa8c0e332afdc1e77f060d9344f4b97b336a4",
        "publishedAt": 1794423777,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티어리얼즈, 칩 재고 반등으로 수익보다 8% 앞서 상승 Lam Research는 9% 상승, KLA는 7% 상승 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,604.40 −0.29% Dow Jones 52,548.20 −0.02% Nasdaq 100 28,265.20 −0.30% Russell 2000 2,850.15 +0.01% S&P 500 7,604.40 −0.29% 다우존스 52,548.20 −0.02% 나스닥 100 28,265.20 −0.30% 러셀 20",
        "𝕏 f ⧉ 투자자는 노트북으로 자세한 주식 시장 차트를 모니터링하여 Shopify와 같은 주요 수익 보고서에 앞서 실시간 재무 분석을 보여줍니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, 9%, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 8%, 9%, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "cbe2b1e2ff0681b029b1",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "LITE",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell Technology Stocks Surge 12.22% as AI Optics Rally Eases Lumentum Deal Doubts",
      "headlineKo": "AI 광학 랠리가 Lumentum 거래 의심을 완화함에 따라 Marvell Technology 주식이 12.22% 급등했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1dd7915d708f30f8720eb600d7f004cadc13cc0dea3d8ccacb29c50a0019d6f2",
        "publishedAt": 1794423704,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology Stocks Surge 12.22% as AI Optics Rally Eases Lumentum Deal Doubts",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "101ffa68df28fca19cef",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "VRT",
      "relatedTickers": [
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vertiv Stocks Climb 6.9% as AI Data Center Rebound Lifts Power and Cooling Supplier",
      "headlineKo": "AI 데이터 센터 반등으로 전력 및 냉각 공급업체가 상승함에 따라 Vertiv 주가 6.9% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d163d80f942a2e3c443e201e6fa69df73d727b0c1043a422392ed7f47bf9d287",
        "publishedAt": 1794423248,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv Stocks Climb 6.9% as AI Data Center Rebound Lifts Power and Cooling Supplier",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 VRT의 사업과 관련된 'Vertiv Stocks Climb 6.9% as AI Data Center Rebound Lifts Power and Cooling Supplier' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "VRT",
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
      "id": "a676f75e52ccedfa10c7",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR"
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
      "headline": "Coherent Stocks Climb 11.5% as Datacenter Optics Demand Lifts AI Suppliers",
      "headlineKo": "데이터 센터 광학 수요가 AI 공급업체를 증가시키면서 코히어런트 주식은 11.5% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5022580106f3bf64774f713062e0ec50fd89d5266a8b07cf0e28d616de7ab791",
        "publishedAt": 1794423220,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Coherent Stocks Climb 11.5% as Datacenter Optics Demand Lifts AI Suppliers",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 COHR의 사업과 관련된 'Coherent Stocks Climb 11.5% as Datacenter Optics Demand Lifts AI Suppliers' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "COHR",
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
      "id": "1cd61977c981e5b60848",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Cramer Says Apple Investors Who Sold After Steve Jobs Missed Years Of Gains. The Stock Is Up Nearly 3,000% Since. Now He’s Asking If Nvidia Needs Jensen Huang",
      "headlineKo": "크레이머는 스티브 잡스가 수년간의 이익을 놓친 후 매각한 애플 투자자들에 대해 말했습니다. 주가는 이후 거의 3,000% 상승했습니다. 이제 그는 Nvidia에 Jensen Huang이 필요한지 묻고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38a2058ef70eb1df985ca48405e878a794af19999c65f060f6473460107af077",
        "publishedAt": 1794422817,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 3,000%, 2,980.67%, 2,997.62%, $114.48 billion, 11.7%, $2.10, $1.9782, 30.69%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Cramer Says Apple Investors Who Sold After Steve Jobs Missed Years Of Gains. The Stock Is Up Nearly 3,000% Since. Now He’s Asking If Nvidia Needs Jensen Huang' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "1dd4218757891a737d75",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Applied Materials Stocks Climb 5.72% a Day Before Fourth-Quarter Results",
      "headlineKo": "어플라이드 머티어리얼즈 주가, 4분기 실적 하루 전 5.72% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=476acbd008af73c5cc9277bd1240f7a73108e59686771cf6049b6a64503a5dbb",
        "publishedAt": 1794422391,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials Stocks Climb 5.72% a Day Before Fourth-Quarter Results",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "f7f2994c962fb69736d0",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "NVDA"
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia, AMD and Broadcom Lead AI Stock Rally as CoreWeave Results Ease Spending Fears",
      "headlineKo": "Nvidia, AMD 및 Broadcom은 CoreWeave 결과로 지출 우려를 완화하면서 AI 주식 랠리를 주도합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec837f54c5ed003eea22a8c8109b8c375900f6dca8b3bf3e0d8b7128847934bc",
        "publishedAt": 1794422228,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia, AMD 및 Broadcom은 CoreWeave 결과로 지출 우려를 완화하면서 AI 주식 랠리를 주도합니다."
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
          "ticker": "AMD",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7f73dcc23ac0dab6a1d4",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Applied Materials fiscal Q4 2026 earnings preview: what to watch for in the print",
      "headlineKo": "어플라이드 머티어리얼즈 회계연도 2026년 4분기 실적 미리보기: 인쇄물에서 주목해야 할 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=391577a3f2f73e0cc5471c227e3c3c646a9a427ad28fd2e0bc930787829f2773",
        "publishedAt": 1794420479,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials fiscal Q4 2026 earnings preview: what to watch for in the print",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "236a44177d8c4d5ebe91",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arista Networks, Inc. 2026 Q3 - Results - Earnings Call Presentation",
      "headlineKo": "Arista Networks, Inc. 2026년 3분기 - 결과 - 수익 보고 프레젠테이션",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e86b61b9d2be875097ac046a45474ee0d3289b3138a6f2ea4229efa5a7508b2b",
        "publishedAt": 1794420133,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista Networks, Inc. 2026년 3분기 - 결과 - 수익 보고 프레젠테이션"
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
          "ticker": "ANET",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "97abe8c95f97eba8d38d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Qualcomm's AI data centre ambitions offer upside, but Bank of America remains cautious",
      "headlineKo": "Qualcomm의 AI 데이터 센터 야망은 긍정적이지만 Bank of America는 여전히 조심스럽습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38f11c8ffe596f9eef787198f66796c65786a9675b895d36d9107674ee49a8a4",
        "publishedAt": 1794419400,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm의 AI 데이터 센터 야망은 긍정적이지만 Bank of America는 여전히 신중함 | NASDAQ:QCOM, XETRA:QCI 무엇을 찾고 계십니까?",
        "회사 뉴스 일치하는 모든 회사 보기 일치하는 모든 뉴스 보기 What Brokers Say Tech 작성자: Angela Harmantas 편집자: Angela Harmantas 면책 조항 투자 조언 없음 이 콘텐츠에 대해 편집 표준 및 정책 기사 A 공유",
        "그녀는 특히 후배 자원주에 초점을 맞춰 북미 주식 시장을 다루는 15년 이상의 경험을 갖고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $50 billion, $650 million, $7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $50 billion, $650 million, $7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "06ff260adf1ec687e3d5",
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
      "headline": "Is the Micron Sell-Off a Buying Opportunity or a Falling Knife?",
      "headlineKo": "마이크론 매도는 매수 기회인가, 아니면 떨어지는 칼인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2212157fc65aa12e532337d0920f21b244e145d69b5a62bae67e0116db6e3a6",
        "publishedAt": 1794419400,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 매도는 매수 기회인가, 아니면 떨어지는 칼인가?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,626.76 +1.4% +105.83 DJI 52,497.12 +0.5% +265.23 NASDAQ 25,509.50 +1.8% +443.63 비트코인 $74,453.00 +1.2% +$858.03 SPCX $141.35 -1.",
        "Micron의 2026 회계연도 매출과 순이익은 전년 대비 각각 256%와 895% 증가했습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 256%, 895%, 12.49% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 256%, 895%, 12.49% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "46f823ad48dc77d89a06",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Tesla Rises 4% as Finland Clears Its Driver-Assistance System Ahead of EU Vote; Lucid Slides 2% After Citi Cut, Rivian Dips",
      "headlineKo": "핀란드가 EU 투표를 앞두고 운전자 지원 시스템을 폐지함에 따라 Tesla는 4% 상승합니다. Citi Cut 후 Lucid Slide 2%, Rivian Dips",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4ad259d2d49d25c770ccaacf7ce043439854f53beca3bf11001396152f6dadc",
        "publishedAt": 1794419316,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "핀란드가 EU 투표를 앞두고 운전자 지원 시스템을 폐지함에 따라 Tesla는 4% 상승합니다. Citi Cut 후 Lucid Slide 2%, Rivian Dips - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,634.90 +1.30% Dow Jones 52,507.80 +0.42% Nasdaq 100 28,477.30 +2.38% Russell 2000 2,848.44 +0.80% S&P 500 7,634.90 +1.30% 다우존스 52,507.80 +0.42% 나스닥 100 28,477.30 +2.38% 러셀 20",
        "𝕏 f ⧉ © Maja Hitij / Getty Images Getty Images를 통한 뉴스 또 다른 유럽 국가는 Tesla(NASDAQ:TSLA | TSLA Price Prediction)가 운전자 지원 소프트웨어를 제공하도록 허가했으며, 전기 자동차(EV) 주식도 이에 따라 분할되었습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 2%, $393.59, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 4%, 2%, $393.59, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "adb337603a11f3b818ab",
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
      "headline": "This Number Tells Me The Microsoft Data Center Selloff Is Excessive, Prompting Me to Buy",
      "headlineKo": "이 숫자는 Microsoft 데이터 센터 매각이 과도하다는 것을 알려주며 구매를 촉구합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=800d41739f1221e9d95f931ae63591daa6275b6d19275d4fcc80ed8b5d0ac709",
        "publishedAt": 1794419126,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 숫자는 Microsoft 데이터 센터의 매도세가 과도하다는 것을 알려주며 구매를 촉구합니다 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,631.40 +1.25% Dow Jones 52,503.80 +0.41% Nasdaq 100 28,448.50 +2.28% Russell 2000 2,847.09 +0.75% S&P 500 7,631.40 +1.25% 다우존스 52,503.80 +0.41% 나스닥 100 28,448.50 +2.28% 러셀 20",
        "© Wellesenterprises / iStock Editorial via Getty Images 저는 올해 하락할 때마다 Microsoft(NASDAQ:MSFT | MSFT Price Prediction) 포지션을 추가했는데, 오늘의 하락으로 다시 수치를 다시 확인하게 되었습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.2%, $532.60, $521.91 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.2%, $532.60, $521.91 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4ca5f6846aeaffc0a91f",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle CFO Promises “$30 Billion Plus” in Free Cash Flow by Fiscal 2029 After a 70% Plunge",
      "headlineKo": "Oracle CFO, 70% 급락 후 2029 회계연도까지 잉여 현금 흐름 \"300억 달러 이상\" 약속",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ad62a653c1d985541e9fb6b541edaee8fb2f47d66ed118b2b39b4f7b47c2643",
        "publishedAt": 1794419046,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle CFO, 70% 폭락 후 2029 회계연도까지 잉여현금흐름 \"300억 달러 이상 증가\" 약속 | TIKR.com General Investing Oracle CFO, 70% 급락 후 2029 회계연도까지 잉여현금흐름 \"300억 달러 이상\" 약속 David Hanson • 7분 읽기",
        "그녀의 사례는 자본 지출이 정점에 달한 것에 달려 있습니다.",
        "오라클은 최근 200억 달러의 자금 조달이 필요한 외부 자금 전부이므로 6,640억 달러의 잔고가 지불되기 시작하는 동안 지출 증가를 멈춰야 한다고 말했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $30 Billion, 70%, $30 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $30 Billion, 70%, $30 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "142a64faf0e0add48d44",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Nvidia Stock a Buy After Hitting a Seven-Month Low? (Hint: Yes.)",
      "headlineKo": "Nvidia 주식은 7개월 최저치를 기록한 후 매수인가요? (힌트: 그렇습니다.)",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f4370c9a86c86eb4313b9b488a838cf20f64b3138d9905ce68aae7177c81e45",
        "publishedAt": 1794418862,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 주식은 7개월 최저치를 기록한 후 매수인가요?",
        "(힌트: 그렇습니다.) | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,627.98 +1.4% +107.05 DJI 52,468.17 +0.5% +236.28 NASDAQ 25,545.32 +1.9% +479.45 비트코인 ​​$74,371.00 +1.2% +$875.89 SPC",
        "투자자들은 이 블루칩 AI 주식을 포트폴리오에 추가하는 것을 강력히 고려해야 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3.78%, 80%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.78%, 80%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "46ae0ea2da087749b9cf",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR"
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
      "headline": "COHR Stock Gains 10% After Strong Q1 Earnings: Is it Still a Buy?",
      "headlineKo": "COHR 주식은 강력한 1분기 수익 이후 10% 상승: 여전히 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=52d7204dc630e0ca2ec5aac77e610d3b0a45af65c4ccf3d9226a64dbf217b72b",
        "publishedAt": 1794417480,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "COHR Stock Gains 10% After Strong Q1 Earnings: Is it Still a Buy?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "ac4f545643c1d2a6bd35",
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
      "headline": "MP Materials Clears GM Magnet Milestone, Targets Apple as Next Customer",
      "headlineKo": "MP Materials, GM 자석 이정표를 삭제하고 다음 고객으로 Apple 목표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e56da536b8b6ef5c4f0cb62d80c145b5fa47ba5f366c42cc89d30303c28adc54",
        "publishedAt": 1794417348,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MP 머티리얼즈, GM 마그넷 마일스톤 삭제, 다음 고객으로 Apple 목표",
        "MarketBeat Media, LLC의 이미지를 닫습니다.",
        "요점 MP Materials는 General Motors의 희토류 자석 인증을 받았으며 독립 시설에서 생산량을 늘리고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $500 million, 100%, 50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $500 million, 100%, 50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "a6b1144ac873c4611e45",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN"
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Eaton (ETN) Stock May Look Reasonable Following Raised Full Year Guidance",
      "headlineKo": "이튼(ETN) 주식은 연간 가이던스 인상에 따라 합리적으로 보일 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae6b1e6c9be2d19668f4003878718a8712ce4e39b36b1b5b5ab0033c59907776",
        "publishedAt": 1794417269,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이튼(ETN) 주식은 연간 가이던스 인상에 따라 합리적으로 보일 수 있습니다."
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
          "ticker": "ETN",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "4b7e302d9f4673672714",
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
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Bernstein’s $350 Target Says Coherent’s Selloff Went Too Far",
      "headlineKo": "Bernstein의 350달러 목표는 Coherent의 매각이 너무 멀리 갔다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=981dc648ce1f768559b5929b3c38278072306c7d027f9ec74e449a29c6c162d2",
        "publishedAt": 1794416985,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bernstein의 350달러 목표는 Coherent의 매각이 너무 심했다고 말합니다 | TIKR.com General Investing Bernstein의 350달러 목표는 Coherent의 매각이 너무 심했다고 말합니다. Michael Douglass • 4분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 11일",
        "10, 오늘 가격보다 46% 높으며, 주가는 6월 최고치보다 48% 낮습니다.",
        "Coherent의 회계연도 1분기 매출은 50% 증가했지만, 공장과 재고에 막대한 비용을 지출했기 때문에 운영 현금 흐름은 마이너스였습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $350, 46%, 48% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $350, 46%, 48% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "800ce4e73c6b433be1ea",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG"
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
      "headline": "Constellation pursues hybrid capacity contracts alongside nuclear uprates",
      "headlineKo": "Constellation은 원자력 발전과 함께 하이브리드 용량 계약을 추구합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=85f1f59a31c1a37202690380201016e739e30f327ddbe265ac76f857b67f7439",
        "publishedAt": 1794416839,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation pursues hybrid capacity contracts alongside nuclear uprates",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "98275ef840ad8b172f55",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
        "QQQ",
        "SPY"
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
      "headline": "Intel’s Turnaround Could Rewrite the Stock’s Story",
      "headlineKo": "인텔의 턴어라운드로 주식의 역사를 다시 쓸 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25a5cd96b42587fdab95c3ad1709fd08f672d495c82f44d368b98a3c1b50fce8",
        "publishedAt": 1794416589,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔의 턴어라운드가 주식 스토리를 다시 쓸 수 있음 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,634.90 +1.30% Dow Jones 52,507.80 +0.42% Nasdaq 100 28,477.30 +2.38% Russell 2000 2,848.44 +0.80% S&P 500 7,634.90 +1.30% 다우존스 52,507.80 +0.42% 나스닥 100 28,477.30 +2.38% 러셀 20",
        "𝕏 f ⧉ 현대적인 사무실 건물 앞에 눈에 띄는 인텔 로고가 서 있으며 이는 업계 변화 속에서 회사의 현재 전략적 위치를 반영합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $77.29,, $55.55., 39.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $77.29,, $55.55., 39.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ecdbc0e582ea1e841b6e",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "TSMC Stocks Climb 3.37% After Record NT$586.9 Billion October Revenue",
      "headlineKo": "TSMC 주식은 기록적인 NT$5,869억 10월 매출 이후 3.37% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa13a6525794366c993ea8409ee504ee238ccd6f794bf44b0b1af6908363e001",
        "publishedAt": 1794416136,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSMC 주식은 기록적인 NT$5,869억 10월 매출 이후 3.37% 상승"
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "76d1105fdbc2f93b3f86",
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
      "headline": "A Major Catalyst Could Send Amazon Stock to New Highs",
      "headlineKo": "주요 촉매제는 아마존 주식을 새로운 최고점으로 보낼 수 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0019f903aa11dd59a66b3e5f43405c1e6c1d569763ee706d21ca00f10a047283",
        "publishedAt": 1794414956,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "주요 촉매제는 Amazon 주식을 새로운 최고치로 보낼 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,634.90 +1.30% Dow Jones 52,507.80 +0.42% Nasdaq 100 28,477.30 +2.38% Russell 2000 2,848.44 +0.80% S&P 500 7,634.90 +1.30% 다우존스 52,507.80 +0.42% 나스닥 100 28,477.30 +2.38% 러셀 20",
        "𝕏 f ⧉ © jetcityimage / iStock Editorial via Getty Images"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $324.74., 24.8%, $260.21, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $324.74., 24.8%, $260.21, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ec4d65afc46cf00a814a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "VRT",
      "relatedTickers": [
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
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vertiv's Data Center Growth Fuels Revenue: Can It Beat APH and SMCI?",
      "headlineKo": "Vertiv의 데이터 센터 성장으로 수익 창출: APH와 SMCI를 이길 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c125132ce9eacc8663e589288578ffae548f65a00db4cf59fb2c793cb84c0f0",
        "publishedAt": 1794414120,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv's Data Center Growth Fuels Revenue: Can It Beat APH and SMCI?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VRT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "VRT",
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
      "id": "fed4efd88f80efd08819",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "LITE",
      "relatedTickers": [
        "LITE"
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
      "headline": "Lumentum Slips on Deal Reaction; Fossil Group Rallies on Outlook | Stock Movers",
      "headlineKo": "거래 반응에서 Lumentum 전표; 화석 그룹의 전망에 대한 집회 | 주식 발동기",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2dbcdb3767be8c0926c2211474a712defa73f2a04c2dae976c8e552fe2e979d7",
        "publishedAt": 1794413763,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "거래 반응에서 Lumentum 전표; 화석 그룹의 전망에 대한 집회 | 주식 발동기"
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
          "ticker": "LITE",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "315793944a59a480737a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV"
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
      "headline": "AI Spending Will Slow. GE Vernova Stock Can Rise Anyway.",
      "headlineKo": "AI 지출은 느려질 것입니다. GE Vernova 주식은 어쨌든 오를 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=64806252ae7173bf2a49dd6a9e8de2b4668b331ca8827af674f554c0aab2420f",
        "publishedAt": 1794413640,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI Spending Will Slow. GE Vernova Stock Can Rise Anyway.",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "GEV",
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
      "id": "8f2a87f5dcdd141da2c7",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN"
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
      "headline": "Eaton (ETN) Will Supply Hydraulic And Fuel Systems For A New Business Jet",
      "headlineKo": "Eaton(ETN), 새로운 비즈니스 제트기에 유압 및 연료 시스템 공급 예정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a01ad3601a29ac4786e510b4e0ac799e789cf26a647fe8c3ddcafc96a80526c",
        "publishedAt": 1794413583,
        "collectedAt": 1794608845.580491
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Eaton (ETN) Will Supply Hydraulic And Fuel Systems For A New Business Jet",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ETN에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ETN",
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
      "id": "53a0556bcddf2867c9d8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "One Investor Says Anthropic Would Cost “Less Than Palantir on Sales.” That’s a Problem for Palantir",
      "headlineKo": "한 투자자는 Anthropic의 판매 비용이 “Palantir보다 저렴할 것”이라고 말합니다. 이것이 Palantir의 문제입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=375c815cb927a6efd906160b0a560351f1d1d3fbf123040e5a767e8185fdc587",
        "publishedAt": 1794413281,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "한 투자자는 Anthropic의 판매 비용이 “Palantir보다 저렴할 것”이라고 말합니다. 이것이 Palantir의 문제입니다 | TIKR.com General Investing 한 투자자는 Anthropic이 \"판매 비용이 Palantir보다 낮을 것\"이라고 말했습니다. Palantir Chris Arnol의 문제입니다.",
        "Reddit의 한 투자자는 Palantir의 53배에 비해 후행 매출이 35배에서 39배까지 증가했습니다.",
        "Palantir보다 빠르게 성장하고 낮은 매출 배수로 상장하는 AI 회사는 Palantir의 프리미엄을 방어하기 어렵게 만듭니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $70, $78, 91% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $70, $78, 91% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b94f91d239c6e6b7266c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Will Rising AI Capex Weigh on Amazon's Free Cash Flow Prospects?",
      "headlineKo": "증가하는 AI Capex가 Amazon의 무료 현금 흐름 전망에 영향을 미칠까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de65b108c8f0f3c249c6a33385c933509c744132e71a285d568f22fcf2d5db37",
        "publishedAt": 1794412800,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "증가하는 AI Capex가 Amazon의 무료 현금 흐름 전망에 영향을 미칠까요?"
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
      "id": "5f0c5afd30b00aea32dd",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "VRT",
      "relatedTickers": [
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vertiv Beat Big, Then Got Crushed by the Midterms: Why Bernstein Sees 82% Upside",
      "headlineKo": "Vertiv가 크게 이겼다가 중간고사에서 무너졌습니다: Bernstein이 82%의 상승 여력을 보는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6f2abadc51790f004c7506c4f8ac6b392a78c5e8dba22952cd8d6b056b73a87",
        "publishedAt": 1794412138,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv가 크게 이겼다가 중간고사에서 무너졌습니다: Bernstein이 82%의 상승 여력을 보이는 이유 | TIKR.com 일반 투자 Vertiv가 크게 이겼다가 중간고사에서 무너졌습니다: Bernstein이 82% 상승 여력을 보는 이유 Chris Arnold • 5분 읽기 검토자: Chris A",
        "Bernstein은 11월에 Outperform 등급과 $376 목표를 유지했습니다.",
        "11, 현재 가격보다 82% 높으며 미국 데이터 센터 건설에 대한 정치적 위협이 과장되었다고 말합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 82%, 46%, 61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VRT에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 82%, 46%, 61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "VRT",
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
      "id": "02ad3de87835243da46d",
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
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Bernstein’s $325 Target Says Oracle’s Selloff Went Too Far",
      "headlineKo": "Bernstein의 325달러 목표는 Oracle의 매각이 너무 멀리 갔다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5e69b5035795d996d01ddc05e28de5e7cf2f352fd0b82e403b117ae2572f9227",
        "publishedAt": 1794411845,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bernstein의 325달러 목표는 Oracle의 매각이 너무 심했다고 말합니다 | TIKR.com General Investing Bernstein의 $325 목표는 Oracle의 매각이 너무 심했다고 말합니다 Michael Douglass • 5분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 11일 @yhe",
        "10일, Bernstein은 Outperform 등급과 가격보다 159% 높은 $325 목표를 유지했습니다.",
        "Bernstein은 오라클의 데이터 센터 및 데이터베이스 사업을 장기적인 AI 승자로 보고 OpenAI IPO와 2028 회계연도 하반기의 긍정적인 잉여 현금 흐름이라는 두 가지 촉매제를 언급합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $325, 50%, 159% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $325, 50%, 159% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ae329899b808f209e174",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vistra Has Lost 29% in a Year. CIBC Cut Its Target but Still Sees 30% Upside",
      "headlineKo": "Vistra는 1년 만에 29%의 손실을 입었습니다. CIBC는 목표를 줄였지만 여전히 30% 상승 여력이 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2904fcfe0ed6ab4de8ceef53228550f37d589b930af43b61dcd037e73adb90a1",
        "publishedAt": 1794411460,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CIBC, 목표를 하향 조정했지만 여전히 30% 상승 여력 | TIKR.com General Investing Vistra는 1년 만에 29% 손실을 입었습니다.",
        "CIBC 목표를 하향했지만 여전히 30% 상승 여력 있음 Chris Arnold • 5분 읽기 검토자: Chris Arnold 마지막 업데이트: 2026년 11월 11일 Getty Images 주요 내용 CIBC는 Vistra 가격 목표를 11월 181달러에서 175달러로 낮췄습니다.",
        "이는 2주 만에 두 번째 하락이며, 주가는 지난 1년 동안 29% 하락했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 29%, 30%, $175 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VST에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 29%, 30%, $175 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "feeacfad071233fb44d9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "STX",
      "relatedTickers": [
        "STX",
        "WDC"
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
      "headline": "Seagate Soars 10% as CoreWeave’s “Breakout Quarter” Eases AI Spending Fears",
      "headlineKo": "Seagate는 CoreWeave의 \"Breakout Quarter\"로 AI 지출에 대한 우려를 완화하면서 10% 급등했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51af9102aa2b3398a1204474a879e29b0a6b811248d2109142f2403af4a66656",
        "publishedAt": 1794411436,
        "collectedAt": 1794610816.5931563
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate, CoreWeave의 \"Breakout Quarter\"로 AI 지출 우려 완화로 10% 급등 | TIKR.com 일반 투자 Seagate는 CoreWeave의 \"돌파 분기\"로 10% 급등하여 AI 지출 우려 완화 David Hanson • 4분 읽기 검토자: David Hanson 마지막",
        "Seagate와 Western Digital의 매각은 AI 스토리지 수요 둔화를 훨씬 넘어섰습니다.",
        "분석가들은 Seagate의 정규 EPS가 2026회계연도부터 2028회계연도까지 4배 이상 증가할 것으로 예상합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 30%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 10%, 30%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "STX",
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
      "id": "d89a296c86751eb6ae35",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "PLTR",
      "relatedTickers": [
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
      "headline": "Prediction: Palantir Shares Could Deliver Outsized Returns Over the Next 5 Years",
      "headlineKo": "예측: Palantir 주식은 향후 5년 동안 엄청난 수익을 낼 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a38cb4640b15ebe0532ad81e98a86b8603257c53a5fa7781362e24ce30cd6912",
        "publishedAt": 1794411186,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: Palantir 주식은 향후 5년 동안 엄청난 수익을 낼 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,587.00 −0.52% Dow Jones 52,473.70 −0.16% Nasdaq 100 28,121.30 −0.81% Russell 2000 2,840.80 −0.32% S&P 500 7,587.00 −0.52% 다우존스 52,473.70 −0.16% 나스닥 100 28,121.30 −0.81% 러셀 20",
        "𝕏 f ⧉ © 국가 보안, 기술 및 육군 통신 관리를 위한 사이버 통제 및 모니터링을 위한 중앙 사무실 허브에서 도시 추적 작업을 수행하는 군 감시 장교."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $156.17, 9.04%, $206.58. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $156.17, 9.04%, $206.58. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "5d33ae94c569725d7144",
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
      "headline": "Here's What Key Metrics Tell Us About Vistra (VST) Q3 Earnings",
      "headlineKo": "Vistra(VST) 3분기 수익에 대한 주요 지표는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0bfc47bd47c5aa3c88e51330cb119dee7ed9a6efdd4b25cdfd9c447d3d551976",
        "publishedAt": 1794411001,
        "collectedAt": 1794606789.9733207
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Here's What Key Metrics Tell Us About Vistra (VST) Q3 Earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VST에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "4264e52d7ff970ffaabe",
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
      "headline": "Supermicro Begins Shipping New AMD-Powered AI Servers — Claims Up To 1.8x Higher AI Throughput",
      "headlineKo": "Supermicro, 새로운 AMD 기반 AI 서버 출시 시작 — AI 처리량이 최대 1.8배 더 높다고 주장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8eab8562ad2c7b262b9ac6a6ccab7e4c5af1632eba4376e8054b658b50f70f60",
        "publishedAt": 1794410899,
        "collectedAt": 1794604614.6422281
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Supermicro, 새로운 AMD 기반 AI 서버 출시 시작 - AI 처리량이 최대 1.8배 더 높다고 주장 AI 에이전트 동향 뉴스 수익 전체 DIA 0.37% SPY 1.37% QQQ 2.60% 추세 AMD 8.81% CAPR 20.29% RUM 14.48% BB 5.31% BRUN 15.81% RGTI 5.88% MLTX",
        "Supermicro, 새로운 AMD 기반 AI 서버 출시 시작 - AI 처리량이 최대 1.8배 더 높다고 주장 Supermicro는 또한 Helios 및 Helion 플랫폼을 통해 AMD 기반 랙 규모 제품을 확장하고 있지만 출하량은 공개하지 않았습니다.",
        "슈퍼마이크로의 주가는 여전히 연초 대비 약 48% 상승했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.37%, 1.37%, 2.60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.37%, 1.37%, 2.60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
    }
  ],
  "byTicker": {
    "MSFT": [
      "2f1db9d97810782c6765",
      "c5cf267168a53a313623",
      "1519d7c3f927faf82036",
      "f0cd70a301ee2f6cadb4",
      "77fa3d3ea8c112f4b873",
      "188d9d7a98bb46e818e6",
      "d6e01f856d27b5e4a1f3",
      "e68b58e627a48f2552f1",
      "19d9a4c28e1992cce7aa",
      "7c656923d0611c93b767",
      "23e02d2b4ae6cb2d9440",
      "6f532e9d6e630e232878",
      "1b8cf709e577fba47bc4",
      "760118681b93e3015046",
      "891c56308afc73138f9e",
      "050a0cc6ede0f273eade",
      "d39feafe678b0d2cfb94",
      "d8629997eed35ea26edd",
      "86d6ca918491d5b4a6ae",
      "9a9fa9598c56925f128b",
      "adb337603a11f3b818ab"
    ],
    "NVDA": [
      "2f1db9d97810782c6765",
      "168c534aab8b673f0cae",
      "4b56e2e5e570b05f40f6",
      "4ca1d3af8c6e420bfa65",
      "ddc670cc48a34e5ba62a",
      "826c841dd9415a11b0d9",
      "016a6101e7f9e4673f0a",
      "c04f0da99119e44349ba",
      "5767a8cc6af371ea1b18",
      "e192b615a1cb4c92de4c",
      "130b72f439bb4a393879",
      "dd68f8309af885eb62df",
      "4edccf096d009e2221dd",
      "ab39d1d26b0d2c98528f",
      "a770f525d4ebc16f2bb7",
      "7340ed818a62262bf419",
      "28b2c001dff253188702",
      "d49b895cb3fba0e5ae7a",
      "c5bac73507c22e1772ce",
      "6b83d3d5d479c8bd0bca",
      "399f420ed052a86488f0",
      "95ce0cc64327a77714f7",
      "188d9d7a98bb46e818e6",
      "26d8c4ad9b0c31ee817d",
      "52d701debc5b640a78ec",
      "accf133e08629f3aa007",
      "93047956907679dd0edc",
      "dffc7cd147bdd3165980",
      "cad93e59157157081283",
      "80ec3c9af88b97787265",
      "23e02d2b4ae6cb2d9440",
      "e1761724945ece92d49f",
      "6f532e9d6e630e232878",
      "1835361c19c99ce6d997",
      "06ebe62af6a2907dcf11",
      "960bdc07bbaae1327c11",
      "c512ac3a5f54b4d210a9",
      "feaa9fb3f41fc531cbea",
      "d250a065e822575c6882",
      "46292896d7ac500d05b3",
      "759c40ae4a25d7af185c",
      "e1b16a0809b0e1ebca8f",
      "7bc3d53f6d25c493471c",
      "69bd33546040db5ac10b",
      "98b889d388d9ff537c8a",
      "c1fb786780d998ffd927",
      "6a2e4ea4052faeb5ef50",
      "8dc4fd309387f350cd1c",
      "c7cedee670416fceb515",
      "316cea81605c7e101c45",
      "7933144a8775b0509bb9",
      "6cb46596e2da1a96b20e",
      "1cd61977c981e5b60848",
      "f7f2994c962fb69736d0",
      "142a64faf0e0add48d44"
    ],
    "ARM": [
      "168c534aab8b673f0cae",
      "4b56e2e5e570b05f40f6",
      "e8310e9d18ef91719718",
      "d250a065e822575c6882",
      "69bd33546040db5ac10b"
    ],
    "AMAT": [
      "cb5768adb4deab06d036",
      "7f951137c36c4f57f727",
      "76c22d81833591d74c12",
      "5badf3ab2929ebb96d12",
      "7a235593f35d678ae155",
      "258376db8c12e95b78d9",
      "6090e97e5aee640cdb7d",
      "de018708af5430ba3d6d",
      "eed06f287e9c1ed99bcc",
      "d765ca543b738a065949",
      "77fa3d3ea8c112f4b873",
      "45bfcbb4807f792b77d9",
      "bc2915fe20cb1d912b0e",
      "fbd0ba9ab779b28d3ce2",
      "6f532e9d6e630e232878",
      "03e395150661bdf0a719",
      "2d09cfc23ec9723e99a4",
      "c1fb786780d998ffd927",
      "a0043d54e83540f4cade",
      "13e33f2e589d15ec32ae",
      "d75fdbbf0689922b3544",
      "740812be840c47d5a021",
      "1dd4218757891a737d75",
      "7f73dcc23ac0dab6a1d4"
    ],
    "QQQ": [
      "4b56e2e5e570b05f40f6",
      "ddc670cc48a34e5ba62a",
      "c438ffb8da2987366c71",
      "e41a652e10ee4e445e35",
      "c04f0da99119e44349ba",
      "4c31fd51efbea820fe5e",
      "6b9a8e56a2dd4390185d",
      "dd68f8309af885eb62df",
      "f4c97fac290d33ffe3bd",
      "f0cd70a301ee2f6cadb4",
      "258376db8c12e95b78d9",
      "37a39e83bab3f6a8c93c",
      "371ce756aca3bdf9206e",
      "279432faafdc36443f21",
      "ca824d80e73d90c668c1",
      "28b2c001dff253188702",
      "986ec4fb1e27c461a623",
      "eed06f287e9c1ed99bcc",
      "453bf281e929a683ee78",
      "77fa3d3ea8c112f4b873",
      "188d9d7a98bb46e818e6",
      "a41ac4dfa8f2addfb6e9",
      "26d8c4ad9b0c31ee817d",
      "52d701debc5b640a78ec",
      "65aa1413e0b9454837f7",
      "10e1e0928d893ade5935",
      "128fadc7fb38ab57847f",
      "8e8301b5e938efbd4b76",
      "1631595e0ee0c59d0eec",
      "88c4c2c400b0c35c46c0",
      "fbd0ba9ab779b28d3ce2",
      "6668331b034e0f030276",
      "4014c150279484359598",
      "e1761724945ece92d49f",
      "6f532e9d6e630e232878",
      "06ebe62af6a2907dcf11",
      "960bdc07bbaae1327c11",
      "5ee582965dfa3e4eec2a",
      "feaa9fb3f41fc531cbea",
      "bb7e7607f18656d60c30",
      "bd3606c499ccb0eea5af",
      "d5ea178cc90d3492478c",
      "ae3b024abc1789b10d40",
      "b5c090f32f41833d1817",
      "759c40ae4a25d7af185c",
      "c231d9e15d74dc44cc78",
      "a016e247125190805a8d",
      "b92a6718ce270ffd5d60",
      "7ca98a16144bcf327f76",
      "a0957ea5bbe873a99d4b",
      "49625e63fe4ba69437cd",
      "95bdfea0353e9002989d",
      "7bc3d53f6d25c493471c",
      "69bd33546040db5ac10b",
      "5bc3361f28ff46235410",
      "98b889d388d9ff537c8a",
      "c1fb786780d998ffd927",
      "0fd1dc36b3dad48c9ffe",
      "fda55be0401c6b000203",
      "891c56308afc73138f9e",
      "8352f4d6ce2976dc70d1",
      "1b085c4a9f7c0d8ecbc1",
      "76c6a55eba78b60e23b1",
      "c7cedee670416fceb515",
      "d39feafe678b0d2cfb94",
      "053b309fd630e1fcfcdd",
      "0fa5ea8eeea7286dbaab",
      "c37727c2480ca159d796",
      "2d35076d9d909ec4ab3b",
      "60f2f776df805b7b5de4",
      "4046d7dc8eeede939317",
      "9a9fa9598c56925f128b",
      "740812be840c47d5a021",
      "97abe8c95f97eba8d38d",
      "06ff260adf1ec687e3d5",
      "46f823ad48dc77d89a06",
      "adb337603a11f3b818ab",
      "142a64faf0e0add48d44",
      "98275ef840ad8b172f55",
      "76d1105fdbc2f93b3f86",
      "d89a296c86751eb6ae35",
      "4264e52d7ff970ffaabe"
    ],
    "SPY": [
      "4b56e2e5e570b05f40f6",
      "ddc670cc48a34e5ba62a",
      "cb6e6934b0feec954a28",
      "c438ffb8da2987366c71",
      "e41a652e10ee4e445e35",
      "77aabbd514c540fec08d",
      "c04f0da99119e44349ba",
      "4c31fd51efbea820fe5e",
      "6b9a8e56a2dd4390185d",
      "dd68f8309af885eb62df",
      "f4c97fac290d33ffe3bd",
      "f0cd70a301ee2f6cadb4",
      "37a39e83bab3f6a8c93c",
      "371ce756aca3bdf9206e",
      "279432faafdc36443f21",
      "ca824d80e73d90c668c1",
      "28b2c001dff253188702",
      "986ec4fb1e27c461a623",
      "eed06f287e9c1ed99bcc",
      "453bf281e929a683ee78",
      "77fa3d3ea8c112f4b873",
      "188d9d7a98bb46e818e6",
      "a41ac4dfa8f2addfb6e9",
      "26d8c4ad9b0c31ee817d",
      "52d701debc5b640a78ec",
      "65aa1413e0b9454837f7",
      "10e1e0928d893ade5935",
      "128fadc7fb38ab57847f",
      "8e8301b5e938efbd4b76",
      "1631595e0ee0c59d0eec",
      "88c4c2c400b0c35c46c0",
      "fbd0ba9ab779b28d3ce2",
      "6668331b034e0f030276",
      "4014c150279484359598",
      "e1761724945ece92d49f",
      "6f532e9d6e630e232878",
      "06ebe62af6a2907dcf11",
      "5ee582965dfa3e4eec2a",
      "feaa9fb3f41fc531cbea",
      "56df8640cc4bd9a9eba5",
      "f3244be01e7f3722490d",
      "bb7e7607f18656d60c30",
      "bd3606c499ccb0eea5af",
      "d5ea178cc90d3492478c",
      "ae3b024abc1789b10d40",
      "b5c090f32f41833d1817",
      "759c40ae4a25d7af185c",
      "c231d9e15d74dc44cc78",
      "a016e247125190805a8d",
      "7ca98a16144bcf327f76",
      "9ab6813865fe4adfbac2",
      "a0957ea5bbe873a99d4b",
      "7bc3d53f6d25c493471c",
      "69bd33546040db5ac10b",
      "5bc3361f28ff46235410",
      "98b889d388d9ff537c8a",
      "c1fb786780d998ffd927",
      "0fd1dc36b3dad48c9ffe",
      "fda55be0401c6b000203",
      "891c56308afc73138f9e",
      "23f75abec70ff2a09d59",
      "8352f4d6ce2976dc70d1",
      "1b085c4a9f7c0d8ecbc1",
      "76c6a55eba78b60e23b1",
      "c7cedee670416fceb515",
      "d39feafe678b0d2cfb94",
      "316cea81605c7e101c45",
      "cad63e69ea1aee9fe59b",
      "053b309fd630e1fcfcdd",
      "e2450bca24a2f20b2fbf",
      "0fa5ea8eeea7286dbaab",
      "c37727c2480ca159d796",
      "6d04436554807901ca56",
      "2d35076d9d909ec4ab3b",
      "60f2f776df805b7b5de4",
      "4046d7dc8eeede939317",
      "9a9fa9598c56925f128b",
      "740812be840c47d5a021",
      "06ff260adf1ec687e3d5",
      "46f823ad48dc77d89a06",
      "adb337603a11f3b818ab",
      "142a64faf0e0add48d44",
      "98275ef840ad8b172f55",
      "76d1105fdbc2f93b3f86",
      "d89a296c86751eb6ae35",
      "4264e52d7ff970ffaabe"
    ],
    "AMD": [
      "4ca1d3af8c6e420bfa65",
      "016a6101e7f9e4673f0a",
      "c438ffb8da2987366c71",
      "130b72f439bb4a393879",
      "4edccf096d009e2221dd",
      "37a39e83bab3f6a8c93c",
      "7340ed818a62262bf419",
      "c5bac73507c22e1772ce",
      "95ce0cc64327a77714f7",
      "accf133e08629f3aa007",
      "10e1e0928d893ade5935",
      "93047956907679dd0edc",
      "dffc7cd147bdd3165980",
      "80ec3c9af88b97787265",
      "6f532e9d6e630e232878",
      "1835361c19c99ce6d997",
      "960bdc07bbaae1327c11",
      "b7aa68d364eb97485b15",
      "c512ac3a5f54b4d210a9",
      "46292896d7ac500d05b3",
      "759c40ae4a25d7af185c",
      "e1b16a0809b0e1ebca8f",
      "69bd33546040db5ac10b",
      "c1fb786780d998ffd927",
      "6a2e4ea4052faeb5ef50",
      "fda55be0401c6b000203",
      "e2450bca24a2f20b2fbf",
      "7933144a8775b0509bb9",
      "6cb46596e2da1a96b20e",
      "1cd61977c981e5b60848",
      "f7f2994c962fb69736d0",
      "4264e52d7ff970ffaabe"
    ],
    "MU": [
      "4ca1d3af8c6e420bfa65",
      "016a6101e7f9e4673f0a",
      "130b72f439bb4a393879",
      "4edccf096d009e2221dd",
      "c5bac73507c22e1772ce",
      "399f420ed052a86488f0",
      "95ce0cc64327a77714f7",
      "accf133e08629f3aa007",
      "128fadc7fb38ab57847f",
      "93047956907679dd0edc",
      "dffc7cd147bdd3165980",
      "80ec3c9af88b97787265",
      "b84eb06be58955c137b7",
      "06ebe62af6a2907dcf11",
      "46292896d7ac500d05b3",
      "c231d9e15d74dc44cc78",
      "bff5216cdb595808af46",
      "e1b16a0809b0e1ebca8f",
      "92af0c56ece9e16bb43e",
      "5bc3361f28ff46235410",
      "6a2e4ea4052faeb5ef50",
      "e89a2549e3414c51b4b0",
      "0fa5ea8eeea7286dbaab",
      "7933144a8775b0509bb9",
      "6cb46596e2da1a96b20e",
      "84c1094f9d378be92bb9",
      "1cd61977c981e5b60848",
      "06ff260adf1ec687e3d5"
    ],
    "ORCL": [
      "4ca1d3af8c6e420bfa65",
      "016a6101e7f9e4673f0a",
      "3b377d4f0bb0672034ab",
      "e192b615a1cb4c92de4c",
      "130b72f439bb4a393879",
      "4edccf096d009e2221dd",
      "c5bac73507c22e1772ce",
      "9583c91ca890c9b228ec",
      "46e5bc8e457f6908ee6f",
      "95ce0cc64327a77714f7",
      "accf133e08629f3aa007",
      "1631595e0ee0c59d0eec",
      "93047956907679dd0edc",
      "dffc7cd147bdd3165980",
      "80ec3c9af88b97787265",
      "2b9eb56b97ca9c066f3e",
      "4014c150279484359598",
      "46292896d7ac500d05b3",
      "e1b16a0809b0e1ebca8f",
      "b9acefeb69b23a00ed41",
      "6a2e4ea4052faeb5ef50",
      "c37727c2480ca159d796",
      "7933144a8775b0509bb9",
      "cda3ba61f76309533859",
      "6cb46596e2da1a96b20e",
      "1cd61977c981e5b60848",
      "4ca5f6846aeaffc0a91f",
      "02ad3de87835243da46d"
    ],
    "TSLA": [
      "4ca1d3af8c6e420bfa65",
      "cf9a3ccfaf7be3ad23dd",
      "371ce756aca3bdf9206e",
      "77774e1ec2a6653a195c",
      "65aa1413e0b9454837f7",
      "23e02d2b4ae6cb2d9440",
      "e1761724945ece92d49f",
      "2d95c67e975a0e0bba84",
      "23f75abec70ff2a09d59",
      "46f823ad48dc77d89a06"
    ],
    "AVGO": [
      "016a6101e7f9e4673f0a",
      "e41a652e10ee4e445e35",
      "5767a8cc6af371ea1b18",
      "30430e0dd7390797fcbd",
      "453bf281e929a683ee78",
      "8e8301b5e938efbd4b76",
      "6f532e9d6e630e232878",
      "1835361c19c99ce6d997",
      "960bdc07bbaae1327c11",
      "8352f4d6ce2976dc70d1",
      "f7f2994c962fb69736d0"
    ],
    "AMZN": [
      "a95124eddfb00804354e",
      "e192b615a1cb4c92de4c",
      "279432faafdc36443f21",
      "e4f934225e00a3add42b",
      "c37071673db8264a9e3e",
      "19d9a4c28e1992cce7aa",
      "80ec3c9af88b97787265",
      "385f6ade980205c95e66",
      "9ab6813865fe4adfbac2",
      "2d35076d9d909ec4ab3b",
      "d8629997eed35ea26edd",
      "9a9fa9598c56925f128b",
      "76d1105fdbc2f93b3f86",
      "b94f91d239c6e6b7266c"
    ],
    "COHR": [
      "cb6e6934b0feec954a28",
      "8d69863e19fea72db092",
      "a676f75e52ccedfa10c7",
      "46ae0ea2da087749b9cf",
      "4b7e302d9f4673672714"
    ],
    "MRVL": [
      "77aabbd514c540fec08d",
      "4670d0cc7f8c0c76dc24",
      "130b72f439bb4a393879",
      "d86cc2dada015cb4c2d0",
      "d49b895cb3fba0e5ae7a",
      "dffc7cd147bdd3165980",
      "b5c090f32f41833d1817",
      "fda55be0401c6b000203",
      "60f2f776df805b7b5de4",
      "3dfe6e94e1e37a88d0f0",
      "cbe2b1e2ff0681b029b1"
    ],
    "PLTR": [
      "c04f0da99119e44349ba",
      "f4c97fac290d33ffe3bd",
      "7340ed818a62262bf419",
      "5ee582965dfa3e4eec2a",
      "7d96d2844a48e89e10e5",
      "f0719ac77388cca41f66",
      "0fd1dc36b3dad48c9ffe",
      "53a0556bcddf2867c9d8",
      "d89a296c86751eb6ae35"
    ],
    "INTC": [
      "6a8e2280bf215ff819f3",
      "881d96b6ca797d170f19",
      "4d280c2e8cb974813eee",
      "cad93e59157157081283",
      "759c40ae4a25d7af185c",
      "7ca98a16144bcf327f76",
      "fda55be0401c6b000203",
      "c7cedee670416fceb515",
      "cad63e69ea1aee9fe59b",
      "01d9221d0dbee01307e8",
      "98275ef840ad8b172f55"
    ],
    "LITE": [
      "4670d0cc7f8c0c76dc24",
      "d86cc2dada015cb4c2d0",
      "d49b895cb3fba0e5ae7a",
      "b5c090f32f41833d1817",
      "8d69863e19fea72db092",
      "60f2f776df805b7b5de4",
      "3dfe6e94e1e37a88d0f0",
      "cbe2b1e2ff0681b029b1",
      "fed4efd88f80efd08819"
    ],
    "QCOM": [
      "6b9a8e56a2dd4390185d",
      "1ddd0824d7142135352e",
      "269d35bda6c62a919e9a",
      "be9e6f065b854a3c9181",
      "b84eb06be58955c137b7",
      "6f532e9d6e630e232878",
      "d5ea178cc90d3492478c",
      "963d36b3ef3989c7495b",
      "18469ed30aece508881f",
      "e89a2549e3414c51b4b0",
      "84c1094f9d378be92bb9",
      "97abe8c95f97eba8d38d"
    ],
    "AAPL": [
      "dd68f8309af885eb62df",
      "f0cd70a301ee2f6cadb4",
      "188d9d7a98bb46e818e6",
      "6020a35e148c5d7bd71f",
      "6668331b034e0f030276",
      "b84eb06be58955c137b7",
      "a016e247125190805a8d",
      "bff5216cdb595808af46",
      "6a2e4ea4052faeb5ef50",
      "e89a2549e3414c51b4b0",
      "84c1094f9d378be92bb9",
      "1cd61977c981e5b60848",
      "ac4f545643c1d2a6bd35"
    ],
    "ANET": [
      "4edccf096d009e2221dd",
      "1f3838c7cc18331fad0f",
      "b686fa192ca682ce3809",
      "ae3b024abc1789b10d40",
      "4046d7dc8eeede939317",
      "236a44177d8c4d5ebe91"
    ],
    "VRT": [
      "828644549b341b7c062e",
      "1cb8706c047122b0fc74",
      "626d74d96db0593c9a76",
      "ef332202c459c21aa735",
      "6d04436554807901ca56",
      "101ffa68df28fca19cef",
      "ec4d65afc46cf00a814a",
      "5f0c5afd30b00aea32dd"
    ],
    "GOOGL": [
      "f0cd70a301ee2f6cadb4",
      "ab39d1d26b0d2c98528f",
      "6b83d3d5d479c8bd0bca",
      "399f420ed052a86488f0",
      "a41ac4dfa8f2addfb6e9",
      "accf133e08629f3aa007",
      "d250a065e822575c6882",
      "bd3606c499ccb0eea5af",
      "760118681b93e3015046",
      "e1b16a0809b0e1ebca8f",
      "316cea81605c7e101c45",
      "2d35076d9d909ec4ab3b",
      "d8629997eed35ea26edd"
    ],
    "PWR": [
      "5b096fb9721e0ee2c678",
      "1e63082c0cabbe69bec9"
    ],
    "META": [
      "ab39d1d26b0d2c98528f",
      "6b83d3d5d479c8bd0bca",
      "e589c63421866842c456",
      "bb7e7607f18656d60c30",
      "b261948d5947f2cb3ed8",
      "9ff7ea999c3211baeb0e",
      "fdd0b5c33adfa01a9138",
      "fde648c04a6aff9f8062",
      "3b05585e76d289afede9",
      "d8629997eed35ea26edd"
    ],
    "EME": [
      "0d296982db813c310c57"
    ],
    "CRM": [
      "ca824d80e73d90c668c1",
      "95ce0cc64327a77714f7"
    ],
    "CEG": [
      "720a24e910a53e9e9466",
      "986ec4fb1e27c461a623",
      "1cb8706c047122b0fc74",
      "fcb5a428d837ea239b75",
      "f3244be01e7f3722490d",
      "49625e63fe4ba69437cd",
      "69bd33546040db5ac10b",
      "d853b0ab70394134a82e",
      "7a057234006678daf574",
      "800ce4e73c6b433be1ea"
    ],
    "SNDK": [
      "e7e3cad1aa9d26dbd000",
      "06ebe62af6a2907dcf11",
      "92af0c56ece9e16bb43e",
      "95bdfea0353e9002989d",
      "5bc3361f28ff46235410"
    ],
    "GEV": [
      "50b307517b4564515eb4",
      "1cb8706c047122b0fc74",
      "bba9cd5d57e3814fa88d",
      "7bc3d53f6d25c493471c",
      "69bd33546040db5ac10b",
      "d39feafe678b0d2cfb94",
      "315793944a59a480737a"
    ],
    "MOD": [
      "26d8c4ad9b0c31ee817d",
      "8478e8257d803ac63843",
      "d39feafe678b0d2cfb94"
    ],
    "TSM": [
      "431729331cee9f359473",
      "45b12f4256f060ae9a41",
      "3737363b2475623334f2",
      "76c6a55eba78b60e23b1",
      "6cb46596e2da1a96b20e",
      "ecdbc0e582ea1e841b6e"
    ],
    "LRCX": [
      "88c4c2c400b0c35c46c0",
      "fbd0ba9ab779b28d3ce2",
      "13e33f2e589d15ec32ae",
      "740812be840c47d5a021"
    ],
    "KLAC": [
      "fbd0ba9ab779b28d3ce2",
      "a0957ea5bbe873a99d4b",
      "740812be840c47d5a021"
    ],
    "WDC": [
      "b84eb06be58955c137b7",
      "b92a6718ce270ffd5d60",
      "e89a2549e3414c51b4b0",
      "feeacfad071233fb44d9"
    ],
    "VST": [
      "fcb5a428d837ea239b75",
      "2781b450e86812669239",
      "ae329899b808f209e174",
      "5d33ae94c569725d7144"
    ],
    "ETN": [
      "56df8640cc4bd9a9eba5",
      "a6b1144ac873c4611e45",
      "8f2a87f5dcdd141da2c7"
    ],
    "BE": [
      "1b085c4a9f7c0d8ecbc1"
    ],
    "FIX": [
      "1b085c4a9f7c0d8ecbc1"
    ],
    "STX": [
      "feeacfad071233fb44d9"
    ]
  }
};
