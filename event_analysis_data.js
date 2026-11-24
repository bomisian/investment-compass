// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1795487220.199903,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795463390,
      "signal": "중립·확인 대기",
      "netScore": 1.26,
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
        },
        {
          "eventId": "08f7d7f8dd3144026936",
          "headline": "Microsoft AI 파트너십이 Danaher(DHR)의 투자 내러티브를 변화시켰습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795238138,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e08e79d8942625837bdbfc03a0261429b16cebee1706502ba1ab1f34c9232de",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e2234533c9fb4b3cb3ac",
          "headline": "Danaher(DHR)는 Microsoft AI Lab 파트너십 이후 저평가되어 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795234811,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc61039492d60a12b1c5dd364bb74d621efea4a02fedc2f2764081ab7cdf595a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "78095a752f4da9aca504",
          "headline": "인텔: 54% 붕괴로 인해 내 평점이 바뀌었지만 주의할 점은 아닙니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795231152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fda3fbc69592868df08f624ba2fc435166c0042d0c176d9dc69105e5c36f90d7",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795470284,
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
          "score": -0.17,
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
          "score": -4.97,
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
        },
        {
          "eventId": "9d1f650bb1a1ff3b63cd",
          "headline": "엔비디아는 프론티어 랩이 되어야 합니다. \"프론티어 랩이 칩 회사가 되는 것보다 더 빠르게.\" 네모트론(Nemotron)이 선두주자다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795350925,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d3174d970c44dcd6f6f277b3251fed19ac84207f8367f89491e3b3816dfc838",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "10e6dcfaaa2ff9f1d0f9",
          "headline": "알파벳 주식이 1년 만에 최저치를 기록했습니다. 구글의 모회사는 왜 그렇게 많은 돈을 빌렸는가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795303248,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=475fb3de7e6a4768ab2afc2f57b595b9700285ecf3198f5acc521129cedd61e4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7faf0a1ae01440628a0d",
          "headline": "Google은 Elon Musk의 SpaceX에 300억 달러를 지불하고 있습니다. Jim Cramer가 방금 그 이유를 밝혔습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795279697,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=694f1d18ea4035f96b195b2a17a89b2d08f39a34f5bf898baba99a213da03a24",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "388b9453014f78d2e975",
          "headline": "알파벳(GOOGL)은 30억 달러의 결제 금액으로 848억 달러에 가까워졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795270206,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d616ee0eec0f726a539e697b355c9f61dc20fa8c7d3eb014b7cc40bc14e8c8b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3c93a19e101f7d64d7a9",
          "headline": "예측: 5년 후 알파벳 주식의 위치는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795248602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62851f2a384e13f4c54ee15bf67d38ea360f8c1655936580c0f342f6516b7598",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795453349,
      "signal": "주의 강화",
      "netScore": -2.73,
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
        },
        {
          "eventId": "ac28efdbd83d2f8fef5b",
          "headline": "11월이 끝나기 전에 Vistra 주식을 구매해야 하는 1가지 강력한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795291502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15d608b21880b477461b8af69f0e10fcb987fe8afbcefd99baa494f83599b1d6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "70bb456371e9b4ad2621",
          "headline": "2028년 잉여현금흐름의 70배가 넘는 가격으로 Microsoft와 Amazon을 구매하시겠습니까? Capex가 반환해야 하는 사항은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795278038,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16eac4f472186084139e5d319053986755fc0e8362381fdf83537f1987eb2a0e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1d7d781dd8810bbbfc10",
          "headline": "수익 창출 및 Amazon 공급 거래 후 Generac 주식에 초점이 맞춰졌습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795220377,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5850d7247851659fe14bd0e69ea670d8e74eb776ce92ef4f51a0f0a84253dc25",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795454025,
      "signal": "주의 강화",
      "netScore": -8.19,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.05,
          "level": "주의"
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.15,
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
        },
        {
          "eventId": "b6457d9c29e47b07c9a6",
          "headline": "Mark Zuckerberg의 메타 플랫폼은 올해 AI에 최대 1,450억 달러를 쏟아 붓고 있습니다. 투자자들은 이 1가지 숫자를 주목해야 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795321861,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13314ba30927fcba447282489c24ddaf1140ebe1f2d3bae1ebad7762c14fa9c2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ac28efdbd83d2f8fef5b",
          "headline": "11월이 끝나기 전에 Vistra 주식을 구매해야 하는 1가지 강력한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795291502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15d608b21880b477461b8af69f0e10fcb987fe8afbcefd99baa494f83599b1d6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "879839b274822abd4208",
          "headline": "메타는 AI 구축을 위해 자사주 매입을 중단했습니다. 얼마나 더 쓸 수 있나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795285923,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=756a93a60d2e7a312ae7a9188bbcd22edc3f8a43ef1d80055dc5c19094bf2cc8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0452098b1d9fe3028649",
          "headline": "Apple: AI 버블에 가담하지 않고 승리하는 방법을 보여줍니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795232720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=508bc8593feda5af9660edbf4dae9b23acdb8bb2fae86f9249fd4c8e5b7d2238",
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
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795464990,
      "signal": "주의 강화",
      "netScore": -5.37,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.87,
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
          "score": -3.67,
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
        },
        {
          "eventId": "f80de9faf5a9f8b7c5c3",
          "headline": "Apple: 다운그레이드 뒤에 숨은 위험",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795257043,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e5f3d0491365e8122c8107a82d1bea53f75d80f949f2caf4dd57af0000d4118",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d3a6485813c71f4395cc",
          "headline": "발사된 발사: Apple이 에이전트를 구축함에 따라 Meta는 무료 Verizon 5G와 함께 300달러의 Muse Charm을 판매할 것이라고 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795212018,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86f208791ec5260330118592ce7b5f2fe19295c50369697cc057dacfd1c817de",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "004c12db2a0db553ce58",
          "headline": "마이크론 사장 \"우리는 모든 고객을 지원할 수 없다\" 애플이 삼성의 DRAM에 막혔습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795199041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a3644917317e0aa3a6dfd10a2be7592cb725beeb479e36b6234ccb9f8dffb3d1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795447167,
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
          "score": -2.45,
          "level": "주의"
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
        },
        {
          "eventId": "77f93f72c516c60520c7",
          "headline": "Jason Calacanis는 SpaceX, Tesla 및 Google과 함께 \"모든 칼을 잡을\" 것입니다. 일부만 저렴함",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795341810,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1957ab22d37d4c33c4f9f628a5d4e63726a5c01f4534ef6ddfbf4d5c96873bd",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50ddb86e698332dc605a",
          "headline": "머스크는 “단순히 SpaceX와의 합병만으로” 주식상을 받지 않을 것입니다. Tesla 주주들은 여전히 ​​투표를 해야 합니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795273561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a3ebd02f9652f834d3b9eb0fc344a93d49555ee102644c26648ad5580d9e8b19",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "649ac46d1e53194eb43b",
          "headline": "MKBHD는 Tesla Cybercab의 2024년 내기를 존중할 것이라고 말하고 Elon Musk는 '충분히 공평하다'라고 말합니다: '나는 배달을 수락할 것입니다...'",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795241640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c842855e37c26dc6429c09d1563d5f5d88350111c6fa8e239189f99a6a9143e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f80afd9cc4ec2b6c670a",
          "headline": "0에서 60까지: 이번 주 Waymo가 고속도로 운영을 일시 중지함에 따라 Tesla는 Cybercab을 달라스로 확장합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795221941,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d9ee83e57c90bb559284617899cc7d8692945ccb84539a5eb6a17293e7d9fe5",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795458602,
      "signal": "주의 강화",
      "netScore": -3.23,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.52,
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
          "score": -2.97,
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
        },
        {
          "eventId": "fa5f6a2d8b982d717f6f",
          "headline": "오라클은 구매 대상입니다. 특가 상품에 있으며 더 이상 존재하지 않을 것입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795340322,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12f04658f7ee2cad1e6d39311f43fb88394135ef687d5c6bf5dd293802c79ec6",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795433901,
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
        },
        {
          "eventId": "6db5d7f49853c08e6c07",
          "headline": "Salesforce vs. ServiceNow: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795211237,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9e72c9827b130344ad5727844d60aeaeb26fdd16c97401afefcf81254bdadc53",
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
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795372382,
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
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795469657,
      "signal": "중립·확인 대기",
      "netScore": -1.95,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
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
          "eventId": "53635f4b491839185783",
          "headline": "코히런트는 황 복귀의 진정한 승자입니다. 엔비디아는 자사주 매입으로 20억 달러를 지불했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795469657,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33a3af7399c69e09df2f8a05b656b6e8c0dd3a66f2f1296346dc819415dbcc90",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "7a7ab83be9900f2f5688",
          "headline": "억만장자 Andreas Halvorsen은 Microsoft를 떠나 TSMC를 18억 달러의 최고 보유 자산으로 만들었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795467446,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c2592fdda67ab8bdce4316f7cbf1833bea67d19e89e9d6b861eb29dfeb62a04f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3aaafb3f419f631304b7",
          "headline": "Jensen Huang의 복귀로 Micron, Dell, TSMC 및 Nvidia에 의존하는 AI 주식에 약 5000억 달러가 추가되었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795464780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d0e13968a9cd407de3bbd6e4281847394f71cf489c6693620b7cd21d19ebe70a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "7b3154a9efc8feddedb3",
          "headline": "Nvidia가 10배의 수익을 올릴 때 AMD가 30배로 거래하는 이유는 무엇입니까? AMD의 중국 노출이 더 크다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795463501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8103cc02a5cd6d653387695cca9520b634679a495847db7f4b155d622e9f49fa",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "eventId": "9be710c1e4797942e8f5",
          "headline": "Salesforce 전 CEO의 AI 스타트업 Sierra가 300억 달러 가치 평가를 받았습니다. 단 6개월 만에 두 배로 늘어났습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795460102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a4e9abc681c5498cf73339bfc3eef015c683a3ed98b8fb898cd57a97c961139",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "eventId": "c2406c8b8f02b98c5a28",
          "headline": "엔비디아는 이제 Jensen Huang 낙관주의로 세계에서 가장 가치 있는 기업에서 Apple에 이어 2위를 차지했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795454730,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b486e39527a7c4e27450ea2605bb70f357b6a1ad86fc1740a8cdf5c796f4070",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f163edd02e7e8c73e52b",
          "headline": "Nvidia가 Jensen Huang을 재고용하여 오늘 Sandisk 주가가 급등하는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795449825,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1615be7b0d22cfbaf7ce0feb262b956372f172b4d178b4a6cdecbb560720f13b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 61,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795470284,
      "signal": "중립·확인 대기",
      "netScore": 1.29,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": 3.77,
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
          "eventId": "53635f4b491839185783",
          "headline": "코히런트는 황 복귀의 진정한 승자입니다. 엔비디아는 자사주 매입으로 20억 달러를 지불했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795469657,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33a3af7399c69e09df2f8a05b656b6e8c0dd3a66f2f1296346dc819415dbcc90",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7a7ab83be9900f2f5688",
          "headline": "억만장자 Andreas Halvorsen은 Microsoft를 떠나 TSMC를 18억 달러의 최고 보유 자산으로 만들었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795467446,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c2592fdda67ab8bdce4316f7cbf1833bea67d19e89e9d6b861eb29dfeb62a04f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "3aaafb3f419f631304b7",
          "headline": "Jensen Huang의 복귀로 Micron, Dell, TSMC 및 Nvidia에 의존하는 AI 주식에 약 5000억 달러가 추가되었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795464780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d0e13968a9cd407de3bbd6e4281847394f71cf489c6693620b7cd21d19ebe70a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7b3154a9efc8feddedb3",
          "headline": "Nvidia가 10배의 수익을 올릴 때 AMD가 30배로 거래하는 이유는 무엇입니까? AMD의 중국 노출이 더 크다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795463501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8103cc02a5cd6d653387695cca9520b634679a495847db7f4b155d622e9f49fa",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9be710c1e4797942e8f5",
          "headline": "Salesforce 전 CEO의 AI 스타트업 Sierra가 300억 달러 가치 평가를 받았습니다. 단 6개월 만에 두 배로 늘어났습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795460102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a4e9abc681c5498cf73339bfc3eef015c683a3ed98b8fb898cd57a97c961139",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 38,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795470284,
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
          "score": -1.05,
          "level": "주의"
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
        },
        {
          "eventId": "eb15f59b2782add68333",
          "headline": "OpenAI의 Greg Brockman: AI는 5개월 이내에 AMD 칩에 \"거의 추가 1년의 발전\"을 제공했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795350932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d573c7c490e4fcde0bee7492b13b718edbb2a3bb65f35a8a5987a05f1dc203b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9d1f650bb1a1ff3b63cd",
          "headline": "엔비디아는 프론티어 랩이 되어야 합니다. \"프론티어 랩이 칩 회사가 되는 것보다 더 빠르게.\" 네모트론(Nemotron)이 선두주자다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795350925,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d3174d970c44dcd6f6f277b3251fed19ac84207f8367f89491e3b3816dfc838",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3e7fad8d434272bb6517",
          "headline": "Nvidia 주식은 48% 폭락했으며 현재 15배의 수익으로 거래되고 있습니다. 이는 10년 만에 가장 저렴하고 Microsoft 및 Broadcom보다 저렴합니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1795308420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c64373810cdf2091b46076551ddb6887e09a0b646da2e486f1e243f6fa52d3c4",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "212a141e23e557df370e",
          "headline": "Cathie Wood는 방금 Broadcom 주식을 600만 달러에 매각했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795287092,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d72e8bce083a310be5269b05a4663fbbcea2e8f5b76a9e434ee9c4d974798ca1",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bc6b7c208e9388993415",
          "headline": "ASML 대 Broadcom: 2027년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795272062,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2483ce28086fa6b415d606c7ac8585b562516742c9fa7ced82b00115bd2912d2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "07944397c849bea54dcf",
          "headline": "Broadcom은 최대 290억 달러 규모의 Anthropic 임대를 지원합니다. Anthropic은 방금 IPO 팝을 반환했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795257324,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9eaac089f2aa2870011cef421f43375c9574a8c4a206638b4e1058adb654b0eb",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3523708765ba42da2302",
          "headline": "데이터센터 AI 칩이 승자를 바꿀 수 있다: Broadcom과 Marvell",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795217154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=350b7b787df4ab1d9e0d47982aacd2338851263fb35869cc7aa66e9b84608c46",
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
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795429202,
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
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795436145,
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
          "score": -4.2,
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
        },
        {
          "eventId": "c491cd5f4b24e52e013f",
          "headline": "Lumentum의 CEO는 \"물리학 법칙이 섬유에 유리하게 작용하고 있습니다\"라고 말합니다. Marvell 보유자들은 그것을 싸게 구매하고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795348758,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff1ef5057c36996143647c96cd249056755ccbdd79f77937b649fdbe2454e5b3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9edd4962f5656bbe584f",
          "headline": "Nvidia의 혼란으로 AI 칩이 타격을 입으면서 Marvell은 일주일 만에 22% 하락했습니다. 12월 1일 이전에 매도하시겠습니까, 아니면 장전하시겠습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795285237,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=121c68f7c2f8cf289e8004efed86200cb4840ab5addf6ebe334b99e1d6617f06",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f74c51300d9c9ffa555e",
          "headline": "Lumentum: 54% 폭락 후 적극 매수로 업그레이드 중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795236737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67566374d263340fab1168ae9fca00c56218446d1655a457a2994005bfedbccd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3523708765ba42da2302",
          "headline": "데이터센터 AI 칩이 승자를 바꿀 수 있다: Broadcom과 Marvell",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795217154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=350b7b787df4ab1d9e0d47982aacd2338851263fb35869cc7aa66e9b84608c46",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5b07abb3193b7f364a8f",
          "headline": "Marvell의 1,150억 달러 규모의 Lumentum 거래로 새로운 가치 평가 테스트 생성",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795210872,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66a20bf4cbe8b5ec550e6c876a9fe86f3deb80fcc358f15380041849719764eb",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795464990,
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
          "score": -1.75,
          "level": "주의"
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
        },
        {
          "eventId": "6eb313a5116b9e5cb15f",
          "headline": "ASML vs. SK 하이닉스: 2027년에는 어느 인공지능 주식이 더 나은 매수인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795279501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9d2c08561fbd017dc8f00d02cdf48fa5660c1f4f425dbea533080f59680a662e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e024788d2d1e70ca46df",
          "headline": "Nvidia는 AMD 및 Intel 주식 투자자들에게 중대한 경고를 발표했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795263242,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e48366fecfb655e6b804d1360fa293f1dd421125823b4438d2978646c9dcc95",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "78095a752f4da9aca504",
          "headline": "인텔: 54% 붕괴로 인해 내 평점이 바뀌었지만 주의할 점은 아닙니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795231152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fda3fbc69592868df08f624ba2fc435166c0042d0c176d9dc69105e5c36f90d7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b736d0bbe55f330c6e73",
          "headline": "인텔: 가치 평가가 현실을 충족하고, 제품 주기가 다음 행보를 결정합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795222579,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=773e0a1efb72d7b46a35f9dd847cacfaa6d3d3c3f16c61af840c30c327e56c46",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "89448f45e3df805523da",
          "headline": "AMD는 26%, 인텔은 42% 하락했습니다. 하락장에서 매수할 가치가 있는 AI 주식은 무엇입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795207802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=508b47838c9c6b854dc7a819b077dcb76b8aa8601a12831496b1330470110bb2",
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
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795449328,
      "signal": "주의 강화",
      "netScore": -8.54,
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
          "score": -2.27,
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
        },
        {
          "eventId": "48331f66c46f651c2eaa",
          "headline": "AI 칩이 상품화되면 Nvidia가 가장 큰 손실을 입게 되고, 이 3개 주식은 이익을 얻게 됩니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795260902,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=59cc94147c41a4abb1e3c27a55676d601c6de6b0ed40a3c7c8cc359dc075a3cb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8c5a5112cf4b9858a848",
          "headline": "TSMC는 Nvidia Jitters와 중국의 새로운 미국 칩 억제로 인해 일주일 만에 20% 하락했습니다. 구매할 시간인가요?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795255649,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01998cb66d368dd271cf750d978f01d52568b2c65ced61ce766ec192f6c554a5",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0127e873ec7db504cfc9",
          "headline": "TSMC: 중국 거대 기술 기업의 경고 신호를 살펴보세요",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795248294,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=059e4b73fe7162f5e599a8cf00c16ef12a5ff70f3db408d72a1a0ccdefa9d75f",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795436136,
      "signal": "주의 강화",
      "netScore": -5.45,
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
        },
        {
          "eventId": "6eb313a5116b9e5cb15f",
          "headline": "ASML vs. SK 하이닉스: 2027년에는 어느 인공지능 주식이 더 나은 매수인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795279501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9d2c08561fbd017dc8f00d02cdf48fa5660c1f4f425dbea533080f59680a662e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bc6b7c208e9388993415",
          "headline": "ASML 대 Broadcom: 2027년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795272062,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2483ce28086fa6b415d606c7ac8585b562516742c9fa7ced82b00115bd2912d2",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795274102,
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
          "eventId": "9f85b626940284b11bcc",
          "headline": "Applied Materials vs. Nvidia: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795274102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2dcd2e5187250ed759696ed4c2ec5beaa834e22cbe540e90072506ee1dbafc6b",
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
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795469657,
      "signal": "우호적 변화",
      "netScore": 9.12,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.92,
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
          "score": -3.15,
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
          "eventId": "53635f4b491839185783",
          "headline": "코히런트는 황 복귀의 진정한 승자입니다. 엔비디아는 자사주 매입으로 20억 달러를 지불했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795469657,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33a3af7399c69e09df2f8a05b656b6e8c0dd3a66f2f1296346dc819415dbcc90",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7a7ab83be9900f2f5688",
          "headline": "억만장자 Andreas Halvorsen은 Microsoft를 떠나 TSMC를 18억 달러의 최고 보유 자산으로 만들었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795467446,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c2592fdda67ab8bdce4316f7cbf1833bea67d19e89e9d6b861eb29dfeb62a04f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "3aaafb3f419f631304b7",
          "headline": "Jensen Huang의 복귀로 Micron, Dell, TSMC 및 Nvidia에 의존하는 AI 주식에 약 5000억 달러가 추가되었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795464780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d0e13968a9cd407de3bbd6e4281847394f71cf489c6693620b7cd21d19ebe70a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "27d183defa94c3c09f5a",
          "headline": "Micron Technology 주식은 700달러에 매수됩니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795461121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8e6853c2f70d19acbcda7248137354f9991beace1dd9c1cdb09ce877ca5a8fd3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9be710c1e4797942e8f5",
          "headline": "Salesforce 전 CEO의 AI 스타트업 Sierra가 300억 달러 가치 평가를 받았습니다. 단 6개월 만에 두 배로 늘어났습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795460102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a4e9abc681c5498cf73339bfc3eef015c683a3ed98b8fb898cd57a97c961139",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "879a4eafcf6d74a0bd0d",
          "headline": "오늘 마이크론 주식이 상승한 이유",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795448822,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=add2404f2821ee681dbfcb8f6830fa5db55c4e57b76b61dd59cb5c637825411a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 36,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795455111,
      "signal": "우호적 변화",
      "netScore": 3.84,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.92,
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
        },
        {
          "eventId": "926bfffd4ea06e75393d",
          "headline": "SK하이닉스, 마이크론·샌디스크로 일주일 만에 21% 급락. 미국산 프리미엄은 '특별한 경우'",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795279856,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=339bea4733666c1f570c6fa687d2e22c1e95eb6d773248ecb7de8d96fe4a4eb0",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795225358,
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
          "eventId": "d38e0ba461b7030468c6",
          "headline": "Seagate의 탄탄한 실적은 보류 중인 가격 협상(등급 하향)으로 인해 막혀 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795225358,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dda5c7e2aa3f1d697970363f00e557b321b78c813ebc063714434b8ac087202f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1b804a69ee0c9e5b3eb6",
          "headline": "Credo Technology Group vs. Western Digital: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795213028,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e39b3e555f08776efc242bd0a2771ebfab9135fbab0f7c2e89fcdc8fa39b6797",
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
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795275334,
      "signal": "주의 강화",
      "netScore": -3.13,
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
          "eventId": "48eb3154eab2f4b3f8bc",
          "headline": "AI 거래가 폭발해도 메타가 구원받는 은혜는 소셜 미디어 사업이 여전히 \"많은 현금을 창출\"한다는 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795275334,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ced89275ef0bab41a160a640bc02c650552e8518661158e126265cc0735eeb3e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "58b00e687f5b74e2dd20",
          "headline": "Arista Networks 대 Axon Enterprise: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795274499,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c62346160730a4a455f7ce596018671d6ed2bbb615c165573c589a8729c18c82",
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
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795449427,
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
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795449427,
      "signal": "주의 강화",
      "netScore": -5.04,
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
          "score": -2.62,
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
        },
        {
          "eventId": "c491cd5f4b24e52e013f",
          "headline": "Lumentum의 CEO는 \"물리학 법칙이 섬유에 유리하게 작용하고 있습니다\"라고 말합니다. Marvell 보유자들은 그것을 싸게 구매하고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795348758,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff1ef5057c36996143647c96cd249056755ccbdd79f77937b649fdbe2454e5b3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9ea4d6ec078f9dd6a7bf",
          "headline": "Oppenheimer의 425달러 목표는 Marvell의 매각이 너무 멀리 갔다고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795271213,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=944314d90be50cb8877217f1eb0afd1a4646885934e8aa405f941aef74a77ac2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f74c51300d9c9ffa555e",
          "headline": "Lumentum: 54% 폭락 후 적극 매수로 업그레이드 중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795236737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67566374d263340fab1168ae9fca00c56218446d1655a457a2994005bfedbccd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5b07abb3193b7f364a8f",
          "headline": "Marvell의 1,150억 달러 규모의 Lumentum 거래로 새로운 가치 평가 테스트 생성",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795210872,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66a20bf4cbe8b5ec550e6c876a9fe86f3deb80fcc358f15380041849719764eb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795466329,
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
        },
        {
          "eventId": "ac28efdbd83d2f8fef5b",
          "headline": "11월이 끝나기 전에 Vistra 주식을 구매해야 하는 1가지 강력한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795291502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15d608b21880b477461b8af69f0e10fcb987fe8afbcefd99baa494f83599b1d6",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795462519,
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
        },
        {
          "eventId": "5464038b8952da166d06",
          "headline": "Eaton: 훌륭한 분기와 위험 보상의 대대적인 개선",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795455802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2f372bfb7dfb3f551803340005af9c31ca584d53bed07fe355194fb308462485",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795455234,
      "signal": "우호적 변화",
      "netScore": 2.3,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.57,
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
        },
        {
          "eventId": "d38e0ba461b7030468c6",
          "headline": "Seagate의 탄탄한 실적은 보류 중인 가격 협상(등급 하향)으로 인해 막혀 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795225358,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dda5c7e2aa3f1d697970363f00e557b321b78c813ebc063714434b8ac087202f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9b88d25798aff4f9cb73",
          "headline": "Seagate 주식 및 AI 데이터 센터 수요가 투자자에게 다시 돌아오는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795212687,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03012aaa80c1451657a261c9689a57e661762143fb3527877b93a479c69ef12a",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
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
      "updatedAt": 1795487220.199903,
      "dataAsOf": 1795205616,
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
          "eventId": "66ae34bd29109b42b389",
          "headline": "Bloom Energy(BE)는 자사의 연료전지가 몇 달 내에 AI 데이터센터에 전력을 공급할 수 있다고 밝혔습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795205616,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=13deec58723b9ada13daea96e2109a2a72da9f2b5dee7837da9f551b26ada61d",
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
    }
  }
};
