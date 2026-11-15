// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1794749846.9257624,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794743402,
      "signal": "우호적 변화",
      "netScore": 6.99,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.32,
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
          "score": -2.8,
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
          "eventId": "3fe8414a94e0ab61ed96",
          "headline": "Amazon, Apple, Microsoft와 같은 최고 성장 주식에 투자하고 싶지만 Nvidia는 피하고 싶으신가요? 올해 24.8% 상승한 이 저비용 Vanguard ETF를 생각해 보십시오.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794743402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f0f2e8bf2db5dd4d82f1a1e145d5dc169d2ebfe544c1da76df578048f3228480",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cabcdaf27b0a5635d577",
          "headline": "Tesla는 무인 차량 판매에 맞춰 Cybercab에 대한 주요 발표를 합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794707368,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=338e012d30a344c4ab17d41a803a29240bd9e46362df7220609bc2d202a9a259",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccbde4c9780214d7f326",
          "headline": "억만장자 Bill Ackman은 Amazon, Microsoft, Meta 및 Alphabet에 대한 월스트리트의 기대에 큰 단절이 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d65d8020216f5e6d7add2864d5dd9203bafa39994057094f042e2e3f025f73ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794697426,
      "signal": "주의 강화",
      "netScore": -3.92,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
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
          "eventId": "aff754608d162d02fc12",
          "headline": "그는 자신의 200,000달러 S&P 500 401(k)가 AI 위험을 확산시킨다고 생각합니다. 두 개의 알파벳 주식 클래스가 한 회사에 $10,380를 투자했습니다. 20% 하락하면 $2,076의 비용이 발생할 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794697426,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f108095735710df780cee5d95409e144ce4f3de40be2a78e4c0e20c0bb6ab9a8",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccbde4c9780214d7f326",
          "headline": "억만장자 Bill Ackman은 Amazon, Microsoft, Meta 및 Alphabet에 대한 월스트리트의 기대에 큰 단절이 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d65d8020216f5e6d7add2864d5dd9203bafa39994057094f042e2e3f025f73ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "059562c9164b4f998115",
          "headline": "이번 주에 Advanced Micro Devices 주식이 급등한 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794661562,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=75b390dd9bfecc1d4f534213a580ccb6ce30eba954dd4c70c79973270af95635",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794743402,
      "signal": "우호적 변화",
      "netScore": 5.95,
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
          "eventId": "3fe8414a94e0ab61ed96",
          "headline": "Amazon, Apple, Microsoft와 같은 최고 성장 주식에 투자하고 싶지만 Nvidia는 피하고 싶으신가요? 올해 24.8% 상승한 이 저비용 Vanguard ETF를 생각해 보십시오.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794743402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f0f2e8bf2db5dd4d82f1a1e145d5dc169d2ebfe544c1da76df578048f3228480",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9994af3e4089769cab7b",
          "headline": "Amazon(AMZN), 북미 최초의 구속력 있는 연합 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794697737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85f4fc9cde96ed3797b862f92590a40d6914ad415fab0787126ab0568f6e6dbd",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccbde4c9780214d7f326",
          "headline": "억만장자 Bill Ackman은 Amazon, Microsoft, Meta 및 Alphabet에 대한 월스트리트의 기대에 큰 단절이 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d65d8020216f5e6d7add2864d5dd9203bafa39994057094f042e2e3f025f73ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f8bd9fd63513eb33567f",
          "headline": "변호사들은 Amazon의 3억 950만 달러 환불 합의금 중 최대 1억 달러를 챙길 수 있습니다. 청구 기한은 12월 1일입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=807a87f7586526b1da494ff45999aedcf78c4ab5b77c1a32f2c1ca5e522f47b6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794681188,
      "signal": "우호적 변화",
      "netScore": 2.03,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
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
          "score": -3.15,
          "level": "주의"
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
          "eventId": "ecb88b4b7ac76a70eecf",
          "headline": "이탈리아, 사용자 사진 접근에 대해 메타에 8억 8천만 달러 벌금 부과",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794681188,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ec856b5c1ab9a81c4c7e843d35b917e6adaced108f649513f024f965ae0f6a5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccbde4c9780214d7f326",
          "headline": "억만장자 Bill Ackman은 Amazon, Microsoft, Meta 및 Alphabet에 대한 월스트리트의 기대에 큰 단절이 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d65d8020216f5e6d7add2864d5dd9203bafa39994057094f042e2e3f025f73ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "77549457124ca51aa0a2",
          "headline": "Meta는 직원들과 함께 예측 시장 앱을 테스트하고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794666165,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d18e49e0a131b9b6d4fbc4baca2ef2eb2f258d2ae9a9545846e1e048d2d97a23",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794505533,
      "signal": "주의 강화",
      "netScore": -7.35,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.4,
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
          "score": -3.32,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794707368,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.75,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.55,
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
          "eventId": "cabcdaf27b0a5635d577",
          "headline": "Tesla는 무인 차량 판매에 맞춰 Cybercab에 대한 주요 발표를 합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794707368,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=338e012d30a344c4ab17d41a803a29240bd9e46362df7220609bc2d202a9a259",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6c2756b1dd0a00228ce",
          "headline": "Elon Musk의 Tesla와 SpaceX는 민주당이 중간선거를 휩쓴 후 이틀 만에 총 4,200억 달러 이상의 시장 가치를 잃었으며 투자자들은 새로운 의회 조사를 두려워했습니다. 정치가 필요한 이유는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794696482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7be7c32e8bc27764d4320a46a303663edd66c474c3d83d179f58655546a67d7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d72fd96dc894797fc075",
          "headline": "Tesla는 스티어링 휠이 없는 자동차에 대한 주문을 받기 시작했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794678537,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=46a8d4fac9cd14a2a54c3ab392f2bee87cabf97174c3b5fdb6e0e9cca0025391",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "62b8805462da41e9f516",
          "headline": "Tesla Cybercab의 월간 구독료는 '너무 높음', Elon Musk는 MKBHD를 인정: '...의 비용과 일치해야 함'",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794651618,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=130d104302bf926672c28ce08d36ba2986608b3f34a8d88d2226072c6018d845",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794634437,
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
          "eventId": "e29850cb8094157d0033",
          "headline": "CoreWeave는 20% 상승하고 Oracle을 더 높게 끌어올렸습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794634437,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09479e707e6dfb3360de6ef541f28029c16ec2e6de6821c492ae9461addb1e06",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794743402,
      "signal": "중립·확인 대기",
      "netScore": 1.35,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -5,
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
          "eventId": "3fe8414a94e0ab61ed96",
          "headline": "Amazon, Apple, Microsoft와 같은 최고 성장 주식에 투자하고 싶지만 Nvidia는 피하고 싶으신가요? 올해 24.8% 상승한 이 저비용 Vanguard ETF를 생각해 보십시오.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794743402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f0f2e8bf2db5dd4d82f1a1e145d5dc169d2ebfe544c1da76df578048f3228480",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "33b4f034e794cf1e8d9b",
          "headline": "AMD는 Oppenheimer의 업그레이드와 Nvidia의 혼란으로 일주일 만에 19% 급등: \"수요가 공급보다 높습니다\"",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794709894,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=81e8c65b30cb42fde67397ae4e3b215990408d18bca07b9cd77c5ae048d0955b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cabcdaf27b0a5635d577",
          "headline": "Tesla는 무인 차량 판매에 맞춰 Cybercab에 대한 주요 발표를 합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794707368,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=338e012d30a344c4ab17d41a803a29240bd9e46362df7220609bc2d202a9a259",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "048bba1084a07c6a0613",
          "headline": "ASML 대 NVIDIA: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794694442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a652f9ff4264cf0c0451a92ef62c2ddde9638eaa4effc94da3629e4648b211c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccbde4c9780214d7f326",
          "headline": "억만장자 Bill Ackman은 Amazon, Microsoft, Meta 및 Alphabet에 대한 월스트리트의 기대에 큰 단절이 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d65d8020216f5e6d7add2864d5dd9203bafa39994057094f042e2e3f025f73ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "f8bd9fd63513eb33567f",
          "headline": "변호사들은 Amazon의 3억 950만 달러 환불 합의금 중 최대 1억 달러를 챙길 수 있습니다. 청구 기한은 12월 1일입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=807a87f7586526b1da494ff45999aedcf78c4ab5b77c1a32f2c1ca5e522f47b6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "82fe986ba132ba0da4d8",
          "headline": "Nvidia의 임시 CEO는 OpenAI에 대한 \"2,500억 달러의 신용 백스톱\"을 추진했습니다. 오라클은 가장 큰 위험에 처해 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794656532,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b7710d61d7db496e8117296004420f7c7659a9c4201be7d1dcb97b3ff6d2720",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2c46e3f4b714fc0d13a7",
          "headline": "Sundar Pichai는 Gemini 앱의 월간 사용자 수가 10억 명에 달하는 동안 Alphabet의 클라우드 수익이 지난 분기에 103% 증가했다고 보고했습니다. Google Cloud가 검색보다 더 큰 성장 동력이 되고 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794653580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d07ade3dd77a1245eb8851944948953b92d2d49be389af003c925259f4d5ac1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
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
          "eventId": "168c534aab8b673f0cae",
          "headline": "Nvidia 이사회는 최고 경영진이 사임하겠다고 위협하자 Arm CEO Rene Haas에게 Jensen Huang의 뒤를 잇기 위해 접근한 것으로 알려졌으며 SpaceX Terafab에 합류했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794601983,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffce57387151605f31c31dec30ccab6b64638df5f723592232d7aaee8ff443b8",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 47,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794709894,
      "signal": "우호적 변화",
      "netScore": 7.02,
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
          "eventId": "33b4f034e794cf1e8d9b",
          "headline": "AMD는 Oppenheimer의 업그레이드와 Nvidia의 혼란으로 일주일 만에 19% 급등: \"수요가 공급보다 높습니다\"",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794709894,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=81e8c65b30cb42fde67397ae4e3b215990408d18bca07b9cd77c5ae048d0955b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccbde4c9780214d7f326",
          "headline": "억만장자 Bill Ackman은 Amazon, Microsoft, Meta 및 Alphabet에 대한 월스트리트의 기대에 큰 단절이 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d65d8020216f5e6d7add2864d5dd9203bafa39994057094f042e2e3f025f73ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f8bd9fd63513eb33567f",
          "headline": "변호사들은 Amazon의 3억 950만 달러 환불 합의금 중 최대 1억 달러를 챙길 수 있습니다. 청구 기한은 12월 1일입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=807a87f7586526b1da494ff45999aedcf78c4ab5b77c1a32f2c1ca5e522f47b6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "82fe986ba132ba0da4d8",
          "headline": "Nvidia의 임시 CEO는 OpenAI에 대한 \"2,500억 달러의 신용 백스톱\"을 추진했습니다. 오라클은 가장 큰 위험에 처해 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794656532,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b7710d61d7db496e8117296004420f7c7659a9c4201be7d1dcb97b3ff6d2720",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "2c46e3f4b714fc0d13a7",
          "headline": "Sundar Pichai는 Gemini 앱의 월간 사용자 수가 10억 명에 달하는 동안 Alphabet의 클라우드 수익이 지난 분기에 103% 증가했다고 보고했습니다. Google Cloud가 검색보다 더 큰 성장 동력이 되고 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794653580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d07ade3dd77a1245eb8851944948953b92d2d49be389af003c925259f4d5ac1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
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
          "eventId": "130b72f439bb4a393879",
          "headline": "마벨 주식은 투자자들이 인식하는 것보다 더 큰 AI 기회를 가질 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794587592,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=122231d393a43f1a9064274fb84730c7d6f6f83750c16fbf72fa3fc623da9415",
          "factorChanges": {
            "growth": 1,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 25,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794619862,
      "signal": "주의 강화",
      "netScore": -6.37,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.22,
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
          "score": -4.9,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794686042,
      "signal": "주의 강화",
      "netScore": -4.4,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.22,
          "level": "주의"
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
          "eventId": "61029359415450de3acd",
          "headline": "Astera Labs vs. Arm: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794686042,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b704d7f9e43b187031eafc6ac533b40fd9991afc03548f042e2c946f4e3f8f7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "970425ee8c73d961bcd0",
          "headline": "Arm 대 ASML: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794676921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da3e6f96f225f82e78985b8c0203ab09a89fd2ec24388158e961e649684e7e09",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794678602,
      "signal": "중립·확인 대기",
      "netScore": 0.84,
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
          "score": -2.27,
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
          "eventId": "e07a5cacc47cb36a393c",
          "headline": "Credo Technology Group vs. Marvell Technology: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794678602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=61d066ea06f00921cbaa5deab26a5c92bd3a7b28ed7d54847568143ed5a648b9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794517919,
      "signal": "우호적 변화",
      "netScore": 4.4,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.62,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794650440,
      "signal": "중립·확인 대기",
      "netScore": 0.21,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "922493a7d30cf2f6b545",
          "headline": "ASML은 칩 주식이 반등하고 Musk의 Terafab이 백만 개의 웨이퍼를 주목하면서 일주일 만에 10% 급등했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794648395,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f7309c8edd90fd4b976cb8ba6d9c28a8f511bec413c4c3d2b91b53f1ef4dc932",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794694442,
      "signal": "중립·확인 대기",
      "netScore": -1.12,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -1.4,
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
          "eventId": "048bba1084a07c6a0613",
          "headline": "ASML 대 NVIDIA: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794694442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a652f9ff4264cf0c0451a92ef62c2ddde9638eaa4effc94da3629e4648b211c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "970425ee8c73d961bcd0",
          "headline": "Arm 대 ASML: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794676921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da3e6f96f225f82e78985b8c0203ab09a89fd2ec24388158e961e649684e7e09",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "922493a7d30cf2f6b545",
          "headline": "ASML은 칩 주식이 반등하고 Musk의 Terafab이 백만 개의 웨이퍼를 주목하면서 일주일 만에 10% 급등했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794648395,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f7309c8edd90fd4b976cb8ba6d9c28a8f511bec413c4c3d2b91b53f1ef4dc932",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794648395,
      "signal": "중립·확인 대기",
      "netScore": 1.19,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.88,
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
          "eventId": "922493a7d30cf2f6b545",
          "headline": "ASML은 칩 주식이 반등하고 Musk의 Terafab이 백만 개의 웨이퍼를 주목하면서 일주일 만에 10% 급등했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794648395,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f7309c8edd90fd4b976cb8ba6d9c28a8f511bec413c4c3d2b91b53f1ef4dc932",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794511397,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794484941,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MU": {
      "ticker": "MU",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794668702,
      "signal": "우호적 변화",
      "netScore": 6.52,
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
          "eventId": "ccbde4c9780214d7f326",
          "headline": "억만장자 Bill Ackman은 Amazon, Microsoft, Meta 및 Alphabet에 대한 월스트리트의 기대에 큰 단절이 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d65d8020216f5e6d7add2864d5dd9203bafa39994057094f042e2e3f025f73ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f8bd9fd63513eb33567f",
          "headline": "변호사들은 Amazon의 3억 950만 달러 환불 합의금 중 최대 1억 달러를 챙길 수 있습니다. 청구 기한은 12월 1일입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794668400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=807a87f7586526b1da494ff45999aedcf78c4ab5b77c1a32f2c1ca5e522f47b6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "82fe986ba132ba0da4d8",
          "headline": "Nvidia의 임시 CEO는 OpenAI에 대한 \"2,500억 달러의 신용 백스톱\"을 추진했습니다. 오라클은 가장 큰 위험에 처해 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794656532,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b7710d61d7db496e8117296004420f7c7659a9c4201be7d1dcb97b3ff6d2720",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2c46e3f4b714fc0d13a7",
          "headline": "Sundar Pichai는 Gemini 앱의 월간 사용자 수가 10억 명에 달하는 동안 Alphabet의 클라우드 수익이 지난 분기에 103% 증가했다고 보고했습니다. Google Cloud가 검색보다 더 큰 성장 동력이 되고 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794653580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d07ade3dd77a1245eb8851944948953b92d2d49be389af003c925259f4d5ac1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
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
          "eventId": "2eff728c496438cebbd5",
          "headline": "CoreWeave의 \"Breakout Quarter\"로 메모리 거래가 부활하면서 Micron은 12% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794628227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0bb1294505fd4c6c254ca5f6bc9c63abdf3d51db5a7cace917950b74279cd7c7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "eventId": "130b72f439bb4a393879",
          "headline": "마벨 주식은 투자자들이 인식하는 것보다 더 큰 AI 기회를 가질 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794587592,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=122231d393a43f1a9064274fb84730c7d6f6f83750c16fbf72fa3fc623da9415",
          "factorChanges": {
            "growth": 1,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 26,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794683102,
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
          "score": -1.92,
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
          "eventId": "c4a54ee0f6625c7ef7d1",
          "headline": "Sandisk의 주식분할은 11월 19일부터 적용됩니다. 지금 구매해야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794683102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32956ad26326a160cade0982096b2994add313424f230f83d28e042bf76c2615",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794675662,
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
          "eventId": "f5c8cb3455f411f8e6f9",
          "headline": "Arista Networks vs. IBM: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794675662,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c1b78376db3ef2b47c013a76c8e42c4827049f0c525af57b31490cbd86a75bf4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794588033,
      "signal": "중립·확인 대기",
      "netScore": 1.96,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.57,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794560760,
      "signal": "주의 강화",
      "netScore": -5.51,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.22,
          "level": "주의"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1794749846.9257624,
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794515726,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1794749846.9257624,
      "dataAsOf": 1794603725,
      "signal": "중립·확인 대기",
      "netScore": -1.12,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -1.4,
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
          "eventId": "c57656216d76fa2ed4c4",
          "headline": "삼성, 데이터센터 공급업체 Modine 인수 거래 검토 중 주가 35% 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794603725,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=618cca6a3f62f200e123684bc37f58c2ba49436aa1fddb115486dc3e58cf160f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "STX": {
      "ticker": "STX",
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
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
      "updatedAt": 1794749846.9257624,
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
