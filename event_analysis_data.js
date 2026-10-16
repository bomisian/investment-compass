// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792121709.4345956,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792088681,
      "signal": "우호적 변화",
      "netScore": 4.34,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
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
          "score": -0.35,
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
          "eventId": "2a32384d075b71d7f096",
          "headline": "Meta Just Climbed 12% in a Month: Take Profits, or Hold On for the Ride?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792088681,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec9a00a67fe37f48f259730138042cae52bbc94fd98fedc68bc962fa31dfa96d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "771bb5c3a5bdac770383",
          "headline": "PRG, Devsinc와 협력하여 Microsoft Dynamics 365를 통해 확장 가능한 성장을 위한 디지털 기반 구축",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791979200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6378d4e4e6b0212b487b4e267ae7d8138dc7e83393e23dc0f4e17386e3d7915b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "286687d9921d0126f014",
          "headline": "라이프사이언스 애널리틱스 시장 보고서 2026: 2030년까지의 규모, 점유율, 추세 및 예측 | Oracle, SAS, IBM, IQVIA 및 Microsoft로 15.6% CAGR을 활용하여 AI 채택 가속화",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791965280,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cec419f962eb402361684ccae78a2335aaf1c62b3396e0445add85b7c3673535",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "18ecd1a266ab79be0d7e",
          "headline": "Microsoft는 AI 데이터 센터 지출이 급증하는 가운데 Azure 분야에서 20%의 비용 절감에 무게를 두고 있습니다: 보고서",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791934848,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06259daa8c151882c5e4e07bc8de9c5407fcee4a3ddae08331510c2640ac4466",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2aea580d56ef499dd92e",
          "headline": "Microsoft, 데이터 센터 임대로 1,300억 달러 보고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791925257,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d5e9ea24379bf4bd18c73f90458e93adf7ba5f60b937dfaa4c94379a9604126",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792088681,
      "signal": "주의 강화",
      "netScore": -3.77,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": -0.17,
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
          "eventId": "2a32384d075b71d7f096",
          "headline": "Meta Just Climbed 12% in a Month: Take Profits, or Hold On for the Ride?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792088681,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec9a00a67fe37f48f259730138042cae52bbc94fd98fedc68bc962fa31dfa96d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c82357cd4a16cf90b3c2",
          "headline": "From Search Destruction to Efficiency, I Have Faith in Alphabet’s Abilities",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792075502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f143854c2785446409ce8a06780abf4a86dd97b280736b8a8313ebb9cfd8df7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3aaa2de595c76d97675e",
          "headline": "Alphabet Might Use Waymo to Destroy Tesla’s First-Mover “Robotaxi Monopoly” Premium",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792068309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5712ff407b98f8701e42e53341a2b07d726d0aee429204cd8ed334a956628a7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1d1eef6664067e6f6962",
          "headline": "Google은 SpaceX에 월 9억 2천만 $ 를 지불하기 시작했습니다. 주당 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792045500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=153589e8f3c01841ead98d779274948927e39449214d5f15859f71ec820112b0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b1a74cc69492eb37c29a",
          "headline": "Gene Munster는 Meta의 Muse를 ChatGPT보다 Google 검색에 더 큰 위험으로 표시합니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1792013639,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddffb5481b1b0ae8fb15c87dc6bb06573d3b001877a8059cf0e53218a67ddf66",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a9f25191a058ee8428fa",
          "headline": "Constellation Stock은 Google의 20년 핵 거래에서 12% 상승한 후 매수인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792003800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73d33434d7e29d84bb655fc5f71e61c7b4534c01c7babb958042335cb848e428",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "10b10d7f763be35ad7d2",
          "headline": "Google은 기존 원자로에 대한 계약을 체결했습니다. 그렇다면 Oklo와 NuScale이 Constellation Energy 뉴스에 뛰어든 이유는 무엇입니까? Read-Through 투자자가 누락되었습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791972540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a118eaff971fca81634c2b06dbb4c14f3fe0ea1c742f8c2976b45ec78a2bec4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "430b5612b722b3a65358",
          "headline": "알파벳 vs. 메타 플랫폼: 수익 동향이 투자자에게 알려주는 것은 다음과 같습니다. 인공 지능 회사로 변신한 미디어 자이언트",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791955489,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b0f2c14dbf314d0c44107fa7cab165364a9c6030431fafbb9328d5b9096471b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "229ade461976ca0c85ae",
          "headline": "CrowdStrike vs. Palantir Technologies: 수익 동향이 이러한 고성장 기술 기업에 대해 투자자에게 알려주는 점",
          "eventLabel": "실적 발표",
          "publishedAt": 1791935749,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=27b4761eb5cf4fa8f70eb889c8f770f8493ddff13dc0c1960d8bbeb6547d2d46",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3754cacb2bc92e6dd969",
          "headline": "Apple은 299달러짜리 Siri AI 장치로 스마트 홈 분야에서 Amazon과 Google을 상대하고 있습니다. HomeView는 새로운 CEO John Ternus의 첫 번째 큰 승리입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791913821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2449258756238b8536a71b173a0b1988206eba55770f01f2c73559091a4cd73",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4765c947fbb6de07d813",
          "headline": "알파벳 주식을 보유하는 것이 얼마나 어려웠나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791904245,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a079a1e354364bef5d5b6aeb9f7a7f12186fedf96d99f69a5e8dd5ba97b83186",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792000093,
      "signal": "중립·확인 대기",
      "netScore": -1.06,
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
          "eventId": "93d12eea857287260394",
          "headline": "Amazon 고객은 3억 950만 달러 규모의 소송에서 지불금을 받을 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792000093,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66ffaf3f9fb2494a46c22c16dada291a50d8034fbe818ab3169263e9052ae51a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "18ecd1a266ab79be0d7e",
          "headline": "Microsoft는 AI 데이터 센터 지출이 급증하는 가운데 Azure 분야에서 20%의 비용 절감에 무게를 두고 있습니다: 보고서",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791934848,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06259daa8c151882c5e4e07bc8de9c5407fcee4a3ddae08331510c2640ac4466",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "3754cacb2bc92e6dd969",
          "headline": "Apple은 299달러짜리 Siri AI 장치로 스마트 홈 분야에서 Amazon과 Google을 상대하고 있습니다. HomeView는 새로운 CEO John Ternus의 첫 번째 큰 승리입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791913821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2449258756238b8536a71b173a0b1988206eba55770f01f2c73559091a4cd73",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1791999015,
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
          "score": 0.87,
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
          "eventId": "b75e8f8fd02f19173921",
          "headline": "Mark Zuckerberg는 Meta의 AI CapEx를 옹호하며 '다가올 수십 년'을 지배하기 위해 최대 '2000억 달러'에 대해 '이 수표를 작성할' 준비가 되어 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791999015,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ba244cfa6312d0c812a97b6e04060129fe55a5b9a5a79c664bf12aaba27c44e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "430b5612b722b3a65358",
          "headline": "알파벳 vs. 메타 플랫폼: 수익 동향이 투자자에게 알려주는 것은 다음과 같습니다. 인공 지능 회사로 변신한 미디어 자이언트",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791955489,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b0f2c14dbf314d0c44107fa7cab165364a9c6030431fafbb9328d5b9096471b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fd006345c7287f0b948c",
          "headline": "Meta, 최초의 프론티어 AI 모델인 Muse Wonder 출시: Capex 비용을 지불할 수 있습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791905608,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=79f38ef88dbaebd95c9b20db0feb6d0768acbd47745e0940c9aa23791350b1a2",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792086399,
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
          "eventId": "0bd92d6377af1796f1c5",
          "headline": "The Man Who Built the Apple Store Never Tried to Sell You Anything",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792086399,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=154bbb01ab31c3ae16a177ed57a15873bc0c4e989762b8ea7463aec37999da6f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "86913bcb8f33e36b5db1",
          "headline": "S&P 500, Nasdaq은 칩 제조업체의 패배가 심화되고 CPI 데이터가 뜨거워지면서 2개월여 만에 최악의 날을 기록했습니다 — AAPL, SPCX, DRAM, SOXX에 초점",
          "eventLabel": "실적 발표",
          "publishedAt": 1792022846,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e80296d04e8afcfb793ffdedfc6379af9ed321203cc821b5b0ea74f811df8139",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5cbf28b0a6c1b533c6f7",
          "headline": "Elon Musk의 SpaceX가 Apple 주주들에게 좋은(그리고 나쁜) 소식을 발표했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791998400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1b2fd7ec367619802325f08377faa051cd95739e88d952b6f8fbf339e80d4e62",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ae862f88dcdab8ee953",
          "headline": "Agentic AI 회의론: Apple과 Salesforce가 공통 문제에 직면함",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791989154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eddde38745b573dc82d6244449870335d979d0f2f218efbd845bb633cc8df711",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7f595412dea94023d8a3",
          "headline": "Apple의 새로운 하드웨어 전략은 AI 시대에 맞춰 신뢰를 활용합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791972000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16dadb061ad8534d1d06dd8d04f1703ec51312c7435878e4aca78a336ae4f574",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "90029b1210e0290c7d66",
          "headline": "연휴 기간 동안 Apple 주식을 매수할 수 있나요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791966900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7649b8948764a2606717bb8c2668ed04f4065d4dde038a641a5d563f27fc7478",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "e87b8eb04083d34b738e",
          "headline": "Apple Siri에 대해 한 달에 $ 20를 지불하시겠습니까? 애널리스트가 $ 24B를 제공 할 수 있다고 말하면서 스마트 홈 제품에서 더 작은 부스트를 봅니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791953758,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29963b90b9418ecdb6a13424305d4bc309bd3217debbbde6509075ce6d430e2e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "3754cacb2bc92e6dd969",
          "headline": "Apple은 299달러짜리 Siri AI 장치로 스마트 홈 분야에서 Amazon과 Google을 상대하고 있습니다. HomeView는 새로운 CEO John Ternus의 첫 번째 큰 승리입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791913821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2449258756238b8536a71b173a0b1988206eba55770f01f2c73559091a4cd73",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792092300,
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
          "score": -1.05,
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
          "score": -3.15,
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
          "eventId": "8081a22be1c10907da15",
          "headline": "Tesla's Cybercab Robotaxi Fleet Jumped Eightfold in a Month to More Than 300 Vehicles in Austin, With Dallas Up Next. Is Elon Musk's Robotaxi Bet Finally Scaling?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792092300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67b0782d8034f7c2929f76f450f739ebc8e5270d9f4e9206861338c52627f737",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9e2560fa26b47fb47d4c",
          "headline": "Nvidia's Huang Signals CoreWeave Financials Improving, With Decreasing Cost Of Capital",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792085100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56e427a1579e60a768086cdbc30bbb1e9d00f66c2a7e08a10b520fec7d0ec6e7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7c22ca4f3dd29c9a1de0",
          "headline": "SpaceX CEO Elon Musk Teases ‘X Shop’ After Amazon Shuts Out Grok Agents",
          "eventLabel": "실적 발표",
          "publishedAt": 1792084905,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52535b9a35ee0bd6fd9194f184b5a9f722568eea7bb616a01d4b2bf7f1c7d30b",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "79304427d2f11eb3a775",
          "headline": "TSMC CEO Hints Company Could Back Up Customers If Intel’s Advanced Packaging Ramp-Up Falls Short",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792077551,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8769948bf75b9817a259e0dd09c5e1abdb2520858ec8c6492318b769b1b7595",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3aaa2de595c76d97675e",
          "headline": "Alphabet Might Use Waymo to Destroy Tesla’s First-Mover “Robotaxi Monopoly” Premium",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792068309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5712ff407b98f8701e42e53341a2b07d726d0aee429204cd8ed334a956628a7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "552f9ee5297ba1e4313d",
          "headline": "Elon Musk Just Gave Investors Another Reason to Buy Micron Stock",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792066800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e530cfe9304bb828328b2b1ede0cf245ecc4c22096d93697f9fe29cabae10fa7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8d58cb88fa1a03361a5c",
          "headline": "VG 주식은 GE Vernova, Baker Hughes의 파워 딜에서 프리마켓 상승 – 트레이더들은 이 중요한 저항 수준을 주목합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792065984,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7b43cd4831770fa189c22ec4dea2e79d451de9ee18d88ffdc8421cba1f92c83d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3b7bcb93a6b3fe4cdb19",
          "headline": "다우 선물 상승, 인플레이션을 앞둔 나스닥 제압 프리마켓 데이터: ASML, MU, SKHY, TSLA, BAC, LQDA, GME, IREN Stocks In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791967900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c32ec331bb98924ca74dbf7a10624a2ccef1f4344c7ace6b556ae3b536c357b7",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792005349,
      "signal": "우호적 변화",
      "netScore": 2.45,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.27,
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
          "score": -0.0,
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
          "eventId": "f310bba4d3e852ad6d01",
          "headline": "개방형 클라우드 보안 및 테스트 파트너십은 Oracle(ORCL)의 판도를 바꿀 수 있습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792005349,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d6eac8efc98beb843e9a60d3152ddbb0873cdff79ff9ba9b9df3ff87a45f597",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "e8cd101a65dd2fd1cff3",
          "headline": "ASML CEO, 중국 경쟁 위험은 '매우 낮음', 국가는 여전히 '갈 길이 멀다'",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792000043,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=58b9a17f6b0df792502bd644192bfd791d15ac560d73776ffd6f3cb8f0720028",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "74fab210bc5bf713fb18",
          "headline": "Michael Burry는 작년에 비해 19% 상승한 Palantir에 대해 약세를 보이고 있지만 그의 Oracle Short는 53%의 주가 하락으로 상승세를 보였습니다. 그의 AI 버블 베팅은 여전히 ​​따를 가치가 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791976500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=42ca1e142ae62da5ca8cda275cc472f454eef7f4d6994963ba444ac7b944f9de",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ae7a6a59e2c2932a6cae",
          "headline": "시장의 대화: 오라클, 규제 기관에 뉴멕시코 데이터 센터에 대한 파이프라인 승인 속도를 높일 것을 촉구",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791969297,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0524a7069707454fb0e8135a70027831ed068132f5f923258c16681fd831d862",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "18ecd1a266ab79be0d7e",
          "headline": "Microsoft는 AI 데이터 센터 지출이 급증하는 가운데 Azure 분야에서 20%의 비용 절감에 무게를 두고 있습니다: 보고서",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791934848,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06259daa8c151882c5e4e07bc8de9c5407fcee4a3ddae08331510c2640ac4466",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "00dfe484aa9c874a4e39",
          "headline": "ARM-QCOM 소송: 델라웨어 배심원단, Qualcomm-ARM 라이센스 싸움에서 큰 위험에 대한 판결을 내림",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791921589,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b765a60ac669b13f5b766ada78eda0df8a5d3502679dae7bd2d2063b6550d33d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "66ee675886c00bb2e0f9",
          "headline": "오라클은 연간 전력 요금 크레딧으로 최대 5,500만 달러를 제안하고 Project Jupiter에서 Bloom Energy의 역할을 재확인했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791905122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9ac98d760c90fb96b959ede450f8fd1e367ecb7fee336a03ca6099c13b12c53",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792045433,
      "signal": "중립·확인 대기",
      "netScore": 0.42,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
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
          "score": -2.1,
          "level": "주의"
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
          "eventId": "09fc7c84fe16320324c8",
          "headline": "DocuSign (DOCU) 이 확장된 Salesforce 파트너십에 따라 저평가되었습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792045433,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=569ddb6294b772166cb9078031eabcc080cf9aaf891321c0a2fcccb65a283330",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "79e7e60318b2b54dd911",
          "headline": "Salesforce 대 Palantir Technologies: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791999057,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=544f5ad5536dbc2297c615d80d46068d941f08f3ca7aaf8de52aa90520cf320b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ae862f88dcdab8ee953",
          "headline": "Agentic AI 회의론: Apple과 Salesforce가 공통 문제에 직면함",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791989154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eddde38745b573dc82d6244449870335d979d0f2f218efbd845bb633cc8df711",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ed38e12d5b2ceb17cbeb",
          "headline": "Docusign은 Salesforce에 직접 계약 플랫폼을 포함합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791975861,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7354708d337c387dc36429e938bbd408e2ac484c318d1eb19456f6f31a339c99",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e4246dffa1be1f341641",
          "headline": "Docusign과 Salesforce는 기본적으로 Salesforce 전체에서 지능형 계약 관리를 시작하여 에이전트 계약 워크플로를 강화합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791903600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=92296c1837452263a6c03533f3032aa5ff1ecbaa937090f79b1053386ac53eca",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792046050,
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
          "score": -2.62,
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
          "eventId": "eb8ff80204b378376f8d",
          "headline": "Surf Air Mobility Signs Definitive Agreement With Flying Zebra For OperatorOS, Surf Air Mobility's SurfOS Flight Operations Software For Part 135 Operators Powered By Palantir",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792046050,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae89f2a41da1aecde0617298e7302c3d6e1fa856f65d56bec2171079171bc478",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ee304b98ffa92936f48d",
          "headline": "Palantir는 한 달 동안 16% 상승했지만 오늘은 하락하고 있습니다. 이익을 얻거나 더 많이 사야 할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792004437,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6cfe77f903eb9f3975b3aa3eb8062e787cb7dd96b13ebc2cea4f0135cb67d93d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "79e7e60318b2b54dd911",
          "headline": "Salesforce 대 Palantir Technologies: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791999057,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=544f5ad5536dbc2297c615d80d46068d941f08f3ca7aaf8de52aa90520cf320b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fa2b0bcc936da4678334",
          "headline": "Palantir 억만장자 Peter Thiel, 뛰어난 AI 주식 2개 매입(힌트: Nvidia나 Micron 아님)",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791968882,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dd75aca30f4448b39f059ae8a66295d318b2076fb1db362c23d3f4b851dc686",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "079da698eccf87ed40b8",
          "headline": "Palantir의 CEO와 차트가 같은 말을 한다면 주목하세요",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791909268,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b2a1e25582a0a0f78f78cc17e1c7b033e96c1ef76ba96ea38318bdcf70c92e5",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792089437,
      "signal": "우호적 변화",
      "netScore": 6.53,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.32,
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
          "eventId": "c758ba08d95864610d63",
          "headline": "AI Stocks Plunge, but Jensen Huang Says Nvidia Gets New Chip Orders Almost Daily",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1792089437,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a612c0482d198d3f3d7f775d5d3a718070f9d567d78eef65a18336fb7965b7fa",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "04f43c49fa7c9ba867f0",
          "headline": "Nvidia and Broadcom Narratives Define the AI Chip Landscape",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792082709,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9dd560991e3b2ecebac8d4a311f99c223e7f6c6c705b8445e00b1c2d8b448c94",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "046cbe4d383d09fe6feb",
          "headline": "Guinness Sustainable Energy Fund Highlights Hubbell Incorporated (HUBB) Amid Utility Growth Concerns",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792080629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1b01596e4d03981ced968c5b67f0f77882839b56526c7b6908ed221eee62cbd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ab32a3e4d162af7b5cbf",
          "headline": "Guinness Sustainable Energy Fund Highlights Eaton Corporation plc (ETN) Amid Grid Modernization",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792080533,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e99619c526a73dc9375762739b7e8f6d1ee73c3a2792fcadd3f1eaae1e27c966",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "4c48a98cec1c623f8385",
          "headline": "AMD, NVDA, Other Chip Stocks Extend Rout Amid AI Debt Concerns — Saxo Says Financing Squeeze Could Hit Supply Chain",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792078106,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05e054f1736c6802273c6bfe1802c5547f07ffe852b61efe5e07020c241a9196",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bbb89edcbbc298cdb382",
          "headline": "Nvidia stock sinks amid concerns over AI financing",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792071757,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5be29c761ac0bcb296d825f58282366bc77da18b2bd25aa281ae44156417351",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "df66a9397d1c241007fe",
          "headline": "Meta’s $6.6 Billion AI Tax Credit Question Lands Days Before Q3: What It Means for the Stock",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792071306,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a13ffb1564676745be76e0e5bd6ca38ba6fdb043500aa87d2c7861f190728b84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "6e236056e0e53a8e7f6a",
          "headline": "Western Digital: AI 승자 투자자들이 지불을 거부하는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792053006,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce72d5ee8fd6fa74208b96b5364eafa9e69dde4d6102e5148355afe0aec7cb6a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "0aea3bf485b29ff8b304",
          "headline": "Salesforce vs. ServiceNow: 수익 동향이 투자자에게 알려주는 소프트웨어 자이언트와 AI로의 이동",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792045881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16797728368862c64f33789b46ecf5167b125231f319d827892c8bbe1335aba2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "0bc0c1caeab5d6f1265a",
          "headline": "ByteDance가 AI 데이터 센터 칩에 대한 MediaTek Pact를 마무리함에 따라 QCOM, AVGO, NVDA 주식에 초점이 맞춰졌습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792044966,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edf9b6f2ba5f33bfa6d54b85bd8d598ed150e1c76013218ed825b4086081f0cc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fd642581870f0cb06f33",
          "headline": "브로드컴과 SK하이닉스 비교: 수익 동향이 투자자들에게 인공지능 기업에 대해 알려주는 점은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792043906,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=acc0ccdda8b43426d2ef100b4e7f2e9b63d55117740a8040eea297932d4e9ecd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "d8d54e4e0fb2ff214a17",
          "headline": "마이크로소프트가 새로운 AI 칩을 공개했습니다. 모두가 찾고 있던 \"Nvidia Killer\"가 될 수 있을까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792012626,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3b21b8ed43d6146ab7b78d71ad16ec2e608f7d35e23693f96d04aea5cfd49889",
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
      "unverifiedEvidenceCount": 33,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792080629,
      "signal": "우호적 변화",
      "netScore": 6.43,
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
          "eventId": "046cbe4d383d09fe6feb",
          "headline": "Guinness Sustainable Energy Fund Highlights Hubbell Incorporated (HUBB) Amid Utility Growth Concerns",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792080629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1b01596e4d03981ced968c5b67f0f77882839b56526c7b6908ed221eee62cbd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ab32a3e4d162af7b5cbf",
          "headline": "Guinness Sustainable Energy Fund Highlights Eaton Corporation plc (ETN) Amid Grid Modernization",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792080533,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e99619c526a73dc9375762739b7e8f6d1ee73c3a2792fcadd3f1eaae1e27c966",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "4c48a98cec1c623f8385",
          "headline": "AMD, NVDA, Other Chip Stocks Extend Rout Amid AI Debt Concerns — Saxo Says Financing Squeeze Could Hit Supply Chain",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792078106,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05e054f1736c6802273c6bfe1802c5547f07ffe852b61efe5e07020c241a9196",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "bbb89edcbbc298cdb382",
          "headline": "Nvidia stock sinks amid concerns over AI financing",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792071757,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5be29c761ac0bcb296d825f58282366bc77da18b2bd25aa281ae44156417351",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "df66a9397d1c241007fe",
          "headline": "Meta’s $6.6 Billion AI Tax Credit Question Lands Days Before Q3: What It Means for the Stock",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792071306,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a13ffb1564676745be76e0e5bd6ca38ba6fdb043500aa87d2c7861f190728b84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ca80eff8e3bb3e563258",
          "headline": "Taiwan Semiconductor Falls 3% Despite Record Quarterly Profit; Intel Drops 4%, AMD Slides 3%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792069727,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4cd73645d6f56b4d48529c06bdfaa6645dfa79677c6dc211dcc1765065b2c7df",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "22596a1d135a8e27e537",
          "headline": "Advanced Micro Devices vs. Arm: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792068182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8843986cf47e5d49d0a0f71a8182599f02067ea11e716ac290e3c5f27e662ab5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6e236056e0e53a8e7f6a",
          "headline": "Western Digital: AI 승자 투자자들이 지불을 거부하는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792053006,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce72d5ee8fd6fa74208b96b5364eafa9e69dde4d6102e5148355afe0aec7cb6a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "0aea3bf485b29ff8b304",
          "headline": "Salesforce vs. ServiceNow: 수익 동향이 투자자에게 알려주는 소프트웨어 자이언트와 AI로의 이동",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792045881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16797728368862c64f33789b46ecf5167b125231f319d827892c8bbe1335aba2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "fd642581870f0cb06f33",
          "headline": "브로드컴과 SK하이닉스 비교: 수익 동향이 투자자들에게 인공지능 기업에 대해 알려주는 점은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792043906,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=acc0ccdda8b43426d2ef100b4e7f2e9b63d55117740a8040eea297932d4e9ecd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "b75e8f8fd02f19173921",
          "headline": "Mark Zuckerberg는 Meta의 AI CapEx를 옹호하며 '다가올 수십 년'을 지배하기 위해 최대 '2000억 달러'에 대해 '이 수표를 작성할' 준비가 되어 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791999015,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ba244cfa6312d0c812a97b6e04060129fe55a5b9a5a79c664bf12aaba27c44e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7cbffd4d6476b27d7259",
          "headline": "AI 자금 조달이 광학 주식에 타격을 줄 것이라는 우려로 Applied Optoelectronics가 9% 급락; Coherent Slides 7%, Lumentum Drops 7%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791995758,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=405e0bf2467d0f5c8354ba12268c0e6364e75009e3569490781e86560ef649fd",
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
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792082709,
      "signal": "주의 강화",
      "netScore": -9.11,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.4,
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
          "eventId": "04f43c49fa7c9ba867f0",
          "headline": "Nvidia and Broadcom Narratives Define the AI Chip Landscape",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792082709,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9dd560991e3b2ecebac8d4a311f99c223e7f6c6c705b8445e00b1c2d8b448c94",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e67f43b22e784d941369",
          "headline": "Applied Materials vs. Broadcom: Which Tech Stock Is a Better Buy in 2026?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792070701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2bf0cb49150c8202fda88c48317f4ea97ae969cfcc5dc459b42714aafec03c57",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4469465308dfbda5806d",
          "headline": "Broadcom vs. SK Hynix: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792063202,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f34d406ecfeb55b9024dd67e7734cba92536b11355ff86b5ccd6df3d4894f96",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0bc0c1caeab5d6f1265a",
          "headline": "ByteDance가 AI 데이터 센터 칩에 대한 MediaTek Pact를 마무리함에 따라 QCOM, AVGO, NVDA 주식에 초점이 맞춰졌습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792044966,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edf9b6f2ba5f33bfa6d54b85bd8d598ed150e1c76013218ed825b4086081f0cc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cd4e9f1957ed6990d007",
          "headline": "Broadcom 대 Marvell Technology: 2026년에는 어떤 기술 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792016529,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee57e4dde4652f38d6bebead5183de522968994011b7f1cebca079fd1cfcf681",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ab0ed5b569783a9cd2f",
          "headline": "Broadcom 대 Nvidia: 앞으로 5년 동안 하나만 소유할 수 있다면 이 제품을 살 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791991200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd15c3264e2f6eec0383c406ef37822d5afa0a9fdbbd627b97023c37813b45cb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ba4b747c8e607492315f",
          "headline": "엔비디아가 아닙니다. 브로드컴이 아닙니다. 이 스토리지 주식은 2027년의 숨겨진 AI 승자가 될 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791975000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=724024ecfc3318416b7d123ade1080a7c266814815ef744f7a65f0fc8fde2138",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "aedd1d6ee9e5471cfb81",
          "headline": "AAPL, BMBL, BP 주식이 오늘 52주 최고치로 상승한 이유는 무엇입니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1791946653,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50ac040ed16dde38a04e2e24339fbab7fa0fb86fb6acfa63216e0395ed5af3c6",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4a367817a96e1fef145e",
          "headline": "MU Stock Edges Up Overnight: Elon Musk는 Micron이 메모리 가격에 대해 ‘합리적’ 이고 다른 사람들은 ‘강요적‘ 이라고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791943074,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f46b4ae26643e9cb9b90177dbd5de10fd69a49ab393cfa2b312cd5fd8910d9d5",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f56b9faf9f78d5bcd2a1",
          "headline": "중국의 CXMT와 Broadcom의 CEO Rattle Chip Stocks: Micron에게 어떤 두려움이 더 중요한가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791913076,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24ad7ec9c715fc86388060f2377a104c1aa4551a143fe41c83a8fb7948d1ee79",
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
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792069021,
      "signal": "주의 강화",
      "netScore": -9.24,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "eventId": "e9b9cac9b4f50e302a22",
          "headline": "Intel vs. Qualcomm: 2026년에는 어떤 기술주를 사는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792069021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e0712e49701ffb6f6e4f65116bcb2cf5e2d0bdf86c39da13bf571fd5eafa440",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0bc0c1caeab5d6f1265a",
          "headline": "ByteDance가 AI 데이터 센터 칩에 대한 MediaTek Pact를 마무리함에 따라 QCOM, AVGO, NVDA 주식에 초점이 맞춰졌습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792044966,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edf9b6f2ba5f33bfa6d54b85bd8d598ed150e1c76013218ed825b4086081f0cc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92fd52574b8155dc0917",
          "headline": "퀄컴 대. 인텔: 시장은 두 가지 AI 브랜드 변경 시도를 모두 반박하고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791989152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d2b4c06379e3ead5f76623ada846e19b84e347076c89ef1ce3dc79a77342f8b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "90029b1210e0290c7d66",
          "headline": "연휴 기간 동안 Apple 주식을 매수할 수 있나요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791966900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7649b8948764a2606717bb8c2668ed04f4065d4dde038a641a5d563f27fc7478",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "e87b8eb04083d34b738e",
          "headline": "Apple Siri에 대해 한 달에 $ 20를 지불하시겠습니까? 애널리스트가 $ 24B를 제공 할 수 있다고 말하면서 스마트 홈 제품에서 더 작은 부스트를 봅니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791953758,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29963b90b9418ecdb6a13424305d4bc309bd3217debbbde6509075ce6d430e2e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "f746d56d305719b07624",
          "headline": "S&P 500 엔드 플랫, 나스닥 메모리 칩 제조사가 매각됨에 따라 하락 — BAC, GME, SPCX, ARM, QCOM In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791934635,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d6edb6ecf8f4760b464c9e61f730e98cd31de36863aae06204b9f51238a86ae",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d2ab34b17e47274c1833",
          "headline": "ARM-QCOM 소송: 델라웨어 배심원단, Qualcomm-ARM 라이센스 싸움에서 큰 위험에 대한 판결을 내림",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791921589,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b765a60ac669b13f5b766ada78eda0df8a5d3502679dae7bd2d2063b6550d33d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "00dfe484aa9c874a4e39",
          "headline": "ARM-QCOM 소송: 델라웨어 배심원단, Qualcomm-ARM 라이센스 싸움에서 큰 위험에 대한 판결을 내림",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791921589,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b765a60ac669b13f5b766ada78eda0df8a5d3502679dae7bd2d2063b6550d33d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3754cacb2bc92e6dd969",
          "headline": "Apple은 299달러짜리 Siri AI 장치로 스마트 홈 분야에서 Amazon과 Google을 상대하고 있습니다. HomeView는 새로운 CEO John Ternus의 첫 번째 큰 승리입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791913821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2449258756238b8536a71b173a0b1988206eba55770f01f2c73559091a4cd73",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792086660,
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
          "eventId": "cbd6d2c762095d98d96e",
          "headline": "Can ARM's 13% Contract Value Growth Sustain Momentum in Q2?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792086660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd51e2d196cc64bfe897e9e1cdb8632736f08a1b0cc1c780d38d8565c41dc0ab",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "22596a1d135a8e27e537",
          "headline": "Advanced Micro Devices vs. Arm: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792068182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8843986cf47e5d49d0a0f71a8182599f02067ea11e716ac290e3c5f27e662ab5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bdba25ae04cbc253636d",
          "headline": "Arm 대 Sandisk: 10월에 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791983941,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f85bdf2af1152e05ca12cd7df6821ccbd118cb4a7ffd32b657629760e151271",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f746d56d305719b07624",
          "headline": "S&P 500 엔드 플랫, 나스닥 메모리 칩 제조사가 매각됨에 따라 하락 — BAC, GME, SPCX, ARM, QCOM In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791934635,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d6edb6ecf8f4760b464c9e61f730e98cd31de36863aae06204b9f51238a86ae",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d2ab34b17e47274c1833",
          "headline": "ARM-QCOM 소송: 델라웨어 배심원단, Qualcomm-ARM 라이센스 싸움에서 큰 위험에 대한 판결을 내림",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791921589,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b765a60ac669b13f5b766ada78eda0df8a5d3502679dae7bd2d2063b6550d33d",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792079882,
      "signal": "주의 강화",
      "netScore": -6.86,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.88,
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
          "score": -4.02,
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
          "eventId": "df8a5c35fa85050ea360",
          "headline": "Fantastic News for Marvell Stock Investors",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792079882,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d8737997032a4c768acf2b83b092db2729074c13a57515847fc93cb5d15769b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "40d2a7a85b45e895e2a9",
          "headline": "Better Artificial Intelligence Stock for 2026: Astera Labs vs. Marvell Technology",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792079733,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8e8d0dc85b97121e2e697fad159e13dd62f025c1e70c204539a92d1680da11f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cd4e9f1957ed6990d007",
          "headline": "Broadcom 대 Marvell Technology: 2026년에는 어떤 기술 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792016529,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee57e4dde4652f38d6bebead5183de522968994011b7f1cebca079fd1cfcf681",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "916716ae462897522fc3",
          "headline": "Marvell의 진정한 AI 기회가 이제 막 나타나기 시작했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791990011,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccbb49f8157a1d77d0a285772b023b120c51a78991c9302268a662a4505aaf46",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cbd8366b55e135d28e4f",
          "headline": "Intel 대 Marvell Technology: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791977101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c724f13e21efe0d1d0c5682255195a309b5bd490308a822f941acd22421dd643",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "454229585b90efa3637b",
          "headline": "인텔 vs. 마블 테크놀로지: 수익 동향이 이러한 인공 지능 회사에 대해 투자자들에게 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791953873,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af0b943223124e1b54fbd3cf40a2207929d14a3e19b679155a3006f44438fdcc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5d0b9273fdf1933f80e6",
          "headline": "Marvell(MRVL)은 2028년 매출 목표를 200억 달러로 상향 조정했습니다. 성장이 프리미엄을 정당화할 수 있는가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791916541,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=47589d487b7f4ca3926695903cc4b8eb92bbec4e990070e7202fab2efa900f22",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792079882,
      "signal": "주의 강화",
      "netScore": -8.97,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.53,
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
          "eventId": "df8a5c35fa85050ea360",
          "headline": "Fantastic News for Marvell Stock Investors",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792079882,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d8737997032a4c768acf2b83b092db2729074c13a57515847fc93cb5d15769b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "40d2a7a85b45e895e2a9",
          "headline": "Better Artificial Intelligence Stock for 2026: Astera Labs vs. Marvell Technology",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792079733,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8e8d0dc85b97121e2e697fad159e13dd62f025c1e70c204539a92d1680da11f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "79304427d2f11eb3a775",
          "headline": "TSMC CEO Hints Company Could Back Up Customers If Intel’s Advanced Packaging Ramp-Up Falls Short",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792077551,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8769948bf75b9817a259e0dd09c5e1abdb2520858ec8c6492318b769b1b7595",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e67f43b22e784d941369",
          "headline": "Applied Materials vs. Broadcom: Which Tech Stock Is a Better Buy in 2026?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792070701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2bf0cb49150c8202fda88c48317f4ea97ae969cfcc5dc459b42714aafec03c57",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ca80eff8e3bb3e563258",
          "headline": "Taiwan Semiconductor Falls 3% Despite Record Quarterly Profit; Intel Drops 4%, AMD Slides 3%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792069727,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4cd73645d6f56b4d48529c06bdfaa6645dfa79677c6dc211dcc1765065b2c7df",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e9b9cac9b4f50e302a22",
          "headline": "Intel vs. Qualcomm: 2026년에는 어떤 기술주를 사는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792069021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e0712e49701ffb6f6e4f65116bcb2cf5e2d0bdf86c39da13bf571fd5eafa440",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "91a33f6ff6cc67b16119",
          "headline": "인텔 대법원 판례 내부: 수수료, 수탁자 및 숨겨진 위험",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792033200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7da3bad24afd9b2fd74fbee62e2ae1f1d4e2e56b20dcc3fc2671f864e1a89b33",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f5dc580d357348c45ffb",
          "headline": "어플라이드 머티어리얼즈 vs. 인텔: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791996241,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c0738323fb95688ba56994d007f3ae9fd571c686367e26a31fa56511a91fe29",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a64b6c9d9b26a487c2c2",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 이 레이더 인공 지능(AI) 칩 주식은 2027년의 가장 큰 승자가 될 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791989400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb39620b6e51d3d33ee63d9a3fb6c977a3e6ef528c9c4de123cce7ec1dfecf71",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92fd52574b8155dc0917",
          "headline": "퀄컴 대. 인텔: 시장은 두 가지 AI 브랜드 변경 시도를 모두 반박하고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791989152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d2b4c06379e3ead5f76623ada846e19b84e347076c89ef1ce3dc79a77342f8b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cbd8366b55e135d28e4f",
          "headline": "Intel 대 Marvell Technology: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791977101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c724f13e21efe0d1d0c5682255195a309b5bd490308a822f941acd22421dd643",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9cad4f530a986f439310",
          "headline": "Apple, Apple 인텔리전스 및 얼굴 인식으로 구동되는 새로운 HomeView 스마트 홈 허브 공개",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791966050,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c16d14c3cbba72eb769aa8cceab4e28db6e835ca7ca40af212af1fd93cf59eb",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792077551,
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
          "score": 0.53,
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
          "score": -1.4,
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
          "eventId": "79304427d2f11eb3a775",
          "headline": "TSMC CEO Hints Company Could Back Up Customers If Intel’s Advanced Packaging Ramp-Up Falls Short",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792077551,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8769948bf75b9817a259e0dd09c5e1abdb2520858ec8c6492318b769b1b7595",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ca80eff8e3bb3e563258",
          "headline": "Taiwan Semiconductor Falls 3% Despite Record Quarterly Profit; Intel Drops 4%, AMD Slides 3%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792069727,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4cd73645d6f56b4d48529c06bdfaa6645dfa79677c6dc211dcc1765065b2c7df",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6c3758d3e0adc4996d67",
          "headline": "대만 반도체 제조업 3분기 실적 발표 하이라이트",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792054924,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45cd6fc330cfc2a0c6d04e65de15d8773cf0411d3dc01fbc08e1c4907023d21a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "361af70c4d94bbd8b74a",
          "headline": "TSMC는 Terafab과 협력할 수 있지만 식물을 통제해야 함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792049775,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32da48e5f781f1d2d7bfa5433cdeeca23d678bccd6167870bf8fc494b9947af1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "09b3bb17c6226ac891cc",
          "headline": "GEV 주식이 밤새 하락했습니다: 이 분석가는 3분기 결과보다 약 35% 상승 여력이 있다고 봅니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792046084,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bc92daf99fec3f6cd1a177cc466030331dbd94dce8f875edf8f92df1af1a8e6",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "22c2182ef45d23f9b088",
          "headline": "AI 매도 중 하룻밤 사이에 재고 미끄러짐: AEP, 연료 전지에 $ 40B를 지출하여 Google에 전력 공급",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792043570,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43282b6cd7aeee48c0fddf85bed061cc532a9eca165efa9981dbf562db683bcc",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "80346a18b902eb58e2b4",
          "headline": "DOW, S&P 500, 뜨거운 인플레이션 데이터 속에서 나스닥 하락, AI 매도: CRWV, NBIS, NVDA, IBRX 주식 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1792034216,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28d578ba16acd3e44d2b14fd9b97d18c51fbbd8c63fa4e3a78c7e2cdda3b6ced",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b1a74cc69492eb37c29a",
          "headline": "Gene Munster는 Meta의 Muse를 ChatGPT보다 Google 검색에 더 큰 위험으로 표시합니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1792013639,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddffb5481b1b0ae8fb15c87dc6bb06573d3b001877a8059cf0e53218a67ddf66",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0cd09cadc22c8f722fa0",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1791990000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000726/tsm-20261015x6k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792060500,
      "signal": "중립·확인 대기",
      "netScore": -1.53,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
          "level": "우호적"
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
          "eventId": "8cd825fafa436b4036b8",
          "headline": "ASML vs. Applied Materials: Which Chip-Equipment Stock Is the Better Buy?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792060500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16bab27312307e1afe072a37076afe4fc02cb7d3103c85d6d385affc1cf34a60",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3c15296f0ba901dcd74a",
          "headline": "ASML은 AI 칩 수요가 2030년까지 확대되고 있다고 밝혔습니다. 이미 2028년까지 공급 부족이 예상됩니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792015321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8be0ad42520abe362d53bfc632115d3ec4ccaa3bcb38728c7c870595dd111316",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1dbee99d42a53bddee76",
          "headline": "ASML 공급 계획 확대; BlackRock의 수익 보고 | 주식 발동기",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791989386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=571c6d2eb14086830d13f2d912e1ad7c26941996cb82c782f1cfb108cc20fe12",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "de387acee9d00d8313f9",
          "headline": "Danaher, NVIDIA와 협력하여 가속화된 컴퓨팅, 물리적 AI를 실험실에 도입하는 것을 목표로 함",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791975435,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=099635a00dd8a37fe83a991b111352c53b9a4fea8f4b82e482c18b393b16eb2d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3b7bcb93a6b3fe4cdb19",
          "headline": "다우 선물 상승, 인플레이션을 앞둔 나스닥 제압 프리마켓 데이터: ASML, MU, SKHY, TSLA, BAC, LQDA, GME, IREN Stocks In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791967900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c32ec331bb98924ca74dbf7a10624a2ccef1f4344c7ace6b556ae3b536c357b7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1408b890f6269bf0ec1e",
          "headline": "오늘의 주식 시장: 9월 인플레이션 보고서가 예상보다 뜨거워졌음에도 불구하고 S&P 500, Dow, Nasdaq 선물 상승 - ASML, AZZ, GME 초점(업데이트됨)",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791967182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d87b8b56780e9b8aafc7e183cf72afc98e884fc059881bf13cbcc52ace5ed2a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dcaf9a95ef41fcbfe34a",
          "headline": "ASML은 세 번째로 판매 예측을 상향 조정했지만 3분기 수익 미스로 인해 주가가 하락했습니다. 수익 매도가 MU, SNDK, INTC로 확산되었습니다.",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1791958305,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50cd91b63de76e9e8e22ef6018f8bab1e927229efba22113d66799b309b9c5d6",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aedd1d6ee9e5471cfb81",
          "headline": "AAPL, BMBL, BP 주식이 오늘 52주 최고치로 상승한 이유는 무엇입니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1791946653,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50ac040ed16dde38a04e2e24339fbab7fa0fb86fb6acfa63216e0395ed5af3c6",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50befbedf20abca1d13d",
          "headline": "오라클이 프로젝트 주피터 역할을 재확인한 후 밤새 주가가 상승: 애널리스트가 3분기 실적을 앞두고 시장 수용도를 높이기 위해 가격 목표치를 높임",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791943131,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae43e75283eba241a931ca465dd2b570812beb8494c86ab988c10c69199a8104",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4a367817a96e1fef145e",
          "headline": "MU Stock Edges Up Overnight: Elon Musk는 Micron이 메모리 가격에 대해 ‘합리적’ 이고 다른 사람들은 ‘강요적‘ 이라고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791943074,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f46b4ae26643e9cb9b90177dbd5de10fd69a49ab393cfa2b312cd5fd8910d9d5",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "005062c4985d33f4e2e3",
          "headline": "ASML이 곧 기술 수익을 창출할 예정입니다. 칩 주식에게는 큰 거래입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791923400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=479d447e8977a8157699648874a1bf705eec59d6c709d554f498492b08c91308",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d2ab34b17e47274c1833",
          "headline": "ARM-QCOM 소송: 델라웨어 배심원단, Qualcomm-ARM 라이센스 싸움에서 큰 위험에 대한 판결을 내림",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791921589,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b765a60ac669b13f5b766ada78eda0df8a5d3502679dae7bd2d2063b6550d33d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792070701,
      "signal": "주의 강화",
      "netScore": -4.63,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.18,
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
          "score": -2.62,
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
          "eventId": "e67f43b22e784d941369",
          "headline": "Applied Materials vs. Broadcom: Which Tech Stock Is a Better Buy in 2026?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792070701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2bf0cb49150c8202fda88c48317f4ea97ae969cfcc5dc459b42714aafec03c57",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8cd825fafa436b4036b8",
          "headline": "ASML vs. Applied Materials: Which Chip-Equipment Stock Is the Better Buy?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792060500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16bab27312307e1afe072a37076afe4fc02cb7d3103c85d6d385affc1cf34a60",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f5dc580d357348c45ffb",
          "headline": "어플라이드 머티어리얼즈 vs. 인텔: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791996241,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c0738323fb95688ba56994d007f3ae9fd571c686367e26a31fa56511a91fe29",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6330851529724d3af396",
          "headline": "어플라이드머티어리얼즈가 오늘 침몰한 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791922436,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ec0744db33f11fd582c1ec7101b152d2003eea79af064228fe5b05fc952f61e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d8d713d4eedd78bfdfe3",
          "headline": "엄청난 해에 투자자들이 이익을 얻으면서 반도체 장비 주가 하락: Applied Materials는 7% 하락, Lam Research 및 KLA는 4% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791910426,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=276a62b4145219492a2a13dd4a3fc36f5b246e926ccd7fff3733dd5f3d47a40d",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1792121709.4345956,
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
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1791910426,
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
          "eventId": "d8d713d4eedd78bfdfe3",
          "headline": "엄청난 해에 투자자들이 이익을 얻으면서 반도체 장비 주가 하락: Applied Materials는 7% 하락, Lam Research 및 KLA는 4% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791910426,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=276a62b4145219492a2a13dd4a3fc36f5b246e926ccd7fff3733dd5f3d47a40d",
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
    "MU": {
      "ticker": "MU",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792089602,
      "signal": "우호적 변화",
      "netScore": 5.26,
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
          "score": 4.37,
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
          "eventId": "720b6aef17c7c65b5658",
          "headline": "ASML Just Delivered Excellent News for Micron Stock Investors",
          "eventLabel": "실적 발표",
          "publishedAt": 1792089602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=daa7f39853a2b94abcd5d819cf69bf31fbaf5295aee07aec4ab8a4f42bdb8078",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "04f43c49fa7c9ba867f0",
          "headline": "Nvidia and Broadcom Narratives Define the AI Chip Landscape",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792082709,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9dd560991e3b2ecebac8d4a311f99c223e7f6c6c705b8445e00b1c2d8b448c94",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "046cbe4d383d09fe6feb",
          "headline": "Guinness Sustainable Energy Fund Highlights Hubbell Incorporated (HUBB) Amid Utility Growth Concerns",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792080629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1b01596e4d03981ced968c5b67f0f77882839b56526c7b6908ed221eee62cbd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ab32a3e4d162af7b5cbf",
          "headline": "Guinness Sustainable Energy Fund Highlights Eaton Corporation plc (ETN) Amid Grid Modernization",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792080533,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e99619c526a73dc9375762739b7e8f6d1ee73c3a2792fcadd3f1eaae1e27c966",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "bbb89edcbbc298cdb382",
          "headline": "Nvidia stock sinks amid concerns over AI financing",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792071757,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5be29c761ac0bcb296d825f58282366bc77da18b2bd25aa281ae44156417351",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "df66a9397d1c241007fe",
          "headline": "Meta’s $6.6 Billion AI Tax Credit Question Lands Days Before Q3: What It Means for the Stock",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792071306,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a13ffb1564676745be76e0e5bd6ca38ba6fdb043500aa87d2c7861f190728b84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9647c787b4627047ab2e",
          "headline": "Cathie Wood's ARK Scoops Up Over 32,000 Meta Shares In 2 Days — Wall Street’s Split Over AI Spending",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792070173,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4029b26395cc90b77f19201af875d48b2f7877e6e58556f62f612a30ebe0e134",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "552f9ee5297ba1e4313d",
          "headline": "Elon Musk Just Gave Investors Another Reason to Buy Micron Stock",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792066800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e530cfe9304bb828328b2b1ede0cf245ecc4c22096d93697f9fe29cabae10fa7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8d58cb88fa1a03361a5c",
          "headline": "VG 주식은 GE Vernova, Baker Hughes의 파워 딜에서 프리마켓 상승 – 트레이더들은 이 중요한 저항 수준을 주목합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792065984,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7b43cd4831770fa189c22ec4dea2e79d451de9ee18d88ffdc8421cba1f92c83d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6e236056e0e53a8e7f6a",
          "headline": "Western Digital: AI 승자 투자자들이 지불을 거부하는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792053006,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce72d5ee8fd6fa74208b96b5364eafa9e69dde4d6102e5148355afe0aec7cb6a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "0aea3bf485b29ff8b304",
          "headline": "Salesforce vs. ServiceNow: 수익 동향이 투자자에게 알려주는 소프트웨어 자이언트와 AI로의 이동",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792045881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16797728368862c64f33789b46ecf5167b125231f319d827892c8bbe1335aba2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "fd642581870f0cb06f33",
          "headline": "브로드컴과 SK하이닉스 비교: 수익 동향이 투자자들에게 인공지능 기업에 대해 알려주는 점은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792043906,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=acc0ccdda8b43426d2ef100b4e7f2e9b63d55117740a8040eea297932d4e9ecd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 43,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1791983941,
      "signal": "중립·확인 대기",
      "netScore": 1.95,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "score": -1.05,
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
          "eventId": "bdba25ae04cbc253636d",
          "headline": "Arm 대 Sandisk: 10월에 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791983941,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f85bdf2af1152e05ca12cd7df6821ccbd118cb4a7ffd32b657629760e151271",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dcaf9a95ef41fcbfe34a",
          "headline": "ASML은 세 번째로 판매 예측을 상향 조정했지만 3분기 수익 미스로 인해 주가가 하락했습니다. 수익 매도가 MU, SNDK, INTC로 확산되었습니다.",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1791958305,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50cd91b63de76e9e8e22ef6018f8bab1e927229efba22113d66799b309b9c5d6",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aedd1d6ee9e5471cfb81",
          "headline": "AAPL, BMBL, BP 주식이 오늘 52주 최고치로 상승한 이유는 무엇입니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1791946653,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50ac040ed16dde38a04e2e24339fbab7fa0fb86fb6acfa63216e0395ed5af3c6",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d2ab34b17e47274c1833",
          "headline": "ARM-QCOM 소송: 델라웨어 배심원단, Qualcomm-ARM 라이센스 싸움에서 큰 위험에 대한 판결을 내림",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791921589,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b765a60ac669b13f5b766ada78eda0df8a5d3502679dae7bd2d2063b6550d33d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "66ee675886c00bb2e0f9",
          "headline": "오라클은 연간 전력 요금 크레딧으로 최대 5,500만 달러를 제안하고 Project Jupiter에서 Bloom Energy의 역할을 재확인했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791905122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9ac98d760c90fb96b959ede450f8fd1e367ecb7fee336a03ca6099c13b12c53",
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
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792053006,
      "signal": "주의 강화",
      "netScore": -6.22,
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
          "eventId": "6e236056e0e53a8e7f6a",
          "headline": "Western Digital: AI 승자 투자자들이 지불을 거부하는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792053006,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce72d5ee8fd6fa74208b96b5364eafa9e69dde4d6102e5148355afe0aec7cb6a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89f3aab3a1a1103fca3a",
          "headline": "SK하이닉스, 중국 CXMT가 서버 메모리 겨냥해 5% 하락 웨스턴디지털 4% 하락, 마이크론 3% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792000864,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dea304c38a25900adebe7998ccee6bb46df00c3db3d57d0b52caa1d9de1bb6ef",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "90029b1210e0290c7d66",
          "headline": "연휴 기간 동안 Apple 주식을 매수할 수 있나요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791966900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7649b8948764a2606717bb8c2668ed04f4065d4dde038a641a5d563f27fc7478",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "e87b8eb04083d34b738e",
          "headline": "Apple Siri에 대해 한 달에 $ 20를 지불하시겠습니까? 애널리스트가 $ 24B를 제공 할 수 있다고 말하면서 스마트 홈 제품에서 더 작은 부스트를 봅니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791953758,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29963b90b9418ecdb6a13424305d4bc309bd3217debbbde6509075ce6d430e2e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "3754cacb2bc92e6dd969",
          "headline": "Apple은 299달러짜리 Siri AI 장치로 스마트 홈 분야에서 Amazon과 Google을 상대하고 있습니다. HomeView는 새로운 CEO John Ternus의 첫 번째 큰 승리입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791913821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2449258756238b8536a71b173a0b1988206eba55770f01f2c73559091a4cd73",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1791909301,
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
          "eventId": "31f375ac200b53348d57",
          "headline": "Arista Networks 대 국제 비즈니스 머신: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791909301,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da95330d769a20958512d5d0d3434071d289dfd7cc0f5f87bc18249397c22811",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1791910434,
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
          "eventId": "5051f8b6057cf4a41dcb",
          "headline": "Coherent Stock은 Ciena와 Lumentum이 약 10% 하락함에 따라 약 8% 하락했습니다. 2031년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791910434,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb3270aee39ed323b24a827092f7805cba17041bb28f563bc4971602a0feb854",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7b216fdf03eb69ef74e7",
          "headline": "루멘텀 대. Coherent: 백로그 품질로 인해 투자자가 선택의 여지를 잃게 됩니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791902714,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52a5bbaf5c7d6a986a9c9720855327144dc1872f9de37fc1337a6b4f3989c0f5",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1791918647,
      "signal": "주의 강화",
      "netScore": -2.17,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "e793699596df9eb06c9f",
          "headline": "Applied Optoelectronics는 2026년에 175% 상승하고 Lumentum은 164% 상승: 이익을 얻을 것인가, 아니면 계속해서 나아갈 것인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791918647,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f227f3daf864a3ebbc982f9360cca4bc3982ebc8c5bab8c2f5aefd48f48190d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5051f8b6057cf4a41dcb",
          "headline": "Coherent Stock은 Ciena와 Lumentum이 약 10% 하락함에 따라 약 8% 하락했습니다. 2031년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791910434,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb3270aee39ed323b24a827092f7805cba17041bb28f563bc4971602a0feb854",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7b216fdf03eb69ef74e7",
          "headline": "루멘텀 대. Coherent: 백로그 품질로 인해 투자자가 선택의 여지를 잃게 됩니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791902714,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52a5bbaf5c7d6a986a9c9720855327144dc1872f9de37fc1337a6b4f3989c0f5",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792079785,
      "signal": "우호적 변화",
      "netScore": 3.7,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
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
          "eventId": "4aa8490b80513584cb30",
          "headline": "GE Vernova and Venture Global Sign a Power Deal Worth Up to $17.2 Billion. Here’s What’s Firm",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792079785,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae0c76c5a14e658018d128b506eff741a9b2b680b138167dd813fc50aa823af3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6855b7d0ab0a46be3ee4",
          "headline": "GE Vernova(GEV)는 Venture Global과의 주요 AI 파워 계약 이후 5.5% 하락했습니다. 황소 사례가 바뀌었나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792066272,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=861b677b47a55b7d0ba9bf2edc48404f56b4c5519b36a6ab0ba70f1f69d00309",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a8741ffa2861f1049b05",
          "headline": "GE Vernova(GEV)는 지침을 높이고 데이터 센터 전력 거래를 체결한 후 저평가되어 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792062822,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5070bfe8834ad4953192420fbe14825171ebba2437759ad81c90dfb44856a182",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8640789c5e03eac2e37b",
          "headline": "Venture Global Enters Power And Grid Frame Agreements With GE Vernova And Baker Hughes Energy Services For Up To Sixteen 720 MW Power Island Units And Associated Power Transformer Equipment",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792044300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6e51175bee35c35e507d2c8b665608caf7e934544089dab23eb795e55ed3a4b2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1791972540,
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
          "eventId": "10b10d7f763be35ad7d2",
          "headline": "Google은 기존 원자로에 대한 계약을 체결했습니다. 그렇다면 Oklo와 NuScale이 Constellation Energy 뉴스에 뛰어든 이유는 무엇입니까? Read-Through 투자자가 누락되었습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791972540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a118eaff971fca81634c2b06dbb4c14f3fe0ea1c742f8c2976b45ec78a2bec4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6fe32bab6de02baf3550",
          "headline": "새로운 핵 협상 이후 Constellation Energy(CEG)가 적정 가치보다 높습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791972497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=296eee9045303e1d8a34fcf298ce499bf6ccdfb1747e89398c0d73d2ec82af71",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792057440,
      "signal": "중립·확인 대기",
      "netScore": -1.18,
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
          "eventId": "00920a15e6aa89184b21",
          "headline": "Vistra 주식은 42억 달러의 연방 대출로 인해 급등했습니다. 지난 1년 동안 주가가 23% 하락했는데, 이제 매수 시점인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792057440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3243a5a9bdd65fbf8abf7cb9f0ef782b66544c7d94e29bc79209a9a539521f50",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e70a1124ea034addf7b0",
          "headline": "Constellation Energy(CEG)와 VST 및 TLN: 원자력과 AI 수요가 수익 성장을 주도할 수 있습니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1791996110,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cff74c1b4daa149807a17d39ceb7fb2a23f2a4480a89495dd060a2cf77fd552a",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792080533,
      "signal": "중립·확인 대기",
      "netScore": -1.18,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.52,
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
          "score": -1.05,
          "level": "주의"
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
          "eventId": "ab32a3e4d162af7b5cbf",
          "headline": "Guinness Sustainable Energy Fund Highlights Eaton Corporation plc (ETN) Amid Grid Modernization",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792080533,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e99619c526a73dc9375762739b7e8f6d1ee73c3a2792fcadd3f1eaae1e27c966",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5970366f0ce6676d7948",
          "headline": "Eaton 주식은 경쟁사보다 더 가치가 있나요?",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1791928723,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f41146882fb3572536ba579b148f361cd3916ee089db351a43da658c54b86c45",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
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
      "updatedAt": 1792121709.4345956,
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
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792080629,
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
          "eventId": "046cbe4d383d09fe6feb",
          "headline": "Guinness Sustainable Energy Fund Highlights Hubbell Incorporated (HUBB) Amid Utility Growth Concerns",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792080629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1b01596e4d03981ced968c5b67f0f77882839b56526c7b6908ed221eee62cbd",
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
    "VRT": {
      "ticker": "VRT",
      "updatedAt": 1792121709.4345956,
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1792121709.4345956,
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
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792068310,
      "signal": "주의 강화",
      "netScore": -2.17,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "be5ca33d02e399148f4c",
          "headline": "Seagate는 데이터 스토리지 수요가 폭발적으로 증가함에 따라 긴 활주로를 가질 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792068310,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=854188fa7203cf7f176cfb38b11dbe08dfa1c659b060504d94591a5c2cd9a6b4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ba4b747c8e607492315f",
          "headline": "엔비디아가 아닙니다. 브로드컴이 아닙니다. 이 스토리지 주식은 2027년의 숨겨진 AI 승자가 될 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791975000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=724024ecfc3318416b7d123ade1080a7c266814815ef744f7a65f0fc8fde2138",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "920f5997d966af643d64",
          "headline": "Seagate Technology Holdings(STX), 공급망의 하락 우려로 가치 평가 테스트",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791911433,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62e512cbdc02e9feafa2d757f31c9cea77a7d7264d35883c3fa0b5f3ad33e9b6",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1792096269,
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
          "eventId": "03c9c18455b1530f01a2",
          "headline": "EMCOR Group (EME): Why Claude Put 14.5% of Its AI Portfolio in a Data Center Contractor",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792096269,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff75ca9692e1307cb7aafc326760e712f81b3dfbb56d0088a2d44d8890be88b8",
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
      "updatedAt": 1792121709.4345956,
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
      "updatedAt": 1792121709.4345956,
      "dataAsOf": 1791952386,
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
          "eventId": "291d40dc914c57b25407",
          "headline": "Bloom Energy(BE) 주식은 저지 패치 거래 이후 34% 저평가될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791952386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ef44e9e2b51193b28cda88b7d1660447f30291e0826d1b379397a9525db3ae8b",
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
