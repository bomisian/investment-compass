// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792580377.0807168,
  "events": [
    {
      "id": "a4e0cc48154b70841ef7",
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
      "headline": "GE Vernova's $176 Billion Backlog, Explained",
      "headlineKo": "GE Vernova의 1,760억 달러 백로그 설명",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d811057d36492f9a6f387d3789c817f50d40e11c1dd75faa47cfb9ff4a97e952",
        "publishedAt": 1792573800,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $116 billion, $176 billion, 111%, $200 billion, $303 billion, $890.33, $18.11, 1.99%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GEV의 사업과 관련된 'GE Vernova's $176 Billion Backlog, Explained' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "2677d35bbb9579dbb124",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Micron and Nvidia Are the 2 Biggest Drivers of S&P 500 Earnings Growth. Are Their Stocks Buys?",
      "headlineKo": "마이크론과 엔비디아는 S&P 500 수익 성장의 두 가지 가장 큰 원동력입니다. 그들의 주식은 매수되나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf8968c993b182d59962150d7520476827cd6985884ee35f74d3751a08f46175",
        "publishedAt": 1792569841,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론과 엔비디아는 S&P 500 수익 성장의 두 가지 가장 큰 원동력입니다.",
        "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Join The Motley Fool Two 칩 메이커는 시장의 이익 성장에서 이례적인 비중을 차지하고 있습니다.",
        "16 Earnings Insight 보고서, FactSet은 Micron Technology (MU -0.98%) 와 Nvidia (NVDA -0.29%) 를 2026년 3분기 S&P 500 (^ GSPC +0.28%) 의 전년 대비 수익 성장에 가장 큰 기여를 한 두 기업으로 상장했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 29%, 20%, $217 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 29%, 20%, $217 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8e8cb0a5b215c423b4a1",
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
      "headline": "CRM Stock In Focus: Jefferies Says Salesforce’s Braze Deal Could Spark More Software Takeovers",
      "headlineKo": "CRM 재고 집중: Jefferies, Salesforce의 브레이즈 딜이 더 많은 소프트웨어 인수를 촉발할 수 있다고 말함",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db7b198b02d8c1696422328ab488f30c90e2b9a287036642b04b92f1fa21bbd7",
        "publishedAt": 1792567275,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CRM Stock In Focus: Jefferies Says Salesforce’s Braze Deal Could Spark More Software Takeovers",
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
      "id": "87b76b1839ee6a097353",
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
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Revolut Outage Hits Crypto Access as Google Cloud Failure Disrupts Banking Services",
      "headlineKo": "Revolut 중단은 Google 클라우드 장애로 인해 뱅킹 서비스가 중단됨에 따라 암호화 액세스를 차단합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6a2b5d73c3249443d8b5dfbb272490faa322484523f1eef9e609c0e58a272c1",
        "publishedAt": 1792566859,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Revolut 중단으로 인해 Google 클라우드 장애 후 암호화 액세스 중단 BTC $ 83,398.85 2.34% ETH $ 2,459.20 3.10% SOL $ 106.83 2.81% PEPE $ 0.0000045 9.48% SHIB $ 0.0000051 4.37% DOGE $ 0.082 3.92% XRP $ 1.36 5.08% ETH Gas (gwei) 0.04 BTC $ 83,398.85 2.3",
        "스위스의 비트코인 ETF와 카메룬의 폴 비야 (Paul Biya) 도 썼습니다: 재정적 피난처 논쟁 구글 제미니 (Google Gemini) AI는 체인링크 (Chainlink) 를 위한 거대한 실행을 예측합니다 (링크) 클로드 (Claude) AI는 2027년까지 비트코인을 위한 거대한 움직임을 예측합니다 GTA 6 선공개 (Early Access) 를 제공하는 웹사이트 fo",
        "그들의 전문 지식은 다음을 위한 포괄적이고 정확하며 통찰력 있는 콘텐츠를 보장합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $83,398.85, 2.34%, $2,459.20 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $83,398.85, 2.34%, $2,459.20 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3e40b595602b29329fe2",
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
      "headline": "Will Tesla’s New Flying Roadster Send the Stock Flying?",
      "headlineKo": "테슬라의 새로운 플라잉 로드스터가 주식을 날려보낼까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b35ab90750fd2e701c66b1744d7b8005b8fc2f342b5654ac7d453f4ebd393bd8",
        "publishedAt": 1792565401,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "테슬라의 새로운 플라잉 로드스터가 주식을 날려보낼까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Motley Fool Tesla (TSLA +1.53%) 에 가입하는 것은 그렇게 좋은 해가 아닙니다.",
        "이 회사의 주식은 현재까지 16% 감소했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 16%, $200,000., $50,000, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 16%, $200,000., $50,000, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "36da252ea80c85f9f487",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What To Expect From Western Digital’s (WDC) Q3 Earnings",
      "headlineKo": "웨스턴 디지털 (WDC) 의 3분기 실적에서 기대할 수 있는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=06398eab07ae674b26b7d6e27751b0748819b734a06a9139181e00b75168a911",
        "publishedAt": 1792565199,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What To Expect From Western Digital’s (WDC) Q3 Earnings",
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
      "id": "bedbcd845618a1bbb666",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "AMD",
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
      "headline": "Cathie Wood's Ark Invest Grew Its Portfolio to $15.4 Billion Last Quarter, With Tesla, AMD, and a New SpaceX Stake Making Up About 18% of ARKK Assets. Is Her Concentrated Bet Paying Off?",
      "headlineKo": "Cathie Wood의 Ark Invest는 지난 분기에 Tesla, AMD 및 ARKK 자산의 약 18% 를 차지하는 새로운 SpaceX 지분으로 포트폴리오를 $ 154억으로 늘렸습니다. 그녀의 집중된 베팅이 성과를 거두고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc2a190a66617284b7b837954a09524416c000a2e85c2af8031adb67f4ca0bee",
        "publishedAt": 1792563600,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cathie Wood의 Ark Invest는 지난 분기에 Tesla, AMD 및 ARKK 자산의 약 18% 를 차지하는 새로운 SpaceX 지분으로 포트폴리오를 $ 154억으로 늘렸습니다.",
        "그녀의 집중된 베팅이 성과를 거두고 있습니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ 스톡 어드바이저 + --- % Motley Fool에 가입하기 캐시 우드는 비트코인에 대한 극도의 강세와 파괴적인 미래 기술로 유명한 미국에서 가장 주목받는 기술 투자자 중 한 명입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $15.4 Billion, 18%, $15.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $15.4 Billion, 18%, $15.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6113f9ec74b13f27089e",
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
      "headline": "Elon Musk says talks ongoing to merge Tesla and SpaceX",
      "headlineKo": "일론 머스크 (Elon Musk) 는 테슬라와 스페이스X를 합병하기 위한 협상이 진행 중이라고",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=071f827b9d9d41ddfc9176795698299e6afe8d3d72e988c49df26a6cfe3eae44",
        "publishedAt": 1792561577,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk가 Tesla와 SpaceX를 병합하기 위해 대화가 진행 중이라고 말합니다 | The Independent 등록해 주셔서 감사합니다 페이지를 새로 고침하거나 자동으로 로그인하려면 사이트의 다른 페이지로 이동하십시오. 로그인하려면 브라우저를 새로 고침하십시오 스키",
        "지금 독립 멤버십을 시작하세요.",
        "일론 머스크 (Elon Musk) 는 테슬라와 스페이스X가 합병을 고려하고 있으며, 2조 달러 규모의 회사를 하나로 묶는 제안을 \"좋은 아이디어\" 라고 말합니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $3.5 trillion, $4.4 billion, $7.56 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $3.5 trillion, $4.4 billion, $7.56 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5a19bf5e8a74613f0861",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "BE",
      "relatedTickers": [
        "BE"
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
      "headline": "What To Expect From Bloom Energy’s (BE) Q3 Earnings",
      "headlineKo": "Bloom Energy(BE)의 3분기 실적에서 기대할 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=723999300349171dface61caa412ec4e04b42e1557991378fa6671b7d3feff7c",
        "publishedAt": 1792560879,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What To Expect From Bloom Energy’s (BE) Q3 Earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "BE에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "666dfabc3ad9d505216f",
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
      "headline": "Vultr and AMD Expand Global Collaboration with New AI Infrastructure in India",
      "headlineKo": "Vultr와 AMD, 인도의 새로운 AI 인프라로 글로벌 협업 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9991b0e9c9d311ef39fe1fd7f53f2c1cd6af535cbf5ff0343333d7699f6ce7fe",
        "publishedAt": 1792560600,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vultr and AMD Expand Global Collaboration with New AI Infrastructure in India",
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
      "id": "f9a91f42b666feff9127",
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
      "headline": "3 AI Infrastructure Stocks Investors Are Watching After Elon Musk Floated A SpaceX Tesla Tie Up",
      "headlineKo": "Elon Musk가 SpaceX Tesla Tie Up을 띄운 후 투자자들이 지켜보고 있는 3가지 AI 인프라 주식",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8a765271a1c5d5f552cec6aca6fc0eb483297d02de9aa62411f88ccb6acab546",
        "publishedAt": 1792559746,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk가 SpaceX Tesla Tie Up을 띄운 후 투자자들이 지켜보고 있는 3가지 AI 인프라 주식"
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
      "id": "1a13806de3f188b5408c",
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
      "headline": "Will Federal Cloud Partnership Change Palantir Stock Narrative",
      "headlineKo": "Federal Cloud Partnership이 Palantir Stock Narrative를 변경합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6609ad07a119dbe75c27d4276330b3cfc0b4c33d63c0446a3b547d95767df9e0",
        "publishedAt": 1792556701,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Will Federal Cloud Partnership Change Palantir Stock Narrative",
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
      "id": "157e5f43bc05b5198ad4",
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
      "headline": "Ahead Of Schedule: Meta's Early Earnings Shift Driven By Muse AI Enthusiasm",
      "headlineKo": "일정 앞당기기: Muse AI 열정이 이끄는 Meta의 조기 수익 전환",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d99e978a958d43d3b5e0f3939271d88cde072ac381ec4c6a199854fe7c992064",
        "publishedAt": 1792556400,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Ahead Of Schedule: Meta's Early Earnings Shift Driven By Muse AI Enthusiasm",
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
      "id": "68d176b235ebbe3b2705",
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
      "headline": "Palantir Technologies (PLTR) Signs Knox Partnership, Is The Stock Fully Priced?",
      "headlineKo": "Palantir Technologies (PLTR), Knox 파트너십 체결, 주식 가격이 완전히 책정되나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f4d49c9f26a81da3c76ad11024ad47d7fc60da283b010ce88561eac2f0643e0",
        "publishedAt": 1792552818,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Technologies (PLTR) Signs Knox Partnership, Is The Stock Fully Priced?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "e894c888b199e01d972f",
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
      "headline": "Arista Networks vs. Axon Enterprise: Which Tech Stock Is a Better Buy in 2026?",
      "headlineKo": "Arista Networks vs. Axon Enterprise: 2026년에는 어떤 기술주를 구매하는 것이 더 나을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=317db81f856e0553821b07f0de02c5a5a0de38ff197d9689967b873c6b76066d",
        "publishedAt": 1792552561,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Axon Enterprise: 2026년에는 어떤 기술 재고가 더 나은 구매입니까?",
        "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool As cloud computing and public safety technology evolve, investors are weighing high-growth infrastructure against defensive softwar",
        "Choosing between Arista Networks ( ANET -0.96% ) and Axon Enterprise ( AXON +2.49% ) requires balancing different risk profiles."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.96%, 2.49%, $181.19 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.96%, 2.49%, $181.19 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d3fb0f80f6f35c98c5fd",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Bloom Energy vs. Oracle: Which AI Infrastructure Stock Is the Better Buy After the Jupiter Setback?",
      "headlineKo": "블룸 에너지 vs. 오라클: 목성 후퇴 후 더 나은 구매는 어떤 AI 인프라 스톡입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8f62ce5dfdcfdaf5f6d68906fc931df81caa8d9f83855c3008c1c2df6ff5d20e",
        "publishedAt": 1792550100,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ORACLE: 목성 후퇴 후 더 나은 구매는 어떤 AI 인프라 스톡입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % 가입 Motley Fool Oracle (ORCL +1.20%) 및 Bloom Energy (BE -1.58%) 는 모두 BEI의 대규모 데이터 센터인 Project Jupiter의 필수적인 부분입니다.",
        "이 프로젝트는 계획대로 진행되지 않아 오라클은 목성 프로젝트가 완료되지 않은 경우 자신을 보호하기 위해 \"불가항력\" 을 인용해야 합니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 140%, $6 billion, $222.65 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 140%, $6 billion, $222.65 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "616ecbf23622b713caf5",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Did Salesforce Stock Investors Miss Before The Run?",
      "headlineKo": "Salesforce 주식 투자자는 실행 전에 무엇을 놓쳤습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=31df9a65c80a88d10eddfcccc30117eea1111c3b5318887fd25cf13c4b7dc3fe",
        "publishedAt": 1792547105,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce 주식 투자자들은 달리기 전에 무엇을 놓쳤습니까?",
        "| 트레피스 세일즈포스 주식 투자자들은 달리기 전에 무엇을 놓쳤나요?",
        "2026년 10월 20일 · Trefis Team 제공 CRM YTD -7.9% 스파이 YTD +13.4% QQQ YTD +17.1% CRM 분석 → Salesforce (CRM) 주식은 2026년 7월 21일부터 10월 19일 사이에 S&P 500의 경우 2.7% 대비 42.8% 의 수익률을 기록했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $4 billion, 120%, $29.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4 billion, 120%, $29.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bf3795e4af99a8a39291",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SPCX Stock Jumps Overnight: Musk Teases $1 Trillion Revenue By 2028 — Analyst Sees 95% Tesla Merger Odds In 2 Years",
      "headlineKo": "SPCX 주가 밤새 상승: 머스크, 2028년까지 1조 달러 매출 예상 — 애널리스트는 2년 안에 Tesla 합병 확률이 95%에 이를 것으로 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a4ca33065927c828d902e47a564ebca11010bd6082f47a54ded46055072b956",
        "publishedAt": 1792546637,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SPCX 주가 밤새 상승: 머스크, 2028년까지 1조 달러 수익 예상 — 애널리스트는 2년 안에 Tesla 합병 확률이 95%일 것으로 예상합니다. AI 에이전트 동향 뉴스 수익 전체 DIA 1.04% SPY 0.65% QQQ 0.81% 추세 SPCX 9.04% SMCI 18.47% NFLX 6.53% GE 3.28% CELH 0",
        "SPCX 주가 밤새 상승: 머스크, 2028년까지 1조 달러 수익 예상 — 애널리스트는 2년 안에 Tesla 합병 확률이 95%에 이를 것으로 예상 Cathie Wood의 ARK Investment Management 분석가 Brett Winton은 2030년 이후를 내다보는 Tesla 주주들이 합병을 선호해야 한다고 말했습니다.",
        "SpaceX CEO Elon Musk가 텍사스 남부에 있는 회사의 발사 시설에서 스타쉽 우주선과 슈퍼 헤비 로켓의 개발에 대한 업데이트를 제공하면서 군중에게 인사하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1 Trillion, 95%, 1.04% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1 Trillion, 95%, 1.04% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7f2de8b7c6243dbd7771",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "BE",
      "relatedTickers": [
        "BE",
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
      "headline": "BE Stock Leads Energy Rally After SpaceX CEO Elon Musk Says AI’s Real Constraint Is Power And Cooling, Not Chips",
      "headlineKo": "SpaceX CEO Elon Musk가 AI의 진정한 제약은 칩이 아니라 전력과 냉각이라고 말한 후 BE Stock이 에너지 랠리를 주도합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2dae608d19f7468857e723c7cb48b098105a7e402e363e493d2330a93b099f4",
        "publishedAt": 1792545801,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Are BE, OKLO, SMR, XE, NNE Stocks Rising Overnight?",
        "AI Agent Trending News Earnings All DIA 0.02% SPY 0.14% QQQ 0.38% Trending SPCX 8.86% NFLX 6.20% SMCI 12.10% NBIS 2.76% DIA 0.02% NVDA 1.40% QQQ 0.38% FLUT 0.15% VTI 0.62% SLS 0.25% Home News Markets Equity BE Stock Leads Energy Rally After",
        "BE Stock Leads Energy Rally After SpaceX CEO Elon Musk Says AI’s Real Constraint Is Power And Cooling, Not Chips Musk said power, cooling, and electrical equipment infrastructure are “somewhat of a limiting factor” for the AI buildout."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.02%, 0.14%, 0.38% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "BE에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.02%, 0.14%, 0.38% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "33fff44de311f6b51037",
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
      "headline": "Could SanDisk Be The Value Stock For Your Portfolio?",
      "headlineKo": "SanDisk가 귀하의 포트폴리오에 대한 가치주가 될 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b344e6deb60f52c7bb332c9d58eb61f3bb551052ca53cad8b2c92389b3739420",
        "publishedAt": 1792545014,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SanDisk가 포트폴리오의 가치 재고가 될 수 있습니까?",
        "| Trefis는 SanDisk가 포트폴리오의 가치 재고가 될 수 있습니까?",
        "2026년 10월 20일 · 작성자: Trefis Team SNDK YTD +475.2% SPY YTD +13.4% QQQ YTD +17.1% 2026년 10월 19일 기준으로 SNDK → SanDisk (SNDK) 주식 거래를 17.6배 수익으로 분석한 결과, S&P 500 기업 중간값은 22.7배였습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 851%, 25.6%, $11.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 851%, 25.6%, $11.7 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ec2221058850042aeea5",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Calls Force Majeure Already?",
      "headlineKo": "오라클은 이미 불가항력을 요구하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb66098ebad996fe22bf10cd8684f2aaec16eb653e112e5ca3b2d58f83acdf85",
        "publishedAt": 1792543894,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클, 불가항력 호출?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Motley Fool에 가입하기 Motley Fool Hidden Gems Investing 에피소드에서 Motley Fool의 기여자인 Tyler Crowe, Lou Whiteman, Jon Quast는 다음과 같이 논의합니다. O",
        "OpenAI에 대한 약속이 그 이유입니까?"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
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
      "id": "9d0bd01c346654a1da91",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "SPY",
      "relatedTickers": [
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
      "headline": "S&P 500, Dow Gain As Earnings Season Sets In, While SpaceX Aids Nasdaq After-Hours — SPCX, BA, MMM, NFLX, QCOM In Focus",
      "headlineKo": "S&P 500, Dow는 수익 시즌이 시작됨에 따라 상승하고 SpaceX는 Nasdaq 영업 시간 외 지원 — SPCX, BA, MMM, NFLX, QCOM 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=140e19bf8785e4c9553980a5aa5e4962e59391604d10894c3f0b722ae84edb24",
        "publishedAt": 1792540077,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, 다우 이익 수익 시즌이 시작되지만 SpaceX는 나스닥 애프터 아워를 지원합니다 — SPCX, BA, MMM, NFLX, QCOM In Focus AI 에이전트 동향 뉴스 수입 모든 DIA 0.09% 스파이 0.13% QQQ 0.37% 동향 SPCX 9.43% NFLX 6.32% SMCI 12.84% DIA 0.09% N",
        "S&P 500, 다우 수익 시즌이 시작되고 SpaceX Aids Nasdaq After-Hours — SPCX, BA, MMM, NFLX, QCOM In Focus SpaceX는 인공 지능 사업의 큰 성장으로 인한 견실한 수익을 보고했습니다.",
        "2026년 5월 6일 뉴욕증권거래소 (NYSE) 에서 다우지수가 잠깐 50,000포인트를 돌파한 후 상인들은 뉴욕시에서 600포인트 이상을 마감했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.09%, 0.13%, 0.37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.09%, 0.13%, 0.37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "aa189df1adcd5f080ada",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "AMD",
        "ASML",
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
      "headline": "ASML Just Announced Fantastic News for Investors in AI Stocks",
      "headlineKo": "ASML, AI 주식 투자자를 위한 환상적인 소식 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=65ac30a4f1d2621054a16ce8d522fcaa91da121242ae9e192baabd062408f419",
        "publishedAt": 1792535402,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 0.99%, $1,630.84, $16.28, $628.56, $1,613.54, $1,654.21, $946.11, $1,999.96.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 ASML의 사업과 관련된 'ASML Just Announced Fantastic News for Investors in AI Stocks' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "549f47214d7241564468",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AAPL",
        "AMZN",
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
      "headline": "Amazon vs Alphabet: Which \"Magnificent Seven\" Stock Is the Better Buy Right Now?",
      "headlineKo": "아마존 vs 알파벳: 지금 당장 매수하는 것이 더 나은 \"매그니피센트 세븐\" 주식은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d48ac5d0639424d1a7b3caec6ecf5b2b7ddf99ab2287fbc0de0ea40172572acb",
        "publishedAt": 1792534502,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존 vs 알파벳: 지금 구매하는 것이 더 좋은 \"매그니피센트 세븐\" 주식은 무엇입니까?",
        "| Motley Fool 접근성 도움말 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Motley Fool Amazon 가입 (AMZN +0.07%) 및 알파벳 가입 (GOOG -1.10%) (GOOGL -1.14%) 은 세계에서 가장 가치 있는 두 회사입니다.",
        "Alphabet은 YouTube와 Google을 중심으로 탄탄한 비즈니스를 운영하고 있으며, 그 가치는 약 4조 1천억 $ 이며, Apple과 Nvidia는 더 높은 시가 총액을 요구하는 유일한 다른 \"Magnificent Seven\" 주식입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $4.1 trillion, $2.8 trillion, $776 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4.1 trillion, $2.8 trillion, $776 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f96c0e625871e943312c",
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
      "headline": "Taiwan Semiconductor Manufacturing (TSM) Draws Fund Managers Leaving Firms To Invest Personally",
      "headlineKo": "Taiwan Semiconductor Manufacturing (TSM)은 개인적으로 투자하기 위해 회사를 떠나는 펀드 매니저를 모집합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=efacde59aa4d6ffc0d005195757b9803f041edf06b2c7e12212f161ac59533ed",
        "publishedAt": 1792530584,
        "collectedAt": 1792575880.186299
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
        "이 기사는 TSM의 사업과 관련된 'Taiwan Semiconductor Manufacturing (TSM) Draws Fund Managers Leaving Firms To Invest Personally' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0c54e1164988202deca6",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today, Oct. 20: Salesforce Agrees to Acquire Braze for $5.66 Billion: BRZE Stock Soars 52%",
      "headlineKo": "오늘, 10월 20일 주식 시장: Salesforce, Braze를 56억 6천만 달러에 인수하기로 합의: BRZE 주가 52% 급등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99d7cbc62881a063480458d9a2416bbdc7ff90bfde447492ed838de1bca0151a",
        "publishedAt": 1792530582,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "20: Salesforce, 56억 6천만 달러에 Braze 인수에 동의: BRZE 주가 52% 급등 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool BRZE에 합류 - Braze $45.57 +$15.53 (+51.70%) NASDAQ · 기준",
        "비상장, 비공개 또는 이중 종류의 비거래 주식은 포함되지 않습니다.",
        "$34.1B 일일 범위 $45.26 - $45.61 52주 범위 $15.26 - $45.61 거래량 64.6M 평균 거래량 2.5M 총 마진 65.98% 고객 참여 및 맞춤형 마케팅 소프트웨어 제공업체인 Braze( BRZE +51.70% )는 51.70% 상승한 $45.57로 마감했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $3.41, $45.26, $45.61 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $3.41, $45.26, $45.61 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1bff98d6fb5526b97b2f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "GOOGL",
        "META",
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
      "headline": "Meta vs. Alphabet: Meta Is Better Built for AGI",
      "headlineKo": "메타 대 알파벳: 메타는 AGI에 더 적합합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1c4aa67a58085ff0a6e9fd3d57419722e104fba0ba45ff92d4680b35c0a366e",
        "publishedAt": 1792528981,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳: AGI를 위해 더 나은 메타 구축 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool AI 비서가 이제 Google 검색 결과 상단에서 쇼핑객의 질문에 바로 답변합니다.",
        "Google은 ChatGPT와 같은 경쟁사보다 앞서 사람들이 선호하는 AI 비서가 되기를 원하기 때문에 이를 거기에 두었습니다.",
        "좋은 대답은 자체 광고에 대한 클릭수를 줄일 수 있기 때문에 이는 절충안입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.14%, 1.10%, 1.59% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.14%, 1.10%, 1.59% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "185877cbeb9150390e48",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "GOOGL",
        "MSFT",
        "QCOM",
        "WDC"
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft, Alphabet, Goldman Sachs Join Growing List of Companies Objecting to Tokenized Stocks",
      "headlineKo": "마이크로소프트, 알파벳, 골드만삭스, 토큰화된 주식에 반대하는 기업 목록에 합류",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ff421581c018f3402bb5ad1299329d569d3dd4c647b80838d83c89620729be28",
        "publishedAt": 1792527364,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft, Alphabet, Goldman Sachs, 토큰화 주식에 반대하는 기업의 증가하는 목록에 가입 - 암호 해독 간단히 말해서 Microsoft, Alphabet, Goldman Sachs, Qualcomm, Caterpillar, McDonald's 및 Western Digital은",
        "이를 통해 총 16개의 발행 기관을 확보할 수 있으며, 이는 10월의 9개 발행 기관에서 증가한 수치입니다.",
        "15 눈치 채지 못하지만, 눈치 채지 못하면 이유를 설명할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $83,458, 0.25 %, $83.5 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $83,458, 0.25 %, $83.5 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4370a65d9ac24440b745",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Amazon Stock Costs More Than the Market. I'd Still Buy It for the Next 5 Years.",
      "headlineKo": "아마존 주식은 시장보다 더 비쌉니다. 나는 향후 5년 동안 이 제품을 구입할 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f305e5b89864b4f6220b4b09b6945905a9f9c4a50e0f106a25a1bf726152583d",
        "publishedAt": 1792526821,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존 주식은 시장보다 비쌉니다.",
        "나는 여전히 다음 5 년 동안 그것을 구입할 것입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % 아마존의 Motley Fool 주식 (AMZN +0.07%) 가입은 월요일에 약 5% 뛰어올랐습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $262, 8%, $284.02 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $262, 8%, $284.02 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "35430766304f80f2c01d",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Braze Soars 51% as Salesforce Agrees to $5.66 Billion Buyout to Deliver That “Wow Moment”",
      "headlineKo": "Salesforce가 \"와우 순간\"을 전달하기 위해 56억 6천만 달러 규모의 인수에 동의하면서 Braze는 51% 급등했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74a2e566db82e7429a93ec905ebd47ae7c2718dba4388379c3d623bca3934171",
        "publishedAt": 1792525738,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce가 \"와우 순간\"을 전달하기 위해 56억 6천만 달러의 인수에 동의하면서 Braze가 51% 급등 | TIKR.com General Investing Braze는 Salesforce가 \"와우 순간\"을 전달하기 위해 56억 6천만 달러 규모의 인수에 동의하면서 51% 급증했습니다. Michael Douglass •",
        "Braze는 이제 제안 가격 바로 아래에서 거래되므로 시장에서는 거래가 성사될 것으로 예상하므로 주주들에게는 거의 이익이 되지 않습니다.",
        "Braze 주주와 규제 기관은 여전히 ​​거래를 승인해야 하며 Salesforce의 2028 회계연도까지는 거래가 종료되지 않을 것으로 예상됩니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 51%, $5.66 Billion, $47.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 51%, $5.66 Billion, $47.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "219d5a4cd2fadc264980",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Amazon stockpiles Nvidia AI hardware ahead of power availability -Business Insider",
      "headlineKo": "Amazon, 전력 공급에 앞서 Nvidia AI 하드웨어 비축 -Business Insider",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab574575bc56dcfc0cd06ef844851b998d5564737e945aab4859e7d98b0587f1",
        "publishedAt": 1792525575,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon, 전력 공급에 앞서 Nvidia AI 하드웨어 비축 -Business Insider"
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
      "id": "bf74af7c8b3df8a61500",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Anthropic Is in Talks for Another $45 Billion AI Deal. Nvidia Could Be a Big Winner.",
      "headlineKo": "Anthropic은 또 다른 450억 달러 규모의 AI 거래를 논의 중입니다. Nvidia는 큰 승자가 될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e7614a1c2f40846e8541b05cc5535d834a3170da285d81e21d784000cd103613",
        "publishedAt": 1792525441,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $45 Billion, $90 billion, 85%, 0.11%, $1.5 trillion, $2 trillion, $147.79, $0.17.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'Anthropic Is in Talks for Another $45 Billion AI Deal. Nvidia Could Be a Big Winner.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ef93d00f2d77f65a71d1",
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
      "headline": "Prediction: Micron Could Turn a $5,000 Investment Into This by 2030",
      "headlineKo": "예측: Micron은 2030년까지 5,000달러를 투자할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f55beb7ac83c8600cd50b8e9f565d68e0ed64d4192595ee417674006349b0dda",
        "publishedAt": 1792524780,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 마이크론은 2030년까지 $ 5,000의 투자로 전환할 수 있습니다 | 모틀리 바보 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ 주식 고문 + --- % 모틀리 바보 마이크론에 가입 (MU -0.98%) 은 시장에서 가장 인기 있는 주식 중 하나였습니다",
        "주가는 지난 12개월 동안 334% 상승했으며 10월에 마켓 클로징을 통해 올해는 208% 상승했습니다.",
        "마이크론 투자자들에게 좋은 기회였다는 데는 의심의 여지가 없지만, 향후 몇 년 동안 주식은 어떤 모습일까요?"
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 334%, 208%, $896.07 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 334%, 208%, $896.07 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "544d5a069a5cbff4afaf",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Market Chatter: Amazon is Buying More Nvidia AI Hardware Than It Can Power Up",
      "headlineKo": "시장 잡담: Amazon은 전력을 공급할 수 있는 것보다 더 많은 Nvidia AI 하드웨어를 구매하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af5b78cf3bc72ee40b61c9f88597575013b276cf78183bbb30a4005d404291c0",
        "publishedAt": 1792524552,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Market Chatter: Amazon is Buying More Nvidia AI Hardware Than It Can Power Up",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Market Chatter: Amazon is Buying More Nvidia AI Hardware Than It Can Power Up' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e4132d229659a2dfaa9f",
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
      "headline": "META Earnings & 2 Other AI-Related Reports to Watch This Week",
      "headlineKo": "이번 주에 주목해야 할 META 수익 및 기타 AI 관련 보고서 2개",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c91e3b56568f695d11cfe53643dbcf4d26a9e4c1932b0b3767677eaff599c261",
        "publishedAt": 1792524180,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이번 주에 주목해야 할 META 수익 및 기타 AI 관련 보고서 2개"
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
      "id": "49015a9a783e12ebb9c2",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple faces gross margin pressure as UBS flags slowing iPhone growth ahead of earnings",
      "headlineKo": "UBS가 실적에 앞서 iPhone 성장 둔화를 지적함에 따라 Apple은 매출총이익 압박에 직면해 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=689fb5883c02a5dc568b7900df437e467926a35a939da5a2bcfec21138a4ca9e",
        "publishedAt": 1792521960,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "UBS가 실적에 앞서 iPhone 성장 둔화를 선언함에 따라 Apple은 매출총이익 압박에 직면해 있습니다 | NASDAQ:AAPL, XETRA:APC 무엇을 찾고 계십니까?",
        "회사 뉴스 일치하는 모든 회사 보기 일치하는 모든 뉴스 보기 Tech Hardware & Electrical Equipment 작성자: Angela Harmantas 고지 사항 투자 조언 없음 이 콘텐츠 정보 편집 표준 및 정책 기사 공유 이 콘에 대하여",
        "그녀는 특히 후배 자원주에 초점을 맞춰 북미 주식 시장을 다루는 15년 이상의 경험을 갖고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $112.8 billion, $113.6 billion, $1.97, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $112.8 billion, $113.6 billion, $1.97, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "827244670f887ae998cf",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Investment summit: German government strikes AI deal with Nvidia",
      "headlineKo": "투자 서밋: 독일 정부, 엔비디아와 AI 계약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d11ee394ed057db50b8b6a1640b8b80c2ae386a09286f5e8ea9fe1e940af13d",
        "publishedAt": 1792521846,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "투자 서밋: 독일 정부, 엔비디아와 AI 계약 체결"
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
      "id": "9590cb5fcf81d13ae389",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta Q3 earnings to test Wall Street's stomach for AI spending",
      "headlineKo": "AI 지출에 대한 월스트리트의 배짱을 테스트하기 위한 메타 Q3 수익",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=691b7aca7dc47e177d5d0d55a2e9972c40275a968559246f7fa77ffcd7689629",
        "publishedAt": 1792521665,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta Q3 earnings to test Wall Street's stomach for AI spending",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "109d5c3a4a9aa38b5984",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "STX",
      "relatedTickers": [
        "NVDA",
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
      "headline": "STX Stock Adds 2% After Morgan Stanley Hikes Price Target To Nearly Double From Current Levels",
      "headlineKo": "Morgan Stanley가 가격 목표를 현재 수준보다 거의 두 배로 인상 한 후 STX 주식은 2 % 추가",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d3d58c57a27b5075c38302a8281351a4c4febcd2ad3e14b963a5711f17c44359",
        "publishedAt": 1792520385,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "STX Stock Adds 2% After Morgan Stanley Hikes Price Target To Nearly Double From Current Levels AI Agent Trending News Earnings All DIA 0.03% SPY 0.14% QQQ 0.36% Trending SPCX 9.07% NFLX 6.20% SMCI 11.98% NBIS 2.76% DIA 0.03% QQQ 0.36% NVDA ",
        "STX Stock Adds 2% After Morgan Stanley Hikes Price Target To Nearly Double From Current Levels Morgan Stanley reaffirmed its bullish stance on Seagate Technology, raising its price target to $1,200.",
        "A general view of the Seagate Technology company offices on January 03, 2024, in Minneapolis, Minnesota."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, 0.03%, 0.14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, 0.03%, 0.14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "96e2c4f1e66ff44cc615",
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
      "headline": "What Happened to $1,000 Invested in Microsoft Before Its Cloud and AI Boom?",
      "headlineKo": "클라우드와 AI 붐이 일어나기 전에 Microsoft에 투자한 1,000달러는 어떻게 되었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7373c7014511c198903d29b1d018cf5df505e34aea7d3a0d8f18538ae4369bae",
        "publishedAt": 1792520159,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "클라우드와 AI 붐이 일어나기 전에 Microsoft에 투자한 1,000달러는 어떻게 되었나요?"
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
      "id": "67f7a539c9bc5d7990a4",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "NVDA",
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
      "headline": "Qualcomm To Reportedly Conduct Global Layoffs In Performance-Driven Overhaul",
      "headlineKo": "Qualcomm, 성과 중심 점검을 통해 글로벌 정리해고를 실시할 것으로 알려짐",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57aac6b44d03630ef98220890683ea170489e9be169e2c169f3d64dee028a9ac",
        "publishedAt": 1792519635,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm, 실적 중심 정비에서 글로벌 정리 해고 실시 AI 에이전트 동향 뉴스 수입 모든 DIA 0.02% 스파이 0.23% QQQ 0.53% 동향 SPCX 9.44% NFLX 6.41% SMCI 13.24% NBIS 3.25% DIA 0.02% QQQ 0.53% NVDA 1.57% SLS 0.42% BR",
        "로이터의 보고서에 따르면 Qualcomm은 성과 중심의 정비 반도체 대기업인 Qualcomm이 더 엄격한 성과 문화를 육성하기 위해 연례 검토에 따라 전 세계적으로 정리 해고를 시작한다고 보도했습니다.",
        "Qualcomm 부스는 2026년 3월 2일 스페인 바르셀로나에서 열리는 2026 모바일 월드 콩그레스 (MWC) 에서 볼 수 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.02%, 0.23%, 0.53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.02%, 0.23%, 0.53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0b89aeaa5c4acc40995c",
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
      "headline": "Trump’s FTC Subpoenas OpenAI and Anthropic. Inside the $500 Billion Threat Faced by Microsoft, Amazon, and Google",
      "headlineKo": "트럼프의 FTC 소환장 OpenAI 및 Anthropic. Microsoft, Amazon, Google이 직면한 5000억 달러 규모의 위협 내부",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2f13b36616f1cedc53c7ffd3f32d14c4768a2cb3a23fd85100c5d1232a76f74",
        "publishedAt": 1792518461,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $500 Billion, $554 billion, 27%, $228 billion, $852 billion, $5 billion, $190.4 billion, 14%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Trump’s FTC Subpoenas OpenAI and Anthropic. Inside the $500 Billion Threat Faced by Microsoft, Amazon, and Google' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "06e2020053df0c36c58e",
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
      "headline": "Braze Soars 51% on $5.66 Billion Salesforce Deal: “An Opportunity to Wow Your Customers”",
      "headlineKo": "Braze는 56억 6천만 달러 규모의 Salesforce 거래로 51% 급등: \"고객을 놀라게 할 기회\"",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b7c0a6bb6a0bdd06f775e52aa92cf5d635e9f421162d8ee300803456c8d7b566",
        "publishedAt": 1792517806,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Braze, 56억 6천만 달러 규모의 Salesforce 거래로 51% 급증: \"고객을 놀라게 할 기회\" | TIKR.com General Investing Braze, 56억 6천만 달러 규모의 Salesforce 거래로 51% 상승: \"고객을 놀라게 할 기회\" Gian Estrada • 3분 읽기 Revi",
        "주목해야 할 숫자는 매출 1달러당 가격입니다.",
        "Salesforce는 2027년 1월 31일에 끝나는 회계연도에 대해 Braze의 수익 기준의 약 6.2배를 지불하고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 51%, $5.66 Billion, $45.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 51%, $5.66 Billion, $45.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f0dd6c6d4ba9fbe05264",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Not Micron. Not Sandisk. This Storage Stock Is Riding the Same AI Infrastructure Wave.",
      "headlineKo": "마이크론이 아닙니다. 샌디스크가 아닙니다. 이 스토리지 주식은 동일한 AI 인프라 물결을 타고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70d3e1d0872b6ee59b501ee3152b6d9ed8027582e16905468d03a356033ce027",
        "publishedAt": 1792517700,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 스토리지 재고는 동일한 AI 인프라 물결을 타고 있습니다.",
        "| The Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Motley Fool 가입 인공 지능 (AI) 인프라 주식에 관해서는 Micron Technology와 Sandisk가 많은 ATTE를 얻고 있습니다.",
        "둘 다 AI 데이터 센터의 글로벌 확장으로 인한 메모리 및 스토리지에 대한 엄청난 수요의 혜택을 누리고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3.44%, 100%, 87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.44%, 100%, 87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "82bae992d9807680ab75",
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
      "headline": "Boeing Teams Up With Microsoft To Build New AI-Powered Dataliner Platform – BMO Sees ‘Upside Tension’ For Azure",
      "headlineKo": "Boeing, Microsoft와 협력하여 새로운 AI 기반 Dataliner 플랫폼 구축 - BMO, Azure의 '상향 긴장' 확인",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28795b6d1fa7b180f41af05404b12f4541c3402e99e90a4c8ff11fe4fb067ef5",
        "publishedAt": 1792517678,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Boeing, 새로운 AI 기반 Dataliner 플랫폼 구축을 위해 Microsoft와 협력 - BMO, Azure AI 에이전트에 대한 '상향 긴장' 확인 Trending News Earnings All DIA 1.20% SPY 0.51% QQQ 0.20% Trending SPCX 2.19% NFLX 6.66% SMCI 12.02% SLS 14.01% ISRG 7.6",
        "보잉, 새로운 AI 기반 데이터라이너 플랫폼 구축을 위해 마이크로소프트와 협력 - BMO, Azure의 '상향 긴장' 확인 BMO Capital은 The Fl에 따르면 마이크로소프트의 목표 가격을 515달러에서 600달러로 높이면서 '우수' 등급을 유지했다고 합니다.",
        "판보로 에어쇼에서 보잉 직원이자 회사인 787 드림라이너(N787BX)."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.20%, 0.51%, 0.20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.20%, 0.51%, 0.20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a8393bb24c4d253c848d",
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
      "headline": "Meta Stocks Slides as Earnings Loom. Is Muse Losing Its Shine Already?",
      "headlineKo": "실적이 밝아지면서 메타 주식이 하락했습니다. 뮤즈는 이미 빛을 잃고 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7052231cbfc40ff1c497a742cb2266b58cb1453415d2db98cd6121dd2f76ae37",
        "publishedAt": 1792516213,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta Stocks Slides as Earnings Loom. Is Muse Losing Its Shine Already?",
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
      "id": "db436ffb9458e0c9c22b",
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
      "headline": "Meta Policy Chief Joel Kaplan Reportedly To Leave In 2027 — Leadership Transition Comes Amid Zuckerberg's AI Push",
      "headlineKo": "메타 정책 책임자인 조엘 카플란(Joel Kaplan)은 2027년에 떠날 것으로 알려졌습니다. 리더십 전환은 주커버그(Zuckerberg)의 AI 추진 중에 이루어집니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9441f6f90d7d2982a8092fd154343b0972c31e0cc8ff7fbc9c558b0e80a22e21",
        "publishedAt": 1792516137,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타 정책 책임자인 조엘 카플란(Joel Kaplan)은 2027년에 떠날 것으로 알려졌습니다. 리더십 전환은 Zuckerberg의 AI 추진으로 이루어집니다. AI 에이전트 Trending News Earnings All DIA 1.20% SPY 0.51% QQQ 0.20% Trending SPCX 2.19% NFLX 6.66% SMCI 12.02% SLS 14.01% ISRG 7",
        "메타 정책 책임자인 조엘 카플란(Joel Kaplan)은 2027년에 떠날 것으로 알려졌습니다 — 주커버그의 AI 추진 중에 리더십 전환이 이루어지고 있습니다. Axios의 보고서에 따르면 메타 사장인 디나 파월 맥코믹(Dina Powell McCormick)은 COM으로서 대외 업무 책임을 맡게 됩니다.",
        "Meta 창립자이자 CEO인 Mark Zuckerberg와 글로벌 공공 정책 담당 부사장인 Joel Kaplan(오른쪽)은 국회의사당 사무실에서 John Cornyn 상원의원(R-TX)과의 회의를 마친 후 대화를 나누고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.20%, 0.51%, 0.20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.20%, 0.51%, 0.20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ebbffe474129cbcf5d34",
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
      "importance": "low",
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
      "headline": "Alphabet Poised For Third-Quarter Beat Amid Cloud Strength, BofA Says",
      "headlineKo": "BofA는 클라우드 강세 속에서 3분기 실적이 좋아질 것이라고 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a00ca53e16fc74857a8c6c568dd293105b68c062d6ef411aac3a6864829a21a",
        "publishedAt": 1792515422,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet Poised For Third-Quarter Beat Amid Cloud Strength, BofA Says",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Alphabet Poised For Third-Quarter Beat Amid Cloud Strength, BofA Says' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "GOOGL",
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
      "id": "9f1a14c5b4f90e510e68",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
        "MU",
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
      "headline": "Intel Vs. Micron: Who Is More Exposed By Chinese Rival CXMT’s Progress?",
      "headlineKo": "인텔 대. 마이크론: 중국 라이벌 CXMT의 진전에 더 많이 노출되는 사람은 누구입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0714160c956c1e36fb80d4b05e2bc5646f21aa5300978c36a447459b96639889",
        "publishedAt": 1792514712,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론: 중국 라이벌 CXMT의 진행 상황에 누가 더 많이 노출됩니까?",
        "콘텐츠로 건너뛰기 닫기 ❚❚ S&P 500 7,735.60 − 0.19% Dow Jones 52,524.50 − 0.25% Nasdaq 100 29,646.40 − 0.27% Russell 2000 2,774.19 − 0.25% S&P 500 7,735.60 − 0.19% Dow Jones 52,524.50 − 0.25% Nasdaq 100 29,646.40 − 0.27% Russell 2000 2,774.19 − 0.",
        "마이크론: 중국 라이벌 CXMT의 진행 상황에 누가 더 많이 노출됩니까?"
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $54.23, 379.3%, 87.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $54.23, 379.3%, 87.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "6362f0d766d1a417624a",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Eaton (ETN): Will Its Electrical Backlog Translate Into Lasting Earnings Power?",
      "headlineKo": "Eaton(ETN): 전기 잔고가 지속적인 수익 창출로 이어질까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bfd025a6ba2358fcbd8ed1e2ad399ddc258a62b1f3b29a4801510b5d26e83747",
        "publishedAt": 1792514557,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Eaton (ETN): Will Its Electrical Backlog Translate Into Lasting Earnings Power?",
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
      "id": "b90ab4441bb8f87fa92c",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet set for earnings beat as Cloud and AI chips take centre stage",
      "headlineKo": "클라우드와 AI 칩이 주목을 받으면서 수익이 예상되는 알파벳이 앞섰습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=63c11dc609d030ad26b9202ad746d45c15ad179085b3a8b430d9a0bee4ccad03",
        "publishedAt": 1792514040,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "클라우드와 AI 칩이 주목을 받으면서 수익이 예상되는 알파벳이 앞섰습니다."
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
      "id": "36939923eef54494a274",
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
      "headline": "Oracle Just Dropped 12% in a Month. Is It Time to Sell, or Load Up?",
      "headlineKo": "오라클은 한 달 만에 12% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=274bb1f041dfedcb55ab603d99a7f7bf4321bd1bf59ac3c1052289adad827869",
        "publishedAt": 1792513575,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클은 한 달 만에 12% 하락했습니다.",
        "| TIKR.com General Investing Oracle은 한 달 만에 12% 하락했습니다.",
        "Roxanna Maglangit • 5분 읽기 검토자: Michael Douglass 최종 업데이트: 2026년 10월 20일 pixabay의 v2killer7603 및 Getty Images의 spxChrome Getty Images의 서명 DanielPrudek 및 Pexels의 The Weekender Bianca Constant"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, $90 billion, $169.1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, $90 billion, $169.1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "faa0718155f002c10b17",
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
      "headline": "Oracle (ORCL) Expands Its AI Healthcare Push With A New Drugmaker Partnership",
      "headlineKo": "오라클(ORCL), 새로운 제약회사 파트너십으로 AI 헬스케어 사업 확장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9deffecb0b309742ae93c8101e3125a8864e6c1fe78c207c71d198c6aa1cd39d",
        "publishedAt": 1792512826,
        "collectedAt": 1792575880.186299
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
        "이 기사는 ORCL의 사업과 관련된 'Oracle (ORCL) Expands Its AI Healthcare Push With A New Drugmaker Partnership' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a802165f354ee574ab4e",
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
      "headline": "Top Midday Stories: Salesforce to Acquire Braze for $5.66 Billion; GM Q3 EPS, Revenue Top Estimates But Stock Falls",
      "headlineKo": "주요 Midday Stories: Salesforce, Braze를 56억 6천만 달러에 인수; GM Q3 EPS, 매출 최고 추정치, 주가 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc292d311aea7e789d9e55ec51877ed87ae0ec90a1ed2e01e3aa4e0f91f896a2",
        "publishedAt": 1792511480,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "주요 Midday Stories: Salesforce, Braze를 56억 6천만 달러에 인수; GM Q3 EPS, 매출 최고 추정치, 주가 하락"
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
      "id": "ee26a1916b0c6d8898c4",
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
      "headline": "Should You Buy Apple Stock Now or Wait for a Dip?",
      "headlineKo": "지금 애플 주식을 사야 할까요, 아니면 하락을 기다려야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d900116cb4f7aa1c70fb3b960f3e6b2e95c1c557cc1fa75f77385a8693392631",
        "publishedAt": 1792509541,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 26%, $5 trillion, $5.3 trillion, 40 times, $1,999., $339.50, $3.44, 1.00%.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Should You Buy Apple Stock Now or Wait for a Dip?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "888b56280da4d81d7003",
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
      "headline": "Tesla Just Put a $158 Billion Price Tag on Elon Musk’s Pay for Last Year",
      "headlineKo": "Tesla는 작년에 Elon Musk의 급여에 1,580억 달러의 가격표를 붙였습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4bf910b66e123ef22b656dac6189d6563601a962280bb34467d09828ea471d0d",
        "publishedAt": 1792509458,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 작년에 Elon Musk의 급여에 1,580억 달러의 가격표를 붙였습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,739.80 +0.44% Dow Jones 52,632.50 +1.13% Nasdaq 100 29,606.60 +0.07% Russell 2000 2,779.59 +1.71% S&P 500 7,739.80 +0.44% 다우존스 52,632.50 +1.13% 나스닥 100 29,606.60 +0.07% 러셀 2000 2,779.59 +1.",
        "작성자: Omor Ibne Ehsan 2026년 10월 20일 오전 11시 17분(ET) 게시 · 3분 분량 𝕏 f ⧉ 이 그래픽은 Tesla의 상당한 시장 영향과 미래 전쟁을 반영하여 Elon Musk의 보상과 관련된 엄청난 1,580억 달러 가치 평가를 시각화합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $158 Billion, $158 billion, $158,359,009,867, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $158 Billion, $158 billion, $158,359,009,867, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "35097872ade51ac72bc9",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Lam Research (LRCX) is Poised to Beat Earnings Estimates Again",
      "headlineKo": "Lam Research(LRCX)가 수익 추정치를 다시 상회할 준비가 되어 있는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ac3581626fe71d132058f6a3ff3ef8ced1e5418e015c5e783236262888996da",
        "publishedAt": 1792509002,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Lam Research (LRCX) is Poised to Beat Earnings Estimates Again",
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
      "id": "843b29f0d16ed2495aa3",
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
      "headline": "Qualcomm Cuts Global Workforce Following Performance Focused Employee Reviews",
      "headlineKo": "Qualcomm, 성과 중심 직원 평가에 따라 글로벌 인력 감축",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=394ee3b9bee30a082f872ff480f4f147d4d4b4ba766fee7b56de10243a06fb27",
        "publishedAt": 1792508864,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm, 성과 중심 직원 평가에 따라 글로벌 인력 감축 | TIKR.com 일반 투자 Qualcomm, 성과 중심 직원 리뷰에 따라 글로벌 인력 감축 Aditya Raghunath • 4분 읽기 검토자: David Han",
        "19: $174 52주 최고가: $260 $QCOM 주가 목표: $195 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "Qualcomm(QCOM)은 전 세계적으로 일자리를 삭감할 예정입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 26%, $174, $260 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 26%, $174, $260 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "57fe5ee56128b32c90fb",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "AMZN",
        "COHR",
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
      "headline": "3M Jumps 6% on Expanded Amazon Data Center Deal and Earnings Beat; Coherent Edges Higher, Corning Stays Flat",
      "headlineKo": "3M, 확장된 Amazon 데이터 센터 거래로 6% 증가 및 수익 개선 일관된 가장자리는 더 높고 코닝은 평탄함을 유지합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6129f56cc87faa8ab520b296dffab50edcea140b5d320765804380efcaa18679",
        "publishedAt": 1792508325,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "3M Jumps 6% on Expanded Amazon Data Center Deal and Earnings Beat; Coherent Edges Higher, Corning Stays Flat - 24/7 Wall St.",
        "Skip to content ❚❚ At close S&P 500 7,735.60 −0.19% Dow Jones 52,524.50 −0.25% Nasdaq 100 29,646.40 −0.27% Russell 2000 2,774.19 −0.25% S&P 500 7,735.60 −0.19% Dow Jones 52,524.50 −0.25% Nasdaq 100 29,646.40 −0.27% Russell 2000 2,774.19 −0.",
        "By David Moadel Published October 20, 2026, 10:58am ET · 3 min read 𝕏 f ⧉ © Arsenii Palivoda / Shutterstock.com 3M ( NYSE:MMM | MMM Price Prediction ) stock jumped 6% to $171.91 as investors weighed an expanded Amazon ( NASDAQ:AMZN ) data c"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, $171.91, 1.33% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, $171.91, 1.33% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8e5b10e000f8cd88db85",
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
      "headline": "AMD Stock Price Prediction: Is the AI Chip Opportunity Bigger Than Wall Street Thinks?",
      "headlineKo": "AMD 주가 예측: AI 칩 기회는 월스트리트가 생각하는 것보다 더 큽니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd103074693584e6a8a99232d4210bd09568507729f2a7036d4470dc1ebf3536",
        "publishedAt": 1792506619,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD 주가 예측: AI 칩 기회는 월스트리트가 생각하는 것보다 더 큽니까?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,748.20 −0.03% Dow Jones 52,531.00 −0.24% Nasdaq 100 29,813.80 +0.29% Russell 2000 2,775.79 −0.19% S&P 500 7,748.20 −0.03% 다우존스 52,531.00 −0.24% 나스닥 100 29,813.80 +0.29% 러셀 2000 2,775.79 −0.",
        "AMD는 올해 155% 이상 급등했으며 일주일 동안의 잔혹한 매도는 중요한 질문을 제기합니다. 주가가 이미 완전한 AI 기회를 포착하고 있습니까, 아니면 월스트리트는 다음 단계에 대해 여전히 잠자고 있습니까?"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 155%, $571.04, $546.68 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 155%, $571.04, $546.68 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "81e83a1fd6f24a1744cb",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple Stock Is the Best Performer in the Mag 7. An Analyst Downgrade Signals It’s Time to Pump the Brakes.",
      "headlineKo": "Apple 주식은 Mag 7에서 가장 좋은 성과를 냈습니다. 분석가의 다운그레이드는 이제 브레이크를 밟을 때라는 신호를 보냅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=629024c0ad4c3d5ad399d0a02bbf58b7a13a9055f3960ca69882fa43fca7e570",
        "publishedAt": 1792506180,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple 주식은 Mag 7에서 가장 좋은 성과를 냈습니다. 분석가의 다운그레이드는 이제 브레이크를 밟을 때라는 신호를 보냅니다."
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
      "id": "41f5f83e01d59bd65af9",
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
      "headline": "Alphabet (GOOGL): Can YouTube Subscriptions Make Its Earnings More Resilient?",
      "headlineKo": "Alphabet(GOOGL): YouTube 구독으로 수익 탄력성을 높일 수 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ada8ca1f618525faf4d8e91b7fa40df773794f73570c47f662731be5dfe8c269",
        "publishedAt": 1792503536,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet (GOOGL): Can YouTube Subscriptions Make Its Earnings More Resilient?",
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
      "id": "6dba29f9246cd326720a",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Salesforce Retreats 2% on $5.66B Deal for Braze, Even as ServiceNow and Adobe Gain 2%",
      "headlineKo": "Salesforce는 ServiceNow와 Adobe가 2%를 얻었음에도 불구하고 Braze에 대한 56억 6천만 달러 거래에서 2%를 철회했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00c89d8811e1f08eef06c56dc15d26447343c61555cc5672c937beae38808e67",
        "publishedAt": 1792503443,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce는 ServiceNow와 Adobe가 24/7 Wall St.에서 2%를 얻었음에도 불구하고 Braze에 대한 56억 6천만 달러 거래에서 2%를 철회했습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,744.80 +0.51% Dow Jones 52,602.00 +1.07% Nasdaq 100 29,665.80 +0.27% Russell 2000 2,776.94 +1.62% S&P 500 7,744.80 +0.51% 다우존스 52,602.00 +1.07% 나스닥 100 29,665.80 +0.27% 러셀 2000 2,776.94 +1.",
        "Salesforce가 성공하는 동안 경쟁업체가 부상하는 이유와 Marketing Cloud에 대한 전략적 베팅이 정당화되는지 알아보세요. David Moadel 게시 2026년 10월 20일 오전 9시 37분(ET) · Market Movers 데스크 3분 읽기."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $5.66, $238.57 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 2%, $5.66, $238.57 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 매출·EPS 가이던스",
        "컨센서스 추정치 변경",
        "마진·FCF 전망"
      ]
    },
    {
      "id": "c9421d067cb5124143a9",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SK Hynix Sinks 4% as Seoul Selloff Revives AI Spending Fears; SanDisk Drops 3%, Micron Eases",
      "headlineKo": "SK하이닉스, 서울 매각으로 AI 지출 공포 다시 살아나면서 4% 하락 SanDisk 하락 3%, Micron 완화",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8726e579aa0e69836d74ddb9c4077f531ab99020418ea320d926351a7c2ec603",
        "publishedAt": 1792503044,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SK하이닉스, 서울 매각으로 AI 지출 공포 다시 살아나면서 4% 하락 SanDisk 하락 3%, Micron 완화 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,744.80 +0.51% Dow Jones 52,602.00 +1.07% Nasdaq 100 29,665.80 +0.27% Russell 2000 2,776.94 +1.62% S&P 500 7,744.80 +0.51% 다우존스 52,602.00 +1.07% 나스닥 100 29,665.80 +0.27% 러셀 2000 2,776.94 +1.",
        "다음 SK 하이닉스 수익 보고서에서 밝혀지는 내용이 최근 반등 여부를 결정할 수 있습니다. 작성자: David Moadel 게시일: 2026년 10월 20일 오전 9시 30분(ET) · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 3%, $137.03, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, 3%, $137.03, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0576611f612a8c06288b",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
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
      "headline": "NVIDIA Gets the Attention, but Broadcom Could Deliver the Bigger Surprise",
      "headlineKo": "NVIDIA가 주목을 받지만 Broadcom은 더 큰 놀라움을 선사할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b5af670081a927e2468e1d3008c68af70dc5c3e2b902101d7d6a313edf2a67a2",
        "publishedAt": 1792503017,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVIDIA는 주목을 받지만 Broadcom은 더 큰 놀라움을 선사할 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,744.80 +0.51% Dow Jones 52,602.00 +1.07% Nasdaq 100 29,665.80 +0.27% Russell 2000 2,776.94 +1.62% S&P 500 7,744.80 +0.51% 다우존스 52,602.00 +1.07% 나스닥 100 29,665.80 +0.27% 러셀 2000 2,776.94 +1.",
        "그 수학에 관한 뭔가가 가치가 있습니다… 작성자: Vandita Jadeja 2026년 10월 20일 오전 9시 30분(ET) 게시 · 3분 읽기 가격 목표 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $419.38, 21.12%, $346.25 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $419.38, 21.12%, $346.25 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e1495d7d686ab763aceb",
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
      "headline": "Salesforce To Buy Braze In $5.6 Billion, All-Cash Deal As Acquisitions Continue",
      "headlineKo": "Salesforce, 인수가 계속됨에 따라 Braze를 56억 달러에 전액 현금 거래로 인수",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61f3339e45a25197d7e8629434c16719a06b922cc15f27855729c69cd16d7b6e",
        "publishedAt": 1792502213,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce To Buy Braze In $5.6 Billion, All-Cash Deal As Acquisitions Continue",
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
      "id": "6274f83e8574db24b335",
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
      "headline": "Micron Workers In Taiwan Announce Strike Over Escalating Bonus Dispute",
      "headlineKo": "대만 마이크론 근로자, 증가하는 보너스 분쟁에 대한 파업 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=045822d644ee0f6fc0987507595030f3bf9762de439880dc08cc3c71c4c32ae9",
        "publishedAt": 1792502173,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만 마이크론 노동자, 점점 커지는 보너스 분쟁에 파업 발표 | TIKR.com 대만의 일반 투자 마이크론 근로자, 점점 커지는 보너스 분쟁에 대한 파업 발표 Aditya Raghunath • 4분 읽기 검토자: David Hanson 마지막 업데이트",
        "19: $905 52주 최고가: $1255 $MU 주가 목표: $1561 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "대만 타오위안 소재 마이크론 테크놀로지(MU) 노동자들이 목요일 파업을 계획하고 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 102%, $905, $1255 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 102%, $905, $1255 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8ffb356474c5c03f8aa1",
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
      "headline": "CRM Stock Falls: Salesforce Strikes $5.66B Braze Deal To Strengthen AI Marketing Push",
      "headlineKo": "CRM 주가 하락: Salesforce, AI 마케팅 강화를 위해 56억 6천만 달러 규모의 Braze 거래 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a7c462b685c6ac6693a06c6eaf9ee5bdf56b178bb040e0f99637f57bc4304017",
        "publishedAt": 1792502103,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CRM 주가 하락: Salesforce, AI 마케팅 강화를 위해 56억 6천만 달러 규모의 Braze 거래 체결"
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
      "id": "b1b5506b06d7e1ee620b",
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
      "headline": "SpaceX And Tesla Prepare Side By Side Earnings Reports Amid Merger Speculation",
      "headlineKo": "SpaceX와 Tesla, 합병 추측 속에서 나란히 수익 보고서 준비",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b116d5cefe2ef9a22df93d20c56dd06dedea01fddc7644f95b66318bea830fc1",
        "publishedAt": 1792502013,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX와 Tesla, 합병 추측 속에 나란히 수익 보고서 준비 | TIKR.com 일반 투자 SpaceX와 Tesla, 합병 추측 속에서 나란히 수익 보고서 준비 Aditya Raghunath • 4분 읽기 검토자: David H",
        "19: $148 52주 최고가: $226 $SPCX 주가 목표: $223 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "SpaceX(SPCX)는 화요일 시장 마감 후 3분기 실적을 발표하고 Tesla는 수요일에 뒤를 따릅니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, $148, $226 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, $148, $226 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ca7d9db8b15b79ee638a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Morgan Stanley cuts Western Digital target, raises Seagate amid HDD selloff",
      "headlineKo": "Morgan Stanley, Western Digital 목표 축소, HDD 매각 속에 Seagate 인상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=63925b9f98713884274bf59082b3e8777cfea4de703cd5b3685ad3240b801d2e",
        "publishedAt": 1792501993,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley cuts Western Digital target, raises Seagate amid HDD selloff",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "6149a570bbf1542dbee8",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google Partners With Xcel Energy To Fuel New AI Data Center With Clean Power",
      "headlineKo": "Google, Xcel Energy와 파트너십을 맺고 청정 전력으로 새로운 AI 데이터 센터 활성화",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=79278887b303980076c092f9782d250e8f3480837a4b73873337127dcc227004",
        "publishedAt": 1792501877,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google, Clean Power로 새로운 AI 데이터 센터 활성화 위해 Xcel Energy와 파트너십 체결 | TIKR.com General Investing Google, Xcel Energy와 파트너십을 맺고 청정 전력 Aditya Raghunath로 새로운 AI 데이터 센터 지원 • 4분 읽기 검토자: David Hanso",
        "19: $344 52주 최고가: $348 $GOOGL 주가 목표: $430 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료입니다) >>> 무슨 일이 일어났나요?",
        "Alphabet(GOOGL)은 미네소타주 파인 아일랜드에 새로운 AI 데이터 센터를 구축하기 위해 Xcel Energy와 계약을 제안했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $344, $348 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, $344, $348 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dff35b67ce2b3330873a",
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
      "headline": "Tesla Reports With 21 Analysts on Hold. Here’s What Would Change Their Minds",
      "headlineKo": "Tesla는 21명의 애널리스트가 보류된 보고서를 발표했습니다. 그들의 마음을 바꿀 것은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=53011929080f0c03c6183ad058f12c411b63af3b3817da164ffdf7b1ae7b770a",
        "publishedAt": 1792501223,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 21명의 애널리스트가 보류된 보고서를 발표했습니다.",
        "그들의 마음을 바꿀 것은 다음과 같습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,744.80 +0.51% Dow Jones 52,602.00 +1.07% Nasdaq 100 29,665.80 +0.27% Russell 2000 2,776.94 +1.62% S&P 500 7,744.80 +0.51% 다우존스 52,602.00 +1.07% 나스닥 100 29,665.80 +0.27% 러셀 2000 2,776.94 +1."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $391.09, $354.72, 10.25% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $391.09, $354.72, 10.25% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "24dadc55eaa194e88208",
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
      "headline": "Hubbell (HUBB) Earnings Expected to Grow: What to Know Ahead of Next Week's Release",
      "headlineKo": "Hubbell (HUBB) 수익 증가 예상: 다음 주 출시에 앞서 알아야 할 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56f84a96f4763f8531481707bf61e0a3367758de5d1419b742ed3e6fe5305155",
        "publishedAt": 1792501219,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Hubbell (HUBB) Earnings Expected to Grow: What to Know Ahead of Next Week's Release",
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
      "id": "c40a780c81fa2b59f530",
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
      "headline": "Modine (MOD) Earnings Expected to Grow: Should You Buy?",
      "headlineKo": "모딘(MOD) 수익 증가 예상: 매수해야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fae2367b42ba0009c63e870501fdc33fcd31d86e41f2121ce9aef38ad3c6b36f",
        "publishedAt": 1792501212,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Modine (MOD) Earnings Expected to Grow: Should You Buy?",
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
      "id": "6442c510c3e64c7acb42",
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
      "headline": "Broadcom Announces Continued Infrastructure Agreement with FedEx to Support Global Operations",
      "headlineKo": "Broadcom, 글로벌 운영 지원을 위해 FedEx와 지속적인 인프라 계약 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dac0d99e77c6a45c3f613ed28c686344503f3c88fd3d1408b8f71e14605f26be",
        "publishedAt": 1792501200,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom Announces Continued Infrastructure Agreement with FedEx to Support Global Operations",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "36728b526eaec74f977a",
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
      "headline": "Tesla Earnings Spotlight SpaceX Merger Talk. Here's What Analysts, Musk Say.",
      "headlineKo": "Tesla 수익 스포트라이트 SpaceX 합병 토크. 애널리스트 머스크가 말하는 내용은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fbaff328d6091f755dfe7b664837044296412b058b72de210cf06399c00d7178",
        "publishedAt": 1792500937,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla 수익 스포트라이트 SpaceX 합병 토크. 애널리스트 머스크가 말하는 내용은 다음과 같습니다."
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
      "id": "da8bacdb99b09836e6f1",
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
      "headline": "Update: Market Chatter: Microsoft Pulls Out of UK Data Center Deal With Nscale",
      "headlineKo": "업데이트: 시장 잡담: Microsoft, Nscale과의 영국 데이터 센터 거래 철회",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f6f05377f89e818acee2d57cd3df61a93b6dd86bf1a56d336fc1c0d703912f47",
        "publishedAt": 1792500792,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Update: Market Chatter: Microsoft Pulls Out of UK Data Center Deal With Nscale",
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
      "id": "92b22ce4a0d7332d302a",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Invests In US Indium Processing Amid China Export Restrictions – MU Stock Still Dips",
      "headlineKo": "Micron은 중국 수출 제한으로 인해 미국 인듐 처리에 투자 – MU 재고는 여전히 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=377e270f44579abbedb9820630758a3f80b1a3ae7dd8e9b92c70c603659c353d",
        "publishedAt": 1792500698,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MU 주식은 칩 제조업체가 미국 중요 광물을 확장하더라도 AI 에이전트를 밀어붙입니다. 동향 뉴스 수익 전체 DIA 1.25% SPY 0.64% QQQ 0.42% 추세 CRWV 4.79% USO 2.61% DJT 1.55% LLY 4.79% QQQ 0.42% PFE 1.94% RAPP 3.46% VICR 7.84% 아이렌 0.07% NBI",
        "Micron은 중국 수출 제한으로 인해 미국 인듐 처리에 투자 – MU 주가는 여전히 하락세 Micron은 Indium Corporation에 전략적 자금을 제공하여 중국의 필수 광물 정제 및 고순도 재료 제조를 확장할 것이라고 밝혔습니다.",
        "한 남자가 Micron Technology, Inc.의 사무실 건물로 들어갑니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.25%, 0.64%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.25%, 0.64%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7ed035cd58152e5025e1",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "3M Beat Estimates and Raised Guidance. Why an Amazon Deal Is Driving the Stock.",
      "headlineKo": "3M 비트 추정치 및 상향 조정된 지침. Amazon 거래가 주식을 주도하는 이유.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=29a5be677506a7d351141d4eb2d29e1b2693b85ab6b818bc977f4365b8344f38",
        "publishedAt": 1792499820,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "3M Beat Estimates and Raised Guidance. Why an Amazon Deal Is Driving the Stock.",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "b7e7abbbe320684088bd",
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
      "headline": "CoreWeave Falls 4% as HSBC Reiterates Bearish Call on Debt Risk; Nebius Drops 5%, Oracle Holds Steady",
      "headlineKo": "HSBC가 부채 위험에 대한 약세 전망을 반복함에 따라 CoreWeave는 4% 하락했습니다. Nebius는 5% 하락하고 Oracle은 안정을 유지합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f50f0ffd0a16f4f1828a936de65b8bfc3384b8bd07a87266f75064a5f500e81d",
        "publishedAt": 1792499783,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "HSBC가 부채 위험에 대한 약세 전망을 반복함에 따라 CoreWeave는 4% 하락했습니다. Nebius는 5% 하락하고 Oracle은 안정적으로 유지됩니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,744.80 +0.51% Dow Jones 52,602.00 +1.07% Nasdaq 100 29,665.80 +0.27% Russell 2000 2,776.94 +1.62% S&P 500 7,744.80 +0.51% 다우존스 52,602.00 +1.07% 나스닥 100 29,665.80 +0.27% 러셀 2000 2,776.94 +1.",
        "작성자 David Moadel 2026년 10월 20일 오전 8시 36분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 5%, $58.67 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, 5%, $58.67 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c2f0cae2d0cdfd873990",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Amazon Stock Rises on Morgan Stanley Top Pick: What the $350 Target Needs",
      "headlineKo": "Morgan Stanley Top Pick에서 Amazon 주가 상승: 350달러 목표에 필요한 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=760c6eb9175adc6c96225d582675e3b33ddd711e4f2116a85354b90723f2b93e",
        "publishedAt": 1792499257,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley Top Pick에서 Amazon 주식 상승: $350 목표에 필요한 것 | TIKR.com 일반 투자 Amazon 주식이 Morgan Stanley에서 상승 최고 선택: $350 목표에 필요한 것 Gian Estrada • 4분 읽기 검토자: David Hanson 최종 업데이트",
        "통화는 원장 양쪽의 거리보다 더 멀리 진행됩니다.",
        "Nowak의 2028년 수익 추정치는 컨센서스보다 24% 높으며, 그의 2027년 자본 지출 예측은 컨센서스보다 28% 높습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $350, 5%, $262.45 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $350, 5%, $262.45 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ce30e66ece1e8b94a5b2",
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
      "headline": "Oracle Bonds Face Downgrade Risks As AI Trade Fizzles Across Tech Sector",
      "headlineKo": "기술 부문 전반에 걸쳐 AI 거래가 실패함에 따라 오라클 채권은 다운그레이드 위험에 직면해 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bccabf8cf22417cbc0cd7b5aeb7dcc9471cacbce14cea661de43165f7c0f69b3",
        "publishedAt": 1792498751,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "기술 부문 전반에 걸쳐 AI 거래가 실패함에 따라 오라클 채권은 다운그레이드 위험에 직면 | TIKR.com 일반 투자 Oracle 채권은 기술 부문 전반에 걸쳐 AI 거래가 실패함에 따라 등급 하향 위험에 직면함 Aditya Raghunath • 4분 읽기 검토자: David Hanson 마지막 u",
        "19: $130 52주 최고가: $287 $ORCL 주가 목표: $237 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "오라클(ORCL)은 채권 시장에서 새로운 우려에 직면해 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 27%, $130, $287 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 27%, $130, $287 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "90946a5c78d06eea408d",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Morgan Stanley Names Amazon Top Pick And Raises Price Target",
      "headlineKo": "모건스탠리, Amazon Top Pick으로 선정하고 목표가 상향 조정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e40da951f9f838bbab1b415961ae524f1c4ce82c0509c69a8615db310ddedc20",
        "publishedAt": 1792498631,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "모건스탠리, Amazon Top Pick으로 선정하고 목표가 상향 조정"
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
      "id": "5a2dde019f1287c0e979",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "BE",
      "relatedTickers": [
        "BE"
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
      "headline": "Exploring Analyst Estimates for Bloom Energy (BE) Q3 Earnings, Beyond Revenue and EPS",
      "headlineKo": "Bloom Energy(BE) Q3 수익, 수익 및 주당순이익에 대한 분석가 추정 살펴보기",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aab8a6215a183cf09abce4c0a2e63c0ce88fe76adc83498b7babc89821082d07",
        "publishedAt": 1792498504,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Exploring Analyst Estimates for Bloom Energy (BE) Q3 Earnings, Beyond Revenue and EPS",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "BE에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "75b0dbebbe07fbfd7a4b",
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
      "headline": "Zacks Investment Ideas feature highlights: Taiwan Semiconductor Manufacturing",
      "headlineKo": "Zacks 투자 아이디어 주요 특징: Taiwan Semiconductor Manufacturing",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=540a2ac3a920c1ae65e261d1713f4b883f99f99c7229df935969a7511ab3e2f0",
        "publishedAt": 1792498380,
        "collectedAt": 1792575880.186299
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
        "이 기사는 TSM의 사업과 관련된 'Zacks Investment Ideas feature highlights: Taiwan Semiconductor Manufacturing' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "569cf14084c7c65ef21c",
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
      "headline": "JPMorgan Upgrades Intel Stock Following Strong Management Execution",
      "headlineKo": "JPMorgan, 강력한 경영진 실행에 따라 Intel 주식 업그레이드",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ecaf6deb330724ae990075f189aae32effc8291c5ceefa2212010a16dba521e",
        "publishedAt": 1792498266,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JPMorgan, 강력한 경영 실행에 따라 인텔 주식 업그레이드 | TIKR.com 일반 투자 JPMorgan, 강력한 경영 실행에 따라 인텔 주식 업그레이드 Aditya Raghunath • 3분 읽기 검토자: David Hanson 최종 업데이트 10월",
        "19: $ 92 52주 최고: $ 142 $ INTC 주가 목표: $ 118 현재 라이브: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식의 상승폭을 알아보세요 (무료) > > > 무슨 일이 일어났나요?",
        "Investing.com에 따르면 JPMorgan은 금요일 늦게 인텔 (INTC) 을 저체중에서 중립으로 업그레이드했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 37%, $92, $142 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 37%, $92, $142 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "54bc9020bb7c90036444",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "AAPL",
        "ASML",
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
      "headline": "Apple vs. ASML: Which Tech Stock Is a Better Buy in 2026?",
      "headlineKo": "Apple 대 ASML: 2026년에는 어떤 기술주를 구매하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fbc85a70aebb4549f22f8c830881dc7ff6d9e4916c01327b354afe1c8e058ef7",
        "publishedAt": 1792497601,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML: 2026년에 더 나은 구매는 어떤 기술 주식입니까?",
        "| The Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % The Motley Fool에 가입하기 세계에서 가장 상징적인 소비자 기기 브랜드 또는 이를 만드는 데 필요한 기계를 만드는 회사에 베팅해야 합니까?",
        "Apple (AAPL -1.00%) 과 ASML (ASML -0.99%) 을 비교하면 기술 부문을 플레이하는 두 가지 다른 방법을 알 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.00%, 0.99%, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.00%, 0.99%, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bcd0a132340afbf71af8",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "LRCX",
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
      "headline": "Texas Instruments and Lam Research Report Earnings: AI Equipment Boom Meets Analog Rebound",
      "headlineKo": "Texas Instruments 및 Lam Research 수익 보고서: AI 장비 붐이 아날로그 반등을 만나다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f25362727c7acb6e5ebc787851c7ca738354347168475017152ae4d1282fc37d",
        "publishedAt": 1792497003,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "텍사스 인스트루먼트 및 램 리서치 보고서 수입: AI 장비 붐, 아날로그 리바운드 충족 - 24/7 Wall St.",
        "콘텐츠로 건너뛰기 닫기 ❚❚ S&P 500 7,735.60 − 0.19% Dow Jones 52,524.50 − 0.25% Nasdaq 100 29,646.40 − 0.27% Russell 2000 2,774.19 − 0.25% S&P 500 7,735.60 − 0.19% Dow Jones 52,524.50 − 0.25% Nasdaq 100 29,646.40 − 0.27% Russell 2000 2,774.19 − 0.",
        "이 장면은 대만 반도체 제조 (TSM) 와 같은 회사가 AI 칩을 생산하는 데 필수적인 정교한 제조 프로세스를 보여줍니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 23%, $5.65 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 23%, $5.65 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "70e92b894ed8fd869039",
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
      "headline": "TSMC Stock: AI Demand Drives Strong Q3 Results",
      "headlineKo": "TSMC 주식: AI 수요로 인해 강력한 3분기 실적 창출",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4483360b9abf9da96e3301937a2eec98fef3e6ecfa284a29569078edc20d75db",
        "publishedAt": 1792496993,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSMC 주식: AI 수요로 인해 강력한 3분기 실적 창출"
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
      "id": "503f74bcd19213300618",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Pays Cash For AI. CoreWeave Borrows.",
      "headlineKo": "마이크로소프트는 AI에 현금을 지불합니다. CoreWeave 차용.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=400e89cf45109f3e6ba2c05cbe9032a6ed9df6bba438ccd2f60036f3cfa3f207",
        "publishedAt": 1792496960,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis Microsoft는 AI에 현금을 지불합니다.",
        "2026년 10월 20일 · Trefis 팀 MSFT YTD +11.0% SPY YTD +13.0% QQQ YTD +17.2% MSFT 분석 → AI 구축은 부분적으로 빌린 돈으로 운영되고 빌린 돈은 저렴하지 않습니다. 10년 만기 국채 수익률은 5.1%이며 인플레이션은",
        "두 AI 회사는 이것이 주주들에게 어떤 의미인지 보여줍니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 11.0%, 13.0%, 17.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11.0%, 13.0%, 17.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0d2ea7ed1e4be74d14a8",
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
      "headline": "What Could Eaton Stock Be Worth In Three Years?",
      "headlineKo": "3년 후 이튼 주식의 가치는 얼마나 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f22432ba872dfba595715e619779698148f0377ac9a9a85e993f1257e066730",
        "publishedAt": 1792496881,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What Could Eaton Stock Be Worth In Three Years?",
        "| Trefis What Could Eaton Stock Be Worth In Three Years?",
        "October 20th, 2026 · by Trefis Team ETN YTD +20.9% SPY YTD +13.4% XLI YTD +8.1% Analyze ETN → Eaton (ETN) stock trades at 39.7 times earnings ."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20.9%, 13.4%, 8.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20.9%, 13.4%, 8.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4de3c4f0b24b3415c4ce",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Cramer warns SanDisk and Western Digital are worst stocks if data center capacity shrinks",
      "headlineKo": "Cramer는 데이터 센터 용량이 줄어들면 SanDisk와 Western Digital이 최악의 주식이라고 경고합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02effdae69d202ca0ef91538f492a96670a5bc3261c42e6c6ffaf666292f3f54",
        "publishedAt": 1792495521,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cramer는 데이터 센터 용량이 줄어들면 SanDisk와 Western Digital이 최악의 주식이라고 경고합니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,744.80 +0.51% Dow Jones 52,602.00 +1.07% Nasdaq 100 29,665.80 +0.27% Russell 2000 2,776.94 +1.62% S&P 500 7,744.80 +0.51% 다우존스 52,602.00 +1.07% 나스닥 100 29,665.80 +0.27% 러셀 2000 2,776.94 +1.",
        "작성자: Omor Ibne Ehsan 2026년 10월 20일 오전 7시 25분(동부 표준시) 게시 · 4분 읽음 𝕏 f ⧉ © Jimcramerphoto( CC BY 2.0 ) by Tulane Public Relations SanDisk( NASDAQ:SNDK | SNDK Price Prediction )는 10월 19일 $1,371.12로 마감되어 5.53% 상승했으며 Western D"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,371.12, 5.53%, 6.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,371.12, 5.53%, 6.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7fa55c2d1b0cc3af7c06",
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
      "headline": "Eaton to announce third quarter 2026 earnings on November 3, 2026",
      "headlineKo": "이튼, 2026년 11월 3일 2026년 3분기 실적 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d707fd2218fae11c580a5984318d4cdb913790e49f2ad6f071114ca5dcd79e23",
        "publishedAt": 1792493100,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이튼, 2026년 11월 3일 2026년 3분기 실적 발표"
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
      "id": "cb204625b730d750f316",
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
      "headline": "AstraZeneca and Oracle Launch AI Partnership to Improve Clinical Trials and Patient Care",
      "headlineKo": "AstraZeneca와 Oracle, 임상 시험 및 환자 치료 개선을 위해 AI 파트너십 개시",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8ae13749806499f734e5ead993cc11fa4369da2835d237a97993fe54c35e450",
        "publishedAt": 1792492863,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AstraZeneca와 Oracle, 임상 시험 및 환자 치료 개선을 위해 AI 파트너십 개시"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "94b03da05eb19df6787c",
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
      "headline": "Is Open AI Rack Launch Altering The Investment Case For Arista Networks Stock?",
      "headlineKo": "Open AI 랙 출시로 인해 Arista Networks 주식에 대한 투자 사례가 바뀌고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=53f10a68349424911c2300add3376aaf26c6051ffa92e23dd799235512907a5e",
        "publishedAt": 1792491028,
        "collectedAt": 1792575880.186299
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
        "이 기사는 ANET의 사업과 관련된 'Is Open AI Rack Launch Altering The Investment Case For Arista Networks Stock?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f59827cb1f22836a964c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Not Palantir. Not Snowflake. This AI Software Stock Could Be the Biggest Winner of 2027.",
      "headlineKo": "팔란티르가 아닙니다. 눈송이가 아닙니다. 이 AI 소프트웨어 주식은 2027년의 가장 큰 승자가 될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c715948989cf4024b71a86181fd43f69852f5e5484b196aed8dd6a5f7a78d176",
        "publishedAt": 1792489920,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이 AI 소프트웨어 주식은 2027년의 가장 큰 승자가 될 수 있습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능 소프트웨어 분야에서는 Palantir Technologies( PLTR -0.80% )와 Snowflake( SNOW +1.35% )가 투자했습니다.",
        "Palantir는 기업과 정부 기관이 AI를 사용하여 정보를 분석하고 의사 결정을 내릴 수 있도록 돕는 데 성공했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.32%, $227.37, $0.73 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.32%, $227.37, $0.73 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9463a4fe79bfe6761413",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "FedEx To Continue Utilizing Broadcom's Infrastructure Software Portfolio Under Expanded Collaboration",
      "headlineKo": "FedEx, 확장된 협력 하에 Broadcom의 인프라 소프트웨어 포트폴리오 계속 활용",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=2c8b08edb11558d8493814c5309fa741999649b83ea63fa4f255f472acb2227e",
        "publishedAt": 1792487054,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "FedEx, 확장된 협력 하에 Broadcom의 인프라 소프트웨어 포트폴리오 계속 활용"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "2202e21918c78917d121",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Evercore ISI Group Maintains Outperform on Lam Research, Lowers Price Target to $315",
      "headlineKo": "Evercore ISI 그룹, Lam Research에서 우수한 성과를 유지하고 목표 가격을 315달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5f74262f5e00637d95c0ce89a44270dd59055559fa252acd12a44900c8399157",
        "publishedAt": 1792485691,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Evercore ISI 그룹, Lam Research에서 우수한 성과를 유지하고 목표 가격을 315달러로 낮춤"
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
          "ticker": "LRCX",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "59caad64b2b8d68c6bf4",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Wedbush Reiterates Outperform on Advanced Micro Devices, Maintains $600 Price Target",
      "headlineKo": "Wedbush, 고급 마이크로 장치 부문에서 우수한 성과 유지, $600 목표 가격 유지",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e28e7bceee385b28c1ae60af15ea24127e99384505f3866b16de9b7caf402038",
        "publishedAt": 1792485450,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wedbush Reiterates Outperform on Advanced Micro Devices, Maintains $600 Price Target",
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
      "id": "ff96091482933cd6a8bf",
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
      "headline": "Vertiv Lost 13% in a Week. Morgan Stanley Sees 60% Upside From Here",
      "headlineKo": "Vertiv는 일주일 만에 13% 손실을 입었습니다. Morgan Stanley는 여기에서 60% 상승 여력을 봅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=683370ce9a74a120b54c8543adafefc65b141286872ebc2f0dfcaf729ee2ffce",
        "publishedAt": 1792479976,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley Sees 60% Upside From Here | TIKR.com General Investing Vertiv Lost 13% in a Week.",
        "Morgan Stanley Sees 60% Upside From Here Gian Estrada • 4 minute read Reviewed by: David Hanson Last updated Oct 20, 2026 Wisarut Pumipak from Getty Images and Corina Ciocirlan's Images via Canva Key Takeaways Vertiv shares fell nearly 14% ",
        "Vertiv reported nothing negative, and the selling followed a scare over how the AI build-out gets financed after CoreWeave’s 2032 bonds yielded close to 15%."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 60%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 60%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f25e4edc184ee8dcd9c0",
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
      "headline": "Cantor Fitzgerald Initiates Coverage On Modine Manufacturing with Overweight Rating, Announces Price Target of $275",
      "headlineKo": "Cantor Fitzgerald, Modine 제조에 대한 비중확대 등급 보도 개시, 목표 가격 $275 발표",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=cae3e2ed0e40c551a9bd7f0ec0588321a4a363bc7536b0dc67daf144d7d0808c",
        "publishedAt": 1792478784,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cantor Fitzgerald Initiates Coverage On Modine Manufacturing with Overweight Rating, Announces Price Target of $275",
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
      "id": "f80b04528c1340410072",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "BE",
      "relatedTickers": [
        "BE"
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
      "headline": "BE Stock Slips Overnight: Bloom Energy’s Valuation In Focus Ahead Of Q3 Earnings",
      "headlineKo": "BE 주가 밤새 하락: Bloom Energy의 가치 평가는 3분기 실적에 앞서 집중됩니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e27903826eae789ac1f92317410288da15e1a7b85b79f679d95fd4d095c5c947",
        "publishedAt": 1792476892,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BE 주가 밤새 하락: Bloom Energy의 가치 평가는 3분기 실적에 앞서 집중됩니다"
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
          "ticker": "BE",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "a1aab4850ad3552dcd2f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "BE",
      "relatedTickers": [
        "BE",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "BE Stock Slips Overnight: Bloom Energy’s Valuation In Focus Ahead Of Q3 Earnings",
      "headlineKo": "BE 주가 밤새 하락: Bloom Energy의 가치 평가는 3분기 실적에 앞서 집중됩니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e27903826eae789ac1f92317410288da15e1a7b85b79f679d95fd4d095c5c947",
        "publishedAt": 1792476892,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BE 주식 하락: 3분기 수익을 앞두고 Bloom Energy의 가치 평가에 초점 AI 에이전트 동향 뉴스 수익 전체 DIA 1.04% SPY 0.67% QQQ 0.90% 추세 SPCX 8.81% SMCI 18.88% NFLX 6.53% GE 3.28% CELH 0.44% ISRG 5.93% IRON 0.63% LRCX 0.0",
        "BE 주가 밤새 하락: Bloom Energy의 3분기 수익에 앞서 가치 평가에 집중 Bloom Energy의 선도 가격 대비 수익 비율은 Koyfin 데이터에 따라 63.5배로 동종 업체를 초과합니다.",
        "이번 포토 일러스트에는 블룸에너지(Be) 로고가 스마트폰 화면에 표시된 모습이 담겨 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.04%, 0.67%, 0.90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.04%, 0.67%, 0.90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d67239114d0a32216d6b",
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
      "headline": "Amazon Stock to Top $300 in October? Prediction Market Punters Trade the Odds as Morgan Stanley Raises Near-Term Target",
      "headlineKo": "아마존 주식, 10월에 300달러 돌파? Morgan Stanley가 단기 목표를 높이면서 예측 시장 투자자들은 확률을 거래합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=746d90013dea92e8929f6f393f529c4743062798bce16068bfd50629e1ddb8d8",
        "publishedAt": 1792474616,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon Stock to Top $300 in October? Prediction Market Punters Trade the Odds as Morgan Stanley Raises Near-Term Target",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Amazon Stock to Top $300 in October? Prediction Market Punters Trade the Odds as Morgan Stanley Raises Near-Term Target' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a17855391961b93a4f03",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "MSFT"
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Jim Cramer Has a Warning for AI Data Center Investors Ahead of MSFT, GOOGL and AMZN Earnings: ‘Too Early to Say That the Coast Is Clear’",
      "headlineKo": "Jim Cramer는 MSFT, GOOGL 및 AMZN 수익을 앞두고 AI 데이터 센터 투자자들에게 경고합니다: '해안이 분명하다고 말하기에는 너무 이르다'",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=ded58f3333e3199c49cbc5b38ab1eb559b980c25eced0fdcbdeb4ad18cdaff8d",
        "publishedAt": 1792470715,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Cramer는 MSFT, GOOGL 및 AMZN 수익을 앞두고 AI 데이터 센터 투자자들에게 경고합니다: '해안이 분명하다고 말하기에는 너무 이르다'"
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
          "ticker": "MSFT",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "166ca2101a701cce018b",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "ORCL",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft vs. Oracle: Which Tech Stock Is a Better Buy in 2026?",
      "headlineKo": "Microsoft vs. Oracle: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1e505b35a5f707444373e7c8181733e4fa60a1c6fb2d85ffe25265775e4f055",
        "publishedAt": 1792469402,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% 잡다한 바보에 합류하세요 두 거대 기업 사이에서 결정을 내리려면 클라우드 지배력을 향한 서로 다른 경로를 살펴봐야 합니다.",
        "Microsoft( MSFT +0.84% ​​)와 Oracle( ORCL +1.06% )은 모두 오늘날 장기 투자자에게 매력적인 소프트웨어 포트폴리오를 제공합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.84%, 1.06%, $332 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.84%, 1.06%, $332 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7503c93e3e7182d60286",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Lam Research (LRCX) Q3 Earnings: What To Expect",
      "headlineKo": "Lam Research(LRCX) 3분기 실적: 예상되는 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1990fedad16793f91df010b254365a15320978b97fdc9403b9bf8974e838db5b",
        "publishedAt": 1792468670,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research(LRCX) 3분기 실적: 예상되는 사항"
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "3c07fc3a8aff14160752",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell Stock Is Still 17% Below Its Investor Day Close. Here’s What the AI Funding Scare Means for 2031",
      "headlineKo": "Marvell 주식은 여전히 ​​투자자의 날 마감보다 17% 낮습니다. 2031년에 AI 자금 조달 공포가 의미하는 바는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd42d10496cf241d9fa51cfcab1c0b632a51b21388c7b5b0f22d67d188d6fcc0",
        "publishedAt": 1792468563,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell 주식은 여전히 ​​투자자의 날 마감보다 17% 낮습니다. 2031년에 AI 자금 조달 공포가 의미하는 바는 다음과 같습니다."
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
      "id": "edc6c693a57d066393ca",
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
      "headline": "Arista Networks Stock Fell 18% From Its Record in One Week. Here’s What the Selloff Missed and Where the Stock Could Go by 2030",
      "headlineKo": "Arista Networks 주식은 일주일 만에 기록 대비 18% 하락했습니다. 매도가 놓친 부분과 2030년까지 주식이 어디로 갈 수 있는지는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83eb7e23ad292530176d07bdac8d4f3304fe37a50042822601c98be4d66b6415",
        "publishedAt": 1792467816,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista Networks Stock Fell 18% From Its Record in One Week.",
        "Here’s What the Selloff Missed and Where the Stock Could Go by 2030 | TIKR.com Stock Reviews Arista Networks Stock Fell 18% From Its Record in One Week.",
        "Here’s What the Selloff Missed and Where the Stock Could Go by 2030 Wiltone Asuncion • 5 minute read Reviewed by: David Hanson Last updated Oct 20, 2026 @Kittipong Jirasukhanont from PhonlamaiPhoto's Images via Canva, @Vladimir_Timofeev fro"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 18%, $182.95, $463 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 18%, $182.95, $463 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "357d1cdaf744c2d6174f",
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
      "headline": "Chip Stocks Just Had Their Longest Losing Streak Since 2008. Should You Buy Nvidia Stock Now?",
      "headlineKo": "칩 주식은 2008년 이후 가장 긴 연속 하락세를 보였습니다. 지금 Nvidia 주식을 사야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=964c115dfd9840d25e62b31b603ace663b3fae9d684ad5891a0010294b68deab",
        "publishedAt": 1792467782,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "칩 주식은 2008년 이후 가장 긴 연속 하락세를 보였습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Chip 주식은 지난 2주 동안 힘든 시간을 보냈습니다.",
        "칩 주식을 측정하는 널리 사용되는 PHLX 반도체 지수는 10월부터 8회 연속 하락세를 보였습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 16%, 1.38%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 16%, 1.38%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "47999d60e8e78b41fe67",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "GE Vernova Secures Order To Supply 9E Gas Turbine For 372MW Songon Power Plant In Côte D’Ivoire, Scheduled To Launch In 2029",
      "headlineKo": "GE Vernova, 2029년 가동 예정인 코트디부아르의 372MW 송곤 발전소에 9E 가스 터빈 공급 주문 확보",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d1921842c6cc0a893491608a8f01386edc57e0dab4c875ce81b198c4871ff108",
        "publishedAt": 1792467183,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova Secures Order To Supply 9E Gas Turbine For 372MW Songon Power Plant In Côte D’Ivoire, Scheduled To Launch In 2029",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "60e931d7f681cd07d6ce",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
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
      "headline": "Dow, S&P 500, Nasdaq Edge Higher Amid Tech Rebound As Q3 Earnings Season Forges Ahead: DJT, AMZN, CBRS, CRWV Stocks In Focus",
      "headlineKo": "Dow, S&P 500, Nasdaq Edge는 3분기 실적 시즌이 다가오면서 기술 반등 속에서 상승: ​​DJT, AMZN, CBRS, CRWV 주식에 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=16e5bc7a300093ae230836abdc7cafb5c4cf229188872e8713eb6684efdf28f0",
        "publishedAt": 1792467116,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dow, S&P 500, Nasdaq Edge는 3분기 수익 시즌이 앞당겨지면서 기술 반등으로 상승: DJT, AMZN, CBRS, CRWV 주식에 초점 AI 에이전트 동향 뉴스 수익 전체 DIA 0.04% SPY 0.42% QQQ 1.21% 추세 SLS 5.11% CBRS 5.15% GM 1.44% NBIS 2.88%",
        "Dow, S&P 500, Nasdaq Edge는 3분기 실적 시즌이 앞당겨지면서 기술 반등 속에 상승: DJT, AMZN, CBRS, CRWV 주식 집중 월요일에 기술 및 AI 주식이 반등하여 한 주간의 가파른 하락세를 뒤집었습니다.",
        "뉴욕 - 스톡 사진 Aashika Suresh · Stocktwits 2026년 10월 19일에 게시됨 | 오후 11시 31분 EDT 공유 · 우리를 추가하세요. 이번 상승세는 기술주와 더 넓은 시장의 분위기를 조성할 것으로 보이는 바쁜 실적 주간을 앞두고 이루어졌습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.11%, 2%, 1.61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.11%, 2%, 1.61% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7d2e5ac77b572cb866a2",
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
      "headline": "Vertiv Stock Fell 15% Last Week. Here’s What Its October 28 Report Needs to Show",
      "headlineKo": "Vertiv 주가는 지난 주 15% 하락했습니다. 10월 28일 보고서에서 보여줘야 할 내용은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d0b092b693826e1c9d841391a812a08be3962aa74edf61cc0385b645a7b2d90e",
        "publishedAt": 1792466146,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Here’s What Its October 28 Report Needs to Show | TIKR.com Stock Reviews Vertiv Stock Fell 15% Last Week.",
        "Here’s What Its October 28 Report Needs to Show Wiltone Asuncion • 5 minute read Reviewed by: David Hanson Last updated Oct 20, 2026 @Kittipong Jirasukhanont from PhonlamaiPhoto's Images via Canva, @Изображения пользователя hlopotov_alexand",
        "Vertiv Holdings ( VRT ) now trades at a lower forward multiple than at any quarter-end TIKR shows since September 2025, even as earnings estimates climbed."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 15%, $206.08, $458 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 15%, $206.08, $458 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dc714bb527c91d469cce",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "NVDA",
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
      "headline": "AVGO Stock Edges Up Overnight After 10-Year Docomo Deal, But Retail Stays On Edge Over CEO’s AI ‘Casino’ Remarks",
      "headlineKo": "AVGO 주식은 10년간의 Docomo 거래 이후 밤새 상승했지만 소매업은 CEO의 AI '카지노' 발언보다 우위를 유지했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=830600d0ab1059368bebd62f0917350abcd36044def65619d3975d1db6c77e19",
        "publishedAt": 1792465702,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AVGO 주가는 10년 간의 Docomo 거래 이후 밤새 상승했지만 소매업체는 CEO의 AI '카지노' 발언에 대해 여전히 우위를 유지했습니다. AI 에이전트 Trending News Earnings All DIA 0.04% SPY 0.42% QQQ 1.21% Trending SLS 5.11% CBRS 5.15% GM 1.44% NBIS 2.88% NVDA 1.38%",
        "AVGO 주가는 10년 간의 Docomo 거래 이후 밤새 상승했지만 소매점은 CEO의 AI '카지노' 발언에 비해 우위를 유지했습니다. CEO Hock Tan의 AI '카지노' 발언과 자본 제약에 대한 경고는 여전히 소매 거래자들을 걱정하고 있습니다.",
        "전화기 화면에 표시된 Broadcom 로고 뒤에 주식 그래프 예시가 표시됩니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.04%, 0.42%, 1.21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.04%, 0.42%, 1.21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3e1942bbb4cc365db652",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "NVDA",
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
      "headline": "MMM Stock Jumps Overnight: Amazon Could Own A Piece Of 3M If It Spends $6B On Its Data Center Products",
      "headlineKo": "MMM 주가 밤새 상승: Amazon이 데이터 센터 제품에 60억 달러를 지출하면 300만 달러를 소유할 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e74b531e89ef7af2922fba2beb11ecbfb482b11e12672af124e18844fc2bd03b",
        "publishedAt": 1792460827,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "3M 주식이 익일 거래에서 5% 이상 상승하는 이유는 무엇입니까?",
        "AI 에이전트 동향 뉴스 수익 전체 DIA 0.04% SPY 0.42% QQQ 1.21% 동향 SLS 5.11% CBRS 5.15% GM 1.44% NBIS 2.88% NVDA 1.38% CRWV 0.44% UAL 0.52% ARWR 2.86% DJT 8.01% AMZN 4.98% 홈 뉴스 시장 주식 MMM 주가 밤새 상승: Amazon C",
        "MMM 주가 밤새 상승: Amazon이 데이터 센터 제품에 60억 달러를 지출하면 3M 지분을 소유할 수 있음 3M은 제품 판매 및 대만 Genius에 대한 투자 계획과 연결된 Amazon 거래를 통해 AI 인프라 전략을 강화합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 0.04%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 0.04%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1432e8c717f5a1591599",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon Gets Warrant to Buy $521.4 Million of 3M Stock in Expanded Data Center Partnership: MMM Rises Over 5% After Hours",
      "headlineKo": "Amazon은 확장된 데이터 센터 파트너십을 통해 5억 2,140만 달러 규모의 3M 주식을 매입할 수 있는 영장을 받았습니다. MMM은 영업 시간 외 5% 이상 상승합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ecd1af9cf2c3406b4af22abcb96b91424fd304fa192b786d4793423e9792f94a",
        "publishedAt": 1792460428,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon은 확장된 데이터 센터 파트너십을 통해 5억 2,140만 달러 규모의 3M 주식을 매입할 수 있는 영장을 받았습니다. MMM은 영업 시간 외 5% 이상 상승합니다."
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
      "id": "8212a0b3844fe854b4f0",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Learn Why The Bull Case For Lam Research Stock Could Change Following Earnings Beat",
      "headlineKo": "Lam Research 주식의 강세 사례가 실적 개선에 따라 변경될 수 있는 이유를 알아보세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=276cff3bb55aa9ae505cca29916dce683956c1754c6a851d2602c0916007b7b1",
        "publishedAt": 1792455563,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Learn Why The Bull Case For Lam Research Stock Could Change Following Earnings Beat",
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
      "id": "b54335f7976b7e032532",
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
      "headline": "3M Jumps On Expanded Amazon Data Center Deal; Earnings On Tap",
      "headlineKo": "확장된 Amazon 데이터 센터 거래에 3M 점프; 탭으로 수익 창출",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99948ae409f4bfc0c5f82e6f9a308a530fdcd477695f1c3b1466542a975d89f1",
        "publishedAt": 1792453149,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "확장된 Amazon 데이터 센터 거래에 3M 점프; 탭으로 수익 창출"
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
      "id": "69942c7d05abbc3c0a04",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SpaceX, Tesla Earnings on Deck: Key Metrics to Watch",
      "headlineKo": "SpaceX, Tesla의 갑판 수익: 주목해야 할 주요 지표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1b423bf0376dad3bdf1dbf34ee9c2bc39797f7005729d05b40b0a450e6b2a2e",
        "publishedAt": 1792452240,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX, Tesla Earnings on Deck: Key Metrics to Watch",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "fabac6490a7f1432285f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "AMZN",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nasdaq 100 Sees Best Day In Nearly A Month As AI Rout Cools — AMZN, BE, CRWV, AAPL, PLTR In Focus",
      "headlineKo": "AI Rout이 식으면서 Nasdaq 100은 거의 한 달 만에 최고의 날을 맞이했습니다 — AMZN, BE, CRWV, AAPL, PLTR 초점",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2c49c35a756adb72db9233d431d447e8200033fa768a6a031f1d0857617d958",
        "publishedAt": 1792450823,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nasdaq 100은 AI 패배가 냉각됨에 따라 거의 한 달 만에 최고의 날을 봅니다 — AMZN, BE, CRWV, AAPL, PLTR 초점 AI 에이전트 동향 뉴스 수익 전체 DIA 0.04% SPY 0.42% QQQ 1.21% 추세 SLS 5.11% CBRS 5.15% GM 1.44% NBIS 2.88% NVDA 1.38% CRWV 0.44% UAL",
        "Nasdaq 100은 AI Rout이 냉각됨에 따라 거의 한 달 만에 가장 좋은 날을 봅니다 — AMZN, BE, CRWV, AAPL, PLTR 초점 필라델피아 반도체 지수는 약 1.6% 추가되었습니다.",
        "트레이더들은 뉴욕증권거래소(NYSE) 현장에서 일합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.4%, 0.3%, 1.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.4%, 0.3%, 1.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a74fda82b8956be9fce9",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet Stock Slipped After Q2 Earnings. Here's What Investors Need to See in Q3.",
      "headlineKo": "알파벳 주식은 2분기 실적 후 하락했습니다. 3분기에 투자자들이 확인해야 할 사항은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9e78550d83ba9d1786aec829a1c1e34d9f4ccce64dcac9901ef0ae4bbdbb3177",
        "publishedAt": 1792449780,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳 주식은 2분기 실적 후 하락했습니다.",
        "3분기에 투자자들이 확인해야 할 사항은 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Wall Street는 기술 회사가 인공 지능에 지출하는 막대한 금액에 대해 약간 참을성이 없을 수 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.05%, 0.96%, 82% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.05%, 0.96%, 82% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fdea1ad249bf9a72f324",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "META",
      "relatedTickers": [
        "AMD",
        "META",
        "NVDA",
        "TSLA"
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
      "headline": "Dow Jones Futures: AMD, Nvidia Lead AI Trade Higher; Meta, Netflix, SpaceX, Tesla Earnings On Deck",
      "headlineKo": "다우존스 선물: AMD, Nvidia가 AI 거래를 더 높이 평가합니다. 메타, 넷플릭스, SpaceX, Tesla 수익 창출",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e89d884f4dae74cae42a9e4c1ebd99c70ba069b9909f908a2dbd34d54a36a5a",
        "publishedAt": 1792445414,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dow Jones Futures: AMD, Nvidia Lead AI Trade Higher; Meta, Netflix, SpaceX, Tesla Earnings On Deck",
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
      "id": "5bb37978281ad1345e6e",
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
      "headline": "Shots Fired: Meta Is Developers on Outside AI Tools “in Half”. That’s a Big Problem for Anthropic",
      "headlineKo": "발사된 발사: Meta는 외부 AI 도구의 개발자가 \"절반\"입니다. 그것은 인류에게 있어서 큰 문제이다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=467fb18747d8d43365f7254bf730d1cf8b988c145ff08eb8372d047493e288d5",
        "publishedAt": 1792442594,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "발사된 발사: Meta는 외부 AI 도구의 개발자가 \"절반\"입니다.",
        "그것은 인류에게 있어서 큰 문제입니다 | TIKR.com 일반 투자 총격 발생: 메타는 외부 AI 도구 개발자가 \"절반\"입니다.",
        "인류를 사랑하는 Roxanna Maglangit에게는 큰 문제입니다. • 6분 읽기 검토자: Michael Douglass 최종 업데이트: 2026년 10월 19일 Изображения пользователя Canva의 Maximusnd Zahar 핵심 사항 Meta는 직원 수를 줄인 것으로 알려졌습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $16.8 billion, $69.7 billion, $105 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $16.8 billion, $69.7 billion, $105 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6e509225c212b1ac0f80",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Big Short’s Steve Eisman: “Half of Oracle’s Backlog Is Just OpenAI”",
      "headlineKo": "Big Short의 Steve Eisman: “오라클 백로그의 절반은 OpenAI입니다.”",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02353987d544c732d32fb615c9a6e8e18ff649ad0dd1c7dc46387ca065588a74",
        "publishedAt": 1792441305,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Big Short의 Steve Eisman: “오라클 백로그의 절반은 OpenAI입니다” | TIKR.com General Investing Big Short의 Steve Eisman: \"오라클 백로그의 절반은 OpenAI입니다.\" Roxanna Maglangit • 6분 읽기 검토자: Mich",
        "Steve Eisman은 Oracle의 6,380억 달러 백로그 중 절반이 OpenAI에서 나온다고 말했습니다.",
        "그렇게 되면 오라클의 성장 스토리는 주로 한 고객의 지불 능력에 달려 있게 됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 54%, 80%, $638 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 54%, 80%, $638 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "da989621894fd2900d83",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "INTC",
        "TSLA"
      ],
      "relatedEntities": [
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
      "headline": "Tesla Rises on a Foundry Agreement With Intel as JPMorgan Upgrades the Stock",
      "headlineKo": "JPMorgan이 주식을 업그레이드함에 따라 Tesla는 Intel과의 파운드리 계약을 맺었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1bb54ff3683b83061badd91f3a125a0617189000da3f2260cf75bdd41478f462",
        "publishedAt": 1792440467,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JPMorgan이 주식을 업그레이드함에 따라 Tesla는 Intel과의 파운드리 계약을 맺었습니다."
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
      "id": "864570426d6afecc0c80",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "AMZN",
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
      "headline": "BE Stock Adds 3% After Oracle Signals Project Jupiter 'Moving Quickly'",
      "headlineKo": "BE 주식은 Oracle이 Jupiter 프로젝트에 '빠른 움직임' 신호를 보낸 후 3%를 추가합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ccd00c5c3fd4561eca5fa8d0496bf03dc8814aa87fb54276ccd5d784ce66bb28",
        "publishedAt": 1792439436,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BE 주식은 Oracle Signals 프로젝트 후 3% 추가 Jupiter '빠르게 이동' AI 에이전트 동향 뉴스 수익 전체 DIA 0.15% SPY 0.50% QQQ 1.32% 추세 DJT 7.50% HOOD 2.16% NFLX 1.13% IRON 36.54% CBRS 5.16% WULF 3.17% UAL 0.29% AMZN 5.23% WLFI 4.",
        "BE 주식은 오라클이 Jupiter 프로젝트를 '빠르게 움직인다'는 신호를 보낸 후 3%를 추가합니다. Project Jupiter 데이터 센터 캠퍼스의 건설이 빠르게 진행되고 있으며 현장에서 강력한 진전을 보이고 있다고 Oracle이 X에 게시한 글에서 밝혔습니다.",
        "Bloom Energy의 공동 창립자이자 CEO인 Sridhar가 2월 2일 수요일 캘리포니아주 새너제이에 있는 eBay 사무실에서 열린 기자회견에서 연료전지를 들고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, 0.15%, 0.50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, 0.15%, 0.50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d73564e71e4816262e66",
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
      "headline": "Microsoft's First-Quarter Results to Match Views Amid Azure's Momentum, Morgan Stanley Says",
      "headlineKo": "Morgan Stanley는 Microsoft의 1분기 실적이 Azure의 모멘텀 속에서 전망과 일치한다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd9b7acfc033f5409f343e69adb7111ee73560e4063d345a77fb00093bc0c5d7",
        "publishedAt": 1792439034,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft's First-Quarter Results to Match Views Amid Azure's Momentum, Morgan Stanley Says",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "1e10578f547803c23685",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Amazon (AMZN) Stock Costs $250 a Share. Here's Why I'd Still Buy It.",
      "headlineKo": "아마존(AMZN) 주가는 주당 250달러입니다. 내가 아직도 그것을 구매하고 싶은 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a47c0239d66477228f31d9c8526cdee7e3557a3bd12625f96f15015a8c20faa8",
        "publishedAt": 1792437900,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존(AMZN) 주가는 주당 250달러입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 거의 모든 사람이 Amazon에 대해 알고 있습니다( AMZN +4.98% ).",
        "2026년 Kantar BrandZ Global Top 100 순위에 따르면 Amazon은 브랜드 가치 1조 달러로 4위를 차지했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $250, $1 trillion, $2.7 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $250, $1 trillion, $2.7 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c6f5ce1ef9143b0897d7",
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
      "headline": "Amazon Just Made Its AI Chips Easier to Use. Should Nvidia Investors Be Worried?",
      "headlineKo": "Amazon은 AI 칩을 사용하기 쉽게 만들었습니다. 엔비디아 투자자들은 걱정해야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b41f28cc0a73a424d42c101b27ec7db523ea3301721cb171375df9189c631c1f",
        "publishedAt": 1792437542,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 1.38%, $217.09, $2.96, $5.16, $214.70, $219.62, $164.27, $243.37.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Amazon Just Made Its AI Chips Easier to Use. Should Nvidia Investors Be Worried?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "2b47bdb76a1dbc02268d",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon Soars 5% as Morgan Stanley Names It a Top Pick: AWS Runway “Under-Appreciated”",
      "headlineKo": "Morgan Stanley가 최고의 선택으로 선정한 Amazon, 5% 상승: AWS Runway \"저평가\"",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6db590e253a0d2be5da4a8c2a956052210c92a7f1b04c6fe6b2cc7b7efaaf2eb",
        "publishedAt": 1792437532,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley가 선정한 Amazon의 주가는 5% 상승: AWS Runway는 \"저평가\" | TIKR.com General Investing Amazon, Morgan Stanley가 최고 추천으로 선정하면서 5% 상승: AWS Runway \"저평가\" David Beren • 4분 읽기",
        "AWS에 대한 Morgan Stanley의 마진 예측은 AWS가 이미 벌어들인 수익에 가깝기 때문에 더 큰 문제는 AWS의 성장 속도가 계속 빨라지는지 여부입니다.",
        "분석가 Brian Nowak의 2028년 주당 순이익 중 약 16.50달러는 분석가 컨센서스인 13.26달러보다 약 24% 높습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, $350, $335. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, $350, $335. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2a293eb7c6f9f65b49a1",
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
      "headline": "Here's What a $5,000 Investment in AMD Could Be Worth by 2032",
      "headlineKo": "2032년까지 AMD에 대한 5,000달러 투자의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e92a027ba9371b337a4c714320c85eb34ac5f16f61f42dd4c873383c31e1cce3",
        "publishedAt": 1792436760,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2032년까지 AMD에 대한 5,000달러 투자의 가치는 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Advanced Micro Devices( AMD +1.76% ) 주식은 눈에 띄는 성과를 거두었습니다.",
        "AMD 주식의 인상적인 상승은 인공 지능(AI) 데이터 센터에 배포되는 회사의 서버 중앙 처리 장치(CPU) 및 그래픽 카드에 대한 건전한 수요에 의해 주도되었습니다.",
        "더욱이 회사는 높은 부품 가격으로 인해 업계가 극심한 압박을 받고 있음에도 불구하고 개인용 컴퓨터(PC) 시장에서 좋은 성적을 거두고 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $5,000, 58%, 107% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $5,000, 58%, 107% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "95405e7f92726d47aa5d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Q2 Earnings Highlights: Meta (NASDAQ:META) Vs The Rest Of The Social Networking Stocks",
      "headlineKo": "2분기 실적 하이라이트: 메타(NASDAQ:META) 대 나머지 소셜 네트워킹 주식",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=acfcceb235d1267311cb69db203f614ae0b3d028650efb3dcda18ca0c5ad7f01",
        "publishedAt": 1792436695,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Q2 Earnings Highlights: Meta (NASDAQ:META) Vs The Rest Of The Social Networking Stocks",
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
      "id": "bdf58dad04f3050349f7",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "LRCX",
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
      "headline": "Micron vs. Lam Research: Does Buying the Tool Supplier Reduce Memory-Cycle Risk?",
      "headlineKo": "Micron 대 Lam 연구: 도구 공급업체를 구매하면 메모리 주기 위험이 줄어듭니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6e86ea4141ff54d14491414a41d9714f577c17d27b8152fd2d7e7384c608ce8c",
        "publishedAt": 1792436224,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron vs. Lam Research: Does Buying the Tool Supplier Reduce Memory-Cycle Risk?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 LRCX의 사업과 관련된 'Micron vs. Lam Research: Does Buying the Tool Supplier Reduce Memory-Cycle Risk?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "LRCX",
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
      "id": "5574d3e85a424dae11b5",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "ASML",
      "relatedTickers": [
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ASML vs. Lam Research: How Much Protection Does Service Revenue Really Provide?",
      "headlineKo": "ASML 대 Lam 연구: 서비스 수익이 실제로 얼마나 많은 보호를 제공합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67d1b8fc651bbad45c1cff467a79c94141f2f14e2517da8189d0e02c322668c1",
        "publishedAt": 1792436210,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML vs. Lam Research: How Much Protection Does Service Revenue Really Provide?",
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
      "id": "78a55ce096990ae8926a",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "A $1.5 Trillion Anthropic IPO Still Pays Off for Google: “They’re Gonna Be Fine”",
      "headlineKo": "1조 5000억 달러 규모의 인류주 IPO가 여전히 Google에 성과를 거두고 있습니다: “그들은 괜찮을 것입니다”",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18e72b814343b1ffb34ab4d7ad4fddab0d68d71b6b54645cce845a7321725dec",
        "publishedAt": 1792436048,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "1조 5천억 달러 규모의 인류주 IPO가 여전히 Google에 성과를 거두고 있습니다. “그들은 괜찮을 것입니다” | TIKR.com General 투자로 1조 5천억 달러의 인류주적 IPO가 Google에 여전히 성과를 거두고 있습니다: “그들은 괜찮을 것입니다” David Beren • 5분 읽기 Rev",
        "1조 5천억 달러에 달하는 약 12%의 지분은 알파벳에게 약 1,800억 달러의 가치가 될 것이며, 이는 2025년 한 해 동안 알파벳이 벌어들인 것보다 더 많은 것입니다.",
        "분석가들은 Alphabet의 EPS가 2025년 10.81달러에서 2027년 15.29달러로 증가하고 주식은 25배의 향후 수익으로 거래될 것으로 예상합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.5 Trillion, $1.5 trillion, $2 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.5 Trillion, $1.5 trillion, $2 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0a29b7d3852ee13f280f",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Microsoft Walks Away From AI Data Center Deal, but SemiAnalysis Predicts 50-GW Boom in 2027",
      "headlineKo": "Microsoft는 AI 데이터 센터 거래에서 손을 떼지만 SemiAnalytic은 2027년에 50GW 붐을 예측합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d30ac0baba303f813e7df935792ae283a06a6d1c991cddbf9fd15b979ae63453",
        "publishedAt": 1792435586,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft는 데이터 센터 거래를 폐기하지만 SemiAnalytic은 2027년 호황을 예측합니다. - Microsoft(NASDAQ:MSFT) - Benzinga SPY 767.28 +0.53% QQQ 718.70 +1.25% BTC/USD — DIA 519.56 +0.09% GLD 379.82 −0.57% TLT 79.57 −0.61% US 로그인 내 계정 등록",
        "리서치 회사는 2027년 중국 외 지역의 새로운 데이터 센터 용량이 50기가와트에 달할 것으로 예상합니다. 이는 업계가 2024년 말까지 전체 역사 동안 해당 시장에 구축한 규모와 거의 맞먹는 규모입니다.",
        "낙관적인 전망은 Microsoft Corp.에서 나옵니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.53%, 1.25%, 0.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.53%, 1.25%, 0.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9f4385cc5afde794e53d",
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
      "headline": "Gary Black Predicts SpaceX Buys Tesla for “$420/Share” Within Weeks",
      "headlineKo": "게리 블랙(Gary Black)은 SpaceX가 몇 주 안에 Tesla를 주당 420달러에 인수할 것으로 예측합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=636a244322a27ddfaeb4e0c97eb8c469a42f3967b660941cee91d355edd185df",
        "publishedAt": 1792434978,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "게리 블랙(Gary Black)은 SpaceX가 몇 주 안에 Tesla를 \"주당 420달러\"에 인수할 것으로 예상합니다 | TIKR.com General Investing Gary Black은 SpaceX가 몇 주 안에 Tesla를 주당 \"$420\"에 인수할 것으로 예측합니다. David Beren • 5분 읽기 검토자: Michael Douglass 마지막",
        "Tesla의 자체 수익은 해당 가격을 감당할 수 없으므로 입찰 가치는 SpaceX의 주식과 성장에 달려 있습니다.",
        "분석가들은 SpaceX의 매출이 2026년 453억 달러에서 2028년 2,010억 달러로 증가할 것으로 예상하고 있으며, Tesla는 182배의 미래 수익으로 거래되고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $420, 18%, $354.72 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $420, 18%, $354.72 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "829568de7743299e237a",
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
      "headline": "Sandisk (SNDK) at 6 Times Forward Earnings, Is a Peak Already Priced In?",
      "headlineKo": "Sandisk(SNDK)는 6배의 수익을 창출하고 있으며 이미 최고점에 가격이 책정되어 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e2134f080ffbe825d164dd6faba2ebfd7e7e1359c6fe33c36623217a4442b189",
        "publishedAt": 1792434926,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk (SNDK) at 6 Times Forward Earnings, Is a Peak Already Priced In?",
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
      "id": "d809644cd27150ff4bdc",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Musk Love: Micron Is “Reasonable” on Memory Prices While Others Price-Gouge: “Today’s Customers Won’t Forget”",
      "headlineKo": "머스크 러브: 마이크론은 메모리 가격 '합리적', 다른 업체는 가격 횡령: '오늘의 고객은 잊지 않을 것'",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2b1d6f0ea3901dd3525c920783b70e12741dec819af23b05999c1fee4e5c7e92",
        "publishedAt": 1792433209,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "머스크 러브: 마이크론은 메모리 가격 '합리적', 다른 업체는 가격 횡령: '오늘의 고객은 잊지 않을 것' | TIKR.com 머스크 사랑에 투자하는 일반: Micron은 메모리 가격에 대해 \"합리적\"이지만 다른 P는",
        "Micron의 최대 계약은 2026년 2분기 시장 수준에 가까운 가격으로 가격을 제한하여 JPMorgan의 계산에 따르면 2030년까지 매출의 3분의 1 이상을 차지하는 수익의 일부 상승 여력을 포기합니다.",
        "머스크가 중국의 저전력 메모리 시장 진출이 \"다른 이야기\"를 만들 것이라고 말한 2028년에는 이 거래가 가장 중요하다. 마이크론의 총마진은 회계연도 4분기에도 여전히 87%에 이르렀다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $150 billion, 87%, 35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $150 billion, 87%, 35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bb5df90050b0e8ee0683",
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
      "headline": "Wall Street Projects A Down Quarter For Tesla Earnings; Stock Rebounds",
      "headlineKo": "월스트리트, Tesla 수익 분기 감소 예상; 주식 반등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a11db5252b334bdeb906eaa05d824b83649fce8d3c1fd0ff7b08fc3141632bbb",
        "publishedAt": 1792431805,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트, Tesla 수익 분기 감소 예상; 주식 반등"
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
      "id": "c11ece71bb149befb39a",
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
      "headline": "Apple Confirms October 28 ‘Pro And Tell’ Event — First Touchscreen MacBook Pro Expected",
      "headlineKo": "Apple, 10월 28일 'Pro And Tell' 이벤트 확인 — 최초의 터치스크린 MacBook Pro 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=522773942a919b923a94eb66756e848a851f89569c35a3e3afdb53e4bc65736e",
        "publishedAt": 1792431800,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 0.15%, 0.50%, 1.31%, 7.73%, 2.16%, 1.13%, 36.56%, 5.16%.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple Confirms October 28 ‘Pro And Tell’ Event — First Touchscreen MacBook Pro Expected' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0cbf11404a799e09f698",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "INTC",
        "MSFT",
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
      "headline": "Third Wheel: Microsoft’s AI Chips Are “Nowhere Close” to NVIDIA or Google per Analyst",
      "headlineKo": "세 번째 바퀴: 분석가에 따르면 Microsoft의 AI 칩은 NVIDIA 또는 Google과 \"가까운 곳\"이 아닙니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d356008737ad0973ae39a2056c6920efdb85d20d35590700cbb6dbc37997245",
        "publishedAt": 1792431607,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "세 번째 바퀴: 분석가에 따르면 Microsoft의 AI 칩은 NVIDIA 또는 Google과 \"가까운 곳\"이 아닙니다 | TIKR.com 일반 투자 세 번째 바퀴: 분석가 Roxanna Maglangit에 따르면 Microsoft의 AI 칩은 NVIDIA 또는 Google과 “가까운 곳이 없습니다” • 5",
        "Bloomberg Intelligence 분석가 Mandeep Singh은 Microsoft의 칩이 맞춤형 칩 경쟁에서 Alphabet을 앞서게 하는 Google의 TPU나 NVIDIA와 “가까울 수 없다”고 말했습니다.",
        "2026년 6월에 종료된 회계연도에 Microsoft의 자본 지출은 1,160억 달러에 이르렀으며 이는 4년 전 수준의 거의 5배에 달했으며 NVIDIA는 3년 연속 총 마진을 70% 이상 유지했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $116 billion, 70%, 40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $116 billion, 70%, 40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "96292ebd3e91da720c01",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Magnificent 7 Earnings Preview: Meta & Tesla Take Center Stage This Week",
      "headlineKo": "장엄한 7개 수익 미리보기: 이번 주 Meta와 Tesla가 주목을 받음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aea6f77ad1ff1d7f362ddd1e75e80d8b0a54c61002da2a924a9b864a963eb2e9",
        "publishedAt": 1792431300,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Magnificent 7 Earnings Preview: Meta & Tesla Take Center Stage This Week",
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
      "id": "f26d30a112caaf597eb2",
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
      "headline": "Nvidia (NVDA) Stock Price Lags Massive Earnings Growth—A Compelling Value Opportunity",
      "headlineKo": "엔비디아(NVDA) 주가가 대규모 수익 성장을 뒤처져 - 매력적인 가치 기회",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13ef4de1709f0126d56e6b9784b9bf4dc02b4e2a16ba9c7225df3b764617ae43",
        "publishedAt": 1792431136,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔비디아(NVDA) 주가가 대규모 수익 성장을 뒤처져 - 매력적인 가치 기회"
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
      "id": "baa0d790fd5c9d59bf81",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Why Did Lumentum Stock Fall?",
      "headlineKo": "Lumentum 주식이 하락한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5931f07629db3cf76a5dbbbb987d2a36d40046b9c6014778de4e3e792a1c07f0",
        "publishedAt": 1792431134,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis Why Did Lumentum Stock Fall?",
        "October 19th, 2026 · by Trefis Team LITE YTD +123.2% SPY YTD +13.4% QQQ YTD +17.1% Analyze LITE → Shares of Lumentum (LITE) fell 25.3% in the five trading sessions from October 9 to October 16, 2026.",
        "The S&P 500 lost 1.9% over the same stretch."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 123.2%, 13.4%, 17.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LITE에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 123.2%, 13.4%, 17.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "0e3ae56299bc90968508",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "SPY",
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
      "headline": "Where Will Vertiv Stock Be in 1 Year?",
      "headlineKo": "Vertiv 주식은 1년 후 어디에 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=98b26193ea3693ccac8d7387ce196d9b2b973cc9712f3c2ac7e8f2c8b5ae6a25",
        "publishedAt": 1792430100,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv 주식은 1년 후 어디에 있을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% 데이터 c용 열 관리, 액체 냉각 및 무정전 전원 공급 장치(UPS) 시스템 제공업체인 The Motley Fool Vertiv( VRT -1.22% )에 참여하세요.",
        "5월 14일 주가는 주당 376.06달러로 사상 최고치를 기록하며 지난 3년 동안 2,390%의 상승률을 기록했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $376.06, 2,390%, $211. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $376.06, 2,390%, $211. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "844472acb46e221b94d3",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "GLW, VZ, COHR In Focus As AI Fiber Shortage Drives Prices Higher — TrendForce Sees Supply Crunch Through 2028",
      "headlineKo": "AI 섬유 부족으로 인해 가격이 상승함에 따라 GLW, VZ, COHR에 주목 - TrendForce는 2028년까지 공급 위기를 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7338b03f36359df8ead95869e3f85bb510ab485bcb98b7cf16f7f99405289a2f",
        "publishedAt": 1792429764,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GLW, VZ, COHR In Focus As AI Fiber Shortage Drives Prices Higher — TrendForce Sees Supply Crunch Through 2028",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "067bf49649423f2a4a48",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Is Micron Technology (MU) Betting More On AI Memory Than Smartphones?",
      "headlineKo": "마이크론 테크놀로지(MU)가 스마트폰보다 AI 메모리에 더 많이 투자하는 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b5ed6cd93bf32628c61c2228da7454ffc64ee8df78eff44006b1d387570e8a4",
        "publishedAt": 1792429760,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 테크놀로지(MU)가 스마트폰보다 AI 메모리에 더 많이 투자하는 이유는 무엇입니까?"
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
      "id": "a390daf5495857109f84",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AVGO",
        "GOOGL",
        "MRVL",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell Jumps 6% as GF Securities Says Google Chip Delay Won’t Dent Its Position; Broadcom Rises 3%",
      "headlineKo": "GF Securities가 Google 칩 지연으로 인해 위치가 훼손되지 않을 것이라고 Marvell이 6% 상승했습니다. 브로드컴 3% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f646b562aa3ac37aa7f2b73570329bd642c4eebfee2483f939c356f0d2f7b7b",
        "publishedAt": 1792429706,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GF Securities가 Google 칩 지연으로 인해 포지션이 훼손되지 않을 것이라고 Marvell이 6% 상승했습니다. Broadcom은 3% 상승 - 월스트리트 24/7",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,705.60 +0.53% Dow Jones 52,046.40 +0.09% Nasdaq 100 29,584.60 +1.27% Russell 2000 2,732.80 +0.29% S&P 500 7,705.60 +0.53% 다우존스 52,046.40 +0.09% 나스닥 100 29,584.60 +1.27% 러셀 2000 2,732.80 +0.",
        "David Moadel 작성 2026년 10월 19일 오후 1시 8분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 3%, $241.27, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, 3%, $241.27, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f7d0bc4d550a62f387a1",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR",
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
      "headline": "Optics Stocks Rally Ahead of Earnings: Applied Optoelectronics Jumps 5%, Lumentum Adds 4%, Coherent Rises 2%",
      "headlineKo": "실적에 앞서 광학 주식 랠리: Applied Optoelectronics 5% 점프, Lumentum 4% 추가, Coherent 2% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=104718aad5d3ecaa1f389ff4a5613d807e44aea3df722e3ca62d7aeec8bb83e7",
        "publishedAt": 1792429510,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "실적에 앞서 광학 주식 랠리: Applied Optoelectronics 5% 점프, Lumentum 4% 추가, Coherent 2% 상승"
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
          "ticker": "COHR",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "687c52f525b4fd117b69",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR",
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
      "headline": "Optics Stocks Rally Ahead of Earnings: Applied Optoelectronics Jumps 5%, Lumentum Adds 4%, Coherent Rises 2%",
      "headlineKo": "실적에 앞서 광학 주식 랠리: Applied Optoelectronics 5% 점프, Lumentum 4% 추가, Coherent 2% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=104718aad5d3ecaa1f389ff4a5613d807e44aea3df722e3ca62d7aeec8bb83e7",
        "publishedAt": 1792429510,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "실적에 앞서 광학 주식 반등: Applied Optoelectronics는 5% 상승, Lumentum은 4% 추가, Coherent는 2% 상승 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,744.80 +0.51% Dow Jones 52,602.00 +1.07% Nasdaq 100 29,665.80 +0.27% Russell 2000 2,776.94 +1.62% S&P 500 7,744.80 +0.51% 다우존스 52,602.00 +1.07% 나스닥 100 29,665.80 +0.27% 러셀 2000 2,776.94 +1.",
        "© Shutterstock Applied Optoelectronics ( NASDAQ:AAOI ) 주가는 다가오는 수익 보고서를 앞두고 광학 분야의 이름이 상승함에 따라 월요일에 5% 상승한 79.01달러를 기록했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 4%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 4%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "15f29a94c70e212a02fc",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "What Could Vertiv Stock Be Worth In Three Years?",
      "headlineKo": "3년 후 Vertiv 주식의 가치는 얼마나 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a64c0bf5ec311d652a647e458573f59f437856c2193b36b2cbd16e095f4a7706",
        "publishedAt": 1792429007,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "3년 후 Vertiv 주식의 가치는 얼마나 될까요?",
        "| Trefis 3년 후 Vertiv 주식의 가치는 얼마나 될까요?",
        "2026년 10월 19일 · Trefis Team VRT YTD +27.3% SPY YTD +13.0% XLI YTD +8.0% VRT 분석 → Vertiv(VRT)는 전력 및 냉각 장비를 데이터 센터에 판매합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 27.3%, 13.0%, 8.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 27.3%, 13.0%, 8.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bc5a2c9c21c306efb675",
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
      "headline": "Why Palantir Technologies Stock Rallied Today",
      "headlineKo": "Palantir Technologies 주식이 오늘 반등한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0892755b023cc0bdc4fdd470238f62ffbe4d3c10f26fcafbb2b5eeefcb3a25f4",
        "publishedAt": 1792428667,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Technologies 주식이 오늘 반등한 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Palantir Technologies( PLTR +4.37% ) 주가는 월요일 오전에 급격하게 상승했습니다.",
        "데이터 마이닝 및 인공 지능(AI) 소프트웨어 전문가를 더 높은 수준으로 끌어올린 촉매제는 기술의 가용성을 확장하는 새로운 파트너십이었습니다.",
        "Palantir에 대한 액세스는 더 많았습니다. 월요일 아침 발표된 보도 자료에서 Palantir는 세계 최대의 연방 및 국방부(DoD) 관리 클라우드 제공업체 중 하나인 Knox Systems와의 새로운 파트너십을 발표했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.5%, $194.15, $8.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.5%, $194.15, $8.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "aa332295551a779201ca",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arista Networks Is Heading for a Big Test on Nov. 3. Here's What Could Send the Stock Soaring.",
      "headlineKo": "Arista Networks는 11월 3일 대규모 테스트를 앞두고 있습니다. 주가를 급등시킬 수 있는 요인은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=768c15ffaabc19c3c5a03f9251041eaf22bcb49281c447b7383667e5e5879e8b",
        "publishedAt": 1792428600,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista Networks는 11월에 대규모 테스트를 앞두고 있습니다.",
        "주식이 급등할 수 있는 요인은 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Arista Networks( ANET +3.37% )는 11월 3분기 실적을 발표할 예정입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $3.6 billion, $1.15, $3.03 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $3.6 billion, $1.15, $3.03 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "162b120cb058c87a2710",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet Poised for Strong Third-Quarter Search Revenue Growth, Deutsche Bank Says",
      "headlineKo": "도이체방크(Deutsche Bank)는 알파벳이 강력한 3분기 검색 매출 성장을 이룰 것이라고 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e83f4200675408bc0adca7cb17297b9fd995d1f991813daf2a7f523eb965ec26",
        "publishedAt": 1792428574,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "도이체방크(Deutsche Bank)는 알파벳이 강력한 3분기 검색 매출 성장을 이룰 것이라고 밝혔습니다."
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
      "id": "70e625155d14ffc34cfa",
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
      "headline": "PLTR Stock Gains After Palantir Expands Federal Push With Knox Systems Partnership",
      "headlineKo": "Palantir가 Knox Systems 파트너십을 통해 연방 정부의 추진을 확대한 후 PLTR 주가 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b453973789e370eb738fece6edca1053901f74fb18354f08c4fb3f1399a0bdc5",
        "publishedAt": 1792428375,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir가 Knox Systems 파트너십을 통해 연방 정부의 추진을 확대한 후 PLTR 주가 상승"
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
      "id": "2fba87a0aa1f9f1d8cd2",
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
      "headline": "Meta Stock Extends Slide As Big Earnings Test Approaches",
      "headlineKo": "큰 수익 테스트가 다가옴에 따라 메타 주식이 슬라이드를 확장합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00337aa3cc5c383617a5755c476e59de3cf19f922d146ee3943f69886e8be244",
        "publishedAt": 1792425633,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "큰 수익 테스트가 다가옴에 따라 메타 주식이 슬라이드를 확장합니다."
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
      "id": "12406ae5245631b7f5ba",
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
      "headline": "Intel Stock Surges After an Upgrade. ‘Our Confidence Is Building,’ Says JPMorgan",
      "headlineKo": "업그레이드 후 인텔 주식이 급등합니다. JPMorgan은 '우리의 자신감이 형성되고 있습니다'라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bdcfc8714938bf197d842571422f99670effb8f01a75a69f6649aa59de0d47c9",
        "publishedAt": 1792425473,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "업그레이드 후 인텔 주식이 급등합니다.",
        "JPMorgan Top Stories S&P 500, Nasdaq 상승, 기술주 반등으로 '우리의 자신감이 쌓이고 있다' Elon Musk는 어디에나 있습니다.",
        "사회보장 부양책으로 치솟는 비용을 감당할 수 있을까요?"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, $95, $85. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, $95, $85. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e13f4a9d70377623b593",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Why Is ASML Holding (ENXTAM:ASML) Teaming Up On Next Generation FinFET 3D Chips?",
      "headlineKo": "ASML Holding(ENXTAM:ASML)이 차세대 FinFET 3D 칩을 위해 협력하는 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5926958ab4bd4647d8639b649d847fe5bbc39653531573bcb9b67a795726ebfb",
        "publishedAt": 1792422685,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Is ASML Holding (ENXTAM:ASML) Teaming Up On Next Generation FinFET 3D Chips?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 ASML의 사업과 관련된 'Why Is ASML Holding (ENXTAM:ASML) Teaming Up On Next Generation FinFET 3D Chips?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "35bc7082398e0e25c792",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Will Hubbell (HUBB) Beat Estimates Again in Its Next Earnings Report?",
      "headlineKo": "Hubbell(HUBB)이 다음 수익 보고서에서 다시 추정치를 상회할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13af7f9ddf362f2dc444e635b94d748cd2bdc3a77802c9c76d7c05e1f1eca9eb",
        "publishedAt": 1792422603,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Will Hubbell (HUBB) Beat Estimates Again in Its Next Earnings Report?",
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
      "id": "6b9d7ab15917bc19f9f6",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ASML Holding N.V. (ASML) Q3 2026 Earnings Call Transcript",
      "headlineKo": "ASML Holding N.V. (ASML) 2026년 3분기 실적 통화 기록",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9a4e63544ee11736bb03b936547eedf36b1b8127668a0ab555d2c89b919937ba",
        "publishedAt": 1792422243,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML Holding N.V. (ASML) 2026년 3분기 실적 통화 기록"
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
      "id": "362eb0b93be0e7cc4bb8",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM"
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
      "headline": "CRM SEC Form 8-K filed",
      "headlineKo": "CRM SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1108524/000119312526425881/d516983d8k.htm",
        "publishedAt": 1792422000.0,
        "collectedAt": 1792576487.276047
      },
      "confirmedFacts": [
        "CRM가 2026-10-20에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 규정 FD 공개 · 재무제표·첨부자료",
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
          "ticker": "CRM",
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
      "id": "6be1d306a2cdacb31d22",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMD",
        "INTC",
        "MU",
        "NVDA",
        "ORCL"
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
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel leads chip stocks higher as investors jump back into AI trade",
      "headlineKo": "투자자들이 AI 거래에 다시 뛰어들면서 인텔은 칩 주식을 더 높게 이끌었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2820dde5cd99817f9b1e95d390cdea94731c177e10050c3fee1068a3326c294a",
        "publishedAt": 1792418246,
        "collectedAt": 1792575880.186299
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
        "이 기사는 INTC의 사업과 관련된 'Intel leads chip stocks higher as investors jump back into AI trade' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9cd02c65371460f9af6d",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AI capex may be Meta's biggest earnings test",
      "headlineKo": "AI 투자는 메타의 가장 큰 수익 테스트일 수 있다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a001072ac79fc56e0330c164b1c06b9cb58c1aabead2f65bee164d5b996d89f4",
        "publishedAt": 1792417632,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI capex may be Meta's biggest earnings test",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "5f5d5d8dccbf201cb8d1",
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
      "headline": "Earnings live updates: All eyes on Musk and Meta as Q3 earnings rev up",
      "headlineKo": "수익 라이브 업데이트: 3분기 수익이 증가함에 따라 머스크와 메타에 모든 이목이 쏠리고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34f9faf16d66331ad839b502d4853564f0f2f412edd88961d20fe5eab4e25f10",
        "publishedAt": 1792417312,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Earnings live updates: All eyes on Musk and Meta as Q3 earnings rev up",
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
      "id": "1817cd8db144ee3beec9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
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
      "headline": "Microsoft vs. Amazon: Is AMZN’s AI Growth Being Undervalued by Investors?",
      "headlineKo": "Microsoft 대 Amazon: AMZN의 AI 성장이 투자자들에 의해 과소평가되고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af9f985fb0e6b4ac71d751ad4591e5b84d88a58eb40a40daed7c5a3b949f62e7",
        "publishedAt": 1792416968,
        "collectedAt": 1792575880.186299
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
        "이 기사는 AMZN의 사업과 관련된 'Microsoft vs. Amazon: Is AMZN’s AI Growth Being Undervalued by Investors?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "09536402e980d56bba28",
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
      "headline": "Meta vs. Alphabet: Is GOOGL’s AI Growth Being Overlooked by Investors?",
      "headlineKo": "메타 대 알파벳: GOOGL의 AI 성장이 투자자들에 의해 간과되고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f12a28744673abb85037bf7645caa0344d4eac93ceda73428ccf7f4aecd5044",
        "publishedAt": 1792416869,
        "collectedAt": 1792575880.186299
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
        "이 기사는 GOOGL의 사업과 관련된 'Meta vs. Alphabet: Is GOOGL’s AI Growth Being Overlooked by Investors?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ecf353f7baa6b682f353",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
        "LITE",
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
      "headline": "Arm vs. Lumentum: Which Tech Stock Is a Better Buy in 2026?",
      "headlineKo": "Arm 대 Lumentum: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8fba0afae2cc32e26228e8ed25398450b4517b77a764900429b4d72eac6409b",
        "publishedAt": 1792416001,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum: 2026년에는 어떤 기술 주식이 더 나은 구매입니까?",
        "| The Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % The Motley Fool 가입 인공지능 (AI) 이 컴퓨팅 성능과 데이터 전송을 새로운 한계로 밀어붙이면서 투자자들은 서로 다른 길을 걷고 있습니다.",
        "Arm Holdings (ARM -3.06%) 또는 Lumentum Holdings (LITE -1.44%) 가 오늘날 더 나은 선택입니까?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3.06%, 1.44%, $221.06 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.06%, 1.44%, $221.06 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "707c8bab2c00f2e08d0f",
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
      "headline": "Prediction: This Will Be Micron's Stock Price By the End of 2027",
      "headlineKo": "예측: 이는 2027년 말까지 Micron의 주가가 될 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d124bbb9d657fee68a655ab9e06d3e56c0a10f09ae689dbf42adc40bf1e556b3",
        "publishedAt": 1792416000,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 2027년 말까지 Micron의 주가가 될 것 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron Technologies( MU +5.22% )는 오랫동안 상대적으로 지루했습니다.",
        "2000년 닷컴 거품이 정점에 달한 이후 이 회사는 수요가 적고 경쟁이 치열해 다른 거대 기술 기업에 비해 성장 전망이 침식되면서 장기간의 침체에 직면했습니다.",
        "그러나 2022년 ChatGPT 출시로 완전히 새로운 산업인 생성 인공 지능(AI)이 촉발되면서 모든 것이 바뀌었습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 333%, 379%, $54.23 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 333%, 379%, $54.23 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8c9ee82421f66cb48d48",
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
      "headline": "Google Partner Novacore Labs and AIBotics Complete Acquisition of Assets, Expanding AI, Drone, Mapping and Automation Platform in Jamaica",
      "headlineKo": "Google 파트너 Novacore Labs 및 AIBotics, 자산 인수 완료, 자메이카에서 ​​AI, 드론, 매핑 및 자동화 플랫폼 확장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d30c0be85e3c5cb4d995cd7af1e3c65887f0756b7bf30ac4c091d4727b48551c",
        "publishedAt": 1792415700,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google Partner Novacore Labs and AIBotics Complete Acquisition of Assets, Expanding AI, Drone, Mapping and Automation Platform in Jamaica",
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
      "id": "07bab55518f64b200191",
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
      "headline": "Meta's AI vision doesn't come cheap, and its earnings could prove it",
      "headlineKo": "Meta의 AI 비전은 저렴하지 않으며 수익이 이를 증명할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b9145778c9f21de7b58bdc3d2de617b4a8740b27a63ce452d97e0c65a5e6edf8",
        "publishedAt": 1792415239,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta의 AI 비전은 저렴하지 않으며 수익이 이를 증명할 수 있습니다."
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
      "id": "ae4459e7ad570684b8f3",
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
      "headline": "Prediction: Oracle’s Next Chapter Could Be Huge for Shareholders",
      "headlineKo": "예측: 오라클의 다음 장은 주주들에게 엄청난 변화가 될 수 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a00d0c1c3af0c6f9b1b341ab525ba5b84277b860c1685500baed3380cd304b21",
        "publishedAt": 1792414802,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 오라클의 다음 장은 주주들에게 엄청난 일이 될 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,705.60 +0.53% Dow Jones 52,046.40 +0.09% Nasdaq 100 29,584.60 +1.27% Russell 2000 2,732.80 +0.29% S&P 500 7,705.60 +0.53% 다우존스 52,046.40 +0.09% 나스닥 100 29,584.60 +1.27% 러셀 2000 2,732.80 +0.",
        "Vandita Jadeja 작성 2026년 10월 19일 오전 9시(ET) 게시 · 3분 읽기 가격 목표 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $200.70, $133.28, 50.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $200.70, $133.28, 50.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "125d3fd3c7cdb0487be4",
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
      "headline": "Red Hat Expands Availability of Its Industry-Leading Hybrid Cloud Platforms on Oracle Cloud Infrastructure",
      "headlineKo": "Red Hat, Oracle Cloud Infrastructure에서 업계 최고의 하이브리드 클라우드 플랫폼 가용성 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=888420fd5247dbc3a598c280ca2224b50a4b85a0272c5c0c893a5127672ae31b",
        "publishedAt": 1792414800,
        "collectedAt": 1792575880.186299
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
        "이 기사는 ORCL의 사업과 관련된 'Red Hat Expands Availability of Its Industry-Leading Hybrid Cloud Platforms on Oracle Cloud Infrastructure' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "6b8073cf0dbe9b4a96e2",
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
      "headline": "Is Broadcom Stock Cheap Enough Yet?",
      "headlineKo": "Broadcom 주식은 아직 충분히 저렴합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a11a1838916cb8477ab6531b4da3b7ee16e15a313e124058a017690843dc338",
        "publishedAt": 1792414549,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom 주식은 아직 충분히 저렴합니까?",
        "| Trefis는 아직 Broadcom 주식이 충분히 저렴합니까?",
        "2026년 10월 19일 · Trefis 팀 AVGO YTD -4.5% SPY YTD +12.5% ​​QQQ YTD +15.8% AVGO 분석 → Broadcom(AVGO) 주식은 2026년 10월 16일 $328.75로 마감되었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.5%, 12.5%, 15.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.5%, 12.5%, 15.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2b059a85b8e8efff6d23",
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
      "headline": "Broadcom Vs. Marvell: Custom Silicon is Going to Get White Hot",
      "headlineKo": "브로드컴 대. Marvell: 맞춤형 실리콘이 뜨거워질 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c2aaeb48ec7b4e73aa3ec89e8bee46a18b1b9a8b65d3fc4c4b13a34e5a9a071",
        "publishedAt": 1792413948,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell: 맞춤형 실리콘이 뜨거워질 것입니다 - 연중무휴 월스트리트",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,728.10 +0.82% Dow Jones 52,097.60 +0.19% Nasdaq 100 29,784.20 +1.95% Russell 2000 2,741.19 +0.60% S&P 500 7,728.10 +0.82% 다우존스 52,097.60 +0.19% 나스닥 100 29,784.20 +1.95% 러셀 2000 2,741.19 +0.",
        "Marvell: 맞춤형 실리콘이 대세를 이룰 예정입니다. Broadcom과 Marvell은 모두 이번 여름 AI 수치가 폭발적이라고 보고했습니다. 그러나 그들은 완전히 다른 각도에서 맞춤형 실리콘 붐을 쫓고 있으며, 이러한 각도 중 하나만이 1년 동안 살아남을 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $16.70, 221%, 46% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $16.70, 221%, 46% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "af15e90efda88b940dd0",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Lam Research Imploded By 20% In The Last 3 Months: This Respected Wall Street Firm Says It’s About to Double",
      "headlineKo": "Lam Research, 지난 3개월 동안 20% 폭락: 이 존경받는 월스트리트 기업은 곧 두 배로 성장할 것이라고 말합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43ca83c5777b1ae7ee2a960ec6e298916a1a5a968772dd2e06c45828ec6b75f4",
        "publishedAt": 1792413932,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research, 지난 3개월 동안 20% 폭락: 이 존경받는 월스트리트 기업은 곧 두 배 성장할 것이라고 말합니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,705.60 +0.53% Dow Jones 52,046.40 +0.09% Nasdaq 100 29,584.60 +1.27% Russell 2000 2,732.80 +0.29% S&P 500 7,705.60 +0.53% 다우존스 52,046.40 +0.09% 나스닥 100 29,584.60 +1.27% 러셀 2000 2,732.80 +0.",
        "작성자: Alex Sirois 2026년 10월 19일 오전 8시 45분(ET) 게시 · 4분 분량 𝕏 f ⧉ 이 차트는 Lam Research의 최근 주요 분석가 합의 목표 대비 20% 가격 하락을 보여주며, 42% 이상의 잠재적 상승 여력을 강조합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 42%, $263.94, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, 42%, $263.94, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "acb63be1aff9910c8d5a",
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
      "headline": "Palantir and Knox Systems Announce Partnership to Accelerate Federal Software Deployment",
      "headlineKo": "Palantir와 Knox Systems, 연방 소프트웨어 배포 가속화를 위한 파트너십 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8990f2af56bf598fd9a2376300737649c344728fe6a5db620d35cd3548d95159",
        "publishedAt": 1792413885,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir와 Knox Systems는 연방 소프트웨어 배포 보드를 가속화하기 위한 파트너십을 발표합니다: 인용문: 즐겨찾기 인기 모니터 무버 레벨 2 뉴스 메뉴 보드 주식 상품 외환 암호화폐 라운지 고급 검색 뉴스 모든 C",
        "시작하기 Palantir와 Knox Systems는 연방 소프트웨어 배포를 가속화하기 위한 파트너십 발표 Fiona Craig NASDAQ:PLTR 최신 뉴스 2026년 10월 19일 오전 8:44 © Adobe Stock 이미지 Palantir Technologies(NASDAQ:PLTR)와 Knox Systems는",
        "이번 계약은 공인된 정부 인프라를 통해 소프트웨어를 배포한 Palantir의 경험과 Knox Systems의 관리형 연방 클라우드 서비스를 결합하게 됩니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
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
      "id": "0a94cd14940f382573b0",
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
      "headline": "Accenture Expands Federal AI Push With Google's Gemini Agents, Months After OpenAI Partnership",
      "headlineKo": "Accenture, OpenAI 파트너십 이후 몇 달 만에 Google의 Gemini 에이전트를 통해 연방 AI 추진 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=013eba658d35dcfe04dfd600de98246cc906d8ae9ad75095ff1b45b40d09cb77",
        "publishedAt": 1792413700,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Accenture, OpenAI 파트너십 이후 몇 달 만에 Google의 Gemini 에이전트를 통해 연방 AI 추진 확대"
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
      "id": "d2d3306dbe2ad909d812",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Comfort Systems Stock Before Q3 Earnings: Here's What to Expect",
      "headlineKo": "3분기 실적 전 Comfort Systems 주식: 예상되는 내용은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=33ae8c43fe8508b8651cddbbd096833c7e273d433e9200ef4dfa7666b842eb4b",
        "publishedAt": 1792413480,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Comfort Systems Stock Before Q3 Earnings: Here's What to Expect",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "FIX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "FIX에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "1fc67f52948919ac2cb2",
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
      "headline": "Tesla Stock vs. the S&P 500: Which Investment Wins Through 2030?",
      "headlineKo": "Tesla 주식 vs. S&P 500: 2030년까지 어느 투자가 승리할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=373748d8d378652d41f3e454a51e5adfb7febcb8ee67453d7d8e8e6afef6e9ba",
        "publishedAt": 1792413120,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500: 2030년까지 어떤 투자가 승리할 것인가?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool에 합류하세요 당신이 Tesla의 황소이든 곰이든 간에( TSLA +3.75% ), Tesla는 아마도 가장 흥미롭고 뜨거운 논쟁을 불러일으키는 주식 중 하나일 것입니다.",
        "전기 자동차(EV) 선두주자인 이 자동차는 오랫동안 기다려온 로드스터를 공개했습니다. 이 자동차에는 짧은 시간 동안 비행하고 호버링할 수 있는 로켓 추진기가 탑재되어 있다는 점이 추가되었습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $368.03, $13.31, 3.75% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $368.03, $13.31, 3.75% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "857460b1962443ca793b",
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
      "headline": "LRCX to Report Q1 Earnings: Should You Buy, Hold or Sell the Stock?",
      "headlineKo": "LRCX, 1분기 수익 보고: 주식을 매수, 보유, 매도해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00f243f55bfcb5809275cc6b6c6d0457e4fb912c33a726caab36e84e0ad625fb",
        "publishedAt": 1792412580,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "LRCX to Report Q1 Earnings: Should You Buy, Hold or Sell the Stock?",
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
      "id": "aa76f297870b3ac855f4",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla-SpaceX Merger Mania Strikes Wall Street Ahead of Earnings",
      "headlineKo": "Tesla-SpaceX 합병 매니아, 수익보다 월스트리트 공격",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=42404ef0817e79c786a4ba545ccb1c60cdc1f964762371de79b15415eadcfa09",
        "publishedAt": 1792411440,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla-SpaceX Merger Mania Strikes Wall Street Ahead of Earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "d100c41031d24b511f96",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "GOOGL",
        "META",
        "MU",
        "NVDA",
        "TSLA"
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
      "headline": "Meta, Tesla, Nvidia, Micron and Alphabet  are part of Zacks Earnings Preview",
      "headlineKo": "Meta, Tesla, Nvidia, Micron 및 Alphabet은 Zacks Earnings Preview의 일부입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a175441205bb723b75708a0d220fd82f9d98946eff641271df99ad1c8f28e0ce",
        "publishedAt": 1792411200,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta, Tesla, Nvidia, Micron 및 Alphabet은 Zacks Earnings Preview의 일부입니다."
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
      "id": "97c4fdd697b78f2d396e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Applied Materials Cratered 20% Since July: Multiple Wall Street Firms Predict It’s Going to More Than Double From Here",
      "headlineKo": "Applied Materials는 7월 이후 20% 하락: 여러 월스트리트 기업에서는 여기에서 두 배 이상 증가할 것으로 예측합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0d45f0502e7885a4923cbfc1f33746accdfb7bcf4f02d5931b61327ba1c5b02a",
        "publishedAt": 1792408522,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials는 7월 이후 20% 하락: 여러 월스트리트 기업에서는 여기에서 두 배 이상 증가할 것으로 예측합니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,728.10 +0.82% Dow Jones 52,097.60 +0.19% Nasdaq 100 29,784.20 +1.95% Russell 2000 2,741.19 +0.60% S&P 500 7,728.10 +0.82% 다우존스 52,097.60 +0.19% 나스닥 100 29,784.20 +1.95% 러셀 2000 2,741.19 +0.",
        "여기 단절이 반도체 장비 지출 위치에 대해 밝혀낸 내용이 있습니다... 작성자 Alex Sirois 2026년 10월 19일 게시, 오전 7시 15분(ET) · 3분 읽기 𝕏 f ⧉ 상승하는 선 그래프가 집적 회로 칩을 오버레이하여 시장 실적을 시각적으로 나타냅니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, $409.29., $627.83, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, $409.29., $627.83, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2376e3f1198bd15c0e65",
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
      "headline": "Oracle (ORCL) Could Be 33% Below Fair Value On Project Jupiter Emissions Cut",
      "headlineKo": "Oracle(ORCL)은 프로젝트 Jupiter 배출량 감축에 대한 공정 가치보다 33% 낮을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6c21d21a1b927a297b0d0fd8f282c56dbe99dfef97579e6679fac515121beeb",
        "publishedAt": 1792408303,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle(ORCL)은 프로젝트 Jupiter 배출량 감축에 대한 공정 가치보다 33% 낮을 수 있습니다."
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
      "id": "965025493a62a5eede03",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What to Expect From Coherent's Next Quarterly Earnings Report",
      "headlineKo": "Coherent의 다음 분기별 수익 보고서에서 기대할 수 있는 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=acb0d25170eb978c9fef642157ca2ad50cd6bbfbfe776e6fb98c39ea0d035ec9",
        "publishedAt": 1792407569,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Coherent의 다음 분기별 수익 보고서에서 기대할 수 있는 사항"
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
          "ticker": "COHR",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "31f05914e82367045315",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "AMD",
        "ASML",
        "INTC",
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
      "headline": "Global Fin Field-Effect Transistor (FinFET) 3D Transistors Market Report 2026 | Capitalize on AI, 5G and Sub-7nm Demand as TSMC, Samsung, Intel and ASML Accelerate Scale",
      "headlineKo": "글로벌 핀 전계 효과 트랜지스터(FinFET) 3D 트랜지스터 시장 보고서 2026 | TSMC, Samsung, Intel 및 ASML이 규모를 가속화함에 따라 AI, 5G 및 Sub-7nm 수요를 활용하세요",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df35a9ae1b17f04bfa5908618864e03c3b43334eec574202914e5b874bf96d82",
        "publishedAt": 1792407480,
        "collectedAt": 1792575880.186299
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
        "이 기사는 ASML의 사업과 관련된 'Global Fin Field-Effect Transistor (FinFET) 3D Transistors Market Report 2026 | Capitalize on AI, 5G and Sub-7nm Demand as TSMC, Samsung, Intel and ASML Accelerate Scale' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "2b9b822ef8952ef5a21e",
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
      "headline": "Global Photonic Integrated Circuits Market Report 2026 | Capitalize on 19.3% CAGR Through 2030 as STMicroelectronics, GlobalFoundries, Coherent and Ayar Labs Accelerate AI Data Centers",
      "headlineKo": "글로벌 광집적 회로 시장 보고서 2026 | STMicroelectronics, GlobalFoundries, Coherent 및 Ayar Labs의 AI 데이터 센터 가속화에 따라 2030년까지 CAGR 19.3% 활용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db7c636962c841d2b328221d0c5a16d3013cdd731483b25e687241acb5b5f842",
        "publishedAt": 1792407060,
        "collectedAt": 1792575880.186299
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
        "이 기사는 COHR의 사업과 관련된 'Global Photonic Integrated Circuits Market Report 2026 | Capitalize on 19.3% CAGR Through 2030 as STMicroelectronics, GlobalFoundries, Coherent and Ayar Labs Accelerate AI Data Centers' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d56a24222d60bc99a107",
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
      "headline": "Sandisk Stock Fell 18% on a DRAM Scare. Is It Mispriced or Fairly Priced at $1,300?",
      "headlineKo": "샌디스크 주가는 D램 공포로 18% 하락했다. 가격이 1,300달러로 잘못 책정되어 있습니까, 아니면 적정 가격입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=194d25c7772e51fa88efd9b4a355a22e95ab743ea57214500cf8b4ef20402608",
        "publishedAt": 1792406611,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "샌디스크 주가는 D램 공포로 18% 하락했다.",
        "가격이 1,300달러로 잘못 책정되어 있습니까, 아니면 적정 가격입니까?",
        "| TIKR.com General Investing Sandisk 주식은 DRAM 공포로 인해 18% 하락했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 18%, $1,300, 17.86% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 18%, $1,300, 17.86% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8fa934894781397cc443",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "SNDK",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Cramer’s Stop Trading: Sandisk Corporation & Western Digital",
      "headlineKo": "Cramer의 거래 중지: Sandisk Corporation 및 Western Digital",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=6b1093b8d2a46861fea61e66693b0263ddc1c1f1246cf1f97cd9ed2cd19d2803",
        "publishedAt": 1792404157,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cramer의 거래 중지: Sandisk Corporation 및 Western Digital 탐색 건너뛰기 시장 비즈니스 투자 기술 정치 및 정책 비디오 관심 목록 Investing Club PRO 라이브스트림 메뉴 지금 보기 이 비디오에서 SNDK WDC 공유 Faceb를 통한 기사 공유",
        "00:50 2026년 10월 19일 월요일 오전 10:02 EDT 지금 시청하세요 지금 시청하세요 동영상 29:06 WPP AI 책임자는 AI가 브랜드 광고 방식을 변경하면서 쇼핑을 시작할 것이라고 말합니다. 지금 시청하세요 지금 시청하세요 동영상 01:27 Zelenskyy 없이 푸틴-시 정상회담에 참석한 트럼프: 나는 wo"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "b47bf398e06c28ce57e3",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Prediction: Microsoft Stock Is Going to Soar After Oct. 28",
      "headlineKo": "예측: Microsoft Stock은 10 월 28 일 이후에 급등 할 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89e0b9c9c53449d0702d7f0982ea90fa05ffa3f59ce267bd0fbc8246030db22d",
        "publishedAt": 1792403700,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: Microsoft Stock은 10 월 이후에 급등 할 것입니다.",
        "28 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ 스톡 어드바이저 + --- % 참여 Motley Fool 변동성은 지난 주 인공지능 (AI) 인프라의 지속 가능성에 대한 우려 속에 주식 시장을 사로잡았습니다.",
        "S&P 500은 완만한 하락세를 보였지만 역사적으로 비싼 밸류에이션으로 계속 거래되고 있기 때문에 이 강세장을 유지하기 위해서는 강력한 기업 수익이 필요할 것입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.93%, 50%, $529.05 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.93%, 50%, $529.05 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9f03d5a9b229666807f4",
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
      "headline": "Micron Stock Rallies as China Memory Chip Rival Forecasts Revenue Boom",
      "headlineKo": "중국 메모리 칩 경쟁자가 매출 호황을 예측함에 따라 마이크론 주가 반등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ff6de788a1d83c83daea070f5349dae2a0f77e61b73d13bc89d55a3ab9928d6",
        "publishedAt": 1792403520,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "중국 메모리 칩 경쟁자가 매출 호황을 예측함에 따라 마이크론 주가 반등"
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
      "id": "7a23cf14a0d301929ef5",
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
      "headline": "Update: Microsoft's Business Software Proposed to Receive Increased UK Regulatory Scrutiny",
      "headlineKo": "업데이트: Microsoft의 비즈니스 소프트웨어, 영국 규제 감독 강화 제안",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1165cc07d46503327480257cf375752da1201ad763def651f060e74346350ef",
        "publishedAt": 1792400133,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Update: Microsoft's Business Software Proposed to Receive Increased UK Regulatory Scrutiny",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "548eed4659e8755cc6da",
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
      "headline": "BE Stock Jumps Premarket Into Earnings Week: Retail Bets On 40% Pop As Wall Street Eyes Strong Q3 Growth",
      "headlineKo": "BE 주식, 시판 전 수익 주간으로 도약: 월스트리트가 3분기 성장을 주목하면서 소매점은 40% 팝에 베팅",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2ddd6624040764068f2bcf4293683787512685a5c9dde6ac28ccbccb8f5b2c72",
        "publishedAt": 1792398066,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BE 주식, 시판 전 수익 주간으로 도약: 월스트리트가 강세를 보이면서 40% 팝에 대한 소매 베팅 AI 에이전트 동향 뉴스 수익 전체 DIA 0.04% SPY 0.42% QQQ 1.21% 추세 CBRS 5.15% NBIS 2.88% SLS 5.11% DJT 8.01% GM 1.44% UAL 0.52%",
        "BE 주식, 시판 전 수익 주간으로 도약: 월스트리트가 강세를 보이면서 소매업은 40%의 인기를 누리고 있습니다. 3분기 성장 분석가들은 매출이 전년 동기 대비 두 배 증가한 10억 6천만 달러, 조정 EPS가 0.15달러에서 0.70달러로 상승할 것으로 예상합니다.",
        "이번 포토 일러스트에는 블룸에너지 로고가 스마트폰 화면에 표시된 모습이 담겨 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 40%, 0.04%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 40%, 0.04%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d2d816f0c6dc1dc3ee38",
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
      "headline": "A Micron Union in Taiwan Voted 99% to Authorize a Strike. Should You Sell the Stock?",
      "headlineKo": "대만의 마이크론 연합은 파업을 승인하기 위해 99%의 투표를 했습니다. 주식을 팔아야 하는가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f9f18b50e7823c23f0c687a982533777fbae77831ea9209d74a1c9cd11261cb",
        "publishedAt": 1792395961,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만의 마이크론 연합은 파업을 승인하기 위해 99%의 투표를 했습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Workers at Micron Technology( MU -5.63% ) 대만의 파업이 한 단계 더 가까워졌습니다.",
        "지난 7일, 메모리 제조사 타오위안 현장 노조는 1,994명의 조합원이 마이크론의 이익 분배 방식을 놓고 파업을 승인하기로 투표했다고 밝혔다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 99%, $879,, 28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 99%, $879,, 28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3a8e80de6ad3584e5b6e",
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
      "headline": "Palantir Stock Fell 7% on Friday. Here’s Where Shares Could Go in 2026",
      "headlineKo": "Palantir 주식은 금요일에 7% 하락했습니다. 2026년에 주식이 갈 수 있는 곳은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c31e84fb5e40676a069f538394ce0ce260c2dd88bdda124d8e979895ee1ee6a",
        "publishedAt": 1792395237,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2026년에 주식이 갈 수 있는 곳은 다음과 같습니다 | TIKR.com 주식 리뷰 Palantir 주식은 금요일에 7% 하락했습니다.",
        "2026년에 주식이 갈 수 있는 곳은 다음과 같습니다. Nikko Henson • 6분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 19일 @Creativa Images via Canva; @Sorapop Udomsri from Sorapop Udomsri via Canva Palantir Technologies 주식에 대한 주요 통계",
        "값비싼 AI 주식에 대한 월스트리트의 우려가 커지면서 Palantir의 비즈니스가 계속해서 뛰어난 성장을 보이고 있음에도 불구하고 Palantir의 프리미엄 가치 평가가 압박을 받고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, $106, $213 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, $106, $213 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c6b58580ba248be0dc69",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "META",
      "relatedTickers": [
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
      "headline": "Stocktwits Tech Watch: Netflix And Meta Report Earnings As Nvidia, Oracle Product Events Loom",
      "headlineKo": "Stocktwits Tech Watch: Nvidia, Oracle 제품 이벤트로 인한 Netflix 및 메타 보고서 수익",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1274b49925fcbd514117dddc5e4b133bcf658a84a1802f7b4e0a68cd5e6c68f0",
        "publishedAt": 1792391363,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits Tech Watch: Netflix And Meta Report Earnings As Nvidia, Oracle Product Events Loom",
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
      "id": "cbd6802a9c3f5a2bae26",
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
      "headline": "Prediction: Amazon Stock Will Soar After Oct. 29",
      "headlineKo": "예측: 아마존 주가는 10월 29일 이후 급등할 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b69def7e68853c334725234bf7dd16b9393022b4dee0bbda9f2dbd52e29a622",
        "publishedAt": 1792383600,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 아마존 주식은 10월 이후 급등할 것입니다.",
        "29 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 이제 거의 Amazon( AMZN -1.87% )이 수익 연단에 오를 차례입니다.",
        "전자상거래 및 클라우드 컴퓨팅 거대 기업은 10월 3분기 실적을 발표할 예정입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $220 billion, 12%, 37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $220 billion, 12%, 37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b8a1d13cc19722fe8b5d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "No ‘Black Monday’? Nasdaq, S&P 500, Dow Futures Spike As Big Tech Earnings Loom This Week — Retail Stays Cautious",
      "headlineKo": "'검은 월요일'은 없나요? 나스닥, S&P 500, 다우 선물은 이번 주에 거대 기술 기업의 수익이 예상됨에 따라 급등합니다. 소매업체는 여전히 조심스럽습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a2e701a4b533b333f361b3a63e36f7840c645ceaa6ad5ec7dd99a649e6795af",
        "publishedAt": 1792382876,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "No ‘Black Monday’? Nasdaq, S&P 500, Dow Futures Spike As Big Tech Earnings Loom This Week — Retail Stays Cautious",
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
      "id": "198bb22db5ba2be5cde9",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Amazon.com vs. Walmart: Which Stock Is a Better Buy in 2026?",
      "headlineKo": "Amazon.com vs. Walmart: 2026년에는 어떤 주식을 사는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b19d1717a0d909f6363222d686863c3f4fb2b1cff6f51dc036eeabdb9f7537c",
        "publishedAt": 1792380002,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월마트: 2026년에는 어느 주식을 사는 것이 더 나을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류하세요. 디지털 클라우드 거대 기업과 글로벌 소매 왕 중 어느 쪽이 귀하의 포트폴리오에 더 적합합니까?",
        "Amazon( AMZN -1.87% )과 Walmart( WMT +0.80% ) 중에서 결정하려면 꾸준한 오프라인 안정성과 고성장 기술을 비교해야 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.87%, 0.80%, $309.5 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 1.87%, 0.80%, $309.5 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3b6d0603aafcf68bba1f",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "BE",
      "relatedTickers": [
        "BE"
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
      "headline": "Fuel Cell Deal Could Be A Game Changer For American Electric Power Company (AEP)",
      "headlineKo": "연료전지 거래는 AEP(American Electric Power Company)의 게임 체인저가 될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5647d89df41724e7fdb44d0e98dda508a25a5a1ac089641ce84a4f8b1bc489a",
        "publishedAt": 1792375678,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Fuel Cell Deal Could Be A Game Changer For American Electric Power Company (AEP)",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "BE에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "dfb7b1c8403dd425a347",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "This Is AMD's Biggest Hurdle in an AI Sell-Off (and No, It's Not Nvidia)",
      "headlineKo": "이것은 AI 매각에서 AMD의 가장 큰 장애물입니다 (아니요, 엔비디아는 아닙니다).",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=133dc0ce0e3c9886a3f4e58edf4e4dc399bb12645a4a3eeb6b39bba129ac9ecd",
        "publishedAt": 1792372800,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이것은 AI 판매에서 AMD의 가장 큰 장애물입니다 (아니요, 엔비디아가 아닙니다) | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Motley Fool Advanced Micro Devices (AMD -5.96%) 에 가입하십시오.",
        "인공지능 (AI) 칩 부족 속에서 선도적인 인공지능 칩 회사인 엔비디아 (NVDA -1.43%) 가 모든 수요를 충족시킬 수 없기 때문에 번창했다.",
        "인공지능 산업이 둔화되고 엔비디아가 관심 있는 모든 고객에게 서비스를 제공할 수 있다면, 투자자들은 AMD로부터 구매할 이유가 줄어들 수 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.43%, 80%, $528.75 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.43%, 80%, $528.75 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f681d35846102f575e8a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta, Tesla Q3 earnings will be fighting rising AI skepticism",
      "headlineKo": "Meta, Tesla 3분기 실적은 AI에 대한 회의감 증가와 싸울 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc1c7783b3805d0c84a9fc0df7acd5d0d866570cb349f636026adfe06d7d51a8",
        "publishedAt": 1792372620,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta, Tesla Q3 earnings will be fighting rising AI skepticism",
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
      "id": "35d47a935f297e9a567c",
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
      "headline": "Here’s What a $10,000 Investment in Nvidia Stock Will Be Worth by 2030",
      "headlineKo": "2030년까지 엔비디아 주식에 대한 $ 10,000 투자의 가치",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=32a15317c6b93e3bcc0eb16ccf6d38930ed253f8283e8ee819529d513fde0167",
        "publishedAt": 1792371962,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2030년까지 엔비디아 주식에 대한 $ 10,000 투자의 가치 | The Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % 가입 The Motley Fool Nvidia (NVDA -1.43%) 는 투자자들을 상당히 부유하게 만들었습니다",
        "엔비디아 주식의 이러한 엄청난 급증은 인공 지능 (AI) 의 출현으로 인해 촉진되었습니다.",
        "2022년 11월 공개적으로 도입된 OpenAI의 ChatGPT가 큰 인기를 끌었을 때, 반도체 대기업의 칩이 트레이닝에서 중요한 역할을 한다는 사실이 드러난 후 기업들은 엔비디아의 그래픽 처리 장치 (GPU) 를 구매하기 위해 줄을 섰습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $5.2 trillion, $100 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $5.2 trillion, $100 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "11bf6ed6dce9c02eb601",
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
      "headline": "S&P 500 Earnings Yield Jumps Over 5%; Sold The EMXC",
      "headlineKo": "S&P 500 수익수익률 5% 이상 상승; EMXC 판매",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cd132f31dd62eb5442847ce69e60733cd6c5c88b972659b868d83a0abe09c30e",
        "publishedAt": 1792370700,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500 Earnings Yield Jumps Over 5%; Sold The EMXC",
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
      "id": "e24b971c0b59af6019cc",
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
      "headline": "If I Could Only Own 1 Artificial Intelligence (AI) Memory Stock for the Next 5 Years, It Wouldn't Be Micron.",
      "headlineKo": "향후 5년 동안 인공지능(AI) 메모리 주식을 1개만 소유할 수 있다면 그것은 Micron이 아닐 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a12bae0feea9b77908046be33fc7c8f6f4411f3f39faab56b0abcf51b67669a",
        "publishedAt": 1792369200,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "향후 5년 동안 인공지능(AI) 메모리 주식을 1개만 소유할 수 있다면 그것은 Micron이 아닐 것입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron Technology( MU -5.63% )는 메모리 칩 수요 증가의 주요 수혜자가 되었으며, 이로 인해 기록적인 매출을 기록했습니다.",
        "투자자들이 완전히 이해하지 못할 수도 있는 것은 마이크론이 인공지능의 끝없는 메모리 수요를 활용하려는 유일한 회사가 아니라는 점입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6.58%, 50%, $136.49 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6.58%, 50%, $136.49 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "31fd4b3dc3259bf8e258",
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
      "headline": "Here Is What a $5,000 Investment in Micron Could Be Worth by 2028",
      "headlineKo": "2028년까지 Micron에 대한 5,000달러 투자의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1c47a4bfe620fa98a7f180d4e1c2588e768a78c3ec9e3b7ff9f57c876cf64ba5",
        "publishedAt": 1792367580,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2028년까지 마이크론에 대한 $ 5,000의 투자가 가치가 있는 것은 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ 주식 고문 + --- % 가입 Motley Fool Micron (MU -5.63%) 은 n의 가장 큰 변화 중 하나를 겪고 있습니다",
        "메모리 칩에 대한 전례 없는 수요를 보고 있으며 동시에 산업을 변화시키는 데에도 도움이 되고 있습니다.",
        "이러한 움직임은 비즈니스와 관련하여 오랫동안 확립된 이해를 뒤엎고 있지만, 시장은 아직 이러한 변화를 따라잡지 못하고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $5,000, $25,000, 380% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $5,000, $25,000, 380% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "258612d8a3dd069f008d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Dow Jones Futures Rebound After AI Sell-Off; Meta, SpaceX, Tesla Earnings Key",
      "headlineKo": "인공지능 매각 후 다우존스 선물 반등; 메타, 스페이스X, 테슬라 수익 키",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ccf03be8481c9a0b30bc0679d5ff5912cb567bac2d203c032f6082fd7495c79",
        "publishedAt": 1792366274,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dow Jones Futures Rebound After AI Sell-Off; Meta, SpaceX, Tesla Earnings Key",
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
      "id": "bda47ee60b1109e221ce",
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
      "headline": "American Electric Power Company (AEP) Faces A 12% Fair Value Gap As Google Deal Lands",
      "headlineKo": "American Electric Power Company (AEP), Google Deal Lands로 12% 공정 가치 격차 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ba5a15822e0e0ecf46ad52e7233e37d32d9255dc44beba69f635ede55c57081",
        "publishedAt": 1792365218,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "American Electric Power Company (AEP) Faces A 12% Fair Value Gap As Google Deal Lands",
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
      "id": "e88ab654a631492c2822",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Top 4 Earnings Reports This Week: What Tesla, Meta, SpaceX, Netflix Must Show",
      "headlineKo": "이번 주 상위 4개 수입 보고서: 테슬라, 메타, 스페이스X, 넷플릭스가 반드시 보여줘야 할 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=088a6f07274d5ef19dcc93ad1ad7eb4642a3200a6147fa16c50c76411525e650",
        "publishedAt": 1792364400,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Top 4 Earnings Reports This Week: What Tesla, Meta, SpaceX, Netflix Must Show",
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
      "id": "ec450148f6017199b2b9",
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
      "headline": "The Bond Market Is Sending a Warning to Nvidia Shareholders",
      "headlineKo": "채권 시장이 엔비디아 주주들에게 경고를 보내고 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a3790b182ec464e7975e4d12063aab3ad911fa97a074e47cc5c30ef97ee15be",
        "publishedAt": 1792362600,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "채권 시장이 엔비디아 주주들에게 경고를 보내고 있습니다 | The Motley Fool Accessibility Help About Us ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % 포트폴리오에 채권을 보유하지 않더라도 Motley Fool에 가입하십시오.",
        "일부 투자자는 최근에 어려운 방법을 찾았을 수 있습니다.",
        "엔비디아 (NVDA -1.43%) 가 후원하는 선도적인 네오클라우드 기업인 CoreWeave (CRWV -11.91%) 는 벤처 캐피털리스트 Chamath Palihapitiya가 소셜 미디어에서 최근 발행된 채권이 만료될 것이라는 차트를 공유한 후 주가가 급락한 것을 확인했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 11.91%, 1.43%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11.91%, 1.43%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "83c1aa88d31c26d96013",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Some Investors Are Questioning the AI Trade. Microsoft Is Bucking the Trend",
      "headlineKo": "일부 투자자들은 AI 거래에 의문을 제기하고 있습니다. Microsoft는 추세를 거스르고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ff35a4a3386611f185444efefec578170d0e502541a8bd27f6b93751b1fc61b7",
        "publishedAt": 1792357500,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $1.3 trillion, 1.93%, 8%, $100 billion, 41%, 44%, $2 trillion, 21%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Some Investors Are Questioning the AI Trade. Microsoft Is Bucking the Trend' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b493548e220a0f105b3f",
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
      "headline": "Meta Earnings Puts Adobe Stock And AI Ad Software Names In Focus",
      "headlineKo": "메타 수입은 Adobe Stock 및 AI 광고 소프트웨어 이름에 초점을 맞춥니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=370bf879c132dd8ac54bd65574fb82a73e36aa843c0f3e84c24c7e4f793369b9",
        "publishedAt": 1792354307,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타 수입은 Adobe Stock 및 AI 광고 소프트웨어 이름에 초점을 맞춥니다."
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
      "id": "c45bd11077504e439fd1",
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
      "headline": "Why Micron's Latest Long-Term Deals Are a Game-Changer for Investors",
      "headlineKo": "Micron의 최신 장기 거래가 투자자에게 판도를 바꾸는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b9a4e5f9c64d07dc137fd509eae8ff434d36a319165068d1c7543f8f21fd90d",
        "publishedAt": 1792353900,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론의 최신 장기 거래가 투자자를 위한 게임 체인저인 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ 스톡 어드바이저 + --- % Motley Fool에 가입 메모리 시장은 역사적으로 상품화된 산업이었습니다.",
        "Demand from new technologies will often cause prices to surge, only for the market to eventually get hit with new supply and prices to crash.",
        "That is one of the main reasons why Micron Technology's ( MU -5.63% ) stock trades at a forward P/E of just over 5 times fiscal 2027 (ending August) analyst estimates despite soaring growth, as investors expect the current supercycle to eve"
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.63%, 5 times, 6.58% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.63%, 5 times, 6.58% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b048012de33b44384c14",
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
      "headline": "Taiwan Semiconductor Just Proved Why It's a Top AI Investment",
      "headlineKo": "대만 반도체가 최고의 AI 투자처인 이유를 방금 증명했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa8f89ccfcc82cdd5533240900c42271d1d202512420920155fb3590ecca9420",
        "publishedAt": 1792352580,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 1.43%, 0.43%, $412.61, $9.64, 2.28%, $2.14, $410.58, $421.50.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 TSM의 사업과 관련된 'Taiwan Semiconductor Just Proved Why It's a Top AI Investment' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ebf43a1a3fa041c4d90a",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple Keeps Hitting Record Highs. Bitcoin Hasn’t Set One All Year. Which Is the Better Buy?",
      "headlineKo": "Apple은 계속해서 최고 기록을 경신하고 있습니다. 비트코인은 일년 내내 1을 설정하지 않았습니다. 어느 것이 더 나은 구매입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bab24ab8f21a50cc207ec710b9ea3fd9f547c88a8c55a44c4730bfcf930fe6e2",
        "publishedAt": 1792346402,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Skip to content ❚❚ At close S&P 500 7,701.00 +0.47% Dow Jones 52,093.10 +0.18% Nasdaq 100 29,469.70 +0.88% Russell 2000 2,737.26 +0.46% S&P 500 7,701.00 +0.47% Dow Jones 52,093.10 +0.18% Nasdaq 100 29,469.70 +0.88% Russell 2000 2,737.26 +0.",
        "애플은 비트코인이 최고치에서 더 미끄러지는 동안 기록을 세우고 있지만, 은퇴 투자자들에게 진정한 질문은 최근의 실적을 뛰어넘는 것입니다.",
        "이 비교의 승자는 암호가 항상 긴 게임에서 승리한다고 가정하는 사람을 놀라게 할 수 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $156.18, 0.08%, $348. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $156.18, 0.08%, $348. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b77b8a2f82a5cb1f86ed",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "QQQ",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Dow Jones Futures: More AI Pain After Nasdaq Sell-Off? Meta, SpaceX, Tesla Earnings Key",
      "headlineKo": "다우존스 선물: 나스닥 매도 이후 AI의 고통이 더 커졌나요? Meta, SpaceX, Tesla 수익 키",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4850df8f4a080ebe53120b2937b9c2cb3baeadb35e92705c5c6d9b119de30643",
        "publishedAt": 1792344746,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dow Jones Futures: More AI Pain After Nasdaq Sell-Off? Meta, SpaceX, Tesla Earnings Key",
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
      "id": "cbf861eb5f93ca280153",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "1 Analyst Thinks Alphabet Stock Could Jump 20% on AI Chip Demand. Is He Right?",
      "headlineKo": "1 분석가는 알파벳 주식이 AI 칩 수요로 20% 상승할 수 있다고 생각합니다. 그가 맞나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80d29ab300b81a73b4c0c3361668af1e85d4de8994c9fd48d45a49d22e13135f",
        "publishedAt": 1792341300,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "1 애널리스트는 AI 칩 수요에 따라 알파벳 주식이 20% 뛰어오를 수 있다고 생각합니다.",
        "| Motley Fool Accessibility Help About Us ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Join The Motley Fool Alphabet (GOOG -2.32%) (GOOGL -2.47%) 은 인공지능 (AI) 시장에서 두드러진 성공을 거두었습니다.",
        "기업들이 최근 주가를 높이는 추세인 Google의 AI 서비스를 활용함에 따라 회사의 Google Cloud 매출이 급증하고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, $425, 23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, $425, 23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8c695df4c32e604c4729",
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
      "headline": "What Does Broadcom (AVGO) Face As AI Chip Supply Turns Into A Bottleneck?",
      "headlineKo": "AI 칩 공급이 병목 현상으로 전환되면서 Broadcom(AVGO)은 어떤 상황에 직면하게 됩니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99ada1d69d367f1bd75eb62c3b665b465fed7b42122097d0c519a376c3167313",
        "publishedAt": 1792339773,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What Does Broadcom (AVGO) Face As AI Chip Supply Turns Into A Bottleneck?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "76e6fff3c2bb3a16cd91",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "SPY",
        "TSM"
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
      "headline": "Better AI Chip Stock: Taiwan Semiconductor vs. Micron",
      "headlineKo": "더 나은 AI 칩 스톡: 대만 반도체 vs. 마이크론",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c50b526733f247c51b3031e8462745d3a9eb45b1eb0ef720b2b660772353952e",
        "publishedAt": 1792339440,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "더 나은 AI 칩 주식: Taiwan Semiconductor vs.",
        "마이크론 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류하세요 Nvidia 및 AMD와 같은 회사는 강력한 프로세서로 AI 영역에서 헤드라인 영광을 대부분 얻을 수 있지만,",
        "이 부문의 제조 역량은 소수의 칩 파운드리 기업에 있으며, Taiwan Semiconductor Manufacturing(TSM -2.28%)과 Micron(MU -5.63%)이 시가총액 기준으로 세계에서 가장 큰 두 기업입니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.28%, 5.63%, $878.84 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSM에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 2.28%, 5.63%, $878.84 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "e55b82bb041ad30e7d32",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
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
      "headline": "Wall Street Brunch: SpaceX, Tesla, Meta On The Earnings Card",
      "headlineKo": "월스트리트 브런치: SpaceX, Tesla, Meta의 수익 카드",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=94735cc9488b6d03b181b6d9b142678f324e171f33ae8a31f1c1a4def85acc55",
        "publishedAt": 1792337700,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트 브런치: SpaceX, Tesla, Meta의 수익 카드(정의되지 않음:SPCX) | 월스트리트 아침 알파 찾기 574만 팔로워 구독 요약 SpaceX(SPCX)는 휴대폰 시장의 1%만 점유하면 로켓 및 AI 손실을 상쇄할 수 있습니다.",
        "Tesla(TSLA)는 휘발유 가격 급등으로 인해 7,500달러의 EV 크레딧보다 더 큰 인센티브로 작용하지만 수익 성장을 충분한 수익으로 전환하는 데 어려움을 겪고 있습니다.",
        "메타(META)는 다양한 수익화 경로를 갖춘 AI 기반 플랫폼으로 진화하고 있지만, 현재 AI 투자는 마진을 압박하고 있으며 더 나은 진입점이 될 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1%, $7,500, $1.66 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1%, $7,500, $1.66 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1186c46f19eee1d968fd",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "META",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Wall Street Brunch: SpaceX, Tesla, Meta On The Earnings Card",
      "headlineKo": "월스트리트 브런치: SpaceX, Tesla, Meta의 수익 카드",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=94735cc9488b6d03b181b6d9b142678f324e171f33ae8a31f1c1a4def85acc55",
        "publishedAt": 1792337700,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wall Street Brunch: SpaceX, Tesla, Meta On The Earnings Card",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "0ffd7f6db5add884ee5f",
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
      "headline": "Meta's $18 billion teen-safety deal is about to hit earnings",
      "headlineKo": "Meta의 180억 달러 규모의 청소년 안전 거래가 곧 수익에 타격을 줄 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=97636b18cfcdcef03406eec0b99c387bf82094ac8a6600063ae57672285c1ef0",
        "publishedAt": 1792334220,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta's $18 billion teen-safety deal is about to hit earnings",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "c55205eeff05cb84ff88",
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
      "headline": "Why Did NVIDIA (NVDA) Rise Only 19% While Its Suppliers Did Far Better?",
      "headlineKo": "NVIDIA(NVDA)가 19%만 상승한 반면 공급업체는 훨씬 더 나은 상승세를 보인 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8fceddf7e2520bda5a211bc2dd69e28da0298261de986f6370a0e444ece7e5a7",
        "publishedAt": 1792334040,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Did NVIDIA (NVDA) Rise Only 19% While Its Suppliers Did Far Better?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'Why Did NVIDIA (NVDA) Rise Only 19% While Its Suppliers Did Far Better?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "006e5d3dbbf819715f9f",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "TSLA"
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
      "headline": "What To Expect In Markets This Week: SPCX, TSLA, META, NFLX, IBM Earnings And More",
      "headlineKo": "이번 주 시장에서 기대할 사항: SPCX, TSLA, META, NFLX, IBM 수익 등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe42684d497baae3aaa7a1e0479172e0b96dc0a4986224d8f5f570d83db2b753",
        "publishedAt": 1792331896,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이번 주 시장에서 기대할 사항: SPCX, TSLA, META, NFLX, IBM 수익 등"
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
      "id": "cd7a406e62cf6eddf5ca",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AAPL",
        "AVGO",
        "MSFT",
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
      "headline": "Own VGT? Here's How Much of It Is Really Nvidia, Apple, Microsoft, and Broadcom.",
      "headlineKo": "VGT를 소유하고 계십니까? Nvidia, Apple, Microsoft 및 Broadcom의 실제 비율은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=997c82bec29b639e1cac57a3bdc3156b75a04e58d14b2b935bca4a0e3da0bab0",
        "publishedAt": 1792330080,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Here's How Much of It Is Really Nvidia, Apple, Microsoft, and Broadcom.",
        "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool When investing in tech exchange-traded funds (ETFs), sometimes it's a good idea to peek under the hood and see what you're really b",
        "Sometimes there is a lot of overlap from one tech ETF to another."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.87%, 1.43%, 0.43% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 2.87%, 1.43%, 0.43% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "12f7daeb2de61da3c471",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "iPhone Duo Preorders Sell Out Rapidly As Delivery Estimates Slip Into January",
      "headlineKo": "iPhone Duo 사전 주문은 배송 추정치가 1월로 넘어가면서 빠르게 매진됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=974f038e97f444c73d442da0b4160a9e6b37b958d3fd1e76ca6b6d6b6dfd1cf1",
        "publishedAt": 1792329132,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "iPhone Duo 선주문은 배송 예상이 1월로 넘어가면서 빠르게 매진되었습니다 | TIKR.com General Investing iPhone Duo 선주문은 배송 예상이 1월로 넘어가면서 빠르게 매진됨 Aditya Raghunath • 3분 읽기 검토자: David Han",
        "16: $343 52주 최고가: $348 $AAPL 주가 목표: $329 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "Apple의 (AAPL) iPhone Duo가 금요일에 선주문을 시작했으며 출시일 픽업 재고가 빠르게 매진되었습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 27%, $343, $348 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 27%, $343, $348 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8d50530edff010a59eda",
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
      "headline": "Prediction: Alphabet Will Report Google Cloud Revenue Growth Exceeding 100% on Oct. 28.",
      "headlineKo": "예측: Alphabet은 10월 28일에 Google Cloud 수익 성장이 100%를 초과할 것이라고 보고할 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=64b2f1d7bfd5a1883444e989aef4e1cd76e381fb854de4004b425c6b26331531",
        "publishedAt": 1792325100,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: Alphabet은 10월에 Google Cloud 수익 성장이 100%를 초과할 것이라고 보고할 것입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Alphabet ( GOOG -2.32% ) ( GOOGL -2.47% )이 10월 3분기 실적을 발표할 예정입니다.",
        "28일, 모든 시선은 회사의 클라우드 컴퓨팅 사업에 쏠릴 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 100%, 82%, $514 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 100%, 82%, $514 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "16e61de7cfe09f572fe7",
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
      "headline": "Will Meta's earnings restore confidence in the AI boom?",
      "headlineKo": "Meta의 수익이 AI 붐에 대한 신뢰를 회복할 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7e045a599b83b64314150a7c567123dc6c926fcb0c97ebf5434887831a4167aa",
        "publishedAt": 1792321209,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta의 수익이 AI 붐에 대한 신뢰를 회복할 수 있을까요?"
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
      "id": "b643d14f1b31e13181c7",
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
      "headline": "Microsoft pulls out of UK data centre deal with Nscale, Telegraph reports",
      "headlineKo": "Microsoft가 Nscale과 영국 데이터 센터 계약을 철회했다고 Telegraph가 보도했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=853494d3498dd63d09406def43814b44a1cf00dada6b2eac44b47d63a106b801",
        "publishedAt": 1792317173,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft pulls out of UK data centre deal with Nscale, Telegraph reports",
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
      "id": "325047a78b6b7a3e8194",
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
      "headline": "Can Alphabet Stock Double By 2030?",
      "headlineKo": "2030년까지 알파벳 주식이 두 배로 늘어날 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18df35bcc0aa4377e01a31faeefff54f886da52e850d32cb24658b577848939d",
        "publishedAt": 1792317000,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Alphabet ( GOOG -2.32% ) ( GOOGL -2.47% )은 2030년까지 가치가 두 배로 늘어날 수 있습니다.",
        "조정 국면에 있지만 지난 1년간 35%의 수익률은 주가가 모멘텀을 얻으면 가능한 일임을 보여줍니다.",
        "인공지능(AI)은 비즈니스의 모든 부분을 지속적으로 활성화하는 주요 촉매제입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 35%, 82%, 32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 35%, 82%, 32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6ed3f8ed83dd79cc7298",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "President Trump Sells Micron Stock and Buys Another Mega-Cap Artificial Intelligence (AI) Stock",
      "headlineKo": "트럼프 대통령, 마이크론 주식 매각하고 또 다른 메가캡 인공지능(AI) 주식 매입",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ae9d496921c6b1395235e1dedc10ed6b05de432accb1a1206921013621b9485",
        "publishedAt": 1792314481,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "트럼프 대통령, 마이크론 주식 매도 및 또 다른 메가캡 인공지능(AI) 주식 매입 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 오프에서 재무 공개",
        "해당 계좌는 제3자 기관에서 관리하는데, 이는 트럼프 자신이 증권 매매 결정에 책임이 없음을 의미합니다.",
        "그러나 거래는 여전히 검토할 가치가 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.63%, $251,000, $515,000. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.63%, $251,000, $515,000. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0cf68824e6973a927f67",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Meta",
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
      "headline": "What to Expect in Markets This Week: Meta, Tesla Report; Airlines, Streaming Giants’ Results Due",
      "headlineKo": "이번 주 시장에서 기대할 사항: 메타, Tesla 보고서; 항공사, 스트리밍 자이언츠 결과 발표 예정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8522880567ed0bba6d5d8b0f3acb9b39a3e40fb07418a5a1d7341721efa72a22",
        "publishedAt": 1792314000,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이번 주 시장에서 기대할 사항: 메타, 테슬라 보고서 주요 뉴스 다우가 550포인트 상승 투자자들이 기술 분야에서 벗어나면서 소비자 주가 상승 인플레이션이 다시 가열되고 있음 사회 보장 부양책이 치솟는 비용을 감당할 수 있을까요?",
        "Meta Platforms는 이번 주에 최신 결과를 보고할 예정입니다.",
        "Marcus Brandt / Picture Alliance via Getty Images Close Earnings 시즌이 이번 주에 시작됩니다. 두 명의 Magnificent 7 멤버의 결과가 주목을 받고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 4.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 4.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a05089e5f723a73d13b1",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Earnings Preview: Grounded Margins And Flying Cars",
      "headlineKo": "Tesla 수익 미리보기: 확실한 마진과 날아다니는 자동차",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2651243811383653f2bf4be5a89a435f14aa753a7863370459374894064e031d",
        "publishedAt": 1792313100,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla Earnings Preview: Grounded Margins And Flying Cars",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "매출·영업이익 성장",
        "정상화이익과 특이항목",
        "가이던스·OCF·FCF"
      ]
    },
    {
      "id": "c3a3576e655e7032dfe0",
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
      "headline": "Where Will Microsoft Stock Be in 2030?",
      "headlineKo": "2030년에 Microsoft 주식은 어디에 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c6fb008f942f29ba72f6dac65494eff81cf93c36b5ffc0bf565ea99ee4ba5c8",
        "publishedAt": 1792312981,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2030년에 Microsoft 주식은 어디에 있을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Shares of Microsoft( MSFT -1.93% )는 10월 543.45달러로 마감했습니다.",
        "13일에 거래된 뒤 하루 만에 약 2% 하락해 10월을 마감했다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $533.69., $730 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, $533.69., $730 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d257eecb1c67bc6e1d7a",
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
      "headline": "Microsoft Scraps UK Data Center Deal With Nscale, Telegraph Says",
      "headlineKo": "Microsoft가 Nscale과 영국 데이터 센터 계약을 폐기했다고 Telegraph가 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0404698d37ae0470876a3d08c806c15c45ff75be24b431f9bcc70a82954b7a1c",
        "publishedAt": 1792312270,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft가 Nscale과 영국 데이터 센터 계약을 폐기했다고 Telegraph가 밝혔습니다."
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
      "id": "1cf6cdca1b4b31c0c12d",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Here's What $10,000 Split Across SpaceX, Palantir, and 3 AI Chip Stocks Could Be Worth in 2035",
      "headlineKo": "2035년 SpaceX, Palantir 및 3개의 AI 칩 주식에 걸쳐 10,000달러를 분할할 수 있는 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3d75b776d3f17b6fce08676dc1e20e199859cb2f0dc6c36d18b54393123aa869",
        "publishedAt": 1792312020,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2035년 SpaceX, Palantir 및 3개의 AI 칩 주식에 걸쳐 10,000달러를 분할할 수 있는 가치는 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류하세요. 한 종목을 골라 집중적으로 투자하세요",
        "당신이 유망하다고 생각하는 업계의 여러 회사에 돈을 분배하고 동일한 미래(우주, 소프트웨어, 실리콘)의 다른 부분을 구축하는 회사를 선택하는 것이 당신을 성공으로 이끌 수 있는 논문과 신념에 더 가깝습니다.",
        "오늘날 AI 추세를 활용하기 위해 돈 투자(예: 총 10,000달러)를 고려하고 있다면 장기적으로 이 5개 주식에 각각 2,000달러를 투자하는 것이 좋습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $2,000, 1.74% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $2,000, 1.74% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "794398fe1a45b06c2da8",
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
      "headline": "Elon Musk Says Optimus Is Tesla's Most Important Product. These 3 Suppliers Get Paid Before Tesla Does.",
      "headlineKo": "Elon Musk는 Optimus가 Tesla의 가장 중요한 제품이라고 말합니다. 이 3개 공급업체는 Tesla보다 먼저 대금을 받습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0361792884d13193f142b06e8fd8d60a4422616d7c80c60ebca82133aa938f87",
        "publishedAt": 1792308300,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk는 Optimus가 Tesla의 가장 중요한 제품이라고 말합니다. 이 3개 공급업체는 Tesla보다 먼저 대금을 받습니다."
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
      "id": "47480cee764161de443d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "GE Vernova vs. Caterpillar: Which Has More Exposure to the AI Power Build-Out?",
      "headlineKo": "GE Vernova 대 Caterpillar: 어느 쪽이 AI 전력 증강에 더 많이 노출됩니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb315b60fac64fe998dee02007bd398672104f959d881e80ed41b202fd507664",
        "publishedAt": 1792306200,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Caterpillar: AI 전력 증강에 더 많이 노출되는 것은 무엇입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Technology 기업들은 인공지능(AI) 인프라에 막대한 투자를 하고 있으며, 분석가들은 AI 자본 지출을 기대하고 있습니다.",
        "이는 차세대 데이터 센터의 컴퓨팅, 전력, 냉각 및 기타 관련 인프라 요구 사항에 대한 엄청난 매출을 촉진하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.7 trillion, $2.1 trillion, 1.99% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.7 trillion, $2.1 trillion, 1.99% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "88635dc9bf0fd460153e",
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
      "headline": "Vistra Stock Is Down 28% Over the Past Year. Discount or Warning Sign?",
      "headlineKo": "비스트라 주가는 지난 1년 동안 28% 하락했습니다. 할인 또는 경고 표시?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=03af323830bba5564e2a8aa80a3b143898bfd0037a79b4f09044e552b2f6fea1",
        "publishedAt": 1792304269,
        "collectedAt": 1792575880.186299
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra Stock Is Down 28% Over the Past Year.",
        "| TIKR.com Stock Reviews Vistra Stock Is Down 28% Over the Past Year.",
        "Gian Estrada • 6 minute read Reviewed by: David Hanson Last updated Oct 18, 2026 claudiodivizia and yangwenshuang from Getty Images Signature via Canva Key Takeaways Vistra stock is down 28% over the past year, closing at $152.02 on October"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 28%, $152.02, 20.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 28%, $152.02, 20.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
    }
  ],
  "byTicker": {
    "AMD": [
      "a4e0cc48154b70841ef7",
      "bedbcd845618a1bbb666",
      "666dfabc3ad9d505216f",
      "aa189df1adcd5f080ada",
      "f96c0e625871e943312c",
      "bf74af7c8b3df8a61500",
      "0b89aeaa5c4acc40995c",
      "8e5b10e000f8cd88db85",
      "75b0dbebbe07fbfd7a4b",
      "94b03da05eb19df6787c",
      "59caad64b2b8d68c6bf4",
      "fdea1ad249bf9a72f324",
      "c6f5ce1ef9143b0897d7",
      "2a293eb7c6f9f65b49a1",
      "6be1d306a2cdacb31d22",
      "1817cd8db144ee3beec9",
      "09536402e980d56bba28",
      "31f05914e82367045315",
      "2b9b822ef8952ef5a21e",
      "dfb7b1c8403dd425a347",
      "83c1aa88d31c26d96013",
      "b048012de33b44384c14",
      "76e6fff3c2bb3a16cd91"
    ],
    "GEV": [
      "a4e0cc48154b70841ef7",
      "47999d60e8e78b41fe67",
      "47480cee764161de443d"
    ],
    "MU": [
      "a4e0cc48154b70841ef7",
      "2677d35bbb9579dbb124",
      "aa189df1adcd5f080ada",
      "f96c0e625871e943312c",
      "bf74af7c8b3df8a61500",
      "ef93d00f2d77f65a71d1",
      "0b89aeaa5c4acc40995c",
      "f0dd6c6d4ba9fbe05264",
      "9f1a14c5b4f90e510e68",
      "ee26a1916b0c6d8898c4",
      "c9421d067cb5124143a9",
      "6274f83e8574db24b335",
      "92b22ce4a0d7332d302a",
      "75b0dbebbe07fbfd7a4b",
      "94b03da05eb19df6787c",
      "c6f5ce1ef9143b0897d7",
      "bdf58dad04f3050349f7",
      "d809644cd27150ff4bdc",
      "c11ece71bb149befb39a",
      "067bf49649423f2a4a48",
      "6be1d306a2cdacb31d22",
      "1817cd8db144ee3beec9",
      "09536402e980d56bba28",
      "707c8bab2c00f2e08d0f",
      "d100c41031d24b511f96",
      "31f05914e82367045315",
      "2b9b822ef8952ef5a21e",
      "9f03d5a9b229666807f4",
      "d2d816f0c6dc1dc3ee38",
      "e24b971c0b59af6019cc",
      "31fd4b3dc3259bf8e258",
      "83c1aa88d31c26d96013",
      "c45bd11077504e439fd1",
      "b048012de33b44384c14",
      "76e6fff3c2bb3a16cd91",
      "6ed3f8ed83dd79cc7298"
    ],
    "NVDA": [
      "a4e0cc48154b70841ef7",
      "2677d35bbb9579dbb124",
      "7f2de8b7c6243dbd7771",
      "aa189df1adcd5f080ada",
      "549f47214d7241564468",
      "f96c0e625871e943312c",
      "219d5a4cd2fadc264980",
      "bf74af7c8b3df8a61500",
      "544d5a069a5cbff4afaf",
      "827244670f887ae998cf",
      "109d5c3a4a9aa38b5984",
      "67f7a539c9bc5d7990a4",
      "0b89aeaa5c4acc40995c",
      "0576611f612a8c06288b",
      "75b0dbebbe07fbfd7a4b",
      "94b03da05eb19df6787c",
      "357d1cdaf744c2d6174f",
      "dc714bb527c91d469cce",
      "3e1942bbb4cc365db652",
      "fabac6490a7f1432285f",
      "fdea1ad249bf9a72f324",
      "c6f5ce1ef9143b0897d7",
      "0cbf11404a799e09f698",
      "f26d30a112caaf597eb2",
      "6be1d306a2cdacb31d22",
      "1817cd8db144ee3beec9",
      "09536402e980d56bba28",
      "d100c41031d24b511f96",
      "31f05914e82367045315",
      "2b9b822ef8952ef5a21e",
      "c6b58580ba248be0dc69",
      "dfb7b1c8403dd425a347",
      "35d47a935f297e9a567c",
      "ec450148f6017199b2b9",
      "83c1aa88d31c26d96013",
      "b048012de33b44384c14",
      "76e6fff3c2bb3a16cd91",
      "c55205eeff05cb84ff88",
      "cd7a406e62cf6eddf5ca"
    ],
    "ORCL": [
      "a4e0cc48154b70841ef7",
      "d3fb0f80f6f35c98c5fd",
      "ec2221058850042aeea5",
      "aa189df1adcd5f080ada",
      "f96c0e625871e943312c",
      "bf74af7c8b3df8a61500",
      "0b89aeaa5c4acc40995c",
      "36939923eef54494a274",
      "faa0718155f002c10b17",
      "b7e7abbbe320684088bd",
      "ce30e66ece1e8b94a5b2",
      "75b0dbebbe07fbfd7a4b",
      "cb204625b730d750f316",
      "94b03da05eb19df6787c",
      "166ca2101a701cce018b",
      "6e509225c212b1ac0f80",
      "864570426d6afecc0c80",
      "c6f5ce1ef9143b0897d7",
      "6be1d306a2cdacb31d22",
      "1817cd8db144ee3beec9",
      "09536402e980d56bba28",
      "ae4459e7ad570684b8f3",
      "125d3fd3c7cdb0487be4",
      "2376e3f1198bd15c0e65",
      "31f05914e82367045315",
      "2b9b822ef8952ef5a21e",
      "c6b58580ba248be0dc69",
      "83c1aa88d31c26d96013",
      "b048012de33b44384c14"
    ],
    "SPY": [
      "2677d35bbb9579dbb124",
      "3e40b595602b29329fe2",
      "bedbcd845618a1bbb666",
      "e894c888b199e01d972f",
      "d3fb0f80f6f35c98c5fd",
      "616ecbf23622b713caf5",
      "bf3795e4af99a8a39291",
      "7f2de8b7c6243dbd7771",
      "33fff44de311f6b51037",
      "ec2221058850042aeea5",
      "9d0bd01c346654a1da91",
      "549f47214d7241564468",
      "0c54e1164988202deca6",
      "1bff98d6fb5526b97b2f",
      "4370a65d9ac24440b745",
      "ef93d00f2d77f65a71d1",
      "109d5c3a4a9aa38b5984",
      "f0dd6c6d4ba9fbe05264",
      "82bae992d9807680ab75",
      "db436ffb9458e0c9c22b",
      "9f1a14c5b4f90e510e68",
      "888b56280da4d81d7003",
      "57fe5ee56128b32c90fb",
      "8e5b10e000f8cd88db85",
      "6dba29f9246cd326720a",
      "c9421d067cb5124143a9",
      "0576611f612a8c06288b",
      "dff35b67ce2b3330873a",
      "92b22ce4a0d7332d302a",
      "b7e7abbbe320684088bd",
      "54bc9020bb7c90036444",
      "bcd0a132340afbf71af8",
      "503f74bcd19213300618",
      "0d2ea7ed1e4be74d14a8",
      "4de3c4f0b24b3415c4ce",
      "f59827cb1f22836a964c",
      "a1aab4850ad3552dcd2f",
      "166ca2101a701cce018b",
      "357d1cdaf744c2d6174f",
      "60e931d7f681cd07d6ce",
      "dc714bb527c91d469cce",
      "3e1942bbb4cc365db652",
      "fabac6490a7f1432285f",
      "a74fda82b8956be9fce9",
      "864570426d6afecc0c80",
      "1e10578f547803c23685",
      "2a293eb7c6f9f65b49a1",
      "0a29b7d3852ee13f280f",
      "baa0d790fd5c9d59bf81",
      "0e3ae56299bc90968508",
      "a390daf5495857109f84",
      "687c52f525b4fd117b69",
      "15f29a94c70e212a02fc",
      "bc5a2c9c21c306efb675",
      "aa332295551a779201ca",
      "12406ae5245631b7f5ba",
      "ecf353f7baa6b682f353",
      "707c8bab2c00f2e08d0f",
      "ae4459e7ad570684b8f3",
      "6b8073cf0dbe9b4a96e2",
      "2b059a85b8e8efff6d23",
      "af15e90efda88b940dd0",
      "1fc67f52948919ac2cb2",
      "97c4fdd697b78f2d396e",
      "b47bf398e06c28ce57e3",
      "548eed4659e8755cc6da",
      "d2d816f0c6dc1dc3ee38",
      "cbd6802a9c3f5a2bae26",
      "b8a1d13cc19722fe8b5d",
      "198bb22db5ba2be5cde9",
      "dfb7b1c8403dd425a347",
      "35d47a935f297e9a567c",
      "11bf6ed6dce9c02eb601",
      "e24b971c0b59af6019cc",
      "31fd4b3dc3259bf8e258",
      "ec450148f6017199b2b9",
      "c45bd11077504e439fd1",
      "ebf43a1a3fa041c4d90a",
      "cbf861eb5f93ca280153",
      "76e6fff3c2bb3a16cd91",
      "cd7a406e62cf6eddf5ca",
      "8d50530edff010a59eda",
      "325047a78b6b7a3e8194",
      "6ed3f8ed83dd79cc7298",
      "c3a3576e655e7032dfe0",
      "1cf6cdca1b4b31c0c12d",
      "47480cee764161de443d"
    ],
    "CRM": [
      "8e8cb0a5b215c423b4a1",
      "616ecbf23622b713caf5",
      "0c54e1164988202deca6",
      "35430766304f80f2c01d",
      "06e2020053df0c36c58e",
      "a802165f354ee574ab4e",
      "6dba29f9246cd326720a",
      "e1495d7d686ab763aceb",
      "8ffb356474c5c03f8aa1",
      "362eb0b93be0e7cc4bb8"
    ],
    "GOOGL": [
      "87b76b1839ee6a097353",
      "549f47214d7241564468",
      "1bff98d6fb5526b97b2f",
      "185877cbeb9150390e48",
      "0b89aeaa5c4acc40995c",
      "ebbffe474129cbcf5d34",
      "b90ab4441bb8f87fa92c",
      "41f5f83e01d59bd65af9",
      "6149a570bbf1542dbee8",
      "a17855391961b93a4f03",
      "a74fda82b8956be9fce9",
      "78a55ce096990ae8926a",
      "0cbf11404a799e09f698",
      "a390daf5495857109f84",
      "162b120cb058c87a2710",
      "09536402e980d56bba28",
      "8c9ee82421f66cb48d48",
      "0a94cd14940f382573b0",
      "d100c41031d24b511f96",
      "bda47ee60b1109e221ce",
      "cbf861eb5f93ca280153",
      "8d50530edff010a59eda",
      "325047a78b6b7a3e8194"
    ],
    "TSLA": [
      "3e40b595602b29329fe2",
      "bedbcd845618a1bbb666",
      "6113f9ec74b13f27089e",
      "f9a91f42b666feff9127",
      "bf3795e4af99a8a39291",
      "888b56280da4d81d7003",
      "b1b5506b06d7e1ee620b",
      "dff35b67ce2b3330873a",
      "36728b526eaec74f977a",
      "69942c7d05abbc3c0a04",
      "fdea1ad249bf9a72f324",
      "da989621894fd2900d83",
      "9f4385cc5afde794e53d",
      "bb5df90050b0e8ee0683",
      "96292ebd3e91da720c01",
      "1fc67f52948919ac2cb2",
      "aa76f297870b3ac855f4",
      "d100c41031d24b511f96",
      "f681d35846102f575e8a",
      "258612d8a3dd069f008d",
      "e88ab654a631492c2822",
      "b77b8a2f82a5cb1f86ed",
      "e55b82bb041ad30e7d32",
      "1186c46f19eee1d968fd",
      "006e5d3dbbf819715f9f",
      "0cf68824e6973a927f67",
      "a05089e5f723a73d13b1",
      "794398fe1a45b06c2da8"
    ],
    "WDC": [
      "36da252ea80c85f9f487",
      "185877cbeb9150390e48",
      "ee26a1916b0c6d8898c4",
      "ca7d9db8b15b79ee638a",
      "4de3c4f0b24b3415c4ce",
      "c11ece71bb149befb39a",
      "8fa934894781397cc443"
    ],
    "BE": [
      "5a19bf5e8a74613f0861",
      "7f2de8b7c6243dbd7771",
      "5a2dde019f1287c0e979",
      "f80b04528c1340410072",
      "a1aab4850ad3552dcd2f",
      "548eed4659e8755cc6da",
      "3b6d0603aafcf68bba1f"
    ],
    "PLTR": [
      "1a13806de3f188b5408c",
      "68d176b235ebbe3b2705",
      "f59827cb1f22836a964c",
      "fabac6490a7f1432285f",
      "bc5a2c9c21c306efb675",
      "70e625155d14ffc34cfa",
      "acb63be1aff9910c8d5a",
      "3a8e80de6ad3584e5b6e",
      "1cf6cdca1b4b31c0c12d"
    ],
    "META": [
      "157e5f43bc05b5198ad4",
      "1bff98d6fb5526b97b2f",
      "e4132d229659a2dfaa9f",
      "9590cb5fcf81d13ae389",
      "a8393bb24c4d253c848d",
      "db436ffb9458e0c9c22b",
      "fdea1ad249bf9a72f324",
      "5bb37978281ad1345e6e",
      "95405e7f92726d47aa5d",
      "96292ebd3e91da720c01",
      "2fba87a0aa1f9f1d8cd2",
      "9cd02c65371460f9af6d",
      "5f5d5d8dccbf201cb8d1",
      "09536402e980d56bba28",
      "07bab55518f64b200191",
      "d100c41031d24b511f96",
      "c6b58580ba248be0dc69",
      "f681d35846102f575e8a",
      "258612d8a3dd069f008d",
      "e88ab654a631492c2822",
      "b493548e220a0f105b3f",
      "b77b8a2f82a5cb1f86ed",
      "e55b82bb041ad30e7d32",
      "1186c46f19eee1d968fd",
      "0ffd7f6db5add884ee5f",
      "006e5d3dbbf819715f9f",
      "16e61de7cfe09f572fe7",
      "0cf68824e6973a927f67"
    ],
    "ANET": [
      "e894c888b199e01d972f",
      "94b03da05eb19df6787c",
      "edc6c693a57d066393ca",
      "aa332295551a779201ca"
    ],
    "QQQ": [
      "616ecbf23622b713caf5",
      "bf3795e4af99a8a39291",
      "7f2de8b7c6243dbd7771",
      "33fff44de311f6b51037",
      "9d0bd01c346654a1da91",
      "0c54e1164988202deca6",
      "49015a9a783e12ebb9c2",
      "109d5c3a4a9aa38b5984",
      "67f7a539c9bc5d7990a4",
      "82bae992d9807680ab75",
      "db436ffb9458e0c9c22b",
      "9f1a14c5b4f90e510e68",
      "888b56280da4d81d7003",
      "57fe5ee56128b32c90fb",
      "8e5b10e000f8cd88db85",
      "6dba29f9246cd326720a",
      "c9421d067cb5124143a9",
      "0576611f612a8c06288b",
      "dff35b67ce2b3330873a",
      "92b22ce4a0d7332d302a",
      "b7e7abbbe320684088bd",
      "bcd0a132340afbf71af8",
      "503f74bcd19213300618",
      "4de3c4f0b24b3415c4ce",
      "a1aab4850ad3552dcd2f",
      "60e931d7f681cd07d6ce",
      "dc714bb527c91d469cce",
      "3e1942bbb4cc365db652",
      "fabac6490a7f1432285f",
      "864570426d6afecc0c80",
      "95405e7f92726d47aa5d",
      "0a29b7d3852ee13f280f",
      "baa0d790fd5c9d59bf81",
      "a390daf5495857109f84",
      "687c52f525b4fd117b69",
      "12406ae5245631b7f5ba",
      "ae4459e7ad570684b8f3",
      "6b8073cf0dbe9b4a96e2",
      "2b059a85b8e8efff6d23",
      "af15e90efda88b940dd0",
      "acb63be1aff9910c8d5a",
      "97c4fdd697b78f2d396e",
      "548eed4659e8755cc6da",
      "b8a1d13cc19722fe8b5d",
      "ebf43a1a3fa041c4d90a",
      "b77b8a2f82a5cb1f86ed"
    ],
    "SNDK": [
      "33fff44de311f6b51037",
      "f0dd6c6d4ba9fbe05264",
      "c9421d067cb5124143a9",
      "4de3c4f0b24b3415c4ce",
      "829568de7743299e237a",
      "d56a24222d60bc99a107",
      "8fa934894781397cc443"
    ],
    "QCOM": [
      "9d0bd01c346654a1da91",
      "185877cbeb9150390e48",
      "67f7a539c9bc5d7990a4",
      "ee26a1916b0c6d8898c4",
      "843b29f0d16ed2495aa3",
      "c11ece71bb149befb39a"
    ],
    "ASML": [
      "aa189df1adcd5f080ada",
      "54bc9020bb7c90036444",
      "5574d3e85a424dae11b5",
      "e13f4a9d70377623b593",
      "6b9d7ab15917bc19f9f6",
      "31f05914e82367045315"
    ],
    "AAPL": [
      "549f47214d7241564468",
      "49015a9a783e12ebb9c2",
      "ee26a1916b0c6d8898c4",
      "81e83a1fd6f24a1744cb",
      "54bc9020bb7c90036444",
      "fabac6490a7f1432285f",
      "c11ece71bb149befb39a",
      "ebf43a1a3fa041c4d90a",
      "cd7a406e62cf6eddf5ca",
      "12f7daeb2de61da3c471"
    ],
    "AMZN": [
      "549f47214d7241564468",
      "4370a65d9ac24440b745",
      "219d5a4cd2fadc264980",
      "544d5a069a5cbff4afaf",
      "0b89aeaa5c4acc40995c",
      "57fe5ee56128b32c90fb",
      "7ed035cd58152e5025e1",
      "c2f0cae2d0cdfd873990",
      "90946a5c78d06eea408d",
      "d67239114d0a32216d6b",
      "a17855391961b93a4f03",
      "60e931d7f681cd07d6ce",
      "3e1942bbb4cc365db652",
      "1432e8c717f5a1591599",
      "b54335f7976b7e032532",
      "fabac6490a7f1432285f",
      "864570426d6afecc0c80",
      "1e10578f547803c23685",
      "c6f5ce1ef9143b0897d7",
      "2b47bdb76a1dbc02268d",
      "1817cd8db144ee3beec9",
      "cbd6802a9c3f5a2bae26",
      "198bb22db5ba2be5cde9"
    ],
    "TSM": [
      "f96c0e625871e943312c",
      "75b0dbebbe07fbfd7a4b",
      "bcd0a132340afbf71af8",
      "70e92b894ed8fd869039",
      "31f05914e82367045315",
      "b048012de33b44384c14",
      "76e6fff3c2bb3a16cd91"
    ],
    "MSFT": [
      "185877cbeb9150390e48",
      "96e2c4f1e66ff44cc615",
      "0b89aeaa5c4acc40995c",
      "82bae992d9807680ab75",
      "da8bacdb99b09836e6f1",
      "503f74bcd19213300618",
      "a17855391961b93a4f03",
      "166ca2101a701cce018b",
      "d73564e71e4816262e66",
      "0a29b7d3852ee13f280f",
      "0cbf11404a799e09f698",
      "1817cd8db144ee3beec9",
      "b47bf398e06c28ce57e3",
      "7a23cf14a0d301929ef5",
      "83c1aa88d31c26d96013",
      "cd7a406e62cf6eddf5ca",
      "b643d14f1b31e13181c7",
      "c3a3576e655e7032dfe0",
      "d257eecb1c67bc6e1d7a"
    ],
    "STX": [
      "109d5c3a4a9aa38b5984",
      "ca7d9db8b15b79ee638a"
    ],
    "INTC": [
      "9f1a14c5b4f90e510e68",
      "569cf14084c7c65ef21c",
      "da989621894fd2900d83",
      "0cbf11404a799e09f698",
      "12406ae5245631b7f5ba",
      "6be1d306a2cdacb31d22",
      "31f05914e82367045315",
      "e24b971c0b59af6019cc",
      "6ed3f8ed83dd79cc7298"
    ],
    "ETN": [
      "6362f0d766d1a417624a",
      "0d2ea7ed1e4be74d14a8",
      "7fa55c2d1b0cc3af7c06"
    ],
    "LRCX": [
      "35097872ade51ac72bc9",
      "bcd0a132340afbf71af8",
      "2202e21918c78917d121",
      "a1aab4850ad3552dcd2f",
      "7503c93e3e7182d60286",
      "8212a0b3844fe854b4f0",
      "bdf58dad04f3050349f7",
      "5574d3e85a424dae11b5",
      "af15e90efda88b940dd0",
      "857460b1962443ca793b"
    ],
    "COHR": [
      "57fe5ee56128b32c90fb",
      "844472acb46e221b94d3",
      "f7d0bc4d550a62f387a1",
      "687c52f525b4fd117b69",
      "965025493a62a5eede03",
      "2b9b822ef8952ef5a21e"
    ],
    "AVGO": [
      "0576611f612a8c06288b",
      "6442c510c3e64c7acb42",
      "9463a4fe79bfe6761413",
      "dc714bb527c91d469cce",
      "a390daf5495857109f84",
      "6b8073cf0dbe9b4a96e2",
      "2b059a85b8e8efff6d23",
      "8c695df4c32e604c4729",
      "cd7a406e62cf6eddf5ca"
    ],
    "HUBB": [
      "24dadc55eaa194e88208",
      "35bc7082398e0e25c792"
    ],
    "MOD": [
      "c40a780c81fa2b59f530",
      "f25e4edc184ee8dcd9c0"
    ],
    "VRT": [
      "ff96091482933cd6a8bf",
      "7d2e5ac77b572cb866a2",
      "0e3ae56299bc90968508",
      "15f29a94c70e212a02fc"
    ],
    "MRVL": [
      "3c07fc3a8aff14160752",
      "a390daf5495857109f84",
      "2b059a85b8e8efff6d23"
    ],
    "LITE": [
      "baa0d790fd5c9d59bf81",
      "f7d0bc4d550a62f387a1",
      "687c52f525b4fd117b69",
      "ecf353f7baa6b682f353"
    ],
    "ARM": [
      "ecf353f7baa6b682f353"
    ],
    "FIX": [
      "d2d3306dbe2ad909d812"
    ],
    "AMAT": [
      "97c4fdd697b78f2d396e"
    ],
    "VST": [
      "88635dc9bf0fd460153e"
    ]
  }
};
