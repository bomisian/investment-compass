// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1795567561.236277,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795535101,
      "signal": "우호적 변화",
      "netScore": 2.66,
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
          "eventId": "fdcbd267b8b3d534a569",
          "headline": "Oracle은 Microsoft의 레버리지가 높고 현금이 부족한 쌍둥이입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795535101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1aa587113643b358b8db9c27840c1dbfc0f65130a9f79cf1f1d6897750222acb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "66bcfd4195c99362577a",
          "headline": "글로벌 문서 협업 시장 보고서 2026: 2030년 규모, 점유율, 추세 및 예측 | Microsoft, Google, Adobe 및 Box를 통해 AI, 클라우드 및 보안 워크플로를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff7c423c3e96ad7fd0dc54c6f8d8d63ad1d374f39150836d414d6bc9e0494c86",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d039498fab611b522cc1",
          "headline": "트럼프, 해외 데이터센터에 '엄청난 세금' 부과 위협. 이는 마이크로소프트, 아마존, 알파벳에게 큰 문제이다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795515621,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1141281cff2f99fb759fbfcadf374188e918464420071aab5f5142490bfcb04",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c0b33155cb8f6fa67df7",
          "headline": "Microsoft(MSFT)의 엔터프라이즈 AI 파트너십이 주주에게 의미하는 것",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795479463,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0bf40cb2c71ceebbbe64eb60b060782227959c745b969a95336ac9adf0a8cdc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c2a508fd884311ff1ad4",
          "headline": "Jensen Huang이 NVIDIA CEO로 복귀한다는 소식에 S&P 500이 약 4.5% 상승하면서 주가가 크게 상승했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795463390,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b12296cc6a1b7eab1a3efae40b1e794480360b0be55affa590372940f0fbbea9",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2b067d1baaa3999e5c58",
          "headline": "GTA VI의 과대 광고는 Sony의 미국 PS5와 Microsoft의 Xbox 주간 판매량을 두 배 이상 늘렸다고 Circana는 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795461207,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ecb37b8d274ae8c497b7c1b30d29e4608b875894f61f5849cbfe634ba17dfbfb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "36ab406a23d5e0831321",
          "headline": "Danaher는 Microsoft와 협력하여 에이전트 AI 플랫폼을 만듭니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795446000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6529e4109919c8664de9695fadd16e495b73c7a4eb7e053e77a39ef8f56b6fb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d092df254f43be7b55e7",
          "headline": "Apple 대 Microsoft: 지금 당장 2,000달러를 투자할 곳은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795440902,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d5b1feb1c4782c21cb1415cfec1d4fdf837475176327143f28212e11b1e970e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "09f00dd7edab0e56617d",
          "headline": "머스크는 AI에 “내년에는 현금 부족도 심할 것”이라고 경고했다. 신용 시장은 SpaceX를 Oracle 옆에 두었습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795355429,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efa66d542b807142af98da3927226379b497cf72943515f1bc8df778fb072930",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795531260,
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
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -3.92,
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
          "score": -3.4,
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
          "eventId": "ece45c107007ce09c442",
          "headline": "글로벌 신경 프로세서 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | NVIDIA, Apple, Alphabet 및 Intel Accelerate Edge AI로 CAGR 22.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99ecd98b1bdd47f6ad8586279612445a4ea947265f81931d52ff1e61c2c775c6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "66bcfd4195c99362577a",
          "headline": "글로벌 문서 협업 시장 보고서 2026: 2030년 규모, 점유율, 추세 및 예측 | Microsoft, Google, Adobe 및 Box를 통해 AI, 클라우드 및 보안 워크플로를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff7c423c3e96ad7fd0dc54c6f8d8d63ad1d374f39150836d414d6bc9e0494c86",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8e0bfad2895dba91a11e",
          "headline": "억만장자 투자자 1명이 아마존, 메타, 알파벳에 30억 달러를 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795516502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25fb2922ee50e89e5904cde1880e4c22a733ce503eba07a5b5d3a92f34f25f3f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d039498fab611b522cc1",
          "headline": "트럼프, 해외 데이터센터에 '엄청난 세금' 부과 위협. 이는 마이크로소프트, 아마존, 알파벳에게 큰 문제이다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795515621,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1141281cff2f99fb759fbfcadf374188e918464420071aab5f5142490bfcb04",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a47680f282c9bfe19dfa",
          "headline": "Steve Eisman은 AI가 \"더 이상 하나의 거래가 아니다\"라고 말했습니다. Huang이 돌아왔지만 Alphabet과 CoreWeave는 여전히 분열을 보여줍니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795474493,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cce76ef68e89ce2696f214b1480abf834d9ef713c8b68864824d4466e62cf846",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "258e36566a341d9f2809",
          "headline": "반전: Cathie Wood는 \"Jensen을 잃었다\"는 이유로 Nvidia를 매각했습니다. 엔비디아는 그를 다시 고용했지만 다른 걱정은 남아있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795470284,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d415468040bde72ff572d8e686b7ce97389157d61f5d83bdf29c0835a1782b3",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "94bb50144fd2137f3479",
          "headline": "Google은 자체 현금으로 AI에 480억 달러를 더 지출할 수 있습니다. 엔비디아로는 충분할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795464490,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9e3813b9cc10d4fb8701c0c4136d55c9e965896156db049edb9c26ca770c513e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "30de52d1978f44c69aad",
          "headline": "블록버스터 인류학 IPO 이후 OpenAI는 AI 경쟁자들이 개발 '한계'에 동의하기를 원하는 반면 Meta는 통제된 접근 방식을 요구합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795403710,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=708b59dc99f525c2b649bb29ce74275e88fabf97233c66e4f7ecdbbca8784a0b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4f7dcd7caf3422267e47",
          "headline": "Google, 50MW 오리건 전력 거래에서 초고온 지열 지원",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795370400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=346d964a26bcd66493578fa2101887fbe1f9c722bf5286d592625df3868c4e09",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "737b7926a21991a9030f",
          "headline": "알파벳 대 메타 플랫폼: 2027년에는 어떤 미디어 주식을 구매하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795367778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=83bcd34257734583b57be45d2714d1ce7ecc075e594d7adfa308b8f4c7e0c124",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "480c0f3ec8ad9b512608",
          "headline": "GOOGL SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1795359600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526470750/d115240d424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "09f00dd7edab0e56617d",
          "headline": "머스크는 AI에 “내년에는 현금 부족도 심할 것”이라고 경고했다. 신용 시장은 SpaceX를 Oracle 옆에 두었습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795355429,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efa66d542b807142af98da3927226379b497cf72943515f1bc8df778fb072930",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795538535,
      "signal": "주의 강화",
      "netScore": -4.42,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "38fab0c8ec4be3e5a1ba",
          "headline": "Amazon, Nvidia에 도전하기 위해 75억 달러 규모의 AI 투자 추진",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795538535,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c106181f27b22d86feec4230720d0fcfd38ed81de2fa747ec1606b3560a6c9b4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "94e15d14ee61c4a9c026",
          "headline": "Amazon의 75억 달러 규모 Decart 기술 거래로 Wedbush의 칩 선택 사례 제공",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795538220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96fcd7edc3b7334aedd9595224573cff160f7fdfb3fbdc308d7581ce0e89303e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b4c898a7952be92e2290",
          "headline": "Amazon.com(AMZN)이 Decart AI 최적화 기술을 75억 달러에 인수하기로 합의했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795533107,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=529a67a14958d5dd8ee99ef0905fdcf1232f1f37ace2de44082daa67d69b88f7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8e0bfad2895dba91a11e",
          "headline": "억만장자 투자자 1명이 아마존, 메타, 알파벳에 30억 달러를 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795516502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25fb2922ee50e89e5904cde1880e4c22a733ce503eba07a5b5d3a92f34f25f3f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d039498fab611b522cc1",
          "headline": "트럼프, 해외 데이터센터에 '엄청난 세금' 부과 위협. 이는 마이크로소프트, 아마존, 알파벳에게 큰 문제이다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795515621,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1141281cff2f99fb759fbfcadf374188e918464420071aab5f5142490bfcb04",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "906d75b18c453b33c5f1",
          "headline": "Anthropic의 IPO 안전망이 사라졌습니다: Morgan Stanley는 \"더 이상\" 83달러 이하로 구매할 수 없습니다. 그것은 Amazon의 위험입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795513830,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5475d3f0b812fe9705178090c28b9734dd66668de81959ba1ae93577003a79f9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f7438c31ea9413b9857f",
          "headline": "S&P 500, Nasdaq은 Jensen Huang의 복귀가 이끄는 낙관론에 대한 작년 4월 이후 최고의 세션을 종료합니다 — NVDA, NASA, TTWO, AMZN In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795476805,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddb2d770f30059adbbc65d86ade40edd6805413fc599edc8859f2a43f266c7db",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fbfb86a94dadfdb91258",
          "headline": "S&P 500, Nasdaq은 Jensen Huang의 복귀가 이끄는 낙관론에 대한 작년 4월 이후 최고의 세션을 종료합니다 — NVDA, NASA, TTWO, AMZN In Focus",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795476805,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddb2d770f30059adbbc65d86ade40edd6805413fc599edc8859f2a43f266c7db",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b306ef035a64a4793fa2",
          "headline": "아마존 주식은 75억 달러 규모의 디카르트 거래가 가까워지면서 4.45% 상승했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795453349,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2af04a1155406f3697ab82066e0b653edf37a164d52c0fab9c241cc9b0e2f549",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "84c17a24af683209442f",
          "headline": "Amazon은 75억 달러 규모의 거래로 Decart AI 기술 및 팀을 인수하기로 합의했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795446027,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf8b6000dd1cbdc2e9584ba200dbaad9a7842ab72c9bd972a3001a451ab6ceb6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1f53b95f627bac028516",
          "headline": "Amazon.com vs. Home Depot: 2027년에는 어떤 소비재 주식이 더 나은 구매인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795371851,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05a1442eab8b526c65c6ed3d3fe15adc04eafa9dd0a13932778d42a75cf7dbce",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "09f00dd7edab0e56617d",
          "headline": "머스크는 AI에 “내년에는 현금 부족도 심할 것”이라고 경고했다. 신용 시장은 SpaceX를 Oracle 옆에 두었습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795355429,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efa66d542b807142af98da3927226379b497cf72943515f1bc8df778fb072930",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795533597,
      "signal": "주의 강화",
      "netScore": -9.51,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "231c09090f3729b2ebdd",
          "headline": "AMD는 10% 하락, Nvidia는 칩 주식이 황 랠리를 반납하고 재판매 신고가 가중되면서 7% 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795533597,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9e6aa8e68ecdd7e8079fc72f960060d5bb0286e1d40461dd63e61d0d7c8a314",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5878ffe28716d861c04a",
          "headline": "Meta는 영국에서 Muse 개인 에이전트를 출시했지만 큰 경고가 따릅니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795533108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=976c6cf38f54207a805a6ea15dc92adfa139ae73ba54023d99ac09f01e98d5b0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8e0bfad2895dba91a11e",
          "headline": "억만장자 투자자 1명이 아마존, 메타, 알파벳에 30억 달러를 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795516502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25fb2922ee50e89e5904cde1880e4c22a733ce503eba07a5b5d3a92f34f25f3f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5805d2b252fdcd5cf5fc",
          "headline": "Nvidia가 촉발한 랠리 이후 밤새 AMD 주가 하락: AMD는 OpenAI, Meta Warrants와 관련된 재판매를 위해 3억 3700만 주 등록",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795492068,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65b84ff5d824ba1bb5f8a8b11ce90a25daf9124937c7c86a0c8450b6953663bc",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a7a54099d51f21b930aa",
          "headline": "'그는 신이 아니다': 팔머 럭키(Palmer Luckey)가 페이스북 해고에 대해 공개하고 마크 주커버그와 여전히 거래를 하는 이유를 설명합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795483807,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=46d6aa5c127ed0bc92a4cd3a7e0d82a56653ab4a95a1f5103e78bf65c13b089e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dae842c378adcc80b609",
          "headline": "AMD는 OpenAI, Meta 영장과 관련된 재판매를 위해 최대 3억 3,700만 주를 등록합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795476144,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=49385280ce2cf6da69bae0a4eb80cd25a5eb876579dd27db8f3bd02e7ee77745",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "bf85ff427776a207a3d0",
          "headline": "Meta는 순 제로 목표를 던졌습니다. 경쟁사들은 분노해야 한다",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1795454025,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0263c5e7c9f6dc667bf254d76aba1ea4e32fb994f8a88d29c8837234a1ce8961",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "737b7926a21991a9030f",
          "headline": "알파벳 대 메타 플랫폼: 2027년에는 어떤 미디어 주식을 구매하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795367778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=83bcd34257734583b57be45d2714d1ce7ecc075e594d7adfa308b8f4c7e0c124",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0a5d383237927568a76a",
          "headline": "META SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1795359600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026075541/meta-20261118.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795531260,
      "signal": "중립·확인 대기",
      "netScore": -1.96,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.87,
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
          "score": -1.92,
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
          "eventId": "ece45c107007ce09c442",
          "headline": "글로벌 신경 프로세서 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | NVIDIA, Apple, Alphabet 및 Intel Accelerate Edge AI로 CAGR 22.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99ecd98b1bdd47f6ad8586279612445a4ea947265f81931d52ff1e61c2c775c6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9a01f9eb6e1954d19b5",
          "headline": "Apple vs. Broadcom: 인공 지능 붐 속에서 수익 추세 비교",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795464990,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=79634169220a98f79344de85b7fbc26f860646f0ddd42c1ff9a5957d506213b6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e5347336f48f0c45495d",
          "headline": "엔비디아는 이제 Jensen Huang 낙관주의로 세계에서 가장 가치 있는 기업에서 Apple에 이어 2위를 차지했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795454730,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b486e39527a7c4e27450ea2605bb70f357b6a1ad86fc1740a8cdf5c796f4070",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fa9204d84d33029c83f7",
          "headline": "NYSE 모회사의 토큰화된 주식 벤처가 113개 자산으로 개장할 예정입니다. 애플, 엔비디아, 테슬라는 물러나고 있다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795447167,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b557d540dbab53cbe1aca012f5d3bddfa8107992cc821008e2d7fa075a7aca1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d092df254f43be7b55e7",
          "headline": "Apple 대 Microsoft: 지금 당장 2,000달러를 투자할 곳은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795440902,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d5b1feb1c4782c21cb1415cfec1d4fdf837475176327143f28212e11b1e970e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89e6dd32da40d663f0ad",
          "headline": "NVDA, INTC, MU, AMD 칩 주식 상승: Dan Ives는 '곰은 검증된 느낌'을 느끼지만 AI 물결을 막을 수는 없다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795400645,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32fa092f51c1a523b9e77c2c02b19ded9999f423d9aced02dcfb88a7f57c4cca",
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
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795553995,
      "signal": "주의 강화",
      "netScore": -6.57,
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
          "eventId": "bf42fdc6ca61a8787848",
          "headline": "Tesla와 SpaceX가 방금 3조 2천억 달러 규모의 합병을 위해 거래팀을 모았습니다. 투자자가 알아야 할 사항은 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795553995,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=84cab5d56e33ccf2917566fc40ded4f22140bdec50a467c2541d8a6b5baa3be0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7316d6024f002f6df99d",
          "headline": "Tesla와 SpaceX는 머스크에게 과반수 통제권을 부여할 수 있는 합병을 위해 거래 팀을 구성합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795531555,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9f5de9aed35522b805eec4c362b4673769714c57149068fa499331142b4bdddb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fa9204d84d33029c83f7",
          "headline": "NYSE 모회사의 토큰화된 주식 벤처가 113개 자산으로 개장할 예정입니다. 애플, 엔비디아, 테슬라는 물러나고 있다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795447167,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b557d540dbab53cbe1aca012f5d3bddfa8107992cc821008e2d7fa075a7aca1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d19a65362d206338131a",
          "headline": "SpaceX의 Tesla Bulls Banking은 \"희석 수학을 이해하지 마십시오\"라고 Gary Black은 말합니다. Tesla는 SpaceX의 2027 배수의 3.4배로 거래됩니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795440048,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3eaab24fd5f35fa555e661a42a7c1fe1fed6dda2c5a416c572aa5d78486f2f8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a8ae92d3611d3205f1c1",
          "headline": "잠재적인 합병 전에 Tesla 또는 SpaceX 주식을 구매해야 합니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795386062,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=131443fcf6e684626624398f0a78f7b06dc9a3c135c971f4f4c65b77d8d4d43f",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795535101,
      "signal": "중립·확인 대기",
      "netScore": -0.78,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.87,
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
          "eventId": "5edd34e13ff13b6b0049",
          "headline": "Oracle은 Microsoft의 레버리지가 높고 현금이 부족한 쌍둥이입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795535101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1aa587113643b358b8db9c27840c1dbfc0f65130a9f79cf1f1d6897750222acb",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fdcbd267b8b3d534a569",
          "headline": "Oracle은 Microsoft의 레버리지가 높고 현금이 부족한 쌍둥이입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795535101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1aa587113643b358b8db9c27840c1dbfc0f65130a9f79cf1f1d6897750222acb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5e614020c6c36a2fa3f8",
          "headline": "오늘날 오라클 주식이 상승하는 이유",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795458602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bb7a1efea69af4b45a1be7aa56fa5e8f601b68c816eac1b46c23370fc67a139a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6b1b90ba844c28a9e7c3",
          "headline": "투자자들은 Seagate의 장기적인 AI 성장 기회를 과소평가하고 있을 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795455234,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9d0044f5e95ca0319c28bc9b351f3df5f71505f8a99b5f7f98c7dd53d92f90c3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 수요와 자본 부담 동시 확대"
        },
        {
          "eventId": "b539ad8de668f311110c",
          "headline": "디지털 물류 - 2026년 글로벌 전략 비즈니스 보고서: IBM, Oracle, SAP, Siemens 및 Tech Mahindra가 공급망을 중단함에 따라 CAGR 21.2% 및 미화 1,794억 달러 규모의 시장 활용",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795448040,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b882208cfeafabed056e150c3bf06d78fcd483bc892739a0b6566f9a630cd00",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "클라우드 수요와 자본 부담 동시 확대"
        },
        {
          "eventId": "d96019b8170e088b2dc2",
          "headline": "글로벌 규제 데이터 시장 보고서 2026 | AI, 클라우드 및 실시간 보고로 18.3% CAGR을 활용하여 2030년까지 59억 6천만 달러를 창출합니다. IBM, Oracle, SAP 및 Accenture가 혁신을 가속화합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795447800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b28ef5851857373c31d18cb2e74c5b351ec27a65129a479ffa6773cb860394ac",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "클라우드 수요와 자본 부담 동시 확대"
        },
        {
          "eventId": "09f00dd7edab0e56617d",
          "headline": "머스크는 AI에 “내년에는 현금 부족도 심할 것”이라고 경고했다. 신용 시장은 SpaceX를 Oracle 옆에 두었습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795355429,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efa66d542b807142af98da3927226379b497cf72943515f1bc8df778fb072930",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795474231,
      "signal": "중립·확인 대기",
      "netScore": 0.21,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "01cc0989d6cddb27151d",
          "headline": "Chamath는 Microsoft가 \"분명히 프론티어 모델을 가질 필요가 있을 것\"이라고 말합니다. 나델라는 그렇지 않을 것이라고 장담하고 있다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795474231,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=39f3d390f731ef3ef1fea99637909813c359f0b067ba589c5861452146a15e4b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "72e72ef787d416ca7a5c",
          "headline": "Salesforce: 3분기 수익 이전에는 하락세가 제한적이며 주식 품질은 여전히 ​​양호합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795433901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e980cb07ad5077553a459bbc0e4f150bc8b55d301fc9652fc1c5eda8da5fc9f1",
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
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795551602,
      "signal": "주의 강화",
      "netScore": -4.12,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "score": -3.32,
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
          "eventId": "0cbeee52962c17aa1ecc",
          "headline": "Axon Enterprise vs. Palantir Technologies: 2027년에는 어떤 법 집행 기관 주식이 더 나은 구매입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795551602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=633a25b0d9127bec17a20e979a33c0d9ec2c52f43448722b297d87b3a189e6ac",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5fb2e5ae1081175bdfae",
          "headline": "AI 지원 전장 관리 및 의사결정 지원 시스템 글로벌 시장 보고서 2026 | Lockheed Martin, RTX, Palantir, 2030년까지 시장이 178억 8천만 달러에 도달함에 따라 Edge AI 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2fd92dcec9d54af17d9945fcc008a89c15bcd5c8ce1437622a4c5fe67b69806c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "01ce90514019d720352f",
          "headline": "Palantir: 매도 이후 적극 매수로 업그레이드하는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795498139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82678e0e21c4e19005257f0eefd037c992be2e3f381ac30df360d30494348c80",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "87bed95771709ef49cf6",
          "headline": "Palantir: 147.8%의 규칙은 주권 AI 성장 플라이휠을 강조합니다(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795488040,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6bff52794bfe6f3a673fa09818fd85cbc35c6bbdeaaa2dfec7fe55fda5cb6e1d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "01cc0989d6cddb27151d",
          "headline": "Chamath는 Microsoft가 \"분명히 프론티어 모델을 가질 필요가 있을 것\"이라고 말합니다. 나델라는 그렇지 않을 것이라고 장담하고 있다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795474231,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=39f3d390f731ef3ef1fea99637909813c359f0b067ba589c5861452146a15e4b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0557ba1d0994934ae9aa",
          "headline": "UiPath vs. Palantir Technologies: 2027년에 더 나은 주식 구매를 가능하게 하는 AI 자동화 플랫폼은 무엇입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795372382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f661f716b8184e306fa834d1f54d758453eb1f748a84a68558b601fc54f90ae",
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
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795550431,
      "signal": "주의 강화",
      "netScore": -3.0,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.62,
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
          "eventId": "e3d1ae9d2342830efc9f",
          "headline": "좋지 않음: 황의 복귀가 해제된 지 하루 만에 오라클의 신용 스왑이 다시 폭발함 Nvidia",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795550431,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cef5287f05e836ff1a350dba2bce878ddf2d02ec6126b3e3df601698407e1aee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "09579a09b134c01452eb",
          "headline": "주가가 폭등하기 전에 Lam Research는 무엇을 말했습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795546474,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f8801e8db9b00a578d457b277a0bb187143243b90f6e4cffa6d0f06a3bc50fee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5945368e0bf70137cd2a",
          "headline": "Eaton 주식의 움직임을 촉발한 요인은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795545139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33638ff460727044e28e2e2e45a59036d47e0f9cffbff3f7a8ca47d56c284d72",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6b7bf22706b6acfd8502",
          "headline": "비스트라 주식에 무슨 일이 일어났나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795544943,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=276df7c09e95311d0172dbf1cd6afb81ce3ee8508725aee37bf472f1ab858035",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8102b30d056516346aa6",
          "headline": "3년 후에 Salesforce 주식의 가치는 얼마나 될까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795541281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d18d9a1d6ca69aa3469703fb603aed7de7d7280014aab0a5514c33a7f83b363",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ab067f800c7659effd5f",
          "headline": "알파벳 주식은 왜 움직였나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795541080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3b5d01ea58f56ba93d025d546bd00caba78ab0ebd22e1ebccec2f606f0649a2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "38fab0c8ec4be3e5a1ba",
          "headline": "Amazon, Nvidia에 도전하기 위해 75억 달러 규모의 AI 투자 추진",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795538535,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c106181f27b22d86feec4230720d0fcfd38ed81de2fa747ec1606b3560a6c9b4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "446c2a90ec54e2666501",
          "headline": "Jensen Huang이 CEO로 돌아왔음에도 불구하고 Nvidia는 최고치에서 31% 하락했고 Broadcom은 35% 하락했습니다. 여기 Better Buy Now가 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795537322,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ea5fc474349c211bef9ed84d57f98dee7b14e423e5331cadaadafb835c9f813",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee4b1d3a479054211722",
          "headline": "Palantir 주식을 이끄는 것은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795536563,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56304ce4bcd91388e770572fcc151eb2c9a21ba1aabcad70e88bb9c5d95ae4e9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "70a9cb338e1aff368593",
          "headline": "EMCOR 주식의 연승은 행운일 수 있을까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795533887,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9300e757b49a41e236122e891aa2f6b7e4c91b2672bb0b9da976855df15e6b73",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "231c09090f3729b2ebdd",
          "headline": "AMD는 10% 하락, Nvidia는 칩 주식이 황 랠리를 반납하고 재판매 신고가 가중되면서 7% 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795533597,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9e6aa8e68ecdd7e8079fc72f960060d5bb0286e1d40461dd63e61d0d7c8a314",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b4c898a7952be92e2290",
          "headline": "Amazon.com(AMZN)이 Decart AI 최적화 기술을 75억 달러에 인수하기로 합의했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795533107,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=529a67a14958d5dd8ee99ef0905fdcf1232f1f37ace2de44082daa67d69b88f7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 74,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795541642,
      "signal": "중립·확인 대기",
      "netScore": 1.48,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": 3.43,
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
          "eventId": "ffab3f74ad4a5ee697d6",
          "headline": "AMD와 Micron의 동일한 10,000달러가 2030년까지 매우 다른 결과를 낳을 수 있습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795541642,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1354be8a4d1ac2f2c15c81d1e49c3ead264b36ebad49863c5d336393652a1611",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "38fab0c8ec4be3e5a1ba",
          "headline": "Amazon, Nvidia에 도전하기 위해 75억 달러 규모의 AI 투자 추진",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795538535,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c106181f27b22d86feec4230720d0fcfd38ed81de2fa747ec1606b3560a6c9b4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "231c09090f3729b2ebdd",
          "headline": "AMD는 10% 하락, Nvidia는 칩 주식이 황 랠리를 반납하고 재판매 신고가 가중되면서 7% 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795533597,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9e6aa8e68ecdd7e8079fc72f960060d5bb0286e1d40461dd63e61d0d7c8a314",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b4c898a7952be92e2290",
          "headline": "Amazon.com(AMZN)이 Decart AI 최적화 기술을 75억 달러에 인수하기로 합의했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795533107,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=529a67a14958d5dd8ee99ef0905fdcf1232f1f37ace2de44082daa67d69b88f7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e0a0f9d3059e0b07176f",
          "headline": "Amazon이 Decart의 AI 칩 소프트웨어에 75억 달러를 지불한 것으로 알려졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795532884,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0be1854988a65092f44484d4e5ef78c58af6ffb7eb0f983a51048e24fe939346",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "5fb2e5ae1081175bdfae",
          "headline": "AI 지원 전장 관리 및 의사결정 지원 시스템 글로벌 시장 보고서 2026 | Lockheed Martin, RTX, Palantir, 2030년까지 시장이 178억 8천만 달러에 도달함에 따라 Edge AI 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2fd92dcec9d54af17d9945fcc008a89c15bcd5c8ce1437622a4c5fe67b69806c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ece45c107007ce09c442",
          "headline": "글로벌 신경 프로세서 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | NVIDIA, Apple, Alphabet 및 Intel Accelerate Edge AI로 CAGR 22.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99ecd98b1bdd47f6ad8586279612445a4ea947265f81931d52ff1e61c2c775c6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7d419f006a33477fae38",
          "headline": "임베디드 마이크로프로세서 유닛(MPU) 글로벌 시장 보고서 2026 | NVIDIA, Intel, Qualcomm, NXP 및 Renesas를 통해 Edge AI 및 IoT 성장을 활용하여 2030년까지 591억 8천만 달러 규모로 성장",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2669220dd9cb4a8ab8dc7a928c0217a35a81c8f6669ff6751ecd5fd06a950683",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "66bcfd4195c99362577a",
          "headline": "글로벌 문서 협업 시장 보고서 2026: 2030년 규모, 점유율, 추세 및 예측 | Microsoft, Google, Adobe 및 Box를 통해 AI, 클라우드 및 보안 워크플로를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff7c423c3e96ad7fd0dc54c6f8d8d63ad1d374f39150836d414d6bc9e0494c86",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "8e0bfad2895dba91a11e",
          "headline": "억만장자 투자자 1명이 아마존, 메타, 알파벳에 30억 달러를 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795516502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25fb2922ee50e89e5904cde1880e4c22a733ce503eba07a5b5d3a92f34f25f3f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "045df725dace5193f7b8",
          "headline": "'빅 숏' 투자자 스티브 아이즈만(Steve Eisman)은 비트코인은 '아무것도 아니다'라고 말하며 암호화폐는 엔비디아를 추적할 뿐이라고 주장: '절대' 비트코인을 구매하지 않을 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795513566,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0a7232f2e35a286f115390a135923f43f129b3f0d6db27d1b6759f50a0a6b59d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "65ad161ac4e5179a7fcf",
          "headline": "월요일 Nvidia 주도의 칩 랠리 이후 미국 선물이 혼합되었습니다 — ZM, HPE, AMD, BABA 집중",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795512616,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1ce0f4c1318a2bb406e432ca54a49e9b5e48419cd3cfc8c1f110fa3695467770",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 38,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795537322,
      "signal": "중립·확인 대기",
      "netScore": -1.67,
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
          "eventId": "446c2a90ec54e2666501",
          "headline": "Jensen Huang이 CEO로 돌아왔음에도 불구하고 Nvidia는 최고치에서 31% 하락했고 Broadcom은 35% 하락했습니다. 여기 Better Buy Now가 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795537322,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ea5fc474349c211bef9ed84d57f98dee7b14e423e5331cadaadafb835c9f813",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "258e36566a341d9f2809",
          "headline": "반전: Cathie Wood는 \"Jensen을 잃었다\"는 이유로 Nvidia를 매각했습니다. 엔비디아는 그를 다시 고용했지만 다른 걱정은 남아있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795470284,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d415468040bde72ff572d8e686b7ce97389157d61f5d83bdf29c0835a1782b3",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9a01f9eb6e1954d19b5",
          "headline": "Apple vs. Broadcom: 인공 지능 붐 속에서 수익 추세 비교",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795464990,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=79634169220a98f79344de85b7fbc26f860646f0ddd42c1ff9a5957d506213b6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "99927f0e9441856d9e8b",
          "headline": "MOS(금속 산화물 반도체) 마이크로프로세서 시장 글로벌 보고서 2026 | NVIDIA, Intel, Broadcom 및 Texas Instruments 드라이브로 AI, Chiplets 및 RISC-V 활용 CAGR 10.1%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795447680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37e1be4a52efda4d8c1db776dfb8171b967b496ea77e8243c3d45ca11b1e5833",
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
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795542560,
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
          "eventId": "c13ec16edfa36a2da2f3",
          "headline": "Qualcomm 주식이 지금 보이는 것만큼 저렴합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795542560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=421948667af23b68825bdf03c53b4d9880999e5b7caaa0eb2034eb53def59f31",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7d419f006a33477fae38",
          "headline": "임베디드 마이크로프로세서 유닛(MPU) 글로벌 시장 보고서 2026 | NVIDIA, Intel, Qualcomm, NXP 및 Renesas를 통해 Edge AI 및 IoT 성장을 활용하여 2030년까지 591억 8천만 달러 규모로 성장",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2669220dd9cb4a8ab8dc7a928c0217a35a81c8f6669ff6751ecd5fd06a950683",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e75ee1703502f2e952da",
          "headline": "AI 매각으로 퀄컴은 42%, SK하이닉스는 48% 급락했다. 2027년에 어느 주식을 구매하는 것이 더 좋습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795429202,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=451c284b9fdffaee68d84f8658a7ee19e146fb9244f1f4bb6bb64dfc02b10d65",
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
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795466986,
      "signal": "중립·확인 대기",
      "netScore": 1.89,
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
          "eventId": "c6dd7b9fdf46c98b8ed7",
          "headline": "Arm Holdings 주가가 월요일에 급등한 이유",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795466986,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6c70805d5d3031fdae9d4163684fb6745d8beac94f1801d8250126c3de49ac78",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4d2d8fa4269ae2d7ffc4",
          "headline": "Arm CEO 르네 하스, 2033년까지 계약 연장",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795442220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3d5ed5ded79d16ffe66005466cb20c41320a11e971e2b5bbdd6406fddf73fc6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0cba6b2abfa9b39a3094",
          "headline": "Arm 대 Marvell Technology: 2027년에는 어느 인공지능 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795392605,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc60013d974ce39e98a4a133107f9eb0d543677039bff11cef707c53b2a298a9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7d458da24a0f54e25621",
          "headline": "ARM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1795359600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000155/arm-20261123.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795528016,
      "signal": "주의 강화",
      "netScore": -9.24,
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
          "eventId": "6658530ab24f0e21a2ff",
          "headline": "오늘 Marvell Technology 주식이 5% 하락하는 이유는 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795528016,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce8ec9751785327fb3598d8bdf03173994f07289f91e2c4cf26399b2dd0f5a59",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d5e70b8655ac70bdaf7e",
          "headline": "월스트리트의 새로운 M&A 분위기: Marvell-Lumentum과 CrowdStrike-Zscaler가 모두 반발하는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795527912,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65e20a886059b73e6edf4251bb4f1a4ed48b6f23a839071cf2139c331de95fb7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "08ac87e594bcecefe3c7",
          "headline": "Marvell Technology가 한 달 안에 거의 50% 급락했지만 여기에서 270%의 이익을 예측하는 이 월스트리트 전문가에게는 별 의미가 없습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795436145,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3f8de381569103150ef0caa06740c019eccc8fdc769ef307a7e3da8e0c4f79c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0cba6b2abfa9b39a3094",
          "headline": "Arm 대 Marvell Technology: 2027년에는 어느 인공지능 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795392605,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc60013d974ce39e98a4a133107f9eb0d543677039bff11cef707c53b2a298a9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795549802,
      "signal": "주의 강화",
      "netScore": -6.5,
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
          "score": -3.5,
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
          "eventId": "7acc1b767d2d9dcd4f3c",
          "headline": "어플라이드 머티어리얼즈 vs. 인텔: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795549802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0bfe8206232df7e673ddff8c19707e6a1bbb8633aeca76ed1d889864f0fcb2fb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ece45c107007ce09c442",
          "headline": "글로벌 신경 프로세서 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | NVIDIA, Apple, Alphabet 및 Intel Accelerate Edge AI로 CAGR 22.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99ecd98b1bdd47f6ad8586279612445a4ea947265f81931d52ff1e61c2c775c6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7d419f006a33477fae38",
          "headline": "임베디드 마이크로프로세서 유닛(MPU) 글로벌 시장 보고서 2026 | NVIDIA, Intel, Qualcomm, NXP 및 Renesas를 통해 Edge AI 및 IoT 성장을 활용하여 2030년까지 591억 8천만 달러 규모로 성장",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2669220dd9cb4a8ab8dc7a928c0217a35a81c8f6669ff6751ecd5fd06a950683",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cc94730914e7701ad7d4",
          "headline": "TSMC: AI 시장 패닉을 두 배로 늘릴 놀라운 기회",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795519800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=583080a066d9daca735474eb2e32bb107e356985b283e63921a2c4a4db5d0cf7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9a01f9eb6e1954d19b5",
          "headline": "Apple vs. Broadcom: 인공 지능 붐 속에서 수익 추세 비교",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795464990,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=79634169220a98f79344de85b7fbc26f860646f0ddd42c1ff9a5957d506213b6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fe8b04a59418e85cedee",
          "headline": "Jensen Huang의 NVIDIA 복귀로 칩 재고가 상승함에 따라 대만 반도체는 17% 상승했습니다. 인텔 급등 15%, AMD 급등 8%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795449328,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=982251e22346f3bdee20e6d3f27de9b9c8c48794b1f21274030eef9c98fac7e9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9376dab726d5adcbd282",
          "headline": "금속 산화물 반도체(MOS) 마이크로(MPU, MCU 및 DSP) 시장 보고서 2026 | Intel, Samsung, STMicroelectronics 및 NXP Drive로 AI, EV 및 RISC-V 활용 CAGR 9.6%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795447740,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=317ae9c74dec59d44792da28a936c7ad5a52f8294403055b4020f5074063cb93",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "99927f0e9441856d9e8b",
          "headline": "MOS(금속 산화물 반도체) 마이크로프로세서 시장 글로벌 보고서 2026 | NVIDIA, Intel, Broadcom 및 Texas Instruments 드라이브로 AI, Chiplets 및 RISC-V 활용 CAGR 10.1%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795447680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37e1be4a52efda4d8c1db776dfb8171b967b496ea77e8243c3d45ca11b1e5833",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "eeeb005d6c6ba2996b4b",
          "headline": "Arm, Haas CEO가 2033년까지 유지하면서 13% 급등, 그는 \"이보다 더 자신감이 없었다\"고 말함",
          "eventLabel": "실적 발표",
          "publishedAt": 1795445730,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=872e47598d93e2c813b6c797d056b2fd419538b05979beb8ab3666c310c10210",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89e6dd32da40d663f0ad",
          "headline": "NVDA, INTC, MU, AMD 칩 주식 상승: Dan Ives는 '곰은 검증된 느낌'을 느끼지만 AI 물결을 막을 수는 없다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795400645,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32fa092f51c1a523b9e77c2c02b19ded9999f423d9aced02dcfb88a7f57c4cca",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0cba6b2abfa9b39a3094",
          "headline": "Arm 대 Marvell Technology: 2027년에는 어느 인공지능 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795392605,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc60013d974ce39e98a4a133107f9eb0d543677039bff11cef707c53b2a298a9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795519800,
      "signal": "주의 강화",
      "netScore": -5.8,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "cc94730914e7701ad7d4",
          "headline": "TSMC: AI 시장 패닉을 두 배로 늘릴 놀라운 기회",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795519800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=583080a066d9daca735474eb2e32bb107e356985b283e63921a2c4a4db5d0cf7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "59c9a14cc526fb6c3ad0",
          "headline": "Jensen Huang이 Nvidia CEO로 복귀함에 따라 TSMC는 하루 만에 1,580억 달러의 가치를 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795503956,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ebb99a0a01e92c8006406a376f7ee95adea9f6bae8a8e570e9666c9af8d273f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fe8b04a59418e85cedee",
          "headline": "Jensen Huang의 NVIDIA 복귀로 칩 재고가 상승함에 따라 대만 반도체는 17% 상승했습니다. 인텔 급등 15%, AMD 급등 8%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795449328,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=982251e22346f3bdee20e6d3f27de9b9c8c48794b1f21274030eef9c98fac7e9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20da6ec2196b96c253d5",
          "headline": "ASML 대. Taiwan Semiconductor: 지금 AI 앵커로 하나를 선택하는 이유는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795436136,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8fb16e40a862dbf49b75f6bb8595a31905f06682f3d567e6ef1ac0211a170fe1",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
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
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795473384,
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
          "eventId": "382dd6eba4711402966a",
          "headline": "오늘 ASML 주식이 터진 이유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795473384,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f37b63dea7548e3bd5e8ae97f3947dd91c1296e5f21ee5f5cc4d4bf3ed8b5ef",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "20da6ec2196b96c253d5",
          "headline": "ASML 대. Taiwan Semiconductor: 지금 AI 앵커로 하나를 선택하는 이유는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795436136,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8fb16e40a862dbf49b75f6bb8595a31905f06682f3d567e6ef1ac0211a170fe1",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795553209,
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
          "eventId": "6510334490ba54828b57",
          "headline": "오늘 Applied Materials(AMAT) 재고가 하락한 이유는 무엇입니까? 칩 매도 드래그 공급자",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795553209,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18564793c25b019fb6f8a2ac56cd0784354096225d3dda645f37f38b89dd99e8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7acc1b767d2d9dcd4f3c",
          "headline": "어플라이드 머티어리얼즈 vs. 인텔: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795549802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0bfe8206232df7e673ddff8c19707e6a1bbb8633aeca76ed1d889864f0fcb2fb",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1795567561.236277,
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
      "updatedAt": 1795567561.236277,
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
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795551902,
      "signal": "우호적 변화",
      "netScore": 7.72,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.62,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
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
          "score": -4.38,
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
          "eventId": "e07b80ee5ffb84b2ed82",
          "headline": "Micron vs. Sandisk: 어느 AI 메모리 주식이 더 나은 구매인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795551902,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82856c1659dbc51bf1a6ace1a66150e39e201307be765fdf2d177f3b15aa697d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "95e1041eb1b66359e0bd",
          "headline": "Brad Gerstner는 지난 분기에 Qualcomm을 더 많은 Micron으로 교체했습니다. 마이크론은 9월 30일 이후 34% 하락했다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795539589,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4419a447df5c22bfb247375a907fca48022cb458e5ee769ea1bae7b2553dee97",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "38fab0c8ec4be3e5a1ba",
          "headline": "Amazon, Nvidia에 도전하기 위해 75억 달러 규모의 AI 투자 추진",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795538535,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c106181f27b22d86feec4230720d0fcfd38ed81de2fa747ec1606b3560a6c9b4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "b4c898a7952be92e2290",
          "headline": "Amazon.com(AMZN)이 Decart AI 최적화 기술을 75억 달러에 인수하기로 합의했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795533107,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=529a67a14958d5dd8ee99ef0905fdcf1232f1f37ace2de44082daa67d69b88f7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e0a0f9d3059e0b07176f",
          "headline": "Amazon이 Decart의 AI 칩 소프트웨어에 75억 달러를 지불한 것으로 알려졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795532884,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0be1854988a65092f44484d4e5ef78c58af6ffb7eb0f983a51048e24fe939346",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "5fb2e5ae1081175bdfae",
          "headline": "AI 지원 전장 관리 및 의사결정 지원 시스템 글로벌 시장 보고서 2026 | Lockheed Martin, RTX, Palantir, 2030년까지 시장이 178억 8천만 달러에 도달함에 따라 Edge AI 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2fd92dcec9d54af17d9945fcc008a89c15bcd5c8ce1437622a4c5fe67b69806c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ece45c107007ce09c442",
          "headline": "글로벌 신경 프로세서 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | NVIDIA, Apple, Alphabet 및 Intel Accelerate Edge AI로 CAGR 22.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99ecd98b1bdd47f6ad8586279612445a4ea947265f81931d52ff1e61c2c775c6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7d419f006a33477fae38",
          "headline": "임베디드 마이크로프로세서 유닛(MPU) 글로벌 시장 보고서 2026 | NVIDIA, Intel, Qualcomm, NXP 및 Renesas를 통해 Edge AI 및 IoT 성장을 활용하여 2030년까지 591억 8천만 달러 규모로 성장",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2669220dd9cb4a8ab8dc7a928c0217a35a81c8f6669ff6751ecd5fd06a950683",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "66bcfd4195c99362577a",
          "headline": "글로벌 문서 협업 시장 보고서 2026: 2030년 규모, 점유율, 추세 및 예측 | Microsoft, Google, Adobe 및 Box를 통해 AI, 클라우드 및 보안 워크플로를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff7c423c3e96ad7fd0dc54c6f8d8d63ad1d374f39150836d414d6bc9e0494c86",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "8e0bfad2895dba91a11e",
          "headline": "억만장자 투자자 1명이 아마존, 메타, 알파벳에 30억 달러를 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795516502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25fb2922ee50e89e5904cde1880e4c22a733ce503eba07a5b5d3a92f34f25f3f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "045df725dace5193f7b8",
          "headline": "'빅 숏' 투자자 스티브 아이즈만(Steve Eisman)은 비트코인은 '아무것도 아니다'라고 말하며 암호화폐는 엔비디아를 추적할 뿐이라고 주장: '절대' 비트코인을 구매하지 않을 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795513566,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0a7232f2e35a286f115390a135923f43f129b3f0d6db27d1b6759f50a0a6b59d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "65ad161ac4e5179a7fcf",
          "headline": "월요일 Nvidia 주도의 칩 랠리 이후 미국 선물이 혼합되었습니다 — ZM, HPE, AMD, BABA 집중",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795512616,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1ce0f4c1318a2bb406e432ca54a49e9b5e48419cd3cfc8c1f110fa3695467770",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 40,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795551902,
      "signal": "중립·확인 대기",
      "netScore": 0.34,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "score": -1.75,
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
          "eventId": "e07b80ee5ffb84b2ed82",
          "headline": "Micron vs. Sandisk: 어느 AI 메모리 주식이 더 나은 구매인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795551902,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82856c1659dbc51bf1a6ace1a66150e39e201307be765fdf2d177f3b15aa697d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9b8c094d96125a59be06",
          "headline": "메모리 주식이 Nvidia의 황 랠리를 되돌리면서 Sandisk는 14% 하락했습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1795535308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e807449de607bb7c06ec05d29cf2131ca53dea8b14e876b86b171800331f2375",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b664cb7956e70f31f99a",
          "headline": "예측: 2027년 말까지 Sandisk의 주가가 될 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795472162,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5bcec3cb8997ab8d6366218aaf423197d0512d351c7d75c057c7b66b3ede8ce6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c8848fb53118cf86a74c",
          "headline": "Jensen Huang이 Nvidia로 돌아오면서 AI 주식이 반등하면서 Meta는 6%, Cipher는 17% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795455111,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f591d909d6cd50404d017ba5ee87190aa57a2d45c3db31bdb6c7372290a9a3c8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec9798d8e9c26f1ab018",
          "headline": "Jensen Huang의 NVIDIA Sparks AI 칩 반등으로 SanDisk 22% 급등 Seagate 점프 18%, 마이크론 랠리 16%",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795446278,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9b9e1e31324951f997dcf2b31bf1188c5a4e046d8cee60a4f044a33a5292583",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1795567561.236277,
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
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1795567561.236277,
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
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795532304,
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
          "eventId": "5281c3c66340586905f2",
          "headline": "Applied Optoelectronics는 22억 달러 규모의 하이퍼스케일러 공급 거래로 5% 상승; Lumentum 및 Coherent Drop 6%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795532304,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=279feed7f8e83c0bab8dca5730281447f596e24431227f8e50ac870e7ae96808",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9b6aaca90f0449b539d5",
          "headline": "Jensen Huang이 NVIDIA Sparks AI Optics로 복귀하면서 Applied Optoelectronics와 Lumentum이 22% 상승했습니다. 일관된 점프 19%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795449427,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0fa3bc2818ca19361123e599e12707b33f511b8aab21e842630f3de16cb49cc4",
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
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795532304,
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
          "eventId": "5281c3c66340586905f2",
          "headline": "Applied Optoelectronics는 22억 달러 규모의 하이퍼스케일러 공급 거래로 5% 상승; Lumentum 및 Coherent Drop 6%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795532304,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=279feed7f8e83c0bab8dca5730281447f596e24431227f8e50ac870e7ae96808",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d5e70b8655ac70bdaf7e",
          "headline": "월스트리트의 새로운 M&A 분위기: Marvell-Lumentum과 CrowdStrike-Zscaler가 모두 반발하는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795527912,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65e20a886059b73e6edf4251bb4f1a4ed48b6f23a839071cf2139c331de95fb7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9b6aaca90f0449b539d5",
          "headline": "Jensen Huang이 NVIDIA Sparks AI Optics로 복귀하면서 Applied Optoelectronics와 Lumentum이 22% 상승했습니다. 일관된 점프 19%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795449427,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0fa3bc2818ca19361123e599e12707b33f511b8aab21e842630f3de16cb49cc4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7dd04fac10d68616d345",
          "headline": "LITE SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1795359600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026075535/lite-20261118.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1795567561.236277,
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
      "updatedAt": 1795567561.236277,
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795543525,
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
          "eventId": "cf2517d2cbd0f8a6fc58",
          "headline": "Vistra Stock의 이야기는 어떻게 바뀌었나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795543525,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c77d71095aca3b50b7c14c7b4f3159fda74cee49350e520cb2d1e5e3cfd38c3c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "83626e741d11d0e3bca6",
          "headline": "Exelon 또는 Vistra: 귀하의 전력 수요 베팅에 적합한 것은 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795466329,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6cd7a708e987ae90c87ebfcdc24c3d202c033951b607650964376f6f2382cfc5",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795462519,
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
          "eventId": "d6ceb28c85bdd18d8648",
          "headline": "Baird는 방금 Vertiv를 200달러 목표로 다운그레이드했는데 이는 수익에 관한 것이 아닙니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795462519,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b3a2b7b715141e60079602b6482f6525453681417003bbaeb6f19094893d59d",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1795567561.236277,
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
      "updatedAt": 1795567561.236277,
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
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795453411,
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
          "eventId": "aace602a57c771072a6e",
          "headline": "지난 분기에 13개 대형 펀드가 Vertiv Holdings Co를 인수했고, 17개는 매각되었습니다. 누가 맞나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795453411,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ee49adfaa3293f74747eea87a863222943a03b5093f3df04e4306bd8c106fcb",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1795567561.236277,
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
      "updatedAt": 1795567561.236277,
      "dataAsOf": 1795455234,
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
          "eventId": "6b1b90ba844c28a9e7c3",
          "headline": "투자자들은 Seagate의 장기적인 AI 성장 기회를 과소평가하고 있을 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795455234,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9d0044f5e95ca0319c28bc9b351f3df5f71505f8a99b5f7f98c7dd53d92f90c3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec9798d8e9c26f1ab018",
          "headline": "Jensen Huang의 NVIDIA Sparks AI 칩 반등으로 SanDisk 22% 급등 Seagate 점프 18%, 마이크론 랠리 16%",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795446278,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9b9e1e31324951f997dcf2b31bf1188c5a4e046d8cee60a4f044a33a5292583",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1795567561.236277,
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
      "updatedAt": 1795567561.236277,
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
      "updatedAt": 1795567561.236277,
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
