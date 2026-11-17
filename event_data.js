// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1794886002.3492317,
  "events": [
    {
      "id": "0dcc36ba2dbe5657bbb0",
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
      "headline": "Nvidia earnings to test AI boom after Huang's exit",
      "headlineKo": "엔비디아는 황의 퇴임 후 AI 붐을 테스트하기 위해 수익을 얻습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47452ed0648fab9f518a837a16380505a6a7ccec5f8133a4ac378d9205180444",
        "publishedAt": 1794879839,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia earnings to test AI boom after Huang's exit",
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
      "id": "e6824f3477b2803a965d",
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
      "headline": "This Is a Huge Week for the Stock Market: Nvidia Earnings, Fed Minutes, and Anthropic’s IPO",
      "headlineKo": "이번 주는 주식 시장에 있어 엄청난 한 주입니다: Nvidia 수익, 연준 회의록 및 Anthropic의 IPO",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3aa37774fbae62d6611f869f3f52bb1660e5e496139a8f66b78a28a93e2d5daf",
        "publishedAt": 1794877801,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "이번 주는 주식 시장에 있어서 큰 한 주입니다: Nvidia 수익, 연준 회의록 및 Anthropic의 IPO | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,416.59 -1.9% -145.08 DJI 51,608.17 -1.",
        "지난 달 연준은 금리를 안정적으로 유지했지만 두 명의 관료가 인상에 반대했고 10월 인플레이션은 예상보다 뜨거웠기 때문에 회의록을 통해 얼마나 많은 사람들이 금리 인상에 열려 있는지 알 수 있습니다.",
        "Anthropic의 성장은 놀랍습니다. 그러나 회사가 기대하는 수준에 미치지 못한다면 컴퓨팅 및 인프라 약속에서 9000억 달러 규모의 약속을 이행하는 데 어려움을 겪을 수 있으며 그 중 대부분은 취소할 수 없습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $900 billion, 4.12%, $108 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $900 billion, 4.12%, $108 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2b8630fc07c68fce84ef",
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
      "headline": "Why Broadcom Stock Got Mashed on Monday",
      "headlineKo": "Broadcom 주식이 월요일에 망가진 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d0da79d3b787043c172df8045714da3e4ea370e11452ed90a1b7a2f50c2bd7f0",
        "publishedAt": 1794877443,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom 주식이 월요일에 망가진 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,416.59 -1.9% -145.08 DJI 51,608.17 -1.4% -739.38 NASDAQ 24,509.76 -2.5% -626.52 비트코인 ​​$6",
        "Broadcom은 분석가의 목표 가격 인하에도 도움을 받지 못했습니다.",
        "Broadcom( AVGO -3.92% )은 인공 지능(AI) 혁명을 주도하는 기술 하드웨어 제조업체 중 하나이지만 월요일 주식 실적을 보면 알 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3.92%, 4.12%, $425 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.92%, 4.12%, $425 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b7e45f85d2ec7ee1d59b",
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
      "headline": "Wall Street futures muted as Nvidia earnings loom amid AI jitters",
      "headlineKo": "AI 불안 속에 Nvidia 수익이 급락함에 따라 월스트리트 선물이 음소거되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a30956b12a3b9b593ab81f4f5448dae73d22990e32610f0541d6979d43e78dd0",
        "publishedAt": 1794877392,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Wall Street futures muted as Nvidia earnings loom amid AI jitters",
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
      "id": "5dff9e2d16440a566403",
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
      "headline": "Taiwan Semiconductor Booked a Record NT$587 Billion Month. The Stock Has Lost Nearly 10% in Three Days Anyway",
      "headlineKo": "대만 반도체는 NT$5,870억의 달 기록을 세웠습니다. 어쨌든 주식은 3일 만에 거의 10% 하락했습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3e345e01c765ee04f7f15e45ba82ca4d379078fb4a28dc2e5429620a8c31d332",
        "publishedAt": 1794876070,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $587 Billion, 10%, $373.45, 6.3%, $413.35,, 9.7%, $587 billion, $485.80.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 TSM의 사업과 관련된 'Taiwan Semiconductor Booked a Record NT$587 Billion Month. The Stock Has Lost Nearly 10% in Three Days Anyway' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b7e3802ae84d931d7949",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "NVDA",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Qualcomm CEO: “There Is No AI Correction” at Qualcomm. Nvidia’s November 17 Earnings Face a Major Test",
      "headlineKo": "퀄컴 CEO “퀄컴에는 AI 교정은 없다” Nvidia의 11월 17일 수익은 중대한 시험대에 직면했습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8fa795500cb727f1833fd28f316f6a4478f2c7e57bcb5173fa11046ad0ca8c14",
        "publishedAt": 1794875261,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "퀄컴 CEO “퀄컴에는 AI 교정은 없다”",
        "Nvidia의 11월 17일 수익이 큰 시험대에 직면했습니다 | TIKR.com 일반 투자 Qualcomm CEO: Qualcomm에는 “AI 수정은 없습니다.”",
        "Nvidia의 11월 17일 수익이 주요 테스트에 직면함 Nikko Henson • 7분 읽기 검토자: David Hanson 마지막 업데이트 2026년 11월 17일 @可画上新啦 with AI via Canva 핵심 사항 Qualcomm(QCOM) CEO Cristiano Amon은 AI 수정이 없다고 말했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 68%, $110.2 billion, $215.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 68%, $110.2 billion, $215.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "eaf599d078842c81b5cb",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "S&P 500, Dow, Nasdaq End Lower As Investors Hold Back Ahead Of Nvidia Earnings, Anthropic IPO This Week —  NVDA, TSLA, ANT In Focus",
      "headlineKo": "S&P 500, Dow, Nasdaq은 투자자들이 Nvidia 수익을 앞두고 이번 주 Anthropic IPO를 보류함에 따라 하락 마감 — NVDA, TSLA, ANT In Focus",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=947c6dabff9b185059b77dd7080dd7859482ac74c838af5eeb8b327b20851188",
        "publishedAt": 1794874168,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Dow, Nasdaq은 이번 주 Nvidia 수익, 인류애 IPO를 앞두고 투자자들이 하락세로 마감 — NVDA, TSLA, ANT In Focus AI 에이전트 동향 뉴스 수익 전체 DIA 1.55% SPY 1.85% QQQ 2.35% 추세 BABA 7.44% SLS 3.05% JPM 2.37% OME",
        "S&P 500, Dow, Nasdaq은 투자자들이 이번 주 Nvidia 수익, Anthropic IPO를 앞두고 하락하면서 종료 — NVDA, TSLA, ANT In Focus Nvidia 수익은 화요일에 마감되며 Anthropic은 목요일에 ANT 티커 아래에 상장될 예정입니다.",
        "트레이더들이 2026년 11월 6일 뉴욕시 뉴욕증권거래소(NYSE) 현장에서 일하고 있다."
      ],
      "marketInterpretation": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 1.7%, $5 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "TSLA에 대한 경쟁사 수주 · 고객 점유 변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 4%, 1.7%, $5 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 공급사의 실제 물량",
        "기존 공급사 매출 비중",
        "고객의 이중 공급 전략"
      ]
    },
    {
      "id": "cff0a28bf369946b4a8e",
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
      "headline": "Bill Ackman Adds More To Netflix In Q3; Exits Hertz, Cuts Microsoft",
      "headlineKo": "Bill Ackman은 3분기에 Netflix에 더 많은 기능을 추가합니다. Hertz 퇴사, Microsoft 퇴사",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=20e89db6e669806b510a276ead872a1aa1934ad209b88a093ba569a56c409b20",
        "publishedAt": 1794874087,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bill Ackman은 3분기에 Netflix에 더 많은 기능을 추가합니다. Hertz 종료, Microsoft AI 에이전트 삭감 추세 뉴스 수입 전체 DIA 1.47% SPY 1.81% QQQ 2.27% 추세 BABA 7.54% SLS 3.05% JPM 2.37% OMER 11.21% BIDU 7.69% INFQ 5.31% KURA 3.99% PEP 0.68% MP 6.48% 호주",
        "Bill Ackman은 3분기에 Netflix에 더 많은 기능을 추가합니다. 허츠(Hertz) 퇴출, 마이크로소프트(Microsoft) 삭감 미국 증권거래위원회(SEC)에 제출한 자료에 따르면 퍼싱은 거래소 운영업체인 ICE(Intercontinental Exchange)와 메디(medi)에도 새로운 자리를 열었다.",
        "Bill Ackman이 2025년 5월 22일 뉴욕에서 열린 The Pool에서 열린 2025 Pershing Square Foundation MIND 및 Cancer Prize Award Dinner에 참석했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.47%, 1.81%, 2.27% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.47%, 1.81%, 2.27% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "011dd1545c6d761f4aed",
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
      "headline": "Brad Gerstner Says AI Is at Its ‘Google 2005’ Moment. Here’s Who He Thinks Wins",
      "headlineKo": "브래드 거스트너(Brad Gerstner)는 AI가 'Google 2005' 순간에 이르렀다고 말합니다. 그가 생각하는 사람은 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e06740ac6f06db06748862cbc26aa287cbaa46061b7bb49b158a5174b63b8d28",
        "publishedAt": 1794874024,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Brad Gerstner는 AI가 'Google 2005' 순간에 이르렀다고 말합니다.",
        "그가 승리한다고 생각하는 사람은 다음과 같습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,433.60 +0.15% Dow Jones 51,583.60 −0.06% Nasdaq 100 27,341.60 +0.42% Russell 2000 2,740.63 −0.07% S&P 500 7,433.60 +0.15% 다우존스 51,583.60 −0.06% 나스닥 100 27,341.60 +0.42% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 99%, 3.98%, $156.37 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 99%, 3.98%, $156.37 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "589594bcd4e9feb57c01",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Dow Jones Futures: AMD, Nvidia, Micron Lead AI Trade Lower With Nvidia Earnings On Deck",
      "headlineKo": "다우존스 선물: AMD, Nvidia, Micron이 Nvidia 수익을 바탕으로 AI 거래를 주도합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=869c00a63e9328673209af4fedb91a4c00b7e52033596cd905924b661555d0ee",
        "publishedAt": 1794872832,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dow Jones Futures: AMD, Nvidia, Micron Lead AI Trade Lower With Nvidia Earnings On Deck",
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
      "id": "9abf6838450994c323fd",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Your $300,000 in XLY Holds $125,585 in Amazon and Tesla Alone",
      "headlineKo": "XLY의 $300,000는 Amazon과 Tesla에서만 $125,585를 보유하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=215966c7c0cd7f3a8dedbcb8141d456a56198bfadf51acb77b97547bcd87e4c7",
        "publishedAt": 1794870199,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "XLY의 $300,000는 Amazon과 Tesla에서만 $125,585를 보유하고 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,433.60 +0.15% Dow Jones 51,583.60 −0.06% Nasdaq 100 27,341.60 +0.42% Russell 2000 2,740.63 −0.07% S&P 500 7,433.60 +0.15% 다우존스 51,583.60 −0.06% 나스닥 100 27,341.60 +0.42% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $300,000, $125,585, 41.86% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $300,000, $125,585, 41.86% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f00806c6b0399c092995",
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
      "headline": "Stock Market Today, Nov. 16: Amazon Falls on New AI Chip Export Rule and Leo Satellite Launch Failure",
      "headlineKo": "오늘, 11월 16일 주식 시장: Amazon은 새로운 AI 칩 수출 규정 및 Leo 위성 발사 실패로 인해 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb3077e8ba9ab973e6db6b5d7c779d96016702a07cf1ac63037620ec43af3b71",
        "publishedAt": 1794867633,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "16: Amazon이 새로운 AI 칩 수출 규칙 ​​및 Leo 위성 발사 실패로 인해 실패 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,416.59 -1.9% -145.08 DJI 51,608.17 -1.4% -739.38 NASD",
        "비상장, 비공개 또는 이중 종류의 비거래 주식은 포함되지 않습니다.",
        "$2.88T 일일 범위 $256.68 - $262.92 52주 범위 $196.00 - $287.20 거래량 4810만 평균 거래량 3910만 총 이익률 51.37% 글로벌 전자 상거래, 물류 및 클라우드 컴퓨팅 플랫폼인 Amazon.com( AMZN -3.34% )은 $257.75로 마감되어 하락했습니다. 3.34%."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $2.88, $256.68, $262.92 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $2.88, $256.68, $262.92 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c3b28575741e6462d725",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is AMD Stock Still a Buy After Its Post-Earnings Jump?",
      "headlineKo": "AMD 주식은 수익 후 상승 후에도 여전히 매수세를 보이고 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=688edc5f4e03992262336142073e2d779a2ec98a51868c3f9d3796fdcbcb562a",
        "publishedAt": 1794865398,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD 주식은 수익 후 상승 후에도 여전히 매수세를 보이고 있습니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,416.59 -1.9% -145.08 DJI 51,608.17 -1.4% -739.38 NASDAQ 24,509.76 -2.5% -626.52 비트코인 $64,711.00 +0.1% +$95.63 SPCX $137.36 -1.3",
        "AMD의 주식은 여전히 ​​사업에 비해 상당히 비싸다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 5.58%, 15%, 13.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5.58%, 15%, 13.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "af05797deeabdd6b5b66",
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
      "headline": "Amazon workers’ union gets a contract, but it’s in Canada",
      "headlineKo": "아마존 노조가 계약을 맺었지만 캐나다에 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3762c31ca0bc2a32c6f1b5775668fba6e7a4e1eee665ec8a2137980176a44856",
        "publishedAt": 1794863720,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존 노조가 계약을 맺었지만 캐나다에 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "f0861d17134d48154816",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "TSMC Slumps Nearly 6% as Jensen Huang’s Exit and AI Debt Fears Rattle Investors Ahead of Nvidia Earnings",
      "headlineKo": "TSMC는 Jensen Huang의 퇴장과 AI 부채로 인해 Nvidia 수익에 앞서 투자자들이 흔들리는 것을 두려워하면서 거의 6% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8cbd631c6c3757329f0c6f84a550d1866558eab94614cfbe25d9455bb859e973",
        "publishedAt": 1794861009,
        "collectedAt": 1794881750.7686634
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
        "이 기사는 TSM의 사업과 관련된 'TSMC Slumps Nearly 6% as Jensen Huang’s Exit and AI Debt Fears Rattle Investors Ahead of Nvidia Earnings' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "466d34569464434b4642",
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
      "headline": "Bloom Energy Is Down 26% in a Month. What Will It Take to Get BE Stock Back to $250?",
      "headlineKo": "블룸에너지 한달새 26% 하락. BE 주식을 250달러로 되돌리려면 무엇이 필요합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de40087e64f271d61613adececd6cbcf971268a1ea9992a65e9d7196ec2a62ab",
        "publishedAt": 1794859867,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "블룸에너지 한달새 26% 하락.",
        "BE 주식을 250달러로 되돌리려면 무엇이 필요합니까?",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,433.60 +0.15% Dow Jones 51,583.60 −0.06% Nasdaq 100 27,341.60 +0.42% Russell 2000 2,740.63 −0.07% S&P 500 7,433.60 +0.15% 다우존스 51,583.60 −0.06% 나스닥 100 27,341.60 +0.42% 러셀 20"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 26%, $250, $177.71, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 26%, $250, $177.71, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dcb843a7ef535888b0c9",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "INTC",
      "relatedTickers": [
        "INTC",
        "QQQ",
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
      "headline": "INTW 2X Intel ETF Tumbles 13% as Intel Drops Amid Shareholder Lawsuit and AI Chip Selloff; Taiwan Semiconductor Falls 5%",
      "headlineKo": "INTW 2X Intel ETF는 주주 소송과 AI 칩 매각으로 Intel이 하락하면서 13% 하락했습니다. 대만 반도체 5% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1c62335723868c483e22a6ee74ea08e056bfd5df0228ab9486a41ff961d572c2",
        "publishedAt": 1794859392,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "INTW 2X Intel ETF는 주주 소송과 AI 칩 매각으로 Intel이 하락하면서 13% 하락했습니다. 대만 반도체 하락 5% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,433.60 +0.15% Dow Jones 51,583.60 −0.06% Nasdaq 100 27,341.60 +0.42% Russell 2000 2,740.63 −0.07% S&P 500 7,433.60 +0.15% 다우존스 51,583.60 −0.06% 나스닥 100 27,341.60 +0.42% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 5%, $5.20 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 5%, $5.20 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1ce77744b4df8eaa76be",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel “Trades at 34x PE for Just 11%” Growth, Says Dan Niles. Now Shareholders Are Suing",
      "headlineKo": "Dan Niles는 Intel이 “단지 11% 성장을 위해 PER 34배로 거래합니다”라고 말했습니다. 이제 주주들이 소송을 제기하고 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df8713115f19e55bb9ac869e5ce676103b79b643293b2f196727c69b9ec76ea4",
        "publishedAt": 1794857974,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dan Niles는 Intel이 “단지 11% 성장을 위해 PER 34배로 거래합니다”라고 말했습니다.",
        "이제 주주들이 소송을 제기하고 있습니다 | TIKR.com General Investing Intel은 \"단지 11% 성장을 위해 34배의 PE로 거래\"한다고 Dan Niles는 말합니다.",
        "이제 주주들이 Gian Estrada를 고소하고 있습니다. • 4분 읽기 검토자: David Hanson 최종 업데이트: 2026년 11월 16일 최종 업데이트 Daniel Chetroni의 Daniel CHETRONI 및 Canva를 통한 DragonImages 주요 사항 Intel 주주들은 11월 2일에 소송을 제기했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 11%, 29%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11%, 29%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5c7ffef54e8330c64654",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Why Does Palantir Stock Keep Going Down?",
      "headlineKo": "Palantir 주식이 계속 하락하는 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=56886dcc57e3292979853dd9275e7b3cbec91e7e6e4147445bea45932ae79e05",
        "publishedAt": 1794857776,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 주식이 계속 하락하는 이유는 무엇입니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,416.59 -1.9% -145.08 DJI 51,608.17 -1.4% -739.38 NASDAQ 24,509.76 -2.5% -626.52 비트코인 $64,711.00 +0.1% +$95.63 SPCX $137.36 -1.3",
        "Palantir의 성장 이론은 여전히 ​​손상되지 않은 것처럼 보이지만 주식은 여전히 ​​​​비록 비싸습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 4.52%, 3.7%, 0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.52%, 3.7%, 0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "80cef9e45f147f76ec10",
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
      "headline": "ServiceNow vs. Palantir Technologies: Comparing Steady Sales Scale Against Rapid Revenue Acceleration",
      "headlineKo": "ServiceNow와 Palantir Technologies: 꾸준한 판매 규모와 빠른 수익 가속화 비교",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dfdcbd5a111fac951036b1e57d14382ec1afd534e475c05e831b4466869302f5",
        "publishedAt": 1794857524,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ServiceNow와 Palantir Technologies: 꾸준한 판매 규모와 빠른 수익 가속화 비교"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "8621a499d4c4876d64cc",
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
      "headline": "Is Oracle (ORCL) Undervalued Following Its Expanded Federal Health Data Exchange Deal?",
      "headlineKo": "확장된 연방 의료 데이터 교환 거래로 인해 Oracle(ORCL)이 저평가되어 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc11cd7b3ac8e205346a1d4bd362e0e4ffb2f0f30529921d153742bac772e4c5",
        "publishedAt": 1794856257,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "확장된 연방 의료 데이터 교환 거래로 인해 Oracle(ORCL)이 저평가되어 있습니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "5bbc7d9886944ae5c09a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "AMD",
      "relatedTickers": [
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "NVDL 2X NVIDIA ETF Sinks 9% as NVIDIA Falls 4% on Jensen Huang Fallout Ahead of Earnings; AMD Drops 5%",
      "headlineKo": "NVDL 2X NVIDIA ETF는 실적에 앞서 Jensen Huang 낙진으로 NVIDIA가 4% 하락함에 따라 9% 하락했습니다. AMD 하락 5%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b588421c5836aa13ef2bba17bba8aa6d77800717b9a1a29f9e4ddd64095822cb",
        "publishedAt": 1794855738,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVDL 2X NVIDIA ETF는 실적에 앞서 Jensen Huang 낙진으로 NVIDIA가 4% 하락함에 따라 9% 하락했습니다. AMD 하락 5% - 월 스트리트 24/7",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,433.60 +0.15% Dow Jones 51,583.60 −0.06% Nasdaq 100 27,341.60 +0.42% Russell 2000 2,740.63 −0.07% S&P 500 7,433.60 +0.15% 다우존스 51,583.60 −0.06% 나스닥 100 27,341.60 +0.42% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 9%, 4%, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 9%, 4%, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "488a2856d095a1e7b2bd",
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
      "headline": "Intel Stocks Drop 6.13% as Shareholder Suit Targets PC Slump Disclosures",
      "headlineKo": "PC 부진 공개를 겨냥한 주주 소송으로 인텔 주가 6.13% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dccff98112da4a08f1690b14a7335bb1f38ab188607c5bfe4cf66f525b41f307",
        "publishedAt": 1794855223,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "PC 부진 공개를 겨냥한 주주 소송으로 인텔 주가 6.13% 하락"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "bc5cec78dcfa3f712974",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "risk",
      "expectedHorizon": "단기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "ACC Granted Leave to Intervene Before EU General Court in Broadcom Legal Privilege Case",
      "headlineKo": "ACC는 Broadcom 법적 특권 사건에서 EU 일반 법원에 개입할 수 있는 권한을 부여했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78f722ee6a57aa33384e6eb3fa738b111e8564b187afab89fd097f6c48c44151",
        "publishedAt": 1794854880,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ACC는 Broadcom 법적 특권 사건에서 EU 일반 법원에 개입할 수 있는 권한을 부여했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "0e27fca9beec730f8d37",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Jensen's possible return to Nvidia, Intel's steps and missteps",
      "headlineKo": "젠슨의 엔비디아 복귀 가능성, 인텔의 행보와 실수",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7cc12f239dc10185fd5981518c5e6c04f12b4e9c7475ed88d80ac37f5af8a6a",
        "publishedAt": 1794854721,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "젠슨의 엔비디아 복귀 가능성, 인텔의 행보와 실수"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "cbec0954b09828b4f0b5",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "AMD",
        "AVGO",
        "INTC",
        "LITE",
        "MRVL",
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
      "headline": "Why Marvell Stock Is Down Today",
      "headlineKo": "오늘 Marvell 주식이 하락한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b2c5f0ea46a144e09a3c274f1b0b7607781a228a08f99e0c9c369949d64618d",
        "publishedAt": 1794854402,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 Marvell 주식이 하락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,416.59 -1.9% -145.08 DJI 51,608.17 -1.4% -739.38 NASDAQ 24,509.76 -2.5% -626.52 비트코인 ​​$64,711.00",
        "투자자들은 Nvidia가 보고할 때까지 Micron, Intel, AMD 및 Broadcom이 모두 4% 이상 하락할 때까지 AI 거래에서 손을 떼고 있는 것으로 보입니다.",
        "Marvell이 보류 중인 Lumentum의 전체 주식 거래는 주주들을 희석시켜 주식에 대한 압박을 가중시킬 것입니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4%, 7.27%, 6.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4%, 7.27%, 6.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "154468dd6659774f18a4",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Micron Stocks Sink Nearly 7% After Judge Lets DRAM Supply Lawsuit Proceed",
      "headlineKo": "판사가 DRAM 공급 소송을 진행하자 마이크론 주가는 거의 7% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=53e8ca19485f1d3ed9d97a4f65e37f38532d931b422aa0d8b4e52cbb13610231",
        "publishedAt": 1794853212,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Stocks Sink Nearly 7% After Judge Lets DRAM Supply Lawsuit Proceed",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "29598abe58a8c093f937",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom Stocks Slide 4.76% as Downgrade Keeps AI Financing Fears in Focus",
      "headlineKo": "다운그레이드로 인해 AI 금융에 대한 우려가 계속되면서 Broadcom 주가는 4.76% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ece2d7da08d49499c1689d05b5196f9382ff73e89df5f5c0b25426d137971ef9",
        "publishedAt": 1794853109,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "다운그레이드로 인해 AI 금융에 대한 우려가 계속되면서 Broadcom 주가는 4.76% 하락했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "378ca1b3e25d318d1118",
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
      "headline": "Why Micron Stock Keeps Going Down",
      "headlineKo": "마이크론 주식이 계속 하락하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b4fc0bfb529a47bf40935df139ace937d15e71d0930cae6cb19edec0776ed0b",
        "publishedAt": 1794852612,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 주식이 계속 하락하는 이유"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "4771956b7e0d4639b1b6",
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
      "headline": "Sandisk Is Splitting Its Stock 8-for-1. Here’s the Number I’d Check Before Buying.",
      "headlineKo": "Sandisk는 주식을 8대 1로 분할하고 있습니다. 구매하기 전에 확인하고 싶은 번호는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=678d0eac32e975779f5f6b735e8c4bbcc4122bb0ffb7ac2403428ba902456c9d",
        "publishedAt": 1794852302,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk는 주식을 8대 1로 분할하고 있습니다.",
        "구매하기 전에 확인하고 싶은 번호는 다음과 같습니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,416.59 -1.9% -145.08 DJI 51,608.17 -1.4% -739.38 NASDAQ 24,509.76 -2.5% -626.52 비트코인 $64,711.00 +0.1% +$95.63 SPCX $137.36 -1.3"
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 8.58%, $858,, $8,580. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8.58%, $858,, $8,580. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c2302659fb7507d38987",
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
      "headline": "Lumentum Stocks Sink 8.32% as Marvell Slide Shrinks Deal Value Below $660",
      "headlineKo": "Marvell Slide가 거래 가치를 660달러 이하로 줄임에 따라 Lumentum 주식은 8.32% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c689e0c37fd70b0ce019cd445bceea03c52390f15c07cd0ce0fc63a35a67bb6d",
        "publishedAt": 1794851555,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum Stocks Sink 8.32% as Marvell Slide Shrinks Deal Value Below $660",
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
      "id": "ae9d8fd1f4df1a6a8992",
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
      "headline": "Prediction: Nvidia Stock Will Beat the Market Over the Next 10 Years",
      "headlineKo": "예측: Nvidia 주식은 향후 10년 동안 시장을 이길 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6768914b85916447c838453ececc5d1dc95af699b865fb3e5df014f9578c7365",
        "publishedAt": 1794851461,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: Nvidia 주식은 향후 10년 동안 시장을 이길 것입니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,422.00 -1.8% -139.67 DJI 51,613.76 -1.4% -733.79 NASDAQ 24,55",
        "AI 수요는 여전히 급증하고 있으며 Nvidia의 상당한 무료 현금 흐름은 이러한 전환을 완화하는 데 도움이 될 것입니다.",
        "훌륭한 기업은 훌륭한 리더보다 오래 지속될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3.93%, 28%, 1.21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.93%, 28%, 1.21% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "49f01e62ebf7ae40d028",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arm Stocks Slide 6.72% as Nvidia CEO Search Keeps Rene Haas in Focus",
      "headlineKo": "Nvidia CEO Search가 Rene Haas에 계속 집중함에 따라 Arm 주식은 6.72% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=633c8270864934076fad96a0bc394efaed83d27591590b02481cda157000fdbb",
        "publishedAt": 1794851368,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm Stocks Slide 6.72% as Nvidia CEO Search Keeps Rene Haas in Focus",
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
      "id": "deed1a091c295391e142",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "NVDA",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Will Capture More Market Share Than Broadcom to End November as Nvidia’s Leadership Vacuum Persists",
      "headlineKo": "Nvidia의 리더십 공백이 지속됨에 따라 AMD는 11월 말까지 Broadcom보다 더 많은 시장 점유율을 차지할 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5db98f9eca8765c429c7bf4917e5cb92196b6c6f355e11363839eabdfc962583",
        "publishedAt": 1794851152,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia의 리더십 공백이 지속됨에 따라 AMD는 Broadcom보다 더 많은 시장 점유율을 확보하여 11월 말까지 확보할 것입니다 - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,406.50 −1.82% Dow Jones 51,549.60 −1.39% Nasdaq 100 27,211.00 −2.29% Russell 2000 2,740.92 −1.61% S&P 500 7,406.50 −1.82% 다우존스 51,549.60 −1.39% 나스닥 100 27,211.00 −2.29% 러셀 20",
        "© gene_wang / Flickr AMD( NASDAQ:AMD | AMD 가격 예측 )와 Broadcom( NASDAQ:AVGO ) 모두 기록적인 AI 분기를 기록했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 149.37%, 0.81%, $8.546 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 149.37%, 0.81%, $8.546 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f7064bae91ac9949e59e",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML",
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
      "headline": "ASML Plunged 17% Lower Over 3 Months: This Wall Street Desk Expects 88% Gains Over the Next 12",
      "headlineKo": "ASML은 3개월 동안 17% 하락했습니다: 이 월스트리트 데스크는 향후 12년 동안 88%의 상승을 예상합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a393b1b2b14b662b565f551549115a9414abfa713626b6fa1baa6c873a0737bf",
        "publishedAt": 1794851127,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML은 3개월 동안 17% 하락했습니다. 이 월스트리트 데스크는 다음 12~24/7 월스트리트 기간 동안 88%의 이익을 얻을 것으로 예상합니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,433.60 +0.15% Dow Jones 51,583.60 −0.06% Nasdaq 100 27,341.60 +0.42% Russell 2000 2,740.63 −0.07% S&P 500 7,433.60 +0.15% 다우존스 51,583.60 −0.06% 나스닥 100 27,341.60 +0.42% 러셀 20",
        "© Michael Vi / iStock Editorial via Getty Images ASML(NASDAQ:ASML | ASML 가격 예측)은 현재 $1,495.16에 거래되고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 17%, 88%, $1,495.16. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 17%, 88%, $1,495.16. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "048b9183f04bedf1ed95",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Midday, Nov. 16: Nasdaq Tumbles as Wall Street Braces for Nvidia Earnings and Bitcoin Slides",
      "headlineKo": "11월 16일 정오: 나스닥은 엔비디아 수익과 비트코인 ​​슬라이드에 대한 월스트리트의 버팀목이 되면서 폭락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=471920438a7fbb6fe753a495f31b8cba053f1f6c0d79c3966e2605f822c65028",
        "publishedAt": 1794851102,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "11월 16일 정오: 나스닥은 엔비디아 수익과 비트코인 ​​슬라이드에 대한 월스트리트의 버팀목이 되면서 폭락했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "5484c69d7689a4bb0f0d",
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
      "headline": "Why Micron Stock Dove Today",
      "headlineKo": "오늘 마이크론 주식이 급등한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0cddf5f4fa1017ce360639e5ee825583f07135191cc1e2fb1bb2d0998e08ff7d",
        "publishedAt": 1794851022,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 마이크론 주식이 급등한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,413.77 -2.0% -147.90 DJI 51,591.71 -1.4% -755.84 NASDAQ 24,519.22 -2.5% -617.06 비트코인 ​​$64,726.00 -0.",
        "AI 칩 기술에 대한 추가 수출 제한을 발표했습니다.",
        "이러한 조치는 회사의 메모리 칩에 대한 전반적인 수요를 감소시킬 수 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6.90%, 7.8%, 5.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6.90%, 7.8%, 5.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "103daf15b15299ae66b6",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Cathie Wood Adds Nvidia Stock Before Earnings While Selling Palantir",
      "headlineKo": "Cathie Wood는 Palantir를 판매하는 동안 수익을 내기 전에 Nvidia 주식을 추가합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=875f158fd55ce518430ae948c13c80fec10e7089d02013770220982c534fd7d3",
        "publishedAt": 1794850997,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cathie Wood는 Palantir를 판매하는 동안 수익을 내기 전에 Nvidia 주식을 추가합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "edf27dd9f9266c350e30",
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
      "headline": "Meta’s Prepayment Is Buying Oklo’s Nuclear Fuel for Up to Five Reactors",
      "headlineKo": "Meta의 선불로 최대 5개의 원자로에 대한 Oklo의 핵 연료를 구매하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ff51f6d4931c70fb076d8842a7614d5b706979d29000c8009956c6012451958",
        "publishedAt": 1794849844,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta의 선불로 최대 5개의 원자로에 대한 Oklo의 핵 연료 구매 | TIKR.com General Investing Meta의 선불은 최대 5개의 원자로에 대한 Oklo의 핵 연료를 구매하고 있습니다. Nikko Henson • 6분 읽기 검토자: David Hanson 마지막 업데이트",
        "Meta Platforms(META)는 Oklo가 계획하고 있는 1.2기가와트 규모의 오하이오 원자력 캠퍼스에 대한 연료 구매 자금 조달을 돕고 있으며 Centrus는 국내 우라늄 농축 확장을 위한 자금 지원을 통해 혜택을 받고 있습니다.",
        "Oklo 주가는 11월 13일까지 5번의 거래 세션에서 1.6% 상승해 23.92달러로 마감했으며, TIKR 컨센서스는 2028년까지 잉여 현금 흐름이 10억 3천만 달러 적자로 예상됩니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.6%, $23.92,, $1.03 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.6%, $23.92,, $1.03 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "734d390ec8c56ba318cc",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SNDK",
      "relatedTickers": [
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
      "headline": "Why Sandisk Stock Keeps Going Down",
      "headlineKo": "Sandisk 주식이 계속 하락하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=84fb3409f560dfbd79627871b0f12ffabf836310a566d0e5080a1b0fa9fc1484",
        "publishedAt": 1794849721,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk 주식이 계속 하락하는 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,416.59 -1.9% -145.08 DJI 51,608.17 -1.4% -739.38 NASDAQ 24,509.76 -2.5% -626.52 비트코인 ​​$64,711",
        "Nvidia의 CEO 사임으로 인한 여파에 대한 불확실성이 계속해서 AI 주식에 부담을 주고 있다고 Sandisk도 포함하고 있습니다.",
        "Nvidia(NVDA -4.12%) 낙진은 계속..."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.12%, 8.58%, 7.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.12%, 8.58%, 7.2% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9aaee0aaedcc3c0abf60",
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
      "headline": "AMD finalizes $8.2 billion World Labs acquisition, adds 'godmother of AI' as EVP and chief scientist",
      "headlineKo": "AMD, 82억 달러 규모의 World Labs 인수 마무리, EVP 겸 수석 과학자로 'AI의 대모' 추가",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67049a45a63042d7fc84b38044a98d81a0af5785a9ac75baf0fe91bf448f3752",
        "publishedAt": 1794849291,
        "collectedAt": 1794881750.7686634
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
        "이 기사는 AMD의 사업과 관련된 'AMD finalizes $8.2 billion World Labs acquisition, adds 'godmother of AI' as EVP and chief scientist' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "1f34b47f410f1761ec0b",
      "schemaVersion": 1,
      "eventType": "competitor_supply_contract",
      "eventLabel": "경쟁사 공급 계약",
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
      "headline": "Palantir Technologies (PLTR) Sees £330 Million NHS Contract Draw New UK Rivals",
      "headlineKo": "Palantir Technologies(PLTR), £3억 3천만 NHS 계약으로 새로운 영국 라이벌 확보",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a45ee3930b53f1bd80e180bfaaebe4f19a9ae79f894a772068d3531696ad9c7",
        "publishedAt": 1794849136,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir Technologies (PLTR) Sees £330 Million NHS Contract Draw New UK Rivals",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 경쟁사 수주 · 고객 점유 변화 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다.",
        "현재 캐시는 제목 또는 제한된 본문을 기반으로 하므로 세부 조건을 확정 사실로 저장하지 않습니다."
      ],
      "beginnerExplanation": [
        "경쟁사가 같은 고객에게 납품할 기회를 얻었다는 뜻입니다. 기존 회사 물량을 빼앗은 것인지, 고객이 공급처를 하나 더 늘린 것인지 확인해야 합니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
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
        "신규 공급사의 실제 물량",
        "기존 공급사 매출 비중",
        "고객의 이중 공급 전략"
      ]
    },
    {
      "id": "1acf5b9c3899d029370f",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Intel shares fall 6% as shareholders sue over October stock plunge",
      "headlineKo": "10월 주가 급락에 대한 주주들의 소송으로 인텔 주가는 6% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91f25af43cf77ea977569625dc1891982232a28a5ade7a7e167f135acde431a4",
        "publishedAt": 1794849000,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "10월 주가 급락에 대한 주주들의 소송으로 인텔 주가 6% 하락 | NASDAQ:INTC, XETRA:INL 무엇을 찾고 계십니까?",
        "회사 뉴스 일치하는 모든 회사 보기 일치하는 모든 뉴스 보기 Tech 작성자: Proactive 고지 사항 투자 조언 없음 이 콘텐츠 정보 편집 표준 및 정책 기사 공유 이 콘텐츠 정보 × Proactive 정보 Proactive 리드",
        "우리의 모든 콘텐츠는 경험이 풍부하고 자격을 갖춘 뉴스 저널리스트 팀에 의해 독립적으로 제작됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, $56.11, $3.55, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, $56.11, $3.55, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c277a6fbb1fda29cf002",
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
      "headline": "Micron Has $14.6 Billion in China-Linked Revenue. Are These New U.S. Chip Export Rules a Threat?",
      "headlineKo": "마이크론의 중국 관련 매출은 146억 달러입니다. 이러한 새로운 미국 칩 수출 규정이 위협입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2eb8b56ca200d526f9cf53c73c0ce59ec663356619ae16ec76c3873b143068ec",
        "publishedAt": 1794848828,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론의 중국 관련 매출은 146억 달러입니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,406.50 −1.82% Dow Jones 51,549.60 −1.39% Nasdaq 100 27,211.00 −2.29% Russell 2000 2,740.92 −1.61% S&P 500 7,406.50 −1.82% 다우존스 51,549.60 −1.39% 나스닥 100 27,211.00 −2.29% 러셀 20",
        "작성자: Rich Duprey 게시일: 2026년 11월 16일 오후 12:07(ET) · 3분 읽음 𝕏 f ⧉ 이 게시물에는 스폰서 및 계열사의 링크가 포함될 수 있으며 Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $14.6 Billion, $14.63 Billion, $14.63 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $14.6 Billion, $14.63 Billion, $14.63 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3d1efea95f419657c2fb",
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
      "headline": "Marvell Stock in Focus After New AI Data Center Deal With Penguin Solutions",
      "headlineKo": "Penguin 솔루션과 새로운 AI 데이터 센터 거래 후 Marvell 주식에 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95bc92f1d5672ab0f81cbcf455aaec9e9e22d6f71bd77ad5ae35120ae3f61089",
        "publishedAt": 1794848804,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Penguin 솔루션과 새로운 AI 데이터 센터 거래 후 Marvell 주식에 집중"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "1b178a1bf0b95a39e5b7",
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
      "headline": "Intel Faces a Shareholder Suit After a 29% Stock Drop",
      "headlineKo": "인텔, 주가 29% 하락 후 주주 소송 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e09634e8ee02bcc450394557670e1297c0d4a7ef7a9b42f72578552022d0b323",
        "publishedAt": 1794848006,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel Faces a Shareholder Suit After a 29% Stock Drop",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 INTC의 사업과 관련된 'Intel Faces a Shareholder Suit After a 29% Stock Drop' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "2de0bcef4572d6466e87",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple Is “Literally the Trade of the Year” Says Josh Brown, for a Very Simple Reason",
      "headlineKo": "조쉬 브라운(Josh Brown)은 애플이 \"말 그대로 올해의 거래\"라고 말했습니다. 아주 간단한 이유입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6a4362a03f178a7d70babf6fbd3fedc71df3dab7f273a7dd24a43638624b74ab",
        "publishedAt": 1794847755,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple은 매우 간단한 이유로 \"말 그대로 올해의 거래\"라고 Josh Brown이 말했습니다 | TIKR.com General Investing Apple은 \"말 그대로 올해의 거래\"라고 Josh Brown이 말했습니다. 매우 간단한 이유는 Gian Estrada입니다. • 4분 읽기 검토자:",
        "Apple의 자본 지출은 2026회계연도에 매출의 2% 미만인 90억 달러로 감소한 반면, 거대 기술 기업들은 AI 데이터 센터에 현금을 쏟아부었습니다.",
        "투자자들은 안전을 위해 38배의 미래 수익을 지불하고 있는데, 이는 Apple의 10년 최고치보다 훨씬 낮은 수준이며, 분석가들은 2027 회계연도에 EPS가 약 5% 증가할 것으로 예상합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $9.0 billion, 2%, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $9.0 billion, 2%, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7941ca96e5162afc4053",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "NVDA",
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
      "headline": "Tesla Targets 2029 Cybercab Production Start In Giga Berlin With $3.3B Investment: Report",
      "headlineKo": "Tesla, 33억 달러 투자로 2029년 Giga Berlin에서 Cybercab 생산 시작 목표: 보고서",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5432de1932108c4396a472ddf5c4de9a612c0ae5dd3f416ab5fa5437e8dac768",
        "publishedAt": 1794847569,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla는 독일에서 최대 100만 개의 사이버캡을 구축하기 위해 33억 달러를 투자한 것으로 알려졌습니다. AI 에이전트 Trending News 수익 전체 DIA 1.60% SPY 2.15% QQQ 2.78% Trending NVDA 4.55% TTWO 6.04% JPM 2.61% GLD 0.44% ASTS 11.47% BAC 2.45% SMMT 16.51% 후드 8.03% WFC 2.15",
        "Tesla는 33억 달러 투자로 2029년 Cybercab 생산 시작을 Giga Berlin에서 목표로 하고 있습니다. 보고서 Tesla는 Cybercab 로봇택스 백만 대 생산을 목표로 독일 기가팩토리에 추가 생산 시설을 건설할 계획입니다.",
        "Tesla Cybercabs는 2026년 4월 8일 수요일 오스틴의 Tesla Giga Texas 주차장에 줄지어 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $3.3, 1.60%, 2.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $3.3, 1.60%, 2.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2369c1d16f5c4c59d97a",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Update: Market Chatter: Palantir Technologies Faces UK Competition for NHS Data Contract",
      "headlineKo": "업데이트: 시장 잡담: Palantir Technologies, NHS 데이터 계약을 놓고 영국 경쟁에 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a73f19bd20ab9900ea8566172e30c7f9c4eaadb7bce60e44607ec34ad8b9509",
        "publishedAt": 1794847317,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Update: Market Chatter: Palantir Technologies Faces UK Competition for NHS Data Contract",
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
      "id": "61dea98f4b83b7b5b6b0",
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
      "headline": "Micron’s AI Memory Is Nearly Sold Out Through 2027 — That Could Be Its Biggest Risk",
      "headlineKo": "Micron의 AI 메모리는 2027년까지 거의 매진됩니다. 이것이 가장 큰 위험일 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0d0d6a85e827264eb7d3e3b7719f3fe1c5bb411420c19c69b534db1cb2d30d73",
        "publishedAt": 1794846971,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron의 AI 메모리는 2027년까지 거의 매진됩니다 - 이것이 가장 큰 위험일 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,406.50 −1.82% Dow Jones 51,549.60 −1.39% Nasdaq 100 27,211.00 −2.29% Russell 2000 2,740.92 −1.61% S&P 500 7,406.50 −1.82% 다우존스 51,549.60 −1.39% 나스닥 100 27,211.00 −2.29% 러셀 20",
        "사진과 같은 Micron Technology의 반도체 칩은 Elon Musk와 같은 업계 인사가 메모리 가격 책정에 대한 회사의 전략적 접근 방식을 강조함에 따라 컴퓨팅의 중요한 구성 요소로 남아 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $54.2 billion, $11.3 billion, 87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $54.2 billion, $11.3 billion, 87% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0e1015f97f442561e12e",
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
      "headline": "ARM's 50% Licensing Revenue Surge Signals Strong AI-Driven Demand",
      "headlineKo": "ARM의 50% 라이센싱 수익 급증은 강력한 AI 기반 수요를 나타냅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=643ace3edfe1b846fc23a6cc81b1918ec07d5549c5b0746809721ad1662e126e",
        "publishedAt": 1794846600,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ARM의 50% 라이센싱 수익 급증은 강력한 AI 기반 수요를 나타냅니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "6db2ae8f899ff9d1e0ab",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Kevin O’Leary Calls AI ‘the Number One Use of Capital in Our Economy.’ Voters Disagree. Here’s Why PWR Stock Doesn’t Need to Pick a Side.",
      "headlineKo": "Kevin O'Leary는 AI를 '우리 경제에서 가장 중요한 자본 활용'이라고 부릅니다. 유권자들은 이에 동의하지 않습니다. PWR 주식이 어느 한쪽을 선택할 필요가 없는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e909d9b4d57fe6f6d79c1fd8f111ac4472b4f483826d8099031ce4e93069c687",
        "publishedAt": 1794846155,
        "collectedAt": 1794881750.7686634
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
        "이 기사는 PWR의 사업과 관련된 'Kevin O’Leary Calls AI ‘the Number One Use of Capital in Our Economy.’ Voters Disagree. Here’s Why PWR Stock Doesn’t Need to Pick a Side.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "cc6ebc978cdfce294d27",
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
      "headline": "Google Parent to Take Part in $3 Billion in Prepaid Energy Deals",
      "headlineKo": "Google 모기업, 30억 달러 규모의 선불 에너지 거래에 참여",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3a3d51b782ab77759f71c30a7ba48d5317f8fa11b7336fe2dc5d0962d8ab390c",
        "publishedAt": 1794845416,
        "collectedAt": 1794881750.7686634
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
        "이 기사는 GOOGL의 사업과 관련된 'Google Parent to Take Part in $3 Billion in Prepaid Energy Deals' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "c5582ee7aec653f07d59",
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
      "headline": "Will Rising Operating Income Boost CEG's Long-Term Earnings Growth?",
      "headlineKo": "영업 이익 증가가 CEG의 장기적인 수익 성장을 촉진할 것인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95809f63af5628465201ea5339093d088b2af949c25aa1fe885aa08bf9001278",
        "publishedAt": 1794845400,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Will Rising Operating Income Boost CEG's Long-Term Earnings Growth?",
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
      "id": "164bee69a3a830ae00cb",
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
      "headline": "Something Is Changing at Amazon, and Investors Should Pay Attention",
      "headlineKo": "Amazon에서 뭔가 변화하고 있으며, 투자자들은 주의를 기울여야 합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cecfc530918362b9c1e759cd7db3b818b6c3159cfb098b7f0241cb7a6fc2a1b6",
        "publishedAt": 1794845022,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon에서 무언가 변화하고 있으며 투자자는 주의를 기울여야 합니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,406.50 −1.82% Dow Jones 51,558.60 −1.37% Nasdaq 100 27,222.30 −2.25% Russell 2000 2,740.92 −1.61% S&P 500 7,406.50 −1.82% 다우존스 51,558.60 −1.37% 나스닥 100 27,222.30 −2.25% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 39%, 15.87%, $264.94, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 39%, 15.87%, $264.94, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c93540536fea51e7182c",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "expectedHorizon": "단기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Micron Sinks 5% as Tighter US Chip Export Rules Deepen Memory Selloff",
      "headlineKo": "마이크론, 미국 칩 수출 규제 강화로 메모리 매도 심화로 5% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f65061d3b4cd26698fe9aac8761a0644d3482b789d9e6d88a6051fdc0204ac9d",
        "publishedAt": 1794844785,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론, 미국 칩 수출 규제 강화로 메모리 매도 심화로 5% 하락"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "9063e7107d7a901d8bcb",
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
      "headline": "Lucid Sinks 8% Despite $1.75 Billion Saudi Lifeline; Tesla Falls 3%, Rivian Dips",
      "headlineKo": "Lucid는 17억 5천만 달러 규모의 사우디 라이프라인에도 불구하고 8% 하락했습니다. 테슬라 하락 3%, 리비안 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8e5623d35860b33b07e601216247be68179c4a33ab1c79557aa9bb275f57dd4",
        "publishedAt": 1794844667,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lucid는 17억 5천만 달러 규모의 사우디 라이프라인에도 불구하고 8% 하락했습니다. Tesla 하락 3%, Rivian 하락 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,422.50 −1.61% Dow Jones 51,629.60 −1.24% Nasdaq 100 27,277.10 −2.05% Russell 2000 2,745.17 −1.46% S&P 500 7,422.50 −1.61% 다우존스 51,629.60 −1.24% 나스닥 100 27,277.10 −2.05% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8%, $1.75 Billion, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8%, $1.75 Billion, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b027713d6a1cdcc95008",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Intel stock falls after investors file class action lawsuit against the company",
      "headlineKo": "투자자들이 회사를 상대로 집단소송을 제기한 후 인텔 주가 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=812efd1de924e8908360fc6ffd23815f7b9a6cffee0191e7d2c50724e6bbfd55",
        "publishedAt": 1794844514,
        "collectedAt": 1794881750.7686634
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
        "이 기사는 INTC의 사업과 관련된 'Intel stock falls after investors file class action lawsuit against the company' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "75358690358a080da24a",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Salesforce Spent $32 Billion on Buybacks in 5 Years. Somehow, Its Share Count Still Rose",
      "headlineKo": "Salesforce는 5년 동안 자사주 매입에 320억 달러를 지출했습니다. 어쨌든 점유율은 여전히 ​​증가하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9e30b62016510485a972100142992de913bec15ca8250c62bf3ee0cd4ae1ac26",
        "publishedAt": 1794843348,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce는 5년 동안 자사주 매입에 320억 달러를 지출했습니다.",
        "어찌됐든 점유율은 여전히 ​​증가세 | TIKR.com 일반 투자 Salesforce는 5년 만에 자사주 매입에 320억 달러를 지출했습니다.",
        "어쨌든 점유율은 여전히 ​​상승세입니다. Roxanna Maglangit • 5분 읽기 검토자: Michael Douglass 마지막 업데이트: 2026년 11월 16일 Bianca Constantinescu의 Canva 이미지 주요 내용 Salesforce는 5년 동안 자사주 매입에 약 320억 달러를 지출했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $32 Billion, $32 billion, $14.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $32 Billion, $32 billion, $14.4 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3234d7982b41f3acbc8e",
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
      "headline": "SanDisk Stock Could Have Another Big Year. Here’s My 2027 Price Prediction",
      "headlineKo": "SanDisk 주식은 또 다른 큰 해를 맞이할 수 있습니다. 내 2027년 가격 예측은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fdf718ff125cc77264c50120a2d9105d8c606b4d8454fd0a6d04bf05873806e3",
        "publishedAt": 1794843198,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SanDisk 주식은 또 다른 큰 해를 맞이할 수 있습니다.",
        "내 2027년 가격 예측은 다음과 같습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,406.50 −1.82% Dow Jones 51,549.60 −1.39% Nasdaq 100 27,211.00 −2.29% Russell 2000 2,740.92 −1.61% S&P 500 7,406.50 −1.82% 다우존스 51,549.60 −1.39% 나스닥 100 27,211.00 −2.29% 러셀 20"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $11.03 billion, 377.9%, 85% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $11.03 billion, 377.9%, 85% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e7f4a39316703d14eb51",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Blackstone Digital Infrastructure stock surges on $5B AWS deal",
      "headlineKo": "50억 달러 규모의 AWS 거래로 Blackstone 디지털 인프라 주가 급등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73d658b5996f4caadbb73d44970239d3488b4e9d47461496d56262441882e639",
        "publishedAt": 1794843032,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Blackstone Digital Infrastructure stock surges on $5B AWS deal",
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
      "id": "bf1d71746a67ac3ca8d5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "AMD",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL",
        "PLTR"
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
      "headline": "Global GovTech Dual-Use Defense Platform Market Report 2026: Size and Forecast to 2030 | Capitalize on AI, cloud, and 15% CAGR with Microsoft, Palantir, Anduril, and BAE Systems",
      "headlineKo": "글로벌 GovTech 이중 용도 방어 플랫폼 시장 보고서 2026: 2030년 규모 및 예측 | Microsoft, Palantir, Anduril 및 BAE Systems를 통해 AI, 클라우드 및 15% CAGR을 활용하세요.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a96543bb068239839b93c8021f15a4ec72a6658c527c006b0196229df03f300b",
        "publishedAt": 1794842940,
        "collectedAt": 1794881750.7686634
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
        "이 기사는 PLTR의 사업과 관련된 'Global GovTech Dual-Use Defense Platform Market Report 2026: Size and Forecast to 2030 | Capitalize on AI, cloud, and 15% CAGR with Microsoft, Palantir, Anduril, and BAE Systems' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "a9fbdd816936a9594226",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "PLTR Raises 2026 Guidance as Q3 AI Demand Drives 96% Revenue Growth",
      "headlineKo": "PLTR, 3분기 AI 수요로 96% 매출 성장 이어가면서 2026년 지침 상향 조정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5e8032db887b11933c257ac994e4b2bc7484cf777c067114b424817e8874aa4",
        "publishedAt": 1794841800,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "PLTR, 3분기 AI 수요로 96% 매출 성장 이어가면서 2026년 지침 상향 조정"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "2489aff5a77a8d7d6e80",
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
      "headline": "Stock Market Today: Nasdaq-100 Sinks 1% as Nvidia Faces Its First Earnings Without Jensen Huang",
      "headlineKo": "오늘의 주식 시장: Nvidia가 Jensen Huang 없이 첫 수익을 내면서 Nasdaq-100은 1% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=19de83e061863c2f512ed5247a7d0b4e275f0b00268dcedc2772e42470e1dda6",
        "publishedAt": 1794841090,
        "collectedAt": 1794884116.7467601
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 주식 시장: Nvidia가 Jensen Huang 없이 첫 수익을 내면서 Nasdaq-100은 1% 하락했습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,429.60 +0.10% Dow Jones 51,528.10 −0.17% Nasdaq 100 27,359.70 +0.48% Russell 2000 2,739.93 −0.10% S&P 500 7,429.60 +0.10% 다우존스 51,528.10 −0.17% 나스닥 100 27,359.70 +0.48% 러셀 20",
        "© Spencer Platt / Getty Images News via Getty Images 칩 주식은 개장 전에 월스트리트를 하락세로 끌어내렸고 Nasdaq-100이 대부분의 히트를 치고 있었습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1%, 0.10%, 0.17% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1%, 0.10%, 0.17% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f5742506fd714da9c816",
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
      "headline": "Main Capital Partners Invests in TaskRay, Joining Cloud Coach and JustOn to Transform Customer Delivery on Salesforce",
      "headlineKo": "주요 자본 파트너는 TaskRay에 투자하고 Cloud Coach 및 JustOn에 합류하여 Salesforce에서 고객 제공을 혁신합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25b19d847998bef33b2aebaa5fa9b200bb5dcf6c772a7a3102c5ae87a9ce7229",
        "publishedAt": 1794840840,
        "collectedAt": 1794881750.7686634
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
        "이 기사는 CRM의 사업과 관련된 'Main Capital Partners Invests in TaskRay, Joining Cloud Coach and JustOn to Transform Customer Delivery on Salesforce' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b1d75394d9662c4c26a9",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Blackstone’s Data Center REIT Makes First Investment With $5B AWS Deal",
      "headlineKo": "Blackstone의 데이터 센터 REIT, 50억 달러 규모의 AWS 거래로 첫 투자",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0d34537bf1090897e22837583e95988070fd78fb36a5d342ab7afa0bab99a702",
        "publishedAt": 1794840763,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Blackstone의 데이터 센터 REIT, 50억 달러 규모의 AWS 거래로 첫 투자"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "e9db5583b6bca746d828",
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
      "headline": "Why Is Intel Facing a Shareholder Lawsuit Over Its PC Slowdown?",
      "headlineKo": "인텔이 PC 속도 저하로 인해 주주 소송에 직면한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee4bfdb8f7cbd919e682778194b3f0d46ea182f861837f77ec2c90e2efcc5aec",
        "publishedAt": 1794839611,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔이 PC 속도 저하로 인해 주주 소송에 직면한 이유는 무엇입니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "85e2e50150dff802d2d8",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR",
        "LITE",
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
      "headline": "Coherent Sinks 9%, Lumentum Down 8% as AI Hardware Stocks Slide on Nvidia Leadership Turmoil",
      "headlineKo": "Nvidia 리더십 혼란으로 인해 AI 하드웨어 주가가 하락하면서 Coherent는 9% 하락하고 Lumentum은 8% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ad731b274c1c63aab6cccd69bfc3d79c80f2956cfa22ef9da581ea1a46dd4e5",
        "publishedAt": 1794839554,
        "collectedAt": 1794884116.7467601
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 리더십 혼란으로 AI 하드웨어 주가 하락으로 Coherent 싱크 9%, Lumentum 8% 하락 | TIKR.com General Investing Coherent는 9% 하락, Lumentum은 Nvidia의 AI 하드웨어 주가 하락으로 8% 하락 리더십 혼란 David Hanson • 4분 r",
        "이러한 압력은 Nvidia의 임시 CEO인 Colette Kress가 회사의 거래를 통제할 것으로 예상된다는 보고서에서 나왔습니다.",
        "분석가들은 코히런트의 정규 EPS가 2027년 6월에 끝나는 회계연도에 한 달 전 추정치보다 거의 두 배인 10.41달러로 증가할 것으로 예상합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 9%, 8%, $10.41 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 9%, 8%, $10.41 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "de311b7b15c4e866cdd1",
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
      "headline": "Graid Technology Extends VROC(TM) to AMD EPYC(TM) Platforms, Expanding Choice in Enterprise RAID",
      "headlineKo": "Graid 기술은 VROC(TM)를 AMD EPYC(TM) 플랫폼으로 확장하여 엔터프라이즈 RAID의 선택 범위를 확대합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9bf8863ee7d30cd2363d166467b08ee179eb24d13781a658e49393c4ddfbda46",
        "publishedAt": 1794839520,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Graid 기술은 VROC(TM)를 AMD EPYC(TM) 플랫폼으로 확장하여 엔터프라이즈 RAID의 선택 범위를 확대합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "f72bc03d39aa469ef51e",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "MU",
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
      "headline": "Sandisk Sinks 8%, Micron Down 6% as Memory Selloff Deepens Before Nvidia Earnings",
      "headlineKo": "Nvidia 수익이 발생하기 전에 메모리 판매가 심화됨에 따라 Sandisk는 8%, Micron은 6% 하락",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b55a3296b5d2bcb81f06c8842f502722d6287589732a7e235c9dfd82a40afd5d",
        "publishedAt": 1794839508,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 수익이 발생하기 전에 메모리 판매가 심화됨에 따라 Sandisk는 8%, Micron은 6% 하락"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "c0e1588df90a238e6955",
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
      "headline": "Larry Ellison Has Lost $145 Billion in Net Worth Over the Past Year as Oracle Stock Fell 59% From Its Peak. Here's Why Oracle's Heavy Concentration in OpenAI Has Wall Street Nervous.",
      "headlineKo": "Larry Ellison은 Oracle 주가가 최고치에서 59% 하락하면서 지난해 순자산 1,450억 달러를 잃었습니다. Oracle이 OpenAI에 집중하는 것이 월스트리트를 불안하게 만드는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8a9416b8ad8dec6b1877b0ac4609a994635c1282ab227bea090b9f875a726eb",
        "publishedAt": 1794839340,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $145 Billion, 59%, $664 billion, 5.18%, 44%, 50%, 40%, $145 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 ORCL의 사업과 관련된 'Larry Ellison Has Lost $145 Billion in Net Worth Over the Past Year as Oracle Stock Fell 59% From Its Peak. Here's Why Oracle's Heavy Concentration in OpenAI Has Wall Street Nervous.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "693192507f8cfed02dba",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "WDC",
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
      "headline": "SanDisk Falls 7% as AI Chip Selloff Hits Memory Stocks Despite Evercore’s $2,500 Target; Micron and Western Digital Drop 6%",
      "headlineKo": "Evercore의 2,500달러 목표에도 불구하고 AI 칩 매도가 메모리 주식에 도달함에 따라 SanDisk는 7% 하락했습니다. 마이크론과 웨스턴 디지털 하락 6%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=778229e4140ff2594f1ba4ae1059feffe1fa9382a697e60958be71948894d903",
        "publishedAt": 1794838389,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Evercore의 2,500달러 목표에도 불구하고 AI 칩 매도가 메모리 주식에 도달함에 따라 SanDisk는 7% 하락했습니다. Micron 및 Western Digital Drop 6% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,433.60 +0.15% Dow Jones 51,583.60 −0.06% Nasdaq 100 27,341.60 +0.42% Russell 2000 2,740.63 −0.07% S&P 500 7,433.60 +0.15% 다우존스 51,583.60 −0.06% 나스닥 100 27,341.60 +0.42% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7%, $2,500, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7%, $2,500, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bc2167dd131740429f5b",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple (AAPL) Picks Core Foldable Glass Supplier For iPhone Duo",
      "headlineKo": "Apple(AAPL), iPhone Duo용 핵심 폴더블 유리 공급업체 선정",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6891e0e89f18517969a3a2f1c689c4bfdd117904a591a273aefc862e063fe230",
        "publishedAt": 1794838252,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple (AAPL) Picks Core Foldable Glass Supplier For iPhone Duo",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Apple (AAPL) Picks Core Foldable Glass Supplier For iPhone Duo' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "87bbb0a98755f2f04204",
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
      "headline": "GLW vs. ANET: Which AI Stock is the Smarter Investment Option Now?",
      "headlineKo": "GLW 대 ANET: 현재 어떤 AI 주식이 더 현명한 투자 옵션입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=827669dcab69fdf48d966ec6b7174ff3f90a7b2145c72157b8cd7f3879331114",
        "publishedAt": 1794838200,
        "collectedAt": 1794881750.7686634
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
        "이 기사는 ANET의 사업과 관련된 'GLW vs. ANET: Which AI Stock is the Smarter Investment Option Now?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b5b450a497428d789067",
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
      "headline": "Marvell and Penguin Solutions Collaborate to Address Data Center AI Memory and Accelerate Inference at Scale",
      "headlineKo": "Marvell과 Penguin 솔루션, 데이터 센터 AI 메모리 문제를 해결하고 대규모 추론 가속화를 위해 협력",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=255aa638f6bfc717f44ade9669bed5d88e53ad1cb83606a531bc0b932bec2c02",
        "publishedAt": 1794837600,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell and Penguin Solutions Collaborate to Address Data Center AI Memory and Accelerate Inference at Scale",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 MRVL의 사업과 관련된 'Marvell and Penguin Solutions Collaborate to Address Data Center AI Memory and Accelerate Inference at Scale' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "32452a9341b293c5647f",
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
      "headline": "Meta Plunged After Earnings in 2025 Too. Here’s What Buyers Got a Year Later",
      "headlineKo": "메타는 2025년에도 실적 후 급락. 1년 후 구매자가 얻은 정보는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d25520d91cac7bf0d016659b71a911781c01aca71d66e71be81eb2196ec103b0",
        "publishedAt": 1794836915,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타는 2025년에도 실적 후 급락. 1년 후 구매자가 얻은 정보는 다음과 같습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "6a348d3b6a82e91a4f05",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Broadcom Management Says AI Chip Revenue to Double to $115 Billion in 2027, Giving Bulls Plenty to Cheer",
      "headlineKo": "Broadcom 경영진은 AI 칩 매출이 2027년에 1,150억 달러로 두 배 증가하여 황소들의 환호를 받을 것이라고 밝혔습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3fc42bdb714089daa8045e10e112cf2704a26d5177047a64206f52d80cd42ff1",
        "publishedAt": 1794836736,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom 경영진은 AI 칩 매출이 2027년에 1,150억 달러로 두 배 증가하여 황소들의 환호를 받을 것이라고 밝혔습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "e2f836a90a356400a429",
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
      "headline": "Why Applied Materials (AMAT) International Revenue Trends Deserve Your Attention",
      "headlineKo": "Applied Materials(AMAT)의 국제 수익 동향에 주목해야 하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0dcba02a57bed6cae83d05ea097313e24c3fae6ae2e3bfef326cf9a7936cc8f9",
        "publishedAt": 1794834903,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Why Applied Materials (AMAT) International Revenue Trends Deserve Your Attention",
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
      "id": "c664e359c4da2b1cf4bd",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "GOOGL",
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
      "headline": "Musk: Nvidia’s Key Supply Deals Were “a Handshake With Jensen.” Now Google Is Begging for Capacity",
      "headlineKo": "머스크: 엔비디아의 주요 공급 계약은 \"젠슨과의 악수\"였습니다. 이제 Google은 용량을 구걸하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23eb038d25c3f71bf64508da4b27b2d241367d6893beef3b10c18dd1ebdf708b",
        "publishedAt": 1794831615,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "머스크: 엔비디아의 주요 공급 계약은 \"젠슨과의 악수\"였습니다. 이제 Google은 용량을 구걸하고 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "3d95f8417013f9999973",
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
      "headline": "If Phone Sales Keep Shrinking, What Happens To Your Qualcomm Stock?",
      "headlineKo": "전화 판매가 계속 줄어들면 Qualcomm 주식은 어떻게 되나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb7d26f11c3fada460f0ef2bf5c704494387a3f46d747ff47f6c6ef7edb8c248",
        "publishedAt": 1794829331,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "전화 판매가 계속 줄어들면 Qualcomm 주식은 어떻게 되나요?",
        "| Trefis Trefis 스토리라인 휴대폰 판매가 계속 줄어들면 Qualcomm 주식은 어떻게 되나요?",
        "2026년 11월 16일 · Trefis Team QCOM YTD +2.4% SPY YTD +11.5% QQQ YTD +11.1% QCOM 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내주세요."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.4%, 11.5%, 11.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.4%, 11.5%, 11.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1355dc098be9ec94162e",
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
      "headline": "What Has Changed About Owning Intel Stock?",
      "headlineKo": "인텔 주식 소유에 있어 무엇이 바뀌었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb0ef93d4a3489af2b50fbdc395a54a92a9ef44ade7e79cd4f95555053812e3f",
        "publishedAt": 1794829331,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔 주식 소유에 있어 무엇이 바뀌었나요?",
        "| Trefis Trefis 스토리라인 인텔 주식 소유에 있어 무엇이 바뀌었나요?",
        "2026년 11월 16일 · 작성자 Trefis Team INTC YTD +61.7% SPY YTD +11.5% QQQ YTD +11.1% INTC 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 61.7%, 11.5%, 11.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "INTC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "INTC에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 61.7%, 11.5%, 11.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "207e1058ce45bf64a2f1",
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
      "headline": "What Is Micron Building That Investors Should Watch?",
      "headlineKo": "투자자들이 주목해야 할 마이크론 빌딩은?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e94800c4ff77fb6952704d8dec35c17ac394e982a7b4e34004ef50d44a97d6cf",
        "publishedAt": 1794829331,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "투자자들이 주목해야 할 마이크론 빌딩은?",
        "| 트레피스 트레피스 스토리라인 투자자들이 주목해야 할 마이크론 빌딩은 무엇일까?",
        "2026년 11월 16일 · Trefis 팀 MU YTD +172.9% SPY YTD +11.5% QQQ YTD +11.1% MU 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 172.9%, 11.5%, 11.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 172.9%, 11.5%, 11.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "72a777659b1fa9078597",
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
      "headline": "Intel Faces Lawsuit After 29% Stock Crash. Investors Allege Fraud.",
      "headlineKo": "인텔, 주가 29% 폭락 후 소송 직면. 투자자들은 사기를 주장합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b51357d4dc5cca8cf298a596c0fa7f66fea296d1eb2db6c609d0182844079c69",
        "publishedAt": 1794829152,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "인텔, 주가 29% 폭락 후 소송 직면.",
        "지난 9월 중국 항저우에서 열린 글로벌 디지털 무역 박람회에서 인텔 부스를 찾은 방문객들.",
        "Getty Images 인텔은 약 1,400억 달러의 손실을 입힌 주가 폭락 이전에 개인용 컴퓨터 사업에 대해 투자자들을 오도한 칩 제조업체와 두 명의 고위 임원을 비난하는 주주 집단 소송 제안에 직면해 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 29%, $140 billion, 28.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 29%, $140 billion, 28.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0684c3a8bd7fe1f09932",
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
      "headline": "Intel faces major lawsuit after $140 billion stock wipeout",
      "headlineKo": "인텔, 1400억 달러 규모 주식 전락 후 대규모 소송 직면",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e52d376e5d52cfdc41fd728522053f4919924446dea0321a2fa8b9f781a0724",
        "publishedAt": 1794829108,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Intel faces major lawsuit after $140 billion stock wipeout",
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
      "id": "33f1faffedfe64d4306a",
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
      "headline": "US Equity Investors to Monitor Anthropic's IPO, Nvidia's Quarterly Results, Fed Chair Kevin Warsh's Policy Lean This Week",
      "headlineKo": "미국 주식 투자자들은 Anthropic의 IPO, Nvidia의 분기별 실적, 이번 주 Kevin Warsh Fed 의장의 린 정책을 모니터링합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=854e4466a129d027bf3654b10ada6e9033e989b18f3eb0bed95610ccca36abe1",
        "publishedAt": 1794828778,
        "collectedAt": 1794881750.7686634
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
        "이 기사는 NVDA의 사업과 관련된 'US Equity Investors to Monitor Anthropic's IPO, Nvidia's Quarterly Results, Fed Chair Kevin Warsh's Policy Lean This Week' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "edbdba7bc0d3739b0d93",
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
      "headline": "Is Alphabet Stock Cheap Right Now?",
      "headlineKo": "알파벳 주식은 지금 저렴합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b7047acf4f1cd9e8a581b6200295efd5f3e39c0078e4c4b389cf09893d27d8b",
        "publishedAt": 1794828482,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,561.67 -0.4% -30.73 DJI 52,347.55 +0.1% +50.46 NASDAQ 25,136.27 -0.9% -229.82 비트코인 $64,109.00 -2.3% -$1,531.15 SPCX $139.11 -0.",
        "알파벳은 주가수익률 기준으로 '매그니피센트 세븐' 주식 중 가장 저렴합니다.",
        "Alphabet ( GOOG -0.96% ) ( GOOGL -0.98% ) 11월 현재 거의 6% 하락한 최고의 해는 아니었습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.96%, 0.98%, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.96%, 0.98%, 6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "54811efec2b7023fc659",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMZN",
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
      "headline": "US Administration Plans AI National Champions Programme Including Nvidia, Amazon and Microsoft, WSJ Reports",
      "headlineKo": "미국 행정부, Nvidia, Amazon 및 Microsoft를 포함한 AI 국가 챔피언 프로그램 계획, WSJ 보고서",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f9213bcdfc5e66bd4e08245ea29794c715aed1792770021d0082883a8217d14c",
        "publishedAt": 1794827247,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "미국 행정부 계획 Nvidia, Amazon 및 Microsoft, WSJ를 포함한 AI 국가 챔피언 프로그램 보고서 보드: 인용문: 즐겨찾기 인기 모니터 무버 레벨 2 뉴스 메뉴 보드 주식 상품 외환 암호화폐 라운지 어드밴스",
        "시작하기 미국 행정부 계획 Nvidia, Amazon 및 Microsoft를 포함한 AI 국가 챔피언 프로그램, WSJ 보고서 Fiona Craig NASDAQ:NVDA NASDAQ:AMZN NASDAQ:MSFT NASDAQ:OAI NASDAQ:ANT 최신 뉴스 2026년 11월 16일 오전 6:07 선호 항목으로 추가",
        "고려 중인 회사로는 Nvidia(NASDAQ:NVDA), Amazon(NASDAQ:AMZN), Microsoft(NASDAQ:MSFT), OpenAI(NASDAQ:OAI) 및 Anthropic(NASDAQ:ANT)이 포함된 것으로 알려졌습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $64,600 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $64,600 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ea68e532ca68c7862ab8",
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
      "headline": "A Tesla Merger Could Fast-Track SpaceX Into the S&P 500. Index Funds Would Have to Buy",
      "headlineKo": "Tesla 합병은 SpaceX를 S&P 500으로 빠르게 진입시킬 수 있습니다. 인덱스 펀드는 매수해야 할 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=707bf57b9f6fe03f3f1a7e818f16a4f039225c5b27dba255411cbaae832906c2",
        "publishedAt": 1794825890,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla 합병은 SpaceX를 S&P 500으로 빠르게 진입시킬 수 있습니다.",
        "인덱스 펀드를 사야 할 것 | TIKR.com General Tesla 합병 투자로 SpaceX가 S&P 500에 편입될 수 있습니다.",
        "인덱스 펀드는 Wiltone Asuncion을 구매해야 합니다. • 6분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 16일 @U.S."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $4.4 billion, $100 billion, $49 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4.4 billion, $100 billion, $49 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1c015dbb5105e2ed156c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
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
      "headline": "Advanced Micro Devices vs. Broadcom: One Stock Has a $27 Billion Advantage Investors Shouldn't Ignore",
      "headlineKo": "Advanced Micro Devices 대 Broadcom: 하나의 주식에는 270억 달러의 이점이 있습니다. 투자자는 무시해서는 안 됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd240e1543f7fef0bb1af526ee1af5eb689ac415ffcb68feff3bf26711e2b5d3",
        "publishedAt": 1794825302,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom: 한 주식에는 270억 달러의 이점이 있습니다. 투자자는 무시해서는 안 됩니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,561.67 -0.4% -30.73 DJI 52,347.55 +0.1% +50.46 NASDAQ 2",
        "Broadcom은 다양한 네트워킹 하드웨어 및 엔터프라이즈 소프트웨어 포트폴리오를 활용하여 높은 순마진과 현금 흐름을 창출합니다.",
        "Broadcom은 더 낮은 수익과 판매 배수로 거래되는 반면, AMD는 향후 시장 점유율 상승에 대한 기대를 반영하여 프리미엄을 요구합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.75%, 4.76%, 0.17% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8.75%, 4.76%, 0.17% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ab34873f91349da6a1cf",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "headline": "Anthropic’s Lock-Ups Free “Nearly 40% of the Deal” on Day One. That’s a Big Risk for Alphabet and Amazon",
      "headlineKo": "Anthropic의 Lock-Up은 첫날에 \"거래의 거의 40%\"를 무료로 제공합니다. 그것은 Alphabet과 Amazon에 큰 위험입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ff84d3851b9a24e07fb1914cecbd42f1267d72079d0122ff97cc37c58815679",
        "publishedAt": 1794824712,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Anthropic의 Lock-Up은 첫날에 \"거래의 거의 40%\"를 무료로 제공합니다. 그것은 Alphabet과 Amazon에 큰 위험입니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "c93314b7eb02a57e740b",
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
      "headline": "Italian regulator fines Meta $887m over mobile photo consent",
      "headlineKo": "이탈리아 규제 당국, 모바일 사진 동의에 대해 Meta에 8억 8700만 달러 벌금 부과",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2dde471619000e9eeefbf392ac734fbcbe69a002048c2b4b19bf0462fc257a07",
        "publishedAt": 1794824347,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Italian regulator fines Meta $887m over mobile photo consent",
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
      "id": "e845905f71b692556cda",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "“Big Short” Investor: Big Tech Could Return to “Positive Cash Flow” in 2027. Meta Gains Most",
      "headlineKo": "\"빅 숏\" 투자자: 빅 테크는 2027년에 \"플러스 현금 흐름\"으로 돌아갈 수 있습니다. 메타가 가장 큰 이익을 얻습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=67e59bc0f24bef7f2d0f115b9c655aa91ea2e71398e3b5e5a6ab856dae4c0a0b",
        "publishedAt": 1794824118,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 43%, 39%, 34%, 27%, $48.0 billion, $59 billion, 50%, $43.0 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 META의 사업과 관련된 '“Big Short” Investor: Big Tech Could Return to “Positive Cash Flow” in 2027. Meta Gains Most' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "7b9f7ff0d5248a202164",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Sandisk Splits Its Stock 8-for-1 on Nov. 19. Flash Memory Prices Still Matter More Than the Share Count.",
      "headlineKo": "Sandisk는 11월 19일에 주식을 8대 1로 분할합니다. 플래시 메모리 가격은 여전히 ​​주식 수보다 더 중요합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48d932537e4d31d717f89ea9afd0853924a84b82f959cc79d05e0b0c6dc458cf",
        "publishedAt": 1794822182,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk는 11월에 주식을 8대 1로 분할합니다.",
        "플래시 메모리 가격은 여전히 ​​공유수보다 더 중요합니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,561.67 -0.4% -30.73 DJI 52,347.55 +0.1% +50.46 NASDAQ 25,136.27 -0.9% -229.82 비트코인 $64,109.00 -2.3% -$1,531.15 SPCX $139.11 -0."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, 378%, $12.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10%, 378%, $12.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "093be51d310bf4f037d2",
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
      "headline": "Nvidia Earnings Could Set The Tone For Bitcoin, MSTR: Here’s What Retail Traders Are Watching",
      "headlineKo": "Nvidia 수익은 Bitcoin, MSTR의 분위기를 설정할 수 있습니다: 소매 거래자들이 보고 있는 내용은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=485f47181853c908009a3905c3da0898664e62194cf9a0109180c386bcbb50cb",
        "publishedAt": 1794822053,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 수익은 Bitcoin, MSTR의 분위기를 설정할 수 있습니다: 소매 거래자들이 보고 있는 내용은 다음과 같습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "f8ce628334f05236b390",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Market Chatter: Micron, Samsung, SK Hynix Fail to Get DRAM Price-Fixing Lawsuit Dismissed",
      "headlineKo": "시장 잡담: 마이크론, 삼성, SK 하이닉스, DRAM 가격 담합 소송 기각 실패",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ea7ff9fb634f80d44fbe5453c70288e61536ec0805fd69212c4e8aafc51a4a4",
        "publishedAt": 1794820320,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "시장 잡담: 마이크론, 삼성, SK 하이닉스, DRAM 가격 담합 소송 기각 실패"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "0152278065590017d545",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Walmart, Target, Amazon, Nvidia, Micron and Alphabet are part of Zacks Earnings Preview",
      "headlineKo": "Walmart, Target, Amazon, Nvidia, Micron 및 Alphabet은 Zacks Earnings Preview의 일부입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=454b863b39b5843fe2b731296aa4de6d806014d8fc5b0df5e0c3846e6dec4a4e",
        "publishedAt": 1794813960,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Walmart, Target, Amazon, Nvidia, Micron 및 Alphabet은 Zacks Earnings Preview의 일부입니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "8192ea910bbb8d3a8248",
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
      "headline": "Michael Burry's Puts on the Nasdaq-100 Run to April 2027. I'm Not Following Him.",
      "headlineKo": "Michael Burry는 2027년 4월까지 Nasdaq-100 지수를 유지할 것이라고 밝혔습니다. 저는 그를 따르지 않습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b5fbbf2a52d4b4682074a95f99b6f457c4c18bb96e5b5ee0b46cce7b30c5b8cf",
        "publishedAt": 1794804422,
        "collectedAt": 1794884116.7467601
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이클 버리(Michael Burry)는 나스닥 100 지수를 2027년 4월까지로 예상합니다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,418.04 -1.9% -143.63 DJI 51,610.49 -1.4% -737.06 NASDAQ 24,534.06 -2.4% -602.21 비트코인 $65,027.00 +0.5% +$326.14 SPCX $138.96 -0.",
        "Invesco QQQ Trust는 10월 1일 최고치보다 약 10% 낮은 수준에 머물고 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.9%, 1.4%, 2.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.9%, 1.4%, 2.4% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f7e9340a8c79bbd3160a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Western Digital Corp. (WDC) Faces Growing AI Spending Concerns After 17% Selloff",
      "headlineKo": "Western Digital Corp.(WDC), 17% 매도 후 AI 지출 우려 증가",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3809d1f0eaaca61ecbb75b201a0880988507ab3649e7441b806c79873facfae1",
        "publishedAt": 1794798168,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital Corp. (WDC) Faces Growing AI Spending Concerns After 17% Selloff",
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
      "id": "f77e0df2e77dddd4c998",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "AVGO",
        "LITE",
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
      "headline": "Marvell’s Trillion-Dollar Target",
      "headlineKo": "Marvell의 수조 달러 목표",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e7b9d4be69140363f7f827ad1fcb1c798bf60be17ab934c4ec283261e6d3a7a",
        "publishedAt": 1794788402,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell의 수조 달러 목표 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,422.00 -1.8% -139.67 DJI 51,613.76 -1.4% -733.79 NASDAQ 24,553.00 -2.3% -583.27 비트코인 ​​$64,852.0",
        "Lumentum이 강력한 Broadcom과의 경쟁에서 더 나은 결과를 얻는 데 어떻게 도움이 됩니까?",
        "거래 조건과 이것이 투자자에게 의미하는 바."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1 trillion, $69 billion, $61 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1 trillion, $69 billion, $61 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7393a89d049e048e4bdb",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia Rival’s CEO on TSMC: “I Would Buy That Stock Every Day of the Week”",
      "headlineKo": "TSMC의 Nvidia Rival CEO: “나는 그 주식을 매주 매일 사고 싶습니다”",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b2c440a0d82812c2cceeb0a9631e38ed603c520785148cd07064298d7e0336c",
        "publishedAt": 1794765596,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSMC의 Nvidia Rival CEO: “나는 그 주식을 매주 매일 사고 싶습니다” | TIKR.com 일반 투자 Nvidia Rival의 TSMC CEO: “나는 그 주식을 매주 매일 구매할 것입니다” Gian Estrada • 4분 읽기 검토자: David Hanson 마지막 u",
        "TSMC는 5년 평균보다 낮은 16.5배의 미래 수익으로 거래되고 있으며 주요 위험은 여러 대형 고객에 대한 AI 지출 둔화입니다.",
        "Taiwan Semiconductor Manufacturing(TSM)은 Nvidia(NVDA)와 Nvidia가 Jensen Huang의 사임을 발표한 후 인수한 경쟁 투자자들을 위한 칩을 만듭니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 59.7%, $586.9 billion, $17.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 59.7%, $586.9 billion, $17.8 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a96aefb154e89d8bc77d",
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
        "url": "https://www.sec.gov/Archives/edgar/data/106040/000119312526463554/d162653d8k.htm",
        "publishedAt": 1794754800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "WDC가 2026-11-16에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 중요 계약 체결·변경 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 계약·수주 · 인수·매각"
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
      "id": "7b6f6109aa20f13b8e0b",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126044139/ef20085745_8k.htm",
        "publishedAt": 1794754800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "VST가 2026-11-16에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 규정 FD 공개"
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
      "id": "890f884979a036e93e13",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "MOD",
      "relatedTickers": [
        "MOD"
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
      "headline": "MOD SEC Form 8-K filed",
      "headlineKo": "MOD SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/67347/000110465926128553/tm2629849d1_8k.htm",
        "publishedAt": 1794754800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MOD가 2026-11-16에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "MOD",
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
      "id": "b224d5d92f242e6ad732",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Applied Materials Beats and Raises, But Investors Stay Unconvinced",
      "headlineKo": "어플라이드 머티어리얼즈는 상승하고 상승했지만 투자자들은 확신하지 못했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=131e9113558ec953019de842cf804356beaf6a4bc2aecb7b6fbddeba1ada1407",
        "publishedAt": 1794753600,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티어리얼즈는 상승하고 상승했지만 투자자들은 확신하지 못했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "87353c9d4962b7064be5",
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
      "headline": "Earnings Guidance Could Be A Game Changer For Vistra (VST)",
      "headlineKo": "수익 안내는 Vistra(VST)의 게임 체인저가 될 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=093ea7368b19730e41e9a9d2ca44ebe685425f7dac7412089ad1cc855f31f00e",
        "publishedAt": 1794719473,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Earnings Guidance Could Be A Game Changer For Vistra (VST)",
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
      "id": "34eb6a3aa1444869771d",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Bernstein Says Qualcomm’s “Margin Outlook Is Lousy.” Is the 6% Slide a Buying Chance?",
      "headlineKo": "Bernstein은 Qualcomm의 \"마진 전망이 형편없다\"고 말합니다. 6% 슬라이드가 매수 기회인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe5bdb9b2ab222ac2639d0dbec55ec7c7095ba514f5ca347af1f286a5ee3e4b9",
        "publishedAt": 1794717201,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Bernstein은 Qualcomm의 \"마진 전망이 형편없다\"고 말합니다. 6% 슬라이드가 매수 기회인가요?",
        "| TIKR.com General Investing Bernstein은 Qualcomm의 \"마진 전망이 형편없다\"고 말합니다. 6% 슬라이드가 매수 기회인가요?",
        "Rexielyn Diaz • 5분 읽기 검토자: David Hanson 마지막 업데이트: 2026년 11월 15일 studioroman 및 Pexels의 Thirdman(Canva 주요 내용) Qualcomm의 휴대폰 수익은 26% 감소한 51억 4천만 달러로 추정치가 누락되었습니다. 자동차 수익은 26% 감소했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 26%, $5.14 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, 26%, $5.14 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "90ae148862d5d59d56e8",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Marvell CEO Defends $115 Billion Lumentum Deal: “Sometimes Being Unorthodox” Pays Off",
      "headlineKo": "Marvell CEO, 1,150억 달러 규모의 Lumentum 거래 옹호: “때때로 비정통적”이 성과를 거두다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ea7b989306f9e5017e485a1e75682f5de954f4cfb0d298145bc468ddb16fcedd",
        "publishedAt": 1794716976,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell CEO, 1,150억 달러 규모의 Lumentum 거래 옹호: \"때때로 비정통적\"이 성과를 거두다 | TIKR.com General Investing Marvell CEO, 1,150억 달러 규모의 Lumentum 거래 방어: \"때때로 비정통적\"이 Rexielyn Diaz에게 이익을 안겨줌 • 5분 읽기 검토됨",
        "Marvell의 CEO는 Fox Business에서 이 거래가 더 큰 위험을 수반하며 정통적이지 않은 것이 \"큰 수익\"을 얻는 방법이라고 말했습니다. Marvell은 3분기 매출 31억 5천만 달러를 중간 지점으로 유지했습니다. 이는 약 52%의 성장을 의미하며,",
        "12월 1일 보고서에는 독립 사업체가 2028년 상반기로 예상되는 마감일까지 주식을 보유할 수 있음을 보여야 합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $115 Billion, $115 billion, $3.15 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $115 Billion, $115 billion, $3.15 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "aff754608d162d02fc12",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SPY",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "He Thinks His $200,000 S&P 500 401(k) Spreads His AI Risk. Two Alphabet Share Classes Put $10,380 in One Company. A 20% Drop Could Cost Him $2,076",
      "headlineKo": "그는 자신의 200,000달러 S&P 500 401(k)가 AI 위험을 확산시킨다고 생각합니다. 두 개의 알파벳 주식 클래스가 한 회사에 $10,380를 투자했습니다. 20% 하락하면 $2,076의 비용이 발생할 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f108095735710df780cee5d95409e144ce4f3de40be2a78e4c0e20c0bb6ab9a8",
        "publishedAt": 1794697426,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "그는 자신의 200,000달러 S&P 500 401(k)가 AI 위험을 확산시킨다고 생각합니다. 두 개의 알파벳 주식 클래스가 한 회사에 $10,380를 투자했습니다. 20% 하락하면 $2,076의 비용이 발생할 수 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "3dc458ff08305ceef8c0",
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
      "headline": "“Being Prudent”: TSMC Stock Has Surged 41% in a Year. Is It Too Late to Buy?",
      "headlineKo": "\"신중함\": TSMC 주식은 1년 만에 41% 급등했습니다. 구매하기에는 너무 늦었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7dc3e9387df243b4e3b1fac44783ea6562534f91ac24ac24050b69da3a55306e",
        "publishedAt": 1794695454,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "\"신중함\": TSMC 주식은 1년 만에 41% 급등했습니다.",
        "| TIKR.com 일반 투자 \"신중함\": TSMC 주식은 1년 만에 41% 급등했습니다.",
        "Nikko Henson • 4분 읽기 검토자: David Hanson 최종 업데이트 2026년 11월 14일 PhonlamaiPhoto의 @Kittipong Jirasukhanont Canva를 통한 Canva 이미지, PhonlamaiPhoto의 @Kittipong Jiraukhanont Canva를 통한 Photo의 이미지 핵심 사항 Taiwan Semicondu"
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 41%, $398.73, 18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 41%, $398.73, 18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "048bba1084a07c6a0613",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML",
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
      "headline": "ASML vs. NVIDIA: Which Technology Stock Is a Better Buy for 2027?",
      "headlineKo": "ASML 대 NVIDIA: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a652f9ff4264cf0c0451a92ef62c2ddde9638eaa4effc94da3629e4648b211c",
        "publishedAt": 1794694442,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVIDIA: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,561.67 -0.4% -30.73 DJI 52,347.55 +0.1% +50.46 NASDAQ 25,136.27 -0.9% -229.82 비트코인 $64,109.00 -2.3% -$1,531.15 SPCX $139.11 -0.",
        "Nvidia는 인공 지능과 가속 컴퓨팅을 지원하는 고성능 그래픽 프로세서 시장을 장악하고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.13%, 2.01%, $43.6 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.13%, 2.01%, $43.6 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3a1cd9fb3eadcc3fbedc",
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
      "headline": "Arista Stock Gained 15% in a Week as AI Stocks Bounced Back: Take Profits, or Buy More?",
      "headlineKo": "AI 주식이 반등하면서 Arista 주식은 일주일 만에 15% 상승했습니다. 이익을 얻을 것인가, 아니면 더 많이 매수할 것인가?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa5e9df7c9edaa3593a83e8ecf6948aa4d1881dda205c2946fc9c1c43eda0212",
        "publishedAt": 1794686994,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 주식이 반등하면서 Arista 주식은 일주일 만에 15% 상승했습니다. 이익을 얻을 것인가, 아니면 더 많이 매수할 것인가?",
        "| TIKR.com 일반 투자 Arista 주식은 AI 주식이 반등하면서 일주일 만에 15% 상승했습니다. 이익을 얻거나 더 많이 매수하시겠습니까?",
        "Nikko Henson • 4분 읽기 검토자: David Hanson 최종 업데이트 2026년 11월 14일 @Cnv Studio from CnvStudio's Images via Canva 주요 내용 Arista Networks(ANET)는 11월 13일까지 5번의 거래 세션에서 15.5% 수익을 올려 $197로 마감했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 15%, 15.5%, $197.29 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 15%, 15.5%, $197.29 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "61029359415450de3acd",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
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
      "headline": "Astera Labs vs. Arm: Which Technology Stock Is a Better Buy for 2027?",
      "headlineKo": "Astera Labs vs. Arm: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b704d7f9e43b187031eafc6ac533b40fd9991afc03548f042e2c946f4e3f8f7",
        "publishedAt": 1794686042,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm: 2027년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,561.67 -0.4% -30.73 DJI 52,347.55 +0.1% +50.46 NASDAQ 25,136.27 -0.9% -229.82 비트코인 $64,109.00 -2.3% -$1,531.15 SPCX $139.11 -0.",
        "Arm은 마진이 높은 아키텍처 라이선스 및 로열티 모델을 통해 글로벌 반도체 생태계에서 지배적인 위치를 유지하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 2.62%, 4.63%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.62%, 4.63%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c5e6a4a602060eb3a551",
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
      "headline": "Oracle (ORCL): Can Surging Cloud Revenue Outpace Its Financing Burden?",
      "headlineKo": "Oracle(ORCL): 급증하는 클라우드 수익이 자금 조달 부담을 능가할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ca6b1f120813af1ea2a4340ac2ab8d99fa697483b10ee1438e9d1b7837f02f4",
        "publishedAt": 1794684582,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Oracle(ORCL): 급증하는 클라우드 수익이 자금 조달 부담을 능가할 수 있습니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "1c03bd7b75bfbbef4408",
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
      "headline": "Marvell Technology (MRVL): Can Its $20 Billion Revenue Outlook Justify the Valuation?",
      "headlineKo": "Marvell Technology(MRVL): 200억 달러 매출 전망이 가치 평가를 정당화할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f6afc3fa9e73fccb348e294611a8915f7a09f72223604771175bb32faba2eb0d",
        "publishedAt": 1794684333,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology(MRVL): 200억 달러 매출 전망이 가치 평가를 정당화할 수 있습니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "970425ee8c73d961bcd0",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
        "ASML",
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
      "headline": "Arm vs. ASML: Which Technology Stock Is a Better Buy for 2027?",
      "headlineKo": "Arm 대 ASML: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da3e6f96f225f82e78985b8c0203ab09a89fd2ec24388158e961e649684e7e09",
        "publishedAt": 1794676921,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML: 2027년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,561.67 -0.4% -30.73 DJI 52,347.55 +0.1% +50.46 NASDAQ 25,136.27 -0.9% -229.82 비트코인 $64,109.00 -2.3% -$1,531.15 SPCX $139.11 -0.",
        "ASML은 세계에서 가장 강력한 반도체를 제조하는 데 필요한 고급 리소그래피 장비에 대한 독점권을 유지하고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.63%, 0.13%, $4.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.63%, 0.13%, $4.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ed406e1f29281e420922",
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
      "headline": "Vistra Has Disappointed for a Year: Why Siebert Williams Shank Still Sees 50% Upside",
      "headlineKo": "Vistra는 1년 동안 실망했습니다: Siebert Williams Shank가 여전히 50% 상승 여력을 보이는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=260a66d542789f5534cd567469b0e1d3d6f4d601a47e753e62bc8e4e86dab52c",
        "publishedAt": 1794653192,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Vistra는 1년 동안 실망스러웠습니다: Siebert Williams Shank가 여전히 50% 상승 여력을 보이는 이유 | TIKR.com General Investing Vistra는 1년 동안 실망했습니다: Siebert Williams Shank가 여전히 50% 상승 여력을 보이는 이유 Gian Estrada • 4분 읽기 검토자:",
        "텍사스의 전력 가격 하락이 먼저 타격을 입혔고, 그 다음에는 데이터 센터 유예 캠페인을 벌인 주지사 선거가 타격을 입었습니다.",
        "Vistra의 2027년 전망은 유지되었지만 텍사스 정책이 불안정한 동안 202달러는 현재보다 훨씬 높은 배수가 필요합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, 25%, $202 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 50%, 25%, $202 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "94645a33c24772006848",
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
      "headline": "GE Vernova Has Ripped 44% in a Year: Is It Too Late to Buy?",
      "headlineKo": "GE Vernova는 1년 만에 44%의 수익을 올렸습니다: 구매하기에는 너무 늦었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf6f58072d95bb445493f695e1ee29c44caf60c1f5962e5e1ff6100078a40f38",
        "publishedAt": 1794644709,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GE Vernova는 1년 만에 44%의 수익을 올렸습니다: 구매하기에는 너무 늦었나요?",
        "| TIKR.com 일반 투자 GE Vernova는 1년 만에 44%의 수익을 올렸습니다: 매수하기에는 너무 늦었나요?",
        "Rexielyn Diaz • 5분 읽기 검토자: David Hanson 최종 업데이트: 2026년 11월 14일 Getty Images Signature의 telegraham, Canva를 통한 Getty Images Signature의 Asobinin 주요 사항 GE Vernova는 매출을 올린 후 지난 1년 동안 44% 상승했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 44%, $5.0, $16 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 44%, $5.0, $16 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "840c4301082d9d32cab9",
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
      "headline": "Applied Materials (AMAT) Stock Slips After Record Q4 Earnings Results",
      "headlineKo": "Applied Materials (AMAT) 주가는 기록적인 4분기 실적 이후 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c40613a56bbcf743a4c3f58210c71bd172dfe25e87915ab321eea9582a9285b2",
        "publishedAt": 1794611687,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Applied Materials (AMAT) Stock Slips After Record Q4 Earnings Results",
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
      "id": "c57656216d76fa2ed4c4",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "MOD",
      "relatedTickers": [
        "MOD"
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
      "headline": "Samsung Eyeing Deal To Buy Data Center Supplier Modine; Stock Soars 35%",
      "headlineKo": "삼성, 데이터센터 공급업체 Modine 인수 거래 검토 중; 주가 35% 급등",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=618cca6a3f62f200e123684bc37f58c2ba49436aa1fddb115486dc3e58cf160f",
        "publishedAt": 1794603725,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Samsung Eyeing Deal To Buy Data Center Supplier Modine; Stock Soars 35%",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "MOD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MOD에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "계약 금액·기간·취소 조건",
        "수주잔고와 매출 인식 시점",
        "관련 사업부 매출총이익률"
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
        "collectedAt": 1794881750.7686634
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
      "id": "b5564dafe8efde358a79",
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
      "headline": "Western Digital Stock Gains Fresh Attention After Earnings Beat and AI Storage Demand Strengthens",
      "headlineKo": "Western Digital 주식은 실적이 좋아지고 AI 스토리지 수요가 강화된 후 새로운 주목을 받습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74fbaba326deb381dbcf1adee2f91005caf762d77fae8c0a5cd15ff16716bd75",
        "publishedAt": 1794600433,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Western Digital Stock Gains Fresh Attention After Earnings Beat and AI Storage Demand Strengthens",
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
      "id": "cb6e6934b0feec954a28",
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
      "headline": "AXTQ 2X Short AXT ETF Surges 15% as AXT Retraces From 147% Year-to-Date Rally; Coherent Drops 8%",
      "headlineKo": "AXTQ 2X Short AXT ETF는 AXT가 연초 대비 147% 랠리에서 회복되면서 15% 급등합니다. 일관된 드롭 8%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=baa4debb5bb231c3f00245d0cd0b925b5e079df88f29b2f7d0e6bd67944185d3",
        "publishedAt": 1794596584,
        "collectedAt": 1794884116.7467601
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AXTQ 2X Short AXT ETF는 AXT가 연초 대비 147% 랠리에서 회복되면서 15% 급등합니다. 일관된 드롭 8% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,512.00 −0.42% Dow Jones 52,265.50 −0.02% Nasdaq 100 27,565.80 −1.02% Russell 2000 2,775.51 −0.37% S&P 500 7,512.00 −0.42% 다우존스 52,265.50 −0.02% 나스닥 100 27,565.80 −1.02% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 후원사 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMAT Q4 Earnings Call Highlights AI Demand and 2027 Growth Outlook",
      "headlineKo": "AMAT Q4 수익 회의에서 AI 수요와 2027년 성장 전망 강조",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b37669475ef6d0decd46eaf002bb5265c9be4d2771b5695b0b6c120c1292874",
        "publishedAt": 1794593640,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMAT Q4 수익 회의에서 AI 수요와 2027년 성장 전망 강조"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "4670d0cc7f8c0c76dc24",
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
      "headline": "Marvell Stocks Fall 6.6% as Lumentum Deal Spread Widens to 18%",
      "headlineKo": "Lumentum 거래 스프레드가 18%로 확대되면서 Marvell 주식은 6.6% 하락했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57f7f3ee3c37dcbc79dc0e0b2e913061eae1255ffce119b01a2bfe263f879f59",
        "publishedAt": 1794588033,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum 거래 스프레드가 18%로 확대되면서 Marvell 주식은 6.6% 하락했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Should Investors Buy Quanta Stock After Impressive Q3 Earnings?",
      "headlineKo": "투자자들은 인상적인 3분기 수익을 얻은 후 Quanta 주식을 구매해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=722f80f26111e3533d6701c0b1a0c298ba5b8505ecbf072c34f89c894bd85851",
        "publishedAt": 1794579240,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "투자자들은 인상적인 3분기 수익을 얻은 후 Quanta 주식을 구매해야 합니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
        "collectedAt": 1794881750.7686634
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
      "headlineKo": "Salesforce 주식 하락세를 매수한 것이 성과를 거두었습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef409aa6212432facc7993f590e7d191e9f45e7fe375cf688e04bc2719f5d143",
        "publishedAt": 1794571971,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce 주식 하락세를 매수한 것이 성과를 거두었습니까?",
        "| Trefis Trefis Storylines는 Salesforce 주식 하락세를 매수하여 성과를 거두었습니까?",
        "2026년 11월 13일 · 작성자: Trefis Team CRM YTD -17.2% SPY YTD +11.5% QQQ YTD +11.1% CRM 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 17.2%, 11.5%, 11.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 17.2%, 11.5%, 11.1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Has Constellation Energy (CEG) Fallen Below Fair Value After Raising Earnings Guidance?",
      "headlineKo": "Constellation Energy(CEG)가 실적 가이던스를 높인 후 적정 가치 아래로 떨어졌습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83746dc5714cd92a5948e4e1ff5c48186d791aa3c5dff0cb5fd8358d70f69e75",
        "publishedAt": 1794564550,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Constellation Energy(CEG)가 실적 가이던스를 높인 후 적정 가치 아래로 떨어졌습니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "별자리 에너지: 현장 전력 또는 그리드 전력, 데이터 센터의 승리는 무엇입니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,561.67 -0.4% -30.73 DJI 52,347.55 +0.1% +50.46 NASDAQ 25,136.27 -0.9% -229.82 비트코인 $64,109.00 -2.3% -$1,531.15 SPCX $139.11 -0.",
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
        "collectedAt": 1794881750.7686634
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
      "id": "95ce0cc64327a77714f7",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Did AI Platform Growth Just Shift Salesforce's (CRM) Investment Narrative?",
      "headlineKo": "AI 플랫폼 성장이 Salesforce(CRM)의 투자 내러티브를 변화시켰습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=922ed224266cc6ca4b8e932d03868d8dddd50f598c282814c0f19b3f87c62404",
        "publishedAt": 1794544499,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 플랫폼 성장이 Salesforce(CRM)의 투자 내러티브를 변화시켰습니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
        "collectedAt": 1794881750.7686634
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
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "하나의 감소 숫자가 Eaton 주식에 대한 가장 큰 위험입니까?",
        "| Trefis Trefis Storylines 하나의 감소 숫자가 Eaton 주식의 가장 큰 위험입니까?",
        "2026년 11월 12일 · Trefis 팀 ETN YTD +12.1% SPY YTD +11.5% XLI YTD +9.7% ETN 분석 → 이 기사 또는 기본 연구에 대한 질문이 있는 경우 help@trefis.com으로 이메일을 보내세요."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12.1%, 11.5%, 9.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12.1%, 11.5%, 9.7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6bc58a529b4b93b444c6",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM"
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
      "headline": "QCOM SEC Form 8-K filed",
      "headlineKo": "QCOM SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/804328/000110465926127163/tm2629667d1_8k.htm",
        "publishedAt": 1794495600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "QCOM가 2026-11-13에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 중요 계약 체결·변경 · 기타 중요 사건 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 계약·수주 · 자금조달·증권발행"
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
          "ticker": "QCOM",
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
        "collectedAt": 1794872360.75106
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
        "collectedAt": 1794872360.75106
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
        "collectedAt": 1794881750.7686634
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
      "id": "874af98cad2f26ece217",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 8-K filed",
      "headlineKo": "META SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526458525/d177728d8k.htm",
        "publishedAt": 1794409200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-11-12에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "META",
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
      "id": "20bc06388bef8ebb1daa",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "NVDA"
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
      "headline": "NVDA SEC Form 8-K filed",
      "headlineKo": "NVDA SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000082/nvda-20261111.htm",
        "publishedAt": 1794409200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "NVDA가 2026-11-12에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "NVDA",
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
      "id": "c0cdd1344625b90f0369",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "MRVL"
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
      "headline": "MRVL SEC Form 8-K filed",
      "headlineKo": "MRVL SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000026/mrvl-20261111.htm",
        "publishedAt": 1794409200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MRVL가 2026-11-12에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "MRVL",
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
      "id": "0ad454e998a76dedc1b0",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000800/a20261112statementregardin.htm",
        "publishedAt": 1794409200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "TSM가 2026-11-12에 SEC Form 6-K을 제출했습니다."
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
      "id": "3170428ca0e1fa890986",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT"
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
      "headline": "AMAT SEC Form 8-K filed",
      "headlineKo": "AMAT SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/6951/000162828026073360/amat-20261112.htm",
        "publishedAt": 1794409200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "AMAT가 2026-11-12에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 11100.0 million ± 500.0 · EPS 4.35 USD/share ± 0.2"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 부합: 실제 4.16 / 예상 4.1345 (+0.62%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "AMAT",
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
        "version": 8,
        "analyzedAt": 1794872360.75106,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q4'26",
          "endDate": "2026-10-31",
          "metrics": {}
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "center": 11100.0,
              "plusMinus": 500.0,
              "unit": "million",
              "deltaUnit": "million"
            },
            {
              "metric": "eps",
              "center": 4.35,
              "plusMinus": 0.2,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "first quarter 2027",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 4.16,
          "estimate": 4.1345,
          "providerPeriod": "2026-12-31",
          "label": "in_line",
          "surprisePct": 0.62,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/6951/000162828026073360/exhibit991q42026earningsre.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-08-14",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000000695125000032/exhibit991q32025earningsre.htm",
            "outcome": null
          },
          {
            "filingDate": "2025-11-13",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828025051998/exhibit991q42025earningsre.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-02-12",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026007661/exhibit991q12026earningsre.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-05-14",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026035071/exhibit991q22026earningsre.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-08-13",
            "targetPeriod": "q3 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026056699/exhibit991q32026earningsre.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-11-12",
            "targetPeriod": "first quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026073360/exhibit991q42026earningsre.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "adec62ae9203c21bb113",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "HUBB",
      "relatedTickers": [
        "GEV",
        "HUBB",
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
      "headline": "GEV, VRT, HUBB In Focus — JPMorgan Sees Potential AI Stock Rebound, But Remains Cautious On Electrical Equipment Sector",
      "headlineKo": "GEV, VRT, HUBB에 초점 — JPMorgan은 잠재적인 AI 주식 반등을 보고 있지만 전기 장비 부문에 대해서는 여전히 조심스럽습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a54c44f1f88ccb6502c88cd88a43ef24e3a5548a22188bb411374717125936e",
        "publishedAt": 1794397878,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GEV, VRT, HUBB에 초점 - JPMorgan은 잠재적인 AI 주식 반등을 보고 있지만 전기 장비 부문에 대해서는 여전히 조심스럽습니다. AI 에이전트 동향 뉴스 수익 전체 DIA 1.55% SPY 1.85% QQQ 2.36% 추세 BABA 7.09% SLS 3.05% JPM 2.37% OMER 11.21% BI",
        "GEV, VRT, HUBB에 초점 — JPMorgan은 잠재적인 AI 주식 반등을 보고 있지만 전기 장비 부문에 대해서는 여전히 신중함을 유지합니다. JPMorgan은 GE Vernova의 목표 가격을 $1,035에서 $1,000로 낮추면서 '비중 확대' 등급을 유지했습니다.",
        "이 사진 일러스트에는 GE Vernova 회사 로고가 스마트폰 화면에 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.55%, 1.85%, 2.36% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "HUBB의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "HUBB에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.55%, 1.85%, 2.36% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
    },
    {
      "id": "0ce38e6a5635226382f5",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "JP Morgan Maintains Neutral on Hubbell, Lowers Price Target to $470",
      "headlineKo": "JP Morgan, Hubbell에 대해 중립 유지, 목표 가격을 470달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=42baaeef13941311c7e1a6980d43956b803ba5728e3b3708fbc9290e30c90f38",
        "publishedAt": 1794377831,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JP Morgan, Hubbell에 대해 중립 유지, 목표 가격을 470달러로 낮춤"
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
          "ticker": "HUBB",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "75935bdd2b885df34ca3",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "EME",
      "relatedTickers": [
        "EME"
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
      "headline": "JP Morgan Initiates Coverage On EMCOR Group with Neutral Rating, Announces Price Target of $700",
      "headlineKo": "JP Morgan, 중립 등급으로 EMCOR 그룹에 대한 보도 개시, 목표 가격 700달러 발표",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=efa3ed66ca254b0f7c7b7bcd842dcd94b0ca81831f2f75bbfa124a8a08b7d699",
        "publishedAt": 1794303119,
        "collectedAt": 1794881750.7686634
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "JP Morgan, 중립 등급으로 EMCOR 그룹에 대한 보도 개시, 목표 가격 700달러 발표"
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
          "ticker": "EME",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "a748407586d6b5366d91",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM"
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
      "headline": "QCOM SEC Form 424B5 filed",
      "headlineKo": "QCOM SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/804328/000110465926125254/tm2629187-2_424b5.htm",
        "publishedAt": 1794236400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "QCOM가 2026-11-10에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "QCOM",
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
      "id": "ae07fea7d8534bc76db3",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000797/tsm-boardx202611xx.htm",
        "publishedAt": 1794236400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "TSM가 2026-11-10에 SEC Form 6-K을 제출했습니다.",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망 · 자금조달·증권발행 · CAPEX·투자"
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
      "id": "a5837a92d46d8a93d0fb",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000796/tsm-revenue20261110.htm",
        "publishedAt": 1794236400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "TSM가 2026-11-10에 SEC Form 6-K을 제출했습니다."
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
      "id": "6ff08acb8a5111eb3bfa",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL"
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
      "headline": "AAPL SEC Form 8-K filed",
      "headlineKo": "AAPL SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/320193/000114036126042798/ef20085077_8k.htm",
        "publishedAt": 1794150000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "AAPL가 2026-11-09에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "AAPL",
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
      "id": "481afffd415c4a0ef823",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM"
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
      "headline": "QCOM SEC Form 424B2 filed",
      "headlineKo": "QCOM SEC Form 424B2 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/804328/000110465926124219/tm2629187-1_424b2.htm",
        "publishedAt": 1794150000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "QCOM가 2026-11-09에 SEC Form 424B2을 제출했습니다.",
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
          "ticker": "QCOM",
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
      "id": "2546597951a305d8608f",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG"
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
      "headline": "CEG SEC Form 10-Q filed",
      "headlineKo": "CEG SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000119/ceg-20260930.htm",
        "publishedAt": 1794150000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "CEG가 2026-11-09에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "CEG",
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
      "id": "44fb5e0d5c0b85ddc8fe",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "CEG",
      "relatedTickers": [
        "CEG"
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
      "headline": "CEG SEC Form 8-K filed",
      "headlineKo": "CEG SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000116/ceg-20261109.htm",
        "publishedAt": 1794150000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "CEG가 2026-11-09에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 규정 FD 공개 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망 · 인수·매각",
        "SEC Company Facts Q3'26: 매출 $9.55B · 영업이익 $2.49B · 순이익 $1.83B"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 5.06 / 예상 3.8857 (+30.22%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 3회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "CEG",
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
        "version": 8,
        "analyzedAt": 1794872360.75106,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 9550000000.0,
            "opIncome": 2492000000,
            "netIncome": 1835000000
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "value": 35.0,
              "unit": "unspecified"
            },
            {
              "metric": "eps",
              "value": 600.0,
              "unit": "USD/share",
              "basis": "unknown_pair"
            },
            {
              "metric": "eps",
              "value": 900.0,
              "unit": "USD/share",
              "basis": "unknown_pair"
            }
          ],
          "targetPeriod": "q3 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 5.06,
          "estimate": 3.8857,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 30.22,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000116/ceg-20261109992.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2026-05-11",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000063/ceg-20260511992.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-08-06",
            "targetPeriod": "q2 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000097/ceg-20260806992.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-11-09",
            "targetPeriod": "q3 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000116/ceg-20261109992.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "ecc3696039a74a72dbc4",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126042795/ef20085053_8k.htm",
        "publishedAt": 1794150000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "VST가 2026-11-09에 SEC Form 8-K을 제출했습니다.",
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
      "id": "7ef42d43619b11bad633",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "VST",
      "relatedTickers": [
        "VST"
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
      "headline": "VST SEC Form 10-Q filed",
      "headlineKo": "VST SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000025/vistra-20260930.htm",
        "publishedAt": 1794150000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "VST가 2026-11-09에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "VST",
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
      "id": "4669fc21bc6f029f2c6d",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 424B5 filed",
      "headlineKo": "META SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526450754/d44678d424b5.htm",
        "publishedAt": 1793890800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-11-06에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "META",
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
      "id": "46d0d6c359fd0830b089",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL"
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
      "headline": "AAPL SEC Form 424B2 filed",
      "headlineKo": "AAPL SEC Form 424B2 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/320193/000114036126042505/ny20084621x2_424b2.htm",
        "publishedAt": 1793890800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "AAPL가 2026-11-06에 SEC Form 424B2을 제출했습니다.",
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
          "ticker": "AAPL",
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
      "id": "9ec89fb0fdc77e843bed",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC"
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
      "headline": "KLAC SEC Form 8-K filed",
      "headlineKo": "KLAC SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/319201/000119312526451824/d76372d8k.htm",
        "publishedAt": 1793890800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "KLAC가 2026-11-06에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "KLAC",
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
      "id": "ef1587ba1d33c764cd10",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적·재무 공식 공시",
      "primaryTicker": "VST",
      "relatedTickers": [
        "VST"
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
      "headline": "VST SEC Form 8-K filed",
      "headlineKo": "VST SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000023/vistra-20261106.htm",
        "publishedAt": 1793890800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "VST가 2026-11-06에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $6.35B · 영업이익 $1.71B · 순이익 $1.09B"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 3.23 / 예상 2.916 (+10.77%). SEC 공식 수치와는 별도 출처입니다."
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
          "ticker": "VST",
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
        "version": 8,
        "analyzedAt": 1794872360.75106,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 6347000000.0,
            "opIncome": 1706000000,
            "netIncome": 1092000000
          }
        },
        "guidance": {
          "status": "unavailable",
          "metrics": [],
          "targetPeriod": "third quarter 2025",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 3.23,
          "estimate": 2.916,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 10.77,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000023/vistra-20260930xearningsre.htm"
        }
      }
    },
    {
      "id": "bdb0439ae5b788732ac9",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
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
      "headline": "MSFT SEC Form 8-K filed",
      "headlineKo": "MSFT SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526448357/d177209d8k.htm",
        "publishedAt": 1793804400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MSFT가 2026-11-05에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "MSFT",
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
      "id": "95ccdd82bd81c2f300be",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
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
      "headline": "GOOGL SEC Form 8-K filed",
      "headlineKo": "GOOGL SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526449835/d174184d8k.htm",
        "publishedAt": 1793804400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "GOOGL가 2026-11-05에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "GOOGL",
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
      "id": "fa7278579cf26e022f17",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 8-K filed",
      "headlineKo": "META SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526450074/d166273d8k.htm",
        "publishedAt": 1793804400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-11-05에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "META",
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
      "id": "f1d7b78f09df22cbfdbe",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 424B5 filed",
      "headlineKo": "META SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526448015/d135326d424b5.htm",
        "publishedAt": 1793804400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-11-05에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "META",
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
      "id": "c4911ea8125f05b636a5",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL"
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
      "headline": "AAPL SEC Form 424B2 filed",
      "headlineKo": "AAPL SEC Form 424B2 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/320193/000114036126042046/ny20084621x1_424b2.htm",
        "publishedAt": 1793804400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "AAPL가 2026-11-05에 SEC Form 424B2을 제출했습니다.",
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
          "ticker": "AAPL",
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
      "id": "cd5efdbeb6384f64c575",
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
        "url": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000057/lrcx-20261103.htm",
        "publishedAt": 1793804400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "LRCX가 2026-11-05에 SEC Form 8-K을 제출했습니다.",
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
      "id": "e91fae4d8cf9cc205e3d",
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
        "url": "https://www.sec.gov/Archives/edgar/data/723125/000110465926123389/tm2629062d1_8k.htm",
        "publishedAt": 1793804400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MU가 2026-11-05에 SEC Form 8-K을 제출했습니다.",
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
      "id": "f3f7b6b489bbad46c877",
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
      "headline": "VST SEC Form 8-K filed",
      "headlineKo": "VST SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126042013/ef20084950_8k.htm",
        "publishedAt": 1793804400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "VST가 2026-11-05에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 미등록 증권 발행·매각 · 규정 FD 공개 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 계약·수주 · 자금조달·증권발행 · 인수·매각"
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
      "id": "27fd8bf4ef95741240e9",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "FIX",
      "relatedTickers": [
        "FIX"
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
      "headline": "FIX SEC Form 8-K filed",
      "headlineKo": "FIX SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1035983/000110465926122938/tm2629087d1_8k.htm",
        "publishedAt": 1793804400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "FIX가 2026-11-05에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 기타 중요 사건"
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
          "ticker": "FIX",
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
      "id": "9d4af1b3e363d3bdf20d",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
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
      "headline": "MSFT SEC Form 8-K filed",
      "headlineKo": "MSFT SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526447173/d178557d8k.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MSFT가 2026-11-04에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "MSFT",
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
      "id": "616a5d2516bf0cb80f80",
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
      "headline": "GOOGL SEC Form 424B2 filed",
      "headlineKo": "GOOGL SEC Form 424B2 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526447343/d125079d424b2.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "GOOGL가 2026-11-04에 SEC Form 424B2을 제출했습니다.",
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
      "id": "cab5aebcea94d6985a75",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 424B5 filed",
      "headlineKo": "META SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526446110/d44678d424b5.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-11-04에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "META",
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
      "id": "d1769d8db0914f34a83f",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526447507/d131790d8k.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ORCL가 2026-11-04에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 기타 중요 사건 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: CAPEX·투자 · 인수·매각"
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
      "id": "ff0c47a5e3f151b4f047",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
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
      "headline": "ORCL SEC Form 424B5 filed",
      "headlineKo": "ORCL SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526445847/d181425d424b5.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ORCL가 2026-11-04에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "ORCL",
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
      "id": "5f65566f62c03854c2f2",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
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
      "headline": "ORCL SEC Form 424B2 filed",
      "headlineKo": "ORCL SEC Form 424B2 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526445846/d181336d424b2.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ORCL가 2026-11-04에 SEC Form 424B2을 제출했습니다.",
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
          "ticker": "ORCL",
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
      "id": "646cf620113328b7ffdb",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD"
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
      "headline": "AMD SEC Form 10-Q filed",
      "headlineKo": "AMD SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000191/amd-20260926.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "AMD가 2026-11-04에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "AMD",
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
      "id": "2d1f86479f5eec74f8f0",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM"
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
      "headline": "QCOM SEC Form 10-K filed",
      "headlineKo": "QCOM SEC Form 10-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000128/qcom-20260927.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "QCOM가 2026-11-04에 SEC Form 10-K을 제출했습니다."
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
          "ticker": "QCOM",
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
      "id": "7b437239c73a66b08c17",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "QCOM",
      "relatedTickers": [
        "QCOM"
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
      "headline": "QCOM SEC Form 8-K filed",
      "headlineKo": "QCOM SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000127/qcom-20261104.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "QCOM가 2026-11-04에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $10.32B · 영업이익 $1.36B · 순이익 $1.25B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 10.4~11.2 billion · EPS 1.03~1.23 USD/share · EPS 2.15~2.35 USD/share"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 부합: 실제 2.17 / 예상 2.2012 (-1.42%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "QCOM",
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
        "version": 8,
        "analyzedAt": 1794872360.75106,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-27",
          "metrics": {
            "revenue": 10322000000.0,
            "opIncome": 1356000000,
            "netIncome": 1251000000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 10.4,
              "high": 11.2,
              "unit": "billion"
            },
            {
              "metric": "eps",
              "low": 1.03,
              "high": 1.23,
              "unit": "USD/share",
              "basis": "gaap_or_unspecified"
            },
            {
              "metric": "eps",
              "low": 2.15,
              "high": 2.35,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "first quarter 2027",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 2.17,
          "estimate": 2.2012,
          "providerPeriod": "2026-09-30",
          "label": "in_line",
          "surprisePct": -1.42,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000127/qcom092726erex991.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-07-30",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432825000044/qcom062925erex991.htm",
            "outcome": null
          },
          {
            "filingDate": "2025-11-05",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432825000084/qcom092825erex991.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-02-04",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000016/qcom122825erex991.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-04-29",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000060/qcom032926erex991.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-07-29",
            "targetPeriod": "fourth quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000085/qcom062826erex991.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q3'26",
              "actual": 10.322,
              "low": 9.7,
              "high": 10.5,
              "unit": "billion",
              "variancePct": 2.2,
              "actualEndDate": "2026-09-27",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-11-04",
            "targetPeriod": "first quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000127/qcom092726erex991.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "acd3dcf57743b7781f1b",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM"
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
      "headline": "ARM SEC Form 6-K filed",
      "headlineKo": "ARM SEC Form 6-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000142/arm-20260930.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ARM가 2026-11-04에 SEC Form 6-K을 제출했습니다.",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망 · 계약·수주 · 구조조정·감원 · CAPEX·투자 · 인수·매각"
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
          "ticker": "ARM",
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
      "id": "07c747d5bcc6ae95ffe2",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM"
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
      "headline": "ARM SEC Form 6-K filed",
      "headlineKo": "ARM SEC Form 6-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000141/arm-20261104.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ARM가 2026-11-04에 SEC Form 6-K을 제출했습니다."
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
          "ticker": "ARM",
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
      "id": "a462278c94da57a48de9",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET"
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
      "headline": "ANET SEC Form 10-Q filed",
      "headlineKo": "ANET SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000254/anet-20260930.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ANET가 2026-11-04에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "ANET",
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
      "id": "0364965cbb3cf1e50dd1",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR"
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
      "headline": "COHR SEC Form 10-Q filed",
      "headlineKo": "COHR SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/820318/000082031826000023/iivi-20260930.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "COHR가 2026-11-04에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "COHR",
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
      "id": "c2999afa352c772a79f2",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR"
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
      "headline": "COHR SEC Form 8-K filed",
      "headlineKo": "COHR SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/820318/000119312526447200/d176836d8k.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "COHR가 2026-11-04에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료 · 규정 FD 공개",
        "SEC Company Facts Q3'26: 매출 $2.37B · 영업이익 $0.39B · 순이익 $0.38B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 2.55~2.75 billion · EPS 2.28~2.48 USD/share"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 2.09 / 예상 2.0134 (+3.80%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "COHR",
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
        "version": 8,
        "analyzedAt": 1794872360.75106,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 2370324000,
            "opIncome": 386446000.0,
            "netIncome": 384673000
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 2.55,
              "high": 2.75,
              "unit": "billion"
            },
            {
              "metric": "eps",
              "low": 2.28,
              "high": 2.48,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "second quarter 2027",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 2.09,
          "estimate": 2.0134,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 3.8,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/820318/000119312526447200/d176836dex992.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-08-13",
            "targetPeriod": "first quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312525179833/d22249dex992.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q3'25",
              "actual": 1.5814,
              "low": 1.46,
              "high": 1.6,
              "unit": "billion",
              "variancePct": 3.36,
              "actualEndDate": "2025-09-30",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2025-11-05",
            "targetPeriod": "second quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312525266951/d27982dex992.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q4'25",
              "actual": 1.6856,
              "low": 1.56,
              "high": 1.7,
              "unit": "billion",
              "variancePct": 3.41,
              "actualEndDate": "2025-12-31",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-02-04",
            "targetPeriod": "third quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526037556/d101115dex992.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q1'26",
              "actual": 1.8056,
              "low": 1.7,
              "high": 1.84,
              "unit": "billion",
              "variancePct": 2.01,
              "actualEndDate": "2026-03-31",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-05-06",
            "targetPeriod": "fourth quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526208972/d57080dex992.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q2'26",
              "actual": 2.0455,
              "low": 1.91,
              "high": 2.05,
              "unit": "billion",
              "variancePct": 3.31,
              "actualEndDate": "2026-06-30",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-08-12",
            "targetPeriod": "first quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526346860/d128030dex992.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q3'26",
              "actual": 2.3703,
              "low": 2.2,
              "high": 2.4,
              "unit": "billion",
              "variancePct": 3.06,
              "actualEndDate": "2026-09-30",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-11-04",
            "targetPeriod": "second quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526447200/d176836dex992.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "f8f1b55abe51cbceeb52",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "MOD",
      "relatedTickers": [
        "MOD"
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
      "headline": "MOD SEC Form 10-Q filed",
      "headlineKo": "MOD SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/67347/000110465926122523/mod-20260930x10q.htm",
        "publishedAt": 1793718000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MOD가 2026-11-04에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "MOD",
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
      "id": "fdae760b0ce210e64541",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 424B5 filed",
      "headlineKo": "META SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526444440/d135326d424b5.htm",
        "publishedAt": 1793631600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-11-03에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "META",
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
      "id": "7f973250812fe77e865a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL"
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
      "headline": "AAPL SEC Form 10-K filed",
      "headlineKo": "AAPL SEC Form 10-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000026/aapl-20260926.htm",
        "publishedAt": 1793631600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "AAPL가 2026-11-03에 SEC Form 10-K을 제출했습니다."
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
          "ticker": "AAPL",
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
      "id": "d746edbda425108c45ce",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR"
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
      "headline": "PLTR SEC Form 10-Q filed",
      "headlineKo": "PLTR SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000048/pltr-20260930.htm",
        "publishedAt": 1793631600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "PLTR가 2026-11-03에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "PLTR",
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
      "id": "fc2aa7212055b653581b",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "매출",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD"
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
      "headline": "AMD SEC Form 8-K filed",
      "headlineKo": "AMD SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000188/amd-20261103.htm",
        "publishedAt": 1793631600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "AMD가 2026-11-03에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 규정 FD 공개 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망",
        "SEC Company Facts Q3'26: 매출 $13.38B · 영업이익 $2.83B · 순이익 $2.43B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 17.0 billion ± 3.0 percent"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 2.09 / 예상 1.9704 (+6.07%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 5회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "AMD",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-26",
          "metrics": {
            "revenue": 13377000000.0,
            "opIncome": 2832000000.0,
            "netIncome": 2428000000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "center": 17.0,
              "plusMinus": 3.0,
              "unit": "billion",
              "deltaUnit": "percent"
            }
          ],
          "targetPeriod": "fourth quarter 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 2.09,
          "estimate": 1.9704,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 6.07,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000188/amdq32026earningsslidesf.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-08-05",
            "targetPeriod": "q2 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248825000106/amdq225earningsslidesfin.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q3'25",
              "actual": 9.246,
              "low": 8.4,
              "high": 9.0,
              "unit": "billion",
              "variancePct": 6.28,
              "actualEndDate": "2025-09-27",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2025-11-04",
            "targetPeriod": "q3 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248825000163/amdq325earningsslidesfin.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q4'25",
              "actual": 10.27,
              "low": 9.3,
              "high": 9.9,
              "unit": "billion",
              "variancePct": 6.98,
              "actualEndDate": "2025-12-27",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-02-03",
            "targetPeriod": "q4 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000014/amdq425earningsslidesfin.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q1'26",
              "actual": 10.253,
              "low": 9.5,
              "high": 10.1,
              "unit": "billion",
              "variancePct": 4.62,
              "actualEndDate": "2026-03-28",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-08-04",
            "targetPeriod": "third quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000121/amdq22026earningsslidesf.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q3'26",
              "actual": 13.377,
              "low": 12.7,
              "high": 13.3,
              "unit": "billion",
              "variancePct": 2.9,
              "actualEndDate": "2026-09-26",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-11-03",
            "targetPeriod": "fourth quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000188/amdq32026earningsslidesf.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "385d6990a7e0b82ee8bf",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "ANET",
      "relatedTickers": [
        "ANET"
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
      "headline": "ANET SEC Form 8-K filed",
      "headlineKo": "ANET SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000252/anet-20261103.htm",
        "publishedAt": 1793631600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ANET가 2026-11-03에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $3.66B · 영업이익 $1.64B · 순이익 $1.56B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 3.9~4.0 billion · EPS 1.26~1.3 USD/share"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 1.2 / 예상 1.0979 (+9.30%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 5회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "ANET",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 3657600000.0,
            "opIncome": 1642400000,
            "netIncome": 1560400000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 3.9,
              "high": 4.0,
              "unit": "billion"
            },
            {
              "metric": "eps",
              "low": 1.26,
              "high": 1.3,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "q3 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 1.2,
          "estimate": 1.0979,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 9.3,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000252/ex991q326-earningsrelease.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2024-11-07",
            "targetPeriod": "fourth quarter 2024",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653224000366/ex991q324-earningsrelease.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q4'24",
              "actual": 1.9304,
              "low": 1.85,
              "high": 1.9,
              "unit": "billion",
              "variancePct": 2.95,
              "actualEndDate": "2024-12-31",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2025-02-18",
            "targetPeriod": "first quarter 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653225000018/ex991q424-earningsrelease.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q1'25",
              "actual": 2.0048,
              "low": 1.93,
              "high": 1.97,
              "unit": "billion",
              "variancePct": 2.81,
              "actualEndDate": "2025-03-31",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2025-11-04",
            "targetPeriod": "fourth quarter 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653225000284/ex991q325-earningsrelease.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q4'25",
              "actual": 2.4878,
              "low": 2.3,
              "high": 2.4,
              "unit": "billion",
              "variancePct": 5.86,
              "actualEndDate": "2025-12-31",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-08-04",
            "targetPeriod": "third quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000174/ex991q226-earningsrelease.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q3'26",
              "actual": 3.6576,
              "low": 3.3,
              "high": 3.3,
              "unit": "billion",
              "variancePct": 10.84,
              "actualEndDate": "2026-09-30",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-11-03",
            "targetPeriod": "q3 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000252/ex991q326-earningsrelease.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "97f1f329bfc158dd493a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "LITE",
      "relatedTickers": [
        "LITE"
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
      "headline": "LITE SEC Form 10-Q filed",
      "headlineKo": "LITE SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026069615/lite-20260926.htm",
        "publishedAt": 1793631600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "LITE가 2026-11-03에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "LITE",
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
      "id": "930d501949246ba3c666",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN"
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
      "headline": "ETN SEC Form 10-Q filed",
      "headlineKo": "ETN SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000040/etn-20260930.htm",
        "publishedAt": 1793631600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ETN가 2026-11-03에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "ETN",
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
      "id": "906231c6728f81e433cb",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "ETN",
      "relatedTickers": [
        "ETN"
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
      "headline": "ETN SEC Form 8-K filed",
      "headlineKo": "ETN SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000037/etn-20261103.htm",
        "publishedAt": 1793631600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ETN가 2026-11-03에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $8.95B · 영업이익 $1.59B · 순이익 $1.08B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: EPS 10.39~10.49 USD/share · EPS 13.7~13.8 USD/share"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 3.68 / 예상 3.5787 (+2.83%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 2회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "ETN",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 8947000000.0,
            "opIncome": 1589000000.0,
            "netIncome": 1078000000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "eps",
              "low": 10.39,
              "high": 10.49,
              "unit": "USD/share",
              "basis": "gaap_or_unspecified"
            },
            {
              "metric": "eps",
              "low": 13.7,
              "high": 13.8,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "fiscal year 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 3.68,
          "estimate": 3.5787,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 2.83,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000037/etn09302026exhibit99.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2026-07-31",
            "targetPeriod": "first quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000027/etn06302026exhibit99.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-11-03",
            "targetPeriod": "fiscal year 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000037/etn09302026exhibit99.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "1a8616c994889850d245",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "매출",
      "primaryTicker": "MOD",
      "relatedTickers": [
        "MOD"
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
      "headline": "MOD SEC Form 8-K filed",
      "headlineKo": "MOD SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/67347/000110465926122032/mod-20261103x8k.htm",
        "publishedAt": 1793631600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MOD가 2026-11-03에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $0.99B · 영업이익 $0.10B · 순이익 $0.03B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 3.1~3.2 billion"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 하회: 실제 1.35 / 예상 1.4665 (-7.94%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 4회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "MOD",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 994400000.0,
            "opIncome": 97800000.0,
            "netIncome": 30000000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 3.1,
              "high": 3.2,
              "unit": "billion"
            }
          ],
          "targetPeriod": "third quarter 2027",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 1.35,
          "estimate": 1.4665,
          "providerPeriod": "2026-09-30",
          "label": "miss",
          "surprisePct": -7.94,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/67347/000110465926122032/mod-ex99d2.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-02-04",
            "targetPeriod": "fiscal year 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000155837025000627/tmb-20250204xex99d2.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-05-26",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926066291/mod-20260526xex99d2.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-07-29",
            "targetPeriod": "fiscal year 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926088230/mod-20260729xex99d2.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-11-03",
            "targetPeriod": "third quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926122032/mod-ex99d2.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "d0b945befced920eb600",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
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
      "headline": "MSFT SEC Form 424B2 filed",
      "headlineKo": "MSFT SEC Form 424B2 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526442618/d150456d424b2.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MSFT가 2026-11-02에 SEC Form 424B2을 제출했습니다.",
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
          "ticker": "MSFT",
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
        "collectedAt": 1794872360.75106
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
      "id": "26ef2091f1d5f3f77aae",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적·재무 공식 공시",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL"
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
      "headline": "AAPL SEC Form 8-K filed",
      "headlineKo": "AAPL SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000024/aapl-20261102.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "AAPL가 2026-11-02에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $114.48B · 영업이익 $35.63B · 순이익 $30.71B"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 2.1 / 예상 2.0263 (+3.64%). SEC 공식 수치와는 별도 출처입니다."
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
          "ticker": "AAPL",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-26",
          "metrics": {
            "revenue": 114477000000.0,
            "opIncome": 35631000000.0,
            "netIncome": 30711000000.0
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
          "actual": 2.1,
          "estimate": 2.0263,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 3.64,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000024/a8-kex991q4202609262026.htm"
        }
      }
    },
    {
      "id": "b5b21de0cbb13a7c2e1c",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
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
      "headline": "ORCL SEC Form 424B5 filed",
      "headlineKo": "ORCL SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526442729/d181425d424b5.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ORCL가 2026-11-02에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "ORCL",
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
      "id": "193436c7eb9bb4a49fd1",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
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
      "headline": "ORCL SEC Form 424B2 filed",
      "headlineKo": "ORCL SEC Form 424B2 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526442722/d181336d424b2.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ORCL가 2026-11-02에 SEC Form 424B2을 제출했습니다.",
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
          "ticker": "ORCL",
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
      "id": "ae9c0956c41bdca322b8",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
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
      "headline": "ORCL SEC Form S-3ASR filed",
      "headlineKo": "ORCL SEC Form S-3ASR 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526442669/d181173ds3asr.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ORCL가 2026-11-02에 SEC Form S-3ASR을 제출했습니다.",
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
          "ticker": "ORCL",
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
      "id": "b5edbcd361c582cdb2d8",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "PLTR"
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
      "headline": "PLTR SEC Form 8-K filed",
      "headlineKo": "PLTR SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000045/pltr-20261102.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "PLTR가 2026-11-02에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 규정 FD 공개 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $2.31B · 영업이익 $1.08B · 순이익 $1.13B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 2.649~2.653 billion"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 0.44 / 예상 0.4182 (+5.21%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "PLTR",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 2313411000,
            "opIncome": 1084845000,
            "netIncome": 1128012000
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 2.649,
              "high": 2.653,
              "unit": "billion"
            },
            {
              "metric": "eps",
              "value": 0.44,
              "unit": "USD/share",
              "basis": "single_point_gaap_or_unspecified"
            }
          ],
          "targetPeriod": "q4 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 0.44,
          "estimate": 0.4182,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 5.21,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000045/a2026q3ex991pressrelease.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-08-04",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165525000105/a2025q2ex991pressrelease.htm",
            "outcome": null
          },
          {
            "filingDate": "2025-11-03",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165525000130/a2025q3ex991earningsrelease.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-02-02",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000004/a2025q4ex991earningsrelease.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-05-04",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000026/a2026q1ex991pressrelease.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-08-03",
            "targetPeriod": "q3 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/a2026q2ex991pressrelease.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q3'26",
              "actual": 2.3134,
              "low": 2.16,
              "high": 2.164,
              "unit": "billion",
              "variancePct": 7.0,
              "actualEndDate": "2026-09-30",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-11-02",
            "targetPeriod": "q4 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000045/a2026q3ex991pressrelease.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "0c12289720acffc39255",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "MRVL",
      "relatedTickers": [
        "MRVL"
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
      "headline": "MRVL SEC Form 8-K filed",
      "headlineKo": "MRVL SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526442717/d352474d8k.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MRVL가 2026-11-02에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 중요 계약 체결·변경 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망 · 계약·수주 · 자금조달·증권발행 · CAPEX·투자 · 인수·매각"
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
          "ticker": "MRVL",
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
      "id": "dc36ef4861448ce3506a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적·재무 공식 공시",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526442714/d81187d8k.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MRVL가 2026-11-02에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 규정 FD 공개 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망 · CAPEX·투자 · 인수·매각",
        "SEC Company Facts Q3'26: 매출 $2.74B · 영업이익 $0.46B · 순이익 $0.31B"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 부합: 실제 0.94 / 예상 0.9422 (-0.23%). SEC 공식 수치와는 별도 출처입니다."
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-08-01",
          "metrics": {
            "revenue": 2739300000.0,
            "opIncome": 459700000,
            "netIncome": 308000000.0
          }
        },
        "guidance": {
          "status": "unavailable",
          "metrics": [],
          "targetPeriod": null,
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 0.94,
          "estimate": 0.9422,
          "providerPeriod": "2026-09-30",
          "label": "in_line",
          "surprisePct": -0.23,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526442714/d81187dex992.htm"
        }
      }
    },
    {
      "id": "a6bce08286d2472adb1a",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "LITE",
      "relatedTickers": [
        "LITE"
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
      "headline": "LITE SEC Form 8-K filed",
      "headlineKo": "LITE SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1633978/000119312526442758/d163169d8k.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "LITE가 2026-11-02에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 중요 계약 체결·변경 · 임원·이사 변경 또는 보상 · 규정 FD 공개 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망 · 계약·수주 · 자금조달·증권발행 · CAPEX·투자 · 인수·매각"
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
          "ticker": "LITE",
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
      "id": "716107b975b46d7039e4",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "LITE",
      "relatedTickers": [
        "LITE"
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
      "headline": "LITE SEC Form 8-K filed",
      "headlineKo": "LITE SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026068655/lite-20261102.htm",
        "publishedAt": 1793545200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "LITE가 2026-11-02에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $1.26B · 영업이익 $0.36B · 순이익 $0.36B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 1.575~1.625 billion · EPS 5.9~6.2 USD/share"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 4.57 / 예상 4.2737 (+6.93%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "LITE",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-26",
          "metrics": {
            "revenue": 1262600000.0,
            "opIncome": 359800000,
            "netIncome": 360300000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 1.575,
              "high": 1.625,
              "unit": "billion"
            },
            {
              "metric": "eps",
              "low": 5.9,
              "high": 6.2,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "second quarter 2027",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 4.57,
          "estimate": 4.2737,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 6.93,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026068655/lite_ex991xq1fy27.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-08-12",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828025039896/lite_ex991xq4fy25.htm",
            "outcome": null
          },
          {
            "filingDate": "2025-11-04",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828025048860/lite_ex991xq1fy26.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-02-03",
            "targetPeriod": "third quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026005005/lite_ex991xq2fy26.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q1'26",
              "actual": 808.4,
              "low": 780.0,
              "high": 830.0,
              "unit": "million",
              "variancePct": 0.42,
              "actualEndDate": "2026-03-28",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-05-05",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026030530/lite_ex991xq3fy26.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-08-11",
            "targetPeriod": "fourth quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026055726/lite_ex991xq4fy26.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q3'26",
              "actual": 1.2626,
              "low": 1.225,
              "high": 1.275,
              "unit": "billion",
              "variancePct": 1.01,
              "actualEndDate": "2026-09-26",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-11-02",
            "targetPeriod": "second quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026068655/lite_ex991xq1fy27.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
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
        "collectedAt": 1794872360.75106
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
        "collectedAt": 1794872360.75106
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
      "id": "47bb46bad71d02456449",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "SNDK"
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
      "headline": "SNDK SEC Form 10-Q filed",
      "headlineKo": "SNDK SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026068601/sndk-20261002.htm",
        "publishedAt": 1793286000.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "SNDK가 2026-10-30에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "SNDK",
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
      "id": "d9d44c922802c03aed96",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
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
      "headline": "MSFT SEC Form 424B2 filed",
      "headlineKo": "MSFT SEC Form 424B2 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526437008/d150456d424b2.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MSFT가 2026-10-29에 SEC Form 424B2을 제출했습니다.",
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
          "ticker": "MSFT",
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
      "id": "108cd7890a7da3a73167",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL"
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
      "headline": "GOOGL SEC Form 10-Q filed",
      "headlineKo": "GOOGL SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000084/goog-20260930.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "GOOGL가 2026-10-29에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "GOOGL",
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
      "id": "e72376e61b33cd2bf6a9",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적·재무 공식 공시",
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
      "headline": "AMZN SEC Form 8-K filed",
      "headlineKo": "AMZN SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000038/amzn-20261029.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "AMZN가 2026-10-29에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $201.94B · 영업이익 $28.08B · 순이익 $20.68B"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 하회: 실제 1.89 / 예상 2.003 (-5.64%). SEC 공식 수치와는 별도 출처입니다."
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
          "ticker": "AMZN",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 201944000000.0,
            "opIncome": 28076000000.0,
            "netIncome": 20685000000.0
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
          "actual": 1.89,
          "estimate": 2.003,
          "providerPeriod": "2026-09-30",
          "label": "miss",
          "surprisePct": -5.64,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000038/amzn-20260930xex992.htm"
        }
      }
    },
    {
      "id": "56c44e21d4b9e2243580",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 8-K filed",
      "headlineKo": "META SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526438017/d183592d8k.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-10-29에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 중요 계약 체결·변경 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 계약·수주 · 자금조달·증권발행 · 인수·매각"
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
          "ticker": "META",
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
      "id": "8baf0fc65e7004d617af",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
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
      "headline": "INTC SEC Form 8-K filed",
      "headlineKo": "INTC SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000188/intc-20261029.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "INTC가 2026-10-29에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망",
        "SEC Company Facts Q3'26: 매출 $16.51B · 영업이익 $2.52B · 순이익 $3.32B"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 0.52 / 예상 0.4043 (+28.62%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "INTC",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-26",
          "metrics": {
            "revenue": 16513000000.0,
            "opIncome": 2522000000.0,
            "netIncome": 3320000000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "eps",
              "value": 0.6,
              "unit": "USD/share",
              "basis": "unknown_pair"
            },
            {
              "metric": "eps",
              "value": 0.9,
              "unit": "USD/share",
              "basis": "unknown_pair"
            }
          ],
          "targetPeriod": "fourth quarter 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 0.52,
          "estimate": 0.4043,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 28.62,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000188/q326earningsrelease.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-07-24",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086325000107/q225_earningsrelease.htm",
            "outcome": null
          },
          {
            "filingDate": "2025-10-23",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086325000169/q325earningsrelease.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-01-22",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000009/q425earningsrelease.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-04-23",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000077/q126earningsrelease.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-07-23",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-10-29",
            "targetPeriod": "fourth quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000188/q326earningsrelease.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "d957ca3ed27dc65c6b86",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC"
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
      "headline": "KLAC SEC Form 10-Q filed",
      "headlineKo": "KLAC SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000034/klac-20260930.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "KLAC가 2026-10-29에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "KLAC",
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
      "id": "0e7e05bec270df6a6c64",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "SNDK",
      "relatedTickers": [
        "SNDK"
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
      "headline": "SNDK SEC Form 8-K filed",
      "headlineKo": "SNDK SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026068243/sndk-20261029.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "SNDK가 2026-10-29에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 기타 중요 사건 · 재무제표·첨부자료",
        "SEC Company Facts Q4'26: 매출 $11.03B · 영업이익 $8.78B · 순이익 $8.10B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 12.2~12.6 billion · EPS 55.0~57.0 USD/share · EPS 55.0~57.0 USD/share"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 49.51 / 예상 47.1481 (+5.01%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "SNDK",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q4'26",
          "endDate": "2026-10-02",
          "metrics": {
            "revenue": 11031000000.0,
            "opIncome": 8780000000,
            "netIncome": 8101000000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 12.2,
              "high": 12.6,
              "unit": "billion"
            },
            {
              "metric": "eps",
              "low": 55.0,
              "high": 57.0,
              "unit": "USD/share",
              "basis": "gaap_or_unspecified"
            },
            {
              "metric": "eps",
              "low": 55.0,
              "high": 57.0,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "second quarter 2027",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 49.51,
          "estimate": 47.1481,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 5.01,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026068243/sndkq1-27ex991xpressrelease.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-08-14",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000119312525180782/d926236dex991.htm",
            "outcome": null
          },
          {
            "filingDate": "2025-11-06",
            "targetPeriod": "second quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828025050180/sndkq1fy26ex991-pressrelea.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q1'26",
              "actual": 3.025,
              "low": 2.55,
              "high": 2.65,
              "unit": "billion",
              "variancePct": 16.35,
              "actualEndDate": "2026-01-02",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-01-29",
            "targetPeriod": "third quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026004121/sndkq2fy26ex991-pressrelea.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q2'26",
              "actual": 5.95,
              "low": 4.4,
              "high": 4.8,
              "unit": "billion",
              "variancePct": 29.35,
              "actualEndDate": "2026-04-03",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-04-30",
            "targetPeriod": "fourth quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026028879/sndkq3-26ex991xpressrelease.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q3'26",
              "actual": 8.965,
              "low": 7.75,
              "high": 8.25,
              "unit": "billion",
              "variancePct": 12.06,
              "actualEndDate": "2026-07-03",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-08-05",
            "targetPeriod": "first quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q4'26",
              "actual": 11.031,
              "low": 10.3,
              "high": 10.8,
              "unit": "billion",
              "variancePct": 4.56,
              "actualEndDate": "2026-10-02",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-10-29",
            "targetPeriod": "second quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026068243/sndkq1-27ex991xpressrelease.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "d6e60a093cc088f65cfd",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "PWR",
      "relatedTickers": [
        "PWR"
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
      "headline": "PWR SEC Form 10-Q filed",
      "headlineKo": "PWR SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1050915/000105091526000041/pwr-20260930.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "PWR가 2026-10-29에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "PWR",
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
      "id": "b5e57f1873672cd8878a",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적·재무 공식 공시",
      "primaryTicker": "PWR",
      "relatedTickers": [
        "PWR"
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
      "headline": "PWR SEC Form 8-K filed",
      "headlineKo": "PWR SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1050915/000119312526436949/d77812d8k.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "PWR가 2026-10-29에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 규정 FD 공개 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $12.01B · 영업이익 $1.03B · 순이익 $0.69B"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 6.06 / 예상 5.0684 (+19.56%). SEC 공식 수치와는 별도 출처입니다."
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
          "ticker": "PWR",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 12014877000.0,
            "opIncome": 1026547000.0,
            "netIncome": 694859000
          }
        },
        "guidance": {
          "status": "unavailable_date_only_period",
          "metrics": [
            {
              "metric": "revenue",
              "low": 41.3,
              "high": 41.6,
              "unit": "billion"
            },
            {
              "metric": "eps",
              "low": 12.57,
              "high": 12.97,
              "unit": "USD/share",
              "basis": "gaap_or_unspecified"
            },
            {
              "metric": "eps",
              "low": 17.9,
              "high": 18.3,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": null,
          "rawPeriodPhrase": "year ending December 31, 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 6.06,
          "estimate": 5.0684,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 19.56,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1050915/000119312526436949/d77812dex991.htm"
        }
      }
    },
    {
      "id": "45858963feade2e323d8",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "STX",
      "relatedTickers": [
        "STX"
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
      "headline": "STX SEC Form 10-Q filed",
      "headlineKo": "STX SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000309/stx-20261002.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "STX가 2026-10-29에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "STX",
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
      "id": "5ffc544a9562ad9701d1",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "EME",
      "relatedTickers": [
        "EME"
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
      "headline": "EME SEC Form 8-K filed",
      "headlineKo": "EME SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000132/eme-20261029.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "EME가 2026-10-29에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표",
        "SEC Company Facts Q3'26: 매출 $5.54B · 영업이익 $0.55B · 순이익 $0.40B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 20.6~21.0 billion · EPS 34.5~35.5 USD/share"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 9.6 / 예상 8.4401 (+13.74%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "EME",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 5541520000.0,
            "opIncome": 545792000.0,
            "netIncome": 399930000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 20.6,
              "high": 21.0,
              "unit": "billion"
            },
            {
              "metric": "eps",
              "low": 34.5,
              "high": 35.5,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "third quarter 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 9.6,
          "estimate": 8.4401,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 13.74,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000132/eme-ex991_2026930xq3.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-07-31",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563425000049/eme-ex991_2025630xq2.htm",
            "outcome": null
          },
          {
            "filingDate": "2025-10-30",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563425000082/eme-ex991_2025930xq3.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-02-26",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000027/eme-ex991_20251231xq4.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-04-29",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000048/eme-ex991_2026331xq1.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-07-30",
            "targetPeriod": "second quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000112/eme-ex991_2026630xq2.htm",
            "outcome": {
              "status": "uncertain_period_match",
              "metric": "revenue",
              "period": "Q3'26",
              "actual": 5.5415,
              "low": 20.0,
              "high": 20.5,
              "unit": "billion",
              "variancePct": -72.63,
              "actualEndDate": "2026-09-30",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "실제 매출과 가이던스 중앙값 차이가 비정상적으로 커서(±40%p 초과), 대상 분기 추정이 틀렸을 가능성이 있습니다 - met/missed로 단정하지 않았습니다."
            }
          },
          {
            "filingDate": "2026-10-29",
            "targetPeriod": "third quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000132/eme-ex991_2026930xq3.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "afe6ec1a8a3b1acf0eb9",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "EME",
      "relatedTickers": [
        "EME"
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
      "headline": "EME SEC Form 10-Q filed",
      "headlineKo": "EME SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000130/eme-20260930.htm",
        "publishedAt": 1793199600.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "EME가 2026-10-29에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "EME",
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
      "id": "26baa7e61d6bde03ea30",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
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
      "headline": "MSFT SEC Form 8-K filed",
      "headlineKo": "MSFT SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526436149/msft-20261028.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MSFT가 2026-10-28에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "MSFT",
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
      "id": "5a30c71b6c7b6343a8c9",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
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
      "headline": "MSFT SEC Form 10-Q filed",
      "headlineKo": "MSFT SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526436133/msft-20260930.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MSFT가 2026-10-28에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "MSFT",
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
      "id": "11310f65fcd0ea2415bc",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적·재무 공식 공시",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "MSFT"
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
      "headline": "MSFT SEC Form 8-K filed",
      "headlineKo": "MSFT SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526436122/msft-20261028.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MSFT가 2026-10-28에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $92.28B · 영업이익 $45.91B · 순이익 $36.63B"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 부합: 실제 4.89 / 예상 4.824 (+1.37%). SEC 공식 수치와는 별도 출처입니다."
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
          "ticker": "MSFT",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 92279000000.0,
            "opIncome": 45915000000.0,
            "netIncome": 36629000000.0
          }
        },
        "guidance": {
          "status": "unavailable",
          "metrics": [],
          "targetPeriod": "first quarter 2027",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 4.89,
          "estimate": 4.824,
          "providerPeriod": "2026-09-30",
          "label": "in_line",
          "surprisePct": 1.37,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526436122/msft-ex99_1.htm"
        }
      }
    },
    {
      "id": "ebdc9ba31b4c67b1ccc6",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적·재무 공식 공시",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL"
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
      "headline": "GOOGL SEC Form 8-K filed",
      "headlineKo": "GOOGL SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000080/goog-20261028.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "GOOGL가 2026-10-28에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $127.58B · 영업이익 $40.58B · 순이익 $26.17B"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 하회: 실제 2.67 / 예상 3.1081 (-14.10%). SEC 공식 수치와는 별도 출처입니다."
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
          "ticker": "GOOGL",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 127577000000,
            "opIncome": 40576000000,
            "netIncome": 26170000000
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
          "actual": 2.67,
          "estimate": 3.1081,
          "providerPeriod": "2026-09-30",
          "label": "miss",
          "surprisePct": -14.1,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000080/googexhibit991q32026.htm"
        }
      }
    },
    {
      "id": "467c6fe81a55d345814f",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 424B5 filed",
      "headlineKo": "META SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526436410/d94886d424b5.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-10-28에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "META",
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
      "id": "004fc38ecca1341e2382",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 424B5 filed",
      "headlineKo": "META SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526436405/d133631d424b5.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-10-28에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "META",
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
      "id": "4d911137643026a4276c",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526435853/d75538d8k.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "ORCL가 2026-10-28에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 규정 FD 공개 · 재무제표·첨부자료",
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
      "id": "b06efb3b1ff9b70f8646",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "KLAC",
      "relatedTickers": [
        "KLAC"
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
      "headline": "KLAC SEC Form 8-K filed",
      "headlineKo": "KLAC SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000032/klac-20261028.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "KLAC가 2026-10-28에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $4.14B · 영업이익 $1.86B · 순이익 $1.55B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 4.7 billion ± 200.0 million · EPS 1.41 USD/share ± 0.11 · EPS 1.44 USD/share ± 0.11"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 부합: 실제 1.22 / 예상 1.2011 (+1.57%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "KLAC",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 4136015000.0,
            "opIncome": 1861670000.0,
            "netIncome": 1548588000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "center": 4.7,
              "plusMinus": 200.0,
              "unit": "billion",
              "deltaUnit": "million"
            },
            {
              "metric": "eps",
              "center": 1.41,
              "plusMinus": 0.11,
              "unit": "USD/share",
              "basis": "gaap_or_unspecified"
            },
            {
              "metric": "eps",
              "center": 1.44,
              "plusMinus": 0.11,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "fiscal year 2027",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 1.22,
          "estimate": 1.2011,
          "providerPeriod": "2026-09-30",
          "label": "in_line",
          "surprisePct": 1.57,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000032/exhibit991earningsrelease0.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-07-31",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920125000020/exhibit991earningsrelease7.htm",
            "outcome": null
          },
          {
            "filingDate": "2025-10-29",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920125000031/exhibit991earningsrelease0.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-01-29",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000006/exhibit991earningsrelease1.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-04-29",
            "targetPeriod": "fourth quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000014/exhibit991earningsrelease3.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q2'26",
              "actual": 3.6576,
              "low": 3.375,
              "high": 3.775,
              "unit": "billion",
              "variancePct": 2.31,
              "actualEndDate": "2026-06-30",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-07-28",
            "targetPeriod": "first quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000024/exhibit991earningsrelease7.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q3'26",
              "actual": 4.136,
              "low": 3.8,
              "high": 4.2,
              "unit": "billion",
              "variancePct": 3.4,
              "actualEndDate": "2026-09-30",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-10-28",
            "targetPeriod": "fiscal year 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000032/exhibit991earningsrelease0.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "dcce4a8235d4bc87ed7e",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV"
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
      "headline": "GEV SEC Form 10-Q filed",
      "headlineKo": "GEV SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000163/gev-20260930.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "GEV가 2026-10-28에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "GEV",
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
      "id": "e59eb968f1b2d7bcdf00",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "매출",
      "primaryTicker": "GEV",
      "relatedTickers": [
        "GEV"
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
      "headline": "GEV SEC Form 8-K filed",
      "headlineKo": "GEV SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000162/gev-20261028.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "GEV가 2026-10-28에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $12.64B · 영업이익 $1.39B · 순이익 $1.29B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 46.5~47.5 billion"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 4.81 / 예상 3.9762 (+20.97%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "GEV",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 12642000000.0,
            "opIncome": 1394000000,
            "netIncome": 1291000000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 46.5,
              "high": 47.5,
              "unit": "billion"
            }
          ],
          "targetPeriod": "third quarter 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 4.81,
          "estimate": 3.9762,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 20.97,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000162/gevpressrelease3q26.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-07-23",
            "targetPeriod": "second quarter 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681025000132/gevpressrelease2q25.htm",
            "outcome": {
              "status": "uncertain_period_match",
              "metric": "revenue",
              "period": "Q3'25",
              "actual": 9.969,
              "low": 36.0,
              "high": 37.0,
              "unit": "billion",
              "variancePct": -72.69,
              "actualEndDate": "2025-09-30",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "실제 매출과 가이던스 중앙값 차이가 비정상적으로 커서(±40%p 초과), 대상 분기 추정이 틀렸을 가능성이 있습니다 - met/missed로 단정하지 않았습니다."
            }
          },
          {
            "filingDate": "2025-10-22",
            "targetPeriod": "third quarter 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681025000159/gevpressrelease3q25.htm",
            "outcome": {
              "status": "uncertain_period_match",
              "metric": "revenue",
              "period": "Q4'25",
              "actual": 10.956,
              "low": 36.0,
              "high": 37.0,
              "unit": "billion",
              "variancePct": -69.98,
              "actualEndDate": "2025-12-31",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "실제 매출과 가이던스 중앙값 차이가 비정상적으로 커서(±40%p 초과), 대상 분기 추정이 틀렸을 가능성이 있습니다 - met/missed로 단정하지 않았습니다."
            }
          },
          {
            "filingDate": "2026-01-28",
            "targetPeriod": "fourth quarter 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000012/gevpressrelease4q25.htm",
            "outcome": {
              "status": "uncertain_period_match",
              "metric": "revenue",
              "period": "Q1'26",
              "actual": 9.339,
              "low": 44.0,
              "high": 45.0,
              "unit": "billion",
              "variancePct": -79.01,
              "actualEndDate": "2026-03-31",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "실제 매출과 가이던스 중앙값 차이가 비정상적으로 커서(±40%p 초과), 대상 분기 추정이 틀렸을 가능성이 있습니다 - met/missed로 단정하지 않았습니다."
            }
          },
          {
            "filingDate": "2026-04-22",
            "targetPeriod": "first quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000063/gevpressrelease1q26.htm",
            "outcome": {
              "status": "uncertain_period_match",
              "metric": "revenue",
              "period": "Q2'26",
              "actual": 11.104,
              "low": 44.5,
              "high": 45.5,
              "unit": "billion",
              "variancePct": -75.32,
              "actualEndDate": "2026-06-30",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "실제 매출과 가이던스 중앙값 차이가 비정상적으로 커서(±40%p 초과), 대상 분기 추정이 틀렸을 가능성이 있습니다 - met/missed로 단정하지 않았습니다."
            }
          },
          {
            "filingDate": "2026-07-22",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000147/gevpressrelease2q26.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-10-28",
            "targetPeriod": "third quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000162/gevpressrelease3q26.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "70f3bb91845cf11aa8d7",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "HUBB",
      "relatedTickers": [
        "HUBB"
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
      "headline": "HUBB SEC Form 10-Q filed",
      "headlineKo": "HUBB SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/48898/000162828026067729/hubb-20260930.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "HUBB가 2026-10-28에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "HUBB",
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
      "id": "829d1dd6b0c115e21588",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "정기 실적 공시",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "VRT"
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
      "headline": "VRT SEC Form 10-Q filed",
      "headlineKo": "VRT SEC Form 10-Q 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067893/vrt-20260930.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "VRT가 2026-10-28에 SEC Form 10-Q을 제출했습니다."
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
          "ticker": "VRT",
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
      "id": "319a9c9c0b2a19e9f6f1",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "VRT"
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
      "headline": "VRT SEC Form 8-K filed",
      "headlineKo": "VRT SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067707/vrt-20261028.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "VRT가 2026-10-28에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 규정 FD 공개 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $4.31B · 영업이익 $0.98B · 순이익 $0.76B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 14450.0~14850.0 million · EPS 2.22~2.28 USD/share"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 2.21 / 예상 1.8488 (+19.54%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "같은 대상기간 공식 가이던스를 비교한 계산 결과는 지표별 혼조입니다: 매출 상향(+290.67%) · EPS 하향(-66.42%)"
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
          "ticker": "VRT",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 4312800000.0,
            "opIncome": 983800000.0,
            "netIncome": 764500000.0
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "low": 14450.0,
              "high": 14850.0,
              "unit": "million"
            },
            {
              "metric": "eps",
              "low": 2.22,
              "high": 2.28,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "fiscal year 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 2.21,
          "estimate": 1.8488,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 19.54,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067707/q32026exhibit991vrt10282026.htm"
        },
        "guidanceComparison": {
          "status": "available",
          "targetPeriod": "fiscal year 2026",
          "overall": "mixed",
          "metrics": [
            {
              "metric": "revenue",
              "direction": "raised",
              "previousMidpoint": 3750.0,
              "currentMidpoint": 14650.0,
              "changePct": 290.67,
              "unit": "million"
            },
            {
              "metric": "eps",
              "direction": "lowered",
              "previousMidpoint": 6.7,
              "currentMidpoint": 2.25,
              "changePct": -66.42,
              "unit": "USD/share"
            }
          ]
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-07-30",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000167410125000006/q22025exhibit991vrt7302025.htm",
            "outcome": null
          },
          {
            "filingDate": "2025-10-22",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000167410125000020/q32025exhibit991vrt10222025.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-02-11",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000167410126000006/exhibit991vrt02112026.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-04-22",
            "targetPeriod": null,
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026026379/q12026exhibit991vrt04222026.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-07-29",
            "targetPeriod": "fiscal year 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026050323/q22026exhibit991vrt07292026.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-10-28",
            "targetPeriod": "fiscal year 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067707/q32026exhibit991vrt10282026.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "51997ff18846eb245ee8",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "STX",
      "relatedTickers": [
        "STX"
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
      "headline": "STX SEC Form 8-K filed",
      "headlineKo": "STX SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000305/stx-20261024.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "STX가 2026-10-28에 SEC Form 8-K을 제출했습니다."
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
          "ticker": "STX",
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
      "id": "9f963c78490a82cdf2f1",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "FIX",
      "relatedTickers": [
        "FIX"
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
      "headline": "FIX SEC Form 8-K filed",
      "headlineKo": "FIX SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1035983/000110465926119613/tm2628385d1_8k.htm",
        "publishedAt": 1793113200.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "FIX가 2026-10-28에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "FIX",
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
      "id": "ae53639c5fc127851d70",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "AVGO",
      "relatedTickers": [
        "AVGO"
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
      "headline": "AVGO SEC Form 8-K filed",
      "headlineKo": "AVGO SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1730168/000119312526434271/d148323d8k.htm",
        "publishedAt": 1793026800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "AVGO가 2026-10-27에 SEC Form 8-K을 제출했습니다."
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
          "ticker": "AVGO",
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
      "id": "61637a64038bd94f5d89",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "HUBB",
      "relatedTickers": [
        "HUBB"
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
      "headline": "HUBB SEC Form 8-K filed",
      "headlineKo": "HUBB SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/48898/000162828026067421/hubb-20261027.htm",
        "publishedAt": 1793026800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "HUBB가 2026-10-27에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 재무제표·첨부자료",
        "SEC Company Facts Q3'26: 매출 $1.87B · 영업이익 $0.41B · 순이익 $0.26B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: EPS 17.3~17.5 USD/share · EPS 20.4~20.6 USD/share"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 부합: 실제 5.91 / 예상 5.8662 (+0.75%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "같은 대상기간 공식 가이던스를 비교한 계산 결과는 유지입니다: EPS 유지(+0.00%) · EPS 유지(+0.49%)"
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
          "ticker": "HUBB",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q3'26",
          "endDate": "2026-09-30",
          "metrics": {
            "revenue": 1872500000.0,
            "opIncome": 408700000.0,
            "netIncome": 262100000
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "eps",
              "low": 17.3,
              "high": 17.5,
              "unit": "USD/share",
              "basis": "gaap_or_unspecified"
            },
            {
              "metric": "eps",
              "low": 20.4,
              "high": 20.6,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "fiscal year 2026",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 5.91,
          "estimate": 5.8662,
          "providerPeriod": "2026-09-30",
          "label": "in_line",
          "surprisePct": 0.75,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/48898/000162828026067421/exhibit991_10272026.htm"
        },
        "guidanceComparison": {
          "status": "available",
          "targetPeriod": "fiscal year 2026",
          "overall": "maintained",
          "metrics": [
            {
              "metric": "eps",
              "direction": "maintained",
              "previousMidpoint": 17.4,
              "currentMidpoint": 17.4,
              "changePct": 0.0,
              "unit": "USD/share"
            },
            {
              "metric": "eps",
              "direction": "maintained",
              "previousMidpoint": 20.4,
              "currentMidpoint": 20.5,
              "changePct": 0.49,
              "unit": "USD/share"
            }
          ]
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-07-29",
            "targetPeriod": "second quarter 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828025036316/exhibit991_07292025.htm",
            "outcome": null
          },
          {
            "filingDate": "2025-10-28",
            "targetPeriod": "third quarter 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828025046573/exhibit991_10282025.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-02-03",
            "targetPeriod": "fourth quarter 2025",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026004800/exhibit991_02032026.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-04-30",
            "targetPeriod": "first quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026028600/exhibit991_04302026.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-07-28",
            "targetPeriod": "fiscal year 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026049934/exhibit991_07282026.htm",
            "outcome": null
          },
          {
            "filingDate": "2026-10-27",
            "targetPeriod": "fiscal year 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026067421/exhibit991_10272026.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "6c1d5317ee6f0a764b16",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067393/vrt-20261027.htm",
        "publishedAt": 1793026800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "VRT가 2026-10-27에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 규정 FD 공개 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 자금조달·증권발행 · 인수·매각"
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
      "id": "fb4299d1beea1199691a",
      "schemaVersion": 1,
      "eventType": "official_filing",
      "eventLabel": "중요사항 공시",
      "primaryTicker": "MOD",
      "relatedTickers": [
        "MOD"
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
      "headline": "MOD SEC Form 8-K filed",
      "headlineKo": "MOD SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/67347/000110465926119218/mod-20261021x8k.htm",
        "publishedAt": 1793026800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "MOD가 2026-10-27에 SEC Form 8-K을 제출했습니다.",
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
          "ticker": "MOD",
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
      "id": "e6696bb6cf1a7066c543",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "EPS",
      "primaryTicker": "STX",
      "relatedTickers": [
        "STX"
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
      "headline": "STX SEC Form 8-K filed",
      "headlineKo": "STX SEC Form 8-K 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000300/stx-20261027.htm",
        "publishedAt": 1793026800.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "STX가 2026-10-27에 SEC Form 8-K을 제출했습니다.",
        "SEC 원문에서 확인된 항목: 실적·재무상태 발표 · 규정 FD 공개 · 재무제표·첨부자료",
        "원문에서 관련 표현이 확인된 주제: 가이던스·전망",
        "SEC Company Facts Q4'26: 매출 $4.23B · 영업이익 $2.06B · 순이익 $1.76B",
        "SEC 공식 실적발표 첨부자료의 현재 가이던스: 매출 4.8 billion ± 100.0 million · EPS 9.2 USD/share ± 0.2"
      ],
      "reportedClaims": [],
      "marketInterpretation": [
        "공식 실적 숫자와 향후 가이던스는 이익 전망과 적정가 판단의 기준점이지만, 일회성 항목과 회계기간을 함께 확인해야 합니다.",
        "Finnhub 시장 EPS 컨센서스 대비 예상 상회: 실제 7.68 / 예상 7.4926 (+2.50%). SEC 공식 수치와는 별도 출처입니다."
      ],
      "aiInference": [
        "공시 제출 사실은 확인됐지만 세부 내용의 투자 영향은 원문 Item·첨부자료를 읽기 전까지 확정하지 않습니다.",
        "공식 첨부자료에서 현재 가이던스를 확인해 기준점 6회를 저장했습니다. 같은 대상기간의 이전 공식 가이던스가 없어 아직 상향·유지·하향으로 판정하지 않았습니다."
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
          "ticker": "STX",
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
        "version": 8,
        "analyzedAt": 1794873634.0992289,
        "officialActuals": {
          "status": "available",
          "source": "SEC Company Facts",
          "period": "Q4'26",
          "endDate": "2026-10-02",
          "metrics": {
            "revenue": 4233000000,
            "opIncome": 2064000000,
            "netIncome": 1761000000
          }
        },
        "guidance": {
          "status": "available",
          "metrics": [
            {
              "metric": "revenue",
              "center": 4.8,
              "plusMinus": 100.0,
              "unit": "billion",
              "deltaUnit": "million"
            },
            {
              "metric": "eps",
              "center": 9.2,
              "plusMinus": 0.2,
              "unit": "USD/share",
              "basis": "non_gaap"
            }
          ],
          "targetPeriod": "second quarter 2027",
          "comparison": "no_prior_guidance"
        },
        "consensusComparison": {
          "status": "available",
          "source": "Finnhub earnings consensus",
          "metric": "eps",
          "actual": 7.68,
          "estimate": 7.4926,
          "providerPeriod": "2026-09-30",
          "label": "beat",
          "surprisePct": 2.5,
          "notice": "시장 데이터 제공자의 최근 EPS 컨센서스입니다. SEC 공식 숫자와 출처가 다르며 제공자 회계기간 표기가 공시일과 다를 수 있습니다."
        },
        "notice": "확인된 사실(SEC)과 시장 컨센서스(Finnhub)를 분리했습니다. 이전 공식 가이던스가 없으면 상향·하향으로 판정하지 않습니다.",
        "exhibit": {
          "status": "available",
          "url": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000300/stxq12027pressreleasefinan.htm"
        },
        "guidanceComparison": {
          "status": "unavailable",
          "reason": "같은 대상기간의 이전 공식 가이던스 없음"
        },
        "guidanceHistory": [
          {
            "filingDate": "2025-07-29",
            "targetPeriod": "first quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778925000148/stxq42025pressreleasefinan.htm",
            "outcome": {
              "status": "met",
              "metric": "revenue",
              "period": "Q4'25",
              "actual": 2.629,
              "low": 2.35,
              "high": 2.65,
              "unit": "billion",
              "variancePct": 5.16,
              "actualEndDate": "2025-10-03",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2025-10-28",
            "targetPeriod": "second quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778925000283/stxq12026pressreleasefinan.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q1'26",
              "actual": 2.825,
              "low": 2.6,
              "high": 2.8,
              "unit": "billion",
              "variancePct": 4.63,
              "actualEndDate": "2026-01-02",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-01-27",
            "targetPeriod": "third quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000016/stxq22026pressreleasefinan.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q2'26",
              "actual": 3.112,
              "low": 2.8,
              "high": 3.0,
              "unit": "billion",
              "variancePct": 7.31,
              "actualEndDate": "2026-04-03",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-04-28",
            "targetPeriod": "fourth quarter 2026",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000084/stxq32026pressreleasefinan.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q3'26",
              "actual": 3.629,
              "low": 3.35,
              "high": 3.55,
              "unit": "billion",
              "variancePct": 5.19,
              "actualEndDate": "2026-07-03",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-07-28",
            "targetPeriod": "first quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000153/stxq42026pressreleasefinan.htm",
            "outcome": {
              "status": "above_high",
              "metric": "revenue",
              "period": "Q4'26",
              "actual": 4.233,
              "low": 4.0,
              "high": 4.2,
              "unit": "billion",
              "variancePct": 3.24,
              "actualEndDate": "2026-10-02",
              "source": "SEC Company Facts",
              "settledAt": 1794886002.228941,
              "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
            }
          },
          {
            "filingDate": "2026-10-27",
            "targetPeriod": "second quarter 2027",
            "status": "available",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000300/stxq12027pressreleasefinan.htm",
            "outcome": null
          }
        ],
        "guidanceOutcome": null
      }
    },
    {
      "id": "f9078cb0ac47dd5ed1b7",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 424B5 filed",
      "headlineKo": "META SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526431043/d133631d424b5.htm",
        "publishedAt": 1792940400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-10-26에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "META",
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
      "id": "1b75a9409c94b56c172e",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form 424B5 filed",
      "headlineKo": "META SEC Form 424B5 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526431040/d94886d424b5.htm",
        "publishedAt": 1792940400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-10-26에 SEC Form 424B5을 제출했습니다.",
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
          "ticker": "META",
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
      "id": "5875eb9b2996f13e755b",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "증권등록·투자설명서 제출",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "META SEC Form S-3ASR filed",
      "headlineKo": "META SEC Form S-3ASR 공식 제출",
      "source": {
        "name": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526431009/d127909ds3asr.htm",
        "publishedAt": 1792940400.0,
        "collectedAt": 1794872360.75106
      },
      "confirmedFacts": [
        "META가 2026-10-26에 SEC Form S-3ASR을 제출했습니다.",
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
          "ticker": "META",
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
    "NVDA": [
      "0dcc36ba2dbe5657bbb0",
      "e6824f3477b2803a965d",
      "b7e45f85d2ec7ee1d59b",
      "5dff9e2d16440a566403",
      "b7e3802ae84d931d7949",
      "eaf599d078842c81b5cb",
      "589594bcd4e9feb57c01",
      "f0861d17134d48154816",
      "5bbc7d9886944ae5c09a",
      "0e27fca9beec730f8d37",
      "cbec0954b09828b4f0b5",
      "ae9d8fd1f4df1a6a8992",
      "49f01e62ebf7ae40d028",
      "deed1a091c295391e142",
      "048b9183f04bedf1ed95",
      "103daf15b15299ae66b6",
      "734d390ec8c56ba318cc",
      "9aaee0aaedcc3c0abf60",
      "7941ca96e5162afc4053",
      "6db2ae8f899ff9d1e0ab",
      "cc6ebc978cdfce294d27",
      "b027713d6a1cdcc95008",
      "bf1d71746a67ac3ca8d5",
      "2489aff5a77a8d7d6e80",
      "f5742506fd714da9c816",
      "85e2e50150dff802d2d8",
      "f72bc03d39aa469ef51e",
      "c0e1588df90a238e6955",
      "87bbb0a98755f2f04204",
      "c664e359c4da2b1cf4bd",
      "33f1faffedfe64d4306a",
      "54811efec2b7023fc659",
      "e845905f71b692556cda",
      "093be51d310bf4f037d2",
      "0152278065590017d545",
      "7393a89d049e048e4bdb",
      "048bba1084a07c6a0613",
      "20bc06388bef8ebb1daa"
    ],
    "SPY": [
      "e6824f3477b2803a965d",
      "2b8630fc07c68fce84ef",
      "eaf599d078842c81b5cb",
      "cff0a28bf369946b4a8e",
      "011dd1545c6d761f4aed",
      "9abf6838450994c323fd",
      "f00806c6b0399c092995",
      "c3b28575741e6462d725",
      "466d34569464434b4642",
      "dcb843a7ef535888b0c9",
      "5c7ffef54e8330c64654",
      "5bbc7d9886944ae5c09a",
      "cbec0954b09828b4f0b5",
      "4771956b7e0d4639b1b6",
      "ae9d8fd1f4df1a6a8992",
      "deed1a091c295391e142",
      "f7064bae91ac9949e59e",
      "5484c69d7689a4bb0f0d",
      "734d390ec8c56ba318cc",
      "c277a6fbb1fda29cf002",
      "7941ca96e5162afc4053",
      "61dea98f4b83b7b5b6b0",
      "164bee69a3a830ae00cb",
      "9063e7107d7a901d8bcb",
      "3234d7982b41f3acbc8e",
      "2489aff5a77a8d7d6e80",
      "693192507f8cfed02dba",
      "3d95f8417013f9999973",
      "1355dc098be9ec94162e",
      "207e1058ce45bf64a2f1",
      "edbdba7bc0d3739b0d93",
      "ea68e532ca68c7862ab8",
      "1c015dbb5105e2ed156c",
      "7b9f7ff0d5248a202164",
      "8192ea910bbb8d3a8248",
      "f77e0df2e77dddd4c998",
      "aff754608d162d02fc12",
      "048bba1084a07c6a0613",
      "61029359415450de3acd",
      "970425ee8c73d961bcd0",
      "cb6e6934b0feec954a28",
      "ca824d80e73d90c668c1",
      "986ec4fb1e27c461a623",
      "56df8640cc4bd9a9eba5",
      "adec62ae9203c21bb113"
    ],
    "AVGO": [
      "2b8630fc07c68fce84ef",
      "bc5cec78dcfa3f712974",
      "cbec0954b09828b4f0b5",
      "29598abe58a8c093f937",
      "deed1a091c295391e142",
      "6a348d3b6a82e91a4f05",
      "1c015dbb5105e2ed156c",
      "f77e0df2e77dddd4c998",
      "ae53639c5fc127851d70"
    ],
    "QQQ": [
      "2b8630fc07c68fce84ef",
      "eaf599d078842c81b5cb",
      "cff0a28bf369946b4a8e",
      "011dd1545c6d761f4aed",
      "9abf6838450994c323fd",
      "c3b28575741e6462d725",
      "466d34569464434b4642",
      "dcb843a7ef535888b0c9",
      "5c7ffef54e8330c64654",
      "5bbc7d9886944ae5c09a",
      "cbec0954b09828b4f0b5",
      "4771956b7e0d4639b1b6",
      "ae9d8fd1f4df1a6a8992",
      "deed1a091c295391e142",
      "f7064bae91ac9949e59e",
      "048b9183f04bedf1ed95",
      "5484c69d7689a4bb0f0d",
      "734d390ec8c56ba318cc",
      "1acf5b9c3899d029370f",
      "c277a6fbb1fda29cf002",
      "7941ca96e5162afc4053",
      "61dea98f4b83b7b5b6b0",
      "164bee69a3a830ae00cb",
      "9063e7107d7a901d8bcb",
      "3234d7982b41f3acbc8e",
      "2489aff5a77a8d7d6e80",
      "693192507f8cfed02dba",
      "3d95f8417013f9999973",
      "1355dc098be9ec94162e",
      "207e1058ce45bf64a2f1",
      "edbdba7bc0d3739b0d93",
      "54811efec2b7023fc659",
      "1c015dbb5105e2ed156c",
      "7b9f7ff0d5248a202164",
      "8192ea910bbb8d3a8248",
      "f77e0df2e77dddd4c998",
      "048bba1084a07c6a0613",
      "61029359415450de3acd",
      "970425ee8c73d961bcd0",
      "cb6e6934b0feec954a28",
      "ca824d80e73d90c668c1",
      "986ec4fb1e27c461a623",
      "adec62ae9203c21bb113"
    ],
    "AMD": [
      "5dff9e2d16440a566403",
      "589594bcd4e9feb57c01",
      "c3b28575741e6462d725",
      "f0861d17134d48154816",
      "5bbc7d9886944ae5c09a",
      "cbec0954b09828b4f0b5",
      "deed1a091c295391e142",
      "9aaee0aaedcc3c0abf60",
      "6db2ae8f899ff9d1e0ab",
      "cc6ebc978cdfce294d27",
      "b027713d6a1cdcc95008",
      "bf1d71746a67ac3ca8d5",
      "f5742506fd714da9c816",
      "de311b7b15c4e866cdd1",
      "c0e1588df90a238e6955",
      "87bbb0a98755f2f04204",
      "33f1faffedfe64d4306a",
      "1c015dbb5105e2ed156c",
      "e845905f71b692556cda",
      "646cf620113328b7ffdb",
      "fc2aa7212055b653581b"
    ],
    "MU": [
      "5dff9e2d16440a566403",
      "589594bcd4e9feb57c01",
      "f0861d17134d48154816",
      "cbec0954b09828b4f0b5",
      "154468dd6659774f18a4",
      "378ca1b3e25d318d1118",
      "5484c69d7689a4bb0f0d",
      "9aaee0aaedcc3c0abf60",
      "c277a6fbb1fda29cf002",
      "61dea98f4b83b7b5b6b0",
      "6db2ae8f899ff9d1e0ab",
      "cc6ebc978cdfce294d27",
      "c93540536fea51e7182c",
      "b027713d6a1cdcc95008",
      "bf1d71746a67ac3ca8d5",
      "f5742506fd714da9c816",
      "f72bc03d39aa469ef51e",
      "c0e1588df90a238e6955",
      "693192507f8cfed02dba",
      "87bbb0a98755f2f04204",
      "207e1058ce45bf64a2f1",
      "33f1faffedfe64d4306a",
      "e845905f71b692556cda",
      "f8ce628334f05236b390",
      "0152278065590017d545",
      "e91fae4d8cf9cc205e3d"
    ],
    "ORCL": [
      "5dff9e2d16440a566403",
      "f0861d17134d48154816",
      "8621a499d4c4876d64cc",
      "9aaee0aaedcc3c0abf60",
      "6db2ae8f899ff9d1e0ab",
      "cc6ebc978cdfce294d27",
      "b027713d6a1cdcc95008",
      "bf1d71746a67ac3ca8d5",
      "f5742506fd714da9c816",
      "c0e1588df90a238e6955",
      "87bbb0a98755f2f04204",
      "33f1faffedfe64d4306a",
      "e845905f71b692556cda",
      "c5e6a4a602060eb3a551",
      "d1769d8db0914f34a83f",
      "ff0c47a5e3f151b4f047",
      "5f65566f62c03854c2f2",
      "b5b21de0cbb13a7c2e1c",
      "193436c7eb9bb4a49fd1",
      "ae9c0956c41bdca322b8",
      "4d911137643026a4276c"
    ],
    "TSM": [
      "5dff9e2d16440a566403",
      "f0861d17134d48154816",
      "dcb843a7ef535888b0c9",
      "7393a89d049e048e4bdb",
      "3dc458ff08305ceef8c0",
      "3737363b2475623334f2",
      "0ad454e998a76dedc1b0",
      "ae07fea7d8534bc76db3",
      "a5837a92d46d8a93d0fb"
    ],
    "QCOM": [
      "b7e3802ae84d931d7949",
      "3d95f8417013f9999973",
      "34eb6a3aa1444869771d",
      "6bc58a529b4b93b444c6",
      "a748407586d6b5366d91",
      "481afffd415c4a0ef823",
      "2d1f86479f5eec74f8f0",
      "7b437239c73a66b08c17"
    ],
    "TSLA": [
      "eaf599d078842c81b5cb",
      "9abf6838450994c323fd",
      "7941ca96e5162afc4053",
      "9063e7107d7a901d8bcb",
      "ea68e532ca68c7862ab8"
    ],
    "MSFT": [
      "cff0a28bf369946b4a8e",
      "bf1d71746a67ac3ca8d5",
      "54811efec2b7023fc659",
      "bdb0439ae5b788732ac9",
      "9d4af1b3e363d3bdf20d",
      "d0b945befced920eb600",
      "d9d44c922802c03aed96",
      "26baa7e61d6bde03ea30",
      "5a30c71b6c7b6343a8c9",
      "11310f65fcd0ea2415bc"
    ],
    "GOOGL": [
      "011dd1545c6d761f4aed",
      "cc6ebc978cdfce294d27",
      "c664e359c4da2b1cf4bd",
      "edbdba7bc0d3739b0d93",
      "ab34873f91349da6a1cf",
      "0152278065590017d545",
      "aff754608d162d02fc12",
      "95ccdd82bd81c2f300be",
      "616a5d2516bf0cb80f80",
      "2ec8c4fe0fd9c22bfbb1",
      "108cd7890a7da3a73167",
      "ebdc9ba31b4c67b1ccc6"
    ],
    "AMZN": [
      "9abf6838450994c323fd",
      "f00806c6b0399c092995",
      "af05797deeabdd6b5b66",
      "164bee69a3a830ae00cb",
      "e7f4a39316703d14eb51",
      "b1d75394d9662c4c26a9",
      "54811efec2b7023fc659",
      "ab34873f91349da6a1cf",
      "0152278065590017d545",
      "4714c24dc572d9b509f5",
      "e72376e61b33cd2bf6a9"
    ],
    "BE": [
      "466d34569464434b4642"
    ],
    "INTC": [
      "dcb843a7ef535888b0c9",
      "1ce77744b4df8eaa76be",
      "488a2856d095a1e7b2bd",
      "0e27fca9beec730f8d37",
      "cbec0954b09828b4f0b5",
      "1acf5b9c3899d029370f",
      "1b178a1bf0b95a39e5b7",
      "b027713d6a1cdcc95008",
      "e9db5583b6bca746d828",
      "1355dc098be9ec94162e",
      "72a777659b1fa9078597",
      "0684c3a8bd7fe1f09932",
      "99c03dcdb8202f4bc529",
      "8baf0fc65e7004d617af"
    ],
    "PLTR": [
      "5c7ffef54e8330c64654",
      "80cef9e45f147f76ec10",
      "103daf15b15299ae66b6",
      "1f34b47f410f1761ec0b",
      "2369c1d16f5c4c59d97a",
      "bf1d71746a67ac3ca8d5",
      "a9fbdd816936a9594226",
      "d746edbda425108c45ce",
      "b5edbcd361c582cdb2d8"
    ],
    "LITE": [
      "cbec0954b09828b4f0b5",
      "c2302659fb7507d38987",
      "85e2e50150dff802d2d8",
      "f77e0df2e77dddd4c998",
      "90ae148862d5d59d56e8",
      "4670d0cc7f8c0c76dc24",
      "97f1f329bfc158dd493a",
      "a6bce08286d2472adb1a",
      "716107b975b46d7039e4"
    ],
    "MRVL": [
      "cbec0954b09828b4f0b5",
      "c2302659fb7507d38987",
      "3d1efea95f419657c2fb",
      "b5b450a497428d789067",
      "f77e0df2e77dddd4c998",
      "90ae148862d5d59d56e8",
      "1c03bd7b75bfbbef4408",
      "4670d0cc7f8c0c76dc24",
      "c0cdd1344625b90f0369",
      "0c12289720acffc39255",
      "dc36ef4861448ce3506a"
    ],
    "SNDK": [
      "4771956b7e0d4639b1b6",
      "734d390ec8c56ba318cc",
      "3234d7982b41f3acbc8e",
      "f72bc03d39aa469ef51e",
      "693192507f8cfed02dba",
      "7b9f7ff0d5248a202164",
      "47bb46bad71d02456449",
      "0e7e05bec270df6a6c64"
    ],
    "ARM": [
      "49f01e62ebf7ae40d028",
      "0e1015f97f442561e12e",
      "61029359415450de3acd",
      "970425ee8c73d961bcd0",
      "acd3dcf57743b7781f1b",
      "07c747d5bcc6ae95ffe2"
    ],
    "ASML": [
      "f7064bae91ac9949e59e",
      "048bba1084a07c6a0613",
      "970425ee8c73d961bcd0"
    ],
    "META": [
      "edf27dd9f9266c350e30",
      "32452a9341b293c5647f",
      "c93314b7eb02a57e740b",
      "e845905f71b692556cda",
      "874af98cad2f26ece217",
      "4669fc21bc6f029f2c6d",
      "fa7278579cf26e022f17",
      "f1d7b78f09df22cbfdbe",
      "cab5aebcea94d6985a75",
      "fdae760b0ce210e64541",
      "56c44e21d4b9e2243580",
      "467c6fe81a55d345814f",
      "004fc38ecca1341e2382",
      "f9078cb0ac47dd5ed1b7",
      "1b75a9409c94b56c172e",
      "5875eb9b2996f13e755b"
    ],
    "AAPL": [
      "2de0bcef4572d6466e87",
      "bc2167dd131740429f5b",
      "6ff08acb8a5111eb3bfa",
      "46d0d6c359fd0830b089",
      "c4911ea8125f05b636a5",
      "7f973250812fe77e865a",
      "26ef2091f1d5f3f77aae"
    ],
    "PWR": [
      "6db2ae8f899ff9d1e0ab",
      "5b096fb9721e0ee2c678",
      "d6e60a093cc088f65cfd",
      "b5e57f1873672cd8878a"
    ],
    "CEG": [
      "c5582ee7aec653f07d59",
      "720a24e910a53e9e9466",
      "986ec4fb1e27c461a623",
      "fcb5a428d837ea239b75",
      "2546597951a305d8608f",
      "44fb5e0d5c0b85ddc8fe"
    ],
    "CRM": [
      "75358690358a080da24a",
      "f5742506fd714da9c816",
      "ca824d80e73d90c668c1",
      "95ce0cc64327a77714f7"
    ],
    "COHR": [
      "85e2e50150dff802d2d8",
      "cb6e6934b0feec954a28",
      "0364965cbb3cf1e50dd1",
      "c2999afa352c772a79f2"
    ],
    "WDC": [
      "693192507f8cfed02dba",
      "f7e9340a8c79bbd3160a",
      "a96aefb154e89d8bc77d",
      "b5564dafe8efde358a79"
    ],
    "ANET": [
      "87bbb0a98755f2f04204",
      "3a1cd9fb3eadcc3fbedc",
      "a462278c94da57a48de9",
      "385d6990a7e0b82ee8bf"
    ],
    "AMAT": [
      "e2f836a90a356400a429",
      "b224d5d92f242e6ad732",
      "840c4301082d9d32cab9",
      "cb5768adb4deab06d036",
      "7f951137c36c4f57f727",
      "3170428ca0e1fa890986"
    ],
    "VST": [
      "7b6f6109aa20f13b8e0b",
      "87353c9d4962b7064be5",
      "ed406e1f29281e420922",
      "fcb5a428d837ea239b75",
      "ecc3696039a74a72dbc4",
      "7ef42d43619b11bad633",
      "ef1587ba1d33c764cd10",
      "f3f7b6b489bbad46c877"
    ],
    "MOD": [
      "890f884979a036e93e13",
      "c57656216d76fa2ed4c4",
      "f8f1b55abe51cbceeb52",
      "1a8616c994889850d245",
      "fb4299d1beea1199691a"
    ],
    "GEV": [
      "94645a33c24772006848",
      "50b307517b4564515eb4",
      "adec62ae9203c21bb113",
      "dcce4a8235d4bc87ed7e",
      "e59eb968f1b2d7bcdf00"
    ],
    "EME": [
      "0d296982db813c310c57",
      "75935bdd2b885df34ca3",
      "5ffc544a9562ad9701d1",
      "afe6ec1a8a3b1acf0eb9"
    ],
    "ETN": [
      "56df8640cc4bd9a9eba5",
      "a6b1144ac873c4611e45",
      "930d501949246ba3c666",
      "906231c6728f81e433cb"
    ],
    "VRT": [
      "626d74d96db0593c9a76",
      "adec62ae9203c21bb113",
      "829d1dd6b0c115e21588",
      "319a9c9c0b2a19e9f6f1",
      "6c1d5317ee6f0a764b16"
    ],
    "HUBB": [
      "adec62ae9203c21bb113",
      "0ce38e6a5635226382f5",
      "70f3bb91845cf11aa8d7",
      "61637a64038bd94f5d89"
    ],
    "KLAC": [
      "9ec89fb0fdc77e843bed",
      "d957ca3ed27dc65c6b86",
      "b06efb3b1ff9b70f8646"
    ],
    "LRCX": [
      "cd5efdbeb6384f64c575"
    ],
    "FIX": [
      "27fd8bf4ef95741240e9",
      "9f963c78490a82cdf2f1"
    ],
    "STX": [
      "45858963feade2e323d8",
      "51997ff18846eb245ee8",
      "e6696bb6cf1a7066c543"
    ]
  }
};
