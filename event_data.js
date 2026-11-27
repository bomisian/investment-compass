// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1795785953.0704596,
  "events": [
    {
      "id": "fae88e51c5c19edc57bb",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "META",
      "relatedTickers": [
        "AMZN",
        "META",
        "NVDA",
        "ORCL"
      ],
      "relatedEntities": [
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
      "headline": "Michael Burry Shares Stark Warning About AI Boom, as Nvidia, Oracle and Meta Face Surging Debt Insurance Costs",
      "headlineKo": "Michael Burry는 Nvidia, Oracle 및 Meta가 부채 보험 비용 급증에 직면하면서 AI 붐에 대한 엄중한 경고를 공유합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=939496e0b643ce0dbbf96b87b6097cf073e8fd6a5a7c94d1f7f5b90c0d704245",
        "publishedAt": 1795761088,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 META의 사업과 관련된 'Michael Burry Shares Stark Warning About AI Boom, as Nvidia, Oracle and Meta Face Surging Debt Insurance Costs' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "81767b0a8cdf61b64980",
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
      "headline": "Should AI Pricing Change Require Action From Salesforce Stock Investors?",
      "headlineKo": "AI 가격 변경에는 Salesforce 주식 투자자의 조치가 필요합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=861bb08fcd0d56acc041536f55b14a416b6682ecb1e751dfda9fc3a40a2e0480",
        "publishedAt": 1795756283,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 CRM의 사업과 관련된 'Should AI Pricing Change Require Action From Salesforce Stock Investors?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "75d064739c9137b7cd27",
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
      "headline": "Nvidia (NVDA) Stock Fair Value Falls After Analysts Reassess Leadership And Regulatory Risks",
      "headlineKo": "분석가들이 리더십과 규제 위험을 재평가한 후 엔비디아(NVDA) 주식 공정 가치가 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a379bd04041b159f4371c933a2ede013632185a2d03e0a51c59c24b6a3543d67",
        "publishedAt": 1795753381,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia (NVDA) Stock Fair Value Falls After Analysts Reassess Leadership And Regulatory Risks",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "4337ace326ce6b38ec2d",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "FIX",
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
      "headline": "Amazon Lost 40 Satellites on a Boeing-Lockheed Rocket in November. SpaceX Is the Only Company That Can Fix Amazon’s Problem. Is the Stock a Buy Near $130?",
      "headlineKo": "아마존은 지난 11월 보잉-록히드 로켓에서 위성 40개를 잃었습니다. SpaceX는 Amazon의 문제를 해결할 수 있는 유일한 회사입니다. 주식 매수가 $130에 가깝나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ba7bbfe6332c14ee7092a4b5fa4647e1a0ecb09b8ee56159f9f94b4953b195f",
        "publishedAt": 1795751582,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존은 지난 11월 보잉-록히드 로켓에서 위성 40개를 잃었습니다.",
        "SpaceX는 Amazon의 문제를 해결할 수 있는 유일한 회사입니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147.73 비트코인 $61,702.00 +1.5% +$904.93 ANT $82.79 +1.1%"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $130, 3.12%, 1.30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $130, 3.12%, 1.30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6f1987cbe63b10aebc08",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Why Redburn Downgraded Broadcom (AVGO) Despite Surging AI Revenue",
      "headlineKo": "Redburn이 AI 매출 급증에도 불구하고 Broadcom(AVGO)을 다운그레이드한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2008483f5159b3671e2f0f2ec9f40f79f7e9ee5bb88e89d275333a273c2766a",
        "publishedAt": 1795751457,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Redburn Downgraded Broadcom (AVGO) Despite Surging AI Revenue",
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
      "id": "919897ad086bfb946d54",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Oracle Corporation: Assessing The Preferred Which Now Yields Over ~9%",
      "headlineKo": "Oracle Corporation: 현재 최대 9% 이상의 수익률을 보이는 우선주 평가",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ea32c09d230891facc819c2279878d748fe5676d5dbe4e130ebd719a51890c04",
        "publishedAt": 1795735097,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클: 현재 수익률이 ~9% 이상인 우선주 평가 | Alpha Prakhar Agarwal, CFA 1.18K 팔로워 찾기 요약 팔로우 우리는 Oracle 보통주 및 우선주에 대해 보류를 유지합니다. 가치 평가는 개선되었지만 자금 조달 요구, 이연 수익",
        "ORCL.PR.D는 액면가보다 약 30% 낮은 $35 근처에 거래되며, 2029년 1월 의무 전환까지 약 9.25%의 수익률을 보이고 있습니다.",
        "ORCL.PR.D는 중간 정도의 보통주 이익으로 더 높은 소득과 잠재적인 상대 성과를 제공하지만 필수 전환으로 인해 ORCL과 밀접한 상관관계가 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 9%, $35,, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 9%, $35,, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "9c15c7ce23d54a6bb3a2",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "INTC",
        "MU",
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
      "headline": "Not Nvidia. Not Micron. If I Could Buy and Hold Only 1 Artificial Intelligence (AI) Semiconductor Stock Through 2030, This Would Be It.",
      "headlineKo": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 반도체 주식을 1개만 사고 보유할 수 있다면 이것이 될 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e56a35f5645b5a73c26870701de9815fb57d698eaf78dfa2a5bbc1fab6df80f",
        "publishedAt": 1795734884,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2030년까지 인공지능(AI) 반도체 주식을 1개만 사고 보유할 수 있다면 이것이 될 것입니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147.73 비트코인 $61,337.00 +0.8% +$470.59 ANT $82.79 +1.1%",
        "Taiwan Semiconductor는 다양한 칩 아키텍처 전반에 걸쳐 수요로부터 이익을 얻습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3.91%, 4.53%, 1.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.91%, 4.53%, 1.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dc94abff985ef1297f82",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Did Jensen Huang’s Alleged Chinese Spy Get Him to Do Anything Nvidia Didn’t Want?",
      "headlineKo": "Jensen Huang의 중국 스파이 혐의로 인해 Nvidia가 원하지 않는 일을 하게 되었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=549d58c0687944ed251bd01b581409ad37503dc43d6b2fba79a06933d06acad9",
        "publishedAt": 1795734049,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang의 중국 스파이 혐의로 인해 Nvidia가 원하지 않는 일을 하게 되었나요?",
        "- 언체인드 후원 Jensen Huang의 중국 스파이 혐의가 그에게 Nvidia가 원하지 않는 일을 하게 만들었나요?",
        "언체인드 | 2026년 11월 26일 오후 6시(ET)에 게시됨."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 33% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 33% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1a4be488890d62e03baf",
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
      "headline": "Nvidia Is the Worst-Performing \"Magnificent Seven\" Stock This Year. Is It a Buy Before 2027?",
      "headlineKo": "Nvidia는 올해 최악의 성과를 낸 \"Magnificent Seven\" 주식입니다. 2027년 이전에 구매해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=82bbdc1f980d9510642c4f9b8837ce329a0a724d0d62b617025b5aab498b6725",
        "publishedAt": 1795733449,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia는 올해 최악의 성과를 낸 \"Magnificent Seven\" 주식입니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147.73 비트코인 $61,337.00 +0.8% +$470.59 ANT $82.79 +1.1%",
        "Nvidia는 좋은 가치를 얻기 위해 인공 지능(AI)에 대한 지출을 계속 가속화하기 위해 하이퍼스케일러가 필요하지 않습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3.91%, $100, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.91%, $100, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "de18fd90aa4aba92cb38",
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
      "headline": "Should You Buy Tesla Stock Before December?",
      "headlineKo": "12월 이전에 Tesla 주식을 구매해야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0243a4baabc6f280cd4f621cef4a3775f8bfc6f3cc228a63ada0817630f5c5f9",
        "publishedAt": 1795732502,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "12월 이전에 Tesla 주식을 구매해야 할까요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147.73 비트코인 $61,702.00 +1.5% +$904.93 ANT $82.79 +1.1%",
        "거래가 진행되면 상당한 불확실성이 따르게 됩니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.18%, 1.30%, $3.5 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.18%, 1.30%, $3.5 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0ed0f789495193793d69",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tech Stock Sell-Off: Down 13%, Is Microsoft a Buy Now?",
      "headlineKo": "기술주 매도: 13% 하락, Microsoft는 지금 구매합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=86259c42f8252a3a0a1f4af0d691afb249d60966cad3a5148ca584f626c715d7",
        "publishedAt": 1795731602,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "기술주 매도: 13% 하락, Microsoft는 지금 구매합니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147.73 비트코인 $61,702.00 +1.5% +$904.93 ANT $82.79 +1.1%",
        "Azure 매출은 48% 증가했고, 상업 잔고는 6,770억 달러에 달해 수요가 계속되고 있음을 나타냅니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 48%, $677 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 48%, $677 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a54fb82542fcd35805a6",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Intel (INTC) Faces Lawsuit And AI Selloff As Fair Value Debate Gets Harder",
      "headlineKo": "인텔(INTC), 공정 가치 논쟁이 더욱 어려워지면서 소송 및 AI 매도에 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6e0745ef3e15f01868ad5073bb07fc23b63278347dd23cb49905db4f46a414c3",
        "publishedAt": 1795730948,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel (INTC) Faces Lawsuit And AI Selloff As Fair Value Debate Gets Harder",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "62c6d974a94f1bcbb002",
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
      "headline": "Jim Lebenthal Says This Is “a Correction, Not Something Worse.” Why He’s Buying More Alphabet",
      "headlineKo": "Jim Lebenthal은 이것이 \"더 나쁜 것이 아니라 수정\"이라고 말합니다. 그가 알파벳을 더 많이 사는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf8415427f321c22becf7ce542f6e537f7aed420bc85c95c2ceffd1485506a28",
        "publishedAt": 1795730875,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Lebenthal은 이것이 \"더 나쁜 것이 아니라 수정\"이라고 말합니다. 그가 알파벳을 더 많이 사는 이유 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,326.20 +1.42% Dow Jones 50,864.00 +0.89% Nasdaq 100 26,800.30 +2.38% Russell 2000 2,744.28 +0.99% S&P 500 7,326.20 +1.42% 다우존스 50,864.00 +0.89% 나스닥 100 26,800.30 +2.38% 러셀 20",
        "Alphabet ( NASDAQ:GOOGL | GOOGL 가격 예측 )은 11월 273.10달러로 마감되었습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $273.10, 13.79%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $273.10, 13.79%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b7de47b417dbfe803b58",
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
      "headline": "Sandisk: The Sell Call Played Out (Rating Upgrade)",
      "headlineKo": "Sandisk: 매도 요청이 진행되었습니다(등급 업그레이드).",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=200eccd47a2a75b1a76f454f0d5078e67f55ff1e8350d2d6b9f131603c932d68",
        "publishedAt": 1795725376,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: 매도 요청이 진행되었습니다(NASDAQ:SNDK) | 알파 추구 Louis Gerard 4.29K 팔로워 팔로우 요약 Sandisk는 54% 하락 후 가치 평가가 너무 매력적이어서 Sell 등급을 유지할 수 없게 된 후 Hold로 업그레이드되었습니다.",
        "SNDK는 비GAAP 수익의 4.97배, EV/EBITDA의 3.61배, 잉여현금흐름 수익률 20.8%로 거래됩니다.",
        "공급이 확대되고 YMTC가 점유율을 높이고 중국 클라우드 제공업체가 엔터프라이즈 SSD 주문을 줄일 것으로 예상되면서 NAND 가격이 약해지고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 54%, 4.97 times, 3.61 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 54%, 4.97 times, 3.61 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "793a69ef5f8aefe224eb",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Goldman Sachs resets Broadcom's 12-month price target before earnings",
      "headlineKo": "Goldman Sachs, 수익 전 Broadcom의 12개월 목표 가격 재설정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80537e2bf13e004e0435ea7bf99051454e99d00295589f87735aee2c7aea9c86",
        "publishedAt": 1795721595,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Goldman Sachs resets Broadcom's 12-month price target before earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "9f134dba29767132eea3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Sandisk Trades at Under 3x Earnings After an 8-for-1 Split and a 70% Crash. Why SNDK Stock Isn’t Doomed Despite NAND Price Warnings.",
      "headlineKo": "Sandisk는 8대1 분할 및 70% 붕괴 이후 3배 미만의 수익으로 거래됩니다. NAND 가격 경고에도 불구하고 SNDK 주식이 망하지 않는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=10f81f575156ea385bf6613b39df920763f2e841c8507e9af0e213fed1b1169a",
        "publishedAt": 1795721403,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk Trades at Under 3x Earnings After an 8-for-1 Split and a 70% Crash. Why SNDK Stock Isn’t Doomed Despite NAND Price Warnings.",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "581a50c577e99eaff030",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "David Tepper, Cathie Wood and 4 Other Famous Investors Own Nvidia. Here’s Who Bought Recently",
      "headlineKo": "David Tepper, Cathie Wood 및 기타 4명의 유명 투자자가 Nvidia를 소유하고 있습니다. 최근에 구매한 사람은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=132a2f3c7c34144031468fe47bb822d6b06f5aa111adf9bb86db6d7ba2ba6ac2",
        "publishedAt": 1795716770,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "David Tepper, Cathie Wood 및 기타 4명의 유명 투자자가 Nvidia를 소유하고 있습니다.",
        "최근에 구매한 사람은 다음과 같습니다 | TIKR.com 일반 투자 David Tepper, Cathie Wood 및 기타 4명의 유명 투자자가 Nvidia를 소유하고 있습니다.",
        "최근 Roxanna Maglangit을 구입한 사람은 다음과 같습니다. • 6분 읽기 검토자: Michael Douglass 최종 업데이트: 2026년 11월 26일 Getty Images의 show999 및 Canva를 통한 teteescape의 TETE_ESCAPE 주요 사항 6명의 유명 투자자가 9월에 Nvidia를 인수했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 35%, $343 million, 7.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 35%, $343 million, 7.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "527c2526d0b868b2d52f",
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
      "headline": "Stanley Druckenmiller, Bill Ackman and 7 Other Famous Investors Own Amazon. Here’s Who Bought and Sold Recently",
      "headlineKo": "Stanley Druckenmiller, Bill Ackman 및 기타 7명의 유명 투자자가 Amazon을 소유하고 있습니다. 최근에 매수하고 매도한 사람은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4cd8554f5708fcd6cfae1095fee78b8b9880f5e8cff5534fd45fb1f5e84f8876",
        "publishedAt": 1795716673,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stanley Druckenmiller, Bill Ackman 및 기타 7명의 유명 투자자가 Amazon을 소유하고 있습니다.",
        "최근에 매수하고 매도한 사람은 다음과 같습니다 | TIKR.com 일반 투자 Stanley Druckenmiller, Bill Ackman 및 기타 7명의 유명 투자자가 Amazon을 소유하고 있습니다.",
        "최근에 구입하고 판매한 사람은 다음과 같습니다. Roxanna Maglangit • 6분 읽기 검토자: Michael Douglass 마지막 업데이트: 2026년 11월 26일 Syammasfitria Studio 및 Canva를 통한 Pexels의 Tiger Lily 주요 내용 9월 9일 Amazon을 인수한 유명 투자자 9명."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 43%, $42.4 billion, $192 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 43%, $42.4 billion, $192 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f1ffaf2db6a90dafb9ee",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "George Soros and 64 Other Big Funds Bought Meta Last Quarter. David Tepper and 33 Others Sold. Who’s Right?",
      "headlineKo": "조지 소로스(George Soros)와 64개의 다른 대형 펀드가 지난 분기에 메타를 매입했습니다. David Tepper 외 33개 판매. 누가 맞나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48fd7128b41611d3fe45f172b0f78398950cd83d69902c7a23304639355b954a",
        "publishedAt": 1795716599,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "조지 소로스(George Soros)와 64개의 다른 대형 펀드가 지난 분기에 메타를 매입했습니다.",
        "| TIKR.com General Investing George Soros 및 64개 기타 대형 펀드가 지난 분기에 메타를 매입했습니다.",
        "Roxanna Maglangit • 6분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 26일 Diego Maravilla from Diego Maravilla via Canva 주요 내용 9월에 끝난 분기에 13F를 제출한 460개 대형 펀드 중"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, $1 billion, $1.76 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, $1 billion, $1.76 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2dae1e8e06fc84abcf23",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "expectedHorizon": "단기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta Faces India Lawsuit Over 5.4 Million Content Restrictions",
      "headlineKo": "Meta, 540만 개 이상의 콘텐츠 제한에 대한 인도 소송에 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57078ac4f1cf97da28d88700a8a08d6701b3d8be0260b1de181edf4ddff5d105",
        "publishedAt": 1795716137,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta, 540만 개 이상의 콘텐츠 제한에 대한 인도 소송에 직면"
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "5022230985773e9c53a5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet Could Be the Safest Way to Own Anthropic. Here’s the Math.",
      "headlineKo": "알파벳은 인류를 소유하는 가장 안전한 방법이 될 수 있습니다. 여기 수학이 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=933686949bd26892b9dfaf34b94d6cbd056000419b49f64cfe45d4232220786b",
        "publishedAt": 1795715222,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳은 인류를 소유하는 가장 안전한 방법이 될 수 있습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147.73 비트코인 $61,702.00 +1.5% +$904.93 ANT $82.79 +1.1%",
        "Anthropic은 해당 용량을 모두 사용하는지 여부에 관계없이 2033년 중반까지 Google Cloud에 최소 1,213억 달러를 지출하기로 약속했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $121.3 billion, 1.08%, $111.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $121.3 billion, 1.08%, $111.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "40d310bce6d7b0a762e1",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "STX",
      "relatedTickers": [
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
      "headline": "Seagate Technology Got Hammered By Multiple Compression, Falling 40% in 3 Months: This Renowned Wall Street Desk Targets 185% Gains Following Earnings",
      "headlineKo": "Seagate 기술은 여러 번의 압축으로 인해 3개월 만에 40% 하락: 이 유명한 월스트리트 데스크는 수익에 따라 185%의 이익을 목표로 하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c10a01651ce11908c55b9170b4551a3d00975a090e13a15b7e069e8bf84ee73",
        "publishedAt": 1795715150,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate 기술은 여러 번의 압축으로 인해 3개월 만에 40% 하락했습니다. 이 유명한 월스트리트 데스크는 수익에 따라 185%의 이익을 목표로 합니다 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,326.00 +1.42% Dow Jones 50,884.50 +0.93% Nasdaq 100 26,781.10 +2.30% Russell 2000 2,745.78 +1.05% S&P 500 7,326.00 +1.42% 다우존스 50,884.50 +0.93% 나스닥 100 26,781.10 +2.30% 러셀 20",
        "Seagate Technology( NASDAQ:STX | STX Price Prediction )는 현재 472.33달러에 거래되고 있으며 평균 분석가 목표 가격은 1,022.75달러에 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 40%, 185%, $472.33, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 40%, 185%, $472.33, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "2535061d5b29f3978796",
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
      "headline": "Marvell Options Price In 16% Earnings-Day Stock Swing",
      "headlineKo": "16% 수익일 주식 변동에서 Marvell 옵션 가격",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4feb138a881237cdc526a5d4425cc2ac5dbd2473e6e2d4d0f67a6bb3245bc6a7",
        "publishedAt": 1795714989,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Options Price In 16% Earnings-Day Stock Swing",
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
      "id": "2fa26493bed45f4fc98f",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Stocks Fall 4.53% as TrendForce Cuts 2027 Memory Forecasts",
      "headlineKo": "TrendForce가 2027년 메모리 예측을 하향 조정함에 따라 Micron 주가는 4.53% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9955eacbddc843c2adbb7cb1fba6f8cbf11f3944f786b31f609d4a31dbed441c",
        "publishedAt": 1795713960,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TrendForce가 2027년 메모리 예측을 하향 조정함에 따라 Micron 주가는 4.53% 하락했습니다."
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
      "id": "55c339172dedf23d06e6",
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
      "headline": "Coherent’s Director Has Now Bought $50 Million of COHR Stock in 3 Trading Days",
      "headlineKo": "Coherent의 이사는 이제 3거래일 만에 5천만 달러 규모의 COHR 주식을 매입했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ed3ca7ac448a7c9a0099c9c76e211d6f15c7cb2036a7563a015dd22c556139d",
        "publishedAt": 1795713742,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Coherent의 이사는 이제 3거래일 만에 5천만 달러 규모의 COHR 주식을 매입했습니다. - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,326.20 +1.42% Dow Jones 50,864.00 +0.89% Nasdaq 100 26,800.30 +2.38% Russell 2000 2,744.28 +0.99% S&P 500 7,326.20 +1.42% 다우존스 50,864.00 +0.89% 나스닥 100 26,800.30 +2.38% 러셀 20",
        "이미지는 Coherent와 관련된 5천만 달러 상당의 구매를 강조하며 실험실 환경 내에서 첨단 기술에 대한 헌신을 보여줍니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $50 Million, $50 million, $34.65 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $50 Million, $50 million, $34.65 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "04e3a10899addf1804e7",
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
      "headline": "What Is Qualcomm (QCOM) Worth Watching In Automotive AI Right Now?",
      "headlineKo": "현재 자동차 AI 분야에서 Qualcomm(QCOM)이 주목할 가치가 있는 것은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5e8f28d7cd2aff6f9291867e211de6c944f3d290e40e6a63503ddb3594eabfe4",
        "publishedAt": 1795713007,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 QCOM의 사업과 관련된 'What Is Qualcomm (QCOM) Worth Watching In Automotive AI Right Now?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "cd8782f0be57ea16e3b2",
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
      "headline": "XPeng Raises Stakes for Tesla Stock Investors' Big Growth Bet",
      "headlineKo": "XPeng, Tesla 주식 투자자의 큰 성장 베팅에 대한 지분 인상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5777f1d88ea012ca1ab7cffab89be06bbfbdd9b9ef47bfbd0379499ec62dd200",
        "publishedAt": 1795710760,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 TSLA의 사업과 관련된 'XPeng Raises Stakes for Tesla Stock Investors' Big Growth Bet' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "74db7e49a186f661c26f",
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
      "headline": "Oracle Stock Dipped Under $100 as Banks Try to Unload Its Data-Center Loans",
      "headlineKo": "은행들이 데이터 센터 대출을 청산하려고 시도하면서 오라클 주가는 100달러 아래로 떨어졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b38f3680b51d6a13bde96978f63cd152239796efeef44f764ac4e5845c0a308c",
        "publishedAt": 1795710442,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "은행이 데이터 센터 대출을 청산하려고 시도함에 따라 Oracle 주식은 100달러 아래로 떨어졌습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,223.70 +0.66% Dow Jones 50,415.60 +0.42% Nasdaq 100 26,178.00 +0.87% Russell 2000 2,717.34 +0.57% S&P 500 7,223.70 +0.66% 다우존스 50,415.60 +0.42% 나스닥 100 26,178.00 +0.87% 러셀 20",
        "© Justin Sullivan / Getty Images 수요일 몇 분 동안 오라클(NYSE:ORCL | ORCL Price Prediction)은 2023년 12월 이후 처음으로 100달러 미만으로 거래된 99.34달러에 거래되었습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $100, $99.34,, $103.88, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $100, $99.34,, $103.88, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8fef59595c065585b853",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "NVDA"
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
      "headline": "Cerebras Expands AI Inference Reach: Can It Challenge NVDA & AMD?",
      "headlineKo": "Cerebras, AI 추론 범위 확장: NVDA 및 AMD에 도전할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=03f38cb1cb453ba672ce13a0e3df51366c1b059d752ca9fabb5702e4d1a10cb8",
        "publishedAt": 1795709640,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cerebras Expands AI Inference Reach: Can It Challenge NVDA & AMD?",
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
      "id": "27f7f93213eece923c11",
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
      "headline": "Palantir Closed 212 Deals Worth at Least $1 Million. Here’s What That Means for Its Growth",
      "headlineKo": "Palantir는 최소 100만 달러 규모의 212개 거래를 성사시켰습니다. 성장에 대한 의미는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c817d10f82c6db0f79e431bc217627194450b62f4dda53e6891a4847634169f",
        "publishedAt": 1795709007,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir는 최소 100만 달러 규모의 212개 거래를 성사시켰습니다.",
        "성장의 의미는 다음과 같습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,326.20 +1.42% Dow Jones 50,864.00 +0.89% Nasdaq 100 26,800.30 +2.38% Russell 2000 2,744.28 +0.99% S&P 500 7,326.20 +1.42% 다우존스 50,864.00 +0.89% 나스닥 100 26,800.30 +2.38% 러셀 20"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1 Million, $1 million, $5 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1 Million, $1 million, $5 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9f72290bfdc840604a77",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "WDC",
      "relatedTickers": [
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
      "headline": "Western Digital Plummets 20% Over a Month: This Wall Street Team Now Predicts 230% Gains After Earnings Re-Rating",
      "headlineKo": "Western Digital은 한 달에 걸쳐 20% 급락: 이 월스트리트 팀은 이제 수익 재평가 후 230%의 이익을 예측합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5166c9fdd26cb0a51ced91bde2057e96f9951236c3e8d1ab52f5a1ddd2be63f5",
        "publishedAt": 1795707935,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital은 한 달 동안 20% 급락했습니다: 이 월스트리트 팀은 이제 수익 재평가 후 230%의 이익을 예측합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,326.20 +1.42% Dow Jones 50,864.00 +0.89% Nasdaq 100 26,800.30 +2.38% Russell 2000 2,744.28 +0.99% S&P 500 7,326.20 +1.42% 다우존스 50,864.00 +0.89% 나스닥 100 26,800.30 +2.38% 러셀 20",
        "© Ian Tuttle / Getty Images Western Digital(NASDAQ:WDC | WDC 가격 예측)은 현재 272.45달러에 거래되고 있으며 분석가들의 합의 목표 가격은 600.46달러에 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 230%, $272.45, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, 230%, $272.45, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f05342db9b94b1a10109",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Is Seagate (STX) Down 32.3% Since Last Earnings Report?",
      "headlineKo": "Seagate(STX)가 지난 수익 보고서 이후 32.3% 하락한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de27cc3e3e0ad79c7a40ab26cad1c153403b5a639041d5609b67e769de958cab",
        "publishedAt": 1795707018,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Is Seagate (STX) Down 32.3% Since Last Earnings Report?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "f9ab51a8d504ccd9ec4d",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Can VZ's New Apple Deals and Loyalty Benefits Drive Subscriber Growth?",
      "headlineKo": "VZ의 새로운 Apple 거래 및 로열티 혜택이 구독자 증가를 촉진할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=59cfad9c0c780a8bf9be55f442088bd6535f9ab92a929129aab18428c3a9b0d9",
        "publishedAt": 1795706760,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "VZ의 새로운 Apple 거래 및 로열티 혜택이 구독자 증가를 촉진할 수 있습니까?"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "8c2861d31044716f94a5",
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
      "headline": "$2,000,000 In QQQ At The 2000 Peak Ran Out",
      "headlineKo": "2000년 정점에 QQQ에서 $2,000,000가 소진되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8e2317fecb64db0c9712126c6e48bca111ed33b0efec9f438487662b50860bca",
        "publishedAt": 1795706126,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "QQQ에서 $2,000,000가 2000년 최고치에 도달했습니다 | Trefis Trefis Storylines $2,000,000 QQQ의 2000년 최고치 소진 2026년 11월 26일 · Trefis Team QQQ YTD +3.5% SPY YTD +5.9% QQQ YTD +3.5% QQQ 분석 → 조만간 은퇴할 계획이라면",
        "나스닥 100 지수를 추적하는 펀드인 Invesco QQQ는 11월 25일 수요일 $633.93에 마감했습니다.",
        "이는 10월 6일 종가 대비 16.6% 낮은 수준이다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $2,000,000, 3.5%, 5.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $2,000,000, 3.5%, 5.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "13b3e43da253d6556417",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "MRVL",
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
      "headline": "What's Happening To Marvell's Cash Gap With Broadcom",
      "headlineKo": "Broadcom과 Marvell의 현금 격차에 무슨 일이 일어나고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89e5ce8e0372d1b8ef5e567c8c4ca8e2f6a1b7b7accb3f8aab049f3aa40eaf00",
        "publishedAt": 1795706126,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom과의 Marvell의 현금 격차에 무슨 일이 일어나고 있나요? Trefis Trefis 스토리라인 Broadcom과의 Marvell의 현금 격차에 무슨 일이 일어나고 있나요? 2026년 11월 26일 · 작성자: Trefis Team AVGO YTD -12.6% SPY YTD +5.9% QQQ YTD +3.5% AVGO 분석 → 오늘의 큰",
        "Broadcom은 Marvell Technology보다 훨씬 더 많은 매출을 현금으로 전환합니다.",
        "지난 4분기 동안 Broadcom은 매출의 44.2%를 잉여현금흐름으로 유지했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12.6%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12.6%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e05940683fd0735985a8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "How Much Of KLA Stock's Rise Did The Business Earn?",
      "headlineKo": "KLA 주식 상승 중 회사는 얼마나 수익을 냈나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30d265846a01de02c4743ef91327ab7c72094de437ae394af70e514f347228dc",
        "publishedAt": 1795706126,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA 주식 상승 중 회사는 얼마나 수익을 냈나요?",
        "| Trefis Trefis 스토리라인 KLA 주식 상승 중 회사는 얼마나 많은 수익을 올렸습니까?",
        "2026년 11월 26일 · Trefis Team KLAC YTD +11.0% SPY YTD +5.9% QQQ YTD +3.5% KLAC 분석 → KLA Corporation은 칩을 만드는 동안 결함이 있는지 확인하는 기계인 프로세스 제어 도구를 판매합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 11.0%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11.0%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fa5bff0db174c173a8b4",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "AMD",
        "ETN",
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
      "headline": "Global Aircraft Emergency Oxygen System Market Report 2026 | Capitalize on 8.8% CAGR Through 2030 with Safran, Honeywell, Eaton, Liebherr-Aerospace and AMETEK",
      "headlineKo": "글로벌 항공기 비상 산소 시스템 시장 보고서 2026 | Safran, Honeywell, Eaton, Liebherr-Aerospace 및 AMETEK을 통해 2030년까지 CAGR 8.8%를 활용하세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=444c5d7b28d221718c5f7a244c00cb3785caf9bafcf18310a366db5cab4b2d05",
        "publishedAt": 1795703280,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 ETN의 사업과 관련된 'Global Aircraft Emergency Oxygen System Market Report 2026 | Capitalize on 8.8% CAGR Through 2030 with Safran, Honeywell, Eaton, Liebherr-Aerospace and AMETEK' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "6014b7ebca3c6822b1a0",
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
      "headline": "Jim Cramer Says Micron Stock Is “Comically Cheap” at About 3 Times Earnings",
      "headlineKo": "Jim Cramer는 Micron 주식이 약 3배의 수익으로 \"우스꽝스러울 정도로 저렴하다\"고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5f53062f961ffc74408216d3f8efb8086acc0f8baae397f44fad0569f4fd976",
        "publishedAt": 1795701219,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Cramer는 Micron 주식이 약 3배의 수익으로 \"우스꽝스러울 정도로 저렴하다\"고 말합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,227.00 +0.70% Dow Jones 50,390.40 +0.37% Nasdaq 100 26,199.00 +0.95% Russell 2000 2,713.07 +0.41% S&P 500 7,227.00 +0.70% 다우존스 50,390.40 +0.37% 나스닥 100 26,199.00 +0.95% 러셀 20",
        "© IMDB Jim Cramer의 CNBC Investing Club은 수요일 오후 Homestretch 노트에서 Micron Technology(NASDAQ:MU | MU Price Prediction)를 \"우스꽝스러울 정도로 저렴하다\"고 표현했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3 Times, $548.13., 33.47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3 Times, $548.13., 33.47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7127bb9d2122eea124c3",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Is Down 47% in 2026. Is There Really a “Reasonable Chance Oracle Goes Bankrupt”?",
      "headlineKo": "오라클은 2026년에 47% 하락했습니다. 정말로 \"오라클이 파산할 합리적인 기회\"가 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=216f6001e12a3a527142de5c03db0f20a43df9c178706e609c0c3c74b741ece8",
        "publishedAt": 1795701019,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "정말로 \"오라클이 파산할 합리적인 기회\"가 있습니까?",
        "| TIKR.com General Investing Oracle은 2026년에 47% 하락했습니다.",
        "정말로 \"오라클이 파산할 합리적인 기회\"가 있습니까?"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 47%, $17.5 billion, $30 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 47%, $17.5 billion, $30 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2d5a64c540a03609d300",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Hold $500,000 of Apple in an IRA and Your Kids Inherit a Tax Bill on Every Dollar. Hold the Same Shares in a Brokerage Account and They Can Sell the Day After You Die and Owe Nothing",
      "headlineKo": "IRA에 $500,000의 Apple 주식을 보유하면 귀하의 자녀가 모든 달러에 대해 세금 고지서를 상속받게 됩니다. 중개 계좌에 동일한 주식을 보유하면 귀하가 사망한 다음날 팔 수 있으며 빚이 없습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5df173fa6a9ffb12cebf74276e03746a82ac73911269eaf137b6c5deecd6edfa",
        "publishedAt": 1795700514,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "IRA에 $500,000의 Apple 주식을 보유하면 귀하의 자녀가 모든 달러에 대해 세금 고지서를 상속받게 됩니다.",
        "중개 계좌에 동일한 주식을 보유하면 사망한 다음날 팔아도 빚이 없습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,227.00 +0.70% Dow Jones 50,390.40 +0.37% Nasdaq 100 26,199.00 +0.95% Russell 2000 2,713.07 +0.41% S&P 500 7,227.00 +0.70% 다우존스 50,390.40 +0.37% 나스닥 100 26,199.00 +0.95% 러셀 20"
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $500,000, $60,000, $100,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $500,000, $60,000, $100,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "a41bcbcd6e901507a946",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "How Will Oracle's Heavy AI Spending Shape the Stock's Cash Flow Trend?",
      "headlineKo": "Oracle의 과도한 AI 지출이 주식의 현금 흐름 추세를 어떻게 형성할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6745113b7896266c57b94f61f2e1fe5cabefd0b49c047c86be2e92d289d36353",
        "publishedAt": 1795700460,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle의 과도한 AI 지출이 주식의 현금 흐름 추세를 어떻게 형성할까요?"
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
      "id": "b8a44f199e33a30805b2",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Wall Street's Insights Into Key Metrics Ahead of Salesforce (CRM) Q3 Earnings",
      "headlineKo": "Salesforce(CRM) 3분기 수익에 앞서 주요 지표에 대한 월스트리트의 통찰력",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e1b68ecf3463bfe9079dfd1d7e9feac10b365ecf515d84745b008f8e8d799c4",
        "publishedAt": 1795698902,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wall Street's Insights Into Key Metrics Ahead of Salesforce (CRM) Q3 Earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "c0c59964d10b6a5b6c38",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "An Apple Executive Just Filed to Sell $19 Million of Apple Stock With Shares a Hair Below Their Record",
      "headlineKo": "Apple 임원이 사상 최고치보다 낮은 주가로 1,900만 달러 규모의 Apple 주식을 매각하겠다고 방금 신청했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0b2176c87cc2467f6a3be423a549dd918bd7cec8a863f6442c3787928cdaa3b",
        "publishedAt": 1795697875,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple 임원이 1,900만 달러 규모의 Apple 주식을 매도하겠다고 신청했습니다. 주가는 기록적인 수준보다 낮습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,227.00 +0.70% Dow Jones 50,390.40 +0.37% Nasdaq 100 26,199.00 +0.95% Russell 2000 2,713.07 +0.41% S&P 500 7,227.00 +0.70% 다우존스 50,390.40 +0.37% 나스닥 100 26,199.00 +0.95% 러셀 20",
        "© Antony Jones / Getty Images Apple과 연계된 신탁(NASDAQ:AAPL | AAPL 가격 예측) Sabih Khan 최고 운영 책임자(COO)는 SEC에 양식 144를 제출했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $19 Million, $19,216,010,, $349.38 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $19 Million, $19,216,010,, $349.38 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "78b4293e28b885f5207e",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "GOOGL",
        "MU",
        "ORCL",
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
          "name": "Broadcom",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tepper Trims Alphabet by ~46% and Dumps Broadcom & AMD While Backing Micron and Oracle",
      "headlineKo": "Tepper는 알파벳을 46%까지 줄이고 Micron과 Oracle을 지원하면서 Broadcom과 AMD를 제치고",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8bdc426d908017f10bca2c77adfabda1a60a7364765a771393f3e9e5e31e66b7",
        "publishedAt": 1795695305,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tepper는 알파벳을 최대 46%까지 자르고 Micron과 Oracle을 지원하면서 Broadcom과 AMD를 제치고 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,227.00 +0.70% Dow Jones 50,390.40 +0.37% Nasdaq 100 26,199.00 +0.95% Russell 2000 2,713.07 +0.41% S&P 500 7,227.00 +0.70% 다우존스 50,390.40 +0.37% 나스닥 100 26,199.00 +0.95% 러셀 20",
        "© Scott Cunningham / Getty Images Sport via Getty Images Micron Technology(NASDAQ:MU | MU Price Prediction)와 Oracle(NYSE:ORCL)은 David Tepper가 지난 분기에 추가한 두 개의 AI 주식입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 46%, $1.33 billion, 17.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 46%, $1.33 billion, 17.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "acef17698a1c091172b4",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "GOOGL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
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
      "headline": "UBS’s $425 Target Says Broadcom’s Selloff Went Too Far",
      "headlineKo": "UBS의 425달러 목표는 Broadcom의 매각이 너무 멀리 갔다고 말합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddb6b035b8e9da0e66351567114e458711fab79ead56c81a3d766b3bc161500e",
        "publishedAt": 1795693883,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "UBS의 425달러 목표는 Broadcom의 매각이 너무 심했다고 말합니다 | TIKR.com General Investing UBS의 425달러 목표는 Broadcom의 매각이 너무 멀리 갔다고 말합니다 Wiltone Asuncion • 5분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 26일 mmac72",
        "Google이 Broadcom이 설계한 TPU 8i 칩의 2027년 출하량을 약 20% 줄였다는 보고가 나온 후 칩 전반에 걸쳐 매도세를 보였습니다. 두 회사 모두 이에 대해 확인하지 않았습니다.",
        "2028 회계연도 수익 추정치에 따르면 425달러는 11월 1일에 거래된 Broadcom의 17배보다 낮은 14배입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $425, 37.5%, $470 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $425, 37.5%, $470 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "31c3e7b6b6099ac7b563",
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
      "headline": "JPMorgan Says S&P Could Waive Its Rules for a Tesla-SpaceX Merger. That’s Good News for SpaceX Holders",
      "headlineKo": "JPMorgan은 S&P가 Tesla-SpaceX 합병에 대한 규칙을 포기할 수 있다고 말했습니다. SpaceX 보유자에게는 좋은 소식입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca7788213e9a1f61b0dd77cfccf3f504925b8609a8a56d277921da43433e570a",
        "publishedAt": 1795693559,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JPMorgan은 S&P가 Tesla-SpaceX 합병에 대한 규칙을 포기할 수 있다고 말했습니다.",
        "SpaceX 보유자에게 좋은 소식입니다 | TIKR.com 일반 투자 JPMorgan은 S&P가 Tesla-SpaceX 합병에 대한 규칙을 포기할 수 있다고 말했습니다.",
        "SpaceX 보유자에게 좋은 소식입니다 Gian Estrada • 5분 읽기 검토자: David Hanson 마지막 업데이트: 2026년 11월 26일 NASA/Kim Shiflett 및 SUMALI IBNU CHAMID(Alemedia.id(Canva를 통해 제공)) 핵심 사항 Tesla와 SpaceX는 11월 초에 침몰했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.3%, 1.2%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.3%, 1.2%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6bfbeb30f2033393e478",
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
      "headline": "'Where Will That Come From?': Elon Musk Warns AI Firms Need Hundreds of Billions in Working Capital as Oracle Says It's Covered",
      "headlineKo": "'그것은 어디서 나올까?': Elon Musk는 Oracle이 언급한 대로 AI 기업에 수천억 달러의 운전 자본이 필요하다고 경고합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7e059000bf0610d271662c6e6da88614c059a977e5c6af9c3caa941eef4e0101",
        "publishedAt": 1795693510,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 ORCL의 사업과 관련된 ''Where Will That Come From?': Elon Musk Warns AI Firms Need Hundreds of Billions in Working Capital as Oracle Says It's Covered' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ec9358c78f42c96283c1",
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
      "headline": "Bloom Energy Issued Oracle 2.15 Million Shares. Now Oracle’s Credit Is Cracking",
      "headlineKo": "Bloom Energy는 Oracle 215만주를 발행했습니다. 이제 오라클의 신용이 깨지고 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5cf2f4b5ff4ec31e779c49bc9412efece52ac42cad704f1508a011af50301117",
        "publishedAt": 1795692926,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bloom Energy는 Oracle 215만주를 발행했습니다.",
        "이제 오라클의 신용이 깨지고 있습니다 | TIKR.com 일반 투자 Bloom Energy는 Oracle 215만 주를 발행했습니다.",
        "이제 Oracle의 신용이 무너지고 있습니다. Wiltone Asuncion • 6분 읽기 검토자: Michael Douglass 최종 업데이트: 2026년 11월 26일 Getty Images Signature의 mmac72, Canva를 통한 Getty Images의 Andrei Berezovskii 주요 내용 Bloom Energy는 m만큼 떨어졌습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, 2.25%, $306.5 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, 2.25%, $306.5 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "da94b5345b89b4469c13",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "importance": "low",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "MiniMax Faces Revenue Risks as Apple Removes Talkie AI Chatbot",
      "headlineKo": "MiniMax는 Apple이 Talkie AI Chatbot을 제거함에 따라 수익 위험에 직면했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b44a028054848b4224e714e4580d92c3b0eafae358513d01bbfb7f912e02f552",
        "publishedAt": 1795692837,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MiniMax Faces Revenue Risks as Apple Removes Talkie AI Chatbot",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'MiniMax Faces Revenue Risks as Apple Removes Talkie AI Chatbot' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b4533e84bc615ec88d5c",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Does Black Friday Ever Move Amazon Stock?",
      "headlineKo": "블랙 프라이데이가 Amazon 주식을 움직인 적이 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a248a4254326c9c334673e5463a694d12c27899d6e09c9e31b73f600810f1568",
        "publishedAt": 1795692596,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "블랙 프라이데이가 Amazon 주식을 움직인 적이 있나요?",
        "| Trefis Trefis 스토리 블랙 프라이데이가 Amazon 주식을 움직인 적이 있습니까?",
        "2026년 11월 26일 · Trefis 팀 AMZN YTD +5.9% SPY YTD +5.9% XLY YTD -1.0% AMZN 분석 → 블랙 프라이데이가 내일입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.9%, 1.0%, 0.03% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.9%, 1.0%, 0.03% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "124e5e650e14ed097a8b",
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
      "headline": "Taiwan Semiconductor Manufacturing (TSM) May Make Its $22.6 Billion Texas Plant Conditional",
      "headlineKo": "Taiwan Semiconductor Manufacturing (TSM)은 226억 달러 규모의 텍사스 공장을 조건부로 만들 수도 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d91a6b15adcad438e6da7967d4a690093470026f3d866f56905de994949363a4",
        "publishedAt": 1795691454,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 TSM의 사업과 관련된 'Taiwan Semiconductor Manufacturing (TSM) May Make Its $22.6 Billion Texas Plant Conditional' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b6f94f45bf5ed8c67fda",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "ORCL",
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
      "headline": "What's Happening To Amazon And CoreWeave's Debt?",
      "headlineKo": "Amazon과 CoreWeave의 부채는 어떻게 되나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2f04636a6c47fc970bd019c82066156744d22c84a8c1de6cd2e1e99b2b44b5b8",
        "publishedAt": 1795691211,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon과 CoreWeave의 부채는 어떻게 되나요?",
        "| Trefis Trefis 스토리라인 Amazon과 CoreWeave의 부채에 무슨 일이 일어나고 있나요?",
        "2026년 11월 26일 · 작성자: Trefis Team ORCL YTD -46.0% SPY YTD +5.9% QQQ YTD +3.5% ORCL 분석 → 가장 큰 AI 지출자가 열심히 차입하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 46.0%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 46.0%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "08bd655f6a4bdea3e731",
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
      "headline": "“Another Record Year”: Applied Materials CEO Bets on 2027 as Chip Stocks Slide",
      "headlineKo": "“또 다른 기록적인 해”: 어플라이드 머티어리얼즈 CEO, 칩 주가 하락으로 2027년에 베팅",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b1c6e02aba12b0430064804ee4e2e2dca52627a2f067cd5b007355fbfa068ea",
        "publishedAt": 1795687194,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "“또 다른 기록적인 해”: 어플라이드 머티어리얼즈 CEO, 칩 주가 하락으로 2027년에 베팅 | TIKR.com General 투자 \"또 다른 기록적인 해\": Applied Materials CEO, 칩 주식 슬라이드로 2027년에 베팅 Rexielyn Diaz • 5분 읽기 검토자: David Hans",
        "CEO 게리 디커슨(Gary Dickerson)은 2027년이 웨이퍼 팹 장비 수요가 30% 이상 증가하는 “또 하나의 기록적인 해”가 될 것으로 예상하고 있습니다.",
        "좋은 결과에도 불구하고 칩 매각과 중국 공구 판매에 대한 MATCH 법안 제안은 장비 제조업체에 부담을 주고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 53%, $10.41 billion, $11.1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 53%, $10.41 billion, $11.1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ae64a3e110f2fa232dfe",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM"
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
      "headline": "Arm Drops 20% in a Week as AI Chips Slide. CEO Rene Haas Has “Never Been More Confident”",
      "headlineKo": "AI 칩 슬라이드로 Arm이 일주일 만에 20% 하락합니다. CEO 르네 하스(Rene Haas)는 \"이보다 더 자신감이 있었던 적은 없었다\"",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2027e75ac8d19dc9ce0574430e4181ef40670bab8581f1d75824f49f6e255bb7",
        "publishedAt": 1795685468,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 칩 슬라이드로 Arm이 일주일 만에 20% 하락합니다.",
        "CEO 르네 하스(Rene Haas)는 “이보다 더 자신감이 넘쳤습니다” | TIKR.com 일반 투자 부문은 AI 칩 슬라이드로 일주일 만에 20% 하락합니다.",
        "Rene Haas CEO는 \"그 어느 때보다 자신감이 넘쳤습니다\" Rexielyn Diaz • 4분 읽기 검토자: David Hanson 마지막 업데이트: 2026년 11월 26일 아프리카 이미지 및 Ruslan Lytvyn과 함께 Зображення користувача Руслан Литвин via Canva 주요 사항 Arm fall"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 86%, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, 86%, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "78870d0ef302b719a327",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMD",
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
      "headline": "Bad News for Intel: Dell Says Companies Are “Deferring Their PC Purchases” for AI Servers",
      "headlineKo": "인텔에 대한 나쁜 소식: Dell은 기업들이 AI 서버를 위해 \"PC 구매를 연기\"하고 있다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf806c87bc09f123ed7e89090174206ef3f2ff7c28eeed0b167f418ebbe3d8a5",
        "publishedAt": 1795683021,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔에 대한 나쁜 소식: Dell은 기업들이 AI 서버용으로 \"PC 구매를 연기\"하고 있다고 밝혔습니다. TIKR.com 일반 인텔에 대한 나쁜 소식 투자: Dell은 기업들이 AI 서버에 대한 \"PC 구매를 연기\"하고 있다고 말합니다 Gian Estrada • 5분 읽기 Re",
        "Intel은 지난 분기에 PC 칩을 14% 적게 판매했으며, CFO는 PC 둔화가 적어도 2027년 상반기까지 지속될 것으로 예상하고 있습니다.",
        "Intel의 CEO는 자신은 데이터 센터 칩을 충분히 만들 수 없으며 AMD는 Intel이 할 수 없는 방식으로 PC에서 서버로 공급을 전환할 수 있다고 말했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, 14%, 198% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, 14%, 198% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "89d131430a6e6b0016b6",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AVGO",
        "GOOGL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
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
      "headline": "Broadcom Sinks 15% in a Week to a 52-Week Low as Google Reportedly Cuts TPU Orders. Is the Selling Overdone?",
      "headlineKo": "Google이 TPU 주문을 삭감한 것으로 알려지자 Broadcom은 일주일 만에 15% 하락하여 52주 최저치를 기록했습니다. 판매가 과도합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f3e25b8b6dc31052278b99a543bbc59832541a1aad00ce40a8ece1e6c868983",
        "publishedAt": 1795681834,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google이 TPU 주문을 삭감한 것으로 알려지자 Broadcom은 일주일 만에 15% 하락하여 52주 최저치를 기록했습니다.",
        "| Google이 TPU 주문을 삭감한 것으로 알려진 TIKR.com General Investing Broadcom은 일주일 만에 15% 하락하여 52주 최저치를 기록했습니다.",
        "Wiltone Asuncion • 4분 읽기 검토자: Michael Douglass 최종 업데이트 2026년 11월 26일 @Kittipong Jirasukhanont from PhonlamaiPhoto의 이미지(Canva를 통해 제공) 주요 사항 Broadcom은 지난 주에 15% 하락했으며 52주 최저치를 기록했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 15%, 20%, $278 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 15%, 20%, $278 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0da68966a0c1321277a8",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML"
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
      "headline": "ASML Sinks 7% in a Week: Dutch Lawmaker Warns the MATCH Act Is “Disastrous for ASML.” Time to Buy?",
      "headlineKo": "ASML은 일주일 만에 7% 하락: 네덜란드 국회의원은 MATCH 법안이 \"ASML에 재앙\"이라고 경고했습니다. 구매할 시간인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f809c648dfabb7b08485d594d6711ffcaeb0308b60aae072f62ee9789d49344a",
        "publishedAt": 1795681730,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML은 일주일 만에 7% 하락: 네덜란드 국회의원은 MATCH 법안이 \"ASML에 재앙\"이라고 경고했습니다. 구매할 시간인가요?",
        "| TIKR.com 일반 투자 ASML은 일주일 만에 7% 하락: 네덜란드 국회의원은 MATCH 법이 \"ASML에 재앙\"이라고 경고했습니다. 구매할 시간인가요?",
        "Wiltone Asuncion • 4분 읽기 검토자: Michael Douglass 최종 업데이트 2026년 11월 26일 DragonImages, Kittipong Jirasukhanont from PhonlamaiPhoto's Images via Canva 주요 내용 ASML 주가는 지난 주 칩 매도세로 인해 7% 하락했으며 A"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 12%, $10.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ASML에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 7%, 12%, $10.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "997a9bf532496c63c714",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Lumentum Sinks 14% in a Week as AI Stocks Slide, but Its CEO Says “We Haven’t Seen Any Slowdown”",
      "headlineKo": "Lumentum은 AI 주가 하락으로 일주일 만에 14% 하락했지만 CEO는 \"우리는 둔화를 보지 못했다\"고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=79733b3fe30ffb3b3000e0713f8043abdba8bc82becd03b538c4d3f202f6cc59",
        "publishedAt": 1795681663,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum은 AI 주식이 하락하면서 일주일 만에 14% 하락했지만 CEO는 \"우리는 어떤 둔화도 보지 못했습니다\"라고 말합니다 | TIKR.com General Investing Lumentum은 AI 주식이 하락하면서 일주일 만에 14% 하락했지만 CEO는 \"우리는 어떤 둔화도 보지 못했다\"고 말합니다. Wiltone Asuncion",
        "루멘텀의 사업은 둔화될 기미가 보이지 않습니다.",
        "19일에는 아무런 둔화도 보이지 않았고, 11월에는"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 14%, 13.5%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 14%, 13.5%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8f6bd3cd06ec98df8733",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Is Down 22% From Its October High. Dan Ives Puts It Among the Sell-Off’s “Clear Areas of Safety”",
      "headlineKo": "Palantir는 10월 최고치보다 22% 하락했습니다. Dan Ives는 이를 매도의 \"명확한 안전 영역\"에 포함시켰습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d1b192e42b031cf34fc56d193d1c013d911b83e949489e1220a4bc20e6c0098",
        "publishedAt": 1795681576,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir는 10월 최고치보다 22% 하락했습니다.",
        "Dan Ives는 이를 매도의 \"명확한 안전 영역\"에 포함시켰습니다 | TIKR.com General Investing Palantir는 10월 최고치보다 22% 하락했습니다.",
        "Dan Ives는 매도의 \"명확한 안전 영역\"에 이를 포함시켰습니다. Wiltone Asuncion • 읽기 5분 검토자: Michael Douglass 최종 업데이트: 2026년 11월 26일 @Creativa 이미지(Canva를 통해); Canva를 통한 Sorapop Udomsri의 @Sorapop Udomsri 주요 내용"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 22%, 96%, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 22%, 96%, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "527c8203e273d932b8ea",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "LRCX",
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
      "headline": "Lam Research: Cheaper, Not Cheap",
      "headlineKo": "Lam Research: 더 저렴하지만 저렴하지는 않습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=38b06e49842fe2035f0bcacf7b6e41d6b85a8e1416176cd4d9e9db2395451692",
        "publishedAt": 1795680409,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research: 저렴하지만 저렴하지는 않음(NASDAQ:LRCX) | Seeking Alpha Luca Socci Investing Group 요약 팔로우 Lam Research는 최근 AI 가치 사슬 매도세에도 불구하고 주기적인 성장률을 보이는 장기 성장 시장에서 운영하고 있습니다.",
        "메모리 설비투자 확대와 칩 레이어 증가로 인해 서비스 가능한 설치 기반이 증가하면서 LRCX의 증착 및 식각 장비에 대한 수요가 증가할 것으로 보입니다.",
        "고객 집중화, 메모리 투자 주기성, 중국 수출 규제 등 리스크는 여전히 남아있다. 지난 두 번의 메모리 사이클 동안 영업 마진은 일반적으로 20% 이상을 유지했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LRCX에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 20%, 80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7ea5b3dee28f5f4f3e3c",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft: Invite Copilot To Thanksgiving Dinner",
      "headlineKo": "마이크로소프트: 추수감사절 만찬에 부조종사 초대",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2ede980a35f3b6f66bed0acdf99d20bf1fa4ba27cc85718bbbd40699e32d2c63",
        "publishedAt": 1795680000,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft: 추수감사절 만찬에 부조종사 초대(NASDAQ:MSFT) | Seeking Alpha Treading Softly Investing Group 팔로우 요약 Microsoft는 클라우드 및 AI 성장과 배당금 증가 및 연간 20% 이상의 잠재력을 결합하여 \"매수\" 상태를 유지하고 있습니다.",
        "MSFT의 Azure 성장은 48%로 가속화되었으며, 상업 백로그는 73% 증가하여 6,770억 달러를 기록했습니다. Copilot 및 E7 상향 판매는 기업 수익 창출을 지원합니다.",
        "$497.43에 MSFT는 공정 가치 배수 28배 대비 선도 수익 24.5배로 거래됩니다. 0.7%의 수익률은 매년 8~10% 성장할 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 48%, 73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, 48%, 73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7b1dd28cddfb64e5f163",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "122% Upside for Seagate? Citi Thinks So, and Here’s How",
      "headlineKo": "Seagate의 상승여력은 122%? Citi는 그렇게 생각하며 그 방법은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=35e2b4680ce3710a3a6681d196aa35fe8800ca3fb804e6aa20095d7ea93cda20",
        "publishedAt": 1795673985,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citi는 그렇게 생각하며 그 방법은 다음과 같습니다 | TIKR.com 일반 Seagate의 122% 상승여력 투자?",
        "Citi의 생각, 그리고 방법은 다음과 같습니다. Bobby Sankhagowit • 4분 읽기 검토자: David Hanson 최종 업데이트 2026년 11월 26일 Canva를 통한 magraphics의 @Mile Atanasov, Canva를 통한 Pexels의 @Azamat Esenaliev 핵심 사항 Citi는 매수 전략을 반복했습니다.",
        "25일 종가는 6월 종가보다 57% 낮은 수준입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 122%, $1,050, 57% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 122%, $1,050, 57% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "0d52449b10eb01955396",
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
      "headline": "How Investors May Respond To Constellation Energy Stock After Earnings Estimate Upgrades",
      "headlineKo": "수익 추정 업그레이드 후 투자자가 Constellation Energy 주식에 반응할 수 있는 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0af89655cecebe80cf8a10eeca632b2264e64ec915862d65c234deef04b85c2",
        "publishedAt": 1795673707,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "How Investors May Respond To Constellation Energy Stock After Earnings Estimate Upgrades",
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
      "id": "38dd856fd32020b6509d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
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
      "headline": "ANT, NVDA Slide Tests Investor Resolve, Software Firms Post Sharp Growth",
      "headlineKo": "ANT, NVDA 슬라이드 테스트 투자자 결의, 소프트웨어 회사 포스트 급격한 성장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=21df9492788bb247bd105596f3ede6962cc85b154b8d2a0231b677df9e3342c5",
        "publishedAt": 1795671214,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ANT, NVDA 슬라이드 테스트 투자자 해결, 소프트웨어 회사 포스트 급격한 성장 AI 에이전트 동향 뉴스 수익 전체 DIA 0.85% SPY 0.23% QQQ 0.23% 동향 QNT 8.84% INFQ 4.10% XPEV 0.44% USO 3.23% SNY 5.09% UEC 3.23% XLV 0.38% PENG 2.17% SCO 3.16%",
        "ANT, NVDA 슬라이드 테스트 투자자 결의, 소프트웨어 기업 포스트 급격한 성장 투자자들은 추수감사절 주간에 극심한 변동성에 직면했습니다.",
        "트레이더들이 2026년 11월 6일 뉴욕시 뉴욕증권거래소(NYSE) 1층에서 일하고 있다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.85%, 0.23%, 8.84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.85%, 0.23%, 8.84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9a67161785d7d66a5eb8",
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
      "headline": "SpaceX Reportedly Slashes Some Nvidia Chip Rents — AI Researcher Sees Musk’s Edge In A GPU Glut",
      "headlineKo": "SpaceX는 일부 Nvidia 칩 임대료를 인하한 것으로 알려졌습니다. AI 연구원은 GPU 과잉에서 머스크의 우위를 확인합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0274b704585d2a8c24471e77cd4094530c23fcb51d2bb7dd82131efd4190bffa",
        "publishedAt": 1795671175,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX는 일부 Nvidia 칩 임대료를 인하한 것으로 알려짐 - AI 연구원은 GPU 과잉 AI 에이전트에서 Musk의 우위를 확인 APLD 4.",
        "SpaceX는 일부 Nvidia 칩 임대료를 인하한 것으로 알려졌습니다. AI 연구원은 GPU 과잉에서 Musk의 우위를 확인했습니다. SpaceX는 Anthropic에 임대한 50,000개의 H200 칩에 대한 새로운 임차인을 찾고 있는 것으로 알려졌습니다.",
        "2026년 10월 26일 중국 후베이성 ​​이창시의 스마트폰에 SpaceX 로고가 표시된 스마트폰에 표시된 Nvidia의 주가."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.85%, 0.23%, 8.84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.85%, 0.23%, 8.84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "42e812654abd0a40dd9e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "2 Ways Anthropic's IPO Pays Off for Alphabet Investors",
      "headlineKo": "Anthropic의 IPO가 Alphabet 투자자들에게 이익이 되는 2가지 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f795e97b828fe75c0ad5b79dca686f5a424cf13254852e72294887e130361a3",
        "publishedAt": 1795670402,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Anthropic의 IPO가 Alphabet 투자자에게 이익을 주는 2가지 방법 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147",
        "Anthropic은 IPO를 통해 810억 달러 이상을 조달했으며, 이로 인해 회사와 Alphabet의 주요 거래가 크게 위태로워졌습니다.",
        "Anthropic에 대한 Alphabet의 지분이 없더라도 회사의 클라우드 수익 증가, TPU 판매 확대, 저렴한 주가로 인해 주식을 매수할 수 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $81 billion, 1.08%, $81.3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $81 billion, 1.08%, $81.3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "08c9b0e7548b83f9f21e",
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
      "headline": "Kioxia and NVIDIA Collaborate to Expand Effective High-Bandwidth Memory Capacity with SSDs",
      "headlineKo": "Kioxia와 NVIDIA가 SSD를 통해 효과적인 고대역폭 메모리 용량 확장을 위해 협력",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4477e5e6603d215bdd29c214b86d6e011582231a752e552d2208785d3e37ae7e",
        "publishedAt": 1795666740,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Kioxia와 NVIDIA가 SSD를 통해 효과적인 고대역폭 메모리 용량 확장을 위해 협력"
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
      "id": "1289100cec301fe3df4c",
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
      "headline": "Cathie Wood Buys More SpaceX Amid Tesla Merger Talks — Ron Baron Says SpaceX Could Make $50B A Year From One Data Center",
      "headlineKo": "Cathie Wood는 Tesla 합병 협상 중에 SpaceX를 더 많이 구매합니다. Ron Baron은 SpaceX가 하나의 데이터 센터에서 연간 500억 달러를 벌 수 있다고 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e20a1c6864b0638103683a558a2c7228a0744bf93030d68b2b61b1dbc26e5cd8",
        "publishedAt": 1795663955,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cathie Wood는 Tesla 합병 협상 중에 SpaceX를 더 많이 구매합니다. Ron Baron은 SpaceX가 하나의 데이터 센터 AI 에이전트에서 연간 500억 달러를 벌 수 있다고 말합니다.",
        "Cathie Wood, Tesla 합병 협상 중에 SpaceX 추가 구매 — Ron Baron은 SpaceX가 하나의 데이터 센터에서 연간 500억 달러를 벌 수 있다고 말합니다. 영향력 있는 Alexandra Merz는 Goldman Sachs와 Morgan Stanley가 SpaceX를 인수하는 데 도움을 주었기 때문에 합병 우위를 제공한다고 말합니다.",
        "Baron Capital의 설립자이자 최고경영자(CEO)인 Ron Baron이 12월 12일 월요일 뉴욕 증권 거래소에서 Baron Active ETF 출시 행사에 참석했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $50, 0.85%, 0.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $50, 0.85%, 0.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a3605efe6f4a379d855e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "NVDA",
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
      "headline": "Nvidia’s Market Cap Falls Below Microsoft’s: Analyst Flags Five Overhangs For NVDA Stock",
      "headlineKo": "Nvidia의 시가총액은 Microsoft보다 낮습니다. 분석가는 NVDA 주식에 5가지 오버행이 있다고 지적합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93e694d0d5d96ee714e44261e18d84fe92e620d072c98af04c437fc031464488",
        "publishedAt": 1795660782,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia의 시가총액은 Microsoft보다 낮습니다. 분석가는 NVDA 주식 AI 에이전트의 5가지 오버행을 표시합니다. Trending News Earnings All DIA 0.85% SPY 0.23% QQQ 0.23% Trending QNT 8.84% INFQ 4.10% USO 3.23% XPEV 0.44% SNY 5.09% UEC 3.23% APLD 4.50% ORC",
        "엔비디아의 시가총액은 마이크로소프트보다 낮아졌습니다: 분석가는 NVDA 주식의 5가지 오버행을 지적했습니다. 엔비디아 주가는 수요일에 거의 4% 하락하여 칩 제조업체를 미국에서 3위로 끌어내렸습니다.",
        "2023년 12월 30일 벨기에 브뤼셀에서 촬영된 이 사진 그림에서 스마트폰은 NVIDIA 칩을 배경으로 나스닥 시장의 NVIDIA Corporation 주식 가격을 표시하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.85%, 0.23%, 8.84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.85%, 0.23%, 8.84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ada53346c8d7f3ded74b",
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
      "headline": "Why Retail Investors Are Watching AMD and AI Infrastructure Stocks After SpaceX Satellite News",
      "headlineKo": "소매 투자자들이 SpaceX 이후 AMD 및 AI 인프라 주식을 주목하는 이유 위성 뉴스",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=442e0173216e5623398d76d234b8bed3cc7fb6ba4864c58911444a33195f4caa",
        "publishedAt": 1795659135,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 AMD의 사업과 관련된 'Why Retail Investors Are Watching AMD and AI Infrastructure Stocks After SpaceX Satellite News' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a138c2896cea0d6fe105",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Broadcom: Why The Market Is Wrong To Sell",
      "headlineKo": "Broadcom: 시장에서 판매가 잘못된 이유",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=dc248dc804f8a89f5070370cb339d0208eedbd91657c66fdf0d643786c6e7967",
        "publishedAt": 1795658620,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom: 시장에서 매도하는 것이 잘못된 이유(NASDAQ:AVGO) | 알파 추구 품질 성장 투자자 402명의 팔로워 팔로우 요약 저는 Broadcom Inc.에서 구매를 $442에서 $385로 인하한 공정 가치로 다시 한번 강조합니다. 주가는 7월 이후 20% 하락했다.",
        "3분기 회계연도 매출은 전년 동기 대비 86% 증가했으며, 영업 레버리지로 인해 GAAP 영업 마진은 53.9%, 잉여 현금 흐름은 매출의 46%로 향상되었습니다.",
        "AI 수익에서 네트워킹의 점유율은 27%로 감소하여 AVGO의 해자를 약화시켰습니다. 높은 20대 점유율을 유지하는 것이 여전히 중요한 테스트입니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $385, $442, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $385, $442, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "14c50d74359d491630c6",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Big AI Buyers Want a Second Source. Is AMD (AMD) It?",
      "headlineKo": "대형 AI 구매자는 두 번째 소스를 원합니다. AMD(AMD)인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=386a5a97e9cde7407e154a7f4ac01e84d15d15b708941326f8a277c6694fb8da",
        "publishedAt": 1795654562,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Big AI Buyers Want a Second Source. Is AMD (AMD) It?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "고객의 공급처 다변화는 공급 안정성에는 긍정적이지만 기존 공급사에는 점유율·가격 협상력 위험이 될 수 있습니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 고객 공급망 다변화 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "고객이 한 회사에만 의존하지 않으려는 움직임입니다. 기존 공급사의 매출이 바로 줄었다는 뜻은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "고객의 공급처 다변화는 공급 안정성에는 긍정적이지만 기존 공급사에는 점유율·가격 협상력 위험이 될 수 있습니다.",
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
        "공급사별 물량 배분",
        "기존 계약 유지 여부",
        "다음 실적 고객 집중도"
      ]
    },
    {
      "id": "d740df005a99ee1db247",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Applied Materials (AMAT) Supplies Almost Every Fab. Is That Enough?",
      "headlineKo": "Applied Materials(AMAT)는 거의 모든 Fab에 공급합니다. 그것으로 충분합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dce155d86f3bc1e10325489775dc75a0d77660cc5907fcc95f962795388d027d",
        "publishedAt": 1795654402,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials(AMAT)는 거의 모든 Fab에 공급합니다. 그것으로 충분합니까?"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "c7ef0709e0b0bab8e582",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Memory Makers Are Spending Again. Will Lam Research (LRCX) Cash In?",
      "headlineKo": "메모리 제조업체가 다시 지출하고 있습니다. Lam Research(LRCX)가 현금화되나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1d2461c4df5d4dd52ec712b7a115f14ed059eaab0ec6cd33f8981bbe8f666a8",
        "publishedAt": 1795654093,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Memory Makers Are Spending Again. Will Lam Research (LRCX) Cash In?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LRCX에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "300ff1da3dfde2b67825",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
      "relatedTickers": [
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
      "headline": "S&P 500, Nasdaq End Lower But Dow Rebounds As Traders Rotate Out Of AI — NVDA, SPCX, PANW  In Focus",
      "headlineKo": "S&P 500, Nasdaq은 하락 마감했지만 거래자가 AI에서 회전함에 따라 Dow는 반등했습니다 — NVDA, SPCX, PANW 초점",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6dfdcab5190999e3b1cc53253d4a097aa42a9f3abc948ea292b3aea25e0ff60",
        "publishedAt": 1795651790,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Nasdaq은 하락했지만 트레이더들이 AI에서 벗어나면서 다우 반등 — NVDA, SPCX, PANW 초점 AI 에이전트 동향 뉴스 수익 전체 DIA 0.85% SPY 0.23% QQQ 0.23% 추세 CORZ 2.73% LINK 2.09% BONK 3.12% PYTH 0.09% ALM 1.18% 시모 6.24% A",
        "S&P 500, Nasdaq은 하락세로 마감했지만 트레이더가 AI에서 벗어나면서 다우 반등 — NVDA, SPCX, PANW In Focus Nasdaq 100은 수요일 약간의 손실을 줄이기 전에 잠시 약세장 영역에 닿았습니다.",
        "트레이더들이 2026년 11월 6일 뉴욕시 뉴욕증권거래소(NYSE) 1층에서 일하고 있다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.85%, 0.23%, 2.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.85%, 0.23%, 2.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2c57bac660e413e08a9a",
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
      "headline": "Could Vertiv Actually Climb 117%? Or Is Bernstein Totally Wrong?",
      "headlineKo": "Vertiv가 실제로 117% 상승할 수 있을까요? 아니면 번스타인이 완전히 틀렸는가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=05c2294356daeb9090b81578d5ed435894a518d99ea693006b86ac8b9e6ee52e",
        "publishedAt": 1795650946,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| TIKR.com 일반 투자에서 Vertiv가 실제로 117% 상승할 수 있을까요?",
        "Gian Estrada • 4분 읽기 검토자: David Hanson 최종 업데이트 2026년 11월 25일 Canva를 통한 Handmadefont의 @Handmadefont 주요 요점 Bernstein은 11월 11일 Vertiv에서 Outperform 등급과 $376 목표 가격을 유지했습니다.",
        "3분기 매출이 61% 증가했음에도 불구하고 7월 판매 실패, 품질 문제 및 중간고사로 인해 주가가 하락했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 117%, $376, 61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 117%, $376, 61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "db44d14642333ea76283",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft's Green Card Filings Reveal A Striking Pattern After Mass Layoffs. Trump's New Rule Could Freeze Sponsorships For Two Years.",
      "headlineKo": "마이크로소프트의 영주권 신청은 대량 해고 이후 눈에 띄는 패턴을 드러낸다. 트럼프의 새로운 규정으로 인해 스폰서십이 2년 동안 중단될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50a30bb11dcb9838d602bc541d5cb1ba3446c6f63216bea4dc6ea7009ee03417",
        "publishedAt": 1795650487,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크로소프트의 영주권 신청은 대량 해고 이후 눈에 띄는 패턴을 드러낸다.",
        "트럼프의 새로운 규정으로 인해 스폰서십이 2년 동안 중단될 수 있습니다.",
        "AFP via Getty Images 마이크로소프트는 2025년 해고 이후 고용 기반 영주권 신청 접수를 거의 중단했으며, 다음 11개월 동안 23건의 신청서만 제출한 것으로 나타났습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 86%, 79%, 88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 86%, 79%, 88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "16ce1f63f06bcf8d1a6d",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "LRCX",
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
      "headline": "Lam Research: The Price Has Caught Down The Story",
      "headlineKo": "Lam Research: 가격이 이야기를 사로잡았습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5ba9fccba661ffe23097ee801713a885798837c9a466f84bb06610bd4a142ea7",
        "publishedAt": 1795650362,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research 주식: 가격이 이야기를 사로잡았습니다(NASDAQ:LRCX) | 알파 추구 Louis Gerard 4.28K 팔로워 팔로우 요약 Lam Research는 실적 성장과 주가 하락으로 인해 가치 평가가 더욱 매력적이면서 매수로 업그레이드되었습니다.",
        "LRCX는 2027 회계연도 예상 수익의 20.3배에 거래되고 있으며, 이는 5년 평균 25.4배보다 낮습니다. 순현금은 약 37억 달러입니다.",
        "경영진은 2027년과 2026년에 웨이퍼 팹 장비 지출이 2000억 달러 이상, 시스템 매출 성장이 40%를 훨씬 넘을 것으로 예상하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 20.3 times, 25.4 times, $3.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LRCX에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 20.3 times, 25.4 times, $3.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "b51b45e863c3865b95a8",
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
      "headline": "Is Micron Cheap Only If Its Record Margin Lasts?",
      "headlineKo": "마이크론은 기록적인 마진이 지속되어야만 저렴한가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88ed94e337de657c21469c5a98fb0b7a97f7a6990a67ba3a4e6368a7d2e82cb8",
        "publishedAt": 1795650187,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론은 기록적인 마진이 지속되어야만 저렴한가?",
        "| Trefis Trefis Storylines 기록적인 마진이 지속되어야만 Micron이 저렴합니까?",
        "2026년 11월 25일 · 작성자: Trefis Team MU YTD +110.8% SPY YTD +5.9% QQQ YTD +3.5% MU 분석 → 오늘의 큰 이야기: IPO 가격 이하의 인류: 거인이 돌아오나요?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 110.8%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 110.8%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8032953b222dc7a6e5d2",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Bill Gurley: Investors Weren’t “Scrambling to Actually Own Anthropic.” That’s a Problem for Amazon and Alphabet",
      "headlineKo": "Bill Gurley: 투자자들은 \"실제로 Anthropic을 소유하기 위해 애쓰지\" 않았습니다. 그것은 Amazon과 Alphabet의 문제입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ccb83e0bd6299a160bd26c2c7dab41080b62eb966bf96d125c76f3e43f010e28",
        "publishedAt": 1795650186,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bill Gurley: 투자자들은 \"실제로 Anthropic을 소유하기 위해 애쓰지\" 않았습니다. Amazon과 Alphabet의 문제 | TIKR.com 일반 투자 Bill Gurley: 투자자들은 \"실제로 인류를 소유하기 위해 애쓰지\" 않았습니다. 아마존의 문제다",
        "Bill Gurley는 IPO 구매자 중 주식을 보유할 계획이 있는 사람은 거의 없다고 말했습니다.",
        "Amazon의 수익은 Anthropic의 가격에 따라 오르락내리락합니다. 지분 수익으로 인해 2026년 상반기에 세전 수입이 628억 달러 추가되었습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $83, $62.8 billion, $1 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $83, $62.8 billion, $1 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "06fdfa59d5b78a788ac8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "NVDA",
        "TSM"
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
      "headline": "Altimeter’s Brad Gerstner Says Nvidia Was Priced for “Negative Growth for 2028 and 2029.” Wall Street Expects 29%",
      "headlineKo": "Altimeter의 Brad Gerstner는 Nvidia가 \"2028년과 2029년에 마이너스 성장\"으로 가격이 책정되었다고 말했습니다. 월스트리트는 29%를 예상한다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d770f4fdc86e5b30c9d3d6a4d9cf85135d8e263481f11187b0825a7388865971",
        "publishedAt": 1795649942,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Altimeter의 Brad Gerstner는 Nvidia가 \"2028년과 2029년에 마이너스 성장\"으로 가격이 책정되었다고 말했습니다. 월스트리트 예상 29% | TIKR.com General Investing Altimeter의 Brad Gerstner는 Nvidia가 \"2028년과 2029년에 마이너스 성장\"을 기록했다고 말했습니다. 월 스트리트",
        "Altimeter Capital CEO 브래드 거스트너(Brad Gerstner)는 2028년과 2029년 성장 둔화에 대한 여러 가격이 책정된 반면 분석가들은 매출과 수익이 계속 증가할 것으로 예상한다고 말했습니다.",
        "주요 위험은 하이퍼스케일 업체들이 자본 지출 예측 증가를 중단했다는 점이며, 이는 TSM(Taiwan Semiconductor Manufacturing) 및 AMD(Advanced Micro Devices)에도 중요합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 29%, 31.5%, 72% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 29%, 31.5%, 72% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e0509dee29c69012a9a9",
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
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Are You Overpaying For Palantir Stock Versus Its Rivals?",
      "headlineKo": "경쟁사에 비해 Palantir 주식에 대해 너무 많은 비용을 지불하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6550472f446ac189e5403c670aeaa84f965d5a38c9a302b7b5e000b83bac1cd1",
        "publishedAt": 1795649464,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "경쟁사에 비해 Palantir 주식에 대해 너무 많은 비용을 지불하고 있습니까?",
        "| Trefis Trefis 스토리라인 경쟁사에 비해 Palantir 주식에 대해 너무 많은 비용을 지불하고 있습니까?",
        "2026년 11월 25일 · 작성자 Trefis Team PLTR YTD -8.0% SPY YTD +5.9% QQQ YTD +3.5% PLTR 분석 → 오늘의 주요 스토리: IPO 가격 이하의 인류: 거인이 돌아오나요?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.0%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8.0%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "500da79913088ca631b2",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Musk's Plan To Put 1 Million AI Satellites In Orbit Gets US Approval. Amazon Questions Whether It Can Be Done.",
      "headlineKo": "100만 개의 AI 위성을 궤도에 올리겠다는 머스크의 계획이 미국의 승인을 받았습니다. 아마존은 그것이 가능한지 질문합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1941f15a07a41c34a8084c1a2b761aff803fe78d8f61ebbbb01e846ba6c475a6",
        "publishedAt": 1795648590,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "100만 개의 AI 위성을 궤도에 올리겠다는 머스크의 계획이 미국의 승인을 받았습니다.",
        "아마존은 그것이 가능한지 질문합니다.",
        "| IBTimes Technology Computers Elon Musk Maja Hitij/Getty Images Elon Musk의 SpaceX가 미국 조건부 우승을 차지했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 60 times, $1,450 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 60 times, $1,450 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "92ef8e4d3ae03cc9158b",
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
      "headline": "2 Billionaire Funds Dumped AMD Last Quarter. Is It a Sell?",
      "headlineKo": "2 억만장자 펀드가 지난 분기에 AMD를 버렸습니다. 매도인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=def680434403928ad4731c8de8094f5803e59a7a71323052b08ca43e9853b6d4",
        "publishedAt": 1795646581,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 1.75%, 100%, 200%, 3.91%, $406.03, $7.24, $665.93, $370.40.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMD의 사업과 관련된 '2 Billionaire Funds Dumped AMD Last Quarter. Is It a Sell?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "5e225b495fc1644cb77e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Is Applied Materials Stock Just Falling With Its Group?",
      "headlineKo": "어플라이드 머티어리얼즈 주가는 그룹 전체와 함께 하락하고 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c843dc350b72bba6bcdf634e88b377227ea7fceb01ed7c1593b35830a3b02824",
        "publishedAt": 1795643939,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티어리얼즈 주가는 그룹 전체와 함께 하락하고 있나요?",
        "| Trefis Trefis 스토리라인 Applied Materials 주식이 그룹 내에서 하락하고 있습니까?",
        "2026년 11월 25일 · 작성자: Trefis Team AMAT YTD +21.7% SPY YTD +5.9% QQQ YTD +3.5% AMAT 분석 → 오늘의 큰 이야기: IPO 가격 이하의 인류: 자이언츠가 돌아오나요?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 21.7%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 21.7%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "88f6ad09082576b95068",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "LRCX"
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
      "headline": "Lam Research: One Of The Best Black Friday Deals You'll See",
      "headlineKo": "Lam Research: 여러분이 보게 될 최고의 블랙 프라이데이 특가 중 하나",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3d3a2f0296e295db6eaa187f9095e6c157f0befe755d509b3b2ccbf44fbfcfbb",
        "publishedAt": 1795642065,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research: 여러분이 보게 될 최고의 블랙 프라이데이 특가 중 하나"
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
          "ticker": "LRCX",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "2230c71ec90bbab80f01",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM",
        "QQQ",
        "SNDK",
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
      "headline": "Qualcomm vs. Sandisk: Which Technology Stock Is a Better Buy for 2027?",
      "headlineKo": "Qualcomm vs. Sandisk: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6236334201c9643249d124aa4570edf40accf5cced23e6434560b08e8a94307",
        "publishedAt": 1795641602,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: 2027년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147.73 비트코인 $61,702.00 +1.5% +$904.93 ANT $82.79 +1.1%",
        "Sandisk는 클라우드 및 데이터 센터 환경에서 플래시 스토리지에 대한 막대한 수요에 힘입어 세 자리 수의 매출 성장을 달성했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.24%, 5.57%, $168.66 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.24%, 5.57%, $168.66 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1b606dd6beac9bd5ca79",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "AMD",
        "GEV",
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
      "headline": "Should Raised Guidance Require Action From GE Vernova Stock Investors?",
      "headlineKo": "인상된 지침에는 GE Vernova 주식 투자자의 조치가 필요합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95e0a15887cbba508fc760819b5fd476c8a302df1856f13496d88c54936527f4",
        "publishedAt": 1795641065,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 GEV의 사업과 관련된 'Should Raised Guidance Require Action From GE Vernova Stock Investors?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "eed95bc648c6d0690a1b",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Bill Ackman, George Soros and 5 Other Famous Investors Own Microsoft. Here’s Who Bought and Sold Recently",
      "headlineKo": "Bill Ackman, George Soros 및 기타 5명의 유명 투자자가 Microsoft를 소유하고 있습니다. 최근에 매수하고 매도한 사람은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3841556a94f349b3a9090edb8a3ca3b40c7f633aa69b8176232bc8e39fb7605b",
        "publishedAt": 1795639822,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bill Ackman, George Soros 및 기타 5명의 유명 투자자가 Microsoft를 소유하고 있습니다.",
        "최근에 매수하고 매도한 사람은 다음과 같습니다 | TIKR.com 일반 투자 Bill Ackman, George Soros 및 기타 5명의 유명 투자자가 Microsoft를 소유하고 있습니다.",
        "최근에 사고 팔은 사람은 다음과 같습니다. Roxanna Maglangit • 6분 읽기 검토자: Michael Douglass 마지막 업데이트: 2026년 11월 25일 Canva를 통해 기본 이미지에서 가져온 Natee Meepian의 이미지와 Mike Marchetti 주요 내용 Micro를 보유한 유명 투자자 7명"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $32.0 billion, $67.0 billion, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $32.0 billion, $67.0 billion, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6da3662ff81ef7a19b3e",
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
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Oracle Stock Slumped Today",
      "headlineKo": "오늘 오라클 주식이 폭락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1d149cad9aaa2aef58d6ef510b98864c6d37a9099eff0eddfe21b99e811ba180",
        "publishedAt": 1795639212,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 오라클 주식이 폭락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147.73 비트코인 ​​$60,507.00 +",
        "오라클의 부채 증가와 현금 흐름 소진은 오라클이 알파벳과 같이 재정적으로 더 안전한 기업보다 더 큰 압박을 받고 있음을 의미합니다.",
        "오라클보다 우리가 더 좋아하는 10가지 주식 > 오라클( ORCL -5.13% ) 주식은 오늘 정오에 8% 이상 하락했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.13%, 8%, 1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.13%, 8%, 1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7d7b64a5a048aa6d5139",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "AMAT",
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
        "QCOM",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Qualcomm",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Billionaire Brad Gerstner’s Altimeter Opened a $680 Million Tesla Stake and Exited Qualcomm and Applied Materials",
      "headlineKo": "억만장자 브래드 거스트너(Brad Gerstner)의 고도계(Altimeter)가 6억 8천만 달러 규모의 Tesla 지분을 개설하고 Qualcomm 및 Applied Materials에서 퇴사",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8dddda9e784ea509d9f37136165d64d0c78e37e7811e2b73b98aa8e65a9423a5",
        "publishedAt": 1795638121,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $680 Million, $680 million, 6.94%, $9.8 billion, $45.447, 26%, $5.137, 89%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 TSLA의 사업과 관련된 'Billionaire Brad Gerstner’s Altimeter Opened a $680 Million Tesla Stake and Exited Qualcomm and Applied Materials' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "caf20df780de3d1c4390",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tech Stock Sell-Off: Here's Why Apple Has Been Immune",
      "headlineKo": "기술주 매도: 애플이 면역이 된 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=790c129a66af8f9edaec3ffa0893ae16d1a1b54b959b342dc6b7510c2d604f5d",
        "publishedAt": 1795638002,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "기술주 매도: 애플이 면역력을 갖고 있는 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147.",
        "2026 회계연도에는 잉여현금흐름이 38% 가까이 증가해 1,360억 달러에 달해 Apple이 현금을 반환하고 투자할 여지가 생겼습니다.",
        "메모리 칩 가격 상승으로 마진이 압박을 받고 있지만, 애플의 서비스 사업이 타격을 완화하는 데 도움이 되고 있다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 38%, $136 billion, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 38%, $136 billion, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "50e68a9cecf136e4d3b2",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML"
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
      "expectedHorizon": "단기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ASML Holding (ENXTAM:ASML) Faces Dutch Pushback On New US China Chip Curbs",
      "headlineKo": "ASML Holding (ENXTAM:ASML), 새로운 미국 중국 칩 규제에 대한 네덜란드의 반발에 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12f26563f8ad5dfa1114107c9fe813cd1f59b714e41be0ab0e833f048d1c0764",
        "publishedAt": 1795637700,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML Holding (ENXTAM:ASML), 새로운 미국 중국 칩 규제에 대한 네덜란드의 반발에 직면"
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7156435b03b6bbe65d4f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "LRCX",
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
      "headline": "Applied Materials Falls 6% Despite UBS’s $575 Target as China Chip Curbs Hit Equipment Stocks; Lam Research Drops 7%, KLA Edges Lower",
      "headlineKo": "Applied Materials는 중국 칩 억제로 장비 주가가 하락함에 따라 UBS의 575달러 목표에도 불구하고 6% 하락했습니다. Lam Research 7% 하락, KLA Edges 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7382695e2801a77c6f2041556316435c416f7a219011c7495d5733cf9df6e118",
        "publishedAt": 1795637384,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "UBS의 575달러 목표에도 불구하고 Applied Materials는 중국 칩 억제로 장비 주가 하락에 따라 6% 하락; Lam Research 하락 7%, KLA Edges Lower - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,234.40 +0.81% Dow Jones 50,450.40 +0.49% Nasdaq 100 26,263.10 +1.20% Russell 2000 2,718.17 +0.60% S&P 500 7,234.40 +0.81% 다우존스 50,450.40 +0.49% 나스닥 100 26,263.10 +1.20% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, $575, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, $575, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b010d7fc8020cad91083",
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
      "headline": "Meta Says Muse “Raises Conversions for Advertisers.” It Already Places 51% of AI Agent Orders",
      "headlineKo": "Meta는 Muse가 \"광고주의 전환율을 높인다\"고 말합니다. 이미 AI 에이전트 주문의 51%를 차지하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66377c41610ddd5a64a9b229988bc955c6db5c28b75c02b72b702f8f91b9c47f",
        "publishedAt": 1795634433,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta는 Muse가 \"광고주의 전환율을 높인다\"고 말합니다. 이미 AI 에이전트 주문의 51%를 기록 | TIKR.com 일반 투자 메타에서는 Muse가 \"광고주의 전환율을 높입니다\"라고 말합니다. 이미 AI 에이전트 주문의 51%를 기록했습니다. Roxanna Maglangit • 5m",
        "Meta 고위 임원은 Muse가 Meta가 이미 판매하는 광고에 대한 전환율을 높이기 때문에 에이전트 내부의 광고는 기다릴 수 있다고 말합니다.",
        "만약 그렇다면, 소매업체의 광고 예산은 Pinterest에게 나쁜 소식인 Meta 쪽으로 더 많이 이동하게 될 것입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 51%, 24%, 26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 51%, 24%, 26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4a486a04c229a8ea5975",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Why Alphabet Stock Is Down Today",
      "headlineKo": "오늘 알파벳 주식이 하락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c2ba8001fe5e027f0278058684c71484bd4b88d24dff7dc137038885d37efe0",
        "publishedAt": 1795634101,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 알파벳 주식이 하락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,182.78 -0.3% -18.31 DJI 50,182.95 +0.3% +164.25 NASDAQ 23,585.80 -0.6% -147.73 비트코인 ​​$60,709.00",
        "3분기 자본 지출은 514억 달러에 달했고 잉여현금흐름은 마이너스 91억 달러로 떨어졌습니다.",
        "Alphabet의 대출이 상대적으로 많고 투자자들이 AI의 보상을 걱정하고 있는 상황에서 이러한 베팅이 성공할지 회의적입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $51.4 billion, $9.1 billion, 2.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $51.4 billion, $9.1 billion, 2.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5896472b4bf0691895a9",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Meta’s AI shopping push could lift Instagram ad revenue, Jefferies says",
      "headlineKo": "Meta의 AI 쇼핑 추진으로 Instagram 광고 수익이 늘어날 수 있다고 Jefferies는 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ceac68d8f871a0e8eb8d4cc9a9827d15a1d74779b2e5460348a32dc657027a9a",
        "publishedAt": 1795633740,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta의 AI 쇼핑 추진으로 Instagram 광고 수익이 늘어날 수 있다고 Jefferies는 말합니다. NASDAQ:META, XETRA:FB2A, SIX:FB 무엇을 찾고 계십니까?",
        "회사 뉴스 일치하는 모든 회사 보기 일치하는 모든 뉴스 보기 기술 소프트웨어 및 서비스 작성자: Luis Vincent Gochoco 고지 사항 투자 조언 없음 이 콘텐츠 정보 편집 표준 및 정책 기사 공유 이 콘텐츠 정보 × A",
        "그의 배경은 재무 보고 및 편집 분야이며 글로벌 시장, 비즈니스 및 뉴스 속보를 다룬 경험이 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $875, 8.5 times, 13.3 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $875, 8.5 times, 13.3 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e7160f48926994591164",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce earnings to put Bank of America’s growth outlook to the test",
      "headlineKo": "Salesforce 수익으로 Bank of America의 성장 전망 테스트",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=892054fe619ed3a627e2ccad04123c09aeb6fbba4a340fd83392459a7c6f325d",
        "publishedAt": 1795633140,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce 수익으로 Bank of America의 성장 전망 테스트"
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "f58c5ac53c093ae3ec09",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Quanta Services (PWR) Stock Could Be 15% Above Fair Value As Grid Buildout Expands",
      "headlineKo": "Quanta Services(PWR) 주식은 그리드 구축이 확장됨에 따라 공정 가치보다 15% 높을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1cd918db102e7da1d9c710a44bf05d3a855e39a644a6e950430b3c0ea4ce9b87",
        "publishedAt": 1795630191,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services (PWR) Stock Could Be 15% Above Fair Value As Grid Buildout Expands",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "PWR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PWR에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "256441b5970726b660fc",
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
      "headline": "Berkshire Hathaway Is Up 15% in 2026 and Easily Beating the S&P 500. Is Berkshire Stock Better Than an Index Fund Now?",
      "headlineKo": "버크셔 해서웨이는 2026년에 15% 상승해 S&P 500을 쉽게 이겼습니다. 이제 버크셔 주식이 인덱스 펀드보다 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=050246e879c76a3e8b7b38e5d4dd179f91ebea57e86b63fa4f0b80de1e5995a5",
        "publishedAt": 1795629735,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "버크셔 해서웨이는 2026년에 15% 상승해 S&P 500을 쉽게 이겼습니다.",
        "이제 버크셔 주식이 인덱스 펀드보다 나은가요?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,326.20 +1.42% Dow Jones 50,864.00 +0.89% Nasdaq 100 26,800.30 +2.38% Russell 2000 2,744.28 +0.99% S&P 500 7,326.20 +1.42% 다우존스 50,864.00 +0.89% 나스닥 100 26,800.30 +2.38% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 15%, 1.42%, 0.89% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 15%, 1.42%, 0.89% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7c8ed0496e6ce0d6c727",
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
      "headline": "Applied Materials Keeps Sliding: Why UBS Still Sees 94% Upside",
      "headlineKo": "Applied Materials의 계속 하락세: UBS가 여전히 94% 상승 여력을 보이는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f36ea0f94a1827e6ad2fa303afe38aed672d768a9567501ef89125689704230c",
        "publishedAt": 1795629665,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials의 계속 하락세: UBS가 여전히 94% 상승 여력을 보이는 이유"
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
      "id": "b60b7ad78fa32b9add79",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "SPY",
      "relatedTickers": [
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SPY: Earnings Keep Rising, But Is The S&P 500 Actually Cheap?",
      "headlineKo": "SPY: 수익은 계속 증가하고 있지만 S&P 500은 실제로 저렴한가요?",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8f6ed1da5d0268be94bd178ecfaf2bb976c026c5e08314d0966ed9ab93ab8c16",
        "publishedAt": 1795629067,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SPY: 수익은 계속 증가하고 있지만 S&P 500은 실제로 저렴한가요?"
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
          "ticker": "SPY",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "3f8efee87b7fa134a7e7",
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
      "headline": "SPY: Earnings Keep Rising, But Is The S&P 500 Actually Cheap?",
      "headlineKo": "SPY: 수익은 계속 증가하고 있지만 S&P 500은 실제로 저렴한가요?",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8f6ed1da5d0268be94bd178ecfaf2bb976c026c5e08314d0966ed9ab93ab8c16",
        "publishedAt": 1795629067,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SPY: 수익은 계속 증가하고 있지만 S&P 500은 실제로 저렴한가요?",
        "(NYSEARCA:스파이) | 알파 찾기 Lee Bailey 241 팔로워 팔로우 요약 SPDR S&P 500 ETF Trust는 보류 상태입니다. 회복 잠재력과 랠리 위험이 내재 가치 부족분 약 8%보다 큽니다.",
        "컨센서스 수익은 여전히 ​​탄력적이지만 IT는 큰 성장 부담을 안고 있고 반도체 마진과 하이퍼스케일러 현금 전환은 압박을 받고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, 9.25%, $661 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8%, 9.25%, $661 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "811fdbb7a8139f36c1ff",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "SPYD and SCHD Hold No Nvidia. Here’s What You Give Up and What You Get",
      "headlineKo": "SPYD와 SCHD는 Nvidia를 보유하지 않습니다. 포기한 것과 얻는 것은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=015e3475881621a1f894cbebf893166c1b4603ee153a144dd3e1cac9f9aa2e41",
        "publishedAt": 1795629062,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "포기한 것과 얻는 것이 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,197.40 −0.02% Dow Jones 50,392.00 +0.77% Nasdaq 100 26,021.40 −0.74% Russell 2000 2,705.67 +0.80% S&P 500 7,197.40 −0.02% 다우존스 50,392.00 +0.77% 나스닥 100 26,021.40 −0.74% 러셀 20",
        "여기에 당신이 포기하는 것과 얻는 것이 있습니다. 작성자: Tony Dong 2026년 11월 25일 오후 12:51(ET) 게시 · 4분 읽기 𝕏 f ⧉ 이 게시물에는 스폰서 및 계열사의 링크가 포함될 수 있으며 Flywheel Publishing은 조치에 대한 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 33.65%, 3.06%, 4.28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 33.65%, 3.06%, 4.28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8a7d004082fe013f44f8",
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
      "headline": "Nvidia Stock Keeps Falling. It’s Obvious Jensen Was Not the Only Problem.",
      "headlineKo": "Nvidia 주식은 계속 하락하고 있습니다. Jensen만이 유일한 문제는 아니었음이 분명합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c379d7550c186c9d2aad3162d201d0e31a5af558e1727517d7474cff60eae0f6",
        "publishedAt": 1795629000,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia Stock Keeps Falling. It’s Obvious Jensen Was Not the Only Problem.",
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
      "id": "8a7c0b061032bf69c3dd",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "106% Upside for Micron? Citi Thinks So, and Here’s How",
      "headlineKo": "마이크론의 상승여력은 106%? Citi는 그렇게 생각하며 그 방법은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f0d2c452071fee7558c0537e5a0f0817ac51d168d692fd531c7b633de704fda",
        "publishedAt": 1795628144,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citi는 그렇게 생각하며 그 방법은 다음과 같습니다 | TIKR.com 일반 마이크론에 106% 상승여력 투자?",
        "Citi의 생각과 방법은 다음과 같습니다. Michael Douglass • 5분 읽기 검토자: Michael Douglass 최종 업데이트 2026년 11월 25일 마지막 업데이트: PhonlamaiPhoto의 이미지(Canva를 통한 @Kittipong Jirasukhanont), Canva를 통한 Getty Images의 @Aaron Hawkins Key Takeaway",
        "6월 최고치보다 48% 하락한 후 최근 종가보다 106% 높은 23일입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 106%, $1,300, 48% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 106%, $1,300, 48% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b35d476346961f1e922a",
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
      "headline": "If You Invest $1,000 in Taiwan Semiconductor Today, Here’s What It Could Be Worth by 2030",
      "headlineKo": "지금 Taiwan Semiconductor에 1,000달러를 투자하면 2030년까지의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ec0093b8cb206aedd8bc4719f1fe048962b8b3afa9f805cb4e4cf84b8678150",
        "publishedAt": 1795627981,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $1,000, $366.27, 15.19%, $318.71., $2,591.40, 159.14%, $825.91,, 20.98%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 TSM의 사업과 관련된 'If You Invest $1,000 in Taiwan Semiconductor Today, Here’s What It Could Be Worth by 2030' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "fbdca53c00230e9b3361",
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
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Is Down 25% From Its High. Is It a Bargain or Still Overvalued?",
      "headlineKo": "Palantir는 고점 대비 25% 하락했습니다. 그것은 할인인가, 아니면 여전히 과대평가되어 있는가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c7f88142245d0503727ebe762149992f4d0116f66ee78220a41c08176d094ff4",
        "publishedAt": 1795627203,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir는 고점 대비 25% 하락했습니다.",
        "그것은 할인인가, 아니면 여전히 과대평가되어 있는가?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,188.91 -0.2% -12.18 DJI 50,367.42 +0.7% +348.72 NASDAQ 23,540.94 -0.8% -192.60 비트코인 $59,730.00 -0.3% -$172.14 ANT $84.71 +3.4%"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 25%, 1.93%, $159, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 25%, 1.93%, $159, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6162d1827a5758f48a07",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "QQQ",
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
      "headline": "Sandisk vs. Western Digital: Which Computer Drive Stock Is a Better Buy for 2027?",
      "headlineKo": "Sandisk 대 Western Digital: 2027년에는 어떤 컴퓨터 드라이브 주식이 더 나은 구매입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c9a3524348fd19abc99596758d1444285e82e053e19f7104939db9f2f5ea8225",
        "publishedAt": 1795627142,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital: 2027년에는 어느 컴퓨터 드라이브 주식이 더 나은 구매일까요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,188.91 -0.2% -12.18 DJI 50,367.42 +0.7% +348.72 NASDAQ 23,540.94 -0.8% -192.60 비트코인 $59,730.00 -0.3% -$172.14 ANT $84.71 +3.4%",
        "Western Digital은 하드 디스크 드라이브 공간을 장악하여 클라우드 제공업체로부터 수익의 대부분을 창출합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7.68%, 2.85%, $71.97 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7.68%, 2.85%, $71.97 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f68a2a1f4af6009d072d",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Alphabet stock plunges as Google walks away from a big Australian news deal",
      "headlineKo": "구글이 호주의 대규모 뉴스 거래에서 물러나면서 알파벳 주가가 급락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e3cfa996ee24a054a8efadb4a54928eb459a3efbf4d78eb0abb2d78edc8e466",
        "publishedAt": 1795626890,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet stock plunges as Google walks away from a big Australian news deal",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "1de86ebdb81fd97ee8d1",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML"
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
      "headline": "ASML Sinks 6% in Chip Rout as Dutch Lawmaker Warns MATCH Act Is “Disastrous for ASML”",
      "headlineKo": "네덜란드 국회의원이 MATCH 법안이 \"ASML에 재앙\"이라고 경고함에 따라 ASML은 칩 라우팅에서 6% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=768a04695b8a6583ebe218ed2939e17d0a3c811e47db4f278a9aa07c23e76317",
        "publishedAt": 1795626676,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "네덜란드 국회의원이 MATCH 법안이 \"ASML에 재앙\"이라고 경고함에 따라 ASML은 칩 라우팅에서 6% 하락 | TIKR.com 일반 네덜란드 국회의원이 MATCH 법안이 \"ASML에 재앙\"이라고 경고함에 따라 ASML 투자로 칩 라우팅이 6% 감소했습니다. Bobby Sankhagowit • 4분 읽기 Revie",
        "MATCH 법은 네덜란드가 ASML의 몰입형 DUV 도구에 대한 규제를 강화하거나 미국의 제한에 직면하도록 압력을 가할 것입니다.",
        "중국은 ASML의 2026년 매출의 약 20%를 차지할 것으로 예상되며 분석가들은 여전히 ​​ASML의 수익이 2028년까지 약 3배로 증가할 것으로 예상하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 20%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ASML에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 6%, 20%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "721db9ea4333b5acdf8d",
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
      "headline": "Microsoft (MSFT) Deepens Europe Sovereign AI Push With Expanded Public Sector Cloud Pact",
      "headlineKo": "마이크로소프트(MSFT), 공공 부문 클라우드 협정 확대로 유럽 주권 AI 추진 강화",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=012eb766be848879257deaacef71f0adfb745ac8d6604a824b86177f4ea9271d",
        "publishedAt": 1795626658,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft (MSFT) Deepens Europe Sovereign AI Push With Expanded Public Sector Cloud Pact",
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
      "id": "0081adf2145680cb971a",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Are Wall Street Analysts' Target Price for Vistra Corp. Stock?",
      "headlineKo": "Vistra Corp. 주식에 대한 월스트리트 분석가의 목표 가격은 얼마입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7f1a1cc0b8220772a28bca86c9862beaabad6698c68ca0a791f5c220dd924ed",
        "publishedAt": 1795626461,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What Are Wall Street Analysts' Target Price for Vistra Corp. Stock?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VST에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "38a1d1477bc449e1b12f",
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
      "headline": "Billionaire Stephen Mandel’s Lone Pine Raised Its Alphabet Stake 901% to $743 Million",
      "headlineKo": "억만장자 스티븐 만델(Stephen Mandel)의 론 파인(Lone Pine)이 알파벳 지분을 901% 늘려 7억 4,300만 달러로 늘렸습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7451099374f3cf0717e3b1ccd4860bd91b8ac3caa0f0b356f4df8205f098f9b",
        "publishedAt": 1795626255,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 901%, $743 Million, 901.3%, $743 million, 4.85%, 48%, 63%, 82%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Billionaire Stephen Mandel’s Lone Pine Raised Its Alphabet Stake 901% to $743 Million' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b703b5d03f9400e5bd15",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "VST",
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
      "headline": "Vistra Has Slumped for a Year: Why Morgan Stanley Still Sees 82% Upside",
      "headlineKo": "Vistra가 1년 동안 하락했습니다: Morgan Stanley가 여전히 82%의 상승 여력을 보이는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f62b5f7f692a5b5fe8ef1644ab71dc22abcc94f68c6d72743d7a716a6265dc3",
        "publishedAt": 1795626110,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra가 1년간 하락세: Morgan Stanley가 여전히 82% 상승 여력을 보이는 이유 | TIKR.com General Investing Vistra가 1년 동안 하락했습니다: Morgan Stanley가 여전히 82%의 상승 여력을 보이는 이유 Chris Arnold • 4분 읽기 검토자: Chris Arnold 마지막 업데이트",
        "Vistra는 더 저렴한 텍사스 전력과 데이터 센터 성장을 의심하게 만드는 선거로 인해 하락했으며 Constellation Energy와 NRG Energy도 둘 다 지침을 유지하거나 인상했음에도 불구하고 급격히 하락했습니다.",
        "2028년 수익 추정치에 따르면 211달러는 19배로 Vistra의 5년 평균 15배보다 훨씬 높습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 82%, $211, $224 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 82%, $211, $224 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "182ecd4bd643807cb193",
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
      "headline": "Nebius Plunges 12%, Oracle Sinks 8% as AI Cloud Selloff Deepens; IBM Rises 2%: Is IBM a Safer AI Play?",
      "headlineKo": "AI 클라우드 매도세가 심화되면서 Nebius는 12% 급락, Oracle은 8% 하락; IBM 2% 상승: IBM은 더 안전한 AI 플레이인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87d468dc76d07822bdf2bec8fd0a5e851f2f894174365b136e24b53f7e309707",
        "publishedAt": 1795625761,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 클라우드 매도세가 심화되면서 Nebius는 12% 급락, Oracle은 8% 하락; IBM 2% 상승: IBM은 더 안전한 AI 플레이인가?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,234.40 +0.81% Dow Jones 50,450.40 +0.49% Nasdaq 100 26,263.10 +1.20% Russell 2000 2,718.17 +0.60% S&P 500 7,234.40 +0.81% 다우존스 50,450.40 +0.49% 나스닥 100 26,263.10 +1.20% 러셀 20",
        "작성자 David Moadel 2026년 11월 25일 오전 11시 56분(ET) 게시 · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, 8%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, 8%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6856b16d174f0ddef033",
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
      "headline": "104% Upside for Broadcom? Bernstein Thinks So, and Here’s How",
      "headlineKo": "Broadcom의 104% 상승여력? Bernstein은 그렇게 생각하며 그 방법은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e57b03565ecd2646cea45ed6564ac3ff482ab3d2c24f16789ac95785eddb9fc8",
        "publishedAt": 1795625749,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "번스타인은 그렇게 생각하며 그 방법은 다음과 같습니다 | TIKR.com 일반 Broadcom에 104%의 상승 여력을 투자하시겠습니까?",
        "Bernstein이 생각하는 방법 Chris Arnold • 5분 읽기 검토자: Chris Arnold 최종 업데이트: 2026년 11월 25일 Getty Images의 Alexander Kuzmin 및 Canva를 통한 pixabay의 MrWashingt0n 핵심 사항 Bernstein은 우수한 성과 비율을 유지했습니다.",
        "6월 최고치보다 41% 하락한 후 주가는 23일 104% 상승했다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 104%, $575, 41% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 104%, $575, 41% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6a9336f3adb70a834350",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
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
      "headline": "Broadcom vs. Qualcomm: Which Technology Stock Is a Better Buy for 2027?",
      "headlineKo": "Broadcom vs. Qualcomm: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6960670cbd9919810b2d46f8eca3172bba29c3e10e134a3310abd3c9a3035d9e",
        "publishedAt": 1795625521,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm: 2027년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,188.91 -0.2% -12.18 DJI 50,367.42 +0.7% +348.72 NASDAQ 23,540.94 -0.8% -192.60 비트코인 $59,730.00 -0.3% -$172.14 ANT $84.71 +3.4%",
        "Qualcomm은 자동차 및 사물 인터넷 시장으로 사업을 다각화하는 동시에 모바일 연결 분야를 계속 선도하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.50%, 1.34%, $293.55 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.50%, 1.34%, $293.55 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9c52f1585959405b6063",
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
      "headline": "Cathie Wood Just Bought $17 Million of Alphabet Across 2 ARK Funds",
      "headlineKo": "Cathie Wood는 2개의 ARK 펀드에 걸쳐 1,700만 달러 규모의 알파벳을 매입했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=03be995f6ee846f422da0f98a93f71127b418aac736751841ff9c0497b2328f8",
        "publishedAt": 1795625504,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cathie Wood는 2개의 ARK 펀드에 걸쳐 1,700만 달러의 알파벳을 구입했습니다 | TIKR.com General Investing Cathie Wood는 2개의 ARK 펀드에서 1,700만 달러의 알파벳을 구입했습니다 Aditya Raghunath • 5분 읽기 검토자: Michael Douglass 마지막 업데이트 N",
        "이번 매수는 알파벳이 52주 최고가보다 32% 낮고 5년 평균 22배보다 낮은 20배의 선도 수익으로 거래되는 것입니다.",
        "분석가들의 395달러 합의 목표는 2028년 수익 추정치의 약 21배이므로 수익 성장만으로도 상승 여력이 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $17 Million, $17 million, 32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $17 Million, $17 million, 32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "36a8bf547ec40f42fc29",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Is Down 60% From Its June High. J.P. Morgan Still Sees $200",
      "headlineKo": "오라클은 6월 고점 대비 60% 하락했습니다. J.P. Morgan은 여전히 ​​200달러를 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3589c4ce2c7d1de35499a0de8e18c0913456ad6a08dd1bd41e419ed0d2a91d0a",
        "publishedAt": 1795625456,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클은 6월 고점 대비 60% 하락했습니다.",
        "Morgan은 여전히 ​​200달러를 보고 있습니다 | TIKR.com General Investing Oracle은 6월 최고치보다 60% 하락했습니다.",
        "Morgan은 여전히 ​​200달러를 봅니다. David Hanson • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 11월 25일 Canva의 Bianca Constantinescu 이미지 주요 내용 J.P."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 60%, $200, 83% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 60%, $200, 83% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5429b271ccd0e33681f9",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Prediction: IREN’s Microsoft Deal Could Be Just the Beginning of Its Next Growth Phase",
      "headlineKo": "예측: IREN의 Microsoft 거래는 다음 성장 단계의 시작일 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=82d5a8c1ea468fba55d8bca0ae308926e237ab4efb984c4cf6ee347a1b71d8a5",
        "publishedAt": 1795624439,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: IREN의 Microsoft 거래는 다음 성장 단계의 시작일 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,197.40 −0.02% Dow Jones 50,392.00 +0.77% Nasdaq 100 26,021.40 −0.74% Russell 2000 2,705.67 +0.80% S&P 500 7,197.40 −0.02% 다우존스 50,392.00 +0.77% 나스닥 100 26,021.40 −0.74% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $14.90., 60.55%, $70.71, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $14.90., 60.55%, $70.71, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "674d3e0c1a03d92f7041",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "SNDK",
        "STX",
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
      "headline": "Tesla Sinks 5%, Sandisk Down 13% as AI Selloff Deepens and EU Stalls FSD Approval",
      "headlineKo": "AI 매각이 심화되고 EU가 FSD 승인을 지연함에 따라 Tesla는 5% 하락, Sandisk는 13% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=92f351eadad0432cc90d3b37f23e944b7e27bd16708e901c04486fc6938c6efe",
        "publishedAt": 1795624301,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 매각이 심화되고 EU가 FSD 승인을 지연함에 따라 Tesla는 5% 하락, Sandisk는 13% 하락 | TIKR.com 일반 투자 Tesla는 5% 하락하고, Sandisk는 AI 매각이 심화되고 EU가 FSD 승인을 중단함에 따라 13% 하락합니다. Chris Arnold • 4분 읽기 검토자: Chris",
        "Canva를 통한 공군 사진 주요 내용 AI 판매가 심화되고 EU가 완전 자율 주행에 대한 투표를 12월로 연기하면서 Tesla는 오늘 5% 하락했습니다.",
        "Sandisk와 Seagate는 메모리 축소 전망과 관세 보고서로 인해 더욱 하락했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 13%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 13%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ccb6009c1950d321a97a",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Trump Just Floated Taking a Stake in Nvidia. An Intel-Style Deal Could Be Worth $380 Billion",
      "headlineKo": "트럼프는 엔비디아 지분을 인수하면서 떠돌았습니다. 인텔 스타일 거래의 가치는 3,800억 달러에 달할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=68707db74465da173a9255dc6e23a776c886cdb67da9413c5d4df9887122ff2b",
        "publishedAt": 1795623948,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "트럼프는 엔비디아 지분을 인수하면서 떠돌았습니다.",
        "인텔 스타일의 거래는 3,800억 달러의 가치가 있을 수 있습니다 - 연중무휴 월스트리트",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,230.20 +0.75% Dow Jones 50,382.40 +0.35% Nasdaq 100 26,287.50 +1.29% Russell 2000 2,717.72 +0.58% S&P 500 7,230.20 +0.75% 다우존스 50,382.40 +0.35% 나스닥 100 26,287.50 +1.29% 러셀 20"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $380 Billion, $380 billion, 9.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $380 Billion, $380 billion, 9.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e6d765f9801a10cc8f6f",
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
      "headline": "Can PINS's New Microsoft Advertising Deal Boost Its Competitive Edge?",
      "headlineKo": "PINS의 새로운 Microsoft 광고 거래가 경쟁 우위를 강화할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=901b40018919cf3a0535968d6f6df1a430f67812643e36779c8dae548a4c3ac1",
        "publishedAt": 1795622340,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Can PINS's New Microsoft Advertising Deal Boost Its Competitive Edge?",
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
      "id": "a24e38b8af1cd97db15c",
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
      "headline": "Tesla Slides 6% as EU Delays Vote on Its Self-Driving Software; Rivian and Lucid Drop 4%",
      "headlineKo": "EU가 자율주행 소프트웨어에 대한 투표를 연기하면서 Tesla는 6% 하락했습니다. 리비안과 루시드 드롭 4%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f288f7f05044535871a8ec162d5f9a27236f09c26e30adb7f5b4ede486951ed5",
        "publishedAt": 1795622051,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EU가 자율주행 소프트웨어에 대한 투표를 연기하면서 Tesla는 6% 하락했습니다. Rivian 및 Lucid Drop 4% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,197.40 −0.02% Dow Jones 50,392.00 +0.77% Nasdaq 100 26,021.40 −0.74% Russell 2000 2,705.67 +0.80% S&P 500 7,197.40 −0.02% 다우존스 50,392.00 +0.77% 나스닥 100 26,021.40 −0.74% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 4%, $362.91, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, 4%, $362.91, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7c7deafa69a82d8f1c86",
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
      "headline": "Amazon Stocks Fall 4.26% as $215 Billion Capex Run Rate Meets AI Doubts",
      "headlineKo": "2,150억 달러의 Capex 실행률이 AI 의심을 충족함에 따라 Amazon 주식은 4.26% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=462bc859409d8f74f8ac3472bf27e666dc0f29c82668a595210b41a3f911e818",
        "publishedAt": 1795621277,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2,150억 달러의 Capex 실행률이 AI 의심을 충족함에 따라 Amazon 주식은 4.26% 하락"
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
      "id": "734651265c22d48a641f",
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
      "headline": "Coherent’s Director Bought $15 Million of Stock as It Plunged 13%",
      "headlineKo": "코히런트 이사는 주가가 13% 급락하면서 1,500만 달러 상당의 주식을 매입했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60663571b33fa02861fff0a68fc1771926c5edd3a4493926e910766d1ca811ff",
        "publishedAt": 1795620532,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Coherent의 이사는 24/7 Wall St.에서 주가가 13% 급락하면서 1,500만 달러 상당의 주식을 구입했습니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,235.30 +0.82% Dow Jones 50,416.40 +0.42% Nasdaq 100 26,260.80 +1.19% Russell 2000 2,713.77 +0.43% S&P 500 7,235.30 +0.82% 다우존스 50,416.40 +0.42% 나스닥 100 26,260.80 +1.19% 러셀 20",
        "© Shutterstock 2026년 11월 20일, Coherent( NYSE:COHR | COHR Price Prediction )가 12.90% 하락한 동안 Stephen Pagliuca 이사와 연계된 법인은 공개 시장에서 총 82,000주에 달하는 8건의 주식을 매입했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $15 Million, 13%, 12.90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $15 Million, 13%, 12.90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d4eeec0221a4d447e716",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Does RSP Hold Up Better Than SPY In Sell-Offs?",
      "headlineKo": "매도에서 RSP가 SPY보다 더 나은 성능을 발휘합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69ac0e310b3db78f05e898d7595b92019b015f98a4cdddf204658975c234fc7a",
        "publishedAt": 1795619320,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "매도에서 RSP가 SPY보다 더 나은 성능을 발휘합니까?",
        "| Trefis Trefis 스토리라인 매도 시 RSP가 SPY보다 더 잘 견디나요?",
        "2026년 11월 25일 · 작성자: Trefis Team RSP YTD +13.0% SPY YTD +6.2% QQQ YTD +4.2% RSP 분석 → 최신 기사인 Nvidia의 반등이 VOO 소유자를 온전하게 만들었습니까?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13.0%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13.0%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "60109d6be69347b29e2f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "What Pulled Marvell Stock Down On Tuesday?",
      "headlineKo": "화요일에 Marvell 주식이 하락한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0adb48f821236a948e855567eb31e634bd53ed9d1dd764066a9a0519a64498b",
        "publishedAt": 1795616066,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "화요일에 Marvell 주식이 하락한 이유는 무엇입니까?",
        "| Trefis Trefis 스토리라인 화요일에 Marvell 주식이 하락한 이유는 무엇입니까?",
        "2026년 11월 25일 · 작성자: Trefis Team MRVL YTD +54.3% SPY YTD +5.9% QQQ YTD +3.5% MRVL 분석 → 오늘의 큰 이야기: IPO 가격 이하의 인류: 자이언츠가 돌아오나요?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 54.3%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 54.3%, 5.9%, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "496d55db5cad07e9572f",
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
      "headline": "Prediction: Qualcomm Becomes the Top Auto Chipmaker in 2027, “a Story the Market Has Quietly Ignored,” per SemiAnalysis",
      "headlineKo": "예측: Qualcomm은 2027년 최고의 자동차 칩 제조업체가 됩니다. SemiAnalytics에서는 \"시장이 조용히 무시해 온 이야기\"입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=259c522c58ecf2dd72da051301046d2483ef1ece7b9ad7adb11e94817e309820",
        "publishedAt": 1795615557,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 QCOM의 사업과 관련된 'Prediction: Qualcomm Becomes the Top Auto Chipmaker in 2027, “a Story the Market Has Quietly Ignored,” per SemiAnalysis' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "5a2c7e82f587da9f2766",
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
      "headline": "Palantir’s CEO Alex Karp Sold $75 Million. Co-Founder Peter Thiel Bought $122 Million",
      "headlineKo": "Palantir의 CEO인 Alex Karp는 7,500만 달러를 매각했습니다. 공동 창업자 피터 틸(Peter Thiel), 1억 2200만 달러 매입",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7fcb3980de5f8ed26d011b8cb92d61ece7e5c8729ebc14b71d23ad96bb2519ce",
        "publishedAt": 1795614827,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir의 CEO인 Alex Karp는 7,500만 달러를 매각했습니다.",
        "공동 창업자 피터 틸(Peter Thiel)은 월스트리트 24시간 연중무휴에서 1억 2,200만 달러를 구입했습니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,197.40 −0.02% Dow Jones 50,392.00 +0.77% Nasdaq 100 26,021.40 −0.74% Russell 2000 2,705.67 +0.80% S&P 500 7,197.40 −0.02% 다우존스 50,392.00 +0.77% 나스닥 100 26,021.40 −0.74% 러셀 20"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $75 Million, $122 Million, $122.3 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $75 Million, $122 Million, $122.3 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ea6f7b04320358249fb2",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MOD",
      "relatedTickers": [
        "AMD",
        "MOD",
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
      "headline": "Modine Manufacturing Targets Up to $6.5 Billion in Data Center Revenue by 2029",
      "headlineKo": "Modine Manufacturing은 2029년까지 데이터 센터 매출 최대 65억 달러 목표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=404300b53da3a36435d95b25f7348d0dca38e9dfa908f8cc04459a65ebd9aba9",
        "publishedAt": 1795612374,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 MOD의 사업과 관련된 'Modine Manufacturing Targets Up to $6.5 Billion in Data Center Revenue by 2029' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "caf6bd72fcd62c40424f",
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
      "headline": "Did Eaton Stock Fall Alone Or With Its Group?",
      "headlineKo": "Eaton 주식은 단독으로 하락했습니까, 아니면 그룹과 함께 하락했습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fff5118da2e75f68aab4a9a12048024ced699dd49c14b632c5696e290ab83292",
        "publishedAt": 1795610638,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Eaton 주식은 단독으로 하락했습니까, 아니면 그룹과 함께 하락했습니까?",
        "| Trefis Trefis 스토리라인 Eaton 주식은 단독으로 하락했습니까, 아니면 그룹과 함께 하락했습니까?",
        "2026년 11월 25일 · Trefis 팀 ETN YTD +0.9% SPY YTD +5.9% XLI YTD +5.9% ETN 분석 → 오늘의 큰 이야기: IPO 가격 이하의 인류: 자이언츠가 돌아오나요?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.9%, 5.9%, 5.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.9%, 5.9%, 5.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b30ed72c0889c1b3d1f4",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Wedbush Initiates Coverage On Quanta Services with Outperform Rating, Announces Price Target of $676",
      "headlineKo": "Wedbush, 우수한 평가를 받아 Quanta 서비스에 대한 보장 시작, $676의 목표 가격 발표",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=9e019a7a4e9e24cb8d23d7cfe1fef1f7afcf8314ae0ccffa98ff9a075ec83a6c",
        "publishedAt": 1795609048,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wedbush, 우수한 평가를 받아 Quanta 서비스에 대한 보장 시작, $676의 목표 가격 발표"
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
          "ticker": "PWR",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "4435bec3fb9a7a06053c",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "STX",
      "relatedTickers": [
        "QQQ",
        "SPY",
        "STX"
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
      "headline": "Prediction: Seagate’s Record Profitability Could Be Just the Beginning, 27% Upside Ahead",
      "headlineKo": "예측: Seagate의 기록적인 수익성은 시작일 뿐이며 앞으로 27% 상승 여력이 있을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=75c78e6926208a4d1f20340377d6b3988adc734769e7d5b633635064452deb7d",
        "publishedAt": 1795609034,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: Seagate의 기록적인 수익성은 시작에 불과할 수 있으며 앞으로 27% 상승할 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,234.40 +0.81% Dow Jones 50,450.40 +0.49% Nasdaq 100 26,263.10 +1.20% Russell 2000 2,718.17 +0.60% S&P 500 7,234.40 +0.81% 다우존스 50,450.40 +0.49% 나스닥 100 26,263.10 +1.20% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 27%, $519.17., $659.27 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 27%, $519.17., $659.27 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "dbfa4d6b58836c782ba1",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "PWR",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Should Raised 2026 Outlook Require Action From Quanta Services (PWR) Investors?",
      "headlineKo": "2026년 전망을 높이려면 Quanta Services(PWR) 투자자의 조치가 필요합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f40f75158dd96aaf1e4908e4b795eeacce93124e604efcb409e416fca7b3871",
        "publishedAt": 1795608850,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 PWR의 사업과 관련된 'Should Raised 2026 Outlook Require Action From Quanta Services (PWR) Investors?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9af6ba30007b89649d9a",
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
      "headline": "Applied Materials (AMAT) Stock Sees Fair Value Cut As Analysts Trim Targets",
      "headlineKo": "Applied Materials (AMAT) 주식은 분석가가 목표를 조정함에 따라 공정 가치가 감소한 것으로 보입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b9fcbfd741d2030739d0fed169ef7c3a71fca9d2494dca83c7295f3eee4d31a7",
        "publishedAt": 1795608810,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials (AMAT) Stock Sees Fair Value Cut As Analysts Trim Targets",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMAT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "ccfed0703d05cdbb6816",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Does Apple's New Silence Mean You Should Worry?",
      "headlineKo": "Apple의 새로운 침묵은 당신이 걱정해야 한다는 것을 의미합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eba1b49b5b4d72a66eb80b07f4d21d59bd158c4a0865b46174f10a70e47b2f20",
        "publishedAt": 1795608473,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple의 새로운 침묵은 걱정해야 한다는 것을 의미합니까?",
        "| Trefis Trefis 스토리라인 Apple의 새로운 침묵으로 인해 걱정해야 합니까?",
        "2026년 11월 25일 · 작성자: Trefis Team AAPL YTD +30.7% SPY YTD +6.2% QQQ YTD +4.2% AAPL 분석 → 오늘의 큰 이야기: IPO 가격 이하의 인류: 자이언츠가 돌아오나요?"
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30.7%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30.7%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "50c650414f8e3ab242ee",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Is KLA Stock A Buy Today?",
      "headlineKo": "KLA 주식을 오늘 매수할 수 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ea8466ad38455e6d50fd68038f7bfc4e5b4f424831b16625fd0a9b8854a86242",
        "publishedAt": 1795607570,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis Trefis Storylines KLA 주식을 오늘 구매할 수 있나요?",
        "2026년 11월 25일 · 작성자 Trefis Team KLAC YTD +10.6% SPY YTD +6.2% QQQ YTD +4.2% KLAC 분석 → 오늘의 큰 이야기: IPO 가격 이하의 인류: 자이언츠가 돌아오나요?",
        "당신은 KLA가 사업적으로 하는 일이 마음에 들지만 여전히 그 주식에 대해 걱정할 수도 있습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10.6%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "순이익이 크게 변해도 세금이나 투자평가손익 때문일 수 있습니다. 매출과 영업이익이 함께 좋아졌는지 보세요.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10.6%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "cba7957342d622aeed04",
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
      "headline": "Micron Stock Just Got a Brutal Downgrade -- BNP Paribas Slashes Price Target 54%",
      "headlineKo": "마이크론 주식이 잔혹하게 하락했습니다 - BNP 파리바, 목표 가격 54% 인하",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ff863a943f2c86789aefabbf459138292bedffdeb4eabd3def0320cbb03dc678",
        "publishedAt": 1795607228,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Stock Just Got a Brutal Downgrade -- BNP Paribas Slashes Price Target 54%",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "9a1b864ca446ea9436a0",
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
      "headline": "Could Meta Be A Value Stock For Your Portfolio?",
      "headlineKo": "메타가 귀하의 포트폴리오에 가치주가 될 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f73bfeabb7045921480ca119ad4beaa96cbebbca8afddb94a74df330d5172d6e",
        "publishedAt": 1795607106,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타가 귀하의 포트폴리오에 가치주가 될 수 있을까요?",
        "| Trefis Trefis 스토리라인 메타가 귀하의 포트폴리오에 대한 가치주가 될 수 있습니까?",
        "2026년 11월 25일 · 작성자: Trefis Team META YTD -10.4% SPY YTD +6.2% XLC YTD -10.5% META 분석 → 오늘의 큰 이야기: IPO 가격 이하의 인류: 자이언츠가 돌아오나요?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10.4%, 6.2%, 10.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10.4%, 6.2%, 10.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "527e19fa80620c23c9fa",
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
      "headline": "Is Micron's Record Margin Squeezing Apple And HP?",
      "headlineKo": "마이크론의 기록적인 마진이 애플과 HP를 압박하고 있는가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b1347717473954d72a1c240dca993d9ce2cc8da2fbe7f9b4bb49004b4512f49",
        "publishedAt": 1795606689,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론의 기록 마진이 애플과 HP를 압박하고 있는가?",
        "| Trefis Trefis Storylines Micron의 기록 마진이 Apple과 HP를 압박하고 있습니까?",
        "2026년 11월 25일 · Trefis Team MU YTD +120.8% SPY YTD +6.2% QQQ YTD +4.2% MU 분석 → Micron Technology는 PC, 휴대폰 및 서버 내부의 메모리 칩을 만듭니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 120.8%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 120.8%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b507e0b53ff7f37c802a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Jensen Huang Says Nvidia's Next-Gen Vera Rubin Chips Will Generate $40 Billion in Revenue per Gigawatt, Up From $25 Billion for Grace Blackwell. What That Means for NVDA's Growth Runway.",
      "headlineKo": "Jensen Huang은 Nvidia의 차세대 Vera Rubin 칩이 Grace Blackwell의 250억 달러에서 기가와트당 400억 달러의 수익을 창출할 것이라고 말했습니다. NVDA의 성장 활주로에 대한 의미.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf8fb51cb6dab0b63d13acbb10365543fe09504596082b5a1c9ac068c1cc6d8f",
        "publishedAt": 1795606500,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang은 Nvidia의 차세대 Vera Rubin 칩이 Grace Blackwell의 250억 달러에서 기가와트당 400억 달러의 수익을 창출할 것이라고 말했습니다.",
        "NVDA의 성장 활주로에 대한 의미.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 $58,603.00 -2.9% -$1,762.67 개미 $81.91 -6.5"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $40 Billion, $25 Billion, 5.86% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $40 Billion, $25 Billion, 5.86% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "71f45c46890fe1073c90",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "NVDA",
        "QQQ"
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
      "headline": "The Nasdaq Is Heading Toward A Bear Market As Growth Fears Mount",
      "headlineKo": "나스닥은 성장에 대한 두려움이 커지면서 약세장으로 향하고 있습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=135b2d03702f649cd8d08ab3a6ebe3c74d5fcedab87300b112211d427eca8171",
        "publishedAt": 1795606339,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "나스닥은 성장에 대한 우려가 커지면서 약세장으로 향하고 있습니다 | Alpha Mott Capital Management 투자 그룹 리더 찾기 요약 연준 금리 불확실성과 Nvidia 관련 변동성이 수렴하여 성장 전망을 불안하게 만들었습니다.",
        "5년 손익 분기점 인플레이션은 약 2.1%로 하락해 2024년 9월 이후 최저 수준을 기록했으며, 5년 실질 수익률은 약 2.5%를 유지하고 있습니다.",
        "금속 및 은 가격 하락은 성장 우려를 시사합니다. AI 데이터 센터 지출 둔화는 가능하지만 불확실한 설명입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.1%, 2.5%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 2.1%, 2.5%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d45925d827ca658e8618",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom Bought $1 Billion Worth of Anthropic’s IPO, and It Has Tens of Billions More Riding on Its Success.",
      "headlineKo": "Broadcom은 10억 달러 상당의 Anthropic IPO를 매입했으며 그 성공에 수백억 달러를 더 투자했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f551b24ccd3b89b1384abd08dc9232c219cc9822c91e2d765f25591009dcbfe",
        "publishedAt": 1795605602,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom은 10억 달러 상당의 Anthropic IPO를 매입했으며 그 성공에 수백억 달러를 더 투자했습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 $58,603.00 -2.9% -$1,762.67 개미 $81.91 -6.5",
        "회사는 올해 Anthropic과 1,612억 달러 규모의 임대 계약을 체결했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1 Billion, $161.2 billion, $42 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1 Billion, $161.2 billion, $42 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3f0cfe1051c10fee1089",
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
      "headline": "Can Broadcom Stock Hit $450?",
      "headlineKo": "Broadcom 주식이 450달러에 도달할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d9cd553c1366b14f09df1e0f570e79d1b9fe1caba2ef2a4fc60639425ff13b72",
        "publishedAt": 1795604414,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis Trefis 스토리라인 Broadcom 주식이 450달러에 도달할 수 있습니까?",
        "2026년 11월 25일 · Trefis Team AVGO YTD -12.5% ​​SPY YTD +6.2% QQQ YTD +4.2% AVGO 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내주세요.",
        "Broadcom(AVGO) 주가는 2026년 11월 12일 마감 이후 17.4% 하락했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $450, 12.5%, 6.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $450, 12.5%, 6.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4abbf15156f71bb2a08b",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV"
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
      "headline": "Can GE Vernova's Trench Deal Accelerate Its Electrification Growth?",
      "headlineKo": "GE Vernova의 트렌치 거래가 전기화 성장을 가속화할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6215b1b0347514d3f01768e2e9ea6f00e17366b6c839f3ad788b6dd0ad516f36",
        "publishedAt": 1795604040,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova의 트렌치 거래가 전기화 성장을 가속화할 수 있습니까?"
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
          "ticker": "GEV",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "92d7e42ef9556a05d8cb",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oppenheimer Cut Its Marvell Target by $100. It Still Sees 147% Upside",
      "headlineKo": "Oppenheimer는 Marvell 목표를 100달러 줄였습니다. 여전히 147% 상승 여력이 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a04d9d1a32851e8f0e4098fa22d9dca208d9face22ea722fdc86c5a4e9004abb",
        "publishedAt": 1795603771,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oppenheimer는 Marvell 목표를 100달러 줄였습니다.",
        "여전히 147% 상승 여력 | TIKR.com General Investing Oppenheimer는 Marvell 목표를 100달러 줄였습니다.",
        "여전히 147% 상승 여력 Gian Estrada • 4분 읽기 검토자: David Hanson 최종 업데이트 2026년 11월 25일 @ภгаพขאוsoselote via Canva, @titima from ภгаพข่มTitima Ongkantong via Canva 주요 사항 Oppenheimer는 Marvell Technology 가격을 인하했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $100., 147%, $325 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $100., 147%, $325 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6b4421be54c0c4fdb156",
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
      "headline": "Salesforce Is 28% Off Its High: Why Guggenheim Still Sees 55% Upside Ahead of Earnings",
      "headlineKo": "Salesforce는 최고치에서 28% 할인되었습니다: Guggenheim이 여전히 수익보다 55% 상승 여력이 있다고 보는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5c0fd61fc49e859aebde86256f65705fb7b8374aaeeaf3cc59d75ccb5d30daca",
        "publishedAt": 1795602336,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce는 최고치에서 28% 할인되었습니다: Guggenheim이 여전히 수익보다 55% 더 높은 상승 여력을 보이는 이유 | TIKR.com 일반 투자 Salesforce가 최고치에서 28% 할인됨: Guggenheim이 여전히 수익보다 55% 상승 여력이 있다고 보는 이유 Gian Estrada • 4분 읽기 검토됨",
        "Salesforce 파트너 50명을 대상으로 설문조사를 실시한 결과 당일 종가보다 55% 높은 24일입니다.",
        "Salesforce는 지난 분기에 6%의 유기적 매출 성장을 기록하며 52주 최고치보다 28% 낮으며 Citi는 핵심 제품에 대한 수요 둔화를 경고했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 28%, 55%, $300 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 28%, 55%, $300 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "19c1c5254ee00de2bcd8",
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
      "headline": "Market Chatter: Meta Platforms' Muse Seen Boosting Advertising Revenue Via Instagram",
      "headlineKo": "시장 잡담: 인스타그램을 통해 광고 수익을 증대시키는 메타 플랫폼의 뮤즈",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=15f7d8d7f46a1ec28dd4704181cbdafc9064d903fd10e4dbc3ac193f0b473748",
        "publishedAt": 1795602004,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Market Chatter: Meta Platforms' Muse Seen Boosting Advertising Revenue Via Instagram",
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
      "id": "8c6b85c4f2e5bb757f75",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Market Chatter: Google Ends ABC Deal Amid Australian Media Funding Retreat",
      "headlineKo": "시장 잡담: Google은 호주 미디어 자금 지원이 철회되는 가운데 ABC 거래를 종료합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f0cc25a87ab7c17dd1accb3cddb8d4ad5f17285420fa774a4314772550bb3f8",
        "publishedAt": 1795600108,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Market Chatter: Google Ends ABC Deal Amid Australian Media Funding Retreat",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "07f101f0724707f5284f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "INTC",
        "MU",
        "NVDA",
        "ORCL"
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
      "headline": "Billionaire David Tepper Dumped Appaloosa's Stake in AMD and Broadcom and Piled Into an Artificial Intelligence (AI) Stock Trading at 44x Forward Adjusted EPS",
      "headlineKo": "억만장자 David Tepper는 AMD와 Broadcom에 대한 Appaloosa의 지분을 버리고 44배의 조정 EPS로 인공 지능(AI) 주식 거래에 투자했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34ccafa095a063c896ae462a37d15bf60ff3e11df8943bfce28ccef52dd83158",
        "publishedAt": 1795599602,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 25%, 44 times, 13%, 50%, 221%, $16.7 billion, $34.8 billion, 5.65%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMD의 사업과 관련된 'Billionaire David Tepper Dumped Appaloosa's Stake in AMD and Broadcom and Piled Into an Artificial Intelligence (AI) Stock Trading at 44x Forward Adjusted EPS' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b21cb2a9ffda37a3ede7",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Same Nasdaq-100 Companies, Different Weighting: The Case For Equal Weight",
      "headlineKo": "동일한 Nasdaq-100 기업, 다른 가중치: 동일 가중치의 경우",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b3c75c1e86616f8358287f19e3137550d7027848e6148c77a761fda7b0163e2c",
        "publishedAt": 1795599300,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "같은 Nasdaq-100 기업, 다른 가중치: 동일 가중치의 경우 | 알파 찾기 Invesco US 3.45K 팔로워 요약 팔로우 요약 소수의 거대 기업이 시장 선두에 있는 경우에도 Nasdaq-100 지수 성과의 상당 부분을 주도할 수 있습니다.",
        "동일 가중치 접근법은 각 Nasdaq-100 회사에 동일한 시작 가중치를 부여하고 해당 가중치를 분기마다 재설정합니다.",
        "Invesco QQQ Equal Weight ETF는 모든 Nasdaq-100 기업을 동일한 가중치로 보유하며 상한선 가중치 전략을 보완할 수 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 46% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 46% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f76f73eb2538dbafe478",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML",
        "AVGO",
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
      "headline": "ASML Dips Premarket Amid Chip Rout: Dutch Lawmakers Push Back On Proposed US Curbs On Sales To China",
      "headlineKo": "ASML, 칩 대패 속에 시장 전 하락: 네덜란드 국회의원들이 미국의 중국 판매 억제 제안을 철회",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5acd245466d1fb279b14a316ff44629d9539c761e6cdc584594b7e30ded8983",
        "publishedAt": 1795598735,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML은 칩 대패로 인해 시장 전 하락: 네덜란드 국회의원들은 중국 AI 에이전트에 대한 미국의 판매 제한 제안을 철회했습니다. Trending News Earnings All DIA 1.29% SPY 1.87% QQQ 2.81% Trending DELL 5.17% SPY 1.87% AVGO 4.07% QQQ 2.81% SOXL 14.20% GLD 1.04%",
        "ASML은 칩 대패로 인해 시장 전 하락: 네덜란드 국회의원들은 미국의 중국 판매 억제 제안을 철회했습니다.",
        "네덜란드와 일본 같은 동맹국이 중국에 대해 더욱 엄격한 수출 통제를 채택하도록 하는 법안 통과가 가까워졌습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.29%, 1.87%, 2.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.29%, 1.87%, 2.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9610f0f320c2c026b072",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "SanDisk Trades at 4.6x Earnings—And Still Got Cut in Half",
      "headlineKo": "SanDisk는 4.6배의 수익으로 거래되지만 여전히 절반으로 삭감되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=96c3c409fb80302173ebfae582cdbfa56e70db5d400863483670111106293fb7",
        "publishedAt": 1795598702,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SanDisk Trades at 4.6x Earnings—And Still Got Cut in Half",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "df3d1cfedba93fdcba55",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "GEV",
        "NVDA",
        "VRT"
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
      "headline": "Vertiv Lost 11% in a Month. Evercore Cut Its Target, but Still Sees 58% Upside",
      "headlineKo": "Vertiv는 한 달 만에 11% 손실을 입었습니다. Evercore는 목표를 줄였지만 여전히 58%의 상승 여력을 갖고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0348af3dba6c79c14a8c5fac49f52ec816486216ca8489e76a07eaa15345d953",
        "publishedAt": 1795597461,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Evercore, 목표를 하향 조정했지만 여전히 58% 상승 여력 | TIKR.com General Investing Vertiv는 한 달 만에 11% 손실을 입었습니다.",
        "Evercore는 목표를 하향 조정했지만 여전히 58% 상승한 Wiltone Asuncion • 6분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 25일 @P.CHOTHANAWARAPONG, ภгаพขא JU.STOCKER에서 Canva를 통해 @P.CHOTHANAWARAPONG, Jookiko에서 Canva를 통해 @Kanpisut",
        "데이터 센터 건설에 대한 중기적 공포와 Nvidia(NVDA), GE Vernova(GEV) 및 Bloom Energy(BE)에도 타격을 준 AI 매각으로 인해 수익 급증이 사라졌습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, 58%, 61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, 58%, 61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ca44ba1adfebb9432242",
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
      "headline": "Coherent Director Stephen Pagliuca Just Bought $15.2 Million of Stock at Less Than Half Its June High",
      "headlineKo": "Coherent Director Stephen Pagliuca는 6월 최고치의 절반도 안되는 가격에 1,520만 달러의 주식을 구입했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c327dedc0c2ccdc3a74a02aae878c03240611e5446c75ff2f34135182e70d81f",
        "publishedAt": 1795597389,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "일관된 이사인 Stephen Pagliuca는 6월 최고치의 절반도 안되는 가격에 1,520만 달러의 주식을 구입했습니다 | TIKR.com General Investing Coherent Director Stephen Pagliuca는 6월 최고치의 절반도 안되는 가격에 1,520만 달러의 주식을 매입했습니다.",
        "20일, 주당 평균 가격은 185.59달러로 6월 최고치의 절반에도 미치지 못합니다.",
        "그는 좋은 가격을 지불한 것으로 보입니다. 분석가들은 주가가 하락하는 동안 수익 추정치를 올렸고, 현재 이 회사의 선도 배수는 5년 평균보다 낮습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $15.2 Million, $15.2 million, $185.59 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $15.2 Million, $15.2 million, $185.59 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "415c20bce74a85359592",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Lumentum Has Lost 42% Since October 28 Despite Its Best Quarter Ever. Marvell’s Stock Is Why",
      "headlineKo": "Lumentum은 역대 최고의 분기에도 불구하고 10월 28일 이후 42% 손실을 입었습니다. Marvell의 주식이 중요한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04c52ff729eaf3f8784c59c7ddccc040d3a13d1cca6adb44e8e2ca06be51cddf",
        "publishedAt": 1795595940,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum은 역대 최고의 분기에도 불구하고 10월 28일 이후 42% 손실을 입었습니다.",
        "Marvell의 주식이 필요한 이유 | TIKR.com General Investing Lumentum은 역대 최고의 분기에도 불구하고 10월 28일 이후 42% 손실을 입었습니다.",
        "Marvell의 주식이 Rexielyn Diaz인 이유 • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 11월 25일 @da-kuk, Getty Images Signature via Canva 주요 내용 Lumentum 주가는 회계연도 1분기에도 불구하고 10월 28일 이후 42% 하락했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 42%, 136.5%, $1.26 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 42%, 136.5%, $1.26 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "6c7a6c9f17e60787a68f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "AVGO",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "MU, SKHY, SNDK Stocks In Focus After TrendForce Lowers DRAM Pricing Forecast",
      "headlineKo": "TrendForce가 DRAM 가격 예측을 낮춘 후 MU, SKHY, SNDK 주식에 주목",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=873869e31a8598101fc396de900f98666b3bf5bf205776772350af4d0d7bc751",
        "publishedAt": 1795595230,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TrendForce가 DRAM 가격 예측을 낮춘 후 MU, SKHY, SNDK 주식에 주목 AI 에이전트 동향 뉴스 수익 전체 DIA 1.29% SPY 1.87% QQQ 2.81% 추세 DELL 5.17% SPY 1.87% AVGO 4.07% QQQ 2.81% SOXL 14.20% GLD 1.04% DE 3.38% AMBA 34.23% MST",
        "TrendForce가 DRAM 가격 예측을 낮춘 후 MU, SKHY, SNDK 주식에 주목 소비자 가전 판매 부진과 중국 클라우드 서비스 제공업체의 주문 감소로 인해 특정 메모리 제품에 대한 수요가 압박을 받고 있습니다.",
        "2025년 7월 20일 중국 베이징에서 열린 제3회 중국 국제 공급망 엑스포 마이크론 부스에 패키지 메모리 칩이 포함된 모듈이 전시되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.29%, 1.87%, 2.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.29%, 1.87%, 2.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e233e1c43de48f60291a",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "SPY",
      "relatedTickers": [
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500 ‘Quite Cheap’ After Selloff: Tom Lee Counters Citadel’s 2018 Warning, Says AI ‘Supply Shock’ Could Ease",
      "headlineKo": "S&P 500 매도 후 '매우 저렴': Tom Lee, Citadel의 2018년 경고에 맞서 AI '공급 충격'이 완화될 수 있다고 말함",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8df7a5a4a49a5e395867e7d15455b8da089f8c1f0a6f49b34204e4f7309b415e",
        "publishedAt": 1795593619,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500 매도 후 '매우 저렴': Tom Lee, Citadel의 2018년 경고에 맞서 AI '공급 충격'이 완화될 수 있다고 말함"
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
          "ticker": "SPY",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ee1c5c365569b42486a0",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR",
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
      "headline": "Palantir: The AI Profit Pool Is Shifting",
      "headlineKo": "Palantir: AI 이익 풀이 변화하고 있습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bbd9536a4ed8e1c1e45a5e96267971ad4a5b2acd6b27252d62ff276cb667d1ab",
        "publishedAt": 1795591808,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 주식: AI 이익 풀이 이동하고 있습니다(NASDAQ:PLTR) | Alpha Infinity Curve 추구 팔로워 1.22K 팔로우 요약 Palantir는 AI 상품화의 이점을 누리고 있으며 주권 AI를 통해 기업은 최대",
        "상업 수익은 전년 대비 148% 증가한 9억 8,400만 달러를 기록했으며 순 달러 유지율은 165%로 증가했습니다.",
        "Palantir의 47% GAAP 영업 마진은 자본 집약적인 개척 모델 개발자와는 대조적으로 수익성 있는 비즈니스 모델을 강조합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 95%, 148%, $984 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 95%, 148%, $984 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ee69f7e169e095a00d04",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
        "GOOGL",
        "INTC",
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
      "headline": "Alphabet Has $251 Billion Invested In 2 of Its Biggest Artificial Intelligence Partners",
      "headlineKo": "Alphabet, 최대 인공지능 파트너 2곳에 2,510억 달러 투자",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7f514bf23501c0e6ff9e5d689c788eac2f25c8bba676c8ea3b0e805f4db47489",
        "publishedAt": 1795591742,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 1.05%, 1.08%, $251 billion, $200 billion, 6.54%, 5.65%, $174 billion, $2 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Alphabet Has $251 Billion Invested In 2 of Its Biggest Artificial Intelligence Partners' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "644888c524bbe2e87062",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "AVGO",
        "GOOGL",
        "MU",
        "NVDA",
        "ORCL",
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
      "headline": "AI Concerns Resurface? ORCL, GOOGL, SPCX, CRWV Credit Default Swap Spreads Hit Records As NVDA, ANT Tumble",
      "headlineKo": "AI 우려 재부상? ORCL, GOOGL, SPCX, CRWV 신용 기본 스왑으로 NVDA, ANT Tumble으로 히트 기록 확산",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ac599c6404e881c0a4503e8042450bb20ce30c035d91e8b872505b947450078",
        "publishedAt": 1795589778,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ORCL, GOOGL, SPCX, CRWV 신용 기본 스왑은 NVDA, ANT Tumble AI 에이전트로 히트 기록을 확산시킵니다. 동향 뉴스 수익 전체 DIA 1.29% SPY 1.96% QQQ 2.81% 추세 DELL 5.17% SPY 1.96% AVGO 4.11% QQQ 2.81% SOXL 14.23% GLD 0.93% MU 6.64% AMBA 34.",
        "ORCL, GOOGL, SPCX, CRWV 신용 기본 스왑으로 NVDA, ANT 공중제비 광고로 히트 기록 확산 | 광고를 제거하세요.",
        "ORCL, GOOGL, SPCX, CRWV 신용 기본 스왑으로 히트 기록 확산 NVDA, ANT Tumble Jensen Huang의 Nvidia CEO 복귀, Anthropic 주가의 지속적인 하락, 민주당의 중간 선거 승리로 인해 각각 AI에 새로운 차원이 추가되었습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.29%, 1.96%, 2.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 1.29%, 1.96%, 2.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "72876ccff2017a3a561b",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML"
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
      "headline": "‘Disastrous' for ASML: Dutch Lawmakers Revolt Against US Push to Tighten China Chip Curbs",
      "headlineKo": "ASML에 '재앙': 네덜란드 국회의원들이 중국 칩 규제를 강화하려는 미국의 추진에 반발",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=679a0d0c5237dfdfb27ade814b5b92a5411bf5e166193037731cf64b72642a20",
        "publishedAt": 1795588950,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "‘Disastrous' for ASML: Dutch Lawmakers Revolt Against US Push to Tighten China Chip Curbs",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 ASML의 사업과 관련된 '‘Disastrous' for ASML: Dutch Lawmakers Revolt Against US Push to Tighten China Chip Curbs' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "ASML",
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
      "id": "8a425e2c4410bbbafcca",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
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
      "headline": "Donald Trump Floats Jensen Huang Pardon, US Stake In Nvidia – But NVDA Loses Momentum",
      "headlineKo": "Donald Trump는 Nvidia의 미국 지분인 Jensen Huang Pardon을 언급하지만 NVDA는 추진력을 잃습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a716f874151be840d056636f11e26060faec2f768f859d1a112513fa97d6efe6",
        "publishedAt": 1795584052,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Donald Trump, Nvidia의 미국 지분 Jensen Huang Pardon – 그러나 NVDA는 모멘텀을 잃음 AI 에이전트 Trending News Earnings All DIA 0.55% SPY 0.80% QQQ 1.49% Trending DELL 0.18% SOXL 7.82% AEHR 4.34% APLD 3.76% WULF 3.60% MU 3.62% AMD 3.30% CRWD",
        "Donald Trump는 Nvidia의 미국 지분인 Jensen Huang 사면을 떠안습니다. 그러나 NVDA는 모멘텀을 잃습니다. Trump는 Huang을 적극적으로 지원해 왔으며 Nvidia 이사회가 CEO로 복귀한다고 발표하기 직전에 그를 재고용할 것을 촉구했습니다.",
        "Jensen Huang(좌석)이 미국과 대화하고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.80%, 1.49% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.80%, 1.49% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c8ecff5233deed33219f",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "The Semiconductor ETF Kept Falling After Nvidia Raised Its Forecast. Time to Buy?",
      "headlineKo": "엔비디아가 전망치를 높인 이후 반도체 ETF는 계속 하락했다. 구매할 시간인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f02cb1ef3345033625acdb73e43df61709ca2f371ad1c9d85dc6282eec435b48",
        "publishedAt": 1795582622,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔비디아가 전망치를 높인 이후 반도체 ETF는 계속 하락했다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 $59,201.00 -2.1% -$1,267.90 개미 $81.91 -6.5",
        "24일 가을에는 6월 22일 최고치보다 약 37% 하락했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 37%, 75%, 7.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 37%, 75%, 7.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c6936b6b1f27f21d50d7",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "COHR",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "COHR Stock Swings After Nvidia-Led AI Rally: $15M Insider Buy Draws Attention",
      "headlineKo": "Nvidia가 주도하는 AI 랠리 이후 COHR 주가 변동: 1,500만 달러 규모의 내부자 매수로 주목",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0500c32fdfaebd4176969edc06743f868ead5d6c1243cf48a90766d4e792d6c",
        "publishedAt": 1795581637,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia가 주도하는 AI 랠리 이후 COHR 주가 변동: 1,500만 달러 내부자 매수로 주목 AI 에이전트 동향 뉴스 수익 전체 DIA 0.55% SPY 0.80% QQQ 1.49% 추세 DELL 0.18% SOXL 7.82% AEHR 4.34% APLD 3.76% WULF 3.60% MU 3.62% AMD 3.30% CRWD 2.61% SO",
        "Nvidia가 주도하는 AI 랠리 이후 COHR 주가 변동: 1,500만 달러 규모의 내부자 매수로 주목을 받음 AI 주가 변동, 인프라에 대한 수요 증가로 인해 Coherent가 투자자들의 주목을 받고 있습니다.",
        "이 사진 일러스트에서는 코히런트 로고가 스마트폰 화면에 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $15, 0.55%, 0.80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $15, 0.55%, 0.80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "00cf356dd99c1df528c3",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "AVGO",
        "COHR",
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
      "headline": "COHR Stock Swings After Nvidia-Led AI Rally: $15M Insider Buy Draws Attention",
      "headlineKo": "Nvidia가 주도하는 AI 랠리 이후 COHR 주가 변동: 1,500만 달러 규모의 내부자 매수로 주목",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0500c32fdfaebd4176969edc06743f868ead5d6c1243cf48a90766d4e792d6c",
        "publishedAt": 1795581637,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 주도 AI 랠리 이후 COHR 주가 변동: 1,500만 달러 내부자 매수로 주목 AI 에이전트 동향 뉴스 수익 전체 DIA 1.29% SPY 1.87% QQQ 2.81% 추세 DELL 5.17% SPY 1.87% AVGO 4.07% QQQ 2.81% SOXL 14.20% GLD 1.04% DE 3.38% AMBA 34.23% MS",
        "Nvidia가 주도하는 AI 랠리 이후 COHR 주가 변동: 1,500만 달러 규모의 내부자 매수로 주목을 받음 AI 주가 변동, 인프라에 대한 수요 증가로 인해 Coherent가 투자자들의 주목을 받고 있습니다.",
        "이 사진 일러스트에서는 코히런트 로고가 스마트폰 화면에 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $15, 1.29%, 1.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $15, 1.29%, 1.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "283ecd5e02cebbac8366",
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
      "headline": "Dana Targets $250 Million in Savings From Eaton Mobility Deal, Sees 2027 Close",
      "headlineKo": "Dana, Eaton Mobility 거래를 통해 2억 5천만 달러 절감 목표, 2027년 마감 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=781759566c4c99dbb6ee7aca972c0ad86e7320ad055146e0325f0f66f4730079",
        "publishedAt": 1795579958,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dana Targets $250 Million in Savings From Eaton Mobility Deal, Sees 2027 Close",
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
      "id": "4b007adc28088b723d30",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "BE",
      "relatedTickers": [
        "BE",
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
      "headline": "BE Stock Slumps After AI-Driven Gains: This Analyst Sees ‘An Attractive Entry Point’",
      "headlineKo": "AI 기반 이익 후 BE 주식 폭락: 이 분석가는 '매력적인 진입점'을 봅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c8f2fd8cea6cee517ec87dc748b300720c7dc786f5e7997cd40770775a53603",
        "publishedAt": 1795578831,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 기반 이익 후 BE 주식 급락: 이 분석가는 '매력적인 진입점'을 봅니다. AI 에이전트 동향 뉴스 수익 전체 DIA 1.36% SPY 1.96% QQQ 2.76% Trending BBIO 0.23% SOXL 15.93% GDX 5.89% SCO 1.99% SOFI 5.36% CRM 2.07% PANW 1.65% SPCX",
        "AI 기반 이익 이후 BE 주식 급락: 이 분석가는 '매력적인 진입점'을 보고 있습니다. Morgan Stanley는 BE 주식이 여러 긍정적인 촉매 속에서 \"투자자들에게 매력적인 진입점\"을 제공했다고 말했습니다.",
        "스마트폰에 Bloom Energy Corporation 로고가 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.36%, 1.96%, 2.76% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.36%, 1.96%, 2.76% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "62833611bcfa3893df87",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "AMD",
        "COHR",
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
      "headline": "Plot Twist: Coherent Announces a $2 Billion Buyback, the Same Sum Nvidia Paid for Its Stock in March",
      "headlineKo": "반전: Coherent, 3월에 Nvidia가 자사주 매입에 지불한 금액과 동일한 20억 달러 규모의 자사주 매입 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43d6e903b81d19625385e5a932a84679337c57f5fd810aa0c86aa2ea71c8ff57",
        "publishedAt": 1795578749,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $2 Billion, $2 billion, $1.0 billion, $550 million, $1.1 billion, $80 million, $704 million, $92.7 million.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 COHR의 사업과 관련된 'Plot Twist: Coherent Announces a $2 Billion Buyback, the Same Sum Nvidia Paid for Its Stock in March' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "78f8793ee3bd584a5b64",
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
      "headline": "Amazon ‘Trying to Trick’ You With Black Friday Offers That Aren’t Really Deals, Says Elizabeth Warren: E-Commerce Giant Pushes Back",
      "headlineKo": "아마존은 실제 할인이 아닌 블랙 프라이데이 제안으로 당신을 속이려고 한다고 엘리자베스 워렌이 말했습니다: 전자상거래 거대 기업이 반발",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d3eeb17ee22d7e3ff2c94d8ee8906e8faf828295a0b59ed82234bf3ab1be2aee",
        "publishedAt": 1795575357,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon ‘Trying to Trick’ You With Black Friday Offers That Aren’t Really Deals, Says Elizabeth Warren: E-Commerce Giant Pushes Back",
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
      "id": "cdcd1b8d6057e1f6213c",
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
      "headline": "TSLA Stock Slips Overnight: Dell And HP See No Quick Relief From The AI-Driven Chip Crunch Behind Tesla’s 25% Memory Cut",
      "headlineKo": "TSLA 주식이 밤새 하락: Dell과 HP는 Tesla의 25% 메모리 삭감 뒤에 있는 AI 기반 칩 경색에서 빠른 구제를 볼 수 없습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6271438ade99d0e1f78b7ecc01319b9fa432dd46e6d941472d9af8e381045950",
        "publishedAt": 1795573586,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla의 AI 하드웨어는 비용 문제에 직면해 있습니다. Dell, HP는 메모리 부족이 2027년 이후에도 지속될 수 있다고 경고합니다. AI 에이전트 Trending News Earnings All DIA 0.55% SPY 0.80% QQQ 1.49% Trending DELL 0.18% SOXL 7.82% AEHR 4.34% APLD 3.76% WULF 3.60% MU 3.62% A",
        "TSLA 주가 밤새 폭락: Dell과 HP는 Tesla의 25% 메모리 삭감 뒤에 있는 AI 기반 칩 경색에서 빠른 구제책을 찾지 못했습니다. Dell은 AI 서버가 더 많은 칩 제조 용량을 차지하여 PC와 차량에 더 적은 메모리를 남겨둔다고 말했습니다.",
        "Tesla와 SpaceX CEO인 Elon Musk는 2026년 10월 8일 워싱턴 DC의 평화 연구소에서 열린 미국 혁신의 황금 시대 서밋에 참석합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.80%, 1.49% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.80%, 1.49% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "65aff63beabcb7014309",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "EME",
      "relatedTickers": [
        "EME"
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
      "headline": "EMCOR Group: Exceptional Margins May Not Last Forever",
      "headlineKo": "EMCOR 그룹: 탁월한 마진은 영원히 지속되지 않을 수 있습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a614dfc6c13d7cf7654134ce1aa5d35e1556eb11653aad40bbafe32180b73d6b",
        "publishedAt": 1795570789,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR 그룹: 탁월한 마진은 영원히 지속되지 않을 수 있습니다(NYSE:EME) | 알파 단순 투자 아이디어 찾기 11.18K 팔로워 요약 팔로우 EMCOR 그룹의 가격은 약 $603.32입니다. 630달러의 가치 평가로 인해 상승 여력이 제한되고 마진도 적습니다.",
        "내 2027년 추정치는 매출 220억 달러, 조정 영업 마진 9.5%, EPS 35달러로 가정하여 성장은 가능하지만 마진 정상화는 완만합니다.",
        "EME의 남은 이행 의무 185억 7천만 달러는 수요 가시성을 지원하지만 노동 제약, 프로젝트 지연 및 작업 혼합으로 인해 전환율과 수익성이 저하될 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $603.32, $630, $22 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $603.32, $630, $22 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "5079f362dad41ed30fc0",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "META",
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
      "headline": "Your $300,000 in XLC Holds $130,206 in Just Meta and Alphabet",
      "headlineKo": "귀하의 XLC $300,000는 메타와 알파벳으로 $130,206를 보유하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f2764349e8df4813ed5e5b28b83896a77d010bfcbfaa1cae24df10742250120a",
        "publishedAt": 1795568646,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "귀하의 XLC $300,000는 Just Meta 및 Alphabet에서 $130,206를 보유하고 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,156.60 −0.59% Dow Jones 49,836.10 −0.34% Nasdaq 100 25,916.70 −1.14% Russell 2000 2,673.06 −0.42% S&P 500 7,156.60 −0.59% 다우존스 49,836.10 −0.34% 나스닥 100 25,916.70 −1.14% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 당사의 스폰서 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $300,000, $130,206, 43.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $300,000, $130,206, 43.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "603429280992c62c7719",
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
      "headline": "Why AMD Stock Fell Today",
      "headlineKo": "오늘 AMD 주식이 하락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=563ba09a165cddabe1c66dee36d36fa9c3a28899b4c8d1e960523a8746b4d84f",
        "publishedAt": 1795562702,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 AMD 주식이 하락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 ​​$59,201.00 -2.1% -",
        "AMD의 데이터 센터 매출은 지난 분기에 거의 두 배 증가했으며, 회사는 이번 분기에 약 170억 달러의 총 매출을 예상하고 있습니다.",
        "최근 주가 하락 이후에도 그 가치 평가와 불확실한 시장으로 인해 지금은 AMD를 구매하는 것이 조심스럽습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $17 billion, 8.86%, 9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $17 billion, 8.86%, 9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fc7c5857e56283884b30",
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
      "headline": "3 AI Investment Stocks We’re Buying Today And Why We’re Selling On Micron",
      "headlineKo": "오늘 우리가 매수하는 3가지 AI 투자 주식과 우리가 Micron에서 매도하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a4cd568928d6c4981a41a0b6aa7e78435e4ff325e0a5c076f8bfe13df7fda50d",
        "publishedAt": 1795562344,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $500, $500,000, $1 million, $2.9 trillion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MU의 사업과 관련된 '3 AI Investment Stocks We’re Buying Today And Why We’re Selling On Micron' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "93e73013202527551226",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Intel Stock Fell Today",
      "headlineKo": "오늘 인텔 주식이 하락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=03dec1022a3485736da32277ae334371b537d56564dccbf1c0f24f817eafae0b",
        "publishedAt": 1795562161,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 인텔 주식이 하락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 ​​$58,603.00 -2.9%",
        "24일, 투자자들이 칩 주식에서 물러나면서 그들은 하루 전에는 충분히 얻을 수 없었습니다.",
        "인텔의 파운드리 사업은 지난 분기에 18억 5천만 달러의 영업 손실을 기록했으며 회사는 아마도 내년에 잉여 현금 흐름을 창출하지 못할 것이라고 재무 책임자가 밝혔습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.85 billion, 8.15%, 8.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.85 billion, 8.15%, 8.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f26412db2ec88f2d7c2c",
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
      "headline": "Maverick Medical AI Surfaces CodeAgent within Microsoft Radiology Reporting Solutions to Reduce Physician Rework",
      "headlineKo": "Maverick Medical AI는 의사의 재작업을 줄이기 위해 Microsoft 방사선 보고 솔루션 내에서 CodeAgent를 표면화합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce0f00d16b4b4e9d94a1965653b22801d7a41fe160e111abc9c25d91fdc58691",
        "publishedAt": 1795560840,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Maverick Medical AI Surfaces CodeAgent within Microsoft Radiology Reporting Solutions to Reduce Physician Rework",
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
      "id": "926c90723a864a715668",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
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
      "headline": "Stock Market Today, Nov. 24: AMD Plunges 9% as 337 Million-Share Resale Filing Adds to AI Sell-Off",
      "headlineKo": "오늘, 11월 24일 주식 시장: AMD는 3억 3700만 주 재판매 서류 제출로 인해 AI 매각이 가중되면서 9% 급락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=730d5fd450e9514692c859a017924d3a7955cfd3d34f025272a9ca92fae8785f",
        "publishedAt": 1795559978,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "24: AMD는 3억 3700만 주 재판매 신청으로 인해 AI 매각이 추가되면서 9% 급락 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 2",
        "거래량은 4,570만 주에 달했는데, 이는 3개월 일일 평균 2,780만 주보다 약 64% 높은 수치로, 최근 매도세 속에서 투자자 활동이 높아진 것을 반영합니다.",
        "AMD - Advanced Micro Devices $413.27 -$40.19 (-8.86%) NASDAQ · 2026년 11월 24일 오후 4시 기준 프리미엄 기능 Moneyball Superscore 94 /100 주요 데이터 포인트 시가총액 시가총액은 공개적으로 거래되는 주식만 사용하여 계산되었습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 64%, $413.27, $40.19 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 64%, $413.27, $40.19 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "34d6ae1711a6c04830a5",
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
      "headline": "Stephanie Link Says Marvell Could Earn $30 a Share by 2031. Is She Right?",
      "headlineKo": "Stephanie Link는 Marvell이 2031년까지 주당 30달러를 벌 수 있다고 말했습니다. 그녀의 말이 맞나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab77a10b151f09ce79026aae903aebe9440ff11260eb8efa36ce9f47eef12ded",
        "publishedAt": 1795558073,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stephanie Link는 Marvell이 2031년까지 주당 30달러를 벌 수 있다고 말합니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,065.20 −1.86% Dow Jones 49,388.60 −1.24% Nasdaq 100 25,458.80 −2.89% Russell 2000 2,651.31 −1.23% S&P 500 7,065.20 −1.86% 다우존스 49,388.60 −1.24% 나스닥 100 25,458.80 −2.89% 러셀 20",
        "작성자: Chris Lange 2026년 11월 24일 오후 5:07(ET) 게시 · 3분 읽기 𝕏 f ⧉ 이 게시물에는 스폰서 및 계열사의 링크가 포함될 수 있으며 Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $30, $132.54, 8.43% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $30, $132.54, 8.43% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1a4271ba370b93ec880b",
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
      "headline": "Billionaire Charlie Munger’s Protege Li Lu: Himalaya Capital Has 45% of Its $3.78 Billion Portfolio in Alphabet",
      "headlineKo": "억만장자 Charlie Munger의 제자 Li Lu: 히말라야 캐피탈은 37억 8천만 달러 규모의 포트폴리오 중 45%를 알파벳으로 보유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=898631a83d1f922bf2cd9d4e170f13ee4af5b2437471720deee3266ff47cbce7",
        "publishedAt": 1795557538,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 45%, $3.78 Billion, $1 trillion, 45.2%, $3.78 billion, 14.73 times, 14.59 times, 29.60%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Billionaire Charlie Munger’s Protege Li Lu: Himalaya Capital Has 45% of Its $3.78 Billion Portfolio in Alphabet' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "8dbf49fe41af30a14ccb",
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
      "headline": "Stock Market Today, Nov. 24: Nvidia Gives Back $240 Billion in Market Value Despite Wall Street Upgrade Signaling 29% Upside",
      "headlineKo": "오늘, 11월 24일 주식 시장: Nvidia는 월스트리트 업그레이드가 29% 상승할 것이라는 신호에도 불구하고 시장 가치에서 2,400억 달러를 반환했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87c01a0d326b808a66c91722566102ccc69b08dc02c0786b32959296397be6b1",
        "publishedAt": 1795556989,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "24: Nvidia는 월스트리트의 업그레이드에도 불구하고 29% 상승 여력이 있다는 신호에도 불구하고 2,400억 달러의 시장 가치를 돌려드립니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018",
        "이러한 하락세는 투자자들이 Jensen Huang의 CEO 복귀를 환영하면서 월요일의 놀라운 31.48% 급등에 따른 것입니다. 이는 투자자들이 Jensen Huang의 복귀를 환영하면서 Nvidia가 20여 년 만에 가장 큰 일일 백분율 상승률을 기록한 것입니다.",
        "화요일의 반전으로 인해 새로운 매도 압력이 반도체 업계 전체를 휩쓸면서 이러한 이익 중 일부가 지워졌습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 31.48%, 107%, $155.38 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 31.48%, 107%, $155.38 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "699ccb9f9b1fff3dd271",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Could Meta Actually Climb 30%? Or Is J.P. Morgan Totally Wrong?",
      "headlineKo": "메타가 실제로 30% 상승할 수 있을까? 아니면 J.P. Morgan이 완전히 틀렸는가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7df3519a4d00fefb4facd0391b28944f097b41bba2ed575d66f485928e3fc8f5",
        "publishedAt": 1795554957,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| TIKR.com 일반 투자 메타가 실제로 30% 상승할 수 있을까요?",
        "Bobby Sankhagowit • 4분 읽기 검토자: Bobby Sankhagowit 마지막 업데이트 2026년 11월 24일 Canva를 통한 @Miguel Guasch, Canva를 통한 pixabay의 @Omar_Nasif 주요 내용 J.P.",
        "Morgan은 11월 메타 플랫폼 가격 목표를 940달러에서 775달러로 낮췄습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $775, $940 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, $775, $940 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e450bf98e8ebb1efe630",
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
      "headline": "She Retires at 65 With a $900,000 All-Stock 401(k) as the S&P 500 Swings From Its Worst Week to Its Best Day Since April 2025. The 8.6% Drop Erases $77,400, and the Rebound Still Leaves Her $38,409 Sh",
      "headlineKo": "그녀는 S&P 500이 2025년 4월 이후 최악의 주에서 최고의 날로 변동하면서 $900,000의 전체 주식 401(k)을 보유하고 65세에 은퇴합니다. 8.6% 하락으로 $77,400가 지워지고 반등으로 여전히 $38,409가 남습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc80a41206983066e2a8372b8abef179d686b115742ff0ef67f78e4ec74010d0",
        "publishedAt": 1795554909,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500이 2025년 4월 이후 최악의 주에서 최고의 날로 변화함에 따라 그녀는 $900,000의 All-Stock 401(k)을 보유하고 65세에 은퇴합니다.",
        "8.6% 하락으로 $77,400가 지워지고 반등으로 여전히 $38,409가 부족합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,152.80 −0.64% Dow Jones 49,818.10 −0.38% Nasdaq 100 25,899.60 −1.20% Russell 2000 2,672.31 −0.44% S&P 500 7,152.80 −0.64% 다우존스 49,818.10 −0.38% 나스닥 100 25,899.60 −1.20% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $900,000, 8.6%, $77,400, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $900,000, 8.6%, $77,400, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bf42fdc6ca61a8787848",
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
      "headline": "Tesla and SpaceX Just Assembled Deal Teams for a $3.2 Trillion Merger. Here's What Investors Need to Know.",
      "headlineKo": "Tesla와 SpaceX가 방금 3조 2천억 달러 규모의 합병을 위해 거래팀을 모았습니다. 투자자가 알아야 할 사항은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=84cab5d56e33ccf2917566fc40ded4f22140bdec50a467c2541d8a6b5baa3be0",
        "publishedAt": 1795553995,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla와 SpaceX가 방금 3조 2천억 달러 규모의 합병을 위해 거래팀을 모았습니다.",
        "투자자가 알아야 할 사항은 다음과 같습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 $59,724.00 -2.3% -$1,430.77 개미 $81.91 -6.5"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $3.2 Trillion, 5.65%, 0.20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $3.2 Trillion, 5.65%, 0.20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6510334490ba54828b57",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Why Is Applied Materials (AMAT) Stock Down Today? Chip Selloff Drags Suppliers",
      "headlineKo": "오늘 Applied Materials(AMAT) 재고가 하락한 이유는 무엇입니까? 칩 매도 드래그 공급자",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18564793c25b019fb6f8a2ac56cd0784354096225d3dda645f37f38b89dd99e8",
        "publishedAt": 1795553209,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Is Applied Materials (AMAT) Stock Down Today? Chip Selloff Drags Suppliers",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AMAT의 사업과 관련된 'Why Is Applied Materials (AMAT) Stock Down Today? Chip Selloff Drags Suppliers' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e07b80ee5ffb84b2ed82",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "MU",
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
      "headline": "Micron vs. Sandisk: Which AI Memory Stock Is the Better Buy?",
      "headlineKo": "Micron vs. Sandisk: 어느 AI 메모리 주식이 더 나은 구매인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=82856c1659dbc51bf1a6ace1a66150e39e201307be765fdf2d177f3b15aa697d",
        "publishedAt": 1795551902,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: 어떤 AI 메모리 주식이 더 나은 구매인가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 $58,653.00 -2.9% -$1,727.37 개미 $81.91 -6.5",
        "샌디스크 주가는 올해 현재까지 209% 상승했다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 209%, 11.01%, 11.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 209%, 11.01%, 11.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0cbeee52962c17aa1ecc",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Axon Enterprise vs. Palantir Technologies: Which Law Enforcement Stock Is a Better Buy for 2027?",
      "headlineKo": "Axon Enterprise vs. Palantir Technologies: 2027년에는 어떤 법 집행 기관 주식이 더 나은 구매입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=633a25b0d9127bec17a20e979a33c0d9ec2c52f43448722b297d87b3a189e6ac",
        "publishedAt": 1795551602,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Technologies: 2027년에 어떤 법 집행 기관 주식을 구매하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 $59,201.00 -2.1% -$1,267.90 개미 $81.91 -6.5",
        "Palantir Technologies는 인공 지능 플랫폼이 대규모 상업 기업과 정부 기관 모두에서 큰 관심을 끌면서 급속한 성장을 경험하고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3.81%, 1.14%, $319.32 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 3.81%, 1.14%, $319.32 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "6b1cb5351e37b3de5052",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Amazon.com (AMZN) Still Below Fair Value As AI Spending Rises?",
      "headlineKo": "AI 지출이 증가함에 따라 Amazon.com(AMZN)이 여전히 적정 가치보다 낮습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6e2157b68c74a377deacee1d612d5d9aed87a1c665b490811763e829fbddf16",
        "publishedAt": 1795551044,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Is Amazon.com (AMZN) Still Below Fair Value As AI Spending Rises?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "75128d70beba69e0a6a3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Salesforce (CRM) Stock Looks Cheap With Earnings In Focus",
      "headlineKo": "Salesforce (CRM) 주식은 수익에 초점을 맞춰 저렴해 보입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6bb359b157b247a84db565da9c0c1f5388ac5545b645642fed019e1bab2baf5e",
        "publishedAt": 1795550969,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce (CRM) Stock Looks Cheap With Earnings In Focus",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "e3d1ae9d2342830efc9f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ORCL",
      "relatedTickers": [
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
      "headline": "Not Good: Oracle’s Credit Swaps Blow Out Again a Day After Huang’s Return Lifted Nvidia",
      "headlineKo": "좋지 않음: 황의 복귀가 해제된 지 하루 만에 오라클의 신용 스왑이 다시 폭발함 Nvidia",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cef5287f05e836ff1a350dba2bce878ddf2d02ec6126b3e3df601698407e1aee",
        "publishedAt": 1795550431,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "좋지 않음: 황의 복귀가 해제된 지 하루 만에 오라클의 신용 스왑이 다시 폭발 Nvidia | TIKR.com 일반 투자 좋지 않음: 황의 복귀가 해제된 지 하루 만에 오라클의 신용 스왑이 다시 폭발함 Nvidia Michael Douglass • 5분 읽기 Re",
        "24 수준에서 ZeroHedge는 Jensen Huang이 CEO로 복귀한 지 하루 만에 Nvidia의 주가가 32% 상승한 2008년 1월 Bear Stearns보다 더 높은 수준을 기록했습니다.",
        "Nvidia의 지원은 Oracle의 실제 문제, 즉 OpenAI가 Oracle이 구축하고 있는 용량에 대한 비용을 지불할 수 있는지 여부를 해결하지 못합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 32%, 22%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 32%, 22%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7acc1b767d2d9dcd4f3c",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Applied Materials vs. Intel: Which Technology Stock Is a Better Buy for 2027?",
      "headlineKo": "어플라이드 머티어리얼즈 vs. 인텔: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0bfe8206232df7e673ddff8c19707e6a1bbb8633aeca76ed1d889864f0fcb2fb",
        "publishedAt": 1795549802,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔: 2027년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 $59,201.00 -2.1% -$1,267.90 개미 $81.91 -6.5",
        "인텔은 파운드리 서비스를 통해 제조 리더십을 되찾기 위해 자본 집약적 전략에 중점을 두고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6.66%, 8.15%, $54.80 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6.66%, 8.15%, $54.80 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5a07d9eb952f0e5cb162",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV",
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
      "headline": "$10,000 in GE Vernova on Its First Day of Trading Is Worth How Much Today?",
      "headlineKo": "거래 첫날 GE Vernova의 $10,000 가치는 현재 얼마입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2dc1f7a456c17771a00319f72a77368f98710d5d2d65cf5b28f06afb6487336b",
        "publishedAt": 1795548902,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "거래 첫날 GE Vernova의 $10,000 가치는 현재 얼마입니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,188.91 -0.2% -12.18 DJI 50,367.42 +0.7% +348.72 NASDAQ 23,540.94 -0.8% -192.60 비트코인 $59,730.00 -0.3% -$172.14 ANT $84.71 +3.4%",
        "GE Vernova에 대한 10,000달러 투자가 50,000달러 이상으로 증가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $50,000., 1.17% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $50,000., 1.17% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4787bb09f84ce4e3e56c",
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
      "headline": "Micron Just Hit a $700 Ceiling, Caught a Downgrade, and Is Down 10% Today. Is MU a Toxic Stock or a Prime Bargain?",
      "headlineKo": "Micron은 방금 상한가 $700에 도달했고 등급이 하향 조정되어 오늘 10% 하락했습니다. MU는 유독한 주식인가요, 아니면 최고의 특가인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b543f7dbcbcaaf5300a8109ad596dbc225208f9b62035095e27d543e2c8b5ef",
        "publishedAt": 1795546509,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron은 방금 상한가 $700에 도달했고 등급이 하향 조정되어 오늘 10% 하락했습니다.",
        "MU는 유독한 주식인가요, 아니면 최고의 할인인가요?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,156.60 −0.59% Dow Jones 49,836.10 −0.34% Nasdaq 100 25,916.70 −1.14% Russell 2000 2,673.06 −0.42% S&P 500 7,156.60 −0.59% 다우존스 49,836.10 −0.34% 나스닥 100 25,916.70 −1.14% 러셀 20"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $700, 10%, $700. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $700, 10%, $700. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "09579a09b134c01452eb",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "LRCX",
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
      "headline": "What Did Lam Research Say Before Shares Took Off?",
      "headlineKo": "주가가 폭등하기 전에 Lam Research는 무엇을 말했습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8801e8db9b00a578d457b277a0bb187143243b90f6e4cffa6d0f06a3bc50fee",
        "publishedAt": 1795546474,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "주가가 폭등하기 전에 Lam Research는 무엇을 말했습니까?",
        "| Trefis Trefis 스토리라인 Lam Research는 주가가 상승하기 전에 무엇을 말했습니까?",
        "2026년 11월 24일 · 작성자: Trefis Team LRCX YTD +14.9% SPY YTD +6.2% QQQ YTD +4.2% LRCX 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 14.9%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 14.9%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "13530d146234dd31b8a9",
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
      "headline": "AMDL 2X AMD ETF Drops from $90 to $30: Will This Leveraged AMD Fund Be an ‘Easy Triple’ from Here?",
      "headlineKo": "AMDL 2X AMD ETF가 90달러에서 30달러로 하락: 이 활용 AMD 펀드가 여기에서 '쉬운 트리플'이 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=794d9fffde8168cf0c068a72de8803b7c670e0dc6dc041d13cbea916cc7920aa",
        "publishedAt": 1795546382,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMDL 2X AMD ETF가 90달러에서 30달러로 하락: 이 레버리지 AMD 펀드가 여기에서 '쉬운 트리플'이 될까요?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,185.60 −0.18% Dow Jones 49,928.10 −0.16% Nasdaq 100 26,121.50 −0.36% Russell 2000 2,679.76 −0.17% S&P 500 7,185.60 −0.18% 다우존스 49,928.10 −0.16% 나스닥 100 26,121.50 −0.36% 러셀 20",
        "작성자: David Moadel 2026년 11월 24일 오후 1시 53분(ET) 게시 · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $90, $30, $28.74, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $90, $30, $28.74, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "42cc565dc698806ae471",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The Biggest Earnings Winners Grind Dell And Sandisk Into The Dust",
      "headlineKo": "가장 큰 수익을 올린 기업은 Dell과 Sandisk를 먼지 속으로 몰아넣습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3dd7709f6cd8c40cd2c7d5d57b02800c4dde4f1a861c4b6662ba8dd657c743fc",
        "publishedAt": 1795545520,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "The Biggest Earnings Winners Grind Dell And Sandisk Into The Dust",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "33baba6afac7f59fcfc0",
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
      "headline": "Bloom Energy Revenue Jumped 138%. Its Next Growth Phase Could Be Even Bigger",
      "headlineKo": "Bloom Energy 수익은 138% 증가했습니다. 다음 성장 단계는 더욱 커질 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e7ebb8c257270598262f1bfc6c4ef6da28d9c47eb71bbd913055cfeb3ca4b2d7",
        "publishedAt": 1795545180,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "다음 성장 단계는 더욱 커질 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,326.00 +1.42% Dow Jones 50,884.50 +0.93% Nasdaq 100 26,781.10 +2.30% Russell 2000 2,745.78 +1.05% S&P 500 7,326.00 +1.42% 다우존스 50,884.50 +0.93% 나스닥 100 26,781.10 +2.30% 러셀 20",
        "다음 성장 단계는 더욱 커질 수 있습니다. 작성자: Vandita Jadeja 2026년 11월 24일 오후 1시 33분(ET) 게시 · 3분 읽기 가격 목표 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 138%, $1.235 billion, 138.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 138%, $1.235 billion, 138.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5945368e0bf70137cd2a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN",
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
      "headline": "What Triggered The Move In Eaton Stock?",
      "headlineKo": "Eaton 주식의 움직임을 촉발한 요인은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=33638ff460727044e28e2e2e45a59036d47e0f9cffbff3f7a8ca47d56c284d72",
        "publishedAt": 1795545139,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Eaton 주식의 움직임을 촉발한 요인은 무엇입니까?",
        "| Trefis Trefis 스토리라인 무엇이 Eaton 주식의 움직임을 촉발시켰습니까?",
        "2026년 11월 24일 · 작성자: Trefis Team ETN YTD +1.4% SPY YTD +6.2% XLI YTD +5.0% ETN 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.4%, 6.2%, 5.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.4%, 6.2%, 5.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6b7bf22706b6acfd8502",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "VST",
      "relatedTickers": [
        "NVDA",
        "SPY",
        "VST"
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
      "headline": "What Just Happened To Vistra Stock?",
      "headlineKo": "비스트라 주식에 무슨 일이 일어났나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=276df7c09e95311d0172dbf1cd6afb81ce3ee8508725aee37bf472f1ab858035",
        "publishedAt": 1795544943,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "비스트라 주식에 무슨 일이 일어났나요?",
        "| Trefis Trefis 스토리라인 Vistra Stock에 무슨 일이 일어났나요?",
        "2026년 11월 24일 · 작성자: Trefis Team VST YTD -24.8% SPY YTD +6.2% XLU YTD +3.8% VST 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 24.8%, 6.2%, 3.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VST에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 24.8%, 6.2%, 3.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "1127afa0f0ff8dd65973",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Why Sandisk Stock Plunged Today",
      "headlineKo": "오늘 샌디스크 주가가 급락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91521fd66bb5dd52cd99d1eabce1c7b50ad06e78e309a375c73ece0e8cfc73ac",
        "publishedAt": 1795543555,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 Sandisk 주가가 급락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 ​​$59,201.00",
        "애널리스트는 최근 인공지능(AI) 인프라 주가가 수급 불균형에 대한 우려로 인해 조정을 받았다고 언급했다.",
        "순환성의 유령이 남아 있는 동안, 주식 가격은 매력적입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11.13%, 14.6%, 12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11.13%, 14.6%, 12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cf2517d2cbd0f8a6fc58",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "VST",
      "relatedTickers": [
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
      "headline": "How Has Vistra Stock's Story Changed?",
      "headlineKo": "Vistra Stock의 이야기는 어떻게 바뀌었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c77d71095aca3b50b7c14c7b4f3159fda74cee49350e520cb2d1e5e3cfd38c3c",
        "publishedAt": 1795543525,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra Stock의 이야기는 어떻게 바뀌었나요?",
        "| Trefis Trefis 스토리라인 Vistra Stock의 스토리는 어떻게 바뀌었나요?",
        "2026년 11월 24일 · Trefis Team VST YTD -24.8% SPY YTD +6.2% XLU YTD +3.8% VST 분석 → Vistra 주가는 11월 23일 월요일 $123.87로 마감되었습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 24.8%, 6.2%, 3.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 24.8%, 6.2%, 3.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c13ec16edfa36a2da2f3",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Is Qualcomm Stock As Cheap As It Looks Now?",
      "headlineKo": "Qualcomm 주식이 지금 보이는 것만큼 저렴합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=421948667af23b68825bdf03c53b4d9880999e5b7caaa0eb2034eb53def59f31",
        "publishedAt": 1795542560,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm 주식이 지금 보이는 것만큼 저렴합니까?",
        "| Trefis Trefis 스토리라인 Qualcomm 주식이 지금 보이는 것만큼 저렴합니까?",
        "2026년 11월 24일 · 작성자: Trefis Team QCOM YTD -2.1% SPY YTD +6.2% QQQ YTD +4.2% QCOM 분석 → 올해 Qualcomm을 시청하신 분이라면 걱정을 쉽게 하실 수 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.1%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.1%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4107d2d6a83edcdd3a57",
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
      "headline": "SK hynix vs. TSMC: One Chipmaker's Revenue Is Exploding, but Is It the Better Buy for 2027?",
      "headlineKo": "SK 하이닉스 vs. TSMC: One Chipmaker의 매출이 폭발적으로 증가하고 있지만 2027년에는 이것이 더 나은 구매입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45b37ee0e04d938435bdbee79c518c741f0660c96c0d3b58df01f4bb1e656ce3",
        "publishedAt": 1795541702,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SK 하이닉스 vs. TSMC: One Chipmaker의 매출이 폭발적으로 증가하고 있지만 2027년에는 이것이 더 나은 구매입니까?"
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
      "id": "ffab3f74ad4a5ee697d6",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MU",
      "relatedTickers": [
        "AMD",
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
      "headline": "The Same $10,000 in AMD and Micron Could Produce Very Different Results by 2030",
      "headlineKo": "AMD와 Micron의 동일한 10,000달러가 2030년까지 매우 다른 결과를 낳을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1354be8a4d1ac2f2c15c81d1e49c3ead264b36ebad49863c5d336393652a1611",
        "publishedAt": 1795541642,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD와 Micron의 동일한 10,000달러가 2030년까지 매우 다른 결과를 낳을 수 있습니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,185.60 −0.18% Dow Jones 49,928.10 −0.16% Nasdaq 100 26,121.50 −0.36% Russell 2000 2,679.76 −0.17% S&P 500 7,185.60 −0.18% 다우존스 49,928.10 −0.16% 나스닥 100 26,121.50 −0.36% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 당사의 스폰서 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, 102.67%, 172.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, 102.67%, 172.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bf1d40076816dd676dd5",
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
      "headline": "Generate A Return From Marvell Stock, Set For A Large Post-Earnings Swing",
      "headlineKo": "Marvell 주식에서 수익 창출, 대규모 수익 변동 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e365179ec9ab490c39b3babe282f44e0eed8572f092fda8b63b705f1d4a7aa92",
        "publishedAt": 1795541384,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Generate A Return From Marvell Stock, Set For A Large Post-Earnings Swing",
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
      "id": "8102b30d056516346aa6",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM",
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
      "headline": "What Could Salesforce Stock Be Worth In Three Years?",
      "headlineKo": "3년 후에 Salesforce 주식의 가치는 얼마나 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3d18d9a1d6ca69aa3469703fb603aed7de7d7280014aab0a5514c33a7f83b363",
        "publishedAt": 1795541281,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "3년 후에 Salesforce 주식의 가치는 얼마나 될까요?",
        "| Trefis Trefis 스토리라인 Salesforce 주식의 3년 후 가치는 얼마나 될까요?",
        "2026년 11월 24일 · 작성자: Trefis Team CRM YTD -26.5% SPY YTD +6.2% QQQ YTD +4.2% CRM 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 26.5%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 26.5%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ab067f800c7659effd5f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "NVDA",
        "SPY"
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Did Alphabet Stock Move?",
      "headlineKo": "알파벳 주식은 왜 움직였나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b3b5d01ea58f56ba93d025d546bd00caba78ab0ebd22e1ebccec2f606f0649a2",
        "publishedAt": 1795541080,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis Trefis 스토리라인 왜 알파벳 주식이 움직였습니까?",
        "2026년 11월 24일 · 작성자: Trefis Team GOOGL YTD -9.7% SPY YTD +6.7% XLC YTD -11.2% GOOGL 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다.",
        "알파벳 주식은 11월 23일 월요일에 6.3% 상승한 $282.10으로 마감했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 9.7%, 6.7%, 11.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 9.7%, 6.7%, 11.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1616e49e5bc54f0e1cdd",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "다음 분기 실적 발표까지",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Should Softer Guidance Require Action From Qualcomm Stock Investors",
      "headlineKo": "보다 완화된 지침을 위해서는 Qualcomm 주식 투자자의 조치가 필요해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=09b4e6989197d7594728002aaa5a51ca2a5c9e725c904f1edac7fa883e3d1aae",
        "publishedAt": 1795540578,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "QCOM의 다음 분기 가이던스와 현재 주가가 이익 대비 충분히 할인됐는지를 다룬 기사입니다.",
        "제목에 나온 할인율은 기사 작성자의 계산일 수 있어 회사의 공식 전망과 구분해야 합니다.",
        "가이던스가 실제 매출·EPS로 달성되는지가 핵심 확인 대상입니다."
      ],
      "marketInterpretation": [
        "가이던스가 유지되면 현재 PER이 낮아 보일 수 있지만, 전망이 낮아지면 할인율도 빠르게 사라집니다.",
        "스마트폰 수요와 자동차·IoT 성장 중 어느 쪽이 이익을 지지하는지 함께 봐야 합니다."
      ],
      "aiInference": [
        "이 기사는 QCOM의 사업과 관련된 'Should Softer Guidance Require Action From Qualcomm Stock Investors' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "‘17% 할인’이라는 표현은 싸 보인다는 뜻이지, 반드시 오를 가격이라는 뜻은 아닙니다.",
        "회사가 제시한 다음 분기 매출·EPS가 실제로 맞는지 확인해야 합니다.",
        "할인율보다 실적 전망이 내려가는지 올라가는지가 더 중요합니다."
      ],
      "whyItMatters": [
        "가이던스가 유지되면 현재 PER이 낮아 보일 수 있지만, 전망이 낮아지면 할인율도 빠르게 사라집니다.",
        "스마트폰 수요와 자동차·IoT 성장 중 어느 쪽이 이익을 지지하는지 함께 봐야 합니다."
      ],
      "impacts": [
        {
          "ticker": "QCOM",
          "direction": "혼재",
          "reason": "낮은 밸류에이션 가능성과 실적 전망 하향 위험이 공존",
          "basis": "analysis"
        }
      ],
      "watch": [
        "다음 분기 매출·EPS 가이던스 달성 여부",
        "스마트폰·자동차·IoT 부문별 성장률",
        "현재 PER과 3년 평균 PER 변화"
      ]
    },
    {
      "id": "5b64be3f41aa7c8a9eb5",
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
      "headline": "Apple Stock Has 3 Things Going for It in 2027. Here’s My Price Target",
      "headlineKo": "2027년 Apple 주식에는 3가지 변화가 있을 것입니다. 내 목표 주가는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a985a20fa15fa73b8569fa97e90ec7a11d9f9b733d2a22b3005de49ef36a23f4",
        "publishedAt": 1795539837,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2027년 Apple 주식에는 3가지 변화가 있을 것입니다.",
        "내 목표 가격은 다음과 같습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,156.60 −0.59% Dow Jones 49,836.10 −0.34% Nasdaq 100 25,916.70 −1.14% Russell 2000 2,673.06 −0.42% S&P 500 7,156.60 −0.59% 다우존스 49,836.10 −0.34% 나스닥 100 25,916.70 −1.14% 러셀 20"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $478.83 billion, 15.06%, $8.98. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $478.83 billion, 15.06%, $8.98. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "95e1041eb1b66359e0bd",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "MU",
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
      "headline": "Brad Gerstner Swapped Qualcomm for More Micron Last Quarter. Micron Has Lost 34% Since Sept. 30",
      "headlineKo": "Brad Gerstner는 지난 분기에 Qualcomm을 더 많은 Micron으로 교체했습니다. 마이크론은 9월 30일 이후 34% 하락했다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4419a447df5c22bfb247375a907fca48022cb458e5ee769ea1bae7b2553dee97",
        "publishedAt": 1795539589,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Brad Gerstner는 지난 분기에 Qualcomm을 더 많은 Micron으로 교체했습니다.",
        "30 | TIKR.com 일반 투자 Brad Gerstner는 지난 분기에 Qualcomm을 더 많은 Micron으로 교체했습니다.",
        "30 Michael Douglass • 읽기 6분 검토자: Michael Douglass 마지막 업데이트 2026년 11월 24일 PhonlamaiPhoto의 이미지에서 @Kittipong Jirasukhanont(Canva를 통해), Getty Images Pro에서 @pinglabel(Canva를 통해) 핵심 사항 Brad Gerstner의 고도계"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 34%, 24%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 34%, 24%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9cd0c365566d5b1b72f5",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "14 Big Funds Bought Marvell Last Quarter, While 13 Sold. Who’s Right?",
      "headlineKo": "지난 분기에 14개의 대형 펀드가 Marvell을 매입했고, 13개는 매도했습니다. 누가 맞나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a00e813c184454ce7abe17b2526466139937f89b198bf5b04deade3438e0486",
        "publishedAt": 1795539586,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지난 분기에 14개의 대형 펀드가 Marvell을 매입했고, 13개는 매도했습니다.",
        "| TIKR.com General Investing 14개의 대형 펀드가 지난 분기에 Marvell을 인수했고 13개는 매각되었습니다.",
        "Michael Douglass • 6분 읽기 검토자: Michael Douglass 마지막 업데이트: 2026년 11월 24일 @4X-image from Getty Images Signature via Canva 주요 내용 9월 말 분기에 13F를 제출한 460개 대형 펀드 중"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 21.2%, 45%, $1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 21.2%, 45%, $1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1a2bd1d25cf29604c24c",
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
      "headline": "Microsoft Corporation (MSFT) Is Facing AI Spending Fears: Could Its Cloud Growth Change the Narrative?",
      "headlineKo": "Microsoft Corporation(MSFT)은 AI 지출에 대한 우려에 직면해 있습니다. 클라우드 성장이 내러티브를 바꿀 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=936129c67f797117d52559cdb22ecfaa38411d31f561b192e2d3a0ae13c3e352",
        "publishedAt": 1795539530,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Corporation(MSFT)은 AI 지출에 대한 우려에 직면해 있습니다. 클라우드 성장이 내러티브를 바꿀 수 있을까요?"
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
      "id": "38fab0c8ec4be3e5a1ba",
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
      "headline": "Amazon Makes $7.5 Billion AI Move to Challenge Nvidia",
      "headlineKo": "Amazon, Nvidia에 도전하기 위해 75억 달러 규모의 AI 투자 추진",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c106181f27b22d86feec4230720d0fcfd38ed81de2fa747ec1606b3560a6c9b4",
        "publishedAt": 1795538535,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 AMZN의 사업과 관련된 'Amazon Makes $7.5 Billion AI Move to Challenge Nvidia' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "94e15d14ee61c4a9c026",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "QQQ"
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
      "headline": "Amazon’s $7.5 billion Decart tech deal makes Wedbush’s case for chip choice",
      "headlineKo": "Amazon의 75억 달러 규모 Decart 기술 거래로 Wedbush의 칩 선택 사례 제공",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=96fcd7edc3b7334aedd9595224573cff160f7fdfb3fbdc308d7581ce0e89303e",
        "publishedAt": 1795538220,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon의 75억 달러 규모 Decart 기술 거래로 Wedbush의 칩 선택 사례 | NASDAQ:ANT 무엇을 찾고 계십니까?",
        "회사 뉴스 일치하는 모든 회사 보기 일치하는 모든 뉴스 보기 기술 작성자: Luis Vincent Gochoco 고지 사항 투자 조언 없음 이 콘텐츠에 대해 편집 표준 및 정책 기사 공유 이 콘텐츠 정보 × Luis Vincent Go 정보",
        "그의 배경은 재무 보고 및 편집 분야이며 글로벌 시장, 비즈니스 및 뉴스 속보를 다룬 경험이 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $7.5 billion, 1.9 times, $4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $7.5 billion, 1.9 times, $4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "446c2a90ec54e2666501",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AVGO",
      "relatedTickers": [
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
      "headline": "Even With Jensen Huang Back as CEO, Nvidia Is Down 31% From Its High, While Broadcom Is Down 35%. Here’s the Better Buy Now.",
      "headlineKo": "Jensen Huang이 CEO로 돌아왔음에도 불구하고 Nvidia는 최고치에서 31% 하락했고 Broadcom은 35% 하락했습니다. 여기 Better Buy Now가 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2ea5fc474349c211bef9ed84d57f98dee7b14e423e5331cadaadafb835c9f813",
        "publishedAt": 1795537322,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang이 CEO로 돌아왔음에도 불구하고 Nvidia는 최고치에서 31% 하락했고 Broadcom은 35% 하락했습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 $59,201.00 -2.1% -$1,267.90 개미 $81.91 -6.5",
        "최악의 엔비디아 매각이 끝났을 가능성이 높음에도 불구하고 엔비디아에 대한 투자 명제는 여전히 손상된 상태입니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 31%, 35%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 31%, 35%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "972b1c00f72dce2f5f62",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet (GOOGL) Expands AI Search With Wallet Data",
      "headlineKo": "알파벳(GOOGL), 월렛 데이터로 AI 검색 확장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49559c05ed4169e163e41fc8047194c89d90e532a4ac29b85f659c3be68cfceb",
        "publishedAt": 1795536631,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet (GOOGL) Expands AI Search With Wallet Data",
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
      "id": "ee4b1d3a479054211722",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Is Driving Palantir Stock?",
      "headlineKo": "Palantir 주식을 이끄는 것은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56304ce4bcd91388e770572fcc151eb2c9a21ba1aabcad70e88bb9c5d95ae4e9",
        "publishedAt": 1795536563,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis Trefis 스토리라인 Palantir 주식을 이끄는 요인은 무엇입니까?",
        "2026년 11월 24일 · 작성자: Trefis Team PLTR YTD -9.3% SPY YTD +6.2% QQQ YTD +4.2% PLTR 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다.",
        "Palantir Technologies 주가는 2026년 11월 23일 월요일에 11.1% 상승하여 $159.36으로 마감되었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 9.3%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 9.3%, 6.2%, 4.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9b8c094d96125a59be06",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA",
        "SNDK"
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
      "headline": "Sandisk Sinks 14% as Memory Stocks Give Back Nvidia’s Huang Rally",
      "headlineKo": "메모리 주식이 Nvidia의 황 랠리를 되돌리면서 Sandisk는 14% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e807449de607bb7c06ec05d29cf2131ca53dea8b14e876b86b171800331f2375",
        "publishedAt": 1795535308,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 주식이 Nvidia의 황 랠리를 되돌리면서 Sandisk는 14% 하락 | TIKR.com 일반 투자 Sandisk는 메모리 주식이 Nvidia의 황 랠리를 되돌리면서 14% 하락했습니다. Bobby Sankhagowit • 4분 읽기 검토자: Bobby Sankhagowit 마지막 업데이트 N",
        "세 회사 중 누구도 자체적인 소식을 갖고 있지 않았습니다. Nvidia는 확인되지 않은 SEC 조사에 대한 보고에 미끄러졌습니다.",
        "분석가들은 여전히 ​​Sandisk의 정규 EPS가 2027 회계연도에 3배 이상으로 증가할 것으로 예상하고 있으므로 이 슬라이드에는 플래시 가격 하락에 대한 우려가 반영되어 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 14%, 11%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 14%, 11%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9cc8350699de1bc6b220",
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
      "headline": "Meta Fell 8% Over the Last 30 Days: Mutiple Wall Street Desks Expect 67% Returns From Here",
      "headlineKo": "지난 30일 동안 메타가 8% 하락했습니다: 여러 월스트리트 데스크에서 여기에서 67%의 수익을 기대합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ab9a0fcd8be1458f7ad7cae5d952616efc93a82c665fe16142889a3a0ad568c",
        "publishedAt": 1795535135,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타는 지난 30일 동안 8% 하락했습니다: 여러 월스트리트 데스크에서 여기에서 67%의 수익을 기대합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,202.60 −0.80% Dow Jones 49,958.20 +0.41% Nasdaq 100 26,244.20 −2.11% Russell 2000 2,687.59 +0.51% S&P 500 7,202.60 −0.80% 다우존스 49,958.20 +0.41% 나스닥 100 26,244.20 −2.11% 러셀 20",
        "'좋아요' 아이콘이 있는 대형 배너를 떼어내면 파란색 아치형 로고가 있는 새로운 기호가 나타납니다. 이는 Threads가 사용자 참여에서 X를 능가함에 따라 진화하는 Meta Platform의 정체성을 상징합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, 67%, $597.60 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8%, 67%, $597.60 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "07befbe05d859a1abbb4",
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
      "headline": "Why Nvidia Stock Gave Back Some Gains Today",
      "headlineKo": "Nvidia 주식이 오늘 일부 이익을 되찾은 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89c61e43673ea05765cb22a19fdd07b8808486bb136afc3beaf214f07636671d",
        "publishedAt": 1795535104,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 주식이 오늘 일부 이익을 되찾은 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,190.36 -0.6% -46.81 DJI 49,920.74 +0.7% +325.43 NASDAQ 23,662.80 -1.8% -426.76 비트코인",
        "오늘날 많은 투자자들이 이익을 얻고 있는 것으로 보입니다.",
        "월스트리트는 Nvidia에 대해 여전히 낙관적인 입장을 유지하는 반면, 의회는 Jensen Huang의 재고용에 대해 불평하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7.36%, 31%, 6.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7.36%, 31%, 6.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5edd34e13ff13b6b0049",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "ORCL",
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
      "headline": "Oracle Is a Higher-Leverage, Cash-Hungry Twin to Microsoft",
      "headlineKo": "Oracle은 Microsoft의 레버리지가 높고 현금이 부족한 쌍둥이입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1aa587113643b358b8db9c27840c1dbfc0f65130a9f79cf1f1d6897750222acb",
        "publishedAt": 1795535101,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle은 Microsoft의 더 높은 레버리지, 현금에 굶주린 쌍둥이입니다 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,202.60 −0.80% Dow Jones 49,958.20 +0.41% Nasdaq 100 26,244.20 −2.11% Russell 2000 2,687.59 +0.51% S&P 500 7,202.60 −0.80% 다우존스 49,958.20 +0.41% 나스닥 100 26,244.20 −2.11% 러셀 20",
        "© maywong_photos / Flickr Oracle( NYSE:ORCL | ORCL Price Prediction )과 Microsoft( NASDAQ:MSFT )는 모두 더 빠른 AI 클라우드 성장과 기록적인 백로그로 2027 회계연도를 시작했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 121%, $7.388, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 121%, $7.388, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fdcbd267b8b3d534a569",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "MSFT",
        "ORCL",
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
      "headline": "Oracle Is a Higher-Leverage, Cash-Hungry Twin to Microsoft",
      "headlineKo": "Oracle은 Microsoft의 레버리지가 높고 현금이 부족한 쌍둥이입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1aa587113643b358b8db9c27840c1dbfc0f65130a9f79cf1f1d6897750222acb",
        "publishedAt": 1795535101,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle은 Microsoft의 더 높은 레버리지, 현금에 굶주린 쌍둥이입니다 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,185.60 −0.18% Dow Jones 49,928.10 −0.16% Nasdaq 100 26,121.50 −0.36% Russell 2000 2,679.76 −0.17% S&P 500 7,185.60 −0.18% 다우존스 49,928.10 −0.16% 나스닥 100 26,121.50 −0.36% 러셀 20",
        "© maywong_photos / Flickr Oracle( NYSE:ORCL | ORCL Price Prediction )과 Microsoft( NASDAQ:MSFT )는 모두 더 빠른 AI 클라우드 성장과 기록적인 백로그로 2027 회계연도를 시작했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 121%, $7.388, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 121%, $7.388, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f3a0ac585999c04011e8",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Is Down 7% in a Month, but Not One Analyst Says Sell. Wall Street Sees $630+",
      "headlineKo": "Microsoft는 한 달 동안 7% 하락했지만 매도라고 말하는 분석가는 단 한 명도 없습니다. 월스트리트는 $630 이상을 봅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba6c02b9089db90ca192f52859b7d863c5cf43c67609b0bf9db9e807f84fc903",
        "publishedAt": 1795534416,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft는 한 달 동안 7% 하락했지만 매도라고 말하는 분석가는 단 한 명도 없습니다.",
        "월스트리트는 $630+ - 연중무휴 월스트리트를 봅니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,202.60 −0.80% Dow Jones 49,958.20 +0.41% Nasdaq 100 26,244.20 −2.11% Russell 2000 2,687.59 +0.51% S&P 500 7,202.60 −0.80% 다우존스 49,958.20 +0.41% 나스닥 100 26,244.20 −2.11% 러셀 20"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, $630, $493.52 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, $630, $493.52 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "70a9cb338e1aff368593",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "EME",
      "relatedTickers": [
        "EME",
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
      "headline": "Could EMCOR Stock's Winning Streak Be Luck?",
      "headlineKo": "EMCOR 주식의 연승은 행운일 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9300e757b49a41e236122e891aa2f6b7e4c91b2672bb0b9da976855df15e6b73",
        "publishedAt": 1795533887,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR 주식의 연승은 행운일 수 있을까?",
        "| Trefis Trefis 스토리라인 EMCOR 주식의 연속 우승은 행운일 수 있을까요?",
        "2026년 11월 24일 · 작성자: Trefis Team EME YTD +3.0% SPY YTD +5.9% XLI YTD +5.9% EME 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3.0%, 5.9%, $954 Billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 3.0%, 5.9%, $954 Billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "231c09090f3729b2ebdd",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "META",
        "NVDA"
      ],
      "relatedEntities": [
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
      "headline": "AMD Sinks 10%, Nvidia Down 7% as Chip Stocks Give Back Huang Rally, Resale Filing Weighs",
      "headlineKo": "AMD는 10% 하락, Nvidia는 칩 주식이 황 랠리를 반납하고 재판매 신고가 가중되면서 7% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9e6aa8e68ecdd7e8079fc72f960060d5bb0286e1d40461dd63e61d0d7c8a314",
        "publishedAt": 1795533597,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD는 10% 하락, Nvidia는 칩 주식이 Huang 랠리를 반납하고 재판매 신고가 가중되면서 7% 하락 | TIKR.com 일반 투자 AMD는 10% 하락, 칩 주가 반등에 따라 Nvidia는 7% 하락, 재판매 서류 제출로 인해 Michael Douglass • 4분 읽기",
        "AMD는 또한 재판매를 위해 약 3억 3,700만 주를 등록했는데, 대부분은 OpenAI와 Meta가 GPU를 구매할 때만 보장됩니다.",
        "분석가들은 AMD의 EPS가 2027년에 두 배 이상 증가할 것으로 예상하고 있으며, 주식은 5년 평균 배수 아래로 거래되고 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 7%, 20.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 10%, 7%, 20.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "05aa54cc08dcc8d99f21",
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
      "headline": "How Investors Are Reacting To Oracle Stock Securing AI Funding",
      "headlineKo": "AI 자금 확보를 위한 오라클 주식에 대한 투자자들의 반응",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=36dae52cbb57e895f520111b392585f4864a8ccb6dc629014b9171a7157fd5c6",
        "publishedAt": 1795533190,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 ORCL의 사업과 관련된 'How Investors Are Reacting To Oracle Stock Securing AI Funding' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "5878ffe28716d861c04a",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Meta launches its Muse personal agent in the UK – but it comes with a big warning",
      "headlineKo": "Meta는 영국에서 Muse 개인 에이전트를 출시했지만 큰 경고가 따릅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=976c6cf38f54207a805a6ea15dc92adfa139ae73ba54023d99ac09f01e98d5b0",
        "publishedAt": 1795533108,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta는 영국에서 Muse 개인 에이전트를 출시했지만 큰 경고가 따릅니다. The Independent 등록해 주셔서 감사합니다 자동으로 로그인하려면 페이지를 새로 고치거나 사이트의 다른 페이지로 이동하십시오.",
        "지금 독립 멤버십을 시작하세요.",
        "Meta는 영국에서 Muse 개인 에이전트를 출시했습니다. 하지만 관리들은 이를 사용하면 많은 위험을 초래할 수 있다고 경고했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "b4c898a7952be92e2290",
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
      "headline": "Amazon.com (AMZN) Agreed To Acquire Decart AI Optimization Technology For $7.5 Billion",
      "headlineKo": "Amazon.com(AMZN)이 Decart AI 최적화 기술을 75억 달러에 인수하기로 합의했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=529a67a14958d5dd8ee99ef0905fdcf1232f1f37ace2de44082daa67d69b88f7",
        "publishedAt": 1795533107,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 AMZN의 사업과 관련된 'Amazon.com (AMZN) Agreed To Acquire Decart AI Optimization Technology For $7.5 Billion' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "df98a070b75d395bf5c1",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "NVDA",
        "SPY"
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
      "headline": "Should One Number Scare You About Amazon Stock?",
      "headlineKo": "Amazon 주식에 대해 하나의 숫자가 당신을 겁나게 해야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=65361ac1b5fe482ede64a3a2032e74ff2c8733c88ada653d96d9a5f624fbd6e5",
        "publishedAt": 1795532925,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon 주식에 대해 하나의 숫자가 당신을 겁나게 해야 할까요?",
        "| Trefis Trefis 스토리라인 하나의 숫자로 Amazon 주식에 대해 걱정해야 합니까?",
        "2026년 11월 24일 · 작성자: Trefis Team AMZN YTD +10.6% SPY YTD +6.7% XLY YTD -1.5% AMZN 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10.6%, 6.7%, 1.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10.6%, 6.7%, 1.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e0a0f9d3059e0b07176f",
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
      "headline": "Amazon Is Reportedly Paying $7.5 Billion for Decart’s AI Chip Software",
      "headlineKo": "Amazon이 Decart의 AI 칩 소프트웨어에 75억 달러를 지불한 것으로 알려졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0be1854988a65092f44484d4e5ef78c58af6ffb7eb0f983a51048e24fe939346",
        "publishedAt": 1795532884,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $7.5 Billion, $7.5 billion, $7 billion, $255.39,, 3.47%, $256.32, $2.76 trillion, 64%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Amazon Is Reportedly Paying $7.5 Billion for Decart’s AI Chip Software' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e87aa8a72970d84de809",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000807/tsm-dividendadjustmentx202.htm",
        "publishedAt": 1795532400.0,
        "collectedAt": 1795778319.2849245
      },
      "confirmedFacts": [
        "TSM가 2026-11-25에 SEC Form 6-K을 제출했습니다."
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
      "id": "8760add990a0a8927669",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000805/tsm-monthend6kx20261125.htm",
        "publishedAt": 1795532400.0,
        "collectedAt": 1795778319.2849245
      },
      "confirmedFacts": [
        "TSM가 2026-11-25에 SEC Form 6-K을 제출했습니다.",
        "원문에서 관련 표현이 확인된 주제: 인수·매각"
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
      "id": "5281c3c66340586905f2",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR",
        "LITE",
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
      "headline": "Applied Optoelectronics Climbs 5% on $2.2 Billion Hyperscaler Supply Deal; Lumentum and Coherent Drop 6%",
      "headlineKo": "Applied Optoelectronics는 22억 달러 규모의 하이퍼스케일러 공급 거래로 5% 상승; Lumentum 및 Coherent Drop 6%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=279feed7f8e83c0bab8dca5730281447f596e24431227f8e50ac870e7ae96808",
        "publishedAt": 1795532304,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Optoelectronics는 22억 달러 규모의 하이퍼스케일러 공급 거래로 5% 상승; Lumentum 및 Coherent Drop 6% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,156.60 −0.59% Dow Jones 49,836.10 −0.34% Nasdaq 100 25,916.70 −1.14% Russell 2000 2,673.06 −0.42% S&P 500 7,156.60 −0.59% 다우존스 49,836.10 −0.34% 나스닥 100 25,916.70 −1.14% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 당사의 스폰서 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, $2.2 Billion, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 5%, $2.2 Billion, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "708befe00877a48a91a9",
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
      "headline": "Should You Buy Intel as Earnings Recover Despite a Premium Valuation?",
      "headlineKo": "프리미엄 가치 평가에도 불구하고 수익이 회복되면 인텔을 구입해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a488a1de9656f11294d8412bd78f8148f20e3bce578952b857d5aa4c2f9cb4af",
        "publishedAt": 1795532280,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "프리미엄 가치 평가에도 불구하고 수익이 회복되면 인텔을 구입해야 합니까?"
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
      "id": "c4f991d9125e67ad66d2",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Sinks 7% as Chip Stocks Give Back Huang Rally",
      "headlineKo": "Micron은 칩 주식이 황 랠리를 반납하면서 7% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88c1b22b9504084497c2dafb9fe4d315d8c345fbe121373950f216fb25a5fe04",
        "publishedAt": 1795531919,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론, 칩주 황 반등에 7% 하락 | TIKR.com 일반 투자 Micron은 칩 주식 반등으로 7% 하락했습니다. 황 랠리 David Hanson • 4분 읽기 검토자: David Hanson 최종 업데이트 2026년 11월 24일 @Wodthikorn Phutthasatch",
        "Micron에 대한 소식이 없는 상황에서 하락은 AI 정서에 관한 것입니다. 경영진은 Micron의 2027년 생산량의 75% 이상이 이미 투입되었다고 말합니다.",
        "마이크론은 투자자들이 호황이 지속될 것이라고 의심하기 때문에 2017~2018년 메모리 사이클의 정점에 가까운 한 자릿수 선행 P/E로 거래됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 75%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, 75%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c57efccebeada8bff63b",
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
      "headline": "MU Stock Downgraded, Price Target Cut By Almost $1,000: BNP Paribas Flags 2028 Hyperscaler Capacity Risks",
      "headlineKo": "MU 주가 하락, 목표 가격 거의 1,000달러 인하: BNP Paribas, 2028년 하이퍼스케일러 용량 위험 표시",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0fcb5f0d036ab8bc8771defc1c6cac49f94b40c9f8c4c4f45a726c49b3984dd",
        "publishedAt": 1795531754,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MU 주가 하락, 목표 가격 거의 1,000달러 인하: BNP Paribas, 2028년 하이퍼스케일러 용량 위험 표시"
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
      "id": "7316d6024f002f6df99d",
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
      "headline": "Tesla and SpaceX assemble deal teams for a merger that could give Musk majority control",
      "headlineKo": "Tesla와 SpaceX는 머스크에게 과반수 통제권을 부여할 수 있는 합병을 위해 거래 팀을 구성합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f5de9aed35522b805eec4c362b4673769714c57149068fa499331142b4bdddb",
        "publishedAt": 1795531555,
        "collectedAt": 1795772239.6090147
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla and SpaceX assemble deal teams for a merger that could give Musk majority control",
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
      "id": "5fb2e5ae1081175bdfae",
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
      "headline": "AI-Enabled Battlefield Management and Decision Support Systems Global Market Report 2026 | Lockheed Martin, RTX, Palantir Capitalize on Edge AI as Market Hits $17.88B by 2030",
      "headlineKo": "AI 지원 전장 관리 및 의사결정 지원 시스템 글로벌 시장 보고서 2026 | Lockheed Martin, RTX, Palantir, 2030년까지 시장이 178억 8천만 달러에 도달함에 따라 Edge AI 활용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2fd92dcec9d54af17d9945fcc008a89c15bcd5c8ce1437622a4c5fe67b69806c",
        "publishedAt": 1795531320,
        "collectedAt": 1795772239.6090147
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
        "이 기사는 PLTR의 사업과 관련된 'AI-Enabled Battlefield Management and Decision Support Systems Global Market Report 2026 | Lockheed Martin, RTX, Palantir Capitalize on Edge AI as Market Hits $17.88B by 2030' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
    }
  ],
  "byTicker": {
    "AMZN": [
      "fae88e51c5c19edc57bb",
      "4337ace326ce6b38ec2d",
      "527c2526d0b868b2d52f",
      "b4533e84bc615ec88d5c",
      "b6f94f45bf5ed8c67fda",
      "8032953b222dc7a6e5d2",
      "500da79913088ca631b2",
      "7c7deafa69a82d8f1c86",
      "78f8793ee3bd584a5b64",
      "6b1cb5351e37b3de5052",
      "38fab0c8ec4be3e5a1ba",
      "94e15d14ee61c4a9c026",
      "b4c898a7952be92e2290",
      "df98a070b75d395bf5c1",
      "e0a0f9d3059e0b07176f"
    ],
    "META": [
      "fae88e51c5c19edc57bb",
      "f1ffaf2db6a90dafb9ee",
      "2dae1e8e06fc84abcf23",
      "b010d7fc8020cad91083",
      "5896472b4bf0691895a9",
      "9a1b864ca446ea9436a0",
      "19c1c5254ee00de2bcd8",
      "5079f362dad41ed30fc0",
      "699ccb9f9b1fff3dd271",
      "9cc8350699de1bc6b220",
      "231c09090f3729b2ebdd",
      "5878ffe28716d861c04a"
    ],
    "NVDA": [
      "fae88e51c5c19edc57bb",
      "81767b0a8cdf61b64980",
      "75d064739c9137b7cd27",
      "9c15c7ce23d54a6bb3a2",
      "dc94abff985ef1297f82",
      "1a4be488890d62e03baf",
      "581a50c577e99eaff030",
      "cd8782f0be57ea16e3b2",
      "8fef59595c065585b853",
      "fa5bff0db174c173a8b4",
      "6bfbeb30f2033393e478",
      "124e5e650e14ed097a8b",
      "38dd856fd32020b6509d",
      "9a67161785d7d66a5eb8",
      "08c9b0e7548b83f9f21e",
      "a3605efe6f4a379d855e",
      "ada53346c8d7f3ded74b",
      "300ff1da3dfde2b67825",
      "06fdfa59d5b78a788ac8",
      "92ef8e4d3ae03cc9158b",
      "1b606dd6beac9bd5ca79",
      "7d7b64a5a048aa6d5139",
      "811fdbb7a8139f36c1ff",
      "8a7d004082fe013f44f8",
      "b35d476346961f1e922a",
      "38a1d1477bc449e1b12f",
      "ccb6009c1950d321a97a",
      "d4eeec0221a4d447e716",
      "ea6f7b04320358249fb2",
      "dbfa4d6b58836c782ba1",
      "b507e0b53ff7f37c802a",
      "71f45c46890fe1073c90",
      "07f101f0724707f5284f",
      "df3d1cfedba93fdcba55",
      "ee69f7e169e095a00d04",
      "644888c524bbe2e87062",
      "8a425e2c4410bbbafcca",
      "c8ecff5233deed33219f",
      "c6936b6b1f27f21d50d7",
      "00cf356dd99c1df528c3",
      "62833611bcfa3893df87",
      "fc7c5857e56283884b30",
      "1a4271ba370b93ec880b",
      "8dbf49fe41af30a14ccb",
      "e3d1ae9d2342830efc9f",
      "09579a09b134c01452eb",
      "5945368e0bf70137cd2a",
      "6b7bf22706b6acfd8502",
      "8102b30d056516346aa6",
      "ab067f800c7659effd5f",
      "38fab0c8ec4be3e5a1ba",
      "446c2a90ec54e2666501",
      "ee4b1d3a479054211722",
      "9b8c094d96125a59be06",
      "07befbe05d859a1abbb4",
      "70a9cb338e1aff368593",
      "231c09090f3729b2ebdd",
      "05aa54cc08dcc8d99f21",
      "b4c898a7952be92e2290",
      "df98a070b75d395bf5c1",
      "e0a0f9d3059e0b07176f",
      "5fb2e5ae1081175bdfae"
    ],
    "ORCL": [
      "fae88e51c5c19edc57bb",
      "81767b0a8cdf61b64980",
      "919897ad086bfb946d54",
      "cd8782f0be57ea16e3b2",
      "74db7e49a186f661c26f",
      "fa5bff0db174c173a8b4",
      "7127bb9d2122eea124c3",
      "a41bcbcd6e901507a946",
      "78b4293e28b885f5207e",
      "6bfbeb30f2033393e478",
      "ec9358c78f42c96283c1",
      "124e5e650e14ed097a8b",
      "b6f94f45bf5ed8c67fda",
      "ada53346c8d7f3ded74b",
      "92ef8e4d3ae03cc9158b",
      "1b606dd6beac9bd5ca79",
      "6da3662ff81ef7a19b3e",
      "7d7b64a5a048aa6d5139",
      "b35d476346961f1e922a",
      "38a1d1477bc449e1b12f",
      "182ecd4bd643807cb193",
      "36a8bf547ec40f42fc29",
      "ea6f7b04320358249fb2",
      "dbfa4d6b58836c782ba1",
      "07f101f0724707f5284f",
      "ee69f7e169e095a00d04",
      "644888c524bbe2e87062",
      "62833611bcfa3893df87",
      "fc7c5857e56283884b30",
      "1a4271ba370b93ec880b",
      "e3d1ae9d2342830efc9f",
      "38fab0c8ec4be3e5a1ba",
      "5edd34e13ff13b6b0049",
      "fdcbd267b8b3d534a569",
      "05aa54cc08dcc8d99f21",
      "b4c898a7952be92e2290",
      "e0a0f9d3059e0b07176f",
      "5fb2e5ae1081175bdfae"
    ],
    "AMD": [
      "81767b0a8cdf61b64980",
      "cd8782f0be57ea16e3b2",
      "8fef59595c065585b853",
      "fa5bff0db174c173a8b4",
      "78b4293e28b885f5207e",
      "6bfbeb30f2033393e478",
      "124e5e650e14ed097a8b",
      "78870d0ef302b719a327",
      "ada53346c8d7f3ded74b",
      "14c50d74359d491630c6",
      "06fdfa59d5b78a788ac8",
      "92ef8e4d3ae03cc9158b",
      "1b606dd6beac9bd5ca79",
      "7d7b64a5a048aa6d5139",
      "b35d476346961f1e922a",
      "38a1d1477bc449e1b12f",
      "ea6f7b04320358249fb2",
      "dbfa4d6b58836c782ba1",
      "07f101f0724707f5284f",
      "ee69f7e169e095a00d04",
      "8a425e2c4410bbbafcca",
      "c6936b6b1f27f21d50d7",
      "62833611bcfa3893df87",
      "603429280992c62c7719",
      "fc7c5857e56283884b30",
      "926c90723a864a715668",
      "1a4271ba370b93ec880b",
      "13530d146234dd31b8a9",
      "ffab3f74ad4a5ee697d6",
      "38fab0c8ec4be3e5a1ba",
      "231c09090f3729b2ebdd",
      "05aa54cc08dcc8d99f21",
      "b4c898a7952be92e2290",
      "e0a0f9d3059e0b07176f",
      "5fb2e5ae1081175bdfae"
    ],
    "CRM": [
      "81767b0a8cdf61b64980",
      "b8a44f199e33a30805b2",
      "e7160f48926994591164",
      "6b4421be54c0c4fdb156",
      "4b007adc28088b723d30",
      "75128d70beba69e0a6a3",
      "8102b30d056516346aa6"
    ],
    "MU": [
      "81767b0a8cdf61b64980",
      "9c15c7ce23d54a6bb3a2",
      "2fa26493bed45f4fc98f",
      "cd8782f0be57ea16e3b2",
      "fa5bff0db174c173a8b4",
      "6014b7ebca3c6822b1a0",
      "78b4293e28b885f5207e",
      "6bfbeb30f2033393e478",
      "124e5e650e14ed097a8b",
      "ada53346c8d7f3ded74b",
      "b51b45e863c3865b95a8",
      "92ef8e4d3ae03cc9158b",
      "1b606dd6beac9bd5ca79",
      "7d7b64a5a048aa6d5139",
      "8a7c0b061032bf69c3dd",
      "b35d476346961f1e922a",
      "38a1d1477bc449e1b12f",
      "ea6f7b04320358249fb2",
      "dbfa4d6b58836c782ba1",
      "cba7957342d622aeed04",
      "527e19fa80620c23c9fa",
      "07f101f0724707f5284f",
      "6c7a6c9f17e60787a68f",
      "ee69f7e169e095a00d04",
      "644888c524bbe2e87062",
      "8a425e2c4410bbbafcca",
      "c6936b6b1f27f21d50d7",
      "62833611bcfa3893df87",
      "cdcd1b8d6057e1f6213c",
      "fc7c5857e56283884b30",
      "1a4271ba370b93ec880b",
      "e07b80ee5ffb84b2ed82",
      "4787bb09f84ce4e3e56c",
      "ffab3f74ad4a5ee697d6",
      "95e1041eb1b66359e0bd",
      "38fab0c8ec4be3e5a1ba",
      "05aa54cc08dcc8d99f21",
      "b4c898a7952be92e2290",
      "e0a0f9d3059e0b07176f",
      "c4f991d9125e67ad66d2",
      "c57efccebeada8bff63b",
      "5fb2e5ae1081175bdfae"
    ],
    "FIX": [
      "4337ace326ce6b38ec2d"
    ],
    "QQQ": [
      "4337ace326ce6b38ec2d",
      "9c15c7ce23d54a6bb3a2",
      "1a4be488890d62e03baf",
      "de18fd90aa4aba92cb38",
      "0ed0f789495193793d69",
      "62c6d974a94f1bcbb002",
      "b7de47b417dbfe803b58",
      "5022230985773e9c53a5",
      "40d310bce6d7b0a762e1",
      "55c339172dedf23d06e6",
      "74db7e49a186f661c26f",
      "27f7f93213eece923c11",
      "9f72290bfdc840604a77",
      "8c2861d31044716f94a5",
      "13b3e43da253d6556417",
      "e05940683fd0735985a8",
      "6014b7ebca3c6822b1a0",
      "2d5a64c540a03609d300",
      "c0c59964d10b6a5b6c38",
      "78b4293e28b885f5207e",
      "b6f94f45bf5ed8c67fda",
      "527c8203e273d932b8ea",
      "7ea5b3dee28f5f4f3e3c",
      "38dd856fd32020b6509d",
      "42e812654abd0a40dd9e",
      "a3605efe6f4a379d855e",
      "a138c2896cea0d6fe105",
      "300ff1da3dfde2b67825",
      "16ce1f63f06bcf8d1a6d",
      "b51b45e863c3865b95a8",
      "e0509dee29c69012a9a9",
      "5e225b495fc1644cb77e",
      "2230c71ec90bbab80f01",
      "6da3662ff81ef7a19b3e",
      "caf20df780de3d1c4390",
      "7156435b03b6bbe65d4f",
      "4a486a04c229a8ea5975",
      "5896472b4bf0691895a9",
      "256441b5970726b660fc",
      "811fdbb7a8139f36c1ff",
      "fbdca53c00230e9b3361",
      "6162d1827a5758f48a07",
      "182ecd4bd643807cb193",
      "6a9336f3adb70a834350",
      "5429b271ccd0e33681f9",
      "ccb6009c1950d321a97a",
      "a24e38b8af1cd97db15c",
      "734651265c22d48a641f",
      "d4eeec0221a4d447e716",
      "60109d6be69347b29e2f",
      "5a2c7e82f587da9f2766",
      "4435bec3fb9a7a06053c",
      "ccfed0703d05cdbb6816",
      "50c650414f8e3ab242ee",
      "527e19fa80620c23c9fa",
      "b507e0b53ff7f37c802a",
      "71f45c46890fe1073c90",
      "d45925d827ca658e8618",
      "3f0cfe1051c10fee1089",
      "b21cb2a9ffda37a3ede7",
      "f76f73eb2538dbafe478",
      "6c7a6c9f17e60787a68f",
      "ee1c5c365569b42486a0",
      "644888c524bbe2e87062",
      "8a425e2c4410bbbafcca",
      "c8ecff5233deed33219f",
      "c6936b6b1f27f21d50d7",
      "00cf356dd99c1df528c3",
      "4b007adc28088b723d30",
      "cdcd1b8d6057e1f6213c",
      "5079f362dad41ed30fc0",
      "603429280992c62c7719",
      "93e73013202527551226",
      "926c90723a864a715668",
      "34d6ae1711a6c04830a5",
      "e450bf98e8ebb1efe630",
      "bf42fdc6ca61a8787848",
      "e07b80ee5ffb84b2ed82",
      "0cbeee52962c17aa1ecc",
      "7acc1b767d2d9dcd4f3c",
      "5a07d9eb952f0e5cb162",
      "4787bb09f84ce4e3e56c",
      "09579a09b134c01452eb",
      "13530d146234dd31b8a9",
      "33baba6afac7f59fcfc0",
      "1127afa0f0ff8dd65973",
      "c13ec16edfa36a2da2f3",
      "ffab3f74ad4a5ee697d6",
      "8102b30d056516346aa6",
      "5b64be3f41aa7c8a9eb5",
      "94e15d14ee61c4a9c026",
      "446c2a90ec54e2666501",
      "ee4b1d3a479054211722",
      "9cc8350699de1bc6b220",
      "07befbe05d859a1abbb4",
      "5edd34e13ff13b6b0049",
      "fdcbd267b8b3d534a569",
      "f3a0ac585999c04011e8",
      "5281c3c66340586905f2"
    ],
    "SPY": [
      "4337ace326ce6b38ec2d",
      "9c15c7ce23d54a6bb3a2",
      "dc94abff985ef1297f82",
      "1a4be488890d62e03baf",
      "de18fd90aa4aba92cb38",
      "0ed0f789495193793d69",
      "62c6d974a94f1bcbb002",
      "5022230985773e9c53a5",
      "40d310bce6d7b0a762e1",
      "55c339172dedf23d06e6",
      "74db7e49a186f661c26f",
      "27f7f93213eece923c11",
      "9f72290bfdc840604a77",
      "8c2861d31044716f94a5",
      "13b3e43da253d6556417",
      "e05940683fd0735985a8",
      "6014b7ebca3c6822b1a0",
      "2d5a64c540a03609d300",
      "c0c59964d10b6a5b6c38",
      "78b4293e28b885f5207e",
      "b4533e84bc615ec88d5c",
      "b6f94f45bf5ed8c67fda",
      "38dd856fd32020b6509d",
      "42e812654abd0a40dd9e",
      "a3605efe6f4a379d855e",
      "300ff1da3dfde2b67825",
      "b51b45e863c3865b95a8",
      "e0509dee29c69012a9a9",
      "5e225b495fc1644cb77e",
      "2230c71ec90bbab80f01",
      "6da3662ff81ef7a19b3e",
      "caf20df780de3d1c4390",
      "7156435b03b6bbe65d4f",
      "4a486a04c229a8ea5975",
      "256441b5970726b660fc",
      "b60b7ad78fa32b9add79",
      "3f8efee87b7fa134a7e7",
      "811fdbb7a8139f36c1ff",
      "fbdca53c00230e9b3361",
      "6162d1827a5758f48a07",
      "182ecd4bd643807cb193",
      "6a9336f3adb70a834350",
      "5429b271ccd0e33681f9",
      "ccb6009c1950d321a97a",
      "a24e38b8af1cd97db15c",
      "734651265c22d48a641f",
      "d4eeec0221a4d447e716",
      "60109d6be69347b29e2f",
      "5a2c7e82f587da9f2766",
      "caf6bd72fcd62c40424f",
      "4435bec3fb9a7a06053c",
      "ccfed0703d05cdbb6816",
      "50c650414f8e3ab242ee",
      "9a1b864ca446ea9436a0",
      "527e19fa80620c23c9fa",
      "b507e0b53ff7f37c802a",
      "d45925d827ca658e8618",
      "3f0cfe1051c10fee1089",
      "f76f73eb2538dbafe478",
      "6c7a6c9f17e60787a68f",
      "e233e1c43de48f60291a",
      "644888c524bbe2e87062",
      "8a425e2c4410bbbafcca",
      "c8ecff5233deed33219f",
      "c6936b6b1f27f21d50d7",
      "00cf356dd99c1df528c3",
      "4b007adc28088b723d30",
      "cdcd1b8d6057e1f6213c",
      "5079f362dad41ed30fc0",
      "603429280992c62c7719",
      "93e73013202527551226",
      "926c90723a864a715668",
      "34d6ae1711a6c04830a5",
      "8dbf49fe41af30a14ccb",
      "e450bf98e8ebb1efe630",
      "bf42fdc6ca61a8787848",
      "e07b80ee5ffb84b2ed82",
      "0cbeee52962c17aa1ecc",
      "7acc1b767d2d9dcd4f3c",
      "5a07d9eb952f0e5cb162",
      "4787bb09f84ce4e3e56c",
      "09579a09b134c01452eb",
      "13530d146234dd31b8a9",
      "33baba6afac7f59fcfc0",
      "5945368e0bf70137cd2a",
      "6b7bf22706b6acfd8502",
      "1127afa0f0ff8dd65973",
      "cf2517d2cbd0f8a6fc58",
      "c13ec16edfa36a2da2f3",
      "ffab3f74ad4a5ee697d6",
      "8102b30d056516346aa6",
      "ab067f800c7659effd5f",
      "5b64be3f41aa7c8a9eb5",
      "446c2a90ec54e2666501",
      "ee4b1d3a479054211722",
      "9cc8350699de1bc6b220",
      "07befbe05d859a1abbb4",
      "5edd34e13ff13b6b0049",
      "fdcbd267b8b3d534a569",
      "f3a0ac585999c04011e8",
      "70a9cb338e1aff368593",
      "df98a070b75d395bf5c1",
      "5281c3c66340586905f2"
    ],
    "AVGO": [
      "6f1987cbe63b10aebc08",
      "793a69ef5f8aefe224eb",
      "13b3e43da253d6556417",
      "78b4293e28b885f5207e",
      "acef17698a1c091172b4",
      "89d131430a6e6b0016b6",
      "a138c2896cea0d6fe105",
      "6856b16d174f0ddef033",
      "6a9336f3adb70a834350",
      "d45925d827ca658e8618",
      "3f0cfe1051c10fee1089",
      "07f101f0724707f5284f",
      "f76f73eb2538dbafe478",
      "6c7a6c9f17e60787a68f",
      "644888c524bbe2e87062",
      "00cf356dd99c1df528c3",
      "446c2a90ec54e2666501"
    ],
    "INTC": [
      "9c15c7ce23d54a6bb3a2",
      "a54fb82542fcd35805a6",
      "78870d0ef302b719a327",
      "ccb6009c1950d321a97a",
      "07f101f0724707f5284f",
      "ee69f7e169e095a00d04",
      "93e73013202527551226",
      "7acc1b767d2d9dcd4f3c",
      "708befe00877a48a91a9"
    ],
    "TSM": [
      "9c15c7ce23d54a6bb3a2",
      "124e5e650e14ed097a8b",
      "06fdfa59d5b78a788ac8",
      "b35d476346961f1e922a",
      "4107d2d6a83edcdd3a57",
      "e87aa8a72970d84de809",
      "8760add990a0a8927669"
    ],
    "TSLA": [
      "de18fd90aa4aba92cb38",
      "cd8782f0be57ea16e3b2",
      "31c3e7b6b6099ac7b563",
      "1289100cec301fe3df4c",
      "7d7b64a5a048aa6d5139",
      "674d3e0c1a03d92f7041",
      "a24e38b8af1cd97db15c",
      "cdcd1b8d6057e1f6213c",
      "bf42fdc6ca61a8787848",
      "7316d6024f002f6df99d"
    ],
    "MSFT": [
      "0ed0f789495193793d69",
      "7ea5b3dee28f5f4f3e3c",
      "a3605efe6f4a379d855e",
      "db44d14642333ea76283",
      "eed95bc648c6d0690a1b",
      "721db9ea4333b5acdf8d",
      "5429b271ccd0e33681f9",
      "e6d765f9801a10cc8f6f",
      "f26412db2ec88f2d7c2c",
      "1a2bd1d25cf29604c24c",
      "5edd34e13ff13b6b0049",
      "fdcbd267b8b3d534a569",
      "f3a0ac585999c04011e8"
    ],
    "GOOGL": [
      "62c6d974a94f1bcbb002",
      "5022230985773e9c53a5",
      "78b4293e28b885f5207e",
      "acef17698a1c091172b4",
      "89d131430a6e6b0016b6",
      "42e812654abd0a40dd9e",
      "8032953b222dc7a6e5d2",
      "4a486a04c229a8ea5975",
      "f68a2a1f4af6009d072d",
      "38a1d1477bc449e1b12f",
      "9c52f1585959405b6063",
      "8c6b85c4f2e5bb757f75",
      "ee69f7e169e095a00d04",
      "644888c524bbe2e87062",
      "5079f362dad41ed30fc0",
      "1a4271ba370b93ec880b",
      "ab067f800c7659effd5f",
      "972b1c00f72dce2f5f62"
    ],
    "SNDK": [
      "b7de47b417dbfe803b58",
      "9f134dba29767132eea3",
      "2230c71ec90bbab80f01",
      "6162d1827a5758f48a07",
      "674d3e0c1a03d92f7041",
      "9610f0f320c2c026b072",
      "6c7a6c9f17e60787a68f",
      "e07b80ee5ffb84b2ed82",
      "42cc565dc698806ae471",
      "1127afa0f0ff8dd65973",
      "9b8c094d96125a59be06"
    ],
    "STX": [
      "40d310bce6d7b0a762e1",
      "f05342db9b94b1a10109",
      "7b1dd28cddfb64e5f163",
      "674d3e0c1a03d92f7041",
      "4435bec3fb9a7a06053c"
    ],
    "MRVL": [
      "2535061d5b29f3978796",
      "13b3e43da253d6556417",
      "60109d6be69347b29e2f",
      "92d7e42ef9556a05d8cb",
      "415c20bce74a85359592",
      "34d6ae1711a6c04830a5",
      "bf1d40076816dd676dd5",
      "9cd0c365566d5b1b72f5"
    ],
    "COHR": [
      "55c339172dedf23d06e6",
      "734651265c22d48a641f",
      "ca44ba1adfebb9432242",
      "c6936b6b1f27f21d50d7",
      "00cf356dd99c1df528c3",
      "62833611bcfa3893df87",
      "5281c3c66340586905f2"
    ],
    "QCOM": [
      "04e3a10899addf1804e7",
      "2230c71ec90bbab80f01",
      "7d7b64a5a048aa6d5139",
      "6a9336f3adb70a834350",
      "496d55db5cad07e9572f",
      "c13ec16edfa36a2da2f3",
      "1616e49e5bc54f0e1cdd",
      "95e1041eb1b66359e0bd"
    ],
    "PLTR": [
      "27f7f93213eece923c11",
      "8f6bd3cd06ec98df8733",
      "e0509dee29c69012a9a9",
      "fbdca53c00230e9b3361",
      "5a2c7e82f587da9f2766",
      "ee1c5c365569b42486a0",
      "0cbeee52962c17aa1ecc",
      "ee4b1d3a479054211722",
      "5fb2e5ae1081175bdfae"
    ],
    "WDC": [
      "9f72290bfdc840604a77",
      "6162d1827a5758f48a07"
    ],
    "AAPL": [
      "f9ab51a8d504ccd9ec4d",
      "2d5a64c540a03609d300",
      "c0c59964d10b6a5b6c38",
      "da94b5345b89b4469c13",
      "caf20df780de3d1c4390",
      "ccfed0703d05cdbb6816",
      "527e19fa80620c23c9fa",
      "5b64be3f41aa7c8a9eb5"
    ],
    "KLAC": [
      "e05940683fd0735985a8",
      "7156435b03b6bbe65d4f",
      "50c650414f8e3ab242ee"
    ],
    "ETN": [
      "fa5bff0db174c173a8b4",
      "caf6bd72fcd62c40424f",
      "283ecd5e02cebbac8366",
      "5945368e0bf70137cd2a"
    ],
    "AMAT": [
      "08bd655f6a4bdea3e731",
      "d740df005a99ee1db247",
      "5e225b495fc1644cb77e",
      "7d7b64a5a048aa6d5139",
      "7156435b03b6bbe65d4f",
      "7c8ed0496e6ce0d6c727",
      "9af6ba30007b89649d9a",
      "6510334490ba54828b57",
      "7acc1b767d2d9dcd4f3c"
    ],
    "ARM": [
      "ae64a3e110f2fa232dfe"
    ],
    "ASML": [
      "0da68966a0c1321277a8",
      "50e68a9cecf136e4d3b2",
      "1de86ebdb81fd97ee8d1",
      "f76f73eb2538dbafe478",
      "72876ccff2017a3a561b"
    ],
    "LITE": [
      "997a9bf532496c63c714",
      "415c20bce74a85359592",
      "5281c3c66340586905f2"
    ],
    "LRCX": [
      "527c8203e273d932b8ea",
      "c7ef0709e0b0bab8e582",
      "16ce1f63f06bcf8d1a6d",
      "88f6ad09082576b95068",
      "7156435b03b6bbe65d4f",
      "09579a09b134c01452eb"
    ],
    "CEG": [
      "0d52449b10eb01955396",
      "b703b5d03f9400e5bd15"
    ],
    "VRT": [
      "2c57bac660e413e08a9a",
      "df3d1cfedba93fdcba55"
    ],
    "GEV": [
      "1b606dd6beac9bd5ca79",
      "4abbf15156f71bb2a08b",
      "df3d1cfedba93fdcba55",
      "5a07d9eb952f0e5cb162"
    ],
    "PWR": [
      "f58c5ac53c093ae3ec09",
      "b30ed72c0889c1b3d1f4",
      "dbfa4d6b58836c782ba1"
    ],
    "VST": [
      "0081adf2145680cb971a",
      "b703b5d03f9400e5bd15",
      "6b7bf22706b6acfd8502",
      "cf2517d2cbd0f8a6fc58"
    ],
    "MOD": [
      "ea6f7b04320358249fb2"
    ],
    "BE": [
      "4b007adc28088b723d30",
      "33baba6afac7f59fcfc0"
    ],
    "EME": [
      "65aff63beabcb7014309",
      "70a9cb338e1aff368593"
    ]
  }
};
