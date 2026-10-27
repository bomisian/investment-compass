// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1793128108.4004188,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793054116,
      "signal": "중립·확인 대기",
      "netScore": -0.42,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.35,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.7,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -0.7,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "134174a396b2d174bf08",
          "headline": "S&P 500, Nasdaq, Dow는 인류의 IPO 제출로 AI 열정이 다시 불붙으면서 한 주 상승 시작합니다 — MSFT, AAPL, CART, VZ In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793054116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec15ce234b3a6fa4a707d47de37778686a8c8b739674bb3c1618f1353725d7ee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5dfb13efc4e940739c2a",
          "headline": "기술 수익은 이번 주 시장의 가장 큰 이야기입니다. Microsoft, Amazon, Intel, SanDisk 및 Alphabet이 주식 시장의 다음 움직임을 주도할 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793049314,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ba45970045d616ae03d3cc67e7f9f6059a35dc49bdd2be6aa520a0bc20af7bf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8e638e3e331c92115673",
          "headline": "정보 기술(IT) 탄력성 오케스트레이션 시장(2026-2030년) | Microsoft, IBM, Broadcom 및 ServiceNow Scale AI 및 하이브리드 클라우드를 통해 CAGR 14.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793025660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cfba389128f954ca6adb426f83ff3a29bb5fbc790c04831aac1f2375937be56a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cc84d02d628a816d97d2",
          "headline": "마이크로소프트 대. Oracle: 위험 프로필이 매우 다른 대규모 백로그 행운",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793018716,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06bb901fdedfd90f28bd8c955340f5e3bfed489ccc27bbf9874dfb208ae82cae",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793121300,
      "signal": "주의 강화",
      "netScore": -3.72,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.87,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.75,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": -0.35,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.27,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.4,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "c4e698970133db9942c8",
          "headline": "알파벳은 IPO 이후 훨씬 더 큰 인류 주주가 될 예정입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793121300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bf6ea8f3bd7f6835856d65a5c08a9d5f3e0cfab8d726456c45831c32229c2e55",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "623a3e8ef7487de487a5",
          "headline": "Google TPU가 Oracle Cloud에 도입되고 NVIDIA 거래가 확대되면서 Oracle은 5% 상승합니다. Amazon은 더 높이, Microsoft는 물을 밟습니다",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793120543,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29dbc0190a0178f3062a1b2d470102d078e1059099fc920bd1e9c054722ef0e2",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ad4d734c20be0c3a8715",
          "headline": "YouTube의 기본 멀티모달 라이브러리 및 AI 검색 개요를 통해 알파벳을 필수 복합 도구로 만드는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793119528,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b4038dd6c203dbce76ec3aba75bea34f9b4d1accbe1a010b3e8459b18cdd4429",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c2679528ff7b120bc332",
          "headline": "Applied Materials가 이중 지분으로 전환함에 따라 네덜란드 칩 회사 Besi의 주가가 급등했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793104575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33ced5da9cc7ad273228ac4ba9aa0d136e83d4237871f220ffa9e14f0e59913f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "134174a396b2d174bf08",
          "headline": "S&P 500, Nasdaq, Dow는 인류의 IPO 제출로 AI 열정이 다시 불붙으면서 한 주 상승 시작합니다 — MSFT, AAPL, CART, VZ In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793054116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec15ce234b3a6fa4a707d47de37778686a8c8b739674bb3c1618f1353725d7ee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a65d8bd446192dd99042",
          "headline": "Microsoft, Alphanet, Amazon 수익이 연준 금리 결정을 충족함: 이번 주에 주목해야 할 3가지 차트",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793014621,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2428800a15acad8a565899ef53f405d9bae8cc891dfdb5970c34db2afcbfa9a0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "37236e9ed985eb61d434",
          "headline": "Microsoft, Alphabet 및 Amazon은 S&P 500의 약 15%를 구성합니다. 3개 모두 2일 이내에 수익을 보고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792974421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aad6b788ff6c0fe9dd2ba31eb17a96f3d38e5244ee29ac84dfc533f0d4d06601",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4307b66baec7b5f8e2dc",
          "headline": "Constellation Energy, Google에 890MW의 전력 공급 약속: “에너지 수요 증가”",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792935117,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d5067116906b5db88cc2004a27199827c2d5893542ad3e82cd21cf8ef82d849",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793120543,
      "signal": "주의 강화",
      "netScore": -2.17,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.35,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.05,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": -0.35,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.52,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "623a3e8ef7487de487a5",
          "headline": "Google TPU가 Oracle Cloud에 도입되고 NVIDIA 거래가 확대되면서 Oracle은 5% 상승합니다. Amazon은 더 높이, Microsoft는 물을 밟습니다",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793120543,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29dbc0190a0178f3062a1b2d470102d078e1059099fc920bd1e9c054722ef0e2",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "134174a396b2d174bf08",
          "headline": "S&P 500, Nasdaq, Dow는 인류의 IPO 제출로 AI 열정이 다시 불붙으면서 한 주 상승 시작합니다 — MSFT, AAPL, CART, VZ In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793054116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec15ce234b3a6fa4a707d47de37778686a8c8b739674bb3c1618f1353725d7ee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5dfb13efc4e940739c2a",
          "headline": "기술 수익은 이번 주 시장의 가장 큰 이야기입니다. Microsoft, Amazon, Intel, SanDisk 및 Alphabet이 주식 시장의 다음 움직임을 주도할 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793049314,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ba45970045d616ae03d3cc67e7f9f6059a35dc49bdd2be6aa520a0bc20af7bf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a65d8bd446192dd99042",
          "headline": "Microsoft, Alphanet, Amazon 수익이 연준 금리 결정을 충족함: 이번 주에 주목해야 할 3가지 차트",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793014621,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2428800a15acad8a565899ef53f405d9bae8cc891dfdb5970c34db2afcbfa9a0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "37236e9ed985eb61d434",
          "headline": "Microsoft, Alphabet 및 Amazon은 S&P 500의 약 15%를 구성합니다. 3개 모두 2일 이내에 수익을 보고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792974421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aad6b788ff6c0fe9dd2ba31eb17a96f3d38e5244ee29ac84dfc533f0d4d06601",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "569d2be2c6802fcc267d",
          "headline": "Generac Q3 수익 미리보기: Amazon AI 거래가 큰 성과를 낼 수 있을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792939353,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28a2786c4aae985daaadede27a6f5e004875d7c3756e2ec2760009aa958aa1f7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793120760,
      "signal": "주의 강화",
      "netScore": -5.94,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.62,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -5,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -5,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "839638d06b5258d2d16c",
          "headline": "AMD, Nvidia, Broadcom과의 Meta 거래: 순환 자금 조달이 위험합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793120760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35d438f71fa2f3f9ec3898bf4045b2b9a3cec9794dd861ee5bc7b49cd4a5d01b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9a3787c4f406c893db89",
          "headline": "확장된 Meta AI 인프라 거래와 광범위한 칩 랠리로 AMD 주가 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793119457,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c183bd39ed167d835da2c00b86089497740a2b65a2320004b926a989b2490495",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c2679528ff7b120bc332",
          "headline": "Applied Materials가 이중 지분으로 전환함에 따라 네덜란드 칩 회사 Besi의 주가가 급등했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793104575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33ced5da9cc7ad273228ac4ba9aa0d136e83d4237871f220ffa9e14f0e59913f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4bcda02334d58fcc7d70",
          "headline": "Nvidia는 Muse 파트너십을 통해 Meta에 30억 달러를 투자합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793092981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e06d8ceed6c42fef24ca5ecff6163453ab4268c7b6536ed12b0d2e8249ddc6f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2161a0fadbf4318bb72b",
          "headline": "Nvidia는 Meta의 주식 공모에서 30억 달러 규모의 주식을 인수하여 Muse AI 플랫폼 개선에 도움이 될 것입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793087013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16e66e1a8afacf9d3265d234b892d414847b4e626199a66e08e837f56366fa48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b27b93ee4897ec5aa818",
          "headline": "Nvidia, 더 큰 AI 파트너십의 일환으로 Meta 주식 제공에 30억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793083571,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1331c1055280919344792ba62a782cf1b575142953af07c557b7c352843ea2bc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fae16ca205ab267e07df",
          "headline": "NVIDIA와 Meta, 강력한 성장 속에 Muse 및 Muse 제품군 모델에 대한 협력 확대",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793080320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b794487ca73043ed8f965d0dd9264fd23a2dd5b352b0a5eee33cf4cc291e744",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "e72e492461339985f8cd",
          "headline": "메타, 시리즈 A 의무 전환 우선주를 대표하는 예탁주 공모 가격과 선도판매 계약과 관련된 클래스 A 보통주 공모 가격 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793077260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=629d182dbb00c951900e611061b3010e11631915ae083d4abf478f923145caf0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0a99632a0cd8f3944ae2",
          "headline": "메타 주식은 950억 달러 규모의 자본 조달 계획에서 하락합니다. 분석가들은 긍정적인 견해를 제시하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793040917,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b83595583bea417687a5ade0825e29ae97222bbdb56e2deb0b70c533925beb27",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "576eb027a1233d147d94",
          "headline": "업데이트: Meta는 350억 달러 규모의 우선주를 출시합니다. 잠재적인 600억 달러 ATM 주식 제공 계획",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793017322,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12100600faf5d24b1834d8d1ac4fdda930da575f6bd66bb09c7e3e36afd22c3c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1a7038078f38cfcf4b03",
          "headline": "Meta, 350억 달러 규모의 주식 공모 개시, 2027년에 또 다른 600억 달러 프로그램 계획: Nvidia, AMD, Broadcom Eye 최대 50억 달러 투자",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793017058,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=860ce716d2ea0a1bf05134e0bd0074b39b55e27ec7afb515f86874ef571d7d20",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b53fcd4201ea84116ffc",
          "headline": "Meta는 최대 950억 달러의 주식을 제공할 예정입니다. 대규모 AI 추진이 의미하는 바",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793017020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6840fd691089b0d368710bd7413e27e1b76cf8cdfc6b0038411fb3d27b4e072b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793106154,
      "signal": "주의 강화",
      "netScore": -5.74,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.7,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.35,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.92,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "cd69bad1d6730c8a0acf",
          "headline": "Qualcomm, 휴대폰 매출 20% 감소에 글로벌 정리해고 약속: \"강력한 성능 문화\"",
          "eventLabel": "실적 발표",
          "publishedAt": 1793106154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8ae991384e21d1f8e51190e8ecf8b718c90a0cf65789eb9d8ce2bd6dadd3e520",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "782741833fe3ca0b7b14",
          "headline": "Apple vs. Taiwan Semiconductor: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793073602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb24a3a7512e1ce06571eef5a093573db91ecc49f7feeb81e80f5dd4bfd5d2f2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "134174a396b2d174bf08",
          "headline": "S&P 500, Nasdaq, Dow는 인류의 IPO 제출로 AI 열정이 다시 불붙으면서 한 주 상승 시작합니다 — MSFT, AAPL, CART, VZ In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793054116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec15ce234b3a6fa4a707d47de37778686a8c8b739674bb3c1618f1353725d7ee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5acb0cec88310bb4f6e0",
          "headline": "Apple의 iPhone Duo 배송 시간이 1월까지 연장됩니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793035800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d7f9ce0abff853450288e28112d7c2ddb50a5d1055ca51b54a63454e422a7d3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "856e81a1918813db26d5",
          "headline": "Apple, 출시 수요에 따라 iPhone Duo 생산 주문 30% 증가한 것으로 알려짐",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793015298,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cdcf3883f3d11c0d8393b66cbfa55462f8f4e099894966eb9dd0f243c0a8158b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "679ba9f72a545d53b9eb",
          "headline": "Stocktwits Tech Watch: 더 많은 수익 창출, Apple의 터치스크린 MacBook 및 Intel 결과에 주목",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793004446,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e0f150fc9ea54a8bafb84405cd51ce4b86953b3206e67b3b4da9258a8aa238d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1928c2b53677f452d378",
          "headline": "경쟁사보다 Apple 주식을 선택해야 합니까?",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1792998712,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb3fda83e9ae9c454f7ac448a438cce071c75d811ba185af8b793d0365e9617a",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "00f64ca151d0fe9b42da",
          "headline": "애플, 폴더블 데뷔에 대한 수요 강세 속에서 더 많은 아이폰 듀오 공급 모색",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792973405,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ddbb69eed64bf00253e6dafcbd9b3265e2362cd4538dc04cd5ec99df29e8570",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793118788,
      "signal": "주의 강화",
      "netScore": -9.72,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.52,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -3.15,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.32,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.02,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "3973ce90de8a5a59fa23",
          "headline": "Tesla의 이익은 43% 하락했고 주가는 유지되었습니다. 이유는 다음과 같습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793118788,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8e51daff6781ac18b6ea0cd84265705f14b799fc54f162ec4ee2144535e4580",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5fd4f63ae49d44bdf80b",
          "headline": "움직여, Tesla: 이 로봇공학 주식이 더 나은 매수입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793041500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=afddad12121b24a8f224fd5eef8d377b98866139f138125db917302e0655fe7d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1a7038078f38cfcf4b03",
          "headline": "Meta, 350억 달러 규모의 주식 공모 개시, 2027년에 또 다른 600억 달러 프로그램 계획: Nvidia, AMD, Broadcom Eye 최대 50억 달러 투자",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793017058,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=860ce716d2ea0a1bf05134e0bd0074b39b55e27ec7afb515f86874ef571d7d20",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3426fb562e5ad78a29bc",
          "headline": "GEV, D, CMS, AEP 및 PWR, 이번 주 수익 보고 – 투자자들이 보고 있는 내용 살펴보기",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793015755,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e1fd7f606da97c2f6c4696fb7a6f6ec7d95fc9d0e383704cb05d6a05ec536b8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a65d8bd446192dd99042",
          "headline": "Microsoft, Alphanet, Amazon 수익이 연준 금리 결정을 충족함: 이번 주에 주목해야 할 3가지 차트",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793014621,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2428800a15acad8a565899ef53f405d9bae8cc891dfdb5970c34db2afcbfa9a0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "15c3ea3f4d176749ff7e",
          "headline": "Stocktwits M&A 시계: CRM, BRZE, TW, LEU 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792999531,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1cbea94e10a043fe785803552b575c7404c001198ed5028d57665fd6bf6e0af",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a16915a720c170a4ae05",
          "headline": "테슬라 주가는 지난 1년 동안 17% 하락했습니다. 지금 구매하시겠습니까, 아니면 합병 조건을 기다리시겠습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792943780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3c89122110add7d74f1affeb876cba3598762726351c4836ae6f87c9014f312",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793120543,
      "signal": "우호적 변화",
      "netScore": 4.4,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.8,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": -0.35,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 1.22,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "623a3e8ef7487de487a5",
          "headline": "Google TPU가 Oracle Cloud에 도입되고 NVIDIA 거래가 확대되면서 Oracle은 5% 상승합니다. Amazon은 더 높이, Microsoft는 물을 밟습니다",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793120543,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29dbc0190a0178f3062a1b2d470102d078e1059099fc920bd1e9c054722ef0e2",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20b38a524813b769efc3",
          "headline": "SambaNova와 Oracle, Oracle Cloud 인프라에 고성능 추론을 제공하기 위해 협력",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793118600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30513ba16d1ec515313bdfe753613e459065d12ed801e84c364f5a6960a9d3c2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "5f58555bf679b2c2eeec",
          "headline": "Intel과 Oracle은 Oracle Cloud 인프라에서 엔터프라이즈 및 에이전트 AI를 지원하기 위해 협력을 확대할 계획입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793116800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=280fc49edd8edfea8591e9552c3827d83e2c8a6eb7172450c7ef9165bbb1b312",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "abdafadef244b7f1dccf",
          "headline": "오라클 주식은 지난 투자자의 날 이후 60% 하락했습니다. 수요일 이전에 매수인가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793090582,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf17e68b42722457b7e1e6df14a5718c6d60f2218a391663dcf043aa6ef5061e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cc84d02d628a816d97d2",
          "headline": "마이크로소프트 대. Oracle: 위험 프로필이 매우 다른 대규모 백로그 행운",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793018716,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06bb901fdedfd90f28bd8c955340f5e3bfed489ccc27bbf9874dfb208ae82cae",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793029802,
      "signal": "주의 강화",
      "netScore": -3.14,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.87,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.75,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.87,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "a6b9bfec32e21e796610",
          "headline": "Salesforce 대 국제 비즈니스 기계: 2026년에는 어떤 기술 주식이 더 나은 구매입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793029802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ead45b7aca7ea963e8657b1c206711392649befbeed1aed77270a11f4a0bc2fa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "15c3ea3f4d176749ff7e",
          "headline": "Stocktwits M&A 시계: CRM, BRZE, TW, LEU 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792999531,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1cbea94e10a043fe785803552b575c7404c001198ed5028d57665fd6bf6e0af",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1792932000,
      "signal": "중립·확인 대기",
      "netScore": 1.4,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.7,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.35,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "b1fd73af45415ec2a420",
          "headline": "Palantir에 대한 10,000달러 투자의 10년 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792932000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b7473520102c4f2e1b464e633f28967a526e4ca1e0be27f28f465fa9a435d4b6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793123218,
      "signal": "우호적 변화",
      "netScore": 8.21,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.97,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.45,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": -0.35,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.45,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 5,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "8837d076b34ceb6b1eea",
          "headline": "보고된 50억 달러 규모의 원자력 자금 조달 제안에 대한 CEG 주가 상승 – 일부 주요 하이라이트 살펴보기",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793123218,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c4a1bafe408c87eded3e6c8a843a480101bc9698eddf96a358da21a0fa59c68",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "839638d06b5258d2d16c",
          "headline": "AMD, Nvidia, Broadcom과의 Meta 거래: 순환 자금 조달이 위험합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793120760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35d438f71fa2f3f9ec3898bf4045b2b9a3cec9794dd861ee5bc7b49cd4a5d01b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "623a3e8ef7487de487a5",
          "headline": "Google TPU가 Oracle Cloud에 도입되고 NVIDIA 거래가 확대되면서 Oracle은 5% 상승합니다. Amazon은 더 높이, Microsoft는 물을 밟습니다",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1793120543,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29dbc0190a0178f3062a1b2d470102d078e1059099fc920bd1e9c054722ef0e2",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9936633c63f9f45dd8f7",
          "headline": "AMD와 Nvidia가 AI 칩 시장을 분할합니다. 1 주식은 오늘 훨씬 저렴합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793115300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56cf740de167be592e82575d31b07a7497bfa10f92a3ff43c7034882aae5bdff",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b29302e349e7f457ae57",
          "headline": "NVIDIA, Micron, SanDisk가 다시 시장을 능가하더라도 놀라지 마세요",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793113435,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bf41b9e58f744eaf156ed76ca2030184694c39cb7989f6a9374ac4d42be21dff",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "780252dcb2a88ebef19f",
          "headline": "투자자들이 AI 지출을 재평가함에 따라 Lam Research Corp.(LRCX) 주가 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793101965,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e90e2f114308c8b04848674aac0e242d94283585c916fc52e85c61778d5eff8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "4bcda02334d58fcc7d70",
          "headline": "Nvidia는 Muse 파트너십을 통해 Meta에 30억 달러를 투자합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793092981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e06d8ceed6c42fef24ca5ecff6163453ab4268c7b6536ed12b0d2e8249ddc6f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "18280d4ccd778db9748a",
          "headline": "Jensen Huang은 월스트리트가 모르는 것을 알고 있습니까? 엔비디아 CEO, 2029년까지 메모리 수요 감소 조짐 보이지 않아",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793087460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fba705ed5eb3f8964185a7ee3e3c0800328dacc56be01c0ebcb41e3e4e40717",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2161a0fadbf4318bb72b",
          "headline": "Nvidia는 Meta의 주식 공모에서 30억 달러 규모의 주식을 인수하여 Muse AI 플랫폼 개선에 도움이 될 것입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793087013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16e66e1a8afacf9d3265d234b892d414847b4e626199a66e08e837f56366fa48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b27b93ee4897ec5aa818",
          "headline": "Nvidia, 더 큰 AI 파트너십의 일환으로 Meta 주식 제공에 30억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793083571,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1331c1055280919344792ba62a782cf1b575142953af07c557b7c352843ea2bc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "59ffe38f2ce8cd92ba10",
          "headline": "Alphabet Q3 수익 미리 보기: 2,000억 달러 규모의 AI Capex 테스트로 인해 주요 상승세가 위험에 처해 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793081700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b7655e8d75d7c1dedd7b24788b35870e795cfa53dc1835bfffefee287d1edbdb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "fae16ca205ab267e07df",
          "headline": "NVIDIA와 Meta, 강력한 성장 속에 Muse 및 Muse 제품군 모델에 대한 협력 확대",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793080320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b794487ca73043ed8f965d0dd9264fd23a2dd5b352b0a5eee33cf4cc291e744",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 28,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793123218,
      "signal": "우호적 변화",
      "netScore": 2.97,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -4.2,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.15,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 2.63,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "8837d076b34ceb6b1eea",
          "headline": "보고된 50억 달러 규모의 원자력 자금 조달 제안에 대한 CEG 주가 상승 – 일부 주요 하이라이트 살펴보기",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793123218,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c4a1bafe408c87eded3e6c8a843a480101bc9698eddf96a358da21a0fa59c68",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "839638d06b5258d2d16c",
          "headline": "AMD, Nvidia, Broadcom과의 Meta 거래: 순환 자금 조달이 위험합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793120760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35d438f71fa2f3f9ec3898bf4045b2b9a3cec9794dd861ee5bc7b49cd4a5d01b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9936633c63f9f45dd8f7",
          "headline": "AMD와 Nvidia가 AI 칩 시장을 분할합니다. 1 주식은 오늘 훨씬 저렴합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793115300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56cf740de167be592e82575d31b07a7497bfa10f92a3ff43c7034882aae5bdff",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ae3d4620ee3566df424d",
          "headline": "NVIDIA는 AMD와 Intel로부터 CPU 사업을 인수했습니다. 대상에 미치는 영향",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793115220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c49d19f8f51292811a2ea188b7ae8c68abf3f32d2f1c4cbabf2f2cf49ef08ba",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "780252dcb2a88ebef19f",
          "headline": "투자자들이 AI 지출을 재평가함에 따라 Lam Research Corp.(LRCX) 주가 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793101965,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e90e2f114308c8b04848674aac0e242d94283585c916fc52e85c61778d5eff8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "2161a0fadbf4318bb72b",
          "headline": "Nvidia는 Meta의 주식 공모에서 30억 달러 규모의 주식을 인수하여 Muse AI 플랫폼 개선에 도움이 될 것입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793087013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16e66e1a8afacf9d3265d234b892d414847b4e626199a66e08e837f56366fa48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b27b93ee4897ec5aa818",
          "headline": "Nvidia, 더 큰 AI 파트너십의 일환으로 Meta 주식 제공에 30억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793083571,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1331c1055280919344792ba62a782cf1b575142953af07c557b7c352843ea2bc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "59ffe38f2ce8cd92ba10",
          "headline": "Alphabet Q3 수익 미리 보기: 2,000억 달러 규모의 AI Capex 테스트로 인해 주요 상승세가 위험에 처해 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793081700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b7655e8d75d7c1dedd7b24788b35870e795cfa53dc1835bfffefee287d1edbdb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "4e341f2138fea3c68f66",
          "headline": "AMDY: AMD가 최고치에 가까워도 지불금이 줄어들고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793071635,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=abd09e663dafc8faca33ab646729ce6139de68c5d6b5d7b5eb5b63b68899afc2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "da39099750d2276c7419",
          "headline": "Broadcom은 Anthropic에 대한 AI 컴퓨팅 판매 자금 조달을 위해 은행으로부터 630억 달러를 확보했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793048366,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8890ae2b873890170dbe240920765c05486b05559a3555f5ede45fd19b547272",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "0a99632a0cd8f3944ae2",
          "headline": "메타 주식은 950억 달러 규모의 자본 조달 계획에서 하락합니다. 분석가들은 긍정적인 견해를 제시하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793040917,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b83595583bea417687a5ade0825e29ae97222bbdb56e2deb0b70c533925beb27",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "34b88478985848b5c99a",
          "headline": "Scott Galloway는 350억 달러의 자금 조달로 주가가 상승하면서 Meta를 AI의 \"큰 승자\"로 선택했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793039843,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=88f552d3a81bd983f29236d4bbd124ab00ecb87185de8954e486343af66fae9c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 26,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793120760,
      "signal": "우호적 변화",
      "netScore": 5.74,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.15,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.45,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 1.23,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "839638d06b5258d2d16c",
          "headline": "AMD, Nvidia, Broadcom과의 Meta 거래: 순환 자금 조달이 위험합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793120760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35d438f71fa2f3f9ec3898bf4045b2b9a3cec9794dd861ee5bc7b49cd4a5d01b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "57c745610825eb3e226d",
          "headline": "Broadcom은 더 많은 칩을 확보하기 위해 Anthropic과 630억 달러 규모의 계약을 체결했습니다. 주가가 오르고 있다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793119544,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=130cdff4ef71b9a586b8d6919cd9448bf2762cb2533ecc645c338dd507e0d351",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "31632bbbc3c92439815c",
          "headline": "Broadcom의 630억 달러 Anthropic 거래로 Baird의 '우수' 등급 및 630달러 목표 달성",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793118900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=55b246f7cff999877cd7f27cfe06e49a8d51cb287cf3e675358562573d3db7b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8fac3a3f451d5ba3aa23",
          "headline": "STX는 Seagate의 1분기 보고서에 앞서 시판 전 상승 — 투자자들은 무엇을 보고 있습니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793092171,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=357f49f097dddfe4e8e3943abb5664006b046388ecf03282b49e4f9529c4aa9f",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a4b3abb7f8f1531cd179",
          "headline": "Broadcom 대 Taiwan Semiconductor: 두 개의 AI 강국, 하나의 놀라운 수익 추세",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793091002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=992debb5db4551dd5382f45a0372386bec5a824aa8ee74ef9e3dab5eaf3d8778",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2161a0fadbf4318bb72b",
          "headline": "Nvidia는 Meta의 주식 공모에서 30억 달러 규모의 주식을 인수하여 Muse AI 플랫폼 개선에 도움이 될 것입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793087013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16e66e1a8afacf9d3265d234b892d414847b4e626199a66e08e837f56366fa48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3bb05c02368c4767ba6a",
          "headline": "Nvidia, 칩 제조업체는 더 높은 비용에 직면합니까? TSMC는 고급 칩 패키징을 위해 최대 20%의 가격 인상을 계획하고 있는 것으로 알려졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793077230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=432bd49e2a4acf8bed8cca15c7fbb709f43a09d845287185986d3f21df7a3a60",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9771c7820c3d9fad4ba6",
          "headline": "인텔, 소프트웨어 스타트업 Classiq 인수로 양자 야망 심화",
          "eventLabel": "실적 발표",
          "publishedAt": 1793058328,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e661a236af78ea32ca2ff8a8e6a74b5aeef05f319e46041e707aff468df9ca92",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "da39099750d2276c7419",
          "headline": "Broadcom은 Anthropic에 대한 AI 컴퓨팅 판매 자금 조달을 위해 은행으로부터 630억 달러를 확보했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793048366,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8890ae2b873890170dbe240920765c05486b05559a3555f5ede45fd19b547272",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9700ed9fcf232109f90e",
          "headline": "Broadcom, Anthropic의 칩 자금 조달을 위해 630억 달러 규모의 거래 주선",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793046974,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f0977432d81349ca4ff03b6f76f1f9cfadff13c177990a0242a08f6a362f812",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "065a69126079cadbfd60",
          "headline": "Bank of America, Blackstone, Citi 및 Morgan Stanley는 Broadcom과의 파트너십을 통해 AI 컴퓨팅 용량을 활성화하기 위한 획기적인 630억 달러 규모의 자금 조달 구조를 발표했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793045700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c2fac6294a35585cd1f47a0825c125352e588991546f8036493a7d2922839429",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8e638e3e331c92115673",
          "headline": "정보 기술(IT) 탄력성 오케스트레이션 시장(2026-2030년) | Microsoft, IBM, Broadcom 및 ServiceNow Scale AI 및 하이브리드 클라우드를 통해 CAGR 14.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793025660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cfba389128f954ca6adb426f83ff3a29bb5fbc790c04831aac1f2375937be56a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793035800,
      "signal": "중립·확인 대기",
      "netScore": -1.18,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.17,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.17,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "5acb0cec88310bb4f6e0",
          "headline": "Apple의 iPhone Duo 배송 시간이 1월까지 연장됩니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793035800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d7f9ce0abff853450288e28112d7c2ddb50a5d1055ca51b54a63454e422a7d3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "1ae43d55f9ffa7979fe2",
          "headline": "맞춤형 시스템 온 칩 애플리케이션별 집적 회로(ASIC) 시장 글로벌 보고서 2026 | NVIDIA, Qualcomm, Broadcom 및 TSMC를 통해 AI 및 5G 수요 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793024760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f487fb24d7d5a52b20c889167d2d5583406764e20d5d366fe2c2cc43afc19af9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793112901,
      "signal": "중립·확인 대기",
      "netScore": -0.48,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.18,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.17,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "ac7cacc4d638204db619",
          "headline": "Arm 대 Western Digital: 11월에 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793112901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0602d1b253c2e3af6307548ecf85752d255b0e9d87d2d26e887f17e0da11ae26",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9ba94ad834c749de8181",
          "headline": "Bulls는 Arm의 승수 3개가 자사의 하늘 높은 가치를 정당화한다고 주장합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793018741,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f015f1d138e7b1e8731f4aa0d7e8a93aaa16579a12f3a14a5c4a8bbec6d8fe94",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793122427,
      "signal": "주의 강화",
      "netScore": -6.73,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.52,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -3.15,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.62,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -3.15,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "6ede39f6990912f429de",
          "headline": "예측: Marvell 주식은 투자자들이 생각하는 것보다 훨씬 더 많은 상승 여력을 가질 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793122427,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90064c3df79d7801bc73a4e2a731b47964902670f8c2a45fcffdb0fa6694d067",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1a3ccd66016a1223b467",
          "headline": "Dell Technologies vs. Marvell Technology: 2026년에는 어떤 기술주를 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793117762,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bf967c0b04e0049412b5cf7963147a4cf7efcda036e6bd60bb06d9a8b89bf66a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "441c1b296fa62b935c57",
          "headline": "Marvell 주식은 거의 9% 하락에서 반등했습니다. COO는 내년에 200억 달러의 매출을 달성할 \"수요와 공급 모두\"를 갖추고 있다고 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793047217,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1359a52a2a32a419abb4f08bcde43eb012c4cb48a6a96fb6ec1597b60290ecb6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d98390f357fddea62e4d",
          "headline": "“다음 조 달러 규모 회사”: Marvell은 1년 만에 185%의 수익을 올렸습니다. 구매하기에는 너무 늦었나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793028673,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6524f60b9ef0b9c010c5b890bad07b04e8e20355115dec0bd78e1f6622ac0d95",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "40432ca555b89362d79c",
          "headline": "예측: 지금부터 5년 후에 AMD보다 가치가 더 높아질 2가지 주식",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792970400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dba82bbe2aed4b0a569ca32d104978f8aaab5d0c46b60f7e4a85b9267bce8399",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793115220,
      "signal": "주의 강화",
      "netScore": -4.34,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.7,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.35,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.45,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.4,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "ae3d4620ee3566df424d",
          "headline": "NVIDIA는 AMD와 Intel로부터 CPU 사업을 인수했습니다. 대상에 미치는 영향",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793115220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c49d19f8f51292811a2ea188b7ae8c68abf3f32d2f1c4cbabf2f2cf49ef08ba",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "86d113921dac4436ae35",
          "headline": "Intel vs. Nvidia: 정체된 추세 vs. 수익의 급속한 확장",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793053201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=211960c6c4bc2e5430cc6ef5c1bd0fb0b68c002a78b23b319d88e6a89251593e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5dfb13efc4e940739c2a",
          "headline": "기술 수익은 이번 주 시장의 가장 큰 이야기입니다. Microsoft, Amazon, Intel, SanDisk 및 Alphabet이 주식 시장의 다음 움직임을 주도할 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793049314,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ba45970045d616ae03d3cc67e7f9f6059a35dc49bdd2be6aa520a0bc20af7bf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "503938acfb7d2ad067b2",
          "headline": "New Street Upgrade가 서버 CPU 부족을 언급함에 따라 Intel은 5% 상승합니다. AMD와 NVIDIA는 3% 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793037031,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af1cac33fdfcbf5bfa630db94996b564147c3c6f253fa74b20628558ad22cce6",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f92f70343d4155e8beee",
          "headline": "인텔과 TSMC는 칩 제조 패권을 위해 경쟁하고 있습니다. 1 우수한 가치를 제공합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793027100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9cc4aab084740d00bc094b96ec3ca80356e22bccb0b9db75bc591b4d934313a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dca2f2ca34d6d1b78960",
          "headline": "글로벌 플립칩 기술 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | TSMC, Intel, Samsung, AMD 및 Amkor를 통해 AI, 5G 및 3D 패키징 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793024580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5771ace9a5f9de83f188cd3ab654f3efde5b879117fd6acfbbd642e3419e1128",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "679ba9f72a545d53b9eb",
          "headline": "Stocktwits Tech Watch: 더 많은 수익 창출, Apple의 터치스크린 MacBook 및 Intel 결과에 주목",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793004446,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e0f150fc9ea54a8bafb84405cd51ce4b86953b3206e67b3b4da9258a8aa238d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793091002,
      "signal": "중립·확인 대기",
      "netScore": -1.74,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.17,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.75,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.17,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "a4b3abb7f8f1531cd179",
          "headline": "Broadcom 대 Taiwan Semiconductor: 두 개의 AI 강국, 하나의 놀라운 수익 추세",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793091002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=992debb5db4551dd5382f45a0372386bec5a824aa8ee74ef9e3dab5eaf3d8778",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "782741833fe3ca0b7b14",
          "headline": "Apple vs. Taiwan Semiconductor: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793073602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb24a3a7512e1ce06571eef5a093573db91ecc49f7feeb81e80f5dd4bfd5d2f2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1ae43d55f9ffa7979fe2",
          "headline": "맞춤형 시스템 온 칩 애플리케이션별 집적 회로(ASIC) 시장 글로벌 보고서 2026 | NVIDIA, Qualcomm, Broadcom 및 TSMC를 통해 AI 및 5G 수요 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793024760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f487fb24d7d5a52b20c889167d2d5583406764e20d5d366fe2c2cc43afc19af9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dca2f2ca34d6d1b78960",
          "headline": "글로벌 플립칩 기술 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | TSMC, Intel, Samsung, AMD 및 Amkor를 통해 AI, 5G 및 3D 패키징 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793024580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5771ace9a5f9de83f188cd3ab654f3efde5b879117fd6acfbbd642e3419e1128",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793026472,
      "signal": "중립·확인 대기",
      "netScore": -1.88,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.52,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.52,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "b877e8fd43b3e2216cd5",
          "headline": "ASML의 2026년 3분기 결과가 주가를 떨어뜨린 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793026472,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f49ad45477e584519764e9a24cae6ec070cdbf6710697aa5ff15fb407e0595d1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793104575,
      "signal": "중립·확인 대기",
      "netScore": -1.88,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.52,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.52,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "c2679528ff7b120bc332",
          "headline": "Applied Materials가 이중 지분으로 전환함에 따라 네덜란드 칩 회사 Besi의 주가가 급등했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793104575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33ced5da9cc7ad273228ac4ba9aa0d136e83d4237871f220ffa9e14f0e59913f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "66d88a529d9483b9d2e0",
          "headline": "AMAT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1792940400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026067303/amat-20261026.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MU": {
      "ticker": "MU",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793123218,
      "signal": "우호적 변화",
      "netScore": 10,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.52,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.57,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 5,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "8837d076b34ceb6b1eea",
          "headline": "보고된 50억 달러 규모의 원자력 자금 조달 제안에 대한 CEG 주가 상승 – 일부 주요 하이라이트 살펴보기",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793123218,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c4a1bafe408c87eded3e6c8a843a480101bc9698eddf96a358da21a0fa59c68",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "6d3340b055a316193319",
          "headline": "Micron의 장기 수익률이 S&P 500을 무너뜨렸습니다. 최근 하락세가 중요한가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793119649,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02caa30c31e8c3df0d1ccee6cb9f6ce723fd48bd88301856d1537917e28ee07b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e43f4b5138c30209f1d9",
          "headline": "메모리 병목 현상 분할: SK 하이닉스는 Tier 1에 매각하고 마이크론은 유출을 흡수합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793119535,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f8b7d7db33a07d5a6393ffc4ecabbbce0c46f41ec739c8aaf2847c8a8bb5e980",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b29302e349e7f457ae57",
          "headline": "NVIDIA, Micron, SanDisk가 다시 시장을 능가하더라도 놀라지 마세요",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793113435,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bf41b9e58f744eaf156ed76ca2030184694c39cb7989f6a9374ac4d42be21dff",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "780252dcb2a88ebef19f",
          "headline": "투자자들이 AI 지출을 재평가함에 따라 Lam Research Corp.(LRCX) 주가 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793101965,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e90e2f114308c8b04848674aac0e242d94283585c916fc52e85c61778d5eff8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "18280d4ccd778db9748a",
          "headline": "Jensen Huang은 월스트리트가 모르는 것을 알고 있습니까? 엔비디아 CEO, 2029년까지 메모리 수요 감소 조짐 보이지 않아",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793087460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fba705ed5eb3f8964185a7ee3e3c0800328dacc56be01c0ebcb41e3e4e40717",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b27b93ee4897ec5aa818",
          "headline": "Nvidia, 더 큰 AI 파트너십의 일환으로 Meta 주식 제공에 30억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793083571,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1331c1055280919344792ba62a782cf1b575142953af07c557b7c352843ea2bc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "59ffe38f2ce8cd92ba10",
          "headline": "Alphabet Q3 수익 미리 보기: 2,000억 달러 규모의 AI Capex 테스트로 인해 주요 상승세가 위험에 처해 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793081700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b7655e8d75d7c1dedd7b24788b35870e795cfa53dc1835bfffefee287d1edbdb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "0216a156e7a53f05c6b3",
          "headline": "2027년 말까지 Micron에 대한 1,000달러 투자의 가치는 얼마나 될까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793061360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b8aeea74a8a4b63ede9bfe219b8aed6734535d3a456da3c32d72d7a7478aea7f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "da39099750d2276c7419",
          "headline": "Broadcom은 Anthropic에 대한 AI 컴퓨팅 판매 자금 조달을 위해 은행으로부터 630억 달러를 확보했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793048366,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8890ae2b873890170dbe240920765c05486b05559a3555f5ede45fd19b547272",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "0a99632a0cd8f3944ae2",
          "headline": "메타 주식은 950억 달러 규모의 자본 조달 계획에서 하락합니다. 분석가들은 긍정적인 견해를 제시하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793040917,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b83595583bea417687a5ade0825e29ae97222bbdb56e2deb0b70c533925beb27",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "34b88478985848b5c99a",
          "headline": "Scott Galloway는 350억 달러의 자금 조달로 주가가 상승하면서 Meta를 AI의 \"큰 승자\"로 선택했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793039843,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=88f552d3a81bd983f29236d4bbd124ab00ecb87185de8954e486343af66fae9c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 23,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793087529,
      "signal": "중립·확인 대기",
      "netScore": 0.62,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.35,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.18,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "ee24b41647754804c633",
          "headline": "Sandisk: 공급이 문제를 해결하고 있습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793087529,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca93703cc4cde0ad01a05b7c5c0f79dfaccb48a1e197e46812892a259fd305f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "5dfb13efc4e940739c2a",
          "headline": "기술 수익은 이번 주 시장의 가장 큰 이야기입니다. Microsoft, Amazon, Intel, SanDisk 및 Alphabet이 주식 시장의 다음 움직임을 주도할 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793049314,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ba45970045d616ae03d3cc67e7f9f6059a35dc49bdd2be6aa520a0bc20af7bf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9cf9f800cf713e2e107e",
          "headline": "Bank of America가 메모리에 대해 더욱 긍정적으로 성장함에 따라 Micron은 4% 상승합니다. Western Digital 상승 5%, SanDisk 상승 3%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793037154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=337d5288f7a5ceda4d3e3c179066ab1231121ca1af5dc8dc88046abccec8dfa7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "77eb5e2f1d6720288cdc",
          "headline": "AI 스토리지 붐은 끝났는가? SanDisk의 10월 29일 수익이 의심하는 사람들이 틀렸다는 것을 증명할 수 있는 이유",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792941987,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ec9456e3ee3dfc9864d1937e852cc3861caba4d07bcbefd022e1b1e4ca653ab",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7097fb0f903e9b7887f9",
          "headline": "Sandisk(SNDK)는 메모리 생산 일정이 단축됨에 따라 업계 공급망 제약을 지적합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792940977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2e3e40a388efdd821a35cfb48c97aabeb1dee227981cd8ba0d5f3d7feb4eee1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793112901,
      "signal": "주의 강화",
      "netScore": -4.13,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.05,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.4,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "ac7cacc4d638204db619",
          "headline": "Arm 대 Western Digital: 11월에 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793112901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0602d1b253c2e3af6307548ecf85752d255b0e9d87d2d26e887f17e0da11ae26",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9cf9f800cf713e2e107e",
          "headline": "Bank of America가 메모리에 대해 더욱 긍정적으로 성장함에 따라 Micron은 4% 상승합니다. Western Digital 상승 5%, SanDisk 상승 3%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793037154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=337d5288f7a5ceda4d3e3c179066ab1231121ca1af5dc8dc88046abccec8dfa7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5acb0cec88310bb4f6e0",
          "headline": "Apple의 iPhone Duo 배송 시간이 1월까지 연장됩니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793035800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d7f9ce0abff853450288e28112d7c2ddb50a5d1055ca51b54a63454e422a7d3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793117706,
      "signal": "중립·확인 대기",
      "netScore": -0.7,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.7,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "b5416bf3edadd6953b2a",
          "headline": "StoneX가 모두 매수로 시작하고 103% 상승 여력을 보임에 따라 Coherent는 6% 상승, Lumentum은 8% 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793117706,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=27d06a65da6a58e78c766601a2ed21f745807e888db04cac1ac233e160f79049",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6bd869e6684833daf689",
          "headline": "StoneX가 $1,200 목표로 보장을 시작하면서 Lumentum은 8% 상승합니다. 응용 광전자공학 및 Coherent Climb 6%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793033178,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45fb58dea479f9c792d78456330fa491970b4f55e90ef6aa0b35aa63aa28ba81",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1792932600,
      "signal": "중립·확인 대기",
      "netScore": -1.88,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.52,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.52,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "254635ce3e3ac7f514f2",
          "headline": "GE Vernova의 가스 터빈이 붕괴되는 풍력 사업을 보완할 수 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792932600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9f4e214c67d4d350598b51840974d3353b4a373d067102f2e0dd8bdb7e8af20",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1792935117,
      "signal": "우호적 변화",
      "netScore": 2.09,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.52,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "4307b66baec7b5f8e2dc",
          "headline": "Constellation Energy, Google에 890MW의 전력 공급 약속: “에너지 수요 증가”",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792935117,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d5067116906b5db88cc2004a27199827c2d5893542ad3e82cd21cf8ef82d849",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1792934777,
      "signal": "중립·확인 대기",
      "netScore": -0.91,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.35,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "b17c138720faa10aa6a2",
          "headline": "Vistra는 42억 달러의 핵 대출 제안에도 불구하고 3개월 만에 17% 하락",
          "eventLabel": "내부자 매도",
          "publishedAt": 1792934777,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7bb8ff404a7f98d7d3f738d46344eaed2936c6ef6d47f52945cd530fda68ab0",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793015755,
      "signal": "중립·확인 대기",
      "netScore": -0.35,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.35,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "3426fb562e5ad78a29bc",
          "headline": "GEV, D, CMS, AEP 및 PWR, 이번 주 수익 보고 – 투자자들이 보고 있는 내용 살펴보기",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793015755,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e1fd7f606da97c2f6c4696fb7a6f6ec7d95fc9d0e383704cb05d6a05ec536b8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793114913,
      "signal": "중립·확인 대기",
      "netScore": -1.54,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.7,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -0.35,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.7,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "fd39ef75c7f95b7e7331",
          "headline": "Hubbell Incorporated, 2026년 3분기 희석 EPS를 $4.94로 보고하고 연간 조정 EPS 가이던스를 $20.40-$20.60으로 인상",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793114913,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea4a0439c2017ca825bdcab3160086fb86ea3bcb6cefe5bac6065a5738a77e91",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "61637a64038bd94f5d89",
          "headline": "HUBB SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793026800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026067421/hubb-20261027.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VRT": {
      "ticker": "VRT",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793101818,
      "signal": "중립·확인 대기",
      "netScore": -1.04,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.52,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.52,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "f9f6d5dccd46e80bd061",
          "headline": "Equinix, KLA 및 Vertiv 수익이 데이터 센터 수요에 대해 알 수 있는 것",
          "eventLabel": "실적 발표",
          "publishedAt": 1793101818,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8764b09e20fc81f9c55f83649055a2cf61db1088baeaf7dd987572e54ef1392e",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6c1d5317ee6f0a764b16",
          "headline": "VRT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793026800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067393/vrt-20261027.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "47501e2a9abcec6009dc",
          "headline": "VRT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1792940400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026067127/vrt-20261026.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "STX": {
      "ticker": "STX",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 1793116486,
      "signal": "주의 강화",
      "netScore": -4.62,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.1,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.1,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "9aa56d01319452d5c61c",
          "headline": "STX 주식은 수익보다 6% 이상 급등 — Rosenblatt는 목표를 줄였지만 단기 이익은 상승할 것으로 예상",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793116486,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=42633965b3dacfcfb49203065b921011eed3f7993fdf93534c76e8e087af2514",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "63cd1a08a6b889e08531",
          "headline": "Seagate의 가장 중요한 기회는 데이터 센터에 있을 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793105115,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd50d6e89dfddcd55848621383b7cbaaf0ae318c46a0ca95ad3e27ebd1e3e7b3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "FIX": {
      "ticker": "FIX",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "BE": {
      "ticker": "BE",
      "updatedAt": 1793128108.4004188,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    }
  }
};
