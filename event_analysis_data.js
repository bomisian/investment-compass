// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1794576841.6177046,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794541349,
      "signal": "우호적 변화",
      "netScore": 6.59,
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
          "score": -1.22,
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
          "eventId": "77fa3d3ea8c112f4b873",
          "headline": "AMAT CEO는 칩 수요가 탄탄하다고 말하고 '다년간의' 팹 투자가 필요하다고 덧붙였습니다. 주가는 급격한 상승 이후 완만하게 상승했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794541349,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3e24cc16c5c5ec2e548596801f0878922864882659191718530aec7e4ae177d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "188d9d7a98bb46e818e6",
          "headline": "오늘 AAPL, COST, JNJ 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794537175,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=23a117ac94dafada5af7ce85ddc5063b6ce116966982c7cb284ad6334276517a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e68b58e627a48f2552f1",
          "headline": "Cerebras, OpenAI를 넘어 다각화를 위해 Microsoft 파트너십 추가",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794524520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=41e3ece335125d7e2e166abbe2335ebedeb7aa18c334657b5f55d3330dae27ab",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "19d9a4c28e1992cce7aa",
          "headline": "Microsoft와 Amazon은 AI 지출로 성과를 거둘 수 있음을 보여줍니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794519644,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30d6486b705ef37f36386466b946c2fb61c166e9d34ffb27fcec60fdaf5b0d1d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6f532e9d6e630e232878",
          "headline": "Tom Lee는 Jensen Huang의 퇴임이 그의 낙관적인 기술 전망을 바꾸지 않는다고 말합니다: AVGO, AMD 주식이 칩 랠리를 주도합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1794504123,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=870757e89f0fd6a754a9125dfa3ce5276deb1a3afaf9aba0341d78efb625d5d2",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1b8cf709e577fba47bc4",
          "headline": "BetterUp, 성과가 뛰어난 팀을 이끄는 관리자를 지원하기 위해 Microsoft와의 협력 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794490200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e68b914a933b2e3c8339de191d4e5797a2fdbddf3d7fbed0ca1a8e4edfd5b5b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "760118681b93e3015046",
          "headline": "스콧 갤러웨이: AI가 \"철도와 같다\"면 알파벳과 마이크로소프트는 \"여전히 괜찮을 것\"",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794486249,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9cf354b7d571bfdb5409b31a184007ca1a277e1c5f7c4733aee06080909aedf7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "272e31186c377993f4e8",
          "headline": "CoreWeave가 AI의 전력 부족 문제를 지적하며 BE 주가가 7월 이후 최대 일일 상승폭 기록 – 하지만 소매 투자자들은 '빠른 해결책'에 대해 경고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794447482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf1ce8f4b771f0b8541bffa94d589b29808352f24105a7e0055011f4d8c6bbd8",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 15,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794558067,
      "signal": "중립·확인 대기",
      "netScore": -0.21,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -3.15,
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
          "eventId": "6b83d3d5d479c8bd0bca",
          "headline": "Nvidia CEO의 퇴임으로 AI 붐에 대한 의구심이 제기되면서 유럽 주가 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794558067,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=833a6f714833093edd6e0d7bfbc9d3544e3ee2554542a1dd47106adb6cd64ac0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a41ac4dfa8f2addfb6e9",
          "headline": "Google이 고객이 자체 데이터 센터에서 AI 칩을 실행할 수 있도록 허용하므로 이제 Alphabet 주식을 구입해야 합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794535442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65d72a35d6bd8753f397a3e903a5bba97273876b4c189482e737a2395d9d5608",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "accf133e08629f3aa007",
          "headline": "Alphabet, AI Frenzy 빌드로 50억 달러의 주문 기록",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794524759,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9065d293b3155149849b94771ecd903e2f64bab5f1f307bd32ecf4c084ce1640",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d250a065e822575c6882",
          "headline": "Arm CEO: 전 세계가 미국 블록에 데이터 센터를 구축할 준비가 되어 있고 기꺼이 노력하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794500419,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99b5aefe818a5718641c2be77e43211b512cf273e1bc171ac1d403ac740dba88",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bd3606c499ccb0eea5af",
          "headline": "알파벳의 오해된 TPU는 투자자들이 아직 알아차리지 못한 숨겨진 촉매제입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794498330,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0a4ff1215f873825316354607b6b5ef152e3a00c315909ee9597ba54d09204f4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "760118681b93e3015046",
          "headline": "스콧 갤러웨이: AI가 \"철도와 같다\"면 알파벳과 마이크로소프트는 \"여전히 괜찮을 것\"",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794486249,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9cf354b7d571bfdb5409b31a184007ca1a277e1c5f7c4733aee06080909aedf7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e1b16a0809b0e1ebca8f",
          "headline": "구글 모기업, AI 부채 매각 주문으로 50억 달러 유치",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794481991,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73bdc9d4f10bf2ec95917a945e7dca8e117eb55307bbac0cf4b79771e2eb3774",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794492900,
      "signal": "우호적 변화",
      "netScore": 2.17,
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
          "score": -1.57,
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
          "eventId": "385f6ade980205c95e66",
          "headline": "이민진 작가의 『현대 서사시 미국 학원』이 아마존 선정 2026년 최고의 책으로 선정되었습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794492900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac0d7def09f96b03306acc4930017cc3fa9a460b39aeb4a62d1f54d1c02cf085",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9ab6813865fe4adfbac2",
          "headline": "266달러의 아마존 주식: 인류 이익 중 얼마나 많은 부분이 인류에 의한 것인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794484942,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a382b1040a79d2c34230ed64de0985d74e8a6b4a802fffd940f2ab987a0bc8eb",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794558067,
      "signal": "우호적 변화",
      "netScore": 2.02,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.62,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.1,
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
          "eventId": "6b83d3d5d479c8bd0bca",
          "headline": "Nvidia CEO의 퇴임으로 AI 붐에 대한 의구심이 제기되면서 유럽 주가 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794558067,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=833a6f714833093edd6e0d7bfbc9d3544e3ee2554542a1dd47106adb6cd64ac0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b261948d5947f2cb3ed8",
          "headline": "Meta의 270억 달러 부외 AI 거래는 Steve Eisman이 Enron을 떠올리게 합니다. Joseph Carlson은 이에 동의하지 않습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794496506,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7154882bbba8ed9f40984631ecde8d05b56b24385213c4e64ed75e9784dd955d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9ff7ea999c3211baeb0e",
          "headline": "Stegra와 Meta, 친환경 철강 발전을 위한 환경속성 인증서 협약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794486540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=747573a89cbeadd767acbb621220c25098bc85478df7afd3ee7afebb4289e68f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fdd0b5c33adfa01a9138",
          "headline": "차세대 저탄소 시멘트의 미국 제조 규모를 확대하기 위해 Sublime Systems와 Meta Sign 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794484800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8522ffc32e247bdc71c738cc26c36e3bf88e394b91a235f4bf9a74afd71ff01",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fde648c04a6aff9f8062",
          "headline": "Nevoya와 Meta는 I-10 통로에서 25대의 새로운 전기 트럭으로 파트너십을 확장합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794484800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c87f2c5a90245f54a1bfadfbc9d6d334f547dae5e2ed9ba6213a450151b91caa",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
          "eventId": "874af98cad2f26ece217",
          "headline": "META SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794409200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526458525/d177728d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794505533,
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
          "score": -2.27,
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
          "score": -3.67,
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
          "eventId": "6668331b034e0f030276",
          "headline": "월스트리트 모델은 구조적 현실을 뒤쳐 '과대평가된' 사과를 추가하라는 메시지를 표시합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794505533,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=23ef94ab7e00b81da6289f2ca74012e3e3ee528d68ef78d7c4d7e6a68f2ada6b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b84eb06be58955c137b7",
          "headline": "Apple의 시가총액은 Tim Cook이 CEO로 재임한 15년 동안 3,470억 달러에서 4조 6천억 달러로 성장했습니다. John Ternus가 이끄는 Apple의 다음 장에서 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794504182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=299a11539386d565e8cf1be884c33b29f6552c46f0c38db6b161adf9f4ca0d74",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "bff5216cdb595808af46",
          "headline": "마이크론은 지난 분기에 애플보다 더 많은 수익을 냈지만 가치는 1/6만큼 높습니다. 두 가지 중 하나가 잘못되었습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794486185,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6cb43f8ce911c8549ceceab90202539b9f8ecea70ae090d518fa0e3b57053370",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794505507,
      "signal": "주의 강화",
      "netScore": -4.19,
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
          "eventId": "e1761724945ece92d49f",
          "headline": "테슬라 대. Nvidia: 규제 십자선은 이 두 개의 Mag 7 주식에 대해 훈련되었으며, 하나는 더 나쁩니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794505507,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=817bc741408d1ffafc199c93e9d0ec9d517ad586b862b68228af3fbe60788604",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794505528,
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
          "eventId": "4014c150279484359598",
          "headline": "올해 35% 급락한 오라클에 희망이 있을까? 한 분석가는 여기에서 210%의 이익을 예측한다고 '예'라고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794505528,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da64ce226c26a3dae82e01d8c561bab750d1270d22b10eb5496ffae9c30acf9c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b9acefeb69b23a00ed41",
          "headline": "오라클, 내슈빌에 45억 달러 규모 본사 착공",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794479686,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e92dc8d749da8ff9f46bf351b1463621f32ab0ab42e90570cf3b7205bac2846a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794544499,
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
          "eventId": "95ce0cc64327a77714f7",
          "headline": "AI 플랫폼 성장이 Salesforce(CRM)의 투자 내러티브를 바꾸었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794544499,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=922ed224266cc6ca4b8e932d03868d8dddd50f598c282814c0f19b3f87c62404",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794501215,
      "signal": "주의 강화",
      "netScore": -5.1,
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
          "eventId": "5ee582965dfa3e4eec2a",
          "headline": "Palantir의 성장 스토리는 이제 막 시작되었을 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794501215,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e131fb867fdb6fcb81600962a8fefd5f44cc85f901e0d679dd7e431489db705f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7d96d2844a48e89e10e5",
          "headline": "Palantir를 대체할 유럽 스타트업은 누구입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794483013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f6f5839282509b1671235cd2cd896f1ccf13666872c9375c3b66fd4bb04040c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794558067,
      "signal": "주의 강화",
      "netScore": -4.83,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.63,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.8,
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
          "eventId": "6b83d3d5d479c8bd0bca",
          "headline": "Nvidia CEO의 퇴임으로 AI 붐에 대한 의구심이 제기되면서 유럽 주가 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794558067,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=833a6f714833093edd6e0d7bfbc9d3544e3ee2554542a1dd47106adb6cd64ac0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "95ce0cc64327a77714f7",
          "headline": "AI 플랫폼 성장이 Salesforce(CRM)의 투자 내러티브를 바꾸었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794544499,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=922ed224266cc6ca4b8e932d03868d8dddd50f598c282814c0f19b3f87c62404",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "188d9d7a98bb46e818e6",
          "headline": "오늘 AAPL, COST, JNJ 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794537175,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=23a117ac94dafada5af7ce85ddc5063b6ce116966982c7cb284ad6334276517a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "52d701debc5b640a78ec",
          "headline": "Chipotle Mexican Grill vs. Coca-Cola: Nvidia 매도 이후 어떤 주식을 매수해야 할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794531002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03e62a76460f1a1ba308cbd5a28c7a76bc0a9af898fd8a8c61d174ba7c5ad087",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "accf133e08629f3aa007",
          "headline": "Alphabet, AI Frenzy 빌드로 50억 달러의 주문 기록",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794524759,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9065d293b3155149849b94771ecd903e2f64bab5f1f307bd32ecf4c084ce1640",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "93047956907679dd0edc",
          "headline": "소매 투자자들은 이전과는 전혀 다른 방식으로 Nvidia의 주식 붕괴를 구매하고 있습니다. 역사는 인내심을 요구합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794512888,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb1f8261682cc3ae4e41206aacd3d0164ca57ce287fbef2ad95d594bb14cb9ba",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "dffc7cd147bdd3165980",
          "headline": "Marvell, 1,150억 달러 규모의 AI 거래를 앞두고 주요 이사회 움직임",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794512690,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f7b91e4ce34e1f3b948f3cfe93f31d903fe42f161c72ed5700b07b924c666ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "cad93e59157157081283",
          "headline": "NVIDIA CEO가 130억 달러의 파트너십 지분을 확보함에 따라 Intel 주식은 3.49% 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794512620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cae127bd6457e6dde2deeb7e8ba39e81ee83c24044d9b1aad88ff36fe105a0b1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "269d35bda6c62a919e9a",
          "headline": "50억 달러 규모의 Qualcomm 데이터 센터 램프로 이제 실행에 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794505620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5b859a74d1131e583434c2588bfd6fafcd3f0a45612ca3bef0890df73041672",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "e1761724945ece92d49f",
          "headline": "테슬라 대. Nvidia: 규제 십자선은 이 두 개의 Mag 7 주식에 대해 훈련되었으며, 하나는 더 나쁩니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794505507,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=817bc741408d1ffafc199c93e9d0ec9d517ad586b862b68228af3fbe60788604",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6f532e9d6e630e232878",
          "headline": "Tom Lee는 Jensen Huang의 퇴임이 그의 낙관적인 기술 전망을 바꾸지 않는다고 말합니다: AVGO, AMD 주식이 칩 랠리를 주도합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1794504123,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=870757e89f0fd6a754a9125dfa3ce5276deb1a3afaf9aba0341d78efb625d5d2",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1835361c19c99ce6d997",
          "headline": "Nvidia CEO Jensen Huang이 퇴임하면서 AMD는 6% 상승, Broadcom은 6% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794503116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3228204b6e8fe0eef48d9eb4f1b0348782120c2fe7e32b9781da8676eab32fc1",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 45,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794544499,
      "signal": "우호적 변화",
      "netScore": 7.9,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
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
          "score": -2.97,
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
          "eventId": "95ce0cc64327a77714f7",
          "headline": "AI 플랫폼 성장이 Salesforce(CRM)의 투자 내러티브를 바꾸었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794544499,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=922ed224266cc6ca4b8e932d03868d8dddd50f598c282814c0f19b3f87c62404",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "accf133e08629f3aa007",
          "headline": "Alphabet, AI Frenzy 빌드로 50억 달러의 주문 기록",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794524759,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9065d293b3155149849b94771ecd903e2f64bab5f1f307bd32ecf4c084ce1640",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "93047956907679dd0edc",
          "headline": "소매 투자자들은 이전과는 전혀 다른 방식으로 Nvidia의 주식 붕괴를 구매하고 있습니다. 역사는 인내심을 요구합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794512888,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb1f8261682cc3ae4e41206aacd3d0164ca57ce287fbef2ad95d594bb14cb9ba",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "dffc7cd147bdd3165980",
          "headline": "Marvell, 1,150억 달러 규모의 AI 거래를 앞두고 주요 이사회 움직임",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794512690,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f7b91e4ce34e1f3b948f3cfe93f31d903fe42f161c72ed5700b07b924c666ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "269d35bda6c62a919e9a",
          "headline": "50억 달러 규모의 Qualcomm 데이터 센터 램프로 이제 실행에 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794505620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5b859a74d1131e583434c2588bfd6fafcd3f0a45612ca3bef0890df73041672",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "960bdc07bbaae1327c11",
          "headline": "엔비디아 CEO 젠슨 황의 충격적인 사임 이후 AMD와 브로드컴이 랠리를 펼쳤다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794502260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70945a7716e7113599fb697cf45372407ccbbed16db45bfdcc772a3fa85196f5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "46292896d7ac500d05b3",
          "headline": "Oracle(ORCL)은 45억 달러 규모의 Nashville 본사 프로젝트에서 무엇을 얻습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794496282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd5f5a55292649a75513064f0895c44eed1de9aa1946a922145cbd406fc30b2f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "759c40ae4a25d7af185c",
          "headline": "NVIDIA는 Jensen Huang을 축출할 준비를 하고 있다는 보고서에서 9%를 기록했습니다. Intel은 4% 하락, AMD는 안정세 유지",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794491337,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c77ce486609c3f6be61272348bc58ccc687918bd5eabcb91700a94a5c85800f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e1b16a0809b0e1ebca8f",
          "headline": "구글 모기업, AI 부채 매각 주문으로 50억 달러 유치",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794481991,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73bdc9d4f10bf2ec95917a945e7dca8e117eb55307bbac0cf4b79771e2eb3774",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 30,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794514052,
      "signal": "주의 강화",
      "netScore": -3.29,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
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
          "eventId": "8e8301b5e938efbd4b76",
          "headline": "Broadcom 주식이 목요일 오전에 반등한 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794514052,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a46fb39d55b54266e76b9309d454d6035ed336638f521564f117354800c20242",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6f532e9d6e630e232878",
          "headline": "Tom Lee는 Jensen Huang의 퇴임이 그의 낙관적인 기술 전망을 바꾸지 않는다고 말합니다: AVGO, AMD 주식이 칩 랠리를 주도합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1794504123,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=870757e89f0fd6a754a9125dfa3ce5276deb1a3afaf9aba0341d78efb625d5d2",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1835361c19c99ce6d997",
          "headline": "Nvidia CEO Jensen Huang이 퇴임하면서 AMD는 6% 상승, Broadcom은 6% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794503116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3228204b6e8fe0eef48d9eb4f1b0348782120c2fe7e32b9781da8676eab32fc1",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "960bdc07bbaae1327c11",
          "headline": "엔비디아 CEO 젠슨 황의 충격적인 사임 이후 AMD와 브로드컴이 랠리를 펼쳤다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794502260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70945a7716e7113599fb697cf45372407ccbbed16db45bfdcc772a3fa85196f5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794504420,
      "signal": "주의 강화",
      "netScore": -2.17,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
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
          "score": -3.15,
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
          "eventId": "be9e6f065b854a3c9181",
          "headline": "다각화가 마진 위험을 충족시키기 때문에 Qualcomm 주식을 매수할 가치가 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794504420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0a8eee368dc656423940d4328f7719038e17277a8e299e56e6dd306f95406d1e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "자동차 고객·설계 채택 확대 가능성"
        },
        {
          "eventId": "b84eb06be58955c137b7",
          "headline": "Apple의 시가총액은 Tim Cook이 CEO로 재임한 15년 동안 3,470억 달러에서 4조 6천억 달러로 성장했습니다. John Ternus가 이끄는 Apple의 다음 장에서 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794504182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=299a11539386d565e8cf1be884c33b29f6552c46f0c38db6b161adf9f4ca0d74",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "6f532e9d6e630e232878",
          "headline": "Tom Lee는 Jensen Huang의 퇴임이 그의 낙관적인 기술 전망을 바꾸지 않는다고 말합니다: AVGO, AMD 주식이 칩 랠리를 주도합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1794504123,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=870757e89f0fd6a754a9125dfa3ce5276deb1a3afaf9aba0341d78efb625d5d2",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d5ea178cc90d3492478c",
          "headline": "SpaceX와 Qualcomm의 새로운 계약은 이동통신사를 공략하는 것을 목표로 합니다. 역사는 그것이 힘든 싸움이 될 것이라고 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794498062,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85479a559ba0f656a7c76b24e5803afd8afd109604be8bc18b88ba8b9f891a1d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "963d36b3ef3989c7495b",
          "headline": "SpaceX 거래의 Qualcomm CEO: '혁신'을 주도할 '훌륭한 파트너십'",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794489888,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=71815c6e8648ee39e0084e0f642659626391ece445d57c8322f953a200d06b38",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1794576841.6177046,
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
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794512690,
      "signal": "중립·확인 대기",
      "netScore": 1.62,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.23,
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
          "eventId": "dffc7cd147bdd3165980",
          "headline": "Marvell, 1,150억 달러 규모의 AI 거래를 앞두고 주요 이사회 움직임",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794512690,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f7b91e4ce34e1f3b948f3cfe93f31d903fe42f161c72ed5700b07b924c666ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c0cdd1344625b90f0369",
          "headline": "MRVL SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794409200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000026/mrvl-20261111.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794517919,
      "signal": "우호적 변화",
      "netScore": 8.6,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.62,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.72,
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
          "eventId": "881d96b6ca797d170f19",
          "headline": "인텔(INTC)은 AI 파트너십과 부문 변동성으로 인해 88% 저평가될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794517919,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f042f5d4a7bfd1bf42b48b85d044de506b64dd44db6108852011fbcf66213e6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4d280c2e8cb974813eee",
          "headline": "Intel, RadixArk, Intel 플랫폼에서 개방형 AI 추론을 발전시키기 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794515400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a0ad236f85932071f5f3753df9df655fb3adfd86ffefc9d9a78e59e211b9feb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cad93e59157157081283",
          "headline": "NVIDIA CEO가 130억 달러의 파트너십 지분을 확보함에 따라 Intel 주식은 3.49% 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794512620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cae127bd6457e6dde2deeb7e8ba39e81ee83c24044d9b1aad88ff36fe105a0b1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "759c40ae4a25d7af185c",
          "headline": "NVIDIA는 Jensen Huang을 축출할 준비를 하고 있다는 보고서에서 9%를 기록했습니다. Intel은 4% 하락, AMD는 안정세 유지",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794491337,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c77ce486609c3f6be61272348bc58ccc687918bd5eabcb91700a94a5c85800f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1794576841.6177046,
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
          "eventId": "0ad454e998a76dedc1b0",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794409200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000800/a20261112statementregardin.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1794576841.6177046,
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
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794541349,
      "signal": "중립·확인 대기",
      "netScore": -0.57,
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
          "eventId": "77fa3d3ea8c112f4b873",
          "headline": "AMAT CEO는 칩 수요가 탄탄하다고 말하고 '다년간의' 팹 투자가 필요하다고 덧붙였습니다. 주가는 급격한 상승 이후 완만하게 상승했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794541349,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3e24cc16c5c5ec2e548596801f0878922864882659191718530aec7e4ae177d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fbd0ba9ab779b28d3ce2",
          "headline": "KLA 주식은 얼마나 낮아질 수 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794511397,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa9a13ccee24a4d240d283b8c86768de6ca0c6878f331e0a20c48b3a76da38b7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6f532e9d6e630e232878",
          "headline": "Tom Lee는 Jensen Huang의 퇴임이 그의 낙관적인 기술 전망을 바꾸지 않는다고 말합니다: AVGO, AMD 주식이 칩 랠리를 주도합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1794504123,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=870757e89f0fd6a754a9125dfa3ce5276deb1a3afaf9aba0341d78efb625d5d2",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        },
        {
          "eventId": "3170428ca0e1fa890986",
          "headline": "AMAT SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1794409200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026073360/amat-20261112.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794511397,
      "signal": "주의 강화",
      "netScore": -2.3,
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
          "eventId": "fbd0ba9ab779b28d3ce2",
          "headline": "KLA 주식은 얼마나 낮아질 수 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794511397,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa9a13ccee24a4d240d283b8c86768de6ca0c6878f331e0a20c48b3a76da38b7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "740812be840c47d5a021",
          "headline": "어플라이드 머티어리얼즈, 칩 재고 반등으로 수익보다 8% 앞서 상승 Lam Research는 9% 상승, KLA는 7% 상승",
          "eventLabel": "실적 발표",
          "publishedAt": 1794423777,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7e04e0c9b336a597c8ba2781eefa8c0e332afdc1e77f060d9344f4b97b336a4",
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
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794484941,
      "signal": "주의 강화",
      "netScore": -2.3,
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
          "score": -0.7,
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
          "eventId": "a0957ea5bbe873a99d4b",
          "headline": "KLA 주식에는 증명할 것이 한 가지 남아 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794484941,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b5c5eb1133ffad0bf76e13e53ba09dfa658b018da54cc9badead5cd1779689f3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "740812be840c47d5a021",
          "headline": "어플라이드 머티어리얼즈, 칩 재고 반등으로 수익보다 8% 앞서 상승 Lam Research는 9% 상승, KLA는 7% 상승",
          "eventLabel": "실적 발표",
          "publishedAt": 1794423777,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7e04e0c9b336a597c8ba2781eefa8c0e332afdc1e77f060d9344f4b97b336a4",
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
    "MU": {
      "ticker": "MU",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794544499,
      "signal": "우호적 변화",
      "netScore": 5.53,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 4.9,
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
          "score": -4.9,
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
          "eventId": "95ce0cc64327a77714f7",
          "headline": "AI 플랫폼 성장이 Salesforce(CRM)의 투자 내러티브를 바꾸었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794544499,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=922ed224266cc6ca4b8e932d03868d8dddd50f598c282814c0f19b3f87c62404",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "accf133e08629f3aa007",
          "headline": "Alphabet, AI Frenzy 빌드로 50억 달러의 주문 기록",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794524759,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9065d293b3155149849b94771ecd903e2f64bab5f1f307bd32ecf4c084ce1640",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "128fadc7fb38ab57847f",
          "headline": "마이크론 주가는 고점 대비 33% 하락했습니다. 역사에 따르면 현재 5,000달러 투자의 가치는 2028년까지 이 정도 가치가 될 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794520920,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36c083bf0746c9901736ef37fe27388f8e8c7e9158d283d5010100ba3d933ab0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "93047956907679dd0edc",
          "headline": "소매 투자자들은 이전과는 전혀 다른 방식으로 Nvidia의 주식 붕괴를 구매하고 있습니다. 역사는 인내심을 요구합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794512888,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb1f8261682cc3ae4e41206aacd3d0164ca57ce287fbef2ad95d594bb14cb9ba",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "dffc7cd147bdd3165980",
          "headline": "Marvell, 1,150억 달러 규모의 AI 거래를 앞두고 주요 이사회 움직임",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794512690,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f7b91e4ce34e1f3b948f3cfe93f31d903fe42f161c72ed5700b07b924c666ab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "269d35bda6c62a919e9a",
          "headline": "50억 달러 규모의 Qualcomm 데이터 센터 램프로 이제 실행에 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794505620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5b859a74d1131e583434c2588bfd6fafcd3f0a45612ca3bef0890df73041672",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "b84eb06be58955c137b7",
          "headline": "Apple의 시가총액은 Tim Cook이 CEO로 재임한 15년 동안 3,470억 달러에서 4조 6천억 달러로 성장했습니다. John Ternus가 이끄는 Apple의 다음 장에서 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794504182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=299a11539386d565e8cf1be884c33b29f6552c46f0c38db6b161adf9f4ca0d74",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "46292896d7ac500d05b3",
          "headline": "Oracle(ORCL)은 45억 달러 규모의 Nashville 본사 프로젝트에서 무엇을 얻습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794496282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd5f5a55292649a75513064f0895c44eed1de9aa1946a922145cbd406fc30b2f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "bff5216cdb595808af46",
          "headline": "마이크론은 지난 분기에 애플보다 더 많은 수익을 냈지만 가치는 1/6만큼 높습니다. 두 가지 중 하나가 잘못되었습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794486185,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6cb43f8ce911c8549ceceab90202539b9f8ecea70ae090d518fa0e3b57053370",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e1b16a0809b0e1ebca8f",
          "headline": "구글 모기업, AI 부채 매각 주문으로 50억 달러 유치",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794481991,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73bdc9d4f10bf2ec95917a945e7dca8e117eb55307bbac0cf4b79771e2eb3774",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "92af0c56ece9e16bb43e",
          "headline": "AI가 메모리 칩 부족을 유발함에 따라 Micron과 Sandisk가 급증",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794481953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e8598b696bbda7251d6ae175a9ee68997818cf4df011f84e5ca6494f570a8de",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 27,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794502565,
      "signal": "주의 강화",
      "netScore": -3.22,
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
          "eventId": "06ebe62af6a2907dcf11",
          "headline": "NVIDIA 개편으로 메모리 주식이 강세를 보이면서 Sandisk, Micron, SK Hynix가 3% 하락했습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794502565,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f123c4876b6247e8fe02d41b80c176a73a8970b571792239acc8d3500c666b8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92af0c56ece9e16bb43e",
          "headline": "AI가 메모리 칩 부족을 유발함에 따라 Micron과 Sandisk가 급증",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794481953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e8598b696bbda7251d6ae175a9ee68997818cf4df011f84e5ca6494f570a8de",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "95bdfea0353e9002989d",
          "headline": "Sandisk: 다음 NAND 침체는 황소가 옳았다는 것을 증명할 수 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794469502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57cdcb8bdfa614388f304b370bef6620dd79cd57e42323055827b0b3daae8726",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794504182,
      "signal": "주의 강화",
      "netScore": -5.66,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.57,
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
          "eventId": "b84eb06be58955c137b7",
          "headline": "Apple의 시가총액은 Tim Cook이 CEO로 재임한 15년 동안 3,470억 달러에서 4조 6천억 달러로 성장했습니다. John Ternus가 이끄는 Apple의 다음 장에서 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794504182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=299a11539386d565e8cf1be884c33b29f6552c46f0c38db6b161adf9f4ca0d74",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794497177,
      "signal": "중립·확인 대기",
      "netScore": 0.49,
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
          "score": 0.0,
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
          "eventId": "ae3b024abc1789b10d40",
          "headline": "Arista Networks 주식 가격에 대한 공개 질문",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794497177,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02b4bebe504d6bb77cb585dc08e842989741ce8419d1dbfc450eb83ea8ba29bc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794423220,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794491892,
      "signal": "중립·확인 대기",
      "netScore": 1.47,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.92,
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
          "eventId": "b5c090f32f41833d1817",
          "headline": "Lumentum은 Marvell의 매수 제안보다 낮은 가격으로 거래됩니다. 격차는 할인인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794491892,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3e9b0912031f54d268a4c4cc657348c8f2b135166083342ddc22de006a8e4fe",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8d69863e19fea72db092",
          "headline": "Coherent는 성장 가이드가 AI 매도보다 오래 지속되면서 일주일 만에 20% 급등: “기본적으로 예약이 완료됨”",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794491432,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38865771402855d8e23b285a801873bb39fd559163237c29a67de7366f3d90a8",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794461704,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794515726,
      "signal": "중립·확인 대기",
      "netScore": -0.83,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.7,
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
          "score": -1.92,
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
          "eventId": "1cb8706c047122b0fc74",
          "headline": "데이터 센터 백래시가 AI 성능에 영향을 미치면서 GE Vernova는 일주일 만에 12% 하락, Vertiv는 12% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794515726,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67809ea026e03fc852a2af4fce33392ad5bbb35a3d3f41619f5368b524fc1815",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f3244be01e7f3722490d",
          "headline": "Constellation Energy 주식이 시장 위험을 증가시키고 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794499191,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0375e0a3fc81d1521dc04870e3a69e4d8c177423339fd1f68d02144612eacd45",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794501334,
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
          "eventId": "fcb5a428d837ea239b75",
          "headline": "별자리 에너지는 지침 인상으로 일주일 만에 13% 급등: \"지금까지 볼 수 없었던 플랫폼\"",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794501334,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51969d2bbbe81357aea82325f999229842a572555188f69d41878d654ed50228",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794413583,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794463924,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1794576841.6177046,
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
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794515726,
      "signal": "중립·확인 대기",
      "netScore": -1.33,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "eventId": "1cb8706c047122b0fc74",
          "headline": "데이터 센터 백래시가 AI 성능에 영향을 미치면서 GE Vernova는 일주일 만에 12% 하락, Vertiv는 12% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794515726,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67809ea026e03fc852a2af4fce33392ad5bbb35a3d3f41619f5368b524fc1815",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794501136,
      "signal": "주의 강화",
      "netScore": -2.52,
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
          "eventId": "8478e8257d803ac63843",
          "headline": "3분기에 공급망 병목 현상과 낮은 마진으로 인해 Modine Manufacturing Company(MOD)가 하락했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794501136,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44cec97b60b671ccf6d666ada21b49c6a1650588cb9f2b18acf9d4dea7dc18ce",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "STX": {
      "ticker": "STX",
      "updatedAt": 1794576841.6177046,
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
      "updatedAt": 1794576841.6177046,
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
      "updatedAt": 1794576841.6177046,
      "dataAsOf": 1794447482,
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
          "eventId": "272e31186c377993f4e8",
          "headline": "CoreWeave가 AI의 전력 부족 문제를 지적하며 BE 주가가 7월 이후 최대 일일 상승폭 기록 – 하지만 소매 투자자들은 '빠른 해결책'에 대해 경고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794447482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf1ce8f4b771f0b8541bffa94d589b29808352f24105a7e0055011f4d8c6bbd8",
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
      "updatedAt": 1794576841.6177046,
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
