// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1793627538.474382,
  "events": [
    {
      "id": "cd338d49073998e9096a",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Earnings On Tap. Can Software Maker Buck AI Sell-Off?",
      "headlineKo": "Palantir 수익을 실시간으로 확인하세요. 소프트웨어 제조사가 AI 매각을 막을 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc7ed4d7a505f7cfc60ca597cc192ebfbeb320a73caabde4981f7e6daee28251",
        "publishedAt": 1793619982,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Earnings On Tap. Can Software Maker Buck AI Sell-Off?",
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
      "id": "a2a9ca16bf69c023b908",
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
      "headline": "Apple's new CEO faces earnings test as rising chip costs cloud outlook",
      "headlineKo": "Apple의 새로운 CEO는 칩 비용 상승으로 인해 수익 테스트에 직면해 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=defb2bd9b9048b2adaab0dae64499f98e6344ec691cfd19f95d3f636c051f206",
        "publishedAt": 1793619504,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 11%, $113.39 billion, €101.5, 6%, $29.04 billion, €26, 15%, $56.54 billion.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple's new CEO faces earnings test as rising chip costs cloud outlook' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "db27c9a8359ac675a2e7",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "LITE",
        "MRVL",
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
      "headline": "Phillip Securities Says Amazon’s ‘Strong Demand Visibility’ Supports Aggressive Capex",
      "headlineKo": "Phillip Securities는 Amazon의 '강력한 수요 가시성'이 공격적인 Capex를 지원한다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=730c45fa87555303b45b660a88e2feaa9d3e4bc8a1c83449aec6a29993071143",
        "publishedAt": 1793618567,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Phillip Securities는 Amazon의 '강력한 수요 가시성'이 공격적인 Capex AI 에이전트를 지원한다고 말합니다. Trending News Earnings All DIA 0.35% SPY 0.36% QQQ 0.64% Trending LITE 1.75% MRVL 0.17% POET 1.64% AXSM 4.45% TEM 3.85% CRML 2.36% TGTX 0.28%CIF",
        "The Fly에 따르면 Phillip Securities는 Amazon의 '강력한 수요 가시성'이 공격적인 Capex를 지원한다고 밝혔습니다. Phillip Securities는 Amazon을 'Accumulate'에서 'Buy'로 업그레이드하고 목표 가격을 320달러에서 330달러로 높였습니다.",
        "아마존의 로고와 글자는 지난 1월 뮌헨에 있는 아마존 독일 본사 건물 외관에서 볼 수 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.35%, 0.36%, 0.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.35%, 0.36%, 0.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "380f29c06c65864d1478",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple Q4 earnings on deck: What to expect",
      "headlineKo": "Apple Q4 실적 발표: 무엇을 기대할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=351525b57f94debfa815e82eaec7676a6d7dd598b7244aaddc9e4ee2043fd84c",
        "publishedAt": 1793618082,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple Q4 earnings on deck: What to expect",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple Q4 earnings on deck: What to expect' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "3fa431bb895beaac5e74",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple Has a Costly Problem Ahead of Earnings as Memory Prices Surge",
      "headlineKo": "애플은 메모리 가격 급등으로 수익보다 비용이 많이 드는 문제를 안고 있다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c71eb2de7e477fd14b0d957531bb501bfcdabc90809ac24332937dc05cf6a63",
        "publishedAt": 1793618052,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple Has a Costly Problem Ahead of Earnings as Memory Prices Surge",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple Has a Costly Problem Ahead of Earnings as Memory Prices Surge' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e0ebbc038513f791bc47",
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
      "headline": "Alphabet Plummets After Earnings. I Think the Stock Looks Like a Genius Buy Now.",
      "headlineKo": "알파벳은 실적후 급락. 나는 그 주식이 천재적인 지금 구매처럼 보인다고 생각합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b95e02df2f9572ea035857e40327dcd8f20cd130b4480df95f3bef7d7d73907a",
        "publishedAt": 1793617260,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "나는 그 주식이 천재적인 지금 구매처럼 보인다고 생각합니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Alphabet ( GOOG -1.45% ) ( GOOGL -1.40% ) 방금 3분기 실적을 보고했는데 결과가 꽤 좋은 것 같았습니다.",
        "여러 가지 이유로 실적 발표 후 주가가 10% 정도 하락했지만, 매도에는 훨씬 더 많은 것이 있다고 생각합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, $9 billion, $279.84 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10%, $9 billion, $279.84 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c189d2f2d07614dedf7e",
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
      "headline": "Vertiv (NYSE:VRT) Shows Strong Growth Momentum Across Earnings, Sales, and Cash Flow",
      "headlineKo": "Vertiv(NYSE:VRT)는 수익, 매출, 현금 흐름 전반에 걸쳐 강력한 성장 모멘텀을 보여줍니다.",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=955153f3605175327061c29dacb108cd0cff9f608b49d631d3d7b3ab24a8ecbf",
        "publishedAt": 1793616068,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv (NYSE:VRT) Shows Strong Growth Momentum Across Earnings, Sales, and Cash Flow",
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
      "id": "dc4b0164c166f0f742c1",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "AAPL",
        "PLTR",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today: Dow Jones, S&P 500 Futures Rise Ahead of Apple, Palantir Earnings: RYAAY, USLM, INO in Focus",
      "headlineKo": "오늘의 주식 시장: Dow Jones, S&P 500 선물이 Apple, Palantir보다 앞서 상승 수익: RYAAY, USLM, INO에 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c2417fc69fd248c922c4d57b3d7f23d30dfaab2327f8aaefbe1c2880ab4f8bc",
        "publishedAt": 1793615368,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stock Market Today: Dow Jones, S&P 500 Futures Rise Ahead of Apple, Palantir Earnings: RYAAY, USLM, INO in Focus",
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
      "id": "f7e2a4658d66849aae9d",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "INTC",
      "relatedTickers": [
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel vs. Taiwan Semiconductor: The AI Boom Is Telling Two Very Different Stories",
      "headlineKo": "인텔 대 대만 반도체: AI 붐은 매우 다른 두 가지 이야기를 전하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b21cef3ebc0910c73bbe478c66b8c5fd3cb42c32fbdf81fdf94a6eba2cff37fc",
        "publishedAt": 1793614802,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Taiwan Semiconductor: AI 붐은 매우 다른 두 가지 이야기를 전하고 있습니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool Intel( INTC -28.58% ) 및 Taiwan Semiconductor Manufacturing( TSM )에 합류",
        "그러나 이들의 수익 추세는 매우 다른 이야기를 말해줍니다.",
        "Intel이 수년간의 어려움을 겪은 후 추진력을 되찾기 위해 노력하는 동안 Taiwan Semiconductor는 고급 칩 및 인공 지능(AI) 인프라에 대한 수요에 힘입어 더욱 일관된 성장을 이루었습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 21%, $16.5 billion, 78% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 21%, $16.5 billion, 78% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "98ca814c2ecb450267d5",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AAPL",
        "AMD",
        "INTC",
        "MU",
        "PLTR"
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stocktwits Tech Watch: Apple And Palantir To Kick Off Tech Earnings In Another Crucial Week, AMD To Settle Chip Debate After Intel’s Warning",
      "headlineKo": "Stocktwits Tech Watch: Apple과 Palantir가 또 다른 중요한 주에 기술 수입을 시작하고, AMD는 Intel의 경고 이후 칩 논쟁을 해결합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=96a711f14a98bcc85111e823c97f943286a0b396f40ec01068f0252972a39016",
        "publishedAt": 1793608808,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits Tech Watch: Apple And Palantir To Kick Off Tech Earnings In Another Crucial Week, AMD To Settle Chip Debate After Intel’s Warning",
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
      "id": "6123e2178664c17a4974",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Can KLA Stock Jump 40%?",
      "headlineKo": "KLA 주식이 40% 상승할 수 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89efa7c326268e05404b6fab738c1ba0326f4ecd58339b87afbeff8ec5963936",
        "publishedAt": 1793608513,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2026년 11월 2일 · Trefis 팀 KLAC YTD +30.4% SPY YTD +11.4% QQQ YTD +12.7% KLAC 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요.",
        "KLA(KLAC) 주식은 2026년 10월 1일부터 10월 30일까지 21.2% 하락하여 같은 날짜 동안 S&P 500이 1.1% 하락한 데 이어 같은 달에 경영진이 기록적인 분기별 수익이라고 보고했습니다.",
        "40%의 이익이 발생하면 주가는 10월 30일 종가 $157.91에서 약 $220로 상승하게 됩니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 40%, 30.4%, 11.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 40%, 30.4%, 11.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "183adcebff561492bc22",
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
      "headline": "Nvidia, Micron and Alphabet is part of Zacks Earnings Preview",
      "headlineKo": "Nvidia, Micron 및 Alphabet은 Zacks Earnings Preview의 일부입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e11436d23c1a9bd6ccbcc780248a3b3c2afcfd4e38bf8f0355017da3a2984821",
        "publishedAt": 1793606940,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia, Micron 및 Alphabet은 Zacks Earnings Preview의 일부입니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "6fef6f84e572cacadb6b",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "SpaceX Could Mirror Nvidia’s Revenue Boom, Sequoia Partner Says — Tesla Influencer Runs Hypothetical Merger Math",
      "headlineKo": "SpaceX는 Nvidia의 수익 붐을 반영할 수 있다고 Sequoia 파트너는 말합니다. Tesla Influencer는 가상의 합병 수학을 실행합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38a52cce1bf132c2a656aa61fb481589b5c6d32710c4907b37ab3559433e2994",
        "publishedAt": 1793605701,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX는 Nvidia의 수익 붐을 반영할 수 있다고 Sequoia 파트너는 말합니다. Tesla Influencer는 가상의 합병 수학을 실행합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "1fdd62a811df5f2a7568",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Is Seagate Still The Business You Bought?",
      "headlineKo": "Seagate가 여전히 귀하가 구매한 사업입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0754beb2c6a959972783e9ee6e21e1a5349d2efaecd4258be01185a16feea01d",
        "publishedAt": 1793603055,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate가 여전히 귀하가 구매한 사업입니까?",
        "| Trefis는 여전히 Seagate를 인수한 사업입니까?",
        "2026년 11월 2일 · Trefis 팀 STX YTD +134.8% SPY YTD +11.4% QQQ YTD +12.7% STX 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 134.8%, 11.4%, 12.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 134.8%, 11.4%, 12.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "31c427ad8fa4c8d11fe5",
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
      "headline": "Sandisk Corporation 2027 Q1 - Results - Earnings Call Presentation",
      "headlineKo": "Sandisk Corporation 2027년 1분기 - 결과 - 실적 발표 프레젠테이션",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=06c3e9e9cd5dc8bc7db5d10522f1eccac290f69d2684050119e94054f98366d4",
        "publishedAt": 1793598369,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk Corporation 2027년 1분기 - 결과 - 실적 발표 프레젠테이션(NASDAQ:SNDK) 2026-11-02 | Alpha SA 성적 증명서 찾기 162.77K 팔로워 팔로우 다음 슬라이드 데크는 Sandisk Corporation에서 2027년과 함께 게시했습니다.",
        "이 기사는 SA가 작성했습니다. Transcripts 162.77K 팔로워 팔로우 Seeking Alpha의 성적표 팀은 모든 성적표 관련 프로젝트의 개발을 담당합니다.",
        "우리는 현재 사이트에 분기당 수천 건의 분기별 실적 발표를 게시하고 있으며 계속해서 범위를 확대하고 확장하고 있습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $49.51, $3.10, $11.03 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $49.51, $3.10, $11.03 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "38f312a00b0148bae60a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "QQQ",
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
      "headline": "QQQ After A -6.7% October: What History Says About November",
      "headlineKo": "10월 A -6.7% 이후 QQQ: 역사가 11월에 대해 말하는 것",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5e04ce1013bb1a2e37bcc106e16be1eacbd655e7fa8a3d6535b01c2e0922a426",
        "publishedAt": 1793594622,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10월 A -6.7% 이후 QQQ: 11월에 대해 역사가 말하는 것(NASDAQ:QQQ) | 알파 Ang Shen 찾기 413 팔로워 팔로우 요약 QQQ는 역사적으로 11월에 가장 높은 수익률을 기록했으며 Octo 이후 빠른 회복 가능성이 높습니다.",
        "현재 S&P 500 펀더멘털에는 거품이 없습니다. 3분기 실적은 전년 동기 대비 29.5% 증가했으며, 선행 PER은 18.7로 5년 및 10년 평균보다 낮습니다.",
        "10~15% 하락 후 QQQ를 구매하면 탁월한 위험/보상을 얻을 수 있으며, 특히 불확실성이 사라지는 중간 선거 이후에는 더욱 그렇습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6.7%, 29.5%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6.7%, 29.5%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1885180449cefe2e3686",
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
      "headline": "AI Bond Funding Might Change The Case For Investing In Microsoft (MSFT)",
      "headlineKo": "AI 채권 자금 조달로 Microsoft(MSFT) 투자 사례가 바뀔 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b126d85c6c4af73f830c5d51abc001931c45e0bb6a0a3b6bd353d90b2ae410ed",
        "publishedAt": 1793593762,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 MSFT의 사업과 관련된 'AI Bond Funding Might Change The Case For Investing In Microsoft (MSFT)' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "4ff29e520199f7581e30",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "INTC",
        "PLTR",
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
      "headline": "INTC, AMZN, GOOGL Stocks Rise Overnight After Brutal Week: Dan Niles Sees AI Risks Showing Up In Big Tech Earnings",
      "headlineKo": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
        "publishedAt": 1793591953,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "'대접보다 더 많은 트릭': Dan Niles, 대형 기술 수익에 AI 위험 표시 AI 에이전트 동향 뉴스 수익 모든 DIA 0.38% SPY 0.50% QQQ 0.95% 추세 PLTR 1.92% PGEN 21.04% NCLH 0.97% AXSM 0.68% AMPX 1.28% TGTX 1.23% RKT 0.31% INTC 1.13% XLV 0.",
        "INTC, AMZN, GOOGL 주식은 잔혹한 주간 이후 밤새 상승: Dan Niles는 AI 위험이 Big Tech 수익에 나타나는 것으로 봅니다. 투자자 Dan Niles는 Big Tech 보고서가 AI 관련 위험을 명확하게 반영했다고 말했습니다.",
        "(사진: Jakub Porzycki/NurPhoto via Getty Images) Yuvraj Malik · Stocktwits 게시일: 2026년 11월 1일 | 오후 10:59 EST 공유 · Google에 추가 GOOGL은 주요 하이퍼스케일러 중 최악의 실적을 기록하여 이번 주에 12.6%의 손실을 입었습니다. 이는 최악의 주간 이동 수치입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.50%, 0.95% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.50%, 0.95% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "90e4cb22c6231543adc1",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "INTC"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "INTC, AMZN, GOOGL Stocks Rise Overnight After Brutal Week: Dan Niles Sees AI Risks Showing Up In Big Tech Earnings",
      "headlineKo": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
        "publishedAt": 1793591953,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "INTC, AMZN, GOOGL Stocks Rise Overnight After Brutal Week: Dan Niles Sees AI Risks Showing Up In Big Tech Earnings",
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
      "id": "589ccdd2480bbc693fd6",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Midterms, Jobs Data, and Apple Earnings Test Wall Street This Week: Will Stocks Hold?",
      "headlineKo": "이번 주 중간고사, 채용 데이터 및 Apple 수익 테스트 월스트리트: 주식이 유지될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=27f7659154ecc28f04b05851ea8a18029ee2d304f5a53ee22ae9593ec18cde73",
        "publishedAt": 1793589394,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Midterms, Jobs Data, and Apple Earnings Test Wall Street This Week: Will Stocks Hold?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Midterms, Jobs Data, and Apple Earnings Test Wall Street This Week: Will Stocks Hold?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "2d03cc21c8b42a1ef360",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Intel Shares Collapse. Why I'm Still Not Buying the Stock",
      "headlineKo": "인텔 주식 붕괴. 내가 아직도 주식을 사지 않는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=956076ab1583728d6e1200c99e731f662f42bb7972c39df2fc7393eb33609e0c",
        "publishedAt": 1793586000,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "내가 아직도 주식을 사지 않는 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인텔( INTC -28.58% ) 주가는 경기 둔화 속에서 칩 제조업체가 약한 4분기 지침을 발표한 후 폭락했습니다.",
        "수익 보고서가 발표되기 전, 주가는 에이전트 인공지능(AI)의 부상과 서버 중앙처리장치(CPU)에 대한 수요 급증으로 인해 전년 동기 대비 약 150% 상승하는 큰 폭의 상승세를 보였습니다.",
        "그러나 주식이 무너져도 나는 여전히 그것을 사지 않을 것입니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 150%, $65.76, $26.31 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 150%, $65.76, $26.31 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "de711abd7ab0465c44a6",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "LITE",
        "MRVL",
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
      "headline": "MU, SNDK, DRAM Inch Higher Overnight After Mixed Week: Japan’s Kioxia Plunges After Cautious Memory Outlook",
      "headlineKo": "MU, SNDK, DRAM은 혼합 주 이후 밤새 인치 상승: 일본의 KIOXIA는 신중한 메모리 전망 이후 급락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ef859cecf66347c1490cd4caf8a778f2fa34b64340db3c0ef829d7fe87c4098",
        "publishedAt": 1793585348,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MU, SNDK, DRAM은 혼합 주 이후 밤새 인치 상승: 일본의 KIOXIA는 신중한 메모리 전망 이후 급락 AI 에이전트 동향 뉴스 수익 전체 DIA 0.30% SPY 0.34% QQQ 0.62% Trending LITE 1.27% MRVL 0.66% POET 1.92% AXSM 4.45% CRML 1.96% CI",
        "MU, SNDK, DRAM은 혼합 주 이후 밤새 인치 상승: 일본의 Kioxia는 신중한 메모리 전망 이후 급락했습니다. Micron과 SanDisk는 일요일 늦은 밤 거래에서 2% 이상 상승했습니다.",
        "SanDisk 메모리 카드가 2026년 1월 30일 캘리포니아주 샌안셀모에서 전시되었습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.30%, 0.34%, 0.62% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.30%, 0.34%, 0.62% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ccec5def946c55f8bf32",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "META",
      "relatedTickers": [
        "INTC",
        "META",
        "MSFT",
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
      "headline": "INTC, MSFT, META, DASH, VZ: Why Retail Traders Couldn’t Take Their Eyes Off These Stocks Last Week",
      "headlineKo": "INTC, MSFT, META, DASH, VZ: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4a503fd35197e2554c09236d3e68c9931e1a00eaa266c3dcf3ac5e8fc2cf315",
        "publishedAt": 1793584440,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "INTC, MSFT, META, DASH, VZ: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유 AI 에이전트 동향 뉴스 수익 전체 DIA 0.38% SPY 0.50% QQQ 0.96% 추세 PLTR 1.92% PGEN 21.04% NCLH 0.97% AXSM 0.68% AMPX 1.28% TGTX 1.23%",
        "INTC, MSFT, META, DASH, VZ: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유 수익 업데이트, 새로운 AI 투자, 주요 배송 회사 거래 및 통신 부문의 경쟁 심화가 이번 주 내내 화제를 모았습니다.",
        "인텔 로고가 2026년 1월 22일 캘리포니아주 산타클라라 인텔 본사 앞 간판에 전시되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.50%, 0.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.50%, 0.96% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a294cd2d1673ba48400f",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Gave Alphabet Stock Its Edge Over Zillow?",
      "headlineKo": "알파벳 주식이 Zillow보다 우위에 있는 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f62309ec3c7d512c310ad84b4bc35e0a823af0935c0734e63b741d1daf58a026",
        "publishedAt": 1793582587,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳 주식이 Zillow보다 우위에 있는 이유는 무엇입니까?",
        "| Trefis 알파벳 주식이 Zillow보다 우위에 있는 이유는 무엇입니까?",
        "2026년 11월 1일 · Trefis Team ZG YTD -53.3% SPY YTD +11.4% XLC YTD -14.6% ZG 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 53.3%, 11.4%, 14.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 53.3%, 11.4%, 14.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c49e39e9286f97df5742",
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
      "headline": "Sandisk: Wait For A Bottom (Rating Upgrade)",
      "headlineKo": "Sandisk: 바닥을 기다려라(등급 업그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1e9d4048d12289b6476b45b2cebce9f69100065b0b3968ed5b0ccf5898dc22f0",
        "publishedAt": 1793577920,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: 바닥을 기다리다(등급 업그레이드) (NASDAQ:SNDK) | Seeking Alpha 아시아 투자자 33.44K 팔로워 팔로우 요약 Sandisk는 급증하는 데이터 센터 수요에 힘입어 3분기에 전년 대비 세 자릿수 매출 증가를 기록했습니다.",
        "SNDK는 49.51달러의 정규 EPS와 110억 3천만 달러의 매출을 기록했는데, 둘 다 컨센서스를 상회했으며, 데이터 센터 부문 매출은 전년 대비 1,682% 증가했습니다.",
        "Sandisk는 자사주 매입을 통해 50억 달러의 현금을 반환했으며 자사주를 더욱 매력적으로 만들기 위해 8대 1 주식 분할을 발표했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $49.51, $11.03 billion, 1,682% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $49.51, $11.03 billion, 1,682% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cb3b6a69b44f47f45b81",
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
      "headline": "Apple earnings: what to look for from AAPL",
      "headlineKo": "Apple 수익: AAPL에서 찾아야 할 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=791fdc477f0a5485edb16eaa581dad1c00ffa933c84fc622cb8687fc31250b6b",
        "publishedAt": 1793571847,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple earnings: what to look for from AAPL",
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
      "id": "9ec85093a6a8c851a290",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm Is At A Turning Point But Valuation Is Enticing",
      "headlineKo": "Qualcomm은 전환점에 있지만 가치 평가는 매력적입니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5bcf707a7cf649213ddc121dc16b7af0b9d226b8f5c37de6eac44516300aa4ad",
        "publishedAt": 1793571326,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm은 전환점에 있지만 가치 평가는 매력적입니다(NASDAQ:QCOM) | Seeking Alpha TEL 투자 연구 팔로워 990명 팔로우 요약 Qualcomm은 안정적인 레거시 스마트폰 칩 지배력과 측정된 AI/데이터 CE라는 희귀한 하이브리드 모델을 제공합니다.",
        "QCOM의 가치 평가는 매력적입니다. P/E는 21배, 현금 흐름은 14배로 AI 동종 기업보다 훨씬 낮습니다. 이는 느린 성장과 낮은 위험 프로필을 모두 반영합니다.",
        "경영진은 자동차 및 데이터 센터 부문의 강력한 성장을 예측하고 있으며, 데이터 센터 수익은 2029년까지 50배 증가할 것으로 예상하지만 전반적인 지침은 여전히 ​​완만합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
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
      "id": "081e8db771c6aa560e6d",
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
      "headline": "Amazon Stock Fell After Earnings. Jim Cramer Says Buy Right Here",
      "headlineKo": "아마존 주가는 실적 후 하락했다. Jim Cramer는 여기서 구매하라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1f8bbc0413409f9ca7cd03d043908f43b7efda03b8004076921e7980dc8ab5e",
        "publishedAt": 1793570825,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Cramer는 24/7 Wall St.에서 바로 구매하라고 말합니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,621.60 +0.45% Dow Jones 51,969.00 +0.34% Nasdaq 100 28,676.00 +0.94% Russell 2000 2,831.26 +0.61% S&P 500 7,621.60 +0.45% 다우존스 51,969.00 +0.34% 나스닥 100 28,676.00 +0.94% 러셀 20",
        "Jim Cramer는 Amazon의 최신 수익 보고서가 시장을 놀라게 했지만 Jim Cramer는 대부분의 투자자들이 놓치고 있는 숫자에서 뭔가를 발견했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $253.82, $229., $240.35, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $253.82, $229., $240.35, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "24aee6fb8f89ad55aef9",
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
      "headline": "Barclays Says a SpaceX Merger Is Now \"a Key Part\" of the Tesla Bull Case. Here's Who Actually Wins if It Happens -- and Who Pays.",
      "headlineKo": "Barclays는 SpaceX 합병이 이제 Tesla Bull Case의 \"핵심 부분\"이라고 말합니다. 실제로 이런 일이 발생하면 누가 승자가 되는지, 그리고 누가 비용을 지불하는지 알아보겠습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bd3f88ac456fcaf4decb061e7e61e6100b2aa8ec471a83096350fb887480ba20",
        "publishedAt": 1793567100,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Barclays는 SpaceX 합병이 이제 Tesla Bull Case의 \"핵심 부분\"이라고 말합니다.",
        "실제로 이런 일이 발생하면 누가 승자가 되는지, 그리고 누가 비용을 지불하는지 알아보겠습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool In Space Exploration Technologies'( SPCX -6.37% ) 최근 3분기 컨퍼런스 콜에서 Elon Musk CEO는 T 가능성에 대해 질문을 받았습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $2 trillion, $1.55 trillion, $370 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2 trillion, $1.55 trillion, $370 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9c601dc289245fba9a98",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
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
      "headline": "SpaceX Stock Is Nearly 30% Below Its Post-IPO High. Here's What Facebook's Stock Did From the Same Spot.",
      "headlineKo": "SpaceX 주식은 IPO 후 최고치보다 거의 30% 낮습니다. 다음은 같은 지점에서 Facebook의 주식이 한 일입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b84e4e7c0ff8c9cec2b7ad7b35a348af4e4ece00986fa941a1d085a6e18715d",
        "publishedAt": 1793563381,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX 주식은 IPO 후 최고치보다 거의 30% 낮습니다.",
        "다음은 같은 지점에서 Facebook의 주식이 한 일입니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool SpaceX(SPCX -6.37%)는 6월 주당 135달러에 상장했으며, 상장 3일째인 6월 16일 주가는 201.80달러로 사상 최고치를 기록했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $144, 29% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, $144, 29% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "92942b675c5d1a5ba9b5",
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
      "headline": "Nvidia: SpaceX Offers An Ignored Bonus",
      "headlineKo": "Nvidia: SpaceX는 무시된 보너스를 제공합니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5c38776381837b8bbb97cc717da1b6b8db1c784f47012c1950a6a166e5359065",
        "publishedAt": 1793563200,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: SpaceX가 무시한 보너스를 제공합니다(NASDAQ:NVDA) | Alpha Stone Fox Capital 투자 그룹 리더 찾기 요약 팔로우 Nvidia Corporation은 SpaceX의 대규모 AI 데이터 센터 계획을 통해 큰 보너스를 받을 준비가 되어 있습니다.",
        "SpaceX는 2027년에 10GW의 AI 컴퓨팅을 목표로 하며 잠재적으로 NVDA 칩에 4천억 달러 이상을 지출하여 탄탄한 수요를 보장합니다.",
        "AI 데이터 센터 인프라에 대한 BoA의 예측은 2030년까지 3조 달러에 달할 것으로 예상됩니다. 이는 AI 경쟁이 아직 초기 단계에 있다는 또 다른 긍정적인 지표입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $400, $3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $400, $3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f25123fa25af6f1ed63a",
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
      "headline": "Apple to report Q4 earnings Monday, with iPhone 18 sales in the spotlight",
      "headlineKo": "애플, 월요일 4분기 실적 발표, 아이폰18 판매 주목",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=736ba7ac89fc9997bc25736ddda0c363a761d165f9d0f5537e144c26f12e01d7",
        "publishedAt": 1793559698,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple to report Q4 earnings Monday, with iPhone 18 sales in the spotlight",
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
      "id": "bbdb5ada84d4375d8635",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Amazon.com, Inc. 2026 Q3 - Results - Earnings Call Presentation",
      "headlineKo": "Amazon.com, Inc. 2026년 3분기 - 결과 - 실적 발표 프레젠테이션",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3efcb73db0d6c753865401aa02d2b6c91064788f3dd8894a94424aa4c25ad171",
        "publishedAt": 1793557251,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2026년 3분기 - 실적 - 실적 발표 프레젠테이션(NASDAQ:AMZN) 2026-11-01 | Alpha SA 성적표 찾기 팔로워 162.76K 팔로우 다음 슬라이드 데크는 Amazon.com, Inc.에서 게시되었습니다.",
        "2026년 3분기 실적 발표와 함께.",
        "이 기사는 SA가 작성했습니다. Transcripts 162.76K 팔로워 팔로우 Seeking Alpha의 성적표 팀은 모든 성적표 관련 프로젝트의 개발을 담당합니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.89, $0.10, $201.94 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.89, $0.10, $201.94 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1ab5ae78e805edee6ecf",
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
      "headline": "Here's What $6,000 Invested in Micron Could Be Worth in 2028",
      "headlineKo": "2028년에 Micron에 투자한 6,000달러의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fefe7947bad46edd4ee617c6499fb7c2e002cd01357e47193454676501c8a2d1",
        "publishedAt": 1793557200,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2028년 Micron에 투자한 6,000달러의 가치는 다음과 같습니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron( MU -5.30% )은 주가가 200% 이상 상승하는 등 환상적인 한 해를 보냈습니다.",
        "메모리 메이커는 인공지능의 차세대 주요 병목 현상의 중심이 됐다.",
        "더 큰 AI 모델의 요구 사항을 충족하기 위해 그래픽 처리 장치(GPU) 클러스터가 확장됨에 따라 다양한 용량으로 GPU에 데이터를 공급하는 메모리에 대한 수요도 높아졌습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $6,000, $884.74, $49.53 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $6,000, $884.74, $49.53 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "48a8f1108db86d22bb31",
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
      "headline": "1 Reason to Buy Microsoft Stock for 10 Years",
      "headlineKo": "10년 동안 Microsoft 주식을 구매해야 하는 1가지 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ab97ebf215c476fd9f91830a5131ebdb9acfb45585c4482570b0899c351e80a",
        "publishedAt": 1793556180,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10년 동안 Microsoft 주식을 구매해야 하는 1가지 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류하세요 Microsoft( MSFT -1.55% )는 오랫동안 자사의 소프트웨어인 모드를 사용하여 각 근로자에 ​​대해 기업에 비용을 청구해 왔습니다.",
        "향후 10년 동안 해당 주식을 매수하는 이유 중 하나는 AI 비서인 Copilot이 좌석별 구독에서 사용량 기반 가격 책정으로 전환하고 있기 때문입니다.",
        "이는 아직 주식에 반영되지 않은 Microsoft의 성장에 상당한 영향을 미칠 수 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $521.91, $8.23, 1.55% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $521.91, $8.23, 1.55% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3cf4075d96bcea8d393e",
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
      "headline": "Could Apple's Latest iPhone Be Its Biggest Growth Catalyst in Years?",
      "headlineKo": "Apple의 최신 iPhone이 몇 년 만에 가장 큰 성장의 촉매제가 될 수 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6f3ec7ce6e72f17b0ad4a2fb3ea8f14ebe35380a42293db2b5308756ff6f10c6",
        "publishedAt": 1793554141,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: $2,000, $12 billion, $20 billion, 22%, $1,200,, $800, $4.8 billion, 2%.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Could Apple's Latest iPhone Be Its Biggest Growth Catalyst in Years?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "5212dfcdbb41aeab97ac",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ICE And OKX's Tokenized Stock Venue Hits A Wall As Nvidia, Nike Join Growing List Of Objectors",
      "headlineKo": "ICE와 OKX의 토큰화된 주식 장소는 Nvidia, Nike가 점점 늘어나는 반대자 목록에 합류하면서 벽에 부딪혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba33dd86bcf8ef35db0525dca4f22a652e4d3873ea62e17b14253d720436c1bb",
        "publishedAt": 1793552257,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ICE와 OKX의 토큰화된 주식 장소는 Nvidia, Nike가 증가하는 반대자 목록에 합류하면서 벽에 부딪혔습니다. AI 에이전트 동향 뉴스 수익 전체 DIA 1.07% SPY 1.77% QQQ 3.47% Trending TRUMP 8.68% SPY 1.77% GDXU 16.27% AZN 7.02% C 2.48% USO 0.38% SLV 5.67",
        "ICE와 OKX의 토큰화된 주식 장소가 벽에 부딪히다 Nvidia와 Nike가 점점 늘어나는 반대자 목록에 합류함에 따라 OKXICE는 일시적인 SEC 면제 하에 스테이블코인에 대한 토큰화된 주식을 연중무휴 24시간 거래할 계획입니다.",
        "공개된 사진 일러스트에는 스마트폰 화면에 ICE(Intercontinental Exchange) 로고가 표시된 모습이 담겨 있다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.07%, 1.77%, 3.47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 1.07%, 1.77%, 3.47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fd540d872f3f744dbc92",
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
      "headline": "There's a $12,000 Reason to Consider Investing in QQQ Over SPY, but It Comes With a Caveat",
      "headlineKo": "SPY보다 QQQ에 투자하는 것을 고려해야 할 12,000달러의 이유가 있지만 주의할 점이 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=71071ff65f7496f1a4a8fce9c3493fd6cff4961af35077b9a39dba82c597cda8",
        "publishedAt": 1793550600,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "QQQ vs SPY: 20년 전에 투자한 $1,000의 가치는 현재 | Kiplinger 오늘 무료 일일 뉴스레터인 Kiplinger에 가입하세요. Kiplinger의 통찰력을 활용하여 현명한 금융 결정을 내리는 50만 명이 넘는 독자들과 함께 하세요.",
        "투자, 세금, 퇴직 등에 대한 전문적인 안내를 통해 이익과 번영을 누리세요.",
        "다른 미래 브랜드의 뉴스 및 제안에 대해 저에게 연락하십시오. 신뢰할 수 있는 파트너 또는 스폰서를 대신하여 당사로부터 이메일을 받으십시오. 귀하의 정보를 제출함으로써 귀하는 이용 약관 및 개인 정보 보호 정책에 동의하며 16세 이상입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, 30%, $107.88 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,000, 30%, $107.88 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f832f708202480081a9e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Sandisk Sinks 13% Last Friday After a Beat: Kioxia Says the Flash Price Surge Is Fading",
      "headlineKo": "Sandisk는 지난 금요일 비트 후 13% 하락했습니다. Kioxia는 플래시 가격 급등이 사라지고 있다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=20f9d899fab4f29d6f0b5b84554626c7e8a753e229e3d9de6ad71480fc669eed",
        "publishedAt": 1793549646,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk는 지난 금요일에 13% 하락했습니다: Kioxia는 플래시 가격 급등이 사라지고 있다고 말합니다 | TIKR.com General Investing Sandisk는 지난 금요일 하락 후 13% 하락했습니다. Kioxia는 플래시 가격 급등이 줄어들고 있다고 말합니다 Gian Estrada • 3분 읽기 리뷰",
        "방아쇠는 도쿄에서 나왔습니다. 팹 파트너인 Kioxia(285A)는 추정치를 낮추고 AI로 인한 플래시 가격 급등이 사라지고 있다고 경고했다고 Bloomberg가 보도했습니다.",
        "판매는 메모리 체인을 통해 이루어졌습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 13.47%, $1,150.89 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 13.47%, $1,150.89 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6d41dda88ec65e298c22",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Delivered a Beat on Both Earnings and Revenue. Here’s How to Think About MSFT Stock Now.",
      "headlineKo": "Microsoft는 수익과 수익 모두에서 좋은 성과를 거두었습니다. 지금 MSFT 주식에 대해 생각하는 방법은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=20fff3d2f8b934d1c9ce641a205b409ca8453cce7b4f0d0d5a6415343a907572",
        "publishedAt": 1793547003,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Delivered a Beat on Both Earnings and Revenue. Here’s How to Think About MSFT Stock Now.",
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
      "id": "a9071e26574d3547310c",
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
      "headline": "Copilot AI Predicts Solana Could Hit $2,500 if This Landmark Event Happens",
      "headlineKo": "Copilot AI는 이 획기적인 이벤트가 발생하면 Solana가 $2,500를 달성할 수 있다고 예측합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30cfe35bf8d66c89c9efd1da44f75c72a928e9065784f77c9b2ba7c0f8fd9614",
        "publishedAt": 1793545219,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Copilot AI는 이 기사에서 이 사건이 발생하면 Solana가 $2,500를 기록할 수 있다고 예측합니다. Copilot AI는 $2,500의 Solana 가격을 예측합니다: 기술적 분석이 일치합니까?",
        "솔라나 암호화폐 랠리를 강화할 수 있는 5가지 촉매제 Microsoft Copilot AI는 2027년 1월 1일까지 솔라나(SOL)의 상당히 터무니없는 가격 목표를 $1,000~$2,000로 예측하며, 가정에 따라 $2,500+에 대한 확장 목표도 있습니다.",
        "SOL은 현재 2026년 11월 1일 현재 약 95달러에 거래되고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $2,500, $1,000, $2,000, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2,500, $1,000, $2,000, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2ec8c4fe0fd9c22bfbb1",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL"
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
      "headline": "GOOGL SEC Form 424B5 filed",
      "headlineKo": "GOOGL SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526442515/d125079d424b5.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1793620822.438623
      },
      "confirmedFacts": [
        "GOOGL가 2026-11-02에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "GOOGL",
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
      "id": "47a48f0c8c4f3ffb67fb",
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
      "headline": "Why Micron Stock Looks Cheap After a Record Year",
      "headlineKo": "Micron 주식이 기록적인 해 이후 저렴해 보이는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=98f248e877ae7e100d06536c6b8aa76c27c29be067ed9449c6a4f765417b5c72",
        "publishedAt": 1793544600,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron 주식이 기록적인 해 이후 저렴해 보이는 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% 컴퓨터 및 인공 지능용 메모리 칩을 만드는 Motley Fool Micron Technology ( MU -5.30% )에 참여",
        "30일 발표된 회계연도 2026년 매출은 1,330억 달러, 조정 이익은 주당 75.52달러로 전년 동기 8.29달러보다 크게 증가했습니다.",
        "28 이는 실적 마감일 마감보다 약 13% 낮은 수준입니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $133 billion, $75.52, $8.29 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $133 billion, $75.52, $8.29 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5dc062e1414da95ee492",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "AMD",
        "PLTR",
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
      "headline": "What To Expect In Markets This Week: AAPL, PLTR, AMD, SMCI, SHOP, Earnings, Jobs Report And More",
      "headlineKo": "이번 주 시장에서 기대할 사항: AAPL, PLTR, AMD, SMCI, SHOP, 수익, 채용 보고서 등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d16b8085ff0f4b19b91eb7fe8141f1f639bc465eefc1803211670631621e6991",
        "publishedAt": 1793541976,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이번 주 시장에서 기대할 사항: AAPL, PLTR, AMD, SMCI, SHOP, 수입, 채용 보고서 등 AI 에이전트 동향 뉴스 수입 모든 DIA 1.07% SPY 1.77% QQQ 3.47% 추세 TRUMP 6.74% REGN 13.33% EBS 5.68% ALB 2.43% ZBCN 9.89% MMM 1.70%BX",
        "이번 주 시장에서 기대할 사항: AAPL, PLTR, AMD, SMCI, SHOP, 수입, 채용 보고서 등 이번 주에는 시장에서 가장 주목받는 일부 기술 회사의 결과가 나올 것이며 주요 노동 시장 보고서는 다음과 같은 정보를 제공할 수 있습니다.",
        "뉴욕 - 스톡 사진 Stocktwits 뉴스 데스크 · Stocktwits 2026년 11월 1일 게시 | 오전 9시 6분(EST) 공유 · Add us on Apple과 Palantir는 월요일 폐장 후 보고할 예정이며, 화요일에는 AMD와 Super Micro Computer가 뒤를 이었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.07%, 1.77%, 3.47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.07%, 1.77%, 3.47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "95a7d701f98fd93e608e",
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
      "headline": "1 Reason Alphabet Stock Is Worth Buying on This Pullback",
      "headlineKo": "이번 하락세에 알파벳 주식을 매수할 가치가 있는 1가지 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1830baf422f835401c352331e05cdb31ddfd47014d06090f99e72b915f797d0",
        "publishedAt": 1793539200,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이번 하락세에 알파벳 주식을 매수할 가치가 있는 1가지 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Google의 모회사인 The Motley Fool Shares of Alphabet ( GOOG -1.45% ) ( GOOGL -1.40% ) 에 참여했습니다.",
        "3분기 실적 발표 다음날인 29일.",
        "검색 매출 성장 둔화와 인공지능(AI)에 대한 막대한 지출이 두 가지 주요 원인인 것으로 보인다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $51 billion, $9 billion, $279.84 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $51 billion, $9 billion, $279.84 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ad846c83175cb415790d",
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
      "headline": "Beyond Nvidia And Hyperscalers: Beth Kindig Sees A $1 Trillion AI Infrastructure Opportunity For These Stocks",
      "headlineKo": "Nvidia와 하이퍼스케일러를 넘어: Beth Kindig는 이러한 주식에 대해 1조 달러 규모의 AI 인프라 기회를 봅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d0f9488638545ea0b9c50d1b04b8ca3a7bf464a32b3aa19360680304a3ef56e",
        "publishedAt": 1793537523,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 및 하이퍼스케일러를 넘어: Beth Kindig는 이러한 주식에 대해 1조 달러의 AI 인프라 기회를 봅니다. AI 에이전트 동향 뉴스 수익 전체 DIA 1.07% SPY 1.77% QQQ 3.47% 추세 TRUMP 7.00% REGN 13.33% EBS 5.68% ALB 2.43% ZBCN 9.63%",
        "Nvidia와 하이퍼스케일러를 넘어서: Beth Kindig는 이러한 주식에 대해 1조 달러 규모의 AI 인프라 기회를 봅니다. Kindig는 최근 노트에서 AI 지출의 변화가 서버, CPU,",
        "조명된 데이터 경로가 있는 미래형 회로 기판에 배치된 AI라고 표시된 인공 지능 프로세서 칩의 디지털 방식으로 생성된 3D 렌더링입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1 Trillion, 1.07%, 1.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1 Trillion, 1.07%, 1.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ed252772e77c262f1a23",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet Gets Kicked Out of the $4 Trillion Club After Its Record $505 Billion Drop. Here's What History Says Could Come Next",
      "headlineKo": "알파벳은 기록적인 5050억 달러 하락 후 4조 달러 클럽에서 쫓겨났습니다. 역사가 다음에 올 수 있다고 말하는 것은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c1b23a310f1b2a7a3a9f692c902cb078b09d58c6c1473e39425a2c3e4df0faf",
        "publishedAt": 1793536500,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳은 기록적인 5050억 달러 하락 후 4조 달러 클럽에서 쫓겨났습니다.",
        "역사가 다음에 올 수 있다고 말하는 것은 다음과 같습니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Alphabet ( GOOG -1.45% ) ( GOOGL -1.40% )은 목요일에 모든 잘못된 이유로 역사를 만들었습니다.",
        "해당 세션에서 12.6% 하락한 후 시가총액이 5,050억 달러라는 엄청난 손실을 입었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $4 Trillion, $505 Billion, $505 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4 Trillion, $505 Billion, $505 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3618b340cbb3b789db25",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "SanDisk CEO David Goeckeler Sees ‘Tremendous Pull’ as Customers Lock in Supply and Come Back for More — Pipeline Runs Through 2030",
      "headlineKo": "SanDisk CEO David Goeckeler는 고객이 공급을 확보하고 더 많은 것을 위해 돌아오면서 '엄청난 수요 증가'를 보고 있습니다. 파이프라인은 2030년까지 운영됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddad07457d45b58582acc92fe32dc93c233b390ca8939e279fe99617b2d14d3a",
        "publishedAt": 1793536205,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SanDisk CEO David Goeckeler Sees ‘Tremendous Pull’ as Customers Lock in Supply and Come Back for More — Pipeline Runs Through 2030",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
      ]
    },
    {
      "id": "5f946293e6e5d4021b55",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Palantir Stock a Buy?",
      "headlineKo": "Palantir 주식은 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=503ecd2b8df3aa85ccbcd101a79664aec860a4edfe88d2ab555aefd31f181c45",
        "publishedAt": 1793534820,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Palantir( PLTR -6.27% )는 2022년 사상 최저치보다 3,200% 이상 상승한 AI 붐에서 가장 성공적인 주식 중 하나입니다.",
        "최근 몇 주 동안 지난 몇 번의 거래 세션에서 발생한 손실 중 일부를 회복하기 전에 하락세를 보였습니다.",
        "투자자들의 질문은 이러한 하락세가 Palantir 주식을 매수하게 만드는지 아니면 투자자들이 방관해야 하는지 여부입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, 95%, 84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, 95%, 84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "689ffbde0734ee85ad38",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "GOOGL Market Cap Drops Nearly $500B After Google Search Fell Below 50% Of Alphabet's Revenue — David Sacks Explains Why That's A Good Thing",
      "headlineKo": "Google 검색이 Alphabet 매출의 50% 미만으로 떨어진 후 GOOGL 시가총액이 약 5,000억 달러 감소 — David Sacks가 이것이 좋은 이유를 설명합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=216b93369ccde2517bdf8a4cddf06ea927c3d2fdaa748421169e5303eb55caa6",
        "publishedAt": 1793533440,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google 검색이 Alphabet 수익의 50% 아래로 떨어진 후 GOOGL 시가총액이 약 5,000억 달러 하락 — David Sacks가 이것이 좋은 이유를 설명합니다. AI 에이전트 Trending News Earnings All DIA 1.07% SPY 1.77% QQQ 3.47% Trending TRUMP 6.74% REGN 13.33% E",
        "Google 검색이 Alphabet 매출의 50% 미만으로 떨어진 후 GOOGL 시가총액이 약 5000억 달러 감소 - David Sacks가 이것이 좋은 이유를 설명합니다. Sacks는 투자자들이 Alphabet의 전체 매출에서 Google 검색이 차지하는 비중을 너무 많이 읽고 있을 수 있다고 말했습니다.",
        "노트북 화면에 Google 검색 페이지가 표시됩니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $500, 50%, 1.07% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $500, 50%, 1.07% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f44ba7ece204799ef1f6",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "LITE",
      "relatedTickers": [
        "LITE",
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
      "headline": "Lumentum Earnings Preview: The AI Boom Is Already Priced In",
      "headlineKo": "Lumentum 수익 미리보기: AI 붐은 이미 가격에 반영되었습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=44cb3cbacafe19fcb3f1b427b49a04c93032dae4785ed4920b7ecd656356c91d",
        "publishedAt": 1793533200,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum 주식: 수익 미리보기, AI 붐은 이미 가격에 반영되었습니다(NASDAQ:LITE) | 알파 찾기 Lee Bailey 132 추종자 팔로우 요약 Lumentum Holdings는 종가 $840.70보다 훨씬 낮은 주당 $400의 공정 가치로 매도 등급을 받았습니다.",
        "LITE의 레이저 사업은 강력한 해자를 갖고 있지만 현재의 공급 부족과 높은 마진은 생산 능력이 확장됨에 따라 지속되지 않을 것 같습니다.",
        "NVIDIA의 20억 달러 투자 및 OCS 성장은 긍정적인 측면을 제공하지만 고객 교섭력과 필수 재투자로 인해 지속 가능한 무료 현금 흐름이 제한됩니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $400, $840.70, $2 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $400, $840.70, $2 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9f2cdf8a9422c4aff1bd",
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
      "headline": "Lab monkey prices reportedly jumped from $3K to $20K. Now a Palantir billionaire wants to breed 30,000 of them in the US",
      "headlineKo": "연구실 원숭이 가격은 3,000달러에서 20,000달러로 급등한 것으로 알려졌습니다. 이제 Palantir 억만장자는 미국에서 30,000마리를 번식시키고 싶어합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e43dad412720bfe1833d233d39d09d7f1c1c9e0eebcb84c44e2053d8da67860b",
        "publishedAt": 1793532600,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 PLTR의 사업과 관련된 'Lab monkey prices reportedly jumped from $3K to $20K. Now a Palantir billionaire wants to breed 30,000 of them in the US' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "dca8de5058cab8dad94e",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel: PC Demand Destruction Meets AI Supply Headwinds-Profit Taking Continues",
      "headlineKo": "인텔: PC 수요 파괴와 AI 공급 역풍이 만나 이익 실현이 계속되고 있습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=648a904926833833fe9ba71f0f047adaeaee6929826c2144f25222c8b82192b0",
        "publishedAt": 1793532536,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔 주식: PC 수요 파괴와 AI 공급 역풍이 이익실현을 만나다 (NASDAQ:INTC) | Seeking Alpha Juxtaposed Ideas 팔로워 16.33K 팔로우 요약 진행 중인 메모리 공급 부족으로 인한 PC 수요 파괴는 2027년까지 지속될 수 있습니다.",
        "공급이 제한된 Intel 3 Granite Rapids와 활용도가 낮은 18A 플랫폼은 x86 서버 CPU 시장 점유율의 잠재적인 완화를 의미합니다.",
        "가파른 붕괴를 촉발한 2026년 4분기 가이던스에도 불구하고 INTC의 고가인 59.95배 P/E는 추가 하락/통합 위험을 의미합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, $371.92 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 50%, $371.92 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "14be2bdca94d2b16aa8a",
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
      "headline": "Alphabet Says Its AI Spending Will Keep Rising. 2 Data Center Stocks to Buy and Hold Through 2030.",
      "headlineKo": "알파벳은 AI 지출이 계속 증가할 것이라고 밝혔습니다. 2030년까지 매수 및 보유할 데이터 센터 주식 2개.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=355bf39aeddebf207bcbbf61cb5fc214f472252642f45e2bc47c00cbeef81403",
        "publishedAt": 1793527921,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳은 AI 지출이 계속 증가할 것이라고 밝혔습니다. 2030년까지 매수 및 보유할 데이터 센터 주식 2개."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "4ea7cfb53a2fc8cad1e5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "PLTR",
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
      "headline": "What to Expect in Markets This Week: Apple, Palantir Report; October Jobs Data Lands",
      "headlineKo": "이번 주 시장에서 기대할 사항: Apple, Palantir 보고서; 10월 채용정보 데이터 랜드",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df0e9686ac1a54a3e8ac0a0a6201c817b83c466f4898d8475de63e8fd77a6489",
        "publishedAt": 1793527200,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이번 주 시장에서 기대할 사항: Apple, Palantir 보고서; 10월 일자리 데이터 상륙 주요 뉴스 Nasdaq은 수익 후 알파벳 하락으로 하락했습니다. 경제는 건강한 속도로 계속 성장합니다. Anthropic이 돈을 버는 방법 미국의 1달러를 가진 가족 수는 얼마나 됩니까?",
        "투자자들은 이번 주에 Apple의 새로운 CEO인 John Ternus의 연설을 듣게 될 것입니다.",
        "Karl Mondon / AFP via Getty Images Close AI는 지난 주 많은 뉴스 사이클을 주도했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1 Million, 5.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1 Million, 5.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e88df904ed4a976ce338",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Should You Buy Sandisk Stock at About 5 Times Its Guided Earnings?",
      "headlineKo": "가이드 수익의 약 5배에 Sandisk 주식을 구매해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ccffeb4298bafa1a447197f33ae1cc46df4a0ee7f44b52feea29f3cb03a94059",
        "publishedAt": 1793525821,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "가이드 수익의 약 5배에 Sandisk 주식을 구매해야 합니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Sandisk(SNDK -13.47%)에 합류하세요. 10월에 두 가지 소식이 있었습니다.",
        "플래시 메모리 전문기업인 이 회사의 매출은 2019년 10월 말까지 연속 23% 증가해 110억 달러를 기록했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5 Times, 23%, $11.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5 Times, 23%, $11.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "404916b40cde7e26d757",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Technologies (PLTR) to report earnings tomorrow: here is what to expect",
      "headlineKo": "Palantir Technologies(PLTR), 내일 실적 보고: 예상되는 내용은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73696fa6021e98cb56f1c064d3d406b61243ef2a660b9e99b04d846cdc3fd2ba",
        "publishedAt": 1793524500,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Technologies (PLTR) to report earnings tomorrow: here is what to expect",
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
      "id": "f3baf1b5ab3123b6915f",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Here's Where I Think Meta Stock Will Be in 2030",
      "headlineKo": "2030년에 메타 스톡이 있을 것이라고 생각하는 곳은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df03913e4ea5c1ff59dac50c7de4da7ee105c83a6049e73fe1d7b6f3c2d44fa8",
        "publishedAt": 1793523421,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2030년에 메타 스톡이 있을 것이라고 생각하는 곳은 다음과 같습니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Meta Platforms의 Motley Fool Shares에 참여하세요( META -1.53% ). 제가 쓴 글을 쓰는 동안 비용은 약 $612입니다.",
        "3분기 매출이 전년 동기 대비 26% 증가한 646억 달러를 기록했음에도 불구하고 주가는 2025년 8월 최고 기록인 790달러에서 약 22% 하락했습니다.",
        "격차의 상당 부분은 아마도 지출과 신규 주식으로 귀결될 것입니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 22%, $790,, 26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 22%, $790,, 26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b57c183cb9299657b918",
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
      "headline": "Anthropic Is “Reduplicating AWS” as It Rents Its Own Data Centers. Amazon Reports Thursday",
      "headlineKo": "Anthropic은 자체 데이터 센터를 임대하면서 \"AWS를 복제\"하고 있습니다. 아마존 보고서 목요일",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e79526698cfab6dac797af68e13a3195a8ba1cf0a6e5dc82a9be25b47b043edb",
        "publishedAt": 1793519212,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Anthropic은 자체 데이터 센터를 임대하면서 \"AWS를 복제\"하고 있습니다.",
        "아마존 보고서 목요일 | TIKR.com General Investing Anthropic은 자체 데이터 센터를 임대하면서 \"AWS를 중복\"하고 있습니다.",
        "Amazon 보고서 목요일 Gian Estrada • 6분 읽기 검토자: David Hanson 최종 업데이트: 2026년 11월 1일 Getty Images의 cyano66 및 Getty Images의 Petrovich9 Canva를 통한 서명 핵심 사항 Anthropic의 S-1이 10월에 공개되었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $110 billion, $132 billion, $220 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $110 billion, $132 billion, $220 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3b7bbe3cbe0af7acd816",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "META",
      "relatedTickers": [
        "GOOGL",
        "META",
        "NVDA"
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
      "headline": "Josh Brown: Meta Could Become “a Cash Spigot” That Makes Nvidia Look Expensive",
      "headlineKo": "Josh Brown: 메타는 Nvidia를 비싸게 보이게 만드는 \"현금 마개\"가 될 수 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c200f9d99312f45e0eac115dab8519cf030e196c1822267b63d298ba4854eb4",
        "publishedAt": 1793518177,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Josh Brown: 메타는 Nvidia를 비싸게 보이게 만드는 \"현금 마개\"가 될 수 있습니다 | TIKR.com 일반 투자 Josh Brown: 메타는 Nvidia를 비싸게 보이게 만드는 \"현금 마개\"가 될 수 있습니다 Gian Estrada • 6분 읽기 검토자: David Hanso",
        "그는 AI 에이전트에 대한 Meta의 추진을 위협 중 하나로 꼽았습니다.",
        "Brown은 또한 최고의 AI 모델과 자체 컴퓨팅을 갖춘 회사의 두 가지 공개 사례로 Meta와 Alphabet을 꼽았습니다. 이는 Meta가 그가 설명했던 AI 연구소보다 그의 사례에 더 적합하게 만듭니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $29.68, $42.30, $3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $29.68, $42.30, $3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "10b87b6eeccc20854a04",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Nvidia Q3 FY2027 Preview: The Fabless Model Just Got A $279 Billion Footnote",
      "headlineKo": "Nvidia Q3 FY2027 미리보기: Fabless 모델은 2,790억 달러의 각주를 받았습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=103e92aac81d8a6c4e2d9aa5369a1008822986727f510206c0e921d4aa8ceb55",
        "publishedAt": 1793512167,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia Q3 FY2027 미리보기: Fabless 모델은 2,790억 달러의 각주를 기록했습니다(NASDAQ:NVDA) | Alpha Forward Analytics 추구 550명의 팔로워 팔로우 요약 NVIDIA는 기본 c에서 255달러의 매수 등급을 유지하면서 구조적 마진 선두주자로 남아 있습니다.",
        "3분기 수익은 매출이 약 1,130억 달러, 총마진이 약 74.5%, EPS가 $2.60로 예상됩니다. 수요가 아닌 공급이 제한 요인이다.",
        "대차대조표 조사는 매우 중요합니다. 공급 약정 금액 2,790억 달러, DSO 증가, 재고 구축은 자산 경량화에서 자본 집약적 역학으로의 전환을 의미합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $279 Billion, $255, $113 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $279 Billion, $255, $113 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "66313ba0d255d75828c7",
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
      "headline": "AMZN Q3 deep dive: cloud surge and AI investments drive mixed market reception",
      "headlineKo": "AMZN Q3 심층 분석: 클라우드 급증 및 AI 투자로 인해 혼합된 시장 수용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0123324ff65107780545b5a52c13947e2a6ce969a318cd3ea8b36cca30db2819",
        "publishedAt": 1793507700,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 AMZN의 사업과 관련된 'AMZN Q3 deep dive: cloud surge and AI investments drive mixed market reception' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "99384f2522e5c8f1b836",
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
      "headline": "Tesla's Progress Still Falls Short Of Its Price",
      "headlineKo": "Tesla의 발전은 여전히 ​​가격에 미치지 못합니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e3cb0b6620643b85dbbd470b4ce727ae3a369eb734eb2199427f191dadfd50e2",
        "publishedAt": 1793505211,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla의 발전은 여전히 ​​가격에 미치지 못합니다(NASDAQ:TSLA) | Alpha Motti Sapir 찾기 팔로워 1.52K 팔로우 요약 Tesla는 지속적인 운영에도 불구하고 가치 평가가 현재 수익성 및 재정적 수익과 분리되어 보류 상태를 유지합니다.",
        "납품 성장이 둔화되고 자동차 마진은 역사적 최고치보다 훨씬 낮으며 AI, 에너지 및 로봇 공학 이니셔티브에 대한 상당한 CapEx가 증가하고 있습니다.",
        "에너지 저장 및 FSD 구독이 증가하고 있지만 아직 핵심 자동차 사업의 압박을 상쇄할 만큼 반복적이고 실질적인 이익을 제공하지 못하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $20 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $20 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "aa79547458eac4bdcf3a",
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
      "headline": "Micron's Chinese Rival CXMT Just Grew Its Sales More Than Sevenfold. I'd Buy Micron Stock Now.",
      "headlineKo": "마이크론의 중국 라이벌 CXMT 매출이 7배 이상 늘었습니다. 나는 지금 마이크론 주식을 사고 싶습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5c7f23a69be55171742486985b32cf863e0a92017973c23117b898bc866b6c60",
        "publishedAt": 1793503981,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론의 중국 라이벌 CXMT 매출이 7배 이상 늘었습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 참여하세요. 메모리 칩 제조업체인 Micron Technology(MU -5.30%)의 주식은 몇 달 동안 힘든 시간을 보냈습니다.",
        "제가 글을 쓰는 시점에 약 892달러로 주가는 6월 말 종가 대비 약 26% 하락했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $892, 26%, 613% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $892, 26%, 613% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "2240b197470270d6ab16",
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
      "headline": "Vertiv: 3 Key Takeaways for Long-Term Investors",
      "headlineKo": "Vertiv: 장기 투자자를 위한 3가지 핵심 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d61962c3023f245b90d7956fd7d0703c3ac8d3588d7603ae16da57f08e716c3c",
        "publishedAt": 1793499717,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv: 장기 투자자를 위한 3가지 주요 시사점 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류하세요. 10월 19일에 열린 2026년 3분기 실적 발표에 참여하세요.",
        "2026년 28일, Vertiv(VRT -5.46%)는 43억 달러의 순매출을 보고했습니다.",
        "인공 지능 인프라에 대한 수요 급증으로 인해 전문 전력 및 열 관리 시스템의 채택이 계속해서 가속화되고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.46%, $4.3 billion, 100% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.46%, $4.3 billion, 100% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "31f7ba2c51b686a30e4d",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Prediction: This Will Be Intel's Stock Price by Year-End 2027",
      "headlineKo": "예측: 2027년 연말까지 인텔의 주가가 될 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83abd019783543ee3eb8a066c7d22f62e6837644c785c19c2d34ac70e2732fca",
        "publishedAt": 1793499600,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 2027년 말까지 인텔의 주가가 될 것 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 2년 전만 해도 인텔을 건드리고 싶어하는 사람은 아무도 없는 것 같았습니다( INTC -28.58% ).",
        "기본적으로 현대 칩 산업을 발명한 회사는 2024년에 188억 달러의 순 손실을 기록하면서 인공지능(AI) 분야에서는 엔비디아, MA 분야에서는 대만 파운드리들에 뒤처지는 등 자체 경고 이야기로 바뀌었습니다.",
        "정부가 인텔 지분을 매입했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $18.8 billion, $65.76, $26.31 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $18.8 billion, $65.76, $26.31 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bf46bb095531a135a066",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel Erupts, And It's About Time",
      "headlineKo": "인텔의 폭발, 이제 때가 됐다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5ebcf91723e03662ab929a6984593ec6c90a352abfce5f92cf781a1b4165e2ac",
        "publishedAt": 1793497320,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel의 폭발, 이제 때가 왔습니다(NASDAQ:INTC) | 알파 찾기 Oliver Rodzianko 팔로워 7.36K 팔로우 요약 Intel(INTC)은 마지막 분석 이후 35% 하락했으며 현재 공정 가치 근처에 거래되고 있지만 아직 매수 수준은 아닙니다.",
        "3분기에는 강한 매출 성장을 보였지만 약한 4분기 지침, 재고 감소, 공급 제약으로 인해 기업 심리와 수익 기대가 압박을 받고 있습니다.",
        "INTC의 제조 중심 모델은 단기적인 순환성 위험을 야기합니다. 나는 장기 포지션을 고려하기 전에 $50 미만, 이상적으로는 $40 미만의 더 깊은 가치를 봅니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 35%, $50,, $40, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 35%, $50,, $40, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9dd4c45b3c2022f3b43c",
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
      "headline": "Microsoft (MSFT) Lands $25 Billion Bond Deal As AI Push Deepens",
      "headlineKo": "마이크로소프트 (MSFT), AI 추진에 따라 250억 $ 규모의 채권 거래 성사",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca1077f52aa08f87115a6058e806fb5c89fa7db0e774c6b5ebdc65e2d4afeea0",
        "publishedAt": 1793495421,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 MSFT의 사업과 관련된 'Microsoft (MSFT) Lands $25 Billion Bond Deal As AI Push Deepens' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "c7b7a55e173d3f223fd5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Sandisk (SNDK) Stock Sees Modest Fair Value Cut As Analysts Weigh AI Demand",
      "headlineKo": "분석가들이 AI 수요를 평가함에 따라 Sandisk(SNDK) 주식은 적당한 공정 가치 감소를 확인합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef4164f8d2cb0fafcdc44e24e62684ad526fa0c96ab9e2ce8e48d6b7a88df659",
        "publishedAt": 1793495387,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk (SNDK) Stock Sees Modest Fair Value Cut As Analysts Weigh AI Demand",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "a216b01c4783c8897102",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "PWR Q3 deep dive: broad-based backlog growth and supply chain discipline drive guidance boost",
      "headlineKo": "PWR Q3 심층 분석: 광범위한 백로그 증가 및 공급망 규율 추진 지침 강화",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4b01c1c33b855232b9d19007b2575fcac1f2426cf7f7a5eea2046733483dc4f",
        "publishedAt": 1793488980,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "PWR Q3 deep dive: broad-based backlog growth and supply chain discipline drive guidance boost",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "PWR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PWR에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "991337b25ca4056de65b",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "STX",
      "relatedTickers": [
        "QQQ",
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
      "headline": "Seagate: The Real Risk Isn't Toshiba, It's The 2028 Supply Wave (Downgrade)",
      "headlineKo": "Seagate: 진짜 위험은 Toshiba가 아니라 2028년 공급 물결입니다(다운그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d2c790ea13489ecf284713cf69cf1c23568e47798e28c3451632f3a9a083dcf5",
        "publishedAt": 1793486591,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate 주식: 실제 위험은 Toshiba가 아니라 2028년 공급 물결입니다(NASDAQ:STX) | 알파 찾기 Gil Rotstein 488 팔로어 요약 팔로우 요약 Seagate는 주식이 이제 ~$640의 공정 가치를 반영하므로 Strong Buy에서 Hold로 다운그레이드되었습니다.",
        "현재 기록적인 마진은 HAMR 기술뿐만 아니라 공급 부족으로 인해 발생합니다. 이러한 부족 현상은 산업 생산 능력이 확대됨에 따라 2028년에는 완화될 것으로 예상됩니다.",
        "합의에 따르면 마진은 계속 상승하지만 2028년 Western Digital, Toshiba 및 공급업체의 공급 증가는 가격 결정력과 수익 상승을 제한할 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $640,, 440%, $117, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $640,, 440%, $117, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ac1edcda26b87a6c7a3b",
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
      "headline": "The 5 most interesting analyst questions from Alphabet’s Q3 earnings call",
      "headlineKo": "Alphabet의 3분기 실적 발표에서 가장 흥미로운 5가지 분석가 질문",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=81e60a7b2c710b3723713890a18305d28d35671f05876ba66742b35337005985",
        "publishedAt": 1793482260,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "The 5 most interesting analyst questions from Alphabet’s Q3 earnings call",
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
      "id": "e4cf2d073ed6e53fb733",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "After Meta, Could These Be Wall Street’s Next Blockbuster Stock Splits?",
      "headlineKo": "메타 이후, 이것이 월스트리트의 다음 블록버스터 주식 분할이 될 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2db57f22e7203ff3914635076defa5ea786c69521259cb944d56df9d61ca6d4a",
        "publishedAt": 1793479982,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta 이후, 이것들이 월스트리트의 다음 블록버스터 주식 분할이 될 수 있을까요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Join The Motley Fool 향후 몇 년 내에 주식 분할 매니아가 월스트리트를 인수할 수 있을까요?",
        "한편으로 많은 기업들이 인공지능 (AI) 을 활용하고 있으며 주가가 치솟아 블록버스터 주식 분할의 물결을 일으킬 가능성이 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.53%, 5.30%, 2.14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 1.53%, 5.30%, 2.14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "출하 지연 기간",
        "재고와 리드타임",
        "매출총이익률·대체 공급처"
      ]
    },
    {
      "id": "da2a254f75cb48c6de1a",
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
      "headline": "Taiwan Semiconductor Manufacturing (TSM) Draws New Sunbelt Real Estate Fund Around Phoenix Fabs",
      "headlineKo": "대만 반도체 제조 (TSM), 피닉스 팹 주변 신규 선벨트 부동산 펀드 유치",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c869f047ab09287a60c5a32300c5b57c7168fc6de437545b887b2290306ddd40",
        "publishedAt": 1793477366,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 TSM의 사업과 관련된 'Taiwan Semiconductor Manufacturing (TSM) Draws New Sunbelt Real Estate Fund Around Phoenix Fabs' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "13f349f7fe7707be70f9",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "3 Numbers to Watch to Know if Meta Platforms' AI Spending Is Paying Off",
      "headlineKo": "메타 플랫폼의 AI 지출이 성과를 거두고 있는지 알아보기 위해 주목해야 할 3가지 수치",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=62cddd48a770c1431a793e5aeb0e2d9d84be3948e899f950f9f2fcb839893afe",
        "publishedAt": 1793474460,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타 플랫폼의 AI 지출이 성과를 내고 있는지 확인해야 할 3가지 사항 | The Motley Fool 접근성 도움말 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % 가입 The Motley Fool Mark Zuckerberg, Meta Platforms (META -1.53%) 설립자 겸 CEO, v",
        "따라서 2026년 자본 지출 (capex) 로 $ 1,350억 ~ $ 1,450억의 지출이 계획되어 있어 상한선이 없는 것으로 보인다.",
        "내년에는 그 숫자가 훨씬 더 늘어날 것입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $135 billion, $145 billion, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $135 billion, $145 billion, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "72fd76cf82864a5e012e",
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
      "headline": "5 insightful analyst questions from Microsoft’s Q3 earnings call",
      "headlineKo": "Microsoft의 3분기 실적 발표에서 나온 통찰력 있는 분석가의 질문 5가지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1fe8269cf16073e3cd8dff3d3a31e011dbefcecd9a7f283a6fa1ea73e26a0584",
        "publishedAt": 1793471249,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "5 insightful analyst questions from Microsoft’s Q3 earnings call",
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
      "id": "db8371e1281bbccb718c",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Lumentum Is Up 11% in a Week. Will Marvell Pay “Close to $100 Billion”?",
      "headlineKo": "Lumentum은 일주일 만에 11% 상승했습니다. Marvell이 \"1000억 달러에 가까운\" 금액을 지불하게 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5ca7ddf54214de92b35c22baa24864ec3b01f8d92b4063dfa4f2e141a2b0952",
        "publishedAt": 1793469855,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell이 \"1000억 달러에 가까운\" 금액을 지불하게 될까요?",
        "| TIKR.com General Investing Lumentum은 일주일 만에 11% 상승했습니다.",
        "Marvell이 \"1000억 달러에 가까운\" 금액을 지불하게 될까요?"
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, $100 Billion, $100 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MRVL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MRVL에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 11%, $100 Billion, $100 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "계약 기간·최소구매 조건",
        "연도별 매출 인식",
        "수주잔고·취소 조건"
      ]
    },
    {
      "id": "a51e0807f713a58acf0e",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC"
      ],
      "relatedEntities": [],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "INTC Q3 deep dive: strong data center growth offsets PC challenges, outlook pressured by supply constraints",
      "headlineKo": "INTC 3분기 심층 분석: 강력한 데이터 센터 성장이 PC 문제를 상쇄하고 공급 제약으로 인해 압박을 받는 전망",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9db1dbba34210ad1638e3d5a50eb26ec0ef179d8f8f9a2d1fa4e51a5ca7a365f",
        "publishedAt": 1793469329,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "INTC Q3 deep dive: strong data center growth offsets PC challenges, outlook pressured by supply constraints",
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
      "id": "3f5af75ea3b72052e467",
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
      "headline": "Quanta Services (PWR) Stock Cools As Q3 Earnings Reset The Debate",
      "headlineKo": "3분기 실적이 논쟁을 재설정함에 따라 Quanta Services(PWR) 주식이 냉각됨",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb55b62558943cdd8d5bf3073a53a53cddca2abfed3afb6c2fc7e73e7d1924b3",
        "publishedAt": 1793466781,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services (PWR) Stock Cools As Q3 Earnings Reset The Debate",
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
      "id": "183ae226f85d318a36fb",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Sandisk Is Splitting Its Stock 8-for-1. History Says What Usually Happens to Stocks After a Split Announcement.",
      "headlineKo": "Sandisk는 주식을 8대 1로 분할하고 있습니다. 역사는 분할 발표 후 주식에 일반적으로 어떤 일이 발생하는지 알려줍니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6d2bd0e8d9fdca32e145b9bac650e82bd67137a9f4a7dd5353cd7dc9aae1b35",
        "publishedAt": 1793464622,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk Is Splitting Its Stock 8-for-1.",
        "History Says What Usually Happens to Stocks After a Split Announcement.",
        "| The Motley Fool Accessibility Help ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Sandisk ( SNDK -13.47% ) gave investors two pieces of news on Thursday, Oct."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 23%, $11.0 billion, 26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 23%, $11.0 billion, 26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f87340c6ad9a1e22b938",
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
      "headline": "Amazon Is Borrowing Against Its Own Data Center Gear to Fund More Data Centers",
      "headlineKo": "Amazon은 더 많은 데이터 센터에 자금을 지원하기 위해 자체 데이터 센터 장비를 빌리고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66687a88aa2277b590ef30830abec06562cd19731444b650782099b696544d0f",
        "publishedAt": 1793461684,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $80.0 billion, 1.41%, $240.35, $240.83, $80 Billion, 29%, $168.3 billion, $42.4 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Amazon Is Borrowing Against Its Own Data Center Gear to Fund More Data Centers' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e870ac582b3ab561df69",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel Has a Massive Warning for AMD Stock Investors. Is It Time to Book Profits Before Nov. 3?",
      "headlineKo": "Intel은 AMD 주식 투자자들에게 대규모 경고를 보냅니다. 11월 3일 이전에 수익을 장담해야 할 때인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83aad663f6eaa937cae162578455c434bf35bcd03a7f792250bcb6d0d89c5056",
        "publishedAt": 1793461321,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel은 AMD 주식 투자자들에게 대규모 경고를 보냅니다.",
        "11월 이전에 수익을 장담해야 할 때인가?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Intel( INTC -28.58% )이 10월 3분기 실적을 발표했습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 28%, 10.88%, 23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 28%, 10.88%, 23% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a52b53e1a7e461208008",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Are Wall Street Analysts' Target Price for Alphabet Stock?",
      "headlineKo": "월스트리트 분석가들의 알파벳 주식 목표 가격은 얼마입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=72860c2c75e0e7a65411feb1c3694f34c79b44e666d0262c304f35db4a5c6f70",
        "publishedAt": 1793460116,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트 분석가들의 알파벳 주식 목표 가격은 얼마입니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "bb2e93ca6ad8d5fd567d",
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
      "headline": "Here’s What a $1,000 Investment in Oracle Stock Will Be Worth by 2030",
      "headlineKo": "2030년까지 Oracle 주식에 대한 1,000달러 투자의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=110b7a55e8f24bf48f8b600b7440d9cf4f08a2e201df771209bb8a9bfc20c0db",
        "publishedAt": 1793459821,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2030년까지 Oracle 주식에 대한 1,000달러 투자의 가치는 다음과 같습니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Shares of Oracle( ORCL -6.37% )은 전체 시장에서 저조한 성과를 거두었습니다.",
        "인공지능(AI) 인프라 대기업이 10월 투자자의 날을 열었습니다.",
        "28일, 인상적인 장기 전망으로 인해 주가는 단일 세션에서 11% 급등했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, $30 billion, $130.67 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, $30 billion, $130.67 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "35f79db4f120dc46efc1",
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
      "headline": "Amazon (AMZN) Stock Slips As Q3 Earnings Reflect Profit Reset",
      "headlineKo": "3분기 실적에 이익 재설정이 반영되면서 아마존(AMZN) 주가 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0695abd2b2ec37bdf0c58d4d7d877fc43b97bfe3959d09aa8d382765634cee0b",
        "publishedAt": 1793459606,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon (AMZN) Stock Slips As Q3 Earnings Reflect Profit Reset",
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
      "id": "6b58e6a689ce6941834b",
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
      "headline": "The Nasdaq 100 Briefly Fell Into a Correction as the AI Trade Cracks",
      "headlineKo": "Nasdaq 100은 AI 거래가 균열됨에 따라 간략하게 수정되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ea29a0da0b3b89abc6b4f549a483d5fc1b3efe4007514bc9541ab6f3215222db",
        "publishedAt": 1793458446,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "나스닥 100은 AI 무역 균열로 잠시 조정에 빠졌습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,621.60 +0.45% Dow Jones 51,969.00 +0.34% Nasdaq 100 28,676.00 +0.94% Russell 2000 2,831.26 +0.61% S&P 500 7,621.60 +0.45% 다우존스 51,969.00 +0.34% 나스닥 100 28,676.00 +0.94% 러셀 20",
        "작성자: Omor Ibne Ehsan 2026년 10월 31일 게시, 오전 10:54(ET) · 3분 읽기 𝕏 f ⧉ 한 투자자가 Trade Desk 주식 보유자가 직면한 어려움을 반영하여 시장 가치의 급격한 하락과 씨름하고 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.45%, 0.34%, 0.94% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.45%, 0.34%, 0.94% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2cd82e53f7dfe515404d",
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
      "headline": "Is Vertiv Stock Safer Or Riskier Than A Year Ago?",
      "headlineKo": "Vertiv 주식은 1년 전보다 더 안전한가요, 아니면 위험한가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=966772707b28c5d6a4d544832cee47e4a4277b51507282f9919aa2ef997fc3c5",
        "publishedAt": 1793457363,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv 주식은 1년 전보다 더 안전한가요, 아니면 위험한가요?",
        "| Trefis는 Vertiv 주식이 1년 전보다 더 안전한가요, 아니면 더 위험한가요?",
        "2026년 10월 31일 · Trefis 팀 VRT YTD +43.6% SPY YTD +11.4% XLI YTD +8.5% VRT 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 43.6%, 11.4%, 8.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 43.6%, 11.4%, 8.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "04f8081efbfe9848cb3f",
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
      "headline": "ORCL Stock Has a Solid Base to Build on After Q1, Especially as Oracle Announces Key AI Partnerships",
      "headlineKo": "ORCL 주식은 특히 Oracle이 주요 AI 파트너십을 발표함에 따라 1분기 이후 구축할 수 있는 견고한 기반을 보유하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30a71a7ce7452d0dc8247baddd1ba6b5eedf72a8f50c59dabff8319ff4501f44",
        "publishedAt": 1793456877,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ORCL 주식은 특히 Oracle이 주요 AI 파트너십을 발표함에 따라 1분기 이후 구축할 수 있는 견고한 기반을 보유하고 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "d990a18f934d1c7043e8",
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
      "headline": "ORCL Stock Has a Solid Base to Build on After Q1, Especially as Oracle Announces Key AI Partnerships",
      "headlineKo": "ORCL 주식은 특히 Oracle이 주요 AI 파트너십을 발표함에 따라 1분기 이후 구축할 수 있는 견고한 기반을 보유하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30a71a7ce7452d0dc8247baddd1ba6b5eedf72a8f50c59dabff8319ff4501f44",
        "publishedAt": 1793456877,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 ORCL의 사업과 관련된 'ORCL Stock Has a Solid Base to Build on After Q1, Especially as Oracle Announces Key AI Partnerships' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "1117af9c65c09638097b",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Piper Sandler’s $400 Target Says Marvell’s Selloff Went Too Far",
      "headlineKo": "Piper Sandler의 400달러 목표는 Marvell의 매각이 너무 멀리 갔다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef71a4b3e0394793097b4c1ed1b370a47d361debabe4ac9f54c37827d67d027f",
        "publishedAt": 1793456670,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Piper Sandler의 400달러 목표는 Marvell의 매각이 너무 심했다고 말합니다 | TIKR.com General Investing Piper Sandler의 400달러 목표는 Marvell의 매각이 너무 멀리 갔다고 말합니다 Aditya Raghunath • 5분 읽기 검토자: Michael Douglass 마지막 업데이트 10월 31일",
        "Piper Sandler는 현재 가격보다 104% 높은 비중 확대 등급과 400달러 목표를 유지했으며 Lumentum의 레이저가 더 빠르고 저전력 AI 네트워크의 핵심이라고 지적했습니다.",
        "목표는 향후 12개월 동안 분석가들이 예상하는 수익의 약 71배에 해당하며, 이는 Marvell의 5년 최고치인 70배와 평균 33배보다 높습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $400, 41%, 104% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $400, 41%, 104% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b7ae7e1361c8219d8f90",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "AVGO",
        "COHR",
        "LITE",
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
      "headline": "Marvell Sinks 14% in a Week on Lumentum Talks: Chipmakers Like It “Don’t Have a Choice”",
      "headlineKo": "Marvell은 Lumentum Talks에서 일주일 만에 14% 하락: 칩 제조업체들은 \"선택의 여지가 없다\"고 좋아합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d24e99c282495f8443c811863b4c5d17e75bfdc67fc718bc7d172edff74db37b",
        "publishedAt": 1793455676,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell은 Lumentum Talks에서 일주일 만에 14% 하락했습니다: 칩 제조업체들은 “선택의 여지가 없습니다”를 좋아합니다 | TIKR.com General Investing Marvell은 Lumentum Talks에서 일주일 만에 14% 하락했습니다: 칩 제조사들은 \"선택의 여지가 없습니다\"라고 좋아합니다. Bobby Sankhagowit • 4분 읽기 R",
        "Lumentum의 레이저는 Marvell을 더 큰 Broadcom 경쟁자로 만들고 Coherent에게 Marvell 칩의 지원을 받는 경쟁자를 제공할 것입니다.",
        "거래는 Marvell 주식으로 지급될 것으로 알려졌으므로 주식 수를 기다릴 것입니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 14%, $83 billion, $3.93 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 14%, $83 billion, $3.93 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "70e0014c8e09da2bdd26",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Reddit stock plunges 29.2% as Google AI cuts US traffic",
      "headlineKo": "Google AI가 미국 트래픽을 줄임에 따라 Reddit 주가는 29.2% 급락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9f85c7e48aa4b886994caf0f599608837ba09ebea57b754c05362ad435311d9",
        "publishedAt": 1793455620,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Reddit stock plunges 29.2% as Google AI cuts US traffic",
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
      "id": "059e9a7c40d6090e247f",
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
      "headline": "5 revealing analyst questions from KLA Corporation’s Q3 earnings call",
      "headlineKo": "KLA Corporation의 3분기 실적 발표에서 공개된 분석가 질문 5가지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d58268e0697061fe576d2f7055b266e257070beefbc5007bd6fb1840e2e1195",
        "publishedAt": 1793455409,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "5 revealing analyst questions from KLA Corporation’s Q3 earnings call",
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
      "id": "70b922567411faf203c3",
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
      "headline": "Microsoft Offers Voluntary Exits to 60,000 Workers. After 37 Years, He Risks Losing a 401(k) Tax Break With One IRA Rollover",
      "headlineKo": "마이크로소프트, 직원 6만명에 자발적 퇴사 제안 37년 후 그는 한 번의 IRA 롤오버로 401(k) 세금 혜택을 잃을 위험이 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2eee27c4a6236fddde71963fb9ad73d7ff5064c6912a81239b4e055582f067e9",
        "publishedAt": 1793453631,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크로소프트, 직원 6만명에 자발적 퇴사 제안",
        "37년 후, 그는 한 번의 IRA 롤오버로 401(k) 세금 혜택을 잃을 위험이 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,587.20 −1.26% Dow Jones 51,795.00 −1.10% Nasdaq 100 28,409.60 −2.33% Russell 2000 2,814.05 −1.61% S&P 500 7,587.20 −1.26% 다우존스 51,795.00 −1.10% 나스닥 100 28,409.60 −2.33% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.2 million, $250,000, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.2 million, $250,000, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ca883763feba7d454702",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Alphabet (GOOGL) Stock Sees Fair Value Cut After Q3 Miss And Higher AI Spending",
      "headlineKo": "알파벳(GOOGL) 주식은 3분기 누락 및 AI 지출 증가로 공정 가치가 하락한 것으로 보입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3e209157950a55fbc24d02e6a67c612227dc484bd2ce37b43d69d1824da6e5ba",
        "publishedAt": 1793452380,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet (GOOGL) Stock Sees Fair Value Cut After Q3 Miss And Higher AI Spending",
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
      "id": "163c6087f080617f6749",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Jensen Huang Just Announced Fantastic News for Nvidia Stock Investors",
      "headlineKo": "Jensen Huang이 Nvidia 주식 투자자들을 위한 환상적인 소식을 발표했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ed0f94399f2c5e26b0857ec7b8ccd87643656cd4afc117995b0cf8247c75d20",
        "publishedAt": 1793451901,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang이 엔비디아 주식 투자자를 위한 환상적인 뉴스를 발표했습니다 | The Motley Fool Accessibility Help ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % The Motley Fool에 가입 월스트리트에서 가장 활발하게 진행되는 논쟁 중 하나는 예술적인지 여부입니다",
        "그렇지 않으면 일부 업계 리더는 매출과 수익 성장이 느려지고 주가가 하락할 수 있습니다.",
        "그러나 만약 그렇다면, 일부 AI 중심 기업은 여전히 실행할 여지가 충분합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.22%, 1.41%, $204.64 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.22%, 1.41%, $204.64 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0ddf5b9fedc061ae250b",
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
      "headline": "What to Expect From AMD’s Q3 Earnings",
      "headlineKo": "AMD의 3분기 수익에서 기대할 수 있는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a500832abf226b5803e931262a69b36eb9493ff6c8e160a58ef9d9daaec34b9f",
        "publishedAt": 1793451603,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What to Expect From AMD’s Q3 Earnings",
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
      "id": "02fc7de55ceafce76b48",
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
      "headline": "Lumentum: Buy Before Earnings And A Potential Takeover (Rating Downgrade)",
      "headlineKo": "Lumentum: 수익이 나기 전에 구매하고 인수 가능성이 있음(등급 다운그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4dfd0d58e1961aae83b1417cbc600c93a07e943b82302a36ec77a49dc6670185",
        "publishedAt": 1793448971,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum: 수익이 나기 전에 구매하고 인수 가능성이 있음(등급 다운그레이드)"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "c33ae1365e456e3cd2a1",
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
      "headline": "3 AI Infrastructure Stocks Retail Investors Are Watching After Google Search Shift",
      "headlineKo": "3가지 AI 인프라 주식 소매 투자자들이 Google 검색 변화 이후 주목하고 있는 곳",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f47e4bc9349c8cbc9ffa3ca6e38a1eb2fa228ae0797c3f5b6bfb3c3d0d6310b3",
        "publishedAt": 1793448629,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 GOOGL의 사업과 관련된 '3 AI Infrastructure Stocks Retail Investors Are Watching After Google Search Shift' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a19ae61da4ee8645f899",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Microsoft Q1: CROCI Says My 'Trim, Not Exit' Thesis Remains Firmly In Place",
      "headlineKo": "Microsoft Q1: CROCI는 내 'Trim, Not Exit' 논제가 확고하게 유지된다고 말합니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d60103053d338185d0af8a4a64cff73413e688c3d8034497265a07992bd10f7b",
        "publishedAt": 1793448422,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Q1: CROCI는 내 'Trim, Not Exit' 논제가 확고하게 유지된다고 말합니다(NASDAQ:MSFT) | 알파 찾기 Elizabeth Pramila 1.13K 팔로워 요약 팔로우 요약 Microsoft는 공격적인 AI CapEx가 현금 수익을 억제하고 클라우드 클라우드를 유지함에 따라 판매 상태를 유지합니다.",
        "CROCI는 과도한 자본 투자 주기와 마진 압박을 반영하여 2022년 28%에서 11%로 감소했습니다.",
        "2027년 1분기에는 19%의 높은 매출 및 순익 성장을 달성했지만, 지침에 따르면 COGS 및 OpEx는 매출 성장을 능가할 것입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 28%, 11%, 19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 28%, 11%, 19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "89d04985e5babfb0d08a",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock-Split Watch: GE Vernova Trades Above $890 With a $176 Billion Backlog. Is a Split Next?",
      "headlineKo": "주식 분할 관찰: GE Vernova는 1,760억 달러의 잔고로 890달러 이상 거래됩니다. 다음은 분할인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49fc70ba58d9eec96fe733b64f4be28a9bfce669d603894b6b69cb64d31719c5",
        "publishedAt": 1793448120,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "주식 분할 관찰: GE Vernova는 1,760억 달러의 잔고로 890달러 이상 거래됩니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 주당 기준으로 GE Vernova( GEV -3.38% )는 가장 비싼 주식 중 하나가 되었습니다.",
        "주식은 주당 890달러에 거래되며 시가총액은 2,370억 달러입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $890, $176 Billion, $237 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $890, $176 Billion, $237 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "395b9a890485ffa37511",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMD",
        "META",
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
      "headline": "OpenAI Cuts Funding Target Amid Meta, Microsoft Offerings, Anthropic IPO",
      "headlineKo": "OpenAI, 메타, Microsoft 제품, Anthropic IPO 중 자금 목표 축소",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0af0d0e59182795d34c58490bd039c51f3c7051c45200f82458623daefea61fd",
        "publishedAt": 1793447701,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 MSFT의 사업과 관련된 'OpenAI Cuts Funding Target Amid Meta, Microsoft Offerings, Anthropic IPO' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9f2da03fe32d506b0f33",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom Sinks 5.5% as Its $43 Billion Anthropic Backstop Meets an Intel-Led Chip Rout",
      "headlineKo": "Broadcom은 430억 달러 규모의 인류 백스톱이 Intel 주도 칩 라우팅을 만나면서 5.5% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8dc2623a1e1874eadc808a7c011499077df58cf4ce1b864f7bbb858135a1a3d",
        "publishedAt": 1793446685,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom은 430억 달러 규모의 인류 백스톱이 Intel 주도 칩 라우팅을 만나면서 5.5% 하락 | TIKR.com General Investing Broadcom은 430억 달러 규모의 인류 백스톱이 Intel 주도 칩 패배를 만나면서 5.5% 하락했습니다. Rexielyn Diaz • 5분 읽기 리뷰",
        "AI 반도체 매출은 지난 분기에 221% 증가한 167억 달러를 기록했으며, 경영진은 2027회계연도에 AI 매출 1,150억 달러를 목표로 하고 있습니다.",
        "금요일 칩 대패로 주가가 5.5% 하락했으며 현재는 Meta와 동일한 배수인 18.7배의 선도 수익으로 거래되고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5.5%, $43 Billion, $63 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.5%, $43 Billion, $63 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a3e8c6bcd4247102eaf7",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "META",
      "relatedTickers": [
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
      "headline": "Zuckerberg Says Meta’s “Core Business Is Strong.” S&P Still Cut Its Outlook to Negative",
      "headlineKo": "저커버그는 메타의 “핵심 사업이 강하다”고 말했다. S&P는 여전히 전망을 부정적으로 하향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6305495d1312cf251c271642469527687157cb97b9c849c54bb4364303805f91",
        "publishedAt": 1793446379,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "저커버그는 메타의 “핵심 사업이 강하다”고 말했다. S&P, 전망 여전히 부정적으로 하향 | TIKR.com General Investing Zuckerberg는 Meta의 \"핵심 사업이 강력하다\"고 말합니다. S&P는 여전히 부정적인 Rexielyn Diaz 전망을 하향 조정했습니다. • 5분 읽기 Revie",
        "3분기 매출은 26% 증가한 646억 달러였지만, 자본 지출 349억 달러가 영업 현금 흐름을 초과하여 잉여 현금 흐름이 마이너스 21억 2천만 달러를 기록했습니다.",
        "Meta는 기록적인 975억 달러의 자본 조달을 계획하고 Nvidia가 30억 달러를 투자하여 새로운 비의결권 주식 클래스를 만들었습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $22 billion, $71 billion, 26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $22 billion, $71 billion, 26% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0a620b5c68e7cb8cafcf",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meet the Brilliant AI Stock Obliterating Nvidia in 2026 With a Return of 44%",
      "headlineKo": "2026년에 44%의 수익률로 Nvidia를 압도하는 뛰어난 AI 주식을 만나보세요",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dcef16ea19de99613f9e3e2e7aadf799198554378c78216a51ccc635fe06511b",
        "publishedAt": 1793446140,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2026년에 44%의 수익률로 Nvidia를 압도하는 뛰어난 AI 주식을 만나보세요 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia(NVDA -4.22%)는 세계 최고의 그래픽 프로세스를 공급합니다.",
        "2023년 초부터 회사는 공급할 수 있는 것보다 더 많은 수요를 경험했으며, 이것이 바로 이 글을 쓰는 시점(10월 10일) 현재 시가총액이 3,600억 달러에서 5조 2천억 달러 이상으로 급증한 이유입니다.",
        "그러나 Nvidia는 이제 너무 커져서 최고의 이득이 백미러에 있을지도 모릅니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $360 billion, $5.2 trillion, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $360 billion, $5.2 trillion, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "006e8a8b4f47da414422",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "AMZN",
        "INTC"
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
      "headline": "Apple Leads Packed Earnings Calendar As Investors Eye Tech, Pharma Results",
      "headlineKo": "Apple, 투자자로서 꽉 찬 수익 캘린더 주도 Eye Tech, Pharma 결과",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=830af5c87daf35a8f602c2ec6680ca3553df23bdc7beabc0bcac73d5ef2dce14",
        "publishedAt": 1793444400,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple, 투자자로서 꽉 찬 수익 일정 주도 Eye Tech, Pharma 결과 | Seeking Alpha Wall Street Week Ahead 팔로워 87.09K 팔로우 주요 행사 미리보기인 Seeking Alpha의 Wall Street Week Ahead를 구독하여 시장에서 앞서 나가세요.",
        "뉴스레터는 다가오는 IPO, 투자자의 날, 수익 보고서 및 컨퍼런스 프레젠테이션을 포함하여 헤드라인을 장식할 가장 큰 이야기에 대한 정보를 계속 제공합니다.",
        "아마존(AMZN)과 인텔(INTC)이 지수를 끌어내린 또 다른 실망스러운 수익 보고서가 나온 이후 금요일에도 주식은 계속 하락했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8b74984edb37f833ba11",
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
      "headline": "Qualcomm Earnings Preview: Its $15B AI Target Still Doesn't Justify Today's Prices",
      "headlineKo": "Qualcomm 수익 미리보기: 150억 달러 규모의 AI 목표는 여전히 오늘날의 가격을 정당화하지 못합니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=64603d2ad227a174af26847836359df71ae1b323f11aede2e2702812d57ac37e",
        "publishedAt": 1793443050,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm 수익 미리 보기: 150억 달러 규모의 AI 목표는 여전히 오늘날의 가격을 정당화하지 못합니다 | 알파 리 베일리(Lee Bailey) 찾기 팔로워 132명 팔로우 요약 Qualcomm은 야망으로 인해 최근 가격보다 22% 낮은 적정 가치 추정치와 함께 145달러 이상의 매도 등급을 받았습니다.",
        "자동차 및 특허 라이센스는 고품질 성장을 주도하는 반면, 휴대폰 및 Apple 모뎀 수익은 프리미엄 Android 포지셔닝에도 불구하고 구조적인 역풍에 직면해 있습니다.",
        "데이터 센터에 대한 야망은 Amazon 파트너십을 통해 신뢰를 얻지만 마진 희석과 입증되지 않은 경제성으로 인해 AI 기반의 급속한 확장에 대한 열정이 누그러졌습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $15, $145,, 22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $15, $145,, 22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2e8b9e07672f4fd63bb8",
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
      "headline": "Sandisk: The Selloff Is Just The Beginning",
      "headlineKo": "Sandisk: 매도세는 시작일 뿐입니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b9d69fbdd5daf26ea42fa0a2cf471b03c9efabf6363a5cfe89dcd881f2aacba4",
        "publishedAt": 1793440814,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: 매도세는 시작에 불과합니다(NASDAQ:SNDK) | 월스트리트의 알파 베어 찾기 10.94K 팔로어 요약 팔로우 요약 Sandisk는 기록적인 수익에도 불구하고 현재 NAND 시장 상황이 지속 불가능하다고 판단됨에 따라 매도 등급을 유지합니다.",
        "SNDK는 1분기 매출 110억 3천만 달러(+378% y/y), 85% 이상의 총 마진 및 강력한 가이던스를 기록했지만 주가는 사상 최고치보다 50% 이상 하락했습니다.",
        "데이터 센터의 성장은 결과를 주도하지만 집중 위험을 높입니다. 새로운 비즈니스 모델 계약은 수익 가시성을 향상시키지만 주기성을 제거하지는 않습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $11.03, 378%, 85% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $11.03, 378%, 85% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8eb49591290d34398bb9",
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
      "headline": "Here's What $10,000 Invested Equally in SpaceX and Nvidia Could Be Worth in 2030",
      "headlineKo": "SpaceX와 Nvidia에 동일하게 투자한 10,000달러의 2030년 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebf1feb0e1fb4f5f040874d1f3b23936f6330fc761eb7e6b16f8480d47c93145",
        "publishedAt": 1793439300,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX와 Nvidia에 동일하게 투자한 10,000달러의 2030년 가치는 다음과 같습니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool Nvidia( NVDA -4.22% ) 및 Space Exploration Technologies(",
        "두 주식에 10,000달러를 분할하면 투자자는 SpaceX의 34주와 Nvidia의 23주를 구입할 수 있습니다.",
        "SpaceX가 이전에는 볼 수 없었던 수준으로 컴퓨팅 용량을 늘릴 예정이므로 두 주식 간의 10,000달러 투자 분할은 2030년 말까지 52,000달러 이상의 가치가 있을 수 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $52,000, $3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $52,000, $3 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4431f3a8851b926b7666",
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
      "headline": "SpaceX Is Considering a Merger With Tesla. Here's Why That Would Be a Bad Move.",
      "headlineKo": "SpaceX는 Tesla와의 합병을 고려하고 있습니다. 이것이 나쁜 행동인 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc5ef083e6b21327a33ead4e0b20e5662aba9c5eb9faefc6410eb47a20fa969f",
        "publishedAt": 1793438400,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX는 Tesla와의 합병을 고려하고 있습니다.",
        "이것이 나쁜 행동이 될 수 있는 이유입니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + --- % | ▲ Stock Advisor + --- % Join The Motley Fool 마지막 움직임이 곧 펼쳐질 수 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6.37%, 0.86%, $134.72 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6.37%, 0.86%, $134.72 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b107286f26a05c83fe90",
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
      "headline": "Amazon Plans to Spend More on AI. Here’s Why the Stock is a Once-in-a-Decade Buy Hiding in Plain Sight.",
      "headlineKo": "아마존은 AI에 더 많은 투자를 계획하고 있습니다. 주식이 10년에 한 번꼴로 눈에 띄지 않게 숨어 사는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=07f00b95f75ef3e300a69c8c0edbecc55dc58676e88d9e34adccefac7e678381",
        "publishedAt": 1793435402,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "주식이 10년에 한 번꼴로 눈에 띄지 않게 숨어 사는 이유는 다음과 같습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능(AI) 주식이 최근 몇 년간 주식시장 성과를 주도해 왔으며, 투자자들은 스파 성장을 응원했습니다.",
        "하지만 이러한 성장 스토리를 계속 이어가려면 거대 기술 기업들은 막대한 투자를 해야 하며, 이것이 바로 그들이 지난 몇 분기 동안 해왔던 일입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.41%, 14%, $240.35 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.41%, 14%, $240.35 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2fe61d0e222660322817",
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
      "headline": "Sandisk's AI Shift Is Bigger Than Earnings",
      "headlineKo": "Sandisk의 AI 변화는 수익보다 더 큽니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=20889545d2f9d8ce90f3d26b460387742b0bfb7b70c855b597ed9f9072a01cb5",
        "publishedAt": 1793435400,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk의 AI 변화는 수익보다 더 큽니다(NASDAQ:SNDK) | Alpha Pythia 연구 추구 팔로워 8.81K 팔로우 요약 데이터 센터 수익은 2분기 연속 61% 증가한 48억 달러로 2019년 Sandisk 분기별 총 수익의 약 88%를 차지했습니다.",
        "NBM 계약은 현재 2027회계연도 비트의 약 50%, 2028회계연도 공급량의 2/3를 다루고 있습니다.",
        "총 마진은 85.1%에 이르렀으며, 규율 있는 공급 증가와 강력한 AI 수요에도 불구하고 마진 정상화가 주요 위험이 되었습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 61%, $4.8 billion, 88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "ec689f09a585d4788173",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "GOOGL",
        "INTC",
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
      "headline": "Nvidia Just Dropped 11% in a Month. Is It Time to Sell, or Load Up?",
      "headlineKo": "엔비디아는 한 달 만에 11% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca315ceb1c09466e33895c42865dbdf07fb056318ad7781267a642d1f54b9938",
        "publishedAt": 1793434017,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔비디아는 한 달 만에 11% 하락했습니다.",
        "| TIKR.com General Investing Nvidia는 한 달 만에 11% 하락했습니다.",
        "Gian Estrada • 5분 읽기 검토자: David Hanson 최종 업데이트 2026년 10월 31일 Pexels 및 Изображения пользователя의 Nana Dua Valeriya Luzina via Canva 주요 시사점 Intel의 약한 전망과 Alphabet의"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, 70%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, 70%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "30206262fa16a687dbee",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMZN",
        "COHR",
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
      "headline": "Coherent Stock Fell 11% as Intel and Amazon Earnings Hit AI Hardware Stocks. Here’s Where the Stock Could Go",
      "headlineKo": "Intel과 Amazon의 수익이 AI 하드웨어 주식에 타격을 주면서 Coherent 주식은 11% 하락했습니다. 주식이 갈 수 있는 곳은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c406ddf6b44b6ead86cb1d7597111211089282dcf6fe8995f84a3b7d63193e8c",
        "publishedAt": 1793430912,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel과 Amazon의 수익이 AI 하드웨어 주식에 타격을 주면서 Coherent 주식은 11% 하락했습니다.",
        "주식이 갈 수 있는 곳은 다음과 같습니다 | TIKR.com 주식 리뷰 Intel과 Amazon 수익이 AI 하드웨어 주식에 타격을 입으면서 Coherent 주식은 11% 하락했습니다.",
        "주식이 갈 수 있는 곳은 다음과 같습니다. Wiltone Asuncion • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 31일 Canva를 통한 Getty Images의 @Matveev_Aleksandr, Canva를 통한 Getty Images의 @Phuchit 일관된 주식 현재에 대한 주요 통계"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, $210.32, $794 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, $210.32, $794 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a8134328fd692556ef21",
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
      "headline": "Apple’s Biggest Threat Isn’t Android — It’s AAPL's Own Devices, Analyst Says Ahead Of Q4 Earnings",
      "headlineKo": "Apple의 가장 큰 위협은 Android가 아닙니다. 분석가는 4분기 실적을 앞두고 AAPL 자체 기기라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d6a4755c644d1653996a8d2f144acc6ce849d623ae1c5b636f062459cd02d38",
        "publishedAt": 1793430907,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 1.07%, 1.77%, 3.47%, 5.34%, 25.46%, 0.03%, 0.76%, 1.78%.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple’s Biggest Threat Isn’t Android — It’s AAPL's Own Devices, Analyst Says Ahead Of Q4 Earnings' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "046ee7179b5e193c9dd8",
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
      "headline": "Nvidia Drew DOJ Questions and Weighed Backing Debt for an Anthropic Data Center in One Week. Here’s Why Its Cash Flow Matters More",
      "headlineKo": "Nvidia는 일주일 만에 DOJ 질문을 작성하고 인류 데이터 센터에 대한 담보 부채를 가중했습니다. 현금 흐름이 더 중요한 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3b58bd128f9a2e0cc0c76bc7dea053d2e176f2b2807aeea5a39abf953d90daf",
        "publishedAt": 1793430742,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia는 일주일 만에 DOJ 질문을 작성하고 인류 데이터 센터에 대한 담보 부채를 가중했습니다.",
        "현금 흐름이 더 중요한 이유는 다음과 같습니다 | TIKR.com 주식 리뷰 Nvidia는 일주일 만에 DOJ 질문을 작성하고 인류 데이터 센터에 대한 담보 부채를 평가했습니다.",
        "현금 흐름이 더 중요한 이유 Wiltone Asuncion • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 31일 Canva를 통한 Getty Images의 @NIKILAY GLUHOV, Canva를 통한 Pexels의 @Sergei Starostin Nvidia Stock Curr에 대한 주요 통계"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $204.64, $500, $329 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $204.64, $500, $329 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3a07a2edbc96bcdfcc06",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "A SpaceX and Tesla Merger Will Only Be Successful If This One Thing Happens",
      "headlineKo": "SpaceX와 Tesla 합병은 이 한 가지 일이 일어날 경우에만 성공할 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0321a7621bf1542528247f2d86b8ed42807a515b6961828be90f27d97011f313",
        "publishedAt": 1793429400,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX와 Tesla 합병은 이 한 가지 일이 일어날 경우에만 성공할 것입니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool Space Exploration Technologies( SPCX -6.37% ) 및 Tesla( TSLA 가입)",
        "둘 다 Elon Musk에 의해 수년 동안 별도로 운영되었지만, 괴짜 기술 창업자는 이제 두 사업을 하나의 기업 우산 아래 두는 것이 이상적일 수 있다고 믿습니다.",
        "각 기업에는 거래 전망을 조사하는 별도의 위원회가 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $134.72, $9.17, 6.37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $134.72, $9.17, 6.37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "695a46c04aa1c743f70a",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "INTC",
        "QCOM"
      ],
      "relatedEntities": [
        {
          "name": "Qualcomm",
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
      "headline": "Qualcomm Stock Fell 11% in a Day on Intel’s PC Warning. Here’s Why November 4 Tests Its Claim That Phones Have Bottomed",
      "headlineKo": "인텔의 PC 경고에 퀄컴 주가가 하루 만에 11% 하락했다. 11월 4일에 휴대폰 가격이 바닥을 쳤다는 주장을 테스트하는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8d6d9f8f3cc93a4b4e04835bdefe650f10200260eb9662e827be54fe1f3512f5",
        "publishedAt": 1793429088,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔의 PC 경고에 퀄컴 주가가 하루 만에 11% 하락했다.",
        "11월 4일 휴대폰 가격이 바닥을 쳤다는 주장을 테스트하는 이유는 다음과 같습니다 | TIKR.com 주식 리뷰 Qualcomm 주식은 Intel의 PC 경고로 하루 만에 11% 하락했습니다.",
        "11월 4일 휴대폰이 Wiltone Asuncion을 바닥으로 테스트했다는 주장을 테스트하는 이유는 다음과 같습니다. • 4분 읽기 검토자: David Hanson 최종 업데이트 2026년 10월 31일 @Kittipong Jirasukhanont, PhonlamaiPhoto의 이미지(Canva를 통해), @pinglabel(Getty Imag)"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, $164.79, $378 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, $164.79, $378 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4cc970dbdf51abcff6be",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Stock Fell 11% in a Day Ahead of Its November 3 Report. Here’s Why Intel’s 78% Data Center Jump Matters More to AMD Than Its PC Warning",
      "headlineKo": "AMD 주식은 11월 3일 보고서를 앞두고 하루 만에 11% 하락했습니다. Intel의 78% 데이터 센터 점프가 PC 경고보다 AMD에 더 중요한 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc82042f1903b08727b8dc9a6447f717638be02f6f172710b950a60879d26b5c",
        "publishedAt": 1793428767,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD 주식은 11월 3일 보고서를 앞두고 하루 만에 11% 하락했습니다.",
        "Intel의 78% 데이터 센터 점프가 PC 경고보다 AMD에 더 중요한 이유는 다음과 같습니다. TIKR.com 주식 리뷰 AMD 주식은 11월 3일 보고서를 앞두고 하루 만에 11% 하락했습니다.",
        "Intel의 78% 데이터 센터 점프가 PC보다 AMD에 더 중요한 이유 Wiltone Asuncion 경고 • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 31일 @Nicolas Foster from Pexels via Canva, @Alexander의 이미지 via Canva Key S"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, 78%, $504.80 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, 78%, $504.80 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d0e63f3e665325002d91",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Meta Stock Fell 15% in October, Then S&P Forecasts a $71 Billion Cash Flow Deficit. Here’s Where the Stock Could Go by 2030",
      "headlineKo": "Meta Stock은 10월에 15% 하락했으며 S&P는 710억 달러의 현금 흐름 적자를 예측했습니다. 2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c0e751eb46c0cfa05f5836da3439a664bfc1e3c62daada8bb52f55cca6c7b48",
        "publishedAt": 1793428613,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta Stock은 10월에 15% 하락했으며 S&P는 710억 달러의 현금 흐름 적자를 예측했습니다.",
        "2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다 | TIKR.com 주식 리뷰 Meta Stock은 10월에 15% 하락했고 S&P는 710억 달러의 현금 흐름 적자를 예측했습니다.",
        "2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다. Wiltone Asuncion • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 10월 31일 @Miguel Guasch via Canva, @Omar_Nasif from pixabay via Canva Meta Stock에 대한 주요 통계 현재 가격: $614.99 Targe"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 15%, $71 Billion, $614.99 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 15%, $71 Billion, $614.99 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1364d9a7c85d00f09d49",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "MU",
      "relatedTickers": [
        "AMD",
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
      "headline": "Prediction: 2 Under $1 Trillion Stocks That Will Be Worth More Than Micron 5 Years From Now",
      "headlineKo": "예측: 지금으로부터 5년 후 마이크론 이상의 가치가 있을 1조 달러 미만의 주식 2개",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=405dc2a27de91c5f465d59f03738be19d5e1cf52cd3f05e7742167f7ae98d157",
        "publishedAt": 1793427600,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 지금으로부터 5년 후 마이크론보다 가치가 더 커질 1조 달러 미만의 주식 2개 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron( MU -5.30% )은 가장 인기 있는 것 중 하나입니다.",
        "현재 이 주식의 시가총액은 1조 달러가 조금 넘지만, 반도체 분야에는 향후 5년 안에 가치가 이를 넘어설 가능성이 있는 1조 달러 미만의 시가총액 회사가 두 곳 있다고 생각합니다.",
        "이들 반도체 주식 중 1위는 SK하이닉스(SKHY -7.95%)이고, 2위는 Advanced Micro Devices(AMD -10.88%)이다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1 trillion, 7.95%, 10.88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1 trillion, 7.95%, 10.88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "327c8b1bd399217ccd16",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "HUBB",
      "relatedTickers": [
        "AMD",
        "HUBB",
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
      "headline": "HUBB Q3 deep dive: Data center strength offsets utility softness, capacity investments shape outlook",
      "headlineKo": "HUBB 3분기 심층 분석: 데이터 센터의 강점이 유틸리티의 부드러움을 상쇄하고 용량 투자가 전망을 형성합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78159b66c1182c7de0b1ea6935bae386f6c1647712ff016fc961ef9ba7fe97d8",
        "publishedAt": 1793426609,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 HUBB의 사업과 관련된 'HUBB Q3 deep dive: Data center strength offsets utility softness, capacity investments shape outlook' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "6521fbef058abc6e3364",
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
      "headline": "Alphabet: The Worst Day In Its History, And The Cheapest It Has Looked In A While",
      "headlineKo": "알파벳: 역사상 최악의 날, 그리고 한동안 가장 싼 날",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5691fe3a9b23e8979a148d9a268cb9fdf47217bc577863f3e529201c2fff10c9",
        "publishedAt": 1793420368,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳 주식: 역사상 최악의 날, 그리고 한동안 가장 싼 모습 | 알파 전용 거래 추구 팔로워 104명 요약 팔로우 알파벳은 현재 레버리지보다 15% 상승 여력을 반영하여 $325의 12개월 목표 가격으로 매수 등급을 받았습니다.",
        "최근 12%의 주가 하락은 핵심 사업 약점이 아닌 영업외 EPS 미스, 검색 성장 둔화, 잉여현금흐름 마이너스로 인해 발생했습니다.",
        "검색 증가율은 12%로 감소했지만, 클라우드 수익은 5,610억 달러의 백로그로 두 배 증가하여 막대한 자본 지출과 향후 마진 확장을 지원했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $325, 15%, 12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $325, 15%, 12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "33d6efe870e5eb5d1ab4",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Oracle Corporation (ORCL) Analyst/Investor Day Transcript",
      "headlineKo": "Oracle Corporation(ORCL) 분석가/투자자 일일 성적표",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=faca6fa174c5b7ea4c0f9f7cbd38b6f119ec60076bb7ac29add57d09565ba7dc",
        "publishedAt": 1793418507,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle Corporation(ORCL) 분석가/투자자 일일 성적표 | Alpha SA 성적표 찾기 팔로워 162.75K 팔로워 팔로우 Oracle Corporation ( ORCL ) 분석가/투자자의 날 2026년 10월 28일 오전 11:55 EDT 회사 참가자 Ken Bond - 수석 부사장",
        "Kirk Materne - Evercore ISI 기관 주식, 연구 부문 프레젠테이션 Ken Bond 투자자 관계 담당 수석 부사장 모두 만나서 반갑습니다.",
        "아시다시피 저는 개인적으로 이번 회의가 매우 기대됩니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ORCL에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "588a28f16c1c8ecb1bc4",
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
      "headline": "Alphabet: The 30% Earnings Miss That Wasn't",
      "headlineKo": "알파벳: 30% 수익이 누락되지 않았습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b4d4c14e5b171d58cabbc807f3af5ae61000ec2a199d96ff3e432f5156d4d535",
        "publishedAt": 1793418028,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet: The 30% Earnings Miss That Wasn't",
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
      "id": "37ebfb280e7eaa69e5c2",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "ARM",
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
      "headline": "Intel Drags Down CPU Rivals. Is it a Buying Opportunity for AMD and Arm?",
      "headlineKo": "인텔, CPU 경쟁자를 끌어내리다. AMD와 Arm의 매수 기회인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0796c961ff6c86d9730c5b7605ff786dfe721c3271a1ecc1f8605b75dccf4ed3",
        "publishedAt": 1793416801,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD와 Arm의 매수 기회인가?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인텔( INTC -28.58% )의 3분기 실적 보고서가 반도체 부문에 대학살을 촉발했습니다.",
        "이 거대 칩 회사는 1974년 이후 최악의 날을 보냈으며 VanEck Semiconductor ETF는 29% 하락하고 7% 하락했습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 29%, 7%, 21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 29%, 7%, 21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "95dd6b6f4d4d89134f61",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Why Intel Stock Crashed on Friday",
      "headlineKo": "금요일에 인텔 주식이 폭락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6dacf3deb97a6e3202cf9025d307fe177e969556c60022d45529f0b641ebff5",
        "publishedAt": 1793414506,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "금요일에 인텔 주식이 폭락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Shares of Intel( INTC -28.58% )은 칩 제조업체의 4분기 공시 이후 금요일에 28% 이상 급락했습니다.",
        "PC의 약점이 AI의 이익을 상쇄합니다. 인텔의 3분기 매출은 전년 동기 대비 21% 증가한 165억 달러를 기록했습니다.",
        "거대 반도체 기업의 데이터센터와 인공지능(AI) 관련 매출은 78% 증가해 73억 달러를 기록하며 무서운 속도로 성장했다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 21%, $16.5 billion, 78% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 21%, $16.5 billion, 78% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "255e156922ab93bfbe8c",
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
      "headline": "Quanta Services Q3 Earnings Call Highlights",
      "headlineKo": "Quanta 서비스 3분기 실적 통화 하이라이트",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=108df42b3cb839c34c305f035293824a781afbb1833c4cb3e3b238929fb1c352",
        "publishedAt": 1793409247,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta 서비스 3분기 실적 통화 하이라이트"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "3bff70ad349a5703b684",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stocktwits Zero To Sixty: Rivian Raises Delivery Guidance On R2 Demand, Tesla Expands Robotaxi Fleet,  And Ford Advances Low-Cost EV Plans",
      "headlineKo": "Stocktwits Zero to Sixty: Rivian은 R2 수요에 대한 배송 지침을 높이고 Tesla는 Robotaxi 함대를 확장하며 Ford는 저비용 EV 계획을 발전시킵니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=27960df40610237bb2503f7f065da20aeb34767dbadf01c036c8c8b822f3edef",
        "publishedAt": 1793405418,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stocktwits Zero to Sixty: Rivian은 R2 수요에 대한 배송 지침을 높이고 Tesla는 Robotaxi 함대를 확장하며 Ford는 저비용 EV 계획을 발전시킵니다. AI 에이전트 동향 뉴스 수익 모든 DIA 1.07% SPY 1.77% QQQ 3.47% 추세 SPOT 6.50% COMP 2.95% PGEN",
        "Stocktwits Zero to Sixty: Rivian은 R2 수요에 대한 배송 지침을 높이고 Tesla는 Robotaxi 함대를 확장하며 Ford는 저비용 EV 계획을 발전시킵니다. 순수 EV 플레이어 Rivian은 확실한 3분기 실적을 전달하고 2026년 배송 전망을 높였습니다.",
        "신에너지 자동차 충전소."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.07%, 1.77%, 3.47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.07%, 1.77%, 3.47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8b5c56426402a46b9721",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMZN",
      "relatedTickers": [
        "AMD",
        "AMZN",
        "INTC",
        "MU",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500, Nasdaq End Third Straight Week Lower As Investors Move Away From Tech, AI —  AMZN, INTC, LLY, RBLX In Focus",
      "headlineKo": "S&P 500, Nasdaq은 투자자들이 기술, AI에서 멀어짐에 따라 3주 연속 하락 마감 — AMZN, INTC, LLY, RBLX 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f910b2c47ad6d48765be636222f6aeb2210ae6a085a1b96532370a41075f104",
        "publishedAt": 1793405139,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 AMZN의 사업과 관련된 'S&P 500, Nasdaq End Third Straight Week Lower As Investors Move Away From Tech, AI —  AMZN, INTC, LLY, RBLX In Focus' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "8085f97dbf2dc072ed97",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Alphabet: After A 12% Drop, The Parts Are Worth About $337 A Share",
      "headlineKo": "알파벳: 12% 하락 후 부품 가치는 주당 약 337달러입니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=43a4f26ac3240435c2568b2fc90b657f94943587c9948e752362827b99e66689",
        "publishedAt": 1793404740,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳 주식: 12% 하락 후 부품 가치는 주당 약 337달러입니다(NASDAQ:GOOG) | 알파 찾기 Tim Travis 6.28K 팔로워 요약 팔로우 알파벳은 수익 후 매도 후 낮은 수준의 가치 평가에 가깝게 거래되어 16% 마진을 제공합니다.",
        "클라우드 수익은 영업 이익률 36.2%로 두 배로 늘었고, 5,608억 달러의 백로그는 검색 수익 창출에 대한 우려에도 불구하고 탄탄한 성장을 뒷받침합니다.",
        "나는 내재 가치를 주당 337달러로 추정하며, 시장 가격은 알파벳이 나의 가장 보수적인 시나리오인 주당 272달러 바로 위에 있다고 추정합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, $337, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, $337, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "af00cce162341fc1cb7f",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
        "INTC",
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
      "headline": "Why Arm Holdings Stock Plummeted by Nearly 10% Today",
      "headlineKo": "Arm Holdings 주가가 오늘 거의 10% 급락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2ec91b9f930b7ef3f04b3f93394fe8ab2fd463e6007abd225fca8529b7082049",
        "publishedAt": 1793403858,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm Holdings 주가가 오늘 거의 10% 급락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 금요일의 주식 거래 세션이 역사상 다운된다면 그것은 폭락 때문일 것입니다",
        "폭우에 휩싸인 한 회사는 영국에 본사를 둔 Arm Holdings였으며, 업계에서 그 우울한 날에 거의 10% 하락했습니다.",
        "큰 대패 칩 재고 대패는 목요일 장 마감 직후 발표된 인텔(INTC -28.58%)의 3분기 실적 발표라는 한 가지 주요 요인으로 추적할 수 있습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 28.58%, $205.97 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 경쟁사 수주 · 고객 점유 변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 10%, 28.58%, $205.97 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 공급사의 실제 물량",
        "기존 공급사 매출 비중",
        "고객의 이중 공급 전략"
      ]
    },
    {
      "id": "5142e6ca5e5937746928",
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
      "headline": "Is Intel Stock a Buy After Its Post-Earnings Plunge?",
      "headlineKo": "인텔 주식은 실적 폭락 후 매수인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a84ab3b2bc5a24d390988ea46bd6ee541eb2ea98dd76710ba02b52ffe34fb7a",
        "publishedAt": 1793403242,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔 주식은 실적 폭락 후 매수인가?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "788cc7003b8f4e178fdd",
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
      "headline": "Salesforce’s M&A spree continues with a reported $375M deal for defense tech startup Rune",
      "headlineKo": "국방 기술 스타트업 Rune에 대한 3억 7,500만 달러 규모의 거래로 Salesforce의 M&A가 계속되고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0443800ddf46293c1da6d8109be691a21d454773ab480b1a15493b749ade90e1",
        "publishedAt": 1793402483,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce’s M&A spree continues with a reported $375M deal for defense tech startup Rune",
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
      "id": "5bcada89993bae999e12",
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
      "headline": "Moving Averages Of The Ivy Portfolio And S&P 500: October 2026",
      "headlineKo": "아이비 포트폴리오와 S&P 500의 이동 평균: 2026년 10월",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=dcc1531c61761be53493c039814b3f772c326694944a62e435f2a67305ce30a4",
        "publishedAt": 1793401200,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아이비 포트폴리오와 S&P 500의 이동평균: 2026년 10월 | Seeking Alpha Advisor Perspectives 차트 6.89K 팔로워 팔로우 요약 아이비 포트폴리오 10개월 단순 이동 평균에는 2개의 현금 포지션이 있었던 반면 12개월 SMA에는 2개의 현금 포지션이 있었습니다.",
        "S&P 500은 10월에 0.93% 하락해 2개월 연속 하락했다.",
        "S&P 500은 10개월 단순 및 지수 이동 평균과 12개월 SMA를 초과하여 10월에 마감했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.93%, 4.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.93%, 4.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ff59f912c37a19c5cbfd",
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
      "headline": "Arista Networks vs. Monday.com: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Arista Networks vs. Monday.com: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88acb6b6188509fca9d9ff735e7248376829fa8098285de0d8315ee2aaa69c2b",
        "publishedAt": 1793400422,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Monday.com: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인프라와 애플리케이션 중 하나를 선택하면 포트폴리오 전략이 정의되는 경우가 많습니다.",
        "Arista Networks( ANET -8.34% )와 Monday.com( MNDY +0.86% )은 세계 경제의 지속적인 디지털 혁신을 수행하는 두 가지 서로 다른 방식을 나타냅니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.34%, 0.86%, $168.86 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8.34%, 0.86%, $168.86 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e2039e8a3277658c3190",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Veteran fund manager revamps Alphabet stock price target after brutal sell-off",
      "headlineKo": "베테랑 펀드매니저, 잔혹한 매도 이후 알파벳 주가 목표 상향 조정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f7c5d7c136e17e61113c25aa92d9fbbc9a16ab4acb04fce313483d2c579651f",
        "publishedAt": 1793399151,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Veteran fund manager revamps Alphabet stock price target after brutal sell-off",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GOOGL에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "ca82510218754143512e",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500 Snapshot: Stocks Edge Lower For 3rd Straight Week",
      "headlineKo": "S&P 500 스냅샷: 3주 연속 주가 하락",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=86089395aaf84442b32450a5303c37da19a541fcca0c74d4ca0549a9507d73db",
        "publishedAt": 1793399100,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500 스냅샷: 주가가 3주 연속 하락 | Seeking Alpha Advisor Perspectives 차트 6.89K 팔로워 팔로우 요약 S&P 500은 이번 주 동안 거의 0.57% 하락했으며 현재 3주 연속 하락세를 타고 있습니다.",
        "현재 지수는 사상 최고치보다 약 3% 낮은 수준에 머물고 있습니다.",
        "S&P 500은 현재 연초 대비 10.73% 상승했고, S&P Equal Weight는 연초 대비 13.89% 상승했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.57%, 3%, 10.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.57%, 3%, 10.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "071e147ba00cc1476a49",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta’s Credit Rating Outlook Downgraded to Negative by S&P",
      "headlineKo": "S&P, 메타 신용등급 전망 부정적으로 하향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0be1d1c06709fe232fa713b2c794fc5d5ed179cfdf44bd697381092aa058d296",
        "publishedAt": 1793397360,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta’s Credit Rating Outlook Downgraded to Negative by S&P",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 META의 사업과 관련된 'Meta’s Credit Rating Outlook Downgraded to Negative by S&P' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "META",
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
      "id": "77f0e0e9d310659ca9d1",
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
      "headline": "Qualcomm Is Teaming Up With Anduril to Produce U.S.-Made Laptops. Don’t Expect It to Move the Needle for QCOM Stock.",
      "headlineKo": "Qualcomm은 Anduril과 협력하여 미국산 노트북을 생산하고 있습니다. QCOM 주식의 바늘이 움직일 것이라고 기대하지 마십시오.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d68c32470f5072e9e73f32aea1a580b8e7af9e2c8b3b65940837458cf2bacee6",
        "publishedAt": 1793396694,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm은 Anduril과 협력하여 미국산 노트북을 생산하고 있습니다. QCOM 주식의 바늘이 움직일 것이라고 기대하지 마십시오."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "f1e7aa6e7b6447e842c1",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P cuts Meta outlook to negative amid capex concerns",
      "headlineKo": "S&P는 설비투자 우려로 메타 전망을 부정적으로 하향 조정했다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69c44a1a1cb5732d991ebd30b0ceca4f7b508278c33eed0f5ef19efaef8066c4",
        "publishedAt": 1793396380,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P cuts Meta outlook to negative amid capex concerns",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "96c250653eb5d3ca9a23",
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
      "headline": "Stock Market Today, Oct. 30: Amazon Misses Revenue and Earnings Expectations",
      "headlineKo": "오늘, 10월 30일 주식 시장: Amazon은 수익 및 수익 기대치를 놓쳤습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8af776c42ea3d28d485922c82c3fc941a4a6b9eff086dea13aa05e6c4fec9ce3",
        "publishedAt": 1793396102,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "30: Amazon이 수익 및 수익 기대치를 놓침 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool 가입 AMZN - Amazon $240.35 -$3.44 (-1.41%) NASDAQ · 26/10/30 오후 4시 기준 프리미엄 기능",
        "비상장, 비공개 또는 이중 종류의 비거래 주식은 포함되지 않습니다.",
        "$2.63T 일일 범위 $229.36 - $241.55 52주 범위 $196.00 - $287.20 볼륨 104.9M 평균 볼륨 39.3M 총 마진 50.77% Amazon.com( AMZN -1.41% ), 글로벌 전자 상거래 및 클라우드 플랫폼, $240.35로 마감, 하락 1.41%."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $2.63, $229.36, $241.55 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2.63, $229.36, $241.55 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e4ccbb0ffdf48c15bfe4",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why GE Vernova Stock Fell on Friday",
      "headlineKo": "GE Vernova 주식이 금요일에 하락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13ca6da87718bcde1ce562eb16cae8493678c708efdc388309bd18d07e6b1194",
        "publishedAt": 1793394249,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova 주식이 금요일에 하락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool GE Vernova( GEV -3.38% ) 10월 3분기 실적 호조에도 불구하고 주가가 하락했습니다.",
        "실제로 천연 가스 터빈 및 그리드 솔루션 대기업은 전력 장비를 구축하는 것보다 더 빨리 판매하고 있으며 방금 90억 달러 규모의 대규모 인수를 발표했습니다.",
        "그럼에도 불구하고, 인공지능(AI) 인프라 주식 매도 속에 여러 분석가들이 주식 목표 가격을 낮추면서 주가는 금요일 거래에서 최저점에서 4.9% 하락했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $9 billion, 4.9%, 27% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $9 billion, 4.9%, 27% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5219537089a60a5e71c5",
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
      "headline": "What to expect from Apple's Q4 earnings this Monday",
      "headlineKo": "이번주 월요일 애플의 4분기 실적에서 기대할 수 있는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6694a3c855ee34e5fd1f7a2cbe75277df008660aab790b0b0175dec00824c70d",
        "publishedAt": 1793391782,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이번주 월요일 애플의 4분기 실적에서 기대할 수 있는 것"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "862c90e122ef087d7ede",
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
      "headline": "8 Months Ago, A Major Wall Street Bank Said Buy Marvell. It’s Up More Than 150%. Here’s Where We See the Stock Going",
      "headlineKo": "8개월 전, 월스트리트의 주요 은행이 Marvell을 매수하겠다고 밝혔습니다. 150% 이상 상승했습니다. 주식이 움직이는 곳은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b799c368b0dc4457243178034926a3994faa20f0ac10c05c40f539b82437f717",
        "publishedAt": 1793391456,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "8개월 전, 월스트리트의 주요 은행이 Marvell을 매수하겠다고 밝혔습니다.",
        "주식의 흐름을 볼 수 있는 곳은 다음과 같습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,587.20 −1.26% Dow Jones 51,795.00 −1.10% Nasdaq 100 28,409.60 −2.33% Russell 2000 2,814.05 −1.61% S&P 500 7,587.20 −1.26% 다우존스 51,795.00 −1.10% 나스닥 100 28,409.60 −2.33% 러셀 20"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 150%, 24%, $110 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 150%, 24%, $110 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "026603316c7236e0e8e0",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET",
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
      "headline": "Arista Networks vs. Figma: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Arista Networks 대 Figma: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=875fea302cb85e850a78ca01821803ffb3125b5ee99f1b115748490382757347",
        "publishedAt": 1793389802,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Figma: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인프라와 소프트웨어 중 하나를 선택하는 것은 성장 투자자에게 어려울 수 있습니다.",
        "(FIG -3.00%)은 매력적인 기회를 제공하지만 오늘 구매하는 것이 더 나은 방법은 무엇입니까?"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8.34%, 3.00%, $168.86 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ANET의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ANET에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 8.34%, 3.00%, $168.86 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "공식 규제 적용일·대상 제품",
        "회사의 매출 영향 추정",
        "대체 제품·지역 판매"
      ]
    },
    {
      "id": "19c09d9d67e241afe4ca",
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
      "headline": "AMZN Stock Set To Drop For Third Straight Week: Amazon Taps $80B Credit Line To Fund AI Capex",
      "headlineKo": "AMZN 주식이 3주 연속 하락할 예정: Amazon, AI Capex 자금 조달을 위해 800억 달러 신용 한도 활용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4830bd8cef8a870856d847dfcf2fb59d712cac9db2b804633eafbb520c3edfe2",
        "publishedAt": 1793389049,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $80, 1.04%, 1.73%, 3.30%, 5.96%, 20.93%, 5.80%, 10.09%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'AMZN Stock Set To Drop For Third Straight Week: Amazon Taps $80B Credit Line To Fund AI Capex' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "368b41fdf70a02fd574f",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Reddit Stock Plunges 30% as Google's AI Search Hits Traffic and User Growth",
      "headlineKo": "Google의 AI 검색이 트래픽과 사용자 증가에 타격을 주면서 Reddit 주가는 30% 급락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=298366f9c22a828f3769a949fd98357eef5465e9a3d642c1430583504f14a4a4",
        "publishedAt": 1793388662,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google의 AI 검색이 트래픽과 사용자 증가를 타격하면서 Reddit 주가는 30% 급락했습니다. - Decrypt 요약하자면 Reddit 주가는 금요일에 30.44% 하락한 90.15달러로 주간 하락폭을 44%로 늘렸습니다.",
        "CEO인 스티브 허프만(Steve Huffman)은 구글 검색 추천이 10월에 주당 100만 건 이상 감소했으며 이러한 추세가 계속된다면 4분기에도 일일 활성 사용자가 낮은 두 자릿수 비율로 감소할 수 있다고 경고했습니다.",
        "Reddit은 3분기에 53%의 매출 성장을 보고했음에도 불구하고 4분기 매출을 10억 달러에서 10억 3천만 달러로 분석가가 예상한 약 10억 5천만 달러보다 낮을 것으로 예상했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, 30.44%, $90.15 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, 30.44%, $90.15 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2cf3c13ae1704857cfc9",
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
      "headline": "Hubbell Incorporated 2026 Q3 - Results - Earnings Call Presentation",
      "headlineKo": "Hubbell Incorporated 2026년 3분기 - 결과 - 수익 발표 프레젠테이션",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9e53ceeba2229a917df128aa7902cb59dd8093a5604d4fbb754970952bfc3f6c",
        "publishedAt": 1793387541,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Hubbell Incorporated 2026년 3분기 - 결과 - 수익 보고 프레젠테이션(NYSE:HUBB) 2026-10-30 | Alpha SA 성적 증명서 찾기 팔로워 162.77K 팔로우 다음 슬라이드 데크는 Hubbell Incorporated에서 2026년과 함께 게시했습니다.",
        "이 기사는 SA가 작성했습니다. Transcripts 162.77K 팔로워 팔로우 Seeking Alpha의 성적표 팀은 모든 성적표 관련 프로젝트의 개발을 담당합니다.",
        "우리는 현재 사이트에 분기당 수천 건의 분기별 실적 발표를 게시하고 있으며 계속해서 범위를 확대하고 확장하고 있습니다."
      ],
      "marketInterpretation": [
        "매출·영업이익·현금흐름과 순이익 특이항목을 분리해야 다음 실적의 반복 가능성을 판단할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $5.91, $0.16, $1.87 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "HUBB의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "HUBB에 대한 실적 발표 · 본업과 특이항목 분리 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $5.91, $0.16, $1.87 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "431acb114193608d4c95",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Stock Tests Key Level As Earnings Loom",
      "headlineKo": "Palantir 주식은 실적이 밝아짐에 따라 주요 수준을 테스트합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49c440b40113e0297f11f5e55f3f3ecabafff59931937482cb3d7b0db1ad6309",
        "publishedAt": 1793386456,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Stock Tests Key Level As Earnings Loom",
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
      "id": "92a9b0cdf20264e63e37",
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
      "headline": "Microsoft: 48% Azure Growth And Still Not Enough Capacity",
      "headlineKo": "Microsoft: Azure 성장율 48%, 아직 용량이 충분하지 않음",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ee6bc40590ad9a9297e1b283be8caf536159a1639b5ec878f55881b6f93c02e9",
        "publishedAt": 1793385072,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft: Azure 성장 48%, 아직 용량 부족(NASDAQ:MSFT) | Alpha Cyn Research 찾기 1,18K 팔로워 팔로우 요약 Microsoft Corporation은 매출 19% 증가, 영업 이익 21% 증가,",
        "Azure 성장은 48%로 가속화되었으며, 경영진은 지속적인 용량 제약에도 불구하고 2분기에 49~50% 성장을 목표로 삼았습니다.",
        "인프라 효율성 개선과 Copilot 채택 증가로 AI 수익 창출이 지원되는 동시에 운영 현금 흐름이 29% 급증했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 48%, 19%, 21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 48%, 19%, 21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "13ab033c3c526623b7ac",
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
      "headline": "Amazon (AMZN) Stock After Q3 Earnings: Buy the Dip, Sell, or Hold?",
      "headlineKo": "3분기 실적 이후 아마존(AMZN) 주식: 하락세를 매수할 것인가, 매도할 것인가, 아니면 보유할 것인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7760cc3e846d6840a8e011399cee49fbfd9fca4bf64af363686b91e94c75c44e",
        "publishedAt": 1793384580,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon (AMZN) Stock After Q3 Earnings: Buy the Dip, Sell, or Hold?",
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
      "id": "2342576b587580e90b3c",
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
      "headline": "Amazon’s AI Bill Accelerates, but Its Cost to Deliver Each Order Keeps Shrinking",
      "headlineKo": "Amazon의 AI 청구서는 가속화되지만 각 주문을 배송하는 데 드는 비용은 계속 줄어들고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44b36450b9c790e9bc3b2dfae6e281ac61ae7519c5c14122564ff6ee9d102fd7",
        "publishedAt": 1793384216,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon의 AI 청구서는 가속화되지만 각 주문을 배송하는 데 드는 비용은 계속 줄어들고 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "70a7e5c0ce9b5c363af6",
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
      "headline": "Nvidia’s GPU Rents Surge as Anthropic’s Revenue Has “Gone Vertical,” Says Gavin Baker",
      "headlineKo": "Anthropic의 수익이 \"수직화\"됨에 따라 Nvidia의 GPU 임대료가 급증했다고 Gavin Baker가 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbd67a6447d55e3f5ad1a9e8c3c1d96cdf3e233e88f2a0ba34f6e446605afbdc",
        "publishedAt": 1793384085,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Anthropic의 수익이 \"수직화\"됨에 따라 Nvidia의 GPU 임대료가 급증했다고 Gavin Baker가 말했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "68ab5fbbc084950462d5",
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
      "headline": "Cramer: Broadcom’s $63 Billion Anthropic Financing Works Because “There Is Only One Hock”",
      "headlineKo": "Cramer: Broadcom의 630억 달러 규모의 인류 자금 조달은 \"호크가 하나뿐이기 때문에\" 효과가 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60e4ab500bc71f8bb4c2710f58e20da1f77244539c24d8ebb994fd1f0e1fde7d",
        "publishedAt": 1793384009,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cramer: Broadcom의 630억 달러 규모의 인류 자금 조달은 \"딱 하나뿐\"이기 때문에 효과가 있습니다 | TIKR.com 일반 투자 크레이머: Broadcom의 630억 달러 인류 자금 조달은 \"호크가 하나뿐\"이기 때문에 효과가 있습니다. Roxanna Maglangit • 6분 답변",
        "일부 은행은 Broadcom CEO Hock Tan이 더 높은 이자율에 동의하고 Broadcom의 보증에 대해 더 많은 편의를 제공할 때까지 철수를 고려한 것으로 알려졌습니다.",
        "Broadcom의 성장 계획에는 이와 같은 거래가 더 많이 필요하며 Anthropic의 칩 파이낸싱에 대한 지원은 이미 현금 240억 달러를 훨씬 초과합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $63 Billion, $63 billion, $24.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $63 Billion, $63 billion, $24.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6069da803337a7f4aa85",
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
      "headline": "Broadcom Stock Outlook Hinges On AI Chip Growth And Anthropic Partnership",
      "headlineKo": "Broadcom 주식 전망은 AI 칩 성장과 인류적 파트너십에 달려 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=098a3aad6d8eaa9e9d3e9ad50266a2fde26d457610a8efa0d790e98dff7f10a1",
        "publishedAt": 1793383830,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom 주식 전망은 AI 칩 성장과 인류적 파트너십에 달려 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "061710eddcd3130215c6",
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
      "headline": "Meta (META) Stock Sees Modest Fair Value Lift As Muse And Financing Drive Debate",
      "headlineKo": "메타(META) 주식은 뮤즈와 자금 조달이 토론을 주도함에 따라 적당한 공정 가치 상승을 봅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a5a12b38bb8670431b6bfe950375367a074e4c0b05b41f69d8a333e08c954ae1",
        "publishedAt": 1793383804,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 META의 사업과 관련된 'Meta (META) Stock Sees Modest Fair Value Lift As Muse And Financing Drive Debate' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f848daa43b638338ce89",
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
      "headline": "Why Buying Bloom Energy Stock After Its Post-Earnings Selloff Could Be a Good Idea",
      "headlineKo": "실적 후 매도 이후 블룸 에너지 주식을 구매하는 것이 좋은 아이디어일 수 있는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bbf94c7af48067bb31179b776f9672194dbe558b7e0699409c1e90d0151686f5",
        "publishedAt": 1793383642,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Buying Bloom Energy Stock After Its Post-Earnings Selloff Could Be a Good Idea",
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
      "id": "b98e9fb877ab6c330020",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Update: Equities Tumble Intraday Amid Tech Sell-Off Following Amazon, Intel Earnings",
      "headlineKo": "업데이트: Amazon, Intel 실적에 따른 기술 매도세로 인해 주식이 장중 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd35d9918be793ddc0f97c738839d75069457e0b0acdda7ca03eab3e932c49b8",
        "publishedAt": 1793383255,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "업데이트: Amazon, Intel 실적에 따른 기술 매도세로 인해 주식이 장중 하락했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "ba6a81a53297c26be7b8",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla-SpaceX Merger Could Face The Biggest Regulatory Risk In China, BofA Warns",
      "headlineKo": "Tesla-SpaceX 합병은 중국에서 가장 큰 규제 위험에 직면할 수 있다고 BofA는 경고했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bd4292130031202f74b1623152887dd7bc111a8cc9174c1fd0b1e5905b4b6d60",
        "publishedAt": 1793383139,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla-SpaceX Merger Could Face The Biggest Regulatory Risk In China, BofA Warns",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "bafa7271d3086be0d412",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
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
      "headline": "META, AMZN, ORCL, GOOGL In Focus: Big Tech Bonds Offer Better Opportunity Than Stocks, BofA Says",
      "headlineKo": "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권이 주식보다 더 나은 기회를 제공한다고 BofA는 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=140c11f582fab1e9b8596a6940e26df2a11d6b9c6a7f972984cc28434ed23755",
        "publishedAt": 1793382914,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권은 주식보다 더 나은 기회를 제공한다고 BofA는 AI 에이전트 동향 뉴스 수익 전체 DIA 1.07% SPY 1.77% QQQ 3.47% 추세 TGTX 5.34% CRMD 25.46% DIS 0.03% CLX 0.76% COST 1.78% COIN 10.62% KO",
        "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권이 주식보다 더 나은 기회를 제공한다고 BofA는 밝혔습니다. Bank of America(BofA)는 대형 기술 채권이 대형 기술 채권보다 더 수익성 있는 투자 기회를 제공한다고 강조합니다.",
        "AI 로고 일러스트 2026년 1월 6일 폴란드 바르샤바에서 촬영된 이 일러스트 사진에서 AI 로고가 모바일 기기에 보입니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.07%, 1.77%, 3.47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.07%, 1.77%, 3.47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a5e21b7c02d145ccfe26",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "AAPL",
        "AMD",
        "PLTR"
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
      "headline": "Apple, Super Micro, AMD, Palantir Step Up To Earnings Plate After Tech Sell-Off",
      "headlineKo": "Apple, Super Micro, AMD, Palantir, 기술 매각 후 수익 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b8ddcac529bf9766505331d9fafdea920291fae4badbd561cb98c7f8909b77d",
        "publishedAt": 1793382287,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple, Super Micro, AMD, Palantir Step Up To Earnings Plate After Tech Sell-Off",
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
      "id": "c8b7a76abd9d654ca230",
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
      "headline": "Citigroup Maintains Buy on Quanta Services, Raises Price Target to $882",
      "headlineKo": "Citigroup, Quanta Services에 대한 매수 유지, 목표 가격을 882달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0b144e2d61f6a07c186b5a1f6431f60c610d8567c4e1ef7d8cb326d392233599",
        "publishedAt": 1793382264,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citigroup, Quanta Services에 대한 매수 유지, 목표 가격을 882달러로 인상"
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
      "id": "d70dbed3ba8a2de28e9a",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "History Says Now Is the Perfect Time to Buy Broadcom Stock",
      "headlineKo": "역사는 지금이 Broadcom 주식을 매수하기에 완벽한 시기라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8f5a72f82f0f1696ad7707d35f865192f7e36b9c799be6d2ce3b662e04ccd8f5",
        "publishedAt": 1793381700,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "역사에 따르면 지금이 Broadcom 주식을 매수하기에 완벽한 시기입니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Broadcom( AVGO -5.48% ) 주가는 여름이 끝날 무렵 약세를 보였습니다.",
        "주가는 6월 초 최고치 대비 약 30% 하락했으며, 1월 이후로는 보합세를 보이고 있다.",
        "그러나 나는 이것이 투자자 입장에서 큰 실수라고 생각한다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $326.08, $18.92 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, $326.08, $18.92 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "84f4c8d7a5df256d62e5",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell may buy its own laser supplier as investors pull back",
      "headlineKo": "투자자들이 철수함에 따라 Marvell은 자체 레이저 공급업체를 인수할 수도 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5178585465bd27f85e68654b05333e80b9d5f5fa68c85c2494ddef872b112c4",
        "publishedAt": 1793381580,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell may buy its own laser supplier as investors pull back",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 MRVL의 사업과 관련된 'Marvell may buy its own laser supplier as investors pull back' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
          "ticker": "MRVL",
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
      "id": "e1b0dc5160390e082804",
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
      "headline": "Will Top-Line Improvement Benefit Palantir in Q3 Earnings?",
      "headlineKo": "외형 개선이 Palantir의 3분기 수익에 도움이 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66f32fc1800c5b1b54098ecae5bcb9079fdc68e58de0541db29e9d267d34b36c",
        "publishedAt": 1793380260,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "외형 개선이 Palantir의 3분기 수익에 도움이 될까요?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "71065390b1f9cd7d60d2",
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
      "headline": "Tesla Could Be About to Unlock a Brand-New Revenue Stream. Time to Buy the Stock?",
      "headlineKo": "Tesla는 새로운 수익원을 창출할 수 있습니다. 주식을 살 시간인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8150f7f30f690a09fd6311878d2b888ee0873a7439bca1400b351e52dcddb3e",
        "publishedAt": 1793380141,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 새로운 수익원을 창출할 수 있습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Tesla( TSLA -0.86% )는 전기 자동차(EV) 시장의 선구자였으며 여전히 수익의 가장 큰 몫을 창출하고 있습니다.",
        "그러나 최근 몇 년 동안 EV 환경은 다소 불확실해 Tesla의 재무 결과에 영향을 미쳤습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $99, $15, $150 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $99, $15, $150 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e921c00b30c71ca305d5",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Became One of the 10 Biggest Holdings in S&P 500 Index Funds. What Does That Mean for the Stock?",
      "headlineKo": "Micron은 S&P 500 인덱스 펀드의 10대 보유 기업 중 하나가 되었습니다. 이것이 주식에 어떤 의미가 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c97f4ffde3219e0b91e50a2937289c9b21565d9cab2113a926f56c1e7a2981a6",
        "publishedAt": 1793379661,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron은 S&P 500 인덱스 펀드의 10대 보유 기업 중 하나가 되었습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 메모리 제조업체인 Micron Technology(MU -5.30%)는 현재 주식 시장에서 가장 큰 회사 중 하나로 평가됩니다.",
        "9월 말 현재 Vanguard S&P 500 ETF에서 9번째로 큰 보유 자산(VOO -1.77%)으로 펀드의 1.82%를 차지했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.52%, $1.7 trillion, 2.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.52%, $1.7 trillion, 2.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ba41b6cca3e49ff2a936",
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
      "headline": "Applied Optoelectronics Plunges 15%, Coherent Tumbles 13% as Hyperscaler Spending Fears Hit AI Optics Stocks; Lumentum and Marvell Sink 10%",
      "headlineKo": "하이퍼스케일러 지출이 AI 광학 주식에 타격을 줄 것이라는 우려로 Applied Optoelectronics는 15% 급락하고 Coherent는 13% 급락했습니다. 루멘텀 및 마벨 싱크 10%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=853742c8081dcdf82ae36430fe967e33824508ee0106fc80121a2a26d47f5869",
        "publishedAt": 1793379446,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "하이퍼스케일러 지출이 AI 광학 주식에 타격을 줄 것이라는 우려로 Applied Optoelectronics는 15% 급락하고 Coherent는 13% 급락했습니다. Lumentum 및 Marvell Sink 10% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,587.20 −1.26% Dow Jones 51,795.00 −1.10% Nasdaq 100 28,409.60 −2.33% Russell 2000 2,814.05 −1.61% S&P 500 7,587.20 −1.26% 다우존스 51,795.00 −1.10% 나스닥 100 28,409.60 −2.33% 러셀 20",
        "매진된 주문장이 그 낙진을 흡수할 수 있는지 여부가 문제입니다... 작성자: David Moadel 게시일: 2026년 10월 30일 오후 12:57(ET) · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 15%, 13%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 15%, 13%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cc432c0d40632771af33",
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
      "headline": "Should Palantir Stock Be in Your Portfolio Before Q3 Earnings?",
      "headlineKo": "Palantir 주식이 3분기 수익 이전에 귀하의 포트폴리오에 포함되어야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4bb83e5d1954c2134454b2ed9fb28fae677cd8e0d744ad545463fc425caef0d2",
        "publishedAt": 1793379180,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 주식이 3분기 수익 이전에 귀하의 포트폴리오에 포함되어야 합니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "fbe320f5b25d4bb25e2a",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Sandisk Sinks 12% Despite Earnings Beat and 8-for-1 Split as Memory Stocks Slide: “It’s Absurd”",
      "headlineKo": "Sandisk는 메모리 주식 하락으로 수익이 상회하고 8대 1 분할에도 불구하고 12% 하락했습니다: “터무니없는 일입니다”",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f557c8141d70e993cfa78d31247772badb3e41a8f73099a7430a4b32b41a6585",
        "publishedAt": 1793378845,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk는 메모리 주식 하락으로 수익이 상회하고 8대 1 분할에도 불구하고 12% 하락했습니다: “터무니없는 일입니다” | TIKR.com General Investing Sandisk는 메모리 주식 하락으로 실적이 저조하고 8대 1 분할에도 불구하고 12% 하락: “말도 안 되는 일입니다” Gian Estrada • 4 mi",
        "인텔과 아마존도 PC 수요와 AI 지출에 대한 의문을 제기한 보고서 이후 침몰했다.",
        "Sandisk의 총 마진은 110억 달러의 매출로 85%를 기록했으며, 이번 회계연도 생산량의 약 절반이 장기 계약에 따라 이루어졌습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, 85%, $11 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, 85%, $11 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dda14ee2622dc3453aea",
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
      "headline": "Micron Peer Enthusiasm Entices Me To Buy Again",
      "headlineKo": "Micron Peer의 열정으로 인해 다시 구매하게 되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6a0ad62a20ce0550573f0be1ef8a6e88afdc28d39897df9dc6edb6470508fea",
        "publishedAt": 1793378743,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Peer의 열정으로 인해 다시 구매하게 되었습니다 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,587.20 −1.26% Dow Jones 51,795.00 −1.10% Nasdaq 100 28,409.60 −2.33% Russell 2000 2,814.05 −1.61% S&P 500 7,587.20 −1.26% 다우존스 51,795.00 −1.10% 나스닥 100 28,409.60 −2.33% 러셀 20",
        "이것이 구매 사례를 더욱 강력하게 만드는 이유입니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $934.27, 12.27%, $279.00 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $934.27, 12.27%, $279.00 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "20504403eaab3c5b9a11",
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
      "headline": "Oracle Just Told Investors What Many Already Knew",
      "headlineKo": "오라클은 많은 사람들이 이미 알고 있는 사실을 투자자들에게 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7be43a727f5726785ef4bc4b0f3d49fe76a758107dc3d1c7abfa860a564a9b9b",
        "publishedAt": 1793378717,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle은 많은 사람들이 이미 알고 있는 내용을 투자자들에게 말했습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,587.20 −1.26% Dow Jones 51,795.00 −1.10% Nasdaq 100 28,409.60 −2.33% Russell 2000 2,814.05 −1.61% S&P 500 7,587.20 −1.26% 다우존스 51,795.00 −1.10% 나스닥 100 28,409.60 −2.33% 러셀 20",
        "뭔가를 주어야 하며 다음 2분기에 논쟁이 해결될 것입니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $139.56., 11.17%, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $139.56., 11.17%, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "34cd26364bf5ef755194",
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
      "headline": "Tesla Stock Could Rebound as These 3 Growth Drivers Take Center Stage",
      "headlineKo": "Tesla 주식은 이 3가지 성장 동인이 중심이 되면서 반등할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2196018df99c322a457e4ce56111ab569f7e11c40eef58ba86632837ee7b7ba5",
        "publishedAt": 1793378007,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla 주식은 이 3가지 성장 동인이 주목을 받으면서 반등할 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,587.20 −1.26% Dow Jones 51,795.00 −1.10% Nasdaq 100 28,409.60 −2.33% Russell 2000 2,814.05 −1.61% S&P 500 7,587.20 −1.26% 다우존스 51,795.00 −1.10% 나스닥 100 28,409.60 −2.33% 러셀 20",
        "세 가지 별도의 성장 엔진이 동시에 시작되고 있으며, 각각은 주식 가치 평가를 완전히 재편성할 수 있는 잠재력을 가지고 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $416.22,, 3.4%, $402.55. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $416.22,, 3.4%, $402.55. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a879391ff3fb4a5cbc6e",
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
      "headline": "KLA (KLAC) Q1 Earnings: How Key Metrics Compare to Wall Street Estimates",
      "headlineKo": "KLA (KLAC) 1분기 수익: 주요 지표를 월스트리트 추정치와 비교하는 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83179eabbbde51e36c6f40876548451820311b27ff2d13a3d2c3df83111c6155",
        "publishedAt": 1793377802,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA (KLAC) 1분기 수익: 주요 지표를 월스트리트 추정치와 비교하는 방법"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "7002c5da604af95e12e5",
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
      "headline": "Meta allegedly schemed to discredit outspoken NYU professor, unsealed court documents show",
      "headlineKo": "공개된 법원 문서에 따르면 메타는 솔직한 NYU 교수의 신용을 떨어뜨리기 위해 계획을 세웠다고 합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56abb699fde6097ca74ff6a7a5be9aafd959a34c624721653525bd5ddee2f224",
        "publishedAt": 1793377800,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "공개된 법원 문서에 따르면 메타는 솔직한 NYU 교수의 신용을 떨어뜨리기 위해 계획을 세웠다고 합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "5f4740112c43caef82cd",
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
      "headline": "Advanced Micro Devices (AMD) Lands First GSI Deployment Under AI Compute Deal",
      "headlineKo": "AMD(Advanced Micro Devices), AI 컴퓨팅 거래에 따라 최초의 GSI 배포",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a66e41182fe14aed5bd8897dc670a233e3949e4ba1fbd99c7577ad916d01d201",
        "publishedAt": 1793376859,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Advanced Micro Devices (AMD) Lands First GSI Deployment Under AI Compute Deal",
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
      "id": "4bb84bdc03b1d38828db",
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
      "headline": "Estée Lauder Expands Microsoft AI Partnership As It Targets Productivity, Personalized Experiences",
      "headlineKo": "에스티로더, 생산성과 개인화된 경험 목표로 Microsoft AI 파트너십 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb5a80a715e8e2b9e0c1e598f556bbbc07021de14c074f2396835c8721e16606",
        "publishedAt": 1793376765,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Estée Lauder Expands Microsoft AI Partnership As It Targets Productivity, Personalized Experiences",
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
      "id": "25520ae8fd2138273b55",
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
      "headline": "TD Cowen Maintains Buy on Quanta Services, Raises Price Target to $830",
      "headlineKo": "TD Cowen, Quanta 서비스에 대한 매수 유지, 목표 가격을 830달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e01d1c744b9411b6cc57723eda8fcff6ad407185a9da308825e50082b25b2015",
        "publishedAt": 1793376704,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TD Cowen, Quanta 서비스에 대한 매수 유지, 목표 가격을 830달러로 인상"
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
      "id": "361b11c026a18b4384b9",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Microsoft Copilot AI Predicts an Unbelievable Price for XRP",
      "headlineKo": "Microsoft Copilot AI, XRP의 믿을 수 없는 가격 예측",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d314691a5e637b5dbd74b84bf0582ffd17c08eb5ebbd7efd96518fd6ea254b2",
        "publishedAt": 1793376130,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Copilot AI는 XRP의 믿을 수 없는 가격을 예측합니다. Microsoft Copilot AI는 Ripple에 대해 매우 놀라운 일이 일어날 수 있다고 예측합니다.",
        "의도적으로 극단적이고 최고의 촉매제를 기반으로 AI 봇은 XRP가 2027년 1월 1일까지 미친 새로운 최고치로 치솟을 수 있다고 믿습니다.",
        "촉매제는 XRP 원장을 차세대 다중앙 은행을 위한 우선 브리지 및 결제 계층으로 공식 지정하는 주요 중앙 은행과 국제 결제 네트워크 간의 협력에 중점을 두고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.25,, 2.7%, $6.3 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $1.25,, 2.7%, $6.3 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e41aade4b824a270a9b8",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Micron Stock Dove Today",
      "headlineKo": "오늘 마이크론 주식이 급등한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=481b515c9e8fb0ab1baa5d6092f548ca11a1e27975467e56d831faa63f4a8fa5",
        "publishedAt": 1793375808,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 마이크론 주식이 급등한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Shares of Micron( MU -5.30% )은 금요일 오전에 비틀거리며 5.9%나 하락했습니다.",
        "반도체 전문업체의 주가를 하락시킨 촉매제는 경쟁사의 낙관적인 재무 보고서였는데, 이는 인공지능(AI)의 미래에 대한 투자자들의 우려를 완화시키기에는 충분하지 않았습니다.",
        "경쟁사 메모리 칩 제조업체인 Sandisk( SNDK -13.47% )는 모든 면에서 낙관적인 재무 결과를 발표했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.7%, 13.47%, 378% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.7%, 13.47%, 378% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1793623122.1684904
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
      "id": "b73f22dc14f0a18b09e9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "This Little-Known ETF Owns QQQ’s Stocks Without the Big Bet on Nvidia",
      "headlineKo": "잘 알려지지 않은 이 ETF는 Nvidia에 대한 큰 베팅 없이 QQQ의 주식을 소유합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7cab0e7e8ac596ccbf195fb2bf238f1e0f75be886329581dd5536876398c7e2b",
        "publishedAt": 1793373286,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "잘 알려지지 않은 이 ETF는 Nvidia에 대한 큰 베팅 없이 QQQ의 주식을 소유합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,616.60 +0.39% Dow Jones 51,952.50 +0.30% Nasdaq 100 28,552.00 +0.50% Russell 2000 2,823.86 +0.35% S&P 500 7,616.60 +0.39% 다우존스 51,952.50 +0.30% 나스닥 100 28,552.00 +0.50% 러셀 20",
        "작성자: Jake FitzGerald 2026년 10월 30일 게시, 오전 11:14(ET) · 3분 읽기 𝕏 f ⧉ 뉴욕 증권 거래소의 거래자들은 Jim Cramer와 같은 투자자들이 부문에 초점을 맞추면서 금융 시장의 역동적인 환경을 반영합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.39%, 0.30%, 0.50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.39%, 0.30%, 0.50% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "22e24821dcb1aae657ab",
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
      "headline": "Vertiv (VRT) Stock Price And Q3 Earnings Part Ways After Margin Surge",
      "headlineKo": "Vertiv(VRT) 주가와 3분기 수익은 마진 급등 이후 부분적으로 나타납니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=733b82190c6f447965def94e4890db8f87bc6b3b701f67815ed650ebf075c725",
        "publishedAt": 1793373073,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv(VRT) 주가와 3분기 수익은 마진 급등 이후 부분적으로 나타납니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
      "id": "ab7877a12f9848c60e71",
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
      "headline": "ETN Set to Report Q3 Earnings: Should You Buy, Sell or Hold the Stock?",
      "headlineKo": "ETN, 3분기 실적 보고 예정: 주식을 매수, 매도, 보유해야 할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a280a67fd4918a30ff560e4259cae73b315dd66397f83b5968299b6c20d66844",
        "publishedAt": 1793372040,
        "collectedAt": 1793624430.7200649
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ETN Set to Report Q3 Earnings: Should You Buy, Sell or Hold the Stock?",
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
      "id": "8185f73313c0172f2433",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "AAPL",
        "AMD",
        "AVGO",
        "NVDA",
        "SPY",
        "TSM"
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
      "headline": "Here’s What a $10,000 Investment in TSMC Stock Will Be Worth by 2030",
      "headlineKo": "2030년까지 TSMC 주식에 대한 10,000달러 투자의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5bd6ab28e097a5631ac7d0c54747b332b0cfb74ceb3b68a1744e0310cc91d22b",
        "publishedAt": 1793371802,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2030년까지 TSMC 주식에 대한 10,000달러 투자의 가치는 다음과 같습니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% The Motley Fool Taiwan Semiconductor Manufacturing ( TSM -5.95% ) 에 가입하세요.",
        "TSMC는 자체 칩을 설계하지 않습니다.",
        "Nvidia, Advanced Micro Devices, Broadcom 등 팹리스 칩 제조업체는 물론 Apple 및 Sony와 같은 거대 가전업체용 칩을 제조합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $38,000., 73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $38,000., 73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "eb184c792175a91463e9",
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
      "headline": "SanDisk (SNDK) Q1 2027 Earnings Call Transcript",
      "headlineKo": "SanDisk(SNDK) 2027년 1분기 실적 통화 기록",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d397278e42aa71c900ea3b8ccea6fb1b29a396b8fba5a138bff17cbe3c360689",
        "publishedAt": 1793371461,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SanDisk(SNDK) 2027년 1분기 실적 통화 기록"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
      "id": "e4a400f56741e9701a0b",
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
      "headline": "Earnings Preview: What to Expect From Salesforce's Report",
      "headlineKo": "수익 미리보기: Salesforce 보고서에서 기대할 수 있는 사항",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd2405f3a5ab87ee9908b14359cdd0fe991bd8578cc055980bd165cc9514e1f3",
        "publishedAt": 1793368996,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "수익 미리보기: Salesforce 보고서에서 기대할 수 있는 사항"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "b74f78a8228fe1113bb2",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Morgan Stanley Maintains Overweight on Constellation Energy, Raises Price Target to $391",
      "headlineKo": "Morgan Stanley, Constellation Energy에 대한 비중확대 유지, 목표 주가를 391달러로 상향 조정",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0a6220829b7c4ea68e18b39b9b1af784a4cc1486f8094b2e8d0630421e3ff787",
        "publishedAt": 1793368849,
        "collectedAt": 1793624430.7200649
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley Maintains Overweight on Constellation Energy, Raises Price Target to $391",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "c8076ae097afeafbf7f2",
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
      "headline": "Morgan Stanley Maintains Equal-Weight on Coherent, Lowers Price Target to $325",
      "headlineKo": "Morgan Stanley는 Coherent에 대해 동일 가중치를 유지하고 목표 가격을 325달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=09f3334b03fab816a647b265295adf86227966f468019735439b8ad9e16f3fdb",
        "publishedAt": 1793368800,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley Maintains Equal-Weight on Coherent, Lowers Price Target to $325",
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티어리얼즈는 Besi 지분을 20%로 끌어올리기로 한 이후 약 9% 상승했습니다.",
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
      "id": "e22343626fd189a07436",
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
      "headline": "Vistra Corp. (VST) Reports Next Week: Wall Street Expects Earnings Growth",
      "headlineKo": "Vistra Corp.(VST) 다음 주 보고서: 월스트리트는 수익 성장을 기대합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ebdcee8369282f61c7424a7b8ad7e7b9f4223b977cd596fa201f745ace2633d",
        "publishedAt": 1793365205,
        "collectedAt": 1793624430.7200649
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra Corp.(VST) 다음 주 보고서: 월스트리트는 수익 성장을 기대합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
      "id": "d0a21b48ce4588d86c75",
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
      "headline": "Truist Securities Reiterates Buy on Quanta Services, Raises Price Target to $967",
      "headlineKo": "Truist Securities, Quanta Services 매수를 유지하고 목표 가격을 967달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=394307478a733772c1c0fb58d7fda7828bb4e85e81d6f6f0e99ac0791a3143ff",
        "publishedAt": 1793364749,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Truist Securities, Quanta Services 매수를 유지하고 목표 가격을 967달러로 인상"
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
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클은 1년 만에 53% 하락했으며 15배의 수익을 올렸습니다.",
        "월 스트리트는 여전히 230달러 이상을 보고 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,587.20 −1.26% Dow Jones 51,795.00 −1.10% Nasdaq 100 28,409.60 −2.33% Russell 2000 2,814.05 −1.61% S&P 500 7,587.20 −1.26% 다우존스 51,795.00 −1.10% 나스닥 100 28,409.60 −2.33% 러셀 20"
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
      "id": "86e3ea927a65215cd9f6",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Watching Bloom Energy; Hunterbrook Media Issues Report Titled, “Bloom: Chinese Scandium Supply Route Restarts”; States Hunterbrook Capital Is Short $BE",
      "headlineKo": "블룸 에너지 보기; Hunterbrook 미디어 문제 보고서, \"개화: 중국 스칸듐 공급 경로 재개\"; 상태 Hunterbrook Capital의 매도 $BE",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=aff4725ce4e04c14cb0d1df29d046e21c176c2c9a5d24e76d351f55b48ef3195",
        "publishedAt": 1793363038,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Watching Bloom Energy; Hunterbrook Media Issues Report Titled, “Bloom: Chinese Scandium Supply Route Restarts”; States Hunterbrook Capital Is Short $BE",
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
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘날의 주요 업그레이드 및 다운그레이드: Boston Scientific, DoorDash, GE Vernova, Honeywell Aerospace, Incyte.",
        "Intel, Reddit, Rivian Automotive 등 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,587.20 −1.26% Dow Jones 51,795.00 −1.10% Nasdaq 100 28,409.60 −2.33% Russell 2000 2,814.05 −1.61% S&P 500 7,587.20 −1.26% 다우존스 51,795.00 −1.10% 나스닥 100 28,409.60 −2.33% 러셀 20"
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
      "id": "55513ee433948163083d",
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
      "headline": "Taiwan Semiconductor Manufacturing Company Ltd. (TSM) is Attracting Investor Attention: Here is What You Should Know",
      "headlineKo": "Taiwan Semiconductor Manufacturing Company Ltd.(TSM)가 투자자의 관심을 끌고 있습니다: 알아야 할 사항은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db3411e089a858cf0bf7370cf2e263d5e4e2dfdf3c3589b35ab08b64cd04b9fe",
        "publishedAt": 1793361602,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 TSM의 사업과 관련된 'Taiwan Semiconductor Manufacturing Company Ltd. (TSM) is Attracting Investor Attention: Here is What You Should Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Should Investors Buy Seagate's Shares After Q1 Earnings Momentum?",
      "headlineKo": "1분기 실적 모멘텀 이후 투자자들은 Seagate의 주식을 구매해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df3f5d77861ce8e751311a16f2e04e0ff78a0d8548d679de1821f4a26b20ce84",
        "publishedAt": 1793359380,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "1분기 실적 모멘텀 이후 투자자들은 Seagate의 주식을 구매해야 합니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
        "collectedAt": 1793623122.1684904
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
      "id": "f05bb8fd599072035a92",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "$1000 Invested In Taiwan Semiconductor 5 Years Ago Would Be Worth This Much Today",
      "headlineKo": "5년 전 대만 반도체에 투자한 1000달러가 오늘날 이 정도 가치가 될 것입니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=f08bc9c48d6bbedd87d1de9974fccc7675ee195ae5d69247be633d9d4b41d83a",
        "publishedAt": 1793358923,
        "collectedAt": 1793623122.1684904
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
        "이 기사는 TSM의 사업과 관련된 '$1000 Invested In Taiwan Semiconductor 5 Years Ago Would Be Worth This Much Today' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "EMCOR Group: Another Earnings Beat Could Provide A Floor",
      "headlineKo": "EMCOR 그룹: 또 다른 수익 상승으로 바닥을 제공할 수 있음",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1f3aef2fd61c63e4d956b11658e9109e55e5fb22ac6a58dd10cd5a7b76401944",
        "publishedAt": 1793353277,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR 그룹: 또 다른 수익이 최저점을 제공할 수 있음(NYSE:EME) | 알파 찾기 Joseph Mwangi 팔로워 9.67K 팔로우 요약 EMCOR 그룹은 강력한 데이터 센터 및 AI 인프라 수요가 r에도 불구하고 기록적인 성장을 주도하면서 여전히 매수세를 유지하고 있습니다.",
        "EME의 네트워크 및 통신 부문은 Y/Y 67.3% 급증하여 현재 총 매출의 약 45%를 차지하고 있으며 경영진은 2026년 지침을 매출 20~205억 달러, EPS 32~33.25달러로 상향 조정했습니다.",
        "가치 평가는 정상화되었습니다. EME는 P/E 19.3배(PEG 0.46)에 거래되고 있으며 향후 3년간 두 자릿수 EPS 성장이 예상됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 67.3%, 45%, $20 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 67.3%, 45%, $20 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "B. Riley Securities Maintains Neutral on Coherent, Lowers Price Target to $262",
      "headlineKo": "B. Riley Securities는 Coherent에 대해 중립을 유지하고 목표 가격을 262달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4bc3ea531cb81e0c2c5a254576de5b537976cf63dcf1774548dfcc3fb13be893",
        "publishedAt": 1793351623,
        "collectedAt": 1793623122.1684904
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "B. Riley Securities는 Coherent에 대해 중립을 유지하고 목표 가격을 262달러로 낮췄습니다."
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
          "ticker": "COHR",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
        "collectedAt": 1793623122.1684904
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
    }
  ],
  "byTicker": {
    "PLTR": [
      "cd338d49073998e9096a",
      "dc4b0164c166f0f742c1",
      "98ca814c2ecb450267d5",
      "4ff29e520199f7581e30",
      "ccec5def946c55f8bf32",
      "5dc062e1414da95ee492",
      "5f946293e6e5d4021b55",
      "9f2cdf8a9422c4aff1bd",
      "4ea7cfb53a2fc8cad1e5",
      "404916b40cde7e26d757",
      "431acb114193608d4c95",
      "a5e21b7c02d145ccfe26",
      "e1b0dc5160390e082804",
      "cc432c0d40632771af33"
    ],
    "AAPL": [
      "a2a9ca16bf69c023b908",
      "380f29c06c65864d1478",
      "3fa431bb895beaac5e74",
      "dc4b0164c166f0f742c1",
      "98ca814c2ecb450267d5",
      "589ccdd2480bbc693fd6",
      "cb3b6a69b44f47f45b81",
      "f25123fa25af6f1ed63a",
      "3cf4075d96bcea8d393e",
      "5dc062e1414da95ee492",
      "4ea7cfb53a2fc8cad1e5",
      "006e8a8b4f47da414422",
      "8b74984edb37f833ba11",
      "a8134328fd692556ef21",
      "5219537089a60a5e71c5",
      "a5e21b7c02d145ccfe26",
      "0cc131e6ce92c9995506",
      "8185f73313c0172f2433",
      "0d28310f175e470f9a32"
    ],
    "MU": [
      "a2a9ca16bf69c023b908",
      "98ca814c2ecb450267d5",
      "183adcebff561492bc22",
      "1885180449cefe2e3686",
      "de711abd7ab0465c44a6",
      "1ab5ae78e805edee6ecf",
      "3cf4075d96bcea8d393e",
      "47a48f0c8c4f3ffb67fb",
      "9f2cdf8a9422c4aff1bd",
      "66313ba0d255d75828c7",
      "aa79547458eac4bdcf3a",
      "9dd4c45b3c2022f3b43c",
      "da2a254f75cb48c6de1a",
      "f87340c6ad9a1e22b938",
      "c33ae1365e456e3cd2a1",
      "395b9a890485ffa37511",
      "a8134328fd692556ef21",
      "1364d9a7c85d00f09d49",
      "327c8b1bd399217ccd16",
      "8b5c56426402a46b9721",
      "19c09d9d67e241afe4ca",
      "061710eddcd3130215c6",
      "e921c00b30c71ca305d5",
      "dda14ee2622dc3453aea",
      "e41aade4b824a270a9b8",
      "52e466a92244f28b57d9",
      "cece9c24068749dabb71",
      "2a30d86c588824563806",
      "f8676083a56f9f37ed0c",
      "db0a48ac57f2be37df24",
      "55513ee433948163083d",
      "57148dde4a5474a6fb0b",
      "f05bb8fd599072035a92"
    ],
    "QCOM": [
      "a2a9ca16bf69c023b908",
      "9ec85093a6a8c851a290",
      "3cf4075d96bcea8d393e",
      "8b74984edb37f833ba11",
      "a8134328fd692556ef21",
      "695a46c04aa1c743f70a",
      "77f0e0e9d310659ca9d1",
      "c1554785a5116e5a9361"
    ],
    "WDC": [
      "a2a9ca16bf69c023b908",
      "3cf4075d96bcea8d393e",
      "991337b25ca4056de65b",
      "a8134328fd692556ef21",
      "2a30d86c588824563806"
    ],
    "AMZN": [
      "db27c9a8359ac675a2e7",
      "4ff29e520199f7581e30",
      "90e4cb22c6231543adc1",
      "081e8db771c6aa560e6d",
      "bbdb5ada84d4375d8635",
      "b57c183cb9299657b918",
      "66313ba0d255d75828c7",
      "f87340c6ad9a1e22b938",
      "35f79db4f120dc46efc1",
      "006e8a8b4f47da414422",
      "8b74984edb37f833ba11",
      "b107286f26a05c83fe90",
      "30206262fa16a687dbee",
      "8b5c56426402a46b9721",
      "96c250653eb5d3ca9a23",
      "19c09d9d67e241afe4ca",
      "13ab033c3c526623b7ac",
      "2342576b587580e90b3c",
      "b98e9fb877ab6c330020",
      "bafa7271d3086be0d412",
      "090dbe40ef2a39a41feb",
      "52cadd2accc273784755",
      "1db9f5256d199efb544c",
      "3c11ac3afff09ed4f7d9",
      "cac5e8f6ca01d9b52f5d",
      "41501b25c7815b1a77a3",
      "b10856bb8836abe07ae4",
      "88f834a1982fb8be3756"
    ],
    "LITE": [
      "db27c9a8359ac675a2e7",
      "de711abd7ab0465c44a6",
      "f44ba7ece204799ef1f6",
      "db8371e1281bbccb718c",
      "1117af9c65c09638097b",
      "b7ae7e1361c8219d8f90",
      "02fc7de55ceafce76b48",
      "ba41b6cca3e49ff2a936",
      "9b78bc7ef8cda0542cc7"
    ],
    "MRVL": [
      "db27c9a8359ac675a2e7",
      "de711abd7ab0465c44a6",
      "db8371e1281bbccb718c",
      "1117af9c65c09638097b",
      "b7ae7e1361c8219d8f90",
      "862c90e122ef087d7ede",
      "84f4c8d7a5df256d62e5",
      "ba41b6cca3e49ff2a936",
      "c1554785a5116e5a9361",
      "9b78bc7ef8cda0542cc7"
    ],
    "QQQ": [
      "db27c9a8359ac675a2e7",
      "6123e2178664c17a4974",
      "1fdd62a811df5f2a7568",
      "31c427ad8fa4c8d11fe5",
      "38f312a00b0148bae60a",
      "4ff29e520199f7581e30",
      "de711abd7ab0465c44a6",
      "ccec5def946c55f8bf32",
      "c49e39e9286f97df5742",
      "9ec85093a6a8c851a290",
      "081e8db771c6aa560e6d",
      "92942b675c5d1a5ba9b5",
      "bbdb5ada84d4375d8635",
      "5212dfcdbb41aeab97ac",
      "fd540d872f3f744dbc92",
      "5dc062e1414da95ee492",
      "ad846c83175cb415790d",
      "689ffbde0734ee85ad38",
      "f44ba7ece204799ef1f6",
      "dca8de5058cab8dad94e",
      "4ea7cfb53a2fc8cad1e5",
      "10b87b6eeccc20854a04",
      "99384f2522e5c8f1b836",
      "bf46bb095531a135a066",
      "991337b25ca4056de65b",
      "6b58e6a689ce6941834b",
      "70b922567411faf203c3",
      "a19ae61da4ee8645f899",
      "2e8b9e07672f4fd63bb8",
      "2fe61d0e222660322817",
      "3bff70ad349a5703b684",
      "8b5c56426402a46b9721",
      "8085f97dbf2dc072ed97",
      "96c250653eb5d3ca9a23",
      "862c90e122ef087d7ede",
      "92a9b0cdf20264e63e37",
      "bafa7271d3086be0d412",
      "ba41b6cca3e49ff2a936",
      "dda14ee2622dc3453aea",
      "20504403eaab3c5b9a11",
      "34cd26364bf5ef755194",
      "b73f22dc14f0a18b09e9",
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
      "ab8c3c94a2df6bbb052f"
    ],
    "SPY": [
      "db27c9a8359ac675a2e7",
      "e0ebbc038513f791bc47",
      "dc4b0164c166f0f742c1",
      "f7e2a4658d66849aae9d",
      "6123e2178664c17a4974",
      "1fdd62a811df5f2a7568",
      "38f312a00b0148bae60a",
      "4ff29e520199f7581e30",
      "2d03cc21c8b42a1ef360",
      "de711abd7ab0465c44a6",
      "ccec5def946c55f8bf32",
      "a294cd2d1673ba48400f",
      "081e8db771c6aa560e6d",
      "24aee6fb8f89ad55aef9",
      "9c601dc289245fba9a98",
      "1ab5ae78e805edee6ecf",
      "48a8f1108db86d22bb31",
      "5212dfcdbb41aeab97ac",
      "fd540d872f3f744dbc92",
      "47a48f0c8c4f3ffb67fb",
      "5dc062e1414da95ee492",
      "95a7d701f98fd93e608e",
      "ad846c83175cb415790d",
      "ed252772e77c262f1a23",
      "5f946293e6e5d4021b55",
      "689ffbde0734ee85ad38",
      "e88df904ed4a976ce338",
      "f3baf1b5ab3123b6915f",
      "aa79547458eac4bdcf3a",
      "2240b197470270d6ab16",
      "31f7ba2c51b686a30e4d",
      "e4cf2d073ed6e53fb733",
      "13f349f7fe7707be70f9",
      "183ae226f85d318a36fb",
      "e870ac582b3ab561df69",
      "bb2e93ca6ad8d5fd567d",
      "6b58e6a689ce6941834b",
      "2cd82e53f7dfe515404d",
      "70b922567411faf203c3",
      "163c6087f080617f6749",
      "89d04985e5babfb0d08a",
      "0a620b5c68e7cb8cafcf",
      "8eb49591290d34398bb9",
      "4431f3a8851b926b7666",
      "b107286f26a05c83fe90",
      "3a07a2edbc96bcdfcc06",
      "1364d9a7c85d00f09d49",
      "37ebfb280e7eaa69e5c2",
      "95dd6b6f4d4d89134f61",
      "3bff70ad349a5703b684",
      "8b5c56426402a46b9721",
      "af00cce162341fc1cb7f",
      "5bcada89993bae999e12",
      "ff59f912c37a19c5cbfd",
      "ca82510218754143512e",
      "96c250653eb5d3ca9a23",
      "e4ccbb0ffdf48c15bfe4",
      "862c90e122ef087d7ede",
      "026603316c7236e0e8e0",
      "bafa7271d3086be0d412",
      "d70dbed3ba8a2de28e9a",
      "71065390b1f9cd7d60d2",
      "e921c00b30c71ca305d5",
      "ba41b6cca3e49ff2a936",
      "dda14ee2622dc3453aea",
      "20504403eaab3c5b9a11",
      "34cd26364bf5ef755194",
      "e41aade4b824a270a9b8",
      "b73f22dc14f0a18b09e9",
      "0cc131e6ce92c9995506",
      "c1554785a5116e5a9361",
      "8185f73313c0172f2433",
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
      "88f834a1982fb8be3756"
    ],
    "GOOGL": [
      "e0ebbc038513f791bc47",
      "183adcebff561492bc22",
      "4ff29e520199f7581e30",
      "90e4cb22c6231543adc1",
      "a294cd2d1673ba48400f",
      "2ec8c4fe0fd9c22bfbb1",
      "95a7d701f98fd93e608e",
      "ed252772e77c262f1a23",
      "689ffbde0734ee85ad38",
      "14be2bdca94d2b16aa8a",
      "3b7bbe3cbe0af7acd816",
      "ac1edcda26b87a6c7a3b",
      "a52b53e1a7e461208008",
      "70e0014c8e09da2bdd26",
      "ca883763feba7d454702",
      "c33ae1365e456e3cd2a1",
      "ec689f09a585d4788173",
      "6521fbef058abc6e3364",
      "588a28f16c1c8ecb1bc4",
      "8085f97dbf2dc072ed97",
      "e2039e8a3277658c3190",
      "368b41fdf70a02fd574f",
      "bafa7271d3086be0d412",
      "abdc4112dd46b0e5d2de",
      "1c5924b18efbbc349e2f",
      "41501b25c7815b1a77a3",
      "b92dbb1712ca4bf77679",
      "ab8c3c94a2df6bbb052f"
    ],
    "VRT": [
      "c189d2f2d07614dedf7e",
      "2240b197470270d6ab16",
      "2cd82e53f7dfe515404d",
      "22e24821dcb1aae657ab",
      "1ce501ef361568b6d97b"
    ],
    "INTC": [
      "f7e2a4658d66849aae9d",
      "98ca814c2ecb450267d5",
      "4ff29e520199f7581e30",
      "90e4cb22c6231543adc1",
      "2d03cc21c8b42a1ef360",
      "ccec5def946c55f8bf32",
      "dca8de5058cab8dad94e",
      "31f7ba2c51b686a30e4d",
      "bf46bb095531a135a066",
      "a51e0807f713a58acf0e",
      "e870ac582b3ab561df69",
      "9f2da03fe32d506b0f33",
      "006e8a8b4f47da414422",
      "ec689f09a585d4788173",
      "30206262fa16a687dbee",
      "695a46c04aa1c743f70a",
      "4cc970dbdf51abcff6be",
      "37ebfb280e7eaa69e5c2",
      "95dd6b6f4d4d89134f61",
      "8b5c56426402a46b9721",
      "af00cce162341fc1cb7f",
      "5142e6ca5e5937746928",
      "b98e9fb877ab6c330020",
      "090dbe40ef2a39a41feb",
      "1db9f5256d199efb544c",
      "3c11ac3afff09ed4f7d9",
      "cac5e8f6ca01d9b52f5d",
      "489be6a428f0c1067b0d",
      "cf600de94f000233a5af",
      "73821e30889c667457c4",
      "b10856bb8836abe07ae4",
      "b92dbb1712ca4bf77679",
      "88f834a1982fb8be3756"
    ],
    "TSM": [
      "f7e2a4658d66849aae9d",
      "da2a254f75cb48c6de1a",
      "8185f73313c0172f2433",
      "55513ee433948163083d",
      "f05bb8fd599072035a92"
    ],
    "AMD": [
      "98ca814c2ecb450267d5",
      "1885180449cefe2e3686",
      "5dc062e1414da95ee492",
      "9f2cdf8a9422c4aff1bd",
      "66313ba0d255d75828c7",
      "9dd4c45b3c2022f3b43c",
      "da2a254f75cb48c6de1a",
      "f87340c6ad9a1e22b938",
      "e870ac582b3ab561df69",
      "0ddf5b9fedc061ae250b",
      "c33ae1365e456e3cd2a1",
      "395b9a890485ffa37511",
      "4cc970dbdf51abcff6be",
      "1364d9a7c85d00f09d49",
      "327c8b1bd399217ccd16",
      "37ebfb280e7eaa69e5c2",
      "8b5c56426402a46b9721",
      "19c09d9d67e241afe4ca",
      "061710eddcd3130215c6",
      "a5e21b7c02d145ccfe26",
      "5f4740112c43caef82cd",
      "8185f73313c0172f2433",
      "52e466a92244f28b57d9",
      "374522afd04ec24a8ba8",
      "cece9c24068749dabb71",
      "f8676083a56f9f37ed0c",
      "489be6a428f0c1067b0d",
      "55513ee433948163083d",
      "f05bb8fd599072035a92"
    ],
    "KLAC": [
      "6123e2178664c17a4974",
      "059e9a7c40d6090e247f",
      "a879391ff3fb4a5cbc6e"
    ],
    "NVDA": [
      "183adcebff561492bc22",
      "6fef6f84e572cacadb6b",
      "1885180449cefe2e3686",
      "92942b675c5d1a5ba9b5",
      "5212dfcdbb41aeab97ac",
      "ad846c83175cb415790d",
      "f44ba7ece204799ef1f6",
      "9f2cdf8a9422c4aff1bd",
      "3b7bbe3cbe0af7acd816",
      "10b87b6eeccc20854a04",
      "66313ba0d255d75828c7",
      "9dd4c45b3c2022f3b43c",
      "da2a254f75cb48c6de1a",
      "f87340c6ad9a1e22b938",
      "163c6087f080617f6749",
      "c33ae1365e456e3cd2a1",
      "395b9a890485ffa37511",
      "a3e8c6bcd4247102eaf7",
      "0a620b5c68e7cb8cafcf",
      "8eb49591290d34398bb9",
      "ec689f09a585d4788173",
      "046ee7179b5e193c9dd8",
      "327c8b1bd399217ccd16",
      "8b5c56426402a46b9721",
      "19c09d9d67e241afe4ca",
      "70a7e5c0ce9b5c363af6",
      "061710eddcd3130215c6",
      "b73f22dc14f0a18b09e9",
      "8185f73313c0172f2433",
      "52e466a92244f28b57d9",
      "374522afd04ec24a8ba8",
      "cece9c24068749dabb71",
      "f8676083a56f9f37ed0c",
      "489be6a428f0c1067b0d",
      "cf600de94f000233a5af",
      "55513ee433948163083d",
      "f05bb8fd599072035a92"
    ],
    "TSLA": [
      "6fef6f84e572cacadb6b",
      "24aee6fb8f89ad55aef9",
      "99384f2522e5c8f1b836",
      "4431f3a8851b926b7666",
      "3a07a2edbc96bcdfcc06",
      "3bff70ad349a5703b684",
      "ba6a81a53297c26be7b8",
      "71065390b1f9cd7d60d2",
      "34cd26364bf5ef755194",
      "b92dbb1712ca4bf77679"
    ],
    "STX": [
      "1fdd62a811df5f2a7568",
      "991337b25ca4056de65b",
      "2a30d86c588824563806",
      "f8b085c519e71046caf3"
    ],
    "SNDK": [
      "31c427ad8fa4c8d11fe5",
      "de711abd7ab0465c44a6",
      "c49e39e9286f97df5742",
      "f832f708202480081a9e",
      "3618b340cbb3b789db25",
      "e88df904ed4a976ce338",
      "c7b7a55e173d3f223fd5",
      "183ae226f85d318a36fb",
      "2e8b9e07672f4fd63bb8",
      "2fe61d0e222660322817",
      "fbe320f5b25d4bb25e2a",
      "e41aade4b824a270a9b8",
      "eb184c792175a91463e9",
      "b5e0299d237fd9b6345b",
      "4b15c9c4904290690269",
      "2a30d86c588824563806",
      "6899744b4216d2f79d78",
      "b10856bb8836abe07ae4",
      "b92dbb1712ca4bf77679"
    ],
    "MSFT": [
      "1885180449cefe2e3686",
      "ccec5def946c55f8bf32",
      "48a8f1108db86d22bb31",
      "6d41dda88ec65e298c22",
      "a9071e26574d3547310c",
      "9dd4c45b3c2022f3b43c",
      "72fd76cf82864a5e012e",
      "70b922567411faf203c3",
      "a19ae61da4ee8645f899",
      "395b9a890485ffa37511",
      "92a9b0cdf20264e63e37",
      "4bb84bdc03b1d38828db",
      "361b11c026a18b4384b9",
      "9f8e57729fa2a8273ba1",
      "5a62b510870d5434ba51",
      "2b0b6acc725a494df875"
    ],
    "ORCL": [
      "1885180449cefe2e3686",
      "9f2cdf8a9422c4aff1bd",
      "66313ba0d255d75828c7",
      "9dd4c45b3c2022f3b43c",
      "da2a254f75cb48c6de1a",
      "f87340c6ad9a1e22b938",
      "bb2e93ca6ad8d5fd567d",
      "04f8081efbfe9848cb3f",
      "d990a18f934d1c7043e8",
      "c33ae1365e456e3cd2a1",
      "395b9a890485ffa37511",
      "327c8b1bd399217ccd16",
      "33d6efe870e5eb5d1ab4",
      "8b5c56426402a46b9721",
      "19c09d9d67e241afe4ca",
      "061710eddcd3130215c6",
      "bafa7271d3086be0d412",
      "20504403eaab3c5b9a11",
      "52e466a92244f28b57d9",
      "cece9c24068749dabb71",
      "f8676083a56f9f37ed0c",
      "23933066ecce10352c3e",
      "55513ee433948163083d",
      "2b0b6acc725a494df875",
      "f05bb8fd599072035a92"
    ],
    "META": [
      "ccec5def946c55f8bf32",
      "9c601dc289245fba9a98",
      "f3baf1b5ab3123b6915f",
      "3b7bbe3cbe0af7acd816",
      "e4cf2d073ed6e53fb733",
      "13f349f7fe7707be70f9",
      "395b9a890485ffa37511",
      "9f2da03fe32d506b0f33",
      "a3e8c6bcd4247102eaf7",
      "d0e63f3e665325002d91",
      "071e147ba00cc1476a49",
      "f1e7aa6e7b6447e842c1",
      "061710eddcd3130215c6",
      "bafa7271d3086be0d412",
      "7002c5da604af95e12e5",
      "374522afd04ec24a8ba8",
      "692a57e1429cfe0a1bcc",
      "973350f8f49b091890c8",
      "41501b25c7815b1a77a3",
      "59611b92ccb893f134eb"
    ],
    "PWR": [
      "a216b01c4783c8897102",
      "3f5af75ea3b72052e467",
      "255e156922ab93bfbe8c",
      "c8b7a76abd9d654ca230",
      "25520ae8fd2138273b55",
      "d0a21b48ce4588d86c75",
      "875f4e29481ba34fd27e"
    ],
    "AVGO": [
      "b7ae7e1361c8219d8f90",
      "9f2da03fe32d506b0f33",
      "68ab5fbbc084950462d5",
      "6069da803337a7f4aa85",
      "d70dbed3ba8a2de28e9a",
      "c1554785a5116e5a9361",
      "8185f73313c0172f2433",
      "374522afd04ec24a8ba8",
      "eb3db0164d18b75d222b",
      "b92dbb1712ca4bf77679"
    ],
    "COHR": [
      "b7ae7e1361c8219d8f90",
      "30206262fa16a687dbee",
      "ba41b6cca3e49ff2a936",
      "c8076ae097afeafbf7f2",
      "ded29a8f82a4a8690b06"
    ],
    "GEV": [
      "89d04985e5babfb0d08a",
      "e4ccbb0ffdf48c15bfe4",
      "73821e30889c667457c4",
      "b10856bb8836abe07ae4"
    ],
    "HUBB": [
      "327c8b1bd399217ccd16",
      "2cf3c13ae1704857cfc9",
      "7dd16d041d043dccc441"
    ],
    "ARM": [
      "37ebfb280e7eaa69e5c2",
      "af00cce162341fc1cb7f",
      "c1554785a5116e5a9361",
      "15be5896c4767c4489e9"
    ],
    "CRM": [
      "788cc7003b8f4e178fdd",
      "e4a400f56741e9701a0b",
      "cece9c24068749dabb71"
    ],
    "ANET": [
      "ff59f912c37a19c5cbfd",
      "026603316c7236e0e8e0"
    ],
    "BE": [
      "f848daa43b638338ce89",
      "86e3ea927a65215cd9f6"
    ],
    "ETN": [
      "ab7877a12f9848c60e71"
    ],
    "CEG": [
      "b74f78a8228fe1113bb2"
    ],
    "AMAT": [
      "adef3d9a7b6fede827dc"
    ],
    "EME": [
      "f8676083a56f9f37ed0c",
      "ff7cefcb3aa5f6b4c8c2",
      "9af069dc1d1a922f4f01"
    ],
    "VST": [
      "e22343626fd189a07436"
    ]
  }
};
