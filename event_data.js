// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792451714.842491,
  "events": [
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792451662.879963
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792451662.879963
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis Lumentum 주식이 하락한 이유는 무엇입니까?",
        "2026년 10월 19일 · Trefis Team LITE YTD +123.6% SPY YTD +12.5% ​​QQQ YTD +15.8% LITE 분석 → Lumentum(LITE)의 주가는 2026년 10월 9일부터 10월 16일까지 5번의 거래 세션에서 25.3% 하락했습니다.",
        "같은 기간 S&P 500은 1.9% 하락했다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 123.6%, 12.5%, 15.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 123.6%, 12.5%, 15.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv 주식은 1년 후 어디에 있을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% 데이터 c용 열 관리, 액체 냉각 및 무정전 전원 공급 장치(UPS) 시스템 제공업체인 The Motley Fool Vertiv( VRT -0.17% )에 참여하세요.",
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
      "id": "5c3c81838d9fc2d5ca47",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "GLW, VZ, COHR In Focus As AI Fiber Shortage Drives Prices Higher — TrendForce Sees Supply Crunch Through 2028",
      "headlineKo": "AI 섬유 부족으로 인해 가격이 상승함에 따라 GLW, VZ, COHR에 주목 - TrendForce는 2028년까지 공급 위기를 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7338b03f36359df8ead95869e3f85bb510ab485bcb98b7cf16f7f99405289a2f",
        "publishedAt": 1792429764,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 섬유 부족으로 인해 가격이 상승함에 따라 GLW, VZ, COHR에 초점 - TrendForce는 2028년까지 공급 위기를 확인합니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.15% SPY 0.53% QQQ 1.35% 추세 DJT 7.44% HOOD 2.19% NFLX 1.13% IRON 36.56% CBRS 5.16%",
        "AI 광케이블 부족으로 인해 가격이 상승함에 따라 GLW, VZ, COHR에 주목 - TrendForce는 2028년까지 공급 위기를 예측",
        "광섬유 케이블의 단일 광섬유를 사용하면 매우 빠른 데이터 전송이 가능합니다.(Oed/ullstein bild via Getty Images) Harshita Tyagi · Stocktwits 게시일: 2026년 10월 19일 | 오후 1시 9분(EDT) 공유 · TrendForce에 우리를 추가해 전 세계적인 선택을 예측합니다"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.15%, 0.53%, 1.35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.15%, 0.53%, 1.35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "실적에 앞서 광학 주식 반등: Applied Optoelectronics는 5% 상승, Lumentum은 4% 추가, Coherent는 2% 상승 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,705.60 +0.53% Dow Jones 52,046.40 +0.09% Nasdaq 100 29,584.60 +1.27% Russell 2000 2,732.80 +0.29% S&P 500 7,705.60 +0.53% 다우존스 52,046.40 +0.09% 나스닥 100 29,584.60 +1.27% 러셀 2000 2,732.80 +0.",
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
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "3년 후 Vertiv 주식의 가치는 얼마나 될까요?",
        "| Trefis 3년 후 Vertiv 주식의 가치는 얼마나 될까요?",
        "2026년 10월 19일 · Trefis Team VRT YTD +27.5% SPY YTD +12.5% ​​XLI YTD +8.7% VRT 분석 → Vertiv(VRT)는 전력 및 냉각 장비를 데이터 센터에 판매합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 27.5%, 12.5%, 8.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 27.5%, 12.5%, 8.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792451662.879963
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum: 2026년에는 어떤 기술주를 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공 지능(AI)이 컴퓨팅 성능과 데이터 전송을 새로운 한계로 밀어붙이면서 투자자들은 다양한 경로를 저울질하고 있습니다.",
        "현재 Arm Holdings(ARM +0.11%) 또는 Lumentum Holdings(LITE +1.26%)가 더 나은 선택입니까?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.11%, 1.26%, $228.05 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.11%, 1.26%, $228.05 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
      "id": "86a6d4b21b00fc450fa3",
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
      "headline": "Red Hat Expands Availability of Its Industry-Leading Hybrid Cloud Platforms on Oracle Cloud Infrastructure",
      "headlineKo": "Red Hat, Oracle Cloud Infrastructure에서 업계 최고의 하이브리드 클라우드 플랫폼 가용성 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=888420fd5247dbc3a598c280ca2224b50a4b85a0272c5c0c893a5127672ae31b",
        "publishedAt": 1792414800,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Red Hat, Oracle Cloud Infrastructure에서 업계 최고의 하이브리드 클라우드 플랫폼 가용성 확대"
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "LRCX to Report Q1 Earnings: Should You Buy, Hold or Sell the Stock?",
      "headlineKo": "LRCX, 1분기 수익 보고: 주식을 매수, 보유, 매도해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00f243f55bfcb5809275cc6b6c6d0457e4fb912c33a726caab36e84e0ad625fb",
        "publishedAt": 1792412580,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "LRCX, 1분기 수익 보고: 주식을 매수, 보유, 매도해야 합니까?"
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cramer의 거래 중지: Sandisk Corporation 및 Western Digital 탐색 건너뛰기 시장 비즈니스 투자 기술 정치 및 정책 비디오 관심 목록 Investing Club PRO 라이브스트림 메뉴 지금 보기 이 비디오에서 SNDK WDC 공유 Faceb를 통한 기사 공유",
        "00:50 2026년 10월 19일 월요일 오전 10:02 EDT 지금 보기 지금 보기 비디오 01:27 젤렌스키 없는 푸틴-시 정상회담에 대한 트럼프: 나는 2시간 전 전쟁을 멈추기 위해 무엇이든 할 것입니다 지금 보기 지금 보기 비디오 01:53 우크라이나의 젤렌스키가 트럼프 대통령을 비판합니다"
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
        "collectedAt": 1792451662.879963
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792451662.879963
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
      "id": "32738954331fd2d10d90",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today: Dow Futures Drop, S&P 500, Nasdaq 100 Rise as Scott Bessent Links September Inflation to 'Energy Shock'— RCAT, ESLT, STLD in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: Scott Bessent가 9월 인플레이션을 '에너지 쇼크'로 연결함에 따라 다우 선물 하락, S&P 500, Nasdaq 100 상승 - RCAT, ESLT, STLD 초점(업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=40f4a1332e7682529eb774ac8525cde8644ea43879c8485469a005d89ef94d55",
        "publishedAt": 1792398191,
        "collectedAt": 1792451662.879963
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 주식 시장: 다우 선물 하락, S&P 500, Nasdaq 100 상승, Scott Bessent 연결 9월 인플레이션 - Benzinga SPY 767.39 +0.54% QQQ 719.81 +1.41% BTC/USD — DIA 518.91 −0.04% GLD 379.89 −0.55% TLT 79.70 −0.44% US 로그인 회원가입 My A",
        "다우존스 지수가 하락하고 S&P 500과 나스닥 100 지수가 금요일 종가 이후 상승하면서 월요일 주식 선물은 혼조세를 보였습니다.",
        "크리스 라이트 에너지 장관은 에너지 비용 상승에 대한 비판이 제기되는 가운데 도널드 트럼프 대통령을 옹호하며 트럼프 대통령이 평화를 가져오고 에너지 가격을 낮추기를 원한다고 말했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.54%, 1.41%, 0.04% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.54%, 1.41%, 0.04% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BE 주식, 시판 전 실적 주간으로 도약: 월스트리트가 3분기 성장을 주목하면서 40% 팝에 대한 소매 베팅 AI 에이전트 동향 뉴스 수익 전체 DIA 0.15% SPY 0.52% QQQ 1.33% 추세 DJT 7.73% HOOD 2.09% NFLX 1.15% IRON 36.57% CBRS 4.94% UAL 0",
        "BE 주식, 시판 전 수익 주간으로 도약: 월스트리트가 강세를 보이면서 소매업은 40%의 인기를 누리고 있습니다. 3분기 성장 분석가들은 매출이 전년 동기 대비 두 배 증가한 10억 6천만 달러, 조정 EPS가 0.15달러에서 0.70달러로 상승할 것으로 예상합니다.",
        "이번 포토 일러스트에는 블룸에너지 로고가 스마트폰 화면에 표시된 모습이 담겨 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 40%, 0.15%, 0.52% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 40%, 0.15%, 0.52% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
      "id": "502e57962ac2b765d047",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "ServiceNow, Eaton, SentinelOne And A Financial Stock: CNBC’s ‘Final Trades’",
      "headlineKo": "ServiceNow, Eaton, SentinelOne 및 금융 주식: CNBC의 '최종 거래'",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c9cd187153b83d3f927c20bc9159ae462992c7b093d1dc1ba62cba85987cbc6d",
        "publishedAt": 1792394835,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ServiceNow, Eaton, SentinelOne 및 금융 주식: CNBC의 '최종 거래' - JPMorgan Chase(NYSE:JPM) - Benzinga SPY 767.81 +0.60% QQQ 720.73 +1.54% BTC/USD — DIA 518.96 −0.03% GLD 379.92 −0.55% TLT 79.65 −0.50% US 로그인 회원가입 My Acc",
        "그의 선택을 지지하는 파이퍼 샌들러(Piper Sandler) 분석가 빌리 피츠시몬스(Billy Fitzsimmons)는 금요일 ServiceNow에 대해 비중확대 등급을 유지하고 목표 가격을 140달러에서 175달러로 높였습니다.",
        "NewEdge Wealth의 CEO인 Rob Sechan은 JPMorgan Chase & Co로 이름을 지정했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.60%, 1.54%, 0.03% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ETN에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.60%, 1.54%, 0.03% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "No ‘Black Monday’? Nasdaq, S&P 500, Dow Futures Spike As Big Tech Earnings Loom This Week — Retail Stays Cautious",
      "headlineKo": "'검은 월요일'은 없나요? 나스닥, S&P 500, 다우 선물은 이번 주에 거대 기술 기업의 수익이 예상됨에 따라 급등합니다. 소매업체는 여전히 조심스럽습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a2e701a4b533b333f361b3a63e36f7840c645ceaa6ad5ec7dd99a649e6795af",
        "publishedAt": 1792382876,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "'검은 월요일'은 없나요? 나스닥, S&P 500, 다우 선물은 이번 주에 거대 기술 기업의 수익이 예상됨에 따라 급등합니다. 소매업체는 여전히 조심스럽습니다."
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792451662.879963
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
      "headline": "Taiwan Semiconductor Just Proved Why It's a Top AI Investment",
      "headlineKo": "대만 반도체가 최고의 AI 투자처인 이유를 방금 증명했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa8f89ccfcc82cdd5533240900c42271d1d202512420920155fb3590ecca9420",
        "publishedAt": 1792352580,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만 반도체가 최고의 AI 투자처인 이유를 방금 증명했습니다."
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792451662.879963
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792451662.879963
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792451662.879963
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
        "collectedAt": 1792451662.879963
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
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
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Caterpillar: AI 전력 증강에 더 많이 노출되는 것은 무엇입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Technology 기업들은 인공지능(AI) 인프라에 막대한 투자를 하고 있으며, 분석가들은 AI 자본 지출을 기대하고 있습니다.",
        "이는 차세대 데이터 센터의 컴퓨팅, 전력, 냉각 및 기타 관련 인프라 요구 사항에 대한 엄청난 매출을 촉진하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.7 trillion, $2.1 trillion, 1.39% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.7 trillion, $2.1 trillion, 1.39% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "비스트라 주가는 지난 1년 동안 28% 하락했습니다.",
        "| TIKR.com 주식 리뷰 Vistra 주식은 지난 1년 동안 28% 하락했습니다.",
        "Gian Estrada • 6분 읽기 검토자: David Hanson 최종 업데이트: 2026년 10월 18일 Getty Images의 claudiodivizia 및 yangwenshuang Canva를 통한 서명 주요 내용 Vistra 주식은 지난 한 해 동안 28% 하락하여 10월 $152.02로 마감했습니다."
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
    },
    {
      "id": "c658873cbe8588aa4a01",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Sandisk Is Dominating the S&P 500 in 2026. Can It Repeat in 2027?",
      "headlineKo": "Sandisk는 2026년 S&P 500을 지배하고 있습니다. 2027년에도 반복될 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=417b4fb879081d5ade679677727209b51e3c42110dee2814fafd701b1119a294",
        "publishedAt": 1792302600,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk는 2026년 S&P 500을 지배할 것입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Sandisk( SNDK -6.85% )에 합류",
        "그럼에도 불구하고 Sandisk는 큰 차이로 2위를 유지하고 있으며 올해 거의 500% 상승했습니다. 나쁘지 않은 1년 이익입니다!"
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 500%, 372%, $1,299.30 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 500%, 372%, $1,299.30 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cb6b222ff1e8ea827ae4",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "VST",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Does Vistra (VST) Gain From Its $1 Billion Preferred Stock Redemption?",
      "headlineKo": "Vistra(VST)는 10억 달러 우선주 상환을 통해 무엇을 얻나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60227f9160a405233d9f96e87da2692865140e976641f566e48de67a68b08de1",
        "publishedAt": 1792297105,
        "collectedAt": 1792447523.3402944
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
        "이 기사는 VST의 사업과 관련된 'What Does Vistra (VST) Gain From Its $1 Billion Preferred Stock Redemption?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d4506840446e71bbd514",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MU",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Technology vs. Sandisk: Which AI Memory Stock Is the Better Investment?",
      "headlineKo": "마이크론 테크놀로지 vs. 샌디스크: 어느 AI 메모리 주식이 더 나은 투자인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=309bcc166c8163e50d52451d0535d90e773c546669687709a1c6091bd979ca19",
        "publishedAt": 1792293001,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 5.63%, 6.85%, 60%, $133.2 billion, 256.3%, $85 billion, 63.8%, $43.4 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MU의 사업과 관련된 'Micron Technology vs. Sandisk: Which AI Memory Stock Is the Better Investment?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "542c0f4839b34eca8bea",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Dow Jones Futures Loom After S&P 500, Nasdaq Break Support; Will Meta Earnings Save AI?",
      "headlineKo": "S&P 500 이후 Dow Jones Futures Loom, Nasdaq Break 지원; 메타 수입이 AI를 절약할 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1059199285a6a8fe190c546bd82ab818cf2c30fa064961311b69c1ebc6045210",
        "publishedAt": 1792292259,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dow Jones Futures Loom After S&P 500, Nasdaq Break Support; Will Meta Earnings Save AI?",
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
      "id": "ee58b1442a6454eceb27",
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
      "headline": "Unity Stock In Focus After Google AI Game Creation Partnership",
      "headlineKo": "Google AI 게임 제작 파트너십 후 Unity Stock In Focus",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9efd3ce470a9d0a0a34895898fa7012f32f387d7585c5ae09c3fb20fdd311198",
        "publishedAt": 1792289780,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Unity Stock In Focus After Google AI Game Creation Partnership",
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
      "id": "50b8d5c85c7afc2a348b",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "How Nvidia Could Make $150 Billion Look Small",
      "headlineKo": "엔비디아가 $ 1,500억을 작아 보이게 하는 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d7070d4d1c8c5e84c905facedfc79308aeb0e0dd21365e1096510135cd4dc54",
        "publishedAt": 1792282861,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia가 1,500억 달러를 작게 보이게 만드는 방법 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 참여하세요 Motley Fool Hidden Gems Investing의 이번 에피소드에서는 Motley Fool 기고자 Tyler",
        "5000억 달러 규모의 자사주 매입 사례입니다.",
        "엔비디아의 AI 안전 계획과 시장이 싫어하는 점."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $500 billion, $150 billion, $250 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $500 billion, $150 billion, $250 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6c97616679eee1a4c154",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AVGO",
        "NVDA",
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
          "name": "Broadcom",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
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
      "headline": "$3,000 Split Across Nvidia, Broadcom, and TSMC Could Be Worth This Much by 2030",
      "headlineKo": "2030년까지 엔비디아, 브로드컴, TSMC를 가로지르는 $ 3,000 스플릿이 이만큼의 가치가 있을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eccb3290658773cf73b2e97e864fe97d851b64b9a96ebbb996cbf9e6377e4d60",
        "publishedAt": 1792282800,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia, Broadcom 및 TSMC에 걸쳐 3,000달러를 분할하면 2030년까지 이만큼 가치가 있을 수 있음 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool에 참여하세요. artificia 포트폴리오를 구축하고 싶다면",
        "이 금액으로 Nvidia 5주, Broadcom 3주, TSMC 2주를 3,000달러 미만에 구입할 수 있습니다.",
        "AI 인프라 구축이 계속된다면 2030년 말까지 투자 가치가 9,000달러가 넘을 수 있다고 생각합니다. 이는 4년 남짓 안에 3배 이상의 수익을 올릴 수 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $3,000., $9,000, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $3,000., $9,000, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5dc1eb95e9ca9d7adf97",
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
      "headline": "Prediction: Oracle Stock Trails the S&P 500 Through 2030",
      "headlineKo": "예측: Oracle 주식은 2030년까지 S&P 500을 추월합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93aa3759b7ee963363cc4cc54dd8390a92402604886547ed78517901e80d40f6",
        "publishedAt": 1792281962,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: Oracle Stock, S&P 500을 2030년까지 추적 | The Motley Fool Accessibility Help About Us ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Join The Motley Fool Oracle (ORCL -4.64%) 주가는 이 글을 쓰는 시점에서 $ 130에 가까웠으며, 약 60% o",
        "올해 주가는 33% 하락했지만 S&P 500 (^ GSPC -1.09%) 은 9월까지 약 13% 의 수익률을 기록했다.",
        "이렇게 급격한 추락은 주식을 유혹하게 만들고, 수익에 대해서는 논쟁의 여지가 없을 정도로 저렴합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $55.7 billion, 54%, $32.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $55.7 billion, 54%, $32.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0743f183bcf44dc25cdf",
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
      "headline": "Greg Abel Made Major Additions to Alphabet and Delta Last Quarter While Berkshire Bought Back $4.4 Billion of Its Own Stock. Is This a Buying Signal Investors Should Watch?",
      "headlineKo": "Greg Abel은 지난 분기에 Alphabet과 Delta에 대규모 투자를 했으며 Berkshire는 44억 달러의 자사주를 매입했습니다. 이것은 투자자가 주목해야 할 구매 신호입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=397e53539d11d5d4bca705e1a7c57555ab0061c7f5f441a4dd5b9c27d0e6748a",
        "publishedAt": 1792277400,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Greg Abel은 지난 분기에 Alphabet과 Delta에 대규모 투자를 했으며 Berkshire는 44억 달러의 자사주를 매입했습니다.",
        "이것은 투자자가 주목해야 할 구매 신호입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 워렌 버핏이 버크셔 해서웨이의 CEO 자리에서 물러났을 때 ( BRKA +1.08% ) ( BRKB +1.21% ) , 그의 성공에 많은 시선이 있었습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $4.4 Billion, 2.47%, 2.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4.4 Billion, 2.47%, 2.32% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9368cf970b9b9abb0e74",
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
      "headline": "What to Expect From Advanced Micro Devices’ Q3 2026 Earnings Report",
      "headlineKo": "Advanced Micro Devices의 2026년 3분기 실적 보고서에서 기대할 수 있는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=10a536d70582d8da448e7dd1cb4a1b7873372f6ba967ca7a98ff444141f63bce",
        "publishedAt": 1792276030,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What to Expect From Advanced Micro Devices’ Q3 2026 Earnings Report",
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
      "id": "e38de5e08a40ca8b3c9e",
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
      "headline": "Broadcom’s $29 Billion AI Backstop: How Much Risk Does the Cash Flow Cover?",
      "headlineKo": "Broadcom의 290억 달러 규모 AI 백스톱: 현금 흐름이 어느 정도의 위험을 감당합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c65da6be8fb66f8cf600d35fd44cdadba29a61d8ed6271236ef9db1ff55766f",
        "publishedAt": 1792275080,
        "collectedAt": 1792447523.3402944
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
        "이 기사는 AVGO의 사업과 관련된 'Broadcom’s $29 Billion AI Backstop: How Much Risk Does the Cash Flow Cover?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "2bc181ea66f5ab82aedf",
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
      "headline": "Micron Looks Cheap on Earnings. How Much Can Profits Fall Before That Changes?",
      "headlineKo": "마이크론은 실적이 저렴해 보입니다. 변화가 일어나기 전에 이익은 얼마나 줄어들 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd34c97a706c554e36d89704853d8178566481e9c212dbed52e8bb26a818188d",
        "publishedAt": 1792275072,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Looks Cheap on Earnings. How Much Can Profits Fall Before That Changes?",
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
      "id": "e12cfbc6db4318ef48f0",
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
      "headline": "Eaton (ETN) Finance Reshuffle Meets AI Power Narrative With Fair Value In Focus",
      "headlineKo": "Eaton(ETN) 금융 개편, 공정 가치에 초점을 맞춰 AI 파워 내러티브를 만나다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b84b71fc60c3b31227906513100c14d48239dad7a7f0c9509be7d4395c04b4b9",
        "publishedAt": 1792267839,
        "collectedAt": 1792447523.3402944
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
        "이 기사는 ETN의 사업과 관련된 'Eaton (ETN) Finance Reshuffle Meets AI Power Narrative With Fair Value In Focus' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "bfdbfc7e495e284e24d4",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Apple's Market Value Grew From $350 Billion to $5 Trillion During Tim Cook's 15 Years as CEO. Here's What That Growth Curve Means for Apple's Next Chapter Under John Ternus.",
      "headlineKo": "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 5조 달러로 성장했습니다. John Ternus가 이끄는 Apple의 다음 장에서 성장 곡선이 의미하는 바는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28c149039cb32b2d3b53aa6fe40be2dfe7dae25ec8983aee0a1eb10b69911a1b",
        "publishedAt": 1792267620,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 5조 달러로 성장했습니다.",
        "John Ternus가 이끄는 Apple의 다음 장에서 성장 곡선이 의미하는 바는 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Apple( AAPL +0.43% )이 2009년 초 팀 쿡 전 CEO가 퇴임하면서 잠시 입성했던 5조 달러 가치 클럽에 다시 합류했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $350 Billion, $5 Trillion, 2,600% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $350 Billion, $5 Trillion, 2,600% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6cc2b54bb681d0928e7f",
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
      "headline": "Is Micron's Incredible Run About to End?",
      "headlineKo": "마이크론의 인크레더블 런이 곧 끝날 것인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3dc01020fc481fb70d96de3e8a1a115bf506442a29c3b53ffb679a11451eb418",
        "publishedAt": 1792265220,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론의 인크레더블 런이 곧 끝날 것인가?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron( MU -5.63% )이 지난 1년간 이례적인 상승세를 이어왔습니다.",
        "메모리 칩 제조업체는 제한된 경쟁과 AI 혁명으로 인한 수요 급증으로 이익을 얻었습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 220%, $878.84, $52.40 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 220%, $878.84, $52.40 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3952f355b71f86ffdd41",
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
      "headline": "Microsoft (MSFT) Is Facing Fresh Regulatory Pressure",
      "headlineKo": "Microsoft(MSFT)가 새로운 규제 압력에 직면해 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2b566dbbc0522f8a0edae255100bcfa6d0fbc745f623c43c289e3eb8a1c74d25",
        "publishedAt": 1792264284,
        "collectedAt": 1792451662.879963
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft (MSFT) Is Facing Fresh Regulatory Pressure",
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
      "id": "03c810f13fd2c6122649",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Should You Buy Vistra After an 11% 1-Day Jump on a $4.2 Billion DOE Loan? The Catch Most Investors Are Missing.",
      "headlineKo": "42억 달러 규모의 DOE 대출에서 1일 11% 상승한 후 Vistra를 구입해야 합니까? 대부분의 투자자가 놓치고 있는 점.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f27e7f2f096b0b493b5370c1225c35d10c5a41d45c35ce24101b054a52929f9b",
        "publishedAt": 1792263000,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "42억 달러 규모의 DOE 대출로 1일 11% 상승한 후 Vistra를 구입해야 합니까?",
        "대부분의 투자자가 놓치고 있는 점.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% 미국에서 발표된 The Motley Fool One 발표에 참여하세요"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, $4.2 Billion, 1.53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, $4.2 Billion, 1.53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "70d84767802f83447189",
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
      "headline": "Should you Buy Amazon Stock Before October 29? History Has a Clear Answer.",
      "headlineKo": "10월 29일 이전에 Amazon 주식을 구매해야 합니까? 역사에는 분명한 답이 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c98b0b0deb299418c06b083375294a1579ee705dab2a479bc07d7b5c9ce840f2",
        "publishedAt": 1792262820,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10월 29일 이전에 Amazon 주식을 구매해야 합니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Amazon( AMZN -1.87% )은 10월 20일에 2026년 3분기 실적을 보고합니다.",
        "전자상거래 및 클라우드 거대 기업은 안정적인 전자상거래 사업과 AI 기반 성장의 혜택을 누렸습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $220 billion, 21%, 37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $220 billion, 21%, 37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c4c976980704bf8e762f",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Jim Cramer Set A $250 Palantir (PLTR) Share Price Target – Then The Shares Closed 11% Lower During The AI Selloff",
      "headlineKo": "Jim Cramer는 250달러의 Palantir(PLTR) 주가 목표를 설정했습니다. 이후 AI 매도 기간 동안 주가는 11% 하락하여 마감되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2bb3b063e3d88b108b6d5fc3727601fb4284b2fab37d3f8faae781107d533951",
        "publishedAt": 1792262819,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Cramer Set A $250 Palantir (PLTR) Share Price Target – Then The Shares Closed 11% Lower During The AI Selloff",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "a66f0bf595c75c1092e9",
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
      "headline": "Oracle's Real Growth Story Is Hiding in Its $664 Billion Backlog",
      "headlineKo": "오라클의 실제 성장 스토리는 6,640억 달러 규모의 백로그에 숨겨져 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3bf160a07b0efddd7ca2c23af90823ea07e2c4e7790c02d2ebcc1feb29badd16",
        "publishedAt": 1792261200,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클의 실제 성장 스토리는 $ 664 Billion Backlog에 숨어 있습니다 | The Motley Fool Accessibility Help About Us ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % 가입 The Motley Fool Investors는 Oracle (ORCL -4.",
        "이 회사는 인공지능 (AI) 클라우드 주식으로의 전환을 위해 많은 자금을 조달하기 위해 많은 돈을 빌렸다.",
        "더욱이, 그 잔고의 대부분은 재정적으로 기대에 부응하지 못한 회사인 OpenAI에 달려 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $664 billion, $125 billion, $67 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $664 billion, $125 billion, $67 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4a824cf56d68c1faf154",
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
      "headline": "China’s Answer to Micron Just Made Nearly $20 Billion",
      "headlineKo": "마이크론에 대한 중국의 대응으로 거의 200억 달러를 벌었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e8060b444e92d7c917a02dbb1c1228eb94c04a890e24b2c1208c09325091332",
        "publishedAt": 1792259306,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론에 대한 중국의 대응으로 거의 200억 달러를 벌어들였습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,665.00 −1.07% Dow Jones 51,999.60 −0.44% Nasdaq 100 29,213.40 −2.32% Russell 2000 2,724.81 −1.63% S&P 500 7,665.00 −1.07% 다우존스 51,999.60 −0.44% 나스닥 100 29,213.40 −2.32% 러셀 2000 2,724.81 −1.",
        "작성자: Omor Ibne Ehsan 2026년 10월 17일 오후 1시 48분(ET) 게시 · 3분 읽기 𝕏 f ⧉ 이 그래픽은 중국의 기술 발전과 경제 급등을 상징하며, Cha와 같은 주요 메모리 칩 제조업체의 실질적인 재정적 성공을 반영합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $20 Billion, $19.6 billion, $19.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $20 Billion, $19.6 billion, $19.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4bbdf16bf41c3ca4dc93",
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
      "headline": "Palantir Stock Fell 7% in a Day and Slipped Into a Correction. Here’s Where It Could Go by 2030",
      "headlineKo": "Palantir 주가는 하루 만에 7% 하락하며 조정 국면에 빠졌습니다. 2030년까지 갈 수 있는 곳은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=221cac8e51e028b0f1977f44f60b92b5d31daee03faba5fcf2e7d4a9912e1549",
        "publishedAt": 1792258216,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 주가는 하루 만에 7% 하락하며 조정 국면에 빠졌습니다.",
        "2030년까지 갈 수 있는 곳은 다음과 같습니다 | TIKR.com 주식 리뷰 Palantir 주식은 하루 만에 7% 하락하며 조정 국면에 빠졌습니다.",
        "2030년까지 갈 수 있는 곳은 다음과 같습니다. Wiltone Asuncion • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 17일 @Mungkhoodstudio의 이미지(Canva를 통해), @aukidphumsirichat(Canva를 통해) Palantir 주식에 대한 주요 통계 현재 가격: $186.03 Tar"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, $186.03, $1,330 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, $186.03, $1,330 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "025e08677c9c9ec46e7e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel Stock Fell Nearly 6% as TSMC Took Aim at Its Packaging Business. Here’s What It Means for Intel’s Margins",
      "headlineKo": "TSMC가 패키징 사업을 목표로 삼으면서 인텔 주가는 약 6% 하락했습니다. 인텔의 마진이 의미하는 바는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca2bf16f5b630348dcff0278e595af4431925ee990afbac5440c39d89b96268b",
        "publishedAt": 1792257998,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSMC가 포장 사업을 겨냥하면서 Intel Stock은 거의 6% 하락했습니다.",
        "인텔의 마진에 대한 의미는 다음과 같습니다 | TIKR.com 재고 검토 TSMC가 포장 사업을 겨냥하면서 인텔 재고는 거의 6% 하락했습니다.",
        "인텔의 여백에 대한 의미는 다음과 같습니다. Wiltone Asuncion • 5분 읽기 리뷰 작성자: David Hanson Last updated Oct 17, 2026 @ Vedat OGUZCAN from Getty Images via Canva, @ Daniel CHETRONI from Daniel Chetroni via Canva K ey Stats for Intel S"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, $89.85, $390 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, $89.85, $390 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "285dd24ca08012221024",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Palantir Stock a Buy Right Now?",
      "headlineKo": "Palantir 주식을 지금 매수할 수 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=387365ff981c7c4470704ae86cf2295b8748bb408c24ac1ed11d9dd50b0b2b87",
        "publishedAt": 1792257900,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Palantir( PLTR -7.22% )는 6년 전 직접 상장을 통해 상장했습니다.",
        "주당 10달러에 거래되기 시작했지만 현재는 주당 약 186달러의 가치가 있습니다.",
        "이 기술주가 왜 이렇게 엄청난 이익을 얻었는지, 그리고 이 험난한 시장에서 오늘날에도 여전히 매수할 가치가 있는지 살펴보겠습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10, $186, $186.03 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10, $186, $186.03 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5d1f7e37a23597e91a5e",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Twenty Hours a Week at an Amazon Warehouse for Health Insurance at 60? Here Is the Math a Retired Paralegal Will Run",
      "headlineKo": "60세에도 건강 보험을 위해 아마존 창고에서 일주일에 20시간을 일하시나요? 은퇴한 법률 보조원이 실행할 수학은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3d1f74d7ccf641e5a3f0aba92111c3e3f91685f7431a8066e41d96d90670ff8a",
        "publishedAt": 1792257771,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "60세에도 건강 보험을 위해 아마존 창고에서 일주일에 20시간을 일하시나요?",
        "은퇴한 법률 보조원이 연중무휴로 운영하는 수학은 다음과 같습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,665.00 −1.07% Dow Jones 51,999.60 −0.44% Nasdaq 100 29,213.40 −2.32% Russell 2000 2,724.81 −1.63% S&P 500 7,665.00 −1.07% 다우존스 51,999.60 −0.44% 나스닥 100 29,213.40 −2.32% 러셀 2000 2,724.81 −1."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $350,000, 400%, $45,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $350,000, 400%, $45,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b12574e1ac0e61eaa2ef",
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
      "headline": "1 Red Flag That AMD Investors Should Be Aware Of Now",
      "headlineKo": "AMD 투자자가 지금 알아야 할 1가지 위험 신호",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b33100c8f52e473b17e76d0e867f9d81245deeb78553cf7d8e19b157387ecb5d",
        "publishedAt": 1792255800,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD 투자자가 지금 알아야 할 1가지 위험 신호 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Adanced Micro Devices에 참여하세요( AMD -5.96% ) 투자자들은 놀라운 성과를 거두었습니다.",
        "현재 AMD는 S&P 500에서 9번째로 실적이 좋은 구성 요소로, 올해 현재까지 약 160%의 수익률을 기록했습니다.",
        "가장 최근의 매도 이전에는 그 수치가 200%에 가까웠지만, 이는 대부분의 투자자들에게 경각심을 불러일으키는 신호라고 생각합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 200%, 1.43%, 3.72% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 200%, 1.43%, 3.72% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "736539ccdf29b4288e46",
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
      "headline": "Micron Is Down 30% From Its High and Just Lost Its $1 Trillion Status",
      "headlineKo": "마이크론은 최고치에서 30% 하락해 1조 달러 지위를 잃었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6c80e4aba8c077cc3fe35b25a38739cf97b54da1542774fefcb64e46ed1f340",
        "publishedAt": 1792255523,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론은 고점에서 30% 하락했으며 1조 달러 가치를 잃었습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,665.00 −1.07% Dow Jones 51,999.60 −0.44% Nasdaq 100 29,213.40 −2.32% Russell 2000 2,724.81 −1.63% S&P 500 7,665.00 −1.07% 다우존스 51,999.60 −0.44% 나스닥 100 29,213.40 −2.32% 러셀 2000 2,724.81 −1.",
        "그렇다면 왜 투자자들은 사이클이 이미 정점에 도달한 것처럼 매도하고 있습니까?"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $1 Trillion, $878.84, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, $1 Trillion, $878.84, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "95d612779e46468a9b56",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Here's What $10,000 Invested in Broadcom Will Be Worth by 2028",
      "headlineKo": "2028년까지 Broadcom에 투자한 10,000달러의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45a3448716324098d8e591a655907a4334752a37a76b822f4a93cfd1075a0b82",
        "publishedAt": 1792253280,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2028년까지 Broadcom에 투자한 10,000달러의 가치는 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 투자자들이 AI 칩 제조사를 생각할 때 Nv를 먼저 생각할 수도 있습니다.",
        "그러나 가장 많이 잊혀진 경쟁업체 중 하나는 Broadcom(AVGO -4.53%)입니다.",
        "간단합니다. Broadcom은 소비자가 아닌 거대 고객을 위한 컴퓨팅 장치만 만듭니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.53%, $10,000, $20,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.53%, $10,000, $20,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "370409f4636dde498eff",
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
      "headline": "Nvidia Stock Is Up 13% This Year. Where Does the Stock Stand Now?",
      "headlineKo": "엔비디아 주가는 올해 13% 상승했습니다. 현재 주식은 어디에 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8763755f89324f68072e0445cd2a12c5dc63c079cbcb9e9a3cd69ccd407f9de5",
        "publishedAt": 1792253234,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| TIKR.com 기본 분석 Nvidia 주식은 올해 13% 상승했습니다.",
        "Gian Estrada • 6분 읽기 검토자: David Hanson 최종 업데이트 2026년 10월 17일 Getty Images의 Mariia Demchenko 및 Getty Images의 yangwenshuang Canva를 통한 서명 주요 내용 Nvidia 주가는 올해 13.4% 상승하여 10월 기준 $214.13입니다.",
        "$328.72의 평균 스트리트 목표는 종가보다 53.5% 높습니다. 49명의 애널리스트가 해당 주식에 대해 매수, 10점은 우수, 2점은 보유, 1점은 매도, 1점은 의견 없음으로 평가했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 13.4%, $214.13 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 13.4%, $214.13 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6d2e2d5060c3d5bde2b7",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "$10,000 Invested in Apple Could Be Worth This Much by 2031",
      "headlineKo": "Apple에 투자한 10,000달러는 2031년까지 이만큼 가치가 있을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30839aa7fc60dc069948cc37c5e8fe24fa644d372c234e8f2f901824d19ec307",
        "publishedAt": 1792252142,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple에 투자한 10,000달러는 2031년까지 이만큼 가치가 있을 수 있습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Apple( AAPL +0.43% )은 장기간에 걸쳐 놀라운 결과를 제공했습니다.",
        "만약 당신이 30년 전에 그 회사에 10,000달러를 투자하고 계속 유지했다면, 당신은 오늘날 억만장자가 되었을 것입니다.",
        "그러나 기술 리더는 최근 몇 년 동안 관세, 독점 금지 소송, CEO 변경 등 여러 가지 역풍에 직면했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, 16%, $109.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $10,000, 16%, $109.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dccabd9f726d65afbe87",
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
      "headline": "Tesla Just Won in Court: Self-Driving Buyers Can’t Sue as a Class",
      "headlineKo": "Tesla가 법정에서 승리했습니다: 자율주행 구매자는 집단 소송을 제기할 수 없습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87f6c9c3acdc63de9770a8e0619c0f687738ce8914f6b603eb4f0aed3466922e",
        "publishedAt": 1792249822,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "법정에서 승리한 테슬라: 자율주행 구매자는 집단 소송을 제기할 수 없습니다 - 24/7 Wall St.",
        "콘텐츠로 건너뛰기 닫기 ❚❚ S&P 500 7,665.00 − 1.07% 다우존스 51,999.60 − 0.44% 나스닥 100 29,213.40 − 2.32% 러셀 2000 2,724.81 − 1.63% S&P 500 7,665.00 − 1.07% 다우존스 51,999.60 − 0.44% 나스닥 100 29,213.40 − 2.32% 러셀 2000 2,724.81 − 1.",
        "글쓴이: Omor Ibne Ehsan 작성일: 2026년 10월 17일 오전 11시 10분 (동부 표준시) · 3분 읽기 미래의 테슬라 자동차가 대법원과 활기찬 금융 차트를 지나며 회사의 최근 법적 승리와 잠재적인 시장 가속도를 상징합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $354.72,, 2.13%, $1.40 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $354.72,, 2.13%, $1.40 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1aa17ee27e58d37f39e1",
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
      "headline": "Martin Shkreli Says New Photonic Chips Could Run Circles Around Nvidia",
      "headlineKo": "Martin Shkreli는 새로운 광자 칩이 Nvidia 주변을 돌 수 있다고 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a55799b189b2362335d693078d3d43619116969e9f33037b07b968c3592f7c9e",
        "publishedAt": 1792249233,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Martin Shkreli는 새로운 광자 칩이 Nvidia - 24/7 Wall Street 주변을 돌 수 있다고 말했습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,665.00 −1.07% Dow Jones 51,999.60 −0.44% Nasdaq 100 29,213.40 −2.32% Russell 2000 2,724.81 −1.63% S&P 500 7,665.00 −1.07% 다우존스 51,999.60 −0.44% 나스닥 100 29,213.40 −2.32% 러셀 2000 2,724.81 −1.",
        "문제는 Nvidia가 이미 한 발 앞서 있을 수 있다는 것입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6.39%, $96.22 billion, 105.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6.39%, $96.22 billion, 105.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a24a6c14316b65406681",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "UBS resets Microsoft stock price target for investors",
      "headlineKo": "UBS, 투자자들을 위해 마이크로소프트 주가 목표 재설정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fcf9012d7a22606465f07017e6a04f8ec3f45d0d1dc571ffe242d562be5bb359",
        "publishedAt": 1792247820,
        "collectedAt": 1792451662.879963
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "UBS resets Microsoft stock price target for investors",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "7b5e5ea47603bef00694",
      "schemaVersion": 1,
      "eventType": "competitor_supply_contract",
      "eventLabel": "경쟁사 공급 계약",
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
      "headline": "Here's How Microsoft's $175 Billion in Capital Expenditures Is Hurting Its Business",
      "headlineKo": "Microsoft의 1,750억 달러 자본 지출이 비즈니스에 어떤 타격을 주고 있는지 알아보겠습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4d83602fd58cd6a1fe8f8cc93aa5c2b25ec00d9348ffbe67cb17b8903d01078",
        "publishedAt": 1792247760,
        "collectedAt": 1792451662.879963
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "다음은 Microsoft의 $ 1750억 자본 지출이 비즈니스에 미치는 영향입니다 | The Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Join The Motley Fool Microsoft (MSFT -1.93%) 는",
        "내부 서비스인 Copilot을 위해 엄청난 양의 AI 컴퓨팅 파워를 추구하는 동시에 클라우드 컴퓨팅 플랫폼인 Azure를 통해 OpenAI의 ChatGPT와 같은 다른 제품에 전력을 공급하고 있습니다.",
        "이러한 성장을 지원하기 위해 Microsoft는 데이터 센터에 많은 투자를 하고 있습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $175 billion, $529.05, $10.39 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $175 billion, $529.05, $10.39 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6fcd06676ecfb7320877",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "S&P 500 Index Outlook: Strong Earnings Meet AI Rout, $110 Oil Prices",
      "headlineKo": "S&P 500 지수 전망: 견조한 수익과 AI Rout의 만남, 유가 110달러",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6718983e5c82be65aa580dafc888756c61be1fbe9ccdad6c7e4a494cd2657f2c",
        "publishedAt": 1792243807,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500 지수 전망: 강력한 수익과 AI 루트의 만남, $ 110 유가 - State Street SPDR S&P 500 ETF Trus - Benzinga SPY 761.26 − 0.26% QQQ 707.87 − 0.27% BTC/USD — DIA 518.00 − 0.21% GLD — TLT 80.06 +0.01% 미국 로그인 내 계정 등록 Benzi",
        "현재 지수는 사상 최고치보다 2.45% 낮습니다.",
        "수익 시즌은 잘 시작되었지만 위험은 여전히 남아 있습니다. S&P 500 지수는 미국 주요 기업들이 강력한 결과를 올렸음에도 불구하고 후퇴했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $110, 0.26%, 0.27% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $110, 0.26%, 0.27% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "15781bdf8036437e5f5d",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Dow Jones Futures: What To Do After S&P 500, Nasdaq Break Key Levels; Will Meta, SpaceX Earnings Save AI?",
      "headlineKo": "다우존스 선물: S&P 500, Nasdaq이 주요 수준을 돌파한 후 해야 할 일; Meta, SpaceX 수익이 AI를 구할 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=686d644d0adbe7ef949d5b9c024965e24572acc9fbe93595fcc792281a93851b",
        "publishedAt": 1792242031,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dow Jones Futures: What To Do After S&P 500, Nasdaq Break Key Levels; Will Meta, SpaceX Earnings Save AI?",
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
      "id": "49066cac6b39f57325f0",
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
      "headline": "Think It's Too Late to Buy Micron? Here's the 1 Reason Why There's Still Time.",
      "headlineKo": "마이크론을 구매하기에는 너무 늦었다고 생각하시나요? 아직 시간이 있는 이유 1가지를 소개합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c77059a62107009c030b8fd9350df753ef81f84132c03ae9a3a05d59fc980e61",
        "publishedAt": 1792236900,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아직 시간이 있는 이유 1가지를 소개합니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 많은 투자자들은 아마도 Micron Technology(MU -5.63%)를 놓쳤다고 느낄 것입니다.",
        "메모리 칩 제조업체의 주가는 지난 한 해 동안 약 382% 상승하여 S&P 500의 16%를 능가했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $878.84, $52.40, 5.63% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $878.84, $52.40, 5.63% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "18f7be54938b7e2bff92",
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
      "headline": "Meta, Tesla Headline Earnings In Busy Week For Markets",
      "headlineKo": "시장 바쁜 주간의 Meta, Tesla 헤드라인 수익",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3dcbe5a8689c76a628f51ae4c5084970467aab6b7f0f374e353ded8fe09592d4",
        "publishedAt": 1792234800,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta, Tesla Headline Earnings In Busy Week For Markets",
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
      "id": "75ab2e32c2c989ac109a",
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
      "headline": "Tesla: Musk Proves He Can Deliver (Earnings Preview)",
      "headlineKo": "Tesla: 머스크는 자신이 제공할 수 있음을 증명합니다(수익 미리보기)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e49ce208d933af3ac3c87627cec3a1b6ff5fbebfc66def3d708c2327927f8388",
        "publishedAt": 1792229400,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla: Musk Proves He Can Deliver (Earnings Preview)",
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
      "id": "00c44594429e240d68c6",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "ASML: Generational Buying Opportunity As AI Capex Party Continues - Upgrade Buy",
      "headlineKo": "ASML: AI Capex 파티가 계속됨에 따라 세대별 구매 기회 - 업그레이드 구매",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=013335becef70a89ac6da904752b5e32400e4b054c669c594db650d7abce4769",
        "publishedAt": 1792228833,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML: Generational Buying Opportunity As AI Capex Party Continues - Upgrade Buy",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ASML에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "135243c7203fdc2e4d9d",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SNDK",
        "SPY"
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "EXCLUSIVE: Forget China — Samsung Is The Bigger Threat To Micron, SanDisk Investors, Says Nicholas Mugalli",
      "headlineKo": "독점: 중국은 잊어라 — 샌디스크 투자자들은 삼성이 마이크론에게 더 큰 위협이라고 Nicholas Mugalli가 말했습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=82a78df11504709a7ad04e56b53a8ec41a21d590c9631d01de3027813678a0de",
        "publishedAt": 1792227560,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "독점: 중국은 잊어버리세요 — SanDisk 투자자들은 Samsung이 Micron에게 더 큰 위협이라고 말합니다. Nicholas Mugall은 말합니다. - Benzinga SPY 761.26 −0.26% QQQ 707.87 −0.27% BTC/USD — DIA 518.00 −0.21% GLD 381.40 −0.16% TLT 80.06 +0.01% US 로그인 회원가입 My A",
        "Mugalli는 중국이 Micron Technology Inc.를 포함한 메모리 회사의 주요 관심사가 아니라고 말했습니다.",
        "대신 그는 한국의 삼성전자를 지켜보고 있다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.26%, 0.27%, 0.21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.26%, 0.27%, 0.21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "97bef1ef19cd063f4945",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "History Says Tesla Stock Swings Hard on Earnings. It Has Moved 8% or More After 10 of Its Last 15 Reports.",
      "headlineKo": "역사는 테슬라 주식이 수입에 강하게 흔들린다고 말합니다. 지난 15건의 보고서 중 10건 이후 8% 이상 이동했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8538de607a60eed91dc0151d58c5abca1421b9eedc78594fbfddb864cd9c81c",
        "publishedAt": 1792226941,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "역사는 테슬라 주식이 수입에 강하게 흔들린다고 말합니다.",
        "지난 15건의 보고서 중 10건 이후 8% 이상 이동했습니다.",
        "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Motley Fool Tesla (TSLA -2.13%) 에 가입하면 10 월 수요일에 시장이 마감된 후 3/4 분기 번호가 게시됩니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, 9%, $368 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8%, 9%, $368 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "83e96f47ef7dbf8e46aa",
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
      "headline": "BYD or Tesla: Which Is a Better Stock?",
      "headlineKo": "BYD 또는 테슬라: 더 나은 주식은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4fdcce53d89becebe52da3110c8c28dfd30b00b2eea26405468404de767167d1",
        "publishedAt": 1792219800,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BYD 또는 테슬라: 더 나은 주식은 무엇입니까?",
        "| The Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Motley Fool에 가입 언뜻 보기에 이것은 쉬운 비교처럼 보입니다.",
        "둘 다 미래에 대한 야심찬 계획을 가지고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.11%, 2.13%, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.11%, 2.13%, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d1cbf12c775debf0d008",
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
      "headline": "Could Shopify Stock Repeat Amazon's Run Since 2007?",
      "headlineKo": "Shopify Stock이 2007년부터 아마존의 운영을 반복할 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c9f7a1c8769542a541064afb4f98d1f48eabb8436fc7d220dfdba49982660a8b",
        "publishedAt": 1792214222,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Shopify 주식이 2007년 이후 Amazon의 운영을 반복할 수 있을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 2007년 말에 Amazon(AMZN -1.87%) 주식을 구입한 투자자들은 그 이후로 자신의 주가가 50배 이상 상승하는 것을 지켜보았습니다.",
        "다음에 어떤 전자상거래 회사가 비슷한 일을 할 수 있는지 묻는 것은 당연하다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.84%, $179.22, $170 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.84%, $179.22, $170 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "06e756d17d9affbad4d8",
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
      "headline": "Stocktwits Defense Watch: RTX Continues Deal Momentum, Ondas-Palantir Launch AI Firm As AeroVironment Strike Four International Deals",
      "headlineKo": "Stocktwits Defense Watch: RTX Continues Deal Momentum, Ondas-Palantir, AeroVironment Strike Four International Deals로 AI 회사 런칭",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ead569efd6a103b273cbe81d64cfaef7ed7045d1d2a900173c6b4a13ff05779",
        "publishedAt": 1792210547,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits Defense Watch: RTX Continues Deal Momentum, Ondas-Palantir Launch AI Firm As AeroVironment Strike Four International Deals",
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
      "id": "331f389fe6993fb1c127",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What ASML Holding (ENXTAM:ASML)'s Record Q3 Earnings Means For Shareholders",
      "headlineKo": "ASML Holding (ENXTAM:ASML)의 기록적인 3분기 수익이 주주들에게 의미하는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c8d7f75ddb1b500bdcff5a3e0dcc57c6d44d57d70ec451ce682a27559779782",
        "publishedAt": 1792207309,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What ASML Holding (ENXTAM:ASML)'s Record Q3 Earnings Means For Shareholders",
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
      "id": "8d35a6721745a79a7523",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "TSMC Says AI Chip Demand Is Still Far Above What It Can Supply. That's Why I'd Buy Nvidia Stock.",
      "headlineKo": "TSMC는 AI 칩 수요가 여전히 공급할 수 있는 것보다 훨씬 높다고 말합니다. 그것이 바로 내가 Nvidia 주식을 구매하는 이유입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=52ffab929266c3934842b1d4f87a7e7db87c12c528772c8b8bffd6e21d542aa9",
        "publishedAt": 1792207021,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSMC는 AI 칩 수요가 여전히 공급할 수 있는 것보다 훨씬 높다고 말합니다.",
        "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Motley Fool Nvidia (NVDA -1.43%) 투자자들과 함께 10 월 목요일에 인공 지능 (AI) 칩에 대한 수요를 새롭게 살펴 보았습니다.",
        "엔비디아용 칩 웨이퍼를 제조하는 대만 반도체 제조 (TSM -2.28%) 는 7월에 446억 달러에서 458억 달러 범위의 관리가 예상했던 하이 엔드에서 467억 달러의 3분기 매출을 기록했습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.28%, $46.7 billion, $44.6 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.28%, $46.7 billion, $44.6 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ad6da6d8f02109ca2dcc",
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
      "headline": "Why You Should Think About Palantir Differently Now",
      "headlineKo": "이제 Palantir에 대해 다르게 생각해야 하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8955bf2fa5497edc3de33641e5dbc142262fc3cc80628d15432815560870baa4",
        "publishedAt": 1792205436,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금 Palantir에 대해 다르게 생각해야 하는 이유 | Trefis 지금 Palantir에 대해 다르게 생각해야 하는 이유 2026년 10월 16일 · 작성자: Trefis Team PLTR YTD +4.7% SPY YTD +12.5% QQQ YTD +15.8% PLTR → Palantir Technologies (PLTR) 분석 st",
        "프리미엄을 지불하는 투자자는 자신이 구매하는 것이 무엇인지 정확히 알아야 하며, Palantir가 만드는 사례는 진화했습니다.",
        "2024년 3분기 회계연도 수입 통화에서 경영진은 급성장하는 미국"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 35%, 149%, $764 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 35%, 149%, $764 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "da917d08988b41130910",
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
      "headline": "Tesla’s Flying Roadster Has Wall Street Talking About SpaceX, Not Cars",
      "headlineKo": "Tesla의 플라잉 로드스터는 월스트리트에서 자동차가 아닌 SpaceX에 대해 이야기하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f5169f7693b1947d49aa05f1f9411be43939a651f40ec2105a9e2c659aef0d5",
        "publishedAt": 1792200301,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla의 플라잉 로드스터는 월스트리트에서 자동차가 아닌 SpaceX에 대해 이야기하고 있습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 대기업 기술 기업에 대한 오랜 비판 중 하나는 다음과 같습니다.",
        "그러나 이 놀라운 엔지니어링 업적은 로드스터에 대한 관심을 불러일으키기보다는 CEO Elon Musk의 다른 회사인 Space Exploration Technologies(SPCX -1.74%) 또는 S와의 Tesla 합병에 대한 관심을 불러일으키기 위해 노력한 것 같습니다.",
        "공개 행사에서 일어난 일과 \"Flying Car!\"의 이유는 다음과 같습니다. 어젯밤의 광경에서 나온 가장 큰 뉴스는 아닙니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.74%, $354.72, $7.72 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.74%, $354.72, $7.72 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cbf328bd1c2941090543",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AAPL",
        "GOOGL",
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
      "headline": "Prediction: Alphabet Will Be a Larger Company Than Apple by the End of 2027",
      "headlineKo": "예측: 2027년 말까지 알파벳은 애플보다 더 큰 회사가 될 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dff21cdd71a1021e2d7bbc55f3d41fe78fdffb41bda1c9e790f30bb28163a3e6",
        "publishedAt": 1792193340,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 2027년 말까지 알파벳은 애플보다 더 큰 회사가 될 것입니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류 지금 당장 Apple( AAPL +0.43% ) 및 Alphabet( GOOG -2",
        "애플의 시가총액은 50억 달러에 조금 못 미치는 반면, 알파벳의 시가총액은 42억 달러입니다.",
        "그다지 큰 격차는 아니지만, 내 생각에는 알파벳이 내년에 격차를 좁혀 세계 2위 기업이라는 타이틀을 차지할 수도 있을 것 같습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $5 billion, $4.2 billion, $343.46 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $5 billion, $4.2 billion, $343.46 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "10ced56ee0d970eb6b0b",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "TSM"
      ],
      "relatedEntities": [],
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
      "headline": "Taiwan Semiconductor Posts Record Q3 Results: Time to Buy the Dip?",
      "headlineKo": "대만 반도체, 기록적인 3분기 실적 기록: 하락장 매수 시점?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=05c0647d23b323f4b13b3204299f611d6eb57e324c0e9a18dd0b9382e33ed6c9",
        "publishedAt": 1792190160,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Taiwan Semiconductor Posts Record Q3 Results: Time to Buy the Dip?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 TSM의 사업과 관련된 'Taiwan Semiconductor Posts Record Q3 Results: Time to Buy the Dip?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "TSM",
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
      "id": "1dc45819c5660476e12a",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Micron and Sandisk Have a History of Cyclicality. Is This Time Different?",
      "headlineKo": "Micron과 Sandisk는 순환성의 역사를 가지고 있습니다. 이번에는 다른가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=24f91e14ff99b2eb07c3bb3df1e60d89fce058de923e0f5a2ebc476f217542c7",
        "publishedAt": 1792189500,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron과 Sandisk는 순환성의 역사를 가지고 있습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 메모리 칩 시장은 극도로 순환적인 역사를 가지고 있습니다.",
        "이로 인해 투자자들은 회사가 잘 나갈 때 Sandisk(SNDK -6.85%) 및 Micron(MU -5.63%)과 같은 주식에 대해 더 많은 비용을 지불하기를 꺼리게 될 수 있습니다. 다음 번 불가피한 경기 침체의 위협이 항상 도사리고 있기 때문입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 6.85%, 5.63%, $878.84 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6.85%, 5.63%, $878.84 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3fe8e15ce9fe690b1312",
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
      "headline": "Stock Market Today, Oct. 16: Apple Edges Higher on iPhone Duo Preorder Surge",
      "headlineKo": "오늘, 10월 16일 주식 시장: iPhone Duo 사전 주문 급증으로 Apple 우위",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8760fa2b760ec495891c243172b61d8880f629c24c105b7efeb44c945884b3b7",
        "publishedAt": 1792187374,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "16: iPhone Duo 사전 주문 급증으로 Apple Edge 상승 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool AAPL 가입 - Apple $343.46 +$1.46 (+0.43%) NASDAQ · 2026년 10월 16일 오후 4시 기준 프리미엄",
        "비상장, 비공개 또는 이중 종류의 비거래 주식은 포함되지 않습니다.",
        "$4.99T 일일 범위 $340.46 - $347.82 52주 범위 $243.42 - $348.15 거래량 59.9M 평균 거래량 44.8M 총 마진 48.65% 배당 수익률 0.31% 소비자 가전 및 개인용 컴퓨팅 하드웨어 제공업체인 Apple( AAPL +0.43% ), $343로 마감"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $4.99, $340.46, $347.82 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4.99, $340.46, $347.82 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b219a486b81d7332ef85",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "The Dealmaking 3: DoorDash & Australian Open, AEG & NFL/AWS",
      "headlineKo": "거래 3: DoorDash 및 Australian Open, AEG 및 NFL/AWS",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef1c627ae2d556c5ebd12ad2c650bf8211be83b38ac38cac6ca12745822893ad",
        "publishedAt": 1792187050,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "The Dealmaking 3: DoorDash & Australian Open, AEG & NFL/AWS",
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
      "id": "67df910aef55e90006da",
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
      "headline": "Stock Market Today, Oct. 16: Tesla Slips 2% as Roadster Reveal Fades Before Earnings",
      "headlineKo": "오늘, 10월 16일 주식 시장: 로드스터 공개가 수익 전에 사라지면서 Tesla는 2% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa2ebb663600f9b57f7c3d3c06092e073153cedf123f41c9889e90b28e645512",
        "publishedAt": 1792186983,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "16: 로드스터가 실적을 발표하기 전에 사라지면서 Tesla는 2% 하락 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool에 합류 TSLA - Tesla $354.72 -$7.72 (-2.13%) NASDAQ · 2026년 10월 16일 오후 4시 기준",
        "비상장, 비공개 또는 이중 종류의 비거래 주식은 포함되지 않습니다.",
        "$1.43T 일일 범위 $349.33 - $370.50 52주 범위 $297.38 - $498.83 볼륨 62M 평균 볼륨 37.2M 총 마진 18.85% 글로벌 EV 및 에너지 저장 장치 제조업체인 Tesla(TSLA -2.13%)는 2.13% 하락한 $354.72로 마감했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.43, $349.33, $370.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.43, $349.33, $370.50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dfde06a6074ec877c86b",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "GOOGL",
        "MSFT",
        "ORCL",
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
      "headline": "Not Alphabet. Not Microsoft. This Is the Cloud Stock I'd Buy With $5,000 Right Now.",
      "headlineKo": "알파벳이 아닙니다. 마이크로소프트가 아닙니다. 이것이 제가 지금 5,000달러로 사고 싶은 클라우드 주식입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4973c9150d7ec782eb02c031b24fa855ea2e437ec9c65b2ec3d74d4711f5faa8",
        "publishedAt": 1792186980,
        "collectedAt": 1792451662.879963
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이것이 제가 지금 5,000달러로 사고 싶은 클라우드 주식입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 투자자들이 클라우드 컴퓨팅에 대해 생각할 때 알파벳( GOOGL -2.47% )( GOOG -2.32% ) 및 Microsoft( MSFT -1.93% )가 종종",
        "그러나 Oracle(ORCL -4.64%)도 AI 인프라에 강력하게 추진하고 있으며 빠르게 성장하는 클라우드 비즈니스는 AI 붐을 탈 수 있는 또 다른 방법을 제공합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $5,000, 4.64%, 121% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $5,000, 4.64%, 121% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e2abde64c2bc3a538324",
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
      "headline": "Here’s How Much Meta Stock Is Expected to Move After Earnings",
      "headlineKo": "수익 창출 후 메타 주식이 얼마나 움직일 것으로 예상되는지는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7745abdb42549f5985d560da137dad5152dfbc9682bee097b8df148dcb4e40a",
        "publishedAt": 1792185989,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "다음은 수익 창출 후 메타 주식이 얼마나 움직일 것으로 예상되는지입니다. 주요 사례 다우지수 점프 550포인트 투자자들이 기술 인플레이션에서 벗어나면서 소비자 주식이 상승하고 있습니다. 사회 보장 제도가 다시 가열되면 비용 상승을 촉진할까요?",
        "메타 주식은 연초 이후 약 7% 증가했습니다.",
        "Minh Connors/Bloomberg/Getty Images Close Key Takeaways Meta Platforms는 수요일 오후에 분기별 실적을 발표할 예정입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 6%, $754, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, 6%, $754, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "62db2aec4e9bee8f5c75",
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
      "headline": "Prediction: $1,000 Invested in Taiwan Semi (TSMC) Today Will Be Worth This Much by 2030.",
      "headlineKo": "예측: 현재 Taiwan Semi(TSMC)에 투자된 1,000달러는 2030년까지 이만큼 가치가 있을 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45cf95aa85b6bf142a5da067c064ed5cf2ee71ff367ca6787f927b9e9fe1301d",
        "publishedAt": 1792185900,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $1,000, $4,500, 1.43%, 0.96%, 5.79%, $412.61, $9.64, 2.28%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 TSM의 사업과 관련된 'Prediction: $1,000 Invested in Taiwan Semi (TSMC) Today Will Be Worth This Much by 2030.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "88b8f0bf83cb91b44070",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Bloom Energy vs. Constellation Energy: Which Energy Stock Is an AI-Driven Buy in 2026?",
      "headlineKo": "Bloom Energy 대 Constellation Energy: 2026년에 AI 기반 매수에 적합한 에너지 주식은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7410da83c228f6ebc5999887dc62bfda5c4bc4bceb32043df011c2ef4a25195",
        "publishedAt": 1792184821,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy: 2026년에 AI 기반 매수에 적합한 에너지 주식은 무엇입니까?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 에너지 소모가 많은 데이터 센터에 전력을 공급하기 위한 경쟁이 가속화됨에 따라 수소 연료 전지 또는 원자력 발전에 투자해야 합니까?",
        "오늘 Bloom Energy(BE +2.22%)와 Constellation Energy(CEG -3.01%)를 비교하는 방법은 다음과 같습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.22%, 3.01%, $226.22 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.22%, 3.01%, $226.22 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b1bfee1a051a6d8a6665",
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
      "headline": "GE Vernova Landed 5 Grid Equipment Reservations From Venture Global. Here’s Where the Stock Could Go by 2030",
      "headlineKo": "GE Vernova는 Venture Global로부터 5개의 그리드 장비 예약을 받았습니다. 2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5c968d9205942b8f79286c1fa2623ebabaf9e152a8a34663a2d5adbcbfcc70d5",
        "publishedAt": 1792183848,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova는 Venture Global로부터 5개의 그리드 장비 예약을 받았습니다.",
        "2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다 | TIKR.com 주식 리뷰 GE Vernova는 Venture Global로부터 5개의 그리드 장비 예약을 받았습니다.",
        "2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다. Wiltone Asuncion • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 16일 @Ali Raza via Canva, @Tromp Willem van Urk via Canva GE Vernova 주식에 대한 주요 통계 현재 가격: $926.44 목표"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $926.44, $3,400, $1,224 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $926.44, $3,400, $1,224 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "48e5a1ed78e66e12a5c1",
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
      "headline": "S&P 500 Snapshot: Stocks Slide Nearly 2% For The Week",
      "headlineKo": "S&P 500 스냅샷: 이번 주 주가가 거의 2% 하락했습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=02b9bfb1450ec1840cb3dd3dccb38b9da6e718d31644f4fd99e9369df844694a",
        "publishedAt": 1792183500,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500 스냅샷: 이번 주 동안 주식이 거의 2% 하락 | 알파 어드바이저 관점 차트 찾기 6.88 천 팔로워 요약 S&P 500은 이번 주 동안 거의 2% 하락하여 6월 26일 주 이후 최악입니다.",
        "이 지수는 현재 기록 마감보다 약 2% 낮게 유지되고 있습니다.",
        "S&P 500은 현재 전년 대비 11.89% 상승한 반면, S&P Equal Weight는 전년 대비 11.72% 상승했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, 11.89%, 11.72% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, 11.89%, 11.72% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "590f1bf2a6e3f7220f24",
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
      "headline": "Salesforce Stock Is Up About 30% Since July 31. Here’s Where It Could Go by 2031",
      "headlineKo": "Salesforce 주식은 7월 31일 이후 약 30% 상승했습니다. 2031년까지 상승할 수 있는 곳은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3410a96c165c672dbd1b43a5740ec783e7eeb4397c3307fe9e54c1e5771d4d8f",
        "publishedAt": 1792181385,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce 주식은 7월 31일 이후 약 30% 상승했습니다.",
        "2031년까지 갈 수 있는 곳은 다음과 같습니다 | TIKR.com 주식 리뷰 Salesforce 주식은 7월 31일 이후 약 30% 상승했습니다.",
        "2031년까지 갈 수 있는 곳은 다음과 같습니다. Wiltone Asuncion • 읽기 6분 검토자: David Hanson 마지막 업데이트 2026년 10월 16일 Canva를 통한 Getty Images의 @Blue Planet Studio, Canva를 통한 Getty Images의 @Blue Planet Studio Salesforce용 주요 통계"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $246.74, $445 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, $246.74, $445 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "073d5e74fad70f1d54af",
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
      "headline": "Prediction: Micron Could Turn $10,000 Into a Fortune by 2030",
      "headlineKo": "예측: Micron은 2030년까지 10,000달러를 행운으로 바꿀 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=460bf7a61972b9a9af68fbc5422e81da493095121488cc60cd874414ac4e71bf",
        "publishedAt": 1792181100,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: Micron은 2030년까지 10,000달러를 행운으로 바꿀 수 있습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron( MU -5.63% )은 2026년에 소유하기에 좋은 주식이었지만 저는",
        "실제로 오늘 10,000달러 투자를 그때쯤에는 42,000달러 포지션으로 전환할 수 있으며 이는 내 추정 범위에서 보수적인 측면에 속합니다.",
        "비현실적으로 보일 수도 있지만, 회사가 앞으로 나아갈 길은 분명해 보입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $42,000, 106% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $42,000, 106% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "71c9cd6094c55bcf0e9a",
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
      "headline": "Applied Materials Stock Fell 21% in 8 Straight Sessions. Here’s What Its 2030 Targets Mean for Shares",
      "headlineKo": "어플라이드 머티리얼즈 주가는 8회 연속 21% 하락했다. 2030년 목표가 주식에 의미하는 바는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b0bb8e7ccd284a37ce751e44568a9c05bab983653df62b1ab547d1509177bd4",
        "publishedAt": 1792179562,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티리얼즈 주가는 8회 연속 21% 하락했다.",
        "2030년 목표가 주식에 의미하는 바는 다음과 같습니다 | TIKR.com 주식 리뷰 Applied Materials 주가는 8회 연속 21% 하락했습니다.",
        "2030년 목표가 주식에 미치는 영향은 다음과 같습니다. Wiltone Asuncion • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 16일 PhonlamaiPhoto의 이미지 @Kittipong Jirasukhanont Canva를 통한 Pexels의 @Jakub Pabis Key Stats"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 21%, $430.01, $800 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 21%, $430.01, $800 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "10d809cbadada9b447f5",
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
      "headline": "iPhone Duo already backordered until 2027 as pre-order sales soar",
      "headlineKo": "iPhone Duo는 사전 예약 판매 급증으로 이미 2027년까지 예약 주문됨",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=16603b60e699bd57c649c912acc2158f422bfb4534474401ad98179157cdc37b",
        "publishedAt": 1792179277,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: $1,999.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'iPhone Duo already backordered until 2027 as pre-order sales soar' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "223b2d13bb7ad78b67ea",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AAPL",
        "AMZN",
        "NVDA",
        "SPY",
        "TSLA"
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
      "headline": "Apple is Now the Top-Performing Magnificent 7 Stock in 2026. Here’s why it’s Beating NVIDIA, Tesla, and Amazon",
      "headlineKo": "Apple은 현재 2026년 최고 성과를 자랑하는 Magnificent 7 주식입니다. Apple이 NVIDIA, Tesla 및 Amazon을 능가하는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f831231eaab13eb8aeb433db1cbbdbf1fe067161173a318013a30dfc63d8ee53",
        "publishedAt": 1792179266,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple은 이제 2026년 최고 실적의 Magnificent 7 Stock이 되었습니다.",
        "NVIDIA, Tesla, Amazon을 능가하는 이유는 다음과 같습니다. 연중무휴 Wall St.",
        "콘텐츠로 건너뛰기 닫기 ❚❚ S&P 500 7,665.00 − 1.07% 다우존스 51,999.60 − 0.44% 나스닥 100 29,213.40 − 2.32% 러셀 2000 2,724.81 − 1.63% S&P 500 7,665.00 − 1.07% 다우존스 51,999.60 − 0.44% 나스닥 100 29,213.40 − 2.32% 러셀 2000 2,724.81 − 1."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $500, $500,000, $2.9 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $500, $500,000, $2.9 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "35bd3cab73ca1f672103",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN",
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
      "headline": "If You Invested $1000 In Eaton Corp Stock 10 Years Ago, You Would Have This Much Today",
      "headlineKo": "10년 전에 Eaton Corp 주식에 1,000달러를 투자했다면 오늘날 이 정도의 수익을 얻게 될 것입니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=96922d4281f5546d262cba4399d20ee90e69c27dd2e5375da1c3d1c242ef92b6",
        "publishedAt": 1792178133,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10년 전 Eaton Corp 주식에 $1000를 투자했다면 현재 이 정도의 수익을 얻게 될 것입니다 - Eaton Corp (NYSE - Benzinga SPY — QQQ 707.87 −0.27% BTC/USD — DIA — GLD — TLT 80.06 +0.01% US 로그인 내 계정 등록 Benzinga Premium Premium Serv",
        "현재 Eaton Corp의 시가총액은 1,615억 8천만 달러입니다.",
        "ETN으로 1,000달러 구매: 투자자가 10년 전에 1,000달러의 ETN 주식을 구매했다면 이 글을 쓰는 시점의 ETN 가격 389.50달러를 기준으로 현재 그 가치는 6,144.00달러가 될 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1000, 0.27%, 0.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ETN에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $1000, 0.27%, 0.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "69907a5ca0a6de580006",
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
      "headline": "Salesforce (CRM) Faces A Fresh Valuation Test After AI Integration Deals",
      "headlineKo": "Salesforce(CRM), AI 통합 거래 후 새로운 평가 테스트에 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1d86067bc76712814afae725d1701573bc2b320a9632765ec27e9e1ea958fe62",
        "publishedAt": 1792178088,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce (CRM) Faces A Fresh Valuation Test After AI Integration Deals",
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
      "id": "1f794705fa34665f6669",
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
      "headline": "Germany Confirms Its Nvidia AI Deal: Will Any of Huang’s $2 Billion Europe Pledge Land in Berlin?",
      "headlineKo": "독일, Nvidia AI 거래 확인: Huang의 20억 달러 규모의 유럽 서약 중 베를린에 착륙할 사람이 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2abcdd96d7c24d3c4086c23e65d41c85d613d70bec5dda0f0913d86dfd46119c",
        "publishedAt": 1792177431,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $2 Billion, $2 billion, $8 billion, $127.01 billion, $27.02 billion, 1.6%, $10 billion, 46%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'Germany Confirms Its Nvidia AI Deal: Will Any of Huang’s $2 Billion Europe Pledge Land in Berlin?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e05cd8a57641d3e40ecb",
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
      "headline": "Jensen Huang's Nvidia Lost $200 Billion in Value After OpenAI's Revenue Run Rate Came Up $18 Billion Below Expectations. Is This AI-Jitters Sell-Off a Buying Opportunity?",
      "headlineKo": "Jensen Huang의 Nvidia는 OpenAI의 수익 실행 속도가 예상보다 180억 달러 낮은 후 2,000억 달러의 가치를 잃었습니다. 이 AI-Jitters 매도가 구매 기회입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=15361c076e474dc082c06dcf114d46246b0b89d7fce26d21789162d53a9fac79",
        "publishedAt": 1792176660,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang의 Nvidia는 OpenAI의 수익 실행 속도가 예상보다 180억 달러 낮은 후 2,000억 달러의 가치를 잃었습니다. 이 AI-Jitters 매도가 구매 기회입니까?"
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
      "id": "610f0ccebe9031c04dc7",
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
      "headline": "Nvidia (NVDA): Can Paid Software Make Its Earnings Less Dependent on Hardware Sales?",
      "headlineKo": "Nvidia(NVDA): 유료 소프트웨어로 인해 수익이 하드웨어 판매에 덜 의존하게 될 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=453ee9e3e41034f855232dfe264bad0ae944441a21441f1a1254cd2471ec3592",
        "publishedAt": 1792175364,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia(NVDA): 유료 소프트웨어로 인해 수익이 하드웨어 판매에 덜 의존하게 될 수 있습니까?"
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
      "id": "8cce5293f4ecd5ab6175",
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
      "headline": "Netflix, Tesla Headline Busy Earnings Calendar; Spending Plans Key To Meta's Report",
      "headlineKo": "Netflix, Tesla 헤드라인 바쁜 수익 달력; Meta 보고서의 핵심 지출 계획",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2be5562f384d7ba43520a2aae43b1760ae444d2b601bd191268fc3e6c405c2e7",
        "publishedAt": 1792175026,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Netflix, Tesla Headline Busy Earnings Calendar; Spending Plans Key To Meta's Report",
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
      "id": "0839ceb97b40635b1fb5",
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
      "headline": "From 2009 to 2026 and Beyond, Apple Has Remained 1 of the Most Valuable Companies in the World: Here's the Most Important Takeaway for Investors",
      "headlineKo": "2009년부터 2026년까지 Apple은 세계에서 가장 가치 있는 회사 중 하나로 남아 있습니다. 투자자를 위한 가장 중요한 시사점은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d557ff6507f195ad47983bbf2a3abc6d8c98c53f6ba49967408044cb766e201a",
        "publishedAt": 1792174800,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2009년부터 2026년까지 Apple은 세계에서 가장 가치 있는 회사 중 하나로 남아 있습니다. 투자자를 위한 가장 중요한 시사점은 다음과 같습니다."
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
      "id": "6647b3a8c6d51e592c50",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Seagate Technology Holdings (STX) Eyes TDK HDD Head Deal As AI Storage Demand Builds",
      "headlineKo": "Seagate Technology Holdings(STX), AI 스토리지 수요 증가에 따라 TDK HDD 헤드 거래 주목",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c130aaec47844670ea53514168c5879092389b5192598b77c5a8dfa0e51e2f33",
        "publishedAt": 1792174359,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate Technology Holdings (STX) Eyes TDK HDD Head Deal As AI Storage Demand Builds",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "60884df53174111b6216",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "ARM",
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
      "headline": "Arm and AMD Fall 5% as Qualcomm Verdict Adds to Chip Selloff; Taiwan Semiconductor Slips",
      "headlineKo": "Qualcomm 평결로 인해 칩 매도세가 증가함에 따라 Arm과 AMD는 5% 하락합니다. 대만 반도체 전표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=042b71cb1b9afd96d54ae9e11c90b62b50d4d66c88dd0217f010354cdc7fafc1",
        "publishedAt": 1792174237,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm 판결이 칩 매도에 추가됨에 따라 ARM과 AMD는 5% 하락; 대만 반도체 미끄러짐 - 24/7 Wall St.",
        "콘텐츠로 건너뛰기 닫기 ❚❚ S&P 500 7,665.00 − 1.07% 다우존스 51,999.60 − 0.44% 나스닥 100 29,213.40 − 2.32% 러셀 2000 2,724.81 − 1.63% S&P 500 7,665.00 − 1.07% 다우존스 51,999.60 − 0.44% 나스닥 100 29,213.40 − 2.32% 러셀 2000 2,724.81 − 1.",
        "By 데이비드 모아델 Published October 16, 2026, 2:10 pm ET · 3 min read Market Movers desk."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, $232.22., $534.29, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, $232.22., $534.29, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "79c74beed5a954229f81",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "MRVL",
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
      "headline": "Broadcom Falls 4% as CEO Hock Tan’s Capital Warning Hangs Over AI Chips; Marvell Drops 4%",
      "headlineKo": "Broadcom은 CEO Hock Tan의 AI 칩에 대한 자본 경고로 인해 4% 하락했습니다. 마벨 4% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f226da1fb9242f2f25b332efff142284396aa7b074fb80a3a4ef5c0f932de0c8",
        "publishedAt": 1792173728,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 4%, $332.10., $231.12., 2.7%, 2.3%, $12.2 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AVGO의 사업과 관련된 'Broadcom Falls 4% as CEO Hock Tan’s Capital Warning Hangs Over AI Chips; Marvell Drops 4%' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f5f76f31842a01bf0fa5",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Amazon Is 11% Below Its High Heading Into Earnings on Oct. 29. Here's the 1 Number That Will Decide What Happens Next.",
      "headlineKo": "Amazon은 10월 29일 수익에 대한 최고치보다 11% 낮습니다. 다음에 무슨 일이 일어날지 결정하는 첫 번째 숫자는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0496b424b4fd84863059aaa1d83f771a4bbac12a08c379f71b528b6d7c4e2059",
        "publishedAt": 1792171800,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존, 10월 순익 기준 최고치보다 11% 하락",
        "다음에 무슨 일이 일어날지 결정하는 첫 번째 숫자는 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Amazon( AMZN -1.87% )의 주가는 8월 8일 주당 284.02달러로 사상 최고치를 기록했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, $254., $250.00 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, $254., $250.00 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "61c302a6459d323fa609",
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
      "headline": "Meta: What You Need To Know Before Earnings",
      "headlineKo": "메타: 수익을 내기 전에 알아야 할 사항",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a4040a1400e6e16fd5855c297de9a90465442ee86871d4ebfc3f80d55ad30862",
        "publishedAt": 1792170959,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta: What You Need To Know Before Earnings",
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
      "id": "2989df1ec59c2eced832",
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
      "headline": "Sandisk (SNDK) Q4 Revenue Jump Shows Memory Pricing Strength Despite Smartphone Slump",
      "headlineKo": "Sandisk(SNDK) 4분기 매출 급증으로 스마트폰 부진에도 불구하고 메모리 가격 강세 보여",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c0f144fb4c2de4c61c584aa5ef9730f006dd32b6664c4e4b6ada0cc2e683d61c",
        "publishedAt": 1792170798,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk (SNDK) Q4 Revenue Jump Shows Memory Pricing Strength Despite Smartphone Slump",
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
      "id": "aa647f4b98e2b45bbd77",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet’s Cloud Surge and AI Dominance Overshadow Capex Fears and Keep Me Buying",
      "headlineKo": "Alphabet의 클라우드 급증과 AI 지배력이 Capex에 대한 두려움을 무색하게 하고 계속 구매하게 만듭니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=79cadcad1debcd1a0fe7cc7742f24db86c41242792616e0b2e9e41dbea4fea74",
        "publishedAt": 1792169134,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet의 클라우드 급증과 AI 지배력이 Capex에 대한 두려움을 무색하게 하고 계속 구매하게 만듭니다"
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
      "id": "4dca16ad24066fcda109",
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
      "headline": "Sandisk Just Dipped Below $1400 Which Means a Lot to Certain Investors",
      "headlineKo": "Sandisk가 1400달러 아래로 떨어졌는데 이는 특정 투자자들에게 큰 의미가 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ff5a815c78b2af458f0c407ccaad22a32c1e3c3165b67d7de83a63e19e08029",
        "publishedAt": 1792169133,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $1400, $1,394.83,, $1,400, 8 times, $20.25, 175.3%, $39.25,, $33.28.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 SNDK의 사업과 관련된 'Sandisk Just Dipped Below $1400 Which Means a Lot to Certain Investors' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "6f5da0dc59cedc7972d2",
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
      "headline": "Microsoft Signs 1,100 MW Power Deal With NiSource Until 2048 as AI Spending Outruns the Grid",
      "headlineKo": "AI 지출이 그리드를 초과함에 따라 Microsoft는 2048년까지 NiSource와 1,100MW 전력 계약을 체결했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=997a59f6eed07f3030dcbc74ece74ef55c66e3e0cd797324c480167b927178a9",
        "publishedAt": 1792168579,
        "collectedAt": 1792451662.879963
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 지출이 그리드를 초과함에 따라 Microsoft는 2048년까지 NiSource와 1,100MW 전력 계약을 체결 | TIKR.com 주식 리뷰 Microsoft, AI 지출이 그리드 Gian Estrada를 능가함에 따라 2048년까지 NiSource와 1,100MW 전력 계약 체결 • 3분 읽기",
        "금요일에 NiSource(NI)는 2028년부터 시작하여 NiSource의 발전 풀에 약 1,100MW를 추가하는 20년 에너지 계약을 Microsoft와 발표했습니다.",
        "Microsoft는 사이트 서비스에 필요한 모든 생성 및 전송 비용을 지불합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $23.9 billion, $116 billion, 80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $23.9 billion, $116 billion, 80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "eec71e0128909214f5e8",
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
      "headline": "Strong 2027 Guidance and Generative AI Drive Salesforce’s (CRM) Revenue Reacceleration",
      "headlineKo": "강력한 2027년 지침과 생성적 AI로 Salesforce(CRM) 수익 재가속화",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa18549b7af10c43a9b21f440d881f336db1f5e97c600ef8c2a0fc56cbe4da97",
        "publishedAt": 1792167549,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "강력한 2027년 지침과 생성적 AI로 Salesforce(CRM) 수익 재가속화"
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
      "id": "e26d54c8c2a99db62c3e",
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
      "headline": "Tesla's flying Roadster is more fuel for SpaceX merger rumors than a real car",
      "headlineKo": "Tesla의 비행 로드스터는 실제 자동차보다 SpaceX 합병 소문에 더 많은 연료를 공급합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=891ef5bd5f53c335b918ee5b4f16171632f81880ae55ac4b224268026b17bbb3",
        "publishedAt": 1792165808,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla's flying Roadster is more fuel for SpaceX merger rumors than a real car",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 TSLA의 사업과 관련된 'Tesla's flying Roadster is more fuel for SpaceX merger rumors than a real car' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "TSLA",
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
      "id": "c796953b042ffe170d65",
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
      "headline": "Taiwan Semiconductor Manufacturing: 3 Key Takeaways for Long-Term Investors",
      "headlineKo": "대만 반도체 제조업: 장기 투자자를 위한 3가지 주요 시사점",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee2820fe5b89a6dc759975f7054bf2d6112ac6057381588b2787f5b33d6a0e04",
        "publishedAt": 1792165083,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만 반도체 제조업: 장기 투자자를 위한 3가지 주요 시사점"
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
      "id": "d683662c1ad0f7cc0747",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta expected to beat revenue forecasts as AI boosts advertising, says Bank of America",
      "headlineKo": "Bank of America는 AI가 광고를 활성화함에 따라 Meta가 수익 예측을 상회할 것으로 예상한다고 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74eaa20fcb6a73fde60bb51a31b4f3e7492ddeb1f530fc076db878540a8ca95e",
        "publishedAt": 1792165020,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bank of America는 AI가 광고를 활성화함에 따라 Meta가 수익 예측을 상회할 것으로 예상한다고 밝혔습니다."
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
      "id": "6426c2ce3a2c020fbb31",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Tesla’s Flying Roadster Sends Hyperliquid Trading Volume Soaring 1,500%",
      "headlineKo": "Tesla의 Flying Roadster, Hyperliquid 거래량 1,500% 급증",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e6f0aeb164729c138c923e9ae638151811ecbd0a75360bfaa75c1fcf7f85fccf",
        "publishedAt": 1792164720,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla의 Flying Roadster, Hyperliquid 거래량 1,500% 급증 Elon Musk가 Roadster의 비행 버전을 공개한 후 Tesla 연결(NASDAQ: $TSLA) 암호화폐 파생상품 거래가 밤새 급등했습니다.",
        "Hyperliquid(CRYPTO: $HYPE ) TSLA 무기한 선물 계약은 지난 하루 동안 약 3.7% 상승한 약 $374를 기록했습니다.",
        "시간당 거래량은 280만 달러에서 4,700만 달러로 약 1,580% 증가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1,500%, 3.7%, $374 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1,500%, 3.7%, $374 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "333da0236bad2f50bfca",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "LRCX",
      "relatedTickers": [
        "LRCX",
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
      "headline": "Lam Research Could Swing $28.6 Billion After Earnings",
      "headlineKo": "Lam Research, 수익 후 286억 달러 변동 가능",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=992e8c04c4ad649e3429a28e5cb40c80192b7a6af54ef7bddcb5c43082bbe30b",
        "publishedAt": 1792164609,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research는 수익 후 286억 달러 변동 가능 - Netflix(NASDAQ:NFLX), Spotify Technology(NYSE:S - Benzinga SPY 763.23 −1.11% QQQ 710.71 −2.38% BTC/USD 81,482.81 −0.79% DIA 518.51 −0.49% GLD 382.05 −0.17% TLT 80.07 +0.12% US Sign i",
        "소매 투자자의 경우 묵시적 움직임은 위험을 온전하게 점검하는 빠른 방법이 될 수 있습니다. 특히 지침과 마진이 헤드라인 내용만큼 중요할 수 있는 경우에는 더욱 그렇습니다.",
        "Benzinga가 선택한 목록의 주요 이름은 Lam Research이지만 카운트다운이 가장 차분한 설정에서 가장 불안정한 설정까지 진행되므로 마지막 섹션에 대해 가장 큰 암시적 움직임이 저장됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $28.6 Billion, 1.11%, 2.38% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LRCX에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $28.6 Billion, 1.11%, 2.38% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d938adcfa96ffc48bab2",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "ASML",
      "relatedTickers": [
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "With Demand Set to Outstrip Supply Until at Least 2028, ASML Stock Is a Buy",
      "headlineKo": "적어도 2028년까지 수요가 공급을 초과할 것으로 예상되는 ASML 주식은 매수입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=85dd64b83d7537a9f46cee0ebd4a47975877d0bd11d24cbad890023a4a326210",
        "publishedAt": 1792164180,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "최소 2028년까지 수요가 공급을 초과할 것으로 예상됨에 따라 ASML 주식은 매수세 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool Semiconductor 장비 제조업체 ASML Holding 가입( ASML -0.96",
        "반도체 산업에서의 위치는 주식을 매수하게 만듭니다.",
        "네덜란드 회사는 극자외선(EUV) 리소그래피 기술을 독점하고 있으며, 장비가 없으면 파운드리에서는 스마트폰, 컴퓨터, 인공지능(AI)에 사용되는 고급 칩을 제조할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,641.52, $15.92, 0.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,641.52, $15.92, 0.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e080ba2ab164760b13b3",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "NVDA",
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
      "headline": "Tesla Gets Competition From Nvidia In Self Driving Cars",
      "headlineKo": "Tesla, 자율주행차 부문에서 Nvidia와 경쟁",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3fe3fa0ff7478756f442147c3c87a14116f33db1eaae3dea19a96fca55c333e8",
        "publishedAt": 1792163976,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 자율주행차 분야에서 Nvidia와 경쟁을 벌였습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,693.10 −0.71% Dow Jones 52,077.60 −0.29% Nasdaq 100 29,436.60 −1.57% Russell 2000 2,731.11 −1.40% S&P 500 7,693.10 −0.71% 다우존스 52,077.60 −0.29% 나스닥 100 29,436.60 −1.57% 러셀 2000 2,731.11 −1.",
        "이제 문제는 Tesla의 브랜드가 전체를 지배하는 경쟁자를 제압할 수 있는지 여부입니다. By Douglas A."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 34%, $4.45 trillion, 36% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 34%, $4.45 trillion, 36% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0a81cb1e7d995b1ca063",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SNDK",
      "relatedTickers": [
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
      "headline": "Why SandiskStock Dropped (Again) on Friday",
      "headlineKo": "금요일에 SandiskStock이 (다시) 하락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49ab8e1d9ea094f190985beed3a06b7ca737246453983d566cc0fa8a1e3d084b",
        "publishedAt": 1792163968,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "금요일에 SandiskStock이 (다시) 하락한 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 음, 금요일이군요. Sandisk 투자자들에게 좋은 소식과 나쁜 소식이 있습니다( SNDK -6.85",
        "나쁜 소식 먼저: 컴퓨터 메모리 칩 제조업체 중 가장 큰 이름 중 하나인 Sandisk 주가는 이번 주까지 매일 하락했고, 금요일에도 다시 하락하여 오전 10시 45분까지 3.2% 더 하락했습니다.",
        "하지만 이제 좋은 소식이 있습니다. 기본적으로 새로운 나쁜 소식은 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3.2%, 15%, 3.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.2%, 15%, 3.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "df822fd0fb3d48007ce8",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia (NVDA) Expands Nemotron As $4 Billion Texas Supply Push Meets Customer Debt Stress",
      "headlineKo": "엔비디아(NVDA), 40억 달러 규모의 텍사스 공급 추진으로 고객 부채 스트레스를 충족하면서 Nemotron 확장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d0670be4a159101d10862f3b1255ff3b9a4845de99fa0da907826c3505760d17",
        "publishedAt": 1792163553,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia (NVDA) Expands Nemotron As $4 Billion Texas Supply Push Meets Customer Debt Stress",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "83f9a14767c2a208936e",
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
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "NVIDIA and Taiwan’s New Chip Law: The Real Risk Sits With Super Micro",
      "headlineKo": "NVIDIA와 대만의 새로운 칩법: 진짜 위험은 Super Micro에 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=abe7dd6421288859015216d96ba09b772bc3df32efe4138dff9dfd0ac36bd2b6",
        "publishedAt": 1792163510,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVIDIA와 대만의 새로운 칩법: 진짜 위험은 Super Micro에 있습니다"
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "56d190ac6a607cee0ace",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Will Intel (INTC) Beat Estimates Again in Its Next Earnings Report?",
      "headlineKo": "인텔(INTC)이 다음 수익 보고서에서 다시 추정치를 상회할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56654c063736dce0f354bbfd28dec9bf4380ad3a631220f5de70792bce6d6123",
        "publishedAt": 1792163404,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Will Intel (INTC) Beat Estimates Again in Its Next Earnings Report?",
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
      "id": "a248d5710b82f1aab72b",
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
      "headline": "If You Invest $1,000 in AMD Each Month Starting Now, This is What You’d Have in 5 Years",
      "headlineKo": "지금부터 매달 AMD에 1,000달러를 투자하면 5년 후에 얻게 될 금액입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9713b280b6bc06cb495a52e4be4508789a99d68eab85badbb199b6a18ceec6c8",
        "publishedAt": 1792162851,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금부터 매달 AMD에 1,000달러를 투자하면 5년 안에 얻게 될 금액입니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,665.00 −1.07% Dow Jones 51,999.60 −0.44% Nasdaq 100 29,213.40 −2.32% Russell 2000 2,724.81 −1.63% S&P 500 7,665.00 −1.07% 다우존스 51,999.60 −0.44% 나스닥 100 29,213.40 −2.32% 러셀 2000 2,724.81 −1.",
        "여기에 규율이 적용됩니다… Vandita Jadeja 작성 2026년 10월 16일 오전 11시(ET) 게시 · 4분 읽기 가격 목표 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, $60,000, $581.71. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,000, $60,000, $581.71. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "406e1cb3f117312d4af0",
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
      "headline": "Apple’s $1,999 Foldable Is Backordered to 2027. Here’s What That Does and Doesn’t Mean",
      "headlineKo": "Apple의 1,999달러 폴더블 제품이 2027년으로 이월 주문되었습니다. 그것이 의미하는 것과 의미하지 않는 것은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f7007c67c01e73b4079850c2441e3d87779c5be06e5f29d7be5599cbd898b80",
        "publishedAt": 1792161236,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: $1,999, $12 billion, 6%, $209.6 billion, 4.5%, $478 billion, $528 billion, $50 billion.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple’s $1,999 Foldable Is Backordered to 2027. Here’s What That Does and Doesn’t Mean' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "27e3515c977bed0e0a2d",
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
      "headline": "Meta, Tesla, SpaceX Take Center Stage As Earnings Season Kicks Into High Gear. Everything You Need To Know.",
      "headlineKo": "Meta, Tesla, SpaceX가 수익 시즌이 시작되면서 중심 무대를 차지합니다. 당신이 알아야 할 모든 것.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bf9fb1c0ef4952970ca4ae5b0c80f0c329f2c12d5608dbaae940002f0252e004",
        "publishedAt": 1792161077,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta, Tesla, SpaceX Take Center Stage As Earnings Season Kicks Into High Gear. Everything You Need To Know.",
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
      "id": "b48a08d929fae57553ba",
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
      "headline": "What to Expect From Arista Networks’ Next Quarterly Earnings Report",
      "headlineKo": "Arista Networks의 다음 분기별 수익 보고서에서 기대할 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ea27e9007afa36c4bd7f98e52bee3431af00579245968fa245fb7a770d118c3",
        "publishedAt": 1792160991,
        "collectedAt": 1792451662.879963
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What to Expect From Arista Networks’ Next Quarterly Earnings Report",
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
      "id": "7359dee3253658dec03a",
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
      "headline": "Amazon Unveils Two Bee-Branded Hardware Devices Powered by AI",
      "headlineKo": "Amazon, AI로 구동되는 두 개의 Bee 브랜드 하드웨어 장치 공개",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=251a203fa168b1dc0d605d7d1f858984d327014fa543286844a386564c365727",
        "publishedAt": 1792159222,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon, AI로 구동되는 두 개의 Bee 브랜드 하드웨어 장치 공개 | TIKR.com General Investing Amazon, AI Aditya Raghunath로 구동되는 두 개의 꿀벌 브랜드 하드웨어 장치 공개 • 3분 읽기 검토자: David Hanson 최종 업데이트 2026년 10월 16일 @A",
        "15: $255 52주 최고가: $287 $AMZN 주가 목표: $331 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "Amazon ( AMZN ) 은 작년 에 구입한 Bee 브랜드 로 목요일 에 두 개의 새로운 AI 장치 를 공개 했습니다 ."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $255, $287 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, $255, $287 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a3c81a57ad367cea0533",
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
      "headline": "Could Palantir Stock Create Life-Changing Wealth for Patient Investors?",
      "headlineKo": "Palantir 주식이 인내심 있는 투자자들의 삶을 변화시키는 부를 창출할 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6e825503a088e048cca64f9a6065d98c99f2341a34bf7887f588459ecb6ddb37",
        "publishedAt": 1792159202,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 주식이 인내심 있는 투자자들의 삶을 변화시키는 부를 창출할 수 있을까요?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,672.80 −0.97% Dow Jones 51,963.60 −0.51% Nasdaq 100 29,346.40 −1.87% Russell 2000 2,725.36 −1.61% S&P 500 7,672.80 −0.97% 다우존스 51,963.60 −0.51% 나스닥 100 29,346.40 −1.87% 러셀 2000 2,725.36 −1.",
        "Palantir 주식은 이미 환자를 승자로 만들었지만 향후 5년은 지난 5년과 전혀 같지 않습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $221.30, 6.05%, $208.67. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $221.30, 6.05%, $208.67. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5f63a74869ed492de42f",
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
      "headline": "Meta Platforms (META): Distribution Reach and Muse AI Catalyst Bridge the Capex Return Gap",
      "headlineKo": "메타 플랫폼(META): 유통 도달 범위 및 Muse AI Catalyst가 Capex 수익 격차 해소",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee13036e4f2c7725155aba5f8f6c545498790f3038c8a4dd67dab8e43fb32810",
        "publishedAt": 1792157747,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타 플랫폼(META): 유통 도달 범위 및 Muse AI Catalyst가 Capex 수익 격차 해소"
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
      "id": "893d21be2f345c260d14",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "WDC"
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
      "headline": "Wells Fargo Maintains Overweight on Western Digital, Lowers Price Target to $450",
      "headlineKo": "Wells Fargo, Western Digital에 대한 비중확대 유지, 목표 가격을 450달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=1644ac860fe6efe79d95e5b8d286980f8fff97ed2285aeaad32699e0419699a4",
        "publishedAt": 1792157743,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wells Fargo, Western Digital에 대한 비중확대 유지, 목표 가격을 450달러로 낮춤"
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "8b11540721a668021c21",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Wells Fargo Maintains Overweight on Seagate Technology Hldgs, Lowers Price Target to $865",
      "headlineKo": "Wells Fargo, Seagate Technology Hldgs에 대한 비중확대 유지, 목표 가격을 865달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d9e4aa454023d5e779df4f8c50b0af88c60a5f1c6c29f48e861fd9a5be2646e2",
        "publishedAt": 1792157643,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wells Fargo, Seagate Technology Hldgs에 대한 비중확대 유지, 목표 가격을 865달러로 낮춤"
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
          "ticker": "STX",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "de59f5154682dc70172b",
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
      "headline": "SK Hynix, SanDisk, and Micron Drop 3% Despite Goldman Sachs Calling China Chip Fears Overdone",
      "headlineKo": "SK 하이닉스, 샌디스크, 마이크론은 골드만삭스가 중국 칩에 대한 우려가 지나쳤다고 주장했음에도 불구하고 3% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee6f4ba6d7486ac9ff34c16b958ccbdaafce5bdf6b24da0749e28e39ecb216ca",
        "publishedAt": 1792157452,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SK 하이닉스, 샌디스크, 마이크론은 Goldman Sachs가 중국 칩에 대한 우려가 과도하다고 주장했음에도 불구하고 3% 하락했습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,672.80 −0.97% Dow Jones 51,963.60 −0.51% Nasdaq 100 29,346.40 −1.87% Russell 2000 2,725.36 −1.61% S&P 500 7,672.80 −0.97% 다우존스 51,963.60 −0.51% 나스닥 100 29,346.40 −1.87% 러셀 2000 2,725.36 −1.",
        "Goldman이 이러한 주식에 더 많은 영향을 미칠지 여부를 결정할 수 없다고 시장이 보는 것은… David Moadel 작성 2026년 10월 16일 오전 9시 30분(ET) · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, $141.97, $1,357.02. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, $141.97, $1,357.02. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4c186fbf747af94421dd",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Final Trades: ServiceNow, JPMorgan Chase, Eaton Corporation and SentinelOne",
      "headlineKo": "최종 거래: ServiceNow, JPMorgan Chase, Eaton Corporation 및 SentinelOne",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=9080117fa6186a3834a82d6a52804a56067549b7b1a49e7894d01bb637484597",
        "publishedAt": 1792156623,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "최종 거래: ServiceNow, JPMorgan Chase, Eaton Corporation 및 SentinelOne 시장 탐색 건너뛰기 비즈니스 투자 기술 정치 및 정책 비디오 관심 목록 Investing Club PRO 라이브스트림 메뉴 지금 보기 이 비디오에서 JPM S NOW ETN 공유 Sha",
        "00:40 2026년 10월 16일 금요일 오후 1:17 EDT 지금 시청하기 지금 시청하기 비디오 14:48 글로벌 의료 혁신을 위한 아부다비의 노력 지금 보기 지금 보기 비디오 01:06 Netflix의 대규모 경영진 개편: 알아야 할 사항은 다음과 같습니다 지금 보기 지금 보기 VIDE"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $6.3 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ETN에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $6.3 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8cf49cbee45870a81812",
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
      "headline": "Western Digital Pre-Q1 Earnings: Buy the Stock Now or Wait for Results?",
      "headlineKo": "Western Digital 1분기 이전 수익: 지금 주식을 구매할 것인가 아니면 결과를 기다릴 것인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e818fd16e9841d2b7fad1ec10f94ae8248408dbe0dba977a5d2ffc9c6af0582",
        "publishedAt": 1792155840,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital Pre-Q1 Earnings: Buy the Stock Now or Wait for Results?",
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
      "id": "198a71827a9212a9842f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMZN",
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
      "headline": "Wall Street Agrees on Amazon and Can’t Agree on Tesla. The Targets Show Why",
      "headlineKo": "월스트리트는 Amazon에 동의하고 Tesla에는 동의할 수 없습니다. 목표는 이유를 보여줍니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb960e8c6c8b91492bb10227fe4b1968c39fa9b979da23fc86c5705d9721b807",
        "publishedAt": 1792154736,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트는 Amazon에 동의하고 Tesla에는 동의할 수 없습니다.",
        "목표는 이유를 보여줍니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,672.80 −0.97% Dow Jones 51,963.60 −0.51% Nasdaq 100 29,346.40 −1.87% Russell 2000 2,725.36 −1.61% S&P 500 7,672.80 −0.97% 다우존스 51,963.60 −0.51% 나스닥 100 29,346.40 −1.87% 러셀 2000 2,725.36 −1."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $332.67., $405.69., $258.58 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $332.67., $405.69., $258.58 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "97d89001605045de37b8",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel Cratered Over The Last 90 Days: This Prominent Analyst Says It’s Going to Double",
      "headlineKo": "지난 90일 동안 인텔의 붕괴: 이 저명한 분석가는 인텔이 두 배로 늘어날 것이라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=76c477547848ffa679d6696d5d6b2f4dc2ce29713a6d7b9b6b763264357ea9e3",
        "publishedAt": 1792154702,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지난 90일 동안 인텔의 붕괴: 이 저명한 분석가는 두 배로 성장할 것이라고 말합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,672.80 −0.97% Dow Jones 51,963.60 −0.51% Nasdaq 100 29,346.40 −1.87% Russell 2000 2,725.36 −1.61% S&P 500 7,672.80 −0.97% 다우존스 51,963.60 −0.51% 나스닥 100 29,346.40 −1.87% 러셀 2000 2,725.36 −1.",
        "황소 사건은 입증되지 않은 단일 베팅에 달려 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $95.37., $118.05,, 23.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $95.37., $118.05,, 23.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8b65fe61683343a16ff5",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Ondas and Palantir Launch Regna AI to Expand Sovereign AI Capabilities",
      "headlineKo": "Ondas와 Palantir, Sovereign AI 기능 확장을 위해 Regna AI 출시",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c5ed76677a0ea5d870dc8c0b5c16cbc7547f04d178a2efad809042e0136d2e5",
        "publishedAt": 1792154160,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Ondas and Palantir Launch Regna AI to Expand Sovereign AI Capabilities",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "839ff8c76e8e6a07b18d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SNDK",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Nasdaq 100 Slides As Micron, SanDisk, CoreWeave Sink: Stock Market Today",
      "headlineKo": "Nasdaq 100 슬라이드, Micron, SanDisk, CoreWeave 싱크: 오늘 주식 시장",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c5926a8a854f428679082b9816725c53cdafe5c734def83695422491bdeefea2",
        "publishedAt": 1792153986,
        "collectedAt": 1792451662.879963
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nasdaq 100 Slides As Micron, SanDisk, CoreWeave Sink % - Strategy (NASDAQ: MSTR) - Benzinga SPY 761.26 − 0.26% QQQ 707.87 − 0.27% BTC/USD — DIA 518.00 − 0.21% GLD 381.40 − 0.16% TLT 80.06 +0.01% US Sign in Register My Account Benzinga Premium Pr",
        "금요일 정오에 AI 금융 공포로 인해 나스닥 100이 1% 이상 하락했고, 가치주와 방어주로의 회전이 다우존스를 끌어올리면서 주가가 분기되었습니다.",
        "나스닥 100은 AI 연계 명칭으로 약 29,535 압력으로 1.3%, 즉 400포인트 하락했다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.26%, 0.27%, 0.21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.26%, 0.27%, 0.21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b231063cde2b96f6f481",
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
      "headline": "Lam Research (LRCX) Q1 Earnings Preview: What You Should Know Beyond the Headline Estimates",
      "headlineKo": "Lam Research(LRCX) 1분기 실적 미리보기: 헤드라인 추정치 외에 알아야 할 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0fb1ab3eb5acca73a0a1a376e1a843f0a8bd8a39e90552703325279c1f15f33",
        "publishedAt": 1792152917,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research (LRCX) Q1 Earnings Preview: What You Should Know Beyond the Headline Estimates",
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
      "id": "ad41b97463826ccf5989",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "How AI Chips Will Power Google Cloud Revenue In 2027 And Beyond",
      "headlineKo": "2027년 이후 AI 칩이 Google Cloud 수익을 창출하는 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba32ff9b90c60e6e88672b407e00ea759a2920f545e620adac5e613c52d0ca95",
        "publishedAt": 1792152034,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "How AI Chips Will Power Google Cloud Revenue In 2027 And Beyond",
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
      "id": "594fe7ba94d83222b325",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Here Are Friday’s Top Wall Street Analyst Research Calls: Barrick Mining, Brinker International, Constellation Energy, Equifax, Fox Corporation, JPMorgan Chase, Klaviyo, Toll Brothers, Workday, and Mo",
      "headlineKo": "금요일 최고의 월스트리트 분석가 연구 통화는 다음과 같습니다. Barrick Mining, Brinker International, Constellation Energy, Equifax, Fox Corporation, JPMorgan Chase, Klaviyo, Toll Brothers, Workday 및 Mo",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b7ef0528b7a53d040db130a37843195c9ca387aa90dc16c1d375754198d1d90",
        "publishedAt": 1792151729,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "금요일 최고의 월스트리트 분석가 연구 통화는 다음과 같습니다. Barrick Mining, Brinker International, Constellation Energy, Equifax, Fox Corporation, JPMorgan Chase, Klaviyo, Toll Brothers, Workday 등 - 연중무휴 월 스트리트",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,705.60 +0.53% Dow Jones 52,046.40 +0.09% Nasdaq 100 29,584.60 +1.27% Russell 2000 2,732.80 +0.29% S&P 500 7,705.60 +0.53% 다우존스 52,046.40 +0.09% 나스닥 100 29,584.60 +1.27% 러셀 2000 2,732.80 +0.",
        "작성자: 리 잭슨(Lee Jackson) 2026년 10월 16일 오전 7시 55분(동부 표준시 기준) · 4분 읽기 𝕏 f ⧉ 글로벌 금융 중심지인 뉴욕시의 월스트리트와 브로드 스트리트의 상징적인 교차로는 주요 기관에 대한 현재 시장의 평가를 반영합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5.43%, 5.09%, 0.25% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 5.43%, 5.09%, 0.25% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "93a5831e78b276ceaf83",
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
      "headline": "Oracle's Cloud Backlog Just Hit $664 Billion. Here's What a $1,000 Investment Could Be Worth If It Converts to Revenue on Schedule.",
      "headlineKo": "Oracle의 클라우드 백로그가 6,640억 달러를 기록했습니다. 일정에 따라 수익으로 전환될 경우 1,000달러 투자의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b53aafbc8eac5514b5937c825f7bab75e9609e8f1db92827cdf33b8f33730070",
        "publishedAt": 1792150500,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle의 클라우드 백로그가 6,640억 달러를 기록했습니다.",
        "일정에 따라 수익으로 전환될 경우 1,000달러 투자의 가치는 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 오라클에 대한 1,000달러 투자(ORCL -4.64%)는 2029년까지 약 2,430달러로 증가할 수 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $664 Billion, $1,000, $15.80, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $664 Billion, $1,000, $15.80, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ba6fba3483adaf44838b",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "SNDK",
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
      "headline": "Meet the New Nasdaq-100 Stock That’s Crushing Nvidia, Micron, and Sandisk. Is It Too Late to Buy?",
      "headlineKo": "Nvidia, Micron, Sandisk를 압도하는 새로운 Nasdaq-100 주식을 만나보세요. 구매하기에는 너무 늦었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6206cc9b082db4ce3d85d2bc3bee0b0f262eff25da65842f99de7b10d25cc0cc",
        "publishedAt": 1792149902,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia, Micron, Sandisk를 압도하는 새로운 Nasdaq-100 주식을 만나보세요.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 최근 몇 년간 인공지능(AI) 주식이 세 자릿수, 네 자릿수 급등하며 S&P 500 지수 상승을 이끌었습니다.",
        "투자자들은 수행되는 작업의 수를 변화시키고 결과적으로 기업 수익에 상당한 이익을 가져올 수 있는 잠재력을 가진 기술인 차세대 기술 성장 스토리에 참여하기 위해 서두르고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 600%, 9.69%, $18 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 600%, 9.69%, $18 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3a394e03b881058e65cc",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "WDC",
      "relatedTickers": [
        "QQQ",
        "SPY",
        "STX",
        "TSLA",
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
      "headline": "WDC, STX Stocks Headed For Third Straight Weekly Loss — Wells Fargo Slashes Targets But Sees Opportunity",
      "headlineKo": "WDC, STX 주식이 3주 연속 손실을 기록했습니다 — Wells Fargo, 목표를 대폭 줄였지만 기회를 봅니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c48cde3fcb6ad05ab66d8dcbb8fc3d96b1ee698f9380d700f2e39c9079b687f5",
        "publishedAt": 1792149680,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "WDC, STX 주식은 3주 연속 손실을 입었습니다 — Wells Fargo는 목표를 줄였지만 기회를 보았습니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.57% SPY 1.13% QQQ 2.23% 추세 TSLA 3.05% SMCI 9.53% NBIS 11.06% CRWV 11.81% SLS 13.14% MST",
        "WDC, STX 주식은 3주 연속 하락세를 기록했습니다. Wells Fargo는 목표를 대폭 줄였지만 기회를 보았습니다. Wells Fargo는 경쟁 심화, AI 지출 및 지속 가능성에 대한 우려에도 불구하고 두 하드 디스크 드라이브 제조업체 모두에 대해 여전히 강세를 유지하고 있습니다.",
        "컴퓨터 부품 매장 직원이 메모리 모듈을 진열하고 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.57%, 1.13%, 2.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.57%, 1.13%, 2.23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0c037c6d55616c0640ac",
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
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "NiSource announces long-term agreement with Microsoft expected to increase customer savings and support Indiana’s economic growth",
      "headlineKo": "NiSource, Microsoft와 장기 계약을 체결하여 고객 저축을 늘리고 인디애나의 경제 성장을 지원할 것으로 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f3df1ada20529070a880201afe44837fb7b9a24096341e19f31506e6fe85905",
        "publishedAt": 1792149300,
        "collectedAt": 1792451662.879963
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NiSource announces long-term agreement with Microsoft expected to increase customer savings and support Indiana’s economic growth",
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
      "id": "6ab80c2943e762917ba2",
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
      "headline": "What to Expect From Eaton’s Q3 2026 Earnings Report",
      "headlineKo": "Eaton의 2026년 3분기 수익 보고서에서 기대할 수 있는 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf157f179f9164568a723ebdc425e236cc5a0451a74357c9b7c57fb4f102c50d",
        "publishedAt": 1792149144,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What to Expect From Eaton’s Q3 2026 Earnings Report",
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
      "id": "01b8353b8b056682a577",
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
      "headline": "Earnings Preview: What to Expect From Lumentum’s Report",
      "headlineKo": "수익 미리보기: Lumentum 보고서에서 기대할 수 있는 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9daebab48fe5316184ad2f14e3f55c940341611bce9a1bb361d2df45d9a525de",
        "publishedAt": 1792148445,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Earnings Preview: What to Expect From Lumentum’s Report",
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
      "id": "e6bde742253c6ff26b9b",
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
      "headline": "Capital Over Chips: Broadcom CEO Warns Financing Costs Could Slow AI Expansion",
      "headlineKo": "칩보다 자본: Broadcom CEO, 금융 비용으로 인해 AI 확장이 느려질 수 있다고 경고",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=864738688ea3b31edc5f173f1d3714403ce755a2b66c49ad7d601fc788da27b8",
        "publishedAt": 1792147509,
        "collectedAt": 1792447523.3402944
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
        "이 기사는 AVGO의 사업과 관련된 'Capital Over Chips: Broadcom CEO Warns Financing Costs Could Slow AI Expansion' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9d985c7df2875dee18d8",
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
      "headline": "Seagate, Western Digital Face Supply Risks as AI Demand Drives Capacity Expansion",
      "headlineKo": "Seagate와 Western Digital은 AI 수요로 인해 용량 확장이 진행됨에 따라 공급 위험에 직면",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7989dc2fe0c2f83a045bee433858a57749a3bbc15c366851e53ee3ad1446fd19",
        "publishedAt": 1792146648,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 수요가 용량 확장을 주도함에 따라 Seagate, Western Digital, 공급 위험에 직면 - Western Digital (NASD - Benzinga SPY 770.88 −0.12% QQQ 720.30 −1.06% BTC/USD 82,235.81 +0.13% DIA 523.31 +0.43% GLD 384.75 +0.53% TLT 80.10 +0.16% 미국 서명 i",
        "(NASDAQ: STX) 및 Western Digital Corp.",
        "(NASDAQ: WDC )는 AI 중심 스토리지 수요의 주요 수혜자로 남아 있지만, 투자자들이 가치 평가, 미래 공급 증가 및 광범위한 AI 인프라 구축에 따른 자금 조달 부담을 재평가함에 따라 두 주식 모두 압박을 받고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.12%, 1.06%, 0.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "WDC에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.12%, 1.06%, 0.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "471f4afd52b02787629c",
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
      "headline": "Microsoft's Business Software Proposed to Receive Increased UK Regulatory Scrutiny",
      "headlineKo": "증가된 영국 규제 검사를 받기 위해 제안된 Microsoft의 비즈니스 소프트웨어",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe93b67afb889000a6f8650c7d962049c1ae2f63742459b4f22d8afb3ae8834a",
        "publishedAt": 1792145511,
        "collectedAt": 1792451662.879963
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft's Business Software Proposed to Receive Increased UK Regulatory Scrutiny",
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
      "id": "ea968a061b60d2540741",
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
      "headline": "Why Nvidia Stock Is Rising While the Broader Chip Sector Keeps Falling",
      "headlineKo": "더 넓은 칩 부문이 계속 하락하는 동안 Nvidia 주식은 상승하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=10cfc4497529722d01337ad8737b428adc2f1ce1226d4b39b72c12591433892a",
        "publishedAt": 1792144260,
        "collectedAt": 1792447523.3402944
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Nvidia Stock Is Rising While the Broader Chip Sector Keeps Falling",
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
      "id": "849fdcb5f13bff068594",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Data Center Energy Profile - 2026 Sustainability and Emissions Analysis | 24% Energy CAGR and Stargate Expansion Drive Renewable Investment and Carbon Risk",
      "headlineKo": "Oracle Data Center 에너지 프로필 - 2026년 지속 가능성 및 배출 분석 | 24% 에너지 CAGR 및 Stargate 확장으로 재생 가능 투자 및 탄소 위험 촉진",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=058fcf9a2aabfddaa1f9140390b8f1d234afd0c4aeeb299feb8a08b1e2c92634",
        "publishedAt": 1792144020,
        "collectedAt": 1792447523.3402944
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
        "이 기사는 ORCL의 사업과 관련된 'Oracle Data Center Energy Profile - 2026 Sustainability and Emissions Analysis | 24% Energy CAGR and Stargate Expansion Drive Renewable Investment and Carbon Risk' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "864570426d6afecc0c80",
      "1e10578f547803c23685",
      "c6f5ce1ef9143b0897d7",
      "2b47bdb76a1dbc02268d",
      "1817cd8db144ee3beec9",
      "cbd6802a9c3f5a2bae26",
      "198bb22db5ba2be5cde9",
      "70d84767802f83447189",
      "5d1f7e37a23597e91a5e",
      "d1cbf12c775debf0d008",
      "b219a486b81d7332ef85",
      "223b2d13bb7ad78b67ea",
      "f5f76f31842a01bf0fa5",
      "7359dee3253658dec03a",
      "198a71827a9212a9842f"
    ],
    "ORCL": [
      "864570426d6afecc0c80",
      "c6f5ce1ef9143b0897d7",
      "6be1d306a2cdacb31d22",
      "1817cd8db144ee3beec9",
      "09536402e980d56bba28",
      "ae4459e7ad570684b8f3",
      "86a6d4b21b00fc450fa3",
      "125d3fd3c7cdb0487be4",
      "2376e3f1198bd15c0e65",
      "31f05914e82367045315",
      "2b9b822ef8952ef5a21e",
      "c6b58580ba248be0dc69",
      "83c1aa88d31c26d96013",
      "cb6b222ff1e8ea827ae4",
      "d4506840446e71bbd514",
      "5dc1eb95e9ca9d7adf97",
      "e38de5e08a40ca8b3c9e",
      "e12cfbc6db4318ef48f0",
      "a66f0bf595c75c1092e9",
      "dfde06a6074ec877c86b",
      "62db2aec4e9bee8f5c75",
      "1f794705fa34665f6669",
      "79c74beed5a954229f81",
      "4dca16ad24066fcda109",
      "93a5831e78b276ceaf83",
      "e6bde742253c6ff26b9b",
      "849fdcb5f13bff068594"
    ],
    "QQQ": [
      "864570426d6afecc0c80",
      "95405e7f92726d47aa5d",
      "0a29b7d3852ee13f280f",
      "baa0d790fd5c9d59bf81",
      "5c3c81838d9fc2d5ca47",
      "a390daf5495857109f84",
      "687c52f525b4fd117b69",
      "12406ae5245631b7f5ba",
      "ae4459e7ad570684b8f3",
      "6b8073cf0dbe9b4a96e2",
      "2b059a85b8e8efff6d23",
      "af15e90efda88b940dd0",
      "acb63be1aff9910c8d5a",
      "97c4fdd697b78f2d396e",
      "32738954331fd2d10d90",
      "548eed4659e8755cc6da",
      "502e57962ac2b765d047",
      "b8a1d13cc19722fe8b5d",
      "ebf43a1a3fa041c4d90a",
      "b77b8a2f82a5cb1f86ed",
      "542c0f4839b34eca8bea",
      "4a824cf56d68c1faf154",
      "5d1f7e37a23597e91a5e",
      "736539ccdf29b4288e46",
      "1aa17ee27e58d37f39e1",
      "6fcd06676ecfb7320877",
      "15781bdf8036437e5f5d",
      "135243c7203fdc2e4d9d",
      "ad6da6d8f02109ca2dcc",
      "3fe8e15ce9fe690b1312",
      "67df910aef55e90006da",
      "35bd3cab73ca1f672103",
      "6426c2ce3a2c020fbb31",
      "333da0236bad2f50bfca",
      "e080ba2ab164760b13b3",
      "a248d5710b82f1aab72b",
      "a3c81a57ad367cea0533",
      "de59f5154682dc70172b",
      "198a71827a9212a9842f",
      "97d89001605045de37b8",
      "839ff8c76e8e6a07b18d",
      "594fe7ba94d83222b325",
      "ba6fba3483adaf44838b",
      "3a394e03b881058e65cc",
      "9d985c7df2875dee18d8"
    ],
    "SPY": [
      "864570426d6afecc0c80",
      "1e10578f547803c23685",
      "2a293eb7c6f9f65b49a1",
      "0a29b7d3852ee13f280f",
      "baa0d790fd5c9d59bf81",
      "0e3ae56299bc90968508",
      "5c3c81838d9fc2d5ca47",
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
      "32738954331fd2d10d90",
      "548eed4659e8755cc6da",
      "d2d816f0c6dc1dc3ee38",
      "502e57962ac2b765d047",
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
      "47480cee764161de443d",
      "c658873cbe8588aa4a01",
      "542c0f4839b34eca8bea",
      "50b8d5c85c7afc2a348b",
      "6c97616679eee1a4c154",
      "5dc1eb95e9ca9d7adf97",
      "0743f183bcf44dc25cdf",
      "bfdbfc7e495e284e24d4",
      "6cc2b54bb681d0928e7f",
      "03c810f13fd2c6122649",
      "70d84767802f83447189",
      "a66f0bf595c75c1092e9",
      "4a824cf56d68c1faf154",
      "285dd24ca08012221024",
      "5d1f7e37a23597e91a5e",
      "b12574e1ac0e61eaa2ef",
      "736539ccdf29b4288e46",
      "95d612779e46468a9b56",
      "6d2e2d5060c3d5bde2b7",
      "dccabd9f726d65afbe87",
      "1aa17ee27e58d37f39e1",
      "7b5e5ea47603bef00694",
      "6fcd06676ecfb7320877",
      "15781bdf8036437e5f5d",
      "49066cac6b39f57325f0",
      "135243c7203fdc2e4d9d",
      "97bef1ef19cd063f4945",
      "83e96f47ef7dbf8e46aa",
      "d1cbf12c775debf0d008",
      "8d35a6721745a79a7523",
      "ad6da6d8f02109ca2dcc",
      "da917d08988b41130910",
      "cbf328bd1c2941090543",
      "1dc45819c5660476e12a",
      "3fe8e15ce9fe690b1312",
      "67df910aef55e90006da",
      "dfde06a6074ec877c86b",
      "88b8f0bf83cb91b44070",
      "48e5a1ed78e66e12a5c1",
      "073d5e74fad70f1d54af",
      "223b2d13bb7ad78b67ea",
      "35bd3cab73ca1f672103",
      "60884df53174111b6216",
      "f5f76f31842a01bf0fa5",
      "333da0236bad2f50bfca",
      "d938adcfa96ffc48bab2",
      "e080ba2ab164760b13b3",
      "0a81cb1e7d995b1ca063",
      "a248d5710b82f1aab72b",
      "a3c81a57ad367cea0533",
      "de59f5154682dc70172b",
      "198a71827a9212a9842f",
      "97d89001605045de37b8",
      "839ff8c76e8e6a07b18d",
      "594fe7ba94d83222b325",
      "93a5831e78b276ceaf83",
      "ba6fba3483adaf44838b",
      "3a394e03b881058e65cc",
      "9d985c7df2875dee18d8"
    ],
    "MSFT": [
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
      "d257eecb1c67bc6e1d7a",
      "3952f355b71f86ffdd41",
      "a24a6c14316b65406681",
      "7b5e5ea47603bef00694",
      "dfde06a6074ec877c86b",
      "6f5da0dc59cedc7972d2",
      "0c037c6d55616c0640ac",
      "471f4afd52b02787629c"
    ],
    "AMD": [
      "c6f5ce1ef9143b0897d7",
      "2a293eb7c6f9f65b49a1",
      "6be1d306a2cdacb31d22",
      "1817cd8db144ee3beec9",
      "09536402e980d56bba28",
      "31f05914e82367045315",
      "2b9b822ef8952ef5a21e",
      "dfb7b1c8403dd425a347",
      "83c1aa88d31c26d96013",
      "76e6fff3c2bb3a16cd91",
      "cb6b222ff1e8ea827ae4",
      "d4506840446e71bbd514",
      "9368cf970b9b9abb0e74",
      "e38de5e08a40ca8b3c9e",
      "e12cfbc6db4318ef48f0",
      "b12574e1ac0e61eaa2ef",
      "62db2aec4e9bee8f5c75",
      "1f794705fa34665f6669",
      "60884df53174111b6216",
      "79c74beed5a954229f81",
      "4dca16ad24066fcda109",
      "a248d5710b82f1aab72b",
      "e6bde742253c6ff26b9b",
      "849fdcb5f13bff068594"
    ],
    "MU": [
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
      "76e6fff3c2bb3a16cd91",
      "6ed3f8ed83dd79cc7298",
      "cb6b222ff1e8ea827ae4",
      "d4506840446e71bbd514",
      "e38de5e08a40ca8b3c9e",
      "2bc181ea66f5ab82aedf",
      "e12cfbc6db4318ef48f0",
      "6cc2b54bb681d0928e7f",
      "4a824cf56d68c1faf154",
      "736539ccdf29b4288e46",
      "49066cac6b39f57325f0",
      "135243c7203fdc2e4d9d",
      "1dc45819c5660476e12a",
      "62db2aec4e9bee8f5c75",
      "073d5e74fad70f1d54af",
      "10d809cbadada9b447f5",
      "1f794705fa34665f6669",
      "79c74beed5a954229f81",
      "4dca16ad24066fcda109",
      "406e1cb3f117312d4af0",
      "de59f5154682dc70172b",
      "839ff8c76e8e6a07b18d",
      "ba6fba3483adaf44838b",
      "e6bde742253c6ff26b9b",
      "849fdcb5f13bff068594"
    ],
    "NVDA": [
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
      "76e6fff3c2bb3a16cd91",
      "c55205eeff05cb84ff88",
      "cd7a406e62cf6eddf5ca",
      "cb6b222ff1e8ea827ae4",
      "d4506840446e71bbd514",
      "50b8d5c85c7afc2a348b",
      "6c97616679eee1a4c154",
      "e38de5e08a40ca8b3c9e",
      "e12cfbc6db4318ef48f0",
      "370409f4636dde498eff",
      "1aa17ee27e58d37f39e1",
      "8d35a6721745a79a7523",
      "62db2aec4e9bee8f5c75",
      "223b2d13bb7ad78b67ea",
      "1f794705fa34665f6669",
      "e05cd8a57641d3e40ecb",
      "610f0ccebe9031c04dc7",
      "79c74beed5a954229f81",
      "4dca16ad24066fcda109",
      "e080ba2ab164760b13b3",
      "df822fd0fb3d48007ce8",
      "83f9a14767c2a208936e",
      "ba6fba3483adaf44838b",
      "e6bde742253c6ff26b9b",
      "ea968a061b60d2540741",
      "849fdcb5f13bff068594"
    ],
    "META": [
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
      "0cf68824e6973a927f67",
      "542c0f4839b34eca8bea",
      "15781bdf8036437e5f5d",
      "18f7be54938b7e2bff92",
      "e2abde64c2bc3a538324",
      "8cce5293f4ecd5ab6175",
      "61c302a6459d323fa609",
      "d683662c1ad0f7cc0747",
      "27e3515c977bed0e0a2d",
      "5f63a74869ed492de42f"
    ],
    "LRCX": [
      "bdf58dad04f3050349f7",
      "5574d3e85a424dae11b5",
      "af15e90efda88b940dd0",
      "857460b1962443ca793b",
      "333da0236bad2f50bfca",
      "b231063cde2b96f6f481"
    ],
    "ASML": [
      "5574d3e85a424dae11b5",
      "e13f4a9d70377623b593",
      "6b9d7ab15917bc19f9f6",
      "31f05914e82367045315",
      "00c44594429e240d68c6",
      "331f389fe6993fb1c127",
      "d938adcfa96ffc48bab2"
    ],
    "GOOGL": [
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
      "325047a78b6b7a3e8194",
      "ee58b1442a6454eceb27",
      "0743f183bcf44dc25cdf",
      "cbf328bd1c2941090543",
      "dfde06a6074ec877c86b",
      "aa647f4b98e2b45bbd77",
      "ad41b97463826ccf5989"
    ],
    "TSLA": [
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
      "794398fe1a45b06c2da8",
      "dccabd9f726d65afbe87",
      "18f7be54938b7e2bff92",
      "75ab2e32c2c989ac109a",
      "97bef1ef19cd063f4945",
      "83e96f47ef7dbf8e46aa",
      "da917d08988b41130910",
      "67df910aef55e90006da",
      "223b2d13bb7ad78b67ea",
      "8cce5293f4ecd5ab6175",
      "e26d54c8c2a99db62c3e",
      "6426c2ce3a2c020fbb31",
      "e080ba2ab164760b13b3",
      "27e3515c977bed0e0a2d",
      "198a71827a9212a9842f",
      "3a394e03b881058e65cc"
    ],
    "SNDK": [
      "829568de7743299e237a",
      "d56a24222d60bc99a107",
      "8fa934894781397cc443",
      "c658873cbe8588aa4a01",
      "d4506840446e71bbd514",
      "135243c7203fdc2e4d9d",
      "1dc45819c5660476e12a",
      "2989df1ec59c2eced832",
      "4dca16ad24066fcda109",
      "0a81cb1e7d995b1ca063",
      "de59f5154682dc70172b",
      "839ff8c76e8e6a07b18d",
      "ba6fba3483adaf44838b"
    ],
    "AAPL": [
      "c11ece71bb149befb39a",
      "ebf43a1a3fa041c4d90a",
      "cd7a406e62cf6eddf5ca",
      "12f7daeb2de61da3c471",
      "bfdbfc7e495e284e24d4",
      "6d2e2d5060c3d5bde2b7",
      "cbf328bd1c2941090543",
      "3fe8e15ce9fe690b1312",
      "10d809cbadada9b447f5",
      "223b2d13bb7ad78b67ea",
      "0839ceb97b40635b1fb5",
      "406e1cb3f117312d4af0"
    ],
    "QCOM": [
      "c11ece71bb149befb39a",
      "10d809cbadada9b447f5",
      "60884df53174111b6216",
      "406e1cb3f117312d4af0"
    ],
    "WDC": [
      "c11ece71bb149befb39a",
      "8fa934894781397cc443",
      "10d809cbadada9b447f5",
      "406e1cb3f117312d4af0",
      "893d21be2f345c260d14",
      "8cf49cbee45870a81812",
      "3a394e03b881058e65cc",
      "9d985c7df2875dee18d8"
    ],
    "INTC": [
      "0cbf11404a799e09f698",
      "12406ae5245631b7f5ba",
      "6be1d306a2cdacb31d22",
      "31f05914e82367045315",
      "e24b971c0b59af6019cc",
      "6ed3f8ed83dd79cc7298",
      "025e08677c9c9ec46e7e",
      "56d190ac6a607cee0ace",
      "97d89001605045de37b8"
    ],
    "LITE": [
      "baa0d790fd5c9d59bf81",
      "687c52f525b4fd117b69",
      "ecf353f7baa6b682f353",
      "01b8353b8b056682a577"
    ],
    "VRT": [
      "0e3ae56299bc90968508",
      "15f29a94c70e212a02fc"
    ],
    "COHR": [
      "5c3c81838d9fc2d5ca47",
      "687c52f525b4fd117b69",
      "965025493a62a5eede03",
      "2b9b822ef8952ef5a21e"
    ],
    "AVGO": [
      "a390daf5495857109f84",
      "6b8073cf0dbe9b4a96e2",
      "2b059a85b8e8efff6d23",
      "8c695df4c32e604c4729",
      "cd7a406e62cf6eddf5ca",
      "6c97616679eee1a4c154",
      "e38de5e08a40ca8b3c9e",
      "95d612779e46468a9b56",
      "79c74beed5a954229f81",
      "e6bde742253c6ff26b9b"
    ],
    "MRVL": [
      "a390daf5495857109f84",
      "2b059a85b8e8efff6d23",
      "79c74beed5a954229f81"
    ],
    "PLTR": [
      "bc5a2c9c21c306efb675",
      "70e625155d14ffc34cfa",
      "acb63be1aff9910c8d5a",
      "3a8e80de6ad3584e5b6e",
      "1cf6cdca1b4b31c0c12d",
      "c4c976980704bf8e762f",
      "4bbdf16bf41c3ca4dc93",
      "285dd24ca08012221024",
      "06e756d17d9affbad4d8",
      "ad6da6d8f02109ca2dcc",
      "a3c81a57ad367cea0533",
      "8b65fe61683343a16ff5"
    ],
    "ANET": [
      "aa332295551a779201ca",
      "b48a08d929fae57553ba"
    ],
    "HUBB": [
      "35bc7082398e0e25c792"
    ],
    "ARM": [
      "ecf353f7baa6b682f353",
      "60884df53174111b6216"
    ],
    "FIX": [
      "d2d3306dbe2ad909d812"
    ],
    "AMAT": [
      "97c4fdd697b78f2d396e",
      "71c9cd6094c55bcf0e9a"
    ],
    "TSM": [
      "31f05914e82367045315",
      "b048012de33b44384c14",
      "76e6fff3c2bb3a16cd91",
      "6c97616679eee1a4c154",
      "025e08677c9c9ec46e7e",
      "8d35a6721745a79a7523",
      "10ced56ee0d970eb6b0b",
      "62db2aec4e9bee8f5c75",
      "60884df53174111b6216",
      "c796953b042ffe170d65"
    ],
    "BE": [
      "548eed4659e8755cc6da",
      "3b6d0603aafcf68bba1f"
    ],
    "ETN": [
      "502e57962ac2b765d047",
      "e12cfbc6db4318ef48f0",
      "35bd3cab73ca1f672103",
      "4c186fbf747af94421dd",
      "6ab80c2943e762917ba2"
    ],
    "GEV": [
      "47480cee764161de443d",
      "b1bfee1a051a6d8a6665"
    ],
    "VST": [
      "88635dc9bf0fd460153e",
      "cb6b222ff1e8ea827ae4",
      "03c810f13fd2c6122649"
    ],
    "CEG": [
      "88b8f0bf83cb91b44070",
      "594fe7ba94d83222b325"
    ],
    "CRM": [
      "590f1bf2a6e3f7220f24",
      "69907a5ca0a6de580006",
      "eec71e0128909214f5e8"
    ],
    "STX": [
      "6647b3a8c6d51e592c50",
      "8b11540721a668021c21",
      "3a394e03b881058e65cc",
      "9d985c7df2875dee18d8"
    ]
  }
};
