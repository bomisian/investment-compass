// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1794487506.9973376,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794442098,
      "signal": "우호적 변화",
      "netScore": 8.75,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.55,
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
          "score": 2.45,
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
          "eventId": "050a0cc6ede0f273eade",
          "headline": "시장의 대화: Microsoft는 보조금이나 다른 사람을 위한 더 높은 비용 없이 데이터 센터에 전력을 공급하기를 원합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794442098,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ed5fbb5da81b98998c2a4917c525e895565dc36fc9f7a9885d8c68c5dae6e7ff",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "86d6ca918491d5b4a6ae",
          "headline": "Replit는 2026년 Microsoft 스타트업 부문 올해의 파트너로 선정되었습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794427260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0911ad7652420d5f534371069e94cb936c43b586e7ffc454bd6f22309de29851",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "adb337603a11f3b818ab",
          "headline": "이 숫자는 Microsoft 데이터 센터 매각이 과도하다는 것을 알려주며 구매를 촉구합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794419126,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=800d41739f1221e9d95f931ae63591daa6275b6d19275d4fcc80ed8b5d0ac709",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794438421,
      "signal": "주의 강화",
      "netScore": -2.03,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
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
          "score": -4.55,
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
          "eventId": "316cea81605c7e101c45",
          "headline": "Nvidia와 Alphabet은 IPO 가격으로 각각 100억 달러 규모의 Anthropic 주식을 구매하기로 합의했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794438421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13132d03c5b8d69d4f31c02910a3f58b434d3e8ce498d01778b6101fa2f7c561",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2d35076d9d909ec4ab3b",
          "headline": "Amazon과 Google은 4,110억 달러의 인류 횡재에 직면해 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794430065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c7b761f6d7cefcccb9ebbc0096e03de99d77b88c0c766cc41e0a13497b54037",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d8629997eed35ea26edd",
          "headline": "민주당은 2027년에 데이터 센터 세금 감면을 목표로 삼을 수 있습니다. Meta, Microsoft, Alphabet 및 Amazon에 미치는 영향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794428288,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f094ed89e128615c17131c1109390574f329787938aa76336e75fd8f3f300fa2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794430065,
      "signal": "중립·확인 대기",
      "netScore": 0.91,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.75,
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
          "score": -1.4,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.7,
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
          "eventId": "2d35076d9d909ec4ab3b",
          "headline": "Amazon과 Google은 4,110억 달러의 인류 횡재에 직면해 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794430065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c7b761f6d7cefcccb9ebbc0096e03de99d77b88c0c766cc41e0a13497b54037",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d8629997eed35ea26edd",
          "headline": "민주당은 2027년에 데이터 센터 세금 감면을 목표로 삼을 수 있습니다. Meta, Microsoft, Alphabet 및 Amazon에 미치는 영향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794428288,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f094ed89e128615c17131c1109390574f329787938aa76336e75fd8f3f300fa2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9a9fa9598c56925f128b",
          "headline": "Amazon과 Microsoft가 클라우드 시장을 선도하고 있습니다. 그 중 하나는 훨씬 더 큰 상승 여력을 가지고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794423900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e05ab792717164205af034db868f95178d876dce654bf04a335d7a5284a6ece",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "71a64d5ea24c48d99460",
          "headline": "글로벌 옴니채널 소매 시장 보고서 2026 | Adobe, Adyen, AWS, Salesforce 및 Shopify를 통해 2030년까지 통합 상거래 성장을 222억 6천만 달러까지 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794407520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e85b31076f58b8326755026fda85cdd9fa67f4e96a05edf610eb5b1faf412ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "eventId": "4309e7576e5752c13b2d",
          "headline": "Amazon.com, Inc.(AMZN)는 1조 2천억 달러 규모의 AI 지출 문제에 직면했습니다: 투자가 성과를 거둘 수 있을까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794345720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=27a42f2f3166126c97732c292e344538f129f044979ac16a7d53c9cf987024b8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794428288,
      "signal": "주의 강화",
      "netScore": -7.14,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -1.4,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.1,
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
          "eventId": "d8629997eed35ea26edd",
          "headline": "민주당은 2027년에 데이터 센터 세금 감면을 목표로 삼을 수 있습니다. Meta, Microsoft, Alphabet 및 Amazon에 미치는 영향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794428288,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f094ed89e128615c17131c1109390574f329787938aa76336e75fd8f3f300fa2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794455369,
      "signal": "주의 강화",
      "netScore": -3.3,
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
          "score": -2.8,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.23,
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
          "eventId": "e89a2549e3414c51b4b0",
          "headline": "오늘 AAPL, XERS, ZETA 주식이 52주 최고가로 급등한 이유는 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794455369,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c435e0fa2b9f12c1297e6722c5332b1f982622ae5a709c121e73820580ac3de",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "84c1094f9d378be92bb9",
          "headline": "마이크론 주가는 일주일 만에 30% 하락했다. 번스타인은 거의 두 배로 늘어날 수 있다고 말합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794425088,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c89f6032a67e9dc8a6d2e49e789ac8a701e2bf46d0fdc1a1c85fce63b74215e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ac4f545643c1d2a6bd35",
          "headline": "MP Materials, GM 자석 이정표를 삭제하고 다음 고객으로 Apple 목표",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794417348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e56da536b8b6ef5c4f0cb62d80c145b5fa47ba5f366c42cc89d30303c28adc54",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794451800,
      "signal": "중립·확인 대기",
      "netScore": -0.91,
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
          "eventId": "23f75abec70ff2a09d59",
          "headline": "SpaceX와 Tesla가 합병하면 2030년까지 결합 회사에 대한 10,000달러의 투자 가치는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794451800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a75a2629a9ffebb96e61588087d9f7a4e9703a43edf3d7b2c946c59d49281891",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794435102,
      "signal": "주의 강화",
      "netScore": -5.6,
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
          "score": -2.62,
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
          "score": -1.57,
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
          "eventId": "c37727c2480ca159d796",
          "headline": "CoreWeave 수익 이후 Oracle 주식이 급등했습니다. 한 분석가가 데이터 센터 백래시를 위해 구축되었다고 말하는 이유는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794435102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=271ebc43316bb908bbcd7656435a5cc9e5ca98fbc76fad5c1f195edbbc487b7d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "02ad3de87835243da46d",
          "headline": "Bernstein의 325달러 목표는 Oracle의 매각이 너무 멀리 갔다고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794411845,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e69b5035795d996d01ddc05e28de5e7cf2f352fd0b82e403b117ae2572f9227",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794407520,
      "signal": "우호적 변화",
      "netScore": 2.79,
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
          "score": 0.87,
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
          "eventId": "71a64d5ea24c48d99460",
          "headline": "글로벌 옴니채널 소매 시장 보고서 2026 | Adobe, Adyen, AWS, Salesforce 및 Shopify를 통해 2030년까지 통합 상거래 성장을 222억 6천만 달러까지 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794407520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e85b31076f58b8326755026fda85cdd9fa67f4e96a05edf610eb5b1faf412ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794458922,
      "signal": "중립·확인 대기",
      "netScore": -0.91,
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
          "eventId": "0fd1dc36b3dad48c9ffe",
          "headline": "monday.com 대 Palantir Technologies: 2027년에 어떤 기술 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794458922,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c754b06ec2bd1573a9349c890283ba4a144a5de8d151061f8b81b22afe5343f0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d89a296c86751eb6ae35",
          "headline": "예측: Palantir 주식은 향후 5년 동안 엄청난 수익을 낼 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794411186,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a38cb4640b15ebe0532ad81e98a86b8603257c53a5fa7781362e24ce30cd6912",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794460252,
      "signal": "주의 강화",
      "netScore": -6.8,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 2.8,
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
          "eventId": "98b889d388d9ff537c8a",
          "headline": "Nvidia의 Jensen Huang이 뜨거운 자리에 있습니다. 내 Nvidia 주식으로 무엇을 하고 있는지 살펴보겠습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794460252,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c33a527f2bcce6d3319a81f5dbe3385ffc682255200b9bdb38c52a967134c60",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c1fb786780d998ffd927",
          "headline": "NVDA 낙진으로 인해 투자자들이 Cerebras로 눈을 돌리면서 기술 거래에 압력을 가하고 칩 수요 단서용 재료 적용",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794459963,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c6818cf3a8cbdf7a8eff07de627d1b95304b771b5d37e495c30b2044137a40f",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6a2e4ea4052faeb5ef50",
          "headline": "NVDA 슬라이드로 AAPL, GOOG 주가 밤새 상승: 소매 투자자들이 리더십 혼란 속에서 전통적인 기술로 전환하고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794458892,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae67bdd107dcd10f8f7e297b301b2e59f6b43b9549efa9ba7f7e9e3b36093334",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8dc4fd309387f350cd1c",
          "headline": "Jensen Huang을 축출하려는 이사회의 움직임에 Nvidia의 주가가 하락했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794441078,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2411578ee09832557fc1387c6f2181677be979b7b64e1ced2e6a1e0e00fa567c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c7cedee670416fceb515",
          "headline": "Nvidia 이사회는 Jensen Huang을 축출할 준비를 하고 있는 것으로 알려졌습니다. 인텔과 맥도날드가 직장 관계 문제로 CEO를 밀어냈을 때 주주들은 정반대의 결과를 얻었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794440059,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fffb4e76d93a0e08167eea3a0746446c12793b434698c221801c4f9ecd1ac8ad",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d39feafe678b0d2cfb94",
          "headline": "GE Vernova의 온타리오 원자력 발전소는 지연과 비용 상승에 직면해 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794439599,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7e1f3d82109d908059d93c2c104efacc828deede20a0780a34866de7a63c92f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "316cea81605c7e101c45",
          "headline": "Nvidia와 Alphabet은 IPO 가격으로 각각 100억 달러 규모의 Anthropic 주식을 구매하기로 합의했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794438421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13132d03c5b8d69d4f31c02910a3f58b434d3e8ce498d01778b6101fa2f7c561",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6cb46596e2da1a96b20e",
          "headline": "TSMC는 Anthropic 및 OpenAI에 투자하여 미래를 확보합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794427176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fa10c1ff0bb929fd3d8fd9925d203919fa60c05f178a09c7c70dec738f06057",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "142a64faf0e0add48d44",
          "headline": "Nvidia 주식은 7개월 최저치를 기록한 후 매수인가요? (힌트: 그렇습니다.)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794418862,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f4370c9a86c86eb4313b9b488a838cf20f64b3138d9905ce68aae7177c81e45",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "71a64d5ea24c48d99460",
          "headline": "글로벌 옴니채널 소매 시장 보고서 2026 | Adobe, Adyen, AWS, Salesforce 및 Shopify를 통해 2030년까지 통합 상거래 성장을 222억 6천만 달러까지 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794407520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e85b31076f58b8326755026fda85cdd9fa67f4e96a05edf610eb5b1faf412ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "313d47834fba7ff17c8c",
          "headline": "Baird 다운그레이드 및 Huang 불확실성에도 불구하고 NVIDIA는 4% 상승합니다. AMD는 5% 상승, Broadcom은 4% 상승",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794405916,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56f6337331c38c400fb24dfbc317ebfff5be2066750c699cd4bfecd7d96470ff",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 40,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794461193,
      "signal": "우호적 변화",
      "netScore": 2.58,
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
          "score": -3.5,
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
          "score": 2.1,
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
          "eventId": "69bd33546040db5ac10b",
          "headline": "Nvidia의 차기 CEO는 내부 또는 Arm에서 나올 수 있습니다. 트레이더들이 승계 경쟁에서 주목하는 사람은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794461193,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2aa6d979b18d9f3b47dd9456f1eec399e8b6bbd44aca1305d6377b419af2e43b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c1fb786780d998ffd927",
          "headline": "NVDA 낙진으로 인해 투자자들이 Cerebras로 눈을 돌리면서 기술 거래에 압력을 가하고 칩 수요 단서용 재료 적용",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794459963,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c6818cf3a8cbdf7a8eff07de627d1b95304b771b5d37e495c30b2044137a40f",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6a2e4ea4052faeb5ef50",
          "headline": "NVDA 슬라이드로 AAPL, GOOG 주가 밤새 상승: 소매 투자자들이 리더십 혼란 속에서 전통적인 기술로 전환하고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794458892,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae67bdd107dcd10f8f7e297b301b2e59f6b43b9549efa9ba7f7e9e3b36093334",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "fda55be0401c6b000203",
          "headline": "어드밴스드 마이크로 디바이시스(AMD) vs. 마벨 테크놀로지(Marvell Technology): 2027년까지 투자하기에 더 나은 인공지능(AI) 주식은?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794455544,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7333ccd302690f8686a301fad27eed04c1222929cad4cbcdcb110c50bbcbe0a3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d39feafe678b0d2cfb94",
          "headline": "GE Vernova의 온타리오 원자력 발전소는 지연과 비용 상승에 직면해 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794439599,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7e1f3d82109d908059d93c2c104efacc828deede20a0780a34866de7a63c92f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e2450bca24a2f20b2fbf",
          "headline": "오늘, 11월 11일 주식 시장: 첨단 마이크로 장치의 상승 - 단지 CoreWeave의 결과 때문만은 아닙니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794437554,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7195c819b4f2a74bca3f973ac14594dea12a4f9e6de7c2cb7706c41766f96fab",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6cb46596e2da1a96b20e",
          "headline": "TSMC는 Anthropic 및 OpenAI에 투자하여 미래를 확보합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794427176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fa10c1ff0bb929fd3d8fd9925d203919fa60c05f178a09c7c70dec738f06057",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "71a64d5ea24c48d99460",
          "headline": "글로벌 옴니채널 소매 시장 보고서 2026 | Adobe, Adyen, AWS, Salesforce 및 Shopify를 통해 2030년까지 통합 상거래 성장을 222억 6천만 달러까지 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794407520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e85b31076f58b8326755026fda85cdd9fa67f4e96a05edf610eb5b1faf412ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "313d47834fba7ff17c8c",
          "headline": "Baird 다운그레이드 및 Huang 불확실성에도 불구하고 NVIDIA는 4% 상승합니다. AMD는 5% 상승, Broadcom은 4% 상승",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794405916,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56f6337331c38c400fb24dfbc317ebfff5be2066750c699cd4bfecd7d96470ff",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7a5c9eaf8f8e00e028b3",
          "headline": "CoreWeave 수익으로 AI 거래가 다시 활성화됨에 따라 MU, AMD, AVGO 및 기타 칩 주식 급증 — Nasdaq-100 Futures Jump",
          "eventLabel": "실적 발표",
          "publishedAt": 1794404502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2bd6ed12e17a1a12690f779e907d2e97b105e140c7f2f157696f3d008dcb13e",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 28,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794405916,
      "signal": "중립·확인 대기",
      "netScore": -1.47,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
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
          "score": -1.05,
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
          "eventId": "313d47834fba7ff17c8c",
          "headline": "Baird 다운그레이드 및 Huang 불확실성에도 불구하고 NVIDIA는 4% 상승합니다. AMD는 5% 상승, Broadcom은 4% 상승",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794405916,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56f6337331c38c400fb24dfbc317ebfff5be2066750c699cd4bfecd7d96470ff",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
          "eventId": "4d71d87635c252ba4d94",
          "headline": "Goldman은 인류 수익이 \"2030년까지 6,850억 달러\"에 이를 것으로 예상합니다. Broadcom은 1,610억 달러 규모의 임대 거래에 묶여 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794404472,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ff06e4f736e2a7050362911171299179e013b7c5d5593879bbd9d384dcdebe6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794455369,
      "signal": "중립·확인 대기",
      "netScore": -1.41,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.17,
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
          "eventId": "e89a2549e3414c51b4b0",
          "headline": "오늘 AAPL, XERS, ZETA 주식이 52주 최고가로 급등한 이유는 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794455369,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c435e0fa2b9f12c1297e6722c5332b1f982622ae5a709c121e73820580ac3de",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "84c1094f9d378be92bb9",
          "headline": "마이크론 주가는 일주일 만에 30% 하락했다. 번스타인은 거의 두 배로 늘어날 수 있다고 말합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794425088,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c89f6032a67e9dc8a6d2e49e789ac8a701e2bf46d0fdc1a1c85fce63b74215e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794461193,
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
          "eventId": "69bd33546040db5ac10b",
          "headline": "Nvidia의 차기 CEO는 내부 또는 Arm에서 나올 수 있습니다. 트레이더들이 승계 경쟁에서 주목하는 사람은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794461193,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2aa6d979b18d9f3b47dd9456f1eec399e8b6bbd44aca1305d6377b419af2e43b",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794455544,
      "signal": "중립·확인 대기",
      "netScore": 1.4,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -1.57,
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
          "eventId": "fda55be0401c6b000203",
          "headline": "어드밴스드 마이크로 디바이시스(AMD) vs. 마벨 테크놀로지(Marvell Technology): 2027년까지 투자하기에 더 나은 인공지능(AI) 주식은?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794455544,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7333ccd302690f8686a301fad27eed04c1222929cad4cbcdcb110c50bbcbe0a3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3dfe6e94e1e37a88d0f0",
          "headline": "AI Optics 반등으로 Marvell 거래 격차가 줄어들면서 Lumentum 주식은 14.85% 상승했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794423780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae8d076253ad558a2e210f2af1361c1a1b69bf3314ad2903172a8ecac7308fd8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cbe2b1e2ff0681b029b1",
          "headline": "AI 광학 랠리가 Lumentum 거래 의심을 완화함에 따라 Marvell Technology 주식이 12.22% 급등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794423704,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dd7915d708f30f8720eb600d7f004cadc13cc0dea3d8ccacb29c50a0019d6f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794455544,
      "signal": "중립·확인 대기",
      "netScore": -1.27,
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
          "score": -1.92,
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
          "eventId": "fda55be0401c6b000203",
          "headline": "어드밴스드 마이크로 디바이시스(AMD) vs. 마벨 테크놀로지(Marvell Technology): 2027년까지 투자하기에 더 나은 인공지능(AI) 주식은?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794455544,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7333ccd302690f8686a301fad27eed04c1222929cad4cbcdcb110c50bbcbe0a3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cad63e69ea1aee9fe59b",
          "headline": "오늘, 11월 11일 주식 시장: AI 인프라 수요로 인해 반도체 주가가 상승함에 따라 Intel은 더욱 폭넓은 칩 랠리를 펼치고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794438274,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5775ee9f1287376cba33fcb8173fb8e9a0f9145346349f7677d1a575333a6c60",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "01d9221d0dbee01307e8",
          "headline": "Intel 주식은 SoftBank 거래 후 8,700만 주 위험에 직면",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794429268,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b792649ad8d56ef66b03b6d48fc0a017e8b5b4b5b14c1d88b5508df8061dd23",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794441002,
      "signal": "주의 강화",
      "netScore": -2.37,
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
          "eventId": "76c6a55eba78b60e23b1",
          "headline": "Dell Technologies vs. Taiwan Semiconductor: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794441002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f4304f9a9af91eecf1a08fb3f39eeb07533009fb60b0471004336ff89a794b2e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6cb46596e2da1a96b20e",
          "headline": "TSMC는 Anthropic 및 OpenAI에 투자하여 미래를 확보합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794427176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fa10c1ff0bb929fd3d8fd9925d203919fa60c05f178a09c7c70dec738f06057",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1794487506.9973376,
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
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794434854,
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
          "eventId": "13e33f2e589d15ec32ae",
          "headline": "Lam Research는 일주일 만에 16%, Applied Materials는 15% 하락했습니다. Lam, 250억 달러 자사주 매입으로 응답",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794434854,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f258a70911ad380f597f7ead0e829a3bbbedc92af876c8b2b6f5627295a67ca",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1794487506.9973376,
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
      "updatedAt": 1794487506.9973376,
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
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794458892,
      "signal": "우호적 변화",
      "netScore": 7.81,
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
          "score": -2.97,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 4.9,
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
          "eventId": "6a2e4ea4052faeb5ef50",
          "headline": "NVDA 슬라이드로 AAPL, GOOG 주가 밤새 상승: 소매 투자자들이 리더십 혼란 속에서 전통적인 기술로 전환하고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794458892,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae67bdd107dcd10f8f7e297b301b2e59f6b43b9549efa9ba7f7e9e3b36093334",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e89a2549e3414c51b4b0",
          "headline": "오늘 AAPL, XERS, ZETA 주식이 52주 최고가로 급등한 이유는 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794455369,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c435e0fa2b9f12c1297e6722c5332b1f982622ae5a709c121e73820580ac3de",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "093158887bee09941f0c",
          "headline": "Micron과 Oracle에서 $600,000를 판매하는 66세 노인이 빚진 세금은 얼마나 됩니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794435522,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb90f1b48efa7a8fb7eb9e3433b147104517dbf317b585cc9762e5e77b35d67f",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6cb46596e2da1a96b20e",
          "headline": "TSMC는 Anthropic 및 OpenAI에 투자하여 미래를 확보합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794427176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fa10c1ff0bb929fd3d8fd9925d203919fa60c05f178a09c7c70dec738f06057",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "06ff260adf1ec687e3d5",
          "headline": "마이크론 매도는 매수 기회인가, 아니면 떨어지는 칼인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794419400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c2212157fc65aa12e532337d0920f21b244e145d69b5a62bae67e0116db6e3a6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "71a64d5ea24c48d99460",
          "headline": "글로벌 옴니채널 소매 시장 보고서 2026 | Adobe, Adyen, AWS, Salesforce 및 Shopify를 통해 2030년까지 통합 상거래 성장을 222억 6천만 달러까지 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794407520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e85b31076f58b8326755026fda85cdd9fa67f4e96a05edf610eb5b1faf412ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7a5c9eaf8f8e00e028b3",
          "headline": "CoreWeave 수익으로 AI 거래가 다시 활성화됨에 따라 MU, AMD, AVGO 및 기타 칩 주식 급증 — Nasdaq-100 Futures Jump",
          "eventLabel": "실적 발표",
          "publishedAt": 1794404502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2bd6ed12e17a1a12690f779e907d2e97b105e140c7f2f157696f3d008dcb13e",
          "factorChanges": {
            "growth": -1,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 23,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794460800,
      "signal": "중립·확인 대기",
      "netScore": 0.22,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.53,
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
          "eventId": "5bc3361f28ff46235410",
          "headline": "Micron 대 Sandisk: AI 메모리 슈퍼사이클은 두 가지 모두에 충분하지만 여기에 더 나은 구매가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794460800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a305241aaf9ec325c1d4f13ad060c39741177cb6ced98c018f53ac713f4cc2f5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794455369,
      "signal": "주의 강화",
      "netScore": -2.38,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "eventId": "e89a2549e3414c51b4b0",
          "headline": "오늘 AAPL, XERS, ZETA 주식이 52주 최고가로 급등한 이유는 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794455369,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c435e0fa2b9f12c1297e6722c5332b1f982622ae5a709c121e73820580ac3de",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
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
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794425842,
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
          "eventId": "4046d7dc8eeede939317",
          "headline": "Arista의 공동 창업자는 5월 이후 약 6억 6,800만 달러의 주식을 매각했습니다.",
          "eventLabel": "내부자 매도",
          "publishedAt": 1794425842,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3605e5414691f7b2927906011bd321c210f77a6ad5285985c6727d703aabf6c5",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794423220,
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
          "eventId": "a676f75e52ccedfa10c7",
          "headline": "데이터 센터 광학 수요가 AI 공급업체를 증가시키면서 코히어런트 주식은 11.5% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794423220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5022580106f3bf64774f713062e0ec50fd89d5266a8b07cf0e28d616de7ab791",
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
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794440501,
      "signal": "우호적 변화",
      "netScore": 2.58,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.92,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.4,
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
          "score": -0.87,
          "level": "중립"
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
          "eventId": "9525175cc0dc9b907ad1",
          "headline": "저평가된 12개 종목: Coherent, Bank Of America, MaxLinear 등",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794440501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b9e5d2615fd739f9ac0501db95b8ceb02c89f2be7cd44f6ff441ff119224b02",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "60f2f776df805b7b5de4",
          "headline": "Marvell, 블록버스터 800억 달러 거래로 Lumentum 인수",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794428374,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d4bd92908d146b4356e44b56a87682db36c2216bbc72c1a5c246cb4cb799f9a3",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3dfe6e94e1e37a88d0f0",
          "headline": "AI Optics 반등으로 Marvell 거래 격차가 줄어들면서 Lumentum 주식은 14.85% 상승했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794423780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae8d076253ad558a2e210f2af1361c1a1b69bf3314ad2903172a8ecac7308fd8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cbe2b1e2ff0681b029b1",
          "headline": "AI 광학 랠리가 Lumentum 거래 의심을 완화함에 따라 Marvell Technology 주식이 12.22% 급등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794423704,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dd7915d708f30f8720eb600d7f004cadc13cc0dea3d8ccacb29c50a0019d6f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fed4efd88f80efd08819",
          "headline": "거래 반응에서 Lumentum 전표; 화석 그룹의 전망에 대한 집회 | 주식 발동기",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794413763,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2dbcdb3767be8c0926c2211474a712defa73f2a04c2dae976c8e552fe2e979d7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794461704,
      "signal": "주의 강화",
      "netScore": -4.48,
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
          "score": -1.4,
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
          "eventId": "7bc3d53f6d25c493471c",
          "headline": "엔비디아 폴아웃: 대만, 황과 연루된 스파이로 추정되는 사람의 재입국을 취소한 것으로 알려짐",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794461704,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=440d801c2e81921326bf944faf3da0031ccea1e639ffa9b4d4b994f796b5a43b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "69bd33546040db5ac10b",
          "headline": "Nvidia의 차기 CEO는 내부 또는 Arm에서 나올 수 있습니다. 트레이더들이 승계 경쟁에서 주목하는 사람은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794461193,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2aa6d979b18d9f3b47dd9456f1eec399e8b6bbd44aca1305d6377b419af2e43b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d39feafe678b0d2cfb94",
          "headline": "GE Vernova의 온타리오 원자력 발전소는 지연과 비용 상승에 직면해 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794439599,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7e1f3d82109d908059d93c2c104efacc828deede20a0780a34866de7a63c92f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794461193,
      "signal": "중립·확인 대기",
      "netScore": -0.49,
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
          "eventId": "69bd33546040db5ac10b",
          "headline": "Nvidia의 차기 CEO는 내부 또는 Arm에서 나올 수 있습니다. 트레이더들이 승계 경쟁에서 주목하는 사람은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794461193,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2aa6d979b18d9f3b47dd9456f1eec399e8b6bbd44aca1305d6377b419af2e43b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d853b0ab70394134a82e",
          "headline": "Constellation Energy(CEG), Peak+ 원자력 및 저장 계약 개시",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794460382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d52850fe9b74a71ecdf0af60df234be4e8fb15aeb8eea8ac3f6b871c97681ce2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "800ce4e73c6b433be1ea",
          "headline": "Constellation은 원자력 발전과 함께 하이브리드 용량 계약을 추구합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794416839,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85f1f59a31c1a37202690380201016e739e30f327ddbe265ac76f857b67f7439",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794331155,
      "signal": "주의 강화",
      "netScore": -3.77,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794413583,
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
          "eventId": "8f2a87f5dcdd141da2c7",
          "headline": "Eaton(ETN), 새로운 비즈니스 제트기에 유압 및 연료 시스템 공급 예정",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794413583,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a01ad3601a29ac4786e510b4e0ac799e789cf26a647fe8c3ddcafc96a80526c",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794463924,
      "signal": "중립·확인 대기",
      "netScore": 0.14,
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
          "eventId": "1e63082c0cabbe69bec9",
          "headline": "Quanta Services는 전력 및 데이터 센터 수요가 가속화됨에 따라 계획보다 빠른 성장을 보고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794463924,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=68030713a100993ded0e36573b0e9af250e5136cddd3e3f56643e8e6f8367f2d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fd3fd9684b641f6277c9",
          "headline": "Quanta Services, Inc.(PWR)는 Baird 2026 글로벌 산업 컨퍼런스 2026에서 발표합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794427133,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fad104af1d6855bb3f93fd5f6e0df8195688d828ecd0bd8e733301aa17969497",
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
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1794487506.9973376,
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
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794423248,
      "signal": "중립·확인 대기",
      "netScore": 0.23,
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
          "eventId": "101ffa68df28fca19cef",
          "headline": "AI 데이터 센터 반등으로 전력 및 냉각 공급업체가 상승함에 따라 Vertiv 주가 6.9% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794423248,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d163d80f942a2e3c443e201e6fa69df73d727b0c1043a422392ed7f47bf9d287",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1794487506.9973376,
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
      "updatedAt": 1794487506.9973376,
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
      "updatedAt": 1794487506.9973376,
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
      "updatedAt": 1794487506.9973376,
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
      "updatedAt": 1794487506.9973376,
      "dataAsOf": 1794329043,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    }
  }
};
