// 자동 생성 파일 - 중요 뉴스 이벤트 분류(민감정보 없음)
const EVENT_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1795598594.9913833,
  "events": [
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "BE Stock Slumps After AI-Driven Gains: This Analyst Sees ‘An Attractive Entry Point’",
      "headlineKo": "AI 기반 이익 후 BE 주식 폭락: 이 분석가는 '매력적인 진입점'을 봅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c8f2fd8cea6cee517ec87dc748b300720c7dc786f5e7997cd40770775a53603",
        "publishedAt": 1795578831,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 기반 이익 후 BE 주식 하락: 이 분석가는 '매력적인 진입점'을 봅니다. AI 에이전트 동향 뉴스 수익 전체 DIA 0.55% SPY 0.75% QQQ 1.38% 추세 DELL 0.38% SOXL 7.51% APLD 3.76% AMBA 36.65% AEHR 4.34% MU 3.23% WULF 3.60% 소피",
        "AI 기반 이익 이후 BE 주식 급락: 이 분석가는 '매력적인 진입점'을 보고 있습니다. Morgan Stanley는 BE 주식이 여러 긍정적인 촉매 속에서 \"투자자들에게 매력적인 진입점\"을 제공했다고 말했습니다.",
        "스마트폰에 Bloom Energy Corporation 로고가 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.75%, 1.38% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.75%, 1.38% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
      "id": "86148b5ffcf1db979fb0",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "SPY",
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
      "headline": "S&P 500, Nasdaq End Lower As AI Jitters Resurface With Nvidia’s Governance Issues And Talks Of Fresh Import Tariffs  — NVDA, DELL, TSLA, TGTX In Focus",
      "headlineKo": "S&P 500, Nasdaq은 Nvidia의 거버넌스 문제와 새로운 수입 관세에 대한 논의로 AI 불안이 다시 나타나면서 하락 마감 — NVDA, DELL, TSLA, TGTX 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a0c08d5bca041ef39423f082d872c660d783895141466fd52db17e544c9b9ae",
        "publishedAt": 1795565532,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Nasdaq은 Nvidia의 거버넌스 문제와 신규 수입 관세 논의로 AI 불안이 다시 표면화되면서 하락 마감 — NVDA, DELL, TSLA, TGTX 초점 AI 에이전트 동향 뉴스 수입 전체 DIA 0.55% SPY 0.71% QQQ 1.45% 추세 DELL 0.18% SOXL",
        "S&P 500, 나스닥은 Nvidia의 거버넌스 문제와 새로운 수입 관세 논의로 AI 불안이 다시 나타나면서 하락 마감 — NVDA, DELL, TSLA, TGTX In Focus 트럼프 행정부는 중국을 겨냥한 새로운 관세 부과를 준비하고 있는 것으로 알려졌습니다.",
        "트레이더들이 2026년 9월 29일 뉴욕시 뉴욕증권거래소(NYSE) 1층에서 일하고 있다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.71%, 1.45% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.55%, 0.71%, 1.45% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 인텔 주식이 하락한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 ​​$59,201.00 -2.1%",
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stephanie Link는 Marvell이 2031년까지 주당 30달러를 벌 수 있다고 말합니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,156.60 −0.59% Dow Jones 49,836.10 −0.34% Nasdaq 100 25,916.70 −1.14% Russell 2000 2,673.06 −0.42% S&P 500 7,156.60 −0.59% 다우존스 49,836.10 −0.34% 나스닥 100 25,916.70 −1.14% 러셀 20",
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: 어떤 AI 메모리 주식이 더 나은 구매인가요?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 $59,201.00 -2.1% -$1,267.90 개미 $81.91 -6.5",
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
        "collectedAt": 1795588360.6221712
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Amazon.com (AMZN) Still Below Fair Value As AI Spending Rises?",
      "headlineKo": "AI 지출이 증가함에 따라 Amazon.com(AMZN)이 여전히 적정 가치보다 낮습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6e2157b68c74a377deacee1d612d5d9aed87a1c665b490811763e829fbddf16",
        "publishedAt": 1795551044,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 지출이 증가함에 따라 Amazon.com(AMZN)이 여전히 적정 가치보다 낮습니까?"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "거래 첫날 GE Vernova의 $10,000 가치는 현재 얼마입니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,201.09 -0.5% -36.08 DJI 50,018.70 +0.9% +423.39 NASDAQ 23,733.54 -1.5% -356.02 비트코인 $59,201.00 -2.1% -$1,267.90 개미 $81.91 -6.5",
        "GE Vernova에 대한 10,000달러 투자가 50,000달러 이상으로 증가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $10,000, $50,000., 4.76% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $10,000, $50,000., 4.76% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "다음 성장 단계는 더욱 커질 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,156.60 −0.59% Dow Jones 49,836.10 −0.34% Nasdaq 100 25,916.70 −1.14% Russell 2000 2,673.06 −0.42% S&P 500 7,156.60 −0.59% 다우존스 49,836.10 −0.34% 나스닥 100 25,916.70 −1.14% 러셀 20",
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Generate A Return From Marvell Stock, Set For A Large Post-Earnings Swing",
      "headlineKo": "Marvell 주식에서 수익 창출, 대규모 수익 변동 예상",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e365179ec9ab490c39b3babe282f44e0eed8572f092fda8b63b705f1d4a7aa92",
        "publishedAt": 1795541384,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell 주식에서 수익 창출, 대규모 수익 변동 예상"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "EMCOR 주식의 연승은 행운일 수 있을까?",
        "| Trefis Trefis 스토리라인 EMCOR 주식의 연속 우승은 행운일 수 있을까요?",
        "2026년 11월 24일 · 작성자: Trefis Team EME YTD +3.5% SPY YTD +6.2% XLI YTD +5.0% EME 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3.5%, 6.2%, 5.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.5%, 6.2%, 5.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
        "collectedAt": 1795588360.6221712
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
    },
    {
      "id": "ece45c107007ce09c442",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AAPL",
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
      "headline": "Global Neural Processor Market Report 2026: Size, Share, Trends, and Forecast to 2030 | Capitalize on 22.2% CAGR as NVIDIA, Apple, Alphabet, and Intel Accelerate Edge AI",
      "headlineKo": "글로벌 신경 프로세서 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | NVIDIA, Apple, Alphabet 및 Intel Accelerate Edge AI로 CAGR 22.2% 활용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99ecd98b1bdd47f6ad8586279612445a4ea947265f81931d52ff1e61c2c775c6",
        "publishedAt": 1795531260,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 GOOGL의 사업과 관련된 'Global Neural Processor Market Report 2026: Size, Share, Trends, and Forecast to 2030 | Capitalize on 22.2% CAGR as NVIDIA, Apple, Alphabet, and Intel Accelerate Edge AI' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "7d419f006a33477fae38",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "QCOM",
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
          "name": "NVIDIA",
          "role": "기사에 직접 언급",
          "verification": "headline_or_analysis"
        },
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
      "headline": "Embedded Microprocessor Unit (MPU) Global Market Report 2026 | Capitalize on Edge AI and IoT Growth to $59.18 Billion by 2030 with NVIDIA, Intel, Qualcomm, NXP, and Renesas",
      "headlineKo": "임베디드 마이크로프로세서 유닛(MPU) 글로벌 시장 보고서 2026 | NVIDIA, Intel, Qualcomm, NXP 및 Renesas를 통해 Edge AI 및 IoT 성장을 활용하여 2030년까지 591억 8천만 달러 규모로 성장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2669220dd9cb4a8ab8dc7a928c0217a35a81c8f6669ff6751ecd5fd06a950683",
        "publishedAt": 1795530960,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 QCOM의 사업과 관련된 'Embedded Microprocessor Unit (MPU) Global Market Report 2026 | Capitalize on Edge AI and IoT Growth to $59.18 Billion by 2030 with NVIDIA, Intel, Qualcomm, NXP, and Renesas' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "66bcfd4195c99362577a",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
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
      "headline": "Global Document Collaboration Market Report 2026: Size, Share, Trends and Forecast to 2030 | Capitalize on AI, Cloud and Secure Workflows with Microsoft, Google, Adobe and Box",
      "headlineKo": "글로벌 문서 협업 시장 보고서 2026: 2030년 규모, 점유율, 추세 및 예측 | Microsoft, Google, Adobe 및 Box를 통해 AI, 클라우드 및 보안 워크플로를 활용하세요",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ff7c423c3e96ad7fd0dc54c6f8d8d63ad1d374f39150836d414d6bc9e0494c86",
        "publishedAt": 1795530540,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 GOOGL의 사업과 관련된 'Global Document Collaboration Market Report 2026: Size, Share, Trends and Forecast to 2030 | Capitalize on AI, Cloud and Secure Workflows with Microsoft, Google, Adobe and Box' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0d9927cdcdbc447d0a71",
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
      "headline": "What Changed In Apple Stock's Story?",
      "headlineKo": "Apple 주식 이야기에서 무엇이 바뀌었나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ccf58c8e0216355362e8b1eefd312452d83f0fa89aafd8175c8e4cd1946d7e9",
        "publishedAt": 1795528442,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Apple 주식 이야기에서 무엇이 바뀌었나요?",
        "| Trefis Trefis 스토리라인 Apple 주식 스토리에서 무엇이 바뀌었나요?",
        "2026년 11월 24일 · 작성자: Trefis Team AAPL YTD +28.9% SPY YTD +6.7% QQQ YTD +6.3% AAPL 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 28.9%, 6.7%, 6.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 28.9%, 6.7%, 6.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7a81b5a009c1e8dcd96a",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce’s Agentforce Has a New Rival: Sierra Just Doubled to a $400M Run Rate",
      "headlineKo": "Salesforce의 Agentforce에 새로운 경쟁자가 생겼습니다. Sierra는 실행 속도가 4억 달러로 두 배 증가했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b06bfee1b65ec7bc7611a562ffac9d039e1abde1e556228dca40978b6a9577c",
        "publishedAt": 1795528246,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce의 Agentforce에 새로운 경쟁자가 생겼습니다. Sierra의 실행 속도가 4억 달러로 두 배 증가했습니다 | TIKR.com 일반 투자 Salesforce의 Agentforce에 새로운 라이벌이 생겼습니다. Sierra의 실행률이 4억 달러로 두 배 증가했습니다. Wiltone Asuncion • 5분 읽기 검토자: Mic",
        "이는 Agentforce의 연간 반복 수익의 약 4분의 1에 해당하며 NiCE의 전체 AI 사업보다 약간 더 많습니다.",
        "ServiceNow가 동일한 AI 예산을 추구함에 따라 Salesforce는 Informatica 없이 지난 분기에 6% 성장했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $400, $1.75 billion, $30 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $400, $1.75 billion, $30 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4e3030ee199ee4b1773d",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Palantir Stock Priced Right Against Its Rivals?",
      "headlineKo": "Palantir 주가는 경쟁사에 비해 적절한가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=93253ee7a20b2b0f55bcc5679e0c406cee6ccae3f3a69300c18ebe9ab281e5c9",
        "publishedAt": 1795528107,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 주가는 경쟁사에 비해 적절한가요?",
        "| Trefis Trefis 스토리라인 Palantir 주가는 경쟁사에 비해 적절한가요?",
        "2026년 11월 24일 · 작성자: Trefis Team PLTR YTD -10.3% SPY YTD +6.7% QQQ YTD +6.3% PLTR 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10.3%, 6.7%, 6.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10.3%, 6.7%, 6.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6658530ab24f0e21a2ff",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "Why Is Marvell Technology Stock Falling 5% Today?",
      "headlineKo": "오늘 Marvell Technology 주식이 5% 하락하는 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce8ec9751785327fb3598d8bdf03173994f07289f91e2c4cf26399b2dd0f5a59",
        "publishedAt": 1795528016,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 Marvell Technology 주식이 5% 하락하는 이유는 무엇입니까?",
        "보드: 시세: 즐겨찾기 인기 모니터 무버 레벨 2 뉴스 메뉴 보드 주식 상품 외환 암호화폐 라운지 고급 검색 뉴스 모든 회사 뉴스 iHub 시장 뉴스 뉴스 스캐너 가격 및 뉴스 알림 시장 데이터 모니터 레벨 2",
        "시작하세요 오늘 Marvell Technology 주식이 5% 하락하는 이유는 무엇입니까?"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 5%, 18%, $225 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 5%, 18%, $225 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f8b4b5162bf77c1e276e",
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
      "headline": "SNDK's Data Center Revenues Gain Momentum on AI Demand: What's Ahead?",
      "headlineKo": "SNDK의 데이터 센터 수익으로 AI 수요에 대한 추진력 확보: 앞으로 어떤 일이 일어날까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f9fb97083c07f6a952beb241e77cc931798ee102d684252ce504460c32ca17d",
        "publishedAt": 1795527960,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SNDK's Data Center Revenues Gain Momentum on AI Demand: What's Ahead?",
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
      "id": "d5e70b8655ac70bdaf7e",
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
      "headline": "Wall Street’s New M&A Mood: Why Both Marvell-Lumentum and CrowdStrike-Zscaler Hit Pushback",
      "headlineKo": "월스트리트의 새로운 M&A 분위기: Marvell-Lumentum과 CrowdStrike-Zscaler가 모두 반발하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=65e20a886059b73e6edf4251bb4f1a4ed48b6f23a839071cf2139c331de95fb7",
        "publishedAt": 1795527912,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트의 새로운 M&A 분위기: Marvell-Lumentum과 CrowdStrike-Zscaler가 모두 반발하는 이유 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,202.60 −0.80% Dow Jones 49,958.20 +0.41% Nasdaq 100 26,244.20 −2.11% Russell 2000 2,687.59 +0.51% S&P 500 7,202.60 −0.80% 다우존스 49,958.20 +0.41% 나스닥 100 26,244.20 −2.11% 러셀 20",
        "그래픽은 최근 거래 발표 이후 Marvell Technology(MRVL)와 CrowdStrike(CRWD)에 대한 대조적인 부정적인 시장 반응을 강조하여 뚜렷한 비율 변화를 보여줍니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 136.5%, $1.2626 billion, $5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 136.5%, $1.2626 billion, $5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2410f0963fc563dabbf8",
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
      "headline": "QQQ Just Had Its Biggest Opening Jump Since It Launched in 1999",
      "headlineKo": "QQQ는 1999년 출시 이후 가장 큰 오프닝 점프를 기록했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3676010dbd00cbdfb901ccb51488bfabb4f5389af0221e2e5fca0ff8142810f5",
        "publishedAt": 1795527451,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "QQQ는 1999년 출시 이후 가장 큰 오프닝 점프를 기록했습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,156.60 −0.59% Dow Jones 49,836.10 −0.34% Nasdaq 100 25,916.70 −1.14% Russell 2000 2,673.06 −0.42% S&P 500 7,156.60 −0.59% 다우존스 49,836.10 −0.34% 나스닥 100 25,916.70 −1.14% 러셀 20",
        "CNBC 분석가가 1999년 닷컴 시대와 유사하다고 경고한 것처럼 뉴욕 증권 거래소 현장의 한 거래자는 시장 논의 중에 집중하고 있음을 반영합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.59%, 0.34%, 1.14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.59%, 0.34%, 1.14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b5421b18d4d4f71ba058",
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
      "headline": "Can Wearables & Mac Revenues Add Fresh Momentum to Apple Stock Ahead?",
      "headlineKo": "웨어러블 및 Mac 수익이 Apple 주식에 새로운 모멘텀을 추가할 수 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44491c30bbd0588ac7822c9ff81174d9a24f94b13dc5948b0b36128aaad4dd64",
        "publishedAt": 1795523340,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Can Wearables & Mac Revenues Add Fresh Momentum to Apple Stock Ahead?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 AAPL의 사업과 관련된 'Can Wearables & Mac Revenues Add Fresh Momentum to Apple Stock Ahead?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "f6bc0ac8033ab49cc92f",
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
      "headline": "TD Cowen Cut Its Salesforce Target to $275 From $300. It Still Sees 48% Upside",
      "headlineKo": "TD Cowen은 Salesforce 목표를 $300에서 $275로 줄였습니다. 여전히 48% 상승 여력이 있음",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3af90106a809a2f2d870f89e281c8ffc211e4cc6bb345a1c8681cbe5837d288c",
        "publishedAt": 1795521814,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TD Cowen은 Salesforce 목표를 $300에서 $275로 줄였습니다.",
        "여전히 48% 상승 여력 | TIKR.com General Investing TD Cowen은 Salesforce 목표를 $300에서 $275로 줄였습니다.",
        "여전히 48% 상승한 Wiltone Asuncion • 5분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 24일 Kohlerphoto from Getty Images Signature via Canva 주요 내용 TD Cowen은 Salesforce 가격 목표를 300달러에서 275달러로 인하했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $275, $300., 48% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $275, $300., 48% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dfafe82647827b132af0",
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
      "headline": "The S&P 500 Just Had the Second-Biggest Point Gain in Its History",
      "headlineKo": "S&P 500은 역사상 두 번째로 큰 포인트 상승을 기록했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0035fc24eb594597e7c459dfa139b1674e6b3794cc2304a15e9a6ca69d8e3564",
        "publishedAt": 1795521735,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500은 역사상 두 번째로 큰 포인트 상승을 기록했습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,187.20 −0.16% Dow Jones 49,949.60 −0.12% Nasdaq 100 26,134.00 −0.31% Russell 2000 2,681.26 −0.11% S&P 500 7,187.20 −0.16% 다우존스 49,949.60 −0.12% 나스닥 100 26,134.00 −0.31% 러셀 20",
        "© Spencer Platt / Getty Images News via Getty Images 2026년 11월 23일 월요일 S&P 500 지수는 금요일의 6,910.39에서 326.78포인트, 즉 4.73% 상승한 7,237.17로 마감했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.16%, 0.12%, 0.31% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.16%, 0.12%, 0.31% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2fc1a2dd35df1cb0c128",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "NVDA",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Is Buying Vertiv Stock Now Too Early?",
      "headlineKo": "지금 Vertiv 주식을 구매하는 것이 너무 이르나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69a0fcfc38c8668daf00d8ecd3b4093e608d51618988af4e890ccc41587606d4",
        "publishedAt": 1795521488,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지금 Vertiv 주식을 구매하는 것이 너무 이르나요?",
        "| Trefis Trefis Storylines가 Vertiv 주식을 너무 일찍 구매하고 있나요?",
        "2026년 11월 24일 · 작성자: Trefis Team VRT YTD +7.4% SPY YTD +6.2% XLI YTD +5.0% VRT 분석 → 오늘의 큰 이야기: Nvidia는 하루에 9,540억 달러를 추가했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7.4%, 6.2%, 5.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7.4%, 6.2%, 5.0% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "530542844480e3633c31",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
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
      "headline": "Applied Materials Is Up 33% in 2026 but 54% Below Its June High. Time to Buy?",
      "headlineKo": "어플라이드 머티리얼즈는 2026년에 33% 상승했지만 6월 최고치보다 54% 낮습니다. 구매할 시간인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a02093e19a78172817b823166dfe4d0c201c7406a357ba3ac1e992b72bde2126",
        "publishedAt": 1795521135,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티리얼즈는 2026년에 33% 상승했지만 6월 최고치보다 54% 낮습니다.",
        "| TIKR.com General Investing Applied Materials는 2026년에 33% 상승했지만 6월 최고치보다 54% 낮습니다.",
        "Wiltone Asuncion • 5분 읽기 검토자: Michael Douglass 최종 업데이트 2026년 11월 24일 Kittipong Jirasukhanont from PhonlamaiPhoto's Images via Canva 주요 시사점 Applied Materials는 2026년에 33% 상승했지만 6월 30일 최고치인 6월 30일 최고치보다 54% 낮습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 33%, 54%, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 33%, 54%, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "cc94730914e7701ad7d4",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "TSM",
      "relatedTickers": [
        "INTC",
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
      "headline": "TSMC: Amazing Chance To Double Down On The AI Market Panic",
      "headlineKo": "TSMC: AI 시장 패닉을 두 배로 늘릴 놀라운 기회",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=583080a066d9daca735474eb2e32bb107e356985b283e63921a2c4a4db5d0cf7",
        "publishedAt": 1795519800,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "TSMC: AI 시장 패닉을 두 배로 늘릴 놀라운 기회(NYSE:TSM) | 알파 찾기 JR Research 투자 그룹 리더 팔로우 요약 Taiwan Semiconductor는 약세 시장으로의 대규모 붕괴 이후 점점 더 매력적으로 보입니다.",
        "TSM은 Nvidia가 점유율을 잃더라도 AI 칩에 대한 만족할 수 없는 수요로부터 계속 혜택을 받아야 하며 Intel의 외부 파운드리 램프는 아직 입증되지 않았습니다.",
        "CapEx는 FY2028까지 900억 달러에 도달할 수 있으며 잉여 현금 흐름 마진은 32%까지 증가할 것으로 예상됩니다. 수출 제한과 AI 지출 둔화는 여전히 위험 요소입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $90 billion, 32%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $90 billion, 32%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f5b3a9de6592ba286278",
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
      "headline": "“An Unpowered Data Center Is Just a Warehouse”: GE Vernova Is Still Up 16% in 2026. Time to Buy?",
      "headlineKo": "\"전원이 공급되지 않는 데이터 센터는 단지 창고일 뿐입니다\": GE Vernova는 2026년에도 여전히 16% 상승합니다. 구매할 시간인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e0c507225656fb71b4bd3b568866598850638cd2f8c1044c9478ff394157e847",
        "publishedAt": 1795517064,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "\"전원이 공급되지 않는 데이터 센터는 단지 창고일 뿐입니다\": GE Vernova는 2026년에도 여전히 16% 성장합니다.",
        "| TIKR.com 일반 투자 \"전원이 공급되지 않는 데이터 센터는 단지 창고일 뿐입니다\": GE Vernova는 2026년에도 여전히 16% 상승합니다.",
        "Wiltone Asuncion • 5분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 24일 @Yelantsevv, Getty Images(Canva를 통해 제공) 주요 내용 GE Vernova는 11월 8.2% 상승했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 16%, 8.2%, 37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 16%, 8.2%, 37% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8e0bfad2895dba91a11e",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
        "AMZN",
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
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why 1 Billionaire Investor Just Poured $3 Billion Into Amazon, Meta, and Alphabet",
      "headlineKo": "억만장자 투자자 1명이 아마존, 메타, 알파벳에 30억 달러를 투자한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25fb2922ee50e89e5904cde1880e4c22a733ce503eba07a5b5d3a92f34f25f3f",
        "publishedAt": 1795516502,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 3.47%, 6.55%, 6.34%, 5.88%, $3 billion, $1.4 billion, 9%, $1 trillion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Why 1 Billionaire Investor Just Poured $3 Billion Into Amazon, Meta, and Alphabet' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d039498fab611b522cc1",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMZN",
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
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Trump Threatens a “Tremendous Tax” on Overseas Data Centers. That’s a Big Problem for Microsoft, Amazon and Alphabet",
      "headlineKo": "트럼프, 해외 데이터센터에 '엄청난 세금' 부과 위협. 이는 마이크로소프트, 아마존, 알파벳에게 큰 문제이다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d1141281cff2f99fb759fbfcadf374188e918464420071aab5f5142490bfcb04",
        "publishedAt": 1795515621,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "트럼프, 해외 데이터센터에 '엄청난 세금' 부과 위협.",
        "이는 Microsoft, Amazon 및 Alphabet의 큰 문제입니다 | TIKR.com 일반 투자 트럼프는 해외 데이터 센터에 \"엄청난 세금\"을 부과하겠다고 위협했습니다.",
        "이는 Microsoft, Amazon 및 Alphabet Wiltone Asuncion의 큰 문제입니다. • 6분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 24일 @Omar_Nasif from pixabay via Canva 핵심 사항 Trump 대통령은 미국이 다음과 같이 말했습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $42.4 billion, 4%, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $42.4 billion, 4%, 3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bc41669dbc0121fc8545",
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
      "headline": "Evercore ISI Group Maintains Outperform on Vertiv Holdings, Lowers Price Target to $275",
      "headlineKo": "Evercore ISI 그룹, Vertiv Holdings 대비 우수한 실적 유지, 목표 가격을 275달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=02f7693bbeeebac01e115ec38046f963861b16716c63845cfea4b492baa09bc0",
        "publishedAt": 1795514446,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Evercore ISI Group Maintains Outperform on Vertiv Holdings, Lowers Price Target to $275",
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
      "id": "6a4ae29bdf754cca3188",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Evercore ISI Group Maintains Outperform on Seagate Technology Hldgs, Lowers Price Target to $700",
      "headlineKo": "Evercore ISI 그룹은 Seagate Technology Hldgs에서 우수한 성과를 유지하고 목표 가격을 700달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=86d2969ae402d4794a16a9356d55ed37812f08456c618a1d0e67114da88d6eb5",
        "publishedAt": 1795514389,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Evercore ISI Group Maintains Outperform on Seagate Technology Hldgs, Lowers Price Target to $700",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "STX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "STX에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "906d75b18c453b33c5f1",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Anthropic’s IPO Safety Net Is Gone: Morgan Stanley “Can No Longer” Buy Below $83. That’s a Risk for Amazon",
      "headlineKo": "Anthropic의 IPO 안전망이 사라졌습니다: Morgan Stanley는 \"더 이상\" 83달러 이하로 구매할 수 없습니다. 그것은 Amazon의 위험입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5475d3f0b812fe9705178090c28b9734dd66668de81959ba1ae93577003a79f9",
        "publishedAt": 1795513830,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Anthropic의 IPO 안전망이 사라졌습니다: Morgan Stanley는 \"더 이상\" 83달러 이하로 구매할 수 없습니다.",
        "이는 Amazon의 위험 | TIKR.com General Investing Anthropic의 IPO 안전망이 사라졌습니다: Morgan Stanley는 \"더 이상\" 83달러 이하로 구매할 수 없습니다.",
        "이는 Amazon Wiltone Asuncion의 위험입니다. • 5분 읽기 검토자: Michael Douglass 최종 업데이트: 2026년 11월 24일 Daniel Chetroni의 Daniel CHETRONI 및 Canva를 통한 DragonImages 주요 내용 Morgan Stanley는 Anthropic의 전체 그린슈 o를 사용했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $83., $83, 8.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $83., $83, 8.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "045df725dace5193f7b8",
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
      "headline": "‘Big Short’ Investor Steve Eisman Says Bitcoin Is ‘Nothing’ — Claims Crypto Just Tracks Nvidia: ‘Never’ Would He Buy It",
      "headlineKo": "'빅 숏' 투자자 스티브 아이즈만(Steve Eisman)은 비트코인은 '아무것도 아니다'라고 말하며 암호화폐는 엔비디아를 추적할 뿐이라고 주장: '절대' 비트코인을 구매하지 않을 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a7232f2e35a286f115390a135923f43f129b3f0d6db27d1b6759f50a0a6b59d",
        "publishedAt": 1795513566,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 0.57%, 0.91%, 1.71%, 5.31%, 7.02%, 6.03%, 12.01%, 5.79%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 NVDA의 사업과 관련된 '‘Big Short’ Investor Steve Eisman Says Bitcoin Is ‘Nothing’ — Claims Crypto Just Tracks Nvidia: ‘Never’ Would He Buy It' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "65ad161ac4e5179a7fcf",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "AMD",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "US Futures Mixed After Monday’s Nvidia-Led Chip Rally — ZM, HPE, AMD, BABA In Focus",
      "headlineKo": "월요일 Nvidia 주도의 칩 랠리 이후 미국 선물이 혼합되었습니다 — ZM, HPE, AMD, BABA 집중",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ce0f4c1318a2bb406e432ca54a49e9b5e48419cd3cfc8c1f110fa3695467770",
        "publishedAt": 1795512616,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월요일 Nvidia 주도 칩 랠리 이후 혼합된 미국 선물 - ZM, HPE, AMD, BABA In Focus AI 에이전트 동향 뉴스 수익 전체 DIA 0.57% SPY 0.91% QQQ 1.73% 추세 NVDA 5.25% MU 7.05% SPY 0.91% QQQ 1.73% ANT 6.14% SOXL 11.89% 델 5.92% HPE 11.1",
        "월요일 Nvidia 주도의 칩 랠리 이후 혼합된 미국 선물 — ZM, HPE, AMD, BABA In Focus 브렌트 및 WTI 선물은 공급 증가에 대한 우려가 호르무즈 해협을 통한 운송에 대한 위험보다 더 컸기 때문에 하락했습니다.",
        "뉴욕 증권거래소에서 트레이더들이 일하고 있다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.57%, 0.91%, 1.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.57%, 0.91%, 1.73% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f89209c9adcfd7d4f25c",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "QQQ",
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
      "expectedHorizon": "단기·장기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today: Dow Jones, S&P 500, Nasdaq 100 Futures Fall After Scott Bessent Unveils Fresh Iran Sanctions, Hormuz Warnings— HPE, SMTC, DELL in Focus (UPDATED)",
      "headlineKo": "오늘의 주식 시장: Scott Bessent가 새로운 이란 제재 조치를 공개한 후 Dow Jones, S&P 500, Nasdaq 100 선물 하락, Hormuz 경고 - HPE, SMTC, DELL 집중(업데이트됨)",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=fef572c7729a49f4591667faad3fba00ccbb75c8c54cd61b416c6807eac34d91",
        "publishedAt": 1795512132,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘의 주식 시장: Scott Bessent가 새로운 이란 제재 조치를 공개한 후 Dow Jones, S&P 500, Nasdaq 100 선물 하락, Hormuz 경고 - HPE, SMTC, DELL 집중(업데이트됨)"
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
          "direction": "risk",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "64974218a8e588d010cf",
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
      "headline": "Is V2X (VVX) Undervalued Following Its Microsoft AI Expansion And 2027 Revenue Concerns?",
      "headlineKo": "V2X(VVX)는 Microsoft AI 확장 및 2027년 매출 우려로 인해 저평가되어 있습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a36bb9127a876e8026de538183ab44425766534af616d7ed8013f7e5255bbc5",
        "publishedAt": 1795511439,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Is V2X (VVX) Undervalued Following Its Microsoft AI Expansion And 2027 Revenue Concerns?",
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
      "id": "d77277aa35ae7201979e",
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
      "headline": "Dan Loeb and 47 Other Big Funds Bought Microsoft Last Quarter. Bill Ackman and 28 Others Sold. Who’s Right?",
      "headlineKo": "Dan Loeb 외 47개 대형 펀드가 지난 분기에 Microsoft를 인수했습니다. Bill Ackman 외 28명 매각. 누가 맞나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9daa47ca209ff449eec51278bcaa3327dde4205afffab09112a2a108922e9fe6",
        "publishedAt": 1795507274,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Dan Loeb 외 47개 대형 펀드가 지난 분기에 Microsoft를 인수했습니다.",
        "| TIKR.com 일반 투자 Dan Loeb 및 기타 47개 대형 펀드가 지난 분기에 Microsoft를 인수했습니다.",
        "Roxanna Maglangit • 6분 읽기 검토자: Michael Douglass 최종 업데이트 2026년 11월 24일 @Natee Meepian의 이미지(Canva, @Worawee Meepian의 이미지) Canva 종료 S분기에 13F를 제출한 460개 대형 펀드 중"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $17.28, $24.23, $32.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $17.28, $24.23, $32.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b84b8975bcc38b40dd0b",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSLA",
      "relatedTickers": [
        "MU",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla And SpaceX Reportedly Name 5 Directors To Lead Merger Discussions — Investor Says Talks Are Moving At ‘Warp Speed’",
      "headlineKo": "Tesla와 SpaceX는 합병 논의를 이끌 이사 5명을 지명한 것으로 알려졌습니다. 투자자는 협상이 '워프 속도'로 진행되고 있다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8de3b98215a26c7efb2ed8adcd92ecd36268746169924a357f192585b69896c",
        "publishedAt": 1795507214,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Tesla와 SpaceX 합병 협상은 '워프 속도'로 진행되고 있다고 투자자는 말합니다 – 5명의 이사가 교환 비율을 협상하는 것으로 보고됨 AI 에이전트 Trending News Earnings All DIA 0.57% SPY 0.91% QQQ 1.77% Trending NVDA 5.12% MU 7.02% SPY 0.91% QQQ 1.77% A",
        "Tesla와 SpaceX는 합병 논의를 이끌 이사 5명을 지명한 것으로 알려졌습니다. 투자자는 회담이 '워프 속도'로 움직이고 있다고 말합니다. Nvidia가 Jensen Huang을 복귀시킨 후 New Street의 Pierre Ferragu는 Tesla-SpaceX 합병을 \"다음 움직임\"이라고 불렀습니다. 이에",
        "(Getty Images를 통한 VCG/VCG 사진) Deepti Sri · Stocktwits 2026년 11월 24일 게시 | 오전 3시(EST) 공유 · Tesla에 우리를 추가하고 SpaceX는 각 Tesla st에 대해 SpaceX 주식 보유자가 받을 수 있는 수를 협상하기 위해 5명의 이사를 두었다고 합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.57%, 0.91%, 1.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.57%, 0.91%, 1.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "59c9a14cc526fb6c3ad0",
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
      "headline": "TSMC gains $158 billion in value in one day as Jensen Huang returns as Nvidia CEO",
      "headlineKo": "Jensen Huang이 Nvidia CEO로 복귀함에 따라 TSMC는 하루 만에 1,580억 달러의 가치를 얻습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ebb99a0a01e92c8006406a376f7ee95adea9f6bae8a8e570e9666c9af8d273f",
        "publishedAt": 1795503956,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 TSM의 사업과 관련된 'TSMC gains $158 billion in value in one day as Jensen Huang returns as Nvidia CEO' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b73634e136a69b6c1f17",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "TSMC, Samsung, SK Hynix Rally As Jensen Huang Returns As Nvidia CEO — Top Analyst Flags Risks To AI Recovery",
      "headlineKo": "Jensen Huang이 Nvidia CEO로 복귀함에 따라 TSMC, 삼성, SK 하이닉스가 랠리를 펼치고 있습니다. 최고 분석가는 AI 회복에 대한 위험을 지적합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=061866228e0f58a0a2df01e4a1b9ffe9cd5d98c83eac87984599861cbb87310b",
        "publishedAt": 1795503606,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang이 Nvidia CEO로 복귀하면서 TSMC, 삼성, SK 하이닉스 랠리 — 최고 분석가가 AI 복구 AI 에이전트에 대한 위험을 지적",
        "TSMC, Samsung, SK Hynix Rally Jensen Huang이 Nvidia CEO로 복귀 - 최고의 분석가가 AI 회복에 대한 위험을 지적함 Huang의 극적인 복귀는 Nvidia 낙진이 전개되면서 지난 2주 동안 혼란스러운 매도 이후 시장을 안심시키는 데 도움이 되었습니다.",
        "로봇 기계가 2025년 2월 25일 인도 구와하티에서 열린 The Advantage Assam 2.0 투자 서밋 동안 투자자에게 보여주기 위해 매점에서 반도체 칩을 제조합니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.61%, 0.83%, 2.44% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.61%, 0.83%, 2.44% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "01d950458894e4c9f79e",
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
      "headline": "Micron: Pounding The Buy Table (Double Upgrade)",
      "headlineKo": "마이크론: 매수 테이블을 두드리다(더블 업그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=140d9caac0f7a604dae2fa45d38e5bbf3f4fd1148e537a9c4813189d3e07c194",
        "publishedAt": 1795498583,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "마이크론 주식: 매수세를 치고 있음(이중 업그레이드)(NASDAQ:MU) | Alpha Uttam Dey 8.2K 팔로워 찾기 요약 팔로우 요약 Micron의 침체된 주가와 부품 생산당 60달러를 넘는 회복력 있는 현물 DRAM 가격 사이의 큰 격차",
        "업데이트된 업계 예측에 따르면 내년에 HBM ASP가 2배 이상 급등하여 CY27 가격 불확실성이 제거되고 총 마진 흐름이 촉진될 것으로 예상됩니다.",
        "CY27 용량의 75%가 이미 매진되었으며 고객 할당 협상이 2028년으로 옮겨가는 등 공급이 여전히 심각한 제약을 받고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $60, 75%, $35.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MU에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $60, 75%, $35.2 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "01ce90514019d720352f",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "PLTR",
      "relatedTickers": [
        "NVDA",
        "PLTR",
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
      "headline": "Palantir: Why I'm Upgrading To Strong Buy After The Selloff",
      "headlineKo": "Palantir: 매도 이후 적극 매수로 업그레이드하는 이유",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=82678e0e21c4e19005257f0eefd037c992be2e3f381ac30df360d30494348c80",
        "publishedAt": 1795498139,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir 주식: 매도 이후 강력 매수로 업그레이드하는 이유(NASDAQ:PLTR) | Alpha Quantryon Capital 추구 팔로워 2.56K 팔로우 요약 Palantir의 3분기 매출은 96% 증가한 23억 1,300만 달러였으며 GAAP 영업 마진은 47%에 달했습니다.",
        "NVIDIA의 주권 AI 협업은 기업이 독점 데이터를 보호하면서 모델을 맞춤화할 수 있도록 함으로써 Palantir의 경쟁적 위치를 강화합니다.",
        "총 계약 가치 예약은 6% 증가에 그쳤지만, 순 달러 보유율 165%와 후속 상업 TCV 성장 62%는 여전히 고무적입니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 96%, $2.313 billion, 47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 96%, $2.313 billion, 47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5805d2b252fdcd5cf5fc",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "META",
      "relatedTickers": [
        "AMD",
        "META",
        "MU",
        "NVDA",
        "QQQ",
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
        }
      ],
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "AMD Stock Dips Overnight After Nvidia-Triggered Rally: AMD Registers 337M Shares For Resale Tied To OpenAI, Meta Warrants",
      "headlineKo": "Nvidia가 촉발한 랠리 이후 밤새 AMD 주가 하락: AMD는 OpenAI, Meta Warrants와 관련된 재판매를 위해 3억 3700만 주 등록",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=65b84ff5d824ba1bb5f8a8b11ce90a25daf9124937c7c86a0c8450b6953663bc",
        "publishedAt": 1795492068,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia가 촉발한 랠리 후 밤새 AMD 주가 하락: 잠재적 재판매 AI 에이전트에 등록된 3억 3700만 주 동향 뉴스 수익 전체 DIA 0.57% SPY 0.91% QQQ 1.77% 추세 NVDA 5.12% MU 7.02% SPY 0.91% QQQ 1.77% ANT 6.01% SOXL 12.06% 델",
        "Nvidia가 촉발한 랠리 후 하룻밤 사이에 AMD 주가 하락: AMD는 OpenAI와 관련된 재판매를 위해 3억 3,700만 주를 등록하고 Meta Warrants AMD는 주식 자체를 판매하지 않으며 잠재적인 판매로 인한 수익금도 받지 않습니다.",
        "Lisa Su, Advanced Micro Devices Inc.의 회장 겸 CEO"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.57%, 0.91%, 1.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.57%, 0.91%, 1.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3689e8353ac6af3ac159",
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
      "headline": "Nvidia Just Built Agent Security Into Its Chips. What Does That Mean for CrowdStrike?",
      "headlineKo": "Nvidia는 칩에 에이전트 보안을 구축했습니다. CrowdStrike에 있어서 이는 무엇을 의미합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d2dcc79292e3970b27336fdffdb036545a9c8b38a5f2266f127c64079dd3796",
        "publishedAt": 1795491422,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia는 칩에 에이전트 보안을 구축했습니다.",
        "CrowdStrike에 있어서 이는 무엇을 의미합니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ 24,089.56 +6.5% +1,471.82 비트코인 $60,427.00 -1.1% -$653.33 개미 $87.64 -"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 31.48%, 8.92%, 29% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 31.48%, 8.92%, 29% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "87bed95771709ef49cf6",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir: Rule Of 147.8% Underscores Sovereign AI Growth Flywheel (Rating Upgrade)",
      "headlineKo": "Palantir: 147.8%의 규칙은 주권 AI 성장 플라이휠을 강조합니다(등급 업그레이드)",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6bff52794bfe6f3a673fa09818fd85cbc35c6bbdeaaa2dfec7fe55fda5cb6e1d",
        "publishedAt": 1795488040,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir: 세대별 구매 기회 - 147.8%의 규칙으로 주권적 AI 성장 강조 | 알파 병렬 아이디어 찾기 16.38K 팔로워 요약 팔로우 오픈 소스 모델/데이터 개인 정보 보호/온톨로지 아키텍처 밑줄을 통한 주권 AI",
        "2030년 TAM이 1.4조 달러로 추산되고, 강력한 교차 판매 추세, 고객 기반 증가, 풍부한 예약/백로그를 고려할 때 AI 수익화 기회가 더 있을 수 있습니다.",
        "멜트다운은 147.8% 성과(수익 성장/FCF 마진)라는 YTD 규칙에 의해 뒷받침되는 PLTR의 더욱 강력한 EV/매출 42.11배 및 3년 PEG 1.27배를 촉발합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 147.8%, $1.4, $110 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PLTR에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 147.8%, $1.4, $110 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "df9791860ed9b7f04fed",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR"
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
      "headline": "Coherent Is Up 55% in a Year, and Its CEO Says 2027 Is “Basically Booked Out.” Time to Buy?",
      "headlineKo": "Coherent는 1년 만에 55% 상승했으며 CEO는 2027년이 \"기본적으로 예약이 완료되었습니다\"라고 말했습니다. 구매할 시간인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8f1a7ee5cef5a4478b4ebe6b3910475af8de437dadab197fd4081288e333094",
        "publishedAt": 1795486965,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Coherent는 1년 만에 55% 상승했으며 CEO는 2027년이 \"기본적으로 예약이 완료되었습니다\"라고 말했습니다. 구매할 시간인가요?",
        "| TIKR.com General Investing Coherent는 1년 만에 55% 상승했으며 CEO는 2027년이 \"기본적으로 예약이 완료되었습니다\"라고 말했습니다. 구매할 시간인가요?",
        "Bobby Sankhagowit • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 11월 24일 Canva를 통한 Getty Images의 @Aaron Hawkins 주요 시사점 AI 하드웨어가 급등하면서 Coherent 주가는 1년 만에 55% 상승했지만 6월 최고치보다 약 절반 정도 낮았습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 55%, 50%, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 55%, 50%, 60% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2aa8994338f594a2f8b5",
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
      "headline": "KLA Stock Jumps On Earnings Beat And Singapore Expansion",
      "headlineKo": "KLA 주가는 실적 개선 및 싱가포르 확장으로 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=830e40ad456a16ceba1a5b2a47f3c54ec6eb589ff6c29648d85a275993b713a5",
        "publishedAt": 1795486646,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "KLA 주가는 실적 개선 및 싱가포르 확장으로 상승"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "36bc32c90ebbff96f9db",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "TSLA And SPCX Rally As Musk Cheers Huang’s Return — Analyst Flags Nvidia’s Push To Send SpaceX More Chips",
      "headlineKo": "Musk가 Huang의 복귀를 응원하면서 TSLA와 SPCX 랠리 - 분석가는 SpaceX에 더 많은 칩을 보내려는 Nvidia의 추진을 표시",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d31e4a8c4e7666c06f04ebbc489fb17d5fabb967257d6b166322e3925d072659",
        "publishedAt": 1795486376,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ARK 분석가는 Jensen Huang의 SpaceX 결정이 AI 에이전트의 단서를 쥐고 있다고 말합니다. 동향 뉴스 수익 전체 DIA 0.02% SPY 0.26% QQQ 0.15% Trending BBIO 4.07% ZM 0.08% CRWD 0.78% BMY 1.77% SNY 0.54% HPE 6.39% INSM 5.49% ZS 17.67% MLTX 5.78% HUT 0.06%",
        "Musk가 Huang의 복귀를 응원하면서 TSLA 및 SPCX 랠리 - 분석가는 Nvidia가 SpaceX에 더 많은 칩을 보내려는 추진을 표시 ARK의 Brett Winton은 Huang이 궁극적으로 더 넓은 GR에 자금을 조달하는 대신 SpaceX에 추가 칩 공급을 지시하는 것을 선호했다고 믿습니다.",
        "Tesla CEO Elon Musk(왼쪽)가 2025년 11월 19일 워싱턴 DC의 케네디 센터에서 열린 미국-사우디 투자 포럼에서 Nvidia CEO Jensen Huang과 이야기를 나누고 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 0.02%, 0.26%, 0.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.02%, 0.26%, 0.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a7a54099d51f21b930aa",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
      "primaryTicker": "META",
      "relatedTickers": [
        "META"
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
      "headline": "'He's Not Quite a God': Palmer Luckey Opens Up About Facebook Firing, Explains Why He'd Still Make a Deal With Mark Zuckerberg",
      "headlineKo": "'그는 신이 아니다': 팔머 럭키(Palmer Luckey)가 페이스북 해고에 대해 공개하고 마크 주커버그와 여전히 거래를 하는 이유를 설명합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=46d6aa5c127ed0bc92a4cd3a7e0d82a56653ab4a95a1f5103e78bf65c13b089e",
        "publishedAt": 1795483807,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "'He's Not Quite a God': Palmer Luckey Opens Up About Facebook Firing, Explains Why He'd Still Make a Deal With Mark Zuckerberg",
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
      "id": "a74098e5f26a97a12ecd",
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
      "headline": "Lam Research Stock What Record Revenue And AI Demand Mean Now",
      "headlineKo": "Lam Research 주식 기록적인 수익과 AI 수요의 의미",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=958e08ff9e73b797886200746f781fd15745161ae3228111e20f20cf60d3ea3c",
        "publishedAt": 1795483181,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lam Research Stock What Record Revenue And AI Demand Mean Now",
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
      "id": "79e1afceca0d8bda2ef3",
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
      "headline": "Is Amazon's Profit Riskier Than It Looks?",
      "headlineKo": "아마존의 이익은 보기보다 위험합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ab430afc44d1ae5ba6304d2610bb5a7795a1cb493dcd1e1b465663bfea1ae2f",
        "publishedAt": 1795479913,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존의 이익은 보기보다 위험합니까?",
        "| Trefis Trefis 스토리라인 Amazon의 이익은 보기보다 위험합니까?",
        "2026년 11월 23일 · Trefis 팀 AMZN YTD +10.6% SPY YTD +6.7% XLY YTD -1.5% AMZN 분석 → 오늘의 큰 이야기: 보고된 SEC 조사: Nvidia 주가가 92달러로 떨어질 수 있습니까?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10.6%, 6.7%, 1.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c0b33155cb8f6fa67df7",
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
      "headline": "What Microsoft (MSFT)'s Enterprise AI Partnerships Mean For Shareholders",
      "headlineKo": "Microsoft(MSFT)의 엔터프라이즈 AI 파트너십이 주주에게 의미하는 것",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0bf40cb2c71ceebbbe64eb60b060782227959c745b969a95336ac9adf0a8cdc",
        "publishedAt": 1795479463,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "What Microsoft (MSFT)'s Enterprise AI Partnerships Mean For Shareholders",
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
      "id": "f7438c31ea9413b9857f",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "AMZN",
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
      "headline": "S&P 500, Nasdaq End Best Session Since April Last Year On Optimism Led By Jensen Huang’s Reinstatement — NVDA, NASA, TTWO, AMZN In Focus",
      "headlineKo": "S&P 500, Nasdaq은 Jensen Huang의 복귀가 이끄는 낙관론에 대한 작년 4월 이후 최고의 세션을 종료합니다 — NVDA, NASA, TTWO, AMZN In Focus",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddb2d770f30059adbbc65d86ade40edd6805413fc599edc8859f2a43f266c7db",
        "publishedAt": 1795476805,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Nasdaq은 Jensen Huang의 복직 AI 에이전트가 이끄는 낙관론으로 지난해 4월 이후 최고의 세션을 종료했습니다. 동향 뉴스 수익 전체 DIA 0.57% SPY 0.91% QQQ 1.77% 추세 NVDA 5.12% MU 7.02% SPY 0.91% QQQ 1.77% ANT 6.01% SOXL 12.06%",
        "S&P 500, Nasdaq은 Jensen Huang의 복직이 이끄는 낙관주의에 대한 작년 4월 이후 최고의 세션을 종료했습니다. NVDA, NASA, TTWO, AMZN In Focus Nvidia 이사회는 도널드 트럼프 대통령의 압력에 따라 Jensen Huang을 Nvidia의 CEO로 복직시켰습니다.",
        "트레이더들이 2026년 11월 19일 뉴욕시 뉴욕증권거래소(NYSE) 현장에서 일하고 있다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.57%, 0.91%, 1.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.57%, 0.91%, 1.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fbfb86a94dadfdb91258",
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
      "headline": "S&P 500, Nasdaq End Best Session Since April Last Year On Optimism Led By Jensen Huang’s Reinstatement — NVDA, NASA, TTWO, AMZN In Focus",
      "headlineKo": "S&P 500, Nasdaq은 Jensen Huang의 복귀가 이끄는 낙관론에 대한 작년 4월 이후 최고의 세션을 종료합니다 — NVDA, NASA, TTWO, AMZN In Focus",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ddb2d770f30059adbbc65d86ade40edd6805413fc599edc8859f2a43f266c7db",
        "publishedAt": 1795476805,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500, Nasdaq은 Jensen Huang의 복직 AI 에이전트가 이끄는 낙관주의로 지난해 4월 이후 최고의 세션을 종료했습니다. 동향 뉴스 수익 전체 DIA 0.02% SPY 0.26% QQQ 0.15% Trending BBIO 4.07% ZM 0.08% CRWD 0.78% BMY 1.77% SNY 0.54% HPE 6.39% 나는",
        "S&P 500, Nasdaq은 Jensen Huang의 복직이 이끄는 낙관주의에 대한 작년 4월 이후 최고의 세션을 종료했습니다. NVDA, NASA, TTWO, AMZN In Focus Nvidia 이사회는 도널드 트럼프 대통령의 압력에 따라 Jensen Huang을 Nvidia의 CEO로 복직시켰습니다.",
        "트레이더들이 2026년 11월 19일 뉴욕시 뉴욕증권거래소(NYSE) 현장에서 일하고 있다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 31%, 3.45%, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 31%, 3.45%, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "16cf859ad5b8af236878",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "SpaceX Is “Following the Exact Same Pattern That Meta Followed” After Its IPO, per Steve Jurvetson. Time to Buy?",
      "headlineKo": "SpaceX는 IPO 이후 \"메타가 따랐던 것과 똑같은 패턴을 따르고 있다\"고 Steve Jurvetson이 말했습니다. 구매할 시간인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b97ae1cc4562a3b91f65ffd0a6d155812e8dae909514bb651daaf15765bdb269",
        "publishedAt": 1795476445,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX는 IPO 이후 \"메타가 따랐던 것과 똑같은 패턴을 따르고 있다\"고 Steve Jurvetson이 말했습니다.",
        "| TIKR.com 일반 투자 SpaceX는 Steve Jurvetson에 따르면 IPO 이후 \"메타가 따른 것과 정확히 동일한 패턴을 따르고 있습니다\".",
        "Wiltone Asuncion • 6분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 23일 미국"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 41%, 34.5%, $135 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 41%, 34.5%, $135 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dae842c378adcc80b609",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "AMD registers up to 337 million shares for resale tied to OpenAI, Meta warrants",
      "headlineKo": "AMD는 OpenAI, Meta 영장과 관련된 재판매를 위해 최대 3억 3,700만 주를 등록합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49385280ce2cf6da69bae0a4eb80cd25a5eb876579dd27db8f3bd02e7ee77745",
        "publishedAt": 1795476144,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD는 OpenAI, Meta 영장과 관련된 재판매를 위해 최대 3억 3,700만 주를 등록합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "a47680f282c9bfe19dfa",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "GOOGL",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Steve Eisman Said AI Was “No Longer One Trade.” Huang Is Back, but Alphabet and CoreWeave Still Show the Split",
      "headlineKo": "Steve Eisman은 AI가 \"더 이상 하나의 거래가 아니다\"라고 말했습니다. Huang이 돌아왔지만 Alphabet과 CoreWeave는 여전히 분열을 보여줍니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cce76ef68e89ce2696f214b1480abf834d9ef713c8b68864824d4466e62cf846",
        "publishedAt": 1795474493,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Steve Eisman은 AI가 \"더 이상 하나의 거래가 아니다\"라고 말했습니다. 황이 돌아왔지만 Alphabet과 CoreWeave는 여전히 분열을 보이고 있습니다 | TIKR.com 일반 투자 Steve Eisman은 AI가 \"더 이상 하나의 거래가 아니다\"라고 말했습니다. Huang이 돌아왔지만 Alphabet과 CoreWeave는 여전히 표시됩니다.",
        "Steve Eisman은 Jensen Huang의 퇴임으로 인해 이사회가 11월 1일에 Huang을 복귀시키기 전에 CoreWeave 및 Nebius를 포함한 NVIDIA의 자체 고객 지원이 종료될 것이라고 말했습니다.",
        "Alphabet은 자체 이름으로 확장 자금을 조달합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 12%, 14%, 2.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 12%, 14%, 2.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "01cc0989d6cddb27151d",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "CRM",
        "MSFT",
        "PLTR"
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
      "headline": "Chamath Says Microsoft “Clearly Is Going to Need to Have a Frontier Model.” Nadella Is Betting It Won’t",
      "headlineKo": "Chamath는 Microsoft가 \"분명히 프론티어 모델을 가질 필요가 있을 것\"이라고 말합니다. 나델라는 그렇지 않을 것이라고 장담하고 있다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=39f3d390f731ef3ef1fea99637909813c359f0b067ba589c5861452146a15e4b",
        "publishedAt": 1795474231,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Chamath는 Microsoft가 \"분명히 프론티어 모델을 가질 필요가 있을 것\"이라고 말합니다. Nadella는 그렇지 않을 것이라고 확신합니다 | TIKR.com General Investing Chamath는 Microsoft가 \"확실히 프론티어 모델이 필요할 것\"이라고 말했습니다. Nadella는 Gia가 그렇지 않을 것이라고 확신합니다",
        "Satya Nadella는 고객이 여러 모델을 혼합할 것이라고 확신하고 있으며 Salesforce와 Palantir도 마찬가지입니다.",
        "Microsoft는 2026 회계연도에 1,160억 달러의 자본 지출을 지출했으며 OpenAI 및 Anthropic의 지분을 소유하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.75 trillion, $116 billion, 17% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.75 trillion, $116 billion, 17% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "382dd6eba4711402966a",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Why ASML Stock Popped Today",
      "headlineKo": "오늘 ASML 주식이 터진 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f37b63dea7548e3bd5e8ae97f3947dd91c1296e5f21ee5f5cc4d4bf3ed8b5ef",
        "publishedAt": 1795473384,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 ASML 주식이 급등한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,192.58 -0.6% -44.59 DJI 49,922.10 +0.7% +326.79 NASDAQ 23,671.62 -1.7% -417.94 비트코인 ​​$59,684.00 -3.4",
        "ASML은 EUV 노광 장비를 생산하는 유일한 제조사로서 AI 분야에서 독보적인 위치를 차지하고 있다.",
        "AI 칩에 대한 수요 증가는 ASML의 장기적인 성장을 뒷받침할 것입니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 3.57%, 6.5%, $1,334.39 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 3.57%, 6.5%, $1,334.39 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dc0974a9fc4ef193fc14",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Stock Market Today, Nov. 23: Micron Surges 19% as Nvidia CEO Change Calms AI Spending Fears",
      "headlineKo": "오늘, 11월 23일 주식 시장: Nvidia CEO의 변화로 AI 지출에 대한 우려가 진정되면서 Micron이 19% 급등했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=596ade0790d5e12c2941bcea86addac0c5a63464632773b80d8d892c4f2cc81e",
        "publishedAt": 1795472402,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "23: Nvidia CEO의 변화로 AI 지출 우려가 진정되면서 Micron이 19% 급등 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ 24,08",
        "Jensen Huang을 CEO로 복귀시키기로 한 Nvidia의 결정은 인공 지능(AI) 산업 전반에 걸쳐 신뢰를 회복하는 데 도움이 되었으며, AI 인프라 지출에 대한 우려를 시사하는 Citi의 논평은 추가 사항이 있을 경우 과장될 수 있습니다.",
        "거래량은 4,910만 주에 이르렀으며, 이는 3개월 일일 평균 2,860만 주보다 약 72% 높은 수준으로 반등에 대한 강력한 투자자 참여를 강조했습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 72%, $707.70, $113.19 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 72%, $707.70, $113.19 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b664cb7956e70f31f99a",
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
      "headline": "Prediction: This Will Be Sandisk’s Stock Price by the End of 2027",
      "headlineKo": "예측: 2027년 말까지 Sandisk의 주가가 될 것입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5bcec3cb8997ab8d6366218aaf423197d0512d351c7d75c057c7b66b3ede8ce6",
        "publishedAt": 1795472162,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "예측: 2027년 말까지 Sandisk의 주가가 될 것입니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ 24,089",
        "투자자들은 Sandisk에 투자할 때 메모리 산업의 역사적 순환성을 염두에 두어야 합니다.",
        "Sandisk보다 더 좋아하는 10가지 주식 > Sandisk(SNDK +10.69%)는 지난 2년 동안 가장 주목할만한 기술 성장 스토리 중 하나였습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10.69%, 6,400%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10.69%, 6,400%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c6ab791e6f59830211d5",
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
      "headline": "Seagate (STX) Stock Looks Undervalued Even With Rich Earnings Pricing",
      "headlineKo": "Seagate(STX) 주식은 풍부한 수익 가격에도 불구하고 저평가된 것으로 보입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d112265c319d9658c8bd0a7784a4724ef074a849ad983113dda0d9ac15dad5a4",
        "publishedAt": 1795471668,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Seagate (STX) Stock Looks Undervalued Even With Rich Earnings Pricing",
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
      "id": "2a8147bf955807ef5ae4",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Marvell Technology Stock Crushed it Today",
      "headlineKo": "Marvell Technology 주식이 오늘 왜 무너졌습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=63addf0028b34c9209460ff19431c6a0e82afdd6c91d4179d9df3b49e42061e0",
        "publishedAt": 1795471605,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology 주식이 오늘 무너진 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ 24,089.56 +6.5% +1,471.82",
        "이번 움직임은 두 회사의 현재 관계가 유지된다는 것을 의미할 가능성이 높습니다.",
        "Marvell Technology보다 우리가 더 좋아하는 10가지 주식 > 어쨌든 월요일은 유명 기술 회사 CEO가 자신이 설립한 회사에 복직한 날로 역사상 기록될 것입니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 18.37%, 18%, 31.48% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 18.37%, 18%, 31.48% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "258e36566a341d9f2809",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "NVDA",
      "relatedTickers": [
        "AMD",
        "AVGO",
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
      "headline": "Plot Twist: Cathie Wood Sold Nvidia Over “Losing Jensen.” Nvidia Just Rehired Him, but Her Other Worry Remains",
      "headlineKo": "반전: Cathie Wood는 \"Jensen을 잃었다\"는 이유로 Nvidia를 매각했습니다. 엔비디아는 그를 다시 고용했지만 다른 걱정은 남아있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d415468040bde72ff572d8e686b7ce97389157d61f5d83bdf29c0835a1782b3",
        "publishedAt": 1795470284,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "반전: Cathie Wood는 \"Jensen을 잃었다\"는 이유로 Nvidia를 매각했습니다. Nvidia는 그를 재고용했지만 다른 걱정은 남아있습니다 | TIKR.com 일반 투자 플롯 트위스트: Cathie Wood는 \"Jensen을 잃었다\"는 이유로 Nvidia를 매각했습니다. 엔비디아가 그를 다시 고용했지만 그녀의 다른 일은",
        "Huang의 복귀는 Cathie Wood가 ARK를 Nvidia에서 SpaceX로 교체한 이유를 제거합니다.",
        "그녀의 또 다른 걱정은 여전히 ​​남아 있습니다. 그녀가 수익의 약 15%를 차지하는 중국 관련 판매와 더불어 AMD와 Broadcom이 디자인을 돕는 Google 칩을 고려하는 구매자도 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 31%, 15%, $85 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 31%, 15%, $85 million — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0cf240775a02b01bf665",
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
      "headline": "Wall Street Roars Back From Brutal Selloff. Nvidia's 31% Surge Sends Nasdaq Soaring 6.5%.",
      "headlineKo": "월스트리트, 잔혹한 매도세에서 물러나다. Nvidia의 31% 급등으로 Nasdaq은 6.5% 급등했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5cdba4c37ecc87e5c2cf68a13504558851aa6afac3262f02c67fbf8016d263d4",
        "publishedAt": 1795470228,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "월스트리트, 잔혹한 매도세에서 물러나다.",
        "Nvidia의 31% 급등으로 Nasdaq은 6.5% 급등했습니다.",
        "| IBTimes Economy & Markets 미국 경제 이번 반등은 S&P 500과 다우지수가 최근 최고치보다 10% 이상 하락하며 조정권에 진입한 이후에 나왔습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 31%, 6.5%, 99% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 31%, 6.5%, 99% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7588fd253560da6fad46",
      "schemaVersion": 1,
      "eventType": "competitor_supply_contract",
      "eventLabel": "경쟁사 공급 계약",
      "primaryTicker": "LITE",
      "relatedTickers": [
        "LITE",
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
      "headline": "Why Lumentum Holdings Stock Trounced the Market Today",
      "headlineKo": "Lumentum Holdings 주식이 오늘 시장을 압도한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7fd9a583f768ce31c69d9eda4dbfe449a11d868e49ee1b9278df5de127f2ec18",
        "publishedAt": 1795470165,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Lumentum Holdings 주식이 오늘 시장을 압도한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,192.58 -0.6% -44.59 DJI 49,922.10 +0.7% +326.79 NASDAQ 23,671.62 -1.7% -417.",
        "Lumentum과 Nvidia는 수년간 협력해 왔습니다.",
        "Lumentum보다 더 좋아하는 10가지 주식 › 월요일은 기술 하드웨어 회사, 특히 차세대 제품의 중요한 구성 요소를 만드는 회사의 투자자들에게 배너 데이였습니다."
      ],
      "marketInterpretation": [
        "경쟁사의 공급 계약은 기존 공급사의 고객 비중과 가격 협상력에 영향을 줄 수 있습니다. 공급 물량이 추가분인지 대체 물량인지가 핵심입니다.",
        "이번 기사에서 확인된 구체적 수치: 7.31%, 9.63%, $487.22 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "LITE에 대한 경쟁사 수주 · 고객 점유 변화 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 7.31%, 9.63%, $487.22 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 공급사의 실제 물량",
        "기존 공급사 매출 비중",
        "고객의 이중 공급 전략"
      ]
    },
    {
      "id": "120f9e02bea58080acc2",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Google AI Bridges Search And Wallet To Unlock Spending Signals",
      "headlineKo": "지출 신호를 잠금 해제하기 위해 Google AI가 검색과 지갑을 연결합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=389a0e7a9bbd383ea1652904f98e6a7e2b3d9dbf2be525ff4180c9ae557e1d21",
        "publishedAt": 1795469948,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Google AI Bridges Search And Wallet To Unlock Spending Signals",
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
      "id": "3958b1e58e1e1eee448a",
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
      "headline": "China Is “Only 12 Hours” Behind US AI Labs. ByteDance’s Reported Azure Deal Puts Microsoft in the Middle",
      "headlineKo": "중국은 미국 AI 연구소보다 \"12시간\" 뒤쳐져 있다. ByteDance가 보고한 Azure 거래로 Microsoft가 중간에 위치",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8dbebf4e131a0ffd18695dd13f5c7af6438756832dcc8b07c1f555b7226d20f",
        "publishedAt": 1795469943,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "중국은 미국 AI 연구소보다 \"12시간\" 뒤쳐져 있다.",
        "ByteDance가 보고한 Azure 거래로 Microsoft가 중간에 위치 | TIKR.com 일반 중국 투자는 미국 AI 연구소보다 \"단 12시간\" 뒤쳐져 있습니다.",
        "ByteDance의 보고된 Azure 거래로 Microsoft가 중간에 위치함 Bobby Sankhagowit • 5분 읽기 검토자: Bobby Sankhagowit 마지막 업데이트 2026년 11월 23일 Natee Meepian의 이미지 주요 내용 ByteDance는 지출을 위한 사전 협의에 있는 것으로 알려졌습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $500 million, 0.2%, $332 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $500 million, 0.2%, $332 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "53635f4b491839185783",
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
      "headline": "Coherent Is the Real Winner of Huang’s Return. Nvidia Paid $2 Billion for Its Stock",
      "headlineKo": "코히런트는 황 복귀의 진정한 승자입니다. 엔비디아는 자사주 매입으로 20억 달러를 지불했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=33a3af7399c69e09df2f8a05b656b6e8c0dd3a66f2f1296346dc819415dbcc90",
        "publishedAt": 1795469657,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $2 Billion, 15%, 9%, $2 billion, 31%, 18%, $256.80, $21 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 COHR의 사업과 관련된 'Coherent Is the Real Winner of Huang’s Return. Nvidia Paid $2 Billion for Its Stock' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b3c827256b33ed709a28",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "AMD",
        "ANET",
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
      "headline": "Meta’s AI Chief Warns “Superintelligence Is Arriving.” Lawmakers Are Now Quoting Him to Push a Ban",
      "headlineKo": "메타 AI 수석, “초지능이 도래한다” 경고 국회의원들은 이제 금지 조치를 추진하기 위해 그의 말을 인용하고 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c04e6bcd641c3c5a85100b2fc4c43d221fb9b5d107d6320aeafeddfb855249c8",
        "publishedAt": 1795469595,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "메타 AI 수석, “초지능이 도래한다” 경고 국회의원들은 이제 금지령을 추진하기 위해 그의 말을 인용하고 있습니다 | TIKR.com General Investing Meta의 AI 책임자는 \"초지능이 도래하고 있다\"고 경고합니다. 국회의원들은 이제 금지령을 추진하기 위해 그의 말을 인용하고 있습니다. David Hanson",
        "분석가들은 Meta의 무료 현금 흐름이 2026년부터 2028년까지 마이너스 상태를 유지할 것으로 예상하고 있으며 공급업체인 AMD와 Arista Networks는 이러한 지출에 의존하고 있습니다.",
        "금지 법안은 9월 이후로 움직이지 않았으며, 17배의 향후 수익으로 Meta는 이미 많은 의심을 품고 가격을 책정하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $135 billion, 97.6%, $201.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $135 billion, 97.6%, $201.0 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f126bd93207fbb8f1089",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "TSM",
      "relatedTickers": [
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
      "headline": "Why TSMC Stock Soared Today",
      "headlineKo": "오늘 TSMC 주가가 급등한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=22e48561b45249633f0f26a1d65da42cb69a94bcfcfe9cbf6ce569f4f94901c2",
        "publishedAt": 1795468849,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 TSMC 주가가 급등한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ 24,089.56 +6.5% +1,471.82 비트코인 ​​$59,807.00",
        "AI는 현재 고성능 컴퓨팅 칩이 매출의 68%를 차지하므로 TSMC 성장의 대부분을 주도하고 있습니다.",
        "Nvidia는 3D 메모리 칩 제조에 관해 접근했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 68%, 14.09%, 90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 68%, 14.09%, 90% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "80dedbcbf595e7ec0b88",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Citi Just Slashed Its Price Target on Salesforce Stock. Here's Why",
      "headlineKo": "Citi는 Salesforce 주식의 목표 가격을 삭감했습니다. 이유는 다음과 같습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4c92fab67e50fa677f2890a9039632e53a8b86eb8e97d368000bc2473b17830",
        "publishedAt": 1795468508,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citi Just Slashed Its Price Target on Salesforce Stock. Here's Why",
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
      "id": "7a7ab83be9900f2f5688",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AMD",
        "MSFT",
        "MU",
        "NVDA",
        "ORCL",
        "TSM"
      ],
      "relatedEntities": [
        {
          "name": "Microsoft",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Billionaire Andreas Halvorsen Exited Microsoft and Made TSMC His Top Holding at $1.8 Billion",
      "headlineKo": "억만장자 Andreas Halvorsen은 Microsoft를 떠나 TSMC를 18억 달러의 최고 보유 자산으로 만들었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2592fdda67ab8bdce4316f7cbf1833bea67d19e89e9d6b861eb29dfeb62a04f",
        "publishedAt": 1795467446,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $1.8 Billion, $1.8 billion, 5.45%, $32.7 billion, $39.37 billion, $19.39 billion, 6.5%, $66.99 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Billionaire Andreas Halvorsen Exited Microsoft and Made TSMC His Top Holding at $1.8 Billion' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "c6dd7b9fdf46c98b8ed7",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Why Arm Holdings Stock Was Soaring on Monday",
      "headlineKo": "Arm Holdings 주가가 월요일에 급등한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c70805d5d3031fdae9d4163684fb6745d8beac94f1801d8250126c3de49ac78",
        "publishedAt": 1795466986,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm Holdings 주식이 월요일에 급등한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,190.36 -0.6% -46.81 DJI 49,920.74 +0.7% +325.43 NASDAQ 23,662.80 -1.8% -426.76 Bitcoi",
        "그는 또한 회사의 대주주인 부회장직을 맡게 됩니다.",
        "Arm Holdings보다 더 좋아하는 10가지 주식 > Arm Holdings(ARM -8.22%)는 새로운 장기 계약으로 선두를 확보했으며 월요일 투자자들은 이에 대해 칩 제조업체의 주식에 보상했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.22%, 7.17%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 8.22%, 7.17%, 15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "91f52e9aefe27ba5e0a7",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
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
      "headline": "Sandisk: Armageddon Has Been Priced-In",
      "headlineKo": "Sandisk: 아마겟돈에 가격이 책정되었습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1f3051244d8a842a1c8166dd30c994d4f9425144cbf6a7c30e2a086c02ae993f",
        "publishedAt": 1795466427,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk: 아마겟돈 가격이 책정되었습니다(NASDAQ:SNDK) | Alpha Bay Area 아이디어 찾기 6.09K 팔로워 팔로우 요약 Sandisk는 탄탄한 펀더멘털에도 불구하고 침체된 가치 평가가 붕괴되는 것처럼 보이기 때문에 여전히 강력한 매수세를 유지하고 있습니다.",
        "1분기 매출은 110억 3100만 달러에 달했습니다. 컨센서스를 상회하는 2분기 가이던스는 지속적인 성장과 강력한 수익성을 시사합니다.",
        "장기 고객 계약과 889억 달러의 잔여 이행 의무는 수익 내구성을 지원하여 잠재적으로 순환성을 완화합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $11.031 billion, $88.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $11.031 billion, $88.9 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "83626e741d11d0e3bca6",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Exelon Or Vistra: Which Fits Your Power Demand Bet?",
      "headlineKo": "Exelon 또는 Vistra: 귀하의 전력 수요 베팅에 적합한 것은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6cd7a708e987ae90c87ebfcdc24c3d202c033951b607650964376f6f2382cfc5",
        "publishedAt": 1795466329,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Exelon 또는 Vistra: 귀하의 전력 수요 베팅에 적합한 것은 무엇입니까?",
        "| Trefis Trefis Storylines Exelon 또는 Vistra: 어느 것이 귀하의 전력 수요 베팅에 적합합니까?",
        "2026년 11월 23일 · 작성자: Trefis Team EXC YTD +8.6% SPY YTD +6.7% XLU YTD +3.6% EXC 분석 → 오늘의 큰 이야기: 보고된 SEC 조사: Nvidia 주가가 92달러로 떨어질 수 있습니까?"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 8.6%, 6.7%, 3.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VST에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 8.6%, 6.7%, 3.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "d9a01f9eb6e1954d19b5",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "AVGO",
        "INTC",
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
      "headline": "Apple vs. Broadcom: Comparing Revenue Trends Amid the Artificial Intelligence Boom",
      "headlineKo": "Apple vs. Broadcom: 인공 지능 붐 속에서 수익 추세 비교",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=79634169220a98f79344de85b7fbc26f860646f0ddd42c1ff9a5957d506213b6",
        "publishedAt": 1795464990,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Broadcom: 인공 지능 붐 속에서 수익 추세 비교 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ",
        "Apple의 판매는 계절성을 경험하는 반면 Broadcom의 수익은 최근 분기마다 증가했습니다.",
        "투자자들은 향후 분기별 보고서에서 Broadcom의 수익이 계속 증가하는지 지켜봐야 합니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.90%, 3.00%, $124.3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.90%, 3.00%, $124.3 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3aaafb3f419f631304b7",
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
      "headline": "Jensen Huang’s Return Just Added About $500 Billion to Micron, Dell, TSMC and the AI Stocks That Depend on Nvidia",
      "headlineKo": "Jensen Huang의 복귀로 Micron, Dell, TSMC 및 Nvidia에 의존하는 AI 주식에 약 5000억 달러가 추가되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d0e13968a9cd407de3bbd6e4281847394f71cf489c6693620b7cd21d19ebe70a",
        "publishedAt": 1795464780,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $500 Billion, $500 billion, 31%, $940 billion, 2%, 7%, $3 trillion, 16%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 TSM의 사업과 관련된 'Jensen Huang’s Return Just Added About $500 Billion to Micron, Dell, TSMC and the AI Stocks That Depend on Nvidia' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "94bb50144fd2137f3479",
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
      "headline": "Google Can Spend $48 Billion More On AI From Its Own Cash. Is That Enough For Nvidia?",
      "headlineKo": "Google은 자체 현금으로 AI에 480억 달러를 더 지출할 수 있습니다. 엔비디아로는 충분할까요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9e3813b9cc10d4fb8701c0c4136d55c9e965896156db049edb9c26ca770c513e",
        "publishedAt": 1795464490,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $48 Billion, 15.1%, 1.9%, 14.3%, $92, 30%, $166., $48 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Google Can Spend $48 Billion More On AI From Its Own Cash. Is That Enough For Nvidia?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 비용·CAPEX·영업현금흐름·FCF·부채 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "c5e76d35d9d9cdc4eb83",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Palantir Rips 10% to Lead Software Stocks. Cloudflare and ServiceNow Also Join ‘Jensen Rally’",
      "headlineKo": "Palantir가 소프트웨어 주식 선두로 10% 찢음. Cloudflare와 ServiceNow도 'Jensen Rally'에 합류",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=29cae95436dfbe92b60836af8703c316d047501108ae5e43fb4ad24e8f9fa28c",
        "publishedAt": 1795464489,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Palantir가 소프트웨어 주식 선두로 10% 찢음.",
        "Cloudflare와 ServiceNow도 월 스트리트 24시간 연중무휴 'Jensen Rally'에 합류합니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,260.90 +4.40% Dow Jones 49,688.60 +2.77% Nasdaq 100 26,750.00 +5.99% Russell 2000 2,664.02 +2.66% S&P 500 7,260.90 +4.40% 다우존스 49,688.60 +2.77% 나스닥 100 26,750.00 +5.99% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 10%, $30, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 10%, $30, 5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7b3154a9efc8feddedb3",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Does AMD Trade at 30x When Nvidia Is at 10x Forward Earnings? AMD’s China Exposure Is Bigger",
      "headlineKo": "Nvidia가 10배의 수익을 올릴 때 AMD가 30배로 거래하는 이유는 무엇입니까? AMD의 중국 노출이 더 크다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8103cc02a5cd6d653387695cca9520b634679a495847db7f4b155d622e9f49fa",
        "publishedAt": 1795463501,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia가 10배의 수익을 올릴 때 AMD가 30배로 거래하는 이유는 무엇입니까?",
        "AMD의 중국 노출이 더 커졌습니다 | TIKR.com 일반 투자 Nvidia의 선행 수익이 10배인데 왜 AMD는 30배로 거래됩니까?",
        "AMD의 중국 노출이 더 커짐 David Hanson • 5분 읽기 검토자: David Hanson 마지막 업데이트 2026년 11월 23일 @Alexander's Images via Canva, @Nicolas Foster from Pexels via Canva 주요 사항 Nvidia 주가는 오늘 이사회 후 31% 급등했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 31%, 22.4%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 31%, 22.4%, 70% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c2a508fd884311ff1ad4",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SPY",
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
      "headline": "Stocks Roar as the S&P 500 Jumps About 4.5% on News Jensen Huang Is Returning as NVIDIA CEO",
      "headlineKo": "Jensen Huang이 NVIDIA CEO로 복귀한다는 소식에 S&P 500이 약 4.5% 상승하면서 주가가 크게 상승했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b12296cc6a1b7eab1a3efae40b1e794480360b0be55affa590372940f0fbbea9",
        "publishedAt": 1795463390,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang이 NVIDIA CEO로 복귀한다는 소식에 S&P 500이 약 4.5% 상승하면서 주가가 크게 뛰었습니다. – 연중무휴 월스트리트",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,260.90 +4.40% Dow Jones 49,688.60 +2.77% Nasdaq 100 26,750.00 +5.99% Russell 2000 2,664.02 +2.66% S&P 500 7,260.90 +4.40% 다우존스 49,688.60 +2.77% 나스닥 100 26,750.00 +5.99% 러셀 20",
        "그는 금융 연구 분야 최대 출판사 중 하나인 Motley Fool에 합류하기 전에 Microsoft에서 경력을 시작했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 4.5%, 4.40%, 2.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 4.5%, 4.40%, 2.77% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9bcc4e06a8656e809a5e",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Tesla Stock Stepped on the Gas Today",
      "headlineKo": "오늘 Tesla 주식이 가스를 밟은 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2f374b30a07c8afcf9dae7201e2de49ccb5c6e696f2e35847cdff54039386f9",
        "publishedAt": 1795463337,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 Tesla 주식이 급등한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ 24,089.56 +6.5% +1,471.82 Bitco",
        "투자자들은 또한 Tesla의 완전 자율 주행 소프트웨어 최신 버전의 영향을 저울질하고 있습니다.",
        "Tesla보다 우리가 더 좋아하는 10개 주식 › Tesla 주식(TSLA +11.46%)이 월요일 아침 상승세를 보이며 오전 거래에서 무려 13.9%나 상승했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 11.46%, 13.9%, 12.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 11.46%, 13.9%, 12.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "27c63bb27c33398645d2",
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
      "headline": "112% Upside for Seagate? Rosenblatt Thinks So, and Here’s How",
      "headlineKo": "Seagate의 상승여력은 112%? Rosenblatt는 그렇게 생각하며 그 방법은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fab8f2bd16e9584232187a95cf45a710d4e3cb3881b8f756daad2b5d9464dbd4",
        "publishedAt": 1795462818,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Rosenblatt는 그렇게 생각하며 그 방법은 다음과 같습니다 | TIKR.com 일반 Seagate의 112% 상승여력에 투자하시겠습니까?",
        "Rosenblatt의 생각과 방법은 다음과 같습니다. Bobby Sankhagowit • 4분 읽기 검토자: Bobby Sankhagowit 마지막 업데이트 2026년 11월 23일 Canva를 통한 Pexels의 @Sergei Starostin, Canva를 통한 Pexels의 @FOX ^.ᆽ.^= ∫ 주요 내용 Rosenblatt Securities",
        "이 목표는 6월 최고치보다 53% 하락한 현재 주가보다 112% 높은 것이다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 112%, $1,100, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 112%, $1,100, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a9857e7b54e3a673ce79",
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
      "headline": "Baird Just Downgraded Vertiv With a $200 Target, and It’s Not About Earnings",
      "headlineKo": "Baird는 방금 Vertiv를 200달러 목표로 다운그레이드했는데 이는 수익에 관한 것이 아닙니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b3a2b7b715141e60079602b6482f6525453681417003bbaeb6f19094893d59d",
        "publishedAt": 1795462519,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Baird는 방금 Vertiv를 200달러 목표로 다운그레이드했는데 이는 수익에 관한 것이 아닙니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "d6ceb28c85bdd18d8648",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
      "primaryTicker": "VRT",
      "relatedTickers": [
        "ETN",
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
      "headline": "Baird Just Downgraded Vertiv With a $200 Target, and It’s Not About Earnings",
      "headlineKo": "Baird는 방금 Vertiv를 200달러 목표로 다운그레이드했는데 이는 수익에 관한 것이 아닙니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b3a2b7b715141e60079602b6482f6525453681417003bbaeb6f19094893d59d",
        "publishedAt": 1795462519,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Baird는 200달러 목표로 Vertiv를 다운그레이드했지만 이는 수익에 관한 것이 아닙니다 | TIKR.com General Investing Baird는 Vertiv를 200달러 목표로 하향 조정했지만 이는 수익에 관한 것이 아닙니다. David Hanson • 4분 읽기 검토자: David Hanson La",
        "Baird는 Vertiv의 단기 펀더멘털이 여전히 견고하며 투자자들이 AI 데이터 센터에 대해 어떻게 생각하는지에 달려 있다고 말했습니다.",
        "Vertiv의 3분기 유기농 주문은 두 배 이상 증가했으며 Eaton과 nVent도 기록적인 주문을 보고했습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $200, $320,, 51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $200, $320,, 51% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2b067d1baaa3999e5c58",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "GTA VI Hype More Than Doubled Sony’s US PS5 And Microsoft’s Xbox Weekly Sales, Circana Says",
      "headlineKo": "GTA VI의 과대 광고는 Sony의 미국 PS5와 Microsoft의 Xbox 주간 판매량을 두 배 이상 늘렸다고 Circana는 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ecb37b8d274ae8c497b7c1b30d29e4608b875894f61f5849cbfe634ba17dfbfb",
        "publishedAt": 1795461207,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GTA VI Hype는 Sony의 미국 PS5 및 Microsoft의 Xbox 주간 판매량을 두 배 이상 늘렸습니다. Circana는 AI 에이전트 동향 뉴스 수익 전체 DIA 3.24% SPY 4.96% QQQ 7.14% Trending DELL 21.81% HPE 8.90% ZM 5.13% BBIO 5.21% SYM 11.80% AVAX 1.39% SKHY 22.2",
        "GTA VI Hype는 Sony의 미국 PS5와 Microsoft의 Xbox 주간 판매량을 두 배 이상 늘렸다고 Circana는 밝혔습니다. Circana는 11월로 끝난 주 동안 PlayStation 5 판매량이 전년도보다 2.4배 이상 증가했다고 밝혔습니다.",
        "Xbox 시리즈 판매량은 전년 동기 대비 2.3배 증가했습니다."
      ],
      "marketInterpretation": [
        "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 3.24%, 4.96%, 7.14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "MSFT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "MSFT에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 3.24%, 4.96%, 7.14% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "27d183defa94c3c09f5a",
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
      "headline": "Is Micron Technology Stock a Buy at $700?",
      "headlineKo": "Micron Technology 주식은 700달러에 매수됩니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8e6853c2f70d19acbcda7248137354f9991beace1dd9c1cdb09ce877ca5a8fd3",
        "publishedAt": 1795461121,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Micron Technology 주식은 700달러에 매수됩니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ 24,089.56 +6.5% +1,471.82 비트코인 $61,124.00 +0.3% +$212.14 개미 $87.64 -",
        "엄청난 성장에도 불구하고 업계의 역사적 변동성을 고려하여 투자자들은 여전히 ​​조심스러운 입장을 취하고 있습니다."
      ],
      "marketInterpretation": [
        "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $700, 19.04%, $1,200 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $700, 19.04%, $1,200 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9be710c1e4797942e8f5",
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
      "headline": "Salesforce Ex-CEO's AI Startup Sierra Hits $30 Billion Valuation. It Doubled In Just Six Months.",
      "headlineKo": "Salesforce 전 CEO의 AI 스타트업 Sierra가 300억 달러 가치 평가를 받았습니다. 단 6개월 만에 두 배로 늘어났습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8a4e9abc681c5498cf73339bfc3eef015c683a3ed98b8fb898cd57a97c961139",
        "publishedAt": 1795460102,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $30 Billion, $30 billion, $1.75 billion, $950 million, $15 billion, 30%, $400 million, $150 million.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 CRM의 사업과 관련된 'Salesforce Ex-CEO's AI Startup Sierra Hits $30 Billion Valuation. It Doubled In Just Six Months.' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "2a1982e4fbc4144f90a5",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Cramer's lightning round: Buy Applied Materials",
      "headlineKo": "Cramer의 번개 라운드: Applied Materials 구매",
      "source": {
        "name": "CNBC",
        "url": "https://finnhub.io/api/news?id=9b537ea429f1e5ca4e45d1cece6a93ab238cda218fa044c5a444a4c64ecbe195",
        "publishedAt": 1795460101,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cramer의 번개 라운드: Applied Materials 구매 탐색 시장 건너뛰기 비즈니스 투자 기술 정치 및 정책 비디오 관심 목록 Investing Club PRO 라이브스트림 메뉴 핵심 포인트 다시 그 시간이 왔습니다!",
        "\"Mad Money\" 진행자 Jim Cramer는 번개처럼 둥근 종을 울립니다. 이는 그가 발신자의 주식 관련 질문에 빠른 속도로 답변한다는 의미입니다.",
        "이 기사에서는 AMAT VRTX HOOD DD 좋아하는 주식을 팔로우하세요. 무료 계정 만들기 Applied Materials의 연간 현재 주식 실적."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 17 times, $50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 17 times, $50 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "5e614020c6c36a2fa3f8",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "headline": "Why Oracle Stock Is Rising Today",
      "headlineKo": "오늘날 오라클 주식이 상승하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bb7a1efea69af4b45a1be7aa56fa5e8f601b68c816eac1b46c23370fc67a139a",
        "publishedAt": 1795458602,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘날 오라클 주식이 상승하는 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ 24,089.56 +6.5% +1,471.82 비트코인 ​​$59,8",
        "오라클은 OpenAI 계약을 이행하는 데 필요한 자금을 확보했으며 Abilene 캠퍼스가 거의 완성되었다고 밝혔습니다.",
        "오라클은 지난 분기에 발생한 운영 비용보다 약 50억 달러를 더 지출했으며, 오라클의 AI 투자가 장기적으로 성과를 거둘지는 여전히 회의적입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $5 billion, 12.34%, 12.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $5 billion, 12.34%, 12.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ae628dee754b9c66d82c",
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
      "headline": "Here’s What Drove Microsoft Corporation’s (MSFT) Q3 Outperformance",
      "headlineKo": "Microsoft Corporation(MSFT)의 3분기 실적을 이끈 요인은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c9ce2705a69c3f00b4eeeaf162c63686d5f13bbda996ed2856b0bfcc5f938b5",
        "publishedAt": 1795457142,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft Corporation(MSFT)의 3분기 실적을 이끈 요인은 다음과 같습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "861190e83733ea231a4d",
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
      "direction": "mixed",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Investors Might Be Underestimating Seagate’s Long-Term AI Growth Opportunity",
      "headlineKo": "투자자들은 Seagate의 장기적인 AI 성장 기회를 과소평가하고 있을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d0044f5e95ca0319c28bc9b351f3df5f71505f8a99b5f7f98c7dd53d92f90c3",
        "publishedAt": 1795455234,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "투자자들은 Seagate의 장기적인 AI 성장 기회를 과소평가하고 있을 수 있습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "6b1b90ba844c28a9e7c3",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "STX",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Investors Might Be Underestimating Seagate’s Long-Term AI Growth Opportunity",
      "headlineKo": "투자자들은 Seagate의 장기적인 AI 성장 기회를 과소평가하고 있을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d0044f5e95ca0319c28bc9b351f3df5f71505f8a99b5f7f98c7dd53d92f90c3",
        "publishedAt": 1795455234,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 98.4%, 225%, 17.59%, $544.55,, $1,143.27., $1,050, $1,044.83., 92%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 STX의 사업과 관련된 'Investors Might Be Underestimating Seagate’s Long-Term AI Growth Opportunity' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "c8848fb53118cf86a74c",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "META",
      "relatedTickers": [
        "META",
        "NVDA",
        "SNDK"
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta Soars 6%, Cipher Up 17% as AI Stocks Rebound With Jensen Huang Back at Nvidia",
      "headlineKo": "Jensen Huang이 Nvidia로 돌아오면서 AI 주식이 반등하면서 Meta는 6%, Cipher는 17% 상승",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f591d909d6cd50404d017ba5ee87190aa57a2d45c3db31bdb6c7372290a9a3c8",
        "publishedAt": 1795455111,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang이 Nvidia로 돌아오면서 AI 주식이 반등하면서 Meta는 6%, Cipher는 17% 상승 | TIKR.com General Investing Meta는 6% 상승, Cipher는 AI 주식이 반등하면서 Jensen Huang이 Nvidia Michael Douglass로 복귀함에 따라 17% 상승 • 4분 읽기 검토자:",
        "Cipher Digital과 Sandisk는 AI 빌드에 판매되었으며 훨씬 더 뛰어 올랐습니다.",
        "분석가들이 2028년에 정규 EPS를 42.40달러로 예상하고 있음에도 불구하고 Meta는 5년 평균 배수보다 낮은 수준으로 거래됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 17%, $42.40 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, 17%, $42.40 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e5347336f48f0c45495d",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia Is Now Second To Apple In The World’s Most Valued Companies On Jensen Huang Optimism",
      "headlineKo": "엔비디아는 이제 Jensen Huang 낙관주의로 세계에서 가장 가치 있는 기업에서 Apple에 이어 2위를 차지했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b486e39527a7c4e27450ea2605bb70f357b6a1ad86fc1740a8cdf5c796f4070",
        "publishedAt": 1795454730,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia는 이제 Jensen Huang Optimism AI Agent에서 세계에서 가장 가치 있는 기업에서 Apple에 이어 2위를 차지했습니다. Trending News Earnings All DIA 0.02% SPY 0.26% QQQ 0.15% Trending BBIO 4.07% ZM 0.08% CRWD 0.78% BMY 1.77% SNY 0.54% HPE 6.39% INSM 5.49%Z",
        "엔비디아는 이제 Jensen Huang 낙관주의로 인해 세계에서 가장 가치 있는 기업에서 Apple에 이어 2위를 차지했습니다. Jensen Huang의 복직 이후 Nvidia의 시가총액은 월요일에 4조 달러를 넘어 두 번째로 가치 있는 기업이 되었습니다.",
        "독일 베를린 - 10월 19일: NVIDIA CEO Jensen Huang이 Invest In Germany Summit에서 프리드리히 메르츠(Friedrich Merz) 독일 총리의 연설에 반응하여 독일 정부, NVIDIA 및 독일 Com 그룹 간의 전략적 협력을 발표했습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 0.02%, 0.26%, 0.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 0.02%, 0.26%, 0.15% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a64c801b878ec9eefeb3",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "direction": "mixed",
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Advanced Micro Devices vs. Dell Technologies: Comparing Revenue Trends Amid the Artificial Intelligence Boom",
      "headlineKo": "고급 마이크로 디바이스와 Dell Technologies: 인공 지능 붐 속에서 수익 추세 비교",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b62e125baa3cff8b23128d7dcc972b0b200e8fc51aa74eba79f280565bf0450",
        "publishedAt": 1795454549,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "고급 마이크로 디바이스와 Dell Technologies: 인공 지능 붐 속에서 수익 추세 비교"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "5c7a833f322f546dc27a",
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
      "headline": "Stanley Druckenmiller and 45 Other Big Funds Bought Amazon Last Quarter. Dan Loeb and 25 Others Sold. Who’s Right?",
      "headlineKo": "Stanley Druckenmiller와 45개의 기타 대형 펀드가 지난 분기에 Amazon을 인수했습니다. Dan Loeb 외 25개 판매. 누가 맞나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f4e039c420b9e352ce086be95dfe8a97454a1099c80448fdac0f0a8e6e3fb932",
        "publishedAt": 1795454486,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Stanley Druckenmiller와 45개의 기타 대형 펀드가 지난 분기에 Amazon을 인수했습니다.",
        "| TIKR.com General Investing Stanley Druckenmiller 및 45개의 기타 대형 펀드가 지난 분기에 Amazon을 인수했습니다.",
        "David Hanson • 6분 읽기 검토자: David Hanson 마지막 업데이트 2026년 11월 23일 Canva를 통해 Pexels에서 Syammasfitria Studio 및 Tiger Lily 주요 내용 9월에 끝난 분기에 13F를 제출한 460개의 대형 펀드 중"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $1 billion, 20%, 43% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1 billion, 20%, 43% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "bf85ff427776a207a3d0",
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
      "direction": "risk",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Meta throws out its net-zero goal. Its competitors should be furious",
      "headlineKo": "Meta는 순 제로 목표를 던졌습니다. 경쟁사들은 분노해야 한다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0263c5e7c9f6dc667bf254d76aba1ea4e32fb994f8a88d29c8837234a1ce8961",
        "publishedAt": 1795454025,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Meta는 순 제로 목표를 던졌습니다. 경쟁사들은 분노해야 한다"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "bf3fad2a0baf59b3d492",
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
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Ken Fisher and 11 Other Big Funds Bought KLA Last Quarter. Brad Gerstner and 11 Others Sold. Who’s Right?",
      "headlineKo": "Ken Fisher와 11개의 다른 대형 펀드가 지난 분기에 KLA를 인수했습니다. Brad Gerstner 외 11개 판매. 누가 맞나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9da129d5a24b25c977a8291021ccc37850fd62faac46a28d6f9b362a57a04b52",
        "publishedAt": 1795453798,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Ken Fisher와 11개의 다른 대형 펀드가 지난 분기에 KLA를 인수했습니다.",
        "| TIKR.com 일반 투자 Ken Fisher 및 기타 11개 대형 펀드가 지난 분기에 KLA를 인수했습니다.",
        "David Hanson • 6분 읽기 검토자: David Hanson 최종 업데이트 2026년 11월 23일 @Kittipong Jiraukhanont from PhonlamaiPhoto의 이미지 via Canva 주요 내용 9월에 끝난 분기에 13F를 제출한 460개 대형 펀드 중"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 63%, 35%, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "KLAC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "KLAC에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 63%, 35%, 53% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "36046aa8fdd7e1e319ae",
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
      "headline": "The S&P 500 Just Fell Into a Correction. Your $3 Million Retirement Portfolio May Be Less Diversified Than You Think",
      "headlineKo": "S&P 500이 조정 국면에 빠졌습니다. 귀하의 300만 달러 은퇴 포트폴리오는 생각보다 다양하지 않을 수 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b41f645c4747b4aa76fdb6e1c8407440bb927dd095643699cf72eef249ed2ba2",
        "publishedAt": 1795453471,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "S&P 500이 조정 국면에 빠졌습니다.",
        "귀하의 300만 달러 은퇴 포트폴리오는 생각보다 다양하지 않을 수 있습니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,237.40 −0.33% Dow Jones 49,616.00 −0.28% Nasdaq 100 26,673.00 −0.51% Russell 2000 2,669.48 −0.17% S&P 500 7,237.40 −0.33% 다우존스 49,616.00 −0.28% 나스닥 100 26,673.00 −0.51% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $3 Million, 0.33%, 0.28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $3 Million, 0.33%, 0.28% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "aace602a57c771072a6e",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "VRT",
      "relatedTickers": [
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
      "headline": "13 Big Funds Bought Vertiv Holdings Co Last Quarter, While 17 Sold. Who’s Right?",
      "headlineKo": "지난 분기에 13개 대형 펀드가 Vertiv Holdings Co를 인수했고, 17개는 매각되었습니다. 누가 맞나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ee49adfaa3293f74747eea87a863222943a03b5093f3df04e4306bd8c106fcb",
        "publishedAt": 1795453411,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지난 분기에 13개 대형 펀드가 Vertiv Holdings Co를 인수했고, 17개는 매각되었습니다.",
        "| TIKR.com General Investing 13개의 대형 펀드가 지난 분기에 Vertiv Holdings Co를 인수했고 17개는 매각되었습니다.",
        "David Hanson • 6분 읽기 검토자: David Hanson 최종 업데이트: 2026년 11월 23일 @P.CHOTHANAWARAPONG from ภгаพขאא JU.STOCKER via Canva, @Kanpisut from Jookiko via Canva 주요 내용 해당 분기에 13F를 제출한 460개 대형 펀드 중"
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 31%, $1 billion, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "VRT에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 31%, $1 billion, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "b306ef035a64a4793fa2",
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
      "headline": "Amazon Stocks Rise 4.45% as Reported $7.5 Billion Decart Deal Nears",
      "headlineKo": "아마존 주식은 75억 달러 규모의 디카르트 거래가 가까워지면서 4.45% 상승했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2af04a1155406f3697ab82066e0b653edf37a164d52c0fab9c241cc9b0e2f549",
        "publishedAt": 1795453349,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존 주식은 75억 달러 규모의 디카르트 거래가 가까워지면서 4.45% 상승했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "d7d9f0fa09c5936a41e6",
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
      "headline": "Amazon To Buy Decart's AI Technology To Boost Trainium Chip Performance, Cut AI Costs",
      "headlineKo": "Amazon, Trainium 칩 성능 향상 및 AI 비용 절감을 위해 Decart의 AI 기술 구입",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=808e2f2dd873cb357f8c92467387c34e5f43a23e876098706fdf774679fdcfad",
        "publishedAt": 1795451992,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Amazon, Trainium 칩 성능 향상 및 AI 비용 절감을 위해 Decart의 AI 기술 구입"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "bca01a77a9ab1dd48edb",
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
      "headline": "Apple Hit an All-Time High While AI Stocks Sold Off. Here’s the Big Tech Stock I’d Buy.",
      "headlineKo": "AI주가 매도하는 동안 애플은 사상 최고치를 경신했다. 내가 사고 싶은 빅테크 주식은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=94d7142ae883043323f2d4b3c8848345babaa19bca8b60437bb3b9df1065c543",
        "publishedAt": 1795451522,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI주가 매도하는 동안 애플은 사상 최고치를 경신했다.",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ 24,089.56 +6.5% +1,471.82 비트코인 $60,427.00 -1.1% -$653.33 개미 $87.64 -",
        "해당 주식은 동종 업체에 비해 프리미엄 수익 가치 평가로 거래됩니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.90%, $349.08, $6.52 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.90%, $349.08, $6.52 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f163edd02e7e8c73e52b",
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
      "direction": "positive",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Nvidia Rehiring Jensen Huang Is Making Sandisk Stock Skyrocket Today",
      "headlineKo": "Nvidia가 Jensen Huang을 재고용하여 오늘 Sandisk 주가가 급등하는 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1615be7b0d22cfbaf7ce0feb262b956372f172b4d178b4a6cdecbb560720f13b",
        "publishedAt": 1795449825,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia가 Jensen Huang을 재고용하여 Sandisk 주가가 급등하는 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ",
        "AI중앙은행이 다시 영업을 시작했습니다.",
        "Sandisk보다 더 좋아하는 10가지 주식 > Sandisk( SNDK +10.69% ) 주식은 월요일 오전 10시 30분까지 20.5% 급등하며 크게 반등했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 35%, 10.69%, 20.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 35%, 10.69%, 20.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "9b6aaca90f0449b539d5",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "COHR",
      "relatedTickers": [
        "COHR",
        "LITE",
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
      "headline": "Applied Optoelectronics and Lumentum Soar 22% as Jensen Huang’s Return to NVIDIA Sparks AI Optics Rebound; Coherent Jumps 19%",
      "headlineKo": "Jensen Huang이 NVIDIA Sparks AI Optics로 복귀하면서 Applied Optoelectronics와 Lumentum이 22% 상승했습니다. 일관된 점프 19%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0fa3bc2818ca19361123e599e12707b33f511b8aab21e842630f3de16cb49cc4",
        "publishedAt": 1795449427,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang이 NVIDIA Sparks AI Optics로 복귀하면서 Applied Optoelectronics와 Lumentum이 22% 상승했습니다. 일관된 점프 19% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,168.60 −1.27% Dow Jones 49,378.00 −0.76% Nasdaq 100 26,230.00 −2.16% Russell 2000 2,655.03 −0.71% S&P 500 7,168.60 −1.27% 다우존스 49,378.00 −0.76% 나스닥 100 26,230.00 −2.16% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 당사의 스폰서 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 22%, 19%, $40.27 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "COHR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "COHR에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 22%, 19%, $40.27 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "fe8b04a59418e85cedee",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "NVDA",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Taiwan Semiconductor Rallies 17% as Jensen Huang’s Return to NVIDIA Lifts Chip Stocks; Intel Surges 15%, AMD Jumps 8%",
      "headlineKo": "Jensen Huang의 NVIDIA 복귀로 칩 재고가 상승함에 따라 대만 반도체는 17% 상승했습니다. 인텔 급등 15%, AMD 급등 8%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=982251e22346f3bdee20e6d3f27de9b9c8c48794b1f21274030eef9c98fac7e9",
        "publishedAt": 1795449328,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang의 NVIDIA 복귀로 칩 재고가 상승함에 따라 대만 반도체는 17% 상승했습니다. Intel은 15% 급등, AMD는 8% 급등 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,251.30 +4.27% Dow Jones 49,666.80 +2.72% Nasdaq 100 26,780.00 +6.11% Russell 2000 2,663.12 +2.63% S&P 500 7,251.30 +4.27% 다우존스 49,666.80 +2.72% 나스닥 100 26,780.00 +6.11% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 당사의 스폰서 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 17%, 15%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 17%, 15%, 8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2160cdfcaed1ecadd8d0",
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
      "headline": "Benioff Says “226K Custom Agents” Now Run on Slack. Salesforce Has a New Answer to the SaaSpocalypse",
      "headlineKo": "Benioff는 이제 \"226K 맞춤형 에이전트\"가 Slack에서 실행된다고 말합니다. Salesforce에는 SaaSpocalypse에 대한 새로운 답변이 있습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9a5b2c5a000328fd3ba10193cb5a2e4fd5c69271b20038de3951a2d6f75bf2d2",
        "publishedAt": 1795449124,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Benioff는 이제 \"226K 맞춤형 에이전트\"가 Slack에서 실행된다고 말합니다.",
        "Salesforce에는 SaaSpocalypse에 대한 새로운 답변이 있습니다 | TIKR.com General Investing Benioff는 이제 \"226K 맞춤형 에이전트\"가 Slack에서 실행된다고 말합니다.",
        "Salesforce, SaaSpocalypse Wiltone Asuncion에 대한 새로운 답변 제공 • 6분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 23일 Canva를 통한 Getty Images Pro의 @ShutterOK, Canva Key Takeaw를 통한 Getty Images의 @Blue Planet Studio"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 6%, 11%, $41.5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 6%, 11%, $41.5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "894678016b4616eeb0b7",
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
      "headline": "Jensen Huang Just Got His Job Back and Nvidia Soared 30% at the Open. Here’s What It Costs a Retiree to Sell $100,000 of the Stock in a Brokerage Account and in an IRA",
      "headlineKo": "Jensen Huang은 막 직장을 되찾았고 Nvidia는 Open에서 30% 급등했습니다. 퇴직자가 중개 계좌 및 IRA에서 $100,000의 주식을 판매하는 데 드는 비용은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bd8d57b242fc27b96cd1fee154ff4550d843e2f10ab3a611dd1b026cf47235e6",
        "publishedAt": 1795449060,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang은 막 직장을 되찾았고 Nvidia는 Open에서 30% 급등했습니다.",
        "퇴직자가 중개 계좌 및 IRA(24/7 Wall St.)에서 $100,000의 주식을 판매하는 데 드는 비용은 다음과 같습니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,251.30 +4.27% Dow Jones 49,666.80 +2.72% Nasdaq 100 26,780.00 +6.11% Russell 2000 2,663.12 +2.63% S&P 500 7,251.30 +4.27% 다우존스 49,666.80 +2.72% 나스닥 100 26,780.00 +6.11% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $100,000, $15,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, $100,000, $15,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "879a4eafcf6d74a0bd0d",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
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
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Why Micron Stock Is Up Today",
      "headlineKo": "오늘 마이크론 주식이 상승한 이유",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=add2404f2821ee681dbfcb8f6830fa5db55c4e57b76b61dd59cb5c637825411a",
        "publishedAt": 1795448822,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "오늘 Micron 주식이 상승한 이유 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,232.58 +4.7% +322.19 DJI 49,584.87 +3.0% +1,437.54 NASDAQ 24,063.80 +6.4% +1,446.07 비트코인 ​​$62,152.0",
        "마이크론의 CEO는 지난 수요일 2027년 공급량의 75%가 이미 판매되었으며 고객 상담이 2028년으로 옮겨졌다고 밝혔습니다. 반면 Citi는 Nvidia 관련 자금 조달을 완전히 중단하더라도 글로벌 메모리 수요가 약간만 줄어들 것이라고 추정했습니다.",
        "황의 복귀는 마이크론에 해를 끼칠 AI 둔화에 대한 두려움을 진정시키는 데 도움이 되지만, 장기 메모리 가격과 이것이 회사 수익에 미칠 영향에 대해서는 여전히 우려가 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 75%, 17.62%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 75%, 17.62%, 20% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "551b4447a4b7dbe679af",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "headline": "SpaceX Could Hit Microsoft-Scale Revenue in 2027—Then the Math and Mechanics Get Murky",
      "headlineKo": "SpaceX는 2027년에 Microsoft 규모의 수익을 달성할 수 있습니다. 그러면 수학과 역학은 어두워질 것입니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f46b3f8af5ced92417b151583bed24db7b1caece9c45fc313018eeed1e115d8",
        "publishedAt": 1795448747,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX는 2027년에 Microsoft 규모의 수익을 달성할 수 있습니다. 그러면 수학과 역학이 어두워질 수 있습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,218.10 +3.79% Dow Jones 49,498.80 +2.38% Nasdaq 100 26,643.20 +5.57% Russell 2000 2,654.47 +2.29% S&P 500 7,218.10 +3.79% 다우존스 49,498.80 +2.38% 나스닥 100 26,643.20 +5.57% 러셀 20",
        "SpaceX(NASDAQ:SPCX | SPCX Price Prediction)와 Microsoft(NASDAQ:MSFT)는 10월에 수익을 보고했으며, 현재 둘 다 기업에 AI 컴퓨팅을 판매하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $14.60 billion, $33 billion, $37 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $14.60 billion, $33 billion, $37 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "668ba6d7ec998a31edb7",
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
      "headline": "Oracle Delivers a Pointed Response to Growing OpenAI-Related Fears",
      "headlineKo": "Oracle, 점점 커지는 OpenAI 관련 우려에 대한 명확한 대응 제공",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2f3378a7c9292c0bad51d37b819816db37e1e262f9c78e60cbdcd84bf3eaa0aa",
        "publishedAt": 1795448213,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 ORCL의 사업과 관련된 'Oracle Delivers a Pointed Response to Growing OpenAI-Related Fears' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b539ad8de668f311110c",
      "schemaVersion": 1,
      "eventType": "supply_chain",
      "eventLabel": "공급망 문제",
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
      "headline": "Digital Logistics - Global Strategic Business Report 2026: Capitalize on 21.2% CAGR and a US$179.4B Market as IBM, Oracle, SAP, Siemens, and Tech Mahindra Disrupt Supply Chains",
      "headlineKo": "디지털 물류 - 2026년 글로벌 전략 비즈니스 보고서: IBM, Oracle, SAP, Siemens 및 Tech Mahindra가 공급망을 중단함에 따라 CAGR 21.2% 및 미화 1,794억 달러 규모의 시장 활용",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b882208cfeafabed056e150c3bf06d78fcd483bc892739a0b6566f9a630cd00",
        "publishedAt": 1795448040,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 ORCL의 사업과 관련된 'Digital Logistics - Global Strategic Business Report 2026: Capitalize on 21.2% CAGR and a US$179.4B Market as IBM, Oracle, SAP, Siemens, and Tech Mahindra Disrupt Supply Chains' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d96019b8170e088b2dc2",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Global Regulatory Data Market Report 2026 | Capitalize on 18.3% CAGR as AI, cloud and real-time reporting fuel $5.96B by 2030; IBM, Oracle, SAP and Accenture accelerate innovation",
      "headlineKo": "글로벌 규제 데이터 시장 보고서 2026 | AI, 클라우드 및 실시간 보고로 18.3% CAGR을 활용하여 2030년까지 59억 6천만 달러를 창출합니다. IBM, Oracle, SAP 및 Accenture가 혁신을 가속화합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b28ef5851857373c31d18cb2e74c5b351ec27a65129a479ffa6773cb860394ac",
        "publishedAt": 1795447800,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 ORCL의 사업과 관련된 'Global Regulatory Data Market Report 2026 | Capitalize on 18.3% CAGR as AI, cloud and real-time reporting fuel $5.96B by 2030; IBM, Oracle, SAP and Accenture accelerate innovation' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "9376dab726d5adcbd282",
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
      "headline": "Metal-Oxide-Semiconductor (MOS) Micro (MPU, MCU and DSP) Market Report 2026 | Capitalize on AI, EVs and RISC-V as Intel, Samsung, STMicroelectronics and NXP Drive 9.6% CAGR",
      "headlineKo": "금속 산화물 반도체(MOS) 마이크로(MPU, MCU 및 DSP) 시장 보고서 2026 | Intel, Samsung, STMicroelectronics 및 NXP Drive로 AI, EV 및 RISC-V 활용 CAGR 9.6%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=317ae9c74dec59d44792da28a936c7ad5a52f8294403055b4020f5074063cb93",
        "publishedAt": 1795447740,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 INTC의 사업과 관련된 'Metal-Oxide-Semiconductor (MOS) Micro (MPU, MCU and DSP) Market Report 2026 | Capitalize on AI, EVs and RISC-V as Intel, Samsung, STMicroelectronics and NXP Drive 9.6% CAGR' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "99927f0e9441856d9e8b",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Metal-Oxide-Semiconductor (MOS) Microprocessor Market Global Report 2026 | Capitalize on AI, Chiplets and RISC-V as NVIDIA, Intel, Broadcom and Texas Instruments Drive 10.1% CAGR",
      "headlineKo": "MOS(금속 산화물 반도체) 마이크로프로세서 시장 글로벌 보고서 2026 | NVIDIA, Intel, Broadcom 및 Texas Instruments 드라이브로 AI, Chiplets 및 RISC-V 활용 CAGR 10.1%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37e1be4a52efda4d8c1db776dfb8171b967b496ea77e8243c3d45ca11b1e5833",
        "publishedAt": 1795447680,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 AVGO의 사업과 관련된 'Metal-Oxide-Semiconductor (MOS) Microprocessor Market Global Report 2026 | Capitalize on AI, Chiplets and RISC-V as NVIDIA, Intel, Broadcom and Texas Instruments Drive 10.1% CAGR' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "fa9204d84d33029c83f7",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AAPL",
      "relatedTickers": [
        "AAPL",
        "NVDA",
        "TSLA"
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
      "headline": "NYSE Parent's Tokenized Stock Venture Opens With 113 Assets Planned. Apple, Nvidia And Tesla Are Staying Out.",
      "headlineKo": "NYSE 모회사의 토큰화된 주식 벤처가 113개 자산으로 개장할 예정입니다. 애플, 엔비디아, 테슬라는 물러나고 있다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5b557d540dbab53cbe1aca012f5d3bddfa8107992cc821008e2d7fa075a7aca1",
        "publishedAt": 1795447167,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NYSE 모기업의 토큰화된 주식 벤처가 113개 자산으로 개장할 예정입니다.",
        "| IBTimes Crypto Crypto Business 암호화폐 거래소 OKX의 홍팡(Hong Fang) 대표가 2월 홍콩에서 열린 컨센서스 컨퍼런스에서 연설하고 있다.",
        "OKX와 뉴욕 증권 거래소의 모회사인 Intercontinental Exchange는 토큰화된 증권 거래 벤처를 추진하고 있습니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 34%, $2.1 Trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "AAPL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "AAPL에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 비용·CAPEX·영업현금흐름·FCF·부채에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 34%, $2.1 Trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "dc2f522f93383d2d4cc1",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Citi Issues Stark Warning on Salesforce Ahead of Earnings",
      "headlineKo": "Citi, 수익에 앞서 Salesforce에 엄중한 경고 발행",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51c43c89776894b8c965eb3876d430c4cfefce891a5f1653ad786e488554c68b",
        "publishedAt": 1795446884,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Citi Issues Stark Warning on Salesforce Ahead of Earnings",
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
      "id": "c7131a5b8531616f3a53",
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
      "headline": "Tesla Soars 13% as FSD V15 Rolls Out: Musk Calls It a “Banger Release”",
      "headlineKo": "FSD V15 출시로 Tesla는 13% 급등: Musk는 이를 \"뱅어 릴리스\"라고 부릅니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e415338d65ae906998853535179ec2ac113444ea332d56f7da6768cbc5342024",
        "publishedAt": 1795446770,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "FSD V15 출시로 Tesla 주가 13% 급등: Musk는 이를 \"폭발적인 출시\"라고 부릅니다 | TIKR.com FSD V15 출시로 Tesla 투자가 13% 급등: Musk는 이를 \"뱅어 릴리스\"라고 부릅니다. Chris Arnold • 4분 읽기 검토자: Chris Arnold 마지막 업데이트 N",
        "Canva 주요 내용을 통해 Pexels에서 Trevor Cokley와 Bl∡ke가 찍은 공군 사진 Tesla 주가는 오늘 FSD v15 출시를 시작하면서 13% 상승했습니다. FSD v15는 안전이 중요한 사례를 25배 더 잘 처리한다고 합니다.",
        "이익의 일부는 금요일의 AI 매도세로 인한 시장의 반등이며, Tesla는 25배를 어떻게 측정했는지 밝히지 않았습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, 33%, 25% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, 33%, 25% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "3c6b3a3e199c8f376fc8",
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
      "headline": "AMD Revenue Jumps 45% to Record $13.4 Billion Despite Chip Stock Selloff",
      "headlineKo": "AMD 매출은 칩 재고 매도에도 불구하고 45% 증가하여 134억 달러를 기록했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ef83230403ae8e88d92a48a3f3d0641c4b653066cfd975ba10da48d890d4019e",
        "publishedAt": 1795446566,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD 매출은 칩 재고 매도에도 불구하고 45% 증가하여 134억 달러를 기록했습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "ec9798d8e9c26f1ab018",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "MU",
      "relatedTickers": [
        "MU",
        "NVDA",
        "QQQ",
        "SNDK",
        "SPY",
        "STX"
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
      "headline": "SanDisk Surges 22% as Jensen Huang’s Return to NVIDIA Sparks AI Chip Rebound; Seagate Jumps 18%, Micron Rallies 16%",
      "headlineKo": "Jensen Huang의 NVIDIA Sparks AI 칩 반등으로 SanDisk 22% 급등 Seagate 점프 18%, 마이크론 랠리 16%",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e9b9e1e31324951f997dcf2b31bf1188c5a4e046d8cee60a4f044a33a5292583",
        "publishedAt": 1795446278,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Jensen Huang의 NVIDIA Sparks AI 칩 반등으로 SanDisk 22% 급등; Seagate 점프 18%, Micron 랠리 16% - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,251.30 +4.27% Dow Jones 49,666.80 +2.72% Nasdaq 100 26,780.00 +6.11% Russell 2000 2,663.12 +2.63% S&P 500 7,251.30 +4.27% 다우존스 49,666.80 +2.72% 나스닥 100 26,780.00 +6.11% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 당사의 스폰서 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 22%, 18%, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 22%, 18%, 16% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d8e54c5b4b5540c302f1",
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
      "headline": "Amazon Reportedly Agrees $7.5 Billion Decart AI Deal to Strengthen Trainium Chip Technology",
      "headlineKo": "Amazon, Trainium 칩 기술 강화를 위해 75억 달러 규모의 Decart AI 거래에 합의한 것으로 알려짐",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a575387ec4513249ab5a0f1a3b30c52e58078143db7b10b5c24aef632e458c5",
        "publishedAt": 1795446220,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $7.5 Billion, $7.5 billion.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 AMZN의 사업과 관련된 'Amazon Reportedly Agrees $7.5 Billion Decart AI Deal to Strengthen Trainium Chip Technology' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "b86ace5436a1359cac97",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Alphabet’s Spending Could Unlock a Massive Opportunity Investors Aren’t Pricing In",
      "headlineKo": "Alphabet의 지출은 엄청난 기회를 열어줄 수 있습니다. 투자자들은 가격을 책정하지 않습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ec7da324315685d41b7852f113706579990a90a4dfe8b9a6355c53dea21cdb81",
        "publishedAt": 1795446215,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳의 지출은 막대한 기회를 열어줄 수 있습니다. 투자자들은 가격을 책정하지 않습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,218.10 +3.79% Dow Jones 49,498.80 +2.38% Nasdaq 100 26,643.20 +5.57% Russell 2000 2,654.47 +2.29% S&P 500 7,218.10 +3.79% 다우존스 49,498.80 +2.38% 나스닥 100 26,643.20 +5.57% 러셀 20",
        "𝕏 f ⧉ 이 게시물에는 당사의 스폰서 및 제휴사의 링크가 포함될 수 있으며, Flywheel Publishing은 이를 통해 취한 조치에 대해 보상을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $289.87., $376.32, 29.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $289.87., $376.32, 29.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7a53d41622a067e9bdc5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "SPY",
      "relatedTickers": [
        "AMD",
        "MU",
        "NVDA",
        "ORCL",
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
      "direction": "mixed",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nvidia Is About 5% of a $500,000 S&P 500 Fund. On Monday Morning It Delivered About a Third of the Fund’s $23,900 Gain",
      "headlineKo": "Nvidia는 $500,000 S&P 500 펀드의 약 5%를 보유하고 있습니다. 월요일 아침에는 펀드 수익 $23,900의 약 3분의 1을 달성했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c0768ad7a73a69d685e6f6326d6c275c15dd7573910fe18de9ee5500947c70ce",
        "publishedAt": 1795446180,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: 5%, $500,000, $23,900, 4.41%, 2.90%, 6.23%, 3.05%, 31%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 SPY의 사업과 관련된 'Nvidia Is About 5% of a $500,000 S&P 500 Fund. On Monday Morning It Delivered About a Third of the Fund’s $23,900 Gain' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "84c17a24af683209442f",
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
      "headline": "Amazon agrees to buy Decart AI technology and team in reported $7.5 billion deal",
      "headlineKo": "Amazon은 75억 달러 규모의 거래로 Decart AI 기술 및 팀을 인수하기로 합의했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cf8b6000dd1cbdc2e9584ba200dbaad9a7842ab72c9bd972a3001a451ab6ceb6",
        "publishedAt": 1795446027,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 AMZN의 사업과 관련된 'Amazon agrees to buy Decart AI technology and team in reported $7.5 billion deal' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "36ab406a23d5e0831321",
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
      "headline": "Danaher partners with Microsoft to create an agentic AI platform",
      "headlineKo": "Danaher는 Microsoft와 협력하여 에이전트 AI 플랫폼을 만듭니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6529e4109919c8664de9695fadd16e495b73c7a4eb7e053e77a39ef8f56b6fb",
        "publishedAt": 1795446000,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Danaher partners with Microsoft to create an agentic AI platform",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
        "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
      ],
      "aiInference": [
        "이 기사는 MSFT의 사업과 관련된 'Danaher partners with Microsoft to create an agentic AI platform' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "591d61e3518e85fc8928",
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
        "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526475973/d91615d8k.htm",
        "publishedAt": 1795446000.0,
        "collectedAt": 1795594753.8548477
      },
      "confirmedFacts": [
        "GOOGL가 2026-11-24에 SEC Form 8-K을 제출했습니다.",
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
      "id": "aba2a2034d7ae0ec17e4",
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
        "url": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000138/qcom-20261120.htm",
        "publishedAt": 1795446000.0,
        "collectedAt": 1795594753.8548477
      },
      "confirmedFacts": [
        "QCOM가 2026-11-24에 SEC Form 8-K을 제출했습니다.",
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
      "id": "eeeb005d6c6ba2996b4b",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
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
      "headline": "Arm Soars 13% as CEO Haas Stays Through 2033, Says He’s “Never Been More Confident”",
      "headlineKo": "Arm, Haas CEO가 2033년까지 유지하면서 13% 급등, 그는 \"이보다 더 자신감이 없었다\"고 말함",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=872e47598d93e2c813b6c797d056b2fd419538b05979beb8ab3666c310c10210",
        "publishedAt": 1795445730,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm, CEO Haas가 2033년까지 재임하면서 13% 상승, \"이보다 더 자신감이 없었다\" | TIKR.com General Investing Arm은 Haas CEO가 2033년까지 유지하면서 13% 급등하며 \"그 어느 때보다 자신감이 넘친다\"고 말합니다. Michael Douglass • 4분 읽기 검토됨 b",
        "칩 랠리는 도약의 많은 부분을 설명하지만 Haas를 유지하면 Intel에 대한 Arm의 서버 추진력이 보호됩니다.",
        "분석가들은 Arm의 정규 EPS가 2026회계연도 1.77달러에서 2028회계연도 3.09달러로 상승할 것으로 예상하고 있습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 13%, $1.77, $3.09 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 13%, $1.77, $3.09 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6f33b408436489a1b7db",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMAT",
      "relatedTickers": [
        "AMAT",
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
      "headline": "What Triggered The Fall In Applied Materials Stock?",
      "headlineKo": "어플라이드 머티어리얼즈 주가 하락의 원인은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87bcc8509b664f5d7daea0e2c395aec3da9aa2f3d5a8f622a92e496ef33c9478",
        "publishedAt": 1795445118,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "어플라이드 머티어리얼즈 주가 하락의 원인은 무엇입니까?",
        "| Trefis Trefis 스토리라인 Applied Materials 주가 하락을 촉발한 요인은 무엇입니까?",
        "2026년 11월 23일 · 작성자 Trefis Team AMAT YTD +35.7% SPY YTD +6.7% QQQ YTD +6.3% AMAT 분석 → 오늘의 큰 이야기: 보고된 SEC 조사: Nvidia 주가가 92달러까지 떨어질 수 있습니까?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 35.7%, 6.7%, 6.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 35.7%, 6.7%, 6.3% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1ce85bd0284c9fd6d9dc",
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
      "headline": "Even If Sandisk's Profits Get Cut in Half, Here's What $5,000 in the Stock Could Be Worth by 2030",
      "headlineKo": "Sandisk의 이익이 절반으로 줄어들더라도 2030년까지 주식 5,000달러의 가치는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2b6da90dd5e6e6cef87feb587a7841bd9e97fd38f4a35219d53f5454b5b1623b",
        "publishedAt": 1795444981,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Sandisk의 이익이 절반으로 줄어들더라도 2030년까지 주식 5,000달러의 가치는 다음과 같습니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% The Motley Fool S&P 500 7,232.58 +4.7% +322.19 DJI 49,584에 가입하세요.",
        "리서치 회사인 TrendForce는 2027년에는 플래시 메모리 시장이 공급 과잉에 빠질 것으로 예상합니다.",
        "Sandisk의 지난 분기 데이터센터 수익은 전년 동기 대비 거의 18배에 달했습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 18 times, 14.22%, $79 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 18 times, 14.22%, $79 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7f84b267b626492f4c0e",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arm (ARM) Stock Gets Fair Value Trim As Analysts Cut Targets On Sector Multiple Pressure",
      "headlineKo": "분석가들이 부문별 다양한 압력에 대한 목표를 줄임에 따라 Arm(ARM) 주식이 공정 가치 조정을 얻습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18fb48bbfd75a74d82a64a0338cc2b3f199be2614c423567319bebf7ff046a4c",
        "publishedAt": 1795442879,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm (ARM) Stock Gets Fair Value Trim As Analysts Cut Targets On Sector Multiple Pressure",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "041f67081ee153c0034b",
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
      "headline": "Apple Is Up 29% This Year and Already Above Wall Street’s Target. Our Model Sees $400+",
      "headlineKo": "Apple은 올해 29% 상승했으며 이미 월스트리트 목표를 초과했습니다. 우리 모델은 $400 이상을 보고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2bc139c925a5730c74dcdc395685d5c99645aa8bdae1195b458003c4719286a9",
        "publishedAt": 1795442673,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "애플은 올해 29% 상승했고 이미 월스트리트의 목표치를 넘어섰습니다.",
        "우리 모델은 $400+ - 24/7 Wall St.를 봅니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,251.30 +4.27% Dow Jones 49,666.80 +2.72% Nasdaq 100 26,780.00 +6.11% Russell 2000 2,663.12 +2.63% S&P 500 7,251.30 +4.27% 다우존스 49,666.80 +2.72% 나스닥 100 26,780.00 +6.11% 러셀 20"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 29%, $400, 28.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 29%, $400, 28.64% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "4d2d8fa4269ae2d7ffc4",
      "schemaVersion": 1,
      "eventType": "major_customer_contract",
      "eventLabel": "주요 고객 계약",
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
      "direction": "positive",
      "expectedHorizon": "중기·장기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Arm CEO Rene Haas secures contract extension through 2033",
      "headlineKo": "Arm CEO 르네 하스, 2033년까지 계약 연장",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b3d5ed5ded79d16ffe66005466cb20c41320a11e971e2b5bbdd6406fddf73fc6",
        "publishedAt": 1795442220,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Arm CEO 르네 하스, 2033년까지 계약 연장"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
          "direction": "positive",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "74e6e9414c7e6705386e",
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
      "headline": "Quanta Raises 2026 Outlook: Does it Leave More Room to Run?",
      "headlineKo": "Quanta는 2026년 전망을 제시합니다: 더 많은 실행 여지를 남겨두나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=922aae12fc55f21fd77000115ad8cd7c15ef1bb1d576ddc74693eddb15cfbe09",
        "publishedAt": 1795441320,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Quanta Raises 2026 Outlook: Does it Leave More Room to Run?",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "PWR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "PWR에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "d092df254f43be7b55e7",
      "schemaVersion": 1,
      "eventType": "long_term_supply",
      "eventLabel": "장기 공급계약",
      "primaryTicker": "MSFT",
      "relatedTickers": [
        "AAPL",
        "MSFT",
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
        }
      ],
      "importance": "medium",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Apple vs. Microsoft: Here's Where I'd Put $2,000 Right Now",
      "headlineKo": "Apple 대 Microsoft: 지금 당장 2,000달러를 투자할 곳은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5d5b1feb1c4782c21cb1415cfec1d4fdf837475176327143f28212e11b1e970e",
        "publishedAt": 1795440902,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Microsoft: 지금 당장 2,000달러를 투자할 곳은 여기입니다 | The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,217.72 +4.4% +307.33 DJI 49,477.00 +2.8% +1,329.67 NASDAQ 24,015.51 +6.2% +1,397.",
        "Apple은 경쟁사에 비해 재정적으로 더 보수적이었지만 여전히 매출과 수익을 크게 늘리는 데 성공했습니다.",
        "현재로서는 마이크로소프트의 주식이 더 나은 거래처럼 보입니다."
      ],
      "marketInterpretation": [
        "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.61%, 2.65%, $2,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.61%, 2.65%, $2,000 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f7ae7f54ccc44385fdc5",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "GOOGL",
      "relatedTickers": [
        "AMD",
        "AVGO",
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
      "headline": "Not Good: Broadcom Loses $200 Billion as Chips Crash and Google Reportedly Cuts AI Chip Plans",
      "headlineKo": "좋지 않음: 칩이 붕괴되면서 Broadcom은 2,000억 달러의 손실을 입었고 Google은 AI 칩 계획을 삭감한 것으로 알려짐",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=602ccd818ee66fa039674ae9f89c29c65554ffbdabdc59fcb27be3d9c37eeb7f",
        "publishedAt": 1795440328,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
        "기사에서 언급된 규모: $200 Billion, 12.1%, $304.65, $200 billion, 10.7%, 20%, $16.7 billion, 56%.",
        "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
      ],
      "marketInterpretation": [
        "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
        "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
        "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
      ],
      "aiInference": [
        "이 기사는 GOOGL의 사업과 관련된 'Not Good: Broadcom Loses $200 Billion as Chips Crash and Google Reportedly Cuts AI Chip Plans' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "d19a65362d206338131a",
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
      "expectedHorizon": "단기·중기",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Tesla Bulls Banking on SpaceX “Don’t Get the Dilution Math,” Says Gary Black. Tesla Trades at 3.4x SpaceX’s 2027 Multiple",
      "headlineKo": "SpaceX의 Tesla Bulls Banking은 \"희석 수학을 이해하지 마십시오\"라고 Gary Black은 말합니다. Tesla는 SpaceX의 2027 배수의 3.4배로 거래됩니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3eaab24fd5f35fa555e661a42a7c1fe1fed6dda2c5a416c572aa5d78486f2f8",
        "publishedAt": 1795440048,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "SpaceX의 Tesla Bulls Banking은 \"희석 수학을 이해하지 마십시오\"라고 Gary Black은 말합니다. Tesla는 SpaceX의 2027 배수의 3.4배로 거래됩니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "422bb5718559e41265dc",
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
      "headline": "Morgan Stanley Maintains Overweight on Constellation Energy, Raises Price Target to $393",
      "headlineKo": "Morgan Stanley, Constellation Energy에 대한 비중확대 유지, 목표 주가를 393달러로 상향 조정",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=c474e7e8355b9e11ff76b8f37a1020e485b856d1527b8665ceaca1fd329b5d5e",
        "publishedAt": 1795439216,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Morgan Stanley Maintains Overweight on Constellation Energy, Raises Price Target to $393",
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
      "id": "0d6f6c6686a61f9a4361",
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
      "headline": "GEV Raises 2026 Outlook as Power and Electrification Growth Accelerate",
      "headlineKo": "GEV, 전력 및 전기화 성장 가속화에 따라 2026년 전망 상향",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b59b98de0f4644d9b1877c252070ee8bc34d334bcb25a209fd39c1bd4dc16e07",
        "publishedAt": 1795437060,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "GEV Raises 2026 Outlook as Power and Electrification Growth Accelerate",
        "제목만으로는 수치와 원인을 확정할 수 없습니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "GEV의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "GEV에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
      "id": "c93328f9581755968b3b",
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
      "headline": "V2X Expands Collaboration with Microsoft to Advance the Next Generation of AI-Powered Mission Operations",
      "headlineKo": "V2X, 차세대 AI 기반 임무 운영 발전을 위해 Microsoft와의 협력 확대",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f949c1c17e16aa8f81535ef7a5c41a0ce1def27297257e356c428cd1523abaa8",
        "publishedAt": 1795436880,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "V2X, 차세대 AI 기반 임무 운영 발전을 위해 Microsoft와의 협력 확대"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "08ac87e594bcecefe3c7",
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
      "headline": "Marvell Technology’s Near 50% Plummet Within a Month Means Little to This Wall Street Pro Who Predicts 270% Gains From Here",
      "headlineKo": "Marvell Technology가 한 달 안에 거의 50% 급락했지만 여기에서 270%의 이익을 예측하는 이 월스트리트 전문가에게는 별 의미가 없습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d3f8de381569103150ef0caa06740c019eccc8fdc769ef307a7e3da8e0c4f79c",
        "publishedAt": 1795436145,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology가 한 달 안에 거의 50% 급락했다는 것은 여기에서 270%의 이익을 예측하는 이 월스트리트 전문가에게는 별 의미가 없습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,251.30 +4.27% Dow Jones 49,666.80 +2.72% Nasdaq 100 26,780.00 +6.11% Russell 2000 2,663.12 +2.63% S&P 500 7,251.30 +4.27% 다우존스 49,666.80 +2.72% 나스닥 100 26,780.00 +6.11% 러셀 20",
        "눈에 띄는 +268% 분석가 목표는 기술 기업에 대한 낙관적인 예측을 시각적으로 강조합니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 50%, 270%, 268% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 50%, 270%, 268% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "20da6ec2196b96c253d5",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML",
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
      "headline": "ASML Vs. Taiwan Semiconductor: Here’s Why You Choose One as Your AI-Anchor Now",
      "headlineKo": "ASML 대. Taiwan Semiconductor: 지금 AI 앵커로 하나를 선택하는 이유는 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8fb16e40a862dbf49b75f6bb8595a31905f06682f3d567e6ef1ac0211a170fe1",
        "publishedAt": 1795436136,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Taiwan Semiconductor: 지금 AI 앵커로 하나를 선택하는 이유는 다음과 같습니다. - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,255.20 −0.08% Dow Jones 49,731.00 −0.05% Nasdaq 100 26,795.60 −0.05% Russell 2000 2,672.68 −0.05% S&P 500 7,255.20 −0.08% 다우존스 49,731.00 −0.05% 나스닥 100 26,795.60 −0.05% 러셀 20",
        "Taiwan Semiconductor: 지금 AI 앵커로 하나를 선택하는 이유는 다음과 같습니다. 작성자 Alex Sirois 2026년 11월 23일 오전 7시 15분(ET) 게시 · 3분 읽기 𝕏f ⧉ 이 게시물에는 스폰서 및 계열사의 링크가 포함될 수 있으며 Flywheel Publishing은 다음을 받을 수 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $46.72 billion, 41.2%, $4.60 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ASML에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $46.72 billion, 41.2%, $4.60 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "7e69ee83c6475029d74d",
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
      "headline": "SPY And Gold Fell Together. Did Bonds Save 60/40?",
      "headlineKo": "SPY와 Gold가 함께 떨어졌습니다. 채권이 60/40을 절약했습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ec19b4d6cd5457b1c347429f2665a2f071d3e618adb8dc807d83415deb47023",
        "publishedAt": 1795435547,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "| Trefis Trefis 스토리라인 SPY와 Gold가 함께 떨어졌습니다.",
        "2026년 11월 22일 · 작성자: Trefis Team SPY YTD +1.9% SPY YTD +1.9% QQQ YTD -0.6% SPY 분석 → S&P 500은 11월 16~20일 주에 인공지능 주식 매도세로 인해 8.6% 하락했습니다.",
        "금을 보유하는 펀드인 GLD는 그 주에 9.2% 하락했습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.9%, 0.6%, 8.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.9%, 0.6%, 8.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "78c804a55eeecbf0f439",
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
      "headline": "Walmart, Target, Anthropic, Amazon, Nvidia, Micron and Alphabet are part of Zacks Earnings Preview",
      "headlineKo": "Walmart, Target, Anthropic, Amazon, Nvidia, Micron 및 Alphabet은 Zacks Earnings Preview의 일부입니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=20a3424be7895c9cacf09c014bae2828e7c9456c1853a7b9a2ab7520ed363ef2",
        "publishedAt": 1795435320,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Walmart, Target, Anthropic, Amazon, Nvidia, Micron 및 Alphabet은 Zacks Earnings Preview의 일부입니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "7bd6fcb5e235b88e1dd4",
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
      "headline": "DXL Expands Customer Reach Through Meta's AI Agent Muse with commercetools",
      "headlineKo": "DXL은 Commercetools를 사용하여 Meta의 AI Agent Muse를 통해 고객 도달 범위를 확장합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0b8d8fb7c1c1b59e2035a809d5e11fcc8c90a0a7787dfb249f6c072ea5d6ff24",
        "publishedAt": 1795435260,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "DXL은 Commercetools를 사용하여 Meta의 AI Agent Muse를 통해 고객 도달 범위를 확장합니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "72e72ef787d416ca7a5c",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Salesforce: I See Limited Downside Prior To Q3 Earnings, Stock's Quality Still Solid",
      "headlineKo": "Salesforce: 3분기 수익 이전에는 하락세가 제한적이며 주식 품질은 여전히 ​​양호합니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e980cb07ad5077553a459bbc0e4f150bc8b55d301fc9652fc1c5eda8da5fc9f1",
        "publishedAt": 1795433901,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Salesforce: 3분기 실적 이전에는 하락세가 제한적이며 주식 품질은 여전히 ​​양호합니다(CRM) | 알파 찾기 Johnny Zhang, CFA 2.94K 팔로워 팔로우 요약 Salesforce, Inc.",
        "AI 성장 둔화에 대한 우려로 인한 다중 위축으로 매도세가 주도되면서 9월 최고치보다 거의 30% 하락한 후 여전히 적극 매수세를 유지하고 있습니다.",
        "총 매출 성장과 영업 마진은 여전히 ​​탄력적이며, 견고한 계약 잔고가 성장 전망을 뒷받침하기 때문에 40의 법칙은 하반기에도 45% 이상을 유지할 것으로 예상됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, 45% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, 45% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "8740d7852754d71b14cc",
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
      "headline": "What Is Driving Lam Research Stock?",
      "headlineKo": "드라이빙 램리서치 주식이란?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=68705e799aa84a4cf7f273935ffc5736eadf78aa1e74a55b8380216158a6a89b",
        "publishedAt": 1795433469,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "드라이빙 램리서치 주식이란?",
        "| Trefis Trefis 스토리라인 Lam Research 주식의 원동력은 무엇입니까?",
        "2026년 11월 23일 · 작성자: Trefis Team LRCX YTD +7.4% SPY YTD +1.9% QQQ YTD -0.6% LRCX 분석 → 오늘의 큰 이야기: 보고된 SEC 조사: Nvidia 주가가 92달러로 떨어질 수 있습니까?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 7.4%, 1.9%, 0.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7.4%, 1.9%, 0.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "1e24268c40e7430a5b25",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "MRVL",
      "relatedTickers": [
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
      "headline": "What Triggered The Drop In Marvell Stock?",
      "headlineKo": "Marvell 주식 하락을 촉발한 요인은 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2aa0aeffb06310ae6edc13c5910b4f7276f31055306210cdd6a78d0e53b4e980",
        "publishedAt": 1795432697,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell 주식 하락을 촉발한 요인은 무엇입니까?",
        "| Trefis Trefis 스토리라인 Marvell 주식 하락을 촉발한 요인은 무엇입니까?",
        "2026년 11월 23일 · 작성자: Trefis Team MRVL YTD +44.1% SPY YTD +1.9% QQQ YTD -0.6% MRVL 분석 → 오늘의 큰 이야기: 보고된 SEC 조사: Nvidia 주식이 92달러로 떨어질 수 있습니까?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 44.1%, 1.9%, 0.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 44.1%, 1.9%, 0.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "ce4c93f64f63d27a546f",
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
      "headline": "Alphabet Trades at “Just 18 Times Forward Earnings.” Its SpaceX and Anthropic Stakes Top $200 Billion",
      "headlineKo": "알파벳은 \"단지 18배의 수익 창출\"로 거래됩니다. SpaceX와 Anthropic 지분이 2000억 달러를 넘어섰습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc403d28370aaa6929685dbe8f6b8c21d8781034d1be77e9d56ee8d4d1b89817",
        "publishedAt": 1795431921,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "알파벳은 \"단지 18배의 수익 창출\"로 거래됩니다. SpaceX와 Anthropic 지분이 2000억 달러를 넘어섰습니다."
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "e75ee1703502f2e952da",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
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
      "headline": "Qualcomm Is Down 42% and SK hynix Has Plunged 48% Amid the AI Sell-Off. Which Is the Better Stock to Buy for 2027?",
      "headlineKo": "AI 매각으로 퀄컴은 42%, SK하이닉스는 48% 급락했다. 2027년에 어느 주식을 구매하는 것이 더 좋습니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=451c284b9fdffaee68d84f8658a7ee19e146fb9244f1f4bb6bb64dfc02b10d65",
        "publishedAt": 1795429202,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AI 매각으로 퀄컴은 42%, SK하이닉스는 48% 급락했다.",
        "2027년에 어느 주식을 구매하는 것이 더 좋습니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 7,237.17 +4.7% +326.78 DJI 49,595.31 +3.0% +1,447.98 NASDAQ 24,089.56 +6.5% +1,471.82 비트코인 $59,807.00 -2.6% -$1,567.87 개미 $87.64"
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 42%, 48%, $43.1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 42%, 48%, $43.1 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "d1a15b14458be1fc3d5b",
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
      "headline": "Susquehanna Maintains Positive on Marvell Technology, Lowers Price Target to $225",
      "headlineKo": "Susquehanna는 Marvell 기술에 대해 긍정적인 태도를 유지하고 목표 가격을 225달러로 낮췄습니다.",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=2403de1d1bdb1653af190278d5d6607ea2d1e749ad909b21a229990de8dd0a2d",
        "publishedAt": 1795427661,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Susquehanna는 Marvell 기술에 대해 긍정적인 태도를 유지하고 목표 가격을 225달러로 낮췄습니다."
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
      "id": "aa5af971146e7ca6b642",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
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
      "headline": "MSTR Stock Jumps In Premarket As Bitcoin Reclaims $61K After Brutal Nasdaq Sell-Off",
      "headlineKo": "잔인한 Nasdaq 매도 후 Bitcoin이 $ 61K를 회수함에 따라 MSTR 주식이 프리 마켓에서 급등했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=259366396bdde47783b5c9997e41f67eb15444d9f077cf747196acab9247ef38",
        "publishedAt": 1795427078,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "비트코인이 잔혹한 Nasdaq 매도 AI 에이전트 이후 $61K를 회수함에 따라 MSTR 주식은 프리마켓에서 급등합니다. 동향 뉴스 수익 전체 DIA 0.02% SPY 0.19% QQQ 0.10% Trending BBIO 4.07% ZM 0.08% CRWD 0.78% BMY 1.77% SNY 0.54% HPE 6.71% INSM 5.49% ZS 17.67%",
        "잔혹한 나스닥 매도 이후 비트코인이 61,000달러를 회수함에 따라 MSTR 주식은 프리마켓에서 급등합니다. 반등은 아시아 규제 당국이 시장을 안정화하기 위해 움직이면서 발생합니다.",
        "이 사진 일러스트에서는 Strategy(MicroStrategy Incorporated) 로고가 스마트폰 화면에 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $61, 0.02%, 0.19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "QQQ에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: $61, 0.02%, 0.19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "6c671ad2a4bf126ae143",
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
      "headline": "Swap Cash for the Apple Stock Inside Your Irrevocable Trust Before You Die and the Shares Come Home for a Full Step-Up. Estate Lawyers Write That Power In on Purpose",
      "headlineKo": "죽기 전에 취소할 수 없는 신탁 내에서 현금을 Apple 주식으로 교환하세요. 그러면 주식이 집으로 돌아와 완전한 상승을 이룰 수 있습니다. 부동산 변호사는 의도적으로 그 권한을 작성합니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7287f698ed0fec645b5078d9d74cf13ef2d83b554e8f968eadadb7155e70e03d",
        "publishedAt": 1795427024,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "죽기 전에 취소할 수 없는 신탁 내에서 현금을 Apple 주식으로 교환하세요. 그러면 주식이 집으로 돌아와 완전한 상승을 이룰 수 있습니다.",
        "부동산 변호사들은 목적에 따라 권력을 행사합니다 - 24/7 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,111.20 +2.25% Dow Jones 49,097.80 +1.55% Nasdaq 100 25,964.20 +2.88% Russell 2000 2,640.62 +1.76% S&P 500 7,111.20 +2.25% 다우존스 49,097.80 +1.55% 나스닥 100 25,964.20 +2.88% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $4.5 trillion, $25.66, $345.52, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $4.5 trillion, $25.66, $345.52, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "c16625aefa30e6890655",
      "schemaVersion": 1,
      "eventType": "guidance_change",
      "eventLabel": "실적 전망 변경",
      "primaryTicker": "ASML",
      "relatedTickers": [
        "ASML",
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
      "headline": "ASML Stock Fell 25% In The AI Selloff, But Its Outlook Hasn't Budged",
      "headlineKo": "ASML 주식은 AI 매도세로 인해 25% 하락했지만 전망은 흔들리지 않았습니다.",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b3fdb14a7c548357fa7d200917e65154d7b87dce413b46747080d701b497f05a",
        "publishedAt": 1795425973,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "ASML 주식은 AI 매도세로 인해 25% 하락했지만 전망은 꺾이지 않았습니다(NASDAQ:ASML) | Alpha Rick Orford 찾기 5.32K 팔로워 요약 팔로우 ASML Holding N.V.",
        "Strong Buy로 유지됨: AI 매도는 사업 전망을 그대로 유지하면서 약 25%의 주가를 하락시켰습니다.",
        "ASML은 4분기 지침에 따른 연간 수익이 10월의 26배에 비해 거의 20배에 달하며 2028년까지 수요가 공급을 초과할 것으로 예상됩니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 25%, €100 million, 1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 25%, €100 million, 1% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6d0b508c057b08764d7d",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Baird Maintains Outperform on Hubbell, Lowers Price Target to $488",
      "headlineKo": "Baird, Hubbell에서 우수한 성과를 유지하고 목표 가격을 488달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=6b80ec96e6ac7b83a0826d2ee29fe403d91442aec02332b14512198baeedfff4",
        "publishedAt": 1795420846,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Baird Maintains Outperform on Hubbell, Lowers Price Target to $488",
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
    },
    {
      "id": "befb07a36457193b9400",
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
      "direction": "mixed",
      "expectedHorizon": "단기",
      "impactProbability": "낮음·확인 필요",
      "verificationStatus": "needs_confirmation",
      "headline": "Baird Maintains Outperform on Eaton Corp, Lowers Price Target to $375",
      "headlineKo": "Baird, Eaton Corp에 대한 우수한 실적 유지, 목표 가격을 375달러로 낮춤",
      "source": {
        "name": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4525b01160018216aa2493968d514304787c0e6c16c01d7bb2c96112776f088c",
        "publishedAt": 1795420678,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Baird, Eaton Corp에 대한 우수한 실적 유지, 목표 가격을 375달러로 낮춤"
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
          "ticker": "ETN",
          "direction": "mixed",
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인",
          "basis": "rule"
        }
      ],
      "watch": []
    },
    {
      "id": "a75549a6b05eae4fdd6a",
      "schemaVersion": 1,
      "eventType": "analyst_target_change",
      "eventLabel": "애널리스트 목표주가 변경",
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
      "headline": "Cathie Wood Says TSLA Holders ‘Will Get’ A Premium If SpaceX Buys Tesla — HSBC Puts It At Over 30%",
      "headlineKo": "Cathie Wood는 SpaceX가 Tesla를 구매하면 TSLA 보유자가 프리미엄을 '얻게 될 것'이라고 말합니다. HSBC는 이를 30% 이상으로 설정합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f984d6d717f2f513b28a25fd46bd43f94178b147db54695af243326f2256da2",
        "publishedAt": 1795418045,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Cathie Wood는 SpaceX가 Tesla를 구매하면 TSLA 보유자가 프리미엄을 '얻게 될 것'이라고 말합니다. HSBC는 AI 에이전트를 30% 이상으로 설정합니다. Trending News Earnings All DIA 1.92% SPY 2.80% QQQ 3.63% Trending CAPR 69.70% QQQ 3.63% UNH 3.19% CAT 3.63% PRAX 0.14% NVDA 8.01%ZE",
        "Cathie Wood는 SpaceX가 Tesla를 구매하면 TSLA 보유자가 프리미엄을 얻을 것이라고 말합니다 — HSBC는 이를 30% 이상으로 설정합니다. HSBC는 SpaceX의 주식 구조가 T에서 보유한 것보다 더 큰 의결권을 제공하기 때문에 Elon Musk의 합병에 대한 주요 인센티브로 통제권을 보고 있습니다.",
        "이 사진 일러스트에서는 2026년 10월 20일 중국 충칭에서 Tesla 로고를 배경으로 스마트폰 화면에 SpaceX의 로고가 표시되어 있습니다."
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 30%, 1.92%, 2.80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 30%, 1.92%, 2.80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "e8b372acee358d094e42",
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
      "headline": "Nvidia News Has Investors Rethinking These U.S. AI Chip Stocks",
      "headlineKo": "Nvidia 뉴스에 투자자들이 미국 AI 칩 주식을 재고하게 되었습니다",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=898d907f8d88289a5f1cbe9208fa2bfe9801378018fb9bda83e42ea5e48c9d41",
        "publishedAt": 1795417671,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia 뉴스에 투자자들이 미국 AI 칩 주식을 재고하게 되었습니다"
      ],
      "marketInterpretation": [],
      "aiInference": [
        "사업·실적 연결 경로는 다음 공시에서 확인합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
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
      "id": "017cdba32effeba01303",
      "schemaVersion": 1,
      "eventType": "earnings_result",
      "eventLabel": "실적 발표",
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
      "importance": "high",
      "sourceReliability": {
        "level": "medium",
        "score": 65,
        "kind": "reported",
        "reason": "일반 매체 보도, 회사 공시와 교차확인 필요"
      },
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Nio Sees Revenue Topping $15B This Year— But Analyst Warns Onvo Could Derail Tesla Roadster-Inspired Luxury Bet",
      "headlineKo": "Nio는 올해 매출이 150억 달러를 돌파할 것으로 보고 있지만 분석가는 Onvo가 Tesla Roadster에서 영감을 받은 럭셔리 베팅을 탈선시킬 수 있다고 경고합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69f0d8b6b0d078f5e2f08e17b2338ae5f90ff57db3ed9ed8f9df89211b8582d0",
        "publishedAt": 1795415846,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nio는 올해 매출이 150억 달러를 돌파할 것으로 예상하지만 분석가는 Onvo가 Tesla Roadster에서 영감을 받은 럭셔리 베팅 AI 에이전트를 탈선시킬 수 있다고 경고합니다. Trending News Earnings All DIA 1.93% SPY 2.80% QQQ 3.69% Trending CAPR 69.96% QQQ 3.69% NVDA 8.05% CAT 3.81% LUNR 8.89%",
        "Nio는 올해 매출이 150억 달러를 돌파할 것으로 보고 있지만 분석가는 Onvo가 Tesla Roadster에서 영감을 받은 럭셔리 베팅을 탈선시킬 수 있다고 경고합니다. 마진이 높은 모델은 Nio의 2분기 차량 마진을 전년도 10.3%에서 18.5%로 높였습니다.",
        "이제 Morningstar는 할인이 이러한 이익을 약화시킬 수 있다고 경고합니다."
      ],
      "marketInterpretation": [
        "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $15, 1.93%, 2.80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $15, 1.93%, 2.80% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "2c128e6fc6e03d9f29bc",
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
      "headline": "Why Did NVDA, NFLX, ORCL Slip To 52-Week Lows Last Week?",
      "headlineKo": "지난 주 NVDA, NFLX, ORCL이 52주 최저치로 하락한 이유는 무엇입니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be9f73a5c2efe84387ef6e2eb48c90e73acf5030c035e68ef108f4bebc0779d2",
        "publishedAt": 1795410679,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "지난 주 NVDA, NFLX, ORCL이 52주 최저치로 하락한 이유는 무엇입니까?",
        "AI 에이전트 동향 뉴스 수익 전체 DIA 1.92% SPY 2.80% QQQ 3.63% Trending CAPR 69.70% QQQ 3.63% UNH 3.19% CAT 3.63% PRAX 0.14% NVDA 8.01% ZEC 0.74% ASTS 9.45% ICP 4.87% SPY 2.80% 홈 뉴스 시장 주가 NVDA, NFLX, ORCL이 52로 하락한 이유",
        "지난 주 NVDA, NFLX, ORCL이 52주 최저치로 하락한 이유는 무엇입니까?"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 1.92%, 2.80%, 3.63% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.92%, 2.80%, 3.63% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "f1c244eb0dd00a7a7184",
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
      "direction": "neutral",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "Musk Says Tesla’s Real-World AI Will Get Smarter by “About an Order of Magnitude per Year”",
      "headlineKo": "머스크는 테슬라의 실제 AI가 \"연간 10배 정도\" 더 똑똑해질 것이라고 말했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=188a97c2b5f63da2c2c31c9cc8cf0f71a2aeb5eda34320a11fc1d7dd34201543",
        "publishedAt": 1795409401,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "머스크는 Tesla의 실제 AI가 \"연간 약 10배\"로 더 똑똑해질 것이라고 말합니다 | TIKR.com General Investing Musk는 Tesla의 실제 AI가 \"연간 약 10배\"로 더 똑똑해질 것이라고 말합니다. Roxanna Maglangit • 5분",
        "Pexels의 Trevor Cokley와 Bl∡ke가 Canva Key Takeaways를 통해 찍은 공군 사진 Elon Musk가 11월에 게시했습니다.",
        "22일에는 Tesla의 실제 AI가 \"매년 약 10배\"씩 더 똑똑해질 것이라고 합니다. 운전하는 AI의 '지능'을 측정하는 합의된 방법이 없으므로 투자자는 지출, 마일 및 수익을 기준으로 주장을 판단해야 합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $3.24, $3.12,, $3.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $3.24, $3.12,, $3.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "7d959f9650a817697d3e",
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
      "headline": "Dow Jones Futures Jump As Oracle, Korea Try To Ease Market Fears; Look For These Absolute Losers",
      "headlineKo": "오라클과 한국이 시장 공포를 완화하려고 노력함에 따라 다우존스 선물이 급등했습니다. 이 절대적인 패자를 찾으십시오",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a93b730137d0a5ac37d94f5cab3336af9e713697c41f1ca6f43ba4efa2ec9fae",
        "publishedAt": 1795407350,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 ORCL의 사업과 관련된 'Dow Jones Futures Jump As Oracle, Korea Try To Ease Market Fears; Look For These Absolute Losers' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "30de52d1978f44c69aad",
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
      "headline": "After Blockbuster Anthropic IPO, OpenAI Wants AI Rivals To Agree On Development ‘Limits’, While Meta Calls For Controlled Approach",
      "headlineKo": "블록버스터 인류학 IPO 이후 OpenAI는 AI 경쟁자들이 개발 '한계'에 동의하기를 원하는 반면 Meta는 통제된 접근 방식을 요구합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=708b59dc99f525c2b649bb29ce74275e88fabf97233c66e4f7ecdbbca8784a0b",
        "publishedAt": 1795403710,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "블록버스터 인류학 IPO 이후, OpenAI는 AI 라이벌들이 개발 '한계'에 동의하기를 원하고 메타는 통제된 접근 AI 에이전트를 요구합니다. 동향 뉴스 수익 전체 DIA 1.92% SPY 2.80% QQQ 3.63% 추세 CAPR 69.70% QQQ 3.63% UNH 3.19% CA",
        "블록버스터 인류학 IPO 이후 OpenAI는 AI 라이벌들이 개발 '한계'에 동의하기를 원하고 Meta는 통제된 접근 방식을 요구합니다. OpenAI의 수석 과학자는 연구까지 AI 개발에 대한 임계값을 설정하기 위해 업계 전반의 표준을 요구했습니다.",
        "스마트폰 화면에 Gemini 아이콘의 일부가 포함된 Claude 및 ChatGPT 앱 아이콘의 클로즈업."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.92%, 2.80%, 3.63% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.92%, 2.80%, 3.63% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "402a38e13048e694c98f",
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
      "headline": "Amazon Spent $1.82 For Every $1 Of Cash Last Quarter. Can It Keep Going?",
      "headlineKo": "아마존은 지난 분기 현금 1달러당 1.82달러를 지출했습니다. 계속될 수 있을까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=86bf191dbc9e3cd8fdf130a14cc3514225695e213dac4f72c807d83a3bf68dc1",
        "publishedAt": 1795401851,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "아마존은 지난 분기 현금 1달러당 1.82달러를 지출했습니다.",
        "| Trefis Trefis 스토리라인 Amazon은 지난 분기 현금 1달러당 1.82달러를 지출했습니다.",
        "2026년 11월 22일 · 작성자: Trefis Team AMZN YTD +6.9% SPY YTD +1.9% XLY YTD -5.2% AMZN 분석 → 오늘의 큰 이야기: 2027년은 주식에서 2022년과 같은 반복이 될까요?"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1.82, $1, 6.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $1.82, $1, 6.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "89e6dd32da40d663f0ad",
      "schemaVersion": 1,
      "eventType": "ai_investment_change",
      "eventLabel": "AI·데이터센터 투자 변화",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AAPL",
        "AMD",
        "INTC",
        "MU",
        "NVDA",
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
      "headline": "NVDA, INTC, MU, AMD Chip Stocks Rip Higher: Dan Ives Says ‘Bears Feel Validated,’ But There’s No Stopping The AI Wave",
      "headlineKo": "NVDA, INTC, MU, AMD 칩 주식 상승: Dan Ives는 '곰은 검증된 느낌'을 느끼지만 AI 물결을 막을 수는 없다고 말합니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=32fa092f51c1a523b9e77c2c02b19ded9999f423d9aced02dcfb88a7f57c4cca",
        "publishedAt": 1795400645,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "NVDA, INTC, MU, AMD 칩 주식 상승: Dan Ives는 '곰은 검증된 것 같다'고 말했지만 AI Wave AI 에이전트를 막을 수는 없습니다. 동향 뉴스 수익 전체 DIA 1.93% SPY 2.80% QQQ 3.69% 추세 CAPR 69.96% QQQ 3.69% NVDA 8.05% CAT 3.81% LUNR",
        "NVDA, INTC, MU, AMD 칩 주식 상승: Dan Ives는 'Bears가 검증된 것 같다'고 말했지만 멈출 수는 없습니다. AI Wave Ives는 Apple, SpaceX, 하이퍼스케일러 및 사이버 보안 회사가 승자가 될 수 있다고 말했습니다.",
        "Dan Ives가 2026년 10월 8일 뉴욕시 링컨 센터에서 열린 2026 Zeta Live Conference에서 연설하고 있습니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 1.93%, 2.80%, 3.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 1.93%, 2.80%, 3.69% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "57a23e21c352cafc46f4",
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
      "direction": "positive",
      "expectedHorizon": "중기 투자 사이클",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "David Tepper's Micron bet raises a $32 billion question",
      "headlineKo": "David Tepper의 Micron 베팅으로 320억 달러 규모의 문제 제기",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3125f02da06dec2966f4521c9d89a09f7f614e531c314b1d29ae3be8f470546",
        "publishedAt": 1795399380,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 MU의 사업과 관련된 'David Tepper's Micron bet raises a $32 billion question' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "0cba6b2abfa9b39a3094",
      "schemaVersion": 1,
      "eventType": "dilution_warrant",
      "eventLabel": "워런트·신주·희석 가능성",
      "primaryTicker": "ARM",
      "relatedTickers": [
        "ARM",
        "INTC",
        "MRVL",
        "QQQ",
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
      "headline": "Arm vs. Marvell Technology: Which Artificial Intelligence Stock Is a Better Buy for 2027?",
      "headlineKo": "Arm 대 Marvell Technology: 2027년에는 어느 인공지능 주식이 더 나은 매수인가요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc60013d974ce39e98a4a133107f9eb0d543677039bff11cef707c53b2a298a9",
        "publishedAt": 1795392605,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Marvell Technology: 2027년에는 어느 인공지능 주식이 더 나은 매수인가?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 6,910.39 -3.7% -265.44 DJI 48,147.33 -1.9% -949.73 NASDAQ 22,617.73 -5.3% -1,261.47 비트코인 $61,299.00 +0.8% +$459.95 개미 $88.91 -8.",
        "Marvell Technology는 인공지능 클러스터에 필요한 핵심 고속 네트워킹 및 데이터센터 인프라에 중점을 두고 있습니다."
      ],
      "marketInterpretation": [
        "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 14.09%, 11.69%, 99% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "ARM에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
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
        "이번 기사에서 확인된 구체적 수치: 14.09%, 11.69%, 99% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "신규 주식 수·행사가격",
        "조달 자금 사용처",
        "완전희석 주식수와 EPS"
      ]
    },
    {
      "id": "aa58630904fdcb89ebe2",
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
      "headline": "Dow Jones Futures Rise As Oracle, Korea Try To Ease Market Fears; Look For These Absolute Losers",
      "headlineKo": "오라클과 한국이 시장 공포를 완화하려고 노력함에 따라 다우존스 선물 상승; 이 절대적인 패자를 찾으십시오",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8fca4223b45fbd010f1fe93d123065df941789ca3d743ce2f0cd5818e88bddaa",
        "publishedAt": 1795391773,
        "collectedAt": 1795588360.6221712
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
        "이 기사는 ORCL의 사업과 관련된 'Dow Jones Futures Rise As Oracle, Korea Try To Ease Market Fears; Look For These Absolute Losers' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다."
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
      "id": "415e7e0b97e5ac481a1e",
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
      "headline": "Nvidia Just Lost Nearly Half Its Value. A 62-Year-Old With $1 Million in an S&P 500 Index Fund Owns About $50,000 of It Without Buying a Share",
      "headlineKo": "Nvidia는 가치의 거의 절반을 잃었습니다. S&P 500 지수 펀드에 100만 달러를 보유한 62세 노인은 주식을 사지 않고도 약 50,000달러를 소유하고 있습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3a3859fedbb7c2d9b4c32b47931ce20daf5da119d4720939d63a54892444f49d",
        "publishedAt": 1795390980,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Nvidia는 가치의 거의 절반을 잃었습니다.",
        "S&P 500 지수 펀드에 100만 달러를 보유한 62세 노인이 주식을 사지 않고도 약 50,000달러를 소유했습니다. - 연중무휴 Wall St.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,074.60 +1.73% Dow Jones 48,927.80 +1.19% Nasdaq 100 25,796.00 +2.21% Russell 2000 2,631.57 +1.41% S&P 500 7,074.60 +1.73% 다우존스 48,927.80 +1.19% 나스닥 100 25,796.00 +2.21% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1 million, $125.53,, 47.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
        "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
      ],
      "aiInference": [
        "NVDA에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다."
      ],
      "unverified": [
        "기사의 계약 금액·워런트 규모·목표주가·거래 수치는 회사 공시 또는 규제기관 원문으로 재확인해야 합니다."
      ],
      "beginnerExplanation": [
        "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
        "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
      ],
      "whyItMatters": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $1 million, $125.53,, 47.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "6d229f09c7fbdf34967d",
      "schemaVersion": 1,
      "eventType": "regulatory_legal_export",
      "eventLabel": "규제·소송·수출 제한",
      "primaryTicker": "AMD",
      "relatedTickers": [
        "AMD",
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
      "headline": "AMD: 2027 Could Be A Breakout Year For Its Earnings",
      "headlineKo": "AMD: 2027년은 수익에 있어서 획기적인 해가 될 수 있습니다",
      "source": {
        "name": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0472669efa72535ce1af832005860012794d9be2b7ba32906d906698fb05cd8e",
        "publishedAt": 1795390599,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD: 2027년은 수익의 획기적인 해가 될 수 있습니다(NASDAQ:AMD) | Alpha Future Stack 투자 추구 1.01K 팔로워 요약 팔로우 요약 개선에도 불구하고 저는 $617 기본 사례 가치보다 낮은 $424.39에 Advanced Micro Devices에 대한 매수 의견을 유지합니다.",
        "AMD의 3분기 데이터 센터 매출은 85억 5천만 달러로 거의 두 배 증가했습니다. 비GAAP 영업이익은 75% 증가해 매출 성장을 앞질렀습니다.",
        "경영진은 데이터 센터를 통해 2027년에 80% 이상의 매출 성장을 기대하고 있습니다. EPYC, Instinct 및 Helios는 AMD의 AI 인프라 기회를 확대합니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $424.39,, $617, $8.55 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $424.39,, $617, $8.55 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "b6dab7fe04d51c2c2b35",
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
      "headline": "His 401(k) Hit $900,000 Before the Market Crash, Enough to Retire at 64. A 19.8% Slide in His Nasdaq 100 Fund Erased $178,200 Weeks Before His Last Day",
      "headlineKo": "그의 401(k) 주가는 시장 폭락 전 $900,000를 기록했고, 이는 64세에 은퇴하기에 충분합니다. 그의 Nasdaq 100 펀드가 19.8% 하락하여 마지막 날까지 $178,200가 삭제되었습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7299acdca32ef46d70d99c255c57c3612edac9d94b938aca0adada2bd40af3e4",
        "publishedAt": 1795388596,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "그의 401(k)는 시장이 붕괴되기 전에 90만 달러를 기록했는데, 이는 64세에 은퇴하기에 충분한 금액입니다.",
        "그의 나스닥 100 펀드의 19.8% 하락으로 마지막 날 24시간 전 178,200달러가 삭제되었습니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,261.00 +4.41% Dow Jones 49,754.00 +2.90% Nasdaq 100 26,809.00 +6.23% Russell 2000 2,673.97 +3.05% S&P 500 7,261.00 +4.41% 다우존스 49,754.00 +2.90% 나스닥 100 26,809.00 +6.23% 러셀 20"
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: $900,000, 19.8%, $178,200 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $900,000, 19.8%, $178,200 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "a8ae92d3611d3205f1c1",
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
      "headline": "Should You Buy Tesla or SpaceX Stock Before Their Potential Merger?",
      "headlineKo": "잠재적인 합병 전에 Tesla 또는 SpaceX 주식을 구매해야 합니까?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=131443fcf6e684626624398f0a78f7b06dc9a3c135c971f4f4c65b77d8d4d43f",
        "publishedAt": 1795386062,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "잠재적인 합병 전에 Tesla 또는 SpaceX 주식을 구매해야 합니까?",
        "| The Motley Fool 접근성 도움말 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool S&P 500 6,910.39 -3.7% -265.44 DJI 48,147.33 -1.9% -949.73 NASDAQ 22,617.73 -5.3% -1,261.47 비트코인 $61,287.00 +3.4% +$1,992.68 개미 $88.91 -",
        "Tesla 주주들은 프리미엄을 요구하고 SpaceX 주식을 받게 됩니다."
      ],
      "marketInterpretation": [
        "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: 7.69%, 7.64%, $127.79 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 7.69%, 7.64%, $127.79 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "0d898dd29aac9ed25f16",
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
      "headline": "AMD vs. Nvidia Stock After Jensen Huang’s Exit: 1 Trades at Nearly 4x the Other’s Earnings Multiple. Here’s the AI Chip Stock I’d Buy Now.",
      "headlineKo": "Jensen Huang의 퇴장 후 AMD 대 Nvidia 주식: 1은 상대방의 수익 배수의 거의 4배에 거래됩니다. 제가 지금 구매할 AI 칩 주식은 다음과 같습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ab900c76f8004b22c30b664aa6baeb4c931e406cd078c0e87dbbd6f1e6c70a6",
        "publishedAt": 1795382713,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "AMD vs. Nvidia Stock After Jensen Huang’s Exit: 1 Trades at Nearly 4x the Other’s Earnings Multiple. Here’s the AI Chip Stock I’d Buy Now.",
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
      "id": "461ceec6354ec4ebe995",
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
      "headline": "Charlie Bilello Flags the Nasdaq 100’s First Bear Market Since April 2025",
      "headlineKo": "Charlie Bilello는 2025년 4월 이후 Nasdaq 100의 첫 번째 하락장을 표시했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8339cf7d94d109471a793cc2be503ef621a1b3784d5d750468f2bd797bff8bcb",
        "publishedAt": 1795382236,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Charlie Bilello는 2025년 4월 이후 월스트리트 24시간 내내 Nasdaq 100의 첫 번째 약세장을 표시했습니다.",
        "내용으로 건너뛰기 ❚❚ ● 시장 개시 종료 시 S&P 500 7,111.20 +2.25% Dow Jones 49,097.80 +1.55% Nasdaq 100 25,964.20 +2.88% Russell 2000 2,640.62 +1.76% S&P 500 7,111.20 +2.25% 다우존스 49,097.80 +1.55% 나스닥 100 25,964.20 +2.88% 러셀 20",
        "Creative Planning의 최고 시장 전략가인 Charlie Bilello가 하락장 영역에 진입하는 Nasdaq 100에 대해 설명합니다."
      ],
      "marketInterpretation": [
        "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
        "이번 기사에서 확인된 구체적 수치: 2.25%, 1.55%, 2.88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: 2.25%, 1.55%, 2.88% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
      "id": "92cd19066a5dfdbb6e5c",
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
      "direction": "risk",
      "expectedHorizon": "다음 실적까지 확인",
      "impactProbability": "보통",
      "verificationStatus": "needs_confirmation",
      "headline": "15% of parents already cut college savings after Microsoft AI CEO told a mom 'probably not' to bother saving",
      "headlineKo": "Microsoft AI CEO가 엄마에게 저축을 하지 말라고 한 후 부모 중 15%가 이미 대학 학자금 저축을 삭감했습니다.",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12145eae61c35f1dafa84cf88c1611440e7d02ec49cacc19dfb166737a1ce7c1",
        "publishedAt": 1795382100,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "15% of parents already cut college savings after Microsoft AI CEO told a mom 'probably not' to bother saving",
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
      "id": "63e4195b41458c25d741",
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
      "headline": "Ken Fisher and 13 Other Big Funds Bought Arista Networks Last Quarter, While 10 Sold. Who’s Right?",
      "headlineKo": "Ken Fisher와 13개의 다른 대형 펀드가 지난 분기에 Arista Networks를 인수했지만 10개는 매각되었습니다. 누가 맞나요?",
      "source": {
        "name": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87d00281d7b6cf65daf046201da7c2c2963a832a3adb9ec9d6a3d05764cf8748",
        "publishedAt": 1795377024,
        "collectedAt": 1795588360.6221712
      },
      "confirmedFacts": [],
      "reportedClaims": [
        "Ken Fisher와 13개의 다른 대형 펀드가 지난 분기에 Arista Networks를 인수했지만 10개는 매각되었습니다.",
        "| TIKR.com 일반 투자 Ken Fisher 및 기타 13개 대형 펀드가 지난 분기에 Arista Networks를 인수했지만 10개는 매각되었습니다.",
        "Roxanna Maglangit • 6분 읽기 검토자: Michael Douglass 마지막 업데이트 2026년 11월 22일 @Cnv Studio from CnvStudio의 이미지 via Canva 주요 내용 9월에 끝난 분기에 13F를 제출한 460개 대형 펀드 중"
      ],
      "marketInterpretation": [
        "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
        "이번 기사에서 확인된 구체적 수치: $154 million, $140 million, $18.5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
        "이번 기사에서 확인된 구체적 수치: $154 million, $140 million, $18.5 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
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
    }
  ],
  "byTicker": {
    "AMD": [
      "8a425e2c4410bbbafcca",
      "c6936b6b1f27f21d50d7",
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
      "5fb2e5ae1081175bdfae",
      "ece45c107007ce09c442",
      "7d419f006a33477fae38",
      "66bcfd4195c99362577a",
      "8e0bfad2895dba91a11e",
      "045df725dace5193f7b8",
      "65ad161ac4e5179a7fcf",
      "59c9a14cc526fb6c3ad0",
      "5805d2b252fdcd5cf5fc",
      "dae842c378adcc80b609",
      "258e36566a341d9f2809",
      "53635f4b491839185783",
      "b3c827256b33ed709a28",
      "7a7ab83be9900f2f5688",
      "3aaafb3f419f631304b7",
      "94bb50144fd2137f3479",
      "7b3154a9efc8feddedb3",
      "9be710c1e4797942e8f5",
      "6b1b90ba844c28a9e7c3",
      "a64c801b878ec9eefeb3",
      "fe8b04a59418e85cedee",
      "b539ad8de668f311110c",
      "d96019b8170e088b2dc2",
      "9376dab726d5adcbd282",
      "99927f0e9441856d9e8b",
      "3c6b3a3e199c8f376fc8",
      "d8e54c5b4b5540c302f1",
      "7a53d41622a067e9bdc5",
      "84c17a24af683209442f",
      "f7ae7f54ccc44385fdc5",
      "89e6dd32da40d663f0ad",
      "57a23e21c352cafc46f4",
      "6d229f09c7fbdf34967d",
      "0d898dd29aac9ed25f16"
    ],
    "MU": [
      "8a425e2c4410bbbafcca",
      "c6936b6b1f27f21d50d7",
      "4b007adc28088b723d30",
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
      "5fb2e5ae1081175bdfae",
      "ece45c107007ce09c442",
      "7d419f006a33477fae38",
      "66bcfd4195c99362577a",
      "8e0bfad2895dba91a11e",
      "045df725dace5193f7b8",
      "65ad161ac4e5179a7fcf",
      "b84b8975bcc38b40dd0b",
      "59c9a14cc526fb6c3ad0",
      "01d950458894e4c9f79e",
      "5805d2b252fdcd5cf5fc",
      "f7438c31ea9413b9857f",
      "dc0974a9fc4ef193fc14",
      "53635f4b491839185783",
      "7a7ab83be9900f2f5688",
      "3aaafb3f419f631304b7",
      "94bb50144fd2137f3479",
      "27d183defa94c3c09f5a",
      "9be710c1e4797942e8f5",
      "6b1b90ba844c28a9e7c3",
      "879a4eafcf6d74a0bd0d",
      "b539ad8de668f311110c",
      "d96019b8170e088b2dc2",
      "9376dab726d5adcbd282",
      "99927f0e9441856d9e8b",
      "ec9798d8e9c26f1ab018",
      "d8e54c5b4b5540c302f1",
      "7a53d41622a067e9bdc5",
      "84c17a24af683209442f",
      "f7ae7f54ccc44385fdc5",
      "78c804a55eeecbf0f439",
      "89e6dd32da40d663f0ad",
      "57a23e21c352cafc46f4"
    ],
    "NVDA": [
      "8a425e2c4410bbbafcca",
      "c8ecff5233deed33219f",
      "c6936b6b1f27f21d50d7",
      "86148b5ffcf1db979fb0",
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
      "5fb2e5ae1081175bdfae",
      "ece45c107007ce09c442",
      "7d419f006a33477fae38",
      "66bcfd4195c99362577a",
      "0d9927cdcdbc447d0a71",
      "4e3030ee199ee4b1773d",
      "2fc1a2dd35df1cb0c128",
      "cc94730914e7701ad7d4",
      "8e0bfad2895dba91a11e",
      "045df725dace5193f7b8",
      "65ad161ac4e5179a7fcf",
      "b84b8975bcc38b40dd0b",
      "59c9a14cc526fb6c3ad0",
      "b73634e136a69b6c1f17",
      "01ce90514019d720352f",
      "5805d2b252fdcd5cf5fc",
      "3689e8353ac6af3ac159",
      "36bc32c90ebbff96f9db",
      "79e1afceca0d8bda2ef3",
      "f7438c31ea9413b9857f",
      "fbfb86a94dadfdb91258",
      "a47680f282c9bfe19dfa",
      "dc0974a9fc4ef193fc14",
      "258e36566a341d9f2809",
      "0cf240775a02b01bf665",
      "7588fd253560da6fad46",
      "53635f4b491839185783",
      "f126bd93207fbb8f1089",
      "7a7ab83be9900f2f5688",
      "83626e741d11d0e3bca6",
      "3aaafb3f419f631304b7",
      "94bb50144fd2137f3479",
      "7b3154a9efc8feddedb3",
      "c2a508fd884311ff1ad4",
      "9be710c1e4797942e8f5",
      "6b1b90ba844c28a9e7c3",
      "c8848fb53118cf86a74c",
      "e5347336f48f0c45495d",
      "f163edd02e7e8c73e52b",
      "9b6aaca90f0449b539d5",
      "fe8b04a59418e85cedee",
      "894678016b4616eeb0b7",
      "879a4eafcf6d74a0bd0d",
      "b539ad8de668f311110c",
      "d96019b8170e088b2dc2",
      "9376dab726d5adcbd282",
      "99927f0e9441856d9e8b",
      "fa9204d84d33029c83f7",
      "ec9798d8e9c26f1ab018",
      "d8e54c5b4b5540c302f1",
      "7a53d41622a067e9bdc5",
      "84c17a24af683209442f",
      "6f33b408436489a1b7db",
      "f7ae7f54ccc44385fdc5",
      "78c804a55eeecbf0f439",
      "8740d7852754d71b14cc",
      "1e24268c40e7430a5b25",
      "a75549a6b05eae4fdd6a",
      "e8b372acee358d094e42",
      "017cdba32effeba01303",
      "2c128e6fc6e03d9f29bc",
      "89e6dd32da40d663f0ad",
      "57a23e21c352cafc46f4",
      "415e7e0b97e5ac481a1e",
      "0d898dd29aac9ed25f16"
    ],
    "QQQ": [
      "8a425e2c4410bbbafcca",
      "c8ecff5233deed33219f",
      "c6936b6b1f27f21d50d7",
      "4b007adc28088b723d30",
      "cdcd1b8d6057e1f6213c",
      "5079f362dad41ed30fc0",
      "86148b5ffcf1db979fb0",
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
      "5281c3c66340586905f2",
      "0d9927cdcdbc447d0a71",
      "4e3030ee199ee4b1773d",
      "d5e70b8655ac70bdaf7e",
      "2410f0963fc563dabbf8",
      "dfafe82647827b132af0",
      "65ad161ac4e5179a7fcf",
      "f89209c9adcfd7d4f25c",
      "b84b8975bcc38b40dd0b",
      "01d950458894e4c9f79e",
      "01ce90514019d720352f",
      "5805d2b252fdcd5cf5fc",
      "3689e8353ac6af3ac159",
      "36bc32c90ebbff96f9db",
      "f7438c31ea9413b9857f",
      "fbfb86a94dadfdb91258",
      "382dd6eba4711402966a",
      "dc0974a9fc4ef193fc14",
      "b664cb7956e70f31f99a",
      "2a8147bf955807ef5ae4",
      "0cf240775a02b01bf665",
      "7588fd253560da6fad46",
      "f126bd93207fbb8f1089",
      "c6dd7b9fdf46c98b8ed7",
      "91f52e9aefe27ba5e0a7",
      "d9a01f9eb6e1954d19b5",
      "c5e76d35d9d9cdc4eb83",
      "c2a508fd884311ff1ad4",
      "9bcc4e06a8656e809a5e",
      "2b067d1baaa3999e5c58",
      "27d183defa94c3c09f5a",
      "5e614020c6c36a2fa3f8",
      "e5347336f48f0c45495d",
      "36046aa8fdd7e1e319ae",
      "bca01a77a9ab1dd48edb",
      "f163edd02e7e8c73e52b",
      "9b6aaca90f0449b539d5",
      "fe8b04a59418e85cedee",
      "894678016b4616eeb0b7",
      "879a4eafcf6d74a0bd0d",
      "551b4447a4b7dbe679af",
      "ec9798d8e9c26f1ab018",
      "b86ace5436a1359cac97",
      "6f33b408436489a1b7db",
      "041f67081ee153c0034b",
      "d092df254f43be7b55e7",
      "08ac87e594bcecefe3c7",
      "20da6ec2196b96c253d5",
      "7e69ee83c6475029d74d",
      "8740d7852754d71b14cc",
      "1e24268c40e7430a5b25",
      "e75ee1703502f2e952da",
      "aa5af971146e7ca6b642",
      "6c671ad2a4bf126ae143",
      "c16625aefa30e6890655",
      "a75549a6b05eae4fdd6a",
      "017cdba32effeba01303",
      "2c128e6fc6e03d9f29bc",
      "30de52d1978f44c69aad",
      "89e6dd32da40d663f0ad",
      "0cba6b2abfa9b39a3094",
      "415e7e0b97e5ac481a1e",
      "6d229f09c7fbdf34967d",
      "b6dab7fe04d51c2c2b35",
      "a8ae92d3611d3205f1c1",
      "461ceec6354ec4ebe995"
    ],
    "SPY": [
      "8a425e2c4410bbbafcca",
      "c8ecff5233deed33219f",
      "c6936b6b1f27f21d50d7",
      "4b007adc28088b723d30",
      "cdcd1b8d6057e1f6213c",
      "5079f362dad41ed30fc0",
      "86148b5ffcf1db979fb0",
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
      "5281c3c66340586905f2",
      "0d9927cdcdbc447d0a71",
      "4e3030ee199ee4b1773d",
      "d5e70b8655ac70bdaf7e",
      "2410f0963fc563dabbf8",
      "dfafe82647827b132af0",
      "2fc1a2dd35df1cb0c128",
      "65ad161ac4e5179a7fcf",
      "f89209c9adcfd7d4f25c",
      "b84b8975bcc38b40dd0b",
      "5805d2b252fdcd5cf5fc",
      "3689e8353ac6af3ac159",
      "36bc32c90ebbff96f9db",
      "79e1afceca0d8bda2ef3",
      "f7438c31ea9413b9857f",
      "fbfb86a94dadfdb91258",
      "382dd6eba4711402966a",
      "dc0974a9fc4ef193fc14",
      "b664cb7956e70f31f99a",
      "2a8147bf955807ef5ae4",
      "0cf240775a02b01bf665",
      "7588fd253560da6fad46",
      "f126bd93207fbb8f1089",
      "c6dd7b9fdf46c98b8ed7",
      "83626e741d11d0e3bca6",
      "d9a01f9eb6e1954d19b5",
      "c5e76d35d9d9cdc4eb83",
      "c2a508fd884311ff1ad4",
      "9bcc4e06a8656e809a5e",
      "2b067d1baaa3999e5c58",
      "27d183defa94c3c09f5a",
      "5e614020c6c36a2fa3f8",
      "e5347336f48f0c45495d",
      "36046aa8fdd7e1e319ae",
      "bca01a77a9ab1dd48edb",
      "f163edd02e7e8c73e52b",
      "9b6aaca90f0449b539d5",
      "fe8b04a59418e85cedee",
      "894678016b4616eeb0b7",
      "879a4eafcf6d74a0bd0d",
      "551b4447a4b7dbe679af",
      "ec9798d8e9c26f1ab018",
      "b86ace5436a1359cac97",
      "7a53d41622a067e9bdc5",
      "6f33b408436489a1b7db",
      "1ce85bd0284c9fd6d9dc",
      "041f67081ee153c0034b",
      "d092df254f43be7b55e7",
      "08ac87e594bcecefe3c7",
      "20da6ec2196b96c253d5",
      "7e69ee83c6475029d74d",
      "8740d7852754d71b14cc",
      "1e24268c40e7430a5b25",
      "e75ee1703502f2e952da",
      "aa5af971146e7ca6b642",
      "6c671ad2a4bf126ae143",
      "a75549a6b05eae4fdd6a",
      "017cdba32effeba01303",
      "2c128e6fc6e03d9f29bc",
      "30de52d1978f44c69aad",
      "402a38e13048e694c98f",
      "89e6dd32da40d663f0ad",
      "0cba6b2abfa9b39a3094",
      "415e7e0b97e5ac481a1e",
      "b6dab7fe04d51c2c2b35",
      "a8ae92d3611d3205f1c1",
      "461ceec6354ec4ebe995"
    ],
    "COHR": [
      "c6936b6b1f27f21d50d7",
      "5281c3c66340586905f2",
      "df9791860ed9b7f04fed",
      "53635f4b491839185783",
      "9b6aaca90f0449b539d5"
    ],
    "ETN": [
      "283ecd5e02cebbac8366",
      "5945368e0bf70137cd2a",
      "d6ceb28c85bdd18d8648",
      "befb07a36457193b9400"
    ],
    "BE": [
      "4b007adc28088b723d30",
      "33baba6afac7f59fcfc0"
    ],
    "AMZN": [
      "78f8793ee3bd584a5b64",
      "6b1cb5351e37b3de5052",
      "38fab0c8ec4be3e5a1ba",
      "94e15d14ee61c4a9c026",
      "b4c898a7952be92e2290",
      "df98a070b75d395bf5c1",
      "e0a0f9d3059e0b07176f",
      "8e0bfad2895dba91a11e",
      "d039498fab611b522cc1",
      "906d75b18c453b33c5f1",
      "79e1afceca0d8bda2ef3",
      "f7438c31ea9413b9857f",
      "fbfb86a94dadfdb91258",
      "5c7a833f322f546dc27a",
      "b306ef035a64a4793fa2",
      "d7d9f0fa09c5936a41e6",
      "d8e54c5b4b5540c302f1",
      "84c17a24af683209442f",
      "78c804a55eeecbf0f439",
      "402a38e13048e694c98f"
    ],
    "TSLA": [
      "cdcd1b8d6057e1f6213c",
      "86148b5ffcf1db979fb0",
      "bf42fdc6ca61a8787848",
      "7316d6024f002f6df99d",
      "b84b8975bcc38b40dd0b",
      "36bc32c90ebbff96f9db",
      "9bcc4e06a8656e809a5e",
      "fa9204d84d33029c83f7",
      "c7131a5b8531616f3a53",
      "d19a65362d206338131a",
      "a75549a6b05eae4fdd6a",
      "017cdba32effeba01303",
      "f1c244eb0dd00a7a7184",
      "a8ae92d3611d3205f1c1"
    ],
    "GOOGL": [
      "5079f362dad41ed30fc0",
      "1a4271ba370b93ec880b",
      "ab067f800c7659effd5f",
      "972b1c00f72dce2f5f62",
      "ece45c107007ce09c442",
      "66bcfd4195c99362577a",
      "8e0bfad2895dba91a11e",
      "d039498fab611b522cc1",
      "a47680f282c9bfe19dfa",
      "258e36566a341d9f2809",
      "120f9e02bea58080acc2",
      "94bb50144fd2137f3479",
      "b86ace5436a1359cac97",
      "591d61e3518e85fc8928",
      "f7ae7f54ccc44385fdc5",
      "78c804a55eeecbf0f439",
      "ce4c93f64f63d27a546f",
      "30de52d1978f44c69aad"
    ],
    "META": [
      "5079f362dad41ed30fc0",
      "699ccb9f9b1fff3dd271",
      "9cc8350699de1bc6b220",
      "231c09090f3729b2ebdd",
      "5878ffe28716d861c04a",
      "8e0bfad2895dba91a11e",
      "5805d2b252fdcd5cf5fc",
      "a7a54099d51f21b930aa",
      "16cf859ad5b8af236878",
      "dae842c378adcc80b609",
      "b3c827256b33ed709a28",
      "c8848fb53118cf86a74c",
      "bf85ff427776a207a3d0",
      "7bd6fcb5e235b88e1dd4",
      "30de52d1978f44c69aad"
    ],
    "ORCL": [
      "fc7c5857e56283884b30",
      "1a4271ba370b93ec880b",
      "e3d1ae9d2342830efc9f",
      "38fab0c8ec4be3e5a1ba",
      "5edd34e13ff13b6b0049",
      "fdcbd267b8b3d534a569",
      "05aa54cc08dcc8d99f21",
      "b4c898a7952be92e2290",
      "e0a0f9d3059e0b07176f",
      "5fb2e5ae1081175bdfae",
      "ece45c107007ce09c442",
      "7d419f006a33477fae38",
      "66bcfd4195c99362577a",
      "8e0bfad2895dba91a11e",
      "045df725dace5193f7b8",
      "59c9a14cc526fb6c3ad0",
      "53635f4b491839185783",
      "7a7ab83be9900f2f5688",
      "3aaafb3f419f631304b7",
      "94bb50144fd2137f3479",
      "9be710c1e4797942e8f5",
      "5e614020c6c36a2fa3f8",
      "6b1b90ba844c28a9e7c3",
      "668ba6d7ec998a31edb7",
      "b539ad8de668f311110c",
      "d96019b8170e088b2dc2",
      "9376dab726d5adcbd282",
      "99927f0e9441856d9e8b",
      "d8e54c5b4b5540c302f1",
      "7a53d41622a067e9bdc5",
      "84c17a24af683209442f",
      "f7ae7f54ccc44385fdc5",
      "2c128e6fc6e03d9f29bc",
      "7d959f9650a817697d3e",
      "57a23e21c352cafc46f4",
      "aa58630904fdcb89ebe2"
    ],
    "INTC": [
      "93e73013202527551226",
      "7acc1b767d2d9dcd4f3c",
      "708befe00877a48a91a9",
      "ece45c107007ce09c442",
      "7d419f006a33477fae38",
      "cc94730914e7701ad7d4",
      "b3c827256b33ed709a28",
      "d9a01f9eb6e1954d19b5",
      "a64c801b878ec9eefeb3",
      "fe8b04a59418e85cedee",
      "9376dab726d5adcbd282",
      "99927f0e9441856d9e8b",
      "eeeb005d6c6ba2996b4b",
      "89e6dd32da40d663f0ad",
      "0cba6b2abfa9b39a3094"
    ],
    "MSFT": [
      "f26412db2ec88f2d7c2c",
      "1a2bd1d25cf29604c24c",
      "5edd34e13ff13b6b0049",
      "fdcbd267b8b3d534a569",
      "f3a0ac585999c04011e8",
      "66bcfd4195c99362577a",
      "d039498fab611b522cc1",
      "64974218a8e588d010cf",
      "d77277aa35ae7201979e",
      "c0b33155cb8f6fa67df7",
      "01cc0989d6cddb27151d",
      "3958b1e58e1e1eee448a",
      "7a7ab83be9900f2f5688",
      "c2a508fd884311ff1ad4",
      "2b067d1baaa3999e5c58",
      "ae628dee754b9c66d82c",
      "551b4447a4b7dbe679af",
      "36ab406a23d5e0831321",
      "d092df254f43be7b55e7",
      "c93328f9581755968b3b",
      "92cd19066a5dfdbb6e5c"
    ],
    "MRVL": [
      "34d6ae1711a6c04830a5",
      "bf1d40076816dd676dd5",
      "9cd0c365566d5b1b72f5",
      "6658530ab24f0e21a2ff",
      "d5e70b8655ac70bdaf7e",
      "2a8147bf955807ef5ae4",
      "08ac87e594bcecefe3c7",
      "1e24268c40e7430a5b25",
      "d1a15b14458be1fc3d5b",
      "0cba6b2abfa9b39a3094"
    ],
    "AMAT": [
      "6510334490ba54828b57",
      "7acc1b767d2d9dcd4f3c",
      "530542844480e3633c31",
      "2a1982e4fbc4144f90a5",
      "6f33b408436489a1b7db"
    ],
    "SNDK": [
      "e07b80ee5ffb84b2ed82",
      "42cc565dc698806ae471",
      "1127afa0f0ff8dd65973",
      "9b8c094d96125a59be06",
      "f8b4b5162bf77c1e276e",
      "b664cb7956e70f31f99a",
      "91f52e9aefe27ba5e0a7",
      "c8848fb53118cf86a74c",
      "f163edd02e7e8c73e52b",
      "ec9798d8e9c26f1ab018",
      "1ce85bd0284c9fd6d9dc"
    ],
    "PLTR": [
      "0cbeee52962c17aa1ecc",
      "ee4b1d3a479054211722",
      "5fb2e5ae1081175bdfae",
      "4e3030ee199ee4b1773d",
      "01ce90514019d720352f",
      "87bed95771709ef49cf6",
      "01cc0989d6cddb27151d",
      "c5e76d35d9d9cdc4eb83"
    ],
    "CRM": [
      "75128d70beba69e0a6a3",
      "8102b30d056516346aa6",
      "7a81b5a009c1e8dcd96a",
      "f6bc0ac8033ab49cc92f",
      "01cc0989d6cddb27151d",
      "80dedbcbf595e7ec0b88",
      "9be710c1e4797942e8f5",
      "2160cdfcaed1ecadd8d0",
      "dc2f522f93383d2d4cc1",
      "72e72ef787d416ca7a5c"
    ],
    "GEV": [
      "5a07d9eb952f0e5cb162",
      "f5b3a9de6592ba286278",
      "0d6f6c6686a61f9a4361"
    ],
    "LRCX": [
      "09579a09b134c01452eb",
      "a74098e5f26a97a12ecd",
      "8740d7852754d71b14cc"
    ],
    "VST": [
      "6b7bf22706b6acfd8502",
      "cf2517d2cbd0f8a6fc58",
      "83626e741d11d0e3bca6"
    ],
    "QCOM": [
      "c13ec16edfa36a2da2f3",
      "1616e49e5bc54f0e1cdd",
      "95e1041eb1b66359e0bd",
      "7d419f006a33477fae38",
      "aba2a2034d7ae0ec17e4",
      "e75ee1703502f2e952da"
    ],
    "TSM": [
      "4107d2d6a83edcdd3a57",
      "cc94730914e7701ad7d4",
      "59c9a14cc526fb6c3ad0",
      "b73634e136a69b6c1f17",
      "f126bd93207fbb8f1089",
      "7a7ab83be9900f2f5688",
      "3aaafb3f419f631304b7",
      "fe8b04a59418e85cedee",
      "20da6ec2196b96c253d5"
    ],
    "AAPL": [
      "5b64be3f41aa7c8a9eb5",
      "ece45c107007ce09c442",
      "0d9927cdcdbc447d0a71",
      "b5421b18d4d4f71ba058",
      "d9a01f9eb6e1954d19b5",
      "e5347336f48f0c45495d",
      "bca01a77a9ab1dd48edb",
      "fa9204d84d33029c83f7",
      "041f67081ee153c0034b",
      "d092df254f43be7b55e7",
      "6c671ad2a4bf126ae143",
      "89e6dd32da40d663f0ad"
    ],
    "AVGO": [
      "446c2a90ec54e2666501",
      "258e36566a341d9f2809",
      "d9a01f9eb6e1954d19b5",
      "99927f0e9441856d9e8b",
      "f7ae7f54ccc44385fdc5"
    ],
    "EME": [
      "70a9cb338e1aff368593"
    ],
    "LITE": [
      "5281c3c66340586905f2",
      "d5e70b8655ac70bdaf7e",
      "7588fd253560da6fad46",
      "9b6aaca90f0449b539d5"
    ],
    "VRT": [
      "2fc1a2dd35df1cb0c128",
      "bc41669dbc0121fc8545",
      "a9857e7b54e3a673ce79",
      "d6ceb28c85bdd18d8648",
      "aace602a57c771072a6e"
    ],
    "STX": [
      "6a4ae29bdf754cca3188",
      "c6ab791e6f59830211d5",
      "27c63bb27c33398645d2",
      "861190e83733ea231a4d",
      "6b1b90ba844c28a9e7c3",
      "ec9798d8e9c26f1ab018"
    ],
    "KLAC": [
      "2aa8994338f594a2f8b5",
      "bf3fad2a0baf59b3d492"
    ],
    "ASML": [
      "382dd6eba4711402966a",
      "20da6ec2196b96c253d5",
      "c16625aefa30e6890655"
    ],
    "ANET": [
      "b3c827256b33ed709a28",
      "63e4195b41458c25d741"
    ],
    "ARM": [
      "c6dd7b9fdf46c98b8ed7",
      "eeeb005d6c6ba2996b4b",
      "7f84b267b626492f4c0e",
      "4d2d8fa4269ae2d7ffc4",
      "0cba6b2abfa9b39a3094"
    ],
    "PWR": [
      "74e6e9414c7e6705386e"
    ],
    "CEG": [
      "422bb5718559e41265dc"
    ],
    "HUBB": [
      "6d0b508c057b08764d7d"
    ]
  }
};
