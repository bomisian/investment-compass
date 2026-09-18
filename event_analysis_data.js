// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1789701345.6365337,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789641769,
      "signal": "주의 강화",
      "netScore": -2.8,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.75,
          "level": "우호적"
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
          "score": -3.15,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.75,
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
          "eventId": "8b40f746dcd5626c66c3",
          "headline": "Nokia, 통신 네트워크 자동화를 위한 AI 플랫폼으로 Microsoft 제휴 연장 – NOK 주가 프리마켓 상승",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789641769,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6cf85a577bb08242160807ee25d7c35c4acd4d2c5530d41100742cae1310481e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b0122c7806a539584b64",
          "headline": "Microsoft 거래가 AI 네트워크 추진을 심화함에 따라 Nokia 주가 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789634443,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=923603d25cfa7d03600fc77c29f0298c4247f0749898f0f4f43fb50fe3a537c4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1634484f6041b65ec185",
          "headline": "Microsoft는 정부 기관에 지금 커밋하고 나중에 기능을 제공하도록 요청합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789578311,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=071de8f792669913f5517e1d371293824f12a0fdc421c774b20f7ea78c620d46",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2042ed7b9f52da1b9a52",
          "headline": "Microsoft는 주식 매입에 지출하는 것보다 더 많은 배당금을 지급합니다. 이것이 투자자에게 미치는 영향은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789504981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cad7d7a86b6465d3cd46ba27d3e520cbddec799887b2a2958c36950b0ff25a93",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "816e8fd4233ba5701ef1",
          "headline": "Blykalla와 Microsoft는 납 냉각형 첨단 원자로에 대한 AI 기반 원자력 라이센스를 발전시키기 위해 협력하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789473600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=402e8a1971cd01e8d80d87f19c751eb034ca31fa96778612d92e78e4ba7d4db0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fa36b1beda9ea1dcb283",
          "headline": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789422834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0831fd07e88fc24cfe13",
          "headline": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789422834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789644480,
      "signal": "주의 강화",
      "netScore": -7.02,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.52,
          "level": "중립"
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.8,
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
          "eventId": "f573290cd12f0f594035",
          "headline": "1 AI 주식은 다음 인프라 급증에서 Micron 및 Sandisk를 능가할 준비가 되어 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789644480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a427bb9c1c9c67e5bb654dfebc3e5402f132f342d658561512fff870c495e10",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a91dfe4340a66db9b99f",
          "headline": "Mark Cuban은 Meta와 Google이 기술 반대 콘텐츠를 통해 AI 미래에 자금을 조달할 수 있다고 말합니다: '아이러니를 보는 것은 흥미롭습니다...'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789638310,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=343666ce61901932db23b3c9ab4d27fd55ddbaa9df6e4ac8a6a2e636b5fab73f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "18e8091a8c737ecd4ae8",
          "headline": "시장 잡담: Blackstone, Alphabet AI 벤처, 220억 달러 칩 파이낸싱 세트",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789636214,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8d6688093ff2d5d87565eca051574e4c3e75354106665c36ba42c3b64b154d84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c14e0eb9803ca11f279f",
          "headline": "Google과 Stegra가 환경 속성 인증서에 대해 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789629780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33de542457247030a74d12f43cb7dd3e2312812442fe0343f54a0684f376b6a4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1af91cd3ed2d7caf8c8e",
          "headline": "알파벳(GOOGL), 구글과 탄소배출권 거래 성사, 여전히 과대평가됐나?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789575291,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=096ea807178d1f83c267bc98a5ffd95d2f0a5d9ae1e167c341317f4d23a2ab0e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "af81b99410a8de01a1be",
          "headline": "알파벳 대. Apple: 과도한 규제 압력으로 인해 이 회사의 현금 흐름이 더 위협받음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789558200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cec7f72fdadcecd975fa6a2a3658b45ee6086faea8838c62e3b4a19de24d2088",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3a109dd6d9131b3a57fc",
          "headline": "Anthropic IPO가 Amazon 및 Alphabet 투자자에게 의미하는 것",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789546620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=585e4b7f02f007b282c0b8ac7ed929c4683d791e027b025c58aa7096908698e7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fdfb8e9d095ff1305354",
          "headline": "Fortum Oyj(HLSE:FORTUM), Google 핵 계약 체결, 현재 과대평가되어 있나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789528827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dd6999ebd88725734decd1a9e5c4ea9a70e33d5a4c34bd502fedbe5942753fda",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dd446379d2e63a9d1e28",
          "headline": "GOOY: GOOGL 주식의 주식과 유사한 수익을 위한 주간 배포",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789520611,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bab13c1a32d4c2286929712e73d9ca4eec6e0f96cc101ff4bb7d648bbaa74435",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9c382b9539c9481a3722",
          "headline": "상원이 제안한 AI 킬 스위치로 워싱턴이 Google의 프론티어 모델에 대한 거부권을 행사할 수 있음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789495838,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6177bb7089f02866b538cb7e83daaf306639e70a547ab4103598168c5215cfad",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "da5134b69e58c8dcb361",
          "headline": "잉여현금흐름이 마이너스로 유지된다면 알파벳 주식은 어떻게 되나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789491747,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=023fb1b377234f01c269732a7d0c0e91df3a5c3ae2f8abf0790609439cd6d97b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "865ec0a8fc6705bc30a5",
          "headline": "워렌 버핏은 약 1년 전에 알파벳 주식을 샀습니다. 오늘날에도 여전히 매수세를 보이는 3가지 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789488301,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc9f1a2f406e58f09b56576d6d108dea818de09ab6ff71d850a09bb631efd912",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789647107,
      "signal": "우호적 변화",
      "netScore": 2.14,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 4.38,
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
          "score": -4.2,
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
          "eventId": "833b4ff6cdfd1b9f9709",
          "headline": "Snap, Nvidia, Amazon 및 Salesforce 거래로 사양 강화",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789647107,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44e080bf1d26e4f844b2bbc7dbc0f78b51541994f1f9c25a0d2062d6516f8d60",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a3d247944dc907df99a0",
          "headline": "Generac은 Canaccord에서 $100의 목표 인상을 얻었습니다. 분석가는 Amazon 거래로 최대 $80억의 주문을 확보할 수 있다고 말했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789644385,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea0eee0beb2a3c2f8ce81ea63019c3b744fd098b413cccef55caff0591e1bace",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6b85321c959522f9f01",
          "headline": "Generac 주식은 Amazon 데이터 센터 거래에서 35% 급등합니다. 이것이 게임 체인저인 이유.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789643760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=84897bf1bae338c87456a9ecff87679c12046ca66a5e7248ecbd5e894716a234",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "87ea2099596506a138c4",
          "headline": "Generac 주가는 Amazon 데이터 센터 공급 계약 발표 후 33.7% 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789640516,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6c442ad0199c07614de02bfedff00cc8483a845e4f2a69dc0bc0dfee4f03174",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d842716dcd8958632a9b",
          "headline": "Generac 주식은 Amazon 발전기 거래로 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789596780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc71a99933c41d025d94da073faa19d03e23d9efb14a122e4e1811b9e61fe2d6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6c0c0040ba981ee0e5ed",
          "headline": "Amazon 거래, Generac 주식 급등을 늦게 보냄",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789594767,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1cadf04d7051c229e69c2ff883479a31b4dbb8ca507e8f31f00d68f3f16fb3f1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "70f1fdde695f79a680ba",
          "headline": "이 에너지 솔루션 주식은 시간 외 40% 급등했습니다. AMZN 연결은 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789594741,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9dae2c918f6e4d7fd5e81549f1e0663b44e37b400fb0f05bed425a17bb18165",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5b643ad3d6b7acccb092",
          "headline": "Generac 주가는 80억 달러 규모의 Amazon 공급 계약으로 18% 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789592529,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c8ed4d4cec7b5fce5a6315ad5a4c1fc3a40c625d314e17412754efc7d92c7fb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "25ffe673ac5013a0ba8e",
          "headline": "Oracle은 구조 조정으로 AI 스프린트 자금 조달에 도움이 되면서 2% 상승",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789579185,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfff713c4b1d3cd125ff2e7ef025bfcab04e23f0607199530fae1bf059a9c0a1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "17cb6f5e6e35b5d1a198",
          "headline": "Amazon이 600억 달러 규모의 AI 문을 열면서 Qualcomm의 우위가 더욱 높아졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789579033,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f4cc2d0d3f7e3bbb7184938d40072a9180e59e71b97031f05e648821209947a6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fb2c8cefc129c7030788",
          "headline": "관세 절감 혜택을 누리는 6개 기업 중 Amazon, Walmart - 예산에 미치는 영향",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789578024,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5455af72eaab4836c10544077ad2b5515811a4c60689364c2412434d678b8e01",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9c997994fdcaa7c3b408",
          "headline": "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까? INTC, SKHY, ORCL, SPCX, ASTS, CRCL, COIN 주식에 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789547564,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b04351b6a1f3e365dc88e64a6e7379760ffbc892797f0c86bbbae4f505ac12e2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 21,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789649839,
      "signal": "주의 강화",
      "netScore": -9.73,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.92,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.05,
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
          "score": -2.97,
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
          "eventId": "35e8404c09a2dfe675f4",
          "headline": "메타, '변태' 반발 이후 카메라 없는 스마트글래스 계획",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789649839,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3694e53f93ec01777017c2db88674a4d66f954f10accafdfc4de487673111c86",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6bb3c921cb45f4cec1fb",
          "headline": "메타 구매에 찬성하는 대부분의 주장은 이제 하나의 강력한 촉매제를 놓치고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789646700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c21735dbfcd7b85f016a9834dd2744bfd05d56896a196f7fa95e1155ffadd32a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a91dfe4340a66db9b99f",
          "headline": "Mark Cuban은 Meta와 Google이 기술 반대 콘텐츠를 통해 AI 미래에 자금을 조달할 수 있다고 말합니다: '아이러니를 보는 것은 흥미롭습니다...'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789638310,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=343666ce61901932db23b3c9ab4d27fd55ddbaa9df6e4ac8a6a2e636b5fab73f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4f8a513e0fad1109017d",
          "headline": "Apex Clean Energy, 텍사스 프로젝트의 태양광 발전을 위한 Meta와 PPA 계약 체결",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789577449,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=738d8766890a32e92342a11c7507548748ef5f9b5792774f56087daf98050952",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a4567036ef9f678c9959",
          "headline": "이 억만장자가 페이스북에 투자하지 않은 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789565492,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fed714c3b839228ce5910d7766bf6e95d05c4f762e191a63af19a2cdb7cf311d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "651799e9871e68378cc7",
          "headline": "S&P 500, Nasdaq, Dow는 Fed 회의를 앞두고 투자자들의 금리 인상으로 하락 마감 — AMZN, META, MU, TSLA, PLTR 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789509895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=937b1548531416896a208cab353bef25747baa53e6bb5913f23c7bfa721f6d8a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5ddc0789b8904a8c5936",
          "headline": "Meta의 24억 달러 규모의 법적 탭이 국가 규제의 악몽으로 폭발할 수 있는 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789492531,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d72d95b9329f2f78fbfe1b1675882caeec92a4007752adee786052b14085667",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d84101dd43db587b4a25",
          "headline": "퀄컴 쌓기 시작했는데 아마존과 메타 때문은 아니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789491333,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e485e125aac2c0892310b29c48014eee7c31b9422b3044c44a41584dbd81dfe5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789650726,
      "signal": "주의 강화",
      "netScore": -3.85,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.53,
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
          "score": -4.2,
          "level": "주의"
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
          "eventId": "5701f04e01ac0f9b612d",
          "headline": "BofA는 Apple iPhone 수요가 더 높은 통신사 인센티브를 유지해야 한다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789650726,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=773c44a3dc1e3a9009d4b2133db121a5286ecaccde473b2515de3b661c269317",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "6eaf2420474cbaaba4d3",
          "headline": "분석가는 인텔 주식이 2년 안에 거의 두 배인 200달러까지 오를 수 있다고 말합니다. 잠재적인 Apple, Tesla 및 AI 칩 거래가 랠리를 촉진할 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789633557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f4ce671b50ebaa102ac50a24bad5212b70b6456b06fe521e79b0264e72e4e62",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9f342c34c7bc9076d848",
          "headline": "성능 비교: 기술 하드웨어, 스토리지 및 주변 장치 산업의 Apple과 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1789624702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee37a32608f8597b3fe71df3d589b16a98943b41aacce62199e7d89257033678",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "be35486f0ef2f0039df3",
          "headline": "S&P 500, Nasdaq, Dow Futures는 투자자들이 2023년 이후 일등 금리 인상을 소화함에 따라 인치 더 높아졌습니다 — INTC, GOOGL, AAPL, SKHY, UAL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789601382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=00168ac6217c2b77e67234d7da7eae404e2a005b371afb30ac7684cbf96cb7a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9277795a9b51a3052c11",
          "headline": "마진이 계속 하락하면 Apple 주식은 어떻게 되나요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789579893,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0078e1032fb647f22424aca113b33ff13e324bfa087dec12eebd65031470726b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "78bd2beaa592ddea0d18",
          "headline": "2026년 시가총액 기준 상위 5대 기업: 엔비디아가 2028년까지 1위를 유지할 것이라고 생각하는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789572000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6c7ee6d512df33d0ae73f4e68c285a46f7bf5a9f4435e4567ac45fe8e58fa142",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "af81b99410a8de01a1be",
          "headline": "알파벳 대. Apple: 과도한 규제 압력으로 인해 이 회사의 현금 흐름이 더 위협받음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789558200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cec7f72fdadcecd975fa6a2a3658b45ee6086faea8838c62e3b4a19de24d2088",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d55edb3320abbea3b46b",
          "headline": "Apple에서 Tim Cook의 가장 결정적인 움직임은 AI와 관련이 없습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789555800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db732d605a24a75a773506774ccc7adc0510edccf1cae68f084a011a6594952a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "d84ab48fbd444914a48c",
          "headline": "인도, 아이폰 수리 조사 확대 후 애플 주가 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789486736,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c5ad6092fabe1a15a62383727d518cb6da5eb62192629f1cb9e8df4d4d43151",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "29c48a92bfea97add066",
          "headline": "Apple의 뛰어난 코미디 Widow's Bay가 Emmy 역사상 가장 많은 상을 받은 신입생 코미디로 승리하고 Apple TV가 제78회 Primetime Emmy Awards에서 가장 많은 상을 받은 네트워크로 선두를 달리고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789465200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9da3ddeef7b6f27f8c0a89b7e0069c8814a95518bd8c92ce96e279c28d0de679",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0416214ecdc2fb924bf4",
          "headline": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789445485,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789633557,
      "signal": "주의 강화",
      "netScore": -8.75,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.52,
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
          "score": -4.9,
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
          "eventId": "6eaf2420474cbaaba4d3",
          "headline": "분석가는 인텔 주식이 2년 안에 거의 두 배인 200달러까지 오를 수 있다고 말합니다. 잠재적인 Apple, Tesla 및 AI 칩 거래가 랠리를 촉진할 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789633557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f4ce671b50ebaa102ac50a24bad5212b70b6456b06fe521e79b0264e72e4e62",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4b190960341276c9144a",
          "headline": "SpaceX가 Tesla를 구매할 수 있을까요? Ron Baron은 Elon Musk에게 블록버스터 거래에 대한 이유와 반대 이유를 제시했다고 말했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789622302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d0d473dacbcd512d0baac43d7e5f3ac28667b22ac9e662be6eaf2b55b797ea3c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9af258d7881a6d27e458",
          "headline": "Tesla Robotaxi Day에 대한 경쟁업체의 반응",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789615860,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a17506943d1f28fb380d50f642e1aa40309561d46791abbd147b09f88fefe76",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0173afcdec962f394987",
          "headline": "억만장자 Ron Baron은 Tesla 주식에 대해 매우 낙관적입니다. 그의 이유는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789604568,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea092f0d8c063de4e9f4cbb7a9ed053f6d80e3dc589e0e90c40c60e792b25b67",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f4051bb3d0d2d6624126",
          "headline": "레귤레이터는 Cybercab 디자인을 통해 Tesla를 그릴",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789565103,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=708c8c357374ed44f136ca5d40951de7df1bdb050ccf685e0b0a0a1cb5b55741",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "651799e9871e68378cc7",
          "headline": "S&P 500, Nasdaq, Dow는 Fed 회의를 앞두고 투자자들의 금리 인상으로 하락 마감 — AMZN, META, MU, TSLA, PLTR 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789509895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=937b1548531416896a208cab353bef25747baa53e6bb5913f23c7bfa721f6d8a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bc4ea0b4db44200a402c",
          "headline": "규제 당국이 바퀴 없는 사이버캡을 사람이 운전할 수 있는지 묻는 후 TSLA 가장자리가 낮아짐",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789505855,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0015a1044a45251b75e62890f8a1f4b8bb9dd96703a0cba44b43117ee094df1d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "734a322e0ee18fc2919a",
          "headline": "Tesla, SpaceX 주가 밤새 상승: Elon Musk, 합병 추측 촉진, '밀접한 협력' 속에서 '힌트' 실행",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789455971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b45de987449ba7b66ed9151b2baf646fdce89e96f912ecf81230076b2ef62ae0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789644480,
      "signal": "중립·확인 대기",
      "netScore": 1.32,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.67,
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
          "score": -2.45,
          "level": "주의"
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
          "eventId": "f573290cd12f0f594035",
          "headline": "1 AI 주식은 다음 인프라 급증에서 Micron 및 Sandisk를 능가할 준비가 되어 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789644480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a427bb9c1c9c67e5bb654dfebc3e5402f132f342d658561512fff870c495e10",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ba7d40219ea0b4a5d643",
          "headline": "최고점 대비 53% 하락한 오라클 주식을 매수해야 할까요? 대답이 당신을 놀라게 할 수도 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789641900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=89ca53f996bc74837ed19ca082d3adf2bd4d8eb896d901c0f7042bc7fd745324",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "25ffe673ac5013a0ba8e",
          "headline": "Oracle은 구조 조정으로 AI 스프린트 자금 조달에 도움이 되면서 2% 상승",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789579185,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfff713c4b1d3cd125ff2e7ef025bfcab04e23f0607199530fae1bf059a9c0a1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "a9cc191d7fece1ecb9c5",
          "headline": "예측: Oracle 주식에 투자된 1,000달러는 2030년까지 이만큼 가치가 있을 수 있습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789562100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae21232d1959f080abb0a255b06bb8e82026e0722060227cb4ef0a0d4790bdae",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d696a8688f3eb1d181c5",
          "headline": "ORCL 주식이 5회 연속 하락: Traders Eye OpenAI 자금 조달 뉴스, 촉매제로서의 일본 클라우드 거래 가능성",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789539287,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3072fc34ebf8b4895e3bcf8dd6f19387d42d53700e522fc84297dad6d5bd12f5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "ddfcbab5d20cf6e0584a",
          "headline": "Oracle(ORCL), Post Quantum Cryptography를 갖춘 Java 27 출시",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789517892,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7090b2c12f87b8393dfedbe067a871f31a238eacb105d34a730efcb172993130",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "86e33445f188d4075d6f",
          "headline": "ORCL 주식이 시판 전 하락하는 이유는 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789463454,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b1620b1ab41d44b1ab71f2e01995ed08184563b8c062e4fac5c9c667216830b5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fa36b1beda9ea1dcb283",
          "headline": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789422834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0831fd07e88fc24cfe13",
          "headline": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789422834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789647107,
      "signal": "우호적 변화",
      "netScore": 4.76,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
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
          "score": 1.75,
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
          "eventId": "833b4ff6cdfd1b9f9709",
          "headline": "Snap, Nvidia, Amazon 및 Salesforce 거래로 사양 강화",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789647107,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44e080bf1d26e4f844b2bbc7dbc0f78b51541994f1f9c25a0d2062d6516f8d60",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3bfd4701f86d88ca6a98",
          "headline": "CRM 주가 상승: Dreamforce의 장기 판매 전망, 'SaaSpocalypse' 비평가 침묵",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789620245,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=54f28f738cda991c74eb1b02c899e4bed29d0ba02c71b2a36b1a8528e25a9906",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3795044e0a112d640b8b",
          "headline": "AI 업계에 대한 Salesforce의 Marc Benioff: 규제하지 않으면 고소당함",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789595336,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f1c30c4ab3c23865dfaa318975c2c6b609a0c724a655ea227fe00a330a9774a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "32115507146964400d88",
          "headline": "Salesforce의 250억 달러 규모의 자사주 매입은 매우 좋은 거래처럼 보입니다. Cramer는 \"주식을 악화시키는 것은 무엇이든 끝났습니다\"라고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789582516,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d39edd30a8d7ccaf87b457a81b7a98941975aebc2a2ad0c7c1a9442405a9363",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bc4c4b16409e85b23338",
          "headline": "AIforce가 460억 달러 규모의 전환 테스트에 직면하면서 Salesforce가 1.4% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789578949,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74a11599b9c8c1c583dee4dbf9891f5bb3b50039bd177d715ae177745f938d2f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7de1bfefbdd24e5f027a",
          "headline": "CRM SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1789570800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000210/crm-20260916.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "2df89d5586c920ea45e1",
          "headline": "NVIDIA(NVDA)는 Salesforce 거래로 인해 저평가된 견해를 촉발한 후 새로운 플랫폼 테스트를 받았습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789506958,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a740db073e65b758284a46c3b47fbb8f82ef2de169baf77c3457fe3f490655f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "41dd3fefc137fa35a3c9",
          "headline": "Dreamforce가 39억 달러 규모의 AI 엔진을 시험하면서 Salesforce가 미끄러졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789486515,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24e4f2f5249502eb40e171d322d9193341589e949ccd6162e862dcddf163f570",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789641035,
      "signal": "주의 강화",
      "netScore": -6.51,
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
          "score": -1.05,
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
          "score": -4.02,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.27,
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
          "eventId": "a505722a0a93321e153d",
          "headline": "Palantir의 실제 해자가 더욱 강해졌습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789641035,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f28126ccbe2f4c1e8750744e9da88067726f0409544a7d4542effdbb426eb61f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8d33421f1db4436d1cec",
          "headline": "Surf Air Mobility는 Palantir가 제공하는 Part 135 운영자를 위한 Surf Air Mobility의 SurfOS 비행 운영 소프트웨어인 OperatorOS에 대해 Sprintbach와 최종 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789626703,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6809f85e847c5a13a5f4ca09acc77b4fee653debbd262b0d4d68af8ad018dfa",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "ab20c9024f5b7716eeb1",
          "headline": "CMG 주식은 Palantir를 통한 AI 식품 안전 베팅에서 상승: ​​'온톨로지 부리토'에 대한 소매점 낙관",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789616447,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d8d069475dec364439dd0392f8cb3487c2ec7b8652f5ae48893d54afbf9ada4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "651799e9871e68378cc7",
          "headline": "S&P 500, Nasdaq, Dow는 Fed 회의를 앞두고 투자자들의 금리 인상으로 하락 마감 — AMZN, META, MU, TSLA, PLTR 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789509895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=937b1548531416896a208cab353bef25747baa53e6bb5913f23c7bfa721f6d8a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cd6ae5488138c31c055c",
          "headline": "Palantir는 AI 소프트웨어 주식 중에서 저렴해 보인다고 UBS는 말합니다 — PLTR이 더 많은 운영 여지를 가질 수 있는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789497588,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=638c2e5bea5033d976ca592dd5616e3876bea8b6fb40e7429789e5a00b544d69",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cb7ba6b14becc9e5568d",
          "headline": "Palantir의 CEO는 미래의 가장 큰 기회를 밝혔습니다. 그리고 AI 모델과는 거의 관련이 없습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789473900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28259ee6f958c93947dd89312674e1ed7c4a65baf608c23e056c0c8b4d38bd61",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789647107,
      "signal": "우호적 변화",
      "netScore": 9.93,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.45,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
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
          "eventId": "833b4ff6cdfd1b9f9709",
          "headline": "Snap, Nvidia, Amazon 및 Salesforce 거래로 사양 강화",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789647107,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44e080bf1d26e4f844b2bbc7dbc0f78b51541994f1f9c25a0d2062d6516f8d60",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a505722a0a93321e153d",
          "headline": "Palantir의 실제 해자가 더욱 강해졌습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789641035,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f28126ccbe2f4c1e8750744e9da88067726f0409544a7d4542effdbb426eb61f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a91dfe4340a66db9b99f",
          "headline": "Mark Cuban은 Meta와 Google이 기술 반대 콘텐츠를 통해 AI 미래에 자금을 조달할 수 있다고 말합니다: '아이러니를 보는 것은 흥미롭습니다...'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789638310,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=343666ce61901932db23b3c9ab4d27fd55ddbaa9df6e4ac8a6a2e636b5fab73f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "18e8091a8c737ecd4ae8",
          "headline": "시장 잡담: Blackstone, Alphabet AI 벤처, 220억 달러 칩 파이낸싱 세트",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789636214,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8d6688093ff2d5d87565eca051574e4c3e75354106665c36ba42c3b64b154d84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "45feba2e41b34ac3b288",
          "headline": "Micron 대 Sandisk: Nvidia의 2,790억 달러 경고로 인해 더 많은 혜택을 받는 AI 메모리 주식은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789609260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9a812f7c6276b6dbe30b6faed089ff1a5d5d1cf9747632e1853dc600d89b2a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ed5333705b669a584b33",
          "headline": "Vistra vs. Constellation vs. Talen Energy: AI-Power 베팅에 더 나은 핵 비중이 높은 주식은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789608300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99496230ce4388170765916aef66df953f4ba5c23501973c01d4e4669b848577",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9e82a76ae643e4eb05ec",
          "headline": "Salesforce Investor Day에서 AIforce, Claudeforce 및 630억 달러 규모의 2030 회계연도 매출 목표 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789606927,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=887b0c93cae4b51d4bf4246c4dc070bf49a88caad7e039736cbb773b174eefbc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "a48a5cf71485b1b31b15",
          "headline": "이제 Nvidia 수익의 4분의 1 이상이 대만에 기반을 둔 고객에게서 나옵니다. 투자자들이 걱정해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789606441,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9881a2e613fdbcfa5f3bcda437ece80848209d3b270749ae5c69d41de9a6c5e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "0173afcdec962f394987",
          "headline": "억만장자 Ron Baron은 Tesla 주식에 대해 매우 낙관적입니다. 그의 이유는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789604568,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea092f0d8c063de4e9f4cbb7a9ed053f6d80e3dc589e0e90c40c60e792b25b67",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8f4ab01e6e645d3edcc8",
          "headline": "Nvidia가 Miner와 55억 달러 규모의 AI 클라우드 거래를 성사시킨 후 IREN(IREN)이 6.1% 하락한 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789604294,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f2255dadc23c13fcdfe5ef36b98fb3db328469814174d39626c4b0922cc4fcb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "fc6802acb9e740e8e2af",
          "headline": "GOOGL, BX 주식 집중 — 은행 컨소시엄이 Blackstone-Alphabet 벤처에 220억 달러 규모의 AI 칩 자금 조달을 준비한 것으로 알려졌습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789594626,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9667e1d9c201a79dd8a97101af19fb2dbcdcd71efa091674e091d57e143c52a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "7dc1d5513e90ad3f3ec2",
          "headline": "Quanta Services는 530억 달러 규모의 AI 전력 백로그를 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789587241,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab4170a46f13b40dd080af7da746a8b7e14b34b591e556c46d5219e55200ca20",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 38,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789646701,
      "signal": "우호적 변화",
      "netScore": 8.18,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
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
          "score": -2.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 5,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "db9eda9c8855e1452a06",
          "headline": "Advanced Micro Devices vs. Texas Instruments: 2026년에는 어떤 기술주를 구매하는 것이 더 나을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789646701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f859838e3d3e875549086eb00639b694704485400e9b069447dc1bcf9e980029",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a91dfe4340a66db9b99f",
          "headline": "Mark Cuban은 Meta와 Google이 기술 반대 콘텐츠를 통해 AI 미래에 자금을 조달할 수 있다고 말합니다: '아이러니를 보는 것은 흥미롭습니다...'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789638310,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=343666ce61901932db23b3c9ab4d27fd55ddbaa9df6e4ac8a6a2e636b5fab73f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "18e8091a8c737ecd4ae8",
          "headline": "시장 잡담: Blackstone, Alphabet AI 벤처, 220억 달러 칩 파이낸싱 세트",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789636214,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8d6688093ff2d5d87565eca051574e4c3e75354106665c36ba42c3b64b154d84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "45feba2e41b34ac3b288",
          "headline": "Micron 대 Sandisk: Nvidia의 2,790억 달러 경고로 인해 더 많은 혜택을 받는 AI 메모리 주식은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789609260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9a812f7c6276b6dbe30b6faed089ff1a5d5d1cf9747632e1853dc600d89b2a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9e82a76ae643e4eb05ec",
          "headline": "Salesforce Investor Day에서 AIforce, Claudeforce 및 630억 달러 규모의 2030 회계연도 매출 목표 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789606927,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=887b0c93cae4b51d4bf4246c4dc070bf49a88caad7e039736cbb773b174eefbc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "a48a5cf71485b1b31b15",
          "headline": "이제 Nvidia 수익의 4분의 1 이상이 대만에 기반을 둔 고객에게서 나옵니다. 투자자들이 걱정해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789606441,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9881a2e613fdbcfa5f3bcda437ece80848209d3b270749ae5c69d41de9a6c5e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "0173afcdec962f394987",
          "headline": "억만장자 Ron Baron은 Tesla 주식에 대해 매우 낙관적입니다. 그의 이유는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789604568,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea092f0d8c063de4e9f4cbb7a9ed053f6d80e3dc589e0e90c40c60e792b25b67",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "fc6802acb9e740e8e2af",
          "headline": "GOOGL, BX 주식 집중 — 은행 컨소시엄이 Blackstone-Alphabet 벤처에 220억 달러 규모의 AI 칩 자금 조달을 준비한 것으로 알려졌습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789594626,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9667e1d9c201a79dd8a97101af19fb2dbcdcd71efa091674e091d57e143c52a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7dc1d5513e90ad3f3ec2",
          "headline": "Quanta Services는 530억 달러 규모의 AI 전력 백로그를 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789587241,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab4170a46f13b40dd080af7da746a8b7e14b34b591e556c46d5219e55200ca20",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "32115507146964400d88",
          "headline": "Salesforce의 250억 달러 규모의 자사주 매입은 매우 좋은 거래처럼 보입니다. Cramer는 \"주식을 악화시키는 것은 무엇이든 끝났습니다\"라고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789582516,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d39edd30a8d7ccaf87b457a81b7a98941975aebc2a2ad0c7c1a9442405a9363",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "95eef6e689c6fec25cdb",
          "headline": "예측: 현재 대만 반도체(TSMC)에 투자된 1,000달러의 가치는 10년 말까지 이만큼 가치가 있을 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789581900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db035b591ca8903280685f01b101a1217a2745dd6d71144f697a151f9c7e4279",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "b4be506878b12d1a323f",
          "headline": "Advanced Micro Devices 주식이 갑자기 폭등한 이유",
          "eventLabel": "내부자 매도",
          "publishedAt": 1789581479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11e36c0c47e0fefc439342b8ed3badebb60307e59055f32cc0374e5305131218",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 32,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789649485,
      "signal": "주의 강화",
      "netScore": -4.06,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -2.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.75,
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
          "eventId": "8b13e952fa127be9ae8d",
          "headline": "과대 광고에도 불구하고 Broadcom은 계속 옆으로 기울고 있습니다. 월스트리트 분석가는 곧 75%의 수익을 제공할 것이라고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789649485,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=618e749b92ba5ebb35884d35db4870ba5fae1d641a26a90fff36a3aa04717064",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fafbc923f8893d0a96d7",
          "headline": "Hock Tan은 방금 Broadcom의 AI 수익이 2028년까지 2,300억 달러에 도달하도록 안내했습니다. 그를 믿어야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789578300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7479728aeecc51178bfe5c1288f857aa3fd5cbf8cf29b6e9ded4d4a967134e72",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "63482f4f4c9833cd1952",
          "headline": "Broadcom의 가장 큰 고객은 AI 속도를 늦추기를 원하며 여전히 구매 중입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789477204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ecdc138706f4585bbc86b0085bf0ebf3be910adb813656cfc39510626a2fd90",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2543381a2e0f2eaf8fd7",
          "headline": "Broadcom의 실제 제약은 수요가 아닙니다. 공급입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789475218,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e96996b1a5bd3ab418e03e965cde68da13a9d89d81f37c97a72eed40e089a30",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d6bd7213d2d299f254dc",
          "headline": "Broadcom CEO Hock Tan, 2,300억 달러 규모의 AI 칩 매출 목표 방어",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789470673,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3ebebd478c4862b49060cd207358ab883dbf83476d3c20bde53335d1766c2b4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789650726,
      "signal": "주의 강화",
      "netScore": -4.48,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.18,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.05,
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
          "score": -3.67,
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
          "eventId": "5701f04e01ac0f9b612d",
          "headline": "BofA는 Apple iPhone 수요가 더 높은 통신사 인센티브를 유지해야 한다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789650726,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=773c44a3dc1e3a9009d4b2133db121a5286ecaccde473b2515de3b661c269317",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "17cb6f5e6e35b5d1a198",
          "headline": "Amazon이 600억 달러 규모의 AI 문을 열면서 Qualcomm의 우위가 더욱 높아졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789579033,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f4cc2d0d3f7e3bbb7184938d40072a9180e59e71b97031f05e648821209947a6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d55edb3320abbea3b46b",
          "headline": "Apple에서 Tim Cook의 가장 결정적인 움직임은 AI와 관련이 없습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789555800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db732d605a24a75a773506774ccc7adc0510edccf1cae68f084a011a6594952a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "9927c6186faad952050d",
          "headline": "퀄컴 주가 급등. Amazon AI 칩 거래로 새로운 성장의 길 열다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789500904,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a09085e1224b7d222fe74b90a81b30fc3fdcde863033b121dbdac60706468a9a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d84101dd43db587b4a25",
          "headline": "퀄컴 쌓기 시작했는데 아마존과 메타 때문은 아니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789491333,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e485e125aac2c0892310b29c48014eee7c31b9422b3044c44a41584dbd81dfe5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7d0fbba28ef9104c3259",
          "headline": "어플라이드 머티어리얼즈 vs. 퀄컴: 2026년에는 어느 기술주를 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789473901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45da079c6df91916bb73bfc99fcc10f7c4724d722da16eb42437cb64d43331ee",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0416214ecdc2fb924bf4",
          "headline": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789445485,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789652729,
      "signal": "주의 강화",
      "netScore": -3.78,
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
          "score": -1.05,
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
          "eventId": "3ec29fd0bdd3cbab7916",
          "headline": "Arm CEO는 수요가 '차트를 벗어났다'고 말했습니다. 문제는 누구도 칩을 충분히 빠르게 만들 수 없다는 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789652729,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f46086f78b26ca4653489c57be690d52c9c36258ecad07adb12416985611277d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "60f526e50a15fa838e25",
          "headline": "인텔: 나쁜 제품은 없고 가격만 나쁠 뿐(등급 하향)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789493921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24253218157182bdae74306508e7f30ef1f0e4b3be7679ed837b8e25702026a8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789644901,
      "signal": "중립·확인 대기",
      "netScore": -0.42,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.1,
          "level": "우호적"
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
          "score": -1.05,
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
          "eventId": "57838e7a60395e446c39",
          "headline": "Applied Materials vs. Marvell Technology: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789644901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a875a189f64df299bbbda4b0f41c50dd16aad4fc3822ae54920318dff3e52d64",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1719b65528d08497ad29",
          "headline": "Marvell 기술은 3개월 만에 25% 하락했습니다. 이 신뢰할 수 있는 분석가는 내년에 75%의 수익이 나올 것이라고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789643764,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=92ef61a28484e39e2b1664bc9dcdbe4fa2ae328dfdea03e51c6eb9aa4a7f7541",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e49fd3bad1f0edfeb573",
          "headline": "Marvell Tech, GlobalFoundries, 미국 칩 거래 확대",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789636867,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f005032ea95bd6cf0f4e462f01175be11ccf8429c34d275ecfde737bad817318",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a51ce86c031a63f17991",
          "headline": "GlobalFoundries와 Marvell Technology는 광 연결에 대한 수요를 지원하기 위해 버몬트주 벌링턴 시설에서 GFS의 실리콘 게르마늄 기술 용량을 늘리기 위해 다년 계약을 확장합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789634371,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82f85dedfb64aa46e2ddc20757e356809f6bda170de8260e400f17545c8932f3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "7e3c1b8e6bc92400c87d",
          "headline": "AI 붐에는 비밀 무기가 있는데 바로 마블입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789486213,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac7a8728ad8901634fc0ef1272c7c4607c5dc0a89015d347b657db3bda065c13",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789657831,
      "signal": "우호적 변화",
      "netScore": 3.29,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.98,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.9,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.4,
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
          "score": 0.53,
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
          "eventId": "d208aa2a13926a520b36",
          "headline": "SK 하이닉스는 인텔 파운드리 요구 사항의 촉매제가 될 수 있음(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789657831,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb27650eb491973c4390966297e2592051bfddcb48d33192f813d330221dd153",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5e19dabc79f5ef3b8eb4",
          "headline": "Apple, 큰 에미상 수상 발표: 마케팅이 큰 역할을 할 것인가?",
          "eventLabel": "실적 발표",
          "publishedAt": 1789646400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c4166d6c71eac5a4e7a5eb8ce13cd476a78192626a54e7709fde139023d0d64d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "67b2785eb60e51222106",
          "headline": "SK 하이닉스와 인텔, 미국 메모리 칩 파트너십 모색",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789645645,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09d743508a12996cad3b984adbe9e611ee2c0ee3a03e7c49ff8790a634852520",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "6eaf2420474cbaaba4d3",
          "headline": "분석가는 인텔 주식이 2년 안에 거의 두 배인 200달러까지 오를 수 있다고 말합니다. 잠재적인 Apple, Tesla 및 AI 칩 거래가 랠리를 촉진할 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789633557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f4ce671b50ebaa102ac50a24bad5212b70b6456b06fe521e79b0264e72e4e62",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2d488242cb18fc0a10df",
          "headline": "SK 하이닉스가 미국 메모리 칩 거래를 검토함에 따라 인텔 주가가 급등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789606980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1b460a281bf28f86bc247d2c0ba27ca6422bbe9bea082111dd82cd5b4a483c50",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "be35486f0ef2f0039df3",
          "headline": "S&P 500, Nasdaq, Dow Futures는 투자자들이 2023년 이후 일등 금리 인상을 소화함에 따라 인치 더 높아졌습니다 — INTC, GOOGL, AAPL, SKHY, UAL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789601382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=00168ac6217c2b77e67234d7da7eae404e2a005b371afb30ac7684cbf96cb7a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4f8a513e0fad1109017d",
          "headline": "Apex Clean Energy, 텍사스 프로젝트의 태양광 발전을 위한 Meta와 PPA 계약 체결",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789577449,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=738d8766890a32e92342a11c7507548748ef5f9b5792774f56087daf98050952",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b874ed6bfec33d8433aa",
          "headline": "주요 정오 뉴스: 시장은 연준의 주요 금리 결정을 기다리고 있습니다. SK하이닉스, 미국에서 칩 생산 위해 인텔과 거래 모색",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789573538,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9a171cfe1628977e26fc286fe7db700a421226ea642a4f71747a7eb9209def6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8f11244dfd44b65afb64",
          "headline": "인텔 주식 투자자들은 이 잠재적인 SK 하이닉스 거래에 주목해야 합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789572374,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7dcf7e24c08cf5be41d8efe2e839bb4298eb1c7bd23210b12df26457d69c618d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "91740a818f95262c5a58",
          "headline": "메모리 제조사가 인텔과의 잠재적 거래 보고에 대응하면서 SK하이닉스 주가가 급등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789563508,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a6c72bd0bc5edb668e73d1b55bdcfed9598afb680d50146a2370c6132c8ba42",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "be68fc37ec0520421f2b",
          "headline": "인텔은 4% 상승, SK하이닉스는 오하이오 캠퍼스에서 메모리 칩 제조 협상 보고에 3% 상승; 마이크론은 평탄한 상태를 유지",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789562373,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf2b4193a38b60bb74c14ee5664c161e79694ba18e28ba25e2f7f3a8efcd60a0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9c997994fdcaa7c3b408",
          "headline": "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까? INTC, SKHY, ORCL, SPCX, ASTS, CRCL, COIN 주식에 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789547564,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b04351b6a1f3e365dc88e64a6e7379760ffbc892797f0c86bbbae4f505ac12e2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 20,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789569935,
      "signal": "주의 강화",
      "netScore": -5.18,
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
          "score": -1.75,
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
          "eventId": "1fedf9e7db46cfa0d1eb",
          "headline": "Taiwan Semiconductor는 당신이 생각하는 이유가 아닌 반복 구매에 대해 생각할 필요가 없습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789569935,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1db507c101649f9080d3b3610c1e37c68d3856097f3deb02b2b0610eb64e0c81",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "692ef92f49e0b4cb0349",
          "headline": "ASML 대. 대만 반도체 제조: 하나가 더 오해를 받고 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789566011,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d4485437bdbb25eab7aa5b1cb32e77f6e248dd4cdfc25e701eaf76eee2e61b2c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cb43b8aee1c751382be3",
          "headline": "ASML vs. Taiwan Semiconductor Manufacturing: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789559101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2e9e4b68b3d1a3ce1a37a54e494f94c665cb44ec0c6871a6e5505f97c5f051d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9cdeb832d0e87e2bbbc9",
          "headline": "Zacks 투자 아이디어 주요 내용: Nvidia, Taiwan Semiconductor, Arista Networks, Dell Technologies, Hewlett Packard 및 Super Micro Computer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789482840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86be1487052bf9f91d895920708fbf05ac247b0ccde50cc7dca7796d04f04d15",
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
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789566011,
      "signal": "주의 강화",
      "netScore": -3.57,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.35,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.05,
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
          "score": -1.22,
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
          "eventId": "692ef92f49e0b4cb0349",
          "headline": "ASML 대. 대만 반도체 제조: 하나가 더 오해를 받고 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789566011,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d4485437bdbb25eab7aa5b1cb32e77f6e248dd4cdfc25e701eaf76eee2e61b2c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cb43b8aee1c751382be3",
          "headline": "ASML vs. Taiwan Semiconductor Manufacturing: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789559101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2e9e4b68b3d1a3ce1a37a54e494f94c665cb44ec0c6871a6e5505f97c5f051d",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789644901,
      "signal": "중립·확인 대기",
      "netScore": -1.74,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "eventId": "57838e7a60395e446c39",
          "headline": "Applied Materials vs. Marvell Technology: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789644901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a875a189f64df299bbbda4b0f41c50dd16aad4fc3822ae54920318dff3e52d64",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "955ac7163c9cde1ca791",
          "headline": "어플라이드 머티어리얼즈, 향후 10년간 인도에 50억 달러 투자 계획",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789640579,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=80473c81638ee911702503611b2cd0b520c60173dad058e383246ef2b46288f8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7d0fbba28ef9104c3259",
          "headline": "어플라이드 머티어리얼즈 vs. 퀄컴: 2026년에는 어느 기술주를 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789473901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45da079c6df91916bb73bfc99fcc10f7c4724d722da16eb42437cb64d43331ee",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1789701345.6365337,
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
      "updatedAt": 1789701345.6365337,
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
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789663608,
      "signal": "우호적 변화",
      "netScore": 4.11,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 4.55,
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
          "eventId": "58e363724038c828b5ca",
          "headline": "마이크론과 메모리 병목 현상",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789663608,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8835dbc6cf9a961c6bb02f393a1d12ffde10628584ebd1168c097f37fa72d7f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5701f04e01ac0f9b612d",
          "headline": "BofA는 Apple iPhone 수요가 더 높은 통신사 인센티브를 유지해야 한다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789650726,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=773c44a3dc1e3a9009d4b2133db121a5286ecaccde473b2515de3b661c269317",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "a91dfe4340a66db9b99f",
          "headline": "Mark Cuban은 Meta와 Google이 기술 반대 콘텐츠를 통해 AI 미래에 자금을 조달할 수 있다고 말합니다: '아이러니를 보는 것은 흥미롭습니다...'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789638310,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=343666ce61901932db23b3c9ab4d27fd55ddbaa9df6e4ac8a6a2e636b5fab73f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "18e8091a8c737ecd4ae8",
          "headline": "시장 잡담: Blackstone, Alphabet AI 벤처, 220억 달러 칩 파이낸싱 세트",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789636214,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8d6688093ff2d5d87565eca051574e4c3e75354106665c36ba42c3b64b154d84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "45feba2e41b34ac3b288",
          "headline": "Micron 대 Sandisk: Nvidia의 2,790억 달러 경고로 인해 더 많은 혜택을 받는 AI 메모리 주식은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789609260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9a812f7c6276b6dbe30b6faed089ff1a5d5d1cf9747632e1853dc600d89b2a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9e82a76ae643e4eb05ec",
          "headline": "Salesforce Investor Day에서 AIforce, Claudeforce 및 630억 달러 규모의 2030 회계연도 매출 목표 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789606927,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=887b0c93cae4b51d4bf4246c4dc070bf49a88caad7e039736cbb773b174eefbc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "a48a5cf71485b1b31b15",
          "headline": "이제 Nvidia 수익의 4분의 1 이상이 대만에 기반을 둔 고객에게서 나옵니다. 투자자들이 걱정해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789606441,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9881a2e613fdbcfa5f3bcda437ece80848209d3b270749ae5c69d41de9a6c5e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "0173afcdec962f394987",
          "headline": "억만장자 Ron Baron은 Tesla 주식에 대해 매우 낙관적입니다. 그의 이유는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789604568,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea092f0d8c063de4e9f4cbb7a9ed053f6d80e3dc589e0e90c40c60e792b25b67",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "fc6802acb9e740e8e2af",
          "headline": "GOOGL, BX 주식 집중 — 은행 컨소시엄이 Blackstone-Alphabet 벤처에 220억 달러 규모의 AI 칩 자금 조달을 준비한 것으로 알려졌습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789594626,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9667e1d9c201a79dd8a97101af19fb2dbcdcd71efa091674e091d57e143c52a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7dc1d5513e90ad3f3ec2",
          "headline": "Quanta Services는 530억 달러 규모의 AI 전력 백로그를 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789587241,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab4170a46f13b40dd080af7da746a8b7e14b34b591e556c46d5219e55200ca20",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "3091a0c66ecee58e87f4",
          "headline": "마이크론 주식은 저렴한가, 아니면 이익을 차입하는가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789585378,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bef9944509ea3cf0012f085ef87115921cfb6f00b9decbe3f66f97e5b79f39c9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "32115507146964400d88",
          "headline": "Salesforce의 250억 달러 규모의 자사주 매입은 매우 좋은 거래처럼 보입니다. Cramer는 \"주식을 악화시키는 것은 무엇이든 끝났습니다\"라고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789582516,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d39edd30a8d7ccaf87b457a81b7a98941975aebc2a2ad0c7c1a9442405a9363",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 36,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789644480,
      "signal": "주의 강화",
      "netScore": -2.38,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
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
          "score": -1.4,
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
          "eventId": "f573290cd12f0f594035",
          "headline": "1 AI 주식은 다음 인프라 급증에서 Micron 및 Sandisk를 능가할 준비가 되어 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789644480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a427bb9c1c9c67e5bb654dfebc3e5402f132f342d658561512fff870c495e10",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a81298f51aa31b342fbe",
          "headline": "SNDK 주식은 이전에 딥 구매자에게 보상을 받았지만 여전히 같은 회사입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789485090,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9024c47232dd90e524c5f0c4260c38d28f3ee443361b404fe93f92eb86dcb1c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fe6021cf666bf6af0d70",
          "headline": "SNDK SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1789484400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026062267/sndk-20260910.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "426edf304ec5572e0d5f",
          "headline": "SNDK, AI 스토리지 성장 활용: MU 및 STX를 능가할 수 있을까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789481640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ab152b6e703157b1d6f11642c064b1e41f40d6bdb2e5e71e84b8b10ac0af183",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ff2b8e4713a284a821e3",
          "headline": "차세대 인프라 병목 현상으로 인해 Micron 및 Sandisk를 능가할 3가지 AI 주식",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789472700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f360aa56f15b34bd05cab5f5f70875eec577478da7f8f69be14e92f44077be5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50226a5e93c94d2dae2b",
          "headline": "SKHY, MU, SNDK를 조심하세요: 일본의 KIOXIA는 AI 메모리 붐을 타고 100억 달러 규모의 미국 상장을 주목하고 있는 것으로 알려졌습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789458532,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a98ae0ca329afb8b781d88770532343287f62f1fa376ffa6883bd19032c5434",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "736e6c7bdd834dc87f7d",
          "headline": "자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789413156,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0a6793ba3a2c331f1f62688ec5ecc953b11ea5b426897bc3da48486cc550ac5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789650726,
      "signal": "주의 강화",
      "netScore": -3.78,
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
          "score": -1.05,
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
          "eventId": "5701f04e01ac0f9b612d",
          "headline": "BofA는 Apple iPhone 수요가 더 높은 통신사 인센티브를 유지해야 한다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789650726,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=773c44a3dc1e3a9009d4b2133db121a5286ecaccde473b2515de3b661c269317",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "d55edb3320abbea3b46b",
          "headline": "Apple에서 Tim Cook의 가장 결정적인 움직임은 AI와 관련이 없습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789555800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db732d605a24a75a773506774ccc7adc0510edccf1cae68f084a011a6594952a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789482840,
      "signal": "중립·확인 대기",
      "netScore": 0.7,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.35,
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
          "eventId": "9cdeb832d0e87e2bbbc9",
          "headline": "Zacks 투자 아이디어 주요 내용: Nvidia, Taiwan Semiconductor, Arista Networks, Dell Technologies, Hewlett Packard 및 Super Micro Computer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789482840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86be1487052bf9f91d895920708fbf05ac247b0ccde50cc7dca7796d04f04d15",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789562448,
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
          "eventId": "7a90203ac70ad0bb73c8",
          "headline": "Coherent: 사후 수정 알파 블루프린트(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789562448,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a0f2577630d562aa97e48af99aeab3b8f447cdb573d2945090ba67697c72765",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789569975,
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
          "eventId": "5fd98ae0308e1f85d98e",
          "headline": "과매도 바운스가 유지됨에 따라 광학 주식 반등: Coherent 점프 6%, Lumentum 상승 5%, Applied Optoelectronics 3% 발전",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789569975,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=89ba1fc92e48270cbd2d0e8b36308c53992dc7798c97682a2695ffa4a99caf17",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789610913,
      "signal": "주의 강화",
      "netScore": -2.94,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.23,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.05,
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
          "score": -4.38,
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
          "eventId": "66a3c3cabdeb15390d18",
          "headline": "BE, FCEL, GEV 주식이 밤새 상승하는 이유는 무엇입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789610913,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=124f9a8dc5800c516c86e8cbedd62179daed98c4f5aee89064a1177bbe0e0e7f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a10d59ac551b320a7074",
          "headline": "GE Vernova 주식이 수요일에 폭락한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789602962,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0a11e3f30f0e1b24d2dd48d6253a8a5e31085eb3f27229730c4b055c7dba1e90",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fa32306b0b822852cd89",
          "headline": "GE Vernova는 이전 매도 이후 6% 반등했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789582140,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cabdba99214af166df5838072d0630335e25e7a430e64bf167f86f5ccf1d4683",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fbcdaa48aa358a89a1cd",
          "headline": "CEO가 '내구성 있는 수요'를 신호한 후 GEV 주가 상승, 2030~2040년은 '더 나은 10년'이 될 수 있다고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789577597,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ed85dbb5fe8f149a6e8240909d7fa83c28ac3afad7c15039c50dcc7164c59a3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ff7af9360e95b1f05851",
          "headline": "GE Vernova, Eurus Energy에 29.4MW 풍력 용량 공급",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789552800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbbc1b9577592181744a08cc32b2b6efd8544e93b8768f156ffdc35cc71ba36c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "559dc483d0924f8e4a17",
          "headline": "GE Vernova는 파트너 Blue Energy가 BWRX-300 소형 모듈형 원자로 건설 허가 신청서의 첫 번째 부분을 미국 원자력 규제 위원회에 제출했다고 발표했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789551421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=231200261b3d5560790f5f14eddff26a17eb38b79471d81d3a49b8a3cec1fc3d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "69fd6db869a5cf4b5962",
          "headline": "GE Vernova가 베네수엘라에서 대규모 계약을 체결했습니다. 이 뉴스만으로 주식을 매수할 수 있나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789547700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16a145af9012e9c0b2e05d7db2338ac19aa8973d59271faa479c2c31651d5ba4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "55584eb1cecb323b96e8",
          "headline": "Bloom Energy vs. GE Vernova: 2026년에는 어느 주식을 사는 것이 더 나을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789483395,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a792e5c47f739cfecf0b4caef4d9ff51b40cbb84763725e2cfc253ead33377",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cc92d86dd4094ccba548",
          "headline": "GE Vernova, 일본 풍력 발전 단지에 터빈 공급 예정",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789481701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc1b9166f31dbd9db487213fa2f2fbf1a4b787e7f220539f62f3661cd0bea689",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789531431,
      "signal": "우호적 변화",
      "netScore": 2.8,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
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
          "score": 0.7,
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
          "eventId": "1e2e3da049e2755aba98",
          "headline": "Shell과 Constellation Energy, 7억 1500만 달러 규모의 전력 거래 성사",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789531431,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c836ad7ba737b36e691be0e1c075c90a443368f1f3d34c76f261721bfd0b0a2a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ae102a98e090cc8cf74",
          "headline": "Constellation Energy(CEG) 주식은 7억 1,500만 달러 규모의 발전소 거래에도 불구하고 적정 가치보다 낮을 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789428007,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfb5762b256eccdb074d6e0fd3553ba3cb1cbc2f2884e68baea77c0eff683ed4",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789608300,
      "signal": "중립·확인 대기",
      "netScore": -1.26,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.35,
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
          "score": -0.35,
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
          "eventId": "ed5333705b669a584b33",
          "headline": "Vistra vs. Constellation vs. Talen Energy: AI-Power 베팅에 더 나은 핵 비중이 높은 주식은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789608300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99496230ce4388170765916aef66df953f4ba5c23501973c01d4e4669b848577",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789567920,
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
          "eventId": "745bca17d48a6d2ce704",
          "headline": "Eaton Corporation, ISNetworld®를 계속 활용하여 EMEA 전역에서 하청업체 관리 확장",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789567920,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a5e234914940c9cd4d66f5dc88765b286bf3c64359a40a76cd12326c72878be8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789587241,
      "signal": "중립·확인 대기",
      "netScore": 1.04,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.52,
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
          "eventId": "7dc1d5513e90ad3f3ec2",
          "headline": "Quanta Services는 530억 달러 규모의 AI 전력 백로그를 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789587241,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab4170a46f13b40dd080af7da746a8b7e14b34b591e556c46d5219e55200ca20",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
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
      "updatedAt": 1789701345.6365337,
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
    "VRT": {
      "ticker": "VRT",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789515121,
      "signal": "중립·확인 대기",
      "netScore": 0.83,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "score": -0.7,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.17,
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
          "eventId": "9c94ea50538cbe59fe52",
          "headline": "Intuitive Machines vs. Vertiv: 2026년에는 어떤 산업재 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789515121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d6c78ff6bfbbb964f4b33f062c3d432fe0189c113d4dd9daa7b1dd6919e66999",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "811a1b43c3ebee36214d",
          "headline": "Vertiv(VRT) 주식은 26억 달러 규모의 AI 전력 거래에 따라 공정한 가격을 유지합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789456270,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=172c9eb73e0695be9d952800d218689e92478c03d0caa8c526a60ac6cf25553c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789570800.0,
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
      "evidence": [
        {
          "eventId": "d4e874f071bb4cce367d",
          "headline": "MOD SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1789570800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926108614/tm2625565d1_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "STX": {
      "ticker": "STX",
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789481640,
      "signal": "중립·확인 대기",
      "netScore": 0.7,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.35,
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
          "eventId": "426edf304ec5572e0d5f",
          "headline": "SNDK, AI 스토리지 성장 활용: MU 및 STX를 능가할 수 있을까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789481640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ab152b6e703157b1d6f11642c064b1e41f40d6bdb2e5e71e84b8b10ac0af183",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1789701345.6365337,
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
      "updatedAt": 1789701345.6365337,
      "dataAsOf": 1789569923,
      "signal": "중립·확인 대기",
      "netScore": 0.7,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.35,
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
          "eventId": "7d498e14639dfafd06a9",
          "headline": "Comfort Systems USA(FIX)는 가속화된 AI 투자로 이익을 얻을 수 있는 위치에 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789569923,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=108101da1dab27fe80e43574f59164a0693c64bfe0bb01d0fb093155161725fd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "BE": {
      "ticker": "BE",
      "updatedAt": 1789701345.6365337,
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
