// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1789462793.784219,
  "events": [
    {
      "id": "c1c7e277a34b9d9d9818",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "AMD",
        "GEV",
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
      "headline": "GEV Stock Plunges After New Sell Rating, But Retail Investors Smell A Buying Opportunity",
      "headlineKo": "GEV 주식은 새로운 매도 등급 이후 급락했지만 소매 투자자들은 매수 기회를 포착했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c31055a6fbc58add2f7fb1f02248eb2d05571ebee281782b6f652541afe675b",
        "publishedAt": 1789447732,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 0.38%, 0.34%, 0.33%, 3.26%, 0.37%, 2.27%, 0.18%, 0.90%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GEV의 사업과 관련된 'GEV Stock Plunges After New Sell Rating, But Retail Investors Smell A Buying Opportunity' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0416214ecdc2fb924bf4",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AAPL",
        "AMD",
        "AMZN",
        "MU",
        "NVDA",
        "ORCL",
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
      "headline": "Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?",
      "headlineKo": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
        "publishedAt": 1789445485,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 AMZN의 사업과 관련된 'Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9ac11af272b7f0df5fd3",
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
      "headline": "AI Books Are Flooding Amazon — 63% of Religious Titles Flagged as AI, While Human Authors Face a Revenue Squeeze: Report",
      "headlineKo": "AI 도서가 아마존에 넘쳐나고 있습니다. 종교 서적 중 63%가 AI로 표시되고 인간 작가는 수익 압박에 직면해 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ccff269ff80c53706e5c3b25ac66b0fce4124126e8dc8ee94a42c57f1279c3b",
        "publishedAt": 1789443007,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI Books Are Flooding Amazon — 63% of Religious Titles Flagged as AI, While Human Authors Face a Revenue Squeeze: Report",
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
      "id": "d9a4e05518edaec84b6a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "INTC",
        "MU",
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
      "headline": "Why Micron, Intel, AMD, and Other Chip Stocks Fell Today",
      "headlineKo": "오늘 Micron, Intel, AMD 및 기타 칩 주식이 하락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1da4f2030c1574b519935f2a479a9b0993c010764c860f8888851706662c4d84",
        "publishedAt": 1789442902,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 Micron, Intel, AMD 및 기타 칩 주식이 하락한 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 내부고발자의 합창단이 늘어나면서 세계에 잠재력을 경고하고 있습니다.",
        "투자자들이 위험을 줄이기로 결정함에 따라 많은 AI 관련 주식이 하락했습니다.",
        "월요일 최고의 AI 칩 주식 중 일부의 성과는 다음과 같습니다. Advanced Micro Devices(AMD -4.40%), 4.4% Micron(MU -5.25%) 하락, Intel(5.3% 하락)( INTC -5.59% ), 5.6% 하락 이미지 출처: Getty Images."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.40%, 4.4%, 5.25% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.40%, 4.4%, 5.25% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5f02d416daba49681632",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AVGO",
        "GOOGL",
        "MSFT",
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
      "headline": "AI Slowdown Debate Splits Tech CEOs: Nvidia, Broadcom Dismiss Any Threat While Elon Musk Calls For Peer Review System",
      "headlineKo": "AI 둔화 논쟁으로 기술 CEO 분열: Nvidia, Broadcom은 Elon Musk가 동료 검토 시스템을 요구하는 동안 모든 위협을 무시",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5dc798dae84bbd2108d61a5dfd47e5f1a36f4a00d6c30ff78882f0c74976b86e",
        "publishedAt": 1789442191,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 둔화 토론으로 기술 CEO 분할: Nvidia, Broadcom은 모든 위협을 무시하고 Elon Musk는 동료 검토 시스템을 요구합니다. 새로운 에이전트 연결 트렌드 뉴스 수익 모든 DIA 0.38% SPY 0.34% QQQ 0.32% 트렌드 RYCEY 3.26% GLW 0.37% FPS 2.27% V",
        "AI 둔화 논쟁으로 기술 CEO 분열: Nvidia, Broadcom은 모든 위협을 일축하고 Elon Musk는 동료 검토 시스템을 요구합니다. 투자자들이 해당 분야에 미치는 영향을 평가함에 따라 AI 리더들은 안전성과 속도에 대해 의견을 달리합니다.",
        "클로즈업은 스마트폰 화면에 Gemini, Claude, ChatGPT, DeepSeek, Mistral 및 Copilot 아이콘을 보여줍니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.34%, 0.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.34%, 0.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ee4ddf8a5a70c346e8ad",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM",
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
      "headline": "NOW, INTU, ADBE, CRM Stocks Surge As AI Pacing Debate Hammers Chips: Analyst Says Hardware Vs Software Trade ‘Is Turned On Its Head’",
      "headlineKo": "AI 속도 논쟁이 칩을 망치면서 NOW, INTU, ADBE, CRM 주식이 급등: 분석가는 하드웨어 대 소프트웨어 거래가 '역전됐다'고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=693b1520223b32e3da5ac6888ac7c153d507d17ca4f6658172244205ed6be59a",
        "publishedAt": 1789439124,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 속도 논쟁이 칩을 망치면서 NOW, INTU, ADBE, CRM 주가 급등: 분석가는 하드웨어 대 소프트웨어 거래가 '전면적'이라고 말합니다. 새로운 에이전트 연결 동향 뉴스 수익 전체 DIA 0.38% SPY 0.35% QQQ 0.28% 추세 RYCEY 3.26% GLW 0.",
        "AI 속도 논쟁이 칩을 망치면서 NOW, INTU, ADBE, CRM 주가 급등: 애널리스트는 하드웨어 대 소프트웨어 거래가 '전면으로 바뀌었다'고 말합니다. 소프트웨어가 새로운 촉매제를 찾자 투자자들은 AI 중단 위험을 재평가합니다.",
        "거래자들이 2026년 9월 14일 오전 거래 중에 뉴욕 증권 거래소 바닥에서 일하고 있다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.35%, 0.28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.35%, 0.28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9eee2bcd5228c15c4611",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm (QCOM) Expands AI Data Center Push With New Compute Fabric Partnership",
      "headlineKo": "Qualcomm(QCOM), 새로운 컴퓨팅 패브릭 파트너십으로 AI 데이터 센터 추진 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca2623d00d563488bd540cfae4b5c93c518021e25542996274c70e031dc43c26",
        "publishedAt": 1789438156,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm (QCOM) Expands AI Data Center Push With New Compute Fabric Partnership",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "1ce08bf11a28d6424e26",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon Partners with Wiwynn to Expand U.S. AI Infrastructure Capacity",
      "headlineKo": "Amazon, Wiwynn과 협력하여 미국 AI 인프라 용량 확장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d6f938474dcced437940a650150120826e2569d92b9e30d51edea96f8f199f9",
        "publishedAt": 1789435343,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon Partners with Wiwynn to Expand U.S. AI Infrastructure Capacity",
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
      "id": "80177b84463f10bd6b2c",
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
      "headline": "BE Stock Falls Most In Nearly A Month: Why This Analyst Sees Over 36% Upside",
      "headlineKo": "BE 주식은 거의 한 달 만에 가장 많이 하락했습니다: 이 분석가가 36% 이상의 상승 여력을 보는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45bc5ebd57993dbf5273bf53afe9f375d12eb1f7a8e9fc2cba0fd4a1691bed12",
        "publishedAt": 1789434808,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 BE 주가가 거의 7% 하락한 이유는 무엇입니까?",
        "신규 에이전트 연결 트렌드 뉴스 수입 전체 DIA 0.38% SPY 0.32% QQQ 0.26% Trending RYCEY 3.26% GLW 0.37% FPS 2.27% SPY 0.32% VTI 0.18% CRWD 0.87% DJT 0.56% PANW 0.61% IBIT 2.26% NOW 1.15% 홈 뉴스 시장 주식 BE 주가 가장 많이 하락 I",
        "BE 주식은 거의 한 달 만에 가장 많이 하락했습니다: 이 분석가가 36% 이상의 상승세를 보이는 이유 에너지 주식은 업계의 안전 문제를 제기한 최고 AI 리더들에 따른 AI 역풍 속에서 하락했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 0.38%, 0.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, 0.38%, 0.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4ae102a98e090cc8cf74",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Constellation Energy (CEG) Stock May Be Below Fair Value Despite $715 Million Power Plant Deal",
      "headlineKo": "Constellation Energy(CEG) 주식은 7억 1,500만 달러 규모의 발전소 거래에도 불구하고 적정 가치보다 낮을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dfb5762b256eccdb074d6e0fd3553ba3cb1cbc2f2884e68baea77c0eff683ed4",
        "publishedAt": 1789428007,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy (CEG) Stock May Be Below Fair Value Despite $715 Million Power Plant Deal",
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
      "id": "ea1ac804da120dd685a4",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "QCOM"
      ],
      "relatedEntities": [
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why QUALCOMM (QCOM) Is Up 6.8% After New Amazon AI Chip Deal And What's Next",
      "headlineKo": "QUALCOMM(QCOM)이 새로운 Amazon AI 칩 거래 이후 6.8% 상승한 이유와 다음 단계",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4057a1f4d72fec2556a61fdb3a9253d77903d42d6655e0f136950db69b7c4b55",
        "publishedAt": 1789427968,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "QUALCOMM(QCOM)이 새로운 Amazon AI 칩 거래 이후 6.8% 상승한 이유와 다음 단계"
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
      "id": "d736044487854daf457c",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Microsoft Just Made a Move That Could Put More Pressure on Its Azure Business. Here's Why It Could Turn Out Great for the Stock",
      "headlineKo": "Microsoft는 Azure 비즈니스에 더 많은 압력을 가할 수 있는 조치를 취했습니다. 이것이 주식에 좋은 결과를 가져올 수 있는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8ea0d71b0bb73d7b17a1a4044a495959394b695d92256cd9c59015d0da8e08c",
        "publishedAt": 1789426897,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft는 Azure 비즈니스에 더 많은 압력을 가할 수 있는 조치를 취했습니다.",
        "이것이 주식에 좋은 결과를 가져올 수 있는 이유는 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 참여하세요. Microsoft( MSFT +1.97% )의 Azure 비즈니스는",
        "성장률이 강하면 주식 뒤에 숨은 열정도 강합니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $75 billion, $15 billion, 1.97 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $75 billion, $15 billion, 1.97 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "93bccea64343fea10f7e",
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
      "headline": "Is Oracle’s AI Buildout Strategy Stretching Its Balance Sheet Too Far for (ORCL) Investors?",
      "headlineKo": "오라클의 AI 구축 전략이 (ORCL) 투자자에게 대차대조표를 너무 확대하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2b91df2b669181fc3cb8c0d7f789136684c68f6e1de000a39e51156fe66db6e",
        "publishedAt": 1789424106,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 ORCL의 사업과 관련된 'Is Oracle’s AI Buildout Strategy Stretching Its Balance Sheet Too Far for (ORCL) Investors?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "90128dee394a9daf4d73",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "MSFT",
        "ORCL",
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
      "headline": "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus",
      "headlineKo": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
        "publishedAt": 1789422834,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Nasdaq, Dow 하락세 칩 제조업체 약점, 국채 수익률 압박 — MSFT, NFLX, ORCL, CRWD, RBLX 초점 신규 에이전트 연결 동향 뉴스 수익 전체 DIA 0.38% SPY 0.35% QQQ 0.32% 추세 RYCEY 3.26% GLW 0.37% FPS 2.27% VTI 0.",
        "S&P 500, Nasdaq, 칩 제조업체 약점에 대한 Dow 하락, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX In Focus Anthropic CEO Dario Amodei는 AI 기능 개발 속도를 늦출 것을 촉구했습니다.",
        "트레이더들이 2026년 7월 29일 뉴욕시 뉴욕증권거래소(NYSE)에서 일하고 있다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.35%, 0.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.35%, 0.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f38363b1ca382ef776a3",
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
      "headline": "Forget JEPI: QQQ’s Sponsor Sells an Equal-Weight S&P Income Fund That Charges Less and Is Beating It by 8 Points",
      "headlineKo": "JEPI는 잊어라: QQQ의 스폰서는 수수료가 더 저렴하고 8포인트 더 나은 동일 가중치 S&P 소득 펀드를 판매합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66ede0b73e9b5bc754f3317022ba5940fd534d2389a04d6f091a5237514c9244",
        "publishedAt": 1789422324,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JEPI는 잊어라: QQQ의 스폰서는 수수료가 더 저렴하고 8포인트 더 나은 동일 가중치 S&P 소득 펀드를 판매합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,606.60 −0.32% Dow Jones 52,288.20 −0.33% Nasdaq 100 29,075.20 −0.37% Russell 2000 2,886.50 −0.32% S&P 500 7,606.60 −0.32% 다우존스 52,288.20 −0.33% 나스닥 100 29,075.20 −0.37% 러셀 2000 2,886.50 −0.",
        "Ryne Mauck 작성 2026년 9월 14일 오후 5시 45분(ET) 게시 · 4분 읽기 ETF 심사관 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.32%, 0.33%, 0.37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.32%, 0.33%, 0.37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "937070f7c01999d73d87",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
        "GOOGL",
        "META",
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
      "headline": "Big Tech Issued About $220 Billion of Bonds. Alphabet and Meta Show How AI Is Warping the Credit Market",
      "headlineKo": "Big Tech는 약 2,200억 달러 규모의 채권을 발행했습니다. 알파벳과 메타는 AI가 어떻게 신용 시장을 왜곡하는지 보여줍니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90ec7de50bce06e131bad79726bd4df850afa47acc3da8ba426d9ece1d110b45",
        "publishedAt": 1789421386,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 GOOGL의 사업과 관련된 'Big Tech Issued About $220 Billion of Bonds. Alphabet and Meta Show How AI Is Warping the Credit Market' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "16652f8a2e3a5d4b44d5",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV",
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
      "headline": "Why Did GE Vernova Stock Fall Today?",
      "headlineKo": "오늘 GE Vernova 주식이 하락한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bf5024d65c835ad80a771e1d5f106c7f325e20588f338e2f21f8daf2fe23800f",
        "publishedAt": 1789420008,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 GE Vernova 주식이 하락한 이유는 무엇입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool GE Vernova( GEV -8.62% ) 9월 월요일 주가는 8.6% 하락했습니다.",
        "2026년 11월 14일, 최고 AI 연구소의 리더들이 강력한 기술 개발의 세계적인 둔화를 요구한 이후입니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8.62 %, $ 874.76, $233 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 8.62 %, $ 874.76, $233 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "76cca5fead312c7b4e69",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "ORCL",
      "relatedTickers": [
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AI Stocks Tumble, Frontier Lab Execs Call for AI Slowdown, and Ellison Pulls the Plug on 50M ORCL Sale",
      "headlineKo": "AI 주가 폭락, Frontier Lab 경영진이 AI 둔화 요구, Ellison이 5천만 ORCL 판매 중단",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddcfcf4d5553d241100227c67ae9a1c420ef8823b4baa41881784b1c76c7662c",
        "publishedAt": 1789419868,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 주가 폭락, Frontier Lab 경영진이 AI 둔화 요구, Ellison이 5천만 ORCL 판매 중단 - Blockspace",
        "오늘 우리는 최고의 AI 연구소 CEO들이 프론티어 연구소 개발 속도를 늦추라고 요구하면서 시장이 반응하면서 오늘날의 AI 주식에서 승자와 대부분 패자를 살펴봅니다.",
        "그 메모에서 우리는 Anthropic CEO Dario Amodei가 \"미개척지의 속도 조절\"을 촉구하는 이유, AI 둔화와 관련하여 이것이 실제로 의미하는 바, 그리고 다른 주요 CEO와 트럼프 대통령의 반응을 설명합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, $5, $13 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 20%, $5, $13 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "d8be74b809d4c3a253aa",
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
      "headline": "Broadcom Drops Over 4% as $21.7 Billion AI Forecast Meets Slowdown Fears",
      "headlineKo": "Broadcom은 217억 달러 규모의 AI 예측이 둔화 우려를 충족하면서 4% 이상 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d142438bc7bfb55c2895ae8b57e5eb7e10d0929e372682f8f83b0fa663a85a26",
        "publishedAt": 1789419615,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 AVGO의 사업과 관련된 'Broadcom Drops Over 4% as $21.7 Billion AI Forecast Meets Slowdown Fears' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "949727724e4e60e94564",
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
      "headline": "TPAY Yields 10% With Full S&P 500 Exposure. Here’s Exactly What You Give Up to Get It",
      "headlineKo": "TPAY는 S&P 500 전체 노출로 10%의 수익을 얻습니다. 당신이 그것을 얻기 위해 포기한 것이 바로 여기에 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61efc1183654479716645cb72e833026b1d9c8c5e84df8f016da853f7c781543",
        "publishedAt": 1789418619,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TPAY는 S&P 500 전체 노출로 10%의 수익을 얻습니다.",
        "당신이 그것을 얻기 위해 포기한 것이 바로 여기에 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,606.60 −0.32% Dow Jones 52,288.20 −0.33% Nasdaq 100 29,075.20 −0.37% Russell 2000 2,886.50 −0.32% S&P 500 7,606.60 −0.32% 다우존스 52,288.20 −0.33% 나스닥 100 29,075.20 −0.37% 러셀 2000 2,886.50 −0."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 0.32%, 0.33% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10%, 0.32%, 0.33% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ec5b2553ea70cf7bb575",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "MSFT Stock Gains 2% — Microsoft Unveils ‘Humanist AI’ Code Of Conduct To Curb Autonomous AI Risks",
      "headlineKo": "MSFT 주가 2% 상승 - Microsoft, 자율 AI 위험을 억제하기 위한 '인본주의 AI' 행동 강령 공개",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6757cb27da7fd94054bccaf112f54ab28d82225d5b22b8555136ba8b78c6643",
        "publishedAt": 1789417969,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MSFT 주가 2% 상승 — Microsoft, 자율 AI 위험을 억제하기 위한 '인본주의적 AI' 행동 강령 공개 New 에이전트 연결 Trending News Earnings All DIA 0.21% SPY 0.40% QQQ 0.73% Trending CLOV 5.81% PLAY 4.05% CCXI 3.08% MAGS 0.14% S 14.38%",
        "MSFT 주가 2% 상승 - Microsoft, 자율 AI 위험을 억제하기 위해 '인본주의 AI' 행동 강령 공개 Microsoft는 초지능을 인간의 통제하에 엄격하게 유지하기 위해 37페이지 분량의 \"인본주의 AI 행동 강령\" 초안을 발표했습니다.",
        "Microsoft 로고는 독일 뮌헨에 있는 Microsoft Deutschland GmbH의 본사 건물에서 볼 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, 0.21%, 0.40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, 0.21%, 0.40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4e31b5904549216ca564",
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
      "headline": "Is META Stock’s $130B AI Buildout Your Ticket to an 8.7% Yield?",
      "headlineKo": "META Stock의 1,300억 달러 규모의 AI 구축이 8.7%의 수익률을 낼 수 있는 티켓인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=181d3bdaad0da5cb78503b1b147d750e0d64df3bfac3297b5c746da9efcf0dd0",
        "publishedAt": 1789417293,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "META Stock의 1,300억 달러 규모의 AI 구축이 8.7%의 수익률을 낼 수 있는 티켓인가요?",
        "| Trefis META Stock의 1,300억 달러 규모의 AI 구축으로 8.7%의 수익률을 얻을 수 있습니까?",
        "2026년 9월 14일 · Trefis 팀 META YTD +1.0% SPY YTD +11.9% XLC YTD -1.9% META 분석 → 메타 플랫폼(META)은 52주 최고치보다 약 17% 낮은 수준으로 거래되고 있으며 지난 1년 동안 S&P 500이 상승하는 동안 하락세를 보였습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $130, 8.7%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $130, 8.7%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "736e6c7bdd834dc87f7d",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Should You Buy SanDisk Stock Because It Has Started Retiring Its Own Shares?",
      "headlineKo": "자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0a6793ba3a2c331f1f62688ec5ecc953b11ea5b426897bc3da48486cc550ac5",
        "publishedAt": 1789413156,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?",
        "| Trefis는 자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?",
        "2026년 9월 14일 · Trefis Team SNDK YTD +553.8% SPY YTD +11.9% QQQ YTD +15.6% SNDK 분석 → SanDisk(SNDK) 주가는 지난 12개월 동안 80달러 미만에서 1,650달러 이상으로 급등하여 20배 이상 상승했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 553.8%, 11.9%, 15.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 553.8%, 11.9%, 15.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e8f67d486969e63c95a0",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "NVIDIA vs. Oracle: Which AI Stock Is the Better Buy After Earnings?",
      "headlineKo": "NVIDIA vs. Oracle: 수익을 낸 후 매수하는 것이 더 나은 AI 주식은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13952dff579190ce77353acdb227bd1564a8fdb46d83f447c0ba6e27839dfe52",
        "publishedAt": 1789412400,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVIDIA vs. Oracle: 수익을 낸 후 매수하는 것이 더 나은 AI 주식은 무엇입니까?"
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
      "id": "9b854a77d501c4842939",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML",
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
      "headline": "Why ASML Stock Is Falling Today",
      "headlineKo": "오늘 ASML 주식이 하락하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2cd7ed2982597117c00fda11d886d678395c523bab3f8513e602e821f2a0c9bf",
        "publishedAt": 1789411844,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 ASML 주식이 하락하는 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool ASML Holding ( ASML -7.25% ) 산업계 주요 AI 경영진 이후 월요일 주가 하락",
        "2026년 14일 ASML 주가는 6.2% 하락했고, S&P 500과 나스닥 종합지수는 각각 0.3%, 0.2% 하락했다.",
        "Expand NASDAQ: ASML ASML 프리미엄 기능 Moneyball Superscore 97 /100 오늘의 변동폭( -7.25 %) $ -123.15 현재 가격 $ 1,575.15 주요 데이터 포인트 시가 총액 $607B 시가 총액은 상장 주식 미결제만을 사용하여 계산되었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7.25 %, $ 1,575.15, $607 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7.25 %, $ 1,575.15, $607 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "28083c643abaccdafff7",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Did You Pay For Palantir's Guidance Or For Something Else?",
      "headlineKo": "Palantir의 지도 비용을 지불하셨나요, 아니면 다른 비용을 지불하셨나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3974509279070742f85a17dc52cf35f3ccacec4f79c8067045cb4f8fe25d44d",
        "publishedAt": 1789408836,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir의 안내 비용을 지불하셨나요, 아니면 다른 비용을 지불하셨나요?",
        "| Trefis Palantir의 안내 비용을 지불하셨나요, 아니면 다른 비용을 지불하셨나요?",
        "2026년 9월 14일 · Trefis 팀 PLTR YTD -2.5% SPY YTD +11.9% QQQ YTD +15.6% PLTR 분석 → Palantir Technologies(PLTR)는 8월에 2026년 수익 지침을 상향 조정했으며, 출시 기간 동안 주가는 약 32% 상승했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.5%, 11.9%, 15.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.5%, 11.9%, 15.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "70cf57446a6c47a317ed",
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
      "headline": "Corning Tumbles 12% on $2B At-the-Market Equity Offering; Coherent Sinks 11%, Lumentum Drops 9%, Fabrinet Slides 6%",
      "headlineKo": "코닝, 20억 달러 규모의 시장 주식 공모에서 12% 하락; 코히런트 싱크 11%, 루멘텀 드롭 9%, 파브리넷 슬라이드 6%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12a7d152d69368274062f1295fd27d17ab50c5b0392ff5563a0679785b3bd09a",
        "publishedAt": 1789408190,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "코닝, 20억 달러 규모의 시장 주식 공모에서 12% 하락; 코히런트 싱크 11%, 루멘텀 드롭 9%, 파브리넷 슬라이드 6% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,606.60 −0.32% Dow Jones 52,288.20 −0.33% Nasdaq 100 29,075.20 −0.37% Russell 2000 2,886.50 −0.32% S&P 500 7,606.60 −0.32% 다우존스 52,288.20 −0.33% 나스닥 100 29,075.20 −0.37% 러셀 2000 2,886.50 −0.",
        "𝕏 f ⧉ 빨간색 레이저 빔은 광학 구성 요소를 조명하여 Lumentum의 다가오는 2026년 3분기 수익 보고서와 놀라운 주식 실적에 대한 집중을 상징합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, $2, 11% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, $2, 11% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7a1580fb2be3a233cf46",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Drops Nearly 6% as Its $50 Billion Forecast Meets AI Spending Doubts",
      "headlineKo": "Micron은 500억 달러 예측이 AI 지출 의심을 충족하면서 거의 6% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dee20cf07314c0b2178e4a18e93614c6277a13c7fd67f0cbb61851398149c2c3",
        "publishedAt": 1789407960,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 MU의 사업과 관련된 'Micron Drops Nearly 6% as Its $50 Billion Forecast Meets AI Spending Doubts' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "67169fd0f99b5a50defa",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
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
      "headline": "Netflix Climbs 4%, Alphabet Ticks Up, Amazon Barely Budges as New Streaming Policy Alliance Launches",
      "headlineKo": "Netflix는 4% 상승, Alphabet은 상승, Amazon은 새로운 스트리밍 정책 동맹 출시로 거의 예산을 책정하지 않음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fade9e0faef0b0639f6398ea9e50dfffd2e862e25a6145ef9901dd9a9e1071a9",
        "publishedAt": 1789407952,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Netflix Climbs 4%, Alphabet Ticks Up, Amazon Barely Budges as New Streaming Policy Alliance Launches - 24/7 Wall St.",
        "Skip to content ❚❚ At close S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.",
        "By David Moadel Published September 14, 2026, 1:45pm ET · 4 min read Market Movers desk."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, $80.78,, 14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, $80.78,, 14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ef7610a0fac03fa075d8",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "INTC",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Bitcoin Climbs as AI Slowdown Calls Sink Nvidia, Intel and Other Chip Stocks",
      "headlineKo": "AI 둔화로 엔비디아, 인텔 및 기타 칩 주식이 침몰함에 따라 비트코인 ​​상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f6a78e6d955f6a37eecc480087ec33c613d0b97aa4364bffe7e673442af27b2c",
        "publishedAt": 1789407604,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 둔화 요청으로 비트코인 상승 Nvidia, Intel 및 기타 칩 주식 침몰 - 코인 가격 해독 BTC $78,017.00 1.72% ETH $2,512.75 1.32% BNB $718.93 0.07% XRP $1.42 5.57% USDC $0.999872 0.00% SOL $102.70 3.21% TRX $0.337494 -0.10% FIGR_H",
        "Nvidia, Intel, AMD 및 Marvell은 월요일 필라델피아 반도체 지수가 거의 6% 하락하면서 칩 제조업체 매도세를 주도했습니다.",
        "비트코인은 UTC 자정 이후 거의 2% 상승해 78,280달러까지 올랐고, 금, 은 및 대부분의 AI 관련 주식은 하락했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $78,017.00, 1.72%, $2,512.75 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $78,017.00, 1.72%, $2,512.75 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "956ac1b99f02b074871f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir, Nvidia, Booz Allen restrict Anthropic and OpenAI models",
      "headlineKo": "Palantir, Nvidia, Booz Allen은 Anthropic 및 OpenAI 모델을 제한합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=248b657ec28da438120b07529761197b455c0278d6b060333499f14124ef716e",
        "publishedAt": 1789407457,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir, Nvidia, Booz Allen은 Anthropic 및 OpenAI 모델 A.I를 제한합니다.",
        "Palantir와 Nvidia는 데이터 보존에 대한 우려로 Anthropic의 AI 모델을 제한하고 있습니다. 회사는 AI 제공업체가 프론티어 모델 사용을 확장하기 전에 독점 데이터를 유지하거나 학습하지 않는다는 보장을 원합니다. 작성자: Cris Tolomia",
        "The Information은 이 문제에 정통한 사람들의 말을 인용하여 이 이야기를 먼저 보도했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0b96a73958734eb3cc27",
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
      "expectedHorizon": "단기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "X Corp and SpaceXAI drop antitrust lawsuit against Apple",
      "headlineKo": "X Corp와 SpaceXAI, Apple을 상대로 한 독점금지 소송 기각",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d96f02c2ea6f17e279b25202fd2387903d3cb200dcd3f101f59b15e0ab27077",
        "publishedAt": 1789406737,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "X Corp와 SpaceXAI, Apple을 상대로 한 독점금지 소송 기각"
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
      "id": "1c6d4f63840c2c50185f",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "NVDA",
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
      "headline": "Intel Or NVIDIA: Who Is Paying For The AI Build-Out?",
      "headlineKo": "Intel 또는 NVIDIA: AI 구축 비용은 누가 지불합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bd3160dead8735bc6a8bebd2b1cc70d5f7f95c90cc4dd0652fc2e33e0afc43b0",
        "publishedAt": 1789406581,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel 또는 NVIDIA: AI 구축 비용은 누가 지불합니까?",
        "| Trefis Intel 또는 NVIDIA: AI 구축 비용은 누가 지불합니까?",
        "2026년 9월 14일 · Trefis Team INTC YTD +179.0% SPY YTD +12.4% QQQ YTD +16.5% INTC 분석 → Intel(INTC) 또는 NVIDIA를 소유하고 있다면 동일한 부족 현상을 겪고 있는 것입니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 179.0%, 12.4%, 16.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 179.0%, 12.4%, 16.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9ab6cfb892b90705f5cc",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
        "GOOGL"
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
      "headline": "Netflix, Amazon, YouTube form streaming lobbying coalition",
      "headlineKo": "넷플릭스·아마존·유튜브 스트리밍 로비 연합 결성",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a1fad44027e9bed7e3109b649f1a49d1509ee8c19b1673c76e52c79af90735d2",
        "publishedAt": 1789406506,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Netflix, Amazon, YouTube form streaming lobbying coalition Business News Netflix, Amazon, and YouTube are forming a Washington lobbying coalition to defend streaming The Streaming Access and Choice Alliance, led by trade group TechNet, will",
        "The group, called the Streaming Access and Choice Alliance, is organized under TechNet, a trade association for technology companies, with Netflix , Amazon , and YouTube serving as its founding corporate members.",
        "Mike Ward, TechNet's senior vice president of federal policy and government relations, will head the coalition."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1.5 billion, $2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $1.5 billion, $2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "84a1c5e58d1b3dae39af",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "MSFT",
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
      "headline": "Netflix, Amazon And YouTube Reportedly Form Coalition As Washington Scrutinizes Sports Broadcasting",
      "headlineKo": "워싱턴이 스포츠 방송을 면밀히 조사함에 따라 Netflix, Amazon 및 YouTube가 연합을 형성한 것으로 알려졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=06054e8b3b2d30574507ce066130f9ba3e47a637bd3db9b0bf8f0ecb12ae676e",
        "publishedAt": 1789405802,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Netflix, Amazon And YouTube Reportedly Form Coalition As Washington Scrutinizes Sports Broadcasting New Connect your Agent Trending News Earnings All DIA 0.22% SPY 0.27% QQQ 0.35% Trending MSFT 2.50% GOOGL 2.97% CRWD 15.28% IOVA 7.44% RUM 1",
        "Netflix, Amazon And YouTube Reportedly Form Coalition As Washington Scrutinizes Sports Broadcasting Netflix, Amazon, and YouTube have established a unified policy coalition to safeguard their growing live sports investments amid mounting fe",
        "The streaming services Netflix, Amazon Prime Video, Disney Plus, Paramount Plus, Max, and Discovery Plus app on the screen of a smartphone."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.22%, 0.27%, 0.35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.22%, 0.27%, 0.35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "92ea595b36a623f71b96",
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
      "headline": "Apple iPhone 18 Pro pre-orders point to mixed demand signals, brokers say",
      "headlineKo": "중개인은 Apple iPhone 18 Pro 사전 주문이 혼합된 수요 신호를 지적한다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e70841dd783d2063c1aab2c77bc3c2642ad7ff2cd6ba4358771fde40970226b5",
        "publishedAt": 1789405680,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: $2,000..",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple iPhone 18 Pro pre-orders point to mixed demand signals, brokers say' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "377944b515875c01b19c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
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
      "headline": "Apple's Foldable Phone Has Arrived. Here's Why I Don't Think It'll Send the Stock Soaring",
      "headlineKo": "애플의 폴더블폰이 도착했습니다. 내가 주식이 급등할 것이라고 생각하지 않는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25afb1e8b766478dcb64490995c6b4ca7cb6621c26f47714c60ba54ecd6d1371",
        "publishedAt": 1789404843,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple's Foldable Phone Has Arrived.",
        "Here's Why I Don't Think It'll Send the Stock Soaring | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Apple ( AAPL +0.48% ) recently unveiled its new iPhone Duo, a foldable phone ",
        "The phone is priced at a premium for a company already known for premium-priced products."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.48 %, $ 1.61, $ 333.88 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.48 %, $ 1.61, $ 333.88 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2d9f98d878010703650c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
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
      "headline": "Whoever Spends Smarter Wins the Microsoft-Alphabet Cloud Fight. Here Is Who Is Ahead.",
      "headlineKo": "더 현명하게 소비하는 사람이 Microsoft-Alphabet 클라우드 싸움에서 승리합니다. 여기에 누가 앞서 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=deeeed8a2af58f60c595c3d92caa55f1f020967d3872e74c40703b5fb60a3824",
        "publishedAt": 1789404331,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Whoever Spends Smarter Wins the Microsoft-Alphabet Cloud Fight.",
        "Skip to content ❚❚ At close S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.",
        "Microsoft and Alphabet both posted monster cloud quarters and both are spending at a pace that would have seemed reckless two years ago, but only one of them is funding the buildout without going to the debt markets, and that… By Alex Siroi"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $100 Billion, $90.01 billion, 17.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $100 Billion, $90.01 billion, 17.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ff90230a32e0dc20bb6a",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Stock Market Midday, Sept. 14: Tech Stocks Slide on Dire AI Warnings, Micron Drops 5%",
      "headlineKo": "9월 14일 정오 주식 시장: 심각한 AI 경고로 기술주 하락, 마이크론 5% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c3a7f6df902153201ddaa417045b4c76713a7f0f97f8a3aee05d22f18d2bf26",
        "publishedAt": 1789404299,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "14: 무서운 AI 경고로 기술주 하락, 마이크론 5% 하락 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 오전 11시 38분(ET) 현재 S&P 500( ^GSPC -0.25% )은 0.44% 하락한 7,623입니다.",
        "확장 지수 S&P 500 지수 오늘 변동률(-0.25 %) -19.16 지수 수준 7,637.82 주요 데이터 포인트 일일 범위 7,592.28 - 7,647.99 52주 범위 6,316.91 - 7,816.70 금은 1.88% 하락한 $4,325.10이며, 10년만기 국채수익률은 0.02 하락했습니다.",
        "통신주와 헬스케어 업종이 업종 상승을 주도하고 있는 반면, 기초소재와 산업재 업종은 부진한 모습을 보이고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f7aeff8831bdc3e47d06",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell Falls 7% as AI Pacing Debate Collides With Fed Week; Broadcom Drops 4%, NVIDIA Pulls Back",
      "headlineKo": "AI 속도 논쟁이 Fed Week와 충돌함에 따라 Marvell은 7% 하락했습니다. Broadcom은 4% 하락, NVIDIA는 후퇴",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51ce192cc0d5fc4b15eefddfa0f619e62d07e62550aaa14561671637ceb98230",
        "publishedAt": 1789404210,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 속도 논쟁이 Fed Week와 충돌함에 따라 Marvell은 7% 하락했습니다. Broadcom은 4% 하락하고 NVIDIA는 후퇴합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% 다우존스 52,464.40 −0.16% 나스닥 100 29,274.00 −0.33% 러셀 2000 2,901.58 −0.",
        "작성자 David Moadel 2026년 9월 14일 오후 12시 43분(ET) 게시 · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 4%, $220.04, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, 4%, $220.04, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3b99b703ef8adb532615",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "ETN",
        "GEV",
        "PWR",
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
      "headline": "GE Vernova Sinks 9% as GLJ Research Starts at Sell With $470 Target; Eaton Drops 7%, Quanta Services Falls 4%",
      "headlineKo": "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99defa2386286d4beced20f4c09c63826a28bece3edf13b6686b154c99b93843",
        "publishedAt": 1789404062,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% 다우존스 52,464.40 −0.16% 나스닥 100 29,274.00 −0.33% 러셀 2000 2,901.58 −0.",
        "작성자: David Moadel 2026년 9월 14일 오후 12:41(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 9%, $470, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 9%, $470, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0ff955d1f2f0f58903e9",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Why Marvell Stock Is Falling Today",
      "headlineKo": "오늘 Marvell 주식이 하락하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7253414ae758a3fa5559234ffe6889ee1426b681044df5ed554cda7e2020801f",
        "publishedAt": 1789403400,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 Marvell 주식이 하락하는 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 참여하세요. 반도체 회사 Marvell Technology( MRVL -7.32% )의 주가는 오늘 투자자 p로 하락했습니다.",
        "Marvell은 AI 반도체 수요 급증으로 이익을 얻었으며 AI 회사의 자체 둔화 또는 향후 정부 규제는 이론적으로 Marvell의 궤적에 타격을 줄 수 있습니다.",
        "Marvell 주식은 동부 표준시 기준 오후 12시 3분 현재 6.6% 하락했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6.6%, $1.3 trillion, 7.32 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6.6%, $1.3 trillion, 7.32 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e762b258dcb6f20a3875",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "INTC",
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
      "headline": "Microsoft AI CEO Agrees: AI Is Getting Dangerous and Needs to Be Controlled",
      "headlineKo": "Microsoft AI CEO는 AI가 위험해지고 있으며 통제가 필요하다는 점에 동의합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6eef32cd2927461cef7379644642c62134ce910dbe9ea1e46cbcb15564a237aa",
        "publishedAt": 1789402758,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft AI CEO Agrees: AI Is Getting Dangerous and Needs to Be Controlled - 24/7 Wall St.",
        "Skip to content ❚❚ At close S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.",
        "By Rich Duprey Published September 14, 2026, 12:19pm ET · 2 min read 𝕏 f ⧉ The visual depicts the convergence of artificial intelligence and robust cybersecurity, reflecting partnerships like Cloudflare's with OpenAI that aim to secure digi"
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $90.01 billion, 17.8%, $39.31 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $90.01 billion, 17.8%, $39.31 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b9f12be4a7ab711727f7",
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
      "headline": "Intel Is Stuck in Neutral. There Is Exactly One Thing That Should Change Your Mind.",
      "headlineKo": "인텔은 중립에 갇혀 있습니다. 당신의 마음을 바꿔야 할 것이 정확히 한 가지 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=920d7a5cff0b0dde513ea05a7310399d036fb450aec3f84c8a67c424410c0f3a",
        "publishedAt": 1789402338,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "당신의 마음을 바꿔야 할 것이 정확히 한 가지 있습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% 다우존스 52,464.40 −0.16% 나스닥 100 29,274.00 −0.33% 러셀 2000 2,901.58 −0.",
        "당신의 마음을 바꿔야 할 것이 정확히 한 가지 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 300%, $102.94,, 318.29% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 300%, $102.94,, 318.29% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "164d91c7f121edfdb611",
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
      "headline": "Millions of Tesla Owners Are About to Get a Software Update That Lets The Car Intervene and Steer Even If They Never Turned on Full Self-Driving.",
      "headlineKo": "수백만 명의 Tesla 소유자가 완전 자율 주행을 켜지 않은 경우에도 자동차가 개입하고 조종할 수 있는 소프트웨어 업데이트를 곧 받을 예정입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f41cbf9436621336ea23837e11678d75e95fc9f0fa6289d0bb12563a7dd8a900",
        "publishedAt": 1789402189,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Millions of Tesla Owners Are About to Get a Software Update That Lets The Car Intervene and Steer Even If They Never Turned on Full Self-Driving.",
        "Skip to content ❚❚ At close S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.",
        "Tesla's newest software update gives your car permission to grab the wheel and steer itself out of danger, even if you never once activated Full Self-Driving."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 55%, 56%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 55%, 56%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e21e1046a30cb56b979e",
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
      "headline": "Prediction: Meta Stock Has More Upside Than Its Valuation Suggests",
      "headlineKo": "예측: 메타 주식은 가치 평가에서 제안하는 것보다 더 많은 상승 여력을 가지고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d17c266c8d7dac2f0efc85badae5b051d4519375ec76457b3eb512e7d966ef6c",
        "publishedAt": 1789401611,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Prediction: Meta Stock Has More Upside Than Its Valuation Suggests - 24/7 Wall St.",
        "Skip to content ❚❚ At close S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.",
        "By Vandita Jadeja Published September 14, 2026, 12:00pm ET · 2 min read 𝕏 f ⧉ The stylized bull, overlaid with upward-trending financial charts and a cityscape, symbolizes the anticipated growth and bullish sentiment for Meta stock in the c"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $648.03,, 1.66%, 13.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $648.03,, 1.66%, 13.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d9c2dff94074c3b9b60f",
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
      "headline": "Bloom Energy Falls 8% as AI Power Bid Unwinds Days Before Bloom’s S&P 500 Add; FuelCell Energy Drops 5%, Plug Power Dips",
      "headlineKo": "AI Power Bid가 Bloom의 S&P 500 지수 며칠 전에 풀리면서 Bloom Energy는 8% 하락합니다. FuelCell 에너지 5% 하락, 플러그 전력 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=26dedfbc492f0f4c23b4f62c2f49ad47d767194a31ee68960688f22f30f2efab",
        "publishedAt": 1789401466,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 전력 입찰이 Bloom의 S&P 500 지수 며칠 전에 풀리면서 Bloom Energy는 8% 하락합니다. FuelCell 에너지 하락 5%, 플러그 전력 하락 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,606.60 −0.32% Dow Jones 52,288.20 −0.33% Nasdaq 100 29,075.20 −0.37% Russell 2000 2,886.50 −0.32% S&P 500 7,606.60 −0.32% 다우존스 52,288.20 −0.33% 나스닥 100 29,075.20 −0.37% 러셀 2000 2,886.50 −0.",
        "작성자 David Moadel 2026년 9월 14일 오전 11시 57분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, 5%, 0.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8%, 5%, 0.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b4154027aff4bc2c0ddf",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "AMAT",
        "ASML",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Chip Equipment Stocks Slide as AI Pacing Call Reaches Fab Spending: Applied Materials and Lam Research Fall 6%, ASML Sinks 5%",
      "headlineKo": "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주가 하락: Applied Materials 및 Lam Research는 6% 하락, ASML은 5% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc44bdc8f76f0c1eac85348fbfa20d94e3946efc3398fc096a2a44326f03af90",
        "publishedAt": 1789397549,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주가 하락: Applied Materials 및 Lam Research는 6% 하락, ASML은 5% 하락"
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
      "id": "d96a033ef33839959038",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "GOOGL",
        "META",
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
      "headline": "Meta, Alphabet and Microsoft Rise While Nvidia Falls After Three AI Chiefs Call For Slowing Down Frontier Models",
      "headlineKo": "Meta, Alphabet 및 Microsoft는 상승하고 Nvidia는 세 명의 AI 책임자가 프론티어 모델 속도를 늦추라고 요구한 후 하락합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1c0ebd118351da2bba43575d435d35bd0cc1786cc0d2c62feed0fc8f6877bc1d",
        "publishedAt": 1789395884,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta, Alphabet and Microsoft Rise While Nvidia Falls After Three AI Chiefs Call For Slowing Down Frontier Models - 24/7 Wall St.",
        "Skip to content ❚❚ At close S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.",
        "The rotation raises a question every investor in the sector now has to… By AJ Tiarsmith Published September 14, 2026, 10:24am ET · 3 min read 𝕏 f ⧉ The image illustrates the contrasting market fortunes of tech giants, with Meta, Google, and"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7.12%, $660.71,, 2.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7.12%, $660.71,, 2.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a8e2c7ad16db9aec7533",
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
      "headline": "ServiceNow Climbs 5% as Software Sidesteps AI Selloff; Adobe Gains 4%, Salesforce Ticks Up",
      "headlineKo": "ServiceNow는 소프트웨어가 AI 매도를 회피하면서 5% 상승했습니다. Adobe, 4% 상승, Salesforce 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af9d31b560de87d73e527f770dba00ecb6da5fd19f4748a9741564a9203f3c70",
        "publishedAt": 1789395106,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ServiceNow는 소프트웨어가 AI 매도를 회피하면서 5% 상승했습니다. Adobe, 4% 상승, Salesforce 상승"
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
      "id": "8d2ad0cdb12bb79b2755",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ServiceNow Climbs 5% as Software Sidesteps AI Selloff; Adobe Gains 4%, Salesforce Ticks Up",
      "headlineKo": "ServiceNow는 소프트웨어가 AI 매도를 회피하면서 5% 상승했습니다. Adobe, 4% 상승, Salesforce 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af9d31b560de87d73e527f770dba00ecb6da5fd19f4748a9741564a9203f3c70",
        "publishedAt": 1789395106,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ServiceNow는 소프트웨어가 AI 매도를 회피하면서 5% 상승했습니다. Adobe, 4% 상승, Salesforce 상승 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,624.60 −0.08% Dow Jones 52,420.20 −0.08% Nasdaq 100 29,157.40 −0.09% Russell 2000 2,892.95 −0.10% S&P 500 7,624.60 −0.08% 다우존스 52,420.20 −0.08% 나스닥 100 29,157.40 −0.09% 러셀 2000 2,892.95 −0.",
        "작성자 David Moadel 2026년 9월 14일 오전 10시 11분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 4%, $1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 4%, $1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0408e3e0e3144cf617a8",
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
      "headline": "AMD Is Sitting at $515. Here Is What Most U.S. Investors Should Actually Do About It.",
      "headlineKo": "AMD는 515달러에 앉아 있습니다. 대부분의 미국 투자자가 실제로 해야 할 일은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=648080a3966cb46825e3884ca18a0f32eaebe2893b5aa4aad4f0bef8c54b1c6a",
        "publishedAt": 1789394430,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "투자자들은 실제로 이에 대해 조치를 취해야 합니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,624.60 −0.08% Dow Jones 52,420.20 −0.08% Nasdaq 100 29,157.40 −0.09% Russell 2000 2,892.95 −0.10% S&P 500 7,624.60 −0.08% 다우존스 52,420.20 −0.08% 나스닥 100 29,157.40 −0.09% 러셀 2000 2,892.95 −0.",
        "투자자들은 실제로 이에 대해 조치를 취해야 합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $515., 200%, $515, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $515., 200%, $515, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e556b48194b54c231586",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
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
      "headline": "Prediction: Arm Could Be the Picks-and-Shovels Winner of the AI Boom",
      "headlineKo": "예측: Arm은 AI 붐의 승자가 될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e1eb5210a447cb19a38e970be2add0d0791738e927509aa65d3487b405e067e",
        "publishedAt": 1789394429,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: Arm은 AI 붐의 승자가 될 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,606.60 −0.32% Dow Jones 52,288.20 −0.33% Nasdaq 100 29,075.20 −0.37% Russell 2000 2,886.50 −0.32% S&P 500 7,606.60 −0.32% 다우존스 52,288.20 −0.33% 나스닥 100 29,075.20 −0.37% 러셀 2000 2,886.50 −0.",
        "Vandita Jadeja 작성 2026년 9월 14일 오전 10시(ET) 게시 · 4분 읽기 가격 목표 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $264.79., $280.16, 5.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $264.79., $280.16, 5.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0142508f12001efb6ce9",
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
      "headline": "Seagate Has Real Upside Left. That Does Not Mean It Deserves Your Money Right Now.",
      "headlineKo": "Seagate는 실질적인 상승 여력이 있습니다. 그렇다고 지금 당장 돈을 쓸 가치가 있다는 뜻은 아닙니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8e5de3319b11b28ed3d3afd1effd46206b029d12da514206d01ba7071dd1b6b4",
        "publishedAt": 1789394139,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "그렇다고 지금 당장 돈을 쓸 가치가 있다는 뜻은 아닙니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,624.60 −0.08% Dow Jones 52,420.20 −0.08% Nasdaq 100 29,157.40 −0.09% Russell 2000 2,892.95 −0.10% S&P 500 7,624.60 −0.08% 다우존스 52,420.20 −0.08% 나스닥 100 29,157.40 −0.09% 러셀 2000 2,892.95 −0.",
        "그렇다고 지금 당장 돈을 쓸 가치가 있다는 뜻은 아닙니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $830.17,, 325%, $12.195 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $830.17,, 325%, $12.195 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "646dff42494d78eefeb3",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "This Analyst Says A Full Reversion to the Mean Would Take the S&P 500 From 7,000 to 2,500",
      "headlineKo": "이 분석가는 평균으로 완전히 복귀하면 S&P 500이 7,000에서 2,500으로 떨어질 것이라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c424328372014845c185e0dfa3561cff332d7d18ec07e17688ed80119d71517d",
        "publishedAt": 1789392614,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "This Analyst Says A Full Reversion to the Mean Would Take the S&P 500 From 7,000 to 2,500 - 24/7 Wall St.",
        "Skip to content ❚❚ At close S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.",
        "By Omor Ibne Ehsan Published September 14, 2026, 9:30am ET · 4 min read 𝕏 f ⧉ An investor reacts to a significant market downturn, reflecting the concerns about the S&P 500's potential reversion to the mean as discussed in the article."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.26%, 0.16%, 0.33% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.26%, 0.16%, 0.33% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bc633867dcb5216d7af0",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AMD",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Chip Stocks Tumble as AI Pacing Call Reaches Beyond Memory: Intel Drops 7%, AMD Sinks 6%, NVIDIA Pulls Back",
      "headlineKo": "AI 페이싱 호출이 메모리를 넘어 도달함에 따라 칩 주가 폭락: Intel 하락 7%, AMD 하락 6%, NVIDIA 철수",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f9eb8768f7f3fe078bb98c9011bad4cdc405c341fa918859a8ffcf1f787766b9",
        "publishedAt": 1789392214,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 페이싱 호출이 메모리를 넘어서면서 칩 주가 폭락: Intel 하락 7%, AMD 하락 6%, NVIDIA 철수 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,637.40 −0.26% Dow Jones 52,464.40 −0.16% Nasdaq 100 29,274.00 −0.33% Russell 2000 2,901.58 −0.07% S&P 500 7,637.40 −0.26% 다우존스 52,464.40 −0.16% 나스닥 100 29,274.00 −0.33% 러셀 2000 2,901.58 −0.",
        "작성자 David Moadel 2026년 9월 14일 오전 9시 23분(ET) 게시 · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 6%, $95.96, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, 6%, $95.96, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "eb9f1b3f68baac2e55ba",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Cornelis Expands into Scale-Up Networking with Active Compute Fabric, $205M in Funding, and Qualcomm Collaboration at AI Infra Summit",
      "headlineKo": "Cornelis는 AI Infra Summit에서 Active Compute Fabric, 2억 5백만 달러의 자금 지원 및 Qualcomm 협업을 통해 확장 네트워킹으로 확장합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=996d0b562b9716f878232ec30d5eb9b97d7f9e46f7e646f481ba3205e7943b20",
        "publishedAt": 1789390800,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 QCOM의 사업과 관련된 'Cornelis Expands into Scale-Up Networking with Active Compute Fabric, $205M in Funding, and Qualcomm Collaboration at AI Infra Summit' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "eb8c38c0cf881bec1026",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "AMD",
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
      "headline": "Advanced Micro Devices vs. ASML: Which Tech Stock Is a Better Buy in 2026?",
      "headlineKo": "Advanced Micro Devices vs. ASML: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=52275edceb16f705c6d4f1eb47a54ac1ad149c00ab87514d588258c76472a95e",
        "publishedAt": 1789390201,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML: 2026년에는 어떤 기술주를 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공 지능 붐이 기술 환경을 지속적으로 재편하면서 고급 마이크로 장치(AMD -3) 중에서 선택",
        "( ASML -6.26% ) 글로벌 칩 생태계에서 각자의 고유한 역할을 이해해야 합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6.26%, 0.78%, 2.97% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ASML에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 6.26%, 0.78%, 2.97% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "e3ce6f5e0db69c3d3ba0",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Applied Materials Shares Fall 5.8% as Semiconductor Stocks Decline",
      "headlineKo": "반도체 주가 하락으로 어플라이드 머티어리얼즈 주가 5.8% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=36f018ce01cba4410c80f0f4e5464fe693f539a7c3792438bf0de916c4c7813c",
        "publishedAt": 1789387483,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "반도체 주식 하락으로 어플라이드 머티어리얼즈 주가 5.8% 하락 보드: 지수: 즐겨찾기 인기 모니터 무버 레벨 2 뉴스 메뉴 보드 주식 원자재 외환 암호화폐 라운지 고급 검색 뉴스 모든 회사 뉴스 iHub Marke",
        "이러한 움직임은 회사의 8월 회계연도 2026년 3분기 실적 보고서 이후 어플라이드 머티리얼즈 주가 하락을 확대했습니다.",
        "제공된 정보는 월요일의 시장 출시 전 하락세에 따른 Applied Materials의 새로운 회사별 발표를 식별하지 못했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $9.12 billion, 25%, $3.50, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $9.12 billion, 25%, $3.50, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c4f93411c974e69f2d4e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "VST",
      "relatedTickers": [
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
      "headline": "Vistra’s Price Has Edged Downward Throught 2026: One Analyst Says It’s Due to Double Soon.",
      "headlineKo": "Vistra의 가격은 2026년까지 하락했습니다. 한 분석가는 곧 두 배가 될 것이라고 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2c06ec2086221811ae0c8f3c1b7f109aaed6ccf9dcfd23231c0d92708e0144f",
        "publishedAt": 1789386546,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra의 가격은 2026년까지 하락했습니다. 한 분석가는 곧 두 배가 될 것이라고 말합니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,606.60 −0.32% Dow Jones 52,288.20 −0.33% Nasdaq 100 29,075.20 −0.37% Russell 2000 2,886.50 −0.32% S&P 500 7,606.60 −0.32% 다우존스 52,288.20 −0.33% 나스닥 100 29,075.20 −0.37% 러셀 2000 2,886.50 −0.",
        "Vistra는 운영 결과가 기대치를 계속 상회하는 동안 조용히 가치의 4분의 1을 잃었으며, 월스트리트의 가장 낙관적인 분석가는 단절이 2027년에 큰 일이 일어날 것이라고 생각합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $148.34, $217.42,, 47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $148.34, $217.42,, 47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dbfb6f3fc313e4615d59",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Ford Motor vs. Tesla: Which Automotive Stock Is a Better Buy in 2026?",
      "headlineKo": "포드 자동차와 테슬라 비교: 2026년에는 어떤 자동차 주식을 사는 것이 더 좋을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf982076d1fa1b9a4a1ae03eb6a25bd3a6486fa1b6a0f058aff1472f2c4668a1",
        "publishedAt": 1789382276,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "테슬라: 2026년에는 어떤 자동차 주식을 사는 것이 더 좋을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ 스톡 어드바이저 + --- % Motley Fool 투자자는 자동차 시장이 발전함에 따라 전통적인 산업 타이탄과 첨단 기술 선구자 중 하나를 선택할 수 있습니다.",
        "포드 모터 (F +0.65%) 와 테슬라 (TSLA +0.52%) 중 하나를 선택하려면 미래 혁신에 대비한 현재의 안정성을 고려해야 합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.65%, 0.52%, $ 13.97 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.65%, 0.52%, $ 13.97 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "59cf30440f10eef41784",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG"
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
      "headline": "Constellation Energy in deal to buy 609-MW Rhode Island gas plant from Shell",
      "headlineKo": "Constellation Energy는 Shell로부터 609MW 로드아일랜드 가스 플랜트 구매 계약을 체결했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73b9f68e17e42e6a48c4316c080c35dda3806d1d72446301dcc81be4b4311778",
        "publishedAt": 1789380997,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy는 Shell로부터 609MW 로드아일랜드 가스 플랜트 구매 계약을 체결했습니다."
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
      "id": "fc8ef1e8f50a8027eed9",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Prediction: The Next Nvidia-Backed Stock to Go Parabolic Could Be Hiding in Plain Sight",
      "headlineKo": "예측: 다음 엔비디아 지원 주식은 평범한 시야에 숨어있을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=483c602a287d33e3dffd4a2666c3057c7144a127ce6bfc5f8f31c331aa230e47",
        "publishedAt": 1789378200,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 다음 엔비디아 지원 주식은 평범한 시야에 숨어있을 수 있습니다 | 모틀리 바보 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ 스톡 어드바이저 + --- % 가입 모틀리 바보 엔비디아 (NVDA -0.03%) 는 인공 i를 실행합니다",
        "이 회사를 모델 교육과 같은 주요 AI 작업에 필요한 그래픽 처리 장치 (GPU) 를 만드는 AI 칩 디자이너라고 생각할 수 있습니다.",
        "그러나 엔비디아는 칩을 넘어 전체 시스템을 만들고 의료와 같은 특정 산업을 위한 플랫폼을 설계하기 위해 확장했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.15%, 0.15 %, $ 88.99 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.15%, 0.15 %, $ 88.99 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f90b64aca9eedbf5f3a2",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "AMD",
        "GOOGL",
        "MU",
        "NVDA",
        "ORCL",
        "QQQ",
        "SPY",
        "TSLA"
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
      "headline": "Why Are Nasdaq Futures Tumbling Premarket? MU, AMD, NVDA, ORCL, RUM, TSLA, SPCX Stocks In Focus",
      "headlineKo": "Nasdaq Futures가 프리마켓에서 텀블링을 하는 이유는 무엇인가요? MU, AMD, NVDA, ORCL, RUM, TSLA, SPCX Stocks In Focus",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=603bf62362314d8abc2cda4c0680ad5a49b6d7fe89058bb4377cb43c920811b9",
        "publishedAt": 1789375410,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nasdaq Futures가 프리마켓에서 텀블링을 하는 이유는 무엇인가요?",
        "MU, AMD, NVDA, ORCL, RUM, TSLA, SPCX Stocks In Focus New Connect your Agent Trending News Earnings All DIA 0.32% SPY 0.66% QQQ 1.59% Trending SLS 13.56% SOXL 16.07% RUM 11.44% ORCL 4.25% ELMT 40.83% GOOGL 1.82% DFTX 16.82% CRWV 8.90% GOOG 1",
        "MU, AMD, NVDA, ORCL, RUM, TSLA, SPCX Stocks In Focus 광고 | 광고 제거."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.32%, 0.66%, 1.59% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.32%, 0.66%, 1.59% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0e07be035dbb9373d2cb",
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
      "headline": "Prediction: Micron's Sept. 30 Earnings Will Confirm the Memory Shortage Isn't Over",
      "headlineKo": "예측: Micron의 9월 30일 수익은 메모리 부족이 아직 끝나지 않았음을 확인할 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c0e02ae1a8e5f35bfaea82a89343eb164b1c53af6da8279776fabe670b275df2",
        "publishedAt": 1789374900,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "30 Earnings Will Confirm the Memory Shortage Isn't Over | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron Technology ( MU -0.22% ) is set to report earnings at the end of the",
        "With demand surging and supply constrained, the memory market has been booming, with companies in the industry seeing revenues and gross margins expand.",
        "The memory market is broken down into two types: DRAM and NAND (flash)."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 76%, $7.1 billion, $18.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 76%, $7.1 billion, $18.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "634206b4f6769b0a7deb",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM",
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
      "headline": "Stocktwits Tech Watch: Anthropic's AI Slowdown Row, Salesforce And Snap Events, And A Central Bank Rate Call In Focus This Week",
      "headlineKo": "Stocktwits Tech Watch: Anthropic의 AI 둔화 행, Salesforce 및 Snap 이벤트 및 이번 주 집중되는 중앙 은행 금리 통화",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b4434f2bfaa3b5f152477d06c8a8720696f726892831876c06ac6f032f22acb",
        "publishedAt": 1789374333,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits Tech Watch: Anthropic의 AI 감속 행, Salesforce 및 Snap 이벤트 및 중앙 은행 금리 통화 집중 이번 주 새로운 연결 에이전트 동향 뉴스 수입 모든 DIA 0.32% 스파이 0.66% QQQ 1.59% 동향 SLS 13.73% RUM 11.44% S",
        "Stocktwits Tech Watch: Anthropic의 AI 둔화 행, Salesforce 및 Snap 이벤트 및 중앙 은행 금리 콜 인 포커스 이번 주 시장은 AI, 기술 및 매크로 촉매제로 가득 찬 주간을 준비합니다.",
        "다채로운 재무 차트 앞에 눈에 띄게 떠다니는 빛나는 AI 기호를 보여주는 개념적 이미지입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.32%, 0.66%, 1.59% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.32%, 0.66%, 1.59% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b80b0b762eddbe1c1d93",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "GOOGL",
        "NVDA",
        "ORCL",
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
      "headline": "SPCX Stock Set For Index Boost? Elon Musk ‘Highly Confident’ Nvidia AI Computers Will Launch Into Space Next Year",
      "headlineKo": "지수 부스트를 위한 SPCX 주식 세트? Elon Musk ‘매우 자신있는’ Nvidia AI 컴퓨터가 내년 우주로 출시됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d131df8ae888b4ebd3bb1e8a7a42f2c39947acbf2730ffba2260e9a55e7966fa",
        "publishedAt": 1789368674,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk ‘매우 자신감 있는’ 엔비디아 AI 컴퓨터가 내년 우주로 출시됩니다. 새로운 에이전트 연결 트렌드 뉴스 수입 모든 DIA 0.37% 스파이 0.67% QQQ 1.64% 트렌드 SLS 13.56% SOXL 16.30% 럼 11.44% ORCL 4.52% ELMT 41.32% GOOGL 1.76%",
        "일론 머스크 ‘매우 자신 있는’ 엔비디아 AI 컴퓨터, 내년 광고 출시 예정 | 광고 제거.",
        "Elon Musk ‘매우 자신있는’ 엔비디아 AI 컴퓨터가 내년 SpaceX의 Nasdaq 100 가중치를 2.82% 로 두 배 이상 증가시켜 패시브 펀드 구매로 수십억 달러를 유발할 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.37%, 0.67%, 1.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.37%, 0.67%, 1.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a1826d04bd028c6cf9d8",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "GOOGL",
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
      "headline": "Slow Down AI? Microsoft CEO, President Trump Line Up Against Anthropic's Call — Big Tech's Divide Is Now Out In The Open",
      "headlineKo": "AI 속도 저하? Microsoft CEO, Anthropic의 요구에 맞서 트럼프 대통령 라인업 — 빅 테크의 분열이 이제 열려 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6de8506a41786510ea6f82656f3b8d28c8d76ebc6ed509033ca6596270fe1884",
        "publishedAt": 1789363706,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft CEO, Anthropic의 부름에 맞서 트럼프 대통령 라인업 — 빅 테크의 분열이 이제 열려 있습니다 새로운 에이전트 연결 최신 뉴스 수입 모든 DIA 0.32% 스파이 0.66% QQQ 1.59% 동향 SLS 13.73% RUM 11.44% SOXL 16.16% GOOGL 1.81",
        "마이크로소프트 CEO, 트럼프 대통령, 인류애의 부름에 맞서다 — 빅 테크의 분열이 이제 공개 광고에 드러났다 | 광고 제거.",
        "마이크로소프트 CEO, 트럼프 대통령, 인류애의 부름에 맞서 — 빅 테크의 분열은 이제 공개 AI 리더들은 미 · 중 경쟁이 업계의 빠른 움직임에 대한 압력을 유지함에 따라 안전, 규제 및 경쟁에 대해 분열하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.32%, 0.66%, 1.59% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.32%, 0.66%, 1.59% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7efd683b9ebb6ccef810",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMD",
        "GOOGL",
        "INTC",
        "MU",
        "ORCL",
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
      "headline": "MU, SNDK, INTC, AMD: Chip Stocks Slide After Anthropic Calls For AI Industry Slowdown",
      "headlineKo": "MU, SNDK, INTC, AMD: 인류가 AI 산업 침체를 요구한 후 칩 주식 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d610f6ef7b0b38f225d3912367f42af0b6e869261694dcb6006a8e6d1b802d95",
        "publishedAt": 1789352418,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MU, SNDK, INTC, AMD: Chip Stocks Slide After Anthropic Calls For AI Industry Slowdown New Connect your Agent Trending News Earnings All DIA 0.37% SPY 0.68% QQQ 1.66% Trending SLS 13.56% SOXL 16.54% RUM 11.44% ORCL 4.68% ELMT 40.89% GOOGL 1.",
        "MU, SNDK, INTC, AMD: Chip Stocks Slide After Anthropic Calls For AI Industry 둔화 AI 안전 추진은 투자자들이 대규모 인프라 지출 주기에 대한 잠재적 영향에 무게를 두는 동안에도 신선한 논쟁을 불러일으킨다.",
        "미래형 반도체를 들고 있는 로봇 팔의 대표적 이미지."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.37%, 0.68%, 1.66% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.37%, 0.68%, 1.66% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "de8eeada2d64ad7968a4",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Vertiv Sees Data Center Demand Strengthen as AI Infrastructure Pipeline Expands",
      "headlineKo": "Vertiv는 AI 인프라 파이프라인이 확장됨에 따라 데이터 센터 수요가 강화될 것으로 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f6d75be1524d8a0425d1a4662a6bf046eb545a55ec4a478974f812c091fb93ae",
        "publishedAt": 1789351320,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv Sees Data Center Demand Strengthen as AI Infrastructure Pipeline Expands Skip to main content → How options let you do more with less capital (From Base Camp Trading) (Ad) Vertiv Sees Data Center Demand Strengthen as AI Infrastructur",
        "Close Image from MarketBeat Media, LLC.",
        "Key Points Demand for data center infrastructure is strengthening , driven by expanding AI-computing needs, hyperscaler investment and broader global activity."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 22%, 27% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VRT에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 20%, 22%, 27% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "b3d2ccb2cbc68911f6f6",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "MU",
        "NVDA",
        "ORCL",
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
      "headline": "Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week: AAPL, NVDA, ORCL, NOK, SPCX",
      "headlineKo": "지난주 소매업자들이 이러한 주식에서 눈을 뗄 수 없었던 이유: AAPL, NVDA, ORCL, NOK, SPCX",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b9ed8531c128af820c6b6c73a4be8375c6074899daa4d361d670dbca7f87ab3",
        "publishedAt": 1789350287,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 0.32%, 0.66%, 1.59%, 13.56%, 16.10%, 11.30%, 4.24%, 40.58%.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week: AAPL, NVDA, ORCL, NOK, SPCX' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "4b7f35b27e78d4006653",
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
      "headline": "Amazon and 2 Other AI Stocks to Buy With $5,000",
      "headlineKo": "아마존 및 기타 AI 주식 2종 구매 시 $ 5,000",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e847eacb7767c1f8b61116e237bb15488e2418bf0638be3345bc59f1cad05bd",
        "publishedAt": 1789346761,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존 및 기타 AI 주식 2개 구매 시 $ 5,000 | The Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % 가입 The Motley Fool 인공지능 (AI) 빌드아웃은 단일 거래가 아닙니다.",
        "돈은 계층을 통해 흐릅니다. 클라우드 플랫폼은 컴퓨팅 용량을 임대하고, 파운드리에서 그 아래에 칩을 제조하며, 데이터 센터 빌더는 그 모든 것을 수용하는 건물을 내놓습니다.",
        "즉, $ 5,000의 투자자가 한 레이어에 베팅할 필요가 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $5,000, 1.94%, 1.22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $5,000, 1.94%, 1.22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "695220866de5a10362a6",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
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
      "headline": "SpaceX vs. Apple: Wall Street Sees Strong Upside for One of These Stocks and Remains Neutral On the Other",
      "headlineKo": "SpaceX 대 Apple: 월스트리트는 이들 주식 중 하나에 대해 강한 상승세를 보이고 다른 주식에 대해서는 중립을 유지합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4a3b36c1fc4bc4468f7de2ba7b458e3612ff0edf69a2826ab0f23a3719c0ec9",
        "publishedAt": 1789339800,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple: 월스트리트는 이들 주식 중 하나에 대해 강한 상승세를 보이고 다른 주식에 대해서는 중립을 유지합니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool Space Exploration Technologies Corp에 합류",
        "그러나 그들은 현저하게 다릅니다.",
        "소비자 기술 하드웨어에 초점을 맞춘 Apple은 1980년에 상장되었으며 현재 시가총액은 거의 4조 7천억 달러에 달합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $4.7 trillion, $2 trillion, $1,999. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4.7 trillion, $2 trillion, $1,999. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9166bfa1ce438cd04642",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Down 50% Over the Past Year, Is It Time to Back Up the Truck and Buy Oracle Stock as Revenue Surges?",
      "headlineKo": "지난 1년 동안 50% 하락, 수익 급증에 따라 트럭을 백업하고 Oracle 주식을 매입해야 할 때입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b3a93c790259c75263ce5246b206c689d9f4ab7c6e7771beb1e7d3946a603af2",
        "publishedAt": 1789338000,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지난 1년 동안 50% 하락, 수익 급증에 따라 트럭을 백업하고 Oracle 주식을 매입해야 할 때입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Oracle ( ORCL -1.74% ) 주가는 급증하는 매출과 탄탄한 수주 잔고에도 불구하고 아무런 추진력을 얻지 못했습니다.",
        "투자자들이 회사의 성장보다 자본 지출에 대해 더 걱정하면서 주가는 지난 1년 동안 약 50% 하락했습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, 1.74 %, $ 150.28 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 경쟁사 수주 · 고객 점유 변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 50%, 1.74 %, $ 150.28 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 공급사의 실제 물량",
        "기존 공급사 매출 비중",
        "고객의 이중 공급 전략"
      ]
    },
    {
      "id": "8aa0ccfcbe1a7761d0d9",
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
      "headline": "Nvidia Gets the AI Hype. Dell Gets the Billionaire Fortune",
      "headlineKo": "Nvidia는 AI의 과대광고를 얻습니다. Dell, 억만장자 재산 획득",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9edb401d7c8d79849e871d46a723f1df046c8a6b3094f40b02076df507933ec6",
        "publishedAt": 1789333200,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $276.5 billion, $87 billion, 40%, 3%, 350%, $96.2 billion, $47 billion, $189.1 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'Nvidia Gets the AI Hype. Dell Gets the Billionaire Fortune' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b1e8dfaae7bbd7205162",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "QQQ"
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
      "headline": "Apple: Duo Won't Move The Needle",
      "headlineKo": "애플: 듀오가 바늘을 움직이지 않을 것이다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d1e1133a739d53bfb86e7a16c3d7f3798e28e0b487ce7dc0610584a9b5bc94d8",
        "publishedAt": 1789329600,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "애플: 듀오가 바늘을 움직이지 않을 것이다(NASDAQ:AAPL) | Alpha Stone Fox Capital 투자 그룹 리더를 찾고 있습니다. 요약을 따르십시오. Apple Inc.",
        "혁신적인 AI나 하드웨어 촉매제가 없음에도 불구하고 사상 최고치로 거래되고 있습니다.",
        "새로운 1,999달러 폴더블 iPhone Duo는 업그레이드 주기를 실질적으로 가속화하거나 의미 있는 수익 증대를 가져올 가능성이 낮습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,999, 10%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,999, 10%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2451d7707282d134a341",
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
      "headline": "Nvidia (NVDA) Looks Cheap on Piper’s Forecasts, but the Earnings Assumptions Are the Real Test",
      "headlineKo": "Nvidia(NVDA)는 Piper의 예측에 비해 저렴해 보이지만 수익 가정은 실제 테스트입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f0cade2e200de978df73b13ef3db3945a78d9a37a8631f101ce0ccba1715ee5",
        "publishedAt": 1789326808,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia (NVDA) Looks Cheap on Piper’s Forecasts, but the Earnings Assumptions Are the Real Test",
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
      "id": "e6ae3663ddcf0b10eb01",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Intel (INTC) Is Winning From the CPU Shortage, but Its Foundry Valuation Needs More Proof",
      "headlineKo": "Intel(INTC)은 CPU 부족으로 승리하고 있지만 파운드리 가치 평가에는 더 많은 증거가 필요합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=958a691c65294af0436ba0a4f03da20b8a7bae7677a8ea9914091a4689266779",
        "publishedAt": 1789326652,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel (INTC) Is Winning From the CPU Shortage, but Its Foundry Valuation Needs More Proof",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "3775aced1e16a5f2540d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Prediction: Applied Materials Books Its First $10 Billion Quarter This Fall",
      "headlineKo": "예측: Applied Materials는 올 가을 첫 분기 100억 달러를 기록합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9335123c80de32dc3884c636fb8e1fb33d685289fc2db3577f347eea4079b75f",
        "publishedAt": 1789325881,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: Applied Materials, 올 가을 첫 분기 100억 달러 기록 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Applied Materials에 가입하세요( AMAT -7.07% )는 $를 창출한 적이 없습니다.",
        "경영진은 이번 분기(칩 장비 제조사의 2026년 회계연도 4분기, 10월 말까지)가 첫 번째가 될 것으로 예상하고 있다.",
        "지난달 회계연도 3분기 보고서와 함께 회사는 4분기 매출의 중간값을 102억 5천만 달러로 보고 플러스 마이너스 5억 달러로 전년 대비 약 51% 높은 수치를 기록했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10.25 billion, $500 million, 51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10.25 billion, $500 million, 51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d5e1789d5f735aae4604",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Barclays resets Oracle stock price target",
      "headlineKo": "Barclays, 오라클 주가 목표 재설정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=54f37095a2292933b1f2c5b284e484d8bc195559e9193afc4dc0d58cde5c7a25",
        "publishedAt": 1789322580,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Barclays resets Oracle stock price target",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "344bd3ff6717008ac893",
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
      "headline": "Goldman Sachs Says AI Is Driving Half of S&P 500 Earnings Growth. That Number Cuts Both Ways.",
      "headlineKo": "Goldman Sachs는 AI가 S&P 500 수익 성장의 절반을 주도하고 있다고 말합니다. 그 숫자는 양방향을 모두 줄여줍니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af678d9eee32dcdeb85c86c3dae9cc235cfa295730d0d1cc1612180b9a5a41db",
        "publishedAt": 1789322424,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "골드만 삭스는 인공지능이 S&P 500 수익 성장의 절반을 이끌고 있다고 말합니다.",
        "콘텐츠로 건너뛰기 닫기 ❚❚ S&P 500 7,610.40 − 0.61% 다우존스 52,368.60 − 0.34% 나스닥 100 28,913.20 − 1.56% 러셀 2000 2,890.90 − 0.44% S&P 500 7,610.40 − 0.61% 다우존스 52,368.60 − 0.34% 나스닥 100 28,913.20 − 1.56% 러셀 2000 2,890.90 − 0.",
        "골드만 삭스 (Goldman Sachs) 는 인공지능 지출이 S&P 500 수익 성장을 촉진하고 있다고 말하지만, 동일한 통계는 분기마다 예산이 바뀔 수 있는 소수의 구매자에 대한 취약한 의존성을 보여줍니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.61%, 0.34%, 1.56% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.61%, 0.34%, 1.56% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f935a204986b3ca53e1a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "INTC",
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
      "headline": "Here Are the Companies in Nvidia's $99 Billion Artificial Intelligence (AI) Portfolio. These 3 Are the Best of the Bunch",
      "headlineKo": "Nvidia의 990억 달러 규모 인공 지능(AI) 포트폴리오에 포함된 회사는 다음과 같습니다. 이 3가지가 이 그룹 중 최고입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df63c0bccb7dbb77885ad5efc3a1f0a7de24886a8773628a4272e12b7f98db41",
        "publishedAt": 1789321380,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $99 Billion, 0.03%, $99 billion, $47.7 billion, $47.9 billion, $3.3 billion, 0.15%, $5 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'Here Are the Companies in Nvidia's $99 Billion Artificial Intelligence (AI) Portfolio. These 3 Are the Best of the Bunch' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "90c378c47e7e367e8f34",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
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
      "headline": "Warren Buffett Made Apple Berkshire Hathaway's Single Largest Stock Position: $10,000 Invested 10 Years Ago Would Be Worth Roughly $122,400 Today",
      "headlineKo": "Warren Buffett은 Apple Berkshire Hathaway의 단일 최대 주식 포지션을 만들었습니다: 10년 전에 투자한 10,000달러는 오늘날 약 122,400달러의 가치가 될 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6a5ab561ad0b9d0a5abb1cf84ae8d57802b67d6ea4fa8bf6e6b5ffc82998bc7e",
        "publishedAt": 1789320960,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Warren Buffett은 Apple Berkshire Hathaway의 단일 최대 주식 위치를 결정했습니다. 10년 전에 투자한 10,000달러는 오늘날 약 122,400달러의 가치가 될 것입니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Join T",
        "향후 몇 년 동안 Buffett은 Apple에 올인하여 Berkshire Hathaway의 ( BRKA +0.63% ) ( BRKB +0.67% ) 1위가 되었습니다.",
        "한때 주식의 눈부신 성장으로 인해 대기업의 지분이 주식 포트폴리오 가치의 40%를 차지할 정도로 높아졌습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.63%, 0.67%, 40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.63%, 0.67%, 40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b71ac945fa7dd0c4a76b",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Nvidia vs. Broadcom: Which Trillion-Dollar AI Chip Stock Has More Upside After Their Latest Earnings?",
      "headlineKo": "Nvidia 대 Broadcom: 최근 수익 이후 어느 조 달러 규모의 AI 칩 주식이 더 많은 상승 여력을 가지고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99a0a7d560641299354330c6b8697f0729b8a0eb4fbdd064f27eeff597908e7c",
        "publishedAt": 1789320420,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom: 최근 수익 이후 상승 여력이 더 큰 수조 달러 규모의 AI 칩 주식은 무엇입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능(AI) 하드웨어 경쟁은 2차선 고속도로 같았습니다: 엔비디아(NVDA -0.03%) 범용 gr 판매",
        "Nvidia와 Broadcom이 각각 수익을 보고한 후 두 회사 모두 칩 전문가라기보다는 전체 데이터 센터에 대한 경쟁 설계자처럼 보인다는 것이 점점 더 분명해지고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $89 billion, 117%, $5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $89 billion, 117%, $5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5cd843f30876c0fa139d",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "GOOGL",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Google",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "New Tesla Roadster Uses SpaceX Tech. Will It Impact the Stock Price?",
      "headlineKo": "새로운 Tesla Roadster는 SpaceX 기술을 사용합니다. 주가에 영향을 미칠까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6a3c08cc622bc9d316a0fa72ddb0dc025a2f99d14b9420d8101dc12d97183f63",
        "publishedAt": 1789319800,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "새로운 Tesla Roadster는 SpaceX 기술을 사용합니다.",
        "구독하기 한국어 속보 뉴스 최신 뉴스 TradFi Bitcoin Ripple Ethereum Altcoins Solana Memecoins ETF US Crypto News 시장 데이터 가격 거래소 변환 관심 목록 암호화폐 보상 발견 제품 리뷰 뉴스레터 통찰력 의견",
        "Google에서 우리를 선호하세요 작성: Lockridge Okoth 편집: Mohammad Shahid 2026년 9월 13일, 17:16 UTC • 업데이트: 2026년 9월 13일, 17:16 UTC Tesla는 수년간의 생산 지연 끝에 10월 1일 로드스터 공개를 예고합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5.92%, $354.08, $365.44 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.92%, $354.08, $365.44 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9b18e01d208eb0a50d98",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMD",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD and Intel’s Shared AI Instructions Reach GCC. Can Software Cooperation Strengthen Both Stocks?",
      "headlineKo": "AMD와 Intel의 공유 AI 지침이 GCC에 도달했습니다. 소프트웨어 협력이 두 주식을 모두 강화할 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f6737783dfdd1322ee1c99e8df4498131a67bb92ccc41e0130c7122f826eb571",
        "publishedAt": 1789318757,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD and Intel’s Shared AI Instructions Reach GCC. Can Software Cooperation Strengthen Both Stocks?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AMD의 사업과 관련된 'AMD and Intel’s Shared AI Instructions Reach GCC. Can Software Cooperation Strengthen Both Stocks?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "AMD",
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
      "id": "41c89ead85a561c711d3",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Will Micron Technology Stock Soar to $1,500 After Sept. 30?",
      "headlineKo": "마이크론 테크놀로지 주식은 9월 30일 이후 1,500달러까지 급등할 것인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6554577461ebbe83fac99d6c3156ddfb8c87e83b2f8b4e53f3ab6e3ea19418f8",
        "publishedAt": 1789317300,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 테크놀로지 주식은 9월 이후 1,500달러까지 급등할 것인가?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron Technology( MU -0.22% )는 데이터 센터용 고대역폭 메모리(HBM)를 공급하는 세계 최고의 공급업체 중 하나입니다.",
        "현재 전 세계적으로 메모리가 부족하기 때문에 회사가 가격을 결정할 수 있으며 이는 재무 결과에 있어서 환상적이었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,500, $977.41, 19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,500, $977.41, 19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b9cf2f9ec1dfd4d56f67",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MU",
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
      "headline": "Prediction: This Memory Stock Could Surge 233% Over the Next 3 Years (Hint: It's not Micron or Sandisk)",
      "headlineKo": "예측: 이 메모리 재고는 향후 3년 동안 233% 급등할 수 있습니다(힌트: Micron이나 Sandisk가 아닙니다).",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=931cd51bccc9fb009e23939eec1f809a190fbed2a77781028f98e2675b0717fa",
        "publishedAt": 1789317060,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 이 메모리 재고는 향후 3년 동안 233% 급등할 수 있습니다(힌트: Micron이나 Sandisk가 아닙니다) | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool Micron Technology 및 Sandi에 합류",
        "시장은 그들의 엄청난 성장에 대해 그들의 주식에 정당한 보상을 해왔습니다.",
        "Micron 주식은 2026년에 242% 급등했지만, 이 글을 쓰는 시점에서 Sandisk는 588%라는 훨씬 더 큰 이익을 기록했습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 242%, 588%, 0.94% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 242%, 588%, 0.94% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4ca22e99f89b1c0dc509",
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
      "headline": "The Tesla Network Is Dead: JPMorgan’s Bombshell Note Reveals Nearly All Robotaxi Billions Flow to TSLA, Not You",
      "headlineKo": "Tesla 네트워크는 죽었습니다: JPMorgan의 폭탄 메모는 거의 모든 Robotaxi 수십억 달러가 TSLA로 흘러가는 것을 보여줍니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fea943af624d97a648f988107802bf2a3077832175fce3409300a938c059a946",
        "publishedAt": 1789314093,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla 네트워크는 죽었습니다: JPMorgan의 폭탄 노트는 거의 모든 Robotaxi 수십억 달러가 귀하가 아닌 TSLA로 흘러간다는 사실을 공개합니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,619.40 −0.49% Dow Jones 52,481.60 −0.13% Nasdaq 100 29,007.60 −1.24% Russell 2000 2,898.45 −0.18% S&P 500 7,619.40 −0.49% 다우존스 52,481.60 −0.13% 나스닥 100 29,007.60 −1.24% 러셀 2000 2,898.45 −0.",
        "작성자: Rich Duprey 2026년 9월 13일 오전 11시 41분(동부 표준시) 게시 · 2분 읽기 𝕏 f ⧉ © Wikipedia JPMorgan 분석가 Rajat Gupta는 지난주 Tesla 로보택시 수익이 2035년까지 약 3,200억 달러에 이를 것으로 예상하는 메모를 회람했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $320 billion, $314 billion, $5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $320 billion, $314 billion, $5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a84f6dfbe4b3f1aa3d54",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN"
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
      "headline": "AMZN SEC Form 8-K filed",
      "headlineKo": "AMZN SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926107526/tm2624614d5_8k.htm",
        "publishedAt": 1789311600.0,
        "collectedAt": 1789456060.1366527
      },
      "confirmedFacts": [
        "AMZN가 2026-09-14에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 기타 중요 사건 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 자금조달·증권발행"
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
          "ticker": "AMZN",
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
      "id": "75a90f1f3dd72953e4d1",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL"
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
      "headline": "ORCL SEC Form 8-K filed",
      "headlineKo": "ORCL SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526389753/d20034d8k.htm",
        "publishedAt": 1789311600.0,
        "collectedAt": 1789456060.1366527
      },
      "confirmedFacts": [
        "ORCL가 2026-09-14에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 기타 중요 사건 · 재무제표·첨부자료"
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
          "ticker": "ORCL",
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
      "id": "3051ab30aff887d7694e",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "WDC"
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
      "headline": "WDC SEC Form 8-K filed",
      "headlineKo": "WDC SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/106040/000119312526389859/d23939d8k.htm",
        "publishedAt": 1789311600.0,
        "collectedAt": 1789456060.1366527
      },
      "confirmedFacts": [
        "WDC가 2026-09-14에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 규정 FD 공개 · 기타 중요 사건 · 재무제표·첨부자료"
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
          "ticker": "WDC",
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
      "id": "9dbfa76003414eefe7b9",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
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
      "headline": "VST SEC Form 424B2 filed",
      "headlineKo": "VST SEC Form 424B2 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126036415/ny20081693x3_424b2.htm",
        "publishedAt": 1789311600.0,
        "collectedAt": 1789456060.1366527
      },
      "confirmedFacts": [
        "VST가 2026-09-14에 SEC Form 424B2을 제출했습니다.",
        "원문에서 관련 표현이 확인된 주제: 자금조달·증권발행"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "향후 자금조달 또는 증권 발행의 법적 기반이 될 수 있어 잠재 희석 규모와 자금 사용처를 확인해야 합니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다."
      ],
      "unverified": [
        "공시의 세부 금액·조건·사업 영향은 원문 항목과 첨부자료를 추가 검증해야 합니다."
      ],
      "beginnerExplanation": [
        "증권등록이나 투자설명서를 제출했다는 사실은 확인됐지만, 실제 신주 발행·희석이 확정됐다는 뜻은 아닙니다. 원문의 발행 조건과 실제 실행 여부를 확인해야 합니다."
      ],
      "whyItMatters": [
        "향후 자금조달 또는 증권 발행의 법적 기반이 될 수 있어 잠재 희석 규모와 자금 사용처를 확인해야 합니다."
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
        "실제 발행 여부와 주식 수",
        "발행가격·워런트·전환 조건",
        "조달 자금 사용처와 완전희석 EPS"
      ],
      "earningsEvidence": null
    },
    {
      "id": "135079d43838e4ed176c",
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
      "headline": "Predicting Intel's Value by 2030 Could Make It Worth a Look Right Now",
      "headlineKo": "2030년까지 인텔의 가치를 예측하면 지금 당장 살펴볼 가치가 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91d3a8b96a4453955d7d74c6e84f254c130715f81ad6bb8a4f4bb2b34548bd20",
        "publishedAt": 1789310580,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2030년까지 인텔의 가치를 예측하면 지금 당장 살펴볼 가치가 있습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Intel( INTC +2.61% )은 최근 악천후를 겪었습니다.",
        "최근 투자 은행 파이퍼 샌들러(Piper Sandler)가 주식을 \"중립\"으로 평가한 후 주식은 또 다른 타격을 입었습니다. 애널리스트 데이비드 오코너(David O'Connor)는 지난 1년간 인텔 주식의 엄청난 상승이 더 많은 상승 여력을 제한할 수 있다고 믿으며, 이는 110달러 가격을 설명합니다.",
        "이는 현재 수준보다 단지 7%만 증가한다는 것을 의미합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $110, 7%, $52.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $110, 7%, $52.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bddabd3f3fc189c91a00",
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
      "headline": "Alibaba and Amazon Face the Same AI Spending Question: How Quickly Does Capacity Become Cash?",
      "headlineKo": "Alibaba와 Amazon은 동일한 AI 지출 문제에 직면해 있습니다. 용량은 얼마나 빨리 현금이 되나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18010fa5cfb92e6becb7850d0c0bb16f9ee968553c2d14d527f68c03e11af9e2",
        "publishedAt": 1789308517,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alibaba and Amazon Face the Same AI Spending Question: How Quickly Does Capacity Become Cash?",
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
      "id": "c6223010b9ed1fd7c705",
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
      "headline": "Google Bought YouTube for $1.65 Billion in 2006. The Streaming Platform Is Now the Main Driver of a Roughly $93 Billion Business at Alphabet.",
      "headlineKo": "Google은 2006년에 YouTube를 16억 5천만 달러에 인수했습니다. 스트리밍 플랫폼은 이제 Alphabet에서 약 930억 달러 규모의 비즈니스를 이끄는 주요 동인입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6496489e08510f4066ed1b0011c27210180b5c022d6dbc65dbb2f27f48f1968",
        "publishedAt": 1789306800,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $1.65 Billion, $93 Billion, $1.65 billion, $130 billion, $93 billion, 1.77%, 13.8%, 7.9%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Google Bought YouTube for $1.65 Billion in 2006. The Streaming Platform Is Now the Main Driver of a Roughly $93 Billion Business at Alphabet.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "7b3d9e95845a7a72de77",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom CEO Hock Tan Says Demand Already Exceeds Broadcom's $115 Billion AI Forecast. Here's What That Means for the Stock.",
      "headlineKo": "Broadcom CEO Hock Tan은 수요가 이미 Broadcom의 1,150억 달러 AI 예측을 초과했다고 말했습니다. 이것이 주식에 의미하는 바는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=98bded0276935d6299d45aae01bdae07abd3804685232179ef62991f93ac6ff7",
        "publishedAt": 1789305600,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $115 Billion, $115 billion, 86%, $29.6 billion, 96%, $3.32., $230 billion, 0.32 %.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AVGO의 사업과 관련된 'Broadcom CEO Hock Tan Says Demand Already Exceeds Broadcom's $115 Billion AI Forecast. Here's What That Means for the Stock.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d4cf73958b6685bea54c",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Seagate Sees Storage Demand Outpacing Supply as AI and Cloud Drive HDD Growth",
      "headlineKo": "Seagate는 AI와 클라우드가 HDD 성장을 주도하면서 스토리지 수요가 공급을 앞지르는 것으로 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7cb6bba65d027a64490f03bb679e0ad86dcf7f4b95b82e2feaf03ed72887891b",
        "publishedAt": 1789304519,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate Sees Storage Demand Outpacing Supply as AI and Cloud Drive HDD Growth Skip to main content → This little-known gold fund distributes cash every Friday (From Investors Alley) (Ad) Seagate Sees Storage Demand Outpacing Supply as AI an",
        "Close Image from MarketBeat Media, LLC.",
        "Key Points Demand is outpacing supply: Seagate expects the HDD upcycle to continue through fiscal 2027, driven by public-cloud spending, enterprise data centers and AI-related applications."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 25%, 4%, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 25%, 4%, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "b19d20d5c9da85f5bd56",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "AMAT",
        "ASML",
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
      "headline": "Applied Materials vs. ASML: Which Tech Stock Is a Better Buy in 2026?",
      "headlineKo": "어플라이드 머티어리얼즈 vs. ASML: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f55ede1a59d67b89304725096b5809cb70dc7f00a4502825e1e617846e8aeaac",
        "publishedAt": 1789303801,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML: Which Tech Stock Is a Better Buy in 2026?",
        "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool The surge in artificial intelligence has forced investors to decide between two infrastructure titans, Applied Materials ( AMAT +0.",
        "But which of these giants is the better buy today?"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.64%, 19%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ASML에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.64%, 19%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "fc35169ae2ded9fa8edc",
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
      "headline": "Sundar Pichai Says Alphabet's Cloud Backlog Hit $514 Billion After 82% Revenue Growth Last Quarter. Is Google Cloud Becoming a Bigger Growth Driver Than Search?",
      "headlineKo": "Sundar Pichai는 Alphabet의 클라우드 백로그가 지난 분기에 82%의 수익 성장을 달성한 후 5,140억 달러를 기록했다고 밝혔습니다. Google Cloud가 검색보다 더 큰 성장 동력이 되고 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dede3f6ed5e4e8effe4ec2312fea9adbc1def21971d4ea75457dd2f1714ba69c",
        "publishedAt": 1789302180,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $514 Billion, 82%, $446 billion, 55%, 17%, 12%, $243 billion, 35%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Sundar Pichai Says Alphabet's Cloud Backlog Hit $514 Billion After 82% Revenue Growth Last Quarter. Is Google Cloud Becoming a Bigger Growth Driver Than Search?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0f3aecac0a3bd0883448",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Microsoft Stock: Is Now the Right Time to Buy or Should You Hold Off?",
      "headlineKo": "Microsoft Stock: 지금이 매수 적기인가, 아니면 보류해야 하는가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=965d66cfdb98daac9e470ce3989486cb2d09f2419f96faab3765894fb6c5b64b",
        "publishedAt": 1789300260,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Stock: 지금이 매수 적기인가, 아니면 보류해야 하는가?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 불과 몇 달 전만 해도 Microsoft(MSFT +0.65%) 주가는 연초 대비 25% 이상 하락했지만 이후 설득력 있게 반등했습니다.",
        "거대 기술 기업의 2026 회계연도 4분기 보고서에는 좋은 소식이 많이 있었지만 최근 랠리 이후 일부 투자자들은 매수 기회를 놓쳤다고 느낄 수도 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 27%, 18%, 0.65 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 27%, 18%, 0.65 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e712eea25aec24891cab",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Got $1,000? Here's What an Intel Investment Made the Day the U.S. Government Took Its Stake Would Be Worth Today.",
      "headlineKo": "1,000달러 있어요? 미국 정부가 지분을 인수한 날 인텔의 투자가 오늘의 가치를 만들어낸 결과는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d3a969621a60797edc07403b54df60a9f8dde4c2e71d9eefd085862f9272144",
        "publishedAt": 1789297800,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔 투자가 미국을 이끈 날은 다음과 같습니다.",
        "정부가 지분을 인수한 것은 오늘날 가치가 있을 것입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 도널드 트럼프 대통령 2기의 대표적인 정책 중 하나는 공기업에 직접 지분 투자를 하는 것입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, 2.61%, $5.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,000, 2.61%, $5.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ac54bc527575ee616525",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Seagate Technology Sees AI Storage Demand Fueling HAMR Growth and Margin Gains",
      "headlineKo": "Seagate Technology는 AI 스토리지 수요가 HAMR 성장과 마진 증대를 촉진한다고 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2b15c6ba31bd42b1d656637da2cd0b740d627769711edec0e769fddc50c286f4",
        "publishedAt": 1789297317,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate Technology Sees AI Storage Demand Fueling HAMR Growth and Margin Gains Skip to main content → Washington Is Broke—Could YOUR Savings Be Next?",
        "(From Priority Gold) (Ad) Seagate Technology Sees AI Storage Demand Fueling HAMR Growth and Margin Gains Written by MarketBeat September 13, 2026 Add As Preferred Source Share Share Share This Article Link copied to clipboard.",
        "Close Image from MarketBeat Media, LLC."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 80%, 90%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 80%, 90%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "2339ab3da2726373fde1",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AAPL",
        "AMD",
        "AMZN",
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
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Investing $20,000 in Apple Stock 10 Years Ago Paid Off More Than Investing the Same Amount in Amazon. Here's the Better Buy for the Next Decade.",
      "headlineKo": "10년 전 Apple 주식에 20,000달러를 투자한 것은 Amazon에 같은 금액을 투자한 것보다 더 많은 수익을 거두었습니다. 다음 10년을 위한 Better Buy가 여기에 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=20a10f3a75b537f65670fd11dc2107ae145daa107c44d0c80bd3fa9ceb45e98e",
        "publishedAt": 1789286700,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $20,000, $4.9 trillion, $2.8 trillion, $277,000,, $133,000., $2,000, 1.75 %, $ 5.70.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Investing $20,000 in Apple Stock 10 Years Ago Paid Off More Than Investing the Same Amount in Amazon. Here's the Better Buy for the Next Decade.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ffc8803fecdb6e1d1907",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "NVDA",
        "ORCL",
        "SPY"
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle's AI Chips Ran 97.9% Utilized Last Quarter. For Nvidia, That Is What a Shortage Looks Like.",
      "headlineKo": "오라클의 AI 칩은 지난 분기에 97.9% 활용되었습니다. Nvidia의 경우 이것이 부족해 보입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c19765ee99d1f808e0834ec4e72c6dcedabb281158a7cecf64700d17a6ae1f1",
        "publishedAt": 1789270681,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클의 AI 칩은 지난 분기에 97.9% 활용되었습니다.",
        "Nvidia의 경우 이것이 부족해 보입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Oracle( ORCL -1.74%)은 목요일 저녁 수익 결산에서 Nvidia( NVDA -0.03%) 투자자들이 일반적으로 수치를 매기는 데 시간을 보냈습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 97.9%, 73%, 121% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 97.9%, 73%, 121% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "fa54fd1bc75e281cba49",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "DeepSeek Cut Its KV-Cache HBM Need 75% and SSD Need 87.5%. Micron and Sandisk Investors Should Pay Attention",
      "headlineKo": "DeepSeek는 KV-캐시 HBM 필요를 75%, SSD 필요를 87.5% 줄였습니다. 마이크론과 샌디스크 투자자들은 주목해야 한다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8403adbcc3b4e194435cab8a15470c1a10c97fb0538c44beb963b05c82ef996a",
        "publishedAt": 1789262163,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "DeepSeek Cut Its KV-Cache HBM Need 75% and SSD Need 87.5%. Micron and Sandisk Investors Should Pay Attention",
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
      "id": "5248548f2acf9596f734",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Forget the S&P 500: 3 Unloved Parts of the Market Are Winning in 2026 and These Vanguard ETFs Own Them Cheap",
      "headlineKo": "S&P 500은 잊어버리세요: 시장에서 사랑받지 못한 3개 부분이 2026년에 승리할 것이며 Vanguard ETF는 이를 저렴하게 소유하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b12bba7563e91655aa60d55a940fab2c896b6fd8fa97e35bffb10f917443c3e9",
        "publishedAt": 1789259937,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500은 잊어버리세요: 2026년 시장의 사랑받지 못한 3곳이 승리하고 있으며, 이 뱅가드 ETF는 그들을 저렴하게 소유하고 있습니다 - 24/7 Wall St.",
        "콘텐츠로 건너뛰기 닫기 ❚❚ S&P 500 7,610.40 − 0.61% 다우존스 52,368.60 − 0.34% 나스닥 100 28,913.20 − 1.56% 러셀 2000 2,890.90 − 0.44% S&P 500 7,610.40 − 0.61% 다우존스 52,368.60 − 0.34% 나스닥 100 28,913.20 − 1.56% 러셀 2000 2,890.90 − 0.",
        "글쓴이: Tony Dong 2026년 9월 12일 오후 8시 38분 (동부 표준시) · 4분 읽기 © Dmitry Demidovich/Shutterstock.com 연도부터 9월까지."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.61%, 0.34%, 1.56% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.61%, 0.34%, 1.56% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "be8833e0aafc7d0e2d1d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Advanced Micro Devices, Inc. (AMD)’s Halo Station Could Strengthen Its AI Position, but Near-Term Revenue Impact May Be Limited",
      "headlineKo": "AMD(Advanced Micro Devices, Inc.)의 Halo Station은 AI 입지를 강화할 수 있지만 단기 수익 영향은 제한적일 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=563dde5b95b4eb1132093ceae91d9343e0c41e8edfb607fbf7e01fef200b4f0e",
        "publishedAt": 1789257270,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Advanced Micro Devices, Inc. (AMD)’s Halo Station Could Strengthen Its AI Position, but Near-Term Revenue Impact May Be Limited",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "d03b5f98c1a4088147b5",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Nebius And Palantir: Implications Of The New Partnership",
      "headlineKo": "Nebius와 Palantir: 새로운 파트너십의 의미",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7e64b016ea3de207f1f7a0fc1d9494659a8dad54373215c8245c70b56ceb00ec",
        "publishedAt": 1789252992,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nebius And Palantir: Implications Of The New Partnership",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "d59debbc12334c26450a",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "$10,000 in Tesla When It Joined the S&P 500 Would Be About $15,700 Today. An Index Fund Would Have Done Better.",
      "headlineKo": "Tesla가 S&P 500에 합류했을 때 Tesla의 10,000달러는 오늘날 약 15,700달러가 될 것입니다. 인덱스 펀드가 더 나았을 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f943a12719707ac9beef8dd9b9298f8492a3b6cba62f8c451e55b9221de532dd",
        "publishedAt": 1789252681,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla가 S&P 500에 합류했을 때 Tesla의 10,000달러는 오늘날 약 15,700달러가 될 것입니다.",
        "인덱스 펀드가 더 나았을 것입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% 12월 금요일에 The Motley Fool에 참여하세요."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.52%, 6%, $695. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.52%, 6%, $695. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a6d0765c9fda693172f8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "MU",
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
      "headline": "Not Nvidia. Not Micron. This Dirt Cheap “Magnificent Seven” Stock Could Be the Biggest Winner of the Trillion-Dollar AI Race – Here’s the Case.",
      "headlineKo": "엔비디아가 아닙니다. 마이크론이 아닙니다. 이 값싼 \"Magnificent Seven\" 주식은 수조 달러 규모의 AI 경쟁에서 가장 큰 승자가 될 수 있습니다. 사례는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e6e8471eafd333d014f6319ff458022c276914c6e69a28c09f531f323f1f24c",
        "publishedAt": 1789252501,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 값싼 \"Magnificent Seven\" 주식은 수조 달러 규모의 AI 경쟁에서 가장 큰 승자가 될 수 있습니다. 사례는 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Nvidia와 Micron Technology는 인공 지능(AI) 분야에서 투자자들의 가장 큰 승자 중 하나입니다.",
        "이는 AI 붐을 주도하는 두 가지 주요 영역, 즉 AI 운영에 필요한 컴퓨팅과 메모리에서 선두적인 위치를 차지하고 있기 때문입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $96 billion, $41 billion, 900% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $96 billion, $41 billion, 900% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "587f8e09bf61c53a81c6",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Nvidia vs. AMD: Elon Musk Picked a Side on the SpaceX Earnings Call",
      "headlineKo": "Nvidia 대 AMD: Elon Musk가 SpaceX 실적 발표에서 한 쪽을 선택했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6490e4ac2a408fad6a7e99a108b5027590baebdb2f8bd9abf6aa66d2bb3bf38a",
        "publishedAt": 1789248000,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 대 AMD: Elon Musk가 SpaceX 실적 발표에서 한 쪽을 선택했습니다."
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
      "id": "ff76fda800031c72072f",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Nvidia vs. AMD: Elon Musk Picked a Side on the SpaceX Earnings Call",
      "headlineKo": "Nvidia 대 AMD: Elon Musk가 SpaceX 실적 발표에서 한 쪽을 선택했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6490e4ac2a408fad6a7e99a108b5027590baebdb2f8bd9abf6aa66d2bb3bf38a",
        "publishedAt": 1789248000,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD: Elon Musk가 SpaceX 실적 발표에서 한 편을 선택했습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool GPU 시장은 Nvidia를 포함하는 과점 기업이 지배하고 있습니다( NVDA -0.03% )",
        "Nvidia는 Blackwell을 엄청난 규모로 출시하고 Vera Rubin을 차세대 랙 규모 플랫폼으로 강화하고 있습니다.",
        "한편, AMD는 MI300 시스템을 판매하고 차세대 MI400 가속기를 준비하여 자리를 지키고 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1.25 billion, $920 million, $6.3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.25 billion, $920 million, $6.3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c4beb59c50524aadd01c",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Morgan Stanley revamps Oracle stock price target",
      "headlineKo": "모건스탠리, 오라클 주가 목표 상향 조정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b7d81354c348af71a73a59958c104155c929f18b19cefee29e3c5c510b9b242",
        "publishedAt": 1789246980,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley revamps Oracle stock price target",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "5f89daf304700246a69c",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Investing in the Vanguard S&P 500 ETF (VOO)? Beware of This 1 Sneaky Risk.",
      "headlineKo": "Vanguard S&P 500 ETF(VOO)에 투자하시나요? 이 1가지 비열한 위험을 조심하세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8f43a6213dedee0a59ce9f23d1d5cb75bf94b1bd1e2f57383cfd09940628d8fe",
        "publishedAt": 1789240800,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vanguard S&P 500 ETF(VOO)에 투자하시나요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ 주식 어드바이저 + --- % Motley Fool 가입 Vanguard S&P 500 ETF (VOO +0.85%) 또는 SPDR S&P 500 ETF (SPY +0.85%) 에 투자하는 경우 훌륭합니다.",
        "이제 귀하는 미국 최대 기업 500개의 부분 소유자가 되었습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.85%, 7.55%, 7.04% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.85%, 7.55%, 7.04% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "55eeaf44180b56f91c1c",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google's Historic 396 MW Clean Energy Deal Just Changed the Game for 1 AI Power Play",
      "headlineKo": "Google의 역사적인 396MW 청정 에너지 계약으로 AI Power Play의 판도가 바뀌었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=547aacb955fd8ad53b9a48b5b9fada52d5ad914cd9a01910856e8429208de56e",
        "publishedAt": 1789239900,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google의 역사적인 396MW 청정 에너지 거래로 1 AI Power Play의 판도가 바뀌었습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공 지능의 놀라운 발전",
        "그러나 그들은 장애물, 특히 전력에 부딪치고 있습니다.",
        "그리드 연결이 지연되고 주거용 고객이 치솟는 에너지 비용에 대한 부담을 경계하는 상황에서 이들 거대 기술 기업은 데이터 센터를 원활하게 유지하기 위한 혁신적인 전력 솔루션을 찾고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.53%, 1.77%, 0.89% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.53%, 1.77%, 0.89% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9e775836d148bccfb254",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google Just Dropped a Bombshell on AI Spending — Alphabet’s $200 Billion AI Bet Is Starting to Pay Off Big",
      "headlineKo": "Google이 AI 지출에 폭탄을 떨어뜨렸습니다. Alphabet의 2000억 달러 AI 베팅이 큰 성과를 거두기 시작했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec2296e9f14dac6d3e7ded78ad58f76c1de76c4e4e9b0ef8fa0faf40e1c0ad6f",
        "publishedAt": 1789239377,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google이 AI 지출에 폭탄을 떨어뜨렸습니다. Alphabet의 2000억 달러 AI 베팅이 큰 성과를 거두기 시작했습니다."
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
      "id": "7207af0898502c082598",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Elon Musk Needs Tesla to Reach a $8.5 Trillion Market Cap to Cash In. Here's How Tesla Can Reach That Valuation.",
      "headlineKo": "Elon Musk는 현금화를 위해 Tesla가 8조 5천억 달러의 시가총액에 도달해야 합니다. Tesla가 그 가치에 도달할 수 있는 방법은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be9bb308faf1e10f2071dd53f4f0451955481885cad5de849b026764f02a2c35",
        "publishedAt": 1789237500,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk는 현금화를 위해 Tesla가 8조 5천억 달러의 시가총액에 도달해야 합니다.",
        "Tesla가 그 가치에 도달할 수 있는 방법은 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 작년에 Elon Musk는 Tesla의 CEO가 되어 1조 달러의 급여 패키지를 확보했습니다( TSLA +0.52% )."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $8.5 Trillion, $400 billion, $8.5 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $8.5 Trillion, $400 billion, $8.5 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e773664a85e7a50d0600",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "MU",
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
      "headline": "Broadcom vs. Micron Technology: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Broadcom 대 Micron Technology: 2026년에는 어떤 기술 주식을 매수하는 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=03ad308a7a6fb74074dd64001006d02c01b4acae01f7797db1a1b4c790483715",
        "publishedAt": 1789236502,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 테크놀로지: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능 시대가 가속화됨에 따라 다양한 인프라 리더와 전문 메모리 서비스 중에서 선택",
        "현재 Broadcom(AVGO +0.32%) 또는 Micron Technology(MU -0.22%)를 구매하는 것이 더 나은가요?"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.32%, 0.22%, $ 361.99 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.32%, 0.22%, $ 361.99 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dab353159531d7c0759c",
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
      "headline": "Analyst sets jaw-dropping Nvidia price target",
      "headlineKo": "애널리스트, 엔비디아 가격 목표 설정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0136fe497c969f80e5e6bb6f6fb9d6ad056fbc5d508b8759bfd2f9abd1aa34e",
        "publishedAt": 1789234380,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Analyst sets jaw-dropping Nvidia price target",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "d8a09b03edf03e3764a3",
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
      "headline": "Prediction: Nvidia Stock Could Be Worth This Much by January 2028",
      "headlineKo": "예측: 2028년 1월까지 엔비디아 주식이 이만큼 가치가 있을 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ff9cd0726de49630ffec23022eb2632ef6d59a41cf49fd3e075c74bfb3279c8",
        "publishedAt": 1789233420,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 2028년 1월까지 엔비디아 주식은 이 정도의 가치가 있을 수 있습니다 | The Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % The Motley Fool에 가입 올해까지 Nvidia (NVDA -0.03%) 주식은 견고합니다",
        "이는 인공 지능 (AI) 혁명의 초기 이닝 동안의 성과를 기억하기 전까지는 괜찮은 것처럼 들립니다. 그 당시에는 매년 주식이 두 배 또는 세 배로 증가했습니다.",
        "엔비디아의 로켓 선박 단계는 주요 클라우드 플레이어에서 사용자 지정 실리콘과의 경쟁이 치열 해지고, 하이퍼스케일러 자본 지출 (CAPEX) 이 공격적으로 유지될 수 있는지에 대한 의문이 남기 때문에 냉각되었습니다. 법률 o"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 70%, $700 billion, 0.03 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 70%, $700 billion, 0.03 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5c0fe260ac26815a8748",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir's Growth Has Kept Accelerating, but Can the Rally Continue?",
      "headlineKo": "Palantir의 성장은 계속 가속화되었지만 랠리는 계속될 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b489e2c8f75ab5642c2b568a659573c464486759bb1e292737ef398b7961532",
        "publishedAt": 1789228500,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir의 성장은 계속 가속화되었지만 랠리는 계속될 수 있습니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Motley Fool Palantir 가입 (PLTR +0.83%) 은 지난 몇 년 동안 놀라운 성장률을 기록했습니다.",
        "그러나 기업이 확장할 고객이 부족해지기 전에 성장률을 계속 가속화할 수 있는 정도에는 한계가 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.83 %, $ 1.37, $ 167.23 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.83 %, $ 1.37, $ 167.23 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "36bd66db65510aef8927",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Amazon Price Prediction: The Stock’s Path Toward $300 Looks Clearer",
      "headlineKo": "아마존 가격 예측: $ 300를 향한 주식의 경로가 더 명확해 보입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9aa61a3e839bf1149079c3d1018e5c485680bd8ab2003c3515172a697d0a77ff",
        "publishedAt": 1789227052,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존 가격 예측: 300달러를 향한 주가의 경로는 더 명확해 보입니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,657.20 +0.80% Dow Jones 52,547.40 +0.95% Nasdaq 100 29,372.00 +0.89% Russell 2000 2,903.75 +0.50% S&P 500 7,657.20 +0.80% 다우존스 52,547.40 +0.95% 나스닥 100 29,372.00 +0.89% 러셀 2000 2,903.75 +0.",
        "뭔가가 있어야 하고, 300달러 가격표 뒤에 숨은 계산은… 작성자: Vandita Jadeja 2026년 9월 12일 오전 11시 30분(ET) 게시 · 3분 읽기 가격 목표 데스크."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $300, 36.7%, $19.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $300, 36.7%, $19.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "34b51ca7b14c8be5425a",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "MU",
        "QCOM",
        "TSM",
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
      "headline": "Apple and Taiwan Semiconductor Manufacturing Just Announced a Cutting-Edge Chip. 1 Stock Offers Far Greater Upside.",
      "headlineKo": "애플과 대만 반도체 제조사가 최첨단 칩을 발표했습니다. 1 주식은 훨씬 더 큰 업사이드를 제공합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b6449707f953acd9b5a6928bd1f587d4e7019e018c0d2db66479e4ef5f28ebe",
        "publishedAt": 1789220640,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 1.75 %, $ 5.70, $ 332.27, $4.8, $ 326.30, $ 336.22, $ 235.03, $ 344.57.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple and Taiwan Semiconductor Manufacturing Just Announced a Cutting-Edge Chip. 1 Stock Offers Far Greater Upside.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "614498358e0ee6c923b5",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AAPL",
        "AMZN",
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
      "headline": "Qualcomm Lost Apple’s Modem Business. Amazon Just Offered a $60 Billion Escape Route.",
      "headlineKo": "Qualcomm이 Apple의 모뎀 비즈니스를 잃었습니다. Amazon은 방금 $ 600억 규모의 탈출 경로를 제공했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=332503480b1329d0e654a007d8e1251b42257f9052784264d67932caede0c951",
        "publishedAt": 1789220229,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "퀄컴, 애플 모뎀 사업 잃었다.",
        "아마존은 방금 600억 달러 규모의 탈출 경로를 제안했습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,657.20 +0.80% Dow Jones 52,547.40 +0.95% Nasdaq 100 29,372.00 +0.89% Russell 2000 2,903.75 +0.50% S&P 500 7,657.20 +0.80% 다우존스 52,547.40 +0.95% 나스닥 100 29,372.00 +0.89% 러셀 2000 2,903.75 +0."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $60 Billion, $60 billion, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $60 Billion, $60 billion, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fb4e7bdcb542737d150c",
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
      "headline": "Larry Ellison nixes plan to offload up to $7.5 billion worth of Oracle stock ",
      "headlineKo": "Larry Ellison nixes는 최대 75억 $ 상당의 오라클 주식을 오프로드할 계획입니다.",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=750d8bac777cc1be3c8dda98b6232992e5626b0a1f9fc638da63916fdeb7c71b",
        "publishedAt": 1789218896,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Larry Ellison NIXES는 최대 75억 $ 상당의 오라클 주식을 오프로드할 계획입니다 탐색 시장 건너뛰기 비즈니스 투자 기술 정치 및 정책 동영상 시청 목록 투자 클럽 프로 라이브스트림 메뉴 주요 포인트 Larry Ellison이 계획을 취소했습니다",
        "취소는 오라클이 설립자가 주식을 매각하기 위한 거래 계획을 제출하는 규제에서 공개한 지 하루 만에 이루어졌습니다.",
        "억만장자 엘리슨은 창립 이래 회사의 상당 부분을 맡아왔습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $7.5 billion, 40%, 23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $7.5 billion, 40%, 23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f8668dd1ce79e17f9371",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
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
      "headline": "AMD Just Raised the Top of the Company's 2030 Market to $3 Trillion",
      "headlineKo": "AMD는 방금 회사의 2030년 시장 점유율을 30조 달러 ($) 로 끌어올렸습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6e850fb0a698a0be4d7f00e4fc24e196d14098bb7c53cdf0b6e70c65552569c1",
        "publishedAt": 1789216741,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD는 방금 회사의 2030년 시장 상위권을 3조 $ 로 끌어올렸습니다 | The Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % The Motley Fool에 가입하세요 회사가 자신의 회사에 1조 달러를 추가하면",
        "9 월 화요일, Citi의 2026 Global TMT Conference에서",
        "8, Advanced Micro Devices (AMD +2.49%) 최고 재무 책임자 Jean Hu는 2030년까지 회사의 총 어드레싱 가능한 시장이 2조 달러에서 3조 달러에 이를 수 있다고 투자자들에게 말했다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.49%, $2 trillion, $3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.49%, $2 trillion, $3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7f4ed5e89e57b19d6e50",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Semiconductor Equipment Stocks Face ASML and Applied Materials Earnings Test After High-Quality Pullback",
      "headlineKo": "고품질 철수 후 반도체 장비 재고 얼굴 ASML 및 응용 재료 이익 테스트",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8d0cb8aae946432c362e205f32d7215e3e4ec0187996b01bcb18fce3b8150550",
        "publishedAt": 1789214762,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Semiconductor Equipment Stocks Face ASML and Applied Materials Earnings Test After High-Quality Pullback",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ASML에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "8f467c43891b70437366",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "MU",
      "relatedTickers": [
        "INTC",
        "MU",
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
      "headline": "Where Will Micron Be in 10 Years?",
      "headlineKo": "10년 후 마이크론은 어디에 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c85b24cac3b2b14cb4bd0fffcafac0404e7ed0e2199f9e7c7f9b4cfe4a9350a7",
        "publishedAt": 1789212900,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron Technology ( MU -0.22% ) has been one of the leaders of this next phase of the artificial intelligence (AI) boom.",
        "Its high bandwidth memory chips, built to handle AI workloads, are essential components of AI infrastructure.",
        "After all, for AI computing to work, it needs quick access to data."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $41.5 billion, 82%, 357% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $41.5 billion, 82%, 357% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6757f3b8b51aef16835f",
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
      "headline": "Oracle Just Added $30 Billion in AI Contracts. Nvidia Investors Should Read the Fine Print",
      "headlineKo": "오라클은 방금 $ 300억의 AI 계약을 추가했습니다. Nvidia Investors Should Read the Fine Print",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e367a544d20084abcebeb98c3c735bd31c9f568e5b0704b800af842502cd303a",
        "publishedAt": 1789211750,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클은 방금 $ 300억의 AI 계약을 추가했습니다. Nvidia Investors Should Read the Fine Print"
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
      "id": "7f5f7d7375108989b14c",
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
      "headline": "Broadcom's AI Chip Revenue Grew 221% Last Quarter. A $1,000 Investment a Year Ago Would Be Worth This Much Today.",
      "headlineKo": "Broadcom의 AI 칩 매출은 지난 분기에 221% 증가했습니다. 1년에 $ 1,000의 투자가 오늘 이만큼 가치가 있을 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f26bd8a1f6278ea7208ebad9a29f3efca4384fad68d8040c24b1bd8cc88e95b9",
        "publishedAt": 1789210980,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 221%, $1,000, $1,070, $16.7 billion, 12 times, $21.7 billion, 236%, $34.8 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AVGO의 사업과 관련된 'Broadcom's AI Chip Revenue Grew 221% Last Quarter. A $1,000 Investment a Year Ago Would Be Worth This Much Today.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "03cb81f164ce16f980cd",
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
      "headline": "Nvidia Stock Could Reach $490 by End of 2027 Based on Current Growth Projections",
      "headlineKo": "Nvidia 주가는 현재 성장 전망에 따라 2027년 말까지 490달러에 도달할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d64b263e8fc66c1870510e01c9655e3140c4ff6ab64c67e41d072ec46de339c2",
        "publishedAt": 1789204980,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "현재 성장 전망에 따르면 엔비디아 주식은 2027년 말까지 490달러에 도달할 수 있습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia( NVDA -0.03% ) 주가가 초과 상승했습니다.",
        "그러나 투자자들이 정말로 알고 싶어하는 것은 Nvidia가 계속해서 시장을 능가할 수 있는지, 그리고 오늘 주식을 사는 것이 합리적인지 여부입니다.",
        "미래가 어떻게 될지는 아무도 모르지만, 비즈니스와 전망은 물론 시장 정서에 대한 신호를 평가할 수 있는 방법이 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 106%, $12.9 billion, $2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 106%, $12.9 billion, $2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fc2f9096053575b158ce",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "MU",
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
      "headline": "Is Micron Stock the Next Nvidia? The Answer May Shock Investors.",
      "headlineKo": "Micron Stock이 차세대 Nvidia입니까? 그 대답은 투자자들에게 충격을 줄 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f5ce76a18fc3e8ab12d611f5715402d4b8724e2d5d2e3432a3951342af4b103",
        "publishedAt": 1789204081,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 2025년 엔비디아(NVDA -0.03%)는 인공지능(AI) 보로 시가총액 5조 달러를 달성한 최초의 기업이 됐다.",
        "2023년 1월 AI 붐이 시작된 이후 주가는 1,390% 상승했고, 엔비디아는 오늘날에도 여전히 세계에서 가장 가치 있는 기업이다.",
        "2026년에 마이크론 테크놀로지(MU -0.22%)는 기록상 가장 빠른 속도인 5,000억 달러를 달성한 지 48일 만에 1조 달러의 시장 가치를 달성했습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1,390%, 0.22%, $1 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1,390%, 0.22%, $1 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ca2a313cb063b36ebf38",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "WDC",
      "relatedTickers": [
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
      "headline": "Western Digital Sees AI-Driven HDD Demand Outpacing Supply Through 2027",
      "headlineKo": "Western Digital, 2027년까지 AI 기반 HDD 수요가 공급을 초과할 것으로 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=64e899ae32f1bcbfd3dea3da88846df3d9d829f1edcf5c62f402ef905427defd",
        "publishedAt": 1789203716,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital Sees AI-Driven HDD Demand Outpacing Supply Through 2027 Skip to main content → Trump goes 'all-in' on Grand Canyon energy breakthrough (From Behind the Markets) (Ad) Western Digital Sees AI-Driven HDD Demand Outpacing Supply",
        "Close Image from MarketBeat Media, LLC.",
        "Key Points AI and cloud demand are outpacing HDD supply: Western Digital says roughly 90% of its business is now tied to cloud customers, with exabyte demand expected to grow more than 25% annually over the next five years."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 90%, 25%, 18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 90%, 25%, 18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "065f3181bbeca4b1dd09",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "META"
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
      "headline": "Meta May Overtake Google Search in Ad Revenue This Year, Bernstein Says",
      "headlineKo": "Bernstein은 메타가 올해 광고 수익에서 Google 검색을 추월할 것이라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5fc0161f36892d2746ff0c21b113e0ae62a0e891cba72e2820984444b963fb53",
        "publishedAt": 1789202793,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta May Overtake Google Search in Ad Revenue This Year, Bernstein Says",
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
      "id": "226453c8c2ad689479cd",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
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
      "headline": "Billionaire Stanley Druckenmiller Dumped Broadcom, Intel, and Micron for This Chip Stock. Here's Why.",
      "headlineKo": "억만장자 Stanley Druckenmiller는 이 칩 주식을 위해 Broadcom, Intel 및 Micron을 버렸습니다. 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b9f957b325d3887f289d92a1d4247fc7927cfb16f5bdbc75b2d4c975e8d52365",
        "publishedAt": 1789201380,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 30%, $5.2 billion, $100 million, 0.32%, 2.61%, 1.8%, 0.5%, 0.2%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AVGO의 사업과 관련된 'Billionaire Stanley Druckenmiller Dumped Broadcom, Intel, and Micron for This Chip Stock. Here's Why.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "16c549c84f68e451eb9e",
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
      "headline": "Seagate: The HDD Shortage Still Has Legs",
      "headlineKo": "Seagate: HDD 부족 현상은 여전히 ​​남아 있습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4bed8384bdfb8d1bf3519fa36e875208cd7e03d261a80b124270d571aa23de29",
        "publishedAt": 1789195617,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate: The HDD Shortage Still Has Legs",
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
      "id": "043c72c2285634816755",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
        "PLTR",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Michael Burry Is Staying Short Nvidia, Palantir, and Tesla, Warning of a Possible \"1987-Type Fall\" for AI Stocks. Should Investors Take the Bet Seriously?",
      "headlineKo": "Michael Burry는 Nvidia, Palantir 및 Tesla에 투자를 아끼지 않고 AI 주식에 \"1987년형 하락\" 가능성을 경고하고 있습니다. 투자자들은 베팅을 진지하게 받아들여야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8684d6d6991c450552622d4b3ad43a48707665f98c6cbf28c139e264b45a02e0",
        "publishedAt": 1789192200,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 0.03%, 0.83%, 0.52%, 0.18%, 50%, 0.03 %, $ 218.29, $5.3.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 TSLA의 사업과 관련된 'Michael Burry Is Staying Short Nvidia, Palantir, and Tesla, Warning of a Possible \"1987-Type Fall\" for AI Stocks. Should Investors Take the Bet Seriously?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9abc516eb045e45591db",
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
      "headline": "How To Earn $500 A Month From Oracle Stock Ahead Of Q1 Earnings",
      "headlineKo": "1분기 수익에 앞서 오라클 주식으로 한 달에 500달러를 버는 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da6730cc5ed4718a22c8360051542f78a3d42e716a6863508cd94fead6209eae",
        "publishedAt": 1789183807,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "How To Earn $500 A Month From Oracle Stock Ahead Of Q1 Earnings",
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
      "id": "8e72a2b8fb89167f1c1c",
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
      "headline": "ORCL Q3 Deep Dive: Cloud Infrastructure and AI Demand Drive Margin Expansion",
      "headlineKo": "ORCL Q3 심층 분석: 클라우드 인프라 및 AI 수요로 마진 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5dee27f38540701b8f49b6250b478dbc12092ebe5b685704b89f9721a621461e",
        "publishedAt": 1789183385,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 ORCL의 사업과 관련된 'ORCL Q3 Deep Dive: Cloud Infrastructure and AI Demand Drive Margin Expansion' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "62b74aa291413fa2f558",
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
      "headline": "Oracle: You Didn't Miss It, There's Still 40% Upside",
      "headlineKo": "오라클: 놓치지 마세요. 아직 40% 상승 여력이 있습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7695132a5c5476d1a7f8fe28402c3ac04174a114cd48d8f4449f75fc06a68eb6",
        "publishedAt": 1789181874,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 ORCL의 사업과 관련된 'Oracle: You Didn't Miss It, There's Still 40% Upside' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "c822fdd7207c22509ddd",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "WDC",
      "relatedTickers": [
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
      "headline": "Western Digital: Buy The Earnings Growth, Not Just The AI Story",
      "headlineKo": "Western Digital: 단순한 AI 스토리가 아닌 수익 성장을 구매하세요",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f6d37e460fb5e3bcae55a57a764627c609ab216c44697b3b92b89302c05b02b6",
        "publishedAt": 1789179964,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital: Buy The Earnings Growth, Not Just The AI Story",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "9e539d31ac13fb23af8b",
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
      "headline": "Apple’s Foldable iPhone Could Trigger a Massive 'Upgrade Cycle,' Says Gary Black — But This One Problem Could Cap 'Incremental Earnings' for 6 Months",
      "headlineKo": "Gary Black은 Apple의 폴더블 iPhone이 대규모 '업그레이드 주기'를 촉발할 수 있다고 말합니다. 그러나 이 한 가지 문제로 인해 6개월 동안 '증분 수익'이 제한될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a39abf41c7f1134ba730c48db23f3bc79214f4332e9068d3fab6bb41ff81cf7c",
        "publishedAt": 1789176631,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Gary Black은 Apple의 폴더블 iPhone이 대규모 '업그레이드 주기'를 촉발할 수 있다고 말합니다. 그러나 이 한 가지 문제로 인해 6개월 동안 '증분 수익'이 제한될 수 있습니다."
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
      "id": "ef4b1757b8001da10bff",
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
      "headline": "Meta’s $18 Billion Settlement Could Be the Green Light for a New AI Push",
      "headlineKo": "Meta의 180억 달러 합의는 새로운 AI 추진의 청신호가 될 수 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73f84b9746574b833103dd38ccedb3d41cec3df34d088550f0e30f94d504e5fb",
        "publishedAt": 1789174583,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 META의 사업과 관련된 'Meta’s $18 Billion Settlement Could Be the Green Light for a New AI Push' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ca65247236b9bb335b67",
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
      "headline": "Microsoft Stock Is Flat So Far in 2026. Is a Rally Coming to End the Year?",
      "headlineKo": "Microsoft 주식은 2026년 현재까지 보합세를 보이고 있습니다. 올해를 마무리하는 랠리가 다가오고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2f82d653fb77537506a12731e33ccfaa2ce8db3cf84d88622b79c6f1ea3573df",
        "publishedAt": 1789173240,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft 주식은 2026년 현재까지 변동이 없습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Microsoft(MSFT +0.65%)는 많은 사람들이 2026년에 기대했던 투자가 아니었습니다.",
        "이 글을 쓰는 시점에서 주가는 현재까지 약 2% 상승했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, 27%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, 27%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7b0db351058a7ff86e38",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Veteran analyst resets Palantir price target for rest of 2026",
      "headlineKo": "베테랑 분석가는 2026년 남은 기간 동안 Palantir 가격 목표를 재설정했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=14cda99ff29f36ab3c39e5736f38cff31202bc4106c4300c5f6935f99a9f155c",
        "publishedAt": 1789171380,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "베테랑 분석가는 2026년 남은 기간 동안 Palantir 가격 목표를 재설정했습니다."
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
      "id": "dc5965b35ce455c2f5f8",
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
      "headline": "Oracle Reportedly Expands Restructuring Plan by $700M As AI Data Center Costs Mount",
      "headlineKo": "오라클은 AI 데이터 센터 비용이 증가함에 따라 구조 조정 계획을 7억 달러 확장한 것으로 알려졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=124b28e816e98320e6311024c8862e2bde3fd74fb553196f58de808b2ebfe030",
        "publishedAt": 1789169610,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클은 AI 데이터 센터 비용이 증가함에 따라 구조 조정 계획을 7억 달러 확장한 것으로 알려졌습니다."
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
      "id": "48ab40d9100f1879b8b7",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AAPL",
        "AMZN",
        "GOOGL",
        "MSFT",
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
      "headline": "Apple, Microsoft, and Nvidia Top the List of Largest Companies by Market Cap. Here's the One I'm Buying Now.",
      "headlineKo": "Apple, Microsoft, Nvidia가 시가총액 기준으로 가장 큰 회사 목록에 올랐습니다. 여기 제가 지금 구매하고 있는 제품이 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ea8b86b30d8520a3fd0d71a133eb31bc29f2f7b55ca5a26f30c0561604667e9",
        "publishedAt": 1789168800,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple, Microsoft, Nvidia가 시가총액 기준으로 가장 큰 회사 목록에 올랐습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 이 글을 쓰는 시점에서 세계 3대 기업은 시가총액 5조 4천억 달러의 Nvidia(NVDA -0.03%), App",
        "Alphabet과 4위 Microsoft 사이에는 여전히 상당한 격차인 3조 6500억 달러가 있으며, 5위 Amazon과의 격차는 2조 7000억 달러로 훨씬 더 큽니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $3.65 trillion, $2.7 trillion, $800 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $3.65 trillion, $2.7 trillion, $800 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "aaa8c920ca38b8162032",
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
      "headline": "Google’s $15 Billion Finland AI Build Is Good News for Nvidia, With One Important Catch",
      "headlineKo": "Google의 150억 달러 핀란드 AI 빌드는 Nvidia에 좋은 소식이지만 한 가지 중요한 문제가 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c798576399fa62f56cf31458447c17380596c637f7ab19c36b094846e4addfe",
        "publishedAt": 1789168344,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 GOOGL의 사업과 관련된 'Google’s $15 Billion Finland AI Build Is Good News for Nvidia, With One Important Catch' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "1b6c83c8f3cd59328dfc",
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
      "headline": "S&P 500, Dow Break Past Four-Day Loss To End Higher As Investors Eye Fed Meeting Next Week — DELL, HPE, EL, WMT In Focus",
      "headlineKo": "S&P 500, Dow는 다음 주 투자자 Eye Fed 회의에서 지난 4일 하락세를 넘어 더 높은 수준으로 마감 — DELL, HPE, EL, WMT 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=664c334a388b9bd9fbcd5c61a7697cca3d9a216aeee1f50962dadfe90b527a25",
        "publishedAt": 1789168255,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Dow Break Past Four-Day Loss To End Higher As Investors Eye Fed Meeting Next Week — DELL, HPE, EL, WMT In Focus New Connect your Agent Trending News Earnings All DIA 0.97% SPY 0.85% QQQ 0.87% Trending OPEAZZX 0.20% ANTHZZX 0.89% XC",
        "S&P 500, Dow Break Past Four-Day Loss To End Higher As Investors Eye Fed Meeting Next Week — DELL, HPE, EL, WMT In Focus 8월 소비자물가지수는 매월 0.4%, 전년 대비 3.4% 상승했습니다.",
        "거래자들은 뉴욕 증권거래소 (NYSE) 바닥에서 일합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.97%, 0.85%, 0.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.97%, 0.85%, 0.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9b5e438a6b9bcbe5a887",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AI’s HBM Shortage Strengthens Micron’s Hand—and Pressures Nvidia’s GPU Economics",
      "headlineKo": "AI의 HBM 부족으로 Micron의 역량이 강화되고 Nvidia의 GPU 경제성이 압박받음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9bb2125d66ab42e8a1e871dd01f83fb39e45eac7646b8a7920594ad74f6b9cfb",
        "publishedAt": 1789167693,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI의 HBM 부족으로 Micron의 역량이 강화되고 Nvidia의 GPU 경제성이 압박받음"
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
      "id": "08f4fbb258e59d82f42a",
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
      "headline": "Adobe Beat and Raised but Fell. Salesforce Shows What Investors Now Demand From AI Software",
      "headlineKo": "Adobe Beat 및 상승했지만 하락했습니다. Salesforce는 현재 투자자들이 AI 소프트웨어에 무엇을 요구하는지 보여줍니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95d1181ae5f1ac276885b16602a933db2f618a2565b4fb871824c04c85322d84",
        "publishedAt": 1789166911,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 CRM의 사업과 관련된 'Adobe Beat and Raised but Fell. Salesforce Shows What Investors Now Demand From AI Software' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d599bbccaa34b19d4d79",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Co-Founder Peter Thiel's Hedge Fund Just Made a Big Bet on This AI Stock",
      "headlineKo": "Palantir 공동 창립자 Peter Thiel의 헤지 펀드가 이 AI 주식에 큰 투자를 했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=82301476160cba3bf98c789081d01cf058fbda6b1acd5ae308fa03ab6ab00a67",
        "publishedAt": 1789166580,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 공동 창립자 Peter Thiel의 헤지 펀드가 이 AI 주식에 큰 투자를 했습니다."
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
      "id": "35cd3099b6f97d2261fd",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Applied Materials vs. Micron Technology: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "어플라이드 머티어리얼즈 vs. 마이크론 테크놀로지: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5955dbd2f70057b69f8cbbfe3a58f8060947e71c49d4952fd7eac4a15de8e4cb",
        "publishedAt": 1789161181,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 테크놀로지: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 장비 강국과 메모리 거대 기업 중 하나를 선택하려면 칩 수요의 다음 단계가 어떻게 전개될 것인지 이해해야 합니다.",
        "Applied Materials Inc(AMAT +0.55%) 또는 Micron Technology Inc(MU -0.22%)를 선호해야 합니까?"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.22%, $ 456.49 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.22%, $ 456.49 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b1de46d0de953f114f19",
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
      "headline": "Amazon Gains as S&P Flags Its $100 Billion Debt Spree",
      "headlineKo": "S&P가 1000억 달러의 부채를 신고하면서 아마존이 이익을 얻습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4f438939d5d54223c42baa2e6f56b810e9e9cd2aba3a48c76c09a1f2bfb5e9f",
        "publishedAt": 1789161144,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 AMZN의 사업과 관련된 'Amazon Gains as S&P Flags Its $100 Billion Debt Spree' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "5fc669ccc45a389304e1",
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
      "headline": "Tesla Gains as Semi Opens a $17 Billion Software Door",
      "headlineKo": "Semi가 170억 달러 규모의 소프트웨어 시장을 열면서 Tesla가 이익을 얻습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8dfa4f241cd6fec0c207ced86357dae489f4878f482b06161a2e3c92657bca0",
        "publishedAt": 1789161138,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 TSLA의 사업과 관련된 'Tesla Gains as Semi Opens a $17 Billion Software Door' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "c1b5e3d6a4c055483ef0",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET",
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
      "headline": "Arista Networks Stock Rallied, But Is It Now A Bet On Its Suppliers?",
      "headlineKo": "Arista Networks 주가가 반등했지만 이제는 공급업체에 베팅하는 것입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ec48e51f5660a858139e73e7219a3ef9d31faa94e6beb7d08523be8708baa78",
        "publishedAt": 1789156143,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista Networks Stock Rallied, But Is It Now A Bet On Its Suppliers?",
        "| Trefis Arista Networks Stock Rallied, But Is It Now A Bet On Its Suppliers?",
        "September 11th, 2026 · by Trefis Team ANET YTD +52.3% SPY YTD +12.4% QQQ YTD +16.5% Analyze ANET → Arista Networks (ANET) stock has gained about 51% since mid-December, against about 12% for the S&P 500."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 293%, 135%, 40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 293%, 135%, 40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "fea6cbc2a855b617a610",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM",
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
      "headline": "Adobe vs. Salesforce: Which Software Stock Is a Better Buy in 2026?",
      "headlineKo": "Adobe vs. Salesforce: 2026년에는 어떤 소프트웨어 주식이 더 나은 구매입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e2254945ae6fdd8cf275daf9698b35b25e38171ec59311e77312bc17dc2c0d4c",
        "publishedAt": 1789155252,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce: 2026년에는 어떤 소프트웨어 스톡이 더 나은 구매입니까?",
        "| The Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Motley Fool 가입 기업 지출이 자동화와 창의성으로 전환됨에 따라 투자자들은 종종 Adobe (ADBE +1.37",
        "다음 중 오늘날 최고의 가치를 제공하는 클라우드 소프트웨어 타이탄은 무엇입니까?"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $ 252.23, 1.37 %, $ 3.40 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $ 252.23, 1.37 %, $ 3.40 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ebc31d8baacc02ce4acd",
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
      "headline": "Why Is Eaton Priced Above Peers That Earn More Per Sale?",
      "headlineKo": "Eaton의 가격이 판매당 더 많은 수익을 올리는 동종 업체보다 높은 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=456fbbf893fb96f1c6137822ce5d8e518d47274ada7c0c407bd56ace31d585a4",
        "publishedAt": 1789154312,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Is Eaton Priced Above Peers That Earn More Per Sale?",
        "| Trefis Why Is Eaton Priced Above Peers That Earn More Per Sale?",
        "September 11th, 2026 · by Trefis Team ETN YTD +34.7% SPY YTD +12.4% XLI YTD +11.4% Analyze ETN → Eaton (ETN) grew revenue 15.5% over the past twelve months, faster than any of the five industrial peers it is measured against."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 34.7%, 12.4%, 11.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 34.7%, 12.4%, 11.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "37860c35e0dca189df18",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
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
      "headline": "Arm vs. Credo Technology Group: Which Semiconductor Stock Is a Better Buy in 2026?",
      "headlineKo": "Arm 대 Credo Technology Group: 2026년에는 어느 반도체 주식을 매수하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df7181a332ef16e41cfd20fe557eef7dc0727a4e8ba9e9a855139bf7243865e1",
        "publishedAt": 1789152953,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Credo Technology Group: 2026년에는 어느 반도체 주식이 더 나은 매수인가?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능에 대한 수요가 가속화되면서 투자자들은 Arm( ARM -9.74% )과 Credo Technology Gro의 장점을 저울질하고 있습니다.",
        "둘 중 하나를 선택하려면 어떤 비즈니스 모델이 더 나은 구매인지 결정해야 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $ 239.01, 9.74 %, $ 25.78 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $ 239.01, 9.74 %, $ 25.78 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "8f8388ba244ddc213065",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Astera Labs vs. Applied Materials: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Astera Labs 대 Applied Materials: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4d472527ba77d71efd8935677a6c8a842d7f0f63b6ddb9233219cfa08e7e3b45",
        "publishedAt": 1789152601,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티어리얼즈: 2026년에는 어떤 기술주를 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 고성능 컴퓨팅은 현재 대규모 세대교체를 겪고 있습니다.",
        "Astera Labs Inc(ALAB +2.35%)와 Applied Materials Inc(AMAT +0.55%) 중에서 결정한다는 것은 빠르게 성장하는 연결 전문가와 확고한 제조 장비 업체 중에서 선택한다는 의미입니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.35%, 0.55%, $ 456.49 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.35%, 0.55%, $ 456.49 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e387c5fc6e51b8f5d4c9",
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
      "headline": "This 0.06%-Fee Dividend ETF Is Beating the S&P 500 by 16% YTD Without Owning a Single Magnificent Seven Stock",
      "headlineKo": "이 0.06% 수수료 배당 ETF는 단일 Magnificent Seven 주식을 보유하지 않고도 S&P 500을 YTD 16% 앞섰습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d666e5b40465ce1d8b099fca6877d12f4a9c18569d29ac3c63db8c396daab672",
        "publishedAt": 1789151766,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 0.06% -수수료 배당 ETF는 웅장한 7 주식을 소유하지 않고 S&P 500을 16% 전일 대비 이기고 있습니다 - 24/7 Wall St.",
        "Skip to content ❚❚ At close S&P 500 7,657.20 +0.80% Dow Jones 52,547.40 +0.95% Nasdaq 100 29,372.00 +0.89% Russell 2000 2,903.75 +0.50% S&P 500 7,657.20 +0.80% Dow Jones 52,547.40 +0.95% Nasdaq 100 29,372.00 +0.89% Russell 2000 2,903.75 +0.",
        "토니 동 지음 2026년 9월 11일 오후 2시 36분 (동부 표준시) · 4분 읽음 다른 주식 포트폴리오의 개념에는 성장 주식, 가치 주식 및 회색 배경의 배당 주식이 포함됩니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.06%, 16%, 0.80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.06%, 16%, 0.80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5f47fa3d53f67315586e",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SNDK",
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
      "headline": "Storage Stocks Slide as Profit Taking Follows Big Run: Seagate Falls 4%, SanDisk Drops 3%, Micron Holds Flat",
      "headlineKo": "큰 폭의 이익실현으로 인해 스토리지 주가 하락: Seagate는 4% 하락, SanDisk는 3% 하락, Micron은 보합세 유지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=19669bdceec557f3347931c3fca94a891691f1bbe799d183a42ad2658a933bd7",
        "publishedAt": 1789149950,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Storage Stocks Slide as Profit Taking Follows Big Run: Seagate Falls 4%, SanDisk Drops 3%, Micron Holds Flat - 24/7 Wall St.",
        "Skip to content ❚❚ At close S&P 500 7,657.20 +0.80% Dow Jones 52,547.40 +0.95% Nasdaq 100 29,372.00 +0.89% Russell 2000 2,903.75 +0.50% S&P 500 7,657.20 +0.80% Dow Jones 52,547.40 +0.95% Nasdaq 100 29,372.00 +0.89% Russell 2000 2,903.75 +0.",
        "By David Moadel Published September 11, 2026, 2:05pm ET · 3 min read Market Movers desk."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 3%, $827.88 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, 3%, $827.88 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "33d638a2660a9a252df8",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Lam Research Lifts 2026 WFE Outlook as AI Demand Strains Fab Capacity",
      "headlineKo": "Lam Research, AI 수요로 인해 Fab 용량이 부담됨에 따라 2026년 WFE 전망 상향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4dbc75a57c4e859b98ec8c7067a71a973246a7f1393faa131dee7f0b8e4dcd6f",
        "publishedAt": 1789149749,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research, AI 수요에 부담을 주면서 2026년 WFE 전망 상향",
        "MarketBeat Media, LLC의 이미지를 닫습니다.",
        "핵심 포인트 Lam Research는 지속적인 AI 수요와 8~10개의 새로운 최첨단 팹에 대한 기대에 힘입어 2026년 웨이퍼 제조 장비 지출 전망을 1,350억~1,400억 달러에서 1,500억 달러 초반으로 상향 조정했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $29.97, $150 billion, $135 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $29.97, $150 billion, $135 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b490c1d79e51dbdcac52",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET",
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
      "headline": "Ciena Climbs 5% as Post-Earnings Selloff Reverses; Arista Networks Rises 5%, Cisco Jumps 4%",
      "headlineKo": "Ciena는 실적 후 매도세가 반전되면서 5% 상승했습니다. Arista Networks는 5% 상승, Cisco는 4% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f504163a053872035617a038c2655479851d015da5a93309fdd52baeab64549",
        "publishedAt": 1789149413,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Ciena는 실적 후 매도세가 반전되면서 5% 상승했습니다. Arista Networks는 5% 상승, Cisco는 4% 상승 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,619.40 −0.49% Dow Jones 52,481.60 −0.13% Nasdaq 100 29,007.60 −1.24% Russell 2000 2,898.45 −0.18% S&P 500 7,619.40 −0.49% 다우존스 52,481.60 −0.13% 나스닥 100 29,007.60 −1.24% 러셀 2000 2,898.45 −0.",
        "작성자 David Moadel 2026년 9월 11일 오후 1시 56분(ET) 게시 · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 4%, $351.38 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 5%, 4%, $351.38 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "ee75b870b1630d5371d3",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Should Qualcomm Stockholders Worry About Its Shrinking Revenue?",
      "headlineKo": "Qualcomm 주주들은 수익 감소를 걱정해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=01e42f1321f025e25fa8da462ddcaebaec4d00e0a93859640c3ff3f6ea36ce7f",
        "publishedAt": 1789149146,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm 주주들은 수익 감소를 걱정해야 합니까?",
        "| Trefis Qualcomm 주주들은 수익 감소를 걱정해야 할까요?",
        "2026년 9월 11일 · Trefis 팀 QCOM YTD +8.0% SPY YTD +12.4% QQQ YTD +16.5% QCOM 분석 → Qualcomm(QCOM)은 지난 12개월 동안 매출 성장이 1.9%에 그쳤습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.0%, 12.4%, 16.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QCOM에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 8.0%, 12.4%, 16.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "6da6b252d71695f3a84d",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
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
      "headline": "Arm vs. Sandisk: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Arm 대 Sandisk: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e47286077fd301639ce641c0d8fefbd50888a95a4765e15ee649e8e62d9f0855",
        "publishedAt": 1789146508,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 참여하세요. 인공 지능이 전문적인 처리와 대규모 저장을 모두 요구함에 따라 반도체 환경이 변화하고 있습니다.",
        "Arm( ARM -9.74% )과 Sandisk( SNDK -4.98% ) 중에서 결정하려면 주기적 하드웨어 성장에 대비하여 프리미엄 아키텍처 우위를 저울질해야 합니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 9.74%, 4.98%, $ 239.01 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 9.74%, 4.98%, $ 239.01 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "53061f8dac875021ea6f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Expands Into Rack-Scale AI as Agentic Workloads Boost CPU Demand",
      "headlineKo": "에이전트 워크로드로 인해 CPU 수요가 증가함에 따라 AMD는 랙 규모 AI로 확장합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0958853592671536afdfcf41cb78376660066b80a22ed32b8d2de6a7147ae110",
        "publishedAt": 1789146123,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD는 에이전트 워크로드로 CPU 수요를 높이면서 랙 규모 AI로 확장합니다. 주요 콘텐츠로 건너뛰기 → 1달러 미만... 월스트리트는 이미 이에 대해 알고 있습니다(Crypto 101 미디어에서)(광고) AMD는 에이전트 워크로드가 CPU 수요를 높이면서 랙 규모 AI로 확장합니다.",
        "MarketBeat Media, LLC의 이미지를 닫습니다.",
        "핵심 포인트 AMD는 Helios 시스템 및 MI455 제품과 같은 완전한 데이터 센터 솔루션을 위해 칩을 넘어 랙 규모 AI 시스템 및 소프트웨어로 확장하고 CPU, GPU 및 네트워킹을 조정하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1, $220 billion, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1, $220 billion, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2ef8b4a9aeb1f4e391a9",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "AMD",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The Better Nvidia Killer: Broadcom or AMD?",
      "headlineKo": "더 나은 Nvidia Killer: Broadcom 또는 AMD?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=94e47a2c283974fa41a19a7c19875f7088b5dbb3c84a3584136eda05e5e6d009",
        "publishedAt": 1789144812,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "더 나은 Nvidia Killer: Broadcom 또는 AMD?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,657.20 +0.80% Dow Jones 52,547.40 +0.95% Nasdaq 100 29,372.00 +0.89% Russell 2000 2,903.75 +0.50% S&P 500 7,657.20 +0.80% 다우존스 52,547.40 +0.95% 나스닥 100 29,372.00 +0.89% 러셀 2000 2,903.75 +0.",
        "Broadcom과 AMD는 둘 다 폭발적인 AI 성장을 기록했고 둘 다 하이퍼스케일러를 고객으로 확보하고 있지만 실제로 Nvidia를 AI 컴퓨팅의 왕으로 몰아낸 설득력 있는 사례는 단 한 곳뿐입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $16.7 billion, 221%, 54% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $16.7 billion, 221%, 54% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9542a22c08443089e656",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Lam Research Sees Sold-Out Chip Demand, Targets Capacity and AI Service Gains",
      "headlineKo": "Lam Research는 매진된 칩 수요를 확인하고 용량 및 AI 서비스 이익을 목표로 삼고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fbb7649df533dc71d3586e35a5c2dfda8b3be77f5a9757095615a9a3f59d92ea",
        "publishedAt": 1789142613,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research는 매진된 칩 수요, 목표 용량 및 AI 서비스 이익을 확인합니다. 주요 콘텐츠로 건너뛰기 → 옵션을 통해 더 적은 자본으로 더 많은 작업을 수행할 수 있는 방법(Base Camp Trading에서) (광고) Lam Research는 매진된 칩 수요, 목표 용량 및 AI를 확인합니다.",
        "MarketBeat Media, LLC의 이미지를 닫습니다.",
        "핵심 포인트 반도체 장비 수요는 여전히 매우 강합니다. Lam Research에 따르면 업계는 \"기본적으로 매진\"되었으며 내년 말까지 주요 고객에게 8~10개의 새로운 클린룸이 예상됩니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 51%, 52%, 50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 51%, 52%, 50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bab8029cfc1f90897e0d",
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
      "headline": "Bloom Energy Climbs 7% as Fuel Cell Bid Spreads Beyond Its S&P 500 Add, FuelCell Energy Rises 4%, Plug Power Inches Higher",
      "headlineKo": "Bloom Energy는 연료 전지 입찰이 S&P 500 Add를 넘어 확산되면서 7% 상승하고 FuelCell Energy는 4% 상승하고 플러그 전력 인치는 더 높아집니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c7bd4cf79d2d40131e37e487935b744a85c66c3302347c88aba1c430f9f020e",
        "publishedAt": 1789141745,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bloom Energy는 연료 전지 입찰가가 S&P 500 Add를 넘어 확산됨에 따라 7% 상승하고, FuelCell Energy는 4% 상승하고, 플러그 전력 인치는 더 높아집니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,657.20 +0.80% Dow Jones 52,547.40 +0.95% Nasdaq 100 29,372.00 +0.89% Russell 2000 2,903.75 +0.50% S&P 500 7,657.20 +0.80% 다우존스 52,547.40 +0.95% 나스닥 100 29,372.00 +0.89% 러셀 2000 2,903.75 +0.",
        "작성자: David Moadel 2026년 9월 11일 오전 11시 49분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 4%, 0.80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 7%, 4%, 0.80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fefd486f5309387c2330",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "BE",
      "relatedTickers": [
        "AMD",
        "BE",
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
      "headline": "AMD, BE, CRWV In Focus: Situational Awareness Has Been Reportedly Buying Options Tied To These Stocks",
      "headlineKo": "AMD, BE, CRWV에 초점: 상황 인식이 이러한 주식과 관련된 옵션을 구매하는 것으로 보고됨",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=714d14fc03292749fb6230cbe86b6010bac8821b4abcd12b5ab43fc3b3fef54f",
        "publishedAt": 1789141691,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD, BE, CRWV 초점: 상황 인식이 이러한 주식과 관련된 옵션을 구매하는 것으로 보고됨 신규 에이전트 연결 동향 뉴스 수익 모든 DIA 0.38% SPY 0.32% QQQ 0.26% 추세 RYCEY 3.26% GLW 0.37% FPS 2.27% SPY 0.32% VTI 0.1",
        "AMD, BE, CRWV 집중: 상황 인식은 이러한 주식과 관련된 옵션을 구매한 것으로 보고되었습니다. 금요일 CNBC 보고서에 따르면 상황 인식은 SK Hynix, SanDisk 및 Roundhill Memory ETF와 같은 이름에서도 활성화되었습니다.",
        "해당 분기 동안 Blackstone의 기업 사모 펀드는 6.2% 상승했습니다 | 대표 이미지 출처: Pexels Arnab Paul · Stocktwits 2026년 9월 11일 게시 | 오전 11:48 EDT 공유 · 우리를 추가하세요 Leopold Aschenbrenn 여부는 확실하지 않습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.32%, 0.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "BE에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.32%, 0.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "0f3136c2e6e829a7142c",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "NVDA",
        "QCOM"
      ],
      "relatedEntities": [
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
      "headline": "Qualcomm’s AWS Deal Takes Aim at Nvidia, But Comes With Fine Print",
      "headlineKo": "Qualcomm의 AWS 거래는 Nvidia를 겨냥하지만 작은 글씨로 제공됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ae03f3aa2cf27bf64944edc0c724f62ad65a535cc1bd99a0ca07f2b3e5fcb34",
        "publishedAt": 1789141205,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm’s AWS Deal Takes Aim at Nvidia, But Comes With Fine Print",
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
      "id": "6c39123df96e005123c3",
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
      "headline": "Coherent (COHR) Down 10.4% Since Last Earnings Report: Can It Rebound?",
      "headlineKo": "Coherent (COHR)는 지난 수익 보고서 이후 10.4% 하락: 반등할 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0fdb852a0c6f0c18d927e3e9cb22b3edde1db3592af4b0fcf1fbee25ceb83a6c",
        "publishedAt": 1789140602,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Coherent (COHR) Down 10.4% Since Last Earnings Report: Can It Rebound?",
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
      "id": "69916ef230062d0fe05b",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "QCOM"
      ],
      "relatedEntities": [
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm’s AI Ambitions Get a Boost From Amazon Partnership",
      "headlineKo": "Qualcomm의 AI 야망은 Amazon 파트너십을 통해 강화됩니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7001ae59ce31cacb4e3e5d607e1bd8ca8bc96498d91d1f178b68f4096bd71390",
        "publishedAt": 1789139537,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm의 AI 야망은 Amazon 파트너십을 통해 강화됩니다"
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
      "id": "167d9898cbfc6a8a0c10",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "AMZN",
        "QQQ",
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
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
      "headline": "Tesla’s Drag on XLY Was Softened by Amazon’s Gain; QQQ Felt Almost Nothing",
      "headlineKo": "XLY에 대한 Tesla의 끌림은 Amazon의 이익으로 인해 완화되었습니다. QQQ는 거의 아무것도 느끼지 못했습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7e352130308e398c902be2617def5fb7f8a1212ef836029354a8b8fbd6505ca7",
        "publishedAt": 1789128337,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "XLY에 대한 테슬라의 끌림은 아마존의 이득에 의해 부드러워졌습니다. QQQ는 거의 아무것도 느끼지 못했습니다 - 24/7 Wall St.",
        "콘텐츠로 건너뛰기 닫기 ❚❚ S&P 500 7,610.40 − 0.61% 다우존스 52,368.60 − 0.34% 나스닥 100 28,913.20 − 1.56% 러셀 2000 2,890.90 − 0.44% S&P 500 7,610.40 − 0.61% 다우존스 52,368.60 − 0.34% 나스닥 100 28,913.20 − 1.56% 러셀 2000 2,890.90 − 0.",
        "그 이유는 주식 자체와 관련이 없으며 하나의 숫자가 묻혀있는 모든 것과 관련이 없습니다... Trey Thoelcke 지음 2026 년 9 월 11 일 오전 8시 5 분 (동부 표준시) · 3 분 읽기 1 개의 주식, 두 개의 매우 다른 운명."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.61%, 0.34%, 1.56% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.61%, 0.34%, 1.56% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e8331ee4f3e57b2e1a42",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC"
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
      "headline": "JPMorgan names KLA top chip-equipment pick, lifts WFE forecasts",
      "headlineKo": "JPMorgan은 KLA를 최고의 칩 장비로 선정하고 WFE 예측을 상향 조정했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6f80b9a6d7d77090a4f167b42491b3080d1c369489ee116ef60561863a89d62",
        "publishedAt": 1789126456,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JPMorgan names KLA top chip-equipment pick, lifts WFE forecasts",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 KLAC의 사업과 관련된 'JPMorgan names KLA top chip-equipment pick, lifts WFE forecasts' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "KLAC",
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
      "id": "79e3118d486558c163bb",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET"
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
      "headline": "Arista Networks Sees AI Demand Fueling 40% Growth, $9.6B in Supply Commitments",
      "headlineKo": "Arista Networks는 AI 수요가 40% 성장을 촉진하고 공급 약속에서 96억 달러를 달성할 것으로 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5898f504d9dcc315e780d2ffa96a7f77ff5c17af967465c98111600f7bf90bae",
        "publishedAt": 1789124524,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista Networks는 AI 수요가 40% 성장을 촉진하고 공급 약속에서 96억 달러를 달성할 것으로 보고 있습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "9a14a2e2de33afa1c32c",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "MU",
        "ORCL",
        "QQQ",
        "SPY",
        "TSLA"
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
      "headline": "Nasdaq, Dow, S&P 500 Futures Rise After 4-Day Market Slide As CPI Looms Large: ORCL, ADBE, MU, TSLA, RKLB, IBRX, HOOD, GME In Focus",
      "headlineKo": "Nasdaq, Dow, S&P 500 선물은 CPI가 커지면서 4일간의 시장 하락 후 상승: ORCL, ADBE, MU, TSLA, RKLB, IBRX, HOOD, GME 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5743c1cd4f6a2ed60b6deedbfb832a269a672180158ecab790803d669582bf9b",
        "publishedAt": 1789115632,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nasdaq, Dow, S&P 500 선물은 CPI가 커지면서 4일간의 시장 하락 후 상승: ORCL, ADBE, MU, TSLA, RKLB, IBRX, HOOD, GME 초점 신규 에이전트 연결 동향 뉴스 수입 전체 DIA 0.62% SPY 0.62% QQQ 0.64% 추세 ORCL 7.02% USO 3.57",
        "CPI가 커지면서 Nasdaq, Dow, S&P 500 선물은 4일간의 시장 하락 이후 상승: ORCL, ADBE, MU, TSLA, RKLB, IBRX, HOOD, GME In Focus Stocktwits에 대한 소매 감정은 8월 CPI를 앞두고 SPY 및 QQQ에 대해 약세로 변했습니다.",
        "나스닥 로고 표지판이 2026년 8월 7일 미국 뉴욕에서 보입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.62%, 0.64%, 7.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.62%, 0.64%, 7.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e885a91801869d5e33f4",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AMZN",
        "AVGO",
        "MU",
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
      "headline": "Andy Jassy Just Made a Move That Should Excite Micron and Broadcom Investors",
      "headlineKo": "Andy Jassy는 Micron과 Broadcom 투자자들을 흥분시킬 조치를 취했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=068df1e7dae22bbc3a21d7901108c8b19c7811d42c957801818ae2c38ff8cf8d",
        "publishedAt": 1789114980,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Andy Jassy는 Micron과 Broadcom 투자자들을 흥분시킬 만한 조치를 취했습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Amazon( AMZN -0.20% )은",
        "또한 책, 영화, 중요한 스포츠 경기 관람 등 엔터테인먼트의 핵심 제공업체가 되었습니다.",
        "그러나 요즘 회사의 엄청난 성장 원천은 실제로 다른 비즈니스, 즉 클라우드 컴퓨팅 부문인 Amazon Web Services(AWS)에서 비롯되었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.90%, 0.97%, 0.97 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.90%, 0.97%, 0.97 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a39b70f250160cbd18b6",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMD",
        "AMZN",
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
      "headline": "The Private LTE/5G Network Market - 4th Edition Now Available — See Why Nokia, AWS, and Microsoft Are Making Radically Different Bets as the Market Races Toward $12 Billion",
      "headlineKo": "사설 LTE/5G 네트워크 시장 - 제4판 출시 - 시장이 120억 달러 규모를 향해 경쟁하면서 Nokia, AWS, Microsoft가 근본적으로 다른 투자를 하고 있는 이유를 알아보세요",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b60bdf1fcc8c2cb653ff22e4a9d990230ef9b20d92985f0e176af8965ff1b73b",
        "publishedAt": 1789114080,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 MSFT의 사업과 관련된 'The Private LTE/5G Network Market - 4th Edition Now Available — See Why Nokia, AWS, and Microsoft Are Making Radically Different Bets as the Market Races Toward $12 Billion' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "251efb9a6aa19939813b",
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
      "headline": "Fourth Red Session Runs Into a Foldable-Powered Apple as Oil Breaks $105 and Oracle Ships a $28.5 Billion AI Bill",
      "headlineKo": "네 번째 레드 세션은 석유 가격이 105달러를 돌파하고 오라클이 285억 달러의 AI 청구서를 발송함에 따라 폴더블 구동 Apple로 실행됩니다.",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=353e4ae02b79598186ded3dea272fb32a65f2f8712e0a0e9c1c4dcc2a3721420",
        "publishedAt": 1789113954,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 AAPL의 사업과 관련된 'Fourth Red Session Runs Into a Foldable-Powered Apple as Oil Breaks $105 and Oracle Ships a $28.5 Billion AI Bill' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "1684b63e58e308aa8859",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "SNDK"
      ],
      "relatedEntities": [
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SK Hynix, Samsung Shares Dip In Korea After DeepSeek Debuts AI Tech That Uses Less Memory – Micron, SanDisk Hold Up",
      "headlineKo": "DeepSeek가 더 적은 메모리를 사용하는 AI 기술을 선보인 후 SK 하이닉스, 삼성 주가 하락 – Micron, SanDisk 보류",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d78fb238b202010fce08491b48f05fb586478d484c12b19870b892758e086e0f",
        "publishedAt": 1789111091,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "DeepSeek가 더 적은 메모리를 사용하는 AI 기술을 선보인 후 SK 하이닉스, 삼성 주가 하락 – Micron, SanDisk 보류"
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
      "id": "24d08285b1bb45a68c63",
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
      "headline": "Oracle Q1 FY27 net income rises 60% to $4.7bn as cloud revenues surge",
      "headlineKo": "Oracle Q1 FY27 순이익은 클라우드 매출 급증으로 60% 증가한 47억 달러",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a1d868ded34fa9a74ddaca871c16625041d95a8aaf7c301ef8b91b01a299d6f",
        "publishedAt": 1789110568,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle Q1 FY27 net income rises 60% to $4.7bn as cloud revenues surge",
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
      "id": "510b4416b3d901c0dbb7",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "INTC",
        "SPY",
        "VRT"
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
      "headline": "1 Big Reason Vertiv's New Acquisition Could Supercharge Its AI Dominance",
      "headlineKo": "Vertiv의 새로운 인수로 AI 지배력이 강화될 수 있는 1가지 큰 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7914867a607fbdd0dec3ac0321718a9b05092375705847899fd3ebda824bf9d9",
        "publishedAt": 1789107900,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "1 Big Reason Vertiv's New Acquisition Could Supercharge Its AI Dominance | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool The massive artificial intelligence (AI) data center build",
        "According to JLL Research, global data center investment could reach $3 trillion by 2030.",
        "This massive infrastructure spending has created a slew of winners as hyperscalers look to secure everything from chips to power to thermal management solutions."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $3 trillion, 3.60%, 3.60 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VRT에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $3 trillion, 3.60%, 3.60 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "1d5722880c458d042f81",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Mark Zuckerberg's Meta Is Charging Consumers for a Personal AI Agent for the First Time. Here's What $20 and $100 a Month Could Add to Revenue.",
      "headlineKo": "Mark Zuckerberg의 Meta는 처음으로 개인 AI 에이전트에 대해 소비자에게 비용을 청구하고 있습니다. 한 달에 20달러와 100달러가 수익에 추가될 수 있는 사항은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5921544e68da518eb3036a03cc407e051d13cb526b77ed590670b2df610a88f7",
        "publishedAt": 1789102621,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Mark Zuckerberg의 Meta는 처음으로 개인 AI 에이전트에 대해 소비자에게 비용을 청구하고 있습니다.",
        "한 달에 20달러와 100달러가 수익에 추가될 수 있는 사항은 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool Meta Platform에 참여( META -1.42% )가 9월에 Muse를 출시했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $20, $100, 98% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $20, $100, 98% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cb2a768c3576e7a2346b",
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
      "headline": "Crypto Billionaire Finds iPhone Duo Pretty 'Good' For Gawking at  Financial Charts — Crypto Prediction Market is Already Betting on The Next Big Apple Gadget",
      "headlineKo": "Crypto Billionaire는 금융 차트에서 iPhone Duo가 매우 '좋다'고 생각합니다. Crypto 예측 시장은 이미 차세대 Big Apple 가제트에 베팅하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ae5798ccafa694e75c97823d072ed20c01611aca833199b88692afad6ff3e7b",
        "publishedAt": 1789101321,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 AAPL의 사업과 관련된 'Crypto Billionaire Finds iPhone Duo Pretty 'Good' For Gawking at  Financial Charts — Crypto Prediction Market is Already Betting on The Next Big Apple Gadget' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9e1dfdd2c66d85b0b2cb",
      "schemaVersion": 1,
      "eventType": "competitor_supply_contract",
      "eventLabel": "경쟁사 공급 계약",
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
      "headline": "Nvidia's Chinese Rival Enflame Soars Over 220% in Shanghai Debut As Investors Bet on Domestic AI Chips",
      "headlineKo": "투자자들이 국내 AI 칩에 베팅함에 따라 Nvidia의 중국 라이벌 불길은 상하이 데뷔에서 220% 이상 치솟았습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be4f697e891bd7d503f6930fada22d564f63d4ab90b90b87d64dbf272bd60396",
        "publishedAt": 1789100713,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 NVDA의 사업과 관련된 'Nvidia's Chinese Rival Enflame Soars Over 220% in Shanghai Debut As Investors Bet on Domestic AI Chips' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "3fbbd574689574839e71",
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
      "headline": "Google Raises Its Investments in Finland to Support AI Infrastructure Growth",
      "headlineKo": "Google, AI 인프라 성장 지원을 위해 핀란드에 투자 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=371697d4a2d5c014aa21f5f16d57654add54d4d62fb24faa3ff6d1ffb87d8b5b",
        "publishedAt": 1789097420,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 GOOGL의 사업과 관련된 'Google Raises Its Investments in Finland to Support AI Infrastructure Growth' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "5ec2ba8eae07bfc1955b",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "JPMorgan resets Meta stock price target for the rest of 2026",
      "headlineKo": "JPMorgan, 2026년 남은 기간 동안 Meta 주가 목표 재설정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5edf0d573199de96bb69f01dcbee171e5d29751485ba5e62e581fbc2360ee9b",
        "publishedAt": 1789096020,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JPMorgan resets Meta stock price target for the rest of 2026",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "9fadff15da6b6b48f615",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The new Apple Watch can take notes on all of your conversations – and it could be controversial",
      "headlineKo": "새로운 Apple Watch는 모든 대화를 메모할 수 있으며 논란의 여지가 있을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b9e1f894999f97b845ec26693aa3c800db0d92c1e1e99c3161592ffa5b919a79",
        "publishedAt": 1789095296,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "새로운 Apple Watch는 모든 대화를 메모할 수 있으며 논란의 여지가 있습니다 | The Independent 등록해 주셔서 감사합니다 자동으로 로그인하려면 페이지를 새로 고치거나 사이트의 다른 페이지로 이동하십시오.",
        "새로운 Apple Watch Series 12 및 Ultra 4가 이번 주에 출시되었으며, 헤드라인을 장식한 iPhone Duo와 함께 다양한 새로운 개선 사항이 적용되었습니다.",
        "그 중 하나는 시계의 센서와 AI 도구를 사용하여 소유자 주변 세계와 스마트하게 상호 작용하는 것을 목표로 하는 Apple이 \"오디오 인텔리전스\"라고 부르는 일련의 새로운 기능입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "ba8a60504553b25aeb8d",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
        "ORCL",
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
      "headline": "CEG, SHEL Stocks Rise Overnight: Constellation Energy To Acquire Rhode Island State Energy Center From Shell For $715M",
      "headlineKo": "CEG, SHEL 주가 밤새 상승: Constellation Energy, Shell로부터 로드아일랜드 주 에너지 센터를 7억 1500만 달러에 인수",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=198c2843212812e718341ca796fb137f93c2f16a250cc84296c4f41d0d5fb20b",
        "publishedAt": 1789089623,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CEG, SHEL Stocks Rise Overnight: Constellation Energy To Acquire Rhode Island State Energy Center From Shell For $715M New Connect your Agent Trending News Earnings All DIA 0.37% SPY 0.65% QQQ 1.60% Trending SLS 13.38% SOXL 16.18% ORCL 4.45",
        "CEG, SHEL Stocks Rise Overnight: Constellation Energy To Acquire Rhode Island State Energy Center From Shell For $715M Constellation Energy announced on Thursday that it would acquire 100% of the Rhode Island State Energy Center from Shell ",
        "logo of Constellation Energy Corporation in front of a screen showing the company's colorful brand logo on August 7, 2025 in Chongqing, China."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $715, 0.37%, 0.65% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $715, 0.37%, 0.65% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6b66663178dafa00feee",
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
      "headline": "Is Eaton Stock Amplifying A Risk You Already Own?",
      "headlineKo": "Eaton 주식이 귀하가 이미 갖고 있는 위험을 증폭시키고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e320e4183282bf98d8260b64f4b0a85fd66033736dd8d281ec591854e727c43",
        "publishedAt": 1789089415,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Is Eaton Stock Amplifying A Risk You Already Own?",
        "| Trefis Is Eaton Stock Amplifying A Risk You Already Own?",
        "September 10th, 2026 · by Trefis Team ETN YTD +34.7% SPY YTD +12.4% XLI YTD +11.4% Analyze ETN → Eaton (ETN) makes the power equipment that goes inside data centers, among much else, and it has climbed 5.0% over the last five trading days w"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 180%, 31.6%, 17.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 180%, 31.6%, 17.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "095f5a4eef9a44d64c92",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "The Robotaxi Race is Spreading, Can Amazon and Alphabet Turn More Cities into Revenue?",
      "headlineKo": "Robotaxi 경주가 확산되고 있습니다. Amazon과 Alphabet이 더 많은 도시를 수익으로 바꿀 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a5b9a3f75fa2a51d01c8ca0137d43e5c57ffe3c74081335e0ed4ea16f5bbc28",
        "publishedAt": 1789088260,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "The Robotaxi Race is Spreading, Can Amazon and Alphabet Turn More Cities into Revenue?",
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
      "id": "43aa0111c11bedb8d1c7",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tech Millionaires Are Pooling Seven-Figure Nvidia and Apple Stakes Into Exchange Funds to Diversify Without Selling a Share. The Seven-Year Lockup Is the Price",
      "headlineKo": "기술 백만장자들은 주식을 팔지 않고도 다각화하기 위해 7자리 숫자의 Nvidia와 Apple 지분을 교환 자금으로 모으고 있습니다. 7년 락업이 대가입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8921289cb1f7b10eb6ba4514047370ed7900e7c9bf6eb93c33fce00878e367cc",
        "publishedAt": 1789084350,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $1.95 million, $2 million, $50,000., $460,000, 921.96%, 15,352.72%, $225.91, 1,241.49%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Tech Millionaires Are Pooling Seven-Figure Nvidia and Apple Stakes Into Exchange Funds to Diversify Without Selling a Share. The Seven-Year Lockup Is the Price' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "5e4f8334592e0ef45a87",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Microsoft Eyes Massive Data Center Push To Triple Computing Power And Solve Capacity Bottlenecks, Says Report",
      "headlineKo": "Microsoft는 대규모 데이터 센터에서 컴퓨팅 성능을 3배로 늘리고 용량 병목 현상을 해결하려고 한다고 보고합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=42140cbf3036b07c534c6dccd40c65f3f8d27804e304f3d5f64d9761dcef5d0c",
        "publishedAt": 1789083026,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft는 대규모 데이터 센터에서 컴퓨팅 성능을 3배로 높이고 용량 병목 현상을 해결한다고 보고합니다. 새로운 에이전트 연결 Trending News Earnings All DIA 0.59% SPY 0.60% QQQ 0.64% Trending ORCL 6.99% USO 3.48% UPST 2.31% IBRX 0.28",
        "Microsoft는 대규모 데이터 센터에서 컴퓨팅 성능을 3배로 높이고 용량 병목 현상을 해결하려고 한다고 보고합니다. Microsoft는 서버 부족 문제를 해결하기 위해 2032년까지 데이터 센터 네트워크 용량을 38기가와트 이상으로 확장할 계획이라고 합니다.",
        "Microsoft 로고는 독일 뮌헨에 있는 Microsoft Deutschland GmbH의 본사 건물에서 볼 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.59%, 0.60%, 0.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.59%, 0.60%, 0.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8785534b3520550a5619",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "PLTR",
      "relatedTickers": [
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Technologies Showcases Sovereign AI Wins With NVIDIA, Cisco and FAA",
      "headlineKo": "Palantir Technologies, NVIDIA, Cisco 및 FAA를 통해 Sovereign AI의 승리 선보여",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca5dfa845c2fc8ad6c69657740ce95cc87875accde629091606d1e92d759759b",
        "publishedAt": 1789081391,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Technologies는 NVIDIA, Cisco 및 FAA와 함께 Sovereign AI의 승리를 선보였습니다. 주요 콘텐츠로 건너뛰기 → 경고: 내일 시장이 열리기 전에 이 5개 주식을 투하하십시오!",
        "(Weiss Ratings에서) (광고) Palantir Technologies, NVIDIA, Cisco 및 FAA와 함께 Sovereign AI의 승리를 선보임 MarketBeat 작성 2026년 9월 10일 기본 소스로 추가 공유 공유 공유 이 기사 링크가 클립보드에 복사되었습니다.",
        "MarketBeat Media, LLC의 이미지를 닫습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $300 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $300 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a48dc088fcaf344ec354",
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
      "headline": "Oracle Q1 Earnings Call Highlights",
      "headlineKo": "Oracle Q1 실적 발표 하이라이트",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1390502f29fb98b63cb070d87187d70db54a81f4f75740cbb825a8b4355a9af5",
        "publishedAt": 1789081390,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle 1분기 실적 발표 하이라이트 | MarketBeat 주요 콘텐츠로 건너뛰기 → Elon Musk의 Hushed FCC Filing.",
        "(Paradigm Press에서) (광고) MarketBeat가 작성한 Oracle Q1 수익 통화 하이라이트 2026년 9월 10일 우선 소스로 추가 공유 공유 이 기사 링크가 클립보드에 복사되었습니다.",
        "MarketBeat Media, LLC의 이미지를 닫습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $19.3 billion, 121% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, $19.3 billion, 121% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bf9c9f550d0b78726e48",
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
      "headline": "Micron Is Down 19% From Its High. History Suggests a $5,000 Investment Today Could Be Worth This Much by 2030.",
      "headlineKo": "마이크론은 고점 대비 19% 하락했습니다. 역사는 현재 5,000달러 투자가 2030년까지 이만큼 가치가 있을 수 있다고 제안합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b442669dc81df38ec9e0cf8f80b14e1323c09e6b782a879a82eac09800d8f41e",
        "publishedAt": 1789081260,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "역사는 현재 5,000달러 투자가 2030년까지 이만큼 가치가 있을 수 있다고 제안합니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 이 글을 쓰는 시점(9월 20일)",
        "8) Micron Technology(MU -4.90%)의 주가는 약 1,017달러에 거래됩니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 19%, $5,000, 4.90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 19%, $5,000, 4.90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "65568d3f42937b70fcde",
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
      "headline": "Nvidia Returned $26 Billion to Shareholders Last Quarter Alone. Here's What That Buys You as an Investor.",
      "headlineKo": "Nvidia는 지난 분기에만 주주들에게 260억 달러를 반환했습니다. 투자자로서 당신에게 도움이 되는 것은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60594551ad8d9d78c1eff0584ec9674abc715f1a4159cc6f4765eb663b4c3999",
        "publishedAt": 1789080600,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia는 지난 분기에만 주주들에게 260억 달러를 반환했습니다.",
        "투자자로서 당신에게 도움이 되는 것은 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia(NVDA -2.27%)의 2027 회계연도 2분기 보고서에 따르면 회사는 여전히 놀라운 수익을 누리고 있는 것으로 나타났습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $26 Billion, $2.22, $96.22 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $26 Billion, $2.22, $96.22 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0bd757584c3a9f37fae9",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "NVDA",
        "ORCL",
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
      "headline": "S&P 500, Dow, Nasdaq End Lower As Surging Oil Raises Odds For A September Rate Hike — ORCL, ADBE, M, NVDA, UBER In Focus",
      "headlineKo": "S&P 500, 다우, 나스닥은 유가 상승으로 인해 9월 금리 인상 가능성이 높아지면서 하락 마감 — ORCL, ADBE, M, NVDA, UBER 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6f7112df5d0bc66655c37226de196122dd0ace4aa17d5d84553beb11c860d282",
        "publishedAt": 1789080404,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, 다우, 나스닥은 유가 상승으로 인해 9월 금리 인상 가능성이 높아지면서 하락 마감 — ORCL, ADBE, M, NVDA, UBER 초점 신규 에이전트 연결 동향 뉴스 수입 전체 DIA 0.29% SPY 0.42% QQQ 1.08% 추세 GME 6.13% SPY 0.42% USO 5.27%",
        "S&P 500, 다우, 나스닥은 유가 상승으로 9월 금리 인상 가능성이 높아지면서 하락 마감 — ORCL, ADBE, M, NVDA, UBER In Focus 그러나 S&P 500 선물은 소폭 상승했고 다우와 나스닥 선물은 약간 완화되는 등 선물 상황이 엇갈렸습니다.",
        "트레이더들이 2026년 7월 23일 뉴욕시 뉴욕증권거래소(NYSE) 1층에서 일하고 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 70%, 0.5%, 2.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 70%, 0.5%, 2.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bd18d13bfb884c49f201",
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
      "headline": "Compared to Estimates, Oracle (ORCL) Q1 Earnings: A Look at Key Metrics",
      "headlineKo": "추정치와 비교한 Oracle(ORCL) 1분기 수익: 주요 지표 살펴보기",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0632e0502b6df16a8e79ae196eebdce5c9b634db3d042cf1a91cd6c50e5e326c",
        "publishedAt": 1789077602,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Compared to Estimates, Oracle (ORCL) Q1 Earnings: A Look at Key Metrics",
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
      "id": "161deb1b67090d4f0d03",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Stock Jumps As Earnings Beat Estimates, Cloud Infrastructure Growth Accelerates",
      "headlineKo": "수익이 예상치를 상회하고 클라우드 인프라 성장이 가속화되면서 Oracle 주식이 급등했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c92b44fb96a16c7ae9a24b56155d566c285356a3403d5658da39e15690b342c0",
        "publishedAt": 1789075856,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "수익이 예상치를 상회하고 클라우드 인프라 성장이 가속화되면서 Oracle 주식이 급등했습니다."
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
      "id": "42ac9fc651062967543d",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML",
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
      "headline": "What is ASML? The company that makes chip-printing machines",
      "headlineKo": "ASML이란 무엇입니까? 칩프린팅 기계를 만드는 회사",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a87363ccf34ece186929d74d9b5e5ad3dac5336a5a1c17d905315db560915648",
        "publishedAt": 1789074049,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "The company that makes chip-printing machines Business News What is ASML?",
        "Founded in 1984 in the Netherlands, ASML holds a monopoly on the extreme ultraviolet lithography machines for advanced semiconductor manufacturing By Ambia Staley · 2 min read · Updated September 10, 2026 Add QZ to Google Dutch company ASML",
        "ASML $ASML is a Dutch semiconductor equipment company that manufactures the machines used to print circuits onto silicon chips."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ASML에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "cd066e21f1183636f2e8",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "A Client Put $30K Into a Managed Amazon Storefront She Hardly Logged Into. It Now Clears 6 Figures a Month.",
      "headlineKo": "클라이언트가 거의 로그인하지 않은 Amazon 관리형 매장에 30,000달러를 투자했습니다. 이제 한 달에 6자리 숫자가 삭제됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34c4b6b04d86bda88387f3fe8bae6f716cec4d9597d977cb2ba9ba30194c1d8a",
        "publishedAt": 1789074000,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "한 고객이 $30,000 투자를 한 달에 6자리 수익으로 전환한 방법 주요 내용으로 건너뛰기 귀하는 미국 웹사이트를 보고 계십니다.",
        "에디션 사이트로 이동 뉴스레터 검색 검색 기업가 기여자가 표현한 의견은 각자의 의견입니다.",
        "이 게시물을 들어보세요 주요 사항 부업에는 시간이 필요하지만 관리되는 디지털 자산은 자본을 요구하므로 방해가 되지 않습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $30, $30,000, $165,291.14 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $30, $30,000, $165,291.14 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3909d56059b24e5312be",
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
      "headline": "Is Applied Materials Stock Amplifying A Risk You Already Own?",
      "headlineKo": "어플라이드 머티리얼즈 주식이 귀하가 이미 갖고 있는 위험을 증폭시키고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4d701f55bc401f0693322b42b74c3abb7844b0fc1bab9b1a7edd39f960be9ea",
        "publishedAt": 1789070649,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티리얼즈 주식이 귀하가 이미 갖고 있는 위험을 증폭시키고 있습니까?",
        "| Trefis는 Applied Materials 주식이 귀하가 이미 갖고 있는 위험을 증폭시키고 있습니까?",
        "2026년 9월 10일 · Trefis Team AMAT YTD +77.3% SPY YTD +11.4% QQQ YTD +15.5% AMAT 분석 → Applied Materials(AMAT)는 지난 5거래일 동안 6.1%를 추가한 반면 S&P 500은 0.1%를 얻었으며 이와 같은 상승으로 자금이 유입되었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 267%, 80%, $1.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 267%, 80%, $1.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "93ec7d9d984ae1d9010e",
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
      "headline": "Qualcomm Stock Looks Cheap, But Is The Discount Deserved?",
      "headlineKo": "Qualcomm 주식은 저렴해 보이지만 할인을 받을 만한 가치가 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=231b0f68f8ca7e6ead89d702d975cf56ae17c57ad0d556699b96f5b5468f4e2c",
        "publishedAt": 1789070253,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 QCOM의 사업과 관련된 'Qualcomm Stock Looks Cheap, But Is The Discount Deserved?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "5571442d2d0704473243",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "AMZN Is Betting Bigger On Whole Foods With $230M Investment — But Amazon’s Physical Stores Are Losing Steam",
      "headlineKo": "AMZN은 2억 3천만 달러의 투자로 전체 식품에 더 큰 투자를 하고 있지만 Amazon의 실제 매장은 활력을 잃고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce60885893e1428e238dc0ba35bfaec010118efa1e0bd9e42b8465e6b3714a52",
        "publishedAt": 1789067866,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMZN은 2억 3천만 달러 투자로 전체 식품에 더 큰 투자를 하고 있습니다. 그러나 Amazon의 실제 매장은 힘을 잃고 있습니다. New 에이전트 연결 Trending News Earnings All DIA 0.63% SPY 0.55% QQQ 1.05% Trending ORCL 0.55% USO 7.45% DJT 1.15% ADBE 5.15% R",
        "AMZN은 2억 3천만 달러의 투자로 Whole Foods에 더 큰 투자를 하고 있습니다. 그러나 Amazon의 실제 매장은 증기를 잃고 있습니다. Whole Foods는 2017년 Amazon이 인수한 이후 매출이 40% 이상 증가했으며 현재 550개 이상의 매장을 운영하고 있습니다.",
        "스마트폰 화면에 보이는 로고."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $230, 0.63%, 0.55% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $230, 0.63%, 0.55% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8357bf3fd338a634f4a0",
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
      "headline": "Salesforce Just Gained 23% in a Month: Take Profits, or Buy More?",
      "headlineKo": "Salesforce는 한 달 만에 23%의 이익을 얻었습니다. 이익을 얻겠습니까, 아니면 더 많이 사겠습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ce7561bd7c17367b95bce305d2d55478290487d938679961f00e9562825ab5a",
        "publishedAt": 1789066875,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce는 한 달 만에 23%의 이익을 얻었습니다. 이익을 얻겠습니까, 아니면 더 많이 사겠습니까?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,596.80 −0.62% Dow Jones 52,052.20 −0.74% Nasdaq 100 29,113.70 −1.09% Russell 2000 2,889.28 −1.17% S&P 500 7,596.80 −0.62% 다우존스 52,052.20 −0.74% 나스닥 100 29,113.70 −1.09% 러셀 2000 2,889.28 −1.",
        "세일즈포스(Salesforce)는 폭발적인 분기를 기록하고 나머지 엔터프라이즈 소프트웨어가 하락하는 동안 급등했습니다. 그러나 실제로 수익을 앞지른 원인을 면밀히 살펴보면 모든 CRM 주주들이 다음 주 Dreamforce 이전에 대답해야 할 질문이 제기됩니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 23%, $242.40, 0.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 23%, $242.40, 0.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b34d9fc1d7daa9f9da3d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "NVIDIA vs. AMD After Earnings: Which AI Stock Should You Buy Now?",
      "headlineKo": "수익 후 NVIDIA 대 AMD: 지금 어떤 AI 주식을 사야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dfa0631bc193375c2ca594b4b3dd5b99c37f897ccb776477753063c213adb582",
        "publishedAt": 1789066800,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVIDIA vs. AMD After Earnings: Which AI Stock Should You Buy Now?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMD에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "306676ed234bfce3ab79",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Advanced Micro Devices vs. Nvidia: Which Semiconductor Stock Is a Better Buy in 2026?",
      "headlineKo": "Advanced Micro Devices vs. Nvidia: 2026년에는 어느 반도체 주식이 더 나은 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be51df202b76715f3d9023f36701f4fc1266444f888cdfe485435bd35d0b5a31",
        "publishedAt": 1789066290,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: 2026년에는 어떤 반도체 주식을 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능 혁명이 성숙해짐에 따라 투자자들은 Advanced Micro Devices(AMD -",
        "AMD는 유연한 도전자로 운영되어 데이터 센터 및 게임 콘솔에 필수 칩을 제공하는 동시에 AI 가속기 시장에서 입지를 확대하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $ 503.60, 3.36 %, $ 17.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $ 503.60, 3.36 %, $ 17.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a93e2189a18bd54ab251",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "PLTR",
      "relatedTickers": [
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
      "headline": "Palantir Slides as Nvidia Deal Meets a 55-Times Sales Price",
      "headlineKo": "Nvidia 거래가 55배의 판매 가격을 충족함에 따라 Palantir 슬라이드",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=631a0a72316ab6b87e3fe2f8d5eea6331bc270ad452719dcd8f8dd67f26f6def",
        "publishedAt": 1789065994,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 거래가 55배의 판매 가격을 충족함에 따라 Palantir 슬라이드"
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
      "id": "f027734a71c0c5becc0a",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "INTC",
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
      "headline": "Marvell Technology vs. Broadcom: Comparing Revenue Trends Between These Artificial Intelligence Companies",
      "headlineKo": "Marvell Technology와 Broadcom: 인공 지능 회사 간의 수익 추세 비교",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e649459a66cef5d880c0b73b5ad92c514ef9f9e70d703bf837e45fa0f343c3f5",
        "publishedAt": 1789064227,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom: 인공 지능 기업 간의 수익 추세 비교 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Marvell 기술에 합류: 꾸준하지만 느린 수익 Gr",
        "새로운 최고재무책임자(CFO)를 임명하고 알파벳 소유의 구글과 맞춤형 하드웨어 계약을 체결했으며, 8월 31일 마감된 분기 영업이익률은 17%를 기록했다.",
        "Broadcom: 인프라 운영 확장 및 빠른 분기별 수익 확장 Broadcom( AVGO -0.97% )은 중요 인프라와 함께 고급 하드웨어 구성 요소로 구성된 매우 다양한 글로벌 포트폴리오를 연구, 설계 및 공급합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 17%, 0.97%, 54% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 17%, 0.97%, 54% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b6dd056e20339b7b24e3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "AVGO",
        "INTC",
        "MRVL"
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
      "headline": "Marvell Technology vs. Broadcom: Comparing Revenue Trends Between These Artificial Intelligence Companies",
      "headlineKo": "Marvell Technology와 Broadcom: 인공 지능 회사 간의 수익 추세 비교",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e649459a66cef5d880c0b73b5ad92c514ef9f9e70d703bf837e45fa0f343c3f5",
        "publishedAt": 1789064227,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology와 Broadcom: 인공 지능 회사 간의 수익 추세 비교"
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
          "ticker": "MRVL",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "942ea9bcdb9d47050e68",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Q2 Energy Products and Services Earnings: Quanta (NYSE:PWR) Earns Top Marks",
      "headlineKo": "2분기 에너지 제품 및 서비스 수익: Quanta(NYSE:PWR)가 최고 등급 획득",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb74f1b629b11e0d26dabeb14f9258ec176c192e31d9853cf666bc9199f8caed",
        "publishedAt": 1789064224,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2분기 에너지 제품 및 서비스 수익: Quanta(NYSE:PWR)가 최고 등급 획득"
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
          "ticker": "PWR",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "8a7bbc63ddddf5258849",
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
      "headline": "Is The AI Capex Surge A Threat To Amazon Stock?",
      "headlineKo": "AI Capex 급증이 Amazon 주식에 대한 위협입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48c9520fb49bcbd0e32a8e3325775f2a88e958a41b0db591ced3fb898250437a",
        "publishedAt": 1789063604,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI Capex 급증이 Amazon 주식에 대한 위협입니까?",
        "| Trefis는 AI Capex 급증이 Amazon 주식에 위협이 됩니까?",
        "2026년 9월 10일 · Trefis Team AMZN YTD +9.3% SPY YTD +12.1% XLY YTD -5.6% AMZN 분석 → Amazon.com(AMZN)은 2026년에 약 2,200억 달러의 현금을 자본에 지출할 계획이며, 이는 지난 12개월 동안 7,757억 달러의 매출을 기록할 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 9.3%, 12.1%, 5.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 9.3%, 12.1%, 5.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c25a39baa7f8c002cfa3",
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
      "headline": "Alphabet Edges Higher as $15 Billion Nuclear Bet Locks In AI Power",
      "headlineKo": "150억 달러 규모의 핵 베팅으로 AI 파워가 잠기면서 알파벳 가장자리가 더 높아졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ff3a802637a90748c5c85f5658206cc5b6a37b5ccb9c36920eeb41183714e722",
        "publishedAt": 1789062653,
        "collectedAt": 1789455614.4887621
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
        "이 기사는 GOOGL의 사업과 관련된 'Alphabet Edges Higher as $15 Billion Nuclear Bet Locks In AI Power' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a3c962e2ef105d1c61c9",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Google Is Buying Half a Nuclear Plant’s Output Through 2049. Cheap Power Just Became the Real AI Moat.",
      "headlineKo": "Google은 2049년까지 원자력 발전소 생산량의 절반을 구매합니다. 저렴한 전력이 진정한 AI 해자가 되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3a9604e87009b109a4093758319b74e6973ffb0b0b76b2b0c9d507478f176b55",
        "publishedAt": 1789062464,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google은 2049년까지 원자력 발전소 생산량의 절반을 구매합니다.",
        "저렴한 전력이 진정한 AI 해자가 되었습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,593.80 −0.66% Dow Jones 51,991.20 −0.86% Nasdaq 100 29,126.60 −1.05% Russell 2000 2,889.58 −1.16% S&P 500 7,593.80 −0.66% 다우존스 51,991.20 −0.86% 나스닥 100 29,126.60 −1.05% 러셀 2000 2,889.58 −1."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $15 billion, $175, $185 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $15 billion, $175, $185 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "917d980336044c494c97",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Can Marvell Stock Make You Money Before Its Hyperscaler Deal Pays Off?",
      "headlineKo": "Marvell 주식이 하이퍼스케일러 거래가 성사되기 전에 수익을 창출할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3cf943b625a26c82b30c95218f1f9daead72b084e46bbab03fa17beb78de046",
        "publishedAt": 1789061575,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell 주식이 하이퍼스케일러 거래가 성사되기 전에 수익을 창출할 수 있습니까?",
        "| Trefis는 하이퍼스케일러 거래가 성사되기 전에 Marvell 주식으로 돈을 벌 수 있습니까?",
        "2026년 9월 10일 · Trefis Team MRVL YTD +177.0% SPY YTD +12.1% QQQ YTD +16.8% MRVL 분석 → Marvell Technology(MRVL)는 $235.01에 거래되며 거래 분석가 규모가 최대 $120 bi인 주요 하이퍼스케일러와의 계약을 확대했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 177.0%, 12.1%, 16.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 177.0%, 12.1%, 16.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bd113307be6ee4f49cb3",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
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
      "headline": "An Nvidia Move Just Put AMD and Intel on the Defensive",
      "headlineKo": "Nvidia의 움직임으로 AMD와 Intel이 방어에 나섰습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c5c71e12ed2a7001ce14f1a7138094115f207f2f256a264a24ae40084536ace",
        "publishedAt": 1789061160,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia의 움직임으로 AMD와 Intel이 방어에 나섰습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia( NVDA -2.29% )는 인공지능 분야에서 선구적인 역할을 해왔습니다.",
        "중요한 것은 엔비디아가 AI 칩 시장에서 지배력을 유지해 왔으며, 이는 매출과 수익이 크게 증가한 최근 결과에서 입증되었습니다.",
        "Nvidia 투자자들에게 좋은 소식은 Nvidia가 이 수익성 있는 시장을 계속해서 지배할 수 있도록 올바른 조치를 취하고 있다는 것입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, $220 billion, 2.29 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 50%, $220 billion, 2.29 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1a4232af56d9ee3031ba",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Should You Buy Meta Stock For Cash Flow It Plans To Spend?",
      "headlineKo": "지출할 현금 흐름을 위해 메타 주식을 구입해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90591b88066e21ffa21ae683a8dfb3d3ac603a8323fda952241b93119d2c2801",
        "publishedAt": 1789060696,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지출할 현금 흐름을 위해 메타 주식을 구입해야 합니까?",
        "| Trefis는 지출할 현금 흐름을 위해 메타 주식을 구매해야 합니까?",
        "2026년 9월 10일 · Trefis 팀 META YTD -0.8% SPY YTD +12.1% XLC YTD -5.6% META 분석 → 메타 플랫폼(META)은 약 $653에 거래됩니다. 이는 52주 최고치보다 약 16% 낮으며 S&P의 15.2에 비해 영업 현금 흐름은 11.3배입니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 28%, 57.1%, 21.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 28%, 57.1%, 21.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bb616618c351a0d96219",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "AMZN",
        "QCOM"
      ],
      "relatedEntities": [
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
      "headline": "Qualcomm Stock Spikes as It Bags Massive Data Center Deal With Amazon",
      "headlineKo": "퀄컴, 아마존과 대규모 데이터센터 거래 성사로 주가 급등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=36007f2444a9d2baeaa9634ac59d05b0cd85d36b5c19635ed06e6cabab1394da",
        "publishedAt": 1789060114,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm Stock Spikes as It Bags Massive Data Center Deal With Amazon",
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
      "id": "cf22f0a365a72bab755d",
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
      "headline": "Six Days After Cramer Warned Nuclear Is Too Hard to Build, Google Signed Its First Nuclear Deal Ever",
      "headlineKo": "크레이머가 원자력은 건설하기 너무 어렵다고 경고한 지 6일 만에 구글은 사상 최초의 원자력 계약에 서명했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a5c99aaf579f1fc73645536adcec9819f9e2fc25c855d0e7e9274d4d0988c50",
        "publishedAt": 1789059927,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "크레이머가 원자력은 건설하기 너무 어렵다고 경고한 지 6일 만에 구글은 사상 최초의 원자력 계약에 서명했습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "c49c1cc524d3690a75af",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "CoreWeave Sinks 5% Despite Burry Pulling In His AI Short, Oracle Eases Into Earnings, Cloudflare Holds Steady",
      "headlineKo": "Burry가 AI 단편을 발표했음에도 불구하고 CoreWeave는 5% 하락했고, Oracle은 수익을 쉽게 얻었으며 Cloudflare는 안정적으로 유지되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95a16f6cd316a90a229b67671d2b5a7adf1e35fb10f2855b753ba4b5a8afb613",
        "publishedAt": 1789059662,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Burry가 AI 단편을 발표했음에도 불구하고 CoreWeave는 5% 하락했고, Oracle은 수익을 쉽게 얻었으며 Cloudflare는 24시간 내내 안정적인 유지를 유지했습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,593.80 −0.66% Dow Jones 51,991.20 −0.86% Nasdaq 100 29,126.60 −1.05% Russell 2000 2,889.58 −1.16% S&P 500 7,593.80 −0.66% 다우존스 51,991.20 −0.86% 나스닥 100 29,126.60 −1.05% 러셀 2000 2,889.58 −1.",
        "현재 클라우드 거래를 장악하고 있는 실제 논쟁에 대한 침묵의 신호는 이해할 가치가 있습니다… 작성자: David Moadel 2026년 9월 10일 오후 1시 1분(ET) 게시 · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, $90.27, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, $90.27, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "aa225094a5c93bb223a6",
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
      "headline": "A $1 Trillion Micron Sounds Absurd. Then You See the 10-Fold Earnings Forecast.",
      "headlineKo": "1조 달러 규모의 마이크론은 터무니없이 들립니다. 그러면 10배 수익 예측이 표시됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d069cf37cb91bffa46203b0866080ce0108467c5c61ed6e992cdf83f184183aa",
        "publishedAt": 1789059641,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "1조 달러 규모의 마이크론은 터무니없이 들립니다.",
        "그러면 10배 수익 예측이 표시됩니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,596.80 −0.62% Dow Jones 52,052.20 −0.74% Nasdaq 100 29,113.70 −1.09% Russell 2000 2,889.28 −1.17% S&P 500 7,596.80 −0.62% 다우존스 52,052.20 −0.74% 나스닥 100 29,113.70 −1.09% 러셀 2000 2,889.28 −1."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1 Trillion, $31.28, $3.03 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1 Trillion, $31.28, $3.03 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7e9cf5b92af4cb2a5982",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "PLTR",
      "relatedTickers": [
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia and Palantir Land Historic AI Partnership",
      "headlineKo": "Nvidia와 Palantir Land 역사적인 AI 파트너십",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11299d49d2bba45acf05282b8e725c84ae731e45eb9e95f4c7edca57db16e3fb",
        "publishedAt": 1789059575,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia and Palantir Land Historic AI Partnership",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "fdb04b5607f13eefc8ab",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The Case for Broadcom Over Nvidia Strengthens in September",
      "headlineKo": "Nvidia에 대한 Broadcom의 주장이 9월에 더욱 강화되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f88e0286a270d9ffb2c1a59b448d41edd096f7e11b00ea5bd17125cc44082de4",
        "publishedAt": 1789059499,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia에 대한 Broadcom의 주장은 9월에 더욱 강화됩니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,637.40 +0.53% Dow Jones 52,358.20 +0.59% Nasdaq 100 29,297.80 +0.63% Russell 2000 2,908.42 +0.66% S&P 500 7,637.40 +0.53% 다우존스 52,358.20 +0.59% 나스닥 100 29,297.80 +0.63% 러셀 2000 2,908.42 +0.",
        "대답은 여전히 ​​이 두 가지를 상호 교환 가능한 AI 베팅으로 취급하는 사람을 놀라게 할 수 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4.80%, $29.59 billion, 85.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.80%, $29.59 billion, 85.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "344b1977ac6aa9ce879b",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Microsoft Stock Overvalued At 28x Earnings?",
      "headlineKo": "Microsoft 주식은 28배의 수익으로 과대평가되어 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbe2dd1b61e65f6225b23b9613329430d5f754b5ebd6492b6f0b5d285d272499",
        "publishedAt": 1789059136,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft 주식은 28배의 수익으로 과대평가되어 있습니까?"
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
      "id": "edd581235337ac7dbfb5",
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
      "headline": "OpenAI Picked Broadcom for Its First Custom AI Chip. The Race for Number Two Just Got Dangerous.",
      "headlineKo": "OpenAI는 최초의 맞춤형 AI 칩으로 Broadcom을 선택했습니다. 2위 경쟁이 위험해졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dba9f1685dd3f618dac3a9553a821d467f515bb2563f9a64aeaea07eac89a1db",
        "publishedAt": 1789058439,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "OpenAI는 최초의 맞춤형 AI 칩으로 Broadcom을 선택했습니다.",
        "2위 경쟁이 위험해졌습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,596.60 −0.00% Dow Jones 52,134.20 +0.16% Nasdaq 100 29,040.20 −0.25% Russell 2000 2,893.37 +0.14% S&P 500 7,596.60 −0.00% 다우존스 52,134.20 +0.16% 나스닥 100 29,040.20 −0.25% 러셀 2000 2,893.37 +0."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $364.38, 13.74%, 47 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $364.38, 13.74%, 47 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cbe6a3c0c76aadb7b2c7",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Nvidia and Palantir Launch New AI Stack for Supply Chains",
      "headlineKo": "Nvidia와 Palantir, 공급망을 위한 새로운 AI 스택 출시",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b9bb6a57ca33db288f36e083409271487c8c42b14cbe47ea8b4ac38f7fd192e2",
        "publishedAt": 1789055024,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia와 Palantir, 공급망을 위한 새로운 AI 스택 출시 - 연중무휴 월스트리트",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,593.80 −0.66% Dow Jones 51,991.20 −0.86% Nasdaq 100 29,126.60 −1.05% Russell 2000 2,889.58 −1.16% S&P 500 7,593.80 −0.66% 다우존스 51,991.20 −0.86% 나스닥 100 29,126.60 −1.05% 러셀 2000 2,889.58 −1.",
        "작성자: Rich Duprey 게시일: 2026년 9월 10일, 오전 11:43(ET) · 4분 읽기 𝕏 f ⧉ Jensen Huang은 라스베이거스에서 열린 CES 2025 기조연설에서 NVIDIA GPU를 들고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.35%, 1.88%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.35%, 1.88%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a295bcf5854dc06fd966",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "GoPro Spikes 11% as Lumentum Eases and Coherent Holds Flat: Is This a Merger Trade or a Meme Trade?",
      "headlineKo": "Lumentum이 완화되고 Coherent가 정체를 유지함에 따라 GoPro는 11% 급등: 이것은 합병 거래입니까, 아니면 밈 거래입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b66d533dd27d5264d40c95ba304afa7ed195264f13942927fc7d33513d59daf2",
        "publishedAt": 1789054970,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GoPro Spikes 11% as Lumentum Eases and Coherent Holds Flat: Is This a Merger Trade or a Meme Trade?",
        "Skip to content ❚❚ At close S&P 500 7,610.40 −0.61% Dow Jones 52,368.60 −0.34% Nasdaq 100 28,913.20 −1.56% Russell 2000 2,890.90 −0.44% S&P 500 7,610.40 −0.61% Dow Jones 52,368.60 −0.34% Nasdaq 100 28,913.20 −1.56% Russell 2000 2,890.90 −0.",
        "GoPro is surging double digits while its supposed optical-sector peers sit flat or fall, and no deal update has hit the wire."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, $1.57, 124% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, $1.57, 124% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "be045fbb2728a062edd2",
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
      "headline": "Top Midday Stories: Macy's Shares Fall Despite Strong Earnings; Amazon Reportedly Collaborates With OpenAI on ChatGPT Advertising",
      "headlineKo": "주요 정오 기사: 강력한 수익에도 불구하고 Macy의 주가는 하락했습니다. Amazon, ChatGPT 광고에서 OpenAI와 협력한 것으로 알려짐",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9eb6838b8d45ba358fc71c72b976b1b187d057a99181e53329d9e4d71b330e26",
        "publishedAt": 1789054894,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "주요 정오 기사: 강력한 수익에도 불구하고 Macy의 주가는 하락했습니다. Amazon, ChatGPT 광고에서 OpenAI와 협력한 것으로 알려짐"
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
      "id": "a8b3659f0eda88d80281",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Is Lumentum (LITE) Up 6.1% Since Last Earnings Report?",
      "headlineKo": "지난 수익 보고서 이후 Lumentum(LITE)이 6.1% 상승한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0d5427010f07ac8c392db489bce930e7980c70bbbe87406be7bb87a9deab0df",
        "publishedAt": 1789054204,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지난 수익 보고서 이후 Lumentum(LITE)이 6.1% 상승한 이유는 무엇입니까?"
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "bef9c60f5e81c7452a87",
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
      "headline": "Oracle Earnings Preview: Chart Has Improved, But Free Cash Flow Is Still Grim",
      "headlineKo": "Oracle Earnings Preview: 차트는 개선되었지만 여유 현금 흐름은 여전히 ​​암울합니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a7c48f5ed029e317b4511bf8a14f9f2d53ca3cafc33e5dce179b86f4c1e492da",
        "publishedAt": 1789053600,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle Earnings Preview: Chart Has Improved, But Free Cash Flow Is Still Grim",
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
      "id": "f9720ad7f82699456f1a",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Reports Earnings as It Transforms Itself for the AI Age",
      "headlineKo": "오라클, AI 시대에 맞춰 변화하면서 수익 보고",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30b4515fe0cb357082eff43fb2539f772e106e4801c587035e7659c405281be6",
        "publishedAt": 1789053600,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클, AI 시대에 맞춰 변화하면서 수익 보고"
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
      "id": "16f0c1932347fb123710",
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
      "headline": "Oracle set to report as Street weighs capex risk against cloud growth",
      "headlineKo": "Oracle은 Street가 클라우드 성장에 대한 자본 지출 위험을 평가하면서 보고할 예정입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eaacc12c51c1bfaad1a4ac462dbf8936308a454932a8e8fc0cb368c43089cba4",
        "publishedAt": 1789053600,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle은 Street가 클라우드 성장에 대한 자본 지출 위험을 평가하면서 보고할 예정입니다."
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
      "id": "caac0f5b2815dfff24df",
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
      "headline": "Talkdesk and Microsoft expand partnership to accelerate AI automation for enterprise contact centers",
      "headlineKo": "Talkdesk와 Microsoft가 파트너십을 확장하여 기업 연락 센터의 AI 자동화를 가속화합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=42931a2c8e92f2c07e83e9f40a3afee3f21a46aec1c0754b89b6f452b3bcb923",
        "publishedAt": 1789053300,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Talkdesk와 Microsoft가 파트너십을 확장하여 기업 연락 센터의 AI 자동화를 가속화합니다."
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
      "id": "ab7ae848ae04e75c642f",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Shell Energy North America Inks Agreement To Acquire 100% Stake In Hunlock Creek Generating In Pennsylvania; To Sell Stake In RISEC To Constellation Energy For $715M",
      "headlineKo": "쉘 에너지 북미 잉크(Shell Energy North America Inks), 펜실베이니아 소재 헌록 크릭 제너레이팅(Hunlock Creek Generation) 지분 100% 인수 계약; RISEC 지분을 Constellation Energy에 7억 1500만 달러에 매각",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8a31ac44178fd76f791aa7af516ab96790cd3a3ba53f030e375f9f888c851049",
        "publishedAt": 1789053168,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Shell Energy North America Inks Agreement To Acquire 100% Stake In Hunlock Creek Generating In Pennsylvania; To Sell Stake In RISEC To Constellation Energy For $715M",
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
      "id": "71b220123369b1270792",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Can Seagate Sustain Its Strong Revenue Growth in Fiscal 2027?",
      "headlineKo": "Seagate가 2027 회계연도에도 강력한 매출 성장을 유지할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66c4087a0487a2e94521eb5b7061560037531345caa2eba53369d514d03cdf4d",
        "publishedAt": 1789052820,
        "collectedAt": 1789455614.4887621
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Can Seagate Sustain Its Strong Revenue Growth in Fiscal 2027?",
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
      "id": "deda9784c435751774b4",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN"
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
      "headline": "AMZN SEC Form 424B5 filed",
      "headlineKo": "AMZN SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926107122/tm2624614-3_424b5.htm",
        "publishedAt": 1789052400.0,
        "collectedAt": 1789456060.1366527
      },
      "confirmedFacts": [
        "AMZN가 2026-09-11에 SEC Form 424B5을 제출했습니다.",
        "원문에서 관련 표현이 확인된 주제: 자금조달·증권발행"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "향후 자금조달 또는 증권 발행의 법적 기반이 될 수 있어 잠재 희석 규모와 자금 사용처를 확인해야 합니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다."
      ],
      "unverified": [
        "공시의 세부 금액·조건·사업 영향은 원문 항목과 첨부자료를 추가 검증해야 합니다."
      ],
      "beginnerExplanation": [
        "증권등록이나 투자설명서를 제출했다는 사실은 확인됐지만, 실제 신주 발행·희석이 확정됐다는 뜻은 아닙니다. 원문의 발행 조건과 실제 실행 여부를 확인해야 합니다."
      ],
      "whyItMatters": [
        "향후 자금조달 또는 증권 발행의 법적 기반이 될 수 있어 잠재 희석 규모와 자금 사용처를 확인해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "AMZN",
          "direction": "중립·원문 확인",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "basis": "official_filing"
        }
      ],
      "watch": [
        "실제 발행 여부와 주식 수",
        "발행가격·워런트·전환 조건",
        "조달 자금 사용처와 완전희석 EPS"
      ],
      "earningsEvidence": null
    }
  ],
  "byTicker": {
    "AMD": [
      "c1c7e277a34b9d9d9818",
      "0416214ecdc2fb924bf4",
      "d9a4e05518edaec84b6a",
      "93bccea64343fea10f7e",
      "937070f7c01999d73d87",
      "d8be74b809d4c3a253aa",
      "7a1580fb2be3a233cf46",
      "ef7610a0fac03fa075d8",
      "0408e3e0e3144cf617a8",
      "bc633867dcb5216d7af0",
      "eb9f1b3f68baac2e55ba",
      "eb8c38c0cf881bec1026",
      "f90b64aca9eedbf5f3a2",
      "7efd683b9ebb6ccef810",
      "8aa0ccfcbe1a7761d0d9",
      "f935a204986b3ca53e1a",
      "9b18e01d208eb0a50d98",
      "c6223010b9ed1fd7c705",
      "7b3d9e95845a7a72de77",
      "fc35169ae2ded9fa8edc",
      "2339ab3da2726373fde1",
      "be8833e0aafc7d0e2d1d",
      "587f8e09bf61c53a81c6",
      "ff76fda800031c72072f",
      "f8668dd1ce79e17f9371",
      "7f5f7d7375108989b14c",
      "226453c8c2ad689479cd",
      "043c72c2285634816755",
      "ef4b1757b8001da10bff",
      "aaa8c920ca38b8162032",
      "08f4fbb258e59d82f42a",
      "b1de46d0de953f114f19",
      "5fc669ccc45a389304e1",
      "53061f8dac875021ea6f",
      "2ef8b4a9aeb1f4e391a9",
      "fefd486f5309387c2330",
      "a39b70f250160cbd18b6",
      "251efb9a6aa19939813b",
      "cb2a768c3576e7a2346b",
      "9e1dfdd2c66d85b0b2cb",
      "3fbbd574689574839e71",
      "43aa0111c11bedb8d1c7",
      "b34d9fc1d7daa9f9da3d",
      "306676ed234bfce3ab79",
      "c25a39baa7f8c002cfa3",
      "bd113307be6ee4f49cb3"
    ],
    "GEV": [
      "c1c7e277a34b9d9d9818",
      "16652f8a2e3a5d4b44d5",
      "3b99b703ef8adb532615"
    ],
    "MU": [
      "c1c7e277a34b9d9d9818",
      "0416214ecdc2fb924bf4",
      "d9a4e05518edaec84b6a",
      "93bccea64343fea10f7e",
      "937070f7c01999d73d87",
      "d8be74b809d4c3a253aa",
      "7a1580fb2be3a233cf46",
      "92ea595b36a623f71b96",
      "ff90230a32e0dc20bb6a",
      "eb9f1b3f68baac2e55ba",
      "f90b64aca9eedbf5f3a2",
      "0e07be035dbb9373d2cb",
      "7efd683b9ebb6ccef810",
      "b3d2ccb2cbc68911f6f6",
      "8aa0ccfcbe1a7761d0d9",
      "f935a204986b3ca53e1a",
      "41c89ead85a561c711d3",
      "b9cf2f9ec1dfd4d56f67",
      "c6223010b9ed1fd7c705",
      "7b3d9e95845a7a72de77",
      "fc35169ae2ded9fa8edc",
      "2339ab3da2726373fde1",
      "fa54fd1bc75e281cba49",
      "a6d0765c9fda693172f8",
      "e773664a85e7a50d0600",
      "34b51ca7b14c8be5425a",
      "8f467c43891b70437366",
      "7f5f7d7375108989b14c",
      "fc2f9096053575b158ce",
      "226453c8c2ad689479cd",
      "043c72c2285634816755",
      "ef4b1757b8001da10bff",
      "aaa8c920ca38b8162032",
      "9b5e438a6b9bcbe5a887",
      "08f4fbb258e59d82f42a",
      "35cd3099b6f97d2261fd",
      "b1de46d0de953f114f19",
      "5fc669ccc45a389304e1",
      "5f47fa3d53f67315586e",
      "9a14a2e2de33afa1c32c",
      "e885a91801869d5e33f4",
      "a39b70f250160cbd18b6",
      "251efb9a6aa19939813b",
      "1684b63e58e308aa8859",
      "cb2a768c3576e7a2346b",
      "9e1dfdd2c66d85b0b2cb",
      "3fbbd574689574839e71",
      "43aa0111c11bedb8d1c7",
      "bf9c9f550d0b78726e48",
      "c25a39baa7f8c002cfa3",
      "aa225094a5c93bb223a6"
    ],
    "NVDA": [
      "c1c7e277a34b9d9d9818",
      "0416214ecdc2fb924bf4",
      "5f02d416daba49681632",
      "93bccea64343fea10f7e",
      "937070f7c01999d73d87",
      "d8be74b809d4c3a253aa",
      "e8f67d486969e63c95a0",
      "7a1580fb2be3a233cf46",
      "ef7610a0fac03fa075d8",
      "956ac1b99f02b074871f",
      "1c6d4f63840c2c50185f",
      "f7aeff8831bdc3e47d06",
      "d96a033ef33839959038",
      "bc633867dcb5216d7af0",
      "eb9f1b3f68baac2e55ba",
      "fc8ef1e8f50a8027eed9",
      "f90b64aca9eedbf5f3a2",
      "b80b0b762eddbe1c1d93",
      "b3d2ccb2cbc68911f6f6",
      "8aa0ccfcbe1a7761d0d9",
      "2451d7707282d134a341",
      "f935a204986b3ca53e1a",
      "b71ac945fa7dd0c4a76b",
      "c6223010b9ed1fd7c705",
      "7b3d9e95845a7a72de77",
      "fc35169ae2ded9fa8edc",
      "2339ab3da2726373fde1",
      "ffc8803fecdb6e1d1907",
      "a6d0765c9fda693172f8",
      "587f8e09bf61c53a81c6",
      "ff76fda800031c72072f",
      "dab353159531d7c0759c",
      "d8a09b03edf03e3764a3",
      "6757f3b8b51aef16835f",
      "7f5f7d7375108989b14c",
      "03cb81f164ce16f980cd",
      "fc2f9096053575b158ce",
      "226453c8c2ad689479cd",
      "043c72c2285634816755",
      "ef4b1757b8001da10bff",
      "48ab40d9100f1879b8b7",
      "aaa8c920ca38b8162032",
      "9b5e438a6b9bcbe5a887",
      "08f4fbb258e59d82f42a",
      "b1de46d0de953f114f19",
      "5fc669ccc45a389304e1",
      "2ef8b4a9aeb1f4e391a9",
      "0f3136c2e6e829a7142c",
      "a39b70f250160cbd18b6",
      "251efb9a6aa19939813b",
      "cb2a768c3576e7a2346b",
      "9e1dfdd2c66d85b0b2cb",
      "3fbbd574689574839e71",
      "43aa0111c11bedb8d1c7",
      "8785534b3520550a5619",
      "65568d3f42937b70fcde",
      "0bd757584c3a9f37fae9",
      "b34d9fc1d7daa9f9da3d",
      "306676ed234bfce3ab79",
      "a93e2189a18bd54ab251",
      "c25a39baa7f8c002cfa3",
      "bd113307be6ee4f49cb3",
      "7e9cf5b92af4cb2a5982",
      "fdb04b5607f13eefc8ab",
      "cbe6a3c0c76aadb7b2c7"
    ],
    "ORCL": [
      "c1c7e277a34b9d9d9818",
      "0416214ecdc2fb924bf4",
      "93bccea64343fea10f7e",
      "90128dee394a9daf4d73",
      "937070f7c01999d73d87",
      "76cca5fead312c7b4e69",
      "d8be74b809d4c3a253aa",
      "e8f67d486969e63c95a0",
      "7a1580fb2be3a233cf46",
      "eb9f1b3f68baac2e55ba",
      "f90b64aca9eedbf5f3a2",
      "b80b0b762eddbe1c1d93",
      "7efd683b9ebb6ccef810",
      "b3d2ccb2cbc68911f6f6",
      "9166bfa1ce438cd04642",
      "8aa0ccfcbe1a7761d0d9",
      "d5e1789d5f735aae4604",
      "f935a204986b3ca53e1a",
      "75a90f1f3dd72953e4d1",
      "c6223010b9ed1fd7c705",
      "7b3d9e95845a7a72de77",
      "fc35169ae2ded9fa8edc",
      "2339ab3da2726373fde1",
      "ffc8803fecdb6e1d1907",
      "c4beb59c50524aadd01c",
      "fb4e7bdcb542737d150c",
      "6757f3b8b51aef16835f",
      "7f5f7d7375108989b14c",
      "226453c8c2ad689479cd",
      "043c72c2285634816755",
      "9abc516eb045e45591db",
      "8e72a2b8fb89167f1c1c",
      "62b74aa291413fa2f558",
      "ef4b1757b8001da10bff",
      "dc5965b35ce455c2f5f8",
      "aaa8c920ca38b8162032",
      "08f4fbb258e59d82f42a",
      "b1de46d0de953f114f19",
      "5fc669ccc45a389304e1",
      "9a14a2e2de33afa1c32c",
      "a39b70f250160cbd18b6",
      "251efb9a6aa19939813b",
      "24d08285b1bb45a68c63",
      "cb2a768c3576e7a2346b",
      "9e1dfdd2c66d85b0b2cb",
      "3fbbd574689574839e71",
      "ba8a60504553b25aeb8d",
      "43aa0111c11bedb8d1c7",
      "5e4f8334592e0ef45a87",
      "a48dc088fcaf344ec354",
      "0bd757584c3a9f37fae9",
      "bd18d13bfb884c49f201",
      "161deb1b67090d4f0d03",
      "5571442d2d0704473243",
      "c25a39baa7f8c002cfa3",
      "c49c1cc524d3690a75af",
      "bef9c60f5e81c7452a87",
      "f9720ad7f82699456f1a",
      "16f0c1932347fb123710"
    ],
    "AAPL": [
      "0416214ecdc2fb924bf4",
      "0b96a73958734eb3cc27",
      "92ea595b36a623f71b96",
      "377944b515875c01b19c",
      "b3d2ccb2cbc68911f6f6",
      "695220866de5a10362a6",
      "b1e8dfaae7bbd7205162",
      "90c378c47e7e367e8f34",
      "2339ab3da2726373fde1",
      "34b51ca7b14c8be5425a",
      "614498358e0ee6c923b5",
      "9e539d31ac13fb23af8b",
      "48ab40d9100f1879b8b7",
      "251efb9a6aa19939813b",
      "cb2a768c3576e7a2346b",
      "9fadff15da6b6b48f615",
      "43aa0111c11bedb8d1c7"
    ],
    "AMZN": [
      "0416214ecdc2fb924bf4",
      "9ac11af272b7f0df5fd3",
      "1ce08bf11a28d6424e26",
      "ea1ac804da120dd685a4",
      "67169fd0f99b5a50defa",
      "9ab6cfb892b90705f5cc",
      "84a1c5e58d1b3dae39af",
      "4b7f35b27e78d4006653",
      "a84f6dfbe4b3f1aa3d54",
      "bddabd3f3fc189c91a00",
      "2339ab3da2726373fde1",
      "36bd66db65510aef8927",
      "614498358e0ee6c923b5",
      "48ab40d9100f1879b8b7",
      "b1de46d0de953f114f19",
      "0f3136c2e6e829a7142c",
      "69916ef230062d0fe05b",
      "167d9898cbfc6a8a0c10",
      "e885a91801869d5e33f4",
      "a39b70f250160cbd18b6",
      "095f5a4eef9a44d64c92",
      "cd066e21f1183636f2e8",
      "5571442d2d0704473243",
      "8a7bbc63ddddf5258849",
      "bb616618c351a0d96219",
      "be045fbb2728a062edd2",
      "deda9784c435751774b4"
    ],
    "QCOM": [
      "0416214ecdc2fb924bf4",
      "9eee2bcd5228c15c4611",
      "ea1ac804da120dd685a4",
      "92ea595b36a623f71b96",
      "eb9f1b3f68baac2e55ba",
      "b3d2ccb2cbc68911f6f6",
      "34b51ca7b14c8be5425a",
      "614498358e0ee6c923b5",
      "ee75b870b1630d5371d3",
      "0f3136c2e6e829a7142c",
      "69916ef230062d0fe05b",
      "93ec7d9d984ae1d9010e",
      "bb616618c351a0d96219"
    ],
    "INTC": [
      "d9a4e05518edaec84b6a",
      "ef7610a0fac03fa075d8",
      "1c6d4f63840c2c50185f",
      "e762b258dcb6f20a3875",
      "b9f12be4a7ab711727f7",
      "bc633867dcb5216d7af0",
      "7efd683b9ebb6ccef810",
      "e6ae3663ddcf0b10eb01",
      "f935a204986b3ca53e1a",
      "9b18e01d208eb0a50d98",
      "135079d43838e4ed176c",
      "b19d20d5c9da85f5bd56",
      "e712eea25aec24891cab",
      "8f467c43891b70437366",
      "226453c8c2ad689479cd",
      "510b4416b3d901c0dbb7",
      "f027734a71c0c5becc0a",
      "b6dd056e20339b7b24e3",
      "bd113307be6ee4f49cb3"
    ],
    "SPY": [
      "d9a4e05518edaec84b6a",
      "5f02d416daba49681632",
      "ee4ddf8a5a70c346e8ad",
      "80177b84463f10bd6b2c",
      "d736044487854daf457c",
      "90128dee394a9daf4d73",
      "f38363b1ca382ef776a3",
      "16652f8a2e3a5d4b44d5",
      "949727724e4e60e94564",
      "ec5b2553ea70cf7bb575",
      "4e31b5904549216ca564",
      "736e6c7bdd834dc87f7d",
      "9b854a77d501c4842939",
      "28083c643abaccdafff7",
      "70cf57446a6c47a317ed",
      "67169fd0f99b5a50defa",
      "1c6d4f63840c2c50185f",
      "84a1c5e58d1b3dae39af",
      "377944b515875c01b19c",
      "2d9f98d878010703650c",
      "ff90230a32e0dc20bb6a",
      "f7aeff8831bdc3e47d06",
      "3b99b703ef8adb532615",
      "0ff955d1f2f0f58903e9",
      "e762b258dcb6f20a3875",
      "b9f12be4a7ab711727f7",
      "164d91c7f121edfdb611",
      "e21e1046a30cb56b979e",
      "d9c2dff94074c3b9b60f",
      "d96a033ef33839959038",
      "8d2ad0cdb12bb79b2755",
      "0408e3e0e3144cf617a8",
      "e556b48194b54c231586",
      "0142508f12001efb6ce9",
      "646dff42494d78eefeb3",
      "bc633867dcb5216d7af0",
      "eb8c38c0cf881bec1026",
      "c4f93411c974e69f2d4e",
      "dbfb6f3fc313e4615d59",
      "fc8ef1e8f50a8027eed9",
      "f90b64aca9eedbf5f3a2",
      "0e07be035dbb9373d2cb",
      "7efd683b9ebb6ccef810",
      "4b7f35b27e78d4006653",
      "695220866de5a10362a6",
      "9166bfa1ce438cd04642",
      "3775aced1e16a5f2540d",
      "344bd3ff6717008ac893",
      "90c378c47e7e367e8f34",
      "b71ac945fa7dd0c4a76b",
      "41c89ead85a561c711d3",
      "b9cf2f9ec1dfd4d56f67",
      "4ca22e99f89b1c0dc509",
      "135079d43838e4ed176c",
      "b19d20d5c9da85f5bd56",
      "0f3aecac0a3bd0883448",
      "e712eea25aec24891cab",
      "ffc8803fecdb6e1d1907",
      "5248548f2acf9596f734",
      "d59debbc12334c26450a",
      "a6d0765c9fda693172f8",
      "ff76fda800031c72072f",
      "5f89daf304700246a69c",
      "55eeaf44180b56f91c1c",
      "7207af0898502c082598",
      "e773664a85e7a50d0600",
      "d8a09b03edf03e3764a3",
      "5c0fe260ac26815a8748",
      "36bd66db65510aef8927",
      "614498358e0ee6c923b5",
      "f8668dd1ce79e17f9371",
      "8f467c43891b70437366",
      "03cb81f164ce16f980cd",
      "fc2f9096053575b158ce",
      "ca65247236b9bb335b67",
      "48ab40d9100f1879b8b7",
      "1b6c83c8f3cd59328dfc",
      "35cd3099b6f97d2261fd",
      "c1b5e3d6a4c055483ef0",
      "fea6cbc2a855b617a610",
      "ebc31d8baacc02ce4acd",
      "37860c35e0dca189df18",
      "8f8388ba244ddc213065",
      "e387c5fc6e51b8f5d4c9",
      "5f47fa3d53f67315586e",
      "b490c1d79e51dbdcac52",
      "ee75b870b1630d5371d3",
      "6da6b252d71695f3a84d",
      "2ef8b4a9aeb1f4e391a9",
      "bab8029cfc1f90897e0d",
      "fefd486f5309387c2330",
      "167d9898cbfc6a8a0c10",
      "9a14a2e2de33afa1c32c",
      "e885a91801869d5e33f4",
      "510b4416b3d901c0dbb7",
      "1d5722880c458d042f81",
      "ba8a60504553b25aeb8d",
      "6b66663178dafa00feee",
      "5e4f8334592e0ef45a87",
      "bf9c9f550d0b78726e48",
      "65568d3f42937b70fcde",
      "0bd757584c3a9f37fae9",
      "3909d56059b24e5312be",
      "5571442d2d0704473243",
      "8357bf3fd338a634f4a0",
      "306676ed234bfce3ab79",
      "f027734a71c0c5becc0a",
      "8a7bbc63ddddf5258849",
      "a3c962e2ef105d1c61c9",
      "917d980336044c494c97",
      "bd113307be6ee4f49cb3",
      "1a4232af56d9ee3031ba",
      "c49c1cc524d3690a75af",
      "aa225094a5c93bb223a6",
      "fdb04b5607f13eefc8ab",
      "edd581235337ac7dbfb5",
      "cbe6a3c0c76aadb7b2c7",
      "a295bcf5854dc06fd966"
    ],
    "AVGO": [
      "5f02d416daba49681632",
      "d8be74b809d4c3a253aa",
      "f7aeff8831bdc3e47d06",
      "b71ac945fa7dd0c4a76b",
      "7b3d9e95845a7a72de77",
      "e773664a85e7a50d0600",
      "7f5f7d7375108989b14c",
      "226453c8c2ad689479cd",
      "2ef8b4a9aeb1f4e391a9",
      "e885a91801869d5e33f4",
      "f027734a71c0c5becc0a",
      "b6dd056e20339b7b24e3",
      "fdb04b5607f13eefc8ab",
      "edd581235337ac7dbfb5"
    ],
    "GOOGL": [
      "5f02d416daba49681632",
      "937070f7c01999d73d87",
      "67169fd0f99b5a50defa",
      "9ab6cfb892b90705f5cc",
      "84a1c5e58d1b3dae39af",
      "2d9f98d878010703650c",
      "d96a033ef33839959038",
      "f90b64aca9eedbf5f3a2",
      "b80b0b762eddbe1c1d93",
      "a1826d04bd028c6cf9d8",
      "7efd683b9ebb6ccef810",
      "5cd843f30876c0fa139d",
      "c6223010b9ed1fd7c705",
      "fc35169ae2ded9fa8edc",
      "55eeaf44180b56f91c1c",
      "9e775836d148bccfb254",
      "065f3181bbeca4b1dd09",
      "48ab40d9100f1879b8b7",
      "aaa8c920ca38b8162032",
      "3fbbd574689574839e71",
      "095f5a4eef9a44d64c92",
      "42ac9fc651062967543d",
      "c25a39baa7f8c002cfa3",
      "a3c962e2ef105d1c61c9",
      "cf22f0a365a72bab755d"
    ],
    "MSFT": [
      "5f02d416daba49681632",
      "d736044487854daf457c",
      "90128dee394a9daf4d73",
      "ec5b2553ea70cf7bb575",
      "84a1c5e58d1b3dae39af",
      "2d9f98d878010703650c",
      "e762b258dcb6f20a3875",
      "d96a033ef33839959038",
      "a1826d04bd028c6cf9d8",
      "0f3aecac0a3bd0883448",
      "ca65247236b9bb335b67",
      "48ab40d9100f1879b8b7",
      "a39b70f250160cbd18b6",
      "5e4f8334592e0ef45a87",
      "344b1977ac6aa9ce879b",
      "caac0f5b2815dfff24df"
    ],
    "QQQ": [
      "5f02d416daba49681632",
      "ee4ddf8a5a70c346e8ad",
      "80177b84463f10bd6b2c",
      "90128dee394a9daf4d73",
      "f38363b1ca382ef776a3",
      "949727724e4e60e94564",
      "ec5b2553ea70cf7bb575",
      "736e6c7bdd834dc87f7d",
      "9b854a77d501c4842939",
      "28083c643abaccdafff7",
      "70cf57446a6c47a317ed",
      "67169fd0f99b5a50defa",
      "1c6d4f63840c2c50185f",
      "84a1c5e58d1b3dae39af",
      "2d9f98d878010703650c",
      "f7aeff8831bdc3e47d06",
      "3b99b703ef8adb532615",
      "e762b258dcb6f20a3875",
      "b9f12be4a7ab711727f7",
      "164d91c7f121edfdb611",
      "e21e1046a30cb56b979e",
      "d9c2dff94074c3b9b60f",
      "d96a033ef33839959038",
      "8d2ad0cdb12bb79b2755",
      "0408e3e0e3144cf617a8",
      "e556b48194b54c231586",
      "0142508f12001efb6ce9",
      "646dff42494d78eefeb3",
      "bc633867dcb5216d7af0",
      "c4f93411c974e69f2d4e",
      "f90b64aca9eedbf5f3a2",
      "634206b4f6769b0a7deb",
      "b80b0b762eddbe1c1d93",
      "a1826d04bd028c6cf9d8",
      "7efd683b9ebb6ccef810",
      "b1e8dfaae7bbd7205162",
      "4ca22e99f89b1c0dc509",
      "36bd66db65510aef8927",
      "614498358e0ee6c923b5",
      "1b6c83c8f3cd59328dfc",
      "c1b5e3d6a4c055483ef0",
      "e387c5fc6e51b8f5d4c9",
      "5f47fa3d53f67315586e",
      "b490c1d79e51dbdcac52",
      "ee75b870b1630d5371d3",
      "2ef8b4a9aeb1f4e391a9",
      "bab8029cfc1f90897e0d",
      "fefd486f5309387c2330",
      "167d9898cbfc6a8a0c10",
      "9a14a2e2de33afa1c32c",
      "ba8a60504553b25aeb8d",
      "5e4f8334592e0ef45a87",
      "0bd757584c3a9f37fae9",
      "3909d56059b24e5312be",
      "5571442d2d0704473243",
      "8357bf3fd338a634f4a0",
      "a3c962e2ef105d1c61c9",
      "917d980336044c494c97",
      "c49c1cc524d3690a75af",
      "aa225094a5c93bb223a6",
      "fdb04b5607f13eefc8ab",
      "edd581235337ac7dbfb5",
      "cbe6a3c0c76aadb7b2c7",
      "a295bcf5854dc06fd966"
    ],
    "CRM": [
      "ee4ddf8a5a70c346e8ad",
      "a8e2c7ad16db9aec7533",
      "8d2ad0cdb12bb79b2755",
      "634206b4f6769b0a7deb",
      "08f4fbb258e59d82f42a",
      "fea6cbc2a855b617a610",
      "8357bf3fd338a634f4a0"
    ],
    "BE": [
      "80177b84463f10bd6b2c",
      "fefd486f5309387c2330"
    ],
    "CEG": [
      "4ae102a98e090cc8cf74",
      "59cf30440f10eef41784",
      "ba8a60504553b25aeb8d",
      "ab7ae848ae04e75c642f"
    ],
    "META": [
      "937070f7c01999d73d87",
      "4e31b5904549216ca564",
      "e21e1046a30cb56b979e",
      "d96a033ef33839959038",
      "065f3181bbeca4b1dd09",
      "ef4b1757b8001da10bff",
      "1d5722880c458d042f81",
      "5ec2ba8eae07bfc1955b",
      "1a4232af56d9ee3031ba"
    ],
    "SNDK": [
      "736e6c7bdd834dc87f7d",
      "7efd683b9ebb6ccef810",
      "b9cf2f9ec1dfd4d56f67",
      "fa54fd1bc75e281cba49",
      "5f47fa3d53f67315586e",
      "6da6b252d71695f3a84d",
      "fefd486f5309387c2330",
      "1684b63e58e308aa8859"
    ],
    "ASML": [
      "9b854a77d501c4842939",
      "b4154027aff4bc2c0ddf",
      "eb8c38c0cf881bec1026",
      "b19d20d5c9da85f5bd56",
      "7f4ed5e89e57b19d6e50",
      "42ac9fc651062967543d"
    ],
    "PLTR": [
      "28083c643abaccdafff7",
      "956ac1b99f02b074871f",
      "d03b5f98c1a4088147b5",
      "5c0fe260ac26815a8748",
      "043c72c2285634816755",
      "7b0db351058a7ff86e38",
      "d599bbccaa34b19d4d79",
      "8785534b3520550a5619",
      "a93e2189a18bd54ab251",
      "7e9cf5b92af4cb2a5982",
      "cbe6a3c0c76aadb7b2c7"
    ],
    "COHR": [
      "70cf57446a6c47a317ed",
      "6c39123df96e005123c3",
      "a295bcf5854dc06fd966"
    ],
    "LITE": [
      "70cf57446a6c47a317ed",
      "a295bcf5854dc06fd966",
      "a8b3659f0eda88d80281"
    ],
    "MRVL": [
      "ef7610a0fac03fa075d8",
      "f7aeff8831bdc3e47d06",
      "0ff955d1f2f0f58903e9",
      "f027734a71c0c5becc0a",
      "b6dd056e20339b7b24e3",
      "917d980336044c494c97"
    ],
    "WDC": [
      "92ea595b36a623f71b96",
      "b3d2ccb2cbc68911f6f6",
      "3051ab30aff887d7694e",
      "34b51ca7b14c8be5425a",
      "ca2a313cb063b36ebf38",
      "c822fdd7207c22509ddd"
    ],
    "ETN": [
      "3b99b703ef8adb532615",
      "ebc31d8baacc02ce4acd",
      "6b66663178dafa00feee"
    ],
    "PWR": [
      "3b99b703ef8adb532615",
      "942ea9bcdb9d47050e68"
    ],
    "TSLA": [
      "164d91c7f121edfdb611",
      "dbfb6f3fc313e4615d59",
      "f90b64aca9eedbf5f3a2",
      "5cd843f30876c0fa139d",
      "4ca22e99f89b1c0dc509",
      "d59debbc12334c26450a",
      "7207af0898502c082598",
      "043c72c2285634816755",
      "5fc669ccc45a389304e1",
      "167d9898cbfc6a8a0c10",
      "9a14a2e2de33afa1c32c"
    ],
    "AMAT": [
      "b4154027aff4bc2c0ddf",
      "e3ce6f5e0db69c3d3ba0",
      "3775aced1e16a5f2540d",
      "b19d20d5c9da85f5bd56",
      "7f4ed5e89e57b19d6e50",
      "35cd3099b6f97d2261fd",
      "8f8388ba244ddc213065",
      "3909d56059b24e5312be"
    ],
    "LRCX": [
      "b4154027aff4bc2c0ddf",
      "33d638a2660a9a252df8",
      "9542a22c08443089e656"
    ],
    "ARM": [
      "e556b48194b54c231586",
      "37860c35e0dca189df18",
      "6da6b252d71695f3a84d"
    ],
    "STX": [
      "0142508f12001efb6ce9",
      "d4cf73958b6685bea54c",
      "ac54bc527575ee616525",
      "16c549c84f68e451eb9e",
      "5f47fa3d53f67315586e",
      "71b220123369b1270792"
    ],
    "VST": [
      "c4f93411c974e69f2d4e",
      "9dbfa76003414eefe7b9"
    ],
    "VRT": [
      "de8eeada2d64ad7968a4",
      "510b4416b3d901c0dbb7"
    ],
    "TSM": [
      "34b51ca7b14c8be5425a"
    ],
    "ANET": [
      "c1b5e3d6a4c055483ef0",
      "b490c1d79e51dbdcac52",
      "79e3118d486558c163bb"
    ],
    "KLAC": [
      "e8331ee4f3e57b2e1a42"
    ]
  }
};
