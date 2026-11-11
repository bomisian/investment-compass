// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1794415191.391681,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794395819,
      "signal": "우호적 변화",
      "netScore": 5.03,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.85,
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
          "eventId": "ec0e1e88007a39659df3",
          "headline": "새로운 AI 경쟁자가 270억 달러 규모의 사업을 목표로 함에 따라 Microsoft 주가는 하락했습니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794395819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=080915c6efb08161eb276baa522c981637f16ad5b48e26c5141364925f6b11b9",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f3f67ac9087199662bbd",
          "headline": "Microsoft Corporation(MSFT)은 AI에 수십억 달러를 쏟아 붓고 있습니다. 막대한 지출이 향후 수익에 영향을 미칠 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794345742,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d071b4491c0a1dc3e5c198934457bcc5b100a72817f99769fe1661f28bb2c19",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c0369a06a44de4a8e4e4",
          "headline": "마이크로소프트는 오라클을 덤프합니다. 좋은 소식: 기존 칩이 \"20% 프리미엄\"으로 갱신됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794327641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fac8a7a166c6fd1d595aff70c85d06ca4dc43b319667e9031133e01a17f87c12",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "215efdfa98b854d5da28",
          "headline": "Northern Trust와 Microsoft Frontier Company는 AI를 통해 클라이언트 온보딩을 혁신하기 위해 협력합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794240000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e0f1c58796363f882d2b2745d9ed412463186b4521c47b792f5bc458557e435",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1cfbe6852e047cc8c89f",
          "headline": "나는 품질에 대한 사후 중간 비행이 Microsoft를 기어로 발동시킬 것이라고 내기하고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794239138,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd1c2744836fe2c4cdfa3697770b1398974b1492a946abb03c29796161bdabd1",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b44f18a924b3dfd226bc",
          "headline": "마이크로소프트, 오라클 AI 인프라 계약 종료",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794231220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ed20ce91bce970a547272724bb966bf24b7ba4e01afc8433b954aff8efff354",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee0f8bdb08bc26b6cca6",
          "headline": "마이크로소프트의 오라클 움직임은 투자자들에게 새로운 질문을 제기합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794196020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=afd91d04486bc538be8c8e2cdfb353f360d26c957363829bd42b79f91c173a64",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794346013,
      "signal": "주의 강화",
      "netScore": -2.8,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.7,
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
          "score": -4.55,
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
          "eventId": "f10366db44f82ffb7408",
          "headline": "Alphabet Inc.(GOOGL)은 대규모 AI 지출 경쟁의 일부입니다: 투자가 충분한 수익을 제공할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794346013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b31db05b3ac3c67edcc351d9c0f1481d085c7b8ce23d34f2bcfc3201b58a136",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1ad965c8382f751c1ead",
          "headline": "Fervo Energy(FRVO)는 Google 거래 및 Cape Station 출시 이후 저평가되어 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794341455,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9e64b6da13cca060fa0691b8ade807769fc578fc082b6936b4bfa0c124878f13",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "6089844e91692919ff70",
          "headline": "Tesla Bull은 민주당이 데이터 센터보다 더 큰 위험인 \"자율성을 차단\"할 것이라고 예측합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794330385,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b396b16ca8ff8ee97560e0958bbcf645dfba33baef235c2f16e2ab170ee60a37",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b438b78d6c58c336c996",
          "headline": "Andrew Ross Sorkin: Anthropic의 IPO는 Amazon, Google 및 Microsoft의 \"핵심\"입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794328675,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18a70d43f84cb52e928efbf0dbb696a88122fd67d5bfdd3e4c05fc128dc2b6b3",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "638b6ffcec54205c8fe9",
          "headline": "Alphabet의 규제 우위는 결코 언급되지 않지만 그래야 합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794325514,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddb398f2b27c83c21e1d98b167fd7feaf37c3f07004dd1a8e9002cecfac4a965",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d003739a5839e7d50ca5",
          "headline": "Nvidia, Alphabet, Micron은 최대 고객 중 한 곳에서 260억 달러 규모의 주식을 매입하기로 합의했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794324198,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a82fb8f9a830682181d7627c381c0f9c45947d81d6736e75395036207192884f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "317822f661ad6b1300d4",
          "headline": "Nvidia와 Broadcom은 이러한 성장주를 통해 AI 데이터 센터를 확장하고 있습니다. 상승할 수 있는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794321300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=313452b5346b9cfc7b46bf38c2b2721be25b8bd861212a8d1c86e57248755565",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "06025a6b9cd01eea332e",
          "headline": "알파벳: $300 미만 구매",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794269047,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cbcfaaaf797accd5a13f1b1c324d6072dfd81e00a6a78a88faaddfd6e571adc2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7a9cd81e382a13f3a08d",
          "headline": "오늘, 11월 9일 주식 시장: AMD, Oppenheimer 업그레이드 및 Google Cloud 칩 선택에 뛰어들다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794263402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=08b8056d2964ad1cea8a13e77e89d7e6982e6dcb891ac17068100f42d5982901",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a39a46f96b4ede5168cc",
          "headline": "오늘 알파벳 주식이 상승한 이유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794260688,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1678ad4fdf3a05760e3d4d811aaf665e3b7abb80d3da778d6def39ed545eae5a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b3a225b48dd19af5ca50",
          "headline": "Google의 1,350억 달러 칩 예측의 진정한 승자: Broadcom",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794257131,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a065a8051441fa680ca88a0ec2258e95c9f66aaa4b769a9737e929fd1099284b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "aa93c7d725c878ad505d",
          "headline": "JPMorgan이 애널리스트 포커스 목록에서 알파벳보다 메타를 선택함에 따라 메타가 5% 급등했습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794239781,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df567c0631384f06132b3c72c2190e7fdb1c888752cacc7c28d3db703fdc2b26",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 15,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794358262,
      "signal": "주의 강화",
      "netScore": -3.42,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.18,
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
          "score": -1.22,
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
          "eventId": "bc5db9b95c7b835200a5",
          "headline": "Amazon의 클라우드 컴퓨팅 사업은 이미 S&P 500의 476개 회사보다 더 많은 수익을 창출하고 있습니다. 1조 달러에 도달하려면 다음이 필요합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794358262,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c4c2c2dd2751cfd6297bbd81d51eb1aa4c7ef86f9c0b1afd8940573e2bfcd62",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0885407fe7dc42521c58",
          "headline": "Amazon.com(AMZN)이 해양 위성 리셀러 거래 이후에 할인을 받을 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794337911,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53d153860d04741cff58c0f3704bad5d74b1a359ce3f3d6da9c37aa2c70a2ee8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5cc295288d8b5822d02e",
          "headline": "억만장자 David Rubenstein이 Facebook의 30,000달러 스타트업 피치를 통과하여 수십억 달러의 이익을 얻기 전에 Amazon을 매각했습니다. '심각하게 받아들이지 않았다'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794334462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ab470c6d0eb2e9126216cd59d60e6aaa75a5b1f6744e5505810025ca0c8f422",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2534946cdcd328320762",
          "headline": "예측: 아마존 주식은 2027년에 다음 큰 반등을 할 준비가 되어 있을 수 있습니다",
          "eventLabel": "내부자 매도",
          "publishedAt": 1794332027,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44423d8cc3ec2fb846b57db897f903e2c9f2a2bbac10fad5ce9c3e903709e461",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b438b78d6c58c336c996",
          "headline": "Andrew Ross Sorkin: Anthropic의 IPO는 Amazon, Google 및 Microsoft의 \"핵심\"입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794328675,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18a70d43f84cb52e928efbf0dbb696a88122fd67d5bfdd3e4c05fc128dc2b6b3",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aa93c7d725c878ad505d",
          "headline": "JPMorgan이 애널리스트 포커스 목록에서 알파벳보다 메타를 선택함에 따라 메타가 5% 급등했습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794239781,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df567c0631384f06132b3c72c2190e7fdb1c888752cacc7c28d3db703fdc2b26",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "008b4dc311691d2a11d0",
          "headline": "JPMorgan이 알파벳보다 쌍을 선택함에 따라 META, AMZN 주식이 급등합니다. 더 강력한 AI 수익과 클라우드 성장을 확인합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794238760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=268e0716a88192dc4783a428a770a74568e9b5d74b8d85cfebe1b313e5bbe5fa",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "35ec01cf563bd53a5df6",
          "headline": "Meta와 Amazon은 JPMorgan이 선정한 최고의 인터넷 추천 상품으로 5% 상승합니다. 알파벳은 자리를 잃었음에도 불구하고 3% 상승",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794235699,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f405d7ea27e7349ca7aa475c149b1a7eb4120bb376bebbe0d0629bf507a36560",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1ce87d9cc75c3fcc91ba",
          "headline": "Amazon의 클라우드 비즈니스는 거의 5년 동안 하지 않았던 일을 해냈습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794216122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa16f8f281851d6d32d302770a08f3b407d738643e10d9cffbdc7377efee9a79",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794403464,
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
          "score": 0.17,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -4.55,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": -0.35,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -1.4,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.2,
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
          "eventId": "ad8a43c1179a740f575e",
          "headline": "대선 캠페인 중 동등한 콘텐츠를 제공하지 않은 혐의로 브라질 선거 법원에서 메타 벌금 부과",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794403464,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c51f312537b484e6acd09cf2a51c496b86a78f396a53c1808d9d20a6e979276",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f0cf13e37641f4b4767f",
          "headline": "Meta의 Ember는 경쟁사와 함께 더 저렴한 모델에 베팅합니다.",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1794347728,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc239ea631cadf14b381b77d11d651f1333fb0c72a053a7b89c1c232a62f58f5",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5fb57b7de39385159b3f",
          "headline": "Meta Platforms, Inc.(META)는 AI를 위해 수천억 달러가 필요할 수 있습니다. 이는 투자자에게 무엇을 의미합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794345954,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df0592630818f56cad007c95c58fa845ded3000166026726395b2a979087e2b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5cc295288d8b5822d02e",
          "headline": "억만장자 David Rubenstein이 Facebook의 30,000달러 스타트업 피치를 통과하여 수십억 달러의 이익을 얻기 전에 Amazon을 매각했습니다. '심각하게 받아들이지 않았다'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794334462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ab470c6d0eb2e9126216cd59d60e6aaa75a5b1f6744e5505810025ca0c8f422",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "faa8809c385d6bb4318a",
          "headline": "암호화폐 수익이 4억 1천만 달러의 3분기 이익을 창출함에 따라 Trump Media는 9% 상승했습니다. 럼블은 3% 하락하고 메타는 안정적으로 유지됩니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794329857,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc6152d02320c6c8da088ad264f01fcf06ee262b287ad259a7a456dd392b5258",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "742ceb7c20b699de54c5",
          "headline": "Alphabet, Meta, Oracle이 모두 협력하여 Nvidia의 가장 큰 경쟁 우위를 무너뜨립니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794305700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b4ba5ca6757a6da976c154a8c9ad7554ccbab36d9c99ee41624a74a5d1500f12",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f51b4fc8245dff7dd104",
          "headline": "IMAX Inks, Meta VR 안경용 Meta와 IMAX Enhanced 인증 VR 장치 계약 체결, 2027년에 장치에 업데이트된 IMAX 앱 출시",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794303271,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=23f68182840a295e802ec75ae8fd69d74f948bcd63384feb68d4906d72575142",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9f0ce76bdb21fe718b09",
          "headline": "메타 플랫폼 주식: 650달러에 거래를 훔치는 것입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794257881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=be954609229223ac426b4472aec06b3df4a68427cabf988e6e767f6603d7f39a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "02d93a7559734da6b968",
          "headline": "이튼은 한 달 만에 23% 손실을 입었습니다. RBC는 여기서 58% 상승 여력이 있다고 봅니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794253013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdddc912998a04a6557924c7a06bc9d8fd4089271a591b332fdcfbd679b276c3",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "917f35ef6795f2e6be9d",
          "headline": "오클로는 고점 대비 86% 하락했습니다. Meta의 Reactor가 온라인 상태가 되면 주가가 급등할까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794249780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b835181a780b4a47a8aca9e1b4e08700a15533f8291a548570808d26ebee3b02",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0bbbfd10b82395501822",
          "headline": "JPMorgan은 애널리스트 포커스 목록에 메타 플랫폼을 추가했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794242321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9d06186abbc3385e45a9eaefa1103a11f35061dde0a61491b48a11067bfb5b26",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "008b4dc311691d2a11d0",
          "headline": "JPMorgan이 알파벳보다 쌍을 선택함에 따라 META, AMZN 주식이 급등합니다. 더 강력한 AI 수익과 클라우드 성장을 확인합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794238760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=268e0716a88192dc4783a428a770a74568e9b5d74b8d85cfebe1b313e5bbe5fa",
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
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794348145,
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
          "eventId": "48c632b9d58771e9788d",
          "headline": "Apple: 규제 불확실성 속에서 Capex-Light AI(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794348145,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e93dcdf93585100d00391fc8db5bf17a2f669f29fbb406b640ee4b61ec3a04e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e4b9c0950b7beed3195f",
          "headline": "애플, 직원 3명 사망 후 주요 공급업체 조사에 직면",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794320346,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2022044d8020e1ed1c8a93557178ea13553587832838ceae15f8b8d6d2cd72f5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "6ff08acb8a5111eb3bfa",
          "headline": "AAPL SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794150000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/320193/000114036126042798/ef20085077_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794329751,
      "signal": "주의 강화",
      "netScore": -3.64,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.7,
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
          "eventId": "1952eacb1c60e0aab792",
          "headline": "Lucid는 3분기 부진에도 불구하고 17억 5천만 달러의 유동성 증가로 8% 상승했습니다. Rivian Dips, Tesla는 거의 변화하지 않았습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794329751,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=220527f188b5423c0dbe61b770c23158c4e7f3efc6cff750d8af505659fd4775",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "36edca7c214aede27708",
          "headline": "Nvidia, Palantir 및 Tesla는 이 530억 달러 경고로 월스트리트에 충격파를 보내고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794227162,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2815bd63bf1bc0378254d5574a4b3271abc0f0dbc2b76ebaea75a25d9a202d29",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7baefb01f92b4d218c5d",
          "headline": "Cybertruck이 Cybercab으로 전환함에 따라 TSLA 주가가 밤새 하락했습니다. Terafab은 월간 100만 개의 웨이퍼를 주시하고 있는 것으로 알려졌습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794212122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45a180057cdcefb3d84853d4647fb638d532697cfa7275daafd4e87b684609d4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c89b2d191a9f1e1d2049",
          "headline": "Tesla의 FSD(감독) 부착률은 신차에서 75%를 기록했습니다. 2027년 주식에서 단일 숫자가 Robotaxi보다 더 중요한 이유는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794150600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7867867ed2816b9aff0f990938cffbe228f5b86d34af5486daa2798043e66bf1",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794327641,
      "signal": "중립·확인 대기",
      "netScore": 0.42,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.52,
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
          "score": -0.52,
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
          "eventId": "c0369a06a44de4a8e4e4",
          "headline": "마이크로소프트는 오라클을 덤프합니다. 좋은 소식: 기존 칩이 \"20% 프리미엄\"으로 갱신됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794327641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fac8a7a166c6fd1d595aff70c85d06ca4dc43b319667e9031133e01a17f87c12",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "742ceb7c20b699de54c5",
          "headline": "Alphabet, Meta, Oracle이 모두 협력하여 Nvidia의 가장 큰 경쟁 우위를 무너뜨립니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794305700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b4ba5ca6757a6da976c154a8c9ad7554ccbab36d9c99ee41624a74a5d1500f12",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fdfa9932285a2412cf35",
          "headline": "마이크로소프트가 떠나면서 주식시장은 \"오라클 대차대조표의 석화\"",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794253738,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c0a1c954cbb9e66a215f2c29071af095fa3cdc980276c99b90ae5d272020265",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b44f18a924b3dfd226bc",
          "headline": "마이크로소프트, 오라클 AI 인프라 계약 종료",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794231220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ed20ce91bce970a547272724bb966bf24b7ba4e01afc8433b954aff8efff354",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794318590,
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
          "eventId": "0ebfc48febe117ec572a",
          "headline": "S&P가 거래 등급을 A로 낮추고 250억 달러 규모의 자사주 매입을 하면서 Salesforce가 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794318590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8c3c3452f87d4db50ba66fe1f21b78b2fbf5a266b169683b0335c86c63804d9",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794246351,
      "signal": "주의 강화",
      "netScore": -8.4,
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
          "eventId": "67a3cfab032d9c3ee593",
          "headline": "국방 재편성: 록히드 마틴 대 팔란티어",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794246351,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d804865af3409be22ea4b3a2f33d9623690d297f1920c29a05a77d21bb79e131",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "36edca7c214aede27708",
          "headline": "Nvidia, Palantir 및 Tesla는 이 530억 달러 경고로 월스트리트에 충격파를 보내고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794227162,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2815bd63bf1bc0378254d5574a4b3271abc0f0dbc2b76ebaea75a25d9a202d29",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "957272938ee80a19f721",
          "headline": "Palantir 대 Snowflake: AI 매도는 2027년에 중요한 차이를 드러냅니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794198002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=889f05b2a6858703544c8e09bacfe80df44a94493ea48360a44281f9c1e9dde9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "00263eb80b975fc4b5e1",
          "headline": "Adobe 대 Palantir Technologies: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794161250,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05fab4e406bff64f56df5e7cab35c93b19d9c4e2985c081db2cc2d4bce19f61b",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794404502,
      "signal": "주의 강화",
      "netScore": -5.34,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 3.32,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.92,
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
          "score": -5,
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
          "eventId": "42dbd2a496877c75cbcf",
          "headline": "CoreWeave 수익으로 AI 거래가 다시 활성화됨에 따라 MU, AMD, AVGO 및 기타 칩 주식 급증 — Nasdaq-100 Futures Jump",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794404502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2bd6ed12e17a1a12690f779e907d2e97b105e140c7f2f157696f3d008dcb13e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "36962c9c498cf9667055",
          "headline": "61세 노인이 상속받은 Apple 주식 750,000달러에 대해 얼마나 많은 양도소득세를 납부해야 합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794402232,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7eb80ecbdd062b84cd92b8ac4eb1586583d833dfbadeb2d4f8dcc22a754d79fd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "18abbc0effe5403012ad",
          "headline": "구매, 판매 또는 보유? 수요일의 주요 업그레이드 및 다운그레이드: Akamai Technologies, Apple, BILL Holdings, Corning, Form Factor, Guidewire Software, NVIDIA, Riot Platforms, Toast 등",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794401832,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7cdf40837326d672aab7d0eada0eb35580bdf7937b88127cfefe5e202c35ae1b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "adec62ae9203c21bb113",
          "headline": "GEV, VRT, HUBB에 초점 — JPMorgan은 잠재적인 AI 주식 반등을 보고 있지만 전기 장비 부문에 대해서는 여전히 조심스럽습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794397878,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a54c44f1f88ccb6502c88cd88a43ef24e3a5548a22188bb411374717125936e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4bc052496b407df2f6c4",
          "headline": "Nvidia는 나쁜 소식인가요, 아니면 피해야 할 주식인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794397802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0368ae4fc623b7800d8407ffecfd1d1466b6a2873f286f37925941db72df47c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ec0e1e88007a39659df3",
          "headline": "새로운 AI 경쟁자가 270억 달러 규모의 사업을 목표로 함에 따라 Microsoft 주가는 하락했습니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794395819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=080915c6efb08161eb276baa522c981637f16ad5b48e26c5141364925f6b11b9",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "46fee9c3c3c6f62edd77",
          "headline": "Bitwise CIO는 하이퍼리퀴드가 금융의 차세대 Amazon이 될 것으로 보고 이를 '금융의 거대괴수'라고 부릅니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794377644,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=391f130444ed700cd28bd810c8b3b5f922866f770174a111096a01799f860fe1",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "be9dd1333dbfc11fdb36",
          "headline": "소매 투자자들이 Nvidia 외에도 주목하고 있는 3가지 데이터 센터 인프라 주식",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794371570,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57103db5fdc36a4040df1f13c642bf517a1e580c699ea11c8eacfb3c972e481d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "77fa3564d4936386c401",
          "headline": "CEG 주식은 지난주 손실을 되돌릴 궤도에 있습니다: 이 분석가가 29%의 상승 여력을 보는 이유는 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794371250,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c0d1edd5a499f5e928e4ed6bce06a26ee00ec3b45087a530567664f07c1ed55",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2fd28f825486900c5ffc",
          "headline": "TSMC 주식은 Chipmaker가 Anthropic, OpenAI에 최대 10억 달러 베팅을 계획함에 따라 영업 시간 이후 추세입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794355302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=97156198177f097211e4cce66f03ec00730e0bcfa44ea9f9722e42845b2d07d2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "0875ac1e96488cc7efe3",
          "headline": "오늘, 11월 10일 주식 시장: CEO 스캔들로 인해 향후 수익 보고서가 무색해지면서 Nvidia 주가가 5.5% 급락했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794350102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a604812e52a6f3f5035183e9f57510c1caa222d64d6f0ef994ea22ba86e56b79",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f10366db44f82ffb7408",
          "headline": "Alphabet Inc.(GOOGL)은 대규모 AI 지출 경쟁의 일부입니다: 투자가 충분한 수익을 제공할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794346013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b31db05b3ac3c67edcc351d9c0f1481d085c7b8ce23d34f2bcfc3201b58a136",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 44,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794404502,
      "signal": "우호적 변화",
      "netScore": 4.27,
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
          "score": -2.62,
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
          "score": 2.8,
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
          "eventId": "42dbd2a496877c75cbcf",
          "headline": "CoreWeave 수익으로 AI 거래가 다시 활성화됨에 따라 MU, AMD, AVGO 및 기타 칩 주식 급증 — Nasdaq-100 Futures Jump",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794404502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2bd6ed12e17a1a12690f779e907d2e97b105e140c7f2f157696f3d008dcb13e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "36962c9c498cf9667055",
          "headline": "61세 노인이 상속받은 Apple 주식 750,000달러에 대해 얼마나 많은 양도소득세를 납부해야 합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794402232,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7eb80ecbdd062b84cd92b8ac4eb1586583d833dfbadeb2d4f8dcc22a754d79fd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ec0e1e88007a39659df3",
          "headline": "새로운 AI 경쟁자가 270억 달러 규모의 사업을 목표로 함에 따라 Microsoft 주가는 하락했습니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794395819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=080915c6efb08161eb276baa522c981637f16ad5b48e26c5141364925f6b11b9",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "41bcc36bd0bd6c44cb25",
          "headline": "\"수요가 공급보다 높습니다\": AMD는 2026년에 141%의 주가를 찢었습니다. 구매하기에는 너무 늦었나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794382514,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9477d227322df478ff50752a32734c66cf11edc9e9e4ecc0fd4cf9febf07d54",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "be9dd1333dbfc11fdb36",
          "headline": "소매 투자자들이 Nvidia 외에도 주목하고 있는 3가지 데이터 센터 인프라 주식",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794371570,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57103db5fdc36a4040df1f13c642bf517a1e580c699ea11c8eacfb3c972e481d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "2fd28f825486900c5ffc",
          "headline": "TSMC 주식은 Chipmaker가 Anthropic, OpenAI에 최대 10억 달러 베팅을 계획함에 따라 영업 시간 이후 추세입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794355302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=97156198177f097211e4cce66f03ec00730e0bcfa44ea9f9722e42845b2d07d2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f10366db44f82ffb7408",
          "headline": "Alphabet Inc.(GOOGL)은 대규모 AI 지출 경쟁의 일부입니다: 투자가 충분한 수익을 제공할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794346013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b31db05b3ac3c67edcc351d9c0f1481d085c7b8ce23d34f2bcfc3201b58a136",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "5fb57b7de39385159b3f",
          "headline": "Meta Platforms, Inc.(META)는 AI를 위해 수천억 달러가 필요할 수 있습니다. 이는 투자자에게 무엇을 의미합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794345954,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df0592630818f56cad007c95c58fa845ded3000166026726395b2a979087e2b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f3f67ac9087199662bbd",
          "headline": "Microsoft Corporation(MSFT)은 AI에 수십억 달러를 쏟아 붓고 있습니다. 막대한 지출이 향후 수익에 영향을 미칠 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794345742,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d071b4491c0a1dc3e5c198934457bcc5b100a72817f99769fe1661f28bb2c19",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "5cc295288d8b5822d02e",
          "headline": "억만장자 David Rubenstein이 Facebook의 30,000달러 스타트업 피치를 통과하여 수십억 달러의 이익을 얻기 전에 Amazon을 매각했습니다. '심각하게 받아들이지 않았다'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794334462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ab470c6d0eb2e9126216cd59d60e6aaa75a5b1f6744e5505810025ca0c8f422",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f362fc76840392bb0dbe",
          "headline": "투자자가 알아야 할 AMD 데이터 센터 번호는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794332759,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c54c3f52e518e91452197488c0de0fafe7f901e3293e6b056668e574aa2ecb01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "45cc722575967412740a",
          "headline": "Meta의 임대로 Applied Digital의 AI 캠퍼스를 위한 루이지애나 채권 최대 46억 달러 지원 가능",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794330355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=acfe43e953b7a16525add73b413a4ac54d07ebbf4c921974585bff499bc3e2a5",
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
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794404502,
      "signal": "주의 강화",
      "netScore": -3.15,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.52,
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
          "score": -1.05,
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
          "eventId": "42dbd2a496877c75cbcf",
          "headline": "CoreWeave 수익으로 AI 거래가 다시 활성화됨에 따라 MU, AMD, AVGO 및 기타 칩 주식 급증 — Nasdaq-100 Futures Jump",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794404502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2bd6ed12e17a1a12690f779e907d2e97b105e140c7f2f157696f3d008dcb13e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a3d4488232a91e4256d3",
          "headline": "NVIDIA는 Jensen Huang의 이사회 조사로 주가가 하락하면서 4% 하락했습니다. AMD와 Broadcom은 3% 상승",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794322568,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9eb8bab2722a7e8bfc657e4795f43cc0d8079728fb88826bea7c6622338e01af",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b3a225b48dd19af5ca50",
          "headline": "Google의 1,350억 달러 칩 예측의 진정한 승자: Broadcom",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794257131,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a065a8051441fa680ca88a0ec2258e95c9f66aaa4b769a9737e929fd1099284b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "04e32db48b856e92f8cb",
          "headline": "투자자들이 217억 달러의 AI 수익 가이드를 주목하면서 Broadcom 주식은 8.21% 상승했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794247538,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64ad890bd7f0d75385cc0a2999fbfe387d759715b8199bc043890c2b50057bb5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "be6638d7a9cc014b496b",
          "headline": "AMD, AVGO, INTC, MU: 투자자들이 중기 주도 매도세를 지나갈 것으로 예상함에 따라 칩 주가가 인치 상승함, Nvidia 논란",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794195264,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a06df8c17ed16f4b9d1d68020fdfdea9dd5c446091972803886a4e01d655d6c4",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8788d1376594d32f8c4d",
          "headline": "AMD, AVGO, INTC, MU: 투자자들이 중기 주도 매도세를 지나갈 것으로 예상함에 따라 칩 주가가 인치 상승함, Nvidia 논란",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794195264,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a06df8c17ed16f4b9d1d68020fdfdea9dd5c446091972803886a4e01d655d6c4",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "98721ddc9b508dc145d4",
          "headline": "지난 주 DKNG, SOUN, ORCL 주식이 52주 최저치로 급락한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794193038,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d65e81bdc6fdaa852abcd82ca9177a232cad33277ca4c6778079df97101318e4",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794392031,
      "signal": "주의 강화",
      "netScore": -7.61,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -4.35,
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
          "score": -2.35,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.0,
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
          "eventId": "cc1a2fd68cdee74d238e",
          "headline": "QUALCOMM(QCOM)이 새로운 AI PC OS 파트너십을 통해 무엇을 알리고 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794392031,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6c59a8fd09619d2b0377963fadb9f6301b78fa4774dd4562dba123f49108f81",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2d3bd268e5a5d0284a65",
          "headline": "Qualcomm vs. Western Digital: 2027년에는 어떤 기술주를 구매하는 것이 더 나은가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794318242,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=46aa52ea6a2a95a75eac6482373b73f5e73bcf52388fc1867931dfa0fd7490d3",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a748407586d6b5366d91",
          "headline": "QCOM SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1794236400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000110465926125254/tm2629187-2_424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f20f786e42693ba732fa",
          "headline": "NVDA, PLTR, QCOM, SPCX, MRVL: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794189895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e4a9ea679112494570f18b4dff22cf8e709fc00105bf80968de214d4f6ec8644",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e316848ec50554fd4b1c",
          "headline": "Starlink 거래로 Qualcomm 주식에 또 다른 성장 엔진 추가",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794180672,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6a6321995396987f0f01452362f9402942db3c7fee85742388a5eabb0ce052f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "481afffd415c4a0ef823",
          "headline": "QCOM SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1794150000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000110465926124219/tm2629187-1_424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794225900,
      "signal": "중립·확인 대기",
      "netScore": 0.36,
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
          "score": 0.0,
          "level": "중립"
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
          "eventId": "18e7dda4b49c0bfc1c20",
          "headline": "Agentic AI 기회가 등장함에 따라 Arm Stock이 하락세를 보이고 있습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794225900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c7c4f9d10905e3335a8c3085a14e996ffcbe9f08a6ac5e20910ab9fcdc03678",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b4d21aed4d16e0be9948",
          "headline": "Arm과 Qualcomm이 모바일 칩 설계를 주도합니다. 1 주식이 더 나은 구매입니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1794217920,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6cfc3b3f5a29143c90904524770d340d887eb527a925dea6c70d9c36b4e5ea06",
          "factorChanges": {
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
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794293247,
      "signal": "주의 강화",
      "netScore": -7.85,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -2.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.38,
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
          "eventId": "fe408745a3457d35eb84",
          "headline": "Marvell의 1,150억 달러 규모의 Lumentum 거래는 50-50의 확률에 직면해 있습니다: 보고서",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794293247,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd91e8d8286ced58f414f52e6f77257430889abbc3a437c0edec05e5fd0b8840",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8c063b56d8921c247f53",
          "headline": "Marvell은 1,150억 달러 규모의 거래에서 36% 하락, Lumentum은 31% 하락: 매도가 과도합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794252823,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c1a43936d383cffaecd209658d3e2acc1022de03a107756ed25d5c8501414b7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8b2600c0edce9460f2d8",
          "headline": "광학 주식이 AI 반등을 확장함에 따라 Coherent는 13% 상승합니다. Lumentum 급증 11%, 응용 광전자 공학 4% 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794239909,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f29ee5214dcafe59a3580bb6060f1934a492e6c11879ed54f47a83a1d9f1f0cb",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c259eea8bb7bd4b0b318",
          "headline": "Marvell: 캐치와 함께 저렴하고 빠르게 성장",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794211668,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15c7b03e14eaa66cdcb6e3076f96c931d9b3cc030c5a1d8d939a7e525495c1c8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "efa4b3f0d144de8330cd",
          "headline": "마벨 대. Coherent: 이제 하나만 구매하겠습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794210031,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e13bb1587ec27590fdb9a730da09249a926ebcc047bead520a787a7597e425c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f20f786e42693ba732fa",
          "headline": "NVDA, PLTR, QCOM, SPCX, MRVL: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794189895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e4a9ea679112494570f18b4dff22cf8e709fc00105bf80968de214d4f6ec8644",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f81b6cc48eb30411f48c",
          "headline": "Marvell은 1,150억 달러 거래 후 최고치보다 57% 낮습니다. 이제 매도할 시점인가요, 아니면 충전할 시점인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794153280,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab73d84e0d8d95bb655e92bfd3f8db5f439b7183a13cf9189b86507205bd90ce",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794332997,
      "signal": "주의 강화",
      "netScore": -4.4,
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
          "score": -1.92,
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
          "eventId": "182bfe9dca91ff7bbe3b",
          "headline": "GE Vernova, 새로운 이정표로 항공유도 가스 터빈용 수소 성능 향상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794332997,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e50be394b876bf6dbbe12a43998f352ed267db6304b0bf46bebca9681207c9c3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "de268b4938a1657f6849",
          "headline": "인텔은 10월 폭락 이후 2026년에도 여전히 61% 상승: \"망가진 회사\"인가, 아니면 매수인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794329060,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d0a991d2e9a3b93e61dbc0f8154796c57732d6da832324b81a507d01171b889f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "024f2bedc500485b7a5a",
          "headline": "Applied Materials와 Dell Technologies: 인공 지능 기업 간의 안정적인 수익과 가속화되는 수익 비교",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794282356,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2ac5652863dcf2a2626d673a1043a1578f0c1cb24c62e49d802b0eab0c8b08a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b703b6ab1b524f980273",
          "headline": "GE Vernova, 6-GW HVDC 전송 프로젝트로 인도의 에너지 전환 지원",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794246594,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=981067759370aa92a48e0f9bd0ca94079aca2a32fc0b6801fd0cbdd45d01dbd7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "717395e17a0f1ed1c32a",
          "headline": "NVDA 주식 시판 전 슬라이드: 베이징은 Jensen Huang 스파이 혐의를 '중국에 대한 비방'으로 거부한 것으로 알려졌습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794215677,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38495a9e2f828916fd333c83767f1615c03271cfd2aabd200e415e43ee6e1657",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "be6638d7a9cc014b496b",
          "headline": "AMD, AVGO, INTC, MU: 투자자들이 중기 주도 매도세를 지나갈 것으로 예상함에 따라 칩 주가가 인치 상승함, Nvidia 논란",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794195264,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a06df8c17ed16f4b9d1d68020fdfdea9dd5c446091972803886a4e01d655d6c4",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8788d1376594d32f8c4d",
          "headline": "AMD, AVGO, INTC, MU: 투자자들이 중기 주도 매도세를 지나갈 것으로 예상함에 따라 칩 주가가 인치 상승함, Nvidia 논란",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794195264,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a06df8c17ed16f4b9d1d68020fdfdea9dd5c446091972803886a4e01d655d6c4",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9e5e07b91e6bd312a045",
          "headline": "AMD 주가는 지난 주 11% 하락했습니다. 인텔의 PC 경고가 정말 그렇게 나쁜가요?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794164139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6adcfdccc834f1c76c4c8e305d026b46e1b5b49dbe79284d0ced25dc8d4b0a2a",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794398057,
      "signal": "중립·확인 대기",
      "netScore": -1.17,
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
          "eventId": "5709fce33c612b309921",
          "headline": "TSMC의 10월 매출은 15% 증가했습니다. Nvidia의 공급업체는 아직 AI 둔화를 인식하지 못하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794398057,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e8ad7e5d3e22c254563b932367bbfbc37724718a1e20b0c6d9036a1a7767415",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2fd28f825486900c5ffc",
          "headline": "TSMC 주식은 Chipmaker가 Anthropic, OpenAI에 최대 10억 달러 베팅을 계획함에 따라 영업 시간 이후 추세입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794355302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=97156198177f097211e4cce66f03ec00730e0bcfa44ea9f9722e42845b2d07d2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ae07fea7d8534bc76db3",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794236400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000797/tsm-boardx202611xx.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "a5837a92d46d8a93d0fb",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794236400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000796/tsm-revenue20261110.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1794415191.391681,
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794228359,
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
          "eventId": "6ed8c0d2fdd832718998",
          "headline": "적용 재료 재고 점프가 50% 가 될 수 있습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794228359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f507889b9135d112928351b12fdf2920284544e92f0e9b1d9a0a4cb02ed9422d",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1794415191.391681,
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
      "updatedAt": 1794415191.391681,
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
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794402232,
      "signal": "우호적 변화",
      "netScore": 9.31,
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
          "score": -1.22,
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
          "eventId": "36962c9c498cf9667055",
          "headline": "61세 노인이 상속받은 Apple 주식 750,000달러에 대해 얼마나 많은 양도소득세를 납부해야 합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794402232,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7eb80ecbdd062b84cd92b8ac4eb1586583d833dfbadeb2d4f8dcc22a754d79fd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ec0e1e88007a39659df3",
          "headline": "새로운 AI 경쟁자가 270억 달러 규모의 사업을 목표로 함에 따라 Microsoft 주가는 하락했습니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794395819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=080915c6efb08161eb276baa522c981637f16ad5b48e26c5141364925f6b11b9",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "be9dd1333dbfc11fdb36",
          "headline": "소매 투자자들이 Nvidia 외에도 주목하고 있는 3가지 데이터 센터 인프라 주식",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794371570,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57103db5fdc36a4040df1f13c642bf517a1e580c699ea11c8eacfb3c972e481d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2fd28f825486900c5ffc",
          "headline": "TSMC 주식은 Chipmaker가 Anthropic, OpenAI에 최대 10억 달러 베팅을 계획함에 따라 영업 시간 이후 추세입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794355302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=97156198177f097211e4cce66f03ec00730e0bcfa44ea9f9722e42845b2d07d2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f10366db44f82ffb7408",
          "headline": "Alphabet Inc.(GOOGL)은 대규모 AI 지출 경쟁의 일부입니다: 투자가 충분한 수익을 제공할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794346013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b31db05b3ac3c67edcc351d9c0f1481d085c7b8ce23d34f2bcfc3201b58a136",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "5fb57b7de39385159b3f",
          "headline": "Meta Platforms, Inc.(META)는 AI를 위해 수천억 달러가 필요할 수 있습니다. 이는 투자자에게 무엇을 의미합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794345954,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df0592630818f56cad007c95c58fa845ded3000166026726395b2a979087e2b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f3f67ac9087199662bbd",
          "headline": "Microsoft Corporation(MSFT)은 AI에 수십억 달러를 쏟아 붓고 있습니다. 막대한 지출이 향후 수익에 영향을 미칠 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794345742,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d071b4491c0a1dc3e5c198934457bcc5b100a72817f99769fe1661f28bb2c19",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "5cc295288d8b5822d02e",
          "headline": "억만장자 David Rubenstein이 Facebook의 30,000달러 스타트업 피치를 통과하여 수십억 달러의 이익을 얻기 전에 Amazon을 매각했습니다. '심각하게 받아들이지 않았다'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794334462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ab470c6d0eb2e9126216cd59d60e6aaa75a5b1f6744e5505810025ca0c8f422",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f362fc76840392bb0dbe",
          "headline": "투자자가 알아야 할 AMD 데이터 센터 번호는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794332759,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c54c3f52e518e91452197488c0de0fafe7f901e3293e6b056668e574aa2ecb01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "45cc722575967412740a",
          "headline": "Meta의 임대로 Applied Digital의 AI 캠퍼스를 위한 루이지애나 채권 최대 46억 달러 지원 가능",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794330355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=acfe43e953b7a16525add73b413a4ac54d07ebbf4c921974585bff499bc3e2a5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "af48b449629cb1ab814d",
          "headline": "Bloom Energy Corporation(BE)이 핵심 AI 파워 플레이어로 부상하고 있습니다: 투자자들이 주목하는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794327754,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dd2aaea35603c8f062d6e9da59c5a38c0130ccb10ad35c94d3dae037a92c589c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "15f35f6596a7016d5427",
          "headline": "Oracle Corporation(ORCL)은 주요 AI 데이터 센터 프로젝트에 대한 질문에 직면합니다: 투자자가 알아야 할 사항",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794327686,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=464d0a96805f06cc0946954b878b60edf525978e3e11d1e6a49e5e7f3d206a17",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 21,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794336409,
      "signal": "주의 강화",
      "netScore": -2.38,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "score": -2.1,
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
          "eventId": "f809ad1dd0c133624a73",
          "headline": "화요일에 Sandisk 주가가 다시 하락한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794336409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=389cae2f32fdafcb2599c112d9650bccc1f030b9220df60001b4915a328bf9da",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "586091ca3e60299a459d",
          "headline": "Sandisk Corporation(SNDK)은 수십억 달러의 계약 수익을 확보했습니다. 메모리 붐은 이제 막 시작되었습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794327710,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b47d3190bd202b7ed41d329ec98605a060665870f669c42807f9ca2ab87f99c0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0e908d82129a4246feec",
          "headline": "Apple, Siri에 에이전트 기능 추가? 보고서에 따르면 CEO Ternus가 더 빠른 로드맵을 추진함에 따라 Apple의 AI가 대대적으로 업그레이드될 예정입니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1794200037,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f2b27a6c48ad76978d5e9e43b6272efdd12538454f1cd17459bd4eb234b3ac4",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4a55c105d584a05215f1",
          "headline": "Dow, S&P 500, Nasdaq 선물은 지난주 Sharp AI 매도 후 반등: NVDA, AMD, VIR, SNDK 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794196094,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3e3a97d3bac28ab36d53664bdf62dd73cbdc5e9125de67bf6ce9c654de924f2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794381771,
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
          "eventId": "e14058b6ab868a9db6e6",
          "headline": "Western Digital: 회전하는 디스크 더미는 제가 참여하고 싶은 AI 거래입니다 - 적극 매수",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794381771,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a063bc6df11625e4938fe7610406bbd5d2becc954bb414a107d40ae8a4c9ed6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c020470b664c387867ae",
          "headline": "웨스턴 디지털이나 마이크론? Jim Cramer는 \"나는 Micron이 더 나은 회사라고 생각합니다\"라고 말합니다. 테스트는 다음과 같습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794270724,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e51ad9b0454de21501e37105bd47987af2410878670d3ce9dfe4f00b45bc8443",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794247680,
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
          "eventId": "d1152286b6eef690b957",
          "headline": "Arista는 공급업체에 114억 달러를 투자했습니다. 185억 달러 규모의 2027년 전망이 이에 달려 있습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794247680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5bf5a92bc541ca67a33329744fb9537b306f1eb5dbe07c57c54193a1b3b79c2e",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794213320,
      "signal": "주의 강화",
      "netScore": -2.66,
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
          "eventId": "d0a0bf7c3064f556dc5a",
          "headline": "TSMC, SK 하이닉스, 삼성: 엔비디아 CEO 젠슨 황의 논란이 투자자 신뢰를 시험하는 가운데 아시아 칩 주가 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794213320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02094147a2b82f7b280d5bbb1ea3b7bdae5f0934c4057812758779d0f028ea59",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "efa4b3f0d144de8330cd",
          "headline": "마벨 대. Coherent: 이제 하나만 구매하겠습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794210031,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e13bb1587ec27590fdb9a730da09249a926ebcc047bead520a787a7597e425c",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794324930,
      "signal": "주의 강화",
      "netScore": -7.43,
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
          "score": -3.67,
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
          "score": -3.85,
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
          "eventId": "4186b94b999633cf4b9d",
          "headline": "Marvell의 전주 제안이 축소됨에 따라 Lumentum은 일주일 만에 11% 하락: “우리의 수요는 이보다 더 강할 수 없습니다”",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794324930,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bacd426c428d0421b82dad2f1637561f04161e7320d7fe0927cba4f01534015c",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fe408745a3457d35eb84",
          "headline": "Marvell의 1,150억 달러 규모의 Lumentum 거래는 50-50의 확률에 직면해 있습니다: 보고서",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794293247,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd91e8d8286ced58f414f52e6f77257430889abbc3a437c0edec05e5fd0b8840",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8c063b56d8921c247f53",
          "headline": "Marvell은 1,150억 달러 규모의 거래에서 36% 하락, Lumentum은 31% 하락: 매도가 과도합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794252823,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c1a43936d383cffaecd209658d3e2acc1022de03a107756ed25d5c8501414b7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1495aeaa7ad092e71116",
          "headline": "Nvidia의 혼란에도 불구하고 AI Optics의 반등이 확장되면서 Coherent는 18% 상승, Lumentum은 12% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794245871,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=366ebc26a89678e1471646901c5e258dc8262e93ecc33bd3067483f4e4f3c443",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8b2600c0edce9460f2d8",
          "headline": "광학 주식이 AI 반등을 확장함에 따라 Coherent는 13% 상승합니다. Lumentum 급증 11%, 응용 광전자 공학 4% 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794239909,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f29ee5214dcafe59a3580bb6060f1934a492e6c11879ed54f47a83a1d9f1f0cb",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c259eea8bb7bd4b0b318",
          "headline": "Marvell: 캐치와 함께 저렴하고 빠르게 성장",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794211668,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15c7b03e14eaa66cdcb6e3076f96c931d9b3cc030c5a1d8d939a7e525495c1c8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f81b6cc48eb30411f48c",
          "headline": "Marvell은 1,150억 달러 거래 후 최고치보다 57% 낮습니다. 이제 매도할 시점인가요, 아니면 충전할 시점인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794153280,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab73d84e0d8d95bb655e92bfd3f8db5f439b7183a13cf9189b86507205bd90ce",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794397878,
      "signal": "우호적 변화",
      "netScore": 4.19,
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
          "eventId": "adec62ae9203c21bb113",
          "headline": "GEV, VRT, HUBB에 초점 — JPMorgan은 잠재적인 AI 주식 반등을 보고 있지만 전기 장비 부문에 대해서는 여전히 조심스럽습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794397878,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a54c44f1f88ccb6502c88cd88a43ef24e3a5548a22188bb411374717125936e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "02d93a7559734da6b968",
          "headline": "이튼은 한 달 만에 23% 손실을 입었습니다. RBC는 여기서 58% 상승 여력이 있다고 봅니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794253013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdddc912998a04a6557924c7a06bc9d8fd4089271a591b332fdcfbd679b276c3",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b703b6ab1b524f980273",
          "headline": "GE Vernova, 6-GW HVDC 전송 프로젝트로 인도의 에너지 전환 지원",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794246594,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=981067759370aa92a48e0f9bd0ca94079aca2a32fc0b6801fd0cbdd45d01dbd7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "be507eb74b7ae52a0afa",
          "headline": "현장 파워 결투: Bloom Energy 대 GE Vernova",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794226509,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c723416e1dd917a85e331d6f2a9b80db1f85229b1a8c9491ae72538145af1b1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "546a8335e6655870ed5e",
          "headline": "GE Vernova, Stadtwerke Heidenheim으로부터 16.5MW 프로젝트를 위한 독일 풍력 터빈 주문 확보",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794224429,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=183816a628d7262b774b481d6fd1b1ec9a24d82f1a0df0671a4e03398f892863",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794337140,
      "signal": "주의 강화",
      "netScore": -3.08,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
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
          "score": -2.1,
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
          "eventId": "3bfc8e0f5fb7cd7a113f",
          "headline": "Constellation Q3 실적 회의에서 장기 원자력 계약 강조",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794337140,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b8be770a651644cba88502fc4280a94dcac21bca9658bd5feb9fc114a32841c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c0cade0bdd44240c215e",
          "headline": "Constellation과 Vistra가 헤드라인을 장식합니다. 이 2명의 전력 생산자는 거의 언급되지 않습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794330300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdc469674424d2ac2efd8b89f783d27d04633186655e3182b142ec4a5e67977e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "acd352ef12cc52ca2fb4",
          "headline": "AI가 전력 위기를 만들고 있다. Constellation Energy는 현금화 계획을 보여주었습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794309182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce265e1f162d44f325afb5279252283bf6d95733a0c62d61243454d5b551a496",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "78187c0a52e338b3fc02",
          "headline": "Vertiv는 중간 정리로 인해 데이터 센터 주식이 일주일 만에 11% 하락했습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794286008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5cca23f8d2e5070040d8df9467d96469a591043912450ee7f5ecbb64c7eb0842",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4a5b834b16749d06e25a",
          "headline": "비스트라(Vistra)와 컨스텔레이션(Constellation)은 선거 이후 급락했다. 하나는 텍사스에 훨씬 더 많이 노출되어 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794248700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=08a1d5595fb9fe8dc1d24ae5723a68a210cb2a9b396a2b555edc4a9d384eff09",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ffaa3f1ca187349104da",
          "headline": "수입에 의해 연료가 공급되는 Nuke Stock Constellation; NRG는 바이백에서 가스를 적중합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794239915,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cae41b332ede567688262cd578bb033cf1f22f387e9a36d35ca0df965154d6b6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "64a3eaf467c80d45dadf",
          "headline": "별자리가 지침을 높이고 데이터 센터 모라토리움 공포를 완화함에 따라 GE Vernova가 7% 급증",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1794239298,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5998360c3c0a5da0fcfc8a66b5cb538cac2425f2fa8377320e1aae51ad238198",
          "factorChanges": {
            "growth": -2,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0e908d82129a4246feec",
          "headline": "Apple, Siri에 에이전트 기능 추가? 보고서에 따르면 CEO Ternus가 더 빠른 로드맵을 추진함에 따라 Apple의 AI가 대대적으로 업그레이드될 예정입니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1794200037,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f2b27a6c48ad76978d5e9e43b6272efdd12538454f1cd17459bd4eb234b3ac4",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "98721ddc9b508dc145d4",
          "headline": "지난 주 DKNG, SOUN, ORCL 주식이 52주 최저치로 급락한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794193038,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d65e81bdc6fdaa852abcd82ca9177a232cad33277ca4c6778079df97101318e4",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794331155,
      "signal": "주의 강화",
      "netScore": -3.63,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.7,
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
          "score": -2.27,
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
          "eventId": "0baddb94cfe2405ef4a9",
          "headline": "Constellation CEO는 경고음을 울립니다. 데이터 센터 수요는 \"대규모 과대평가\"였습니다. 2040년대까지 원자력 계약 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794331155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60773065e80031276ab9c588b01416db54ecfb38f316ca1a17242ca7192c2995",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c0cade0bdd44240c215e",
          "headline": "Constellation과 Vistra가 헤드라인을 장식합니다. 이 2명의 전력 생산자는 거의 언급되지 않습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794330300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdc469674424d2ac2efd8b89f783d27d04633186655e3182b142ec4a5e67977e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4a5b834b16749d06e25a",
          "headline": "비스트라(Vistra)와 컨스텔레이션(Constellation)은 선거 이후 급락했다. 하나는 텍사스에 훨씬 더 많이 노출되어 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794248700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=08a1d5595fb9fe8dc1d24ae5723a68a210cb2a9b396a2b555edc4a9d384eff09",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b35aba65d21d9cb2b7b8",
          "headline": "블룸에너지가 아닙니다. 비스트라가 아닙니다. 이 AI 파워 주식은 주문이 96% 증가했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794161100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=785b51a23a857c469b3ddfaf14dc4060002763c17eeb79315093a4c7615388f9",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794231180,
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
          "eventId": "86cde2ea609dd5675275",
          "headline": "Eaton은 연료 효율 및 성능 목표를 지원하기 위해 Dassault Falcon 10x에 선정되었습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794231180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bd9198740551c7ebcc81dee93195a504720c803db0ea5b20055d9ba074ebbac",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0582040b7964cb96b665",
          "headline": "Dassault Aviation이 Falcon 10X Business Jet에 수력 시스템 및 연료 시스템 기술을 제공하기 위해 선택한 Eaton",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794217046,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=61783ef79d6cfd3863bef374b5d44bc5585bf4e9c602d87a2cea8319bd56c324",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1794415191.391681,
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
      "updatedAt": 1794415191.391681,
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
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794397878,
      "signal": "중립·확인 대기",
      "netScore": -1.17,
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
          "eventId": "adec62ae9203c21bb113",
          "headline": "GEV, VRT, HUBB에 초점 — JPMorgan은 잠재적인 AI 주식 반등을 보고 있지만 전기 장비 부문에 대해서는 여전히 조심스럽습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794397878,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a54c44f1f88ccb6502c88cd88a43ef24e3a5548a22188bb411374717125936e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f76d19ff0ff079e5a92d",
          "headline": "SoftBank의 오하이오 데이터 센터가 \"철저한 재평가\"를 받음에 따라 GE Vernova는 4% 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794345450,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=935af7772999bfda72f511a6c4fae4bf6dbdf2623a86a033858d57accbd434b3",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7b42ad92005ce668b6f3",
          "headline": "Vertiv Holdings Co(VRT), Infineon 공급 계약 확보, 가치 평가 격차가 여전히 매력적입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794345067,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d4b0f2efbf7a723d7aaa26f9277a7fe0a330563584a713842bc824c96367fe9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "02d93a7559734da6b968",
          "headline": "이튼은 한 달 만에 23% 손실을 입었습니다. RBC는 여기서 58% 상승 여력이 있다고 봅니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794253013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdddc912998a04a6557924c7a06bc9d8fd4089271a591b332fdcfbd679b276c3",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1794415191.391681,
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
      "updatedAt": 1794415191.391681,
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1794415191.391681,
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
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794173880,
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
          "eventId": "7e1ef7d8f6f3c64d55e4",
          "headline": "Jensen Huang은 방금 Nvidia 주주들에게 수익 보고서를 수정할 수 없다는 경고를 전달했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794173880,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=019affeaea676f6ed0d02fb02a410568d794119de81b59ecf9ab0a6d797c3ecf",
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1794415191.391681,
      "dataAsOf": 1794329043,
      "signal": "우호적 변화",
      "netScore": 4.19,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 2.1,
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
          "eventId": "c170773bf9c35994addd",
          "headline": "Bloom Energy(BE), 매출 급증에 따라 주요 AI 데이터 센터 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794329043,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ffed28d0bfc691e01d37d5382cabb7ac529ce2cffa84e6258bc8f37ef9cf019",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "af48b449629cb1ab814d",
          "headline": "Bloom Energy Corporation(BE)이 핵심 AI 파워 플레이어로 부상하고 있습니다: 투자자들이 주목하는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794327754,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dd2aaea35603c8f062d6e9da59c5a38c0130ccb10ad35c94d3dae037a92c589c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e027178f3ece3b3e5813",
          "headline": "Bloom Energy(BE), 해외 최대 규모의 900메가와트 데이터센터 전력 계약 성사",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794154155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b8e9c38883ae24919066863770ca222d1cc33b435ff43ab8ba5a664c0842a2d1",
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
    }
  }
};
