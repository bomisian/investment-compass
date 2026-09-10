// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1789007724.5223246,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788976958,
      "signal": "우호적 변화",
      "netScore": 4.33,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
          "score": -0.7,
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
          "eventId": "80dadce986324e659d92",
          "headline": "Microsoft CFO, Goldman 컨퍼런스에서 AI 스택, Azure 효율성 및 에이전트 성장 발표",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788976958,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=945bcbea9e766ac2534f5811dc639cbfdf20f037785d3c5fc14f448615ad178e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "77971b9f71f162b25c53",
          "headline": "Constellation Energy의 최대 AI 전력 거래는 2027년 6월까지 지불을 시작하지 않습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788911881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3f7479f0ef0e61dc2f603c5537982ee47ceb78678bde79027b3c3042d7329dc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4938bef0d9893ff34a72",
          "headline": "Microsoft의 OpenAI 파트너십은 새로운 법적 불씨를 끌어냅니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788900432,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=855789c488679628da05946e83cf046f4b4e76919dfa8fb53e63912b9b40e07f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2ea83ba5a7d0e9b39dfc",
          "headline": "Advanced Micro Devices와 Marvell Technology는 계속해서 수익을 늘리고 있습니다. 그 밖에 볼만한 내용은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788872401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5487f52d5ec2ff7339ee92f5c5e8b6abf7b6cd59028d0047fd21967061f8210d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bbcb8449ddc554720b18",
          "headline": "Microsoft, Azure 매출을 연간 1000억 달러 규모로 돌파하고 AI 부문 재편성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788870630,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fc754d5688f1e120ace874e0cd06cc46d4993535d5119108ef0106a30c1398f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788986051,
      "signal": "우호적 변화",
      "netScore": 2.3,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
          "score": -2.45,
          "level": "주의"
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
          "eventId": "84c2b50b8f9a7d350a30",
          "headline": "Google, 핀란드 AI 인프라에 130억 유로 투입하여 미국 외 첫 핵 거래 성사",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788986051,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a29bf8e89f6758373947f59b69f9421f978df487722e86ca7aab54218452ec0c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "357e787aeb5840b8328d",
          "headline": "Google, 핀란드 데이터 센터에 원자력 발전을 위한 22년 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788972276,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d98f0025564decc3fde914e84f39fd1db3f8d9a3baa610fa9e10d2e1ea8525a0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "32914d6512b29df54d98",
          "headline": "금리 인상이 시장 혼란을 두려워함에 따라 Microsoft와 Alphabet을 매우 면밀히 살펴보십시오.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788960710,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78712aa865fe26275288e6d289d402f4ac911418e71a114c58aa238644266f6b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "feb75025a3b2db548739",
          "headline": "Mindgard는 Anthropic, NVIDIA, Microsoft, Google Cloud 및 AWS를 통해 AI 및 클라우드 생태계를 확장합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788960000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fac957f51e459dfe8c748dd3d0882844f372fcac6a355c6fcb8fffd0cb549005",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fe97d0c2e0220ac48117",
          "headline": "Google은 AI 에너지 문제에 대해 150억 달러의 멋진 해결책을 제시했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788949680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9eae671206d61f604157a5f0684f18cbe4f1fc5e5457e81e47bf49f9207bde38",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4d7d75cd442cdbf0e3da",
          "headline": "META 주식 상승 프리마켓: Zuckerberg는 스레드가 'X보다 크거나 규모가 비슷하다'고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788943590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2690b055b5759a8377f3b08a922d55af75802b5bb7e2e416f493da1e9b39051",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec840ea366a86511d1d6",
          "headline": "유가가 다시 100달러를 기록하면서 Nasdaq, Dow, S&P 500 선물 혼합: QCOM, ORCL, AAPL, AMD, TSLA, RKLB, HOOD, GME 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788943155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ac2ba787536589b8e9b25b125562b5cf8a6fed3b33a834f5fb8f3541beb7db9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5b4cfbd1cdba2f1ad065",
          "headline": "Google은 EU 규정으로 인해 검색 품질이 저하될 것이라고 경고합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788903949,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=87ccf687f2cd9f009cd5f36895793bc2a184e39d0c477e754a7f353ff7fd3c14",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b769097e86b1493c9352",
          "headline": "Broadcom: 최근 수익으로 내가 가장 신뢰하지 않는 AI 주식인 이유 확인",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788836516,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d912c2264f2a145e9e1ed97bbaf3ee0df9cd5a1d268ef8a14b6eab04e4674957",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20fb349b72177dd607ba",
          "headline": "Meta의 180억 달러 규모의 청소년 안전 거래로 TikTok과 YouTube Next에 압력이 가해짐",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788743773,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13dfd6f695cca4f6776492e69d2af6375a4836c13cfcb6621751508bc0dde196",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788974739,
      "signal": "우호적 변화",
      "netScore": 3.37,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 5,
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
          "score": -4.5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.97,
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
          "eventId": "e10ea018868c79bb36ff",
          "headline": "Cramer는 Qualcomm의 Amazon 협력이 정체된 재고에 \"특별한 것\"을 제공한다고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788974739,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e16e1ac7659c6bd4d3c4abc36224bb9a8ff6a108cf38ce8550cdfad5cefbe499",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3b36b219343d29b6a7b3",
          "headline": "오늘 Marvell 주식이 폭등한 이유",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1788970980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5fdd23b9343fb4eac06e548073cad7fc97accfe82012f4b9e63ba7b0613a06a1",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "99cc2084d3c9ee2551f4",
          "headline": "아마존과 오라클은 다가오는 Fed 회의에 대해 극도로 불안해하고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788968246,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a4afe8f0d68f1791e7388071cfff24c832e920589365d338c68d45c8da7bdd1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f07a68bace48308ab724",
          "headline": "Qualcomm의 Amazon 거래는 AI 성장 전망을 지원한다고 RBC는 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788967660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c8d4687c769eb446d83aa651a80d19b8b983cbe60a37c04e93a82148f8e0de8b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "558952756c79036c8967",
          "headline": "스마트폰은 잊어라: Qualcomm은 Amazon과 대규모 AI 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788964625,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7fd5937ca73c8377b2ce1a19be0dd96f84972247149864c1295666a8a0166ec",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "feb75025a3b2db548739",
          "headline": "Mindgard는 Anthropic, NVIDIA, Microsoft, Google Cloud 및 AWS를 통해 AI 및 클라우드 생태계를 확장합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788960000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fac957f51e459dfe8c748dd3d0882844f372fcac6a355c6fcb8fffd0cb549005",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3c65918f4135411b5b1f",
          "headline": "Amazon CEO Andy Jassy는 왜 반도체 판매가 앞으로 몇 년 동안 계속 상승할 수 있는지 설명했습니다. 지금 내가 가장 좋아하는 AI 칩 메이커는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788951240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=798a173f183835bf6dd0acdb0f231d003cdcbe5d0c82e6262115e46d4b126f93",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e033fddb9c2fe7e94a0f",
          "headline": "QCOM 주식 시판 전 상승: CFO는 Amazon 거래 후 '적절한 가격'의 주식을 선전하고 라이벌 칩을 위한 '한 번만' AI 스택을 홍보합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788941402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc1cd377227cdea618c051db5e789dd48535292273257ad1e37f74494a37d8d5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fb1ae537ea250c971cda",
          "headline": "아마존, 4부 거래로 최초의 스털링 채권 판매",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788941155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c4348841cac8c1e584e1e7218ab6e4c42d1496b32e901612c1ed1eec71744ac0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "7cad3b1e74bd6e47cf6a",
          "headline": "QCOM Stock Extends Gains Overnight: 애널리스트, Amazon AI 거래 'Qualcomm의 미적분 변경'",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788920477,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3041b1c4bda12a438d0c620773885af635e1fc6f2d0a9574ac77211ba844c534",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2b2c3a2549b83c099888",
          "headline": "S&P 500, 중동 긴장이 주요 인플레이션 데이터를 앞두고 석유 랠리에 박차를 가하면서 다우엔드가 낮아짐 — 메타, QCOM, BE, AMZN, AVGO In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788907599,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a315f6709959f09b7975b57023eb1f1e42c8aa9255c8cb764863fc87b4c164c5",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f0227da0ddcb6b1e5b35",
          "headline": "AMD가 6.7% 뛰어오르는 동안 아마존은 $ 600억 규모의 AI-칩 도어를 엽니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788901994,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a67e56ce33fef825837e5ce75df4e069f9d041d0f0e1317bf3980d5c0a64f1d2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 25,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788989729,
      "signal": "주의 강화",
      "netScore": -5.4,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.45,
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
          "eventId": "87dcd7e24de31ce660d7",
          "headline": "오늘, 9월 9일 주식 시장: Muse AI 에이전트 출시로 메타가 6.5% 이상 급등",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788989729,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c50c9c122ce361357da6c5f6f43119bb626ae70541fda74045942e1bcefff7f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4d7d75cd442cdbf0e3da",
          "headline": "META 주식 상승 프리마켓: Zuckerberg는 스레드가 'X보다 크거나 규모가 비슷하다'고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788943590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2690b055b5759a8377f3b08a922d55af75802b5bb7e2e416f493da1e9b39051",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ec840ea366a86511d1d6",
          "headline": "유가가 다시 100달러를 기록하면서 Nasdaq, Dow, S&P 500 선물 혼합: QCOM, ORCL, AAPL, AMD, TSLA, RKLB, HOOD, GME 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788943155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ac2ba787536589b8e9b25b125562b5cf8a6fed3b33a834f5fb8f3541beb7db9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "24260ff486f38668eea3",
          "headline": "Meta Platforms, 주요 소송을 해결하고 180억 달러 지불",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788915628,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f31aa1688ce6739aeaf219c3674b3e7415c138734496e4490764e314dc75f56",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "77971b9f71f162b25c53",
          "headline": "Constellation Energy의 최대 AI 전력 거래는 2027년 6월까지 지불을 시작하지 않습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788911881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3f7479f0ef0e61dc2f603c5537982ee47ceb78678bde79027b3c3042d7329dc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2b2c3a2549b83c099888",
          "headline": "S&P 500, 중동 긴장이 주요 인플레이션 데이터를 앞두고 석유 랠리에 박차를 가하면서 다우엔드가 낮아짐 — 메타, QCOM, BE, AMZN, AVGO In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788907599,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a315f6709959f09b7975b57023eb1f1e42c8aa9255c8cb764863fc87b4c164c5",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5311c97673dbbe4b3080",
          "headline": "T, AMZN 주식에 초점 — AT&T, Amazon Leo, 기업용 위성 광대역 확장을 위해 파트너십 체결",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788887012,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d6fc5e09f0abc2e9a89105bf9a273cf915a182bb2146a3e24e640c1485f1b38c",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccb5c941c14f53db1b2d",
          "headline": "애플도 메타처럼 170억 달러 규모의 아동 안전 합의에 직면할 수 있을까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788879903,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f691e846b0364299e58b2bef4d5350616ec4ddb792183d747bf71ffcf1a6757f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d5d36e4157fcf37df82d",
          "headline": "소셜을 넘어서: Meta는 컴퓨팅의 미래를 구매하고 있으므로 저는 그것을 구매합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788878594,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9194cd3ff43d8a90631914d48ac8fa05beba20f0ee18f9ba4ee12f0a7cf7e8f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "20617ef6104fc2f1f14d",
          "headline": "Palantir: Bears Cannot Trap AI Leader Of The Meta-Compute Layer (등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788829124,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c727a76a1377499e16b64f5c9cb5516a51ff89c7dc365bd7d55b39a80f0bf906",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20fb349b72177dd607ba",
          "headline": "Meta의 180억 달러 규모의 청소년 안전 거래로 TikTok과 YouTube Next에 압력이 가해짐",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788743773,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13dfd6f695cca4f6776492e69d2af6375a4836c13cfcb6621751508bc0dde196",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788982308,
      "signal": "주의 강화",
      "netScore": -9.81,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.4,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.37,
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
          "eventId": "63442a4a2206bc3b1a77",
          "headline": "폴더블 iPhone Duo의 소프트웨어는 경쟁사 대비 '빛나는' 데 도움이 됩니다.",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1788982308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ad66e505147f480152d6169b3fc788b5c2965eb3b24b17a9d831ea7e9a9a0ab",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1d21c76dd5aca4de2ee1",
          "headline": "ORCL 주식은 수익보다 목표 가격 인하를 확인했습니다. 분석가는 나쁜 소식이 가격에 반영되어 있다고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788975533,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e051c71e4aaf3784fe1d4d6b9113dd3459a6de5bad1a02cd40ec40f3c4721f31",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a6882d34e26af4d6edc2",
          "headline": "광자 양자 칩의 광 손실 문제를 해결하기 위해 ASML 거래에서 XNDU 주식 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788959661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67ee6961c7d4faeca11aba19c36354167c6ef013b1fdd65183f353d547f8b830",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec840ea366a86511d1d6",
          "headline": "유가가 다시 100달러를 기록하면서 Nasdaq, Dow, S&P 500 선물 혼합: QCOM, ORCL, AAPL, AMD, TSLA, RKLB, HOOD, GME 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788943155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ac2ba787536589b8e9b25b125562b5cf8a6fed3b33a834f5fb8f3541beb7db9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2b95fdaee54122dac7c3",
          "headline": "Apple의 폴더블 iPhone이 오늘 출시됩니다: AAPL 주식이 상승할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788917238,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e982b9b10637ca38c16ead2813078f4f1e3e69e0390b6918d1eca3b0253f8840",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "e08d294166d607e6fa00",
          "headline": "Apple, 새로운 CEO Ternus가 무대에 오르면서 최초의 폴더블 iPhone 공개 예정",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788884340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8c4fc81b70a48ca8c1bc29495bc1502f0dde9d52e28e524b625d99bb1bfa022",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "e3a8361107d278f73b6d",
          "headline": "AI가 휴대폰에서 메모리를 전환하고 Micron이 안정을 유지하고 Apple이 미끄러짐에 따라 SK 하이닉스는 7% 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788883086,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c4ce9a3fb432f08151ecdb249e4b10cb962fcba637c6cfcd28a7b41e81530e9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9e39269dd7aca333bcf6",
          "headline": "Bloom Energy의 S&P 500 진입으로 새로운 구매자 물결을 가져올 수 있다고 Clear Street가 밝혔습니다. BE 주식의 20% 상승 여력이 있을 것으로 예상됩니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788881584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ac227a2d658da94d5d1fdd8ec1724d84addff91060ec4be7edc2c6be259a5e2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccb5c941c14f53db1b2d",
          "headline": "애플도 메타처럼 170억 달러 규모의 아동 안전 합의에 직면할 수 있을까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788879903,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f691e846b0364299e58b2bef4d5350616ec4ddb792183d747bf71ffcf1a6757f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3e75613086ca18ec677b",
          "headline": "Apple: 하이퍼스케일러 수요로 인해 부정적인 영향을 받음",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788850156,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c14a58686e15a43a89f9c93a4a57cfba6b6afc67aacdde4325d8da19235dc6cc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4144ce284b01fef9a47b",
          "headline": "9월의 주요 M&A 거래: Nvidia, Dominion Energy, Nextera Energy, Vertiv In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788847964,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a31e4a15734c0e8da38044ba7d74e57ee28ad6addb508517255acbb3c67228c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dd85df54965f639f4c46",
          "headline": "BE Stock, S&P 500 인클루전에서 하룻밤 사이에 급등: 애널리스트는 28% 이상 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788830691,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ad5921bafdcd6df1e8d9f96cef04be11fcf12f95eee7b5fbd341fd739c006b28",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788972870,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.8,
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
          "eventId": "52269353f42ebfb85658",
          "headline": "45개의 Tesla Cybercabs가 이제 오스틴을 로밍하고 있습니다. 월스트리트가 기다려온 Robotaxi 비즈니스에 대한 의미는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788972870,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99a677ec4cf665b629a92b42115236392ed42a00b3719588f54f15efed30dc16",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "76ec4922ba02519db2fb",
          "headline": "Palantir vs. Tesla: 어떤 AI 주식을 사야 할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788950340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=faac4ecff935680afd2a469ed75675f15ac5005b6db2223458f9f7c80125e4f4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec840ea366a86511d1d6",
          "headline": "유가가 다시 100달러를 기록하면서 Nasdaq, Dow, S&P 500 선물 혼합: QCOM, ORCL, AAPL, AMD, TSLA, RKLB, HOOD, GME 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788943155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ac2ba787536589b8e9b25b125562b5cf8a6fed3b33a834f5fb8f3541beb7db9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "83ae83da2bde742479c3",
          "headline": "슬로베니아가 완전 자율 주행을 지우면서 테슬라 사이버캡 위협에 Uber가 4% 하락, TSLA 주가 4% 상승",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788894831,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b890242de378ed9adda730e34d574ce3f59d9a98fb911133f1299f77d54de5ee",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bd5f35ecf60ff20643b4",
          "headline": "Tesla: Elon은 Robotaxi Moonshot을 향해 가고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788848488,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f6ec1b9d6f274f5f3fd77b2010b11c4b1c8b8f4cc95e56aaa7ba70f620d8ee7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "36ccb543e0375b1a3bf8",
          "headline": "Cybercab은 Tesla를 변화시킬 수 있지만 규제 위험이 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788808199,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29979bee5c9df66107ec80dbb66f50ab6b5cd16919071ce9853ceaa7328fff42",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4b7c0e83a4149ec33334",
          "headline": "Tesla는 이번에는 다르다고 말합니다. 월스트리트는 그것을 믿을지 여부에 대해 분열되어 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788795806,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b00df3789445700e3808c68150d32d8ac532b32ccdddb90f87bb0d2a86857517",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ecf752c89ea4b806ecf3",
          "headline": "Elon Musk는 자신의 새 주조소에서 가스 터빈을 18개월 더 빠르게 온라인에 구축할 수 있다고 말합니다. 이 \"심오한 게임 체인저\"가 SpaceX와 Tesla에 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788659400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ddfa76d72c5e3c87b19596fd4877ebbb7605cf8cac1b7c04c396777e01024d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788992641,
      "signal": "중립·확인 대기",
      "netScore": 0.49,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.62,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.85,
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
          "score": -3.85,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.22,
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
          "eventId": "ef0274471843356cbac7",
          "headline": "오라클 보고서 목요일. 자본 예산은 사업에서 창출하는 현금의 두 배 이상입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788992641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9a0a6074224133694dcc57e2d033d109069e8b898dcd4643b33009273eaebe06",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "439b219541349671293b",
          "headline": "HPE(Hewlett Packard)의 ORCL(Oracle Corporation) 파트너십이 AI 네트워킹을 차세대 성장 엔진으로 바꿀 수 있을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788987790,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f66a7d2886da47ab9de96ac6b264dfeb62e11c063193eef594d61af60f3deb1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "af543bdca1a1eb660b95",
          "headline": "Oracle의 파괴적인 성격은 매우 매력적입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788972586,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c5b94b4dfcc242a16664c1243c5ed5607d1a12fff13c8269217b59d4b9f4885f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "99cc2084d3c9ee2551f4",
          "headline": "아마존과 오라클은 다가오는 Fed 회의에 대해 극도로 불안해하고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788968246,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a4afe8f0d68f1791e7388071cfff24c832e920589365d338c68d45c8da7bdd1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "09be52ba7d15439a3b8c",
          "headline": "Bloom Energy는 55일 만에 Oracle 데이터 센터에 전력을 공급했습니다. 그 숫자가 수익보다 더 중요한 이유는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788948300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8c6efea3f625ad673d93463c69d652e6058ab608dacdc7c67e0cdd2ddd7b2cd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8c4f66a6bd5bf8e6c0a6",
          "headline": "오라클: AI 스토리가 여전히 계약에 불과한지 알아보려면 9월 10일을 시청하세요",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788912898,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9a30e83018e521153d7facc048918c73975aac0d995dd7f02db999552e4db32",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8a3b8ade6d157ddf79e0",
          "headline": "예측: Oracle의 6,380억 달러 규모의 클라우드 인프라 백로그로 인해 2028년까지 최고의 성과를 내는 AI 주식 중 하나가 될 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788879000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a3f18ac4217d4214106f0c69c3142a5b9af4fa3a91bee3d1f76446009d4271e3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "8262825b785fe4ee46f5",
          "headline": "다우, S&P 500, 나스닥 선물은 이란 분쟁으로 석유가 100달러를 향해 되돌아가면서 하락: TSLA, NVDA, ORCL, INTC, BIDU, BABA, BE In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788856295,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5a94a395e24ff1e3dacea1d66ee21aef24b3c94faaaa133f9831ebf2832e600",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "86d1ed9927bfcfaca691",
          "headline": "EU 규제 당국, 수익 창출에 앞서 Oracle에 조기 경고 전달",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788825780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=19dc8295b04bf48b42f134c0f986fab0dea8eb65fca42f0247be4ad82506a893",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4260051bc716a49e385f",
          "headline": "오라클의 AI 수익 스토리는 개선되고 있지만 현금 흐름 테스트는 여전히 남아 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788814671,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e773ec4ceea579eb794d87157eff97c7a5c9423d465351b2f245a5601462dac",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "b519b25a5c4aa593de71",
          "headline": "인플레이션 데이터, 오라클 수익, 에너지 공급 경색: 이번 주에 주목해야 할 사항",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788699869,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a58caa30d9b5afdc47c26cfd32b5cd3a522c9e5ea5a1c9234bba7b0794c025f7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccbd6fbf419bb01004a5",
          "headline": "이번 주 시장에서 기대할 사항: 새로운 인플레이션 데이터; Apple의 가을 출시 이벤트 및 Oracle 수익",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788696000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a876fa71b6bc53ea066d0e2325f8fbe65043d92090aa2308363b37b4080eeba9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1789007724.5223246,
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788950340,
      "signal": "중립·확인 대기",
      "netScore": -0.14,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
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
          "score": -2.8,
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
          "eventId": "76ec4922ba02519db2fb",
          "headline": "Palantir vs. Tesla: 어떤 AI 주식을 사야 할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788950340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=faac4ecff935680afd2a469ed75675f15ac5005b6db2223458f9f7c80125e4f4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e2d25f8e85acbd4b8a05",
          "headline": "Palantir와 Nebius, 주권 AI 인프라 파트너십 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788944837,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e44365a641798ff91dfa0b16d19f30dea4fe7e5a7624b9c36baa4eb0e8b7fa27",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "f23fb60afda08860fad1",
          "headline": "Palantir 주식은 기업 파트너십을 바탕으로 지속적으로 성장하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788906699,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=054d7fda339d0a09eb188afc35df465d2b09806fb847cd656d3798af7541c108",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "35f40de9c05b45d75001",
          "headline": "AI 컴퓨팅 전쟁이 가열되면서 Nebius가 Palantir의 비밀 무기가 됨",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788878296,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dd1d46ca6508d17b431cd83989035e855281db3a57b64b6a6c2816cf9b1196e7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "20617ef6104fc2f1f14d",
          "headline": "Palantir: Bears Cannot Trap AI Leader Of The Meta-Compute Layer (등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788829124,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c727a76a1377499e16b64f5c9cb5516a51ff89c7dc365bd7d55b39a80f0bf906",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0f154036fc741067c037",
          "headline": "Michael Burry는 Palantir의 책이 소프트웨어 회사의 책보다는 컨설턴트의 책과 더 비슷하다고 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788666361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5714bc35e234c84b1b652560d57698764d9188429e146be68b146a681ea2b14e",
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
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788994932,
      "signal": "우호적 변화",
      "netScore": 8.27,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
          "level": "우호적"
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
          "score": -5,
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
          "eventId": "6dff0babcde61d0dbeea",
          "headline": "Marvell 또는 NVIDIA: 이익 1달러당 비용이 더 적은 것은 어느 것입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788994932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c4fe7030b5ff3d9fc13b612c854759c02fd9127736442ff58ab699f613224b83",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3593aa1e7f4b6d6bbe0a",
          "headline": "AMZN, META, GOOGL은 오하이오 주에서 데이터 센터 세금 감면을 재고함에 따라 수십억 달러의 손실을 입을 수 있다고 보고서에 나와 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788989362,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4844d095a2ba9ad4c216955ed49fa3250cf37fb47466d25dd03a5fc1631fe4a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "5ffa1c94a1b793397e4a",
          "headline": "간과된 칩 주식은 AI 반도체 붐에서 Nvidia, AMD, Broadcom을 능가할 준비가 되어 있음",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788986580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=835f3b1f585ccb6ae04d006003d09a06bad19dbccf12a972791656216f94634e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cb18d688d6640df3d8aa",
          "headline": "Qualcomm의 AI 칩 거래를 통해 Nvidia가 여전히 최고임을 입증하는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788982440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c0599bf40fca80776a43c8d40c92c3c7f6a76bb06d73ead9d4b6b7447626806",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a9ef324c6e735ab939a1",
          "headline": "Arista의 97억 달러 AI 약속으로 18개월의 수익 대기 시간 숨김",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788980584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0cb8a1201db480bf206d7bd6164fa4bed765449e2d56ffa3e6a8bb3c0db8f9c5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "d85f0f2383ad88ff1364",
          "headline": "아마존은 AI에 2000억 달러 이상을 투자할 계획이다. 그게 현명한 행동인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788960900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e998b739df3ca5ca63165e6ef562f50f0e49a1c61d7efae22ba52250ccf89691",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "feb75025a3b2db548739",
          "headline": "Mindgard는 Anthropic, NVIDIA, Microsoft, Google Cloud 및 AWS를 통해 AI 및 클라우드 생태계를 확장합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788960000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fac957f51e459dfe8c748dd3d0882844f372fcac6a355c6fcb8fffd0cb549005",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3bff8df30dc448a70be9",
          "headline": "Taiwan Semiconductor Manufacturing Company Ltd.(TSM)가 투자자의 관심을 끌고 있습니다: 알아야 할 사항은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788958806,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0c5cb1eebb3c3eb0727923b0e64034d4a8884ba49cf97173f7e0b3831618045",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "fe97d0c2e0220ac48117",
          "headline": "Google은 AI 에너지 문제에 대해 150억 달러의 멋진 해결책을 제시했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788949680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9eae671206d61f604157a5f0684f18cbe4f1fc5e5457e81e47bf49f9207bde38",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "41f26b8158c8eeae82e6",
          "headline": "Google, 핀란드 AI 데이터 센터에 130억 유로 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788949003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b06cff90053d982f079770e8d8834b3f0bd80c740016f375ac7357c702cf755",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "40f7cfc02e6e6017c886",
          "headline": "AI가 S&P 500 지수 펀드를 만지기에는 너무 위험하게 만들었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788948120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48fe143559880ac13371bd27691cfbfb65e8c8e8c3b19e731a10fa41b50e022a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "284166d2557ccb6fa65a",
          "headline": "Broadcom: 2,300억 달러 규모의 AI 꿈이 점점 비싸지고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788947566,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c68b3de3c3cbc60df036a5955ac9b4c37dfcf7a02ec292a8772a1ca52b46a933",
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
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788989567,
      "signal": "우호적 변화",
      "netScore": 5.31,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
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
          "score": -4.03,
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
          "eventId": "8a678436e34eb3974ba5",
          "headline": "Advanced Micro Devices(AMD)와 Cisco Systems(CSCO)의 파트너십으로 대규모 중동 AI 기회를 얻을 수 있을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788989567,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=21196760a1ab4d850f1cf8d8f4e271a5c889ddbf19028fc4ee55158da4c7f365",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3593aa1e7f4b6d6bbe0a",
          "headline": "AMZN, META, GOOGL은 오하이오 주에서 데이터 센터 세금 감면을 재고함에 따라 수십억 달러의 손실을 입을 수 있다고 보고서에 나와 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788989362,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4844d095a2ba9ad4c216955ed49fa3250cf37fb47466d25dd03a5fc1631fe4a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "5ffa1c94a1b793397e4a",
          "headline": "간과된 칩 주식은 AI 반도체 붐에서 Nvidia, AMD, Broadcom을 능가할 준비가 되어 있음",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788986580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=835f3b1f585ccb6ae04d006003d09a06bad19dbccf12a972791656216f94634e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a9ef324c6e735ab939a1",
          "headline": "Arista의 97억 달러 AI 약속으로 18개월의 수익 대기 시간 숨김",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788980584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0cb8a1201db480bf206d7bd6164fa4bed765449e2d56ffa3e6a8bb3c0db8f9c5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1b68d303793ab4eb30fa",
          "headline": "CFO가 AI 칩 시장 전망을 3조 달러로 높이면서 AMD 주가 3% 상승; 인텔이 주목하다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788965121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6fd36e837660d73978d3db29bcd873d62e28fff7c505e2c3b5d11b979819a06d",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d85f0f2383ad88ff1364",
          "headline": "아마존은 AI에 2000억 달러 이상을 투자할 계획이다. 그게 현명한 행동인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788960900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e998b739df3ca5ca63165e6ef562f50f0e49a1c61d7efae22ba52250ccf89691",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "3bff8df30dc448a70be9",
          "headline": "Taiwan Semiconductor Manufacturing Company Ltd.(TSM)가 투자자의 관심을 끌고 있습니다: 알아야 할 사항은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788958806,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0c5cb1eebb3c3eb0727923b0e64034d4a8884ba49cf97173f7e0b3831618045",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "d3613eb7ac99e2db42c5",
          "headline": "AMD와 Nvidia는 전례 없는 가치 평가 분할을 경험했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788950100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9aad56f7bb12d089cb5962c677b7807d1cc5d9f38bc1d9946c30e5e1c772824c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fe97d0c2e0220ac48117",
          "headline": "Google은 AI 에너지 문제에 대해 150억 달러의 멋진 해결책을 제시했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788949680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9eae671206d61f604157a5f0684f18cbe4f1fc5e5457e81e47bf49f9207bde38",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "41f26b8158c8eeae82e6",
          "headline": "Google, 핀란드 AI 데이터 센터에 130억 유로 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788949003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b06cff90053d982f079770e8d8834b3f0bd80c740016f375ac7357c702cf755",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "40f7cfc02e6e6017c886",
          "headline": "AI가 S&P 500 지수 펀드를 만지기에는 너무 위험하게 만들었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788948120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48fe143559880ac13371bd27691cfbfb65e8c8e8c3b19e731a10fa41b50e022a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "284166d2557ccb6fa65a",
          "headline": "Broadcom: 2,300억 달러 규모의 AI 꿈이 점점 비싸지고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788947566,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c68b3de3c3cbc60df036a5955ac9b4c37dfcf7a02ec292a8772a1ca52b46a933",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 35,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788986580,
      "signal": "주의 강화",
      "netScore": -2.45,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
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
          "score": -3.15,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.57,
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
          "eventId": "5ffa1c94a1b793397e4a",
          "headline": "간과된 칩 주식은 AI 반도체 붐에서 Nvidia, AMD, Broadcom을 능가할 준비가 되어 있음",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788986580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=835f3b1f585ccb6ae04d006003d09a06bad19dbccf12a972791656216f94634e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "77b8d7f174b775696a9b",
          "headline": "Marvell Technology는 '반 브로드컴'으로 자리매김해야 합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788961622,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65f159f354364e44572271ea9b561deee7509d7b6d274a135788f61c267883b6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "284166d2557ccb6fa65a",
          "headline": "Broadcom: 2,300억 달러 규모의 AI 꿈이 점점 비싸지고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788947566,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c68b3de3c3cbc60df036a5955ac9b4c37dfcf7a02ec292a8772a1ca52b46a933",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee41ee3cd30ab9f96eb2",
          "headline": "Broadcom의 $ 230 Billion AI Bet Gets Real",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788917798,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da14b8db1d35ac51598ece4512c2c3e61af41d763d7ddb78a3383312b647cab4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2b2c3a2549b83c099888",
          "headline": "S&P 500, 중동 긴장이 주요 인플레이션 데이터를 앞두고 석유 랠리에 박차를 가하면서 다우엔드가 낮아짐 — 메타, QCOM, BE, AMZN, AVGO In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788907599,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a315f6709959f09b7975b57023eb1f1e42c8aa9255c8cb764863fc87b4c164c5",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d89fd47fdef45cdcb479",
          "headline": "Nvidia와 Broadcom: 최근 분기별 수익 궤적 비교",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788901937,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc40c139926b5ff2051be84ab554f3af3871e90861ea3a2942e216cc5dac9983",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "40452814a24be6f5d240",
          "headline": "Qualcomm, 다중 세대 Amazon AI 실리콘 거래에서 5% 상승; Broadcom은 상승세를 보이고 있으며 Amazon은 정체 상태를 유지하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788877343,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65eb1aa56be457032e93b7e401babcef0586e7deac32cb826c1db78707470133",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "b769097e86b1493c9352",
          "headline": "Broadcom: 최근 수익으로 내가 가장 신뢰하지 않는 AI 주식인 이유 확인",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788836516,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d912c2264f2a145e9e1ed97bbaf3ee0df9cd5a1d268ef8a14b6eab04e4674957",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "953642f384fc9fbade42",
          "headline": "Broadcom 대 Marvell: AI 칩 주식 중 하나가 확실한 승자입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788791932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10cacaa0c276487f38fdc13443277bde152a7bc9aa6864dd73b60840f308cc19",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3292fb8083f71a9436c0",
          "headline": "Nvidia의 Hugging Face 거래는 Broadcom의 맞춤형 실리콘 위협에 대한 헤지입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788695471,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c698c3cd5183f58ca14f21253e285b623a7df657507fa969a2b9c0d7fa94ce0e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788982440,
      "signal": "중립·확인 대기",
      "netScore": -1.75,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 5,
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
          "score": -3.75,
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
          "eventId": "cb18d688d6640df3d8aa",
          "headline": "Qualcomm의 AI 칩 거래를 통해 Nvidia가 여전히 최고임을 입증하는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788982440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c0599bf40fca80776a43c8d40c92c3c7f6a76bb06d73ead9d4b6b7447626806",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e10ea018868c79bb36ff",
          "headline": "Cramer는 Qualcomm의 Amazon 협력이 정체된 재고에 \"특별한 것\"을 제공한다고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788974739,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e16e1ac7659c6bd4d3c4abc36224bb9a8ff6a108cf38ce8550cdfad5cefbe499",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3b36b219343d29b6a7b3",
          "headline": "오늘 Marvell 주식이 폭등한 이유",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1788970980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5fdd23b9343fb4eac06e548073cad7fc97accfe82012f4b9e63ba7b0613a06a1",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f07a68bace48308ab724",
          "headline": "Qualcomm의 Amazon 거래는 AI 성장 전망을 지원한다고 RBC는 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788967660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c8d4687c769eb446d83aa651a80d19b8b983cbe60a37c04e93a82148f8e0de8b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "558952756c79036c8967",
          "headline": "스마트폰은 잊어라: Qualcomm은 Amazon과 대규모 AI 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788964625,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7fd5937ca73c8377b2ce1a19be0dd96f84972247149864c1295666a8a0166ec",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "ec840ea366a86511d1d6",
          "headline": "유가가 다시 100달러를 기록하면서 Nasdaq, Dow, S&P 500 선물 혼합: QCOM, ORCL, AAPL, AMD, TSLA, RKLB, HOOD, GME 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788943155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ac2ba787536589b8e9b25b125562b5cf8a6fed3b33a834f5fb8f3541beb7db9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e033fddb9c2fe7e94a0f",
          "headline": "QCOM 주식 시판 전 상승: CFO는 Amazon 거래 후 '적절한 가격'의 주식을 선전하고 라이벌 칩을 위한 '한 번만' AI 스택을 홍보합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788941402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc1cd377227cdea618c051db5e789dd48535292273257ad1e37f74494a37d8d5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0ec669080706ad0f225b",
          "headline": "CEO가 Qualcomm-Amazon의 위협을 뿌리치면서 MRVL 주식은 계속 상승하고 있습니다: '우리는 이 전체 시장의 스위스입니다'",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788926319,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8118bcc9942e673c9a18b59b8d19226a7edf1d28a8b3bbb3b6d85600c50f3176",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7cad3b1e74bd6e47cf6a",
          "headline": "QCOM Stock Extends Gains Overnight: 애널리스트, Amazon AI 거래 'Qualcomm의 미적분 변경'",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788920477,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3041b1c4bda12a438d0c620773885af635e1fc6f2d0a9574ac77211ba844c534",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2b95fdaee54122dac7c3",
          "headline": "Apple의 폴더블 iPhone이 오늘 출시됩니다: AAPL 주식이 상승할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788917238,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e982b9b10637ca38c16ead2813078f4f1e3e69e0390b6918d1eca3b0253f8840",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "2b2c3a2549b83c099888",
          "headline": "S&P 500, 중동 긴장이 주요 인플레이션 데이터를 앞두고 석유 랠리에 박차를 가하면서 다우엔드가 낮아짐 — 메타, QCOM, BE, AMZN, AVGO In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788907599,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a315f6709959f09b7975b57023eb1f1e42c8aa9255c8cb764863fc87b4c164c5",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7bf7af3702ca5f729d0e",
          "headline": "오늘 Qualcomm 주식이 상승한 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788900476,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d074005398165f4fdce3ce9bd2a0c0cbfeb772fd357f06116a8d0623543ab3bf",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 22,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788926319,
      "signal": "중립·확인 대기",
      "netScore": 1.04,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.87,
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
          "eventId": "0ec669080706ad0f225b",
          "headline": "CEO가 Qualcomm-Amazon의 위협을 뿌리치면서 MRVL 주식은 계속 상승하고 있습니다: '우리는 이 전체 시장의 스위스입니다'",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788926319,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8118bcc9942e673c9a18b59b8d19226a7edf1d28a8b3bbb3b6d85600c50f3176",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7cad3b1e74bd6e47cf6a",
          "headline": "QCOM Stock Extends Gains Overnight: 애널리스트, Amazon AI 거래 'Qualcomm의 미적분 변경'",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788920477,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3041b1c4bda12a438d0c620773885af635e1fc6f2d0a9574ac77211ba844c534",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "263d8b1c8f450828b155",
          "headline": "머스크가 사이버 캡 속도를 높이고 캐시 우드의 방주가 수조 달러를 앞당기면서 TSLA 주식은 하룻밤 사이에 미끄러집니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1788919508,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=201d0df4e84abddf20f34b946b134d6b411693a51a5e9b485b85e159085d9f00",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2b2c3a2549b83c099888",
          "headline": "S&P 500, 중동 긴장이 주요 인플레이션 데이터를 앞두고 석유 랠리에 박차를 가하면서 다우엔드가 낮아짐 — 메타, QCOM, BE, AMZN, AVGO In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788907599,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a315f6709959f09b7975b57023eb1f1e42c8aa9255c8cb764863fc87b4c164c5",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "07af5c52d130b6fbe04b",
          "headline": "Nvidia의 새로운 파트너는 은행이 플러그를 뽑을 수 있는 기계에 AI를 원한다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788881679,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2bd274efde77bd159c943f55af06f018f8e82ee5da6dcc35c419d38f8d35141",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788994932,
      "signal": "주의 강화",
      "netScore": -5.45,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -2.62,
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
          "eventId": "6dff0babcde61d0dbeea",
          "headline": "Marvell 또는 NVIDIA: 이익 1달러당 비용이 더 적은 것은 어느 것입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788994932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c4fe7030b5ff3d9fc13b612c854759c02fd9127736442ff58ab699f613224b83",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "77b8d7f174b775696a9b",
          "headline": "Marvell Technology는 '반 브로드컴'으로 자리매김해야 합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788961622,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65f159f354364e44572271ea9b561deee7509d7b6d274a135788f61c267883b6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0ec669080706ad0f225b",
          "headline": "CEO가 Qualcomm-Amazon의 위협을 뿌리치면서 MRVL 주식은 계속 상승하고 있습니다: '우리는 이 전체 시장의 스위스입니다'",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788926319,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8118bcc9942e673c9a18b59b8d19226a7edf1d28a8b3bbb3b6d85600c50f3176",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ea83ba5a7d0e9b39dfc",
          "headline": "Advanced Micro Devices와 Marvell Technology는 계속해서 수익을 늘리고 있습니다. 그 밖에 볼만한 내용은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788872401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5487f52d5ec2ff7339ee92f5c5e8b6abf7b6cd59028d0047fd21967061f8210d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "953642f384fc9fbade42",
          "headline": "Broadcom 대 Marvell: AI 칩 주식 중 하나가 확실한 승자입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788791932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10cacaa0c276487f38fdc13443277bde152a7bc9aa6864dd73b60840f308cc19",
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
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788989390,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -3.32,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.9,
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
          "eventId": "30be6fc1ca57d6b54525",
          "headline": "Meta, 자동화된 비즈니스 메시징 강화를 위해 스웨덴 AI 스타트업 인수",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788989390,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d22aa0272d9035e92d7f7b24d9f4ddb003a454c5e657c603da3dbdfb0f3fccc9",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "43f7f68c9f6d663e33e7",
          "headline": "복귀가 효과가 있기 때문에 인텔 주식을 구입해야 합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788969981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c7be1f00a9df62a20da1b4bd8d49f55215f440ee3ccbd7176b12ba48777984e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7679767ca5850740a06d",
          "headline": "거의 4년이 지난 후에 인텔 주식을 구입해야 합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788941221,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90cb1a5c17af47e73222909236c27015847f5d748ceb981d004df168986d1ed6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e77eae8fc08248932692",
          "headline": "Broadcom의 인공 지능(AI) 칩 수익은 221% 증가했습니다. 더 많은 성장이 이루어지고 있습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1788941100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9db272ccd72a57fdd862933cd39e47c14a9fe5fddafdd1cbc9f5eb8c61662647",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b54b2bcf45d80b733452",
          "headline": "INTC 주식이 하룻밤 사이에 폭락했습니다: AMD는 인텔 파운드리 소문 속에서 TSMC 관계를 재확인했지만 공급업체 옵션은 계속 열어두었습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788925507,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d1f8be4db92c0789a22133ca5542b7309d1e5bcf12c827c8bfd76a0b7bac735",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5b4cfbd1cdba2f1ad065",
          "headline": "Google은 EU 규정으로 인해 검색 품질이 저하될 것이라고 경고합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788903949,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=87ccf687f2cd9f009cd5f36895793bc2a184e39d0c477e754a7f353ff7fd3c14",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7bf7af3702ca5f729d0e",
          "headline": "오늘 Qualcomm 주식이 상승한 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788900476,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d074005398165f4fdce3ce9bd2a0c0cbfeb772fd357f06116a8d0623543ab3bf",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0bc2606ab348dc670ab7",
          "headline": "지난 달 오라클 주가가 거의 15% 상승한 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788897180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30015b5f6dab25d41f7c5b7f776f6bd373021bf8d8cad07de62741daa682adca",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2e31e49d8a1e4a76e3c5",
          "headline": "Micron 대 Sandisk: 1개의 인공 지능(AI) 메모리 승자가 20% 하락했으며 오늘 매수가 확실히 우월함",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788867000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df9407e0a8dffe9ecf7bc29c65174d27dbdc17d6666131b99fb96e092bed7c3d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ff270ce370ec2dac3d29",
          "headline": "지난 달 세일즈포스 주가가 40% 급등한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788866400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51899971e35d2189a2b709d38a0ba5429ad9c4887359b14940936c952b8cf5ac",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8262825b785fe4ee46f5",
          "headline": "다우, S&P 500, 나스닥 선물은 이란 분쟁으로 석유가 100달러를 향해 되돌아가면서 하락: TSLA, NVDA, ORCL, INTC, BIDU, BABA, BE In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788856295,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5a94a395e24ff1e3dacea1d66ee21aef24b3c94faaaa133f9831ebf2832e600",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "73136971acb9ac4e0f7f",
          "headline": "인텔: 나는 기꺼이 받아들일 230억 달러의 희석",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788776735,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2e480e2a3a316e2a1ff4ef0d5a74faa17d14b929cb0e7bdb578d9e25c76208b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788958806,
      "signal": "중립·확인 대기",
      "netScore": 0.71,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.23,
          "level": "우호적"
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
          "score": -0.87,
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
          "eventId": "3bff8df30dc448a70be9",
          "headline": "Taiwan Semiconductor Manufacturing Company Ltd.(TSM)가 투자자의 관심을 끌고 있습니다: 알아야 할 사항은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788958806,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0c5cb1eebb3c3eb0727923b0e64034d4a8884ba49cf97173f7e0b3831618045",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e0dccd131a13d662ef42",
          "headline": "ASML 잉크, 칩 타이탄과 고급 EUV 리소그래피 거래 TSMC, Samsung",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788926460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9685212587b2c10a2f280850047df6df8049aad00db2c8195b0ca96a9f84c91",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "b54b2bcf45d80b733452",
          "headline": "INTC 주식이 하룻밤 사이에 폭락했습니다: AMD는 인텔 파운드리 소문 속에서 TSMC 관계를 재확인했지만 공급업체 옵션은 계속 열어두었습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788925507,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d1f8be4db92c0789a22133ca5542b7309d1e5bcf12c827c8bfd76a0b7bac735",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "85c131752a4ef95516d4",
          "headline": "인텔, High-NA EUV 생산 선두에서 5% 상승, ASML 및 대만 반도체 진출 3%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788874341,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22bf7995134c56689342d46246942c2317a4832289f98b6e61b534cfd0edfc48",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b66dec594615c0dbe6a0",
          "headline": "TSMC와 삼성은 AI 칩용 ASML High NA EUV 장비를 약속합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788871928,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ca5b7611bc836a0cbdd401ea4e6512a38ebdb30fa561397f35b0d146fa963f1",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ae8832686e60679b8335",
          "headline": "TSMC는 2,650억 달러가 대만의 외교 통화가 되면서 거의 3% 상승했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788817055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bf0cd38ae488bf7801bc604bc46253bb4aef1d2499fe164b1bc0226a4c6e116",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0be5f09dea68401db8b0",
          "headline": "TSMC의 2,650억 달러 규모의 미국 투자가 대만 칩 외교의 일부가 되고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788809138,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8476a3bd1e9193b55292fff2b7a2989132ebfc0b8ff1bdef5b4ac855769423da",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788959661,
      "signal": "우호적 변화",
      "netScore": 5.81,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.92,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.32,
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
          "eventId": "1a0c50fa3da63e2fec75",
          "headline": "광자 양자 칩의 광 손실 문제를 해결하기 위해 ASML 거래에서 XNDU 주식 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788959661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67ee6961c7d4faeca11aba19c36354167c6ef013b1fdd65183f353d547f8b830",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "fcfae000015fa2ed0718",
          "headline": "Xanadu와 ASML, Photonic Quantum 하드웨어용 리소그래피 발전을 위한 협력 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788951600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9182a19b1e88461f2a60e2ebbbef2a5a41dff5f600513215909118d4c7e56b67",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e0dccd131a13d662ef42",
          "headline": "ASML 잉크, 칩 타이탄과 고급 EUV 리소그래피 거래 TSMC, Samsung",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788926460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9685212587b2c10a2f280850047df6df8049aad00db2c8195b0ca96a9f84c91",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "85c131752a4ef95516d4",
          "headline": "인텔, High-NA EUV 생산 선두에서 5% 상승, ASML 및 대만 반도체 진출 3%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788874341,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22bf7995134c56689342d46246942c2317a4832289f98b6e61b534cfd0edfc48",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c3596003b0649e59bda8",
          "headline": "삼성전자와 ASML, 차세대 반도체 제조를 위한 전략적 협력 확대",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788868260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ee6b152da3ad585fcbace7dddb1ddfff182c5f55a5a2060037cbd9c5195bc5b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1789007724.5223246,
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1789007724.5223246,
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
      "updatedAt": 1789007724.5223246,
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
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788989362,
      "signal": "우호적 변화",
      "netScore": 6.7,
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
          "score": -5,
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
          "eventId": "3593aa1e7f4b6d6bbe0a",
          "headline": "AMZN, META, GOOGL은 오하이오 주에서 데이터 센터 세금 감면을 재고함에 따라 수십억 달러의 손실을 입을 수 있다고 보고서에 나와 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788989362,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4844d095a2ba9ad4c216955ed49fa3250cf37fb47466d25dd03a5fc1631fe4a7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "a9ef324c6e735ab939a1",
          "headline": "Arista의 97억 달러 AI 약속으로 18개월의 수익 대기 시간 숨김",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788980584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0cb8a1201db480bf206d7bd6164fa4bed765449e2d56ffa3e6a8bb3c0db8f9c5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "8766466de73c61ecc430",
          "headline": "Goldman이 최악의 상황은 끝났다고 말하면서 메모리 주식 반등: SK Hynix 5% 상승, SanDisk 3% 상승, Micron 2% 상승",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788967201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a2f772375f30bb5c421e292a501701c5bb527cad99c636e7dfcc51f26b3b640",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d85f0f2383ad88ff1364",
          "headline": "아마존은 AI에 2000억 달러 이상을 투자할 계획이다. 그게 현명한 행동인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788960900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e998b739df3ca5ca63165e6ef562f50f0e49a1c61d7efae22ba52250ccf89691",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "3bff8df30dc448a70be9",
          "headline": "Taiwan Semiconductor Manufacturing Company Ltd.(TSM)가 투자자의 관심을 끌고 있습니다: 알아야 할 사항은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788958806,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0c5cb1eebb3c3eb0727923b0e64034d4a8884ba49cf97173f7e0b3831618045",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "fe97d0c2e0220ac48117",
          "headline": "Google은 AI 에너지 문제에 대해 150억 달러의 멋진 해결책을 제시했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788949680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9eae671206d61f604157a5f0684f18cbe4f1fc5e5457e81e47bf49f9207bde38",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "41f26b8158c8eeae82e6",
          "headline": "Google, 핀란드 AI 데이터 센터에 130억 유로 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788949003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b06cff90053d982f079770e8d8834b3f0bd80c740016f375ac7357c702cf755",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "40f7cfc02e6e6017c886",
          "headline": "AI가 S&P 500 지수 펀드를 만지기에는 너무 위험하게 만들었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788948120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48fe143559880ac13371bd27691cfbfb65e8c8e8c3b19e731a10fa41b50e022a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "284166d2557ccb6fa65a",
          "headline": "Broadcom: 2,300억 달러 규모의 AI 꿈이 점점 비싸지고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788947566,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c68b3de3c3cbc60df036a5955ac9b4c37dfcf7a02ec292a8772a1ca52b46a933",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "17c3855da3e88528cacc",
          "headline": "MUU: Micron의 새로운 계약으로 인해 2X 상승 사례가 복잡해졌습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788946052,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccfcd7a3c19039558a4273430dddd9696adcc9c15183290ef8778487049db60c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "98c85d1419cc1aebf719",
          "headline": "잘 알려지지 않은 이 AI 스토리지 주식은 S&P 500(Micron이나 Sandisk 아님)에 합류할 것입니다. 역사는 이런 일이 다음에 일어날 것이라고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788944881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78be41fc9b9ee297a59eff236ac960a5797d7a492f5465ade90d78f0299796d8",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee41ee3cd30ab9f96eb2",
          "headline": "Broadcom의 $ 230 Billion AI Bet Gets Real",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788917798,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da14b8db1d35ac51598ece4512c2c3e61af41d763d7ddb78a3383312b647cab4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 32,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788967201,
      "signal": "중립·확인 대기",
      "netScore": 0.92,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.88,
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
          "score": 0.18,
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
          "eventId": "8766466de73c61ecc430",
          "headline": "Goldman이 최악의 상황은 끝났다고 말하면서 메모리 주식 반등: SK Hynix 5% 상승, SanDisk 3% 상승, Micron 2% 상승",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788967201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a2f772375f30bb5c421e292a501701c5bb527cad99c636e7dfcc51f26b3b640",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "08177e8de32a88e5109c",
          "headline": "SanDisk 주식이 팔 수 없을 때에도 계속 오를 수 있습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788911158,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d40e448b62837dad5bda9b149908518fbeb8bee3e46b5ba3a845d1fe9c5e000f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2e31e49d8a1e4a76e3c5",
          "headline": "Micron 대 Sandisk: 1개의 인공 지능(AI) 메모리 승자가 20% 하락했으며 오늘 매수가 확실히 우월함",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788867000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df9407e0a8dffe9ecf7bc29c65174d27dbdc17d6666131b99fb96e092bed7c3d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788917238,
      "signal": "주의 강화",
      "netScore": -7.56,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.1,
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
          "score": -4.2,
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
          "eventId": "2b95fdaee54122dac7c3",
          "headline": "Apple의 폴더블 iPhone이 오늘 출시됩니다: AAPL 주식이 상승할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788917238,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e982b9b10637ca38c16ead2813078f4f1e3e69e0390b6918d1eca3b0253f8840",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "e08d294166d607e6fa00",
          "headline": "Apple, 새로운 CEO Ternus가 무대에 오르면서 최초의 폴더블 iPhone 공개 예정",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788884340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8c4fc81b70a48ca8c1bc29495bc1502f0dde9d52e28e524b625d99bb1bfa022",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "25705c72e076e67971e7",
          "headline": "팀 쿡(Tim Cook)은 15년 동안 총 2,720%의 수익률을 달성했습니다. John Ternus가 Apple 투자자를 위해 동일한 작업을 수행할 수 있는지 여부는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788818100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd2a41f6926a62bd9c5b662619f4716a71fce858072a7778c6705182f3b13b4c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "ccbd6fbf419bb01004a5",
          "headline": "이번 주 시장에서 기대할 사항: 새로운 인플레이션 데이터; Apple의 가을 출시 이벤트 및 Oracle 수익",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788696000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a876fa71b6bc53ea066d0e2325f8fbe65043d92090aa2308363b37b4080eeba9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788980584,
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
          "eventId": "a9ef324c6e735ab939a1",
          "headline": "Arista의 97억 달러 AI 약속으로 18개월의 수익 대기 시간 숨김",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788980584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0cb8a1201db480bf206d7bd6164fa4bed765449e2d56ffa3e6a8bb3c0db8f9c5",
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
      "updatedAt": 1789007724.5223246,
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
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788959941,
      "signal": "주의 강화",
      "netScore": -2.17,
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
          "score": -0.7,
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
          "eventId": "959b52be41f628107e25",
          "headline": "Lumentum 사장, 1,500주 매각",
          "eventLabel": "내부자 매도",
          "publishedAt": 1788959941,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea45863ffad64008ef78e9bb00e884467616a3d8d2a9b3176cd4665671d0aa72",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "789954fabda2e167435b",
          "headline": "2026년에는 Applied Optoelectronics, Lumentum 또는 Coherent 중 어느 광학 주식이 지배적이었습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788787822,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=744193782ab532c7f4178bfc5ba1cb0fa2d5854dfe1c2b4eb887468dabc37b4f",
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
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1789007724.5223246,
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788911881,
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
          "eventId": "77971b9f71f162b25c53",
          "headline": "Constellation Energy의 최대 AI 전력 거래는 2027년 6월까지 지불을 시작하지 않습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788911881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3f7479f0ef0e61dc2f603c5537982ee47ceb78678bde79027b3c3042d7329dc",
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
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788946435,
      "signal": "주의 강화",
      "netScore": -4.2,
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
          "score": -2.0,
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
          "score": -2.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.0,
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
          "eventId": "a348e02999e6ba502322",
          "headline": "Vistra: AI 전력 공급업체가 부하 증가 및 인수 상승을 충족 - 매수 반복",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788946435,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f22fcaec8fc5c2298b000da277c7d34d628fa484bfc074ab03dc21a0207e8477",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3a7e8f61da8d1d78e024",
          "headline": "비스트라는 고점 대비 30% 하락했습니다. 내가 지금 할 일은 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788893400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ea445f90018939f97cf7db5045cdf1546506803a1078e96b66f0f08f4be6b0e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6a49f6673bab26e1209f",
          "headline": "VST SEC Form S-3ASR 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1788879600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126035954/ny20081693x1_s3asr.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788959101,
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
          "eventId": "baa0247c0d8303fdb48d",
          "headline": "Eaton 대 Vertiv: 2026년에는 어떤 산업재 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788959101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f045e66d19da73afa5d8c2c945d634d9b80a98f6aa4a3bffb9de8fbf78fbe540",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1789007724.5223246,
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
      "updatedAt": 1789007724.5223246,
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
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788959101,
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
          "eventId": "baa0247c0d8303fdb48d",
          "headline": "Eaton 대 Vertiv: 2026년에는 어떤 산업재 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788959101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f045e66d19da73afa5d8c2c945d634d9b80a98f6aa4a3bffb9de8fbf78fbe540",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a7fee38538a1544aa485",
          "headline": "Vertiv (VRT) 는 UtilityInnovation을 위해 최대 $ 26억 상당의 거래를 체결했습니다. 더 빠른 전력 배치가 임시 배려를 정당화할 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788924655,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6e4877c3a6239de203dfc5da8b185d6a273095e50eb3d947b4f534c80ceb293d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "4144ce284b01fef9a47b",
          "headline": "9월의 주요 M&A 거래: Nvidia, Dominion Energy, Nextera Energy, Vertiv In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788847964,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a31e4a15734c0e8da38044ba7d74e57ee28ad6addb508517255acbb3c67228c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1789007724.5223246,
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
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788911862,
      "signal": "주의 강화",
      "netScore": -3.0,
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
          "score": -2.0,
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
          "score": -1.0,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.65,
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
          "eventId": "0b40d822ba927bd88910",
          "headline": "STX 주식: 가격에 숨겨진 수학",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788911862,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ba8234a152bee2685ddbbb6c6d3b901688811cddc9b29da2c95ab7f173aae12",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "af0e184d3ebe0f40a23e",
          "headline": "STX SEC Form 8-K 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1788879600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000119312526385961/d109585d8k.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1789007724.5223246,
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
      "updatedAt": 1789007724.5223246,
      "dataAsOf": 1788959661,
      "signal": "우호적 변화",
      "netScore": 2.44,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "eventId": "1a0c50fa3da63e2fec75",
          "headline": "광자 양자 칩의 광 손실 문제를 해결하기 위해 ASML 거래에서 XNDU 주식 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788959661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67ee6961c7d4faeca11aba19c36354167c6ef013b1fdd65183f353d547f8b830",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a6882d34e26af4d6edc2",
          "headline": "광자 양자 칩의 광 손실 문제를 해결하기 위해 ASML 거래에서 XNDU 주식 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788959661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67ee6961c7d4faeca11aba19c36354167c6ef013b1fdd65183f353d547f8b830",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fe97d0c2e0220ac48117",
          "headline": "Google은 AI 에너지 문제에 대해 150억 달러의 멋진 해결책을 제시했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788949680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9eae671206d61f604157a5f0684f18cbe4f1fc5e5457e81e47bf49f9207bde38",
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1789007724.5223246,
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
