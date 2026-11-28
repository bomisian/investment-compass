// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1795895471.2363088,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795872842,
      "signal": "주의 강화",
      "netScore": -2.24,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "score": -2.8,
          "level": "주의"
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
          "eventId": "0665d92292f15b9d3f87",
          "headline": "VGT vs. QQQ: 2027년에는 어떤 기술 ETF가 더 나은 매수인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795872842,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=386e9a9dc836dc06542e3667e2ef8113dd0b908235cc03e76c75a1576879fdd0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c5eaea646566f514912d",
          "headline": "데이터 보호 수요가 가속화됨에 따라 개인 정보 보호를 강화하는 컴퓨팅 시장은 2030년까지 164억 9천만 달러에 도달할 것입니다. Microsoft, IBM, Cisco 및 Oracle이 AI, FHE 및 클라우드 보안을 가속화합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795790160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb9d9066d9a3db6a399429683ce0a97745760627727005ec4f0cc60049fd28cf",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3834ba54a528e60cda5c",
          "headline": "AI 기반 공급망 계획 소프트웨어 시장 보고서 2026 | Microsoft, Oracle, SAP 및 IBM을 통해 2030년까지 CAGR 24.8% 및 매출 267억 2천만 달러를 활용하세요.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795789920,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2b297adeeeb3d8722ac8207e190f3fca1cca42269d9c50f7e9dc512fbc40ed9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7ea5b3dee28f5f4f3e3c",
          "headline": "마이크로소프트: 추수감사절 만찬에 부조종사 초대",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795680000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ede980a35f3b6f66bed0acdf99d20bf1fa4ba27cc85718bbbd40699e32d2c63",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "db44d14642333ea76283",
          "headline": "마이크로소프트의 영주권 신청은 대량 해고 이후 눈에 띄는 패턴을 드러낸다. 트럼프의 새로운 규정으로 인해 스폰서십이 2년 동안 중단될 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795650487,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50a30bb11dcb9838d602bc541d5cb1ba3446c6f63216bea4dc6ea7009ee03417",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6d765f9801a10cc8f6f",
          "headline": "PINS의 새로운 Microsoft 광고 거래가 경쟁 우위를 강화할 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795622340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=901b40018919cf3a0535968d6f6df1a430f67812643e36779c8dae548a4c3ac1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795730875,
      "signal": "중립·확인 대기",
      "netScore": -0.77,
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
          "eventId": "62c6d974a94f1bcbb002",
          "headline": "Jim Lebenthal은 이것이 \"더 나쁜 것이 아니라 수정\"이라고 말합니다. 그가 알파벳을 더 많이 사는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795730875,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf8415427f321c22becf7ce542f6e537f7aed420bc85c95c2ceffd1485506a28",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "78b4293e28b885f5207e",
          "headline": "Tepper는 알파벳을 46%까지 줄이고 Micron과 Oracle을 지원하면서 Broadcom과 AMD를 제치고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795695305,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bdc426d908017f10bca2c77adfabda1a60a7364765a771393f3e9e5e31e66b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "acef17698a1c091172b4",
          "headline": "UBS의 425달러 목표는 Broadcom의 매각이 너무 멀리 갔다고 말합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795693883,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddb6b035b8e9da0e66351567114e458711fab79ead56c81a3d766b3bc161500e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89d131430a6e6b0016b6",
          "headline": "Google이 TPU 주문을 삭감한 것으로 알려지자 Broadcom은 일주일 만에 15% 하락하여 52주 최저치를 기록했습니다. 판매가 과도합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795681834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9f3e25b8b6dc31052278b99a543bbc59832541a1aad00ce40a8ece1e6c868983",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8032953b222dc7a6e5d2",
          "headline": "Bill Gurley: 투자자들은 \"실제로 Anthropic을 소유하기 위해 애쓰지\" 않았습니다. 그것은 Amazon과 Alphabet의 문제입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795650186,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccb83e0bd6299a160bd26c2c7dab41080b62eb966bf96d125c76f3e43f010e28",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f68a2a1f4af6009d072d",
          "headline": "구글이 호주의 대규모 뉴스 거래에서 물러나면서 알파벳 주가가 급락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795626890,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e3cfa996ee24a054a8efadb4a54928eb459a3efbf4d78eb0abb2d78edc8e466",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795781978,
      "signal": "우호적 변화",
      "netScore": 3.71,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.27,
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
          "score": 0.88,
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
          "eventId": "6321636cbdb33c31928f",
          "headline": "은행들이 AI 부채를 버리는 중: HSBC는 스타게이트 대출을 약 15% 할인된 가격에 판매했습니다. Oracle에 대한 나쁜 소식",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795781978,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36a7c34262f82bfba8022fde4b9c0eef783929fcf23892fc89403fa148950de3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "fae88e51c5c19edc57bb",
          "headline": "Michael Burry는 Nvidia, Oracle 및 Meta가 부채 보험 비용 급증에 직면하면서 AI 붐에 대한 엄중한 경고를 공유합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795761088,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=939496e0b643ce0dbbf96b87b6097cf073e8fd6a5a7c94d1f7f5b90c0d704245",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "8032953b222dc7a6e5d2",
          "headline": "Bill Gurley: 투자자들은 \"실제로 Anthropic을 소유하기 위해 애쓰지\" 않았습니다. 그것은 Amazon과 Alphabet의 문제입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795650186,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccb83e0bd6299a160bd26c2c7dab41080b62eb966bf96d125c76f3e43f010e28",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "500da79913088ca631b2",
          "headline": "100만 개의 AI 위성을 궤도에 올리겠다는 머스크의 계획이 미국의 승인을 받았습니다. 아마존은 그것이 가능한지 질문합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795648590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1941f15a07a41c34a8084c1a2b761aff803fe78d8f61ebbbb01e846ba6c475a6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795823426,
      "signal": "주의 강화",
      "netScore": -3.58,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.53,
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
          "score": -2.45,
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
          "eventId": "b0b9efc7c7b2774c36a2",
          "headline": "메타 플랫폼: Capex를 넘어 2027년 효율성 향상(업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795823426,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=685e72c5b074ef6edd86498674bb355490a45f6c5b7a1507151479afe641abe0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f277951226bf8e236fab",
          "headline": "Amazon은 두 달 전에 Meta의 Muse를 차단했습니다. 이제 Let It Shop에 대한 논의가 진행 중이며 Walmart는 이미 그렇게 했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795780363,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9829ce22ba3ae649f1905447962625a669c08b5d71a9ca6286bd1d01f2e6777c",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f8832988b2df49835903",
          "headline": "Amazon이 AI 쇼핑 에이전트를 다시 도입하는 데 무게를 두고 있는 것으로 알려졌는데 메타 주식을 매수해야 합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795779182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d0a569afff0aed9d27cb9a7eb0bb81e9aa5de357792b91faa80eb57370ea8a2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fae88e51c5c19edc57bb",
          "headline": "Michael Burry는 Nvidia, Oracle 및 Meta가 부채 보험 비용 급증에 직면하면서 AI 붐에 대한 엄중한 경고를 공유합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795761088,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=939496e0b643ce0dbbf96b87b6097cf073e8fd6a5a7c94d1f7f5b90c0d704245",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2dae1e8e06fc84abcf23",
          "headline": "Meta, 540만 개 이상의 콘텐츠 제한에 대한 인도 소송에 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795716137,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57078ac4f1cf97da28d88700a8a08d6701b3d8be0260b1de181edf4ddff5d105",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795872842,
      "signal": "우호적 변화",
      "netScore": 5.94,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.67,
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
          "score": -1.75,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 1.57,
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
          "eventId": "0665d92292f15b9d3f87",
          "headline": "VGT vs. QQQ: 2027년에는 어떤 기술 ETF가 더 나은 매수인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795872842,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=386e9a9dc836dc06542e3667e2ef8113dd0b908235cc03e76c75a1576879fdd0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aa42f3a2476181bce151",
          "headline": "OpenAI, 애플이 공급업체를 \"강압하고 위협\"하고 있다고 비난하며 반격",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795870661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d4167528aa5a7ae082faf51149081335cd239205b9846c195eb9be630e8178c2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0adcb70f1f05fd19dcab",
          "headline": "Apple의 COO가 3일 만에 3,900만 달러의 주식을 매각하겠다고 신청했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795868317,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3b146041f0b8237fe20a3f57183ee41bcc00645922b236cbc25fd034223ea174",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c493b4667a13c82fcd1e",
          "headline": "OpenAI, 영업 비밀 및 하드웨어 공급업체에 대해 Apple에 반격을 가한 것으로 알려짐",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795810433,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9d4de8b3ce299eb8c03a11402f34abe6fe28db92428496722e8ac172df850ea2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "c7b016820ef4635b17bb",
          "headline": "Apple, 이제 미국 스마트폰의 57%를 출하",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795786679,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efb201d0765979c5eb8245c78b13e828fdd7715711d45b91ca1049ae68df7c1d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4d98f99fa632eaedefe1",
          "headline": "Apple 주주들이 12월 분기를 주목해야 하는 이유는 무엇입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795784287,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3176609784fa504bb2195b112a6beea081af175754c9c4d7ca5267a8d97c944f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f9ab51a8d504ccd9ec4d",
          "headline": "VZ의 새로운 Apple 거래 및 로열티 혜택이 구독자 증가를 촉진할 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795706760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=59cfad9c0c780a8bf9be55f442088bd6535f9ab92a929129aab18428c3a9b0d9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "c0c59964d10b6a5b6c38",
          "headline": "Apple 임원이 사상 최고치보다 낮은 주가로 1,900만 달러 규모의 Apple 주식을 매각하겠다고 방금 신청했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795697875,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f0b2176c87cc2467f6a3be423a549dd918bd7cec8a863f6442c3787928cdaa3b",
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
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795878122,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.53,
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
          "score": -4.72,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.2,
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
          "eventId": "2835814ccf05b7f220fb",
          "headline": "Stellantis vs. Tesla: 2027년에는 어느 자동차 제조업체의 거대 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795878122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74c6f461f7f9614e6358539a6a2c7a4e2a7af2073897f21578cb1e5591aa1aff",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "96bded629aacb47d20ee",
          "headline": "Tesla, Optimus 로봇 제작을 위해 독일 기계 제조업체 EMAG의 자산 구매 신청",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795874025,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82cd173ddfc2d4dc82d5d97164323d768d885c61a434d5496bff3bad0e136d46",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d969b7f66a99509cbe83",
          "headline": "Elon Musk는 GOOGL이 SPCX에서 더 많은 컴퓨팅을 임대하는 데 '관심을 표명'했다고 말했습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1795852109,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ee61dd21242fe7e628550dffcc31705602c3432cc700bb40a314931ae9b7e6a",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3616128fd380bd23cc7b",
          "headline": "S&P 500, Nasdaq은 AI 낙관론이 다시 돌아오면서 1년여 만에 최고의 주를 마감합니다 — VZ, ANT, ADBE, TSLA In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795814986,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=062c6dc9674f05d9484818878dd1f4fe3421a09d91f9f95f021d086f85ff05c8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "03fc0c6bc29de9a2384a",
          "headline": "'슈퍼팬' 엘론 머스크는 테슬라가 상하이에서 생산을 늘리자 '중국은 멋지다'고 말했다: '미국과 중국이 협력할수록 둘 다 더 좋아질 것'",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795804203,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65e5f2744c4d8af91891d526001f2f87f450a8e01794dd5633bde1b2ee6345e8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "de18fd90aa4aba92cb38",
          "headline": "12월 이전에 Tesla 주식을 구매해야 할까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795732502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0243a4baabc6f280cd4f621cef4a3775f8bfc6f3cc228a63ada0817630f5c5f9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cd8782f0be57ea16e3b2",
          "headline": "XPeng, Tesla 주식 투자자의 큰 성장 베팅에 대한 지분 인상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795710760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5777f1d88ea012ca1ab7cffab89be06bbfbdd9b9ef47bfbd0379499ec62dd200",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "31c3e7b6b6099ac7b563",
          "headline": "JPMorgan은 S&P가 Tesla-SpaceX 합병에 대한 규칙을 포기할 수 있다고 말했습니다. SpaceX 보유자에게는 좋은 소식입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795693559,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca7788213e9a1f61b0dd77cfccf3f504925b8609a8a56d277921da43433e570a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1289100cec301fe3df4c",
          "headline": "Cathie Wood는 Tesla 합병 협상 중에 SpaceX를 더 많이 구매합니다. Ron Baron은 SpaceX가 하나의 데이터 센터에서 연간 500억 달러를 벌 수 있다고 말했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795663955,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e20a1c6864b0638103683a558a2c7228a0744bf93030d68b2b61b1dbc26e5cd8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795879219,
      "signal": "주의 강화",
      "netScore": -9.81,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.57,
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
          "score": -4.72,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -5,
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
          "eventId": "8c0904e81438b873cf12",
          "headline": "Bloom Energy는 AI 주식이 반등하면서 거의 7% 상승했습니다. 중요한 Oracle 번호는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795879219,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f68dc69e911569cd24bf590b95c3294a650dfac53d7cec417a681e1679172bcb",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c33d347d5afdc0a9cabf",
          "headline": "Oracle은 저를 실망시켰지만 AI 수익이 0에도 불구하고 주식 가치는 133달러이므로 저는 104달러에 구매하겠습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795801551,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f399fcf14a2962c86a6bd2df47d240a7e43b501d9610241b203ea886a39f926",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3834ba54a528e60cda5c",
          "headline": "AI 기반 공급망 계획 소프트웨어 시장 보고서 2026 | Microsoft, Oracle, SAP 및 IBM을 통해 2030년까지 CAGR 24.8% 및 매출 267억 2천만 달러를 활용하세요.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795789920,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2b297adeeeb3d8722ac8207e190f3fca1cca42269d9c50f7e9dc512fbc40ed9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "6321636cbdb33c31928f",
          "headline": "은행들이 AI 부채를 버리는 중: HSBC는 스타게이트 대출을 약 15% 할인된 가격에 판매했습니다. Oracle에 대한 나쁜 소식",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795781978,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36a7c34262f82bfba8022fde4b9c0eef783929fcf23892fc89403fa148950de3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "fae88e51c5c19edc57bb",
          "headline": "Michael Burry는 Nvidia, Oracle 및 Meta가 부채 보험 비용 급증에 직면하면서 AI 붐에 대한 엄중한 경고를 공유합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795761088,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=939496e0b643ce0dbbf96b87b6097cf073e8fd6a5a7c94d1f7f5b90c0d704245",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "919897ad086bfb946d54",
          "headline": "Oracle Corporation: 현재 최대 9% 이상의 수익률을 보이는 우선주 평가",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795735097,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea32c09d230891facc819c2279878d748fe5676d5dbe4e130ebd719a51890c04",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "74db7e49a186f661c26f",
          "headline": "은행들이 데이터 센터 대출을 청산하려고 시도하면서 오라클 주가는 100달러 아래로 떨어졌습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795710442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b38f3680b51d6a13bde96978f63cd152239796efeef44f764ac4e5845c0a308c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "78b4293e28b885f5207e",
          "headline": "Tepper는 알파벳을 46%까지 줄이고 Micron과 Oracle을 지원하면서 Broadcom과 AMD를 제치고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795695305,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bdc426d908017f10bca2c77adfabda1a60a7364765a771393f3e9e5e31e66b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec9358c78f42c96283c1",
          "headline": "Bloom Energy는 Oracle 215만주를 발행했습니다. 이제 오라클의 신용이 깨지고 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795692926,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5cf2f4b5ff4ec31e779c49bc9412efece52ac42cad704f1508a011af50301117",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b6f94f45bf5ed8c67fda",
          "headline": "Amazon과 CoreWeave의 부채는 어떻게 되나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795691211,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2f04636a6c47fc970bd019c82066156744d22c84a8c1de6cd2e1e99b2b44b5b8",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "182ecd4bd643807cb193",
          "headline": "AI 클라우드 매도세가 심화되면서 Nebius는 12% 급락, Oracle은 8% 하락; IBM 2% 상승: IBM은 더 안전한 AI 플레이인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795625761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=87d468dc76d07822bdf2bec8fd0a5e851f2f894174365b136e24b53f7e309707",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795791153,
      "signal": "주의 강화",
      "netScore": -2.44,
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
          "score": -1.4,
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
          "eventId": "7dd1a5b8cad062585820",
          "headline": "나스닥은 2008년 이후 최악의 11월을 피하려면 이틀이 필요하다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795791153,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d724c0f55500ee4fb07b63b9944eb7d89952a65c42a30ce4b4b4ab5f35b43f38",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5930d708ecc21ae7ccb9",
          "headline": "오늘 Salesforce 주식이 상승하는 이유는 무엇입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795779721,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d67eedb348a999b3408c4d29e45e5efd4eb339b47bb7a365c095d83617854f1b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "81767b0a8cdf61b64980",
          "headline": "AI 가격 변경에는 Salesforce 주식 투자자의 조치가 필요합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795756283,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=861bb08fcd0d56acc041536f55b14a416b6682ecb1e751dfda9fc3a40a2e0480",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795831778,
      "signal": "우호적 변화",
      "netScore": 7.49,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.45,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.9,
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
          "score": -0.52,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 1.4,
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
          "eventId": "a02785e3920e3f3a6f06",
          "headline": "Palantir Technologies(PLTR), 폴란드 국방 소프트웨어 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795831778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff063b6f5816a9abdf1b2fc0f707db6f47333a40c54c4a7a3335ef7410f3f63f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "573de024dd597ff56059",
          "headline": "Palantir의 새로운 군사 AI 계약은 놀라운 성과를 거두었습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795829820,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3cd4c26ec9995848a25417202e35db02cb15fb58f04014522968d4279e75629d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3b7c0978642a9ca3bc22",
          "headline": "Palantir 주식은 3억 달러 규모의 폴란드 국방 AI 거래로 3.72% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795807403,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f713f76ed3f459f7a733b1f06414f6728a646a5d99604592097787e65720be4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b9f9f6326a829be5d309",
          "headline": "PLTR 주식은 4개월 만에 최고의 주를 기록했습니다: Palantir Bags는 폴란드와 3억 달러 규모의 국방 거래를 보고했습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795804896,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4858721cd24be67d2629e6726ffad93affc6023211e6f054cf2c35f7ecf81c32",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "70479897d41f23bcbe14",
          "headline": "Palantir, 폴란드 국방부와 AI 방위 계약 가까워져",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795779137,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b55134f66b56bf9b71d0e457e91e3272482658a40bad9d1bba90f239e1223830",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cb7f17f82b89ac43a3aa",
          "headline": "11월 26일 보도, '폴란드 국방부, 금요일 팔란티어와 협약 체결' - 로이터",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795764652,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25b97f4bbf003c98234b14b3487e43076f3b9b8b30f8253d5cf91424198a3337",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "27f7f93213eece923c11",
          "headline": "Palantir는 최소 100만 달러 규모의 212개 거래를 성사시켰습니다. 성장에 대한 의미는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795709007,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c817d10f82c6db0f79e431bc217627194450b62f4dda53e6891a4847634169f",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795877042,
      "signal": "우호적 변화",
      "netScore": 9.75,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.67,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
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
          "score": -3.85,
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
          "eventId": "d814671661b465cb592c",
          "headline": "예측: Palantir와 Nvidia는 2027년 말까지 이만큼 가치가 있을 것입니다(힌트: 단 1개만 매수)",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795877042,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c30f0e78b82d26021fe3b178e6b1398398ac0496fc2d651aa8797a2b4886d2f",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "abeeec786aa53e08c88f",
          "headline": "Satya Nadella: \"Amazon이 그렇지 않다면 Shop Will입니다.\" Shopify는 일주일 만에 15%의 수익을 올렸습니다. 구매할 시간인가요?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795876245,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=193205b782c247309c4251a8e411ffc2cd0c648969e4fef5267c565363854a0b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0665d92292f15b9d3f87",
          "headline": "VGT vs. QQQ: 2027년에는 어떤 기술 ETF가 더 나은 매수인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795872842,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=386e9a9dc836dc06542e3667e2ef8113dd0b908235cc03e76c75a1576879fdd0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3eb0f2f131a2c573576e",
          "headline": "Kioxia와 Nvidia가 플래시 드라이브를 추가 AI 메모리로 테스트한 후 Sandisk 주식을 매수할 수 있나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795858382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe1c19063084d51e521b53e319c7ed70d1fd429dcd813321dbb95c644c568fe5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e8aa67b8ba3c48918028",
          "headline": "Gene Munster는 AI 기초에 초점을 맞춘 것이 실수였다고 인정하지만 이제 NVDA 주식을 구매하는 투자자가 보상을 받을 수 있다고 믿습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795856380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e08d3bf31d461d91375e5b5cf1ac179cc82528f015a568c3613d4e2f4a66e57",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "62ede2cac6146f4c37f6",
          "headline": "192달러에 마이크론 주식 1,000주를 구입한 60세의 Jim Cramer 투자 클럽이 '우스꽝스러울 정도로 저렴하다'고 말하는 것을 방금 보았습니다. 그의 100만 달러 수익 중 남은 금액은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795826460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8ed0fc146db752869efcd6e65ad9a94066caa2bbfcafcc545b25780435fe870",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "dac1769ec05def0d3d44",
          "headline": "반전: Nvidia의 Vera Rubin은 달러당 GB300 토큰의 2~6.5배를 얻습니다. Amazon의 Trainium Edge는 기존 칩에 반대되었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795821835,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e299fe88567a7a659bfd5f2a6daa4f621b9279aa134e42209b2c5a991d644c68",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4332817d7b090be26ad7",
          "headline": "Jensen Huang 스캔들과 미국의 단속으로 인해 공급이 질식됨에 따라 Nvidia 칩이 중국에서 300만 달러에 판매됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795814320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9491a22c2c534687927467547dd49c6da73fb76a5db30c33ecbe952c7dfe37d1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "c92e2b5866c12367b6f8",
          "headline": "Jensen Huang CEO가 12월 1일과 3일 의회에서 증언하기 전에 Nvidia 주식을 사야 할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795808889,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6485c9afc0ccda7c8349157b048306d43cc7dfa4db44f087308da73de51263b5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bc9c0fe1b7fc17f49a10",
          "headline": "Stanley Druckenmiller, David Tepper 외 5명의 유명 투자자가 대만 반도체를 소유하고 있습니다. 최근에 판매한 사람은 다음과 같습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795804099,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22c575beb0b4fb0b7a5f694ce71bc31ead3d778818fcd1122ab0a2583915ceb3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "a22c3ff0e703a7e851fc",
          "headline": "억만장자 빌 애크먼은 마이크로소프트에 대한 신뢰를 잃었는가? 대답은 당신을 놀라게 할 수도 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795800002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fefd8703a835750e1ae202000348b3d630500860da28d5fe5011b3cbce6e6a59",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "9eb6a00f437a1634f208",
          "headline": "투자자들이 사랑한 핵주 AI 올해 33% 하락. Constellation Energy는 지금 구매할 수 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795793309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a20f0686aa2ae7c9328e0a948abc5dce5cd463affd93ef02e7f8b9471a779479",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 37,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795878669,
      "signal": "우호적 변화",
      "netScore": 4.36,
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
          "score": -4.02,
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
          "score": 4.72,
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
          "eventId": "0e8bd73a32aa4770d181",
          "headline": "AMD(Advanced Micro Devices)가 새로운 미국 AI 공장에 전력을 공급하는 이유는 무엇입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795878669,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=862b90265c501c6d4614567dad7f83b28a358202dc3e7666eed8ae81a6512506",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9eb29ce7fce0b5ce15c0",
          "headline": "\"수요가 공급보다 높습니다\": AMD는 한 달 만에 24% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795870220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5473b238c299222d4ae43e923159a033115acebbaab6eaa32658d44741cb9bc3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "56038c501c4f78940e50",
          "headline": "AMD는 1년 동안 여전히 98% 상승했습니다. Erste Group은 그것으로 충분하다고 말합니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795870217,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=095bcd41e36ac548bc14382a52691497a148d268665e4418eb65285e50fd874b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e8aa67b8ba3c48918028",
          "headline": "Gene Munster는 AI 기초에 초점을 맞춘 것이 실수였다고 인정하지만 이제 NVDA 주식을 구매하는 투자자가 보상을 받을 수 있다고 믿습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795856380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e08d3bf31d461d91375e5b5cf1ac179cc82528f015a568c3613d4e2f4a66e57",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "896defd5ed92fd8c95af",
          "headline": "OpenAI의 457MW TensorWave 거래는 최대 91억 달러의 가치가 있을 수 있다고 분석가들은 말합니다: AMD 주식에 미치는 영향",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795854590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdce91b2e3f70ae05cedd1b7aea6a0d462a11fca80787f6708d8fb8f4617a275",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "02294959cdde15990ce3",
          "headline": "OpenAI의 457MW TensorWave 거래는 최대 91억 달러의 가치가 있을 수 있다고 분석가들은 말합니다: AMD 주식에 미치는 영향",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795854590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdce91b2e3f70ae05cedd1b7aea6a0d462a11fca80787f6708d8fb8f4617a275",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "62ede2cac6146f4c37f6",
          "headline": "192달러에 마이크론 주식 1,000주를 구입한 60세의 Jim Cramer 투자 클럽이 '우스꽝스러울 정도로 저렴하다'고 말하는 것을 방금 보았습니다. 그의 100만 달러 수익 중 남은 금액은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795826460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8ed0fc146db752869efcd6e65ad9a94066caa2bbfcafcc545b25780435fe870",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "bc9c0fe1b7fc17f49a10",
          "headline": "Stanley Druckenmiller, David Tepper 외 5명의 유명 투자자가 대만 반도체를 소유하고 있습니다. 최근에 판매한 사람은 다음과 같습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795804099,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22c575beb0b4fb0b7a5f694ce71bc31ead3d778818fcd1122ab0a2583915ceb3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "a22c3ff0e703a7e851fc",
          "headline": "억만장자 빌 애크먼은 마이크로소프트에 대한 신뢰를 잃었는가? 대답은 당신을 놀라게 할 수도 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795800002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fefd8703a835750e1ae202000348b3d630500860da28d5fe5011b3cbce6e6a59",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "867043300c1baf162521",
          "headline": "AMD 대 ASML: 월스트리트가 AI 붐에 의문을 제기하면서 2027년에는 어떤 칩 주식이 승리할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795798019,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=316c0b78816efbd995197d8176953e20ca3dc099fc465421f8c048f2c048972f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9eb6a00f437a1634f208",
          "headline": "투자자들이 사랑한 핵주 AI 올해 33% 하락. Constellation Energy는 지금 구매할 수 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795793309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a20f0686aa2ae7c9328e0a948abc5dce5cd463affd93ef02e7f8b9471a779479",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c5eaea646566f514912d",
          "headline": "데이터 보호 수요가 가속화됨에 따라 개인 정보 보호를 강화하는 컴퓨팅 시장은 2030년까지 164억 9천만 달러에 도달할 것입니다. Microsoft, IBM, Cisco 및 Oracle이 AI, FHE 및 클라우드 보안을 가속화합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795790160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb9d9066d9a3db6a399429683ce0a97745760627727005ec4f0cc60049fd28cf",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 28,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795706126,
      "signal": "주의 강화",
      "netScore": -5.53,
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
          "score": -1.57,
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
          "eventId": "13b3e43da253d6556417",
          "headline": "Broadcom과 Marvell의 현금 격차에 무슨 일이 일어나고 있습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795706126,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=89e5ce8e0372d1b8ef5e567c8c4ca8e2f6a1b7b7accb3f8aab049f3aa40eaf00",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "78b4293e28b885f5207e",
          "headline": "Tepper는 알파벳을 46%까지 줄이고 Micron과 Oracle을 지원하면서 Broadcom과 AMD를 제치고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795695305,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bdc426d908017f10bca2c77adfabda1a60a7364765a771393f3e9e5e31e66b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89d131430a6e6b0016b6",
          "headline": "Google이 TPU 주문을 삭감한 것으로 알려지자 Broadcom은 일주일 만에 15% 하락하여 52주 최저치를 기록했습니다. 판매가 과도합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795681834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9f3e25b8b6dc31052278b99a543bbc59832541a1aad00ce40a8ece1e6c868983",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a138c2896cea0d6fe105",
          "headline": "Broadcom: 시장에서 판매가 잘못된 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795658620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc248dc804f8a89f5070370cb339d0208eedbd91657c66fdf0d643786c6e7967",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795818920,
      "signal": "중립·확인 대기",
      "netScore": -0.07,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
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
          "score": -0.87,
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
          "eventId": "0bc92441d83d6232d17d",
          "headline": "한 달에 1,000달러를 배당금으로 지불하는 Microchip이나 Qualcomm의 주식은 몇 개입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795818920,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=424f479f8dfc5374eaeb7d93754fe156f18c030c3b670a177b676bd9908bd801",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "af5f34b726bdefc1e3ba",
          "headline": "Qualcomm 주식에 미래가 있습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795783529,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37896cde23f9c52b8e6b3f394ee100b7b633dd60ed2ac7c1a125a697af14698e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "04e3a10899addf1804e7",
          "headline": "현재 자동차 AI 분야에서 Qualcomm(QCOM)이 주목할 가치가 있는 것은 무엇입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795713007,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e8f28d7cd2aff6f9291867e211de6c944f3d290e40e6a63503ddb3594eabfe4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "자동차 고객·설계 채택 확대 가능성"
        },
        {
          "eventId": "6a9336f3adb70a834350",
          "headline": "Broadcom vs. Qualcomm: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795625521,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6960670cbd9919810b2d46f8eca3172bba29c3e10e134a3310abd3c9a3035d9e",
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
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795805376,
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
          "eventId": "b9a86d75826989f4be1c",
          "headline": "Jim Cramer는 하나의 공급 경고로 Arm Holdings를 좋아합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795805376,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24334d94081d7544b01701b78be86573b5c5dd2c8ab80535b8380ff556611dab",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795871849,
      "signal": "주의 강화",
      "netScore": -6.93,
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
          "score": -1.57,
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
          "eventId": "c9bdf6fd7cc71ca8c049",
          "headline": "Marvell 주식은 2000년 이후 최악의 11월 속도로 화요일 수익을 기록했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795871849,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a07ebdc17e3755f3dbe43eba68c6fba15af933038dba58ac6bb777badc8cec29",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2543afe570fb8b054a3a",
          "headline": "오늘 Marvell Technology 주식이 급등하는 이유는 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795780335,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f13141b23f24d1cf2bb75cdc4a313752f32ffd5c764dfe98d91860d932ec64e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "13b3e43da253d6556417",
          "headline": "Broadcom과 Marvell의 현금 격차에 무슨 일이 일어나고 있습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795706126,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=89e5ce8e0372d1b8ef5e567c8c4ca8e2f6a1b7b7accb3f8aab049f3aa40eaf00",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795871333,
      "signal": "중립·확인 대기",
      "netScore": 0.07,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.75,
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
          "score": -1.92,
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
          "eventId": "7c2a59ae4b543f47ce45",
          "headline": "인텔(INTC), 주요 클라우드 고객과 파운드리 거래 확대",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795871333,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=896893544f7f93a3d592b00080419bece5d599f4b1bdd067852df500ada2ac86",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f1c1fa03a02f414a0b53",
          "headline": "인텔 주식은 법원 서류에 워싱턴의 10% 지분 추진이 자세히 설명되면서 2.86% 상승했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795807284,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae2516a501fc74ded5264cd4ab5c2af163def89e4dcebcd7b3280c453ae1eade",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "060c70d70661e99e5c5a",
          "headline": "인텔 주식에서 얼마나 더 잃을 수 있습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795780747,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f332bdc892350be850485d505a1f73fccdb3f15622b71d7ba6aac380a4fe86b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9c15c7ce23d54a6bb3a2",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 반도체 주식을 1개만 사고 보유할 수 있다면 이것이 될 것입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795734884,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e56a35f5645b5a73c26870701de9815fb57d698eaf78dfa2a5bbc1fab6df80f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a54fb82542fcd35805a6",
          "headline": "인텔(INTC), 공정 가치 논쟁이 더욱 어려워지면서 소송 및 AI 매도에 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795730948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6e0745ef3e15f01868ad5073bb07fc23b63278347dd23cb49905db4f46a414c3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccb6009c1950d321a97a",
          "headline": "트럼프는 엔비디아 지분을 인수하면서 떠돌았습니다. 인텔 스타일 거래의 가치는 3,800억 달러에 달할 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795623948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=68707db74465da173a9255dc6e23a776c886cdb67da9413c5d4df9887122ff2b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795794515,
      "signal": "주의 강화",
      "netScore": -5.03,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.52,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.57,
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
          "eventId": "75111d92cfec820e0322",
          "headline": "트럼프, TSMC의 최신 칩 공장 착공을 위해 애리조나로 향하고 있다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795794515,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8db6e9b01db8817051b91eba57b1215fdb2ba12475adde1981b1aba4cff54dbd",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "25bf0b5cd91d42288e4c",
          "headline": "2028년 이전에는 TSMC에 위협이 되지 않습니다: 인텔의 파운드리 격차는 여전히 엄청납니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1795794312,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=17aad9b017356426b964aeb13f02e64d5805b7eaf2162799882f70e2026c0f20",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4b16ebbe4084e1d70a68",
          "headline": "TSMC: 다시 구매하는 것처럼 보이기 시작함(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795789259,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b274ad1eb0b710d8b52b1536fa11c393bdb3afc90081fef72d408e88c611fddd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9c15c7ce23d54a6bb3a2",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 반도체 주식을 1개만 사고 보유할 수 있다면 이것이 될 것입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795734884,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e56a35f5645b5a73c26870701de9815fb57d698eaf78dfa2a5bbc1fab6df80f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "124e5e650e14ed097a8b",
          "headline": "Taiwan Semiconductor Manufacturing (TSM)은 226억 달러 규모의 텍사스 공장을 조건부로 만들 수도 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795691454,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d91a6b15adcad438e6da7967d4a690093470026f3d866f56905de994949363a4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "06fdfa59d5b78a788ac8",
          "headline": "Altimeter의 Brad Gerstner는 Nvidia가 \"2028년과 2029년에 마이너스 성장\"으로 가격이 책정되었다고 말했습니다. 월스트리트는 29%를 예상한다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795649942,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d770f4fdc86e5b30c9d3d6a4d9cf85135d8e263481f11187b0825a7388865971",
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
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795821216,
      "signal": "주의 강화",
      "netScore": -8.18,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.27,
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
          "score": -4.55,
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
          "eventId": "5650b90b465426053188",
          "headline": "네덜란드 국회의원들이 미국 칩 규제를 철회함에 따라 ASML Holding (ENXTAM:ASML)이 저평가되어 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795821216,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01c84ff595fc151e621dd0594f77ac26126912a3d408806b2ec9c7aa46cc7fef",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "867043300c1baf162521",
          "headline": "AMD 대 ASML: 월스트리트가 AI 붐에 의문을 제기하면서 2027년에는 어떤 칩 주식이 승리할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795798019,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=316c0b78816efbd995197d8176953e20ca3dc099fc465421f8c048f2c048972f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "521fbc061c45aaf5a2e0",
          "headline": "네덜란드가 트럼프가 제안한 수출 규제에 저항하겠다고 맹세하면서 ASML이 미국-중국 칩 전쟁에 휘말렸다: '우리는 무엇을 해야 할지 단순히 알려주지 않을 것입니다'",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795754620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=565e84c991efa2f8094016311bd4d7bad12c64a13e14c3570a3103005aea4463",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "50e68a9cecf136e4d3b2",
          "headline": "ASML Holding (ENXTAM:ASML), 새로운 미국 중국 칩 규제에 대한 네덜란드의 반발에 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795637700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12f26563f8ad5dfa1114107c9fe813cd1f59b714e41be0ab0e833f048d1c0764",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1de86ebdb81fd97ee8d1",
          "headline": "네덜란드 국회의원이 MATCH 법안이 \"ASML에 재앙\"이라고 경고함에 따라 ASML은 칩 라우팅에서 6% 하락했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795626676,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=768a04695b8a6583ebe218ed2939e17d0a3c811e47db4f278a9aa07c23e76317",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795654402,
      "signal": "중립·확인 대기",
      "netScore": 1.74,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "d740df005a99ee1db247",
          "headline": "Applied Materials(AMAT)는 거의 모든 Fab에 공급합니다. 그것으로 충분합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795654402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dce155d86f3bc1e10325489775dc75a0d77660cc5907fcc95f962795388d027d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "7156435b03b6bbe65d4f",
          "headline": "Applied Materials는 중국 칩 억제로 장비 주가가 하락함에 따라 UBS의 575달러 목표에도 불구하고 6% 하락했습니다. Lam Research 7% 하락, KLA Edges 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795637384,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7382695e2801a77c6f2041556316435c416f7a219011c7495d5733cf9df6e118",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795680409,
      "signal": "중립·확인 대기",
      "netScore": -1.68,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "score": -2.1,
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
          "eventId": "527c8203e273d932b8ea",
          "headline": "Lam Research: 더 저렴하지만 저렴하지는 않습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795680409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38b06e49842fe2035f0bcacf7b6e41d6b85a8e1416176cd4d9e9db2395451692",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "16ce1f63f06bcf8d1a6d",
          "headline": "Lam Research: 가격이 이야기를 사로잡았습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795650362,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ba9fccba661ffe23097ee801713a885798837c9a466f84bb06610bd4a142ea7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "88f6ad09082576b95068",
          "headline": "Lam Research: 여러분이 보게 될 최고의 블랙 프라이데이 특가 중 하나",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795642065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d3a2f0296e295db6eaa187f9095e6c157f0befe755d509b3b2ccbf44fbfcfbb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795637384,
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
          "eventId": "7156435b03b6bbe65d4f",
          "headline": "Applied Materials는 중국 칩 억제로 장비 주가가 하락함에 따라 UBS의 575달러 목표에도 불구하고 6% 하락했습니다. Lam Research 7% 하락, KLA Edges 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795637384,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7382695e2801a77c6f2041556316435c416f7a219011c7495d5733cf9df6e118",
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
    "MU": {
      "ticker": "MU",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795856380,
      "signal": "우호적 변화",
      "netScore": 9.58,
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
          "score": -1.4,
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
          "eventId": "e8aa67b8ba3c48918028",
          "headline": "Gene Munster는 AI 기초에 초점을 맞춘 것이 실수였다고 인정하지만 이제 NVDA 주식을 구매하는 투자자가 보상을 받을 수 있다고 믿습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795856380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e08d3bf31d461d91375e5b5cf1ac179cc82528f015a568c3613d4e2f4a66e57",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "62ede2cac6146f4c37f6",
          "headline": "192달러에 마이크론 주식 1,000주를 구입한 60세의 Jim Cramer 투자 클럽이 '우스꽝스러울 정도로 저렴하다'고 말하는 것을 방금 보았습니다. 그의 100만 달러 수익 중 남은 금액은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795826460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8ed0fc146db752869efcd6e65ad9a94066caa2bbfcafcc545b25780435fe870",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "8718657958c434af4a01",
          "headline": "칩 반등으로 2027년 메모리 공급 부족을 충족하면서 마이크론 주가 4.29% 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795807487,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20e73f7fc5269787b22c8c103ae0cd47e5ef692512023efe37d4c3ebb43a401a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "bc9c0fe1b7fc17f49a10",
          "headline": "Stanley Druckenmiller, David Tepper 외 5명의 유명 투자자가 대만 반도체를 소유하고 있습니다. 최근에 판매한 사람은 다음과 같습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795804099,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22c575beb0b4fb0b7a5f694ce71bc31ead3d778818fcd1122ab0a2583915ceb3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "533a359977895426d3a3",
          "headline": "Micron CEO는 2028년에 메모리 부족이 악화될 것으로 예상하지만 TrendForce는 가격이 하락할 것으로 보고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795803306,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9193ef89cf78c1f7b46a3afb2a92ba85fedc47aa4c0bacb97d39c5339f627f78",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a22c3ff0e703a7e851fc",
          "headline": "억만장자 빌 애크먼은 마이크로소프트에 대한 신뢰를 잃었는가? 대답은 당신을 놀라게 할 수도 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795800002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fefd8703a835750e1ae202000348b3d630500860da28d5fe5011b3cbce6e6a59",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9eb6a00f437a1634f208",
          "headline": "투자자들이 사랑한 핵주 AI 올해 33% 하락. Constellation Energy는 지금 구매할 수 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795793309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a20f0686aa2ae7c9328e0a948abc5dce5cd463affd93ef02e7f8b9471a779479",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "c5eaea646566f514912d",
          "headline": "데이터 보호 수요가 가속화됨에 따라 개인 정보 보호를 강화하는 컴퓨팅 시장은 2030년까지 164억 9천만 달러에 도달할 것입니다. Microsoft, IBM, Cisco 및 Oracle이 AI, FHE 및 클라우드 보안을 가속화합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795790160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb9d9066d9a3db6a399429683ce0a97745760627727005ec4f0cc60049fd28cf",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "6afd11e6895503861b00",
          "headline": "SNDK, MU, WDC, 기타 메모리 주식은 투자자들이 무너진 AI 이름으로 돌아오면서 랠리를 펼칩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795785561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4934603eec6659e69687cbf29f402ef024df68b6895d2367c6bde628adfc5f57",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "81767b0a8cdf61b64980",
          "headline": "AI 가격 변경에는 Salesforce 주식 투자자의 조치가 필요합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795756283,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=861bb08fcd0d56acc041536f55b14a416b6682ecb1e751dfda9fc3a40a2e0480",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9c15c7ce23d54a6bb3a2",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 반도체 주식을 1개만 사고 보유할 수 있다면 이것이 될 것입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795734884,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e56a35f5645b5a73c26870701de9815fb57d698eaf78dfa2a5bbc1fab6df80f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cd8782f0be57ea16e3b2",
          "headline": "XPeng, Tesla 주식 투자자의 큰 성장 베팅에 대한 지분 인상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795710760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5777f1d88ea012ca1ab7cffab89be06bbfbdd9b9ef47bfbd0379499ec62dd200",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 22,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795858382,
      "signal": "주의 강화",
      "netScore": -2.79,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.87,
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
          "score": -2.62,
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
          "eventId": "3eb0f2f131a2c573576e",
          "headline": "Kioxia와 Nvidia가 플래시 드라이브를 추가 AI 메모리로 테스트한 후 Sandisk 주식을 매수할 수 있나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795858382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe1c19063084d51e521b53e319c7ed70d1fd429dcd813321dbb95c644c568fe5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "02d77732b8e4f15c2b1b",
          "headline": "SanDisk가 2027년에 170달러를 달성하는 경로가 다년 계약에 대한 한 번의 테스트에 달려 있는 이유",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795787122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36d73bcd49cc1d42c6a0ddd1a459420c47e35d2e9aede5db76a0ebfc14175c00",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b7de47b417dbfe803b58",
          "headline": "Sandisk: 매도 요청이 진행되었습니다(등급 업그레이드).",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795725376,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=200eccd47a2a75b1a76f454f0d5078e67f55ff1e8350d2d6b9f131603c932d68",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2230c71ec90bbab80f01",
          "headline": "Qualcomm vs. Sandisk: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795641602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b6236334201c9643249d124aa4570edf40accf5cced23e6434560b08e8a94307",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6162d1827a5758f48a07",
          "headline": "Sandisk 대 Western Digital: 2027년에는 어떤 컴퓨터 드라이브 주식이 더 나은 구매입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795627142,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9a3524348fd19abc99596758d1444285e82e053e19f7104939db9f2f5ea8225",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "674d3e0c1a03d92f7041",
          "headline": "AI 매각이 심화되고 EU가 FSD 승인을 지연함에 따라 Tesla는 5% 하락, Sandisk는 13% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795624301,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=92f351eadad0432cc90d3b37f23e944b7e27bd16708e901c04486fc6938c6efe",
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
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795780477,
      "signal": "중립·확인 대기",
      "netScore": -1.61,
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
          "eventId": "7c089a965f43fc43fc01",
          "headline": "Seagate는 1년 동안 여전히 86%의 상승세를 유지하고 있습니다. UBS는 그것으로 충분하다고 말합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795780477,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=079fc4ff7c2c2f99bc93c5461e4e6f099b3fa9b8fa3f60164f341c86329e9592",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6162d1827a5758f48a07",
          "headline": "Sandisk 대 Western Digital: 2027년에는 어떤 컴퓨터 드라이브 주식이 더 나은 구매입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795627142,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9a3524348fd19abc99596758d1444285e82e053e19f7104939db9f2f5ea8225",
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
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795826403,
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
          "eventId": "916b53fd63bf09fb3d0b",
          "headline": "Arista Networks 대 Snowflake: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795826403,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=59433e33c2f3553078f3e55465f5776438db2bcbdafddf5045d3a3965fb82e54",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795799198,
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
          "eventId": "78de4dbb99d4d507a50a",
          "headline": "코히런트는 수요일의 AI 매도에서 광학 주식이 반등하면서 12% 상승했습니다. 응용 광전자 공학 및 Lumentum 상승 7%",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795799198,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9532cb77ebe7bc819d9ded3fc36555a3ae63dc33a6cb1f108a7ebeaa615bb9a1",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795799198,
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
          "eventId": "78de4dbb99d4d507a50a",
          "headline": "코히런트는 수요일의 AI 매도에서 광학 주식이 반등하면서 12% 상승했습니다. 응용 광전자 공학 및 Lumentum 상승 7%",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795799198,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9532cb77ebe7bc819d9ded3fc36555a3ae63dc33a6cb1f108a7ebeaa615bb9a1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "997a9bf532496c63c714",
          "headline": "Lumentum은 AI 주가 하락으로 일주일 만에 14% 하락했지만 CEO는 \"우리는 둔화를 보지 못했다\"고 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795681663,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=79733b3fe30ffb3b3000e0713f8043abdba8bc82becd03b538c4d3f202f6cc59",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795641065,
      "signal": "중립·확인 대기",
      "netScore": 1.4,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
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
          "eventId": "1b606dd6beac9bd5ca79",
          "headline": "인상된 지침에는 GE Vernova 주식 투자자의 조치가 필요합니까?",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1795641065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95e0a15887cbba508fc760819b5fd476c8a302df1856f13496d88c54936527f4",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795626110,
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
          "eventId": "b703b5d03f9400e5bd15",
          "headline": "Vistra가 1년 동안 하락했습니다: Morgan Stanley가 여전히 82%의 상승 여력을 보이는 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795626110,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f62b5f7f692a5b5fe8ef1644ab71dc22abcc94f68c6d72743d7a716a6265dc3",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795781766,
      "signal": "주의 강화",
      "netScore": -2.31,
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
          "score": -0.52,
          "level": "중립"
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
          "eventId": "37b8f3477f94120c7232",
          "headline": "Exelon 또는 Vistra 중 어느 것이 더 많은 전력 수요를 제공합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795781766,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d44423c82bd27680614ba3147894676f11627f4bd909f4a520fefd323867a11d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
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
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795703280,
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
          "eventId": "fa5bff0db174c173a8b4",
          "headline": "글로벌 항공기 비상 산소 시스템 시장 보고서 2026 | Safran, Honeywell, Eaton, Liebherr-Aerospace 및 AMETEK을 통해 2030년까지 CAGR 8.8%를 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795703280,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=444c5d7b28d221718c5f7a244c00cb3785caf9bafcf18310a366db5cab4b2d05",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1795895471.2363088,
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
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1795895471.2363088,
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
      "updatedAt": 1795895471.2363088,
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1795895471.2363088,
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
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795624301,
      "signal": "중립·확인 대기",
      "netScore": -1.87,
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
          "score": -0.52,
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
          "eventId": "674d3e0c1a03d92f7041",
          "headline": "AI 매각이 심화되고 EU가 FSD 승인을 지연함에 따라 Tesla는 5% 하락, Sandisk는 13% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795624301,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=92f351eadad0432cc90d3b37f23e944b7e27bd16708e901c04486fc6938c6efe",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1795895471.2363088,
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
      "updatedAt": 1795895471.2363088,
      "dataAsOf": 1795751582,
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
          "eventId": "4337ace326ce6b38ec2d",
          "headline": "아마존은 지난 11월 보잉-록히드 로켓에서 위성 40개를 잃었습니다. SpaceX는 Amazon의 문제를 해결할 수 있는 유일한 회사입니다. 주식 매수가 $130에 가깝나요?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795751582,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ba7bbfe6332c14ee7092a4b5fa4647e1a0ecb09b8ee56159f9f94b4953b195f",
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1795895471.2363088,
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
