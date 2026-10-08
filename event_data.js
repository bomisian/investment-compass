// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1791458329.196519,
  "events": [
    {
      "id": "dcefc390a109fda1eb13",
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
      "headline": "Why Did HPE, ANET, NTAP Stocks Surge To 52-Week Highs Today?",
      "headlineKo": "오늘 HPE, ANET, NTAP 주식이 52주 최고가로 급등한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba7ea5d56061d072f176055fd9ce8a167093e70e790096d090594a7bda98a2a5",
        "publishedAt": 1791431559,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 HPE, ANET, NTAP 주식이 52주 최고가로 급등한 이유는 무엇입니까?",
        "AI 에이전트 동향 뉴스 수익 전체 DIA 0.11% SPY 0.00% QQQ 0.03% Trending BULL 0.68% APLD 5.08% HOOD 0.47% SLS 0.27% UUUU WOLF 17.95% LQDA 0.23% LULU 0.03% PFE PEP 0.14% 홈 뉴스 시장 주식 Why HPE, ANET, NTAP 주식이 52-W로 급등했습니까?",
        "오늘 HPE, ANET, NTAP 주식이 52주 최고가로 급등한 이유는 무엇입니까?"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.11%, 0.00%, 0.03% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.11%, 0.00%, 0.03% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "80c2e6e50cd8539b354f",
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
      "headline": "Jim Cramer Sees More to Applied Materials (AMAT) Than Its Earnings Multiple",
      "headlineKo": "Jim Cramer는 수익 배수보다 Applied Materials(AMAT)에 더 많은 것을 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6060608340e993c2eee2a4d37c2e56fdc4536b17fa69c1b8e33afde54414a1f7",
        "publishedAt": 1791431056,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Cramer Sees More to Applied Materials (AMAT) Than Its Earnings Multiple",
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
      "id": "b2b4c03c5ad80c97c8f0",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "SpaceX Reportedly Wants to Borrow $40 Billion for Nvidia Chips Despite a $100 Billion Cash Pile",
      "headlineKo": "SpaceX는 1000억 달러의 현금 더미에도 불구하고 Nvidia 칩에 400억 달러를 빌리고 싶어하는 것으로 알려졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc888a53ea1ee7d37fc1b5660dc03e9a1bf780b2bafb9ee79118bd2a90f8b292",
        "publishedAt": 1791430982,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX는 1000억 달러의 현금 더미에도 불구하고 Nvidia 칩에 400억 달러를 빌리고 싶어하는 것으로 알려졌습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool SpaceX에 가입하세요(SPCX -2.51% ) 6월 종료 w",
        "그러나 회사는 이제 400억 달러를 추가로 빌리고 싶어하는 것으로 알려졌습니다.",
        "화요일 보고서에 따르면 로켓 및 인공지능(AI) 회사는 엔비디아로부터 칩을 구매하기 위해 약 100억 달러의 은행 대출과 300억 달러의 투자 등급 채권을 준비하고 있다고 합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $40 billion, $10 billion, $30 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $40 billion, $10 billion, $30 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7ca87bb4126792c8e111",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "MSFT Stock On 4-Day Winning Streak: Microsoft Takes On Apple's Macs With Nvidia-Powered Surface Ultra, More On-Device AI",
      "headlineKo": "MSFT 주식 4일 연속 상승: Microsoft, Nvidia 기반 Surface Ultra, 더 많은 온디바이스 AI로 Apple Mac에 도전",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=268d09bdbd448ce19249fa8a75b58c90a52f2dbad958d1f9a54846bbc108ef59",
        "publishedAt": 1791430123,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MSFT 주식 4일 연승: Microsoft가 Nvidia 기반 Surface Ultra로 Apple Mac을 장악하고 더 많은 온디바이스 AI AI 에이전트 동향 뉴스 수익 전체 DIA 0.11% SPY 0.00% QQQ 0.02% Trending APLD 5.21% BULL 0.51% HOOD 0.47% SLS 0.27% U",
        "MSFT 주식 4일 연속 상승: Microsoft, Nvidia 기반 Surface Ultra와 더 많은 온디바이스 AI로 Apple Mac을 압도",
        "Nvidia CEO Jensen Huang(왼쪽)과 Microsoft CEO Satya Nadella가 2026년 10월 7일 캘리포니아주 샌프란시스코에서 열린 Windows 이벤트에서 악수하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.11%, 0.00%, 0.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.11%, 0.00%, 0.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6ed6cad9d09a3f8fb9ab",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "NVDA",
      "relatedTickers": [
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
      "headline": "SPCX Stock Climbs Overnight: Jim Cramer Says SpaceX Could Become Nvidia's Largest Customer, Ives Backs $40B Chip Financing",
      "headlineKo": "SPCX 주가 밤새 상승: Jim Cramer는 SpaceX가 Nvidia의 최대 고객이 될 수 있다고 말하고 Ives는 400억 달러의 칩 자금 조달을 지원합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8b387287f4fb614b96b275182e2bc2c6cf06033bcc410d0302e9d0d944ad345",
        "publishedAt": 1791429532,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SPCX 주가 밤새 상승: Jim Cramer는 SpaceX가 Nvidia의 최대 고객이 될 수 있다고 말하고 Ives는 400억 달러의 칩 파이낸싱 AI 에이전트를 지원합니다.",
        "SPCX 주가 밤새 상승: Jim Cramer는 SpaceX가 Nvidia의 최대 고객이 될 수 있다고 말하고 Ives는 400억 달러의 칩 자금 조달을 지원합니다. Cramer는 Google과 Anthr의 수요를 강조하면서 월간 컴퓨팅 임대 수익이 30억~40억 달러에 이를 것으로 예상했습니다.",
        "SpaceX 로고는 2026년 6월 2일 우주 일러스트레이션이 투영되는 반사 표면에 놓인 스마트폰 화면에 표시됩니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $40, 0.11%, 0.00% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $40, 0.11%, 0.00% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "70cac09fae6da62552b9",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "5-star analyst resets SanDisk stock price target by $175",
      "headlineKo": "5성급 분석가가 SanDisk 주가 목표를 175달러 재설정했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c876c68d7674e9654107cc0094866259bed402e5f56107f2b8c8b1e7789546c",
        "publishedAt": 1791427620,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "5-star analyst resets SanDisk stock price target by $175",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "ad6e219880d9577ffa29",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ASML Has All The Ingredients For A Breakout (Q3 Earnings Preview)",
      "headlineKo": "ASML은 돌파를 위한 모든 요소를 ​​갖추고 있습니다(3분기 수익 미리보기)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=60ef41c20fc19a8e738b9e47435ced57ab4f7f82e33e2290215d6b389f5ff82d",
        "publishedAt": 1791414440,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML Has All The Ingredients For A Breakout (Q3 Earnings Preview)",
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
      "id": "b2059085a732eb6e4d02",
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
      "headline": "Broadcom Holds Early Talks About Financing Deal for OpenAI Chips",
      "headlineKo": "Broadcom, OpenAI 칩에 대한 자금 조달 거래에 대한 조기 논의",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3af21f1c5d1f8df13b4d9213e32f59a0fbadf655ca3507a7621b274bf3902bb2",
        "publishedAt": 1791414437,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 AVGO의 사업과 관련된 'Broadcom Holds Early Talks About Financing Deal for OpenAI Chips' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "71e017deb052339fbb62",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "AMD",
        "MRVL",
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
      "headline": "S&P 500 And Nasdaq 100 Slip From Record Highs Amid Pressure From Soaring Treasury Yields — SPCX, AMD, NVDA, MRVL In Focus",
      "headlineKo": "S&P 500과 Nasdaq 100은 국채 수익률 급증으로 인한 압력으로 사상 최고치에서 하락 — SPCX, AMD, NVDA, MRVL 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50352b28347a16ef361adee73323be4f5be5b71231708705135708bc7bebdb49",
        "publishedAt": 1791413451,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500 및 Nasdaq 100은 국채 수익률 급등으로 인한 압력으로 사상 최고치에서 하락 — SPCX, AMD, NVDA, MRVL In Focus AI 에이전트 동향 뉴스 수익 전체 DIA 0.22% SPY 0.08% QQQ 0.18% Trending HOOD 0.82% BULL APLD 4.75% USO 1.58% 바바 0",
        "S&P 500과 Nasdaq 100은 국채 수익률 급등으로 인한 압력으로 사상 최고치에서 하락했습니다. SPCX, AMD, NVDA, MRVL 집중 30년 만기 채권 수익률은 5.732%로 2002년 5월 이후 최고치를 기록했습니다.",
        "트레이더들이 2026년 7월 23일 뉴욕시 뉴욕증권거래소(NYSE) 1층에서 일하고 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.22%, 0.08%, 0.18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.22%, 0.08%, 0.18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "111c05b2eca8bbd4484a",
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
      "headline": "JEPQ Trailed the Nasdaq-100 by $17,970 on $300,000 Over One Year. The Covered Calls Are Why",
      "headlineKo": "JEPQ는 1년 동안 $300,000에 $17,970로 Nasdaq-100을 추격했습니다. 커버드콜이 필요한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a588b8ba93eac54b44d232e71309b7be67a822e0a57556ac651ca0f23be280e",
        "publishedAt": 1791412396,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JEPQ는 1년 동안 $300,000에 $17,970로 Nasdaq-100을 추격했습니다.",
        "Covered Call이 필요한 이유 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,806.00 −0.01% Dow Jones 51,149.80 −0.09% Nasdaq 100 31,199.80 +0.03% Russell 2000 2,793.44 −0.18% S&P 500 7,806.00 −0.01% 다우존스 51,149.80 −0.09% 나스닥 100 31,199.80 +0.03% 러셀 2000 2,793.44 −0."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $17,970, $300,000, 0.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $17,970, $300,000, 0.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4c2b8bde80226eed717c",
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
      "headline": "What Is Really Behind Micron Stock's Run?",
      "headlineKo": "Micron Stock의 실행 뒤에는 실제로 무엇이 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56789c56d46d94c18e2e6fb4cfbe035fac0296953fc1f1070d05812ee4e4b29c",
        "publishedAt": 1791411939,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Stock의 운영 뒤에는 실제로 무엇이 있습니까?",
        "| Trefis Micron Stock의 운영 뒤에는 실제로 무엇이 있습니까?",
        "2026년 10월 7일 · Trefis Team MU YTD +281.4% SPY YTD +14.6% QQQ YTD +23.6% MU 분석 → 투자자들은 여전히 ​​Micron Technology(MU)의 이익이 메모리 칩 가격에 따라 움직인다고 생각할 수 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 281.4%, 14.6%, 23.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 281.4%, 14.6%, 23.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "72a7feb610a82b5aca11",
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
      "headline": "Marvell Technology (MRVL) Lifts 2031 Revenue Goal To $70 Billion To $90 Billion",
      "headlineKo": "Marvell Technology(MRVL), 2031년 매출 목표를 700억~900억 달러로 상향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5daf7d5cbc2a20a6b7d3fce112ca065ed684c09c3e64d80fcfeebc38048ddf9",
        "publishedAt": 1791411353,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology (MRVL) Lifts 2031 Revenue Goal To $70 Billion To $90 Billion",
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
      "id": "c49b8222f81785e999a2",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "AMZN",
        "AVGO",
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
      "headline": "Broadcom, Oracle, and SpaceX pursue blockbuster debt deals amid AI buildout - WSJ",
      "headlineKo": "Broadcom, Oracle, SpaceX, AI 구축 속에서 블록버스터 부채 거래 추진 - WSJ",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5aac99229d1977e1003724bed3b6ede51d18663bd7c2253045e5e1c57b312348",
        "publishedAt": 1791410308,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 ORCL의 사업과 관련된 'Broadcom, Oracle, and SpaceX pursue blockbuster debt deals amid AI buildout - WSJ' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "8d7c2623291f8a3ca05c",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "ORCL"
      ],
      "relatedEntities": [
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
      "headline": "Broadcom, Oracle, and SpaceX pursue blockbuster debt deals amid AI buildout - WSJ",
      "headlineKo": "Broadcom, Oracle, SpaceX, AI 구축 속에서 블록버스터 부채 거래 추진 - WSJ",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5aac99229d1977e1003724bed3b6ede51d18663bd7c2253045e5e1c57b312348",
        "publishedAt": 1791410308,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom, Oracle, SpaceX, AI 구축 속에서 블록버스터 부채 거래 추진 - WSJ"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "4055867266143e5f7d3a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ORCL",
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
      "headline": "Market Chatter: Broadcom, Oracle, SpaceX Seek Financing for AI Chip Purchases",
      "headlineKo": "시장 잡담: Broadcom, Oracle, SpaceX, AI 칩 구매를 위한 자금 조달 모색",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83d6292d2594f7ccb711d65d6db0810ed16e50936015d86e6a86fd223b1c8a66",
        "publishedAt": 1791410274,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 ORCL의 사업과 관련된 'Market Chatter: Broadcom, Oracle, SpaceX Seek Financing for AI Chip Purchases' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "50700b81247a8b9181cd",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMD",
        "ARM",
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
      "headline": "Visual Computing - Global Strategic Business Report: Capitalize on 19.2% CAGR as the Market Surges to US$78.4B by 2030; Benchmark Intel, Arm, Clarifai, Imagination Technologies and Leela AI",
      "headlineKo": "비주얼 컴퓨팅 - 글로벌 전략 비즈니스 보고서: 2030년까지 시장이 784억 달러로 급증함에 따라 CAGR 19.2%를 활용합니다. 벤치마크 Intel, Arm, Clarifai, Imagination Technologies 및 Leela AI",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=36c3585ccd8fe6e010a7be06b57192429eb8ba892d7e8dc01c37cc9550e9dde6",
        "publishedAt": 1791407880,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 INTC의 사업과 관련된 'Visual Computing - Global Strategic Business Report: Capitalize on 19.2% CAGR as the Market Surges to US$78.4B by 2030; Benchmark Intel, Arm, Clarifai, Imagination Technologies and Leela AI' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "fef6183cd2ac62ba329f",
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
      "headline": "Netlist (NLST) Is Up 22.3% After $600 Million Micron Licensing Deal - Has The Bull Case Changed?",
      "headlineKo": "Netlist(NLST)는 6억 달러 규모의 Micron 라이센스 거래 이후 22.3% 상승했습니다. 상황이 바뀌었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=036134bd5f5c43a10e468208b86241fc525585f35fac9b430f79c5c4756babf2",
        "publishedAt": 1791407521,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Netlist(NLST)는 6억 달러 규모의 Micron 라이센스 거래 이후 22.3% 상승했습니다. 상황이 바뀌었나요?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "d2ce1ffb2ee07ec13f60",
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
      "headline": "Nvidia Earned About Twice as Much as Apple Last Quarter. Its Stock Is Worth Only About 20% More.",
      "headlineKo": "엔비디아는 지난 분기 애플보다 약 2배의 수익을 올렸습니다. 그 주식의 가치는 약 20% 정도 더 높습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b51d15b94025beab21a4481217c3fc9b789b407ad3b6b701798b84c43842e14",
        "publishedAt": 1791406621,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔비디아는 지난 분기 애플보다 약 2배의 수익을 올렸습니다.",
        "그 주식의 가치는 약 20% 정도 더 높습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia(NVDA -0.74%)는 이제 Apple(AAPL +0.91%)보다 큰 차이로 수익을 올립니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, $59.7 billion, $29.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, $59.7 billion, $29.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "afecc5b84fba311acbeb",
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
      "headline": "If You'd Invested $1,000 in Nvidia (NVDA) Stock 10 Years Ago, Here's How Much You'd Have Today",
      "headlineKo": "10년 전에 Nvidia(NVDA) 주식에 1,000달러를 투자했다면 현재 얼마를 갖게 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48f9b8add6afaf2fdc9eed5f3c800e0be2b4b37de0ec3e3850c715dfde25a53a",
        "publishedAt": 1791406560,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10년 전에 Nvidia(NVDA) 주식에 1,000달러를 투자했다면 현재 투자 금액은 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Nvidia( NVDA -0.74% )는 한 번만 있었습니다.",
        "그러나 이 회사는 자사의 강점에 의지하여 수년에 걸쳐 다른 산업에서 자사 GPU의 용도를 찾는 데 도움을 주었습니다.",
        "그리고 최근 몇 년 동안 병렬 프로세서를 개발하고 개발자가 CUDA 플랫폼에서 해당 코드를 생성하도록 유도하는 과정에서 얻은 선두를 통해 인공 지능용 가속기 칩 분야에서 단연 최고의 공급업체로 자리매김했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, 13,930%, $140,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,000, 13,930%, $140,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a849d3aea3f23ac77131",
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
      "headline": "Micron Rallies as AI Tailwinds Drive a Street-High Price Target | Closing Bell",
      "headlineKo": "AI 순풍으로 인해 마이크론 랠리가 사상 최고가 목표 달성 | 닫는 벨",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1bd07f2146abad4636fa74a81f5c82759138d3afa7019fe4e3302a90b6fc25dc",
        "publishedAt": 1791404883,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 순풍으로 인해 마이크론 랠리가 사상 최고가 목표 달성 | 닫는 벨"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "132b19a6235bf7dde011",
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
      "headline": "EMCOR vs. IES Holdings: Does a $691 Million Deal Change the Better Buy?",
      "headlineKo": "EMCOR 대 IES Holdings: 6억 9,100만 달러 규모의 거래가 더 나은 구매를 변화시키는가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa032f5e7df897e822486ecd4d7dab05bc02c9dedf227d6823c0d2ee30f78e38",
        "publishedAt": 1791403413,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR vs. IES Holdings: Does a $691 Million Deal Change the Better Buy?",
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
      "id": "ff8a7e5ac6bcd743ed3c",
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
      "headline": "Is Advanced Micro Devices Inc. (AMD) Right to Bet $8.2 Billion on the Future of Physical AI?",
      "headlineKo": "AMD(Advanced Micro Devices Inc.)가 물리적 AI의 미래에 82억 달러를 투자할 권리가 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c1ffe6e8023cd5ecf0789d2b0a858778871893fbf6e9d0e1018ced125fb17d4",
        "publishedAt": 1791403237,
        "collectedAt": 1791439604.5377052
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
        "이 기사는 AMD의 사업과 관련된 'Is Advanced Micro Devices Inc. (AMD) Right to Bet $8.2 Billion on the Future of Physical AI?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b0712ee7bdafdd0d89e4",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD"
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD’s Lisa Su Visits South Korea, Reportedly Discusses AI Collaboration With Samsung, SK Hynix",
      "headlineKo": "AMD의 리사 수(Lisa Su) 한국 방문, 삼성·SK하이닉스와 AI 협력 논의",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f1f7b17e6468653000e0153a270548613e016b32fddf17a59db5cd211bfe6d8",
        "publishedAt": 1791402894,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD의 리사 수(Lisa Su) 한국 방문, 삼성·SK하이닉스와 AI 협력 논의"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "4de798a2dd1fdec9b824",
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
      "headline": "Credo Technology Group vs. Marvell Technology: Which Stock Is a Better Buy in 2026?",
      "headlineKo": "Credo Technology Group vs. Marvell Technology: 2026년에는 어느 주식을 사는 것이 더 나을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91edad82563d74ab7c4ba72ee109f2ce2a0cfebbc7fdfbec88e540da88ce2df4",
        "publishedAt": 1791400741,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology: 2026년에는 어떤 주식을 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능이 연결성의 한계를 뛰어넘으면서 Credo Technology Group( CRDO -0.37% )과 Marvell Technology( MRVL)",
        "Credo는 에너지 효율적인 틈새 연결 솔루션을 목표로 하는 반면 Marvell은 네트워킹 및 스토리지 구성 요소의 광범위한 공급업체로 운영됩니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $220.01, 0.37 %, $0.82 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $220.01, 0.37 %, $0.82 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "28b5f785057a38b178de",
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
      "headline": "Opinion: It Does Not Matter if Muse Generates “8% of Revenue” for Meta – Zuckerberg Can Win Regardless",
      "headlineKo": "의견: Muse가 메타에 대해 \"8%의 수익\"을 창출하는지 여부는 중요하지 않습니다. Zuckerberg는 이에 관계없이 승리할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=52e7748ec2ee915effa6b4fd3d9cb906724572aa16b3ce1c719086c12416de63",
        "publishedAt": 1791400539,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "의견: Muse가 메타에 대해 \"8%의 수익\"을 창출하는지 여부는 중요하지 않습니다. Zuckerberg는 그럼에도 불구하고 승리할 수 있습니다 | TIKR.com 일반 투자 의견: Muse가 메타에 대해 \"수익의 8%\"를 창출하는지 여부는 중요하지 않습니다. – Zuckerberg Can Wi",
        "더 큰 기회는 Muse가 수집하는 데이터로, 이는 Meta의 전체 광고 비즈니스 전반에 걸쳐 광고 타겟팅을 강화할 수 있다는 것입니다.",
        "광고는 2025년 Meta의 매출 2,010억 달러 중 약 98%를 차지하므로 광고 가격이 1%만 상승해도 연간 수십억 달러의 가치가 있을 것입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, 98%, $201 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8%, 98%, $201 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "80b2ddbea274b27af1df",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
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
      "headline": "Now Is the Perfect Time to Buy Amazon and Alphabet Stock",
      "headlineKo": "지금은 아마존과 알파벳 주식을 매수하기에 완벽한 시기입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c060be30d9303bebd5afcb29f6f25d198408118a352ded86fb3365414b3af36",
        "publishedAt": 1791400140,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금은 Amazon 및 Alphabet 주식을 구매하기에 완벽한 시기입니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Amazon( AMZN +1.42% ) 및 Alphabet( GOOG +0.81% )( GOOGL +0.81% )",
        "아마존은 올여름 사상 최고치보다 10% 이상 하락했고, 알파벳은 14% 하락했다.",
        "그러나 투자하지 않은 자본이 있다면 지금이 이를 매수할 최적의 시기라고 생각합니다. 왜냐하면 이번 달 말에 발표할 정보 중 일부가 시장에서 이러한 주식을 보는 방식을 극적으로 바꿀 수 있기 때문입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 14%, 1.42 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10%, 14%, 1.42 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8c682677fccf26451302",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "MSFT",
        "NVDA",
        "PLTR",
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
      "headline": "Dan Ives Thinks AI Buildout Still In Early Stages, With NVDA, MSFT, PLTR, AAPL And CRWD As Top AI Picks",
      "headlineKo": "Dan Ives는 NVDA, MSFT, PLTR, AAPL 및 CRWD를 최고의 AI 선택으로 포함하여 AI 구축이 아직 초기 단계에 있다고 생각합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1bc7e28d7009bc9b9c4a2a723dd899b3dd853fe658552bbb86d0f15bad9a4ad1",
        "publishedAt": 1791399618,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dan Ives는 NVDA, MSFT, PLTR, AAPL 및 CRWD를 최고의 AI로 선택하여 AI 구축이 아직 초기 단계에 있다고 생각합니다. 트렌드 뉴스 수익 전체 DIA 0.69% SPY 0.22% QQQ 0.16% 트렌드 APLD 2.33% BULL 18.89% PLTR 0.95% WOLF 19.38% PEP 1.58% 리븐",
        "Dan Ives는 NVDA, MSFT, PLTR, AAPL 및 CRWD를 최고의 AI로 선정하여 AI 구축이 아직 초기 단계에 있다고 생각합니다. 베테랑 기술 분석가인 Dan Ives는 4조 달러 규모의 인공 지능 지출 붐이 이제 막 시작될 것으로 예상하며 Nvidia, Microsoft,",
        "월드 플래그십 스페이스 서울에서 열린 팬 이벤트에 참석한 기술 분석가 Dan Ives."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.69%, 0.22%, 0.16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.69%, 0.22%, 0.16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a599076a5e732f06853a",
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
      "headline": "Dan Niles Sees a New Way for Meta (META) to Cash In on AI Spending",
      "headlineKo": "Dan Niles는 메타(META)를 통해 AI 지출을 현금화할 수 있는 새로운 방법을 제시합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=01622ed9a8d7dd2951fc1647ae3b12a16258f167060b1b50ccc76665fb09a5de",
        "publishedAt": 1791398693,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dan Niles는 메타(META)를 통해 AI 지출을 현금화할 수 있는 새로운 방법을 제시합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "94c488c0c617ade02d48",
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
      "headline": "Western Digital Stock Has One Thing Left To Prove",
      "headlineKo": "Western Digital 주식에는 증명할 것이 한 가지 남아 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3cc0284dd0a34c88703454fc0eeeb3b69ad151985d88c18e43ee3b4d35575a77",
        "publishedAt": 1791398649,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital 주식에는 증명할 것이 한 가지 남아 있습니다 | Trefis Western Digital 주식에는 2026년 10월 7일에 입증할 것이 한 가지 남아 있습니다. · Trefis Team WDC YTD +135.6% SPY YTD +14.6% QQQ YTD +23.6% WDC 분석 → Western Digital(WDC)이 곧 확인할 수 있습니다.",
        "경영진은 AI 연구소, 최신 클라우드 회사, 자율주행차 제조업체가 스토리지를 위해 제조업체를 점점 더 찾고 있다고 지적합니다.",
        "Western Digital은 하드 드라이브만 판매합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 135.6%, 14.6%, 23.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 135.6%, 14.6%, 23.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "99e805825d966255bf6e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta, Google Put $300M Into Zuckerberg-Backed $1.8B AI Biology Bet",
      "headlineKo": "Meta, Google은 Zuckerberg가 지원하는 18억 달러 규모의 AI 생물학 베팅에 3억 달러 투자",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b92376ce9ea60de5aee6b7354812e29e5252e9c017323cf92e719c2b02aab6c7",
        "publishedAt": 1791397813,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta, Google은 Zuckerberg가 지원하는 18억 달러 규모의 AI 생물학 베팅에 3억 달러 투자"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "dcd69b5527bcde43ba84",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "SK Hynix vs. Taiwan Semiconductor Manufacturing: Which Computer Chip Stock Is a Better Buy in 2026?",
      "headlineKo": "SK하이닉스 vs. 대만 반도체 제조: 2026년에는 어느 컴퓨터 칩 주식이 더 나은 매수인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6f9468cd74b5aefa0ba208e69fe3ccfd6ac8eb991ccd3c954eb85d253163f9a2",
        "publishedAt": 1791395882,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만 반도체 제조: 2026년에는 어떤 컴퓨터 칩 주식을 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공 지능 패권 경쟁은 특수 하드웨어에 대한 막대한 수요를 촉진하고 있습니다.",
        "투자자들은 이러한 성장을 포착하기 위해 SK하이닉스(SKHY -2.36%)와 Taiwan Semiconductor Manufacturing(TSM -2.09%) 중에서 선택하는 경우가 많습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.36%, 2.09%, $178.25 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.36%, 2.09%, $178.25 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d1cf85a9755277b4866d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "AMD",
        "ARM",
        "INTC",
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
      "headline": "ARM vs. Marvell Technology: What Revenue Trends for These Artificial Intelligence Companies Tell Investors",
      "headlineKo": "ARM 대 Marvell Technology: 인공 지능 회사의 수익 추세가 투자자에게 알려주는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=986620ff35e3dac8c37a64b4c0328832ce712aebd04ad245ecde44235f3544e1",
        "publishedAt": 1791395721,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 0.81%, $844.0 million, $1.5 billion, $983.0 million, $1.8 billion, $1.2 billion, $1.9 billion, $1.1 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 ARM의 사업과 관련된 'ARM vs. Marvell Technology: What Revenue Trends for These Artificial Intelligence Companies Tell Investors' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "996ffd4aed212a28a424",
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
      "headline": "Meta’s Muse, Agentic AI Could Put the Squeeze on These Retail Power Providers",
      "headlineKo": "Meta의 Muse인 Agentic AI는 이러한 소매 전력 공급업체를 압박할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd3a838c8d4e7d5a7940661ce7ee5e1dc562e59e33058befe515a9bbb65e8450",
        "publishedAt": 1791395520,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta의 Muse인 Agentic AI는 이러한 소매 전력 공급업체를 압박할 수 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "8cf93e6b4ced9f5adf6c",
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
      "headline": "Is Constellation Energy Stock a Good Fit For Your Portfolio Risk?",
      "headlineKo": "Constellation Energy 주식은 귀하의 포트폴리오 위험에 적합합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc8c09dd3460b889563c27a0493b6f89b819a783d47f041bd0c44ac0b9b9e258",
        "publishedAt": 1791394391,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy 주식은 귀하의 포트폴리오 위험에 적합합니까?",
        "| Trefis는 Constellation Energy 주식이 귀하의 포트폴리오 위험에 적합합니까?",
        "2026년 10월 7일 · Trefis Team CEG YTD -14.8% SPY YTD +14.6% XLU YTD -2.3% CEG 분석 → CEG(Constellation Energy) 점유율은 지난 5개 세션 동안 13.5% 상승하여 S&P 500의 1.9% 상승률을 크게 앞섰습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, 0.61%, $104. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CEG에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $10,000, 0.61%, $104. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1b6e3b824c40c9f9f1f0",
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
      "headline": "Broadcom vs. Qualcomm: Rapid Growth vs. Flat Revenue",
      "headlineKo": "Broadcom vs. Qualcomm: 빠른 성장 vs. 수익 정체",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ff5d4c6bc446fe2bf7e7aaf2f6ed1f69fbba3edf4817a0de2ed9bd3b48f728a",
        "publishedAt": 1791393602,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "균일 수익 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Broadcom: 빠른 수익 가속화 Broadcom( AVGO +0.19% )은 고급 반도체 솔루션과 핵심 전자 제품을 공급합니다.",
        "최근 소프트웨어 라이센스 수정과 관련하여 유럽 연합 독점 금지 담당자로부터 자세한 운영 문의를 받는 동안 새로운 기업용 인공 지능 소프트웨어 도구를 도입하고 장기적인 협력을 확대했습니다.",
        "Qualcomm: 점진적인 매출 감소 Qualcomm( QCOM -2.16% )은 모바일 장치 및 통신 네트워크용 기본 무선 통신 기술과 집적 회로를 개발하고 라이선스를 부여합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.16%, $14.1 billion, $10.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.16%, $14.1 billion, $10.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "785064cd228213926130",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell price target raised by Bank of America on $80 billion sales outlook",
      "headlineKo": "Bank of America는 800억 달러 매출 전망에 대해 Marvell 가격 목표를 상향 조정했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0017c3b0e9ce29b1f396963d341bbd3de5ef8354c72c8d708e0ed5cab7549d34",
        "publishedAt": 1791393000,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bank of America는 800억 달러 매출 전망에 대해 Marvell 가격 목표를 상향 조정했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "6ef5fc43dfa729b5a1ab",
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
      "headline": "3 Ways New Investors Get Apple Stock Wrong",
      "headlineKo": "신규 투자자가 Apple 주식을 오해하는 3가지 방법",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebe00426238d0ee503e51f7b9062261b888b9e945caaedd974640932d5ff55e0",
        "publishedAt": 1791392423,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple 주식 교훈 모든 신규 투자자가 알아야 할 MoneyLion One 대출 신용 카드 Instacash 신용 빌더 플러스 MoneyLion 돈 쓰기Lion 저축 관리 투자 신용 모니터링 예산 게임 2026년 10월 6일 신규 투자자가 Apple을 얻는 3가지 방법",
        "야후 파이낸스(Yahoo Finance)에 따르면 1일에는 330.32달러에 거래되었는데, 이는 연간 거의 30% 증가한 수치입니다.",
        "2016년으로 거슬러 올라가면 주가는 1,063% 조금 넘게 상승했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $330.32, 30%, 1,063% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $330.32, 30%, 1,063% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6d1f7a11661a39e4ceda",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Intel vs. SK Hynix: Which Semiconductor Stock Is a Better Buy in 2026?",
      "headlineKo": "인텔 vs. SK하이닉스: 2026년에는 어느 반도체 주식이 더 나은 매수인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f931e8954e5454c5b64cb900c9c20ecc039e3723dcbb11b623ece3afefdc104",
        "publishedAt": 1791392282,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SK하이닉스: 2026년에는 어느 반도체 주식이 더 나은 매수인가?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공 지능이 계속해서 세계 경제를 재편함에 따라 Intel Corp. 중에서 선택합니다.",
        "( INTC +0.55% ) 및 SK 하이닉스( SKHY -2.36% )는 2026년 메모리 리더의 폭발적인 성장과 전통적인 거대 기업의 복잡한 턴어라운드를 비교 평가해야 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.55%, 2.36%, $113.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.55%, 2.36%, $113.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "22f0ec91a3fce52724c7",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Google, Constellation ink deal to expand, extend nuclear generation capacity",
      "headlineKo": "Google, Constellation Ink, 원자력 발전 용량 확장 계약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8cc1325a7fb58fa3ad2093e75fe656bea5f63cc4861bb39723ca75c0e59f2449",
        "publishedAt": 1791390480,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google, Constellation ink deal to expand, extend nuclear generation capacity",
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
      "id": "56e0570df4fecf510b13",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML",
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
      "headline": "ASML Holding N.V. vs. Broadcom: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "ASML Holding N.V. 대 Broadcom: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4281d0d244540c3d08d057dd9088d62322f08207645df39669e49f40a892da33",
        "publishedAt": 1791390302,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 고성능 컴퓨팅에 대한 수요가 증가함에 따라 투자자는 하드웨어 본질주의와 인프라 중 하나를 선택해야 합니다.",
        "( ASML -1.59% ) 또는 Broadcom ( AVGO +0.19% )이 2026년에 귀하의 포트폴리오를 주도하게 될까요?"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.59%, 0.19%, $36.6 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.59%, 0.19%, $36.6 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "15e1980cd8fa36812bf0",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Can Google's Nuclear Deal Strengthen Constellation Energy's Growth Outlook?",
      "headlineKo": "Google의 원자력 거래가 Constellation Energy의 성장 전망을 강화할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=40ac95ca9b33e980396465ef74121e18093634067e9c213d5cfd52b26142ae92",
        "publishedAt": 1791388500,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google의 원자력 거래가 Constellation Energy의 성장 전망을 강화할 수 있습니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "062490ec287877913a16",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "MU",
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
      "headline": "SanDisk and Micron Rise 3% as Tight Memory Supply Outruns a Softer Tech Tape; Western Digital Lags",
      "headlineKo": "부족한 메모리 공급이 더 부드러운 기술 테이프를 앞지르면서 SanDisk와 Micron은 3% 상승합니다. Western Digital의 지연",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c87f8592ab809016c8fd5f391d659fa73c3c25b6f5a676a4991c59429fbb3665",
        "publishedAt": 1791388480,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "부족한 메모리 공급이 더 부드러운 기술 테이프를 앞지르면서 SanDisk와 Micron은 3% 상승합니다. Western Digital Lags - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,810.40 +0.04% Dow Jones 51,206.80 +0.03% Nasdaq 100 31,219.00 +0.09% Russell 2000 2,797.84 −0.02% S&P 500 7,810.40 +0.04% 다우존스 51,206.80 +0.03% 나스닥 100 31,219.00 +0.09% 러셀 2000 2,797.84 −0.",
        "Western Digital은 매우 다른 이야기를 들려줍니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, $1,712.99, 0.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, $1,712.99, 0.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "407ffd93dc2a4be5a131",
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
      "headline": "Only 20% of GE Vernova's Order Book Is Data Centers. Here's Why That's the Bull Case, Not the Risk.",
      "headlineKo": "GE Vernova 주문서의 20%만이 데이터 센터입니다. 이것이 위험이 아니라 황소 사례인 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f227671d59c84d4e9c5da3578f2ff04dd92c1335e11ec5423bd0217c9a3c1d49",
        "publishedAt": 1791388440,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova 주문서의 20%만이 데이터 센터입니다.",
        "이것이 위험이 아니라 황소 사례인 이유는 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능(AI) 혁명의 가장 큰 수혜자 중 하나로 종종 강조됩니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 3.12%, $5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, 3.12%, $5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "26e6878b714c53ff7657",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Technology (MU): Pullback Driven by Debates Over AI Capex Sustainability",
      "headlineKo": "마이크론 테크놀로지(MU): AI Capex 지속 가능성에 대한 논쟁으로 인한 철수",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=32e0a81eb4dd2e4402b3cc2f631c6d54240ed4095c370de51cc679d27aaedc57",
        "publishedAt": 1791387953,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Technology (MU): Pullback Driven by Debates Over AI Capex Sustainability",
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
      "id": "62e2c378c1edd19a3d5f",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "CEG",
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
      "headline": "Constellation Brands Down on Earnings; Intel Up on Terafab | Stock Movers",
      "headlineKo": "Constellation 브랜드의 수입 감소; Terafab의 Intel Up | 주식 발동기",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd10c2f91f050f096a119764c37fb3f109736cb7025bf9d3fe60d8fc14975161",
        "publishedAt": 1791387497,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation 브랜드의 수입 감소; Terafab의 Intel Up | 주식 발동기"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "b6559c29865c21d298fd",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "AMZN",
        "MRVL",
        "MU",
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
      "headline": "Marvell CEO Says $30B Custom Chip Target Is ‘Not a Stretch’ – Sees Potential For $1 Trillion Valuation",
      "headlineKo": "Marvell CEO, 300억 달러 규모의 맞춤형 칩 목표는 '인상이 아니다' - 1조 달러 가치 평가 가능성 확인",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc97d64f9b1b636151dc368a51178cfd3e988218a535dc7837ae0a88d9bb2883",
        "publishedAt": 1791387400,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell CEO는 300억 달러 규모의 맞춤형 칩 목표가 '인상적이지 않다'고 말함 - 1조 달러 가치 평가 가능성 확인 AI 에이전트 Trending News Earnings All DIA 0.69% SPY 0.34% QQQ 0.48% Trending MU 3.13% BULL 19.64% AMZN 0.97% QXO 8.38% APLD 5.60% IREN 6.50",
        "Marvell CEO는 300억 달러 규모의 맞춤형 칩 목표가 '과도하지 않다'고 말하며 1조 달러 가치 평가 가능성을 확인합니다. CNBC와의 인터뷰에서 Matt Murphy CEO는 맞춤형 실리콘 목표가 235달러에 도달할 것으로 예상되는 시장의 약 13%가 필요할 것이라고 말했습니다.",
        "캘리포니아주 산타클라라에 위치한 반도체 회사 마벨(Marvell)의 실리콘밸리 본사에 로고가 있는 간판."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $30, $1 Trillion, 0.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $30, $1 Trillion, 0.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6a7e8e87610b748e4154",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Constellation Lands a 3,590 MW Power Deal With Google. AI’s Quietest Winner May Not Stay Quiet for Long.",
      "headlineKo": "Constellation은 Google과 3,590MW 전력 계약을 체결했습니다. AI의 가장 조용한 승자는 오랫동안 가만히 있지 못할 수도 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a25470919fad5708c48820f47e13a70211caafc2cf50c27dae887d0c51e9c3b",
        "publishedAt": 1791387145,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation은 Google과 3,590MW 전력 계약을 체결했습니다. AI의 가장 조용한 승자는 오랫동안 가만히 있지 못할 수도 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "68482752d8041194abbf",
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
      "headline": "Nvidia Stock: Capitalize On The AI Chipmaker's Moves With This Spread Strategy",
      "headlineKo": "Nvidia 주식: 이 스프레드 전략으로 AI 칩 제조업체의 움직임을 활용하세요",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=79d09c9fd6db99d40ba9b6a0ff42cb84ab7414e5d10e1e69e551cf41646f443e",
        "publishedAt": 1791387093,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 NVDA의 사업과 관련된 'Nvidia Stock: Capitalize On The AI Chipmaker's Moves With This Spread Strategy' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f49070de3cb5c22ba851",
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
      "headline": "Amazon Turned $10,000 Into More Than $230,000. Can It Happen Again?",
      "headlineKo": "아마존은 10,000달러를 230,000달러 이상으로 바꿨습니다. 이런 일이 다시 일어날 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a6de1ce671c88e9150d2af0cd235a439a5e1b6b02cda36d7ba1b71703f2820a",
        "publishedAt": 1791387001,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존은 10,000달러를 230,000달러 이상으로 바꿨습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,802.50 −0.43% Dow Jones 51,197.00 −0.79% Nasdaq 100 31,136.00 −0.49% Russell 2000 2,797.95 −1.29% S&P 500 7,802.50 −0.43% 다우존스 51,197.00 −0.79% 나스닥 100 31,136.00 −0.49% 러셀 2000 2,797.95 −1.",
        "AWS는 4년 반 만에 가장 빠른 성장을 기록했지만 아마존 주가는 최고치보다 12% 낮고 자본 지출도 강세론자들을 걱정할 만큼 빠른 속도로 증가하고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $230,000., 12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $230,000., 12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5ddb17c5b2d8454dc5fe",
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
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SpaceX Wants $40 Billion to Buy Nvidia Chips, and Nvidia Is on Every Side of the Deal",
      "headlineKo": "SpaceX는 Nvidia 칩 구매에 400억 달러를 원하며 Nvidia는 거래의 모든 측면에 참여하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67f066b19d657fb15bfaa1983eb65f283c35c7972eea345a789d63e839e1973b",
        "publishedAt": 1791386925,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX는 Nvidia 칩 구매에 400억 달러를 원하며 Nvidia는 거래의 모든 측면에 참여합니다 | TIKR.com 일반 투자 SpaceX는 Nvidia 칩 구매에 400억 달러를 원하고 Nvidia는 거래의 모든 면에서 Gian Estrada • 4분 읽기 검토됨 b",
        "이 패키지는 약 100억 달러의 은행 대출과 300억 달러의 투자 등급 부채로 나누어진 것으로 알려졌습니다.",
        "Pimco는 협상 중인 소규모 대출 기관 중 하나이며 2027년에 종료될 것으로 예상됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $40 Billion, $40 billion, $10 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $40 Billion, $40 billion, $10 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e906d3049f1df6f801ea",
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
      "headline": "Where Will GE Vernova Stock Be in 5 Years?",
      "headlineKo": "GE Vernova 주식은 5년 후 어디에 있을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3bb5601d2c877697983396c14cce0e3edbb354627a4da91508c0891ba862373",
        "publishedAt": 1791386700,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova 주식은 5년 후 어디에 있을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool 합류 General Electric(GE -1.10%)은 2024년 4월 2일 에너지 부문을 GE Vernova(GEV -3.15%)로 분사했습니다.",
        "GE Vernova의 주식은 이날 주당 142.25달러로 시가를 시작했고, 2026년 6월 30일 1,174.86달러라는 사상 최고치를 세웠으며 현재 주당 약 1,000달러에 거래되고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $142.25, $1,174.86, $1,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $142.25, $1,174.86, $1,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6c6709889363fd6d3071",
      "schemaVersion": 1,
      "eventType": "insider_sale",
      "eventLabel": "내부자 매도",
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
      "headline": "1 Robotics Stock With the Kind of Setup That Built Amazon Millionaires",
      "headlineKo": "아마존 백만장자를 만든 종류의 로봇공학 주식 1개",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d5e00b18bc8f517aa217990851a64a0b4c1c46c8de2d9b994285e473452a3a10",
        "publishedAt": 1791386400,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존 백만장자를 만든 종류의 로봇공학 주식 1개 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Amazon(AMZN +1.15%)은 시장의 가장 큰 성공 중 하나를 구축했습니다.",
        "이제 Teradyne( TER -5.53% )은 로봇공학과 물리적 AI라는 훨씬 더 큰 기회에 베팅하고 있습니다.",
        "투자자의 질문은 이러한 설정이 Amazon 주주를 백만장자로 만든 일종의 초기 투자 수익을 창출할 수 있는지 여부입니다."
      ],
      "marketInterpretation": [
        "내부자 매도만으로 전망 악화를 단정할 수 없으며 옵션 행사·10b5-1 계획·보유비중을 함께 봐야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5.53%, $100 million, 5.53 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AMZN에 대한 내부자 매도 · 맥락 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 5.53%, $100 million, 5.53 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "Form 4 거래 코드",
        "전체 보유주식 대비 비율",
        "여러 임원의 반복 매도"
      ]
    },
    {
      "id": "7081e4ac1939f4600751",
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
      "headline": "Oracle: Earnings Acceleration Is Now Kicking In",
      "headlineKo": "오라클: 이제 수익 가속화가 시작됩니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e786d930dd27cb7a4fa0ec4d47b0077993606ad95287d8dc2dcb09efed593b84",
        "publishedAt": 1791386202,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오라클: 이제 수익 가속화가 시작됩니다"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "eb3a146d2a222187a9f6",
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
      "headline": "Alphabet (GOOGL) Locks In $4.3 Billion Nuclear Power Deal For AI Data Centers",
      "headlineKo": "Alphabet(GOOGL), AI 데이터 센터를 위한 43억 달러 규모의 원자력 계약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=62fbb9f525fdc2c330dcc753a0401a4ec39ecb2308966fd9da489b3461bb3189",
        "publishedAt": 1791385904,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 GOOGL의 사업과 관련된 'Alphabet (GOOGL) Locks In $4.3 Billion Nuclear Power Deal For AI Data Centers' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f93badab55c24dbdb065",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "NVDA",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia and Micron are about to dominate earnings season",
      "headlineKo": "엔비디아와 마이크론이 실적 시즌을 장악할 예정이다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d690c0ead30b93e0f478dc65c235d3481f86c2a58851fc038a12e3b6105dfe5b",
        "publishedAt": 1791385591,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "엔비디아와 마이크론이 실적 시즌을 장악할 예정이다"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "104305e14954724e067c",
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
      "headline": "Google DeepMind and Meta Join Biohub’s $1.8 Billion AI Biology Push",
      "headlineKo": "Google DeepMind와 Meta가 Biohub의 18억 달러 규모 AI 생물학 추진에 동참",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2ba0ab646d43c8ec3e24544337697beb023b6c309360c8d30bfc59463f75baa6",
        "publishedAt": 1791385531,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $1.8 Billion, $300 million, $1.8 billion, $500 million, $300 Million, $68.97 billion, $71.63 billion, $140.6 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Google DeepMind and Meta Join Biohub’s $1.8 Billion AI Biology Push' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d00950a5e4c56b9cf167",
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
      "headline": "What Will $5,000 Invested in Micron Stock Be Worth in 5 Years?",
      "headlineKo": "Micron 주식에 투자한 5,000달러의 가치는 5년 후에 얼마가 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec6cb7f01ec569ef259f1152d4816da5ef476100a920246d4ba6340a50ba1438",
        "publishedAt": 1791385252,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron 주식에 투자한 5,000달러의 가치는 5년 후에 얼마가 될까요?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,802.20 −0.43% Dow Jones 51,208.00 −0.77% Nasdaq 100 31,117.50 −0.54% Russell 2000 2,798.75 −1.26% S&P 500 7,802.20 −0.43% 다우존스 51,208.00 −0.77% 나스닥 100 31,117.50 −0.54% 러셀 2000 2,798.75 −1.",
        "Micron은 방금 AI 메모리 수요에 대해 481%의 증가를 기록했지만 실제 논쟁은 새로운 자금이 순환적 정점에 있는지, 아니면 다년간의 슈퍼사이클의 초기 이닝에 구매되는지입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $5,000, 481%, $1,074.89. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $5,000, 481%, $1,074.89. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9b50587b7bb9954aed32",
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
      "headline": "Apple Is Setting The Stage For a Massive Windfall That Few Understand",
      "headlineKo": "Apple은 거의 이해하지 못하는 엄청난 횡재의 무대를 마련하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9976f44c6eb7502dfc642bd39aa2dbd332883d9676165b4dd6fd5cbaf896dba7",
        "publishedAt": 1791384322,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple은 소수만이 이해하는 엄청난 횡재를 위한 무대를 마련하고 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,802.50 −0.43% Dow Jones 51,197.00 −0.79% Nasdaq 100 31,136.00 −0.49% Russell 2000 2,797.95 −1.29% S&P 500 7,802.50 −0.43% 다우존스 51,197.00 −0.79% 나스닥 100 31,136.00 −0.49% 러셀 2000 2,797.95 −1.",
        "작성자: Alex Sirois 2026년 10월 7일 오전 10시 45분(ET) 게시 · 3분 읽기 𝕏 f ⧉ 많은 사람들이 분주한 Apple Store를 가득 채웠습니다. 이는 브랜드 제품에 대한 소비자의 강한 관심을 반영하며 상당한 시장 횡재 가능성을 암시합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $30.74, $27.42, $54.25 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $30.74, $27.42, $54.25 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7c5d907f386214316344",
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
      "headline": "Why Jim Cramer Is All-In on Intel’s CPU Comeback",
      "headlineKo": "Jim Cramer가 Intel의 CPU 복귀에 올인하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e962e8765f80fd4f5595444f3473f23ad7b90302b53c8830f652d23242afa2b9",
        "publishedAt": 1791384319,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Cramer가 Intel의 CPU 복귀에 올인하는 이유 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,802.20 −0.43% Dow Jones 51,208.00 −0.77% Nasdaq 100 31,117.50 −0.54% Russell 2000 2,798.75 −1.26% S&P 500 7,802.20 −0.43% 다우존스 51,208.00 −0.77% 나스닥 100 31,117.50 −0.54% 러셀 2000 2,798.75 −1.",
        "작성자: Alex Sirois 2026년 10월 7일 오전 10시 45분(ET) 게시 · 3분 읽기 𝕏 f ⧉ Intel CPU는 막대 그래프와 조각이 깨지는 역동적인 장면 속에 자리잡고 있으며 이는 회사의 강력한 복귀와 인상적인 시장 부활을 상징합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $112.50., 204.88%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $112.50., 204.88%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "49bf6acfe31f13d50a8c",
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
      "headline": "Nvidia Takes Aim at Intel’s $32 Billion PC Business With Microsoft’s Surface Laptop Ultra",
      "headlineKo": "Nvidia는 Microsoft의 Surface Laptop Ultra로 Intel의 320억 달러 규모 PC 사업을 목표로 삼고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a2275662b8eb44ba209972fa7905d53135cc962f6241e63050bc99ff2bdf7ee4",
        "publishedAt": 1791384058,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $32 Billion, $32.23 billion, $32.31 billion, $4.65 billion, $10.64 billion, 13%, 25%, $16.04 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Nvidia Takes Aim at Intel’s $32 Billion PC Business With Microsoft’s Surface Laptop Ultra' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9bc9eb6465db4a291b39",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "QCOM",
      "relatedTickers": [
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm vs. Taiwan Semiconductor Manufacturing: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Qualcomm vs. Taiwan Semiconductor Manufacturing: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cfa281f92a19ff0d80c4fd6db58894877bac7ecd443240e4dbe9dcd9aea5354d",
        "publishedAt": 1791384001,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만 반도체 제조업: 2026년에는 어떤 기술주를 매수하는 것이 더 나을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공 지능 분야의 지배력 경쟁이 심화됨에 따라 올바른 칩 회사를 선택하는 것이 여전히 최우선 과제입니다.",
        "투자자들은 2026년 포트폴리오를 이끌기 위해 Qualcomm(QCOM -2.16%)과 Taiwan Semiconductor Manufacturing(TSM -2.09%)을 비교하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.16%, 2.09%, 0.91% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.16%, 2.09%, 0.91% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e091569aff3b99e54a91",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "MU"
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
      "headline": "Micron’s profits surge as Meta’s AI spending accelerates",
      "headlineKo": "메타의 AI 투자 가속화로 마이크론 이익 급등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=14f35308ada88156fab0e6bb862f953397030ea96a1ed1be0ce24e01cbdb291a",
        "publishedAt": 1791383760,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron’s profits surge as Meta’s AI spending accelerates",
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
      "id": "363b59c37d76d789424a",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Pressured European Regulators to Ease FSD Review As Musk Claimed Delays 'Cost Lives': Reuters",
      "headlineKo": "Tesla는 머스크가 지연 '인명 손실'을 주장함에 따라 FSD 검토를 완화하도록 유럽 규제 기관에 압력을 가했습니다: 로이터",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=864d424a861059192d20327d253757bae2eeab884a63c7e787d6c9149ccb710d",
        "publishedAt": 1791383427,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 FSD 검토를 완화하도록 유럽에 압력을 가했습니다. Reuters - Tesla (NASDAQ:TSLA) - Benzinga SPY 774.79 −0.55% QQQ 754.21 −0.72% BTC/USD 83,116.49 −2.84% DIA 509.24 −1.03% GLD 375.72 −1.71% TLT 76.81 −0.61% US 로그인 회원가입 내 계정 Benzinga Pr",
        "(NASDAQ: TSLA)는 로이터 조사에 따르면 네덜란드 규제 기관에 검토 범위와 비용을 줄이도록 압력을 가하는 등 완전 자율 주행 시스템의 승인을 가속화하도록 유럽 규제 기관에 반복적으로 압력을 가했습니다.",
        "프랑스가 안전 문제를 제기한 후, Elon Musk CEO는 X에 “프랑스에서 FSD 승인을 지연하면 생명을 잃을 것”이라고 게시했습니다. Tesla Pressed 네덜란드 규제 기관 네덜란드 규제 기관 RDW는 4월에 FSD 감독을 승인하여 Tesla가 Width를 향한 길을 열었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.72%, 2.84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.72%, 2.84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1a5b06a6f596ea76f15c",
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
      "headline": "Qualcomm Government Technologies and OKSI Announce Collaboration to Deploy OMNISCIENCE Autonomy Software Portfolio",
      "headlineKo": "Qualcomm Government Technologies와 OKSI, OMNISCIENCE Autonomy 소프트웨어 포트폴리오 배포를 위한 협력 발표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ae06994573f1c03d77f10d9790592b51de566016288b909184eb8e7536a6dd3",
        "publishedAt": 1791382020,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm Government Technologies와 OKSI, OMNISCIENCE Autonomy 소프트웨어 포트폴리오 배포를 위한 협력 발표"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "660ca20eecf428431cf0",
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
      "headline": "A $1,000 Bet on Palo Alto Networks Beat the S&P 500 by More Than 5x Over Ten Years",
      "headlineKo": "Palo Alto Networks에 1,000달러를 투자하여 10년 동안 S&P 500을 5배 이상 앞섰습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c17411a8e417e3dbc2e86c96f0969dfec3b4fc4a7eadae11339ede99524b02e5",
        "publishedAt": 1791381628,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palo Alto Networks에 1,000달러를 베팅하여 10년 동안 S&P 500을 5배 이상 앞섰습니다. - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,806.00 −0.01% Dow Jones 51,149.80 −0.09% Nasdaq 100 31,199.80 +0.03% Russell 2000 2,793.44 −0.18% S&P 500 7,806.00 −0.01% 다우존스 51,149.80 −0.09% 나스닥 100 31,199.80 +0.03% 러셀 2000 2,793.44 −0.",
        "하지만 오늘의 평가 기준으로는 향후 10년… 작성자: Chris Lange 2026년 10월 7일 게시, 오전 10시(ET) · 2분 읽기 𝕏 f ⧉ 빛나는 디지털 자물쇠는 복잡한 네트워크 보호의 중요성을 반영하여 고급 사이버 보안을 상징합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, 0.01%, 0.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,000, 0.01%, 0.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6b3f535e1934d1d5b59d",
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
      "headline": "AMD Is Up More Than 100X in 10 Years. Can It Repeat That Run?",
      "headlineKo": "AMD는 10년 동안 100배 이상 성장했습니다. 그 실행을 반복할 수 있나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=570f9c0033629f0d6ee642e8cd9d05897f6527311e497630dc19859d8823340f",
        "publishedAt": 1791381623,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD는 10년 동안 100배 이상 성장했습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,807.00 −0.37% Dow Jones 51,253.00 −0.68% Nasdaq 100 31,150.50 −0.44% Russell 2000 2,803.25 −1.10% S&P 500 7,807.00 −0.37% 다우존스 51,253.00 −0.68% 나스닥 100 31,150.50 −0.44% 러셀 2000 2,803.25 −1.",
        "AMD는 지난 10년 동안 수천 달러를 인생을 변화시키는 부로 변모시켰지만, 1조 달러 시가총액에서 동일한 성과를 거두면 오늘날 살아있는 모든 칩 거대 기업이 작아질 것입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $626.97, $605.04, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $626.97, $605.04, 3.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fff558d46080efd05817",
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
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google, Meta, U.S. government join Biohub's $1.8B AI biology effort",
      "headlineKo": "Google, Meta, 미국 정부가 Biohub의 18억 달러 규모 AI 생물학 노력에 동참",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da48b11ac9e6ec95dfc1723a8d50e95948004b3adf38b1774bc91dc765216052",
        "publishedAt": 1791381477,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "정부, Biohub의 18억 달러 규모 AI 생물학 노력에 동참",
        "정부는 Biohub의 18억 달러 규모 AI 생물학 데이터 추진에 동참합니다. Virtual Biology Initiative는 약물 개발 일정을 단축할 수 있는 AI 모델을 훈련하기 위한 개방형 데이터 세트를 구축하는 것을 목표로 합니다. 작성자: Cris Tolomia · 2분 읽기 · 2026년 10월 7일 업데이트 A",
        "정부, Google $GOOGL 모회사 Alphabet 및 Meta $META가 가상 생물학 이니셔티브에 참여하여 교육용 개방형 데이터 세트를 구축하기 위한 자금, 데이터, 계산 및 측정 기술에 총 18억 달러를 투자했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.8, $1.8 billion, $300 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.8, $1.8 billion, $300 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "26254daf3be716c5592a",
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
      "headline": "Is Amazon Stock Poised to Rally on AI Services Revenue Expansion?",
      "headlineKo": "아마존 주식은 AI 서비스 수익 확대에 반등할 준비가 되어 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8971006b464ad82bc9fff6e3b416902cfbacd8ea1c7daffa2bcdb562ef5e19a",
        "publishedAt": 1791380400,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존 주식은 AI 서비스 수익 확대에 반등할 준비가 되어 있습니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "244b539b9faef2abb8cb",
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
      "headline": "UBS Flags a Bullish Setup in Tesla Stock and Lifts Its Price Target",
      "headlineKo": "UBS, Tesla 주식의 강세 설정을 표시하고 목표 가격을 높였습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5fe8a9c309a77a4ab6b4d35db91807e8b8a9374e579ae702322c8d398d4f7e2f",
        "publishedAt": 1791380146,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "UBS, Tesla 주식의 강세 설정을 표시하고 목표 가격을 높였습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,802.50 −0.43% Dow Jones 51,197.00 −0.79% Nasdaq 100 31,136.00 −0.49% Russell 2000 2,797.95 −1.29% S&P 500 7,802.50 −0.43% 다우존스 51,197.00 −0.79% 나스닥 100 31,136.00 −0.49% 러셀 2000 2,797.95 −1.",
        "황소 사건의 실제 근거는 다음과 같습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $391,, $385,, $378.02, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $391,, $385,, $378.02, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "90c0ff4399f57d39b182",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Despite 231% year-to-date surge, Marvell stock has 42% upside to Wall Street’s price target",
      "headlineKo": "연초 대비 231% 급등에도 불구하고 Marvell 주식은 월스트리트 목표 가격보다 42% 상승 여력이 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=013db01df47a2443442e9093e2da99ab925c1ade0ed909f36bb8809f67bdd159",
        "publishedAt": 1791379832,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "연초 대비 231% 급등에도 불구하고 Marvell 주식은 월스트리트 목표 가격보다 42% 상승 여력이 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "d2d07c3fd22a911f5b2b",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arista Networks (ANET) Outperforms AI Infrastructure Peers on Solid Execution and Raised Guidance",
      "headlineKo": "Arista Networks(ANET)는 견고한 실행 및 강화된 지침 측면에서 AI 인프라 동료를 능가합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da56c4c5dcc9f36eabae15aa9ca1e34eb6f5cb06935e958e63785b303b77473b",
        "publishedAt": 1791379788,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista Networks(ANET)는 견고한 실행 및 강화된 지침 측면에서 AI 인프라 동료를 능가합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "8089493de9c41e1f3722",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMD",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Citi Raises AMD Price Target to $800 on Meta AI Demand",
      "headlineKo": "Citi, Meta AI 수요에 대해 AMD 가격 목표를 800달러로 인상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6f8c3b725ed0185796d592a7f037e6142143747262264fb1b8ad7e7796ebbca",
        "publishedAt": 1791379647,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citi, Meta AI 수요에 대해 AMD 가격 목표를 800달러로 인상"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "86b8d910d91a63c6be29",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Alphabet Partners with Constellation Energy in Massive New Nuclear Power Deal",
      "headlineKo": "Alphabet, Constellation Energy와 대규모 신규 원자력 계약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=700e4898510d715acd6463fbde517929aa13c7a6e6440585e98a6da4feb4aed2",
        "publishedAt": 1791379466,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Alphabet, Constellation Energy와 대규모 신규 원자력 계약 체결 | TIKR.com General Investing Alphabet, 대규모 신규 원자력 거래에서 Constellation Energy와 제휴 Aditya Raghunath • 3분 읽기 검토자: David Han",
        "6: $300 52주 최고가: $413 $CEG 주가 목표: $342 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "Constellation Energy(CEG) 주가는 화요일에 12% 이상 상승했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, $300, $413 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, $300, $413 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "418f7dc726e35d1a774e",
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
      "headline": "Vistra Stock Rallies 11% as Energy Department Reveals $4.2 Billion Nuclear Investment",
      "headlineKo": "에너지부가 42억 달러 규모의 원자력 투자를 공개함에 따라 Vistra 주가는 11% 상승했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b2d12028d0a4727e6f28380a4a8fec244dd7b8e34840b0d40a7bc62f64cf24d",
        "publishedAt": 1791379466,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "에너지부가 42억 달러의 원자력 투자를 공개함에 따라 Vistra 주가는 11% 상승 | TIKR.com General Investing Vistra 주가는 에너지부가 42억 달러 규모의 원자력 투자를 공개함에 따라 11% 상승했습니다 Aditya Raghunath • 3분 읽기 리뷰",
        "6: $161 52주 최고가: $217 $VST 주가 목표: $210 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "비스트라(VST) 주가는 에너지부가 42억 달러 규모의 원자력 투자를 발표한 후 약 11% 상승했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, $4.2 Billion, 4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, $4.2 Billion, 4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8c1fd48dc7148009d033",
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
      "headline": "Apple’s New CEO Just Sold $8.5 Million of Stock",
      "headlineKo": "Apple의 새로운 CEO는 방금 850만 달러의 주식을 매각했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d8e62a6a984ed8781e2929813e0aec56074b5e4bad221ad00ad9181097dcd88",
        "publishedAt": 1791379224,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple의 새 CEO는 850만 달러의 주식을 24시간 연중무휴 매도했습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,802.50 −0.43% Dow Jones 51,197.00 −0.79% Nasdaq 100 31,136.00 −0.49% Russell 2000 2,797.95 −1.29% S&P 500 7,802.50 −0.43% 다우존스 51,197.00 −0.79% 나스닥 100 31,136.00 −0.49% 러셀 2000 2,797.95 −1.",
        "Apple CEO Tim Cook은 새로운 iPhone 16 라인업, Apple Watch Series 10, 새로운 블랙 티타늄 Apple Watch Ultra 2, AirPods 4 및 AirPods Max의 새로운 색상 출시를 위해 5번가 Apple 스토어 개장식에 참석했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $8.5 Million, $8.46 million, $331.38 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $8.5 Million, $8.46 million, $331.38 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2b11badec3c1ab86b5ad",
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
      "headline": "Tesla’s Third-Quarter Deliveries Beat Expectations. Time to Buy the Stock?",
      "headlineKo": "Tesla의 3분기 납품은 기대치를 뛰어 넘었습니다. 주식을 살 시간인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0202839b2349313cca85d6c90340fa66de31f4dba20fb9a707b85c751e60360d",
        "publishedAt": 1791379201,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla의 3분기 납품은 기대치를 뛰어 넘었습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Tesla에게는 꽤 힘든 한 해였습니다(TSLA -1.37%).",
        "이 회사의 주가는 부분적으로 전기 자동차(EV) 사업의 엇갈린 성과로 인해 글을 쓰는 시점에서 16% 하락했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 16%, 25%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 16%, 25%, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "406b947ab293c4b40504",
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
      "headline": "Apple and LG team up on 7 smart home devices ahead of Oct. 13 event",
      "headlineKo": "10월 13일 행사를 앞두고 Apple과 LG가 7가지 스마트 홈 기기 개발에 협력",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ecfbfe8fadf6620d844b660135af3a4de294e8e57ced284b64c76e6d1f5fde9",
        "publishedAt": 1791379139,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10월 13일 행사를 앞두고 Apple과 LG가 7가지 스마트 홈 기기 개발에 협력"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "7d596c25da915e29919b",
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
      "headline": "Hubbell's Q3 2026 Earnings: What to Expect",
      "headlineKo": "허벨의 2026년 3분기 수익: 기대할 수 있는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb894c36aada9ce4977f38026a51852fc864e8b858973cb6a9f3280837656b0b",
        "publishedAt": 1791378197,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Hubbell's Q3 2026 Earnings: What to Expect",
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
      "id": "06e4322688fb3bf77272",
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
      "headline": "Why Billionaire Ken Fisher Went Big on GE Vernova (GEV)",
      "headlineKo": "억만장자 Ken Fisher가 GE Vernova(GEV)에 투자한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a43fa9375b655bf1ac7211e3da5caa285bf3d63de9de4f6259c7ac8758d30ac",
        "publishedAt": 1791378014,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 GEV의 사업과 관련된 'Why Billionaire Ken Fisher Went Big on GE Vernova (GEV)' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b2161c12fe29852d808f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "AMZN",
        "ORCL",
        "QQQ",
        "SPY"
      ],
      "relatedEntities": [
        {
          "name": "AWS",
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
      "headline": "Cloud 2027: Can Oracle’s Fastest-Growing Engine Bridge the AWS Gap?",
      "headlineKo": "Cloud 2027: Oracle의 가장 빠르게 성장하는 엔진이 AWS 격차를 해소할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=136f57ab58047bc2ce32be465d8582d05e2b16da1395cd331c090a61576c84d6",
        "publishedAt": 1791377140,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cloud 2027: Oracle의 가장 빠르게 성장하는 엔진이 AWS 격차를 해소할 수 있습니까?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,802.50 −0.43% Dow Jones 51,197.00 −0.79% Nasdaq 100 31,136.00 −0.49% Russell 2000 2,797.95 −1.29% S&P 500 7,802.50 −0.43% 다우존스 51,197.00 −0.79% 나스닥 100 31,136.00 −0.49% 러셀 2000 2,797.95 −1.",
        "Oracle의 클라우드 부문은 AWS의 3배 속도로 성장하고 있지만 원시 수익의 격차는 여전히 엄청나며 Oracle은 현금을 빠르게 소모하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $7.388 billion, 121%, 97.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $7.388 billion, 121%, 97.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c693ff8a3dfce736e11e",
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
      "headline": "Here's What a $1,000 Investment in Palantir Stock Could Be Worth in 5 Years (Hint: It's a Lot)",
      "headlineKo": "Palantir 주식에 1,000달러를 투자하면 5년 후에 얻을 수 있는 가치는 다음과 같습니다. (힌트: 아주 많습니다)",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ea702f78dd2bd47f795365d83c634226e10b13257a12459cdd5b0d251d335dbb",
        "publishedAt": 1791377100,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 주식에 대한 1,000달러 투자의 5년 후 가치는 다음과 같습니다(힌트: 상당히 많습니다) | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% Motley Fool Palantir Technologies에 합류( PLTR +0.72%",
        "그리고 높은 가치 평가에도 불구하고, 주식은 향후 5년 동안 상당한 상승 여력을 가질 수 있습니다.",
        "NASDAQ 확장: PLTR Palantir Technologies 프리미엄 기능 Moneyball Superscore 87 /100 오늘의 변동률( 0.72 %) $ 1.39 현재 가격 $ 193.46 주요 데이터 포인트 시가 총액 $462B 공개 거래 주식을 사용하여 계산한 시가 총액 o"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.72 %, $ 1.39, $ 193.46 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.72 %, $ 1.39, $ 193.46 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d9a282036434c6e54f04",
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
      "headline": "Qualcomm (QCOM) Stock Looks Fully Valued On Royalty Dispute And License Deals",
      "headlineKo": "Qualcomm(QCOM) 주식은 로열티 분쟁 및 라이센스 거래에서 완전히 가치 있는 것으로 보입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ee41fb91705cf3f40f5fefe523db4cf4b816adabb2d9211b4bbf68413ff6aa6",
        "publishedAt": 1791375404,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm(QCOM) 주식은 로열티 분쟁 및 라이센스 거래에서 완전히 가치 있는 것으로 보입니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "34f2bad0f6f3c160c266",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "ORCL",
      "relatedTickers": [
        "AVGO",
        "ORCL"
      ],
      "relatedEntities": [
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
      "headline": "Broadcom, Oracle Earnings to Test Cloud Infrastructure's AI-Driven Momentum",
      "headlineKo": "Broadcom, Oracle, 클라우드 인프라의 AI 기반 추진력 테스트를 위한 수익 창출",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=543b7a61ed849ae8ca67fcadf0eee529fcdeef470ac13b60afe2cd304c390f04",
        "publishedAt": 1791374761,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 ORCL의 사업과 관련된 'Broadcom, Oracle Earnings to Test Cloud Infrastructure's AI-Driven Momentum' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b2782fc262fc68d8f1e2",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "ORCL"
      ],
      "relatedEntities": [
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom, Oracle Earnings to Test Cloud Infrastructure's AI-Driven Momentum",
      "headlineKo": "Broadcom, Oracle, 클라우드 인프라의 AI 기반 추진력 테스트를 위한 수익 창출",
      "source": {
        "name": "ChartMill",
        "url": "https://finnhub.io/api/news?id=543b7a61ed849ae8ca67fcadf0eee529fcdeef470ac13b60afe2cd304c390f04",
        "publishedAt": 1791374761,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom, Oracle Earnings to Test Cloud Infrastructure's AI-Driven Momentum",
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
      "id": "f058ab7003e1a75ee92f",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "Broadcom's AI Revenue Is Growing at 221%. Here's Why Custom Chips Could Be a Bigger Business Than GPUs.",
      "headlineKo": "Broadcom의 AI 수익은 221% 증가하고 있습니다. 맞춤형 칩이 GPU보다 더 큰 비즈니스가 될 수 있는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3732f997d8d62a4304c1b86c2799c8c63d6fc691a0c77fd4315bde256ab932ef",
        "publishedAt": 1791373980,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom의 AI 수익은 221% 증가하고 있습니다.",
        "맞춤형 칩이 GPU보다 더 큰 비즈니스가 될 수 있는 이유는 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Broadcom( AVGO -0.55% )은 3분기 인공지능 반도체 매출이 전년 동기 대비 221% 성장했으며,"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 221%, $21.7 billion, 236% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 221%, $21.7 billion, 236% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "16214b4ce85a44405d0a",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Record Earnings Drive Lumentum Shares to New Highs",
      "headlineKo": "기록적인 수익으로 Lumentum 주가가 최고치로 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba8bc899c1b5d5240ae697f56a0733795e9cb5941051baf0e25d67a1f03d4526",
        "publishedAt": 1791373094,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Record Earnings Drive Lumentum Shares to New Highs",
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
      "id": "2d12f90b1a412e858893",
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
      "headline": "Three Stocks Are Now 21% of the S&P 500, the Most Ever",
      "headlineKo": "세 종목은 현재 S&P 500 지수의 21%를 차지하며 역대 최고치입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd6b89c4e06f9a793f3d33858d9063cdcc4a6da5d56411092c37417d8cd7508d",
        "publishedAt": 1791372612,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "3개 주식은 이제 S&P 500 지수의 21%를 차지하며 역대 최고치입니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,802.50 −0.43% Dow Jones 51,197.00 −0.79% Nasdaq 100 31,136.00 −0.49% Russell 2000 2,797.95 −1.29% S&P 500 7,802.50 −0.43% 다우존스 51,197.00 −0.79% 나스닥 100 31,136.00 −0.49% 러셀 2000 2,797.95 −1.",
        "작성자: Omor Ibne Ehsan 2026년 10월 7일 오전 7시 30분(ET) 게시 · 3분 읽기 𝕏 f ⧉ 동전 더미가 있는 균형 척도는 투자 포트폴리오의 자산 가중치 개념을 시각적으로 나타냅니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 21%, 0.43%, 0.79% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 21%, 0.43%, 0.79% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "af72cff01c60eb86a91e",
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
      "headline": "Palantir or Snowflake: If I Had to Pick 1 AI Data Stock and Never Look at It Again, This Is It",
      "headlineKo": "Palantir 또는 Snowflake: AI 데이터 스톡 1개를 선택하고 다시는 보지 않아야 한다면 이것이 바로 그것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8527ba3cb3034290e67279872b86b09f025ab7e694cd346b9fe8520998ab4e2",
        "publishedAt": 1791372610,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 또는 Snowflake: AI 데이터 스톡 1개를 선택하고 다시는 보지 않아야 한다면 이것이 바로 그것입니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,802.20 −0.43% Dow Jones 51,208.00 −0.77% Nasdaq 100 31,117.50 −0.54% Russell 2000 2,798.75 −1.26% S&P 500 7,802.20 −0.43% 다우존스 51,208.00 −0.77% 나스닥 100 31,117.50 −0.54% 러셀 2000 2,798.75 −1.",
        "다른 하나는 은퇴 투자자들이 기다릴 시간이 없을 수도 있는 미래에 대해 여전히 약속하고 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, $1.935 billion, 92.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 50%, $1.935 billion, 92.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5d05bea6004b4626de94",
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
      "headline": "Qualcomm Could Have a Much Bigger AI Story Than Investors Think",
      "headlineKo": "Qualcomm은 투자자가 생각하는 것보다 훨씬 더 큰 AI 스토리를 가질 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae7329502961fc37616b1075764be282b9568b8fd0122e1512f66f162be52035",
        "publishedAt": 1791371734,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm은 투자자가 생각하는 것보다 훨씬 더 큰 AI 스토리를 가질 수 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "f3fe60cfcdbf1914cc89",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AAPL",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Mobile Computing - Global Strategic Business Report: Capitalize on the $179.5 Billion Revenue Shift as Apple, Samsung, Amazon, Dell, and ASUSTeK Battle for $639 Billion by 2030",
      "headlineKo": "모바일 컴퓨팅 - 글로벌 전략 비즈니스 보고서: Apple, Samsung, Amazon, Dell 및 ASUSTeK가 2030년까지 6,390억 달러 규모의 경쟁을 벌이면서 1,795억 달러의 매출 변화를 활용하세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70994ea4d58cd81bb8871dbf7833fd24ce1cc74f8f49180b2851c268efa30b72",
        "publishedAt": 1791370200,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "모바일 컴퓨팅 - 글로벌 전략 비즈니스 보고서: Apple, Samsung, Amazon, Dell 및 ASUSTeK가 2030년까지 6,390억 달러 규모의 경쟁을 벌이면서 1,795억 달러의 매출 변화를 활용하세요."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "ec282b65cbdad99c5cde",
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
      "headline": "Update: Market Chatter: Intel to Continue Working With Elon Musk on Terafab Project, CEO Says",
      "headlineKo": "업데이트: 시장 잡담: Intel은 Terafab 프로젝트에서 Elon Musk와 계속 협력할 것이라고 CEO는 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b0d2419ffb6595924e507ff533d764cd05cf7a72f4dc7cca6a6726984ec0cdbe",
        "publishedAt": 1791366629,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Update: Market Chatter: Intel to Continue Working With Elon Musk on Terafab Project, CEO Says",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 INTC의 사업과 관련된 'Update: Market Chatter: Intel to Continue Working With Elon Musk on Terafab Project, CEO Says' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "5d479c4839fddbef2578",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AVGO",
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
      "headline": "Warren Buffett's $863 Million \"Secret\" Portfolio Dumped Alphabet and Broadcom, but Has Over 17% of Invested Assets in This Proven Moneymaking Strategy",
      "headlineKo": "Warren Buffett의 8억 6,300만 달러 규모의 \"비밀\" 포트폴리오는 Alphabet과 Broadcom을 버렸지만 이 입증된 수익 창출 전략에 투자 자산의 17% 이상을 보유하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3a9447deb1eb1337cf7b23131113cce858068eb287cbc2e789ba8531eeb90eaf",
        "publishedAt": 1791365161,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Warren Buffett의 8억 6,300만 달러 규모의 \"비밀\" 포트폴리오가 Alphabet과 Broadcom을 버렸지만 이 입증된 수익 창출 전략에 투자 자산의 17% 이상이 포함되었습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% J",
        "현재 은퇴한 CEO 워렌 버핏(Warren Buffett)은 항상 눈에 잘 띄지 않는 놀라운 거래를 찾아내는 재주가 있었고, 1960년대 중반 이후 S&P 500보다 6,000,000%가 넘는 초과 성과를 거두었습니다( ^GSPC +0.58% ).",
        "그러나 투자자들은 버크셔 해서웨이 내에 \"비밀\" 버핏 포트폴리오가 존재한다는 사실을 깨닫지 못할 수도 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $863 million, 0.35%, 0.22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $863 million, 0.35%, 0.22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3542f94ad534c11bb3ca",
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
      "headline": "1 Stat That Makes Tesla Hard to Ignore Before Oct. 21",
      "headlineKo": "10월 21일 이전에 Tesla를 무시하기 어렵게 만드는 1가지 통계",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=602a1ba53686d2130d0c16aad0ddf1b04f8656eb45ad00e2a057df3faa41bb9d",
        "publishedAt": 1791365100,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10월 이전에 Tesla를 무시하기 어렵게 만드는 1가지 통계",
        "21 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Tesla( TSLA +0.52% )는 이달 초 3분기 차량 납품 보고서를 발표하고 실적이 나왔습니다.",
        "이 회사는 해당 분기에 486,532대의 차량을 판매하여 평균 분석가 추정치인 456,896대를 넘어섰습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2%, $380.68, 0.52% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2%, $380.68, 0.52% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3502ee280e457e368476",
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
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "What Does Micron Technology (MU) Face After A Patent Deal And Taiwan Strike Vote?",
      "headlineKo": "특허 거래 및 대만 파업 투표 후 마이크론 테크놀로지(MU)는 어떤 상황에 직면하게 됩니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74c065b818eaf05722c973543ea8c29f35cafaead378c5c6de5c4735f24b4f52",
        "publishedAt": 1791364734,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What Does Micron Technology (MU) Face After A Patent Deal And Taiwan Strike Vote?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "edf247c771607f027085",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "AI Stocks Micron and Sandisk Are Up 460% and 1,190% in the Past Year. History Says This Will Happen Next.",
      "headlineKo": "AI 주식 마이크론(Micron)과 샌디스크(Sandisk)는 지난해 460%, 1,190% 상승했다. 역사는 이런 일이 다음에 일어날 것이라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f04c9d45e8f5e5c657cc686d2d31ef83f328ba84635c0dc255b02b5dd2b6afd7",
        "publishedAt": 1791364082,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 주식 마이크론(Micron)과 샌디스크(Sandisk)는 지난해 460%, 1,190% 상승했다.",
        "역사는 이런 일이 다음에 일어날 것이라고 말합니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron Technology( MU -1.73% )와 Sandisk( SNDK -2.56% )가 인공지능 인프라 분야의 주요 승자로 부상했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 460%, 1,190%, $2,225 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 460%, 1,190%, $2,225 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ee739e49c20dcbacd7b2",
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
      "headline": "Jim Cramer Says Microsoft’s (MSFT) AI Investment Is Finally Paying Off",
      "headlineKo": "Jim Cramer는 Microsoft(MSFT)의 AI 투자가 마침내 성과를 거두었다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d498f9ea2b813b6c71d2b717266b6a90cca62d865c717ac5b34a33a5e308a39",
        "publishedAt": 1791364045,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 MSFT의 사업과 관련된 'Jim Cramer Says Microsoft’s (MSFT) AI Investment Is Finally Paying Off' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "13ac1c186ea3d1ad4540",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Plans a Big 2027 Supply Ramp. Wall Street Already Expects $38 Billion of New Revenue.",
      "headlineKo": "AMD는 2027년 대규모 공급 확대를 계획하고 있습니다. 월스트리트는 이미 380억 달러의 신규 수익을 기대하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bcedf644d9117099b6ae3cfbb3f912ded832567c52fa08c5136b47731b81ace9",
        "publishedAt": 1791363952,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트는 이미 380억 달러의 신규 수익을 기대하고 있습니다.",
        "| TIKR.com 일반 AMD 투자는 2027년 대규모 공급 확대를 계획합니다.",
        "월스트리트는 이미 380억 달러의 신규 수익을 기대하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $38 Billion, 200%, $1 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $38 Billion, 200%, $1 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9c3d98db1ed7f9d5e70c",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
        "MRVL",
        "MU",
        "QQQ",
        "SPY",
        "STX",
        "WDC"
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell Is The Latest AI Infra Play To Raise Long-Term Targets: Here's How Dell, HPE, CoreWeave And Broadcom Compare",
      "headlineKo": "Marvell은 장기 목표를 높이기 위한 최신 AI 인프라 플레이입니다. Dell, HPE, CoreWeave 및 Broadcom을 비교하는 방법은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af6fbc5888392e83d3d6f54015c51f3f80684903010c01b7637c24f966eb344c",
        "publishedAt": 1791362765,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell은 장기 목표를 높이기 위한 최신 AI 인프라 플레이입니다. Dell, HPE, CoreWeave 및 Broadcom이 AI 에이전트를 비교하는 방법은 다음과 같습니다. 동향 뉴스 수익 전체 DIA 0.29% SPY 0.10% QQQ 0.42% 추세 SPCX 2.15% MU 2.19% IWM 0.51% WDC 1.26% STX 1.23",
        "Marvell은 장기 목표를 높이기 위한 최신 AI 인프라 플레이입니다. Dell, HPE, CoreWeave 및 Broadcom이 칩, 네트워킹, 서버 및 데이터 센터 전반에 걸쳐 회사를 비교하는 방법은 다음과 같습니다. AI 인프라 속에서 더 큰 수익 가시성을 얻고 있습니다.",
        "건설 노동자들이 2026년 3월 4일 텍사스 주 댈러스의 데이터 센터에서 전선을 배선하고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.29%, 0.10%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.29%, 0.10%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e5dce7888c7d891d626b",
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
      "headline": "Is Micron a Buy After Its Latest Explosive Earnings Report? Here Are the Bull and Bear Cases.",
      "headlineKo": "Micron은 최신 폭발적인 수익 보고서 이후 매수인가? 황소와 곰의 경우는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=24f56991bf01c68522bb46aea0b949571b46a6fcf7e386a855fdec0001e9e0ca",
        "publishedAt": 1791361321,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron은 최신 폭발적인 수익 보고서 이후 매수인가? 황소와 곰의 경우는 다음과 같습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "c7000db9579c83ee080e",
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
      "headline": "Marvell Now Sees as Much as $90 Billion in Annual Sales by Fiscal 2031. Here's Why It's a Chip Stock to Buy.",
      "headlineKo": "Marvell은 현재 2031 회계연도까지 연간 매출이 최대 900억 달러에 이를 것으로 보고 있습니다. 칩 주식을 매수해야 하는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b9e978c83fee70f860224c86dbe17f78ceff1c236c2915ff0efbff0246b64b73",
        "publishedAt": 1791360181,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell은 현재 2031 회계연도까지 연간 매출이 900억 달러에 달할 것으로 보고 있습니다.",
        "칩 주식을 구매해야 하는 이유는 다음과 같습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Marvell Technology( MRVL +5.81% )가 마침내 장기 목표에 수치를 올렸습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $90 Billion, $20 billion, $70 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $90 Billion, $20 billion, $70 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ba3d7e6ae151b8110f1d",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500 Faces a 'Stealth Correction' as Earnings Boom Collides With Rising Yields, Warns Fidelity’s Timmer: Market Is ‘In a Vice'",
      "headlineKo": "S&P 500은 수익 호황이 수익률 상승과 충돌하면서 '스텔스 조정'에 직면하고 Fidelity의 Timmer에게 경고: 시장은 '부정'",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d1839013331348f47e8f95baa61c7bebf24cf17e06357f67e0a83e4987606d65",
        "publishedAt": 1791359573,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500은 수익 호황이 수익률 상승과 충돌하면서 '스텔스 조정'에 직면하고 Fidelity의 Timmer에게 경고: 시장은 '부정'"
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "b8f26b776fec0b319cb5",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
        "MU",
        "QQQ",
        "SPY",
        "STX",
        "TSM",
        "WDC"
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "INTC Stock Jumps Overnight: CEO Says Intel Will Keep Working With Musk's Terafab Amid TSMC Partnership Buzz",
      "headlineKo": "INTC 주가 밤새 상승: CEO, Intel이 TSMC 파트너십 버즈 속에서 Musk의 Terafab과 계속 협력할 것이라고 말함",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30ac265eba83cf2626b49c5e9f3f5cffb3032418259c0612eb179e252aaa8a48",
        "publishedAt": 1791358948,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "INTC 주가 밤새 상승: CEO는 인텔이 TSMC 파트너십 속에서 머스크의 Terafab과 계속 협력할 것이라고 밝혔습니다. Buzz AI Agent Trending News Earnings All DIA 0.29% SPY 0.10% QQQ 0.42% Trending SPCX 2.12% MU 2.24% WDC 1.28% IWM 0.52% STX 1.20% PENG 6.",
        "INTC 주가 밤새 상승: CEO는 Intel이 TSMC 파트너십 속에서 Musk의 Terafab과 계속 협력할 것이라고 말했습니다. Buzz Musk의 칩 제조 야망에서 Intel의 역할은 TSMC의 잠재적인 역할을 탐색하는 동안에도 그대로 유지됩니다.",
        "Intel CEO Lip-Bu Tan이 2026년 6월 2일 대만 타이베이에서 열린 COMPUTEX에서 기조 연설을 하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.29%, 0.10%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.29%, 0.10%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b9e97a1b5bca48bc2238",
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
      "headline": "The $500 Billion Question Causing Waves Across Every AI Stock: How Much Are Nvidia GPUs Actually Worth?",
      "headlineKo": "모든 AI 주식에 파장을 일으키는 5000억 달러 규모의 질문: Nvidia GPU의 실제로 가치는 얼마입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f159aef1a4322409868056455f96249f76d7e2214a18ec9c93415111d949d5d",
        "publishedAt": 1791358620,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $500 Billion, $500 billion, 4.96%, 7.44%, $40 million, 17%, 21%, 4.96 %.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 'The $500 Billion Question Causing Waves Across Every AI Stock: How Much Are Nvidia GPUs Actually Worth?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "22c621f4fb2fee7ac430",
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
      "headline": "eDreams ODIGEO and Amazon Alexa Collaborate to Bring AI Travel Search to Alexa+",
      "headlineKo": "eDreams ODIGEO와 Amazon Alexa, AI 여행 검색 기능을 Alexa+에 도입하기 위해 협력",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3967b9380759f5d534b5b924a222d05480e56faa2dee48159a58572aa849dcf3",
        "publishedAt": 1791358080,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "eDreams ODIGEO and Amazon Alexa Collaborate to Bring AI Travel Search to Alexa+",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'eDreams ODIGEO and Amazon Alexa Collaborate to Bring AI Travel Search to Alexa+' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "6dcca3becab40c23c328",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "CEG",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google Signs Nuclear Deal With Constellation Energy",
      "headlineKo": "구글, 컨스텔레이션 에너지(Constellation Energy)와 원자력 계약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=133cdde5521581150f3b593a457df6b43ffeec18d3ee2ee6ccc686a4c62e4e9b",
        "publishedAt": 1791357795,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google, Constellation Energy와 원자력 계약 체결 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 업계의 두 거대 기업 간에 합의된 대규모 발전 계약에서",
        "영원한 온라인 검색왕 구글의 모회사인 알파벳이 미국 최대 청정에너지 생산업체인 컨스텔레이션(Constellation)으로부터 3.59기가와트의 전력을 구매할 예정이다.",
        "이 중 최소 890MW는 Constellation의 원자력 자산에서 나올 것입니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, $45 billion, 25% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, $45 billion, 25% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "def6aab1576b6e4c4482",
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
      "headline": "Microsoft Stock Is on Track to Trail the S&P 500 for a 3rd Straight Year. History Says What Happened After Its Last 2 Streaks.",
      "headlineKo": "Microsoft 주식은 3년 연속 S&P 500을 추적할 예정입니다. 역사는 마지막 2연승 이후 무슨 일이 일어났는지 말해줍니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8e5299a210fc580610b16c44bc12fcffe38856de1dc1e4cd65fca9e2ba173136",
        "publishedAt": 1791355022,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft 주식은 3년 연속 S&P 500을 추적할 예정입니다.",
        "역사는 마지막 2연승 이후 무슨 일이 일어났는지 말해줍니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류하세요 Microsoft( MSFT +0.78% )는 지난 2년 동안 주주들을 위해 돈을 벌었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 16%, $525 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 16%, $525 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "250b56577648e8b7282e",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT",
        "MU",
        "QQQ",
        "SPY",
        "STX",
        "WDC"
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
      "headline": "Will AI Take Your Job? Microsoft's AI Chief Now Points To Nobel Laureate's Research Saying Only 5% Of Human Work Is At Risk",
      "headlineKo": "AI가 당신의 직업을 대신할 것인가? 마이크로소프트의 AI 책임자는 이제 인간 작업의 5%만이 위험에 처해 있다는 노벨상 수상자 연구를 지적합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc1995fcf4801a8355165a302e93e183d5614c7204dc5c57f3817d3973c9ffd0",
        "publishedAt": 1791352078,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft의 AI 책임자는 이제 인간 작업의 5%만이 위험에 처해 있다고 말하는 노벨상의 연구를 지적합니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.29% SPY 0.10% QQQ 0.40% 추세 SPCX 2.12% MU 2.18% WDC 1.23% IWM 0.51% STX 1.48% PENG 6.31% FCE",
        "마이크로소프트의 AI 책임자는 이제 인간 작업의 5%만이 위험에 처해 있다는 노벨상 수상자 연구를 지적합니다. 광고를 제거하세요.",
        "마이크로소프트의 AI 책임자는 이제 인간 작업의 5%만이 위험에 처해 있다고 말하는 노벨상 수상자 연구를 지적합니다. 업계 리더들은 AI로 인한 일자리 손실에 대한 극단적인 예측에 반발하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 0.29%, 0.10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 0.29%, 0.10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "981a005e7362ba4fbad5",
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
      "headline": "Prediction: A $1,000 Investment in Qualcomm Today Could Be Worth This Much by 2030 as AI Moves to the Edge",
      "headlineKo": "예측: AI가 엣지로 이동함에 따라 현재 Qualcomm에 대한 1,000달러 투자는 2030년까지 이만큼 가치가 있을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7e58d65d1423a1178a04c2adad3c63eb77a21eaf10a32d4c8565a983da49c134",
        "publishedAt": 1791350400,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $250, $1,000, 0.13 %, $ 0.24, $ 181.03, $190, $ 179.33, $ 183.09.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 QCOM의 사업과 관련된 'Prediction: A $1,000 Investment in Qualcomm Today Could Be Worth This Much by 2030 as AI Moves to the Edge' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "24cbd65c9133a4e48c5d",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Bull Gary Black Warns Investors About Confusing 'Great Company' With a Great Stock: ‘Valuation Matters’ Even With 45% EPS Growth",
      "headlineKo": "Tesla Bull Gary Black은 투자자들에게 '위대한 회사'와 위대한 주식을 혼동하지 말라고 경고합니다: 45%의 EPS 성장에도 '밸류에이션이 중요합니다'",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b9f857f7e5709fc871b8299172c42cc2978a05e530eec6537f59dae86fd1002b",
        "publishedAt": 1791345944,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla Bull Gary Black Warns Investors About Confusing 'Great Company' With a Great Stock: ‘Valuation Matters’ Even With 45% EPS Growth",
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
      "id": "81aaaccc50a92d554aad",
      "schemaVersion": 1,
      "eventType": "competitor_entry",
      "eventLabel": "경쟁사 기술·시장 진입",
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
      "headline": "Meta’s Enterprise Push Could Turn AI From a SaaS Feature Into a SaaS Competitor",
      "headlineKo": "Meta의 엔터프라이즈 푸시로 AI를 SaaS 기능에서 SaaS 경쟁자로 바꿀 수 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0f9e572499df78e6a53f294c1d33f2c6882cbb4dc6279e451d7a79c96c3a7a9",
        "publishedAt": 1791341971,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta’s Enterprise Push Could Turn AI From a SaaS Feature Into a SaaS Competitor",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
        "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "META에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "성능·가격 비교",
        "실제 고객 수주",
        "기존 회사 점유율·마진"
      ]
    },
    {
      "id": "4a4b5f3dcc976fc1385e",
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
      "headline": "Wells Fargo Hands Meta a $1,000 Target and a Warning About 2027 Earnings",
      "headlineKo": "Wells Fargo는 1,000달러 목표와 2027년 수익에 대한 경고를 메타에 제시했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25072dcb4a9cf1a9535714c2606e6bb2a86a1df0d05be2d877e24ee0aa92f246",
        "publishedAt": 1791341942,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wells Fargo는 1,000달러 목표와 2027년 수익에 대한 경고를 메타에 제시했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "485d65e3fb90a3002248",
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
      "headline": "Quanta Services vs. MasTec: Is Better Cash Flow Worth a 73% Earnings Premium?",
      "headlineKo": "Quanta Services vs. MasTec: 더 나은 현금 흐름이 73%의 수익 프리미엄을 누릴 가치가 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ae70a3b61c91030fa2da20481587dbba68d87004f5e5cfef0f505281479d068a",
        "publishedAt": 1791341698,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Services vs. MasTec: Is Better Cash Flow Worth a 73% Earnings Premium?",
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
      "id": "aafb0272c4aa3bd89150",
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
      "headline": "Salesforce vs. ServiceNow: Which AI Software Stock Offers the Better Cash-Flow Deal?",
      "headlineKo": "Salesforce 대 ServiceNow: 더 나은 현금 흐름 거래를 제공하는 AI 소프트웨어 주식은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=96bef0b79efe705788910c4a297e4420c3bb08a773cf02cfd735b966fa124baa",
        "publishedAt": 1791341550,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce vs. ServiceNow: Which AI Software Stock Offers the Better Cash-Flow Deal?",
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
      "id": "8ac045479eb6c92c84dc",
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
      "headline": "ASML: Buy Before Earnings As The Growth Runway Extends",
      "headlineKo": "ASML: 성장 활주로가 확장됨에 따라 수익을 내기 전에 구매하세요",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3678f95eb0bc4fbf5d51cbd545e6ae9d155f337972af1c1297cfff06d2ead581",
        "publishedAt": 1791339864,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML: Buy Before Earnings As The Growth Runway Extends",
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
      "id": "d0a50896375079113fd8",
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
      "headline": "Palantir Technologies (PLTR) Expands Sovereign AI Push As Valuation Looks Fully Priced",
      "headlineKo": "Palantir Technologies(PLTR), 가치 평가가 완전히 반영된 것처럼 보이면서 소버린 AI 추진 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a4f451b99b5d9625e684ffde024b6ff136e107b045fdfc6fafb88730914f37d",
        "publishedAt": 1791339011,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Technologies (PLTR) Expands Sovereign AI Push As Valuation Looks Fully Priced",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "a8a25aca777cb7dbe191",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "CEG",
        "GOOGL",
        "QQQ",
        "SPY",
        "STX",
        "TSLA"
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
      "headline": "Has Nuclear Energy Trade Seen Its Bottom? What Jan Van Eck Sees In The Constellation-Google Deal",
      "headlineKo": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
        "publishedAt": 1791336834,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "원자력 무역은 바닥을 보았는가?",
        "Jan Van Eck가 Constellation-Google 거래에서 보는 것 AI 에이전트 동향 뉴스 수입 전체 DIA 0.40% SPY 0.64% QQQ 0.42% 추세 BTC 1.54% SPCX 0.84% MSTR 1.66% ETH 3.15% NLST 17.88% PENG 13.66% BMNR 4.78% STX 8.86% USO 1.25% TSLA 0.11% 호",
        "Jan Van Eck가 Constellation-Google 거래 광고에서 보는 것 | 광고를 제거하세요."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.40%, 0.64%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.40%, 0.64%, 0.42% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "703a452876932cddb88a",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Has Nuclear Energy Trade Seen Its Bottom? What Jan Van Eck Sees In The Constellation-Google Deal",
      "headlineKo": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
        "publishedAt": 1791336834,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Has Nuclear Energy Trade Seen Its Bottom? What Jan Van Eck Sees In The Constellation-Google Deal",
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
      "id": "d18c919449d6b4d7440a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Applied Materials vs. Nvidia: What Revenue Trends Reveal About These Artificial Intelligence Companies",
      "headlineKo": "Applied Materials와 Nvidia: 인공지능 기업의 수익 추세가 보여주는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=09768827e4a0c77ffadf1adb7e31499366f1ec3a328766e280bfabd8d31dc036",
        "publishedAt": 1791331619,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: 인공 지능 기업에 대한 수익 추세가 보여주는 것 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Applied Materials 합류: 상위 분기로 점진적 전환",
        "최근에는 고급 3차원 칩 아키텍처와 고대역폭 메모리를 위해 특별히 설계된 6개의 새로운 제조 시스템을 도입했으며, 버클리 캘리포니아 대학교를 추가하여 적극적인 참여를 확대했습니다.",
        "Nvidia: 일관되고 빠른 분기별 수익 성장 Nvidia( NVDA +0.14% )는 주로 고급 그래픽 처리 장치(GPU), 특수 네트워킹 하드웨어, 클라우드 게임을 개발, 제조 및 배포하여 수익을 얻습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.14%, $150 billion, $7.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.14%, $150 billion, $7.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "46b70cbaa3dec7315439",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "STX",
      "relatedTickers": [
        "QQQ",
        "SPY",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Seagate Technology Holdings (STX) Stock Is Trending After Hours: Here's Why",
      "headlineKo": "Seagate Technology Holdings(STX) 주식은 영업시간 이후 추세를 보이고 있습니다. 그 이유는 다음과 같습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=2afa5789f4380fedd695fdd1b0bea8a0e264a8fcf3e7faa4dba14c0a12866ed2",
        "publishedAt": 1791331108,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate Technology 주식 0.30% 영업 시간 외 - Morgan Stanley(NYSE:MS), Seagate Technology Hldgs(NASDAQ: - Benzinga SPY 779.87 +0.10% QQQ 759.84 +0.02% BTC/USD 84,166.12 −1.62% DIA 514.66 +0.02% GLD 381.90 −0.10% TLT 77.20 −0.10% 미국 기호",
        "다국적 데이터 스토리지 회사의 주가는 화요일 종소리 이후 0.30% 상승한 808.08달러를 기록했습니다.",
        "Benzinga Pro 데이터에 따르면 정규 세션에서 Seagate 주가는 9.18% 하락한 $805.63에 마감되었습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.30%, 0.10%, 0.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.30%, 0.10%, 0.02% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2823564b0c49cdde139d",
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
      "headline": "Is Nvidia’s (NVDA) Free Cash Flow Keeping Pace With Its Reported Earnings?",
      "headlineKo": "Nvidia(NVDA)의 잉여 현금 흐름이 보고된 수익과 보조를 맞추고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9048cae72df8cac6c22c8e5326f8b6b607372c11bd052fe1c634b4196b276fb9",
        "publishedAt": 1791329944,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia(NVDA)의 잉여 현금 흐름이 보고된 수익과 보조를 맞추고 있습니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "b25f2f4e68704354c888",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "CEG",
        "MRVL",
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
      "headline": "S&P 500 And Nasdaq 100 Soar To Record Highs Amid Rising Bets Of Strong Quarterly Earnings — CEG, LCID, SPCX, MRVL In Focus",
      "headlineKo": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
        "publishedAt": 1791326129,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "19abe792ce249c71ec7f",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "CEG",
        "GOOGL",
        "MRVL",
        "MU",
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
      "headline": "S&P 500 And Nasdaq 100 Soar To Record Highs Amid Rising Bets Of Strong Quarterly Earnings — CEG, LCID, SPCX, MRVL In Focus",
      "headlineKo": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
        "publishedAt": 1791326129,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500과 Nasdaq 100은 강력한 분기 실적에 대한 기대감이 높아지는 가운데 최고치를 기록했습니다. CEG, LCID, SPCX, MRVL In Focus AI 에이전트 동향 뉴스 수익 전체 DIA 0.29% SPY 0.10% QQQ 0.40% 추세 SPCX 2.12% MU 2.18% WDC 1.23% IWM 0.51% ST",
        "S&P 500과 Nasdaq 100은 분기별 수익이 증가하는 가운데 최고치를 기록했습니다. CEG, LCID, SPCX, MRVL In Focus Constellation Energy는 Google과의 다년간의 원자력 계약에서 Nasdaq 100 지수 중 최고 상승률을 기록했습니다.",
        "트레이더들이 뉴욕 증권 거래소(NYSE) 폐장 시간 전에 일하고 있습니다. (사진 출처는 JOHANNES EISELE/AFP via Getty Images) Shashank Nayar · Stocktwits 게시일: 2026년 10월 6일 | 오후 6시 35분 EDT 공유 · S&P 500에 우리 추가 종료"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.29%, 0.10%, 0.40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.29%, 0.10%, 0.40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "04ebd9792158d2491905",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
        "GOOGL",
        "META",
        "QQQ",
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
      "headline": "XLK Does Not Own Alphabet, Amazon, Meta, Netflix or Tesla. Three Stocks Are 35.87% of It",
      "headlineKo": "XLK는 Alphabet, Amazon, Meta, Netflix 또는 Tesla를 소유하지 않습니다. 3개의 주식이 35.87%를 차지합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e89cf9ca966b15c06f25ef68871e73a4c203607efcaa3cec2e74e247d5ad4c89",
        "publishedAt": 1791326024,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "XLK는 Alphabet, Amazon, Meta, Netflix 또는 Tesla를 소유하지 않습니다.",
        "세 가지 주식이 35.87%를 차지합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,832.60 −0.05% Dow Jones 51,528.00 −0.15% Nasdaq 100 31,239.40 −0.16% Russell 2000 2,827.45 −0.25% S&P 500 7,832.60 −0.05% 다우존스 51,528.00 −0.15% 나스닥 100 31,239.40 −0.16% 러셀 2000 2,827.45 −0."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 35.87%, 64.45%, $123.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 35.87%, 64.45%, $123.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d54cacb18217b8c8c054",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Google inks deal with Constellation Energy for 3.6 GW of power in PJM",
      "headlineKo": "Google 잉크, PJM에서 3.6GW 전력 공급을 위해 Constellation Energy와 거래",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b20800c7109f51107d627a5943713fc3e9d0715721aa94b0c65db2dc4389673",
        "publishedAt": 1791325476,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google 잉크, PJM에서 3.6GW 전력 공급을 위해 Constellation Energy와 거래"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "c171f9bc00127e05ecdc",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "direction": "risk",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Jim Cramer Says the Chip Shortage “Can’t Be Solved” Without KLAC",
      "headlineKo": "Jim Cramer는 KLAC 없이는 칩 부족이 \"해결될 수 없다\"고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da91be182cb3afc867657f5908d2a8761c57187e1cbf5c9d1e563dc9773ce7af",
        "publishedAt": 1791324049,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Cramer는 KLAC 없이는 칩 부족이 \"해결될 수 없다\"고 말합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "dd9d6e2e7b6ffd7e41bd",
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
      "headline": "Black Hills stock surges 5% on $1.8B Google data center deal",
      "headlineKo": "18억 달러 규모의 Google 데이터 센터 거래로 Black Hills 주가 5% 급등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=532133e76807c02c4588f5537193934c41b52e86bb342f8139ccbda3d0a12bb9",
        "publishedAt": 1791323952,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "18억 달러 규모의 Google 데이터 센터 거래로 Black Hills 주가 5% 급등"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "987949f01e80381d4dc6",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "QQQ",
        "SPY",
        "TSLA"
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
      "headline": "NLST Stock Jumps 18% After Micron’s $600M License Deal — Retail Now Awaits SK Hynix",
      "headlineKo": "NLST 주가는 Micron의 6억 달러 라이선스 계약 이후 18% 상승 - 소매점은 이제 SK 하이닉스를 기다리고 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0793453309e7707a0bbd91c3efe340cf3c9c84d1dbde435c062847e7476a8041",
        "publishedAt": 1791323011,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NLST 주가는 Micron의 6억 달러 라이선스 계약 후 18% 상승 - 소매점은 이제 SK 하이닉스 AI 에이전트를 기다립니다. 동향 뉴스 수익 전체 DIA 0.40% SPY 0.64% QQQ 0.45% 추세 BTC 1.59% SPCX 0.82% MSTR 1.50% NLST 17.88% PENG 13.84% TSLA 0.11% BMNR 4.74% ETH",
        "NLST 주식은 Micron의 6억 달러 라이선스 계약 후 18% 상승 - 소매점은 이제 SK Hynix를 기다리고 있습니다. Micron은 화요일에 Netlist의 특허 포트폴리오에 대한 5년 라이선스를 6억 달러에 획득했습니다.",
        "트레이딩 보드 배경에서 주식 시장 차트가 상승하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 18%, $600, 0.40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 18%, $600, 0.40% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4879be352c36261bcbf0",
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
      "headline": "Stock Market Today, Oct. 6: Marvell Stock Is Up as the Company Raises FY2028 Revenue Outlook to $20 Billion",
      "headlineKo": "오늘, 10월 6일 주식 시장: Marvell 주가는 회사가 2028 회계연도 수익 전망을 200억 달러로 높이면서 상승했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83e0ef9fc987f98db97acab112d97a05f41721729ea51260c55bf20ca9463241",
        "publishedAt": 1791322204,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘, 10월 6일 주식 시장: Marvell 주가는 회사가 2028 회계연도 수익 전망을 200억 달러로 높이면서 상승했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "8f03e34f623fa40ab914",
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
      "headline": "Mark Cuban says Facebook knowingly runs AI deepfake scam ads as Meta docs reveal $16 billion in fraud-linked revenue",
      "headlineKo": "Mark Cuban은 Meta 문서에서 사기 관련 수익이 160억 달러에 달하는 것으로 밝혀지면서 Facebook이 고의로 AI 딥페이크 사기 광고를 운영하고 있다고 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2bae9b1f767db0945e28868e3655092c7cb6a370ccc23414053f8d3deb06c5f5",
        "publishedAt": 1791322200,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 META의 사업과 관련된 'Mark Cuban says Facebook knowingly runs AI deepfake scam ads as Meta docs reveal $16 billion in fraud-linked revenue' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f71aa75d6c49b19825ea",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QQQ",
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
      "headline": "Is A Tech Bubble Brewing? BofA Analysts Think So; Advises To Buy QQQ Options As A Hedge",
      "headlineKo": "기술 거품이 양조되고 있습니까? BofA 분석가들은 그렇게 생각합니다. 헤지로 QQQ 옵션을 구매하라고 조언합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c890c150130f859eeba04edfc57ece7141841c006af05b154ba90daf8f2ec625",
        "publishedAt": 1791321690,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "BofA 분석가들은 그렇게 생각합니다. 헤지 AI 에이전트로서 QQQ 옵션을 구매하라고 조언합니다. 동향 뉴스 수익 전체 DIA 0.64% SPY 0.23% QQQ 0.13% Trending APLD 1.97% BULL 18.96% SKHY 1.34% WOLF 17.50% DJT 4.68% PEP 1.61% SNDK 2.56% FLO 3.14% 우버 0.90% BMNR",
        "BofA 분석가들은 그렇게 생각합니다. 는 헤지 광고로 QQQ 옵션을 구매하라고 조언합니다 | 광고를 제거하세요.",
        "BofA 분석가들은 그렇게 생각합니다. 미국 헤지 은행 시장 전략가들은 기술 주식 거품의 팽창을 걱정하는 투자자들이 주식을 구매하는 대신 옵션 계약을 사용하여 위험을 관리할 수 있다고 제안함에 따라 QQQ 옵션을 구매하라고 조언합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.64%, 0.23%, 0.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.64%, 0.23%, 0.13% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3ac8a268a4416ea705fc",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Google and Constellation Energy sign latest nuclear energy deal",
      "headlineKo": "Google과 Constellation Energy가 최근 원자력 에너지 계약을 체결했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4288451f39c9c75ad7c3ca98fb992399fab6327365dc2a010ae6a943da7de9d2",
        "publishedAt": 1791321086,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google and Constellation Energy sign latest nuclear energy deal",
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
      "id": "225c8dcfc22df7d05083",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Constellation Energy Surges 12% on Google Nuclear Power Deal | Closing Bell",
      "headlineKo": "Constellation Energy, Google 원자력 계약으로 12% 급등 | 닫는 벨",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61d67e58385854d15b3609a1110db516d715884f22b42805531a8d8e97deb2cb",
        "publishedAt": 1791318872,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy, Google 원자력 계약으로 12% 급등 | 닫는 벨"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "c6aff69e09eaa91eb95d",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell raises fiscal 2031 revenue target at investor day",
      "headlineKo": "Marvell, 투자자 데이에서 2031 회계연도 매출 목표 상향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b3bb6e969e746963ce54baac0849b1c470c4ae77a71a436cc245c61ea1f5db5e",
        "publishedAt": 1791316497,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $70 billion, $90 billion, $20 billion, $18.2 billion, 4%, $47 billion, 50%, $45 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MRVL의 사업과 관련된 'Marvell raises fiscal 2031 revenue target at investor day' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "61e38ebadfb68a8f2a8a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Constellation Energy Rallied Today",
      "headlineKo": "오늘날 별자리 에너지가 상승한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2bca42318cba03e444b33759a0b5bb91d776e4a7b479e0451a7e28392f535d70",
        "publishedAt": 1791316163,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 별자리 에너지가 상승한 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Shares of Constellation Energy( CEG +12.25% )는 화요일 오후 3시 25분 현재 11.4% 상승했습니다.",
        "Constellation은 Alphabet( GOOG +0.22% )( GOOGL +0.35% )과 대규모 계약을 체결한 후 오늘 뉴스에 올랐습니다. 이 계약에 따라 Constellation은 원자력 발전 용량을 PJM 전력망으로 업그레이드하고 확장하여 Alphabet의 AI 데이터를 더 많이 공급할 것입니다.",
        "Expand NASDAQ: CEG Constellation Energy Premium Feature Moneyball Superscore 81 /100 오늘의 변동률( 12.25 %) $ 32.78 현재 가격 $ 300.40 주요 데이터 포인트 시가 총액 $95B 상장 주식을 사용하여 계산한 시가 총액"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.22%, 0.35%, 12.25 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.22%, 0.35%, 12.25 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4df2d39f0f042f89e8a2",
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
      "headline": "Marvell rides the AI boom, targets $90B in revenue by fiscal 2031",
      "headlineKo": "Marvell은 AI 붐을 타고 2031회계연도까지 매출 900억 달러를 목표로 하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd1442bda0c611fa1334f17bc6daf04e297b94976a8502ef8ed764624dcb48ce",
        "publishedAt": 1791314814,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell rides the AI boom, targets $90B in revenue by fiscal 2031",
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
      "id": "6cd7e1aad302a0a582cc",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "GOOGL",
        "MRVL",
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
      "headline": "AMD vs. Marvell Technology: Which AI Chip Stock Is a Better Buy in 2026?",
      "headlineKo": "AMD vs. Marvell 기술: 2026년에는 어느 AI 칩 주식이 더 나은 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ac6bfc335dfc3d4897ae8bd77e8ebfe7355b99e732688e3608ac1b0de4e44f64",
        "publishedAt": 1791314401,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology: 2026년에는 어떤 AI 칩 주식을 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 2026년 7월 Marvell은 AI를 포함한 맞춤형 칩을 개발하기 위해 Alphabet( GOOGL +0.35% ) 단위인 Google과 계약을 체결했습니다.",
        "Advanced Micro Devices( AMD +2.80% )와 Marvell Technology( MRVL +5.81% ) 중에서 선택하려면 최근 실적과 가치 평가를 자세히 살펴봐야 합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.80%, 5.81%, $649.42 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회",
        "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성",
        "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
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
        "이번 기사에서 확인된 구체적 수치: 2.80%, 5.81%, $649.42 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "impacts": [
        {
          "ticker": "AMD",
          "direction": "확인 필요",
          "reason": "회사 실적과의 연결고리 확인",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "8559c48ca042153780b2",
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
      "headline": "Sam Altman: Jensen Huang “Selling Picks and Shovels” as NVIDIA Heads for $6 Trillion",
      "headlineKo": "Sam Altman: NVIDIA가 6조 달러를 이끌면서 Jensen Huang은 \"곡괭이와 삽을 팔고 있습니다\"",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cfe4032716b37d12fb51c7d38a44653b6397a1cd89e2d3342cd4e06fdf66a5de",
        "publishedAt": 1791313970,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sam Altman: NVIDIA가 6조 달러를 이끌면서 Jensen Huang이 “곡괭이와 삽을 판매” | TIKR.com 일반 투자 Sam Altman: NVIDIA가 6조 달러를 이끌면서 Jensen Huang \"곡괭이와 삽 판매\" David Beren • 5분 읽기 R",
        "Sam Altman과의 Vanity Fair 인터뷰에서 Mark Guiducci는 Jensen Huang을 \"골드 러시 동안 곡괭이와 삽을 파는\" 사람으로 캐스팅했으며 그 역할은 주주들에게 유리하게 작용했습니다.",
        "분석가들은 엔비디아의 주당 순이익이 이번 회계연도에 대략 두 배로 증가할 것으로 예상하고 있으며, 주식은 5년 평균의 약 절반인 20배에 가까운 선행 순이익으로 거래되고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $6 Trillion, $5.8 trillion, $6 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $6 Trillion, $5.8 trillion, $6 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d9952b85779fd4bbca42",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "INTC",
        "NVDA",
        "QQQ",
        "SPY",
        "WDC"
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
      "headline": "Nvidia-Backed Cloud Computing Firm Lambda Looks To Raise $4B In Final Round Ahead Of IPO: Report",
      "headlineKo": "Nvidia가 지원하는 클라우드 컴퓨팅 회사 Lambda는 IPO를 앞두고 최종 라운드에서 40억 달러를 모금할 것으로 보입니다: 보고서",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a950b12175464e362e017872d96e02cf8657a0edfaafc0ae8f32b5f8be53e41",
        "publishedAt": 1791313674,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 지원 클라우드 컴퓨팅 회사 Lambda는 IPO를 앞두고 최종 라운드에서 40억 달러를 모금할 것으로 예상됩니다. AI 에이전트 보고 Trending News Earnings All DIA 0.50% SPY 0.63% QQQ 0.50% Trending NLST 17.88% PENG 9.93% STZ 2.83% SOUN 2.21% WDC 6.64% INTC 2.81% AEH",
        "Nvidia가 지원하는 클라우드 컴퓨팅 회사 Lambda는 IPO를 앞두고 최종 라운드에서 40억 달러를 모금할 것으로 보입니다: 보고서 인공 지능 인프라 스타트업인 Lambda는 의도된 개시에 앞서 최종 자금 조달 라운드에서 최대 40억 달러를 협상하고 있습니다.",
        "엔비디아 CEO 젠슨 황이 2026년 7월 16일 일본 도쿄에서 열린 기자회견에서 연설하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $4, 0.50%, 0.63% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4, 0.50%, 0.63% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "42d89f9cd2ef4eb9fdb8",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "QCOM",
      "relatedTickers": [
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm's AI Infrastructure Pivot Is Underappreciated",
      "headlineKo": "Qualcomm의 AI 인프라 중심점은 과소평가되었습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3dc0a82d970859f99bf341e6ca85ef48003b1f4234ea9632f51f35f718266a5",
        "publishedAt": 1791313440,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Qualcomm의 AI 인프라 중심점은 과소평가됨 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Qualcomm( QCOM +0.13% )은 2027년 대대적인 복귀를 목표로 하고 있습니다.",
        "현재까지 주가는 8%만 상승했습니다.",
        "AI 인프라로의 회사의 전환은 갑자기 주식의 23 P/E 비율을 헐값처럼 보이게 만드는 주요 촉매제이며, 기술 부문의 다른 플레이어와의 확고한 관계는 엄청난 출발점을 제공합니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, 0.13 %, $ 0.24 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8%, 0.13 %, $ 0.24 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d64f901b51bbd68599d1",
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
      "headline": "A $1,000 Bet on Microsoft a Decade Ago Crushed the Market by Over 3x",
      "headlineKo": "10년 전 Microsoft에 1,000달러를 베팅하여 시장을 3배 이상 무너뜨렸습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e7de2c0592ab26fcaddec2a42751f66ae3f36f431ef3242963c99459040a4c2f",
        "publishedAt": 1791313230,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10년 전 Microsoft에 1,000달러를 베팅하여 시장을 3배 이상 압도했습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,834.00 −0.03% Dow Jones 51,537.00 −0.13% Nasdaq 100 31,242.40 −0.15% Russell 2000 2,827.95 −0.23% S&P 500 7,834.00 −0.03% 다우존스 51,537.00 −0.13% 나스닥 100 31,242.40 −0.15% 러셀 2000 2,827.95 −0.",
        "작성자: Chris Lange 2026년 10월 6일 오후 3시(ET) 게시 · 2분 분량 𝕏 f ⧉ 치솟는 주식 차트와 금융 데이터의 생생한 디스플레이는 성공적인 투자에서 흔히 볼 수 있는 역동적인 성장을 반영합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1,000, $100 billion, $678 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1,000, $100 billion, $678 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "03ecd0828aed0cc7c1a0",
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
      "headline": "Scott Galloway: “Apple Wins by Showing Up Late” in AI, and Its New Home Hub Is the Test",
      "headlineKo": "Scott Galloway: \"Apple은 늦게 나타나서 승리합니다\", 새로운 홈 허브가 테스트입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ac561d8ba350cc919605f6b9a0a9c5cd4bdab64d83cac2661aea866b21964212",
        "publishedAt": 1791312256,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Scott Galloway: \"Apple은 늦게 나타나서 승리합니다\", 새로운 홈 허브가 테스트입니다 | TIKR.com 일반 투자 Scott Galloway: \"Apple은 늦게 나타나서 승리합니다\", 새로운 홈 허브가 테스트입니다 David Beren • 7분",
        "Scott Galloway는 18개월 이내에 매출 기준으로 최고의 스마트 디스플레이가 될 것이라고 예측했습니다.",
        "Galloway의 사례는 Apple이 가장 큰 비즈니스를 구축하는 방식으로 더 나은 제품과 프리미엄 가격으로 늦게 도착하여 돈을 버는 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7.6%, 37.8%, 46.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7.6%, 37.8%, 46.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c0995dc72dd6012acae6",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "CEG",
        "GOOGL",
        "INTC",
        "QQQ",
        "SPY",
        "VST",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "CEG, VST, TLN Jump: Google’s Power Deal Sparks A Nuclear Rally",
      "headlineKo": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
        "publishedAt": 1791311479,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 AI 에이전트 촉발 인기 뉴스 수익 전체 DIA 0.50% SPY 0.63% QQQ 0.50% 인기 NLST 17.88% PENG 9.93% STZ 2.83% SOUN 2.21% WDC 6.64% INTC 2.81% AEHR 9.96% ASTS 8.20% TEM 13.35% 라이트",
        "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발 Constellation과 Google은 화요일에 총 약 3,590MW에 달하는 두 건의 계약을 발표하여 CEG와 동료 VST 및 TLN에서의 구매를 촉발했습니다.",
        "이 조감도에서 폐쇄된 스리마일 아일랜드 원자력 발전소는 2024년 10월 10일 펜실베이니아주 미들타운 근처 서스퀘하나 강 한가운데에 서 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.50%, 0.63%, 17.88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.50%, 0.63%, 17.88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "08dafe9e2ee2aff2d77d",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "VST",
      "relatedTickers": [
        "CEG",
        "GOOGL",
        "VST"
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
      "headline": "CEG, VST, TLN Jump: Google’s Power Deal Sparks A Nuclear Rally",
      "headlineKo": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
        "publishedAt": 1791311479,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "30ddba40f6208c41816d",
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
      "headline": "Why I Don't Think Meta's AI Strategy Will Be Successful",
      "headlineKo": "메타의 AI 전략이 성공할 수 없을 것 같은 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d70da75a84d3a9662c8fd8bbf96c20b7103279ae9e813f5cf1a64985cb1ebde1",
        "publishedAt": 1791311402,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타의 AI 전략이 성공할 수 없을 것 같은 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% 개인 인공 지능 출시를 주도하는 Meta Platforms의 Motley Fool News( META -0.41% )에 참여하세요",
        "현재는 1월 이후 약 12% 상승하여 올해 긍정적인 영역에 있습니다.",
        "이는 투자자들이 Meta의 AI 전략을 믿게 만들었기 때문에 회사에게는 엄청난 전환 이야기였습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, $18 billion, 0.41 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, $18 billion, 0.41 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "917ad067cf1cc10f1530",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
        "CEG",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google’s $4.3 Billion Bet on Nuclear Comes Just Days After Amazon’s",
      "headlineKo": "구글이 원자력에 43억 달러를 투자한 것은 아마존이 투자한 지 불과 며칠 만에 이루어졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=645fba0295f899f90036130559b5d3476ef36615337a2c0084a3946a3acb24d2",
        "publishedAt": 1791310497,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google의 원자력에 대한 43억 달러 투자는 Amazon의 투자가 있은 지 불과 며칠 만에 이루어졌습니다. TIKR.com General Investing Google의 43억 달러 규모의 원자력 투자는 Amazon의 David Beren이 나온 지 불과 며칠 만에 이루어졌습니다. • 5분 읽기 검토자: Michael Douglass 마지막",
        "Amazon의 20년 계약이 체결된 지 일주일 후, 이는 Constellation의 원자력 함대가 장기 계약을 기반으로 구축된 사업이 되었음을 보여주며 그러한 종류의 사업은 더 높은 평가를 받을 자격이 있습니다.",
        "주요 위험은 긴 계약으로 인해 Constellation이 공개 시장에서 부족한 전력을 가져오는 가격보다 낮은 가격으로 고정될 수 있다는 것입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $4.3 Billion, 13%, 21.6 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4.3 Billion, 13%, 21.6 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "33cd0a79517b2ca97805",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Jim Cramer: Microsoft’s “Monster” Data Center Play Is Starting to Pay Off",
      "headlineKo": "Jim Cramer: Microsoft의 \"괴물\" 데이터 센터 플레이가 성과를 거두기 시작했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=877c9e0785f05e270a448502150c8e96980289df78ce9a142d230d2ba1b4789d",
        "publishedAt": 1791309841,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jim Cramer: Microsoft의 \"괴물\" 데이터 센터 플레이가 성과를 거두기 시작했습니다 | TIKR.com 일반 투자 Jim Cramer: Microsoft의 \"괴물\" 데이터 센터 플레이가 Michael Douglass의 성과를 거두기 시작했습니다. • 4분 읽기 검토자:",
        "Microsoft의 자본 지출은 2022 회계연도 239억 달러에서 2026 회계연도 1,160억 달러로 증가했으며, 3천만 명의 Copilot 사용자는 그 비용을 스스로 감당할 수 없습니다.",
        "지켜봐야 할 것은 지출이 정점에 도달하는 동시에 수익이 분석가들이 2028회계연도에 기대하는 4,670억 달러를 향해 계속 증가하는지 여부입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 37.5%, $23.9 billion, $116 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 37.5%, $23.9 billion, $116 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6961835ed3feecb870a9",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "TSMC Q3 Earnings: Strong AI Demand Sets the Bar High for Growth",
      "headlineKo": "TSMC 3분기 실적: 강력한 AI 수요로 성장의 기준이 높아졌습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eee32647e2dd9c812eb46807295402951283bebc08db4a697e83aa60b1fe535b",
        "publishedAt": 1791309600,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSMC Q3 Earnings: Strong AI Demand Sets the Bar High for Growth",
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
      "id": "fb792636bfe7c995ce55",
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
      "headline": "Nebius Rallies 9% on an Inference Deal While Its Earnings Multiple Sits Near 197x; CoreWeave Gains 4%, Oracle Advances 3%",
      "headlineKo": "Nebius는 추론 거래에서 9% 상승한 반면 수익은 197배에 가깝습니다. CoreWeave 4% 상승, Oracle 3% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ed823fab51bfd325fef365a3c4aaa96520171c1fdec2f50f23fe6caf2a03329",
        "publishedAt": 1791309449,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nebius는 추론 거래에서 9% 상승한 반면 수익은 197배에 가깝습니다. CoreWeave는 4% 상승, Oracle은 3% 발전 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,821.20 −0.19% Dow Jones 51,431.50 −0.34% Nasdaq 100 31,146.80 −0.45% Russell 2000 2,821.45 −0.46% S&P 500 7,821.20 −0.19% 다우존스 51,431.50 −0.34% 나스닥 100 31,146.80 −0.45% 러셀 2000 2,821.45 −0.",
        "작성자: David Moadel 2026년 10월 6일 오후 1시 57분(ET) 게시 · 3분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 9%, 4%, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 9%, 4%, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8b08b759d63369328e58",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Broadcom Stock Popped Tuesday Morning",
      "headlineKo": "Broadcom 주식이 화요일 아침에 폭등한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6e22575b44214c7a84d1f649aa08992a450a88b1de736837200208a6530b3fe",
        "publishedAt": 1791309326,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom 주식이 화요일 아침에 폭등한 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Shares of Broadcom( AVGO +3.67% )은 화요일에 4.6%나 상승하며 강세를 보였습니다.",
        "반도체 전문가의 상승을 촉진한 촉매제는 Marvell Technology(MRVL +5.81%)의 낙관적인 투자자 데이 프레젠테이션이었습니다.",
        "AI 채택 계속 Marvell은 화요일에 연례 투자자의 날을 주최했으며 회사의 예측은 주주들에게 환호할 이유를 제공했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.3%, 5.81%, $400 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.3%, 5.81%, $400 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "daaa05deed5c30a77989",
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
      "headline": "Bloom Energy (NYSE:BE) Q2 Earnings: Leading The Renewable Energy Pack",
      "headlineKo": "Bloom Energy (NYSE:BE) 2분기 실적: 재생 에너지 팩 선두",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fdc46853d7f33636cb3d81111b423d488d471df07d083d1b397ed96b78ab6715",
        "publishedAt": 1791308674,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bloom Energy (NYSE:BE) Q2 Earnings: Leading The Renewable Energy Pack",
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
      "id": "c9d575e0d5b5725873ff",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "AMD",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Citi Predicts 25% Upside for AMD as “the Key Beneficiary” of an Expanded $300 Billion CPU Market",
      "headlineKo": "Citi는 AMD의 3000억 달러 규모 CPU 시장 확장의 \"주요 수혜자\"로서 25% 상승 여력을 예측합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=92238007211c759df503210961c555ef4e85cf201f903701385be653ac2488e7",
        "publishedAt": 1791307965,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citi, AMD의 3000억 달러 규모 CPU 시장 확대의 \"주요 수혜자\"로 25% 상승 여력 예측 | TIKR.com General Investing Citi는 AMD가 3000억 달러 규모의 CPU 시장 확장의 \"주요 수혜자\"로서 25% 상승 여력을 가질 것으로 예측합니다. David",
        "Meta의 Muse와 같은 AI 에이전트는 작업을 수행하기 위해 CPU가 필요하며, 이로 인해 AMD의 서버 CPU 사업이 강세의 중심이 됩니다.",
        "CEO Lisa Su는 수요가 AMD가 공급할 수 있는 것보다 높으며 분석가들은 정규 EPS가 2027년에 두 배 이상 증가하여 15.72달러로 증가할 것으로 예상한다고 말했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 25%, $300 Billion, $800 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 25%, $300 Billion, $800 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "320e56443d937bcdf2af",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google faces £1.2 billion U.K. trial over Play Store fees",
      "headlineKo": "구글, 플레이스토어 수수료 영국에서 12억 파운드 규모의 재판 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02ecdc560bca3740f41a6f351d122306e339e8c6fba58f6699d4dd3e58bbf7b9",
        "publishedAt": 1791307232,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Play 스토어 수수료에 대한 재판 비즈니스 뉴스 Google은 영국에서 12억 파운드에 직면합니다.",
        "2,000만 명의 소비자에게 청구된 Play 스토어 수수료에 대한 재판 런던 경쟁 항소 재판소의 집단 소송은 2015년 10월부터 2026년 7월 사이에 Android 기기에서 이루어진 구매를 다루고 있습니다. 작성자: Cris Tolomia · 2분 분량 · 10월 업데이트",
        "Bloomberg에 따르면 해당 소비자를 대표하는 변호사는 소비자가 최대 12억 파운드(16억 달러)의 빚을 지게 될 수 있다고 말했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $1.6 billion, €890 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, $1.6 billion, €890 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "802591f84846fdd33845",
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
      "headline": "Apple's Market Value Grew From $350 Billion to $4.75 Trillion During Tim Cook's 15 Years as CEO. Here's What That Growth Curve Means for Betting on Apple's Next Chapter Under John Ternus.",
      "headlineKo": "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 4조 7500억 달러로 증가했습니다. John Ternus가 이끄는 Apple의 다음 장에 베팅할 때 성장 곡선이 의미하는 바는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec6f881fc469376cf38571cf8493b05b57d9365b22e179702e1a1c853e21e423",
        "publishedAt": 1791306720,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: $350 Billion, $4.75 Trillion, $350 billion, $4.75 trillion, 16%, 21.7%, 12%, $109.4 billion.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple's Market Value Grew From $350 Billion to $4.75 Trillion During Tim Cook's 15 Years as CEO. Here's What That Growth Curve Means for Betting on Apple's Next Chapter Under John Ternus.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "e3007994e6041ecde782",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MU",
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
      "headline": "SK Hynix Falls 4% on Earnings Caution Before a Rebalancing Goldman Says Favors It; SanDisk Slips 2%, Micron Holds Firm",
      "headlineKo": "SK하이닉스, 수익 4% 하락 골드만삭스가 재조정을 선호한다고 말하기 전 주의; SanDisk는 2% 하락, Micron은 확고히 유지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=547005e71eff3008bc34ae5604e43da34dbc21f23cd0c5d0ae70215641ff6138",
        "publishedAt": 1791305979,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SK하이닉스, 수익 4% 하락 골드만삭스가 재조정을 선호한다고 말하기 전 주의; SanDisk는 2% 하락하고 Micron은 24/7 월스트리트에서 확고한 지위를 유지했습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,835.80 +0.62% Dow Jones 51,602.50 +0.46% Nasdaq 100 31,288.50 +0.50% Russell 2000 2,834.20 −0.69% S&P 500 7,835.80 +0.62% 다우존스 51,602.50 +0.46% 나스닥 100 31,288.50 +0.50% 러셀 2000 2,834.20 −0.",
        "𝕏 f ⧉ © Stockcrafterpro / Shutterstock.com 메모리 칩 주식은 보고 위험에 따라 거래되고 있으며, 가장 큰 매도는 아직 보고할 분기가 남아 있는 한 주요 공급업체에 착륙하는 것입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 2%, $187.25 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, 2%, $187.25 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "94ede47ff04d2635d995",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arista Networks Advances 4% While Ciena Soars 11% on AI Networking Demand; Cisco Rises 3%",
      "headlineKo": "Arista Networks는 4% 성장하고 Ciena는 AI 네트워킹 수요로 11% 급증합니다. 시스코 3% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b159ffeba33b5442476edfe61ce3b5eed8c32f68a833e79dcc2393fe045b48d7",
        "publishedAt": 1791305794,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arista Networks는 4% 성장하고 Ciena는 AI 네트워킹 수요로 11% 급증합니다. Cisco는 3% 상승 - 월스트리트 24/7",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,832.60 −0.05% Dow Jones 51,528.00 −0.15% Nasdaq 100 31,239.40 −0.16% Russell 2000 2,827.45 −0.25% S&P 500 7,832.60 −0.05% 다우존스 51,528.00 −0.15% 나스닥 100 31,239.40 −0.16% 러셀 2000 2,827.45 −0.",
        "작성자: David Moadel 2026년 10월 6일 오후 12:56(ET) 게시 · 4분 읽기 Market Movers 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 11%, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, 11%, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ec343632477a3019f99f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMD",
        "INTC",
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
      "headline": "Embedded Systems - Global Strategic Business Report: Capture $71 Billion in Growth Through 2032 as Intel, Qualcomm, NXP Semiconductors, and STMicroelectronics Accelerate AI and IoT Disruption",
      "headlineKo": "임베디드 시스템 - 글로벌 전략 비즈니스 보고서: Intel, Qualcomm, NXP Semiconductors 및 STMicroelectronics가 AI 및 IoT 파괴를 가속화함에 따라 2032년까지 710억 달러 성장 달성",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b20d74487d12ee8348f9eab77dabff4b7549dba9988236e66b36d49c0c0254a3",
        "publishedAt": 1791305580,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 INTC의 사업과 관련된 'Embedded Systems - Global Strategic Business Report: Capture $71 Billion in Growth Through 2032 as Intel, Qualcomm, NXP Semiconductors, and STMicroelectronics Accelerate AI and IoT Disruption' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0c0a73112d58c12cd52e",
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
      "headline": "Hybrid Information Technology (IT) Management Market Global Report 2026 | Capitalize on $114.84 Billion AIOps and Cloud Demand with Dell, Cisco, Oracle, ServiceNow and Datadog",
      "headlineKo": "하이브리드 정보 기술(IT) 관리 시장 글로벌 보고서 2026 | Dell, Cisco, Oracle, ServiceNow 및 Datadog을 통해 1,148억 4천만 달러 규모의 AIOps 및 클라우드 수요를 활용하세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a22d0643667e428386ab621268c00d0c0be9614e5394900256a2989ef1298db8",
        "publishedAt": 1791305460,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 ORCL의 사업과 관련된 'Hybrid Information Technology (IT) Management Market Global Report 2026 | Capitalize on $114.84 Billion AIOps and Cloud Demand with Dell, Cisco, Oracle, ServiceNow and Datadog' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "1201c5989a79e6da21d0",
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
      "headline": "Apple (AAPL): Buy, Sell, or Hold Post Q2 Earnings?",
      "headlineKo": "Apple(AAPL): 2분기 수익을 매수, 매도 또는 보류하시겠습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=852789c2e5c4f81eab879f618cc34fb8b1e51faa4e443cbe089db6e4a8dec4ad",
        "publishedAt": 1791305314,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple (AAPL): Buy, Sell, or Hold Post Q2 Earnings?",
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
      "id": "d0976232a00aabc38935",
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
      "headline": "Western Digital Fell Nearly 20% Over The Last 3 Months: A Respected Wall Street Analyst Says 140% To Come",
      "headlineKo": "Western Digital은 지난 3개월 동안 거의 20% 하락했습니다: 존경받는 월스트리트 분석가는 140%가 올 것이라고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6be377fbc673d00ebb9d2310572ed3e6eec0137c219f17d9df2c3d7369f2b1c3",
        "publishedAt": 1791305129,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital은 지난 3개월 동안 거의 20% 하락했습니다: 존경받는 월스트리트 분석가는 140% 상승할 것이라고 말합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,817.00 −0.25% Dow Jones 51,384.00 −0.43% Nasdaq 100 31,129.00 −0.51% Russell 2000 2,818.95 −0.55% S&P 500 7,817.00 −0.25% 다우존스 51,384.00 −0.43% 나스닥 100 31,129.00 −0.51% 러셀 2000 2,818.95 −0.",
        "작성자: Alex Sirois 2026년 10월 6일 오후 12시 45분(ET) 게시 · 4분 읽기 𝕏 f ⧉ 이 인포그래픽은 Western Digital(WDC)의 최근 3개월 가격 하락과 현재 분석가 목표를 보여주며 상당한 상승 여력을 시사합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 20%, 140%, $441.64, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 20%, 140%, $441.64, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bf5d5804141eade971e7",
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
      "headline": "Amazon at $250: $1 billion “Built Together” Data Center Push Is Already Backfiring",
      "headlineKo": "Amazon의 250달러: 10억 달러 규모의 \"함께 구축\" 데이터 센터 추진은 이미 역효과를 낳고 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c07610cc2fd82441f3317db59ef719e2dc8990ed21a2689bdc616e104e9a7c41",
        "publishedAt": 1791305122,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $250, $1 billion, $251.40., $200 billion, $274.48, 36.7%, $42.2 billion, 39.4%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Amazon at $250: $1 billion “Built Together” Data Center Push Is Already Backfiring' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "2706572251bf12a9b4c8",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "GOOGL",
        "MSFT",
        "NVDA",
        "PLTR",
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
      "headline": "Not Microsoft. Not Google. Analysts Call This $2.7 Trillion Tech Titan the Most Undervalued AI Play.",
      "headlineKo": "마이크로소프트가 아닙니다. 구글이 아닙니다. 분석가들은 이 2조 7천억 달러 규모의 기술 타이탄을 가장 저평가된 AI 플레이라고 부릅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ace78cffa55a1f59fc8f1d51337c8297fff889c1283b8b9c28203ebe2428365",
        "publishedAt": 1791304860,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "분석가들은 이 2조 7천억 달러 규모의 기술 타이탄을 가장 저평가된 AI 플레이라고 부릅니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 투자자들이 눈앞에서 명백한 기술 투자를 간과하고 있습니까?",
        "Nvidia 및 Palantir Technologies와 같은 주식은 최근 몇 년간 급등하여 S&P 500 지수를 더 끌어올렸습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $2.7 Trillion, 1.95%, 51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2.7 Trillion, 1.95%, 51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e7d4190a7288623a5223",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "CEG",
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
      "headline": "Google, Constellation Energy Strike Deal for Nuclear Power",
      "headlineKo": "구글, 원자력 발전을 위한 Constellation Energy 파업 계약",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28380b6170d99638d5dc37706d946c6908e0aaa412c188423614957ac393c426",
        "publishedAt": 1791304281,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "구글, 원자력 발전을 위한 Constellation Energy 파업 계약"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "67fec3579c380b9cf5e8",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Applied Materials vs. Nvidia: Which Chip Stock Is a Better Buy in 2026?",
      "headlineKo": "Applied Materials vs. Nvidia: 2026년에는 어떤 칩 주식을 구매하는 것이 더 나을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90bebc3cbc67f1096fd2ecde167735fc1614a5ce197356e38efb3d3ad8554904",
        "publishedAt": 1791303602,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: 2026년에는 어떤 칩 주식을 구매하는 것이 더 나은가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능 지출 붐은 칩 팩터에 장비를 공급하는 회사와 함께 칩 디자이너에게 보상을 주었습니다.",
        "오늘 Applied Materials(AMAT -2.21%) 또는 Nvidia(NVDA +0.14%)를 선호해야 합니까?"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.21%, 0.14%, $530.27 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.21%, 0.14%, $530.27 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cee442d4877d8e9d74bd",
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
      "headline": "Ofcom investigates Meta amid High Court showdown",
      "headlineKo": "Ofcom, 고등법원 대결 중 메타 조사",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ab3193ce38c45540ccf8ccc9036149a57d4f574d0b8fbc9c185ab07ae52c8eda",
        "publishedAt": 1791303046,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Ofcom investigates Meta amid High Court showdown",
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
      "id": "4e19ec4aa5796617d97f",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG",
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
      "headline": "Constellation Energy Soars 14% on “Model” $4.3 Billion Google Nuclear Deal",
      "headlineKo": "Constellation Energy는 43억 달러 규모의 Google 원자력 거래 '모델'로 14% 급등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7056f0cc91dbae4d6d9a0235eabb47e697e13a8468debb2e3a90264338cfde32",
        "publishedAt": 1791302632,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy는 43억 달러 규모의 Google 원자력 거래 '모델'로 14% 급등"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "89f6dd8bf1f02e775524",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
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
      "headline": "AMD Spikes 4% as Citi Lifts Target to $800 and Stifel Goes to $700; NVIDIA Ticks Up, Intel Slips",
      "headlineKo": "Citi가 목표를 800달러로 높이고 Stifel이 700달러로 상승함에 따라 AMD는 4% 급등합니다. NVIDIA의 상승, Intel의 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8677f0b25892457821cbc498c33ed40d6af7debd99f0760a2db4644d43046d23",
        "publishedAt": 1791302186,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citi가 목표를 800달러로 높이고 Stifel이 700달러로 상승함에 따라 AMD는 4% 급등합니다. NVIDIA의 상승, Intel의 하락 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,834.00 −0.03% Dow Jones 51,537.00 −0.13% Nasdaq 100 31,242.40 −0.15% Russell 2000 2,827.95 −0.23% S&P 500 7,834.00 −0.03% 다우존스 51,537.00 −0.13% 나스닥 100 31,242.40 −0.15% 러셀 2000 2,827.95 −0.",
        "그 모순이 오늘 집회의 실제 이야기입니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, $800, $700 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, $800, $700 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "69ccb1e83bf22dbafc86",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Western Digital Sinks 6% as Toshiba’s Drive Expansion Hits the Group; Seagate Drops 8%, Micron Holds Flat",
      "headlineKo": "Toshiba의 드라이브 확장이 그룹을 강타함에 따라 Western Digital이 6% 하락했습니다. Seagate는 8% 하락, Micron은 보합세 유지",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11074b2fd5407e2ce70b7bff5652619813f1de40dd70c8785403a1e2e28b9b79",
        "publishedAt": 1791301929,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Toshiba의 드라이브 확장이 그룹을 강타함에 따라 Western Digital은 6% 하락했습니다. Seagate 하락 8%, Micron은 보합세 유지 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,835.80 +0.62% Dow Jones 51,602.50 +0.46% Nasdaq 100 31,288.50 +0.50% Russell 2000 2,834.20 −0.69% S&P 500 7,835.80 +0.62% 다우존스 51,602.50 +0.46% 나스닥 100 31,288.50 +0.50% 러셀 2000 2,834.20 −0.",
        "오늘날 스토리지 재고는 메모리 칩 이름을 그대로 유지하면서 어려움을 겪고 있으며, 분할은 매도가 진정한 공급 두려움을 반영하는지 아니면 거래 자체에 숨어 있는 무엇인가에 대한 날카로운 질문을 제기합니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 8%, $414.65 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 6%, 8%, $414.65 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e18a93f6ef2968b6bc18",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "MU",
      "relatedTickers": [
        "INTC",
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
      "headline": "Not Nvidia. Not Micron. If I Could Buy and Hold Only 1 Artificial Intelligence (AI) Chip Stock Through 2030, It Would be This One.",
      "headlineKo": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 칩 주식을 1개만 사고 보유할 수 있다면 이 주식이 될 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f33a6af72c9567f9e0743bc2124c14d5b16042fb058ea6502e53ccb09e538fc",
        "publishedAt": 1791300900,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "2030년까지 인공지능(AI) 칩 주식을 1개만 사고 보유할 수 있다면 이 주식이 될 것입니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 모델 훈련 클러스터를 구동하는 모든 GPU는 어딘가에 구축되어야 하며, 그 어딘가는 거의 항상 Tai가 운영하는 공장입니다.",
        "Taiwan Semi는 헤드라인을 장식하는 인공지능(AI) 칩을 설계하지 않습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.14%, 2.80%, 1.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.14%, 2.80%, 1.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7b7a8f9ae488f236c7a9",
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
      "headline": "What Will $5,000 Invested in Broadcom Stock Be Worth in 5 Years?",
      "headlineKo": "Broadcom 주식에 투자한 5,000달러의 가치는 5년 후에 얼마가 될까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4cf5783bcf7119527bb2f19977592f8565ef00b3cde9a3061df259aaff4914e7",
        "publishedAt": 1791300603,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom 주식에 투자한 5,000달러의 가치는 5년 후에 얼마가 될까요?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,832.60 −0.05% Dow Jones 51,528.00 −0.15% Nasdaq 100 31,239.40 −0.16% Russell 2000 2,827.45 −0.25% S&P 500 7,832.60 −0.05% 다우존스 51,528.00 −0.15% 나스닥 100 31,239.40 −0.16% 러셀 2000 2,827.45 −0.",
        "Broadcom의 AI 칩 매출은 한 분기에 221%나 폭발적으로 증가했으며, 그 예측은 대부분의 투자자들이 가격을 책정하는 수준을 훨씬 뛰어넘습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $5,000, 221%, $355.14 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $5,000, 221%, $355.14 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "839f59811f40af71f58d",
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
      "headline": "Stellantis N.V. vs. Tesla: Which Consumer Stock Is a Better Buy in 2026?",
      "headlineKo": "Stellantis N.V. vs. Tesla: 2026년에는 어느 소비재 주식이 더 나은 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23cf5fafacfae18434de2be3c4c6dcb1f4ead23dd82c2105cb270f86518c0428",
        "publishedAt": 1791300152,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla: 2026년에는 어느 소비재 주식이 더 나은 매수인가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Can Stellantis N.V.의 가치 지향, 멀티 브랜드 전략",
        "( STLA +2.67% ) 급변하는 자동차 환경에서 Tesla( TSLA +0.52% )의 고성장, 고평가 매력을 극복할 수 있을까요?"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.67%, 0.52%, 2.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.67%, 0.52%, 2.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a6ef8db602d8cafb2ac6",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "VST",
      "relatedTickers": [
        "CEG",
        "SPY",
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
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500's Vistra And Constellation Soar On AI Nuclear Energy Deals",
      "headlineKo": "S&P 500의 Vistra와 Constellation, AI 원자력 거래로 급증",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18186b767c3a9f684f7a16f6bdaecbe99ba6843b5ad2ed2634d73ac1c2cd7238",
        "publishedAt": 1791299240,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500의 Vistra와 Constellation, AI 원자력 거래로 급증"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "0d24c4e654d71dbbb7d1",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO",
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
      "headline": "Marvell Rallies 6% as Investor Day Presses the Custom AI Silicon Case; Broadcom Advances 4%",
      "headlineKo": "Marvell은 Investor Day가 맞춤형 AI 실리콘 케이스를 발표하면서 6% 상승했습니다. 브로드컴 4% 성장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec358978f9e029c30d882aa27459f91cf6ceb70b07640d6d92384416921cb4a2",
        "publishedAt": 1791298136,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell은 Investor Day가 맞춤형 AI 실리콘 케이스를 발표하면서 6% 상승했습니다. 브로드컴 4% 성장"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "84f077d00c8cbeb4d823",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Vistra Stock Popped on Tuesday",
      "headlineKo": "비스트라 주식이 화요일에 터진 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b919239049cd546a682d4931f571d3a3fcc34d08bb47fc641dea2eaad2aa0860",
        "publishedAt": 1791297876,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "화요일에 Vistra 주식이 급등한 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 원자력 주식 Vistra Corp( VST +10.77% )는 오전 10시 10분까지 9.1% 상승했습니다.",
        "에너지부는 \"펜실베이니아와 오하이오에 있는 Vistra의 원자력 발전소 전반에 걸쳐\" 원자력 발전소 업그레이드 자금을 조달하기 위해 회사에 42억 달러를 대출할 것이라고 발표했습니다. 이미지 출처: 게티 이미지.",
        "트럼프 대통령은 두 부분으로 나누어 '미국의 원자력 르네상스'를 선언했다. 첫째는 소형모듈형원자로(SMRS) 등 신규 원전 건설을 촉진하는 것이고, 둘째는 재가동, 수명연장, 즉 원전폭발이다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $4.2 billion, 10%, 10.77 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4.2 billion, 10%, 10.77 % — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8df3775db4eb51fe8b84",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "VST",
      "relatedTickers": [
        "CEG",
        "GOOGL",
        "VST"
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
      "headline": "Constellation Energy Soars 12% on Google Nuclear Deal for 890 MW; Vistra Jumps 8%, Talen Energy Climbs 7%",
      "headlineKo": "Constellation Energy는 890MW에 대한 Google Nuclear 거래로 12% 급등했습니다. 비스트라 8% 상승, 탈렌 에너지 7% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ffeac571bad1ba2b1178d656e9dc68ada6313e464ac8f995437899d55fd6bd0f",
        "publishedAt": 1791295560,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy는 890MW에 대한 Google Nuclear 거래로 12% 급등했습니다. 비스트라 8% 상승, 탈렌 에너지 7% 상승"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "08ae54924121fb348071",
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
      "headline": "Applied Materials (AMAT) Is Up 11.4% After New AI Chip Memory and Packaging Partnerships Announced",
      "headlineKo": "Applied Materials(AMAT)는 새로운 AI 칩 메모리 및 패키징 파트너십 발표 후 11.4% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=851222c823fb00da5a3c24e852e31775b7238613930297191a3a3e21ee440a72",
        "publishedAt": 1791295527,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials(AMAT)는 새로운 AI 칩 메모리 및 패키징 파트너십 발표 후 11.4% 상승"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "bff2d3df7f833dde1659",
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
      "headline": "Tesla’s Robotaxis, FSD And Optimus Outlook Matter More Than Q3 Earnings, Says Goldman Sachs",
      "headlineKo": "Goldman Sachs는 Tesla의 Robotaxis, FSD 및 Optimus 전망이 3분기 수익보다 더 중요하다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00292a10c6aeb5b3720091a97fe8ddfa2d8f190bd5ccb3b702350f3dc854841c",
        "publishedAt": 1791294994,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Goldman Sachs는 Tesla의 Robotaxis, FSD 및 Optimus 전망이 3분기 수익보다 더 중요하다고 말합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "0081a110c95bc9f14506",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "LITE",
      "relatedTickers": [
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
      "headline": "Applied Optoelectronics Surges 6% as $600M Share Sale Program Closes; Lumentum Sits Out the Rally, Corning Edges Higher",
      "headlineKo": "Applied Optoelectronics는 6억 달러 규모의 주식 판매 프로그램이 종료되면서 6% 급등; Lumentum이 랠리를 펼치고 Corning Edges가 더 높아졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51a2738c03f5599ac3dfbc10df735600364f9c8a8485a2f3ce8b1eb23f624af4",
        "publishedAt": 1791294777,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Optoelectronics는 6억 달러 규모의 주식 판매 프로그램이 종료되면서 6% 급등; Lumentum이 랠리를 펼치고 Corning Edges가 더 높아졌습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,810.40 +0.04% Dow Jones 51,206.80 +0.03% Nasdaq 100 31,219.00 +0.09% Russell 2000 2,797.84 −0.02% S&P 500 7,810.40 +0.04% 다우존스 51,206.80 +0.03% 나스닥 100 31,219.00 +0.09% 러셀 2000 2,797.84 −0.",
        "Applied Optoelectronics(NASDAQ:AAOI)는 6억 달러 규모의 시장 지분 프로그램을 완료한 후 그 방법을 보여주고 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, $600, $600 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LITE에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 6%, $600, $600 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "1551ec9dde8018ffb40b",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "CEG",
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
      "headline": "Google and Constellation Sign a 3.6 GW Deal: The Bigger Half Isn’t the Nuclear",
      "headlineKo": "Google과 Constellation, 3.6GW 계약 체결: 더 큰 절반은 원자력이 아님",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93a7dccb99d34c679f2e18826a66ceabeee160c2ae76da9d513fc72e5d8fa2c0",
        "publishedAt": 1791294041,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google과 Constellation, 3.6GW 계약 체결: 절반은 원자력이 아님 | TIKR.com Google과 Constellation에 투자하여 3.6GW 계약 체결: 더 큰 절반은 원자력 Gian Estrada가 아님 • 4분 읽기 검토자: David",
        "그 중 약 4분의 1만이 새로운 원자력 발전입니다.",
        "나머지는 Constellation이 이미 운영 중인 식물에 대한 장기 계약이며, 거래의 해당 부분은 주식만큼 중요합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3%, $276,, $1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3%, $276,, $1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1e07bec85e986b5a870c",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "CEG",
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
      "headline": "Google & Constellation Energy ink $1B nuclear agreement, but this deal isn't unique",
      "headlineKo": "Google과 Constellation Energy는 10억 달러 규모의 원자력 계약을 체결했지만 이번 거래는 독특하지 않습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=29dbe8d231c4e2b6b275de100fdf06358b0c3193cbe45b1c5aefa07d779e4008",
        "publishedAt": 1791294022,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google & Constellation Energy ink $1B nuclear agreement, but this deal isn't unique",
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
      "id": "4b1eaf5596e064a5666a",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Lisa Su Says AI Demand Will Stay ‘Very, Very High’ for Years as AMD Races to Add Supply",
      "headlineKo": "Lisa Su는 AMD가 공급을 추가하기 위해 경쟁함에 따라 AI 수요가 수년 동안 '매우, 매우 높은' 상태를 유지할 것이라고 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cac0f65dbfc159b0714adc0c403527d74a4d55a70d487f42c12b66ea4217e584",
        "publishedAt": 1791293981,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD CEO Lisa Su는 AI 수요가 수년간 '매우, 매우 높음'을 유지할 것이라고 말했습니다 - Advanced Micro Devices (NASDAQ:AMD - Benzinga SPY 778.17 QQQ 760.77 BTC/USD 86,331.01 +0.68% DIA 514.30 GLD 381.51 TLT 77.18 US 로그인 등록 내 계정 Benzinga Prem",
        "(NASDAQ: AMD ) CEO Lisa Su는 AI 및 컴퓨팅 용량에 대한 수요가 수년 동안 계속 높아질 것이며 칩 제조업체는 올해 용량을 확장한 후에도 2027년에 다시 공급을 크게 늘려야 한다고 말했습니다.",
        "Su는 화요일 대만을 하루 동안 방문하여 여러 AMD 공급업체를 만났고 회사에는 더 발전된 웨이퍼 용량이 필요하다고 말했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.68%, $10 billion, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.68%, $10 billion, 2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9d85e9c8ff77086405cf",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "CEG",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google Nuke Deal Jolts Constellation Energy To Top Of S&P 500",
      "headlineKo": "Google Nuke 거래로 Constellation Energy가 S&P 500의 정상에 올랐습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7e18ab404af9c9282e2757715b08eae41004e04bad1a5a25594051ebec36d6e3",
        "publishedAt": 1791293966,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google Nuke Deal Jolts Constellation Energy To Top Of S&P 500",
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
      "id": "cef165066a1e76e639b6",
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
      "headline": "What Will Decide Broadcom Stock Performance Over The Next Six Months?",
      "headlineKo": "향후 6개월 동안 Broadcom 주식 성과는 어떻게 결정됩니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d83225fbcdf76f5ad3d95e1dc63d6311f38fb737a619004ae49fb0ae8ad352b",
        "publishedAt": 1791293741,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "향후 6개월 동안 Broadcom 주식 성과는 어떻게 결정됩니까?",
        "| Trefis 향후 6개월 동안 Broadcom 주식 실적은 어떻게 결정됩니까?",
        "2026년 10월 6일 · Trefis 팀 AVGO YTD +5.3% SPY YTD +14.2% QQQ YTD +23.4% AVGO 분석 → Broadcom(AVGO) 주식은 2026년 10월 5일까지 지난 12개월 동안 약 8% 수익률을 기록했는데, 이는 S&P 500의 16%에 훨씬 못 미치는 수치입니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $21.7 billion, 73%, $115 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $21.7 billion, 73%, $115 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9eeaf6bf308c26930ce3",
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
      "headline": "Nvidia Turned $10,000 Into More Than $1.3 Million. Can It Happen Again?",
      "headlineKo": "Nvidia는 10,000달러를 130만 달러 이상으로 바꿨습니다. 이런 일이 다시 일어날 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8a727c4024cc4ddf8d9d697158739be6f84f9295ecb6442fd87dae387e523d36",
        "publishedAt": 1791293455,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia는 10,000달러를 130만 달러 이상으로 바꿨습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,837.80 +0.65% Dow Jones 51,571.40 +0.40% Nasdaq 100 31,368.20 +0.76% Russell 2000 2,845.37 −0.30% S&P 500 7,837.80 +0.65% 다우존스 51,571.40 +0.40% 나스닥 100 31,368.20 +0.76% 러셀 2000 2,845.37 −0.",
        "10년 전 Nvidia에 10,000달러를 베팅한 것은 조용히 인생을 바꾸는 금액이 되었지만, 5조 5700억 달러의 시가총액을 고려하면 같은 계산은 더 이상 같은 방식으로 적용되지 않습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $1.3 Million, $5.57 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $1.3 Million, $5.57 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7ccdd259d5d0b36b4a09",
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
      "headline": "New Mexico Wants Meta to Pay Up to $40 Billion. A Judge Rules This Month",
      "headlineKo": "뉴멕시코는 Meta가 최대 400억 달러를 지불하기를 원합니다. 이번 달에는 판사가 판결을 내립니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=888c4145bef105cc96d4d2ced515194eda32d57222f206898d2ae0da16510cb1",
        "publishedAt": 1791293446,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "뉴멕시코는 Meta가 최대 400억 달러를 지불하기를 원합니다.",
        "이번 달에는 판사가 판결합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,837.80 +0.65% Dow Jones 51,571.40 +0.40% Nasdaq 100 31,368.20 +0.76% Russell 2000 2,845.37 −0.30% S&P 500 7,837.80 +0.65% 다우존스 51,571.40 +0.40% 나스닥 100 31,368.20 +0.76% 러셀 2000 2,845.37 −0."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $40 Billion, $741.90, 1.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $40 Billion, $741.90, 1.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "687543ec97b152a83fe7",
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
      "headline": "Nvidia Backed Reflection AI Launches Its New Beam Model To Compete With Chinese tech rivals",
      "headlineKo": "Nvidia Backed Reflection AI, 중국 기술 경쟁업체와 경쟁하기 위해 새로운 빔 모델 출시",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ffa4c7b8f524b454d6d3ded0f182ca165bbdea14f7d9c59b4c7277b3b0f7eb9",
        "publishedAt": 1791293007,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 지원 Reflection AI, 중국 기술 경쟁업체와 경쟁하기 위해 새로운 빔 모델 출시 | TIKR.com 일반 투자 Nvidia Backed Reflection AI, 중국 기술 경쟁사인 Aditya Raghunath와 경쟁하기 위해 새로운 빔 모델 출시 • 4분",
        "5: $239 52주 최고가: $240 $NVDA 주가 목표: $329 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료) >>> 무슨 일이 일어났나요?",
        "엔비디아(NVDA)의 지원을 받는 스타트업인 Reflection AI가 월요일 첫 번째 개방형 모델을 출시했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 34%, $239, $240 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 34%, $239, $240 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "52722d09a6ba1f868c5d",
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
      "headline": "Meta, TikTok and X Push Back Against Tough New British Online Safety Regulations",
      "headlineKo": "Meta, TikTok 및 X는 엄격한 새로운 영국 온라인 안전 규정에 반대합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7553256c6eb859f970d5eb3bf06ef19645f112ba610d5cd71ccf3b7cf1f9e5aa",
        "publishedAt": 1791292796,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta, TikTok 및 X는 엄격한 새로운 영국 온라인 안전 규정에 반대합니다 | TIKR.com General Investing Meta, TikTok 및 X는 영국의 엄격한 새로운 온라인 안전 규정에 반대합니다 Aditya Raghunath • 3분 읽기 검토자: Dav",
        "5: $742 52주 최고가: $780 $META 주가 목표: $795 현재 진행 중: TIKR의 새로운 가치 평가 모델을 사용하여 좋아하는 주식이 얼마나 상승할 수 있는지 알아보세요(무료입니다) >>> 무슨 일이 일어났나요?",
        "Meta(META), TikTok 및 X는 영국의 온라인 안전 규제 기관인 Ofcom을 상대로 반발하고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $742, $780 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, $742, $780 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2366b50b9e8b728e384e",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "QQQ",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500, Nasdaq Hit Records, Power Stocks Rally on Google's Nuclear Deal: Stock Market Today",
      "headlineKo": "S&P 500, 나스닥 히트 기록, Google의 핵 거래에 대한 전력주 랠리: 오늘의 주식 시장",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d854387ea2b54afa3aae5bc2f3ae53045ac16ed0dc767504142c274ece5c100a",
        "publishedAt": 1791292272,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, 나스닥 히트 기록, Google의 핵 거래에 대한 전력주 랠리: 오늘의 주식 시장"
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "cec7206d8bfed1fdf107",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "CEG",
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
      "headline": "Google signs 20-year nuclear deal with Constellation Energy to power AI build-out",
      "headlineKo": "구글, AI 구축 강화 위해 Constellation Energy와 20년 원자력 계약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e88aa16940f3f97f9d1bb71d1f46355aaa9a5b7a04a3eae38841ee8765e70abb",
        "publishedAt": 1791292264,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "구글, AI 구축 강화 위해 Constellation Energy와 20년 원자력 계약 체결"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "7d61e7445dadfe38ea3d",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "3 Overlooked Growth Stocks Powering Every AI Chip Nvidia and AMD Build",
      "headlineKo": "모든 AI 칩을 구동하는 간과된 3가지 성장주 Nvidia 및 AMD 빌드",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a92035033a69cef9fcdc1ab00704e5c4225413d100a0ca1e45f1eee626ba166d",
        "publishedAt": 1791292080,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "모든 AI 칩을 구동하는 간과된 3가지 성장주 Nvidia 및 AMD Build | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Nvidia(NVDA +1.12%) 및 Advanced Micro Devices(AMD +3.7)에 합류",
        "컨센서스 추정에 따르면 두 회사 모두 올해 매출이 각각 약 90%와 45% 증가했습니다.",
        "하지만 이 GPU 경쟁에서 승자와 패자 사이에서 선택할 필요는 없습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 90%, 45%, 0.85% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 90%, 45%, 0.85% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "51fbd3dcc5dadee36e84",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom (AVGO) Eyes Huge AI Revenue Growth, Is The Stock Getting Too Pricey?",
      "headlineKo": "Broadcom(AVGO)은 엄청난 AI 수익 성장을 기대하고 있는데 주가가 너무 비싸지고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=809d901c8baea12c712eaeb23f68588fbc0cca06fd8274e542f3ed5040a46bcd",
        "publishedAt": 1791291950,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom (AVGO) Eyes Huge AI Revenue Growth, Is The Stock Getting Too Pricey?",
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
      "id": "52fe7cd1829d98664e55",
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
      "headline": "Pinterest names Amazon veteran James Dibbo as CFO",
      "headlineKo": "Pinterest, Amazon 베테랑 James Dibbo를 CFO로 임명",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=15a903400ef8f58a14e4b7332ff508038de873d6e65ef951a7590d0ca6c105e6",
        "publishedAt": 1791291915,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Pinterest, Amazon 베테랑 James Dibbo를 CFO로 임명",
        "Dibbo는 Amazon $AMZN에서 Pinterest로 왔고, 가장 최근에는 글로벌 엔터테인먼트, 광고 및 기업 개발을 감독하는 부사장 겸 CFO를 맡았습니다.",
        "그 역할에서 Dibbo는 Amazon Ads, Prime Video, Amazon MGM Studios, Music, Audible 및 Twitch의 재무를 감독했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1%, $1.008 billion, 18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1%, $1.008 billion, 18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2f237982e39caa2034d1",
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
      "headline": "Apple Turned $10,000 Into Nearly $129,000. Can It Do It Again?",
      "headlineKo": "애플은 10,000달러를 거의 129,000달러로 바꿨습니다. 다시 할 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4601bf13afba59305609d20e53ff6163920370fb394bc407ec76b4ad02f9551",
        "publishedAt": 1791291601,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "애플은 10,000달러를 거의 129,000달러로 바꿨습니다.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,837.80 +0.65% Dow Jones 51,571.40 +0.40% Nasdaq 100 31,368.20 +0.76% Russell 2000 2,845.37 −0.30% S&P 500 7,837.80 +0.65% 다우존스 51,571.40 +0.40% 나스닥 100 31,368.20 +0.76% 러셀 2000 2,845.37 −0.",
        "Apple은 지난 10년 동안 적당한 투자를 통해 작은 재산으로 변했지만 시가총액이 5조 달러에 달하면서 수학은 근본적으로 바뀌었습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $129,000., $5 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $129,000., $5 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "20ff61b2ab6fb59faa44",
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
      "headline": "Power Out? Jackery Offers Up to 65% Off 4.5-Star+ Rated Portable Power Stations and Solar Generators for Amazon's Prime Big Deal Days",
      "headlineKo": "전원이 꺼졌나요? Jackery는 Amazon Prime Big Deal Days를 맞아 4.5성급 이상 등급 휴대용 발전소 및 태양광 발전기 최대 65% 할인을 제공합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe0d53f3695209748f9d52182b581264be55031501f3793667a99eefd60ab178",
        "publishedAt": 1791291600,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "전원이 꺼졌나요? Jackery는 Amazon Prime Big Deal Days를 맞아 4.5성급 이상 등급 휴대용 발전소 및 태양광 발전기 최대 65% 할인을 제공합니다.",
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
      "id": "81a0d52e5cebfa2fab89",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Applied Materials and Intel Collaborate to Accelerate Chipmaking Innovations for AI-Driven Computing",
      "headlineKo": "어플라이드 머티어리얼즈와 인텔, AI 기반 컴퓨팅을 위한 칩 제조 혁신 가속화를 위해 협력",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8a655c1feb080a90a0f88856784fb390c4e0a4707bfd075f4051ca0211c5db40",
        "publishedAt": 1791291600,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials and Intel Collaborate to Accelerate Chipmaking Innovations for AI-Driven Computing",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 INTC의 사업과 관련된 'Applied Materials and Intel Collaborate to Accelerate Chipmaking Innovations for AI-Driven Computing' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a5d12609aed8c8aa6781",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "ASML",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ASML vs. Nvidia: Which AI Semiconductor Stock Is a Better Buy in 2026?",
      "headlineKo": "ASML 대 Nvidia: 2026년에는 어느 AI 반도체 주식이 더 나은 매수인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb8967d5822f98a5492de366248d013aff0fe425811a6f0147f719f5f07c3881",
        "publishedAt": 1791291121,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia: 2026년에는 어느 AI 반도체 주식이 더 나은 매수인가요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 인공지능(AI) 붐이 성숙해지면서 투자자들은 AI 칩을 설계하는 회사와 공급하는 회사 중에서 선택할 수 있습니다.",
        "ASML Holding( ASML -1.39% ) 또는 Nvidia( NVDA +0.14% )가 더 나은 플레이인가요?"
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.39%, 0.14%, $1,834.10 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.39%, 0.14%, $1,834.10 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ac6807a52b486ec6f750",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Netlist and Micron Agree $600 Million Patent Licence and Settlement",
      "headlineKo": "Netlist와 Micron, 6억 달러 규모의 특허 라이선스 및 합의에 합의",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c61980235bcca7db2cf0726fa2824b88be294a375078daaf961f7c034a491f13",
        "publishedAt": 1791290850,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Netlist와 Micron은 6억 달러 규모의 특허 라이센스 및 결제 보드에 동의합니다. 인용문: 즐겨찾기 인기 모니터 무버 레벨 2 뉴스 메뉴 보드 주식 상품 외환 암호화폐 라운지 고급 검색 뉴스 모든 회사 뉴스 iHub Mark",
        "시작하기 Netlist와 Micron은 6억 달러 규모의 특허 라이센스 및 합의에 동의합니다. Fiona Craig USOTC:NLST NASDAQ:MU 최신 뉴스 2026년 10월 6일 오전 8:47 © Adobe Stock 이미지 Netlist, Inc.",
        "(USOTC:NLST) 및 Micron Technology, Inc."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $600 Million, $30 Million, $30 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $600 Million, $30 Million, $30 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ddf0b9406c2e6de8a759",
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
      "headline": "AMD CEO Lisa Su plans major AI chip supply ramp in 2027",
      "headlineKo": "AMD CEO Lisa Su는 2027년에 주요 AI 칩 공급을 늘릴 계획입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=85817650821b346de0a4929e22bf090b0962647c7e2b11dc366e04d796683a68",
        "publishedAt": 1791290760,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD CEO Lisa Su는 2027년에 주요 AI 칩 공급을 늘릴 계획입니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "b27541bc900ad334d8b7",
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
      "headline": "Intel’s Biggest Opportunity May Be Its Comeback",
      "headlineKo": "인텔의 가장 큰 기회는 복귀일 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c0efa56e3d607dd4dde43f00db7345c40b5f6cf502428cdba5b6bf8955ffb4d",
        "publishedAt": 1791290710,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔의 가장 큰 기회는 복귀일 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,837.80 +0.65% Dow Jones 51,571.40 +0.40% Nasdaq 100 31,368.20 +0.76% Russell 2000 2,845.37 −0.30% S&P 500 7,837.80 +0.65% 다우존스 51,571.40 +0.40% 나스닥 100 31,368.20 +0.76% 러셀 2000 2,845.37 −0.",
        "어느 쪽이 당신의 땅인지… 작성자 Vandita Jadeja 2026년 10월 6일 오전 8시 45분(ET) 게시 · 3분 읽기 가격 목표 데스크."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $127.72, $120,, 6.43% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $127.72, $120,, 6.43% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ba6c01aec3c2cb8106cb",
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
      "headline": "Apple (AAPL) Trading Above Analyst Targets as Memory Costs Crimp Margin Outlook",
      "headlineKo": "메모리 비용 압착 마진 전망으로 인해 Apple(AAPL) 거래가 분석가 목표를 초과했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=739973eb0516a3691e32c326fd677a89cd62a7b7602bd41e87e2fd17fa5fb43f",
        "publishedAt": 1791290142,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 비용 압착 마진 전망으로 인해 Apple(AAPL) 거래가 애널리스트 목표를 초과했습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,837.80 +0.65% Dow Jones 51,571.40 +0.40% Nasdaq 100 31,368.20 +0.76% Russell 2000 2,845.37 −0.30% S&P 500 7,837.80 +0.65% 다우존스 51,571.40 +0.40% 나스닥 100 31,368.20 +0.76% 러셀 2000 2,845.37 −0.",
        "작성자: Omor Ibne Ehsan 2026년 10월 6일 오전 8시 35분(ET) 게시 · 3분 읽기 𝕏 f ⧉ 눈에 띄는 녹색 황소와 상승 추세의 주식 차트는 투자가에 대한 기사의 초점을 반영하여 Apple 주식의 상당한 성장 가능성을 보여줍니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $332.89,, $328.09, $334.90. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $332.89,, $328.09, $334.90. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7f92dd0c31321614cc4f",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "CEG",
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
      "headline": "Constellation Energy Stock Jumps on 20-Year Power Deal With Google",
      "headlineKo": "Constellation Energy 주식은 Google과의 20년 전력 계약으로 급등합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e469c3660ec999b3be33408e4dd2990d7a41b4aca2cbaa8904319b45d18fe516",
        "publishedAt": 1791289925,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy 주식은 Google과의 20년 전력 계약으로 급등합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "f409b749b05d132890c1",
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
      "headline": "To Make Investors Rich, Nio Will Need to Steal From Tesla's Playbook",
      "headlineKo": "투자자를 부자로 만들기 위해 Nio는 Tesla의 플레이북에서 훔쳐야 할 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=101f0fa606f0638398c44773c7865b40cd0abb960ada38f6b49ce306f5ace34f",
        "publishedAt": 1791288300,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "투자자를 부자로 만들기 위해 Nio는 Tesla의 플레이북에서 훔쳐야 할 것입니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Tesla( TSLA +0.51% ) 및 Nio( NIO -0.44% )는 매우 임프가 하나 있습니다.",
        "두 사람 모두 전기차(EV) 우위를 위한 진정한 전쟁터는 고급 EV의 설계 및 개발뿐만 아니라 기본 인프라 자체에도 있다고 믿습니다.",
        "Nio의 배터리 교환 네트워크는 Tesla의 충전 인프라 및 NACS(북미 충전 표준)와 완전히 다른 게임을 하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $95 million, 30%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $95 million, 30%, 10% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0f10e9ff6cf8912fa79e",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Morgan Stanley: Nvidia, Broadcom shielded from data-center power crunch",
      "headlineKo": "Morgan Stanley: Nvidia, Broadcom은 데이터 센터의 전력 위기로부터 보호됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=538600e1068dae3bf7f4e7826a4f0f596091c3bf73b5ca2fae73d02923f6df72",
        "publishedAt": 1791288194,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley: Nvidia, Broadcom은 데이터 센터 전력 위기로부터 보호됨 클라우드 컴퓨팅 Morgan Stanley는 Nvidia와 Broadcom이 데이터 센터 전력 위기로부터 보호받고 있다고 말합니다. 메모리, 광학 및 P 제조업체를 포함한 보조 칩 공급업체",
        "로이터에 따르면 AI 구축 둔화로 인해 메모리, 광학 및 관련 칩 부품 공급업체에 주문 차질이 발생할 수 있다고 경고했다.",
        "지난달 보고서에서 은행은 미국이 직면한 순전력 부족을 지적했다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 34% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AVGO에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 34% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f16c7fa4f337d74197d4",
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
      "headline": "Netlist and Micron Enter Patent License and Settlement Agreements",
      "headlineKo": "Netlist와 Micron, 특허 라이센스 및 합의 계약 체결",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=05077cd5eb6d3e44566f5c58cd408b5eb22d18a92aa2d287fb2bddd33fe7de70",
        "publishedAt": 1791288000,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Netlist와 Micron, 특허 라이센스 및 합의 계약 체결"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "cb6a4f017bd7ce10abbc",
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
      "headline": "22%: The One Number That Matters Most for Apple (AAPL) Shareholders",
      "headlineKo": "22%: Apple(AAPL) 주주에게 가장 중요한 숫자",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=335897208476f1904381823ddc2b672d59e451c9f59bd4da898e42dd370fdd78",
        "publishedAt": 1791285600,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 공급 부족과 가격 급등이 iPhone 18 제조원가를 높일 수 있다는 내용입니다.",
        "기사 본문에서 언급된 수치: 22%, 22.4%, 0.27 %, $ 0.91, $ 333.80, $4.9, $ 330.62, $ 334.38.",
        "애플의 공식 판매가·출하량 확정치가 아니라 외부 전망과 업계 추정이 섞인 뉴스입니다."
      ],
      "marketInterpretation": [
        "메모리 가격 상승이 반도체 업체 실적을 넘어 완제품 가격으로 전가되는지 확인하는 신호입니다.",
        "애플이 가격을 올려도 판매량을 유지하면 가격 결정력을 확인하지만, 판매량이 줄면 매출 성장과 교체주기에 부담입니다.",
        "메모리 업체는 스마트폰 고객까지 가격을 받아들이는 경우 메모리 가격 강세가 더 오래갈 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 '22%: The One Number That Matters Most for Apple (AAPL) Shareholders' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f0b3bb0872cf4065626c",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "TSM",
      "relatedTickers": [
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
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Barclays Maintains Overweight on Taiwan Semiconductor, Raises Price Target to $665",
      "headlineKo": "Barclays, 대만 반도체에 대한 비중확대 유지, 목표 가격을 665달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4dba9ae9d0ba92dc958283b4f047e9ea986e1407c5e8e05fae767bda9b0c3fcf",
        "publishedAt": 1791282983,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Barclays Maintains Overweight on Taiwan Semiconductor, Raises Price Target to $665",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "2e5be7266bcfdfcdf3cc",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Here's How Much $100 Invested In Salesforce 20 Years Ago Would Be Worth Today",
      "headlineKo": "20년 전 Salesforce에 투자한 100달러의 현재 가치는 다음과 같습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=fe8a58c2fe1922d2768a2231e1536b0ae944ffafb24bb8cf1a84dffb2044498a",
        "publishedAt": 1791280834,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "20년 전 Salesforce에 투자한 100달러의 현재 가치는 다음과 같습니다. - Salesforce(NYSE:CRM) - Benzinga SPY 778.72 +0.50% QQQ 760.22 +0.53% BTC/USD 86,291.06 +0.63% DIA 514.44 +0.45% GLD 380.94 +0.37% TLT 77.18 +0.08% US 로그인 다시",
        "현재 Salesforce의 시가총액은 1,879억 4천만 달러입니다.",
        "CRM에서 100달러 구매: 투자자가 20년 전에 CRM 주식 100달러를 구매했다면 이 글을 쓰는 시점의 CRM 가격 228.36달러를 기준으로 현재 그 가치는 2,267.16달러가 될 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $100, 0.50%, 0.53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "CRM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "CRM에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $100, 0.50%, 0.53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "10a0d86c02b8fb759279",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "GOOGL",
        "NVDA",
        "PLTR",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia, Palantir, and Alphabet Are Sending Shockwaves Through Wall Street With This $17.5 Billion Warning",
      "headlineKo": "Nvidia, Palantir 및 Alphabet은 175억 달러 규모의 경고로 월스트리트에 충격파를 보내고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a46b94a836b0723950efeed8a6a69eca0b6c93fe192c10cd4df3b4f033aee2e5",
        "publishedAt": 1791278761,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia, Palantir 및 Alphabet은 175억 달러 규모의 경고로 월스트리트에 충격파를 보내고 있습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 30년 전, 광고",
        "오늘날 인공지능(AI) 인프라 구축은 동일한 열정을 불러일으키고 수조 달러 규모의 기회를 창출하고 있습니다.",
        "수십 개의 기술 중심 기업이 AI 혁명의 혜택을 받고 있지만 Nvidia(NVDA +1.46%), Palantir Technologies(PLTR +1.54%) 및 Google 모회사 Alphabet(GOOGL +0.38%)(GOOG +0.20%)이 이 게임의 최전선에 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.46%, 1.54%, 0.38% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.46%, 1.54%, 0.38% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ef18a9c38901a02cf117",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "INTC",
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
      "headline": "INTC, AMD, MU, SNDK, SOXX: Chips, Memory Stocks Slip Premarket After Sharp October Rally",
      "headlineKo": "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 급격한 10월 랠리 이후 시판 전 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa475f9363e423a2f98742f7531b2d0eb385a9a9efddf15069bd64880d0c5bd8",
        "publishedAt": 1791277971,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 10월 랠리 이후 프리마켓 하락 AI 에이전트 동향 뉴스 수익 전체 DIA 0.62% SPY 0.78% QQQ 0.84% 추세 NVAX 9.08% NLST 12.39% MRVL 6.87% APLD 2.67% AVGO 4.11% MRNA 5.68% XBI 2.55%",
        "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 10월 급등 이후 시장 전 하락 노키아 CEO 저스틴 호타드(Justin Hotard)는 공급 제약이 제거되면 고객이 데이터 센터를 대략 두 배 더 빠르게 구축할 것이라고 말했습니다. 이는 AI Infr에 대한 낙관적인 신호입니다.",
        "거래자들이 2026년 8월 5일 오전 거래 중에 뉴욕 증권 거래소 바닥에서 일하고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.62%, 0.78%, 0.84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.62%, 0.78%, 0.84% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "32676b5139be9522ea2a",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "AMAT",
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
      "headline": "Applied Materials, Intel Partnering Over Development Of Chipmaking Innovations For Transistors, Interconnects, Packing Technologies",
      "headlineKo": "어플라이드 머티어리얼즈와 인텔, 트랜지스터, 인터커넥트, 패키징 기술을 위한 칩 제조 혁신 개발을 위해 협력",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b80361cecafd3b0980c83f0f7e48bfc62790b9466f9fce5b1721ac5952dcce61",
        "publishedAt": 1791277324,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티어리얼즈와 인텔, 트랜지스터, 인터커넥트, 패키징 기술을 위한 칩 제조 혁신 개발을 위해 협력"
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
      "id": "5901ecfacc1e875983ce",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Mizuho Maintains Outperform on SanDisk, Raises Price Target to $2050",
      "headlineKo": "Mizuho는 SanDisk에서 우수한 성과를 유지하고 목표 가격을 $ 2050로 높였습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6c9b662d29ffd6d29e90438a0ecc4cadfb425896c5e77ea53a953f5724d4f6ca",
        "publishedAt": 1791277151,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Mizuho Maintains Outperform on SanDisk, Raises Price Target to $2050",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SNDK에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "3c9a1f14ac30af183f35",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Mizuho Maintains Neutral on Intel, Raises Price Target to $114",
      "headlineKo": "미즈호, 인텔에 대해 중립 유지, 목표 가격 114달러로 인상",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=a1d503b345ebc8d566f65e63c0cb9bb56a7380cbb98e68077d8aa71753f3c10d",
        "publishedAt": 1791276861,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "미즈호, 인텔에 대해 중립 유지, 목표 가격 114달러로 인상"
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
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "9fcdbe782dff7b321167",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "AMD",
        "AMZN",
        "CEG",
        "INTC",
        "NVDA",
        "ORCL",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Are Nasdaq, Dow Futures Rising Premarket? SPCX, NVDA, CEG, AMD, ORCL, NOK In Focus",
      "headlineKo": "나스닥, 다우 선물이 프리마켓 상승하는 이유는 무엇입니까? SPCX, NVDA, CEG, AMD, ORCL, NOK 초점",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b2690aaa98e03f5a2f2511a4b46b97fd79dfffb05f92ff936c81ada02f72b1d",
        "publishedAt": 1791275977,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nasdaq, Dow Futures가 프리마켓에서 상승하는 이유는 무엇입니까?",
        "SPCX, NVDA, CEG, AMD, ORCL, NOK In Focus AI 에이전트 동향 뉴스 수입 모든 DIA 0.53% 스파이 0.66% QQQ 0.51% 동향 SPCX 0.37% AMZN 2.23% APLD 3.00% NLST 17.88% PENG 11.51% ZETA 2.62% WDC 6.65% STZ 2.48% INTC 2.88% NVDA 0.58% 홈 뉴스 마크",
        "SPCX, NVDA, CEG, AMD, ORCL, NOK In Focus 광고 | 광고 제거."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.53%, 0.66%, 0.51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.53%, 0.66%, 0.51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d795d01943ae8b4c9bcd",
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
      "headline": "Stock Market Today: S&P 500, Dow Jones, Nasdaq 100 Futures Gain as Scott Bessent Doubles Down on Iran Pressure— OPCH, PCVX, STZ in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: Scott Bessent가 이란 압력으로 두 배로 하락함에 따라 S&P 500, Dow Jones, Nasdaq 100 선물 상승 - OPCH, PCVX, STZ 초점(업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=660c79eeb4ca5d4ae0b1a72fc5c84dcb35b520893d43ae463a5ca43ee6176e34",
        "publishedAt": 1791275292,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 주식 시장: Scott Bessent가 이란 압력을 두 배로 높이면서 S&P 500, 다우 존스 선물 상승 - OPCH, - Benzinga SPY 776.52 +0.22% QQQ 758.07 BTC/USD 86,037.30 +0.34% DIA 514.85 +0.54% GLD 380.78 +0.32% TLT 77.51 +0.52% 미국 로그인 레지스",
        "주식 선물은 화요일에 높게 거래되었으며 다우존스, S&P 500, 나스닥 100과 연계된 선물은 월요일 주요 평균 지수가 상승한 후 상승세를 보였습니다.",
        "이란의 경제 위기는 20억 달러의 석유 수익 손실과 관련된 혐의로 모센 파크네자드 석유장관이 사임하면서 더욱 고조되었고 이란 리알은 미국의 압박으로 사상 최저치를 기록했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.22%, 0.34%, 0.54% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.22%, 0.34%, 0.54% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "96fee52d7265bf6f8012",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "GLJ Research Initiates Coverage On Vertiv Holdings with Sell Rating, Announces Price Target of $188",
      "headlineKo": "GLJ Research, 판매 등급으로 Vertiv Holdings에 대한 보도 개시, 목표 가격 $188 발표",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0f02c3a24ceae03708413ea4ddbec6f7ca4ac0543760574eb2139c04d2b0507e",
        "publishedAt": 1791274858,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GLJ Research Initiates Coverage On Vertiv Holdings with Sell Rating, Announces Price Target of $188",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VRT에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "3f1c2827c47d2df489ee",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "NVDA",
        "PLTR",
        "SPY",
        "VRT"
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
      "headline": "The Overlooked AI Stock Poised to Outperform Nvidia and Palantir",
      "headlineKo": "간과된 AI 주식은 Nvidia와 Palantir를 능가할 준비가 되어 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d391a88a99329ad4bbdb966d4e2921aabe0c88baae31f89d2ccb7824c434058",
        "publishedAt": 1791273300,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "간과된 AI 주식은 Nvidia와 Palantir를 능가할 준비가 되어 있음 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia(NVDA +1.46%)의 그래픽 처리 장치(GPU)가",
        "그러나 여기에서 성장할 가능성이 있는 투자로 인해 두 회사 모두 액체 냉각 전문 기업인 Vertiv(VRT -0.92%)에 비해 미약할 수 있습니다.",
        "AI 인프라의 필수 요건이 된 액체 냉각 액체 냉각은 AI 데이터센터의 필수 요소가 되었습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.92%, 0.92 %, $ 251.28 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.92%, 0.92 %, $ 251.28 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5723ee76fb13676d6dd2",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "UK Financial Conduct Authority Says It Has Not Renewed A Short-Term Palantir Contract Relating To Tech And Financial Crime",
      "headlineKo": "영국 금융 행위 당국은 기술 및 금융 범죄와 관련된 단기 Palantir 계약을 갱신하지 않았다고 밝혔습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=294f067689ca9e9eca4a001dd9cee9178f3fb7f89af0653c1aed159d98a789fe",
        "publishedAt": 1791272413,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "영국 금융 행위 당국은 기술 및 금융 범죄와 관련된 단기 Palantir 계약을 갱신하지 않았다고 밝혔습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "71e50214ac3b3c8a7386",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Vertiv's Q3 Earnings Setup Unlocks Solid Upside (Preview)",
      "headlineKo": "Vertiv의 3분기 수익 설정으로 확실한 상승 여력 확보(미리보기)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9cc8e34bf8f8c838481b59ec6acb7bee13cca0a48f452d6f0236db22a87871d3",
        "publishedAt": 1791272400,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vertiv's Q3 Earnings Setup Unlocks Solid Upside (Preview)",
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
      "id": "d19e1768b087bf230508",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Elon Musk's Trump Admin 'Return' Puts Tesla, SpaceX in Focus: Analyst Says TSLA Faces 'Key Test' — Prediction Market Weighs in",
      "headlineKo": "Elon Musk의 Trump 관리자 'Return'은 Tesla, SpaceX에 초점을 맞췄습니다. 분석가는 TSLA가 '핵심 테스트'에 직면했다고 말합니다 — 예측 시장이 무게를 두고 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cffef0e77e18bd35181d69086ed3a5c85c9e0d6e173535a2fa197921a5ae4406",
        "publishedAt": 1791272018,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk의 트럼프 관리자 '반환'은 Tesla, SpaceX에 초점을 맞춥니다: 분석가는 TSLA가 '핵심 테스트'에 직면했다고 말합니다 — Predic - Benzinga SPY 774.94 QQQ 756.43 BTC/USD 85,406.90 −0.40% DIA 512.59 GLD 379.03 TLT 77.13 US 벤징가 프렘",
        "(NASDAQ: TSLA ) 및 Space Exploration Technologies Corp.",
        "머스크가 트럼프 행정부로 돌아옴 마르티네즈는 머스크가 국방부 프로젝트 자오선의 공동 책임자로 임명된 것은 트럼프 행정부의 공식 자문 역할로의 \"복귀\"를 의미한다고 말했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.40%, 8%, $400 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.40%, 8%, $400 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7bb117aa0f6a547d052e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "$10,000 in Marvell Stock a Decade Ago Is Worth About $206,000 Now. Repeating That Would Take 35% Annual Earnings Growth.",
      "headlineKo": "10년 전 Marvell 주식의 10,000달러 가치는 현재 약 206,000달러의 가치가 있습니다. 이를 반복하려면 연간 35%의 수익 성장이 필요합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bb20c72bb1688fd14ed76d5d0e8d6b7cd95a85f329a03c414f60441a452c7a7f",
        "publishedAt": 1791268981,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10년 전 Marvell 주식의 10,000달러 가치는 현재 약 206,000달러의 가치가 있습니다.",
        "이를 반복하려면 연간 35%의 수익 성장이 필요합니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Marvell Technology( MRVL +7.21% )는 10월 13일 주당 13.17달러로 마감했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $206,000, 35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $206,000, 35% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "43e2fa516dd8ce15c247",
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
        "level": "low",
        "score": 42,
        "kind": "reported",
        "reason": "속보·의견 성격이 강해 원문 재확인 필요"
      },
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Surf Air Mobility Signs Definitive Agreement With Clipper Aviation For OperatorOS, Surf Air Mobility's SurfOS Flight Operations Software For Part 135 Operators Powered By Palantir",
      "headlineKo": "Surf Air Mobility는 Palantir가 제공하는 Part 135 운영자를 위한 Surf Air Mobility의 SurfOS 비행 운영 소프트웨어인 OperatorOS를 위해 Clipper Aviation과 최종 계약을 체결했습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=15853cb489b3a69aeb408b2e9d3afc8c27c77056bde4ba8b8b268353c370adff",
        "publishedAt": 1791268452,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Surf Air Mobility는 Palantir가 제공하는 Part 135 운영자를 위한 Surf Air Mobility의 SurfOS 비행 운영 소프트웨어인 OperatorOS를 위해 Clipper Aviation과 최종 계약을 체결했습니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "71c00ca8a49b9fe91cfd",
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
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Does Wall Street Think Gemini 4 Argon Stacks Up Against The Competition?",
      "headlineKo": "월스트리트는 Gemini 4 Argon이 경쟁에서 우위에 있다고 생각합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=941049a213b51db90c077952a6eb4ac40218ebb7799b3b42e163280b069fdab3",
        "publishedAt": 1791264610,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트는 Gemini 4 Argon이 경쟁에서 우위에 있다고 생각합니까?",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,789.60 +0.03% Dow Jones 51,374.80 +0.02% Nasdaq 100 31,143.60 +0.03% Russell 2000 2,852.57 −0.05% S&P 500 7,789.60 +0.03% 다우존스 51,374.80 +0.02% 나스닥 100 31,143.60 +0.03% 러셀 2000 2,852.57 −0.",
        "AI Investor Podcast의 최근 에피소드에서 Eric Bleeker와 Austin Smith는 최근 출시된 Google의 Gemini 4 Argon을 분석하고 코딩과 같은 분야에서 경쟁 제품과 비교하여 어떻게 비교되는지 조사했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $500, $500,000, $2.9 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $500, $500,000, $2.9 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8a92ddf6e00a1c97a798",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "CEG",
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
      "headline": "Google, Constellation near $1 billion-plus nuclear power deal, Bloomberg reports",
      "headlineKo": "블룸버그는 구글과 컨스텔레이션이 10억 달러 규모의 원자력 발전 계약을 앞두고 있다고 보도했다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da211f6c9330712cdb2b9b3968d9c9c3ca14c85d84e103756d799ea40957b003",
        "publishedAt": 1791263815,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google, Constellation near $1 billion-plus nuclear power deal, Bloomberg reports",
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
      "id": "56da942bcc6e3d805c5e",
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
      "headline": "Baird Initiates Coverage On Modine Manufacturing with Outperform Rating, Announces Price Target of $300",
      "headlineKo": "Baird, 우수한 평가를 받은 Modine 제조에 대한 보도 개시, $300의 목표 가격 발표",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=247b4bb19449b5a27ad56c3fa4f401390ad183755b5840f45725840c638ba272",
        "publishedAt": 1791263518,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Baird Initiates Coverage On Modine Manufacturing with Outperform Rating, Announces Price Target of $300",
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
      "id": "59b510ed0801badcf86b",
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
      "headline": "Oracle Layoffs Returning In December? Buzz About Online Email Points To Wider Voluntary Exit Offer, Researcher Says",
      "headlineKo": "오라클 정리해고가 12월에 돌아오나요? 연구원은 온라인 이메일에 대한 소문이 더 넓은 자발적 종료 제안을 가리킨다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e55823492b87dd9b7621ac0090f423df02fdc823aeaaaea7c4d6ba86fa58fdf6",
        "publishedAt": 1791262943,
        "collectedAt": 1791437217.4175987
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
        "이 기사는 ORCL의 사업과 관련된 'Oracle Layoffs Returning In December? Buzz About Online Email Points To Wider Voluntary Exit Offer, Researcher Says' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9d1079a5e3775f8543f7",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Sandisk: Customer Money Is Keeping Pace With The Contract Boom",
      "headlineKo": "Sandisk: 고객 자금이 계약 붐을 따라가고 있습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8028cecc9c19b3e0ba565f7bf9d1e252d183f6ef91dc6bfc8e9ae564a321aeff",
        "publishedAt": 1791261646,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: Customer Money Is Keeping Pace With The Contract Boom",
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
      "id": "51055ef8bed01e64776c",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "AVGO",
        "MRVL",
        "NVDA",
        "QQQ",
        "SPY",
        "TSM",
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
      "headline": "Why Did NVDA, TSM, WBD Stocks Hit 52-Week Highs Today?",
      "headlineKo": "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7035d6f9bfb2b24033b85023fb3a1c8827b1f03fc5c6f4f1eb02cc7d64be976d",
        "publishedAt": 1791257308,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
        "AI 에이전트 동향 뉴스 수입 전체 DIA 0.59% SPY 0.74% QQQ 0.81% 동향 NVAX 9.00% NLST 12.92% MRVL 6.66% APLD 2.55% AVGO 4.01% MRNA 5.33% XBI 2.45% ASTS 8.49% WDC 5.98% VST 9.51% 홈 뉴스 시장 주식 NVDA, TSM, WBD 주식이 상승한 이유",
        "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.59%, 0.74%, 0.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.59%, 0.74%, 0.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "목표주가 산식의 EPS",
        "적용 PER 변화",
        "회사 공식 가이던스"
      ]
    },
    {
      "id": "74e202202d7ac74ea32a",
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
      "headline": "Why Nebius Is Getting The Better End Of The Deal From Palantir",
      "headlineKo": "Nebius가 Palantir로부터 거래를 더 잘 마무리하는 이유",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e5bb404a7c112bef5851774463149d306583195b2142a9af375f993e21f7afda",
        "publishedAt": 1791256633,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Nebius Is Getting The Better End Of The Deal From Palantir",
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
      "id": "8608ee11a93fd6507210",
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
      "headline": "MSFT Stock Gains: Melius Research Calls Microsoft ‘Adults In Charge’ Of AI, Upgrades To ‘Buy’",
      "headlineKo": "MSFT 주가 상승: Melius Research, Microsoft를 AI 담당 '성인'으로 부르고 '구매'로 업그레이드",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=880f2f2882c24081a6ebc2d06035da5d73e0bf7a1e03eee24121b2daaa365c0d",
        "publishedAt": 1791251909,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "MSFT 주가 상승: Melius Research는 Microsoft의 AI '성인'을 호출하고 AI 에이전트 '구매'로 업그레이드 동향 뉴스 수익 전체 DIA 0.47% SPY 0.20% QQQ 0.15% 추세 SPCX 0.86% NVAX 0.46% GRRR 1.39% KORU 3.69% CLSK 0.16% FISV 0.13% ASTS",
        "MSFT 주가 상승: Melius Research는 Microsoft를 AI '성인'으로 부르고 '구매'로 업그레이드 분석가들은 AI 위험, Azure 성장 및 기업 채택이 장기적인 AI 승자로서의 입지를 강화함에 따라 Microsoft를 낙관적으로 평가합니다.",
        "마이크로소프트(Microsoft) CEO 사티아 나델라(Satya Nadella)가 2026년 9월 29일 워싱턴 DC의 아이젠하워 이그제큐티브 오피스 빌딩에 도착합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.47%, 0.20%, 0.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.47%, 0.20%, 0.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "87c1338c0b4ca4e42eb8",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Is CEG Stock Surging More Than 4% In Overnight Trading?",
      "headlineKo": "CEG 주식이 익일 거래에서 4% 이상 급등하는 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ef4e323775eb29a0a05a5563df83a2a0e69e3f19887e2a80333aadd72ee4ed9",
        "publishedAt": 1791251652,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "CEG 주식이 익일 거래에서 4% 이상 급등하는 이유는 무엇입니까?",
        "AI 에이전트 동향 뉴스 수익 전체 DIA 0.44% SPY 0.18% QQQ 0.16% Trending SPCX 0.94% NVAX 0.16% IBIT 0.18% TEM 1.11% ASTS 0.63% CLSK 0.16% FISV 0.13% CMG 0.19% PANW 0.72% ZBCN 2.37% 홈 뉴스 시장 주식 CEG 주식이 더 많이 급등하는 이유",
        "CEG 주식이 익일 거래에서 4% 이상 급등하는 이유는 무엇입니까?"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 0.44%, 0.18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, 0.44%, 0.18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5696afeb82bff02403db",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "TSM",
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
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia vs. Taiwan Semiconductor Manufacturing: Which Technology Stock Is a Better Buy in 2026?",
      "headlineKo": "Nvidia vs. Taiwan Semiconductor Manufacturing: 2026년에는 어떤 기술 주식을 매수하는 것이 더 낫습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c457f426c0c1dd3ca206841b88bbc4fcdb3237318871a4da216a6e0f18e13700",
        "publishedAt": 1791245034,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "대만 반도체 제조업: 2026년에는 어떤 기술주를 매수하는 것이 더 나을까요?",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% The Motley Fool에 합류하세요. 세계에서 가장 유명한 칩 설계자가 실제로 실리콘을 만드는 거대 기업을 계속해서 능가할 수 있을까요?",
        "Nvidia(NVDA +2.12%)와 Taiwan Semiconductor Manufacturing(TSM +2.75%) 중에서 선택하려면 인공 지능 시대에서 두 회사의 고유한 역할을 이해해야 합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.12%, 2.75%, 22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.12%, 2.75%, 22% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6340b9b09fe6b53173fc",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "VST",
      "relatedTickers": [
        "AVGO",
        "MRVL",
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
      "headline": "VST Stock Adds 4%: US Department Of Energy Confirms $4.2B Nuclear Deal With Vistra",
      "headlineKo": "VST 주식 4% 추가: 미국 에너지부, Vistra와 42억 달러 규모의 원자력 계약 확인",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9dc43a244ecf0aafddc4a3c3429b8ba9e0dccdacb586c760be593e4bbb3c5b1d",
        "publishedAt": 1791243119,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "VST 주식 4% 추가: 미국 에너지부, Vistra AI 에이전트와 42억 달러 규모의 핵 계약 확인 동향 뉴스 수익 전체 DIA 0.59% SPY 0.76% QQQ 0.86% 추세 NVAX 8.60% MRVL 7.67% NLST 12.07% APLD 2.69% AVGO 4.11% XBI 2.33% VST 9.60% mRNA 5",
        "VST 주식 4% 추가: 미국 에너지부, Vistra와 42억 달러 규모의 원자력 계약 확인",
        "에너지부는 펜실베니아와 오하이오에 있는 원자력 발전소의 용량을 확장하고 운영 수명을 연장하기 위한 조건부 42억 달러 대출 약속을 발표했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, $4.2, 0.59% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, $4.2, 0.59% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "33316210dd5d3bf8f4b5",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "GOOGL",
        "META",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta And Microsoft Reportedly Trim Anthropic Reliance as Internal AI Tools Take Center Stage",
      "headlineKo": "Meta와 Microsoft는 내부 AI 도구가 중심이 되면서 인류 의존도를 줄인 것으로 알려졌습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2322b057b1e95a37e3954f4fcd0023670bea8babd04f90afba56d1bac65dbf82",
        "publishedAt": 1791241572,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta와 Microsoft는 내부 AI 도구로 인류 의존도를 줄인 것으로 알려졌습니다. AI 에이전트 Trending News Earnings All DIA 0.47% SPY 0.19% QQQ 0.15% Trending SPCX 0.82% NVAX GRRR 1.39% KORU 3.77% CLSK 0.54% FISV 0.13% ASTS 0.62% A",
        "Meta와 Microsoft는 내부 AI 도구가 중심이 되면서 인류에 대한 의존도를 줄인 것으로 보고되었습니다. Meta Platform과 Microsoft는 비용 상승을 통제하기 위해 내부 직원이 Anthropic의 Claude AI 모델을 사용하는 것을 적극적으로 억제하고 있습니다.",
        "2024년 11월 21일 미국 리노의 스마트폰 화면에 Google Gemini, ChatGPT, Microsoft Copilot, Claude by Anthropic, Perplexity, Bing 앱의 로고가 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.47%, 0.19%, 0.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.47%, 0.19%, 0.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "77b9f16834cb0d9c2db9",
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
      "headline": "Here's What $10,000 in Sandisk Stock Could Be Worth if Memory Demand Holds Through 2030",
      "headlineKo": "메모리 수요가 2030년까지 유지된다면 Sandisk 주식의 10,000달러 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd8e7c904ebcd38461a7f1cb6abee974bb641ffb1ff2346a56dd7193b826a37e",
        "publishedAt": 1791239700,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메모리 수요가 2030년까지 유지된다면 Sandisk 주식의 10,000달러 가치는 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool Sandisk( SNDK -0.92% )에 합류하세요.",
        "올해 들어 600% 이상 상승해 S&P 500에서 가장 좋은 성과를 내는 주식이 되었습니다.",
        "메모리 칩 생산 능력의 거의 모든 부분을 차지하는 AI 구축의 힘 덕분에 놀라운 한 해를 보냈습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, 8 times, 20 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, 8 times, 20 times — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5d6bd0a3faf782acd42a",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "QQQ",
      "relatedTickers": [
        "NVDA",
        "QCOM",
        "QQQ",
        "SPY",
        "TSLA"
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
      "headline": "Nasdaq 100 Hits Record Highs As Investors Shrug Off Pressure From Soaring Yields — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
      "headlineKo": "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b05235329873b3a6aefc1263a0519dcf558fad2478525d7f31f7e0d1584bf58",
        "publishedAt": 1791238172,
        "collectedAt": 1791439604.5377052
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압력을 무시하면서 사상 최고치를 기록했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus AI 에이전트 동향 뉴스 수익 전체 DIA 0.38% SPY 0.18% QQQ 0.31% 추세 SPCX 1.31% APLD 2.39% NVAX 0.95% SNOW 2.35%",
        "나스닥 100 지수는 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다. - NVDA, SPCX, CRML, TSLA, QCOM In Focus ISM 보고서에 따르면 9월 서비스 구매 관리자 지수(Purchasing Managers' Index)는 54.9%를 기록했습니다.",
        "2026년 3월 24일 뉴욕 증권거래소(NYSE) 개장 벨에서 거래자가 일하고 있다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.18%, 0.31% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.38%, 0.18%, 0.31% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "387f143f8482764cb832",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "MRVL",
        "NVDA",
        "QCOM",
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
      "headline": "Nasdaq 100 Hits Record Highs As Investors Shrug Off Pressure From Soaring Yields — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
      "headlineKo": "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b05235329873b3a6aefc1263a0519dcf558fad2478525d7f31f7e0d1584bf58",
        "publishedAt": 1791238172,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압력을 무시하면서 사상 최고치를 기록했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus AI 에이전트 동향 뉴스 수익 전체 DIA 0.59% SPY 0.74% QQQ 0.81% 추세 NVAX 9.00% NLST 13.10% MRVL 6.62% APLD 2.51%",
        "나스닥 100 지수는 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다. - NVDA, SPCX, CRML, TSLA, QCOM In Focus ISM 보고서에 따르면 9월 서비스 구매 관리자 지수(Purchasing Managers' Index)는 54.9%를 기록했습니다.",
        "2026년 3월 24일 뉴욕 증권거래소(NYSE) 개장 벨에서 거래자가 일하고 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $100, 0.5%, 0.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $100, 0.5%, 0.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d4047d6c7b75e2616820",
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
      "headline": "Elon Musk Agrees Tesla's Early Custom AI Chit Bet May be More Important Than Ever, Backs TSLA Engineer's Warning: ‘Current Compute Shortage Is Only the Tip of the Iceberg’",
      "headlineKo": "Elon Musk는 Tesla의 초기 맞춤형 AI Chit Bet이 그 어느 때보다 중요할 수 있다는 데 동의하고 TSLA 엔지니어의 경고를 지지합니다: '현재의 컴퓨팅 부족은 빙산의 일각에 불과합니다'",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e3cc89cee51d5790561b10f32ebf23ec12e9e7563eb5b4920b19149499431a8",
        "publishedAt": 1791237605,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk는 Tesla의 초기 맞춤형 AI Chit Bet이 그 어느 때보다 중요할 수 있다는 데 동의하고 TSLA 엔지니어의 경고를 지지합니다: '현재의 컴퓨팅 부족은 빙산의 일각에 불과합니다'"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "07ca49a0c2939af401dc",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Elon Musk Confirmed Terafab Talks With TSMC. Intel Has Been Its Only Named Chip Partner.",
      "headlineKo": "Elon Musk는 TSMC와 Terafab 대화를 확인했습니다. 인텔은 유일한 칩 파트너로 선정되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa7639a3c3a678974d5c11023c41de02bbca0849f0cd6e88e4114867505ad50e",
        "publishedAt": 1791237421,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Elon Musk는 TSMC와 Terafab 대화를 확인했습니다.",
        "인텔은 유일한 칩 파트너로 선정되었습니다.",
        "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 6개월 동안 인텔( INTC -2.63% )은 칩 제조 프로젝트 Elo인 Terafab의 파트너로 지명된 유일한 칩 제조업체였습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.75%, 2%, $117. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.75%, 2%, $117. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b6f7da99028f0dfc0bb3",
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
      "headline": "Wall Street tests lender appetite with $60 billion Broadcom-Anthropic deal - FT",
      "headlineKo": "월스트리트, 600억 달러 규모의 Broadcom-Anthropic 거래로 대출 기관의 선호도 테스트 - FT",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9767c1ce7486f49d389c61175a1b19215ba5e905cd954d700da4629eee67a564",
        "publishedAt": 1791236825,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wall Street tests lender appetite with $60 billion Broadcom-Anthropic deal - FT",
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
      "id": "20a9e2763c70f665e8b5",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Amazon, LA Olympics Organizer Take Over 39-Acre Site Formerly Home To Forever 21",
      "headlineKo": "Amazon, LA 올림픽 주최측과 이전에 Forever 21의 본거지였던 39에이커 부지 인수",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ded1771146b99587764e9a35e41c6001401695cfe0df0cda6ac85326d5d558b",
        "publishedAt": 1791236546,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon과 LA 올림픽 주최측, 이전에 Forever 21의 본거지였던 39에이커 부지 인수 Atlanta Atlanta Austin - San-Antonio Austin - San-Antonio Boston Boston Boston Charlotte Chicago Chicago Chicago Dallas-Fort Worth Dallas Data Center Data Center De",
        "뉴스 Los Angeles Industrial Bisnow/Bianca Barragán 링컨 하이츠 미션 로드에 위치한 이전 포에버 21 본사 가장 최근에 패스트 패션 본사가 들어섰던 링컨 하이츠 미션 로드 3930에 위치한 39에이커 규모의 캠퍼스",
        "이 건물의 3개 건물 중 1개는 2028년 하계 올림픽 주최측인 LA28에 임대되었으며, 나머지 2개는 전자상거래 거대 기업인 Amazon에 매각되었습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $9.52, $146.2, $120 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $9.52, $146.2, $120 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7f073ea8674ec0402a51",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "A New ETF Is Betting the S&P 500 Hits 10,000 and Almost Nobody Is Buying It",
      "headlineKo": "새로운 ETF는 S&P 500이 10,000을 달성할 것으로 예상하고 있으며 거의 ​​누구도 이를 사지 않습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ef44a427e2e0850341e403ca46d9e3649fdee0fedef88bdece6e7d63a1607e2",
        "publishedAt": 1791235025,
        "collectedAt": 1791437217.4175987
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "새로운 ETF는 S&P 500이 10,000을 달성할 것으로 예상하고 있으며 거의 ​​누구도 이를 사지 않습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,798.60 +0.14% Dow Jones 51,576.80 +0.41% Nasdaq 100 31,161.20 +0.09% Russell 2000 2,858.07 +0.15% S&P 500 7,798.60 +0.14% 다우존스 51,576.80 +0.41% 나스닥 100 31,161.20 +0.09% 러셀 2000 2,858.07 +0.",
        "이 펀드에는 전성기 Bloomberg 패널과 저명한 Invesco 임원이 함께 참여했지만 투자자들은 이를 거의 대접하지 않습니다. 작성자: Jake FitzGerald 2026년 10월 5일 오후 5시 17분(ET) 게시 · 3분 읽기 The ETF Examiner 데스크."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.14%, 0.41%, 0.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "SPY에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 0.14%, 0.41%, 0.09% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
    }
  ],
  "byTicker": {
    "ANET": [
      "dcefc390a109fda1eb13",
      "d2d07c3fd22a911f5b2b",
      "94ede47ff04d2635d995"
    ],
    "QQQ": [
      "dcefc390a109fda1eb13",
      "7ca87bb4126792c8e111",
      "71e017deb052339fbb62",
      "111c05b2eca8bbd4484a",
      "4c2b8bde80226eed717c",
      "8c682677fccf26451302",
      "94c488c0c617ade02d48",
      "062490ec287877913a16",
      "b6559c29865c21d298fd",
      "f49070de3cb5c22ba851",
      "d00950a5e4c56b9cf167",
      "9b50587b7bb9954aed32",
      "7c5d907f386214316344",
      "363b59c37d76d789424a",
      "660ca20eecf428431cf0",
      "6b3f535e1934d1d5b59d",
      "244b539b9faef2abb8cb",
      "8c1fd48dc7148009d033",
      "b2161c12fe29852d808f",
      "c693ff8a3dfce736e11e",
      "2d12f90b1a412e858893",
      "af72cff01c60eb86a91e",
      "9c3d98db1ed7f9d5e70c",
      "b8f26b776fec0b319cb5",
      "250b56577648e8b7282e",
      "a8a25aca777cb7dbe191",
      "46b70cbaa3dec7315439",
      "b25f2f4e68704354c888",
      "19abe792ce249c71ec7f",
      "04ebd9792158d2491905",
      "987949f01e80381d4dc6",
      "f71aa75d6c49b19825ea",
      "61e38ebadfb68a8f2a8a",
      "d9952b85779fd4bbca42",
      "d64f901b51bbd68599d1",
      "c0995dc72dd6012acae6",
      "fb792636bfe7c995ce55",
      "e3007994e6041ecde782",
      "94ede47ff04d2635d995",
      "d0976232a00aabc38935",
      "89f6dd8bf1f02e775524",
      "69ccb1e83bf22dbafc86",
      "7b7a8f9ae488f236c7a9",
      "0081a110c95bc9f14506",
      "4b1eaf5596e064a5666a",
      "cef165066a1e76e639b6",
      "9eeaf6bf308c26930ce3",
      "7ccdd259d5d0b36b4a09",
      "2366b50b9e8b728e384e",
      "2f237982e39caa2034d1",
      "ac6807a52b486ec6f750",
      "b27541bc900ad334d8b7",
      "ba6c01aec3c2cb8106cb",
      "2e5be7266bcfdfcdf3cc",
      "ef18a9c38901a02cf117",
      "9fcdbe782dff7b321167",
      "d795d01943ae8b4c9bcd",
      "d19e1768b087bf230508",
      "71c00ca8a49b9fe91cfd",
      "51055ef8bed01e64776c",
      "8608ee11a93fd6507210",
      "87c1338c0b4ca4e42eb8",
      "6340b9b09fe6b53173fc",
      "33316210dd5d3bf8f4b5",
      "5d6bd0a3faf782acd42a",
      "387f143f8482764cb832",
      "7f073ea8674ec0402a51"
    ],
    "SPY": [
      "dcefc390a109fda1eb13",
      "b2b4c03c5ad80c97c8f0",
      "7ca87bb4126792c8e111",
      "71e017deb052339fbb62",
      "111c05b2eca8bbd4484a",
      "4c2b8bde80226eed717c",
      "d2ce1ffb2ee07ec13f60",
      "afecc5b84fba311acbeb",
      "4de798a2dd1fdec9b824",
      "80b2ddbea274b27af1df",
      "8c682677fccf26451302",
      "94c488c0c617ade02d48",
      "dcd69b5527bcde43ba84",
      "8cf93e6b4ced9f5adf6c",
      "1b6e3b824c40c9f9f1f0",
      "6d1f7a11661a39e4ceda",
      "56e0570df4fecf510b13",
      "062490ec287877913a16",
      "407ffd93dc2a4be5a131",
      "b6559c29865c21d298fd",
      "f49070de3cb5c22ba851",
      "e906d3049f1df6f801ea",
      "6c6709889363fd6d3071",
      "d00950a5e4c56b9cf167",
      "9b50587b7bb9954aed32",
      "7c5d907f386214316344",
      "9bc9eb6465db4a291b39",
      "363b59c37d76d789424a",
      "660ca20eecf428431cf0",
      "6b3f535e1934d1d5b59d",
      "244b539b9faef2abb8cb",
      "8c1fd48dc7148009d033",
      "2b11badec3c1ab86b5ad",
      "b2161c12fe29852d808f",
      "c693ff8a3dfce736e11e",
      "f058ab7003e1a75ee92f",
      "2d12f90b1a412e858893",
      "af72cff01c60eb86a91e",
      "5d479c4839fddbef2578",
      "3542f94ad534c11bb3ca",
      "edf247c771607f027085",
      "9c3d98db1ed7f9d5e70c",
      "c7000db9579c83ee080e",
      "ba3d7e6ae151b8110f1d",
      "b8f26b776fec0b319cb5",
      "6dcca3becab40c23c328",
      "def6aab1576b6e4c4482",
      "250b56577648e8b7282e",
      "a8a25aca777cb7dbe191",
      "d18c919449d6b4d7440a",
      "46b70cbaa3dec7315439",
      "b25f2f4e68704354c888",
      "19abe792ce249c71ec7f",
      "04ebd9792158d2491905",
      "987949f01e80381d4dc6",
      "f71aa75d6c49b19825ea",
      "61e38ebadfb68a8f2a8a",
      "6cd7e1aad302a0a582cc",
      "d9952b85779fd4bbca42",
      "42d89f9cd2ef4eb9fdb8",
      "d64f901b51bbd68599d1",
      "c0995dc72dd6012acae6",
      "30ddba40f6208c41816d",
      "fb792636bfe7c995ce55",
      "8b08b759d63369328e58",
      "e3007994e6041ecde782",
      "94ede47ff04d2635d995",
      "d0976232a00aabc38935",
      "2706572251bf12a9b4c8",
      "67fec3579c380b9cf5e8",
      "89f6dd8bf1f02e775524",
      "69ccb1e83bf22dbafc86",
      "e18a93f6ef2968b6bc18",
      "7b7a8f9ae488f236c7a9",
      "839f59811f40af71f58d",
      "a6ef8db602d8cafb2ac6",
      "84f077d00c8cbeb4d823",
      "0081a110c95bc9f14506",
      "4b1eaf5596e064a5666a",
      "9d85e9c8ff77086405cf",
      "cef165066a1e76e639b6",
      "9eeaf6bf308c26930ce3",
      "7ccdd259d5d0b36b4a09",
      "2366b50b9e8b728e384e",
      "7d61e7445dadfe38ea3d",
      "2f237982e39caa2034d1",
      "a5d12609aed8c8aa6781",
      "b27541bc900ad334d8b7",
      "ba6c01aec3c2cb8106cb",
      "f409b749b05d132890c1",
      "2e5be7266bcfdfcdf3cc",
      "10a0d86c02b8fb759279",
      "ef18a9c38901a02cf117",
      "d795d01943ae8b4c9bcd",
      "3f1c2827c47d2df489ee",
      "d19e1768b087bf230508",
      "7bb117aa0f6a547d052e",
      "71c00ca8a49b9fe91cfd",
      "51055ef8bed01e64776c",
      "8608ee11a93fd6507210",
      "87c1338c0b4ca4e42eb8",
      "5696afeb82bff02403db",
      "6340b9b09fe6b53173fc",
      "33316210dd5d3bf8f4b5",
      "77b9f16834cb0d9c2db9",
      "5d6bd0a3faf782acd42a",
      "387f143f8482764cb832",
      "07ca49a0c2939af401dc",
      "7f073ea8674ec0402a51"
    ],
    "AMAT": [
      "80c2e6e50cd8539b354f",
      "d18c919449d6b4d7440a",
      "67fec3579c380b9cf5e8",
      "08ae54924121fb348071",
      "81a0d52e5cebfa2fab89",
      "32676b5139be9522ea2a"
    ],
    "NVDA": [
      "b2b4c03c5ad80c97c8f0",
      "7ca87bb4126792c8e111",
      "6ed6cad9d09a3f8fb9ab",
      "b2059085a732eb6e4d02",
      "71e017deb052339fbb62",
      "c49b8222f81785e999a2",
      "4055867266143e5f7d3a",
      "50700b81247a8b9181cd",
      "d2ce1ffb2ee07ec13f60",
      "afecc5b84fba311acbeb",
      "ff8a7e5ac6bcd743ed3c",
      "8c682677fccf26451302",
      "d1cf85a9755277b4866d",
      "68482752d8041194abbf",
      "5ddb17c5b2d8454dc5fe",
      "eb3a146d2a222187a9f6",
      "f93badab55c24dbdb065",
      "104305e14954724e067c",
      "49bf6acfe31f13d50a8c",
      "06e4322688fb3bf77272",
      "ee739e49c20dcbacd7b2",
      "b9e97a1b5bca48bc2238",
      "981a005e7362ba4fbad5",
      "d18c919449d6b4d7440a",
      "2823564b0c49cdde139d",
      "8f03e34f623fa40ab914",
      "c6aff69e09eaa91eb95d",
      "8559c48ca042153780b2",
      "d9952b85779fd4bbca42",
      "ec343632477a3019f99f",
      "0c0a73112d58c12cd52e",
      "bf5d5804141eade971e7",
      "2706572251bf12a9b4c8",
      "67fec3579c380b9cf5e8",
      "89f6dd8bf1f02e775524",
      "e18a93f6ef2968b6bc18",
      "9eeaf6bf308c26930ce3",
      "687543ec97b152a83fe7",
      "7d61e7445dadfe38ea3d",
      "a5d12609aed8c8aa6781",
      "0f10e9ff6cf8912fa79e",
      "10a0d86c02b8fb759279",
      "9fcdbe782dff7b321167",
      "3f1c2827c47d2df489ee",
      "59b510ed0801badcf86b",
      "51055ef8bed01e64776c",
      "5696afeb82bff02403db",
      "5d6bd0a3faf782acd42a",
      "387f143f8482764cb832"
    ],
    "AAPL": [
      "7ca87bb4126792c8e111",
      "d2ce1ffb2ee07ec13f60",
      "8c682677fccf26451302",
      "6ef5fc43dfa729b5a1ab",
      "9b50587b7bb9954aed32",
      "8c1fd48dc7148009d033",
      "406b947ab293c4b40504",
      "f3fe60cfcdbf1914cc89",
      "03ecd0828aed0cc7c1a0",
      "802591f84846fdd33845",
      "1201c5989a79e6da21d0",
      "2f237982e39caa2034d1",
      "ba6c01aec3c2cb8106cb",
      "cb6a4f017bd7ce10abbc"
    ],
    "MSFT": [
      "7ca87bb4126792c8e111",
      "8c682677fccf26451302",
      "49bf6acfe31f13d50a8c",
      "ee739e49c20dcbacd7b2",
      "def6aab1576b6e4c4482",
      "250b56577648e8b7282e",
      "d64f901b51bbd68599d1",
      "33cd0a79517b2ca97805",
      "2706572251bf12a9b4c8",
      "8608ee11a93fd6507210",
      "33316210dd5d3bf8f4b5"
    ],
    "GOOGL": [
      "6ed6cad9d09a3f8fb9ab",
      "80b2ddbea274b27af1df",
      "99e805825d966255bf6e",
      "22f0ec91a3fce52724c7",
      "15e1980cd8fa36812bf0",
      "6a7e8e87610b748e4154",
      "eb3a146d2a222187a9f6",
      "104305e14954724e067c",
      "fff558d46080efd05817",
      "86b8d910d91a63c6be29",
      "5d479c4839fddbef2578",
      "6dcca3becab40c23c328",
      "a8a25aca777cb7dbe191",
      "703a452876932cddb88a",
      "19abe792ce249c71ec7f",
      "04ebd9792158d2491905",
      "d54cacb18217b8c8c054",
      "dd9d6e2e7b6ffd7e41bd",
      "3ac8a268a4416ea705fc",
      "225c8dcfc22df7d05083",
      "61e38ebadfb68a8f2a8a",
      "6cd7e1aad302a0a582cc",
      "c0995dc72dd6012acae6",
      "08dafe9e2ee2aff2d77d",
      "917ad067cf1cc10f1530",
      "320e56443d937bcdf2af",
      "2706572251bf12a9b4c8",
      "e7d4190a7288623a5223",
      "4e19ec4aa5796617d97f",
      "8df3775db4eb51fe8b84",
      "1551ec9dde8018ffb40b",
      "1e07bec85e986b5a870c",
      "9d85e9c8ff77086405cf",
      "2366b50b9e8b728e384e",
      "cec7206d8bfed1fdf107",
      "7f92dd0c31321614cc4f",
      "10a0d86c02b8fb759279",
      "71c00ca8a49b9fe91cfd",
      "8a92ddf6e00a1c97a798",
      "33316210dd5d3bf8f4b5"
    ],
    "SNDK": [
      "70cac09fae6da62552b9",
      "062490ec287877913a16",
      "edf247c771607f027085",
      "f71aa75d6c49b19825ea",
      "e3007994e6041ecde782",
      "ef18a9c38901a02cf117",
      "5901ecfacc1e875983ce",
      "9d1079a5e3775f8543f7",
      "77b9f16834cb0d9c2db9"
    ],
    "ASML": [
      "ad6e219880d9577ffa29",
      "56e0570df4fecf510b13",
      "8ac045479eb6c92c84dc",
      "a5d12609aed8c8aa6781"
    ],
    "AMD": [
      "b2059085a732eb6e4d02",
      "71e017deb052339fbb62",
      "4055867266143e5f7d3a",
      "50700b81247a8b9181cd",
      "ff8a7e5ac6bcd743ed3c",
      "b0712ee7bdafdd0d89e4",
      "d1cf85a9755277b4866d",
      "68482752d8041194abbf",
      "eb3a146d2a222187a9f6",
      "104305e14954724e067c",
      "49bf6acfe31f13d50a8c",
      "6b3f535e1934d1d5b59d",
      "8089493de9c41e1f3722",
      "06e4322688fb3bf77272",
      "ee739e49c20dcbacd7b2",
      "13ac1c186ea3d1ad4540",
      "b9e97a1b5bca48bc2238",
      "981a005e7362ba4fbad5",
      "8f03e34f623fa40ab914",
      "c6aff69e09eaa91eb95d",
      "6cd7e1aad302a0a582cc",
      "c9d575e0d5b5725873ff",
      "ec343632477a3019f99f",
      "0c0a73112d58c12cd52e",
      "bf5d5804141eade971e7",
      "89f6dd8bf1f02e775524",
      "4b1eaf5596e064a5666a",
      "7d61e7445dadfe38ea3d",
      "ddf0b9406c2e6de8a759",
      "ef18a9c38901a02cf117",
      "9fcdbe782dff7b321167"
    ],
    "AVGO": [
      "b2059085a732eb6e4d02",
      "c49b8222f81785e999a2",
      "8d7c2623291f8a3ca05c",
      "4055867266143e5f7d3a",
      "1b6e3b824c40c9f9f1f0",
      "56e0570df4fecf510b13",
      "34f2bad0f6f3c160c266",
      "b2782fc262fc68d8f1e2",
      "f058ab7003e1a75ee92f",
      "5d479c4839fddbef2578",
      "9c3d98db1ed7f9d5e70c",
      "6cd7e1aad302a0a582cc",
      "8b08b759d63369328e58",
      "7b7a8f9ae488f236c7a9",
      "0d24c4e654d71dbbb7d1",
      "cef165066a1e76e639b6",
      "51fbd3dcc5dadee36e84",
      "0f10e9ff6cf8912fa79e",
      "ef18a9c38901a02cf117",
      "51055ef8bed01e64776c",
      "6340b9b09fe6b53173fc",
      "b6f7da99028f0dfc0bb3"
    ],
    "MU": [
      "b2059085a732eb6e4d02",
      "4c2b8bde80226eed717c",
      "4055867266143e5f7d3a",
      "50700b81247a8b9181cd",
      "fef6183cd2ac62ba329f",
      "a849d3aea3f23ac77131",
      "ff8a7e5ac6bcd743ed3c",
      "d1cf85a9755277b4866d",
      "062490ec287877913a16",
      "26e6878b714c53ff7657",
      "b6559c29865c21d298fd",
      "68482752d8041194abbf",
      "eb3a146d2a222187a9f6",
      "f93badab55c24dbdb065",
      "104305e14954724e067c",
      "d00950a5e4c56b9cf167",
      "49bf6acfe31f13d50a8c",
      "e091569aff3b99e54a91",
      "06e4322688fb3bf77272",
      "3502ee280e457e368476",
      "edf247c771607f027085",
      "ee739e49c20dcbacd7b2",
      "9c3d98db1ed7f9d5e70c",
      "e5dce7888c7d891d626b",
      "b8f26b776fec0b319cb5",
      "b9e97a1b5bca48bc2238",
      "250b56577648e8b7282e",
      "981a005e7362ba4fbad5",
      "19abe792ce249c71ec7f",
      "987949f01e80381d4dc6",
      "8f03e34f623fa40ab914",
      "c6aff69e09eaa91eb95d",
      "802591f84846fdd33845",
      "e3007994e6041ecde782",
      "ec343632477a3019f99f",
      "0c0a73112d58c12cd52e",
      "bf5d5804141eade971e7",
      "69ccb1e83bf22dbafc86",
      "e18a93f6ef2968b6bc18",
      "ac6807a52b486ec6f750",
      "f16c7fa4f337d74197d4",
      "cb6a4f017bd7ce10abbc",
      "ef18a9c38901a02cf117"
    ],
    "ORCL": [
      "b2059085a732eb6e4d02",
      "c49b8222f81785e999a2",
      "8d7c2623291f8a3ca05c",
      "4055867266143e5f7d3a",
      "50700b81247a8b9181cd",
      "ff8a7e5ac6bcd743ed3c",
      "d1cf85a9755277b4866d",
      "68482752d8041194abbf",
      "7081e4ac1939f4600751",
      "eb3a146d2a222187a9f6",
      "104305e14954724e067c",
      "49bf6acfe31f13d50a8c",
      "06e4322688fb3bf77272",
      "b2161c12fe29852d808f",
      "34f2bad0f6f3c160c266",
      "b2782fc262fc68d8f1e2",
      "ee739e49c20dcbacd7b2",
      "b9e97a1b5bca48bc2238",
      "981a005e7362ba4fbad5",
      "8f03e34f623fa40ab914",
      "c6aff69e09eaa91eb95d",
      "fb792636bfe7c995ce55",
      "ec343632477a3019f99f",
      "0c0a73112d58c12cd52e",
      "bf5d5804141eade971e7",
      "9fcdbe782dff7b321167",
      "59b510ed0801badcf86b"
    ],
    "MRVL": [
      "71e017deb052339fbb62",
      "72a7feb610a82b5aca11",
      "4de798a2dd1fdec9b824",
      "d1cf85a9755277b4866d",
      "785064cd228213926130",
      "b6559c29865c21d298fd",
      "90c0ff4399f57d39b182",
      "9c3d98db1ed7f9d5e70c",
      "c7000db9579c83ee080e",
      "b25f2f4e68704354c888",
      "19abe792ce249c71ec7f",
      "4879be352c36261bcbf0",
      "c6aff69e09eaa91eb95d",
      "4df2d39f0f042f89e8a2",
      "6cd7e1aad302a0a582cc",
      "8b08b759d63369328e58",
      "0d24c4e654d71dbbb7d1",
      "ef18a9c38901a02cf117",
      "7bb117aa0f6a547d052e",
      "51055ef8bed01e64776c",
      "6340b9b09fe6b53173fc",
      "387f143f8482764cb832"
    ],
    "AMZN": [
      "c49b8222f81785e999a2",
      "80b2ddbea274b27af1df",
      "b6559c29865c21d298fd",
      "f49070de3cb5c22ba851",
      "6c6709889363fd6d3071",
      "26254daf3be716c5592a",
      "b2161c12fe29852d808f",
      "f3fe60cfcdbf1914cc89",
      "22c621f4fb2fee7ac430",
      "04ebd9792158d2491905",
      "917ad067cf1cc10f1530",
      "bf5d5804141eade971e7",
      "52fe7cd1829d98664e55",
      "20ff61b2ab6fb59faa44",
      "9fcdbe782dff7b321167",
      "59b510ed0801badcf86b",
      "20a9e2763c70f665e8b5"
    ],
    "ARM": [
      "50700b81247a8b9181cd",
      "d1cf85a9755277b4866d"
    ],
    "INTC": [
      "50700b81247a8b9181cd",
      "d1cf85a9755277b4866d",
      "6d1f7a11661a39e4ceda",
      "62e2c378c1edd19a3d5f",
      "7c5d907f386214316344",
      "49bf6acfe31f13d50a8c",
      "ec282b65cbdad99c5cde",
      "b8f26b776fec0b319cb5",
      "d18c919449d6b4d7440a",
      "d9952b85779fd4bbca42",
      "c0995dc72dd6012acae6",
      "ec343632477a3019f99f",
      "89f6dd8bf1f02e775524",
      "e18a93f6ef2968b6bc18",
      "81a0d52e5cebfa2fab89",
      "b27541bc900ad334d8b7",
      "ef18a9c38901a02cf117",
      "32676b5139be9522ea2a",
      "3c9a1f14ac30af183f35",
      "9fcdbe782dff7b321167",
      "07ca49a0c2939af401dc"
    ],
    "EME": [
      "132b19a6235bf7dde011"
    ],
    "META": [
      "28b5f785057a38b178de",
      "a599076a5e732f06853a",
      "99e805825d966255bf6e",
      "996ffd4aed212a28a424",
      "104305e14954724e067c",
      "e091569aff3b99e54a91",
      "fff558d46080efd05817",
      "8089493de9c41e1f3722",
      "81aaaccc50a92d554aad",
      "4a4b5f3dcc976fc1385e",
      "04ebd9792158d2491905",
      "8f03e34f623fa40ab914",
      "30ddba40f6208c41816d",
      "c9d575e0d5b5725873ff",
      "cee442d4877d8e9d74bd",
      "7ccdd259d5d0b36b4a09",
      "52722d09a6ba1f868c5d",
      "33316210dd5d3bf8f4b5"
    ],
    "PLTR": [
      "8c682677fccf26451302",
      "c693ff8a3dfce736e11e",
      "af72cff01c60eb86a91e",
      "d0a50896375079113fd8",
      "2706572251bf12a9b4c8",
      "10a0d86c02b8fb759279",
      "3f1c2827c47d2df489ee",
      "5723ee76fb13676d6dd2",
      "43e2fa516dd8ce15c247",
      "74e202202d7ac74ea32a"
    ],
    "WDC": [
      "94c488c0c617ade02d48",
      "062490ec287877913a16",
      "9c3d98db1ed7f9d5e70c",
      "b8f26b776fec0b319cb5",
      "250b56577648e8b7282e",
      "19abe792ce249c71ec7f",
      "d9952b85779fd4bbca42",
      "c0995dc72dd6012acae6",
      "802591f84846fdd33845",
      "d0976232a00aabc38935",
      "69ccb1e83bf22dbafc86",
      "cb6a4f017bd7ce10abbc",
      "9fcdbe782dff7b321167",
      "51055ef8bed01e64776c"
    ],
    "TSM": [
      "dcd69b5527bcde43ba84",
      "9bc9eb6465db4a291b39",
      "b8f26b776fec0b319cb5",
      "6961835ed3feecb870a9",
      "e18a93f6ef2968b6bc18",
      "f0b3bb0872cf4065626c",
      "51055ef8bed01e64776c",
      "5696afeb82bff02403db",
      "07ca49a0c2939af401dc"
    ],
    "CEG": [
      "8cf93e6b4ced9f5adf6c",
      "22f0ec91a3fce52724c7",
      "15e1980cd8fa36812bf0",
      "62e2c378c1edd19a3d5f",
      "6a7e8e87610b748e4154",
      "86b8d910d91a63c6be29",
      "6dcca3becab40c23c328",
      "a8a25aca777cb7dbe191",
      "703a452876932cddb88a",
      "b25f2f4e68704354c888",
      "19abe792ce249c71ec7f",
      "d54cacb18217b8c8c054",
      "3ac8a268a4416ea705fc",
      "225c8dcfc22df7d05083",
      "61e38ebadfb68a8f2a8a",
      "c0995dc72dd6012acae6",
      "08dafe9e2ee2aff2d77d",
      "917ad067cf1cc10f1530",
      "e7d4190a7288623a5223",
      "4e19ec4aa5796617d97f",
      "a6ef8db602d8cafb2ac6",
      "8df3775db4eb51fe8b84",
      "1551ec9dde8018ffb40b",
      "1e07bec85e986b5a870c",
      "9d85e9c8ff77086405cf",
      "cec7206d8bfed1fdf107",
      "7f92dd0c31321614cc4f",
      "9fcdbe782dff7b321167",
      "8a92ddf6e00a1c97a798",
      "87c1338c0b4ca4e42eb8"
    ],
    "QCOM": [
      "1b6e3b824c40c9f9f1f0",
      "9bc9eb6465db4a291b39",
      "1a5b06a6f596ea76f15c",
      "d9a282036434c6e54f04",
      "5d05bea6004b4626de94",
      "981a005e7362ba4fbad5",
      "42d89f9cd2ef4eb9fdb8",
      "802591f84846fdd33845",
      "ec343632477a3019f99f",
      "cb6a4f017bd7ce10abbc",
      "5d6bd0a3faf782acd42a",
      "387f143f8482764cb832"
    ],
    "GEV": [
      "407ffd93dc2a4be5a131",
      "e906d3049f1df6f801ea",
      "06e4322688fb3bf77272"
    ],
    "TSLA": [
      "363b59c37d76d789424a",
      "244b539b9faef2abb8cb",
      "2b11badec3c1ab86b5ad",
      "3542f94ad534c11bb3ca",
      "24cbd65c9133a4e48c5d",
      "a8a25aca777cb7dbe191",
      "04ebd9792158d2491905",
      "987949f01e80381d4dc6",
      "839f59811f40af71f58d",
      "bff2d3df7f833dde1659",
      "f409b749b05d132890c1",
      "d19e1768b087bf230508",
      "5d6bd0a3faf782acd42a",
      "387f143f8482764cb832",
      "d4047d6c7b75e2616820"
    ],
    "VST": [
      "418f7dc726e35d1a774e",
      "c0995dc72dd6012acae6",
      "08dafe9e2ee2aff2d77d",
      "a6ef8db602d8cafb2ac6",
      "84f077d00c8cbeb4d823",
      "8df3775db4eb51fe8b84",
      "51055ef8bed01e64776c",
      "6340b9b09fe6b53173fc"
    ],
    "HUBB": [
      "7d596c25da915e29919b"
    ],
    "LITE": [
      "16214b4ce85a44405d0a",
      "0081a110c95bc9f14506"
    ],
    "STX": [
      "9c3d98db1ed7f9d5e70c",
      "b8f26b776fec0b319cb5",
      "250b56577648e8b7282e",
      "a8a25aca777cb7dbe191",
      "46b70cbaa3dec7315439",
      "69ccb1e83bf22dbafc86"
    ],
    "PWR": [
      "485d65e3fb90a3002248"
    ],
    "CRM": [
      "aafb0272c4aa3bd89150",
      "2e5be7266bcfdfcdf3cc"
    ],
    "KLAC": [
      "c171f9bc00127e05ecdc"
    ],
    "BE": [
      "daaa05deed5c30a77989"
    ],
    "VRT": [
      "96fee52d7265bf6f8012",
      "3f1c2827c47d2df489ee",
      "71e50214ac3b3c8a7386"
    ],
    "MOD": [
      "56da942bcc6e3d805c5e"
    ]
  }
};
