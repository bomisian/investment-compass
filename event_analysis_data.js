// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1793742239.8988407,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793726163,
      "signal": "우호적 변화",
      "netScore": 5.24,
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
          "eventId": "c3691dcf8dc8c4e0be30",
          "headline": "탑 VC 경고: “감가상각이 타격을 입기 시작할 것” Microsoft, Google, Meta. 상황이 나빠지는 곳은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793726163,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f85e001602cc30117491a55bc5fda642ddad5d5851cc6b0aee6b28cd24e4d78",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4fd6ad901b9818a0e41d",
          "headline": "Microsoft Corporation(MSFT), AI 수요가 공급을 초과함에 따라 강력한 Azure 성장 제공",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793650347,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d37eb310407db3b01bacc0dc9b6f6d242cc2958a1f35954845ee95ddda3534ba",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "804ccabe3d11a2a738a0",
          "headline": "Apple 대 Microsoft: 마진 확장은 Apple의 엄청난 이점입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793634348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a4725095f49094347345b833b78d274f73d99d9a5d44dccbdcca29b269f52fb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1885180449cefe2e3686",
          "headline": "AI 채권 자금 조달로 Microsoft(MSFT) 투자 사례가 바뀔 수 있음",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793593762,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b126d85c6c4af73f830c5d51abc001931c45e0bb6a0a3b6bd353d90b2ae410ed",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccec5def946c55f8bf32",
          "headline": "INTC, MSFT, META, DASH, VZ: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793584440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e4a503fd35197e2554c09236d3e68c9931e1a00eaa266c3dcf3ac5e8fc2cf315",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793726163,
      "signal": "중립·확인 대기",
      "netScore": -1.62,
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
          "eventId": "c3691dcf8dc8c4e0be30",
          "headline": "탑 VC 경고: “감가상각이 타격을 입기 시작할 것” Microsoft, Google, Meta. 상황이 나빠지는 곳은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793726163,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f85e001602cc30117491a55bc5fda642ddad5d5851cc6b0aee6b28cd24e4d78",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fe639f16728099aac886",
          "headline": "브래드 거스트너(Brad Gerstner)는 인류학이 “가스를 밟는 것”이라고 말합니다. Amazon과 Google이 연료를 판매합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793724661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06a63f419b81000c5869f94352c3f984081f4dc385dfc73537cfd12333a81174",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "475ac0cc76ed2ac7b5cf",
          "headline": "Google 모기업, Goldman을 통해 15억 달러 규모의 선불 에너지 거래 계획",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793722240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=07a6a69cb10f305c24bb2ae8cc1b40dd0f0f7487630c1a8cafc011e50a15e92e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "cc5d7380b697223abc84",
          "headline": "Alphabet: 광고에서는 Meta가 승리하지만 Google의 AI Cloud가 더 수익성이 높습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793681690,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec3048848409c77cf4d27a3e67c9a502cd318495aff426b7763c34cf5956b3dd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "772e2fd0b1e2be57df7b",
          "headline": "GOOGL Q3 심층 분석: AI 투자가 매출 성장을 주도하지만 이익은 기대에 미치지 못합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d275b182fabb5d961c47402220b945d98910d263c580dffd511e5a26b95af21",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "542018a89923f61335c2",
          "headline": "메타와 알파벳은 4분기 Capex에 대한 심각한 시장 압력에 직면",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793641514,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c2f306d5cfe84a0cd0c84a508c701f860ecc01d35722938c85810e8f114ea4b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "de7357349234f9806d1c",
          "headline": "알파벳 하루 만에 5000억 달러 손실 기록. 지금이 매수 기회인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793640831,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e290aadb954f352639d3d0ed27fbb786c536477756b0dabc496c18f858bc35f0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "90e4cb22c6231543adc1",
          "headline": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1793591953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
          "factorChanges": {
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
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793725515,
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
          "eventId": "3e901379add4de7ba2e0",
          "headline": "업데이트: Apple, Amazon, 스페인 규제 기관의 제재 절차에 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793725515,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ade3445aac4fe809b1ec9dab8af83dd3e57a1c37e7b2df5c6385493e8c1980c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fe639f16728099aac886",
          "headline": "브래드 거스트너(Brad Gerstner)는 인류학이 “가스를 밟는 것”이라고 말합니다. Amazon과 Google이 연료를 판매합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793724661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06a63f419b81000c5869f94352c3f984081f4dc385dfc73537cfd12333a81174",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "722cb5768ca816f8db5a",
          "headline": "아마존, 저렴한 추수감사절 식사 상품 출시",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793721600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9b478eee2ca69822ad074fa8195b74e797716f68886183b9a00fb77cc9850ad",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d1e0253cbb5b49e6ab4e",
          "headline": "Amazon CEO Andy Jassy는 AMZN 주가가 6개월 만에 7% 하락함에 따라 투자자들이 소매업에서 '조금 자고 있다'고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fad852c244f18c65327d7fb2c1efa069de2016531ab01f215f15afab94c04872",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "33c6e088e4cdbc3e4a59",
          "headline": "아마존 대 알리바바: 두 개의 전자상거래 거대 기업, 큰 가치 격차, 2027년에는 어느 쪽이 더 많은 상승 여력을 제공할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793656202,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=664ecd08f7bccf4f69c164cd13a04ab092240e95f0c835a8bb93fcaa87d46e37",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7ce07cb85e5815b2615a",
          "headline": "구글의 급격한 하락, 아마존 주식은 AI 시장을 나타내지 않습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793655257,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6619427fcf00eedc43461dacd7ed65a62f5e06cea25bc7a6b0fbf3b504d50d2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ff29e520199f7581e30",
          "headline": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793591953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "90e4cb22c6231543adc1",
          "headline": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1793591953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
          "factorChanges": {
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
    "META": {
      "ticker": "META",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793732640,
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
          "score": -0.87,
          "level": "중립"
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
          "eventId": "0ad9381010fb20c09697",
          "headline": "이튼은 한 달 만에 16% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793732640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=93fcd4d8f0385f2d7ae8774b30141a77e90cfef2b437d1430a6501caaf7b7e13",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a44f15568b4a72876894",
          "headline": "투자자들은 메타가 최선의 매수라고 말하고 2030년까지 주식을 보유하기 시작했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793727925,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e40fc9ddfc3c4589220442b5e6652482735cca783db5283bd4abc46cef1b3d17",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c3691dcf8dc8c4e0be30",
          "headline": "탑 VC 경고: “감가상각이 타격을 입기 시작할 것” Microsoft, Google, Meta. 상황이 나빠지는 곳은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793726163,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f85e001602cc30117491a55bc5fda642ddad5d5851cc6b0aee6b28cd24e4d78",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cc5d7380b697223abc84",
          "headline": "Alphabet: 광고에서는 Meta가 승리하지만 Google의 AI Cloud가 더 수익성이 높습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793681690,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec3048848409c77cf4d27a3e67c9a502cd318495aff426b7763c34cf5956b3dd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e5b39a9cb95a447f2b23",
          "headline": "S&P 500, Nasdaq 하락, Capex 우려로 기술 투자자 장악, 미국-이란 외교 희망보다 중요 — ORCL, META, PLTR, AAPL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9a70de4daf9bfe53dd942cfad843b8cd4eed3f0a808ef7818d3204090d84f3a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5644848037901c04bd62",
          "headline": "Meta는 법적 판단이 계속됨에 따라 중독성에 대한 또 다른 소송을 해결합니다. 그 주식은 하락세를 보였습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793649621,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73b3ee7f4afd4288604b3ef15b0681145a5b9f75c20ede41a9c7c7c29da1cc68",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "542018a89923f61335c2",
          "headline": "메타와 알파벳은 4분기 Capex에 대한 심각한 시장 압력에 직면",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793641514,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c2f306d5cfe84a0cd0c84a508c701f860ecc01d35722938c85810e8f114ea4b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fdae760b0ce210e64541",
          "headline": "META SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526444440/d135326d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793727975,
      "signal": "주의 강화",
      "netScore": -6.92,
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
          "score": -4.02,
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
          "eventId": "8e1382f160a0d7b5f4a8",
          "headline": "Elon Musk의 Tesla와 SpaceX는 OKX-ICE 토큰화된 장소에서 주식을 차단합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793727975,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0bc8996724b1b679ff1302af6294eff6a1848ddc8916086c98b04ace0beba44a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3e901379add4de7ba2e0",
          "headline": "업데이트: Apple, Amazon, 스페인 규제 기관의 제재 절차에 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793725515,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ade3445aac4fe809b1ec9dab8af83dd3e57a1c37e7b2df5c6385493e8c1980c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8b24f308d8b6edae922b",
          "headline": "투자자들이 Apple로 이동하고 NVIDIA 및 Tesla를 매각하고 있습니다. 2026년에 이 주식이 유일한 Magnificent 7 주식으로 뛰어난 성과를 보이는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793704979,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=426301d63039bc669f09a9a98a08126a7ad9b3600e0efdf9c1ba55783f81ec9f",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d1758a863c97ddfe15da",
          "headline": "Apple(AAPL) 2026년 4분기 실적 통화 기록",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793681022,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f959b8415c37ecea9acf7ef42be20335773670b4b0e14066e9cc1d3e17b26fe6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fef9cab88d828a4d1a9c",
          "headline": "아이폰 판매 호조로 메모리 가격 상승으로 애플 공급업체 분할",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793674705,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10e232dea741ead48ae2f5872e9a9b6043646d25fbf787ffb3bc9dea0ce858e0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "e5b39a9cb95a447f2b23",
          "headline": "S&P 500, Nasdaq 하락, Capex 우려로 기술 투자자 장악, 미국-이란 외교 희망보다 중요 — ORCL, META, PLTR, AAPL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9a70de4daf9bfe53dd942cfad843b8cd4eed3f0a808ef7818d3204090d84f3a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "804ccabe3d11a2a738a0",
          "headline": "Apple 대 Microsoft: 마진 확장은 Apple의 엄청난 이점입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793634348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a4725095f49094347345b833b78d274f73d99d9a5d44dccbdcca29b269f52fb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7f973250812fe77e865a",
          "headline": "AAPL SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000026/aapl-20260926.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "a2a9ca16bf69c023b908",
          "headline": "Apple의 새로운 CEO는 칩 비용 상승으로 인해 수익 테스트에 직면해 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793619504,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=defb2bd9b9048b2adaab0dae64499f98e6344ec691cfd19f95d3f636c051f206",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "98ca814c2ecb450267d5",
          "headline": "Stocktwits Tech Watch: Apple과 Palantir가 또 다른 중요한 주에 기술 수입을 시작하고, AMD는 Intel의 경고 이후 칩 논쟁을 해결합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1793608808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96a711f14a98bcc85111e823c97f943286a0b396f40ec01068f0252972a39016",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793727975,
      "signal": "중립·확인 대기",
      "netScore": 1.82,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "8e1382f160a0d7b5f4a8",
          "headline": "Elon Musk의 Tesla와 SpaceX는 OKX-ICE 토큰화된 장소에서 주식을 차단합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793727975,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0bc8996724b1b679ff1302af6294eff6a1848ddc8916086c98b04ace0beba44a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2d025cb8880cebf9efc4",
          "headline": "예측: 160만 대의 로봇으로 Optimus는 \"Tesla의 수익보다 큽니다.\" 머스크는 625배를 본다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793705713,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b2862e9e37859c7bc7076644c6b99fd66abea05aff2e55a6e02515f612b74b3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a833f558f9325ad79a25",
          "headline": "Tesla-SpaceX 합병을 원하시나요? Marvell-Lumentum 거래를 살펴보십시오.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793703300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea9144d060dd9830095aac17e1e097511a9da6e0b12a73cdb053f8c1f4998434",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "c0df407b7897043ab750",
          "headline": "Tesla에는 하늘을 나는 자동차가 있습니다. 이것이 Archer의 비행 \"택시\" 사업에 어떤 의미가 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793658000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f71378d1d883a4132525425a9909d99dcc35e1661cc781af906634ec79fa2b9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f4c007650b0f0e7d9fd2",
          "headline": "Gary Black은 SpaceX 합병 위험에 대해 Tesla 주주들에게 경고합니다: Marvell-Lumentum 거래 반응이 조기 경고를 제공한다고 말합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793644278,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea9d46501fd556757bf9a398b2760f2b36b28f425951ad89fe61ad2d2514afd9",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793704482,
      "signal": "주의 강화",
      "netScore": -6.84,
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
          "score": -1.57,
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
          "eventId": "4e328ff2e178c3d99bba",
          "headline": "MRVL 주가 목표가 절반으로 줄었습니다: Lumentum 거래 후 '재료 역풍', TD Cowen은 다운그레이드라고 말합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793704482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5fdabbf162942e4ba5a81129757e283adbc18f9b6bab02f01de72eb39280912e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7e2cf7053009bc4d5ff1",
          "headline": "ORCL은 200억 달러 규모의 주식 및 채권 제공 가격을 책정한 후 인치 더 높아졌습니다. 신주는 최종 마감 및 50일 평균 할인 가격으로 책정되었습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793683462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51aec1f2ddba8243d671548848b02ff50fb56c78b143a215a8e5feb2a9fa6412",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e5b39a9cb95a447f2b23",
          "headline": "S&P 500, Nasdaq 하락, Capex 우려로 기술 투자자 장악, 미국-이란 외교 희망보다 중요 — ORCL, META, PLTR, AAPL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9a70de4daf9bfe53dd942cfad843b8cd4eed3f0a808ef7818d3204090d84f3a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c4003350755edc2db143",
          "headline": "오라클 주식 급락은 200억 달러 규모의 주식 및 채권 매각 속에서 600억 달러를 넘어섰습니다. 매각이 기회가 될 수 있는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793638786,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=165320faa83d8c95739118514d2d03c13c243ef767179553415f816754158316",
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
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793720114,
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
          "eventId": "e58096996808497bcd1a",
          "headline": "Cresta Voice AI 거래에 초점을 맞춘 Salesforce 주식 3% 하락",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793720114,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd23b32ac7476539c004ea381452d3d9a9fc039a6d77bc5529cd91897fea46f2",
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
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793704482,
      "signal": "주의 강화",
      "netScore": -3.08,
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
          "eventId": "4e328ff2e178c3d99bba",
          "headline": "MRVL 주가 목표가 절반으로 줄었습니다: Lumentum 거래 후 '재료 역풍', TD Cowen은 다운그레이드라고 말합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793704482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5fdabbf162942e4ba5a81129757e283adbc18f9b6bab02f01de72eb39280912e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "12109cf791c9e3c787d8",
          "headline": "Palantir는 신규 계약 성장이 둔화되면서 최고 조회수를 기록했습니다. 주식 가을.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793704050,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=740e997977be08d315be11ae164d0a47b1c9a7c05f88fdfb7709ab4ef8045b67",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "e5b39a9cb95a447f2b23",
          "headline": "S&P 500, Nasdaq 하락, Capex 우려로 기술 투자자 장악, 미국-이란 외교 희망보다 중요 — ORCL, META, PLTR, AAPL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9a70de4daf9bfe53dd942cfad843b8cd4eed3f0a808ef7818d3204090d84f3a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d746edbda425108c45ce",
          "headline": "PLTR SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000048/pltr-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "98ca814c2ecb450267d5",
          "headline": "Stocktwits Tech Watch: Apple과 Palantir가 또 다른 중요한 주에 기술 수입을 시작하고, AMD는 Intel의 경고 이후 칩 논쟁을 해결합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1793608808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96a711f14a98bcc85111e823c97f943286a0b396f40ec01068f0252972a39016",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ff29e520199f7581e30",
          "headline": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793591953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccec5def946c55f8bf32",
          "headline": "INTC, MSFT, META, DASH, VZ: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793584440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e4a503fd35197e2554c09236d3e68c9931e1a00eaa266c3dcf3ac5e8fc2cf315",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793727758,
      "signal": "우호적 변화",
      "netScore": 7.79,
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
          "score": -3.5,
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
          "eventId": "dd37310053522606b994",
          "headline": "나쁜 소식: Nvidia는 거대 모델의 디코드에 대해 \"정말로 어려움을 겪고 있습니다\". 빠른 토큰은 \"3~5배\"를 가져옵니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793727758,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc4787b50655c328ae5215664f884f5b75254fa2c8e5642ac7c6daeb7bdcc178",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d6de0dbd13bd6ad6226d",
          "headline": "50억 달러 규모의 공동 패키지 광학 제품 인수 후 Lumentum 주가 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793725408,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44cc94d11e819a38ccb0298c0caa7c3cfb00c4058cf7f2c464f47581799cc7a1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "f208574fd7cf9d4bbd06",
          "headline": "Oracle은 200억 달러 규모의 주식 및 채권 매각으로 자금 과잉이 해소되면서 6% 상승했습니다. CoreWeave 상승 7%, Microsoft 상승 2%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793724508,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dcebfb06d47c734f3b5996c8d5cbbd6c3578e90848f21a62681ce29cb325385c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "d8b5ce7395ea5c79def8",
          "headline": "Vistra는 Talen 가이드로 5% 증가 2027년 EBITDA는 \"강력한 PJM 기초\"에서 26% 증가",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793724355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c2730ef9e22b9d9da5b6da093b7399626baf2c6d27a83df180a949663c8d375",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "e64c3c036e2d47fa7efa",
          "headline": "Oracle은 200억 달러의 가격 인상으로 5% 반등했습니다. Baird는 \"미리 본 것과 정확히 일치합니다\"라고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793722419,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a1f4e3980f7abff023b6238b95ef68d743d567366ba52a80caaae43d5ec0b71",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "e9501d1a058a7fe690cb",
          "headline": "매각으로 인해 Salesforce가 AI 스타트업에 27억 달러를 지출하는 것을 막지는 못했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793720890,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0562c0d03a434506a2aa1a7334a0a2211499954b1165f63e69088b08e0688c3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "1b0bf086343482ad1428",
          "headline": "오라클, 200억 달러 규모의 AI 자금 조달 움직임",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793719590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d815d8cdb413de3b527f8d20d662d242aed4d5320a82940b383cdd177fb9f72",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2ab6e430b4ef730d1ed4",
          "headline": "글로벌 열 솔루션 시장 보고서 2026: 2030년 규모, 추세 및 예측 | Schneider Electric, Vertiv, Delta Electronics 및 Boyd를 통해 AI 액체 냉각 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793715540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4cea63945cf5be167795fc9b3a3a6e8c0de02ad0be293ce1073dc3a910df0125",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "016bc39b24b4ada7c0a2",
          "headline": "엔비디아, 해외 데이터 센터를 통해 AI 컴퓨팅에 대한 중국의 접근을 제한하는 것으로 알려짐",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793705152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6570864bdef8cc8ed20886932a14d100eb87517ef02e5f878b126205a7af43fa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "74ed24d82625adc247b3",
          "headline": "오라클, AI 인프라 확장 자금으로 200억 달러 규모의 주식 및 채권 제공 발표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793705027,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1cccbcae637f622cf089d219763f15c76deacad5f4fb2fe4513cca9f78d0264",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8b24f308d8b6edae922b",
          "headline": "투자자들이 Apple로 이동하고 NVIDIA 및 Tesla를 매각하고 있습니다. 2026년에 이 주식이 유일한 Magnificent 7 주식으로 뛰어난 성과를 보이는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793704979,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=426301d63039bc669f09a9a98a08126a7ad9b3600e0efdf9c1ba55783f81ec9f",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d1e0253cbb5b49e6ab4e",
          "headline": "Amazon CEO Andy Jassy는 AMZN 주가가 6개월 만에 7% 하락함에 따라 투자자들이 소매업에서 '조금 자고 있다'고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fad852c244f18c65327d7fb2c1efa069de2016531ab01f215f15afab94c04872",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 26,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793725408,
      "signal": "우호적 변화",
      "netScore": 9.09,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
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
          "score": -0.52,
          "level": "중립"
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
          "eventId": "d6de0dbd13bd6ad6226d",
          "headline": "50억 달러 규모의 공동 패키지 광학 제품 인수 후 Lumentum 주가 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793725408,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44cc94d11e819a38ccb0298c0caa7c3cfb00c4058cf7f2c464f47581799cc7a1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f208574fd7cf9d4bbd06",
          "headline": "Oracle은 200억 달러 규모의 주식 및 채권 매각으로 자금 과잉이 해소되면서 6% 상승했습니다. CoreWeave 상승 7%, Microsoft 상승 2%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793724508,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dcebfb06d47c734f3b5996c8d5cbbd6c3578e90848f21a62681ce29cb325385c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "d8b5ce7395ea5c79def8",
          "headline": "Vistra는 Talen 가이드로 5% 증가 2027년 EBITDA는 \"강력한 PJM 기초\"에서 26% 증가",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793724355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c2730ef9e22b9d9da5b6da093b7399626baf2c6d27a83df180a949663c8d375",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e64c3c036e2d47fa7efa",
          "headline": "Oracle은 200억 달러의 가격 인상으로 5% 반등했습니다. Baird는 \"미리 본 것과 정확히 일치합니다\"라고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793722419,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a1f4e3980f7abff023b6238b95ef68d743d567366ba52a80caaae43d5ec0b71",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e9501d1a058a7fe690cb",
          "headline": "매각으로 인해 Salesforce가 AI 스타트업에 27억 달러를 지출하는 것을 막지는 못했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793720890,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0562c0d03a434506a2aa1a7334a0a2211499954b1165f63e69088b08e0688c3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1b0bf086343482ad1428",
          "headline": "오라클, 200억 달러 규모의 AI 자금 조달 움직임",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793719590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d815d8cdb413de3b527f8d20d662d242aed4d5320a82940b383cdd177fb9f72",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "2ab6e430b4ef730d1ed4",
          "headline": "글로벌 열 솔루션 시장 보고서 2026: 2030년 규모, 추세 및 예측 | Schneider Electric, Vertiv, Delta Electronics 및 Boyd를 통해 AI 액체 냉각 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793715540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4cea63945cf5be167795fc9b3a3a6e8c0de02ad0be293ce1073dc3a910df0125",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "74ed24d82625adc247b3",
          "headline": "오라클, AI 인프라 확장 자금으로 200억 달러 규모의 주식 및 채권 제공 발표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793705027,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1cccbcae637f622cf089d219763f15c76deacad5f4fb2fe4513cca9f78d0264",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7e2cf7053009bc4d5ff1",
          "headline": "ORCL은 200억 달러 규모의 주식 및 채권 제공 가격을 책정한 후 인치 더 높아졌습니다. 신주는 최종 마감 및 50일 평균 할인 가격으로 책정되었습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793683462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51aec1f2ddba8243d671548848b02ff50fb56c78b143a215a8e5feb2a9fa6412",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d1e0253cbb5b49e6ab4e",
          "headline": "Amazon CEO Andy Jassy는 AMZN 주가가 6개월 만에 7% 하락함에 따라 투자자들이 소매업에서 '조금 자고 있다'고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fad852c244f18c65327d7fb2c1efa069de2016531ab01f215f15afab94c04872",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "772e2fd0b1e2be57df7b",
          "headline": "GOOGL Q3 심층 분석: AI 투자가 매출 성장을 주도하지만 이익은 기대에 미치지 못합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d275b182fabb5d961c47402220b945d98910d263c580dffd511e5a26b95af21",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "98a6fac26d9989c776b7",
          "headline": "3분기 수익 및 AI 파트너십 업데이트 이전에 AMD 주식이 주목받는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793672110,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a765d74c9732cde7e290d595c32b6bfc7277949b607069c785595cb01917b6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 22,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793724661,
      "signal": "우호적 변화",
      "netScore": 4.89,
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
          "eventId": "fe639f16728099aac886",
          "headline": "브래드 거스트너(Brad Gerstner)는 인류학이 “가스를 밟는 것”이라고 말합니다. Amazon과 Google이 연료를 판매합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793724661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06a63f419b81000c5869f94352c3f984081f4dc385dfc73537cfd12333a81174",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6792bc4eab7e02a7d3dc",
          "headline": "Taiwan Semi 또는 Broadcom: 향후 5년 동안 1개만 소유할 수 있다면 이것일 것입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793722800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a1440f11ac43dad5214040aa4bad66f7f0a6469e56027d0ffb82e413f11c50f8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a2fa0fdf1e102099d00f",
          "headline": "Broadcom의 공급 병목 현상 - 수요가 아님 - 계속해서 투자자에게 할인 제공 계속 구매",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793627119,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6f17a6a0737af0e851780c30e584338b216ea82d55bc510d53980edc7625fe6",
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
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793712100,
      "signal": "중립·확인 대기",
      "netScore": 0.91,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "eventId": "1cc3e01b39023b44bc5e",
          "headline": "인피니언과 퀄컴, 통합 CPU 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793712100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24baa35a194e38ffc177d08899e8c06f00e44cf1c76af0c41299da5ffd4b2bcc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3af99a61e9f6b7df3335",
          "headline": "Qualcomm(QCOM), AI 보조 베팅에서 7억 달러 규모의 Hark 자금 조달 라운드에 참여",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793646556,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74b08479bce20fa35fa2518a827224be02113f8e8ae940911d5579834361032f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a2a9ca16bf69c023b908",
          "headline": "Apple의 새로운 CEO는 칩 비용 상승으로 인해 수익 테스트에 직면해 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793619504,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=defb2bd9b9048b2adaab0dae64499f98e6344ec691cfd19f95d3f636c051f206",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793680739,
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
          "eventId": "f0d4709f2e6210c6ff33",
          "headline": "Arm Holdings 주식이 지난달 29% 하락한 이유",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793680739,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99d29b77a80daf812badc77e5182bd802400341f33c8c87b82595a9ebbf67636",
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
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793722842,
      "signal": "우호적 변화",
      "netScore": 4.08,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 4.72,
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
          "score": -3.67,
          "level": "주의"
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
          "eventId": "cc1faa6e78537f2621ed",
          "headline": "Marvell Technology의 Lumentum 거래 전략적 이점이 위험보다 크다고 RBC는 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793722842,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44c4d6605c8346ab76b7ef3877d0fdf3185bddf45c30f9e3b1fd06ef8862ce2d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "58ce23b779ffd33b13ee",
          "headline": "Coherent는 Fabrinet의 51% 수익 점프로 수익보다 광학 주식이 더 높아져 6% 급등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793719306,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d98470a6184a821d522162cd999c6fa4814307a7ec27de2f6daec572ebfaca3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "eb5978163fbc5d1f8af1",
          "headline": "월스트리트가 Marvell의 1,150억 달러 Lumentum 거래를 좋아하지 않는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793717524,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=323093c501e07f536e2f40672f51c51c34cb85a78f6ef2cde20a477516d85cb3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "676365af1ff69f547c23",
          "headline": "코히런트: Lumentum 거래는 광학 네트워킹 선물입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793704788,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06c007191b95f8c357c19ea2e06caba3a435b027a9e9bcc73501e4fe2731b4b2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a833f558f9325ad79a25",
          "headline": "Tesla-SpaceX 합병을 원하시나요? Marvell-Lumentum 거래를 살펴보십시오.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793703300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea9144d060dd9830095aac17e1e097511a9da6e0b12a73cdb053f8c1f4998434",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "58deb437503bf92b8453",
          "headline": "Marvell은 1,150억 달러 규모의 전체 주식 거래로 Lumentum을 인수하기로 합의했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793700602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a977ffe31f6d254332a1b7aa5c44f7fa45775468d19e9b0b4e376d7f0915ff5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "737dc0da85a12fe2043c",
          "headline": "Nvidia의 Huang은 Marvell-Lumentum Megadeal을 축복했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793675479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ed0cef26615815d727bb64c699632a975d059f5ccd0e2b06f7337a67627b3cf9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4bf9e1a1d1a1460e7678",
          "headline": "Marvell Technology가 Lumentum을 인수했습니다. 시장이 이러한 움직임을 싫어하는 이유는 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793658122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d7065dd1a878d9240fc1cceab0940107f3c8a7fb2e6122894d15fdf1d2032a54",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0fb3263cd8b7679468bc",
          "headline": "오늘, 11월 2일 주식 시장: Marvell, Lumentum의 전체 주식 인수를 1,150억 달러에 발표",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793657180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a4fd718e5788179e26197f3e976c8e5b7230558bb32d9c1e118514b908ee5b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a9413a098b52f5d8c734",
          "headline": "Marvell 주식은 시너지 효과보다 희석을 앞둔 Lumentum 거래로 6.8% 하락했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793645641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57e1155d54d82bd8c5a1539cd4e5ceaa3e233741be0f32f783878805e65b46d4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "f4c007650b0f0e7d9fd2",
          "headline": "Gary Black은 SpaceX 합병 위험에 대해 Tesla 주주들에게 경고합니다: Marvell-Lumentum 거래 반응이 조기 경고를 제공한다고 말합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793644278,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea9d46501fd556757bf9a398b2760f2b36b28f425951ad89fe61ad2d2514afd9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5f4341f3c6e4b3457db4",
          "headline": "Marvell은 1,150억 달러 규모의 전체 주식 거래로 Lumentum을 인수하기로 합의했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793636100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c18454a70f51837d304af0136b6833e1ce2fdcb88367468b37f7e28b7b3c97c0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793720729,
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
          "score": -3.32,
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
          "score": -4.02,
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
          "eventId": "9564502a3174d79ca6f1",
          "headline": "인텔의 현금 흐름 문제는 생각보다 훨씬 더 큽니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793720729,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fcfb3b60f079f927c648c8cc221c0c4b7eb42c956a2fe62b1909cada3a5a1334",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2ef99685657673613107",
          "headline": "인텔: 새로운 좌절로 인해 투자자들은 당연히 실망하게 되었습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793665636,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d7c5dd5a381ff90e7f4380268942ee7c8736e4f6efc9612db8bf9287a25ef889",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7abc9fac2edae1f2c6fc",
          "headline": "인텔(INTC)이 7억 달러 규모의 AI 스타트업 펀딩 라운드에 합류했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d6068f6ec451abcd04366c2084c93622cd908a1232790844f5cbde9a5499bae",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8eb3bbe6961c6a64ea58",
          "headline": "PC에 대한 우려가 지속되면서 AMD는 수익보다 3% 앞섰습니다. Intel 하락 5%, NVIDIA Edge 상승",
          "eventLabel": "실적 발표",
          "publishedAt": 1793641761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4339102276a64e65c6e8a7dd8df94c5b0aece0b6cece66e94cf3d69eaab38b01",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c671cff556d4377dc887",
          "headline": "Arm Holdings는 Intel의 경고로 인해 거의 10% 하락했는데, 이는 옵션이 자체 보고서를 통해 움직일 것으로 예상하는 정도입니다. 11월 4일에 보여줄 내용은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793626004,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fc43b979ab3dd6359dcf02fc6593a9e7cc3ebcc1e757539d5103089a0efef15",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ad75b069f9eadd380482",
          "headline": "Applied Materials는 Besi 지분을 두 배로 늘린 후 Intel의 칩 판매 며칠 만에 7.5% 하락했습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1793624952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d79ba39556c3e1159840c4424ad6c827729d4a5ecfbf08d01b5bd308dfbc4db4",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "77fa4066bb66065db7a4",
          "headline": "ASML은 Intel의 칩 대패로 6% 하락했습니다. CEO \"공급이 수요를 완전히 충족시키지 못할 것\"",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793624546,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f67e4e6fd88cb6a7f4a1759e7f48f8960f9ef024ec5eb9e7367cbf54840265b0",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f7e2a4658d66849aae9d",
          "headline": "인텔 대 대만 반도체: AI 붐은 매우 다른 두 가지 이야기를 전하고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793614802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b21cef3ebc0910c73bbe478c66b8c5fd3cb42c32fbdf81fdf94a6eba2cff37fc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "98ca814c2ecb450267d5",
          "headline": "Stocktwits Tech Watch: Apple과 Palantir가 또 다른 중요한 주에 기술 수입을 시작하고, AMD는 Intel의 경고 이후 칩 논쟁을 해결합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1793608808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96a711f14a98bcc85111e823c97f943286a0b396f40ec01068f0252972a39016",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ff29e520199f7581e30",
          "headline": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793591953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2d03cc21c8b42a1ef360",
          "headline": "인텔 주식 붕괴. 내가 아직도 주식을 사지 않는 이유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793586000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=956076ab1583728d6e1200c99e731f662f42bb7972c39df2fc7393eb33609e0c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccec5def946c55f8bf32",
          "headline": "INTC, MSFT, META, DASH, VZ: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793584440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e4a503fd35197e2554c09236d3e68c9931e1a00eaa266c3dcf3ac5e8fc2cf315",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793722800,
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
          "eventId": "6792bc4eab7e02a7d3dc",
          "headline": "Taiwan Semi 또는 Broadcom: 향후 5년 동안 1개만 소유할 수 있다면 이것일 것입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793722800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a1440f11ac43dad5214040aa4bad66f7f0a6469e56027d0ffb82e413f11c50f8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f7e2a4658d66849aae9d",
          "headline": "인텔 대 대만 반도체: AI 붐은 매우 다른 두 가지 이야기를 전하고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793614802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b21cef3ebc0910c73bbe478c66b8c5fd3cb42c32fbdf81fdf94a6eba2cff37fc",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1793742239.8988407,
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
      "updatedAt": 1793742239.8988407,
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
      "updatedAt": 1793742239.8988407,
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
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793690256,
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
          "eventId": "222c02b9783de350289d",
          "headline": "KLAC Q3 심층 분석: AI와 고급 패키징이 성장을 주도하고 공급망은 여전히 ​​초점을 맞추고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793690256,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f2ba0ce16b932e01f244244083f751f7d2808b4c38f2d2b0393f381b4df0600",
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
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793725408,
      "signal": "우호적 변화",
      "netScore": 8.91,
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
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "d6de0dbd13bd6ad6226d",
          "headline": "50억 달러 규모의 공동 패키지 광학 제품 인수 후 Lumentum 주가 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793725408,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44cc94d11e819a38ccb0298c0caa7c3cfb00c4058cf7f2c464f47581799cc7a1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f208574fd7cf9d4bbd06",
          "headline": "Oracle은 200억 달러 규모의 주식 및 채권 매각으로 자금 과잉이 해소되면서 6% 상승했습니다. CoreWeave 상승 7%, Microsoft 상승 2%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793724508,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dcebfb06d47c734f3b5996c8d5cbbd6c3578e90848f21a62681ce29cb325385c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "d8b5ce7395ea5c79def8",
          "headline": "Vistra는 Talen 가이드로 5% 증가 2027년 EBITDA는 \"강력한 PJM 기초\"에서 26% 증가",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793724355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c2730ef9e22b9d9da5b6da093b7399626baf2c6d27a83df180a949663c8d375",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e64c3c036e2d47fa7efa",
          "headline": "Oracle은 200억 달러의 가격 인상으로 5% 반등했습니다. Baird는 \"미리 본 것과 정확히 일치합니다\"라고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793722419,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a1f4e3980f7abff023b6238b95ef68d743d567366ba52a80caaae43d5ec0b71",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e9501d1a058a7fe690cb",
          "headline": "매각으로 인해 Salesforce가 AI 스타트업에 27억 달러를 지출하는 것을 막지는 못했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793720890,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0562c0d03a434506a2aa1a7334a0a2211499954b1165f63e69088b08e0688c3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "829650b8770d9c4378f6",
          "headline": "기술 거대 기업이 다년간 공급을 확보하기 위해 출격하면서 Micron Tech가 이익을 얻습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793720080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ed61ee7b3066debd9d8f82fd19fa96fa001f896db73520738edbeb6cfe5933d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1b0bf086343482ad1428",
          "headline": "오라클, 200억 달러 규모의 AI 자금 조달 움직임",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793719590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d815d8cdb413de3b527f8d20d662d242aed4d5320a82940b383cdd177fb9f72",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ad63d583169e7d4f0b2c",
          "headline": "GE Vernova는 Trench Group에 90억 달러를 지불하고 있습니다. 전력망이 전력 슈퍼사이클에 중요한 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793715600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c522bd599e99fb7d6cabcdaf80327405db17500ae4cec3498892d307b3478411",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ab6e430b4ef730d1ed4",
          "headline": "글로벌 열 솔루션 시장 보고서 2026: 2030년 규모, 추세 및 예측 | Schneider Electric, Vertiv, Delta Electronics 및 Boyd를 통해 AI 액체 냉각 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793715540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4cea63945cf5be167795fc9b3a3a6e8c0de02ad0be293ce1073dc3a910df0125",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "74ed24d82625adc247b3",
          "headline": "오라클, AI 인프라 확장 자금으로 200억 달러 규모의 주식 및 채권 제공 발표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793705027,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1cccbcae637f622cf089d219763f15c76deacad5f4fb2fe4513cca9f78d0264",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "d1e0253cbb5b49e6ab4e",
          "headline": "Amazon CEO Andy Jassy는 AMZN 주가가 6개월 만에 7% 하락함에 따라 투자자들이 소매업에서 '조금 자고 있다'고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fad852c244f18c65327d7fb2c1efa069de2016531ab01f215f15afab94c04872",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "772e2fd0b1e2be57df7b",
          "headline": "GOOGL Q3 심층 분석: AI 투자가 매출 성장을 주도하지만 이익은 기대에 미치지 못합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d275b182fabb5d961c47402220b945d98910d263c580dffd511e5a26b95af21",
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
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793727943,
      "signal": "중립·확인 대기",
      "netScore": -1.39,
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
          "eventId": "a0f28bdd42053b0d5a7b",
          "headline": "AMD와 Sandisk는 모두 엄청난 가격 변동을 겪었지만 Sandisk는 절대적으로 더 위험합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793727943,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f232046bf766fa74d14e145ed59d6412323ff0a3ce62c4ce7e6c9e2978fa2927",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec0d1ce971aac15a2a91",
          "headline": "마이크론이 아닙니다. 샌디스크가 아닙니다. 이 AI 메모리 주식은 월스트리트가 내려다보는 곳 중 하나입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793704140,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a3bbf5afb8d688875e53120332d4566485da910cbad46ab4bd7714e8ec5291c1",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fedb5b3e97ea08f975db",
          "headline": "Credo vs. Sandisk: 2027년에는 어느 주식을 사는 것이 더 나을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793672402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01853868b5e5589bf8aa7ff801533bd8886e585e021b635e3d1c331d61df6433",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1ef303b816a6230b960f",
          "headline": "Sandisk(SNDK), AI 자금 풀기 테스트 부문 신뢰도에 따라 메모리 복구 표시",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793639453,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d99be5412c581ba37c5d28b60d3e61a7090519db5fd6f7e1f0cc20a6a1de39b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c49e39e9286f97df5742",
          "headline": "Sandisk: 바닥을 기다려라(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793577920,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e9d4048d12289b6476b45b2cebce9f69100065b0b3968ed5b0ccf5898dc22f0",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793619504,
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
          "eventId": "a2a9ca16bf69c023b908",
          "headline": "Apple의 새로운 CEO는 칩 비용 상승으로 인해 수익 테스트에 직면해 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793619504,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=defb2bd9b9048b2adaab0dae64499f98e6344ec691cfd19f95d3f636c051f206",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1793742239.8988407,
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
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793719306,
      "signal": "주의 강화",
      "netScore": -4.48,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "eventId": "58ce23b779ffd33b13ee",
          "headline": "Coherent는 Fabrinet의 51% 수익 점프로 수익보다 광학 주식이 더 높아져 6% 급등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793719306,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d98470a6184a821d522162cd999c6fa4814307a7ec27de2f6daec572ebfaca3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "676365af1ff69f547c23",
          "headline": "코히런트: Lumentum 거래는 광학 네트워킹 선물입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793704788,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06c007191b95f8c357c19ea2e06caba3a435b027a9e9bcc73501e4fe2731b4b2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5cee5893be9a47acbdbf",
          "headline": "Coherent: AI 프리미엄은 사라졌지만 수익은 그렇지 않습니다(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793657179,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=234db8c416317ee6768520ffe583b1d469ccd48b8c2c15e082c56ba96885f21d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0f91264d79c8938d5fa4",
          "headline": "COHR 주식은 Marvell의 1,150억 달러 Lumentum 거래로 '희귀한 AI 광학의 가치'를 강조하면서 업그레이드됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793634606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=719c8dbbdf4f4e3bc3986ec3982fbc8d91732dcbdbd2ddc969d142cf328be7f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cfce5182cf44d181e133",
          "headline": "Marvell 슬라이드 3%, Lumentum 6% 하락, 1,150억 달러 규모의 전체 주식 합병 거래; 일관된 등반 2%",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793627606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8182ed48e431f44c442203bca9424f06d0174d7b421b1ee2dd155cc82f62cb4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cd44d79b0e0468c31796",
          "headline": "코히런트: 작년 가격으로 축적할 수 있는 절호의 기회(1분기 미리보기)",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793608031,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dea73d32974f160dbd4eb57a108916681632ba5e0360a7c108ce96fc946de201",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793725408,
      "signal": "우호적 변화",
      "netScore": 3.63,
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
          "score": -4.02,
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
          "eventId": "d6de0dbd13bd6ad6226d",
          "headline": "50억 달러 규모의 공동 패키지 광학 제품 인수 후 Lumentum 주가 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793725408,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44cc94d11e819a38ccb0298c0caa7c3cfb00c4058cf7f2c464f47581799cc7a1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cc1faa6e78537f2621ed",
          "headline": "Marvell Technology의 Lumentum 거래 전략적 이점이 위험보다 크다고 RBC는 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793722842,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44c4d6605c8346ab76b7ef3877d0fdf3185bddf45c30f9e3b1fd06ef8862ce2d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "80601cb0e0709faf42c1",
          "headline": "광학주 반등으로 수익보다 6% 앞선 일관된 랠리; Applied Optoelectronics는 5% 상승하고 Lumentum은 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793721079,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8d139848da8b666dc920b34d4f2524c87ccdd4a279a6512d2fdf4e61f01b768",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "58ce23b779ffd33b13ee",
          "headline": "Coherent는 Fabrinet의 51% 수익 점프로 수익보다 광학 주식이 더 높아져 6% 급등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793719306,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d98470a6184a821d522162cd999c6fa4814307a7ec27de2f6daec572ebfaca3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "eb5978163fbc5d1f8af1",
          "headline": "월스트리트가 Marvell의 1,150억 달러 Lumentum 거래를 좋아하지 않는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793717524,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=323093c501e07f536e2f40672f51c51c34cb85a78f6ef2cde20a477516d85cb3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "676365af1ff69f547c23",
          "headline": "코히런트: Lumentum 거래는 광학 네트워킹 선물입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793704788,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06c007191b95f8c357c19ea2e06caba3a435b027a9e9bcc73501e4fe2731b4b2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4e328ff2e178c3d99bba",
          "headline": "MRVL 주가 목표가 절반으로 줄었습니다: Lumentum 거래 후 '재료 역풍', TD Cowen은 다운그레이드라고 말합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793704482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5fdabbf162942e4ba5a81129757e283adbc18f9b6bab02f01de72eb39280912e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a833f558f9325ad79a25",
          "headline": "Tesla-SpaceX 합병을 원하시나요? Marvell-Lumentum 거래를 살펴보십시오.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793703300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea9144d060dd9830095aac17e1e097511a9da6e0b12a73cdb053f8c1f4998434",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "58deb437503bf92b8453",
          "headline": "Marvell은 1,150억 달러 규모의 전체 주식 거래로 Lumentum을 인수하기로 합의했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793700602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a977ffe31f6d254332a1b7aa5c44f7fa45775468d19e9b0b4e376d7f0915ff5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "737dc0da85a12fe2043c",
          "headline": "Nvidia의 Huang은 Marvell-Lumentum Megadeal을 축복했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793675479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ed0cef26615815d727bb64c699632a975d059f5ccd0e2b06f7337a67627b3cf9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "4bf9e1a1d1a1460e7678",
          "headline": "Marvell Technology가 Lumentum을 인수했습니다. 시장이 이러한 움직임을 싫어하는 이유는 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793658122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d7065dd1a878d9240fc1cceab0940107f3c8a7fb2e6122894d15fdf1d2032a54",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0fb3263cd8b7679468bc",
          "headline": "오늘, 11월 2일 주식 시장: Marvell, Lumentum의 전체 주식 인수를 1,150억 달러에 발표",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793657180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a4fd718e5788179e26197f3e976c8e5b7230558bb32d9c1e118514b908ee5b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 22,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793732640,
      "signal": "주의 강화",
      "netScore": -2.11,
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
          "eventId": "0ad9381010fb20c09697",
          "headline": "이튼은 한 달 만에 16% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793732640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=93fcd4d8f0385f2d7ae8774b30141a77e90cfef2b437d1430a6501caaf7b7e13",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "acdc22a9ede08eec0c9b",
          "headline": "Bernstein이 선거일 데이터 센터의 과장된 우려에 대해 Vertiv는 6% 상승, Eaton은 7% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793719230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b840baaa62786cc8b2d7a34bcb8124b2259922ffdc740292b93eefeb867e35a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aaede6f70340e92d3dac",
          "headline": "GE Vernova 주식을 구매하기 전에 해결해야 할 한 가지",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793652819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=512f68eb5acc2aca9bd5905fa0724ad07e8af8337fca3c067b8c7353cc9e57b6",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793653954,
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
          "eventId": "6d4587721008beb9cd12",
          "headline": "Constellation Energy vs. NextEra Energy: 2027년에는 어느 유틸리티 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793653954,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c4ec679f6db9beccdf6172a976420812da1c10b9dbf5f9a61aebb65f4c57f9a5",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1793742239.8988407,
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
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793732640,
      "signal": "주의 강화",
      "netScore": -4.54,
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
          "eventId": "0ad9381010fb20c09697",
          "headline": "이튼은 한 달 만에 16% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793732640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=93fcd4d8f0385f2d7ae8774b30141a77e90cfef2b437d1430a6501caaf7b7e13",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "acdc22a9ede08eec0c9b",
          "headline": "Bernstein이 선거일 데이터 센터의 과장된 우려에 대해 Vertiv는 6% 상승, Eaton은 7% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793719230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b840baaa62786cc8b2d7a34bcb8124b2259922ffdc740292b93eefeb867e35a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "116f27540195e096c6b2",
          "headline": "Vertiv는 6개월 동안 30% 감소했습니다. 이 분석가는 비슷한 주장을 하는 다른 사람들과 함께 75%의 이익을 얻을 수 있다고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793713537,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1d0fed507dd9f9d13e79199301aae61a2349567dd56eb9f19188b768cae4620",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "930d501949246ba3c666",
          "headline": "ETN SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000040/etn-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "906231c6728f81e433cb",
          "headline": "ETN SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000037/etn-20261103.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793719230,
      "signal": "주의 강화",
      "netScore": -2.22,
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
          "eventId": "acdc22a9ede08eec0c9b",
          "headline": "Bernstein이 선거일 데이터 센터의 과장된 우려에 대해 Vertiv는 6% 상승, Eaton은 7% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793719230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b840baaa62786cc8b2d7a34bcb8124b2259922ffdc740292b93eefeb867e35a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "116f27540195e096c6b2",
          "headline": "Vertiv는 6개월 동안 30% 감소했습니다. 이 분석가는 비슷한 주장을 하는 다른 사람들과 함께 75%의 이익을 얻을 수 있다고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793713537,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1d0fed507dd9f9d13e79199301aae61a2349567dd56eb9f19188b768cae4620",
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
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793608522,
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
          "eventId": "7c55bced525aa6340965",
          "headline": "허벨: 전기화 기회를 이끄는 두 가지 성장 엔진",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793608522,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5cf1993ab273bd1be233b0ad2b93915b0c592c7e6b4007583f8d26ed39f0b2b5",
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
    "VRT": {
      "ticker": "VRT",
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793732640,
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
          "eventId": "0ad9381010fb20c09697",
          "headline": "이튼은 한 달 만에 16% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793732640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=93fcd4d8f0385f2d7ae8774b30141a77e90cfef2b437d1430a6501caaf7b7e13",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ab6e430b4ef730d1ed4",
          "headline": "글로벌 열 솔루션 시장 보고서 2026: 2030년 규모, 추세 및 예측 | Schneider Electric, Vertiv, Delta Electronics 및 Boyd를 통해 AI 액체 냉각 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793715540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4cea63945cf5be167795fc9b3a3a6e8c0de02ad0be293ce1073dc3a910df0125",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1793742239.8988407,
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
      "updatedAt": 1793742239.8988407,
      "dataAsOf": 1793728041,
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
          "eventId": "9fc0b5e6dbcf5fc12afb",
          "headline": "Seagate는 SSD에 패할 것으로 예상되었습니다. 10년 전 1,000달러를 투자한 금액은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793728041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=75eae8f259bf85502ee5241675a740f8bf8bb69d746577cb6a0cd6a853b95a8b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1fdd62a811df5f2a7568",
          "headline": "Seagate가 여전히 귀하가 구매한 사업입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793603055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0754beb2c6a959972783e9ee6e21e1a5349d2efaecd4258be01185a16feea01d",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1793742239.8988407,
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
      "updatedAt": 1793742239.8988407,
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
      "updatedAt": 1793742239.8988407,
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
