// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1791403203.9883335,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791384058,
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
          "score": -3.15,
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
          "eventId": "49bf6acfe31f13d50a8c",
          "headline": "Nvidia는 Microsoft의 Surface Laptop Ultra로 Intel의 320억 달러 규모 PC 사업을 목표로 삼고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791384058,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2275662b8eb44ba209972fa7905d53135cc962f6241e63050bc99ff2bdf7ee4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee739e49c20dcbacd7b2",
          "headline": "Jim Cramer는 Microsoft(MSFT)의 AI 투자가 마침내 성과를 거두었다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791364045,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d498f9ea2b813b6c71d2b717266b6a90cca62d865c717ac5b34a33a5e308a39",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "250b56577648e8b7282e",
          "headline": "AI가 당신의 직업을 대신할 것인가? 마이크로소프트의 AI 책임자는 이제 인간 작업의 5%만이 위험에 처해 있다는 노벨상 수상자 연구를 지적합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791352078,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc1995fcf4801a8355165a302e93e183d5614c7204dc5c57f3817d3973c9ffd0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d64f901b51bbd68599d1",
          "headline": "10년 전 Microsoft에 1,000달러를 베팅하여 시장을 3배 이상 무너뜨렸습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791313230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7de2c0592ab26fcaddec2a42751f66ae3f36f431ef3242963c99459040a4c2f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "33316210dd5d3bf8f4b5",
          "headline": "Meta와 Microsoft는 내부 AI 도구가 중심이 되면서 인류 의존도를 줄인 것으로 알려졌습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791241572,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2322b057b1e95a37e3954f4fcd0023670bea8babd04f90afba56d1bac65dbf82",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6dfe852365b65e0e0c8",
          "headline": "비주얼 컴퓨팅 시장 보고서 2026: 2030년까지 글로벌 규모, 점유율, 추세 및 성장 예측 | NVIDIA, Apple, Microsoft 및 AMD를 통해 AI, 실시간 3D 및 AR/VR 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791207420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee5cd25b7c93703fe137f69b98dcb799d0bdbc856fc121d8db2b24643fafac11",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791385904,
      "signal": "우호적 변화",
      "netScore": 10,
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
          "score": -4.72,
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
          "eventId": "eb3a146d2a222187a9f6",
          "headline": "Alphabet(GOOGL), AI 데이터 센터를 위한 43억 달러 규모의 원자력 계약 체결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791385904,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62fbb9f525fdc2c330dcc753a0401a4ec39ecb2308966fd9da489b3461bb3189",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "104305e14954724e067c",
          "headline": "Google DeepMind와 Meta가 Biohub의 18억 달러 규모 AI 생물학 추진에 동참",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791385531,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ba0ab646d43c8ec3e24544337697beb023b6c309360c8d30bfc59463f75baa6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fff558d46080efd05817",
          "headline": "Google, Meta, 미국 정부가 Biohub의 18억 달러 규모 AI 생물학 노력에 동참",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791381477,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da48b11ac9e6ec95dfc1723a8d50e95948004b3adf38b1774bc91dc765216052",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "86b8d910d91a63c6be29",
          "headline": "Alphabet, Constellation Energy와 대규모 신규 원자력 계약 체결",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791379466,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=700e4898510d715acd6463fbde517929aa13c7a6e6440585e98a6da4feb4aed2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5d479c4839fddbef2578",
          "headline": "Warren Buffett의 8억 6,300만 달러 규모의 \"비밀\" 포트폴리오는 Alphabet과 Broadcom을 버렸지만 이 입증된 수익 창출 전략에 투자 자산의 17% 이상을 보유하고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791365161,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3a9447deb1eb1337cf7b23131113cce858068eb287cbc2e789ba8531eeb90eaf",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6dcca3becab40c23c328",
          "headline": "구글, 컨스텔레이션 에너지(Constellation Energy)와 원자력 계약 체결",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791357795,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=133cdde5521581150f3b593a457df6b43ffeec18d3ee2ee6ccc686a4c62e4e9b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "703a452876932cddb88a",
          "headline": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791336834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "19abe792ce249c71ec7f",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d54cacb18217b8c8c054",
          "headline": "Google 잉크, PJM에서 3.6GW 전력 공급을 위해 Constellation Energy와 거래",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791325476,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3b20800c7109f51107d627a5943713fc3e9d0715721aa94b0c65db2dc4389673",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dd9d6e2e7b6ffd7e41bd",
          "headline": "18억 달러 규모의 Google 데이터 센터 거래로 Black Hills 주가 5% 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791323952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=532133e76807c02c4588f5537193934c41b52e86bb342f8139ccbda3d0a12bb9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3ac8a268a4416ea705fc",
          "headline": "Google과 Constellation Energy가 최근 원자력 에너지 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791321086,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4288451f39c9c75ad7c3ca98fb992399fab6327365dc2a010ae6a943da7de9d2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "225c8dcfc22df7d05083",
          "headline": "Constellation Energy, Google 원자력 계약으로 12% 급등 | 닫는 벨",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791318872,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=61d67e58385854d15b3609a1110db516d715884f22b42805531a8d8e97deb2cb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 31,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791387400,
      "signal": "우호적 변화",
      "netScore": 7.06,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.62,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.9,
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
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "b6559c29865c21d298fd",
          "headline": "Marvell CEO, 300억 달러 규모의 맞춤형 칩 목표는 '인상이 아니다' - 1조 달러 가치 평가 가능성 확인",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791387400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc97d64f9b1b636151dc368a51178cfd3e988218a535dc7837ae0a88d9bb2883",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6c6709889363fd6d3071",
          "headline": "아마존 백만장자를 만든 종류의 로봇공학 주식 1개",
          "eventLabel": "내부자 매도",
          "publishedAt": 1791386400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5e00b18bc8f517aa217990851a64a0b4c1c46c8de2d9b994285e473452a3a10",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b2161c12fe29852d808f",
          "headline": "Cloud 2027: Oracle의 가장 빠르게 성장하는 엔진이 AWS 격차를 해소할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791377140,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=136f57ab58047bc2ce32be465d8582d05e2b16da1395cd331c090a61576c84d6",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "22c621f4fb2fee7ac430",
          "headline": "eDreams ODIGEO와 Amazon Alexa, AI 여행 검색 기능을 Alexa+에 도입하기 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791358080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3967b9380759f5d534b5b924a222d05480e56faa2dee48159a58572aa849dcf3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "04ebd9792158d2491905",
          "headline": "XLK는 Alphabet, Amazon, Meta, Netflix 또는 Tesla를 소유하지 않습니다. 3개의 주식이 35.87%를 차지합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791326024,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e89cf9ca966b15c06f25ef68871e73a4c203607efcaa3cec2e74e247d5ad4c89",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "917ad067cf1cc10f1530",
          "headline": "구글이 원자력에 43억 달러를 투자한 것은 아마존이 투자한 지 불과 며칠 만에 이루어졌습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791310497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=645fba0295f899f90036130559b5d3476ef36615337a2c0084a3946a3acb24d2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20ff61b2ab6fb59faa44",
          "headline": "전원이 꺼졌나요? Jackery는 Amazon Prime Big Deal Days를 맞아 4.5성급 이상 등급 휴대용 발전소 및 태양광 발전기 최대 65% 할인을 제공합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791291600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe0d53f3695209748f9d52182b581264be55031501f3793667a99eefd60ab178",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9fcdbe782dff7b321167",
          "headline": "나스닥, 다우 선물이 프리마켓 상승하는 이유는 무엇입니까? SPCX, NVDA, CEG, AMD, ORCL, NOK 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791275977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b2690aaa98e03f5a2f2511a4b46b97fd79dfffb05f92ff936c81ada02f72b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "59b510ed0801badcf86b",
          "headline": "오라클 정리해고가 12월에 돌아오나요? 연구원은 온라인 이메일에 대한 소문이 더 넓은 자발적 종료 제안을 가리킨다고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791262943,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e55823492b87dd9b7621ac0090f423df02fdc823aeaaaea7c4d6ba86fa58fdf6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "20a9e2763c70f665e8b5",
          "headline": "Amazon, LA 올림픽 주최측과 이전에 Forever 21의 본거지였던 39에이커 부지 인수",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791236546,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4ded1771146b99587764e9a35e41c6001401695cfe0df0cda6ac85326d5d558b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "47b8d59c57e83aff2e79",
          "headline": "데이터 센터 반발에 대한 Amazon의 답변: 커뮤니티 칼리지 및 가정 에너지 업그레이드에 10억 달러",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791222376,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=81c6ee463e59916c8e8dd5574cb48a2420aa2ee0c7104ad7a301fccb08b04b01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "744962338cd7c9dcd0ff",
          "headline": "아마존은 프라임 빅딜 데이를 준비합니다. 전자상거래 성장이 계속해서 놀라운 성장을 이룰 수 있을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791214263,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=446884d2c52972b43fa5a4fb83f8c0ebd3c729635d4c9c65eaf4bdf3f935c6ca",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791385531,
      "signal": "주의 강화",
      "netScore": -8.39,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.4,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.67,
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
          "eventId": "104305e14954724e067c",
          "headline": "Google DeepMind와 Meta가 Biohub의 18억 달러 규모 AI 생물학 추진에 동참",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791385531,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ba0ab646d43c8ec3e24544337697beb023b6c309360c8d30bfc59463f75baa6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "81aaaccc50a92d554aad",
          "headline": "Meta의 엔터프라이즈 푸시로 AI를 SaaS 기능에서 SaaS 경쟁자로 바꿀 수 있음",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1791341971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0f9e572499df78e6a53f294c1d33f2c6882cbb4dc6279e451d7a79c96c3a7a9",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "04ebd9792158d2491905",
          "headline": "XLK는 Alphabet, Amazon, Meta, Netflix 또는 Tesla를 소유하지 않습니다. 3개의 주식이 35.87%를 차지합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791326024,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e89cf9ca966b15c06f25ef68871e73a4c203607efcaa3cec2e74e247d5ad4c89",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8f03e34f623fa40ab914",
          "headline": "Mark Cuban은 Meta 문서에서 사기 관련 수익이 160억 달러에 달하는 것으로 밝혀지면서 Facebook이 고의로 AI 딥페이크 사기 광고를 운영하고 있다고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791322200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2bae9b1f767db0945e28868e3655092c7cb6a370ccc23414053f8d3deb06c5f5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "30ddba40f6208c41816d",
          "headline": "메타의 AI 전략이 성공할 수 없을 것 같은 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791311402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d70da75a84d3a9662c8fd8bbf96c20b7103279ae9e813f5cf1a64985cb1ebde1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c9d575e0d5b5725873ff",
          "headline": "Citi는 AMD의 3000억 달러 규모 CPU 시장 확장의 \"주요 수혜자\"로서 25% 상승 여력을 예측합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791307965,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=92238007211c759df503210961c555ef4e85cf201f903701385be653ac2488e7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cee442d4877d8e9d74bd",
          "headline": "Ofcom, 고등법원 대결 중 메타 조사",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791303046,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab3193ce38c45540ccf8ccc9036149a57d4f574d0b8fbc9c185ab07ae52c8eda",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "33316210dd5d3bf8f4b5",
          "headline": "Meta와 Microsoft는 내부 AI 도구가 중심이 되면서 인류 의존도를 줄인 것으로 알려졌습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791241572,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2322b057b1e95a37e3954f4fcd0023670bea8babd04f90afba56d1bac65dbf82",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6f754d6d38f9de1a59e0",
          "headline": "Meta와 Google이 AI에서 승리할 간단한 이유: \"미국 가구의 2%\"만이 비용을 지불합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791229332,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=898527f37f586052a6c22e453923ba0d2fc57d7669983be07029fbdc106f6390",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0484aa779bf49542fc38",
          "headline": "백악관, OpenAI, Nvidia, Alphabet 및 Meta가 서명한 자발적인 AI 안전 서약 공개",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791213153,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=032c8487bd87dc06629cd8e58b891dbac5fc69968d46fa4f3601c82893a12ceb",
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
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791379139,
      "signal": "중립·확인 대기",
      "netScore": -0.98,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "406b947ab293c4b40504",
          "headline": "10월 13일 행사를 앞두고 Apple과 LG가 7가지 스마트 홈 기기 개발에 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791379139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ecfbfe8fadf6620d844b660135af3a4de294e8e57ced284b64c76e6d1f5fde9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "802591f84846fdd33845",
          "headline": "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 4조 7500억 달러로 증가했습니다. John Ternus가 이끄는 Apple의 다음 장에 베팅할 때 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791306720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec6f881fc469376cf38571cf8493b05b57d9365b22e179702e1a1c853e21e423",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "cb6a4f017bd7ce10abbc",
          "headline": "22%: Apple(AAPL) 주주에게 가장 중요한 숫자",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791285600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=335897208476f1904381823ddc2b672d59e451c9f59bd4da898e42dd370fdd78",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "e6dfe852365b65e0e0c8",
          "headline": "비주얼 컴퓨팅 시장 보고서 2026: 2030년까지 글로벌 규모, 점유율, 추세 및 성장 예측 | NVIDIA, Apple, Microsoft 및 AMD를 통해 AI, 실시간 3D 및 AR/VR 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791207420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee5cd25b7c93703fe137f69b98dcb799d0bdbc856fc121d8db2b24643fafac11",
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
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791383427,
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
          "score": -3.67,
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
          "eventId": "363b59c37d76d789424a",
          "headline": "Tesla는 머스크가 지연 '인명 손실'을 주장함에 따라 FSD 검토를 완화하도록 유럽 규제 기관에 압력을 가했습니다: 로이터",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791383427,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=864d424a861059192d20327d253757bae2eeab884a63c7e787d6c9149ccb710d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2b11badec3c1ab86b5ad",
          "headline": "Tesla의 3분기 납품은 기대치를 뛰어 넘었습니다. 주식을 살 시간인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791379201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0202839b2349313cca85d6c90340fa66de31f4dba20fb9a707b85c751e60360d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a8a25aca777cb7dbe191",
          "headline": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791336834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "04ebd9792158d2491905",
          "headline": "XLK는 Alphabet, Amazon, Meta, Netflix 또는 Tesla를 소유하지 않습니다. 3개의 주식이 35.87%를 차지합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791326024,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e89cf9ca966b15c06f25ef68871e73a4c203607efcaa3cec2e74e247d5ad4c89",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "987949f01e80381d4dc6",
          "headline": "NLST 주가는 Micron의 6억 달러 라이선스 계약 이후 18% 상승 - 소매점은 이제 SK 하이닉스를 기다리고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791323011,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0793453309e7707a0bbd91c3efe340cf3c9c84d1dbde435c062847e7476a8041",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "839f59811f40af71f58d",
          "headline": "Stellantis N.V. vs. Tesla: 2026년에는 어느 소비재 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791300152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=23cf5fafacfae18434de2be3c4c6dcb1f4ead23dd82c2105cb270f86518c0428",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5d6bd0a3faf782acd42a",
          "headline": "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791238172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b05235329873b3a6aefc1263a0519dcf558fad2478525d7f31f7e0d1584bf58",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "387f143f8482764cb832",
          "headline": "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791238172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b05235329873b3a6aefc1263a0519dcf558fad2478525d7f31f7e0d1584bf58",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d4047d6c7b75e2616820",
          "headline": "Elon Musk는 Tesla의 초기 맞춤형 AI Chit Bet이 그 어느 때보다 중요할 수 있다는 데 동의하고 TSLA 엔지니어의 경고를 지지합니다: '현재의 컴퓨팅 부족은 빙산의 일각에 불과합니다'",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791237605,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e3cc89cee51d5790561b10f32ebf23ec12e9e7563eb5b4920b19149499431a8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791374761,
      "signal": "우호적 변화",
      "netScore": 3.63,
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
          "eventId": "34f2bad0f6f3c160c266",
          "headline": "Broadcom, Oracle, 클라우드 인프라의 AI 기반 추진력 테스트를 위한 수익 창출",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791374761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=543b7a61ed849ae8ca67fcadf0eee529fcdeef470ac13b60afe2cd304c390f04",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "eed39ba03b405a9dbf81",
          "headline": "Nebius는 추론 거래에서 9% 상승한 반면 수익은 197배에 가깝습니다. CoreWeave 4% 상승, Oracle 3% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791309449,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ed823fab51bfd325fef365a3c4aaa96520171c1fdec2f50f23fe6caf2a03329",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "fb792636bfe7c995ce55",
          "headline": "Nebius는 추론 거래에서 9% 상승한 반면 수익은 197배에 가깝습니다. CoreWeave 4% 상승, Oracle 3% 상승",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791309449,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ed823fab51bfd325fef365a3c4aaa96520171c1fdec2f50f23fe6caf2a03329",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9fcdbe782dff7b321167",
          "headline": "나스닥, 다우 선물이 프리마켓 상승하는 이유는 무엇입니까? SPCX, NVDA, CEG, AMD, ORCL, NOK 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791275977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b2690aaa98e03f5a2f2511a4b46b97fd79dfffb05f92ff936c81ada02f72b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "59b510ed0801badcf86b",
          "headline": "오라클 정리해고가 12월에 돌아오나요? 연구원은 온라인 이메일에 대한 소문이 더 넓은 자발적 종료 제안을 가리킨다고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791262943,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e55823492b87dd9b7621ac0090f423df02fdc823aeaaaea7c4d6ba86fa58fdf6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791341550,
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
          "eventId": "aafb0272c4aa3bd89150",
          "headline": "Salesforce 대 ServiceNow: 더 나은 현금 흐름 거래를 제공하는 AI 소프트웨어 주식은 무엇입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791341550,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96bef0b79efe705788910c4a297e4420c3bb08a773cf02cfd735b966fa124baa",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791372610,
      "signal": "중립·확인 대기",
      "netScore": -1.26,
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
          "eventId": "af72cff01c60eb86a91e",
          "headline": "Palantir 또는 Snowflake: AI 데이터 스톡 1개를 선택하고 다시는 보지 않아야 한다면 이것이 바로 그것입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791372610,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8527ba3cb3034290e67279872b86b09f025ab7e694cd346b9fe8520998ab4e2",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2706572251bf12a9b4c8",
          "headline": "마이크로소프트가 아닙니다. 구글이 아닙니다. 분석가들은 이 2조 7천억 달러 규모의 기술 타이탄을 가장 저평가된 AI 플레이라고 부릅니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791304860,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ace78cffa55a1f59fc8f1d51337c8297fff889c1283b8b9c28203ebe2428365",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "10a0d86c02b8fb759279",
          "headline": "Nvidia, Palantir 및 Alphabet은 175억 달러 규모의 경고로 월스트리트에 충격파를 보내고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791278761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a46b94a836b0723950efeed8a6a69eca0b6c93fe192c10cd4df3b4f033aee2e5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5723ee76fb13676d6dd2",
          "headline": "영국 금융 행위 당국은 기술 및 금융 범죄와 관련된 단기 Palantir 계약을 갱신하지 않았다고 밝혔습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791272413,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=294f067689ca9e9eca4a001dd9cee9178f3fb7f89af0653c1aed159d98a789fe",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "43e2fa516dd8ce15c247",
          "headline": "Surf Air Mobility는 Palantir가 제공하는 Part 135 운영자를 위한 Surf Air Mobility의 SurfOS 비행 운영 소프트웨어인 OperatorOS를 위해 Clipper Aviation과 최종 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791268452,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15853cb489b3a69aeb408b2e9d3afc8c27c77056bde4ba8b8b268353c370adff",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "74e202202d7ac74ea32a",
          "headline": "Nebius가 Palantir로부터 거래를 더 잘 마무리하는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791256633,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5bb404a7c112bef5851774463149d306583195b2142a9af375f993e21f7afda",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2376a2fa3bc6a4a308e1",
          "headline": "Northland 매수 등급 및 40달러 목표 가격에도 불구하고 Gorilla는 5% 하락했습니다. Palantir는 하락세를 유지하고 BigBear.ai Holdings는 전락했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791223993,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b069f7f5ab036e3c5be47c5ee60d5d6e2b585d99194a3b9b82d4a2852431ea7",
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
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791387093,
      "signal": "우호적 변화",
      "netScore": 5.13,
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
          "score": -5,
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
          "eventId": "68482752d8041194abbf",
          "headline": "Nvidia 주식: 이 스프레드 전략으로 AI 칩 제조업체의 움직임을 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791387093,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=79d09c9fd6db99d40ba9b6a0ff42cb84ab7414e5d10e1e69e551cf41646f443e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "5ddb17c5b2d8454dc5fe",
          "headline": "SpaceX는 Nvidia 칩 구매에 400억 달러를 원하며 Nvidia는 거래의 모든 측면에 참여하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791386925,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67f066b19d657fb15bfaa1983eb65f283c35c7972eea345a789d63e839e1973b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "eb3a146d2a222187a9f6",
          "headline": "Alphabet(GOOGL), AI 데이터 센터를 위한 43억 달러 규모의 원자력 계약 체결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791385904,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62fbb9f525fdc2c330dcc753a0401a4ec39ecb2308966fd9da489b3461bb3189",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "104305e14954724e067c",
          "headline": "Google DeepMind와 Meta가 Biohub의 18억 달러 규모 AI 생물학 추진에 동참",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791385531,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ba0ab646d43c8ec3e24544337697beb023b6c309360c8d30bfc59463f75baa6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "49bf6acfe31f13d50a8c",
          "headline": "Nvidia는 Microsoft의 Surface Laptop Ultra로 Intel의 320억 달러 규모 PC 사업을 목표로 삼고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791384058,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2275662b8eb44ba209972fa7905d53135cc962f6241e63050bc99ff2bdf7ee4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "06e4322688fb3bf77272",
          "headline": "억만장자 Ken Fisher가 GE Vernova(GEV)에 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791378014,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a43fa9375b655bf1ac7211e3da5caa285bf3d63de9de4f6259c7ac8758d30ac",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ee739e49c20dcbacd7b2",
          "headline": "Jim Cramer는 Microsoft(MSFT)의 AI 투자가 마침내 성과를 거두었다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791364045,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d498f9ea2b813b6c71d2b717266b6a90cca62d865c717ac5b34a33a5e308a39",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "b9e97a1b5bca48bc2238",
          "headline": "모든 AI 주식에 파장을 일으키는 5000억 달러 규모의 질문: Nvidia GPU의 실제로 가치는 얼마입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791358620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f159aef1a4322409868056455f96249f76d7e2214a18ec9c93415111d949d5d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "981a005e7362ba4fbad5",
          "headline": "예측: AI가 엣지로 이동함에 따라 현재 Qualcomm에 대한 1,000달러 투자는 2030년까지 이만큼 가치가 있을 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791350400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e58d65d1423a1178a04c2adad3c63eb77a21eaf10a32d4c8565a983da49c134",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8f03e34f623fa40ab914",
          "headline": "Mark Cuban은 Meta 문서에서 사기 관련 수익이 160억 달러에 달하는 것으로 밝혀지면서 Facebook이 고의로 AI 딥페이크 사기 광고를 운영하고 있다고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791322200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2bae9b1f767db0945e28868e3655092c7cb6a370ccc23414053f8d3deb06c5f5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "c6aff69e09eaa91eb95d",
          "headline": "Marvell, 투자자 데이에서 2031 회계연도 매출 목표 상향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791316497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3bb6e969e746963ce54baac0849b1c470c4ae77a71a436cc245c61ea1f5db5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ec343632477a3019f99f",
          "headline": "임베디드 시스템 - 글로벌 전략 비즈니스 보고서: Intel, Qualcomm, NXP Semiconductors 및 STMicroelectronics가 AI 및 IoT 파괴를 가속화함에 따라 2032년까지 710억 달러 성장 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b20d74487d12ee8348f9eab77dabff4b7549dba9988236e66b36d49c0c0254a3",
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
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791387093,
      "signal": "우호적 변화",
      "netScore": 8.91,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
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
          "score": -2.27,
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
          "eventId": "68482752d8041194abbf",
          "headline": "Nvidia 주식: 이 스프레드 전략으로 AI 칩 제조업체의 움직임을 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791387093,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=79d09c9fd6db99d40ba9b6a0ff42cb84ab7414e5d10e1e69e551cf41646f443e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "eb3a146d2a222187a9f6",
          "headline": "Alphabet(GOOGL), AI 데이터 센터를 위한 43억 달러 규모의 원자력 계약 체결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791385904,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62fbb9f525fdc2c330dcc753a0401a4ec39ecb2308966fd9da489b3461bb3189",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "104305e14954724e067c",
          "headline": "Google DeepMind와 Meta가 Biohub의 18억 달러 규모 AI 생물학 추진에 동참",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791385531,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ba0ab646d43c8ec3e24544337697beb023b6c309360c8d30bfc59463f75baa6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "49bf6acfe31f13d50a8c",
          "headline": "Nvidia는 Microsoft의 Surface Laptop Ultra로 Intel의 320억 달러 규모 PC 사업을 목표로 삼고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791384058,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2275662b8eb44ba209972fa7905d53135cc962f6241e63050bc99ff2bdf7ee4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "06e4322688fb3bf77272",
          "headline": "억만장자 Ken Fisher가 GE Vernova(GEV)에 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791378014,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a43fa9375b655bf1ac7211e3da5caa285bf3d63de9de4f6259c7ac8758d30ac",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ee739e49c20dcbacd7b2",
          "headline": "Jim Cramer는 Microsoft(MSFT)의 AI 투자가 마침내 성과를 거두었다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791364045,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d498f9ea2b813b6c71d2b717266b6a90cca62d865c717ac5b34a33a5e308a39",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "13ac1c186ea3d1ad4540",
          "headline": "AMD는 2027년 대규모 공급 확대를 계획하고 있습니다. 월스트리트는 이미 380억 달러의 신규 수익을 기대하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791363952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bcedf644d9117099b6ae3cfbb3f912ded832567c52fa08c5136b47731b81ace9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b9e97a1b5bca48bc2238",
          "headline": "모든 AI 주식에 파장을 일으키는 5000억 달러 규모의 질문: Nvidia GPU의 실제로 가치는 얼마입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791358620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f159aef1a4322409868056455f96249f76d7e2214a18ec9c93415111d949d5d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "981a005e7362ba4fbad5",
          "headline": "예측: AI가 엣지로 이동함에 따라 현재 Qualcomm에 대한 1,000달러 투자는 2030년까지 이만큼 가치가 있을 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791350400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e58d65d1423a1178a04c2adad3c63eb77a21eaf10a32d4c8565a983da49c134",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "8f03e34f623fa40ab914",
          "headline": "Mark Cuban은 Meta 문서에서 사기 관련 수익이 160억 달러에 달하는 것으로 밝혀지면서 Facebook이 고의로 AI 딥페이크 사기 광고를 운영하고 있다고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791322200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2bae9b1f767db0945e28868e3655092c7cb6a370ccc23414053f8d3deb06c5f5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c6aff69e09eaa91eb95d",
          "headline": "Marvell, 투자자 데이에서 2031 회계연도 매출 목표 상향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791316497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3bb6e969e746963ce54baac0849b1c470c4ae77a71a436cc245c61ea1f5db5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "6cd7e1aad302a0a582cc",
          "headline": "AMD vs. Marvell 기술: 2026년에는 어느 AI 칩 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791314401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac6bfc335dfc3d4897ae8bd77e8ebfe7355b99e732688e3608ac1b0de4e44f64",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 25,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791374761,
      "signal": "중립·확인 대기",
      "netScore": 0.07,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.15,
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
          "score": -1.75,
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
          "eventId": "34f2bad0f6f3c160c266",
          "headline": "Broadcom, Oracle, 클라우드 인프라의 AI 기반 추진력 테스트를 위한 수익 창출",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791374761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=543b7a61ed849ae8ca67fcadf0eee529fcdeef470ac13b60afe2cd304c390f04",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5d479c4839fddbef2578",
          "headline": "Warren Buffett의 8억 6,300만 달러 규모의 \"비밀\" 포트폴리오는 Alphabet과 Broadcom을 버렸지만 이 입증된 수익 창출 전략에 투자 자산의 17% 이상을 보유하고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791365161,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3a9447deb1eb1337cf7b23131113cce858068eb287cbc2e789ba8531eeb90eaf",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6cd7e1aad302a0a582cc",
          "headline": "AMD vs. Marvell 기술: 2026년에는 어느 AI 칩 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791314401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac6bfc335dfc3d4897ae8bd77e8ebfe7355b99e732688e3608ac1b0de4e44f64",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
        },
        {
          "eventId": "cef165066a1e76e639b6",
          "headline": "향후 6개월 동안 Broadcom 주식 성과는 어떻게 결정됩니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791293741,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d83225fbcdf76f5ad3d95e1dc63d6311f38fb737a619004ae49fb0ae8ad352b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0f10e9ff6cf8912fa79e",
          "headline": "Morgan Stanley: Nvidia, Broadcom은 데이터 센터의 전력 위기로부터 보호됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791288194,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=538600e1068dae3bf7f4e7826a4f0f596091c3bf73b5ca2fae73d02923f6df72",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ef18a9c38901a02cf117",
          "headline": "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 급격한 10월 랠리 이후 시판 전 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791277971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa475f9363e423a2f98742f7531b2d0eb385a9a9efddf15069bd64880d0c5bd8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "51055ef8bed01e64776c",
          "headline": "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791257308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7035d6f9bfb2b24033b85023fb3a1c8827b1f03fc5c6f4f1eb02cc7d64be976d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6340b9b09fe6b53173fc",
          "headline": "VST 주식 4% 추가: 미국 에너지부, Vistra와 42억 달러 규모의 원자력 계약 확인",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791243119,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9dc43a244ecf0aafddc4a3c3429b8ba9e0dccdacb586c760be593e4bbb3c5b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b6f7da99028f0dfc0bb3",
          "headline": "월스트리트, 600억 달러 규모의 Broadcom-Anthropic 거래로 대출 기관의 선호도 테스트 - FT",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791236825,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9767c1ce7486f49d389c61175a1b19215ba5e905cd954d700da4629eee67a564",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9830782c64b85315828b",
          "headline": "Nvidia, Broadcom은 AI 붐의 32GW 구멍에서 놀랍게도 안전할 수 있다고 Morgan Stanley는 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791226313,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a06d38c2adb48ff3109e7132ee60fa6cf971bad4d2b9885679f1754c197079f0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791384001,
      "signal": "중립·확인 대기",
      "netScore": 1.6,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
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
          "eventId": "9bc9eb6465db4a291b39",
          "headline": "Qualcomm vs. Taiwan Semiconductor Manufacturing: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791384001,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cfa281f92a19ff0d80c4fd6db58894877bac7ecd443240e4dbe9dcd9aea5354d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1a5b06a6f596ea76f15c",
          "headline": "Qualcomm Government Technologies와 OKSI, OMNISCIENCE Autonomy 소프트웨어 포트폴리오 배포를 위한 협력 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791382020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ae06994573f1c03d77f10d9790592b51de566016288b909184eb8e7536a6dd3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "자동차 고객·설계 채택 확대 가능성"
        },
        {
          "eventId": "d9a282036434c6e54f04",
          "headline": "Qualcomm(QCOM) 주식은 로열티 분쟁 및 라이센스 거래에서 완전히 가치 있는 것으로 보입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791375404,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ee41fb91705cf3f40f5fefe523db4cf4b816adabb2d9211b4bbf68413ff6aa6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "981a005e7362ba4fbad5",
          "headline": "예측: AI가 엣지로 이동함에 따라 현재 Qualcomm에 대한 1,000달러 투자는 2030년까지 이만큼 가치가 있을 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791350400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e58d65d1423a1178a04c2adad3c63eb77a21eaf10a32d4c8565a983da49c134",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "42d89f9cd2ef4eb9fdb8",
          "headline": "Qualcomm의 AI 인프라 중심점은 과소평가되었습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791313440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3dc0a82d970859f99bf341e6ca85ef48003b1f4234ea9632f51f35f718266a5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "802591f84846fdd33845",
          "headline": "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 4조 7500억 달러로 증가했습니다. John Ternus가 이끄는 Apple의 다음 장에 베팅할 때 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791306720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec6f881fc469376cf38571cf8493b05b57d9365b22e179702e1a1c853e21e423",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "ec343632477a3019f99f",
          "headline": "임베디드 시스템 - 글로벌 전략 비즈니스 보고서: Intel, Qualcomm, NXP Semiconductors 및 STMicroelectronics가 AI 및 IoT 파괴를 가속화함에 따라 2032년까지 710억 달러 성장 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b20d74487d12ee8348f9eab77dabff4b7549dba9988236e66b36d49c0c0254a3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cb6a4f017bd7ce10abbc",
          "headline": "22%: Apple(AAPL) 주주에게 가장 중요한 숫자",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791285600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=335897208476f1904381823ddc2b672d59e451c9f59bd4da898e42dd370fdd78",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "5d6bd0a3faf782acd42a",
          "headline": "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791238172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b05235329873b3a6aefc1263a0519dcf558fad2478525d7f31f7e0d1584bf58",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2d21e878da086d0d36cd",
          "headline": "미국 전기차 판매 감소에도 퀄컴은 성장할 수 있다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791233134,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc7cdf66c391d20c1e89aa767f51eb7ad4f7c7c0036dbc06e1dcc855f813c302",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "290b082475b442d447fb",
          "headline": "퀄컴, 라이선스 수익 하락으로 화웨이와 첫 5G 특허 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791213408,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a9691b9042a02e35f5dc4356bc9841e8a8535bb46aaf476a9694e6a51cb88dc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "57b211f459d8496795b2",
          "headline": "Arm, AI 야망으로 인해 고객이 십자선에 놓이면서 Qualcomm 법원 싸움 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791209526,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da6745a4ebabd9dae9185a6d53d1cfab0bb6fba270de8180239296b44609312f",
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
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791209526,
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
          "eventId": "57b211f459d8496795b2",
          "headline": "Arm, AI 야망으로 인해 고객이 십자선에 놓이면서 Qualcomm 법원 싸움 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791209526,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da6745a4ebabd9dae9185a6d53d1cfab0bb6fba270de8180239296b44609312f",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791362765,
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
          "score": 1.22,
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
          "eventId": "9c3d98db1ed7f9d5e70c",
          "headline": "Marvell은 장기 목표를 높이기 위한 최신 AI 인프라 플레이입니다. Dell, HPE, CoreWeave 및 Broadcom을 비교하는 방법은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791362765,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af6fbc5888392e83d3d6f54015c51f3f80684903010c01b7637c24f966eb344c",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c7000db9579c83ee080e",
          "headline": "Marvell은 현재 2031 회계연도까지 연간 매출이 최대 900억 달러에 이를 것으로 보고 있습니다. 칩 주식을 매수해야 하는 이유는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791360181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9e978c83fee70f860224c86dbe17f78ceff1c236c2915ff0efbff0246b64b73",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b25f2f4e68704354c888",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "19abe792ce249c71ec7f",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c6aff69e09eaa91eb95d",
          "headline": "Marvell, 투자자 데이에서 2031 회계연도 매출 목표 상향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791316497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3bb6e969e746963ce54baac0849b1c470c4ae77a71a436cc245c61ea1f5db5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6cd7e1aad302a0a582cc",
          "headline": "AMD vs. Marvell 기술: 2026년에는 어느 AI 칩 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791314401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac6bfc335dfc3d4897ae8bd77e8ebfe7355b99e732688e3608ac1b0de4e44f64",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회"
        },
        {
          "eventId": "8b08b759d63369328e58",
          "headline": "Broadcom 주식이 화요일 아침에 폭등한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791309326,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b6e22575b44214c7a84d1f649aa08992a450a88b1de736837200208a6530b3fe",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ef18a9c38901a02cf117",
          "headline": "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 급격한 10월 랠리 이후 시판 전 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791277971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa475f9363e423a2f98742f7531b2d0eb385a9a9efddf15069bd64880d0c5bd8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "51055ef8bed01e64776c",
          "headline": "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791257308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7035d6f9bfb2b24033b85023fb3a1c8827b1f03fc5c6f4f1eb02cc7d64be976d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6340b9b09fe6b53173fc",
          "headline": "VST 주식 4% 추가: 미국 에너지부, Vistra와 42억 달러 규모의 원자력 계약 확인",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791243119,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9dc43a244ecf0aafddc4a3c3429b8ba9e0dccdacb586c760be593e4bbb3c5b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "387f143f8482764cb832",
          "headline": "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791238172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b05235329873b3a6aefc1263a0519dcf558fad2478525d7f31f7e0d1584bf58",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791384058,
      "signal": "우호적 변화",
      "netScore": 6.44,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.38,
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
          "eventId": "49bf6acfe31f13d50a8c",
          "headline": "Nvidia는 Microsoft의 Surface Laptop Ultra로 Intel의 320억 달러 규모 PC 사업을 목표로 삼고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791384058,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2275662b8eb44ba209972fa7905d53135cc962f6241e63050bc99ff2bdf7ee4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec282b65cbdad99c5cde",
          "headline": "업데이트: 시장 잡담: Intel은 Terafab 프로젝트에서 Elon Musk와 계속 협력할 것이라고 CEO는 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791366629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0d2419ffb6595924e507ff533d764cd05cf7a72f4dc7cca6a6726984ec0cdbe",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b8f26b776fec0b319cb5",
          "headline": "INTC 주가 밤새 상승: CEO, Intel이 TSMC 파트너십 버즈 속에서 Musk의 Terafab과 계속 협력할 것이라고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791358948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30ac265eba83cf2626b49c5e9f3f5cffb3032418259c0612eb179e252aaa8a48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d18c919449d6b4d7440a",
          "headline": "Applied Materials와 Nvidia: 인공지능 기업의 수익 추세가 보여주는 것",
          "eventLabel": "실적 발표",
          "publishedAt": 1791331619,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09768827e4a0c77ffadf1adb7e31499366f1ec3a328766e280bfabd8d31dc036",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9952b85779fd4bbca42",
          "headline": "Nvidia가 지원하는 클라우드 컴퓨팅 회사 Lambda는 IPO를 앞두고 최종 라운드에서 40억 달러를 모금할 것으로 보입니다: 보고서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791313674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a950b12175464e362e017872d96e02cf8657a0edfaafc0ae8f32b5f8be53e41",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec343632477a3019f99f",
          "headline": "임베디드 시스템 - 글로벌 전략 비즈니스 보고서: Intel, Qualcomm, NXP Semiconductors 및 STMicroelectronics가 AI 및 IoT 파괴를 가속화함에 따라 2032년까지 710억 달러 성장 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b20d74487d12ee8348f9eab77dabff4b7549dba9988236e66b36d49c0c0254a3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e18a93f6ef2968b6bc18",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 칩 주식을 1개만 사고 보유할 수 있다면 이 주식이 될 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791300900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f33a6af72c9567f9e0743bc2124c14d5b16042fb058ea6502e53ccb09e538fc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "81a0d52e5cebfa2fab89",
          "headline": "어플라이드 머티어리얼즈와 인텔, AI 기반 컴퓨팅을 위한 칩 제조 혁신 가속화를 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791291600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a655c1feb080a90a0f88856784fb390c4e0a4707bfd075f4051ca0211c5db40",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "32676b5139be9522ea2a",
          "headline": "어플라이드 머티어리얼즈와 인텔, 트랜지스터, 인터커넥트, 패키징 기술을 위한 칩 제조 혁신 개발을 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791277324,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b80361cecafd3b0980c83f0f7e48bfc62790b9466f9fce5b1721ac5952dcce61",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9fcdbe782dff7b321167",
          "headline": "나스닥, 다우 선물이 프리마켓 상승하는 이유는 무엇입니까? SPCX, NVDA, CEG, AMD, ORCL, NOK 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791275977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b2690aaa98e03f5a2f2511a4b46b97fd79dfffb05f92ff936c81ada02f72b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d514c369fc1cc1ff1206",
          "headline": "Advanced Micro Devices vs. Intel: 2026년에는 어떤 반도체 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791232789,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33b8d9bb9c2dc48e016820ab0d3f668e5c726eb9bbd9b6e80ba979c8aca90b38",
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
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791384001,
      "signal": "주의 강화",
      "netScore": -3.5,
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
          "score": -3.15,
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
          "eventId": "9bc9eb6465db4a291b39",
          "headline": "Qualcomm vs. Taiwan Semiconductor Manufacturing: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791384001,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cfa281f92a19ff0d80c4fd6db58894877bac7ecd443240e4dbe9dcd9aea5354d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b8f26b776fec0b319cb5",
          "headline": "INTC 주가 밤새 상승: CEO, Intel이 TSMC 파트너십 버즈 속에서 Musk의 Terafab과 계속 협력할 것이라고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791358948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30ac265eba83cf2626b49c5e9f3f5cffb3032418259c0612eb179e252aaa8a48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e18a93f6ef2968b6bc18",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 칩 주식을 1개만 사고 보유할 수 있다면 이 주식이 될 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791300900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f33a6af72c9567f9e0743bc2124c14d5b16042fb058ea6502e53ccb09e538fc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5696afeb82bff02403db",
          "headline": "Nvidia vs. Taiwan Semiconductor Manufacturing: 2026년에는 어떤 기술 주식을 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791245034,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c457f426c0c1dd3ca206841b88bbc4fcdb3237318871a4da216a6e0f18e13700",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "07ca49a0c2939af401dc",
          "headline": "Elon Musk는 TSMC와 Terafab 대화를 확인했습니다. 인텔은 유일한 칩 파트너로 선정되었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791237421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa7639a3c3a678974d5c11023c41de02bbca0849f0cd6e88e4114867505ad50e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0f2ce2093088bf00e4d0",
          "headline": "인텔, 머스크 신호로 TSMC가 파운드리 복귀에 대한 \"후퇴\"인 Terafab에 합류할 수 있음",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791213596,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bc4f44b9b32cb16abafa2c78c8c27398729d44e3ec373f9001db96b32766a4a",
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
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791291121,
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
          "eventId": "a5d12609aed8c8aa6781",
          "headline": "ASML 대 Nvidia: 2026년에는 어느 AI 반도체 주식이 더 나은 매수인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791291121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb8967d5822f98a5492de366248d013aff0fe425811a6f0147f719f5f07c3881",
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
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791331619,
      "signal": "우호적 변화",
      "netScore": 4.76,
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
          "score": -1.05,
          "level": "주의"
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
          "eventId": "d18c919449d6b4d7440a",
          "headline": "Applied Materials와 Nvidia: 인공지능 기업의 수익 추세가 보여주는 것",
          "eventLabel": "실적 발표",
          "publishedAt": 1791331619,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09768827e4a0c77ffadf1adb7e31499366f1ec3a328766e280bfabd8d31dc036",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "67fec3579c380b9cf5e8",
          "headline": "Applied Materials vs. Nvidia: 2026년에는 어떤 칩 주식을 구매하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791303602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90bebc3cbc67f1096fd2ecde167735fc1614a5ce197356e38efb3d3ad8554904",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "08ae54924121fb348071",
          "headline": "Applied Materials(AMAT)는 새로운 AI 칩 메모리 및 패키징 파트너십 발표 후 11.4% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791295527,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=851222c823fb00da5a3c24e852e31775b7238613930297191a3a3e21ee440a72",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "81a0d52e5cebfa2fab89",
          "headline": "어플라이드 머티어리얼즈와 인텔, AI 기반 컴퓨팅을 위한 칩 제조 혁신 가속화를 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791291600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a655c1feb080a90a0f88856784fb390c4e0a4707bfd075f4051ca0211c5db40",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32676b5139be9522ea2a",
          "headline": "어플라이드 머티어리얼즈와 인텔, 트랜지스터, 인터커넥트, 패키징 기술을 위한 칩 제조 혁신 개발을 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791277324,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b80361cecafd3b0980c83f0f7e48bfc62790b9466f9fce5b1721ac5952dcce61",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1791403203.9883335,
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
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791324049,
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
          "eventId": "c171f9bc00127e05ecdc",
          "headline": "Jim Cramer는 KLAC 없이는 칩 부족이 \"해결될 수 없다\"고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791324049,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da91be182cb3afc867657f5908d2a8761c57187e1cbf5c9d1e563dc9773ce7af",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "4bfab5815be5875a4a0b",
          "headline": "KLA의 공급 제약이 완화될 것으로 예상되며 주요 로직 혼합이 순풍이 될 것이라고 Morgan Stanley가 밝혔습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791212628,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b4eddced9423510910075ecf94903587196f895bc8050fe99b04164c722f919",
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
    "MU": {
      "ticker": "MU",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791388480,
      "signal": "우호적 변화",
      "netScore": 7.82,
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
          "eventId": "062490ec287877913a16",
          "headline": "부족한 메모리 공급이 더 부드러운 기술 테이프를 앞지르면서 SanDisk와 Micron은 3% 상승합니다. Western Digital의 지연",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791388480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c87f8592ab809016c8fd5f391d659fa73c3c25b6f5a676a4991c59429fbb3665",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b6559c29865c21d298fd",
          "headline": "Marvell CEO, 300억 달러 규모의 맞춤형 칩 목표는 '인상이 아니다' - 1조 달러 가치 평가 가능성 확인",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791387400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc97d64f9b1b636151dc368a51178cfd3e988218a535dc7837ae0a88d9bb2883",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "68482752d8041194abbf",
          "headline": "Nvidia 주식: 이 스프레드 전략으로 AI 칩 제조업체의 움직임을 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791387093,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=79d09c9fd6db99d40ba9b6a0ff42cb84ab7414e5d10e1e69e551cf41646f443e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "eb3a146d2a222187a9f6",
          "headline": "Alphabet(GOOGL), AI 데이터 센터를 위한 43억 달러 규모의 원자력 계약 체결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791385904,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62fbb9f525fdc2c330dcc753a0401a4ec39ecb2308966fd9da489b3461bb3189",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "104305e14954724e067c",
          "headline": "Google DeepMind와 Meta가 Biohub의 18억 달러 규모 AI 생물학 추진에 동참",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791385531,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ba0ab646d43c8ec3e24544337697beb023b6c309360c8d30bfc59463f75baa6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2b769338b093462aad33",
          "headline": "HPE 주가는 기업 AI용 AMD 기반 서버 4대를 추가한 후 사상 최고치를 기록했습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791384331,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=892a3cc04a45b49f723a3af655b85260916407ce3135b5eb30abd40ab71cd97c",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "49bf6acfe31f13d50a8c",
          "headline": "Nvidia는 Microsoft의 Surface Laptop Ultra로 Intel의 320억 달러 규모 PC 사업을 목표로 삼고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791384058,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2275662b8eb44ba209972fa7905d53135cc962f6241e63050bc99ff2bdf7ee4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e091569aff3b99e54a91",
          "headline": "메타의 AI 투자 가속화로 마이크론 이익 급등",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791383760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=14f35308ada88156fab0e6bb862f953397030ea96a1ed1be0ce24e01cbdb291a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "06e4322688fb3bf77272",
          "headline": "억만장자 Ken Fisher가 GE Vernova(GEV)에 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791378014,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a43fa9375b655bf1ac7211e3da5caa285bf3d63de9de4f6259c7ac8758d30ac",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "3502ee280e457e368476",
          "headline": "특허 거래 및 대만 파업 투표 후 마이크론 테크놀로지(MU)는 어떤 상황에 직면하게 됩니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791364734,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74c065b818eaf05722c973543ea8c29f35cafaead378c5c6de5c4735f24b4f52",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ee739e49c20dcbacd7b2",
          "headline": "Jim Cramer는 Microsoft(MSFT)의 AI 투자가 마침내 성과를 거두었다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791364045,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d498f9ea2b813b6c71d2b717266b6a90cca62d865c717ac5b34a33a5e308a39",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9c3d98db1ed7f9d5e70c",
          "headline": "Marvell은 장기 목표를 높이기 위한 최신 AI 인프라 플레이입니다. Dell, HPE, CoreWeave 및 Broadcom을 비교하는 방법은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791362765,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af6fbc5888392e83d3d6f54015c51f3f80684903010c01b7637c24f966eb344c",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 35,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791388480,
      "signal": "중립·확인 대기",
      "netScore": 0.63,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "062490ec287877913a16",
          "headline": "부족한 메모리 공급이 더 부드러운 기술 테이프를 앞지르면서 SanDisk와 Micron은 3% 상승합니다. Western Digital의 지연",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791388480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c87f8592ab809016c8fd5f391d659fa73c3c25b6f5a676a4991c59429fbb3665",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "edf247c771607f027085",
          "headline": "AI 주식 마이크론(Micron)과 샌디스크(Sandisk)는 지난해 460%, 1,190% 상승했다. 역사는 이런 일이 다음에 일어날 것이라고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791364082,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f04c9d45e8f5e5c657cc686d2d31ef83f328ba84635c0dc255b02b5dd2b6afd7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e3007994e6041ecde782",
          "headline": "SK하이닉스, 수익 4% 하락 골드만삭스가 재조정을 선호한다고 말하기 전 주의; SanDisk는 2% 하락, Micron은 확고히 유지",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791305979,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=547005e71eff3008bc34ae5604e43da34dbc21f23cd0c5d0ae70215641ff6138",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ef18a9c38901a02cf117",
          "headline": "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 급격한 10월 랠리 이후 시판 전 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791277971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa475f9363e423a2f98742f7531b2d0eb385a9a9efddf15069bd64880d0c5bd8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9d1079a5e3775f8543f7",
          "headline": "Sandisk: 고객 자금이 계약 붐을 따라가고 있습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791261646,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8028cecc9c19b3e0ba565f7bf9d1e252d183f6ef91dc6bfc8e9ae564a321aeff",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "77b9f16834cb0d9c2db9",
          "headline": "메모리 수요가 2030년까지 유지된다면 Sandisk 주식의 10,000달러 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791239700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd8e7c904ebcd38461a7f1cb6abee974bb641ffb1ff2346a56dd7193b826a37e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d177312e9c03b832d748",
          "headline": "Sandisk 주식의 가치가 12개월 안에 두 배로 오를 수 있을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791223201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02bb8be8aa9d7627365708d8119d777d3652adb8f7cbaa711d613ae6e9efe1cb",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791388480,
      "signal": "주의 강화",
      "netScore": -6.65,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "score": -4.9,
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
          "eventId": "062490ec287877913a16",
          "headline": "부족한 메모리 공급이 더 부드러운 기술 테이프를 앞지르면서 SanDisk와 Micron은 3% 상승합니다. Western Digital의 지연",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791388480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c87f8592ab809016c8fd5f391d659fa73c3c25b6f5a676a4991c59429fbb3665",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9c3d98db1ed7f9d5e70c",
          "headline": "Marvell은 장기 목표를 높이기 위한 최신 AI 인프라 플레이입니다. Dell, HPE, CoreWeave 및 Broadcom을 비교하는 방법은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791362765,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af6fbc5888392e83d3d6f54015c51f3f80684903010c01b7637c24f966eb344c",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b8f26b776fec0b319cb5",
          "headline": "INTC 주가 밤새 상승: CEO, Intel이 TSMC 파트너십 버즈 속에서 Musk의 Terafab과 계속 협력할 것이라고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791358948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30ac265eba83cf2626b49c5e9f3f5cffb3032418259c0612eb179e252aaa8a48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "250b56577648e8b7282e",
          "headline": "AI가 당신의 직업을 대신할 것인가? 마이크로소프트의 AI 책임자는 이제 인간 작업의 5%만이 위험에 처해 있다는 노벨상 수상자 연구를 지적합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791352078,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc1995fcf4801a8355165a302e93e183d5614c7204dc5c57f3817d3973c9ffd0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "19abe792ce249c71ec7f",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9952b85779fd4bbca42",
          "headline": "Nvidia가 지원하는 클라우드 컴퓨팅 회사 Lambda는 IPO를 앞두고 최종 라운드에서 40억 달러를 모금할 것으로 보입니다: 보고서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791313674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a950b12175464e362e017872d96e02cf8657a0edfaafc0ae8f32b5f8be53e41",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "802591f84846fdd33845",
          "headline": "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 4조 7500억 달러로 증가했습니다. John Ternus가 이끄는 Apple의 다음 장에 베팅할 때 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791306720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec6f881fc469376cf38571cf8493b05b57d9365b22e179702e1a1c853e21e423",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "69ccb1e83bf22dbafc86",
          "headline": "Toshiba의 드라이브 확장이 그룹을 강타함에 따라 Western Digital이 6% 하락했습니다. Seagate는 8% 하락, Micron은 보합세 유지",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791301929,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11074b2fd5407e2ce70b7bff5652619813f1de40dd70c8785403a1e2e28b9b79",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cb6a4f017bd7ce10abbc",
          "headline": "22%: Apple(AAPL) 주주에게 가장 중요한 숫자",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791285600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=335897208476f1904381823ddc2b672d59e451c9f59bd4da898e42dd370fdd78",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "9fcdbe782dff7b321167",
          "headline": "나스닥, 다우 선물이 프리마켓 상승하는 이유는 무엇입니까? SPCX, NVDA, CEG, AMD, ORCL, NOK 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791275977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b2690aaa98e03f5a2f2511a4b46b97fd79dfffb05f92ff936c81ada02f72b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "51055ef8bed01e64776c",
          "headline": "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791257308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7035d6f9bfb2b24033b85023fb3a1c8827b1f03fc5c6f4f1eb02cc7d64be976d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1791403203.9883335,
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
      "updatedAt": 1791403203.9883335,
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
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791294777,
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
          "eventId": "0081a110c95bc9f14506",
          "headline": "Applied Optoelectronics는 6억 달러 규모의 주식 판매 프로그램이 종료되면서 6% 급등; Lumentum이 랠리를 펼치고 Corning Edges가 더 높아졌습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791294777,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51a2738c03f5599ac3dfbc10df735600364f9c8a8485a2f3ce8b1eb23f624af4",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791386700,
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
          "eventId": "e906d3049f1df6f801ea",
          "headline": "GE Vernova 주식은 5년 후 어디에 있을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791386700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3bb5601d2c877697983396c14cce0e3edbb354627a4da91508c0891ba862373",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "06e4322688fb3bf77272",
          "headline": "억만장자 Ken Fisher가 GE Vernova(GEV)에 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791378014,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a43fa9375b655bf1ac7211e3da5caa285bf3d63de9de4f6259c7ac8758d30ac",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791357795,
      "signal": "우호적 변화",
      "netScore": 10,
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
          "eventId": "6dcca3becab40c23c328",
          "headline": "구글, 컨스텔레이션 에너지(Constellation Energy)와 원자력 계약 체결",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791357795,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=133cdde5521581150f3b593a457df6b43ffeec18d3ee2ee6ccc686a4c62e4e9b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a8a25aca777cb7dbe191",
          "headline": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791336834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "703a452876932cddb88a",
          "headline": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791336834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "b25f2f4e68704354c888",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "19abe792ce249c71ec7f",
          "headline": "S&P 500과 Nasdaq 100은 강력한 분기별 수익에 대한 기대가 높아지는 가운데 최고치를 기록했습니다. — CEG, LCID, SPCX, MRVL 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791326129,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=682fd04d3d7589318662fd1cea2c31cda184b5f97c1ee5bc306840484d4455e9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d54cacb18217b8c8c054",
          "headline": "Google 잉크, PJM에서 3.6GW 전력 공급을 위해 Constellation Energy와 거래",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791325476,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3b20800c7109f51107d627a5943713fc3e9d0715721aa94b0c65db2dc4389673",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3ac8a268a4416ea705fc",
          "headline": "Google과 Constellation Energy가 최근 원자력 에너지 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791321086,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4288451f39c9c75ad7c3ca98fb992399fab6327365dc2a010ae6a943da7de9d2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "225c8dcfc22df7d05083",
          "headline": "Constellation Energy, Google 원자력 계약으로 12% 급등 | 닫는 벨",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791318872,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=61d67e58385854d15b3609a1110db516d715884f22b42805531a8d8e97deb2cb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "08dafe9e2ee2aff2d77d",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "917ad067cf1cc10f1530",
          "headline": "구글이 원자력에 43억 달러를 투자한 것은 아마존이 투자한 지 불과 며칠 만에 이루어졌습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791310497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=645fba0295f899f90036130559b5d3476ef36615337a2c0084a3946a3acb24d2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e7d4190a7288623a5223",
          "headline": "구글, 원자력 발전을 위한 Constellation Energy 파업 계약",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791304281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28380b6170d99638d5dc37706d946c6908e0aaa412c188423614957ac393c426",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 23,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791311479,
      "signal": "우호적 변화",
      "netScore": 9.45,
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
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "08dafe9e2ee2aff2d77d",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a6ef8db602d8cafb2ac6",
          "headline": "S&P 500의 Vistra와 Constellation, AI 원자력 거래로 급증",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791299240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18186b767c3a9f684f7a16f6bdaecbe99ba6843b5ad2ed2634d73ac1c2cd7238",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8df3775db4eb51fe8b84",
          "headline": "Constellation Energy는 890MW에 대한 Google Nuclear 거래로 12% 급등했습니다. 비스트라 8% 상승, 탈렌 에너지 7% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791295560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffeac571bad1ba2b1178d656e9dc68ada6313e464ac8f995437899d55fd6bd0f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "51055ef8bed01e64776c",
          "headline": "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791257308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7035d6f9bfb2b24033b85023fb3a1c8827b1f03fc5c6f4f1eb02cc7d64be976d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9822db0049065331c31c",
          "headline": "귀하의 Vistra 주식 논제는 한쪽 끝이 느슨합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791214812,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67fb1a8124e82db40c5bd59645795056cd1d04c7071fce2ddf1c028c083820c3",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1791403203.9883335,
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
      "updatedAt": 1791403203.9883335,
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
      "updatedAt": 1791403203.9883335,
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
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791273300,
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
          "eventId": "3f1c2827c47d2df489ee",
          "headline": "간과된 AI 주식은 Nvidia와 Palantir를 능가할 준비가 되어 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791273300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d391a88a99329ad4bbdb966d4e2921aabe0c88baae31f89d2ccb7824c434058",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791208059,
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
          "eventId": "789d0e1c2acb7a6bc75a",
          "headline": "Baird가 Modine Manufacturing Company(MOD)에 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791208059,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6222c68187b1d151b869710db4e0db9fa7024fb46c3717e01febd82e25e5350",
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
    "STX": {
      "ticker": "STX",
      "updatedAt": 1791403203.9883335,
      "dataAsOf": 1791362765,
      "signal": "주의 강화",
      "netScore": -4.14,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.17,
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
          "score": -3.32,
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
          "eventId": "9c3d98db1ed7f9d5e70c",
          "headline": "Marvell은 장기 목표를 높이기 위한 최신 AI 인프라 플레이입니다. Dell, HPE, CoreWeave 및 Broadcom을 비교하는 방법은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791362765,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af6fbc5888392e83d3d6f54015c51f3f80684903010c01b7637c24f966eb344c",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b8f26b776fec0b319cb5",
          "headline": "INTC 주가 밤새 상승: CEO, Intel이 TSMC 파트너십 버즈 속에서 Musk의 Terafab과 계속 협력할 것이라고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791358948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30ac265eba83cf2626b49c5e9f3f5cffb3032418259c0612eb179e252aaa8a48",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "250b56577648e8b7282e",
          "headline": "AI가 당신의 직업을 대신할 것인가? 마이크로소프트의 AI 책임자는 이제 인간 작업의 5%만이 위험에 처해 있다는 노벨상 수상자 연구를 지적합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791352078,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc1995fcf4801a8355165a302e93e183d5614c7204dc5c57f3817d3973c9ffd0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a8a25aca777cb7dbe191",
          "headline": "원자력 무역은 바닥을 보았는가? Jan Van Eck가 Constellation-Google 거래에서 본 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791336834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01fcf0da6b91e7d306f8b7d7bd1b00c046868352f17b8e75be3557bedf43387d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "46b70cbaa3dec7315439",
          "headline": "Seagate Technology Holdings(STX) 주식은 영업시간 이후 추세를 보이고 있습니다. 그 이유는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791331108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2afa5789f4380fedd695fdd1b0bea8a0e264a8fcf3e7faa4dba14c0a12866ed2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "69ccb1e83bf22dbafc86",
          "headline": "Toshiba의 드라이브 확장이 그룹을 강타함에 따라 Western Digital이 6% 하락했습니다. Seagate는 8% 하락, Micron은 보합세 유지",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791301929,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11074b2fd5407e2ce70b7bff5652619813f1de40dd70c8785403a1e2e28b9b79",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "45a597627af7fda86b21",
          "headline": "Seagate는 AI의 가장 중요한 트렌드 중 하나를 타고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791223255,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74056ae461c3e419216192b1fd6ccaf73d94e1491903b2caabca93bc71f9dd39",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "98f503f0aaa51b7e09c0",
          "headline": "Seagate는 주식이 소진되기 전에 무엇을 말했습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791216105,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0fadcbbe64b7208e7b5fc68f253b8805960dbaef966c0b0e36135bd500a5dae",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1791403203.9883335,
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
      "updatedAt": 1791403203.9883335,
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
      "updatedAt": 1791403203.9883335,
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
