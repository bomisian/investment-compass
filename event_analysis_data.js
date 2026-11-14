// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1794657657.6617656,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794605483,
      "signal": "우호적 변화",
      "netScore": 9.59,
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
          "score": -1.75,
          "level": "주의"
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
          "eventId": "2f1db9d97810782c6765",
          "headline": "Microsoft 거래로 Cerebras 주가 급등: Nvidia에 미치는 영향",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794605483,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b749c047c398794b579255970d097d582b48edc9bbfde7b80ffe7cacfa983674",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c5cf267168a53a313623",
          "headline": "Microsoft 중단으로 인해 석유 거래자 데이터 및 거래 중단",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794600373,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a19e232e9e83e4152a06617902936b962d81d93650184c14ba0bf7c15844d2c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1519d7c3f927faf82036",
          "headline": "Cerebras 주식은 전망을 높이고 Microsoft 클라우드 거래를 확인한 후 11.70% 상승했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794595472,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ce6a5b1f54ffc24b491efec62bce988fdf9da0a4396535f8bb6481138e42703",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "f0cd70a301ee2f6cadb4",
          "headline": "애플이 아닙니다. 마이크로소프트가 아닙니다. 이 \"매그니피센트 세븐\" 주식은 2027년 나의 최고 기술 매수 종목입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794579900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=08fde62ecab8d73fe2a887f9c076f2f98435e8373f34df78f4b6eee9a8159e8e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 15,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794604221,
      "signal": "주의 강화",
      "netScore": -3.22,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.27,
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
          "score": -3.5,
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
          "eventId": "7d58edd50da629dd793e",
          "headline": "Alphabet(GOOGL), Uber Deal Talk, Space Chip 테스트 및 16억 6천만 유로의 벌금 직면",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794604221,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de8892ffbae6467e690f5b019f88cf81ff687af9eef424277c82c14142a477c8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f0cd70a301ee2f6cadb4",
          "headline": "애플이 아닙니다. 마이크로소프트가 아닙니다. 이 \"매그니피센트 세븐\" 주식은 2027년 나의 최고 기술 매수 종목입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794579900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=08fde62ecab8d73fe2a887f9c076f2f98435e8373f34df78f4b6eee9a8159e8e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ab39d1d26b0d2c98528f",
          "headline": "Nvidia는 거의 2조 달러의 가치를 잃었습니다. Jensen Huang 없이는 어떤 가치가 있을까요?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794577988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0846d361d1711cc6242dd4714c9b91c724c329b376e5c8c2cf57bc1b9c514a67",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794608639,
      "signal": "우호적 변화",
      "netScore": 2.94,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.32,
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
          "eventId": "f7df7d68be252adb6ee4",
          "headline": "FRMI Stock Clocks Best Day Ever After 보고서에서 Amazon을 Project Matador 고객으로 지정",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794608639,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9c3d7a9a57bdbc8925ca3c545cb5df329024d2b30ac2bfbb041e819042df3bb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a95124eddfb00804354e",
          "headline": "Amazon Prime과 Uber Eats 파트너십: Prime 회원의 경우 $25 이상 주문 시 배송비 $0",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794596613,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=54c9e65c2148f98694aec210e32a8507d2a2d62131fc006202a05b6037e49f34",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e192b615a1cb4c92de4c",
          "headline": "오라클의 1,250억 달러 부채가 불러온 중대한 AI 경고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794588981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8711b52371d5b59a1323abaca35dedd6df6aabb97c69d51c95e1bc38b604c087",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "80ec3c9af88b97787265",
          "headline": "인류애 IPO로 2,718억 달러의 가치를 지분에 투자하면서 Amazon 주식 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794506361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0554d560d41ffee13b0581798d2297b9d385e6ef8433e37c1b7b5e9ea5f3352c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794577988,
      "signal": "우호적 변화",
      "netScore": 3.49,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
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
          "eventId": "ab39d1d26b0d2c98528f",
          "headline": "Nvidia는 거의 2조 달러의 가치를 잃었습니다. Jensen Huang 없이는 어떤 가치가 있을까요?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794577988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0846d361d1711cc6242dd4714c9b91c724c329b376e5c8c2cf57bc1b9c514a67",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794505533,
      "signal": "주의 강화",
      "netScore": -9.58,
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
          "score": -4.37,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -3.32,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794636577,
      "signal": "주의 강화",
      "netScore": -3.5,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
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
          "eventId": "6f2722b328e6b3242c52",
          "headline": "이제 일부 고객만 Tesla Cybercab을 구매할 수 있습니다. 하지만 여기에는 문제가 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794636577,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=72c7920c276a459b5425da3e26305a6b4e638e7182a411d1fc28eda70a3b62ea",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "36168133e44b82a181f5",
          "headline": "SpaceX는 빠르면 12월에 Tesla와의 거래를 발표할 수 있습니다. SpaceX Stock에 미치는 영향은 다음과 같습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794605522,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=882d12c8e6596107fe416d9105b141280cd2c613f78b549cdc8c3972aa2571e8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "ac273f18e51f25778335",
          "headline": "SpaceX는 빠르면 12월에 Tesla와의 거래를 발표할 수 있습니다. SpaceX Stock에 미치는 영향은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794605522,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=882d12c8e6596107fe416d9105b141280cd2c613f78b549cdc8c3972aa2571e8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cf9a3ccfaf7be3ad23dd",
          "headline": "Tesla와 SpaceX가 거래에 가까워졌습니다. Tesla 주주들은 무엇을 얻게 될까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794598263,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c26448ea2b3abd4f57091605f3b1613a54241a954626ca2dd9c6a2ea6240aec3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "371ce756aca3bdf9206e",
          "headline": "Tesla와 SpaceX는 이르면 12월에 합병을 발표할 수도 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794575282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=578295c670d4f442ea46e4284a5f399a579dae2bbea4dd7e98560691f1c06f04",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794588981,
      "signal": "중립·확인 대기",
      "netScore": 0.98,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.8,
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
          "eventId": "e192b615a1cb4c92de4c",
          "headline": "오라클의 1,250억 달러 부채가 불러온 중대한 AI 경고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794588981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8711b52371d5b59a1323abaca35dedd6df6aabb97c69d51c95e1bc38b604c087",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "9583c91ca890c9b228ec",
          "headline": "Oracle은 이제 기가와트당 \"연간 160억 달러\"를 벌어들입니다. 이는 100억 달러에서 증가한 수치입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794565714,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a81f262138b09c5fa96c1626c8c549038dbdc60a6690908337e56db75f58067",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794544499,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794580670,
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
          "eventId": "f4c97fac290d33ffe3bd",
          "headline": "Cathie Wood는 CoreWeave Dip을 구매하고 Palantir를 판매합니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794580670,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c173865a8ac6aea2a795dce296614328bbc05d8657133ba06949b46840a79ac5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794650440,
      "signal": "우호적 변화",
      "netScore": 2.3,
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
          "score": -5,
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
          "eventId": "e1be070b2cf74795d557",
          "headline": "Taiwan Semiconductor(NYSE:TSM): 고성장과 펀더멘털 개선으로 화면 통과",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794650440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ba0ccbfb3cca78443e4c8d8eccd3fc8974969819b86a2f569a5dd9a7baa9527",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2f1db9d97810782c6765",
          "headline": "Microsoft 거래로 Cerebras 주가 급등: Nvidia에 미치는 영향",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794605483,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b749c047c398794b579255970d097d582b48edc9bbfde7b80ffe7cacfa983674",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4b56e2e5e570b05f40f6",
          "headline": "Arm Stock은 Nvidia가 CEO를 빼앗을 수 있다는 투자자들의 두려움 때문에 타격을 입었습니다. 매도할 시간인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794601894,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec99f47ed31296d6edccdaf1337ca73814571a143e579d15cc92ee7e58d84cdf",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ca1d3af8c6e420bfa65",
          "headline": "SpaceX의 중요한 날: 역사적인 우주선 발사, 조사 중인 Tesla 합병, 740억 달러 규모의 AI 베팅",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794599102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d101675df9355612ed36c32744d8ae048277bdaa71234cfcbe33ab3f90f0e800",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "016a6101e7f9e4673f0a",
          "headline": "Nvidia의 경쟁사들이 주목받는 가운데 투자자들이 Broadcom(AVGO)에 어떻게 반응할지",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794597037,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0363e5581dfbd1d407638bc38557c6f2346527c31b99a2b69e736a7dd9816b81",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "c04f0da99119e44349ba",
          "headline": "Nvidia와 Palantir의 동일한 10,000달러가 2030년까지 매우 다른 결과를 낳을 수 있습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794591206,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9950a9f19f7c7216fa1c90b5bf2705b37360226e318ee1c144707e5340f5b965",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e192b615a1cb4c92de4c",
          "headline": "오라클의 1,250억 달러 부채가 불러온 중대한 AI 경고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794588981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8711b52371d5b59a1323abaca35dedd6df6aabb97c69d51c95e1bc38b604c087",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "데이터센터 투자 지속 시 AI 컴퓨팅 수요 유지 가능성"
        },
        {
          "eventId": "dd68f8309af885eb62df",
          "headline": "Apple은 세계 최대 기업이고 Nvidia는 2위입니다. 오늘 매일 투자한 10,000달러가 내년 말까지 가치가 될 수 있는 금액은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794584521,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=55d6dfc709424f81412bee1e3c70061407ad551045247a56fc058eceb03fdee6",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4edccf096d009e2221dd",
          "headline": "Citi가 성장이 정점에 도달했을 수 있다고 말함에 따라 AI 전망을 90억 달러로 높였음에도 불구하고 Cisco는 5% 하락했습니다. Hewlett Packard Enterprise는 5% 후퇴, Arista는 3% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794582789,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d3cb6c2fefad75449954d923c16671c86be7c0f7883f6fd76fec047d7202b7c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "28b2c001dff253188702",
          "headline": "Nvidia는 S&P 500 펀드의 6.1%를 차지합니다. 당신의 전화번호는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794571970,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25c2f195710ff48a8663c902bf4f7561d0be0d6e9eb19bdefdff7ca2f092e334",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d49b895cb3fba0e5ae7a",
          "headline": "NVIDIA 종료가 Lumentum 거래 통화에 무게를 두면서 Marvell 주가 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794570230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b318faa0130a46a8d5eb6e44cfbc05ef70af687ae1ed50a408d73b5880d39a8b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c5bac73507c22e1772ce",
          "headline": "AI 칩 업데이트 - Micron, 투자자 이벤트에서 AI 리더십 강조",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794569857,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d9b346d455f3220475ea12e6bfd8a4c07e840c28901704a84c385871cb7ee7a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 42,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794650440,
      "signal": "우호적 변화",
      "netScore": 8.63,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "eventId": "e1be070b2cf74795d557",
          "headline": "Taiwan Semiconductor(NYSE:TSM): 고성장과 펀더멘털 개선으로 화면 통과",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794650440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ba0ccbfb3cca78443e4c8d8eccd3fc8974969819b86a2f569a5dd9a7baa9527",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "4ca1d3af8c6e420bfa65",
          "headline": "SpaceX의 중요한 날: 역사적인 우주선 발사, 조사 중인 Tesla 합병, 740억 달러 규모의 AI 베팅",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794599102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d101675df9355612ed36c32744d8ae048277bdaa71234cfcbe33ab3f90f0e800",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "016a6101e7f9e4673f0a",
          "headline": "Nvidia의 경쟁사들이 주목받는 가운데 투자자들이 Broadcom(AVGO)에 어떻게 반응할지",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794597037,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0363e5581dfbd1d407638bc38557c6f2346527c31b99a2b69e736a7dd9816b81",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "4edccf096d009e2221dd",
          "headline": "Citi가 성장이 정점에 도달했을 수 있다고 말함에 따라 AI 전망을 90억 달러로 높였음에도 불구하고 Cisco는 5% 하락했습니다. Hewlett Packard Enterprise는 5% 후퇴, Arista는 3% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794582789,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d3cb6c2fefad75449954d923c16671c86be7c0f7883f6fd76fec047d7202b7c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c5bac73507c22e1772ce",
          "headline": "AI 칩 업데이트 - Micron, 투자자 이벤트에서 AI 리더십 강조",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794569857,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d9b346d455f3220475ea12e6bfd8a4c07e840c28901704a84c385871cb7ee7a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "eventId": "45b12f4256f060ae9a41",
          "headline": "예측: 대만 반도체 제조에 투자한 월 500달러는 2030년까지 이만큼 가치가 있을 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794522000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f2d5f0e258bf8c2dc82a171f29c20def113bcf4c76fac7d341197106a285c82f",
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
          "eventId": "80ec3c9af88b97787265",
          "headline": "인류애 IPO로 2,718억 달러의 가치를 지분에 투자하면서 Amazon 주식 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794506361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0554d560d41ffee13b0581798d2297b9d385e6ef8433e37c1b7b5e9ea5f3352c",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 23,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794597037,
      "signal": "중립·확인 대기",
      "netScore": -1.67,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "016a6101e7f9e4673f0a",
          "headline": "Nvidia의 경쟁사들이 주목받는 가운데 투자자들이 Broadcom(AVGO)에 어떻게 반응할지",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794597037,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0363e5581dfbd1d407638bc38557c6f2346527c31b99a2b69e736a7dd9816b81",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794619862,
      "signal": "주의 강화",
      "netScore": -7.15,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "eventId": "06b99eb63f6c69c4c094",
          "headline": "마이크론 테크놀로지 vs. 퀄컴: 2027년에는 어느 기술주가 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794619862,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f47f411a630062af4d2336f5e280ac06f3a4cbaf84e7e96dfdb2f5ab8223ffa4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6b9a8e56a2dd4390185d",
          "headline": "Qualcomm CEO는 칩 제조업체가 \"극심한 부족\"에 처해 있다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794587331,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48306ae54db9acb50e0ede9aff8674d0c41c65dcb1b2b78501bf05444310e54c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
          "eventId": "6bc58a529b4b93b444c6",
          "headline": "QCOM SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794495600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000110465926127163/tm2629667d1_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794605461,
      "signal": "우호적 변화",
      "netScore": 5.6,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.38,
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
          "score": 1.05,
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
          "eventId": "7f6bfa2fb53ca3ae1f54",
          "headline": "TD Cowen의 Marvell(MRVL) 다운그레이드 이면의 거래",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794605461,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dcc6a9204b90b8022546d4c0a768edb1cb65d9881ece6b33b5f9b6bf619d9199",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "77aabbd514c540fec08d",
          "headline": "Marvell은 올해에도 여전히 81% 상승했습니다. MRVL 주가가 2029년까지 300달러에 도달할 수 있을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794592466,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=286e904a40aa79cfed3a7da4161b7d729afbd57606cb0dc5a9ab0c3c796a3db9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4670d0cc7f8c0c76dc24",
          "headline": "루멘텀 인수 계약 차액이 18%로 확대되면서 마벨 주가가 6.6% 하락",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794588033,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57f7f3ee3c37dcbc79dc0e0b2e913061eae1255ffce119b01a2bfe263f879f59",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d86cc2dada015cb4c2d0",
          "headline": "Marvell 거래 스프레드가 19.7%로 확대됨에 따라 Lumentum 주가 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794570690,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=614acc0d339a56813f52ed977ae9ec7f0ba3c5bf5f6f19b3e96f4b774050ba74",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d49b895cb3fba0e5ae7a",
          "headline": "NVIDIA 종료가 Lumentum 거래 통화에 무게를 두면서 Marvell 주가 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794570230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b318faa0130a46a8d5eb6e44cfbc05ef70af687ae1ed50a408d73b5880d39a8b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794517919,
      "signal": "우호적 변화",
      "netScore": 7.9,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.45,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.37,
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
          "score": 1.92,
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
          "reason": "회사 실적과의 연결고리 확인"
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
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794650440,
      "signal": "중립·확인 대기",
      "netScore": -0.48,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
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
          "eventId": "e1be070b2cf74795d557",
          "headline": "Taiwan Semiconductor(NYSE:TSM): 고성장과 펀더멘털 개선으로 화면 통과",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794650440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ba0ccbfb3cca78443e4c8d8eccd3fc8974969819b86a2f569a5dd9a7baa9527",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3737363b2475623334f2",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794495600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000801/tsm-fsx20261113x6k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794650440,
      "signal": "우호적 변화",
      "netScore": 4.05,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 4.2,
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
          "score": 3.85,
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
          "eventId": "e1be070b2cf74795d557",
          "headline": "Taiwan Semiconductor(NYSE:TSM): 고성장과 펀더멘털 개선으로 화면 통과",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794650440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ba0ccbfb3cca78443e4c8d8eccd3fc8974969819b86a2f569a5dd9a7baa9527",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "06b99eb63f6c69c4c094",
          "headline": "마이크론 테크놀로지 vs. 퀄컴: 2027년에는 어느 기술주가 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794619862,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f47f411a630062af4d2336f5e280ac06f3a4cbaf84e7e96dfdb2f5ab8223ffa4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ca1d3af8c6e420bfa65",
          "headline": "SpaceX의 중요한 날: 역사적인 우주선 발사, 조사 중인 Tesla 합병, 740억 달러 규모의 AI 베팅",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794599102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d101675df9355612ed36c32744d8ae048277bdaa71234cfcbe33ab3f90f0e800",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "016a6101e7f9e4673f0a",
          "headline": "Nvidia의 경쟁사들이 주목받는 가운데 투자자들이 Broadcom(AVGO)에 어떻게 반응할지",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1794597037,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0363e5581dfbd1d407638bc38557c6f2346527c31b99a2b69e736a7dd9816b81",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "4edccf096d009e2221dd",
          "headline": "Citi가 성장이 정점에 도달했을 수 있다고 말함에 따라 AI 전망을 90억 달러로 높였음에도 불구하고 Cisco는 5% 하락했습니다. Hewlett Packard Enterprise는 5% 후퇴, Arista는 3% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794582789,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d3cb6c2fefad75449954d923c16671c86be7c0f7883f6fd76fec047d7202b7c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "c5bac73507c22e1772ce",
          "headline": "AI 칩 업데이트 - Micron, 투자자 이벤트에서 AI 리더십 강조",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794569857,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d9b346d455f3220475ea12e6bfd8a4c07e840c28901704a84c385871cb7ee7a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "eventId": "45b12f4256f060ae9a41",
          "headline": "예측: 대만 반도체 제조에 투자한 월 500달러는 2030년까지 이만큼 가치가 있을 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794522000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f2d5f0e258bf8c2dc82a171f29c20def113bcf4c76fac7d341197106a285c82f",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 24,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794504182,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794588033,
      "signal": "우호적 변화",
      "netScore": 4.28,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.92,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.33,
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
          "eventId": "4670d0cc7f8c0c76dc24",
          "headline": "루멘텀 인수 계약 차액이 18%로 확대되면서 마벨 주가가 6.6% 하락",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794588033,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57f7f3ee3c37dcbc79dc0e0b2e913061eae1255ffce119b01a2bfe263f879f59",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d86cc2dada015cb4c2d0",
          "headline": "Marvell 거래 스프레드가 19.7%로 확대됨에 따라 Lumentum 주가 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794570690,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=614acc0d339a56813f52ed977ae9ec7f0ba3c5bf5f6f19b3e96f4b774050ba74",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d49b895cb3fba0e5ae7a",
          "headline": "NVIDIA 종료가 Lumentum 거래 통화에 무게를 두면서 Marvell 주가 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794570230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b318faa0130a46a8d5eb6e44cfbc05ef70af687ae1ed50a408d73b5880d39a8b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794461704,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794560760,
      "signal": "주의 강화",
      "netScore": -4.11,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.52,
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
          "score": -2.97,
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
          "eventId": "986ec4fb1e27c461a623",
          "headline": "블룸 에너지 vs. 별자리 에너지: 현장 전력 또는 그리드 전력, 데이터 센터의 승리는 무엇입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794560760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e48c7d6925da7bb9567ab69d7d9f433d8b2ffd7471290df3f302752656f1b6d1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794515726,
      "signal": "중립·확인 대기",
      "netScore": -0.47,
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
          "eventId": "626d74d96db0593c9a76",
          "headline": "VRT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794495600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026073564/vrt-20261113.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
      "dataAsOf": 1794576600,
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
          "eventId": "0d296982db813c310c57",
          "headline": "EMCOR Group, Inc., P1 Construction, LLC 인수 계약 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794576600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43e26c090b747550f1bcb8d5abe7521c41399da1de62be911bd9739a50199b1b",
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
    "FIX": {
      "ticker": "FIX",
      "updatedAt": 1794657657.6617656,
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
      "updatedAt": 1794657657.6617656,
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
