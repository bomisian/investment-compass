// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1791220948.509796,
  "events": [
    {
      "id": "e6dfe852365b65e0e0c8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
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
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Visual Computing Market Report 2026: Global Size, Share, Trends and Growth Forecast to 2030 | Capitalize on AI, Real-Time 3D and AR/VR with NVIDIA, Apple, Microsoft and AMD",
      "headlineKo": "비주얼 컴퓨팅 시장 보고서 2026: 2030년까지 글로벌 규모, 점유율, 추세 및 성장 예측 | NVIDIA, Apple, Microsoft 및 AMD를 통해 AI, 실시간 3D 및 AR/VR 활용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee5cd25b7c93703fe137f69b98dcb799d0bdbc856fc121d8db2b24643fafac11",
        "publishedAt": 1791207420,
        "collectedAt": 1791211460.834829
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
        "이 기사는 AMD의 사업과 관련된 'Visual Computing Market Report 2026: Global Size, Share, Trends and Growth Forecast to 2030 | Capitalize on AI, Real-Time 3D and AR/VR with NVIDIA, Apple, Microsoft and AMD' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "35f5dedfde55acd84070",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Broadcom and Applied Materials Earnings Put Broadening Chip Rally to the Test",
      "headlineKo": "Broadcom과 Applied Materials의 수익으로 칩 확장 랠리가 시험대에 올랐습니다.",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8c28650ae40efa8d839ce467b5e542a559aab043c0026fb2e1c405c1183e4c94",
        "publishedAt": 1791203788,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom and Applied Materials Earnings Put Broadening Chip Rally to the Test",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "bcd59098a90f7c99b244",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
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
      "headline": "Intel Drops 4% as Elon Musk Signals Taiwan Semiconductor Could Join Terafab; AMD Slips, NVIDIA Holds Steady",
      "headlineKo": "Elon Musk가 대만 반도체가 Terafab에 합류할 수 있다는 신호를 보내면서 Intel은 4% 하락했습니다. AMD 전표, NVIDIA는 꾸준함 유지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49d0805dfcac39242942c0f980cec058d5f35d3223e05b6f8182c978fd94bd6b",
        "publishedAt": 1791203662,
        "collectedAt": 1791211460.834829
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk가 대만 반도체가 Terafab에 합류할 수 있다는 신호를 보내면서 Intel은 4% 하락했습니다. AMD 전표, NVIDIA는 꾸준한 유지 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,753.90 +0.32% Dow Jones 51,067.60 −0.32% Nasdaq 100 30,982.80 +0.50% Russell 2000 2,834.54 −0.06% S&P 500 7,753.90 +0.32% 다우존스 51,067.60 −0.32% 나스닥 100 30,982.80 +0.50% 러셀 2000 2,834.54 −0.",
        "작성자 David Moadel 2026년 10월 5일 오전 8시 34분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, $114.52,, $628.89, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, $114.52,, $628.89, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b1982cfd43b556a7864e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "If You'd Bought $10,000 Worth of Amazon Stock 10 Years Ago, Here's How Much You'd Have Today",
      "headlineKo": "10년 전에 10,000달러 상당의 Amazon 주식을 샀다면 현재 얼마를 갖게 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8597623b11d4e31c3b849c14a5dce0e6c23ae206ea9c44862ea53fac2033bb57",
        "publishedAt": 1791200880,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10년 전에 10,000달러 상당의 Amazon 주식을 구입했다면 현재 보유하게 될 금액은 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Amazon( AMZN -0.12% ) 소개가 필요하지 않습니다.",
        "세계에서 가장 가치 있는 회사 중 하나입니다.",
        "항상 엄청난 기회를 추구하는 데 중점을 두는 기업 전략을 통해 다양한 최종 시장에서 지배적인 위치를 차지하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, 493%, $59,300. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, 493%, $59,300. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "909109d9969e2b2797f4",
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
      "headline": "Micron Stock Looks Like a Top AI Investment to Make Right Now",
      "headlineKo": "마이크론 주식은 지금 당장 할 수 있는 최고의 AI 투자처럼 보입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d470c8401514dd96efb119df26eba6e74a67f77cbd8c399ca62c84a97d4f029a",
        "publishedAt": 1791199860,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 379%, 1.64 %, $ 1,057.31, $1.2, $ 1055.56, $ 1074.88, $ 179.61, $ 1255.00.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MU의 사업과 관련된 'Micron Stock Looks Like a Top AI Investment to Make Right Now' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0f2b92ec8123f9394491",
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
      "headline": "Meta Platforms Stock Soared 27% in September. Here's What History Says October Will Bring.",
      "headlineKo": "메타플랫폼 주가는 9월 27% 급등했다. 역사가 말하는 10월의 결과는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1cf24f73b3239572680712cb79fcf1a3c4518a2d62193416e096a56511ca3850",
        "publishedAt": 1791198300,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타플랫폼 주가는 9월 27% 급등했다.",
        "역사가 말하는 10월의 결과는 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool September는 공식적으로 백미러에 있었고 Meta Platforms( META +0.99% )는 주주들에게 놀라운 이익을 게시했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 27%, 0.99 %, $ 7.22 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 27%, 0.99 %, $ 7.22 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ff3b3edcaab09e540e48",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR",
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
      "headline": "Palantir's 93% Revenue Growth Is Colliding With Michael Burry's Bear Case -- Here's Who Has the Stronger Argument",
      "headlineKo": "Palantir의 93% 수익 성장은 Michael Burry의 곰 사례와 충돌합니다. 더 강력한 주장을 하는 사람은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc4ed06f1a67b0b3cbfa1b197e51e476d552600d7333cb93db74dedbfd8e125f",
        "publishedAt": 1791197700,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir의 93% 수익 성장이 Michael Burry의 베어 케이스와 충돌하고 있습니다. -- 더 강력한 주장을 하는 사람은 누구입니까 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 참여하세요.",
        "이 글을 쓰는 시점에서 주가는 지난 5년 동안 거의 675% 상승했지만 존경받는 공매도 마이클 버리(Michael Burry)로부터 비판을 받기도 했습니다.",
        "버리(Burry)는 주택 붕괴를 언급하며 이름을 알렸으며, 그 붕괴를 기록한 영화 빅쇼트(The Big Short)의 핵심 인물 중 한 명입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 675%, 93%, 13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 675%, 93%, 13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d468bf82570fe19a818c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "INTC",
        "LRCX",
        "MU",
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
      "headline": "Meet the Low-Cost Vanguard ETF With 32.4% Invested in Nvidia, Broadcom, Micron, AMD, Intel, and Lam Research, While VOO Has Just 14.8%.",
      "headlineKo": "Nvidia, Broadcom, Micron, AMD, Intel 및 Lam Research에 32.4%를 투자한 반면 VOO는 14.8%에 불과한 저비용 Vanguard ETF를 만나보세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b0cf215ea487392e67e586be62096cb6b8d47e93ddaf02471c8e9a3ec0ce5353",
        "publishedAt": 1791197400,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia, Broadcom, Micron, AMD, Intel 및 Lam Research에 32.4%를 투자한 반면 VOO는 14.8%에 불과한 저비용 Vanguard ETF를 만나보세요.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool OpenAI가 2022년 11월 ChatGPT를 대중에게 공개하기 전에도 기술은 S&P 500에서 단연 가장 가치 있는 부문이었습니다(",
        "인공지능(AI) 붐은 S&P 500의 집중된 기술 부문 노출을 완전히 새로운 수준으로 끌어올렸습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 32.4%, 14.8%, 90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 32.4%, 14.8%, 90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4117315ca448f848b1f5",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "META",
      "relatedTickers": [
        "AMD",
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
      "headline": "AMD Has Promised OpenAI and Meta Up to 320 Million Shares for a Penny Each. Here's What That Does to the Share Count.",
      "headlineKo": "AMD는 OpenAI와 Meta를 각각 1페니에 최대 3억 2천만 주를 약속했습니다. 이것이 주식 수에 미치는 영향은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9c40234361d5ab57a856119aa34191ef5b11fbf538b86e853bf982b9262f27f",
        "publishedAt": 1791196862,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD는 OpenAI와 Meta를 각각 1페니에 최대 3억 2천만 주를 약속했습니다.",
        "이것이 주식 수에 미치는 영향은 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Advanced Micro Devices( AMD -1.31% )가 2025년 10월 OpenAI에 최대 6기가와트의 인공 지능을 공급하기로 합의했을 때 Motley Fool에 합류하세요"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.99%, $600, $165. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.99%, $600, $165. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "d157c39847dcfdcad073",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
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
      "headline": "Global Virtual Machine Market Report 2026: Trends and Forecast to 2030 | Capitalize on 15.5% CAGR as Microsoft, Amazon, Google, Alibaba, and Dell Accelerate AI and Hybrid Cloud",
      "headlineKo": "글로벌 가상 머신 시장 보고서 2026: 2030년까지 동향 및 예측 | Microsoft, Amazon, Google, Alibaba, Dell이 AI 및 하이브리드 클라우드를 가속화함에 따라 15.5% CAGR을 활용하세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f9eefc76b99c9e34195c6c9b5d54c08bff955aaba6623cd535288ca7d01335c2",
        "publishedAt": 1791195360,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 MSFT의 사업과 관련된 'Global Virtual Machine Market Report 2026: Trends and Forecast to 2030 | Capitalize on 15.5% CAGR as Microsoft, Amazon, Google, Alibaba, and Dell Accelerate AI and Hybrid Cloud' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "25eebbdbd0a780349d38",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "History Says Sandisk Stock Crashes Soon. Here's Why That's Not Going to Happen.",
      "headlineKo": "역사에 따르면 Sandisk 주식이 곧 폭락할 것으로 보입니다. 그런 일이 일어나지 않는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a913655f7abc4ee13173bdf61f531de1368c50a4c5d9d9bebd6f12ad75604a86",
        "publishedAt": 1791194640,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "역사에 따르면 Sandisk 주식이 곧 폭락할 것으로 보입니다.",
        "그런 일이 일어나지 않는 이유는 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Sandisk( SNDK +0.53% )에 가입한 지 1년이 되었습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.53 %, $ 9.05, $ 1,729.04 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.53 %, $ 9.05, $ 1,729.04 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "aa7f29426aad91ff1893",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Peter Thiel Says US AI Demand Is Booming, but Cathie Wood Is Trimming Palantir: Here's How Much Ark Invest Sold",
      "headlineKo": "Peter Thiel은 미국의 AI 수요가 급증하고 있지만 Cathie Wood는 Palantir를 다듬고 있다고 말합니다: Ark Invest의 판매 금액은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=20fbc485765882ea6bb13da69e8b8b419cce6630fa171802712a3c76b3df6564",
        "publishedAt": 1791194411,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 PLTR의 사업과 관련된 'Peter Thiel Says US AI Demand Is Booming, but Cathie Wood Is Trimming Palantir: Here's How Much Ark Invest Sold' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "1e9624d2aff9cd413857",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "NVDA",
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
      "headline": "Nvidia, Tesla Shares Head for 24/7 Onchain Trading Under OKX and NYSE Owner’s Venture",
      "headlineKo": "Nvidia, Tesla Shares는 OKX 및 NYSE 소유자 벤처에서 연중무휴 온체인 거래를 담당합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aeb5f10fa4f8f217b1b794db76865562df090a767a7918d2f7279cd146668419",
        "publishedAt": 1791193537,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia, OKX 및 NYSE Owner's Venture의 24/7 온체인 거래 담당 Tesla 주식 책임자 - Nvidia의 후원을 받는 Unchained OKX 및 NYSE Owner's Venture의 24/7 온체인 거래 담당 Tesla Shares 책임자 SEC의 새로운 혁신에 따른 OKXICE의 공지",
        "Nvidia와 Tesla는 연중무휴 온체인 거래를 주도합니다 원본 이미지 크레딧: Open Grid Scheduler / Grid Engine / flickr.com Unchained 편집자 David Okoya 게시일: 2026년 10월 5일 오전 5시 45분(ET).",
        "Quick Take OKX와 NYSE 소유주 ICE의 합작 투자 회사는 연중무휴 토큰화된 주식 장소를 운영하겠다는 공지를 발표했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.25%, $25 billion, 77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.25%, $25 billion, 77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "893d68e7df7279147b9c",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia Just Added $150 Billion to Its Buyback Plan. Selling Shares Inside Your IRA Won’t Make More Social Security Taxable, but Taking the Money Out Could",
      "headlineKo": "엔비디아는 자사 매입 계획에 1,500억 달러를 추가했습니다. IRA 내에서 주식을 판매한다고 해서 더 많은 사회 보장 과세가 부과되지는 않지만 돈을 빼낼 수는 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a26518a30cff68f919c963637b7fc8770288028d310ef42b5e158e55dae7aa2",
        "publishedAt": 1791192606,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔비디아는 자사 매입 계획에 1,500억 달러를 추가했습니다.",
        "IRA 내에서 주식을 판매한다고 해서 더 많은 사회 보장 과세가 부과되지는 않지만 돈을 빼낼 수는 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,738.70 +0.12% Dow Jones 50,901.60 −0.64% Nasdaq 100 30,947.50 +0.39% Russell 2000 2,820.74 −0.55% S&P 500 7,738.70 +0.12% 다우존스 50,901.60 −0.64% 나스닥 100 30,947.50 +0.39% 러셀 2000 2,820.74 −0."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $150 Billion, $150 billion, $235 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $150 Billion, $150 billion, $235 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "101f65a76e1051a8bb74",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML",
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
      "headline": "ASML Has No Real Competitor in Advanced Chipmaking Equipment. Here's What $1,000 Invested Today Could Be Worth by 2030.",
      "headlineKo": "ASML은 고급 칩 제조 장비 분야에서 진정한 경쟁자가 없습니다. 오늘 투자한 1,000달러의 2030년 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a4fcd9b0b071cd0ee0f2bb65ec8fbad0d934a5102c840ab68bed0acb286b2bd5",
        "publishedAt": 1791192120,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML은 고급 칩 제조 장비 분야에서 진정한 경쟁자가 없습니다.",
        "오늘 투자한 1,000달러의 2030년 가치는 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 환상적인 투자를 찾을 때 투자자는 종종 회사의 해자나 경쟁 우위를 살펴봅니다."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, 1.03%, $6.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ASML에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, 1.03%, $6.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ASML",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        }
      ],
      "watch": [
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "bb2b339ed8d047015cd6",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "MSFT",
        "QQQ",
        "SPY",
        "STX",
        "VST",
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
      "headline": "WDC, STX Stocks Rebound Premarket As Analysts Downplay Toshiba Capacity Expansion Fears",
      "headlineKo": "분석가들이 Toshiba 생산 능력 확장에 대한 우려를 경시함에 따라 WDC, STX 주식은 시판 전 반등했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fea471596a434a6529956a6cea281f8f25a3bfaa554f1d8887fb1cd53a9f393b",
        "publishedAt": 1791190192,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "WDC, STX 주식은 애널리스트들이 도시바 용량 확장에 대한 우려를 경시하면서 시판 전 반등했습니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.36% SPY 0.19% QQQ 0.28% 추세 SDEV 29.81% ONDS 5.11% WULF 4.71% IBRX 1.51% MSFT 1.73% CAPR 5.25% VST 2.97%",
        "WDC, STX 주식은 분석가들이 Toshiba의 용량 확장을 무시함에 따라 시판 전 반등했습니다. 분석가들은 Toshiba의 계획된 HDD 확장이 타이트한 공급을 완화하기에 충분하지 않을 것이라고 말합니다.",
        "Western Digital 로고가 표시된 스마트폰을 들고 있는 사람."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.36%, 0.19%, 0.28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.36%, 0.19%, 0.28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "68073dce831af6aa242b",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "QCOM",
        "QQQ",
        "SPY",
        "VST"
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
      "headline": "Stock Market Today: Dow Futures Gain, S&P 500, Nasdaq 100 Slip as Iran Keeps Conditions To Reopen Hormuz Strait— SPCX, QCOM, VST in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: 이란이 호르무즈 해협을 재개하기 위한 조건을 유지함에 따라 다우 선물 상승, S&P 500, 나스닥 100 하락 - SPCX, QCOM, VST 초점(업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9a13f8742872fd1a2409dc41a364d59ce2b893949dca9c912bac8c56a3f1e6a9",
        "publishedAt": 1791189826,
        "collectedAt": 1791213388.8175483
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘의 주식 시장: 이란이 호르무즈 재개 조건을 유지함에 따라 다우 선물 상승, S&P 500, 나스닥 100 하락 - Benzinga SPY 769.41 QQQ 747.85 BTC/USD 85,923.38 −0.68% DIA 511.32 GLD 381.40 +0.33% TLT 77.53 +0.06% US 로그인 내 계정 등록",
        "월요일 주식 선물은 다우존스 지수가 상승하면서 혼조세를 보였으며 S&P 500과 나스닥 100 지수는 금요일 종가 이후 하락했습니다.",
        "이란 관리들이 미국이 중재 제안에도 불구하고 확고한 입장을 유지하고 7가지 조건을 충족할 때까지 호르무즈 해협이 완전히 재개방되지 않을 것이라고 선언한 이후 지정학적 불확실성이 시장을 계속 짓누르고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.68%, 0.33%, 0.06% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.68%, 0.33%, 0.06% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "66fa7c7abbaac8ad57af",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Where Will Amazon Stock Be in 5 Years as AWS, Advertising, and AI Converge?",
      "headlineKo": "AWS, 광고 및 AI가 융합되는 5년 후 Amazon 주식은 어디에 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13b81e249d43fbaef5f825c30e424af19208efe30a0283f510b5949b077a4233",
        "publishedAt": 1791188520,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AWS, 광고 및 AI가 융합되는 5년 후 Amazon 주식은 어디에 있을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Amazon( AMZN +0.09% )은 전자상거래 사업으로 잘 알려져 있으며, 다양한 필수품과 대량 상품을 판매합니다.",
        "미국에서는 Amazon이 의료 분야에서도 Prime 구독 프로그램 회원에게 약국 서비스를 제공하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.09 %, $ 0.22, $ 251.74 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.09 %, $ 0.22, $ 251.74 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "369eb409646a648a8b54",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
        "MSFT",
        "QQQ",
        "SPY",
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
      "headline": "VST Vs CEG: Which Nuclear Power Fleet Stock Is A Better Bet?",
      "headlineKo": "VST 대 CEG: 어느 원자력 함대 재고가 더 나은 선택입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3291924403501aeab4cde4ff9d60a17c98f9563a0bae83f3d37ee82358285bf",
        "publishedAt": 1791187048,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "VST 대 CEG: 어느 원자력 함대 재고가 더 나은 선택입니까?",
        "AI 에이전트 동향 뉴스 수익 전체 DIA 0.28% SPY 0.23% QQQ 0.28% 동향 SDEV 29.55% WULF 4.20% ONDS 5.11% IBRX 1.60% CAPR 5.25% MARA 1.78% CMG 6.49% MSFT 1.72% VST 3.21% PCVX 40.53% 홈 뉴스 시장 주식 VST 대 CEG: 어느 핵 전력",
        "VST 대 CEG: 어느 원자력 함대 재고가 더 나은 선택입니까?"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.28%, 0.23%, 29.55% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.28%, 0.23%, 29.55% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1d2d87ef1a03ad6a8ab7",
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
      "headline": "Micron: The Market May Be Pricing In Future Revenue Declines, But I'm Still Bullish Now",
      "headlineKo": "마이크론: 시장은 향후 수익 감소에 가격을 책정할 수 있지만 지금은 여전히 ​​낙관적입니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f350f5c8e494ff79605b3fa44dc766bd39108d836472de69de8d49b20d1ffe37",
        "publishedAt": 1791186086,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론: 시장은 향후 수익 감소에 가격을 책정할 수 있지만 지금은 여전히 ​​낙관적입니다."
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
      "id": "52fab82ac55ba630a223",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "MSFT",
        "QCOM",
        "QQQ",
        "SPY",
        "VST"
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
      "headline": "QCOM Gains Overnight After Patent Deal With China’s Huawei Covering AI Chip Tech",
      "headlineKo": "QCOM, AI 칩 기술을 다루는 중국 화웨이와의 특허 계약 후 하룻밤 사이에 이익 획득",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b5abae5f2325cc5ec0edd3c48655499f7d3b15bf5d11960745306f36d8b9e2e",
        "publishedAt": 1791186054,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "QCOM은 AI 칩 기술 AI 에이전트를 다루는 중국 화웨이와의 특허 거래 후 하룻밤 사이에 이익을 얻었습니다. 동향 뉴스 수익 전체 DIA 0.42% SPY 0.17% QQQ 0.27% 동향 SDEV 25.54% ONDS 5.11% WULF 4.42% IBRX 2.04% MSFT 2.01% CAPR 6.37% VST 2.66% CMG 6.0",
        "QCOM, 중국 화웨이 Covering AI 칩 기술과의 특허 거래 후 하룻밤 만에 이득 획득 Qualcomm은 신호 경로를 단축하고 칩 성능을 높이기 위해 회로를 재배치하고 수직으로 \"접는\" 새로운 방법인 Huawei의 LogicFolding을 라이센스할 예정입니다.",
        "스페인 바르셀로나 - 2023년 2월 27일: 스페인 피라 데 바르셀로나에서 열린 MWC(Mobile World Congress 2023) 첫날에 마이크로칩 제조업체 Qualcomm 회사 로고가 보입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.42%, 0.17%, 0.27% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.42%, 0.17%, 0.27% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0db869b430e28449552b",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "QCOM",
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
      "headline": "Stocktwits M&A Watch: Paramount-Warner Bros Combination, Skyworks-Qorvo Merger, AMD’s World Labs Acquisition In Focus",
      "headlineKo": "Stocktwits M&A 보기: Paramount-Warner Bros 조합, Skyworks-Qorvo 합병, AMD의 World Labs 인수에 초점",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51eb55409c689d88e5bf97a1b9347d52f44cfa8e6dd45e6d8505406e0cf2a44a",
        "publishedAt": 1791185489,
        "collectedAt": 1791211460.834829
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits M&A 보기: Paramount-Warner Bros 조합, Skyworks-Qorvo 합병, AMD의 World Labs 인수에 초점 AI 에이전트 동향 뉴스 수익 전체 DIA 0.09% SPY 0.10% QQQ 0.03% 동향 SDEV 19.11% CBRS 6.32% QCOM 2.96% AGEN 1.44% AM",
        "Stocktwits M&A 보기: Paramount-Warner Bros 조합, Skyworks-Qorvo 합병, AMD의 World Labs 인수에 집중 초점을 맞춘 주요 거래 중에는 Paramount Skydance와 Warner Bros가 있습니다.",
        "Discovery의 합병, Skyworks와 Qorvo의 합병, Advanced Micro Devices의 World Labs 인수."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.09%, 0.10%, 0.03% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.09%, 0.10%, 0.03% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0bf08ec08094105d0ae4",
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
      "headline": "Huawei and Qualcomm Announce Broad Patent License Agreement",
      "headlineKo": "화웨이와 퀄컴, 광범위한 특허 라이선스 계약 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a50bc8e0cd219bac73439783eff1fb37e515f8c9dabfe3d0452bdc04e3aa8d67",
        "publishedAt": 1791183180,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "화웨이와 퀄컴, 광범위한 특허 라이선스 계약 발표"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "26a5d0d5044b04ba7534",
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
      "headline": "Oracle (ORCL) Expands AI And Health Push, Is It Still Below Fair Value?",
      "headlineKo": "오라클(ORCL), AI 및 건강 추진 확대, 여전히 적정 가치에 못 미치나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6a7d324ba620c11012c83d62866610be4a4d8f8003b3482fd19228b4844b0812",
        "publishedAt": 1791180633,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle (ORCL) Expands AI And Health Push, Is It Still Below Fair Value?",
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
      "id": "f4d0af125ad0ee0050a5",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Investigating Apple's Standing In Technology Hardware, Storage &amp; Peripherals Industry Compared To Competitors",
      "headlineKo": "경쟁사와 비교하여 기술 하드웨어, 스토리지 및 주변 장치 산업에서 Apple의 입지 조사",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=28fc6104f12186378f7823546bdc4a5948ce6859c345550afb3955d40b4bd955",
        "publishedAt": 1791179955,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Com과 비교하여 기술 하드웨어, 스토리지 및 주변 장치 산업에서 Apple의 입지 조사 - Benzinga SPY 768.17 QQQ 747.45 BTC/USD 85,943.00 −0.66% DIA 510.41 GLD 381.35 +0.32% TLT 77.48 0.00% US 로그인 내 계정 등록",
        "이 기사에서는 기술 하드웨어, 스토리지 및 주변 장치 산업의 주요 경쟁업체와 관련하여 Apple(NASDAQ: AAPL)을 평가하는 광범위한 업계 비교를 수행할 것입니다.",
        "주요 재무 지표, 시장 지위 및 성장 전망에 대한 자세한 조사를 통해 우리의 목표는 귀중한 통찰력을 제공하고 업계에서 회사의 성과를 조명하는 것입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.66%, 0.32%, 0.00% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.66%, 0.32%, 0.00% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "972c222ab160254950f8",
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
      "headline": "Stocktwits Tech Watch: AI Investors Shift Focus To Applied Digital Earnings, Microsoft Event, SF Tech Week",
      "headlineKo": "Stocktwits Tech Watch: AI 투자자들은 응용 디지털 수익, Microsoft 이벤트, SF Tech Week에 초점을 맞췄습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4cc456f44e985ecf73f4e4ed4267f2b46916ea4a9af9602f14d3ee04264feabd",
        "publishedAt": 1791179206,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 0.54%, 0.14%, 0.30%, 4.14%, 1.90%, 4.45%, 25.54%, 1.94%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Stocktwits Tech Watch: AI Investors Shift Focus To Applied Digital Earnings, Microsoft Event, SF Tech Week' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "228aa4af13f683625460",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA",
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
      "headline": "Why Did NVDA, HPE, CRWD Stocks Rise To 52-Week Highs Last Week?",
      "headlineKo": "지난주 NVDA, HPE, CRWD 주식이 52주 최고가로 상승한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee67bd0e06935fbc2c06e0e33f19793f152ace50112b65e1ca53b37d6cb83335",
        "publishedAt": 1791172073,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지난주 NVDA, HPE, CRWD 주식이 52주 최고가로 상승한 이유는 무엇입니까?",
        "AI 에이전트 동향 뉴스 수익 전체 DIA 0.21% SPY 0.14% QQQ 0.07% Trending NU 7.97% WDC 1.25% CBRS 7.73% BE 0.31% ARCT 1.36% AGEN 0.36% SDEV 29.55% BB.TSX 1.53% CRMD 3.10% PSKY 1.26% 홈 뉴스 시장 주식 NVDA, HPE, CRWD 주식이 R이었던 이유",
        "지난주 NVDA, HPE, CRWD 주식이 52주 최고가로 상승한 이유는 무엇입니까?"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.21%, 0.14%, 0.07% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.21%, 0.14%, 0.07% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e9ffefa9b836c98b04d4",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "PLTR",
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
      "headline": "Peter Thiel Was an Early Outside Investor in Facebook and Co-Founded Both PayPal and Palantir Before Building a Hedge Fund Now Concentrated in Power and Energy Stocks. Here's What That Track Record Sa",
      "headlineKo": "Peter Thiel은 Facebook의 초기 외부 투자자였으며 현재 전력 및 에너지 주식에 집중하는 헤지 펀드를 구축하기 전에 PayPal과 Palantir를 공동 창립했습니다. Sa의 실적은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a5693a3e03046c44898398bdf910f4f6195de62cbaef80d813c5067a7bde864",
        "publishedAt": 1791167700,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Peter Thiel은 Facebook의 초기 외부 투자자였으며 현재 전력 및 에너지 주식에 집중하는 헤지 펀드를 구축하기 전에 PayPal과 Palantir를 공동 창립했습니다.",
        "그의 역행적 베팅을 따르는 것에 대해 그 기록이 말하는 내용은 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 월스트리트는 항상 다음 전문가를 찾고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.30%, 0.49%, 0.68% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.30%, 0.49%, 0.68% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4b978de00ba525100d92",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "META",
        "MU",
        "QQQ",
        "SPY",
        "WDC"
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
      "headline": "MU, HPE, AMZN, META, SPCX: Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week",
      "headlineKo": "MU, HPE, AMZN, META, SPCX: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=941d7de09ad8782ad8a787b14da4d142eb94b32a9765eae533675260f14b4bf7",
        "publishedAt": 1791165291,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MU, HPE, AMZN, META, SPCX: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유 AI 에이전트 동향 뉴스 수익 전체 DIA 0.21% SPY 0.17% QQQ 0.10% 추세 NU 7.97% WDC 1.25% CBRS 7.73% BE 0.31% ARCT 1.36% AGEN 0.36% SDEV 2",
        "MU, HPE, AMZN, META, SPCX: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유 Micron은 강력한 메모리 수요를 확인하고 HPE는 네트워킹 전망을 높이고 Meta 및 SpaceX가 확장하는 등 AI가 시장 활동을 계속 주도했습니다.",
        "Micron Technology Ink 로고는 시각적 디지털 배경이 있는 휴대폰에 표시됩니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.21%, 0.17%, 0.10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.21%, 0.17%, 0.10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4142abde7f09a159c8a6",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Is on Pace for Its First Annual Delivery Increase Since 2023. Is the Stock a Buy?",
      "headlineKo": "Tesla는 2023년 이후 처음으로 연간 납품 증가세를 보이고 있습니다. 주식이 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ebb1a5fb7b4a6cf3bc76f05bf4ebafd00085b6351bff946f1d4a40646a208d2",
        "publishedAt": 1791160442,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 2023년 이후 처음으로 연간 납품 증가 속도를 높이고 있습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Tesla(TSLA +4.65%)는 2026년 3분기에 486,532대의 차량을 납품했다고 EV 제조업체가 10월 금요일에 밝혔습니다.",
        "이는 미국이 1년 전보다 2% 감소한 것입니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $7,500, 9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, $7,500, 9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "005cc2aae21963f43a8b",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "headline": "Micron Growth Is Surging and the Stock Looks Dirt Cheap. But Is the Stock a Buy?",
      "headlineKo": "마이크론 성장이 급증하고 있고 주가가 더러워 보입니다. 하지만 주식은 매수인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74941023d119b6b221ec55cabba73cac64208323d2476cc64bda68f9760914d7",
        "publishedAt": 1791159600,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 성장이 급증하고 있고 주가가 더러워 보입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron Technology( MU -2.05% )는 종소리 이후 회계 4분기 결과를 보고하면서 다시 한 번 뛰어난 분기를 달성했습니다.",
        "메모리 제조사의 매출과 이익이 급증하며 강력한 가이던스를 제시했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 250%, 450%, 2.05 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 250%, 450%, 2.05 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "c895b69475d91820b1bc",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "INTC"
      ],
      "relatedEntities": [
        {
          "name": "Broadcom",
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
      "headline": "Broadcom vs. Intel: What Revenue Trends Tell Investors About These Artificial Intelligence Companies",
      "headlineKo": "Broadcom 대 Intel: 수익 추세가 투자자에게 이러한 인공 지능 회사에 대해 알려주는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=33b13c9c8e3f454a3825c599f3eb42a30c565f632e8ec831e040a0d5c58c6893",
        "publishedAt": 1791156988,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom 대 Intel: 수익 추세가 투자자에게 이러한 인공 지능 회사에 대해 알려주는 것"
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
      "id": "0cda55208627da3510b6",
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
      "headline": "Salesforce vs. UiPath: Which AI Automation Stock Gives Investors More for Their Money?",
      "headlineKo": "Salesforce vs. UiPath: 투자자에게 투자 대비 더 많은 혜택을 제공하는 AI 자동화 주식은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d9a484a08a508872f73a94b22d8155b1cca4ea26fc3c59a88e94ac1a760570d0",
        "publishedAt": 1791156411,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 CRM의 사업과 관련된 'Salesforce vs. UiPath: Which AI Automation Stock Gives Investors More for Their Money?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "cbd525410d0e6f498016",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
        "GOOGL"
      ],
      "relatedEntities": [
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
      "headline": "Amazon vs. Alphabet: Which AI Cloud Stock Makes the Better Case After the Spending Bill?",
      "headlineKo": "Amazon vs. Alphabet: 지출 비용 이후 어느 AI 클라우드 주식이 더 나은 사례를 만드는가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b2a60755384475fe6fde01a90afc81b6f772fe04aaf60e7d2155a12585a8360",
        "publishedAt": 1791156255,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon vs. Alphabet: Which AI Cloud Stock Makes the Better Case After the Spending Bill?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "146f1f5ee9d511065185",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google faces £1 billion legal claim from UK consumers over Play Store fees",
      "headlineKo": "Google은 Play 스토어 수수료에 대해 영국 소비자로부터 10억 파운드의 법적 소송을 제기했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec5d3ec64aeec88e4086751770c5a548e67103a43437934ec1868287e8fe4332",
        "publishedAt": 1791154860,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 GOOGL의 사업과 관련된 'Google faces £1 billion legal claim from UK consumers over Play Store fees' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "bf008eee1dcc66db7ecf",
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
      "headline": "Oracle Announces $10 Million Partnership with the Nashville Symphony",
      "headlineKo": "오라클, Nashville Symphony와 천만 달러 규모의 파트너십 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87e70bb6d9e4ec6a50af0bf911613075ac850e606b63cd96bd243d0ed08363e2",
        "publishedAt": 1791151200,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 ORCL의 사업과 관련된 'Oracle Announces $10 Million Partnership with the Nashville Symphony' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "3d3a763b1642202ccf23",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia’s AI boom revives a Warren Buffett warning for investors",
      "headlineKo": "엔비디아의 AI 붐은 투자자들에 대한 워렌 버핏의 경고를 되살립니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=581017aca69c5938b038c88af1882ca5318ef3bb84bf492b92753483217c294e",
        "publishedAt": 1791150420,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 NVDA의 사업과 관련된 'Nvidia’s AI boom revives a Warren Buffett warning for investors' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "729c5d262dbdf58ae225",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The Bull Case For Arista Networks (ANET) Could Change Following Higher AI-Driven 2026 Revenue Guidance",
      "headlineKo": "Arista Networks(ANET)의 강세 사례는 더 높은 AI 기반 2026 수익 지침에 따라 바뀔 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d62b0968c2776b6f5a6fcb5b0958e541f788fd424deebdbaaf77a66e817ca05b",
        "publishedAt": 1791148023,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "The Bull Case For Arista Networks (ANET) Could Change Following Higher AI-Driven 2026 Revenue Guidance",
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
      "id": "dbeefffdd869261476ce",
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
      "headline": "Forget the S&P 500: SCHD Is Beating It by Nearly 10 Points in 2026 and Its Dividend Just Grew",
      "headlineKo": "S&P 500은 잊어버리세요: SCHD가 2026년에 SCHD를 거의 10포인트 앞섰고 배당금도 늘어났습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2376c27113df3e97699f6353af2c1ab7810c85dd1fecafc33d19731571e611f1",
        "publishedAt": 1791147797,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500은 잊어버리세요: SCHD가 2026년에 SCHD를 거의 10포인트 앞섰고 배당금도 늘어났습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,723.20 −0.08% Dow Jones 51,191.00 −0.08% Nasdaq 100 30,821.20 −0.02% Russell 2000 2,834.89 −0.05% S&P 500 7,723.20 −0.08% 다우존스 51,191.00 −0.08% 나스닥 100 30,821.20 −0.02% 러셀 2000 2,834.89 −0.",
        "포트폴리오를 전환하기 전에 세금 결과와 10년간의 가치 있는 데이터가 있습니다... 작성자 Ryne Mauck 2026년 10월 4일 오후 5시 3분(ET) 게시 · 3분 읽기 ETF 심사관 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.08%, 0.02%, 0.05% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.08%, 0.02%, 0.05% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ca152e49c1e758c3bba3",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Micron: Memory Boom Still Has Legs",
      "headlineKo": "마이크론: 메모리 붐은 여전히 ​​유효하다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=db840e89094f2929dcbbc1099d24404e22f6ba768ff2f5dd237010d40a5f867c",
        "publishedAt": 1791144000,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론: 메모리 붐은 여전히 ​​유효함 (NASDAQ:MU) | Alpha Stone Fox Capital Investing Group 리더 찾기 요약 팔로우 요약 Micron Technology는 전략적 고객 계약 및 AI 관련 회원 급증에 힘입어 다년간의 성장을 위한 위치에 있습니다.",
        "MU의 SCA는 현재 2030년까지 매출의 35%를 담당하며 RPO는 1,500억 달러, 가격이 유지될 경우 잠재 매출은 최대 4,330억 달러에 이릅니다.",
        "물리적 AI와 자율주행차는 차세대 메모리 수요 주기를 주도할 것으로 예상되며, 휴머노이드 로봇은 프리미엄 스마트폰 메모리의 최대 20배를 필요로 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 35%, $150 billion, $433 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 35%, $150 billion, $433 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9985033893564655dc88",
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
      "headline": "AMD’s $8.2 Billion AI Bet Comes With a $1 Trillion Valuation Problem",
      "headlineKo": "AMD의 82억 달러 AI 베팅에는 1조 달러 가치 평가 문제가 발생함",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3095b2198571f5d5345e9484bceca72e67887a00e256c185125648fad63eab33",
        "publishedAt": 1791140519,
        "collectedAt": 1791211460.834829
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
        "이 기사는 AMD의 사업과 관련된 'AMD’s $8.2 Billion AI Bet Comes With a $1 Trillion Valuation Problem' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "bda4e52dd92d056ee082",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "CEG"
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
      "headline": "What a 20-Year Deal With Amazon Means for Constellation Energy Stock",
      "headlineKo": "아마존과의 20년 계약이 Constellation Energy 주식에 미치는 영향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ac507a114a3f8dc4f9e53b87e09b7f9074d907e4aa0b915b84c599fb5beabffb",
        "publishedAt": 1791138602,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What a 20-Year Deal With Amazon Means for Constellation Energy Stock",
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
      "id": "e67314eb9b3b888a7423",
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
      "headline": "Is Copilot Microsoft's Secret Weapon in the AI Arms Race?",
      "headlineKo": "AI 군비 경쟁에서 Copilot은 Microsoft의 비밀 무기입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99a7c4085e88c7fbacc21d2747cc60b970f9f574b30682efb174a70fee2a8a1f",
        "publishedAt": 1791138000,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 군비 경쟁에서 Copilot은 Microsoft의 비밀 무기입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 투자자들이 주요 인공지능(AI) 하이퍼스케일러에 대해 논의할 때 Microsoft( MSFT +2.14% )는 때때로 엉뚱한 길에 빠지곤 합니다.",
        "그러나 Copilot AI 플랫폼은 빠르게 성장하고 있으며 AI 군비 경쟁에서 비밀 무기가 될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.14 %, $ 11.06, $ 528.59 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.14 %, $ 11.06, $ 528.59 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8dec3edc1faed1191902",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "MU",
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
      "headline": "You Can Do Better Than Tesla. Buy Micron Instead.",
      "headlineKo": "당신은 Tesla보다 더 나은 일을 할 수 있습니다. 대신 마이크론을 구매하세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b211853ddfa0784ecc01f3bf289b394761d9e97a915076ccc2548bf65b8c2228",
        "publishedAt": 1791136200,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Tesla( TSLA +4.65% )는 작년에 비해 20% 가까이 하락했으며 약 345의 주가수익률로 거래되어",
        "이러한 조합은 Tesla를 단순한 위험/보상 방정식의 잘못된 측면에 놓이게 합니다. 즉, 투자자들은 그에 상응하는 수익을 제공하지 못한 주식에 대해 가파른 프리미엄을 지불하고 있습니다.",
        "게다가 테슬라의 사업은 여전히 ​​주로 전기차(EV) 판매에 기반을 두고 있어 한동안 부담을 안고 있었다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.05%, 500%, 73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.05%, 500%, 73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8dc96eb8841102bddfed",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "SPY",
        "STX",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Western Digital vs. Seagate: Which Is the Better AI Infrastructure Stock to Own for the Next 5 Years?",
      "headlineKo": "Western Digital vs. Seagate: 향후 5년 동안 소유하기에 더 나은 AI 인프라 주식은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d88f829b47f589c546a4a90e987a1b44da924813b1ff82b4438e43208f0657d",
        "publishedAt": 1791132600,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate: 향후 5년 동안 소유하기에 더 나은 AI 인프라 주식은 무엇입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 현재 세계 최고의 주식 중 두 가지는 Western Digital(WDC -10.22%)과 Seagate Technology(STX -10.21%)입니다.",
        "두 회사는 AI 컴퓨팅 및 데이터 센터용 대용량 하드 디스크 드라이브(HDD)와 스토리지 드라이브를 만드는 동일한 사업을 하고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 235%, 292%, 164% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 235%, 292%, 164% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "40a2cdebd2112245cc7f",
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
      "headline": "Investors Had a Tepid Reaction to Micron's Latest Earnings Report. An Overlooked Headwind May Explain Why.",
      "headlineKo": "투자자들은 Micron의 최신 수익 보고서에 미지근한 반응을 보였습니다. 간과된 역풍이 그 이유를 설명할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bb46c9b03b933b2c9d53ba36a64023ca471fb4c570546e933c310788978fb7cf",
        "publishedAt": 1791131994,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $133 billion, $37 billion, $85 billion, 10 times, $8.5 billion, 2.05 %, $ 1,074.89, $1.2.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MU의 사업과 관련된 'Investors Had a Tepid Reaction to Micron's Latest Earnings Report. An Overlooked Headwind May Explain Why.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "fe8e675769e87a11fa11",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MU",
      "relatedTickers": [
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Jordi Visser Says Crypto Is At Its 'Micron Moment,' Sees Token Volumes Going 'Through The Roof'",
      "headlineKo": "Jordi Visser는 암호화폐가 '미크론 순간'에 있으며 토큰 볼륨이 '지붕을 통과'하는 것을 보고 있다고 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b96d6412f80bcc632a0f4936025181fc1319ecf1a574a5cc738e624118aa4ef9",
        "publishedAt": 1791131435,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jordi Visser는 암호화폐가 '마이크론 순간'에 있다고 말합니다. AI 에이전트 동향 뉴스 수입 전체 DIA 0.49% SPY 0.74% QQQ 1.02% 추세 PUMP 1.51% 은퇴 0.80% OUST 8.61% INJ 2.87% TAO 2.34% GNRC 4.28% VELO 6.97% NIGHT 2.29% QNT 0.58% 약 6.29% 홈",
        "Jordi Visser는 암호화폐가 '마이크론 순간'에 있으며 토큰 양이 '지붕을 통과'하는 것으로 보고 있다고 말했습니다. Visser는 AI 에이전트가 그의 견해의 핵심이며 암호화폐의 성장을 가속화할 것이라고 말했습니다.",
        "이 사진 일러스트에서는 2024년 1월 11일 프랑스 파리의 비트코인 ​​강좌 그래프 앞에 디지털 암호화폐 비트코인의 시각적 표현이 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "aa90a21eb5a34200d5f0",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "META",
        "QQQ",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Jim Cramer Says He May Quit Amazon for the Rival That Jumped 24% in a Month",
      "headlineKo": "짐 크레이머(Jim Cramer)는 한 달 만에 24% 상승한 경쟁자 때문에 아마존을 그만둘 수도 있다고 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=59352f12e4d58e8346bfae50c868ea29a592f1221285acb772611671f974581b",
        "publishedAt": 1791129505,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Cramer는 한 달 만에 24% 상승한 경쟁자를 위해 아마존을 그만둘 수도 있다고 말했습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,729.20 +0.64% Dow Jones 51,232.00 +0.46% Nasdaq 100 30,827.70 +0.91% Russell 2000 2,836.24 +0.78% S&P 500 7,729.20 +0.64% 다우존스 51,232.00 +0.46% 나스닥 100 30,827.70 +0.91% 러셀 2000 2,836.24 +0.",
        "Jim Cramer는 2026년 9월 28일 CNBC의 Squawk on the Street에서 Meta Platforms(NASDAQ:META | META Price Prediction)의 새로운 AI 쇼핑 기능 시연을 본 후 다음과 같이 말했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 24%, 23.89%, $577.61 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 24%, 23.89%, $577.61 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e42b57cee58b7239ff9e",
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
      "headline": "Tesla Delivered 22,141 More Vehicles Than It Built in Q3. Here’s the Production Number That Decides What Comes Next",
      "headlineKo": "Tesla는 3분기에 생산한 것보다 22,141대 더 많은 차량을 인도했습니다. 다음 단계를 결정하는 생산 번호는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=adc7baba8df5714e5bc48d63a225c9ad3b5b6296ee613194c02e81cc944af446",
        "publishedAt": 1791128921,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 3분기에 생산한 것보다 22,141대 더 많은 차량을 인도했습니다.",
        "다음 단계를 결정하는 생산 번호는 다음과 같습니다 | TIKR.com 주식 리뷰 Tesla는 3분기에 생산한 것보다 22,141대 더 많은 차량을 인도했습니다.",
        "다음에 나올 내용을 결정하는 생산 번호는 다음과 같습니다. Wiltone Asuncion • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 4일 Canva를 통한 Pexels의 @Impact Dog Crates, Canva를 통한 frimufilms의 @FRIMU EUGEN Key Stats for Te"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $370.59, $1,860, $396 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $370.59, $1,860, $396 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6dce333a9d4b498d39b4",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arm Holdings Stock Closed Above Wall Street’s $289 Target. Here’s the Margin Math That Decides What Comes Next",
      "headlineKo": "Arm Holdings 주식은 월스트리트 목표 $289를 초과하여 마감되었습니다. 다음 단계를 결정하는 마진 수학은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5477938f6122f9ca63f0f982d673baa6abb4f221ab9f3fcff8a321f8e2be8d1",
        "publishedAt": 1791128716,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm Holdings 주식은 월스트리트 목표 $289를 초과하여 마감되었습니다.",
        "다음 단계를 결정하는 마진 수학은 다음과 같습니다 | TIKR.com 주식 리뷰 Arm Holdings 주식은 월스트리트 목표 $289보다 높게 마감되었습니다.",
        "다음 단계를 결정하는 마진 수학 Wiltone Asuncion • 6분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 4일 @Quality Stock Arts via Canva, @cyber 마더보드 마이크로칩 from pedrovenancio72 via Canva Key Stats fo"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $289, $307.49, $1,375 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $289, $307.49, $1,375 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "64ce38616e214be24090",
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
      "headline": "Amazon Wants to Move $8 Billion in Nvidia Chips Off Its Books. Is AI’s Financing Model Starting to Change?",
      "headlineKo": "Amazon은 Nvidia에서 80억 달러를 장부에서 빼내려고 합니다. AI의 자금조달 모델이 변화하기 시작하고 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00a6a27373db4d8893dcdcfae1a5c751a7be4379a50f1e3287e4ed2e5b11bc1d",
        "publishedAt": 1791128309,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $8 Billion, $8 billion, 10%, $54.2 billion, 68%, $200 billion, $7.6 billion, $119.1 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Amazon Wants to Move $8 Billion in Nvidia Chips Off Its Books. Is AI’s Financing Model Starting to Change?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "3b18a18261aec7f5f62e",
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
      "headline": "Broadcom’s Massive $42 Billion Chip-Buying Deal with Anthropic Raises Circular Financing Worries",
      "headlineKo": "Broadcom의 Anthropic과의 420억 달러 규모의 대규모 칩 구매 거래로 순환 금융에 대한 우려가 높아졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa5a7e2ff4db3144d26d7401b8f1e3c66c64a9fe94fce1abfc45c0e57c65422d",
        "publishedAt": 1791128028,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $42 Billion, $27 billion, $42 billion, $125.2 billion, $115 billion, $230 billion, $23.975 billion, $35 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AVGO의 사업과 관련된 'Broadcom’s Massive $42 Billion Chip-Buying Deal with Anthropic Raises Circular Financing Worries' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d04b5b4bd0caee5a6000",
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
      "headline": "Amazon Is Spending Another $1 Billion on AI Data Centers — But This Time, It’s Not Buying a Single GPU",
      "headlineKo": "Amazon은 AI 데이터 센터에 10억 달러를 추가로 지출하고 있지만 이번에는 단일 GPU를 구매하지 않습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2bc1c84b38b35de0cc8149dbe295cd3212cdb115778b7bab41af68049608b89",
        "publishedAt": 1791126994,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon은 AI 데이터 센터에 10억 달러를 추가로 지출하고 있지만 이번에는 단일 GPU를 구매하지 않습니다."
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
      "id": "6abc59c2db4af0cd7497",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "LITE",
      "relatedTickers": [
        "LITE"
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
      "headline": "Lumentum Holdings (LITE) AI Optics Push Keeps Its Valuation Debate Alive",
      "headlineKo": "Lumentum Holdings (LITE) AI Optics Push는 가치 평가 논쟁을 계속 이어가고 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de177bb652a1596738862e1766dcfec81012302a84e5f8e8f990abf8a813dedd",
        "publishedAt": 1791126589,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum Holdings (LITE) AI Optics Push Keeps Its Valuation Debate Alive",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LITE에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "50af947b65caaccf87eb",
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
      "headline": "AI Data Center Delays Raise New Questions For ORCL, BE And APLD, Says IO Fund — ‘Power, Not Demand, Is Becoming The Bottleneck’",
      "headlineKo": "AI 데이터 센터 지연으로 ORCL, BE 및 APLD에 대한 새로운 질문 제기, IO 펀드가 '수요가 아닌 전력이 병목 현상을 일으키고 있음'",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a3712b39c8539393a38e8a529dbd87d260a7ffe172d354f5d5ee8ddca2e36a3d",
        "publishedAt": 1791126262,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 0.21%, 0.14%, 0.07%, 7.97%, 1.25%, 7.73%, 0.31%, 1.36%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 ORCL의 사업과 관련된 'AI Data Center Delays Raise New Questions For ORCL, BE And APLD, Says IO Fund — ‘Power, Not Demand, Is Becoming The Bottleneck’' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e80c3c0e246225d79c89",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "VST",
      "relatedTickers": [
        "VST"
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
      "headline": "VST SEC Form 8-K filed",
      "headlineKo": "VST SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126038468/ef20083016_8k.htm",
        "publishedAt": 1791126000.0,
        "collectedAt": 1791209462.6971855
      },
      "confirmedFacts": [
        "VST가 2026-10-05에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 중요 계약 체결·변경 · 재무제표·첨부자료",
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
          "ticker": "VST",
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
      "id": "ab49fcffb344e4cf65b9",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN"
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
      "headline": "ETN SEC Form 8-K filed",
      "headlineKo": "ETN SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1551182/000114036126038523/ef20083229_8k.htm",
        "publishedAt": 1791126000.0,
        "collectedAt": 1791209462.6971855
      },
      "confirmedFacts": [
        "ETN가 2026-10-05에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 임원·이사 변경 또는 보상"
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
          "ticker": "ETN",
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
      "id": "51c03b9c56b66d362ba3",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "headline": "Is It Too Late to Buy Micron Technology Stock After Its 12-Month Gain of 500%?",
      "headlineKo": "12개월간 500% 상승한 Micron Technology 주식을 매수하기에는 너무 늦은 걸까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=517a6de144e42197cb638e66b5612f5f4dfc71ffe148341795816c85035ce170",
        "publishedAt": 1791125340,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "12개월간 500% 상승한 Micron Technology 주식을 매수하기에는 너무 늦은 걸까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 참여하세요 그래픽 처리 장치(GPU)는 인공 지능(AI) 워크로드를 처리하는 데 가장 중요한 데이터 센터 칩입니다.",
        "그러나 GPU에는 데이터 흐름을 원활하게 유지하기 위해 점점 더 많은 양의 고대역폭 메모리(HBM)가 필요합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 500%, 2.05%, $133.1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 500%, 2.05%, $133.1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9a340900913b551491c0",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Reaches a $1 Trillion Market Cap. Can It Finally Dethrone Nvidia?",
      "headlineKo": "AMD는 시가총액 1조 달러에 도달했습니다. 마침내 엔비디아를 무너뜨릴 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bae7a93eb6b04eb4b5fa2d54195e40991a4a3e68fd7843807c8afad69ffd94b1",
        "publishedAt": 1791120840,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD는 시가총액 1조 달러에 도달했습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류하세요 AMD( AMD +2.95% )는 놀라운 한 해를 보냈습니다.",
        "이 주식은 올해 현재까지 거의 200% 상승한 S&P 500( ^GSPC +0.73% ) 주식 중 9위를 기록하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1 Trillion, $1 trillion, 1.34% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1 Trillion, $1 trillion, 1.34% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "98c3f6a1aafc4215f1be",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron or Sandisk: If I Could Only Own One for the Next 5 Years, It Would Be This One",
      "headlineKo": "Micron 또는 Sandisk: 향후 5년 동안 하나만 소유할 수 있다면 이 제품을 선택하겠습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ffa793f246d5afc224e95d4773f444e165d05586bf43c748e2a111e80466efb",
        "publishedAt": 1791119760,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron 또는 Sandisk: 향후 5년 동안 하나만 소유할 수 있다면 이 제품을 선택하겠습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool Micron( MU -1.02% ) 및 Sandisk( SNDK +0.53)에 합류",
        "S&P 500( ^GSPC +0.15% )에서 Sandisk는 올해 현재까지 650% 이상 상승하여 가장 좋은 성과를 내는 주식입니다.",
        "Micron은 거의 300% 상승해 4위를 차지하기에 충분했기 때문에 나쁜 한 해를 보냈습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 300%, 1.02 %, $ 1,063.90 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 300%, 1.02 %, $ 1,063.90 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "31b09e86904c97c4ae13",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "A $1,000 Bet on Marvell in 2016 Crushed the Market With 2140% Returns",
      "headlineKo": "2016년 Marvell에 1,000달러를 베팅하여 2,140%의 수익률로 시장을 압도했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=858f6954812836cf6d567922f0a14af10761865669f12f3444ecd035486b298a",
        "publishedAt": 1791119740,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2016년 Marvell에 1,000달러를 베팅하여 2,140%의 수익률로 시장을 강타했습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,738.70 +0.12% Dow Jones 50,901.60 −0.64% Nasdaq 100 30,947.50 +0.39% Russell 2000 2,820.74 −0.55% S&P 500 7,738.70 +0.12% 다우존스 50,901.60 −0.64% 나스닥 100 30,947.50 +0.39% 러셀 2000 2,820.74 −0.",
        "작성자: Chris Lange 2026년 10월 4일 오전 9시 15분(ET) 게시 · 2분 분량 𝕏 f ⧉ 이 합성 이미지는 기술과 금융의 역동적인 교차점을 시각화하여 반도체 부문 내 투자의 잠재적 성장을 반영합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, 2140%, $12.16. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,000, 2140%, $12.16. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "60e680e543a9f4346a2b",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom's 2028 Projection Makes the Stock a Screaming Buy",
      "headlineKo": "Broadcom의 2028년 전망으로 인해 주식이 비명을 지르며 매수되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=46eb16b4f50ecf58d11581d7dc3441c209f98cc083d422867edba0454ca2b493",
        "publishedAt": 1791119040,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom의 2028년 전망으로 인해 주식이 큰 폭으로 매수되었습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 2026년이 아직 1/4이나 남았지만 일부 기업은 이미",
        "Broadcom(AVGO +3.35%)도 그중 하나이며, 투자자는 이 회사가 말하는 내용에 주의를 기울여야 합니다.",
        "이러한 장기 전망은 개인 투자자에게 일부 펀드에 비해 우위를 제공할 수 있습니다. 펀드는 고객에게 강력한 분기별 수익을 제공해야 하기 때문입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3.35%, 1.62%, 1.55% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 3.35%, 1.62%, 1.55% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "c0e17df1e10f6df850cc",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
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
      "headline": "What a $10,000 Investment Split Between Nvidia and Broadcom Could Be Worth by 2030",
      "headlineKo": "2030년까지 Nvidia와 Broadcom의 10,000달러 투자 분할 가치는 얼마나 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fdee99ebb64a9e468197951ea3d764ff1cbb16d94b38af4ecd0e12ed7a02e5ac",
        "publishedAt": 1791117900,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2030년까지 Nvidia와 Broadcom의 10,000달러 투자 분할 가치 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool Nvidia(NVDA +1.34%) 및 Broadcom(AVGO +3.35)에 합류",
        "이들 두 기업은 향후 몇 년 동안 엄청난 상승 여력을 갖고 있지만, 이들의 가치 평가를 살펴보면 일부 AI 동료와는 달리 시장이 어떤 성장도 반영하지 않은 것으로 나타났습니다.",
        "이는 투자 기회를 의미하며, 투자자는 시장이 상황을 파악하기 전에 이점을 활용하고 싶어할 수도 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, 3.35 %, $ 11.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, 3.35 %, $ 11.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9d9108c97a5869b68911",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "FIX",
      "relatedTickers": [
        "FIX",
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
      "headline": "Comfort Systems USA Is a $1,600 Stock Almost Nobody Owns. Here's Why It Keeps Crushing the Market.",
      "headlineKo": "Comfort Systems USA는 거의 아무도 소유하지 않는 1,600달러 규모의 주식입니다. 이것이 시장을 계속 무너뜨리는 이유입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=901a21fdb2fa0513211bbf0c5d7d9ba9cad8e0c903de59b3fadb5cc1c8273018",
        "publishedAt": 1791112920,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Comfort Systems USA는 거의 아무도 소유하지 않는 1,600달러 규모의 주식입니다.",
        "이것이 시장을 계속 무너뜨리는 이유입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool에 합류 기계 및 전기 서비스 계약자 Comfort Systems USA( FIX -1.09% )는 시장에서 가장 잘 알려진 주식은 아닐 수도 있지만"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,600, 77%, 871% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "FIX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "FIX에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $1,600, 77%, 871% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "e634319e661e6bd3fc70",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Gary Black Flags Waymo Is Leaving TSLA Behind On Autonomy Even As Tesla Beats Delivery Estimates In Q3",
      "headlineKo": "Gary Black Flags Waymo는 Tesla가 3분기에 배송 추정치를 능가하더라도 자율성을 위해 TSLA를 뒤처지고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc6d12d345b098c0f6ea24c9b561ebf6eff93ae6abe3125690a92cb4c6daa6f5",
        "publishedAt": 1791111165,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Gary Black Flags Waymo는 Tesla가 3분기 AI 에이전트의 배송 추정치를 상회하더라도 TSLA의 자율성을 뒤처지고 있습니다. Trending News Earnings All DIA 0.49% SPY 0.74% QQQ 1.02% Trending PUMP 0.64% RETIRE 0.65% INJ 2.14% OUST 8.61% VELO 6.97% GNRC 4",
        "Gary Black Flags Waymo는 Tesla가 3분기에 배송 추정치를 능가하더라도 자율성 측면에서 TSLA를 뒤처지고 있습니다. X에 대한 게시물에서 Black은 Tesla의 최근 배송 강점을 지적하면서 앞으로 훨씬 더 어려운 과제를 강조했습니다.",
        "9월 목요일 ACL Live 밖에서 방문객과 보행자들이 새로운 Tesla Cybercab을 살펴보고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a8aef1550697f5bb7293",
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
      "headline": "TSMC Q3 Earnings Preview: I'm Loading Up Before The Print, And You Should Too",
      "headlineKo": "TSMC Q3 수익 미리보기: 저는 인쇄 전에 준비 중입니다. 여러분도 그래야 합니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f38f8bf0d20627a6a46773db0e44558889d7fb981d7e7236688b4b778f36f15f",
        "publishedAt": 1791109371,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSMC Q3 수익 미리보기: 저는 인쇄 전에 준비 중입니다. 여러분도 그래야 합니다."
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
      "id": "af2137c7f6b1d9768ffe",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "TSMC Q3 Earnings Preview: I'm Loading Up Before The Print, And You Should Too",
      "headlineKo": "TSMC Q3 수익 미리보기: 저는 인쇄 전에 준비 중입니다. 여러분도 그래야 합니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f38f8bf0d20627a6a46773db0e44558889d7fb981d7e7236688b4b778f36f15f",
        "publishedAt": 1791109371,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSMC 3분기 실적 미리보기: 인쇄 전에 준비를 하고 있으니 여러분도 그래야 합니다(NYSE:TSM) | Alpha Gytis Zizys 추구 팔로워 4.9K 팔로우 요약 Taiwan Semiconductor Manufacturing Company는 다음과 같은 강한 확신을 가지고 핵심 기업으로 남아 있습니다.",
        "TSM은 강력한 3분기 결과를 제공할 것으로 예상됩니다. 분석가들은 EPS 44억 6천만 달러, 매출 455억 5천만 달러를 예상하여 경영진의 보다 보수적인 지침을 능가합니다.",
        "경영진은 AI 업사이클, 용량 확장, 설비 투자에 대해 낙관적인 논평을 발표하여 TSM에 대한 투자 사례를 강화할 것으로 기대합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $4.46, $45.55, $620 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSM에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $4.46, $45.55, $620 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "c561fe9314213d1571d6",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "CEG"
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
      "headline": "Constellation Energy (CEG) Could Be 26% Below Fair Value As Amazon Deal Lands",
      "headlineKo": "Constellation Energy(CEG)는 아마존 거래에 따라 공정 가치보다 26% 낮을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a62e8383202564c491e976da88bfead5b81147e1c2af5c78b9f9ff678746dbca",
        "publishedAt": 1791108395,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy (CEG) Could Be 26% Below Fair Value As Amazon Deal Lands",
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
      "id": "7fc591a10f7733c4c8e6",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "This Under-the-Radar Supplier Could Be Nvidia's Secret Weapon",
      "headlineKo": "이 비밀스러운 공급업체는 Nvidia의 비밀 무기가 될 수 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8cba65ded3fbaa69dfc8a83c432a0ed43a8a4dfad5cce026a5e439541a6b173c",
        "publishedAt": 1791102900,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 비밀스러운 공급업체는 Nvidia의 비밀 무기가 될 수 있습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능(AI) 인프라 붐이 점점 커지고 있습니다.",
        "이러한 공급 제약을 겪고 있는 기업과 수요가 높은 부품에 접근할 수 있는 기업은 모두 장기적인 승자가 될 수 있습니다.",
        "현재 AI 인프라 시장의 가장 큰 병목 현상 중 하나는 고대역폭 메모리(HBM)이며, Nvidia(NVDA +1.34%)와 메모리 제조사 SK 하이닉스(SKHY +0.84%)의 긴밀한 관계는 두 AI 주식 모두에 큰 상승 여력을 제공합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.34%, 0.84%, 0.84 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 1.34%, 0.84%, 0.84 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "205b0ac8fe33da5d32c3",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "INTC",
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
      "headline": "Not Intel. Not Nvidia. The $2.4 Trillion Chipmaker That Wall Street Calls the Ultimate AI \"Picks-and-Shovels\" Play",
      "headlineKo": "인텔이 아닙니다. 엔비디아가 아닙니다. 월스트리트가 궁극의 AI \"픽 앤 셔블(Picks-and-Shovels)\"이라고 부르는 2조 4천억 달러 규모의 칩 제조사",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=654a1658fd6ce4b1694951fc16145396281ff1c6fb6acd966b4d6143694ef761",
        "publishedAt": 1791102000,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트가 궁극의 AI \"픽 앤 삽\"이라고 부르는 2조 4천억 달러 규모의 칩 제조사 Play | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류하세요 지금쯤이면 모든 사람과 그들의 어머니는 알고 있습니다",
        "칩도 없고, 고급 AI 교육도 없고, 전 세계 수십억 대의 컴퓨터에서 실행할 수도 없습니다.",
        "이는 Intel을 죽음에서 부활시켰고 Nvidia를 시가총액 기준으로 세계에서 가장 가치 있는 회사로 만들었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.96%, $2.4 trillion, 2.96 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.96%, $2.4 trillion, 2.96 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bdedce9b55b30493532c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "My Biggest Warning For Anyone Who Owns The S&P 500",
      "headlineKo": "S&P 500을 소유한 사람에게 보내는 가장 큰 경고",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9e139890272beaf93659961b577ace209da13cb5e5253062a5b480a26d1c0bb9",
        "publishedAt": 1791099000,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500을 소유한 사람을 위한 가장 큰 경고(NYSEARCA:SPY) | 알파 레오 찾기 Nelissen 투자 그룹 리더 팔로우 요약 S&P 500은 15년 동안 탁월한 수익률을 제공했지만 주요 수익률 엔진은 낮은 금리와 GR 수익입니다.",
        "채권수익률 상승은 강력한 대안을 만들어내며, 금융위기 이후 누렸던 쉽게 성과를 낸 주식을 지워버립니다.",
        "현재 시장 상승은 빅테크와 AI에 크게 의존하고 있어 실적이 실망스러울 경우 지수가 가장 무겁고 취약해집니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "4990442c7432b3dc27aa",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "AAPL",
        "META",
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
          "name": "Meta",
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
      "headline": "Apple, Meta And Jim Cramer Set the Tone for AI, iPhone and Vision Pro Moves: This Week in Apple",
      "headlineKo": "Apple, Meta 및 Jim Cramer, AI, iPhone 및 Vision Pro 움직임의 기조 설정: 이번 주 Apple 소식",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8f4a4215479ea8429a6c5d4ad245d06e3cc9c2d74c5f8e66fd163f1bb812f1ae",
        "publishedAt": 1791097223,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple 주간 요약: AI 개인 정보 보호, iPhone 수요, 웨어러블 및 구조 조정 - Apple (NASDAQ:AAPL) - Benzinga SPY 769.86 +0.03% QQQ 749.55 −0.00% BTC/USD 85,260.25 +0.61% DIA 511.70 +0.12% GLD 380.52 +0.10% TLT 77.53 +0.06% 미국 로그인 Regis",
        "(NASDAQ: AAPL )은 인공 지능, iPhone, 웨어러블 컴퓨팅 및 내부 운영을 포괄하는 개발로 이번 주의 기술 헤드라인을 장식했습니다.",
        "프리미엄 아이폰에 대한 강한 수요가 투자자들에게 잠재적으로 더 밝은 신호를 제공했음에도 불구하고 회사의 전략은 여러 방향에서 면밀히 조사되었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.03%, 0.00%, 0.61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.03%, 0.00%, 0.61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4e81941edf7b225e966e",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "INTC"
      ],
      "relatedEntities": [
        {
          "name": "Apple",
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
      "expectedHorizon": "단기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "How Supreme Court Battles Involving Apple, Exxon, and Intel Could Hit Your Portfolio",
      "headlineKo": "Apple, Exxon 및 Intel과 관련된 대법원 싸움이 귀하의 포트폴리오에 영향을 미칠 수 있는 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=373c44d6fc49be76ea607f958fbfe30d5465f1570e39fcc873269cfa011e1063",
        "publishedAt": 1791093600,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple, Exxon 및 Intel과 관련된 대법원 싸움이 귀하의 포트폴리오에 영향을 미칠 수 있는 방법"
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "cf499e4f16a7324eecd2",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "MU",
        "QCOM",
        "SPY"
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
      "headline": "Micron Technology vs. Qualcomm: What Revenue Trends Tell Investors About These Tech Companies",
      "headlineKo": "Micron Technology vs. Qualcomm: 수익 추세가 투자자에게 이러한 기술 회사에 대해 알려주는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=825b82ac16ae67885bc8fa431a42270fab74f00d82bae88b832348399fc22210",
        "publishedAt": 1791092412,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm: 이러한 기술 회사에 대해 투자자에게 알려주는 수익 추세 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Micron Technology: 수익 가속화 패턴 추적",
        "최근에는 General Motors, Ford Motor Company 등 여러 주요 자동차 제조업체와 여러 장기 전략적 공급 계약을 체결하여 차량용 필수 메모리 공급을 명시적으로 제공했습니다.",
        "동시에 뉴욕에 있는 새로운 국내 반도체 제조 시설을 위한 첫 번째 콘크리트를 타설했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.53%, $7.8 billion, $10.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 1.53%, $7.8 billion, $10.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "48a55d670b9436aabf6c",
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
      "headline": "Oracle’s Nuclear Power Deal Signals That Energy Is the New Compute Bottleneck",
      "headlineKo": "오라클의 원자력 거래는 에너지가 새로운 컴퓨팅 병목 현상임을 시사합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7136b20ea2ec27572d6b934c740c7c331c1411972331c2a08489f026b6530232",
        "publishedAt": 1791091599,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle’s Nuclear Power Deal Signals That Energy Is the New Compute Bottleneck",
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
      "id": "98f91c9a8b193a483d73",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "SNDK",
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
      "headline": "Western Digital vs. Sandisk: The Better Way to Play the Hard-Drive Side of the AI Storage Boom",
      "headlineKo": "Western Digital 대 Sandisk: AI 스토리지 붐의 하드 드라이브 측면을 활용하는 더 나은 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4921fe1db31bac0edc55bd55825de8b3faf0cb51e843befd13dbeed5dee368af",
        "publishedAt": 1791087600,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: AI 스토리지 붐의 하드 드라이브 측면을 활용하는 더 나은 방법 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 경험이 있는 두 개의 선도적인 스토리지 및 메모리 회사",
        "투자자들은 하드 드라이브와 메모리에 대한 수요를 가속화한 인공 지능(AI) 인프라 지출의 붐에 감사할 수 있습니다.",
        "하지만 이들 기업은 다음에는 어디로 향하고 있으며 어느 쪽이 더 나은 AI 플레이일까요?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 85%, 44%, $3.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 85%, 44%, $3.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "550077de5c6d757d52d7",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Micron: The Market Is In Disbelief. Ignore Them",
      "headlineKo": "마이크론: 시장은 불신하고 있습니다. 무시하세요",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a402e3a136a9ad181c7ede938cbb83c65cdea308784e40efbd6858d27a1720fc",
        "publishedAt": 1791086349,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론: 시장은 불신하고 있습니다.",
        "무시하세요(NASDAQ:MU) | Seeking Alpha JR Research 투자 그룹 리더 팔로우 요약 Micron Technology는 이전 분기 대비 수익 감소 둔화에도 불구하고 메모리 수요 주기가 계속됨에 따라 확고한 투자를 유지해야 합니다.",
        "최저 가격과 최고 가격으로 매출의 35%를 보장하는 MU의 전략적 고객 계약은 순환적 위험과 ASP 변동성을 완화하는 데 도움이 됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 35%, 75% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 35%, 75% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "652356e3b14cd49047b6",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "How Much Revenue Visibility Does Microsoft’s Backlog Really Provide?",
      "headlineKo": "Microsoft의 백로그가 실제로 얼마나 많은 수익 가시성을 제공합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04d267a0dba4fe238f17b5475bfa2fed7f5e79fa77784b837b8923df29e6a731",
        "publishedAt": 1791081334,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "How Much Revenue Visibility Does Microsoft’s Backlog Really Provide?",
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
      "id": "2599f2c12accd74f29e6",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
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
      "headline": "Arm Holdings: Agentic AI Shift Provides A Catalyst For Growth (Rating Upgrade)",
      "headlineKo": "Arm Holdings: 에이전트적 AI 전환이 성장을 위한 촉매제 제공(등급 업그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=90b6ee9c7b4bf5bdd2f99e9505dc5f7c6d4754fe7577cda56a9415ab7354034b",
        "publishedAt": 1791076529,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm Holdings 주식: 에이전트적 AI 변화가 성장을 위한 촉매제 제공(NASDAQ:ARM) | Seeking Alpha The Asian Investor 33.27K 팔로워 팔로우 요약 Arm Holdings는 Meta의 M과 같은 출시로 인해 AI에 최적화된 CPU 수요 급증으로 이익을 얻습니다.",
        "ARM의 라이선스 수익 전망은 Armv9 아키텍처의 성공으로 강화되어 회사가 다년간 구조적 성장을 이룰 수 있게 되었습니다.",
        "주식은 100.7배 프리미엄 P/E로 거래되는데, 이는 높은 성장 기대를 반영하지만 라이선스 및 로열티 모멘텀이 둔화될 경우 가치 평가 위험도 내재하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $518 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $518 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7fbe9830c4c0ba1274e5",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "INTC",
        "META",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Alphabet",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
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
      "headline": "Better Artificial Intelligence Stock: Alphabet vs. Meta Platforms",
      "headlineKo": "더 나은 인공 지능 주식: 알파벳 대 메타 플랫폼",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f0ddc9385e61425a34d556cef4490307a28dee7382190a6513ae687062e28fa",
        "publishedAt": 1791075974,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "더 나은 인공지능 주식: 알파벳 vs.",
        "메타 플랫폼 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool에 참여하세요. 인공 지능이 사용자가 정보를 찾고 정보를 찾는 방식을 변화시키면서 디지털 광고 환경이 변화하고 있습니다.",
        "알파벳( GOOGL +1.55% )( GOOG +1.62% )과 메타 플랫폼( META +0.30% ) 중에서 선택하려면 소셜 미디어 규모에 비해 검색 우위를 가늠해야 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.55%, 1.62%, 0.30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.55%, 1.62%, 0.30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7205e54cceff4d0d3916",
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
      "headline": "Nvidia (NVDA) Is At The Center Of An $8 Billion AI Financing Shift",
      "headlineKo": "엔비디아(NVDA)는 80억 달러 규모의 AI 자금 조달 변화의 중심에 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7b31f6f72da28162f972b402d8c7d61247def29acfb2b4cf188e0e950c90ce74",
        "publishedAt": 1791068782,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 NVDA의 사업과 관련된 'Nvidia (NVDA) Is At The Center Of An $8 Billion AI Financing Shift' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "c727f18a7b52c5f7cbeb",
      "schemaVersion": 1,
      "eventType": "competitor_supply_contract",
      "eventLabel": "경쟁사 공급 계약",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "ASML",
        "QCOM",
        "SPY",
        "TSM"
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
      "headline": "ASML Holding vs. Qualcomm: What Revenue Trends Tell Investors About These Semiconductor Industry Giants",
      "headlineKo": "ASML Holding과 Qualcomm: 반도체 업계의 거대 기업에 대해 수익 추세가 투자자에게 알려주는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3383b0266d756737bce44c3e390c6bd5b3484ab88f4e5bbb323e740c726f8ceb",
        "publishedAt": 1791067952,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm: 반도체 업계의 거대 기업에 대해 투자자에게 알려주는 수익 추세 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool ASML Holding 가입: 지속적인 수익 성장 Acce",
        "최근에는 고급 제조를 지원하기 위해 대형 포맷 포토마스크에 대해 Taiwan Semiconductor Manufacturing과 협력 이니셔티브를 수립하는 한편, 타이밍에 영향을 미치는 지연된 데이터 센터 프로젝트에 대한 광범위한 보고서를 탐색했습니다.",
        "Qualcomm: 최근 분기에 매출이 소폭 감소했습니다. Qualcomm( QCOM +1.53% )은 주로 글로벌 무선 통신 네트워크용 집적 회로 생성, 멀티미디어 기능 지원, 전 제품 라이센스를 통해 수익을 얻습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
        "이번 기사에서 확인된 구체적 수치: 1.53%, $8.2 billion, $10.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 경쟁사 수주 · 고객 점유 변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 1.53%, $8.2 billion, $10.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 공급사의 실제 물량",
        "기존 공급사 매출 비중",
        "고객의 이중 공급 전략"
      ]
    },
    {
      "id": "3fe4615910f279403ff9",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV",
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
      "headline": "NuScale vs. Oklo vs. GE Vernova: Ranking 3 Nuclear Stocks By Backlog, Not Hype.",
      "headlineKo": "NuScale vs. Oklo vs. GE Vernova: 과대 광고가 아닌 백로그 기준으로 3대 원자력 주식 순위를 매겼습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2b5f6fe7638bd3f1f5c4c82c20b7af15b0618e346b24f64d361a9590a8e4f2c8",
        "publishedAt": 1791059100,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova: 과대광고가 아닌 백로그를 기준으로 3대 원자력 주식 순위를 매겼습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 원자력 에너지 주식에 대한 과대 광고가 커지고 있습니다.",
        "이론은 간단합니다. 인공 지능(AI) 제공업체는 데이터 센터 구축을 위해 공격적으로 투자하고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.58%, 0.58 %, $ 0.21 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.58%, 0.58 %, $ 0.21 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c34991785b320b1ff673",
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
      "headline": "Intel (INTC) Data Center Comeback: Real Recovery or Just a Supply Squeeze?",
      "headlineKo": "인텔(INTC) 데이터 센터 복귀: 실질적인 회복인가, 아니면 단순한 공급 압박인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0114a7fa088f33b8185fa4d13720fadff0448f13f06eec2300d069b950bf31f2",
        "publishedAt": 1791057470,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel (INTC) Data Center Comeback: Real Recovery or Just a Supply Squeeze?",
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
      "id": "a01601c2a139e615afb9",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL"
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet (GOOGL) Prevails In Two US Antitrust Lawsuits",
      "headlineKo": "알파벳(GOOGL), 두 건의 미국 독점금지 소송에서 승소",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a67b61ce3b52370842677277426eb40658fad73d45752068de23fd418bbe9301",
        "publishedAt": 1791054449,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet (GOOGL) Prevails In Two US Antitrust Lawsuits",
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
      "id": "3e452793134c934da295",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Should You Buy Intel Stock as Its Foundry Turnaround Takes Shape?",
      "headlineKo": "파운드리 턴어라운드가 구체화되면 인텔 주식을 구매해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddbfbbb9fa7da9d6e25e8b59e16bf1b38aa3e71345fc9de013e5a36767dd358a",
        "publishedAt": 1791054300,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "파운드리 턴어라운드가 구체화되면 인텔 주식을 구매해야 합니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Intel( INTC -0.56% )의 복귀는 매우 볼만한 광경이었습니다.",
        "이 글을 쓰는 시점에서 칩 제조업체의 주가는 부분적으로 회사 CPU에 대한 수요 급증과 파운드리 사업 전망에 대한 낙관론 증가로 인해 2026년에 220% 이상 폭발했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 220%, 0.56 %, $ 119.33 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 220%, 0.56 %, $ 119.33 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "543387a7a41975cc2ab8",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Michael Saylor Says Strategy's STRC Is Now Steadier Than The S&P 500's Biggest Tracker: ‘A Milestone For Digital Credit’",
      "headlineKo": "Michael Saylor는 Strategy의 STRC가 이제 S&P 500의 가장 큰 추적기보다 안정적이라고 말합니다: '디지털 신용의 이정표'",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee12329e7abbd877b336c74ba43323b30da74472b86365c103513cadcc3b7955",
        "publishedAt": 1791049584,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Michael Saylor는 Strategy의 STRC가 이제 S&P 500의 가장 큰 추적기보다 안정적이라고 말합니다: '디지털 신용을 위한 이정표' AI 에이전트 동향 뉴스 수익 전체 DIA 0.49% SPY 0.15% QQQ 0.43% 추세 SMCI 1.42% SDEV 27.81% IBRX 0.83% SPCX 1.17%",
        "Michael Saylor는 Strategy의 STRC가 이제 S&P 500의 가장 큰 추적기보다 안정적이라고 말합니다: '디지털 신용을 위한 이정표' Strategy의 차트에서는 자체 보통주를 94%, 비트코인을 39%로 설정하여 주식과 채권 간 우선순위를 유지했습니다.",
        "마이클 세일러(Michael Saylor)가 2022년 4월 7일 마이애미 비치 컨벤션 센터에서 열린 비트코인 ​​2022 컨퍼런스에서 연설하는 동안 잠시 멈춥니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.15%, 0.43% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.15%, 0.43% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "8b45b89516618ef25ada",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "ASML",
        "INTC",
        "TSM"
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ASML vs. Taiwan Semiconductor Manufacturing Company: What Revenue Trends Tell Investors About These Companies Tied to Artificial Intelligence",
      "headlineKo": "ASML 대 대만 반도체 제조 회사: 수익 추세가 투자자에게 인공 지능과 관련된 회사에 대해 알려주는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aacc6d37ee82de492e2d813fb9db320c0c5343f102affa917d473bc613df5f8e",
        "publishedAt": 1791045242,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML 대 대만 반도체 제조 회사: 수익 추세가 투자자에게 인공 지능과 관련된 회사에 대해 알려주는 것"
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
      "id": "863f772ed7470d36226a",
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
      "headline": "Can AMD’s CPU Business Fund Its AI Chip Ambitions?",
      "headlineKo": "AMD의 CPU 사업이 AI 칩 야망에 자금을 지원할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a7bfaeadebd575188d152c345c9fbabf0175dc885806bf3cd3c62091296909a6",
        "publishedAt": 1791040956,
        "collectedAt": 1791211460.834829
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
        "이 기사는 AMD의 사업과 관련된 'Can AMD’s CPU Business Fund Its AI Chip Ambitions?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f08dbf53047d503d9bee",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Prediction: This Will Be Sandisk’s Stock Price by the End of 2026",
      "headlineKo": "예측: 2026년 말까지 Sandisk의 주가가 될 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=606c62e8c9e6381eac80397d5ac812e0ff733570203f9584a2cc68cb16d8f9ea",
        "publishedAt": 1791036481,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 2026년 말까지 Sandisk의 주가가 될 것입니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 2026년 633%의 놀라운 수익으로 Sandisk( SNDK -3.79% ) ha",
        "하지만 최근 휴대용 저장장치, SSD 등 낸드플래시 저장장치 제품을 생산하는 업체의 주가가 하락세를 보이고 있다.",
        "샌디스크 주가는 6월 22일 52주 최고가에서 25% 하락했다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 25%, 43%, 3.79 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 25%, 43%, 3.79 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ae8d37a2cba9b3d9627e",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "This Stock Posted the Best Performance in the “Magnificent Seven” in September. (Hint: It’s Not Nvidia.)",
      "headlineKo": "이 주식은 9월 '매그니피센트 세븐'에서 최고 수익률을 기록했습니다. (힌트: Nvidia가 아닙니다.)",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=284602e45d1ad9c65269f1aa8700a068da02e30cd374a7b4dfbdf8b4e1940659",
        "publishedAt": 1791034201,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 주식은 9월 '매그니피센트 세븐'에서 최고 수익률을 기록했습니다.",
        "(힌트: Nvidia가 아닙니다.) | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 참여하세요. Nvidia는 인공지능 분야의 지배력 덕분에 최근 몇 년간 지구상에서 가장 인기 있는 주식이었습니다.",
        "투자자들이 AI에 투자하려고 했을 때 Nvidia는 당연한 선택이자 매우 현명한 선택으로 떠올랐습니다. 주가가 5년 동안 1,000%나 급등했기 때문입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1,000%, 20%, 4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1,000%, 20%, 4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e4eebcd964ceb6b02c1a",
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
      "headline": "Elon Musk Hints at Tesla-SpaceX Merger: “Who Can Imagine What Action One Might Take”",
      "headlineKo": "Elon Musk는 Tesla-SpaceX 합병에 대해 암시합니다: \"어떤 조치를 취할 수 있는지 누가 상상할 수 있습니까?\"",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d5beecf837c542a790a8cab82dd530010a359668c4f76c5adf640e9ac0829ca5",
        "publishedAt": 1791033305,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk는 Tesla-SpaceX 합병에 대해 암시합니다: \"어떤 조치를 취할 수 있는지 누가 상상할 수 있습니까?\" - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,729.20 +0.64% Dow Jones 51,232.00 +0.46% Nasdaq 100 30,827.70 +0.91% Russell 2000 2,836.24 +0.78% S&P 500 7,729.20 +0.64% 다우존스 51,232.00 +0.46% 나스닥 100 30,827.70 +0.91% 러셀 2000 2,836.24 +0.",
        "작성자: Chris Lange 2026년 10월 3일 오전 9시 15분(ET) 게시 · 3분 읽기 𝕏 f ⧉ Elon Musk는 그의 두 가지 주요 벤처인 SpaceX 로켓이 궤도로 올라가는 것과 Tesla 차량으로 분주한 미래의 도시 풍경을 혼합한 이미지에 눈에 띄게 서 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.47 trillion, $1.21 trillion, $2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.47 trillion, $1.21 trillion, $2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5e7c9c3e2d714d306aa4",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "INTC",
        "MRVL",
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
      "headline": "Intel vs. Marvell Technology: Which AI Chip Stock Is a Better Buy in 2026?",
      "headlineKo": "Intel 대 Marvell 기술: 2026년에는 어떤 AI 칩 주식을 구매하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e74d0613e05b844eddb07d93f80c7bf4986c879cada5b27c17f5b8175857351b",
        "publishedAt": 1791032701,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology: 2026년에는 어떤 AI 칩 주식을 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Intel( INTC -0.56% )과 Marvell Technology( MRVL +1.57% )는 모두 데이터 센터용 칩을 판매하며 두 회사 모두 수요가 t라고 말합니다.",
        "그 외에는 공통점이 거의 없습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $119.33, 0.56 %, $0.67 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $119.33, 0.56 %, $0.67 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "624cc80bd030f9d04875",
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
      "headline": "The simple reason Meta CEO Mark Zuckerberg is winning for investors again",
      "headlineKo": "Meta CEO Mark Zuckerberg가 다시 투자자들에게 승리를 거두는 간단한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d8174e735e6898915c3fa0d473535e975aa78925c23ea36ec9927eb3a29c150",
        "publishedAt": 1791029430,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 META의 사업과 관련된 'The simple reason Meta CEO Mark Zuckerberg is winning for investors again' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f8be6e4b0b5cc26c3f57",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Lumentum: The Rally May Not Be Over",
      "headlineKo": "Lumentum: 집회가 끝나지 않았을 수도 있습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6588a8af0862b4d4cca1fb9772817aebe97a90381e571c55d306337c03ea2e72",
        "publishedAt": 1791027565,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum: 랠리는 끝나지 않을 수도 있습니다(NASDAQ:LITE) | 알파 무한대 곡선 추구 105만 명의 팔로워 팔로우 요약 Lumentum의 4분기 매출은 109% 급증하여 10억 6천만 달러를 기록했으며 총 마진은 경영진의 역사적 기록보다 훨씬 빠른 50.4%에 도달했습니다.",
        "Lumentum이 더 높은 가치의 AI 네트워킹 및 시스템 인프라로 더욱 깊이 확장됨에 따라 OCS 매출은 분기당 1억 달러를 초과할 것입니다.",
        "레이저 수요는 계속해서 용량을 초과하고 있으며, 1.6T, CPO 및 외부 레이저 소스는 2027년과 2028년까지 중복되는 성장 동력을 제공합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 109%, $1.006 billion, 50.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LITE에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 109%, $1.006 billion, 50.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "34858be24329eeffd4cf",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Could $20,000 Invested in Palantir Help You Retire a Millionaire?",
      "headlineKo": "Palantir에 20,000달러를 투자하면 백만장자를 은퇴하는 데 도움이 될 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=524d60190817c6c6b82f41fd34a90d764808bb415434df235684bd1a261a3fae",
        "publishedAt": 1791026700,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $20,000, 60%, 149%, $764 million, 90%, $809 million, $3.3 billion, 49%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 PLTR의 사업과 관련된 'Could $20,000 Invested in Palantir Help You Retire a Millionaire?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "65b128156345a15fb0b7",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "headline": "The Memory Boom Helped Micron Deliver a Record Year. Here’s Where the Stock Will Be in 3 Years",
      "headlineKo": "메모리 붐은 Micron이 기록적인 한 해를 보내는 데 도움이 되었습니다. 3년 후 주식의 위치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2354c407826692c8c3a65dc9ca4f27c56f7b101c49d117bab7343c1d2f2b035d",
        "publishedAt": 1791025621,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 붐은 Micron이 기록적인 한 해를 보내는 데 도움이 되었습니다.",
        "3년 후 주식의 위치는 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron Technology( MU -2.05% ) 주가는 지난 1년간 6배 이상 올랐고,",
        "마이크론은 2026회계연도 4분기(9월 마감) 기록적인 결과를 발표했다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 256%, $133.2 billion, 76% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 256%, $133.2 billion, 76% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5675a3b96013a60d4115",
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
      "headline": "\"Boy Room\" made about $15,000 on TikTok before Amazon partnership",
      "headlineKo": "\"Boy Room\"은 Amazon 파트너십 이전에 TikTok에서 약 15,000달러를 벌었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ea3b8bba30c5dbaffcee8f0c032cc95a674bb827f625a62815a0db270c5b759f",
        "publishedAt": 1791025213,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "\"Boy Room\" made about $15,000 on TikTok before Amazon partnership",
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
      "id": "ed94943b48b4bb926551",
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
      "headline": "If You'd Invested $1,000 in Broadcom's 2009 IPO, Here's How Much You'd Have Today",
      "headlineKo": "Broadcom의 2009년 IPO에 1,000달러를 투자했다면 현재 얼마를 받게 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de6f4ce86dda1edc47278627dde91333c4e95c639dffff81f77b0de5e4686a17",
        "publishedAt": 1791023700,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom의 2009년 IPO에 1,000달러를 투자했다면 현재 얻을 수 있는 금액은 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool 가입 Broadcom( AVGO +3.35% )이 8월에 IPO를 시작했습니다.",
        "당시 Avago Technologies로 알려진 다른 비즈니스를 위한 반도체 구축 전략은 고객과 투자자 모두에게 반향을 불러일으켰습니다.",
        "회사의 성공은 또한 Broadcom에 지원과 균형을 제공하는 소프트웨어로의 전환을 촉진했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.50, $1,005, $220,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.50, $1,005, $220,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ba12dce2b7d1ed6066c8",
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
      "headline": "Meta's AI Spending Has a $3.9 Billion Tax Perk — Mark Zuckerberg-Led Company Reportedly Classified Data Centers as ‘Pilot Models’",
      "headlineKo": "Meta의 AI 지출에는 39억 달러의 세금 혜택이 있습니다. Mark Zuckerberg가 이끄는 회사는 데이터 센터를 '파일럿 모델'로 분류한 것으로 알려졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=01488a7f7b553e32b81df4845e8bcab2fe38b7981e68f003c49f02263d39a69d",
        "publishedAt": 1791020720,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 META의 사업과 관련된 'Meta's AI Spending Has a $3.9 Billion Tax Perk — Mark Zuckerberg-Led Company Reportedly Classified Data Centers as ‘Pilot Models’' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "819e7fdbe55b9ccff2c5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Prediction: This AI Chip Stock Will Be the Biggest Winner of 2027 (Hint: It’s Not Nvidia, AMD, or Broadcom)",
      "headlineKo": "예측: 이 AI 칩 주식은 2027년의 가장 큰 승자가 될 것입니다(힌트: Nvidia, AMD 또는 Broadcom이 아닙니다)",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3cbc6c6c0489fd7871ef6ef60d42c8e47422fbe7010e81af63fcff7e378e40de",
        "publishedAt": 1791020401,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 이 AI 칩 주식은 2027년의 가장 큰 승자가 될 것입니다(힌트: Nvidia, AMD 또는 Broadcom이 아닙니다) | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% 합류 The Motley Fool Semiconductor 수요는",
        "시장조사업체 가트너는 올해 반도체 산업 매출이 지난해보다 92% 늘어난 1조6000억 달러에 달할 것으로 예상했다.",
        "회사는 2027년에도 1조 9000억 달러로 인상적인 두 자릿수 성장을 기대하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.6 trillion, 92%, $1.9 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.6 trillion, 92%, $1.9 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ec32450ff839d6bee8cc",
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
      "headline": "Is a Microsoft Stock Split Coming After 23 Years?",
      "headlineKo": "23년 후에 Microsoft 주식 분할이 이루어지나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=099437711ee6544a71693f4f940efae7809e093a948cc565c4452d46ce8abb68",
        "publishedAt": 1791017221,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "23년 후에 Microsoft 주식 분할이 이루어지나요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 참여하세요. Microsoft( MSFT +0.92% ) 주가는 이 글을 쓰는 시점에서 약 518달러였으며, 이는 지난 10월 기록된 542달러의 약 5% 이내였습니다.",
        "마이크로소프트 이사회는 이전에는 주가가 그 정도로 높은 수준으로 올라가는 것을 거의 허용하지 않았습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $25, $500, $98 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $25, $500, $98 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "afe451d60be9ad51ad4b",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "QQQ",
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
      "headline": "Western Digital: Buy Aggressively Because The Market Is Wrong",
      "headlineKo": "Western Digital: 시장이 틀렸으니 공격적으로 매수하세요",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=55ea776d3c9a22e8f76633feffbcff2648878cd55841d3c64d2a301cf36cd7be",
        "publishedAt": 1791014818,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital: 시장이 틀렸기 때문에 공격적으로 매수하세요(NASDAQ:WDC) | 알파 사냥을 추구하다 Alphas 9.25K 팔로워 팔로우 요약 Western Digital의 클라우드 비즈니스는 축적된 AI 데이터 지원을 통해 수익의 거의 90%를 차지합니다.",
        "대용량 UltraSMR 및 HAMR 드라이브는 중장기적으로 연간 테라바이트당 비용을 약 10% 절감하는 것을 목표로 삼아 마진을 확대할 수 있습니다.",
        "Toshiba의 계획된 확장으로 인해 가격 위험이 높아지지만 Western Digital의 고용량 제품과 장기 고객 계약은 경쟁력 있는 보호를 제공합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 90%, 10%, 7.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 90%, 10%, 7.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "8a1b15d88bf3633c4606",
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
      "headline": "Marvell Stock Has More Than Tripled This Year. I Think It Can Double Again by 2031.",
      "headlineKo": "Marvell 주식은 올해 3배 이상 증가했습니다. 나는 2031년까지 다시 두 배로 늘어날 수 있다고 생각한다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf86ee971d062cf045c0aa8c68e0a8dacb0336337ed6b63b746cef78e79fbf2d",
        "publishedAt": 1791014581,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell 주식은 올해 3배 이상 증가했습니다.",
        "나는 2031년까지 다시 두 배로 늘어날 수 있다고 생각한다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool Marvell Technology( MRVL +1.57% )에 합류하세요. 2026년을 주당 약 85달러로 시작했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $263, 50%, $18 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $263, 50%, $18 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f88123407db6ac1a34da",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "MU",
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
      "importance": "medium",
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
      "headline": "Benzinga Bulls and Bears: Alphabet, Micron, Nike",
      "headlineKo": "벤징가 황소와 곰: 알파벳, 마이크론, 나이키",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b301adb08f6739782553d10de0a5a721e5aa0f60e2845376e59ef852f1edaf54",
        "publishedAt": 1791014409,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "벤징가 황소와 곰: 알파벳, 마이크론, 나이키 - 알파벳(NASDAQ:GOOGL), 알파벳(NASDAQ:GOOG) SPY 769.86 +0.03% QQQ 749.55 −0.00% BTC/USD 84,661.85 +0.19% DIA 511.70 +0.12% GLD 380.52 +0.10% TLT 77.53 +0.06% US 로그인 회원가입 My Acco",
        "예상보다 부진한 9월 고용 보고서가 연준의 추가 금리 인상에 대한 우려를 완화하고 기술주 반등에 도움이 되면서 주가는 혼조세로 마감했습니다.",
        "이번 주 S&P 500 지수는 0.3% 하락했고, 다우존스 산업평균지수는 1.3% 하락했고, 나스닥 종합지수는 0.5% 상승했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.03%, 0.00%, 0.19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.03%, 0.00%, 0.19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2f6103fe88952b53f557",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Dan Ives Says Tesla Could Have A ‘Golden Year’ In 2027 — Robotaxis, Optimus And Cybercab In Focus",
      "headlineKo": "Dan Ives는 Tesla가 2027년에 '황금의 해'를 맞이할 수 있다고 말합니다 — Robotaxis, Optimus 및 Cybercab에 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd5acbc96f4f7e5e641bdaaaf473b6d77f070580963e2b4f2e0ee2196c5e5361",
        "publishedAt": 1791011381,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dan Ives는 Tesla의 빅 AI 피벗이 다가오고 있다고 말합니다. '2027년은 황금의 해가 될 수 있습니다' AI 에이전트 동향 뉴스 수익 전체 DIA 0.49% SPY 0.74% QQQ 1.02% Trending CASHCAT 3.40% MSTX 0.90% HIMX 5.47% WRD 3.37% NIGHT 0.36% FET 6.77% B 0.32% IBRX 10.83%",
        "Dan Ives는 Tesla가 2027년에 '황금의 해'를 맞이할 수 있다고 말했습니다 — Robotaxis, Optimus 및 Cybercab에 집중하고 있습니다. CNBC와의 인터뷰에서 Ives는 이제 더 큰 질문은 Tesla가 안정화된 EV 수요를 더 넓은 시장으로 전환할 수 있는지 여부라고 말했습니다.",
        "Tesla CEO Elon Musk가 홍콩에서 기자회견을 하는 동안 Model S 옆에서 언론과 이야기하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fb49b7cfeb60ab0835a1",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla’s Cybercab had a rocky first month in Austin. Now comes the hard part: expanding",
      "headlineKo": "Tesla의 Cybercab은 오스틴에서 첫 달을 험난하게 보냈습니다. 이제 어려운 부분이 다가옵니다. 확장",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=65ea1f431dfbec59e9385e95702ccc0cda18a538d91cb49c6f944db7c48fcb82",
        "publishedAt": 1791010801,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오스틴에서 험난한 첫 달 이후 Tesla Cybercab 확장 압력 탐색 건너뛰기 시장 비즈니스 투자 기술 정치 및 정책 비디오 관심 목록 Investing Club PRO 라이브스트림 메뉴 요점 Austi에서 Cybercab이 출시된 지 한 달 후",
        "투자자들은 핵심 자동차 사업부가 중국 EV 제조업체와의 경쟁이 치열해짐에 따라 Tesla가 Robotaxi 및 Cybercab 사업을 성장시킬 것으로 기대하고 있습니다.",
        "오스틴의 Cybercab에 대한 리뷰는 혼합되어 있으며 일부 유료 승객은 긴 대기 시간과 잘못된 장소에서 하차한다고 불평했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 18%, 5%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 18%, 5%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "df523500445edc84444e",
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
      "headline": "Meta Platforms Stock Rose 25% in September. Is It Still a Buy in October?",
      "headlineKo": "메타 플랫폼 주식은 9월에 25% 상승했습니다. 10월에도 여전히 매수세인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee48ef65450fd58f39dd2121b40f88c34a9d21c7a2ebe70bbd61ad7472eb3ef8",
        "publishedAt": 1791006420,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타 플랫폼 주식은 9월에 25% 상승했습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool Meta Platforms에 참여하세요 ( META +0.30% ) .",
        "9월 월스트리트에서 가장 성과가 좋은 주식 중 하나였습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 25%, 0.30 %, $ 2.15 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 25%, 0.30 %, $ 2.15 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2638cc267b6383ea6506",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Eaton (ETN) Expands Austria Plant As Electrification Demand Keeps Its Valuation In Focus",
      "headlineKo": "Eaton(ETN), 전기화 수요로 인해 가치 평가에 초점이 맞춰짐에 따라 오스트리아 공장 확장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b50bb506168721c9be2254902064759e8584dba856d6cb026cd9e837a2683aeb",
        "publishedAt": 1791000957,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Eaton (ETN) Expands Austria Plant As Electrification Demand Keeps Its Valuation In Focus",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ETN에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "f6f47e11392f30299f2e",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM",
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
      "headline": "Salesforce vs. CrowdStrike: What Revenue Growth Trends for These Software Giants Tell Investors",
      "headlineKo": "Salesforce 대 CrowdStrike: 거대 소프트웨어 기업의 수익 성장 추세가 투자자에게 알려주는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0936fdb58fc27941ba4dc22d2207f768475ac231b3059bf31dfd52008a176e42",
        "publishedAt": 1790999148,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CrowdStrike: 거대 소프트웨어 기업의 수익 성장 추세가 투자자에게 알려주는 것 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Salesforce에 합류: 대규모 Sca에서 꾸준한 수익 창출",
        "가장 최근 분기에는 인공 지능 붐을 활용하기 위해 전문 기술 팀을 적극적으로 통합하기 위해 고객 에이전트 플랫폼 Fin의 전략적 인수를 마무리했습니다.",
        "이는 사용자 로그인, 애플리케이션 프로그래밍 인터페이스 및 여러 국제 지역의 일일 운영 워크플로우에 일시적으로 영향을 미치는 광범위한 글로벌 서비스 중단을 동시에 탐색했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.73%, $9.4 billion, $1.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.73%, $9.4 billion, $1.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "cbc3abe0a34b96d222e9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "META",
        "MSFT",
        "NVDA",
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
      "headline": "Mag 7 Voices: Huang Defends AI Spending, Pichai Ramps Up Gemini, Nadella Calls Copilot A ‘New OS For Work’ This Week",
      "headlineKo": "Mag 7 Voices: Huang은 AI 지출을 옹호하고 Pichai는 Gemini를 강화하며 Nadella는 Copilot을 이번 주에 '업무를 위한 새로운 OS'라고 부릅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=46d3c6a7d717e97fd24c883d9bfe1437bda2f3237c110f4776dbe0b335daddb1",
        "publishedAt": 1790992895,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Mag 7 목소리: Huang은 AI 지출을 옹호하고 Pichai는 Gemini를 늘리고 Nadella는 Copilot을 이번 주 '업무를 위한 새로운 OS'로 부릅니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.49% SPY 0.74% QQQ 1.02% Trending HIMX 5.47% STRK 25.69% DX 0.54% RIG 1.34% DIA 0.",
        "Mag 7 Voices: Huang은 AI 지출을 옹호하고 Pichai는 Gemini를 강화하고 Nadella는 이번 주 Copilot에 '업무를 위한 새로운 OS'를 요청합니다. Nvidia, Alphabet 및 Meta는 백악관의 자발적인 AI 안전 협정에 서명했으며 Microsoft와 Amazon은 Whit에 참석했습니다.",
        "엔비디아 CEO 젠슨 황(왼쪽)과 메타 CEO 마크 주커버그(왼쪽) 옆에 앉은 도널드 트럼프 미국 대통령이 2026년 9월 29일 워싱턴 DC에서 열린 기술 경영진과의 회의에서 연설하고 있다."
      ],
      "marketInterpretation": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 경쟁사 수주 · 고객 점유 변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 공급사의 실제 물량",
        "기존 공급사 매출 비중",
        "고객의 이중 공급 전략"
      ]
    },
    {
      "id": "a01ca827b3b071bd4fde",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
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
      "headline": "Why AMD Stock Jumped 30% in September",
      "headlineKo": "AMD 주가가 9월에 30% 상승한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a3ec4a78d686a99c53adbedae0b4aa1d97e7cf22db5a37eeee6689151025dbc3",
        "publishedAt": 1790988602,
        "collectedAt": 1791211460.834829
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD 주가가 9월에 30% 상승한 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Shares of Advanced Micro Devices( AMD +2.95% )는 지난 달 d 이후 승자 중 하나였습니다.",
        "AMD는 또한 인수를 발표했으며 일부 긍정적인 분석가 논평의 혜택을 받았습니다.",
        "그 결과, S&P Global Market Intelligence의 데이터에 따르면 주가는 30% 상승하며 한 달을 마감했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $8.2 billion, $1 Trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, $8.2 billion, $1 Trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "52d700670141c8311feb",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Give Your Dying Father $500,000 of Nvidia Stock So You Can Inherit It Back With a Tax-Free Step-Up. If He Dies Within a Year, the IRS Pretends the Gift Never Happened",
      "headlineKo": "돌아가신 아버지에게 $500,000의 Nvidia 주식을 주시고 면세 혜택을 통해 다시 상속받으세요. 그가 1년 안에 사망하면 IRS는 선물이 전혀 일어나지 않은 것처럼 가장합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=31983522ac1ba4e04d351fae9c4d6d0470c24f7e3733f0200894a81c4fb42d4c",
        "publishedAt": 1790988284,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "돌아가신 아버지에게 $500,000의 Nvidia 주식을 주시고 면세 혜택을 통해 다시 상속받으세요.",
        "그가 1년 안에 사망하면 IRS는 선물을 전혀 없었던 것으로 간주합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,729.20 +0.64% Dow Jones 51,232.00 +0.46% Nasdaq 100 30,827.70 +0.91% Russell 2000 2,836.24 +0.78% S&P 500 7,729.20 +0.64% 다우존스 51,232.00 +0.46% 나스닥 100 30,827.70 +0.91% 러셀 2000 2,836.24 +0."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $500,000, $0, $93,315 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $500,000, $0, $93,315 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0f1776e9ff6c99aa7ba9",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "Stocktwits Zero To Sixty —  Tesla Deliveries Clear The Street, BYD Widens The Gap, Rivian Holds Forecast, Ford And GM EV Sales Fall Hard",
      "headlineKo": "Stocktwits Zero to Sixty — Tesla 배송으로 거리가 깨끗해지고, BYD가 격차를 넓히고, Rivian이 예측을 유지하고, Ford와 GM EV 판매가 급격히 감소합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60d814640e97dc01325b04fc7406e6348ef22627208dd8789ecad9f0bcf5bf10",
        "publishedAt": 1790987380,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits Zero to Sixty — Tesla 배송으로 거리가 넓어지고, BYD가 격차를 벌리고, Rivian이 예측을 유지하고, Ford 및 GM EV 판매가 하락합니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.49% SPY 0.74% QQQ 1.02% 추세 COMP 1.15% WLD 11.09% CRMD 2.",
        "Stocktwits Zero to Sixty — Tesla 배송으로 거리가 넓어지고, BYD가 격차를 넓히고, Rivian이 예측을 유지하고, Ford와 GM EV 판매가 크게 감소합니다. Tesla와 Rivian은 3분기 배송 예상치를 상회했고, BYD는 배터리 전기 리드를 확대했으며, Ford",
        "충전소에서 자동차로 전기 플러그를 들고 있는 젊은 여성."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "00ec534d42ff7c45f02c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "META",
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
          "name": "Meta",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple Takes Aim at AI Agents, Wants Mac Users to Know When Their Data Is Accessed as Meta Tackles Muse Privacy Claims",
      "headlineKo": "Apple은 AI 에이전트를 목표로 하며 Meta가 Muse 개인 정보 보호 주장을 다루면서 Mac 사용자가 자신의 데이터에 액세스할 때 알 수 있기를 원합니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=49ef151a6c0cc6dc59b7efa469f6605c35ae34efc5eb0c51dc6d1291701b944b",
        "publishedAt": 1790983913,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple은 AI 에이전트를 목표로 하며 메타 태클을 통해 Mac 사용자가 자신의 데이터에 액세스하는 시기를 알기를 원합니다. Muse Pr - Benzinga SPY 769.86 +0.03% QQQ 749.55 −0.00% BTC/USD 84,807.71 +0.08% DIA 511.70 +0.12% GLD 380.52 +0.10% TLT 77.53 +0.06% 미국 서명",
        "(NASDAQ: AAPL)은 AI 에이전트가 시스템 데이터에 액세스하려고 할 때마다 사용자에게 알리도록 macOS를 업데이트할 계획입니다.",
        "이러한 움직임은 복잡한 작업을 수행하고 개인 메시지에 접근했다는 비난을 받아온 Meta Platforms Inc.(NASDAQ: META)의 Muse와 같은 AI 에이전트 사용에 대한 비판에 따른 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.03%, 0.00%, 0.08% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.03%, 0.00%, 0.08% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "130a6564f18c190d37ff",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "NVDA",
        "QCOM",
        "QQQ",
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
      "headline": "S&P 500, Nasdaq, Dow End Week Higher As Weak Jobs Report Cools Rate Hike Bets — NVDA, BA, SPCX, RIVN, APLD In Focus",
      "headlineKo": "S&P 500, Nasdaq, Dow는 취약한 일자리 보고서가 금리 인상 베팅을 냉각함에 따라 주간 상승 — NVDA, BA, SPCX, RIVN, APLD 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d04eae234e3a29ff64372c2c9007ab3075e1d99b0395ce2a635e928e33c28b0a",
        "publishedAt": 1790980139,
        "collectedAt": 1791213388.8175483
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Nasdaq, Dow는 취약한 일자리 보고서가 금리 인상 베팅을 식혀 주말 상승 — NVDA, BA, SPCX, RIVN, APLD 초점 AI 에이전트 동향 뉴스 수입 전체 DIA 0.03% SPY 0.03% QQQ 0.00% 추세 SDEV 13.96% CBRS 6.35% XRPN 0.52% QCOM 3.75% TSM",
        "S&P 500, Nasdaq, Dow는 취약한 일자리 보고서가 금리 인상 베팅을 냉각함에 따라 주간 상승세 — NVDA, BA, SPCX, RIVN, APLD In Focus",
        "경제는 지난 달 29,000개의 일자리를 추가했으며 실업률은 경제학자들의 예상보다 낮은 4.2%로 상승했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.03%, 0.00%, 13.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.03%, 0.00%, 13.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "64909fadbb7a557cc35f",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "SPY",
      "relatedTickers": [
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
      "headline": "S&P 500, Nasdaq, Dow End Week Higher As Weak Jobs Report Cools Rate Hike Bets — NVDA, BA, SPCX, RIVN, APLD In Focus",
      "headlineKo": "S&P 500, Nasdaq, Dow는 취약한 일자리 보고서가 금리 인상 베팅을 냉각함에 따라 주간 상승 — NVDA, BA, SPCX, RIVN, APLD 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d04eae234e3a29ff64372c2c9007ab3075e1d99b0395ce2a635e928e33c28b0a",
        "publishedAt": 1790980139,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Nasdaq, Dow는 취약한 일자리 보고서가 금리 인상 베팅을 식히면서 주간 상승 — NVDA, BA, SPCX, RIVN, APLD 초점 AI 에이전트 동향 뉴스 수입 전체 DIA 0.49% SPY 0.74% QQQ 1.02% 추세 COMP 0.81% RYCEY 0.26% CRMD 2.16% WLD 11.47% QXO",
        "S&P 500, Nasdaq, Dow는 취약한 일자리 보고서가 금리 인상 베팅을 냉각함에 따라 주간 상승세 — NVDA, BA, SPCX, RIVN, APLD In Focus",
        "경제는 지난 달 29,000개의 일자리를 추가했으며 실업률은 경제학자들의 예상보다 낮은 4.2%로 상승했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "40106bbcf3bc4bc2ed6c",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia Stock Is Back at Its May Record. Its Quarterly Revenue Is 41% Higher.",
      "headlineKo": "Nvidia 주식이 5월 기록으로 돌아왔습니다. 분기별 수익은 41% 더 높습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e2300e575b83965156a63766cda5c8c1f88a4e57e39ee97554a2646a4218c6e",
        "publishedAt": 1790978822,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 주식이 5월 기록으로 돌아왔습니다. 분기별 수익은 41% 더 높습니다."
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
      "id": "f2fb25dbe2e563abdb82",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "headline": "Micron's Last 5 Post-Earnings Dips Turned Into Gains. This Time, the Stock Rose Instead.",
      "headlineKo": "마이크론의 최근 5번의 실적 하락이 이익으로 전환되었습니다. 이번에는 주식이 대신 상승했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eef4d5def078b35894a2b8baffd91473d30452794967b020127647b8d7969cbb",
        "publishedAt": 1790977021,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론의 최근 5번의 실적 하락이 이익으로 전환되었습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron Technology( MU -2.05% )가 사상 최대 분기를 기록했습니다.",
        "2026년 회계 4분기(14주 기간은 9월에 종료됨)"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $54.2 billion, 379%, $33.42. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $54.2 billion, 379%, $33.42. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1cde97e0c777a2860f13",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "VST",
      "relatedTickers": [
        "QQQ",
        "SPY",
        "VST",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Trump Administration Reportedly Prepares $4B Federal Loan to Expand Vistra’s Nuclear Capacity",
      "headlineKo": "트럼프 행정부는 Vistra의 원자력 용량 확장을 위해 40억 달러의 연방 대출을 준비한 것으로 알려짐",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b381071346cdccaa923c9d2d4714acbc53905119ff5a8870022fd89d72b83fb2",
        "publishedAt": 1790973424,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "트럼프 행정부는 Vistra의 핵 용량을 확장하기 위해 40억 달러의 연방 대출을 준비하는 것으로 알려짐 AI 에이전트 동향 뉴스 수익 전체 DIA 0.21% SPY 0.14% QQQ 0.07% 추세 CBRS 7.82% WDC 1.26% SDEV 29.55% BE 0.29% AGEN 0.36% NU 7.97% CRMD 3.10",
        "트럼프 행정부는 Vistra의 원자력 용량 확장을 위해 40억 달러의 연방 대출을 준비한 것으로 알려졌습니다. 연방 정부는 Vistra Corp에 자금을 제공할 예정입니다.",
        "증가하는 에너지 수요를 충족하기 위해 오하이오와 펜실베니아 전역의 원자력 시설을 업그레이드하기 위해 약 40억 달러의 대출을 받았습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $4, 0.21%, 0.14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VST에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $4, 0.21%, 0.14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "fbb636cc3926e7178202",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "QQQ",
        "SPY",
        "WDC"
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
      "headline": "SPCX Stock Climbs As Three Thursday Launches Meet Start Of Google’s $920 Million AI Pact",
      "headlineKo": "세 번째 목요일에 Google의 9억 2천만 달러 규모의 AI 협약이 시작되면서 SPCX 주가가 상승했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a7776e834dca6c2b0ebc4a861be7977a6d592f84149e54306c8264bc8cab7cd",
        "publishedAt": 1790971358,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "세 번째 목요일에 Google의 9억 2천만 달러 규모의 AI Pact AI 에이전트 시작과 함께 SPCX 주가 상승 추세 뉴스 수익 전체 DIA 0.49% SPY 0.74% QQQ 1.02% Trending COMP 1.15% WLD 11.09% CRMD 2.16% WDC 10.22% PEP 0.23% DXYZ 4.99% FSLY 2.20%",
        "세 번째 목요일에 Google의 9억 2천만 달러 규모의 AI 협약이 시작되면서 SPCX 주가가 상승했습니다. 목요일부터 약 13시간 동안 SpaceX는 NASA의 Crew-13, Transporter-18 및 NROL-97의 세 가지 임무를 수행했습니다.",
        "SpaceX Falcon 9 로켓이 2026년 8월 4일 캘리포니아주 호손에 있는 SpaceX 시설에 전시되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $920 Million, 0.49%, 0.74% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $920 Million, 0.49%, 0.74% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "feadef8f231c6dad4640",
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
      "headline": "Tesla Just Lined Up $30 Billion in Credit: What It Means for AI, Capex, and the Investment Case",
      "headlineKo": "Tesla는 방금 300억 달러의 신용을 확보했습니다: AI, Capex 및 투자 사례에 대한 의미",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c25afb22aec6f4d582fdb4e90b0e7e00b8f23ddcb219e01e0a355e61e93e03a4",
        "publishedAt": 1790970600,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $30 billion, $20 billion, 10 times, $10 million, $5 million, 4.65 %, $ 16.48, $ 370.59.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 TSLA의 사업과 관련된 'Tesla Just Lined Up $30 Billion in Credit: What It Means for AI, Capex, and the Investment Case' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "36aeb716f793ce705a0a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "If You Invested $100 In Oracle Stock 20 Years Ago, You Would Have This Much Today",
      "headlineKo": "20년 전 오라클 주식에 100달러를 투자했다면 지금은 이 정도의 수익을 얻게 될 것입니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5d371b6a9caa6fca155db4219c9e4f4139d5a72f53a2dbe3b654aec779e8bbc2",
        "publishedAt": 1790968620,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "20년 전 오라클 주식에 100달러를 투자했다면 현재 이 정도의 수익을 얻게 될 것입니다. - Oracle (NYSE:ORCL) - Benzinga SPY 769.86 +0.03% QQQ 749.55 −0.00% BTC/USD 84,750.12 +0.29% DIA 511.70 +0.12% GLD 380.52 +0.10% TLT 77.53 +0.06% US 로그인 R",
        "현재 오라클의 시가총액은 4,315억 2천만 달러입니다.",
        "ORCL에서 $100 구매: 투자자가 20년 전에 $100의 ORCL 주식을 구매했다면 이 글을 쓰는 당시 ORCL의 $142.35 가격을 기준으로 현재 $767.12의 가치가 있을 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $100, 0.03%, 0.00% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $100, 0.03%, 0.00% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "164705d71cebe6abf557",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Cramer Warned Viewers That Meta’s AI Would Crush This Stock, and Someone Just Bet Millions It Won’t",
      "headlineKo": "Cramer는 Meta의 AI가 이 주식을 무너뜨릴 것이라고 시청자에게 경고했지만 누군가는 그렇지 않을 것이라고 수백만 달러를 걸었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9abfe531e614a8ca3e5110e4211c4877000f499f6efeef23c91f09115d203e31",
        "publishedAt": 1790968231,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cramer는 Meta의 AI가 이 주식을 무너뜨릴 것이라고 시청자에게 경고했지만 누군가는 그렇지 않을 것이라고 수백만 달러를 걸었습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,729.20 +0.64% Dow Jones 51,232.00 +0.46% Nasdaq 100 30,827.70 +0.91% Russell 2000 2,836.24 +0.78% S&P 500 7,729.20 +0.64% 다우존스 51,232.00 +0.46% 나스닥 100 30,827.70 +0.91% 러셀 2000 2,836.24 +0.",
        "작성자 David Moadel 2026년 10월 2일 오후 3시 10분(ET) 게시 · 읽기 3분 𝕏 f ⧉ 개인이 여러 화면에서 금융 차트를 모니터링하는데, 이는 최근 규제 변경에 따라 증가된 접근성과 거래에 대한 집중을 반영합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 58%, $282.60, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 58%, $282.60, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "ef718706fb0776b90812",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "GOOGL",
        "MSFT",
        "NVDA",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "I Sold NVIDIA, Google and Microsoft Over a $2 Trillion AI Gap. Was I Wrong?",
      "headlineKo": "저는 NVIDIA, Google, Microsoft를 2조 달러 이상의 AI 격차로 매각했습니다. 내가 틀렸나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da51e5484dedd477400c3e64887e03fb4b11a0e3918df93cf8a3625b45d4a595",
        "publishedAt": 1790967931,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "저는 NVIDIA, Google, Microsoft를 2조 달러 이상의 AI 격차로 매각했습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,729.20 +0.64% Dow Jones 51,232.00 +0.46% Nasdaq 100 30,827.70 +0.91% Russell 2000 2,836.24 +0.78% S&P 500 7,729.20 +0.64% 다우존스 51,232.00 +0.46% 나스닥 100 30,827.70 +0.91% 러셀 2000 2,836.24 +0.",
        "Reddit 투자자는 경제성이 단순히 합산되지 않는다는 것을 보여주는 수학으로 무장하여 시장에서 가장 큰 AI 상호 중 3개를 떠났습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $2 Trillion, $2 trillion, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2 Trillion, $2 trillion, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3f72e247280216479541",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "WDC",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Seagate Sinks 12%, Western Digital Down 10% as Toshiba Plans to Double Hard Disk Output",
      "headlineKo": "Toshiba가 하드 디스크 생산량을 두 배로 늘릴 계획으로 Seagate는 12% 하락, Western Digital은 10% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6bd4557c47112a837329a795286da6ed9ef53925f76b76cfb03dc72b08ad15de",
        "publishedAt": 1790967839,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Toshiba가 하드 디스크 생산량을 두 배로 늘릴 계획으로 Seagate는 12% 하락, Western Digital은 10% 하락 | TIKR.com 일반 투자 Seagate는 12% 하락, Western Digital은 10% 하락, Toshiba가 하드 디스크 생산량을 두 배로 늘릴 계획 Gian Estrada • 3분 읽기 검토",
        "Western Digital(WDC)은 약 10% 하락했습니다.",
        "Toshiba는 용량 기준으로 하드 드라이브 시장의 10%가 조금 넘는 점유율을 차지하고 있으며 30%를 원합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, 10%, $830 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 12%, 10%, $830 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "50e5c9b1ce0d69a3aed7",
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
      "headline": "AMD's $8.2B World Labs deal signals buy-over-build era for world models",
      "headlineKo": "AMD의 82억 달러 규모의 World Labs 거래는 월드 모델의 구매-오버-빌드 시대를 알립니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77a81e189fc5320c28347b74d6b0f6ca9197b2b4b4f2b7443888b790916d2c5a",
        "publishedAt": 1790967777,
        "collectedAt": 1791211460.834829
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD's $8.2B World Labs deal signals buy-over-build era for world models",
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
      "id": "a7258059e73a96c1ffcd",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Broadcom Bets $102 Billion on Anthropic Chips",
      "headlineKo": "Broadcom, Anthropic 칩에 1,020억 달러 투자",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1cd84cf9278582a8a2d552adc88cb27bcd91e73379b8bff844d4a48fabd846ea",
        "publishedAt": 1790966157,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom, Anthropic 칩에 1,020억 달러 투자 | TIKR.com 일반 투자 Broadcom, 인류 칩에 1,020억 달러 투자 David Beren • 5분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 10월 2일 mmac72 from Getty Images Signature,",
        "이로 인해 Broadcom은 Anthropic의 칩 공급업체이자 대출업체가 되었으며 이제 성장의 대부분은 단일 고객에게 달려 있습니다.",
        "600억 달러의 신규 부채만으로도 2025년 회계연도 말에 Broadcom이 감당한 총 부채 665억 달러의 거의 두 배에 달하는 규모입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $102 Billion, $60 billion, $42 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $102 Billion, $60 billion, $42 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cc77912a54736ff36679",
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
      "headline": "What Are Amazon Investors Paying for AWS Without Investment Gains?",
      "headlineKo": "Amazon 투자자는 투자 이익 없이 AWS에 무엇을 지불하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=766e0167896a74df11dbf31c39934a184506de85778df3fea96aa251a38368a9",
        "publishedAt": 1790965614,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 AMZN의 사업과 관련된 'What Are Amazon Investors Paying for AWS Without Investment Gains?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "3b83dcdcf69f5426d04d",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Wants to Build 10 Million Robots a Year. Here Are the Supply Chain That Needs to Exist First and the Stocks Set to Benefit.",
      "headlineKo": "Tesla는 연간 천만 대의 로봇을 만들고 싶어합니다. 먼저 존재해야 하는 공급망과 이익을 얻을 수 있는 주식은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8721b2a03da3e0765956df0a6ef2db3733deed7798ee9e8b0228b96a32da984",
        "publishedAt": 1790965500,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 연간 천만 대의 로봇을 만들고 싶어합니다. 먼저 존재해야 하는 공급망과 이익을 얻을 수 있는 주식은 다음과 같습니다."
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "be073e69c886b8afc328",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "QQQ",
        "SPY",
        "STX",
        "VST",
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
      "headline": "STX, WDC Stocks Sink On Toshiba’s Reported Plan To Double AI Hard-Disk Capacity: Analysts Call The Drop Overdone",
      "headlineKo": "AI 하드 디스크 용량을 두 배로 늘리려는 Toshiba의 보고된 계획에 STX, WDC 주가 하락: 분석가들은 이러한 하락이 지나쳤다고 부릅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9d14f56b755bc9f3d62548d43c2b1acd40a5f3372f88e09653336448b35f0a4",
        "publishedAt": 1790965375,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "STX, WDC 주가는 AI 하드 디스크 용량을 두 배로 늘리려는 Toshiba의 보고된 계획에 하락했습니다: 분석가들은 AI 에이전트의 하락을 과장했다고 부릅니다. 추세 뉴스 수익 전체 DIA 0.49% SPY 0.67% QQQ 0.93% 추세 GME 4.60% VST 2.58% IBRX 11.42% CBRS 0.69% MXL 14.74",
        "AI 하드 디스크 용량을 두 배로 늘리려는 Toshiba의 보고된 계획에 STX, WDC 주가 하락: 분석가들은 하락이 지나쳤다고 주장 Morgan Stanley, Rosenblatt 및 Citi는 STX 및 WDC 주식에 대해 긍정적인 평가를 유지하면서 Toshiba의 계획이 성공할 가능성이 낮다고 주장했습니다.",
        "2018년 7월 28일, 캘리포니아주 프리몬트 실리콘 밸리에 위치한 하드 드라이브 및 컴퓨터 하드웨어 제조업체 Seagate 본사 정면에 로고로 서명합니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.67%, 0.93% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.67%, 0.93% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "2d0e78f2f89b04be7bd4",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Eaton Analyst Sees Strong Orders, Raises 2027 EPS Forecast",
      "headlineKo": "Eaton 분석가는 강력한 주문을 확인하고 2027 EPS 예측을 높였습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=63e179fb3ec7742f19884774cd59ed1b52b9da1ead9319078650224769f9f7df",
        "publishedAt": 1790963747,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Eaton Analyst Sees Strong Orders, Raises 2027 EPS Forecast",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ETN에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "016d310e5fb389cc2172",
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
      "headline": "How Sustainable Is Oracle’s Cash Flow Without Customer Prepayments?",
      "headlineKo": "고객 선불 없이 Oracle의 현금 흐름은 얼마나 지속 가능합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=85f6cbd58bde0206d4ec5d84249fff66a58de4168b813902ea61b466fbfeae0c",
        "publishedAt": 1790963665,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 ORCL의 사업과 관련된 'How Sustainable Is Oracle’s Cash Flow Without Customer Prepayments?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9efcfe9e904def7cdfe3",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "STX",
      "relatedTickers": [
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
      "headline": "Seagate (STX) Is Selling Into a Shortage. What Happens When It Ends?",
      "headlineKo": "Seagate(STX)가 품귀현상을 겪고 있습니다. 끝나면 어떻게 되나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a7a11877894fd4ea7f2cb6b25ae870733162dff507c2c07ab941a28c999d5f42",
        "publishedAt": 1790963578,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate (STX) Is Selling Into a Shortage. What Happens When It Ends?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "9b7ed718455bd86b6b00",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Can Microsoft Keep Growing Its Dividend Through the AI Spending Cycle?",
      "headlineKo": "Microsoft는 AI 지출 주기를 통해 배당금을 계속 늘릴 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3bbdeb962691624ceae853f1c817ddd9c824ef456135c3c943ea6dbab03231f0",
        "publishedAt": 1790963281,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Can Microsoft Keep Growing Its Dividend Through the AI Spending Cycle?",
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
      "id": "9fac4fcf84309c051f01",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AAPL",
        "GOOGL",
        "MU",
        "QCOM",
        "WDC"
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
      "expectedHorizon": "단기 비용 부담 / 출시 후 수요 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google raises Pixel 10a price by $100 amid memory cost surge",
      "headlineKo": "구글, 메모리 비용 급등으로 픽셀 10a 가격 100달러 인상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b4eb397e4971ee9bceeca0d26afe033a4300a091385d3af1789b5ebc321f8e6",
        "publishedAt": 1790963275,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: $100, $599, $599,, $499,, $499., $699., $849, €649.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Google raises Pixel 10a price by $100 amid memory cost surge' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "462ef1e215835729320b",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Forget Microsoft: You don’t need Big Tech to invest in the AI data center boom",
      "headlineKo": "Microsoft는 잊어라: AI 데이터 센터 붐에 투자하기 위해 거대 기술이 필요하지 않습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04b2b92c8c06708dc3774ab041f6df6ef6d2f8fb077e7053349ec87c076b696c",
        "publishedAt": 1790962380,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft는 잊어라: AI 데이터 센터 붐에 투자하기 위해 거대 기술이 필요하지 않습니다."
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
      "id": "e69620b2bcc7fdafd7c3",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR",
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
      "headline": "Better AI Stock: SpaceX or Palantir?",
      "headlineKo": "더 나은 AI 주식: SpaceX 또는 Palantir?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=52398afaa87c55f77ac363fbed54cef8a1debf7a2b7f123344e3d3e084f7f36b",
        "publishedAt": 1790961600,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "더 나은 AI 주식: SpaceX 또는 Palantir?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능(AI) 투자는 현재 주식시장에서 가장 인기 있는 테마입니다.",
        "이유를 이해하는 것은 쉽습니다. 여러 회사가 놀라운 속도로 성장하고 있으며 미래의 주요 기술 기업이 될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.68%, 7.36%, 0.68 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.68%, 7.36%, 0.68 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8b6949239f8d8bf45840",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "MRVL",
        "QQQ",
        "SNDK",
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
      "headline": "Broadcom, Marvell, and SanDisk Are Quietly Building Toward a Massive Bull Run",
      "headlineKo": "Broadcom, Marvell 및 SanDisk는 대규모 강세장을 향해 조용히 성장하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a70076e460996ca1116fb22f700b406238c0f43866163af0410a2892857b8253",
        "publishedAt": 1790959535,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom, Marvell 및 SanDisk는 대규모 강세장을 향해 조용히 성장하고 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,729.20 +0.64% Dow Jones 51,232.00 +0.46% Nasdaq 100 30,827.70 +0.91% Russell 2000 2,836.24 +0.78% S&P 500 7,729.20 +0.64% 다우존스 51,232.00 +0.46% 나스닥 100 30,827.70 +0.91% 러셀 2000 2,836.24 +0.",
        "2027년까지 이 세 가지 모두가 기록적인 영역에 더욱 진출할 수 있는지 여부는 다음과 같습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3.22%, 221%, $16.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.22%, 221%, $16.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "889147b867ea0f1410ca",
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
      "headline": "Amazon vows $1 bn for data center towns, decries 'myths'",
      "headlineKo": "아마존, 데이터센터 타운에 10억 달러 투자 약속…'신화' 비난",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=913855b424972c1fb1fb65e72757b288b1c8aa826e1d7a998390d87f61c32373",
        "publishedAt": 1790959407,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존, 데이터센터 타운에 10억 달러 투자 약속…'신화' 비난"
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
      "id": "b24df1aed85dab4abfe3",
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
      "headline": "If You Invest $10,000 in AMD Today, Here’s What It Could Be Worth by 2030",
      "headlineKo": "지금 AMD에 10,000달러를 투자한다면 2030년까지의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec2cfaeaf725b9907870fd3d232e71b92c36bcdff69e4ca75c3ba31173954db1",
        "publishedAt": 1790958620,
        "collectedAt": 1791211460.834829
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금 AMD에 10,000달러를 투자한다면 2030년까지의 가치는 다음과 같습니다 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,729.20 +0.64% Dow Jones 51,232.00 +0.46% Nasdaq 100 30,827.70 +0.91% Russell 2000 2,836.24 +0.78% S&P 500 7,729.20 +0.64% 다우존스 51,232.00 +0.46% 나스닥 100 30,827.70 +0.91% 러셀 2000 2,836.24 +0.",
        "𝕏 f ⧉ © Advanced Micro Devices 주당 613.32달러로 AMD(NASDAQ:AMD | AMD Price Prediction)의 지분 10,000달러로 시장에서 가장 빠르게 성장하는 AI 칩 프랜차이즈 중 하나를 인수합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $613.32, 284.52% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $613.32, 284.52% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "af6425171f6659bcec20",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
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
      "headline": "AMD Climbs 3% as Chip Stocks Extend Their Run; Arm Jumps 8%, NVIDIA Rises 2%",
      "headlineKo": "AMD는 칩 주식이 상승세를 이어가면서 3% 상승했습니다. Arm 점프 8%, NVIDIA 상승 2%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73b493ec511e22341068073b5e1770e7afca1b286fb436d4610f7e22d7eafd29",
        "publishedAt": 1790956051,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD는 칩 주식이 상승세를 이어가면서 3% 상승했습니다. Arm은 8% 상승, NVIDIA는 2% 상승 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,728.80 +0.64% Dow Jones 51,146.00 +0.29% Nasdaq 100 30,856.20 +1.00% Russell 2000 2,833.14 +0.67% S&P 500 7,728.80 +0.64% 다우존스 51,146.00 +0.29% 나스닥 100 30,856.20 +1.00% 러셀 2000 2,833.14 +0.",
        "그 급등이 진정한 모멘텀을 반영하는지 아니면 이미 완벽하게 가격이 책정된 랠리를 반영하는지… 작성자: David Moadel 게시일: 2026년 10월 2일 오전 11:47(ET) · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, 8%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, 8%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "565a01e3f7f0155b5eba",
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
      "headline": "AI Debt Is a ‘Brewing Crisis,’ Ed Zitron Warns as Amazon, CoreWeave Turn to Complex Financing",
      "headlineKo": "AI 부채는 '양조 위기'입니다. Ed Zitron은 Amazon, CoreWeave가 복잡한 금융으로 전환하자 경고합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=abe298cee1ccd32322482e33bab5358a8aba8093d9f1c558cfef3cf5a55bda3a",
        "publishedAt": 1790955935,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 0.66%, 1.04%, 0.56%, 0.30%, 0.71%, 0.04%, $8 billion, $88 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'AI Debt Is a ‘Brewing Crisis,’ Ed Zitron Warns as Amazon, CoreWeave Turn to Complex Financing' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f6f7a85ca6fdcf937de1",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM",
        "PLTR",
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
      "headline": "Salesforce vs. Palantir: Which AI Software Stock Is a Better Buy in 2026?",
      "headlineKo": "Salesforce vs. Palantir: 2026년에는 어느 AI 소프트웨어 주식이 더 나은 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca5f1498dd9e6e0fe41ea247f0824a8d131e4a55ba16176bcb9837a3c7a2446b",
        "publishedAt": 1790955901,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir: 2026년에는 어느 AI 소프트웨어 주식이 더 나은 매수인가?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 소프트웨어 시장이 인공지능(AI) 기반 제품으로 전환함에 따라 투자자들은 엔터프라이즈 소프트웨어 이름을 비교하고 있습니다.",
        "이 비교에서는 어떤 회사가 가치와 성장 사이에서 더 나은 균형을 제공하는지 살펴봅니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $234.69, 0.84 %, $2.00 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $234.69, 0.84 %, $2.00 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "c7e22b5ee1cb0478530b",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nike Slides on Job Cuts; Broadcom Gathers AI Chip Funding | Stock Movers",
      "headlineKo": "일자리 삭감에 대한 Nike Slides; Broadcom, AI 칩 자금 조달 | 주식 발동기",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00786b6e877b7d7f5092d039f1903e8baad56d5a1b410c7d56f2a7efd032699e",
        "publishedAt": 1790955704,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 AVGO의 사업과 관련된 'Nike Slides on Job Cuts; Broadcom Gathers AI Chip Funding | Stock Movers' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "42c919f32289af652eae",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Is Palantir’s Cash Flow Keeping Ahead of Share Dilution?",
      "headlineKo": "Palantir의 현금 흐름이 주식 희석화보다 앞서 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2b619be61a40e4cac1439728b7c3f402de43760fabc167f3f3eb8b0dd6074aa4",
        "publishedAt": 1790955347,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Is Palantir’s Cash Flow Keeping Ahead of Share Dilution?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "403f904bbe24f8384648",
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
      "headline": "Jefferies Sees Signs of Softer iPhone 18 Demand in Resale Pricing",
      "headlineKo": "Jefferies, 재판매 가격에서 iPhone 18 수요가 완화될 조짐 확인",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe7b2ad3343b1c1a374ac1dd74db72715872613074cad8ca4572084b5a3f5e87",
        "publishedAt": 1790955300,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 8%, $1,049, $400, $500,, $341.07., $104 Billion, 9%.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Jefferies Sees Signs of Softer iPhone 18 Demand in Resale Pricing' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a03ad9c455a26e496a51",
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
      "headline": "Plan to Shop Amazon Prime Big Deal Days? Read These 6 Tips First to Save Money",
      "headlineKo": "Amazon Prime Big Deal Days 쇼핑을 계획 중이신가요? 돈을 절약하려면 먼저 다음 6가지 팁을 읽어보세요",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f6ffa57fe72d35c223d4fbdf1f270d5b4313b09a7739e5b08d59e692e29420bb",
        "publishedAt": 1790954727,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Plan to Shop Amazon Prime Big Deal Days? Read These 6 Tips First to Save Money",
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
      "id": "ee0213893f6c9dad1e3e",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "AVGO",
        "SPY",
        "TSM"
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
      "headline": "Broadcom vs. Taiwan Semiconductor Manufacturing: Which Chip Stock Is a Better Buy in 2026?",
      "headlineKo": "Broadcom 대 Taiwan Semiconductor Manufacturing: 2026년에는 어떤 칩 주식을 구매하는 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1cabc81d1a5b21809cde0f24043052a6e40eb0f2cce7f8724115a66f7dc77786",
        "publishedAt": 1790954676,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만 반도체 제조: 2026년에는 어떤 칩 주식을 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Broadcom(AVGO +3.35%)과 Taiwan Semiconductor Manufacturing(TSM +2.96%) 간의 더 나은 투자를 결정하려면 w가 필요합니다.",
        "Broadcom은 중요한 연결 칩과 엔터프라이즈 소프트웨어를 제공하며 종종 고부가가치 장기 계약의 혜택을 받습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $355.14, 3.35 %, $11.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $355.14, 3.35 %, $11.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4372edbbbc8dece6a26d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "LRCX",
      "relatedTickers": [
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Lam Research: This Rally Has Legs (Earnings Preview)",
      "headlineKo": "Lam Research: 이번 랠리는 유효합니다(수익 미리보기)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=671cd27a3c56758f631b5b37cc4bbdcde20aad7e6e997e3035b4405771f0b4b7",
        "publishedAt": 1790954576,
        "collectedAt": 1791211460.834829
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research: This Rally Has Legs (Earnings Preview)",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LRCX에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "fb9eaffaf3048fc83767",
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
      "headline": "Palantir Stock Rose 60% in Q3. Here’s Why It Still Trades at Roughly Half Its Year-Start Earnings Multiple",
      "headlineKo": "Palantir 주식은 3분기에 60% 상승했습니다. 연초 수익 배수의 약 절반에 여전히 거래되는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4018c7ee43e4bf9a8e5823e590adc9e99942026984f6eb7092dea9344cd5e975",
        "publishedAt": 1790954286,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 주식은 3분기에 60% 상승했습니다. 연초 수익 배수의 약 절반에 여전히 거래되는 이유는 다음과 같습니다."
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
      "id": "413e80e265c154b77a86",
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
      "headline": "How Much Upside Is Left In Apple Stock?",
      "headlineKo": "Apple 주식에는 얼마나 많은 상승 여력이 남아 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5459db5b629d5ae71b87e023f4fb961c62b02aa9b31d68cb4b7107c823814000",
        "publishedAt": 1790954178,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 17.1%, 5.4%, 12.1%, $466.8 billion, $657.7 billion, 27.6%, 27.0%, $128.9 billion.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'How Much Upside Is Left In Apple Stock?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d60804ab03c2e89b7099",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon Will Raise Most GPU Reservation Prices 15% or More on October 7. Here’s Where the Stock Could Go by 2030",
      "headlineKo": "Amazon은 10월 7일에 대부분의 GPU 예약 가격을 15% 이상 인상할 예정입니다. 2030년까지 주가가 오를 수 있는 곳은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f997dcea7b50484937ff564e2422468e7c213bcc12128b581824bd51558b79c1",
        "publishedAt": 1790953529,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon은 10월 7일에 대부분의 GPU 예약 가격을 15% 이상 인상할 예정입니다.",
        "2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다 | TIKR.com General Investing Amazon은 10월 7일 대부분의 GPU 예약 가격을 15% 이상 인상할 예정입니다.",
        "2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다. Wiltone Asuncion • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 2일 @Preis_King from pixabay via Canva, @vanitjan via Canva Amazon Stock 주요 통계 현재 가격: $248.23 Target Pr"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 15%, $248.23, $597 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 15%, $248.23, $597 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "de931fecebd7687112e3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Modine Advances Pure-Play Transformation, Sees Revenue Upside, Oppenheimer Says",
      "headlineKo": "Oppenheimer는 Modine이 순수 플레이 혁신을 발전시키고 수익 증대를 기대한다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22c0a954f375d5fd2c8bfcea890cfb178fdba28afc484dab6b74e8579b62de42",
        "publishedAt": 1790953319,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Modine Advances Pure-Play Transformation, Sees Revenue Upside, Oppenheimer Says",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MOD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MOD에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "3a495cb3ff560c001aa5",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Outsized Earnings and Guidance Send Arista Networks Shares Upward",
      "headlineKo": "대규모 수익 및 가이던스로 Arista Networks 주가 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b4711e4dd524af9b3ffa97ffb9b9eb213d6b813b3eb2506e4e971a1588cf008a",
        "publishedAt": 1790953067,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Outsized Earnings and Guidance Send Arista Networks Shares Upward",
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
      "id": "383f3e94372ab8a930b4",
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
      "headline": "Amazon Prime customers could get $200 refunds in expanded FTC deal.",
      "headlineKo": "Amazon Prime 고객은 확장된 FTC 거래에서 $200 환불을 받을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b79280fdf3817b5275da32efc52d6735c1722fee77aeec56b92bc04faec9ea33",
        "publishedAt": 1790952283,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon Prime 고객은 확장된 FTC 거래에서 $200 환불을 받을 수 있습니다."
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
      "id": "430a9bae8e9a1aecd4f3",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "MU",
        "NVDA",
        "ORCL",
        "TSM"
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Taiwan Semiconductor Stock Rises on Broadcom's $60 Billion Chip Deal",
      "headlineKo": "Broadcom의 600억 달러 칩 거래로 대만 반도체 주가 상승",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0302b93a7d7762aee18354bf557b76bc2fb7e206de714e218fe1662a51ac000a",
        "publishedAt": 1790949991,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $60 Billion, 0.03%, 0.00%, 0.14%, 0.12%, 0.10%, 0.06%, $60 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 TSM의 사업과 관련된 'Taiwan Semiconductor Stock Rises on Broadcom's $60 Billion Chip Deal' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
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
      "id": "a83f149bbc0e9c66b299",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Your Coherent Stock Thesis Has One Loose End",
      "headlineKo": "귀하의 일관된 주식 논제는 한쪽 끝이 느슨합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bead23f1c0164a704a5ed6a931d29e8ca651f63c7e66e4efafcdd2ab9d3fcca1",
        "publishedAt": 1790949856,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "귀하의 일관된 주식 논제에는 하나의 느슨한 끝이 있습니다 | Trefis 귀하의 일관된 주식 논문은 하나의 느슨한 결말을 가지고 있습니다 2026년 10월 2일 · by Trefis Team COHR YTD +82.6% SPY YTD +13.5% QQQ YTD +22.3% COHR 분석 → Coherent(COHR)가 AI 데이터 센터로 전환할 수 있음",
        "수요는 논문의 확정된 부분입니다.",
        "경영진은 회사가 2027년 말까지 예약을 완료했다고 밝혔습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 82.6%, 13.5%, 22.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 82.6%, 13.5%, 22.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "5c5535c60fdbeef6746d",
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
      "headline": "OpenAI’s Future IPO Keeps Me Buying Microsoft",
      "headlineKo": "OpenAI의 향후 IPO로 인해 Microsoft를 계속 구매하게 되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47ae2b80d403110e44e6036990235f72616e04c671dd37caf5a2da68448ca91e",
        "publishedAt": 1790948708,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "OpenAI의 향후 IPO로 인해 Microsoft를 계속 구매하게 되었습니다. - 연중무휴 월스트리트",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,722.00 +0.55% Dow Jones 51,128.00 +0.26% Nasdaq 100 30,837.80 +0.94% Russell 2000 2,837.59 +0.82% S&P 500 7,722.00 +0.55% 다우존스 51,128.00 +0.26% 나스닥 100 30,837.80 +0.94% 러셀 2000 2,837.59 +0.",
        "작성자: Alex Sirois 2026년 10월 2일 오전 9:45(ET) 게시 · 3분 읽기 𝕏 f ⧉ 상승하는 주식 시장 차트에서 로봇 팔과 인간의 손이 상호 작용하며, 탐구된 바와 같이 AI가 금융 투자 및 시장 동향에 미치는 영향력이 커지고 있음을 상징합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 27%, $135 billion, $1.2 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 27%, $135 billion, $1.2 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "63bc6c0128a0297c6f18",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MOD",
      "relatedTickers": [
        "MOD"
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
      "headline": "Oppenheimer Maintains Outperform on Modine Manufacturing, Lowers Price Target to $260",
      "headlineKo": "Oppenheimer는 Modine 제조 부문에서 우수한 성과를 유지하고 목표 가격을 260달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0614a760982bd0f1b5b6489945e57fe51e092ad9524cc09ff096fd8de8b6cf0a",
        "publishedAt": 1790948453,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oppenheimer Maintains Outperform on Modine Manufacturing, Lowers Price Target to $260",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "MOD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MOD에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "b00f9a16bc5fd769b058",
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
      "headline": "Micron’s Highest Price Target on Wall Street Is Now $2,100",
      "headlineKo": "월스트리트에서 마이크론의 최고 목표 가격은 이제 2,100달러입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4537dfd69a11f576418b9aed6b2430801291de4547c507b84db7eaaf1f8691dd",
        "publishedAt": 1790948444,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트에서 마이크론의 최고 목표 가격은 이제 $2,100 - 연중무휴 월스트리트입니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,722.00 +0.55% Dow Jones 51,128.00 +0.26% Nasdaq 100 30,837.80 +0.94% Russell 2000 2,837.59 +0.82% S&P 500 7,722.00 +0.55% 다우존스 51,128.00 +0.26% 나스닥 100 30,837.80 +0.94% 러셀 2000 2,837.59 +0.",
        "작성자: Omor Ibne Ehsan 2026년 10월 2일 오전 9시 40분(ET) 게시 · 3분 읽기 𝕏 f ⧉ 메모리 모듈에 대한 상승 추세의 빨간색 화살표는 기술 분야에서 Micron Technology(MU)에 대한 가격 목표 급증과 긍정적인 전망을 시각적으로 나타냅니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $2,100, $2,000,, $1,900 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2,100, $2,000,, $1,900 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4a3349b2aaa85aabcbe3",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL"
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet Launches Homegrown AI Tensor Processing Chips Into Orbit On SpaceX Rocket",
      "headlineKo": "Alphabet, 자체 개발한 AI 텐서 처리 칩을 SpaceX 로켓의 궤도에 발사",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae125f8d8c8fbdbb6b02c12bf020507689da8cb024b93a40880a825390d09a17",
        "publishedAt": 1790948233,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet, 자체 개발한 AI 텐서 처리 칩을 SpaceX 로켓 궤도에 발사 | TIKR.com General Investing Alphabet, SpaceX 로켓 Aditya Raghunath의 궤도에 자체 개발한 AI 텐서 처리 칩 출시 • 4분 읽기 검토자:",
        "1: $148 52주 최고가: $226 $SPCX 주가 목표: $226 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "Alphabet(GOOGL)은 목요일 SpaceX(SPCX) Falcon 9 로켓을 타고 AI 칩을 궤도에 발사했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, $148, $226 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, $148, $226 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2bb63ecdda37fd160979",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Q3 2026 vehicle deliveries beat Wall Street estimates",
      "headlineKo": "Tesla 2026년 3분기 차량 인도가 월스트리트 예상치를 상회했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5369df251294084a6ea0d63306357901494dc3971cbfc1cb148dc7f320a87d75",
        "publishedAt": 1790948044,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla 2026년 3분기 차량 인도는 월스트리트 추정치를 상회했습니다. 자동차 Tesla는 3분기에 486,532개의 인도를 기록했습니다. 이는 월스트리트의 추정치를 제치고 분석가들이 약 461,100개의 인도를 예상했지만 EV 제조업체의 총액은 t를 훨씬 웃도는 수치입니다.",
        "회사는 또한 이 기간 동안 464,391대의 차량을 생산했으며 13.7GWh의 에너지 저장 제품을 배치했다고 밝혔습니다.",
        "CNBC에 따르면 StreetAccount가 추적한 분석가 합의에 따르면 예상 배송 건수는 약 461,100건이었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 98%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 98%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "381fae405abfb5ee0428",
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
      "headline": "Rivian Jumps 4% After Delivering 19,248 Vehicles and Reaffirming Full-Year Guidance; Tesla Rises 2%",
      "headlineKo": "Rivian은 19,248대의 차량을 인도하고 연간 지침을 재확인한 후 4% 상승합니다. 테슬라 2% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd5688c71c35820994ee22fcb288e3c677c0432c41e153bf03e41e53c52944bb",
        "publishedAt": 1790947849,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Rivian은 19,248대의 차량을 인도하고 연간 지침을 재확인한 후 4% 상승합니다. 테슬라 2% 상승"
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
      "id": "cdb0583be6deaed84a1d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
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
      "headline": "EXCLUSIVE: Micron’s NAND Revenue Surged 526%: Why AI Data Centers Need So Much Storage",
      "headlineKo": "독점: Micron의 NAND 매출 526% 급증: AI 데이터 센터에 그렇게 많은 스토리지가 필요한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ed79bb16ef78b16955b2d6a4ce2a5cd6ce9b03534068099698840c1c1f9bcd0",
        "publishedAt": 1790947736,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron NAND 매출은 AI 스토리지 수요로 526% 급증 - Micron Technology (NASDAQ:MU) - Benzinga SPY 770.90 +0.90% QQQ 751.83 +1.32% BTC/USD 86,940.70 +2.46% DIA 512.88 +0.84% GLD 384.20 +0.38% TLT 78.08 +0.48% US 로그인 내 계정 등록",
        "(NASDAQ: MU)는 AI 데이터 센터가 GPU에서 사용하는 고속 메모리와 함께 더 많은 스토리지를 요구함에 따라 회계연도 4분기에 NAND 매출이 전년 동기 대비 526% 급증한 141억 달러를 기록했습니다.",
        "이러한 급증은 AI 시스템이 현재 저장하고 검색하는 데 필요한 정보가 얼마나 더 많은지를 반영한다고 Counterpoint Research의 연구 책임자인 MS Hwang이 Benzinga에 말했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 526%, 0.90%, 1.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 526%, 0.90%, 1.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b6d37edd07f93a2607bd",
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
      "headline": "What Needs To Be True To Buy Coherent Stock Now?",
      "headlineKo": "지금 코히런트 주식을 구매하려면 무엇이 진실이어야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d34451c97b4198aecadba904305f0519140fdc87caa0ee01adc989df39b4f5b",
        "publishedAt": 1790947452,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금 코히런트 주식을 구매하려면 무엇이 진실이어야 합니까?",
        "| Trefis 지금 Coherent Stock을 구매하려면 무엇이 진실되어야 합니까?",
        "2026년 10월 2일 · Trefis Team COHR YTD +82.6% SPY YTD +13.5% QQQ YTD +22.3% COHR 분석 → Coherent(COHR)는 AI 데이터 센터용 광트랜시버 및 기타 부품을 만들고 고객은 몇 년 전부터 주문하고 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 82.6%, 13.5%, 22.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 82.6%, 13.5%, 22.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d001966a9e7705adab2c",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "AAPL",
        "AMZN",
        "QCOM"
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
      "headline": "Qualcomm Is Losing Apple and Adding Amazon. Is the Stock Ready?",
      "headlineKo": "퀄컴은 애플을 잃고 아마존을 추가하고 있다. 재고가 준비되어 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c45d7eacf35cf50cb326056e2c2f659e5c5ae4b85c4b2bab92fb91b362cf355",
        "publishedAt": 1790945931,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "퀄컴은 애플을 잃고 아마존을 추가하고 있다.",
        "| TIKR.com 일반 투자 Qualcomm은 Apple을 잃고 Amazon을 추가하고 있습니다.",
        "Gian Estrada • 읽기 4분 검토자: David Hanson 최종 업데이트: 2026년 10월 2일 Canva를 통해 Getty Images에서 Aaron Hawkins와 wooyaa 주요 내용 Amazon의 9월"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $60 billion, 60%, $10.20 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $60 billion, 60%, $10.20 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "40b67c8308f5886f650b",
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
      "headline": "Palantir’s Growth Could Justify a Much Higher Stock Price",
      "headlineKo": "Palantir의 성장은 훨씬 더 높은 주가를 정당화할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8138498d3a228c281ed608b4d41ace9303fffc2c057ccbb8c769ab202d8354f1",
        "publishedAt": 1790945123,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir의 성장은 훨씬 더 높은 주가를 정당화할 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,722.00 +0.55% Dow Jones 51,128.00 +0.26% Nasdaq 100 30,837.80 +0.94% Russell 2000 2,837.59 +0.82% S&P 500 7,722.00 +0.55% 다우존스 51,128.00 +0.26% 나스닥 100 30,837.80 +0.94% 러셀 2000 2,837.59 +0.",
        "그 격차가 기회인지 경고인지는… 작성자 Vandita Jadeja 2026년 10월 2일 오전 8시 45분(ET) 게시 · 3분 읽기 가격 목표 데스크."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $202.14, $188.77,, 7.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $202.14, $188.77,, 7.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6d34d2872ecac5a74198",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "YouTube chasing bulk live sports rights for Premium service",
      "headlineKo": "프리미엄 서비스를 위해 스포츠 생방송 대량 권리를 추구하는 YouTube",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=26d2b6f73176beaa382db72748d9a1cd47149ddf313c717fd228fe47cefbe40f",
        "publishedAt": 1790944299,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "YouTube는 프리미엄 서비스를 위해 대량 라이브 스포츠 권리를 추구합니다. 비즈니스 뉴스 YouTube는 프리미엄 서비스를 위해 대량 라이브 스포츠 권리 거래를 추구하고 있습니다. Google 소유 플랫폼은 모든 지역 GA와 같은 명확한 소비자 후크에 연결된 패키지를 원합니다.",
        "CNBC에 따르면 프리미엄 구독 페이월 뒤에 게임을 두는 방향으로 리그를 운영하고 있습니다.",
        "Google $GOOGL 소유 플랫폼은 게임을 대량 구매하는 데 관심이 있지만 팀의 모든 로컬 게임이나 특정 토너먼트의 모든 게임과 같이 게임을 연결하는 명확한 소비자 제안이 있는 경우에만 가능하다고 CNBC가 보도했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $15.99, $1 billion, $13.99 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $15.99, $1 billion, $13.99 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7db500f9d5fcc874e200",
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
      "headline": "Correction: Top Midday Stories: Micron Shares Fall Despite Strong Earnings, Guidance; Broadcom to Lend Anthropic $42 Billion for Infrastructure Spending",
      "headlineKo": "정정: 주요 정오 기사: 강력한 수익, 지침에도 불구하고 Micron 주가 하락; Broadcom, 인프라 지출을 위해 인류에게 420억 달러 대출",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95ffa93fa911e6705859ccbcbefc3050b33ff77314171d8a8239c21077836479",
        "publishedAt": 1790943802,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 AVGO의 사업과 관련된 'Correction: Top Midday Stories: Micron Shares Fall Despite Strong Earnings, Guidance; Broadcom to Lend Anthropic $42 Billion for Infrastructure Spending' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "79ec7f6c493e8e437885",
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
      "headline": "Jim Cramer urges buying Apple stock before foldable iPhone launch",
      "headlineKo": "짐 크레이머, 폴더블 아이폰 출시 전에 애플 주식 매입 촉구",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1281cd16ffa72e2dfe84cbd522bcee206aa6a7d016e93e16e0316bc95bb08520",
        "publishedAt": 1790943360,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 1%, $329, 4%, $345.34, $355, $5, $1,999., $1,199,.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Jim Cramer urges buying Apple stock before foldable iPhone launch' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "19021e6a58681772e813",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "AMZN",
        "CEG"
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
      "headline": "Constellation Energy Stock Climbs Following 20-Year Nuclear Power Deal With Amazon",
      "headlineKo": "컨스텔레이션 에너지(Constellation Energy) 주가는 아마존과의 20년 원자력 계약 이후 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab3769d82a562727abbaf453060254287d890701255aeea23595f5a7db0dceb8",
        "publishedAt": 1790943280,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "컨스텔레이션 에너지(Constellation Energy) 주가는 아마존과의 20년 원자력 계약 이후 상승"
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
          "ticker": "CEG",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7814bc12b5d564e43e8a",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "AMZN",
        "CEG"
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
      "headline": "Constellation Energy Stock Climbs Following 20-Year Nuclear Power Deal With Amazon",
      "headlineKo": "컨스텔레이션 에너지(Constellation Energy) 주가는 아마존과의 20년 원자력 계약 이후 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab3769d82a562727abbaf453060254287d890701255aeea23595f5a7db0dceb8",
        "publishedAt": 1790943280,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "컨스텔레이션 에너지(Constellation Energy) 주가는 Amazon과의 20년 원자력 계약 이후 상승 | TIKR.com General Investing Constellation Energy Stock은 Amazon Aditya Raghunath와의 20년 원자력 계약 이후 상승 • 4분 읽기 검토자::",
        "1: $259 52주 최고가: $413 $CEG 주가 목표: $343 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "Constellation Energy(CEG)와 Amazon(AMZN)은 수요일에 장기 전력 계약을 발표했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 28%, $259, $413 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 28%, $259, $413 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "336e627f67bd847501a6",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Broadcom Is Lending One of Its Biggest Customers $42 Billion to Buy Its Chips",
      "headlineKo": "Broadcom은 칩 구매를 위해 최대 고객 중 한 명에게 420억 달러를 대출하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8ff4600b010d81379d8072e7e7ae7e35e92fb6b5d09edd133800157706b758a",
        "publishedAt": 1790943157,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom은 칩 구매를 위해 최대 고객 중 한 명에게 420억 달러를 대출하고 있습니다. - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,722.00 +0.55% Dow Jones 51,128.00 +0.26% Nasdaq 100 30,837.80 +0.94% Russell 2000 2,837.59 +0.82% S&P 500 7,722.00 +0.55% 다우존스 51,128.00 +0.26% 나스닥 100 30,837.80 +0.94% 러셀 2000 2,837.59 +0.",
        "현금을 현금으로 보장된 수익으로 전환하든 아니면 차용인의 돈을 조용히 이동시키든... 작성자: Omor Ibne Ehsan 2026년 10월 2일 게시, 오전 8시 12분(ET) · 3분 읽기 𝕏 f ⧉ 두 비즈니스 리더가 악수를 나누며 주요 전략적 파트너십을 마무리합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $42 Billion, $42 billion, $125.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $42 Billion, $42 billion, $125.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "3874a818fd58f416f12b",
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
      "headline": "Broadcom’s Total Return From 4 Milestones: Avago IPO to the $2 Trillion Club",
      "headlineKo": "4가지 이정표를 통한 Broadcom의 총 수익: Avago IPO에서 $2조 달러 클럽까지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=128fa0632fd7e3e4d81103db078581469600c5353740d8e4a50064a736eb6101",
        "publishedAt": 1790942704,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "4개 이정표에서 Broadcom의 총 수익: Avago IPO에서 $2조 달러 클럽까지 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,722.00 +0.55% Dow Jones 51,128.00 +0.26% Nasdaq 100 30,837.80 +0.94% Russell 2000 2,837.59 +0.82% S&P 500 7,722.00 +0.55% 다우존스 51,128.00 +0.26% 나스닥 100 30,837.80 +0.94% 러셀 2000 2,837.59 +0.",
        "한 항목은 1,000달러를 큰돈으로 만들었고, 다른 항목은 손실로 만들었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $2 Trillion, $1,000, $2 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2 Trillion, $1,000, $2 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c3c4e68c25ea8724d1e9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom Reportedly Lines Up $60B AI Chip Financing As Anthropic Expands Compute",
      "headlineKo": "Broadcom은 Anthropic이 컴퓨팅을 확장함에 따라 600억 달러의 AI 칩 자금 조달을 준비한 것으로 알려졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1639832a9b11776bfc8e5f3d443a02ee8a77fc2c73bdf4831e7ff9d2b1ed1d5d",
        "publishedAt": 1790942696,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom은 Anthropic이 컴퓨팅을 확장함에 따라 600억 달러의 AI 칩 자금 조달을 준비한 것으로 알려졌습니다."
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
      "id": "b2daf91469f52571ca5f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "52 Analysts, Zero Sells: What Microsoft’s Price Target Really Implies",
      "headlineKo": "52명의 분석가, 제로 셀스(Zero Sells): Microsoft의 가격 목표가 실제로 의미하는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78aa44c4ebff2c84c51fcb973d420797ea079b2a25586cd26d4ce5ec66680d83",
        "publishedAt": 1790942417,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "52명의 분석가, 제로 판매: Microsoft의 목표 가격이 실제로 의미하는 것 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,722.00 +0.55% Dow Jones 51,128.00 +0.26% Nasdaq 100 30,837.80 +0.94% Russell 2000 2,837.59 +0.82% S&P 500 7,722.00 +0.55% 다우존스 51,128.00 +0.26% 나스닥 100 30,837.80 +0.94% 러셀 2000 2,837.59 +0.",
        "월스트리트의 확신과 주가 침체 사이의 격차에는 뭔가가 있지 않습니다... 작성자: Vandita Jadeja 2026년 10월 2일 오전 8시(ET) 게시 · 3분 읽기 가격 목표 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $627.63, 22.37%, $512.90. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $627.63, 22.37%, $512.90. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "2ef83647a0d98faafec7",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Piper Sandler Forecasts Google TPU Hardware Revenue to Reach $104 Billion by 2028",
      "headlineKo": "Piper Sandler는 Google TPU 하드웨어 수익이 2028년까지 1,040억 달러에 이를 것으로 예측합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ca65e1082ec80e4b8704c230809ee425443e9a50718ab483b6dbb623e35fe0c",
        "publishedAt": 1790942340,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Piper Sandler는 Google TPU 하드웨어 수익이 2028년까지 1,040억 달러에 이를 것으로 예측합니다."
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
      "id": "d846f9dbf1f2e5bdfa00",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "MU",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Sandisk: Great Long-Term Deal Coverage Balanced By Richer Valuations (Upgrade)",
      "headlineKo": "Sandisk: 더 풍부한 가치 평가로 균형을 이루는 훌륭한 장기 거래 보장(업그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e5a691cb3366d8e147b14462718a7de6fd523d477dbb75761ed8d8d67d89fb1c",
        "publishedAt": 1790942008,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: 더 풍부한 가치 평가(업그레이드)로 균형을 이루는 훌륭한 장기 거래 보장(SNDK) | 알파 찾기 Gary Alexander 34.49K 팔로워 팔로우 요약 Sandisk Corporation 주식은 AI 인프라 속에서 경쟁사를 앞지르며 YTD 600% 이상 급등했습니다.",
        "개선된 장기 거래 적용 범위와 Micron 대비 마진 격차 축소를 반영하여 SNDK에 대한 등급을 중립으로 상향 조정합니다.",
        "SNDK는 여러 NBM 거래를 성사시켜 유리한 가격으로 다년간의 고객 약정을 체결하고 수익 가시성을 높였습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 600% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 600% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6b42964d65017c6fcfd3",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Marvell's Custom AI Silicon Deals With Hyperscalers Could Redefine Its Growth Story",
      "headlineKo": "Marvell의 하이퍼스케일러와의 맞춤형 AI 실리콘 거래로 성장 스토리를 재정의할 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c34e384aef29741842c48ab4579aa3559fb30b3d02e8315cf4151b5e2d9d0a0",
        "publishedAt": 1790940900,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell의 하이퍼스케일러와의 맞춤형 AI 실리콘 거래로 성장 스토리 재정의 가능 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 데이터 센터 붐은 Marvell에게 좋은 일이었습니다.",
        "수익은 지난 몇 년간 가속화되었으며 가장 최근 분기에는 전년 대비 36% 증가했습니다.",
        "이제 Marvell의 최신 맞춤형 칩은 최대 클라우드 빌더와 거래하여 성장 활주로를 확장할 수 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 36%, $18 billion, 1.62% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 36%, $18 billion, 1.62% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f56198645364c0475539",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "SPY",
      "relatedTickers": [
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
      "headline": "IWM Has Trailed the S&P 500 for a Decade While Carrying More Risk: The Small-Cap Premium That Never Fully Arrived",
      "headlineKo": "IWM은 더 많은 위험을 안고 10년 동안 S&P 500을 따라잡았습니다: 결코 완전히 도달하지 못한 소형주 프리미엄",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2d33aec839806e08d99da5e47d8a2a098ca8a7c89c248ecaaa719c2b91dbb3c",
        "publishedAt": 1790940797,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "IWM은 더 많은 위험을 안고 10년 동안 S&P 500을 따라잡았습니다: 결코 완전히 도달하지 못한 소형주 프리미엄 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,729.20 +0.64% Dow Jones 51,232.00 +0.46% Nasdaq 100 30,827.70 +0.91% Russell 2000 2,836.24 +0.78% S&P 500 7,729.20 +0.64% 다우존스 51,232.00 +0.46% 나스닥 100 30,827.70 +0.91% 러셀 2000 2,836.24 +0.",
        "그 거래는 지난 10년 동안 실제로 무슨 일이 일어났는지 자세히 살펴볼 가치가 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.64%, 0.46%, 0.91% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.64%, 0.46%, 0.91% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "06d55b15401e5a5d3f8d",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel Sold Stock at $95. It Now Trades at $120. Who Won?",
      "headlineKo": "인텔은 주식을 95달러에 매도했습니다. 현재 $120에 거래되고 있습니다. 누가 이겼나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a96fc8d27baab826688895ecf7aebf895f4750a555b7107d9b325177ae0402f",
        "publishedAt": 1790938946,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| TIKR.com General Investing Intel은 주식을 95달러에 매도했습니다.",
        "Gian Estrada • 3분 읽기 검토자: David Hanson 최종 업데이트: 2026년 10월 2일 Daniel Chetroni의 Daniel CHETRONI 및 Canva를 통한 Pexels의 Tech Kiga 주요 내용 TIKR의 운영 현금-CAPEX 측정에서 Intel은 다음과 같은 결과를 얻었습니다.",
        "가중 희석 주식은 약 230억 달러의 8월 공모가 반영되기 전 1년 만에 43억 7천만에서 51억으로 증가했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $95., $120., $4.45 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $95., $120., $4.45 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "346b62693c53d7f34360",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "20-Year Oracle Bond Yields 8.1%: Could the Stock Match That Return?",
      "headlineKo": "20년 만기 오라클 채권 수익률은 8.1%: 주식이 그 수익과 일치할 수 있을까요?",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8b1e33b567232d2ea2b65d08e7e9f3fc8e2fa362da17d429c6d19a7c68b89118",
        "publishedAt": 1790938090,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클 20년 채권수익률 8.1%: 주식이 이에 맞먹을 수 있을까?",
        "- Oracle (NYSE:ORCL) - Benzinga SPY 771.37 +0.97% QQQ 753.23 +1.51% BTC/USD 86,026.32 +1.38% DIA 511.06 +0.48% GLD 382.62 −0.04% TLT 78.08 +0.48% US 로그인 내 계정 등록 Benzinga 프리미엄 프리미엄 서비스 모든 섹션 2026년 10월 2일",
        "인공 지능 데이터 센터를 건설하는 가장 큰 기업 중 하나에 돈을 빌려주는 것은 이제 장기적으로 주식을 소유하는 데 지불한 것과 거의 같은 금액을 지불하게 됩니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.1%, 0.97%, 1.51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 8.1%, 0.97%, 1.51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5fa2b21136024248e5e2",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Stock Rises on Armada Deal for Air-Gapped Sovereign AI",
      "headlineKo": "Air-Gapped Sovereign AI를 위한 Armada 거래로 Palantir 주가 상승",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1b710fca7bfc181a4c80c660c55bfd227a7a418ed592d5cc5350db90f5bd644a",
        "publishedAt": 1790936597,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Air-Gapped Sovereign AI를 위한 Armada 거래로 Palantir 주가 상승 - Palantir Technologies (NASDAQ:PLTR) - Benzinga SPY 771.13 +0.93% QQQ 752.91 +1.47% BTC/USD 86,519.70 +1.96% DIA 511.44 +0.55% GLD 383.81 +0.27% TLT 78.16 +0.58% US 로그인 다시",
        "(NASDAQ: PLTR ) 주가는 회사가 주권 AI 인프라 확장을 위해 Armada와 파트너십을 발표한 후 금요일에 상승세로 거래되었습니다.",
        "Palantir, Armada Target Sovereign AI 배포 Palantir는 자사의 Sovereign AI 운영 체제를 Armada의 Galleon 모듈식 데이터 센터, 소프트웨어 플랫폼 및 Sovereign AI Grid와 결합할 예정입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.93%, 1.47%, 1.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.93%, 1.47%, 1.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1687ebb13284d0b26d93",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "AVGO",
        "QQQ",
        "SNDK",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Surging 700% in 2026, SanDisk Takes Center Stage in Global NAND Storage Squeeze",
      "headlineKo": "2026년 700% 급증하는 SanDisk, 글로벌 NAND 스토리지 압박에서 중심 무대 차지",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=130546d1ad7a3901e42401910a78338c8b4089c318958ef80d43a54764af81b6",
        "publishedAt": 1790934920,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2026년 700% 급등, SanDisk, 글로벌 NAND 스토리지 압박에서 중심 무대 차지 - Broadcom (NASDAQ:AVGO) - Benzinga SPY 770.70 +0.88% QQQ 750.60 +1.15% BTC/USD 86,623.09 +2.09% DIA 512.19 +0.70% GLD 384.87 +0.55% TLT 78.04 +0.42% 미국",
        "(NASDAQ: SNDK ) 주가는 투자자들이 AI 기반 메모리 수요와 타이트한 NAND 공급에 대한 지속적인 낙관론에 맞서 주식의 대규모 2026년 랠리를 저울질하면서 금요일 아침 하락했습니다.",
        "나스닥 선물은 1.18% 상승했고 S&P 500 선물은 0.85% 상승했습니다. 이는 일부 고모멘텀 주식이 조기 차익실현에 직면했음에도 불구하고 메가캡 기술의 폭넓은 강세를 나타냅니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 700%, 0.88%, 1.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 700%, 0.88%, 1.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "0cbaeff12ca645c4060c",
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
      "headline": "Is Microsoft Stock Paying You Enough For The Swings?",
      "headlineKo": "Microsoft 주식은 귀하에게 스윙에 대한 충분한 비용을 지불하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f49e02e47f528c09320c0328ef16a418480db3fb0a9be7cb4f22dae2912173a",
        "publishedAt": 1790934834,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft 주식은 귀하에게 스윙에 대한 충분한 비용을 지불하고 있습니까?",
        "| Trefis는 Microsoft 주식이 귀하에게 스윙 비용을 충분히 지불하고 있습니까?",
        "2026년 10월 2일 · Trefis 팀 MSFT YTD +6.7% SPY YTD +12.6% QQQ YTD +21.1% MSFT 분석 → 7월부터 9월까지 주가가 3분의 1 이상 상승한 후에는 Microsoft(MSFT) 주식을 보유하거나 보유할 예정입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6.7%, 12.6%, 21.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6.7%, 12.6%, 21.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6e2eff2a7544f22ea905",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "One Reason Intel Stock Looks Better Than Its Price",
      "headlineKo": "인텔 주가가 가격보다 좋아 보이는 한 가지 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7dc84ed4a34d097ece9a9b8f0ef5b16406c076082db8d9f7676ff10a13c126ef",
        "publishedAt": 1790934831,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔 주가가 가격보다 좋아 보이는 한 가지 이유 | Trefis Intel 주가가 가격보다 좋아 보이는 한 가지 이유 2026년 10월 2일 · Trefis Team INTC YTD +223.4% SPY YTD +13.5% QQQ YTD +22.3% INTC 분석 → Intel에서 눈에 띄는 비즈니스 하나",
        "여전히 인텔을 PC 칩 회사로 생각할 수도 있지만 실제 현실은 바뀌었습니다.",
        "인텔 주식은 지난 12개월 동안 S&P 500의 16.0%에 비해 258%의 수익률을 기록했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 223.4%, 13.5%, 22.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 223.4%, 13.5%, 22.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7f55bce88db7319c23b3",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce Expands AI Bundles: Will Higher Adoption Boost ARR?",
      "headlineKo": "Salesforce, AI 번들 확장: 채택률이 높아지면 ARR이 향상됩니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=257fca7301e30e6b705f7be0ced08ce7f8e8c2108595fd60ce4baa797d2c809d",
        "publishedAt": 1790934300,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce Expands AI Bundles: Will Higher Adoption Boost ARR?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "153b34f2955f97f974f5",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "STX",
        "WDC"
      ],
      "relatedEntities": [],
      "importance": "high",
      "sourceReliability": {
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Toshiba Wants to Double HDD Supply — Western Digital, Seagate Investors Don’t Like It",
      "headlineKo": "Toshiba는 HDD 공급을 두 배로 늘리고 싶어 - Western Digital, Seagate 투자자들은 이를 좋아하지 않음",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1ae18bd9a14eb157bee6bc79971dad842ae599ae37fd3c5d621ee1a727ac7ba6",
        "publishedAt": 1790932527,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Toshiba는 HDD 공급을 두 배로 늘리고 싶어 - Western Digital, Seagate 투자자들은 이를 좋아하지 않음"
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
          "ticker": "WDC",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "e0eeae9ec683bcaedb54",
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
      "headline": "Taiwan Semiconductor (NYSE:TSM) Shows High Growth and Improving Fundamentals",
      "headlineKo": "Taiwan Semiconductor (NYSE:TSM), 높은 성장과 펀더멘탈 개선을 보여",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=32956140f744174585ac905b63ab9e3772197a3d0469e1b6126016d87d435119",
        "publishedAt": 1790932250,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 TSM의 사업과 관련된 'Taiwan Semiconductor (NYSE:TSM) Shows High Growth and Improving Fundamentals' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "4ca621a1ddee5bfc88d5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "NVDA"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
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
      "headline": "AMZN Inches Higher Premarket: Amazon Reportedly Seeks To Offload $8B Of Nvidia Chips To Investors",
      "headlineKo": "AMZN 인치 더 높은 프리마켓: Amazon은 투자자에게 80억 달러의 Nvidia 칩을 오프로드하려고 하는 것으로 알려졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f2358a639c87c7bda68100377ca49eb26249af6f5f0bc2b3ff06bc280ceb561e",
        "publishedAt": 1790931964,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMZN 인치 더 높은 프리마켓: Amazon은 투자자에게 80억 달러의 Nvidia 칩을 AI 에이전트로 오프로드하려고 하는 것으로 알려졌습니다 1.30% AMZN",
        "AMZN 인치 더 높은 프리마켓: Amazon은 투자자에게 80억 달러의 Nvidia 칩을 오프로드하려고 하는 것으로 알려졌습니다. Amazon은 AI 인프라 지출이 현금 흐름에 부담을 주면서 자산 경량 금융 경로를 모색하고 있는 것으로 알려졌습니다.",
        "이 일러스트 사진에는 전화기 화면에 표시된 Amazon 로고가 나와 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $8, 0.38%, 0.35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $8, 0.38%, 0.35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "71b530eb37edc2815c5a",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Citizens Reiterates Market Outperform on Oracle, Maintains $285 Price Target",
      "headlineKo": "시민들은 오라클의 시장 성과를 거듭 확인하고 목표 가격 285달러를 유지했습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5fdbf911776094f15f4f8460abc38839f4da93bf76deb6a938b52e9e2cba3793",
        "publishedAt": 1790931599,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "시민들은 오라클의 시장 성과를 거듭 확인하고 목표 가격 285달러를 유지했습니다."
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
          "ticker": "ORCL",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "5919e96d87d5217351eb",
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
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Market Chatter: Amazon Mulls Offloading Nvidia's AI Chips Worth $8 Billion",
      "headlineKo": "시장 잡담: Amazon, 80억 달러 상당의 Nvidia AI 칩 오프로드 고려 중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d87231187e482616f3912b5e1643475be425d23d1fa00bd94c002aa6861f3b09",
        "publishedAt": 1790930557,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 AMZN의 사업과 관련된 'Market Chatter: Amazon Mulls Offloading Nvidia's AI Chips Worth $8 Billion' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0eba8a3688bb864aaa44",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "SPY",
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
      "headline": "Stock Market Today: S&P 500, Dow Jones Futures Gain as September Jobs Report Misses Expectations— Nike, Synaptics, Corteva in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: 9월 일자리 보고서가 예상을 빗나가면서 S&P 500, 다우존스 선물 상승 - Nike, Synaptics, Corteva in Focus (업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0726be4ba8d1b1ccbd5807b394a0d1854087bd90a67d1767ff72c7a4ea8fe515",
        "publishedAt": 1790930416,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘의 주식 시장: S&P 500, 9월 채용 보고서가 기대치를 빗나감에 따라 다우 존스 선물 상승— Nike, S - Benzinga SPY 770.59 QQQ 751.66 BTC/USD 87,049.00 +2.59% DIA 512.59 GLD 384.23 TLT 78.00 US 로그인 등록 내 계정 Benzinga Prem",
        "주식은 목요일 종가에 이어 다우존스, S&P 500, 나스닥 100 지수의 선물이 상승하면서 금요일에 녹색으로 개장할 것으로 보입니다.",
        "9월 노동 시장은 크게 냉각되었습니다. 비농업 부문 고용은 단지 29,000개에 그쳤습니다. 이는 컨센서스가 예상한 90,000개에 크게 못 미치는 수준이었습니다. 반면 실업률은 4.2%로 소폭 상승했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.59%, 4.2%, 0.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 2.59%, 4.2%, 0.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2b704432c27532f8733f",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
        },
        {
          "name": "AWS",
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
      "headline": "How Do OpenAI And AWS Deals Reshape Synopsys's Design Automation Outlook?",
      "headlineKo": "OpenAI와 AWS 거래는 Synopsys의 설계 자동화 전망을 어떻게 재구성합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e9d62851e57a2c072716936925963898b96b087106bfab3cf5da008492a78def",
        "publishedAt": 1790927753,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "OpenAI와 AWS 거래는 Synopsys의 설계 자동화 전망을 어떻게 재구성합니까?",
        "| Trefis OpenAI와 AWS 거래는 Synopsys의 설계 자동화 전망을 어떻게 재구성합니까?",
        "2026년 10월 2일 · Trefis 팀 SNPS YTD +4.4% SPY YTD +12.6% QQQ YTD +21.1% SNPS 분석 → Synopsys(SNPS)는 2026년 9월 30일에 2026 투자자의 날을 활용하여 OpenAI 및 Amazon Web Services와의 다년간 계약을 발표했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.4%, 12.6%, 21.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.4%, 12.6%, 21.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8b663cf8c07b0af83f86",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Trump Floats Intel-Style Government Equity Stakes in OpenAI and Anthropic: 'I Have Many Deals Like That' (UPDATED)",
      "headlineKo": "Trump는 OpenAI 및 Anthropic에서 인텔 스타일의 정부 지분을 떠 올랐습니다. '나는 그런 거래가 많이 있습니다'(업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4010a2a42ea84afca48e347c8d3d94f42330ebcb13c9cbef01e66e456d5d5473",
        "publishedAt": 1790927686,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Trump는 OpenAI 및 Anthropic에서 인텔 스타일의 정부 지분을 떠 올랐습니다. '나는 그런 거래가 많이 있습니다'(업데이트됨)"
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
          "ticker": "INTC",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ccec3c3d5322269c8824",
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
      "headline": "Stocktwits AI Roundup: Micron’s Blowout Quarter, Nvidia’s $150B Buyback And The Race For AI Agents",
      "headlineKo": "Stocktwits AI 요약: Micron의 폭발적인 분기, Nvidia의 1,500억 달러 자사주 매입 및 AI 에이전트 경쟁",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0d4ef37ddec382e461ea60f1d1fc6e25e2551cce81705ab0fd567f5c73f55a3d",
        "publishedAt": 1790925110,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits AI 요약: Micron의 폭발적인 분기, Nvidia의 1,500억 달러 자사주 매입 및 AI 에이전트 경쟁 AI 에이전트 동향 뉴스 수익 전체 DIA 0.47% SPY 0.47% QQQ 0.76% Trending NKE 10.35% ASTS 0.17% CTVA 0.56% IWM 0.50% MARA 2.68% DIS 0.11%WL",
        "Stocktwits AI 요약: Micron의 폭발적인 분기, Nvidia의 1,500억 달러 규모의 자사주 매입 및 AI 에이전트 경쟁 AI 인프라 수요는 여전히 강력하지만 치솟는 비용과 심화되는 경쟁으로 인해 투자자들은 여전히 ​​불안에 떨고 있습니다.",
        "Micron Technology 로고가 2026년 7월 2일 워싱턴 DC 내셔널 몰의 The Great American State Fair 부스에 전시되었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $150, 0.47%, 0.76% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $150, 0.47%, 0.76% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0269855baa404240fe02",
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
      "headline": "Stocktwits Passport Portfolio: QQQ Holds Up Better Than SPY, DIA And Asian Stocks Amid Bond Market Rout This Week",
      "headlineKo": "Stocktwits 여권 포트폴리오: QQQ는 이번 주 채권 시장 하락 속에서 SPY, DIA 및 아시아 주식보다 더 나은 모습을 유지합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc8aa8f8dc7b1b729cc67078895996bac0600bf43adbaf273446fd9ed902bc59",
        "publishedAt": 1790921953,
        "collectedAt": 1791213388.8175483
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits 여권 포트폴리오: QQQ는 이번 주 채권 시장의 대패 속에서 SPY, DIA 및 아시아 주식보다 더 나은 모습을 유지합니다. AI 에이전트 동향 뉴스 수익 모든 DIA 0.49% SPY 0.74% QQQ 1.02% 추세 COMP 0.17% WLD 8.89% GLD 0.89% CRMD 2.16% PEPE 3.64",
        "Stocktwits 여권 포트폴리오: QQQ는 이번 주 채권 시장의 대패 속에서 SPY, DIA 및 아시아 주식보다 더 나은 모습을 유지하고 있습니다. Nasdaq을 추적하는 Invesco QQQ Trust는 이번 주에 지금까지 동료 중에서 가장 낮은 하락세를 기록했습니다.",
        "검정색 배경에 주식 시장이 하락했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.74%, 1.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9300b1599e56fea8d471",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "META Stock Holds Up Overnight: New Mexico Seeks Up To $40B Privacy Penalty In Cambridge Analytica Case",
      "headlineKo": "META 주식이 밤새 유지됨: 뉴멕시코주, Cambridge Analytica 사건에서 최대 400억 달러의 개인 정보 보호 벌금 청구",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb75a95de2de0a771fcb1753603431da915512ab5318be66343c4c712eb74469",
        "publishedAt": 1790919842,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "META 주식은 밤새 상승: 뉴멕시코, Cambridge Analytica 사례에서 최대 400억 달러의 개인 정보 보호 벌금 추구 AI 에이전트 동향 뉴스 수익 전체 DIA 0.49% SPY 0.50% QQQ 0.82% Trending NKE 10.24% ASTS 0.24% CTVA 0.56% IWM 0.53% MARA 2.77% DIS 0.04",
        "META 주식이 밤새 유지됨: 뉴멕시코, Cambridge Analytica 사건에서 최대 400억 달러의 개인 정보 보호 벌금을 요구합니다. 개인 정보 보호 벌금은 Meta 주식이 회사의 AI 추진에 추진력을 얻음에도 불구하고 새로운 위험을 추가합니다.",
        "Meta의 CEO인 Mark Zuckerberg가 2024년 1월 31일 온라인 아동 성착취에 관한 상원 사법위원회 청문회에서 증언합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $40, 0.49%, 0.50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $40, 0.49%, 0.50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "0e01c69790881ae304cf",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "AMD",
        "INTC",
        "MU",
        "NVDA",
        "ORCL",
        "PLTR"
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
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Billionaire Peter Thiel Has 42% of His Portfolio in These 2 Artificial Intelligence Stocks",
      "headlineKo": "Palantir의 억만장자 Peter Thiel은 이 2개의 인공 지능 주식에 자신의 포트폴리오의 42%를 보유하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9af7daa37f7801ef72a28fe2aaf0d05bd9a625b8590c8b07d50ed983a6295560",
        "publishedAt": 1790914800,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 42%, 0.37%, 1.01%, 28%, $25 billion, 37%, 0.37 %, $ 248.23.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 PLTR의 사업과 관련된 'Palantir Billionaire Peter Thiel Has 42% of His Portfolio in These 2 Artificial Intelligence Stocks' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "3a72b6df53e77404ce30",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "headline": "Micron Says Memory Supply Will Be Much Tighter in 2028. Sandisk's Contracts Limit How Much It Can Gain.",
      "headlineKo": "Micron은 2028년에 메모리 공급이 훨씬 더 엄격해질 것이라고 말했습니다. Sandisk의 계약은 얻을 수 있는 금액을 제한합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=083eb6300141fad73672a0f96edcaff05674be5e6054f0a6ed58fabf49ef7015",
        "publishedAt": 1790913482,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론은 2028년에 메모리 공급이 훨씬 더 타이트해질 것이라고 말했습니다.",
        "Sandisk의 계약은 얻을 수 있는 금액을 제한합니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류하세요 Sandisk( SNDK +2.75% )는 올해에도 여전히 S&P 500( ^GSPC +0.19% )에서 최고의 성과를 내는 주식입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,730, 629%, $237 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,730, 629%, $237 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "81078e2ef4f310088426",
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
      "headline": "TSLA Eyes Worst Week In 2 Months As Q3 Delivery Numbers Loom — But Munster Bets On A Beat As 'EV Winter' Thaws",
      "headlineKo": "TSLA는 3분기 납품 실적이 밝아지면서 2개월 만에 최악의 주를 예상하지만 Munster는 'EV Winter'가 해빙되면서 비트에 베팅했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a6322f948a2a19db196a4effd932d9e933be52397484c4758e8d57052b335e6",
        "publishedAt": 1790910007,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSLA는 3분기 납품 실적이 밝아지면서 2개월 만에 최악의 주를 예상합니다. 그러나 Munster는 'EV Winter'가 AI 에이전트를 해동함에 따라 비트에 베팅했습니다. Trending News Earnings All DIA 0.51% SPY 0.51% QQQ 0.82% Trending NKE 10.04% ASTS 0.23% CTVA 0.11% IWM 0.55% MARA 2.77%",
        "TSLA는 3분기 납품 수치가 불투명해지면서 2개월 만에 최악의 주를 예상합니다. 그러나 Munster는 'EV Winter'가 진행됨에 따라 속도를 내기 시작했습니다. Thaws Musk는 또한 Tesla가 Optimus 생산을 확장하기 위해 AI5 RAM을 72GB로, AI6를 144GB로 줄였다고 말했습니다.",
        "2026년 9월 7일 중국 후베이성 ​​이창시의 스마트폰에 테슬라 로고가 표시된 스마트폰에 표시된 테슬라의 주가."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.51%, 0.82%, 10.04% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.51%, 0.82%, 10.04% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cafc5d15193d5f54da75",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "AAPL",
        "AMZN",
        "GOOGL",
        "META",
        "MSFT",
        "NVDA",
        "SPY",
        "TSLA"
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
          "name": "Amazon",
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
      "headline": "Tesla Is the Only Magnificent Seven Stock in the Red for 2026",
      "headlineKo": "Tesla는 2026년 적자를 기록한 유일한 Magnificent Seven 주식입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5a75ff1b036abc59b1be1398245a1af37ef409a9f0295f758a32c6de04fbb79",
        "publishedAt": 1790909821,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 2026년 적자를 기록한 유일한 Magnificent Seven 주식입니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류하세요. Magnificent Seven 대부분에게 좋은 한 해였습니다.",
        "이 글을 쓰는 시점에서 Apple과 Nvidia는 모두 2026년에 23% 이상 상승했으며, 가장 적게 상승한 Microsoft도 약 7% 상승했습니다.",
        "Alphabet , Meta Platform( META +0.10% ) 및 Amazon이 그 사이에 위치합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 23%, 7%, 0.10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 23%, 7%, 0.10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dbd6070b0f467abae622",
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
      "headline": "Trump Reportedly Says Government 'Might' Take a Stake in OpenAI, Anthropic, Just Like It Did With Intel: 'I Have Many Deals Like That'",
      "headlineKo": "트럼프는 인텔과 마찬가지로 정부가 OpenAI, Anthropic에 지분을 가질 수도 있다고 말했습니다: '나는 그런 거래를 많이 가지고 있습니다'",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77ef244975ca9da7f5dd0f41cc88fba9f5bc0cdd945844f0466d9ee537037991",
        "publishedAt": 1790906061,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Trump Reportedly Says Government 'Might' Take a Stake in OpenAI, Anthropic, Just Like It Did With Intel: 'I Have Many Deals Like That'",
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
      "id": "fc9adc00e2cd5ce31fd0",
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
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ASTS Stock Rises Overnight: New Commercial Chief Brings Google Fi, SiriusXM Chops While Retail Weighs Big 3 Satellite JV",
      "headlineKo": "ASTS 주식이 밤새 상승: 새로운 커머셜 책임자가 Google Fi를 도입하고 SiriusXM이 찹을 사용하는 동안 소매업은 Big 3 위성 JV를 차지합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae7229e07cf9abb0b0e63ace92375cf10093cbd3c33022e5591233d6e88ebf3c",
        "publishedAt": 1790905933,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASTS 주가 밤새 상승: 새로운 상업 책임자가 Google Fi 도입, SiriusXM이 소매업에 무게를 두는 동안 3대 위성 JV AI 에이전트 동향 뉴스 수익 전체 DIA 0.49% SPY 0.50% QQQ 0.82% 추세 NKE 10.24% ASTS 0.24% CTVA 0.56% IWM 0.53% M",
        "ASTS 주가 밤새 상승: 새 상업 책임자가 Google Fi 도입, SiriusXM이 소매업에 무게를 두는 동안 3대 위성 JV Fresh 서류에서 Wayne Thorsen을 AST SpaceMobile의 새 상업 책임자로 지명하고 200,000-RSU 상금을 공개했습니다.",
        "SiriusXM의 EVP이자 COO인 Wayne Thorsen이 2025년 10월 6일 뉴욕시에서 열린 Storied NYC에서 열린 SiriusXM Build With Audio 이벤트에서 연설하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.50%, 0.82% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.49%, 0.50%, 0.82% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c8130ad3a290e0a9afba",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Coherent Stock Jumped 10% on Bernstein’s Call. Here’s Where Shares Could Go Further.",
      "headlineKo": "번스타인의 요청으로 코히런트 주식은 10% 상승했습니다. 주식이 더 나아갈 수 있는 곳은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c9fd7303079f2bbcd5c96bbbf39e910532c44481887df7ef2d03d24c059366c",
        "publishedAt": 1790905580,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "번스타인의 요청으로 코히런트 주식은 10% 상승했습니다.",
        "주식이 더 나아갈 수 있는 곳은 다음과 같습니다.",
        "| TIKR.com General Investing Coherent Stock은 번스타인의 요청으로 10% 상승했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, $319, $350 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10%, $319, $350 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "71daaa187a5892fb5f69",
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
      "headline": "The Semiconductor ETF's 2026 Return Is About 3 Times Nvidia's",
      "headlineKo": "반도체 ETF의 2026년 수익률은 Nvidia의 약 3배입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69f5a469f14cbd306ca76316fe268bdfb46b442c75ab710c095b9bbc300bd519",
        "publishedAt": 1790901961,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "반도체 ETF의 2026년 수익률은 Nvidia의 약 3배 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류 VanEck Semiconductor ETF( SMH +1.45% )는 2026년에 엄청난 상승세를 보이고 있습니다.",
        "30일 기준 이 펀드는 2025년 마지막 거래일 종가인 360.13달러보다 약 69% 오른 주당 608달러에 육박했다.",
        "이로 인해 S&P 500보다 훨씬 앞서게 됩니다( ^GSPC +0.19% )."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $608, 69%, $360.13 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $608, 69%, $360.13 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "729a88e0594a052cf980",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV",
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
      "headline": "Why GE Vernova Stock Crushed it Today",
      "headlineKo": "GE Vernova 주식이 오늘 왜 무너졌습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=150a0216ef1a49e79b242e8a548e8bd4ea57b3af04a789283ed9936ee00ad656",
        "publishedAt": 1790900568,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova 주식이 오늘 무너진 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool GE Vernova( GEV +3.89% )는 분명하고 당연한 구매입니다!",
        "적어도 그것은 목요일에 회사의 미래에 대한 낙관적인 전망을 반복한 주식을 추적하는 한 분석가의 평가입니다.",
        "이는 주가를 크게 상승시키는 데 도움이 되었고 거의 4% 더 높게 거래 세션을 마감했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, $1,350, 37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, $1,350, 37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "74d045e231e831f66fd7",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce (CRM) Adds Fresh AI Deals, Is The Stock Still A Bargain?",
      "headlineKo": "Salesforce(CRM)에 새로운 AI 거래가 추가되었습니다. 주식은 여전히 ​​저렴한가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12ea4e382e2316fb17dcbdef5effeb2fb910c08ea30f0a1efe55fe4d4dc3fb68",
        "publishedAt": 1790899899,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce (CRM) Adds Fresh AI Deals, Is The Stock Still A Bargain?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "b3e08c8c61e4e22cbacf",
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
      "headline": "Can This Number Push Constellation Energy Stock Higher?",
      "headlineKo": "이 숫자가 별자리 에너지 주식을 더 높일 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d102b527043245215d108f026511fa763ab64bf6b516888563668d986b0dbf5c",
        "publishedAt": 1790899860,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 숫자가 별자리 에너지 주식을 더 높일 수 있습니까?",
        "| Trefis 이 숫자가 별자리 에너지 주식을 더 높일 수 있습니까?",
        "2026년 10월 1일 · Trefis Team CEG YTD -26.8% SPY YTD +13.5% XLU YTD -5.4% CEG 분석 → 아마도 Constellation Energy(CEG)를 다른 유틸리티와 마찬가지로 분기별 수익으로 판단할 것입니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 26.8%, 13.5%, 5.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 26.8%, 13.5%, 5.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4eed8934dc823ec1c391",
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
      "headline": "Oracle data center deal could lower We Energies electric bills",
      "headlineKo": "Oracle 데이터 센터 거래로 We Energies의 전기 요금이 낮아질 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7cdc08e84da6c26d5c7359ec1d455a4e67b9a2eec968609e5098d4cb340465b3",
        "publishedAt": 1790899805,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle data center deal could lower We Energies electric bills",
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
      "id": "c44538476f9e611ecb80",
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
      "headline": "Why Did SanDisk Stock Jump?",
      "headlineKo": "SanDisk 주가가 급등한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=256266dd661d1979a3c1a2ab118571b05853fee761e293f70f90d4fc843d1e2f",
        "publishedAt": 1790899318,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis SanDisk 주가가 급등한 이유는 무엇입니까?",
        "2026년 10월 1일 · Trefis Team SNDK YTD +653.1% SPY YTD +12.6% QQQ YTD +21.1% SNDK 분석 → SanDisk(SNDK) 주가는 S&P 100에 편입되기 전 마지막 거래일인 2026년 9월 18일 금요일에 11.0% 급등했습니다.",
        "9월 30일 종가 $1,739.89까지 주가는 9월 18일 종가보다 약 3% 낮았습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 653.1%, 12.6%, 21.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 653.1%, 12.6%, 21.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "95a85be980d087563fd9",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR",
        "QQQ",
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
      "headline": "Wall Street Backs Coherent, Rocket Lab and Vertiv",
      "headlineKo": "월스트리트는 Coherent, Rocket Lab 및 Vertiv를 지원합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c446ea8bf121259d1da41295ccca5053960528dc6f7b29aae514cb9fdd17daf0",
        "publishedAt": 1790899108,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wall Street는 Coherent, Rocket Lab 및 Vertiv를 연중무휴 24시간 지원합니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,714.60 +0.45% Dow Jones 51,231.80 +0.46% Nasdaq 100 30,790.40 +0.79% Russell 2000 2,826.28 +0.42% S&P 500 7,714.60 +0.45% 다우존스 51,231.80 +0.46% 나스닥 100 30,790.40 +0.79% 러셀 2000 2,826.28 +0.",
        "Robert Castellano 2026년 10월 1일 오후 7시 58분(ET) 게시 · 읽기 11분 𝕏 f ⧉ 회로 기판 중심에 있는 조명 AI 칩은 오늘날의 시장 강세에서 인공 지능과 반도체 기술의 중요한 역할을 상징합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $350, $105, $340 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $350, $105, $340 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "374db392c7e83c40ed3e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "GOOGL",
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
      "headline": "S&P 500, Nasdaq, Dow Futures Inch Higher As Investors Cheer Cooling Yields — GOOGL, MU, MAT, NVDA In Focus",
      "headlineKo": "투자자들이 수익률 냉각을 응원함에 따라 S&P 500, 나스닥, 다우 선물이 1인치 더 높아졌습니다 — GOOGL, MU, MAT, NVDA In Focus",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=08849f65268b05479a386e4e1416205e9ce4b6026de02408d117e683d1982533",
        "publishedAt": 1790897279,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Nasdaq, Dow Futures는 투자자들이 냉각 수익률을 응원함에 따라 조금씩 상승합니다 — GOOGL, MU, MAT, NVDA In Focus AI 에이전트 동향 뉴스 수익 전체 DIA 0.38% SPY 0.35% QQQ 0.64% Trending NKE 10.28% ASTS 0.53% MU 0.97% CTVA 0.95% MCD 0.15% NCLH 1",
        "S&P 500, 나스닥, 다우 선물은 투자자들의 환호하는 수익률로 인해 상승했습니다. - GOOGL, MU, MAT, NVDA In Focus 10년 만기 국채 수익률은 목요일 2002년 최고치에서 냉각되었습니다.",
        "트레이더들은 뉴욕증권거래소(NYSE) 현장에서 일합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.35%, 0.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.35%, 0.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f1d465f4e21862b12b70",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "TSM",
      "relatedTickers": [
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
      "headline": "Prediction: Taiwan Semiconductor Manufacturing Stock Will Skyrocket After Oct. 15",
      "headlineKo": "예측: 대만 반도체 제조업 주가는 10월 15일 이후 급등할 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af6dad4c2fe6a4c9ea9366915719e20622689d8207876c32b663b1b4b9ff7e45",
        "publishedAt": 1790895000,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 대만 반도체 제조 주가는 10월 이후 급등할 것입니다.",
        "15 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Taiwan Semiconductor Manufacturing ( TSM +0.66% )은 몇 주 후에 주요 이벤트인 3분기 실적을 앞두고 있습니다.",
        "이는 Taiwan Semiconductor의 주식뿐만 아니라 AI 군비 경쟁과 관련된 다른 모든 사람들에게도 큰 영향을 미칠 수 있습니다. 왜냐하면 대만 반도체는 업계의 핵심 공급업체이기 때문입니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 72.5%, 0.66 %, $ 3.01 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSM에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 72.5%, 0.66 %, $ 3.01 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "6ce4b782c82187856beb",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
        "SPY",
        "TSM"
      ],
      "relatedEntities": [
        {
          "name": "TSMC",
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
      "headline": "Intel vs. Taiwan Semiconductor Manufacturing: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "인텔 대 대만 반도체 제조: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=122862f215fd764d32810677d9c84ae6ee40be99ec463a2134ddd4b22bd71f0a",
        "publishedAt": 1790893201,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만 반도체 제조업: 2026년에는 어떤 기술주를 매수하는 것이 더 나을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 국가 안보와 제조 역량이 충돌하면서 반도체 환경이 변화하고 있습니다.",
        "투자자들은 회복 중인 미국의 거대 기업 Intel( INTC -0.19% )과 세계 최고의 파운드리인 Taiwan Semiconductor Manufacturing(TSMC)(TSM +0.66%) 중에서 선택해야 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.19%, 0.66%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.19%, 0.66%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "6832cb655a90a3dafd84",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Amazon Signs 20 Year Nuclear Power Deal. That's Great News for This Nuclear Stock",
      "headlineKo": "아마존, 20년 원자력 계약 체결. 이 핵 재고에 대한 좋은 소식입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=36bbb932031d0a68e628d1da02b329b52f3b418594e9cf3aaed4bffe4471a56c",
        "publishedAt": 1790891863,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존, 20년 원자력 계약 체결.",
        "이 핵 재고에 대한 좋은 소식입니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류하세요. AI 산업은 계속해서 빠르게 성장하고 있습니다.",
        "그러나 미래의 성장이 보장되는 것은 아닙니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $7 trillion, 0.37%, 1.93% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $7 trillion, 0.37%, 1.93% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7baac916e0254fc4d56b",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "headline": "Micron's Bull Run Isn't Over",
      "headlineKo": "마이크론의 불런은 끝나지 않았다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4973b4ac885fe174c1c825f17a1b174b0a3eb72c49ed0d890cd9051056dbbc04",
        "publishedAt": 1790888701,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론의 Bull Run은 끝나지 않았습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron( MU +3.03% )의 4분기 수치가 나와 있으며 메모리 칩 슈퍼스타가 또 다른 수치를 전달했습니다.",
        "수익은 379% 증가한 542억 달러로 시장 예상치인 515억 달러를 앞지르며 높은 기대치를 다시 뛰어넘었습니다.",
        "최종적으로 조정 순이익은 10배 이상 증가한 384억 달러를 기록했으며, 조정 주당 순이익은 3.03달러에서 33.42달러로 증가해 추정치인 318억 2천만 달러를 넘어섰습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 379%, $54.2 billion, $51.5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 379%, $54.2 billion, $51.5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "499170549b66ab2405e5",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today: S&P Climbs To Start October, Micron Gains; Barbie Maker Soars On Deal News",
      "headlineKo": "오늘 주식 시장: S&P는 10월부터 상승하고 Micron은 상승합니다. Barbie Maker, 거래 뉴스로 급증",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc513ee84a3d9b0fbe4b51adb17093431be740abf1f38ea281bfbd8b418e7237",
        "publishedAt": 1790887324,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 주식 시장: S&P는 10월부터 상승하고 Micron은 상승합니다. Barbie Maker, 거래 뉴스로 급증"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ad26742d95a90576b8fb",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "MU Q3 Deep Dive: AI Demand, HBM Momentum, and Supply Constraints Shape Outlook",
      "headlineKo": "MU Q3 심층 분석: AI 수요, HBM 모멘텀 및 공급 제약으로 인한 전망",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44983bcab36527f22d2816d0c3e04dd4e643a9aa78c8a51941bdefaa6cbfe4d5",
        "publishedAt": 1790886547,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MU Q3 심층 분석: AI 수요, HBM 모멘텀 및 공급 제약으로 인한 전망"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "29fe8dd9dff4fa8a9084",
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
      "headline": "Synopsys is becoming a major AI player: CEO discusses OpenAI, Amazon deals",
      "headlineKo": "Synopsys는 주요 AI 플레이어가 되고 있습니다: CEO, OpenAI, Amazon 거래에 대해 논의",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ea559934e0f0123eb996c4cb36fd9780357e41096fae7a248738e8c46990057",
        "publishedAt": 1790886421,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Synopsys는 주요 AI 플레이어가 되고 있습니다: CEO, OpenAI, Amazon 거래에 대해 논의"
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
      "id": "b3a6dde48d569609fa3a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ASML vs. SK Hynix: What Revenue Trends Reveal to Investors About These Artificial Intelligence Companies",
      "headlineKo": "ASML 대 SK 하이닉스: 인공지능 기업에 대한 수익 추세가 투자자에게 알려주는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48501e5554ef601c8f233da1ca52c43dccb15f3f8b70d35f845a44aee1068504",
        "publishedAt": 1790883456,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML 대 SK 하이닉스: 인공지능 기업에 대한 수익 추세가 투자자에게 알려주는 것"
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
          "ticker": "ASML",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "0db9edf1f3485e2c1c6b",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMAT",
        "AMD",
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
      "headline": "Applied Materials vs. AMD: Which AI Semiconductor Stock Is a Better Buy in 2026?",
      "headlineKo": "어플라이드 머티리얼즈 vs. AMD: 2026년에는 어느 AI 반도체 주식이 더 나은 매수인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bfab893cbdad513869c723262909369260c2ca0e76dd1c8da9690133180b48c4",
        "publishedAt": 1790882881,
        "collectedAt": 1791211460.834829
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD: 2026년에는 어느 AI 반도체 주식이 더 나은 매수인가?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Applied Materials(AMAT +3.50%)와 Advanced Micro Devices(AMD +0.65%) 중에서 선택하면 수익성이 높은 카이에 무게를 두는 것을 의미합니다.",
        "어플라이드 머티리얼즈는 칩 공장에서 반도체를 생산하는 데 사용하는 장비를 만듭니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $529.30, 3.50 %, $17.92 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $529.30, 3.50 %, $17.92 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "73945795dc7e99004cb6",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "AMAT",
        "ASML",
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
      "headline": "ASML vs. Applied Digital: Which Is the Better Semiconductor Equipment Stock to Own for the Next 1 Year?",
      "headlineKo": "ASML 대 Applied Digital: 향후 1년간 소유하기에 더 나은 반도체 장비 주식은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc2f7a91d6773fdaef3242b2831d8a46ffeeeda63b52043de6065713645a64e8",
        "publishedAt": 1790882400,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Digital: 향후 1년간 소유하기에 더 나은 반도체 장비 주식은 무엇입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool ASML Holding( ASML +3.25% )과 Applied Materials( AMAT +2.03% )는 모두 인공지능(AI) 칩 b의 혜택을 받고 있습니다.",
        "ASML의 극자외선(EUV) 리소그래피 기계는 최첨단 칩에서 가장 복잡한 회로를 인쇄하는 데 사용됩니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 21.2%, 30%, 3.25 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ASML에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 21.2%, 30%, 3.25 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "ASML",
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
      "id": "3920fd4b73f7cdc79031",
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
      "headline": "Meet AI’s New “Structural Winners”: Coherent Soars 11%, Lumentum Up 8%",
      "headlineKo": "AI의 새로운 \"구조적 승리자\"를 만나보세요: Coherent는 11% 상승, Lumentum은 8% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3619be35bcf1a7fabfa8ddef55707eb9969ae0256b378e5ec8f53df2bf153674",
        "publishedAt": 1790882335,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI의 새로운 \"구조적 승리자\"를 만나보세요: Coherent는 11% 상승, Lumentum은 8% 상승 | TIKR.com 일반 투자 AI의 새로운 \"구조적 승자\"를 만나보세요: Coherent가 11% 상승, Lumentum이 8% 상승 Michael Douglass • 3분 읽기 검토자: David",
        "Bernstein은 네트워킹 및 광학 공급업체가 AI 인프라 내에서 \"구조적 승자\"가 될 수 있다고 말했습니다.",
        "Lumentum의 4분기 회계연도 매출은 10억 달러로 두 배 이상 증가했으며, 이번 분기에는 12억 2,500만 달러에서 12억 7,500만 달러를 기록했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, 8%, $1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, 8%, $1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ebed3cffacda7c7172e0",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Is Down 20% in 2026. These Two Other EV Makers Are Doing Even Worse.",
      "headlineKo": "Tesla는 2026년에 20% 하락했습니다. 다른 두 EV 제조업체의 실적은 훨씬 더 나쁩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6dae51ff38b2e1f1251e996f28dd650040f38e85d3de834bf424ceef34c6953",
        "publishedAt": 1790881997,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "다른 두 EV 제조업체의 상황은 더욱 악화되고 있습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,681.80 +0.03% Dow Jones 50,974.30 −0.05% Nasdaq 100 30,602.70 +0.17% Russell 2000 2,813.18 −0.04% S&P 500 7,681.80 +0.03% 다우존스 50,974.30 −0.05% 나스닥 100 30,602.70 +0.17% 러셀 2000 2,813.18 −0.",
        "다른 두 EV 제조업체의 상황은 더욱 악화되고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, $357.68., 0.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, $357.68., 0.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "34f90c178fc001c0cef5",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google Could Face $3.2B In Damages Over Ad-Tech Monopoly, Federal Judge Rules",
      "headlineKo": "Google은 연방 판사 판결에 따라 광고 기술 독점으로 인해 32억 달러의 손해를 입을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87c7524a63caab07a03ecdc09c03d13e9a4a8b37cc499acc369ec7a9637fa9b4",
        "publishedAt": 1790881987,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google은 광고 기술 독점으로 인해 32억 달러의 손해를 입을 수 있으며 연방 판사는 AI Agent Trending News Earnings All DIA 0.02% SPY 0.22% QQQ 0.32% Trending NKE 4.15% FICO 3.81% CTVA 83.87% ONDS 2.32% XRPN 43.72% BA 3.29% VG 3.09% 아젠 15.41%M",
        "Google은 광고 기술 독점으로 인해 32억 달러의 손해 배상을 받을 수 있음, 연방 판사 판결 맨해튼 연방 판사는 디지털 게시자가 광고 기술을 주장한 후 Alphabet Inc.의 Google로부터 32억 달러 이상의 손해 배상을 청구할 수 있는 길을 열었습니다.",
        "Google 기업 로고가 세인트 조지 성당 입구 위에 걸려 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $3.2, 0.02%, 0.22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $3.2, 0.02%, 0.22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2a3328576b40bfa42e50",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
        "ASML",
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
      "headline": "Arm vs. ASML: Which Semiconductor Stock Is a Better Buy in 2026?",
      "headlineKo": "Arm 대 ASML: 2026년에는 어느 반도체 주식을 매수하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=765128583c336b8b2089b2c94158c196c41a092d709b38c5fc2968e5b3354c69",
        "publishedAt": 1790881055,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML: 2026년에는 어느 반도체 주식이 더 나은 매수인가?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 고성능 컴퓨팅에 대한 수요가 가속화됨에 따라 투자자들은 종종 칩 설계 설계자 중에서 선택하는 데 어려움을 겪습니다.",
        "Arm(ARM +5.18%)과 ASML(ASML +3.25%) 중에서 선택하려면 각각의 고유한 역할을 이해해야 합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.18%, 3.25%, $307.49 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 5.18%, 3.25%, $307.49 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "0ec7f967303bb5b42416",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Applied Materials vs. Broadcom: Which Semiconductor Stock Is a Better Buy in 2026?",
      "headlineKo": "어플라이드 머티어리얼즈 vs. 브로드컴: 2026년에는 어느 반도체 주식이 더 나은 매수인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6f3e91de8704ac93d4fdf702bbb7770dbd94930ccf9dc6f9975ef83e8b8b86bf",
        "publishedAt": 1790879382,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom: 2026년에는 어떤 반도체 주식을 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 칩을 만드는 기계에 투자해야 할까요, 아니면 칩을 설계하는 회사에 투자해야 할까요?",
        "Applied Materials(AMAT +3.50%)와 Broadcom(AVGO -2.15%) 중에서 선택하는 것은 2026년의 구체적인 목표에 따라 다릅니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3.50%, 2.15%, $529.30 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.50%, 2.15%, $529.30 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "42500eb53b7898478cc7",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet's Google Must Face $3.2 Billion Publisher Ad-Tech Claims, Judge Rules",
      "headlineKo": "Alphabet의 Google은 32억 달러 규모의 게시자 광고 기술 청구에 직면해야 합니다. 판사 규칙",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6e33ad090dcc657e1f11bc3a25e8997e6142041e4b5ff3c0d6f123410011cf2",
        "publishedAt": 1790879181,
        "collectedAt": 1791208802.2121353
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
        "이 기사는 GOOGL의 사업과 관련된 'Alphabet's Google Must Face $3.2 Billion Publisher Ad-Tech Claims, Judge Rules' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "03dbc4528ecea6e6966b",
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
      "headline": "MSFT’s LinkedIn Chief Ryan Roslansky To Exit As AI Leadership Shake-Up Continues",
      "headlineKo": "MSFT의 LinkedIn 최고 책임자인 Ryan Roslansky, AI 리더십 개편이 계속됨에 따라 사임",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18c7573f0ddb94a0d36b2b0bf5dd11b8521d83bc2ff9d248acc3daf5713efc2c",
        "publishedAt": 1790878543,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 리더십 개편이 계속되면서 MSFT의 LinkedIn 대표 Ryan Roslansky 사임 AI 에이전트 동향 뉴스 수입 전체 DIA 0.51% SPY 0.51% QQQ 0.82% Trending NKE 10.10% ASTS 0.23% CTVA 0.11% IWM 0.55% MARA 2.77% DIS 0.04% WLFI 1.11% 다이아 0.51%",
        "MSFT의 LinkedIn CEO Ryan Roslansky, AI 리더십 개편이 계속됨에 따라 퇴사 Roslansky는 LinkedIn의 회원 수를 13억 명으로 늘리는 데 도움을 주고 Microsoft의 Copilot 추진에서 핵심 역할을 맡은 후 2026년 말에 떠날 예정입니다.",
        "이 파일 사진에서 Ryan Roslansky는 2021년 9월 20일 뉴욕에서 열린 2021 Concordia Annual Summit에서 무대에서 연설하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.51%, 0.82%, 10.10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.51%, 0.82%, 10.10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "447d854aeb11e2cf1e97",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
        "ASML",
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
      "headline": "Applied Materials vs. ASML: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "어플라이드 머티어리얼즈 vs. ASML: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ffe9e9ca6f612f7e1a96f1294ad12865338a1094eb9ef801bf56b5c931dc8bfa",
        "publishedAt": 1790877928,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML: 2026년에는 어떤 기술주를 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능 붐이 과대 광고에서 하드웨어로 전환함에 따라 Applied Materials( AMAT +3.50% )와 ASML( ASM ) 중에서 선택",
        "이 거대 기업들은 제조 공정의 다양한 단계에서 운영됩니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $529.30, 3.50 %, $17.92 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $529.30, 3.50 %, $17.92 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "ea6a1b85f299d64ee6f3",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
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
      "headline": "Alphabet Slips After Gemini 4 Argon Launch as Tech Sector Rises; Microsoft Holds Steady, Amazon Dips",
      "headlineKo": "기술 부문 상승으로 Gemini 4 Argon 출시 후 알파벳 미끄러짐; Microsoft는 꾸준한 유지, Amazon Dips",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11c7537e6686b271eb579ad83c3fd9904ab61164c2f9627049fcb3bc53531c11",
        "publishedAt": 1790877108,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "기술 부문 상승으로 Gemini 4 Argon 출시 후 알파벳 미끄러짐; Microsoft는 꾸준한 유지, Amazon Dips - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,714.60 +0.45% Dow Jones 51,231.80 +0.46% Nasdaq 100 30,790.40 +0.79% Russell 2000 2,826.28 +0.42% S&P 500 7,714.60 +0.45% 다우존스 51,231.80 +0.46% 나스닥 100 30,790.40 +0.79% 러셀 2000 2,826.28 +0.",
        "알파벳이 아직 해결하지 못한 문제를 드러낸 이유."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $338.85, 1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, $338.85, 1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2569d5cd2c24cea6cbe8",
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
      "headline": "Google Prevails in 2 Antitrust Suits. The AI and Search Giant Still Rules the Internet.",
      "headlineKo": "Google, 2건의 독점금지 소송에서 승소. AI와 검색의 거대 기업이 여전히 인터넷을 지배하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8bf49e260515e0a0202282fbf798bb5dcd7d66340d2af204a1e1022238e867f1",
        "publishedAt": 1790877060,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google, 2건의 독점금지 소송에서 승소. AI와 검색의 거대 기업이 여전히 인터넷을 지배하고 있습니다."
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
      "id": "2d9697aaae777b5ac5e9",
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
      "headline": "Not Cars. Not Energy Storage. Tesla's Robotics and Robotaxi Ambitions Are the Real Reason the Stock Is Priced Like a Tech Company.",
      "headlineKo": "자동차가 아닙니다. 에너지 저장이 아닙니다. Tesla의 로봇 공학 및 Robotaxi 야망은 주식이 기술 회사처럼 가격이 책정되는 실제 이유입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a0829f2eade1309c8b71b20582508a6f8a2c2b382ab80e1bcfa260a24493bfb",
        "publishedAt": 1790876520,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla의 로봇 공학 및 Robotaxi 야망은 주식이 기술 회사처럼 가격이 책정되는 실제 이유입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류하세요 대부분의 투자자들은 좋은 성장주를 구매하려면 일반적으로 프리미엄 가격을 지불해야 한다는 것을 이해합니다.",
        "그러나 전기차(EV) 제조사 테슬라(TSLA -0.20%)의 주가는 이러한 전제를 극단적으로 취하고 있다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.20%, 200 times, $1.75 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.20%, 200 times, $1.75 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "177d16eccbb51963aa41",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Constellation Energy Stock Is Rising Today",
      "headlineKo": "오늘 별자리 에너지 주식이 상승하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c31c0c17d8388bc9c0076b7e3b083800f8db811842479be4078a12e9d9f6b6d",
        "publishedAt": 1790876367,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 별자리 에너지 주식이 상승하는 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 강세로 10월을 시작으로 Constellation Energy( CEG +1.93% ) 주식은",
        "ET, Constellation Energy의 주가는 2.3% 상승하여 이전 상승률인 6.4%를 반납했습니다.",
        "메릴랜드의 유일한 원자력 발전소가 훨씬 더 강력해질 예정이며, 아마존은 어제 시설 업그레이드와 확장에 30억 달러를 지원하는 20년 690메가와트 전력 계약을 체결했다고 발표했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.3%, 6.4%, $3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.3%, 6.4%, $3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "553055248cdd2b7dc45a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
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
      "headline": "Alphabet vs. Amazon vs. Microsoft: Which \"Magnificent Seven\" Stock Is the Better Buy Right Now?",
      "headlineKo": "알파벳 vs. 아마존 vs. 마이크로소프트: 지금 당장 매수하는 것이 더 나은 \"매그니피센트 세븐\" 주식은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c49f56fa2c33e5bfa9bc0912241d0a962a5ae595f2d1ad5be48f0ce101c3e16",
        "publishedAt": 1790876220,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft: 지금 어떤 \"Magnificent Seven\" 주식을 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool에 참여하세요. 진실은 장기적으로 봤을 때 그 중 누구와도 괜찮을 것입니다.",
        "그러나 지금 당장 포트폴리오에 \"Magnificent Seven\" 회원인 Alphabet(GOOG -1.70%)(GOOGL -1.70%), Amazon(AMZN -0.37%) 및 Microsoft(MSFT -0.02%) 중 하나의 새로운 직책을 맡을 공간만 있다면 틀림없이 그럴 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.70%, 0.37%, 0.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.70%, 0.37%, 0.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1e10efb63ff5d1b0902d",
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
      "headline": "Can You Make Money Off Salesforce Stock Now?",
      "headlineKo": "지금 Salesforce 주식으로 돈을 벌 수 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=01859798ef3e827e8917db0c15e392fc26656077224556ca020d4a00834780c5",
        "publishedAt": 1790875186,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금 Salesforce 주식으로 돈을 벌 수 있나요?",
        "| Trefis 지금 Salesforce 재고로 돈을 벌 수 있나요?",
        "2026년 10월 1일 · 작성자: Trefis Team CRM YTD -10.0% SPY YTD +12.6% QQQ YTD +21.1% CRM 분석 → Salesforce(CRM) 주가는 9월 초 최고치인 약 $264에서 13% 하락했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10.0%, 12.6%, 21.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10.0%, 12.6%, 21.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "98385b7b1b6b52c9aaa3",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD"
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
      "headline": "Advanced Micro Devices (AMD) Could Be 33% Undervalued Following Its World Labs Deal",
      "headlineKo": "AMD(Advanced Micro Devices)는 World Labs 거래로 인해 33% 저평가될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7739c22b8c40ddd95f74bfadc661a431e3c5ff5af5a845d48fbc911e5e4a2827",
        "publishedAt": 1790874650,
        "collectedAt": 1791211460.834829
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD(Advanced Micro Devices)는 World Labs 거래로 인해 33% 저평가될 수 있습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "183200917d7eb5209675",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "4 Experts Weigh In on How Tesla's Next Chapter Could Make or Break the Stock",
      "headlineKo": "4명의 전문가가 Tesla의 다음 장이 어떻게 주가를 만들거나 깨뜨릴 수 있는지에 대해 의견을 제시합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db39e39c0dfebf689d55e7a14251e482ebac7204f5f7173bdd8e5c466dea11b7",
        "publishedAt": 1790874024,
        "collectedAt": 1791208802.2121353
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla 주식: 매수하기에는 너무 늦었나요, 아니면 이제 막 시작하고 있나요?",
        "MoneyLion One 대출 신용 카드 Instacash Credit Builder Plus MoneyLion 지출 관리형 투자 신용 모니터링 예산 책정 게임 2026년 9월 30일 4명의 전문가가 Tesla의 다음 장에서 Heather가 작성한 주식을 만들거나 깨뜨릴 수 있는 방법에 대해 의견을 나눕니다.",
        "수년 동안 시장에서 가장 주목받는 주식 중 하나였지만, 엄청난 상승세를 보인 후 일부 투자자들은 매수 기회를 놓쳤는지 궁금해할 수도 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 100%, 80%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 100%, 80%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
    }
  ],
  "byTicker": {
    "AAPL": [
      "e6dfe852365b65e0e0c8",
      "f4d0af125ad0ee0050a5",
      "4990442c7432b3dc27aa",
      "4e81941edf7b225e966e",
      "00ec534d42ff7c45f02c",
      "9fac4fcf84309c051f01",
      "403f904bbe24f8384648",
      "413e80e265c154b77a86",
      "d001966a9e7705adab2c",
      "79ec7f6c493e8e437885",
      "cafc5d15193d5f54da75"
    ],
    "AMD": [
      "e6dfe852365b65e0e0c8",
      "bcd59098a90f7c99b244",
      "909109d9969e2b2797f4",
      "d468bf82570fe19a818c",
      "4117315ca448f848b1f5",
      "d157c39847dcfdcad073",
      "aa7f29426aad91ff1893",
      "0db869b430e28449552b",
      "972c222ab160254950f8",
      "0cda55208627da3510b6",
      "146f1f5ee9d511065185",
      "3d3a763b1642202ccf23",
      "9985033893564655dc88",
      "40a2cdebd2112245cc7f",
      "64ce38616e214be24090",
      "3b18a18261aec7f5f62e",
      "50af947b65caaccf87eb",
      "9a340900913b551491c0",
      "7205e54cceff4d0d3916",
      "863f772ed7470d36226a",
      "624cc80bd030f9d04875",
      "34858be24329eeffd4cf",
      "ba12dce2b7d1ed6066c8",
      "819e7fdbe55b9ccff2c5",
      "a01ca827b3b071bd4fde",
      "feadef8f231c6dad4640",
      "50e5c9b1ce0d69a3aed7",
      "cc77912a54736ff36679",
      "b24df1aed85dab4abfe3",
      "af6425171f6659bcec20",
      "565a01e3f7f0155b5eba",
      "c7e22b5ee1cb0478530b",
      "430a9bae8e9a1aecd4f3",
      "7db500f9d5fcc874e200",
      "e0eeae9ec683bcaedb54",
      "5919e96d87d5217351eb",
      "0e01c69790881ae304cf",
      "0db9edf1f3485e2c1c6b",
      "42500eb53b7898478cc7",
      "98385b7b1b6b52c9aaa3"
    ],
    "MSFT": [
      "e6dfe852365b65e0e0c8",
      "d157c39847dcfdcad073",
      "bb2b339ed8d047015cd6",
      "369eb409646a648a8b54",
      "52fab82ac55ba630a223",
      "972c222ab160254950f8",
      "e67314eb9b3b888a7423",
      "652356e3b14cd49047b6",
      "ec32450ff839d6bee8cc",
      "cbc3abe0a34b96d222e9",
      "ef718706fb0776b90812",
      "9b7ed718455bd86b6b00",
      "462ef1e215835729320b",
      "5c5535c60fdbeef6746d",
      "b2daf91469f52571ca5f",
      "0cbaeff12ca645c4060c",
      "cafc5d15193d5f54da75",
      "03dbc4528ecea6e6966b",
      "ea6a1b85f299d64ee6f3",
      "553055248cdd2b7dc45a"
    ],
    "MU": [
      "e6dfe852365b65e0e0c8",
      "909109d9969e2b2797f4",
      "d468bf82570fe19a818c",
      "d157c39847dcfdcad073",
      "aa7f29426aad91ff1893",
      "1d2d87ef1a03ad6a8ab7",
      "972c222ab160254950f8",
      "4b978de00ba525100d92",
      "005cc2aae21963f43a8b",
      "0cda55208627da3510b6",
      "146f1f5ee9d511065185",
      "3d3a763b1642202ccf23",
      "ca152e49c1e758c3bba3",
      "9985033893564655dc88",
      "8dec3edc1faed1191902",
      "40a2cdebd2112245cc7f",
      "fe8e675769e87a11fa11",
      "64ce38616e214be24090",
      "3b18a18261aec7f5f62e",
      "50af947b65caaccf87eb",
      "51c03b9c56b66d362ba3",
      "98c3f6a1aafc4215f1be",
      "cf499e4f16a7324eecd2",
      "550077de5c6d757d52d7",
      "7205e54cceff4d0d3916",
      "863f772ed7470d36226a",
      "624cc80bd030f9d04875",
      "34858be24329eeffd4cf",
      "65b128156345a15fb0b7",
      "ba12dce2b7d1ed6066c8",
      "f88123407db6ac1a34da",
      "f2fb25dbe2e563abdb82",
      "feadef8f231c6dad4640",
      "cc77912a54736ff36679",
      "9fac4fcf84309c051f01",
      "565a01e3f7f0155b5eba",
      "c7e22b5ee1cb0478530b",
      "403f904bbe24f8384648",
      "413e80e265c154b77a86",
      "430a9bae8e9a1aecd4f3",
      "b00f9a16bc5fd769b058",
      "cdb0583be6deaed84a1d",
      "7db500f9d5fcc874e200",
      "79ec7f6c493e8e437885",
      "d846f9dbf1f2e5bdfa00",
      "e0eeae9ec683bcaedb54",
      "5919e96d87d5217351eb",
      "ccec3c3d5322269c8824",
      "0e01c69790881ae304cf",
      "3a72b6df53e77404ce30",
      "374db392c7e83c40ed3e",
      "7baac916e0254fc4d56b",
      "499170549b66ab2405e5",
      "ad26742d95a90576b8fb",
      "42500eb53b7898478cc7"
    ],
    "NVDA": [
      "e6dfe852365b65e0e0c8",
      "bcd59098a90f7c99b244",
      "909109d9969e2b2797f4",
      "d468bf82570fe19a818c",
      "d157c39847dcfdcad073",
      "aa7f29426aad91ff1893",
      "1e9624d2aff9cd413857",
      "893d68e7df7279147b9c",
      "972c222ab160254950f8",
      "228aa4af13f683625460",
      "0cda55208627da3510b6",
      "146f1f5ee9d511065185",
      "3d3a763b1642202ccf23",
      "9985033893564655dc88",
      "40a2cdebd2112245cc7f",
      "64ce38616e214be24090",
      "3b18a18261aec7f5f62e",
      "50af947b65caaccf87eb",
      "9a340900913b551491c0",
      "c0e17df1e10f6df850cc",
      "7fc591a10f7733c4c8e6",
      "205b0ac8fe33da5d32c3",
      "7205e54cceff4d0d3916",
      "863f772ed7470d36226a",
      "ae8d37a2cba9b3d9627e",
      "624cc80bd030f9d04875",
      "34858be24329eeffd4cf",
      "ba12dce2b7d1ed6066c8",
      "819e7fdbe55b9ccff2c5",
      "cbc3abe0a34b96d222e9",
      "52d700670141c8311feb",
      "130a6564f18c190d37ff",
      "64909fadbb7a557cc35f",
      "40106bbcf3bc4bc2ed6c",
      "feadef8f231c6dad4640",
      "ef718706fb0776b90812",
      "cc77912a54736ff36679",
      "016d310e5fb389cc2172",
      "af6425171f6659bcec20",
      "565a01e3f7f0155b5eba",
      "c7e22b5ee1cb0478530b",
      "430a9bae8e9a1aecd4f3",
      "7db500f9d5fcc874e200",
      "e0eeae9ec683bcaedb54",
      "4ca621a1ddee5bfc88d5",
      "5919e96d87d5217351eb",
      "ccec3c3d5322269c8824",
      "0e01c69790881ae304cf",
      "cafc5d15193d5f54da75",
      "71daaa187a5892fb5f69",
      "374db392c7e83c40ed3e",
      "42500eb53b7898478cc7"
    ],
    "ORCL": [
      "e6dfe852365b65e0e0c8",
      "909109d9969e2b2797f4",
      "d157c39847dcfdcad073",
      "aa7f29426aad91ff1893",
      "26a5d0d5044b04ba7534",
      "972c222ab160254950f8",
      "0cda55208627da3510b6",
      "146f1f5ee9d511065185",
      "bf008eee1dcc66db7ecf",
      "3d3a763b1642202ccf23",
      "9985033893564655dc88",
      "40a2cdebd2112245cc7f",
      "64ce38616e214be24090",
      "3b18a18261aec7f5f62e",
      "50af947b65caaccf87eb",
      "48a55d670b9436aabf6c",
      "7205e54cceff4d0d3916",
      "863f772ed7470d36226a",
      "624cc80bd030f9d04875",
      "34858be24329eeffd4cf",
      "ba12dce2b7d1ed6066c8",
      "feadef8f231c6dad4640",
      "36aeb716f793ce705a0a",
      "cc77912a54736ff36679",
      "016d310e5fb389cc2172",
      "565a01e3f7f0155b5eba",
      "c7e22b5ee1cb0478530b",
      "430a9bae8e9a1aecd4f3",
      "7db500f9d5fcc874e200",
      "346b62693c53d7f34360",
      "e0eeae9ec683bcaedb54",
      "71b530eb37edc2815c5a",
      "5919e96d87d5217351eb",
      "0e01c69790881ae304cf",
      "4eed8934dc823ec1c391",
      "42500eb53b7898478cc7"
    ],
    "AMAT": [
      "35f5dedfde55acd84070",
      "0db9edf1f3485e2c1c6b",
      "73945795dc7e99004cb6",
      "0ec7f967303bb5b42416",
      "447d854aeb11e2cf1e97"
    ],
    "AVGO": [
      "35f5dedfde55acd84070",
      "d468bf82570fe19a818c",
      "c895b69475d91820b1bc",
      "3b18a18261aec7f5f62e",
      "60e680e543a9f4346a2b",
      "c0e17df1e10f6df850cc",
      "ed94943b48b4bb926551",
      "819e7fdbe55b9ccff2c5",
      "a7258059e73a96c1ffcd",
      "8b6949239f8d8bf45840",
      "c7e22b5ee1cb0478530b",
      "ee0213893f6c9dad1e3e",
      "430a9bae8e9a1aecd4f3",
      "7db500f9d5fcc874e200",
      "336e627f67bd847501a6",
      "3874a818fd58f416f12b",
      "c3c4e68c25ea8724d1e9",
      "1687ebb13284d0b26d93",
      "0ec7f967303bb5b42416"
    ],
    "INTC": [
      "bcd59098a90f7c99b244",
      "d468bf82570fe19a818c",
      "c895b69475d91820b1bc",
      "205b0ac8fe33da5d32c3",
      "4e81941edf7b225e966e",
      "7fbe9830c4c0ba1274e5",
      "c34991785b320b1ff673",
      "3e452793134c934da295",
      "8b45b89516618ef25ada",
      "5e7c9c3e2d714d306aa4",
      "a01ca827b3b071bd4fde",
      "06d55b15401e5a5d3f8d",
      "6e2eff2a7544f22ea905",
      "8b663cf8c07b0af83f86",
      "0e01c69790881ae304cf",
      "dbd6070b0f467abae622",
      "6ce4b782c82187856beb",
      "b3a6dde48d569609fa3a"
    ],
    "QQQ": [
      "bcd59098a90f7c99b244",
      "893d68e7df7279147b9c",
      "bb2b339ed8d047015cd6",
      "68073dce831af6aa242b",
      "369eb409646a648a8b54",
      "52fab82ac55ba630a223",
      "0db869b430e28449552b",
      "f4d0af125ad0ee0050a5",
      "228aa4af13f683625460",
      "4b978de00ba525100d92",
      "dbeefffdd869261476ce",
      "ca152e49c1e758c3bba3",
      "fe8e675769e87a11fa11",
      "aa90a21eb5a34200d5f0",
      "31b09e86904c97c4ae13",
      "e634319e661e6bd3fc70",
      "4990442c7432b3dc27aa",
      "550077de5c6d757d52d7",
      "2599f2c12accd74f29e6",
      "543387a7a41975cc2ab8",
      "e4eebcd964ceb6b02c1a",
      "f8be6e4b0b5cc26c3f57",
      "afe451d60be9ad51ad4b",
      "f88123407db6ac1a34da",
      "2f6103fe88952b53f557",
      "cbc3abe0a34b96d222e9",
      "52d700670141c8311feb",
      "0f1776e9ff6c99aa7ba9",
      "00ec534d42ff7c45f02c",
      "130a6564f18c190d37ff",
      "64909fadbb7a557cc35f",
      "1cde97e0c777a2860f13",
      "fbb636cc3926e7178202",
      "36aeb716f793ce705a0a",
      "164705d71cebe6abf557",
      "ef718706fb0776b90812",
      "be073e69c886b8afc328",
      "8b6949239f8d8bf45840",
      "b24df1aed85dab4abfe3",
      "af6425171f6659bcec20",
      "a83f149bbc0e9c66b299",
      "5c5535c60fdbeef6746d",
      "b00f9a16bc5fd769b058",
      "cdb0583be6deaed84a1d",
      "b6d37edd07f93a2607bd",
      "40b67c8308f5886f650b",
      "336e627f67bd847501a6",
      "3874a818fd58f416f12b",
      "b2daf91469f52571ca5f",
      "f56198645364c0475539",
      "346b62693c53d7f34360",
      "5fa2b21136024248e5e2",
      "1687ebb13284d0b26d93",
      "0cbaeff12ca645c4060c",
      "6e2eff2a7544f22ea905",
      "0eba8a3688bb864aaa44",
      "2b704432c27532f8733f",
      "ccec3c3d5322269c8824",
      "0269855baa404240fe02",
      "9300b1599e56fea8d471",
      "81078e2ef4f310088426",
      "fc9adc00e2cd5ce31fd0",
      "c44538476f9e611ecb80",
      "95a85be980d087563fd9",
      "374db392c7e83c40ed3e",
      "ebed3cffacda7c7172e0",
      "34f90c178fc001c0cef5",
      "03dbc4528ecea6e6966b",
      "ea6a1b85f299d64ee6f3",
      "1e10efb63ff5d1b0902d"
    ],
    "SPY": [
      "bcd59098a90f7c99b244",
      "b1982cfd43b556a7864e",
      "0f2b92ec8123f9394491",
      "ff3b3edcaab09e540e48",
      "d468bf82570fe19a818c",
      "4117315ca448f848b1f5",
      "25eebbdbd0a780349d38",
      "893d68e7df7279147b9c",
      "101f65a76e1051a8bb74",
      "bb2b339ed8d047015cd6",
      "68073dce831af6aa242b",
      "66fa7c7abbaac8ad57af",
      "369eb409646a648a8b54",
      "52fab82ac55ba630a223",
      "0db869b430e28449552b",
      "f4d0af125ad0ee0050a5",
      "228aa4af13f683625460",
      "e9ffefa9b836c98b04d4",
      "4b978de00ba525100d92",
      "4142abde7f09a159c8a6",
      "005cc2aae21963f43a8b",
      "dbeefffdd869261476ce",
      "e67314eb9b3b888a7423",
      "8dec3edc1faed1191902",
      "8dc96eb8841102bddfed",
      "fe8e675769e87a11fa11",
      "aa90a21eb5a34200d5f0",
      "51c03b9c56b66d362ba3",
      "9a340900913b551491c0",
      "98c3f6a1aafc4215f1be",
      "31b09e86904c97c4ae13",
      "60e680e543a9f4346a2b",
      "c0e17df1e10f6df850cc",
      "9d9108c97a5869b68911",
      "e634319e661e6bd3fc70",
      "7fc591a10f7733c4c8e6",
      "205b0ac8fe33da5d32c3",
      "bdedce9b55b30493532c",
      "4990442c7432b3dc27aa",
      "cf499e4f16a7324eecd2",
      "98f91c9a8b193a483d73",
      "7fbe9830c4c0ba1274e5",
      "c727f18a7b52c5f7cbeb",
      "3fe4615910f279403ff9",
      "3e452793134c934da295",
      "543387a7a41975cc2ab8",
      "f08dbf53047d503d9bee",
      "ae8d37a2cba9b3d9627e",
      "e4eebcd964ceb6b02c1a",
      "5e7c9c3e2d714d306aa4",
      "65b128156345a15fb0b7",
      "ed94943b48b4bb926551",
      "819e7fdbe55b9ccff2c5",
      "ec32450ff839d6bee8cc",
      "8a1b15d88bf3633c4606",
      "f88123407db6ac1a34da",
      "2f6103fe88952b53f557",
      "df523500445edc84444e",
      "f6f47e11392f30299f2e",
      "cbc3abe0a34b96d222e9",
      "a01ca827b3b071bd4fde",
      "52d700670141c8311feb",
      "0f1776e9ff6c99aa7ba9",
      "00ec534d42ff7c45f02c",
      "130a6564f18c190d37ff",
      "64909fadbb7a557cc35f",
      "f2fb25dbe2e563abdb82",
      "1cde97e0c777a2860f13",
      "fbb636cc3926e7178202",
      "36aeb716f793ce705a0a",
      "164705d71cebe6abf557",
      "ef718706fb0776b90812",
      "be073e69c886b8afc328",
      "e69620b2bcc7fdafd7c3",
      "8b6949239f8d8bf45840",
      "b24df1aed85dab4abfe3",
      "af6425171f6659bcec20",
      "f6f7a85ca6fdcf937de1",
      "ee0213893f6c9dad1e3e",
      "a83f149bbc0e9c66b299",
      "5c5535c60fdbeef6746d",
      "b00f9a16bc5fd769b058",
      "cdb0583be6deaed84a1d",
      "b6d37edd07f93a2607bd",
      "40b67c8308f5886f650b",
      "336e627f67bd847501a6",
      "3874a818fd58f416f12b",
      "b2daf91469f52571ca5f",
      "6b42964d65017c6fcfd3",
      "f56198645364c0475539",
      "346b62693c53d7f34360",
      "5fa2b21136024248e5e2",
      "1687ebb13284d0b26d93",
      "0cbaeff12ca645c4060c",
      "6e2eff2a7544f22ea905",
      "0eba8a3688bb864aaa44",
      "2b704432c27532f8733f",
      "ccec3c3d5322269c8824",
      "0269855baa404240fe02",
      "9300b1599e56fea8d471",
      "3a72b6df53e77404ce30",
      "81078e2ef4f310088426",
      "cafc5d15193d5f54da75",
      "fc9adc00e2cd5ce31fd0",
      "71daaa187a5892fb5f69",
      "729a88e0594a052cf980",
      "b3e08c8c61e4e22cbacf",
      "c44538476f9e611ecb80",
      "95a85be980d087563fd9",
      "374db392c7e83c40ed3e",
      "f1d465f4e21862b12b70",
      "6ce4b782c82187856beb",
      "6832cb655a90a3dafd84",
      "7baac916e0254fc4d56b",
      "0db9edf1f3485e2c1c6b",
      "73945795dc7e99004cb6",
      "ebed3cffacda7c7172e0",
      "34f90c178fc001c0cef5",
      "2a3328576b40bfa42e50",
      "0ec7f967303bb5b42416",
      "03dbc4528ecea6e6966b",
      "447d854aeb11e2cf1e97",
      "ea6a1b85f299d64ee6f3",
      "2d9697aaae777b5ac5e9",
      "177d16eccbb51963aa41",
      "553055248cdd2b7dc45a",
      "1e10efb63ff5d1b0902d"
    ],
    "TSM": [
      "bcd59098a90f7c99b244",
      "a8aef1550697f5bb7293",
      "af2137c7f6b1d9768ffe",
      "c727f18a7b52c5f7cbeb",
      "8b45b89516618ef25ada",
      "130a6564f18c190d37ff",
      "ee0213893f6c9dad1e3e",
      "430a9bae8e9a1aecd4f3",
      "e0eeae9ec683bcaedb54",
      "f1d465f4e21862b12b70",
      "6ce4b782c82187856beb"
    ],
    "AMZN": [
      "b1982cfd43b556a7864e",
      "d157c39847dcfdcad073",
      "66fa7c7abbaac8ad57af",
      "4b978de00ba525100d92",
      "cbd525410d0e6f498016",
      "bda4e52dd92d056ee082",
      "aa90a21eb5a34200d5f0",
      "64ce38616e214be24090",
      "d04b5b4bd0caee5a6000",
      "c561fe9314213d1571d6",
      "5675a3b96013a60d4115",
      "cbc3abe0a34b96d222e9",
      "cc77912a54736ff36679",
      "016d310e5fb389cc2172",
      "889147b867ea0f1410ca",
      "565a01e3f7f0155b5eba",
      "a03ad9c455a26e496a51",
      "d60804ab03c2e89b7099",
      "383f3e94372ab8a930b4",
      "d001966a9e7705adab2c",
      "19021e6a58681772e813",
      "7814bc12b5d564e43e8a",
      "4ca621a1ddee5bfc88d5",
      "5919e96d87d5217351eb",
      "2b704432c27532f8733f",
      "cafc5d15193d5f54da75",
      "6832cb655a90a3dafd84",
      "29fe8dd9dff4fa8a9084",
      "ea6a1b85f299d64ee6f3",
      "553055248cdd2b7dc45a"
    ],
    "META": [
      "0f2b92ec8123f9394491",
      "4117315ca448f848b1f5",
      "e9ffefa9b836c98b04d4",
      "4b978de00ba525100d92",
      "aa90a21eb5a34200d5f0",
      "4990442c7432b3dc27aa",
      "2599f2c12accd74f29e6",
      "7fbe9830c4c0ba1274e5",
      "624cc80bd030f9d04875",
      "ba12dce2b7d1ed6066c8",
      "df523500445edc84444e",
      "cbc3abe0a34b96d222e9",
      "00ec534d42ff7c45f02c",
      "164705d71cebe6abf557",
      "9300b1599e56fea8d471",
      "cafc5d15193d5f54da75"
    ],
    "PLTR": [
      "ff3b3edcaab09e540e48",
      "aa7f29426aad91ff1893",
      "e9ffefa9b836c98b04d4",
      "34858be24329eeffd4cf",
      "e69620b2bcc7fdafd7c3",
      "f6f7a85ca6fdcf937de1",
      "42c919f32289af652eae",
      "fb9eaffaf3048fc83767",
      "40b67c8308f5886f650b",
      "5fa2b21136024248e5e2",
      "0e01c69790881ae304cf"
    ],
    "LRCX": [
      "d468bf82570fe19a818c",
      "4372edbbbc8dece6a26d"
    ],
    "GOOGL": [
      "d157c39847dcfdcad073",
      "cbd525410d0e6f498016",
      "146f1f5ee9d511065185",
      "7fbe9830c4c0ba1274e5",
      "a01601c2a139e615afb9",
      "f88123407db6ac1a34da",
      "cbc3abe0a34b96d222e9",
      "fbb636cc3926e7178202",
      "ef718706fb0776b90812",
      "9fac4fcf84309c051f01",
      "4a3349b2aaa85aabcbe3",
      "6d34d2872ecac5a74198",
      "2ef83647a0d98faafec7",
      "cafc5d15193d5f54da75",
      "fc9adc00e2cd5ce31fd0",
      "374db392c7e83c40ed3e",
      "34f90c178fc001c0cef5",
      "42500eb53b7898478cc7",
      "ea6a1b85f299d64ee6f3",
      "2569d5cd2c24cea6cbe8",
      "553055248cdd2b7dc45a"
    ],
    "SNDK": [
      "25eebbdbd0a780349d38",
      "98c3f6a1aafc4215f1be",
      "98f91c9a8b193a483d73",
      "f08dbf53047d503d9bee",
      "8b6949239f8d8bf45840",
      "d846f9dbf1f2e5bdfa00",
      "1687ebb13284d0b26d93",
      "3a72b6df53e77404ce30",
      "c44538476f9e611ecb80"
    ],
    "TSLA": [
      "1e9624d2aff9cd413857",
      "4142abde7f09a159c8a6",
      "8dec3edc1faed1191902",
      "e42b57cee58b7239ff9e",
      "e634319e661e6bd3fc70",
      "e4eebcd964ceb6b02c1a",
      "2f6103fe88952b53f557",
      "fb49b7cfeb60ab0835a1",
      "0f1776e9ff6c99aa7ba9",
      "feadef8f231c6dad4640",
      "3b83dcdcf69f5426d04d",
      "2bb63ecdda37fd160979",
      "381fae405abfb5ee0428",
      "81078e2ef4f310088426",
      "cafc5d15193d5f54da75",
      "ebed3cffacda7c7172e0",
      "2d9697aaae777b5ac5e9",
      "183200917d7eb5209675"
    ],
    "ASML": [
      "101f65a76e1051a8bb74",
      "c727f18a7b52c5f7cbeb",
      "8b45b89516618ef25ada",
      "b3a6dde48d569609fa3a",
      "73945795dc7e99004cb6",
      "2a3328576b40bfa42e50",
      "447d854aeb11e2cf1e97"
    ],
    "STX": [
      "bb2b339ed8d047015cd6",
      "8dc96eb8841102bddfed",
      "3f72e247280216479541",
      "be073e69c886b8afc328",
      "9efcfe9e904def7cdfe3",
      "153b34f2955f97f974f5"
    ],
    "VST": [
      "bb2b339ed8d047015cd6",
      "68073dce831af6aa242b",
      "369eb409646a648a8b54",
      "52fab82ac55ba630a223",
      "e80c3c0e246225d79c89",
      "1cde97e0c777a2860f13",
      "be073e69c886b8afc328"
    ],
    "WDC": [
      "bb2b339ed8d047015cd6",
      "228aa4af13f683625460",
      "4b978de00ba525100d92",
      "8dc96eb8841102bddfed",
      "98f91c9a8b193a483d73",
      "afe451d60be9ad51ad4b",
      "1cde97e0c777a2860f13",
      "fbb636cc3926e7178202",
      "3f72e247280216479541",
      "be073e69c886b8afc328",
      "9fac4fcf84309c051f01",
      "403f904bbe24f8384648",
      "413e80e265c154b77a86",
      "79ec7f6c493e8e437885",
      "153b34f2955f97f974f5"
    ],
    "QCOM": [
      "68073dce831af6aa242b",
      "52fab82ac55ba630a223",
      "0db869b430e28449552b",
      "0bf08ec08094105d0ae4",
      "cf499e4f16a7324eecd2",
      "c727f18a7b52c5f7cbeb",
      "130a6564f18c190d37ff",
      "9fac4fcf84309c051f01",
      "403f904bbe24f8384648",
      "413e80e265c154b77a86",
      "d001966a9e7705adab2c",
      "79ec7f6c493e8e437885"
    ],
    "CEG": [
      "369eb409646a648a8b54",
      "bda4e52dd92d056ee082",
      "c561fe9314213d1571d6",
      "19021e6a58681772e813",
      "7814bc12b5d564e43e8a",
      "b3e08c8c61e4e22cbacf",
      "177d16eccbb51963aa41"
    ],
    "CRM": [
      "0cda55208627da3510b6",
      "f6f47e11392f30299f2e",
      "f6f7a85ca6fdcf937de1",
      "7f55bce88db7319c23b3",
      "74d045e231e831f66fd7",
      "1e10efb63ff5d1b0902d"
    ],
    "ANET": [
      "729c5d262dbdf58ae225",
      "3a495cb3ff560c001aa5"
    ],
    "ARM": [
      "6dce333a9d4b498d39b4",
      "2599f2c12accd74f29e6",
      "af6425171f6659bcec20",
      "2a3328576b40bfa42e50"
    ],
    "LITE": [
      "6abc59c2db4af0cd7497",
      "f8be6e4b0b5cc26c3f57",
      "3920fd4b73f7cdc79031"
    ],
    "ETN": [
      "ab49fcffb344e4cf65b9",
      "2638cc267b6383ea6506",
      "2d0e78f2f89b04be7bd4"
    ],
    "MRVL": [
      "31b09e86904c97c4ae13",
      "5e7c9c3e2d714d306aa4",
      "8a1b15d88bf3633c4606",
      "8b6949239f8d8bf45840",
      "6b42964d65017c6fcfd3"
    ],
    "FIX": [
      "9d9108c97a5869b68911"
    ],
    "GEV": [
      "3fe4615910f279403ff9",
      "729a88e0594a052cf980"
    ],
    "MOD": [
      "de931fecebd7687112e3",
      "63bc6c0128a0297c6f18"
    ],
    "COHR": [
      "a83f149bbc0e9c66b299",
      "b6d37edd07f93a2607bd",
      "c8130ad3a290e0a9afba",
      "95a85be980d087563fd9",
      "3920fd4b73f7cdc79031"
    ],
    "VRT": [
      "95a85be980d087563fd9"
    ]
  }
};
