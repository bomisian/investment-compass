// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792009966.5273862,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791979200,
      "signal": "우호적 변화",
      "netScore": 3.63,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 3.67,
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
          "score": -1.4,
          "level": "주의"
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
        },
        {
          "eventId": "9c4a87773d69935c15e0",
          "headline": "Broadcom CEO와 Microsoft의 새로운 칩의 낙진으로 Nvidia 주가 하락",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1791901380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5357d59ba462092ba0951daa04ba4d5930935328d09cdc7640e88a4da1b71474",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "594f2516acd176fbadbc",
          "headline": "Marvell Technology, Microsoft, Oracle은 클라우드, 하이퍼스케일 데이터 센터 인프라용 NIST FIPS 140-3 통합 HSM을 표준화하기 위한 개방형 컴퓨팅 프로젝트를 위해 협력합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791882444,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c12bb37719097f7c0b2fc7483e2631cd0d34bde01f579597636963ed5f7fed6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7f68ef2181acb7b450f9",
          "headline": "Microsoft가 새로운 Maia 칩을 공개함에 따라 모든 주요 Nvidia 고객은 이제 경쟁자가 되었습니다.",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1791882007,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5be4aa395811f5da736309458a900a3b9659766bd8a95219e0ea9e7572357345",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "c00eb544c7e2e062d49b",
          "headline": "Microsoft, NYC Office 프로젝트에서 소송으로부터 보호를 위해 JLL을 고소",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791852227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91a57711c5faf181a3e65655320b41340b2ce1a50d38144d05eaa2acc11d638d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "badcb0a78d25a1c173f1",
          "headline": "S&P 500, Nasdaq 100은 칩 제조업체 약세로 인해 하락했고 Salesforce는 Dow에 도움을 얻었습니다 — META, MSFT, BMBL, CRM, SNAP 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791846618,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6357c13960c505bb16627b06cf8522405c0157e57a8d67035aa5d3bb2dc3c19",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3d789f71e0425f274850",
          "headline": "Maia 300: Microsoft는 금융에 도움이 되는 컴퓨팅 임대주 모델로부터의 출구를 구축합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791833401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5da460903b120e03641777b69800bb4b912d7c703c7891759803f237b9626e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791972540,
      "signal": "주의 강화",
      "netScore": -7.99,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": -1.05,
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
        },
        {
          "eventId": "18ab5e95e298993b0493",
          "headline": "Amazon과 Alphabet One은 2000억 달러로 훨씬 더 많은 수익을 얻었습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791895530,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8a37691c8268ffb7f9e5afa7d6206f055319f5c8e949cc992dc31d76287b4b2",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ae783093dfb57412b8d5",
          "headline": "Constellation의 43억 달러 Google 지원 업그레이드와 Vistra의 42억 달러 정부 대출: 어떤 원자력 계획이 주주에게 더 ​​나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791889500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2efb2780eeaacf08fc622ad2958a9f2a2d201895beaadc3643f4fd3878fc3179",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c00eb544c7e2e062d49b",
          "headline": "Microsoft, NYC Office 프로젝트에서 소송으로부터 보호를 위해 JLL을 고소",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791852227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91a57711c5faf181a3e65655320b41340b2ce1a50d38144d05eaa2acc11d638d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6a374a32dbefea31955a",
          "headline": "알파벳 대 메타 플랫폼: 2026년에는 어느 주식을 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791851501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=597e884cc638da374b580d2fd62839ae6cdf721528c4de97b02e87cd1f91dc3a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6308ff1eab1849601f1c",
          "headline": "Alphabet과 Nvidia에 동일하게 투자된 10,000달러는 2030년까지 이만큼 가치가 있을 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791841800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac3ad1c31f2e904129842dedfc3a722f17f4ac6d12c8ed4382cc5aff8c00ab94",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8a3f7895d1450acfa026",
          "headline": "Nvidia, AMD, Google, Meta가 데이터 센터 설계를 위한 글로벌 청사진을 위해 협력합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791817200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=500ae337a06221b2f3b8f19f12621a9da5d7312198c5a0ba2740463b4dc7496b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d2a571b91409053310b4",
          "headline": "Google과 Constellation이 3.6GW 거래에 서명하면서 주목을 받는 원자력 ETF",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791816480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ada70bb74ba4cbfdd8b1a7cb59ae2d5c44bcfa262db7955cb5c5e4351842352",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1792000093,
      "signal": "주의 강화",
      "netScore": -7.56,
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
          "score": -3.85,
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
        },
        {
          "eventId": "18ab5e95e298993b0493",
          "headline": "Amazon과 Alphabet One은 2000억 달러로 훨씬 더 많은 수익을 얻었습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791895530,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8a37691c8268ffb7f9e5afa7d6206f055319f5c8e949cc992dc31d76287b4b2",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ee712c336bd7590d8acc",
          "headline": "Generac은 Amazon과 대규모 거래를 체결했습니다. 주식을 살 시간인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791883140,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db3cdadfa65a5d66852fb22229d3874d3c1d59ebf6db4c86c5d0a0d355ee71a8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4fca8fb6daccf1614ef3",
          "headline": "Amazon.com vs. Alibaba: 2026년에는 어떤 소비재 주식이 더 나은 구매일까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791859102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48064109132f58a040e930be8cd887eecbf5682e9e48558ac5c1be87580d5f18",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791955489,
      "signal": "주의 강화",
      "netScore": -2.1,
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
        },
        {
          "eventId": "6a374a32dbefea31955a",
          "headline": "알파벳 대 메타 플랫폼: 2026년에는 어느 주식을 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791851501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=597e884cc638da374b580d2fd62839ae6cdf721528c4de97b02e87cd1f91dc3a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "badcb0a78d25a1c173f1",
          "headline": "S&P 500, Nasdaq 100은 칩 제조업체 약세로 인해 하락했고 Salesforce는 Dow에 도움을 얻었습니다 — META, MSFT, BMBL, CRM, SNAP 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791846618,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6357c13960c505bb16627b06cf8522405c0157e57a8d67035aa5d3bb2dc3c19",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8a3f7895d1450acfa026",
          "headline": "Nvidia, AMD, Google, Meta가 데이터 센터 설계를 위한 글로벌 청사진을 위해 협력합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791817200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=500ae337a06221b2f3b8f19f12621a9da5d7312198c5a0ba2740463b4dc7496b",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791998400,
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
          "score": -3.67,
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
        },
        {
          "eventId": "77dab09016b89f854e11",
          "headline": "Apple이 HomeView를 공개하고 스마트 홈 라인업을 개편하면서 AAPL 주가가 사상 최고치를 경신했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791901113,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe7dc91d120147635028c37c1907e02248c7be48e6e430b4e324dc36e418e481",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "bfe9f9706a97cc08bba0",
          "headline": "AI 칩 주식이 대형 은행 수익보다 앞서 흔들리면서 나스닥 선물이 하락하고 다우가 프리마켓 상승: MU, SNDK, NVTS, NVDA, SPCX, ASTS, UNH, V 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791880650,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa46466387e74459886e2c10751d745820c496b1961be3ecb7e7e2a997a56b96",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "32f967075ae6da75daca",
          "headline": "Broadcom의 AI 내구성 경고로 인해 SK 하이닉스, 한국 삼성의 급격한 하락; 화웨이의 폐쇄로 엔비디아의 중국 AI 칩 점유율 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791876069,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce213edbafba98c415a3d70fc97558ca898768c8114e37c645dd5734d7100b39",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "a32b0c966e080949cf0b",
          "headline": "AAPL 주가 상승: BofA는 듀오 사전 주문 선적에 따라 iPhone 18 Pro 대기 시간을 단축했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791872151,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2af4c7a15b67dcc87e7f316e07b764f0451ffd96cb5d003b4317b70c45538634",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "5b6c373d35e61f5145a9",
          "headline": "애플 공동 창업자의 잊혀진 회사, 나스닥 거래 성사",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791837000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e530db2028221496e0e623374c88926859cd3657560d8bd11857c81dd46a3a35",
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
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791967900,
      "signal": "주의 강화",
      "netScore": -3.49,
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
          "eventId": "a0d53c4e2c53385ed764",
          "headline": "테슬라가 아닙니다. 엔비디아가 아닙니다. Elon Musk의 칩 야망은 이 인공 지능(AI) 주식을 강화할 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791888600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3b1312d5ea044acd5d8eebaddbc012043ca33afe7be9bf5fd6c61efed0ed5cf7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "11b3b48d7c46adb25eef",
          "headline": "사이버 트럭 배송은 \"자동차 역사상 가장 큰 실패\"라고 불리는 트럭 이후 다시 암울해 보입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791884568,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8884695272e6794772564c30e2606e31b69272bf5752faed8a512c047f265697",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1792000043,
      "signal": "우호적 변화",
      "netScore": 2.32,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.8,
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
          "score": -2.27,
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
          "eventId": "bdf38e3e3d4fcd4c3e60",
          "headline": "이번 주 ASML, TSMC 보고서: 6일간의 칩 재고 하락 이후 거래자들이 보고 있는 것",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791948613,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ab9d359689c3b8e9c5da0fd43ce3db56b4dc72fd52af70f8fbdc1a038f394a7",
          "factorChanges": {
            "shortTermMomentum": -1
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
        },
        {
          "eventId": "3cef354b5b08ecefb8f9",
          "headline": "Intuit vs. Oracle: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791898441,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c54a1486ffbaec44322f5cf0ec9f749f92bda6288c612246dd3d567e31071b4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "063ae91f27f8d0b6eb55",
          "headline": "Oracle은 Project Jupiter를 위한 건설, 초기 시운전, 비상 백업 전력을 지원하기 위해 El Paso Electric과 제안된 에너지 서비스 계약을 체결했습니다. Oracle은 Powe에 1,000만 달러를 지불할 것으로 예상합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791887604,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=71bdb0b013116d6aa6749e6ee979df837c2ce1b1f0c9af28535aec7819973a33",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "594f2516acd176fbadbc",
          "headline": "Marvell Technology, Microsoft, Oracle은 클라우드, 하이퍼스케일 데이터 센터 인프라용 NIST FIPS 140-3 통합 HSM을 표준화하기 위한 개방형 컴퓨팅 프로젝트를 위해 협력합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791882444,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c12bb37719097f7c0b2fc7483e2631cd0d34bde01f579597636963ed5f7fed6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791999057,
      "signal": "중립·확인 대기",
      "netScore": -0.63,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "score": -2.1,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        },
        {
          "eventId": "f936f6c34499d7ea1519",
          "headline": "Salesforce는 Bank of America 이중 업그레이드를 3% 향상하여 $285 목표로 구매합니다. ServiceNow 3% 상승, Palantir는 안정적 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791812015,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a258d7684a16d146f726c3422d6110584e763e61f4a30988757bee7b2ebe0156",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791999057,
      "signal": "중립·확인 대기",
      "netScore": -1.75,
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
        },
        {
          "eventId": "2b226d1d8ac0ce4f9a78",
          "headline": "Ondas, Palantir와 협력하여 국방 임무를 위한 새로운 AI 회사 설립 – Regna AI에 대해 알아야 할 모든 것",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791819549,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a76eb6fc72068ad423ecf5b8d7f09ea5ff42219bc966571f719523afd60769a",
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
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791995758,
      "signal": "우호적 변화",
      "netScore": 4.07,
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
          "score": -1.4,
          "level": "주의"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d9d3b2378d839044548c",
          "headline": "2027년 NVIDIA, Micron, SanDisk의 불황은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791986452,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2aa9a3e2d69e5cd1e05aaf350b7b72e932a7e4450d89fea607fae6918891c5a6",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3b6cfd28e6ab98cff023",
          "headline": "AMD는 'AI의 대모'를 구현하기 위해 82억 달러를 지불하고 있습니다. 이것이 의미 있는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791985784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6e88b5b6a512029ea0798584fd4f3c996eea9aa437b5fc37ad188443f54ac0f9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "6c70d5cabc02f947a00a",
          "headline": "RBC Capital은 Eaton Corp에 대해 우수한 성과를 유지하고 목표 가격을 526달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791971442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140875c7aebdd7dcfbacf3afb55fa7c6ed926bc75ec995b71ae55fb5875f8c01",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "1addb11b9be6d1eb0d05",
          "headline": "예측: 대만 반도체에 투자된 5,000달러는 2030년까지 이만큼 가치가 있을 수 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791957000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22dc6f848e912b1b135824379a99c8259bf107f3900fe2756098012fce8bc3af",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 43,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791995758,
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
        },
        {
          "eventId": "3b6cfd28e6ab98cff023",
          "headline": "AMD는 'AI의 대모'를 구현하기 위해 82억 달러를 지불하고 있습니다. 이것이 의미 있는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791985784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6e88b5b6a512029ea0798584fd4f3c996eea9aa437b5fc37ad188443f54ac0f9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "6c70d5cabc02f947a00a",
          "headline": "RBC Capital은 Eaton Corp에 대해 우수한 성과를 유지하고 목표 가격을 526달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791971442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140875c7aebdd7dcfbacf3afb55fa7c6ed926bc75ec995b71ae55fb5875f8c01",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1addb11b9be6d1eb0d05",
          "headline": "예측: 대만 반도체에 투자된 5,000달러는 2030년까지 이만큼 가치가 있을 수 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791957000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22dc6f848e912b1b135824379a99c8259bf107f3900fe2756098012fce8bc3af",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "17e8bc014395bbfa78a4",
          "headline": "어플라이드 머티리얼즈의 50억 달러 ($) 규모의 AI 연구소는 칩 개발 시간을 절반으로 단축하고 실리콘 밸리의 에지를 복원하는 것을 목표로 하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791933326,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f07fb07fd469f49a83472d538a93b319ed2f6eac5d65bb90dfae21dcf5de2c8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "5f8cca6b3922c515aa05",
          "headline": "마이크론이 자사주 매입 승인을 350억 달러로 늘렸습니다. 예측: 지난 8년을 합친 것보다 내년에 더 많은 주식 환매 비용을 지출합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791925022,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b6955ca43d44c74d269de0cf97bff2c8a23a9deaea668938455529d0e44ad69",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 33,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791991200,
      "signal": "주의 강화",
      "netScore": -8.67,
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
          "score": -4.2,
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
        },
        {
          "eventId": "9c4a87773d69935c15e0",
          "headline": "Broadcom CEO와 Microsoft의 새로운 칩의 낙진으로 Nvidia 주가 하락",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1791901380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5357d59ba462092ba0951daa04ba4d5930935328d09cdc7640e88a4da1b71474",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89352e20c5623da91467",
          "headline": "TSMC, 엔비디아로부터 더 많은 AI 칩 비즈니스를 획득하기 위해 현지 생산에 베팅하는 Qnity – CEO Touts ‘Local-For-Local’ 전략",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791892487,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=07f7e1293bfceff350b21c3c2a931d44526b81df38b28fbc48883e45effe0916",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32f967075ae6da75daca",
          "headline": "Broadcom의 AI 내구성 경고로 인해 SK 하이닉스, 한국 삼성의 급격한 하락; 화웨이의 폐쇄로 엔비디아의 중국 AI 칩 점유율 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791876069,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce213edbafba98c415a3d70fc97558ca898768c8114e37c645dd5734d7100b39",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "10cb9dc94bc590e6d3b7",
          "headline": "Broadcom vs. Qualcomm: 2026년에는 어떤 칩 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791845461,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec4d56eebd1e30e3510ad274efc17621d59bfae4f1bf5e3515e2389cbe5f2fe9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3c9eac1fbf6538885fa8",
          "headline": "ASML CEO는 AI 칩 붐이 2028년 이후까지 이어질 수 있다고 말하지만 Broadcom은 자금 조달 병목 현상을 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03763869c9b37afc3b64c8a185a0158e0d0e75f9bc181bf6b35464ccab7a39e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "548f6c301934c4861a59",
          "headline": "Broadcom CEO는 많은 AI 투자자들이 '단서가 없다'고 말하고 붐을 카지노에 비유합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791833718,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e53128b24f96d0c45924090f12eca71e0af1b636b936cdaf76128a8c6ed181f5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791989152,
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
          "score": -3.32,
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
        },
        {
          "eventId": "77dab09016b89f854e11",
          "headline": "Apple이 HomeView를 공개하고 스마트 홈 라인업을 개편하면서 AAPL 주가가 사상 최고치를 경신했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791901113,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe7dc91d120147635028c37c1907e02248c7be48e6e430b4e324dc36e418e481",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "bfe9f9706a97cc08bba0",
          "headline": "AI 칩 주식이 대형 은행 수익보다 앞서 흔들리면서 나스닥 선물이 하락하고 다우가 프리마켓 상승: MU, SNDK, NVTS, NVDA, SPCX, ASTS, UNH, V 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791880650,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa46466387e74459886e2c10751d745820c496b1961be3ecb7e7e2a997a56b96",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "a74b340390291f96c8db",
          "headline": "Gemtek, Qualcomm, gFiber, Wi-Fi 8 광대역 게이트웨이에 Edge AI 도입을 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791880020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85a6cdd706d219971bbfe38bb95ec896c40ad11dc0401e13ae8ba658c2be4133",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "32f967075ae6da75daca",
          "headline": "Broadcom의 AI 내구성 경고로 인해 SK 하이닉스, 한국 삼성의 급격한 하락; 화웨이의 폐쇄로 엔비디아의 중국 AI 칩 점유율 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791876069,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce213edbafba98c415a3d70fc97558ca898768c8114e37c645dd5734d7100b39",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "a32b0c966e080949cf0b",
          "headline": "AAPL 주가 상승: BofA는 듀오 사전 주문 선적에 따라 iPhone 18 Pro 대기 시간을 단축했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791872151,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2af4c7a15b67dcc87e7f316e07b764f0451ffd96cb5d003b4317b70c45538634",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791983941,
      "signal": "주의 강화",
      "netScore": -2.09,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
        },
        {
          "eventId": "91f3850d3085d09b45da",
          "headline": "Arm Holdings plc(ARM)는 전문적인 컴퓨팅 수요가 단기 부족 현상보다 오래 지속되는 위치에 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791812467,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9e963e876ff5aabd9f55de9ccaa9ba75b82e33d113f4bd90eaffb79ec4441e5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791990011,
      "signal": "중립·확인 대기",
      "netScore": 0.97,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.92,
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
        },
        {
          "eventId": "594f2516acd176fbadbc",
          "headline": "Marvell Technology, Microsoft, Oracle은 클라우드, 하이퍼스케일 데이터 센터 인프라용 NIST FIPS 140-3 통합 HSM을 표준화하기 위한 개방형 컴퓨팅 프로젝트를 위해 협력합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791882444,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c12bb37719097f7c0b2fc7483e2631cd0d34bde01f579597636963ed5f7fed6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "acf4d22815e95001525e",
          "headline": "Marvell: 아무도 무시해서는 안 되는 숨겨진 150억 달러 규모의 AI 기회",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791867827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52a0b1236862111823b2d76102a7daf6666429a26f1b2f2ebf128d5ba8a80134",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791996241,
      "signal": "주의 강화",
      "netScore": -8.47,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.35,
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
          "score": -4.2,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -3.5,
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
          "eventId": "1f759bdeaa0470037f59",
          "headline": "인텔 대법원 사건: 수수료, 수탁자 및 숨겨진 위험",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791919752,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=427a4101b210c6e157e78f4ea953abb66aa712d361cf2afcaaa9db7404ed308b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3c75ba46e33fccd6c5e1",
          "headline": "2026년 더 나은 인공지능 주식: Intel vs. NVIDIA",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791867873,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c5de717c375e3454afcf7d794ab0bdad0f668d1d128e26fc7cfed9068fdaccce",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7ce4fdf3cd24de30fb25",
          "headline": "ASML은 수요일 3분기 실적 보고서를 앞두고 NV 주식을 매수하고 있습니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1791834281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa73c65e185f744d28d2d9b85b923c92475b509ecac999e84c223e97d3ed59a3",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791892487,
      "signal": "중립·확인 대기",
      "netScore": -0.84,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "eventId": "89352e20c5623da91467",
          "headline": "TSMC, 엔비디아로부터 더 많은 AI 칩 비즈니스를 획득하기 위해 현지 생산에 베팅하는 Qnity – CEO Touts ‘Local-For-Local’ 전략",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791892487,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=07f7e1293bfceff350b21c3c2a931d44526b81df38b28fbc48883e45effe0916",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7ce4fdf3cd24de30fb25",
          "headline": "ASML은 수요일 3분기 실적 보고서를 앞두고 NV 주식을 매수하고 있습니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1791834281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa73c65e185f744d28d2d9b85b923c92475b509ecac999e84c223e97d3ed59a3",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fd6679f6b598a4bf971d",
          "headline": "ASML 대 대만 반도체 제조: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791832802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec7291fcd6063f2c3392fddb5ddfc7a835a81e91f9262c2be1542e9e1292af74",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791989386,
      "signal": "우호적 변화",
      "netScore": 2.18,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.15,
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
          "score": -2.97,
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
          "eventId": "bdf38e3e3d4fcd4c3e60",
          "headline": "이번 주 ASML, TSMC 보고서: 6일간의 칩 재고 하락 이후 거래자들이 보고 있는 것",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791948613,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ab9d359689c3b8e9c5da0fd43ce3db56b4dc72fd52af70f8fbdc1a038f394a7",
          "factorChanges": {
            "shortTermMomentum": -1
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
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 15,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791996241,
      "signal": "주의 강화",
      "netScore": -4.55,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
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
        },
        {
          "eventId": "a51d26b9752c43cda2ea",
          "headline": "어플라이드 머티어리얼즈 vs. 어드밴스드 마이크로 디바이스: 2026년에는 어느 반도체 주식이 더 나은 매수인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791890667,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=364a9e1c94912a840d682870299c077db04bd253d0d99e776a0779198daa8bd4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7fae641e536ca6435396",
          "headline": "어플라이드 머티어리얼즈, AI 시대 반도체 혁신 가속화 위해 실리콘 밸리에 50억 달러 규모 EPIC 센터 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b586da0431213e06e5f1ec0ad603e0fd7b9218ad78623ac5867cbd65bb87ecd6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "34c531948d2dcfc99033",
          "headline": "어플라이드 머티리얼즈 vs. SK하이닉스: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791816302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4aaec38f4efec2de3cd1cd75cc95509b4ed5c3bbf07684b5028d79f837b0b00",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1792009966.5273862,
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
      "updatedAt": 1792009966.5273862,
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
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791995758,
      "signal": "우호적 변화",
      "netScore": 5.44,
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "eventId": "d9d3b2378d839044548c",
          "headline": "2027년 NVIDIA, Micron, SanDisk의 불황은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791986452,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2aa9a3e2d69e5cd1e05aaf350b7b72e932a7e4450d89fea607fae6918891c5a6",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3b6cfd28e6ab98cff023",
          "headline": "AMD는 'AI의 대모'를 구현하기 위해 82억 달러를 지불하고 있습니다. 이것이 의미 있는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791985784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6e88b5b6a512029ea0798584fd4f3c996eea9aa437b5fc37ad188443f54ac0f9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "efcfd7bbd0e5f1ea0f85",
          "headline": "마이크론의 자사주 매입은 지금 당장 눈을 뜨고 있어야 한다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791976502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f7cb24a3a65927852b4c2221290e26a68959c583f6a795301bbb621a0f752d63",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "6c70d5cabc02f947a00a",
          "headline": "RBC Capital은 Eaton Corp에 대해 우수한 성과를 유지하고 목표 가격을 526달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791971442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140875c7aebdd7dcfbacf3afb55fa7c6ed926bc75ec995b71ae55fb5875f8c01",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "메모리 ASP와 이익률 개선 가능성"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 47,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791983941,
      "signal": "주의 강화",
      "netScore": -2.52,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
        },
        {
          "eventId": "89352e20c5623da91467",
          "headline": "TSMC, 엔비디아로부터 더 많은 AI 칩 비즈니스를 획득하기 위해 현지 생산에 베팅하는 Qnity – CEO Touts ‘Local-For-Local’ 전략",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791892487,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=07f7e1293bfceff350b21c3c2a931d44526b81df38b28fbc48883e45effe0916",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bfe9f9706a97cc08bba0",
          "headline": "AI 칩 주식이 대형 은행 수익보다 앞서 흔들리면서 나스닥 선물이 하락하고 다우가 프리마켓 상승: MU, SNDK, NVTS, NVDA, SPCX, ASTS, UNH, V 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791880650,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa46466387e74459886e2c10751d745820c496b1961be3ecb7e7e2a997a56b96",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "863d377018cd56beb2f8",
          "headline": "AMAT 주가는 영업 시간 외 하락: Applied Materials는 채용 성장에 부응하지 않고 매출을 두 배로 늘리는 것을 목표로 합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791849153,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96bfbf5f6360fde67dd0b518fb0374611a32c0e6a1642e75f8e6648cc72e6c6a",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "badcb0a78d25a1c173f1",
          "headline": "S&P 500, Nasdaq 100은 칩 제조업체 약세로 인해 하락했고 Salesforce는 Dow에 도움을 얻었습니다 — META, MSFT, BMBL, CRM, SNAP 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791846618,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6357c13960c505bb16627b06cf8522405c0157e57a8d67035aa5d3bb2dc3c19",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791966900,
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
        },
        {
          "eventId": "77dab09016b89f854e11",
          "headline": "Apple이 HomeView를 공개하고 스마트 홈 라인업을 개편하면서 AAPL 주가가 사상 최고치를 경신했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791901113,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe7dc91d120147635028c37c1907e02248c7be48e6e430b4e324dc36e418e481",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "bfe9f9706a97cc08bba0",
          "headline": "AI 칩 주식이 대형 은행 수익보다 앞서 흔들리면서 나스닥 선물이 하락하고 다우가 프리마켓 상승: MU, SNDK, NVTS, NVDA, SPCX, ASTS, UNH, V 주식에 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791880650,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa46466387e74459886e2c10751d745820c496b1961be3ecb7e7e2a997a56b96",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "32f967075ae6da75daca",
          "headline": "Broadcom의 AI 내구성 경고로 인해 SK 하이닉스, 한국 삼성의 급격한 하락; 화웨이의 폐쇄로 엔비디아의 중국 AI 칩 점유율 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791876069,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce213edbafba98c415a3d70fc97558ca898768c8114e37c645dd5734d7100b39",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "a32b0c966e080949cf0b",
          "headline": "AAPL 주가 상승: BofA는 듀오 사전 주문 선적에 따라 iPhone 18 Pro 대기 시간을 단축했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791872151,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2af4c7a15b67dcc87e7f316e07b764f0451ffd96cb5d003b4317b70c45538634",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791909301,
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
        },
        {
          "eventId": "36eb53fc36995cb38e46",
          "headline": "Arista의 이연 수익은 69억 달러입니다. 현금흐름을 얼마나 설명하는가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791830648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc28dfa8701adecd7656721b0e6168dd7f6c3539f14ae91a325705c72f04cdd4",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1792009966.5273862,
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
      "updatedAt": 1792009966.5273862,
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
      "updatedAt": 1792009966.5273862,
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
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791972540,
      "signal": "중립·확인 대기",
      "netScore": 1.12,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "ae783093dfb57412b8d5",
          "headline": "Constellation의 43억 달러 Google 지원 업그레이드와 Vistra의 42억 달러 정부 대출: 어떤 원자력 계획이 주주에게 더 ​​나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791889500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2efb2780eeaacf08fc622ad2958a9f2a2d201895beaadc3643f4fd3878fc3179",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d2a571b91409053310b4",
          "headline": "Google과 Constellation이 3.6GW 거래에 서명하면서 주목을 받는 원자력 ETF",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791816480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ada70bb74ba4cbfdd8b1a7cb59ae2d5c44bcfa262db7955cb5c5e4351842352",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "41451ecd9cf14e9e6564",
          "headline": "별자리 에너지 주식을 상승시킬 수 있는 것은 무엇입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791814619,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=17c646f1fc0ceb51bcc95aa88eab0055b4d9320ec96cb78a03cc8d98ec6c57ba",
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
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791996110,
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
        },
        {
          "eventId": "ae783093dfb57412b8d5",
          "headline": "Constellation의 43억 달러 Google 지원 업그레이드와 Vistra의 42억 달러 정부 대출: 어떤 원자력 계획이 주주에게 더 ​​나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791889500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2efb2780eeaacf08fc622ad2958a9f2a2d201895beaadc3643f4fd3878fc3179",
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
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791971442,
      "signal": "중립·확인 대기",
      "netScore": -1.53,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.52,
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
          "eventId": "6c70d5cabc02f947a00a",
          "headline": "RBC Capital은 Eaton Corp에 대해 우수한 성과를 유지하고 목표 가격을 526달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791971442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140875c7aebdd7dcfbacf3afb55fa7c6ed926bc75ec995b71ae55fb5875f8c01",
          "factorChanges": {
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
      "updatedAt": 1792009966.5273862,
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
      "updatedAt": 1792009966.5273862,
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
      "updatedAt": 1792009966.5273862,
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
      "updatedAt": 1792009966.5273862,
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
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791975000,
      "signal": "주의 강화",
      "netScore": -3.43,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9b66ec5013dd2125de0c",
          "headline": "SK하이닉스, 서울 매도세 5회까지 연장…6% 하락 Western Digital 및 Seagate 하락 7%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791899887,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52995ef742ff58ecb27b036ea4b5cdf059388bc18b623076acddc44871df837a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5d1224f7b47cd18c0b36",
          "headline": "지금 Seagate에 1,000달러를 투자하면 2030년까지의 가치는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791820845,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a8c912032d343b23bbc9897f1b66cab857bb6da899c4677d3f0ea7105521980",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1792009966.5273862,
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
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791818700,
      "signal": "중립·확인 대기",
      "netScore": -1.54,
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
          "eventId": "2b230d56261beba20c0f",
          "headline": "84% 랠리 이후 Comfort Systems의 높은 가치 평가: 주의가 정당합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791818700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b6e6b1c67f6dce3d886e1da456fb768a35624040411522b462098c00f737479",
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1792009966.5273862,
      "dataAsOf": 1791952386,
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    }
  }
};
