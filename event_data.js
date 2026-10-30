// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1793395244.6558378,
  "events": [
    {
      "id": "090dbe40ef2a39a41feb",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "INTC"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
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
      "headline": "Top Midday Stories: Intel Shares Plummet After Q3 Revenue Miss, Weak Guidance; Amazon Q3 EPS, Revenue Miss Expectations, Shares Fall",
      "headlineKo": "주요 정오 기사: 인텔 주가는 3분기 매출 부진, 약한 지침 이후 급락; Amazon Q3 EPS, 매출 기대치 미달, 주가 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70e42e8a877797a20afaff39f607a964e6fef089d85f3b668e36b02cf945491a",
        "publishedAt": 1793375259,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Top Midday Stories: Intel Shares Plummet After Q3 Revenue Miss, Weak Guidance; Amazon Q3 EPS, Revenue Miss Expectations, Shares Fall",
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
      "id": "52cadd2accc273784755",
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
      "headline": "Amazon's Q3 Print Show AI Demand Exceeding Supply, Slowing Dollar Growth, BofA Securities Says",
      "headlineKo": "Amazon의 3분기 인쇄 쇼에서 AI 수요가 공급을 초과하여 달러 성장이 둔화되었다고 BofA 증권이 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28c179a774104db81f5720401e1438384548de317f397a459e83eead858ad78a",
        "publishedAt": 1793373009,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon의 3분기 인쇄 쇼에서 AI 수요가 공급을 초과하여 달러 성장이 둔화되었다고 BofA 증권이 밝혔습니다."
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
      "id": "0cc131e6ce92c9995506",
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
      "headline": "If Apple Grows At 10% a Year, Here’s What $1,000 Becomes By 2030",
      "headlineKo": "Apple이 연간 10% 성장한다면 2030년까지 1,000달러는 어떻게 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8fb48d1e0fbedca99debfa2907f6e77377bc4c72366532db0423ad778a423b8f",
        "publishedAt": 1793372601,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple이 연간 10% 성장한다면 2030년까지 1,000달러는 어떻게 될까요? - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.20 −1.07% Dow Jones 51,976.00 −0.76% Nasdaq 100 28,491.00 −2.05% Russell 2000 2,808.65 −1.80% S&P 500 7,602.20 −1.07% 다우존스 51,976.00 −0.76% 나스닥 100 28,491.00 −2.05% 러셀 20",
        "1,000달러 지분으로 무엇을 할지 결정하기 전에 상승세, 기반, 하락세가 어디에 있는지 확인하세요. 작성자: Vandita Jadeja 2026년 10월 30일 오전 11시 3분(ET) 게시 · 가격 목표 데스크 3분 읽기."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, $1,000, $345.35 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10%, $1,000, $345.35 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c1554785a5116e5a9361",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "ARM",
        "AVGO",
        "MRVL",
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
      "headline": "Broadcom Falls 5% Despite DA Davidson Upgrade on Anthropic and OpenAI IPO Hopes; Arm and Qualcomm Sink 10%, Marvell Drops 8%",
      "headlineKo": "Broadcom은 Anthropic 및 OpenAI IPO 희망에 대한 DA Davidson 업그레이드에도 불구하고 5% 하락했습니다. Arm 및 Qualcomm 싱크 10%, Marvell 하락 8%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c7ffa73b65110965c367031c2786a861fa3b8672294fa7fa3f078fc993d68e8",
        "publishedAt": 1793372209,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom은 Anthropic 및 OpenAI IPO 희망에 대한 DA Davidson 업그레이드에도 불구하고 5% 하락했습니다. Arm 및 Qualcomm 싱크 10%, Marvell 하락 8% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.20 −1.07% Dow Jones 51,976.00 −0.76% Nasdaq 100 28,491.00 −2.05% Russell 2000 2,808.65 −1.80% S&P 500 7,602.20 −1.07% 다우존스 51,976.00 −0.76% 나스닥 100 28,491.00 −2.05% 러셀 20",
        "작성자: David Moadel 2026년 10월 30일 게시, 오전 10:56(ET) · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 10%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 10%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "52e466a92244f28b57d9",
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
      "headline": "AMD Is Chasing Nvidia in AI, but Investors Could Win Either Way",
      "headlineKo": "AMD는 AI 분야에서 Nvidia를 쫓고 있지만 투자자는 어느 쪽이든 승리할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ba4b6a73e3889b8bc8deb6ffab08b0a2eb04348f0d71170ef6df0b3ff3cf19b",
        "publishedAt": 1793370834,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $6.72, 107%, 58%, 164.77%, $567.04,, 10.08%, $1,000, $637.61.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMD의 사업과 관련된 'AMD Is Chasing Nvidia in AI, but Investors Could Win Either Way' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9b78bc7ef8cda0542cc7",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "LITE",
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
      "headline": "Is Marvell Technology (MRVL) Cheap After Its Lumentum Deal Talks Sent Shares Lower?",
      "headlineKo": "Marvell Technology(MRVL)는 Lumentum 거래 협상으로 주가가 낮아진 후 가격이 저렴합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3bdfa6f31c1f8eab5e27b7fefe8f31459b28243d200e0af5d834270972b2dcf8",
        "publishedAt": 1793369438,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Is Marvell Technology (MRVL) Cheap After Its Lumentum Deal Talks Sent Shares Lower?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LITE에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "374522afd04ec24a8ba8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "META",
        "NVDA"
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
      "headline": "AMD Expands AI Footprint With Meta: Can It Outpace NVDA & AVGO?",
      "headlineKo": "AMD, 메타로 AI 영역 확장: NVDA 및 AVGO를 능가할 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38831521ffb450e45251727a3d225682d9f1fcde4f3e76f188ce850fa526179d",
        "publishedAt": 1793369100,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD Expands AI Footprint With Meta: Can It Outpace NVDA & AVGO?",
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
      "id": "b5e0299d237fd9b6345b",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Sandisk stock slumps despite solid earnings beat. Is memory losing momentum?",
      "headlineKo": "샌디스크 주가는 견조한 실적에도 불구하고 하락세를 보이고 있다. 기억이 추진력을 잃고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04ffaf2e9f40c3f89a2bc5931a27208b0874e2977265216bc14fd62ed924cbac",
        "publishedAt": 1793368526,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk stock slumps despite solid earnings beat. Is memory losing momentum?",
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
      "id": "692a57e1429cfe0a1bcc",
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
      "headline": "Update: Market Chatter: Meta, TikTok, X Lose Challenge Against UK Regulator Over Safety Data Requests",
      "headlineKo": "업데이트: 시장 잡담: Meta, TikTok, X가 안전 데이터 요청에 대한 영국 규제 기관에 대한 도전에서 패함",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d14c0bcd6d88fb2b6fa070037c2bc3200867957a4a6b8eb2dab8f1d7fa7c56ce",
        "publishedAt": 1793368350,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Update: Market Chatter: Meta, TikTok, X Lose Challenge Against UK Regulator Over Safety Data Requests",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "cece9c24068749dabb71",
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
      "headline": "TPM Holdings Accelerates Investment in AI and Salesforce CRM for the Built World",
      "headlineKo": "TPM Holdings, 건축 세계를 위한 AI 및 Salesforce CRM에 대한 투자 가속화",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c8740c49aa54a2db6a0a629bd78f46f24d10dc02dbcd7c5430eec402f844cf3",
        "publishedAt": 1793368080,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 CRM의 사업과 관련된 'TPM Holdings Accelerates Investment in AI and Salesforce CRM for the Built World' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "1db9f5256d199efb544c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMZN",
        "INTC"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
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
      "headline": "Amazon and Intel Plunge After Disappointing Results, Fueling Wall Street's Nerves About AI Spending",
      "headlineKo": "실망스러운 결과 이후 아마존과 인텔이 급락하여 AI 지출에 대한 월스트리트의 신경을 곤두세우고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f06717b09126c5e2b8e96226dd07320ae1d42670c1b02d610b8c92f97a80742",
        "publishedAt": 1793367806,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "실망스러운 결과 이후 아마존과 인텔이 급락하여 AI 지출에 대한 월스트리트의 신경을 자극 | IBTimes Economy & Markets Global Markets Equities 2026년 6월 12일에 촬영된 사진은 스마트폰에 있는 미국 온라인 소매 대기업 Amazon의 로고를 보여줍니다.",
        "Getty Images 아마존과 인텔의 최근 수익 보고서가 기술 투자 비용과 기업이 투자자가 기대하는 수익을 제공할 수 있는지 여부에 대한 새로운 우려가 제기된 후 금요일에 주가가 하락했습니다.",
        "Amazon은 약 3% 하락하여 이전 손실과 맞물렸고, Intel은 25% 이상 급락하여 업계의 일부 유명 기업이 어려운 한 주를 보낸 후 기술주에 추가적인 압력을 가했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, 25%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, 25%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4b15c9c4904290690269",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "SNDK",
      "relatedTickers": [
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
      "headline": "Sandisk shares slide 8% despite earnings beat as investors weigh valuation",
      "headlineKo": "투자자들이 가치 평가에 무게를 두면서 수익이 상회했음에도 불구하고 샌디스크 주가는 8% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=abbef4e175da06554bde61bbe96faeb6a3efe497b4f8abeb2bce7bb962cf6b01",
        "publishedAt": 1793367720,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "투자자들이 가치 평가에 무게를 두면서 수익이 상회했음에도 불구하고 Sandisk 주가는 8% 하락했습니다. 무엇을 찾고 계십니까?",
        "회사 뉴스 일치하는 모든 회사 보기 일치하는 모든 뉴스 보기 Movers 작성자: Angela Harmantas 고지 사항 투자 조언 없음 이 콘텐츠 정보 편집 표준 및 정책 기사 공유 이 콘텐츠 정보 × Angela Harmantas 정보",
        "그녀는 특히 후배 자원주에 초점을 맞춰 북미 주식 시장을 다루는 데 15년 이상의 경험을 갖고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, 460%, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 8%, 460%, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3c11ac3afff09ed4f7d9",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMZN",
        "INTC",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
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
      "headline": "Stock Market Today: Nasdaq Dives As Amazon, Intel Plunge On Earnings (Live Coverage)",
      "headlineKo": "오늘의 주식 시장: 나스닥은 아마존으로 급락하고 인텔은 수익 급락(생방송)",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8258627e0aa99eaf7a1867a45093c5f904a056a4b13b870db6d7855c0b94eae3",
        "publishedAt": 1793367693,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘의 주식 시장: 나스닥은 아마존으로 급락하고 인텔은 수익 급락(생방송)"
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
      "id": "cac5e8f6ca01d9b52f5d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMZN",
        "INTC"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
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
      "headline": "Amazon and Intel earnings lead to a tech sell-off, and Binance is hacked for $6.3B",
      "headlineKo": "Amazon과 Intel의 수익은 기술 매각으로 이어지고 Binance는 63억 달러에 해킹당했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8215eb679c53be594a7e2746a6496317d2452c8b5ddade01d7ac0c1118ca4b92",
        "publishedAt": 1793367660,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon과 Intel의 수익은 기술 매각으로 이어지고 Binance는 63억 달러에 해킹당했습니다."
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
      "id": "973350f8f49b091890c8",
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
      "headline": "Market Chatter: Meta, TikTok, X Lose Challenge Against UK Regulator Over Safety Data Requests",
      "headlineKo": "시장 잡담: Meta, TikTok, X는 안전 데이터 요청에 대한 영국 규제 기관에 대한 도전에서 패했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38735a42771f3e95aa99fde5d83bdb6c2f2729832fbd2bb01b546d5100886d1b",
        "publishedAt": 1793367446,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Market Chatter: Meta, TikTok, X Lose Challenge Against UK Regulator Over Safety Data Requests",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "adef3d9a7b6fede827dc",
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
      "headline": "Applied Materials Is Up Nearly 9% Since Moving to Lift Its Besi Stake to 20%. Here’s What Hybrid Bonding Could Mean for the Stock by 2030",
      "headlineKo": "Applied Materials는 Besi 지분을 20%로 늘리기 위해 이전한 이후 거의 9% 상승했습니다. 2030년까지 하이브리드 채권이 주식에 의미하는 바는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=65762d7e4f581dea665e572a43b5bea6f349830e7e3fd33cbf489e00efa338ac",
        "publishedAt": 1793366596,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials는 Besi 지분을 20%로 늘리기 위해 이전한 이후 거의 9% 상승했습니다.",
        "2030년까지 하이브리드 본딩이 주식에 의미하는 바는 다음과 같습니다 | TIKR.com 주식 리뷰 Applied Materials는 Besi 지분을 20%로 끌어올리기로 한 이후 거의 9% 상승했습니다.",
        "2030년까지 하이브리드 결합이 주식에 미치는 영향 Wiltone Asuncion • 5분 읽기 검토자: David Hanson 최종 업데이트 2026년 10월 30일 Canva를 통한 Getty Images의 @Nickel_Bell, PhonlamaiPhoto의 이미지의 @Kittipong Jirasukhanont"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 9%, 20%, $421.66 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 9%, 20%, $421.66 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9f8e57729fa2a8273ba1",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The Estée Lauder Companies and Microsoft Announce a New Strategic Partnership to Power Enterprise Efficiency and Consumer-Centric Growth",
      "headlineKo": "에스티로더 컴퍼니즈와 마이크로소프트, 기업 효율성과 소비자 중심 성장을 위한 새로운 전략적 파트너십 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=71a80a63c2c40b6665fa7ec8ac4d90094e8de8ef8c75702429f63b19f718705a",
        "publishedAt": 1793366520,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "The Estée Lauder Companies and Microsoft Announce a New Strategic Partnership to Power Enterprise Efficiency and Consumer-Centric Growth",
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
      "id": "abdc4112dd46b0e5d2de",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
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
      "headline": "Alphabet Shares Plunge. Why Now Is a Great Time to Buy the Dip.",
      "headlineKo": "알파벳 주가 급락. 지금이 하락장을 매수하기 가장 좋은 시기인 이유.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b3ce480f21e2cfe98ac41cdca863d437744ea83fd88330326b1e18ccd52c2f8d",
        "publishedAt": 1793366510,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금이 하락장을 매수하기 가장 좋은 시기인 이유.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Alphabet ( GOOGL -0.60% ) ( GOOG -0.63% ) 검색 수익 g로 회사의 3분기 실적 보고서 이후 주가가 하락했습니다.",
        "하지만 이 문제는 해결 가능한 것으로 보이며 회사의 클라우드 컴퓨팅 사업은 탁월한 성과를 거두었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $282.12, $1.70, 0.60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $282.12, $1.70, 0.60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1c5924b18efbbc349e2f",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Could Alphabet Actually Climb 67%? Or Is Pivotal Research Totally Wrong?",
      "headlineKo": "알파벳이 실제로 67% 상승할 수 있을까? 아니면 중추적인 연구가 완전히 잘못된 것인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e02cc8da486647e7639e592ce06b3ba6904d5010a9f8d618b63dbd1301419f4a",
        "publishedAt": 1793366432,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아니면 중추적인 연구가 완전히 잘못된 것인가?",
        "| TIKR.com 일반 투자 알파벳이 실제로 67% 상승할 수 있을까요?",
        "아니면 중추적인 연구가 완전히 잘못된 것인가?"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 67%, $475, 12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 67%, $475, 12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2a30d86c588824563806",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SNDK",
        "SPY",
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
      "headline": "Sandisk Sinks 9% Despite Earnings Beat, Raised Guidance and 8-for-1 Split; Western Digital Tumbles 8%, Seagate Slides 7%, Micron Falls 6%",
      "headlineKo": "Sandisk는 실적 저조, 가이던스 상향 및 8대1 분할에도 불구하고 9% 하락했습니다. Western Digital 하락 8%, Seagate 하락 7%, Micron 하락 6%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f69bafad3da32bf7459890c8e19694ff814943466021c9678fb2954cc7dabe33",
        "publishedAt": 1793366244,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk는 실적 저조, 가이던스 상향 및 8대1 분할에도 불구하고 9% 하락했습니다. Western Digital 하락률 8%, Seagate Slides 7%, Micron 하락률 6% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.20 −1.07% Dow Jones 51,976.00 −0.76% Nasdaq 100 28,491.00 −2.05% Russell 2000 2,808.65 −1.80% S&P 500 7,602.20 −1.07% 다우존스 51,976.00 −0.76% 나스닥 100 28,491.00 −2.05% 러셀 20",
        "올해 가장 인기 있는 주식 중 하나를 팔 만큼 투자자들을 놀라게 한 것은 무엇입니까? 작성자: David Moadel 2026년 10월 30일 오전 9시 17분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 9%, 8%, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 9%, 8%, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f8676083a56f9f37ed0c",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "EME",
      "relatedTickers": [
        "AMD",
        "EME",
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
      "headline": "How Investors May Respond To EMCOR Group (EME) Raised 2026 Guidance",
      "headlineKo": "투자자가 EMCOR 그룹(EME)이 제기한 2026년 지침에 대응할 수 있는 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6ec621216d5bc77b988a787a7ab5c5834c3235f026f7ba675a9d9fd488a8987",
        "publishedAt": 1793366074,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 EME의 사업과 관련된 'How Investors May Respond To EMCOR Group (EME) Raised 2026 Guidance' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "6899744b4216d2f79d78",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SNDK Stock Set To Revisit August Levels Despite Earnings Beat — Analysts Flag Valuation Concerns, Slowing Earnings Upside",
      "headlineKo": "SNDK 주식은 수익 감소에도 불구하고 8월 수준을 재검토할 예정 — 분석가들은 가치 평가에 대한 우려를 표명하여 수익 상승 둔화",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=411a524b93877c0ce3b3702f889e80baf395194db91d3b684d46f2112a8bee05",
        "publishedAt": 1793366045,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SNDK 주식은 수익 감소에도 불구하고 8월 수준을 재검토할 예정 — 분석가들은 가치 평가에 대한 우려를 표명하여 수익 상승 둔화"
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
          "ticker": "SNDK",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "1ce501ef361568b6d97b",
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
      "headline": "Vertiv Has Tumbled Since May: Why Bernstein Sees 53% Upside After Its Big Beat",
      "headlineKo": "Vertiv는 5월 이후 하락세를 보였습니다: Bernstein이 큰 폭의 상승 이후 53%의 상승 여력을 보이는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=908cc1aea32940e151de1c612ef4c8a808feb3d00f1c2ea07c98d6ccd568abe9",
        "publishedAt": 1793365980,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv는 5월 이후 하락세를 보였습니다: Bernstein이 큰 폭의 상승 이후 53%의 상승 여력을 보이는 이유 | TIKR.com General Investing Vertiv는 5월 이후 하락했습니다: Bernstein이 큰 폭의 상승 이후 53%의 상승 여력을 보이는 이유 Rexielyn Diaz • 5분 읽기 검토자: David Hans",
        "Bernstein은 10월에도 Outperform 등급을 유지했습니다.",
        "목표주가는 29일 368달러에서 376달러로 10월보다 약 53% 높였다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 53%, 35%, 61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 53%, 35%, 61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "41501b25c7815b1a77a3",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
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
      "headline": "Amazon Slides 7% as Earnings Miss and AI Spending Turn Free Cash Flow Negative; Meta Falls 2%, Alphabet Dips, Walmart Gains 2%",
      "headlineKo": "Amazon은 실적 부진과 AI 지출로 인해 잉여현금흐름이 마이너스로 전환되면서 7% 하락했습니다. 메타 하락 2%, 알파벳 하락, 월마트 상승 2%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b81a4de86f69370ba7626576c5f97c64f1fc869f993129f417460726b12bd943",
        "publishedAt": 1793365922,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon은 실적 부진과 AI 지출로 인해 잉여현금흐름이 마이너스로 전환되면서 7% 하락했습니다. Meta Falls 2%, Alphabet Dips, Walmart 2% 상승 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.20 −1.07% Dow Jones 51,976.00 −0.76% Nasdaq 100 28,491.00 −2.05% Russell 2000 2,808.65 −1.80% S&P 500 7,602.20 −1.07% 다우존스 51,976.00 −0.76% 나스닥 100 28,491.00 −2.05% 러셀 20",
        "AI 지출 물결이 닥치는 것을 지켜보는 투자자들에게 그 긴장이 의미하는 바는 다음과 같습니다. David Moadel 작성 2026년 10월 30일 오전 9시 12분(ET) · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 2%, $226.26 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, 2%, $226.26 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "489be6a428f0c1067b0d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Intel Plunges 25% as Weak Outlook and PC Slump Overshadow Earnings Beat; Dell Tumbles 13%, AMD Sinks 10%, NVIDIA Falls 3%",
      "headlineKo": "인텔은 약한 전망과 PC 부진으로 실적이 더 나빠지면서 25% 급락했습니다. Dell 하락 13%, AMD 하락 10%, NVIDIA 하락 3%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b1380d538fb3a19a4f334371c25ec9accacaa1a70a6353727bcea3e7d0c76863",
        "publishedAt": 1793365796,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔은 약한 전망과 PC 부진으로 실적이 더 나빠지면서 25% 급락했습니다. Dell 하락 13%, AMD 하락 10%, NVIDIA 하락 3% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.20 −1.07% Dow Jones 51,976.00 −0.76% Nasdaq 100 28,491.00 −2.05% Russell 2000 2,808.65 −1.80% S&P 500 7,602.20 −1.07% 다우존스 51,976.00 −0.76% 나스닥 100 28,491.00 −2.05% 러셀 20",
        "작성자: David Moadel 2026년 10월 30일 게시, 오전 9시 9분(ET) · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 25%, 13%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 25%, 13%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "db0a48ac57f2be37df24",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Think You Missed Out on Micron's Run? Think Again.",
      "headlineKo": "Micron의 성과를 놓쳤다고 생각하시나요? 다시 생각해 보세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3c542736cc1e508bae469973a20bdb717d08e1b37384baaaecea9e8221520bb",
        "publishedAt": 1793365380,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron의 성과를 놓쳤다고 생각하시나요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron Technology( MU -5.31% )는 지난 1년 동안 경이로운 강세를 보였으며 짧은 기간 동안 주가가 거의 350%나 급등했습니다.",
        "마이크론의 놀라운 상승세는 매출과 수익 모두에서 인상적인 성장에 힘입은 것입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $884.70, $49.57, 5.31% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $884.70, $49.57, 5.31% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ff7cefcb3aa5f6b4c8c2",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "EME Q3 Earnings Call Highlights Data Center Demand and Higher Outlook",
      "headlineKo": "EME Q3 실적 회의에서 데이터 센터 수요 및 더 높은 전망 강조",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8197478181bc0caea072dc5eb44e146b5012c0116204af3366d3eb10aa6711c",
        "publishedAt": 1793365200,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EME Q3 Earnings Call Highlights Data Center Demand and Higher Outlook",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "5a62b510870d5434ba51",
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
      "headline": "Microsoft Sold $25 Billion in Bonds a Day After Its Azure Beat. Here’s Where the Stock Could Go by 2031",
      "headlineKo": "Microsoft는 Azure Beat 이후 하루에 250억 달러의 채권을 판매했습니다. 2031년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=33a1623a9f4976ff483383fbc707fbfe4252383e9edc491507e54740065cd32f",
        "publishedAt": 1793365188,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft는 Azure Beat 이후 하루에 250억 달러의 채권을 판매했습니다.",
        "2031년까지 주식이 갈 수 있는 곳은 다음과 같습니다 | TIKR.com 주식 리뷰 Microsoft는 Azure Beat 이후 하루에 250억 달러의 채권을 판매했습니다.",
        "2031년까지 주식이 갈 수 있는 곳은 다음과 같습니다. Wiltone Asuncion • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 30일 @Industrial Photograph via Canva, @Elisanth_ from Getty Images via Canva Microsoft Stock Current Pri에 대한 주요 통계"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $25 Billion, $530.14, $1,290 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $25 Billion, $530.14, $1,290 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "23933066ecce10352c3e",
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
      "headline": "Oracle Is Down 53% in a Year and Trades at 15 Times Earnings. Wall Street Still Sees $230+",
      "headlineKo": "오라클은 1년 만에 53% 하락했으며 15배의 수익을 올렸습니다. 월스트리트는 여전히 230달러 이상을 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25839f36ea677f0ab90f8d2d6d36c7c8251f960e290817017a5ec6bac2b464ef",
        "publishedAt": 1793364454,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클은 1년 만에 53% 하락했으며 15배의 수익을 올렸습니다.",
        "월 스트리트는 여전히 230달러 이상을 보고 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.20 −1.07% Dow Jones 51,976.00 −0.76% Nasdaq 100 28,491.00 −2.05% Russell 2000 2,808.65 −1.80% S&P 500 7,602.20 −1.07% 다우존스 51,976.00 −0.76% 나스닥 100 28,491.00 −2.05% 러셀 20"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 53%, 15 Times, $230 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 53%, 15 Times, $230 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "59611b92ccb893f134eb",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta’s AI raid triggers monopoly abuse investigation",
      "headlineKo": "메타의 AI 습격으로 독점 남용 조사 시작",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=65f733ae8f0b152ceedf4b3e6d3129f74943305a16e0325cd14511bedd738d26",
        "publishedAt": 1793364275,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타의 AI 습격으로 독점 남용 조사 시작"
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
      "id": "cf600de94f000233a5af",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Nvidia Facing Questions As Suspected Chinese Intelligence Asset Got Close to Jensen Huang",
      "headlineKo": "엔비디아는 중국 정보 자산이 Jensen Huang과 가까워지면서 질문에 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=79c73ebd89841519652d517b77237311e61584e2cb699dee35b233724f3bcdb3",
        "publishedAt": 1793363579,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔비디아는 의심되는 중국 정보 자산이 Jensen Huang에 가까워지면서 질문에 직면합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.20 −1.07% Dow Jones 51,976.00 −0.76% Nasdaq 100 28,491.00 −2.05% Russell 2000 2,808.65 −1.80% S&P 500 7,602.20 −1.07% 다우존스 51,976.00 −0.76% 나스닥 100 28,491.00 −2.05% 러셀 20",
        "이제 의회는 답변을 원하며 이해관계는 그 이상입니다... 작성자: Omor Ibne Ehsan 2026년 10월 30일 게시, 오전 8:32(ET) · 3분 읽기 𝕏 f ⧉ NVIDIA CEO Jensen Huang이 New York Times DealBook Summit에서 참석자들에게 연설합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $213.66, 0.8%, $5.16 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $213.66, 0.8%, $5.16 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "73821e30889c667457c4",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV",
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
      "headline": "Buy, Sell, or Hold? Today’s Top Upgrades and Downgrades: Boston Scientific, DoorDash, GE Vernova, Honeywell Aerospace, Incyte. Intel, Reddit, Rivian Automotive, and More",
      "headlineKo": "구매, 판매 또는 보유? 오늘날의 주요 업그레이드 및 다운그레이드: Boston Scientific, DoorDash, GE Vernova, Honeywell Aerospace, Incyte. Intel, Reddit, Rivian Automotive 등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d569d18b28473863dacb3dcab2dd65c6010f628c18d45a60ba40661266a0ee82",
        "publishedAt": 1793362481,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘날의 주요 업그레이드 및 다운그레이드: Boston Scientific, DoorDash, GE Vernova, Honeywell Aerospace, Incyte.",
        "Intel, Reddit, Rivian Automotive 등 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.20 −1.07% Dow Jones 51,976.00 −0.76% Nasdaq 100 28,491.00 −2.05% Russell 2000 2,808.65 −1.80% S&P 500 7,602.20 −1.07% 다우존스 51,976.00 −0.76% 나스닥 100 28,491.00 −2.05% 러셀 20"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.5%, $283.82,, 12.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.5%, $283.82,, 12.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2b0b6acc725a494df875",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Satya Nadella Just Took a Shot at Oracle and CoreWeave",
      "headlineKo": "Satya Nadella가 방금 Oracle과 CoreWeave에 도전했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61a5ce9b32f7a42b7da1de1e0ddc31477aac623e03ce3546f813fce72bdc308e",
        "publishedAt": 1793360826,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Satya Nadella는 방금 Oracle 및 CoreWeave에서 촬영했습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.20 −1.07% Dow Jones 51,976.00 −0.76% Nasdaq 100 28,491.00 −2.05% Russell 2000 2,808.65 −1.80% S&P 500 7,602.20 −1.07% 다우존스 51,976.00 −0.76% 나스닥 100 28,491.00 −2.05% 러셀 20",
        "댓글은 포지셔닝일 수 있지만 그 뒤에 있는 숫자는 이해하기 어렵습니다. 작성자: Joel South 2026년 10월 30일 게시, 오전 7:47(ET) · 3분 읽기 𝕏f ⧉ Microsoft CEO Satya Nadella가 회사의 선구적인 AI 전략에 대해 논의합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.43%, 5.12%, 2.41% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.43%, 5.12%, 2.41% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "57148dde4a5474a6fb0b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "If a Stock Market Crash Is Coming, History Suggests These Are 2 Crucial Moves to Make.",
      "headlineKo": "주식 시장 붕괴가 다가오고 있다면, 역사는 이것이 2가지 중요한 조치라고 제안합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7d9b62b18be529d2d0d4e394c64d4d0bf78853979532c66d437a033a184e8c0",
        "publishedAt": 1793360101,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "주식 시장 붕괴가 다가오고 있다면, 역사는 이것이 2가지 중요한 조치라고 제안합니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 지난 몇 년 동안 S&P 500은 투자자들이 높이 평가하는 일을 해왔습니다.",
        "그것은 더 높이 솟아올랐고, 올해도 강세장은 계속해서 확장되고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 100%, 83% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 100%, 83% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f8b085c519e71046caf3",
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
      "headline": "Should Investors Buy Seagate's Shares After Q1 Earnings Momentum?",
      "headlineKo": "1분기 실적 모멘텀 이후 투자자들은 Seagate의 주식을 구매해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df3f5d77861ce8e751311a16f2e04e0ff78a0d8548d679de1821f4a26b20ce84",
        "publishedAt": 1793359380,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Should Investors Buy Seagate's Shares After Q1 Earnings Momentum?",
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
      "id": "eb3db0164d18b75d222b",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Broadcom’s $63B Anthropic Deal Could Be The One That Finally Gets it Into Gear",
      "headlineKo": "Broadcom의 630억 달러 규모의 Anthropic 거래가 마침내 장비에 적용되는 거래가 될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00f864c323fcb147a4dfe1eaabfb1dc30088024ec6594a25beca5de93e6cd56e",
        "publishedAt": 1793358957,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom의 630억 달러 규모의 Anthropic 거래가 마침내 장비에 적용되는 거래가 될 수 있습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "b10856bb8836abe07ae4",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "AMZN",
        "GEV",
        "INTC",
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
      "headline": "GEV Stock In Focus Amid Mixed Analyst Views — HSBC Upgrades GE Vernova To Buy, Says Wind Business Is ‘Past The Worst’",
      "headlineKo": "분석가들의 견해가 엇갈리는 가운데 GEV 주식에 집중 — HSBC, GE Vernova를 매수로 업그레이드, 풍력 사업이 '최악을 지나갔다'고 말함",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=54f780c20736dda53dc5076705ac0ffa77efcd6349ec0a496867da0537ee41e7",
        "publishedAt": 1793358385,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엇갈린 분석가들의 견해 속에 초점을 맞춘 GEV 주식 — HSBC는 GE Vernova를 매수로 업그레이드하고 풍력 사업은 '최악'을 지났다고 말합니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.72% SPY 1.59% QQQ 3.26% 추세 INTC 29.67% SNDK 12.18% RDDT 29.52% AMZN 1.92%",
        "엇갈린 분석가들의 견해 속에서 GEV 주식에 집중 - HSBC, GE Vernova를 매수로 업그레이드하고 풍력 사업이 '최악'을 지나갔다고 말함 HSBC는 목표 가격을 1,040달러에서 1,100달러로 인상했으며 GE Vernova의 풍력 부문이 \"대체로 위험에 처해 있는 것 같다\"고 말했습니다.",
        "이 사진 일러스트에는 GE Vernova 회사 로고가 스마트폰 화면에 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.72%, 1.59%, 3.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.72%, 1.59%, 3.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "15be5896c4767c4489e9",
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
      "headline": "Arm Is Up 99% in 2026: Take Profits, or Buy More?",
      "headlineKo": "2026년 Arm 상승률 99%: 이익을 얻느냐, 아니면 더 많이 사느냐?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69516da2fcd75fe0d0df2da0a3e2a188b8abcbe6a6724994c17bac55d6fcc57d",
        "publishedAt": 1793357286,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2026년 Arm 상승률 99%: 이익을 얻느냐, 아니면 더 많이 사느냐?",
        "| TIKR.com 일반 투자 부문은 2026년에 99% 증가합니다: 이익을 얻거나 더 많이 구매합니까?",
        "Gian Estrada • 5분 읽기 검토자: David Hanson 최종 업데이트: 2026년 10월 30일 sasirin pamai의 이미지 및 Getty Images의 yangwenshuang Canva를 통한 서명 주요 내용 Arm Holdings(ARM) 주가는 데이터 제공으로 2026년에 99% 상승했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 99%, 8%, $2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 99%, 8%, $2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0d28310f175e470f9a32",
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
      "headline": "Apple Earnings Ahead: What Past Reactions Say About The Stock",
      "headlineKo": "앞으로의 Apple 수익: 주식에 대한 과거 반응이 말하는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf6e46010af14dbb14999a0faf0e5a44be9e78e0436321d78735f259713db609",
        "publishedAt": 1793354213,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "앞으로의 Apple 수익: 주식에 대한 과거 반응이 말하는 것"
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
      "id": "7dd16d041d043dccc441",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "HUBB",
      "relatedTickers": [
        "HUBB"
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
      "headline": "5 revealing analyst questions from Hubbell’s Q3 earnings call",
      "headlineKo": "Hubbell의 3분기 실적 발표에서 공개된 분석가 질문 5가지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ccfc813282bf17bb95b97394a5c5ea99a186466ab8e760a950880eff749bda59",
        "publishedAt": 1793353649,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "5 revealing analyst questions from Hubbell’s Q3 earnings call",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "HUBB의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "HUBB에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "HUBB의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "HUBB",
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
      "id": "9af069dc1d1a922f4f01",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "EMCOR Group: Another Earnings Beat Could Provide A Floor",
      "headlineKo": "EMCOR 그룹: 또 다른 수익 상승으로 바닥을 제공할 수 있음",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1f3aef2fd61c63e4d956b11658e9109e55e5fb22ac6a58dd10cd5a7b76401944",
        "publishedAt": 1793353277,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR Group: Another Earnings Beat Could Provide A Floor",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "ded29a8f82a4a8690b06",
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
      "headline": "B. Riley Securities Maintains Neutral on Coherent, Lowers Price Target to $262",
      "headlineKo": "B. Riley Securities는 Coherent에 대해 중립을 유지하고 목표 가격을 262달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4bc3ea531cb81e0c2c5a254576de5b537976cf63dcf1774548dfcc3fb13be893",
        "publishedAt": 1793351623,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "B. Riley Securities Maintains Neutral on Coherent, Lowers Price Target to $262",
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
      "id": "b92dbb1712ca4bf77679",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "AVGO",
        "GOOGL",
        "INTC",
        "QQQ",
        "SNDK",
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
          "name": "Broadcom",
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
      "headline": "Stocktwits Wall Street Wrap — Tesla, Broadcom, MercadoLibre Get Bullish Calls As Alphabet, Enphase Face Downgrades",
      "headlineKo": "Stocktwits 월스트리트 랩 — Tesla, Broadcom, MercadoLibre가 알파벳으로 강세 전화를 받고 Enphase Face Downgrades",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c5c2950ec23adfded7279946ece523231db65c988c21898a7d230997b282d3d",
        "publishedAt": 1793350846,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits Wall Street Wrap — Tesla, Broadcom, MercadoLibre는 알파벳으로 강세 전화를 받고, Enphase Face는 AI 에이전트를 다운그레이드합니다. 동향 뉴스 수익 전체 DIA 0.90% SPY 1.78% QQQ 3.53% 추세 INTC 29.90% SNDK 12.79% RDDT 29.68% SOXL 27.43% NV",
        "Stocktwits Wall Street Wrap — Tesla, Broadcom, MercadoLibre는 알파벳으로 낙관적인 전화를 받고 Enphase Face Downgrades 이번 주 분석가 움직임은 태양열, 검색 광고가 자신감을 얻는 동안 일부 기술 및 전자 상거래 회사를 강조했습니다.",
        "Tesla CEO Elon Musk가 홍콩에서 기자회견을 하는 동안 Model S 옆에서 언론과 이야기하고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.90%, 1.78%, 3.53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.90%, 1.78%, 3.53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "88f834a1982fb8be3756",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "AMZN",
        "INTC",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today: Dow Jones, S&P 500, Nasdaq 100 Futures Trade Mixed as AMZN, INTC Slide After Q3 Earnings—DELL, LLY, AZN in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: Dow Jones, S&P 500, Nasdaq 100 선물 거래는 3분기 실적 이후 AMZN, INTC 하락으로 혼합되었습니다. - DELL, LLY, AZN에 초점(업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=38b297b50ac214de852f9fa03a994a7f3adeec5cc79a286c9395bc0847627a71",
        "publishedAt": 1793349793,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stock Market Today: Dow Jones, S&P 500, Nasdaq 100 Futures Trade Mixed as AMZN, INTC Slide After Q3 Earnings—DELL, LLY, AZN in Focus (UPDATED)",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "875f4e29481ba34fd27e",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Evercore ISI Group Maintains Outperform on Quanta Services, Raises Price Target to $850",
      "headlineKo": "Evercore ISI 그룹, Quanta 서비스에서 우수한 성과를 유지하고 목표 가격을 850달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8b8f1a79a6eb2f7a7f956254267b041f2589f0669ce95fc36aa44beb18232f22",
        "publishedAt": 1793349768,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Evercore ISI Group Maintains Outperform on Quanta Services, Raises Price Target to $850",
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
      "id": "ab8c3c94a2df6bbb052f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
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
      "headline": "Alphabet's $482B Wipeout Sparks AI Spending Fears: Is QQQ's Big Tech Exposure Becoming a Risk?",
      "headlineKo": "Alphabet의 4,820억 달러 전멸로 인해 AI 지출에 대한 우려가 촉발됨: QQQ의 거대 기술 노출이 위험해지고 있습니까?",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c17d0eb62617989532bb892bf2c11e17712070198437fcc7112bff6caf92f8d5",
        "publishedAt": 1793349027,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet's $482B Wipeout Sparks AI Spending Fears: Is QQQ's Big Tech Exposure Becoming a Risk?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "caede68a89cec9ffef29",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "KLA (KLAC) Stock Gains Attention As Q1 Earnings Meet Valuation Doubts",
      "headlineKo": "KLA (KLAC) 주식은 1분기 실적이 가치 평가 의심을 만나면서 주목을 받고 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9acb51f0febad64725ee04344a43cae568dc811bd8ed6a5386870b4834982e89",
        "publishedAt": 1793348358,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA (KLAC) Stock Gains Attention As Q1 Earnings Meet Valuation Doubts",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "b412df5c436ce2178df8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "NVDA",
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
      "headline": "Could Apple's First Touchscreen MacBook Pro, First Foldable iPhone Duo Phone, and HomeView Pole Vault Apple Beyond Nvidia to Become the First Company in the $10 Trillion Club?",
      "headlineKo": "Apple의 첫 번째 터치스크린 MacBook Pro, 첫 번째 폴더블 iPhone Duo 휴대폰, HomeView Pole Vault Apple이 Nvidia를 넘어 10조 달러 클럽의 첫 번째 회사가 될 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5469262d8f7c7e99e53e6e63f02e1d8ad9d57e92dfc5c18d536d6c9274b0ba06",
        "publishedAt": 1793347800,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple의 첫 번째 터치스크린 MacBook Pro, 첫 번째 폴더블 iPhone Duo 휴대폰, HomeView Pole Vault Apple이 Nvidia를 넘어 10조 달러 클럽의 첫 번째 회사가 될 수 있을까요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능(AI) 붐이 새로운 종류의 기술왕으로 등극했습니다.",
        "개인에게 제품이나 소프트웨어를 직접 제공하는 회사 대신 이 시가총액 선두 기업은 AI 칩 전문성을 통해 추진력을 얻었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10 Trillion, 0.80%, $5 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10 Trillion, 0.80%, $5 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9ed0edfbe42b9d861d20",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AAPL",
        "AMZN",
        "GOOGL",
        "INTC",
        "META",
        "MSFT",
        "NVDA",
        "QQQ",
        "SNDK",
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
      "headline": "Stocktwits AI Roundup: Intel, Amazon, Alphabet Results Trigger Meltdown As Big Tech’s Record Spending Returns To Focus",
      "headlineKo": "Stocktwits AI Roundup: Intel, Amazon, Alphabet 결과는 Big Tech의 기록적인 지출이 다시 집중됨에 따라 붕괴를 유발합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=544f8ceb63673476c922742e2395753107476625ca1607f20698a02929e45c17",
        "publishedAt": 1793347648,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits AI Roundup: Intel, Amazon, Alphabet 결과는 Big Tech의 기록적인 지출이 AI 에이전트에 집중되면서 붕괴를 촉발했습니다. 동향 뉴스 수익 모든 DIA 0.08% SPY 1.01% QQQ 2.32% Trending BTC 3.16% INTC 25.87% SNDK 8.02% AMZN 7.42% RD",
        "Stocktwits AI Roundup: Intel, Amazon, Alphabet 결과는 Big Tech의 기록적인 지출이 다시 초점을 맞추면서 붕괴를 촉발했습니다. 전반적으로 기술 주식은 금요일을 앞두고 밤새 거래에서 급락했습니다.",
        "Nvidia, Apple, Alphabet, Amazon, Microsoft, Meta 및 Tesla 로고가 휴대폰 화면에 표시되고 예시적인 주식 그래프가 노트북 화면에 표시됩니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.08%, 1.01%, 2.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.08%, 1.01%, 2.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b451adfc27e3c8be1e84",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "GLJ Research Maintains Sell on GE Vernova, Raises Price Target to $540",
      "headlineKo": "GLJ Research, GE Vernova에 대한 매도 유지, 목표 가격을 540달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1a357cbc1a6cb4793fd2354ac3a73155c3f5f49b3c6279ba6e80c45a13002fdb",
        "publishedAt": 1793347299,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GLJ Research Maintains Sell on GE Vernova, Raises Price Target to $540",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "b567c52faf3df2135f2c",
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
      "headline": "Oracle Just Capped How Much New Money It Will Raise. I'd Consider Buying a Small Stake in the Stock.",
      "headlineKo": "오라클은 얼마만큼의 새로운 자금을 조달할 것인지를 막았습니다. 나는 주식의 작은 지분을 사는 것을 고려하고 싶습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=842a272dd9fd3986a39f51eec7218337918e54dffe504de8cb2b84fc91aeb16e",
        "publishedAt": 1793347261,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클은 얼마만큼의 새로운 자금을 조달할 것인지를 막았습니다.",
        "나는 주식의 작은 지분을 사는 것을 고려하고 싶습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Oracle( ORCL -5.87% )은 10월 수요일 투자자 데이를 이용했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $225 billion, $21, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $225 billion, $21, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "201321795d2b79494035",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMZN",
        "INTC",
        "NVDA",
        "QQQ",
        "SNDK",
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
      "headline": "NVDA Stock Drops: Nvidia May Back Data Center Loan Its Own Customer, Analyst Sees Little Impact From Intel’s Weak Report",
      "headlineKo": "NVDA 주가 하락: Nvidia가 자체 고객에게 데이터 센터 대출을 지원할 수 있음, 분석가는 Intel의 취약한 보고서에 거의 영향을 받지 않음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b599ef299c6f21cb13de346fe40c20fc70de2324fb560e4bd69af2aa92844679",
        "publishedAt": 1793344958,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVDA 주식 하락: Nvidia는 자체 고객을 위해 데이터 센터 대출을 지원할 수 있으며, 분석가는 Intel의 취약한 보고서에서 거의 영향을 받지 않는다고 봅니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.04% SPY 1.00% QQQ 2.26% 추세 BTC 3.23% INTC 25.43% SNDK 7.79% AMZN 7.",
        "NVDA 주식 하락: Nvidia는 자체 고객을 위해 데이터 센터 대출을 지원할 수 있으며, 분석가는 Intel의 약한 보고서가 거의 영향을 미치지 않는다고 봅니다. Intel과 Amazon의 분기별 보고서는 시장 후 시간에 기술 주식의 매도를 촉발했습니다.",
        "2026년 6월 22일 중국 베이징에서 열린 제4회 중국 국제 공급망 엑스포 동안 엔비디아 부스를 전반적으로 보여줍니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.04%, 1.00%, 2.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.04%, 1.00%, 2.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2431df6cb426bee2411e",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Learn Why The Bull Case For Micron Stock Could Change Following Memory Shortage Warning",
      "headlineKo": "메모리 부족 경고에 따라 Micron 주식의 상승세가 바뀔 수 있는 이유를 알아보세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a8cff43da350ec57896b334dd6fc8dabefbc7e6fa6dd6c4747f756f77ef3d75",
        "publishedAt": 1793344578,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Learn Why The Bull Case For Micron Stock Could Change Following Memory Shortage Warning",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "c6065afd266a8fb9aa86",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
        "INTC",
        "SPY",
        "TSM"
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
      "headline": "Applied Materials vs. Taiwan Semiconductor Manufacturing: Comparing Revenue Growth Trends Between These Artificial Intelligence Companies",
      "headlineKo": "어플라이드 머티어리얼즈 vs. 대만 반도체 제조: 인공지능 기업 간 수익 성장 추세 비교",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d1e9ec74665b4ba416b6880cc7cd1b9be20fc6c070d61ce6d6fec6bf2efe542",
        "publishedAt": 1793344319,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만 반도체 제조: 인공 지능 기업 간의 수익 성장 추세 비교 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Applied Materials: A Gra에 합류하세요",
        "올해에는 협업 엔지니어링을 위해 특별히 설계된 대규모 연구 개발 센터를 캘리포니아에 공식적으로 공개했으며, 이사회에 참여할 새로운 임원을 추가로 임명했습니다.",
        "Taiwan Semiconductor Manufacturing: 지속적인 수익 확대 Taiwan Semiconductor Manufacturing Company( TSM -5.32% )는 주로 글로벌 전용 파운드리, 즉 제조, 패키지 및 메티큐를 운영하여 수익을 얻습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.32%, $7.2 billion, $26.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.32%, $7.2 billion, $26.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2e3d3b334365bbfb16e0",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "EPS: Earnings Weighting Can Outpace S&P 500 In Q4 And 2027",
      "headlineKo": "EPS: 4분기와 2027년에는 수익 가중치가 S&P 500을 능가할 수 있습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0df061bf8edaf178c2e3d8adf7d87b3394b02ba5df2eab0e0890dfe2ff660825",
        "publishedAt": 1793343986,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EPS: Earnings Weighting Can Outpace S&P 500 In Q4 And 2027",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "9d3ed1f8416201f6c599",
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
      "headline": "The Case Against a SpaceX and Tesla Merger",
      "headlineKo": "SpaceX와 Tesla 합병에 반대하는 사례",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88ab17534752bbf924b90cc37e81263a24a5c40b875e714ddbce57d49ffb89ec",
        "publishedAt": 1793343000,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX와 Tesla 합병에 반대하는 사례 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 잠재적인 합병을 위해 어떤 조건이 테이블에 있는지는 모르지만 강력한 가능성이 있습니다.",
        "이 주장은 두 가지 주요 아이디어에 기초하고 있습니다.",
        "첫째, 시장 동향에 어긋납니다. 둘째, Tesla는 수년간의 실망 끝에 상당한 주주 가치를 제공하기 직전입니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $403.30, $0.92, 0.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $403.30, $0.92, 0.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5c5ebacde7fe36a1031f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "AMZN",
        "INTC",
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
      "headline": "Stocktwits Passport Portfolio: SPY, DIA Edge Higher In October, Beating QQQ And Asian Stocks Amid Tech Volatility",
      "headlineKo": "Stocktwits 여권 포트폴리오: 기술 변동성 속에서 SPY, DIA Edge가 10월에 QQQ 및 아시아 주식을 제치고 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=808e938e31b35f0219b8e2faf62b72e159c3d06e41b1940cfa0ba7d10288323b",
        "publishedAt": 1793342585,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits 여권 포트폴리오: SPY, DIA Edge는 10월 기술 변동성 속에서 QQQ 및 아시아 주식을 제치고 AI 에이전트 동향 뉴스 수익 전체 DIA 0.78% SPY 1.64% QQQ 3.28% 추세 INTC 30.14% SNDK 12.21% RDDT 29.19% AMZN 2.00% QQQ",
        "Stocktwits 여권 포트폴리오: 10월 SPY, DIA Edge 상승, 기술 변동성 속에서 QQQ 및 아시아 주식을 제치고 SPDR S&P 500 ETF Trust 및 SPDR Dow Jones Industrial Average ETF는 O에서 각각 약 1% 및 3% 상승을 향하고 있습니다.",
        "한 남자가 디지털 게시판을 보고 미국 다음으로 대만 증권 거래소 사무실의 주가가 급등하는 것을 보여줍니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.78%, 1.64%, 3.28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.78%, 1.64%, 3.28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cda726d7987cbec9c952",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "PLTR",
      "relatedTickers": [
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
      "headline": "Palantir Technologies vs. Figma: Comparing Revenue Growth Trends",
      "headlineKo": "Palantir Technologies와 Figma: 수익 성장 추세 비교",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4307294b13ae8ebd5fdb33d1e5df7817aa75c5431cf718989f481e0c6aed367",
        "publishedAt": 1793342437,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Figma: 수익 성장 추세 비교 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Figma에 합류: 꾸준한 상승세 수익 추세 Figma(FIG -3.52%)는 주로 협업 브라우저-b를 개발합니다.",
        "최근에는 여러 가지 인공 지능 설계 기능을 출시했으며 최고 경영자(CEO)가 자발적으로 4,600만 달러의 주식 보상을 몰수했다고 밝혔습니다.",
        "Palantir Technologies: 수익 증가 추세 가속화 Palantir Technologies( PLTR -5.20% )는 정보 커뮤니티와 상업 기업이 복잡한 내부에 숨겨진 패턴을 발견할 수 있도록 지원하는 고급 소프트웨어 플랫폼을 설계합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $46 million, 5.20%, $198.6 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $46 million, 5.20%, $198.6 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9593e7da3d0d28ebe5cd",
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
      "headline": "Amazon's After-Hours Drop Leaves It Below Wall Street's Lowest Price Target",
      "headlineKo": "아마존의 영업시간 외 하락으로 월스트리트의 최저 가격 목표 아래로 떨어졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=086d495ab3aba01b8dd28b58992a7f57848b43696b3e972ebf8c2518a64ebea9",
        "publishedAt": 1793340330,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon's After-Hours Drop Leaves It Below Wall Street's Lowest Price Target",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "c83570ed4b6375b228d3",
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
      "headline": "Applied Materials: A 51% Growth Quarter At 23x Forward Earnings",
      "headlineKo": "어플라이드 머티어리얼즈: 분기 순익 23배, 51% 성장",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=884161bfcf78cf8a9813e1eb3e09246fc1bde67c0eb01c909686fa245ac8ee8b",
        "publishedAt": 1793339889,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티어리얼즈: 분기 순익 23배, 51% 성장"
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
      "id": "107e016713e23efd519c",
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
      "headline": "Apple supplier Luxshare falls as Q3 profit growth slows; 9M profit misses forecast",
      "headlineKo": "Apple 공급업체인 Luxshare는 3분기 이익 성장이 둔화되면서 하락했습니다. 900만 이익 손실 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aebbde9f4d51aa9b38bd966841a5ea94b6f5eb2dd99333f8762f36bbbe844635",
        "publishedAt": 1793338575,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple supplier Luxshare falls as Q3 profit growth slows; 9M profit misses forecast",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple supplier Luxshare falls as Q3 profit growth slows; 9M profit misses forecast' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ae25a5f4e8d88480b225",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "INTC",
        "MSFT",
        "QQQ",
        "SNDK",
        "SPY",
        "TSLA"
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
      "headline": "Big Tech Capex Scorecard: Amazon Spends Over $77B In One Quarter — How It Stacks Up With MSFT, TSLA, GOOGL",
      "headlineKo": "Big Tech Capex Scorecard: Amazon은 한 분기에 770억 달러 이상을 지출합니다. MSFT, TSLA, GOOGL과 비교하여 비교하면 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f6b2beae9f5c0d2265589cfb47eba8e599d42190cf3c4e90228ee3c5d90f2413",
        "publishedAt": 1793337370,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "거대 기술 투자 성과표: Amazon은 한 분기에 770억 달러 이상 지출 — MSFT, TSLA, GOOGL AI 에이전트와 비교하여 누적되는 방식 동향 뉴스 수익 전체 DIA 0.08% SPY 1.01% QQQ 2.32% 추세 BTC 3.16% INTC 25.87% SNDK 8.02% AMZN 7.42% RDDT 22.08% BN",
        "대형 기술 투자 성과표: Amazon은 한 분기에 770억 달러 이상을 지출합니다. MSFT, TSLA, GOOGL과의 비교 기술 주가는 10월에 급격히 하락하여 AI 거품에 대한 우려가 커지고 있음을 나타냅니다.",
        "이 사진 일러스트에는 구글, 애플, 메타, 아마존, 마이크로소프트(빅테크) 로고가 스마트폰 화면에 표시된 모습이 담겨 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $77, 0.08%, 1.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $77, 0.08%, 1.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4b65f7429120714a8b70",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "EMCOR Group Q3 Earnings Call Highlights",
      "headlineKo": "EMCOR 그룹 3분기 실적 발표 하이라이트",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9ad8c1dac9b630a45df67937886e552e31fabea4c72bc1f76a43d3a6a4455eb",
        "publishedAt": 1793333650,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR 그룹 3분기 실적 발표 하이라이트"
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
          "ticker": "EME",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "e1a534c3ce2a065b5b31",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMZN",
        "INTC",
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
      "headline": "Dow, S&P 500, Nasdaq Futures Fall As Weak Tech Earnings Trigger Selloff: INTC, IOVA, SLS, AMZN Stocks In Focus",
      "headlineKo": "Dow, S&P 500, Nasdaq 선물은 약한 기술 수익이 매도를 촉발하면서 하락: INTC, IOVA, SLS, AMZN 주식에 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f89f045a29e0ff0cad154ff77c0a6cbf05b21220ee222c9602ecb434f116efb7",
        "publishedAt": 1793332985,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dow, S&P 500, Nasdaq 선물은 약한 기술 수익이 매도를 촉발하면서 하락합니다: INTC, IOVA, SLS, AMZN 주식에 초점 AI 에이전트 동향 뉴스 수익 모든 DIA 0.04% SPY 0.97% QQQ 2.26% 추세 BTC 3.21% INTC 25.54% SNDK 7.79% AMZN 7.31% 8월 22일 RDDT",
        "Dow, S&P 500, Nasdaq 선물은 약한 기술 실적이 매도를 촉발하면서 하락: INTC, IOVA, SLS, AMZN 주요 주식 시장은 10월 혼합 마감을 향하고 있으며 Nasdaq은 하락세로 마감할 가능성이 높으며 Dow 및 S&P 500은 마감을 향하고 있습니다.",
        "2026년 3월 24일 뉴욕 증권거래소(NYSE) 개장 벨에서 거래자가 일하고 있다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 23%, 1.38% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, 23%, 1.38% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "62c4edb96a64581274e6",
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
      "headline": "Microsoft (MSFT) Stock Shrugs Off Q1 Earnings As AI Spending Looms",
      "headlineKo": "마이크로소프트(MSFT) 주식은 AI 지출이 늘어남에 따라 1분기 수익을 삭감했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95f672c42a57acb25f336bc9a38c71909ea9c15521d59bfc16fa329e1ac05894",
        "publishedAt": 1793330456,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft (MSFT) Stock Shrugs Off Q1 Earnings As AI Spending Looms",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "a83306690936e4d29696",
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
      "headline": "How AI Factory Expansion Will Impact NVIDIA (NVDA) Investors",
      "headlineKo": "AI 공장 확장이 NVIDIA(NVDA) 투자자에게 미치는 영향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2582b95aa32468a76cb81b775d696908e941744207c3e67ef3e2e20728097473",
        "publishedAt": 1793330130,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 NVDA의 사업과 관련된 'How AI Factory Expansion Will Impact NVIDIA (NVDA) Investors' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "4da78d36c3cfae88a5da",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "AAPL",
        "AMZN",
        "INTC",
        "QQQ",
        "SNDK",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
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
      "headline": "SNDK Tumbles Amid Tech Selloff Despite Upbeat Q1 Report; Retail Turns Bullish",
      "headlineKo": "낙관적인 1분기 보고서에도 불구하고 기술 매도 속에 SNDK 하락; 소매업은 강세로 전환",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e77ff4515978e46db11001f58dda6269ebce33cfb3917b10d9c6e6162e2a6c2e",
        "publishedAt": 1793329548,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "낙관적인 1분기 보고서에도 불구하고 기술 매도 속에 SNDK 하락; 소매업이 강세를 보임 AI 에이전트 동향 뉴스 수입 전체 DIA 0.04% SPY 1.00% QQQ 2.26% 추세 BTC 3.31% INTC 25.47% SNDK 8.07% AMZN 7.20% RDDT 22.31% BNB 6.02% AAPL 1.11% RIVN 9.17%",
        "낙관적인 1분기 보고서에도 불구하고 기술 매도 속에 SNDK 하락; 소매점은 낙관적으로 변했습니다 Intel과 Amazon의 혼합 보고서는 목요일 AI 인프라 주식을 하락세로 보냈습니다.",
        "2023년 1월 30일 폴란드 크라쿠프에서 촬영한 이 일러스트 사진에는 SanDisk 어댑터와 microSD 카드가 나와 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.04%, 1.00%, 2.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.04%, 1.00%, 2.26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "20f389fc071773adc6a1",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "AMZN",
        "INTC",
        "QQQ",
        "SNDK",
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
      "headline": "Tesla-SpaceX Merger ‘Does Make Strategic Sense,’ Analyst Says — But SpaceX Needs Nearly 2x The Growth",
      "headlineKo": "Tesla-SpaceX 합병은 '전략적 의미가 있습니다'라고 분석가는 말합니다. 그러나 SpaceX는 거의 2배의 성장이 필요합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a58cffd4ab7828f049e951780cfd7a06d979bff7d9b5ad9635701fe0c3b214c",
        "publishedAt": 1793328286,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla-SpaceX 합병은 '전략적 의미가 있습니다'라고 분석가는 말합니다. 그러나 SpaceX에는 거의 2배의 성장이 필요합니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.08% SPY 1.01% QQQ 2.32% 추세 BTC 3.16% INTC 25.87% SNDK 8.02% AMZN 7.42% RDDT 22.08% BNB 5.9",
        "Tesla-SpaceX 합병은 '전략적 의미가 있습니다'라고 분석가는 말합니다. 그러나 SpaceX는 거의 2배의 성장이 필요합니다. 성장 Morningstar는 Tesla-SpaceX 합병이 에너지, AI, 로봇 공학 및 연결성 전반에 걸쳐 이점을 얻을 수 있다고 봅니다.",
        "Elon Musk는 Beverly Hills에서 열린 Milken Institute 글로벌 컨퍼런스에서 연설합니다(사진 제공: Apu Gomes/Getty Images) Deepti Sri · Stocktwits 게시일 2026년 10월 29일 | 오후 10:44 EDT 공유 · 회사에 우리를 추가하세요. 회사는 Tesla가 배터리와 솔을 공급할 수 있다고 말했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.08%, 1.01%, 2.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.08%, 1.01%, 2.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "213525f4a0f1e6aa20c3",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "ASML",
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
      "headline": "ASML vs. Nvidia: Who Really Captures the AI Chip Boom?",
      "headlineKo": "ASML 대 Nvidia: AI 칩 붐을 실제로 포착하는 사람은 누구입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44fffeaa3dadac97492431b88b690171b273176ee4d5d3877b09ede611dfeb87",
        "publishedAt": 1793328182,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: AI 칩 붐을 실제로 주도하는 사람은 누구입니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool ASML( ASML +0.77% )은 세계에서 가장 진보된 칩을 만드는 기계를 만들지만 Nvidia( NVDA -0.80% )는 m의 거의 10배를 가져옵니다.",
        "Collapse ASML & NVDA: 성과 비교 주요 재무 지표 ASML – ASML $1,675.70 + 0.77% ( + $12.85 ) NVDA – Nvidia $213.66 – 0.80% ( - $1.72 ) 시가총액 $646B 52주 범위 $946.11 - $1,999.96 총이익 54.33% PER 비율 41.23"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,675.70, 0.77 %, $12.85 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,675.70, 0.77 %, $12.85 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2b796d6d81f8f12e86d1",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "SNDK",
      "relatedTickers": [
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
      "headline": "Sandisk Q1 Earnings Call Highlights",
      "headlineKo": "Sandisk 1분기 실적 발표 하이라이트",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=72bf516ced4dcabeb25bc61a05215a528bd04f90d531d9b11fbca0d889625c61",
        "publishedAt": 1793326449,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk 1분기 실적 발표 하이라이트 | MarketBeat 주요 콘텐츠로 건너뛰기 마지막 시간!",
        "MarketBeat All Access의 가격: $149 오후 11시 59분까지 0일 0시간 0분 0초 오늘 밤 $149 잠금 청구 MarketBeat All Access 판매 프로모션 ✖ Sandisk 1분기 실적 통화 하이라이트 MarketBeat 작성 2026년 10월 29일 선호 항목으로 추가",
        "MarketBeat Media, LLC의 이미지를 닫습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $149, $11 billion, 23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $149, $11 billion, 23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ccc1980eb70bbcc1daf9",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "INTC",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
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
      "headline": "U.S. stock futures sink, Nasdaq down 2% as Amazon, Intel earnings underwhelm",
      "headlineKo": "미국 주식 선물 하락, 나스닥 2% 하락, 아마존, 인텔 실적 부진",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c8c200c4015f5f22eed403a23d7a7b15b409eb6e883c55434b9ed8235a99379",
        "publishedAt": 1793324170,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "U.S. stock futures sink, Nasdaq down 2% as Amazon, Intel earnings underwhelm",
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
      "id": "b1f2d4abfbb724b03bfa",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AAPL",
        "AMZN",
        "INTC",
        "QQQ",
        "SNDK",
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
      "headline": "SPCX, ASTS, RKLB Slide Overnight: Amazon Reaffirms 2026 Satellite Service Debut — Retail Weighs Competitive Threat",
      "headlineKo": "밤새 SPCX, ASTS, RKLB 슬라이드: Amazon, 2026년 위성 서비스 데뷔 재확인 — 소매업, 경쟁 위협 고려",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=53ca1ba7bf9190dd43b764d7b2fa2ab2078af95f059c68f3ae08ce4843e6a76d",
        "publishedAt": 1793324065,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon이 Starlink를 인수하려고 합니다. AI 에이전트가 흔들리는 우주 주식 동향 뉴스 수익 전체 DIA 0.52% SPY 1.29% QQQ 3.42% Trending INTC 25.82% SNDK 7.30% DJT 5.36% SPY 1.29% AMZN 11.26% AAPL 1.80% SLS 2.89% XRP 3.42% IOVA 37.47% 동부 표준시",
        "SPCX, ASTS, RKLB 슬라이드 오버나잇: Amazon, 2026년 위성 서비스 데뷔 재확인 - 소매점은 경쟁 위협에 무게를 두고 있습니다. Amazon의 Globalstar 거래와 곧 출시될 직접 장치 네트워크로 인해 ASTS와의 잠재적 경쟁이 강화됩니다.",
        "이번 사진 일러스트에는 스마트폰 화면에 아마존 레오 로고가 보이는 모습이 담겨 있다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.52%, 1.29%, 3.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.52%, 1.29%, 3.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e6480379905a58d7d580",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "EMCOR Group, Inc. Q3 2026 Earnings Call Summary",
      "headlineKo": "EMCOR Group, Inc. 2026년 3분기 실적 요약",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8cc3fac38920912d37e76bdec93dade2307bf88cfbf64878960a2e49b59ff0b",
        "publishedAt": 1793322880,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR Group, Inc. 2026년 3분기 실적 요약"
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
          "ticker": "EME",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "0d2069a724b6d64f327c",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Alphabet Sheds $500 Billion in a Single Day Despite Cloud Growth of 103%",
      "headlineKo": "Alphabet, 103%의 클라우드 성장에도 불구하고 하루 만에 5,000억 달러 손실",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5eab6a291c48f1d3cc1f7d4b91f5788d4bb39ef05c091f0e444053f767032594",
        "publishedAt": 1793321281,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet, 클라우드 성장 103%에도 불구하고 하루 만에 5,000억 달러 손실 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 헤드라인에서 주식이 \"역대 최악의 날\"을 보냈다고 비명을 지르면, 그것은 o입니다.",
        "하지만 현재 Google 모기업인 Alphabet(GOOG -12.29%)(GOOGL -12.64%)의 경우는 그렇지 않았습니다.",
        "실제로 알파벳은 오늘 사상 최악의 하루를 보냈습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12.29%, 12.64%, 13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12.29%, 12.64%, 13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "40f4188d63ecaddf9529",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon.com Q3 Earnings Call Highlights",
      "headlineKo": "Amazon.com 3분기 실적 발표 하이라이트",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02d6d8d35191aa9761270a45ae77402734ab6168935b50b2fe510499498cc35d",
        "publishedAt": 1793319256,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon.com 3분기 실적 발표 하이라이트"
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
      "id": "9ff7765eda9bb1cddcf5",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
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
      "headline": "Is Alphabet Stock a Buy After Its Post-Earnings Drop?",
      "headlineKo": "알파벳 주식은 실적 하락 후 매수인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6eaaaaa57d35221a75522cfed81b4d182675c2311c494f1312cc43826b34fce9",
        "publishedAt": 1793318821,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳 주식은 실적 하락 후 매수인가?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Shares of Alphabet ( GOOGL -12.64% ) ( GOOG -12.29% )은 10월 수요일 시간 외 거래에서 약 10% 하락했습니다.",
        "28일, 구글 모회사가 3분기 실적을 발표한 후."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 25%, $127.6 billion, $2.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 25%, $127.6 billion, $2.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8fda6a350c8302885964",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "AMZN",
        "INTC",
        "PLTR",
        "QQQ",
        "SNDK",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
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
      "headline": "Nasdaq 100 Futures Dip On Weak Intel, Amazon Earnings With Bloated Capex Worries Weighing On Sentiment —  AMZN, INTC, SBUX, PLTR, ASTS In Focus",
      "headlineKo": "Nasdaq 100 선물은 약한 Intel, Amazon 수익에 대한 부풀려진 Capex 우려로 인해 감정에 부담을 가중 — AMZN, INTC, SBUX, PLTR, ASTS 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80c21737b1138c6ad62c38672635cfe30947864df39d74f72e7ca6ee2eba3857",
        "publishedAt": 1793318055,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nasdaq 100 선물은 약한 Intel, Amazon 수익에 대한 부풀려진 Capex 걱정으로 감정을 짓누르고 있습니다 — AMZN, INTC, SBUX, PLTR, ASTS In Focus AI 에이전트 동향 뉴스 수익 전체 DIA 0.73% SPY 1.60% QQQ 3.25% 추세 INTC 29.86% SNDK 12.00",
        "나스닥 100 선물 하락, 약한 인텔, 부풀려진 Capex 우려로 인한 Amazon 수익 감정에 부담 — AMZN, INTC, SBUX, PLTR, ASTS In Focus Amazon의 3분기 수익과 매출은 기대에 미치지 못했습니다.",
        "뉴욕 증권 거래소 바닥에서 일하는 트레이더들 (사진 제공: Spencer Platt/Getty Images) Shashank Nayar · Stocktwits 2026년 10월 29일 게시 | 오후 7시 54분 EDT 공유 · 목요일에 S&P 500이 0.3% 하락 마감했고, 나스닥 100은 1.4 하락했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $77 billion, $16.5 billion, 21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $77 billion, $16.5 billion, 21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7c7cb82632a1661ff381",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMZN",
        "INTC",
        "PLTR",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Amazon",
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
      "headline": "Nasdaq 100 Futures Dip On Weak Intel, Amazon Earnings With Bloated Capex Worries Weighing On Sentiment —  AMZN, INTC, SBUX, PLTR, ASTS In Focus",
      "headlineKo": "Nasdaq 100 선물은 약한 Intel, Amazon 수익에 대한 부풀려진 Capex 우려로 인해 감정에 부담을 가중 — AMZN, INTC, SBUX, PLTR, ASTS 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80c21737b1138c6ad62c38672635cfe30947864df39d74f72e7ca6ee2eba3857",
        "publishedAt": 1793318055,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nasdaq 100 선물은 약한 Intel, Amazon 수익에 대한 부풀려진 Capex 우려로 인해 감정에 부담을 가중 — AMZN, INTC, SBUX, PLTR, ASTS 집중"
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
      "id": "c66d39bc34deafd78cbd",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Is Trading for Less Than 6 Times Forward Earnings. Here's Why That's a Sign to Buy.",
      "headlineKo": "마이크론은 6배 미만의 선행 수익으로 거래되고 있습니다. 이것이 구매 신호인 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4888062546af4f1f7f6792f1adadae11bc4269aa0fb72751902e9037529b128",
        "publishedAt": 1793317260,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론은 6배 미만의 선행 수익으로 거래되고 있습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron(MU -4.98%)은 시장에서 가장 저렴한 주식 중 하나입니다.",
        "10월 1일에는 선도 수익의 5.2배에 불과하게 거래됩니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6 Times, 5.2 times, $934.27 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6 Times, 5.2 times, $934.27 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4a4c9d37851ed622660a",
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
      "headline": "Nvidia's $12.9 billion deal could shape the AI apps you use",
      "headlineKo": "Nvidia의 129억 달러 계약으로 여러분이 사용하는 AI 앱이 달라질 수 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc58be1127d0c3a0753d3f81ae9e2eae4adb9d1036ab7cece15adae0972ce869",
        "publishedAt": 1793317020,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 NVDA의 사업과 관련된 'Nvidia's $12.9 billion deal could shape the AI apps you use' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a2d082cba34bf9e7de8f",
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
      "headline": "Google parent Alphabet suffers nearly $500B Wall Street wipeout amid AI spending fears",
      "headlineKo": "구글 모회사 알파벳, AI 지출 우려로 인해 월스트리트에서 거의 5000억 달러 손실을 입다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=81cc62ad10d477fe7f562b95ec233e254dea9bfddfb4a4e95c74d00966910ab3",
        "publishedAt": 1793315867,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "구글 모회사 알파벳, AI 지출 우려로 인해 월스트리트에서 거의 5000억 달러 손실을 입다"
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
      "id": "f2be2f84577ca706e315",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Morgan Stanley cuts Seagate stock price target but sees 72% upside",
      "headlineKo": "Morgan Stanley, Seagate 주가 목표를 하향 조정했지만 상승 여력은 72% 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c267b727e378971abf4582b8a711e1f1b64d441a11c856998ba44f44d91e3288",
        "publishedAt": 1793315820,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley, Seagate 주가 목표를 하향 조정했지만 상승 여력은 72% 예상"
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
          "ticker": "STX",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "25068a39492ab1d140d8",
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
      "headline": "What Intel (INTC) Said on Its Q3 Earnings Call",
      "headlineKo": "인텔(INTC)이 3분기 실적 발표에서 말한 내용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d46b273d45e8f23e69ff76cd5c00a8dd56abe70c03ef0e918b2b3c15c6520d23",
        "publishedAt": 1793315674,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔(INTC)이 3분기 실적 발표에서 말한 내용"
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
      "id": "982b3adc19ff7e98aca9",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Seagate (STX) Q1 Earnings Ride Record Cash Flow And AI Demand",
      "headlineKo": "Seagate(STX) 1분기 실적 기록적인 현금 흐름 및 AI 수요 기록",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a563ed17dccf56d0cf83516531d677305755e3e1e8f243f9da295681db03f76",
        "publishedAt": 1793315668,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate(STX) 1분기 실적 기록적인 현금 흐름 및 AI 수요 기록"
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
          "ticker": "STX",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "6cae51544cce0867f9a8",
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
      "headline": "Sandisk Corporation (SNDK) Q1 2027 Earnings Call Transcript",
      "headlineKo": "Sandisk Corporation(SNDK) 2027년 1분기 실적 통화 기록",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5fd5d0d79c2eaea6e2fb14ec6d2af58bce5bb2dfef8e1accbec94140364bcb48",
        "publishedAt": 1793314707,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk Corporation (SNDK) Q1 2027 Earnings Call Transcript",
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
      "id": "2fdaadc92d5f4c534caf",
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
      "headline": "Quanta Services, Inc. Q3 2026 Earnings Call Summary",
      "headlineKo": "Quanta Services, Inc. 2026년 3분기 실적 요약",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6850289e868feb95e2279364d71f907a210b73517e91716af7a7af5271ded8cf",
        "publishedAt": 1793313912,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services, Inc. Q3 2026 Earnings Call Summary",
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
      "id": "01e41377895707eeaaa6",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "AAPL",
        "AMZN",
        "INTC",
        "PLTR",
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
      "headline": "JPMorgan Is Bullish on Palantir, Predicts Over 30% Rally on Strong AI Demand",
      "headlineKo": "JPMorgan은 Palantir에 대해 낙관적이며 강력한 AI 수요에 대해 30% 이상의 반등을 예측합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa5bcabb5da72c6b1f65299987ce2fa55b1ba19b79b9bf2d9511c6905ff3ca8a",
        "publishedAt": 1793313649,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JPMorgan은 Palantir에 대해 낙관적이며 강력한 AI 수요로 30% 이상의 반등을 예측합니다. AI Agent Trending News Earnings All DIA 0.04% SPY 1.00% QQQ 2.26% Trending BTC 3.23% INTC 25.43% SNDK 7.79% AMZN 7.31% RDDT 22.08% BNB 6.08% AAPL 1.07% 리븐 10.04%",
        "JPMorgan은 Palantir에 대해 낙관적이며 강력한 AI 수요에 대해 30% 이상의 반등을 예상합니다. JPMorgan은 Palantir Technologies에 대해 '비중 확대 등급 및 262달러 목표 가격'으로 보도를 시작했습니다.",
        "Palantir CEO Alex Karp가 2026년 7월 27일 뉴욕시 Fox Business Network Studios에서 열린 \"The Claman Countdown\"을 방문합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, 0.04%, 1.00% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, 0.04%, 1.00% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c494e2a490b11e554568",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "QQQ",
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
      "headline": "Seagate vs. Western Digital: Which AI Storage Stock Wins?",
      "headlineKo": "Seagate 대 Western Digital: 어느 AI 스토리지 주식이 승리합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45d992d5af648cebbb83db61d2254a447a8c620bb7147c4002684be56e31e278",
        "publishedAt": 1793313368,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital: 어떤 AI 스토리지 주식이 승리할까요?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,602.20 −1.07% Dow Jones 51,976.00 −0.76% Nasdaq 100 28,491.00 −2.05% Russell 2000 2,808.65 −1.80% S&P 500 7,602.20 −1.07% 다우존스 51,976.00 −0.76% 나스닥 100 28,491.00 −2.05% 러셀 20",
        "Western Digital: 어떤 AI 스토리지 주식이 승리할까요?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 61.0%, 55.5%, $5.447 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 61.0%, 55.5%, $5.447 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "12691fb2038f46a0a6a4",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google owner Alphabet reports 25% revenue growth in Q3 2026",
      "headlineKo": "구글 소유주 알파벳, 2026년 3분기 매출 25% 성장 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef5fe0e1a73cef2f5fac4d356505db462e7f90881f2264abf3a6c9825ae1ad1c",
        "publishedAt": 1793312760,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "구글 소유주 알파벳, 2026년 3분기 매출 25% 성장 발표"
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
      "id": "098d52fb88ff2ae97736",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is KLA (KLAC) Undervalued On Its Earnings Beat And AI Driven Guidance?",
      "headlineKo": "KLA(KLAC)는 실적 개선과 AI 기반 지침으로 인해 과소평가되어 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=07c57f626626a711b8afb4928a93d6a059b41c408f934842f0944b2c25348f4c",
        "publishedAt": 1793311879,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Is KLA (KLAC) Undervalued On Its Earnings Beat And AI Driven Guidance?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "a5ed395e8501790300c5",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "QQQ",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SANDISK CORP (NASDAQ:SNDK) EPS Beat With In-Line Revenue as Datacenter Surges",
      "headlineKo": "SANDISK CORP (NASDAQ:SNDK) EPS는 데이터 센터 급증으로 인라인 수익을 앞지릅니다.",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=fb1832808e988af291ce4d292507c8071b3f8937176857bd53f308e8bb765ee5",
        "publishedAt": 1793310638,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SANDISK CORP (NASDAQ:SNDK) EPS Beat With In-Line Revenue as Datacenter Surges",
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
      "id": "8b8f503a2edc0b5c2307",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Stock Market Today, Oct. 29: Marvell Falls on Lumentum Acquisition Talks",
      "headlineKo": "오늘, 10월 29일 주식 시장: Marvell은 Lumentum 인수 협상에서 실패했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4fb53acb1e9766b6ae9d4fde8742d44f130d8def3b4db32309990e93d99d648f",
        "publishedAt": 1793310210,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "29: Lumentum 인수 회담에서 Marvell Falls | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool MRVL에 참여 - Marvell Technology $198.34 -$20.00 (-9.16%) NASDAQ · 오후 12시 기준(ET 10/30/26 Premi)",
        "비상장, 비공개 또는 이중 종류의 비거래 주식은 포함되지 않습니다.",
        "$191.46B 일일 범위 $197.79 - $207.61 52주 범위 $70.69 - $329.88 거래량 15.8M 평균 거래량 21.6M 총 마진 51.42% 배당 수익률 0.11% 데이터 인프라 반도체 제공업체인 Marvell Technology( MRVL -9.16% ), $218.34로 마감"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $191.46, $197.79, $207.61 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $191.46, $197.79, $207.61 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "54bc78d0caff2008daed",
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
      "headline": "News of the day: Anthropic's IPO windfall, Whitecap banks cash, Ottawa invests in Cohere, FINTRAC failing, Meta promises consultations and more",
      "headlineKo": "오늘의 뉴스: Anthropic의 IPO 횡재, Whitecap 은행 현금, Ottawa의 Cohere 투자, FINTRAC 실패, Meta 약속 상담 등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78228402e1c49efdf96d678438fb888e03418887fff1c5afa289f1cbee22fd65",
        "publishedAt": 1793309713,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $1.6 billion, $7, $45 billion, $113 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 META의 사업과 관련된 'News of the day: Anthropic's IPO windfall, Whitecap banks cash, Ottawa invests in Cohere, FINTRAC failing, Meta promises consultations and more' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f59dfad994b5b3553f58",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Sandisk Reports Another Big Earnings Beat. Investors May Have Wanted More.",
      "headlineKo": "Sandisk는 또 다른 큰 수익을 기록했습니다. 투자자들은 더 많은 것을 원했을 수도 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7cc70f8a5247a8cff07113481640049e3404049c1571a5fd7c758eba612f9d19",
        "publishedAt": 1793309280,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk Reports Another Big Earnings Beat. Investors May Have Wanted More.",
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
      "id": "a91e99e40df97c5aeb8c",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Sandisk Revenue Up 378% on Datacenter, Edge: Rapid Earnings Reaction",
      "headlineKo": "데이터센터, 엣지에서 Sandisk 수익 378% 증가: 빠른 수익 반응",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=058e81bbbb079c8acddbdc50e0fb6ad37de341287892398f342345e36c27e61a",
        "publishedAt": 1793307887,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "데이터센터, 엣지에서 Sandisk 수익 378% 증가: 빠른 수익 반응"
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
          "ticker": "SNDK",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ee0e813bed5e4fc47f29",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "EME",
      "relatedTickers": [
        "EME",
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
      "headline": "EMCOR (EME) Q3 2026 Earnings Call Transcript",
      "headlineKo": "EMCOR (EME) 2026년 3분기 실적 통화 기록",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=967785aeb6cc4514b53ae055780dfbc34167cb58911812ec173ca1414f3e3fd1",
        "publishedAt": 1793307534,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR(EME) 2026년 3분기 실적 통화 기록 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 이미지 출처: The Motley Fool.",
        "2026년 29일 통화 참가자 재무 계획 및 분석 담당 이사 - Lucas Sullivan 회장, 사장, 최고 경영자 - Tony Guzzi 수석 부사장 겸 최고 재무 책임자 - Jason Nalbandian 수석 부사장",
        "유기적 수익 성장 - 25.5%, 증분 인수 기여 및 이전 매각을 제외할 때 핵심 최종 시장 전반의 광범위한 수요를 반영합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $5.54 billion, 28.8%, 25.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $5.54 billion, 28.8%, 25.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "8822fb1a47772652c5be",
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
      "headline": "Ahead of Apple Earnings, Here's What Barchart Data Says Comes Next for AAPL Stock",
      "headlineKo": "Apple 수익에 앞서 Barchart 데이터에 따르면 AAPL 주식에 대한 다음 내용은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4221fb8484fce931090198beb857526f3d105911fadfb3fc5a5a157de710f8c5",
        "publishedAt": 1793307067,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple 수익에 앞서 Barchart 데이터에 따르면 AAPL 주식에 대한 다음 내용은 다음과 같습니다."
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
      "id": "3c89b4b0d71bcbb13716",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Could $1,000 Invested in Palantir Turn Into $100,000?",
      "headlineKo": "Palantir에 투자한 1,000달러가 100,000달러로 바뀔 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b21bf4d675cba69f7ed13d4475d3314fa3931fdbbaa1498ebfa2c7db1757637",
        "publishedAt": 1793307000,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir에 투자한 1,000달러가 100,000달러로 바뀔 수 있을까요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Palantir( PLTR -0.20% )는 9월 1일 직접 상장을 통해 상장되었습니다.",
        "최초 거래 가격 10달러에서 1,000달러를 투자하면 오늘날 약 19,400달러의 가치가 있을 것입니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, $100,000, $10 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,000, $100,000, $10 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5950e71c0535c16ea5a1",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MSFT",
      "relatedTickers": [
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
      "headline": "Microsoft, Google report booming AI revenue as the tech reshapes business",
      "headlineKo": "Microsoft와 Google은 기술이 비즈니스를 재편하면서 AI 수익이 급증하고 있다고 보고합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=603187795293d081b6c0dcc04701396e467e5faa33e74921cd46cb6c6374a74f",
        "publishedAt": 1793306477,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft, Google report booming AI revenue as the tech reshapes business",
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
      "id": "d9620571752bcaea7b4a",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Marvell’s $80 Billion AI Megadeal Has Wall Street Asking: Is This the Dot-Com Bubble All Over Again?",
      "headlineKo": "Marvell의 800억 달러 규모의 AI 메가딜로 인해 월스트리트에서는 다음과 같이 묻고 있습니다. 이것이 다시 닷컴 버블인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=663b019c7805ebb6d9339eca0218d1732db526f28ed6795fd86d0a112628013a",
        "publishedAt": 1793305281,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell의 800억 달러 규모의 AI 메가딜로 인해 월스트리트에서는 다음과 같이 묻고 있습니다. 이것이 다시 닷컴 버블인가?"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "bc8770b0ba762c6a4e67",
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
      "headline": "Marvell’s $80 Billion AI Megadeal Has Wall Street Asking: Is This the Dot-Com Bubble All Over Again?",
      "headlineKo": "Marvell의 800억 달러 규모의 AI 메가딜로 인해 월스트리트에서는 다음과 같이 묻고 있습니다. 이것이 다시 닷컴 버블인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=663b019c7805ebb6d9339eca0218d1732db526f28ed6795fd86d0a112628013a",
        "publishedAt": 1793305281,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $80 Billion, 13%, $2.9 trillion, $11.5, $500, $500,000, $12 Billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MRVL의 사업과 관련된 'Marvell’s $80 Billion AI Megadeal Has Wall Street Asking: Is This the Dot-Com Bubble All Over Again?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ac54b0f761a7b54dc956",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Issues $25 Billion in New Bonds, Adding to AI Debt Spree",
      "headlineKo": "Microsoft, 250억 달러 규모의 신규 채권 발행으로 AI 부채 급증",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e8b23cc6e38e4f5ca2de4c8ffd91749ffb675cf5cbd992a55e0f1402a5a55e2",
        "publishedAt": 1793304420,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 MSFT의 사업과 관련된 'Microsoft Issues $25 Billion in New Bonds, Adding to AI Debt Spree' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "1bdd2a824366e2ca81b5",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Not Nvidia. Not AMD. This Custom AI Chip Designer Could Outperform Both by 2030.",
      "headlineKo": "엔비디아가 아닙니다. AMD가 아닙니다. 이 맞춤형 AI 칩 디자이너는 2030년까지 두 가지 모두를 능가할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f69b67b74b0e207bffcdbc553ad8544334f99e781db330fc5e4d55fd8e8e1279",
        "publishedAt": 1793303400,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 맞춤형 AI 칩 디자이너는 2030년까지 두 가지 모두를 능가할 수 있습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia(NVDA -0.80%)와 Advanced Micro Devices(AMD -2.08%)는 인공지능(AI) 산업의 가장 큰 수혜자 중 두 곳입니다.",
        "빅테크가 데이터센터에 수천억 달러를 투자하면서 반도체 수요는 계속해서 가속화되고 있다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13.24%, $2 billion, 0.61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13.24%, $2 billion, 0.61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "10e5d4b58ada0f99e710",
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
      "headline": "Stock Market Today: Tech Stocks Slammed By Alphabet Report; Amazon Earnings Next (Live Coverage)",
      "headlineKo": "오늘의 주식 시장: 알파벳 보고서에 의해 하락한 기술주; Amazon Earnings Next(실시간 보도)",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a5f3c0063cc9046dd7e4edc4afdb740a41170f690df41c5e1be516dbe899d1d",
        "publishedAt": 1793302682,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stock Market Today: Tech Stocks Slammed By Alphabet Report; Amazon Earnings Next (Live Coverage)",
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
      "id": "f620421f812c7c9b44de",
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
      "headline": "Gene Munster Flags Google Earnings As A Warning Sign To Amazon Investors",
      "headlineKo": "Gene Munster는 Google 수익을 Amazon 투자자에게 경고 신호로 표시합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51a1f5830f847bb0f65228017229a9c1a0b335071d85a61caf558095b0629d98",
        "publishedAt": 1793302469,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Gene Munster Flags Google Earnings As A Warning Sign To Amazon Investors",
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
      "id": "0be03a2ee8ed1f97579a",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "INTC",
        "QQQ",
        "SNDK",
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
      "headline": "Gene Munster Flags Google Earnings As A Warning Sign To Amazon Investors",
      "headlineKo": "Gene Munster는 Google 수익을 Amazon 투자자에게 경고 신호로 표시합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51a1f5830f847bb0f65228017229a9c1a0b335071d85a61caf558095b0629d98",
        "publishedAt": 1793302469,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Gene Munster는 Google 수익을 Amazon 투자자 AI 에이전트에 대한 경고 신호로 표시합니다. 동향 뉴스 수익 전체 DIA 0.57% SPY 1.02% QQQ 2.79% Trending INTC 23.44% SNDK 7.10% AMZN 9.37% RDDT 21.12% QQQ 2.79% RIVN 4.20% IOVA 36.66% MSTR 5.21% XR",
        "Gene Munster는 Google 수익을 Amazon 투자자에게 경고 신호로 표시합니다.",
        "Amazon의 분기 결과 및 12월 인라인 전망."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.57%, 1.02%, 2.79% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.57%, 1.02%, 2.79% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9c54e588a5248a44234b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC",
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
      "headline": "Why KLA Corporation Rallied Today",
      "headlineKo": "KLA Corporation이 오늘 랠리를 펼친 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f62eb171414e118d1d5ad7e220209304ea1bb86dea3347284d17075586aa9c13",
        "publishedAt": 1793301769,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA Corporation이 오늘 반등한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 반도체 장비 대기업 KLA Corporation( KLAC +5.45% )의 주가가 목요일에 랠리를 펼쳤습니다.",
        "KLA는 어젯밤 AI 구축과 관련된 이미 높은 추정치에도 불구하고 분석가들의 기대치를 가볍게 웃도는 수익을 보고했습니다.",
        "10월 초 부문별 매도세를 보인 후, 이 수치는 이 거대 반도체 장비 기업에 반가운 안도감을 안겨주었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $167.43, $8.66, 5.45% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $167.43, $8.66, 5.45% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a245bc35c06ade4b5283",
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
      "headline": "SpaceX vs. Nvidia: The Best AI Stock to Buy Now",
      "headlineKo": "SpaceX 대 Nvidia: 지금 구매할 수 있는 최고의 AI 주식",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a430e497cc29802de52c52084acc71aee2945e655c434335801748cc3f23d1bd",
        "publishedAt": 1793301600,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: 지금 구매할 수 있는 최고의 AI 주식 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia보다 인공지능(AI) 투자와 더 동의어인 회사는 거의 없습니다(NVDA -0.80%)",
        "2023년 AI 구축이 시작된 이래로 AI 투자 분야의 선두주자였으며 그 이후로 변한 것이 없습니다.",
        "그러나 AI 세계에는 우주 탐사 기술(SPCX -0.92%)을 포함하여 많은 새로운 투자 옵션이 있습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
        "이번 기사에서 확인된 구체적 수치: 0.92%, $213.66, $1.72 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 경쟁사 수주 · 고객 점유 변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.92%, $213.66, $1.72 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 공급사의 실제 물량",
        "기존 공급사 매출 비중",
        "고객의 이중 공급 전략"
      ]
    },
    {
      "id": "48bd41e3359f17b19251",
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
      "headline": "Alphabet Stock Drops 12%. Can Its Dividend Survive the AI Spending Boom?",
      "headlineKo": "알파벳 주가 12% 하락. 배당금은 AI 지출 붐에서 살아남을 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a48bac82993089a9c7bd07a76a98baa63d00ba76c96938c09605284d54b79d3c",
        "publishedAt": 1793301460,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "배당금은 AI 지출 붐에서 살아남을 수 있을까?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,684.40 −0.61% Dow Jones 52,373.20 −0.46% Nasdaq 100 29,088.00 −1.77% Russell 2000 2,859.99 +0.71% S&P 500 7,684.40 −0.61% 다우존스 52,373.20 −0.46% 나스닥 100 29,088.00 −1.77% 러셀 20",
        "배당금은 AI 지출 붐에서 살아남을 수 있을까?"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, $285., $0.22 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, $285., $0.22 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f11a5b6e369a67b58c74",
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
      "headline": "GE Vernova (GEV) Agrees $9 Billion Grid Equipment Deal To Expand Electrification",
      "headlineKo": "GE Vernova(GEV), 전기화 확대를 위해 90억 달러 규모의 그리드 장비 거래에 합의",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7f476dced1c2d5aeda0ba08ebe0ea7a6e3d97a7546ea237ab8066329972b45a0",
        "publishedAt": 1793301355,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova(GEV), 전기화 확대를 위해 90억 달러 규모의 그리드 장비 거래에 합의"
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
      "id": "19df85155ce84241d883",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Sandisk (SNDK) Objects To Its Shares Joining A Tokenized Stock Offering",
      "headlineKo": "Sandisk(SNDK)가 토큰화된 주식 공모에 참여하는 것에 반대합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bbc9060655eb33957f7c5f21670e012279930995939ae3057c43f83472812494",
        "publishedAt": 1793301267,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk (SNDK) Objects To Its Shares Joining A Tokenized Stock Offering",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "459837c08bcb13db09d8",
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
      "headline": "Nvidia-Backed Marvell, Lumentum Could Be Nearing a Deal",
      "headlineKo": "Nvidia가 지원하는 Marvell, Lumentum이 거래에 가까워질 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e9335dfd1034a865c145925adbd494a798826a77fd1c5bb845e06b45e98ab76",
        "publishedAt": 1793301209,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia가 지원하는 Marvell, Lumentum이 거래에 가까워질 수 있음"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "f0e757d93a8b62b65fcc",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "AMD",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Advanced Micro Devices (AMD) Cheap As Meta Expands Its AI Partnership?",
      "headlineKo": "Meta가 AI 파트너십을 확장함에 따라 Advanced Micro Devices(AMD)가 저렴합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5351d453c0580a3ffc0f19decaa420d6d6e9b01ae546b5458278eca924609ae9",
        "publishedAt": 1793301147,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Is Advanced Micro Devices (AMD) Cheap As Meta Expands Its AI Partnership?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "96d91aff5339d7222cf9",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SNDK",
        "SPY",
        "WDC"
      ],
      "relatedEntities": [
        {
          "name": "Samsung",
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
      "headline": "Sandisk and Micron Slide 5% as Samsung Miss Cools Memory Rally Ahead of Sandisk Earnings; SK Hynix Falls 3%, Western Digital Dips",
      "headlineKo": "Samsung Miss가 Sandisk 수익에 앞서 메모리 랠리를 식히면서 Sandisk와 Micron은 5% 하락했습니다. SK하이닉스 3% 하락, 웨스턴디지털 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da5b9d97596981e24ea5ca3a6066f6518fd889df771a1a71429261998607010f",
        "publishedAt": 1793300972,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Samsung Miss가 Sandisk 수익에 앞서 메모리 랠리를 식히면서 Sandisk와 Micron은 5% 하락했습니다. SK하이닉스 3% 하락, Western Digital 하락 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,652.00 −0.42% Dow Jones 52,264.70 −0.21% Nasdaq 100 28,816.00 −0.94% Russell 2000 2,849.07 −0.38% S&P 500 7,652.00 −0.42% 다우존스 52,264.70 −0.21% 나스닥 100 28,816.00 −0.94% 러셀 20",
        "작성자: David Moadel 2026년 10월 29일 오후 3시 9분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 3%, $1,330.60, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 3%, $1,330.60, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "32b0628716757bfe19dc",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Marvell Stock Is Down Today",
      "headlineKo": "오늘 Marvell 주식이 하락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a65fdb921916510ae2a39ce1b1ebb7f9a009565140a8a6c1e0d3bea61dcbb04b",
        "publishedAt": 1793300762,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 Marvell 주식이 하락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Marvell Technology ( MRVL -13.24% ) 주가는 오후 2시 44분 현재 13.9% 하락세를 보이고 있습니다.",
        "29일, 보도에 따르면 칩 제조업체는 대형 광학 공급업체 인수에 가까워졌다고 합니다.",
        "S&P 500과 나스닥 종합지수는 각각 0.7%, 1.7% 하락했다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $3.93 billion, $83 billion, $3.5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $3.93 billion, $83 billion, $3.5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "63b676d5a2d7271c6bcb",
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
      "headline": "Oracle Has Lost Half Its Value. Oppenheimer Still Sees $275",
      "headlineKo": "오라클은 가치의 절반을 잃었습니다. 오펜하이머는 여전히 $275를 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ed138ffd14beac19b4b0ef4728c9883996819519dbcdade7a15dfaa0428873c",
        "publishedAt": 1793300122,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오펜하이머는 여전히 275달러를 본다 | TIKR.com 일반 투자 오라클은 가치의 절반을 잃었습니다.",
        "Oppenheimer는 여전히 275달러를 보고 있습니다. Bobby Sankhagowit • 4분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 10월 29일 Canva를 통한 Getty Images의 @gorodenkoff, Canva를 통한 Getty Images의 @DKosig 주요 내용 Oppenheimer는 계속해서",
        "29일, 주가는 1년 만에 49% 하락한 후 주가보다 [91%] 높았습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $275, 91%, 49% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $275, 91%, 49% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7f5ac3d77ac9914e7df0",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "CEG",
        "GOOGL",
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
      "headline": "Constellation Just Signed 20-Year Deals With Amazon and Google. Where Will the Nuclear Energy Stock Be in 10 Years?",
      "headlineKo": "Constellation은 Amazon 및 Google과 20년 계약을 체결했습니다. 10년 후 원자력 재고량은 어디에 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1cae05c81fe3b300b1e8646938435b24f7b53e51005003d6999d3f7b38f824a",
        "publishedAt": 1793299800,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation은 Amazon 및 Google과 20년 계약을 체결했습니다.",
        "10년 후 원자력 재고량은 어디에 있을까요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 참여하세요. 하이퍼스케일러에는 전력이 많이 필요합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.52%, 4.25%, 12.29% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.52%, 4.25%, 12.29% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6e30ee88d50bcb40b8b0",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "PWR",
      "relatedTickers": [
        "PWR",
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
      "headline": "Quanta Services (PWR) Q3 2026 Earnings Call Transcript",
      "headlineKo": "Quanta Services (PWR) 2026년 3분기 실적 통화 기록",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=094f0677150aed3a0df979e651286c852c7c55d978064adbcb6ea42e99141fb6",
        "publishedAt": 1793297633,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services (PWR) 2026년 3분기 실적 통화 내용 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 이미지 출처: The Motley Fool.",
        "2026년 2월 29일 통화 참가자 투자자 관계 담당 부사장 - Kip Rupp 사장 겸 최고 경영자 - Earl Austin 최고 재무 책임자 - Jayshree Desai 테이크어웨이 통합 수익 - 120억 1천만 달러, 57% 증가",
        "조정된 희석 EPS - 운영 레버리지와 효율적인 프로젝트 실행을 반영하여 전년도 분기의 3.33달러에서 82% 증가한 6.06달러입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $12.01 billion, 57%, $6.06, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PWR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PWR에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $12.01 billion, 57%, $6.06, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "d438a18b8c42dfba9e11",
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
      "headline": "Amazon Earnings On Deck After Rivals Microsoft, Google Post Strong Cloud Growth",
      "headlineKo": "아마존, 마이크로소프트, 구글 제치고 강력한 클라우드 성장세 달성",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b1472be93a2072d03d0001b160f28be65bea8433a898fa501e2094ef24fe6d24",
        "publishedAt": 1793297541,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon Earnings On Deck After Rivals Microsoft, Google Post Strong Cloud Growth",
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
      "id": "da77471deb30caa91367",
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
      "headline": "Microsoft (MSFT) Expands Copilot In Education, Is The AI Upside Already Priced In?",
      "headlineKo": "Microsoft(MSFT), 교육 부문에서 Copilot 확장, AI의 장점이 이미 가격에 반영되어 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6ae2b7c02978fdbf580f0cc74d1478662dc6732ee244f38df9ad528b3fa6342",
        "publishedAt": 1793297464,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft (MSFT) Expands Copilot In Education, Is The AI Upside Already Priced In?",
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
      "id": "9ff0834a609e6780ad2d",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Update: Market Chatter: Microsoft Plans to Raise at Least $25 Billion From US Bond Offering",
      "headlineKo": "업데이트: 시장 잡담: Microsoft는 미국 채권 발행에서 최소 250억 달러를 조달할 계획입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48a06f86ba16022ceb5df2d012eb001c17a73902df2198672b39fbd01354d68e",
        "publishedAt": 1793297058,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 MSFT의 사업과 관련된 'Update: Market Chatter: Microsoft Plans to Raise at Least $25 Billion From US Bond Offering' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "2da4d258bbfe3803e8ca",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "WDC",
      "relatedTickers": [
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Western Digital vs. Seagate: Best AI Stock to Buy After Earnings",
      "headlineKo": "Western Digital vs. Seagate: 실적 후 매수할 최고의 AI 주식",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5e2cd3313edd065c5dc56fdea8ca37e71cb63f81be925eeab86036c389233c1c",
        "publishedAt": 1793296800,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital vs. Seagate: 실적 후 매수할 최고의 AI 주식"
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
      "id": "950184dfb04904bec762",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Bernstein Maintains Outperform on Vertiv Holdings, Raises Price Target to $376",
      "headlineKo": "Bernstein, Vertiv Holdings 대비 우수한 성과 유지, 목표 주가 376달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b2594f5e09a145e7a3b6fa117f8c4d6c33d11a3c5aaec0a687cacfa309f7cb90",
        "publishedAt": 1793295744,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bernstein, Vertiv Holdings 대비 우수한 성과 유지, 목표 주가 376달러로 인상"
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
          "ticker": "VRT",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ede11580675227a399fb",
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
      "headline": "GE Vernova in $9B deal to buy high-voltage manufacturer as gas turbine orders slow",
      "headlineKo": "GE Vernova는 가스 터빈 주문이 둔화됨에 따라 고전압 제조업체를 인수하기 위해 90억 달러 계약을 체결했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f49acd17ad467be9a89a041dcbae6573ed63a4908d1d124bdb9b420ecfed2f86",
        "publishedAt": 1793295622,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova는 가스 터빈 주문이 둔화됨에 따라 고전압 제조업체를 인수하기 위해 90억 달러 계약을 체결했습니다."
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
      "id": "10f2a78efd9a10390fa1",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "headline": "Musk: Robot RAM Needs “Will Exceed Everything Else on Earth.” What That Means for Micron",
      "headlineKo": "머스크: 로봇 RAM에는 \"지구상의 모든 것을 능가할 것\"이 필요합니다. 마이크론에게 이것이 의미하는 바",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=104d6fa21d6af817210d81c7639d42b7ddec59b06a7747a1fc9783d5348737b4",
        "publishedAt": 1793295525,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "머스크: 로봇 RAM에는 \"지구상의 모든 것을 능가할 것\"이 필요합니다. 마이크론에 대한 의미 | TIKR.com 일반 투자 머스크: 로봇 RAM에는 \"지구상의 다른 모든 것을 능가할 것\"이 필요합니다. Micron Roxanna Maglangit에 대한 의미 • 5분 읽기",
        "로봇은 수년 동안 Micron의 결과를 옮기지 않을 것이지만 거리에서 Micron의 마진이 사라질 것으로 예상하는 것처럼 10년 후반에 대규모 신규 구매자가 메모리 부족을 유지할 수 있습니다.",
        "Tesla는 충분한 공급을 확보하기 위해 Optimus 로봇 칩의 메모리를 줄이는 반면, Micron 및 SK 하이닉스와 같은 메모리 제조업체는 이미 AI 데이터 센터를 따라잡을 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.04%, 1%, $176.58 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.04%, 1%, $176.58 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6557192c6cccf8b3fb20",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "EMCOR Group, Inc. (EME) Q3 2026 Earnings Call Transcript",
      "headlineKo": "EMCOR Group, Inc.(EME) 2026년 3분기 실적 통화 기록",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=059e00c18da902ff2df274ac7fd10e009b8b74f72cad8a7ecb7563b1f38b7732",
        "publishedAt": 1793295509,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR Group, Inc. (EME) Q3 2026 Earnings Call Transcript",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "b71b395d75d49a02686b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce vs. Synopsys: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Salesforce vs. Synopsys: 2026년에는 어떤 기술 주식이 더 나은 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d18ed76c8df2ffa219b113601d23ae98f317961b84a8a3ba7ee815b64b9007e",
        "publishedAt": 1793295404,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Synopsys: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공 지능이 기업 환경을 재편함에 따라 소프트웨어 거대 기업과 실리콘 설계 리더 중 하나를 선택하는 것이 중요한 결정입니다.",
        "Salesforce(CRM -4.63%) 또는 Synopsys(SNPS +1.72%)가 귀하의 포트폴리오에 더 나은 구매입니까?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.63%, 1.72%, $230.90 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.63%, 1.72%, $230.90 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "38f09bf253ddf69d3305",
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
      "headline": "Tesla Just Gained 13% in a Month: Take Profits, or Buy More?",
      "headlineKo": "Tesla는 한 달 만에 13% 상승했습니다. 이익을 얻겠습니까, 아니면 더 많이 사겠습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7d6b478b36960088649cacfa0737a0ca9d755422df80b67c15c69d65efaf2333",
        "publishedAt": 1793295272,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 한 달 만에 13% 상승했습니다. 이익을 얻겠습니까, 아니면 더 많이 사겠습니까?",
        "| TIKR.com General Investing Tesla는 한 달 만에 13%의 수익을 올렸습니다. 이익을 얻을 것인가, 아니면 더 많이 구매할 것인가?",
        "Roxanna Maglangit • 5분 읽기 검토자: Michael Douglass 최종 업데이트: 2026년 10월 29일 DOD 사진 및 SUMALI IBNU CHAMID(Canva를 통해 제공) Alemedia.id(Canva를 통해 제공) 주요 내용 Tesla 주가는 SpaceX 합병 및 배송 속도에 힘입어 지난 한 달 동안 13% 상승했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 2%, $450 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 2%, $450 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4a62c22348b6d3b83f79",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon earnings live: AI growth takes center stage",
      "headlineKo": "Amazon 수익 라이브: AI 성장이 중심이 됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=19261c88125b3cd19a9a42139a71690b75ae8b12c682188bbdbb19c98832eadc",
        "publishedAt": 1793295000,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon 수익 라이브: AI 성장이 중심이 됩니다."
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
      "id": "c99e1f5ea49130509f40",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple's Q4 Earnings Loom: Buy or Sell AAPL Stock Ahead of Results?",
      "headlineKo": "Apple의 4분기 실적 전망: 결과에 앞서 AAPL 주식을 매수 또는 매도하시겠습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b9cda59162a27c4aaf3fb8095c457059f7a5c28299d10ea2672fb6b2176ecd9",
        "publishedAt": 1793295000,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple's Q4 Earnings Loom: Buy or Sell AAPL Stock Ahead of Results?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "8401eb83024d888702e2",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC"
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
      "headline": "JP Morgan Maintains Overweight on KLA, Raises Price Target to $240",
      "headlineKo": "JP Morgan, KLA에 대한 비중확대 유지, 목표 주가를 240달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=69b001f802ddd9aa70e6539d9d6ff21a1bb853fee928899e9c78bec96fbb0021",
        "publishedAt": 1793294318,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JP Morgan, KLA에 대한 비중확대 유지, 목표 주가를 240달러로 인상"
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
          "ticker": "KLAC",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "3eee1dc5842b87a130fd",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "KLAC Q1 Earnings Beat Estimates, Revenues Rise on AI Demand",
      "headlineKo": "KLAC 1분기 수익, 예상치 상회, AI 수요로 수익 증가",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d317c9fff479e7f321d2c6f90631ac2a2918cdea34d6aa252a6ea183f06875a5",
        "publishedAt": 1793294160,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLAC Q1 Earnings Beat Estimates, Revenues Rise on AI Demand",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "eec24e9cc72d188c3709",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Stock Falls as Samsung Earnings Show the High Bar for Memory Stocks",
      "headlineKo": "삼성 실적이 메모리 주식에 대한 높은 기준을 보여줌에 따라 마이크론 주가 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8b89c2725353847f96b172764540fd9f59a3f4fa850a7330d8a7de18f41648d",
        "publishedAt": 1793293560,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Stock Falls as Samsung Earnings Show the High Bar for Memory Stocks",
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
      "id": "fba30ee945ae51038790",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "GOOGL",
        "INTC",
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
      "headline": "Intel Drops 4% Ahead of Earnings as Foundry Hopes Fade; Alphabet Tumbles 12%, Microsoft Edges Lower",
      "headlineKo": "파운드리 희망이 사라지면서 인텔은 수익보다 4% 앞선다; 알파벳 폭락 12%, Microsoft Edges 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=acfbb8d9d06dfc5d963e9f4e17466006c66fb5dfc5d8b57f4d805af80fd22575",
        "publishedAt": 1793293487,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "파운드리 희망이 사라지면서 인텔은 수익보다 4% 앞선다; 알파벳 폭락 12%, Microsoft Edges 하락"
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
      "id": "45e1fc6758e84f013fec",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "GOOGL",
        "INTC",
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
      "headline": "Intel Drops 4% Ahead of Earnings as Foundry Hopes Fade; Alphabet Tumbles 12%, Microsoft Edges Lower",
      "headlineKo": "파운드리 희망이 사라지면서 인텔은 수익보다 4% 앞선다; 알파벳 폭락 12%, Microsoft Edges 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=acfbb8d9d06dfc5d963e9f4e17466006c66fb5dfc5d8b57f4d805af80fd22575",
        "publishedAt": 1793293487,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "파운드리 희망이 사라지면서 인텔은 수익보다 4% 앞선다; 알파벳 하락 12%, Microsoft Edges 하락 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,684.40 −0.61% Dow Jones 52,373.20 −0.46% Nasdaq 100 29,088.00 −1.77% Russell 2000 2,859.99 +0.71% S&P 500 7,684.40 −0.61% 다우존스 52,373.20 −0.46% 나스닥 100 29,088.00 −1.77% 러셀 20",
        "경영진이 오늘 밤 실제 외부 고객의 이름을 지정할 수 있는지 여부는… David Moadel 작성 2026년 10월 29일 오후 1시 4분(ET) · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 12%, $92.04, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, 12%, $92.04, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "65733c002b5c99b4d4e8",
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
      "headline": "Prediction: Wall Street’s Next AI Favorite May Not Be Nvidia",
      "headlineKo": "예측: 월스트리트의 다음 AI 선호 제품은 Nvidia가 아닐 수도 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0480f1311bf61ffab7b8305db6b0a3c0f2f8c087d63402bfd769a21ec3455e2",
        "publishedAt": 1793293393,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 월스트리트의 다음 AI 선호 제품은 Nvidia가 아닐 수도 있습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,684.40 −0.61% Dow Jones 52,373.20 −0.46% Nasdaq 100 29,088.00 −1.77% Russell 2000 2,859.99 +0.71% S&P 500 7,684.40 −0.61% 다우존스 52,373.20 −0.46% 나스닥 100 29,088.00 −1.77% 러셀 20",
        "그 연결 끊김에 대해 좀 더 자세히 살펴볼 가치가 있는 부분이 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $415.95., 21.55%, $342.19 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $415.95., 21.55%, $342.19 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6da0a74872cbe8afc023",
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
      "headline": "QUALCOMM (QCOM) Offers AI, Automotive, and Edge-Computing Growth Potential, Ariel Global Fund Says",
      "headlineKo": "QUALCOMM(QCOM)은 AI, 자동차 및 엣지 컴퓨팅 성장 잠재력을 제공한다고 Ariel Global Fund가 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=073e9bf7bfb5d329d4c102250cf91194ce2cd7a150ff205dcd49b21eacd994c1",
        "publishedAt": 1793292910,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 QCOM의 사업과 관련된 'QUALCOMM (QCOM) Offers AI, Automotive, and Edge-Computing Growth Potential, Ariel Global Fund Says' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0437ebd4cfa26f1a8e0b",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Seen Beating Revenue Estimates, Raising Guidance, Oppenheimer Says",
      "headlineKo": "Oppenheimer는 Palantir가 매출 추정치를 상회하고 지침을 높이는 것으로 나타났습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6f253f3aa08b0fd256392bb9e1f4c6d03b26ccd5eb1ce43305bdd345705123c",
        "publishedAt": 1793292532,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Seen Beating Revenue Estimates, Raising Guidance, Oppenheimer Says",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "26bf689c1ded4db2dc0b",
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
      "headline": "Salesforce’s new carbon credit deal gives sustainable rice farming a boost",
      "headlineKo": "Salesforce의 새로운 탄소 배출권 거래로 지속 가능한 쌀 농업이 촉진됩니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2cc4c7ea6d4f73421a4c8fe30f8c869c35de0d38090206617e38bd055a0cd40",
        "publishedAt": 1793292462,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce의 새로운 탄소 배출권 거래로 지속 가능한 쌀 농업이 촉진됩니다"
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
      "id": "18785cb1ef89524d70d3",
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
      "headline": "Vertiv Looked “Overvalued.” Then Orders Doubled.",
      "headlineKo": "Vertiv는 \"과대평가\"된 것으로 보였습니다. 그런 다음 주문이 두 배로 늘어났습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f9334298d6eda932a94fc85fdffb7df5fdcebc8bfbf055d0ea2f751ed761f78c",
        "publishedAt": 1793292422,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv는 \"과대평가\"된 것으로 보였습니다. 그런 다음 주문이 두 배로 늘어났습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% 10월에 The Motley Fool에 합류하세요.",
        "28일, Vertiv(VRT +1.23%)는 투자자들에게 주문이 1년 전보다 두 배 이상 증가했다고 말했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.23%, 10%, 50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.23%, 10%, 50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1e1e2c12e8597cccb9d7",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Ad Empires in the AI Crosshairs: Meta’s Massive Infra Spending vs. Google’s Search Defense",
      "headlineKo": "AI 십자선 속의 광고 제국: 메타의 막대한 인프라 지출 vs. 구글의 검색 방어",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d640dc6b7d278f64fdea26145ba4dc7c90d717f79ce2b006d08377e5d3985aa0",
        "publishedAt": 1793292312,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 십자선 속의 광고 제국: 메타의 막대한 인프라 지출 vs. 구글의 검색 방어"
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
      "id": "8e0160d311886b9a1d7b",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vertiv Q3 Earnings Beat on Robust Sales Growth and Strong AI Demand",
      "headlineKo": "Vertiv 3분기 실적은 탄탄한 매출 성장과 강력한 AI 수요로 앞섰습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=39fa5a20015e8ecf2f2af6df676f758b9d2aa09a10e067796683ce14e3b82d6f",
        "publishedAt": 1793292120,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv 3분기 실적은 탄탄한 매출 성장과 강력한 AI 수요로 앞섰습니다."
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
          "ticker": "VRT",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ea99c044a8d3f91c1f97",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "AMD",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Cerebras Expands AI Footprint With Oracle: Can It Outpace NVDA & AMD?",
      "headlineKo": "Cerebras는 Oracle을 통해 AI 영역을 확장합니다. NVDA 및 AMD를 능가할 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7334312e8afccfef21928888fb27eb59eab4de2ba13296c98952a387f6efe45",
        "publishedAt": 1793292060,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cerebras는 Oracle을 통해 AI 영역을 확장합니다. NVDA 및 AMD를 능가할 수 있을까요?"
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
      "id": "e75a3682912ae40dbdb0",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "GE Vernova Q3 Earnings Call Highlights Pricing and Grid Expansion",
      "headlineKo": "GE Vernova Q3 실적 발표 하이라이트 가격 및 그리드 확장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d1581312f4d1d9e9722ff64c340469afc33f01d33d53d440fb6b5388178c22e3",
        "publishedAt": 1793292000,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova Q3 Earnings Call Highlights Pricing and Grid Expansion",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "ad5b12640d8c708e4f53",
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
      "headline": "PWR Q3 Earnings Beat on Electric Strength, 2026 View Raised, Stock Up",
      "headlineKo": "PWR Q3 실적이 전력 강세보다 앞섰습니다. 2026년 전망 상승, 재고 증가",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1548f54046061bf56189d1aadd91e3947b541d7a207e3d3562a1e6b79f6359a",
        "publishedAt": 1793291700,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "PWR Q3 실적이 전력 강세보다 앞섰습니다. 2026년 전망 상승, 재고 증가"
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
      "id": "6a797c21ef2710aa93f6",
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
      "headline": "Why Bell Global Equities Fund Continues to Favor Taiwan Semiconductor Manufacturing Company (TSM)",
      "headlineKo": "Bell Global Equities Fund가 계속해서 Taiwan Semiconductor Manufacturing Company(TSM)를 선호하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b8d9a26f0bd76c23e80d394b5f9258c61cf95940b15ae97e3301a9e0d8302e4",
        "publishedAt": 1793291672,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 TSM의 사업과 관련된 'Why Bell Global Equities Fund Continues to Favor Taiwan Semiconductor Manufacturing Company (TSM)' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a22a6b05f70ab7575c4d",
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
      "headline": "Why Is Broadcom (AVGO) Now Central To AI Funding And Infrastructure?",
      "headlineKo": "Broadcom(AVGO)이 이제 AI 자금 조달 및 인프라의 중심이 되는 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b051716a5cf47621868346f3727d0b5359edba61b811aa287ff3717501fa116a",
        "publishedAt": 1793290518,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 AVGO의 사업과 관련된 'Why Is Broadcom (AVGO) Now Central To AI Funding And Infrastructure?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ee406cb4ea26da09675d",
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
      "headline": "Apple Unveils Its First-Ever Touchscreen MacBook Pro. Should Investors Be Concerned About the $2,899 Price Tag?",
      "headlineKo": "Apple이 최초의 터치스크린 MacBook Pro를 공개했습니다. 투자자들은 2,899달러의 가격표에 대해 우려해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=900df4aea0ab12c5af1972a437d184e0ad7620ffcbe8d02d0d61c7900eff0741",
        "publishedAt": 1793289990,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple이 최초의 터치스크린 MacBook Pro를 공개했습니다.",
        "투자자들은 2,899달러의 가격표에 대해 우려해야 합니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% 잡다한 바보에 합류 Apple( AAPL +1.48% )은 마침내 몇 년 동안 저항했던 일을 해냈습니다. 바로 MacBook에 터치스크린을 탑재하는 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $2,899, $3,399., $1,999. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2,899, $3,399., $1,999. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0f626960cc082b3071c0",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell shares slide on reported Lumentum deal talks",
      "headlineKo": "Marvell은 보고된 Lumentum 거래 협상에 대해 슬라이드를 공유합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=029fe96e9a916be0aa883c780b756477352cb434f830ab8554afc2078ecffcaa",
        "publishedAt": 1793289360,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell은 보고된 Lumentum 거래 협상에서 슬라이드를 공유 | 나스닥:MRVL 무엇을 찾고 계십니까?",
        "회사 뉴스 일치하는 모든 회사 보기 일치하는 모든 뉴스 보기 Tech 작성자: Proactive 고지 사항 투자 조언 없음 이 콘텐츠 정보 편집 표준 및 정책 기사 공유 이 콘텐츠 정보 × Proactive 정보 Proactive 리드",
        "우리의 모든 콘텐츠는 경험이 풍부하고 자격을 갖춘 뉴스 저널리스트 팀에 의해 독립적으로 제작됩니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, 4%, $83 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, 4%, $83 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a81ad43d4d61b92fed70",
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
      "headline": "Seagate: Pricing Power, 60% EPS Growth And A 0.2x PEG (Upgrade To Buy)",
      "headlineKo": "Seagate: 가격 결정력, EPS 성장률 60% 및 PEG 0.2배(구매 업그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=97bc3808a011c7db8b105b498f19679b51b7a00262872beea3502c4d2da5bba5",
        "publishedAt": 1793286443,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate: Pricing Power, 60% EPS Growth And A 0.2x PEG (Upgrade To Buy)",
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
      "id": "64028edb2e8f9a055c0f",
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
      "headline": "Quanta Services, Inc. Reports Third Quarter 2026 Consolidated Revenues of $12.0 Billion and Total Backlog of $63.7 Billion",
      "headlineKo": "Quanta Services, Inc., 2026년 3분기 연결 수익 120억 달러, 총 잔고 637억 달러 보고",
      "source": {
        "name": "Fintel",
        "url": "https://finnhub.io/api/news?id=626c4267a38d9686ef88ca5ab7fa8655e644b2cb6e1bf8a52e7733ecc02257c4",
        "publishedAt": 1793286164,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services, Inc., 2026년 3분기 연결 수익 120억 달러, 총 잔고 637억 달러 보고"
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
      "id": "3f37e54dd1b821cc033c",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "EMCOR Q3 Earnings Beat on Construction Strength, '26 Outlook Raised",
      "headlineKo": "EMCOR Q3 실적이 건설 강세를 앞지르고 '26 전망 상향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b472067dce27e5d818dd3bdd4032b94ceabb6982e5fc66e071210cce1bd8d2ec",
        "publishedAt": 1793286060,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR Q3 Earnings Beat on Construction Strength, '26 Outlook Raised",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "4714c24dc572d9b509f5",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN"
      ],
      "relatedEntities": [],
      "importance": "high",
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
      "headline": "AMZN SEC Form 10-Q filed",
      "headlineKo": "AMZN SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000040/amzn-20260930.htm",
        "publishedAt": 1793286000.0,
        "collectedAt": 1793374799.6275015
      },
      "confirmedFacts": [
        "AMZN가 2026-10-30에 SEC Form 10-Q을 제출했습니다."
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "정기보고서는 실적과 위험요인에 대한 공식 근거지만, 양식 제출 사실만으로 실적 방향을 판단하지 않습니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다."
      ],
      "unverified": [
        "공시의 세부 조건과 금액은 아직 구조화하지 않았습니다."
      ],
      "beginnerExplanation": [
        "회사가 SEC에 공식 정기보고서를 냈다는 뜻입니다. 기사 숫자보다 이 원문에 적힌 매출·이익·현금흐름을 우선 확인합니다."
      ],
      "whyItMatters": [
        "정기보고서는 실적과 위험요인에 대한 공식 근거지만, 양식 제출 사실만으로 실적 방향을 판단하지 않습니다."
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
        "매출·영업이익·OCF·FCF",
        "가이던스와 위험요인 변화",
        "일회성 손익·회계정책 변화"
      ],
      "earningsEvidence": null
    },
    {
      "id": "99c03dcdb8202f4bc529",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC"
      ],
      "relatedEntities": [],
      "importance": "high",
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
      "headline": "INTC SEC Form 10-Q filed",
      "headlineKo": "INTC SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000191/intc-20260926.htm",
        "publishedAt": 1793286000.0,
        "collectedAt": 1793374799.6275015
      },
      "confirmedFacts": [
        "INTC가 2026-10-30에 SEC Form 10-Q을 제출했습니다."
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "정기보고서는 실적과 위험요인에 대한 공식 근거지만, 양식 제출 사실만으로 실적 방향을 판단하지 않습니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다."
      ],
      "unverified": [
        "공시의 세부 조건과 금액은 아직 구조화하지 않았습니다."
      ],
      "beginnerExplanation": [
        "회사가 SEC에 공식 정기보고서를 냈다는 뜻입니다. 기사 숫자보다 이 원문에 적힌 매출·이익·현금흐름을 우선 확인합니다."
      ],
      "whyItMatters": [
        "정기보고서는 실적과 위험요인에 대한 공식 근거지만, 양식 제출 사실만으로 실적 방향을 판단하지 않습니다."
      ],
      "impacts": [
        {
          "ticker": "INTC",
          "direction": "중립·원문 확인",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "basis": "official_filing"
        }
      ],
      "watch": [
        "매출·영업이익·OCF·FCF",
        "가이던스와 위험요인 변화",
        "일회성 손익·회계정책 변화"
      ],
      "earningsEvidence": null
    },
    {
      "id": "12d8fd122b4e433e8004",
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
      "headline": "5 revealing analyst questions from Seagate’s Q3 earnings call",
      "headlineKo": "Seagate의 3분기 실적 발표에서 공개된 분석가의 질문 5가지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17ee15030a33ebf15e44d46d6d748df1cf742e6d67f716ee221366f5739781e6",
        "publishedAt": 1793284983,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "5 revealing analyst questions from Seagate’s Q3 earnings call",
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
      "id": "c3b100d6f95d3f03d7b2",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Musk Says A Tesla-SpaceX Merger Is “A Good Idea,” But Admits It Would Require 1.98 Billion “Yes” Votes. He Calls It “Quite A High Hurdle”",
      "headlineKo": "머스크는 Tesla-SpaceX 합병이 \"좋은 아이디어\"라고 말했지만 19억 8천만 개의 \"찬성\" 표가 필요할 것이라고 인정했습니다. 그는 그것을 \"아주 높은 장애물\"이라고 부릅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=879ebb87cff2c79f4e7fdacd849b41c857766dd4e6d36cfbbde28742c88310a6",
        "publishedAt": 1793284955,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "머스크는 Tesla-SpaceX 합병이 \"좋은 아이디어\"라고 말했지만 19억 8천만 개의 \"찬성\" 표가 필요할 것이라고 인정했습니다.",
        "그는 그것을 \"매우 높은 장애물\"이라고 부릅니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,648.00 −0.47% Dow Jones 52,279.70 −0.18% Nasdaq 100 28,774.60 −1.08% Russell 2000 2,848.92 −0.39% S&P 500 7,648.00 −0.47% 다우존스 52,279.70 −0.18% 나스닥 100 28,774.60 −1.08% 러셀 20"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, 74%, 67.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 50%, 74%, 67.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "70ee56ae183c734bb9c3",
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
      "headline": "Tesla vs. Ford: Which Stock Has an Edge After Q3 Earnings?",
      "headlineKo": "Tesla vs. Ford: 3분기 실적 이후 우위를 점하는 주식은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50a917dcc9d4d7dc32fff8f2149920366fd828fef8bd1837a0bd434eb516c201",
        "publishedAt": 1793284740,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla vs. Ford: 3분기 실적 이후 우위를 점하는 주식은 무엇입니까?"
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
      "id": "30593db37e270f449df8",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "LITE",
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell Sinks 12% as Investors Balk at Reported Lumentum Megadeal Talks",
      "headlineKo": "Marvell은 보고된 Lumentum Megadeal Talk에서 투자자들의 망설임으로 12% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ae983801c6f31cc0896b58690adfb58701729ea785a91ffea666c3a33db73a7",
        "publishedAt": 1793282561,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell은 보고된 Lumentum Megadeal Talk에서 투자자들의 망설임으로 12% 하락했습니다."
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
      "id": "067f4c9bfc81d8505f0e",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel Earnings Prediction Market Preview: What Will Lip-Bu Tan Say?",
      "headlineKo": "인텔 수익 예측 시장 미리보기: Lip-Bu Tan은 뭐라고 말할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=86fd9b116bbe2296671a77e060dc0cc3b64b3fb837c7e541e58341f67b38a105",
        "publishedAt": 1793282324,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel Earnings Prediction Market Preview: What Will Lip-Bu Tan Say?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "2d73959fba5564e39cb4",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet tumbles, software and cybersecurity stocks sink as earnings disappoint: AlphaCheck",
      "headlineKo": "알파벳 하락, 실적 실망으로 소프트웨어 및 사이버보안 주식 하락: AlphaCheck",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=425ffc907ab7d990b6ff00721a256bd078219cac8059945686e81cee48e84c4b",
        "publishedAt": 1793281980,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet tumbles, software and cybersecurity stocks sink as earnings disappoint: AlphaCheck",
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
      "id": "679208ce54c5d7f4d945",
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
      "headline": "Lam Research Stock: Supply Constraints Limit Growth",
      "headlineKo": "Lam Research 주식: 공급 제약으로 인해 성장이 제한됨",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=947d1b64fa01475379d68b2af0d3604a76a98f31fd23ff2f61e26fbec04a250a",
        "publishedAt": 1793281870,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research 주식: 공급 제약으로 인해 성장이 제한됨"
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
      "id": "fc52b44b987d606e561f",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today (Oct. 29, 2026): S&P 500 falls on Alphabet earnings miss",
      "headlineKo": "오늘 주식 시장(2026년 10월 29일): S&P 500이 알파벳 실적 부진으로 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c0694be3708afc1290f3610963c64468bcc28d3c21a52ccefeb0a9106090179",
        "publishedAt": 1793281583,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stock Market Today (Oct. 29, 2026): S&P 500 falls on Alphabet earnings miss",
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
      "id": "0c537d68f04178613a0d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Stock Market Today: Nasdaq Sells Off After Inflation Data; Alphabet Plummets On Earnings (Live Coverage)",
      "headlineKo": "오늘의 주식 시장: 나스닥은 인플레이션 데이터 이후 매도했습니다. 알파벳이 수익 급락(생방송)",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a17e3b361a1ffb8e55643646a28fb6c6cc61d1cad12d526b46f75361dc46528",
        "publishedAt": 1793281445,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘의 주식 시장: 나스닥은 인플레이션 데이터 이후 매도했습니다. 알파벳이 수익 급락(생방송)"
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
      "id": "61eee56eb71eb339ee79",
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
      "headline": "AMD Stock Could Surprise on the Upside, but One Number Matters Most",
      "headlineKo": "AMD 주식은 상승세를 보일 수 있지만 한 가지 숫자가 가장 중요합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c5bf5def82fff23f262bbd6b4ab3ed55066d782131fbe3332c77444479d0f3e",
        "publishedAt": 1793280833,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD 주식은 상승세를 보일 수 있지만 한 가지 숫자가 가장 중요합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "마침내 그것을 바꿀 수 있는 숫자가 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $542.87, $549.58, 1.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $542.87, $549.58, 1.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3d1d20d012253cbf71a3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Emcor Group (EME) Surpasses Q3 Earnings and Revenue Estimates",
      "headlineKo": "Emcor Group(EME)이 3분기 수익 및 수익 추정치를 능가했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d0b71c70529d990cd9061caae2ee89ab3dfc05f8adf76583b2ac98f886cd0f29",
        "publishedAt": 1793280605,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Emcor Group (EME) Surpasses Q3 Earnings and Revenue Estimates",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "25d2cdf1810981566837",
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
      "headline": "Nvidia Just Disclosed an $18 Billion Stake in SpaceX. Here's What Jensen Huang Sees That the Market Doesn't.",
      "headlineKo": "Nvidia는 방금 SpaceX의 180억 달러 지분을 공개했습니다. Jensen Huang이 시장이 보지 못하는 점을 살펴보세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbc227e47fce4cce92ae625f2be3e795b48d2b035c6f46d990695d8b35d7e8d1",
        "publishedAt": 1793280600,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia는 방금 SpaceX의 180억 달러 지분을 공개했습니다.",
        "Jensen Huang이 시장이 보지 못하는 점을 살펴보세요.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 8월 말 Nvidia(NVDA -0.66%)는 2분기 실적과 13F 공개 주식에 대한 세부 정보를 발표했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $18 Billion, 0.84%, $18 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $18 Billion, 0.84%, $18 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b22ff00c5c7678a3bf93",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Quanta Services (NYSE:PWR) Q3 2026 Results Beat Revenue and EPS Estimates",
      "headlineKo": "Quanta Services(NYSE:PWR) 2026년 3분기 실적이 매출 및 EPS 추정치를 상회했습니다.",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=efc837221c4f3bd3cda6778f8527b7dc0b6fe2414eaced97b46d14f8d00fef31",
        "publishedAt": 1793280546,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services (NYSE:PWR) Q3 2026 Results Beat Revenue and EPS Estimates",
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
      "id": "f9fcf03006971f660e5a",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Was There Any Sign AMD Stock Would Run?",
      "headlineKo": "AMD 주식이 상승할 조짐이 있었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c1dc2f91ab20895815a2ff437bfd7e833d5bb19706ade9ea36010a5e7aa1f4cb",
        "publishedAt": 1793279789,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD 주식이 상승할 조짐이 있었나요?",
        "| Trefis AMD 주식이 상승할 조짐이 있었나요?",
        "2026년 10월 29일 · Trefis 팀 AMD YTD +170.1% SPY YTD +13.9% QQQ YTD +18.4% AMD 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내주세요."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 170.1%, 13.9%, 18.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 170.1%, 13.9%, 18.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0067179f18aa9b3e53e6",
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
      "headline": "QCOM Stock Earnings Preview: What to Expect From Qualcomm’s Q4 Report",
      "headlineKo": "QCOM 주식 수익 미리보기: Qualcomm의 4분기 보고서에서 기대할 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56dc069e02c97bece86e7a1fa31ba3ba7ceaa9f8236f156a5700651a5b63ac00",
        "publishedAt": 1793279614,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "QCOM 주식 수익 미리보기: Qualcomm의 4분기 보고서에서 기대할 사항"
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
      "id": "c78fd96bd9be8844a542",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "COHR",
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
      "headline": "Marvell Sinks 13%, Lumentum Jumps 6% on Reported Acquisition Talks; Coherent Holds Flat, Applied Optoelectronics Drops 3%",
      "headlineKo": "Marvell은 보고된 인수 협상에서 13% 하락, Lumentum은 6% 상승; 코히런트는 정체 상태를 유지하고 응용 광전자 공학은 3% 하락합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ab4bffd3f27853efd021c06508eced6c8469f2c048e227d9e3bb4618a3a2c18",
        "publishedAt": 1793279495,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell은 보고된 인수 협상에서 13% 하락, Lumentum은 6% 상승; 코히런트, 월스트리트 24시간 내내 응용 광전자 공학 하락세 3% 하락 유지",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "작성자: David Moadel 2026년 10월 29일 게시, 오전 9:11(ET) · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 6%, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 6%, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f9fc115cfa835ccc52ee",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Citi Says the NAND Shortage Will Last Until 2028. Here’s Why Sandisk Stock Is Still So Cheap.",
      "headlineKo": "Citi는 NAND 부족이 2028년까지 지속될 것이라고 말했습니다. Sandisk 주식이 여전히 저렴한 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa5055a4b708d5bac85797b67844588211be46d94a00c53117e5a8d603d45d58",
        "publishedAt": 1793279388,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citi는 NAND 부족이 2028년까지 지속될 것이라고 말했습니다. Sandisk 주식이 여전히 저렴한 이유는 다음과 같습니다."
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
          "ticker": "SNDK",
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "c8705840e5ad96607c7c",
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
      "headline": "Microsoft's capex proves it can continue to grow while spending big on AI",
      "headlineKo": "Microsoft의 자본 지출은 AI에 큰 투자를 하면서 계속 성장할 수 있음을 입증합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6719e439f1ef71264326f9954a153ff6221ffa83bde1e87315f330acfc51d9e5",
        "publishedAt": 1793279373,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft's capex proves it can continue to grow while spending big on AI",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "4f2a37f9c83cd09eb354",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "ServiceNow Tumbles 19% as Slower Contract Growth Overshadows Raised AI Target; Salesforce Slides 6%, Workday Drops 5%",
      "headlineKo": "ServiceNow는 계약 증가 속도가 AI 목표를 무색하게 하면서 19% 폭락했습니다. Salesforce 슬라이드 6%, Workday 하락 5%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=216e98f449998139a95426aa4125351f48ec0ae87aad858a07c46fedf046c7ee",
        "publishedAt": 1793279345,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ServiceNow는 계약 증가 속도가 AI 목표를 무색하게 하면서 19% 폭락했습니다. Salesforce 슬라이드 6%, Workday 하락 5% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "지침에 묻혀 있는 세부 사항 중 하나는 전체 엔터프라이즈 소프트웨어 부문에 걸쳐 투자자를 놀라게 한다는 것입니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 19%, 6%, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 19%, 6%, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "35c4f504cd055362bdc9",
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
      "headline": "Marvell Is in Talks to Buy an $83 Billion AI Laser Maker",
      "headlineKo": "Marvell은 830억 달러 규모의 AI 레이저 제조 업체 구매 협상 중입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a7445c91436c650f9b57b0e477c3fac0695924e9d5010f627ba3328965d43da",
        "publishedAt": 1793279274,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $83 Billion, $992.91, 8.64%, $230.40,, 8.44%, $83 billion, $221 billion, $913.95,.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MRVL의 사업과 관련된 'Marvell Is in Talks to Buy an $83 Billion AI Laser Maker' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ec006b11da21afd8deb6",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
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
      "headline": "Alphabet Sinks 11% as AI Spending Pushes Cash Flow Negative Again; Microsoft and Meta Edge Higher, Amazon Slips",
      "headlineKo": "AI 지출로 인해 현금 흐름이 다시 마이너스로 돌아가면서 Alphabet은 11% 하락했습니다. Microsoft와 Meta Edge Higher, Amazon 전표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=893172ea458a5cc95bbf4b48c1985f5eedf4fd496963412f9057e09a787ce869",
        "publishedAt": 1793279257,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 지출로 인해 현금 흐름이 다시 마이너스로 돌아가면서 Alphabet은 11% 하락했습니다. Microsoft와 Meta Edge Higher, Amazon 전표 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "이 두 하이퍼스케일러가 동일한 구축에 자금을 지원하는 방식 사이의 격차는 투자자에게 누가 누구인지에 대한 모든 것을 알려줍니다. 작성자: David Moadel 2026년 10월 29일 오전 9시 7분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, $288, $540, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, $288, $540, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5b9f23d0812481d863c9",
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
      "headline": "B. Riley Securities Maintains Buy on Modine Manufacturing, Lowers Price Target to $285",
      "headlineKo": "B. Riley Securities는 Modine Manufacturing에 대한 매수를 유지하고 목표 가격을 285달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e74cf635e0fa313653e98c48258cf3db017d2c556f3a66e701d29af51c96c0c6",
        "publishedAt": 1793279119,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "B. Riley Securities Maintains Buy on Modine Manufacturing, Lowers Price Target to $285",
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
      "id": "3b2e786880816eb17290",
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
      "headline": "Apps Associates Wins Two 2026 Oracle Partner Awards Across North America and EMEA, Earns Five Additional Finalist Recognitions",
      "headlineKo": "Apps Associates, 북미 및 EMEA에서 2026년 Oracle Partner Awards를 2개 수상하고 최종 후보 표창 5개 추가 획득",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56282b6d0c07d23de0626bcbf9b695e90ce06f30a8626612453fff9a2eea39a3",
        "publishedAt": 1793279100,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 ORCL의 사업과 관련된 'Apps Associates Wins Two 2026 Oracle Partner Awards Across North America and EMEA, Earns Five Additional Finalist Recognitions' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a685afac7a3b28b5ecd7",
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
      "headline": "What a $1,000 Investment in Palantir Could Be Worth by the End of 2027 (The Answer May Surprise You)",
      "headlineKo": "2027년 말까지 Palantir에 대한 1,000달러 투자의 가치는 얼마나 될까요?(답변은 여러분을 놀라게 할 수 있습니다)",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e52d438e74c6678ac8f9ebe296a4f95fb583c6d46a664ce7d38734161aab0f1",
        "publishedAt": 1793279100,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2027년 말까지 Palantir에 대한 1,000달러 투자의 가치는 얼마나 될까요(답변은 여러분을 놀라게 할 수 있습니다) | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Palantir( PLTR -1.09% )가 여기에 포함되었습니다.",
        "2026년은 예외였지만 해마다 높은 수익률을 기록했습니다.",
        "올해는 전년도에 비해 10% 정도만 상승해 실망스럽습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 55%, $194.67 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10%, 55%, $194.67 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9bdad24f0505ecd895e3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "EMCOR Group, Inc. 2026 Q3 - Results - Earnings Call Presentation",
      "headlineKo": "EMCOR Group, Inc. 2026년 3분기 - 결과 - 실적 발표 프레젠테이션",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e471cf0fd6a8f51a2a780d42c74d26dc1f4f64c22b67f1a246fd7faa776b2c94",
        "publishedAt": 1793279075,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR Group, Inc. 2026년 3분기 - 결과 - 실적 발표 프레젠테이션"
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
          "ticker": "EME",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ecdae48a3b2c5a1535b1",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "GOOGL",
        "LITE",
        "MRVL"
      ],
      "relatedEntities": [
        {
          "name": "Alphabet",
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
      "headline": "Marvell shares sink as Alphabet miss and Lumentum deal reports weigh on sentiment",
      "headlineKo": "Alphabet이 실패하고 Lumentum 거래 보고서가 정서를 압박함에 따라 Marvell 주가 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb9a3edcf6aa8ec5d9b33f071446f09066afa28fe4bd59c447d82da6698a6932",
        "publishedAt": 1793278907,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell shares sink as Alphabet miss and Lumentum deal reports weigh on sentiment",
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
      "id": "21f3164ac736b1aa1138",
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
      "headline": "Practifi Announces Continued Partnership with Dynasty Financial Partners to Deliver Purpose-Built CRM",
      "headlineKo": "Practifi, 목적에 맞는 CRM 제공을 위해 다이너스티 금융 파트너와의 지속적인 파트너십 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57acad286c786a3df20787f5392d22d81be2f1d900a2fd3c9578d2edf88d6aa0",
        "publishedAt": 1793278800,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Practifi Announces Continued Partnership with Dynasty Financial Partners to Deliver Purpose-Built CRM",
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
      "id": "6d4fe4278a9511698fcc",
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
      "headline": "Eclypsium and NVIDIA Collaborate to Address Emerging AI Infrastructure Attack Surface and Strengthen AI Trust",
      "headlineKo": "Eclypsium과 NVIDIA가 협력하여 새로운 AI 인프라 공격 표면을 해결하고 AI 신뢰를 강화합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=834de4e3f6995062eb67486b329081c84505fc6995204acbae56166a5a3344f9",
        "publishedAt": 1793278800,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Eclypsium and NVIDIA Collaborate to Address Emerging AI Infrastructure Attack Surface and Strengthen AI Trust",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'Eclypsium and NVIDIA Collaborate to Address Emerging AI Infrastructure Attack Surface and Strengthen AI Trust' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "NVDA",
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
      "id": "dd092fb16e3ba8acd75a",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "EMCOR Group (NYSE:EME) Posts Strong Q3 Beat and Raises Guidance",
      "headlineKo": "EMCOR Group(NYSE:EME), 3분기 강세를 기록하고 가이던스 상향",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=6c3608bb3c6a86dab28c529081977184a720da137c742160fcca365495f405ef",
        "publishedAt": 1793278110,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR Group (NYSE:EME) Posts Strong Q3 Beat and Raises Guidance",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "e7ba2828bf2e8fa1e841",
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
      "headline": "Pick-and-Shovel vs. Edge Gatekeeper: Why Investors Are Splitting Between Nvidia and Apple",
      "headlineKo": "Pick-and-Shovel 대 Edge Gatekeeper: 투자자들이 Nvidia와 Apple 사이에서 분열하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f24dcb3e3f24d36beddab9aeaf200f3e821ff9ed64b077375fe08986cd063a5",
        "publishedAt": 1793277931,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Edge Gatekeeper: 투자자들이 Nvidia와 Apple 사이에서 분열하는 이유 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "Edge Gatekeeper: 투자자들이 Nvidia와 Apple 사이에서 분열하는 이유 Nvidia와 Apple은 모두 AI에 힘입어 기록적인 분기를 기록했지만 완전히 반대되는 방식으로 돈을 벌고 있으며 그 베팅 중 단 하나만 가격표만큼 가치가 있는 것으로 보입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $96.22, 105.8%, $40.31 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $96.22, 105.8%, $40.31 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e265ab4752004e623d1e",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "AI Has Made Flash Memory 5 Times More Expensive, and Apple Can’t Bully Its Memory Suppliers Anymore",
      "headlineKo": "AI는 플래시 메모리를 5배 더 비싸게 만들었고 Apple은 더 이상 메모리 공급업체를 괴롭힐 수 없습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a9b202c1d5502ae042b7426a03fa2b334c68c1c0dbf3c3b11a317274d3d5f26",
        "publishedAt": 1793277801,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI는 플래시 메모리를 5배 더 비싸게 만들었고 Apple은 더 이상 메모리 공급업체를 괴롭힐 수 없습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "작성자: Omor Ibne Ehsan 2026년 10월 29일 오전 8시 43분(ET) 게시 · 읽기 3분 𝕏 f ⧉ 현대 전자 제품의 핵심 구성 요소인 중요한 3D NAND 플래시 메모리 칩은 논의된 메모리 및 스토리지 회사의 성능 및 시장 추세의 기초가 됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5 Times, $200,, $66, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 5 Times, $200,, $66, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "43802957e7bdb8a7c3be",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Dips as Samsung Earnings Show the High Bar for Memory Stocks",
      "headlineKo": "삼성 실적이 메모리 주식의 높은 기준을 보여주면서 마이크론 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c2b7fe856448803cf33be52402c55941f744a09c953b331c2f191fc2878dc17",
        "publishedAt": 1793277780,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Dips as Samsung Earnings Show the High Bar for Memory Stocks",
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
      "id": "0f0e208e16ecc160feb8",
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
      "headline": "Oracle Just Promised $30 Billion in Free Cash Flow After Capping New Borrowing at $20 Billion",
      "headlineKo": "오라클은 신규 대출 한도를 200억 달러로 제한한 후 300억 달러의 잉여 현금 흐름을 약속했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d11fb1301803aa7ab579c0c2dff0eb36b97ec09b8294b29463436aa5baf32b6e",
        "publishedAt": 1793277361,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle은 신규 대출 한도를 200억 달러로 제한한 후 300억 달러의 잉여 현금 흐름을 약속했습니다. - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "2026년 28일 라스베이거스에서 열린 투자자의 날에 이 회사는 언제 중단할지 날짜를 제시했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $30 Billion, $20 Billion, $30 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $30 Billion, $20 Billion, $30 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a11da53b86dedafcf3d0",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Here's What Key Metrics Tell Us About Emcor Group (EME) Q3 Earnings",
      "headlineKo": "Emcor Group(EME) 3분기 수익에 대한 주요 지표는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8681a6eae6fff2abc53e954981d5b3299037423520321c4a1e88d48cb3614b7f",
        "publishedAt": 1793277007,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Here's What Key Metrics Tell Us About Emcor Group (EME) Q3 Earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "EME의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "EME에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "b7a8361845ae86ad35fe",
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
      "headline": "Quanta Services (PWR) Q3 Earnings: Taking a Look at Key Metrics Versus Estimates",
      "headlineKo": "Quanta Services(PWR) 3분기 수익: 주요 지표와 추정치 살펴보기",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02eeb248490a564c722d9a97eebbe76f13030297234d86ce51119afda345b7cb",
        "publishedAt": 1793277004,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services (PWR) Q3 Earnings: Taking a Look at Key Metrics Versus Estimates",
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
      "id": "7c6e363f579c05772147",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "GOOGL",
        "META",
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
      "headline": "Bank of America Clients Are Dumping Meta and Google Stocks at a Record Pace",
      "headlineKo": "Bank of America 고객은 기록적인 속도로 메타 및 Google 주식을 덤핑하고 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=abc4db9cd54409096b310e93a44b7c5d850bc91cc5a289d6ba3f4276a9c62c1c",
        "publishedAt": 1793276286,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bank of America 고객은 기록적인 속도로 메타 및 Google 주식을 덤핑하고 있습니다. - 연중무휴 월스트리트",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "작성자: Omor Ibne Ehsan 2026년 10월 29일 오전 8시 18분(ET) 게시 · 3분 읽기 𝕏 f ⧉ 미국 국채 시장 달러 지폐에 대한 하락.3D 렌더링 © 미국 재무부 채권 시장 달러 지폐에 대한 하락.3D 렌더링(Shutterstock.com) by MeshCube T"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6.98%, $648.85, $612.49, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6.98%, $648.85, $612.49, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e2200b387a79a5104b78",
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
      "headline": "Intel (INTC) Agrees $2.3 Billion Quantum Deal That Could Reshape Its Stack",
      "headlineKo": "인텔(INTC)은 스택을 재편성할 수 있는 23억 달러 규모의 양자 거래에 합의했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3e9dac2c927540c92efa2e4973bba631284ea3aeb8ec96fa4f6e3537e5bee68",
        "publishedAt": 1793276231,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel (INTC) Agrees $2.3 Billion Quantum Deal That Could Reshape Its Stack",
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
      "id": "809745206fddc840e7d3",
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
      "headline": "Advanced Micro (AMD) Q3 Earnings on the Horizon: Analysts' Insights on Key Performance Measures",
      "headlineKo": "AMD(Advanced Micro) 3분기 실적 전망: 주요 성과 지표에 대한 분석가의 통찰",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e5722e25ff6acacaa09fcc5b8e404fdd4b76cb3f2ff988d23587b07f0ca26eff",
        "publishedAt": 1793276107,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Advanced Micro (AMD) Q3 Earnings on the Horizon: Analysts' Insights on Key Performance Measures",
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
      "id": "641a0d8ab70aaed3d79b",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Ahead of Eaton (ETN) Q3 Earnings: Get Ready With Wall Street Estimates for Key Metrics",
      "headlineKo": "ETN(Ahead of Eaton) 3분기 수익: 주요 지표에 대한 월스트리트 추정치를 준비하세요",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=01e4f0456ac37915865b3da24cc5840e01a6b5bb330c7c72277bd69ee16f5348",
        "publishedAt": 1793276105,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ETN(Ahead of Eaton) 3분기 수익: 주요 지표에 대한 월스트리트 추정치를 준비하세요"
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
      "id": "d3dbeb9c32bb9781ca0e",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMD",
        "AMZN",
        "AVGO",
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
      "headline": "Alphabet, Amazon, SpaceX, Microsoft, Broadcom, and AMD Are Counting on Anthropic's IPO. Not All Their Contracts Are Equal.",
      "headlineKo": "Alphabet, Amazon, SpaceX, Microsoft, Broadcom 및 AMD가 Anthropic의 IPO를 기대하고 있습니다. 모든 계약이 동일한 것은 아닙니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a3039a9eb41ff125aa3f84e0ec3f9d630e06725ca5ca56650b40a014889d823",
        "publishedAt": 1793276100,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet, Amazon, SpaceX, Microsoft, Broadcom 및 AMD가 Anthropic의 IPO를 기대하고 있습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Anthropic의 오랫동안 기다려온 기업공개(IPO)는 인공지능(AI)에 관심이 있는 투자자들에게 대규모 이벤트가 될 수 있습니다.",
        "그러나 가장 큰 수혜자는 대규모 언어 모델을 개발하는 Claude 계열 개발자의 주식을 구매하는 사람들이 아닐 수도 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11.83%, 11.90%, 2.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11.83%, 11.90%, 2.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "92cc9183f6da62bd17c1",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "AMZN",
        "AVGO",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet, Amazon, SpaceX, Microsoft, Broadcom, and AMD Are Counting on Anthropic's IPO. Not All Their Contracts Are Equal.",
      "headlineKo": "Alphabet, Amazon, SpaceX, Microsoft, Broadcom 및 AMD가 Anthropic의 IPO를 기대하고 있습니다. 모든 계약이 동일한 것은 아닙니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a3039a9eb41ff125aa3f84e0ec3f9d630e06725ca5ca56650b40a014889d823",
        "publishedAt": 1793276100,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet, Amazon, SpaceX, Microsoft, Broadcom 및 AMD가 Anthropic의 IPO를 기대하고 있습니다. 모든 계약이 동일한 것은 아닙니다."
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
      "id": "3cea0500e42287ad8bd4",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Amazon (AMZN) a 'Buy' Ahead of Earnings?",
      "headlineKo": "아마존(AMZN)은 수익보다 '매수'인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=97295bcd36a87426854fe3d3a9b059f9a91b9718926cb57537b46d71243e6271",
        "publishedAt": 1793275980,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존(AMZN)은 수익보다 '매수'인가?"
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
      "id": "d44d777155ce90851ee8",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron shares dip as Samsung’s post-earnings selloff spreads to memory peers",
      "headlineKo": "삼성의 실적 후 매도세가 메모리 업계로 확산되면서 마이크론 주가 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4109961f8d53dcc7e596618f84600956e10c9982b9fcc5f5378a3633317f0fe1",
        "publishedAt": 1793275917,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron shares dip as Samsung’s post-earnings selloff spreads to memory peers",
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
      "id": "0a0ded9055b6898bb1e9",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Fortera & Meta Sign Multi-Year Environmental Attribute Certificate (EAC) Purchase Agreement for Low Carbon Cement",
      "headlineKo": "Fortera와 Meta Sign 저탄소 시멘트 다년간 환경속성인증서(EAC) 구매 계약",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=98f44e5cc72643917122b8d6743e4f278939b8b8aa3ec44a5821a34a42a3308c",
        "publishedAt": 1793275200,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Fortera & Meta Sign Multi-Year Environmental Attribute Certificate (EAC) Purchase Agreement for Low Carbon Cement",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "eb5f7fa4219150a2fc56",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "GOOGL",
        "PLTR",
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
      "headline": "Here Are Thursday’s Top Wall Street Analyst Research Calls: Alphabet, Boston Scientific, eBay, Fervo Energy, Fortinet, Hilton Worldwide Holdings, Lennox International, Palantir Technologies, and More",
      "headlineKo": "목요일의 주요 월스트리트 분석가 연구 통화는 다음과 같습니다: Alphabet, Boston Scientific, eBay, Fervo Energy, Fortinet, Hilton Worldwide Holdings, Lennox International, Palantir Technologies 등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eede4847c2e8dfd74cd52a6f7ea88c81b929d7cfb5a693abc1095c9c8015231c",
        "publishedAt": 1793275073,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "목요일의 주요 월스트리트 분석가 연구 통화는 다음과 같습니다. Alphabet, Boston Scientific, eBay, Fervo Energy, Fortinet, Hilton Worldwide Holdings, Lennox International, Palantir Technologies 등 - 연중무휴 24시간 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "작성자 Lee Jackson 2026년 10월 29일 오전 7시 57분(ET) · 4분 읽기 𝕏 f ⧉ 글로벌 금융 중심지인 뉴욕시의 월스트리트와 브로드 스트리트의 상징적인 교차로는 주요 기관에 대한 현재 시장의 평가를 반영합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 3%, 5.35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10%, 3%, 5.35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c076aeefe13886897546",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MSFT",
      "relatedTickers": [
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
      "headline": "Dow Jones Futures Fall; Microsoft Rises, But Google, ServiceNow, Fortinet Dive On Earnings",
      "headlineKo": "다우존스 선물 하락; Microsoft는 상승했지만 Google, ServiceNow, Fortinet은 수익에 급락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fda5c06099cf8bfe09156f2324fc43bc15ee8170c17704cbe55f35cd0a352f08",
        "publishedAt": 1793274884,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "다우존스 선물 하락; Microsoft는 상승했지만 Google, ServiceNow, Fortinet은 수익에 급락했습니다."
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
      "id": "b615146a4ea00e87e4d9",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stocks Down Pre-Bell Ahead of Key Inflation Report, Amazon Earnings",
      "headlineKo": "주요 인플레이션 보고서, 아마존 수익에 앞서 주식 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a593136ed9db37180e5886c19bd4f430d5f7ef21e485184ae94bc3bd6dd4269a",
        "publishedAt": 1793274463,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "주요 인플레이션 보고서, 아마존 수익에 앞서 주식 하락"
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
      "id": "87dbf27ebe76a482bc26",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Is Micron Stock Riskier Than It Looks?",
      "headlineKo": "마이크론 주식은 보기보다 위험합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8c6e5a5d5ab84001ccce5ef607d2134d274fbfce421da99a191ed9d38c48f1e",
        "publishedAt": 1793274278,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 주식은 보기보다 위험합니까?",
        "| Trefis는 Micron 주식이 보기보다 위험합니까?",
        "2026년 10월 29일 · Trefis 팀 MU YTD +244.7% SPY YTD +13.9% QQQ YTD +18.4% MU 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 244.7%, 13.9%, 18.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 244.7%, 13.9%, 18.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bbd80b7293a57626cb32",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Western Digital Stock Tripled: What Changed And What Did Not?",
      "headlineKo": "Western Digital 주가가 3배로 늘었습니다: 무엇이 바뀌었고 무엇이 바뀌지 않았나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c2fa579056b3f5ccec4d5f00d6b2d6afe92d90d1ad6701719af4f51c6cbf588",
        "publishedAt": 1793274260,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital 주가가 3배로 늘었습니다: 무엇이 바뀌었고 무엇이 바뀌지 않았나요?",
        "| Trefis Western Digital 주식이 3배로 늘었습니다: 무엇이 바뀌었고 무엇이 바뀌지 않았나요?",
        "2026년 10월 29일 · Trefis 팀 WDC YTD +130.4% SPY YTD +13.9% QQQ YTD +18.4% WDC 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 130.4%, 13.9%, 18.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 130.4%, 13.9%, 18.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "f9e1417b1ef085b33c12",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MU",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Zacks Earnings Trends Highlights: Micron, Nvidia and Alphabet",
      "headlineKo": "Zacks 수익 추세 하이라이트: Micron, Nvidia 및 Alphabet",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=743d7a6783035b9fa594197d77a860ee7f8983061870e032a12bd60d46033de7",
        "publishedAt": 1793274120,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Zacks 수익 추세 하이라이트: Micron, Nvidia 및 Alphabet"
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
      "id": "ef44075dbb19cfe3e422",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Emcor Group: Q3 Earnings Snapshot",
      "headlineKo": "Emcor 그룹: 3분기 수익 스냅샷",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1049a3c9602aba551f62b1f711f52ef4716a8cbe5b87d7e48818b2b1b9179cb5",
        "publishedAt": 1793273850,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Emcor 그룹: 3분기 수익 스냅샷"
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
          "ticker": "EME",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "f085c4ab52be37a332a3",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Quanta Services (PWR) Q3 Earnings and Revenues Beat Estimates",
      "headlineKo": "Quanta Services (PWR) 3분기 수익 및 수익이 예상치를 상회했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12ac61f5c64cb7f4a370a9efeb51674bc3ff529bef85b9a1f187bb61869b44cc",
        "publishedAt": 1793273709,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services (PWR) Q3 Earnings and Revenues Beat Estimates",
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
      "id": "c9ed2bd2336357ea7a19",
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
      "headline": "Western Digital Plummted 20% in The Last 3 Months: Two Wall Street Ratings Firms Expect Nearly 130% Returns Within 12 Months",
      "headlineKo": "Western Digital은 지난 3개월 동안 20% 급락했습니다: 두 월스트리트 등급 회사는 12개월 이내에 거의 130%의 수익률을 예상합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6563d110dd6085e20bfd512be1b837f03900df2ba17fd12f56654fdcb8a67b82",
        "publishedAt": 1793272553,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital은 지난 3개월 동안 20% 급락했습니다: 두 개의 월스트리트 등급 회사는 12개월 이내에 거의 130%의 수익을 기대합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "작성자: Alex Sirois 2026년 10월 29일 오전 7시 15분(ET) 게시 · 3분 읽기 𝕏 f ⧉ © Ian Tuttle / Getty Images Western Digital(NASDAQ:WDC | WDC Price Prediction)의 현재 주가는 $396.42에 거래되고 있으며 평균 애널리스트 목표 가격은 $613.38입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 130%, $396.42, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, 130%, $396.42, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "faf28dd807f768d61790",
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
      "headline": "Quanta Services: Q3 Earnings Snapshot",
      "headlineKo": "Quanta 서비스: 3분기 수익 스냅샷",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8a3ea3ad0e3ac704850d778034b2d36a54bfcba98b5c18bdf0cd633270ac0b43",
        "publishedAt": 1793271944,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta 서비스: 3분기 수익 스냅샷"
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
      "id": "386f55b8608d259c1817",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Wells Fargo Maintains Overweight on Vertiv Holdings, Raises Price Target to $345",
      "headlineKo": "Wells Fargo, Vertiv Holdings에 대한 비중확대 유지, 목표 주가를 345달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1ef1d1cf60bc47d440541f54e27ef730847c6e833a5afe1edf3bd70505063d58",
        "publishedAt": 1793269236,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wells Fargo, Vertiv Holdings에 대한 비중확대 유지, 목표 주가를 345달러로 인상"
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
          "ticker": "VRT",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "9cc04264d69ff23a5a6e",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Here’s How Much Intel Stock Is Expected to Move After Earnings",
      "headlineKo": "수익 창출 후 인텔 주식이 얼마나 움직일 것으로 예상되는지는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18240fdb10250b7d6eb9927a914a64e98f9ddf7cac5f0da7affe1371ffb0e97c",
        "publishedAt": 1793268000,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Here’s How Much Intel Stock Is Expected to Move After Earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "9393a7dc99313c17236d",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "GE Vernova: 3 Straight Guidance Raises, And Wall Street Still Doubts It",
      "headlineKo": "GE Vernova: 3가지 지침 인상, 월 스트리트는 여전히 이를 의심",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=651d39570f3e370033531d61b81cb64694e87a4d556eeea720c45eb6c4059103",
        "publishedAt": 1793266708,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova: 3 Straight Guidance Raises, And Wall Street Still Doubts It",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "d4c33cbebbca17cbd54e",
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
      "headline": "Down 20% From Highs, Is Arista Networks a Genius Buy or a Trap Before Earnings?",
      "headlineKo": "고점 대비 20% 하락, Arista Networks는 천재적인 매수인가 아니면 수익 전의 함정인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4838f688799a442e9be52c950622fec43ad2b7e9d4e4ac6655b37633a3c72010",
        "publishedAt": 1793266179,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "고점 대비 20% 하락, Arista Networks는 천재적인 매수인가 아니면 수익 전의 함정인가?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "Arista Networks는 처음으로 30억 달러의 분기를 기록한 후 수익을 향해 나아갔지만, 지난번에는 오류가 허용되지 않는 프리미엄 배수로 거래되면서 주가는 한 달 만에 거의 10% 하락했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, $3 billion, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, $3 billion, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b36f0730ffed575a5d82",
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
      "headline": "Apple's Stock Faces A Post-Earnings Selloff",
      "headlineKo": "애플 주식, 실적 ​​후 매도세 직면",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cc29c86aab756be44de4d7c730c649bd4d19b2a0bb1ea43e0c2c79e38450cf69",
        "publishedAt": 1793266122,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "애플 주식, 실적 ​​후 매도세 직면"
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
      "id": "785d71de423914c15115",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN",
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
      "headline": "Will AI Power Demand Spark a Blowout Quarter for Eaton (ETN) on Nov. 3?",
      "headlineKo": "AI 전력 수요가 11월 3일 Eaton(ETN)의 분기 폭발을 촉발할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7aec9170ac40bff55a92d98a1a308c7c10db315c8c23a5718639762fedebb0b0",
        "publishedAt": 1793265768,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 전력 수요가 11월에 Eaton(ETN)의 분기 폭발을 촉발할 것인가?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20",
        "Eaton은 데이터 센터 수요가 폭발적으로 증가하는 동안 EPS 추정치를 6분기 연속 상회했지만 주가는 한 달 만에 10% 이상 하락했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 10.58%, $3.15, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ETN에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 10%, 10.58%, $3.15, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dc4026432bda42a8ae6b",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Oppenheimer Reiterates Outperform on Palantir Technologies, Raises Price Target to $235",
      "headlineKo": "Oppenheimer, Palantir Technologies의 우수한 성과를 유지하고 목표 가격을 235달러로 높임",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=22af298e85de45fb03e6c874fb676a369afaa7addb146a87fe89eee03b5ee510",
        "publishedAt": 1793265653,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oppenheimer, Palantir Technologies의 우수한 성과를 유지하고 목표 가격을 235달러로 높임"
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
          "ticker": "PLTR",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "fefcd25503d222453ce3",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC"
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
      "headline": "Susquehanna Maintains Neutral on KLA, Lowers Price Target to $190",
      "headlineKo": "Susquehanna는 KLA에 대해 중립을 유지하고 목표 가격을 190달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=78e8c51f24985e5bf75cb3d911f8f682058d5cf423f7811fdf3f9ffe154c1f79",
        "publishedAt": 1793264698,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Susquehanna Maintains Neutral on KLA, Lowers Price Target to $190",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "45938e67da4628cceae4",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Susquehanna Maintains Positive on GE Vernova, Lowers Price Target to $1250",
      "headlineKo": "Susquehanna는 GE Vernova에 대해 긍정적인 입장을 유지하고 목표 가격을 1250달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=a16fcdfe4f658a0eaf804bcb3c65b71c9cb12f3a79b5d78dc39dd9efdb5c58fd",
        "publishedAt": 1793264553,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Susquehanna Maintains Positive on GE Vernova, Lowers Price Target to $1250",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "5380a3d214dc469a574e",
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
      "headline": "GE Vernova signs agreement to buy Trench Group for $9bn",
      "headlineKo": "GE Vernova는 Trench Group을 90억 달러에 인수하기로 계약을 체결했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f8aba3b998e46c7d87a314cdb61e386c549239b430704f0fc041f477134e164",
        "publishedAt": 1793264200,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova는 Trench Group을 90억 달러에 인수하기로 계약을 체결했습니다."
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
      "id": "ae3f0cc3f6cdf24850cd",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Sandisk Earnings Are Imminent; These Most Accurate Analysts Revise Forecasts Ahead Of Earnings Call",
      "headlineKo": "Sandisk 수익이 임박했습니다. 가장 정확한 분석가들은 실적 발표에 앞서 예측을 수정합니다",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=665e01942b3f6b00b0ec917f97cc845e0d0dc02aef56eab8f9ff3312d264f17f",
        "publishedAt": 1793264188,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk Earnings Are Imminent; These Most Accurate Analysts Revise Forecasts Ahead Of Earnings Call",
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
      "id": "228b28e98442c92899f7",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC"
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
      "headline": "Stifel Maintains Buy on KLA, Lowers Price Target to $230",
      "headlineKo": "Stifel, KLA에 대한 매수 유지, 목표 가격을 230달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=32b6d74b752571d1fdfdf9374e845b2da249398ef14df99b7f924741a6bc0f5c",
        "publishedAt": 1793263611,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stifel Maintains Buy on KLA, Lowers Price Target to $230",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "4bdca41ee208c5434efd",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "MSFT",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today: Dow Jones, S&P 500, Nasdaq 100 Futures Drop After Fed Keeps Rates Unchanged — MSFT, GOOG, TMUS in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: Fed가 금리를 그대로 유지한 후 Dow Jones, S&P 500, Nasdaq 100 선물 하락 — MSFT, GOOG, TMUS 초점(업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=de89f70c4bb4451eac6f327a64bfb57da45acf6304cc8d37f036b0d26e34b50f",
        "publishedAt": 1793263308,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘의 주식 시장: Fed가 금리를 그대로 유지한 후 Dow Jones, S&P 500, Nasdaq 100 선물 하락 — MSFT, GOOG, TMUS 초점(업데이트됨)"
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
          "ticker": "QQQ",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "5313eae11bcdd4d17b00",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "KLA Analysts Cut Their Forecasts Following Q1 Earnings",
      "headlineKo": "KLA 분석가들은 1분기 실적에 따라 예측을 하향 조정했습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5603d74f107c6aa913814bbbf5ea0c65ddc04343ef1a3a35324728469cb6f2d8",
        "publishedAt": 1793262687,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA Analysts Cut Their Forecasts Following Q1 Earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "cd1361547f8bff23f31c",
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
      "headline": "Apple Earnings Preview: Great Cash Flow, But $347 Is Too Expensive",
      "headlineKo": "Apple 수익 미리 보기: 현금 흐름은 좋지만 347달러는 너무 비쌉니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=763b2d9ade5a808408a110ed333ff0a51f82d678651ff9d3b310bb7022749c53",
        "publishedAt": 1793262021,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple 수익 미리 보기: 현금 흐름은 좋지만 347달러는 너무 비쌉니다."
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
      "id": "ed32746221d762ffdcb7",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC"
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
      "headline": "Cantor Fitzgerald Maintains Overweight on KLA, Lowers Price Target to $225",
      "headlineKo": "Cantor Fitzgerald, KLA에 대한 비중확대 유지, 목표 가격을 225달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=dd5aad0401b4b42df8026a6cce4a856363cec0a116d9caeb725061892a784a8b",
        "publishedAt": 1793261471,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cantor Fitzgerald, KLA에 대한 비중확대 유지, 목표 가격을 225달러로 낮춤"
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
          "ticker": "KLAC",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "455df564f732d84825d5",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC"
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
      "headline": "Needham Maintains Buy on KLA, Lowers Price Target to $200",
      "headlineKo": "Needham, KLA에 대한 매수 유지, 목표 가격을 200달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0bc4debdf38ddef62eb383ba98e54bb191033156c802adcda7a1355fafdbb629",
        "publishedAt": 1793258352,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Needham, KLA에 대한 매수 유지, 목표 가격을 200달러로 낮춤"
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
          "ticker": "KLAC",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "d900d6e7c8fe077174a8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AMD",
        "AMZN",
        "AVGO",
        "GOOGL",
        "INTC",
        "MSFT",
        "MU",
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
          "name": "Samsung",
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
      "headline": "INTC, AMD, AVGO, MU Decline On Samsung’s Profit Miss, Lighter Capex From Microsoft, Alphabet",
      "headlineKo": "INTC, AMD, AVGO, MU는 삼성의 이익 손실, Microsoft, Alphabet의 자본 지출 감소",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a5e88b0346364384c58a7fb369d2f830a360eef7cef8b41e98884b02870191c7",
        "publishedAt": 1793257357,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "삼성이 기록적인 이익을 냈습니다 - 칩 재고가 하락한 이유는 다음과 같습니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.25% SPY 0.21% QQQ 1.05% Trending IOVA 34.84% GOOGL 11.62% NOW 25.24% GOOG 11.45% MSFT 1.33% NCLH 14.45% PURR 16.25% CVNA 15.31% TDO",
        "INTC, AMD, AVGO, MU 삼성의 이익 감소, 자본 지출 감소 Microsoft의 Alphabet 투자자들은 이제 목요일 장 마감 후 Amazon과 Intel의 분기별 보고서를 참고하여 단서를 찾을 것입니다.",
        "(사진: Mustafa Ciftci/Anadolu Agency/Getty Images) Yuvraj Malik · Stocktwits 게시일: 2026년 10월 29일 | 오전 3시 2분 EDT 주식 · 마이크론에 추가하세요. 인텔 주식은 목요일을 앞두고 밤새 거래에서 3% 이상 하락했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.25%, 0.21%, 1.05% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.25%, 0.21%, 1.05% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bcc4dddf425f6e73af21",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Broadcom Stock Is 29% Below Its Record. After Its New Anthropic Deal, I'd Consider Buying It a Little at a Time.",
      "headlineKo": "Broadcom 주가는 사상 최고치보다 29% 낮습니다. 새로운 인류애적 거래 이후에는 한 번에 조금씩 구매하는 것을 고려해 보겠습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8e504641b1ec2e83d9afdb148b7fae5b41da3a32b99b4bdd80ebfd8c060c4943",
        "publishedAt": 1793243522,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom 주가는 사상 최고치보다 29% 낮습니다. 새로운 인류애적 거래 이후에는 한 번에 조금씩 구매하는 것을 고려해 보겠습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "b3ff9359d748ad08c739",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "GOOGL",
        "INTC",
        "MRVL",
        "MSFT",
        "NVDA",
        "ORCL",
        "QQQ",
        "SNDK",
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
      "headline": "S&P 500, Nasdaq Futures Dip As Weaker-Than-Expected Alphabet Earnings Reignite AI Spending Worries —  GOOGL, MSFT, ORCL, NVDA, MRVL In Focus",
      "headlineKo": "S&P 500, 나스닥 선물 하락으로 예상보다 약한 알파벳 수익으로 AI 지출 우려 재점화 — GOOGL, MSFT, ORCL, NVDA, MRVL 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c11aa7b13d25f9734f6b25b03f25b566f8e29cef3ff5b9ec4724d06d8e4187b",
        "publishedAt": 1793232628,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Nasdaq 선물 하락, 예상보다 약한 알파벳 수익으로 AI 지출 우려 재점화 — GOOGL, MSFT, ORCL, NVDA, MRVL 집중 AI 에이전트 동향 뉴스 수익 전체 DIA 0.15% SPY 0.91% QQQ 2.01% 추세 INTC 23.02% SNDK 2.10% DJ",
        "예상보다 약한 알파벳 수익으로 S&P 500, 나스닥 선물 하락으로 AI 지출 우려 재점화 — GOOGL, MSFT, ORCL, NVDA, MRVL 집중 연준은 10월 정책 회의에서 금리를 동결했습니다.",
        "거래자들이 2026년 10월 14일 뉴욕시에서 아침 거래 중에 뉴욕 증권 거래소 바닥에서 일하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.15%, 0.91%, 2.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.15%, 0.91%, 2.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0f474ab0c047e827075c",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR",
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
      "headline": "Marvell Wants Lumentum. Here’s Why Coherent Could Win.",
      "headlineKo": "Marvell은 Lumentum을 원합니다. Coherent가 승리할 수 있는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28044f1bdfed35192cda6393769ee1ca83652198a992d1c55b755fdbcf57fb74",
        "publishedAt": 1793231067,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,650.60 −0.44% Dow Jones 52,399.20 +0.05% Nasdaq 100 28,751.00 −1.16% Russell 2000 2,844.27 −0.55% S&P 500 7,650.60 −0.44% 다우존스 52,399.20 +0.05% 나스닥 100 28,751.00 −1.16% 러셀 20",
        "Lumentum에 대한 Marvell의 보고된 입찰은 광 네트워킹 부문을 통해 충격파를 보내고 있지만 이 거래에서 가장 많은 이익을 얻을 수 있는 회사는 협상 테이블에 앉아 있는 당사자가 아닐 수도 있습니다.",
        "Robert Castellano 2026년 10월 28일 오후 7시 44분(ET) 게시 · 11분 읽기 𝕏 f ⧉ © Shutterstock Marvell의 보고된 Lumentum 인수 협상을 통해 Coherent는 전략적으로 가장 가치 있는 독립 광학 기술 공급업체 중 하나가 될 수 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $2 billion, 3.5%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $2 billion, 3.5%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "89a4c2dfcb93410d5bba",
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
      "headline": "Vistra Stock Has Slumped for a Year: Why Wells Fargo Still Sees 39% Upside",
      "headlineKo": "Vistra 주식이 1년 동안 하락했습니다: Wells Fargo가 여전히 39% 상승 여력을 보이는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc1dfdc302783b3120f77aeb4259f9fb1433551cab001136e1ab3ca04ca4d3e8",
        "publishedAt": 1793220918,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra 주식은 1년 동안 하락했습니다: Wells Fargo가 여전히 39% 상승 여력을 보이는 이유 | TIKR.com 일반 투자 Vistra 주식이 1년 동안 하락했습니다: Wells Fargo가 여전히 39% 상승 여력을 보이는 이유 Rexielyn Diaz • 5분 읽기 검토자: David Hanson 마지막",
        "이 목표는 지난 1년간 가격이 26% 하락한 이후 여전히 가격보다 39% 높은 수준입니다.",
        "대부분의 피해는 텍사스에서 발생했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 39%, $198, $212 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 39%, $198, $212 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "77ec71177a8469dc1ab2",
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
      "headline": "Sandisk Is Still Down 23% in the Past Month. Did Today Just Mark the Bottom for SNDK Stock?",
      "headlineKo": "Sandisk는 지난 달에도 여전히 23% 하락했습니다. 오늘이 SNDK 주식의 바닥을 표시했나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2cfcb49d805e538abb4f9fe3619e03ae6c510ccc7036550b013be9b2c6d9276d",
        "publishedAt": 1793213872,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk는 지난 달에도 여전히 23% 하락했습니다.",
        "오늘이 SNDK 주식의 바닥을 표시했나요?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,729.40 −0.03% Dow Jones 52,376.60 −0.45% Nasdaq 100 29,469.60 −0.48% Russell 2000 2,868.95 +1.02% S&P 500 7,729.40 −0.03% 다우존스 52,376.60 −0.45% 나스닥 100 29,469.60 −0.48% 러셀 20"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 23%, $1,395.33., 14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 23%, $1,395.33., 14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0f72fc9463f58bc0ee7d",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Seagate: Fiscal Q1 Earnings Snapshot",
      "headlineKo": "Seagate: 회계연도 1분기 수익 스냅샷",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe1ae36060f52ba3f07649b529e0edbf0a9459e348b6970767e0241cbeb7f5c1",
        "publishedAt": 1793212564,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate: 회계연도 1분기 수익 스냅샷"
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
          "ticker": "STX",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7977a0d3f358344b3c52",
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
      "headline": "Is Lam Research (LRCX) Undervalued As Earnings Reframe The AI Memory Bet?",
      "headlineKo": "Lam Research(LRCX)는 수익이 AI 메모리 베팅을 재구성함에 따라 저평가되어 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67e97c909773f9d5154046e8e4e4e28363ff5ad5b8c57ada43ce6ad93a79abcf",
        "publishedAt": 1793211097,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Is Lam Research (LRCX) Undervalued As Earnings Reframe The AI Memory Bet?",
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
      "id": "e5aff2538ff41db63ac2",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "NVDA",
        "TSM"
      ],
      "relatedEntities": [
        {
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Beyond NVIDIA: Why TSMC Stock Looks Attractive After Q3 Earnings",
      "headlineKo": "NVIDIA를 넘어서: 3분기 실적 이후 TSMC 주식이 매력적으로 보이는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eec975082f7adc4391d29a4a6078447d19cffc0da487f704780d8c6b5e3fe26d",
        "publishedAt": 1793210400,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Beyond NVIDIA: Why TSMC Stock Looks Attractive After Q3 Earnings",
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
      "id": "f4ff2bf78e5691e71ce3",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arm: The Price Tag Remains Far Too Steep (Earnings Preview)",
      "headlineKo": "Arm: 가격표가 여전히 너무 가파르다(수익 미리보기)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fc552e59b94d33c94f449355858c00fd650d7466627489efbfd87d424d1d975e",
        "publishedAt": 1793209204,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm: The Price Tag Remains Far Too Steep (Earnings Preview)",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "4b2173c0491f9cb83282",
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
      "headline": "Why Arm’s Q2 Earnings Could Spur a Recovery in Its Stock",
      "headlineKo": "Arm의 2분기 실적이 주가 회복을 촉진할 수 있는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0291b21832e79044a0f164ea58ae7c4c1015d5f5bdbb78e2d34e61c45b4f24c6",
        "publishedAt": 1793208333,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm의 2분기 실적이 주가 회복을 촉진할 수 있는 이유"
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
      "id": "cf8ac5b9002ca875f257",
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
      "headline": "ON Semiconductor Falls 5%, NXP Semiconductors Drops 4% as Soft Guidance Revives Auto Chip Worries; Skyworks Ticks Up, Qualcomm and Texas Instruments Dip",
      "headlineKo": "ON Semiconductor는 5% 하락, NXP Semiconductors는 소프트 가이던스가 자동 칩 우려를 되살리면서 4% 하락; Skyworks Tick Up, Qualcomm 및 Texas Instruments Dip",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67552b49b5fd2acd4097f2886cf55bba6634a2bc522d970c0ae8e3541d7ced8b",
        "publishedAt": 1793208017,
        "collectedAt": 1793376866.3499067
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
        "이 기사는 QCOM의 사업과 관련된 'ON Semiconductor Falls 5%, NXP Semiconductors Drops 4% as Soft Guidance Revives Auto Chip Worries; Skyworks Ticks Up, Qualcomm and Texas Instruments Dip' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "40f0252e9ff195ef8e00",
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
      "headline": "Can Strong Data Center & Edge Boost SNDK's Top Line in Q1 Earnings?",
      "headlineKo": "강력한 데이터 센터 및 엣지가 SNDK의 1분기 수익 상위 라인을 높일 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7d8f5f34d613fefa1a94fa45582b1b3961e8b54c30a7a1c2a2cdf3b07ab02ea0",
        "publishedAt": 1793207820,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Can Strong Data Center & Edge Boost SNDK's Top Line in Q1 Earnings?",
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
      "id": "6e7c601025b1c2579a95",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
        "KLAC",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Chip Equipment Stocks Rally as SK Hynix Signals Memory Shortage Into 2030: Lam Research Jumps 5%, Applied Materials Climbs 4%, KLA Gains 3%",
      "headlineKo": "SK하이닉스, 2030년 메모리 부족 신호에 칩 장비 주가 반등: Lam Research 5% 상승, Applied Materials 4% 상승, KLA 3% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=659ee2612727688b7fbf1c1d37f4c82d842b1688bba64a9d1ef6c5dc781758a7",
        "publishedAt": 1793203425,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SK하이닉스, 2030년 메모리 부족 신호에 칩 장비 주가 반등: Lam Research 5% 상승, Applied Materials 4% 상승, KLA 3% 상승"
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "21d1acbfad10bfdc252e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "HUBB",
      "relatedTickers": [
        "HUBB"
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
      "headline": "JP Morgan Maintains Neutral on Hubbell, Raises Price Target to $486",
      "headlineKo": "JP Morgan, Hubbell에 대해 중립 유지, 목표 가격을 486달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=14c17377e793fae30f081cb7292abb2d43390a83b89637cbb1879e7e287e332c",
        "publishedAt": 1793200103,
        "collectedAt": 1793376866.3499067
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JP Morgan Maintains Neutral on Hubbell, Raises Price Target to $486",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "HUBB의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "HUBB에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "HUBB의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "HUBB",
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
    "AMZN": [
      "090dbe40ef2a39a41feb",
      "52cadd2accc273784755",
      "1db9f5256d199efb544c",
      "3c11ac3afff09ed4f7d9",
      "cac5e8f6ca01d9b52f5d",
      "41501b25c7815b1a77a3",
      "b10856bb8836abe07ae4",
      "88f834a1982fb8be3756",
      "9ed0edfbe42b9d861d20",
      "201321795d2b79494035",
      "5c5ebacde7fe36a1031f",
      "9593e7da3d0d28ebe5cd",
      "ae25a5f4e8d88480b225",
      "e1a534c3ce2a065b5b31",
      "4da78d36c3cfae88a5da",
      "20f389fc071773adc6a1",
      "ccc1980eb70bbcc1daf9",
      "b1f2d4abfbb724b03bfa",
      "40f4188d63ecaddf9529",
      "8fda6a350c8302885964",
      "7c7cb82632a1661ff381",
      "01e41377895707eeaaa6",
      "10e5d4b58ada0f99e710",
      "f620421f812c7c9b44de",
      "0be03a2ee8ed1f97579a",
      "7f5ac3d77ac9914e7df0",
      "d438a18b8c42dfba9e11",
      "4a62c22348b6d3b83f79",
      "4714c24dc572d9b509f5",
      "ec006b11da21afd8deb6",
      "d3dbeb9c32bb9781ca0e",
      "92cc9183f6da62bd17c1",
      "3cea0500e42287ad8bd4",
      "b615146a4ea00e87e4d9",
      "d900d6e7c8fe077174a8"
    ],
    "INTC": [
      "090dbe40ef2a39a41feb",
      "1db9f5256d199efb544c",
      "3c11ac3afff09ed4f7d9",
      "cac5e8f6ca01d9b52f5d",
      "489be6a428f0c1067b0d",
      "cf600de94f000233a5af",
      "73821e30889c667457c4",
      "b10856bb8836abe07ae4",
      "b92dbb1712ca4bf77679",
      "88f834a1982fb8be3756",
      "9ed0edfbe42b9d861d20",
      "201321795d2b79494035",
      "c6065afd266a8fb9aa86",
      "5c5ebacde7fe36a1031f",
      "ae25a5f4e8d88480b225",
      "e1a534c3ce2a065b5b31",
      "4da78d36c3cfae88a5da",
      "20f389fc071773adc6a1",
      "ccc1980eb70bbcc1daf9",
      "b1f2d4abfbb724b03bfa",
      "8fda6a350c8302885964",
      "7c7cb82632a1661ff381",
      "25068a39492ab1d140d8",
      "01e41377895707eeaaa6",
      "0be03a2ee8ed1f97579a",
      "fba30ee945ae51038790",
      "45e1fc6758e84f013fec",
      "99c03dcdb8202f4bc529",
      "067f4c9bfc81d8505f0e",
      "e2200b387a79a5104b78",
      "9cc04264d69ff23a5a6e",
      "d900d6e7c8fe077174a8",
      "b3ff9359d748ad08c739"
    ],
    "AAPL": [
      "0cc131e6ce92c9995506",
      "0d28310f175e470f9a32",
      "b412df5c436ce2178df8",
      "9ed0edfbe42b9d861d20",
      "107e016713e23efd519c",
      "4da78d36c3cfae88a5da",
      "b1f2d4abfbb724b03bfa",
      "01e41377895707eeaaa6",
      "8822fb1a47772652c5be",
      "c99e1f5ea49130509f40",
      "ee406cb4ea26da09675d",
      "e7ba2828bf2e8fa1e841",
      "e265ab4752004e623d1e",
      "b36f0730ffed575a5d82",
      "cd1361547f8bff23f31c"
    ],
    "QQQ": [
      "0cc131e6ce92c9995506",
      "c1554785a5116e5a9361",
      "3c11ac3afff09ed4f7d9",
      "2a30d86c588824563806",
      "41501b25c7815b1a77a3",
      "489be6a428f0c1067b0d",
      "23933066ecce10352c3e",
      "cf600de94f000233a5af",
      "73821e30889c667457c4",
      "2b0b6acc725a494df875",
      "b10856bb8836abe07ae4",
      "b92dbb1712ca4bf77679",
      "88f834a1982fb8be3756",
      "ab8c3c94a2df6bbb052f",
      "9ed0edfbe42b9d861d20",
      "201321795d2b79494035",
      "5c5ebacde7fe36a1031f",
      "ae25a5f4e8d88480b225",
      "e1a534c3ce2a065b5b31",
      "4da78d36c3cfae88a5da",
      "20f389fc071773adc6a1",
      "ccc1980eb70bbcc1daf9",
      "b1f2d4abfbb724b03bfa",
      "8fda6a350c8302885964",
      "7c7cb82632a1661ff381",
      "01e41377895707eeaaa6",
      "c494e2a490b11e554568",
      "a5ed395e8501790300c5",
      "8b8f503a2edc0b5c2307",
      "0be03a2ee8ed1f97579a",
      "48bd41e3359f17b19251",
      "96d91aff5339d7222cf9",
      "45e1fc6758e84f013fec",
      "65733c002b5c99b4d4e8",
      "c3b100d6f95d3f03d7b2",
      "0c537d68f04178613a0d",
      "61eee56eb71eb339ee79",
      "f9fcf03006971f660e5a",
      "c78fd96bd9be8844a542",
      "4f2a37f9c83cd09eb354",
      "ec006b11da21afd8deb6",
      "e7ba2828bf2e8fa1e841",
      "e265ab4752004e623d1e",
      "0f0e208e16ecc160feb8",
      "7c6e363f579c05772147",
      "eb5f7fa4219150a2fc56",
      "87dbf27ebe76a482bc26",
      "bbd80b7293a57626cb32",
      "c9ed2bd2336357ea7a19",
      "d4c33cbebbca17cbd54e",
      "785d71de423914c15115",
      "4bdca41ee208c5434efd",
      "d900d6e7c8fe077174a8",
      "b3ff9359d748ad08c739",
      "0f474ab0c047e827075c",
      "77ec71177a8469dc1ab2"
    ],
    "SPY": [
      "0cc131e6ce92c9995506",
      "c1554785a5116e5a9361",
      "abdc4112dd46b0e5d2de",
      "2a30d86c588824563806",
      "41501b25c7815b1a77a3",
      "489be6a428f0c1067b0d",
      "db0a48ac57f2be37df24",
      "23933066ecce10352c3e",
      "cf600de94f000233a5af",
      "73821e30889c667457c4",
      "2b0b6acc725a494df875",
      "57148dde4a5474a6fb0b",
      "b10856bb8836abe07ae4",
      "b92dbb1712ca4bf77679",
      "88f834a1982fb8be3756",
      "b412df5c436ce2178df8",
      "9ed0edfbe42b9d861d20",
      "b567c52faf3df2135f2c",
      "201321795d2b79494035",
      "c6065afd266a8fb9aa86",
      "2e3d3b334365bbfb16e0",
      "9d3ed1f8416201f6c599",
      "5c5ebacde7fe36a1031f",
      "cda726d7987cbec9c952",
      "ae25a5f4e8d88480b225",
      "e1a534c3ce2a065b5b31",
      "4da78d36c3cfae88a5da",
      "20f389fc071773adc6a1",
      "213525f4a0f1e6aa20c3",
      "b1f2d4abfbb724b03bfa",
      "0d2069a724b6d64f327c",
      "9ff7765eda9bb1cddcf5",
      "8fda6a350c8302885964",
      "c66d39bc34deafd78cbd",
      "01e41377895707eeaaa6",
      "c494e2a490b11e554568",
      "8b8f503a2edc0b5c2307",
      "ee0e813bed5e4fc47f29",
      "3c89b4b0d71bcbb13716",
      "1bdd2a824366e2ca81b5",
      "0be03a2ee8ed1f97579a",
      "9c54e588a5248a44234b",
      "a245bc35c06ade4b5283",
      "48bd41e3359f17b19251",
      "96d91aff5339d7222cf9",
      "32b0628716757bfe19dc",
      "7f5ac3d77ac9914e7df0",
      "6e30ee88d50bcb40b8b0",
      "b71b395d75d49a02686b",
      "45e1fc6758e84f013fec",
      "65733c002b5c99b4d4e8",
      "18785cb1ef89524d70d3",
      "ee406cb4ea26da09675d",
      "c3b100d6f95d3f03d7b2",
      "fc52b44b987d606e561f",
      "61eee56eb71eb339ee79",
      "25d2cdf1810981566837",
      "f9fcf03006971f660e5a",
      "c78fd96bd9be8844a542",
      "4f2a37f9c83cd09eb354",
      "ec006b11da21afd8deb6",
      "a685afac7a3b28b5ecd7",
      "e7ba2828bf2e8fa1e841",
      "e265ab4752004e623d1e",
      "0f0e208e16ecc160feb8",
      "7c6e363f579c05772147",
      "d3dbeb9c32bb9781ca0e",
      "eb5f7fa4219150a2fc56",
      "87dbf27ebe76a482bc26",
      "bbd80b7293a57626cb32",
      "c9ed2bd2336357ea7a19",
      "d4c33cbebbca17cbd54e",
      "785d71de423914c15115",
      "4bdca41ee208c5434efd",
      "d900d6e7c8fe077174a8",
      "b3ff9359d748ad08c739",
      "0f474ab0c047e827075c",
      "77ec71177a8469dc1ab2"
    ],
    "ARM": [
      "c1554785a5116e5a9361",
      "15be5896c4767c4489e9",
      "f4ff2bf78e5691e71ce3",
      "4b2173c0491f9cb83282"
    ],
    "AVGO": [
      "c1554785a5116e5a9361",
      "374522afd04ec24a8ba8",
      "eb3db0164d18b75d222b",
      "b92dbb1712ca4bf77679",
      "a22a6b05f70ab7575c4d",
      "d3dbeb9c32bb9781ca0e",
      "92cc9183f6da62bd17c1",
      "d900d6e7c8fe077174a8",
      "bcc4dddf425f6e73af21"
    ],
    "MRVL": [
      "c1554785a5116e5a9361",
      "9b78bc7ef8cda0542cc7",
      "8b8f503a2edc0b5c2307",
      "d9620571752bcaea7b4a",
      "bc8770b0ba762c6a4e67",
      "459837c08bcb13db09d8",
      "32b0628716757bfe19dc",
      "0f626960cc082b3071c0",
      "30593db37e270f449df8",
      "c78fd96bd9be8844a542",
      "35c4f504cd055362bdc9",
      "ecdae48a3b2c5a1535b1",
      "b3ff9359d748ad08c739",
      "0f474ab0c047e827075c"
    ],
    "QCOM": [
      "c1554785a5116e5a9361",
      "6da0a74872cbe8afc023",
      "0067179f18aa9b3e53e6",
      "cf8ac5b9002ca875f257"
    ],
    "AMD": [
      "52e466a92244f28b57d9",
      "374522afd04ec24a8ba8",
      "cece9c24068749dabb71",
      "f8676083a56f9f37ed0c",
      "489be6a428f0c1067b0d",
      "a83306690936e4d29696",
      "4a4c9d37851ed622660a",
      "54bc78d0caff2008daed",
      "bc8770b0ba762c6a4e67",
      "ac54b0f761a7b54dc956",
      "1bdd2a824366e2ca81b5",
      "f0e757d93a8b62b65fcc",
      "9ff0834a609e6780ad2d",
      "ea99c044a8d3f91c1f97",
      "6a797c21ef2710aa93f6",
      "a22a6b05f70ab7575c4d",
      "61eee56eb71eb339ee79",
      "f9fcf03006971f660e5a",
      "35c4f504cd055362bdc9",
      "809745206fddc840e7d3",
      "d3dbeb9c32bb9781ca0e",
      "92cc9183f6da62bd17c1",
      "d900d6e7c8fe077174a8"
    ],
    "MU": [
      "52e466a92244f28b57d9",
      "cece9c24068749dabb71",
      "2a30d86c588824563806",
      "f8676083a56f9f37ed0c",
      "db0a48ac57f2be37df24",
      "57148dde4a5474a6fb0b",
      "2431df6cb426bee2411e",
      "a83306690936e4d29696",
      "c66d39bc34deafd78cbd",
      "4a4c9d37851ed622660a",
      "54bc78d0caff2008daed",
      "bc8770b0ba762c6a4e67",
      "ac54b0f761a7b54dc956",
      "96d91aff5339d7222cf9",
      "9ff0834a609e6780ad2d",
      "10f2a78efd9a10390fa1",
      "eec24e9cc72d188c3709",
      "6a797c21ef2710aa93f6",
      "a22a6b05f70ab7575c4d",
      "35c4f504cd055362bdc9",
      "43802957e7bdb8a7c3be",
      "d44d777155ce90851ee8",
      "87dbf27ebe76a482bc26",
      "f9e1417b1ef085b33c12",
      "d900d6e7c8fe077174a8"
    ],
    "NVDA": [
      "52e466a92244f28b57d9",
      "374522afd04ec24a8ba8",
      "cece9c24068749dabb71",
      "f8676083a56f9f37ed0c",
      "489be6a428f0c1067b0d",
      "cf600de94f000233a5af",
      "b412df5c436ce2178df8",
      "9ed0edfbe42b9d861d20",
      "201321795d2b79494035",
      "a83306690936e4d29696",
      "213525f4a0f1e6aa20c3",
      "4a4c9d37851ed622660a",
      "54bc78d0caff2008daed",
      "bc8770b0ba762c6a4e67",
      "ac54b0f761a7b54dc956",
      "1bdd2a824366e2ca81b5",
      "a245bc35c06ade4b5283",
      "459837c08bcb13db09d8",
      "9ff0834a609e6780ad2d",
      "65733c002b5c99b4d4e8",
      "ea99c044a8d3f91c1f97",
      "6a797c21ef2710aa93f6",
      "a22a6b05f70ab7575c4d",
      "25d2cdf1810981566837",
      "35c4f504cd055362bdc9",
      "6d4fe4278a9511698fcc",
      "e7ba2828bf2e8fa1e841",
      "f9e1417b1ef085b33c12",
      "b3ff9359d748ad08c739",
      "e5aff2538ff41db63ac2"
    ],
    "ORCL": [
      "52e466a92244f28b57d9",
      "cece9c24068749dabb71",
      "f8676083a56f9f37ed0c",
      "23933066ecce10352c3e",
      "2b0b6acc725a494df875",
      "b567c52faf3df2135f2c",
      "a83306690936e4d29696",
      "4a4c9d37851ed622660a",
      "54bc78d0caff2008daed",
      "bc8770b0ba762c6a4e67",
      "ac54b0f761a7b54dc956",
      "63b676d5a2d7271c6bcb",
      "9ff0834a609e6780ad2d",
      "ea99c044a8d3f91c1f97",
      "6a797c21ef2710aa93f6",
      "a22a6b05f70ab7575c4d",
      "35c4f504cd055362bdc9",
      "3b2e786880816eb17290",
      "0f0e208e16ecc160feb8",
      "b3ff9359d748ad08c739"
    ],
    "LITE": [
      "9b78bc7ef8cda0542cc7",
      "8b8f503a2edc0b5c2307",
      "459837c08bcb13db09d8",
      "0f626960cc082b3071c0",
      "30593db37e270f449df8",
      "c78fd96bd9be8844a542",
      "ecdae48a3b2c5a1535b1",
      "0f474ab0c047e827075c"
    ],
    "META": [
      "374522afd04ec24a8ba8",
      "692a57e1429cfe0a1bcc",
      "973350f8f49b091890c8",
      "41501b25c7815b1a77a3",
      "59611b92ccb893f134eb",
      "9ed0edfbe42b9d861d20",
      "54bc78d0caff2008daed",
      "f0e757d93a8b62b65fcc",
      "1e1e2c12e8597cccb9d7",
      "ec006b11da21afd8deb6",
      "7c6e363f579c05772147",
      "0a0ded9055b6898bb1e9"
    ],
    "SNDK": [
      "b5e0299d237fd9b6345b",
      "4b15c9c4904290690269",
      "2a30d86c588824563806",
      "6899744b4216d2f79d78",
      "b10856bb8836abe07ae4",
      "b92dbb1712ca4bf77679",
      "9ed0edfbe42b9d861d20",
      "201321795d2b79494035",
      "5c5ebacde7fe36a1031f",
      "ae25a5f4e8d88480b225",
      "e1a534c3ce2a065b5b31",
      "4da78d36c3cfae88a5da",
      "20f389fc071773adc6a1",
      "2b796d6d81f8f12e86d1",
      "b1f2d4abfbb724b03bfa",
      "8fda6a350c8302885964",
      "6cae51544cce0867f9a8",
      "01e41377895707eeaaa6",
      "a5ed395e8501790300c5",
      "f59dfad994b5b3553f58",
      "a91e99e40df97c5aeb8c",
      "0be03a2ee8ed1f97579a",
      "19df85155ce84241d883",
      "96d91aff5339d7222cf9",
      "f9fc115cfa835ccc52ee",
      "ae3f0cc3f6cdf24850cd",
      "b3ff9359d748ad08c739",
      "77ec71177a8469dc1ab2",
      "40f0252e9ff195ef8e00"
    ],
    "CRM": [
      "cece9c24068749dabb71",
      "b71b395d75d49a02686b",
      "26bf689c1ded4db2dc0b",
      "4f2a37f9c83cd09eb354",
      "21f3164ac736b1aa1138"
    ],
    "AMAT": [
      "adef3d9a7b6fede827dc",
      "c6065afd266a8fb9aa86",
      "c83570ed4b6375b228d3",
      "6e7c601025b1c2579a95"
    ],
    "MSFT": [
      "9f8e57729fa2a8273ba1",
      "5a62b510870d5434ba51",
      "2b0b6acc725a494df875",
      "9ed0edfbe42b9d861d20",
      "ae25a5f4e8d88480b225",
      "62c4edb96a64581274e6",
      "5950e71c0535c16ea5a1",
      "ac54b0f761a7b54dc956",
      "d438a18b8c42dfba9e11",
      "da77471deb30caa91367",
      "9ff0834a609e6780ad2d",
      "fba30ee945ae51038790",
      "45e1fc6758e84f013fec",
      "c8705840e5ad96607c7c",
      "ec006b11da21afd8deb6",
      "d3dbeb9c32bb9781ca0e",
      "92cc9183f6da62bd17c1",
      "c076aeefe13886897546",
      "4bdca41ee208c5434efd",
      "d900d6e7c8fe077174a8",
      "b3ff9359d748ad08c739"
    ],
    "GOOGL": [
      "abdc4112dd46b0e5d2de",
      "1c5924b18efbbc349e2f",
      "41501b25c7815b1a77a3",
      "b92dbb1712ca4bf77679",
      "ab8c3c94a2df6bbb052f",
      "9ed0edfbe42b9d861d20",
      "ae25a5f4e8d88480b225",
      "0d2069a724b6d64f327c",
      "9ff7765eda9bb1cddcf5",
      "a2d082cba34bf9e7de8f",
      "12691fb2038f46a0a6a4",
      "5950e71c0535c16ea5a1",
      "10e5d4b58ada0f99e710",
      "f620421f812c7c9b44de",
      "0be03a2ee8ed1f97579a",
      "48bd41e3359f17b19251",
      "7f5ac3d77ac9914e7df0",
      "d438a18b8c42dfba9e11",
      "fba30ee945ae51038790",
      "45e1fc6758e84f013fec",
      "1e1e2c12e8597cccb9d7",
      "2d73959fba5564e39cb4",
      "fc52b44b987d606e561f",
      "0c537d68f04178613a0d",
      "ec006b11da21afd8deb6",
      "ecdae48a3b2c5a1535b1",
      "7c6e363f579c05772147",
      "d3dbeb9c32bb9781ca0e",
      "92cc9183f6da62bd17c1",
      "eb5f7fa4219150a2fc56",
      "c076aeefe13886897546",
      "f9e1417b1ef085b33c12",
      "d900d6e7c8fe077174a8",
      "b3ff9359d748ad08c739"
    ],
    "STX": [
      "2a30d86c588824563806",
      "f8b085c519e71046caf3",
      "f2be2f84577ca706e315",
      "982b3adc19ff7e98aca9",
      "c494e2a490b11e554568",
      "2da4d258bbfe3803e8ca",
      "a81ad43d4d61b92fed70",
      "12d8fd122b4e433e8004",
      "0f72fc9463f58bc0ee7d"
    ],
    "WDC": [
      "2a30d86c588824563806",
      "c494e2a490b11e554568",
      "96d91aff5339d7222cf9",
      "2da4d258bbfe3803e8ca",
      "bbd80b7293a57626cb32",
      "c9ed2bd2336357ea7a19"
    ],
    "EME": [
      "f8676083a56f9f37ed0c",
      "ff7cefcb3aa5f6b4c8c2",
      "9af069dc1d1a922f4f01",
      "4b65f7429120714a8b70",
      "e6480379905a58d7d580",
      "ee0e813bed5e4fc47f29",
      "6557192c6cccf8b3fb20",
      "3f37e54dd1b821cc033c",
      "3d1d20d012253cbf71a3",
      "9bdad24f0505ecd895e3",
      "dd092fb16e3ba8acd75a",
      "a11da53b86dedafcf3d0",
      "ef44075dbb19cfe3e422"
    ],
    "VRT": [
      "1ce501ef361568b6d97b",
      "950184dfb04904bec762",
      "18785cb1ef89524d70d3",
      "8e0160d311886b9a1d7b",
      "386f55b8608d259c1817"
    ],
    "GEV": [
      "73821e30889c667457c4",
      "b10856bb8836abe07ae4",
      "b451adfc27e3c8be1e84",
      "f11a5b6e369a67b58c74",
      "ede11580675227a399fb",
      "e75a3682912ae40dbdb0",
      "9393a7dc99313c17236d",
      "45938e67da4628cceae4",
      "5380a3d214dc469a574e"
    ],
    "HUBB": [
      "7dd16d041d043dccc441",
      "21d1acbfad10bfdc252e"
    ],
    "COHR": [
      "ded29a8f82a4a8690b06",
      "c78fd96bd9be8844a542",
      "0f474ab0c047e827075c"
    ],
    "TSLA": [
      "b92dbb1712ca4bf77679",
      "9ed0edfbe42b9d861d20",
      "9d3ed1f8416201f6c599",
      "ae25a5f4e8d88480b225",
      "20f389fc071773adc6a1",
      "10f2a78efd9a10390fa1",
      "38f09bf253ddf69d3305",
      "c3b100d6f95d3f03d7b2",
      "70ee56ae183c734bb9c3"
    ],
    "PWR": [
      "875f4e29481ba34fd27e",
      "2fdaadc92d5f4c534caf",
      "6e30ee88d50bcb40b8b0",
      "ad5b12640d8c708e4f53",
      "64028edb2e8f9a055c0f",
      "b22ff00c5c7678a3bf93",
      "b7a8361845ae86ad35fe",
      "f085c4ab52be37a332a3",
      "faf28dd807f768d61790"
    ],
    "KLAC": [
      "caede68a89cec9ffef29",
      "098d52fb88ff2ae97736",
      "9c54e588a5248a44234b",
      "8401eb83024d888702e2",
      "3eee1dc5842b87a130fd",
      "fefcd25503d222453ce3",
      "228b28e98442c92899f7",
      "5313eae11bcdd4d17b00",
      "ed32746221d762ffdcb7",
      "455df564f732d84825d5",
      "6e7c601025b1c2579a95"
    ],
    "TSM": [
      "c6065afd266a8fb9aa86",
      "6a797c21ef2710aa93f6",
      "e5aff2538ff41db63ac2"
    ],
    "PLTR": [
      "cda726d7987cbec9c952",
      "8fda6a350c8302885964",
      "7c7cb82632a1661ff381",
      "01e41377895707eeaaa6",
      "3c89b4b0d71bcbb13716",
      "0437ebd4cfa26f1a8e0b",
      "a685afac7a3b28b5ecd7",
      "eb5f7fa4219150a2fc56",
      "dc4026432bda42a8ae6b"
    ],
    "ASML": [
      "213525f4a0f1e6aa20c3"
    ],
    "CEG": [
      "7f5ac3d77ac9914e7df0"
    ],
    "LRCX": [
      "679208ce54c5d7f4d945",
      "7977a0d3f358344b3c52",
      "6e7c601025b1c2579a95"
    ],
    "MOD": [
      "5b9f23d0812481d863c9"
    ],
    "ETN": [
      "641a0d8ab70aaed3d79b",
      "785d71de423914c15115"
    ],
    "ANET": [
      "d4c33cbebbca17cbd54e"
    ],
    "VST": [
      "89a4c2dfcb93410d5bba"
    ]
  }
};
