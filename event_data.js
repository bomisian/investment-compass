// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1788297982.1529076,
  "events": [
    {
      "id": "5e2eb3fff7d616b63452",
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
      "headline": "AAPL Stock Sees Best Day In Over A Month – CEO John Ternus Reportedly Touts 'Phenomenal' iPhone Launch In First Memo To Employees",
      "headlineKo": "AAPL 주식은 한 달 만에 최고의 날을 맞이했습니다. CEO John Ternus는 직원들에게 보낸 첫 번째 메모에서 '경이로운' iPhone 출시를 홍보했다고 합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0d0fa081d258806db0b2c220e75bc4f240fc571c3b4b39d1cbf5e7f7527379a9",
        "publishedAt": 1788292404,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AAPL 주식, 한 달 만에 최고의 날 기록 – CEO John Ternus는 직원들에게 첫 번째 메모로 '경이로운' iPhone 출시를 선전했다고 합니다. 신규 에이전트 연결 Trending News Earnings All DIA 0.84% ​​SPY 0.81% QQQ 1.35% Trending DELL 7.32% QQQ 1.35%",
        "AAPL 주식은 한 달 만에 최고의 날을 맞이했습니다. John Ternus CEO는 직원들에게 보낸 첫 번째 메모에서 '경이로운' iPhone 출시를 선전했다고 합니다. John Ternus가 9월 1일 Tim Cook에서 Apple의 CEO로 취임했습니다.",
        "Apple의 CEO인 Tim Cook(오른쪽)이 2026년 7월 7일 Sun Valley Lodge에서 열린 Allen & Company Sun Valley 컨퍼런스에 도착하여 Apple의 차기 CEO인 John Ternus와 함께 걷고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.84%, 0.81%, 1.35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.84%, 0.81%, 1.35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4771c7405feee78cc629",
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
      "headline": "Apple shares climb as Ternus era begins",
      "headlineKo": "Ternus 시대가 시작되면서 Apple 주가 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6dec1da8d8f0d2c53deb4b6a4d56130695ec1ecacda4749599c17b318b3b697a",
        "publishedAt": 1788290100,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 2.7%, $4.5 trillion, $32 million, $285, 4%.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple shares climb as Ternus era begins' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "7160f861c2eabe939843",
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
      "headline": "Market Chatter: Apple Reshapes Leadership as Maestri Steps Away From Corporate Role",
      "headlineKo": "시장 잡담: Apple은 Maestri가 기업 역할에서 물러나면서 리더십을 재편합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=29ed8151fdc1d523f65757d242496f87efe1f39bfea30fbdc9c4adc29046e8df",
        "publishedAt": 1788289111,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "시장 잡담: Apple은 Maestri가 기업 역할에서 물러나면서 리더십을 재편합니다."
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
      "id": "fdeb3e7e178fa0122308",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "US to Tell G20: Regulate AI Less, Buy American Chips as Nvidia's Jensen Huang Joins Talks",
      "headlineKo": "미국이 G20에게 알릴 것: Nvidia의 Jensen Huang이 회담에 참여함에 따라 AI를 덜 규제하고 미국 칩을 구입하십시오",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d0eef0e462099f2dfe0a9f35992668adeede5c322453bbae332728dd807f0de",
        "publishedAt": 1788276007,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "US to Tell G20: Regulate AI Less, Buy American Chips as Nvidia's Jensen Huang Joins Talks",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'US to Tell G20: Regulate AI Less, Buy American Chips as Nvidia's Jensen Huang Joins Talks' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e005ae4c171f4918d155",
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
      "headline": "Amazon (AMZN): Buy, Sell, or Hold Post Q2 Earnings?",
      "headlineKo": "Amazon(AMZN): 2분기 수익을 구매, 판매 또는 보류하시겠습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=416f79f3fbe5088729f7977b3fc2cee79b9ae67771fa1626fe14d61ebd663d28",
        "publishedAt": 1788275420,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon (AMZN): Buy, Sell, or Hold Post Q2 Earnings?",
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
      "id": "8069e5fb8e0254ebc970",
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
      "headline": "Tesla Falls 3% as Mixed European Registrations Land Ahead of Cybercab Launch",
      "headlineKo": "Tesla는 Cybercab 출시를 앞두고 유럽 혼합 등록이 이루어지면서 3% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=26b695aac00c3ba42686f79022f1fb0a0774e8442cce9a6e96a28a0fae9b3f55",
        "publishedAt": 1788275182,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cybercab 출시를 앞두고 유럽 혼합 등록이 이루어지면서 Tesla는 3% 하락 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 종가 S&P 500 7,638.90 −0.72% Dow Jones 52,772.80 −0.87% Nasdaq 100 29,116.40 −1.23% Russell 2000 2,924.67 −1.07% S&P 500 7,638.90 −0.72% 다우존스 52,772.80 −0.87% 나스닥 100 29,116.40 −1.23% 러셀 2000 2,924.67 −1.07%",
        "혼합된 유럽 등록 데이터가 방금 도착했고 영국과… David Moadel의 더 큰 숫자가 2026년 9월 1일 오전 10시 6분(ET) 게시됨 · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, 0.72%, 0.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, 0.72%, 0.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b56ec895241b583044e5",
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
      "headline": "Down 23%, Is Micron Still a Millionaire-Maker Stock?",
      "headlineKo": "23% 하락, 마이크론은 여전히 ​​백만장자 주식인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6e302ff840a8c5799bc1adbd50c4e0dc130734036ecac88fe7c3e00d9150c2a",
        "publishedAt": 1788275100,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "23% 하락, 마이크론은 여전히 ​​백만장자 주식인가?",
        "| 잡다한 바보 접근성 메뉴 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 가입하세요. 회사 검색 접근성 ...",
        "지난 5년 동안 점유율이 약 1,200% 상승한 Micron Technology(MU -2.00%)는 생성 인공 지능(AI) 메가트렌드에서 뛰어난 성과를 거두고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 23%, 1,200%, 2.00% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 23%, 1,200%, 2.00% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6187cd7d0e0009c42d02",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Cramer Says Not to Bet Against the AI Chipmaker That Lost Nearly 10% the Day After NVIDIA’s Huge Gain",
      "headlineKo": "Cramer는 NVIDIA가 큰 이익을 얻은 다음 날 거의 10% 손실을 입은 AI 칩 제조업체에 대해 베팅하지 말라고 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50c760b6bcdb378a60b16aecbf0d448b2e86203bb9fe3beda9429a7bf6010f6b",
        "publishedAt": 1788274838,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cramer는 NVIDIA가 큰 이익을 얻은 후 거의 10%를 잃은 AI 칩 제조업체에 대해 베팅하지 말라고 말합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 종가 S&P 500 7,663.40 −0.40% Dow Jones 52,965.80 −0.51% Nasdaq 100 29,261.60 −0.74% Russell 2000 2,936.47 −0.67% S&P 500 7,663.40 −0.40% 다우존스 52,965.80 −0.51% 나스닥 100 29,261.60 −0.74% 러셀 2000 2,936.47 −0.67%",
        "10월의 한 데이트는 그가 옳았거나 매우 틀렸다는 것을 증명할 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 0.40%, 0.51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 10%, 0.40%, 0.51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "e144c536c0f8e5ffcefa",
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
      "headline": "Oracle (ORCL) Earnings Expected to Grow: Should You Buy?",
      "headlineKo": "오라클(ORCL) 수익 증가 예상: 매수해야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=10605139f0d71ddc8c81bfe689be3bf1b444929f29028b38a238eab0850da88d",
        "publishedAt": 1788274802,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle (ORCL) Earnings Expected to Grow: Should You Buy?",
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
      "id": "5a862643b98d77ca70e7",
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
      "headline": "Micron Is No Longer What It Was So I Keep Loading Up",
      "headlineKo": "Micron은 더 이상 예전의 상태가 아니므로 계속 로드 중입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=62a04e51d0bd475619459336070d171ab9eca4072d222e585f81ad2da6150291",
        "publishedAt": 1788274357,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron은 더 이상 예전의 모습이 아니기 때문에 계속해서 로딩 중입니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 종가 S&P 500 7,638.90 −0.72% Dow Jones 52,772.80 −0.87% Nasdaq 100 29,116.40 −1.23% Russell 2000 2,924.67 −1.07% S&P 500 7,638.90 −0.72% 다우존스 52,772.80 −0.87% 나스닥 100 29,116.40 −1.23% 러셀 2000 2,924.67 −1.07%",
        "작성자: Alex Sirois 2026년 9월 1일 게시, 오전 9:52(ET) · 3분 읽기 𝕏 f ⧉ Micron Technology의 반도체 칩은 급증하는 AI 메모리 수요를 충족할 준비가 되어 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.72%, 0.87%, 1.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.72%, 0.87%, 1.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0a6cd4892cdef50f2191",
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
      "headline": "I Keep Buying Marvell Technology Because Its Type Historically Wins",
      "headlineKo": "나는 Marvell Technology가 역사적으로 승리했기 때문에 계속 구매하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7b3fc12b56e290dd8a4eb6c48e32ece5d1d1f98d48429eeba2403314eb1986cf",
        "publishedAt": 1788274167,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "나는 Marvell 기술을 역사적으로 승리했기 때문에 계속 구매합니다 - 24/7 Wall St.",
        "콘텐츠로 건너뛰기 닫기 S&P 500 7,642.60 − 0.67% 다우존스 52,763.80 − 0.89% 나스닥 100 29,150.60 − 1.12% 러셀 2000 2,926.22 − 1.02% S&P 500 7,642.60 − 0.67% 다우존스 52,763.80 − 0.89% 나스닥 100 29,150.60 − 1.12% 러셀 2000 2,926.22 − 1.02%",
        "Alex Sirois 작성 2026년 9월 1일 오전 9시 49분 (동부 표준시) · 3분 읽기 중앙 처리 장치 및 상호 연결된 네트워크의 이 추상적인 표현은 Marvell Technology가 AI 및"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.67%, 0.89%, 1.12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.67%, 0.89%, 1.12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "16a618a026a6ea68ec5d",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "QQQ",
        "SPY",
        "TSLA"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
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
      "headline": "Microsoft and Tesla Enter September With Momentum but Which Is Better?",
      "headlineKo": "Microsoft와 Tesla는 모멘텀을 가지고 9월을 맞이하지만 어느 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dadf44465f03f95c4e25fcc4d6ae8569d942346851708542ebfac061500c0d45",
        "publishedAt": 1788273359,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft와 Tesla는 모멘텀을 가지고 9월을 맞이하지만 어느 것이 더 낫습니까?",
        "내용으로 건너뛰기 종가 S&P 500 7,638.90 −0.72% Dow Jones 52,772.80 −0.87% Nasdaq 100 29,116.40 −1.23% Russell 2000 2,924.67 −1.07% S&P 500 7,638.90 −0.72% 다우존스 52,772.80 −0.87% 나스닥 100 29,116.40 −1.23% 러셀 2000 2,924.67 −1.07%",
        "Azure는 현금을 인쇄하고 있고 Tesla는 아직 마진이 나타나지 않은 미래를 쫓아 현금을 소진하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.72%, 0.87%, 1.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.72%, 0.87%, 1.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1d128098b61f7774187d",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Semiconductor Stocks Slide as Global Bond Selloff Lifts Yields: Intel Drops 3%, NVIDIA and AMD Slip",
      "headlineKo": "글로벌 채권 매도가 수익률을 높이면서 반도체 주가 하락: Intel 하락 3%, NVIDIA 및 AMD 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eee0f7082b069c45d973aabac70b91f371df91e53cfdeb082e6561287225c5b4",
        "publishedAt": 1788272116,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "글로벌 채권 매도가 수익률을 높이면서 반도체 주가 하락: Intel은 3% 하락, NVIDIA 및 AMD 하락 - 24/7 Wall St.",
        "내용으로 건너뛰기 종가 S&P 500 7,663.40 −0.40% Dow Jones 52,965.80 −0.51% Nasdaq 100 29,261.60 −0.74% Russell 2000 2,936.47 −0.67% S&P 500 7,663.40 −0.40% 다우존스 52,965.80 −0.51% 나스닥 100 29,261.60 −0.74% 러셀 2000 2,936.47 −0.67%",
        "작성자 David Moadel 2026년 9월 1일 오전 9시 15분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, 0.40%, 0.51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, 0.40%, 0.51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4d1c3fad725d3697dcbe",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Innovid Expands NIVO with Meta Ads MCP Integration to Bring Connected AI Workflows to Social Advertising",
      "headlineKo": "Innovid, 메타 광고 MCP 통합으로 NIVO를 확장하여 연결된 AI 워크플로우를 소셜 광고에 도입",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e9bb5853976b306fd58ddd9abd913a11feff43b6fc8180ee2fe63b571ed2c3f1",
        "publishedAt": 1788271200,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Innovid Expands NIVO with Meta Ads MCP Integration to Bring Connected AI Workflows to Social Advertising",
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
      "id": "1d5c4cc7fe92dfe56aa5",
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
      "headline": "Broadcom Has Floundered For Several Months: A Respected Wall Street Team Expects 80% Returns Ahead",
      "headlineKo": "Broadcom은 몇 달 동안 어려움을 겪었습니다. 존경받는 월스트리트 팀은 앞으로 80%의 수익을 기대합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e46a1f12e85dac012b0014a12239eae334fd39158e227eb1ea1ffb466eb36f8",
        "publishedAt": 1788270838,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom은 몇 달 동안 어려움을 겪었습니다. 존경받는 월스트리트 팀은 앞으로 80%의 수익을 기대합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 종가 S&P 500 7,638.90 −0.72% Dow Jones 52,772.80 −0.87% Nasdaq 100 29,116.40 −1.23% Russell 2000 2,924.67 −1.07% S&P 500 7,638.90 −0.72% 다우존스 52,772.80 −0.87% 나스닥 100 29,116.40 −1.23% 러셀 2000 2,924.67 −1.07%",
        "© Shutterstock Broadcom(NASDAQ:AVGO | AVGO Price Prediction)은 $370.34에 거래되고 있으며 월스트리트의 평균 목표 가격은 약 42%의 격차인 $525.97에 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 80%, 0.72%, 0.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 80%, 0.72%, 0.87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d0aff465dc806f75a1d3",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon Stock Extends Losses After FTC Lawsuit Over Ad Practices",
      "headlineKo": "아마존 주식, 광고 관행에 대한 FTC 소송 후 손실 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=10e9f01a1c12a84f71dc20755dcf837b00c34e4aa3d1f8162c246282a7616060",
        "publishedAt": 1788270471,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon Stock Extends Losses After FTC Lawsuit Over Ad Practices",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "9b609fa951a5397d050a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "MSFT",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle cutting 3,000 India jobs as Microsoft places 500 on PIPs",
      "headlineKo": "오라클은 마이크로소프트가 PIP에 500명을 배치함에 따라 인도에서 3,000명의 일자리를 해고했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=72135367ce7280280326e685ee71b10dde48fc85baa35bcacd47389f16fcbd46",
        "publishedAt": 1788269111,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클, 마이크로소프트가 PIP에 500명을 배치함에 따라 인도에서 3,000명의 일자리를 삭감",
        "두 가지 조치 모두 기술 기업이 새로운 우선순위를 중심으로 지출과 인원 수를 재조정하는 광범위한 산업 변화를 반영합니다.",
        "시장 조사 회사인 EIIRTrend의 CEO인 Pareekh Jain은 영향을 받은 직원이 Microsoft 인도 직원의 약 2%에 달하며 성과 개선 계획이 세계적인 이니셔티브의 일환으로 출시되고 있다고 말했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, 13%, $1.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, 13%, $1.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "25bc0168b90ac2fc9ffe",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "AAPL",
        "CRM"
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
      "headline": "Salesforce surge: Oakmark Select Fund manager says its top holding is still 'dramatically undervalued'",
      "headlineKo": "Salesforce 급증: Oakmark Select Fund 관리자는 최고 보유량이 여전히 '극적으로 저평가'되어 있다고 말합니다.",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=85e4d19a31f2e30490e9a85a6b5e3f0d303371c61644aaaee5a7d62ebcdfdd26",
        "publishedAt": 1788268282,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce 급증: Oakmark Select Fund 관리자는 자사의 최고 보유 자산이 여전히 '극적으로 저평가되어 있다'고 말합니다. 탐색 건너뛰기 시장 비즈니스 투자 기술 정치 및 정책 비디오 관심 목록 Investing Club PRO 라이브스트림 메뉴 지금 보기 이 vi에서",
        "05:25 2시간 전 지금 보기 지금 보기 비디오 04:47 재무부의 채권 개입이 시장에 미친 영향 4분 전 지금 보기 지금 보기 비디오 03:18 Dan Ives: M&A는 여전히 Apple에게 누락된 부분입니다. 43분 전 보기 지금 보기 비디오 03:42 Go",
        "Josh Shapiro: Chobani가 시설에 12억 달러를 투자하는 것은 '우리에게 큰 거래'입니다. 3시간 전 지금 시청하기 지금 보기 비디오 05:45 JPMorgan의 Kevin Foley가 AI 자금 조달 상태, IPO 파이프라인 전망에 대해 6시간 전 지금 보기 지금 보기 비디오 09:04 West Vir"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.2, $17 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $1.2, $17 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e0a78f9ed708066cb097",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "MSFT",
        "TSLA"
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
      "headline": "Tesla's AI Investments Pale In Comparison To Microsoft, Amazon And Alphabet",
      "headlineKo": "Tesla의 AI 투자는 Microsoft, Amazon 및 Alphabet과 비교할 때 창백합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d22e56c416cae9a7ad835d700291edeaf1140abda72666c0b457fa6087f1dbc",
        "publishedAt": 1788267810,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla의 AI 투자는 Microsoft, Amazon 및 Alphabet과 비교할 때 창백합니다."
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
      "id": "af5e7a4c2cf9cf3251b9",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Here Are Tuesday’s Top Wall Street Analyst Research Calls: Akamai Technologies, Arista Networks, Booking Holdings, Cisco Systems, Dell Technologies, Duolingo, Robinhood Markets, PG&E, and More",
      "headlineKo": "화요일의 주요 월스트리트 분석가 연구 통화는 다음과 같습니다. Akamai Technologies, Arista Networks, Booking Holdings, Cisco Systems, Dell Technologies, Duolingo, Robinhood Markets, PG&E 등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4d756bd7e2c7f5b0030d4677a28b4fb6650a1b1524351cfac6c2e0a2f1b1093",
        "publishedAt": 1788267452,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "화요일의 주요 월스트리트 분석가 연구 통화는 다음과 같습니다. Akamai Technologies, Arista Networks, Booking Holdings, Cisco Systems, Dell Technologies, Duolingo, Robinhood Markets, PG&E 등 - 연중무휴 월스트리트",
        "내용으로 건너뛰기 종가 S&P 500 7,663.40 −0.40% Dow Jones 52,965.80 −0.51% Nasdaq 100 29,261.60 −0.74% Russell 2000 2,936.47 −0.67% S&P 500 7,663.40 −0.40% 다우존스 52,965.80 −0.51% 나스닥 100 29,261.60 −0.74% 러셀 2000 2,936.47 −0.67%",
        "작성자 Lee Jackson 2026년 9월 1일 게시, 오전 7시 57분(동부 표준시) · 4분 읽기 𝕏 f ⧉ ©등록시장 전 주식 선물: 선물은 8월을 마무리하기까지 힘든 하루를 보낸 후 하락세로 거래되고 있으며 모든 주요 지수는 월요일 적자로 마감됩니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.40%, 0.51%, 0.74% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.40%, 0.51%, 0.74% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b76f2a087c30405b4ab0",
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
      "headline": "Custom Silicon Kings: When to Choose Broadcom and When to Choose Marvell Technology",
      "headlineKo": "맞춤형 Silicon King: Broadcom을 선택해야 하는 경우와 Marvell 기술을 선택해야 하는 경우",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c14a3448264e7514848c4de6ff4f6feca055bbcd705d6548fe098c3304ffe93",
        "publishedAt": 1788266483,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "맞춤형 Silicon Kings: Broadcom을 선택해야 하는 경우와 Marvell 기술을 선택해야 하는 경우 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 종가 S&P 500 7,638.90 −0.72% Dow Jones 52,772.80 −0.87% Nasdaq 100 29,116.40 −1.23% Russell 2000 2,924.67 −1.07% S&P 500 7,638.90 −0.72% 다우존스 52,772.80 −0.87% 나스닥 100 29,116.40 −1.23% 러셀 2000 2,924.67 −1.07%",
        "그렇다면 왜 그들의 위험 프로필, 가치 평가 및 투자자 논문이 완전히 반대 방향을 가리키고 있습니까?"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.72%, 0.87%, 1.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.72%, 0.87%, 1.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e56e56cabafdba720a43",
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
      "headline": "Oracle: The Balance Sheet Is The Issue (Earnings Preview)",
      "headlineKo": "오라클: 대차대조표가 문제입니다(수익 미리보기)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2b5060d3b92ae16868b5124d4b9844a1c210a844f89560af7c9c1ebdd7c7825b",
        "publishedAt": 1788260171,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클: 대차대조표가 문제입니다(수익 미리보기)"
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
      "id": "61ab29232884a6c8166b",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell’s (MRVL) Data Center Machine Keeps Rewriting Its Own Forecast",
      "headlineKo": "Marvell (MRVL) 의 데이터 센터 머신은 자체 예측을 계속 다시 작성합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a2423c9163a2ae1367bccf2ad47b344b736b2a1699db41b81e31cef577be9f45",
        "publishedAt": 1788259381,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell (MRVL) 의 데이터 센터 머신은 자체 예측을 계속 다시 작성합니다."
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
      "id": "ddeada5adecc3bc0b3e1",
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
      "headline": "UBS Maintains Neutral on KLA, Lowers Price Target to $200",
      "headlineKo": "UBS는 KLA에 대해 중립을 유지하고 목표 가격을 200달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=a306ee9a6bffac623ed1af8f2a62bf238847af29377ecf993edb14daeb70f75d",
        "publishedAt": 1788255549,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "UBS Maintains Neutral on KLA, Lowers Price Target to $200",
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
      "id": "c16f5b53f364388701f3",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "How To Earn $500 A Month From Broadcom Stock Ahead Of Q3 Earnings",
      "headlineKo": "3분기 수익을 앞두고 Broadcom 주식으로 한 달에 500달러를 버는 방법",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8a46dbaa4f47e7ea66eb9c91ed7f75cd1ee1b58a90e404fb74c18682073eb10a",
        "publishedAt": 1788250212,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "3분기 수익을 앞두고 Broadcom 주식으로 한 달에 500달러를 버는 방법"
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
      "id": "94ff0bdcbbd5e747251b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "AAPL",
        "GEV",
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
      "headline": "Why Are XOM, CVX, GEV Stocks Rising Overnight?",
      "headlineKo": "XOM, CVX, GEV 주식이 밤새 상승하는 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3a52cfeaef2d2df657c92719bd6173fc4aaa904812ca392747f7e2a7c78824a",
        "publishedAt": 1788249807,
        "collectedAt": 1788285626.9007306
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "XOM, CVX, GEV 주식이 밤새 상승하는 이유는 무엇입니까?",
        "신규 에이전트 연결 동향 뉴스 수입 전체 DIA 0.74% SPY 0.67% QQQ 1.21% 동향 AAPL 2.65% DELL 5.08% USO 4.53% QQQ 1.21% FRVO 28.22% CRDO 6.83% PANW 6.12% ORCL 5.29% CCL 1.80% MDB 3.96% 홈 뉴스 시장 주식 XOM, CVX, G인 이유",
        "XOM, CVX, GEV 주식이 밤새 상승하는 이유는 무엇입니까?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.74%, 0.67%, 1.21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.74%, 0.67%, 1.21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d07939fbac8873f36991",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "NVDA Is Booming, But BlackRock Sounds the Alarm on a $100 Billion AI Debt Problem: Are AI Bottleneck Plays BE, VRT, MU the Next Winners?",
      "headlineKo": "NVDA는 호황을 누리고 있지만 BlackRock은 1000억 달러 규모의 AI 부채 문제에 대해 경고합니다. AI 병목 현상 플레이가 BE, VRT, MU가 다음 승자가 될까요?",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b61277ffeb68645f1ac6247887f96e447e1946211065fea69ac920df725df94a",
        "publishedAt": 1788247323,
        "collectedAt": 1788284700.8295999
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
        "이 기사는 VRT의 사업과 관련된 'NVDA Is Booming, But BlackRock Sounds the Alarm on a $100 Billion AI Debt Problem: Are AI Bottleneck Plays BE, VRT, MU the Next Winners?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "99944096f91bdcda7225",
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
      "headline": "AMD: Buy This Post-Earnings Pullback",
      "headlineKo": "AMD: 수익 후 하락세를 구매하세요",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ac2fa852724451a4bd274437933e75a22e2e0f41c4efd27d2473c8827a99021d",
        "publishedAt": 1788245951,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD: Buy This Post-Earnings Pullback",
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
      "id": "ab92edebe33adb10466f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "AAPL",
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
      "headline": "MU And SNDK's Nascent Rebound Faces A New Test — China's CXMT Reportedly Makes Major Breakthrough With New AI Memory Chip",
      "headlineKo": "MU와 SNDK의 초기 반등이 새로운 테스트에 직면 - 중국의 CXMT가 새로운 AI 메모리 칩으로 획기적인 발전을 이룬 것으로 알려짐",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe7eb5945cebee5f13bd808c726705f2adeae6d583502b53a1510a66fe20e999",
        "publishedAt": 1788239656,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MU 및 SNDK의 초기 반등이 새로운 테스트에 직면함 - 중국의 CXMT가 새로운 AI 메모리 칩으로 큰 혁신을 이룬 것으로 알려짐 New 에이전트 연결 Trending News Earnings All DIA 0.37% SPY 0.36% QQQ 0.69% Trending NVAX 8.54% AAPL 3.00% DELL 4.",
        "MU와 SNDK의 초기 반등이 새로운 테스트에 직면 - 중국의 CXMT가 새로운 AI 메모리 칩으로 큰 진전을 이룬 것으로 알려짐 중국의 메모리 추진이 글로벌 AI 칩 공급망에 대한 새로운 도전으로 떠오르고 있습니다.",
        "노트북 RAM에 칩이 보입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.37%, 0.36%, 0.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.37%, 0.36%, 0.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c0c9c974696eee3da67d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Intel’s (INTC) Privacy-Focused AI and Foundry Momentum Quietly Redefining Its Investment Case?",
      "headlineKo": "인텔(INTC)의 개인 정보 보호 중심 AI 및 파운드리 모멘텀이 투자 사례를 조용히 재정의하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=213d673c19567fe0e9e758465985bf3f0e9e84d56a13e28ebd0fd26655506868",
        "publishedAt": 1788235792,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔(INTC)의 개인 정보 보호 중심 AI 및 파운드리 모멘텀이 투자 사례를 조용히 재정의하고 있습니까?"
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
      "id": "f68478e0f50e9a3f9ea9",
      "schemaVersion": 1,
      "eventType": "competitor_supply_contract",
      "eventLabel": "경쟁사 공급 계약",
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
      "headline": "Qualcomm rival MediaTek jumps 10% after $3.5 billion Nvidia AI chip deal",
      "headlineKo": "Qualcomm의 경쟁사인 MediaTek은 35억 달러 규모의 Nvidia AI 칩 거래 이후 10% 상승",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=a391a6562161c9049791ec5f8b17bf02953dc5fa902c118f9753e107ad84483b",
        "publishedAt": 1788235223,
        "collectedAt": 1788285626.9007306
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $3.5 billion, 10%, 200%, $2 billion, $80 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 QCOM의 사업과 관련된 'Qualcomm rival MediaTek jumps 10% after $3.5 billion Nvidia AI chip deal' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "98d1fb3f436ad2e77d71",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Cathie Wood Dumps $74 Million of AMD Stock After Explosive Earnings",
      "headlineKo": "Cathie Wood는 폭발적인 수익을 올린 후 7,400만 달러의 AMD 주식을 매각했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a96d4bd7d31174e9e163dd4abd02293268fa8ea6450829ea391dd2195478824b",
        "publishedAt": 1788234242,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cathie Wood는 폭발적인 수익을 올린 후 7,400만 달러의 AMD 주식을 매각했습니다."
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
      "id": "2f557a88e3951b15b788",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vertiv (VRT) Stock May Be Fairly Valued On Raised AI Guidance",
      "headlineKo": "Vertiv(VRT) 주식은 AI 지침 상승으로 인해 공정하게 평가될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd6779b6ffeb13a476430677de13d058f7eadabd930828223b8349296980ad2c",
        "publishedAt": 1788228470,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv (VRT) Stock May Be Fairly Valued On Raised AI Guidance",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VRT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "6c0ea1ff5b490565ec97",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The Ceiling SanDisk Wrote Into Its Own Contracts",
      "headlineKo": "천장 SanDisk는 자체 계약을 작성했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bb0f95c6621c12d61021b60d686d83085cdcca5bb946f400e9aa76bc1f68a845",
        "publishedAt": 1788222910,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "천장 SanDisk는 자체 계약을 작성했습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ba1b3c15186502f95921",
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
      "headline": "The Bull Case For EMCOR Group (EME) Could Change Following Raised Guidance On Data Center Demand",
      "headlineKo": "데이터 센터 수요에 대한 지침이 제기된 후 EMCOR 그룹 (EME) 의 불 사례가 변경될 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=767465efa6e7f3f423f971d0157a4761d35ff3492d30ea1659c6d5ea3f8d6020",
        "publishedAt": 1788214030,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "The Bull Case For EMCOR Group (EME) Could Change Following Raised Guidance On Data Center Demand",
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
      "id": "e6997ce545527599be5f",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Lam Research: Buy The Summer Pullback (Rating Upgrade)",
      "headlineKo": "Lam Research: The Summer Pullback 구매(등급 업그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=39b41244ffd2dfbba6a2834dc3f273d11702fe953452b0eb2ced9b2d0a74e61e",
        "publishedAt": 1788212911,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research 주식: 여름 풀백 매수(등급 업그레이드)(NASDAQ:LRCX) | Alpha Bay Area 아이디어 찾기 5.67K 팔로워 팔로우 요약 Lam Research는 성장 가속화, 마진 확대 및 중국 위험 노출 감소로 인해 매수로 업그레이드되었습니다.",
        "회사는 견조한 AI 및 메모리 수요에 힘입어 6월 분기에 전년 동기 대비 30% 성장했으며, 재고 회전율과 마진 증가로 강력한 펀더멘털을 확인했습니다.",
        "9월 분기에 대한 지침은 추가 가속을 나타냅니다. 매출은 52% YoY, EPS는 71% 증가할 것으로 예상됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, 52%, 71% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, 52%, 71% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "89a6d2a75ad7e2e0cb99",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Vertiv Stock Nearly Doubled On The Same Projects That Delayed Its Revenue",
      "headlineKo": "Vertiv 주식은 수익이 지연된 동일한 프로젝트에서 거의 두 배 증가했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c915295779ab74e0c09f5a0fc122c30bee50ad6dc273711b3131e32188effc4f",
        "publishedAt": 1788212426,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "수익 지연을 초래한 동일한 프로젝트에서 Vertiv 주식이 거의 두 배로 증가 | Trefis Vertiv 주식은 수익을 지연시킨 동일한 프로젝트에서 거의 두 배로 증가했습니다. 2026년 8월 31일 · Trefis Team VRT YTD +59.8% SPY YTD +12.8% XLI YTD +13.2% Ana",
        "Vertiv(VRT)는 S&P 500의 약 20%에 비해 지난 1년 동안 약 92%의 수익률을 올렸으며, 그 격차의 크기는 이야기의 쉬운 부분입니다.",
        "더 어려운 부분은 주가가 $257.08로 마감되었다는 점입니다. 이는 같은 12개월 동안 설정한 최고치인 $376.15보다 약 3분의 1 낮은 수치입니다. 이는 2026 회계연도 2분기 결과에 따른 하락폭입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 59.8%, 12.8%, 13.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 59.8%, 12.8%, 13.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "74c92b7045d29a618169",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Qualcomm Just Gained 15% in a Month: Take Profits, or Buy More?",
      "headlineKo": "Qualcomm은 한 달 만에 15%의 이익을 얻었습니다. 이익을 얻습니까, 아니면 더 많이 사야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc96d09a6ca81a61d78dc8c1085161fc271e07e7384c29343191ce93720fe16c",
        "publishedAt": 1788207955,
        "collectedAt": 1788285626.9007306
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm은 한 달 만에 15%의 이익을 얻었습니다. 이익을 얻습니까, 아니면 더 많이 사야 합니까?",
        "내용으로 건너뛰기 종가 S&P 500 7,635.10 −0.77% Dow Jones 52,746.80 −0.92% Nasdaq 100 29,089.00 −1.33% Russell 2000 2,922.87 −1.13% S&P 500 7,635.10 −0.77% 다우존스 52,746.80 −0.92% 나스닥 100 29,089.00 −1.33% 러셀 2000 2,922.87 −1.13%",
        "Qualcomm 주가는 실적 붕괴 이후 일부 회복되었지만, 회복으로 인해 휴대폰 축소, 입증되지 않은 데이터 센터 베팅, 다음 움직임을 전혀 명백하게 만들지 않는 마진 압박 등의 복잡한 혼합이 숨겨져 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 15%, 0.77%, 0.92% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 15%, 0.77%, 0.92% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cc33a54583070082b1ba",
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
      "headline": "How Investors May Respond To QCOM Naming Sergio Buniac To Lead Mobile, Compute And Personal AI",
      "headlineKo": "QCOM이 모바일, 컴퓨팅 및 개인 AI를 주도할 Sergio Buniac을 지명한 것에 투자자들이 반응할 수 있는 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ff77c13f33727e57f05fef07440facc6e9187870390de88c9e840e49779bf5c",
        "publishedAt": 1788206826,
        "collectedAt": 1788285626.9007306
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
        "이 기사는 QCOM의 사업과 관련된 'How Investors May Respond To QCOM Naming Sergio Buniac To Lead Mobile, Compute And Personal AI' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "76cb7f5bef75106419be",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
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
      "headline": "Nvidia: AI Boom Times Still Ahead",
      "headlineKo": "엔비디아: AI 붐 시대는 아직 앞서 있다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=967de8b85d58ad5415281693a1941e1756c722df88d9ce349c58e0f43df6bf12",
        "publishedAt": 1788206418,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 주식: AI 붐 시대는 아직 앞서 있습니다(NASDAQ:NVDA) | Alpha Stone Fox Capital 투자 그룹 리더 찾기 요약 NVIDIA Corporation은 현재 강력한 AI 기반 수요 속에서 예상되는 70~100% 수익 성장을 기반으로 거래되고 있지 않습니다.",
        "AI GPU 회사는 2027년 2분기 매출 962억 2천만 달러(+105.9% YoY), EPS 2.22달러 등 엄청난 성과를 거두었으며, 3분기 지침은 컨센서스를 초과하고 추가 상승 가능성이 있습니다.",
        "NVDA의 차세대 칩은 GW당 최대 60% 더 높은 매출을 기록하여 데이터 센터 용량 증가가 완화되더라도 대규모 성장을 지원합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 100%, $96.22, 105.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 100%, $96.22, 105.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e077aa84cd24ea0010ef",
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
      "headline": "Goldman Sachs Is Buying Into High Income ETFs, but What Are Nasdaq Investors Giving Up for Those Payouts?",
      "headlineKo": "골드만 삭스는 고소득 ETF로 매수하고 있지만, 나스닥 투자자들은 그 대금을 위해 무엇을 포기하고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2fea76a9a89cb3cab324be36f26ad494bb9a1cd9c2a39f9e333d80a945afaf11",
        "publishedAt": 1788206292,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "골드만 삭스는 고소득 ETF로 매수하고 있지만, 나스닥 투자자들은 그 대금을 위해 무엇을 포기하고 있습니까?",
        "콘텐츠로 건너뛰기 닫기 S&P 500 7,642.60 − 0.67% 다우존스 52,763.80 − 0.89% 나스닥 100 29,150.60 − 1.12% 러셀 2000 2,926.22 − 1.02% S&P 500 7,642.60 − 0.67% 다우존스 52,763.80 − 0.89% 나스닥 100 29,150.60 − 1.12% 러셀 2000 2,926.22 − 1.02%",
        "골드만 삭스는 방금 $ 130억 달러의 QQQI 커버 콜 ETF를 올렸고, 14% 의 수익률은 나스닥 투자자들이 그 월별 수표를 수집하기 위해 조용히 항복한 것을 정확히 볼 때까지 저항할 수 없는 것처럼 보입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.67%, 0.89%, 1.12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.67%, 0.89%, 1.12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8fa943c36d2b51ed9f4d",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Eaton Stock Riskier Than It Was A Year Ago?",
      "headlineKo": "이튼 주식은 1년 전보다 더 위험한가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=252010de3040dbb18d1303b66707f40318a8328d2d3a8474a3ff6deb1d0057cb",
        "publishedAt": 1788205299,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이튼 주식은 1년 전보다 더 위험한가?",
        "| Trefis Debt는 과거보다 Eaton의 자산에서 훨씬 더 큰 비중을 차지하며, 주주들은 이튼의 모든 자산을 뒷받침합니다.",
        "Eaton(ETN)은 데이터 센터 내부에 들어가는 스위치기어와 액체 냉각 장치를 판매하고 있으며, 공장에서 출하할 수 있는 것보다 수요가 앞서고 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 38.0%, 24.8%, 26.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ETN에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 38.0%, 24.8%, 26.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "66d71c864af7e9b41e56",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom Could Swing $139 Billion In Value After Earnings",
      "headlineKo": "Broadcom은 수익 후 1,390억 달러의 가치를 변동시킬 수 있습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6125a10cbc4708559611d3126d9137cd11e7a749ae20ba2cd91d0a8f50748834",
        "publishedAt": 1788202835,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom Could Swing $139 Billion In Value After Earnings",
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
      "id": "ea0f2927241104aa1220",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "AMD",
        "ARM",
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
      "headline": "ARM vs. NVDA: Which AI Chip Designer is Worth Investing in?",
      "headlineKo": "ARM 대 NVDA: 어떤 AI 칩 디자이너에 투자할 가치가 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a53b55e33d985976ef4eb6f8ea67c228996a484c07513b7eb8e797b29e93df11",
        "publishedAt": 1788201060,
        "collectedAt": 1788288579.6381502
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
        "이 기사는 ARM의 사업과 관련된 'ARM vs. NVDA: Which AI Chip Designer is Worth Investing in?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0e891ad4686defdef1fd",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "ORCL",
        "QQQ"
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
      "headline": "Oracle May Remain A Chronic Underperformer",
      "headlineKo": "오라클은 만성적으로 실적이 저조한 상태로 남아 있을 수 있습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=374000e1f8d016e545b2c5caa232ac45ab390a88e6e763202ce64831a747321b",
        "publishedAt": 1788199421,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle은 만성적으로 실적이 저조할 수 있습니다(NYSE:ORCL) | 알파 추구 Paul Franke 27.9K 팔로워 팔로우 요약 Oracle Corporation은 공격적인 AI 데이터 센터 CAPEX로 인해 심각한 무료 현금 흐름 악화에 직면해 있으며 현재 기록적인 최저치를 기록하고 있습니다.",
        "ORCL의 주식은 2025년 8월 이후 총 수익률이 -40%로 QQQ의 +28% 이익보다 저조해 주식 발행 및 차입 수요 확대와 함께 실행 위험이 강조되었습니다.",
        "소비자/기업에 대한 AI LLM 수수료 인상으로 인해 사용자가 쿼리를 줄이게 되면서 ORCL의 하이퍼스케일러 전략의 지속 가능성에 대한 의구심이 커지고 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.4%, 28%, 40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 5.4%, 28%, 40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1c80bb1458e82f446d2b",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
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
      "headline": "Nvidia: This Fortress Can Withstand The Sentiment Storm",
      "headlineKo": "Nvidia: 이 요새는 감정의 폭풍을 견딜 수 있습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8ebab418c29d8b95bd9d4fbaa3f279658429e6b5908b4d304bc969b388b9c729",
        "publishedAt": 1788198351,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: 이 요새는 감정의 폭풍을 견딜 수 있습니다(NASDAQ:NVDA) | 알파 찾기 Oliver Rodzianko 팔로워 7.18K 팔로우 요약 Nvidia Corporation의 Q2 FY27 비트 앤 레이즈는 탁월한 AI 수요를 확인했지만 마진 압박, s 상승",
        "NVDA 주식은 기술적으로 장기 범위의 상단 근처에서 압축된 상태를 유지하고 있으며, 반도체 심리가 약화되면 더 광범위한 부문 조정이 촉발될 수 있습니다.",
        "장기적으로 Nvidia의 풀 스택 AI 플랫폼, 기가와트당 수익 증가, 기업의 폭은 가속화된 컴퓨팅을 위한 핵심 인프라로서의 입지를 강화합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "af16bde21a9de5d05b27",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "GOOGL",
        "MRVL",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Google",
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
      "headline": "Marvell Technology: Greater Clarity Does Not Impress",
      "headlineKo": "Marvell 기술: 더 높은 선명도는 인상적이지 않습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5b4a71f6c01dc5299eafffd7f57c6315118979a3a2767dca80452da6a9f002aa",
        "publishedAt": 1788193597,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell 기술: 선명도가 높아도 인상적이지 않습니다(NASDAQ:MRVL) | 알파 추구 가치 투자자 투자 그룹 리더 팔로우 요약 Marvell Technology, Inc.의 주가는 알파벳/구글에 대한 모호함으로 인해 수익 후 10% 하락했습니다.",
        "2분기 매출은 37% 증가한 27억 4천만 달러로 3분기 지침은 31억 5천만 달러, 전년 대비 50% 성장이 예상되었지만 최근 최고점에서 가치 평가는 매출 20배로 확대되었습니다.",
        "Google 계약으로 인해 연간 제품 매출이 최대 200억 달러까지 증가할 수 있지만 지침에 따르면 약간의 60억 달러 증가 수익이 예상되어 일부 기대를 실망시켰습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 37%, $2.74 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10%, 37%, $2.74 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a92823784b7e70fbf659",
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
      "headline": "Micron: Hyperscalers Bought The Fab, Bears Bought Fairy Tales",
      "headlineKo": "Micron: 하이퍼스케일러는 Fab를 샀고 Bears는 동화를 샀습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ba94c10d144aa803f0b7952e56c7b6fb36f21512d3cf4f017ead8e8cf86d63de",
        "publishedAt": 1788192988,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron: 하이퍼스케일러는 Fab를 구입하고 Bears는 동화를 구입했습니다(NASDAQ:MU) | Alpha Esxeleryn Analytics 찾기 1.95K 팔로어 요약 팔로우 Micron Technology, Inc.",
        "하이퍼스케일러가 SCA를 통해 수십억 달러를 조달하고 용량을 고정하고 주기적 경기 침체로부터 FCF를 보호함에 따라 매수 등급을 얻습니다.",
        "MU가 에이전트 AI KV 캐시 수요와 HBM 웨이퍼 거래 비율에 힘입어 유사 SaaS 유료 징수 모델로 전환하면서 지속적인 높은 마진을 지원합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
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
      "id": "9e8ff232087874189f30",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell: Why I Think The Stock Is Ready For Another Leg Higher (Rating Upgrade)",
      "headlineKo": "Marvell: 주식이 또 한 번 더 상승할 준비가 되어 있다고 생각하는 이유(등급 업그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=16bb3d49b6611e263d23a47d594b1f25483f338ceab03bc5ab3c421ddd9af491",
        "publishedAt": 1788192438,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell: 주식이 또 한 단계 더 높아질 준비가 되어 있다고 생각하는 이유(등급 업그레이드)(MRVL) | 알파 추구 The J Thesis 팔로워 2.34K 팔로우 요약 Marvell Technology, Inc.",
        "28% 하락한 후 Strong Buy로 업그레이드되었으며 현재 밸류에이션이 매력적으로 보입니다.",
        "MRVL은 4회 연속 더블비트 분기를 달성하며 AI 기반 성장 궤도에 대한 자신감을 강화했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 28%, 7%, 31% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 28%, 7%, 31% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2f1da592e24d4bf917c4",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
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
      "headline": "Marvell: Market's Myopia On Alphabet Deal's Potential Is Baffling",
      "headlineKo": "Marvell: 알파벳 거래의 잠재력에 대한 시장의 근시안은 당황스럽습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4e98513098d2b5cc14bbfe6fb8c034e9bee1ed220022a46f52ccf43edf7d570d",
        "publishedAt": 1788191921,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell: Market's Myopia On Alphabet Deal's Potential Is Baffling",
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
      "id": "f4db1be0e6cff3f47d76",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "MRVL",
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
        },
        {
          "name": "Amazon",
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
      "headline": "Marvell: Market's Myopia On Alphabet Deal's Potential Is Baffling",
      "headlineKo": "Marvell: 알파벳 거래의 잠재력에 대한 시장의 근시안은 당황스럽습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4e98513098d2b5cc14bbfe6fb8c034e9bee1ed220022a46f52ccf43edf7d570d",
        "publishedAt": 1788191921,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell: 알파벳 거래의 잠재력에 대한 시장의 근시안은 당황스럽습니다(NASDAQ:MRVL) | 알파 찾기 JR 연구 투자 그룹 리더 팔로우 요약 Marvell Technology, Inc.",
        "다년간의 Google 파트너십을 통해 Amazon 관계를 넘어 혁신적인 수익 기회를 얻을 수 있다는 신호를 보내고 있음에도 불구하고 수익 후 확신이 부족한 상황을 헤쳐나가고 있습니다.",
        "MRVL의 가치 평가는 높은 인식된 실행 위험과 거래 증가 시기에 대한 시장 회의론을 반영하여 향후 수익 70배에서 40배로 재설정되었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "4c0b19c9c108c1b72007",
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
      "headline": "Amazon Refutes U.S. Federal Trade Commission Lawsuit Over Allegedly Misleading Advertisers About Its Sponsored Ads Pricing, Auction",
      "headlineKo": "아마존, 스폰서 광고 가격, 경매에 대해 오해의 소지가 있는 광고주에 대한 미국 연방 무역 위원회의 소송을 반박",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6fcb3635a2d7b479e61b4db10106767e6bad59d263380ffa6f99148f42d0b392",
        "publishedAt": 1788191242,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon Refutes U.S. Federal Trade Commission Lawsuit Over Allegedly Misleading Advertisers About Its Sponsored Ads Pricing, Auction",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "f6c17697958e7129546c",
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
      "headline": "Was the market's reaction to Alphabet’s earnings overblown?",
      "headlineKo": "알파벳의 수익에 대한 시장의 반응이 과도했나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69ba6224c2df2b69c8b49bbe9360791fe38414d4c9a6e0d91c0a17180f32b2e0",
        "publishedAt": 1788191055,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳의 수익에 대한 시장의 반응이 과도했나요?"
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
      "id": "c2ebf782b459946b819a",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMD",
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
      "headline": "AMD: Still Eating Intel's Lunch",
      "headlineKo": "AMD: 아직도 인텔의 점심을 먹고 있다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f98b088261d3a83eaf699b4660bb59129dc2f89466316756897a3e101aa6a75b",
        "publishedAt": 1788189545,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD: 여전히 인텔의 점심을 먹고 있습니다(NASDAQ:AMD) | 알파 금귤 연구 투자 그룹 리더 찾기 요약 따르기 Advanced Micro Devices, Inc.",
        "주가는 대규모 상승 이후 소강 상태에 있습니다.",
        "AMD는 데이터 센터 CPU 공간에서 계속해서 우위를 점하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "5971244267261c0821f6",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "OpenAI Got $5.5B in SB Energy Warrants to Lease Nvidia-Backed AI Data Centers",
      "headlineKo": "OpenAI는 Nvidia 지원 AI 데이터 센터 임대를 위해 SB 에너지 보증으로 55억 달러를 받았습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7ec20d97d1eecd24fe43a985d3bf704b4b8e79d82435f4cd0a3b034fcc1aec9d",
        "publishedAt": 1788188511,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "OpenAI Got $5.5B in SB Energy Warrants to Lease Nvidia-Backed AI Data Centers",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "a6339a0ab8299a98c8cf",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "14x Earnings For 70% Growth: Why Nvidia Remains My Top Pick",
      "headlineKo": "70% 성장에 14배의 수익: Nvidia가 나의 최고 선택으로 남아 있는 이유",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ede70d739bd57ec04e7e45e7b1a44ff1854b87b35f109ac3f98413971c382801",
        "publishedAt": 1788188495,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "14x Earnings For 70% Growth: Why Nvidia Remains My Top Pick (NASDAQ:NVDA) | Seeking Alpha Julian Lin Investing Group Leader Follow Summary Nvidia Corporation remains a top pick, delivering 106% YoY revenue growth and guiding for 70% growth ",
        "NVDA’s dominance in AI infrastructure is reinforced by aggressive ecosystem investments and expansion beyond hyperscaler concentration.",
        "Management projects margins to stabilize at 72–73% in FY28, with strong free cash flow and robust shareholder returns."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "3af05215b5a12b002b10",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000552/tsm-dividendadjustmentx202.htm",
        "publishedAt": 1788188400.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "TSM가 2026-09-01에 SEC Form 6-K을 제출했습니다."
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
      "id": "c928b7bc676dd70cff71",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Billionaire Investor Raises TSMC Stake 67% as Profit Soars 77%, Revenue Climbs 36%",
      "headlineKo": "억만장자 투자자, 이익 77% 급증, 수익 36% 증가로 TSMC 지분 67% 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=588551889f11d42fff4cd1fb39ae978e4eab4a5e5345f412c9f30956b8920882",
        "publishedAt": 1788188315,
        "collectedAt": 1788278427.8524213
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
        "이 기사는 TSM의 사업과 관련된 'Billionaire Investor Raises TSMC Stake 67% as Profit Soars 77%, Revenue Climbs 36%' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d80496fe71fac7718962",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MSFT",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon Web Services, Microsoft Collaborate On Multicloud Networking",
      "headlineKo": "Amazon Web Services와 Microsoft가 멀티클라우드 네트워킹에 협력",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1fa2617cd13045c45fbc0bd9b671fa784644bf62082b7acd58a057a03008b784",
        "publishedAt": 1788188205,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon Web Services, Microsoft Collaborate On Multicloud Networking",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Amazon Web Services, Microsoft Collaborate On Multicloud Networking' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b6a4f5f5f8d71c599576",
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
      "headline": "NVDU: Nvidia's Earnings Beat Opens A Tactical Window For Active Traders",
      "headlineKo": "NVDU: Nvidia의 Earnings Beat는 활동적인 트레이더를 위한 전술적 창을 엽니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=06073b2f20c7fdea69d6ad7faa380ff16e3dfa1569335ea9e55b8c9b73a7729b",
        "publishedAt": 1788186534,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVDU: Nvidia의 Earnings Beat는 활동적인 트레이더를 위한 전술적 창을 엽니다"
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
      "id": "4bdff85c3176072538d6",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Micron Technology: The Center Of Gravity For The Memory Supercycle",
      "headlineKo": "Micron 기술: 메모리 슈퍼사이클의 무게 중심",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fd730bf8518f7b01b93c3c35f61ed2fefc7198400e8ce5a565138c469df4129a",
        "publishedAt": 1788185860,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Technology: 메모리 슈퍼사이클의 중력 중심(NASDAQ:MU) | 알파 추구 Chris Bazzle 팔로워 284명 팔로우 요약 Micron Technology, Inc.",
        "2026년 3분기 실적을 바탕으로 순환 메모리 공급업체에서 미션 크리티컬 AI 인프라 제공업체로 변모하고 있습니다.",
        "MU의 성장은 고대역폭 메모리(HBM)에 대한 수요 급증, 다년간의 전략적 고객 계약, 가격 결정력을 뒷받침하는 지속적인 공급 제약에 의해 주도됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "fb277a9105e85e82ee78",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "단기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "'FTC to File Lawsuit Alleging Amazon Deceived Advertisers' - Wall Street Journal",
      "headlineKo": "'FTC, 아마존 광고주 사기 혐의로 소송 제기' - Wall Street Journal",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=53363cfc83b1641545d8a0f016e99d5da82b65a71680c7f55d5ab7c9d69ba844",
        "publishedAt": 1788185189,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "'FTC, 아마존 광고주 사기 혐의로 소송 제기' - Wall Street Journal"
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
          "ticker": "AMZN",
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "b23b54deaa5530b1d077",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM",
        "SNDK"
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
      "headline": "Qualcomm vs. Sandisk: Comparing Gradual Revenue Contraction Against Rapid Revenue Acceleration",
      "headlineKo": "Qualcomm 대 Sandisk: 점진적인 수익 감소와 빠른 수익 가속화 비교",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d22192571a8df0cd2dd3d0240473f79c8655b7659e6f8eb2f0a6631f2a8cb00",
        "publishedAt": 1788184321,
        "collectedAt": 1788285626.9007306
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm 대 Sandisk: 점진적인 수익 감소와 빠른 수익 가속화 비교"
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
      "id": "7d328a3c007c8924cdd7",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "META",
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
      "headline": "Trade Tracker: Bryn Talkington buys more Tesla",
      "headlineKo": "거래 추적기: Bryn Talkington, Tesla 추가 구매",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=c7765a7b23ed932867381efac0950506c2686f3f435fadec9ecb6af92c31aabc",
        "publishedAt": 1788182254,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "무역 추적기: Bryn Talkington, Tesla 추가 구매 탐색 건너뛰기 시장 비즈니스 투자 기술 정치 및 정책 비디오 관심 목록 Investing Club PRO 라이브스트림 메뉴 지금 보기 이 비디오에서 TSLA 공유 공유 Facebook 기사를 통한 기사 공유 기사",
        "01:11 2026년 8월 31일 월요일 오후 1:17 EDT 지금 보기 지금 보기 비디오 43:44 Anthony Scaramucci의 실패, 자아 및 백악관에서의 11일 보기 지금 보기 비디오 00:40 Army Sec.",
        "Dan Driscoll은 Sec.와의 수개월 간의 마찰 끝에 사임했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
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
      "id": "3659cb922df651988f47",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "'Apple’s Phil Schiller Steps Down from Running App Store, Product Events' - Bloomberg",
      "headlineKo": "'애플의 필 쉴러가 앱스토어, 제품 이벤트 실행에서 물러나다' - 블룸버그",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=f9400be64e9826a0be74e14bcfa1378e2aff2c7b3bca9382fb07c420583c6bef",
        "publishedAt": 1788179608,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "'애플의 필 쉴러가 앱스토어, 제품 이벤트 실행에서 물러나다' - 블룸버그"
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
          "ticker": "AAPL",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "b8d7cbca777d4bbb71e9",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Inside Meta's Landmark Youth-Safety Deal: $18 Billion Settlement Meets New Teen Limits",
      "headlineKo": "Inside Meta의 획기적인 청소년 안전 거래: 180억 달러 합의금으로 새로운 청소년 제한 충족",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7cd15b699e9e0e3a1e9c0eecc5f46f76c6af87c682fabdb83c6d659e591577e6",
        "publishedAt": 1788175278,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Inside Meta's Landmark Youth-Safety Deal: $18 Billion Settlement Meets New Teen Limits",
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
      "id": "75d85a8ee8467de30817",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Higher Rates Could Burst The S&P 500 Bubble",
      "headlineKo": "금리 인상으로 S&P 500 거품이 터질 수 있음",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3c62aaabe4bd6bede4acd00fd35aa087e69efd98d487a1df7a4086d047b4c1b7",
        "publishedAt": 1788174308,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Higher Rates Could Burst The S&P 500 Bubble | Seeking Alpha Damir Tokic 14.67K Followers Follow Summary The S&P 500 is trading with a Shiller PE reading of 42, just below the record high level reached at the peak of the 2000 dot-com bubble.",
        "The Fed committed a policy error by easing prematurely, and now it needs to reinvert the yield curve to curb rising inflation - this could burst the bubble.",
        "If the Fed commits another policy error now and acts too slowly, long-term rates could rise sharply, which could also burst the bubble."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
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
      "id": "2412915696ba01e29a80",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia: Trillions In AI Spend Over 5 Years Keeps The Growth Cycle Intact",
      "headlineKo": "Nvidia: 5년 동안 AI에 수조 달러를 투자하여 성장 주기를 그대로 유지",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ca6298f12d71df209bf6b633de9c8b53e91ff0df4a12e2b808d830e97e9371d4",
        "publishedAt": 1788170417,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: Trillions In AI Spend Over 5 Years Keeps The Growth Cycle Intact (NASDAQ:NVDA) | Seeking Alpha Michael Del Monte 7.66K Followers Follow Summary Nvidia Corporation is positioned for sustained growth, driven by robust AI infrastructur",
        "Vera Rubin GPUs and Vera CPUs are set to enhance NVDA’s economics and capacity, with major deployments and partnerships supporting long-term growth.",
        "Key risks include advanced packaging and memory supply constraints, but NVDA’s strategic investments and diversified customer base provide resilience."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
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
      "id": "78e4b843d5367bd1c43d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "META"
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
      "headline": "End of an era at Apple: Tim Cook's last day as CEO",
      "headlineKo": "Apple 시대의 종말: 팀 쿡의 CEO로서의 마지막 날",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=ef431aa85514a3f4392c6880b48b8cbec15a10ef463b014e9387c1256ab35d9c",
        "publishedAt": 1788168521,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "End of an era at Apple: Tim Cook's last day as CEO Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu watch now In this video AAPL Share Share Article via Facebook Share Arti",
        "'Squawk on the Street' takes a look back at Cook's Time at Apple.",
        "08:04 5 hours ago watch now watch now VIDEO 06:05 Treasury Secretary Bessent: U.S."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "8e525a09e0111c458074",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Expands Global AI Footprint With New Saudi Platform",
      "headlineKo": "AMD, 새로운 사우디 플랫폼으로 글로벌 AI 입지 확장",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=fc6b094e7f24a0646ff03906f590e257e9dc04d67abd69c24c1a00b80a1fd0ea",
        "publishedAt": 1788168453,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD Expands Global AI Footprint With New Saudi Platform",
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
      "id": "177a3aab9d629950e09e",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Soaring AI Memory Demand Positions Micron for Massive Year-Over-Year Earnings Growth",
      "headlineKo": "치솟는 AI 메모리 수요로 인해 Micron은 전년 대비 엄청난 수익 성장을 이룰 수 있었습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=36862c0a89a081182b6ea5e31f45fa28062a5acb07243e7fad2e22b9b1fb7ea1",
        "publishedAt": 1788167937,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Soaring AI Memory Demand Positions Micron for Massive Year-Over-Year Earnings Growth",
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
      "id": "5d4d7592477eab90150c",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Argus Research Maintains Buy on Salesforce, Raises Price Target to $300",
      "headlineKo": "Argus Research, Salesforce 매수 유지, 목표 가격 300달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=70baeb7021b5df8dc2fd1be6503ca9357c2b4cadd56d90ec958e8b935a900c3f",
        "publishedAt": 1788165208,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Argus Research Maintains Buy on Salesforce, Raises Price Target to $300",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "67617fc04b8ab86cafda",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "META"
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
      "headline": "Futurum CEO Daniel Newman: Apple needs to reinvent itself",
      "headlineKo": "Futurum CEO Daniel Newman: Apple은 스스로를 재창조해야 합니다.",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=f9117493efd2da8cbb8a9bb1378bc33ca9e5e39da9eddff09ab73c63c02a109c",
        "publishedAt": 1788158834,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Futurum CEO Daniel Newman: Apple needs to reinvent itself Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu watch now In this video AAPL Share Share Article via Facebook Sha",
        "03:23 Mon, Aug 31 2026 6:47 AM EDT watch now watch now VIDEO 06:05 Treasury Secretary Bessent: U.S.",
        "bond market is outperforming other global bond markets 4 hours ago watch now watch now VIDEO 04:02 Treasury Secretary Bessent: We will get on the other side of the Iran conflict 4 hours ago watch now watch now VIDEO 07:36 The markets could "
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "698649ae67bebca5dee5",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Assessing Broadcom's Performance Against Competitors In Semiconductors &amp; Semiconductor Equipment Industry",
      "headlineKo": "반도체 및 반도체 장비 산업의 경쟁업체에 대한 Broadcom의 성과 평가",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=cea49b19330bb571858cca3a769968bfa37d47846e66511ee8e9f0f308efbc22",
        "publishedAt": 1788155927,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Assessing Broadcom's Performance Against Competitors In Semiconductors &amp; Semiconductor Equipment Industry",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
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
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "1d279150f84d72c7bd5a",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Competitor Analysis: Evaluating Microsoft And Competitors In Software Industry",
      "headlineKo": "경쟁사 분석: 소프트웨어 산업의 Microsoft 및 경쟁사 평가",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=35292225fb919529ddbd9de95bf762221796c52a755d27b88a6460f791599bc5",
        "publishedAt": 1788155919,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Competitor Analysis: Evaluating Microsoft And Competitors In Software Industry",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
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
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "83b60256ba0d24822cee",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "STX",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
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
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Seagate Technology Holdings (STX) Heads To AI Summit As Investors Ask If The Story Is Priced In",
      "headlineKo": "Seagate Technology Holdings (STX), 투자자들의 요청에 따라 AI Summit으로 향하다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47aaed3f1ca9addee86209abcf8ae8eed09583ae186f8a3d58445714d5abd63d",
        "publishedAt": 1788154225,
        "collectedAt": 1788282027.5587816
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
        "이 기사는 STX의 사업과 관련된 'Seagate Technology Holdings (STX) Heads To AI Summit As Investors Ask If The Story Is Priced In' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "235959fa6b3d57be3284",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Evercore ISI Group Initiates Coverage On Lumentum Holdings with Outperform Rating, Announces Price Target of $1100",
      "headlineKo": "Evercore ISI 그룹, 우수한 평가를 받은 Lumentum Holdings에 대한 보도 시작, $1100의 목표 가격 발표",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=01cccef87f74c1080ecf0e3dc841bbeffddbb4fb6795e609807046b8cecfdf74",
        "publishedAt": 1788153895,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Evercore ISI Group Initiates Coverage On Lumentum Holdings with Outperform Rating, Announces Price Target of $1100",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LITE에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "54c7f5dc1d7281b699f2",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
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
      "headline": "Nvidia: Stock Price To Catch Up To Earnings Growth",
      "headlineKo": "엔비디아: 주가가 수익 성장을 따라잡을 것",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=acf97cc25e2e683b51527b41f31cd317f3ee2460fb1fa882d0f00520063dc567",
        "publishedAt": 1788150180,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: Stock Price To Catch Up To Earnings Growth (NASDAQ:NVDA) | Seeking Alpha David Zanoni 12.17K Followers Follow Summary NVIDIA is positioned for strong long-term growth, driven by advanced AI and data center solutions, notably the Ver",
        "NVDA's Vera Rubin platform is expected to achieve the fastest product ramp in company history, with broad adoption by hyperscalers and system OEMs.",
        "NVDA trades at a low PEG ratio of 0.50, reflecting an undervaluation due to its robust 3–5-year annual EPS growth estimate of 49%."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
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
      "id": "6697434a1229c4f4b837",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vistra Stock Sits 37% Below Its High While Power Demand Keeps Climbing. Should You Buy It?",
      "headlineKo": "Vistra 주식은 전력 수요가 계속 증가하는 동안 최고치보다 37% 낮습니다. 당신은 그것을 구입해야합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca284f17011846d939c5f86c4dd16b75d67c93e4321fd23d985dc52ac11f8d57",
        "publishedAt": 1788148861,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra 주식은 전력 수요가 계속 증가하는 동안 최고치보다 37% 낮습니다. 당신은 그것을 구입해야합니까?"
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
          "ticker": "VST",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "219beaf953067561b00b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
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
      "headline": "Nvidia: The Best Days Are Far From Over",
      "headlineKo": "엔비디아: 최고의 날은 아직 끝나지 않았습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fe861e3a39c7f954a44f2b7435081fd58db08371d666adb0ced0c51ca4310ae4",
        "publishedAt": 1788147267,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: The Best Days Are Far From Over (NASDAQ:NVDA) | Seeking Alpha JR Research Investing Group Leader Follow Summary Nvidia's growth engine is far from peaking, translating into a solid outlook of 70% FY2028 revenue growth and robust AI ",
        "NVDA's deepening partnership with SpaceX and rapid expansion into AI cloud ecosystems diversify growth beyond hyperscalers.",
        "The AI cloud growth optionality has deepened further."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "5ae8df2fdb7624e86806",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google takes aim at Anthropic, Microsoft with budget-friendly AI pricing",
      "headlineKo": "Google은 예산 친화적인 AI 가격으로 Anthropic, Microsoft를 목표로 삼고 있습니다.",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=d56be9e39de8b38b8bf7117425a2966b574bfded7adff7d52183193a2fa0cf30",
        "publishedAt": 1788136801,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google takes aim at Anthropic, Microsoft with budget-friendly AI pricing Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu watch now In this video GOOGL Share Share Article ",
        "01:43 Mon, Aug 31 2026 12:40 AM EDT MacKenzie Sigalos"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "d2023321c6b5ea0189d9",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Jim Cramer Says Meta's $17 Billion Child Safety Settlement 'Could Have Been Disastrous,' Instead It's 'Barely Material to Earnings'",
      "headlineKo": "Jim Cramer는 Meta의 170억 달러 규모의 아동 안전 합의가 '재앙적일 수 있었지만' 대신 '수입에 거의 중요하지 않다'고 말했습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8f01d60fd4a6d2bad26267beb0cccd4b66253bd7c94c12cc7f8b9697ed4e7115",
        "publishedAt": 1788133702,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Cramer Says Meta's $17 Billion Child Safety Settlement 'Could Have Been Disastrous,' Instead It's 'Barely Material to Earnings'",
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
      "id": "b0f7c85204f372b5f47b",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "AVGO",
        "GOOGL",
        "MRVL",
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
      "headline": "Marvell Technology: I Vehemently Disagree With The Market Here",
      "headlineKo": "마벨 테크놀로지: 나는 이 시장과 격렬하게 동의하지 않는다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3b007c538c1fc7a3b43563051c1cb3819993afbb0f92b26a6ffbc956cf84161f",
        "publishedAt": 1788121044,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology: I Vehemently Disagree With The Market Here (NASDAQ:MRVL) | Seeking Alpha The Asian Investor 33.1K Followers Follow Summary Marvell Technology delivered record Q2 revenue and operating income last week, driven by strong c",
        "Nonetheless, MRVL dropped 10%+ due to a weak earnings beat.",
        "I reaffirm my 'Strong Buy' rating on MRVL, citing its milestone deal with Alphabet that deepens its integration with Google Cloud's TPU-based platform."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성",
        "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
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
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "MRVL",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
          "basis": "analysis"
        },
        {
          "ticker": "GOOGL",
          "direction": "긍정·확인 필요",
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성",
          "basis": "ai_inference"
        },
        {
          "ticker": "AVGO",
          "direction": "위험·확인 필요",
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성",
          "basis": "ai_inference"
        }
      ],
      "watch": [
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "b5651f804f3e6ea92fb5",
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
      "headline": "S&P 500: Don't Believe Everything You Read About September",
      "headlineKo": "S&P 500: 9월에 대한 모든 것을 믿지 마세요",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d966795e05158d9e8a18004a6869e410d44bfcbcc804d3daed60b7a43cbe33b1",
        "publishedAt": 1788105600,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500: Don't Believe Everything You Read About September (SP500) | Seeking Alpha Andrew McElroy 18.03K Followers Follow Summary The S&P 500 is set to close August with a bullish bias that bodes well into the end of the year.",
        "While there are lots of warnings about the August-October period in midterm years, the stats aren't quite as bad as some make out.",
        "Two-way volatility looks likely to increase."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
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
      "id": "8221d0ebdc98201d7b6e",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR"
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
      "headline": "COHR SEC Form 8-K filed",
      "headlineKo": "COHR SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/820318/000119312526375462/d110649d8k.htm",
        "publishedAt": 1788102000.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "COHR가 2026-08-31에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 임원·이사 변경 또는 보상 · 기타 중요 사건"
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
          "ticker": "COHR",
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
      "id": "6fbd8d2e9fe0aacfe32b",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AAPL",
        "AMZN",
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
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon Has Badly Underperformed the S&P 500 and Nasdaq-100 Since Jeff Bezos Stepped Down as CEO. Could Apple Do the Same Starting Sept. 1 When Tim Cook Steps Down?",
      "headlineKo": "Amazon은 Jeff Bezos가 CEO에서 물러난 이후 S&P 500 및 Nasdaq-100 지수보다 크게 저조했습니다. 팀 쿡이 물러나면 애플도 9월 1일부터 같은 일을 할 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=442a98a01d4b544b63f3f6eb062c31499cb76e9914eeb9f5cf5f089d0096eed1",
        "publishedAt": 1788100500,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon Has Badly Underperformed the S&P 500 and Nasdaq-100 Since Jeff Bezos Stepped Down as CEO.",
        "Could Apple Do the Same Starting Sept.",
        "| The Motley Fool Accessibility Menu ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Search for a company Accessibility ..."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "d9e99302e869cf72fd20",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "INTC",
        "MSFT"
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Among 14 Dividend Growth Companies To Announce Annual Dividend Increases In September",
      "headlineKo": "Microsoft, 14개 배당 성장 기업 중 9월에 연간 배당 증가율 발표 예정",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d51433a38a0f4890cf4c5e89cba7f152e5467f9b5df585ace5da77fceb26f54f",
        "publishedAt": 1788096438,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Among 14 Dividend Growth Companies To Annual Dividend Increases In September | Seeking Alpha Harvesting Dividends 3.67K Followers Follow Summary Microsoft is projected to announce a 10–12% dividend increase, driven by robust reven",
        "MSFT's Productivity and Intelligent Cloud segments delivered 16% and 30% revenue growth, offsetting weakness in More Personal Computing.",
        "Despite heavy AI investments, MSFT maintains a compounded dividend growth rate near 10% over 3 and 5 years."
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
      "id": "bab21abe6ae97cb68c3f",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "Microsoft: A High-Quality AI Name That Is No Longer Misunderstood",
      "headlineKo": "Microsoft: 더 이상 오해의 소지가 없는 고품질 AI 이름",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b1c233d5799408d07e2e32b2a1adca075e81e92599584c8165fa077acb1c0882",
        "publishedAt": 1788085673,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Corp.: A High-Quality AI Name That Is No Longer Misunderstood (NASDAQ:MSFT) | Seeking Alpha Vinay Utham, CFA 1.55K Followers Follow Summary Microsoft delivered exceptional Q4 results, with Azure annual revenue surpassing $100 bill",
        "MSFT funds its AI and cloud build-out entirely from robust free cash flows, distinguishing itself from peers facing negative or weaker cash generation.",
        "Cloud gross margins have declined for four quarters, and management forecasts modest operating margin compression in FY27, with stabilization catalysts emerging."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "b1db90a46b3ef67c59d7",
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
      "headline": "He beat Big Tobacco. Will the same playbook work against Meta and social media?",
      "headlineKo": "그는 Big Tobacco를 이겼습니다. 메타 및 소셜 미디어에 대해 동일한 플레이북이 작동합니까?",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=b52aac3aa9daaa50b1b2d38dd97cf26c1c6e9fe2ea4ab1783557a3e010a163b5",
        "publishedAt": 1788076802,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Will the same playbook work against Meta and social media?",
        "Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu Key Points Former Mississippi Attorney General Mike Moore took on Big Tobacco in the 1990s and is now working on language f",
        "Meta this week agreed to pay about $17 billion as part of a settlement with a coalition of state AGs, who accused the company of knowingly creating addictive features for kids and teens."
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
      "id": "f728f8b33b4009a060cf",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom Stock Faces Valuation Test as Fiscal Q3 Earnings Approach",
      "headlineKo": "브로드컴 주식은 회계연도 3분기 실적 접근 방식에 따라 밸류에이션 테스트를 실시합니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=57465e6b570887927c69c198fa50b0fec911d3b237cc3b4a0007f20fa1eb78e1",
        "publishedAt": 1788027309,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom Stock Faces Valuation Test as Fiscal Q3 Earnings Approach",
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
      "id": "81fe55850ee254be779d",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom, Palo Alto Networks Headline Earnings Amid A Tight Economic Calendar",
      "headlineKo": "빡빡한 경제 일정 속에서 브로드컴, 팔로알토 네트웍스 헤드라인 수익",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1c83a2c86c8db0866676e3aafc425c609bd7b7715585b004d97d373f8ffa28c4",
        "publishedAt": 1788001200,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom, Palo Alto Networks Headline Earnings Amid A Tight Economic Calendar | Seeking Alpha Wall Street Week Ahead 87.09K Followers Follow Get ahead of the market by subscribing to Seeking Alpha's Wall Street Week Ahead, a preview of key ",
        "The newsletter keeps you informed of the biggest stories set to make headlines, including upcoming IPOs, investor days, earnings reports, and conference presentations.",
        "Wall Street swung between modest gains and losses on Friday as traders digested Federal Reserve Chair Kevin Warsh's speech at the Jackson Hole Symposium."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
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
      "id": "b63fb9526fdee061881a",
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
      "headline": "Should Eaton’s AI Data Center and Healthcare Deals With Trane Signal a Strategic Shift for ETN Investors?",
      "headlineKo": "Eaton의 AI 데이터 센터 및 헬스케어 거래가 Trane Signal과 함께 ETN 투자자에게 전략적 변화를 가져올까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=acc2e54c59021eff636643208dfbff6cdb90c84f29e4f12a85c0e69941353d2f",
        "publishedAt": 1787998011,
        "collectedAt": 1788284700.8295999
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
        "이 기사는 ETN의 사업과 관련된 'Should Eaton’s AI Data Center and Healthcare Deals With Trane Signal a Strategic Shift for ETN Investors?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "bd6b87e4edf671f3f374",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Op-ed: Salesforce just revealed the next battleground in AI — and it's not the models",
      "headlineKo": "논평: Salesforce가 방금 AI의 다음 전장을 공개했습니다. 이는 모델이 아닙니다.",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=7c7d30418f174dc5e1357c5c66cdfd802fa6c1bb544f2f4c9bd57cf64c09523e",
        "publishedAt": 1787994001,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "논평: Salesforce가 AI의 다음 전장을 공개했습니다.",
        "모델이 아닙니다. 탐색 건너뛰기 시장 비즈니스 투자 기술 정치 및 정책 비디오 관심 목록 Investing Club PRO 라이브스트림 메뉴 핵심 포인트 Salesforce의 최근 폭발적인 수익은 힘의 균형이 앞뒤로 이동할 수 있는 이유를 보여줍니다.",
        "이것이 경제학 101입니다. 투입물이 풍부하고 저렴해지면 가치는 부족한 보완재로 이동합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $2 trillion, 355%, $3.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2 trillion, 355%, $3.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bf0d91ba0f34aa862a60",
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
      "headline": "ASML Holding (ASML) Rally Keeps Valuation Questions In Focus",
      "headlineKo": "ASML Holding (ASML) 랠리는 가치 평가 질문에 초점을 맞췄습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c63e480f245a0e7be9ad15e76eebe903e83833a43153c8c58fbac8222d0520ac",
        "publishedAt": 1787990947,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML Holding (ASML) 랠리는 가치 평가 질문에 초점을 맞췄습니다."
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
      "id": "5e217d76ddc07191ed5e",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Jackson Hole And The Nasdaq-100: Does The Market Overprice The Weekend Risk?",
      "headlineKo": "잭슨홀과 나스닥-100: 시장이 주말 위험을 과대평가하는가?",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3baec9f3bd95ec4772f4db50c064d8f96dcd76b25511666d2555485eeaac9d92",
        "publishedAt": 1787971200,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "잭슨홀과 나스닥-100: 시장이 주말 위험을 과대평가하는가?",
        "(NDX) | Alpha Russell Rhoads 5 추종자 팔로우 요약 거래자들은 Jackson Hole에서 나오는 뉴스에 대한 시장 반응에 대비하는 경향이 있으며 Nasdaq-100(NDX)은 경제적으로 가장 민감한 광범위한 지수입니다.",
        "잭슨홀 미팅과 겹치는 3거래일의 평균 움직임은 +/-1.22%로, 2018년에 가장 큰 상승폭(+1.81%)과 2022년에 가장 큰 손실률을 기록했으며, NDX는 3.36%를 포기했습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.22%, 1.81%, 3.36% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 1.22%, 1.81%, 3.36% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9e5666be192e65dc0192",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
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
      "headline": "Meta’s $18 billion settlement puts TikTok and YouTube on notice. Who's next on the firing line?",
      "headlineKo": "Meta의 $ 180억 정산은 TikTok과 YouTube를 통지합니다. 다음은 누가 발사 라인에 있습니까?",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=c2e66c3961adc17bc6d599cf3432a561b5ad6dca0be837dd804d63714674b59e",
        "publishedAt": 1787965201,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta’s $18 billion settlement puts TikTok, YouTube next on firing line Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu Key Points Meta's $18 billion settlement in the soci",
        "Under the settlement conditions, Meta called on YouTube and TikTok to also make changes to their apps.",
        "California's Attorney General Rob Bonta told CNBC he has plans to target other big players next."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
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
      "id": "bf54e0823235d899517a",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arista's Price Assumes The Parts Arrive On Time",
      "headlineKo": "Arista의 가격은 부품이 정시에 도착한다고 가정합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ca249c28c47540def5712b078fe2ed68ac53ca1b059ecca99573455ce2837b4",
        "publishedAt": 1787955941,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista의 가격은 부품이 제 시간에 도착한다고 가정합니다 | Trefis Consensus는 2년 이내에 주식의 수익 배수를 약 3분의 1로 줄이며, 그것이 일어날지 여부를 결정하는 것은 고객 수요가 아닌 부품 공급입니다.",
        "Arista Networks(ANET)는 AI 클러스터를 연결하는 이더넷 패브릭을 구축하고 있으며 지난 한 해 동안 거의 50%의 상승세를 보인 후 해당 주식은 미래가 이미 지불된 것처럼 보이는 수익 배수를 제공합니다.",
        "분석가들은 2년 후 수익에 대해 동일한 가격으로 다른 수치를 매수할 것으로 예상합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, 57.2 times, 48.2 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 50%, 57.2 times, 48.2 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6a25fc0177566499b6f0",
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
      "headline": "Western Digital Just Dropped 13% in a Month. Is It Time to Sell?",
      "headlineKo": "Western Digital은 한 달 만에 13% 하락했습니다. 매도할 시간인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=037bcc57b9c3c06fa5a80f21dda96cb3a121a6899458d62070c98e73445d42ed",
        "publishedAt": 1787947276,
        "collectedAt": 1788292355.855579
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital은 한 달 만에 13% 하락했습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,633.40 −0.79% Dow Jones 52,741.20 −0.93% Nasdaq 100 29,096.80 −1.30% Russell 2000 2,920.62 −1.21% S&P 500 7,633.40 −0.79% 다우존스 52,741.20 −0.93% 나스닥 100 29,096.80 −1.30% 러셀 2000 2,920.62 −1.",
        "Western Digital은 올해 168% 급등했으며 플래시와 DRAM 업계의 동종업체는 계속 상승하고 있지만 WDC 주가는 이를 설명하는 회사별 헤드라인 없이 13% 하락했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 0.79%, 0.93% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 0.79%, 0.93% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fade39562bf3866d7b1b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ARM's Expanding AI Growth Opportunity Goes Beyond Market Hype",
      "headlineKo": "ARM의 AI 성장 기회 확대는 시장 과대광고를 넘어선다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90e5e71fbbd9c0375003e00188014b10e349c7bd1fde80a0deef05c2760df6b0",
        "publishedAt": 1787945400,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ARM의 AI 성장 기회 확대는 시장 과대광고를 넘어선다"
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
      "id": "978f127c1dcf179ad905",
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
      "headline": "Optics Stocks Slide as AI Hardware Trade Cools: Applied Optoelectronics and Lumentum Fall 6%, Coherent Drops 5%",
      "headlineKo": "AI 하드웨어 거래 냉각으로 광학 주식 하락: Applied Optoelectronics 및 Lumentum 6% 하락, Coherent 하락 5%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b64a0124d7c358965083b30b9eb6b280c71066b35cf794a9038722f02f26c389",
        "publishedAt": 1787943297,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 하드웨어 거래 냉각으로 광학 주식 하락: Applied Optoelectronics 및 Lumentum 6% 하락, Coherent 하락 - 24/7 Wall St.",
        "내용으로 건너뛰기 종가 S&P 500 7,663.40 −0.40% Dow Jones 52,965.80 −0.51% Nasdaq 100 29,261.60 −0.74% Russell 2000 2,936.47 −0.67% S&P 500 7,663.40 −0.40% 다우존스 52,965.80 −0.51% 나스닥 100 29,261.60 −0.74% 러셀 2000 2,936.47 −0.67%",
        "매도는 한 회사나 시장이 아닌 AI 하드웨어에 집중되어 투자자들이 움직임을 읽는 방식을 변화시킵니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 5%, 0.40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, 5%, 0.40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "23a348918ccb8f9e1124",
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
      "headline": "Apple preps for CEO handoff, cuts jobs in AI and software",
      "headlineKo": "Apple, CEO 인계 준비, AI 및 소프트웨어 관련 업무 감축",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=98eb184f79a545094c1e06eee59ec48c1e7256708f357f5a14a466d081163dab",
        "publishedAt": 1787934956,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple, CEO 인계 준비, AI 및 소프트웨어 관련 업무 감축"
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
      "id": "a4d1007571fbcb3eb788",
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
      "headline": "Why Is Lam Research (LRCX) Up 7% Since Last Earnings Report?",
      "headlineKo": "Lam Research(LRCX)가 지난 수익 보고서 이후 7% 상승한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d99316105d3a6be17fe1294ac0371f91b8d24edaa8a1bdf41dea5d1f3b0d7c82",
        "publishedAt": 1787934627,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Is Lam Research (LRCX) Up 7% Since Last Earnings Report?",
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
      "id": "a264c284da021e873ae7",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "QQQ",
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
      "headline": "Tesla: Autonomous Monetization Begins, But Not Priced In Yet",
      "headlineKo": "테슬라: 자율적인 수익 창출이 시작되지만 아직 가격이 책정되지는 않음",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9f8449ec75051a7ae1ac0fc712a492410504bcd6e0bca51791a66efe7e6c1cf9",
        "publishedAt": 1787927132,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla: Autonomous Monetization Begins, But Not Priced In Yet (NASDAQ:TSLA) | Seeking Alpha Envision Research Investing Group Leader Follow Summary Tesla, Inc.'s price corrected drastically after Fiscal Q2 2026 earnings, reflecting the marke",
        "This focus misses the company’s long-term platform value brought about by its autonomous technologies.",
        "FQ2 earnings updates show multiple signs of monetization for TSLA’s autonomy capabilities, whose nonlinear growth potential is not fully priced in."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "e520364f3c81789d511e",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "Microsoft: The Rerating Is Probably Over For Now (Rating Downgrade)",
      "headlineKo": "Microsoft: Rerating is Probably Over For Now (등급 다운그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=67ad2ed6e6cf5762de61fe8d77d555c5cdf9373f4664e36c8e63772725b6a41e",
        "publishedAt": 1787925798,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft: The Rerating Is Probably Over For Now (Rating Downgrade) (NASDAQ:MSFT) | Seeking Alpha Konstantinos Kosmidis 1.47K Followers Follow Summary Microsoft rallied after Q4 results, reversing prior negative sentiment tied to AI CapEx a",
        "MSFT’s CapEx guidance for 2026 stabilized, Copilot adoption accelerated, and Azure growth re-accelerated to 43%, easing concerns about margin compression and competitive moats.",
        "Despite the rally, MSFT trades at a premium to other hyperscalers, requiring conviction in sustainable margin drivers."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "898b714bdb251875f0a7",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet has the four pillars in AI, says Glenview Trust's Bill Stone",
      "headlineKo": "글렌뷰 트러스트 (Glenview Trust) 의 빌 스톤 (Bill Stone) 은 알파벳은 AI의 네 가지 기둥을 가지고 있다고",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=59a0de77575baf87db7f7e63a713a38646fbaa24a812ab4571d225bdc68879c1",
        "publishedAt": 1787925025,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet has the four pillars in AI, says Glenview Trust's Bill Stone Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu watch now In this video GOOGL Share Share Article via",
        "03:05 Fri, Aug 28 2026 1:50 PM EDT watch now watch now VIDEO 07:36 The markets could rally 'very strongly' if the Fed holds rates in September: Fundstrat's Tom Lee an hour ago watch now watch now VIDEO 09:40 SMBC's Joe Lavorgna: I believe t",
        "middle-market platform' 3 hours ago watch now watch now VIDEO 15:00 Inside Lynas Rare Earths and the race to build supply chains beyond China watch now watch now VIDEO 05:42 Fmr."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "812cbec4b91184b24406",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Change Agents Accepted into Seagate Partner Program, Expanding Access to AI Infrastructure Ecosystem",
      "headlineKo": "Seagate 파트너 프로그램으로 승인된 에이전트를 변경하여 AI 인프라 생태계에 대한 액세스 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f876cfe23907e83164011d626c1a899d3a7f375cad33ccac575a9dd9872f5f8e",
        "publishedAt": 1787924700,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Change Agents Accepted into Seagate Partner Program, Expanding Access to AI Infrastructure Ecosystem",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "실제 CAPEX 집행",
        "공급업체 수주·매출",
        "투자 기업 OCF·FCF·부채"
      ]
    },
    {
      "id": "f78a1857be0246fdd474",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Craig-Hallum Maintains Buy on Marvell Technology, Raises Price Target to $300",
      "headlineKo": "Craig-Hallum은 Marvell Technology에 대한 구매를 유지하고 가격 목표를 $ 300로 높입니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b08217ded0dff378d0511c5bb2358f96aabdce2cce59925968cb48d8418113a8",
        "publishedAt": 1787923963,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Craig-Hallum은 Marvell Technology에 대한 구매를 유지하고 가격 목표를 $ 300로 높입니다."
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
          "ticker": "MRVL",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "bbd744448b3350d53bc0",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Is Broadcom Stock Sliding Ahead of Earnings?",
      "headlineKo": "Broadcom 주식이 수익을 앞서는 이유는 무엇인가요?",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=fcff8da030159b8c4702662be93d884813319c51352eea9bbd6ae5b13d49ad70",
        "publishedAt": 1787923773,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom 주식이 수익을 앞서는 이유는 무엇인가요?"
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
      "id": "7a2b579ed7dfcef1db7a",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "GOOGL",
        "MRVL",
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
          "name": "Marvell",
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
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell’s Google AI Chip Deal Could Drive $120 Billion in Long-Term Revenue: Analyst",
      "headlineKo": "Marvell의 Google AI 칩 거래로 $ 1,200억의 장기 수익 창출 가능: 애널리스트",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e77e8cf70ecc98e852fe1fee5b1997608e093632fe46b11766d869fa1791065b",
        "publishedAt": 1787922326,
        "collectedAt": 1788278427.8524213
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
        "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회",
        "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성",
        "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
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
        },
        {
          "ticker": "MRVL",
          "direction": "긍정·확인 필요",
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회",
          "basis": "ai_inference"
        },
        {
          "ticker": "GOOGL",
          "direction": "긍정·확인 필요",
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성",
          "basis": "ai_inference"
        },
        {
          "ticker": "AVGO",
          "direction": "위험·확인 필요",
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성",
          "basis": "ai_inference"
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
      "id": "8dcae7c2e78ca564e8f4",
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
      "headline": "Nvidia Crushed Earnings: Doubling My Oracle Position",
      "headlineKo": "Nvidia Crushed 수입: Oracle 포지션 두 배 증가",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=100a250bec5d579c9263b1b356a51852eeac9f63ca6ecd9eea7d5f69a58421cd",
        "publishedAt": 1787919310,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 압도된 수익: 오라클 포지션을 두 배로 늘림(NYSE:ORCL) | 알파 찾기 James Foord 투자 그룹 리더 팔로우 요약 Oracle Corporation은 견고한 펀더멘털과 기술적 모멘텀에도 불구하고 ATH 이하로 거래되는 최고의 AI 베팅으로 남아 있습니다.",
        "Nvidia의 전례 없는 장기 AI 수요 지침은 ORCL의 6,380억 달러 RPO 백로그의 위험을 제거하고 비대칭 상승 가능성 이론을 강화합니다.",
        "ORCL의 엔터프라이즈 데이터 해자 및 AI Database 26ai는 급증하는 엔터프라이즈 및 산업용 AI 수요를 활용하도록 포지셔닝합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $638, $400, 28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $638, $400, 28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e8b539a446990e9de047",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "STX",
      "relatedTickers": [
        "NVDA",
        "QQQ",
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
      "headline": "Seagate: Not A Time To Be Greedy - More Consolidation Ahead",
      "headlineKo": "씨게이트: 욕심을 부릴 때가 아닙니다 - 더 많은 통합을 앞두고 있습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4385ee1e34b196366d48f723daeea011b4a89385d39f461274bcbb10b907f8f3",
        "publishedAt": 1787919234,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate: 욕심을 부릴 때가 아닙니다. 앞으로 더 많은 통합이 예상됩니다(NASDAQ:STX) | 알파 병치 아이디어 찾기 16.15K 팔로워 팔로우 요약 NVDA는 FY2028까지 두 자릿수 성장을 유도하여 AI에 활기를 불어넣고 STX는 뮤가 될 가능성이 높습니다.",
        "완전히 계약된 2027년 용량 및 장기 공급 계약은 강력한 수익성 있는 성장 전망과 풍부한 현금 흐름 창출을 지원합니다.",
        "STX는 또한 HAMR 기술 발전에 힘입어 물량 성장 대신 대기밀도에 초점을 맞춰 주기적 호황/불황의 고통에서 벗어날 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "f213eee3b688a3f65b2f",
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
      "headline": "SK Hynix: Higher Revenue Than Micron, Cheaper Than Micron (Initiating Buy)",
      "headlineKo": "SK하이닉스: 마이크론보다 높은 수익, 마이크론보다 저렴한 수익 (매수 개시)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=672ed4a3fc4226d22bbc4ab60c35413c294172c4ffe0795d8ca072e84c3afc5b",
        "publishedAt": 1787917161,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SK Hynix: Higher Revenue Than Micron, Cheaper Than Micron (Initiating Buy)",
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
      "id": "76ddf5fd1219db52812b",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Western Digital (NASDAQ:WDC) Clears All Eight Growth Screens with Accelerating Earnings and Margins",
      "headlineKo": "Western Digital (NASDAQ: WDC), 수익 및 마진 증가와 함께 8개의 성장 화면 모두 삭제",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=6f860c69843e52ad3fd24fe83b893eb42235aeb8ebaf9fd104dc1fc39deb1d6b",
        "publishedAt": 1787916676,
        "collectedAt": 1788292355.855579
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital (NASDAQ:WDC) Clears All Eight Growth Screens with Accelerating Earnings and Margins",
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
      "id": "b5e0ff3e25321c0311a4",
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
      "headline": "Oracle: Get Paid 7% While Betting On The Stock's Rebound",
      "headlineKo": "오라클: 주식 리바운드에 베팅하는 동안 7% 지급받기",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9abd8eb771891f0b4d78bb6aba063728820228c1a7e9250e4f77ef0c89547274",
        "publishedAt": 1787916308,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클: 주식 반등에 베팅하여 7% 수익을 얻으세요(NYSE:ORCL) | 알파 바샤르 찾기 Issa 7.77K 팔로워 팔로우 요약 오라클은 58%의 주가 하락과 선도 P/E 이후 위험/보상이 유리하게 편향된 강력한 매수로 평가되었습니다.",
        "ORCL의 클라우드 인프라 수익은 2026년 4분기에 93% 급증하여 현재 총 수익의 30%를 차지했으며 Fusion 및 NetSuite ERP 제품은 두 자릿수 성장을 기록했습니다.",
        "부채와 AI CapEx는 여전히 우려되지만 임대 약정은 계약 수익과 일치하여 대차대조표 위험을 완화할 것으로 예상됩니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 58%, 93% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, 58%, 93% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d47f2730c0a579e7fa40",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "MRVL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell CEO Calls Google AI Revenue Opportunity a 'Monster Number'",
      "headlineKo": "Marvell CEO, Google AI 수익 기회를 '괴물 번호' 라고 부르다",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6332b0cfd78d4fe4c70b79a2c61211307c1951e875f1d56218ce12ec631e6dec",
        "publishedAt": 1787916067,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell CEO, Google AI 수익 기회를 '괴물 번호' 라고 부르다"
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
          "ticker": "GOOGL",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "da74a7e41dedaf796747",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN"
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
      "headline": "Morgan Stanley Maintains Overweight on Eaton Corp, Raises Price Target to $520",
      "headlineKo": "Morgan Stanley는 Eaton Corp에서 과체중을 유지하고 가격 목표를 $ 520로 올립니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d490a376325c51cdecc3fc332f42b8b465da00bc491f3628ba079489d891e128",
        "publishedAt": 1787912893,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley Maintains Overweight on Eaton Corp, Raises Price Target to $520",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ETN에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "d6919d33bcd3dd20f75f",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MOD",
      "relatedTickers": [
        "MOD"
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
      "headline": "Modine: A Medium-Term, High-Stakes Bet",
      "headlineKo": "모딘: 중장기 고위험 투자",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9acfc02476ed3b2a72733aaa0a06aeb185080661e233b770a789c5abb45150f8",
        "publishedAt": 1787912154,
        "collectedAt": 1788285626.9007306
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Modine: 중기적, 고위험 베팅(NYSE:MOD) | Alpha Balakumaran Kannan을 찾고 있습니다 팔로워 11명 팔로우 요약 저는 데이터 센터 냉각 슈퍼사이클과 전략적 sh에 힘입어 Modine Manufacturing Company에 최종 매수 등급을 지정합니다.",
        "MOD는 40억 달러 규모의 하이퍼스케일러 계약을 체결하고 수익성이 낮은 부문을 분사하고 있으며 분사 후 상당한 총이익 개선을 기대하고 있습니다.",
        "2027 회계연도 1분기에는 매출이 28% 증가했고 데이터 센터 매출은 90% 증가했지만 일시적인 운영 비효율성으로 인해 총 마진이 감소했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $4 billion, 28%, 90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MOD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MOD에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $4 billion, 28%, 90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "050a5d8c7f4c0fcffd92",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Technology Consolidation: Soaring Memory Revenue Meets Fresh Policy Uncertainty",
      "headlineKo": "마이크론 기술 통합: 급증하는 메모리 수익, 새로운 정책 불확실성 충족",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=f919eafbb4b7551174e208acd8b2db7227eb8a5bf9fb1d09093ca5579ea46059",
        "publishedAt": 1787911397,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Technology Consolidation: Soaring Memory Revenue Meets Fresh Policy Uncertainty",
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
      "id": "036fcff437adefe47750",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arista Networks (ANET) Price Target Increased by 27.24% to 242.83",
      "headlineKo": "Arista Networks (ANET) 가격 목표가 27.24% 증가한 242.83",
      "source": {
        "name": "Fintel",
        "url": "https://finnhub.io/api/news?id=2c5d75af005eb3ba1ce207211f2b104c0c72fc84ab1c075265d2aa4ccaa5bfd6",
        "publishedAt": 1787897289,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista Networks (ANET) 가격 목표가 27.24% 증가한 242.83"
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
      "id": "fbe84a66acb173fb6b94",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Performance Comparison: Amazon.com And Competitors In Broadline Retail Industry",
      "headlineKo": "성능 비교: Amazon.com 및 브로드라인 소매 산업의 경쟁업체",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4b9ece611cc806e1bb748f9ccc87644447c833efe1627b2dbff537f033858949",
        "publishedAt": 1787896728,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Performance Comparison: Amazon.com And Competitors In Broadline Retail Industry",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
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
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "741796c3cc0dcd3ac93e",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Comparative Study: Microsoft And Industry Competitors In Software Industry",
      "headlineKo": "비교 연구: 소프트웨어 업계의 Microsoft 및 업계 경쟁사",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=46ccd9bc9d1f8744b2c555f17933a4776b6b08ac073999fe2ce4752207d026d0",
        "publishedAt": 1787896710,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Comparative Study: Microsoft And Industry Competitors In Software Industry",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
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
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "19b6f90ae2097a53bf3d",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "META",
        "PLTR"
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta, Palantir, Paramount Skydance Hedge Trump Ties by Courting Democrats as Midterms Raise Prospect of House Flip: Report",
      "headlineKo": "메타, 팔란티르, 파라마운트 스카이댄스 헤지 트럼프, 중간고사로 인해 하우스 플립 가능성이 높아짐에 따라 민주당에 구애됨: 보고서",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=81ac3ae056abd0aeff19be3eb6c666186fbd81ee85b6f02de3daf41c426b7114",
        "publishedAt": 1787891396,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta, Palantir, Paramount Skydance Hedge Trump Ties by Courting Democrats as Midterms Raise Prospect of House Flip: Report",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "6a0245b6544d3258642d",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Hubbell (HUBB) Stock Looks Overvalued On Cash Flow But Fair On Earnings",
      "headlineKo": "Hubbell (HUBB) 주식은 현금 흐름에서 과대 평가되었지만 수익에서는 공정한 것으로 보입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8037798c577a9bf7db87d4bbdb4d7b6682706f6db7c7c2356cade7c413262fca",
        "publishedAt": 1787879697,
        "collectedAt": 1788296427.1602583
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Hubbell (HUBB) 주식은 현금 흐름에서 과대 평가되었지만 수익에서는 공정한 것으로 보입니다."
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
          "ticker": "HUBB",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "70bfd28063281f82c32b",
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
      "headline": "How Investors Are Reacting To Applied Materials (AMAT) AI-Fueled Backlog, New Fabs And EPIC Center Bet",
      "headlineKo": "AMAT(Applied Materials) AI 기반 백로그, 새로운 Fab 및 EPIC Center Bet에 대한 투자자의 반응",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d13d62850b1ddf6358d0cf3674ce6dde1b3dc6db681957119485c58ff4e0bb1f",
        "publishedAt": 1787875983,
        "collectedAt": 1788292833.532955
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
        "이 기사는 AMAT의 사업과 관련된 'How Investors Are Reacting To Applied Materials (AMAT) AI-Fueled Backlog, New Fabs And EPIC Center Bet' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "241950d0b8fd93e53f9f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "COHR vs. APP: Which AI Growth Stock Offers the Better Investment?",
      "headlineKo": "COHR 대 APP: 어느 AI 성장주가 더 나은 투자를 제공합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b3ed395988ad92e5e7ff5efbe9c1653d6cc7e57b2f77f0e0f4f23571e9e3e90",
        "publishedAt": 1787858100,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "COHR 대 APP: 어느 AI 성장주가 더 나은 투자를 제공합니까?"
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
      "id": "99c63b2fbbbec623f124",
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
      "headline": "Lumentum Holdings Inc. (LITE) Presents at Deutsche Bank 2026 Technology Conference Transcript",
      "headlineKo": "Lumentum Holdings Inc. (LITE), Deutsche Bank 2026 기술 컨퍼런스 성적 증명서 발표",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2d35c07467d2b18a11a1079dcd354eb648db0b3fe12670670e680bd966f2c151",
        "publishedAt": 1787850558,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "(LITE) Presents at Deutsche Bank 2026 Technology Conference Transcript | Seeking Alpha SA Transcripts 162.06K Followers Follow Lumentum Holdings Inc.",
        "( LITE ) Deutsche Bank 2026 Technology Conference August 27, 2026 1:45 PM EDT Company Participants Michael E.",
        "Hurlston - President, CEO & Director Conference Call Participants Gianmarco Conti - Deutsche Bank AG, Research Division Presentation Gianmarco Conti Deutsche Bank AG, Research Division All right."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LITE에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "3c12b3ed30f374110ff0",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "KLA (KLAC) Up 8% Since Last Earnings Report: Can It Continue?",
      "headlineKo": "KLA(KLAC)는 지난 수익 보고서 이후 8% 상승: 계속될 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2a9b157fe1b9ce0d7876a36c199600441da958d814fc7b08519776a7896d9a8",
        "publishedAt": 1787848216,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA(KLAC)는 지난 수익 보고서 이후 8% 상승: 계속될 수 있을까요?"
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
          "ticker": "KLAC",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "c8e7208365402c91d4f3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "MRVL"
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
      "headline": "MRVL SEC Form 10-Q filed",
      "headlineKo": "MRVL SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000025/mrvl-20260801.htm",
        "publishedAt": 1787842800.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "MRVL가 2026-08-28에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "MRVL",
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
      "id": "d47e3edaaa6e746703d5",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "AAPL",
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
      "headline": "Qualcomm: Handset Pains Persist - Data Center Inflection In FY 2027",
      "headlineKo": "Qualcomm: 핸드셋 통증 지속 - 2027 회계연도 데이터 센터 굴절",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6a1f65b2b906390ebf59dfa48d25cb0470b02a79966351cfb5ea59eb0622f27a",
        "publishedAt": 1787829307,
        "collectedAt": 1788285626.9007306
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm: 핸드셋 문제 지속 - 2027 회계연도 데이터 센터 변화(NASDAQ:QCOM) | 알파 병치 아이디어 추구 16.15K 팔로워 팔로우 요약 AAPL 감소 및 메모리/스토리지 공급 위기는 2026년 4분기 QCOM의 역풍을 강조합니다.",
        "이는 2029 회계연도까지 400억 달러에 달하는 QCT 비핸드셋 매출 지침을 기반으로 데이터 센터/자동차 수익화 기회 가속화로 균형을 이룰 수 있습니다.",
        "성공적인 M&A 노력을 뒷받침하는 다가오는 2027 회계연도 데이터 센터 활용과 함께 QCOM의 다각화 전략이 구체화되고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $40, 68.9%, $271.30. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $40, 68.9%, $271.30. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e8bffdc7ddaa2b96f696",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "PWR",
      "relatedTickers": [
        "PWR"
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
      "headline": "Quanta Services: Recent Selloff Creates Compelling Buy",
      "headlineKo": "Quanta 서비스: 최근 판매로 매력적인 구매 창출",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a9567e5b62b400795c34837ca49436af8671334f4aaf69988eeb5e625aa8a7db",
        "publishedAt": 1787818246,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services 주식: 최근 매도세가 매력적인 매수 창출(NYSE:PWR) | Alpha Blake Winiecki를 찾고 있습니다. 팔로워 770명 팔로우 요약 Quanta Services는 전력 수요 급증, 그리드 현대화 및 AI-d의 혜택을 받아 구매 등급을 받았습니다.",
        "PWR은 기록적인 2026년 2분기 실적을 기록했습니다. 매출 95억 6천만 달러(YoY 41% 증가), 조정 EPS 4.24달러(71% 증가), 연간 가이던스를 대폭 상향 조정했습니다.",
        "백로그는 기록적인 534억 달러에 도달했으며, 12개월 이내에 235억 달러가 전환될 것으로 예상되어 강력한 전방 가시성을 지원합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $9.56, 41%, $4.24 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $9.56, 41%, $4.24 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "628d24854e208cadd616",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "PWR",
      "relatedTickers": [
        "PWR"
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
      "headline": "Quanta Services Dropped But Earnings Just Changed The Narrative",
      "headlineKo": "Quanta 서비스가 중단되었지만 수입이 내러티브를 변경했습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=24108d6a2697da267ee008ecb248043438576f393aee8b76cb90ea231407d674",
        "publishedAt": 1787817395,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services 주식은 하락했지만 수익은 내러티브를 변화시켰습니다(NYSE:PWR) | 알파 투자자 찾기 개요 3,000명의 팔로워 팔로우 요약 Quanta Services는 41%의 수익 성장, 71%의 조정 EPS 성장,",
        "PWR은 유기적 성장과 최근 인수에 힘입어 2026년 지침을 대폭 상향 조정하여 현재 매출 393억~397억 달러, 조정 EPS 1645~16.95달러를 예상하고 있습니다.",
        "주가가 16% 하락한 후 가치 평가가 개선되어 현재 2026년 수익은 36배이지만 여전히 높은 수준입니다. 나는 좀 더 건설적인 전망을 가지고 보류 등급을 유지합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 41%, 71%, $39.3 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 41%, 71%, $39.3 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d55a86e34a0170f8ac35",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vertiv: AI's Physical Bottleneck Is Expanding Its Value Per Megawatt",
      "headlineKo": "Vertiv: 메가와트당 가치를 확장하는 AI의 물리적 병목 현상",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=15f3ee7e0ecfa797048afe51cdff16a568f6756c26539491519b6e02689d628e",
        "publishedAt": 1787811391,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv: 메가와트당 가치를 확장하는 AI의 물리적 병목 현상"
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
      "id": "b3e1fca489b98b4a35c2",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "KLA: The AI Yield Bottleneck Is Becoming More Valuable",
      "headlineKo": "KLA: 인공지능 수익률 병목 현상이 점점 더 가치 있게 되고 있습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b412780369cb65a10ee670a53f37d11c05b6fbee8e3062d403f9d8e398593ca3",
        "publishedAt": 1787796938,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA 주식: AI 수익률 병목 현상의 가치가 높아지고 있습니다(NASDAQ:KLAC) | 알파 단순 투자 아이디어 찾기 10.95K 팔로워 팔로우 요약 KLA는 칩 복잡성 증가로 이익을 얻을 수 있는 독보적인 위치에 있으며, 발전 수요를 주도합니다.",
        "KLAC의 내장형 워크플로우, 지배적인 시장 점유율, 패키징/서비스 수익 확대는 기술 해자와 반복적인 수익 기반을 강화합니다.",
        "저는 2027 회계연도 매출을 163억 달러, 총 마진 62.2%, EPS 4.75달러로 모델링하며, AI, 패키징, 서비스 확장에 따른 성장을 예상합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $16.3, 62.2%, $4.75, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $16.3, 62.2%, $4.75, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e18f9bdf9f418b407605",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "How Vertiv’s Strong Interest Coverage and Analyst Praise Will Impact Vertiv Holdings Co (VRT) Investors",
      "headlineKo": "Vertiv의 Strong Interest Coverage 및 애널리스트 칭찬이 Vertiv Holdings Co (VRT) 투자자에게 미치는 영향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=261b62fc9ef6d27abdf92d113a13c9c7bb9300b8bb807c96edf04f8b83c20e72",
        "publishedAt": 1787782720,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv의 Strong Interest Coverage 및 애널리스트 칭찬이 Vertiv Holdings Co (VRT) 투자자에게 미치는 영향"
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
      "id": "140947ab446ca57ecdbd",
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
      "headline": "Constellation's New Power Deals Are Piling Up. Here's Why the Stock Isn't Reflecting It Yet.",
      "headlineKo": "Constellation의 새로운 전력 거래가 늘어나고 있습니다. 주식이 아직 이를 반영하지 않는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80e89ea81005b77faf1a63391a2a3a5c42f3d2a9e55268cacc87a0afa5b01625",
        "publishedAt": 1787779500,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation의 새로운 전력 거래가 늘어나고 있습니다. 주식이 아직 이를 반영하지 않는 이유는 다음과 같습니다."
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
      "id": "b3634d900eefec19e38f",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce Stock Soars On Q2 Double Beat, 'Claudeforce' Anthropic Partnership",
      "headlineKo": "세일즈포스 주식은 2분기 더블 비트, 'Claudeforce' 인류애적 파트너십으로 급등",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c23072556bdd438138a5dc8e09adda7ebe6e2f3f8ab8da3b1bd9193cefbc1e60",
        "publishedAt": 1787762346,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce Stock Soars On Q2 Double Beat, 'Claudeforce' Anthropic Partnership",
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
      "id": "798019b01d10733ce3ab",
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
      "headline": "Oracle Corporation (ORCL) Presents at Deutsche Bank 2026 Technology Conference Transcript",
      "headlineKo": "Oracle Corporation(ORCL)이 Deutsche Bank 2026 기술 컨퍼런스 성적표에서 발표합니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=288d1442e2541cbca9aaa344478e5ae5b01b4fb732c020643d755a3864a930ba",
        "publishedAt": 1787761155,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle Corporation (ORCL) Presents at Deutsche Bank 2026 Technology Conference Transcript | Seeking Alpha SA Transcripts 162.06K Followers Follow Oracle Corporation ( ORCL ) Deutsche Bank 2026 Technology Conference August 26, 2026 11:45 AM ",
        "I'm Brad Zelnick, Head of Software Equity Research here at Deutsche Bank.",
        "And on behalf of myself and all my colleagues, extremely delighted to welcome you all to the 20th Annual Deutsche Bank TMT Conference here in sunny Monarch Beach, the Waldorf Astoria in Southern California."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
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
      "id": "6d84d2021fea3950e5ca",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM"
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
      "headline": "Salesforce Raises FY2027 GAAP EPS Guidance from $7.93-$7.99 to $10.21-$10.25 vs $8.16 Est",
      "headlineKo": "Salesforce, FY2027 GAAP EPS 지침을 $7.93-$7.99에서 $10.21-$10.25(예상 $8.16)로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5843e33ac4019ea505ee8907510f0d48d5b80a33ceaa9834ce0f9b8f39313c5d",
        "publishedAt": 1787760295,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce Raises FY2027 GAAP EPS Guidance from $7.93-$7.99 to $10.21-$10.25 vs $8.16 Est",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "08a80f1bb976cf9492ce",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce Sees Q3 GAAP EPS $1.81-$1.83 vs $1.90 Est",
      "headlineKo": "Salesforce는 Q3 GAAP EPS $1.81-$1.83 대 $1.90 Est를 확인합니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=93dce494a1ee0ef31a468fa63cec25d697ba1c20602b08d1e94291c839bae855",
        "publishedAt": 1787760274,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce는 Q3 GAAP EPS $1.81-$1.83 대 $1.90 Est를 확인합니다."
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
          "ticker": "CRM",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "cf8178ad53a9793f8303",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM"
      ],
      "relatedEntities": [],
      "importance": "high",
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
      "headline": "Salesforce Raises FY2027 Adj EPS Guidance from $14.06-$14.12 to $16.67-$16.71 vs $14.14 Est; Raises FY2027 Sales Guidance from $45.900B-$46.200B to $46.100B-$46.400B vs $46.111B Est",
      "headlineKo": "Salesforce, FY2027 조정 EPS 지침을 $14.06-$14.12에서 $16.67-$16.71(예상 $14.14)로 인상 FY2027 판매 지침을 $459억~$462억에서 $461억~464억(예상 $461억1100만)으로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6127b2d6711f47df6a09a0cfafa495f9a9975431930c4f857262553d154cf2d8",
        "publishedAt": 1787760232,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce, FY2027 조정 EPS 지침을 $14.06-$14.12에서 $16.67-$16.71(예상 $14.14)로 인상 FY2027 판매 지침을 $459억~$462억에서 $461억~464억(예상 $461억1100만)으로 인상"
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
          "ticker": "CRM",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "10b435a91ddf9d3a56b2",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell Technology Could Swing $20.8 Billion After Earnings",
      "headlineKo": "Marvell Technology는 수익 후 208억 달러를 기록할 수 있습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5de354d13730a93ee429314425e07f00cd7acbab3adf57ab4bc021f564f1d6f0",
        "publishedAt": 1787758215,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology Could Swing $20.8 Billion After Earnings",
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
      "id": "50b22c5e8494cfb63372",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM"
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
      "headline": "CRM SEC Form 10-Q filed",
      "headlineKo": "CRM SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000190/crm-20260731.htm",
        "publishedAt": 1787756400.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "CRM가 2026-08-27에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "CRM",
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
      "id": "f38e3eb137af6ef4160e",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "매출",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "MRVL"
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
      "headline": "MRVL SEC Form 8-K filed",
      "headlineKo": "MRVL SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000022/mrvl-20260827.htm",
        "publishedAt": 1787756400.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "MRVL가 2026-08-27에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $2.74B · 영업이익 $0.46B · 순이익 $0.31B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 3.15 billion ± 5.0"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 부합: 실제 0.94 / 예상 0.9428 (-0.30%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 1회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
      ],
      "unverified": [
        "시장 EPS 컨센서스의 제공자 회계기간 표기와 다음 분기 사업 영향은 추가 확인이 필요합니다."
      ],
      "beginnerExplanation": [
        "회사가 실적을 SEC에 공식 제출했습니다. 매출·영업이익·순이익은 SEC 검증 수치를 우선하고, EPS 예상 상회·하회는 별도 시장 컨센서스와 비교합니다."
      ],
      "whyItMatters": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "MRVL",
          "direction": "중립·원문 확인",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "basis": "official_filing"
        }
      ],
      "watch": [
        "매출·영업이익·순이익의 전년 대비 변화",
        "현재 가이던스와 다음 분기 실제 결과",
        "일회성 손익·OCF·FCF"
      ],
      "earningsEvidence": {
        "version": 6,
        "analyzedAt": 1788278654.327845,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-08-01",
          "metrics": {
            "revenue": 2739300000,
            "opIncome": 459700000,
            "netIncome": 308000000
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "center": 3.15,
              "plusMinus": 5.0,
              "unit": "billion",
              "deltaUnit": "billion"
            }
          ],
          "targetPeriod": null,
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 0.94,
          "estimate": 0.9428,
          "providerPeriod": "2026-09-30",
          "label": "in_line",
          "surprisePct": -0.3,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000022/q227_8kx812026ex-991.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2026-08-27",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000022/q227_8kx812026ex-991.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "437ebc3c071f1823cd7e",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT"
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
      "headline": "AMAT SEC Form 8-K filed",
      "headlineKo": "AMAT SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/6951/000162828026059257/amat-20260827.htm",
        "publishedAt": 1787756400.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "AMAT가 2026-08-27에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 임원·이사 변경 또는 보상 · 규정 FD 공개 · 재무제표·첨부자료"
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
          "ticker": "AMAT",
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
      "id": "bec0478fe9fa24e04eff",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "LRCX"
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
      "headline": "LRCX SEC Form 8-K filed",
      "headlineKo": "LRCX SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000043/lrcx-20260824.htm",
        "publishedAt": 1787756400.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "LRCX가 2026-08-27에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 임원·이사 변경 또는 보상",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망"
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
          "ticker": "LRCX",
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
      "id": "fa137cefdf21cd107824",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV"
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
      "headline": "GEV SEC Form 8-K filed",
      "headlineKo": "GEV SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000153/gev-20260825.htm",
        "publishedAt": 1787756400.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "GEV가 2026-08-27에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 임원·이사 변경 또는 보상",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망"
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
          "ticker": "GEV",
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
      "id": "aeb50a507e2b94a53da7",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet Stock Dips Wednesday as Investors Weigh AI Spending Against Cloud Growth",
      "headlineKo": "투자자들이 클라우드 성장에 대한 AI 지출을 평가함에 따라 알파벳 주가가 수요일 하락했습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1dbbbd79949df8b4e2d169ae00b761bd98851f15ecb988f1faef94de16bf2c4f",
        "publishedAt": 1787752283,
        "collectedAt": 1788278427.8524213
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
        "이 기사는 GOOGL의 사업과 관련된 'Alphabet Stock Dips Wednesday as Investors Weigh AI Spending Against Cloud Growth' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "ee928201e80103f69388",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "META",
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
      "headline": "Options traders brace for Nvidia earnings",
      "headlineKo": "옵션 거래자들은 Nvidia 수익을 기대합니다.",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=5a72dde108326bc3c005a7d8b8610af60dda500c3334bab33e7789944637fc7a",
        "publishedAt": 1787750086,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Options traders brace for Nvidia earnings Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu watch now In this video NVDA Share Share Article via Facebook Share Article via T"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
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
      "id": "9faab8aabe78cb7c1704",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft, Amazon, Google Court Kimi K3 Maker Despite Bessent Blacklist Threat",
      "headlineKo": "Bessent 블랙리스트 위협에도 불구하고 Microsoft, Amazon, Google Court Kimi K3 Maker",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5c61b3ea63bf2475f36326e1d3e147963041e66d3a17afacd7431ae125672655",
        "publishedAt": 1787748592,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft, Amazon, Google Court Kimi K3 Maker Despite Bessent Blacklist Threat",
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
      "id": "37cf64d6776cdffade5d",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "CRM",
        "META",
        "ORCL"
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "'We think it's a good opportunity': Citi's Tyler Radke on a bull case for Oracle",
      "headlineKo": "'우리는 이것이 좋은 기회라고 생각합니다': Oracle에 대한 황소 사건에 대한 Citi의 Tyler Radke",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=b153fd3a294b47cc6013e90a0e75946218916114ca195dae8c6a7aa4d9a23ab0",
        "publishedAt": 1787748118,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "'We think it's a good opportunity': Citi's Tyler Radke on a bull case for Oracle Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu watch now In this video ORCL Share Share A",
        "software equity research, joins 'Squawk on the Street' to discuss the bull case for Oracle.",
        "05:03 Wed, Aug 26 2026 12:41 PM EDT watch now watch now VIDEO 10:26 Salesforce CEO Marc Benioff goes one-on-one with Jim Cramer an hour ago watch now watch now VIDEO 06:06 Florida Attorney General Uthmeier: We're not settling with Meta, we'"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "f9223d48ea3d5188940a",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Looking ahead to Nvidia earnings tonight: Investor's investment strategy",
      "headlineKo": "오늘 밤 Nvidia 수익 전망: 투자자의 투자 전략",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=c362d7d6fe4bc8d6f6480cb97279ec3b9a848ac8d16293efac96934dadb7b1ab",
        "publishedAt": 1787748065,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Looking ahead to Nvidia earnings tonight: Investor's investment strategy Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu watch now In this video NVDA Share Share Article v",
        "CNBC’s Kristina Partsinevelos joins ‘Halftime Report’ with what to expect from the company.",
        "10:40 2 hours ago watch now watch now VIDEO 09:30 Experts react to the July PCE report 5 hours ago watch now watch now VIDEO 04:05 Fed’s preferred inflation gauge shows core prices rose 3.3% annually in July 5 hours ago watch now watch now "
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
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
      "id": "d4e8a00177166f2d3a1d",
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
      "headline": "Apple sets iPhone launch event for Sept. 9, first under new CEO John Ternus ",
      "headlineKo": "애플, 신임 CEO 존 터너스 취임 후 첫 아이폰 출시 행사 9월 9일로 결정",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=4942d9a7f5815c778c5a27132015237bc6f89e39775703f8ed408d24f3ed324b",
        "publishedAt": 1787747077,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple sets iPhone launch date, first under new CEO John Ternus Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu Key Points Apple announced it is holding a launch event at i",
        "Analysts expect Apple to launch new iPhones and Apple Watches at the event, including the company's first folding phone.",
        "A new version of Siri called Siri AI is also expected."
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
      "id": "fe138c39db1848a70147",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "Stocks making the biggest moves midday: Meta, Abercrombie & Fitch, Zoom, Intuit & more",
      "headlineKo": "정오에 가장 큰 움직임을 보이는 주식: Meta, Abercrombie & Fitch, Zoom, Intuit 등",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=19a4182d79789846c4a270145b81b6e3d4588aa2423a7ed8806827fe49b6b37b",
        "publishedAt": 1787746033,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocks making the biggest moves midday: META, ANF, ZM, INTU Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu Check out some of the companies making the biggest moves in mid",
        "Abercrombie & Fitch — The teen apparel retailer retailer's stock soared 37% after it trounced fiscal second-quarter estimates and raised its full year outlook.",
        "The company earned $2.42 per share on an adjusted basis, while revenue grew 5% to $1.27 billion."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "a91a3208dacc5783a627",
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
      "headline": "Nvidia earnings live updates: Q2 results, memory prices and AI outlook",
      "headlineKo": "Nvidia 수익 실시간 업데이트: 2분기 결과, 메모리 가격 및 AI 전망",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=ed0641981f09fed7e00b31bcacc65f5f7d2e916eaf2c7bd9be37e6d0669fe4e0",
        "publishedAt": 1787745601,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 수익 실시간 업데이트: 2분기 결과, 메모리 가격 및 AI 전망"
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
      "id": "27fcd6ff0e875828211a",
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
      "headline": "Nvidia Earnings: Top AI Stocks And What We Need To See For A Rally",
      "headlineKo": "Nvidia 수익: 최고의 AI 주식과 랠리를 위해 확인해야 할 사항",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0476f7ef930de980f7966778d688764048769fe102d32ccca11e277073a8723b",
        "publishedAt": 1787745501,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 수익: 최고의 AI 주식과 랠리를 위해 확인해야 할 사항"
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
      "id": "7f32eb0bc7b27b1e0b59",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "68% of AI Hyperscaler CapEx Could Go to Memory in 2027: Why Micron Matters",
      "headlineKo": "AI 하이퍼스케일러 CapEx의 68%가 2027년에 메모리로 전환될 수 있음: Micron이 중요한 이유",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=621ce8c78bec3ac335216aeb8af3b20e09ace5db155a8266268e84fdd5098f19",
        "publishedAt": 1787738708,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "68% of AI Hyperscaler CapEx Could Go to Memory in 2027: Why Micron Matters",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "b2df436b97fe71911f33",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "RBC Capital Reiterates Sector Perform on Broadcom, Maintains $400 Price Target",
      "headlineKo": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
        "publishedAt": 1787734386,
        "collectedAt": 1788284700.8295999
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
        "이 기사는 AVGO의 사업과 관련된 'RBC Capital Reiterates Sector Perform on Broadcom, Maintains $400 Price Target' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "07873f765493418e0e36",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Why Amazon's Earnings Matter For Nvidia's Outlook",
      "headlineKo": "Nvidia의 전망에 Amazon의 수익이 중요한 이유",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=605b07496038751bdcf6893d550beb3dcdef7cc203d959ecfb120f16ab048c6c",
        "publishedAt": 1787732100,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Amazon's Earnings Matter For Nvidia's Outlook",
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
      "id": "8226704045e4e70472fe",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Expands Middle East AI Footprint Through Long-Term HUMAIN Deal",
      "headlineKo": "Microsoft, 장기 HUMAIN 거래를 통해 중동 AI 입지 확장",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=ccd74fc2c117b4b6acc7a504cc535ecf7cdc01bec7f5626690ced1879d7d8419",
        "publishedAt": 1787731686,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Expands Middle East AI Footprint Through Long-Term HUMAIN Deal",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "34ab0e9e5bdac00081c5",
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
      "headline": "SNXX: Leveraged Exposure To Sandisk's Recovery But Near-Term Volatility Warrants Caution",
      "headlineKo": "SNXX: Sandisk의 회복에 대한 레버리지 노출 그러나 단기 변동성으로 인해 주의가 요구됨",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2655b5499832086dd089e5178af7978d49bb40a69b0518d9322e793fbb21256c",
        "publishedAt": 1787727600,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SNXX: Leveraged Exposure To Sandisk's Recovery But Near-Term Volatility Warrants Caution",
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
      "id": "4b57ae92922de7ed91f2",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
      "direction": "risk",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Performance Comparison: Broadcom And Competitors In Semiconductors &amp; Semiconductor Equipment Industry",
      "headlineKo": "성능 비교: Broadcom과 반도체 및 반도체 장비 산업의 경쟁업체",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=94ef2ff6f34b60cb54311b1a8b97f72dfb3c8740b26914dc9c404085950c2192",
        "publishedAt": 1787723914,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "성능 비교: Broadcom과 반도체 및 반도체 장비 산업의 경쟁업체"
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "be963e21eb7b2ee85a86",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Comparing Microsoft With Industry Competitors In Software Industry",
      "headlineKo": "Microsoft를 소프트웨어 산업의 업계 경쟁사와 비교",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=26d046a2282eca44949316d830a89a9a68252a0edcb298be9b887c2793f1d97d",
        "publishedAt": 1787723905,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft를 소프트웨어 산업의 업계 경쟁사와 비교"
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "47e000c7b485cc5c9e6b",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Markets Look Out For Warsh's Jackson Hole Speech, Nvidia Earnings",
      "headlineKo": "시장은 Warsh의 Jackson Hole 연설, Nvidia 수입을 기대합니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8552f760fa590f924bb521d88400a9689c2c2a7bf5bc3fc6aa6993d770f15ac7",
        "publishedAt": 1787721600,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Markets Look Out For Warsh's Jackson Hole Speech, Nvidia Earnings | Seeking Alpha Bryan Rich 593 Followers Follow Summary On Wednesday we get PCE, the Fed's favored inflation gauge.",
        "On Friday, Kevin Warsh gives his first speech as Fed Chair in Jackson Hole.",
        "The market will pay attention to the one venue built for signaling to hear from a Chairman who has spent the summer dismantling signaling."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "3eba4d011c7063433a3b",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "'China's Moonshot In Talks With Microsoft, Amazon, Google Over K3 Revenue Sharing, Sources Say' - Reuters Exclusive",
      "headlineKo": "'중국의 Moonshot은 K3 수익 공유를 위해 Microsoft, Amazon, Google과 협상 중' - Reuters Exclusive",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8a7d98409c2ad563c5d64004ed170add56913eacf9d90bfbbd094a6ae4c5bb6e",
        "publishedAt": 1787717709,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "'China's Moonshot In Talks With Microsoft, Amazon, Google Over K3 Revenue Sharing, Sources Say' - Reuters Exclusive",
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
      "id": "b428029c3ee2b5258bf4",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "Nvidia Earnings Preview: AI Capex, Blackwell Ramp And 216.40 Bullish Breakout Hold The Key",
      "headlineKo": "엔비디아 수입 미리보기: AI Capex, Blackwell Ramp 및 216.40 Bullish Breakout Hold the Key",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e5dfd9a9c7a3047722edb217b4b2b5e56b50750a8d950342f7ecfab59f32308d",
        "publishedAt": 1787717700,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia Earnings Preview: AI Capex, Blackwell Ramp And 216.40 Bullish Breakout Hold The Key | Seeking Alpha MarketPulse by OANDA Group 1.12K Followers Follow Summary AI demand faces its biggest test: NVIDIA must show data centre growth is st",
        "Q3 guidance matters most: A strong guide above current expectations would support the AI trade, while cautious guidance could trigger broader de-risking.",
        "$216.40 is the key breakout: A move above it may revive the medium-term uptrend, while a daily close below $195.95 would invalidate the bullish setup."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "a8277fd427961d636cbb",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Cathie Wood Loads Up on Cerebras Systems Stock as AI Chip Race With Nvidia Heats Up — Ark Keeps on Dumping AMD Shares",
      "headlineKo": "Nvidia와의 AI 칩 경쟁이 뜨거워지면서 Cathie Wood가 Cerebras 시스템 주식을 가득 채우고 있습니다. Ark는 AMD 주식을 계속 덤핑하고 있습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=81ca5e170161e7cf20fcb83404a03a450448fd66f03438f5db2243c8cc350f68",
        "publishedAt": 1787696719,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cathie Wood Loads Up on Cerebras Systems Stock as AI Chip Race With Nvidia Heats Up — Ark Keeps on Dumping AMD Shares",
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
      "id": "872daef07ddeb7981bf6",
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
      "headline": "Broadcom: Moving Big Into Vendor Financing",
      "headlineKo": "Broadcom: 대규모 벤더 자금 조달",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1e3a378c6c5ede2d5185cdc9938738b11f392691a0fd607ae87896267a54b8a3",
        "publishedAt": 1787678675,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom: Moving Big Into Vendor Financing (NASDAQ:AVGO) | Seeking Alpha The Insiders Forum Investing Group Leader Follow Summary Broadcom Inc.",
        "shares have dropped 28% from June 2026 highs due to a lack of upward guidance, competitive threats, and circular financing risks.",
        "AVGO's AI semiconductor business now drives over half of segment revenue, with management guiding for $56B in FY26 and $100B+ in FY27 AI chip sales."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
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
      "id": "fa86d03334ea265db8bf",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia Could Swing By $286 Billion After Earnings",
      "headlineKo": "엔비디아는 수입이 발생한 후 $ 2,860억까지 스윙할 수 있었습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=68674c47e49b20815fd38ebc9ce8a659b68d1509dabebe169fe463302b55049a",
        "publishedAt": 1787671866,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia Could Swing By $286 Billion After Earnings",
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
      "id": "9d8a67042fcb833894b1",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "매출",
      "primaryTicker": "CRM",
      "relatedTickers": [
        "CRM"
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
      "headline": "CRM SEC Form 8-K filed",
      "headlineKo": "CRM SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000187/crm-20260826.htm",
        "publishedAt": 1787670000.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "CRM가 2026-08-26에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $11.35B · 영업이익 $2.33B · 순이익 $3.53B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 46.1~46.4 billion"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 5.9 / 예상 3.3065 (+78.44%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 1회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
      ],
      "unverified": [
        "시장 EPS 컨센서스의 제공자 회계기간 표기와 다음 분기 사업 영향은 추가 확인이 필요합니다."
      ],
      "beginnerExplanation": [
        "회사가 실적을 SEC에 공식 제출했습니다. 매출·영업이익·순이익은 SEC 검증 수치를 우선하고, EPS 예상 상회·하회는 별도 시장 컨센서스와 비교합니다."
      ],
      "whyItMatters": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다."
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
        "매출·영업이익·순이익의 전년 대비 변화",
        "현재 가이던스와 다음 분기 실제 결과",
        "일회성 손익·OCF·FCF"
      ],
      "earningsEvidence": {
        "version": 6,
        "analyzedAt": 1788278654.327845,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-07-31",
          "metrics": {
            "revenue": 11345000000,
            "opIncome": 2331000000,
            "netIncome": 3526000000
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 46.1,
              "high": 46.4,
              "unit": "billion"
            }
          ],
          "targetPeriod": null,
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 5.9,
          "estimate": 3.3065,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 78.44,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000187/crm-q2fy27xexhibit991.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2026-08-26",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000187/crm-q2fy27xexhibit991.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "515b3734bcb10d894b30",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA"
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
      "headline": "NVDA SEC Form 10-Q filed",
      "headlineKo": "NVDA SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm",
        "publishedAt": 1787670000.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "NVDA가 2026-08-26에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "NVDA",
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
      "id": "b41569f194537cd2d02d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적·재무 공식 공시",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA"
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
      "headline": "NVDA SEC Form 8-K filed",
      "headlineKo": "NVDA SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/nvda-20260826.htm",
        "publishedAt": 1787670000.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "NVDA가 2026-08-26에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $96.22B · 영업이익 $63.73B · 순이익 $59.69B"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 2.22 / 예상 2.1384 (+3.82%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다."
      ],
      "unverified": [
        "시장 EPS 컨센서스의 제공자 회계기간 표기와 다음 분기 사업 영향은 추가 확인이 필요합니다."
      ],
      "beginnerExplanation": [
        "회사가 실적을 SEC에 공식 제출했습니다. 매출·영업이익·순이익은 SEC 검증 수치를 우선하고, EPS 예상 상회·하회는 별도 시장 컨센서스와 비교합니다."
      ],
      "whyItMatters": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다."
      ],
      "impacts": [
        {
          "ticker": "NVDA",
          "direction": "중립·원문 확인",
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기",
          "basis": "official_filing"
        }
      ],
      "watch": [
        "매출·영업이익·순이익의 전년 대비 변화",
        "현재 가이던스와 다음 분기 실제 결과",
        "일회성 손익·OCF·FCF"
      ],
      "earningsEvidence": {
        "version": 6,
        "analyzedAt": 1788278654.327845,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-07-26",
          "metrics": {
            "revenue": 96221000000,
            "opIncome": 63734000000,
            "netIncome": 59688000000
          }
        },
        "guidance": {
          "status": "unavailable",
          "metrics": [],
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 2.22,
          "estimate": 2.1384,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 3.82,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "unavailable",
          "reason": "실적발표 Exhibit 99 첨부자료를 찾지 못함"
        }
      }
    },
    {
      "id": "875baf9070786a5d102d",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
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
      "headline": "MU SEC Form 8-K filed",
      "headlineKo": "MU SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/723125/000110465926101067/tm2624017d1_8k.htm",
        "publishedAt": 1787670000.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "MU가 2026-08-26에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 임원·이사 변경 또는 보상 · 재무제표·첨부자료"
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
          "ticker": "MU",
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
      "id": "701badfc640c40d23ccc",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
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
        "url": "https://www.sec.gov/Archives/edgar/data/106040/000119312526365796/d376254d8k.htm",
        "publishedAt": 1787670000.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "WDC가 2026-08-26에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 미등록 증권 발행·매각 · 기타 중요 사건"
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
          "ticker": "WDC",
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
      "id": "a8af2623e0a17c9822c8",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia's AI Chips Are Making Liquid Cooling the New Standard as Cisco Expands Its AI Bet",
      "headlineKo": "Nvidia의 AI 칩은 Cisco가 AI 베팅을 확장함에 따라 액체 냉각을 새로운 표준으로 만들고 있습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=db888e98b43af6fd0d53bb6a4568216a1e35097cf3436184052ca0153965543c",
        "publishedAt": 1787668717,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia's AI Chips Are Making Liquid Cooling the New Standard as Cisco Expands Its AI Bet",
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
      "id": "6cb098f9baf9bf4e22a6",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Treasury Bond Buybacks Cannot Solve A Fiscal Problem; Nvidia Earnings And Inflation Data Expected Tomorrow",
      "headlineKo": "국채 매입으로는 재정 문제를 해결할 수 없습니다. 엔비디아 수익 및 인플레이션 데이터는 내일 예상됩니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b79b16c471bcc0898122b4984a9697a565e0a077e356fc4b8e6fa80e5d01d750",
        "publishedAt": 1787666824,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "국채 매입으로는 재정 문제를 해결할 수 없습니다. 엔비디아 수익 및 인플레이션 데이터는 내일 예상됩니다."
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
          "ticker": "NVDA",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "fe25943be3f431441337",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom Q3 Earnings Preview: I See Continued Margin Contraction",
      "headlineKo": "Broadcom 3분기 실적 미리보기: 지속적인 마진 계약이 확인됨",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=47b43a5df59caa71cc5d7b2540dd8cfd706d3d6eee70d159cd692ca42ac81686",
        "publishedAt": 1787666784,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom Q3 Earnings Preview: I See Continued Margin Contraction",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "c382bb283b1aec06330c",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500 Earnings Growth Overstated And Bifurcated",
      "headlineKo": "S&P 500 수익 성장 과장 및 분기",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=42d9a7113f1655a274f2dec825fe848131dba114b7685b01a9c3cd5dfdd1fcb2",
        "publishedAt": 1787664215,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500 Earnings Growth Overstated And Bifurcated",
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
      "id": "0a08530127a14e920458",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "VST",
      "relatedTickers": [
        "AMZN",
        "META",
        "VST"
      ],
      "relatedEntities": [
        {
          "name": "AWS",
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
      "headline": "Vistra: The Market Is Pricing The Power Shortage, But Not The Contracted Earnings Upgrade",
      "headlineKo": "Vistra: 시장은 전력 부족에 대한 가격을 책정하고 있지만 계약 수입 업그레이드는 아닙니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=976b0e6c23eb5be32d099a3f07581040104e6978ae0999653761b44c0b776eb3",
        "publishedAt": 1787663760,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra: 시장은 전력 부족을 가격으로 평가하지만 계약 수익 업그레이드는 그렇지 않음 | 알파 단순 투자 아이디어 찾기 10.95K 팔로워 팔로우 요약 Vistra는 주기적 상인 생성기에서 다양한 콘트라로 진화하고 있습니다.",
        "AWS 및 Meta와의 장기 원자력 계약과 Cogentrix 인수는 VST의 EBITDA의 거의 절반을 촉진하고 자본 투자를 지원할 것으로 예상됩니다.",
        "내 기본 사례는 조정 EBITDA 81억 달러와 FCFbG 수익률 10.5%를 목표로 하며, 이는 주당 ~$180의 가치를 암시하고 매수 등급을 지원합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $8.1, 10.5%, $180 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VST에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $8.1, 10.5%, $180 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "c07e647f0219a2fc08b9",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
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
      "headline": "Stocks making the biggest moves midday: Dick's Sporting Goods, Marvell, AMD, Kura Oncology & more",
      "headlineKo": "한낮에 가장 큰 움직임을 보이는 주식: Dick's Sporting Goods, Marvell, AMD, Kura Oncology 등",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=b0296d9ed0160108953be1b90a0b93a55834e9460c42c9978afba664f9529302",
        "publishedAt": 1787659503,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocks making the biggest moves midday: DKS, MRVL, AMD, KURA Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu Check out the companies making the biggest moves midday: Dick'",
        "Dick's posted sales of $5.59 billion, lower than the $5.65 billion expected by analysts polled by LSEG.",
        "The stock was on pace for its worst day ever."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
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
      "id": "ae6c3a94ed184ac46756",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Cisco Expands Rack-Scale AI Computing With Nvidia, Supermicro",
      "headlineKo": "Cisco, Nvidia, Supermicro로 랙 규모 AI 컴퓨팅 확장",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=63b4440c9f606902dc286a9fd5a247fccdb803aa4c5caf0bc6e3fb433e1bd1c8",
        "publishedAt": 1787654769,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cisco Expands Rack-Scale AI Computing With Nvidia, Supermicro",
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
      "id": "f271cdceec7e8f1b202f",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "'OpenAI Claims Its New Chips Can Outperform Nvidia Processors in Tests' - Bloomberg",
      "headlineKo": "'OpenAI는 자사의 새로운 칩이 테스트에서 Nvidia 프로세서보다 성능이 뛰어날 수 있다고 주장합니다' - Bloomberg",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=903e5212809579008dc7e473dd0a14501e4d115a30dfe9b9eae22f6c1a3092ed",
        "publishedAt": 1787652827,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "'OpenAI는 자사의 새로운 칩이 테스트에서 Nvidia 프로세서보다 성능이 뛰어날 수 있다고 주장합니다' - Bloomberg"
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
          "ticker": "NVDA",
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "3bc381129996e9c6aa02",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "EXCLUSIVE: Watch These 3 AI Bottlenecks Ahead of Nvidia Earnings, Yorkville CEO Says",
      "headlineKo": "독점: Yorkville CEO는 Nvidia 수익에 앞서 3가지 AI 병목 현상을 살펴보세요.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=840950ae554015a72bfe80d4a40c531502763e3b09f9f155eca93d0579c1269e",
        "publishedAt": 1787650887,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "독점: Yorkville CEO는 Nvidia 수익에 앞서 3가지 AI 병목 현상을 살펴보세요."
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
          "ticker": "NVDA",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "7b518c59cae71f78ab25",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "GOOGL",
        "MRVL"
      ],
      "relatedEntities": [
        {
          "name": "Google",
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
      "headline": "Marvell Q2: Google Changed The Earnings Setup",
      "headlineKo": "Marvell Q2: Google이 수익 설정을 변경했습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=78c9bd2f08b93810cca8c19a95ca9eb360863dabf6fef63e08e0d909dec2dc83",
        "publishedAt": 1787650323,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Q2: Google Changed The Earnings Setup",
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
      "id": "1debf00ecf38aab5dcc8",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Citizens Reiterates Market Outperform on Salesforce, Maintains $315 Price Target",
      "headlineKo": "시민들은 Salesforce에서 시장 성과를 거듭 강조하고 $ 315 가격 목표를 유지합니다",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=84581a08f723cf3d04c44536d5b4c98e25be44e1169d1b168f91b7e54802dd5b",
        "publishedAt": 1787648908,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citizens Reiterates Market Outperform on Salesforce, Maintains $315 Price Target",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "afa2160e94cdfee476fa",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
      "headline": "Apple announces new Mac Mini and Mac Studio models with AI upgrades",
      "headlineKo": "Apple, AI 업그레이드가 포함된 새로운 Mac Mini 및 Mac Studio 모델 발표",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=a7ff5dcc42a625cae9e085a8cce28c6ff2b713534fb0a8a0e99cb5054e003202",
        "publishedAt": 1787648401,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple announces new Mac Mini and Mac Studio models with AI upgrades Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu Key Points Apple on Tuesday announced new Mac Mini and ",
        "The announcement shows how desktop computers have become strategically important for Apple as a foothold in the AI development world and as a showcase for the AI capabilities of its chips.",
        "The Mac Mini can now be configured with two new chips, the M6 and M5 Pro, and now starts at $899, versus $799 for the prior model."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "97ab60d2f8f1d75674d8",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Evercore ISI Group Maintains Outperform on Meta Platforms, Raises Price Target to $860",
      "headlineKo": "Evercore ISI Group, 메타 플랫폼에서 우위를 유지하며 가격 목표치를 $ 860로 상향 조정",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4bcbb25d853089b0f935fcf7894de0cec3e27651b7cfd068a1f44ded5aa259ce",
        "publishedAt": 1787647714,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Evercore ISI Group Maintains Outperform on Meta Platforms, Raises Price Target to $860",
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
      "id": "295a689d887a49c7dee4",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "QQQ",
      "relatedTickers": [
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
      "headline": "Stock Market Today: Dow Jones, S&P 500, Nasdaq 1000 Futures Advance as Scott Bessent Expands Sanctions on Iran—NTS, GRRR, REAX, ZM, LGVN in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: Scott Bessent가 이란에 대한 제재를 확대함에 따라 Dow Jones, S&P 500, Nasdaq 1000 선물 상승 - NTS, GRRR, REAX, ZM, LGVN 초점(업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3a3a496794d16f5dc1a9bced42f1f6886f6f8b46da7729dc4c271328153c2cbb",
        "publishedAt": 1787646495,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stock Market Today: Dow Jones, S&P 500, Nasdaq 1000 Futures Advance as Scott Bessent Expands Sanctions on Iran—NTS, GRRR, REAX, ZM, LGVN in Focus (UPDATED)",
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
      "id": "986500052a65c604ca3e",
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
        "ORCL",
        "SNDK"
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "SanDisk Could Benefit as Amazon and Microsoft See AI Investments Start to Pay Off",
      "headlineKo": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
        "publishedAt": 1787645530,
        "collectedAt": 1788284700.8295999
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
        "이 기사는 MSFT의 사업과 관련된 'SanDisk Could Benefit as Amazon and Microsoft See AI Investments Start to Pay Off' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "61e2267125e636aad70b",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell: Another Guidance Raise Could Signal A Stronger Growth Trajectory",
      "headlineKo": "Marvell: 또 다른 가이던스 인상은 더 강력한 성장 궤적을 나타낼 수 있음",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6be231b94874b1d3ca9a29d7386fa435866c2af0d08dda2b453c8a0d4a1383a7",
        "publishedAt": 1787644329,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell: Another Guidance Raise Could Signal A Stronger Growth Trajectory",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "4a66df5c89e1f7d527ae",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Mizuho Maintains Outperform on SanDisk, Lowers Price Target to $1875",
      "headlineKo": "Mizuho는 SanDisk에서 우위를 유지하여 가격 목표를 $ 1875로 낮춥니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=ab9c3216c508281ab90f29cdcb92750b3a5054dcfdf4b1620563cfda83857bf7",
        "publishedAt": 1787642759,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Mizuho는 SanDisk에서 우위를 유지하여 가격 목표를 $ 1875로 낮춥니다."
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
          "ticker": "SNDK",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ba1b6d3a48be1a9a4ff5",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Mizuho Maintains Outperform on Micron Technology, Lowers Price Target to $1300",
      "headlineKo": "Mizuho는 Micron 기술에 대한 우수한 성과를 유지하고 목표 가격을 $ 1300로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=87bfcfc43eec5a4ad54a4ec23d878e91f740712c7bf21da73f518d691cafacb4",
        "publishedAt": 1787642620,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Mizuho Maintains Outperform on Micron Technology, Lowers Price Target to $1300",
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
      "id": "ae3e13a03bd198d385cc",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Mizuho Maintains Outperform on Lam Research, Lowers Price Target to $365",
      "headlineKo": "Mizuho는 Lam Research에서 우수한 성과를 유지하고 목표 가격을 365달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4f1952661b181efcd84d860e15115869d7da877e57c0261cfaff2fa7554befb8",
        "publishedAt": 1787642375,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Mizuho Maintains Outperform on Lam Research, Lowers Price Target to $365",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LRCX에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "e06bbfff733e09e0560d",
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
      "headline": "Mizuho Maintains Outperform on Applied Materials, Lowers Price Target to $590",
      "headlineKo": "Mizuho는 적용 재료에 대한 우위를 유지하고 가격 목표를 $ 590로 낮 춥니 다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=476f8ed9eff94cdebe7505aae5669d818448c18493e4591af7e88fe62c4947b8",
        "publishedAt": 1787642277,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Mizuho Maintains Outperform on Applied Materials, Lowers Price Target to $590",
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
      "id": "01b3dd3f34c180411af4",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Constellation Energy: The Scarcity Platform The Market Still Underestimates",
      "headlineKo": "별자리 에너지: 시장이 여전히 과소평가하는 희소성 플랫폼",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d9c8a673bed5493b70572e5e71c7b7124b9b0791b095b3ecf2f74ac16a0468f5",
        "publishedAt": 1787638204,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy: 시장이 여전히 과소평가하고 있는 희소성 플랫폼(NASDAQ:CEG) | 알파 단순 투자 아이디어 찾기 팔로워 10.95K 팔로우 요약 Constellation Energy는 타의 추종을 불허하는 원자력 및 가스 포트폴리오를 활용하여 수익 창출",
        "CEG의 최근 Calpine 인수는 유연성을 향상시켜 깨끗하고 안정적인 전력 제공을 가능하게 하고 데이터 센터 수요가 급증하는 가운데 회사를 희소 플랫폼으로 자리매김했습니다.",
        "경영진은 상업적 성과, 포트폴리오 최적화 및 적극적인 주식 환매를 주요 동인으로 언급하면서 2026년 조정 EPS 지침을 $11.50~$12.50으로 인상했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $11.50, $12.50, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $11.50, $12.50, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1d38271ae482f5f2a27a",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "In-Depth Analysis: Amazon.com Versus Competitors In Broadline Retail Industry",
      "headlineKo": "심층 분석: Amazon.com과 브로드라인 소매 업계의 경쟁업체 비교",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=5cfb51c4985eac3cf6e798fff9e1688a4f85d0595a79270950753b584bc51759",
        "publishedAt": 1787637530,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "In-Depth Analysis: Amazon.com Versus Competitors In Broadline Retail Industry",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
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
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "793da6349f6097241ad7",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Competitor Analysis: Evaluating Apple And Competitors In Technology Hardware, Storage &amp; Peripherals Industry",
      "headlineKo": "경쟁사 분석: 기술 하드웨어, 스토리지 및 주변 장치 산업에서 Apple 및 경쟁사 평가",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7eac5c1858f7c0b533e8daafee53dc942f65f199458d44c7af2b2a3b47c080e7",
        "publishedAt": 1787637514,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Competitor Analysis: Evaluating Apple And Competitors In Technology Hardware, Storage &amp; Peripherals Industry",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Competitor Analysis: Evaluating Apple And Competitors In Technology Hardware, Storage &amp; Peripherals Industry' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b585b42a9cf2f35d19c5",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Understanding Microsoft's Position In Software Industry Compared To Competitors",
      "headlineKo": "경쟁사와 비교하여 소프트웨어 산업에서 Microsoft의 위치 이해",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=15b2920fc24b9ff12d0e708c84e07adade1edc4a4b664332aed632bf6b491b38",
        "publishedAt": 1787637509,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Understanding Microsoft's Position In Software Industry Compared To Competitors",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
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
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "0101e5fdf4177e058904",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Raymond James Upgrades Advanced Micro Devices to Strong Buy, Raises Price Target to $641",
      "headlineKo": "Raymond James, 고급 마이크로 장치를 적극 매수로 업그레이드하고 목표 가격을 641달러로 높임",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=10baaebe86cae3013fc4c32b8d18b5c825d25455074bdc12ea014a6bca558268",
        "publishedAt": 1787637286,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Raymond James, 고급 마이크로 장치를 적극 매수로 업그레이드하고 목표 가격을 641달러로 높임"
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
          "ticker": "AMD",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "ec2be997df85cf7de347",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "FIX",
      "relatedTickers": [
        "FIX"
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
      "headline": "Comfort Systems USA: Quality At A More Compelling Price",
      "headlineKo": "Comfort Systems USA: 더 매력적인 가격의 품질",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=034b9935adb58451af3726fb7895c45732bec31a0d0a8f0764e9c8d181673c7e",
        "publishedAt": 1787636195,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Comfort Systems USA: 더욱 매력적인 가격의 품질(NYSE:FIX) | Alpha Research 찾기 현명한 140만 팔로워 팔로우 요약 Comfort Systems USA는 2분기 매출이 50.3% 증가한 32억 7천만 달러, EBITDA 마진이 확대되는 등 또 다른 기록적인 분기를 기록했습니다.",
        "FIX의 기술 부문 비즈니스 전반에 걸친 지속적인 강세와 기록적인 141억 달러 규모의 수주 잔고는 2026년까지 매출 성장을 계속 뒷받침할 것입니다.",
        "최근 저조한 실적에도 불구하고 FIX의 향상된 가치 평가와 강력한 펀더멘털은 강력한 장기적 기회를 제공합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 50.3%, $3.27, 18.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "FIX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "FIX에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 50.3%, $3.27, 18.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "288d98be5265084eda16",
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
      "headline": "Amazon: AI Revenue Too Dependent On OpenAI And Anthropic",
      "headlineKo": "Amazon: OpenAI와 Anthropic에 의존하는 AI 수익",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c6448c58ce6702b5c883d90b88a7a4127b238b636bd7d75295294a5fa241dc84",
        "publishedAt": 1787624672,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon: AI Revenue Too Dependent On OpenAI And Anthropic",
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
      "id": "0249ab7077282660f38b",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
        "MRVL",
        "QQQ"
      ],
      "relatedEntities": [
        {
          "name": "Google",
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
      "headline": "Marvell: Google Strengthens The AI Thesis, But Q2 Must Justify The Premium",
      "headlineKo": "Marvell: Google은 AI 논문을 강화하지만 2분기는 프리미엄을 정당화해야 합니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d367226c7afd0def73450d4508a39879b195389ed00dee3bb31ce07eeba5fa78",
        "publishedAt": 1787598125,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell: Google Strengthens The AI Thesis, But Q2 Must Justify The Premium (NASDAQ:MRVL) | Seeking Alpha Oliver Rodzianko 7.16K Followers Follow Summary Marvell Technology, Inc.",
        "is technically bullish, but valuation constraints and sector correlation warrant a Hold rating with risk-managed stop losses.",
        "MRVL’s Q2 earnings hinge on data center growth, with upside requiring Q3 guidance above $3B and fiscal targets near $11.7B."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
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
      "id": "cbbb7fb149dd10440c2b",
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
      "headline": "Nvidia: The Last Hurrah Before ASIC (Earnings Preview)",
      "headlineKo": "Nvidia: The Last Hurrah Before ASIC (수입 미리보기)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6164f6385b35dc0f3b590f19a9191c2ede170765d8c82055d403a81a7c9365fa",
        "publishedAt": 1787595674,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: The Last Hurrah Before ASIC (Earnings Preview)",
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
      "id": "d46f696c3f04367773db",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Cowell Remains Tethered To Apple But Investors Cheer Strong Earnings",
      "headlineKo": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
        "publishedAt": 1787593932,
        "collectedAt": 1788292833.532955
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
        "이 기사는 AAPL의 사업과 관련된 'Cowell Remains Tethered To Apple But Investors Cheer Strong Earnings' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e66f4892ca4f3e8f75ca",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia Earnings Preview: Q2 2027",
      "headlineKo": "엔비디아 수입 미리보기: 2027년 2분기",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3c90fc0543b2d66d1c1e133aca14148f77fa634c1632fd67d6a4da33a5f77b1f",
        "publishedAt": 1787584800,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia Earnings Preview: Q2 2027 | Seeking Alpha Markit 3.85K Followers Follow Summary NVIDIA will report fiscal Q2 2026 results on Wednesday, August 26, 2026, after the market close.",
        "Here are the key numbers that we’re watching.",
        "According to Visible Alpha consensus, analysts expect Nvidia's total revenue to reach $92.2 billion in fiscal Q2 2027."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "3336a14aa584bb7a197e",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia Earnings: Wall Street Expects Growth to Slow in Q2 — Dan Niles Says Hyperscalers Are Spending Like Never Before",
      "headlineKo": "엔비디아 실적: 월스트리트, 2분기 성장 둔화 예상 — 댄 나일스 (Dan Niles) 는 하이퍼스케일러가 전에 없던 지출을 하고 있다고 말합니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=51d026ec45ce87234c2b586767ac04afab2fa10984e61c1b84e1ee530e7f620a",
        "publishedAt": 1787584157,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia Earnings: Wall Street Expects Growth to Slow in Q2 — Dan Niles Says Hyperscalers Are Spending Like Never Before",
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
      "id": "375f36acf0e374440d57",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000545/tsm-monthend6kx20260825.htm",
        "publishedAt": 1787583600.0,
        "collectedAt": 1788278654.327845
      },
      "confirmedFacts": [
        "TSM가 2026-08-25에 SEC Form 6-K을 제출했습니다.",
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
      "id": "3e002d4bd4bee383e3e2",
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
      "headline": "XPeng Q2: A Better Bet Than Tesla",
      "headlineKo": "XPeng Q2: 테슬라보다 나은 점",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=03e43707ec88b1cbb3d7bf62c30654eef16c1aba21213c240d939987abd8f3b0",
        "publishedAt": 1787582385,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "XPeng Q2: A Better Bet Than Tesla (NYSE:XPEV) | Seeking Alpha Kenio Fontes 3.09K Followers Follow Summary XPeng Inc.",
        "is a cautious Buy, offering high potential but facing intense competition and execution risk in the Chinese EV and AI-driven automotive sector.",
        "Q2 results were lackluster with flat vehicle sales, high operating losses, and missed expectations, but operational execution in both low-budget and premium segments shows promise."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "9d5cc7889e507851b63c",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Elon Musk Posts On X \"SpaceX, in partnership with Nvidia, has designed a space-optimized Vera Rubin NVL72 system for launch to orbit in Q4 next year, with significant scale in 2028\"",
      "headlineKo": "Elon Musk Post On X \"SpaceX는 Nvidia와 협력하여 2028년에 상당한 규모로 내년 4분기에 궤도에 진입하기 위해 공간에 최적화된 Vera Rubin NVL72 시스템을 설계했습니다.\"",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=cd16d90ec914175a485d3782e9bf7670a2e2ea49a854ff220c4af8693fff3bda",
        "publishedAt": 1787578310,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk Post On X \"SpaceX는 Nvidia와 협력하여 2028년에 상당한 규모로 내년 4분기에 궤도에 진입하기 위해 공간에 최적화된 Vera Rubin NVL72 시스템을 설계했습니다.\""
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
          "ticker": "NVDA",
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "98df8fa767f0713581ce",
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
      "headline": "Nvidia Q2 Preview: The Beat Is Priced In, But I Have Questions About Their AI Investments",
      "headlineKo": "Nvidia Q2 미리보기: 비트의 가격이 책정되었지만 AI 투자에 대해 궁금한 점이 있습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2e89ef21adffa834d2233b744bf1c031a94c4326cda283b7f8d865627254cd23",
        "publishedAt": 1787578175,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $73, $27, $105, $500.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'Nvidia Q2 Preview: The Beat Is Priced In, But I Have Questions About Their AI Investments' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0dd95fd7ab7e7dd009c0",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "QQQ",
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
      "headline": "Tesla: SpaceX Is The Only Hope",
      "headlineKo": "테슬라: SpaceX만이 유일한 희망입니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6cda9280ff0d8b18a0b37e2fb9355148d2c4ca08ec9b14be1d27ad880b3a0581",
        "publishedAt": 1787578131,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla: SpaceX Is The Only Hope (NASDAQ:TSLA) | Seeking Alpha James Foord Investing Group Leader Follow Summary Tesla, Inc.",
        "remains a Sell due to weak fundamentals and overreliance on speculative AI-driven projects.",
        "A merger with SpaceX is increasingly probable, but faces significant governance and regulatory hurdles."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "3c97fce1bb55c6fefc1d",
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
        },
        {
          "name": "Samsung",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Samsung Crash Brings Semi Selling; Nvidia Earnings Ahead; $1T Treasury Firepower To Buy Bonds",
      "headlineKo": "Samsung Crash Brings Semi Selling; Nvidia Earnings Ahead; $ 1T Treasury Firepower To Buy Bonds",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=f7f93a4f108a80e0a29d0f56809afcb0f6385c443b224895dad20328bc16045f",
        "publishedAt": 1787576240,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Samsung Crash Brings Semi Selling; Nvidia Earnings Ahead; $ 1T Treasury Firepower To Buy Bonds"
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
          "ticker": "NVDA",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "3044789fbcb18b289f48",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Opens Boise Training Center To Expand U.S. Semiconductor Workforce",
      "headlineKo": "마이크론, 미국 반도체 인력 확대를 위해 보이시 트레이닝 센터 개소",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e6206764b9348baa7cbaa80a564ec91f32dcfa7d77d3e4627bd053bb9ecb7a3f",
        "publishedAt": 1787573274,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Opens Boise Training Center To Expand U.S. Semiconductor Workforce",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "9af80a0650fa1c368a1f",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Morgan Stanley Maintains Equal-Weight on Marvell Technology, Raises Price Target to $224",
      "headlineKo": "Morgan Stanley는 Marvell 기술에 대한 동등한 무게를 유지하고 가격 목표를 $ 224로 높입니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0a4ec708cf1633f6022156cd16c8d802ad0269bc6e869def3c990ac973645595",
        "publishedAt": 1787572597,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley Maintains Equal-Weight on Marvell Technology, Raises Price Target to $224",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "df0971c252446736c3fa",
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
      "headline": "Marvell: Doubters Created The Opportunity -- 90x FCF For 45% Growth? Here's Why I'm Bullish",
      "headlineKo": "Marvell: Doubters가 기회를 창출했습니다. 45% 성장을 위한 90배의 FCF? 제가 불리쉬한 이유는 다음과 같습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f318437ce676e5179a51dbbe09bf41282cedf5d2d652b7b182e90d8740baf497",
        "publishedAt": 1787571043,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell: Doubters Created The Opportunity — 90x FCF For 45% Growth?",
        "| Seeking Alpha Michael Wiggins De Oliveira Investing Group Leader Follow Summary Marvell Technology is experiencing exceptional demand, projecting 45% y/y revenue growth to $16.5B in fiscal 2028.",
        "MRVL's data center segment is the primary growth driver, expected to accelerate from 50% to 55% y/y growth next year."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "2b44c6ce927d537c9229",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce To Report Mixed Q2; Investors Remain Skeptical About H2 Acceleration",
      "headlineKo": "Salesforce, 2분기 혼합 보고서 작성, 투자자들은 H2 가속화에 대해 회의적 태도 유지",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d3bde0ff5073e01d5f7d622876a639af648b59960068b47f82b6e23556dfc694",
        "publishedAt": 1787570681,
        "collectedAt": 1788288579.6381502
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
        "이 기사는 CRM의 사업과 관련된 'Salesforce To Report Mixed Q2; Investors Remain Skeptical About H2 Acceleration' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "6d38a6f33bc14bb1a7ec",
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
      "headline": "Nvidia: A Disruptor, Both With AI Chips And Its Financialization Strategy",
      "headlineKo": "엔비디아: AI 칩과 재무화 전략을 모두 갖춘 디스럽터",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e0665b2f98336b15334e7573b52b4a913863de3d52074a520fe3e0acca62154f",
        "publishedAt": 1787569791,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $500 billion, 27%, 75%, 17%, $263.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'Nvidia: A Disruptor, Both With AI Chips And Its Financialization Strategy' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0f14da053a920b6e6f55",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Wells Fargo Maintains Overweight on Marvell Technology, Raises Price Target to $310",
      "headlineKo": "Wells Fargo는 Marvell Technology에 대한 과체중을 유지하고 가격 목표를 $ 310로 높입니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=26602875106f79b17596fa5d04bb2a9ba22d60309426ab387984cbe14e9570fd",
        "publishedAt": 1787568072,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wells Fargo는 Marvell Technology에 대한 과체중을 유지하고 가격 목표를 $ 310로 높입니다."
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
          "ticker": "MRVL",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "0b1a1e816c0c815b0943",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "MSFT",
        "NVDA",
        "QQQ"
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia: The Next AI Upgrade Supercycle Is Exclusive - And Bigger Than GPUs",
      "headlineKo": "엔비디아: 차세대 AI 업그레이드 슈퍼사이클은 독점적이며 GPU보다 큽니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2b119cb948dbc9e29f9e032f928f4b695c25d81281e877ecbe16b7d4de27e69d",
        "publishedAt": 1787563834,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: The Next AI Upgrade Supercycle Is Exclusive - And Bigger Than GPUs (NASDAQ:NVDA) | Seeking Alpha Summit Research 12.8K Followers Follow Summary Vera Rubin's 45-degree liquid-cooling architecture could catalyze a broader AI infrastru",
        "Lower cooling costs, higher rack density and greater energy efficiency should help hyperscalers extract more compute, directly addressing intensifying power and capacity bottlenecks as high-volume agentic inference workloads scale.",
        "Vera Rubin is already in volume production, with Microsoft confirming initial deployments."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
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
      "id": "defd46a5766c56b00a23",
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
      "headline": "Broadcom: $100 Billion In AI Revenue Is A Lot To Ask",
      "headlineKo": "Broadcom: $ 1,000억의 AI 수익은 물어볼 것이 많습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d6581f1a65860a5b7f92df7eebf715ff68f6df0ca68e08e235901cb8678b7c9a",
        "publishedAt": 1787562824,
        "collectedAt": 1788284700.8295999
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
        "이 기사는 AVGO의 사업과 관련된 'Broadcom: $100 Billion In AI Revenue Is A Lot To Ask' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "8b4716f5ff20baa5ddf9",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU"
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
      "headline": "Micron CEO Sounds Alarm on AI Memory Crunch — Supply May Not Catch Up Until 2028 as Demand Keeps Growing: MU Stock Falls 4% (UPDATED)",
      "headlineKo": "마이크론 CEO, AI 메모리 위기 경보 - 수요가 계속 증가함에 따라 2028년까지 공급이 따라잡지 못할 수 있음: MU Stock 4% 하락 (업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=f8c00c97fd33769dd07237165cc0b6a749019315716090aac38224849b4cda90",
        "publishedAt": 1787562774,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron CEO Sounds Alarm on AI Memory Crunch — Supply May Not Catch Up Until 2028 as Demand Keeps Growing: MU Stock Falls 4% (UPDATED)",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "16f25a68b20e583bbcdd",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Google Cloud Collaborates With Verizon To Deploy Its Full-Stake AI Into Verizon Operations",
      "headlineKo": "Google Cloud는 Verizon과 협력하여 Verizon 운영에 전체 지분 AI를 배포합니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=936fd0342e2fccaf85f8413669dd855cd0f2e5c0e83a27a7b4ba1f8274a10eb2",
        "publishedAt": 1787562291,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google Cloud Collaborates With Verizon To Deploy Its Full-Stake AI Into Verizon Operations",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Google Cloud Collaborates With Verizon To Deploy Its Full-Stake AI Into Verizon Operations' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "2ea2782ccff5de5a9d6c",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today: Dow Jones, S&P 500, Nasdaq 100 Futures Slip Ahead of Data-Heavy Week, Nvidia Earnings, and Jackson Hole—BABA, PMI, BIRK in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: Dow Jones, S&P 500, Nasdaq 100 Futures Slip Ahead of Data-Heavy Week, Nvidia Earnings, Jackson Hole-BABA, PMI, BIRK in Focus (업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d465dfca3a909d25a1f9630c0ceb17dd36079b1adaecfbf032e9a891ecc98a29",
        "publishedAt": 1787560385,
        "collectedAt": 1788282027.5587816
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stock Market Today: Dow Jones, S&P 500, Nasdaq 100 Futures Slip Ahead of Data-Heavy Week, Nvidia Earnings, and Jackson Hole—BABA, PMI, BIRK in Focus (UPDATED)",
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
      "id": "58f9bb5887f9e21b3ab0",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Mizuho Initiates Coverage On Vistra with Outperform Rating, Announces Price Target of $169",
      "headlineKo": "미즈호, 성과 등급으로 Vistra에 적용 개시, 가격 목표 $ 169 발표",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d0430d5ec030ca897ab77b9411f9d92796769f44d3b95c184412571ab5d9493d",
        "publishedAt": 1787559643,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Mizuho Initiates Coverage On Vistra with Outperform Rating, Announces Price Target of $169",
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
      "id": "f1d3897e2e91cf194066",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "headline": "Micron's Secret Weapon: The $5B Catalyst Beyond HBM",
      "headlineKo": "마이크론의 비밀 무기: HBM 너머의 $ 50억 촉매제",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=40597e07c6be68817dc251ca2be8e31ffe220a3b90c2f08cd5d6fdd8cd5b15b0",
        "publishedAt": 1787558400,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron (NASDAQ:MU) Stock Analysis: Why SSD Growth & Cash Catalysts Make It a Strong Buy | Seeking Alpha Micron's Secret Weapon: The $5B Catalyst Beyond HBM Rick Orford joins Nicole Benjamin on Portfolio Pulse to discuss Micron Technology's ",
        "He also breaks down a potential buyback opportunity coming in December 2026.",
        "24, 2026 8:00 AM ET Rick Orford Follow Follow Rick Orford on Seeking Alpha!"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
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
      "id": "ac69fd63efdf9046e805",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "MRVL",
        "SNDK"
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
      "headline": "Stocks making the biggest moves premarket: Alibaba, Marvell, Sandisk, Coinbase and more",
      "headlineKo": "가장 큰 움직임을 보이는 주식 프리마켓: 알리바바, 마벨, 샌디스크, 코인베이스 등",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=9aa75525346d31a1dfb90d34d8747ec329f9b8486db12c5b152cef660cddf179",
        "publishedAt": 1787556683,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocks making the biggest moves premarket: BABA, MRVL, SNDK and more Skip Navigation Markets Business Investing Tech Politics & Policy Video Watchlist Investing Club PRO Livestream Menu Check out the companies making the biggest moves prema",
        "Alibaba said all of the money it raises will be used to fund its AI projects, particularly on its AI infrastructure.",
        "Chipmakers — After falling 5.5% last week, the iShares Semiconductor ETF (SOXX) was down almost 2% on Monday."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "97b339fbc4dd03105d10",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "TSLA"
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
      "headline": "TSLA Competitor? Xiaomi Joins NIO in Race to Build In-House Chips for Self-Driving Cars",
      "headlineKo": "TSLA 경쟁자? 샤오미, NIO와 함께 자율주행차 사내 칩 개발 경주에 참여",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6ab1c7962d91710079f7dd3a76f0e68630e1692b673bf5b0e0dbfc766b509a19",
        "publishedAt": 1787553071,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSLA Competitor? Xiaomi Joins NIO in Race to Build In-House Chips for Self-Driving Cars",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
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
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "4df7696ead8b83388cbd",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "BTIG Reiterates Buy on Salesforce, Maintains $255 Price Target",
      "headlineKo": "BTIG는 Salesforce에서 구매를 반복하고 $ 255 가격 목표를 유지합니다",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=964704da21266be3695b7c7deb14b248b8e9c36dff799db06d6b685a5281c177",
        "publishedAt": 1787552629,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BTIG Reiterates Buy on Salesforce, Maintains $255 Price Target",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "ac2d3b4f3cd6463fb936",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Inquiry Into Apple's Competitor Dynamics In Technology Hardware, Storage &amp; Peripherals Industry",
      "headlineKo": "기술 하드웨어, 스토리지 및 주변 장치 업계에서 Apple의 경쟁업체 역학 관계에 대한 문의",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=bf8e169ffbc4a3dc5fd47415ac9da02ae465db7ff168f6db0384b4507963d06c",
        "publishedAt": 1787551109,
        "collectedAt": 1788292833.532955
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Inquiry Into Apple's Competitor Dynamics In Technology Hardware, Storage &amp; Peripherals Industry",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Inquiry Into Apple's Competitor Dynamics In Technology Hardware, Storage &amp; Peripherals Industry' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "27290a3b3124c8571445",
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
      "headline": "Why Sandisk? Cyclicality Is Not The Only Open Question",
      "headlineKo": "왜 샌디스크인가? 순환성만이 열린 질문이 아닙니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d871a4b9f9be55eade90d6bcac76248076964637eac0d530c31f0911db394e0d",
        "publishedAt": 1787529484,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cyclicality Is Not The Only Open Question (NASDAQ:SNDK) | Seeking Alpha Florian Muller 1.34K Followers Follow Summary Two-thirds of Sandisk's impressive sequential revenue growth came from Pricing, only one-third from volume.",
        "One key question is, therefore, sustainability beyond the current rush driven by AI datacenter buildout.",
        "More notably, however, SNDK's growth projections closely track the overall flash storage market, with no expected market share gains."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
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
      "id": "bba999504e7424e5898b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "QQQ"
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
      "headline": "Micron: The Competition Has A Better Price",
      "headlineKo": "마이크론: 경쟁업체의 가격이 더 저렴합니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f5e045aecc5f1f4b745dc0bae16934a4696e754546f1f92707ff518dd802b51b",
        "publishedAt": 1787522256,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron: The Competition Has A Better Price (NASDAQ:MU) | Seeking Alpha Louis Gerard 3.78K Followers Follow Summary Micron is downgraded to Hold due to stretched valuation and intensifying competition despite structural improvements from str",
        "MU's recent earnings surge is driven almost entirely by price increases, not volume, raising concerns about earnings durability if pricing weakens.",
        "Peers SK hynix and Samsung offer more attractive capital return programs and trade at significantly lower multiples, making them more compelling investments currently."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "75596211fbe0d7587c04",
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
      "headline": "Dow Jones Futures Due With Nvidia Earnings, Tariffs, Warsh In Focus",
      "headlineKo": "엔비디아 수입, 관세, 워시 인 포커스로 인한 다우 존스 선물",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=577c8a3d6038618e28ec5afaa43dec0226d48d1817f11f0686ae6a2bdee952d9",
        "publishedAt": 1787509817,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dow Jones Futures Due With Nvidia Earnings, Tariffs, Warsh In Focus",
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
      "id": "601831703227ae82f0c3",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom vs. Marvell Technology: 1 Critical Metric Decides the Better Custom AI Chip Stock",
      "headlineKo": "Broadcom vs. Marvell 기술: 1 치명적인 메트릭이 더 나은 맞춤형 AI 칩 스톡을 결정합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12f1e456221807cd220275e57f4df8b49a9783c2523e582ee86b95a6dfcf70a1",
        "publishedAt": 1787509560,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology: 1 Critical Metric Decides the Better Custom AI Chip Stock | The Motley Fool Accessibility Menu ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Search for a company Accessibility ...",
        "Help Broadcom ( AVGO -1.46% ) and Marvell Technology ( MRVL -3.23% ) are eerily similar companies.",
        "Both of them produce networking equipment for data centers, but they have also launched custom AI chip businesses with a few critical customers."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
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
      "id": "9c82f665511ef98a944a",
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
      "headline": "Should You Buy Oracle Stock Before September? The Answer Might Surprise You.",
      "headlineKo": "9월 이전에 오라클 주식을 매입해야 합니까? 대답은 당신을 놀라게 할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3d1cccd4fe41315a157b13f0f470600fd0876205c14ede0837ef75c37b002d65",
        "publishedAt": 1787508600,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Should You Buy Oracle Stock Before September?",
        "| The Motley Fool Accessibility Menu ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Search for a company Accessibility ...",
        "Help Oracle ( ORCL +1.62% ) stock has plummeted by 56% from last year's record high, but I'm not convinced this is a good buying opportunity."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
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
      "id": "58a94c4f1f8b014ee421",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce Earnings Preview: Will the Stock Rally Continue?",
      "headlineKo": "Salesforce 수입 미리 보기: 주식 랠리는 계속되나요?",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8755df82a5e210604513df2d3bd41dec04f1c2e9507c540f608e4aa30de4f20a",
        "publishedAt": 1787504231,
        "collectedAt": 1788288579.6381502
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce 수입 미리 보기: 주식 랠리는 계속되나요?"
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
          "ticker": "CRM",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "993b64250ade9b6d8981",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
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
      "headline": "AMD Is Investing More Than $10 Billion in Taiwan to Build Advanced Chip Packaging With TSMC. Here's What Lisa Su Is Actually Buying With That Money.",
      "headlineKo": "AMD는 TSMC와 함께 첨단 칩 패키징을 구축하기 위해 대만에 $ 100억 이상을 투자하고 있습니다. Lisa Su가 실제로 그 돈으로 구매하는 것은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7b88ad01664211237a7e92988a4351927f4bb52466ecdbb4a762bbe0ffa7ade1",
        "publishedAt": 1787503800,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $10 Billion, 3.49%, $10 billion, 2.11%, 107%, $6.7 billion, 58%, 60%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMD의 사업과 관련된 'AMD Is Investing More Than $10 Billion in Taiwan to Build Advanced Chip Packaging With TSMC. Here's What Lisa Su Is Actually Buying With That Money.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a907a46054bff96b5f17",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "NVIDIA, Cloverleaf Partnering to Advance Data Center Development",
      "headlineKo": "NVIDIA, 데이터 센터 개발 발전을 위한 Cloverleaf 파트너십",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f1513663152e58106526751dba1deddb9f809f8ba6b9d18cbc805e7ccb0b3e5",
        "publishedAt": 1787502323,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVIDIA, Cloverleaf Partnering to Advance Data Center Development Energy & Engineering Group: Search Sign In Email or Username Password Forgot Password?",
        "Please contact our Customer Service Team if you are unable to log in at clientservices@accessintel.com or 1-888-707-5814.",
        "Home Data Centers NVIDIA, Cloverleaf Partnering to Advance Data Center Development Technology giant NVIDIA is furthering its support of artificial intelligence (AI) and data center construction."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
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
      "id": "92327917c606609aac4d",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
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
      "expectedHorizon": "단기 비용 절감 / 중기 FCF·부채 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon's Free Cash Flow Went Negative by $7.6 Billion Even as Operating Cash Flow Rose 33%. Here's the Gap AI Capex Is Actually Creating.",
      "headlineKo": "아마존의 잉여현금흐름 (Free Cash Flow) 은 영업현금흐름 (Operating Cash Flow) 이 33% 상승하더라도 마이너스 76억 $ 를 기록했다. Gap AI Capex가 실제로 만들고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9905b210869231b722441eba4e31cff86108bf3179b3579bcc7fa5dfcd60758",
        "publishedAt": 1787499300,
        "collectedAt": 1788284700.8295999
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
        "이 기사는 AMZN의 사업과 관련된 'Amazon's Free Cash Flow Went Negative by $7.6 Billion Even as Operating Cash Flow Rose 33%. Here's the Gap AI Capex Is Actually Creating.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "66ddda975052640de7e1",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "PLTR",
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
      "headline": "Trump Continues Trading Stocks at Warp Speed: Berkshire Bought, Meta Sold",
      "headlineKo": "트럼프, 워프 속도로 주식 거래 계속: 버크셔 매수, 메타 판매",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9e0bdc9badb8609b9eb8174cf6711e4131b5f18c8a220c9ca0c969805b9bdd83",
        "publishedAt": 1787496293,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Trump Continues Trading Stocks at Warp Speed: Berkshire Bought, Meta Sold - 24/7 Wall St.",
        "Skip to content S&P 500 7,672.90 +0.13% Dow Jones 53,494.60 +0.06% Nasdaq 100 29,186.90 +0.41% Russell 2000 3,004.00 +0.13% FTSE 100 10,899.20 +0.34% Nikkei 225 65,910.20 +0.84% Investing Trump Continues Trading Stocks at Warp Speed: Berksh",
        "Palantir trades surrounding the June 14 U.S.-Iran peace deal illustrate the conflict-of-interest overlap between Trump's policymaking power and his investment holdings."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
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
      "id": "9174a0a66e4be50f4cbf",
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
      "headline": "Micron Technology: Is MU Stock a No-Brainer Buy as AI Memory Demand Surges in 2026?",
      "headlineKo": "마이크론 기술: 2026년 AI 메모리 수요가 급증함에 따라 MU Stock은 번거롭지 않은 구매입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f2970500f1e19c15b3642da72011ce0ddd8be9877d9ae03576a6aceeafcdf28",
        "publishedAt": 1787490045,
        "collectedAt": 1788284700.8295999
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Technology: Is MU Stock a No-Brainer Buy as AI Memory Demand Surges in 2026?",
        "Skip to content S&P 500 7,666.60 -0.10% Dow Jones 53,273.40 +0.02% Nasdaq 100 29,165.70 -0.49% Russell 2000 3,015.38 -0.03% FTSE 100 10,839.00 +0.20% Nikkei 225 65,780.20 -0.30% Investing Micron Technology: Is MU Stock a No-Brainer Buy as A",
        "By Joel South Published Aug 23, 8:00AM EDT Quick Read MU trades at just 6x forward earnings with $100 billion in contracted AI-memory revenue locked in through 2030, while 40 analysts rate it a buy with zero sells."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
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
      "id": "9a55c2b362d82cd124ea",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "INTC",
        "META",
        "NVDA",
        "SPY"
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
      "headline": "1 Reason Why Meta Might Be the Best Artificial Intelligence (AI) Stock to Buy and Hold for 5 Years and Beyond",
      "headlineKo": "메타가 5년 이상 사고 보유할 수 있는 최고의 인공지능 (AI) 주식이 될 수 있는 1가지 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44d90aae0b5b834375b618ae37a566ff4b64ad0b8fbc6f7884a4dcebbcc1d404",
        "publishedAt": 1787489400,
        "collectedAt": 1788278427.8524213
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "1 Reason Why Meta Might Be the Best Artificial Intelligence (AI) Stock to Buy and Hold for 5 Years and Beyond | The Motley Fool Accessibility Menu ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Search for a company Accessibi",
        "Help With a share price that has soared 996% in the past five years (as of Aug.",
        "20) and a market capitalization of more than $5.2 trillion, the consensus view among the investment community may be that Nvidia is the optimal way to bet on the artificial intelligence (AI) boom."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
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
    }
  ],
  "byTicker": {
    "AAPL": [
      "5e2eb3fff7d616b63452",
      "4771c7405feee78cc629",
      "7160f861c2eabe939843",
      "25bc0168b90ac2fc9ffe",
      "94ff0bdcbbd5e747251b",
      "ab92edebe33adb10466f",
      "3659cb922df651988f47",
      "78e4b843d5367bd1c43d",
      "67617fc04b8ab86cafda",
      "6fbd8d2e9fe0aacfe32b",
      "23a348918ccb8f9e1124",
      "d47e3edaaa6e746703d5",
      "d4e8a00177166f2d3a1d",
      "afa2160e94cdfee476fa",
      "793da6349f6097241ad7",
      "d46f696c3f04367773db",
      "ac2d3b4f3cd6463fb936"
    ],
    "QQQ": [
      "5e2eb3fff7d616b63452",
      "8069e5fb8e0254ebc970",
      "6187cd7d0e0009c42d02",
      "5a862643b98d77ca70e7",
      "16a618a026a6ea68ec5d",
      "1d128098b61f7774187d",
      "1d5c4cc7fe92dfe56aa5",
      "af5e7a4c2cf9cf3251b9",
      "b76f2a087c30405b4ab0",
      "94ff0bdcbbd5e747251b",
      "ab92edebe33adb10466f",
      "e6997ce545527599be5f",
      "74c92b7045d29a618169",
      "76cb7f5bef75106419be",
      "e077aa84cd24ea0010ef",
      "0e891ad4686defdef1fd",
      "1c80bb1458e82f446d2b",
      "af16bde21a9de5d05b27",
      "a92823784b7e70fbf659",
      "f4db1be0e6cff3f47d76",
      "c2ebf782b459946b819a",
      "a6339a0ab8299a98c8cf",
      "4bdff85c3176072538d6",
      "2412915696ba01e29a80",
      "54c7f5dc1d7281b699f2",
      "219beaf953067561b00b",
      "b0f7c85204f372b5f47b",
      "6fbd8d2e9fe0aacfe32b",
      "bab21abe6ae97cb68c3f",
      "5e217d76ddc07191ed5e",
      "6a25fc0177566499b6f0",
      "978f127c1dcf179ad905",
      "a264c284da021e873ae7",
      "e520364f3c81789d511e",
      "e8b539a446990e9de047",
      "76ddf5fd1219db52812b",
      "d47e3edaaa6e746703d5",
      "b3e1fca489b98b4a35c2",
      "872daef07ddeb7981bf6",
      "295a689d887a49c7dee4",
      "01b3dd3f34c180411af4",
      "0249ab7077282660f38b",
      "0dd95fd7ab7e7dd009c0",
      "0b1a1e816c0c815b0943",
      "2ea2782ccff5de5a9d6c",
      "f1d3897e2e91cf194066",
      "27290a3b3124c8571445",
      "bba999504e7424e5898b",
      "66ddda975052640de7e1",
      "9174a0a66e4be50f4cbf"
    ],
    "SPY": [
      "5e2eb3fff7d616b63452",
      "8069e5fb8e0254ebc970",
      "b56ec895241b583044e5",
      "6187cd7d0e0009c42d02",
      "5a862643b98d77ca70e7",
      "0a6cd4892cdef50f2191",
      "16a618a026a6ea68ec5d",
      "1d128098b61f7774187d",
      "1d5c4cc7fe92dfe56aa5",
      "af5e7a4c2cf9cf3251b9",
      "b76f2a087c30405b4ab0",
      "94ff0bdcbbd5e747251b",
      "ab92edebe33adb10466f",
      "89a6d2a75ad7e2e0cb99",
      "74c92b7045d29a618169",
      "e077aa84cd24ea0010ef",
      "75d85a8ee8467de30817",
      "b5651f804f3e6ea92fb5",
      "6fbd8d2e9fe0aacfe32b",
      "6a25fc0177566499b6f0",
      "978f127c1dcf179ad905",
      "c382bb283b1aec06330c",
      "295a689d887a49c7dee4",
      "2ea2782ccff5de5a9d6c",
      "601831703227ae82f0c3",
      "9c82f665511ef98a944a",
      "66ddda975052640de7e1",
      "9174a0a66e4be50f4cbf",
      "9a55c2b362d82cd124ea"
    ],
    "MU": [
      "4771c7405feee78cc629",
      "b56ec895241b583044e5",
      "5a862643b98d77ca70e7",
      "d07939fbac8873f36991",
      "ab92edebe33adb10466f",
      "f68478e0f50e9a3f9ea9",
      "cc33a54583070082b1ba",
      "ea0f2927241104aa1220",
      "a92823784b7e70fbf659",
      "c928b7bc676dd70cff71",
      "4bdff85c3176072538d6",
      "177a3aab9d629950e09e",
      "83b60256ba0d24822cee",
      "b63fb9526fdee061881a",
      "7a2b579ed7dfcef1db7a",
      "f213eee3b688a3f65b2f",
      "050a5d8c7f4c0fcffd92",
      "70bfd28063281f82c32b",
      "aeb50a507e2b94a53da7",
      "7f32eb0bc7b27b1e0b59",
      "b2df436b97fe71911f33",
      "875baf9070786a5d102d",
      "986500052a65c604ca3e",
      "ba1b6d3a48be1a9a4ff5",
      "d46f696c3f04367773db",
      "98df8fa767f0713581ce",
      "3044789fbcb18b289f48",
      "2b44c6ce927d537c9229",
      "6d38a6f33bc14bb1a7ec",
      "defd46a5766c56b00a23",
      "8b4716f5ff20baa5ddf9",
      "f1d3897e2e91cf194066",
      "bba999504e7424e5898b",
      "993b64250ade9b6d8981",
      "9174a0a66e4be50f4cbf"
    ],
    "QCOM": [
      "4771c7405feee78cc629",
      "f68478e0f50e9a3f9ea9",
      "74c92b7045d29a618169",
      "cc33a54583070082b1ba",
      "b23b54deaa5530b1d077",
      "d47e3edaaa6e746703d5"
    ],
    "WDC": [
      "4771c7405feee78cc629",
      "6a25fc0177566499b6f0",
      "76ddf5fd1219db52812b",
      "701badfc640c40d23ccc"
    ],
    "NVDA": [
      "fdeb3e7e178fa0122308",
      "6187cd7d0e0009c42d02",
      "1d128098b61f7774187d",
      "d07939fbac8873f36991",
      "f68478e0f50e9a3f9ea9",
      "cc33a54583070082b1ba",
      "76cb7f5bef75106419be",
      "ea0f2927241104aa1220",
      "1c80bb1458e82f446d2b",
      "5971244267261c0821f6",
      "a6339a0ab8299a98c8cf",
      "c928b7bc676dd70cff71",
      "b6a4f5f5f8d71c599576",
      "2412915696ba01e29a80",
      "83b60256ba0d24822cee",
      "54c7f5dc1d7281b699f2",
      "219beaf953067561b00b",
      "b63fb9526fdee061881a",
      "7a2b579ed7dfcef1db7a",
      "8dcae7c2e78ca564e8f4",
      "e8b539a446990e9de047",
      "70bfd28063281f82c32b",
      "aeb50a507e2b94a53da7",
      "ee928201e80103f69388",
      "f9223d48ea3d5188940a",
      "a91a3208dacc5783a627",
      "27fcd6ff0e875828211a",
      "b2df436b97fe71911f33",
      "07873f765493418e0e36",
      "47e000c7b485cc5c9e6b",
      "b428029c3ee2b5258bf4",
      "a8277fd427961d636cbb",
      "fa86d03334ea265db8bf",
      "515b3734bcb10d894b30",
      "b41569f194537cd2d02d",
      "a8af2623e0a17c9822c8",
      "6cb098f9baf9bf4e22a6",
      "ae6c3a94ed184ac46756",
      "f271cdceec7e8f1b202f",
      "3bc381129996e9c6aa02",
      "986500052a65c604ca3e",
      "cbbb7fb149dd10440c2b",
      "d46f696c3f04367773db",
      "e66f4892ca4f3e8f75ca",
      "3336a14aa584bb7a197e",
      "9d5cc7889e507851b63c",
      "98df8fa767f0713581ce",
      "3c97fce1bb55c6fefc1d",
      "2b44c6ce927d537c9229",
      "6d38a6f33bc14bb1a7ec",
      "0b1a1e816c0c815b0943",
      "defd46a5766c56b00a23",
      "2ea2782ccff5de5a9d6c",
      "75596211fbe0d7587c04",
      "993b64250ade9b6d8981",
      "a907a46054bff96b5f17",
      "92327917c606609aac4d",
      "9a55c2b362d82cd124ea"
    ],
    "AMZN": [
      "e005ae4c171f4918d155",
      "d0aff465dc806f75a1d3",
      "e0a78f9ed708066cb097",
      "f4db1be0e6cff3f47d76",
      "4c0b19c9c108c1b72007",
      "d80496fe71fac7718962",
      "fb277a9105e85e82ee78",
      "6fbd8d2e9fe0aacfe32b",
      "fbe84a66acb173fb6b94",
      "9faab8aabe78cb7c1704",
      "07873f765493418e0e36",
      "3eba4d011c7063433a3b",
      "0a08530127a14e920458",
      "986500052a65c604ca3e",
      "1d38271ae482f5f2a27a",
      "288d98be5265084eda16",
      "92327917c606609aac4d"
    ],
    "TSLA": [
      "8069e5fb8e0254ebc970",
      "16a618a026a6ea68ec5d",
      "e0a78f9ed708066cb097",
      "7d328a3c007c8924cdd7",
      "a264c284da021e873ae7",
      "3e002d4bd4bee383e3e2",
      "0dd95fd7ab7e7dd009c0",
      "97b339fbc4dd03105d10"
    ],
    "ORCL": [
      "e144c536c0f8e5ffcefa",
      "9b609fa951a5397d050a",
      "e56e56cabafdba720a43",
      "94ff0bdcbbd5e747251b",
      "d07939fbac8873f36991",
      "f68478e0f50e9a3f9ea9",
      "cc33a54583070082b1ba",
      "ea0f2927241104aa1220",
      "0e891ad4686defdef1fd",
      "c928b7bc676dd70cff71",
      "83b60256ba0d24822cee",
      "b63fb9526fdee061881a",
      "7a2b579ed7dfcef1db7a",
      "8dcae7c2e78ca564e8f4",
      "b5e0ff3e25321c0311a4",
      "70bfd28063281f82c32b",
      "798019b01d10733ce3ab",
      "aeb50a507e2b94a53da7",
      "37cf64d6776cdffade5d",
      "b2df436b97fe71911f33",
      "986500052a65c604ca3e",
      "d46f696c3f04367773db",
      "98df8fa767f0713581ce",
      "2b44c6ce927d537c9229",
      "6d38a6f33bc14bb1a7ec",
      "defd46a5766c56b00a23",
      "9c82f665511ef98a944a",
      "993b64250ade9b6d8981",
      "92327917c606609aac4d"
    ],
    "MRVL": [
      "0a6cd4892cdef50f2191",
      "b76f2a087c30405b4ab0",
      "61ab29232884a6c8166b",
      "af16bde21a9de5d05b27",
      "9e8ff232087874189f30",
      "2f1da592e24d4bf917c4",
      "f4db1be0e6cff3f47d76",
      "b0f7c85204f372b5f47b",
      "f78a1857be0246fdd474",
      "7a2b579ed7dfcef1db7a",
      "d47f2730c0a579e7fa40",
      "c8e7208365402c91d4f3",
      "10b435a91ddf9d3a56b2",
      "f38e3eb137af6ef4160e",
      "c07e647f0219a2fc08b9",
      "7b518c59cae71f78ab25",
      "61e2267125e636aad70b",
      "0249ab7077282660f38b",
      "9af80a0650fa1c368a1f",
      "df0971c252446736c3fa",
      "0f14da053a920b6e6f55",
      "ac69fd63efdf9046e805",
      "601831703227ae82f0c3"
    ],
    "MSFT": [
      "16a618a026a6ea68ec5d",
      "9b609fa951a5397d050a",
      "e0a78f9ed708066cb097",
      "d80496fe71fac7718962",
      "1d279150f84d72c7bd5a",
      "5ae8df2fdb7624e86806",
      "d9e99302e869cf72fd20",
      "bab21abe6ae97cb68c3f",
      "e520364f3c81789d511e",
      "741796c3cc0dcd3ac93e",
      "9faab8aabe78cb7c1704",
      "8226704045e4e70472fe",
      "be963e21eb7b2ee85a86",
      "3eba4d011c7063433a3b",
      "986500052a65c604ca3e",
      "b585b42a9cf2f35d19c5",
      "0b1a1e816c0c815b0943"
    ],
    "AMD": [
      "1d128098b61f7774187d",
      "d07939fbac8873f36991",
      "99944096f91bdcda7225",
      "f68478e0f50e9a3f9ea9",
      "98d1fb3f436ad2e77d71",
      "cc33a54583070082b1ba",
      "ea0f2927241104aa1220",
      "c2ebf782b459946b819a",
      "c928b7bc676dd70cff71",
      "8e525a09e0111c458074",
      "83b60256ba0d24822cee",
      "b63fb9526fdee061881a",
      "7a2b579ed7dfcef1db7a",
      "70bfd28063281f82c32b",
      "aeb50a507e2b94a53da7",
      "b2df436b97fe71911f33",
      "a8277fd427961d636cbb",
      "c07e647f0219a2fc08b9",
      "986500052a65c604ca3e",
      "0101e5fdf4177e058904",
      "d46f696c3f04367773db",
      "98df8fa767f0713581ce",
      "2b44c6ce927d537c9229",
      "6d38a6f33bc14bb1a7ec",
      "defd46a5766c56b00a23",
      "993b64250ade9b6d8981"
    ],
    "INTC": [
      "1d128098b61f7774187d",
      "c0c9c974696eee3da67d",
      "c2ebf782b459946b819a",
      "d9e99302e869cf72fd20",
      "a907a46054bff96b5f17",
      "9a55c2b362d82cd124ea"
    ],
    "META": [
      "4d1c3fad725d3697dcbe",
      "7d328a3c007c8924cdd7",
      "b8d7cbca777d4bbb71e9",
      "78e4b843d5367bd1c43d",
      "67617fc04b8ab86cafda",
      "d2023321c6b5ea0189d9",
      "b1db90a46b3ef67c59d7",
      "9e5666be192e65dc0192",
      "19b6f90ae2097a53bf3d",
      "ee928201e80103f69388",
      "37cf64d6776cdffade5d",
      "fe138c39db1848a70147",
      "0a08530127a14e920458",
      "97ab60d2f8f1d75674d8",
      "66ddda975052640de7e1",
      "9a55c2b362d82cd124ea"
    ],
    "AVGO": [
      "1d5c4cc7fe92dfe56aa5",
      "b76f2a087c30405b4ab0",
      "c16f5b53f364388701f3",
      "66d71c864af7e9b41e56",
      "698649ae67bebca5dee5",
      "b0f7c85204f372b5f47b",
      "f728f8b33b4009a060cf",
      "81fe55850ee254be779d",
      "bbd744448b3350d53bc0",
      "7a2b579ed7dfcef1db7a",
      "b2df436b97fe71911f33",
      "4b57ae92922de7ed91f2",
      "872daef07ddeb7981bf6",
      "fe25943be3f431441337",
      "defd46a5766c56b00a23",
      "601831703227ae82f0c3"
    ],
    "CRM": [
      "25bc0168b90ac2fc9ffe",
      "5d4d7592477eab90150c",
      "bd6b87e4edf671f3f374",
      "b3634d900eefec19e38f",
      "6d84d2021fea3950e5ca",
      "08a80f1bb976cf9492ce",
      "cf8178ad53a9793f8303",
      "50b22c5e8494cfb63372",
      "37cf64d6776cdffade5d",
      "9d8a67042fcb833894b1",
      "1debf00ecf38aab5dcc8",
      "2b44c6ce927d537c9229",
      "4df7696ead8b83388cbd",
      "58a94c4f1f8b014ee421"
    ],
    "GOOGL": [
      "e0a78f9ed708066cb097",
      "af16bde21a9de5d05b27",
      "2f1da592e24d4bf917c4",
      "f4db1be0e6cff3f47d76",
      "f6c17697958e7129546c",
      "5ae8df2fdb7624e86806",
      "b0f7c85204f372b5f47b",
      "9e5666be192e65dc0192",
      "898b714bdb251875f0a7",
      "7a2b579ed7dfcef1db7a",
      "d47f2730c0a579e7fa40",
      "aeb50a507e2b94a53da7",
      "9faab8aabe78cb7c1704",
      "3eba4d011c7063433a3b",
      "7b518c59cae71f78ab25",
      "0249ab7077282660f38b",
      "16f25a68b20e583bbcdd"
    ],
    "ANET": [
      "af5e7a4c2cf9cf3251b9",
      "bf54e0823235d899517a",
      "036fcff437adefe47750"
    ],
    "KLAC": [
      "ddeada5adecc3bc0b3e1",
      "3c12b3ed30f374110ff0",
      "b3e1fca489b98b4a35c2"
    ],
    "GEV": [
      "94ff0bdcbbd5e747251b",
      "fa137cefdf21cd107824"
    ],
    "VRT": [
      "d07939fbac8873f36991",
      "2f557a88e3951b15b788",
      "89a6d2a75ad7e2e0cb99",
      "d55a86e34a0170f8ac35",
      "e18f9bdf9f418b407605"
    ],
    "SNDK": [
      "ab92edebe33adb10466f",
      "6c0ea1ff5b490565ec97",
      "b23b54deaa5530b1d077",
      "34ab0e9e5bdac00081c5",
      "986500052a65c604ca3e",
      "4a66df5c89e1f7d527ae",
      "ac69fd63efdf9046e805",
      "27290a3b3124c8571445"
    ],
    "EME": [
      "ba1b3c15186502f95921"
    ],
    "LRCX": [
      "e6997ce545527599be5f",
      "a4d1007571fbcb3eb788",
      "bec0478fe9fa24e04eff",
      "ae3e13a03bd198d385cc"
    ],
    "ETN": [
      "8fa943c36d2b51ed9f4d",
      "b63fb9526fdee061881a",
      "da74a7e41dedaf796747"
    ],
    "ARM": [
      "ea0f2927241104aa1220",
      "fade39562bf3866d7b1b"
    ],
    "TSM": [
      "3af05215b5a12b002b10",
      "c928b7bc676dd70cff71",
      "375f36acf0e374440d57",
      "993b64250ade9b6d8981"
    ],
    "STX": [
      "83b60256ba0d24822cee",
      "812cbec4b91184b24406",
      "e8b539a446990e9de047"
    ],
    "LITE": [
      "235959fa6b3d57be3284",
      "978f127c1dcf179ad905",
      "99c63b2fbbbec623f124"
    ],
    "VST": [
      "6697434a1229c4f4b837",
      "0a08530127a14e920458",
      "58f9bb5887f9e21b3ab0"
    ],
    "COHR": [
      "8221d0ebdc98201d7b6e",
      "978f127c1dcf179ad905",
      "241950d0b8fd93e53f9f"
    ],
    "ASML": [
      "bf0d91ba0f34aa862a60"
    ],
    "MOD": [
      "d6919d33bcd3dd20f75f"
    ],
    "PLTR": [
      "19b6f90ae2097a53bf3d",
      "66ddda975052640de7e1"
    ],
    "HUBB": [
      "6a0245b6544d3258642d"
    ],
    "AMAT": [
      "70bfd28063281f82c32b",
      "437ebc3c071f1823cd7e",
      "e06bbfff733e09e0560d"
    ],
    "PWR": [
      "e8bffdc7ddaa2b96f696",
      "628d24854e208cadd616"
    ],
    "CEG": [
      "140947ab446ca57ecdbd",
      "01b3dd3f34c180411af4"
    ],
    "FIX": [
      "ec2be997df85cf7de347"
    ]
  }
};
