// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1790204938.4644272,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790186458,
      "signal": "중립·확인 대기",
      "netScore": -1.12,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -2.8,
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
          "eventId": "fca0d71d79a54e238887",
          "headline": "마이크로소프트, 2030년까지 걸프 클라우드 및 AI 투자에 100억 달러 약속",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790186458,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9aa9da652349079c3e3499ef78679b00378d767ea9ca11dd472e05af41ea188",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6422b289477ae8813491",
          "headline": "Microsoft는 AI 피싱 공급망을 차단한 후에도 정체 상태를 유지합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790183904,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d513bec85b8c253e11d7f4af724da5ba5b3b06f664930a64000d5845074e4ff",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "55da48d763726746dba2",
          "headline": "나스닥은 칩 제조업체가 오르고 유가가 냉각되면서 기록적인 마감을 기록했습니다 — AAPL, META, SPCX, MSFT, VKTX 집중",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790112369,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf6b359eed1be11cee0cd30e23e7dfbb5807a0232a285f9348f5ea355e5d4742",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2c0a3f11bfb7a1f17e26",
          "headline": "MSFT 해고: Microsoft는 게임 재설정이 심화됨에 따라 Xbox 직원 268명을 해고합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790094089,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=837a0dfc40ca9b09a583ca59eeedce691e3afefb3ce0fed4459c19f1fa188153",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "226ef56afe7139aebc53",
          "headline": "Everforth의 강화된 Microsoft 파트너십으로 AI 야망 실현",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790082000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9e3738dab6525aeee1e2fa18c33571b164a5bdfc1a9960640afd7cdeddfbcac6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "4fedbce9d9afd4b3d97e",
          "headline": "상황별 게임 내 광고에 대한 Microsoft 특허 힌트",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790024496,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=69e7b584c4d4038b17ec64b5b0c6656e81ed4e8576b9ce77fd8133c4c8ba1040",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f1815bbff453990d0249",
          "headline": "Microsoft와 Anthropic이 Nscale의 1,030억 달러 IPO 계약 잔고를 장악",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790012096,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=93830b1198f245dd09385ec0aee5dad20a1fa6629ff2973598ca4cb9d21f5eb8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "25b400100c2ab09e8782",
          "headline": "포옹하는 얼굴이 걱정되나요? Microsoft와 Amazon은 하이퍼스케일러 중 가장 많이 노출되었습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789992742,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=69a3a9e1cda05ed883b6723f717510193b122d30dc89f37a359877dbf687d9ee",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0d923fbe7d8e59fe30ef",
          "headline": "시장 잡담: Microsoft가 지원하는 OpenAI는 2,780억 달러의 현금 소진 예상에도 불구하고 1조 2천억 달러 이상의 가치 평가를 추구합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789981380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=731e93ffb15b277d29efc9ef90dc3cd0c12b48c41476f1200e208816f4198cd9",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790185250,
      "signal": "주의 강화",
      "netScore": -3.09,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.92,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.88,
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
          "score": -5,
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
          "eventId": "9f51be02f92ac7c8beb0",
          "headline": "Microsoft는 2030년까지 중동에 100억 달러 이상을 투자합니다 – 투자자가 알아야 할 사항",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790185250,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56a109a4fa938430b4f0ab5dc51c12b8a115fe437c86ad560f1490e4b0b7f66e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7d9d382560c59619c70f",
          "headline": "IONQ 주식은 Nvidia Superion 256 배포, 양자 오류 디코더 혁신으로 1개월 최고치를 기록할 예정입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790169724,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da0eefdeacd52b1aeb250ced0c8b29b524d6aaec29729b8ae928e1c576397957",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1640ae07ba2c9daa4d03",
          "headline": "비켜라, 알파벳! 워렌 버핏의 후계자인 그렉 아벨(Greg Abel)은 이 최고의 투자 아이디어에 거의 470억 달러를 투자했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790155561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=319faa0a1ea123fde4e330a83d83aea2d09ec8917d8a32fa65e7636e27640c15",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f29667a4e93112d4323c",
          "headline": "Google, 조지아에서 전력 업그레이드 계약으로 원자력 발전",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790120101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=075bf0ef30d49aa73aedd831b4f10451e69a80c23ba0f43369fb0999b1bc0bde",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "08454abd866566194ef4",
          "headline": "Amazon, Alphabet, Microsoft: 9월에 구매할 클라우드 거대 기업 2개와 피하고 있는 기업 1개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790074200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7e58167faf64c47a2e8e9eb0bcbe943735b015fc8627e2738179b6a2ae9ef79",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9716f6edd2f00dc4b9ea",
          "headline": "마이크론이 아닙니다. 알파벳이 아닙니다. 다음은 향후 3년간 나의 최고 인공지능(AI) 주식입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790059800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3df408093d046894dbd6c6df702a0494d7608d568a42261f25db680ddc5c2ea",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "22caef48cafabc83a799",
          "headline": "AI 수요 급증으로 AMD, 1조 달러 규모의 칩 제조사 클럽에 합류",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790053248,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=deec3e8265e020ac397b315e60894f76863921742558db862dd60119604f4ae2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3988483eb4b9a4dd4220",
          "headline": "오늘 초점을 맞춘 QCOM 주식: 투자자가 GOOGL 파트너십에 대해 알아야 할 사항",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790051732,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a1cbe6a0e7911029ffe78ed94a5874d14e827bd515e9218535530634c6767913",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "392adc1f4c253bb3395e",
          "headline": "Google은 위치 데이터에 대해 아일랜드 개인 정보 보호 규제 기관으로부터 벌금을 부과 받았습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790036807,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c344c5d596a41c7a2e975c666f6d1c421f2734fde0a3db057c66b24df8b3e8e9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f5c69b999f965e86b9c0",
          "headline": "Google, Georgia Power, 원자력 발전소 업그레이드 지원 계약 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790034584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=028883a96ce75c736bf18fef086a0d9efc9476d93637d269e35b57edaa0e4f17",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a39b45b2c5399d4afb82",
          "headline": "Google은 EU에 대해 4억 6,300만 달러의 벌금을 부과했습니다. 위치 데이터 위반",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790011144,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05b2735fbdc363b808e8509a12c69948915f61ca9363442fc1f4291448ff8447",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fe2b5d3d40f35665ab07",
          "headline": "기술 매도는 알파벳에 대한 나의 믿음을 강화할 뿐입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789989479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6222db2e5e7db2760c706194e0753a2e4e935ae331fbe72b3733331913c1c02",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790188387,
      "signal": "우호적 변화",
      "netScore": 4.55,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
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
          "score": -3.32,
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
          "eventId": "92d41c324ca48ba375d0",
          "headline": "AI 부채가 37베이시스 포인트 프리미엄을 가지면서 Oracle 하락",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790188387,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dace2efd2ad7c41ada08a08bc1bf55839e1545dfb0a1720e8f305d075796b58",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "8f3695edea55f35d3a63",
          "headline": "Generac은 Amazon과의 강력한 거래를 위해 집회를 가졌습니다. 지금 GNRC 주식을 플레이하는 방법.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790109330,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2da96848313d1a6168cd62848a92a309682b4c8d701e12164fa872f918d7e02c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "08454abd866566194ef4",
          "headline": "Amazon, Alphabet, Microsoft: 9월에 구매할 클라우드 거대 기업 2개와 피하고 있는 기업 1개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790074200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7e58167faf64c47a2e8e9eb0bcbe943735b015fc8627e2738179b6a2ae9ef79",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e84da62f980ffb53e816",
          "headline": "Generac Holdings Inc.(GNRC) 주식은 24억 달러 규모의 Amazon 거래 이후 최고의 AI 인프라 플레이입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790059555,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5cfb465358825d728987177d43144c4ab1e5f5c0796032792988ff2cd274ea1e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a3ddac4656027a873827",
          "headline": "나스닥은 AI 주식이 터지면서 거의 3% 더 높게 마감하고 AMD는 1조 달러 클럽에 진입합니다 — AMD, ARM, META, AMZN, PSKY 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790028294,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f590f157a45e9ede0b45e363e2fe2fa232850b082542c852b4d171af05ca41ea",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f0d2f5e71a7fa1bc5c60",
          "headline": "Amazon, 배송 안전, AI 및 운전자 경험에 중점을 두어 19억 달러의 새로운 투자 유치",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790009063,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=361f27adb2aec6c69498fea4a74b5114470b51ff3ac33ed4568e6985193b53c0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0ba9a6f2717c1107b050",
          "headline": "우리는 월스트리트보다 아마존에 대해 더 낙관적입니다. 여기 수학이 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789995633,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0231cb4108b939f8e3ca39036f5e1a3ca16e115f5232b15cee8b2b5b0e726e5f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "25b400100c2ab09e8782",
          "headline": "포옹하는 얼굴이 걱정되나요? Microsoft와 Amazon은 하이퍼스케일러 중 가장 많이 노출되었습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789992742,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=69a3a9e1cda05ed883b6723f717510193b122d30dc89f37a359877dbf687d9ee",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c991b6ba5aa614c33162",
          "headline": "Amazon.com과 Uber Technologies: 두 소비자 기업 간의 최근 분기별 수익 추세 분석",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789969158,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7493e8516572bd2f3948a0f8684f2a9b8dec52535f84aeafb4630348b7583f7e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b07a0f75f11bf6e929b5",
          "headline": "Amazon(AMZN), AI 구축 자금 지원을 위해 처음으로 영국 채권 시장에 진출",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789939631,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28a41481c75499589658b6f742f2f78b120e7e352845cc895886c76a9ac2169d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8796422a5ee85921a950",
          "headline": "아마존(AMZN)이 이번에는 임신한 창고 근로자를 대우하는 방식에 대해 다시 소송을 제기했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789939453,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7daba8694b21986bc274937c2a502b8b614ed1292728329a35cf100758cece36",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7b7171c8b3b0717d2ea8",
          "headline": "예측: 2036년까지 아마존(AMZN) 주식에 대한 5,000달러 투자의 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789901520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fde59d748acdf610e04fb347056f4d07c78e236dcae741c375650463629793c",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790168640,
      "signal": "주의 강화",
      "netScore": -2.02,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.28,
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
          "score": -4.02,
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
          "eventId": "3f70c72636cfef48d52e",
          "headline": "Meta Platforms의 전국 TV 광고는 비즈니스 모델의 주요 변화를 보여줍니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790168640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=781ab304f6790b8083e94fa5c6e5569ef7f845aa45231dacf24373143cd20c6a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6292f96c0baafde00434",
          "headline": "Muse AI는 Meta Connect를 투자자가 꼭 봐야 할 제품으로 만듭니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790147700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4e3b30fd0f29f2bb1fa68439ac313320f26d82ad3b219dd85debffe7c43f21f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e486d66d6ae23a6d6ab7",
          "headline": "Meta Muse 거래로 Shopify 주가 상승: 구매할 시간인가요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790119620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8dea7d1a241656d7ff32114715b4db18848cc7047aefdd33cfa50249da366dc6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "55da48d763726746dba2",
          "headline": "나스닥은 칩 제조업체가 오르고 유가가 냉각되면서 기록적인 마감을 기록했습니다 — AAPL, META, SPCX, MSFT, VKTX 집중",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790112369,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf6b359eed1be11cee0cd30e23e7dfbb5807a0232a285f9348f5ea355e5d4742",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2c672afed39fe435e3af",
          "headline": "Dan Ives는 Meta Muse를 '게임 체인저'라고 부르며 Apple을 AI 군비 경쟁에서 AI '요금 징수원'으로 봅니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790098828,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fecb4fbbbcc8a0a93c5e5e15de42c5c59d8a35fb4769ed0cd5cc0c16eba4e0ad",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "91f0eedf28288ef58d44",
          "headline": "메타 거래는 플라스틱 재활용 스타트업 MacroCycle이 첫 번째 공장을 건설하는 데 도움이 될 것입니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790074800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e22045835555b3eee9e6d66a8fe33baed03779e2c9354ec23d146665f7d3d730",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "22caef48cafabc83a799",
          "headline": "AI 수요 급증으로 AMD, 1조 달러 규모의 칩 제조사 클럽에 합류",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790053248,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=deec3e8265e020ac397b315e60894f76863921742558db862dd60119604f4ae2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6405cabcb9cf519e880c",
          "headline": "Muse가 빛을 발하고 투자자들이 AI 발전에 대한 열망을 보임에 따라 메타가 11% 점프",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790051400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c30278051488c56fcc9c5d41f71c7f6865ca6553b3fbe4b183d0f0f0cc89b8a3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ed1e6204d9bf4644d24e",
          "headline": "오늘 AMD, WBD, MRNA 주식이 52주 최고가로 급등한 이유는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790048364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=629bdb7ab332b83d548b5ef085dc2f39182ec2ef115002a4fa53452d0abafd02",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b09cd36c20c6f95e9fd1",
          "headline": "Meta의 Muse AI가 새로운 칩 수요 예측을 촉진함에 따라 ARM, Intel, AMD 급증: 소매업이 매우 강세로 전환",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790041851,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d0eb2b00556f5ff54107e4cb4129531ff940c8b13d21e046be3f77e5fbe685d8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "db0d22d37d8a2aa35474",
          "headline": "오늘 Intel, Arm 및 기타 AI 칩 주식이 급등한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790038998,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0e81c35f9dfab690733bf2e90c84e610216e4850d5c4e0f2f403dc7264ef223",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a3ddac4656027a873827",
          "headline": "나스닥은 AI 주식이 터지면서 거의 3% 더 높게 마감하고 AMD는 1조 달러 클럽에 진입합니다 — AMD, ARM, META, AMZN, PSKY 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790028294,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f590f157a45e9ede0b45e363e2fe2fa232850b082542c852b4d171af05ca41ea",
          "factorChanges": {
            "businessRisk": -2,
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790164503,
      "signal": "주의 강화",
      "netScore": -6.52,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.17,
          "level": "중립"
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
          "eventId": "d3c77d043644fab8b571",
          "headline": "Apple의 iPhone 18 수요는 마진에서 개선되고 중국은 여전히 ​​약세를 유지하고 있다고 UBS가 밝혔습니다 — 최신 목표는 13%의 하락 가능성을 암시합니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790164503,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96dccb1e728291139b70d5ebed2df3679be255e7c762cb2d6d0ce79fa29f2226",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "c7c02cd46a76f74707b7",
          "headline": "오늘 AAPL, OKTA, AMD 주식이 52주 최고가로 뛰어올랐던 이유는 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790132737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de890e77e1c862a1d3fffaa4584accf286cc2c2d84ad200122b315ef8458ff13",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "55da48d763726746dba2",
          "headline": "나스닥은 칩 제조업체가 오르고 유가가 냉각되면서 기록적인 마감을 기록했습니다 — AAPL, META, SPCX, MSFT, VKTX 집중",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790112369,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf6b359eed1be11cee0cd30e23e7dfbb5807a0232a285f9348f5ea355e5d4742",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d6a77edb83c1c452234b",
          "headline": "애플의 새 CEO는 이미 팀 쿡이 유지하기 위해 싸웠던 중국 칩 거래를 중단하라는 압력을 받고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790102929,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bf1a18ea6dcab46d1e9c1c3f888e64bef5e7c4199dd2146e2be063091114492f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "2c672afed39fe435e3af",
          "headline": "Dan Ives는 Meta Muse를 '게임 체인저'라고 부르며 Apple을 AI 군비 경쟁에서 AI '요금 징수원'으로 봅니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790098828,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fecb4fbbbcc8a0a93c5e5e15de42c5c59d8a35fb4769ed0cd5cc0c16eba4e0ad",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "db0d22d37d8a2aa35474",
          "headline": "오늘 Intel, Arm 및 기타 AI 칩 주식이 급등한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790038998,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0e81c35f9dfab690733bf2e90c84e610216e4850d5c4e0f2f403dc7264ef223",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a5edb9145e4953fd6530",
          "headline": "Apple 및 Google 지갑에 대한 Walmart의 변화에서 은행을 위한 시사점",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790008300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3619f50a994f97ec4e70bbc29f66e34cf82916c4f714ffafcb1cd987ed4481c1",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7ffbba16fdad050a29d7",
          "headline": "JPMorgan은 Apple iPhone 18 Pro 배송 시간이 두 번째 주에 길어진다고 밝혔습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789986054,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c68828a0646a1496ac52fab05bfacb5e2224c5015fb277c7e5bcd51acb7f304a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "ee666a90b969535eac3d",
          "headline": "예측: 1,999달러의 가격표에도 불구하고 Apple의 폴더블 iPhone Duo는 히트할 것이며 Apple은 5조 달러 클럽에 Nvidia에 합류할 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789922220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56b8f415a8fa4d781953626933ec079e2c0bfd4ebe4e28518d9e9138f389c0b3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790191500,
      "signal": "우호적 변화",
      "netScore": 8.56,
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
          "score": 2.27,
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
          "eventId": "640ae9ca0057ebb06ccf",
          "headline": "Tesla를 구매하기 전에 알아야 할 3가지 사항",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790191500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7389fae5cd74707c3b8f55ad6a5793e8b9f39f8a0805768e32361e8f5024336f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "470d7fdf6f1c5978d01f",
          "headline": "Tesla가 트럭을 공급하고 있습니다. Nvidia가 컴퓨팅을 공급하고 있습니다. 이 4달러 주식은 중간에 위치",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790187565,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=80f72cc29cbaf608ea68e9a4cf5bfef8c47ac5bb7224b406f17152386e425af1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "28c62959283dc83cb834",
          "headline": "Elon Musk는 AI 개발 속도 저하에 대해 \"Dario가 옳다\"고 말했습니다. Tesla와 xAI의 AI 로드맵에 대한 승인이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790170380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d6d6bcf67eae57869f3e82fb20563a47cbe18118bce788b8fc29d4e9be28936",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "24314f84c01ccb362b5b",
          "headline": "BBB 등급이 250억 달러 규모의 AI 법안을 충족하면서 Tesla가 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790116027,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b5f35305f16db82bf055fb602d6b79ab4ab6152e8f41f1cbe19d4a8d59a75cc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8148457c92c995d61adc",
          "headline": "Tesla(TSLA), 기록적인 580메가와트 배터리 공급 후 민권 재판에 회부",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790097189,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c070f090aefee892da696b8badb2bd0a4e4aff5114fd6b55b6e8b1d1f8fdd07",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "550daacb077303020d97",
          "headline": "TSLA 주가가 거의 3주 최고치를 기록했습니다: Nvidia 승리로 Optimus 지연에도 불구하고 '물리적 AI' 피벗에 힘 추가",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790039544,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bf07f205b00177c7b3d7628283de144060d1accdd7f867136ebcd757411d8908",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b4ec2de2ad123469acd7",
          "headline": "Tesla는 Elon Musk의 Optimus 로봇이 대량 생산에 가까워짐에 따라 중국 공급업체를 감사합니다: 보고서",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790026214,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a009e7ca578324cb8db198e86e9283081d8054c3fcf36c6dfc6acb77a373152",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "04630249cb9244f3f35e",
          "headline": "Tesla, 고위험 캘리포니아 법원 싸움에 돌입",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790015235,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d501a8bebbf648afc307e70f5f607cdff88b22858e477448e2e2dc63a52c6a3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1685254d7c54832bf2e2",
          "headline": "Sunrun과 Tesla는 폭염 기간 동안 캘리포니아 전력망에 580메가와트를 공급하여 역사상 최대 규모의 주거용 분산 발전소 이벤트를 기록했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789992000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=844b7fe6b71dcbdad0ba29b93de22696f4a5db9c3ec957f72ea27073a1e7885b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e48e5c5f9f59b2ce5ed3",
          "headline": "Morgan Stanley, SpaceX와 Tesla 간의 AI 협력 확대 강조",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789986363,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea2233ae92e4adf726bfd77b5ae5d2862bd8150672ee29fd1b1a61ad5b67a868",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790188387,
      "signal": "우호적 변화",
      "netScore": 5.6,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
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
          "eventId": "92d41c324ca48ba375d0",
          "headline": "AI 부채가 37베이시스 포인트 프리미엄을 가지면서 Oracle 하락",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790188387,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dace2efd2ad7c41ada08a08bc1bf55839e1545dfb0a1720e8f305d075796b58",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "1640ae07ba2c9daa4d03",
          "headline": "비켜라, 알파벳! 워렌 버핏의 후계자인 그렉 아벨(Greg Abel)은 이 최고의 투자 아이디어에 거의 470억 달러를 투자했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790155561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=319faa0a1ea123fde4e330a83d83aea2d09ec8917d8a32fa65e7636e27640c15",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32e399693c8fa41d0c31",
          "headline": "오라클, Wipro와 협력하여 엔드투엔드 약물 감시 서비스 강화",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790078400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7d2638922f799e34a00d97e98c5875b8632bdab0d839df22d154ef72d4c9625",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790163906,
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
          "eventId": "3f460c928bf8050773b3",
          "headline": "Salesforce: AWU 경제 상황이 그 어느 때보다 빠르게 악화되고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790163906,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7655253c136d23f4f1f95f4abbf37782d556f9721c2c8d4607f847ad8b3f89ed",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c0b35d1e9cbad00142ee",
          "headline": "Salesforce 대 ServiceNow: 2026년에는 어떤 기술 주식이 더 나은 구매입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790100814,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=68d58b8e2929f6963c7b5e44a5008a7d2250624581dd63338158e4dddf0fbb0a",
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
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790169724,
      "signal": "중립·확인 대기",
      "netScore": -0.98,
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
          "score": -1.75,
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
          "eventId": "7d9d382560c59619c70f",
          "headline": "IONQ 주식은 Nvidia Superion 256 배포, 양자 오류 디코더 혁신으로 1개월 최고치를 기록할 예정입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790169724,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da0eefdeacd52b1aeb250ced0c8b29b524d6aaec29729b8ae928e1c576397957",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7dbd2ef0f7939f2634ca",
          "headline": "Palantir는 백만장자 주식인가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790097900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=88adc747111ed75a36415c8aa5086c98d7a0ad0506d6c315eb8d963838a203b1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7d02c8d9aba8fc294a26",
          "headline": "Michael Burry, Acer의 메모리 공급 증가로 Micron, Nebius, Palantir Shorts 추가",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790096080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c8a2439af7138dcbfe668a020b3b528a07d635c165cdb3ee4d94db08bdc87f25",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f84ae5b0c39e31f136b9",
          "headline": "Palantir Technologies(PLTR), AI 공급망 및 사이버 방어 전반에 걸친 동맹 추진 공개",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789953120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c316f6f63914c00057ad30eb5475d546f6e2e560369ce7aeccda4d6a743d4c5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "627d5aed151a1af3fefd",
          "headline": "Palantir를 피하고 대신 이 2가지 방산 주식을 구매해야 하는 이유",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789908120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f9316959e49175d5a269885a5c8e8dfc7c7e5b76e4814c9aa943db72fdac021",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790189853,
      "signal": "우호적 변화",
      "netScore": 6.56,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.8,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
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
          "eventId": "42a5512169d1a81cb852",
          "headline": "Nvidia는 이 AI IPO 후보를 지지합니다. 불과 6개월 만에 10억 달러 손실",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790189853,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c035b24406ae5bac4a8b8c9763c64a9421d0d84831dba850312b70460fdb74b9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "431410ffb566475f9ad3",
          "headline": "SoftBank는 OpenAI를 위해 110억 달러를 조달하고 있습니다. Arm 지분은 250억 달러 규모의 대출 시설을 뒷받침합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790189559,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fec2d7296db6de14c116510aac29b2161c2a5b74baf451b7b01dd805a13c802b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "92d41c324ca48ba375d0",
          "headline": "AI 부채가 37베이시스 포인트 프리미엄을 가지면서 Oracle 하락",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790188387,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dace2efd2ad7c41ada08a08bc1bf55839e1545dfb0a1720e8f305d075796b58",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "데이터센터 투자 지속 시 AI 컴퓨팅 수요 유지 가능성"
        },
        {
          "eventId": "470d7fdf6f1c5978d01f",
          "headline": "Tesla가 트럭을 공급하고 있습니다. Nvidia가 컴퓨팅을 공급하고 있습니다. 이 4달러 주식은 중간에 위치",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790187565,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=80f72cc29cbaf608ea68e9a4cf5bfef8c47ac5bb7224b406f17152386e425af1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fca0d71d79a54e238887",
          "headline": "마이크로소프트, 2030년까지 걸프 클라우드 및 AI 투자에 100억 달러 약속",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790186458,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9aa9da652349079c3e3499ef78679b00378d767ea9ca11dd472e05af41ea188",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "f549ccba050d4d969cc9",
          "headline": "Madison Mid Cap Fund: 고속 스위치 리더인 Arista Networks(ANET)에서 이익 실현",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790167334,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2b40d4829f1a99bfdd1939521b1a0ea1955e42fb13ce63519e6b73044613358",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "bcc455e0b91ddf978cc9",
          "headline": "이 AI 메모리 주식은 2026년에 650% 이상 상승합니다. Micron 투자자는 주목해야 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790161410,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90b9486528f134316b1aad93390dcfd1bbb740a3ffff7799342a87fbcaadc3ee",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "6292f96c0baafde00434",
          "headline": "Muse AI는 Meta Connect를 투자자가 꼭 봐야 할 제품으로 만듭니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790147700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4e3b30fd0f29f2bb1fa68439ac313320f26d82ad3b219dd85debffe7c43f21f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "51238c1373e78bbd4a8b",
          "headline": "Elon Musk는 Nvidia에 올인하고 있지만 이 두 칩 주식을 사는 것이 더 나은가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790140800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce3227f4430724f3f6167df2109e850513ce621ba8d0f15f3fca3952c91f3ec7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "38b2a1c0e4941f5dddf1",
          "headline": "Marc Benioff는 Microsoft가 OpenAI에서 Salesforce를 종료했다고 말합니다. 그래서 그는 대신 Anthropic에 베팅했으며 '수십억'의 비용을 지불할 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790129351,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd8f095417e78cd53641b569982fdef6e7aa14924e169f61b8be59e1f374daa7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "24314f84c01ccb362b5b",
          "headline": "BBB 등급이 250억 달러 규모의 AI 법안을 충족하면서 Tesla가 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790116027,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b5f35305f16db82bf055fb602d6b79ab4ab6152e8f41f1cbe19d4a8d59a75cc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "4b19b2fcbd22d17cfc6c",
          "headline": "AMD 주식은 올해 Nvidia를 제치고 상승했습니다. 여전히 구매하는 것이 더 나은가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790108401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5aad699f45e8041b8eff7ec629b21aa21274b5e4adcf4f31b1c78733bd973371",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 37,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790189853,
      "signal": "우호적 변화",
      "netScore": 2.97,
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
          "score": -4.9,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 3.15,
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
          "eventId": "42a5512169d1a81cb852",
          "headline": "Nvidia는 이 AI IPO 후보를 지지합니다. 불과 6개월 만에 10억 달러 손실",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790189853,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c035b24406ae5bac4a8b8c9763c64a9421d0d84831dba850312b70460fdb74b9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "431410ffb566475f9ad3",
          "headline": "SoftBank는 OpenAI를 위해 110억 달러를 조달하고 있습니다. Arm 지분은 250억 달러 규모의 대출 시설을 뒷받침합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790189559,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fec2d7296db6de14c116510aac29b2161c2a5b74baf451b7b01dd805a13c802b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "fca0d71d79a54e238887",
          "headline": "마이크로소프트, 2030년까지 걸프 클라우드 및 AI 투자에 100억 달러 약속",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790186458,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9aa9da652349079c3e3499ef78679b00378d767ea9ca11dd472e05af41ea188",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f549ccba050d4d969cc9",
          "headline": "Madison Mid Cap Fund: 고속 스위치 리더인 Arista Networks(ANET)에서 이익 실현",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790167334,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2b40d4829f1a99bfdd1939521b1a0ea1955e42fb13ce63519e6b73044613358",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "bcc455e0b91ddf978cc9",
          "headline": "이 AI 메모리 주식은 2026년에 650% 이상 상승합니다. Micron 투자자는 주목해야 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790161410,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90b9486528f134316b1aad93390dcfd1bbb740a3ffff7799342a87fbcaadc3ee",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "6292f96c0baafde00434",
          "headline": "Muse AI는 Meta Connect를 투자자가 꼭 봐야 할 제품으로 만듭니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790147700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4e3b30fd0f29f2bb1fa68439ac313320f26d82ad3b219dd85debffe7c43f21f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c7c02cd46a76f74707b7",
          "headline": "오늘 AAPL, OKTA, AMD 주식이 52주 최고가로 뛰어올랐던 이유는 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790132737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de890e77e1c862a1d3fffaa4584accf286cc2c2d84ad200122b315ef8458ff13",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "38b2a1c0e4941f5dddf1",
          "headline": "Marc Benioff는 Microsoft가 OpenAI에서 Salesforce를 종료했다고 말합니다. 그래서 그는 대신 Anthropic에 베팅했으며 '수십억'의 비용을 지불할 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790129351,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd8f095417e78cd53641b569982fdef6e7aa14924e169f61b8be59e1f374daa7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "24314f84c01ccb362b5b",
          "headline": "BBB 등급이 250억 달러 규모의 AI 법안을 충족하면서 Tesla가 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790116027,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b5f35305f16db82bf055fb602d6b79ab4ab6152e8f41f1cbe19d4a8d59a75cc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "4b19b2fcbd22d17cfc6c",
          "headline": "AMD 주식은 올해 Nvidia를 제치고 상승했습니다. 여전히 구매하는 것이 더 나은가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790108401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5aad699f45e8041b8eff7ec629b21aa21274b5e4adcf4f31b1c78733bd973371",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7508811d4b3549c347f2",
          "headline": "가격 예측: Marvell, AMD 및 Broadcom - 2027년의 대담한 가격 예측",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790092809,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8fa27144427a71dcee3f5d423079abba35fbbcf5d4381cd4bf5f4c6ab4a6467a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1d88d86181f74155fbff",
          "headline": "AMD가 1조 달러 클럽에 합류했습니다. 투자자들이 칩 제조업체에 큰 투자를 하는 이유는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790076301,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe1f6c96dc5e8852556454d2e7c80958f074f2508911e323f79e0c9590fda0e1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790143118,
      "signal": "주의 강화",
      "netScore": -3.08,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
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
          "eventId": "35f05c7dd3699dcf5af1",
          "headline": "시장 분석: Broadcom과 반도체 및 반도체 장비 산업의 경쟁사",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1790143118,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a255213af98446d5d21f4d0e32a2396b696c2cab36f951c070749b5f89dd74a",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dc74f7a5db65afe071dd",
          "headline": "Broadcom(AVGO)은 대규모 자사주 매입과 하이퍼스케일러와의 AI 칩 거래 이후 7.4% 상승했습니다. 상승 추세가 바뀌었나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790129623,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=21cf86d3b4c676d8bc67a33fb58a45d76475d07acdb8d178f7584826dfb6d592",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7508811d4b3549c347f2",
          "headline": "가격 예측: Marvell, AMD 및 Broadcom - 2027년의 대담한 가격 예측",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790092809,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8fa27144427a71dcee3f5d423079abba35fbbcf5d4381cd4bf5f4c6ab4a6467a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e7cd2e80fc5062ea1eff",
          "headline": "AI 칩이 217억 달러 목표를 달성함에 따라 Broadcom의 우위가 더욱 높아졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790016492,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1b19bc3cb398fcade0fd2c0c62a6b392213b93a2957608f25d031e2777ca182",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a053dcedeff947f542b2",
          "headline": "AMD 주식이 처음으로 시가총액 1조 달러를 넘었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790010081,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45c9a2e9bd5dc9a4e747f8335b60db1a900dbf998a2b49ff12ced80cae7af9d1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89af57c18dac45fbc10d",
          "headline": "Broadcom의 AI 기회는 주가가 제시하는 것보다 더 큽니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790004616,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76ea112b0d419b8d6d2a967ffa78a4d37102101479f968d10b093072057f9353",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790164503,
      "signal": "주의 강화",
      "netScore": -8.55,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "eventId": "d3c77d043644fab8b571",
          "headline": "Apple의 iPhone 18 수요는 마진에서 개선되고 중국은 여전히 ​​약세를 유지하고 있다고 UBS가 밝혔습니다 — 최신 목표는 13%의 하락 가능성을 암시합니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790164503,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96dccb1e728291139b70d5ebed2df3679be255e7c762cb2d6d0ce79fa29f2226",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "c7c02cd46a76f74707b7",
          "headline": "오늘 AAPL, OKTA, AMD 주식이 52주 최고가로 뛰어올랐던 이유는 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790132737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de890e77e1c862a1d3fffaa4584accf286cc2c2d84ad200122b315ef8458ff13",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "17f8f42e389e466ecd32",
          "headline": "Qualcomm: AI 이야기는 황소들이 믿고 싶어하는 것보다 훨씬 더 제한적입니다 - 강력한 매도",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790076542,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cacf95487c9d3b136674348e280af54c74366778e6992dcf4d75581b39dc334e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3988483eb4b9a4dd4220",
          "headline": "오늘 초점을 맞춘 QCOM 주식: 투자자가 GOOGL 파트너십에 대해 알아야 할 사항",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790051732,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a1cbe6a0e7911029ffe78ed94a5874d14e827bd515e9218535530634c6767913",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "faf946c175049826d0cb",
          "headline": "Qualcomm은 AI Interconnect 데모 포인트를 과거 핸드셋보다 7% 높였습니다. Skyworks와 Qorvo가 집회에 참가합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790009594,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d463077303b59dfd65dec32708ebbed10d48218ff0a4135e458d54ba7db26b6f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7ffbba16fdad050a29d7",
          "headline": "JPMorgan은 Apple iPhone 18 Pro 배송 시간이 두 번째 주에 길어진다고 밝혔습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789986054,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c68828a0646a1496ac52fab05bfacb5e2224c5015fb277c7e5bcd51acb7f304a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "8e07079c6b8dbca0ba0b",
          "headline": "Astera Labs vs. Qualcomm: 2026년에는 어느 반도체 주식이 더 나은 매수인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789930619,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bb252cce86b60708e3c8f54e552b7430e7ceabf8b308a96fe94807ba19dc72a7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ee666a90b969535eac3d",
          "headline": "예측: 1,999달러의 가격표에도 불구하고 Apple의 폴더블 iPhone Duo는 히트할 것이며 Apple은 5조 달러 클럽에 Nvidia에 합류할 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789922220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56b8f415a8fa4d781953626933ec079e2c0bfd4ebe4e28518d9e9138f389c0b3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790189559,
      "signal": "주의 강화",
      "netScore": -8.2,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "eventId": "431410ffb566475f9ad3",
          "headline": "SoftBank는 OpenAI를 위해 110억 달러를 조달하고 있습니다. Arm 지분은 250억 달러 규모의 대출 시설을 뒷받침합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790189559,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fec2d7296db6de14c116510aac29b2161c2a5b74baf451b7b01dd805a13c802b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e6820aeb9fc51e93c14a",
          "headline": "Arm Holdings: AI 기반 용해가 과도하게 수행됨 - 성장 전망이 대부분 가격에 반영됨",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790156695,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0e926d852a52cb81f9387e890ed06f89cee040a4f387a768f37b7910610850c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bbc430e06d6ae5f51408",
          "headline": "Arm Holdings 랠리, 하지만 과대광고에 속지 마세요",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790068952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=47c14786bce64fab7a2460e42e955e6072bc845197bca17e5c07014b866ff7cd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b09cd36c20c6f95e9fd1",
          "headline": "Meta의 Muse AI가 새로운 칩 수요 예측을 촉진함에 따라 ARM, Intel, AMD 급증: 소매업이 매우 강세로 전환",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790041851,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d0eb2b00556f5ff54107e4cb4129531ff940c8b13d21e046be3f77e5fbe685d8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a3ddac4656027a873827",
          "headline": "나스닥은 AI 주식이 터지면서 거의 3% 더 높게 마감하고 AMD는 1조 달러 클럽에 진입합니다 — AMD, ARM, META, AMZN, PSKY 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790028294,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f590f157a45e9ede0b45e363e2fe2fa232850b082542c852b4d171af05ca41ea",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0f50bfd93824af065920",
          "headline": "Meta의 Muse가 CPU 랠리를 촉진하는 것으로 알려지면서 Arm 재고가 급등합니다. Meta는 AGI CPU의 리드 파트너입니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1790011556,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c14038e2992f93c8ff32501d7e105e0f35a0192e48090da37d21fe7d650212b6",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fa99fcaac7ce7ed36ee1",
          "headline": "더 나은 인공 지능 주식: Arm Holdings vs. NVIDIA",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790009587,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3c8de12abf44f503ac58c43e84a4e0014092070b3bd53504761f3b65268ba1c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f064b85100918e010d80",
          "headline": "더 나은 인공 지능 주식: Arm Holdings 대 ASML",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789955539,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8376df9a3b0b152ee22d7601cf7aa782560a413730d668435d74be2e8ab8e72",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790092809,
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
          "eventId": "7508811d4b3549c347f2",
          "headline": "가격 예측: Marvell, AMD 및 Broadcom - 2027년의 대담한 가격 예측",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790092809,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8fa27144427a71dcee3f5d423079abba35fbbcf5d4381cd4bf5f4c6ab4a6467a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4bf3f4d701e38e7c51db",
          "headline": "Marvell 기술은 3개월에 걸쳐 크게 하락했습니다. 추진력이 있고 78%의 이익이 올 것이라는 월스트리트 전문가의 확신이 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789995228,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03c831d8847e72f4bc25a81e16d19145739e22f2c739a0cfd316272f1387dec1",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790103933,
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
          "score": -1.22,
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
          "eventId": "01aefc240304509f2417",
          "headline": "인텔은 5일 만에 25% 상승했습니다. 145달러 목표 가격도 방금 움직였습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790103933,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=457883f0f473ada0a708561ff0eb577f3c075986ad8a6c2dfaedb9f4bee30251",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9716f6edd2f00dc4b9ea",
          "headline": "마이크론이 아닙니다. 알파벳이 아닙니다. 다음은 향후 3년간 나의 최고 인공지능(AI) 주식입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790059800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3df408093d046894dbd6c6df702a0494d7608d568a42261f25db680ddc5c2ea",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b09cd36c20c6f95e9fd1",
          "headline": "Meta의 Muse AI가 새로운 칩 수요 예측을 촉진함에 따라 ARM, Intel, AMD 급증: 소매업이 매우 강세로 전환",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790041851,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d0eb2b00556f5ff54107e4cb4129531ff940c8b13d21e046be3f77e5fbe685d8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "db0d22d37d8a2aa35474",
          "headline": "오늘 Intel, Arm 및 기타 AI 칩 주식이 급등한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790038998,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0e81c35f9dfab690733bf2e90c84e610216e4850d5c4e0f2f403dc7264ef223",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "392adc1f4c253bb3395e",
          "headline": "Google은 위치 데이터에 대해 아일랜드 개인 정보 보호 규제 기관으로부터 벌금을 부과 받았습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790036807,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c344c5d596a41c7a2e975c666f6d1c421f2734fde0a3db057c66b24df8b3e8e9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f5c69b999f965e86b9c0",
          "headline": "Google, Georgia Power, 원자력 발전소 업그레이드 지원 계약 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790034584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=028883a96ce75c736bf18fef086a0d9efc9476d93637d269e35b57edaa0e4f17",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4fedbce9d9afd4b3d97e",
          "headline": "상황별 게임 내 광고에 대한 Microsoft 특허 힌트",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790024496,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=69e7b584c4d4038b17ec64b5b0c6656e81ed4e8576b9ce77fd8133c4c8ba1040",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "367fd98ff3228b6b25bf",
          "headline": "인텔의 CEO가 마이크론 기술 투자자들에게 좋은 소식을 전했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790020201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dda7270cfc8bd93e3e9c4c195f17681dc9577e5fec7b4a70c4f4518b1f96881",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fa99fcaac7ce7ed36ee1",
          "headline": "더 나은 인공 지능 주식: Arm Holdings vs. NVIDIA",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790009587,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3c8de12abf44f503ac58c43e84a4e0014092070b3bd53504761f3b65268ba1c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a273527a5b574fe258c3",
          "headline": "24달러에서 109달러로: Intel의 복귀가 현실입니다. 이제 가격표가 문제입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790006746,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=26432137ca0d3f666105ae0189ed15b2de0f146c42cb46c156daf83e057df62e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f064b85100918e010d80",
          "headline": "더 나은 인공 지능 주식: Arm Holdings 대 ASML",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789955539,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8376df9a3b0b152ee22d7601cf7aa782560a413730d668435d74be2e8ab8e72",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aaf02cf79c0c320c7996",
          "headline": "더 나은 인공지능 주식: Advanced Micro Devices vs. SK Hynix",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789932508,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c84e22fbe0e254393a24aaf0db3be974c990125346d29df5bca046dd5d66207b",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790103026,
      "signal": "우호적 변화",
      "netScore": 2.59,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
          "eventId": "e813c5fe155d224c2662",
          "headline": "포장재가 공급업체에 더 가까워짐에 따라 TSMC가 이익을 얻습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790103026,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=350c7f1cde874e44e337a019b8d685a9bc54decb9d9d0a66ad1a380916dc455f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f88fbc5405b3d971569b",
          "headline": "TSMC는 단일 분기에 CapEx로 155억 9천만 달러를 지출했는데, 이는 이전 분기보다 42% 증가한 수치입니다. 주식에 대한 의미는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790072557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1171e0f61d3a9f26c1e9e79af523234ec13122714a8296bdb78b554954a83999",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bf17db96f6f09e97922a",
          "headline": "TSMC의 패키징 붐을 이길 3개의 칩 주식",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790027135,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f275bd317b0b764600a2421b64c4269a9f7cb9b893845f90be3aa9d5a252b3bc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a053dcedeff947f542b2",
          "headline": "AMD 주식이 처음으로 시가총액 1조 달러를 넘었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790010081,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45c9a2e9bd5dc9a4e747f8335b60db1a900dbf998a2b49ff12ced80cae7af9d1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ffab6cdc31f4b331ad1",
          "headline": "20년 전 대만 반도체에 투자한 100달러의 현재 가치는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789986626,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=34b54cd7f8f74ea756ca34bb0572678eed57d673a002e4098e88d19210bb567c",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1789955539,
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
          "eventId": "f064b85100918e010d80",
          "headline": "더 나은 인공 지능 주식: Arm Holdings 대 ASML",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789955539,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8376df9a3b0b152ee22d7601cf7aa782560a413730d668435d74be2e8ab8e72",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790141547,
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
          "eventId": "864679df8b23131ed200",
          "headline": "Michael Burry는 Micron보다 칩 공급업체를 선택했지만 메모리 생산업체가 '강렬하게' 매각할 수 있다고 경고했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790141547,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a952f72824fb5714a4e663229ec6006cc2becb3cc51d42c6b4193c60605803dd",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790141547,
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
          "eventId": "864679df8b23131ed200",
          "headline": "Michael Burry는 Micron보다 칩 공급업체를 선택했지만 메모리 생산업체가 '강렬하게' 매각할 수 있다고 경고했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790141547,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a952f72824fb5714a4e663229ec6006cc2becb3cc51d42c6b4193c60605803dd",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
      "updatedAt": 1790204938.4644272,
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
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790189853,
      "signal": "우호적 변화",
      "netScore": 3.76,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 4.02,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 3.5,
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
          "eventId": "42a5512169d1a81cb852",
          "headline": "Nvidia는 이 AI IPO 후보를 지지합니다. 불과 6개월 만에 10억 달러 손실",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790189853,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c035b24406ae5bac4a8b8c9763c64a9421d0d84831dba850312b70460fdb74b9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "431410ffb566475f9ad3",
          "headline": "SoftBank는 OpenAI를 위해 110억 달러를 조달하고 있습니다. Arm 지분은 250억 달러 규모의 대출 시설을 뒷받침합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790189559,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fec2d7296db6de14c116510aac29b2161c2a5b74baf451b7b01dd805a13c802b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "fca0d71d79a54e238887",
          "headline": "마이크로소프트, 2030년까지 걸프 클라우드 및 AI 투자에 100억 달러 약속",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790186458,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9aa9da652349079c3e3499ef78679b00378d767ea9ca11dd472e05af41ea188",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "8de15535af224df9ed3f",
          "headline": "Micron vs. Sandisk: 어느 AI 메모리 주식이 더 많은 실행 여지를 가지고 있습니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790169060,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=962648bdfeded593764fdb6214a10d510d428bf5e4088bfbb9feeb8c546977ad",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f549ccba050d4d969cc9",
          "headline": "Madison Mid Cap Fund: 고속 스위치 리더인 Arista Networks(ANET)에서 이익 실현",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790167334,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2b40d4829f1a99bfdd1939521b1a0ea1955e42fb13ce63519e6b73044613358",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "d3c77d043644fab8b571",
          "headline": "Apple의 iPhone 18 수요는 마진에서 개선되고 중국은 여전히 ​​약세를 유지하고 있다고 UBS가 밝혔습니다 — 최신 목표는 13%의 하락 가능성을 암시합니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790164503,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96dccb1e728291139b70d5ebed2df3679be255e7c762cb2d6d0ce79fa29f2226",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "ae01a1f4d1f90cc4325e",
          "headline": "지금 행동하세요: 마이크론은 9월 30일 이후 급등할 수 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790162520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d90e90a228e44448c6f91d82f7693ea3e938f0b9f0a63c452534e5667d45d216",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bcc455e0b91ddf978cc9",
          "headline": "이 AI 메모리 주식은 2026년에 650% 이상 상승합니다. Micron 투자자는 주목해야 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790161410,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90b9486528f134316b1aad93390dcfd1bbb740a3ffff7799342a87fbcaadc3ee",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "6292f96c0baafde00434",
          "headline": "Muse AI는 Meta Connect를 투자자가 꼭 봐야 할 제품으로 만듭니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790147700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4e3b30fd0f29f2bb1fa68439ac313320f26d82ad3b219dd85debffe7c43f21f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "864679df8b23131ed200",
          "headline": "Michael Burry는 Micron보다 칩 공급업체를 선택했지만 메모리 생산업체가 '강렬하게' 매각할 수 있다고 경고했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790141547,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a952f72824fb5714a4e663229ec6006cc2becb3cc51d42c6b4193c60605803dd",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "42a1dcda1137124739c9",
          "headline": "9월 30일 이전에 마이크론을 구매해야 할까요? 1개의 숫자로 인해 주식이 급등할 수 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790135401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ea890f4df43fe3268981b4148b85e612d0733e769bf49981e93b28c511c61b0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c7c02cd46a76f74707b7",
          "headline": "오늘 AAPL, OKTA, AMD 주식이 52주 최고가로 뛰어올랐던 이유는 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790132737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de890e77e1c862a1d3fffaa4584accf286cc2c2d84ad200122b315ef8458ff13",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 37,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790191675,
      "signal": "중립·확인 대기",
      "netScore": -0.63,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.75,
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
          "eventId": "176bc17e570cdeceaed0",
          "headline": "SanDisk 주식이 귀하가 이미 갖고 있는 위험을 증폭시키고 있습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790191675,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1371ac14ddbc15f625d30065ac6a01ba1ec9b60198b21ea7609417c542c6244b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0ebfa23854841fc7d971",
          "headline": "Sandisk(SNDK)가 내년 생산량의 2/3를 계약했습니다. AI 스토리지 붐이 계속해서 수익을 낼 수 있을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790119114,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=72761c98607b7922820676f1df1c41151889af0d02f577e5a8697a71bd6b2650",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6ef0b797e53a228568a6",
          "headline": "분석가는 NAND 플래시가 중요한 AI 인프라가 되면서 Sandisk가 2,400달러를 기록할 것이라고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790091671,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=19166d4e625cad024165f2a8281aa2ec41a57f7ad48b425e1eb6e9e0a21cf55b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d19cc9e956fc703e7550",
          "headline": "Sandisk는 939억 달러 규모의 거래를 보유하고 있습니다. 이제 어려운 부분이 다가왔습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790044380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=adef0e6eff307dba00ccd80b7dd54bbbe4084da4c1d183fabefec75c943a1d4c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4115050191a127404580",
          "headline": "SanDisk는 메모리 랠리에도 불구하고 2% 하락했습니다. 마이크론은 3% 상승, 웨스턴 디지털은 더 높이 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790018014,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fcc4fdd63b07e066772c77437d0aa078eea6fef724e238fbcb1fcccda52f8ac",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0338b8d0823a6580a5ca",
          "headline": "MU, SNDK, SKHY 주식에 초점: 중국의 CXMT가 더 빠른 생산을 선전함에도 불구하고 메모리 반등이 힘을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789956079,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a294ce831ae8dce9aba19c78789073d74c81a5c2832f952196a42ffc978886b",
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
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790164503,
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
          "eventId": "d3c77d043644fab8b571",
          "headline": "Apple의 iPhone 18 수요는 마진에서 개선되고 중국은 여전히 ​​약세를 유지하고 있다고 UBS가 밝혔습니다 — 최신 목표는 13%의 하락 가능성을 암시합니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790164503,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96dccb1e728291139b70d5ebed2df3679be255e7c762cb2d6d0ce79fa29f2226",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "c7c02cd46a76f74707b7",
          "headline": "오늘 AAPL, OKTA, AMD 주식이 52주 최고가로 뛰어올랐던 이유는 무엇입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790132737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=de890e77e1c862a1d3fffaa4584accf286cc2c2d84ad200122b315ef8458ff13",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "7ffbba16fdad050a29d7",
          "headline": "JPMorgan은 Apple iPhone 18 Pro 배송 시간이 두 번째 주에 길어진다고 밝혔습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789986054,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c68828a0646a1496ac52fab05bfacb5e2224c5015fb277c7e5bcd51acb7f304a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "ee666a90b969535eac3d",
          "headline": "예측: 1,999달러의 가격표에도 불구하고 Apple의 폴더블 iPhone Duo는 히트할 것이며 Apple은 5조 달러 클럽에 Nvidia에 합류할 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789922220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56b8f415a8fa4d781953626933ec079e2c0bfd4ebe4e28518d9e9138f389c0b3",
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
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790167334,
      "signal": "중립·확인 대기",
      "netScore": -0.56,
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
          "eventId": "f549ccba050d4d969cc9",
          "headline": "Madison Mid Cap Fund: 고속 스위치 리더인 Arista Networks(ANET)에서 이익 실현",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790167334,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2b40d4829f1a99bfdd1939521b1a0ea1955e42fb13ce63519e6b73044613358",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b60c71a5be3415afbfe6",
          "headline": "Arista Networks 주식이 조용히 다른 베팅이 되었습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790105228,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d2f327754b68438742405f83cf309e78407aca53a43bb216dfe70f65252348f",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1790204938.4644272,
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
      "updatedAt": 1790204938.4644272,
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790165100,
      "signal": "우호적 변화",
      "netScore": 4.34,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.15,
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
          "eventId": "f636c44dfc1b31b93a73",
          "headline": "GE Vernova, 이집트에서 5개의 가스 터빈에 대한 서비스 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790165100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f54ed0f7870ba172dc7368c2cf25963d7b1164d71665cbf26fcd90e037a5340b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f377d37d8f64f954506a",
          "headline": "GE Vernova, 이집트 발전소의 5개 가스 터빈에 로터 수명 연장 솔루션을 제공하는 서비스 계약 발표 공개되지 않은 약관",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790143106,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5cd1a0eb07ff1a01414655ab0ce578a6c13e9d12e5ab55df2a27c094d5b5c922",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "57d8e39be3de9a78a13b",
          "headline": "Nvidia를 잊어버리고 대신 3개의 백만장자 AI 인프라 주식을 구매해야 할까요?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790025900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=908c26e1c27ebaff207c2b8ffd54dd49e00662a665e92c19b5f7862f9dfcd80e",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e5f741eca0e336c7c7ba",
          "headline": "GE Vernova vs. Oklo: 2026년에는 어느 산업 주식이 더 나은 매수인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790008328,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=63eab58d15ae540c83d74ed8109e60dc31650a103da4d97396c724991d569dc2",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "970ae39d17a1e727acd5",
          "headline": "메르센, GE Vernova와 협력하여 사우디아라비아의 동기식 콘덴서를 위한 완전한 전류 전송 시스템 제공",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789992123,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=202470af056f546ea6f1b658b18cd84ca6a6f6aed05f997b15b14da01530bae9",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1789986464,
      "signal": "우호적 변화",
      "netScore": 3.49,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
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
          "eventId": "667b8e69e4ac7e42185c",
          "headline": "Constellation Energy, Toyota Motor North America Ink와 15년 재생 에너지 계약으로 새로운 태양광 발전 개발 지원",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789986464,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30dc9d30334fe7c1d379a3a4e62245dac5710f2add5ebe629f74124e1510022f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "260744faf57fe486508e",
          "headline": "Fluxnium은 해수에서 우라늄을 추출하기 위해 700만 달러를 모금하고 Constellation은 Fluxnium의 새로운 미국 우라늄 공급 구축 추진을 지지합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789974607,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f79ca2d8d7048d738c5d4203f6605ff6411085a638a4aae1aabb2b912228f532",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790090086,
      "signal": "우호적 변화",
      "netScore": 10,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.8,
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
          "score": 0.0,
          "level": "중립"
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
          "eventId": "83dc0eb9cc41033d2db6",
          "headline": "Vistra(VST)는 저렴한 가격입니까, 아니면 새로운 전력 거래 이후 정가로 책정됩니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790090086,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9389c69fccdc5df687423afc5e7d1a2472d962081de9d8a84bb42974da7f9ee2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fb447e9a569bc6636dff",
          "headline": "New Era는 텍사스 데이터 센터 프로젝트를 위해 Vistra와 20년 PPA를 체결했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790075172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a59a5672fc995234f24d22877c40277cb379e1c16f97ff4b5fb9dfd9a6a47881",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5c1f265b79629b68eec0",
          "headline": "New Era Energy, 207MW Vistra 거래로 30% 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790031907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78c42df558f964906b4e1d608fd88b1ec8d055c9513c9726968fa9cb6d66eb9b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "05eb17f74980c3eefcb1",
          "headline": "New Era Energy가 Vistra와 강력한 계약을 체결함에 따라 NUAI 주가 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790016054,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=015c44626516606263cbeb64c221764703dd9bd23854aea4818052e234b9dfac",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d0ca4006dc014110df85",
          "headline": "New Era는 207MW Vistra PPA 계약 후 30% 증가",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790000824,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=26f263ab7d53bcde4ffdbd96fdc3426749c85085f43e9880290ad13cf30233b9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e3a1342e2e4cd00fa8b6",
          "headline": "New Era Energy는 텍사스 데이터 센터 프로젝트를 위해 Vistra와 20년 전력 계약을 체결했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789996980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=69674940727afaf3e7d51bdccb62bd72b1f772e752fd5d8431fe57d44b8948a7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c426805c871edacda47a",
          "headline": "New Era Energy, Vistra와 20년 전력 계약 확보 후 주가 16% 상승",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789994331,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b1c1eb42abddcacef566644f6db9fce029181912f09da0245f448fba49317a86",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790078700,
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
          "eventId": "48f3767e830aeb53aae5",
          "headline": "Vertiv 대 Eaton: 이 AI 인프라 주식이 더 나은 구매입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790078700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0dc701c7569ec3eb96660fa962d1576087d56a2accfdc12b1121a4a008bd9ec4",
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
      "updatedAt": 1790204938.4644272,
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
      "updatedAt": 1790204938.4644272,
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
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790078700,
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
          "eventId": "48f3767e830aeb53aae5",
          "headline": "Vertiv 대 Eaton: 이 AI 인프라 주식이 더 나은 구매입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790078700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0dc701c7569ec3eb96660fa962d1576087d56a2accfdc12b1121a4a008bd9ec4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8299e79f36accae6cf91",
          "headline": "Caterpillar, GE Vernova 및 Vertiv에 대한 더 높은 이자율의 의미",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789980900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a6d1e5cdc9837aeb762ca6f65b3cc38feef8426fbfa16289cf62e1273014792d",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1790204938.4644272,
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
      "updatedAt": 1790204938.4644272,
      "dataAsOf": 1790093088,
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
          "eventId": "e5020f5e84de3f801972",
          "headline": "Rosenblatt가 $2,400 목표로 매수 보장을 시작하면서 SanDisk는 6% 상승했습니다. 마이크론은 3% 상승, 씨게이트는 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790093088,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f2f4a83aec5af8c643497629c32fbaac3cc2cfe6a2cf468385aef853ba8fb193",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1790204938.4644272,
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
      "updatedAt": 1790204938.4644272,
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
      "updatedAt": 1790204938.4644272,
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
